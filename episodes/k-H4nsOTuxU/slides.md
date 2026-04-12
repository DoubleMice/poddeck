---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Anthropic 增长负责人："Claude 正在自己驱动增长"'
info: |
  Lenny's Podcast — Amol Avasari (Head of Growth, Anthropic)
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Anthropic 增长负责人

## "Claude 正在自己驱动增长"

<div class="mt-4 text-lg opacity-70">
Amol Avasari · Head of Growth, Anthropic
</div>

<div class="mt-2 text-sm opacity-50">
Lenny's Podcast · 2026
</div>

<div class="mt-8 text-sm opacity-40">
14 个月内从 $1B → $19B ARR · 史上最快增长的公司的增长负责人首次深度分享
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 史诗级增长数字
14 个月内从 $1B 到 $19B ARR，10x 年复合增长——线性图表在 Anthropic 内部已经"不酷了"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 用 Claude 自动化增长
内部项目 CASH（Claude Accelerates Sustainable Hypergrowth）正在让 AI 自主跑增长实验，按下按钮就能出结果

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### PM 角色的未来
工程师获得 2-3x 杠杆，PM 和设计被"挤压"——但 PM 不会消失，反而可能需要更多

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 脑损伤后的重生
Amol 曾因格斗运动遭受严重脑损伤，9 个月无法工作——却因此成为更好的产品人

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 指数思维 vs 线性思维
为什么 Anthropic 的增长团队宁可下大注也不做微优化——以及这对所有 AI 公司意味着什么

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 文化作为护城河
Notebook channels、Real Madrid 级人才密度、和 Dario 公开辩论——这才是 Anthropic 的 "secret source"

</div>

</div>

---
layout: two-cols
---

# 史无前例的增长曲线

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**2023**: $0 → ~$100M（从零起步）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**2024**: $100M → $1B（10x）

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**2025**: $1B → ~$10B（10x）

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**2026 Feb**: $19B ARR（且还在加速）

</div>

</div>

<div class="mt-4 p-3 text-xs italic border-l-4 border-purple-500 bg-purple-50">

"the 19 billion number you quoted is from the end of Feb so that is also out of date"
<div class="not-italic opacity-60 mt-1">— Amol 提醒 Lenny 数字已经过时了</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs italic">

"linear charts are just not cool. Everything is log linear."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./revenue-trajectory.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 冷邮件拿到 Anthropic Offer

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 故事

Amol 是 Claude 的深度用户。他觉得 Anthropic 产品很好但明显缺少增长团队，于是给 CPO Mike Krieger 发了一封冷邮件。当时 Anthropic **并没有在招增长岗位**，但恰好正在考虑组建增长团队。

<div class="mt-3 p-3 bg-white rounded italic text-sm">
"Hey, love what you guys do. Love the product. I think you guys badly need a growth team. Want to chat?"
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 冷邮件方法论

- **高打开率的标题**：测试过多次的固定模板（具体 copy 保密）
- **找到个人邮箱**：避开 LinkedIn / 工作邮箱等高噪声渠道
- **极简正文**：who I am + why I'd be a good fit + let's chat
- **持续跟进**：除非对方说"Please stop"，否则一直跟

<div class="mt-3 p-3 bg-white rounded text-xs italic">
Mike Krieger 回复说 Amol 是他唯一通过 cold email 招进来的 PM
</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
Lenny 点评：一个优秀的增长人能把 cold email 写得让 CPO 回复——这本身就是一次面试
</div>

---

# "Success Disasters"：增长太快的烦恼

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"roughly 70% of what I spend my time on is what we internally refer to as success disasters and that is where like things have gone so well that other things are breaking now"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 70% — 救火

增长太快导致的连锁反应：
- 获客管道持续被打爆
- 激活流程频繁需要重构
- 定价包装追不上产品迭代
- 所有 chart 都是绿色向上，但团队情绪依然紧绷

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 30% — 主动出击

更传统的增长工作：
- 在多个产品间分配有限资源
- 长期定价与包装策略
- 新产品（如 Co-work）的采用漏斗优化
- Chrome 扩展等创新型增长项目

</div>

</div>

<div class="text-xs opacity-60 mt-4">
Amol 类比了 Facebook、Uber、DoorDash 早期——经历过爆发式增长的人都能理解这种感受。但他也说：要学会停下来意识到"我们很幸运有这些问题"
</div>

---
layout: two-cols
---

# 增长团队架构：~40 人

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**横向团队 (Horizontals)**：Growth Platform + Monetization，跨所有产品看全局

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**纵向 Pods (Audience)**：Claude Code Growth / B2B Growth / Knowledge Worker / API Growth

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**团队构成**：Engineers + Designers + PMs + Data，跨职能结构

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs">

**关键原则**：每个 audience pod 与对应产品团队紧密合作——Claude Code growth 和 Kat、Boris 直接对接。在这么多产品线下保持 focus 是核心挑战。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./growth-org.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 激活的挑战：Capability Overhang

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

**作者概括**：Amol 认为 AI 行业面临的最大问题之一是 "capability overhang"——模型能力增长太快，产品侧来不及把这些能力传递给用户。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 问题的核心

- 新模型发布后，连内部人员都需要"carve out time"重新评估它能做什么
- 普通用户的本能仍然是问 "what's the weather in SF?"
- 你跑完 A/B 测试、上线新流程，下一个模型又来了——之前的 learnings 可能全部失效

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 应对方法

- **添加有价值的 friction**：在注册流程中询问用户是谁、兴趣是什么，推荐最合适的产品和功能
- **不怕流程变长**：数据表明"好摩擦"反而提高转化
- 在 Mercury 和 Masterclass 都验证过这个模式

</div>

</div>

---

# "好摩擦" vs "坏摩擦"

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"I've just seen time and time again at every job I've been in in growth that adding friction and adding the right steps leads to higher conversion and higher funnel completion"

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Mercury

花了一整个季度只做 onboarding 质量改进，不追指标——结果成了 Amol 作为 growth PM "the single most impactful quarter"

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Masterclass

购买流程中插入 quiz 问用户兴趣——看起来多余，但充分测试后发现是 "significant revenue driver"

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Anthropic

注册流程中询问用户身份和兴趣，推荐不同产品。很多人说摩擦太多——但数据证明它 work

</div>

</div>

<div class="mt-4 text-sm p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**核心原则**：砍掉不增加价值的摩擦。但如果摩擦能帮用户理解"这个产品是为我准备的"，大胆加。这个信号还能反哺 lifecycle 营销和 lookalike 定向。

</div>

---

# 导入 ChatGPT 记忆：解决冷启动

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Lenny 评价这是 Anthropic 近期最聪明的增长动作之一——让用户一键从 ChatGPT 导入记忆数据。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 为什么这很重要

- AI 产品的激活挑战比传统产品更大——模型是非确定性的，不保证每次都 magical
- 新用户需要 Claude 理解自己是谁才能获得最佳体验
- 导入记忆解决了冷启动问题——让 Claude 从第一天就"认识你"

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 更大的图景

这其实是激活策略的冰山一角。Amol 团队一直在思考：

- 如何让注册后的人更快到达 aha moment？
- 如何把人引导到最适合他们的产品？
- 如何在日益增长的产品矩阵中减少用户的选择焦虑？

</div>

</div>

---
layout: two-cols
---

# CASH：用 Claude 自动化增长

<div class="mt-2 text-sm">

**CASH = Claude Accelerates Sustainable Hypergrowth**

Growth Platform 团队的 Alexei（在 Reforge 教 growth engineering）主导。

</div>

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**当前能力**：主要做 copy 变更和小型 UI 调整

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**胜率评估**：相当于 junior PM（2-3 年经验）的 win rate，还没到 senior PM 水平

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**转折点**：Opus 4.5 之前根本不行，Opus 4.6 之后开始 "headed in the right direction"

</div>

</div>

<div class="mt-3 p-2 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">

"it ultimately prints money"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cash-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# CASH 的四步循环 + 人类不可替代的第五步

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**1. Identify Opportunities**：Claude 基于历史趋势发现增长机会

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**2. Build Feature**：构建实际的功能变更

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**3. Test & Quality Check**：确保符合质量和品牌标准

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**4. Analyze & Learn**：分析数据、提取 learnings

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### 第五步：跨部门协调

Head of Design Joel 说：

<div class="mt-2 italic text-sm">
"we will have AGI and it will still be impossible to get six people in a room to get to a line"
</div>

<div class="text-xs opacity-60 mt-2">这是 AI 目前无法替代的——也是 PM 角色短期内不会消失的核心原因</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**品牌护栏**：目前仍有 human-in-the-loop 审核。未来会用 skill 写入 brand guidelines

</div>

</div>

</div>

---
layout: two-cols
---

# 指数思维：为什么要下大注

<div class="mt-4 space-y-3 text-sm">

传统公司的产品价值两年后可能提升 30-50%。

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Anthropic 的情况**：两年后的产品价值可能是今天的 **100-1000x**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**传统增长团队**：60-70% 时间做小中优化，20-30% 做大赌注

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Anthropic 翻转比例**：50/50 甚至 70/30 倾向大赌注

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs italic">

"linear charts are just not cool. Everything is log linear."
<div class="not-italic mt-1 opacity-60">—— Anthropic 内部的日常思维方式</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./exponential-value.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 新市场 > 旧市场：Agentic Coding 的启示

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**作者概括**：Amol 用 agentic coding 举例说明指数增长如何不断解锁全新的、远大于前一个的市场。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 之前

AI coding 市场（代码补全、问答）已经很大

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 现在

Agentic coding 一年前还不存在，但其价值 "is bigger than the previous market of AI coding use"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**对其他 AI 公司的建议**：如果你的产品核心价值由 AI 驱动（像 Lovable、Cursor 等），就应该倾向大赌注。如果 AI 只是侧边功能，则未必适用。

</div>

<div class="mt-3 text-xs opacity-60">

Chrome 扩展就是例子——增长团队里一个有信念的工程师主导开发，现在成了支撑 Co-work 和 Claude Code 多个用例的基础设施。"I wouldn't have done at another company."

</div>

---
layout: two-cols
---

# PM 被"挤压"了

<div class="mt-4 text-sm">

Claude Code 让 5 个工程师的产出等效于 15-20 个——但 PM 和 Designer 的杠杆提升没那么大。

</div>

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**结果**：PM 和设计感到 "absolutely squeezed"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**解法一**：确实需要招更多 PM——Anthropic 正在大量招聘 growth PM

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**解法二**：让工程师做 "mini PM"——项目 ≤ 2 周工程量时，工程师全权负责

</div>

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

产品思维强的工程师比以往任何时候都更有价值——因为 PM 被挤压时，他们能直接补位

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pm-squeeze.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2 周规则 & PM 到底该干什么

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 2 周分界线

| 项目时长 | 谁来 PM |
|---|---|
| ≤ 2 周 | 工程师主导（含 security、legal、cross-functional 沟通） |
| > 2 周 | PM 主导，工程师执行 |

<div class="text-xs opacity-60 mt-2">
不是死板规则——1 周但极度有争议的项目，PM 还是该介入
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### PM 时间的最高杠杆

在有 20 个工程师的世界里，PM 的最佳时间用途不是"做第 21 个功能"——而是：

- 提升整个团队 5% 的方向判断（why & what）
- 确保工程师 mini PM 的质量
- 做用户洞察、战略校准

<div class="mt-2 italic text-sm">
不过 PM 仍然应该自己 prototype——目的是 "shipping to learn" 而非交付
</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**PRD 几乎已死**：Amol 说他们 60-80% 的项目没有 PRD。小事在 Slack 上几条消息搞定，大事做个 30 分钟 cross-functional kickoff。要写文档就用 Co-work 5 分钟生成。

</div>

---
layout: two-cols
---

# AI 自动化：日常工作流

<div class="mt-2 text-sm">

Amol 和团队已经把大量日常工作交给 Claude / Co-work：

</div>

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**每日数据监控**：Co-work 每天早上自动查看 20-25 个 chart，用 Chrome 扩展和 MCP 拉取数据，生成"你应该关注什么"的摘要

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**邮件分类**：Claude 做 inbox 的第一轮清理

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**报销 & 费用**：Claude 自动去 BenPass 报销、去 Brex 报费用

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**会议室预订**：直接让 Co-work 来订

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-automations.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 用 AI 发现"错位" & 做管理者教练

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 错位检测

通过 Co-work + Slack MCP，设置每周自动任务：

- 告诉 Co-work 你在做哪些项目、关注什么
- 让它扫描 Slack，找出潜在的错位或重叠
- 企业团队的 Scott 用这个方法发现了重大错位，避免了团队空转

<div class="mt-3 italic text-sm p-2 bg-white rounded">
"go and find me areas of potential misalignment right now and it does a really really good job"
</div>

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### 管理者自我教练

Amol 每周让 Claude 做两件事：

1. **下属反馈**：查看每个 direct report 本周的工作、team goals、讨论记录，给出建议反馈

2. **模拟上司视角**：告诉 Claude Ami Vora 的公开文章和内部讨论，然后问"基于她会怎么看，我这周做得怎么样？"

<div class="mt-3 text-xs opacity-60">
质量"hit or miss"——有时你会想"why would you bring that up"，但偶尔会有关键发现
</div>

</div>

</div>

---

# "Strategy Bot" 就要来了

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**作者概括**：Lenny 和 Amol 讨论了一个即将到来的未来——每个团队都有一个 "strategy bot"，持续监控指标、市场、路线图，主动提出该做什么。

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### 今天能做
数据监控<br>错位检测<br>inbox 清理
<div class="text-xs opacity-60 mt-2">已在 Anthropic 内部日常使用</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200 text-center">

### 年内预期
自动生成实验<br>品牌合规审核<br>跨部门协调辅助
<div class="text-xs opacity-60 mt-2">CASH 正在这个方向推进</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200 text-center">

### 更远的未来
完整的战略建议<br>自主实验循环<br>agent 对 agent 协调
<div class="text-xs opacity-60 mt-2">"I think we'll get there later this year"</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**关键洞察**：6 个月前这些还不可能。AI 正在从"执行指令"扩展到"告诉你该做什么"——growth 是最先感受到这个变化的领域，因为它天然适合 data-driven 的短循环实验。

</div>

---
layout: two-cols
---

# Anthropic 的战略 DNA：Focus

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**起源**：联合创始人 Ben Mann 2021 年写的一份内部文档——在所有人都不知道 AI 市场在哪里的时候——说清楚了为什么应该聚焦 coding

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**双重理由**：不只是 TAM 大——coding 能力加速研究 → 研究加速模型 → 模型加速 coding ➜ 飞轮

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**约束的力量**：Anthropic 曾是最小、资金最少的玩家——没有 Meta/Google 的分发、没有 OpenAI 的先发——约束反而逼出了极致聚焦

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs italic">

"it's a complete miracle that we've gotten to the stage that we have"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./focus-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 安全不是口号：PBC + 留钱在桌上

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 公司结构层面

Anthropic 不是标准的 Delaware C Corp——而是 **Public Benefit Corporation (PBC)**，法律上允许不以"最大化股东价值"为最高目标，可以优先考虑公共利益。

<div class="mt-3 text-sm">
Anthropic 甚至在有自己的聊天机器人时选择了不发布——不想引发 AI 军备竞赛。后来 ChatGPT 先发，Anthropic 自然走向了 B2B 和 coding。
</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Growth 层面的原则

<div class="mt-2 p-3 bg-white rounded italic text-sm">
"we are very comfortable forgoing metric impact in order to prioritize safety in order to protect our brand in order to hold a high quality bar"
</div>

Amol 的两类测试框架：
1. **红线**：争议太大就不跑，结果无所谓
2. **灰区**：不喜欢但不越线——可以试，但 cringe 很高就要求回报也高

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**长期视角**：最好的产品都这样运营——短期留钱在桌上 = 长期建立信任 = 更大的增长。安全在未来会成为显著竞争优势。

</div>

---

# "Race to the Top"：为什么要留在赛场

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

### 指数视角

如果你用指数思维看，很多变化会比线性思维预期的来得更快——这是 Anthropic 对风险保持警觉的原因

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200 text-center">

### 内部比外部更认真

对外说的风险其实是 "a softer version"——内部对这些风险的关注更深

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### 在场才有影响力

如果退出赛场，就没人听你的。只有作为领先者，才能推动行业做正确的事

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

"if you're not in the game and you're shouting from the sidelines, no one cares. It's just the reality of how the world works."

</div>

---

# 文化 = "Secret Source"

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"I really think it's our secret source. I think it's the thing that is the most defensible, the thing that no one else is going to be able to replicate."

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-2">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**使命驱动**：入职后很快发现 "they are maybe even more serious about this internally"

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**零躺平**："I have not met a single person who's checked out."

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**公开辩论**：有人在全员大会后去 Dario 的 notebook channel 公开表达异议——被鼓励

</div>

</div>

<div class="space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**人才密度**：Mike Krieger（Instagram）、Ami Vora、John Eagan（growth eng OG）、Alexei（Reforge）……

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">

"I feel like I'm playing for Real Madrid at times."

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**最佳插曲**：在 onsite 遇到一个独自吃爆米花的人——原来是前美国驻澳大利亚大使

</div>

</div>

</div>

---

# Notebook Channels：规模化领导力

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**作者概括**：Anthropic 内部每个人都有自己的 Slack "notebook channel"——类似私人 Twitter feed，用来分享想法、优先事项、观点。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 为什么有效

- **透明度**：可以加入研究团队任何人的 notebook，了解他们在想什么
- **规模化价值观**：新工程师看到领导的 notebook post（比如"leaving money on the table"的重要性），立刻校准认知
- **减少文化漂移**：高速招人时保持一致性

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### Agent 时代的新意义

<div class="italic text-sm mt-2">
"there are certain documents in onboarding where the HR team has written: before editing anything on this document please check with this person because this is a document that Claude references"
</div>

<div class="text-sm mt-3">
这些 notebook channels 和文档正在成为 agent 的 context source——Anthropic 已经在按"agent 会读这个"的标准来维护文档。
</div>

</div>

</div>

---

# 创业失败 → 脑损伤 → Anthropic

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

在谈 Anthropic 之前，Amol 的人生经历了两次重大低谷。

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 创业失败

- 花了 3 年做一家 mental health 公司——量化心理健康来早期预测焦虑和抑郁
- 融了几百万，最多时有 7-10 名员工
- 最终关闭，需要打电话告诉投资人钱没了
- 花了好几年才真正走出来

<div class="text-xs mt-2 italic">
给创始人的建议：不管好坏，坚持发月度 investor update——避免 surprise
</div>

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### 脑损伤

- 2022 年初，练泰拳时被一脚踢中头部（普通 sparring）
- 9 个月无法工作
- 前 2-3 个月：除了洗澡上厕所什么都做不了、听音乐 20 秒就想吐、完全看不了屏幕
- 半年后才重新能正常走路
- 一度不确定是否还能再工作

</div>

</div>

---

# "Freedom Through Constraints"

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-lg">

"the freedom through constraints — when you have a bunch of constraints applied on you whether that's in personal life or at work I think that can just it can bring a lot of freedom because it just frees up all this excess choice"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 在商业中

Anthropic 作为最小、资金最少的玩家，约束反而带来了极致聚焦——没有选择的奢侈 = 更清晰的路径

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 在个人生活中

脑损伤后被迫不喝酒、不喝咖啡、规律作息、每天冥想。即使在最忙的模型发布日，他也在午餐前后各休息一次。这些"约束"反而让他更高效。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

2023 年发了 Lenny's Newsletter 客座文章后一个月，又被再次伤到头——从飞机上拿行李时被包砸到。因为脑损伤未完全康复时复发风险极高。至今仍未 100% 康复。

</div>

---

# 冥想 & 保持清醒

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

一位冥想老师说过：
"true freedom in life is learning how to be content when you don't get what you want"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Amol 的实践

- 每天冥想，即使最忙的日子也坚持休息
- 每年至少一次冥想闭关（他和 Lenny 都去过 Spirit Rock）
- 不喝酒、不喝咖啡——不是选择，是脑损伤后的必须
- 关注 awareness 和 reality 之间的空间——那是你有选择的地方

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 为什么这对高强度工作至关重要

<div class="text-sm">

在 Anthropic 这样强度的环境里，不失控的关键是 "just keep your head. Just don't lose your head in the crazy times."

冥想给了他在刺激和反应之间插入选择的能力——避免了用不健康的方式来 cope。

</div>

</div>

</div>

---

# 职业建议：找到你的"尖刺"

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 1. 用工具、跟工具

每次新模型发布都重新测试——上次不行的可能这次行了。不回去试就永远不知道。

<div class="text-sm mt-2">
不只是提高生产力——更是在培养对 AI 产品的产品直觉
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 2. 找到你的跨界优势

与其弥补弱点，不如把你的 spike 推到极致。

**Amol 的组合**：创始人 + 投行财务 + 差点做 AE 的销售本能

**Nick Lynn 的例子**：投行 + PE 背景，做 Claude for Sheets/Excel 如鱼得水

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 3. 适应力 > 旧 Playbook

<div class="italic text-sm">
"you come into Anthropic, you need to understand that probably 50 60 70% of how you operated in the past just throw it out the door"
</div>

<div class="text-sm mt-2">
死守老方法只会制造摩擦。
</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

Mark Andreessen 的 "sideways E"——不只是 T 型人才的一个深度，而是多个深度专长的组合。

</div>

---

# 闪电轮：推荐与人生信条

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**推荐书单**
1. *Joy of Living* — Yongey Mingyur Rinpoche（佛教僧侣谈生活体验）
2. *Awareness* — Anthony de Mello（换个角度看世界）
3. *Thinking in Bets* — Annie Duke（给 PM 的概率思维）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**最近看的** — *Marty Supreme*（"insane movie, ridiculous, but I loved it"）

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**最爱产品** — 在日本酒店发现的一个枕头（Maruhachi Pro），里面装满小珠子。他从 Amazon Japan 买了带回美国。

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 人生信条 #1

<div class="text-2xl font-bold text-orange-600 my-2">"She'll be right"</div>

澳洲俚语——面对困难时轻描淡写地说"没事的"

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### 人生信条 #2

<div class="text-2xl font-bold text-red-600 my-2">"Just go for it"</div>

Discord CMO 的建议——别想太多，有些事就是要冲

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"This is the hardest job I've had in my life"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈在 Anthropic 做增长</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"linear charts are just not cool. Everything is log linear"
<div class="text-xs opacity-60 mt-1 not-italic">— Anthropic 内部的指数思维</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"we will have AGI and it will still be impossible to get six people in a room to get to a line"
<div class="text-xs opacity-60 mt-1 not-italic">— Head of Design Joel 谈跨部门协调</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"I feel like I'm playing for Real Madrid at times"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 Anthropic 的人才密度</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"the freedom through constraints — when you have a bunch of constraints applied on you... it can bring a lot of freedom"
<div class="text-xs opacity-60 mt-1 not-italic">— 从脑损伤中学到的人生哲学</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"if you're not in the game and you're shouting from the sidelines, no one cares"
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 Anthropic 要留在 AI 赛场</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-400 rounded italic text-xs">
"50 60 70% of how you operated in the past just throw it out the door"
<div class="text-xs opacity-60 mt-1 not-italic">— 加入 Anthropic 的第一课</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-400 rounded italic text-xs">
"it ultimately prints money"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 CASH 自动化增长实验</div>
</div>

</div>

---
layout: end
---

# "She'll be right. Just go for it."

<div class="mt-4 text-sm opacity-70">
Amol Avasari · Head of Growth, Anthropic
</div>

<div class="mt-6 text-xs opacity-50">
从创业失败到脑损伤到带领史上最快增长公司——有些路只有走过才知道
</div>
