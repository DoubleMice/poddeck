import assert from 'node:assert/strict'
import test from 'node:test'
import { parse } from 'yaml'
import { normalizeYamlText, repairYamlText } from './yaml-repair.ts'

test('repairs an apostrophe inside a single-quoted list item', () => {
  const malformed = [
    'core_ideas:',
    "  - '新 CEO Josh D'Amaro 来自乐园部门。'",
    '',
  ].join('\n')

  const repaired = repairYamlText(malformed)
  assert.match(repaired, /Josh D''Amaro/)
  assert.deepEqual(parse(repaired), {
    core_ideas: ["新 CEO Josh D'Amaro 来自乐园部门。"],
  })
})

test('converts backslash-apostrophe to YAML single-quote escaping', () => {
  const malformed = "guest: 'Josh D\\'Amaro'\n"
  const repaired = repairYamlText(malformed)

  assert.equal(repaired, "guest: 'Josh D''Amaro'\n")
  assert.equal(parse(repaired).guest, "Josh D'Amaro")
})

test('preserves valid doubled apostrophes and ignores valid YAML', () => {
  const valid = [
    "guest: 'Josh D''Amaro'",
    "core_ideas:",
    "  - 'Disney''s parks business' # context",
    '',
  ].join('\n')

  assert.equal(repairYamlText(valid), valid)
  assert.equal(normalizeYamlText(valid), null)
})

test('does not treat apostrophes in a trailing comment as scalar content', () => {
  const malformed = "guest: 'Josh D'Amaro' # guest's display name\n"
  const repaired = repairYamlText(malformed)

  assert.equal(repaired, "guest: 'Josh D''Amaro' # guest's display name\n")
  assert.equal(parse(repaired).guest, "Josh D'Amaro")
})

test('normalizes the malformed metadata shape from the failed Action', () => {
  const malformed = [
    'id: example',
    'status: generated',
    'core_ideas:',
    "  - '2026 年，60% 的公司利润来自乐园和邮轮体验——而影院票房仅占营收的 3%。新 CEO Josh D'Amaro 来自乐园部门这一事实，本身就说明了战略方向。'",
    '',
  ].join('\n')

  const normalized = normalizeYamlText(malformed)
  if (normalized === null) throw new Error('expected malformed YAML to be normalized')
  assert.equal(parse(normalized).core_ideas[0].includes("D'Amaro"), true)
})
