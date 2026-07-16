---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E244｜端到端vs上下分层：机器人路径之争，正在转向？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 端到端 vs 上下分层：<br/>机器人路径之争，正在转向？

<div class="mt-8 text-lg opacity-70">
硅谷101 · 2026年7月
</div>

<div class="mt-4 text-sm opacity-50">
嘉宾：韩铮（速通科技联合创始人 & CEO）| 主持：洪君
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**技术路线未收敛**
机器人训练方法远未统一。端到端与分层架构之争正处于转折点，韩铮断言 2026 下半年分层将回归主流。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**零样本 240 次抓取**
速通科技在 CVPR/ICRA 现场接受随机物体测试，98% 单次成功率，闭环可达 100%——学术界前所未有。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**ImageNet 的 3D 传承**
联合创始人苏浩是 ImageNet 核心作者、ShapeNet 创建者，将"大数据集+神经网络"思路带入物理世界。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**全球格局深度拆解**
Physical Intelligence、Skild AI、Figure、Tesla Optimus、DeepMind+波士顿动力、宇树——谁在做什么，谁可能胜出。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 col-span-2">

**核心暴论**：「可能从今年下半年开始，上下分层的结构会重新回到主流。端到端推不到商业化。」

</div>

</div>

---
layout: default
---

# 速通科技：全栈机器人的定位

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🧠 大脑 + 身体

速通**大脑和本体都做**，是全栈机器人公司。团队始于机器学习驱动机器人的研究，2022 年才开始自研硬件。韩铮坦言："如果不自己碰本体，很难把大脑的能力展现出来。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🎯 聚焦操作（Manipulation）

核心专注物体操作，而非运动控制。机器人是**轮式带二指夹爪**的形态——韩铮认为 90% 的物体操作任务不需要灵巧手，轮式下肢在现阶段比双足更稳定可靠。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**与硅谷对标的区别**：Optimus、Figure、1X 是本体加模型但模型能力不及 PI；Physical Intelligence 专注基础模型但以软件为主。速通走的是**软硬件强绑定的 Sim-to-Real 路线**。

**作者概括**：韩铮将公司定位为"机器人领域的 iPhone + iOS"——既提供硬件，也提供底层操作系统和 SDK，让开发者在其上构建应用。

</div>

---
layout: two-cols
---

# 从 ImageNet 到 ShapeNet

<div class="text-sm leading-relaxed mt-2">

苏浩在普林斯顿/斯坦福时期是 **ImageNet 项目的核心作者**。ImageNet 的核心思想——用结构化的大规模标注数据让机器"看见"世界——在 2012 年 AlexNet 横空出世后彻底改变了 AI。

ImageNet 最后收集了 **1400 万张图片和文字映射**。

2013-14 年，苏浩将这套思路带入 3D 世界，开始构建 **ShapeNet**——3D 版 ImageNet。

但问题是：2D 图片可以从互联网抓取，**3D 模型极其稀缺**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 3D 数据集的三级跳：为什么比 2D 难这么多

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### ShapeNet
<div class="text-3xl font-bold text-green-600 my-2">数十万</div>
<div class="text-xs opacity-70">3D 模型</div>
<div class="mt-1 text-xs">基础几何 + 表面贴图</div>
<div class="mt-1 text-xs opacity-60">2013-14 年启动</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### PartNet
<div class="text-3xl font-bold text-yellow-600 my-2">数万</div>
<div class="text-xs opacity-70">部件级标注</div>
<div class="mt-1 text-xs">瓶身 / 瓶盖 / 瓶底</div>
<div class="mt-1 text-xs opacity-60">大量人工标注</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### PartNet-Mobility
<div class="text-3xl font-bold text-red-600 my-2">&lt; 3000</div>
<div class="text-xs opacity-70">动力学约束</div>
<div class="mt-1 text-xs">瓶盖左旋还是右旋？</div>
<div class="mt-1 text-xs opacity-60">开源最大，仍远远不够</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**核心挑战**：3D 标注的每一个层级都比上一级昂贵几个数量级。ShapeNet 只覆盖了几何信息；要知道瓶盖能拧开需要动力学约束——这类数据在开源世界**不到 3000 个物体**。而机器人操作恰恰需要这一层。

</div>

---
layout: two-cols
---

# 机器人操作对精度的要求

<div class="text-sm leading-relaxed mt-2">

2D 视频里有 3D 信息，但**不全也不准**。

- 自动驾驶可以容忍 **10 厘米** 的误差
- 机器人操作——比如把线缆插入对应孔位——需要 **亚毫米级** 精度

Sora 在训练时用 Unreal 引擎从 3D 模型渲染 2D 视频，就是因为互联网视频的 3D 信息不够精准。

**结论**：要做机器人操作，3D 结构化数据绕不过去。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sim2real-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# DALL·E 时刻：为什么是 2022 年？

<div class="mt-3 text-sm leading-relaxed">

2012-2016 年，机器人的上一波热潮（Google 收购 Boston Dynamics 等多家公司）最终以失败收场。韩铮认为原因在于"**当时的要素还不全**"。

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**转折点：OpenAI DALL·E 的出现。**

"2D 图片有上千万张可以描述世界上的几乎所有物体，有没有办法把 2D 升维到 3D？"这个朴素的想法让韩铮和苏浩看到：**在仿真器里用 3D 重建整个世界，理论上开始可行了。**

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 2022 年之前

- 3D 模型只有几十万，远不够
- 没有 2D→3D 生成能力
- 仿真器效率不足以做大规模训练

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 2022 年之后

- 文生图/文生 3D 技术突破
- GPU 算力大幅提升
- 可以在单 GPU 上开数百上千个并行仿真环境

</div>

</div>

---
layout: default
---

# Sim-to-Real：在虚拟世界训练机器人

<div class="text-sm leading-relaxed mt-2">

**Sim-to-Real** = 先在电脑模拟环境中训练机器人，训练完成后将学到的策略**直接迁移**到真实世界。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🎯 新仿真器的设计哲学

与传统"有限元仿真"完全不同：

- 不追求视觉真实——分辨率可以很低
- 追求**物理一致性**——引入牛顿力学公式
- 一张 GPU 上跑**成百上千甚至上百万个并行环境**
- 在**真实与效率之间做取舍**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🧬 SAPIEN 的隐喻

仿真器的名字 **SAPIEN** 来自尤瓦尔·赫拉利的《Sapiens》（人类简史）。

"我们想把人类和整个生物几百万年的进化过程放在仿真器里，让机器人再经历一遍。"

——让仿真器成为机器人的"进化加速器"

</div>

</div>

---
layout: default
---

# Sudo R1：零样本抓取的历史性突破

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 测试规模
<div class="text-4xl font-bold text-blue-600 my-2">240 次</div>
<div class="text-xs opacity-70">连续抓放操作</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 单次成功率
<div class="text-4xl font-bold text-green-600 my-2">~98%</div>
<div class="text-xs opacity-70">零样本 / Zero-Shot</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 闭环成功率
<div class="text-4xl font-bold text-orange-600 my-2">100%</div>
<div class="text-xs opacity-70">失败后自动调整策略</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**关键事实**：2025 年 11-12 月内部测试，2026 年 4 月公开发布。所有测试物体**在训练数据中从未出现过**——这是 Sim-to-Real 路线**第一次填平了零样本操作的真实鸿沟**。失败后不补充后训练数据，仅靠闭环控制调整策略。

</div>

---
layout: default
---

# 公开验证：接受全世界的随机挑战

<div class="text-sm leading-relaxed mt-2">

学术界普遍质疑视频可能"精心处理过"。速通的回应——**把机器人搬到学术会议现场**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 维也纳 ICRA 大会（2026.6）

- 近 **1000 人** 来到展台
- 用自己随机的物体测试：参会证件、手机、耳机、小玩偶
- **没有提前采集环境数据，没有做任何场景适配**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### CVPR 大会（2026.6-7）

- 搭建展台接受学术界和工业界测试
- 随机环境、随机物体
- "这在以前的学术会议上**从来没有人做到过**"

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**对比**：以往机器人 demo 团队会提前一个月租 Airbnb，在会议城市收集特定环境数据，反复调试。速通不需要。

</div>

---
layout: two-cols
---

# Sim2Real Gap 的解法

<div class="text-sm leading-relaxed mt-2">

Sim2Real 的核心挑战不是"仿真"，而是"**搬**"——学到的策略搬到真机上还灵不灵。

速通的关键洞察：**Sim2Real 必须软硬件强绑定。**

- 仿真器不是万能的——某些电机特性、噪声还仿不好
- 硬件选型时必须用仿真器支持好的方案
- 每台机器人个体有差异，仿真器需对噪声做补偿
- 开源框架（Isaac、MuJoCo）简化了动力学约束，研究可以，**产品不行**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sim2real-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 端到端 vs 上下分层：两条路线的根本分歧

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🔴 端到端（E2E / VLA）

- 一个黑盒模型覆盖从感知到行动的全程
- 模仿学习为主：人遥控机器人做动作 → 模型模仿
- 代表：Physical Intelligence、Skild AI
- 不需要理解物体的几何位置和材质
- 赌的是"**数据堆够了，智能就会涌现**"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🔵 上下分层（速通路线）

- 预训练时分上下两层
- **上层**：任务分解、场景理解、步骤推理
- **下层**：基础操作技能（抓、放、拧、插）——每个都稳定可靠
- 需要理解物理世界：几何、材质、运动学
- 赌的是"**没有足够数据时，理解先行**"

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**韩铮的判断**：端到端模型在部署时也是端到端的——速通最终在端侧部署的同样是一个端到端模型，区别在于**预训练过程中植入了对物理世界的理解和分层结构**。

</div>

---
layout: default
---

# 数据瓶颈：机器人没有 500 万辆车

<div class="text-sm leading-relaxed mt-2">

端到端路线的灵感来自大语言模型的成功——"堆数据就能出智能"。但韩铮指出了机器人领域的**致命差异**：

</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**"你很难在机器人没有任何功能之前，卖 500 万台到各个办公室、家庭或者工厂里，旁边还有一个工人在遥控它。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 🚗 自动驾驶的路径

- 特斯拉十几年前就开始卖车
- 几百万辆车在真实道路上收集数据
- 每天有司机"免费标注"
- 先有产品，后积累 AI 能力

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

### 🤖 机器人的困境

- 没有功能之前卖不动
- 即使卖出（国内公司已到百台/千台规模），离 500 万台差三个数量级
- 在家用机器人穿动捕服做菜？不现实
- **冷启动的数据从哪儿来？**

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

这就是为什么 **Sim-to-Real 躲不过去**——它是冷启动阶段唯一能在百万/千万级别仿真环境中补全数据的路径。

</div>

---
layout: two-cols
---

# 上下分层架构详解

<div class="text-sm leading-relaxed mt-2">

韩铮用一个"倒水"的例子说明分层：

**上层（高级推理）**：
理解杯子空了 → 找冰箱 → 打开冰箱门 → 拿瓶子 → 移动到桌边 → 拧开瓶盖 → 倒水

**下层（基础操作）**：
每一步的精确物理执行——抓取、拧盖、倒水。每个基础技能要做到稳定可靠、开放世界泛化。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./layered-arch.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 白盒 vs 黑盒：可解释性的价值

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### ⬛ 黑盒模型（端到端）

- 输入 → 输出，中间不可解释
- 纯粹模仿人的动作轨迹
- "拧瓶盖"只是因为模仿数据里有人那样做
- 不知道为什么向左拧而不是向右拧

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ⬜ 速通的可解释模型

- 预训练中建立了对物理世界的**认知和预测**
- 知道物体的几何位置、材质、重量
- 知道瓶子分瓶盖和瓶身
- 拧瓶盖时能判断：拧不动→加大力，还是换个方向？
- 有**闭环控制**——失败后能自我调整

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**为什么白盒模型历史上没起来？** 人能预测和想到的情况是有限的，难以穷举所有 corner case。速通的解法不在推理时穷举，而是**在仿真器的强化学习中让机器人自己探索**——人类提供物理公式，机器人自己在数百万次尝试中学会策略。

</div>

---
layout: default
---

# 灵巧手 vs 二指夹爪

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🖐️ 灵巧手

- 几十个关节、手内操作
- 盘核桃、转魔方需要它
- 代表最通用的形态
- 但：**稳定性、可靠性、成本都不理想**
- Shadow Hand 曾卖几十万美元一只

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ✌️ 二指夹爪（速通当前方案）

- **90% 的物体操作不需要灵巧手**
- 只有 5-10% 的任务才需要多指手
- 穿针引线也不一定需要灵巧手
- 降低变量，先拉高基础技能的边界

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**韩铮的策略**：先用二指夹爪把基础操作做到极致，再扩展到灵巧手。这是**工程上的变量隔离**——不是不做灵巧手，而是先解最核心的问题。

未来方向：**轮足式通用机器人**——平地用轮子高效移动，遇到特殊地形切换足式。

</div>

---
layout: default
---

# 全球机器人竞赛：各玩家定位一览

<div class="text-sm leading-relaxed mt-2">

这期节目深入剖析了几乎所有主要玩家的技术路线和竞争优劣势。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**Physical Intelligence**
估值 ~$13B
专注软件大脑层
端到端 VLA 路线
团队来自 Google Robotics
韩铮评价：更擅长上层 reasoning

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**Skild AI**
估值 ~$14B
7 个月前才 $4.5B
通用机器人大脑
创始人曾不信仿真
韩铮评价：偏敏捷方向

</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">

**Figure AI**
与宝马合作
近期做产线分拣直播
Demo 仅两类物体
泛化性仍有限
韩铮评价：比以前有进步但差距远

</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

**Tesla Optimus**
硬件+量产能力极强
进 Fremont 工厂"训练"
Elon 称暂不干活只为数据
可能先卖硬件让外界做软件
韩铮评价：最大推手之一

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**宇树 (Unitree)**
2025 出货 5000+ 台
量产能力绝对领先
核心在运动控制
物体操作"才刚刚开始"
对比：Tesla/Figure ~150 台

</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">

**亚马逊**
最大应用场景方
机器人部署量可能超员工数
收购 Covariant 核心团队
投资 Agility 等多家公司
最终可能自研或全资收购

</div>

</div>

---
layout: default
---

# DeepMind + 波士顿动力：最被低估的组合

<div class="text-sm leading-relaxed mt-2">

这是整期节目中最出人意料的判断——韩铮认为，未来 2-3 年**最大的竞争对手可能是 DeepMind + 波士顿动力**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🧠 DeepMind 的独特优势

- **在所有大厂中对物理世界 AI 下注最坚决**（Demis Hassabis 亲自推动）
- 拥有近乎无限的算力、全球顶尖人才
- 几年前收购 MuJoCo 仿真器团队
- 自研世界模型 Genie-3
- 把波士顿动力核心人员挖到 DeepMind 团队

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🦾 波士顿动力的硬件

- 电动版 Atlas 开始出货
- 现代集团提供量产能力
- 硬件和模型团队聚集伦敦
- 韩铮类比：就像 Steve Jobs 坚持团队在同一栋楼里开发

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**关键判断**：Google 可能"重复 Android 的方法"——用波士顿动力硬件作为平台，自己掌握底层模型和仿真器，让生态在上面生长。韩铮认为 DeepMind **坚定相信 Sim-to-Real** 这条路线。

</div>

---
layout: default
---

# Figure AI 的 Demo 争议：直播说明了什么

<div class="text-sm leading-relaxed mt-2">

Figure 最近因为与宝马的合作和产线分拣直播重新获得关注。但韩铮的评估相当冷静：

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 暴露的问题

- **物体泛化性不高**：只有两类物体——盒子和软性包装，颜色和重量几乎一样
- **环境从未走出测试线**：一直在公司内部搭建的固定产线中
- 洗碗机 demo 被爆"花了很长时间拍一条"
- 遥操作+VLA 方法**对光照和环境变化极其敏感**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 客观评价

- "比以前有进步，但离开放世界的泛化性还差很远"
- 端到端 VLA 路线的先天约束：一旦环境变化，成功率直线下降
- 验证了速通的判断——**没有结构化理解和仿真训练，靠模仿数据实现泛化非常困难**

</div>

</div>

---
layout: default
---

# 商业模式：机器人的"iPhone + iOS"时刻

<div class="text-sm leading-relaxed mt-2">

韩铮从**智能手机的商业模式**中寻找机器人的答案：

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**"硬件形态更像汽车（电池、电机、计算单元），但商业模式更像智能手机。"**

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🏗️ 速通提供什么

- 硬件本体 + 底层操作模型
- 稳定可靠的基础技能 API（抓取、放置等）
- 将短技能排列组合成长程任务的能力
- SDK 和开发工具链

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 👨‍💻 开发者做什么

- 利用 API 构建垂直应用
- 仓库分拣、工厂组装、家庭服务
- "就像 iOS 上有 Uber、DoorDash、Instagram"
- 速通自己不赌单一场景

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

**"1000 个开发者尝试 → 100 个找到场景 → 5-10 个做出超级应用，可能需要部署 1 万台甚至更多机器人。"**

</div>

---
layout: two-cols
---

# 平台生态：底层工具链 × 上层应用

<div class="text-sm leading-relaxed mt-2">

速通不会自己去工厂部署集成——那是一个完全不同能力模型的生意。

核心目标：让 100-1000 个开发者在平台上探索应用场景。

**和 Android 的区别**：Android 只卖软件，速通是**软硬件一体**。Sim2Real 的 Gap 决定了软件和硬件必须协同设计。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./platform-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 通用 vs 垂直：长路与短路的取舍

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🏭 垂直路线的现实

- 很多公司从"要做通用"退回到单一场景
- 商业化的压力迫使妥协
- 客户要求与训基础模型的思路有背离
- 一台机器人替代人工，**可能需要 3-5 个 PhD 去维护**

韩铮："做垂类商业应用，**有时候账是算不过来的。**"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🌐 速通的"通用"信念

- 不靠"说不定"——团队七八年的合作中**已经在小规模上验证了可行性**
- 12-24 个月内能看到第一阶段效果
- 不赌"数据堆到 1000 万小时也许就出来了"
- 同时挑 1-2 个场景配合开发者做深度验证，打磨工具链

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**核心分歧**：韩铮认为，如果对基础模型如何构建"没有特别清晰的想法，只是想边做边试"，最终都会因为商业压力转向垂直。速通的底气来自于**过去七八年积累的系统性认知**——知道还需要补充哪些要素，以及把这些要素组合在一起需要多长时间。

</div>

---
layout: default
---

# 暴论：2026 下半年，分层架构回归主流

<div class="text-sm leading-relaxed mt-2">

这是整期播客最核心的观点——韩铮认为机器人行业正在接近一个**技术路线的转折点**。

</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic leading-relaxed">

**"我们有一个暴论：可能从今年的下半年开始，上下分层的这种结构会重新再回到主流里边，而且可能在之后大家选择的方案推到商业化里边去，可能是最终的一个方法。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 📜 历史背景

- PI 创始团队在 Google Robotics 时期的分工本就是"底层操作 + 上层理解"
- 2023-24 年各自创业时选择了自己擅长和熟悉的套路，不再提分层
- 但底层操作的稳定性问题始终没有解决

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 🔮 外溢信号

- "最近几周和学术界、工业界交流后，已经有人意识到这可能是一个新方向"
- 韩铮认为 PI、Google 等公司其实**更擅长做上层 reasoning**
- 底层操作必须软硬件强绑定——这是中国（和速通）的结构性优势

</div>

</div>

---
layout: default
---

# 十年愿景：从 Sim-to-Real 到机器人操作系统

<div class="text-sm leading-relaxed mt-2">

被问到"十年后你希望速通被记住的是什么"，韩铮的回答展示了远超一家创业公司的野心：

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**"Sim-to-Real 这条路是对的——这是副产物。我们希望十年后回头看，这像是一个 iPhone + iOS 操作系统的时刻。那时会有新的 Uber、滴滴、美团、DoorDash 长出来。大家用的硬件加底层系统，至少有一部分是我们提供的。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 🎯 核心目标

- 提供稳定可靠的硬件 + 底层基础技能模型
- 3-5 个核心操作技能覆盖主要场景
- 短技能组合成长程任务的工具链
- 让 100+ 开发者在上面构建应用

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 💭 未说出口的

- 不做安卓（只卖软件），做 iPhone（软硬一体）
- 不赌单一场景，赌生态
- 路线可以迭代——等数据量够了，方法可以变
- "难，但可能是最终最有效的方法"

</div>

</div>

---
layout: default
---

# 四条核心判断

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### ① Sim-to-Real 绕不开

机器人不像自动驾驶有 500 万辆车上路收集数据。冷启动阶段，仿真几乎是唯一能够规模化获取训练数据的路径。英伟达的 Isaac 平台也在推这个方向。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### ② 分层架构不可逆

端到端的模仿学习在物体泛化性和环境泛化性上都面临天花板。韩铮预测 2026 下半年行业共识将转变。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### ③ 软硬件必须强绑定

Sim2Real Gap 的解法不是纯软件工程。硬件选型、仿真器设计、模型训练必须作为**一个综合系统**来考虑。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### ④ 平台模式 vs 垂直应用

做通用底层模型需要清晰的技术判断和长期定力。速通选择做"iPhone + iOS"而不是某一个 App。胜负可能在生态层。

</div>

</div>

---
layout: default
---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"机器人如果是要对于物体去做操作，它这个难度要高两到三个数量级。"
<div class="text-xs opacity-60 mt-1">— 相比运动控制（locomotion），操作需要理解物体、环境、材质、几何</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"我们有一个暴论：可能从今年的下半年开始，上下分层的这种结构会重新再回到主流里边。"
<div class="text-xs opacity-60 mt-1">— 对当前端到端为主流的机器人行业的根本性质疑</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"在同一款机器没有任何功能之前我卖 500 万台机器人到各个办公室、家庭或者是工厂里边去。在我们的家里面，我很难想象我买了一台机器人，我需要穿着一个动捕服才能够去做西红柿炒鸡蛋。"
<div class="text-xs opacity-60 mt-1">— 说明机器人无法复制自动驾驶的数据飞轮模式</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"我们希望十年以后，大家回看今天，会认为这可能是一个类似于像 iPhone 加 iOS 操作系统。"
<div class="text-xs opacity-60 mt-1">— 速通十年愿景，不只做一家机器人公司，要做机器人时代的底层平台</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"Sim-to-Real 是躲不过去的。"
<div class="text-xs opacity-60 mt-1">— 对冷启动阶段数据瓶颈的核心判断</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="mt-8 text-lg">

「硅谷101」· 2026年7月

</div>

<div class="mt-4 text-sm opacity-60">
嘉宾：韩铮（速通科技联合创始人 & CEO）| 主持：洪君
</div>

<div class="mt-6 text-xs opacity-40">
更多节目：小宇宙 · 苹果播客 · Spotify · B站 · YouTube 搜索「硅谷101」
</div>
