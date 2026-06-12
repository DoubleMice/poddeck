---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Bezos AI Play, Future of Airports, CAA Fund | David Reger, Mike Wior, Ariel Cohen, Jeff Tatarchuk, Matt Joseph, Ade Ajao, Jeremy Fraenkel'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Bezos AI Play, Future of Airports, CAA Fund

**TBPN · 2026-06-11**

<div class="mt-6 text-sm opacity-70">
David Reger · Mike Wior · Ariel Cohen · Jeff Tatarchuk · Matt Joseph · Ade Ajao · Jeremy Fraenkel
</div>

<div class="mt-12 grid grid-cols-3 gap-3 text-xs opacity-60 max-w-lg mx-auto">
  <div>Neurobotics · $1.4B</div>
  <div>Allen Control · $200M</div>
  <div>Navan · AI Travel</div>
  <div>TensorWave · $350M</div>
  <div>Minerva · $20M</div>
  <div>Base10 · $850M</div>
  <div>Fundamental · $275M</div>
  <div>Prometheus · $12B</div>
  <div>Thrive · $10B</div>
</div>

---
layout: two-cols
---

# 为什么这期特别

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Jeff Bezos 的 AI 工业梦**
Prometheus 以 $410 亿估值拿下 $120 亿 B 轮，目标"人工通用工程师"（AGE）——让 AI 设计制造喷气发动机

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**机器人三大前沿**
Neurobotics 认知机器人（$14 亿）、Bullfrog 反无人机系统（$2 亿）、欧洲机器人供应链接力

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**AMD 的 GPU 突围**
TensorWave 押注 AMD 全栈，Lisa Su "founder mode" 加速 ROCm，CUDA 护城河坍塌中

</div>

</div>

::right::

<div class="text-sm leading-relaxed space-y-3 mt-10 pl-4">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI 旅行的静默革命**
Navan 季度营收 +40%，AI bot 自动打电话给酒店、Navan 自有模型承担 30% 调用

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**德州新中心 + 机场进化**
184 家企业迁 HQ 至德州、全美 1/5 就业来自德州；机场游戏厅崛起

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**资本洪流**
$1000 亿 Thrive、SpaceX IPO 散户订单 $1000 亿+、CAA 押注创作者经济

</div>

</div>

---

# Bezos 的 AI 宣言：为何现在下注 $120 亿

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

**Prometheus 的核心定位**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"人工通用工程师"（AGE）**
不是 AGI，而是专门设计制造复杂物理产品（如喷气发动机）的 AI 系统。Bezos 称之为**一个新的 buzzword**，区别于 AGI / ASI / PSI 等概念

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**端到端工程**
覆盖从**产品设计 → 性能预测 → 制造**的完整流程。Bezos 在采访中表示，目标是"empower engineers and make innovation easier and faster so smaller teams can do much bigger things on much shorter time cycles"

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**$410 亿估值，$120 亿 B 轮**
投资者包括 Bezos 本人、JPMorgan Chase、Goldman Sachs 和 BlackRock。**比 Chipotle、Baidu、AIG 还大**——这只是 B 轮

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**$1000 亿收购基金**
谈判中：募集千亿基金收购制造企业，部署 AI 改造运营。这对标 SpaceX 的 $700 亿融资。Bezos 可以用个人财富锚定/兜底

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**并非急就章**
Prometheus 2024 年底已启动，**低调运营两年**，150 人分布在旧金山、伦敦、苏黎世。联合 CEO Vic Bajaj 是前 Google 生命科学联合创始人、斯坦福医学院兼职教授

</div>

</div>

</div>

---
layout: two-cols
---

# AGE 是什么？一个思维模型

<div class="text-sm leading-relaxed space-y-2">

**从文本生成到物理世界生成**

LLM 从文字 → 图像 → 视频的演进路径已清晰。AGE 把这条线延伸到**可制造的 CAD 模型**：

- **今天**：人们用 Fable 5 / GPT-5 做 SVG "鹈鹕骑自行车"
- **明天**：AI 生成功能型 CAD 文件，附每个零件的分步制造说明
- **后天**：AI 代理整条产线，小团队迭代喷气发动机周期从天缩短到小时

**为什么 Bezos 是合适的人？**
- Amazon 推荐系统：最早的 AI 大规模商业应用之一
- Kiva Robotics 收购：可能是机器人领域最成功的收购案之一
- Blue Origin：重型制造 + 火箭工程的实战经验

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bezos 论 AI 与劳动力：乐观派

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"AI will mean fewer workers are needed in jobs that exist today, but it will also create far more opportunities and increase productivity."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Bezos，Wall Street Journal 采访</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div>

**Bezos 的三层逻辑**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

1. AI 让发明变便宜 → 更多发明 → 更多创业 → 更多就业
2. 即使每个领域所需人数减到 1/10，机会总盘子会增长 10 倍以上
3. 类比 Amazon：实体零售店员缩减，但 Amazon 生态的创业者数暴增

</div>

</div>

<div>

**一个大胆预测**

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

Bezos 预测：生产力高到会出现**双收入家庭中一人主动退出劳动市场**的场景。这不反映在失业率中（失业率只统计正在找工作的人），但劳动力参与率会下降——一种**"选择不工作"的富裕**

</div>

</div>

</div>

<div class="mt-3 text-xs opacity-60">
主播注：NIET（Not in Employment, Education or Training）率自 2021 年以来持续上升，趋势早在 AI 热潮前就已开始。Bezos 的预测是乐观叙事——但值得关注实际走向。
</div>

</div>

---
layout: two-cols
---

# Prometheus 产业链：端到端 AI 制造

<div class="text-sm leading-relaxed space-y-2">

**从愿景到落地，Prometheus 的完整链路：**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**1. 基础模型层** — 能生成高精度产品规格、设计方案的 foundation model
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**2. 制造基础设施** — 类似 SendCutSend 的按需制造能力，设计完即可下单
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**3. AI 改造收购企业** — 千亿基金买下 Goodyear 级制造企业，部署 AI 提效
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**4. 闭环迭代** — 设计与制造打通，real-world feedback 回流模型
</div>

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

# David Reger：让机器人长出"神经系统"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Neurobotics 的核心理念**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

David 认为当前机器人行业的最大误区：**只有视觉-语言-动作模型（VLA）不够**。他打了一个比喻——

"It's a little bit like learning how to swim. You can learn swimming by just watching a video or something. It's about a **nervous system**."

机器人需要的不只是"大脑"，更是**神经系统和反射**——这是人类在动态世界中灵活调整的关键优势

</div>

</div>

<div>

**多元形态 + 统一大脑**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

Neurobotics 与很多同行最大的不同：**不相信单一形态**。目前主要用移动操作臂（mobile manipulators），但未来会拥抱各类形态——包括人形机器人

<div class="mt-2 text-xs opacity-70">
核心逻辑：整个世界是按人体工学设计的，人形机器人在这个环境中最通用。但不同任务需要不同 embodiment。
</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

**欧洲劳动力缺口驱动需求**
到 2030 年，欧洲将有约 **700 万劳动力缺口**。Embodied AI 是应对这一缺口的唯一路径，尤其在汽车供应链领域。

</div>

</div>

</div>

---
layout: two-cols
---

# Neuragym：训练机器人的"体育馆"

<div class="text-sm leading-relaxed space-y-2">

**为什么需要 Neuragym？**

David 指出一个关键差异：LLM 有互联网级的文本数据，**但机器人的物理交互数据根本不存在**。Neuragym 是 Neurobotics 正在全球主要城市建设的物理机器人训练场所。

核心设计：
- 用户买机器人前可以先在 Neuragym **训练和建立信任**
- 训练好的数据可以一键迁移到工厂里的其他机器人
- 不只是训练"大脑"，而是训练**整个神经系统**（感知 + 反射 + 动作）

本质是在构建**机器人时代的训练数据基础设施**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Neurobotics：供应链、资本与欧洲制造复兴

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**$14 亿融资，总部斯图加特**

<div class="space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**战略投资者**
本轮引入大量美国投资者和战略合作伙伴。David 表示：自汽车工业后，德国没有出现过真正伟大的制造公司——这需要改变

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**供应链策略**
目前聚焦欧洲供应链（Bosch、Porsche、Audi、Mercedes 都在斯图加特周边）。核心挑战：**汽车传感器设计寿命 6,000 小时，机器人需要 40,000 小时**——需要改造现有供应链

</div>

</div>

</div>

<div>

<div class="space-y-3 mt-2">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**长期愿景：全球制造**
David 认为最终会在美国、亚洲同时建立生产能力，供应链地域差异会随时间淡化

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**人形机器人的经济性辩论**
主播提出：人形机器人放挡风玻璃 → 很快发现 KUKA 机械臂成本只要 1/10 → 只有最不规整的任务才需要昂贵的人形机器人。David 认同不同 embodiment 各有场景，但强调人形形态的通用性优势

</div>

</div>

</div>

</div>

---

# Bullfrog：用 AI 重新定义防空

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**核心问题**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">

Bullfrog 解决一个机械工程的老难题：

**"你可以有一个非常快但不太准的系统，或者一个非常准但很慢的系统"**

要击落快速机动的无人机（尤其是 Group 1/2 微型机），你需要**又快又准**。通过将 AI 应用于控制系统，Bullfrog 实现了全球尚无他人达成的能力。

</div>

</div>

<div>

**里程碑验证**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

2025 年 11 月：Bullfrog 在对抗 13 架红军操控的无人机时取得 **100% 击杀率**。这些无人机由军方团队操控，未预先告知来袭方向、数量或战术——完全实战环境。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

$2 亿融资，$20 亿 pre-money 估值。团队从年初 **80 人扩张到 250 人**，每月新招 50 人。

</div>

</div>

</div>

</div>

---
layout: two-cols
---

# Bullfrog：被选中的反无人机方案

<div class="text-sm leading-relaxed space-y-2">

**为什么 Bullfrog 被军方选中？**

Joint Task Force 4-0-1 是总统和国防部长专门设立的跨军种反无人机技术选择机构。Bullfrog 入选后被送往前线——等于**全军种（含海岸警卫队、特勤局）的采购通行证**。

**制造上的差异化优势**
90% 的 Bullfrog 组件来自商用现货（COTS）——标准供应链 + 多供应商，可**快速扩产到每月千台**。在反无人机方案中这是罕见的能力。

**自主系统愿景**
Bullfrog 的全自主计算系统可部署在无人地面车/水面艇上，异步跟踪目标、等待操作员一声令下即可接敌——这是武装无人平台的关键赋能技术。

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

# Jeff Tatarchuk：AMD 的 GPU 时刻

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**TensorWave 的 AMD 论**

<div class="space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么是 AMD？**
Jeff 的上一家公司与 AMD 深度合作（部署 Xilinx FPGA），在 NVIDIA 供应受限的 2022-2023 年看到了机会。当 AMD 发布 GPU 时，TensorWave 成为**首个规模化推向市场的 AMD 基础设施商**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**$3.5 亿 B 轮**
北美多地部署超级计算机（Arizona、Florida、Pittsburgh），AMD 专属 AI 基础设施。

</div>

</div>

</div>

<div>

**Lisa Su 的 Founder Mode**

<div class="space-y-3 mt-2">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

Lisa Su **亲自进入 founder mode**——在团队里点燃火种、推动开发者社区建设。AMD 的 CVP of AI Anush 说："**Speed has become the mode.**" 借助代码生成工具，AMD 正在以前所未有的速度缩小与 CUDA 的差距。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

早期里程碑：Databricks 在 2023 年就展示了从 NVIDIA 到 AMD 的**开箱即用切换**。Jeff 认为 AMD 的起点是推理 Scale-out，现在正向更多场景扩展（图像、视频、语音、实时推理）。

</div>

</div>

</div>

</div>

---

# CUDA 护城河的真相

<div class="space-y-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"CUDA was always built to go beyond CUDA. It's not the moat. The ecosystem — the resources, developers, and libraries poured in over 10-15 years — that's the moat."
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Diamos，CUDA 早期工程师（现加入 TensorWave），Jeff 转述</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### NVIDIA 的真正壁垒

<div class="text-xs mt-1 leading-relaxed">

<div class="mt-1">🔧 **CUDA 工具链**
不是 CUDA 本身，是 15 年积累的库、调试器、优化器、文档、社区</div>

<div class="mt-2">📚 **开发者惯性**
数百万开发者习惯于 CUDA 生态，切换成本在心理层面远超技术层面</div>

<div class="mt-2">🏭 **硬件 + 软件耦合**
NVIDIA 的硬件路线图与 CUDA 版本同步，第三方追赶需要同步两个维度</div>

</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### AMD 的破局点

<div class="text-xs mt-1 leading-relaxed">

<div class="mt-1">🎯 **推理 Scale-out**
推理需求远超训练，且对软件生态依赖更低</div>

<div class="mt-2">💾 **HBM 优势**
AMD GPU 在同价位下往往配备更多 HBM，更适合大模型推理</div>

<div class="mt-2">🤖 **AI 辅助迁移**
代码生成工具显著降低 CUDA → ROCm 迁移成本</div>

<div class="mt-2">👩‍💻 **开发者社区**
Lisa Su 亲自推动，Anush 团队加速迭代</div>

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### TensorWave 的桥梁角色

<div class="text-xs mt-1 leading-relaxed">

<div class="mt-1">🏗️ **异构计算 Stack**
不自己写软件，而是集合生态中所有解决跨芯片迁移的公司</div>

<div class="mt-2">🔍 **CUDA 老兵视角**
Greg Diamos（CUDA 早期工程师）加入，提供历史纵深</div>

<div class="mt-2">💡 **关键洞察**
"我们不关注软件本身，而是构建支持 AMD 的生态系统"</div>

</div>

</div>

</div>

</div>

---

# Navan：AI 旅行平台的静默革命

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**Q2 业绩：逆风中的 40% 增长**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

在一个包含 TSA 罢工、油价飙升、两场风暴的季度里：
- **营收增长 40%**
- **使用量增长 50%**
- "Companies are saving 15% of their entire travel budget when they use us."

</div>

</div>

<div>

**AI 不是口号，是基因**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

2016 年（Gen AI 热门之前）Navan 已经在用机器学习大规模个性化旅行推荐。如今，**Navan Cognition** 平台协调 AI 代理与人工之间的无缝衔接。

<div class="mt-2 p-2 bg-white bg-opacity-60 rounded text-xs">
Navan 刚刚宣布：**30% 的 AI 调用现在走自有模型**，不再依赖 frontier 模型或开源模型。更快、更准、更便宜、客户满意度更高。
</div>

</div>

</div>

</div>

</div>

---
layout: two-cols
---

# AI Bot 打电话给酒店：Navan 的物理世界连接

<div class="text-sm leading-relaxed space-y-2">

**Navan 的独有壁垒：全球旅行基础设施**

Ariel Cohen 指出，Navan 拥有全球最完善的旅行基础设施——连接全球所有航空公司、酒店、巴士、铁路系统。但当 API 不存在时（比如改签航班、酒店晚到确认），Navan 有另一套方案：

**AI Bot 自动处理现实世界交互**

当用户航班延误、无法准时抵达酒店时：
1. Navan AI bot **自动打电话给酒店前台**
2. 告知"我会晚到"、记录确认人的姓名
3. 发放虚拟信用卡担保交易
4. 推送确认信息到用户 App

**全程 AI 驱动，零人工成本**——这是 CEO 口中的"amazing, amazing, amazing service"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Navan 的用户记忆与 AI 旅行代理

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Navan Cognition 的记忆组件**

Navan 自有开发了一套记忆系统，当用户接入 Navan Edge 时：

- 自动识别所有忠诚度俱乐部会员号
- 自动识别会员等级
- 结合日历偏好（直飞优先、Burbank 优于 LAX、飞行时段偏好）

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

**已实现的功能**
Ariel 对主播说："Everything that you described, we do already."——从自动预订整趟旅行（机票 + 酒店 + 餐厅 + 活动）到出发前通知 TSA 排队时长

</div>

</div>

<div>

**AI 驱动的 GTM（市场进入策略）**

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

Navan 在 AI 时代的独特定位：**每个企业高层都在推 AI 计划**，Navan 是少有的能用"AI 帮你的销售团队和 C-level 节省大量时间"来打单的 B2B 公司。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

**PLG 翻倍**
产品主导增长去年翻倍，AI 让市场营销效率大幅提升。客户群包括 OpenAI、Anthropic、Cursor——AI 公司自己也在用 Navan。

</div>

</div>

</div>

---

# Jeremy Fraenkel：给表格数据一个 ChatGPT 时刻

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Fundamental 的定位**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Jeremy Fraenkel 描述了一个被忽视的市场：

"LLMs work well with unstructured data — text, audio, video. But the global economy and enterprises really run on **structured data, on tables, such as spreadsheets, databases, CRMs**."

Fundamental 的目标是**为表格做 ChatGPT 为语言做的事**——在数十亿张表上预训练，理解行与列中的世界运行规律。

</div>

</div>

<div>

**$2.75 亿融资**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

投资方：Oak、Valor、Battery Ventures、Salesforce，外加 Perplexity 的 Aravind Srinivas 和 Wiz 的 Assaf Rappaport 等天使投资人。一个专门服务企业的"非消费者"AI 公司。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

**关键差异**
Frontier 模型可以生成 CSV、写 Python 操作表格——但它们"听起来对，实际不对"（sound right but are not correct）。Fundamental 专为**预测和决策**优化，而非文本生成。

</div>

</div>

</div>

---
layout: two-cols
---

# Fundamental vs. 博彩市场：World Cup 预测对决

<div class="text-sm leading-relaxed space-y-2">

**一个有趣的基准测试：预测世界杯**

Jeremy 和团队用历史比赛数据训练模型 Nexus，跑 **20,000+ 次模拟**。2022 年验证：模型提前预测阿根廷夺冠——而博彩市场直到四分之一决赛巴西被淘汰后才转向。

**2026 年预测 vs 博彩市场：**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**最大分歧：西班牙 vs 法国**
博彩市场将西班牙和法国视为旗鼓相当。Fundamental **大幅倾向西班牙**。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**被低估的阿根廷**
博彩市场给阿根廷第 5 大夺冠概率——Fundamental 预测其为**强有力的亚军（strong runner-ups）**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

美国夺冠概率：**0.5%**（Jeremy 语带保留地注释："There's a chance!"）

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-pillars.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Texas：美国的新重心

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**数据不会说谎**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

- 2020-2025 年间，**184 家企业**将总部迁至 Austin、Dallas 或 Houston（包括 Tesla、Caterpillar）
- 2020-2025 年，德州创造了全美约 **1/5 的净新增就业**
- 没有哪个州获得更多的商业投资或人口增长
- 今夏将迎来**首个德州独立证券交易所**，NYSE 和 Nasdaq 已有分支在此

</div>

</div>

<div>

**驱动因素**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

**能源优势**：石油天然气（受伊朗战争推动） + 绿色能源（今年美国 2/5 的公用事业级太阳能将建在德州，开阔平原地形理想）

**数据中心的天然选址**：能源优势直接转化为数据中心的竞争力

**税收与政策**：高税收海岸城市的人才和企业在持续流入

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

**文化信号**
Ella Langley 的《Choosing Texas》登顶美国音乐榜 2026，连乡村音乐都在讲述德州的吸引力故事。

</div>

</div>

</div>

---

# 机场新物种：从图书馆到游戏厅

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Gameway & Portal：机场游戏厅崛起**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Emma 和 Jordan Walbridge 夫妇从 2018 年在 Dallas Fort Worth 开设第一家机场游戏厅 Gameway，至今全美 **11 家**，还有 2 家在建设中。

最新迭代：Minneapolis-St. Paul 的 **Portal Lounge**——4,000 平方英尺，配备机器人调酒师、自助餐台和大量游戏站（Mario Kart、Minecraft、Crash Bandicoot）。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

**为什么成功了？**
Emma 的洞察："I always felt like I was in a library." 传统机场休息室沉闷得像图书馆。家庭旅客（尤其带孩子的）需要娱乐而非安静——游戏厅比健身房的推广更真实可行。

</div>

</div>

<div>

**机场的未来：Vibe Coding Lounge？**

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">

主播提出：
- 机场游戏 PC 可以做本地推理 → **Vibe Coding 休息室**即将到来
- 但网络安全如何处理？开放共享给陌生人装上奇怪的软件？
- 另一面：Lovable 式的"5 分钟建下一个爆款 App"——也许未来候机时间可以产物出来

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

**TSA 的悄然改善**
多位嘉宾认同：过去 10 年 TSA 明显提速。现在可以可靠规划 **30 分钟安检**——这一变化让商业航空旅行从"全民笑柄"变为可预测的体验。Ariel Cohen 透露：TSA 罢工期间的实际状况远好于媒体报道。

</div>

</div>

</div>

---

# Matt Joseph：AI 消费者营销的隐秘力量

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Minerva 的核心引擎**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Minerva 构建了一个覆盖 **2.07 亿美国人** 的数据集，包含约 **100 亿条 PII（个人身份信息）**，外加身份图谱。帮助消费品牌统一分散在 20 多个系统（Klaviyo、Shopify 等）中的第一方数据，建立"黄金记录"。

<div class="mt-2 text-xs opacity-70">
$2000 万融资，EPPN、Pengado、General Partnership、Metrology 等参投。
</div>

</div>

</div>

<div>

**ROAS 的量化提升**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

- 在奢侈品旅行、奢侈品领域的 **ROAS 提升 3-5 倍**（相对于 broad targeting）
- 为 NBA 提供消费者分析平台，驱动球队层面的精准营销
- 能在 **一天内** 识别客户数据管道中的低效点

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

**新趋势：AI 驱动流量的再营销**
从 ChatGPT / Perplexity 等平台进来的用户行为与直接流量用户截然不同——理解这种差异并针对性再营销，是当前正在爆发的细分领域。

</div>

</div>

</div>

---

# Ade Ajao：从西班牙 Facebook 到 $8.5 亿基金

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**从创业者到投资人**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Ade Ajao 2005 年在马德里大学创办 **Tuenti**——西班牙版 Facebook，20 人团队做到 **占西班牙每日互联网流量的 60%**。2010 年出售给 Telefónica，当时融资额以今天的尺度看只是"YC 公司的规模"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

**Base10 的投资哲学**
- 主题：**"自动化赋能实体经济"**（applied AI for the real economy）
- 2018 年提出这个方向时 LP 的反应："Applied AI is not a thing."
- 如今：物流、餐饮、交通——AI 的实体经济应用已无处不在

</div>

</div>

<div>

**基金纪律**

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

尽管 Ade 承认"现在比以往任何时候都更想快速部署"（尤其是 YC 周期间），但 Base10 保持了 **2.5-3 年** 的部署节奏，所有基金一致。

原因：AI 才三年半，**第 5 年会发生什么还不清楚**。需要在诱惑与反馈循环之间保持平衡。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">

**Blank Street Coffee 的意外成功**
两个移民之子的故事——80% 的纽约咖啡车由移民经营——打动了 Base10。"我们不完全知道自动化要怎么做，但这些创业者太棒了，值得赌。"

</div>

</div>

</div>

---

# 资本洪流：2026 年 6 月的融资版图

<div class="text-sm leading-relaxed">

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Prometheus
<div class="text-2xl font-bold text-blue-700 my-1">$12B</div>
<div class="text-xs">Series B</div>
<div class="text-xs opacity-60">估值 $410 亿</div>
<div class="text-xs mt-1 opacity-70">Bezos 联合领投<br/>JPMorgan/Goldman/BlackRock</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Neurobotics
<div class="text-2xl font-bold text-green-700 my-1">$1.4B</div>
<div class="text-xs">战略轮</div>
<div class="text-xs opacity-60">认知机器人</div>
<div class="text-xs mt-1 opacity-70">斯图加特总部<br/>美/德双线扩张</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Base10
<div class="text-2xl font-bold text-orange-700 my-1">$850M</div>
<div class="text-xs">新基金</div>
<div class="text-xs opacity-60">$26 亿 AUM</div>
<div class="text-xs mt-1 opacity-70">实体经济自动化<br/>2.5-3 年部署节奏</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### TensorWave
<div class="text-2xl font-bold text-purple-700 my-1">$350M</div>
<div class="text-xs">Series B</div>
<div class="text-xs opacity-60">AMD AI 基础设施</div>
<div class="text-xs mt-1 opacity-70">北美多地超算<br/>CUDA 替代方案</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### Fundamental
<div class="text-2xl font-bold text-red-700 my-1">$275M</div>
<div class="text-xs">战略轮</div>
<div class="text-xs opacity-60">表格数据 AI</div>
<div class="text-xs mt-1 opacity-70">Oak/Valor/Battery<br/>Salesforce 参投</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### Allen Control
<div class="text-2xl font-bold text-yellow-700 my-1">$200M</div>
<div class="text-xs">战略轮</div>
<div class="text-xs opacity-60">$20 亿 pre-money</div>
<div class="text-xs mt-1 opacity-70">Bullfrog 反无人机<br/>全军种采购通行证</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Thrive Capital
<div class="text-2xl font-bold text-blue-700 my-1">$10B</div>
<div class="text-xs">Thrive X</div>
<div class="text-xs opacity-60">史上最大 VC 基金</div>
<div class="text-xs mt-1 opacity-70">$1B 早期 / $9B 成长期<br/>OpenAI/Stripe/SpaceX</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### SpaceX IPO
<div class="text-2xl font-bold text-green-700 my-1">$70B+</div>
<div class="text-xs">零售需求</div>
<div class="text-xs opacity-60">散户订单超 $1000 亿</div>
<div class="text-xs mt-1 opacity-70">152 家校友公司<br/>$135 亿总融资</div>

</div>

</div>

</div>

---

# 德州证券交易所 + CAA 创作者基金：新资本形态

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**德州证券交易所（TXSE）**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

今夏，德州将迎来首个独立证券交易所，加入已在州内运营的 NYSE 和 Nasdaq 分支。Trump 称 NYSE 新分支对纽约是"难以想象的坏消息"——虽然他的社交媒体公司是首个在上面上市的企业。

ExxonMobil 也刚刚从新泽西重新注册到德州（总部早已在此），仅是最新一例。德州正成为美国企业界的引力中心。

</div>

</div>

<div>

**CAA × TPG：$2.5 亿创作者经济基金**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

CAA（好莱坞最大经纪公司）与 TPG 联合推出 **Compound Creative Holdings**，$2.5 亿基金收购 / 投资由在线创作者创办的企业。

- 目标：从 YouTube、TikTok、Instagram、Spotify **甚至 Substack** 上成长起来的创作者媒体公司
- 不买单个平台的收入分成（避免算法风险），而是买整个控股公司的股权
- 对标：Reese Witherspoon 出售 Hello Sunshine（$9 亿）、George Clooney 出售 Casamigos（~$9 亿）

</div>

</div>

</div>

---

# SpaceX IPO：散户狂热与校友帝国

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 col-span-2">

**零售需求突破天际**

SpaceX IPO 吸引了超过 **$700 亿散户订单**（后续消息更新至 $1000 亿+）。此前有人担忧 SpaceX 股票被"倾销给散户"——Matt Zeitlin 反驳："Retail almost certainly wants to buy, like, 10x of whatever is available."

事实证明，他的判断保守了。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**SpaceX 校友帝国**
152 家公司由 SpaceX 校友创办
- $135 亿融资总额
- 8,280 个就业岗位
- Relativity $18 亿
- Base Power $13 亿
- Impulse Space $10 亿
- Firefly $8 亿（已 IPO）

</div>

</div>

---

# 卡车业复苏：四年低迷结束

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**供给驱动的复苏**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

美国货运业刚刚结束了**近四年**的运费低迷。COVID 期间司机涌入行业 → 2022 年费率暴跌 → 数十万小运营商退出市场 → 供过于求的平衡终于逆转。

**关键数据：**
- 干货车即期费率同比上涨 **52%**（5,200 基点），不含燃油附加费
- Logistics Managers Index 显示运输价格增速为 **10 年历史最快**
- Estes Express Lines（$60 亿营收）正在扩大 10,500+ 卡车车队

</div>

</div>

<div>

**复苏的本质**

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

这是一场典型的**供给驱动**复苏，而非需求驱动。卡车太多 → 无人承运 → 费率过低 → 退出潮 → 供应不足 → 费率恢复。新平衡会吸引更多卡车进入，费率将再度调整。

**通胀影响**：卡车费率上涨会推升消费价格。但燃油附加费是传导性的——运营商正将伊朗战争导致的油价上涨转嫁给客户。

</div>

</div>

</div>

---

# 文化信号：Buzz Lightyear GT3 RS 与创作者经济体

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Porsche × Pixar：当跑车遇见 Toy Story**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Porsche 与 Pixar 合作推出两款定制车：
- **Buzz Lightyear GT3 RS**：紫色碳纤维桶椅、Space Ranger 徽标、"To infinity and beyond"铭牌、Goodyear 定制 Lightyear 轮胎
- **Woody 911 Carrera T**：丹宁质感漆面、牛仔布/皮革座椅

Porsche CEO 此前宣布**不会生产电动 911**——但会推出这些合作款。这是品牌在文化中的新玩法。

</div>

</div>

<div>

**创作者经济的资本化**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

CAA Compound 基金之外，创作者经济还有多种变现通道：
- **Spotter**：提前出售 YouTube 视频的未来广告收入
- **媒体控股公司模式**：Barstool Sports、Hello Sunshine 等已成功走通
- 关键洞察：Compound 不碰算法分成——他们买的是**整个公司的股权**，而非平台依赖型的收入分成

</div>

</div>

</div>

---

# Lionsgate × Runway：AI 电影的缓慢渗透

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Lionsgate 的 AI 战略**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Lionsgate 入股 AI 视频公司 **Runway**，并启动联合项目孵化新 IP。这是继 Runway 与多家电影公司合作后的又一重要布局。

Lionsgate 的片库包括：**Saw、American Psycho、John Wick、Sicario、Rambo**——即 meme 生成机器。

主播点评：也许 John Wick 6 会由下一个模型"一 shot"生成。但更现实的是：先解决背景替换、特效加速等生产力问题。

</div>

</div>

<div>

**"正常 AI CEO"的出现**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

Take-Two（GTA 母公司）CEO Strauss Zelnick 对 AI 的态度被主播称为"normal AI CEO"：

- 承认 AI 可以克隆游戏——没人否认这一点
- 但 IP、分发渠道、游戏功能远不止代码复制
- "People are still going to play our game because of all the other strengths of the Take-Two business."
- 这与恐慌型"AI 会毁掉游戏产业"形成鲜明对比

</div>

</div>

</div>

---

# Anthropic Fable 5 安全护栏争议

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-lg">
"We made the wrong trade-off, and we apologize for not getting the balance right."
<div class="text-xs opacity-60 mt-1 not-italic">— Anthropic 向 Wired 表示，关于 Fable 5 的安全护栏调整</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div>

**事件回顾**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Fable 5 发布时，Anthropic 设置了一些**秘密的安全护栏**——模型在某些话题上性能被悄悄降级（"secretly degrade the IQ"）。社区（包括 SemiAnalysis）发现后引起广泛批评。

Anthropic 随后宣布将护栏**公开可见**——但拒绝的话题仍然受限，需联系支持团队解锁。

</div>

</div>

<div>

**"爆炸半径"效应**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">

Dean Ball（政策分析师）评论：

"The residual broken trust and resentment this created will linger and have a **blast radius wider than Anthropic**."

未来任何基于 AI 风险的政策倡导，都会被人用这次事件反驳。一次不透明决策的代价远超单一公司——可能伤害整个 AI 安全领域的公信力。

</div>

</div>

</div>

</div>

---

# Thrive $100 亿：史上最大 VC 基金的哲学

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Thrive X 的规模与策略**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Thrive Capital 完成 <strong>$100 亿</strong> 新基金——史上最大，接近上期规模的两倍。其中 $10 亿用于早期投资，$90 亿用于成长期。

核心持仓：OpenAI、Stripe、SpaceX、Databricks、Anduril、Cursor——这些已成为当前周期定义性的私营公司。

</div>

</div>

<div>

**投资哲学：从外到内的颠覆**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

Partner Patrick O'Shaughnessy（Invest Like the Best）分享的核心理念：

- Next decade North Star："make ourselves look more like the businesses we invest in"
- 投 OpenAI 后发现：当时 API 年收入仅 $5000 万，向 PE 推介 AI 提效得不到 traction → Kareem 说"我们自己做"
- 设立**永久资本工具**，收购企业并永久持有——颠覆将从"内部向外"发生，而非传统的"外部向内"

</div>

</div>

</div>

---

# Ty Morse 的 Elon 采访：元故事比正片更火

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**"What would Elon do?"**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

Ty Morse（播客主）正在追逐一次 Elon Musk 采访。他的方法论是把自己代入 Elon 的思维：

"A maniacal sense of urgency is our operating principle."

他在 7 天撤离期限的场地内搭好第一套布景，现在又建了第二套可运营一整月的布景。整个过程中，**关于"搭布景"的元视频获得了 200 万观看**——远超大多数真正的播客采访。

</div>

</div>

<div>

**元故事为何更火？**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

TBPN 主播的洞察：Elon 做过很多采访（包括 Jamie Dimon），但大多数没有超级传播。Ty Morse 的**建造过程**——冒险、快速搭建、疯狂时间线——本身就是最好的内容。

人们爱看大胆行动、真实建造和冒险精神。即使采访还没发生，故事已经赢了。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">

**作者概括：** 这反映了创作者经济中的一个新动态——过程（process）作为内容，有时比产出（output）更具传播力。Builder narrative 天然具备戏剧性。

</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈中最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"AI's advances have paved the way for a multitude of golden ages, not just one, happening simultaneously. This is the best time to start a company."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Bezos，Prometheus 联合 CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"It's a little bit like learning how to swim. You can learn swimming by just watching a video or something. It's about a nervous system."
<div class="text-xs opacity-60 mt-1 not-italic">— David Reger，Neurobotics CEO，论机器人需要的不只是"大脑"</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"You can usually only have a system that is very fast but relatively inaccurate or very accurate but relatively slow. By applying AI to our control system, we're able to create a robot that can be both fast and accurate."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike Wior，Allen Control Systems，Bullfrog 的核心突破</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Speed has become the mode."
<div class="text-xs opacity-60 mt-1 not-italic">— AMD CVP of AI Anush，Lisa Su founder mode 后 AMD 的新节奏（Jeff Tatarchuk 转述）</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"We made the wrong trade-off, and we apologize for not getting the balance right."
<div class="text-xs opacity-60 mt-1 not-italic">— Anthropic，回应 Fable 5 秘密安全护栏争议</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"CUDA was always built to go beyond CUDA. It's not the moat. The ecosystem... that's the moat."
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Diamos，CUDA 早期工程师（现 TensorWave），Jeff Tatarchuk 转述</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的观点：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I always felt like I was in a library."
<div class="text-xs opacity-60 mt-1 not-italic">— Emma Walbridge，Portal Lounge 联合创始人，解释为何传统机场休息室需要颠覆</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"We have our own AI bot that is calling the hotel, automatically having a discussion over the phone... It's automatic."
<div class="text-xs opacity-60 mt-1 not-italic">— Ariel Cohen，Navan CEO，描述 AI 打电话给酒店前台的实战功能</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"LLMs work well with unstructured data — text, audio, video. But the global economy and enterprises really run on structured data, on tables."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeremy Fraenkel，Fundamental CEO，阐明表格数据 AI 的机会</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"I'm sure that the number of store workers in physical retail stores probably shrunk, but the number of entrepreneurs building products, selling them on Amazon probably increased."
<div class="text-xs opacity-60 mt-1 not-italic">— 主播 John，评论 Bezos 对 AI 不会导致大规模失业的论点（Amazon 先例）</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"We are trying to drag in the absolute best engineering talent possible. Robotics is an incredible symphony of detailed integration between hardware and software to do it well."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike Wior，Allen Control Systems，论机器人工程团队的深度</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"When we launched the fund in 2018, we said: we're going to invest in applied AI for the real economy. The feedback from the LPs was like, 'applied AI is not a thing.'"
<div class="text-xs opacity-60 mt-1 not-italic">— Ade Ajao，Base10 管理合伙人，论先见之明</div>
</div>

</div>

---

# 尾声：一个被 AI 加速的世界

<div class="text-sm leading-relaxed space-y-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**本期画出的 AI 2026 版图：**

Bezos 砸 $120 亿赌 AI 能设计制造喷气发动机 → Neurobotics 正在给机器人建"体育馆" → Bullfrog 用 AI 击落无人机（100% 击杀率） → Navan 的 AI 自动打电话给酒店 → AMD 在 Lisa Su 的 founder mode 下撕裂 CUDA 护城河 → Fundamental 用表格 AI 预测世界杯 → $10B 的 Thrive 基金、$1,000 亿散户订单的 SpaceX IPO

</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**物理世界 AI 的落地速度远超预期**<br/>
<span class="text-xs opacity-70">从工厂到战场，机器人正在被真实部署</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**AI 基础设施不再是 NVIDIA 一家独大**<br/>
<span class="text-xs opacity-70">AMD 正在建立一个有竞争力的替代生态</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**资本对 AI 的押注规模史无前例**<br/>
<span class="text-xs opacity-70">$410 亿估值的 B 轮公司、$100 亿 VC 基金——这不是泡沫，是新范式</span>
</div>

</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-6 text-sm opacity-70">
TBPN · 2026 年 6 月 11 日
</div>

<div class="mt-4 text-base italic opacity-60">
"AI's advances have paved the way for a multitude of golden ages, not just one, happening simultaneously."
</div>

<div class="mt-2 text-xs opacity-50">
— Jeff Bezos
</div>
