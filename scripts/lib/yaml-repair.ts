import { parse, stringify } from 'yaml'

const SINGLE_QUOTED_LIST_ITEM = /^(\s*-\s*)'(.*?)'(\s*(?:#.*)?)$/
const SINGLE_QUOTED_MAPPING_VALUE = /^(\s*[^#\n][^:]*:\s*)'(.*?)'(\s*(?:#.*)?)$/

function escapeSingleQuotedBody(body: string): string {
  let escaped = ''

  for (let index = 0; index < body.length; index += 1) {
    const char = body[index]
    const next = body[index + 1]

    // YAML escapes an apostrophe inside a single-quoted scalar as two
    // apostrophes. Preserve already-correct pairs so repair is idempotent.
    if (char === "'" && next === "'") {
      escaped += "''"
      index += 1
      continue
    }

    // Models often emit the JavaScript-style \' escape, which YAML does not
    // recognize in a single-quoted scalar. Convert it to YAML's doubled form.
    if (char === '\\' && next === "'") {
      escaped += "''"
      index += 1
      continue
    }

    escaped += char === "'" ? "''" : char
  }

  return escaped
}

function repairSingleQuotedLine(line: string): string {
  for (const pattern of [SINGLE_QUOTED_LIST_ITEM, SINGLE_QUOTED_MAPPING_VALUE]) {
    const match = line.match(pattern)
    if (!match) continue
    const [, prefix, body, suffix] = match
    return `${prefix}'${escapeSingleQuotedBody(body)}'${suffix}`
  }
  return line
}

export function repairYamlText(text: string): string {
  const repaired = text
    .split('\n')
    .map(repairSingleQuotedLine)
    .join('\n')

  // Verify the repair before returning it. Callers must never overwrite the
  // source with another malformed document.
  parse(repaired)
  return repaired
}

export function normalizeYamlText(text: string): string | null {
  try {
    parse(text)
    return null
  } catch {}

  const parsed = parse(repairYamlText(text))
  return stringify(parsed, { indent: 2, lineWidth: 120 })
}
