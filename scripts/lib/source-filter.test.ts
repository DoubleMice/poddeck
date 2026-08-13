import assert from 'node:assert/strict'
import test from 'node:test'
import { effectiveMinDate, matchesSourceTitle } from './source-filter.ts'
import type { Source } from './types.ts'

test('supports source-specific include and exclude title patterns', () => {
  const source: Source = {
    id: 'example',
    name: 'Example',
    include_title_patterns: ['Inside', 'Deep Dive'],
    exclude_title_patterns: ['Paid Partnership'],
  }

  assert.equal(matchesSourceTitle(source, 'Inside a New AI Lab'), true)
  assert.equal(matchesSourceTitle(source, 'Company Deep Dive'), true)
  assert.equal(matchesSourceTitle(source, 'Daily News Roundup'), false)
  assert.equal(matchesSourceTitle(source, 'Inside a Paid Partnership'), false)
})

test('combines the configured minimum date with a rolling lookback', () => {
  const source: Source = {
    id: 'example',
    name: 'Example',
    min_date: '20260101',
    lookback_days: 21,
  }

  assert.equal(effectiveMinDate(source, undefined, new Date('2026-08-13T12:00:00Z')), '20260723')
  assert.equal(effectiveMinDate(source, '20260101', new Date('2026-08-13T12:00:00Z')), '20260101')
})
