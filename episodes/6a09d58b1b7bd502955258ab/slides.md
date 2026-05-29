---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '141. Freda的投资札记第2集：Tokenmaxxing、把电机塞进蒸汽机、接力赛变篮球赛、孤独、人的连接'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 141. Freda的投资札记第2集

<div class="opacity-70 mt-4 text-lg">
Tokenmaxxing · 组织重构 · 市场巨变 · 人与人的连接
</div>

<div class="mt-8 text-sm opacity-50">
Freda Duan · Ultimate Capital 合伙人 · 2026年5月
</div>

<div class="mt-6 text-xs opacity-40">
小君的商业访谈录 · 语言及世界工作室
</div>

---
layout: default
---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Tokenmaxxing 的本质**
把 Token 理解为 AI 时代的"千瓦时"——但 Token 和 Token 不是一回事，行业正在从浪费走向理性。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Anthropic 为什么甩开对手**
Coding agent 成熟后触发了递归自我改进——更好的 AI 训练更好的 AI，领先不再是轮流坐庄。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**"把电机塞进蒸汽机"**
为什么新技术出现了四十年，生产力才提升？AI 时代的组织架构必须从第一性原理重新设计。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**软件公司的生死局**
UI 越精美、数据结构越规整的软件死得越快。Agent 需要的是一整套全新的基础设施。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Mag 7 的现金流悬崖**
到 2027 年，几大云厂商的自由现金流将全部转负——超过一万亿美元的资本开支，市场会怎么反应？

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**焦虑、孤独与人的连接**
当 AI 能回答 95% 的信息型问题，人与人之间还剩下什么？深夜装不上 OpenClaw 的痛苦，大家都有。

</div>

</div>

---
layout: two-cols
---

# Token：AI 时代的"千瓦时"

<div class="text-sm leading-relaxed">

**几个新计量单位正在重塑行业分析：**

- **Dollar per FLOP** — 算力效率
- **Dollar per Watt** — 能耗效率
- **Dollar per Token** — 业务回报率

Freda 把 dollar per token 类比为工业时代的 <strong>dollar per kilowatt hour</strong>（千瓦时成本）——比较的是能耗产出比。

但 Token 也是最容易误导人的单位。核心变量是 <strong>Token per Task</strong>：同一个任务，不同模型消耗的 Token 可以差几十倍甚至上百倍。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-formula.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 同一个任务，百倍 Token 差距

<div class="text-sm leading-relaxed mt-2">

同一个 coding 任务的 Token 消耗为什么能差几十上百倍？Freda 拆了三个原因：

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**输出长度差异**
好的模型一两百行精炼代码就完成；弱的模型需要写几千行啰嗦代码。表面看任务都完成了，Token 消耗完全不是一个量级。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**隐藏的 Reasoning Token**
很多模型在回答前会做大量中间推理，这部分用户看不到。不同模型消耗的 compute token 差异极大。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Agentic Workflow 放大效应**
Agentic workflow 本身就像一个放大器——进一步放大不同模型之间的 Token 消耗差距。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>核心矛盾：</strong>同一个任务、不同模型的 Token 消耗可以差几十倍甚至上百倍。"Token 和 Token 不是一回事"——但市场还没真正理解这一点。
</div>

---
layout: default
---

# Token 不是越多越好

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**Cursor 的例子**

Freda 举了一个 developer 的反馈：

> Cursor 这个 coding 模型，你问它同一个问题，它就是会消耗更多的 Tokens——并不是效果更好，而是同样的效果之下能效更低。

如果 CFO 只看用量暴增就"继续加单"，恰恰说明行业在早期还没有理解 Token 的效率差异。

</div>

<div>

**浪费与增长不矛盾**

Freda 的观点：

- Token 浪费？✓ 肯定有大量浪费
- Token 用量继续上升？✓ 也会继续大幅上升

这两个判断**同时正确**——就像你不会炫耀一个灯耗电多，而是去买更省电的 LED。

"我觉得现在这个时代背景，很多事情其实是既对又对的。"

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>Freda 的判断：</strong>行业会逐渐理性起来——"过一阵大家会越来越意识到其实模型的性价比才是这个里面最重要的东西。"
</div>

---
layout: default
---

# 从"按量收费"到"按效果付费"

<div class="text-sm leading-relaxed mt-2">

Freda 认为 **按 Token 收费的模式一定会变**——Token 本身不可比，行业终局是按效果付费。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Sierra 的案例（AI 客服）**

完全按效果收费：
- AI 解决了问题、没转人工 → 收钱
- 转了人工 → 不收钱
- 不同复杂度、不同解决度 → 不同单价

客户和 Sierra 是 **interest-aligned**——都想解决问题，都想少烧 Token。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**哪些场景先变？**

- ✓ 客服解决率
- ✓ 销售转化
- ✓ 催收贷款
- ✓ 保险理赔

这些可以量化的场景会先转向按效果付费。

**写作等创意类**：效果难量化，可能长期还是按 Token 收费。

</div>

</div>

<div class="mt-3 text-xs opacity-60">
"我觉得是一个阶段的产物吧，就好像你在工业时代的时候你不会去真的炫耀说我一个灯我耗电耗特别多，反而你会去购买可能贵一点的这个LED。"
</div>

---
layout: two-cols
---

# Anthropic：为什么领先不再是"轮流坐庄"

<div class="text-sm leading-relaxed">

过去两年，默认假设是**模型领先地位每隔几个月就会换手**——Gemini → OpenAI → Anthropic → 下一个？

但 Freda 说，这一两个月，她第一次**开始质疑这个假设**。

核心原因：**Coding agent 成熟后，出现了一个关键的正向循环。**

更好的 AI 才能训练出下一代更好的 AI——这就是研究员说的 <strong>recursive self-improvement</strong>。一旦过了某个临界点，曲线会变得非常陡峭。

"你后面再追的人可能真的就没什么意义了。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么这次不一样？

<div class="text-sm leading-relaxed mt-2">

"AI 训练 AI"喊了两年，为什么这次不同？Freda 的答案是 **Coding agent 的成熟度**。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**半年前**
Coding 模型对工程师 TFP（全要素生产率）的提升只有 <strong>5%</strong>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**去年底**
提升到了 <strong>15%-20%</strong>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**现在**
早已远超 20%——模型大厂一个月就能出一个新版本

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**这解释了 Meta 为什么愿意花几十亿用别家模型。** 没有这个工具，迭代速度真的会比别人慢一大档。

各家的反应验证了这一点：
- **OpenAI** 按 GPT 和 Coding 两个组做了非常大的重组，把 Coding 推到极高位置
- **Google** — Sergey 亲自管 Coding
- **Meta** 内部推自己的 Coding 模型，希望年底做出成果
- **xAI** 公开收购 Cursor

</div>

<div class="mt-3 text-xs opacity-60">
"我个人判断其实我觉得已经非常非常快了……就有点像当年马车换汽车那种感觉。"
</div>

---
layout: default
---

# 负向滚雪球如何变成正向飞轮

<div class="text-sm leading-relaxed mt-2">

Dario 提出的经典概念——Freda 把它翻译成投资人的语言：

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**负向滚雪球（之前）**

- 去年训练成本 = 1
- 今年模型带来收入 ≈ 3-4
- 毛利 50% → 不到 2 块钱毛利
- 今年训练成本 ≥ 3
- 加上销售和人力 → **利润为负**
- 训练成本每年几倍增长 → **越滚越负**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**怎么突然就盈利了？**

Dario 原来的判断是：要跳出负向滚雪球，只能靠训练 scaling 变慢。

但最近几个月证明了**另一条路**：

如果收入增长斜率比训练成本更陡峭——不是 3 倍，而是远高于 3 倍——公司就会突然盈利。

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>关键公式：</strong>如果训练成本占收入的比例 < 推理毛利 → 公司赚钱。但训练和推理的算力占比最终由需求决定——而 Anthropic 年初需求突然爆发，算力被迫向推理倾斜，"突然一下就暴利了"。
</div>

---
layout: default
---

# 一个 Gigawatt 到底值多少钱？

<div class="text-sm leading-relaxed mt-2">

Freda 认为市场（包括她自己）**系统性地低估了模型公司的收入天花板**。

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**算力规模**
- OpenAI 和 Anthropic 现在各有小几个 GW 算力
- 年底能到 5 GW
- 明年可能到 10 GW

</div>

<div>

**每个 GW 产出的收入**
- 之前大家觉得：每个 GW ≈ 100 亿收入就不错了
- 这几个月证明：**这个数字被远远低估了**
- 推理和训练成本端每个 GW 对应 100 亿没问题
- 但收入端可以飙得非常高

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>今天没有人能看到上限。</strong>"你说一百亿，你说五百亿，其实现在看来都是挺有可能的。"
</div>

<div class="mt-2 text-xs opacity-60">
这带来的推论是：Anthropic + OpenAI 今年底加起来看 2000 亿美元的收入体量，也不是特别奇怪。投资人正在"锻炼自己脑子去习惯更大的数字和 upside surprises。"
</div>

---
layout: default
---

# Coding 的 TAM：当时我们错得有多离谱

<div class="text-sm leading-relaxed mt-2">

Freda 诚实复盘了投资人当初对 Coding 市场的严重低估：

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**当初的估算（错得离谱）**

- 量：美国有四五百万 developer——一个很小的群体
- 价：有人说 20 刀/月，有人说 200 刀/月——因为整个软件订阅也就一两万块
- 算出来：约 **100 亿美元市场**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**实际的现实**

- 今天 Anthropic 一家的收入就远超 100 亿
- 真正的 TAM 是 **任何可以被计算机操作的事情**
- Dario 的投资 PPT 第一页：**全球白领 TAM = 三四十万亿美元**
- 随着世界越来越数字化，这个范围在持续扩张

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
<strong>Freda 的反思：</strong>"投资做判断是经常错的。作为投资人我能做的事情，就是在发现 Coding 收入很快飙到十亿美金的时候，就应该非常快速地意识到自己本来的投资框架和 TAM 彻底想错了，然后及时改。"
</div>

---
layout: default
---

# 为什么 3000 人的公司不需要销售团队

<div class="text-sm leading-relaxed mt-2">

Freda 讲了一个让她震撼的对比：

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**传统软件公司**
- ServiceNow、Adobe：3-4 万人
- Salesforce：7-8 万人
- 销售和营销占收入 40%-50%
- CEO 自己也是销售
- 每个员工 ≈ **50 万美元**收入

</div>

<div>

**Anthropic**
- 也是一家 To B 公司
- 80% 是企业用户
- 员工只有 **3000 人**
- 没有一个正经的销售团队
- 每个员工 ≈ **上千万美元**收入
- 差了整整一个数量级

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>反思：</strong>"是不是说用户真的对智能的需求是无限的，是不是我们之前有点过于去强调销售的重要性？"Cowork 这么成功的产品，就两个人做出来。AI 来了之后，组织架构应该是什么样子——为什么有些大公司需要八万人？
</div>

---
layout: two-cols
---

# 把电机塞进蒸汽机

<div class="text-sm leading-relaxed">

Freda 认为 AI 现在的阶段，就像**当年把电机塞进蒸汽机的位置**——每个人都把 AI 加进自己的工作流，但没有人去问：

**这个流程本身，为什么长成现在这个样子？**

电力发明后，工厂只是把蒸汽机拆掉、把电机塞进同一个位置。工厂还是垂直设计的。直到流水线出现，生产力才真正爆发。

今天也是一样：Meta 为什么需要八万人？为什么需要这么多层级？

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./org-layers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从电灯泡到生产力：等了 40 年

<div class="text-sm leading-relaxed mt-2">

Freda 研究了两个经典历史案例来解释 **Technology Diffusion（技术扩散） vs Economic Diffusion（经济扩散）**：

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**电力革命（1880s-1920s）**

- 电灯泡发明了，但社会生产力**用了 40 年才真正提升**
- 中间甚至有 20-30 年生产力反而降了一点
- 原因：工厂只是"把电机塞进蒸汽机的位置"
- 直到流水线出现、围绕电力重新设计工厂，生产力才上去

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**计算机革命（1980s-1990s）**

- 80 年代电脑已经在办公室和银行广泛使用
- 每个人觉得自己工作更快了——但**宏观生产力没有任何提升**
- 经济学家称之为 "Productivity Paradox"
- 直到 90 年代中后期，沃尔玛、亚马逊围绕计算机和网络**重新设计业务**（ERP、供应链、数据库），生产力才蹿升

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>结论：</strong>新技术出现 ≠ 经济价值自动实现。"AI 什么时候变成收入，什么时候社会生产力会提升"——关键在组织架构的重构，而不是简单地"加上 AI"。
</div>

---
layout: default
---

# 公司为什么是层级制的？

<div class="text-sm leading-relaxed mt-2">

Freda 从第一性原理追问：公司为什么长成今天这样？

</div>

<div class="mt-3 text-sm leading-relaxed">

**层级 ≠ 权力结构。层级更深层的功能是信息传递机制。**

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**从上往下**
CEO 的信号 → 各层 managers 综合、提炼 → 一层层传递下去

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**从下往上**
基层信息 → managers 翻译、拆解 → 层层上报

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**所有会议、同步、对齐**
本质上都是"信息搬运机制"——因为人和人之间传输成本高

</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**在科技公司尤其明显。** 一个产品从 PM 写 PRD → designer 解读 → developer 开发（数周/数月）→ QA（数周）→ go-to-market → 端到端可能 6 个月过去了。

"里面很多其实都是翻译成本——一个人把另外一个人到底想做什么，翻译成大家能理解的东西。"

AI 进来之后，每个环节都会变成新的 bottleneck——像打地鼠一样，改完 developer 发现 QA 不行了，改完 QA 发现 PM 又成了瓶颈。

</div>

---
layout: two-cols
---

# 从接力赛到篮球赛

<div class="text-sm leading-relaxed">

Freda 用两个运动比喻 AI 时代组织架构的变迁：

"我觉得就是之前可能是一棒一棒的这种就是接力赛吧，然后之后可能更像是一个小团体的这种篮球赛——就三到五个人一个小分队。"

**之前：接力赛**
PM → Designer → Developer → QA → Go-to-market，一棒一棒传递，端到端 6 个月。

**之后：篮球赛**
3-5 人小分队，必要技能都在团队内，自己直接做决策。只有非常大的问题才向上汇报。

QA 嵌入开发，PM 需要更全能。每一个环节都在被重新定义。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./relay-to-basketball.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 软件公司：谁先死？

<div class="text-sm leading-relaxed mt-2">

Freda 的判断："其实都有一点点是时间问题了。"但死亡顺序有规律可循。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**最先死：UI 价值型**
核心价值就是精美 UI 的 point solutions：
<br>电子签、项目管理、BI 工具
<br>→ 受冲击最大、最彻底

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**其次：数据结构规整型**
像 Monday 这种项目管理工具——每行是固定任务对象，每列固定。
<br>→ 最容易被 AI 取代

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**最难替代：混乱数据型**
Excel 本身——每个格子语义完全不一样（名字、数字、公式混在一起）
<br>→ 反而很难被 AI 直接替代

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Data Warehouse 安全吗？</strong>Freda 自己体验后发现也不一定。过去需要写精准 SQL 调取数据——现在用模型 + Cloud Skills + 直接 call Bloomberg API，"几秒钟的 Token 消耗就能完成分析，setup 成本几乎是零"。
</div>

---
layout: default
---

# Office 还有意义吗？

<div class="text-sm leading-relaxed mt-2">

最近 Twitter 上吵得很火：既然 AI 能生成网页版 PPT，整个 Office 套件还有存在的意义吗？

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**Freda 的修正**

之前她也觉得没意义了。但最近发现：

AI 生成网页版 PPT 很快。但只要你需要**手动改一改**——拉一下、拽一下——你会发现还是在原生 PPT 里更快、更精准。

</div>

<div>

**"流水线"视角**

如果把 Office 想成一条流水线：

- 如果整条线的人只需要审批、不需要手动修改 → Office 可以被替代
- **但只要流水线上有一个人需要手动修改** → Office 就有继续存在的价值

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>AI 时代软件的新机会：</strong>去处理以前企业决策过程中"没有被记下来的部分"——为什么给客户打 25% 的折扣而不是 30%？谁说服了谁？CFO 有什么顾虑？这些 unstructured data 以前无法记录，AI 可以直接处理原始信息。
</div>

---
layout: default
---

# Agent 需要全新的基础设施

<div class="text-sm leading-relaxed mt-2">

Freda 在实践中发现：Agent 和人的需求完全不同。现有的基础设施是为人类设计的。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Slack vs Discord**
Slack 基于 HTTP（请求-响应），对人够用，对 Agent 非常难用。
Discord 基于 **WebSocket**（持久连接、实时在线），Agent 用得"非常顺手"。

"如果说哪个模型公司把 Discord 收购了，也不奇怪。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Email**
Gmail API 对发送频率有限制——对人够用，对 Agent 完全不够。容易被 detect 和 block。

→ **AgentMail** 出现了

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Phone & Identity & Payment**
Agent 也需要手机号、身份认证、支付能力——这些基础设施都在被重新做一遍。

→ **AgentPhone** 等创业公司涌现

</div>

</div>

<div class="mt-3 text-xs opacity-60">
Freda 的观点：之后所有基础设施——browser、identity、payment、compliance——都会被重新做一遍。给 agent 做基础设施的创业公司这波"挺有意思的"。
</div>

---
layout: default
---

# AI 收入版图：谁是百亿级赛道

<div class="text-sm leading-relaxed mt-2">

Freda 的快问快答：AI 创业公司中，哪些方向已经跑出了收入？

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**🥇 Coding**
几十个 billion 收入——最大的一块，断档领先。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🥈 AI 推理基础设施**
Together、Fireworks 等——几个 billion 收入。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**🥉 芯片**
Groq（即将上市）、Cerebras（已被收购）——也是大头。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Healthcare**
Bridge、OpenEvidence——约 2 billion。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Legal**
Harvey、Luminance——超过 1 billion。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Customer Service**
近 1 billion。Video Generation：几百 million。

</div>

</div>

<div class="mt-3 text-xs opacity-60">
"这个几乎就涵盖了所有能上一个 billion 量级的创业公司。"
</div>

---
layout: default
---

# 模型公司会吃掉一切吗？

<div class="text-sm leading-relaxed mt-2">

这个问题从 2022 年就开始问，但 Freda 观察到答案在**持续变化**。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2023 年**
大家管这些叫 "AI wrapper"，非常担心模型公司会吃掉一切。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**2024-2025 年**
不再说这个了——应用公司收入增长也很快，也有一些好退出。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**最近两个月**
Freda 重新开始非常担心。模型在变得 **stateful**——有 Skills、工具、Connector、记忆。应用层和模型层的边界又一次被推向应用层。

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

<strong>Anthropic 已经公开说：</strong>先吃编程，第二大业务去吃金融。OpenAI 马上推自己的音频模型（对 EleventLabs 的影响？）。两家几乎同一天宣布和私募基金合作，把模型推进被投企业。

<strong>应用公司的防守策略：</strong>法律公司靠合规和 hallucination 风险；客服公司靠 last mile 长尾需求。但 Freda 认为："只是依赖于一个合规，或者说你只是去处理 last mile 的工作，其实你并不能吃到最大最肥的这块价值。"

</div>

---
layout: default
---

# New Labs：硅谷最火的投资主题

<div class="text-sm leading-relaxed mt-2">

"硅谷这几个月肯定就是 New Labs——真的是能有 100 家 New Labs。"（从 AI Lab 出来的研究员自己开的新 Lab）

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**为什么是这个时间点？**

- OpenAI、Anthropic 估值涨到接近 1 万亿——投资人会想："拿着它还能赚多少？"
- 任何一家 New Lab 能博到几倍收益 → 非常值得投
- 退出机制好：硅谷 acqui-hire 文化——"只要你优秀，你总会被一个非常优秀的 Lab 再给招回去"

</div>

<div>

**VC 的数学**

- 每家 New Lab 融资金额都比较大
- VC 不能全投，也不能只投一家（选不出来）
- 典型策略：投 4-5 家，每家 5000 万 → 总投资 2 亿
- 只要有一家有几倍收益就够了
- 所以大基金玩得起，小基金不一定

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>另外两个火的方向：</strong>① 任何跟推理或能让模型降价的创业公司；② 给 Agent 做基础设施的创业公司（AgentMail、AgentPhone 等）。
</div>

---
layout: default
---

# Agentic Commerce：To B 远大于 To C

<div class="text-sm leading-relaxed mt-2">

Freda 的新判断：Agentic Commerce 这条线，To B 比 To C 大很多。

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**To C：价值有限**
- 消费体验已经不错，消费者自己愿意逛网页（有娱乐属性）
- AI 只是帮下单 → 有价值但不大
- OpenAI 也只做 travel 相关，没碰真正的消费

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**To B：天然适合 Agent**

跨境电商场景：
- 在美国远程买一批办公沙发
- 涉及定量、单价、折扣、认证、进出口合规、付款条款
- 非常复杂、非常长的链条
- 沟通成本极高的场景 → **天然适合 Agent**

</div>

</div>

<div class="mt-3 text-xs opacity-60">
"只要沟通成本高的这个场景都天然非常非常适合Agent。"Freda 认为这块值得重点看。
</div>

---
layout: default
---

# Mag 7 的现金流悬崖

<div class="text-sm leading-relaxed mt-2">

Freda 最担心的事：大厂（尤其是云厂商）的现金流将在未来两年急剧恶化。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**到 2027 年**
几家大云厂商的**自由现金流全部转负**

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**超过 1 万亿**
整个行业的资本开支——而且只是表内数字

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**只会上修**
每家都签了长协，capex 预测只会上修不会下修

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**云厂商也不是没有回报：**
- Google：今年约 2000 亿 capex，云收入约 1000 亿 → 两年回本
- Amazon 类似

**但云的生意本身在变差：**
- 竞争变多（xAI 等 new clouds 涌现）
- 价值链被分走——云之前卖上层高 margin 软件，现在那块价值被模型公司拿走
- 几家云厂商加起来已有 2 万亿美元收入储备，超过一大半是 OpenAI 和 Anthropic 的长期算力订单

</div>

---
layout: default
---

# 芯片格局的变化

<div class="text-sm leading-relaxed mt-2">

Freda 观察到芯片市场的几个重要变化：

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Google TPU：过去十年最重要的战略变化**

之前从不对外卖 → 现在开始把 TPU 作为**硬件直接卖给客户**。

"这个可能是它过去十年战略里面最重要的变化。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Amazon Trainium：独立芯片公司的规模**

财报报出来有 **200 多个 billion** 的 Trainium 收入——已经是一个独立芯片公司的规模了。

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**自动驾驶 & 机器人：**
- 自动驾驶：最值得关注的是 **英伟达的 Omniverse**（开源模型）——如果做成了，就是车厂的安卓系统，行业格局会变
- 自动驾驶也开始卷 reasoning——纯靠堆数据、模仿学习覆盖不到所有 edge cases
- 机器人：更谨慎。"还没有看到像 LLM 那样清晰的 scaling law"——没有可以外推的干净曲线，更像 feature 强化阶段
- 美国机器人厂商过去几个月"都去深圳学习了一波"

</div>

---
layout: default
---

# IPO 浪潮：四万亿的冲击

<div class="text-sm leading-relaxed mt-2">

SpaceX、Anthropic、OpenAI——几个加起来约 **4 万亿美元**级别的 IPO。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

**融资规模**
按 5% 融资 ≈ **2000 亿**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

**流通盘**
可能达到 **4000 亿**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-center">

**市场容量**
Mutual fund 账上约 **1 万亿**现金

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

市场容量上撑得住——加上散户（这些年投不到 OpenAI 和 SpaceX，肯定会想进场建仓）、主权基金、对冲基金。

**但更大的问题是资金轮动：** 新 IPO 进来，大家喜欢、想去拿，现有的 **Mag 7 会承压**。再叠加大厂自由现金流即将转负的现实——"原来你是七巨头，然后最后你很多都会被稀释。"

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>裁员对 EPS 的影响：</strong>大票裁员 20% → EPS 提升 5%-10%（有限）。但软件公司（如 Salesforce）裁员 20% → 轻松对应 EPS 提升 40%-50%。
</div>

---
layout: default
---

# 深夜装不上 OpenClaw 的痛苦

<div class="text-sm leading-relaxed mt-2">

— 从几十亿的数字，切换到一个人的深夜 —

</div>

<div class="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"几个月之前，有一天我深夜因为在家装不上 OpenClaw，真的是痛苦。说出来非常的搞笑，但当时就是你一个东西装不上，你就会想说我连这个都装不上，我什么都跟不上，是不是要被时代淘汰了。"
</div>

<div class="mt-4 text-sm leading-relaxed">

Freda 说她是做科技投资的——"你肯定每出一个新的东西，我觉得都应该自己上手去用一下，才能对投资做判断。"

但事实就是：**东西太多太快。** 每天打开 Twitter 都是 "you have to look at this"、"this is changing my life"——"你就有一种就是又有新东西了，然后我又落后了，我又没跟上这种感觉。"

焦虑的本质：**对未来不确定性的恐惧。**

媒体和个人也在无意中创造了更多焦虑："你这周烧了多少 Tokens？""你有几个 OpenClaw？"——一堆新名词，叠加裁员的恐惧。

</div>

---
layout: default
---

# 信息交换正在被掏空

<div class="text-sm leading-relaxed mt-2">

Freda 讲了一个让她自己都感到震撼的变化：

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"以前我非常喜欢约人聊——30 分钟之内可能就从一个在领域非常顶尖的人那里拿到非常高浓度的知识，那种感觉是非常爽的。但现在，很多跟工作有关的对话，真的是不管对方是谁……可能 95% 的信息性的内容我都可以直接问 AI 得到答案，而且这个答案可能是我更想要的。"
</div>

<div class="mt-4 text-sm leading-relaxed">

**不是优越感，是真切的感受：**

> "以信息交换为目的的对话，这个意义是在快速地被掏空的。"

这让 Freda 重新思考"见面"的意义。她最近在 Palo Alto 和一个朋友随便坐下来聊——没有准备聊什么大事，但聊到了做事情的勇气、人生的遗憾、什么让她觉得有 spark。

"我觉得那个可能是我近一长段时间里面就是最有内容的一次对话。就它没有给我任何信息上的增量，但就是比较有人味儿吧。"

</div>

---
layout: default
---

# 人和人之间还剩下什么？

<div class="text-sm leading-relaxed mt-2">

Freda 的答案——非常鸡汤，但非常真实：

</div>

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"人和人之间，啊，非常的鸡汤，我觉得剩下的就是情感的连接吧。"
</div>

<div class="mt-4 text-sm leading-relaxed">

她已经在自己心里**划了一条清晰的线**：

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**交给 AI 的**
信息、知识、分析——跟工作有关的一切事实性内容

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**留给人的**
观察别人、聊聊心路历程、聊一些真诚的甚至之前不会聊的东西——"不然的话也确实是浪费两个人的时间"

</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**小君的点睛之笔：** "语言很多时候还会被用来真正建立人与人之间的联系——我觉得这个是会越来越宝贵的。"

这和工作室的名字 "语言及世界" 遥相呼应：AI 会做掉信息传递的工作，但语言建立人际连接的功能会更加稀缺。

</div>

---
layout: default
---

# 历史长河中的技术变革与就业

<div class="text-sm leading-relaxed mt-2">

Freda 让 AI 回顾了几百年的技术变革史。她最大的感受：

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**每一次都被说是"就业的末日"**

- 动力织布机摧毁手工织布
- 美国农业人口从 40% → 1%
- 电话接线员高峰时大几十万人 → 全部自动化
- 铁锈带、中国加入 WTO……

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**这一次，速度和广度不同**

- 历史上的转型往往花了几十年甚至上百年
- AI 的扩散速度会快很多
- 广度：白领受影响——但之前农业的规模其实差不多
- 真正下判断非常难

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"每一代人或者说每一个个体吧，都会觉得自己非常的 special，觉得自己非常的不一样，但是实际上放到一个历史的长河，也就是很小的一个波澜。"
</div>

<div class="mt-2 text-sm leading-relaxed">

<strong>Druckenmiller 的态度：</strong>如果你抱定"AI 肯定导致裁员和通缩"的想法，你是 arrogant 且不是 open-minded 的。保持开放心态——"strong opinions loosely held。"

</div>

---
layout: default
---

# 对创业者的话

<div class="text-sm leading-relaxed mt-2">

Freda 说了一段让她前面的所有分析都"不作数"的话：

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"如果在创业的话，我觉得不要听我上面任何分析。因为前面分析都是分析大公司……你这些 VC 尤其是早期的项目，很难有那种让你觉得说有护城河、有什么 moat 的——你如果去想的话其实是没有的。有什么东西是模型公司或者大厂真的想做自己做不出来的，我觉得也是没有的。"
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不能想终局**
"就不能去想一个终局的概念——有一点要脑子一热，然后好好准备，然后好好努力想做就做吧。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**时代窗口好**
大厂不再是绝对安全。融资容易。Coding 让做事变快。新需求多，格局未定。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**不丢人**
"大家都叫这个是什么第四次工业革命一个大时代——所以去做点新的东西本身也不丢人。"

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-xs opacity-50 mb-3">这期对谈里最值得记住的几句——每条都能在 transcript 里找到出处：</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"dollar per token……把它想象成为就是工业时代的大家看这个 dollar per kilowatt hour，就是一个千瓦时的一个概念，比较的是能耗产出比。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于 Token 的本质</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"同一个任务，不同的模型，或者说不同的应用，消耗的 token 可能差几十倍甚至上百倍。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于 Token per Task</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"你更好的 AI 才能去训练出下一代更好的 AI……这个循环一旦跑起来，就是 recursive self-improvement 这个味道。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于 Anthropic 的壁垒</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"今天大家管它叫 ARR……在模型这里它又不是 annual 又不是 recurring。而且大家用的口径真的是七七八八什么都有。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于模型公司收入的不可比性</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"一个 Gigawatt 到底能产生多少收入到今天也没有人能看到上限——你说是说一百亿，你说五百亿，其实现在看来都是挺有可能的。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于被系统性低估的算力变现</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"我觉得现在可能就是像刚才说的，把电机塞进蒸汽机的那个位置的这个阶段吧。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于 AI 时代的组织困境</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-xs opacity-50 mb-3">关于人、焦虑与连接：</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"但我觉得其实这个层级它更深层的功能应该是一个信息的一个传递。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于公司层级的本质</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"之前可能是一棒一棒的这种接力赛吧，然后之后可能更像是一个小团体的这种篮球赛——就三到五个人一个小分队。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于 AI 时代的组织形态</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"以信息交换为目的的对话，这个意义是在快速地被掏空的。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于人与 AI 的分工</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"人和人之间……我觉得剩下的就是情感的连接吧。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于什么不会被 AI 替代</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"每一代人或者说每一个个体吧，都会觉得自己非常的 special……但是实际上放到一个历史的长河，也就是很小的一个波澜。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于技术变革的历史视角</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"strong opinions loosely held……现在因为处在这个时间点，你其实未来本来就是不能完全被掌控的。"
<div class="text-xs opacity-50 mt-1 not-italic">— 关于如何在不确定中自处</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="mt-8 text-lg opacity-70">
Freda 的投资札记 · 第 2 集
</div>

<div class="mt-4 text-sm opacity-50">
小君的商业访谈录 · 语言及世界工作室
</div>

<div class="mt-8 text-sm opacity-60 italic">
"所以我会觉得其实我们这代人应该觉得挺幸运的，就是活的这个大几十年，见证了很多历史。"
</div>
