---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '139. 【Agent的综述】和苏煜聊Agent技术史、OpenClaw Moment、边界的消弭和社会的辐射'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Agent 的技术综述

<div class="text-lg opacity-70 mt-4">从 1950 年代的逻辑智能体到 OpenClaw Moment</div>

<div class="mt-8 text-sm opacity-50">
苏煜 · 俄亥俄州立大学教授 & New Cognition 创始人<br/>
2025 年斯隆研究奖得主 · Language Agent 早期研究者
</div>

<div class="mt-6 text-xs opacity-40">
商业访谈录 · 语言及世界工作室 · 2026-05
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🧠 Agent 的技术脉络**  
从 Logical Agent → Neural Agent → Language Agent，一次纵深的 Agent 技术史复盘。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**🏗️ 语言作为脚手架**  
Language 如何成为 Agent Perception、Reasoning、Action 的统一媒介。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**🔑 OpenClaw Moment**  
为什么 OpenClaw 是 Agent 的"ChatGPT Moment"？底层技术就绪，交互范式才是引爆点。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**💻 Coding 是根本**  
Dario 的关键洞察：Coding 是数字世界最根本的 fabric，所有边界都在通过 Code 消弭。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**🌍 World Model**  
不仅仅是对物理世界的视觉建模——公司架构、工作流、人际关系都是 World Model 的一部分。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**🏢 Agent 创业图景**  
$40M 种子轮背后的逻辑：Specialized Intelligence 不是 General Intelligence，Agent Research Lab 的新范式。

</div>

</div>

---
layout: default
---

# Agent 的定义：三个要素

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🧍 Entity
<div class="text-sm opacity-80 mt-2">它是一个实体</div>
<div class="text-xs opacity-60 mt-2">有明确的边界 Boundary，<br/>不是一个发散的、没有边界的东西</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🌐 Environment
<div class="text-sm opacity-80 mt-2">在环境中工作</div>
<div class="text-xs opacity-60 mt-2">需要在外界环境——无论是<br/>物理世界还是数字世界——中运作</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 🎯 Goal-Directed
<div class="text-sm opacity-80 mt-2">有目的性的活动</div>
<div class="text-xs opacity-60 mt-2">不是在随机游荡，而是带有<br/>目的性地行动以达成目标</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

<div class="font-bold mb-1">这个定义适用于所有动物，尤其是人类。</div>
"所有的动物它都是 Agent。尤其是人，它可能是这个有最先进的智能的这样的 Agent。" — 苏煜

</div>

<div class="mt-3 text-xs opacity-50">
作者概括：苏煜的三要素定义（Entity + Environment + Goal-Directed）为理解 Agent 提供了一个统一的框架，从单细胞生物到人类到 AI 都适用。这一框架也是贯穿整个对话的分析工具。
</div>

---
layout: two-cols
---

# Agent 三纪元：分久必合

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**Logical Agent（1950s–1990s）**  
专家系统 + 一阶谓词逻辑 + 推理引擎。Knowledge Acquisition 瓶颈 → 导致 AI Winter。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">

**Neural Agent（2000–2020）**  
Deep RL、AlphaGo、前馈网络。Memory 和 Autonomy 相比 Logic Agent 大幅扩展，但仍然受限——所有推理 = 一次 forward pass。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

**Language Agent（2022–至今）**  
LLM 为基座，Language 作为脚手架。Adaptive Computing：复杂任务多产生 token，简单任务少产生 token。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-three-eras.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Logical Agent 时代：知识获取瓶颈

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**技术方案**
- 采访各领域专家，把知识写成逻辑语言（如一阶谓词逻辑）
- 基于逻辑的 Inference Engine 进行推理
- 新的问题来临 → 基于已有知识进行逻辑推演

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**根本局限**
- Memory 表达力被逻辑语言限制——世界绝大部分东西无法用简单逻辑表达
- Autonomy 极弱——所有能做的就是"take a question → 推理 → 答案"
- Knowledge Acquisition Bottleneck：获取知识的过程非常痛苦，Low-Scale

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**导致了 80-90 年代的 AI Winter。** 专家系统不能 Deliver 它的 Promise。高阶逻辑、模糊逻辑、概率逻辑只解决了很小一部分问题。

</div>

<div class="mt-2 text-xs opacity-50">
作者概括：苏煜指出，早期的 Agent 失败不是因为"智能"不够，而是因为知识获取的成本过高、表达力受限——这两个问题直到 LLM 出现才被根本性地缓解。
</div>

---
layout: default
---

# Neural Agent 时代：Deep RL 的辉煌与局限

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**代表性的突破**
- **AlphaGo**：击败人类顶级棋手
- **Atari Games**：街机游戏 → **Dota** → **星际争霸**
- 同一套方法可以玩不同种类的游戏——通用性提高
- 网络架构：几十 Million 到一百 Million 参数（在当时非常大）

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**根本局限**
- 输入 = 游戏画面，输出 = 游戏动作——Scope 极小
- Memory = 仅关于这一个游戏的规则
- Autonomy = 一个 forward pass：<br/>"它对于不管多么复杂的情况，它所能用到的计算量就是一个 forward pass"
- Sample Efficiency 极差：简单游戏需要几百万盘

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**为什么是游戏？** 游戏环境高度可重复、输入输出简单受限、Data 丰富——天然适合当时的 Deep RL。Demis（DeepMind 负责人）对游戏情有独钟也有个人偏好的因素。

</div>

---
layout: two-cols
---

# Agent 核心能力：两大支柱

<div class="text-sm leading-relaxed mt-4 pr-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**Memory（记忆）**  
广义的知识体系：Knowledge Representation、知识获取、更新与遗忘。包括 Semantic Knowledge（语义）、Episodic Memory（日常记忆）、Procedural（过程性记忆）。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">

**Autonomy（自主性）**  
Perception（感知）→ Reasoning（推理）→ Decision-Making（决策）→ Action（行动）。Memory 是 Autonomy 的基础——一体两面。

</div>

<div class="text-xs opacity-50 mt-2">
作者概括：苏煜的这套框架是贯穿全场的分析工具——从 Logical Agent、Neural Agent 到 Language Agent，每次代际跃迁本质上都是 Memory 和 Autonomy 的双重扩展。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-autonomy.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Semantic Parsing：扩大 Agent 的输入输出宽度

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Semantic Parsing（语义解析）**
- 把自然语言转换成 Formal Meaning Representation（机器能读懂的语义表达）
- 背后可以是知识图谱、数据库、网站
- 关注的是"做广"——扩大 Agent 的 Communication 和 Action Space

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**与 Neural Agent 的互补关系**
- Neural Agent → 做深：在受限环境里把事情做好
- Semantic Parsing → 做广：解决语言理解和沟通问题
- 一个领域的许多重要人物都是 Semantic Parsing 出身

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

<div class="font-bold mb-1">苏煜的研究起点：</div>
"Let machines understands human thinking. Don't let humans think like machines." — 苏煜的 PhD 答辩宣言。他选择 Semantic Parsing 这个当时的小众方向，因为他看到人在变成"电脑的奴隶"——人和电脑的关系不应该是这样。

</div>

---
layout: default
---

# Language Agent：语言作为脚手架

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**为什么叫 Language Agent？** 因为这一代 Agent 基于 LLM，最大的不同在于它用 Language 作为 Scaffold（脚手架）来做所有事情。

</div>

<div class="grid grid-cols-3 gap-3 text-xs">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**👁️ Perception**  
Language Understanding ——人机交互形式灵活得多，不需要像过去那样精确编程

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**🧠 Reasoning**  
Chain of Thought → Adaptive Computing：复杂任务多产生 token，简单任务少产生。每一个 token 是一个 forward pass，固定的计算量。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**🖐️ Action**  
语言是几乎全能的行动媒介。包括 Formal Language、Machine Language——基本上可以在 Digital World 里做任何事。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
LLM 训练 = 以语言为脚手架的压缩过程 → 从语言的 Surface Form 压缩成一个对世界的 Meaning Representation。这是为什么我们不再说它是"随机鹦鹉"——它实际上在构建一个世界模型。
</div>

</div>

---
layout: default
---

# 语言在进化中的加速作用

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**地球生物进化时间线**
- 有机物出现 → 真核细胞：~10 亿年
- 真核细胞 → 哺乳动物：~10 亿年
- 哺乳动物 → 人属 Homo：~2 百万年
- 智人 Homo sapiens：~30 万年

**人类的进化史在整个进化史中只是沧海一粟。**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**语言出现后的加速**
- 系统性符号表达：~10 万年前（洞穴壁画）
- 系统书面语言：~5-6 千年
- 最近 5-6 千年：人类文明大爆炸式发展

**语言是人类进化史上爆炸式的加速剂。**

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**"在 Agent 的演化、在 AI 的演化过程中好像又是一个类似的效果。"** — 苏煜 2023 年发表了第一篇博客："Language Agents: A Critical Evolutionary Step for Artificial Intelligence"。

</div>

---
layout: two-cols
---

# Language Agent 演进时间线

<div class="text-sm leading-relaxed mt-4 pr-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">

**2022 上半年：Chain of Thought**
首次实现 Adaptive Computing——不同复杂度的问题用不同的推理计算量。

</div>
<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 mb-2">

**2022 下半年：ReAct（姚顺雨）**
CoT 扩展到有外部环境的 Agent setting：Perceive → Reason → Decide → Act → 环境变化。

</div>
<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-2">

**2023 初：Toolformer（Meta）**
首个 LLM Tool Use 工作。Satya 敏锐看到——当大模型能用各种现成 Tool，对 Enterprise 的意义完全不同。

</div>
<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 mb-2">

**2023 中：GPT-4V → SeeAct**
多模态转向。Visual Perception + Web Agent。UGround（2024）确立"像人一样用电脑"的 Embodiment。

</div>
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**2025：Claude Code → OpenClaw**
Coding Agent 大爆发。所有边界在 Coding 这个维度上快速消弭。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-timeline.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AutoGPT：2023 年的一把火，也是第一次 Agent Hype

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**AutoGPT（2023.03）**
- 开源项目，把 LLM 包装成 Agent 外壳
- 火速冲到 10 万 GitHub stars，现在是 18 万
- **GitHub 历史上 Stars 数涨得最快的 Repo——没有之一**
- 做的事情很简单：看上去能去做任何事情，但实际上能做的非常非常少

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**同时期的另一个代表：AI Engineer**
- 号称第一个全自动的 AI Engineer
- 后来发展成一家公司：**Lovable**
- 现在是 Vibe Coding 赛道最有代表性的公司之一
- Agent 的早期概念 → 真正商业化的路径

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
苏煜的类比：AutoGPT 当年的火爆程度与今天的 OpenClaw 差不多——早期 Agent 概念验证 → 底层技术成熟 → 交互形式革命，这是反复出现的模式。
</div>

---
layout: default
---

# UGround：像人一样用电脑——Agent 的 Embodiment

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**核心主张：Agent 应该 Use Computers Like Humans Do**

</div>

<div class="grid grid-cols-3 gap-3 text-xs mb-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**之前的做法**  
HTML / Text-based Representation —— Agent 通过解析网页源码来理解界面

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**UGround 的做法**  
Visual Perception + Pixel-Level Actions ——看屏幕截图，然后决定"点这里""在那里输入什么"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**行业影响**  
Claude Computer Use、OpenAI Operator、Claude Code desktop、Claude in Browser ——全都是这个 Embodiment

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Claude Computer Use 也是 2024 年 10 月左右出来的。UGround 和 Claude Computer Use 几乎同一时间选择了相同的技术路径——说明这个方向存在某种收敛的必然性。
</div>

</div>

---
layout: default
---

# Claude Code 的大爆发

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Coding Agent 的起飞**
- Cursor 的影响下，Anthropic 推出 Claude Code
- 2025 下半年，基模 Coding 能力质变
- **Opus 4.5 出来后**，感知和实践发生翻天覆地的变化——就在一两个月之间

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**在硅谷的亲身感受**
- 苏煜："基本上已经不自己写代码了"
- 变化扩散到硅谷之外还需要时间，但速度非常恐怖
- 从研究者的视角看：Coding 能力是 Agent 最根本的 Building Layer

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
苏煜对 Dario 的判断非常认同：Coding 是数字世界最根本的 Fabric——所有东西都能用 Code 表达。GUI 本身就是通过 Code Render 而来的。
</div>

---
layout: default
---

# OpenClaw Moment = Agent 的 ChatGPT Moment

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**ChatGPT Moment（2022）**
- 底层技术（LLM）已经发展了几年（BERT→GPT-1→GPT-2→GPT-3）
- OpenAI 做的事：把模型 Fine-tune 成 Chatbot，Release 给大众
- 底层技术没有太大变化——**交互形式的变化是导火索**
- 连 OpenAI 自己都非常 Surprise

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**OpenClaw Moment（2025-2026）**
- Agent 在 OpenClaw 之前已经有了很大的发展——技术上已经 Ready
- 大部分做 Agent 的人看 OpenClaw Codebase："Nothing's new here"
- 但它做的事情：**"YOLO it"**——不管 Permission 和安全，所有东西都打开，让 Agent 想干嘛就干嘛
- 因为是开源的，安全问题相对小

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**"就 ChatGPT Moment，它是标志着这个 LLM 这个范式的变化。而 OpenClaw 这个 Moment，它是标志着 Agent 那种各种高度自动化的、或者是 Personal 的 Agent 的这个范式的变化。"** — 苏煜
</div>

---
layout: default
---

# OpenClaw 的连锁反应：已经改变科技行业的轨迹

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Anthropic**  
Claude Code 持续"抄"OpenClaw 里的各种 Feature。但苏煜认为这不是抄——没有 OpenClaw，Claude Code 也会自然加上这些 Feature。催化剂作用。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**OpenAI**  
全面转向，砍掉实验性的东西，Focus 在 Agent 和 Productivity Coding。整个公司的技术路线收束。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**NVIDIA**  
老黄宣布："现在每一个企业都要有一个 Claude Strategy。" Agent 从技术话题变成了企业战略。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**裁员潮**  
最近看到的裁员新闻——与大家对于整个 Agent 能力的 Perception 变化有直接关系。技术进步速度远超新工作机会的产生速度。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**中国 vs 美国**  
中国更出圈、更全民化。街头巷尾、各地政府都在聊 OpenClaw。甚至有老人去 Event 找人帮忙装。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**社会焦虑**  
叙事变成"时代性的产业机会""个人翻身的工具"，甚至"不学就会被淘汰"。美国 Tech 圈以外辐射远没有中国大。

</div>

</div>

---
layout: default
---

# 所有边界正在消弭：走向 Universal Digital Agent

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**过去的划分都是临时性的** —— Browser Use vs Desktop Use vs Mobile Use、GUI vs Text-based、API vs Coding——这些都只是 "a means to an end"。

</div>

<div class="grid grid-cols-2 gap-3 mb-3 text-xs">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Coding 是融合剂**  
GUI 可以通过 Code Render。GUI vs CLI 不是非此即彼——Coding 可以把它们变成等价的。Coding 不会仅限于 Digital World。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**最终目标**  
一个 **Universal Digital Agent**——可以在 Digital World 里做人能做到的所有事情，甚至做得更好。这是一个正在快速逼近的愿景。

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
Programming Language 本身就是 Language。Language 从来不只是自然语言——它是一切符号化的东西，包括编程语言、图表语言、手势。所以 "Language Agent" 这个名称不会过时。
</div>

</div>

---
layout: default
---

# GUI 会消失吗？Agent 到底需要 GUI 吗？

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3 mb-3 text-xs">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**GUI 不会消失**  
人需要 GUI。我们是 Visual Animal——大脑就是这样编码的。HCI 研究表明视觉化让人的理解和反应速度快零点几秒。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Agent 不一定需要 GUI**  
但作为 Pragmatic 的选择——GUI 是 Digital World 的事实接口。99% 的数字世界已经通过 GUI 交互，而且 GUI 在设计过程中已经 Encode 了大量 Knowledge、Constraints、Business Logic。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**经济账和人性**  
"Semantic Web" 推了二十几年 Adoption 还是极低。人类社会不是你说"有一套新标准更好"就都会去改。长尾场景更不可能都重写一遍变成 CLI。

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**苏煜的结论：** 不管从 GUI 会不会消失、Agent 要不要 GUI、还是人类社会怎么运转的角度来看——CLI 全面替代 GUI 几乎不可能。但如果 Agent 能很好地使用 GUI，它就可以 "piggyback on all of these accumulated knowledge" 而且 "immediately reach all corners of human society"。
</div>

</div>

---
layout: two-cols
---

# 专用智能：从 Generalist 到 Expert

<div class="text-sm leading-relaxed mt-4 pr-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**通用智能已经很强了**  
Claude Code、Perplexity Computer、OpenClaw——给它一个问题，大概 60-70% 概率能做对。但如果它不是高度专业性的问题。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**缺的是 Specialized Intelligence**  
世界由几百万个"小世界"组成。每个职业、每个领域、每个软件都是一个小世界。这些世界加起来的 Entropy 是几乎无限的——没有一个单一的 Agent 能捕获所有。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

**Expert Agent 的需求**  
Reliability ↑ Speed ↑ Cost ↓。像 Intern → Expert 的过程：学会这个工作领域所有的 Ins and Outs。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./specialization-spectrum.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# World Model：不仅仅是物理世界的视觉模型

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**主流 World Model 的定义（偏视觉）**
- Vision-Based Model——Physical World 的建模
- Next Frame Prediction / Video Prediction
- 3D Reconstruction
- Latent Variables（如 JEPA）
- 主要是 Computer Vision 的人在推动

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**苏煜的广义 World Model**
- 公司的组织架构（表面 + 实际——到底谁说了算）
- 工作需要的各种软件怎么用
- 各种 Workflow
- 人与人之间的 Mental Model / Theory of Mind
- 所有这些都是 World Model 的一部分

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<div class="font-bold mb-1">一个实习生的故事：</div>
"大学刚毕业，去公司实习第一天，完全不知道工作内容是什么。但很快在 Learning on the Job 中持续学习——组织的架构、软件怎么用、各种 Workflow、跟人与人之间的整个 Mental Model。从 Intern 变成专家的过程，就是构建对这些 Micro World 的 Model 的过程。" — 苏煜
</div>

---
layout: default
---

# Continual Learning：Agent 最需要的能力

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**两个现有范式都不够**

<div class="grid grid-cols-2 gap-3 mt-2 text-xs">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**RL Post Training（模型厂）**  
RL + Synthetic Environments + RL Games。学习速度、准确性、学习内容的范畴——和人的持续学习是天壤之别。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Non-parametric Learning（OpenClaw 式）**  
MD Files → Skills → Rules → Harness。苏煜对 Non-parametric 很有热情，相信还有很大空间，但光靠它上限有限。

</div>

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<div class="font-bold mb-1">苏煜的核心论点：</div>
"Continual Learning 和 World Model 本质上是一件事情。你的持续学习的目的是为了去更好地学会一个广义的 World Model。学习的目标应该是一个 World Model。这是现在 Literature 里最大的 Gap。"
</div>

</div>

---
layout: default
---

# 新皮层理论：人脑如何学习 World Model

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

<div class="font-bold text-sm">Neocortex（新皮层）的关键事实：</div>
- 占据人脑的 ~70%，但进化上出现很晚——只在哺乳动物中出现，~2 亿年前
- 视觉、语言、听觉、逻辑推理、Planning——所有与智能有关的功能都汇聚到 Neocortex
- 从解剖结构看，Neocortex 各功能分区高度相似——重复的皮脂柱结构，人脑有 ~15 万个

</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Jeff Hawkins 的《千脑智能》理论**  
每个皮脂柱（Cortical Column）就是在学习 World Model。不限于物理世界——语言、数学系统、抽象概念（民主、法治）都是 World Model 的一部分。每个概念在多个皮脂柱中有多个 World Model。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**与 Agent 的联系**  
人在成为专家的过程中建立 Cognitive Maps / Conceptual Framework ——这在神经科学中 Very Well Established。但 Agent 的持续学习远远没有解决这个问题。这是 Neo Cognition 公司名称的来源。

</div>

</div>

</div>

---
layout: default
---

# 语言与思维：可以分开，但文明需要语言

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Dissociation of Language and Thought（MIT 的研究）**
- 通过 fMRI / rTMS 发现：人在做复杂推理任务时，语言区域（Wernicke 区、Broca 区）并不一定被点亮
- 论证：对于 Individual Thought——我自己在想事情——Language 可能没有那么重要
- 因为人学习的过程就是把需要 Language 作为脚手架的知识内化到神经之间直接连接的过程

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**但 Civilization Needs Language**
- 任何现代文明的尖端工业——每一个都是符号化的
- Language、Diagram、Programming Language 是现代文明存在的根基
- 即使个体思维不需要语言，文明层面的知识传递和协作离不开符号化表达
- Chris Manning 高度赞同苏煜的这个观点

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**"你可能 Individual Thought doesn't need language，但是 Civilization needs language。"** 这是为什么苏煜坚持把 Agent 叫做 Language Agent——即使底层模型未来变成某种 World Model，以语言为根本的理解、推理和交互能力不会消失。
</div>

---
layout: default
---

# 2026 年 Agent 的核心瓶颈与主旋律

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3 mb-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-center">

**🔴 Reliability**
不够可靠，长程任务容易失败。Intern 容易犯安全错误——老师傅不会。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">

**🟡 Speed**
推理太慢。消耗大量 Frontier Model Token。做一件事需要太多轮交互。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

**🔵 Cost**
门槛太高。为什么 OpenAI/Anthropic 要采用 Platform Engineer 模式去客户现场帮 Build Agents——根源于这些问题。

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

<div class="font-bold mb-1">2026 年主旋律：Continual Learning + Self-Learning</div>

问题在于 Continual Learning 的方式——是不是基于 World Model 的 Continual Learning？这是"One of the bets"。但不管技术路线是什么，Self-Learning 和 Continual Learning 会是这一年的主旋律。

</div>

<div class="mt-2 text-xs opacity-50">
作者概括：苏煜认为 Reliability、Speed、Cost 是同一个问题的不同表现——Agent 没有像人一样的持续学习机制来构建对具体工作领域的 World Model。这也是他创立 Neo Cognition 的原因。
</div>

</div>

---
layout: default
---

# 大厂的 Agent 战略：从分道扬镳到高度趋同

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Anthropic**  
一家独大，打了个样。所有跟 Productivity 相关的都在做。大家都开始抄作业。今年和去年的最大不同——去年还在 Bets 不一样的东西。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**OpenAI**  
也在收束——砍掉实验性项目，Focus Agent 和 Productivity Coding。方向变得明确。上一代的分散探索阶段已经过去。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Google**  
模型能力强，又有最好的 Ecosystem。但 Adoption——至少声势上——总觉得缺了一些东西。"可能有一些更深层次的东西我没有看清楚。" — 苏煜

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**xAI（老马）**  
Computer Use Agent 是最大的 Bets 之一。成立了 MacroHard（Microsoft 的反义词）。走类似 Tesla FSD 路线——小模型、视觉为主、End-to-End。至少是一个 Different Bet。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**国内**  
ByteDance（UI-Tars 系列 + 豆包手机）、智谱（AutoGLM 系列，开始很早）都有很好的工作。苏煜与智谱有渊源——2023 年夏天去清华讲 Mind2Web，后来合作做了 AgentBench。现在大家应该都有自己的"Claude Strategy"了。

</div>

</div>

---
layout: default
---

# New Cognition：Agent Research Lab 的创业哲学

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-4 mb-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="font-bold text-sm">公司定位</div>

- **Name**：Neo Cognition（Neo = New，Cognition 来自 Neocortex）
- **定位**：Agent Research Lab —— 所有跟 Agent 相关的问题，如果有意思或可能跟最终解决 Agent 相关，都可能会去做
- **短期聚焦**：Specialized Intelligence ——不是 General Intelligence
- **种子轮**：$40M（2025 年 7-8 月创立 → 2026 年 3 月完成，约 6 个月）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

<div class="font-bold text-sm">为什么创业公司能做而大厂不能？</div>

- 要做的事情上限极高——如果被解决，会给人类社会带来根本性变化
- Uncertainty 极高——没人能打包票说哪个技术路线是对的
- 多种可能的技术路线需要不同的 Bets
- 类似 Robotics 行业的逻辑——想象空间大 + 不确定性高 = 容纳更多 Player

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
最大的 Learning Signal 来自 Continual Learning from Deployment。真实环境的部署才能产生真正的学习数据——在学校没法做这样的 Deployment。这是从学术界走向创业的根本驱动力。
</div>

</div>

---
layout: default
---

# 融资市场：两极分化与马太效应

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**头部的巨额融资**  
New Labs 一上来融几千万到几亿美金，甚至十亿美金。OpenAI + Anthropic 的融资额加起来可能占整个市场的 30-50%。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**中间的困境**  
VC Firms 也在两极分化。中间的 VC 实际上是比较 Struggle 的。要么变成 Mega Fund（投 Growth Stage），要么变成 Boutique Firm（Deep Knowledge Edge）。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**投资人看什么**  
1. 过往工作（在 Frontier Lab 的核心贡献估值逻辑不同）  
2. Thesis 的 Differentiation  
3. Team 是 One of the best to do that  
4. 大厂不能轻易 Copy

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
苏煜："现在这个 Space 太 Chaotic 了。所有的故事大家都听过很多遍。你到底怎么样能去找到这个 Differentiation——既要 Credible 又要 Feasible，有商业价值，而且 OpenAI 和 Anthropic 轻易不能 Copy。"
</div>

---
layout: default
---

# 从清华计算机到硅谷创业：一个人的成长路径

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3 mb-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**早年经历**
- 湖南小县城出生，教育资源说不上多好
- 喜欢凌晨三点从家里偷溜出来去网吧
- 从小就极度热爱读书——家里只要是纸质的东西就拿起来读
- "玩上面没耽误，学习也没耽误"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**学术道路**
- 湖南省前十考入清华计算机
- PhD 期间做 Semantic Parsing（当时 Niche 领域）
- OSU 当教授，建立 OSU NLP Group
- 2025 年斯隆研究奖得主
- 做 Mind2Web、SeeAct、UGround 等早期 Agent 工作

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**性格底色**
- "魂不吝"——不觉得事情有那么大所谓，不会为某件事吃不好睡不好
- 但真的想要一个东西，Put my mind to it，大概率能做到
- 从不纠结——一直知道会做 Startup。只是等到 2025 年技术 Ready + 自己认知 Ready

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
"读书它本身就是一个构造世界的过程。你通过文字去在脑海中构造出那么一个一个的世界，并且构造出来这个各个世界之间的关联。" — 苏煜谈读书对他人格养成的影响。这也解释了他对 World Model 概念的深层认同。
</div>

</div>

---
layout: default
---

# 苏煜推荐的影响 AI 进程的论文

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-2">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400 text-xs">
<div class="font-bold">1943 · Neuron Model</div>
首个 Neuron 计算模型 → 所有 Neural Network 的起源
</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400 text-xs">
<div class="font-bold">1986 · Backpropagation</div>
Hinton 等人大众化 → Neural Network 的训练基石
</div>

<div class="p-2 rounded bg-yellow-50 border-l-2 border-yellow-400 text-xs">
<div class="font-bold">2012 · AlexNet</div>
Neural Network 的文艺复兴 → Computer Vision 革命
</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400 text-xs">
<div class="font-bold">2013 · Word2Vec</div>
重新把 Neural Network 引入 NLP。在此之前 NLP 对 NN 是"嗤之以鼻"
</div>

<div class="p-2 rounded bg-red-50 border-l-2 border-red-400 text-xs">
<div class="font-bold">2017 · Transformer</div>
"Everyone knows that." Attention → Self-Attention → 改变一切
</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400 text-xs">
<div class="font-bold">2018 · BERT</div>
第一个真正大规模 Work 的 Foundation Model for Language
</div>

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400 text-xs">
<div class="font-bold">2022 · Chain of Thought</div>
Adaptive Computing → 语言作为 Reasoning 脚手架的关键突破
</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400 text-xs">
<div class="font-bold">2023 · Toolformer</div>
首个 LLM Tool Use → Enterprise 应用的转折点
</div>

</div>

<div class="mt-3 text-xs opacity-50">
苏煜强调：这些工作都是 Connected——Transformer 的 Self-Attention 来自 2014 年的 Attention，Short-cut Connection 来自 ResNet，ResNet 又来自更早的 Highway Network。科学是渐进积累的。
</div>

</div>

---
layout: default
---

# 技术的民主化：AI 研究者的责任

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**真正的 Concern 不是 Existential Risk**
在可预见的未来，苏煜看不到 AI "Hit Singularity → 快速自我迭代 → 远超人类智能 → 消灭/取代人类" 的可能性。AI 缺失的是 Innate Goals、Intention、生存压力——没有注入这些的可行方式。所有目的都是人赋予的。

</div>

<div class="grid grid-cols-2 gap-3 text-xs mb-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**真正的风险：Job Displacement**  
AI Agent 大规模取代 Knowledge Worker → 新岗位不足以承接被取代的劳动力 → 没有好的收益再分配机制 → 大部分收益由头部公司和资本获得 → 对社会产生极大影响。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**解决方案：Democratize Access**  
让 Powerful Expert-Level Agent 变得不是门槛很高。每个人有好想法、独特洞察 → 能用 Accessible 的技术手段迅速转化成 Agent → 并且 Make money out of it。

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
技术的民主化是苏煜认为 AI 研究者可以做出的最重要贡献之一。这也是他把公司定位为 Agent Research Lab 而不是纯商业公司的原因——推动技术变得真正好用好上手。
</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Agent 首先它应该是 Entity，它有它的 Boundary。它需要在外界环境中去工作。它要去进行 Goal-Directed Activities，有目的性地去进行各种各样的活动。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，Agent 的三要素定义</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"分久必合，合久必分——最近所有这些领域又有一个重新归拢的趋势。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，谈 CV/NLP/Reasoning 的重新汇聚</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"就 ChatGPT Moment，它是标志着 LLM 这个范式的变化。而 OpenClaw 这个 Moment，它是标志着 Agent 那种高度自动化的、或者是 Personal 的 Agent 的这个范式的变化。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，类比两个历史时刻</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"这些东西都是在快速地 Converge。最后，At the end of the day，大家想要的就是一个 Universal Digital Agent。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，Agent 的终极愿景</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Let machines understands human thinking. Don't let humans think like machines."
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜的 PhD 答辩宣言，语义解析的初心</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"你可能 Individual Thought doesn't need language，但是 Civilization needs language."
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，谈语言与思维的关系</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的观点：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我们 Living in a compressed timeline——现在每一年甚至每一个月 AI 的发展是以前可能要十年才能达到的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，Agent 进化加速度</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Coding 它是非常 Fundamental 的。它是这个最根本性的 Fabric，这个 Building Layer。你所有的东西都能用 Code 来表达。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，评价 Dario 的 Coding 洞见</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"最大的 Learning Signal 来自于 Continual Learning from Deployment。你需要去这些真实环境里面去学习，持续学习。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，为什么学术研究必然走向创业</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"这个世界是非常复杂的，这个世界不是一个世界，它是由可能几百万个小世界组成的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，谈 Specialization 的必要性</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Continual Learning 和 World Model 我觉得它本质上是一件事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，2026 年 Agent 的主旋律</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我觉得在这个时间点应该做的事情是正确的事情那就做吧。就也不用去想什么后路。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜，谈他"魂不吝"的创业心态</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="text-sm opacity-60 mt-4">
苏煜 · 语言及世界工作室 · 商业访谈录
</div>

<div class="mt-4 text-xs opacity-40">
"A Brief History of Intelligence" + "A Thousand Brains" — 苏煜推荐的两本必读书
</div>
