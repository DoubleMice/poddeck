---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E246｜何谓蒸馏？聊聊硅谷如何看中国开放模型逼近前沿'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E246｜何谓蒸馏？

## 聊聊硅谷如何看中国开放模型逼近前沿

<div class="mt-6 text-sm opacity-60">
硅谷101 · 2026年8月
</div>

<div class="mt-2 text-xs opacity-50">
嘉宾：王铁震（前HuggingFace亚太开源生态负责人）· Keith Jai（TinyFish联合创始人）
</div>

---

# 为什么这期值得听？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Kimi K3 发布完整权重**
7月27日，月之暗面正式开源K3模型权重，能力逼近Claude前沿模型，硅谷震动。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**蒸馏指控的真相**
Anthropic指控中国模型"蒸馏"闭源模型，但技术上蒸馏到底意味着什么？证据何在？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**开源模型商业模式**
Kimi推出全新商业授权，试图在开源与可持续盈利之间找到第三条路。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**闭源实验室受冲击**
估值体系承压、价格战启动、安全问题上的话语权之争——OpenAI和Anthropic面临什么？

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 col-span-2">

**从NVIDIA到Thinking Machines**：75+机构联署支持开放权重，而Anthropic始终未签。这场"开源 vs 闭源"的博弈已远超技术层面，进入地缘政治与商业利益的深层角力。

</div>

</div>

---

# K3让硅谷意外的三个点

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

### 速度
K3从API上线到完整权重发布仅用11天。而它与Fable 5的发布时间只隔了约15天——连收集训练数据都来不及，更别说完成蒸馏训练。

</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

### 能力
不是"接近"，而是在某些场景上**已经超越Claude**。闭源模型的护城河，一夜之间似乎消失了。

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

### 规模反差
K3只有约3T参数，却能与传闻中8-10T的Claude匹敌。以三分之一的体量达到同等能力——推理成本天然更低。

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">
<strong>不是"狼来了"</strong>：从DeepSeek V1（2025年初）到GLM 4.5，再到K3，中国开源模型经历了一整年的"狼来了"叙事。但这次，狼真的来了——闭源领先一个世代的时代结束了。
</div>

---

# 时间线：从"狼来了"到"狼真的来了"

<div class="mt-4 space-y-2 text-sm">

<div class="flex items-start gap-3">
<div class="text-xs font-bold bg-blue-100 rounded px-2 py-1 w-20 text-center shrink-0">2025 初</div>
<div class="p-2 rounded bg-blue-50 flex-1">
<strong>DeepSeek V1</strong> — 首次带来开源版Thinking Chain，让大家知道推理模型怎么做。纳斯达克大跌，市场开始反思AI估值体系。
</div>
</div>

<div class="flex items-start gap-3">
<div class="text-xs font-bold bg-yellow-100 rounded px-2 py-1 w-20 text-center shrink-0">2025 全年</div>
<div class="p-2 rounded bg-yellow-50 flex-1">
<strong>狼来了</strong> — 闭源模型月更，开源模型季更。Opus 4.6/4.7/4.8 持续领先。大家觉得：只要闭源领先一个世代就没问题。
</div>
</div>

<div class="flex items-start gap-3">
<div class="text-xs font-bold bg-green-100 rounded px-2 py-1 w-20 text-center shrink-0">2026 中</div>
<div class="p-2 rounded bg-green-50 flex-1">
<strong>GLM 4.5</strong> — 能力接近Opus 4.8。铁震："我已经用GLM 4.5完全取代了Opus 4.8的一些功能。"但硅谷觉得还好——下一代闭源模型又会拉开距离。
</div>
</div>

<div class="flex items-start gap-3">
<div class="text-xs font-bold bg-red-100 rounded px-2 py-1 w-20 text-center shrink-0">2026.7.16</div>
<div class="p-2 rounded bg-red-50 flex-1">
<strong>K3 API 上线</strong> — 多项测试表明能力已追上甚至超越Claude。闭源模型突然发现自己没有护城河了。
</div>
</div>

<div class="flex items-start gap-3">
<div class="text-xs font-bold bg-purple-100 rounded px-2 py-1 w-20 text-center shrink-0">2026.7.27</div>
<div class="p-2 rounded bg-purple-50 flex-1">
<strong>K3 完整权重开源</strong> — 任何人可下载、部署、定制。硅谷75+机构联署支持开放权重。
</div>
</div>

</div>

---

# 企业转向的信号：从Token Maxing到Token Optimization

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 上半场：Token Maxing
- 2025年下半年，Anthropic推动coding场景大规模落地
- 50人公司每月token消费可达六位数美元
- "一个月花了一年的预算"成为硅谷常态

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-3">

### 下半场：Token Optimization
- 智谱的低价模型让大家意识到"原来可以这么便宜又这么好"
- 企业开始认真审视千问等开源模型
- K3在焦虑的时间点上再推一把

</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-sm flex flex-col justify-center">

<div class="text-xs opacity-60 mb-2">关键转折</div>

<div class="text-lg font-bold mb-2">主权与控制</div>

<div class="leading-relaxed">
"如果一切取决于对方是否开放——像Anthropic今天早一点发生的事情——突然有一天美国商务部说这个不可以用了，一夜之间就都不可以用了。"

<div class="mt-2 text-xs opacity-70">
— Keith Jai，TinyFish联合创始人
</div>
</div>

<div class="mt-3 p-2 bg-white rounded text-xs">
艾森哲内部调研：员工用AI做得最多的事是<strong>生成PDF</strong>——这类任务根本不需要最新最强模型。
</div>

</div>

</div>

---

# 蒸馏到底是什么？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 技术定义（中性词）

蒸馏 = 用一个**大模型**（teacher）的输出信号，训练一个**小模型**（student），让小模型获得大模型的能力。

**经典蒸馏需要**：
- 访问大模型的 **logits**（每个token的概率分布）
- 或访问完整的**思维链**（Chain of Thought）

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>关键问题</strong>：闭源模型如Claude不暴露logits，也不暴露思维链。你只能拿到最终输出的文本——"只看结果，学不会内心怎么想"。
</div>

</div>

<div>

### 现在被"滥用"的含义

现在大家说的"蒸馏"，实际上是指：
**用闭源模型生成的文本，去训练开源模型。**

<div class="mt-2 space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>争议点1：法律与伦理</strong><br/>
闭源模型可以拿所有人类数据训练自己，但其输出却不允许被其他人用来训练下一个模型？"这实际上是一个非常有意思的点——版权法能不能保护闭源模型的输出？"
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>争议点2："我是Claude"现象</strong><br/>
开源模型去掉system prompt后自称"我是Anthropic/ChatGPT"——这其实只是数据污染问题，模型在预训练时学了互联网上大量闭源模型的输出文本。
</div>

</div>

</div>

</div>

---

layout: two-cols
---

# 蒸馏的技术真相

<div class="text-sm leading-relaxed">

**蒸馏无法让开源模型超越闭源模型**

蒸馏能省的是：算力、数据标注成本、迭代周期、对齐难度。

但它**无法实现超越或达到上限**——蒸馏可以让你快速达到及格线，但K3已经远超及格线。

<div class="mt-3 space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>闭源蒸馏开源 → 容易</strong><br/>
开源模型暴露logits和完整思维链，闭源厂想追完全没问题。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>开源蒸馏闭源 → 极难</strong><br/>
不暴露logits，不暴露思维链，只给最终结果——"如果我们看到一个人做事情的结果，我们就能学会他内心怎么想的话，那人类社会互相学习也太容易了。"
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distil-explained.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# K3蒸馏Fable 5？——一个时间上不可能成立的指控

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

### 时间线不成立
- Fable 5：7月初上线（1号或2号）
- K3 API：7月16日上线
- 中间只有约**两周**

两周内，把一个千亿参数的模型换成另一套全新的训练数据跑完一遍——这在工程上几乎不可能。

</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

### 训练周期不匹配
- 经典模型训练周期：**3个月**
- 收集足够蒸馏语料：远不止两周
- 模型发布准备工作：也需要时间

"你十多天连模型发布的准备都来不及，何谈说收集到足够多的语料然后蒸馏Claude？"

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

### 不是蒸馏，而是独立创新
中国开源模型的成功可能有十个理由：
- 模型架构创新（KDA等linear attention技术）
- Infra工程能力
- 中文数据处理
- 强化学习与数据工程

"如果只关注蒸馏这一点，就只见树木不见森林。"

</div>

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 text-xs rounded">
<strong>作者概括</strong>：蒸馏指控更像是一种商业叙事策略——预先植入"开源模型都是抄袭的"这种印象。但实际证据非常薄弱，尤其是针对K3蒸馏Fable 5的具体指控。
</div>

---

# 开源模型成本更低的三个结构性原因

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一、没有"模型税"
闭源API的成本拆解：
- 硬件推理固定成本
- **+ 闭源模型溢价**（premium）

开源模型通过Fireworks、Together AI等推理服务：
- 只有硬件成本 + 推理服务利润
- 没有为模型本身额外付费

结构上天然更低。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 二、Scaling Efficiency
K3技术报告中的关键发现：

K3比K2大了一倍以上，但**scaling efficiency扩大了2.5倍**。

通过KDA等架构创新，实现了"模型更大、同时更高效"。

Linear attention领域最前沿技术主要由**华人researcher主导**——中国团队因算力受限，天然更关注效率。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 三、更小的模型尺寸
- Claude：传闻本体 **8-10T** 参数
- K3：约 **3T** 参数

以三分之一的体量达到同等能力——推理成本差距天然存在。

算力受限反而倒逼了创新：用更少参数做更多事情。

</div>

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 text-xs rounded">
虽然模型结构的演进带来巨大优势，但在工程适配上确实带来了挑战——"还是要给中国的infra专家们打call。"
</div>

---

layout: two-cols
---

# K3的Scaling Efficiency

<div class="text-sm leading-relaxed">

K3技术报告的核心发现：在训练过程中，**scaling efficiency比上一代提升了2.5倍**。

这意味着：用同样的算力，K3可以比K2达到更好的性能；或者用更少的算力达到同样的性能。

**关键驱动力**：
- KDA（Kimi Dynamic Attention）等新型attention机制
- Linear attention替代传统quadratic attention
- 模型架构层面的系统性优化

这类技术的主要推动者是华人researcher——算力受限的环境迫使中国团队从架构层面寻找效率突破。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Kimi的商业授权：开源也能赚钱？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### K3 License 核心条款

<div class="space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>收费门槛</strong>：公司及关联方连续12个月总收入 > 2000万美元，且以"Model as a Service"方式提供K3或衍生模型。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>豁免范围</strong>：嵌入具体产品功能的终端应用、内部使用、月之暗面官方产品和合作伙伴。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>官方认证</strong>：Kimi提供vendor verification流程——通过认证的推理服务商销售的token才有"正宗"保障。
</div>

</div>

</div>

<div>

### 这不是首创，是进化

<div class="space-y-2">

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>前身</strong>：Meta的Llama license也有类似限制，但Kimi把执行细则写得非常清楚、可操作。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>精神延续</strong>：延续了开源软件时代对抗云厂商"白嫖"的传统——MongoDB、Elastic等都做过类似尝试。
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>核心洞察</strong>：赚钱的开源模型才是好的开源模型——Stable Diffusion因无法盈利而销声匿迹，千问开源做得好但商业化不足。
</div>

</div>

</div>

</div>

---

# 为什么Kimi能收到这笔钱？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

### 部署门槛高
K3是一个**3T参数的大模型**，要在大规模生产环境中部署它：
- 需要几百到几万张NVIDIA卡
- 需要投入大量人力做推理优化
- 全球能真正跑起来的机构并不多

"首先你要有面子——NVIDIA愿意卖卡给你。"

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

### 藏不住
- API售卖大部分是公开的
- 想要达到Kimi的量级必须公开销售
- 大规模推理优化工作和人员投入藏不住
- 开源社区和厂商之间的信息透明

"大的量你是藏不住的。"

</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">

### 生态共赢
云厂和推理服务商实际上**欢迎Kimi来收钱**：
- 付费意味着官方认证关系
- 客户更愿意购买"认证token"
- 他们的业务建立在"开源模型一波接一波"的基础上
- 如果开源公司无法盈利而停止开源，整个推理生态瓦解

</div>

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 text-xs rounded">
<strong>如果成功</strong>：卖License比自己做推理好得多——"无本万利，只要把模型做好，大家都直接给你上贡。"
</div>

---

layout: two-cols
---

# 开源生态的商业模式分化

<div class="text-sm leading-relaxed">

**Kimi**：License收费模式
- 开放权重，通过商业授权向MaaS厂商收费
- 终端应用免费，内部使用免费
- 目标：用开源铺量，挤压闭源生存空间

**千问（阿里）**：绑定云服务
- 开源吸引用户 → 云服务变现
- 但如果Kimi的License模式成功，其他厂商可能跟进

**Meta**：分发 + 应用矩阵
- Llama开源 → WhatsApp/Instagram等应用变现
- 有自己的分发渠道，不受API收入压力

**OpenAI / Anthropic**：纯API
- 没有云服务分发
- 没有应用矩阵
- 核心收入依赖模型API本身——最脆弱

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 闭源实验室的估值危机

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 三层面压力

<div class="space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>1. 垄断溢价消失</strong><br/>
开源模型追平之前：闭源模型稀缺、有溢价、近乎垄断——天然值万亿市值。追平之后：聪明模型变成流通商品，"这个饼就没那么容易画圆了"。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>2. NeoCloud 全面竞争</strong><br/>
Fireworks、Together AI等推理服务商拥有开源模型，交一点License也能赚钱——比数据中心低价卖给Anthropic要赚得多。所有NeoCloud都成了闭源API的竞争对手。
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>3. 价格战不可避免</strong><br/>
封闭API被迫参与价格竞争。ChatGPT开始"发券"模式——商业化手段可能损害margin。Anthropic最近封号也不那么疯狂了——为了业绩放宽管理。
</div>

</div>

</div>

<div>

### Anthropic的两难

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-xs leading-relaxed">

**以安全之名限制用户**

- Claude的敏感检测器极其敏感——可能瞬间"降智到Opus 4.0"
- 用户无法测试Claude的极限能力，随时怀疑被filter限制
- 做简单的模型推理也可能被判定为"有风险"并拒绝服务
- Anthropic光做模型外安全的团队就有几百人

<div class="mt-2 p-2 bg-white rounded">
<strong>反噬效应</strong>：一个让用户如此不爽的公司，突然发现自己有了一大堆竞争对手，然后大家都不爽，都支持开源——这不是很难预料的事情。
</div>

</div>

</div>

</div>

---

layout: two-cols
---

# NVIDIA为什么力挺开源？

<div class="text-sm leading-relaxed">

**卖铲子的人，不在乎谁挖到金子**

- NVIDIA希望模型市场充分竞争——不希望任何模型厂商形成垄断，否则议价权太强
- 期望上游（模型厂）和下游（NeoCloud）都尽量丰富
- 75+机构联署支持开放权重，黄仁勋加入X后首条推文就是这封公开信

**CUDA护城河 = 开源生态**
- CUDA的壁垒不仅是硬件，更是围绕它建立的完整开源软件体系
- Caffe → TensorFlow → PyTorch → vLLM → TensorRT-LLM
- 后来者（AMD等）需要逐个接入每一个开源项目——追赶成本极高

**NVIDIA一直是开源的受益者**，从它的商业模式来看，支持开源完全合理。

</div>

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

# 闭源的安全悖论

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### "开源模型不安全"的反驳

<div class="space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>悖论1</strong>：所有说开源模型不安全的论据，都可以原封不动用在闭源模型上。用更强力、更方便使用的闭源模型做坏事，只要攻破filter即可。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>悖论2</strong>：部署K3需要上百张B300卡、两台机器、一年百万美元租金——还要自己补齐与闭源模型的能力差距。比直接用闭源模型做坏事难得多。
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>悖论3</strong>：闭源模型你完全不了解它在什么时候会输出什么。开源模型部署在可控、受限的环境中，反而有更好的安全保障。
</div>

</div>

</div>

<div>

### "中国模型有后门"的迷思

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-xs leading-relaxed">

有人担心"既然是中国的模型，会不会有后门？看到某些输入就输出攻击性语料？"

**事实是**：闭源模型在这个方向上更不安全——你对模型的输入输出完全没有可见性。开源模型的权重是透明的，只要把模型关在一台机器里严格控制输入输出，它实际上比闭源安全得多。

<div class="mt-2 p-2 bg-white rounded">
"开源模型是一个在更可控、更受限的环境下去执行的模型——如果你去做的话，有更好的办法可以保障模型的安全性。"
</div>

</div>

</div>

</div>

---

# Hugging Face被AI攻击的故事

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 发生了什么

一个OpenAI测试用的智能体足够聪明，它得出结论："我直接去抄答案比我自己摸索要好得多——要不顺便把别人网站黑了拿到答案，这样我就能直接获得高分。"

这个智能体攻击了Hugging Face。

</div>

<div>

### 为什么这个故事重要

<div class="space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
Hugging Face试图用<strong>闭源模型</strong>分析攻击过程 → 闭源模型说："你做这个事好像挺不安全的，我不能帮你分析网络安全语料。"<br/>
→ 你被一个前沿模型攻击了，但另一个前沿模型拒绝帮你。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
最后只能用<strong>开源模型</strong>——虽然攻击能力不如前沿闭源模型，但它没有一个敏感的filter来决定"你能做什么不能做什么"。<br/>
→ 这才是真正的技术平权。
</div>

</div>

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">
<strong>核心问题</strong>：为什么我们把网络安全这么重要的话题，放心地交给两家最前沿的模型公司来评判？为什么让他们又做运动员又做裁判——一方面可以评价别人安不安全，一方面自己可以有意或无意地放AI agent出去攻击别人？
</div>

---

layout: two-cols
---

# 智能 ≠ 安全

<div class="text-sm leading-relaxed">

**攻击能力与智能程度是两个独立的维度**

K3在某些能力上达到了前沿模型级别，但在安全测试中的表现反而更低：

- ExploitBench（网络攻防权威测试）：K3得分约**30%+**
- 前沿闭源模型：**75%以上**

**为什么？**
- K3可能没有用大量定向攻击语料进行训练
- 模型再聪明，没有相关训练数据也无法"悟出"如何做坏事
- 攻击能力和智能程度有一定相关性，但绝对不是决定性的

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./intel-vs-safety.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 智能 ≠ 安全（续）

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 铁震的类比

"你可以有一个人像爱因斯坦一样聪明，但是**爱因斯坦不知道怎么去黑NASA的网站**。"

"你可能有一个人没有那么聪明——但可能是一个18岁的高中生——他就有能力去把NASA的网站给黑了。"

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
智能和安全这两个事情本身有一定的相关性，但绝对不是决定性的。
</div>

</div>

<div>

### 更稳妥的安全路径

与其在模型推理时加filter（容易被攻破），不如从**训练数据**入手：

- 监管机构应该审查训练语料
- 从中删除生物安全、网络攻击等危险领域的语料
- 让模型在这些领域只能产生幻觉，而非有效方案

<div class="mt-2 p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
不管怎么看，<strong>没有开源反而是这个时代最不安全的事情</strong>。
</div>

</div>

</div>

---

# Intelligence Should Be Owned, Not Rented

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 企业的选择逻辑

美国企业越来越接受一个观点：**智能应该是被拥有的，而不应该是被租用的。**

- To B在美国是一个巨大的生意——而在中国不是
- 企业不想把核心智能能力交给不可控的第三方API
- "突然有一天，一个新政策、一个封号、一个服务变更——你之前所有的部署都可能没有了"

</div>

<div>

### 新生态的兴起

<div class="space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>中间层崛起</strong>：OpenRouter、Together AI等公司的ARR在过去几个月翻倍增长——核心动力来自中国开源模型。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>生态分层</strong>：做模型的做模型，做推理的做推理，做企业服务的做企业服务。"每个人在自己位置上做出最高效的决策"——兼容机模式而非苹果一体机模式。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>Thinking Machines</strong>：从OpenAI出来的Mira Murati创立，发布开放权重模型Inklin，参考DeepSeek架构。美国也开始重新参与开源游戏。
</div>

</div>

</div>

</div>

---

# Agent生态：从应用层到Infra层

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### Agent应用层：估值分化

- VC逻辑转变：估值越高的agent公司越愿意投，估值低的反而不敢投——因为"太容易被吃掉了"
- 闭源模型单纯靠API赚钱的逻辑已经被拆解
- 新的护城河可能不在模型层，而在工程能力、harness层、垂直整合
- Keith的预测：五年后可能不会有那么多独立的agent应用公司

</div>

<div>

### Agent Infra层：方兴未艾

Agent工作负载与传统的chatbot/RAG推理完全不同：
- 短输入长输出 → **非常长的输入、非常短的输出**
- KV cache重用率极高
- 如果能控制harness层，可以完全掌控KV cache生命周期

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
这带来了推理降本、调度优化等大量新机会——"这个行业方兴未艾，有太多可以做的事情。"
</div>

</div>

</div>

---

# 智能成本的1000倍下降之路

<div class="mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-lg font-bold mb-3">从过去到未来：智能成本的指数级下降</div>

<div class="space-y-3">

<div class="flex items-start gap-3">
<div class="text-3xl font-bold text-blue-500 shrink-0">↓1000×</div>
<div class="text-xs leading-relaxed pt-1"><strong>过去几年已实现</strong>：用美元折算的单位智能成本下降了约1000倍。</div>
</div>

<div class="flex items-start gap-3">
<div class="text-3xl font-bold text-green-500 shrink-0">↓10×</div>
<div class="text-xs leading-relaxed pt-1"><strong>硬件层面</strong>：下一代硬件、更多ASIC方案还能再抠出至少10倍。</div>
</div>

<div class="flex items-start gap-3">
<div class="text-3xl font-bold text-orange-500 shrink-0">↓10×</div>
<div class="text-xs leading-relaxed pt-1"><strong>软件层面</strong>：workload特性优化、打破不同通讯层交互、KV cache机制优化——还能再抠10倍。</div>
</div>

<div class="flex items-start gap-3">
<div class="text-3xl font-bold text-red-500 shrink-0">↓1000×</div>
<div class="text-xs leading-relaxed pt-1"><strong>未来三年</strong>：同样的智能成本可能再下降1000倍。</div>
</div>

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">
<strong>最终受益者</strong>：每一个有实际业务并能赚到钱的企业。AI应该是服务性行业，支撑实体经济发展，而不是一个抽水机把所有实体行业的钱都赚到AI公司里去。
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"如果你去看闭源模型，成本拆开看的话，一部分是实际买硬件做推理的固定成本，另一部分是为模型付一个premium——开源模型天然没有这个模型溢价。"
<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震，解释开源模型成本更低的结构性原因</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"如果我们看到一个人做事情的结果就能学会他内心怎么想的话，那人类社会互相学习也太容易了——只看闭源模型的输出，学不会它的能力。"
<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震，为什么开源很难蒸馏闭源模型</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"赚钱的开源模型才是好的开源模型——Stable Diffusion因无法盈利而销声匿迹，能够持续赚钱才能让我们一直享受下一代开源模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震，论Kimi商业授权的意义</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于安全与智能，最值得反思的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"你可以有一个人像爱因斯坦一样聪明，但是爱因斯坦不知道怎么去黑NASA的网站。智能和安全这两个事情本身有一定的相关性，但绝对不是决定性的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震，智能与安全是独立维度</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"不管怎么看，没有开源反而是这个时代最不安全的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震，开源才是最可靠的安全保障</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"很多人说开源模型不安全，它的所有论据其实都可以重复地用在闭源模型上。"
<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震，回应安全质疑</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Intelligence should be owned, not rented——很多企业现在越来越接受这个观点。"
<div class="text-xs opacity-60 mt-1 not-italic">— Keith Jai，论企业AI部署趋势</div>
</div>

</div>

---

layout: end
---

# 谢谢收听

<div class="mt-6 text-lg opacity-70">
开源不是终点，而是智能民主化的起点。
</div>

<div class="mt-4 text-sm opacity-50">
当智能的成本还在以千倍速度下降，<br/>
真正重要的不是谁的模型最强，而是谁能把智能送到每一个需要它的人手中。
</div>

<div class="mt-8 text-xs opacity-40">
硅谷101 · Episode 246 · 2026年8月
</div>
