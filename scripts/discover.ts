// Scan all sources in sources.yml, find new episodes, apply keyword filter,
// write to data/queue.yml.
//
// Usage: pnpm run discover [--limit N]

import { resolve } from 'node:path'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { fetchText, parseRssFeed } from './lib/rss.ts'
import { log } from './lib/log.ts'
import type { SourcesFile, EpisodesFile, QueueFile, QueueEntry } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const EPISODES_PATH = resolve(ROOT, 'episodes.yml')
const QUEUE_PATH = resolve(ROOT, 'data/queue.yml')

const LIMIT = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 15)

async function main() {
  log.step(`Discover — scanning sources (limit ${LIMIT} per source)`)

  const sourcesFile = readYaml<SourcesFile>(SOURCES_PATH)
  const episodesFile = readYaml<EpisodesFile>(EPISODES_PATH, { episodes: [] })
  const existingIds = new Set(episodesFile.episodes.map(e => e.id))

  const newEntries: QueueEntry[] = []

  for (const source of sourcesFile.sources) {
    log.info(`${source.name} (${source.id})`)
    if (!source.rss_url) {
      log.warn(`  missing rss_url, skipping`)
      continue
    }
    let episodes
    try {
      episodes = parseRssFeed(await fetchText(source.rss_url), source.id).slice(0, LIMIT)
    } catch (e: any) {
      log.err(`  failed to fetch ${source.rss_url}: ${e.message}`)
      continue
    }
    log.raw(`found ${episodes.length} recent episodes`)

    const keywords = source.filter_keywords ?? []
    const keywordPatterns = keywords.map(
      k => new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i'),
    )
    const perSourceLimit = source.episode_limit ?? 2
    let accepted = 0

    for (const episode of episodes) {
      if (accepted >= perSourceLimit) break
      if (existingIds.has(episode.id)) continue

      if (keywordPatterns.length > 0) {
        const matched = keywordPatterns.some(re => re.test(episode.title))
        if (!matched) continue
      }

      newEntries.push({
        id: episode.id,
        source: source.id,
        title: episode.title,
        url: episode.url,
        published: episode.published,
      })
      accepted++
      log.ok(`  queued ${episode.id} — ${episode.title.slice(0, 60)}`)
    }
  }

  if (newEntries.length === 0) {
    log.info('No new episodes matched filters. Queue unchanged.')
    return
  }

  // merge with existing queue (de-dup by id)
  const existingQueue = readYaml<QueueFile>(QUEUE_PATH, { queue: [] })
  const existingQueueIds = new Set(existingQueue.queue.map(q => q.id))
  const mergedQueue = [
    ...existingQueue.queue,
    ...newEntries.filter(e => !existingQueueIds.has(e.id)),
  ]

  writeYaml(QUEUE_PATH, { queue: mergedQueue })
  log.ok(`\nWrote ${mergedQueue.length} entries to ${QUEUE_PATH} (+${newEntries.length} new)`)
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
