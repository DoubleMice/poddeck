---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '147. 和蚂蚁灵波沈宇军聊：机器人原生基础模型、大脑和本体的关系、预训练与数据scale up、老师汤晓鸥'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 147. 和蚂蚁灵波沈宇军聊

<div class="text-xl opacity-60 mt-4">
机器人原生基础模型 · 大脑与本体的关系 · 预训练与数据 scale up · 老师汤晓鸥
</div>

<div class="text-sm opacity-50 mt-8">
小君 · 商业访谈录 · 2026年7月
</div>

<div class="text-xs opacity-40 mt-6">
嘉宾：沈宇军，蚂蚁灵波科技首席科学家
</div>

---

# 为什么这一期值得关注

<div class="grid grid-cols-2 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**一家"只做大脑"的中国机器人公司**
蚂蚁灵波已开源两代具身模型，从 9 种构型扩展到 20+ 种，预训练数据从 2 万小时增长到 6 万小时。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**"具身原生"的理念赌注**
沈宇军坚持从物理世界需求出发，从头训练具身基础模型，而非在数字世界模型上"魔改"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**GPT-1 时刻还没到**
核心瓶颈不在模型架构，而在数据的 scale up。沈宇军认为具身数据需要达到百万小时级别。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**大脑落后于本体的行业共识**
2025 年大家都在 show demo，2026 年都在谈进场景——大脑的开发进度已落后于硬件。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**中美路线的融合与差异**
Generalist（高效后训练）vs Physical Intelligence（zero-shot），但殊途同归——两种能力最终都需要。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**创业就是赌**
沈宇军说："在有限资源下，路径不确定时，就是要敢赌。"三次豪赌：传感器原生、具身原生、数据原生。

</div>

</div>

---

# 从清华到商汤：生成模型的"启蒙"

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**学术探索路径**

沈宇军的 AI 之路是从"对打榜不感兴趣"开始的。2017 年，当大多数人还在做检测、分割、分类时，他因为 GAN（对抗生成网络）能"真的生成一张图"而被吸引，自此走上生成模型之路。

从图像编辑（让用户变老/变年轻，男生变女生）一路向前追溯：编辑 → 生成 → 预训练 → 表征学习，形成了从下游到上游的完整认知链条。

</div>

<div>

**GAN 的终局**

即便在 Diffusion 和自回归生成流行之后，沈宇军的团队仍坚持 GAN 的 scale up，直到 2026 年初做了最后一次尝试。结论是：GAN 仍有价值，但计算量的利用效率太低，不适合生成视频等极复杂内容。

不过对抗训练的博弈机制——同时训两个模型、让它们互相迭代——是他认为仍会以其他形式延续的技术资产。

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**关键转折**：博士毕业后，沈宇军在商汤看不到生成内容业务的落地场景，于是加入字节跳动做抖音特效——用 AI 技术做"20 年后你长什么样"这类爆款玩法。但一年后他发现："确实还有很多自己想做但是没做的东西。"

</div>

---

# 从字节到蚂蚁：视觉 AI 何处安放？

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

**计算机视觉的"用武之地"困境**：人脸识别是第一波大规模应用，自动驾驶是第二波。"除此之外好像还没有看到哪一个视觉应用被大规模用起来，有比较强的产业价值。"沈宇军因此决定在 2024 年转向具身智能——"在物理世界离开视觉，机器人肯定是没法工作的。这是一个对视觉的强依赖。"

</div>

<div class="grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**字节跳动**
产品公司
<br/>
<span class="text-xs opacity-60">用 AI 赋能既有产品<br/>每天想各种爆款特效</span>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**蚂蚁技术研究院**
研究驱动
<br/>
<span class="text-xs opacity-60">大模型爆发冲击学术圈<br/>"什么是好的研究"的迷茫</span>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

**蚂蚁灵波**
直面产业
<br/>
<span class="text-xs opacity-60">既有发挥空间<br/>又能对产业有价值</span>

</div>

</div>

</div>

---

# 蚂蚁灵波的创立：从研究院到直面产业

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**为什么成立子公司而非研究部门？**

"如果是把它当做研究机构的形式去做的话，很有可能做一做就脱离了这个行业。研究人员认为的先进技术跟行业需要的先进技术是有 gap 的。"

蚂蚁集团的判断是：既然要干，就变成真实的业务来干。灵波承载的是集团在物理世界人工智能上限的使命——从数字世界的生活服务向物理世界延伸。

</div>

<div>

**创立之初的"天真"**

24 年底刚来时团队不到十个人。沈宇军回忆两个感受：

1. **"还是太天真了"**——把模型部署到机器人上，通信怎么调、系统怎么搭，"有太多太多的技术栈超出了我本来的认知"

2. **"一边学习一边跟着行业变化"**——这种过程"比较奇妙"

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**三个组织的跨度总结**：从产品公司赋能 AI → 研究院追论文 → 创业公司直面需求。沈宇军认为具身正当时——"技术不收敛的时候，技术人能为这个行业去探索一条不正确的路也是一种贡献。"

</div>

---

layout: two-cols
---

# 为什么只做大脑不做本体？

<div class="text-sm leading-relaxed">

**核心信念：每家都应有一个机器人，跑的是灵波的大脑。**

"这个机器人是什么样子其实谁也不知道，甚至是不是同一个品牌也不一定——就像大家现在的手机也是五花八门的。"

灵波也从传感器出发、从视频中学习，为的是让大脑在预训练阶段就经历过不同本体，了解它们的特性，落地时可以快速适应。

**"通用"的三个维度**：跨本体、跨任务、跨场景。沈宇军特别强调"本体和场景没办法完全解耦"——什么样的本体适合什么样的场景，从产品定义的那一刻就已经决定了。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./brain-body-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 25 年的两个关键决策

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**决策一：从视频里学习时序建模**

25 年 3 月，行业还没有"世界动作模型"（WAM）概念时，沈宇军就做出判断：机器人往前走，一定要从视频里学习——不是把视频抽帧当图像看，而是真的让模型学会时序的东西。

"那个时候其实还没有所谓的 WAM 这条技术路线，但我们就比较坚定地觉得机器人的往前走一定要从视频里学习。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**决策二：从真实传感器出发**

学术界"心照不宣"的习惯：数据集都比较干净，很少看到噪声大的东西。但机器人在现实世界中跑，传感器的噪声完全无法忽略。

"在我们尝试着用数字世界开发的模型直接在机器人里用的时候，发现落地跟之前的想象完全不一样。"

这两个决策催生了灵波 1.0 的四个模型——于 2026 年 1 月开源。

</div>

</div>

---

# 26 年的豪赌：具身原生，从头来训

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

**核心矛盾的发现**：数字世界模型的开发初衷与物理世界的需求**不匹配**。比如视频生成追求高清画质，但机器人控制不需要；而机器人需要的实时单向推理和推理效率，数字世界模型并不天然支持。"你不能反向去 push 他们改模型，他们有自己的迭代节奏。"

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**1.0 的问题**：基于数字世界的模型做"魔改"

- 强行在数字模型上改，很多特性不 work
- "改了再 fancy，缺点还是会暴露出来"
- Depth 预训练用 Dino v2（语义理解），与物理世界的空间感知需求不匹配

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2.0 的决定**：具备底层模型训练能力

- 视觉相关全部从头训
- 只用 LLM（语言层数字物理共用）
- 在模型特性上为具身设计，但数据仍依赖互联网
- **"不敢说它一定是百分之百验证，但至少我们迈出了一步"**

</div>

</div>

</div>

---

layout: two-cols
---

# 灵波 2.0 六模型全景

<div class="text-sm leading-relaxed">

**视觉层（看得更清楚）**：Vision（几何原生预训练）→ Depth（空间深度感知）

**架构层（想得更明白）**：Video（MOE 稀疏架构）+ World（单向 causal 时序）→ VA 2.0（具身原生基模）

**执行层（干得更利索）**：VLA 2.0（多构型落地执行），独立于视觉层和架构层，专注数据质量和产业需求

所有模型均开源发布，VA 2.0 是全部技术的合集——每个参数完全随机初始化，用真机数据从头训练。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./six-models.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Vision + Depth：看得更清楚

<div class="mt-3 text-sm leading-relaxed">

**Vision：从几何出发的预训练**

弃用 Dino v2 做预训练基模（Dino v2 本质是数字世界的语义理解模型，擅长区分"这是一盆花""这是一只狗"），改为完全从几何角度出发。"可以粗浅理解成点线面——从边缘出发，让模型更好地理解几何概念。几何跟距离是比较相关的。"

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**能看清水流**

厨房里反光的水龙头打开水后，Depth 模型可以清晰看到水流的位置。"对于机器人真的想执行一个任务来说是很关键的——假如说接水，你必须先能看到水。"

语义理解知道水开了，但不知道水流在哪里；几何理解两者都能做到。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**玻璃门外的猫**

阳台有一道玻璃门，外面有一只猫。Depth 模型完全看不到猫（因为前面有玻璃挡着），但语义理解模型知道那里有只猫。

"拉开玻璃门的过程中，猫逐渐从门后面出来。**能看到是语义理解，摸不到是空间感知。**"

这就是数字世界与物理世界的本质区别。

</div>

</div>

---

# VLA 2.0：从落地倒推数据需求

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

**实验室与真实场景的 gap**：1.0 的 VLA 只支持双臂+夹爪、桌面操作。但真实落地中，机器人需要抬手够高处、弯腰拿低处、移动底盘接近目标。这些自由度在 1.0 中完全没有覆盖。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**构型扩展**
<div class="text-2xl font-bold text-blue-600 my-1">9 → 20+</div>
<div class="text-xs opacity-70">从底座+双臂到<br/>头+腰+底盘+灵巧手</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

**数据升级**
<div class="text-2xl font-bold text-green-600 my-1">2万→6万 小时</div>
<div class="text-xs opacity-70">更严格的数据管线<br/>旧数据大量清洗后只剩1万多</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

**任务复杂度提升**
<div class="text-2xl font-bold text-orange-600 my-1">桌面 → 立体</div>
<div class="text-xs opacity-70">支持非固定高度操作<br/>头颈腰底盘全联动</div>

</div>

</div>

</div>

---

# Video MOE：稀疏化的攻坚战

<div class="mt-3 text-sm leading-relaxed">

**为什么需要 MOE？** 数字世界的视频生成模型往往是 dense 的（如万象），推理时 14B 参数全部激活。但机器人需要实时响应，必须稀疏化——"它一定要实时，一定是实时的。"

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**失败的真相**

"光训 MOE 想训明白，可能就花了**两个月**的时间。失败个**几十次**应该是有的。"

核心难点：如何让专家被等概率激活。如果不均衡——30 个参数每次只有 10 个被激活——剩下的 20 个就等于白训了。"把 MOE 训好是一个能力问题，不是一个态度问题。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**解决路径**

调整训练时的 loss function 选择、sampling 策略、加各种正则化项。"现在我们是可以保证 MOE 这个东西基本上可以稳定训练。"

"哪怕换一个框架，这个技术因为 MOE 本身是个稀疏化技术，应该是在这方面算是有了一个比较大的提升。"

</div>

</div>

</div>

---

# World Causal：时间不能倒流

<div class="mt-3 text-sm leading-relaxed">

**数字世界 vs 物理世界的本质差异**：数字世界生成视频可以是双向 attention——开始和结局都知道，生成完整一段即可。但机器人执行是实时单向的——"你的历史看不到未来，未来可以看到历史，但历史看不到未来。时间是单向流逝的。"

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**踩过的坑：双向变单向**

团队花了三四个月尝试把双向 attention 强行转成单向。"跑通是跑通了，但那些预训练学到的知识有些就遗忘了。"

原来能理解 100 句话并转译成好视频，变成单向后只剩 20%-30% 能正常转译。"知识被破坏了。预训练相当于作废了。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**正确的做法：从头单向训练**

果断舍弃"双向变单向"路线，从模型设计的第一天就是**单向 causal**。

"从最开始设计的时候就是单向的。"这个决定和 MOE 攻关一起，构成了灵波 Video 和 World 两项技术的核心——都是为了给 VA 2.0 铺路。

</div>

</div>

</div>

---

# VA 2.0：具身原生的合集

<div class="mt-3 text-sm leading-relaxed">

**三个技术点的融合**：

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**视觉压缩对齐**
<div class="text-xs opacity-60 mt-1">编码器在压缩过程中<br/>就能感知语义和动作<br/>不再单纯压缩</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

**MOE 稀疏架构**
<div class="text-xs opacity-60 mt-1">推理效率大幅提升<br/>两个月几十次失败<br/>终于稳定训练</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**单向 Causal Pretrain**
<div class="text-xs opacity-60 mt-1">时间不会倒流<br/>舍弃双向变单向路线<br/>从头就是单向设计</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**效果验证**：打桌球 demo——只依赖机器人自己的相机，没有外部追踪，处理随机来球的实时对抗。只需 **20 条**后训练数据。整理桌面——物品随机撒落、中途取出、跟人一起收拾，均能应对。"以前可能采多少数据都不一定能做成。"

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

VA 2.0 从每一个参数完全随机化开始训，训练数据包含所有 VLA 真机数据，架构已为具身原生，但预训练仍大量依赖互联网数据（差两个数量级）。

</div>

</div>

---

---
layout: two-cols
---

# 数据的 scale up 鸿沟

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

**沈宇军的判断**：虽然模型架构上已经做到"具身原生"了，但数据上还没有——互联网数据与机器人真机采集数据之间差约**两个数量级**。"可能当具身的数据本身可以做 scale up 的时候，或者说能至少跟互联网达到相同量级的时候，是我心目中的 GPT-1 时刻。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-2">

**理想的 scale up 路径**

- **当前**：6 万小时（经过严格清洗）
- **中期**：10 万小时规模，完全用于具身原生预训练
- **GPT-1 时刻**：**百万小时起步**，具身数据与互联网数据平衡

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**真机数据成本在下降**

过去两年真机数据获取成本"至少降了三倍不止"。但挑战在于：数据采集方式（如 Ego-centric）的理念有了，变成可规模化产品还需时间。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: two-cols
---

# 数据采集的 Know-How

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">

**任务下发策略**

关键是如何让任务尽可能覆盖所有自由度。头部出现 90% 而腰部只 10%，模型就更倾向学头。"任务复杂度越高，能丝滑操作的数采员就越少——不丝滑的动作会被模型当正确操作来学。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-2">

**跨本体数据处理**

每家相机位置不同、关节配置不同。"很多数据处理方式要跟本体有比较强的关系。"仿真数据可以做很大，但分布同质化严重。灵波坚持**以真机数据为主，仿真只用于评测**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-pipeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 后训练效率的跃升

<div class="mt-3 text-sm leading-relaxed">

**2.0 相比 1.0 的两大提升**：

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**多任务统一模型**

1.0 时 100 个任务需要训 100 个模型——每个任务单独做后训练。

2.0 可以把 10 个任务训到一起，一个模型全部解决。

"这是一个方面的提升。"

</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**数据量需求大幅降低**

1.0 每个任务需要约 100 条后训练数据。

2.0 降到约 **20 条**就能完成——打桌球 demo 一共也只采了 20 条数据。

"当然你还是没办法做到说一条甚至更少。可能要随着基模能力进一步提升。"

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**位置泛化已经突破**：在整理桌面任务中，无论物品被随机撒在哪里、甚至中途被拿出再放回去，机器人都能应对。"你甚至可以跟它一起收拾"——处理随机性的能力比 1.0 强很多。但**任务维度的泛化**仍未突破——给一个从未见过的任务直接完成，目前还做不到。

</div>

</div>

---

---
layout: two-cols
---

# 与 LLM 的关系：大脑还是小脑？

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-2">

**沈宇军的观点**："外面每个人对大小脑的定义是不一样的。在一些简单指令的执行上，灵波解决的是'把一件事做好'的问题——你给它一句话，它帮你把这事做了。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-2">

**灵波现在：意图的实现**
不管"为什么要做"——只管"把这个动作做好"。可以是一段连续的动作，但它不会产生自己的想法。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm mb-2">

**未来需要：意图的来源**
依赖语言模型解决需求泛化（如下雨→拿伞）。LLM 是交互入口，不是具身模型的上游依赖。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./llm-embodied.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 中美路线对比：Generalist vs Physical Intelligence

<div class="mt-3 text-sm leading-relaxed">

**两条路线的核心差异**：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Generalist（谷歌系）**

- 核心：高效后训练
- 接受有后训练的范式
- 数据管线更成熟，几十万甚至可能百万小时
- 更早触达 pretrain 层面
- 更依赖 Yumi 类型的数据

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Physical Intelligence**

- 核心理念：zero-shot
- 希望不要后训练，什么都会
- 在真机遥操上做得更扎实
- 强调通用性

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**沈宇军的判断**：殊途同归。"如果设想未来有一天机器人真能进家庭，你肯定希望它有两个点：80-90% 的活它自己就能干，10-20% 它干不了的你教它一下就会了。这两个能力都必须具备。"

但 Ego-centric 数据采集的兴起和灵巧手的发展，可能会让两条路线都发生新变化——"合久必分，分久必合"。

</div>

</div>

---

# 行业判断：大脑落后于本体

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**"大脑的开发是落后于本体的。今年的主要矛盾应该是怎么让它先变得能把活干好。"**

</div>

**行业加速的两个维度**：

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**硬件侧：超预期的进步**

- 宇树、智元等已跑通量产
- 灵巧手公司层出不穷，可能"渐渐变成标配"
- 触觉传感器不断发展
- 供应链随行业成熟

</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**软件侧：从 demo 到场景**

- 2024 WRC：还在 show demo（"倒咖啡""叠衣服"）
- 2026：大家 demo 提得少了，都在提进场景
- Figure 展示物流分拣
- 落地不再靠传统控制，用模型驱动

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**不及预期的是数据**："在没有具身原生的东西真正出来之前，大家对数据量的需求其实没有想象中那么迫切。没有一个具体的推动力让你马上一定要拿到这些数据。"

</div>

</div>

---

# 大脑与本体的交替上升

<div class="mt-3 text-sm leading-relaxed">

**"大脑跟本体现在还是不能完全解耦，但它们一定是交替上升的。"**

当前阶段：大脑落后于本体 → 大量公司涌入做大脑 → 智能层会跑得比本体快 → 某一天超过本体 → 对本体提出新需求 → 催生**由智能重新定义的新一代本体公司**。

**传感器的重新定义**：传统传感器指标（精度、频率）是凭经验取舍的，但 AI 时代可能需求不同——模型最需要的可能是"反应够快"而不是"力足够准"。

未来方向：**从模型的需求出发，看要优化哪些传感器指标。**

</div>

---

layout: two-cols
---

# 三个"原生"的递进体系

<div class="text-sm leading-relaxed">

**"看得更清楚、想得更明白、干得更利索"——沈宇军将灵波的三个目标与三个原生层次对应：**

- **视觉原生** → 视觉层（Vision/Depth）：看得更清楚 ✅ 已推进
- **架构原生** → 架构层（Video/World/VA）：想得更明白 ✅ 已推进
- **数据原生** → 数据层：干得更利索 🔜 下一步核心

"数据原生的部分也能比我预期来得要早，那我可能会更开心。这样的话，真的就是完全物理世界有自己的一套——从模型到架构到数据，闭环的一套原生体系。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-natives.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 创业就是要赌

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

**"没有人知道哪一条路一定是成功的，资源又一定是有限的。在有限的资源下、路径不确定的情况下，就是要赌。敢做决定、敢赌，这是很关键很关键的一点。如果那条路一定成功，大厂一定成功了。"**

</div>

**灵波的三次豪赌**：

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**赌注一：传感器原生**
<div class="text-xs opacity-60 mt-1">坚持从真实传感器出发<br/>解决物理世界噪声问题<br/>不做干净数据的benchmark</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

**赌注二：具身原生**
<div class="text-xs opacity-60 mt-1">从头训基模<br/>可能训一年不收敛<br/>"思路错了/技术不成熟/资源不够"<br/>——沈宇军力排众议的决定</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

**赌注三：数据原生**
<div class="text-xs opacity-60 mt-1">建立数据联盟<br/>规模化采集标准<br/>质量和数量的平衡</div>

</div>

</div>

</div>

---

# 汤晓鸥：从混沌中抓主要矛盾

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**两个印象**

1. **幽默**："汤老师是个比较幽默的人。他讲话，因为他跟我一样也是东北人，听他的讲话比较亲切。"

2. **抓主要矛盾的能力**："能比较快速地从乱序的混沌当中，抓到一个主要矛盾。"

答辩时别人问他怎么做，汤晓鸥问的是"这个东西到底应该怎么用"——一个跟行业落地相关的问题。"上一代 AI 最大的痛就是不好落地，没有一个很好的场景。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**创业 vs 学术的共振**

沈宇军的学术路径是"对打榜不感兴趣"→ 选择生成模型 → 一路追溯到表征学习。到创业时，他又强调"既要探索智能上限，又要抓落地"。

这恰好与汤晓鸥的提问精神一脉相承——技术不只是论文和数字，而是**能被场景验证的价值**。

"以前会更关注技术的领先性。现在会更关注技术的**哪一方面**的领先性——是不是有价值的领先，还是只是技术人拍脑袋觉得。"

</div>

</div>

</div>

---

# 中国优势：硬件生态与数据采集红利

<div class="mt-3 text-sm leading-relaxed">

**"具身的数据可能是一个空窗期，现在大家都是一样的。在收数据上可能中国有优势。"**

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**中国的独特优势**

- 硬件供应链成熟、成本优势明显
- 量产能力已验证（宇树、智元）
- 数据采集上"中国一定比美国跑得快"
- 大量劳动力优势可转化为数采力量

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**灵波的应对**

- 建立"数据联盟"，与合作伙伴共建数据体系
- 先内部摸清 SOP，再对外规模化
- 数据采集标准是规模化的关键
- "所有的规模化东西一定要有标准"

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

沈宇军的警惕："互联网数据是红利变现，是互联网时代积累下来的。具身没有这个红利——大家起点都一样。谁能先把可规模化+可被模型使用的数据链路建起来，谁就有先发优势。"

</div>

</div>

---

# 快问快答：J人、令狐冲与家的定义

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**如果机器人有性格？**

"我希望它是个 **J 人**。核心还是要实用。在提供情绪价值和干活之间，我会果断选择干活。情绪价值应该由人来提供。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

**人生之书？**

《笑傲江湖》。"我特别喜欢令狐冲里面那种比较豁达的样子——什么都不太在乎的那种心理状态。我希望成为这样的人。"

</div>

</div>

<div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">

**最好的预期 vs 最坏的预期？**

最好：真的看到机器人进家庭，跑的灵波模型。

最坏："就是没做出来呗。可能某一次赌的过程中赌错了。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">

**全球最喜欢的地点？**

"家。"

全球最好吃的食物？

"日料。"

</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"能看到是语义理解，摸不到是空间感知。"
<div class="text-xs opacity-60 mt-1 not-italic">— 解释 Vision/Depth 与数字世界模型的根本差异</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"把 MOE 训好是一个能力问题，它不是一个态度问题。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈稀疏化训练的难度</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"我还是很坚信：具身一定会有自己的模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对独立于语言模型的机器人基座模型的信念</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"大脑的开发是落后于本体的。今年的主要矛盾应该是怎么让它先变得能把活干好。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2026 年行业现状判断</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的句子：</div>

<div class="space-y-2">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"没有人知道哪一条路一定是成功的。在有限的资源下、路径不确定的情况下，就是要赌。如果那条路一定成功，大厂一定成功了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对创业本质的感悟</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"研究人员认为的先进技术跟行业需要的先进技术是有 gap 的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么蚂蚁灵波成立为独立公司而非研究机构</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"在提供情绪价值和干活之间，我会果断选择干活。"
<div class="text-xs opacity-60 mt-1 not-italic">— 沈宇军希望机器人是个 J 人</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"我也是第一次面向落地，第一次创业。第一个第一次是业，第二个第一次是创。"
<div class="text-xs opacity-60 mt-1 not-italic">— 从学术到产业的转变体悟</div>
</div>

</div>

---

layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-60">
"我还是很坚信，具身一定会有自己的模型。"
</div>

<div class="mt-4 text-sm opacity-50">
— 沈宇军，蚂蚁灵波科技首席科学家
</div>

<div class="mt-12 text-xs opacity-40">
小君 · 商业访谈录 · 2026年7月
</div>
