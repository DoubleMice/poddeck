import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'
import { DashScopeClient } from './lib/dashscope.ts'
import { MiMoClient } from './lib/mimo.ts'
import { log } from './lib/log.ts'

const ROOT = process.cwd()
const SAMPLE_AUDIO_URL = 'https://example-files.cnbj1.mi-fds.com/example-files/audio/audio_example.wav'

function loadEnvFile(path: string): void {
  if (!existsSync(path)) return
  for (const rawLine of readFileSync(path, 'utf-8').split('\n')) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const match = line.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!match) continue
    const [, key, rawValue] = match
    if (process.env[key]) continue
    const value = rawValue
      .trim()
      .replace(/^['"]|['"]$/g, '')
    process.env[key] = value
  }
}

function loadLocalEnv(): void {
  loadEnvFile(resolve(ROOT, '.env.local'))
  loadEnvFile(resolve(ROOT, 'scripts/env.local.sh'))
}

function provider(): 'mimo' | 'dashscope' {
  const value = (process.env.TRANSCRIPT_PROVIDER || 'mimo').toLowerCase()
  if (value === 'dashscope') return 'dashscope'
  return 'mimo'
}

async function testMiMo(): Promise<void> {
  const apiKey = process.env.MIMO_API_KEY
  if (!apiKey) throw new Error('MIMO_API_KEY is required for MiMo E2E')
  const client = new MiMoClient({
    apiKey,
    baseUrl: process.env.MIMO_BASE_URL,
    model: process.env.MIMO_MODEL,
  })
  const result = await client.transcribe(SAMPLE_AUDIO_URL)
  if (result.text.length < 5) throw new Error(`MiMo transcript too short: ${JSON.stringify(result.text)}`)
  log.ok(`MiMo E2E transcript ok (${result.text.length} chars): ${result.text.slice(0, 120)}`)
}

async function testDashScope(): Promise<void> {
  const apiKey = process.env.DASHSCOPE_API_KEY
  if (!apiKey) throw new Error('DASHSCOPE_API_KEY is required for DashScope E2E')
  const client = new DashScopeClient({
    apiKey,
    region: (process.env.DASHSCOPE_REGION || 'cn') as 'cn' | 'intl',
  })
  const taskId = await client.submit(SAMPLE_AUDIO_URL)
  log.info(`DashScope task submitted: ${taskId}`)
  const deadline = Date.now() + Number(process.env.E2E_TRANSCRIPTION_TIMEOUT_MS || 120_000)
  while (Date.now() < deadline) {
    await sleep(5_000)
    const task = await client.query(taskId)
    if (task.status === 'SUCCEEDED') {
      const url = task.transcriptionUrls[0]
      if (!url) throw new Error('DashScope task succeeded without transcription_url')
      const transcript = await client.downloadTranscript(url)
      if (transcript.text.length < 5) throw new Error(`DashScope transcript too short: ${JSON.stringify(transcript.text)}`)
      log.ok(`DashScope E2E transcript ok (${transcript.text.length} chars): ${transcript.text.slice(0, 120)}`)
      return
    }
    if (task.status === 'FAILED' || task.status === 'CANCELED' || task.status === 'UNKNOWN') {
      throw new Error(`DashScope task ended with ${task.status}: ${task.code ?? ''} ${task.message ?? ''}`.trim())
    }
  }
  throw new Error(`DashScope task did not finish within timeout: ${taskId}`)
}

async function main(): Promise<void> {
  loadLocalEnv()
  const selected = provider()
  log.step(`Transcription E2E — provider=${selected}`)
  if (selected === 'dashscope') await testDashScope()
  else await testMiMo()
}

main().catch(error => {
  log.err(error.stack || error.message)
  process.exit(1)
})
