---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI 商业模式正在崩裂——加密如何修补它？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 商业模式正在崩裂<br>——加密如何修补它？

<div class="opacity-60 mt-6 text-lg">
Tommy Shaughnessy × Laura Shin
</div>
<div class="opacity-50 mt-2 text-sm">
Delphi Ventures 创始合伙人 · Unchained Podcast
</div>
<div class="opacity-40 mt-2 text-xs">
2026 年 6 月
</div>

---

# 为什么这期值得关注？

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>40× 补贴鸿沟</strong><br/>
订阅月费 $200 的 AI 服务，背后 API 成本是 $8,000。真相即将浮出水面。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>企业费用墙</strong><br/>
Uber、Microsoft 等大企业开始削减 AI 支出。"Token Max" 时代正在终结。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>价格战打响</strong><br/>
OpenAI 大幅降价，WSJ 报道——背后是更深层的企业支出危机。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>中国开源变量</strong><br/>
DeepSeek、GLM 等可能转向闭源——若质量未超越美国，反而利好 OpenAI 和 Anthropic。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>Crypto 的解法</strong><br/>
开源 AI 的资本形成、抗审查访问、去中心化数据——Crypto 天生适合修补这些漏洞。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>去中心化训练的局限</strong><br/>
DiLoCo 等方案虽有进展，但 Tommy 坦言"目前太难"——真实评估，不做过度许诺。
</div>

</div>

---
layout: two-cols
---

# 40 倍补贴鸿沟

<div class="text-sm leading-relaxed">

### 核心发现

Tommy 的同事 Rawson 在 Delphi Ventures 使用 Anthropic API 时反复撞上**支出上限**。这个现象引发了他的思考。

**关键数字**：
- ChatGPT / Claude **订阅**：$200/月 → 几乎无限使用
- 同样的用量走 **API**：约 **$8,000/月**
- 订阅被补贴了 **40 倍**

**为什么这很重要？**
企业从订阅（被重度补贴）迁移到 API（真实成本）时，会遭遇"价格休克"——然后开始寻找更便宜的替代方案。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-cost-pyramid-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 企业的 AI 费用墙

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 撞墙的企业

- **Uber** 削减了 AI 支出
- **Microsoft** 削减了 AI 支出
- 大量企业开始意识到：<strong>"这太贵了"</strong>

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm leading-relaxed">

### "Token Max" 时代的终结

企业正在告诉员工：**"别再无限使用 token 了"**。

过去大家习惯了 ChatGPT 订阅式的"随便用"，但当迁移到 API 后，账单的冲击力是真实的。从"无限包含在内"到"按 token 付费"，落地很痛。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 背后的信号

如果企业连当前水平的 API 支出都觉得太贵，那么以"超高速营收增长"为估值基础的前沿实验室，其商业模式的前提条件正在松动。

</div>

</div>

---
layout: two-cols
---

# 开源替代：企业 AI 支出的"逃亡路线"

<div class="text-sm leading-relaxed">

### 低成本替代方案

企业在问：**"哪里可以不用花天价就能获得 AI 能力？"**

答案来自开源推理提供商：

- **OpenRouter** — 最近融资 $5,000 万
- **Venice AI** — Eric Voorhees 创办，增长迅猛
- **Together AI** / **Fireworks** — 使用量激增

### 关键数据
前沿智能的 **80-90% 质量**，仅需 **1% 的成本**。

当替代品如此便宜且质量足够好时，转向只是时间问题。切换模型只需一键——门槛为零。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./escape-route-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# AI 营收飞轮正在开裂

<div class="text-sm leading-relaxed">

### 飞轮逻辑

前沿 AI 实验室依赖的核心循环：

1. **营收增长** → 证明商业模式
2. **融资买 GPU** → 扩大算力
3. **训练更强模型** → 保持领先
4. **吸引更多用户** → 回到步骤 1

### 裂痕在哪里？

- 企业转向开源替代方案 → **营收增长放缓**
- 营收放缓 → 融资变难
- 融资变难 → 训练跟不上
- 飞轮降速 → IPO 估值承压

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flywheel-crack-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 飞轮降速 → IPO 困境

<div class="mt-3 space-y-4">

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-green-50 border border-green-200 text-sm">
<div class="text-xs opacity-60 mb-1">短期</div>
<div class="font-semibold">低流通、高 FTV</div>
<div class="text-xs opacity-70 mt-1">IPO 结构有利于首日表现</div>
</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-200 text-sm">
<div class="text-xs opacity-60 mb-1">中长期</div>
<div class="font-semibold">财务公开的考验</div>
<div class="text-xs opacity-70 mt-1">回本周期、利润率、增速——全部暴露</div>
</div>

<div class="p-3 rounded bg-red-50 border border-red-200 text-sm">
<div class="text-xs opacity-60 mb-1">关键风险</div>
<div class="font-semibold">营收降速</div>
<div class="text-xs opacity-70 mt-1">企业转向开源的影响尚未计入估值</div>
</div>

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 text-sm leading-relaxed">

### Tommy 的判断

- **出闸瞬间表现好**：流通盘小（低于 10%），被动基金和散户都想买"AGI 股票"
- **之后变棘手**：上市后必须披露所有财务数据。如果企业客户成本保守的趋势成真，市场将重新定价
- **Citadel Securities 也发表了相似分析**（题为 "Tokenomics"——不是 Crypto 的 Token，而是指 AI 的 Token 消耗经济学）

</div>

</div>

---
layout: two-cols
---

# OpenAI vs Anthropic：价格战背后

<div class="text-sm leading-relaxed">

### 发生了什么？

Wall Street Journal 报道：OpenAI 正在考虑**大幅降价**，与 Anthropic 争夺用户。

### Tommy 的两个推论

**推论 1：企业外流的真实规模远超公开数据**
"如果我们公开看到了，他们私下看到的要多得多"

**推论 2：战略打击 Anthropic 的 IPO**
Anthropic 可能率先 IPO。OpenAI 趁对手上市前压低价格，打击其增长数据和利润率——让对手的 IPO 数字尽可能难看。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./price-war-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 中国开源模型的角色

<div class="mt-3 space-y-4">

<div class="grid grid-cols-4 gap-2 text-center">

<div class="p-2 rounded bg-blue-50 border border-blue-200 text-sm">
<div class="font-semibold">DeepSeek</div>
<div class="text-xs opacity-70">全开源</div>
</div>

<div class="p-2 rounded bg-green-50 border border-green-200 text-sm">
<div class="font-semibold">Kimi</div>
<div class="text-xs opacity-70">全开源</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200 text-sm">
<div class="font-semibold">MiniMax</div>
<div class="text-xs opacity-70">全开源</div>
</div>

<div class="p-2 rounded bg-orange-50 border border-orange-200 text-sm">
<div class="font-semibold">GLM</div>
<div class="text-xs opacity-70">目前开源</div>
</div>

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 为什么它们目前选择开源？

**战略性打击**：如果你没有前沿智能，通过提供一个**近乎免费的替代品**来打击竞争对手的利润率和融资能力。这正是中国实验室当前的策略——用开源削弱 OpenAI 和 Anthropic 的商业飞轮。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

Tommy 特别提到 **GLM 5.1** 深受欢迎，社区在开源模型上做各种微调，用途广泛。

</div>

</div>

---

# 中国模型为何可能转向闭源？

<div class="mt-4 space-y-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded border-l-4 border-red-500 bg-red-50 text-sm">

### 信号 1：成本与回报失衡

这些公司投入**巨额资金**训练模型，但几乎收不到回报：

- **没有收入**：模型跑在 Venice、OpenRouter 等第三方推理平台上，不产生直接收入
- **没有数据回流**：无法像闭源模型那样形成"使用→训练"的数据飞轮
- "纯烧钱"模式在商业上无法持续

</div>

<div class="p-3 rounded border-l-4 border-orange-500 bg-orange-50 text-sm">

### 信号 2：微妙的动向

- **Alibaba** 开源了一款模型，**第二天主管就被开除**
- **GLM** 在完全开源前，先把一个版本**私藏了一段时间**
- 这些"小裂痕"暗示着内部可能存在重新评估

</div>

</div>

<div class="p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm leading-relaxed">
<strong>Tommy 的判断</strong>：目前尚未发生，但如果巨额支出持续下去，这些公司最终会考虑闭源。至少可以控制分发和收费。
</div>

</div>

---

# 闭源的悖论：中国闭源 → 美国受益

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 如果中国模型转向闭源……

Tommy 认为这反而会**帮助 OpenAI 和 Anthropic**，前提是中国模型的质量没有超过美国前沿实验室。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 text-sm">

### 受益点 1：替代品消失

如果一切闭源，用户**不再有廉价替代方案**可用。企业无法逃向开源推理提供商——因为开源模型本身不再存在。

</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 text-sm">

### 受益点 2：定价权回归

没有了替代选择，OpenAI 和 Anthropic **可以随意定价**。"如果一切闭源，你只能用我们。想收多贵收多贵。"

</div>

</div>

<div class="p-3 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm leading-relaxed">
<strong>前提</strong>：中国模型当前质量还比不上美国前沿实验室。如果未来追上，闭源将构成真正的竞争威胁。但目前，闭源只会让廉价替代方案消失，反而巩固了美国的垄断。
</div>

</div>

---

# "老大哥" AI：审查与滥用

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 现实案例

有人问 Claude "线粒体是不是细胞的动力工厂"——一个中学生物课级别的问题——结果系统**拒绝回答**，理由是"安全功能"触发。

这不是孤例。越来越多用户抱怨 AI 模型在扮演"警察"角色，阻止他们进行完全无害的查询。

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm leading-relaxed">

### 滑坡效应

Tommy 的态度很鲜明：让 AI 实验室决定你能问什么、不能研究什么，是一个**非常危险的滑坡**。

**"你想生活在中国，连天安门广场都不让问吗？没人想要那样。"**

问题不在于"这个模型有没有拒绝过真正危险的请求"，而在于**谁有权力画这条线**。

</div>

<div class="p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm leading-relaxed">
<strong>Tommy 的坦诚</strong>：他理解确实存在模型可能被滥用的风险——比如造出能摧毁世界的病毒。但那应该是例外中的例外，而不是常态化的内容审查。
</div>

</div>

---

# 开源才是真正的安全解决方案

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 核心论点：Linux vs Windows

Tommy 是坚定的**加速主义阵营**（Accelerationist）：

**"信任一间屋子里的 10 个人——不管他们多天才——行不通。"**

开源的逻辑是：

- **规模化审计**：成千上万的人可以检查、测试、攻击代码
- **攻防博弈**：真正的安全来自于经受过无数次攻击的考验
- **Linux 比 Windows 更安全**，不是因为它天生更完美，而是因为全世界都在盯着它

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### 对 AI 安全的启示

开源、加速、让更多人获得这项技术——这不是安全问题，而是**安全问题的终极答案**。把模型关起来、只让少数人掌控，反而是**增加风险**，不是减少。

Tommy 自认是 **Beth Jezos 阵营**的——坚定加速主义，但能理解有不同的声音。

</div>

</div>

---

# AI 的激励困境：公地悲剧

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 矛盾的多方诉求

每个人都**想要更好的模型** → 这需要更多数据和资金。但：
- 没人**愿意贡献自己的数据**
- 也没人**愿意付高价**
- 前沿模型太贵 → **逃向开源替代**
- 逃向开源 → 前沿实验室**收入下降**
- 收入下降 → **训练放缓** → **我们得不到更好的模型**

这是一个经典的**公地悲剧**：个人理性行为（省钱）导致集体非理性结果（技术进步放缓）。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### Tommy 提出的结构性问题

前沿 AI 实验室创造了巨大的价值，但只通过每月 $20 订阅费来回收成本——<strong>"这根本不公平，也不合理。"</strong>

如果前沿智能创造出一种**新药**或**新机器人**，OpenAI 难道只能受益于一个 $20/月的订阅？Tommy 认为，前沿实验室需要**直接拥有**它们创造的重大发明的一部分——比如 10% 的权益。

</div>

</div>

---
layout: two-cols
---

# Crypto × AI：四个交汇点

<div class="text-sm leading-relaxed">

### 为什么 Crypto 天然适合修补 AI 的漏洞？

AI 面临的问题——**资本形成、审查、隐私、开放社区治理**——正是 Crypto 最擅长的领域。

Laura 提出的框架："公地悲剧的背面，就是 Crypto 的用武之地。"

Crypto 的四个交汇方向：

- **资本形成**：众筹开源 AI 模型
- **隐私与抗审查**：不屏蔽用户请求的 AI 访问
- **数据层**：去中心化数据获取
- **应用层**：开源社区驱动的 Agent 框架

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./crypto-ai-four-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 资本形成：用 Crypto 众筹开源 AI

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### Tommy 的思路

**"非常容易想象"**——为一个主要的开源 AI 公司做 ICO，众筹一个所有人都能拥有、保障和部署的模型。

即使模型的训练是**中心化**的（因为去中心化训练目前太难），但如果我们**共同拥有**它，效果是革命性的。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded border-l-4 border-blue-500 bg-blue-50 text-sm">

### 优势
- 社区**共同所有权**→ 不会被单一实验室垄断
- 资金来源于**全球众筹**→ 不依赖少数 VC
- 开源模型**无法被关停**
- 收入模型可由 DAO 治理决定

</div>

<div class="p-3 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm">

### 挑战
- 开源模型如何**赚钱**？商业模式仍难设计
- 中心化训练的问题——虽然 Idea 对，但去中心化训练目前"太难"
- Google 的 DiLoCo 虽好，实际大规模训练依然困难
- Tommy 坦承：他已经在这个领域"认输"了

</div>

</div>

</div>

---

# 隐私与抗审查：Venice AI

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 为什么 Venice 存在？

回到前面 Claude 屏蔽"线粒体"问题的案例——**Venice 就是为这个而建的**：

- **不屏蔽请求**：你想问什么就问什么
- **隐私保障**：模型运行在私有数据中心
- **端到端加密**：在 TEE（可信执行环境）中运行
- **开源模型访问**：提供最好的开源模型，同时保护你的数据

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 text-sm leading-relaxed">

### 隐私不再是垄断优势

前沿实验室曾以"数据隐私和数据保留"作为说服企业使用其企业版方案的核心卖点。但：

- **OpenRouter** 允许私有模型部署
- **Venice** 提供强大的隐私保证——TEE 中运行、端到端加密
- 这些不再是 OpenAI/Anthropic 的独家功能

**"企业无法获得隐私保障"这个论点正在慢慢瓦解。**

</div>

</div>

---

# 开源社区的力量：Nous Hermes

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 text-sm leading-relaxed">

### 一个"非中心化实验室"的成功故事

**Nous Research** 推出的 Hermes Agent 是一个惊人的案例：

- **15 万 GitHub Star**，数千贡献者持续改进
- **不是由中心化实验室建造的**
- 任何一天、任何一周，Hermes Agent 的使用量是 **OpenClaw 的 3-4 倍**
- Tommy 的**日常驾驶工具**——在 Telegram 上、桌面上，每天都在用

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 text-sm">

### 为什么开源社区能赢？

一旦接入**开源全球社区**，项目就进入了**飞轮和速度**——这是中心化实验室很难追上的。人们会说"实验室太强了"，但数据不这么说。Hermes Agent > OpenClaw，事实胜于雄辩。

</div>

<div class="p-3 rounded border-l-4 border-blue-500 bg-blue-50 text-sm">

### 对行业的启示

**开源社区 + 全球贡献者网络**的组合赋予项目全新的生命力。这不仅是效率问题，更是**方向问题**——一个不会被某个公司关停的 Agent，一个真正属于所有人的工具。

</div>

</div>

</div>

---

# 数据层：Grass 与其他项目

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 text-sm leading-relaxed">

### Grass：去中心化数据抓取网络

- **300 万个全球节点**，分布在世界各地
- 利用闲置用户的设备节点**抓取真实数据**，供应给 AI 实验室训练
- Delphi Ventures 早期投资，Tommy 认为这是一个"很自然"的用例

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 其他值得关注的项目

- **Ambient**：一个"有用工作量证明"（Proof of Useful Work）的 AI 项目，提供高度优化的模型
- **BitTensor**：在去中心化 AI 训练领域做过尝试，包括子网 2 等训练运行

</div>

<div class="p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm leading-relaxed">
<strong>Tommy 的坦承</strong>：去中心化训练虽然理念好，但目前技术难度太大。Google 的 DiLoCo 和去中心化 DiLoCo 虽然发布了几周，但仍面临巨大挑战。作为一个加密投资者，他已经在这个方向上"认输"了。
</div>

</div>

---

# Crypto 如何修补 AI 的商业模式

<div class="mt-3 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded border-l-4 border-red-500 bg-red-50">

### 问题
AI 商业模式崩裂

**症状**：
- 40× 补贴导致企业流失
- 开源替代 1% 成本
- 营收增长放缓威胁飞轮
- 价格战是表象，不是根因

</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50">

### Crypto 解法
众筹 + 共同所有权 + 抗审查

**处方**：
- ICO 融资开源 AI 模型
- 去中心化数据获取（Grass）
- 抗审查访问（Venice）
- 开源社区治理（Nous）

</div>

<div class="p-3 rounded border-l-4 border-yellow-500 bg-yellow-50">

### 尚未解决的问题

**三个"尚未奏效"的领域**：
- **去中心化训练**：技术太难
- **开源模型盈利**：商业模式不清晰
- **速度差距**：前沿实验室仍领先

</div>

<div class="p-3 rounded border-l-4 border-blue-500 bg-blue-50">

### Tommy 的整体判断
长期看多，短期谨慎

- 长期：100% 相信会实现 AGI、机器人、大规模数据中心
- 中短期：企业成本保守 + 开源替代 → 飞轮承压
- 一切都按完美定价——但完美不会持久

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
"订阅被补贴了大约 40 倍。$200/月的订阅，在 API 上大约值 $8,000。"
<div class="text-xs opacity-60 mt-1">— Tommy 揭示 AI 商业模式最深层的不对称</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
"你可以用 1/10 到 1/100 的成本获得同样的智能——80-90% 的质量，1% 的价格。"
<div class="text-xs opacity-60 mt-1">— 开源替代方案的核心竞争力</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
"让 AI 实验室来规定我们能问什么问题——这是一个非常危险的滑坡。"
<div class="text-xs opacity-60 mt-1">— Tommy 对 AI 审查的警告</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded leading-relaxed">
"信任 10 个关在房间里的人，不管他们多天才，都行不通。开放源代码、加速、让所有人来审计——这才是保护世界的最好方式。"
<div class="text-xs opacity-60 mt-1">— Linux vs Windows 论证的 AI 版本</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
"一切都被按'完美'定价了——但完美不会持久。"
<div class="text-xs opacity-60 mt-1">— Tommy 对 AI 估值泡沫的核心警告</div>
</div>

</div>

---

# 核心金句（续）

<div class="text-sm opacity-60 mb-3">更多值得注意的洞察：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
"一旦接入开源全球社区，项目就进入了飞轮和速度——这是中心化实验室很难追上的。Hermes Agent 的使用量是 OpenClaw 的 3 到 4 倍。"
<div class="text-xs opacity-60 mt-1">— 开源的力量胜过中心化，数据为证</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
"企业正在告诉员工：你不能再无限使用 Token 了。"
<div class="text-xs opacity-60 mt-1">— "Token Max" 时代的终结信号</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
"如果中国模型转向闭源且质量不如前沿实验室——那反而帮助了 OpenAI 和 Anthropic。因为替代品消失了，他们可以想收多贵就收多贵。"
<div class="text-xs opacity-60 mt-1">— 闭源的悖论</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
"如果我们公开看到了企业流失，他们私下看到的要多得多。"
<div class="text-xs opacity-60 mt-1">— OpenAI 降价的真正原因不是竞争，是客户在流失</div>
</div>

</div>

---
layout: end
---

# 谢谢

<div class="mt-6 text-lg opacity-70 italic">
"我是 100% 长期看多的——我相信我们会实现 AGI、机器人、大规模数据中心。但短期内，一切都按照完美定价了——而完美不会持久。"
</div>

<div class="mt-8 text-sm opacity-50">
Tommy Shaughnessy · Delphi Ventures · Unchained Podcast 2026
</div>
