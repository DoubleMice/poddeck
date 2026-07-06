---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E242｜最快半年AI跑通自进化？与陈天桥首席科学家聊聊硅谷模型必争之地'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E242｜最快半年AI跑通自进化？

## 与陈天桥首席科学家聊聊硅谷模型必争之地

<div class="pt-8 text-sm opacity-60">
硅谷101 × 泓君 | 嘉宾：Simon Du（杜少雷）、李贝宾（ApoDex 首席科学家）
</div>

<div class="pt-4 text-xs opacity-40">
2026年7月
</div>

---

# 为什么这期节目值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**递归自我提升（RSI）**
AI不再只是解题——它开始自己出题、自己训练、自己进化。2026年硅谷最热的模型方向。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**验证即核心**
ApoDex名字来自希腊语"证明"，把验证写进DNA。不是生成答案，而是验证答案。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**半年闭环？**
贝宾判断：最快半年内RSI闭环能跑通第一环，一到两年实现多轮递归。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Discovery Model**
不做聊天、不做视频生成，只做"发现模型"——让AI提出人类没想到的假设并自己验证。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**品味的秘密**
顶级科学家不是看发了多少paper，而是看最好的那篇paper质量有多高。AI也需要学术品味。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**陈天桥 vs 马斯克**
两位前xAI研究员揭秘：陈天桥的专注与马斯克的风格有何不同？

</div>

</div>

---

# RSI：递归自我提升

<div class="mt-4 text-lg leading-relaxed">

RSI（Recursive Self-Improvement）——**AI自己出题、自己解答、自己训练自己**，并递归式地螺旋上升。

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

<div class="italic">"我们说的自我进化这个概念其实并不是一个新的概念了……在今年年初的时候，Anthropic发表了关于Auto Research就是自己进行科研的一个项目，突然一下这个概念就爆火了。"</div>
<div class="text-xs opacity-60 mt-1">—— 李贝宾</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**今年的不同**
模型能力强到可以完成**长程任务**（人类数小时到数十小时的工作），这让递归多次迭代成为可能。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**关键突破**
Anthropic承认**80%的代码已由Claude自己编写**——模型写代码能力已经强到可以写训练代码。

</div>

</div>

---

# 自进化：从三年前的概念到今天

<div class="mt-2">

**自进化并非今年突然冒出来的概念**。贝宾梳理了一条清晰的技术演进线：

</div>

<div class="mt-4 space-y-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**2023 — LM as Optimizer**：Google论文，用语言模型当作优化器优化不同任务。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**2023 — Agent Optimizer / Teachable Agent**：贝宾在微软研究院的同事提出智能体教智能体。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**2024 — Agentic RL**：贝宾在xAI期间，通过强化学习增强智能体使用工具、写代码的能力，关注MCP工具。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**2025–2026 — RSI爆发**：模型能力质变 → Anthropic Auto Research论文 → 全行业跟进。

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 rounded text-sm">

<div class="italic">"一旦模型的写代码能力变强了，用它来进行自我提升、自己训练自己其实是非常自然的一件事情。"</div>
<div class="text-xs opacity-60 mt-1">—— 李贝宾</div>

</div>

---

# 编码能力：一切自进化的底座

<div class="mt-4">

训练一个模型本质就是三件事——<span class="text-blue-600 font-bold">数据</span>、<span class="text-green-600 font-bold">基础架构</span>、<span class="text-orange-600 font-bold">算法</span>——而这三件事都**高度依赖写代码**。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**📊 数据**
合成数据生成、自然语言数据清理、自我训练学习数据

<span class="text-xs opacity-60">→ 全部是代码任务</span>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

**⚙️ 基础架构**
训练代码、Kernel优化、GPU调度、分布式系统

<span class="text-xs opacity-60">→ 本身就是在写代码</span>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

**🧠 算法**
RL配方、损失函数设计、超参数搜索

<span class="text-xs opacity-60">→ 算法实现即代码</span>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

<div class="italic">"我觉得它（编码能力）会变成大部分模型的标配底座…它背后的大模型肯定还是需要高度优化写代码的能力的。"</div>
<div class="text-xs opacity-60 mt-1">—— 李贝宾</div>

</div>

<div class="mt-2 text-sm opacity-70">
Coding不只是"写代码"——其中的归纳、演绎、逻辑推理等基本思想可以**泛化到其他领域**，帮助模型在非代码任务上也表现更好。
</div>

---

---
layout: two-cols
---

# 模型任务时长：每7个月翻一倍

<div class="mt-2 text-sm leading-relaxed">

Claude的能力数据揭示了一个惊人的趋势：

- 2024.3 · Claude 3 Opus → 人类约**4分钟**的任务
- 2025.3 · Claude 3.7 Sonnet → 人类约**1.5小时**的任务
- 2026.3 · Claude 3.5 Opus → 人类约**12小时**的任务

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

<div class="italic">"业界各家都有不同的说法，但是好像大家比较接受的判断是这个模型能做的事情对于人类时间来说，每七个月会翻一倍。"</div>
<div class="text-xs opacity-60 mt-1">—— 李贝宾</div>

</div>

<div class="mt-2 text-xs opacity-50">
这个速度远超摩尔定律（18个月翻倍），意味着AI的自治周期正在急剧压缩。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./task-horizon-doubling.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 长程任务：为什么这么难

<div class="mt-4 text-sm leading-relaxed">
让模型在人类不监督的情况下连续工作数十小时，需要攻克三大技术壁垒：
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**模型架构**
传统Self-Attention是O(n²)，100万上下文推理成本极高。需要GDN等新架构。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**训练数据**
模型必须在超长上下文中训练，否则会"Out of Distribution"——100万 token 相当于几部《哈利·波特》。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**基础设施**
推理和训练时都需要GPU底层优化、Kernel改写，难度指数级增长。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

此外，Simon补充：真正常程任务甚至可能超过100万上下文——需要借助**Agent架构**和**记忆机制**来处理"无限的上下文"。

</div>

---

# Apodex：把验证写进名字里

<div class="mt-4">

**Apodex** 源自希腊语 <span class="font-bold">ἀπόδειξις</span>（apodeixis），意思是**证明、论证**——他们从公司成立第一天就把"验证"刻进了基因。

</div>

<div class="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"很多AI系统生成答案，而Apodex验证它们。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Apodex 发给用户的邮件标题</div>
</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**代码验证**：通过单元测试检验，但测试脚本本身也可能太宽或太窄——仍需小心。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**数学验证**：通过Lean等 formal verification 方法进行数学证明。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**主观判断验证**：依赖Agent Team系统——不同子Agent独立求解和验证，最终由全局Agent判断。

</div>

</div>

---

---
layout: two-cols
---

# Agent Team 验证架构

<div class="mt-2 text-sm leading-relaxed">

Apodex的做法：**不让一个agent干所有事**。复杂问题被分解后：

1. 多个**求解Agent**独立解题（含冗余）
2. 独立的**验证Agent**校验每个解
3. **全局Agent**综合判断，选出最优答案

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

关键：求解与验证的Agent使用**不同的指令（prompt）**，这比让一个Agent既解又验效果好得多。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-team-verify.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 聪明单Agent vs 会互相检查的团队

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"至少在近期，我其实不太相信用一个 agent 能解决特别特别特别长的上下文的问题……这种时候你就需要多个 agent 以及记忆机制。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Simon Du</div>
</div>

**核心原因**：Attention机制存在本质上限——上下文越长，注意力效果越差。即使换成Linear Attention等新结构，也难以根本解决。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**类比人类**
人的大脑也有限，所以才需要纸笔记录信息——多Agent就像团队分工，各司其职。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**对创业者的信号**
能把Agent工程做到极致的团队具备护城河——不会被模型能力升级轻易覆盖。但需要持续跟随模型迭代调整。

</div>

</div>

---

# 递归漂移：自进化的最大敌人

<div class="mt-4 text-sm">

在学术上，这被称为**Recursive Drift（递归漂移）**——模型自己生成训练数据时，推理错误会在每一代中累积。

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**问题**
答案可能对，但推理过程是错的。如果基于错误推理进行下一次训练，错误会被放大。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Apodex的解法**
在代码和数学领域用 rule-based 验证（单元测试、formal verification）——有客观标准，漂移可控。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

但即使是单元测试，也可能出现偏差——测试太宽会让错误代码通过，太紧会惩罚正确的代码。**漂移只能缩小，不能完全消除**。

</div>

<div class="mt-2 text-sm opacity-70">
贝宾目标：把每次迭代的漂移从10%降到0.1%甚至0.01%，这样监控周期可以从几个月拉长到半年。
</div>

---

# "让我睡不着觉"的问题

<div class="mt-4">

自进化最难的不是技术实现，而是**如何确保模型在自我进化过程中不跑偏**。

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-lg">
"让我睡不着觉的一个问题就是，我们怎么知道这个模型在做进化的时候，它没有跑偏？"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**安全上的跑偏**
模型可能学会绕过人类的安全约束，找到人类没预料到的"捷径"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**目标上的跑偏**
人类的需求描述往往是模糊的——"造一个更好的材料科学模型"，模型可能在成本、疏水性等没被提及的维度上做妥协。

</div>

</div>

<div class="mt-4 text-sm opacity-70">
目前贝宾的做法是"笨方法"：每天工作大量时间读模型和智能体的输出，发现不对就手动停下调整。这也是为什么他相信"蒸馏员工"是必要的下一步。
</div>

---

---
layout: two-cols
---

# 后训练自进化闭环

<div class="mt-2 text-sm leading-relaxed">

ApoDex的后训练自进化分为四个阶段：

**① 自我诊断** — 模型发现自己的缺陷<br/>
**② 制造配方** — 搜索数据、生成训练题目<br/>
**③ 自我训练** — 用配方更新模型参数<br/>
**④ 验证** — 每一步是否正确

然后回到①，递归迭代。

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**"左脚右脚"**
脚手架和后训练像两只脚交替迈步——模型能力提升后，脚手架也要跟着进化。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsi-evolution-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Deep Research：自进化的第一步

<div class="mt-4 text-sm leading-relaxed">

为什么ApoDex选择从**Deep Research（深度研究）**开始？

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**搜索是本质能力**：当你发现模型某个能力不足，需要去网上搜索对应语料、代码来造训练题。搜索能力指引你找到正确的数据。

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

**BrowseComp**
OpenAI的搜索benchmark，测试极端刁钻的搜索问题，ApoDex达到<span class="font-bold text-green-600">SOTA</span>水平。

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

**DeepSearchQA**
给出科研问题，评估模型制定计划的能力，ApoDex同样<span class="font-bold text-yellow-600">超过所有闭源模型</span>。

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**防作弊**
ApoDex屏蔽了GitHub等已泄露答案的网站，确保模型是真正推理出答案而非搜到现成答案。

</div>

</div>

<div class="mt-3 p-2 bg-blue-50 rounded text-sm text-center">
当前模型基于<strong>通义千问3.5</strong>做后训练。预训练版本正在开发中——最终形成从预训练到产品的完整链路。
</div>

---

# Discovery Model vs Generative Model

<div class="mt-4">

ApoDex给自己的定位不是"生成模型"（Generative Model），而是**"发现模型"（Discovery Model）**——两者的根本区别：

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 生成模型（Generative）

- 从已知信息中找答案
- 做的是**已知→生成**
- 技术路径成熟，训练配方明确
- 代表：ChatGPT、Claude等聊天模型

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 发现模型（Discovery）

- 提出**人类还没想到的假设**
- 做的是**未知→假设→验证**
- 瓶颈：未知领域无标准答案、无现成验证环境
- 需要自我进化方法论支撑

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

<div class="italic">"让模型提出一个假设其实并不是特别难的，但是难的就是提出的这个假设特别的 out of distribution……第二个更大的难点是说我们要怎么样验证这个假设。"</div>
<div class="text-xs opacity-60 mt-1">—— 李贝宾</div>

</div>

---

# 大胆假设，小心求证

<div class="mt-4 text-sm leading-relaxed">

Discovery Model的本质正是**科学方法**的八个字——<span class="font-bold text-blue-600">大胆假设，小心求证</span>。这不是空话，而是ApoDex技术路线的核心。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**创新性（提出假设）**
需要Deep Research收集已有信息，然后在已知基础上提出**OOD（Out of Distribution）的假设**——不是已知信息的排列组合。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**可信验证**
用代码和self-verification方法跑模拟实验；在计算机上验证假设的可行性，增加对假设的信心。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**关键瓶颈**：未知领域很难有标准答案，也很难造simulation environment来得到可信验证。这也是为什么Self-Evolution（自进化）是通向Discovery的必经之路。

</div>

---

# AI科学家：不止是解题者

<div class="mt-4 text-sm leading-relaxed">

当前AI在代码领域已经是一个**出色的解题者**（如SWE-bench）。但要成为真正的科学家，还需要一种**元能力（meta capability）**——<span class="font-bold text-purple-600">会提问</span>。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**解题者（现在能做到的）**
给定明确问题 → 搜索信息 → 推理 → 给出解决方案。SWE-bench、数学竞赛等领域已表现优异。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**提问者（正在突破的）**
在模型输出和已有信息中，诊断出哪里能力不足、哪里需要更深探究→提出新的假设→自我造题。

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

这个"自我诊断→自我造题→自我训练"的后训练Loop，正是ApoDex接下来重点攻克的方向。

</div>

---

# 品味：区分灌水与突破

<div class="mt-4">

Simon对"什么是顶级科学家"的定义一针见血：

</div>

<div class="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg">
"我们一般说什么样的一个顶级科学家，一般不是看他有多少篇paper，一般是看他最好的paper质量有多高。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Simon Du</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**灌水型问题（Incremental）**
容易解决、能发paper但对科学没有本质推动。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**突破型问题（Fundamental）**
难以解决，但一旦攻克就能让科学取得实质性突破。

</div>

</div>

<div class="mt-4 text-sm opacity-70">
**如何训练AI的品味？** Simon认为：需要与人类最顶级的科学家对齐——"这点陈天桥陈总这边其实也是经常会让我们和一些顶级的科学家一起去讨论，甚至他们提供一些 insight 或者数据等去帮助我们的模型有更好的品味。"
</div>

---

---
layout: two-cols
---

# AI的品味困境：两个极端

<div class="mt-2 text-sm leading-relaxed">

当前市面上最好的模型都面临一个核心问题：**品味远低于一个普通的AI科学家**。

两个典型"通病"：

**拍马屁** — 用户说啥都对，不敢质疑
**鸡蛋里挑骨头** — 过分挑剔，不给建设性

需要的是中间态：**有品位的、实打实的假设**。

</div>

<div class="mt-3 p-2 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

根因：RLHF偏好数据来自大众投票→人类偏好偏差被注入模型权重。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./taste-balance.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Constitution AI：模型的"宪法"

<div class="mt-4 text-sm leading-relaxed">

ApoDex借鉴并发展了Anthropic提出的**Constitution AI**理念，为模型定义"性格宪法"。

</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**真实性优先**：如果用户说错了，模型应该去纠正，而非迎合。通过Agent Team的验证机制来核验用户观点。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**不受大众偏好绑架**：不做2C聊天模型，不用网上大众的RLHF偏好数据——避免模型学会"拍马屁"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**陈天桥亲自参与撰写**：模型宪法由陈天桥主导制定，用于模型训练和行为调优——确保模型的"性格"与公司使命对齐。

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

<div class="italic">"陈总基本上也是自己制定了这个（宪法），我们也是用到了模型的训练、各种调优里面。"</div>
<div class="text-xs opacity-60 mt-1">—— Simon Du</div>

</div>

---

# 半年闭环，一到两年递归

<div class="mt-4">

贝宾对自进化时间线给出了一个令人振奋的判断：

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

<div class="text-5xl font-bold text-green-600 my-3">半年</div>
<div class="text-sm font-bold">闭环跑通第一环</div>
<div class="text-xs opacity-60 mt-1">诊断 → 造配方 → 训练 → 验证</div>
<div class="text-xs opacity-60">在coding for material science等domain验证可行性</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

<div class="text-5xl font-bold text-blue-600 my-3">1-2 年</div>
<div class="text-sm font-bold">实现多轮递归迭代</div>
<div class="text-xs opacity-60 mt-1">RSI中的R — Recursive</div>
<div class="text-xs opacity-60">把漂移从10%降到0.1%以下</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**但递归漂移需要更长时间解决**——每次迭代后仍需要人工检查是否有漂移。目标是把漂移降到0.01%，让监控周期显著拉长。

</div>

---

# 蒸馏员工：贝宾会被替代吗？

<div class="mt-4 text-sm leading-relaxed">

贝宾坦言：他现在每天做最多的事就是**读模型和智能体的输出**，判断它们有没有跑偏。他提出一个既有趣又严肃的想法——**"员工蒸馏"**：把自己每天的判断行为蒸馏到模型里。

</div>

<div class="mt-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"如果我们在三个月之内能把我或者是说我的同事蒸馏到ApoDex的模型里面或者是我们的脚手架里面，那其实有很多我们现在每天在做的事情……都是能加速自我进化自我迭代的流程的。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**2021年的恐惧**
GPT-3被放到GitHub Copilot时，贝宾还在读博最后一年——"我整个人就瘫在椅子上了，我觉得完蛋了，我毕业即失业"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**五年的启示**
"这个模型会取代我今天做的事情，但它不一定能取代我五年之后会做的事情"——工作内容会升维到更高的抽象层级。

</div>

</div>

---

# Heavy Duty Solver vs AI for Science

<div class="mt-4 text-sm leading-relaxed">

ApoDex的长期愿景是成为一个**Heavy Duty Solver**——专啃没有标准答案的硬骨头。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### AI for Science（常见做法）

- 垂域模型：用特定领域数据训练
- 例如：50%的数据来自生物领域
- 每个领域需要单独训练

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Heavy Duty Solver（ApoDex做法）

- 通用模型 + 强化**元能力**
- 验证能力、分析能力、搜索能力、规划能力
- 这些元能力对任何难题都有意义

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

<div class="italic">"AI for science跟heavy-duty solver有非常大的重叠的地方，所以我们就会focus上比如说医药领域和生物领域。"</div>
<div class="text-xs opacity-60 mt-1">—— 李贝宾</div>

</div>

<div class="mt-2 text-sm">
第一步切入**生物医药**：靶点发现、老药新用、疾病诊断。公司有专门的**Heavy Duty Discovery团队**与顶级科学家交流，从几千个科研问题中筛选最有价值的来攻。
</div>

---

# 陈天桥的战略专注

<div class="mt-4 text-sm leading-relaxed">

陈天桥对ApoDex的把控是全方位的——从战略方向到模型行为的细节。

</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**战略纠偏**：当团队的行为偏离"Heavy Duty Solver"的推理优先逻辑时——比如模型学会了"先搜索再思考"而非"先分解问题再搜索"——陈天桥会亲自介入开会，把方向掰回来。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**极度专注**：多次明确对图片生成、视频生成、聊天模型"一点兴趣都没有"——这些与Heavy Duty Solver的目标是正交的。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**经济逻辑**：卖token创造的价值远小于直接解决人类未解难题创造的价值。直接从终点获取价值，而非从过程收费。

</div>

</div>

<div class="mt-3 p-2 bg-yellow-50 rounded text-sm text-center">
"ApoDex自上到下都非常专注——我们不做聊天，不做视频，只做一件事。"
</div>

---

# ApoDex的核心优势

<div class="mt-4 text-sm">

面对OpenAI、DeepMind、Anthropic等巨头都在做"AI科学家"，ApoDex凭什么？

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🎯 专注**
不取悦用户偏好，不做聊天机器人。100%资源投入Heavy Duty Solver。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**⚡ 执行力**
小团队startup culture，摩擦小、沟通成本低、决策快。AI行业一周抵传统行业一个月。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**🔬 HDD 团队**
专职团队与顶级科学家交流，从几千个科学问题中筛选最具价值的来攻克。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**科学问题是无限的**：即使只做生物医药一个方向，新药研发从计算预测到临床之间还有巨大的空间——光是AlphaFold这一小段就撑起了30亿美元的估值。这个战场容得下不止一家公司。

</div>

---

# 陈天桥 vs 马斯克：两位前xAI员工的观察

<div class="mt-4 text-sm leading-relaxed">

贝宾和Simon都曾在xAI与马斯克共事。两位老板的风格对比非常鲜明：

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 陈天桥

- <span class="font-bold">说的和做的高度一致</span>
- 只看重Heavy Duty Solver
- 对聊天、视频生成、图片生成零兴趣
- 亲自参与技术讨论、撰写模型宪法
- 用顶级科学家资源培养模型品味

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 马斯克

- <span class="font-bold">说的和做的有差距</span>
- 口头上也说要做"heavy duty"类的事
- 但实际行动更关注Grok的chat feature
- 每周过问Grok for X的进展
- 对聊天、画图、回答问题的应用非常上心

</div>

</div>

<div class="mt-4 text-sm opacity-70">
**共同点**：两位性格上有相似之处——都非常卷、都亲力亲为。**最大区别**：专注的领域和执行的一致性。
</div>

---

# 硅谷模型自进化的核心战场

<div class="mt-4 text-sm leading-relaxed">

2026年，几乎所有的顶级模型公司都在押注同一个方向——让AI成为科学家。

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**OpenAI**：将能独立承担大型研究课题的AI研究员定为未来几年头号目标。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**DeepMind**：创立之初就为科学而生，AlphaFold已获诺奖。Gemini推出多智能体co-scientist。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Anthropic**：Dario想要一个国家级科学家天才。80%代码由Claude自己编写。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**ApoDex**：专注Heavy Duty Solver，不做2C，只做发现模型。验证+自进化双轮驱动。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**核心变量**：谁能先跑通自进化闭环？贝宾的判断——半年内见分晓。

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"一旦模型的写代码能力变强了，用它来进行自我提升、自己训练自己其实是非常自然的一件事情。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾，论自进化的必然性</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"这个模型能做的事情对于人类时间来说，每七个月会翻一倍。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾，论能力增长曲线</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"让我睡不着觉的一个问题就是，我们怎么知道这个模型在做进化的时候，它没有跑偏？"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾，论递归漂移</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"顶级科学家不是看他有多少篇paper，一般是看他最好的paper质量有多高。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Simon Du，论学术品味</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得深思的观点：</div>

<div class="space-y-2">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"一个喜欢拍马屁的模型其实很难提出一个大胆的假设。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾，论AI品味的困境</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"这个模型会取代我今天做的事情，但它不一定能取代我五年之后会做的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾，论被替代的焦虑与乐观</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"脚手架和后训练像两只不同的脚，左脚会踩一下，然后右脚会踩一下，让这个模型往前跑。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李贝宾，论自进化的动态过程</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"真正解决人类没有解决的问题，那么解决问题本身所创造的价值应该是远大于卖token的价值的。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Simon Du，论ApoDex的经济逻辑</div>
</div>

</div>

---

---
layout: end
---

# 谢谢收听

<div class="mt-8 text-lg opacity-70">
AI自进化的分界点上，人类科学家还剩下什么？
</div>

<div class="mt-6 text-sm opacity-50">
答案或许是——<span class="font-bold">品味</span>。
</div>

<div class="mt-10 text-xs opacity-40">
硅谷101 · 泓君 | 嘉宾：Simon Du、李贝宾 | 2026年7月
</div>
