export interface Source {
  id: string
  name: string
  rss_url?: string
  filter_keywords?: string[]
  episode_limit?: number
  auto_tag?: boolean
  color?: string
  description?: string
  min_duration?: number
  min_date?: string
  cache_limit?: number
  use_keywords_in_plan?: boolean
}

export interface SourcesFile {
  sources: Source[]
}

export type EpisodeStatus =
  | 'queued'
  | 'needs_transcript'
  | 'downloading'
  | 'downloaded'
  | 'generating'
  | 'generated'
  | 'audit_failed'
  | 'failed'

export interface Episode {
  id: string
  source: string
  title: string
  url: string
  published?: string
  duration?: string
  tags?: string[]
  status: EpisodeStatus
  slides_path?: string
  error?: string
}

export interface EpisodeMeta extends Episode {
  guest?: string
  guest_role?: string
  thumbnail?: string
  summary?: string
  core_ideas?: string[]
  article_path?: string
  base?: string
  category?: string
}

export interface EpisodesFile {
  episodes: Episode[]
}

export interface QueueEntry {
  id: string
  source: string
  title: string
  url: string
  published?: string
}

export interface QueueFile {
  queue: QueueEntry[]
}
