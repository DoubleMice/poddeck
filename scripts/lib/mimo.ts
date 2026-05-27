export interface MiMoClientOptions {
  apiKey: string
  model?: string
  baseUrl?: string
}

export interface MiMoTranscript {
  text: string
  rawId?: string
  usage?: unknown
}

type JsonObject = Record<string, unknown>

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined
}

function getPath(root: unknown, path: string[]): unknown {
  let cursor = root
  for (const key of path) {
    if (Array.isArray(cursor)) {
      const index = Number(key)
      if (!Number.isInteger(index)) return undefined
      cursor = cursor[index]
    } else if (isObject(cursor)) {
      cursor = cursor[key]
    } else {
      return undefined
    }
  }
  return cursor
}

export class MiMoClient {
  private apiKey: string
  private model: string
  private url: string

  constructor(options: MiMoClientOptions) {
    this.apiKey = options.apiKey
    this.model = options.model || 'mimo-v2.5'
    this.url = `${(options.baseUrl || 'https://api.xiaomimimo.com/v1').replace(/\/$/, '')}/chat/completions`
  }

  async transcribe(audioData: string): Promise<MiMoTranscript> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: 'You are a precise speech transcription engine. Return only the transcript text in the original spoken language. Preserve speaker wording. Do not summarize, translate, explain, or add markdown.',
          },
          {
            role: 'user',
            content: [
              {
                type: 'input_audio',
                input_audio: { data: audioData },
              },
              {
                type: 'text',
                text: 'Transcribe this audio verbatim. Return only transcript text.',
              },
            ],
          },
        ],
        max_completion_tokens: Number(process.env.MIMO_MAX_COMPLETION_TOKENS ?? 32768),
      }),
    })
    const body = await response.text()
    if (!response.ok) throw new Error(`MiMo transcription failed: ${response.status} ${body.slice(0, 500)}`)
    const json = JSON.parse(body)
    const text = asString(getPath(json, ['choices', '0', 'message', 'content']))
      ?? asString(getPath(json, ['choices', '0', 'message', 'reasoning_content']))
    if (!text) throw new Error(`MiMo transcription returned empty text: ${body.slice(0, 500)}`)
    return {
      text: text.trim(),
      rawId: asString(getPath(json, ['id'])),
      usage: isObject(json) ? json.usage : undefined,
    }
  }
}
