// Generate or update data/plans/<source>.yml from RSS-backed data/scan-cache/*.jsonl.
//
// Rules:
// 1. Include episodes with published_sort >= source.min_date (default 20260101)
// 2. Include episodes with duration >= source.min_duration (default 3600 seconds)
// 3. Include episodes NOT already in episodes.yml (not yet generated)
// 4. Optionally apply source.filter_keywords (word-boundary match on title)
//
// Existing plan entries are preserved (status is not reset) so we can merge
// new discoveries into an existing plan without losing progress.
//
// Usage:
//   pnpm run plan                         # regenerate all plans
//   pnpm run plan -- --id=lex-fridman     # single source
//   pnpm run plan -- --min-duration=5400  # override threshold to 90 min

import { resolve, join } from 'node:path'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { log } from './lib/log.ts'
import type { SourcesFile, Source, EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const CACHE_DIR = resolve(ROOT, 'data/scan-cache')
const PLANS_DIR = resolve(ROOT, 'data/plans')
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const overrideDuration = process.argv.find(a => a.startsWith('--min-duration='))?.split('=')[1]
const overrideDate = process.argv.find(a => a.startsWith('--min-date='))?.split('=')[1]

interface PlanEntry {
  id: string
  title: string
  duration: number
  published: string
  published_sort: string
  url: string
  audio_url?: string
  image?: string
  transcript_url?: string
  transcript_type?: string
  summary?: string
  status: 'pending' | 'needs_transcript' | 'downloaded' | 'generated' | 'failed'
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
  needs_transcript: number
  downloaded: number
  episodes: PlanEntry[]
}

function loadCache(sourceId: string): any[] {
  const path = join(CACHE_DIR, `${sourceId}.jsonl`)
  if (!existsSync(path)) return []
  return readFileSync(path, 'utf-8').split('\n').filter(Boolean).map(l => {
    try { return JSON.parse(l) } catch { return null }
  }).filter(Boolean)
}

function emptyPlan(source: Source): PlanFile {
  return {
    source: source.id,
    refreshed_at: new Date().toISOString(),
    min_duration: Number(overrideDuration ?? (source as any).min_duration ?? 3600),
    min_date: String(overrideDate ?? (source as any).min_date ?? '20260101'),
    total_candidates: 0,
    done: 0,
    pending: 0,
    needs_transcript: 0,
    downloaded: 0,
    episodes: [],
  }
}

function getExistingEpisodeIds(): Set<string> {
  const ids = new Set<string>()
  if (!existsSync(EPISODES_DIR)) return ids
  for (const entry of readdirSync(EPISODES_DIR)) {
    if (entry.startsWith('_')) continue  // skip _templates
    const metaPath = join(EPISODES_DIR, entry, 'meta.yml')
    if (existsSync(metaPath)) {
      try {
        const meta = readYaml<EpisodeMeta>(metaPath)
        if (meta.status === 'generated') ids.add(meta.id)
      } catch {}
    }
  }
  return ids
}

function keywordMatch(title: string, keywords: string[] | undefined): boolean {
  if (!keywords || keywords.length === 0) return true
  return keywords.some(k => {
    const re = new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
    return re.test(title)
  })
}

function loadExistingPlan(sourceId: string): PlanFile | null {
  const path = join(PLANS_DIR, `${sourceId}.yml`)
  if (!existsSync(path)) return null
  try {
    return readYaml<PlanFile>(path)
  } catch {
    return null
  }
}

function planOneSource(source: Source, existingGenerated: Set<string>): PlanFile | null {
  const cache = loadCache(source.id)
  if (cache.length === 0) {
    log.warn(`${source.id}: empty cache, writing empty plan`)
    return emptyPlan(source)
  }

  const minDuration = Number(overrideDuration ?? (source as any).min_duration ?? 3600)
  const minDate = String(overrideDate ?? (source as any).min_date ?? '20260101')
  const useKeywords = (source as any).use_keywords_in_plan ?? false

  const existingPlan = loadExistingPlan(source.id)
  const existingEntries = new Map<string, PlanEntry>()
  if (existingPlan) {
    for (const ep of existingPlan.episodes) existingEntries.set(ep.id, ep)
  }

  // Filter cache entries
  const candidates: PlanEntry[] = []
  for (const v of cache) {
    if (typeof v.duration !== 'number') continue
    if (v.duration < minDuration) continue
    const dateKey = String(v.published_sort || v.upload_date || '')
    if (dateKey && dateKey < minDate) continue
    // Skip if already generated
    if (existingGenerated.has(v.id)) continue
    // Keyword filter
    if (useKeywords && !keywordMatch(v.title || '', source.filter_keywords)) continue

    const transcript = (v.transcripts || []).find((t: any) => t.type === 'text/plain') ||
      (v.transcripts || []).find((t: any) => String(t.url || '').endsWith('.txt')) ||
      (v.transcripts || [])[0]
    const hasLocalTranscript = existsSync(join(TRANSCRIPTS_DIR, `${v.id}.txt`))

    const existing = existingEntries.get(v.id)
    const hasTranscript = Boolean(transcript?.url || hasLocalTranscript)
    let nextStatus: PlanEntry['status']
    if (existing?.status === 'generated' || existing?.status === 'failed') nextStatus = existing.status
    else if (hasTranscript) nextStatus = existing?.status === 'downloaded' ? 'downloaded' : 'pending'
    else nextStatus = 'needs_transcript'
    candidates.push({
      id: v.id,
      title: v.title || '(no title)',
      duration: v.duration,
      published: v.published || '',
      published_sort: dateKey,
      url: v.url || v.audio_url || '',
      audio_url: v.audio_url,
      image: v.image,
      transcript_url: transcript?.url,
      transcript_type: transcript?.type,
      summary: v.summary,
      status: nextStatus,
      priority: existing?.priority ?? 1,
    })
  }

  // Sort: newest first
  candidates.sort((a, b) => b.published_sort.localeCompare(a.published_sort))

  const pending = candidates.filter(e => e.status === 'pending').length
  const done = candidates.filter(e => e.status === 'generated').length
  const needsTranscript = candidates.filter(e => e.status === 'needs_transcript').length
  const downloaded = candidates.filter(e => e.status === 'downloaded').length

  return {
    source: source.id,
    refreshed_at: new Date().toISOString(),
    min_duration: minDuration,
    min_date: minDate,
    total_candidates: candidates.length,
    done,
    pending,
    needs_transcript: needsTranscript,
    downloaded,
    episodes: candidates,
  }
}

async function main() {
  log.step('Plan — generating/updating plan files')

  const sourcesFile = readYaml<SourcesFile>(SOURCES_PATH)
  const existingGenerated = getExistingEpisodeIds()
  log.info(`${existingGenerated.size} episodes already generated`)

  const targets = onlyId
    ? sourcesFile.sources.filter(s => s.id === onlyId)
    : sourcesFile.sources

  // Ensure plans dir
  const fs = await import('node:fs/promises')
  await fs.mkdir(PLANS_DIR, { recursive: true })

  const summary: { id: string; total: number; pending: number; needsTranscript: number; downloaded: number; done: number }[] = []

  for (const source of targets) {
    const plan = planOneSource(source, existingGenerated)
    if (!plan) continue
    const path = join(PLANS_DIR, `${source.id}.yml`)
    writeYaml(path, plan)
    const needs = plan.needs_transcript ?? 0
    const downloaded = plan.downloaded ?? 0
    log.ok(`  ${source.id}: ${plan.total_candidates} candidates (${plan.pending} pending, ${downloaded} downloaded, ${needs} needs transcript, ${plan.done} done) → ${path}`)
    summary.push({ id: source.id, total: plan.total_candidates, pending: plan.pending, needsTranscript: needs, downloaded, done: plan.done })
  }

  // Print summary table
  const totalPending = summary.reduce((a, s) => a + s.pending, 0)
  const totalNeedsTranscript = summary.reduce((a, s) => a + s.needsTranscript, 0)
  const totalDownloaded = summary.reduce((a, s) => a + s.downloaded, 0)
  const totalTotal = summary.reduce((a, s) => a + s.total, 0)
  log.step(`Summary — ${totalPending} pending / ${totalDownloaded} downloaded / ${totalNeedsTranscript} needs transcript / ${totalTotal} total across ${summary.length} sources`)
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
