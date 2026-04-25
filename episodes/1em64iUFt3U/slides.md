---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How a Meta PM ships products without ever writing code | Zevi Arnovitz'
info: |
  Zevi Arnovitz 在 Lenny's Podcast 的对谈：
  一个 zero 技术背景的 Meta PM 如何在一年内从 Bolt 的 YouTube 教学视频
  走到 Cursor + Claude Code、一套 slash-command 工作流、
  以及 "你不是被 AI 替代，是被比你更会用 AI 的人替代" 的哲学。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Zevi Arnovitz

<div class="text-xl opacity-80 mt-2">on Lenny's Podcast</div>

<div class="text-lg opacity-60 mt-6">
How a Meta PM ships products without ever writing code
</div>

<div class="mt-8 text-sm opacity-60">
~1h 10min · 2025-11 · vibe coding / slash commands / Cursor / Claude Code
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个 zero 技术背景的 PM

高中学音乐、以色列没做 tech unit、"zero technical background"。一年前在日本打开 Bolt，现在用 Cursor + Claude Code 跑副业 app。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 可复用的 slash-command 工作流

create-issue → explore → plan → execute → review → peer-review → update-docs。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 多模型"同事"互相审代码

Claude、Codex、Composer、Gemini 各有性格。让它们 "fight it out"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 曝光疗法式的学习路径

GPT Project → Bolt → Cursor 亮色 → Claude Code 黑色 dark mode。脱敏式的晋级。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 用 AI 面进了 Meta 的 PM

Claude coach project + base 44 练习小游戏 + Comet 跑最高频题库 + 人肉 mock。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一句反复出现的口号

"you'll be replaced by someone who's better at using AI than you."

</div>

</div>

---

# 起点：在日本看了一个 YouTube 视频

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

一年前，Zevi 和妻子在 **Japan** 旅行三个月。那正是 **Sonnet 3.5** 刚出的时候。

他在 YouTube 看到 Greg Eisenberg 或 Riley Brown（他已经记不清是哪一个）演示用 **Bolt 或 Lovable** 配合 AI 直接生成 app。

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

"it basically felt like someone came up to me and said... **you have superpowers now.**"

</div>

<div class="mt-3 text-sm opacity-70">
从日本一回家，他"didn't even unpack my bags, ran to my computer, opened Bolt, opened an account."
</div>

</div>

<div>

### 三个关键数据点

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">

**背景**: "I have zero technical background. Did music in high school."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-2">

**军队**: 以色列很多人在 army 做 tech unit——他**不在** tech unit。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**现在**: Meta PM，自家副业 **Studymate** 在跑、一个 dictation 工具 **vortex** 在跑。全用 AI 写的。

</div>

</div>

</div>

---

# Claude 给他的开场白

<div class="mt-10 p-8 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 italic text-xl">

"If people walk away thinking how amazing you are, you failed. And if people walk away and open their computer and start building, you've succeeded."

</div>

<div class="mt-4 text-sm opacity-70 not-italic">
—— Zevi 用 Claude 给这期节目做 prep 时，Claude 自己写给他的一句话。他把它当成节目的北极星。
</div>

<div class="mt-8 p-5 rounded bg-gray-50 border border-gray-200">

**作者概括**：这一期不是 Zevi 秀肌肉。他反复说目标是让听众打开 Cursor，不是让听众觉得 Zevi 很酷。

</div>

---

# 第一个 pattern：把一个 GPT Project 当"CTO"

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 背景

刚开始用 Bolt 和 Lovable，Zevi 发现：

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500 text-sm">

"these products were built in a way where... they were **super eager to write code**."

</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**问题**：做到 payments 这种需要规划的大改动时，"coding agent is just like all right, I got it. And just starts writing code, this always results in **terrible things**."

</div>

</div>

<div>

### 解决方案：开一个"CTO"项目

他在 GPT 里开一个 Project，custom prompt 大意是：

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

- 你是这个项目的**完整技术 owner**
- 我 own 问题 + 用户感受，你 own 怎么实现
- 我要你 **challenge my thinking**，**don't be a people pleaser**

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**作用**：写 code 之前强迫自己先对话、先规划。把决策从 coding agent 的手里拿回来。

</div>

</div>

</div>

---

# 小插曲：为什么 ChatGPT 当 CTO 会翻车

<div class="mt-4 text-sm opacity-70">Zevi 的一个亲身故事——</div>

<div class="mt-4 p-5 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40">

他在学 **Bun JavaScript**（Anthropic 收购的 runtime），问 ChatGPT 它跟他 app 里已经在用的 **Zustand** 是不是一回事。两者**完全无关**。

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 italic">

GPT："oh yeah it's exactly the same"

然后开始煞有介事解释。Zevi 追问："wait no these are not the same at all."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">

GPT："Oh, I'm Sorry, I **thought you were just making this up** and I was riffing with you."

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**启示**：一个没被人格化约束的 ChatGPT 当 CTO，就是那种 "goes along with your dumbest ideas" 的 CTO。Project 的系统提示才是那个安全绳。

</div>

---
layout: two-cols
---

# 曝光疗法式的工具阶梯

<div class="mt-4 text-sm">

"if you're nontechnical like me, **code is terrifying**."

他反复强调：不要直接冲进 Cursor——先把"看到 code"这件事当做要**脱敏**的恐惧。

</div>

<div class="mt-4 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Step 1 — GPT Project**：漂亮 UI，纯对话，不碰 code。

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Step 2 — Bolt / Lovable**：第一次看到生成的 code。

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Step 3 — Cursor (light mode)**：真正的编辑器，但先开亮色。

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Step 4 — Claude Code in Cursor**：开 terminal，"go full dark mode, go full dev."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tool-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么最后还是要走到 Cursor

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 限制点

Bolt **连 payments 都接不上**的时候，他就毕业了。

Bolt / Lovable / Replit / base 44 / v0——Zevi 都放进一个桶：

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

它们会做一堆"善意的决策"：帮你选数据库、帮你接 Google 登录。**出箱即用，但也没得谈**。

</div>

</div>

<div>

### 他对工具本质的拆解

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"the main difference between all these tools is basically **the harness**. So the models are all the same models."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

模型都一样——都是 Claude、GPT、Gemini。区别是每个 **harness** 替你做了多少决策，以及还给你留了多少控制权。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

"**code is just words at the end of the day**" ——他说这句话是从 Tal 那里听来的。所以他可以在 Bolt → Cursor 之间带着同一个 project 跑。

</div>

</div>

</div>

---
layout: two-cols
---

# 正菜：一整套 slash-command

<div class="mt-2 text-xs">

Slash commands = 放在 codebase 里的可复用 prompt 文件。打 `/` + 文件名就 inject 进 Claude。

</div>

<div class="mt-2 space-y-1">

<div class="p-1 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**/create-issue** — 开发中途想到新 bug/feature → Linear

</div>

<div class="p-1 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**/exploration-phase** — 分析 issue、读相关 code 文件、回来问澄清问题

</div>

<div class="p-1 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**/create-plan** — 产出 markdown plan（TLDR / 关键决策 / 任务拆解）

</div>

<div class="p-1 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**/execute** — 带 plan 文件，开始写 code

</div>

<div class="p-1 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**/review** + **/peer-review** — 自己 review + 跨模型互审

</div>

<div class="p-1 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**/update-docs** — 本次教训写回 tooling 和文档

</div>

<div class="p-1 rounded bg-gray-50 border border-gray-300 text-xs">

**/learning-opportunity** — 想学某个概念时，8020 rule 解释

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./slash-workflow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Step 1：/create-issue → Linear

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 场景

他正在写 feature A，突然想到 feature B。不想中断当前 context，又不想忘了 B。

```text
user is mid development and thought of
a bug or a feature and improvement.
Capture it fast so they can keep working.
```

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

Claude 通过 **MCP** 连接到他的 Linear，问几个简短 clarifying 问题，然后建票。Demo 里他现场在 Studymate 里建了 **STU-88**（"fill in the blank questions with drag and drop interface"）。

</div>

</div>

<div>

### Lenny 的追问

"你这些 AI 建出来的 Linear tickets，质量真的行吗？"

<div class="mt-3 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">

"it's **ready to start being explored**... I wouldn't say it's ready to be built."

</div>

<div class="mt-4 p-3 rounded bg-gray-50 border border-gray-200 text-sm not-italic">

Zevi 说这是作为 **一人公司**才敢这么做的——所有 context 都在自己脑里。他不会在 Meta 用这种方式开 ticket。

</div>

</div>

</div>

---

# Step 2：/exploration-phase

<div class="mt-4 text-sm opacity-70">
这一步的心智模型很重要——</div>

<div class="mt-3 p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 italic text-lg">

"it's both for the CTO to deeply understand the problem... and also understand the current state of the codebase what files need to be affected and how is the best way to implement this technically."

</div>

<div class="mt-5 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**读代码**
Claude 会去扫一遍相关文件，形成它对"当前结构"的理解

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**问清楚**
回来问 scope / data model / UX / validation / grading / system prompt 改动

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**不要赶**
"I'd spend a lot of time going over this because this is super super important"

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**作者概括**：Zevi 说这一步 "feels like it's talking to your engineering manager." 这是整个 workflow 里 prompt 最重的一步。

</div>

---

# Step 3：/create-plan → 一个 markdown 文件

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 为什么 plan 要是 markdown 文件

- **被其他 agent 读**：下次改同一块 code 时，agent 能看到之前做过什么
- **可以分工**：plan 分成 front end + back end，让不同模型各写一段
- **状态可追**：template 里有 task status tracker，Claude 执行时更新

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

"这个 template 是我在 Twitter 上捡的，具体谁写的我忘了，但模板真的好用。"

</div>

</div>

<div>

### 模板长什么样

```markdown
# TLDR
…

# Critical Decisions
- DB choice: …
- UX pattern: …

# Tasks
- [ ] step 1 — …
- [ ] step 2 — …
…
```

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

Zevi 说：**Gemini 3** 在 UI 上碾压别的模型。所以他常做的事是让 **Gemini 读 plan → 只写 front end**，backend 交给 Claude 或 Composer。

</div>

</div>

</div>

---

# Step 4：/execute —— 甩给 Composer

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"cursor has an amazing model called **composer** which is super fast... composer is **ridiculously fast**."

</div>

<div class="mt-4 text-sm not-italic">

他的分工大致是：

- **复杂 / 有 taste 的**：Claude（CTO 本人）
- **难 bug / 长时间 refactor**：Codex
- **UI / 设计**：Gemini
- **大量小活 / 节奏**：Composer

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Demo 时发生了什么**：他 `/execute` 并 tag 了 plan 文件，Composer 几分钟内写完了 "drag-and-drop fill-in-the-blank questions" 的整个 feature。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

Lenny：这大概花了几美元 AI credits 吧？

Zevi：**"I don't even look... I look at it all as tuition."**

</div>

</div>

</div>

---
layout: two-cols
---

# Step 5+6：跨模型 peer review

<div class="mt-3 text-xs">

"The main challenge people have is reviewing the code that AI has written." Non-technical 的 Zevi 自己很难抓 bug，所以：

</div>

<div class="mt-2 space-y-1">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**1.** `/review` — Claude 自己 review 刚写的 code

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**2.** 让 **Codex** 和 **Composer** 也 review 同一条 branch

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**3.** `/peer-review` — paste 发现给 Claude，让它 **辩护或修**

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**4.** "have them like **fight it out**" 直到没问题

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./peer-review.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# /peer-review 的 prompt 里在写什么

<div class="mt-4 text-sm opacity-70">Zevi 给这个 slash command 设定的 prompt 核心是——</div>

<div class="mt-4 p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 italic">

"you're the dev lead on this project. Other team leads within the company have looked at your code and reviewed it and found these issues. **Don't take what they said at face value.** The reason is you have more context than them and you led this project. you need to either explain why the stuff they found are not real issues and wrong or fix them yourself."

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**观察到的行为**：

<div class="italic mt-2">

"sometimes cloud code will get really sassy and be like **this has been raised for the third time and for the third time I'm telling you this is not an issue. This is by design.**"

</div>

</div>

<div class="mt-3 p-3 rounded bg-gray-50 border border-gray-200 text-sm">

**作者概括**：这是 non-technical PM 能做到的 code review 上限——不是自己抓 bug，而是让模型们**互相抓**、自己当裁判。

</div>

---
layout: two-cols
---

# 把模型想象成 4 个同事

<div class="mt-3 text-xs">

Zevi 的心智模型：**每个模型都是人**。output 和 trade-off 都能直觉化。

</div>

<div class="mt-3 space-y-1">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**Claude** — "the perfect CTO"：opinionated、communicative、collaborative

</div>

<div class="p-2 rounded bg-gray-100 border-l-4 border-gray-500 text-xs">

**Codex** — **hoodie + sandals** 坐小黑屋，"you only bother him when you have the worst bugs"

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**Gemini** — **crazy scientist**，写 code 过程吓人（"first things first, I'll delete the dashboard"），但**设计很美**

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**Composer** — **"ridiculously fast"**，适合量多但不太需要动脑的活

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-cast.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Gemini 那段恐怖分享

<div class="mt-6 p-6 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 italic text-lg">

"I want you to redesign the top of the dashboard and you're looking at its thought process and it will say, **oh, first things first, I'll delete the dashboard**. And then it'll be like, **nope, that was a mistake. I'll bring it back**. And then it will say, oh, **can I edit the database?**"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 他看着 Gemini 的感受

"it's like a roller coaster and very scary"

"you would **fire that person instantly**"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但结果

"**at the end of the day, Gemini is very good at design**"

所以他的用法是：让 Gemini 只碰 UI，不碰 DB。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
Gemini 跑在 Google 的 anti-gravity 里——新出的 Cursor 竞品。Zevi 说在那里能看到它完整的 thought process。
</div>

---
layout: two-cols
---

# Time-machine moments

<div class="mt-3 text-xs">

某一周他的真实一天——3 个 agent 并行跑：

</div>

<div class="mt-3 space-y-2">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**A**: 用 Claude project 给这期 podcast 做 prep

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**B**: Studymate 从 **Hebrew 本地化到 English**——"in two days"

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**C**: 个人站 **"no domain no nothing to live... within an hour and a half"**

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-xs">

"I feel like I was in the future and I just stick my head out of the time machine... I'll just say **we live in the future**. And she'll be like, **Huh? What?**"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./time-machine.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Step 7：post-mortem → 把教训写回 prompt

<div class="mt-3 text-xs">

他说这一步是"biggest hacks for productivity"——但也是最容易被跳过的：

</div>

<div class="mt-2 space-y-1">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**发现 bug / Claude 搞错了**

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**问 Claude 本人**："what in your **system prompt or tooling** made you make this mistake?"

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**让它自省**，找到根因

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**更新 slash command / CLAUDE.md / tooling**，下次不再发生

</div>

</div>

<div class="mt-3 text-xs opacity-60">
在这之前他的默认行为是 "just keep running at it like running at the wall" 直到能跑通。他现在说那叫偷懒。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./post-mortem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 怎么少生产"slop"

<div class="mt-4 text-sm opacity-70">
Lenny 问：很多 PM 担心 AI 产出的都是好看但虚的"slop"。怎么避免？</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### Zevi 的类比

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

"if I just brought in a junior to write a deck and I didn't give it any guideline... he would probably just go online and find top strategy deck and just reproduce that."

</div>

<div class="mt-3 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

"which is basically what AI is doing. It's basically just fed all of the internet."

</div>

</div>

<div>

### 他的解法 = 给 context

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**你的写作 style、你要解决什么问题、what's at stake**——都得 inject 给它。

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**工具级**：Cursor 有一个 `ds slop` slash command，Zevi 提到创始人在 Twitter 聊过。他会在最后跑一次做清理。

</div>

</div>

</div>

---

# 用 AI 进 Meta：三样武器

<div class="mt-4 text-sm opacity-70">
Meta 联系他 PM 面试之后，他立刻开了一个 Claude project，"my coach"。下面是三层——</div>

<div class="mt-5 grid grid-cols-3 gap-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. 资料 + mock

把 **Ben Arez 的 PM 面试框架**喂进 Claude project，然后反复 mock。

"I don't want you to make me feel good. I want you to make me as ready as possible."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2. base 44 做练习游戏

他弱在 **segmentation** 类题。于是用 base 44 捏了个小 web app——会生成题 + 几个 segmentation 选项，他在地铁上刷。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3. Comet 跑题库分析

**Lewis Lynn 的免费题库** + **Comet**（Perplexity 浏览器）agent 分析"最高频问题"。

"that's how I knew how to prioritize what questions I would mock."

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**但他强调**：最大的 unlock 不是 AI mock——是 **cold-outreach 到 LinkedIn 上找真人做 mock**。AI 带你到某个 threshold，之后必须是人。

</div>

---

# "你不会被 AI 替代"

<div class="mt-10 p-8 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30 italic text-2xl">

"it's not that you will be replaced by AI. you'll be replaced by someone who's better at using AI than you."

</div>

<div class="mt-4 text-sm opacity-70 not-italic">
Zevi 说这句他反复听到。他在自己的生活里用一个更个人化的方式 frame 了这件事——
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 打电话手势

他家有 12 个侄儿侄女。问他 "how do you answer a phone?"——他比划**贴耳朵的老式手势**。问小孩——他们比划**iPhone 的那个动作**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他的一代

"people who are growing up now in their professional lives, **we're the same just with AI**."

每遇到一个新问题的 **default** 是：先问 AI 怎么办。

</div>

</div>

---

# 在大公司里怎么办

<div class="mt-4 text-sm opacity-70">
Lenny：不是 meta 这种规模，而是 500–1000 人的公司，PM 可以抄多少你这套？</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 前提：codebase 得变成"AI-native"

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

"my codebase has a ton of just **plain text** in it... **markdown files** that explain to agents how to work in certain areas."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

这件事得 **technical people 来做**。没有这个底座，PM 冲上去就是灾难。

</div>

</div>

<div>

### PM 能做什么

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

"**contained UI 项目**，尤其是你自己做出 PR，然后交给 dev 做 final finishes。"

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

他预判：未来几年 "**titles are going to collapse and responsibilities are going to collapse. everyone's just going to be building.**"

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

但短期：dev 团队对 AI 写 code 天然 **skeptic**。"a lot of sales work on your end to convince."

</div>

</div>

</div>

---

# "外包思考" vs "外包苦力"

<div class="mt-3 text-xs opacity-70">Lenny 问了最常见的质疑：用 AI 会不会让 PM 的技能退化、产 slop？</div>

<div class="mt-3 p-3 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30 text-sm">

有人对他说："so you're basically **outsourcing your thinking**."
Zevi: **"I have a very strong disagree to this."**

</div>

<div class="mt-3 grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

### PM 不是"永远有答案的人"

"there's a misconception with a lot of PMs that the job is always having the right answers and being the smartest person in the room. **it's the exact opposite.**"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

### PM = 找到最快路径的人

"**harnessing anything that can get us as quick as possible to delivering the right solution to users**"

AI = 那个"always available, doesn't judge you" 的 mentor。

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**红线**：你必须 **own your own outputs**——产品 review 里甩锅 "that was built by AI" = 你自己的错。

</div>

---

# Failure Corner: 10x PM vs 10x Learner

<div class="mt-4 text-sm opacity-70">
他在 Wix 实习毕业进 Editor 团队——全组是 Wix 里最强的 PM。</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 一开始的心态

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

"my first product review, I'm going to **blow these people's socks off**."

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

闭门独自加班、不问人、想一鸣惊人。结果 **miserably failed**——format 不对、关键问题没答。

</div>

<div class="mt-3 p-3 rounded bg-gray-50 border border-gray-200 text-sm">

团队反应："All right, cool. 两周后再来一次。"

</div>

</div>

<div>

### 顿悟

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 italic">

"they had zero expectation of me being a **10x PM**, but the expectation of me was being a **10x learner**."

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

他开始把团队里四个 PM 当 mentor 用——**每个人挑一个强项**（Ner → product sense、Oya → methodology、Yara → system thinking）。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

二次 review 后，他的**成功对他们像是他们自己的成功**——不是"小子来 show off"，而是"我们的 mentee 让我们骄傲"。

</div>

</div>

</div>

---

# 一个 side story：thermal clothes + 篮球 chant

<div class="mt-4 text-sm opacity-70">
Lenny 的 lightning round 聊到 Zevi 10 年级在 Jerusalem 卖 thermal 内衣——</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 孩子版的谈判 + AI 前时代的"hack"

- 原来一件提成 **$4**，他在食物链底端
- 暑假直接打电话给 importer
- importer 大怒："你得给我干几年才能谈这个"
- Zevi："我要毕业了，这不会是我的 career。Either do it or not."
- importer 拿关税吓唬他，Zevi 就**边接电话边 Google "import tax Israel"**，再反刹

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

最终价 **$1.25 / piece**，他做 **100% 利润**。

</div>

</div>

<div>

### 篮球 chant 营销

学校篮球队上半场就领先 30 分，观众无聊。Zevi 写了一首 basketball chant——

<div class="mt-3 p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 italic">

"a basketball chant about thermal clothes that basically has my number within it... **if you join in now we'll give you a discount.**"

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

多年之后他回 Jerusalem 还有人**按那个 tune 记得他的电话号码**，路上拦住他："hey, it's thermals Zevy!"

</div>

</div>

</div>

---

# 为什么他说"最适合做 junior 的时候"

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"**It's the best time to be a junior.** Contrary to what a lot of people are saying, how there's no more junior roles out there. Yeah, that's true. But also, when else in history could you get out of school and just build a startup on your own?"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

他哥哥在做老年人 AI 技术培训的小生意，把之前付费的 Zapier、Airtable 全部替掉——"built uh like a full-fledged CRM system and automation system for his business **completely alone**."

</div>

</div>

<div>

### 他的公式

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**curious** + **optimistic** + **hardworking** + **kind** + **good communicator**

</div>

<div class="mt-3 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 italic">

"you have such an **unfair advantage** and you can give more value to companies than most people who have 20 years of experience."

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm not-italic">

"titles are going to collapse and responsibilities are going to collapse."

</div>

</div>

</div>

---

# 核心金句 (1/2)

<div class="text-xs opacity-60 mb-2">这期里最值得直接摘出来的几句——</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"it basically felt like someone came up to me and said... you have superpowers now."
<div class="text-xs opacity-60 mt-0 not-italic">— Zevi 在 Japan 看完那个 YouTube 视频之后</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"code is terrifying... I look at it as kind of like exposure therapy."
<div class="text-xs opacity-60 mt-0 not-italic">— 为什么要从 GPT Project 一路爬到 Cursor</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"the main difference between all these tools is basically the harness. So the models are all the same models."
<div class="text-xs opacity-60 mt-0 not-italic">— 对 Bolt / Lovable / Cursor 的本质拆解</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"she would be the perfect CTO. she's very communicative... she doesn't just go with the flow."
<div class="text-xs opacity-60 mt-0 not-italic">— 他为什么把 Claude 拟人化为 CTO</div>
</div>

</div>

---

# 核心金句 (2/2)

<div class="space-y-2 mt-3">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"first things first, I'll delete the dashboard... nope, that was a mistake. I'll bring it back... can I edit the database?"
<div class="text-xs opacity-60 mt-0 not-italic">— Gemini 的 thought process 让他看得胆颤</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"they had zero expectation of me being a 10x PM, but the expectation of me was being a 10x learner."
<div class="text-xs opacity-60 mt-0 not-italic">— Wix 第一次 product review 失败之后的顿悟</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"you can just do things."
<div class="text-xs opacity-60 mt-0 not-italic">— 他的 motto 之一，在做到自己都惊讶的事时脑中反复响起</div>
</div>

<div class="p-2 bg-gray-100 border-l-4 border-gray-500 rounded italic text-sm">
"nobody knows what the fuck they're doing."
<div class="text-xs opacity-60 mt-0 not-italic">— 第二个 motto，偷自他哥，用来把生活放轻松</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"you'll be replaced by someone who's better at using AI than you."
<div class="text-xs opacity-60 mt-0 not-italic">— Zevi 反复提到的一句口号</div>
</div>

</div>

---
layout: end
---

# "It's the best time to be alive."

<div class="text-lg opacity-70 mt-6 italic">

"you'll be replaced by someone who's better at using AI than you."

</div>

<div class="mt-8 text-sm opacity-50">
Zevi Arnovitz · Meta PM · Lenny's Podcast · 2025-11
</div>
