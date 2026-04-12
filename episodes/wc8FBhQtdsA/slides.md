---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "An AI State of the Union — Simon Willison on Lenny's Podcast"
info: |
  Simon Willison（Django 联合创始人）做客 Lenny's Podcast，畅聊 AI 编程的现状：
  从 November inflection 到 dark factory，从 lethal trifecta 到 pelican benchmark。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI State of the Union

### We've Passed the Inflection Point & Dark Factories Are Coming

<div class="mt-4 text-lg opacity-70">
Simon Willison × Lenny Rachitsky
</div>

<div class="mt-2 text-sm opacity-50">Lenny's Podcast · 2026</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-xl mx-auto">
<div class="p-2 rounded bg-blue-50 border border-blue-200">Django 联合创始人</div>
<div class="p-2 rounded bg-green-50 border border-green-200">100+ 开源项目</div>
<div class="p-2 rounded bg-orange-50 border border-orange-200">coined "prompt injection"</div>
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### November Inflection
GPT 5.1 + Claude Opus 4.5 让 coding agent 跨过了"大多数时候能用"到"几乎总能用"的门槛

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dark Factory Pattern
StrongDM 实验：没人写代码，也没人读代码 —— 软件质量靠 AI QA 虫群保证

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Lethal Trifecta
Prompt injection 的核心危险模型：私有数据 + 恶意指令 + 数据外泄通道

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Agentic Engineering
Red/green TDD、模板起步、知识囤积 —— 专业工程师用 AI 写代码的实战模式

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 认知极限
4 个 agent 并行跑，上午 11 点就精疲力竭 —— AI 让我们更高效，但也更累

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### OpenClaw 现象
第一行代码到 Super Bowl 广告只用了 3.5 个月，但安全问题令人担忧

</div>

</div>

---
layout: two-cols
---

# November Inflection Point

2025 年全年，Anthropic 和 OpenAI 都在集中训练编程能力。到了 11 月——

<div class="mt-3 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**之前**：coding agent 写的代码"大多数时候基本能用"，但需要密切关注

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**之后**：almost all of the time it does what you told it to do

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-blue-400 bg-blue-50 bg-opacity-20 text-sm">

"A lot of people woke up in January and ... started realizing, oh wow, I can churn out 10,000 lines of code in a day."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./inflection-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Vibe Coding vs Agentic Engineering

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50 bg-opacity-30">

### Vibe Coding

- 不看代码，不管代码
- 非程序员也能让 Claude 搭小应用
- 适合个人原型、只影响自己的场景
- Andrej Karpathy 最初定义：just go on the vibes

<div class="mt-3 text-xs p-2 bg-orange-100 rounded">

Simon 的边界：if the only person who gets hurt if it has bugs is you, go wild

</div>

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Agentic Engineering

- 专业工程师用 coding agent 写生产代码
- agent 不是聊天窗口 —— 它会写、跑、调试、测试
- 需要深厚的软件工程经验
- Simon 正在写的"不算书"的书，就是在讲这个

<div class="mt-3 text-xs p-2 bg-blue-100 rounded">

关键区别：你的 agent 是否在运行代码？没运行 = 只是在复制粘贴 ChatGPT

</div>

</div>

</div>

---
layout: two-cols
---

# Dark Factory 模式

来自工厂自动化的概念：如果工厂完全自动化，不需要人，就可以把灯关掉。

<div class="mt-3 space-y-3 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**规则一**：nobody writes any code — 所有代码由 agent 生成

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**规则二**：nobody reads the code — 不做人工 code review

</div>

</div>

<div class="mt-4 text-sm">

那质量怎么保证？答案是：AI QA 虫群 + 全新的测试方法。

</div>

<div class="mt-3 p-3 italic border-l-4 border-purple-400 bg-purple-50 bg-opacity-20 text-sm">

Simon 半年前觉得这是疯了，但现在他自己 "probably 95% of the code that I produce, I didn't type it myself."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dark-factory.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# StrongDM 的 AI QA 虫群

<div class="mt-2 text-sm opacity-70">Dark Factory 模式的实战案例：安全软件公司用 AI 全自动测试</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模拟用户 Swarm

- 模拟的员工在模拟的 Slack 频道里提需求
- "Hey, could somebody give me access to Jira?"
- 24 小时不间断运行

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 模拟整个基础设施

- Slack、Jira、Okta 都是用 coding agent 搭建的模拟版
- 用公开 API 文档 + 开源客户端库
- 最终变成一个小 Go binary，成本几乎为零

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**规模与成本**：据 Simon 了解，他们每天在 token 上的花费大约 $10,000 —— 相当于一个永不睡觉的 QA 团队。

</div>

<div class="mt-3 text-xs opacity-60">

注意：StrongDM 做的是安全相关的 access management 软件 —— 这不是随便 vibe coding 的领域。他们是理解风险后做出的有意识选择。

</div>

---

# 写代码变便宜了，然后呢？

<div class="mt-2 text-sm opacity-70">Simon 认为这是整个变革中最大的冲击</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 以前
<div class="text-3xl font-bold text-red-600 my-2">2-4h</div>
<div class="text-xs opacity-70">程序员需要不被打断的大块时间</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 现在
<div class="text-3xl font-bold text-green-600 my-2">2 min</div>
<div class="text-xs opacity-70">每次只需给 agent 一个 prompt</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 关键问题
<div class="text-3xl font-bold text-blue-600 my-2">10,000</div>
<div class="text-xs opacity-70">一天能产出的代码行数 —— 怎么保证质量？</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Simon 的实践**：任何想设计的功能，他会让 agent 同时原型化三个不同方案，然后试用比较。原型化几乎免费 —— 这彻底改变了"值不值得做"的判断。

</div>

<div class="mt-3 p-3 italic border-l-4 border-blue-400 bg-blue-50 bg-opacity-20 text-sm">

"I've got 25 years of experience in how long it takes to build something and that's all completely gone."

</div>

---
layout: two-cols
---

# 认知极限：AI 让我们更累

AI 让我们更高效，但脑力消耗比以前更大。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

"I can fire up like four agents in parallel and have them work on four different problems and by like 11 a.m. I am wiped out for the day."

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

有人凌晨 4 点起来给 agent 安排任务，因为"my agents could be doing work for me"

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

Simon 的观察：There's an element of sort of gambling and addiction to how we're using some of these tools.

</div>

</div>

<div class="mt-4 text-xs opacity-60">

Simon 希望这只是新鲜感驱动的暂时现象。agents 真正好用也就最近四五个月的事。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Mid-Career Squeeze

Thoughtworks 召集多家公司的工程 VP 做了一次闭门讨论，结论出人意料——

<div class="mt-4 text-sm">

AI 对谁帮助最大？对谁威胁最大？

答案不是"初级 vs 高级"，而是**中间层**最受挤压。

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Cloudflare 和 Shopify 都说他们在 2025 年大量招实习生 —— 因为 AI 把新人上手时间从一个月缩短到一周。

</div>

<div class="mt-3 text-xs opacity-60">

Simon 的补充：Lenny 的数据显示，科技公司的工程和 PM 岗位开放数已经接近历史新高（不算疫情高峰期），但招聘市场本身被 AI 搅得很混乱。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mid-career-squeeze.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 新年决心：更有野心

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 以往每年

"This year, I'm going to focus more. I'm going to take on less things."

<div class="text-xs mt-2 opacity-60">聚焦、减少、专注</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 2026 年

"This year, my ambition was take on more stuff and be more ambitious."

<div class="text-xs mt-2 opacity-60">扩张、试探、全面拥抱工具</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Lenny 的观察**：AI is supposed to make us more productive. It feels like the people that are most AI pilled are working harder than they've ever worked.

Simon 的回应：他确实有了更多时间，但大脑比以前更累。

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**连锁反应**：朋友们积攒了 10-15 年的 side project backlog，几个月就全做完了 —— 然后反而有一种失落感：my backlog's gone now. Now, what am I going to build?

</div>

---
layout: two-cols
---

# Agentic Pattern #1: Red/Green TDD

Simon 认为这是与 coding agent 合作时**最重要的技巧**。

<div class="mt-3 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**Red**：先让 agent 写测试 → 运行 → 看它失败（确认测试本身有效）

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Green**：再写实现 → 运行 → 看测试通过

</div>

</div>

<div class="mt-4 text-sm">

Simon 本人讨厌 TDD —— 他试了几年，觉得太慢太无聊。但给 agent 做？他不在乎 agent 无不无聊。效果确实更好。

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

**快捷 prompt**：只需输入 `red/green TDD` 五个字符，agent 就知道该怎么做。这就是 jargon 的力量 —— 五秒钟的输入，改变 agent 的整个工作方式。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agentic-patterns.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Agentic Pattern #2: 囤积你知道怎么做的事

<div class="mt-2 text-sm opacity-70">Simon 的职业生涯建议：建一个你试过的技术方案的 backlog</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### simonw/tools

- 193+ 个小型 HTML/JS 工具
- 每个都捕获了一个"这件事可以做"的证据
- 可以让 Claude 组合其中多个来解决新问题

<div class="text-xs mt-2 opacity-60">

例：PDF 渲染工具 + Tesseract OCR 工具 → 告诉 Claude 组合它们 → 搞定 PDF OCR

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### simonw/research

- AI 驱动的研究项目，每个产出一个 markdown 文件
- 不是 deep research 报告 —— 是真正写了代码、跑了代码的结果
- 用 Claude Code 在手机上就能启动

<div class="text-xs mt-2 opacity-60">

"If I published a GitHub repository full of unverified deep research reports, that's very little value to anyone."

</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**为什么公开？** 更容易找到、当 GitHub 备份（三大洲冗余 + 北极仓库）、对个人品牌有价值。

</div>

---

# Agentic Pattern #3: 用模板起步

<div class="mt-2 text-sm opacity-70">一个最薄的 skeleton，胜过一页 CLAUDE.md</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 为什么有效

- Coding agent 极其擅长延续已有模式
- 只要代码库里有一个测试文件，它就会写更多测试
- 只要有一种缩进风格，它就会跟随
- 一个文件就是足够的示范

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Simon 的做法

- 每个新项目从一个极简模板开始
- 模板里有一个测试：`1 + 1 == 2`
- 布局和风格按他的偏好设定
- 比写长篇 CLAUDE.md 更有效

<div class="text-xs mt-2 opacity-60">

"I don't tend to do that because instead I start with a very thin skeleton that just gives it enough hints."

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**副作用**：Simon 对"好代码"的标准也变了。以前觉得一个小库有 100+ 测试太过分，现在不在乎了 —— "updating a thousand lines of test is now the job of the coding agent."

</div>

---
layout: two-cols
---

# Lethal Trifecta

Simon 第二次造词（第一次是 prompt injection）—— 这次故意选了一个你猜不出含义的名字。

<div class="mt-4 text-sm">

三要素同时存在 = 灾难性安全漏洞：

1. **Private Data** — agent 能访问你的私有信息
2. **Malicious Instructions** — 攻击者能把指令注入进来
3. **Exfiltration** — agent 能把数据发送给攻击者

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">

经典场景：你的 AI 邮件助理能读收件箱、接收陌生人的邮件、还能回复邮件 —— 三条腿齐全。

</div>

<div class="mt-2 text-xs opacity-60">

唯一修复方式：砍掉三条腿中的一条。通常最容易砍的是 exfiltration。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lethal-trifecta.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Prompt Injection：为什么解决不了

<div class="mt-2 text-sm opacity-70">Simon 在 2022 年命名了这个问题 —— 但他现在觉得名字取错了</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 命名的陷阱

- SQL injection 是"已解决"的 —— 有可靠的修复方案
- 但听到 "prompt injection" 人们下意识觉得能用同样的方式修
- 实际上不能。LLM 无法可靠区分"指令"和"数据"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 97% 不够

- 过滤器可以挡住大部分攻击
- 但 Simon 认为 97% 是 failing grade
- "3 out of 100 of these attacks will steal all of your information"
- 你没法 deny list 所有人类语言的所有说法

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**一线希望**：Google DeepMind 的 CaMeL paper —— 不试图"修复"prompt injection，而是把 agent 分成 privileged / quarantined 两层，用代码级 taint tracking 控制危险动作的传播。Simon 认为这是目前最靠谱的路径。

</div>

---
layout: two-cols
---

# Challenger Disaster of AI

Simon 类比的不是技术失败，而是**制度性的风险麻木**。

<div class="mt-4 text-sm">

Challenger 灾难的核心教训叫 **normalization of deviance**：

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

"Lots of people knew that those little O-rings were unreliable. But every single time you get away with launching a space shuttle without the O-rings failing, you institutionally feel more confident in what you're doing."

</div>

<div class="mt-3 text-sm">

AI 领域正在经历同样的事：越来越不安全的使用方式 + 暂时没出大事 = 持续加注。

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

Simon 坦承：他每六个月做一次这个预测，过去三年都没应验。但这恰恰是 normalization of deviance 的运作方式。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Simon 的 AI 工具栈

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 编码：Claude Code

- 主力工具，尤其是 **Claude Code for web**（手机可用）
- 在 Anthropic 服务器上运行 → 安全风险低
- 可以开 YOLO mode（dangerously skip permissions）
- 同时开 2-3 个在手机上跑

<div class="text-xs mt-2 opacity-60">

"I write so much of my code on my phone. It's wild. I can get good work done walking the dog along the beach."

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 竞品与搜索

- GPT 5.4 三周前发布，可能已经 on par with Claude Opus 4.6
- OpenAI Codex 和 Claude Code "almost indistinguishable"
- Google 搜索已基本被 AI 搜索替代
- 图像生成用 Gemini（Nano Banana）—— 但只用来恶作剧

<div class="text-xs mt-2 opacity-60">

"It's vibes all the way down." —— 选模型靠的是代码品味，不是对话风格。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**关于 YOLO mode 的关键洞察**：很多人没用好 coding agent 的原因是没开 unsafe mode。在安全模式下 agent 每做一步都要请求许可 —— "It's like working with a really frustrating toddler."

</div>

---
layout: two-cols
---

# OpenClaw 现象

<div class="mt-2 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**速度**：the first line of code for OpenClaw was written on November the 25th → Super Bowl 广告在 3.5 个月后

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**安全**：从安全角度看是灾难性的 —— 有人丢了 Bitcoin wallet。它恰恰是 Simon 最反对存在的那种东西：可以访问所有邮件、代表你行动的个人助手

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**需求**：人们愿意忍受搭建的麻烦（API keys、tokens）和安全风险 —— 说明对 personal digital assistant 的需求是巨大的

</div>

</div>

<div class="mt-3 p-3 italic text-sm bg-yellow-50 border-l-4 border-yellow-400 rounded">

Simon 朋友的比喻：OpenClaw is basically a Tamagotchi, and the Mac Mini is your aquarium.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 OpenClaw 存在？

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Anthropic 和 OpenAI 本可以自己做

但他们**不知道怎么安全地做**。独立第三方没有这个限制 —— 可以直接发布。

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 时机完美

- 首行代码 11 月 25 日 → 12 月底可用 → 正好赶上新模型浪潮
- Claude Opus 本身已经能大部分时间挡住 prompt injection（只是不能 100%）
- 超过 1000 人贡献了代码 —— "an extraordinary kind of a miracle that it works as well as it does"

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 最大机会

<div class="text-sm">

Simon 认为 AI 领域最大的机会：build safe OpenClaw —— 保留人们喜欢的一切，但不会泄露数据或删除文件。

"If I knew how to do that, I'd be building it right now."

</div>

</div>

---

# Artisanal Code 与质量信号的瓦解

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50 bg-opacity-30">

### 以前的质量信号

- 高质量测试 + 完善文档 = 好软件
- 作者花了数周打磨 = 值得信赖
- 这些信号现在都可以在一小时内由 AI 生成

<div class="mt-3 p-2 bg-orange-100 rounded text-xs">

Simon 自己一小时就能做出一个有文档有测试的库 —— 但他不信任它，因为他还没用过。

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 新的质量信号

- **Proof of usage** —— 作者自己用了多久？别人用了多久？
- Simon 给没实际使用的项目标 "alpha"
- Data labeling companies 在买旧 GitHub repos（pre-2022 人类手写代码）

<div class="mt-3 p-2 bg-green-100 rounded text-xs">

Simon 的类比：这像二战前沉船里的金属 —— 没有核爆辐射的"干净"材料。

</div>

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-purple-400 bg-purple-50 bg-opacity-20 text-sm">

Lenny: "It's almost like we need a proof of work for this."<br>
Simon: "Proof of usage. Proof of. Exactly."

</div>

---

# AI 吞噬创意与产品流程

<div class="mt-2 text-sm opacity-70">写代码加速了，那瓶颈在哪？</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

以前：想好 spec → 交给工程团队 → 幸运的话 3 周后出实现<br>
现在：3 小时（取决于 agent 的熟练度）

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 擅长的
- 产出初始 20 个 brainstorm ideas
- 快速搭建 UI 原型（几乎免费）
- 跨领域组合：marketing ideas inspired by marine biology

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 人类仍然关键的
- 判断 20 个 idea 里哪个值得推进
- 实际的 usability testing（AI 模拟用户不靠谱）
- 决定什么问题值得解决

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Simon 关于 brainstorm 的比喻：一场一小时的头脑风暴，前 2/3 都是显而易见的想法。AI 特别擅长这 2/3。有趣的是当你逼它再给 20 个 —— 末尾那些不算好点子，但会把你的思维推向意外的方向。

</div>

---

# 给中间层的生存建议

<div class="mt-2 text-sm opacity-70">怎么避免 permanent underclass？</div>

<div class="space-y-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 1. Lean into it
不要回避，搞清楚这个技术怎么让你变强。如果担心 skill atrophy —— push back at it，带着觉察地使用。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 2. 放大野心
Simon 用了两年半 AppleScript —— 因为 ChatGPT 会写，他不用学。以前要两三个月学习的东西，现在门槛被削平了。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 3. Invest in agency（人类的主动性）
AI agent 没有 agency —— 它没有人类动机，无法自主决定该解决什么问题。真正的稀缺资源是**你决定做什么**的能力。

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">

意外的自我提升用途：Claude 是一个 excellent chef —— "it can give you the global average of the world's guacamole recipes, which turns out is good guacamole."

</div>

---

# AI 安全研究的新前线

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### AI 做安全测试
- Anthropic 和 OpenAI 都有不对外公开的安全专用模型
- 只对注册的安全研究人员开放
- Firefox 最近修了 Anthropic 发现的大量潜在漏洞

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 垃圾漏洞报告泛滥
- 不懂安全的人让 ChatGPT 找漏洞
- AI 能生成格式精美的漏洞报告
- 但未经验证 —— 给开源维护者带来巨大困扰
- 关键区别：Anthropic 的安全团队**验证**了报告后才提交

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Simon 的态度**：他不是 AI doomer，但经济影响让他紧张 —— "Are we really going to wipe out like a tenth of white collar knowledge work jobs in the next few years? I really hope not because I don't know how the economy adapts to that."

</div>

---

# Pelican Riding a Bicycle

<div class="mt-2 text-sm opacity-70">可能是 AI 领域最有趣的 benchmark</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 这是什么

- 让 LLM 用 SVG 代码画一只骑自行车的鹈鹕
- 这是**文本模型**的测试（不是图像模型）
- 最初是为了嘲讽那些不直观的数字 benchmark

<div class="mt-2 text-xs opacity-60">

生成的 SVG 里还有注释："making sure the pelican's legs are hitting the pedals" 和 "added a fish for whimsy"

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 神奇的发现

- **画得好的模型在其他方面也更强** —— 没人能解释为什么
- 各大 AI 公司都很在意自己的 pelican 画得好不好
- Gemini 3.1 发布时，官方视频里就有骑自行车的鹈鹕动画

<div class="mt-2 text-xs opacity-60">

Simon 还藏了后手：如果公司专门训练画 pelican，他就测 "ocelot on a moped" 来抓作弊。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**为什么是 pelican？** Simon 住在 Half Moon Bay，走 15 分钟就能看到世界第二大加州棕鹈鹕栖息地。他从英格兰搬来时，悬崖边上一只鹈鹕飞过眼前 —— "I'm like, that's a pelican, like in the books."

</div>

---

# 这个领域天然就很搞笑

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

Simon 认为，很多人害怕 AI 变革，但他选择拥抱其中的荒诞感——

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 天然荒诞

- 你能骗 ChatGPT 教你做凝固汽油弹，只要说你奶奶在凝固汽油弹工厂上过班
- 世界最贵的计算机画自行车 → 像 5 岁小孩画的
- OpenClaw 是 Spider-Man 2 里 Doc Ock 的 AI 机械爪

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 保持玩心

- Pelican benchmark 起源就是为了嘲笑正经 benchmark
- 图像生成只用来恶作剧（Nano Banana / Gemini）
- 中国开源模型在笔记本上画 pelican 还附带注释

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">

"I think something people often miss is that this space is inherently funny."

</div>

<div class="mt-2 text-xs opacity-60">

Lenny 的观察：Simon 对 AI 变革的热情和乐趣感，可能正是他在这场转型中如此成功的关键。

</div>

---

# Simon 接下来在做什么

<div class="space-y-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 数据新闻工具
日常工作是给调查记者做开源工具（Datasette 等）。目标：帮记者用数据讲故事。AI 看起来不适合新闻（会编造事实），但记者天天跟不可靠信源打交道 —— 只要把 AI 当成"又一个不可靠线人"就好。

<div class="text-xs mt-2 opacity-60">年度目标：帮助某个记者赢得 Pulitzer 时，他的工具占了哪怕 3% 的功劳。</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### "不算书"的书
关于 agentic engineering 的 blog 连载。没有编辑、没有出版社压力，想写就写一章。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Blog 变现 + 零交付咨询
博客第一次有了赞助收入。咨询方式是 "zero deliverable consulting" —— 一个小时的电话，不写报告，不写代码，只提供他的时间和判断。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"I can churn out 10,000 lines of code in a day."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于 AI 编码产出的量变</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"Probably 95% of the code that I produce, I didn't type it myself."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于 dark factory 模式的现实</div>
</div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"I can fire up like four agents in parallel ... by like 11 a.m. I am wiped out for the day."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于认知极限</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"The only universal skill is being able to roll with the changes."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于给中间层的生存建议</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"I think something people often miss is that this space is inherently funny."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于拥抱 AI 的荒诞感</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Lots of people knew that those little O-rings were unreliable. But every single time you get away with launching a space shuttle without the O-rings failing, you institutionally feel more confident."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于 AI 安全的 Challenger 灾难类比</div>
</div>

</div>

---
layout: end
---

# Thanks for reading!

"There is a rare parrot in New Zealand called the Kakapo ... they are having a fantastic breeding season in 2026."

— Simon Willison's closing thought: the best news of the podcast.
