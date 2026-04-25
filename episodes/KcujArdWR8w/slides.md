---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '数据的综述 · 谢晨 × 张小珺 商业访谈录'
info: |
  张小珺《商业访谈录》第 134 期：和光轮智能 CEO 谢晨，把 "AI 的三架马车之一 —— 数据"
  这个产业做一次综述。从新时代的石油、数据金字塔、以仿真为中心的闭环，到定价、
  Recipe、BEHAVIOR、中美团队 Mapping，到终局是不是一家 AI 教育公司。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 数据的综述

<div class="text-xl opacity-80 mt-2">新时代的石油 · 历史 · 版图 · 数据金字塔 · 定价 · Recipe</div>

<div class="text-lg opacity-60 mt-6">
张小珺《商业访谈录》#134 · 嘉宾：<strong>谢晨 Steve</strong>（光轮智能 CEO）
</div>

<div class="mt-8 text-sm opacity-60">
~3h · 2026-03 · 大语言模型撞墙 / 机器人荒漠 / 仿真 / 具身智能
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 综述，不是发散
算力 / 算法 / 数据里，专门把"**数据**"这一架马车拎出来做一次产业综述。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 两端都在撞墙
LLM 的互联网数据吃完了；机器人的数据仍是**一片荒漠**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 嘉宾在中间
谢晨（Steve）从 Cruise / 英伟达 / 蔚来一路到光轮智能，<strong>仿真 + 合成数据</strong>领域的少数实操者。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 过去 3-6 个月有质变
所有头部大模型团队"都来找了我们"。过去是他主动推销，现在是客户主动上门。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一套金字塔
真机 / 仿真 / 人类第一人称视频 —— 三层金字塔是这期的核心框架。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 反直觉结论
终局：Data Factory 会消失。留下的是一个**环境**，让 AI 自己修炼内功。

</div>

</div>

---

# 嘉宾：谢晨（Steve 谢晨）

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**履历**
- 北大物理本科 → 哥伦比亚大学量化金融博士
- Jet.com 动态定价 AI 负责人（后被沃尔玛收购）
- **2018** 加入 Cruise，做自动驾驶仿真
- **2021** 转岗英伟达自动驾驶仿真，6 个月后携家带口回国
- 蔚来自动驾驶仿真
- **2023** 和联创杨海波创立**光轮智能**，做机器人仿真 + 合成数据

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 自我定位
> "我可能希望做一件事，要不然就不做，要做就能够做到最好……可能在国际上能够做到第一名第二名，或者说除了我之外就没有人能够做得更好。"

他花了很长时间发现自己**不擅长**什么（物理、金融、狗友 APP），才最终找到仿真。

</div>

</div>

<div class="mt-4 p-3 bg-gray-50 rounded text-sm opacity-80">
<strong>作者概括</strong>：这是一个很典型的"长期试错型"路径。谢晨自己用巴菲特 / 郎朗做反例 —— 那种十岁就找到方向的是少数，多数人得花时间排除错误选项。
</div>

---

# 仿真不只是"时间机器"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 第一阶段：自动驾驶
谢晨最早管仿真叫**时间机器**：

> "假如说没有仿真，可能自动驾驶要花十五年的时间，有了仿真没准五年的时间可以达到。"

在自动驾驶里，仿真是**加速器** —— 真实数据还是主力（买车的司机开回来的）。

</div>

<div>

### 第二阶段：具身智能
但他很快换了说法：

> "仿真难道只可以作为一个时间机器吗？有没有可能它对于 AI 类似于英伟达的卡一样 —— 没有英伟达 AI 就不会发展，而不是说有了它只会发展得更快。"

对机器人：仿真是**前提条件**，不是锦上添花。

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-lg italic">
这个认知差是谢晨离开大厂出来创业的根本原因 —— 如果只是加速器，不值得在外面做。
</div>

---
layout: two-cols
---

# 数据 = 教育：四个阶段

### 一条跟人类教育相似的演化路径

<div class="text-sm opacity-70 mt-2">谢晨的核心类比：</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-xl italic text-center">
"数据约等于教育。"
</div>

<div class="mt-4 text-sm opacity-75">

不同阶段的"数据"在做的事，对应不同阶段的"教育"：

- **填鸭式**（教材 + 标准答案）
- **量贩式**（工厂化流程）
- **一对一私教**（因材施教）
- **环境 + 自学**（考试驱动）

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-evolution.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 三代数据产业代表

<div class="space-y-3 mt-4 pr-4">

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded">
<strong>李飞飞 · ImageNet</strong>
<div class="text-xs opacity-70 mt-1">静态数据集，几年打磨一次，机器视觉。谢晨原话："李飞飞是真正的定义了 AI 数据这件事。"</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Scale AI · Data Foundry</strong>
<div class="text-xs opacity-70 mt-1">自动驾驶标注 → RLHF 服务，把数据产线工厂化。"Foundry 有点类似于学习台积电的晶圆厂这样一个模式。"</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Surge / Mercor</strong>
<div class="text-xs opacity-70 mt-1">湾区新兴，为大语言模型提供后训练 + 评测。"这些人时薪都是在一百美金以上。"</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>光轮智能 · Data Engine</strong>
<div class="text-xs opacity-70 mt-1">以仿真为中心，评测反馈驱动。</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./education-ladder.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据的定义在变

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500">

### 旧：正确的标注
自动驾驶标框、行人、自行车 —— **有标准答案**。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 新：经验的传授
师者 / 传道受业解惑 ——"根据你的能力、根据你的阶段，基于一些对你的评价、发现问题并给你足够的有经验的传授反馈。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 再新：评测 + 环境
"它从一个静态的数据，慢慢的变成一个教育的系统。"

</div>

</div>

<div class="mt-6 p-5 border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">
<strong>一个很反直觉的推论</strong>：大模型时代的数据"其实没有严格的正确，也没有严格的完美。每个人的回答都是不一样的 —— 但是这些不同人的分布、多样性、甚至是一些错误的数据，都会是极其有价值的。"
</div>

---

# "数据即模型"？谢晨的反驳

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 李广密的观点（上期播客）
> "所以他（李广密）提出说数据即模型模型即应用。"

基于的事实：今天的模型还是一个巨大的压缩器，没压缩过的任务就不成功。

### 谢晨短期同意，长期反对
- **短期**：现阶段你要什么执行率，就得补什么数据 —— 合理
- **长期**：这不是本质。**架构没解决零样本泛化，就不是通向通用智能的模型**。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 反例：人的算法不一样

> "普通人的学习的算法和马斯克的学习的算法也是不一样的。马斯克的学习的方式可能是更多的是从第一性原理出发……我认为他的模型可能会比普通人的模型要更加的有效很多。"

**推论**：如果"数据即模型"为真，世界上所有人就该一样了。现实是：同样的数据，不同的"架构"学出完全不同的人。

所以数据重要，但**架构 + 算法才是上限**。

</div>

</div>

---

# 2026：具身 Scaling Law 的端倪

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 两个信号

**一、英伟达 GR00T + 李飞飞 BEHAVIOR Challenge**
用了大量仿真数据，模型泛化能力被验证。

**二、Generalist 的 27 万小时数据**
> "他用了二十七万小时的 UMI 夹爪的这个数据……他们已经证明就是说这二十七万小时数据，在模型上看到了 Scaling Law。"

UMI 夹爪本质上是"人两个手拿着夹爪去采集" —— 属于**人类数据**的一种。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 谢晨的判断
> "我其实认为现在已经达到了一个 Scaling Law，就是具身的一个数据的一个 Scaling Law。"

**而且是从"本体无关"那一层出来的** —— 仿真 + 人类视频，而不是机器人本体遥操。

### 后果
过去 3-6 个月客户需求"质变"：
- 从"我们去刺激需求"
- 到"规模化团队来交付客户的需求"

</div>

</div>

---
layout: two-cols
---

# 数据金字塔（朱玉可教授提出）

<div class="mt-4 pr-4">

### 三层，从稀少到海量

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>顶层</strong>：真实机器人遥操数据 —— 最准，最难规模化
</div>

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>中层</strong>：仿真 —— 规模化能力强，有 Sim2Real gap
</div>

<div class="mt-2 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>底层</strong>：互联网 + 人第一人称视角视频 —— 最多，本体无关
</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>底层两层（仿真 + 人）共同特征</strong>：不需要依赖硬件本体就能产生 —— 这是规模化的关键。
</div>

<div class="mt-4 text-xs opacity-70">
谢晨原话："如果没有具身的金字塔的下面的仿真和人类数据，我认为就是具身这件事的通用智能就出不来。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-pyramid.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么特斯拉模式在具身不成立

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 自动驾驶 / 特斯拉逻辑
特斯拉上百万辆车 → 司机开回真实数据 → 训练云端大脑 → 推回车端 → 数据飞轮。

**逻辑核心**：数据 90%+ 来自自己的本体 → OEM 自己就是最大的大脑公司。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 具身 / 机器人不一样
- 没有百万台机器人部署着
- 人去遥操成本高又不可规模化
- 金字塔**最大的两层**（仿真 + 人）**本体无关**

**推论**：机器人最多的数据**不会从本体上来**。OEM 同时成为最大大脑商的逻辑破产。

</div>

</div>

<div class="mt-6 p-5 border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">
<strong>最有力的佐证：Optimus 的大脑不是 Tesla 做的</strong> —— 
<br>
"Optimus 的大脑其实是安排给 xAI 去提供的，而并不是让特斯拉自己去提供。一样的一个道理，一定会是一个大模型商去做这件大脑。"
</div>

---
layout: two-cols
---

# 四角色生态

<div class="pr-4 mt-4">

### 取代"一家通吃"的，是四者协作

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>大模型商</strong>：用本体无关数据冲 Scaling Law。提供大脑。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>数据商</strong>：提供评测 + 反馈，和大模型商**共生**。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>本体商</strong>：量产硬件，拿大模型商的大脑去落地。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>场景商</strong>：OEM / 医疗集团 / 农业 —— 自带场景和选择权。
</div>

</div>

<div class="mt-4 text-xs opacity-70">
谢晨原话："场景公司他们有更大的一个自主权，因为其实他们可以选择 A 硬件公司的硬件，也可以选择 B 硬件公司的硬件。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ecosystem.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 大模型公司内部的三个团队

<div class="pr-4 mt-4">

### 一个"大脑公司"其实是三个团队协作

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>LLM 团队</strong>：数字世界的大脑。具备一定世界模型能力，但缺对物理世界的理解。
</div>

<div class="mt-2 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>世界模型团队</strong>：对物理世界有预测和理解能力，但没有行动力。→ 云端大脑
</div>

<div class="mt-2 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>VLA 团队</strong>：在物理世界里精确、有效、高效地行动。→ 端侧大脑
</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>共同点</strong>：基建（卡、RL infra）**至少一个数量级**比机器人公司多。大模型团队几万张卡，机器人公司几千张卡已经很多。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./teams.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 世界模型 vs 仿真 vs 视频模型

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 仿真（谢晨的严格定义）
1. **物理准确**（摩擦力 / 物理参数对齐）
2. **可复现**（跑 100 遍结果相同）
3. **可修正**（同起点改行动看到不同结果）

</div>

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500">

### 视频模型
"更多的是一个对下一帧的预测……很难去复现，它没有行动，很难做大规模可靠评测。"

→ **不能称之为仿真**

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 世界模型
"有机会真正的成为仿真的一类" —— 但和仿真是**共生**而非谁取代谁。

云端大脑 vs 端侧大脑。

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-green-500 bg-green-50 bg-opacity-30">
<strong>共生关系实例</strong>：世界模型客户用光轮的数据来提升物理 Grounding；光轮用客户的世界模型帮仿真做更好的泛化。"他们在用我们的数据，我们在用他们的模型。"
</div>

---
layout: two-cols
---

# 机器人的 Waymo / 特斯拉 / 马斯克？

<div class="pr-4 mt-4">

### 谢晨觉得三种模式都会存在

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Waymo 模式</strong>：垂类场景深耕。例如矿山自动驾驶。"它要花很长的时间在第一个场景完全落地。"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Tesla 模式</strong>：要成立，OEM 必须自己是最大的本体 + 最大的大脑 —— 谢晨觉得"在具身就不成立"。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Musk 体系模式</strong>：**Tesla 做本体、xAI 做大脑**，是两个公司一个体系 —— 这是最可行的一条路。
</div>

</div>

<div class="mt-4 p-3 bg-gray-50 rounded text-xs opacity-80">
国内可能的对标：小米（大厂 + 本体）；OEM 做大脑需要几万张卡 + 全球最好的世界模型团队 —— 蔚小理理想有机会，但门槛高。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-modes.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Figure 是具身领域的特斯拉吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 张小珺的提问
"这行业有具身领域的特斯拉吗？"

### 谢晨的答复
> "我觉得可能 Figure 是希望成为具身领域的特斯拉。它有它自己的这个硬件，它在规模化的去量产，那它在落地同时它也在做自己的大脑。但是还很远 —— 因为它的场景实在是太模糊了，我觉得难度还是很高的。"

</div>

<div class="p-5 border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 关键张力
Figure 想同时做：
- 量产的硬件本体
- 自己的大脑
- 打通一个（或多个）垂直场景

但金字塔的前提告诉你：**大脑的数据 90% 不在 Figure 自己的本体上**。

**→ 所以 Figure 要么更像 xAI（分裂出一个做大脑的公司），要么永远只能做"偏垂直场景的 Waymo"。**

</div>

</div>

---

# 评测：自动驾驶免费，具身不免费

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 自动驾驶 & LLM 的"免费午餐"

**影子模式（Shadow Mode）**
- 算法部署在车端但不执行
- 跟开车司机的行为做对比
- 差异处就是免费的反馈信号

**LLM 也有影子模式**
- 用户用 ChatGPT 时给的反馈（点赞、编辑）
- 全都是免费的评价信号

"这是一个极其便宜廉价或者免费的一个信号拿回来。"

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 具身没有

> "对于具身来讲的话，现在并不具备这样一个大规模的评价的能力。那我认为这个一定要基于仿真去提供。"

没有百万台真机 → 没法做影子模式 → **唯一方案：基于仿真做规模化评测**。

### 这是谢晨的核心论点
> "如果是具身的话，我觉得可能现在最关键的问题是**评测的规模化**，这个是最核心的问题。"

</div>

</div>

---

# BEHAVIOR Challenge：26%

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 李飞飞做的具身 Benchmark
- 基于仿真、长程任务、难采集的数据
- 同一套 Benchmark 可以同时评价 **VLA 和世界模型**
- 谢晨在 NeurIPS 帮颁奖

### 为什么是"够难的那一个"？
> "其他学术级 Benchmark，最棒的这些大模型商，他们都已经把他们的 Benchmark 给打爆了……都被打爆了。那其实足够难的是 BEHAVIOR。"

</div>

<div class="p-6 border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 当前最高分

<div class="text-center my-4">
<div class="text-6xl font-bold text-red-600">26%</div>
<div class="text-sm opacity-70 mt-1">BEHAVIOR 一百道题的最高成功率</div>
</div>

<div class="text-sm opacity-80">
"BEHAVIOR 一百道题，可能现在最高的分数成功率是 26%。所以还有一段路要走。"
</div>

</div>

</div>

---

# 具身数据的现状：0.6 分都不到

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 大语言模型的数据位置

<div class="text-center my-3">
<div class="text-5xl font-bold text-blue-600">~60</div>
<div class="text-sm opacity-70 mt-1">分（满分 100）</div>
</div>

- 预训练数据：基本到顶（互联网吃完了）
- 后训练 + 评测：**还有很长的路**
- 瓶颈：找越来越高阶的人、出越来越难的题（**魔高一尺道高一丈**）

</div>

<div class="p-5 border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 具身的数据位置

<div class="text-center my-3">
<div class="text-5xl font-bold text-red-600">&lt; 0.6</div>
<div class="text-sm opacity-70 mt-1">分 —— "零点六分都不到"</div>
</div>

<div class="text-sm opacity-85">
"假设一百万个机器人所回来的数据是一个起点，这个起点可能都不是一百分是一个六十分。我觉得现在都没有一万台机器人……可能零点六分都不到。"
</div>

</div>

</div>

---

# 好数据 = 先失败再成功

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 一个反直觉的价格曲线

**披萨任务举例**
- 完美做一个披萨：便宜
- 放蘑菇时掉到桌上、捡起来再放回去：**贵**

"这类的数据会更贵。就是其实跟很反直觉 —— 大家可能认为一个完美的做 Pizza 的一个视频可能会最贵，但其实不是。"

### 为什么？
> "有点类似于人的学习人的经验 —— **失败了以后再成功的经验，往往是最宝贵的**。"

这是节目开头谢晨就放出来的预告：
> "其实最有效的数据是先失败再成功的数据。"

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 具身数据的三要素

**① 物理场景**
足够多样化，交互真实，符合真实物理

**② 经验轨迹 + 传授**
流畅专业的轨迹 + 语言标注
**失误里有修正 → 最有价值**

**③ 评价指标**
长程任务的精细标注：第一次放蘑菇失败、第二次成功，都标出来

<div class="mt-3 text-xs opacity-70">
高质量数据定价：几百到上千人民币 / 小时
</div>

</div>

</div>

---

# 人类数据：Meta Ray-Ban 的聪明之处

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 把人当车

> "其实人，机器人我觉得大模型很关注的一个能力就是跨本体的能力……如果从这个角度来讲的话人是不是也是一个机器人？……相当于把人当车了。"

人戴消费级眼镜 → 出门买菜 → 第一人称视频 → 数据。

### 第一视角
"从第一性原理上来讲你越贴近人的视角是越好的。"
- 头顶 / 胸口的摄像头 ≠ 眼睛视角
- 因为**人就是这么工作的**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Meta Ray-Ban 的模式
> "他们特别特别聪明的一个点：首先这是一个很酷的眼镜，看上去很好的眼镜，其次他有一个 AI 的助手可以跟你去对话，他有一个摄像头。"

### 关键原则
> "人类数据的公司不应该做自己的硬件 —— 因为它的这个硬件很难达到一个消费级（百万级出货量）。"

应该做的是：**等一个消费级爆款，再通过 SDK/API 去采集**。

</div>

</div>

---

# 仿真派 vs 真机派：屁股决定脑袋

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 张小珺的观察
"国内机器人团队仿真派似乎不多"，他们的理由：
- 真机数据好泛化
- 仿真数据不好泛化

### 谢晨的反驳 —— 来自谭捷
> "仿真数据带来的是 Sim-to-real 的问题，不是泛化的问题。泛化的问题应该通过生成极大量的仿真数据来解决。"

谢晨同意这个观点。

</div>

<div class="p-5 border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 更根本的解释

> "它的商业模式还是去卖本体……它需要相信真机数据才能卖本体。就是否则我认为就是说，它其实我觉得本质上来讲还是一个**屁股决定脑袋**的事情。"

**真机数采厂 → 需要人买机器人做数采 → 必须"真机派"** —— 否则商业模式不成立。

### 讽刺的现场
> "大部分真机数采中心……你会看到他们也在用仿真。"

（用的是"假香蕉、假苹果"的物理仿真 —— 只是规模小）

</div>

</div>

---

# 过去三个月的真实转折

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 最早（~ 几个月前）
谢晨主动发邮件给头部 Frontier Lab。对方回复大意：
> "我知道你们是仿真最棒的，如果我要做仿真，我一定会来找你。但是我现在可能还没有到这个时间点。"

### 过去 3 个月
> "基本上他们都成为我们的客户，来规模化评测这件事。"

**反转原因**：他们自己撞到了评测规模化的天花板。
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 他们遇到的统一问题

> "他们没有办法去规模化他们的评测了，这个是他们的核心的问题……他们认为他们的算法有做的足够好了。"

例如：
- 家居场景、叠衣服做家务的大脑
- 需要"一千个不同的家居场景"随时评价
- **不可能靠真机获得**

**这就是为什么"规模化评测"成了瓶颈。**

</div>

</div>

---
layout: two-cols
---

# 以仿真为中心的闭环

<div class="pr-4 mt-4">

### 不是三层独立，是一个闭环

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Real-to-sim</strong>：人戴眼镜采集的第一人称视频 → 仿真里重建物理 / 场景 / 任务 / 评价标准
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Sim-to-real</strong>：仿真的训练和评测要和真机对标，否则"可以规模化也不能产生实质价值"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>以评测驱动</strong>：不只是训练对标，评测也要对标 —— 这是光轮自己有真机评测基建的原因
</div>

</div>

<div class="mt-4 text-xs opacity-70">
谢晨原话："数据金字塔……我认为它可能是以一个以仿真为中心的、以评测驱动为中心的数据的一个闭环。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sim-loop.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Data Factory → Data Engine

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 border-l-4 border-gray-500 bg-gray-50 bg-opacity-50">

### 张小珺：你们是 Data Factory 吗？

### 谢晨：不，我们是 Data Engine

**Data Factory**
- 流水线
- 缺乏先进技术
- 不是反馈 / 评测驱动
- 人为核心（要千万到亿人）

**Data Engine**
- 反馈驱动的学习引擎
- 以系统、工程能力为核心
- 通过技术**放大**人产生的经验
- 所需人力"可能小一百倍左右"

</div>

<div class="p-5 border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 光轮内部的全栈

**底层：仿真平台**
- 自研非刚体解算器（线缆插拔等工业场景）
- 物理测量工厂：机械臂自动化测真实物理参数

**两条数据管线**
- 人驱动（高质量，规模化差）
- 算法驱动（高规模，质量略低）+ 人在环质检

**两条评测管线**
- 仿真规模化评测
- 真机评测基建（和仿真对标）

全职团队：约 100 人，"更多的是工程技术方向的"。

</div>

</div>

---

# 定价逻辑：为什么数据越来越贵

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500">

### 预训练数据
<div class="text-center my-2">
<div class="text-3xl font-bold text-gray-600">最便宜</div>
</div>
**相对标品**，应该是平摊成本。"全世界有五家大模型公司去平摊了这份预训练的这个数据的成本。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 后训练 / 评测数据
<div class="text-center my-2">
<div class="text-3xl font-bold text-blue-600">最贵</div>
</div>
"评测驱动、针对性的指导" —— 价值和价格都会更高。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 具身数据价格带
<div class="text-center my-2">
<div class="text-xl font-bold text-orange-600">几十 ~ 几千 RMB/小时</div>
</div>
高质量的"几百到上千人民币"。

</div>

</div>

<div class="mt-6 p-5 border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
<strong>推论：数据价格不会随 AI 变聪明而下降</strong> —— 反而越往后，"魔高一尺道高一丈"，需要越高阶的人、越难的题 → 越贵。类比：聪明的人读的书更多，不是更少。
</div>

---

# 中美团队 Mapping（谢晨视角）

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 大模型派
"需要零样本的泛化能力" —— 相信本体无关数据、仿真、人类数据。

- **美国**：OpenAI、DeepMind、英伟达（Jim Fan / 刘洺堉）、PI（Physical Intelligence）
- **中国**：字节、阿里千问

谢晨在开场就点名的"五家激进"：字节、阿里、OpenAI、DeepMind、英伟达。

### VA vs VLA（自动驾驶路线）
- 小鹏走的是 **VA**（直接行动输出）
- 有可能 VA 就是自动驾驶的终局 —— 因为任务单一、智能上限不高

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 本体派
"去卖本体的数采厂模式" —— 屁股决定脑袋，必然是真机派。

### 务实派：宇树 / 智元
> "我个人比较看好宇树。宇树其实我觉得它还是一个更加偏本体的一个模式……它的定位很清晰，它也不和大脑公司去竞争，它也不想做大脑。"

> "智元我觉得商业化走的是很好的……他们可能从 DAY1 就想得很清楚，这件事如果说它要去体系化做的话，它就要把上下游完全打通。"

"具身可能某种层面上，现在还应该是一个供给驱动的市场 —— 你先把这个量给做出来。"

</div>

</div>

---

# 中国会追回来吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 现状
- 美国：大脑发展更快
- 中国：本体发展更快

### 谢晨判断：很有可能追回来

> "千问其实是现在可能最好的开源的大模型……他们在这我觉得做的决心是足够高的，他们的基建我觉得是足够好的，同时我觉得这会的人才密度也是足够高的。"

**之前为什么慢？**
"大厂之前重心还是在大模型、大语言模型，他一定要把这些事给争下来……现在已经开始把他们的资源开始去放到具身这块了。"

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 谁会是 Robotics 的 OpenAI / DeepMind？

- **OpenAI** —— 依然会是，Robotics 团队很强
- **DeepMind** —— 极其稳、极其优秀
- **NVIDIA** —— 很有希望，Jim Fan / 刘洺堉团队 + 资源给够
- **字节 / 阿里千问** —— 国内"极其优秀"

### 为什么不看好 xAI？
xAI 现在"还是要把重心把大模型给做好"（大模型那仗没打赢呢）；而特斯拉机器人的重心在"本体硬件优势"。
两条线现在还没汇到一起。

</div>

</div>

---

# 终局：AI 的教育公司

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 谢晨现在的认知

> "所以其实我越来越觉得我们可能做的是一个教育公司，AI 的教育公司。我认为终局的数据公司可能跟教育公司是长得很像的。"

### 智能越强，对数据越饥渴
> "我现在的观点是，我认为智能越强，其实它对于知识的饥渴程度会越高，对于数据的饥渴程度会越高。"

**只不过学习对象变了**：
- 小时候：看画本、老师言传身教
- 长大后：**与自己对标、自我提升**

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Data Factory 会消失，Data Engine 不会

> "Data Factory 它不是一个第一性的需求……我认为这个路径可能很快就会不需要。"

**留下来的是什么？**
> "到终局的时候，很有可能所有的人都不用我的数据，但都用的仿真的环境，在里头去用 RL 不断地去修炼内功。"

### 终局的定义
一个**环境** + 一个**不断更新的成功标准** → AI 自己修炼内功。

类比爱因斯坦：他的"仿真"是大脑里的思考实验。

</div>

</div>

---

# "我们人可能就在一个仿真里"

<div class="mt-6 p-8 border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-2xl italic text-center">
"我觉得就是说到了终局，可能整体上来讲，就跟马斯克说的，<br>咱们人可能就在一个仿真里头。"
</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 谢晨的"人生方向"
> "我觉得仿真是这个 —— 因为我认为仿真是真正能够去解决具身数据问题的基石。"

这是他从北大物理 / 哥大金融 / Cruise / 英伟达 / 蔚来一路试错后，终于找到的"最擅长 + 最有意义"的事。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 为什么是仿真
1. 必备条件（不是加速器）
2. 唯一能规模化评测的路径
3. Real-to-sim / Sim-to-real 的枢纽
4. 和世界模型共生
5. 终局是 AI 自我学习的"环境"

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的九句：</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"数据约等于教育。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢晨把 AI 数据和人的教育做的第一性类比</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"其实最有效的数据是先失败再成功的数据。"
<div class="text-xs opacity-60 mt-1 not-italic">— 开篇预告里就放出来的反直觉结论</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"我认为就是具身这件事的通用智能就出不来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 如果没有金字塔下面的仿真和人类数据</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"屁股决定脑袋的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么国内真机派多 —— 商业模式逼的</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"可能零点六分都不到。"
<div class="text-xs opacity-60 mt-1 not-italic">— 具身数据的现状 vs 大语言模型的 60 分</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"魔高一尺道高一丈。"
<div class="text-xs opacity-60 mt-1 not-italic">— LLM 评测一直在卷越来越高阶的评价指标</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"相当于把人当车了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 人戴眼镜采集 = Tesla 收回行车数据</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"最关键的问题是评测的规模化，这个是最核心的问题。"
<div class="text-xs opacity-60 mt-1 not-italic">— 如果具身只能解决一个问题</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"AI 的教育公司。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢晨对光轮和终局数据公司的自我定位</div>
</div>

</div>

---
layout: end
---

<div class="text-2xl italic opacity-90">
"咱们人可能就在一个仿真里头。"
</div>

<div class="mt-6 text-sm opacity-60">
张小珺《商业访谈录》#134 · 和谢晨聊数据的综述
</div>
