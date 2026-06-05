---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Soap Box: Detection and response in the AI age'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Soap Box: Detection and response in the AI age

<div class="mt-6 text-lg opacity-70">
Edward Wu — Dropzone 创始人
</div>

<div class="mt-4 text-sm opacity-50">
Risky Business · 2026 年 6 月 · 37 分钟
</div>

---
layout: two-cols
---

# 为什么这期值得关注？

<div class="text-sm leading-relaxed mt-2">

<div class="grid grid-cols-1 gap-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**漏洞海啸下的 D&R 新角色**
AI 让漏洞发现自动化 → 攻击者初始突破更容易 → 检测与响应成为"企业免疫系统"的前线。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**从单 Agent 到七 Agent SOC**
Dropzone 从告警分类起步，RSA 2026 宣布了包含 7 个协作 AI Agent 的完整 agentic SOC 架构。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**AI Coding 是 SOC 的水晶球**
软件工程在 AI 采纳上领先 SOC 2-3 年——那里的演进轨迹就是安全运营的明天。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Vibe-Code 的诱饵与陷阱**
用 token budget DIY SOC 自动化很诱人——但持续维护和测试才是真正的成本。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**20/80 模型选择策略**
每次告警调查涉及 100+ 次 LLM 调用——只有 20% 需要 premium 模型，其余可用 commodity model。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**人的角色：Field General 或 Special Forces**
Agent 做重复性分析——人类成为"战场指挥官"，定义策略、做 Agent 做不了的事。

</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vuln-apocalypse-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 漏洞末日（Vompocalypse）来了

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**AI 让漏洞发现民主化**
攻击者利用 AI 自动发现漏洞的速度远超人类手动审计——漏洞数量的增长已经不是线性，而是指数级。

**作者概括**: Ed 认为这最直接的影响是：攻击者获得初始立足点（initial foothold）的门槛大幅降低。传统上攻击者需要自己找漏洞，或者等待漏洞披露和补丁之间的时间差——现在这两个障碍都在消失。

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Patrick 的两难**
主持人提出了一个矛盾：我们到底需要更多的预防性控制（preventative controls），还是更强的检测与响应？

最终共识：**两者都需要更多**——但在当前过度依赖 D&R 的氛围下，可能需要把钟摆往预防性控制的方向推一推。同时，D&R 的压力不会减轻，只会更大。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

> "the vulnerability apocalypse will make actually detection and response even more relevant"
> <div class="text-xs opacity-70 mt-1">— Edward Wu</div>

</div>

</div>

</div>

---

# D&R = 企业免疫系统

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">

"in my mind, the detection and response, or the enterprise immune system becomes the frontier of the defense"

</div>

<div class="mt-2 text-sm opacity-60">
— Edward Wu
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>攻击者更容易进来</strong><br/>
<span class="opacity-70">更多漏洞 → 更多零日 → 突破外围防御的难度降低</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Assume Breach 升级</strong><br/>
<span class="opacity-70">过去"假定已失陷"是一种心态，现在更像一种必然</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>D&R 变成前线</strong><br/>
<span class="opacity-70">当 prevention 失效时，能否在攻击者达成目标前发现并阻止他们？</span>
</div>

</div>

---

# Assume Breach 2.0

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**老版本的 Assume Breach**
我们总是说"假定攻击者已经在环境里了"——但这更多是一种风险管理心态，而不是工程要求。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**新版本的 Assume Breach**
"now with armed with a lot more vulnerabilities and a lot more exploits, I think it's even more important to assume that attackers might already be in the environment"

— Edward Wu

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**核心问题变了**：不再是"如何防止攻击者进来"，而是 **"当攻击者已经在里面时，如何确保他们拿不到皇冠上的珠宝（crown jewels）"**。这要求 D&R 功能从设计之初就以"攻击者已在内网"为前提构建。

</div>

---
layout: two-cols
---

# 攻击链的新现实

<div class="text-sm leading-relaxed mt-2">

Vompocalypse 如何从根本上改变了攻击链的每一环：

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">

**初始突破更容易**
AI 让漏洞发现成本趋近于零 → 外围防御被突破的概率大幅上升

</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**横向移动窗口更大**
更多系统存在未修补漏洞 → 攻击者在内网移动的阻力变小

</div>

<div class="mt-2 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**因此 D&R 必须升级**
Prevention 不可靠 → Detection 和 Response 必须在 machine scale 和 machine speed 上运作

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vuln-apocalypse-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Dropzone 的进化：从 1 到 7

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**起点：单一 AI SOC 分析师**
Dropzone 的第一个 agent 专注于自主调查安全告警——即告警分类（alert triage）。这是一个"Tier 1 SOC analyst"的替代品。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

> "right before RSA this year, we announced a much broader agentic SOC vision which actually incorporates seven different AI agents. Each of them automating different parts of the detection and response function and then have those agents also collaborating with each other"
> <div class="text-xs opacity-70 mt-1">— Edward Wu</div>

</div>

</div>

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>7 个 Agent 各司其职：</strong>
<ul class="mt-2 space-y-1 text-xs opacity-80">
<li>🔍 告警调查（Alert Investigation）</li>
<li>🎯 威胁狩猎（Threat Hunting）</li>
<li>🛡️ 检测工程（Detection Engineering）</li>
<li>📊 威胁情报（Threat Intelligence）</li>
<li>🚨 事件范围确定（Incident Scoping）</li>
<li>🔄 自动化编排（Automation）</li>
<li>🤝 Agent 间协作（Cross-agent collaboration）</li>
</ul>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">
<strong>类比 AI Coding</strong><br/>
<span class="text-xs opacity-80">"detection and response involves a lot of distinct chunks of manual work" — 就像软件工程由代码生成、Review、测试等多个独立工作块组成，SOC 也是</span>
</div>

</div>

</div>

---
layout: two-cols
---

# Agentic SOC 全景架构

<div class="text-sm leading-relaxed mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核心思想**：不是"一个大模型解决一切"，而是 **多个专业化 Agent 各负责 SOC 工作流中的一个环节**。

每个 Agent 专注于自己擅长的任务，然后通过协作将它们串联成完整的检测与响应流水线。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3">

**类比**：就像 AI Coding 从代码生成发展到代码 Review、测试生成、需求分析——SOC 的 AI 化也在经历同样的分工深化。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

**关键**：Agent 之间需要相互协作——例如 Threat Intelligence Agent 发现新威胁后，自动触发 Threat Hunting Agent 去环境中搜索相关迹象。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agentic-soc-architecture.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Machine Scale + Machine Speed

<div class="mt-6 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 rounded leading-relaxed">

"we really need detection and response ultimately to be operating at both machine scale and machine speed. And that makes doing a lot more, but also drastically reducing the latency."

</div>

<div class="mt-2 text-sm opacity-60">
— Edward Wu
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Machine Scale

- 更多的检测规则
- 更多的威胁狩猎
- 更多的威胁情报
- 更多的告警调查

**量变引起质变**：当每个维度都乘以 10 倍，人工 SOC 模型彻底失效

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Machine Speed

- 大幅降低延迟
- 从"小时"压缩到"分钟/秒"
- 24/7 持续运行
- Agent 之间自动交接

**速度是新的检测能力**：很多威胁的窗口期只有几分钟——人工响应太慢就等于没有响应

</div>

</div>

---

# 告警的"左"与"右"

<div class="text-sm leading-relaxed mt-4">

Ed 将告警调查的完整生命周期分为左侧（预防端）和右侧（响应端），两端都需要 Agent：

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### ← 左侧：告警产生前

- **威胁狩猎 Agent**：主动搜索环境中可能存在的威胁
- **检测工程 Agent**：自动编写和优化检测规则
- **威胁情报 Agent**：持续收集和处理外部威胁信息

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### → 右侧：告警触发后

- **告警调查 Agent**：Tier 1 自动分类和初步分析
- **事件范围 Agent**：确定受影响范围——"还有谁也碰到了同一个可执行文件？还有谁和同一个 C2 服务器通信过？"
- **响应协调 Agent**：推荐和协调响应措施

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "what ultimately what we kind of have in mind is detection and response involves a lot of distinct chunks of manual work"

</div>

---

# AI Coding：SOC 的水晶球

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Ed 认为**软件工程在 AI 采纳上领先 SOC 约 2-3 年**。理解 AI Coding 的演进轨迹，就能预见 SOC 的未来。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Phase 1: 代码生成**
"Most of the AI coding tools start off by solving a single problem, which is how do you generate more code"

→ 对应 SOC 的 Alert Triage Agent

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Phase 2: 瓶颈转移**
"once you use an AI code generation tool for a while, you immediately discover, okay, now I can use AI to generate code, the bottleneck become code reviews"

→ 对应 SOC 的 Threat Hunting + Detection Engineering Agent

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Phase 3: 全面 Agentic**
"who's writing all the tests. Who is actually scoping out the ticket in the first place"

→ AI PM、AI UX designer → 对应完整的 7-Agent SOC

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "I think Claude just maybe today or yesterday announced their code review solution exactly to solve this problem"

</div>

---
layout: two-cols
---

# 两条平行演进线

<div class="text-sm leading-relaxed mt-2">

AI Coding 和 Agentic SOC 走的是同一条路：

<div class="mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>Phase 1:</strong> 单一任务自动化（代码生成 / 告警分类）
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>Phase 2:</strong> 瓶颈暴露 → 扩展 agent 范围（Code Review / Threat Hunting）
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>Phase 3:</strong> 多 Agent 协作全流程（AI PM + UX / 7-Agent SOC）
</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3 text-xs">

**关键洞察**：SOC 现在正从 Phase 1 向 Phase 2 过渡。当前大多数 SOC 的 AI 化还局限在告警分类——就像 2023 年的 AI Coding 只做代码补全。但未来 2-3 年 SOC 会经历和 AI Coding 完全相同的多 Agent 爆炸。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./parallel-progression.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 人的角色转型：写代码→写英语

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">

"now you're writing, you know, you're kind of writing software in English, but you're still writing software"

</div>

<div class="mt-2 text-sm opacity-60">
— Edward Wu，类比 AI Coding 中开发者的转型
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**工作强度反而增加**
"developers nowadays who are working in these kind of agentic software development life cycles, actually spend, their work is more intense and they actually spend more time kind of doing designs and architectural reviews and scoping and building alignment versus actually writing it"

**作者概括**: AI 自动化了"打字"部分，但设计、架构决策、需求对齐这些更高层次的智力活动反而需要更多投入。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**如果你不管 Agent，代码库会变成 50 种架构范式的大杂烩**
"if you leave AI coding tools to do whatever, then they will always pick the simplest path or the shortest path and keep introducing different architectural paradigms"

**对应 SOC**：如果你让 AI Agent 随意发挥而不做架构约束，你的 SOC 流程会变成一堆相互矛盾的自动化脚本。

</div>

</div>

---

# Vibe-Code 的诱惑：Token Budget + 自定义 Prompt

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**场景**：
很多 SOC 团队已有 token budget（比如 Claude 的 API 额度）。他们发现可以用 Claude Code + MCP + 自定义 prompt 来 vibe-code 一些自动化流程——而且确实能解决一些痛点。

Patrick 的比喻："**rock, pebble, sand 理论**——他们能在罐子里塞进不少石头。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

**Patrick 的担忧**：
"that approach is limiting though" —— 你确实可以快速拼出一个基础脚本，但如果要追求一个量级更好的效果，商业工具投入的开发时间是 DIY 无法比拟的。

</div>

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**Ed 看到的情况**：
"kind of vibe coding or DIY is, we definitely have seen a lot of that"

**但有两个根本问题：**

1. **经济规模**（economy of scale）：一个软件公司在其专业领域投入的研发资源远大于一个 SOC 团队能分配的
2. **持续维护**：构建一个 agent 不难，难的是持续测试它、评估它、在它出问题时发现并修复

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm mt-3">

> "the continuous maintenance and testing of that thing actually ends up being a whole lot more expensive than the resources that you need to vibe code it in the first place"

</div>

</div>

</div>

---
layout: two-cols
---

# 冰山：Vibe-Code 的真实成本

<div class="text-sm leading-relaxed mt-2">

**可见成本只是冰山一角**

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">

**持续测试与评估**
"most of us probably spend a lot more resources and effort in quality assurance, testing and validation and evaluations than actually building the prompts"

</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**维护 & 迭代**
每次改 prompt、每次环境变更都需要重新测试

</div>

<div class="mt-2 p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**关键人物风险**
"the cutting edge security engineer who vibe coded it decided to work somewhere else" → 工具变成没人维护的技术债

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hidden-costs.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Buy vs Build：方程式没有变

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Patrick 的核心论点**：
有了 AI Coding 工具，Buy vs Build 的基本经济学并没有改变。

"one person using a coding agent is not equivalent to a software development company that's very specialized, with all of their developers using coding agents and working towards a common goal"

**作者概括**：一个专业安全公司用 AI 工具投入数年的研发，和一个 SOC 工程师用周末 vibe-code 出来的产物——两者之间仍然存在数量级的差距。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Ed 的补充**：
"modern software development companies are under tremendous pressure to use AI coding agents as well to make sure we achieve the productivity and iteration speed that modern business requires"

也就是说，商业软件公司也在拼命用 AI 提升效率——你在用 AI 加速 DIY，商业公司也在用 AI 加速产品开发。**相对差距并没有缩小。**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mt-3">

> "somebody needs to actually continuously test it, unless you are never touching it"

**这可能是 Ed 最尖锐的观察**：如果你 build 了之后永远不改，那可以。但现实是你会持续迭代——每次迭代都需要重新测试和评估。这部分的人力投入，是大多数 DIY 团队严重低估的。

</div>

</div>

</div>

---

# Dropzone 的下一个客户画像

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**早期客户**（2 年前）：
"you're out there when this was radical thinking, going out there talking to companies saying, we built this agent that can do alert triage"

→ 先驱采用者，对 AI SOC 这个概念感到新奇

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

**未来客户**（现在/即将）：
已经内部 vibe-code 了 SOC 自动化，体验到了价值，但也吃到了维护的苦头——于是寻找商业解决方案。

"they've got a lot of value out of it when it's working, and it's also turned into a pain to maintain and monitor and update and keep relevant"

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**Boomerang 对话**：
"we definitely have a number of prospects and customers who were building this in house. They built up a lot of conviction... but they ran into ongoing maintenance starting to become a burden"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed mt-3">

**Sally 的困境（Patrick 的比喻）**：
Sally vibe-coded 了一个 AI SOC agent → 然后被 Anthropic 或 Palo Alto 挖走了 → 工具无人维护 → 公司只能找 Dropzone。

**作者概括**：在安全工程师 + AI/agentic 经验高度稀缺的市场上，"关键人物风险"不是小概率事件。

</div>

</div>

</div>

---

# 模型选择策略：不是每次都要 Premium

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Dropzone 的实际情况**：
"a typical autonomous end-to-end alerting investigations at Dropzone, we are making over a hundred distinct large language model invocations"

每次端到端告警调查涉及 **100+ 次 LLM 调用**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

> "the expensive models are very slow, so if you only use the expensive models end to end, the whole investigation might end up taking like 20 minutes, and that's just unnecessarily long"

</div>

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**只有 20% 需要 Premium Model**

Ed 的类比："initially when you build a plane, you build everything out of titanium or carbon fiber... and then over time you start to look at different pieces and be like, do we really need this trim piece to be in carbon fiber?"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mt-3">

**Premium model 用在关键决策点**：
- **Planning phase**：调查方向规划（方向错了整个调查白费）
- **Conclusion determination**：综合 20 条可能相互矛盾的发现，做出最终判断

其余 80% 的调用（JSON 解析、SIEM 查询、威胁情报匹配、基础关联分析）用 commodity model 就够了。

</div>

</div>

</div>

---
layout: two-cols
---

# 20/80 模型选择策略

<div class="text-sm leading-relaxed mt-2">

**为什么不用 Premium Model 做所有事？**

<div class="mt-3 space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>成本</strong>：Premium model "cost an arm and a leg"
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>延迟</strong>：全 premium = 单次调查长达 20 分钟
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>没必要</strong>：很多任务（JSON 解析、数据查询）不需要推理能力
</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**智能路由的核心**：
"when it comes to like, here is a five kilobyte JSON response from a particular SIEM or particular threat intelligence feed, you definitely do not need the state of the art models to make sense of them"

→ 把 premium model 用在 Planning 和 Conclusion 两个智力最密集的环节

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-selection-split.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 统一数据湖 vs 联邦搜索

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Patrick 的预测**：
未来的安全运营会收敛到一个模式：一个大存储池（big blob of storage）→ 各种 Agent 在上面爬行、分析、响应。检测、响应、威胁狩猎、事件处理全部整合。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

**联邦搜索（Federated Search）派**：
"you don't actually need to mirror a lot of data into the same data lake in order for the system to join CrowdStrike data with Okta data with AWS data"

Agent 可以直接通过 API 去各个工具查询数据，不需要集中存储。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**数据湖派的问题**：
"different tools might have different retention"

即便你把数据都拉到一个湖里，不同来源的数据保留策略不同，Correlation 仍然是个挑战。而且"things are probably going to be somewhat fragmented and flexible"——Ed 坦言数据架构的未来还没有定论。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mt-3">

**Ed 的判断（作者概括）**：
数据层怎么建还没有共识——有人会说"建个 S3 大湖 + SIEM"，有人会走到联邦搜索的极致。但**分析层/智能层的未来是清晰的：大量 Agent 协作、自动解析日志、从不同角度分析数据、Agent 之间彼此触发行动**。

</div>

</div>

</div>

---

# 24/7 自主新威胁响应

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Ed 正在实验的未来场景**：
"how do you have two different agents, such as an AI threat intelligence agent and an AI threat hunter agent, kind of working together so you can achieve twenty-four-seven autonomous emerging threat response"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

**完整闭环**：
安全研究者在 Twitter 上发布一个新威胁 → Threat Intelligence Agent 捕获 → 自动分析 → Threat Hunting Agent 在组织环境中搜索相关 IoC → 5 小时内完成一次完整的威胁狩猎

**作者概括**：这不是科幻——Ed 说 "we have been experimenting with this, which is pretty exciting"

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**为什么 Agent 协作是关键**

单个 Agent 做一件事已经可行（告警分类、威胁情报收集）。但**让人兴奋的是 Agent 之间的 loop**：

Agent A（TI）发现威胁 → 通知 Agent B（Hunting）→ Agent B 完成狩猎 → 结果更新到 Agent C（Detection Engineering）→ 自动生成新检测规则

"autonomously improve the overall security posture of the environment"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mt-3">

**从"被动响应"到"主动免疫"**：不是等告警来了再处理，而是外部威胁一出现，内部就开始自主搜索和防御。

</div>

</div>

</div>

---

# 人最后做什么？Field General + Special Forces

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Ed 的预测**：在 2-3 年内，安全工程师/分析师的角色会两级分化：

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 🎖️ Field General（战场指挥官）

> "most of the security engineers and analysts to either operate as like a director or senior manager, essentially like a field general kind of a role"

- 定义 Agent 的战略优先级——"Agent 不是无限的，你要决定它们聚焦什么"
- 为 Agent 创建成功的工作环境（明确任务边界，避免模糊需求让 Agent 失灵）
- 架构审查、技术选型、跨团队协调

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 🎯 Special Forces（特种部队）

- 处理最棘手的、Agent 搞不定的任务
- 例如："the CEO clicked on something apparently that he's not supposed to"
- 需要人际沟通（"building a relationship"）、跨部门协商、供应商评估

</div>

</div>

---

# Agent 做不了的事

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**建立关系**
"agents are not very good at building a relationship"

说服其他团队为应用增加 instrumentation、和网络团队协商部署 NDR sensor 的子网——这些需要人。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**技术选型**
"an AI agent is unlikely to end-to-end run the evaluation, assess the personality of the engineering teams of different vendors"

评估新产品、判断供应商团队的能力和性格——这需要人的直觉和判断。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**扩展可见性**
"Agents are not going to magically just allow you to see everything in the environment"

部署 sensor、扩展网络覆盖面的决策和协商仍然需要人。这在 Ed 看来是 Defender 的根本约束。

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**跨部门博弈**
"negotiating with the finance team and network team to figure out where are the additional subnets"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**CEO 级别的灭火**
"the CEO clicked on something apparently that he's not supposed to. Are we really going to trust an AI agent to really untangle that mess?"

</div>

</div>

---

# Patrick 的"高中 VHS 时刻"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Patrick 的回忆**：
高中时看了一盘 VHS 录像带，展示一个人对着电脑像聊天一样交互的未来场景。当时所有人觉得"这永远不会实现"。

而现在：
"the future vision that video I saw on VHS in high school, that's what's come true"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

**CISO 的一天（Patrick 的想象）**：
你早上来到办公室，对着 D&R 平台说："今天有什么我需要知道的？"

或者平台主动 page 你："这个机器我无法远程隔离——需要你物理拔网线。"

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**Ed 的回应：不会完全变成 Chatbot，但很接近**
"we do think it's going to get pretty close to that"

人类的职责是"被升级"（up-leveled）——不是变成 CISO（CISO 还要和董事会沟通、承担问责），而是**像一个高级经理或总监一样思考**：

- 定义策略
- 为 Agent 划定战场
- 处理 Agent 做不了的人类交互

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"the detection and response, or the enterprise immune system becomes the frontier of the defense"
<div class="text-xs opacity-60 mt-1 not-italic">— Edward Wu · D&R 在漏洞末日下的新角色</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"we really need detection and response ultimately to be operating at both machine scale and machine speed"
<div class="text-xs opacity-60 mt-1 not-italic">— Edward Wu · 定义 D&R 的未来范式</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"you're kind of writing software in English, but you're still writing software"
<div class="text-xs opacity-60 mt-1 not-italic">— Edward Wu · AI 时代人的角色不是消失，而是转型</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"the continuous maintenance and testing of that thing actually ends up being a whole lot more expensive than the resources that you need to vibe code it in the first place"
<div class="text-xs opacity-60 mt-1 not-italic">— Edward Wu · Vibe-Code 的真正成本在水下</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"one person using a coding agent is not equivalent to a software development company that's very specialized, with all of their developers using coding agents"
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick Gray · Buy vs Build 的方程式没有因为 AI 而改变</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"Agents are not going to magically just allow you to see everything in the environment"
<div class="text-xs opacity-60 mt-1 not-italic">— Edward Wu · 可见性不会因为有了 Agent 就自动扩展</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-6 text-lg opacity-70">

"it's going to be an army of agents doing the JSON parsing, log analytics, looking at data from different angles, and also these agents working together"

</div>

<div class="mt-4 text-sm opacity-50">
— Edward Wu, Dropzone Founder
</div>

<div class="mt-8 text-sm opacity-40">
完整访谈: <a href="https://risky.biz/SOAPBOX108/">risky.biz/SOAPBOX108</a>
</div>
