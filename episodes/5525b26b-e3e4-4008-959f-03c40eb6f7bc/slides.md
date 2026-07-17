---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'TML Inkling, California Forever?, TSMC Capex | David Baszucki, Everett Randle, Eric Glyman, Jordan Black'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# TML Inkling · TSMC 扩产 · Roblox Build

## 2026 年 7 月 — AI、资本与制造的十字路口

<div class="mt-10 text-sm opacity-60">
TBPN 特别节目 · Tyler Cosgrove 客串主持 · 2026.07.16
</div>

<div class="mt-6 text-xs opacity-40">
四位嘉宾：Everett Randle (Benchmark) · Eric Glyman (Ramp) · Jordan Black (Senra) · David Baszucki (Roblox)
</div>

---
layout: default
---

# 为什么这期特别？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**TML Inkling 开源**
Mira Murati 的 Thinking Machines Lab 发布首款开源模型，975B 参数 MoE 架构，开辟美国开源 AI 新战线

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**TSMC 史上最大赌注**
资本开支上调 + 追加 $100B 美国投资，市场对过度扩张存在分歧

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**VC 的"赌场筹码"时刻**
Benchmark 合伙人 Ev Randle 谈 Anthropic/OpenAI IPO 预期如何改变风投风险偏好

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Token 支出的隐形黑洞**
Ramp 客户 token 支出 4 个月暴增 21 倍，单周最高 $1.5M，企业亟需 AI 支出管理

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**重新发明线束制造**
Senra $65M 融资，用垂直整合 + AI 重塑 $165B 航空航天线束市场

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Roblox Build：人人创作**
1.3 亿 DAU 平台推出 AI 游戏生成，自建基础设施带来 3 倍成本优势

</div>

</div>

---
layout: default
---

# TML Inkling：美国开源 AI 的新面孔

<div class="mt-4">

Mira Murati 离开 OpenAI 后创立的 **Thinking Machines Lab (TML)** 发布了首款模型 **Inkling**。

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**架构选择**
- 975B 总参数，**MoE（混合专家）**架构
- 仅 41B 参数在任一时刻活跃
- 属于开源模型中较大的一侧，但非传统密集模型
- 定位：可定制、可微调的基础模型

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**差异化策略**
- **不争"最强"** — Murati 明确表示 Inkling 不是最强的开放或闭源模型
- 核心卖点：与 Tinker API 深度配合，专为微调而建
- D. Das 评价："中国以外最好的开源模型"
- 位于 Kimi K2.5 和 K2.6 之间

</div>

</div>

<div class="mt-4 text-sm opacity-70">
华尔街日报：目标是从 OpenAI 和 Anthropic 手中蚕食市场份额。但 TML 的商业模式天然适合开源——开源不会侵蚀其 Tinker 微调 API 的核心收入。
</div>

</div>

---
layout: default
---

# 蒸馏之争：灰色地带里的技术边界

<div class="mt-4">

Inkling 引发了新一轮"蒸馏"争议。

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Jack Morris (Engram Labs) 的争议主张**
- 声称 Inkling 是"唯一未经蒸馏训练的开放模型"
- 被社区笔记反驳：TML 官方博客承认使用了 Kimi K2.5 生成的合成数据做初始 SFT
- Engram 官方致歉："创始人的主张缺乏依据"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**到底什么算"蒸馏"？**
- 蒸馏不是二元概念，而是光谱
- TML 的用法是"最轻度的蒸馏"——仅一个阶段、少量数据
- 多层蒸馏链：Kimi → Inkling，而 Kimi 可能又蒸馏了闭源模型
- 主持人评论："层数越多，蒸馏越弱"

</div>

</div>

<div class="mt-4 text-sm text-orange-600">
⚠ 现实是：几乎所有开源模型都在某种程度依赖闭源模型的合成数据。零蒸馏的独立训练栈几乎是神话。
</div>

</div>

---
layout: two-cols
---

# AI 开源生态的三极格局

<div class="text-sm leading-relaxed mt-2">

**美国开源正在追赶**

- 中国开源模型长期主导 OpenRouter 排名前十
- Beijing 拟限制中国模型出海 → 为美国开源创造时间窗口
- Inkling 的发布恰逢其时
- NVIDIA Nemotron、Reflection AI 同步发力

**地缘政治成为关键变量**

- Anthropic 每周关停数百万蒸馏账户
- 政界讨论以"华为/ZTE 模式"限制中国模型全球扩张
- 企业选择美国开源不仅为性能，也为合规

<div class="mt-3 text-xs opacity-60">
作者概括：开源 AI 正在成为国家竞争力的延伸。政策、合规、供应链安全将重新定义"最好模型"的标准。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-three-poles.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 加州永久计划：$3.2B 的教训

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**发生了什么**
- 国防初创公司 **Saronic** 的 $3.2B 自动化造船项目 **Port Alpha** 放弃加州 Solano County
- 转投德州 Brownsville（距 Starbase 约 20 英里）
- 项目预计创造约 **10,000 个永久岗位** + 数千建筑岗位
- 这是 California Forever 计划城市失去的第一个标杆租户

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**根因分析**
- "加州未能以项目所需的紧迫感行动"——加州就业联盟
- 审批流程漫长、缺乏明确的加速通道
- 对比：德州 6 月批准了 **$211M 税收减免包**
- 支持快速审批的立法至今未推进
- California Forever 已签 40 年建设劳工协议，覆盖 70,000 英亩

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>信号意义</strong>：失去一个重大国防承包商，不仅是经济损失，更向市场传递了加州在大规模工业投资竞争力上的信号。California Forever 本身仍在推进，但需要找到下一个标杆租户。
</div>

</div>

---
layout: default
---

# TSMC：史上最大扩张赌注

<div class="mt-4">

TSMC 同时**超预期盈利**和**上调资本开支指引**。

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 盈利超预期
<div class="text-3xl font-bold text-green-600 my-2">Beat</div>
<div class="text-xs opacity-70">Q2 业绩强劲<br/>AI 芯片需求旺盛</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 资本开支
<div class="text-3xl font-bold text-blue-600 my-2">↑ 上调</div>
<div class="text-xs opacity-70">创纪录的资本支出<br/>巩固全球供应链地位</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 美国投资
<div class="text-3xl font-bold text-orange-600 my-2">+$100B</div>
<div class="text-xs opacity-70">追加美国投资<br/>Arizona 晶圆厂持续扩建</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**市场反应分裂**：Nasdaq 因 TSMC 支出计划下跌 1%。投资者担忧过度扩张——即便 TSMC 经历了智能手机周期、多次行业繁荣与萧条，当它最终说"时机到了"时，市场却说"我不确定"。

</div>

</div>

---
layout: default
---

# TSMC 扩张的三重信号

<div class="mt-4 text-sm leading-relaxed">

TSMC 的历史贯穿智能手机周期、PC 周期、无数波行业起伏。**它从不是一家轻易被概念冲昏头脑的公司。**

当 TSMC 终于全力押注，其信号权重远超任何 AI 分析师报告：

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**信号一：需求是真实的**
下游客户的订单意图足够强。产能缺口不是季度的，是结构性的。TSMC 不会因为"AI 很火"就扩产——它看到了不可回撤的需求曲线。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**信号二：错过代价 > 过度建设**
TSMC 计算过：不扩张的长期代价远大于暂时性产能过剩。AI 训练和推理的芯片需求还在加速，手机/PC + AI 双轮驱动。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**为什么市场还是担忧？**
- Arizona 工厂能否达到台湾良率和效率？
- AI 资本开支是否有泡沫（参考 Cisco 2000）？
- 半导体周期性真能被 AI 打破，还是只是延后？

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：市场对 TSMC 的分裂反应本身就是信号——在最需要"相信增长"的时刻，投资者选择了观望。这正是周期顶部的典型特征，也可能是真正长周期开始的标志。两种叙事取决于你是否相信 AI 芯片需求是 1996 年的互联网基础设施还是 2000 年的 Cisco 路由器。
</div>

</div>

---
layout: default
---

# VC 的"赌场筹码"时刻

<div class="mt-4 text-sm leading-relaxed">

Benchmark 合伙人 **Everett Randle** 描述了当前风投圈的心态：

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 my-3">

**"打中 base 的猴子"**：过去 18-24 个月，风投像一只不断打中 triple 20 的猴子。每次投都涨，每次加注都翻倍。这种"不可避免性"错觉，上次出现是 2021 年夏秋。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**"赌场筹码"效应**
- Anthropic 在很多基金中出现了 8 次（跨不同基金重复投资）
- SpaceX IPO 已经实现，Anthropic/OpenAI IPO 即将到来
- "我们已经完成了任务"——当一只基金有足够多的 power law 回报时，剩下的投资就变成了自由挥杆

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**2021 vs 2026 关键差异**
- 2021：电商渗透率一次性跳跃被误读为永久加速
- 2026：技术范式转移是真实的，但估值缺乏公开市场先例
- 共同风险：当"看起来贵但 6 个月后会更贵"成为共识
- 今天的不确定性：AI 应用公司该给多少倍？太空公司呢？

</div>

</div>

</div>

---
layout: two-cols
---

# 2026 VC 投资环境：四维对比

<div class="text-sm leading-relaxed mt-2">

**2021 年泡沫的解剖**

投资备忘录显示：当时 SaaS 公司确实在增长 200-300%，客户留存优良，所有基本功都很好。问题出在两点：

1. Covid 拉动的需求是"一次性加速"，不是永久斜率变化
2. 公开市场给 SaaS 40-50 倍收入的估值是历史极值

Snowflake IPO 不到 $500M 收入，上市估值 $80B。

**2026 年的不确定性**

AI 应用公司没有公开市场先例——会像 SaaS？比 SaaS 更好？更低毛利？资本密集度更高？现有上市巨头交易倍数很差。

市场在折价，因为"不知道该怎么算"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vc-landscape.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# $3 Uber 时代的终结

<div class="mt-4 text-sm leading-relaxed">

Everett Randle 在 2024 年 1 月的预言如今成为现实。

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 my-3">

**2024 年 1 月推文**："在努力不把 AI 的'$3 Uber 穿越全城'时代视为理所当然，希望你也如此。"

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**消费者端：无广告的黄金时代**
- LLM 像早期的 Instagram——不对用户索取任何东西
- 没有广告、没有收费墙、纯粹的体验
- 但"不成熟"无法持续——要么变成现金流产品，要么消失
- 短期的美好，是系统尚未平衡的信号

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**企业端：补贴退坡**
- Claude Code 订阅一度提供比 API (Cursor) 20 倍的 token 用量
- 推理模型 + Agent 让成本爆炸
- 补贴正在一点点退去
- 但矛盾的是：有些公司（Dylan Patel / SemiAnalysis）认为 token 成本还不够高——"让竞争对手用开源模型，我们员工用前沿模型"

</div>

</div>

</div>

---
layout: two-cols
---

# 从 $3 Uber 到月付百万

<div class="text-sm leading-relaxed mt-2">

**Ramp 客户的 token 支出轨迹**

- ChatGPT 时代：人均 $20/月，几乎是预算误差
- Agent 时代：持续推理，支出开始积累
- 当前：Ramp 自身单周 AI 账单 $1.5M
- 趋势：Token 支出正在逼近人力成本

**底层逻辑变化**

模型从"回答问题"变成"持续执行任务"。token 消耗不再是 per-prompt 计量，而是 per-session、per-agent。一个长期运行的 agent 一天的 token 量可能超过一个团队一个月的用量。

成本曲线指向上方，但价值曲线也在上升——更快的交付、更多的自动化。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-economics.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Ramp：Token 支出的 21 倍暴增

<div class="mt-4">

Ramp 联合 CEO **Eric Glyman** 揭示了惊人的数据：

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 增长速度
<div class="text-4xl font-bold text-red-600 my-3">21x</div>
<div class="text-xs opacity-70">Ramp 客户 token 支出<br/>过去 4 个月增长倍数</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 规模参考
<div class="text-4xl font-bold text-orange-600 my-3">$1.5M</div>
<div class="text-xs opacity-70">Ramp 自身单周<br/>最高 token 账单</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 占比变化
<div class="text-4xl font-bold text-blue-600 my-3">~10%</div>
<div class="text-xs opacity-70">五月 token 支出<br/>占 Ramp 工资支出的比例</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>核心洞察</strong>：Token 支出不像 SaaS（固定订阅费），不像工资（可预算），而像是"一张没有额度上限的公司信用卡——账单是事后才知道的"。多数组织甚至看不到当前花了多少。
</div>

</div>

---
layout: default
---

# 企业 AI 支出的"无形黑洞"

<div class="mt-4 text-sm leading-relaxed">

Eric Glyman 解释了为什么 token 支出管理是一个全新品类：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**传统支出的可管理性**
- SaaS 订阅：固定费用，按席位数，不会意外暴增
- 工资：预算周期内可预测
- 差旅/采购：有审批流，有可见性

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Token 支出的特殊性**
- 用量驱动：代码 agent 跑得越多，账单越大
- 即时性：没有月度账单，每分钟都在累加
- 不可见性：API key 散落在各部门，无人统筹
- 弹性：一天可以从 $1,000 飙到 $10,000 再到 $100,000

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**解决路径（Ramp 的方法）**：① 连接 API key → 实时可见性 ② 异常告警（某个员工一小时花了 $800）③ 对标（最优公司的缓存率、路由策略）④ 控制（预算上限、审批流程）。

<div class="mt-2 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Glyman 的观察</strong>：当人们看到自己的 token 支出后，效率自然提升。就像公司卡——你只需要告诉员工"这笔超规了"，违规支出就会下降。
</div>

</div>

</div>

---
layout: two-cols
---

# 前沿 vs 开源：企业如何分配？

<div class="text-sm leading-relaxed mt-2">

**当前现状（Ramp 数据）**

平均企业 59% 的 token 支出流向前沿模型。但大多数应用层公司正在或已经将开源使用率推到 80%+。

**分配逻辑**

- **前沿模型用于内部**：编程（Fable/Claude Code）、探索性任务、复杂推理——速度等于竞争优势
- **开源模型用于产品**：客服、分类、摘要——成熟用例可微调，用量随客户规模而非员工数

**前沿模型有时反而更便宜？**
Glyman 举了一个反直觉的例子：Sonnet 单次调用便宜，但需要更多 agent 协同、更长的思考链路；Fable 单价高但解决问题更快——就像雇 Scott Wu 比雇一个团队工程师更高效。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-allocation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 应用层公司的护城河重考

<div class="mt-4 text-sm leading-relaxed">

当"大堆代码"不再构成长期壁垒，风投在寻找什么？

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**双边市场 & 网络效应**
"就像沙漠里的水"。消费者市场、流动性驱动的业务天然规避 AI 实验室的竞争。这些永远是稀缺品。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**实验室风险的再评估**
Anthropic 三个月 2026 年利润增量可能超过整个 AI 法律赛道的中期 TAM。实验室为什么要花 7 年攻一个自上而下销售的市场？优先级不匹配就是护城河。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**自建"实验室团队"的陷阱**
许多应用公司开始招 Meta 研究员，声称"我们也有 AI 研究能力"。Randle 认为这在多数情况下只是创始人自我安慰——真正有 GPU 做突破性研究的只有少数地方。

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**被 AI 创造的新机会**：法律科技（Harvey、Legora）在 AI 之前不被视为风投赛道。现在它们有令人瞠目的增长数据。AI 正在把"非风投 TAM"变成"风投 TAM"。

**AI 时代的特殊机会**：把不可规模化的事情规模化——比如把医疗诊所的每个对话录像、每台设备安装传感器，变成训练数据集。不是万亿美元公司，但 $50-100M 收入的自举式生意完全可行。

</div>

</div>

---
layout: default
---

# 美国开源模型的追赶之路

<div class="mt-4 text-sm leading-relaxed">

Everett Randle 提出了一个尖锐的问题：**好的西方开源模型在哪里？**

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 my-3">

"看看 OpenRouter 的 token 排名——前十名全是中国的。如果它们那么好，为什么没人用？"现在终于开始看到美国团队认真投入这个赛道。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**正在追赶的美国力量**
- **NVIDIA Nemotron**：NVIDIA 在开源生态的投入超过任何单一公司，Jensen 值得感谢
- **TML Inkling**：虽未到中国开源的前沿，但可定制性对企业极具吸引力
- **Reflection AI**：明确以"美国开源模型"为定位
- 3-4 个月前几乎没有可指出的美国开源模型，现在有了

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**中国模型的真实实力**
- "蒸馏"的说法过于简化——可能夹杂排外情绪
- DeepSeek 论文确实有真正的突破性贡献
- 中国的开源架构经常被闭源实验室反向吸收
- 大量成功的 AI 研究者来自中国
- 如果 Beijing 限制模型出海，全球生态将改写

</div>

</div>

</div>

---
layout: default
---

# Senra：从公寓地毯到 $65M 融资

<div class="mt-4">

**Jordan Black**，Senra Systems 联合创始人兼 CEO，三年前在公寓地毯上开始制作线束。

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**什么是线束？**
- 就像极其复杂的 iPhone 充电线：电线、连接器、电缆的束集
- 存在于每架飞机、每枚火箭、每个数据中心
- 目前主流设计工具：**Excel 电子表格 + PowerPoint 幻灯片**
- 制造方式：熟练技工全程手工组装
- 没有任何标准化——类比"没有菜谱的 Cheesecake Factory"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Senra 的垂直整合方案**
- **质量第一**：99%+ 首件合格率（传统方式组装完才知道是否短路）
- **速度**：数周即可交付（行业通常需 6 个月以上）
- **前置部署工程师**：从设计到原型到量产全链条
- **自研软件 + AI**：BOM 自动分析，推荐更优组件
- **自有培训体系**：4 周即可培养技术员（传统需数年）

</div>

</div>

</div>

---
layout: default
---

# $165B 线束市场：为什么必须垂直整合？

<div class="mt-4 text-sm leading-relaxed">

当被问及"为什么不只做 SaaS 软件"时，Jordan Black 的回答揭示了线束行业的本质：

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 my-3">

客户根本不关心设计工具。他们只关心拿到一个能用的线束，比平时更快，插上就能工作。要做一家 _generational_ 的公司——像"有了 Google Maps 之前的时代 vs 之后"——就必须垂直整合全部环节。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**增长中的线束需求**
- 航空航天（更多卫星、商业航天）
- 国防（全方位增长）
- 数据中心及周边设施（发电机、变压器、HVAC）
- 新能源/微反应堆（复杂的线束需求，极少有人能做）

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**自动化路线图**
- 当前：90%+ 员工是 4 周速成的培训技术员
- 近期（1-5 年）：专用 AI + 机器人团队，正在与新兴公司和现有巨头对接
- 已收集的数据：从设计输入 → 工作指令 → 物理操作每个环节
- 目标：从半自动化到尽可能全自动化

</div>

</div>

<div class="mt-3 text-sm">
两个工厂：Redondo Beach + 新建 Cypress 82,000 平方英尺制造基地。正在招聘各岗位，从技术员到 AI 工程师。
</div>

</div>

---
layout: two-cols
---

# Senra：垂直整合重塑线束制造

<div class="text-sm leading-relaxed mt-2">

**为什么"纯软件方案"行不通**

线束制造的核心矛盾：输入（PPT 设计）不标准，输出（手工制造）不标准，中间没有统一的数据层。

Senra 的做法不是写一个 SaaS 工具然后销售，而是直接成为"标准答案"。从设计阶段就介入，用自己的方案确保可制造性，最后交付成品。

**类比**

就像 Stripe 没有做一个"支付 SaaS"，而是让自己成为支付的 API。Senra 在让"线束"变成他们定义的品类。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./senra-vertical.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Roblox Build：每个人都成为游戏创作者

<div class="mt-4 text-sm leading-relaxed">

Roblox 创始人兼 CEO **David Baszucki** 宣布 **Build** 进入 Alpha 测试（7 月 28 日）。

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 my-3">

**核心变化**：将 Roblox Studio 的 AI 能力整合到手机端的一个标签页。支持一次性生成游戏 + 迭代修改。1.3 亿 DAU 中越来越多的人将从"玩家"变成"创作者"。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**商业模型的连续性**
- 创作工具免费获取（有基础额度）
- 可购买额外 token 用量
- 创作者经济分成不变——更多资金流向创作者
- "就像 20 年前一些东西很贵，随着推理成本下降，越来越多人能参与"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**回到初心**
- 20 年前第一款标语："你来做游戏"（You Make the Game）
- 当时 UGC 平台是新概念
- 如今 AI 让这个愿景真正普及
- Build 不仅是工具，是 Roblox 作为 UGC 平台的终极形态

</div>

</div>

</div>

---
layout: default
---

# 自建基础设施的远见：3 倍成本优势

<div class="mt-4 text-sm leading-relaxed">

当被问及如果不自建数据中心 Roblox 现在会面临什么困境时，David Baszucki 的回答揭示了一个 10 年前的远见：

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 my-3">

"推理和其他方面，我们自建基础设施的成本优势大约在 **3 倍**。把省下的钱推给创作者而不是云厂商。"

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Roblox 的基础设施策略**
- 全球数据中心，自有机房
- 自建推理，优化到极致
- 与云厂商保持"突发模式"合作：日常跑自家，峰值借用云端
- 带宽、CPU、推理的数学优化

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Roblox 的 AI 模型矩阵**
- 语音安全模型
- 文本过滤模型
- 超级升采样视频模型
- NPC 模型
- 游戏生成编码模型
- 场景生成模型
- 单个部件创作模型

</div>

</div>

<div class="mt-3 text-sm">
Baszucki 强调：Roblox 不仅是游戏平台，更是"高性能、低成本的多人基础设施，2D 和 3D 都支持，可在低端和高端设备上运行"。
</div>

</div>

---
layout: default
---

# 从黑白电影到彩色：照片级真实的游戏未来

<div class="mt-4 text-sm leading-relaxed">

Roblox 正在开发一个**超级升采样视频模型**，目标是实现多人游戏中的**照片级真实 4K 60Hz**。

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 my-3">

Baszucki 的观点：人们对游戏的视觉期望已经"温水煮青蛙"。我们习惯了游戏本来的样子，从没想过它应该像电影一样真实。这就像从黑白电影到彩色电影的跨越——人们现在还无法想象那是什么感觉。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**技术路线：混合架构**
- 不是纯 3D 传统渲染
- 不是纯视频世界模型
- 而是：多人世界协调 + 每个用户本地超级升采样
- 既要保持千人同时在线的一致性，又要每个人都有电影级画质

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**对创作者意味着什么**
- 过去凭高保真资产取胜的创作者模式将改变
- 过去凭快速上线的创作者获得新工具
- 核心不变：创意——玩什么、怎么玩的想象力
- "就像从油画过渡到 Photoshop"——数字资产创作人人都会变好

</div>

</div>

</div>

---
layout: default
---

# NPC 的进化：从角色扮演到测试代理

<div class="mt-4 text-sm leading-relaxed">

Baszucki 描绘了 NPC 的双重未来：

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### NPC 作为游戏角色
- 有记忆、有性格、能自然对话的角色
- 与世界互动：像《盗梦空间》里能实时修改世界的"梦境建筑师"
- 动态世界生成：世界本身随着玩家行为改变
- 数字孪生：科幻电影中见过的一切 NPC 概念

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### NPC 作为测试代理（Wiggins Loop）
- 代码生成可以写测试计划、做迭代循环、整夜运行
- 但游戏很难——"什么是好游戏"不容易定义
- 解决方案：放 100 个随机 NPC 进游戏，给它们和人类相同的任务，看表现
- **NPC 可以比人类快 100 倍运行**：100 人 100 小时的测试，NPC 1 小时完成
- 为游戏引入类似 Wiggins Loop 的快速迭代机制

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括</strong>：这可能是游戏开发范式转变的关键——不是取代 QA 团队，而是让"游戏平衡性测试"变成和代码测试一样快速、可自动化的事情。拥有足够推理能力的 NPC 将从消费侧（角色）和生产侧（工具）同时改变游戏。
</div>

</div>

---
layout: two-cols
---

# Roblox 的 AI 融合战略

<div class="text-sm leading-relaxed mt-2">

**三层架构**

Roblox 作为平台的成功建立在三层协同之上：

**基础设施层**是 10 年积累的竞争壁垒——3 倍成本优势意味着同样金额，创作者拿到的是竞争对手平台的 3 倍分成。

**Build 创作层**让 1.3 亿 DAU 中的任何人成为创作者。与 Studio 不同，Build 的所有内容通过 prompt 生成，保留完整的 prompt 历史——这为安全审核提供了前所未有的可见性。

**安全层**是 UGC 平台的生命线。已有年龄验证（AI + 生物特征），16 岁以下限定内容池，以及基于长期留存的内容发现系统。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./roblox-ai-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Roblox 的安全体系：从被动过滤到主动设计

<div class="mt-4 text-sm leading-relaxed">

Baszucki 分享了 Roblox 在儿童安全上的系统性方法：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**已实施的安全措施**
- 禁止图片/视频分享
- 全平台年龄验证：AI + 生物特征双保险
- **Kids and Select Content**：16 岁以下限定访问 20,000+ 精选游戏
- 不等待法律或设备厂商——自己先行
- 持续年龄检查（因为家长会把手机/平板给 9 岁孩子用）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Build 带来的安全新能力**
- 在 Studio（IDE）中：任何人都可以自由创作任何东西
- 在 Build 中：所有内容通过 prompt 生成 → **完整的 prompt 历史可审计**
- 上传的图片、模型都有记录
- 对 Build 生成的内容保持与 Studio 内容相同的安全审核标准
- 内容发现系统基于长期留存 → 自动过滤低质量/不安全内容

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关键洞察</strong>：Roblox 的推荐系统天然适配 AI 生成内容的大爆发。即使游戏数量翻 20 倍，只有通过"高留存门槛"的内容才会被推荐——AI slop 根本走不到用户面前。
</div>

</div>

---
layout: default
---

# IP Manager：创作者经济的版权基础设施

<div class="mt-4 text-sm leading-relaxed">

AI 让游戏创作变得更容易，但 IP 问题变得更复杂。

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**现状：IP 授权的混乱**
- IP 持有者和创作者之间的关系极其复杂
- 涉及多个国家、好莱坞合同
- 一个小团队想获得大 IP 授权几乎不可能
- 有些 IP 持有者欢迎二创（如 Jake Paul），有些严格封锁

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Roblox 的系统化方案：IP Manager**
- 双功能平台：授权市场 + 版权控制中心
- 部分 IP（如电影《Saw》）已入驻，创作者可直接在线签约
- 也支持版权方说"任何地方都别用我的 IP"
- AI 自动扫描和检测能力增强
- 愿景：像 YouTube Content ID 一样自动分配权利和收益

</div>

</div>

<div class="mt-4 text-sm">
Baszucki 认为这就像 YouTube 的歌曲版权系统——一旦有人上传含版权音乐的视频，版权费自动流向版权方。游戏 UGC 需要类似的平衡。
</div>

</div>

---
layout: default
---

# AI 时代的平台扩张：AR 眼镜与新终端

<div class="mt-4 text-sm leading-relaxed">

Baszucki 分享了 Roblox 的平台扩展路线图：

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Android TV
<div class="text-xs opacity-70 mt-2">早期实验阶段<br/>相同 Roblox 客户端<br/>非高强度 Twitch 类<br/>体验特别合适<br/><strong>所有电视平台</strong><br/>都有机会</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Nintendo Switch
<div class="text-xs opacity-70 mt-2">持续与任天堂沟通<br/>"Roblox 应该<br/>出现在 Switch 上"<br/>仍在推进中</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### AR 眼镜
<div class="text-xs opacity-70 mt-2">标准化 AR 形态：<br/>抬头显示 + 眼镜叠加<br/>最终走向投影<br/>3D 通信的理想平台<br/>Meta Quest VR 已有<br/>大量玩家</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关于 AR"寒冬"</strong>："一旦我们有了扬声器、麦克风、摄像头、投影、轻量化——全部组合在一起——就是巨大的 AR 眼镜机会。10 年前的 Google Glass 方向是对的：最轻的可穿戴日常设备。我们可能处于 AR 的间歇期，但我非常看好那个形态。"
</div>

</div>

---
layout: default
---

# Ramp Econ Lab：1% 企业支出的宏观望远镜

<div class="mt-4 text-sm leading-relaxed">

Ramp 的经济研究团队追踪了约 **1% 的美国企业支出**。

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**AI 支出的宏观图景**
- Glyman 引述 Elon 的比喻："超音速海啸"
- 从几年前几乎不存在的品类，到未来 12 个月可能达到 **美国 GDP 的 1%**
- 数据实时更新——不像传统经济指标延迟一个季度
- 研究成果登上 Financial Times、Wall Street Journal 头版

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**对业务的实际影响**
- 帮助客户理解行业趋势，调整战略
- 品牌效应："在杂志、播客上看到 Ramp → 已经提供了价值 → 对话更深更高效"
- 与全球最知名的品牌竞争时，知名度就是转化率
- 长期驱动增长

</div>

</div>

<div class="mt-4 text-sm">
Glyman 还提到 Ramp 的生成式接口战略：B2B SaaS 的传统问题是人们想要不同的视图（AP 文员 vs 会计 vs CFO）。AI 可以根据身份和使用模式动态生成界面——让强大产品感觉简单。
</div>

</div>

---
layout: default
---

# 企业 AI ROI：从可见到可控

<div class="mt-4 text-sm leading-relaxed">

Ramp 的 token 支出管理产品的核心逻辑：

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 my-3">

**三步框架**：可见 → 对标 → 控制

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**第一步：可见**
- 连接 API key，数分钟内显示全貌
- 不再等月度账单
- 按人员/团队/模型维度拆分
- 谁在用什么模型、花了多少钱

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**第二步：对标**
- 最优公司的实践：缓存率、路由策略
- 异常检测：某人突然从 $1,000/月跳到 $800/小时
- 开启 Fast Mode（推理模式）可能导致多倍成本
- 未使用缓存 = 超支

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**第三步：控制**
- 预算上限和审批流程
- 基础的分析层面 → 更多高级机会
- 小模型训练、动态路由
- 整个空间还有很多可以构建

</div>

</div>

<div class="mt-4 text-sm">
<strong>一个有趣的发现</strong>：关于 AI 支出，"人们其实想做好"。就像公司卡——你告诉某人"这笔超规了"，违规支出会立即下降。透明本身就能推动效率提升。
</div>

</div>

---
layout: default
---

# AI 的地缘政治杠杆

<div class="mt-4 text-sm leading-relaxed">

Anthropic 国家安全政策负责人 Tarun Chhabra 在 Aspen 安全论坛上透露的新数据：

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Anthropic 的反蒸馏战争**
- 每周关停 **数百万** 蒸馏账户
- 不只是一家公司或一个 IP——是高度分布式攻击
- 存在整家公司专门转售 Claude/API token 作为蒸馏代理
- 这种转售公司可以快速做到 $100M 年营收——因为买家是实验室

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**政策层面的动作**
- 首次点名 **智谱 (Zhipu)**：称 GLM 可能是"目前市场上最先进的中国模型"，带来显著的网络安全挑战
- 之前已点名 DeepSeek、阿里巴巴、Moonshot、MiniMax
- 暗示 Anthropic 将扩展 **Mythos** 的访问范围，确保网络防御方有公平竞争
- 建议美国政府联合盟友限制中国模型全球采用，类似华为/ZTE 模式

</div>

</div>

</div>

---
layout: default
---

# 从这期节目中浮现的三个核心叙事

<div class="grid grid-cols-1 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**叙事一：AI 正在从"技术问题"变成"金融问题"** — Ramp 客户 21 倍 token 增长、VC "赌场筹码"心态、TSMC 万亿美元赌注都在说明同一个趋势：AI 的下一阶段由资本分配效率决定，而不是模型性能。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**叙事二：开源 AI 是下一个地缘政治战场** — 蒸馏争议、Anthropic 百万级账户关停、Beijing 限制模型出海、Inkling 的应时发布——开源生态已成为国家竞争力的延伸。美国公司不再只是"相对于中国较落后"，而是在主动抢占位置。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**叙事三：垂直整合是新硬科技的默认答案** — Senra 不做 SaaS 而做线束成品、Roblox 自建数据中心而非依赖云、TSMC 在美国从头建厂——"只做软件"的时代正在让位于"从原材料到成品"的全栈控制。物理世界的问题需要物理世界的答案。

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">五位嘉宾在各自领域中最值得记住的话：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"We trained it to be a broad, balanced foundational model, strong across many domains, flexible enough to adapt."
<div class="text-xs opacity-60 mt-1">— Mira Murati 对 Wall Street Journal 谈 Inkling 的定位</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"Imagine you're that monkey and you just keep hitting like the triple 20. Every time you throw it, you're like, this is weird."
<div class="text-xs opacity-60 mt-1">— Everett Randle 形容风投界的"不可避免性"焦虑</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"Making a real effort to not take for granted the $3 Uber across town era of AI."
<div class="text-xs opacity-60 mt-1">— Everett Randle 2024 年 1 月推文，精准预言了 token 成本的爆炸</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"Where are the good Western models? Look at the top ten on OpenRouter — all of them are Chinese."
<div class="text-xs opacity-60 mt-1">— Everett Randle 在 Harry Stebbings 播客上的尖锐提问</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"In the last four months alone, Ramp customer spend on tokens has grown by 21 times."
<div class="text-xs opacity-60 mt-1">— Eric Glyman 揭示 AI 支出增长速度</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"Think of it like a Cheesecake Factory trying to scale it. There's no culinary schools and no recipes."
<div class="text-xs opacity-60 mt-1">— Jordan Black 解释为什么线束行业是 $165B 的混乱市场</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得铭记的观点：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"Going from black and white movies to color movies — no one has the expectation that a game should be photo realistic. We just aren't used to it."
<div class="text-xs opacity-60 mt-1">— David Baszucki 谈 Roblox 的照片级真实游戏愿景</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"The cost benefits of our infrastructure may be roughly 3x...an enormous advantage of taking all that money, pushing it to creators rather than cloud providers."
<div class="text-xs opacity-60 mt-1">— David Baszucki 谈自建基础设施的 10 年远见</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"An uncapped corporate card. The meter's not running and you don't see it."
<div class="text-xs opacity-60 mt-1">— Eric Glyman 形容 token 支出的失控风险</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"The bullshit's over — we're just going to take over and standardize the entire thing."
<div class="text-xs opacity-60 mt-1">— Jordan Black 宣言 Senra 将重塑 $165B 线束行业</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"Seeing a nice at-scale marketplace with clear network effects — it's like a drink of water in the desert."
<div class="text-xs opacity-60 mt-1">— Everett Randle 谈在 AI 时代寻找网络效应护城河</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"Anthropic is shutting down distillation accounts on the order of millions of accounts per week."
<div class="text-xs opacity-60 mt-1">— 主持人引述 Anthropic 国家安全负责人在 Aspen 论坛的发言</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-10 text-sm opacity-70">
观看完整节目：TBPN Ultradome · 2026 年 7 月 16 日
</div>

<div class="mt-4 text-xs opacity-40">
嘉宾：Everett Randle (Benchmark) · Eric Glyman (Ramp) · Jordan Black (Senra Systems) · David Baszucki (Roblox)
<br/>
主持：Tyler Cosgrove 客串
</div>
