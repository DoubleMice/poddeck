import type { TranscriptionJob } from './types.ts'

type JsonObject = Record<string, unknown>

export interface DashScopeClientOptions {
  apiKey: string
  region?: 'cn' | 'intl'
}

export interface DashScopeTaskView {
  taskId?: string
  status?: string
  transcriptionUrls: string[]
}

export interface NormalizedTranscript {
  text: string
  warnings: string[]
}

const CN_SUBMIT_URL = 'https://dashscope.aliyuncs.com/api/v1/services/audio/asr/transcription'
const CN_QUERY_URL = 'https://dashscope.aliyuncs.com/api/v1/tasks/'
const INTL_SUBMIT_URL = 'https://dashscope-intl.aliyuncs.com/api/v1/services/audio/asr/transcription'
const INTL_QUERY_URL = 'https://dashscope-intl.aliyuncs.com/api/v1/tasks/'

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined
}

function getPath(root: unknown, path: string[]): unknown {
  let cursor = root
  for (const key of path) {
    if (!isObject(cursor)) return undefined
    cursor = cursor[key]
  }
  return cursor
}

function collectText(value: unknown, out: string[]): void {
  if (!isObject(value)) return
  const direct = asString(value.text)
    ?? asString(value.transcript)
    ?? asString(value.transcription)
    ?? asString(value.sentence)
    ?? asString(value.sentence_text)
  if (direct) out.push(direct)

  for (const key of ['sentences', 'transcripts', 'paragraphs']) {
    const nested = value[key]
    if (!Array.isArray(nested)) continue
    for (const item of nested) collectText(item, out)
  }

  const words = value.words
  if (Array.isArray(words)) {
    const wordText = words
      .map(word => isObject(word) ? (asString(word.text) ?? asString(word.word) ?? asString(word.token)) : undefined)
      .filter(Boolean)
      .join(' ')
      .trim()
    if (wordText) out.push(wordText)
  }
}

export function collectTranscriptionUrls(taskJson: unknown): DashScopeTaskView {
  const output = getPath(taskJson, ['output'])
  const urls = new Set<string>()
  const addUrl = (value: unknown) => {
    const url = asString(value)
    if (url) urls.add(url)
  }

  addUrl(getPath(output, ['transcription_url']))
  addUrl(getPath(output, ['result', 'transcription_url']))

  const results = getPath(output, ['results'])
  if (Array.isArray(results)) {
    for (const item of results) {
      addUrl(getPath(item, ['transcription_url']))
      addUrl(getPath(item, ['result', 'transcription_url']))
    }
  } else if (isObject(results)) {
    addUrl(getPath(results, ['transcription_url']))
    addUrl(getPath(results, ['result', 'transcription_url']))
  }

  return {
    taskId: asString(getPath(output, ['task_id'])),
    status: asString(getPath(output, ['task_status']))?.toUpperCase(),
    transcriptionUrls: [...urls],
  }
}

export function normalizeTranscriptJson(json: unknown): NormalizedTranscript {
  const warnings: string[] = []
  const parts: string[] = []

  const direct = asString(getPath(json, ['text']))
    ?? asString(getPath(json, ['transcript']))
    ?? asString(getPath(json, ['transcription']))
    ?? asString(getPath(json, ['output', 'text']))
  if (direct) parts.push(direct)

  collectText(getPath(json, ['output']), parts)
  collectText(json, parts)

  const deduped = parts
    .map(part => part.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter((part, index, list) => list.indexOf(part) === index)
  const text = deduped.join('\n').trim()
  if (!text) throw new Error('DashScope transcript JSON parsed to empty text')
  if (deduped.length > 1) warnings.push(`assembled transcript from ${deduped.length} text blocks`)
  return { text, warnings }
}

export class DashScopeClient {
  private submitUrl: string
  private queryBaseUrl: string
  private headers: Record<string, string>

  constructor(options: DashScopeClientOptions) {
    this.submitUrl = options.region === 'intl' ? INTL_SUBMIT_URL : CN_SUBMIT_URL
    this.queryBaseUrl = options.region === 'intl' ? INTL_QUERY_URL : CN_QUERY_URL
    this.headers = {
      Authorization: `Bearer ${options.apiKey}`,
      'Content-Type': 'application/json',
      'X-DashScope-Async': 'enable',
    }
  }

  async submit(audioUrl: string): Promise<string> {
    const response = await fetch(this.submitUrl, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        model: 'qwen3-asr-flash-filetrans',
        input: { file_url: audioUrl },
        parameters: {
          channel_id: [0],
          enable_itn: false,
          enable_words: true,
        },
      }),
    })
    const body = await response.text()
    if (!response.ok) throw new Error(`DashScope submit failed: ${response.status} ${body}`)
    const json = JSON.parse(body)
    const taskId = asString(getPath(json, ['output', 'task_id']))
    if (!taskId) throw new Error(`DashScope submit returned no task_id: ${body}`)
    return taskId
  }

  async query(taskId: string): Promise<DashScopeTaskView> {
    const response = await fetch(`${this.queryBaseUrl}${taskId}`, { headers: this.headers })
    const body = await response.text()
    if (!response.ok) throw new Error(`DashScope query failed: ${response.status} ${body}`)
    return collectTranscriptionUrls(JSON.parse(body))
  }

  async downloadTranscript(transcriptionUrl: string): Promise<NormalizedTranscript> {
    const response = await fetch(transcriptionUrl)
    const body = await response.text()
    if (!response.ok) throw new Error(`DashScope transcript download failed: ${response.status} ${body.slice(0, 200)}`)
    return normalizeTranscriptJson(JSON.parse(body))
  }
}

export function jobFromTask(params: {
  key: string
  id: string
  source: string
  title: string
  audioUrl: string
  taskId: string
  now: string
}): TranscriptionJob {
  return {
    key: params.key,
    id: params.id,
    source: params.source,
    title: params.title,
    audio_url: params.audioUrl,
    task_id: params.taskId,
    status: 'submitted',
    retries: 0,
    submitted_at: params.now,
    updated_at: params.now,
  }
}
