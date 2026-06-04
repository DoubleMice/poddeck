---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Microsoft Chases the Frontier, SUNO on Fire, Project Solara | Mikey Shulman, Samir Chaudry, Tom Farley, Nikesh Arora, Henri Stern, Alex Good'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Microsoft Chases the Frontier, SUNO on Fire, Project Solara

**TBPN · 2026-06**

Mikey Shulman (Suno) · Samir Chaudry (Colin and Samir) · Tom Farley (Bullish)
Nikesh Arora (Palo Alto Networks) · Henri Stern (Privy) · Alex Good (Post Fiat)

<div class="mt-8 text-sm opacity-60">
五位嘉宾 + Microsoft Build 深度解读 · 2h40m 全景式科技商业对谈
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Microsoft 迈入模型竞赛**

MAI Code One Flash & Thinking One 正式发布，对标 Meta 而非前沿三巨头。OpenClaw 驱动的 Scout 定义 agent-native enterprise。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Suno $4 亿融资**

Bond 领投，留存率六个月涨 50%。"每个人天生有创造力"——消费级 AI 娱乐的里程碑时刻。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**YouTube × 好莱坞**

Backrooms 从 4chan 走进影院，首月 $1.48 亿。Gen Z IP 不是 legacy IP，是互联网协作创造的。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**$270T 证券代币化**

Bullish CEO 判断：加密只是暖场，全球证券市场搬到区块链上才是正片。十年窗口正在打开。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**SaaS 末日？网络安全的答案是 No**

Palo Alto Networks 用 AI 六周发现了过去五到七年的漏洞量。但 AI 仍有 25% 误报率。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI Psychosis & Markets**

当每个人都在把财报粘贴给 AI 分析，市场结构本身在被改写。HPE 这种"无聊老股"暴涨 300%。

</div>

</div>

---
layout: default
---

# Microsoft 进入基础模型竞赛

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### MAI Code One Flash & MAI Thinking One

- 微软首个**编程模型**和**推理模型**
- 以 cost-per-token ROI 为卖点，强调效率而非绝对性能
- 对标 Meta Muse Spark，而非 OpenAI / Anthropic 前沿
- "MAI Thinking One is actually quite competitive with Meta"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 三大差异化策略

1. **清洁训练数据**：不含 NYT、哈利波特等争议内容
2. **零蒸馏承诺**：不依赖任何其他 AI lab 的输出做训练——Elon 在法庭上承认 xAI 等做过蒸馏
3. **企业级 RLE 微调**：不同于 Amazon 的 mid-training checkpoint，微软提供后训练 RL 步骤

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：微软的策略不是"追上前沿"，而是"在最有商业价值的区间做到最强性价比"。清洁数据 + 零蒸馏 = 面向企业法务的护身符。
</div>

---
layout: two-cols
---

# Microsoft Scout：Agent-Native Enterprise

- 基于开源 OpenClaw 框架，首个**主动式 Copilot AI agent**
- 跨云、桌面、Web 操作 Teams / Outlook / OneDrive / SharePoint
- 读到你的邮件、日历、联系人——在企业围墙花园内安全运行
- Alex Heath："Satya Nadella is fully embracing OpenClaw"

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
微软做自己最擅长的事——做平台公司。Agent 的围墙花园里，墙反而是安全感的来源。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Project Solara：Agent-Native Hardware

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 这是什么？

- 微软展示了两类 Agent 原生设备：桌面款 (MediaTek) 和便携款 (Qualcomm)
- 便携款像智能工卡，带指纹、屏幕、摄像头——**不是手机**
- 运行 Project Solara OS：一个基于 Android、为 agent 而非 app 设计的操作系统
- Satya 亲自在 Build 演示了从卡上触发起 agent 完成社交内容拍摄

</div>

<div>

### Ben Thompson 的分析

称之为 vaporware，但"愿景本身非常合理"：
- **云是 hub，多设备是 spoke**。手机不应该是 agent 的中心——被各自生态锁死了
- 企业场景：全员佩戴工卡 → Azure / M365 生态的安全 agent 入口
- **thin is in**：最薄的客户端 = 最强的云计算依赖
- 让人想起 Rabbit R1——同样走"云端计算 + 极简终端"路线，只是早了几年

</div>

</div>

---
layout: default
---

# Scout vs Apple：两种 Agent 哲学

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Microsoft 的策略

- OpenClaw 驱动，但运行在 M365 围墙花园内
- 你可以让 agent 拉取 Excel、PowerPoint、数据库——但不会跑出花园破坏一切
- Alex Heath："You only welcome a growing open framework onto your turf when you're confident you can control the ground it stands on."
- 苹果大概率不会为 OpenClaw 打造像 Scout 这样的白手套体验

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Apple 的处境

- OpenClaw 热潮曾拉动 Mac Mini 销量激增
- 但 Apple 没有企业内部的 agent 场景
- WWDC 即将到来——预期 Siri 会有基础改进（调用捷径、回答 frontier 级别问题）、Gemini 底层驱动
- 但 host 们不期待 Apple 会像 OpenClaw 那样"渗透每个 app"

</div>

</div>

---
layout: default
---

# Suno：$4 亿融资，50% 留存增长

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 融资规模
<div class="text-3xl font-bold text-blue-600 my-2">$400M+</div>
<div class="text-xs opacity-70">Bond 领投，IVP/Forerunner/USV/Lightspeed/Menlo 参投</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 留存增长
<div class="text-3xl font-bold text-green-600 my-2">↑50%</div>
<div class="text-xs opacity-70">六个月，使用/付费留存、会话时长全面上升</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 免费用户
<div class="text-3xl font-bold text-yellow-600 my-2">持续回访</div>
<div class="text-xs opacity-70">免费 tier 用户反复使用，"产品越好，覆盖越广"</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm leading-relaxed">
"Revenue is a trailing metric for how good is your product. And retention is really the best way to think about people are coming to my product over and over again. They're falling in love with it. There's no real hacking that."
<div class="text-xs opacity-60 mt-1 not-italic">— Mikey Shulman, Suno CEO</div>
</div>

---
layout: default
---

# "每个人天生有创造力"

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Suno 的核心信念**：不是只有音乐家才想创作音乐。演示产品时，你拿出手机，引导对方经历那个魔法时刻——**他们的眼睛会亮起来**。问题不是"有多少人想创作"，而是"如何让每个人都能自己体验那个魔法时刻"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**每一次模型/产品更新都扩大了受众**：不只是指标上的拐点向上，而是**受众画像在变宽**。早期是音乐爱好者，现在是任何想用音乐表达自己的人——尴尬短信改编歌曲在 TikTok 爆火就是例子。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**定价哲学**：免费 / $10 / $30 三层。$30 tier 不仅有更多额度，还有高级功能。超量的重度用户按用量付费。"消费娱乐 vs 生产力工具的区别：用户真的会在乎花了多少钱——因为我们不是在帮老板完成任务。"

</div>

</div>

---
layout: two-cols
---

# 音乐 AI 没有标准答案

- 编程、下棋有客观的正确答案 → 能做 RL / verified reward
- **音乐没有对错** → 所有 RL 技巧失效
- Suno 不追求"擅长爵士"——而是"发现爵士是短板就去补"
- 一首 10K 播放 vs 10M 播放的歌，你听不出区别 → AI 不该当裁判

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这和 coding/chess 的"尖峰智能"完全不同——那些领域有标准答案，所以模型可以 spike。音乐没有标准答案，所以模型在 smooth out。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 300M 付费流媒体用户 = 消费级 AI 娱乐的 TAM

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Mikey 不同意 Ben Thompson

Ben 会问：消费者不愿为娱乐付费，应该靠广告。Mikey 的反驳：
- ~8 亿人用流媒体音乐，**近半数（~3 亿）付费**
- "You probably subscribe to multiple video games, you probably subscribe to multiple video streaming platforms. Why not music?"
- 在 10 年内，订阅多个音乐服务将成为常态

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 音乐消费的创新真空

- 当前所有音乐 app 的体验一模一样——都是流媒体播放器
- 未来当你不仅消费音乐，还能**把玩和创造**音乐时，新品类诞生
- "For the first time in a long time in music, there's innovation on the end user experience."
- Suno 的愿景不是取代 Spotify——而是让音乐成为一种**参与体验**

</div>

</div>

---
layout: default
---

# Suno 的下一个文化里程碑

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 当前状态

- AI 音乐争议在减弱——很多人用了但不公开说
- 当"大家都知道大家都知道"时，自然就正常化了
- 类比 ChatGPT：一开始 anti-AI 的人发现它能帮忙写作业，态度就软化了
- 已有大量流行音乐中悄然使用了 Suno——但缺少**公开庆祝这一过程的 moment**

</div>

<div>

### Mikey 设想的两个引爆点

1. **某位知名艺人主动记录并庆祝用 Suno 创作的过程**——像 Martin Scorsese 为 Black Forest Labs 站台那样（AI 用于 pre-visualization，而非端到端替代）
2. **艺人发行一张"让粉丝用 Suno remix"的专辑**——新的艺人-粉丝连接形式，加深参与感

</div>

</div>

---
layout: default
---

# Backrooms：从 4chan 到 $1.48 亿

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 起源
<div class="text-lg font-bold text-blue-600 my-1">4chan 图片</div>
<div class="text-xs opacity-70">一张 creepypasta 图片 → 互联网协作叙事，百万人共创世界观</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### YouTube 试水
<div class="text-lg font-bold text-green-600 my-1">Kane Parsons</div>
<div class="text-xs opacity-70">16 岁开始，用 Blender 创作 Backrooms 短片，社区共建 3D 素材库</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 影院引爆
<div class="text-lg font-bold text-yellow-600 my-1">$148M 首月</div>
<div class="text-xs opacity-70">A24 制作，三万平方英尺实体布景，击败 Marty Supreme 的大规模营销</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>Samir 的核心判断</strong>：Gen Z IP 不是 legacy IP（如 The Mandalorian）。它是互联网上协作创造的——当它走进影院，你去看的是一个你参与构建的世界。这解释了它为什么能打败传统大片的营销机器。
</div>

---
layout: two-cols
---

# 为什么 YouTube 创作者现在才遇到好莱坞？

<div class="text-sm leading-relaxed">

### Samir 的三点解释

1. **Gen Z IP = 协作式 IP**  
   Backrooms、Minecraft Dream SMP——数百万人在互联网上共创。走进影院的不是"一个故事"，而是"你参与过的故事"

2. **互联网创作者更懂注意力**  
   "The audience is begging and you have to convince them to stay." 没有 George Clooney 当护身符——每一帧都在争夺注意力

3. **好莱坞工匠人才过剩**  
   摄影师、编剧、布景师——有人没活干，和互联网创意人形成完美互补

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 恐怖片作为滩头：为什么是这个品类？

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ROI 碾压一切

- **Talk to Me**：$4M → $100M（Roc A Roc 兄弟，YouTube 起家）
- **Obsession**：$1M 制作 → $148M 不到一个月（Curry Barker，20 天拍完）
- **Markiplier**：$5M 自费 → 自己打电话放进 4,600 家影院
- 对比：The Mandalorian $265M → $247M

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么恐怖片适配 YouTube

- 制作成本天然低（Blair Witch 90 年代已验证）
- YouTube 恐怖/游戏社区已有深厚受众基础
- 动画（Amazing Digital Circus 前几集超 5 亿次观看）是下一个
- Samir 预测：好莱坞每个经纪人都会开始问创作者"你有恐怖剧本吗？"
- 会有过度反应——但这证明 YouTube 已被视作 IP 孵化器

</div>

</div>

---
layout: default
---

# 好莱坞转型的缺失环节

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Development 是缺失的一环** — A24 从 Kane 16 岁签约、辅导到 20 岁。Curry 的喜剧背景铺垫了他的电影能力。不是每个有粉丝的创作者都会拍电影。Samir 警告：好莱坞会过度反应，乱给创作者砸钱拍片——但 **development matters**。当你把创作者包围在有经验的人中间，帮他们写剧本，才会产出长期 IP。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**互联网疲劳让影院回归** — "I think there's a bit of Internet fatigue that is allowing theaters to come back." 过度屏幕时间后，人们渴望线下共同体验。Theaters are available, and they're great.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**CGI 是 audition，实体布景是 event** — Backrooms 粉丝本以为会是全 CGI（他们有 Blender 素材库），但 A24 建了 30,000 平方英尺实体布景。如果全是 CGI，"不如就看 YouTube"。实体的 tactile 体验才是影院价值。

</div>

</div>

---
layout: default
---

# Tom Farley：从 NYSE 主席到 Coinbase 首笔大钱

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2013：一次门廊对话

- Tom 表弟 Dan Romero（Farcaster 创始人）大学毕业说："不去 Duke，去西部搞区块链"
- Dan 坐在门廊上解释智能合约——说这将取代 NYSE
- Tom 时任 NYSE 主席，听后说："等等？什么？"
- 但他说：**"If you're doing it, I want in."**
- NYSE 投了 **$10M** 进一个几乎没有收入的 Coinbase

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 华尔街的两极反应

- 西海岸庆祝："传统金融验证了 crypto"
- 东海岸疑惑："这是什么鬼投资？"
- Tom 承认当时的 thesis **完全错了**——以为加密是面向机构（实际上机构十年后才来），零售端才是早期采用者

</div>

</div>

---
layout: default
---

# 加密十年：暖场结束，正片开始

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 为什么"胜利旗"还没挂

Tom 不是 cheerleader：
- 投入了太多钱和注意力，真正成功的加密公司**相对很少**
- 对传统金融的颠覆**非常非常小**
- 有过冬天、欺诈——但这些都是 **warm up act**
- "It's all been a warm up act." 区块链宕机、监管不明朗已成过去

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 正片的证据

- 稳定币：$0 → $300B，用于交易、支付、借贷
- Genius 法案：国会批准稳定币；Clarity 法案在路上
- 全球机构在入场：亚洲（香港/新加坡）、欧洲（布鲁塞尔）
- 货币市场基金、美股已在区块链轨道上
- NYSE / DTCC / Kraken / Binance 全在代币化股票和固收

</div>

</div>

---
layout: two-cols
---

# 加密十年：暖场 → 正片

<div class="text-sm leading-relaxed">

- 2013-2026: 零售采用、炒作周期、欺诈、冬天
- 2026+: 稳定币 $300B PMF、Genius 法案、机构入场
- 货币市场基金已上链、美股正在代币化
- "It's all been a warm up act." — Tom Farley

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./warmup-to-main.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 全球证券市场 $270T → 区块链轨道

<div class="text-sm leading-relaxed">

### 为什么是区块链？

- **裸卖空**在传统体系中"非法但可行"——层层嵌套中介难以追踪
- 区块链上：股票在钱包里 or 不在，**一目了然**
- 发行人想奖励长期持有者——需要知道谁真的持有了多久
- 24/7 交易带来海外增量买家（NVDA 级别全球需求）
- 区块链可消除结算延迟

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 24/7 交易与 IPO 的未来

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**全球需求驱动 24/7 交易** — 像 NVDA 这种股票的增量买家来自海外。他们不想交易劣质衍生品或 IOU，想要**真正的股票**。开 24/7 可以引入新流动性、降低公司权益成本。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**SpaceX IPO（下周五）将创造历史** — Tom 回忆起 Alibaba IPO："Jimmy Lee 走过来问我，你们到底测试过没有？你即将收到不计其数的零售订单。" SpaceX 的 IPO 让阿里巴巴看起来像幼儿园。周五 IPO + 周末消化 + 周一平稳——区块链技术可以让这个过程更平滑。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**不同参与者的不同利益**：发行人关心消除裸卖空、稳定币分红、奖励长期持有者。投资者关心更低的交易成本。做市商关心能否在全球时间区提供流动性。**区块链对每一方的价值都不同。**

</div>

</div>

---
layout: default
---

# 稳定币：全球支付的"文件格式"

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Deel × Stripe × Privy 的合作** — Henri Stern 从 Money 2020 发来报道：Deel 发布全套稳定币方案——全球承包商收款（阿根廷首发）、加密钱包 app、自发行稳定币。Stripe 从双端接入——让用户能用稳定币卡通过 Visa/Mastercard 消费，也帮商家直接接收稳定币。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**"File format for money"** — Henri 的比喻：USDC / USDT / 各种链上稳定币就像 JPEG / PNG。底层不重要，用户体验是"无缝的"。稳定币卡让商家体验与传统信用卡完全一致——他们不需要知道背后是稳定币。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**最强的是点对点走廊** — US↔Mexico 的 Felix 已占 **5%** 的汇款走廊（总 $60B/年）。UAE↔India 等走廊也在爆发。拉美是最活跃的地区。中国基本无缘——"今天在中国，稳定币不可用"。

</div>

</div>

---
layout: default
---

# Nikesh Arora：为什么 SaaS Eclipse 在网络安全失效

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### SaaS Eclipse 为何被宣告死亡

- 市场一度认为 "AI 吃所有软件"
- 但 **unaided AI 的误报率是 25%**
- 在网络安全领域，25% 错误不可接受
- Nikesh 的比喻："就像让 OpenAI 直接开你的车——没有我不用更安全。让我们直接把模型放进新车然后开走？这不行。"
- PANW 股价短暂抛售后反弹——市场认清事实

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 是增强，不是替代

- PANW 在全球 **1.25 亿个 enforcement point** 上
- AI 让这些点变得更聪明——但不取代它们
- "We're the TSA of the Internet. Every bit has to go through a firewall. Good bit, bad bit."
- 网络安全是 inspection 业务——流量越大，需求越多

</div>

</div>

---
layout: default
---

# 五到七年的漏洞，六周全部找到

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 过去
<div class="text-2xl font-bold text-blue-600 my-2">4-5 个/月</div>
<div class="text-xs opacity-70">108 个产品，每月找到几个漏洞，发补丁</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### AI 加速后
<div class="text-2xl font-bold text-green-600 my-2">5-7 年工作量</div>
<div class="text-xs opacity-70">六周内完成等量发现。重新调配人员集中修复，发大补丁</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 六个月后
<div class="text-2xl font-bold text-yellow-600 my-2">更干净的 baseline</div>
<div class="text-xs opacity-70">清掉多年技术债。下一轮模型找到的漏洞会比现在少很多</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
"What we found in the last six weeks was it would have taken us five to seven years to find. So a huge deluge of vulnerabilities... It's bumpy, but it's a better starting point six months from now than it is today."
<div class="text-xs opacity-60 mt-1 not-italic">— Nikesh Arora, Palo Alto Networks CEO</div>
</div>

---
layout: two-cols
---

# 五到七年的漏洞 → 六周清空

<div class="text-sm leading-relaxed">

### 之前

- 每月发现 4-5 个漏洞
- 108 个产品，人工测试
- 5-7 年积累 ≈ 300-400 个漏洞

### AI 之后（6 周）

- 相同数量的漏洞在 6 周内全部发现
- 重调人力集中修复
- 下一个模型能找到的会大幅减少
- "Paying off years of technical debt in weeks"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./time-compression.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# AI 时代的攻防窗口

<div class="text-sm leading-relaxed">

### 进攻方

- MITOS 等模型已具备**串联漏洞发起攻击**的能力
- OpenAI / Anthropic / Google 都有类似
- 6-9 个月内模型能力将扩散到无法约束
- "Six to nine months from now, it'll be impossible to put the genie back in the bottle."

### 防守方

- America 拥有全球 **90%** 网络安全公司和超算设施
- 足够的 GPU = 更大的防御推理规模
- 安全是不对称战争——防守方必须 100% 对，攻击方只需对一次

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI 在企业内部：民主化智能

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核心洞察**：招 100 个营销人员——10 个顶尖、80 个中等、10 个垫底。AI 能把所有人拉到顶尖的 95%，然后只需要人的判断力贡献最后那 5%。**"A rising tide lifting all boats from an average intelligence perspective."**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Palo Alto 的 AI 哲学**：
- 敏感代码走**自行部署的隔离模型**——不接公网、不训练外部模型
- 客服等任务用**小型开源模型**——不需要 180 的 IQ
- 30 人团队做 AI 驱动的客服重构——是**业务转型项目**，不是"用 AI 工具"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**AI Psychosis 在企业端的解药**：Nikesh 说，当你把 AI 嵌入完整业务流程（整合 ML、知识库、诊断 agent），误报率从 25% 压到低个位数——你就不会陷入"让 AI 评价 AI 做得好不好"的幻觉循环。你必须知道 ground truth。

</div>

</div>

---
layout: default
---

# 企业 AI 落地：不再"token maxing"

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### PANW 如何只用了一百万美元

- 使用 MITOS 找关键 bug——但整个项目的 token 账单只有 **$1M**（对比行业的 $500M 级账单）
- 不是文化问题，是方法论问题：
  - 敏感代码 → 自建隔离模型 → 不付 token 费
  - 非敏感 → 开源小模型 → token 成本极低
- "I'm trying to reduce my false positive down to low single digit. I can't run enterprise business AI with high false positives."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 警惕 AI 的"自我评价"

- Nikesh 做 earnings prep 时，Gemini 的 "refine" 功能把 "we simulated a cyber attack" 改成了 "we attacked"
- "I can't let AI lose not pay attention to what it's doing. I still need the human supervision. I need the guardrail."
- 关键教训：**如果让 AI 评价自己是否做得好，就进入了 psychosis 的循环**

</div>

</div>

---
layout: default
---

# 量子密码：今天就要准备

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 威胁今天已在发生

- 国家行为体**今天就在收集加密流量**，等量子计算机成熟后解密
- "I'm pretty sure nation states will have Quantum capability much before it's commercially available."
- 一旦量子可用，今天截获的机密数据全部暴露

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### PANW 的量子方案

- 量子加密就绪评估：扫描客户现有加密资产
- 量子安全密钥包裹：即使基础设施未升级，也能用量子安全密钥包裹现有流量节点
- "You can buy a wrapper from us." 全密码学库存 + 跨流量节点量子安全加密

</div>

</div>

---
layout: two-cols
---

# AI Psychosis：三阶段循环

<div class="text-sm leading-relaxed">

- **阶段 1**：恐慌 — "我的工作毫无意义，AI 会做得更好"
- **阶段 2**：实际使用 — 发现 AI 在你深耕的领域很弱，在不了解的领域很强
- **阶段 3**：出路 — 自动化自己、寻找 AI 解锁的新网络效应
- "The only way out is through."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./psychosis-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Alex Good：走进 AI Psychosis，再走出来

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### AI Psychosis 三阶段

Alex 在 2023 年就经历了：
1. **"我的工作毫无意义"**——AI 能做一切
2. **实际接触后**——你不懂的领域 AI 很强，深耕的领域 AI 很弱
3. **"既然 AI 会淘汰我，那我就是第一个淘汰它的人"**——自动化自己的一切，然后寻找新能力

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 出路："The only way out is through"

- 识别 AI 解锁了什么**以前不可能的网络效应**
- 例子：用 AI 汇聚 Microbare 社区数百贡献者的智慧 → 可执行的交易信号（"Palantir 本体论方法 × 华尔街赌注"）
- 用 Codex/agent 开发 crypto——所有 crypto 代码开源 → 在 LLM 训练集里 → 天然擅长

</div>

</div>

---
layout: default
---

# AI 正在重写市场行为

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**财报分析被 AI 拉平** — 以前极少数人能深度分析 ASML 的财报。现在所有人把 transcript 贴给 AI。Claude 对 ASML 这类复杂标的"高度投入"——比人类更兴奋。"The really esoteric bottleneck stocks are the ones AI engages with most." 结果：历史上只有专业对冲基金才能理解的股票，现在散户也在买。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**"无聊股"暴涨** — HPE 是最无聊的公司之一，70 年历史，穿着西装的老头们。但有了三位数数据中心增长 → meme stock。Micron / SanDisk 从"爷爷奶奶的可靠持仓"变成万亿估值瓶颈。AI 正在重新分类哪些是"增长股"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**比特币 thesis 在弱化** — 隐私币加速采用（Monero 在欧盟存活、Tornado Cash 胜诉）；Saylor 杠杆集中制造 BTC 下行压力；"有用 PoW"新范式——GPU 同时挖矿和提供 AI 推理。

</div>

</div>

---
layout: default
---

# Crypto × AI：正在浮现的新方向

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 坏消息：目前的交叉点令人失望

- 黑客利用 agent 攻击 X 账户、exploit 协议
- "你可以 prompt engineer agent 给你打钱"
- Crypto + AI 的 hackathon 级别事件频发

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 三个新方向

1. **Useful Proof of Work**：GPU 同时挖矿 + 验证 AI 推理。Pearl（以色列团队，TogetherAI 合作，$2B FDV）、Ambien（a16z 支持）。问题是：补贴后仍比 OpenRouter 贵。
2. **Crypto 代码在 LLM 训练集里** → agent 天然擅长 crypto 开发，工程成本可降 60%
3. **IP 宇宙价值重估**：AI 需要训练数据 → 知识产权成为核心资产

</div>

</div>

---
layout: default
---

# 娱乐业的 AI 悖论

<div class="text-sm leading-relaxed mt-3">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">

### 前沿 AI 公司主动退出娱乐

Anthropic 的 Dario 说不做视频/图像。OpenAI 关掉 Sora。前沿公司选了 **$2T 的企业市场**，留给 Suno 一个 **$20B+** 的消费娱乐市场。"Mikey 在今天节目中宣布 $4 亿融资——最强大的竞争对手帮他清理了战场。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3 text-sm">

### 悖论：AI 成本下降将重写游戏规则

- 现在：实时 AI NPC = 每局游戏 $6，不可行
- 未来：成本降到足够低 → **游戏/娱乐 AI 体验大爆发**
- Nintendo -40%、Take-Two 被抛售——市场尚未定价这个反转

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### IP 宇宙价值进入重估期

- Harry Potter 可从 Claude/DeepSeek 提取 98%
- Anthropic-LibGen 数十亿美元和解 → 训练数据需要合法授权
- Games Workshop（Warhammer 宇宙）、任天堂等 IP 富矿的估值逻辑将被重写
- 当 AI 可以无限生成 IP 宇宙内容时，原创 IP 反而更稀缺

</div>

</div>

---
layout: default
---

# 加密的末日 thesis 与比特币的未来

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Doom Thesis 是什么？** AI 可能不加速生产力，而是加速**监控国家**的到来 → 资本逃离体系。Peter Thiel 搬到阿根廷、Zcash 上涨、Monero 在欧盟打压下存活——都是这个 thesis 的展开。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**比特币 thesis 弱化的三个原因**：
1. 隐私非内建——Monero 被证明不可扼杀，Tornado Cash 在美国胜诉
2. Saylor 的杠杆集中——MicroStrategy 的复杂可转债工具集中了 BTC 流动性和所有权
3. "有用 PoW" 新范式——为什么要烧 ASIC 挖矿？GPU 既能挖矿又能提供 AI 服务

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**但 crypto 的 OpEx 效率是真实优势**：所有 crypto 代码开源 → LLM 训练集里 → agents 天然擅长 crypto 开发。历史上最浪费的行业，正在被 AI 效率化。

</div>

</div>

---
layout: default
---

# 五条主线，一个共同主题

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Microsoft
AI 让 cloud-first agent 生态成为可能

<div class="text-xs opacity-70 mt-1">Scout + Solara：计算在云，终端极薄</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Suno
AI 让音乐从消费变成参与

<div class="text-xs opacity-70 mt-1">300M 人付费听 → 多少人想做？</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 好莱坞
Internet-native 创作者获得发行管道

<div class="text-xs opacity-70 mt-1">Backrooms: $0 → $148M</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 加密
10 年暖场结束，$270T 迁移开始

<div class="text-xs opacity-70 mt-1">稳定币有 PMF，机构加速入场</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 网络安全
AI 发现更多漏洞，修补也在加速

<div class="text-xs opacity-70 mt-1">5-7 年的 debt 6 周清完</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 市场结构
AI 拉平分析能力，重写估值逻辑

<div class="text-xs opacity-70 mt-1">HPE 从无聊股变 meme stock</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>共同线索</strong>：AI 不是"取代一切"的洪水猛兽——它是让已有趋势加速十倍的催化剂。加速意味着窗口更短、节奏更快、赢家输家差距更大。每个领域的领先者都在用 AI 加固自己的位置，而不是被 AI 替代。
</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这场 2 小时 40 分钟的对谈里，最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"Revenue is a trailing metric for how good is your product. Retention is really the best way to think about people are coming to my product over and over again. They're falling in love with it."
<div class="text-xs opacity-60 mt-1 not-italic">— Mikey Shulman (Suno) · 论产品哲学</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"Music has no right answers. All of those techniques actually don't work. We're actually in the regime where it's much less spiky."
<div class="text-xs opacity-60 mt-1 not-italic">— Mikey Shulman · 论 AI 与音乐的本质差异</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"Gen Z IP is not legacy IP like The Mandalorian. It's IP that is collaboratively created on the Internet."
<div class="text-xs opacity-60 mt-1 not-italic">— Samir Chaudry · 论新 IP 范式</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"Too much money can kill creativity very quickly, and it just becomes a product."
<div class="text-xs opacity-60 mt-1 not-italic">— Samir Chaudry · 论创作者经济</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"I am very, very optimistic that I come on this show a decade from now and the global securities market is on blockchain rails. And that's a $270 trillion market."
<div class="text-xs opacity-60 mt-1 not-italic">— Tom Farley (Bullish) · 论加密未来</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"This is a file format for money. We accept JPEGs and PNGs just the same."
<div class="text-xs opacity-60 mt-1 not-italic">— Henri Stern (Privy) · 论稳定币</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于 AI、安全与未来最重要的几句话：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"We're the TSA of the Internet. Every bit has to go through a firewall. Good bit, bad bit. Bad bit, stay away."
<div class="text-xs opacity-60 mt-1 not-italic">— Nikesh Arora (Palo Alto Networks) · 论网络安全</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"What we found in the last six weeks was it would have taken us five to seven years to find. It's bumpy, but it's a better starting point six months from now than it is today."
<div class="text-xs opacity-60 mt-1 not-italic">— Nikesh Arora · 论 AI 漏洞发现加速</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"AI will democratize intelligence. The biggest risk in businesses is you hire 100 marketing people, not all of them are equally good."
<div class="text-xs opacity-60 mt-1 not-italic">— Nikesh Arora · 论 AI 在企业中的角色</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"Six to nine months from now, it'll be impossible to put the genie back in the bottle or constrain them."
<div class="text-xs opacity-60 mt-1 not-italic">— Nikesh Arora · 论安全模型扩散</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"The only way out is through. How do I literally automate everything that I did before, and then how do I also just start to think about network effects that were impossible?"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Good (Post Fiat) · 论 AI Psychosis 的出路</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"Why can't you subscribe to multiple music things? And I think the answer is in 10, you will."
<div class="text-xs opacity-60 mt-1 not-italic">— Mikey Shulman (Suno) · 论音乐消费的未来</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8">

**Microsoft Chases the Frontier, SUNO on Fire, Project Solara**

<div class="mt-6 text-sm opacity-60">

TBPN · 2026-06-03 · 2h40m · 6 位嘉宾

</div>

<div class="mt-4 text-base italic opacity-80">

"We can officially declare the SaaS eclipse dead for cybersecurity."

<div class="text-xs opacity-60 mt-2 not-italic">— Nikesh Arora, Palo Alto Networks CEO</div>

</div>

<div class="mt-8">
  <a href="https://share.transistor.fm/s/e066c7b5" class="text-sm opacity-50 hover:opacity-80">收听完整节目 →</a>
</div>

</div>
