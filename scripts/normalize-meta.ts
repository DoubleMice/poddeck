import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { log } from './lib/log.ts'
import { normalizeYamlText } from './lib/yaml-repair.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const fix = process.argv.includes('--fix')

function normalizeMeta(path: string): boolean {
  const original = readFileSync(path, 'utf-8')
  const normalized = normalizeYamlText(original)
  if (normalized === null) return false
  if (fix) writeFileSync(path, normalized, 'utf-8')
  return true
}

function main(): void {
  const changed: string[] = []
  const failed: string[] = []

  for (const entry of readdirSync(EPISODES_DIR)) {
    const metaPath = join(EPISODES_DIR, entry, 'meta.yml')
    if (!existsSync(metaPath)) continue
    try {
      if (normalizeMeta(metaPath)) changed.push(metaPath)
    } catch (error: any) {
      failed.push(`${metaPath}: ${error.message}`)
    }
  }

  if (failed.length > 0) {
    for (const item of failed) log.err(item)
    process.exit(1)
  }

  if (changed.length === 0) {
    log.ok('all episode meta.yml files are normalized')
    return
  }

  for (const path of changed) log.warn(`${fix ? 'normalized' : 'needs normalization'} ${path}`)
  if (!fix) {
    log.err('run `pnpm run normalize:meta -- --fix` to rewrite metadata')
    process.exit(1)
  }
}

main()
