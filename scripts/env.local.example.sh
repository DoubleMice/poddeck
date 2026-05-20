#!/usr/bin/env bash

# Copy this file to scripts/env.local.sh and fill in local-only values.
# Usage:
#   source scripts/env.local.sh
#   pnpm run plan:run -- --auto-transcribe --transcribe-limit=3 --limit=0 --dry-run

export DASHSCOPE_API_KEY=""
export ANTHROPIC_AUTH_TOKEN=""

# Optional overrides for local testing.
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro"
export ANTHROPIC_MODEL="deepseek-v4-pro"
export ENABLE_TOOL_SEARCH="true"
