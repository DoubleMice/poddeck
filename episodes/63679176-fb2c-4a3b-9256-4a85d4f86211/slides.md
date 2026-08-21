---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '171: 与Henry的「AI季报 26Q2」：从 coding 到 RSI，强者愈强的未来？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 晚点聊 × Henry Yin

## 「AI 季报 26Q2」：从 coding 到 RSI，强者愈强的未来？

<div class="text-sm opacity-60 mt-6">
Fable 5 与 GPT-5.6 的发布波折 · 递归自进化兴起 · 中国开源模型崛起 · 智能如何加速扩散
</div>

<div class="text-xs opacity-50 mt-8">
MOE Capital 创始合伙人 Henry Yin | 晚点聊 LateTalk 第 171 期 | 2026 年 7 月
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Fable 5 与 GPT-5.6 同季发布</strong><br/>
<span class="text-xs opacity-70">Fable 5 被评"史诗级能力、灾难级发布"；GPT-5.6 的 o1-ultra 在 TerminalBench 首次破 90</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>coding 迁移潮与价格战</strong><br/>
<span class="text-xs opacity-70">Claude 4.7 口碑崩塌引发用户迁往 Codex；Sam 用"两个月免费"抢客户；Anthropic 却迎来 Q2 首次盈利</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>RSI 从科幻变成创业方向</strong><br/>
<span class="text-xs opacity-70">Anthropic 发长文《One AI Builds Itself》；Recursive 三个 benchmark 全 SOTA；新团队批量涌现</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>物理 AI 加码</strong><br/>
<span class="text-xs opacity-70">OpenAI 官宣机器人团队，Anthropic 内部布局；世界模型 18 个月在欧美吸金 100 亿美元</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>企业想要自己的模型</strong><br/>
<span class="text-xs opacity-70">Harvey 基于中国开源模型 GLM 5.1 后训练，在自己的法律 benchmark 上击败 OpenAI 与 Anthropic</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>新交互：AI 进入协作空间</strong><br/>
<span class="text-xs opacity-70">Claude for Teams 打通 Slack；Record and Replay 把"人教 AI 做任务"产品化</span>
</div>

</div>

---

# 上个季度的判断，这个季度更清晰了

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>OpenAI 的 coding 反扑已获验证</strong><br/>
<span class="text-xs opacity-70">Codex 势头明显起来，"有很多开发者从 Claude Code 切回 Codex"——OpenAI 抓住了 Anthropic 限流、价格与口碑波动的窗口期</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Auto Research 走向 RSI</strong><br/>
<span class="text-xs opacity-70">从"比较前沿科幻"变成一个明确的研究和创业方向</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Computer Use 往前走了一步</strong><br/>
<span class="text-xs opacity-70">OpenAI 在 Codex 里推出基于 Computer Use 能力的新 feature（Record and Replay 的前奏）</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>OpenClaw 的灯塔效应</strong><br/>
<span class="text-xs opacity-70">它自己的热度降了下来，但前沿想法被 Codex 和 Claude Code 吸收进产品功能</span>
</div>

</div>

---
layout: two-cols
---

# 本季观察框架：两条线

<div class="text-sm leading-relaxed mt-2">

- **推进前沿智能**：coding 与长程 agentic 能力最重要——coding 代表收入、也是未来；两者结合才能实现 Auto Research 乃至 RSI
- **加速智能扩散**：前沿能力通过产品、API、开源模型、企业 workflow、UI/UX、硬件，一层层进入社会
- **两条线同时发生**：前者决定 AI 能力的天花板，后者决定 AI 改变世界的速度

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>主角</strong>：OpenAI、Anthropic 在前沿发力；Recursive、Merindale、Core Automation 等新公司在 RSI 方向探索
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-lines.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Fable 5：能力是史诗级的

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### SWE-Bench Pro
<div class="text-3xl font-bold text-blue-600 my-2">80.3%</div>
<div class="text-xs opacity-70">上一代顶尖模型 4.8 是 69.2%，提升约 11 分</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### TerminalBench
<div class="text-3xl font-bold text-green-600 my-2">88 分</div>
<div class="text-xs opacity-70">多步、需用工具的终端任务 benchmark</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 网络 demo
<div class="text-xl font-bold text-orange-600 my-2">one-shot 打游戏</div>
<div class="text-xs opacity-70">《我的世界》《红色警戒》级别，能力是大版本跃进</div>

</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>命名说明</strong>：Mythos 与 Fable 基模相同——Mythos 面向受信客户、没有安全护栏；Fable 面向所有人、加了护栏。这为后面的发布风波埋下伏笔。
</div>

---

# 但发布是灾难级的：静默降智风波

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>过度封锁</strong><br/>
<span class="text-xs opacity-70">聊癌症会被当作"生物安全问题"而拒绝回答；官方称少于 5% 的任务会回退到 4.8，实际用户遇到的更多——安全护栏"过于神经质"</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>静默降智</strong><br/>
<span class="text-xs opacity-70">系统卡承认：涉及前沿 LLM/ML 研究的任务可能被悄悄降智——通过改写 prompt 或 steering vector 压低能力</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>为什么是"定义级别的错误"</strong><br/>
<span class="text-xs opacity-70">对齐的基本假设是"AI会忠实的尽自己最大能力去完成这个任务"；Fable 却在不告知用户的情况下不尽力——"这个就是定义级别的这个错误"</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>修复与代价</strong><br/>
<span class="text-xs opacity-70">几小时内做出修正，现在拒绝时会主动告知"降智到4.8"；但风波削弱了 Anthropic 一贯的"最 aligned"人设</span>
</div>

</div>

---

# GPT-5.6：用 TerminalBench 反攻

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>TerminalBench 91.9%</strong><br/>
<span class="text-xs opacity-70">o1-ultra 是历史上第一个超过 90% 的模型；这个 benchmark 测的是终端里多步、需用工具的任务——偏长程的 agentic 能力</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Agents Lab 唯一超 50%</strong><br/>
<span class="text-xs opacity-70">在 Agents Lab（agent 类 benchmark）上表现惊艳，是目前模型里唯一超过 50% 的</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>生物与网络安全</strong><br/>
<span class="text-xs opacity-70">官方称在这两个方向上能匹敌 Mythos preview 的成果</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>未公布 SWE-Bench</strong><br/>
<span class="text-xs opacity-70">OpenAI 2 月发文称 SWE-Bench Verified 已被污染、推荐用 Pro；这次为何不公布 Pro 分数，外界不清楚</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
<strong>未完的悬念</strong>：5.6 和 Fable 一样限量使用，真实体验的反馈还很少——两家的模型之争要等更多用户上手才能定论。
</div>

---

# 一纸禁令：前沿模型开始设门槛

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Fable 全球下线</strong><br/>
<span class="text-xs opacity-70">发布三天后美国政府一纸禁令——不允许向外国人提供 Fable；Anthropic 无法判断用户国籍，索性全球下线。录制节目时刚刚限量重上</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>GPT-5.6 白名单</strong><br/>
<span class="text-xs opacity-70">同样被要求只对政府批准的实体开放——目前只有约 20 家客户能 access，比如 Nvidia、Amazon</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>限量使用会常态化吗</strong><br/>
<span class="text-xs opacity-70">两款新模型都开了"安全可信的名单"，很多人都在讨论"美国政府的这种监管以后会变得常态化"</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>连锁反应</strong><br/>
<span class="text-xs opacity-70">前沿模型不再人人可用——这将成为企业考虑自有模型的重要动机之一（后文展开）</span>
</div>

</div>

---

# coding 迁移潮：从 Claude Code 到 Codex

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Claude 4.7 口碑崩了</strong><br/>
<span class="text-xs opacity-70">4.7 发布本意是降本，但大量用户因不满表现而从 Claude Code 迁到 Codex；4.8 口碑有所回升</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>5 月定价变化</strong><br/>
<span class="text-xs opacity-70">Anthropic 不再让第三方 Harness 按订阅价用 token、改按 API 计价，又流失一波用户</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>OpenAI 抢窗口</strong><br/>
<span class="text-xs opacity-70">Sam 在 X 上宣布：最近 30 天从 Claude Code 迁到 Codex 的企业用户，"我给你两个月免费"</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>代价是收入</strong><br/>
<span class="text-xs opacity-70">Codex 20 刀/月就能"用饱"，Claude Code 可能要 100-200 刀；相同用量差 5-10 倍收入——份额战很激进</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
<strong>结果</strong>：Codex 的 usage 大幅上升；但用户增长没有等量反映在收入上——OpenAI 是落后一方，价格战更激进。
</div>

---
layout: two-cols
---

# 收入竞赛：Anthropic 越跑越快

<div class="text-sm leading-relaxed mt-2">

- **Anthropic 非官方年化营收预期**：5 月初约 470 亿美元 → 5 月底 540 亿美元 → 6 月中 620 亿美元
- **OpenAI 6 月中约 400 亿美元**：差距约 1.5 倍，且比 Q1 拉大——Anthropic 增长更快
- **Q2 首度盈利**：华尔街日报、路透报道约 5.6 亿美元营业利润（非官方数据，但权威财经媒体相对靠谱）
- **注意口径**：Codex 送了大量免费额度，用量的差距未必有收入差距这么大

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./revenue-race.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Cursor 的退场：600 亿美元收购

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>600 亿美元</strong><br/>
<span class="text-xs opacity-70">被合并了 xAI 的 SpaceX 新主体收购——历史上最大的创业公司收购</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>对比 Windsurf</strong><br/>
<span class="text-xs opacity-70">Google 20 多亿美元收购 Windsurf，近 30 倍差价；被收购前 Windsurf 体验"几乎是和 Cursor 完全一样的"</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>为什么是此时</strong><br/>
<span class="text-xs opacity-70">"准确的击中了老马的需求"——马斯克从去年底极其看重 coding，给 xAI 团队巨大压力导致骨干离职，急需一支团队把 coding 故事讲下去；xAI 波动 + SpaceX 刚上市有布局与讲故事的需求</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>行业背景</strong><br/>
<span class="text-xs opacity-70">coding 公司短期营收都很强劲，但长期在 Claude Code 与 Codex 双重挤压下，前景存疑</span>
</div>

</div>

---

# 模型旗鼓相当之后：系统化的竞争

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型层面</strong><br/>
<span class="text-xs opacity-70">两家"各有千秋"，还要看 GPT-5.6 的真实使用反馈</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>产品与 GTM</strong><br/>
<span class="text-xs opacity-70">不少 OpenAI 研究员觉得：研究模型与 Anthropic 同一个 level，但"在产品和这个推向市场方面是一团糟"——收入落后是产品和 GTM 的锅</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>社区与传播</strong><br/>
<span class="text-xs opacity-70">Claude Code 在 X 上声量远超 Codex——"Claude Code 之父"Boris、Catherine Wu、Tarek 等 influencer 让新功能更快触达用户</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>组织稳定性</strong><br/>
<span class="text-xs opacity-70">Anthropic 的 retention 一直很好，离职人数远小于其他 Frontier Lab；解释众说纷纭——"宗教化"、期权太贵走不起，但 Henry 认为这是重要因素</span>
</div>

</div>

---

# 价值观差异：情绪价值 vs 当头一棒

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>OpenAI 的研究发现</strong><br/>
<span class="text-xs opacity-70">"人其实并不太喜欢听到真实的一些反馈"——模型的谄媚程度上升，人反而更喜欢。往这个方向优化，谄媚就会增加</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>体感差异</strong><br/>
<span class="text-xs opacity-70">同时用过两家产品的人会感到：ChatGPT 更会提供情绪价值；"Claude有的时候会给你当头一棒"，更会说真话——训练目标与对齐目标上的价值观差异</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>硅谷的认可</strong><br/>
<span class="text-xs opacity-70">即便聊到的一些 OpenAI 研究员，也认为 Claude 在对齐上做得比 OpenAI 强</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>愿景是真的</strong><br/>
<span class="text-xs opacity-70">Anthropic 与教皇合作，探讨宗教怎么与 AI 结合；Henry 观察到他们非常认真地看待自己在做的事——在思考"未来这个世界应该怎么构建"</span>
</div>

</div>

---
layout: two-cols
---

# RSI：递归自进化

<div class="text-sm leading-relaxed mt-2">

- **Auto Research**：AI 像研究员一样工作——读论文、提假设、写代码、跑实验、分析结果
- **RSI 再进一步**：研究员在研究过程中不断改进自己，下一次做研究时能力更强
- **为什么是圣杯**：过去几十年反复尝试；这一轮因为 coding 与长程 agent 能力变强，重新看到希望
- **意义**：人可以从循环中抽离，只要不断喂算力，智能就不断提升 → ASI

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsi-spiral.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# "自动"与"递归"，哪个先发生？

<div class="text-sm leading-relaxed mt-2">

- **Henry 的答案：得先自动**——"我觉得得先自动"
- **蔓琪转述她与田渊栋的交流**：递归"可以说已经发生了"；自动是阶段性的——人参与得越来越少，但还不是全自动
- **十年前的回望**：Google 的 AutoML 只会做机械的搜索，搜索空间和方向仍要人深入参与来规定
- **趋势**：AI 能改进的系统部分越来越大，直到把整个系统纳入优化范围

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsi-ladder.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 《One AI Builds Itself》的四个数字

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-bold text-blue-600">&gt;80%</div>
<span class="text-xs opacity-70">截至 5 月，Anthropic 代码库里合并的代码超过 80% 由 Claude 所写</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-2xl font-bold text-green-600">8×</div>
<span class="text-xs opacity-70">2026 年 Q2 起，工程师人均每天合并的代码量是 2025 年之前的 8 倍</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-2xl font-bold text-orange-600">800 小时</div>
<span class="text-xs opacity-70">4 月案例：一个 AI Agent 端到端完成一项 AI 安全研究，累计工作 800 小时，比人类研究员做一周的效果还好不少</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-2xl font-bold text-red-600">52×</div>
<span class="text-xs opacity-70">代码性能优化测试：Mythos Preview 约 52 倍加速；Opus 4 系列只有 3 倍；熟练人类研究员 4-8 小时做到 4 倍</span>
</div>

</div>

---
layout: two-cols
---

# Anthropic 设想的三个世界

<div class="text-sm leading-relaxed mt-2">

- **世界一**：模型不再变强——可能性非常小，除非电力、算力突然消失
- **世界二（当前所处）**：模型继续变强但非指数——强模型开发下一代模型，复利效应；Auto Research 已实现、RSI 尚未实现
- **世界三**：完全 RSI——人类角色大幅缩小，进度只受算力限制，每天甚至每小时都有新模型被 AI 自己 train 出来
- **矛盾**：最大的风险回到对齐——基模瑕疵会在自繁衍中被放大；一方面想放缓，一方面担心对手不会放缓

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-futures.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 研究员的幸福感

<div class="mt-8 text-center px-14">

<div class="text-2xl leading-relaxed font-medium">
"当这个AI模型它work的时候，它比我做的又快，做的比我又好，我感觉我自己没有什么价值。当这个AI模型它不工作的时候，那我更惨了，因为我完全不知道就是它为什么不工作。"
</div>

<div class="mt-6 text-sm opacity-60">——《One AI Builds Itself》中一位研究员的原话，Henry 在节目中转述</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-8 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>能力变强，幸福感未必更强</strong><br/>
<span class="text-xs opacity-70">AI 能力变强了，做研究的速度变快了，但"这个AI研究员的幸福感不一定会比之前更强"</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>新的拷问</strong><br/>
<span class="text-xs opacity-70">价值感和成就感正在经历新的拷问和定位</span>
</div>

</div>

---

# 让 AI 成为一门科学

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>田渊栋的想法（蔓琪转述）</strong><br/>
<span class="text-xs opacity-70">当下重要的事是解释 AI、让 AI 真正成为科学——从第谷到开普勒到牛顿，AI 也会经历这个过程</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>现在可能还在"第谷阶段"</strong><br/>
<span class="text-xs opacity-70">有很多经验，但很难解释为什么这个经验有效、那个经验无效</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>还不到"科学"的程度</strong><br/>
<span class="text-xs opacity-70">可能连过去定义的科学的门槛都还没到</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Henry 的补充</strong><br/>
<span class="text-xs opacity-70">如果做到 ASI，ASI 应该能够理解自己；人自己也只部分理解自己——不是 0 和 1 的关系，而是不断加深</span>
</div>

</div>

---
layout: two-cols
---

# Recursive：一套系统，三个 SOTA

<div class="text-sm leading-relaxed mt-2">

- **团队**：Richard Socher、田渊栋等创办的 Neural Lab，专注递归自我改进
- **首秀**：把同一套 RSI 系统用在三个 benchmark 上，全部取得 SOTA
- **覆盖 AI 进步的三个杠杆**：更好的算法、更快的训练、更高效的硬件利用
- **意义**：不只在于数字，更在于展示一套通用的研究闭环能够跑通

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-levers.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# RSI 创业潮：新团队批量涌现

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Recursive</strong><br/>
<span class="text-xs opacity-70">蓄水已久，本季度正式官宣；创始人包括 Richard Socher 与田渊栋</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Merindale</strong><br/>
<span class="text-xs opacity-70">6 月 25 日 launch，一成立就有 10 亿美元估值；创始人 Batman 来自 Anthropic 的 AI for Science 团队</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Core Automation</strong><br/>
<span class="text-xs opacity-70">创始人 Jerry Toric 是 OpenAI o 系列的负责人，在推理方面贡献很多</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>为什么创业公司有机会</strong><br/>
<span class="text-xs opacity-70">技术上还没收敛——除了 coding 和长程 agent 能力，可能还缺一些东西；不完全是一个堆算力的游戏，需要新 idea</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>与 Frontier Lab 的关系</strong>：瓶颈在研究品味——"AI现在的研究品味还是不太行的"，人类仍是卡点，所以大厂来做未必与创业公司拉开无限差距；OpenAI 的目标是今年 9 月实现 AI 研究实习生、28 年 3 月实现自动化的 AI 研究员。
</div>

---

# 物理 AI：两家不约而同加码

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>OpenAI 官宣</strong><br/>
<span class="text-xs opacity-70">Sam 与 Greg 亲自在 Twitter 宣布做机器人并开始招人；尝试从 2024 年就开始了；Fremont 有一个机器人 warehouse、几十人的团队；负责人 Aditya Ramesh</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>招聘透露的信号</strong><br/>
<span class="text-xs opacity-70">要找全栈工程师（硬件、运营、系统、机器学习）；第一个场景是服务自己的算力设施；再往后是做服务普通人的家庭机器人</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Anthropic 也在布局</strong><br/>
<span class="text-xs opacity-70">团队更小、更早期；《One AI Builds Itself》明确：Recursive Intelligence 的下一步是 Robotics 和 Physical Intelligence</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>两种路线</strong><br/>
<span class="text-xs opacity-70">Optimus 式全栈产品（马斯克说成熟后或有 200 亿台）vs Google、英伟达做"这个领域的安卓"——偏大脑与智能的那一层</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>机器人也能 RSI</strong>：部署到真实环境就能获得数据；更科幻的是机器人造机器人——工业革命"机器造机器"的母机逻辑，直到今天工业母机都是重要领域。
</div>

---
layout: two-cols
---

# 世界模型：为什么突然火了

<div class="text-sm leading-relaxed mt-2">

- **愿景**：一个从没见过鞋带的机器人，凭对世界的理解就能弯下腰解开它——这就是世界模型想解决的问题
- **分支一**：RL World Models（Dreamer 系列）——在学到的世界模型里"做梦"模拟，让机器人在虚拟世界里学习；问题：逐环境学习、难泛化
- **分支二**：视频生成（Sora、Veo）——从人类视频里学到大量物理知识；问题：不能根据当前帧和动作预测下一帧（action conditioned）
- **合流**：2024-2025 年两者合并成 World Action Model；代表工作是 Dream Labs 的 DreamDojo / DreamZero（2026 年 2 月发布）

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-model-merge.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 18 个月 100 亿美元：钱流向了哪里

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>世界模型 / 模拟器公司</strong><br/>
<span class="text-xs opacity-70">AMI Labs 10.3 亿美元、World Labs 12.3 亿美元、Runway 8.6 亿美元以上、Disney 的 Embo 超 1 亿美元</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>机器人大脑公司</strong><br/>
<span class="text-xs opacity-70">Skild、Physical Intelligence、Figure 等 Robot Foundation Model 玩家</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>平台型公司</strong><br/>
<span class="text-xs opacity-70">Nvidia、Google DeepMind，以及即将加入机器人战团的 OpenAI、Anthropic</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>有趣的 pattern</strong><br/>
<span class="text-xs opacity-70">机器人大脑公司的融资规模远大于世界模型公司——市场相信机器人实现后，最大的经济价值会被 Robot Brain 捕获</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>口径</strong>：统计偏欧美；若算上中国，机器人方向的融资规模会更大——但和 OpenAI、Anthropic 的主战场相比，吸金体量仍差了很多量级。
</div>

---

# Harvey：企业自训模型的风向标

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>三方合作</strong><br/>
<span class="text-xs opacity-70">Harvey（法律 AI 垂直公司）× Applied Compute（前 OpenAI 研究员创办的 post-training as a service，平台叫 DeLab）× GLM 5.1（中国开源模型）</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>结果</strong><br/>
<span class="text-xs opacity-70">在 Harvey 自己的 legal agent benchmark 上，击败了 Anthropic 和 OpenAI</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>为什么选 GLM 5.1</strong><br/>
<span class="text-xs opacity-70">试了市面上几乎所有的开源模型（大部分来自中国），baseline 上 GLM 5.1 效果最好；6 月初 Harvey 还与 Fireworks 合作训了另一个基于 GLM 5.1 的模型</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>模式</strong><br/>
<span class="text-xs opacity-70">Harvey 付费使用 DeLab 平台完成整个后训练，最终自己拥有模型和数据</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>风向标意义</strong>：Harvey 本身就是 Anthropic 的用户；上一季的先例是 Cursor 基于 Kimi 2.5 后训练了自己的 composer。
</div>

---
layout: two-cols
---

# 企业为什么想要自己的模型

<div class="text-sm leading-relaxed mt-2">

- **成本：太贵**——Palo Alto Networks CEO 在 X 上呼吁 Claude 降价："因为我现在客户已经用不起你的模型了"；他们本身是 Project Glasswing（用 Claude 找网络安全漏洞）的深度合作方
- **稳定性：怕断供**——"政府一纸禁令，你突然你就没有这个模型的access了"，产品会建在没有保障的沙子上；Fable 还好只上线了三天
- **护城河：怕被内化**——担心变成下一个 Cursor；与对手用同样的基模就没有差异化；Anthropic 与黑石的合资公司更让企业客户警觉

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./own-model.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 谁适合拥有自己的模型

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<strong>高质量专有数据</strong>
<div class="text-xs opacity-70 mt-1">没有数据，就没必要做后训练</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<strong>明确的评估系统</strong>
<div class="text-xs opacity-70 mt-1">能知道自己模型有没有变好——如 Harvey 的 legal agent benchmark</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<strong>高频高价值业务</strong>
<div class="text-xs opacity-70 mt-1">模型提升几个点，就能带来经济价值</div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>适合的行业</strong><br/>
<span class="text-xs opacity-70">法律、医疗健康、金融、咨询——这些也正是 OpenAI 与 Anthropic 会去做的方向</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>初创公司怎么办</strong><br/>
<span class="text-xs opacity-70">先用 OpenAI、Anthropic 的模型跑通产品、拿到市场验证，不该自己训模型；但"帮别人拥有模型"本身是一个创业方向</span>
</div>

</div>

<div class="mt-3 p-3 text-sm bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
<strong>这次和 2024 不同</strong>：当年的微调红利被基础模型进步覆盖；现在两个变化——FDE（全向部署工程师）成本比两年前下降（AI coding 本身变强了）；开源前沿模型 + 私有数据可以超过 frontier 模型，且短期内不会被反超。
</div>

---

# 中国开源模型四杀

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>过去八周，全球最强开源四次易主</strong>：Kimi 2.6 → DeepSeek v4 → Kimi 2.7 → GLM 5.2
</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>现在的位置</strong><br/>
<span class="text-xs opacity-70">在编码和成本上逼近 GPT 5.5 / Opus 4.8 级别；最强闭源仍领先约半年，差距目前没有继续拉大</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>GLM 5.2 的三个标签</strong><br/>
<span class="text-xs opacity-70">TerminalBench 首个开源破 80；多项长文本编码任务超 GPT-4.5、成本只有六分之一；"这是第一个他们觉得编程手感对的模型"</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>杀手锏</strong><br/>
<span class="text-xs opacity-70">智谱支持 Anthropic API——沿用 Claude Code 的 Harness、把后端 API 换成 GLM 5.2，有人称可"几乎无痛"替换 Opus 4.8</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>DeepSeek 符合预期</strong><br/>
<span class="text-xs opacity-70">infra 扎实的改进，但没有惊艳到大家</span>
</div>

</div>

---

# 另一种中美合作：开源生态 × 美国服务商

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模式</strong><br/>
<span class="text-xs opacity-70">Fireworks、Applied Compute 等美国模型服务公司 + 中国开源模型生态，一起服务（最初往往是美国的）客户</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>共同的对立面</strong><br/>
<span class="text-xs opacity-70">"越来越强、似乎无所不能、什么都想干"的 Frontier Labs</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>SG-Lang 的起飞靠 v3</strong><br/>
<span class="text-xs opacity-70">当时优先支持 DeepSeek v3，大量人想用 v3 部署 MoE；v4 投入很多但 ROI 不如 v3</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>历史规律</strong><br/>
<span class="text-xs opacity-70">"你方唱罢我登场"——过去三年很少有人一直领先；闭源一直没被开源真正追上，领先几个月到半年，且闭源可能有没展露的内部能力</span>
</div>

</div>

---

# Claude for Teams：AI 进入协作空间

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>功能</strong><br/>
<span class="text-xs opacity-70">在 Slack 里 @Claude 提交任务，完成后把结果返回到群聊；从"个人助理"变成"24 小时监听需求、拥有全部上下文的同事"</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Karpathy 的评价</strong><br/>
<span class="text-xs opacity-70">加入 Anthropic 后他说这是 "AI UI UX的第三次大改"——第一次是网页 chatbot，第二次是手机/电脑 App，第三次是 AI 进入协作空间</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>数据点</strong><br/>
<span class="text-xs opacity-70">Claude Code 团队产品经理 Catherine 说，产品团队约 65% 的代码通过 Claude for Teams 完成</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>竞争影响</strong><br/>
<span class="text-xs opacity-70">团队最爱 Devin 的点就是 Slack 协作体验；Claude 入局后 Devin 用户群承压——Devin 卖工具、也卖服务（比如把银行几十万行 Fortran 代码迁移成 Python）</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>Henry 的判断</strong>：概念并不新，"没有Andre说的那么新"——关键看谁第一个执行得很好。
</div>

---

# Record and Replay：把技能从人搬到 AI

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>机制</strong><br/>
<span class="text-xs opacity-70">Record：让 Claude 录制你完成任务的过程，固化成 skill；Replay：按 skill 记录用 computer use 自动重放</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>类比</strong><br/>
<span class="text-xs opacity-70">像机器人的遥操——早期遥操就是把人类操作能力迁移到机器上</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Meta 的 MCI</strong><br/>
<span class="text-xs opacity-70">内部项目更早做了这件事——员工电脑装软件录屏，希望"把员工蒸馏掉"；强制推行引起反弹，出现安全与数据泄露问题后被叫停</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>OpenAI 的路径</strong><br/>
<span class="text-xs opacity-70">自愿使用、抢先产品化，时间线上更领先</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>模型进展</strong>：OS World 上"御三家"全部超过人类极限 72%——Opus 约 83%，GPT 5.5 接近 80%。
</div>

---
layout: two-cols
---

# 哪个更引领未来？

<div class="text-sm leading-relaxed mt-2">

- **Henry 的判断**：概念上 Record and Replay 更代表未来方向，会有更多厂商追随；但它依赖 computer use 模型的多步准确性与延迟，都还有待提升
- **短期影响**：Claude for Teams 更大——会有很多人实际用起来，也会冲击 Devin 一类公司
- **数据飞轮**：大量真实使用 → 可能快速拿到市面上最大的 computer use 数据集；但数据条款能否用于训练未知
- **数字世界 vs 物理世界**：放弃数字隐私已成习惯；物理世界还有心理门槛——机器人要先造出来放进真实环境才有数据，链路更长

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Interaction Model：从对讲机到打电话

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Thinking Machines Lab 首秀</strong><br/>
<span class="text-xs opacity-70">首个模型 Interaction Model——276B 参数、12B 激活，从零训练</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>新能力</strong><br/>
<span class="text-xs opacity-70">边听边说、能看、观察你的动作即时反应、能打断人——"就像一个采访模型"；后台还配一个异步推理模型，把长思考插回对话</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>架构差异</strong><br/>
<span class="text-xs opacity-70">GPT Realtime 本质是对讲机——turn-based，靠外围 VAD 包装；TML 的交互模式是"从对讲机变成了真正打电话"，真正的 full duplex</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>两个 benchmark</strong><br/>
<span class="text-xs opacity-70">Time Speak（按指定时间开口）64.7 vs Realtime 2.0 的 43——Henry 评价后者"基本就是懵了"；Q Speak（听出该说话的线索）81.7 vs 2.9，几乎是基线的水平</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<strong>现状</strong>：只有博客与 demo 视频、未开放 API；推测最终要做 to C 个人助手，先放出交互模型。
</div>

---

# 语音与图像的产品化

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>语音是基础设施</strong><br/>
<span class="text-xs opacity-70">人与 AI 交互的基础方式——让人随时随地用上 AI，是"智能扩散"主线的重要一环</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Realtime 2.0</strong><br/>
<span class="text-xs opacity-70">6 月十几号 API 全量可用，开发者都能上手——成熟产品的一代；Advanced Voice Mode 是否已切换还待确认</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Image 2</strong><br/>
<span class="text-xs opacity-70">Sora 关停后文生图继续——Image Arena ELO 1500 多分，断层领先第二名约 200 分；电影海报等有经济价值的任务比上一代强很多</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Nano Banana 效应</strong><br/>
<span class="text-xs opacity-70">文生图对 to C 增长帮助很大——Nano Banana 发布时 Gemini 下载量大幅上升；有 startup 免费提供 Nano Banana 来引流</span>
</div>

</div>

---

# Meta：重组、裁员与 token maxing 退潮

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Movie Spark</strong><br/>
<span class="text-xs opacity-70">TBD 重组后的第一炮（4 月初），接近前沿但仍在追赶；未完全开放 API，身边没人用过</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>裁员与动荡</strong><br/>
<span class="text-xs opacity-70">小扎的计划是持续裁员、把省下的钱投入 AI 开发；内部有阻力和动荡</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>token maxing 三部曲</strong><br/>
<span class="text-xs opacity-70">"先是frenzy，狂热"→ crash 崩盘 → stabilization 稳定；Q1 花掉上亿美元却没有太多产出；内部 token leaderboard 已取缔，改为人均 quota</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>限额水平</strong><br/>
<span class="text-xs opacity-70">约 500-2000 美元/工程师/月（Uber 四个月就用完了全年的 coding budget）；国内约 5000 人民币</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
<strong>MCI 的教训</strong>：强制美国员工装追踪软件（鼠标、键盘、录屏）→ 安全与数据泄露问题 → 叫停；自愿与强制的差别很大。
</div>

---

# Google：还能追回来吗

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>多模态仍是强项</strong><br/>
<span class="text-xs opacity-70">I/O 发布 Gemini Omni，视频剪辑能力让人惊艳；但战略上在给传统强项多模态降级、给 coding 升级</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>从短暂第一到落后</strong><br/>
<span class="text-xs opacity-70">去年 12 月底 Gemini 1.5 Pro + Anti-Gravity 曾短暂重回第一；今年 OpenAI、Anthropic 在 coding 长足进步，Gemini 没有</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Pareto frontier 优势不再</strong><br/>
<span class="text-xs opacity-70">过去给定能力下成本最便宜的基本是 Google；今年 Gemini 1.5 Flash 比之前贵了好几倍</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Noam Shazeer 离开</strong><br/>
<span class="text-xs opacity-70">Transformer 八位作者之一，离开 Google 加入 OpenAI，引发担忧</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
<strong>底子还在</strong>：研究人才储备（除了 Noam Shazeer 还有很多优秀研究员）+ TPU 带来的算力优势。
</div>

---

# xAI：并入 SpaceX 之后

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从 Neural Lab 到 Neural Cloud</strong><br/>
<span class="text-xs opacity-70">放弃训练模型后反而赚钱——集群出租每月 1.25 billion 美元收入</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>太空算力</strong><br/>
<span class="text-xs opacity-70">Elon 要去太空建算力中心，SpaceX 朝算力方向走；回看三年，建特别大的算力是聪明的投资</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Grok 4 的跳票</strong><br/>
<span class="text-xs opacity-70">5 月底马斯克说预训练完成、两到三周后公布，至今未发布——"我觉得Elon is always right, except the timing"</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>人才窟窿</strong><br/>
<span class="text-xs opacity-70">Cursor 团队有后训练经验但可能没有预训练人才，补不齐；现在招的是 agent harness 工程师；听到的都是人离开 xAI</span>
</div>

</div>

<div class="mt-4 p-3 text-sm bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
<strong>还能赶上吗</strong>：Henry 认为"比较难"，但 "you never bet against Elon"——他如果真的想做，就还有希望。
</div>

---

# 预训练窗口关闭了吗

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>仍有新玩家</strong><br/>
<span class="text-xs opacity-70">米哈游说要用一千亿做预训练；蔡浩宇更早就组了 AI 游戏公司，但做预训练是更晚的决定</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Henry 的判断</strong><br/>
<span class="text-xs opacity-70">"我觉得已经结束了"——除非技术出现大的变化、新的瓶颈；那时要解决的是新瓶颈，而不是把老路再走一遍</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Google 与 Meta</strong><br/>
<span class="text-xs opacity-70">与 xAI 不同，团队没有散掉，有机会赶上；Google 的可能性更大</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>交替领先是常态</strong><br/>
<span class="text-xs opacity-70">2023 年 GPT-4 发布时 OpenAI 的领先身位比现在最大的领先还大，后来也被追上；除非某 Lab 先实现 RSI、加速度大幅超过别人，才会出现一家独大——也可能两家差不多同时实现</span>
</div>

</div>

---

# Midjourney 做起了超声波 CT

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>宣布</strong><br/>
<span class="text-xs opacity-70">6 月中推出 Midjourney Medical，首个硬件 Midjourney Scanner——号称"50年来第一个全新的全身医学影像方法"</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>原理</strong><br/>
<span class="text-xs opacity-70">人站在潜水池平台上，约 40 万个超声波换能器环绕；声波全方位穿过身体，每秒生成 TB 级数据；计算集群重建肌肉、脂肪、骨骼、器官的 3D 横截面——叫"超声波 CT"</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>反差</strong><br/>
<span class="text-xs opacity-70">从文生图到医学影像硬件，看起来八竿子打不着</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>资金逻辑</strong><br/>
<span class="text-xs opacity-70">Midjourney 从不向 VC 融资（David 不想受投资人控制），用文生图收入养约 50 人的硬件团队一年多，同时做约 8 个项目（一半硬件一半软件）</span>
</div>

</div>

---

# David Holz：一个不融资的创始人

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>背景</strong><br/>
<span class="text-xs opacity-70">最早在 NASA 做激光雷达相关工作；创办手势识别公司 Leap Motion，后被竞争对手收购——硬件经验丰富</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>再次跨界</strong><br/>
<span class="text-xs opacity-70">转做 AI 多模态模型，Midjourney 做得非常成功</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>兴趣广泛</strong><br/>
<span class="text-xs opacity-70">在家常办诗歌朗诵、音乐即兴、AI 与人共创音乐等活动，很多研究员和旧金山创业者参加</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>尾声点题</strong><br/>
<span class="text-xs opacity-70">他住在城里、不在硅谷；Henry 打趣：他鼓捣的这件东西"可能都不能算是一个AI硬件"，里面也许还没用那么多 AI——一家 AI 公司做了一件和 AI 没那么直接相关的事</span>
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-[15px] leading-snug">
"左脚踩右脚，螺旋上升。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Henry 对 RSI 自改进循环最形象的概括</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-[15px] leading-snug">
"史诗级能力，但是灾难级发布的一个反面教材。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Henry 评价 Fable 5 的发布</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-[15px] leading-snug">
"这个就是定义级别的这个错误。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Henry 谈 Fable 静默降智，触碰了对齐的基本假设</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-[15px] leading-snug">
"当这个AI模型它work的时候，它比我做的又快，做的比我又好，我感觉我自己没有什么价值。当这个AI模型它不工作的时候，那我更惨了，因为我完全不知道就是它为什么不工作。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 《One AI Builds Itself》中一位研究员的原话</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-[15px] leading-snug">
"这是第一个他们觉得编程手感对的模型。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 硅谷开发者对 GLM 5.2 的评价</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-[15px] leading-snug">
"人其实并不太喜欢听到真实的一些反馈。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— OpenAI 关于模型谄媚的研究发现，Henry 转述</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-[15px] leading-snug">
"准确的击中了老马的需求。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Henry 谈 Cursor 被 SpaceX 收购的时机</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-[15px] leading-snug">
"政府一纸禁令，你突然你就没有这个模型的access了。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Henry 谈使用前沿模型的稳定性风险</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-[15px] leading-snug">
"我觉得Elon is always right, except the timing。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Henry 谈 Grok 4 的跳票</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-[15px] leading-snug">
"50年来第一个全新的全身医学影像方法。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Midjourney Scanner 的宣称</div>
</div>

</div>

---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-6xl font-light opacity-30 mb-8">Fin</div>

<div class="text-lg italic opacity-60 max-w-xl text-center leading-relaxed">
"我觉得应该不会是一家公司持续领先的状况。"
</div>

<div class="text-xs opacity-40 mt-4">
— Henry Yin，谈前沿竞争的未来（除非某个实验室率先实现 RSI）
</div>

</div>
