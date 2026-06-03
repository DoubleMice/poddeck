---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E238｜聊聊Harness时代AI-First的组织架构：从信任人到信任AI'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 聊聊 Harness 时代 AI-First 的组织架构
## 从信任人到信任 AI

<div class="mt-8 opacity-70 text-sm">

硅谷101 · E238 · 2026-05

</div>

<div class="mt-12 text-xs opacity-50">

Peter（CTO，前 Meta Llama 研究员）· 陈凯（CEO）· Clark（Cofounder, GTM）— Creo 三位创始人

</div>

---
layout: two-cols
---

# 为什么这期值得听

<div class="text-sm leading-relaxed pr-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>Harness Engineering 是什么？</strong><br/>
继 Prompt Engineering（2023）和 Context Engineering（2024）之后，2026 年硅谷最热的新概念——如何围绕大模型搭建一套能自我修复、自我提升的系统。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>25 人公司，99% 代码由 AI 生成</strong><br/>
Creo 用亲身实践证明了 AI-first 组织架构的可能性：传统 6 周的迭代周期被压缩到一天之内。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
<strong>从"信任人"到"信任AI"</strong><br/>
组织架构的核心转变不是引入 AI 工具，而是让 AI 成为生产力的主导——这要求整个公司重新设计流程和角色。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./harness-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 工程能力的三次进化

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 2023
## Prompt Engineering

<div class="mt-3 opacity-80">
怎么写好提示词，让模型给出更好的答案。优化的是<strong>单次交互</strong>的质量。
</div>

<div class="mt-4 text-xs opacity-50">
静态 · 任务级 · 人在 loop 里
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 2024
## Context Engineering

<div class="mt-3 opacity-80">
怎么给模型提供更完整的上下文，让它理解更复杂的任务。优化的是<strong>上下文窗口</strong>。
</div>

<div class="mt-4 text-xs opacity-50">
静态 · 对话级 · 检索增强
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 2026
## Harness Engineering

<div class="mt-3 opacity-80">
围绕大模型搭建一套能在真实世界中<strong>持续工作、自我修复、自我提升</strong>的系统。
</div>

<div class="mt-4 text-xs opacity-50">
动态 · 系统级 · AI 主导
</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
Peter: "Harness 不仅仅是对于 LLM 本身的 harness，还包括基建、tooling、security——整个系统不断 improved 的过程。"
</div>

---

# 什么是 Harness Engineering？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是"写好 Prompt"
Harness 的 scope 比 prompt engineering 和 context engineering <strong>大得多</strong>。它涉及 tooling 的使用、sandbox 架构设计、host service 之间的交互安全、启动时间和延迟——所有这些都是 harness 的一部分。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 是"榨出模型上限"
Harness 的工程能力决定了你怎么把一个基础模型的<strong>最佳使用上限榨出来</strong>。同样一个 agent，harness 做得好与不好，结果天差地别——一个是三天干掉三个人的 SEO 工作流，一个是跑了两天才发现全是垃圾。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 动态的，不是静态的
"我们认知中的 harness 就是一个动态的过程——系统怎么能够从一个静态的状态真的活起来，能够 self-improve，能够不停 adapt 新的 signal。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 在 Inference 阶段的 Scaling
Agent 工作时间更长、tooling 使用更多、context 更大——harness 做不好就容易产生 hallucination、context overflow、模型能力 degrade。需要经验和系统设计来兜底。

</div>

</div>

---

# AI-First 不是"用 AI 工具"——是重新设计组织

<div class="mt-6 text-lg leading-relaxed">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded mb-4">

**核心误区**：大多数公司所谓的"AI first"都是假的。

</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

**真相**：真正的 AI-first 战略不是<strong>在现有流程上使用 AI 工具</strong>，而是<strong>围绕 AI 的能力重新构建你的工作流程和组织形态</strong>。

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>❌ 假 AI-First</strong><br/>
每个工程师用 AI 写代码<br/>
每个 PM 用 AI 写 PRD<br/>
每个设计师用 AI 作图<br/>
→ alignment 成本反而变高
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>✅ 真 AI-First</strong><br/>
AI 主导开发节奏和决策<br/>
人负责定义方向和审核结果<br/>
系统自动对齐、自动修复<br/>
→ 效率提升 100 倍以上
</div>

</div>

</div>

---

# 信任的转移：组织架构的核心变革

<div class="mt-6">

<div class="text-lg leading-relaxed mb-6">
传统组织信任的是<strong>人</strong>——每个角色、每层汇报、每次对齐都建立在"人靠谱"的假设上。AI-first 组织要把信任对象从人转移到<strong>系统</strong>。
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">

### 信任人
<div class="mt-2 opacity-80">
团队之间需要互相沟通、达成共识、对齐之后才能推进。<strong>对齐成本极高</strong>。
</div>
<div class="mt-3 text-xs opacity-50">传统组织</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200 text-center">

### 建立 Guardrails
<div class="mt-2 opacity-80">
需要一套机制保障 AI 做的所有工作——决策、planning、执行——<strong>都能被人信任</strong>。
</div>
<div class="mt-3 text-xs opacity-50">过渡阶段 · Harness 的价值</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### 信任 AI
<div class="mt-2 opacity-80">
AI 主导告诉 marketing team 开发团队要发布什么功能。marketing 不再需要跟 engineer 反复沟通。<strong>对齐成本大幅降低</strong>。
</div>
<div class="mt-3 text-xs opacity-50">AI-First 组织</div>

</div>

</div>

</div>

---

# 一天迭代完传统六周的工作

<div class="grid grid-cols-5 gap-2 mt-6 text-center text-xs">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<div class="font-bold text-base">10:00 AM</div>
<div class="mt-2 opacity-70">写了一个新功能<br/><span class="text-xs">AI 辅助 coding</span></div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-3 rounded bg-green-50 border border-green-200">
<div class="font-bold text-base">12:00 PM</div>
<div class="mt-2 opacity-70">AB Test 上线<br/><span class="text-xs">数据反馈开始流入</span></div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<div class="font-bold text-base">3:00 PM</div>
<div class="mt-2 opacity-70">根据数据砍掉<br/>部分功能</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-3 rounded bg-purple-50 border border-purple-200">
<div class="font-bold text-base">5:00 PM</div>
<div class="mt-2 opacity-70">重写了更好的版本<br/><span class="text-xs">一天内完成完整迭代</span></div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>传统方式</strong><br/>
一个 feature 从设计到测试到上线：<strong>6 周</strong>。design、planning、testing 各占大头。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>AI-First 方式</strong><br/>
AI 辅助 coding 让实现只需 <strong>1-2 小时</strong>。必须把 design 和 testing 也纳入 harness 体系，否则传统流程会成为瓶颈。
</div>

</div>

<div class="mt-2 text-xs opacity-60 text-center">
Peter 的 Twitter 帖子获得 187 万流量——因为大家发现这不是科幻，是正在发生的现实。
</div>

---

# 开发速度远超市场速度

<div class="mt-6 grid grid-cols-2 gap-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 传统 SaaS 公司
销售团队超前产品 <strong>4-5 个月</strong>——用户看到的是几个月后才会发布的功能。product roadmap 是核心讨论议题。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI-First 的 Creo
技术团队<strong>反过来超前 marketing 团队 3-5 个月</strong>。marketing 在追赶开发团队。feature 多到卖不过来。

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

**Clark 的"菜篮子"比喻**：我们就好像有个菜篮子一样——如果今天市场需求是一个苹果，就从篮子里挑一个苹果去卖；如果需求是一个香蕉，就挑一个香蕉去卖。不再需要讨论 product roadmap 是什么，只需要讨论市场需求在哪里。

</div>

<div class="mt-4 text-xs opacity-60">
Clark: "最大的体会——feature 现在的数量已经远远超过我们能够去卖它的这个能力了。开发的速度远远超过市场这边的进度。"
</div>

---

# 自我修复：Bug 修复从一周变成一小时

<div class="mt-6">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 传统 Bug 修复
1. 人发现 bug → 人 triage → assign 给工程师
2. 工程师 investigate → 提出 solution
3. Code review → testing → deploy
4. **整个 cycle：约 1 周**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Agent-Driven 修复
1. 多个 agent 并行 identify bug（1-2 分钟）
2. Agent 自动 assign 给工程师（几秒）
3. 工程师用 agent investigate → 提出 solution
4. **整个 cycle：1-2 小时**

</div>

</div>

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

**Auto-Fixing 系统**：目前 **50% 以上的 issue** 通过 auto-fixing 完成。对于 risk 较小的文件，AI 自动提交 PR，工程师只需简单 approve 即可上线。涉及安全或 agent behavior 的文件才需要深度 review。

</div>

</div>

---
layout: two-cols
---

# Agent-Driven CI/CD 系统

<div class="text-sm leading-relaxed pr-4">

### 两层防线

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>第一层：Ship 前拦截</strong><br/>
AI-driven testing（Playwright 等做 fully end-to-end testing），保证 ship 的代码中没有明显的 break 产品的 bug。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>第二层：Ship 后快速修复</strong><br/>
根据 log 中的 error 和 incident signal 反馈给 AI，自动 triage → assign → investigate → fix。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>结果</strong>：Bug list 和 feature wishlist 都没有了——bug 及时修复，feature 多到用不完。以前总是在"先修 bug 还是先做 feature"之间争吵，现在这个问题消失了。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cicd-agent.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两种工程师：Architecture 与 Operator

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4 text-sm leading-relaxed">
<strong>Architecture（架构师）</strong>：决定系统的整体架构——sandbox 和 host 怎么交互、安全边界在哪、延迟怎么优化。AI 会给你一个 solution，但通常有安全或延迟隐患，需要架构师来判断和优化。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4 text-sm leading-relaxed">
<strong>Operator（操作者）</strong>：执行和运营。用 AI 快速实现 feature、分析数据、根据 feedback 做判断。scope 比传统工程师大得多——不只是写完代码，还要关心 ship 之后发生了什么。
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
以前搭建同样规模的 agent 系统需要 <strong>10-20 人</strong>，现在只需要 <strong>1 个 architecture</strong>，在 <strong>1 周之内</strong>就能完成。AI 写代码的能力远超大多数人——Peter 直言"2026 年我就没有写过一行代码"。
</div>

</div>

---

# AI 的 Planning 能力进化

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4 mb-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一年前（2025）
AI 做 planning：**50 分，不及格**。需要人手动改 plan、手动改架构。只能辅助，不能主导。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在（2026）
AI 做 planning：**90 分**。人可以 criticize plan 中的缺陷——安全性、延迟——AI 自动给出 revised plan。架构师一行 code 不写、一行 text 不改。

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<strong>Harness 的核心价值在这里体现</strong>：当架构师教给 AI 安全准则和架构原则之后，这些可以被固化成一个 <strong>skill</strong>。下次 AI 做 planning 时，只需要 reference 这个 skill。而且不只是架构师自己能 challenge AI——团队所有 engineer 都可以 reference 同样的 skill 来检查 AI 的 plan。

</div>

</div>

---

# 初级工程师 vs 资深工程师：谁更能适应 AI？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 初级工程师 ✅ 更快适应
- Tech debt 和思想束缚<strong>更少</strong>
- 愿意 extend scope：不只是写代码，还参与产品设计、数据分析、feature deploy 后的效果判断
- 能接受"代码写完只是开始"的工作方式

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 资深工程师 ⚠️ 转变更难
- 花 10-20 年积累的 specialty（怎么写最简洁的代码、怎么设计最好的架构）在 AI 时代<strong>价值在降低</strong>
- 很多资深工程师接受不了"我花十年学的东西变得不那么重要了"
- 转变 mindset 的<strong>对齐成本更高</strong>

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

<strong>但是</strong>——<strong>资深工程师的 value 仍然不可被取代</strong>。最理想的人选：资深 + 拥抱 AI mindset + 有产品 sense + 懂 marketing。<strong>以前需要 10-50 个这样的人，现在可能只需要 1-2 个。</strong>

</div>

---

# 产品经理这个角色正在被"组织化"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4">
传统公司里，产品经理是<strong>矛盾最集中的角色</strong>——同时要跟市场沟通、跟开发沟通。所有的对齐成本都汇聚在 PM 身上。
</div>

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">
<strong>Creo 的做法</strong>
<div class="mt-2 text-xs opacity-70">PM 角色被拆解到每一个工程师和工程管理者身上。不再有单独的产品经理岗位。</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<strong>结果</strong>
<div class="mt-2 text-xs opacity-70">对齐成本反而更低——因为有一套机制保证团队之间不需要 PM 也能互相信任和协作。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<strong>未来形态</strong>
<div class="mt-2 text-xs opacity-70">PM 不会被消灭，但会变成"组织化的角色"——由整个团队共同扮演，而非一个人。</div>
</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
Peter: "未来的产品需要有产品 sense，但关键是这个人必须具备 <strong>implementation 能力</strong>——能在一到两小时内把自己的 idea 直接带进产品。如果你需要把 idea 传递给别人，那交流成本就远大于实现成本。"
</div>

</div>

---

# 复合型人才的黄金时代

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">
<strong>核心趋势</strong>：复合型人才——或者比较 general 的人——在 AI 环境下可以 thrive 得更好。不管是工程师有产品 sense 和 marketing sense，还是产品经理有 implementation 能力，都会非常重要。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 未来最稀缺的角色
- <strong>懂 implementation 的 Designer</strong>（UI/UX designer 能把自己的设计直接实现到产品里）
- <strong>有产品 sense 的 Engineer</strong>（不只是写代码，还判断 feature 的商业价值）
- <strong>能写代码的产品人</strong>（有 idea 就能在一两小时内变成产品）

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 个人英雄主义 → 组织英雄主义
在传统软件时代，一个"灵魂人物"产品经理可能成就一个产品。在 AI 时代，<strong>一个组织</strong>可能做出好产品被市场接受。角色本身在被"组织化"，而非"个人化"。

</div>

</div>

</div>

---

# 你的内容，到底被谁消费？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded mb-4">
<strong>一个被忽视的现实</strong>：你生产的 marketing asset、文章、视频——未来的受众<strong>可能不是人</strong>，而是 AI agent。
</div>

<div class="grid grid-cols-2 gap-4 mb-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Clark 的亲身经历
找 SOC 2 合规服务商时，第一步是<strong>让 agent 先做 research</strong>，然后基于 agent 的结果再筛选。那些服务商的内容，第一层消费者已经不是人了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### SaaS 产品也在转型
团队现在使用 task management 工具时，更关心的是 <strong>agent 能不能更好地看这些 task、prioritize 这些 task</strong>——而不是人能不能用好 dashboard。MCP 和 API 变得比 UI 更重要。

</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>核心洞察</strong>：从人的审美来看可能不够好的内容，如果投放到市场后 agent 读取它、数据反馈回来可能更好。要根据"谁在消费你的工作结果"来调整 harness 系统——而不是固守"人觉得好不好看"的标准。
</div>

</div>

---
layout: two-cols
---

# 组织架构的全景变革

<div class="text-sm leading-relaxed pr-4">

### 传统组织
<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-3">
PM 做桥梁 → 工程师实现 → Designer 出图 → Marketing 等发布 → 层层对齐，层层等待
</div>

### AI-First 组织
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
AI 驱动开发节奏 → 工程师+产品+设计角色融合 → 数据链自动反馈 → Marketing 从"菜篮子"里挑选 feature
</div>

### 关键变化
- PM 角色被拆解到团队
- Engineer scope 扩大到产品 + 数据
- Designer 必须具备 implementation 能力
- Marketing 不再做 roadmap 对齐，而是做需求匹配

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./org-structure.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 人未来的核心价值

<div class="text-sm leading-relaxed pr-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>1. 定义需求的方向</strong><br/>
技术发展方向永远是人的需求和社会需求决定的。只要人这个物种还存在，定义需求方向的价值就不会消失。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>2. 审核最终结果</strong><br/>
人去 review 最后的结果——看是否真的符合我们的利益和要求。"人在需求的定义和最终结果的审核上的价值是没有办法被取代的。"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<strong>3. 系统架构能力</strong><br/>
从 implement feature 变成架构 AI 系统和维护 AI 系统。不管是 engineering 还是 marketing——怎么搭建一套能自主运行的 agent 系统。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>4. 判断价值本身</strong><br/>
"人未来的价值就是判断任何事情是否还有价值。"——定义什么是"好"、什么是"有价值"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./human-value.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不要把 AI 当智能——把它当系统

<div class="mt-6 text-sm leading-relaxed">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">
<strong>最核心的认知转变</strong>："我们要把 AI 当成一个<strong>系统</strong>来看待，不要把它当成一个<strong>智能</strong>来看待。"
</div>

<div class="grid grid-cols-2 gap-4 mb-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ❌ 当成智能
AI 出错了 → 想着怎么<strong>纠正这个智能</strong> → 每一次都从头来 → 问题反复出现，人疲惫不堪

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ✅ 当成系统
AI 出错了 → 想着怎么<strong>弥补这个系统</strong> → 给系统加 guardrail、加 feedback loop → 系统越来越强，下次不会再犯

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这个区别就像养孩子——与其每次纠正孩子的具体错误，不如给他一套规则和价值体系，让他在规则内<strong>变得越来越好</strong>。Harness 就是在给用户提供"培训师"——弥补 AI 出错之后该怎么办。
</div>

</div>

---

# 转型的节奏：从"AI 辅助"到"AI 主导"

<div class="mt-4">

<div class="grid grid-cols-4 gap-2 mt-4 text-center text-xs">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<div class="font-bold text-sm">2025 上半年</div>
<div class="mt-1 opacity-70">AI 辅助人做事<br/>人仍是主导<br/>"大家觉得这样够了"</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-200">
<div class="font-bold text-sm">2025 下半年</div>
<div class="mt-1 opacity-70">发现效率提升有限<br/>意识到问题：<br/>没有真正把生产力<br/>从人转到 AI</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<div class="font-bold text-sm">2026 年 1 月</div>
<div class="mt-1 opacity-70">用两周重构全部架构<br/>Peter 一行 code 没写<br/>只 criticize AI 的 plan<br/>AI 给出 revised version</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-3 rounded bg-green-50 border border-green-200">
<div class="font-bold text-sm">现在</div>
<div class="mt-1 opacity-70">10 人以下 engineer<br/>团队<br/>99% 代码 AI 生成<br/>一天迭代一整个 cycle</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>转型的瓶颈不是技术</strong>——是人的 mindset。"很多人愿意拥抱 AI 只是愿意用 AI 工具给自己提升效率。但不愿意构建一个系统让未来工作完全由 AI 驱动，自己在里面扮演的角色都发生变化。"
</div>

</div>

---
layout: two-cols
---

# 中小企业是 AI-First 转型的第一批

<div class="text-sm leading-relaxed pr-4">

### 为什么不是大企业先转型？
<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-3">
大企业有太多<strong>合规问题、人的因素、legacy 数据库和旧系统</strong>。规模越大，转型阻力越大。
</div>

### SMB 的优势
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
30 人以下的团队，没有太多 legacy 包袱——是<strong>第一批最容易做转型的公司</strong>。Creo 自己就是最好的案例。
</div>

### 传统公司也能转
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
核心难点不在行业属性——科技公司还是传统公司都可以。关键在于<strong>创始人是否真的相信 AI</strong>，以及是否理解转型意味着什么。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./smb-advantage.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 市场上的非共识

<div class="mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">
<strong>Creo 的观点</strong>：不是市场能不能接受 AI-first 的工作方式——是<strong>市场根本不知道这种工作方式的存在</strong>，或者不知道怎么高效使用 agent。
</div>

<div class="grid grid-cols-2 gap-4 mb-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 市场的普遍认知
Harness 是一个<strong>静态过程</strong>——怎么 develop 一套系统去把 LLM 的优势更大发挥出来。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Creo 的实践认知
Harness 是一个<strong>动态过程</strong>——系统怎么从静态状态"活起来"，能够 self-improve，能够不停 adapt 新的 signal（market signal、产品 signal、用户 signal）。

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>超前的实践</strong>：Creo 内部 agent 拥有所有数据读写权限——但这也意味着如果 agent 读取错误数据或自己"乱搞"，最后决策会受到很大影响。他们自己用起来很爽，但认为市场还没准备好接受这种开放程度。需要更好的权限控制和安全技术。
</div>

</div>

---

# 关于 Agent 经济的几个预测

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-4 mb-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🔮 购买决策 agent 化
以后买东西可能是 <strong>agent 去买</strong>，订报纸是 agent 去订，订牛奶是 agent 去订。广告需要重新思考——是发给 agent 看还是发给人看？

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🔮 多层 agent 消费链
第一步 agent 筛选 → 第二步 agent 深入评估 → 第三步 agent 做决策。面向人的内容可能只需要在<strong>最后一层</strong>。前面几层的内容消费方是 agent。

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🔮 SaaS 产品被迫转型
像 Asana、Linear 这样的 task management 产品——以前人用 dashboard 管理，现在团队更关心 agent 能不能通过 <strong>MCP 和 API</strong> 来操作这些 task。

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Clark: "我自己现在看很多文章、看很多视频也是让 agent 去看。你要搞清楚你的内容到底是被谁消费。针对这个价值判断，再去思考是提升系统还是回到人参与创作的老路。"
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"真正的 AI-first 不是<strong>在现有流程上使用 AI 工具</strong>，而是<strong>围绕 AI 的能力重新构建工作流程和组织形态</strong>。"
<div class="text-xs opacity-60 mt-1">— 陈凯（CEO），论 AI-first 的本质</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"我们要把 AI 当成一个<strong>系统</strong>来看待，不要把它当成一个<strong>智能</strong>来看待。AI 出错了，不要想着纠正智能，要想着弥补系统。"
<div class="text-xs opacity-60 mt-1">— 陈凯，论 harness 的核心理念</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"百分之五十以上的 issue 是通过 auto-fixing 的形式进行的，人在里面的参与可能只是简单的 approve。"
<div class="text-xs opacity-60 mt-1">— Peter（CTO），论自我修复系统</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"feature 现在的数量已经远远超过我们能够去卖它的这个能力了。开发速度远远超过市场进度。"
<div class="text-xs opacity-60 mt-1">— Clark（Cofounder, GTM），论供需反转</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句（续）：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"以前搭建同样规模的 agent 系统需要 <strong>10-20 个人</strong>，现在只需要 <strong>1 个 architecture</strong>，在 <strong>一周之内</strong>就能完成。"
<div class="text-xs opacity-60 mt-1">— Peter（CTO），论 AI 时代的生产力</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"初级的工程师是比资深的工程师更能适应 AI 环境的。但资深工程师的 value <strong>仍然不可被取代</strong>。"
<div class="text-xs opacity-60 mt-1">— Peter（CTO），论人才价值的重塑</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"人未来的价值就是<strong>判断任何事情是否还有价值</strong>。需求的定义和最终结果的审核——人的这两个价值没办法被取代。"
<div class="text-xs opacity-60 mt-1">— Clark & 陈凯，论人不可替代的价值</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"复合型人才——有产品 sense 的工程师、懂 implementation 的设计师——在 AI 环境下可以 <strong>thrive 得更好</strong>。"
<div class="text-xs opacity-60 mt-1">— Peter（CTO），论 AI 时代的理想人才画像</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="mt-8 text-lg opacity-70">

从信任人到信任 AI——这不只是技术选型，这是组织哲学的转变。

</div>

<div class="mt-8 text-sm opacity-50">

硅谷101 · E238 · 2026-05

</div>
