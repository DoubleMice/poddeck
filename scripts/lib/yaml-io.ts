import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { parse, stringify } from 'yaml'

export function readYaml<T = any>(path: string, fallback?: T): T {
  if (!existsSync(path)) {
    if (fallback !== undefined) return fallback
    throw new Error(`File not found: ${path}`)
  }
  return parse(readFileSync(path, 'utf-8')) as T
}

export function writeYaml(path: string, data: unknown): void {
  const content = stringify(data, { indent: 2, lineWidth: 120 })
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
  writeFileSync(path, content, 'utf-8')
}
