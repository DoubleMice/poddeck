import type { Source } from './types.ts'

function matchesAnyPattern(title: string, patterns: string[] | undefined): boolean {
  return Boolean(patterns?.some(pattern => new RegExp(pattern, 'i').test(title)))
}

export function matchesSourceTitle(source: Source, title: string): boolean {
  if (source.include_title_patterns?.length && !matchesAnyPattern(title, source.include_title_patterns)) {
    return false
  }
  return !matchesAnyPattern(title, source.exclude_title_patterns)
}

export function dateKeyDaysAgo(days: number, now = new Date()): string {
  const date = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

export function effectiveMinDate(source: Source, override?: string, now = new Date()): string {
  if (override !== undefined) return override
  const configured = String(source.min_date ?? '20260101')
  if (!source.lookback_days || source.lookback_days <= 0) return configured
  return [configured, dateKeyDaysAgo(source.lookback_days, now)].sort().at(-1)!
}
