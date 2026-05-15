# PodDeck

**Live**: http://doublemice.github.io/poddeck/

PodDeck 把播客 RSS 里的长访谈和 transcript 自动转成结构化 Slidev 演示文稿，并部署到 GitHub Pages。每集包含可 grep 验证的嘉宾原话、核心论点、手绘示意图和可阅读 article。

## 当前状态

- RSS-only pipeline：`cache:refresh → plan → plan:run → build → deploy`
- 数据入口：`sources.yml` 中的 `rss_url`
- transcript 来源：RSS `podcast:transcript`，优先 `text/plain`，再 fallback 到 VTT/SRT/HTML
- 只有音频的 RSS episode 会进入 `needs_transcript` 队列，等待本地或手动转写补全
- 封面来源：RSS item `itunes:image`，缺失时 fallback 到 channel image
- 生成入口：`claude -p` subprocess；本地使用 Claude Code 登录态，GitHub Actions 使用 `ANTHROPIC_AUTH_TOKEN`
- 部署入口：GitHub Actions → GitHub Pages

## 关注源

| Source | RSS |
|---|---|
| TBPN | `https://feeds.transistor.fm/technology-brother` |
| Unchained | `https://unchained.libsyn.com/unchained` |
| Risky Business | `https://risky.biz/feeds/risky-business/` |
| Acquired | `https://feeds.transistor.fm/acquired` |
| Flirting with Models | `https://feeds.captivate.fm/flirting-with-models/` |

`Huberman Lab`、`Theories of Everything`、`张小珺 Xiaojun Podcast` 仍保留 source 配置，`rss_url` 为空时会生成空 cache/plan，等待补充 RSS。

## 核心工作流

```text
┌───────────────┐  fetch RSS
│ sources.yml   │───────────────┐
└───────────────┘               │
                                ▼
                ┌──────────────────────────┐
                │ data/scan-cache/*.jsonl  │  normalized RSS entries
                └────────┬─────────────────┘
                         │ plan.ts (date + duration + transcript status)
                         ▼
                ┌──────────────────────────┐
                │ data/plans/<source>.yml  │  status tracking
                └────────┬─────────────────┘
                         │ run-plan.ts (download transcript + claude -p)
                         ▼
                ┌──────────────────────────┐
                │ episodes/<id>/           │  slides.md + meta.yml + article.html
                └────────┬─────────────────┘
                         │ build-all.ts (Slidev + Astro)
                         ▼
                    dist/ → GitHub Pages
```

## 命令速查

```bash
# 安装依赖
pnpm install

# 1. 拉取 RSS metadata
pnpm run cache:refresh
pnpm run cache:refresh -- --id=tbpn
pnpm run cache:refresh -- --limit=20

# 2. 从 cache 生成 plan
pnpm run plan
pnpm run plan -- --id=tbpn
pnpm run plan -- --min-duration=5400

# 3. 执行 plan 中 pending 的条目
pnpm run plan:run
pnpm run plan:run -- --limit=1
pnpm run plan:run -- --id=tbpn
pnpm run plan:run -- --dry-run

# 4. 构建 + 本地预览
pnpm run build
pnpm run preview

# 5. 单集开发模式
pnpm run dev:episode <episodeId>

# 6. 本地统计 RSS cache
pnpm run analyze
pnpm run analyze -- --thresholds=30,60,120
```

本地预览地址：`http://localhost:4173`

## 常用收尾流程

```bash
pnpm run cache:refresh
pnpm run plan
pnpm run plan:run -- --limit=1
pnpm run build
git add -A
git commit -m "generate rss episode"
git push
```

生成并部署由手动或定时 GitHub Actions 触发，发布地址为 `http://doublemice.github.io/poddeck/`。

## GitHub Actions 生成

仓库提供三个 workflow：

- `Discover`：定时刷新 RSS cache 和 plan，提交 `needs_transcript` / `pending` 队列。
- `Deploy to GitHub Pages`：手动触发，只构建并部署已有内容。
- `Generate and Deploy`：每天定时或手动触发，执行 `cache:refresh → plan → plan:run → commit → build → deploy`。

`Generate and Deploy` 需要在 GitHub repository secrets 中配置：

```text
ANTHROPIC_AUTH_TOKEN=<你的 DeepSeek API key 或兼容 Anthropic token>
```

workflow 使用 DeepSeek Anthropic 兼容环境变量：

```text
ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro
ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro
ANTHROPIC_MODEL=deepseek-v4-pro
ENABLE_TOOL_SEARCH=true
```

手动触发参数：

- `source`：可选 source id，例如 `tbpn`；留空表示所有 source。
- `limit`：生成数量上限，默认 `1`。
- `category`：可选分类过滤。

push 到 `main` 不触发 GitHub Actions；自动生成与部署只来自定时任务或手动 workflow。

## 添加新 RSS 源

编辑 `sources.yml`：

```yaml
sources:
  - id: my-source
    name: My Podcast
    rss_url: https://example.com/feed.xml
    min_duration: 3600
    min_date: "20260101"
    cache_limit: 100
    color: "#2563eb"
    description: 简短描述
    filter_keywords: [AI, agent, llm]
```

然后运行：

```bash
pnpm run cache:refresh -- --id=my-source
pnpm run plan -- --id=my-source
pnpm run plan:run -- --id=my-source --limit=1
pnpm run build
```

## 生成规则

`plan.ts` 会把 episode 分成几类，并在 `data/plans/<source>.yml` 写入 `pending`、`downloaded`、`needs_transcript` 计数：

- `pending`：RSS 自带 transcript，或 `data/transcripts/<id>.txt` 已存在
- `downloaded`：transcript 已落盘，等待继续生成 slides
- `needs_transcript`：RSS 只有音频和封面，等待转写补全文本

`run-plan.ts` 会为每个 pending episode：

- 下载 RSS transcript 到 `data/transcripts/<id>.txt`
- scaffold `episodes/<id>/`
- 调用 `claude -p` 生成 `slides.md`、`meta.yml`、`article.html`
- 只有当 Claude 成功退出且 `slides.md`、`meta.yml` 都存在时，plan 状态才写为 `generated`

GitHub Actions 的 `discover.yml` 会自动刷新 RSS cache 和 plan，并提交新的 `needs_transcript` 候选。音频转写建议通过本地或独立手动 workflow 执行，转写产物写入 `data/transcripts/<id>.txt` 后，再运行 `pnpm run plan` 会把对应条目推进到 `pending`。

硬规则位于 `scripts/prompts/slides-system-rules.md`：

- 每条引言必须能在 transcript 里 grep 到
- 不跨 episode 串台
- 不编造公司名、年份、数字
- deck 长度按 transcript 长度扩展
- 至少 20% 内容页使用 Excalidraw 手绘图
- 倒数第二页为核心金句页
- 生成后必须导出 PNG 自审

## 项目结构

```text
poddeck/
├── sources.yml              # RSS source 配置
├── tags.yml                 # 标签词表
├── episodes.yml             # 历史 episode 目录兼容
├── data/
│   ├── transcripts/         # 清洗后的 transcript
│   ├── scan-cache/          # RSS normalized JSONL，按需刷新
│   └── plans/               # 每个 source 的执行状态
├── episodes/
│   ├── _templates/          # 新 episode scaffold
│   └── <episodeId>/         # 单集 Slidev 项目
├── landing/                 # Astro landing
├── scripts/
│   ├── lib/rss.ts           # RSS parser + transcript cleaner
│   ├── refresh-cache.ts     # RSS → scan-cache
│   ├── plan.ts              # scan-cache → plan
│   ├── run-plan.ts          # plan → transcript + generation
│   ├── build-all.ts         # episodes + landing → dist
│   └── prompts/             # generation prompts and hard rules
└── .github/workflows/
    ├── discover.yml         # scheduled RSS cache/plan refresh
    └── deploy.yml           # GitHub Pages deploy
```

## 部署

`.github/workflows/deploy.yml` 和 `.github/workflows/generate-and-deploy.yml` 设置：

- `PODDECK_BASE=/poddeck/`
- `PODDECK_SITE=https://doublemice.github.io`

部署流程：

1. `pnpm install --frozen-lockfile`
2. `pnpm exec playwright install --with-deps chromium`
3. `pnpm run build`
4. upload `dist/`
5. deploy GitHub Pages

仓库 Pages 设置使用 **GitHub Actions**。

## 已知限制

- CI 生成需要 `ANTHROPIC_AUTH_TOKEN` secret；缺少该 secret 时只使用本地生成流程。
- RSS 缺 `podcast:transcript` 的 episode 会进入 `needs_transcript`，不会自动生成 slides。
- `sources.yml` 中 `rss_url` 为空的 source 会写空 cache/plan。
- GitHub Pages 深度链接依赖 `landing/public/404.html` 做 fallback。

## 致谢

Slides 由 [Slidev](https://sli.dev) 渲染。生成由 [Claude Code](https://claude.com/claude-code) 驱动。
