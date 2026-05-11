// Refresh data/scan-cache/<source>.jsonl using yt-dlp --flat-playlist.
//
// Flat-playlist is a single lightweight request per channel — it avoids the
// per-video --dump-json requests that trigger YouTube rate limiting on
// datacenter IPs.  Duration is approximate but sufficient for plan.ts filtering.
//
// Output format (simplified JSONL, not raw yt-dlp dump-json):
//   {"id":"...","title":"...","duration":14360,"upload_date":"20260101"}
//
// Usage:
//   pnpm run cache:refresh                        # all sources, default limit
//   pnpm run cache:refresh -- --id=acquired       # single source

import { resolve, join } from 'node:path'
import { mkdirSync, writeFileSync } from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { run } from './lib/spawn.ts'
import { log } from './lib/log.ts'
import type { SourcesFile } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const CACHE_DIR = resolve(ROOT, 'data/scan-cache')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const defaultLimit = Number(
  process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 350,
)
const dateAfter = process.argv.find(a => a.startsWith('--after='))?.split('=')[1] ?? '20260101'

const isWin = process.platform === 'win32'

function resolveCmd(cmd: string): string {
  if (!isWin) return cmd
  if (/\.(exe|cmd|bat|com|ps1)$/i.test(cmd)) return cmd
  return `${cmd}.exe`
}

async function fetchOne(source: { id: string; channel: string }, limit: number): Promise<void> {
  const outPath = join(CACHE_DIR, `${source.id}.jsonl`)
  log.info(`${source.id} → ${outPath} (limit ${limit})`)

  const args = [
    '--flat-playlist',
    '--print', '%(id)s\t%(title)s\t%(duration)s\t%(upload_date)s',
    '--playlist-end', String(limit),
    '--no-check-certificates',
  ]
  const cp = process.env.YTDLP_COOKIES
  if (cp) {
    args.push('--cookies', cp)
  }
  args.push(source.channel)

  const { stdout, stderr } = await run(resolveCmd('yt-dlp'), args, { reject: false })
  if (stderr && !stdout.trim()) {
    log.warn(`  ${source.id}: ${stderr.trim().split('\n').slice(-2).join(' | ')}`)
    return
  }

  const lines = stdout.split('\n').filter(l => l.trim()).slice(0, limit)
  const entries: string[] = []
  for (const line of lines) {
    const [id, title, durStr, uploadDate] = line.split('\t')
    if (!id || id === 'NA') continue
    const duration = parseFloat(durStr)
    if (isNaN(duration) || duration <= 0) continue
    entries.push(JSON.stringify({
      id,
      title: (title || '').trim(),
      duration,
      upload_date: (uploadDate && uploadDate !== 'NA') ? uploadDate : '',
    }))
  }

  writeFileSync(outPath, entries.join('\n') + (entries.length ? '\n' : ''), 'utf-8')
  log.ok(`  ${source.id}: ${entries.length} entries`)
}

async function main() {
  log.step(`Refresh scan-cache — flat-playlist mode`)

  mkdirSync(CACHE_DIR, { recursive: true })

  const sourcesFile = readYaml<SourcesFile>(SOURCES_PATH)
  const targets = onlyId
    ? sourcesFile.sources.filter(s => s.id === onlyId)
    : sourcesFile.sources

  if (targets.length === 0) {
    log.warn('no sources to refresh')
    return
  }

  log.info(`refreshing ${targets.length} source(s) sequentially`)

  for (let i = 0; i < targets.length; i++) {
    const s = targets[i]
    const limit = (s as any).cache_limit ?? defaultLimit
    await fetchOne(s, limit).catch(err => {
      log.err(`${s.id} failed: ${err.message}`)
    })
    if (i < targets.length - 1) {
      await new Promise(r => setTimeout(r, 5_000))
    }
  }

  log.ok('\nCache refresh complete')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
