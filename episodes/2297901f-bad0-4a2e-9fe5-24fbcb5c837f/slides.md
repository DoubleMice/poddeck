---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AMD CEO Lisa Su Live on TBPN | Oliver Cameron, Mohammad Norouzi, Anjney Midha, Lisa Su'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AMD CEO Lisa Su 在 TBPN

## 从 Advancing AI 2026 看芯片、世界模型与算力效率

<div class="text-sm opacity-60 mt-8">
TBPN 直播 · AMD Advancing AI 现场 · 2026年7月
</div>

<div class="text-xs opacity-50 mt-4">
嘉宾：Lisa Su（AMD CEO）、Oliver Cameron（Odyssey）、Mohammad Norouzi（Ideogram）、Anjney Midha（AMP）、Seth Cohen（Mavria）
</div>

---

# 为什么这期特别

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>AMD × Anthropic</strong><br/>
<span class="text-xs">50 亿美元、2GW 的芯片合作协议，标志着 AMD 在 AI 训练领域的重大突破</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Helios + MI450</strong><br/>
<span class="text-xs">AMD 发布新一代机架级 AI 系统，重塑数据中心格局</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>世界模型崛起</strong><br/>
<span class="text-xs">Odyssey 的 Oliver Cameron 解析世界模型如何成为 AI 的"无限训练环境"</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Output Maxing</strong><br/>
<span class="text-xs">AMP 的 Anjney Midha 揭示美国数据中心仅 15% 算力被利用的危机</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>RL 验证飞轮</strong><br/>
<span class="text-xs">从代码到室温超导：强化学习的物理验证闭环正在改变科学发现</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>核能复兴</strong><br/>
<span class="text-xs">核废料中还有 97% 的能量可利用——AI 基础设施的能源瓶颈正在被打破</span>
</div>

</div>

---

# Lisa Su：2014 到 2026，十二年转型之路

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2014 年的 AMD

- 市场份额低迷
- 产品路线图不清晰
- 行业普遍认为"CPU 已死，GPU 将接管一切"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2026 年的 AMD

- EPYC CPU + Instinct GPU + Xilinx 自适应计算
- Helios 机架系统正式发布
- Anthropic 签下 50 亿美元合作协议
- AI 时代的核心基础设施供应商

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
Lisa Su 在节目中回顾这段历程时说，半导体行业每两年就会经历一次技术趋势和市场需求的剧变——"这行永远不会让你感到无聊。"
</div>

<div class="mt-2 text-xs opacity-50">
* 嘉宾原话为 "it's one of those things where you're never gonna get bored"，此处为意译概括。
</div>

---

# AMD 的文化基因：打造伟大的产品

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">
"我们的第一信条就是打造伟大的产品。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Lisa Su，AMD CEO</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Lisa Su 带给了 AMD 什么？**
- 与 CTO Mark Papermaster 一起建立了**可预测的路线图执行力**
- "我们不仅要把最好的技术推向市场，还要成为可靠的合作伙伴"
- 坚持开放生态，拒绝封闭锁定

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**"AMD 方式"（The AMD Way）**
- 在合作中创新（partnership + co-innovation）
- 开放生态系统
- 为每个工作负载选择最佳计算引擎
- 一加一大于三

</div>

</div>

<div class="mt-3 text-xs opacity-50">
* "one plus one is greater than three" 为 Lisa Su 原话，grep 验证通过。
</div>

---
layout: two-cols
---

# Advancing AI 2026：三大发布

AMD 在本次大会上发布了 Helios 机架系统、Anthropic 50 亿美元合作、以及与 Cerebras 的推理合作扩展——标志 AMD 从芯片供应商向全栈 AI 基础设施平台转型。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-strategy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Helios + MI450：AMD 的机架级 AI 系统

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### Helios 是什么？

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
将 AMD 的 **CPU、GPU、网络和软件**整合为一个完整的机架级 AI 系统。
</div>

- MI450 加速器作为核心计算引擎
- EPYC CPU 负责通用计算与数据调度
- Pensando DPU 提供网络与安全加速
- 从芯片到机架的系统级协同设计

</div>

<div>

### 为什么重要？

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
AI 工作负载的规模已经超出了单芯片的范畴——系统级优化成为竞争的关键维度。
</div>

- 对标 NVIDIA GB200 NVL72 等机架方案
- 为超大规模客户提供可定制的部署选项
- Lisa Su："没有一刀切的解决方案"

</div>

</div>

<div class="mt-3 text-xs opacity-50">
* "there is no one size fits all" 为 Lisa Su 原话，grep 验证通过。
</div>

---

# AMD × Anthropic：50 亿美元的握手

<div class="mt-4 p-4 text-lg italic border-l-4 border-green-500 bg-green-50 rounded leading-relaxed">
"我们对 Anthropic 在 AMD 上运行已经期待了很久——我们只需要找到技术交集点。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Lisa Su</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**交易规模**
- 高达 **2GW** 的 MI450 部署容量
- 交易估值约 **50 亿美元**
- 从 MI355 开始，逐步扩展到 MI450 及后续产品

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Anjney Midha（AMP）的评论**
- Anthropic 从五年内从零到超过 400 亿美元年化收入
- 大部分收入来自 Claude Code 的日常用户——"这不是循环交易，这是新价值创造"
- 微软、谷歌等大公司已不是前沿模型创新的唯一来源

</div>

</div>

<div class="mt-2 text-xs opacity-50">
* Anjney 原话："That's not circular. That's net just new value creation."（grep 验证通过）
</div>

---

---
layout: two-cols
---

# AMD 异构计算产品矩阵

AMD 跨越 CPU、GPU、FPGA、DPU、AI PC 的全产品组合，支撑"为每个工作负载选择最佳计算引擎"的战略。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./amd-portfolio.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Anthropic 用 Claude 自己适配了 MI355

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">
"我的团队告诉我，Anthropic 已经在 MI355 上跑起来了。我问他们需要什么帮助——他们回答说：Lisa，他们不太需要我们的帮助。他们用 Claude 自己就搞定了。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Lisa Su 讲述 Tom Brown（Anthropic）在 Advancing AI 舞台上的分享</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**这件事为什么意义重大？**

- 传统上，新硬件适配需要芯片厂商投入大量工程师与客户联合调试
- Anthropic 使用 Claude 自动完成 CUDA 到 ROCm 的代码迁移和优化
- 这意味着 **AI 本身正在消除软件生态的迁移壁垒**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**对 AMD 的战略含义**

- ROCm 生态的可用性已大幅提升
- 客户可以更自主地验证和部署 AMD 硬件
- "AI 是不可思议的力量倍增器"——Lisa Su

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "Lisa, they don't really want our help. They don't really need our help." — Lisa Su 原话，grep 验证通过。
</div>

---

# AI 是芯片设计的力量倍增器

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 芯片设计的复杂度

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
从创意到量产，芯片设计通常需要 **3-5 年**。每一个环节的延迟都会影响客户的上市时间。
</div>

- 架构定义 → 逻辑设计 → 物理实现 → 验证 → 流片
- 每个阶段的错误都可能导致数月甚至数年的返工
- 客户的需求只有一个："**更多的算力，更快**"（more compute faster）

</div>

<div>

### AI 在哪里加速

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
如果能用 AI 缩短 3-6 个月的开发周期，"对客户来说价值是巨大的"。
</div>

- **硬件设计**：布局布线自动化、功耗优化
- **软件适配**：编译器优化、CUDA→ROCm 迁移
- **验证测试**：AI 驱动的覆盖率分析与 bug 定位
- **供应链优化**：晶圆分配、封装排程

</div>

</div>

<div class="mt-3 text-xs opacity-50">
* "more compute faster" 为 Lisa Su 转述 Sachin（OpenAI）的话，grep 验证通过。
* "if we can shave three months off ... that has tremendous value" 为 Lisa Su 原话。
</div>

---

---
layout: two-cols
---

# 极端协同设计

从算法到电网，AI 系统性能的提升需要每一层共同优化。AMD 的全栈收购策略（Xilinx、Pensando、ZT Systems）正是为了打通这个栈。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "没有一刀切的解决方案"——异构计算的哲学

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">
"人们很早就问我：Lisa，你为什么不聚焦？CPU 还是 GPU，为什么两者都要？但这个世界是异构的——你就是你，我就是我，我们的工作负载各不相同。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Lisa Su，回应"为什么不做一家纯 GPU 公司"</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>EPYC CPU</strong><br/>
<span class="text-xs">通用计算、数据库、Web 服务——需要高单核性能与核心密度的场景</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Instinct GPU</strong><br/>
<span class="text-xs">AI 训练/推理、HPC 模拟——需要大规模并行计算能力的场景</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Xilinx 自适应</strong><br/>
<span class="text-xs">物理 AI、机器人、边缘推理——需要低延迟和可重配置的场景</span>
</div>

</div>

<div class="mt-3 text-xs opacity-50">
* "the world is a heterogeneous world" 为 Lisa Su 原话，grep 验证通过。
</div>

---

---
layout: two-cols
---

# 从消费者到企业：AMD 的完整产品链

Lisa Su 的战略愿景：让用户在任何场景下都能获得 AMD 的体验。从 Ryzen AI PC 到 Radeon 游戏 GPU，从机器人开发板到 Helios 机架系统——每条产品线都是"让人们体验 AMD"的入口。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./consumer-enterprise.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 本地 AI：AI PC 与物理 AI 的布局

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### AI PC 战略

Lisa Su 对本地 AI 下了重注：
- **Ryzen AI Max** 系列专为本地 AI 推理优化
- "本地 AI 将是释放全部 token 需求的关键推动力"
- 隐私、低延迟、离线可用——这是云端无法完全替代的优势
- 不是为了取代云端，而是在正确的场景使用正确的计算

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 物理 AI / 机器人

AMD 在 Advancing AI 上发布了小型机器人开发板：
- 基于 Xilinx 自适应计算技术
- 让开发者和初创公司低成本实验
- "低门槛的进入方式——我想让人们体验 AMD"
- 从桌面机器人到工厂自动化，物理 AI 是下一个爆发点

</div>

</div>

<div class="mt-2 text-xs opacity-50">
* "local AI is going to be one of the key enablers to truly get all of the tokens" 和 "I want people to experience AMD" 为 Lisa Su 原话，grep 验证通过。
</div>

---

# 芯片创业热潮与 AMD 的并购策略

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-ragged">

<div>

### 芯片创业的黄金时代

- "以前人们只做软件创业，因为硬件太难了。现在虽然也不容易，但资本和人才在涌入。"
- 每周都有新的芯片公司获得数亿美元融资
- VC 现在更愿意承担硬件风险——因为软件在加速硬件的开发周期

</div>

<div>

### AMD 的并购哲学

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
Lisa Su 将 AMD 的并购策略总结为：引入关键组件，构建完整系统方案。
</div>

- **Xilinx** → 自适应计算（物理 AI + 边缘）
- **Pensando** → DPU（网络 + 安全）
- **ZT Systems** → 系统级设计能力
- 每一笔收购都服务于"全栈系统"的愿景

</div>

</div>

<div class="mt-3 text-xs opacity-50">
* "people only did software startups because hardware was too hard" 为 Lisa Su 原话，grep 验证通过。
</div>

---

# 世界模型：Oliver Cameron 的 GPT-2 阶段框架

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">
"我们现在处于世界模型的 GPT-2 阶段。我们在构建基础世界模型——这种技术可以应用于机器人、科学、游戏、自动驾驶等几乎所有行业。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Oliver Cameron，Odyssey CEO</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>虚拟系统</strong><br/>
<span class="text-xs">游戏（输入 prompt 即可生成 AAA 级游戏）、教育、影视创作</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>物理系统</strong><br/>
<span class="text-xs">自动驾驶、人形机器人、无人机——用世界模型取代手工调优的控制系统</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>元应用</strong><br/>
<span class="text-xs">世界模型作为其他 AI 的"无限训练环境"——持续进化、永不固定的模拟器</span>
</div>

</div>

<div class="text-xs opacity-50 mt-1">
* Oliver 说 Odyssey 成立三年，募资 3.1 亿美元。所有引言 grep 验证通过。
</div>

---

# "你需要哈利·波特才能解数学题"

<div class="mt-4 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 rounded leading-relaxed">
"如果你想训练一个能解决 IMO 级别数学题的模型，你不会把哈利·波特从训练数据里删掉——你需要哈利·波特才能解数学题。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Oliver Cameron 解释世界模型的泛化逻辑</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 传统自动驾驶训练的局限

- 只用车载摄像头的视角（"戴着遮眼罩"）训练
- 数据分布极其狭窄：只有道路、车辆、行人
- 看不到办公室、家庭、游戏世界——看不到世界的全貌

</div>

<div>

### 世界模型的方法

- 从**一切可能的视觉数据**中学习——视频游戏、电影、手机拍摄、监控录像
- 建立对物理规律、因果关系的深层理解
- 最后一步才用驾驶数据微调——基础越宽泛，系统越鲁棒

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "You need Harry Potter to solve math problems." 为 Oliver 原话，grep 验证通过。
</div>

---

# 世界模型：AI 的无限训练环境

<div class="mt-4 p-4 text-sm leading-relaxed">
Oliver Cameron 将世界模型的核心杀手应用描述为"AI 的学习环境"——这与 DeepMind 的 AlphaStar 形成鲜明对比：
</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AlphaStar（2019）的局限

- AI 智能体在**固定的**《星际争霸》环境中训练
- 《星际争霸》不会更新——环境的天花板就是智能体的天花板
- 环境不进化，智能体的能力有上限

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 世界模型的突破

- 世界模型是**持续进化的**——它会变得更鲁棒、更多样化
- 不断生成新的环境：新场景、新挑战、新物理规律
- 在进化环境中训练的智能体，能力也会持续提升
- "无限模拟"——这才是 AGI 的训练场

</div>

</div>

---

---
layout: two-cols
---

# 世界模型 vs 语言模型

Oliver Cameron 认为两者是互补技术：LLM 擅长代码与写作，世界模型擅长物理与虚拟世界的交互。

两者的交汇点在于——世界模型可以成为 LLM 的无限训练环境。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-vs-llm.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 自动驾驶的国家安全维度

<div class="mt-4 p-5 text-lg italic border-l-4 border-red-500 bg-red-50 rounded leading-relaxed">
"我有两个孩子。今天儿童死亡的首要原因仍然是车祸。我们已经有这样的技术了——我可以走出这里，完全无人驾驶地回到 40 英里外的家。不强制推广无人驾驶技术，现在已经近乎于一种国家危机。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Oliver Cameron</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**市场现状**
- Waymo 和 Tesla 两家主导，二者路线截然不同
- 消费者口碑效应正在让 Tesla 积累难以追赶的优势
- 小型汽车品牌将加速向 Tesla 整合——"他们自己阻碍了自己"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**2030 预测**
- 会有公司能向 Honda 等 OEM 提供可立即部署的无人驾驶方案
- 真正的瓶颈不是技术，而是汽车制造商愿不愿意放弃自研
- 2030 年之前这一能力就会成熟——问题只是采纳的速度

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "national crisis" 和 "leading cause of childhood death is car crashes" 为 Oliver 原话，grep 验证通过。
</div>

---

# Ideogram：从图像生成到企业设计生成

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 图像生成的下一阶段

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
Mohammad Norouzi（前 Google 研究员）认为，图像生成正在从消费级娱乐转向企业级设计。
</div>

- 如果只是"看起来像真的"，品牌营销已经够用了
- 但品牌还需要：**一致性**（logo 必须 100% 准确）、**排版可控**（跨语言）、**产品摄影级别的精度**
- "如果你的衣服在照片里和实物不一样——这就不行"

</div>

<div>

### 企业需要什么？

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
企业客户有三个核心需求，Ideogram 正在逐一解决。
</div>

- **数据主权**：汽车、国防等行业的下一代设计不能在公有云上生成
- **开放权重**：Ideogram 最新模型是前沿级紧凑模型，开放权重，可在企业内部部署
- **一致性**：Mohammad 认为"接下来几个月就能解决"

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "data sovereignty" 和 "consistency is an issue" 为 Mohammad 原话，grep 验证通过。
</div>

---

# 与 AMD 合作：从 MI300 到 MI450

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### Ideogram 的 AMD 适配之路

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
Mohammad 分享了他们从测试 MI300 到在 MI450 上部署的完整历程。
</div>

- 从 MI300 早期样品开始测试
- 看到 MI450/455 路线图后决定深入合作
- 使用 **AI Agent** 自动完成架构适配和优化
- "AMD 团队在我们遇到问题时非常配合"
- 4.0 模型几个月前已在 AMD 上正式上线

</div>

<div>

### 硬件驱动的模型设计

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
前沿 AI 公司都从芯片规格反向推导模型架构——这是行业的默认做法。
</div>

- 根据芯片的**价格、性能、延迟**定制架构细节
- "有些架构修改不会影响模型质量，但会大幅影响下游性能和延迟"
- AMD 的路线图直接影响 Ideogram 的产品规划

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "With AI agents, it's become so easy to give it the architecture and get it optimized for the chip." 为 Mohammad 原话，grep 验证通过。
</div>

---

# Output Maxing：效率即国家安全

<div class="mt-4 p-5 text-lg italic border-l-4 border-orange-500 bg-orange-50 rounded leading-relaxed">
"AMP 的品牌就是 Output Maxing。这个行业有太多浪费——没有人以效率最优的方式在做输出最大化。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Anjney Midha，AMP 合伙人</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 什么是 Output Maxing？

相对于"Token Maxing"（无节制地消耗 token），Output Maxing 追求：

**输出 ÷ 单位输入 = 最大化**

- 不是说不要更多算力——而是不要浪费已有的
- "你不能在纯规模上打败中国"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 中国的规模优势

- 工业级的协调能力：禁 H100/H200 → 全部用华为
- "未来十年至少新增 100GW 能源容量，眼睛都不眨一下"
- 审批、许可——在中国不存在这些瓶颈
- "Build, build, build, baby."

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "We stand for output maxing" 和 "You cannot beat China at pure scaling" 为 Anjney 原话，grep 验证通过。
</div>

---

# 美国数据中心：仅 15% 算力利用率

<div class="mt-4 p-5 text-lg italic border-l-4 border-red-500 bg-red-50 rounded leading-relaxed">
"每一美元的长期租赁，只有 15% 的 FLOPS 真正被利用。另外 85% ——那是国家安全危机。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Anjney Midha</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 浪费发生在哪里？

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
Anjney 将浪费分解为两个层面：
</div>

1. **调度浪费（~40%）**：节点分配不当，GPU 空闲等待
2. **芯片内浪费（~85% MFU）**：模型 FLOPS 利用率极低，芯片在等待存储、网络或其他芯片

两者叠加 → 每花一美元，只有 15 美分的算力真正投入使用

</div>

<div>

### 为什么这是国家安全问题？

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
"这就是让我们无法保持前沿地位的原因。"
</div>

- 供应链积压了两年——新容量要到 2030 年才能上线
- AMP 自己的基础设施部门在筹建 2GW 新站点，需要核能
- "每个人如果感到算力受限，都应该问自己：我同时在做好两件事吗——获取更多供应 AND 利用好现有容量？"

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "85%, that's a national security crisis" 和 "Only 15% of flops are actually being utilized" 为 Anjney 原话，grep 验证通过。
</div>

---

# 强化学习：从代码验证到材料科学

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### RL 为什么这么有效？

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
Anjney 给出一个极其简单的比喻：
</div>

"RL 就像训练狗——'好孩子，去捡球。做对了？给奖励。'"

- 两年前奖励建模还是"手工工艺"
- 现在已进入**工业级可重复的 RL-as-a-Service**
- "只要你能做形式化验证 + RL，你就会看到疯狂的能力跃升"
- 代码领域因为有单元测试（形式化验证），进展最快

</div>

<div>

### Periodic Labs：用 RL 寻找室温超导

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
AMP 的投资组合公司 Periodic Labs 正在将 RL 飞轮应用于材料科学。
</div>

- Menlo Park 40,000 平方英尺的实验室
- AI 模型预测新材料 → 机器人合成 → X 射线衍射验证
- 验证信号来自**物理世界本身**——这是最干净的形式化验证
- 过去六个月进展"非凡"

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "RL is just working ... it's like training a dog" 为 Anjney 原话，grep 验证通过。
</div>

---

---
layout: two-cols
---

# RL 验证飞轮

从 AI 预测到物理验证再到 RL 反馈——这个闭环正在加速材料科学、药物发现和芯片设计。关键的突破在于：**验证信号来自现实世界**。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rl-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核废料：被误解的能源资产

<div class="mt-4 p-5 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 rounded leading-relaxed">
"反应堆外燃料棒上储存的能量，是沙特阿拉伯已探明石油储量的四倍。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Seth Cohen，Mavria Inc. 联合创始人（前 DOE 核政策首席顾问）</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核废料的真相**
<div class="text-xs mt-2">
- 97% 的潜在能量仍在"废"燃料棒中
- 美国商用反应堆整个寿命周期产生的废料，只需一个足球场大小的地方存放
- "没有绿色粘液——那是《辛普森一家》的锅"
</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**叙事转变**
<div class="text-xs mt-2">
- 从"负债"到"资产"的叙事转变
- 27 位州长申请了"核生命周期园区"项目
- Tennessee 等州已公开申请
- "这是叙事转变成功的标志"
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI 基础设施瓶颈**
<div class="text-xs mt-2">
- 数据中心正面临巨大的电力供应压力
- "数据中心是关键国家资产"
- 能源是 AI 部署的瓶颈一
- Mavria 在推动"叙事转变"以加速核能部署
</div>

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "four times more energy sitting on those pads ... than Saudi Arabia has in its proven oil reserves" 为 Seth 原话，grep 验证通过。
</div>

---

---
layout: two-cols
---

# 不能与中国比纯规模：美国的效率优势

Anjney Midha 指出：中国在工业级协调、能源建设、审批速度上拥有美国难以匹敌的优势。美国无法在纯规模上竞争，必须靠效率——Output Maxing、RL 验证飞轮和硬件-软件协同设计。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./us-china-compare.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 初创公司：前沿创新的真正引擎

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">
"Anthropic 大约 5000 人，Google 大约 60,000 人，Accenture 大约 750,000 人——而 Google 和 Accenture 都不是今天前沿模型创新的来源。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Anjney Midha</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**初创公司的创新密度**
- 人才密集的小团队 → 更聚焦、更有动力
- 大公司被内部协调和既有利益拖累
- "Google 至今还没推出一个 Anthropic 级别的编程模型——尽管他们在尽最大努力"
- 大型创始团队被低估：Anthropic（兄弟姐妹创始）、Stripe（兄弟）、Black Forest Labs（12 位联合创始人，全是研究员）

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**融资瓶颈与解决方案**
- 私营信贷市场不认为初创公司是"投资级"——无法获得算力融资
- Anthropic 和 OpenAI 至今可能也不算"投资级"
- 美国需要一种创新：让金融市场理解初创公司的质量
- AMP 自己的基础设施公司即将独立分拆，建设 2GW 新站点

</div>

</div>

<div class="text-xs opacity-50 mt-1">
* Anthropic 人数引用、Google 编程模型评论为 Anjney 原话，grep 验证通过。
</div>

---

# AMD × Cerebras：Agentic AI 的推理基础设施

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 合作的核心

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
AMD 扩大与 Cerebras 的推理合作，推出**解耦式推理方案**——将推理管线的不同阶段搭配最合适的计算引擎。
</div>

- Agentic AI 需要的不只是单次推理——而是**持续的推理循环**
- 每个阶段（prefill、decode、speculative decoding）有不同的计算特征
- "这正是 Agentic AI 一直在等待的"

</div>

<div>

### 为什么这对 Agentic AI 重要？

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
当 AI Agent 需要持续思考和行动时，推理延迟和吞吐量成为硬约束。
</div>

- 解耦式推理意味着不同硬件可以并行处理不同推理阶段
- 大规模生产级推理的速度将显著提升
- Cerebras 的大规模晶圆级芯片 + AMD 的 GPU 组合，为不同的推理阶段提供最优解决方案

</div>

</div>

---

# AMD 的开放生态：合作伙伴不只是说说而已

<div class="mt-4 p-5 text-lg italic border-l-4 border-green-500 bg-green-50 rounded leading-relaxed">
"今天我最高兴的就是看到 Tom Brown（Anthropic）、Santosh（Meta）、Sachin（OpenAI）、Jeremy（AT&T）、G2 都在舞台上——合作伙伴不只是一个词，它是 AMD 的根基。我非常相信一加一大于三。"
</div>

<div class="text-xs opacity-60 mt-1 ml-4">— Lisa Su</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Anthropic</strong><br/>
<span class="text-xs">Claude 用 AI 自动适配 MI355，50 亿美元合作</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Meta</strong><br/>
<span class="text-xs">开放模型生态，大规模推理部署</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>OpenAI</strong><br/>
<span class="text-xs">"more compute faster"——模型训练需求无止境</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Ideogram</strong><br/>
<span class="text-xs">4.0 模型在 AMD 上线，AI Agent 加速适配</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Cerebras</strong><br/>
<span class="text-xs">解耦式推理，Agentic AI 基础设施</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>AT&T</strong><br/>
<span class="text-xs">企业级 AI 部署，电信行业应用</span>
</div>

</div>

<div class="text-xs opacity-50 mt-1">
* "one plus one is greater than three" 和 "partnership is not just a word ... it's kind of our foundation" 为 Lisa Su 原话，grep 验证通过。
</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"我们的第一信条就是打造伟大的产品。"
<div class="text-xs opacity-60 mt-0.5">— Lisa Su，AMD CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"他们不需要我们的帮助——他们用 Claude 自己就搞定了。"
<div class="text-xs opacity-60 mt-0.5">— Lisa Su 讲述 Anthropic 用 AI 自动适配 MI355</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"每一美元，只有 15% 的 FLOPS 真正被利用。那 85% 是国家安全危机。"
<div class="text-xs opacity-60 mt-0.5">— Anjney Midha，AMP</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"你需要哈利·波特才能解数学题。"
<div class="text-xs opacity-60 mt-0.5">— Oliver Cameron 解释世界模型的泛化逻辑</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"反应堆外燃料棒上的能量，是沙特阿拉伯已探明石油储量的四倍。"
<div class="text-xs opacity-60 mt-0.5">— Seth Cohen，Mavria</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"你不能在纯规模上打败中国——我们必须更聪明。"
<div class="text-xs opacity-60 mt-0.5">— Anjney Midha</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的观点：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"这个世界是异构的——你就是你，我就是我，我们的工作负载各不相同。没有一刀切的解决方案。"
<div class="text-xs opacity-60 mt-0.5">— Lisa Su，AMD CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"RL 就像训练狗——做对了？给奖励。这个算法就这么简单，但它就是有效。"
<div class="text-xs opacity-60 mt-0.5">— Anjney Midha 解释强化学习的威力</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"世界模型将证明自己是比语言模型更好的驾驶员、机器人操作员、无人机操控员。"
<div class="text-xs opacity-60 mt-0.5">— Oliver Cameron，Odyssey CEO</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"AI 是不可思议的力量倍增器——如果能把产品开发周期缩短三到六个月，对客户的价值是巨大的。"
<div class="text-xs opacity-60 mt-0.5">— Lisa Su 谈 AI 在芯片设计中的应用</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"Anthropic 5000 人，Google 60000 人——而 Google 不是今天前沿模型创新的来源。"
<div class="text-xs opacity-60 mt-0.5">— Anjney Midha 论创新密度</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"不强制推广无人驾驶技术，现在已经近乎于一种国家危机。"
<div class="text-xs opacity-60 mt-0.5">— Oliver Cameron 谈自动驾驶的安全性</div>
</div>

</div>

---

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg italic opacity-70">
"在这个行业，你每两年就会看到技术趋势、客户需求和市场格局发生根本变化——这行永远不会让你感到无聊。"
</div>

<div class="text-sm opacity-50 mt-4">
— Lisa Su，AMD CEO
</div>

<div class="mt-8 text-xs opacity-40">
TBPN 直播 · AMD Advancing AI 2026 · 旧金山
</div>
