---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Cerebras IPO, WarshTime, General Catalyst Ad Reactions | Andrew Feldman, Amy Reinhard, Ben Hylak, Doug O''Laughlin, Eric Vishria, Steve Vassallo'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 一盘大棋：Cerebras IPO、AI 推理速度革命<br>与芯片供应链的范式转移

<div class="text-lg opacity-70 mt-8">
TBPN · 2026 年 5 月 14 日 · 3 小时 14 分钟
</div>

<div class="text-sm opacity-50 mt-4">
Andrew Feldman (Cerebras CEO) · Amy Reinhard (Netflix 广告总裁) · Ben Hylak (Raindrop CTO)<br>
Doug O'Laughlin (Semi Analysis) · Eric Vishria (Benchmark) · Steve Vassallo (Foundation Capital)
</div>

<div class="text-xs opacity-40 mt-8">
封面图来自 Cerebras IPO 当日在纳斯达克的团队合影
</div>

---
layout: default
---

# 为什么这期节目值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**Cerebras IPO 当日**  
晶圆级芯片公司以 $488 亿估值上市，CEO Andrew Feldman 与早期投资人 Eric Vishria、Steve Vassallo 在 IPO 当天复盘十年半导体创业故事。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**AI 推理速度的价值重估**  
Semi Analysis 数据揭示：用户愿为快速推理支付 6 倍溢价，"快"成为 AI 芯片竞争的生产力杠杆。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Kevin Warsh 出任美联储主席**  
54-45 的史上最窄参议院确认票，在 stagflation 阴影和特朗普的政治压力下接管美联储。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**VC 品牌战与 AI 基础设施**  
General Catalyst 的"攻击性广告"引发激辩；Agent 可观测性、空间数据中心、Figure 机器人争议同场出现。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded col-span-2">

**Netflix 广告业务**  
广告业务总裁 Amy Reinhard 首次接受外部播客对谈，详解 Netflix 从"无广告"转向自建广告技术栈的 18 个月历程。

</div>

</div>

---
layout: default
---

# Cerebras：餐盘大小的芯片

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Cerebras 的核心理念**简单到危险：不把晶圆切成小块（传统 GPU/CPU 的做法），而是**用整片晶圆做一个芯片**。

主持人将其描述为：
> "It's one of those simple ideas taken deadly seriously."

WSE-3 芯片拥有 4 万亿晶体管，是地球上最大的单一处理器。传统芯片公司在一个晶圆上刻几十个芯片然后切割；Cerebras 把整片晶圆当成一个芯片来设计。

</div>

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mt-2">

**为什么这很难**
- **良率问题**：晶圆上每个缺陷都会废掉整颗芯片（传统做法扔掉坏的那颗即可）
- **散热与供电**：餐盘大小的芯片，功耗和散热是物理级挑战
- **内存架构**：全部使用片上 SRAM（最快但最贵的内存）—— SRAM 缩放已接近物理极限

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded mt-4">

**解决方案**：冗余核心设计。芯片上有备用核心，遇到缺陷时自动绕过，不激活全部核心。这是 Andrew Feldman 团队最关键的工程突破之一。

</div>

</div>

</div>

---
layout: default
---

# Cerebras IPO 数字速览

<div class="grid grid-cols-4 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### IPO 估值
<div class="text-3xl font-bold text-blue-600 my-2">$488 亿</div>
<div class="text-xs opacity-70">2026 年 5 月上市</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 开盘价
<div class="text-3xl font-bold text-green-600 my-2">$3.50</div>
<div class="text-xs opacity-70">发行价 $1.85，<br>当日翻倍</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 融资规模
<div class="text-3xl font-bold text-purple-600 my-2">~$100 亿</div>
<div class="text-xs opacity-70">最初目标 $30 亿，<br>多次上调</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 首日市值
<div class="text-3xl font-bold text-orange-600 my-2">$640 亿</div>
<div class="text-xs opacity-70">盘中高点，<br>$350/股</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**订购簿需求极度旺盛**：三分之一的订购者获得了零分配。前 25 大机构投资者拿走了 60% 的份额。预测市场甚至没有设置 $50 亿以上的 IPO 估值类别 —— 这意味着多数人低估了需求。

</div>

---
layout: two-cols
---

# "十年磨一剑"的过夜成功

<div class="text-sm">

Cerebras 成立 10 年，经历了从"无人问津"到"一夜成名"的完整周期。

**早期融资异常顺利**（Eric Vishria 回忆）：
- 2016 年 Series A：打了 8 个电话，拿了 8 个 term sheet
- 选择了 Benchmark、Foundation Capital 和 Eclipse

**但中间有漫长的低迷期**（2020-2023）：
- AI 被认为"有趣但没用"
- 芯片造出来了、速度超快 —— **没人关心**

转折点：2025 年模型变得足够聪明，推理需求爆发。Cerebras 从训练转向推理，抓住了 coding agent 对速度的需求。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./valuation-journey.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Andrew Feldman：当 AI 还是"新奇玩具"时

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"And nobody cares about how fast you are when it's a novelty. But starting with GPT and in 2025, the models got so darn smart they became useful. And suddenly everybody wanted to use AI."
</div>

<div class="text-sm opacity-70 mt-2">— Andrew Feldman, Cerebras CEO</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**2016-2019：从理论到原型**
- WSE-1 是"高级原型"而非量产产品
- 2019 年 8 月攻克核心良率问题
- 但市场对 AI 芯片没有紧迫需求

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**2025：拐点来临**
- ChatGPT 推动的推理需求爆发
- Coding 场景让"速度"变成付费意愿
- Cerebras 在 GPT 5.3 Spark / Codex 中上线

</div>

</div>

<div class="text-sm opacity-70 mt-4">
**作者概括**：Feldman 总结的硬件创业规律 —— 第一代是原型，第二代解决工程问题，第三代才真正起飞。WSE-3 就是他们的"第三代"。
</div>

---
layout: two-cols
---

# Semi Analysis：速度溢价的数据证据

<div class="text-sm">

Doug O'Laughlin 的团队以自身 AI 支出为样本：4 月年化运营率达 **$1000 万**，其中 **80%** 花在 Opus 4.6 Fast Mode。

**Fast Mode 经济学**：
- 价格是标准模式的 **6 倍**
- 速度提升约 **2 倍**
- 用户实际行为：宁愿付 6 倍价格换 2 倍速度

这违背了"人们会选最聪明模型"的假设。**实际行为是选择最快模型。**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./speed-premium.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么"快"值更多钱？

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**类比 1：两个能力相同的员工**
如果其中一人速度快 5 倍，他能创造多得多
的价值。多年收入 2 倍的销售，
工资可能高 5-6 倍。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**类比 2：电商延迟**
每 100 毫秒延迟导致 Amazon 损失 1% 的销售额（经典假说）。页面加载慢 → 用户分心 → 离开。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**类比 3：LLM 用户体验**
逐字流式输出有一种"可爱"的感觉 —— 但当你能直接翻完一整页维基百科时，体验完全不同。Coding 场景尤其如此：用户只想要**立刻拿到代码**。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**Core Insight**
主持人："用户正在为快速推理支付不成比例的高溢价，这对 Cerebras 是天大的好信号，因为它的核心价值主张就是快。"

</div>

</div>

---
layout: two-cols
---

# Cerebras 的技术挑战：SRAM 天花板

<div class="text-sm">

Semi Analysis 指出的核心风险：

**SRAM 缩放已死** —— 每个新的半导体节点，SRAM 不再显著缩小。

- WSE-2：40 GB 片上内存
- WSE-3：44 GB（仅 +10%）
- 如果下一代翻倍到 88 GB，需要大量牺牲计算面积

**大模型困境**：万亿参数模型需要远超单晶圆能承载的内存。跨芯片连接 Cerebras 系统（"离开孤岛"）是其弱项。

**但**：在 agentic 工作流中，大模型（boss）可以把任务委派给 Cerebras 上的小模型（worker）—— "模型联邦"的概念。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sram-scaling.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# "模型联邦"：大模型委托小模型

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"I think that is sort of a notion of a confederacy of models — that there's a collection of different models and one of the things we thought about early on was how to interoperate in that environment."
</div>

<div class="text-sm opacity-70 mt-2">— Andrew Feldman, Cerebras CEO</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

### Boss 模型
- 万亿参数级
- 负责战略决策和委派
- 运行在 NVL72 / TPU Pod
- 像"高级副总裁"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-400 rounded">

### Worker 模型
- 数千亿参数
- 执行并行化子任务
- 运行在 Cerebras 上
- 极速批量推理

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-400 rounded">

### 编排层
- 数据库查询、网页搜索
- 不同芯片类型的混合调度
- Agent 自主路由
- "这不是替代，是互补"

</div>

</div>

<div class="text-sm opacity-70 mt-4">
主持人推论：就像 CPU 和 GPU 最终共存一样，不同架构的 AI 芯片在 agent 网络中可能是互补关系 —— Cerebras 不需要杀 GPGPU，1% 的市场就够大了。
</div>

---
layout: two-cols
---

# CUDA 锁定被高估了吗？

<div class="text-sm">

Andrew Feldman 的论点：

**三条证据**：
- **Gemini 3**（顶级模型）在 TPU 上训练，零 CUDA
- **Anthropic 的模型**在 Tranium 上训练，零 CUDA
- **Cerebras** 在 Codex 5.3 Spark 中服务推理，零 CUDA

"一些最好的模型在没有 CUDA 的情况下做出来了 —— 这种'锁定'可能被夸大了。"

**推理**：软件生态正在去 CUDA 化，Mythos 级别的蒸馏技术可能让模型更容易在不同硬件上运行。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cuda-myth.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Andrew Feldman：推理速度 = 宽带互联网时刻

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"I mean, much would I have to pay you to swap out broadband at home and bring in dial up? ... No way. It just wouldn't be worth it. The community is gonna engage with inference in the same way and that fast inference is gonna be all of the market."
</div>

<div class="text-sm opacity-70 mt-2">— Andrew Feldman</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 拨号上网
<div class="text-lg font-bold text-red-600 my-2">56 Kbps</div>
<div class="text-xs opacity-70">已从市场消失<br>没人会付费使用</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 宽带
<div class="text-lg font-bold text-yellow-600 my-2">100 Mbps</div>
<div class="text-xs opacity-70">当前标准<br>Netflix 从 DVD 变成制片厂</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 快速推理
<div class="text-lg font-bold text-green-600 my-2">实时响应</div>
<div class="text-xs opacity-70">下一代标准<br>AI 原生应用才刚起步</div>

</div>

</div>

---
layout: default
---

# Semi Analysis 的冷静视角：1% 的巨大市场

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg">
"When it first started, was like, oh, yeah. What are you going to do? 1% of a very large market? That's going to be a few hundred million. But now that we're here, not ironically, 1% of a very large market works."
</div>

<div class="text-sm opacity-70 mt-2">— Doug O'Laughlin, Semi Analysis</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Doug 的核心判断**：
- Cerebras 是一个"解决方案在寻找问题"的公司 —— 但 LLM 规模的爆炸远超任何人的预期，反而创造了它的市场
- SRAM 架构对某种尺寸的模型是**完美优化**的
- 关键问题不是 Cerebras 好不好，而是**那部分市场到底有多大**

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**Doug 的另类观察**：
> "In a shortage, it's not the best company who wins. It's the second, third, fourth best companies where the demand overflows."

在短缺市场中，**第二名、第三名的公司才是需求溢出最大的受益者**。Cerebras 正处在这个位置。

</div>

</div>

---
layout: default
---

# Groq、Etched、SambaNova：芯片差异化路线图

<div class="text-sm mt-2">

Doug O'Laughlin 解释了当前 AI 芯片架构差异化的核心逻辑：**推理的 disaggregation（解耦）**—— 将 transformer 的不同部分拆分到专门优化的硬件上。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Groq + NVIDIA 组合**
- Prefill（计算密集型）→ GPU
- Decode（内存带宽密集型）→ Groq LPU
- GV200 机架可将激活值传递给 Groq 的 SRAM，实现极致加速
- 与 Cerebras 的关键区别：Groq 有"插头"可以对接 GPU

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**Cerebras 的定位差异**
- "孤岛"式计算：片上所有通信极快
- 离开芯片的通信很慢（低互联带宽）
- 适合**完整运行在单芯片上的任务**，不适合需要跨芯片通信的大模型

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**其他玩家**
- **Etched**：大型 systolic array，YOLO 赌注
- **MatX**：有趣的内存方案
- **SambaNova**：Intel 正在关注
- AMD：还在追"上一件事"（rack scale-up）

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**关键不确定性**
> "The correct optimization per hardware rack is going to depend on the shape and architecture of the model, and we don't really know with high precision what is what."

模型架构本身仍在快速演化 —— 今天的最优硬件组合明天可能完全不同。

</div>

</div>

---
layout: two-cols
---

# Cerebras 投资者视角：Eric Vishria (Benchmark)

<div class="text-sm">

**2016 年 Series A 的决策逻辑**：

Eric Vishria 自认当时对硬件有多难"极其天真"。但他被一个简单的 slide 打动：

> "GPUs actually suck for deep learning. They just happen to be 100 times better than CPUs."

"那一刻灯泡亮了起来 —— 为什么图形处理器会是深度学习的最佳方案？"

**关键决策**：不知道哪个 AI 应用会胜出，所以**投资基础设施**。这是一个经典的"卖铲子"逻辑。

**今天的反思**：Cerebras 从训练转向推理是董事会会议上的关键转折点 —— 联合创始人 Sean 说"我们必须追推理"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./benchmark-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Benchmark 的 VC 哲学与 Cerebras SPV

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"We don't know what application is going to work. We should invest in infrastructure. This is an amazing team and a really provocative idea."
</div>

<div class="text-sm opacity-70 mt-2">— Eric Vishria, Benchmark</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Fund VII（2011）
<div class="text-xs opacity-70 mt-2">Uber · Snapchat · Elastic<br>Stitch Fix · Discord · WeWork</div>
<div class="text-sm font-bold mt-2">消费移动互联网</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Fund VIII（2014）
<div class="text-xs opacity-70 mt-2">Confluence · Amplitude<br>Cerebras · Chainalysis</div>
<div class="text-sm font-bold mt-2">企业级 + 前沿技术</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Fund 2022
<div class="text-xs opacity-70 mt-2">Sierra · Fireworks · Ligora<br>LangChain · Merkor · Reductor</div>
<div class="text-sm font-bold mt-2">AI 应用 + 基础设施</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
**关于 Benchmark SPV**：2025 年 2 月，Benchmark 破例为 Cerebras 设立了 SPV（$230 亿估值轮）。Vishria："我们热爱早期投资，但偶尔看到特殊机会也会跳进去。"
</div>

---
layout: two-cols
---

# Steve Vassallo：Cerebras = 五家创业公司合体

<div class="text-sm">

Foundation Capital 的 Steve Vassallo 是 Cerebras 第一个 term sheet 的发出者。他描述了这个项目的艰难程度：

**五个"硬问题"叠加**：
1. 如何 yield 一张餐盘大小的晶圆
2. 如何供电（热力学极限）
3. 如何散热
4. 如何维持数千连接上的信号连续性
5. 如何集成到系统和数据中心

"Andrew 是个好谈判者，但他学会了**不能跟热力学第二定律谈判**。"

**风险叠加**：五个问题是 stacked 的 —— 任何一个失败都等于全盘皆输。这是"combinatorial risk"（组合风险）。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./five-startups.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Vassallo 的机器人哲学：停止称它们为"机器人"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"The greatest compliment for most of these systems is when you stop calling them a robot. You actually call them a forklift, you call it a washing machine."
</div>

<div class="text-sm opacity-70 mt-2">— Steve Vassallo, Foundation Capital</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

**Vassallo 对人形机器人的怀疑**

- 不看好 humanoid 形态 —— 搬货架不需要人形
- 机器人应该从**具体应用场景**出发设计，而非从"像人"出发
- "当技术融入背景，你只关注它能做什么的时候，才是真正的成功"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-400 rounded">

**Cerebras 与 Solana 的隐秘联系**

- Anatoly Yakovenko（Solana 创始人）选择 Foundation Capital 的**原因之一**是：他们投了 Cerebras
- "你们认真对待硬问题" —— 分布式系统、低延迟计算、密码学
- 加密 L1 和 AI 芯片吸引的是**同一类工程师**

</div>

</div>

<div class="text-sm opacity-70 mt-4">
**作者概括**：Vassallo 的核心投资框架是"工作负载驱动"（workload-driven）—— 当某一类计算需求出现指数级增长时，专为该工作负载设计的新硬件就存在机会。
</div>

---
layout: default
---

# 公开市场 CEO 的三条建议

<div class="text-sm opacity-60 mt-2">Steve Vassallo 给首次上市创始人的忠告</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-4xl font-bold text-blue-600 my-2">1</div>

### 系好安全带
"股价波动通常跟你每天的所作所为**没有任何关系**。你必须训练你的团队不要被股价牵着走 —— 明天可能就有一个新模型发布颠覆市场叙事。"

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-4xl font-bold text-orange-600 my-2">2</div>

### 学会"长大"
"Andrew 和 CFO 马上要上 earnings call 了。他们需要谈**业务的业务**，而不只是技术。这需要一种很多创始人尚未建立的纪律和规划能力。"

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

<div class="text-4xl font-bold text-green-600 my-2">3</div>

### 别忘记你的超能力
"季度思维是最有毒的东西。不要因为追季度目标而丢失了让你特殊的长远视野 —— 你在为下一代、下下代构建系统。"

</div>

</div>

---
layout: two-cols
---

# Kevin Warsh：新美联储主席

<div class="text-sm">

**确认投票**：54-45，几乎完全按党派划线。唯一投赞成票的民主党人是 John Fetterman（宾夕法尼亚）。

**历史背景**：
- 自 1977 年参议院确认成为法定要求以来，这是**最窄的确认票差**
- 对比：Jerome Powell 两届任期各获至少 80 票
- Janet Yellen（2014）：56-26（许多参议员因暴雪缺席）

**Warsh 的背景**：
- 56 岁，前 Morgan Stanley 投行家
- 2006 年 35 岁成为史上最年轻美联储理事
- 2008 年金融危机中扮演华尔街-美联储之间的"桥梁"角色
- 离开美联储后成为其批评者

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./warsh-fed.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Stagflation 困境：Warsh 接手的"烫手山芋"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

### 为什么 stagflation 是 Fed 最难的题

<table class="text-sm w-full mt-2">
<tbody><tr><td class="py-1 pr-2">高增长 + 高通胀</td><td class="py-1">→ 加息可以同时压制两者</td></tr>
<tr><td class="py-1 pr-2">低增长 + 低通胀</td><td class="py-1">→ 降息可以同时刺激两者</td></tr>
<tr><td class="py-1 pr-2 font-bold">低增长 + 高通胀</td><td class="py-1 font-bold">→ 任何操作都是取舍</td></tr>
</tbody></table>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 政治压力前所未有

- 特朗普公开要求降息
- Warsh 在参议院听证会上誓言维护 Fed 的**货币独立性**，但民主党人并不信服
- Jerome Powell 拒绝离开美联储理事会："你得把我拖出去"（"You're gonna have to drag me out of here"）
- 美联储被拖入政治漩涡的深度是当代罕见的

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
**主持人观点**：Warsh 曾在 2011 年离开美联储，因为担心其刺激政策走得太远。现在他以主席身份回归，面对的却是需要降息 + 控制通胀的两难 —— 讽刺意味十足，但也是对他早先批评立场的一次"实战检验"。
</div>

---
layout: default
---

# TSMC 供应链：清洁室的瓶颈

<div class="text-sm mt-2">
Doug O'Laughlin 解释了为什么 AI 芯片供应持续紧张的根本原因不只是需求端。
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**TSMC 的核心瓶颈**
> "We're gonna run out of TSMC engineers in the island of Taiwan pretty soon."

- **清洁室**是长周期资产 —— 从决定到投产需 **3 年**
- TSMC 两年前没法确信今天的需求："我们有一栋 10,000 平方英尺的房子，需要买一栋 50,000 平方英尺的 —— 当时没那么确定"
- TSMC 选择**渐进式**而非革命式扩张（每年 CapEx 增长 ~40%）

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**清洁室的"可替代性"**
- 市场上每一寸未被使用的清洁室都在被抢购
- Micron 收购了旧电力芯片厂
- 显示面板厂的清洁室被改造成芯片产线
- **Intel 18A** 的良率一旦达标，将成为 TSMC N3 紧缺的重要替代

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
**地缘政治动态**：Doug 观察到行政分支（白宫）想要达成交易（放松出口管制），但立法分支（国会）正在推动更多出口管制法案。特朗普爱做交易，可能在 H200 名单上进一步松绑。
</div>

---
layout: two-cols
---

# Netflix 的广告业务转型

<div class="text-sm">

Amy Reinhard 掌管 Netflix 广告业务 2.5 年。核心举措：

**"Build vs Buy"**：最初与 Microsoft 合作快速启动，18 个月前决定自建广告技术栈，一年前上线。

**关键战略要素**：
- **低广告负载**、低频率 —— 优先保证会员体验
- **全漏斗方案**：品牌广告 + 下漏斗转化 + 购买意向驱动
- **隐私安全**为首要设计原则
- **QR 码**正在回归（尤其在播客/YouTube 场景）
- **垂直短视频广告**：2027 年推出

**Netflix 学到了什么**：广告是**关系生意**，而 Netflix 此前从未有过销售团队 —— 组织层面的学习比技术层面更大。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./netflix-ads.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Netflix：内容创作与广告的融合

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"Shonda Rhimes was used to writing for broadcast and network for many, many years. So when she writes a lot of her content, she's already thinking about where those natural breaks are."
</div>

<div class="text-sm opacity-70 mt-2">— Amy Reinhard, President of Ads, Netflix</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**两种内容创作范式**
- 传统电视编剧（如 Shonda Rhimes）天然会在剧本中预留广告断点
- 流媒体原生创作者不考虑广告 —— Netflix 的 AI 系统需要找到"自然断点"
- 关键原则：广告不能出现在台词中间或打断动作

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**广告对内容节奏的潜在影响**
- 主持人提出了一个有趣的问题：Netflix 近年来的内容节奏明显更快（如 The Rip 开场 2 秒就出现 Matt Damon）
- 广告的引入是否会催生新的"内容节奏模式"？
- Reinhard 的回答：最终取决于创作者 —— Netflix 的技术可以适应任何创作风格

</div>

</div>

---
layout: two-cols
---

# General Catalyst vs a16z：VC 广告战

<div class="text-sm">

General Catalyst 发布了一支 30 秒"攻击性广告"：

- 两位演员扮演 GC 和 VC
- VC 带来一只名为 "Woof AI" 的 AI 机器狗
- GC 表示"我们对这类东西有很高的责任标准"
- 机器狗失控、破坏办公室 —— 广告以混乱收场

**Marc Andreessen 的反应**：连发 ~45 条引用推文，放大了事件

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vc-ad-war.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# VC 品牌战背后的深层逻辑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

### 反讽：投资组合高度重叠

GC 和 a16z 在几乎所有热门公司中都有共同投资：
- **Calc AI** 和 **Polymarket**（正好是当前最具道德争议的科技公司）
- **Anduril**（曾被视为"疯狂"的国防科技，现在已被硅谷广泛接受）

**结论**：他们站在同一张 cap table 上是常态 —— 这不是真正的价值对立。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 主持人的核心批评

**"这对整个行业不利"**：两个平台级基金互相攻击，而且是"ad hominem"式的攻击 —— 在自己的玻璃城堡里扔石头。

**更好的策略**（以 a16z 自身为例）：
- 把"敌人"设为**停滞**、**NIMBYism**、**地缘竞争**
- 这是整个行业可以团结的"反派"
- GC 的策略应该是成为"更有品位的 VC" —— 在 Economist、FT、WSJ 投放广告

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
**Hemant (GC CEO) 的"10x"争议**（旁注）：他曾说"triple-double 不再够好，AI 时代需要 10 倍年增长"—— 虽然引发争议但这是 market analysis，不针对任何个人。这种"思想领袖"路线比攻击性广告有效得多。
</div>

---
layout: two-cols
---

# Ben Hylak / Raindrop：Agent 可观测性

<div class="text-sm">

Raindrop 做的是**agent 自愈** —— 当生产环境中的 agent 出问题时，自动检测并修复。

**当前痛点**：
- Agent 在本地开发时完全没有标准观测方式
- 开发者只能 console.log 打印 trace
- **Claude Code** 等编码 agent 看不到自己的 trace → 遇到错误只能"瞎编"（make shit up）

**今天发布**：`braindrop.ai/workshop` —— 免费开源本地 trace 查看器

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Ben Hylak：AGI = 循环次数

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"A lot of 'do we have AGI or not' is how many loops in a row can you do before things just end catastrophically."
</div>

<div class="text-sm opacity-70 mt-2">— Ben Hylak, Raindrop CTO</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**Agent 的"衰退问题"**
- 一个循环可以完美执行
- 多个循环叠加 → 错误逐步累积 → 最终"灾难性"失败
- 这不是 AGI 的定义问题，而是**工程可靠性**问题

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**API 化还是 UI 化？**

Ben 认为公司"被迫"将产品 API 化（PhotoShop → MCP 集成）是一个**危险趋势**：
- 如果没人触碰你的 UI，你就失去了用户触点
- 类比 App Clips：星巴克不想让你不下载 App 就点单
- 未来会有"激励不再对齐"的转折点

</div>

</div>

---
layout: default
---

# Figure Robotics 争议：自主还是遥操作？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Brett Adcock 的主张**
- **24 小时连续自主运行**，零故障
- 分拣 32,000 个包裹
- 速度达到**人类水平**（约 3 秒/包裹）
- Helix 2 全板载神经网络，**无遥操作**
- 机器人自主离开进行维护，另一台接替

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

**社区质疑**
- 机器人在跨体伸手时会抬起手臂 —— 可能是遮挡摄像头传感器，也可能是人类操作员的手部跟踪
- "如果只是预先从 VR 遥操作数据中学习的策略呢？"
- Figure 回应：手臂抬起是为了避免碰到金属板

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
**主持人的判断**：即使存在某种程度的遥操作数据训练，这个 demo 仍然令人印象深刻。但更根本的问题是 —— 人形机器人真的是物流分拣的最佳形态吗？现有的专用分拣机已经运转了几十年。
</div>

---
layout: two-cols
---

# Doug O'Laughlin：AI 泡沫还是工业革命？

<div class="text-sm">

Doug 对 AI 泡沫的判断：

- 还没有达到真正顶部的特征：**没有人都在喊 bullish**
- 需要看到 OpenAI 或 Anthropic 上市才能说周期结束
- "如果你看大格局......这是比互联网更大的事"

**关于 GDP**：
> "GDP might be broken as a concept. It got invented in the 1930s to measure how much output you could make, to not screw over the domestic economy for World War II."

当 AI 创造的产出难以被传统统计捕获时，我们可能需要**新的测量体系**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bubble-check.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI 时代：比互联网更大？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 加密 vs AI：不同的底层逻辑

**加密周期**：需要社区、DAO、代币 —— 基础设施本身在建设中。很多承诺依赖"还没建好的东西"。

**AI 周期**：基础设施已经存在（互联网）。AI 是**加速层**—— 它让已有的一切更快、更智能。

主持人指出：你不能简单地用互联网泡沫或加密泡沫的框架来 comp AI 周期 —— 底层条件完全不同。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 泡沫检测器（主持人的非正式清单）

- Semi Analysis 的 token 支出是否超过收入的 120%？  
  → 还不是
- 公开市场的估值水平？
  → Google/Amazon/Apple 的 PE 仍合理
- Lab 公司的营收倍数？
  → 比 .com 时代的峰值低 1-2 个数量级

**结论**：即使有泡沫特征，也是"泡沫里有真正的工业革命"。

</div>

</div>

---
layout: default
---

# 空间数据中心：十年后的可能性

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Andrew Feldman 的务实观点**
> "We're not three or five years away, we're eight to twelve years away. That doesn't mean we shouldn't be working on it."

- Cerebras 的"大芯片"在空间有独特优势：跨芯片通信需求更少
- 但关键挑战不在芯片 —— 在轨道上的散热、供电、维护
- Feldman 的任务：把自己的部分解决好，等待市场成熟

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**Doug O'Laughlin 的观点**

> "Something a pound on Earth is probably ten times more expensive in space."

- 经济性暂不支持近期的空间数据中心
- 更可能的路径：把数据中心放在**美国偏远地区 + 光纤连接**
- 如果地面受阻（municipal pushback），会溢出到巴西等西半球其他国家
- 但不排除 Anthropic Colossus 级别的长期远景

</div>

</div>

---
layout: default
---

# 工作负载驱动：为什么 Cerebras 值得存在

<div class="text-sm mt-2">
Steve Vassallo 的投资框架可以解释 Cerebras 从"疯狂想法"到 IPO 的整个旅程：
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### PC 时代
<div class="text-xs opacity-70 mt-2">串行编程</div>
<div class="text-lg font-bold text-blue-600 my-2">x86</div>
<div class="text-xs opacity-70">一种工作负载 → 一种芯片架构，统治了几十年</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 图形时代
<div class="text-xs opacity-70 mt-2">并行浮点运算</div>
<div class="text-lg font-bold text-green-600 my-2">GPU</div>
<div class="text-xs opacity-70">渲染图形的新工作负载催生了 GPU</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### AI 时代
<div class="text-xs opacity-70 mt-2">大规模矩阵乘法</div>
<div class="text-lg font-bold text-purple-600 my-2">Wafer-Scale</div>
<div class="text-xs opacity-70">AI 工作负载的指数级增长创造了新架构的机会窗口</div>

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
**当工作负载出现"阶跃式"变化时，通用架构的优势可能变成劣势**。这正是 Cerebras 下注的核心逻辑 —— 而 2025 年的推理需求爆炸最终验证了这个赌注。
</div>

---
layout: default
---

# 另一个交叉验证：Solana 选择了 Foundation Capital

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Anatoly Yakovenko, co-founder of Solana, part of the reason why he chose to work with us back in March 2018, about two years after we invested in Cerebras, was because we were investors in Cerebras. He was like, 'you guys take hard problems seriously.'"
</div>

<div class="text-sm opacity-70 mt-2">— Steve Vassallo</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

**Yakovenko 的背景**
- Qualcomm 12 年经验
- 分布式系统（Brew OS）
- Dropbox 的规模化挑战

他寻求的不只是一个支票 —— 是一个**理解"硬问题"**的投资者伙伴。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-400 rounded">

**AI 基础设施与 Crypto L1 的共通人才池**
- 分布式系统思维
- 低延迟计算
- 密码学 / 椭圆曲线
- "系统思维者" —— 看到的是相同的底层问题集

</div>

</div>

---
layout: default
---

# TBPN 全程覆盖的其他信号

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Elon Musk vs OpenAI 诉讼**
- 结案陈词日至 IPO 日同一天
- 陪审团正在审议；预测市场给 Musk 30% 胜率
- 核心争议：是否存在明确协议约束 OpenAI 必须保持非营利

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Trump 的日内交易**
- Q1 2026 完成 3,642 笔股票交易
- 每天约 40 笔
- 涉及 NVDA、MSFT、Broadcom、Amazon 等数百只股票
- 历史上无先例的总统级交易活跃度

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Figma 收入加速**
- Q1 收入增长 46%（连续第二个季度加速）
- "Not dead." — Dylan Field
- 股价当日上涨 8.6%
- 在 AI 编码工具爆发时代的一次重要反叙事

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Wix 的 SaaSpocalypse**
- $300 → $52，从 ZIRP 时代跌去 80%+
- vibe coding 工具对"建站"品类的直接冲击
- Squarespace 在 2024 年 10 月被私有化 —— 时间点不幸

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm">

**Vercel License Plate 营销**
- 一位 Lyft 司机的车牌是 "VERCEL"
- 是巧合还是游击营销？
- 2026 年的另类增长策略

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Runway 的 AI 飓风**
- 用 Runway 生成完整飓风报道（含音频）
- 小型新闻机构不需要好莱坞 VFX 团队
- 2026 年的视觉特效民主化

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期 3 小时对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Nobody cares about how fast you are when it's a novelty."
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew Feldman，解释为什么 Cerebras 在 2019 年造出了最快的芯片却没人关心，直到 2025 年 AI 变得真正有用</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"GPUs actually suck for deep learning. They just happen to be 100 times better than CPUs."
<div class="text-xs opacity-60 mt-1 not-italic">— Eric Vishria 回忆 Andrew Feldman 2016 年 Series A 路演的第 3 页 slide</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Andrew's a very good negotiator, but he's also learned that he can't negotiate with the second law of thermodynamics."
<div class="text-xs opacity-60 mt-1 not-italic">— Steve Vassallo，描述 Cerebras 面临的根本物理约束</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"1% of a very large market works."
<div class="text-xs opacity-60 mt-1 not-italic">— Doug O'Laughlin，总结 Cerebras 不需要击败 NVIDIA，只需占据 AI 芯片市场的 1%</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">从 AGI、机器人到 IPO 后的长期主义：</div>

<div class="space-y-3">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"A lot of 'do we have AGI or not' is how many loops in a row can you do before things just end catastrophically."
<div class="text-xs opacity-60 mt-1 not-italic">— Ben Hylak，将 AGI 的实际工程问题重新定义为循环可靠性</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded italic">
"The greatest compliment for most of these systems is when you stop calling them a robot. You actually call them a forklift, you call it a washing machine."
<div class="text-xs opacity-60 mt-1 not-italic">— Steve Vassallo，关于机器人真正成功的标志</div>
</div>

</div>

---
layout: default
---

# 核心金句（三）

<div class="text-sm opacity-60 mb-4">宏观测量与 IPO 后的创始人提醒：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"GDP might be broken as a concept. It got invented in the 1930s to measure how much output you could make, to not screw over the domestic economy for World War II."
<div class="text-xs opacity-60 mt-1 not-italic">— Doug O'Laughlin，关于 AI 可能如何打破我们测量经济的传统方式</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"Don't forget what made you special."
<div class="text-xs opacity-60 mt-1 not-italic">— Steve Vassallo，给 IPO 后创始人的核心建议 —— 季度思维是创新公司最毒的毒药</div>
</div>

</div>

---
layout: end
---

# 一盘更大的棋才刚刚开始

<div class="text-lg mt-8 opacity-80">
从一颗餐盘大小的芯片到 AI 推理速度的范式革命，<br>
从十年过夜成功到工业革命级别的技术浪潮 ——<br>
Cerebras 的故事远未结束，它只是 AI 基础设施大赌局中的一个注脚。
</div>

<div class="mt-8 text-sm opacity-50">
完整对谈：TBPN · 2026 年 5 月 14 日 · 3 小时 14 分钟
</div>
