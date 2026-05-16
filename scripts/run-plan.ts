// Execute pending entries in data/plans/*.yml:
//   1. download RSS transcript → data/transcripts/<id>.txt
//   2. scaffold episodes/<id>/ from _templates
//   3. invoke claude -p to generate slides.md + meta.yml
//   4. update plan entry status (pending → generated | audit_failed | failed)
//
// Usage:
//   pnpm run plan:run                              # all pending across all plans
//   pnpm run plan:run -- --id=lex-fridman          # only this source
//   pnpm run plan:run -- --limit=3                 # process at most N episodes
//   pnpm run plan:run -- --concurrency=2           # parallel generation
//   pnpm run plan:run -- --dry-run                 # show what would be done
//
// Status updates are written back to data/plans/<source>.yml after each episode.
// This means interruptions are safe — re-run picks up from where we left off.

import { resolve, join } from 'node:path'
import {
  readFileSync, writeFileSync, existsSync, mkdirSync, cpSync, readdirSync,
} from 'node:fs'
import { spawn } from 'node:child_process'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { cleanTranscript, fetchText, preferredTranscript } from './lib/rss.ts'
import { log } from './lib/log.ts'
import { run } from './lib/spawn.ts'

const ROOT = process.cwd()
const isWin = process.platform === 'win32'
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const PLANS_DIR = resolve(ROOT, 'data/plans')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = resolve(EPISODES_DIR, '_templates')
const PROMPTS_DIR = resolve(ROOT, 'scripts/prompts')
const RULES_FILE = resolve(PROMPTS_DIR, 'slides-system-rules.md')
const TASK_FILE = resolve(PROMPTS_DIR, 'slides-task.md')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const limit = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 9999)
const concurrency = Number(process.argv.find(a => a.startsWith('--concurrency='))?.split('=')[1] ?? 1)
const dryRun = process.argv.includes('--dry-run')
const onlyCategory = process.argv.find(a => a.startsWith('--category='))?.split('=')[1]

// Shared state for generation rate-limit detection and token tracking
let generationRateLimited = false
let workspaceInstallPromise: Promise<boolean> | null = null
const stats = {
  generated: 0,
  failed: 0,
  skippedRateLimit: 0,
  totalInputTokens: 0,
  totalOutputTokens: 0,
  totalDurationMs: 0,
  episodes: [] as { id: string; inputTokens: number; outputTokens: number; durationMs: number; status: string }[],
}

interface PlanEntry {
  id: string
  title: string
  duration: number
  published?: string
  published_sort?: string
  url: string
  audio_url?: string
  image?: string
  transcript_url?: string
  transcript_type?: string
  transcripts?: { url: string; type: string; language?: string }[]
  status: 'pending' | 'needs_transcript' | 'downloaded' | 'generated' | 'audit_failed' | 'failed'
  category?: string
  priority: number
}

interface PlanFile {
  source: string
  refreshed_at: string
  min_duration: number
  min_date: string
  total_candidates: number
  done: number
  pending: number
  needs_transcript?: number
  downloaded?: number
  episodes: PlanEntry[]
}

function loadPlans(): { source: string; path: string; plan: PlanFile }[] {
  if (!existsSync(PLANS_DIR)) {
    log.err(`${PLANS_DIR} not found — run \`pnpm run plan\` first`)
    process.exit(1)
  }
  const files = readdirSync(PLANS_DIR).filter(f => f.endsWith('.yml'))
  return files.map(f => {
    const path = join(PLANS_DIR, f)
    const plan = readYaml<PlanFile>(path)
    return { source: plan.source, path, plan }
  })
}

function savePlan(path: string, plan: PlanFile): void {
  plan.pending = plan.episodes.filter(e => e.status === 'pending' || e.status === 'audit_failed').length
  plan.needs_transcript = plan.episodes.filter(e => e.status === 'needs_transcript').length
  plan.downloaded = plan.episodes.filter(e => e.status === 'downloaded').length
  plan.done = plan.episodes.filter(e => e.status === 'generated').length
  writeYaml(path, plan)
}

function scaffoldEpisode(id: string): void {
  const dir = join(EPISODES_DIR, id)
  if (existsSync(join(dir, 'package.json'))) return
  mkdirSync(dir, { recursive: true })
  // Copy package.json, rewrite name
  const pkg = JSON.parse(readFileSync(join(TEMPLATES_DIR, 'package.json'), 'utf-8'))
  pkg.name = `episode-${id}`
  writeFileSync(join(dir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')
  // Copy global-bottom.vue
  cpSync(join(TEMPLATES_DIR, 'global-bottom.vue'), join(dir, 'global-bottom.vue'))
  cpSync(join(TEMPLATES_DIR, 'public'), join(dir, 'public'), { recursive: true })
}

async function ensureRssTranscript(entry: PlanEntry): Promise<void> {
  const txtPath = join(TRANSCRIPTS_DIR, `${entry.id}.txt`)
  if (existsSync(txtPath)) {
    log.raw(`  transcript exists: ${entry.id}.txt`)
    return
  }
  mkdirSync(TRANSCRIPTS_DIR, { recursive: true })
  const transcript = entry.transcript_url
    ? { url: entry.transcript_url, type: entry.transcript_type || '' }
    : preferredTranscript(entry.transcripts || [])
  if (!transcript?.url) {
    throw new Error(`No RSS transcript URL for ${entry.id}`)
  }
  log.raw(`  downloading transcript ${entry.id}`)
  const raw = await fetchText(transcript.url)
  const txt = cleanTranscript(raw, transcript.type || transcript.url)
  writeFileSync(txtPath, txt, 'utf-8')
  log.ok(`    cleaned → ${txtPath} (${txt.length} chars)`)
}

function resolveClaudeBin(): string {
  if (isWin) {
    const p = 'C:\\nvm4w\\nodejs\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe'
    if (existsSync(p)) return p
  }
  return 'claude'
}

function renderTask(entry: PlanEntry, sourceId: string): string {
  return readFileSync(TASK_FILE, 'utf-8')
    .replaceAll('{{ID}}', entry.id)
    .replaceAll('{{SOURCE}}', sourceId)
    .replaceAll('{{TITLE}}', entry.title)
    .replaceAll('{{URL}}', entry.url || '')
    .replaceAll('{{PUBLISHED}}', formatPublishedMonth(entry))
    .replaceAll('{{THUMBNAIL}}', entry.image || '')
    .replaceAll('{{DURATION}}', formatDuration(entry.duration))
}

function formatPublishedMonth(entry: PlanEntry): string {
  const key = entry.published_sort || ''
  if (/^\d{8}$/.test(key)) return `${key.slice(0, 4)}-${key.slice(4, 6)}`
  const time = Date.parse(entry.published || '')
  if (Number.isNaN(time)) return ''
  const date = new Date(time)
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`
}

function formatDuration(seconds: number): string {
  if (!seconds) return ''
  const minutes = Math.round(seconds / 60)
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}h${m}m` : `${m}m`
}

function hasGeneratedArtifacts(id: string): boolean {
  const dir = join(EPISODES_DIR, id)
  return existsSync(join(dir, 'slides.md'))
    && existsSync(join(dir, 'meta.yml'))
    && existsSync(join(dir, 'article.html'))
}

async function ensureWorkspaceLinks(): Promise<boolean> {
  if (!workspaceInstallPromise) {
    workspaceInstallPromise = (async () => {
      log.raw('  refreshing pnpm workspace links')
      const result = await run('pnpm', [
        'install',
        '--no-frozen-lockfile',
        '--ignore-scripts',
      ], { cwd: ROOT, reject: false })
      if (result.code === 0) return true
      log.err('  pnpm workspace install failed')
      const output = `${result.stdout}\n${result.stderr}`.trim()
      if (output) log.raw(output.split('\n').slice(-40).join('\n'))
      return false
    })()
  }
  return workspaceInstallPromise
}

async function auditGeneratedLayout(id: string): Promise<boolean> {
  const installOk = await ensureWorkspaceLinks()
  if (!installOk) return false

  log.raw(`  auditing layout for ${id}`)
  const result = await run('npx', [
    'tsx',
    'scripts/audit-layout.ts',
    `--id=${id}`,
  ], { cwd: ROOT, reject: false })

  if (result.code === 0) return true
  log.err(`  layout audit failed for ${id}`)
  const output = `${result.stdout}\n${result.stderr}`.trim()
  if (output) log.raw(output.split('\n').slice(-40).join('\n'))
  return false
}

interface GenerateResult {
  ok: boolean
  inputTokens: number
  outputTokens: number
  durationMs: number
  isRateLimit: boolean
}

function parseTokensFromLog(logPath: string): { inputTokens: number; outputTokens: number; isRateLimit: boolean } {
  let inputTokens = 0, outputTokens = 0, isRateLimit = false
  try {
    const content = readFileSync(logPath, 'utf-8').trim()
    if (content.includes("hit your limit") || content.includes("rate limit")) {
      isRateLimit = true
    }
    // Parse stream-json: each line is a JSON event, look for result type
    for (const line of content.split('\n')) {
      try {
        const evt = JSON.parse(line)
        if (evt.type === 'result' && evt.result?.usage) {
          inputTokens = evt.result.usage.input_tokens ?? 0
          outputTokens = evt.result.usage.output_tokens ?? 0
        }
      } catch {}
    }
  } catch {}
  return { inputTokens, outputTokens, isRateLimit }
}

function generateOne(entry: PlanEntry, sourceId: string): Promise<GenerateResult> {
  const claudeBin = resolveClaudeBin()
  const systemRules = readFileSync(RULES_FILE, 'utf-8')
  const taskPrompt = renderTask(entry, sourceId)
  const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
  mkdirSync(join(ROOT, 'logs'), { recursive: true })
  const fs = require('node:fs')
  const logFd = fs.openSync(logPath, 'w')
  const startTime = Date.now()

  log.raw(`  spawning claude -p for ${entry.id} → logs/${entry.id}.log`)
  return new Promise(resolveFn => {
    const child = spawn(claudeBin, [
      '-p',
      '--model', 'opus',
      '--verbose',
      '--output-format', 'stream-json',
      '--append-system-prompt', systemRules,
      '--add-dir', EPISODES_DIR,
      '--add-dir', TRANSCRIPTS_DIR,
      '--allowedTools', 'Read,Write,Edit,Bash,Grep,Glob',
      '--effort', 'max',
      '--permission-mode', 'bypassPermissions',
      taskPrompt,
    ], {
      cwd: ROOT,
      stdio: ['ignore', logFd, logFd],
      shell: false,
      windowsHide: true,
    })
    child.on('close', code => {
      fs.closeSync(logFd)
      const durationMs = Date.now() - startTime
      const { inputTokens, outputTokens, isRateLimit } = parseTokensFromLog(logPath)
      resolveFn({ ok: code === 0, inputTokens, outputTokens, durationMs, isRateLimit })
    })
    child.on('error', err => {
      log.err(`  spawn error: ${err.message}`)
      fs.closeSync(logFd)
      resolveFn({ ok: false, inputTokens: 0, outputTokens: 0, durationMs: Date.now() - startTime, isRateLimit: false })
    })
  })
}

async function processEntry(
  entry: PlanEntry,
  sourceId: string,
  plan: PlanFile,
  planPath: string,
): Promise<void> {
  log.step(`[${sourceId}] ${entry.id} — ${entry.title.slice(0, 70)}`)

  if (dryRun) {
    log.info('  (dry-run) would download + generate')
    return
  }

  const retryAuditOnly = entry.status === 'audit_failed' && hasGeneratedArtifacts(entry.id)

  if (entry.status === 'needs_transcript') {
    entry.status = 'pending'
    savePlan(planPath, plan)
  }

  try {
    await ensureRssTranscript(entry)
    if (generationRateLimited) {
      log.warn('  queue stopped after transcript download — entry stays pending')
      return
    }
    if (!retryAuditOnly) entry.status = 'downloaded'
    savePlan(planPath, plan)
  } catch (e: any) {
    log.err(`  download failed: ${e.message}`)
    entry.status = 'failed'
    savePlan(planPath, plan)
    return
  }

  scaffoldEpisode(entry.id)

  if (retryAuditOnly) {
    const layoutOk = await auditGeneratedLayout(entry.id)
    entry.status = layoutOk ? 'generated' : 'audit_failed'
    savePlan(planPath, plan)
    log.ok(`  → status=${entry.status}`)
    stats.episodes.push({
      id: entry.id,
      inputTokens: 0,
      outputTokens: 0,
      durationMs: 0,
      status: entry.status,
    })
    if (entry.status === 'generated') stats.generated++
    else stats.failed++
    return
  }

  if (generationRateLimited) {
    entry.status = 'pending'
    savePlan(planPath, plan)
    log.warn('  queue stopped before generation — entry stays pending')
    return
  }

  const result = await generateOne(entry, sourceId)
  const artifactsOk = hasGeneratedArtifacts(entry.id)
  const layoutOk = result.ok && artifactsOk
    ? await auditGeneratedLayout(entry.id)
    : false
  entry.status = result.ok && artifactsOk && layoutOk
    ? 'generated'
    : result.ok && artifactsOk
      ? 'audit_failed'
      : 'failed'
  savePlan(planPath, plan)

  const durationStr = (result.durationMs / 1000 / 60).toFixed(1) + 'min'
  const tokenStr = result.inputTokens > 0
    ? `${(result.inputTokens / 1000).toFixed(0)}k in / ${(result.outputTokens / 1000).toFixed(0)}k out`
    : 'no token data'
  log.ok(`  → status=${entry.status}  ⏱ ${durationStr}  📊 ${tokenStr}`)

  // Track stats
  stats.episodes.push({
    id: entry.id,
    inputTokens: result.inputTokens,
    outputTokens: result.outputTokens,
    durationMs: result.durationMs,
    status: entry.status,
  })
  stats.totalInputTokens += result.inputTokens
  stats.totalOutputTokens += result.outputTokens
  stats.totalDurationMs += result.durationMs
  if (entry.status === 'generated') stats.generated++
  else stats.failed++

  if (result.isRateLimit) {
    generationRateLimited = true
    log.err('  ⚠ Rate limit hit — stopping queue, remaining entries stay pending')
  }

  if (!result.ok && !result.isRateLimit) {
    const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
    try {
      const tail = readFileSync(logPath, 'utf-8').trim().split('\n').slice(-20).join('\n')
      log.err(`  ── log tail ──\n${tail}\n  ── end ──`)
    } catch {}
  }
}

async function main() {
  log.step(`Run-plan — concurrency=${concurrency}, limit=${limit}${dryRun ? ' (DRY RUN)' : ''}`)

  const plans = loadPlans()
  const targetPlans = onlyId ? plans.filter(p => p.source === onlyId) : plans
  if (targetPlans.length === 0) {
    log.warn('no matching plans')
    return
  }

  // Flatten all pending entries with their plan context, sorted by published date desc
  const allPending: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] = []
  for (const { source, path, plan } of targetPlans) {
    for (const entry of plan.episodes) {
      if (entry.status === 'pending' || entry.status === 'downloaded' || entry.status === 'audit_failed' || (entry.status === 'needs_transcript' && existsSync(join(TRANSCRIPTS_DIR, `${entry.id}.txt`)))) {
        allPending.push({ entry, sourceId: source, plan, planPath: path })
      }
    }
  }
  // Filter by category if --category specified
  if (onlyCategory) {
    const filtered = allPending.filter(p => p.entry.category === onlyCategory)
    allPending.length = 0
    allPending.push(...filtered)
  }

  const categoryPriority: Record<string, number> = {
    'ai-tech': 0, 'mind-body': 1, 'science': 2, 'business': 3, 'culture': 4,
  }
  allPending.sort((a, b) => {
    const ca = categoryPriority[a.entry.category ?? ''] ?? 99
    const cb = categoryPriority[b.entry.category ?? ''] ?? 99
    if (ca !== cb) return ca - cb
    return (b.entry.published_sort ?? '').localeCompare(a.entry.published_sort ?? '')
  })

  if (allPending.length === 0) {
    log.info('No pending entries — all plans up to date')
    return
  }

  const toProcess = allPending.slice(0, limit)
  log.info(`${allPending.length} pending, will process ${toProcess.length}${onlyCategory ? ` (category: ${onlyCategory})` : ''}`)

  // Concurrency: run N at a time
  const queue = [...toProcess]
  const workers: Promise<void>[] = []
  async function worker(): Promise<void> {
    while (queue.length > 0) {
      if (generationRateLimited) {
        stats.skippedRateLimit += queue.length
        queue.length = 0
        break
      }
      const item = queue.shift()
      if (!item) break
      try {
        await processEntry(item.entry, item.sourceId, item.plan, item.planPath)
      } catch (err: any) {
        log.err(`  UNHANDLED in ${item.entry.id}: ${err.stack || err.message}`)
        item.entry.status = 'failed'
        savePlan(item.planPath, item.plan)
      }
    }
  }
  for (let i = 0; i < concurrency; i++) workers.push(worker())
  await Promise.all(workers)

  // Print summary
  log.ok('\n══════════ Run-plan Summary ══════════')
  log.ok(`  ✅ Generated: ${stats.generated}`)
  if (stats.failed > 0) log.err(`  ❌ Failed: ${stats.failed}`)
  if (stats.skippedRateLimit > 0) log.warn(`  ⏭ Skipped (rate limit): ${stats.skippedRateLimit}`)
  log.ok(`  ⏱ Total time: ${(stats.totalDurationMs / 1000 / 60).toFixed(1)} min`)
  if (stats.totalInputTokens > 0) {
    log.ok(`  📊 Total tokens: ${(stats.totalInputTokens / 1000).toFixed(0)}k input / ${(stats.totalOutputTokens / 1000).toFixed(0)}k output`)
  }
  if (stats.episodes.length > 0) {
    log.ok('  ── Per episode ──')
    for (const ep of stats.episodes) {
      const d = (ep.durationMs / 1000 / 60).toFixed(1)
      const t = ep.inputTokens > 0
        ? `${(ep.inputTokens / 1000).toFixed(0)}k/${(ep.outputTokens / 1000).toFixed(0)}k`
        : '-'
      log.ok(`    ${ep.status === 'generated' ? '✅' : '❌'} ${ep.id}  ${d}min  ${t}`)
    }
  }
  log.ok('══════════════════════════════════════')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
