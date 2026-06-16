---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E228｜谷歌TPU能撼动英伟达吗？前TPU工程师首次揭秘'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E228｜谷歌TPU能撼动英伟达吗？<br>前TPU工程师首次揭秘

<div class="opacity-60 mt-6 text-lg">
Henry × 泓君
</div>
<div class="opacity-50 mt-2 text-sm">
谷歌前TPU工程师 · 硅谷101
</div>
<div class="opacity-40 mt-2 text-xs">
2026 年 3 月 · 1h7m
</div>

---

# 为什么这期值得关注？

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Gemini 3 登顶榜首</strong><br/>
2025年训练Gemini 3的不是英伟达GPU，而是谷歌自研TPU。AI性能王座背后的芯片变了。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>万亿市场格局重塑</strong><br/>
Anthropic签下100万颗TPU（价值数百亿美元），Meta签数十亿美元协议，苹果全线用TPU训练。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>前TPU工程师首次揭秘</strong><br/>
Henry深度参与V7 Ironwood和V8研发，从硬件到软件到供应链，首次对外详细解读。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>推理成本暴降</strong><br/>
谷歌API成本曾仅为OpenAI的十分之一，Anthropic 4.5降价67%——背后是TPU的TCO优势。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>ASIC vs 通用GPU</strong><br/>
TPU赌对Transformer架构才有今天。但如果模型范式改变，定制芯片的灵活性就是致命伤。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>供应链瓶颈全解析</strong><br/>
HBM三巨头垄断、CoWoS产能、TSMC分配权、博通议价权——芯片战争不止在实验室。
</div>

</div>

---

# GPU = 大厨并行模式

<div class="text-sm leading-relaxed mt-4">

GPU 最初是为游戏显卡设计的，采用 **SIMD**（单指令多线程）架构。

Henry 用厨房来比喻：

> "一个厨房里面同时安排着很多很多个大厨，他们每个人都有自己独立的思考能力，然后独立去从冰箱里把东西拿出来，然后做完菜，然后最后上菜，他们会独立完成这样一件事情。"

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong class="text-blue-700">优势</strong>
<div class="text-sm mt-2 opacity-80">单卡性能极强<br>通用性好，适应各种workload<br>CUDA生态成熟</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong class="text-yellow-700">劣势</strong>
<div class="text-sm mt-2 opacity-80">存在idle period<br>等数据搬运时计算单元闲置<br>矩阵计算利用率不够高</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong class="text-green-700">核心特征</strong>
<div class="text-sm mt-2 opacity-80">多线程独立调度<br>硬件层面做prediction<br>需要NVLink交换机互联</div>
</div>

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 7-11 — Henry 的"厨房大厨"比喻
</div>

---

# TPU = 流水线接力模式

<div class="text-sm leading-relaxed mt-4">

TPU（Tensor Processing Unit）是**专为机器学习矩阵计算定制的加速器**。它不做通用计算，只专注一件事——矩阵乘法。

Henry 继续用厨房比喻：

> "TPU 不用安排那么多的大厨，但是他会把大厨安排在每一个步骤上……第一个人会从冰箱里把菜给取出来，第二个人直接把第一个人做完的部分做加工传到第三个人。相当于中间每一个步骤你可以理解成是心脏的泵血。"

**关键设计哲学**：TPU 在硬件层面不加预测（prediction），硬件"变蠢"，所有复杂度由软件（XLA）预先编排。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong class="text-green-700">优势</strong>
<div class="text-sm mt-2 opacity-80">满功耗运行，无空闲等待<br>系统级利用率(utilization)极高<br>TCO成本更低</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong class="text-yellow-700">劣势</strong>
<div class="text-sm mt-2 opacity-80">专用性强，通用性差<br>对workload变化敏感<br>软件生态门槛高</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong class="text-blue-700">核心特征</strong>
<div class="text-sm mt-2 opacity-80">Systolic Array矩阵计算<br>软件驱动硬件执行<br>系统级协同设计</div>
</div>

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 9-15 — Henry 解释 TPU 架构和"心脏泵血"比喻
</div>

---
layout: two-cols
---

# GPU vs TPU 架构对比

<div class="text-sm leading-relaxed">

### GPU (SIMD)
- 多个独立大厨，各自完成全套工序
- 等待数据搬运时出现 idle period
- 硬件做 prediction，调度灵活但有效率损失

### TPU (流水线)
- 每个计算单元只管一个步骤
- 数据在计算单元间持续流转，满功耗运行
- "硬件被变蠢了"——所有复杂度在软件层预先解决

### 关键洞察
**从 compute bound 转向 memory bound 的时代**，TPU 的系统级设计越来越有优势——因为它把 Memory Bandwidth 也充分利用了。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tpu-vs-gpu-arch.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# TPU Pod：系统级设计哲学

<div class="text-sm leading-relaxed mt-4">

TPU 与 GPU 最大的差异在于：**TPU 从来不是单卡比拼，而是系统级协同**。

> "TPU一直是主打一个TPU Pod，它是一个有几千张卡的一个协同的一个训练的一个状态。它里面牵扯到了很多通信……它可以让几千张卡芯片，它用户的感觉当中是一张卡在训练。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ICI (Inter-Chip Interconnect)
芯片与芯片之间的直连通信协议。TPU 使用铜线直连，不需要交换机中转，大幅降低通信延迟和成本。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 3D Torus 拓扑网络
每个 TPU 芯片可以和相邻芯片通信，形成三维环形网络。通过 OCS（光交换机），软件可以动态配置通信路径。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### OCS (Optical Circuit Switch)
软件可编程的光纤交换机，允许动态改变 TPU Pod 内的通信拓扑。这是解决 MoE 架构通信瓶颈的关键。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 系统级优势
GPU 的 NVLink/NV Switch 是"infrastructure tax"——大量第三方交换机推高成本。TPU 直连拓扑省掉了这笔税。

</div>

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 13, 73-74, 167
</div>

---
layout: two-cols
---

# 3D Torus：MoE 的转折点

<div class="text-sm leading-relaxed">

**MoE（混合专家模型）** 在 V4 之前无法在 TPU 上高效运行。

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3 text-sm">
<strong>V4 之前：2D Torus</strong><br/>
• 只能和相邻芯片通信<br/>
• 不是 all-to-all<br/>
• MoE routing 需多跳 → 拥堵<br/>
• "找一个朋友要经过很多环节"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3 text-sm">
<strong>V4 之后：3D Torus + OCS</strong><br/>
• OCS 光交换机动态配置路径<br/>
• 实现 all-to-all 通信<br/>
• MoE 效率显著提升
</div>

<div class="text-xs opacity-60 mt-3">
V4/V5 约 2022-2023 年，赶上大模型爆发前夜。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./torus-topology.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# XLA 编译器：TPU 的秘密武器

<div class="text-sm leading-relaxed mt-4">

**XLA（Accelerated Linear Algebra）** 是 Google 为 TPU 打造的静态编译器，Henry 称之为"黑盒"，也是"secret sauce"。

> "XLA是一个静态编译器。当你的 workload 是已知的，它可以在全局 TPU Pod 的 system level 做一个全局优化。"

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong class="text-green-700">算子融合</strong>
<div class="text-sm mt-2 opacity-80">将多个 kernel 合并为一个，减少中间结果在内存间的搬运，提升 systolic array 利用率</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong class="text-blue-700">内存管理</strong>
<div class="text-sm mt-2 opacity-80">预知 TPU 对内存访问的偏好，自动优化数据分布和读取模式</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong class="text-purple-700">全局优化</strong>
<div class="text-sm mt-2 opacity-80">不是单卡优化，而是整个 TPU Pod 的系统级编排——这正是 TPU 性价比的来源</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>⚠️ 代价</strong>：XLA 是黑盒——debug 需要同时懂硬件和软件，Bug 经常需要 Google 工程师协助才能解决。对第三方开发者门槛极高。
</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 36-39, 47, 50-53 — Henry 解释 XLA 的优势和痛点
</div>

---
layout: two-cols
---

# XLA vs CUDA：生态之战

<div class="text-sm leading-relaxed">

### XLA（TPU 侧）
- 静态编译器，全局系统级优化
- 算子融合 + 内存管理自动化
- 上接 PyTorch/JAX/TensorFlow
- 下转 TPU 汇编指令

**痛点**：
- 黑盒，难 debug
- 几千个算子不原生支持则性能差
- 需复合技能（硬件+软件）
- Bug 修复依赖 Google 团队

### CUDA（GPU 侧）
- 开放生态，海量文档和社区
- 成熟工具链，开发者可独立 debug
- 几万个算子原生支持

**CUDA 就是英伟达最深的护城河。**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./xla-vs-cuda.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Anthropic 的百万 TPU 订单

<div class="text-sm leading-relaxed mt-4">

2025 年，Anthropic 拿下 **100 万颗 TPU**，价值数百亿美元，用于训练下一代 Claude。这是 TPU 最大的外部订单之一。

> "Anthropic 跟 Google 是一个相对于内循环，因为 Anthropic 很多投资方也是 Google 的。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么 Anthropic 能用好 TPU？
1. **Google 生态深度绑定**：投资关系 + 人才互通
2. **工程师懂 XLA**：很多人前 Google 背景
3. **唯一直接采购 TPU 机架的公司**：其他客户都用谷歌云
4. **有 Google 软件团队专门对接支持**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 对比其他客户
- **Meta**：用谷歌云托管，无法做底层优化
- **Apple**：也用谷歌云，但团队有 Google 背景
- **Midjourney**：谷歌云用户

**结论**：能用好 TPU 的前提是——要么你有前 Google 工程师，要么你接受只跑出 50-60% 性能。

</div>

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 25-31, 50-54 — Henry 解释 Anthropic 订单和外部客户生态
</div>

---

# Apple：真正最大的 TPU 客户

<div class="text-sm leading-relaxed mt-4">

**2024 年，Apple 发表论文披露：Apple Intelligence 全部使用 TPU 训练。** Henry 透露，Apple 其实是 Google TPU 最大的外部客户。

> "用谷歌的 TPU 最大的团队其实不是 Anthropic，虽然他们下了一个 100 万的订单……最大的团队其实是苹果。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Apple 的 TPU 优势
- 人才传承：黄仁勋（这里的黄仁勋指前 Google 高管）将 Google 的整套 TPU 技术栈带到了 Apple
- 完成了从 GPU 到 JAX/XLA 的完整软件栈迁移
- 深度定制化训练流程

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Meta 的 TPU 策略
- 签署数十亿美元协议，租 TPU 跑 Llama
- 通过谷歌云接入（非直接采购）
- 用 PyTorch——与 XLA 生态不天然兼容
- 主要用于 offload 预训练的算力压力

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>核心区别</strong>：Anthropic 是唯一从博通直接购买 TPU 机架（rack）的公司，其他都走谷歌云。直接采购才能做底层优化，谷歌云托管只能跑出约 50-60% 性能。
</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 54-57, 131-147 — Henry 讨论 Apple、Meta 和 Anthropic 的不同 TPU 使用模式
</div>

---

# TPU 的 TCO 成本优势

<div class="text-sm leading-relaxed mt-4">

**TCO（Total Cost of Ownership，总拥有成本）** 是 TPU 相比 GPU 最核心的竞争优势。当你知道你的 workload 是什么时，TPU 可以为你定制。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-4xl font-bold text-green-600 my-2">~50%</div>
<div class="text-xs opacity-70">谷歌云托管可能只能跑出<br>50-60% 的 utilization rate</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-4xl font-bold text-blue-600 my-2">67%</div>
<div class="text-xs opacity-70">Anthropic 4.5 API<br>价格下调幅度</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-4xl font-bold text-purple-600 my-2">1/10</div>
<div class="text-xs opacity-70">谷歌 Gemini API 成本<br>曾仅为 OpenAI 的十分之一</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

**成本优势来自两个层面**：
1. **芯片利用率**：TPU 的软硬件协同可以让芯片接近满功耗运行，peak FLOPs 利用率高
2. **数据中心成本**：GPU 的 NVLink/NV Switch 是一笔巨大的 "infrastructure tax"，TPU 用铜线直连 + 少量光交换机，通信成本低得多

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 15, 141, 163-167 — Henry 讨论 TCO、利用率、和推理成本
</div>

---
layout: two-cols
---

# 数据中心成本：GPU vs TPU

<div class="text-sm leading-relaxed">

### NVIDIA GPU 集群
- 芯片 + NVLink + NV Switch
- 需要大量第三方交换机
- Henry 称之为 **"infrastructure tax"**
- 这是一笔非常烧钱的资本支出

### Google TPU Pod
- 芯片间用 ICI 铜线直连，无需交换机
- 只在节点间使用 OCS 光交换机（少量）
- 实现同等通信效果，通信成本更低

### 成本差距
在数据中心建设环节，**TPU 的 Capex 已经拉开差距**。这就是为什么 Gemini API 价格可以做到 OpenAI 的十分之一。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dc-cost.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# HBM：三巨头垄断的瓶颈

<div class="text-sm leading-relaxed mt-4">

> "HBM 非常难找……一共就三家公司垄断这个生产——SK Hynix、三星和 Micron。英伟达一直是 HBM 最大客户，TPU 一直相当于是一个 secondary 的 customer。"

现在模型训练正从 **compute bound 转向 memory bound**，HBM 决定了训练效率的上限。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong class="text-red-700">SK 海力士</strong>
<div class="text-sm mt-2 opacity-80">HBM 市场领导者<br>英伟达的最大供应商</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong class="text-blue-700">三星</strong>
<div class="text-sm mt-2 opacity-80">第二大 HBM 供应商<br>产能爬坡中</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong class="text-green-700">美光</strong>
<div class="text-sm mt-2 opacity-80">第三大 HBM 供应商<br>份额较小</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>TPU 的困境</strong><br/>
此前不是大客户，无法提前锁定订单。芯片产能需要提前 1-2 年预定。V7 之后随着外部订单增长，情况正在改善。
</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>市场现状</strong><br/>
HBM 产能基本被英伟达垄断。买不到好的 HBM，训练效率就会打折扣。未来几年 HBM 决定芯片上限。
</div>
</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 17-19, 191-195 — Henry 讨论 HBM 供应和垄断
</div>

---

# CoWoS 与 TSMC 产能分配

<div class="text-sm leading-relaxed mt-4">

**CoWoS（Chip-on-Wafer-on-Substrate）** 是 TSMC 的 2.5D 先进封装技术。HBM 内存芯片和计算芯片是两块独立的 die，通过 CoWoS 封装在一起。**这个工艺只有 TSMC 能做。**

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 产能分配的逻辑
- TSMC 按订单量分配 CoWoS 产能
- 英伟达的订单量大，优先级自然高
- Google TPU 此前没有外部客户，订单量有限
- 博通（Broadcom）作为中间环节，帮 TPU 争取 TSMC 产能

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 博通的关键角色
- Google TPU 团队设计前端（芯片图纸）
- 博通负责把芯片物理连接起来（后端 + ICI）
- 最终交付 TSMC 量产
- 博通的议价权越来越大，TPU 的利润空间被挤压

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>市场格局</strong>：博通是 to B 模式，锁定少数大客户深度定制。Marvell 是另一家代工商，更偏向中型客户和创业公司，提供 IP 方案而非深度定制。
</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 19-20, 177-201 — Henry 讨论 CoWoS、TSMC 分配和博通角色
</div>

---
layout: two-cols
---

# TPU 供应链全景图

<div class="text-sm leading-relaxed">

### 五层供应链结构
从上到下，每一层都是瓶颈：

1. **HBM 内存**：三巨头垄断，英伟达优先
2. **CoWoS 封装**：仅 TSMC，产能按订单分配
3. **博通 Broadcom**：芯片互连 + 后端，技术壁垒极高
4. **Google TPU 团队**：前端设计，Jeff Dean/Demis 定方向
5. **最终客户**：Anthropic (直采) vs 其他 (谷歌云)

**关键矛盾**：博通议价权增长 vs Google 利润率压缩。如果 Google 没有 backup 方案，成本控制会越来越难。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tpu-supply-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 良率困境：定制芯片不可降级

<div class="text-sm leading-relaxed mt-4">

GPU 和 TPU 在制造理念上有根本不同。TSMC 生产 wafer 后，上面有多少芯片合格就是**良率**问题。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### GPU 的灵活性
- 有阉割版本（H100 → H800）
- 良率不好可以降级销售
- 芯片性能参差不齐也能跑

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### TPU 的刚性
- 定制芯片，**不可降级**
- 整个系统要求每张芯片性能一致
- 如果有参差不齐，系统效率会下降
- 良率不行的芯片直接报废

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

> "因为TPU它更多是主打一个通信，芯片与芯片之间的通信，导致它中间的失败率会比GPU还要更高一些。"

这意味着同样的 wafer，TPU 的可用芯片实际上比 GPU 少。这也是 TPU 产能难以快速提升的深层原因之一。

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 21-23 — Henry 讨论 TPU 良率和不可降级的特性
</div>

---

# TPU 的起源故事：Jeff Dean 的 PPT

<div class="text-sm leading-relaxed mt-4">

TPU 的诞生源于一次成本计算。2013 年左右，Google 首席科学家 **Jeff Dean** 演示了深度学习在语音识别上的突破性进展。

**Jonathan Ross**（后来的 Grok 联合创始人，现为英伟达 VP）做了一个著名的两页 PPT 内部演示：

</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-center">

<div class="p-6 rounded bg-green-50 border-2 border-green-200">
<div class="text-xl font-bold text-green-600 mb-2">好消息 🎉</div>
<div class="text-sm opacity-80">GPU 它真的是工作了！<br>深度学习在语音识别上有了突破</div>
</div>

<div class="p-6 rounded bg-red-50 border-2 border-red-200">
<div class="text-xl font-bold text-red-600 mb-2">坏消息 💸</div>
<div class="text-sm opacity-80">我们付不起这个钱<br>如果所有用户发 3 分钟语音<br>数据中心成本翻倍 → 数百亿美元</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

**这就是 TPU 的起点。** Google 的结论是：既然没有合适的芯片，那就自己造。第一代 TPU 只是一款 inference 芯片——一个矩阵计算器加内存，没有更多模块。**图灵奖得主 Geoff Hinton 也深度参与了第一代架构设计。**

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 237, 250-254 — Henry 讲述 TPU 起源故事
</div>

---

# AlphaGo 与 TPU：早期实战

<div class="text-sm leading-relaxed mt-4">

2015-2016 年，**AlphaGo 击败围棋世界冠军李世石**，轰动全球。鲜为人知的是：AlphaGo 的 AI 算法里已经装入了 TPU。

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### V1（初代）：验证芯片
- 纯 inference 芯片，不做 training
- 矩阵计算器 + 内存，架构极简
- 初衷：内部语音识别和推荐系统
- **"先做一个 testing chip 作为入口"**

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### V2/V3：训练芯片诞生
- 旗舰训练芯片，AlphaGo 就在用
- 后续驱动了 PaLM、BERT、早期 Transformer
- 但那时硬先行、软件还没跟上
- 1-3 代是真正的奠基者

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Henry 的观察</strong>：V1-V3 时代"理论上性能不错，但产能跟不上，软件协同效应还没产生"。真正的爆发要等到 V4 之后。
</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 237, 254-257 — Henry 讲述 TPU 历史和 AlphaGo
</div>

---

# TPU 代际演进：V1 → V8

<div class="text-sm leading-relaxed mt-4">

芯片迭代周期最快也要 **2 年到 2.5-3 年**。这意味着每一代 TPU 的设计决策，都在预测 2-3 年后的 AI 模型方向。

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>V1 (2015)</strong><br/>纯 inference，矩阵计算器+内存<br/>为语音识别而生
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>V2/V3 (2017-2018)</strong><br/>训练芯片，驱动 AlphaGo/PaLM/BERT<br/>奠基者，但软硬件协同未成熟
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>V4/V5 (2021-2023)</strong><br/>加入 Sparse Core（稀疏计算）<br/>3D Torus + OCS，解决 MoE 瓶颈
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>V6 (2024)</strong><br/>转向大模型预训练<br/>训练/推理两个版本
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>V7 Ironwood</strong><br/>Henry 参与研发<br/>peak FLOPs 接近 GB200，HBM 带宽大幅提升
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>V8</strong><br/>Henry 离开 Google 前最后一代<br/>技术细节未公开
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>设计哲学的演变</strong>：早期主要服务内部推荐/搜索系统。V6 开始转向大模型，V7 已与 Blackwell 旗鼓相当。现在 TPU 策略是"让芯片更加通用"——把计算和内存模块化，适应未来不同的模型范式。
</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 65-96, 124-126 — Henry 讲述各代 TPU 的演进
</div>

---

# ASIC 的赌注：押对 Transformer

<div class="text-sm leading-relaxed mt-4">

TPU 本质上是针对大模型预训练和推理的 **ASIC（专用集成电路）**。ASIC 的核心特征：**一旦设计定型就无法改变。**

> "TPU 和 GPU 本质上就是一个是通用性好，一个通用性不好……即使我们有一手的信息，但是你一旦确定了 ASIC，它是没办法去改变的。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ✅ TPU 压对了什么
- Transformer 架构是 Google 发明的，TPU 从一开始就针对矩阵计算优化
- GPT 爆发后，矩阵计算需求爆炸
- MoE 架构通过 3D Torus 解决了通信瓶颈

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ⚠️ TPU 的风险
- 模型迭代周期以月为单位
- 如果出现完全不同的范式（非 Transformer）
- 通用 GPU 可以快速适应，TPU 则需要硬件重新设计（2-3 年）
- 先发优势可能被 GPU 的灵活性追平

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Henry 的担忧</strong>：MoE 的 scalability 到底有多强？如果将来有一个完全不同的范式——定制芯片无法快速迭代，性能差距可能被拉大。
</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 97-110 — Henry 讨论 ASIC 的优势和风险
</div>

---

# MoE 架构：3D Torus 的转折时刻

<div class="text-sm leading-relaxed mt-4">

**MoE（混合专家模型）** 需要把 token routing 到分布在不同芯片上的专家。V4 之前的 2D Torus 无法支持 all-to-all 通信，成为瓶颈。

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 问题（V4 之前）
- 只能和 neighbor 芯片通信
- MoE routing 需要跨芯片分发
- 中间经过多个环节 → 拥堵 + 浪费
- MoE 在 TPU 上跑不起来

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 解决方案（V4+）
- 3D Torus 拓扑网络架构
- OCS 光交换机 = software programmable
- 动态改变通信路径
- MoE 效率显著提升

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

**这个案例揭示了 TPU 的运作模式**：DeepMind 提前告诉 TPU 团队，我们的算法需要什么样的硬件支持，TPU 团队据此定制加速器。目标是在更短的时间内完成算法验证迭代。

设计周期最快 **2-2.5 年**，期间模型方向每 **6 个月** 就可能变一次。芯片设计师必须预测未来。

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 63-74, 81-86 — Henry 讨论 MoE 和芯片迭代周期
</div>

---

# Grok/LPU：低延迟推理的另类路径

<div class="text-sm leading-relaxed mt-4">

**Grok（现已被英伟达收购）** 由前 Google TPU 编译器团队创始人 **Jonathan Ross** 创立。Henry 说它本质上"是一家 compiler 的公司而不是一家芯片公司"。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg font-bold text-green-600 mb-1">第一轮</div>
<div class="text-sm opacity-80"><strong>Inference</strong><br/>Grok 主做推理，不做训练<br/>软硬件架构决定了这一点</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-600 mb-1">第二轮</div>
<div class="text-sm opacity-80"><strong>ASIC</strong><br/>低延迟专用 ASIC<br/>成本更可控</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-600 mb-1">第三轮</div>
<div class="text-sm opacity-80"><strong>Agent</strong><br/>2025 是 Agent 元年<br/>低延迟 = Agent 核心需求</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

> "Grok 你可以理解成它是一家 compiler 的公司而不是一家芯片公司。它的硬件可能比 TPU 更加单一，它的 compiler 在某种程度上决定了一切……它可以精准到每一个 cycle，都是由 compiler 去确定好的。"

**Grok 的差异化**：用 SRAM 而非 HBM，单用户独占大量 LPU 资源，保证极低延迟。适合 Agent、实时语音、高频交易。

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 279, 286-295 — Henry 解释 Grok 的定位
</div>

---

# TPU vs Grok：吞吐量 vs 延迟

<div class="text-sm leading-relaxed mt-4">

TPU 和 Grok 代表了推理芯片的两种设计哲学。它们不是竞争关系，而是服务不同的市场层级。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### TPU：高吞吐量优先
- **核心指标**：Throughput（吞吐量）
- 适合海量用户同时调用（millions of users）
- 通过 batch 打包把请求变成大矩阵计算
- 保证平均延迟好，但尾部延迟可能慢
- **场景**：Gemini、ChatGPT、Claude

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Grok LPU：低延迟优先
- **核心指标**：Latency（延迟）
- 单用户独占大量 LPU 资源
- SRAM 设计，无需等待 HBM 搬运
- 保证每个 token 之间的延迟极低
- **场景**：Agent、实时语音、高频交易

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>关键洞察</strong>：如果你只有一个用户，TPU 的成本会很高——因为它没办法把请求打包成大的矩阵计算。TPU 的性价比优势需要"走量"才能体现。
</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 205-219 — Henry 对比 TPU 和 Grok 的吞吐量 vs 延迟
</div>

---
layout: two-cols
---

# 推理芯片市场分层

<div class="text-sm leading-relaxed">

### 三层分化
**大模型推理市场正在分层**，不同层级由不同架构主导。

**上层（云端大规模）**：
TPU + GPU，服务 Gemini/ChatGPT/Claude

**中层（垂直场景）**：
GPU + Grok + 各类 ASIC，企业私有部署

**下层（低延迟/端侧）**：
Grok LPU + 本地芯片，Agent/实时场景

DeepSeek 之后推理需求爆发，端侧和小规模部署需求激增。英伟达不可能吃掉全部市场。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./inference-market.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2025：TPU 生态大年

<div class="text-sm leading-relaxed mt-4">

2025 年对 TPU 来说是破圈之年。从内部工具变成了整个 AI 产业的基础设施。

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🏆 Gemini 3 登顶
100% TPU 训练，不再依赖 GPU 做 backup。V7 之前是 GPU/TPU 混训，现在 XLA 已经非常稳定。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🤝 Anthropic 百万订单
数百万颗 TPU（百亿美元级），直接采购机架。Claude 下一代模型用 TPU 训练。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🍎 Apple 全线 TPU
Apple Intelligence 全部使用 TPU 训练——2024 年论文公开。最大的 TPU 外部客户。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 📊 Meta 数十亿协议
租用 TPU 跑 Llama，用谷歌云 offload 预训练压力。xAI、OpenAI 也表达了合作意向。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

> "V7 的发布，它基本上是说，100% 是用 TPU。但是在 V7 之前，GPU 一直是 TPU 的 backup。原因也很简单，XLA 加 JAX 是一套非常复杂也非常不稳定的一套软件生态……到现在我觉得这套系统已经非常 steady 了。"

</div>

<div class="text-xs opacity-50 mt-4">
出处：Transcript line 1, 5, 220-226 — Henry 和泓君讨论 2025 年 TPU 生态变化
</div>

---

# TPU 的劣势清单

<div class="text-sm leading-relaxed mt-4">

尽管 TPU 势头正猛，但 Henry 指出了几个无法回避的短板：

</div>

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>❌ 软件生态门槛极高</strong><br/>
XLA 是黑盒，需要同时懂硬件和软件。PyTorch 原生不支持 XLA，Meta 只能用谷歌云托管而非直接采购。CUDA 的护城河仍然非常深。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>❌ 供应链受制于人</strong><br/>
HBM 三巨头垄断、CoWoS 产能由 TSMC 分配、博通议价权增长。定制芯片不可降级，良率问题比 GPU 更严重。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>❌ ASIC 的灵活性风险</strong><br/>
如果模型架构从 Transformer 转向新范式，TPU 需要 2-3 年才能重新设计。GPU 则可以快速适应。模型每 6 个月迭代一次，芯片设计跟不上。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>❌ 不适合小规模部署</strong><br/>
单用户或小团队用 TPU 成本高、效率低。TPU 需要大规模走量才能发挥 TCO 优势。Grok 在低延迟 Agent 场景更有优势。
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Google 的应对</strong>：让芯片"更加通用"——把计算和内存模块化；PyTorch 与 XLA 的深度整合在推进中；软件团队规模已超过硬件团队。
</div>

---

# 未来格局：GPU 与 TPU 必然共存

<div class="text-sm leading-relaxed mt-4">

在节目的结尾，泓君总结了全部对话，Henry 回答"非常非常精确"。节目的核心结论是什么？

</div>

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic leading-relaxed">

> "没有绝对的答案，但我的结论是——在某些限定的条件下，如果一旦满足这些限定条件，我觉得 TPU 是完全可以挑战 GPU 的。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### ✅ TPU 的优势场景
- 大规模部署 + 海量用户
- 模型相对稳定，不需要频繁改动
- 云端推理（Gemini/ChatGPT/Claude）
- 你懂 XLA，或有 Google 工程师支持

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### ✅ GPU 的优势场景
- 快速迭代的模型研发
- 小规模部署 / 单用户场景
- Agent / 实时低延迟应用
- 你需要独立 debug 和调优

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">

> "很多人都在讨论 TPU 和 GPU 之间区别，我孰优孰劣，但我觉得**未来肯定是两者并存的**……我觉得这个生态是一个非常健康的生态，有定制的环节，也有通用的环节，有通用场景，也有垂类场景。**将来的话是百花齐放的一个格局。**"

**最终判断**：TPU 是一个很好的挑战者。如果 XLA 生态能像 CUDA 一样搭起来，对 GPU 和整个行业都是好事。"同行需要激励和鞭策。"

</div>

<div class="text-xs opacity-50 mt-2">
出处：Transcript line 2, 205, 303 — Henry 的核心结论
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"在全局 TPU Pod 的 system level 做一个全局优化"
<div class="text-xs opacity-60 mt-1 not-italic">— Henry 解释 XLA 编译器的核心价值</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"把它把硬件变得更蠢了一点……软件那边帮你把所有 complexity 都给处理掉"
<div class="text-xs opacity-60 mt-1 not-italic">— TPU 设计哲学的核心</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"在限定的条件下，TPU 是完全可以挑战 GPU 的——大规模部署，模型相对稳定"
<div class="text-xs opacity-60 mt-1 not-italic">— Henry 的核心结论</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
"Grok 你可以理解成它是一家 compiler 的公司而不是一家芯片公司"
<div class="text-xs opacity-60 mt-1 not-italic">— 精准概括 Grok 的本质</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
"未来肯定是两者并存的……百花齐放的一个格局"
<div class="text-xs opacity-60 mt-1 not-italic">— GPU 和 TPU 的关系不是替代，是共存</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"我觉得也是需要同行的激励和鞭策"
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 TPU 的崛起对所有人都是好事</div>
</div>

</div>

---
layout: end
---
# 谢谢收听

<div class="text-lg opacity-60 mt-4">
GPU 与 TPU 的未来是共存，不是替代
</div>

<div class="text-sm opacity-40 mt-12">
硅谷101 · E228 · 2026年3月
</div>
