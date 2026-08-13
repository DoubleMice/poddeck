---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '150. 对英伟达研究副总裁刘洺堉的4小时访谈：功夫、Cosmos 3、开源世界模型、黄仁勋、你不需要击败所有对手'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 功夫、Cosmos 3 与开源世界模型

<div class="text-sm opacity-60 mt-4">
对英伟达研究副总裁刘洺堉的 4 小时访谈
</div>

<div class="text-xs opacity-50 mt-6">
语言及世界工作室 · 小俊 · 2026 年 8 月 · 3 小时 36 分钟 · 上海录制
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Cosmos 3：从 22 个模型到一个**
黄仁勋用 Louis Vuitton 的比喻点醒他：货品太多反而卖不动。世界模型进入"统一模型"时代

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**为机器人构建"黑客帝国"**
刘洺堉把世界模型定义为 Physical AI 的基座：更好的数据、更好的起点、更好的环境

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**十年英伟达近距离观察**
不裁员、Top 5 邮件、Mission is the boss、"Are you a crybaby?"——黄仁勋管理方式的亲历者视角

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**模型竞争不该是鱿鱼游戏**
"备多者力寡"，你不需要击败所有对手；模型能力终将收敛，靠生态整合区分

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**从 GAN 到 Cosmos 的 20 年求索**
马良神笔 GauGAN、1000 张 A100 的赌注、实习生 Tim Brooks 做出 Sora——生成式研究的完整脉络

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**中国功夫与凌晨四点的自律**
师承"神枪李书文"一脉的武术传承，如何塑造他的研究心态与节奏

</div>

</div>

---

# 刘洺堉是谁

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**英伟达研究副总裁 × Cosmos Lab 副总裁**
2026 年初离开 NVIDIA Research 序列，改向公司第一位软件工程师 Dwight 汇报

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**890 人的团队**
直属研究员加工程师约 890 人，整个 Cosmos 项目约 200-300 人；Cosmos 3 论文作者近 300 人

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**英伟达第一位"研究员 VP"**
"我可能是第一个吧"——前几年每一年跳一级，靠把研究变成产品获得公司信任

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**黄仁勋的评价：GSD**
getting shit done——把事做成。英伟达内部的人说他不像典型研究者，更像工程领导者

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**每天几百万美元的成本**
"运用这么多运算资源，每天都是几百万美金的运算成本"——他把它看作公司信任的体现

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**20 年生成式研究的老兵**
GAN 早期研究者、GauGAN 作者、Cosmos 总负责人；本次访谈发生在黄仁勋访华后一个月

</div>

</div>

---
layout: two-cols
---

# 从台北到马里兰：一条意外之路

- 台北长大，高中时代最热门的是无线通讯，于是去了新竹交大——当时手机还是 Nokia 时代
- 大三那年，他发现美国顶尖实验室做的研究"每个成功都是一个零到一的变化"，而自己算的是"怎么设计一个 protocol 让传输更快"——"这是一种提升，但不是一个零到一的变化"
- 决定赴美留学时，父母都吓一跳："他们认识我二十几年，没有听过我讲说我要去美国留学这件事情"
- 原本想学量子通讯；在台湾 Intel 实习时第一次接触影像识别——"从这些 pixel 里面去判断里面是什么东西，是谁"，从此迷上 computer vision
- 申请到马里兰大学读博，师从领域先锋 Rama Chellappa，博士后期迎来 AlexNet 改变世界

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./journey.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 十年前的一次 job talk：小说进，电影出

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"有一天最主要生成视频的运算将会是 deep learning，而不会是传统的 computer graphics。……我有一天可以把小说当成是 input 放进这个 deep learning，就会产出电影。"

</div>

<div class="mt-5 text-sm opacity-70 leading-relaxed">
—— 2016 年加入英伟达时的 job talk。那时的英伟达还不是公认的 AI 公司，研究机构不到 100 人；计算机图形学（CG）才是影像生成的主流。
</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么敢下这个判断**：deep learning 是 data driven，能做到传统 graphics 需要大量人力才能实现的控制。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**他的自评**："我一直很有野心。只是我觉得我的执行力不够，我看的时间点不够。"
</div>

</div>

---

# 一封写给黄仁勋的信：要 1000 张 A100

<div class="text-sm leading-relaxed mt-2">

- DALL-E 发布后，他意识到："我那时候并没有意识到我们其实已经有这个条件了……**我的野心不够大，不够勇敢，没有决心去把这东西做出来**"
- 在"算力最多的地方"，他写信给黄仁勋：未来已经很明确，就是靠 deep learning 做影像生成；NVIDIA 的客户都在用 GPU 做传统 graphics，不能落后
- 同时写信给 Getty Images 谈合作——"你们这样未来才有比较保障"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**要了多少 GPU？**<br>"那时候我是要了 1000 个 A100 GPU。"Ampere 时代，1000 张已经很多
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Picasso 项目**：与 Getty Images、Shutterstock 合作，目标是 AI foundry——公司有数据没 AI 能力，NVIDIA 建模型给他们用
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**从这一刻起**，他的 research 不只产出论文，也产出帮客户成功的产品——"研究即产品"的起点
</div>

</div>

---

# GauGAN：马良神笔与 GTC 2019 的意外

<div class="text-sm leading-relaxed mt-2">

- 算法本名 SPADE——黄仁勋看完 demo 很兴奋，但不满意名字：**SPADE 不是用户语言**
- 营销天才 Greg Estes 提议叫 GauGAN（致敬画家高更）；论文早已投中 CVPR，公司让团队先别放 arXiv，等 GTC 2019 由黄仁勋宣布
- 结果那年黄仁勋要发布的产品太多，GauGAN 在 keynote 前一天晚上被拿下，只做新闻稿和媒体 demo

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 leading-relaxed">

"很多媒体朋友看到它之后反而是 GTC 里面最受瞩目的一个 work。"

</div>

<div class="mt-4 text-sm opacity-70 leading-relaxed">
涂几个颜色代表不同语义（山、水、天），AI 就画成山水画——"马良神笔"让公众第一次看到英伟达不只做 GPU，也做 AI 模型。用户反馈让他明白：自己影响的不只是读论文的研究员。
</div>

---
layout: two-cols
---

# 判别式 vs 生成式：生成即理解

- 判别式：AlexNet 这类模型能判断"这是 A 还是 B"，但没有生成能力
- 生成式：既能判别，又能**重建信号、描述世界**——"当你可以描述清楚的时候，大家可能认为你更加理解这个东西"
- 费曼的信念："If I cannot create, I cannot understand"
- 他的导师 Rama Chellappa 很早就相信：生成是理解的一部分——这决定了刘洺堉之后 20 年的方向

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gen-vs-disc.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 范式三连跳：从 GAN 到 Diffusion

- 团队为 GAN 的 scalability 投入大量实验（每个 GPU 放一个 discriminator、更稳的优化器），结论一致：**"GAN 不 scalable"**
- "不 scalable 的东西最后做不远"——2021 年起转向 diffusion："这个方法机器稳定"
- 与实习生的缘分：Tim Brooks（后来的 Sora）、李佳辉（现在 Meta）、Jeremy Bernstein（后来发明 muon optimizer）都曾在团队实习
- 每个方向都投入多年："suffering, little bit of greatness"——方法越变越简单

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./paradigm.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 研究员的三个顿悟时刻

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**数学之美 vs 现实**
早期痴迷漂亮的优化 bound：证明答案离最优解只差 4% 还是 20%。后来明白 AI 是拿来应用的——"我是越来越喜欢接近这个问题的本质，而不会被这些花巧的数学给迷惑"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**表达的价值**
早期 GAN 时期："我自己做一百分，但是我的解释只有十分，所以别人看到只有十分。"此后他更重视让普通人理解工作的重要性

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**协作的复杂度**
N 个人点对点沟通是 N²——不可扩展。做大模型之后他明白：要做出巨大贡献，必须把事情讲得明确，让大家目标一致

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

主持人小俊把这条成长线概括为三件事：**做应用、销售你的工作、团队协作**——这也解释了他为什么能成为英伟达第一个从研究员做到 VP 的人。

</div>

---
layout: two-cols
---

# 为什么英伟达要做研究？

- 基础设施做得好的定义，就是适合应用公司来用——"如果你自己不做这些应用，你更不能理解他们所需要的东西"
- 芯片与计算机架构的设计周期很长，不能等需求出现再改；要靠研究提前理解"什么是最重要的问题"
- 开源模型免费放出，是给 community 的信号：NVIDIA 会一代一代（1 → 2 → 2.5 → 3）一直投资、一直进步
- 这样合作伙伴才敢把资源投到"更重要的刀口"上

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nvidia-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Sora 情结：Tim Brooks 与"决心不够"

<div class="text-sm leading-relaxed mt-2">

- Tim Brooks 实习时就想做 video 生成——但当时团队只有 GAN 技术，没有条件
- 他毕业去了 OpenAI，做出了 Sora

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-red-400 bg-red-50 bg-opacity-30 leading-relaxed">

"Sora 这个 work 出来之后……我是感到非常的开心，但我又觉得我的决心实在是不够。还是不够，还是不够。"

</div>

<div class="mt-4 text-sm leading-relaxed">

- 不是遗憾，是复盘：每个研究员都想做出贡献——他反复问自己，是哪个判断导致"没有在正确的时机做出正确的事情"
- 行动：与 Tri Dao、NeMo 团队的 Bryan Catanzaro、Jim Fan 等一起联名写信给黄仁勋——必须加大投资。**这就是 Cosmos 项目的由来**

</div>

---

# Cosmos 的诞生：Sora 之后的那封信

<div class="text-sm leading-relaxed mt-2">

- **2024 年 3 月立项，完全在 Sora 之后**——"大家都在想说这个充满了决心，一定要做"
- 一群做生成式模型的学者讨论后联名写信给黄仁勋，他召集开会；"会议之前大家都达成共识了，那个会议只是更具象化到底怎么做、谁负责"
- 会上黄仁勋让大家各自想名字——他本想偷懒让黄仁勋直接定，被要求"你要去思考"。最后黄仁勋定名 **Cosmos**

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"你看我们叫 Cosmos……我们目标就不是产生这个 content，不是为了要做创作，就是为了解物理世界的问题。"

</div>

<div class="mt-4 text-sm opacity-70 leading-relaxed">
Sora 早期的定位是服务创作者；NVIDIA 选择另一条路——世界模型服务 Physical AI。这符合英伟达的 developer market 定位："自己不会经营一个社群网站，也不会去经营一个创作工具，这有点太 to C 了。"
</div>

---
layout: two-cols
---

# "你就做到 Cosmos 97"

<div class="mt-3 p-4 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"我们做完 Cosmos 1 的时候，问 Jensen 要不要继续往下做。然后 Jensen 跟我说，你就做到 Cosmos 97。"

</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**现在到第几代**："我现在做到 3 了而已，所以还有 94 代可以往下走。"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**为什么不是 100**："他数字是随口说说的，但是他的决心是展现在他这个数字上面。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cosmos-generations.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么是物理 AI？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**老龄化与 mobility**
"当人年纪大的时候就没法开车。但没法开车，整个人的生活品质就降低很多"——自动驾驶能让老人保有行动自由

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**危险与劳力的工作**
很多工作劳力密集且危险，机器人可以接手，改善人的生活

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**家务琐事**
"家里面总是一堆琐事，要收盘子啊，要整理这些，不见得是你在家里面最想做的事情"

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**为什么是大问题**："每个人都会老化，每个地方都缺乏劳动力，每个人都想提升更好的生活品质"——这是个刚需，Physical AI 会是下一个 revolution
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**为什么适合英伟达**：Jensen 喜欢"zero billion dollar business"——不赚钱可以，但成功后必须 influential、巨大。每年赚 1 亿美元对 NVIDIA 反而是分心
</div>

</div>

---
layout: two-cols
---

# 世界模型到底是什么？

- **预测**：模型描述世界，预测接下来发生什么
- **理解**：解释为什么发生——工厂产线为什么卡住？"可能是之前某工人忘记把什么东西打开"
- **重建**：重建三维世界——规划路线、在虚拟世界里游历
- 用途不同，模型形态不同——"终究我们是在同一个世界里面，这些模型就是经由不同的观察来描述同一件事情"
- 定义之争会像当年 AGI 一样无解；NVIDIA 的自我定位：**World Foundation Model**（世界基座模型）

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./worldmodel-three.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Cosmos 的定位：地基，不是对手

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**World Foundation Model**
"我们目标是建立一个 foundation，让大家都可以建出适合他们要用的世界模型"——不是每个做 Physical AI 的公司都有资源从零训一个世界模型

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**与投资对象各走各路**
李飞飞的 World Labs、Yann LeCun 的 AMI Labs，NVIDIA 都投资并合作——"每个公司看到的点都不太一样，想解的问题也不一样"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**不竞争**
"我不太想竞争了，我已经过那个时期，就是为了要毕业，把论文发出去，是我的算法要比别人好。"目标是帮生态里的公司成功

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**为什么敢说不竞争**：NVIDIA 的对手是"做整套 AI ecosystem 的公司"；在自家 GPU 生态里的公司成功，NVIDIA 就成功。"我不觉得是在竞争，我觉得是在帮助大家成功。"
</div>

---

# 从 22 个模型到一个：LV 的教训

<div class="text-sm leading-relaxed mt-2">

- Cosmos 1 时代，他算过账：predict、transfer、reason、policy……为了满足合作伙伴的不同需求，**可能需要 22 个模型**
- 跟黄仁勋开会汇报后，黄仁勋说 very good，然后讲了个零售业的故事：

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 leading-relaxed">

"Louis Vuitton 这家店呢，当它减少货品陈列的数量之后，反而 sales 是提升了。你不希望太多的东西困惑你的消费者，让他没办法做出决定。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**他深有体会**：自己都分不清该用 A 还是 B，"那其他人更加不清楚"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**执行成本**：每发一个模型都要维护、解决问题——"备多者力寡"，拖慢迭代速度
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**结论**：走向一个 Omni 世界模型——Cosmos 3，把 Reason、Predict、Transfer、Policy 合成一个
</div>

</div>

---
layout: two-cols
---

# Cosmos 3 的双塔架构

- 输入层同时接收**语言、视频、音频、动作**——四种信号描述同一个世界
- **离散塔**：从 Cosmos Reason 出发，负责理解（VLM 路线）
- **连续塔**：从 Predict、Transfer、Policy 出发，负责生成（扩散路线）
- 分两个塔是为了客户：post-training 时可以把梯度影响切开——只换生成分布，不会让理解能力流失
- 下一步："为什么要有两个 tower？一个 tower 就够了"——但要考虑使用者怎么接得住

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dual-tower.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Action：物理世界模型的第一公民

<div class="mt-4 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"物理世界的 agent 会 take action，会改变这个世界的状态。我们认为一个好的物理世界的 foundation model 也要把 action 当成 first-class citizen。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么是这三种信号**：language 带来人类知识、video 精准捕捉物理运作、action 让模型能改变世界——"我的目标不是去追求 AGI"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**MoE 规模创新**："我们是第一个把这个 Mixture of Experts scale 到这么大的模型，把 Audio、Video、Action 都合在一起"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**触觉暂时缺席**：touch sensor 还在快速发展，"需要灵巧手，需要数据"——这也是他这次来中国看到的最大变化之一
</div>

</div>

---

# 语言 vs 视觉：谁的智能更本质？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 两种担心
- **杨植麟（转述）**：语言是提升智能最重要的工具，担心视觉信号加入会把语言模型变成"傻的多模态"
- **另一派**：担心语言对视觉的污染——语言是人类后期的脚手架，视觉才是更原始的世界运作方式

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 刘洺堉的立场
- 这些信号带进来都有目的：语言让模型能与人类沟通，视频/音频描述物理世界，action 改变世界——"我的目标不是去追求 AGI"，目的不同，取舍就不同
- 遥远的古代没有语言，文明从观察世界变化开始——从纯视觉信号学出另一种智能，理论上也成立

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**互补的证据**：World Action Model 里，同时预测 video 能帮助 action 收敛；声音能帮视频生成定位接触时刻（"咔"一声就是接触点）；详尽的文字描述也能显著提升视频生成质量。
</div>

---

# 没有 secret sauce 的工程

<div class="mt-4 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"做大模型没有什么 secret sauce。做严格的实验，假设、实验、看到结果，累积知识，再做下一个实验，就一步一步往下走。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**对"创新不多"评价的回应**：Mixture of Experts、Policy Model 都有人提过，但"第一个把 MoE scale 到这么大、把 Audio/Video/Action 合在一起"，是细节工程堆出来的
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**像中医一样**："我常常觉得那个 deep learning 就很像中医一样"——试出来的；在试的过程中做详细实验记录，理解中间的法则
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**双塔会互相提升**：更贴近 Physical AI 的 reasoner 能帮助生成；把 generator 的梯度传回 reasoner，理论上也能帮 representation 学习——留待 3.1、3.2 验证
</div>

</div>

---
layout: two-cols
---

# 泛化的三件套：数据、起点、环境

- 任何 AI 的核心问题都是泛化：在训练数据之外也表现好
- **更好的数据**：生成真实世界没采集到的数据
- **更好的起点**：世界模型理解世界如何运作，其 representation 是 policy 的好 backbone
- **更好的环境**：像 Matrix 一样可交互的环境——最具有挑战性，"大家都希望能做出这个矩阵，但还没发生"
- 短期内真正管用的是前两者：更好的数据 + 更好的起点

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-helps.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 为机器人构建「黑客帝国」

- 个人主页上的愿景：为机器人构建一个黑客帝国——用世界模型帮具身智能达到泛化
- 逻辑：人在物理世界里靠实验学习；与真实环境交互昂贵、积累经验慢
- 虚拟环境可以同时产生多个、"真实无比"，交互后给出信号——学习得非常快
- 终局："最接近的就是你有能力随时可以做出一个黑客帝国的矩阵"
- 如果机器人想挣脱 Matrix？"pain 跟 suffering 是驱动人进步的关键……不是很确定这些 silicon 做成的 intelligence 是不是有同样的 pain 跟 suffering"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./matrix-vision.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据之难：人手与 ego-centric

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么难**
Physical AI 每个形体都不一样；没有 physical setup 就没法采集数据。navigation 数据相对通用，manipulation 数据最复杂

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**人手趋势**
"人类的世界是建出来给人类用的"，工具都适合人手操作——"人手适合收集数据，然后这世界是大部分建给人手的"，所以大家都往人手方向走

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Cosmos 2 的应对**
把 ego-centric 数据加进训练：第一人称视角 + 人手操作物体。"我们的目标是帮助大家可以做出很好的机器人，所以我们要找最容易互通的东西"

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**这次来中国看到的变化**："越来越多的关于手，灵巧手……进展非常的快。"——灵巧手是 Physical AI 下一个重点能力。
</div>

---

# 评测之难：第三步才是关键

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**第一步：Benchmark**
固定的 dataset 上量测质量——世界模型和大语言模型都在追求更好的评测方法

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**第二步：Arena style**
A 跟 B 比，看谁比较好——通用的对比评测

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**第三步：跟有痛点的人一起解问题**
"在 Physical AI 里面第三个特别重要"——coding 大家都在解同一个问题，但 Physical AI 每个人要解的问题不一样；这才是给模型发展指引方向的重要一步

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**泛化在 Physical AI 里的定义**："怎样从这个有限的信号里面学到需要的操作，然后应用在一个没有看过的场景里面"——observation 到 action 的配对泛化。sim-to-real gap 本质上也是一个泛化问题。
</div>

---

# Physical AI 的 ChatGPT moment

<div class="mt-2 p-5 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 leading-relaxed">

"简单的人示范一下怎么要怎么操作，这个机器人就可以就地学会这东西……我就觉得说，yeah, that's the ChatGPT moment for physical AI。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**GPT moment vs ChatGPT moment**：前者证明 scale 有效，后者让大家看到它对生活的改变——Physical AI 需要的是后者
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**时机**："也许今年，也许明年，我不知道，但是我觉得它必然会发生。"资金、人才、Digital AI 的成熟都在收敛
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**五年之约**："希望五年后……我们可以清楚地讲出来 ChatGPT moment 是什么时候发生的，是在哪里发生"
</div>

</div>

---

# 人形机器人会赢吗？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**优势：人类数据**
"人形机器人它的优势就是可以利用大量的这个人的数据"来获得学习素材、提升效果

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**代价：复杂度**
越像人（有腿有手），复杂度越高。很多公司做轮式上半身人形——"半身像人"，也能解决很多问题

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**终局判断**
"最终肯定就是全人形是最适合各式各样的操作，因为这个是人类的环境"——但最终还是要看营运成本、经济效益，这超出他的专长

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**拐点预测**：访谈中提到的谭杰老师预测 2035-2036 年可能是人形机器人成为主流的拐点；刘洺堉说"我希望早一点，但我不确定"。他的角色不是下注某种形态，而是帮所有 physical AI builder 成功。
</div>

---
layout: two-cols
---

# 开源世界模型：为什么把细节都讲出来

<div class="mt-3 text-sm leading-relaxed space-y-3">

- 这几年 Frontier Lab 走向闭源；NVIDIA 走相反的路：**开源模型、训练框架、部分 synthetic data**——目标就是 enable 整个 community
- **DeepSeek 的影响**："DeepSeek 它的工作对整个 AI 的影响非常的深远"——把细节讲出来影响整个领域，从影响的角度看两者相通
- **但目标不同**："我们是希望帮助我们的使用者成功"——帮 Physical AI 降临世界快一点
- **不怕被超越**："你做比我们好，我们也觉得这是一件好事"——因为那也是开源、也是帮助整个生态

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 备多者力寡：不做全能模型

<div class="mt-4 p-4 text-lg italic border-l-4 border-red-400 bg-red-50 bg-opacity-30 leading-relaxed">

"我还是喜欢讲这个孙子兵法讲的备多者力寡。……如果你什么都不愿意放弃的话，你就会打得很辛苦。我觉得策略往往就是关乎着你决定你可以放弃什么东西。"

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**反问**："你需要你的机器人会解奥数问题吗？你需要你的机器人会解这个 coding 的问题吗？"——更该关心它能不能把工厂组装、家庭卫生做好
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**架构直觉**："纵观人类的历史，答案就是应该是不一样的"——耕田的工具和纺织的工具不一样；Physical AI 的架构未必和 agent 模型相同
</div>

</div>

<div class="mt-4 text-sm opacity-70 leading-relaxed">
他还提醒：每家公司都要训自己的大模型吗？"如果是 commodity，你每家公司要建自己的电厂吗？"——早期电厂稀缺时工厂自己盖，现在不需要了。数据大家都有，算力有钱就买得到——关键是你有没有必要做。
</div>

---
layout: two-cols
---

# 290 人团队的管理张力

- 目标一致但没人能决定 → 进展缓慢，只有少数决策者拍板
- 各自自主但目标发散 → 架构分裂、赛马
- 解法：把愿景画清楚——"像罚球之前，先想象这个球空心入网"；信息透明化，让每个人有足够资讯做正确决定；提供容错空间——害怕做错决定的人，不会做决定
- 会议很多：跟主要 leader 每周超过十次会；关键是"每个会议都更加 engaging"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./org-balance.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不裁员的英伟达

<div class="text-sm leading-relaxed mt-2">

- 疫情期间经济不好，很多公司裁员。NVIDIA 公司大会上的决定是：**裁掉 travel**——员工不用出差了，全部改线上；讨论要不要砍掉 Slack（"反正我们有 email"）；研究两个云供应商是不是可以取消一个

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**从未裁员**："我在英伟达的时间里面，就是我没有听到任何裁员的消息。"也没有末位淘汰
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**代价**：技术转型时，老员工重新学习需要时间，转型会比较慢
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**收益**：员工有认同感和安全感，敢讲真话、愿意团结合作——"在一个全部都强出头的地方，反而不容易促成团结合作"
</div>

</div>

---

# NVIDIA 的管理密码：Top 5 与 Mission is the boss

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Top 5 邮件**
每位员工写自己最重要的五件事——"如果两个团队在做一模一样的东西，那个 Top 5 email 就会自然显现出来"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Mission is the boss**
"我们常常讲 mission is the boss"——不是你的老板是老板。组织像有机体，技能相关的人自动 align；Cosmos 就是例子：不属于团队的人也来支持

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**黄仁勋的 prioritization**
他每天读大量 email，强迫自己快速判断什么重要——"当你事情很多的时候……你决定哪些事情很重要，是很重要的一件事情"

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**不赛马**："你 take 这个 mission，我们就相信你。但我们一起给你很高的 bar"——"一直让你接受 pain and suffering，torture you to greatness"
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**信息透明**："NVIDIA 是一个相对很透明的组织架构。苹果可能是反例"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**computer science 的懒惰哲学**："不用算的东西不要算。可以晚点算的东西晚点算"——知道什么不要算，人生运用就更有效率
</div>

</div>

---

# 六边形战士黄仁勋

<div class="mt-4 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"我们叫他六边形战士……我们有时候开会，他可以走到很深去研究这个 register，这个 computer architecture 的 register，这个非常细的细节。同时间又可以讲到……又可以教大家怎么做 marketing。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**热爱学习**：早期常传论文给刘洺堉看，让他写 summary——"当初也不懂 computer graphics，他敢踏入做 GPU"；后来也不懂 deep learning，一样踏进去学
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**First principle 决策**：把事情的本质理清，不受外界信号干扰——早期敢 all-in deep learning、敢 all-in CUDA
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**面面俱到**：产品定价、客户关系，"he gives everything he has to help the company be successful"
</div>

</div>

---

# "Are you a crybaby?"

<div class="mt-4 p-5 text-xl italic border-l-4 border-red-400 bg-red-50 bg-opacity-30 leading-relaxed">

一次会议上比较两个方案，刘洺堉解释自己落后是因为"他们用的 setting 是一个不公平的 setting"。黄仁勋回了他一句：**"Are you a crybaby?"**

</div>

<div class="mt-4 text-sm leading-relaxed">

- 实际上没有什么公平不公平：你的目标是解决问题，就该去做解决这个问题所需要的条件；没有条件，就想办法拿到
- 就像写论文常说的"我们的 setting 不一样，不能直接比"——但对公司而言，目标才是唯一的标准

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic leading-relaxed">
"那句话让我印象很深刻，就是我更加严格要求自己：找理由是没用的……我后来就不再找理由了。"
</div>

---

# 马拉松战：pace your steps

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"他擅长打马拉松战。有些东西即使很重要，他会叫你 pace，pace your steps，就是让你不要急。"
<div class="text-xs opacity-60 mt-1 not-italic">— 论黄仁勋的节奏纪律</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"他每天都觉得公司只剩下 30 天的现金流，30 天后就要破产。然后现在还这么说。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2026 年的今天依然如此，是要求自己做出对公司最正确的决定</div>
</div>

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
对 Cosmos 也一样：Sora 之前说服黄仁勋投资很难，"看到 Sora 之后就不难了"——时机没到之前，他宁愿让你慢一点。立项之后则不再犹豫："你就做到 Cosmos 97。"
</div>

---

# Zero billion dollar business

<div class="mt-2 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"什么叫 zero billion dollar business？就是现在不是个 business，但以后成功后会变 billion。"

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Jensen 的偏好**："你可以不赚钱，但当这个生意成功的时候必须是很 influential 的，是很巨大的。"如果现在已经有人在做，可能就不值得做
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**CUDA 的先例**："因为创了 CUDA，我们整个 GPU 的价格都比别人高。同样的 FLOPS 我们都比别人高，因为我们要支援这个 programmability"——初期等于是赔本在卖
</div>

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**造市场的逻辑**："我们的心态不是想说把别人给杀死。我们的心态是我们要怎么去造市场。CUDA 就是造市场。"——CUDA 造出了 AI 市场；Physical AI 是下一个：家家户户若买两三个机器人，算力需求会大幅成长。大家共利，把原本是 nothing 的市场建出来。
</div>

---

# 模型能力会收敛，竞争靠整合

<div class="mt-4 p-4 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 leading-relaxed">

"我觉得模型的能力慢慢就会统一。靠模型自己不会是区分，一定要靠一些其他的东西组织在一起。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**历史规律**：从来没有一家公司掌握所有科技、别人追不上——人员流动，know-how 自然扩散。"我不觉得 AI 会是一个例外"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**软件业的先例**：软件刚出现时只有少数公司会写，现在人人会写；活下来的软件公司都有自己的区分方式——"没有理由模型会是不一样的"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**对创业者的提醒**：跟 OpenAI、Anthropic 做一样的事很危险——要找他们"没办法去解"的痛点，不是不想解，是 justify 不了
</div>

</div>

<div class="mt-3 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**同质化的苦**："同质化竞争是很辛苦的一件事情"——但理解大家可能是被迫的：没人希望核心科技掌握在别人手里。Anthropic 的例子证明专注的价值：早期被认为落后 OpenAI，但最早相信 coding、集中式投资，走出了自己的路。
</div>

---

# 你不需要击败所有对手

<div class="mt-4 p-4 text-lg italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 leading-relaxed">

"但我的目标并不是击败对手。我的目标是做出好成绩，提出更好的 foundation，让大家可以动得更快。"

</div>

<div class="mt-4 text-sm leading-relaxed">

- 研究员的出厂设定："你的论文要让 reviewer 承认 state of the art，代表你要击败所有的人"——他年轻时也是"总觉得我的算法最好"的 highly competitive individual
- 转变：看到伙伴说"用了你的模型之后我效率提升了很多"，就很开心——贡献不一定要通过击败别人产生

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不是对手，是伙伴**："我不喜欢把他们当成是对手，喜欢把他们当成是伙伴。"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**不是 low ego，是 confidence**："我对自己做东西我要求很高……但我的目标并不是击败对手。"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**不是战争**："什么叫战争呢？就是我打算把别人杀死。"——他没这个打算
</div>

</div>

---

# number one 的能力，最大的贡献

<div class="mt-6 p-5 text-2xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed text-center">

"我是希望具备 number one 的能力，但是做出对这个世界贡献最大的事情。"

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么不做闭源第一**：number one 模型只给少数人用，权力过度集中在少数人手中，"产生一些不平衡的状态，我觉得不见得是一件对的事情"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**外部指标都不重要了**："你论文数总是有人有更多的论文，那你比 citation 数总是有人有更多的 citation，你比钱总是有人比你更有钱"——年轻时觉得它们重要，现在关心的是"帮助人够不够多"
</div>

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm italic leading-relaxed">
"人在那边就走一遭嘛，对吧？然后你留下来就是影响。"
</div>

---

# 中国 AI 观察

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**模型公司都做得很好**：DeepSeek、千问、豆包、MiniMax、Moonshot/Kimi、MiMo、混元、智谱——"非常的 impressive"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**知识的扩散**：美国 frontier lab 很少招实习生，know-how 留在内部；中国公司大量招实习生，把 know-how 传递出去——"对人类整个知识扩增，就是 diffusion"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**机器人本体**：美国做本体的公司很少，"就 Tesla 跟 Figure AI"；中国很多家——强大制造业支撑快速硬件迭代与软硬件垂直整合
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**每年来中国 2-3 次**："在中国这里，physical AI 的发展是非常的茂盛，很多公司、很多研究员在做出重大的突破"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**硅谷没有被 LLM 催眠**："很难想象一个人就这么聪明的人一辈子就只做 LLM"——当一个东西被充分理解后，大家会找到新的突破点
</div>

</div>

---
layout: two-cols
---

# 功夫：控制全身

- 18 岁起练中国功夫，起点是金庸小说——"我学武术的目标不是为了打架……后来变成一种对自己的追求"
- 师承：神枪李书文（沧州武术家代表）→ 刘云樵 → 徐纪 → 刘洺堉；八极拳、劈挂掌一脉
- 一拳的最大力量来自全身协调："把力量从脚一路灌到的手，这么长的路径……一瞬间发生"
- 与科研相通：不断练习、不断自我修改——跟他"一直自我检讨"的性格互相塑造

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kungfu-power.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 凌晨四点的刘洺堉

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**作息**：大概 4-5 点起床，10 点左右入睡；早上运动时间比较连续，9-10 点到公司——"整个产业的迭代速度，所以生活步调都变快了……让自己更加高效"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**晨课**：练武——蹲桩、打拳，一个人就能做；新嗜好是冰水浴：像运动员激烈运动后跳进冰水池，帮助身体修复
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**压力是真实的**："每天挥洒这些 GPU 资源、挥洒这些年轻人的时间，然后做出的成果没有达到你最喜欢的结果……无形上都是一个压力"
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**温柔与严厉并存**：对外谦和，对内"恨铁不成钢"——看到年轻研究员差一点火候，"忍不住就会提出来"。听者若觉得是帮助，会感激；若觉得被挑剔，会觉得他凶
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**快问快答**：最喜欢的食物——牛肉面；最喜欢的地点——湾区（"天气实在太舒服了"）；书——金庸小说；游戏——上一次打游戏是二十几年前的事了
</div>

</div>

---

# 给年轻研究员的建议

<div class="mt-4 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"不要紧张，对自己有信心，然后冷静下来，看清楚什么地方是值得你投入精力。不要被这些大家的这个宣传觉得好像自己路越走越窄。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Physical AI 是蓝海**："这是一个好时机，就是各种机会"——AI 的进步也会带来材料、药物等各行业的突破
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**data 优先于算法**："如果一个问题可以用 data 解，你就用 data 解就好，不用开发算法。因为 data 简单多了。"算法不好也能靠好 data 迭代变好
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**迭代速度大于一切**："迭代速度是重要的。那迭代速度就是要靠强大的 infrastructure 来支持"——遵循严格的控制实验法，算法一定会越来越好
</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**别神化模型**："我把它当成中医啦，就是一个 black box……关键是你拿它干什么。"——2026 年的 IPO 潮值得祝贺，但"科技不会停在这里"；一百年前强盛的公司和现在完全不一样。
</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"经济的茂盛程度是根据钱多快从一个人的口袋流到另外的口袋。那研究的茂盛程度应该是根据 idea 多快从一个人的脑袋流到另外一个人的脑袋去。"
<div class="text-xs opacity-60 mt-1 not-italic">— 论研究的本质与实习生文化</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Are you a crybaby?"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄仁勋，在刘洺堉抱怨比较 setting 不公平的会上；此后他"不再找理由"</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"我自己做一百分，但是我的解释只有十分，所以别人看到只有十分。"
<div class="text-xs opacity-60 mt-1 not-italic">— 早期 GAN 时期学到的教训：表达与做事同样重要</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我是希望具备 number one 的能力，但是做出对这个世界贡献最大的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 他的竞争哲学</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"如果一个问题可以用 data 解，你就用 data 解就好，不用开发算法。"
<div class="text-xs opacity-60 mt-1 not-italic">— 给研究者的方法论</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于黄仁勋、NVIDIA 与世界的另几句：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"他每天都觉得公司只剩下 30 天的现金流，30 天后就要破产。然后现在还这么说。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄仁勋的危机感，2026 年依旧</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我们的心态不是想说把别人给杀死。我们的心态是我们要怎么去造市场。CUDA 就是造市场。"
<div class="text-xs opacity-60 mt-1 not-italic">— NVIDIA 的生态哲学：共利而非存量竞争</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Suffering, little bit of greatness."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈一次次范式切换与研究的苦</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"不要紧张，对自己有信心，然后冷静下来，看清楚什么地方是值得你投入精力。"
<div class="text-xs opacity-60 mt-1 not-italic">— 给年轻研究员的建议</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"那其实最接近的就是你有能力随时可以做出一个黑客帝国的矩阵。"
<div class="text-xs opacity-60 mt-1 not-italic">— 世界模型的终局想象：接近这个世界</div>
</div>

</div>

---
layout: end
---

# 你留下来就是影响

<div class="text-lg opacity-70 mt-6">
刘洺堉 · 英伟达研究副总裁 · Cosmos Lab
</div>

<div class="text-sm opacity-50 mt-8">
小宇宙「语言及世界工作室」 · 2026 年 8 月 · 上海
</div>
