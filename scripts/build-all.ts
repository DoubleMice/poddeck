import { resolve, join, basename } from 'node:path'
import { existsSync, mkdirSync, cpSync, rmSync, readdirSync, statSync } from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { run } from './lib/spawn.ts'
import { log } from './lib/log.ts'
import type { EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const LANDING_DIR = resolve(ROOT, 'landing')
const DIST_DIR = resolve(ROOT, 'dist')

function resolveEpisodeArticlePath(id: string, meta: EpisodeMeta): string | null {
  const declared = meta.article_path ? resolve(ROOT, meta.article_path) : null
  if (declared && existsSync(declared)) return declared

  const fallback = join(EPISODES_DIR, id, 'article.html')
  if (existsSync(fallback)) return fallback

  return null
}

function generatedEpisodeIds(): string[] {
  if (!existsSync(EPISODES_DIR)) return []
  const ids: string[] = []
  for (const entry of readdirSync(EPISODES_DIR)) {
    if (entry.startsWith('_')) continue
    const dir = join(EPISODES_DIR, entry)
    if (!statSync(dir).isDirectory()) continue
    const metaPath = join(dir, 'meta.yml')
    if (!existsSync(metaPath)) continue
    const meta = readYaml<EpisodeMeta>(metaPath)
    if (meta.status !== 'generated') continue
    if (!existsSync(join(dir, 'slides.md'))) {
      log.warn(`  skip ${entry} — generated meta.yml but no slides.md`)
      continue
    }
    ids.push(entry)
  }
  return ids.sort()
}

async function buildEpisode(id: string, base: string): Promise<string | null> {
  const dir = join(EPISODES_DIR, id)
  const metaPath = join(dir, 'meta.yml')
  if (!existsSync(metaPath)) {
    log.warn(`  skip ${id} — no meta.yml`)
    return null
  }
  const meta = readYaml<EpisodeMeta>(metaPath)

  log.info(`building ${id}`)

  // slidev build needs the base path for correct asset URLs in final bundle
  const { code, stderr } = await run('pnpm', [
    'exec', 'slidev', 'build',
    '--base', base,
    '--out', 'dist',
  ], { cwd: dir, reject: false })

  if (code !== 0) {
    throw new Error(`${id} build failed: ${stderr.slice(0, 800)}`)
  }
  log.ok(`  ${id} built`)
  return join(dir, 'dist')
}

async function buildLanding(): Promise<string> {
  log.info('building landing')
  const { code, stderr } = await run('pnpm', ['exec', 'astro', 'build'], {
    cwd: LANDING_DIR,
    reject: false,
  })
  if (code !== 0) {
    throw new Error(`landing build failed: ${stderr.slice(0, 400)}`)
  }
  log.ok('  landing built')
  return join(LANDING_DIR, 'dist')
}

async function main() {
  log.step('Build all — assembling dist/')

  // Site base path — matches landing/astro.config.mjs `base`.
  // Local:    PODDECK_BASE unset → /
  // CI/prod:  PODDECK_BASE=/poddeck/ → https://kvenux.github.io/poddeck/
  const SITE_BASE = process.env.PODDECK_BASE || '/'

  // Collect generated episodes from durable per-episode artifacts. Plan files
  // are an execution queue and can be refreshed independently.
  const episodes: { id: string; base: string; articlePath: string | null }[] = []
  for (const id of generatedEpisodeIds()) {
    const metaPath = join(EPISODES_DIR, id, 'meta.yml')
    if (!existsSync(metaPath)) {
      log.warn(`  skip ${id} — no meta.yml`)
      continue
    }
    const meta = readYaml<EpisodeMeta>(metaPath)
    episodes.push({
      id,
      base: `${SITE_BASE}episodes/${id}/`,
      articlePath: resolveEpisodeArticlePath(id, meta),
    })
  }
  log.info(`found ${episodes.length} generated episodes (base=${SITE_BASE})`)

  // Clean dist
  if (existsSync(DIST_DIR)) rmSync(DIST_DIR, { recursive: true, force: true })
  mkdirSync(DIST_DIR, { recursive: true })

  // Build all episodes
  log.step('Building episodes')
  const episodeDists: { id: string; path: string; articlePath: string | null }[] = []
  for (const ep of episodes) {
    const distPath = await buildEpisode(ep.id, ep.base)
    if (distPath) episodeDists.push({ id: ep.id, path: distPath, articlePath: ep.articlePath })
  }
  if (episodeDists.length !== episodes.length) {
    throw new Error(`only built ${episodeDists.length}/${episodes.length} generated episodes`)
  }

  // Build landing
  log.step('Building landing')
  const landingDist = await buildLanding()

  // Assemble
  log.step('Assembling final dist/')
  log.raw(`copying ${landingDist} → ${DIST_DIR}`)
  cpSync(landingDist, DIST_DIR, { recursive: true })

  const epOut = join(DIST_DIR, 'episodes')
  mkdirSync(epOut, { recursive: true })
  for (const ep of episodeDists) {
    const dst = join(epOut, ep.id)
    log.raw(`copying ${ep.path} → ${dst}`)
    cpSync(ep.path, dst, { recursive: true })
    if (ep.articlePath) {
      const articleDst = join(dst, basename(ep.articlePath))
      log.raw(`copying ${ep.articlePath} → ${articleDst}`)
      cpSync(ep.articlePath, articleDst)
    }
  }

  log.ok(`\nFinal dist assembled at ${DIST_DIR}`)
  log.info('serve locally with:  npx serve dist')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
