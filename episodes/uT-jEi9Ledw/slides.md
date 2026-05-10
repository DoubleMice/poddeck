---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why Agents are Driving Software Development to the Cloud'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 把 agents 从你的笔记本里赶出去

**Zach Lloyd** —— Warp 创始人，前 Google Docs/Sheets 团队

<div class="mt-4 text-sm opacity-60">

MLOps.community Podcast · 主持 Demetrios Brinkmann

</div>

<div class="mt-3 text-xs opacity-50 italic">

"agents need to transition from being like a solo sport to a team sport"

</div>

<div class="abs-br m-6 text-xs opacity-30">
PodDeck · uT-jEi9Ledw
</div>

---

# 这期为什么值得听

<div class="text-sm opacity-60 mb-4">2025 年大家都在自己的笔记本上跟 Claude Code / Codex / Warp 对话。Zach 的判断：2026 是 agents "搬家"的一年——从笔记本搬到云端，从单人作业变成团队作业。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Solo → Team Sport
笔记本上的 agent 一关机就死、零记忆、团队看不见。需要的是云端编排平台 Oz——审计、记忆、权限、handoff 全部齐活。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Meta-app = 浏览器
SaaS 的"前门"正在塌——你只需要一个"和 agent 对话"的接口，就能让它去查表、做图、生成 just-in-time app。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Bring-your-own-harness
Warp 不跟 lab 在 token 价格上硬拼，而是做"上一层"——你用 Claude Code、Codex、Gemini 都行，由 Warp 提供 diff / review / 编排。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### GitHub 在风险之中
"if you're reviewing a code that your agent wrote, that's a ridiculous flow." inner / outer loop 的来回切换正在被吞掉。

</div>

</div>

---
layout: two-cols
---

# 去年是 solo sport，今年是 team sport

<div class="text-sm opacity-70 mb-3">Zach 把整个 2025 年定义成"interactive agents"年——
你坐在笔记本前，跟 Claude Code / Codex / Warp 一句一句对话，每个新会话都从零开始。</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded mb-3">

**问题：** 笔记本一关，agent 就停。新启的 agent 没有任何累积。团队没有任何 visibility。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-sm rounded">

**Zach 的判断：** 2026 必须把 agent 搬上"中心化的云系统"——

- 你能追踪它在做什么
- 它有 cumulative memory
- 笔记本关了它还在跑
- 团队所有人都看得见

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./solo-vs-team.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那个被到处转的 hot take：sandbox

<div class="text-sm opacity-60 mb-4">Demetrios 拿 Zach 在推上的"sandbox 立场"开场，结果 Zach 第一句就反转：</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">

### Demetrios 起的引子
> "你不是 super stoked on sandboxes 吗？"

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Zach 当场澄清
> "I'm cool with sandboxes. It's a funny way to start with a hot take."

不是反对 sandbox，反对的是"把 agent **plop into a cloud computer** 当 sandbox"这种思路。

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**真正想表达的：** "I just think it's not exactly the way that I would try to set it up technically." 不是要死磕的 hill，只是看到大家都往一个方向挪，他想指出有个**更对**的方向。

</div>

---
layout: two-cols
---

# Agents 不是云电脑，是云上的同事

<div class="text-sm opacity-70 mb-3">Zach 的核心 reframe：把 agent 想象成一个云端 teammate——而不是一台需要你登录进去的远程机器。</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**类比错了**: cloud dev box（一台大 VM）

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**类比对了**: 一组各自有 permissions 的 teammate

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">

Zach 举的真实例子（Warp 团队内部）：

- 一些 agent **touch our CRM**
- 一些 agent **checking for fraud · 看 production database**
- 这些 agent 不应该能 touch 代码库

→ 每个 agent 有 **自己的 little workspace** + **least privilege**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./solo-vs-team.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Server vs Lambda：agent 该是哪种？

<div class="text-sm opacity-70 mb-3">Zach 用了一个软件人秒懂的类比：</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-sm rounded mb-2">

**Cloud computer 类比** ≈ long-running server  
一台机器、长开、什么 agent 都能进、什么资源都能碰

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-sm rounded mb-3">

**Teammate 类比** ≈ lambda / cloud function  
> "I think we want our agents running. Honestly more like lambdas or cloud functions."

短生命、单一职责、明确权限边界

</div>

<div class="text-xs opacity-60 italic">

**作者概括**：从 IT 史的角度看，这是把"agent infra"从 90s VM 一步跳到 cloud-native serverless 的对应物——只不过这次跳过的是 agent 编排层，不是计算层。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./server-vs-lambda.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 高效团队是怎么用 agents 的

<div class="text-sm opacity-60 mb-4">Zach 在 Oz 里看到自己团队是怎么干活的——这是他想推广的 pattern。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 全队 visibility
登 Oz 就能看到**每个人此刻在跟 agent 干什么**：plan、对话、verification 步骤——像看 Google Docs 的活动流。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Skill 是一等公民
数据团队 lead 写了一个 skill：让任何工程师的 agent 都能查 data warehouse + DBT 表，自动理解 schema。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Skill 跨团队共享
go-to-market、growth team 用同一个 skill 自助做用户行为分析——不再需要工程师"帮我跑个数"。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Knowledge 累积
高功能团队的真正问题：**怎么让团队的隐性知识沉淀进 agent，而不是只活在某个人脑子里。**

</div>

</div>

---

# Skill 治理：当 agent 多到失控

<div class="text-sm opacity-60 mb-4">Demetrios 抛出了一个很多企业正在头疼的问题：skill 应该全公司共享、全团队共享，还是私有？</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded mb-4">

**Demetrios 的提问：** When do we make a skill for the whole team? When do we make a skill for the whole company? 怎么管理几千个 skill 的 repository？

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 一切都开放给所有 agent 的下场
> "you're gonna get **agent chaos** and you're gonna get agents doing things that you don't want them doing."

更日常的下场：context 被淹没——agent **会用错的工具在错的时刻**。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 类比
人类 SaaS 花了 20-25 年构建权限/路由/UI。现在我们要为 agent knowledge worker 重新构建一遍——但形态完全不同。

</div>

</div>

---

# 给 agent 用的 SaaS 长什么样

<div class="text-sm opacity-60 mb-4">Zach 的判断：给 agent 用的 "SaaS" 不会长得像 Salesforce / Linear / Notion。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">

### Human SaaS 的核心
- dials & knobs
- UI 流程
- 视觉层级
- 学曲线

→ 给你一个工具，让你**学着用它**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Agent SaaS 的核心
- 数据可访问性
- schema 是否能被读懂
- 可执行的 actions
- artifact 怎么 report

> "much lower level like machine oriented set of [things]"

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**结论性问题（Zach 原话）：** "what's the SaaS platform that needs to exist for agents to do knowledge worker tasks?"——这是一个**还没有标准答案**的开阔市场。

</div>

---
layout: two-cols
---

# Meta-app：未来只剩一个"前门"

<div class="text-sm opacity-70 mb-3">

Zach 给这个新形态起了个名字 —— **meta app**：所有 knowledge work 的入口都收敛到一个地方。

</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

> "increasingly the front door to any like knowledge work task is gonna be what I call a meta app"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

候选清单：**Warp · Claude Code · Codex** 这一类——你不再"打开应用做任务"，你**告诉 agent 你的意图**，它去做。

</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs">

Demetrios 后来给了个更好的词：**browser**。Zach 立刻接受："I think that's, maybe, that's even like the better word for it. It is a browser that does things essentially."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meta-app.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 案例：spreadsheet 正在被 disintermediate

<div class="text-sm opacity-60 mb-4">Zach 用一个非常诚实的自我观察来 illustrate meta-app——他自己曾参与过 Google Sheets 的开发。</div>

<div class="space-y-3">

<div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">

### 老流程（Zach 说他干了一辈子）
import data → 写公式 → 拉 pivot table → 加 format → 画 chart → **才** 看出 insight

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 现在
> "the spreadsheet for me is being **disintermediated**, because I will just ask Warp to do the analysis for me."

Warp 还能"on demand"地把 spreadsheet 本身做出来给你——表格、公式、图表都行。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">

来自一个曾**为 Google Sheets 写代码的人**：

> "I just don't need to, as a user, learn another interface and it's like a pain to learn how to use a spreadsheet... it's what people in finance spend, spend years, spend years doing."

</div>

</div>

---

# Just-in-time app：Warp 团队的真实例子

<div class="text-sm opacity-60 mb-4">Zach 给的最有说服力的内部案例——不是工程团队，是 talent 团队。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 故事
Warp 的 talent team **自己**搭了个界面盖在 ATS（applicant tracking system）之上。

> "We like it more than the interface that this ATS has been building for the last 10 years or whatever."

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 关键细节
> "this is built by our talent team who don't know. They don't code."

不会写代码的人，盖出了一个**比专业 SaaS 厂商打磨十年的 UI 还顺手**的内部工具。

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 更激进的 endgame：根本不要 app
> "or even no apps, just goes straight to the answer. Just go like from a prompt. Use the database, get what you want, is the future."

或者临时让 agent **build you a just in time app**——交互完结即销毁。

</div>

---

# Demetrios 的故事：剪辑器的"自我消亡"

<div class="text-sm opacity-60 mb-3">Demetrios 自己讲的真实经历——最能落地"meta-app"概念。</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### Step 1 · 兴奋
> "I created a little electron app. I vibe coded it up... super stoked because it did all these different things to create short clips for my podcast."

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

### Step 2 · 反思
> "Wait a minute. Why do I even need an app for this?"

为什么要 app？

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### Step 3 · 替代
拆成 skill：agent extract transcript → remotion 渲染。

> "I can just say, here's my video. Go and do your thing."

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

Zach 的回应：**"just encode the knowledge in a skill"**——app 这个抽象层，对很多场景来说真的是多余的。

</div>

---

# Agent = 浏览器

<div class="text-sm opacity-60 mb-4">这一刻是整期访谈最被两人击掌的瞬间——Demetrios 抛出一个简洁到完美的类比：</div>

<div class="mt-6 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50 rounded">

"the agent is now the equivalent to the browser in a way because it's your gateway to the world... we don't want 50 million browsers, we just want one browser that can get us to the webpage."

</div>

<div class="mt-3 text-sm opacity-70 text-right">— Demetrios</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Zach 接梗

> "Yes. I think that's, maybe, that's even like the better word for it. Like I'm calling it a meta app, but **it is a browser that does things essentially**."

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**含义：** SaaS 的入口正在收敛——你不会在桌面摆 50 个 app icon，你只会有 1 个 agent。

</div>

---

# 新瓶颈：人能不能讲清自己想要什么

<div class="text-sm opacity-60 mb-4">Zach 说这是他**早在 agents 刚火起来时**就写过的判断：技术不是瓶颈，**意图表达**才是。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 原话
> "the limiting factor here is actually human's ability to express what they want"

加上一个补充：
> "often you don't actually know what you want a hundred percent until you start doing it and iterate."

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 推论：新一代职业建议
对刚进职场的人：

- learn how to **communicate really well**
- learn how to **write well**
- learn how to **think very clearly and express intent**

> "It's not the same exact skillset as like learning how to program. It's, it's like a little bit different. It's related."

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

**作者概括：** "iteration with an agent" 本身就是一种新的创作 form——你不写代码，但你写"我要的东西的 shape"，然后 agent 给你一版，你说"不对、再来"，直到对。

</div>

---
layout: two-cols
---

# Oz 的 8 个 commandment

<div class="text-sm opacity-70 mb-3">Zach 在 coding agents conference 上讲过 Oz 应该具备的几样东西。访谈里他凭记忆复述了一遍——按他给的顺序整理：</div>

<div class="text-xs space-y-1">

1. **Audit trace** —— 出事能查
2. **Handoff** —— agent 没干完，人接力
3. **Access control** —— 颗粒度细的权限
4. **Memory** —— cumulative context
5. **Evals** —— 能测 agent 表现随时间变化
6. **Flexible deployment** —— 不强迫"forklift code"
7. **Programmability** —— UI 能做的，SDK / API 都能做
8. **Observability** + **steer** —— Zach 自己漏说了，被 Demetrios 提醒补回

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs italic">

> "I see a lot of companies trying to build this. Some companies will be successful... a lot of companies are gonna **waste a bunch of time** trying to build something."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./oz-stack.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么企业要 agent provenance

<div class="text-sm opacity-60 mb-4">Demetrios 直接问：是 audibility 吗？Zach 给了三层答案。</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 1 · 出事追溯
**Audit / debug / compliance**：something goes wrong, you wanna understand why & how we got there.

也包括**安全事故**、**crash 复盘**——以及"agents 在做某些事，从合规角度就**不能没有记录**"。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 2 · Cumulative context
长期看 agent **越来越好**的前提：得能回放 agent 怎么被 prompt、怎么干活、哪些 setup 是 right setup。

**没有 trace = 没有改进闭环。**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 3 · Handoff & steering
云端 trace 让"一个 agent 起手 → 一个 dev 接手 → 多人接力"成为可能。

> "that sort of functionality again is unlocked by being in the cloud."

</div>

</div>

---

# Flexible deployment：企业要的是"可拆"

<div class="text-sm opacity-60 mb-4">Oz 在企业部署上做了一件很反"产品强势"的事——一切都可以替换。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 数据存哪里你定
> "We're making everything pluggable. So if you want as a company to be like, okay, we will provide a data store into which Oz cloud agents can record all of this stuff so that we own it."

Conversation traces / prompts → 可写到 Oz 的库，也可写到客户自己的库。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### LLM endpoint 也你定
> "companies will often want to serve these models through like things like Amazon Bedrock or GCloud Vertex or Azure."

最严的客户：
> "We can't have inference leaving our cloud. We can't have code leaving our cloud."

Oz 不做 full on-prem，但其它都尽量 flexible。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**为什么这件事很重要：** 企业最在意的是 **lock-in 风险**——而 agent 系统天生在收 sensitive IP + 客户数据，所以 deployment 灵活度是 deal-breaker，不是 nice-to-have。

</div>

---
layout: two-cols
---

# Bring-your-own-harness

<div class="text-sm opacity-70 mb-3">Warp 自己有一个非常硬的 harness（terminal bench 第一、SWE-bench top 3），但他们选择**不强推**：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**Warp 的 harness 优点**：和 UI 紧耦合——editable diffs、code review、LSP 跑在 agent 输出上。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**但是允许你切换**：Claude Code、Codex、Gemini 都能在 Warp 里跑——"some users, honestly, for cost reasons, would prefer to use Cloud Code or Codex. They wanna use their subscription."

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**杀手用法**：fire 三个 agent 同时干一个任务，让 **Claude Code review Codex 的 work**——上一层观测/对比。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./harness-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 怎么跟"补贴 token"的实验室竞争？

<div class="text-sm opacity-60 mb-4">Demetrios 直球问了一个所有 dev tool startup 的关键问题。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 处境
Warp 卖 AI 用的是 **API rates**——略好一点（规模带来 discount），但**远比 lab 自家订阅贵**。

> "It's the most challenging thing for our business for sure."

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 选择
**不在价格上正面打**，而是做 **complementary**：

- 让 Warp 成为"用 Claude Code 最舒服的地方"
- 用 voice、code review、file tree、Oz orchestration 做差异化

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 数据：贵也卖得动

<div class="grid grid-cols-3 gap-3 mt-2 text-center">

<div>

**$1M+**

<div class="text-xs opacity-70">每周新增 ARR</div>

</div>

<div>

**Top-3**

<div class="text-xs opacity-70">SWE-bench 公榜</div>

</div>

<div>

**不亏钱**

<div class="text-xs opacity-70">"we don't lose money on it"</div>

</div>

</div>

</div>

---

# 但 Zach 说补贴是 temporary

<div class="text-sm opacity-60 mb-4">这是访谈里最有 conviction 的一段——关于行业 5 年内的成本结构。</div>

<div class="mt-4 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 rounded">

"I do think though, for the record, it's temporary because... open weight models, you know, **Nvidia just invested $25 billion in this**. There's like reflection ai, there's a whole bunch of open weight models that are gonna become **good enough** for the coding use case, and that's gonna **drastically change the economics of selling tokens**."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 给企业的告诫
> "I would be very wary as a company of just betting on a single frontier lab to provide all your tokens because you're gonna end up overpaying and giving it a bunch of power."

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 隐含支撑
访谈里他还顺嘴提到 *"the government is designating Anthropic as supply chain risk"* —— 又一个不能把全部下注押在一家 lab 上的理由。

</div>

</div>

---

# 多 agent 编排：还没人知道哪种 pattern 是对的

<div class="text-sm opacity-60 mb-4">Warp 在 Oz 上面再加一层"actual orchestrator"——不同的 pattern 能让 agent 团队解锁更长 horizon 的任务。</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### Hierarchy
team-leader 给复杂任务 → 拉 5 个 agent：
- 2 个 verify
- 1 个 design
- 其它执行

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### Roundtable
所有 agent 平级、像同事一样讨论与协作。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 接力 / Pipeline
每个 agent 接前一个的产出，像 Demetrios 提到的"小学课堂里轮流写段落"。

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### Zach 的诚实立场
> "I don't know the right pattern... I don't think anyone knows the right pattern. I don't actually even think that **there is a right pattern**."

→ 所以 Oz 把基建做 flexible，让用户能 **measure 不同 pattern 的效果**。补一句他的 disclaimer：agents 是 *"alien brains"*——可能根本不按人类的方式协作。

</div>

---

# 副作用：context-switching brain juice

<div class="text-sm opacity-60 mb-4">这一段是这期最反 hype 的瞬间——两个深度用 agent 的人都承认：累。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### Zach
> "I'm getting more done, but I feel like I'm also working harder."

> "typically when I do a podcast like this, I have agents working on stuff in the background... I'm gonna have to go back and check that PR when this is done."

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Demetrios
> "we're working harder, but less at the same time."

</div>

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-red-500 bg-red-50 rounded">

"it's like the **context switching brain juice**. Yeah. Which is what I hate. Like, it's like it takes you out of flow. I would much rather be in flow coding something."

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Zach 自我矛盾**: 想做 deep work，但又**很难替自己辩解**——因为 agent 模式下他能"build five things at a time"。

</div>

---

# GitHub 在被解构

<div class="text-sm opacity-60 mb-4">Warp 已经把 code review **从 GitHub 拽进了自己的 ADE**。</div>

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"if you're reviewing a code that your agent wrote, that's a ridiculous flow. It's like, why am I leaving my workbench to go up to GitHub? You shouldn't. You should just do it right as the agent is writing it."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">

### 仍合理：人和人 review
> "if you're code reviewing with a collaborator on your team and you're reviewing their code, I think it's fine to go to GitHub."

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 不合理：人 review agent 的 code
inner loop / outer loop 的 push-pull 完全是浪费——agent 写代码的速度太快，跑去 GitHub 再回来已经过时了。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

> "I think GitHub is at risk of disruption, which is a crazy thing to say because it's the developer tool that has the **strongest network effect of any developer tool**. But... I think everything is kind of at risk right now."

</div>

---

# 顺便说一句：Zach 讨厌 Git

<div class="text-sm opacity-60 mb-3">访谈快结尾，Zach 罕见地开了个原教旨吐槽。</div>

<div class="p-4 text-lg italic border-l-4 border-red-500 bg-red-50 rounded">

"First of all, **I hate Git**, I don't know how you feel about Git. Like, I don't like it. I don't understand Git."

</div>

<div class="mt-3 grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 为什么不喜欢
> "I spent a long time at Google. We didn't use Git at Google... the thing that we used at Google was based on Perforce... **it made so much more sense to me intuitively**."

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 但现实是
> "I think it's more likely that Git will stick around and you'll find ways to build metadata around what agents are doing into Git than to invent some new thing."

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">

**Warp 的实际选择**：checkpointing / code review **都建在 Git 之上**——source control **不是这一年要重做的事**。

</div>

---

# 数字时代的"上帝"

<div class="text-sm opacity-60 mb-4">如果只用一句话总结 Zach 对当下 agent 体验的态度，是这一句他自己写在文章里的话。</div>

<div class="mt-8 p-8 text-3xl italic text-center border-l-4 border-purple-500 bg-purple-50 rounded">

"we're all like **digital gods** now. We can all just have computers do what we want, when we want."

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

> "At least until the singularity or whatever, until they stop listening. But like at this moment, we've never had... **it's never been cooler** in my opinion. Just be able to tell a computer what you want it to do and you don't have to shape your behavior to the computer."

</div>

<div class="mt-4 text-sm text-center opacity-70">— Zach Lloyd</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期访谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-2 text-xs">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"agents need to transition from being like a **solo sport to a team sport**."
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · 关于 2026 的核心判断</div>

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">

"**the agent is now the equivalent to the browser**... we don't want 50 million browsers, we just want one browser."
<div class="text-xs opacity-60 mt-1 not-italic">— Demetrios · 被 Zach 升级为 meta-app 的更好叫法</div>

</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">

"the **limiting factor** here is actually human's ability to **express what they want**."
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · 新一代 knowledge worker 的核心 skill</div>

</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">

"if you're reviewing a code that your agent wrote, that's a **ridiculous flow**. why am I leaving my workbench to go up to GitHub?"
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · 对 inner-loop / outer-loop 的判决</div>

</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"**Nvidia just invested $25 billion** in this... open weight models are gonna become **good enough** for the coding use case."
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · token 补贴是 temporary</div>

</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"it's like the **context switching brain juice**. Which is what I hate. It takes you out of flow."
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · 多 agent 工作流的真实代价</div>

</div>

<div class="p-2 bg-gray-50 border-l-4 border-gray-400 rounded italic">

"**First of all, I hate Git.**"
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · 前 Google 工程师的私货</div>

</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"we're all like **digital gods now**. We can all just have computers do what we want, when we want."
<div class="text-xs opacity-60 mt-1 not-italic">— Zach · 对当下 agent 体验的总结</div>

</div>

</div>

---
layout: end
---

# we're all digital gods now

<div class="mt-4 text-sm opacity-70">

—— Zach Lloyd · *Why Agents are Driving Software Development to the Cloud* · MLOps.community Podcast

</div>
