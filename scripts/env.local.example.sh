#!/usr/bin/env bash

# Copy this file to scripts/env.local.sh and fill in local-only values.
# Usage:
#   source scripts/env.local.sh
#   pnpm run plan:run -- --auto-transcribe --transcribe-limit=3 --limit=0 --dry-run
#   pnpm run e2e:transcription

export TRANSCRIPT_PROVIDER="mimo"
export MIMO_API_KEY=""
export MIMO_BASE_URL="https://api.xiaomimimo.com/v1"
export MIMO_MODEL="mimo-v2.5"
export MIMO_MAX_COMPLETION_TOKENS="32768"
export DASHSCOPE_API_KEY=""
export ANTHROPIC_AUTH_TOKEN=""

# Optional overrides for local testing.
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro"
export ANTHROPIC_MODEL="deepseek-v4-pro"
export ENABLE_TOOL_SEARCH="true"
