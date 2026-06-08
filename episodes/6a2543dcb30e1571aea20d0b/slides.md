---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '144. 对阳萌的4小时访谈：消费电子死与生、第三类公司、端侧模型、产品方法、游戏模式'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 144. 对阳萌的4小时访谈

## 消费电子死与生、第三类公司、端侧模型、产品方法、游戏模式

<div class="mt-8 text-sm opacity-60">
安克创新创始人兼CEO 阳萌 × 商业访谈录 小群
</div>

<div class="mt-4 text-xs opacity-40">
2026年6月 · 4小时深度对谈
</div>

---
layout: default
---

# 为什么这期值得你花时间

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从充电宝到存算芯片</strong>
一家消费电子公司为什么要做芯片？阳萌从第一性原理讲起：冯诺依曼架构已到极限
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>"第三类公司"的理论体系</strong>
阳萌用15年经验提炼出一套完整的公司分类学——从品类深海浅海到国王vs总统的治理模式
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>从五系到七系的艰难转型</strong>
一家做了11年"品质好、微创新"的公司，如何自我革命走向"极致创新"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AI时代的组织变革实战</strong>
6000人的消费电子公司，全员Token无限、日均1500亿Token内部使用——真实经验和踩坑
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>端侧模型的硬件哲学</strong>
为什么未来的AI不是一个大一统的超级大脑，而是分层部署的分布式神经网络
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>产品方法论的底层逻辑</strong>
用户细分、价值创造、价值链长度——阳萌的抽象思维如何指导一个600亿市值公司
</div>

</div>

---
layout: two-cols
---

# 阳萌其人：从北大到安克

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**教育轨迹**

- 长沙雅礼中学 → 北京大学计算机系
- UT Austin 博士（肄业），导师 Raymond Mooney（ICML 主席）
- 研究方向：SVM，但觉得"2万篇文章数据集太小，一个点两个点的差异感受不到实际意义"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Google 五年**

- 2005 年实习，被"40亿网页上做算法"的实际价值感吸引，决定留 Google
- 与 Jeff Dean 交过 change list，获 Google Founder's Award
- 从工程师成长为 Tech Lead，"偏抽象性思考，偏架构性思考"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**2011年创业**

- 与赵东平（ESFJ）组成"地球两极"般互补的搭档
- 母亲是天使投资人（给了300万，后续又把钱收回去了）
- INTP 型创始人："特别逻辑框架思考，特别理性"

</div>

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
layout: default
---

# "辍学是一个意外，不是一个深思熟虑的选择"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**从象牙塔到真实价值**

阳萌在UT Austin做机器学习研究时，面对的是"两万篇路透社文章"的小数据集。2005年去Google实习后，一下子蹦到了"40亿网页上做算法"，每天几亿的搜索量让他感受到真实的impact。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

"当你今天做过很实际的、产生价值的东西之后，再回到象牙塔里做那个牛角尖的、好像不知道价值在哪里的事情，就有点不太愿意了。"

</div>

</div>

</div>

<div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**SVM时代的终结**

"97、98年SVM被发明出来，极其火热。但到我读博士的03、04年，这片矿你能看得见的地方也挖差不多了。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**不是那个"创造世界的人"**

阳萌承认自己不是那种"有能力发明一个全新架构或框架、打开全新方向的人"——那种人"可能每五年、十年才会出一个大牛"。

但他找到了自己的位置："我一定需要创造特别实在的价值。"

</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 安克的创业原点：电子商务上的产品公司

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**发现蓝海**

阳萌03年到美国后一直在网上购物，到08-09年发现几乎所有东西都在亚马逊上买——但"很多东西它的选择并不是最好的"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**从电商到产品**

最初叫"海翼电商"，从中国找工厂定制产品卖到美国。很快发现："卖不是困难的事情，好的产品是那个最难的事情。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**第一个产品**

一款贴在手机背后、带内置线的超薄充电宝——"十年以后你才看到整个市场朝那个方向走"。但因为营销能力弱，"酒好也怕巷子深"，并没有特别爆。

第一个真正的爆品是2013年的"口红充电宝"，用一颗圆柱电芯做到口红大小，生命周期卖了几百万台。

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
layout: default
---

# 赵东平：地球另一极的搭档

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**完全相反的 MBTI**

阳萌是 INTP——"特别逻辑框架思考，特别理性，特别P"。赵东平是 ESFJ——"完全相反，就像地球的两极，南极和北极。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**认识的契机**

阳萌回国创业时，Google同事认为做海外业务的都应该买Google广告，就把他介绍给当时Google中国区销售团队的负责人赵东平。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**15年后的反思**

"有一个人可以安全地看着你的背面，可以把你不好的那一面看住的时候，其实你是更大胆地往你擅长的那一边走了。"

风格差异没有缩小，反而更往两边走——但这正是健康的互补。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**公司里的玩笑**

"我管产品相关的事情，东平管所有我不管的事情。"

两人在开放式工位并排坐了十几年——"我们都没有自己的办公室"。

"这公司如果没有东平的话应该已经死了。"

</div>

</div>

</div>

---
layout: two-cols
---

# 一三五七：消费者的四层金字塔

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**一系**：只愿意花最少的钱买基本能用的东西
例：蜜雪冰城（6元奶茶）、QQ（4万的车）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**三系**：要最好的性价比
例：一点点（10-12元奶茶）、比亚迪（10万的车）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**五系**：稳定的性能+好的品质+愿意付一定溢价
例：沪上阿姨（15-16元奶茶）、大众/丰田（15-16万的车）

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**七系**：最贵最好的东西
例：喜茶（20+元奶茶）、BBA（40万的均价车）

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"很多时候它们用的是同一款发动机——装在比亚迪里卖十万，装在大众里卖十六七万，是不是都有人买？"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 安克的前十年：一个"五系"公司

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"海外小米"的标签**

很多人说安克是"海外的小米"，一个三系性价比品牌。但真正在海外买安克的人知道，安克的东西并不便宜——"往往比市面上的均价贵20%-30%。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**品质倒逼机制**

安克一直不刷评不刷单。要在亚马逊上自然做到4.5星，必须把产品品质打磨到极致——"你在倒逼你的产品经理和研发团队把品质做到特别好。"

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**顺了十一年**

从2011年到2022年，不缺钱、产品顺、2020年上市，"一直觉得能够开拓和做得更好"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**潜藏的危机**

2016年去湖畔商学院，被问"你的品类会不会变成千亿品类？"阳萌意识到：充电宝品类不但不会变千亿，而且"大概率过几年就死了"。

"消费电子是一个速生速死的行业。" MP3、磁带机、CD机——出现到消失不过十年。

</div>

</div>

</div>

---
layout: two-cols
---

# 浅海与深海：德州扑克的牌桌

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**深海（超级品类）**

- 手机：5000亿美金
- PC：2000亿美金
- 电视：1000亿美金
- 平板：600亿美金

盲注在5亿以上。带50亿上桌，打3-5局牌就没有了。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**浅海（中小品类）**

- 充电宝：50亿美金
- 充电线：50亿美金
- 耳机：200-300亿美金
- 消费级无人机：不到50亿美金

盲注在几百万到几千万。整场输赢在几亿到几十亿。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

"浅不代表简单——浅代表了规模小。市场规模决定了饱和投入。"

</div>

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
layout: default
---

# 2020：战略觉醒与组织变革

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**前十年凭直觉**：阳萌承认作为CEO，前十年"没有特别认真系统性地拉着公司人一起思考"——品类多了就多了，"我也凭着直觉在往前走，同事们也凭着直觉在往前走。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2020年战略复盘**

- 做了十几个中小品类，以五系为主
- 极少数七系（安防）、还有几个三系
- "相对发散，不聚焦，没有特别清楚自己要去哪"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**组织变革启动**

- 从事业部制走向产品线+商业线
- 让leader们自己去做98%甚至更多决策
- "把公司运行在一个系统里边，而不是少数人做决策"

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"2020年公司是几个事业部，事业部负责人做产品决策。我们就在事业部下面长出产品线的组织，在销售区域里长出商业线的组织——把公司划分成更清楚的决策单元，赋予leader们更大的决策权限。"

</div>

</div>

---
layout: default
---

# 2022年的绝望：为什么20条产品线打不赢？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**系统性失败**

当时建出来的产品线，在真实商业竞争中"竞争不过各个行业的独角兽公司"。公司一度弥漫着一股压抑甚至绝望的情绪。

"凭什么公司的一个产品线能够打得过外面的一家独角兽？"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不只是流程问题**

最初以为给产品线配一套流程方法（阵法）就能赢。后来发现：如果公司没有清楚的使命、愿景和价值观，再好的流程方法也打不赢仗。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**最关键的一步**

22年收缩，品类更聚焦。然后做两件事：
1. **往下挖**：成立前沿实验室，做深度技术创新
2. **往上提**：重新定义使命、愿景、价值观

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

"2023年成立了一个前沿实验室去做深度技术——大家看到发布的存算一体芯片就是过去几年的成果之一。"

</div>

</div>

</div>

---
layout: two-cols
---

# 创造者的三大支柱

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**第一性：怎么想事**

从用户价值出发，从物理学的本质拆解问题，不去从"别人怎么做"或"过去怎么做"开始思考。找到那个"缺"的方向——通常没人做过。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**求极致：怎么做事**

敢不敢做？能不能顶着巨大风险，想尽一切办法做出来？"第一性的思考加上求极致的执行"——缺一不可。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**共成长：怎么自处**

- 长期主义：能看见未来局面，能忍受为长期利益放弃短期利益
- 自我觉察：看见问题中自己的那一部分
- 自我进化：通过改变自己来解决问题

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"这个框架是蛮稳定的——它可被用来描述全世界的创造者。如果你要创造一个全新的价值，你一定要有第一性的思考，一定要求极致的执行，过程中间要能够长期主义、自我觉察、自我进化。"

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
layout: default
---

# 从五系到七系：不只是产品升级，而是心智革命

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**五系的做法**：把品质做好 + 在产品上做改良和微创新。"超越昨天的自己，超越最好的同行"——这两级是在确定性的道路上往前走。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**七系的做法**：做极致创新。"超越消费者最本质的需求"——需要脱离现有的轨道，走向一条完全不同的路。"这条路可能没有人走，甚至有人走还死在路上了。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**最难的不是战略，是心智**

"几千个人的心智都在上一个战略里。今天你的新战略需要大家走上一条完全不同的道路——这几千个人怎么过去，是我们过去几年一直在探索的很痛苦的事情。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**已经开始结果**

充电Prime产品线均价超过100美金——站到了一个稳定的七系位置。耳机品类对标AirPods Pro，花几年时间做到"一样好甚至更好"。

</div>

</div>

---
layout: default
---

# 存算一体芯片：从冯诺依曼到类脑架构

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**起点：一个用户痛点**

最好耳机在嘈杂环境下通话，背景噪音滤不掉，滤掉了人声就残破不自然。要解决这个问题必须用百万级参数的大模型——但现有耳机芯片跑不动。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**冯诺依曼架构的困局**

"冯诺依曼架构就是一句话：存和算分离。"每一秒每一次模型推理，都需要把所有参数从内存搬到NPU。这个搬运过程本身就是最大的功耗来源。模型参数越大，搬运越频繁，功耗就越失控。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**类脑的解法：存算一体**

"人脑的存储和计算都在同一个神经元里——你的脑子在计算时不搬运任何参数。"如果能像人脑一样，数据和计算在同一个地方，功耗就会显著下降。这就是存算一体的核心思想。

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"你把你所有的知识存在你的左脑，分治法时每次只搬一小部分去右脑计算是合理的。但端到端模型时代，你需要把整个左脑搬到右脑——这就不合理了。人脑是怎么做的？存储和计算是一体的。"

</div>

</div>

---
layout: two-cols
---

# 打破稳定的三角形

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**计算机前80年的稳定三角**

- **解问题的方法**：分治法（把大问题拆成子问题再拆）
- **产生的软件**：程序和数据（一段一段的代码）
- **硬件架构**：冯诺依曼架构（存算分离）

三个东西互相锁定，构成一个极其稳定的三角形。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**端到端时代必须打破**

- **解问题的方法**：不再是分治法，而是数据学习+强化学习的端到端
- **产生的软件**：不再是几十万行代码，而是神经网络（几百万到几十亿参数）
- **硬件架构**：从存算分离走向存算一体

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

"这个三角形构成了前80年计算机的基础。但端到端的时代，它必须被打破。"

</div>

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
layout: default
---

# 做芯片：不是战略决策，是价值观驱动

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**从声学算法到芯片**

2021年建立声学算法团队，最初用小模型解降噪问题。2023年看到ChatGPT后坚定相信端到端路线。"未来不应该再用分治法解问题——应该从数据里学，再到现实里强化。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**做芯片没有反复研讨**

"这个事情在公司层面并没有经过大量的反复研讨——因为你的价值观变了，你的使命愿景变了之后，你就觉得这就是你应该做的事情。"

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**与最强的公司合作定制**

团队在市场上找到领域里最强的一家公司，一起定制开发。2023年8月启动项目，到2026年5月产品上市。"历史上没有这样的东西，模型到底什么样子、对芯片有什么要求、工具链怎么搭——很多未知风险。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**芯片只给自己用**

"这颗芯片完全是我们的模型定制的——它的operators、模型结构都是适配我们的模型的。如果我给其他人用，意味着我也得把模型给别人。"

像苹果的A系列/M系列、华为的麒麟系列——最好的芯片都只用在自己的硬件里。

</div>

</div>

</div>

---
layout: default
---

# 分层智能：未来的AI不是一个大一统大脑

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**以人为喻的三层模型**

- **大脑**（万亿级参数）：在云端解决最困难的问题
- **小脑**（数十亿到数百亿参数）：在端侧高效实时解决现场问题
- **感知与控制器官**（百万到千万参数）：在硬件上运行，类似视神经、耳神经、肌肉神经

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**你的眼睛会把所有参数直接传给大脑吗？**

不会。眼睛有一套视神经先处理光信号，只把少量信号传给大脑。同理，大脑不会直接控制每一颗肌肉细胞的运动——肌肉上有自己的神经细胞控制系统。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**第一派观点**：直接把所有传感器原始数据导入大模型处理。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**阳萌的看法**：不同器官的频率和复杂度完全不同。更可能的是——不同感知和控制器官各自由独立的神经网络控制，参数规模差异极大。这些小型网络应该运行在独立硬件上。

</div>

</div>

</div>

---
layout: default
---

# 产品进化的三个阶段

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-gray-50 border-2 border-gray-200 text-center">

### 第一阶段：不可调节

<div class="text-xs mt-2 opacity-70">
一个传统的拖把——上面没有任何可调节的东西。功能是固定的。
</div>

<div class="mt-3 text-xs">
例：普通木凳
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">

### 第二阶段：可调节

<div class="text-xs mt-2 opacity-70">
长了十几个按钮。看似"智能"，实际上只是"可调节"。你不知道怎么调，也不怎么想调。
</div>

<div class="mt-3 text-xs">
例：人体工学椅（十几个调节点）、传统智能家居
</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">

### 第三阶段：自主调节

<div class="text-xs mt-2 opacity-70">
能感知你的状态，自主做决策和调整。感知你在玩游戏就后仰，感知你在开会就前倾。
</div>

<div class="mt-3 text-xs">
例：真正智能的椅子、自动感知的微波炉
</div>

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-4 text-sm">

"今天所谓的智能家居，本质上叫'可调节和预设家居'——它并不是智能的。真正智能的产品需要三个能力：**感知、规划、控制**。这恰好是自动驾驶的三步——现在这个能力开始外溢到所有消费产品上。"

</div>

---
layout: default
---

# 具身机器人：三个阶段的布局

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**第一阶段（在做）**

二维/二点五维平面机器人

扫地机器人、割草机器人、泳池机器人

已有业务，持续迭代

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**第二阶段（在开发）**

三维空间移动与交互

**机器狗**——"看家狗"产品

技术栈（硬件+模型）已比较收敛，进入产品化阶段

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**第三阶段（在预研）**

皇冠明珠：操作机器人

人形机器人

技术栈完全不收敛——"大脑什么状态不确定，腰关节长什么样也没有共识"

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**为什么从机器狗开始？** 安克做安防系统，在几百万户家庭里持续面对一个问题：有人闯入时，只能发现不能驱离。"当有一条看家狗能被安防系统联动——不只是发现闯入者，而是能驱离闯入者——这就实现了真正的用户价值闭环。"

用户研究也验证了需求："那些七系的用户，相当比例愿意花相当的金额买这样一条家庭的看家狗。"

</div>

</div>

---
layout: default
---

# 深海会进吗？——人形机器人 & 智能眼镜

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**智能眼镜：不进**

智能眼镜前面有三波大厂在竞争：
1. 所有手机厂商
2. 所有互联网大厂
3. 所有模型公司

三波人都想抢那个"与人交互的入口"。任何公司进这个品类都必须回答："怎么能打得过前面这三类大厂？"

"所以我们今天是不会到智能眼镜那个品类去的。"

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**人形机器人：有条件进**

阳萌的态度：这不是"必须要做的事"，而是"时机成熟+有能力+有合适的leader时愿意挑战的事"。

类比华为——运营商业务是一片浅海拼起来的，手机业务是一个巨大的深海。安克可能也会如此。做得好可能需要spin off，像华为手机业务一样独立运行。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

"对我们一类做浅海的公司来说，深海不是我百分之百必须要做的事——而是当时机成熟、我有能力、也有合适的leader的时候，我们愿意挑战的事。"

</div>

</div>

</div>

---
layout: default
---

# 消费电子护城河的三层金字塔

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**第一层：领先的技术**

"在这个阶段只有你能做出来，别人做不出来——这肯定是一个有效的护城河。"

但技术会遇到边际效应递减。人的感知能力有上限——苹果Retina屏之后的像素进步人眼已分辨不出。充电器做到卡片大小再缩小一倍也没有意义。"放在足够长的时间里，超额的技术优势一定会被抹平。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**第二层：品牌即信任**

"消费者可能需要很多次才能建立起对你品牌的信任，但你可能做错一次两次，这个信任就永久消失了——他这一辈子可能都不会再回来。"

安克品牌的信任度：2026年2月发布一万美金客单价的户用储能产品——没有线下店可看，第一个月就有超过1000个客户直接在网上购买。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**第三层（最深的护城河）：使命、愿景、价值观 & 人**

"放在最长时间来看，技术和品牌都不是公司最深的护城河。最深的护城河是它的使命愿景价值观，和一群真正相信使命愿景价值观的人。"

诺基亚的品牌信任还在，但已不被选择。"如果一群人能十年、二十年、三十年持续保持第一性、求极致、共成长——这才是最深的护城河。"

</div>

</div>

---
layout: default
---

# 1万美金无需看实物就下单：品牌信任的力量

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**品牌是怎么建起来的？**

"以给用户产生信任为目标，你做所有的事情都朝这个目标前进的时候，你最后是不是应该收获一个比较好的品牌？"

阳萌说这是一个很简单的道理——"第一性原理"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**真金白银的检验**

2024年全球召回几百万个充电宝——经济损失按亿来算。没有反复研讨和争论："看到问题了，从用户价值出发要怎么做？那就去做。"

每发现一个没按原则做的决策就立刻改正——从概率角度，在无数次接触中努力赢得大多数次数的用户信任。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**1万美金产品的信任测试**

2026年2月发布的户用储能——客单价10000美金，发布后直接在我们的官网上就可以下单。

"你想象一下这对用户来说是一个多么艰难的决定。没有线下店可以看，你凭什么信任它？"

第一个月超过1000个客户直接在线上下单。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

"安克品牌在全球范围大家对我们信任度还是挺高的。最强的是品牌这块板——按0到1来算，我觉得0.6、0.7。"

</div>

</div>

</div>

---
layout: two-cols
---

# 第三类公司：消费电子的新物种

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**品类分类**

- **超级品类**：深海，少数几个
- **中小品类**：浅海，几百个

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**公司三分类**

- **第一类**：做少量超级品类的公司（苹果、特斯拉）
- **第二类**：做少量中小品类的公司（绝大多数公司）
- **第三类**：做几十个中小品类、系统性地做出好客户价值的公司（索尼、飞利浦、宝洁、德州仪器、耐克——每个行业最终都会出现几个）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**安克的愿景**

在充电储能、影音、家庭自动化、健康四个产业方向，每个方向做到10-20个品类——最终40-60个品类。

"The third type of company."

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
layout: default
---

# 国王与骑士团 vs 总统与联邦

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**国王和骑士团**

"王国内大小事务皆由国王和他的骑士团们裁决。"

适合品类少的公司——一年没几个产品，决策不多，一群有能力的人做决策就够了。

像苹果、特斯拉属于此类。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**总统和联邦**

"总统负责整个国家的整体建设和运作，底下的具体联邦一个州一个州去负责某一个具体领域的运作。"

适合品类多的公司——需要设计一套系统让不同层级的人各自做好各自该做的决策。

所有长期成功的第三类公司最终都走到了总统和联邦模式。

</div>

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3 text-sm">

**安克的选择**：CEO决定公司形态、战略框架、能力框架、组织框架、人才框架、回报设计，以及做哪些宏观品类。具体品类怎么做授权给事业部，具体产品怎么做授权给产品线。"分层授权——每一层做每一层该做的决策，最大程度地向下授权。"

</div>

---
layout: default
---

# AI中台：每天1500亿Token的组织实验

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不是发账号，而是建中台**

安克不是给员工在各个平台上开账号，而是建立了一个中台——把各种模型接进来，在前端提供聊天、本地命令行、网页等多种接入方式——全公司6000人在同一个平台上用AI。

从2025年9月到现在，内部使用的Token已经超过十万亿。"每天大概一千五百亿内部使用的Token，而且这个数字还在快速往上走。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**预编排智能体 vs 即时编排**

OpenClaw代表"即时编排型"——现场编流程处理需求，但不稳定，不完全了解企业内数据和流程。

企业级应用应该走"预编排智能体"路线——把成功的方法、流程、已有数据集成到智能体里，让智能体确定性地产出价值。

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**没有算过细账**：因为相信所以看见。"未来的组织一定是要被AI加强过的组织，你最好是早开始。"直到Token费用达到小几个亿的规模时才开始认真看待成本——"它应该跟价值相匹配，如果能创造好的客户价值，不应该有什么上限。"

</div>

</div>

---
layout: default
---

# N倍效能个人（NEW）与组织变革的三板斧

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**大牛人 & 小牛人**

- **大牛人**（N-time efficiency worker）：把业务的认知、数据、流程、方法沉淀成智能体的人——"造斧子的人"
- **小牛人**：不用自己做智能体，但能高效掌握和使用智能体的人——"用斧子的人"

"一个组织会有少量大牛人和更多的小牛人。他们的价值被N倍创造，好的组织也应该给价值相应的分配。"

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**第一板斧**
人拥抱AI
（最难变的是人）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**第二板斧**
能力沉淀为智能体
智能体之间拉通

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**第三板斧**
组织发生变革
Squad重构

</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**AI不会让中层管理者消失**：把一个公司完整描述清楚需要的context长度远超现有模型处理能力。压缩本身就是价值选择——现阶段模型还做不好。而且康威定律说组织形态决定产出——培育高效组织需要管理者付出巨大心血。

</div>

</div>

---
layout: default
---

# 创造者拿七，股东拿三

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么是7:3？**

总剩余价值（收入减去所有必要费用后可分的部分）= 一流公司通常30%以上。

股东价值约10%是"好公司的基础门槛"。30%总剩余价值减10%股东 = 大约是7:3。

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 机会
挑战特别难、从未做过的事
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### 成长
有公司托底，有伙伴一起探讨
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">

### 回报 & 意义
挣到钱+可以吹牛+孩子觉得爸妈很厉害
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**实际效果**：毛利率每年涨1.1-1.5个百分点。多出来的钱都分给员工。23年1月1日在公司的同事，24年总收入比23年平均提升20%；25年比24年同样再提升20%。年收入过百万的人数：24年约500人（5000人规模），25年涨到800人（6000人规模），希望26年超过1000人。

</div>

</div>

---
layout: default
---

# 产品方法：细分人群 × 确定场景 × 独特价值

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**阳萌的"只讲一个原则"**

"从细分的用户人群上创造独特的价值——为细分人群的确定场景，创造独特的价值。"

乔布斯回归苹果时，把人群分成专业用户和普通用户，把场景分成移动和桌面——两个人群×两个场景，切出四个产品坑位，每个坑位做一个有价值的产品。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**拓展新品类时两端出发**

- 一端：现有人群（已经买你产品、对你了解信任的人）
- 另一端：现有技术栈（通用技术+极致创新技术）

人群重叠度高 + 技术重叠度高 = 最高成功率的品类拓展。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**2022年后不再盲目扩张**

"收缩之后我们后面再也没有减少过品类。"不是变得更谨慎，而是有了更清楚的原则和方法。"如果人群也不同、技术也不同，一脚跨出去大概率挑战比较大。"

</div>

</div>

</div>

---
layout: default
---

# 硬件 vs 互联网：打仗的节奏决定人生的节奏

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**互联网的打仗节奏**

- 一仗：几个月，甚至一个feature一个月
- 一年打4-5仗
- 工作4-5年就打过十几仗，已是很成熟的"老兵"
- 但打到50、100仗时变化不大了——后面的人追上来 → 35岁危机

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**硬件的打仗节奏**

- 一仗：9个月到1年，复杂产品1.5-3年
- 持续成长的时间更长，价值持续上升
- AI会加速但不会加速到3个月
- 不用担心"没工作"的问题

</div>

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3 text-sm">

"出来混总是要还的。互联网大厂二十七八岁高收入，但到三十五岁就面临接续的问题——本质上一个人的成熟速度是跟他打仗的次数高度相关的。"

"在考虑上限的时候，你一定要考虑自己的下限。打破上限的人比例非常非常少——对大多数人来讲，下限保障更重要。"

</div>

---
layout: default
---

# 不fancy的人，做不fancy的事

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"我好像从来就不是那个最酷的人"**

阳萌说自己不是"说最狠的话、穿最靓的衣服、看起来最fancy的人"。他和东平都是"每天很扎实地做得比前一天更好——踩稳一个台阶，努力去够下一个台阶的人"。

"比较像工程师：遇到一个问题，解决一个问题。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**赌性：不all in，也不保守**

如果极左（五分）= 加杠杆all in，极右（一分）= 一分不投。阳萌一直是"中间那一档"（三分）——"不会全投，也不会不投，一定会把超过一半投出去。"

"在足够长的博弈轮次里，你稳定地每次都会去投，随着认知和能力提升，中庸会变成中成。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**8小时上班的CEO**

"作为第三类公司的CEO，如果我一天到晚在公司推动和指挥很多事情，它大概率不会长成一个第三类公司。第三类公司要靠这个体系，靠创造者他们去run——而不是靠我这里推一把、那里推一把。"

</div>

</div>

</div>

---
layout: default
---

# 大疆 vs 安克：easy模式与hard模式

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**大疆：一上来就选hard模式**

"从第一天选了一个特别特别难的品类——甚至地狱难度模式。前面那几年肯定很痛苦。"

打穿了难品类之后：积累好的底层技术 + 积累一群高价值观的人 → 向其他品类扩展变得更容易。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**安克：从easy开始往上打**

一开始选的是相对容易的模式。前面容易，后面变得很难。

"这几年在补课——在打这个难的游戏。"

</div>

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3 text-sm">

"这个世界是特别公平的。我们前面没有经过融资的困难，过得很顺——那这几年其实我们过得还是挺痛苦的。"

这两种路径本质上是一个二分选择——"难和容易，你总得在中间有一个尺度。大疆是0.8、0.9，我们是0.2、0.3——但最终都要往难的方向走。"

</div>

---
layout: default
---

# 推倒重来？不，是逐级而上

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**阳萌的"上楼"比喻**

马云说过，创业像你在第一层——你的眼界就是第一层看到的。做得好就应该不断往上，从十层二十层三十层。到更高的楼层后，对整个世界的理解、对应该怎么做的理解就提升了。

"在第一层的时候你看到了第一层的第一性原理，你求了极致——这个让你上到第二层。这个时候你会发现它的第一性又不一样了。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**十五年前的第一性**

从Google辞职做充电宝。很多人觉得"为什么做这么简单的东西？"

那时候的第一性：创造客户价值——在那个复杂度的品类里，做改良性产品，通过客户反馈打磨到极致就够了。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**现在的第一性**

在复杂品类里做极致创新——从物理学的本质原理出发，像芯片这样的突破和创新。

"这十几年来没有变的第一性是创造客户价值。但创造客户价值的方式，已经完全不一样了。"

</div>

</div>

</div>

---
layout: default
---

# 安克会死吗？阳萌的第一性答案

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**如果不拥抱AI，安克会死吗？**

"是的。因为AI，周围的产品会变得真正智能——如果你不能给用户提供这样的产品，你的公司一定会死。因为AI，组织的效率和人的成长速度会被显著拉开——组织也会死。"

"无论是客户价值、组织效率还是人的成长，今天不拥抱AI，你一定会死。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**但成功的第三类公司不会死**

"真正成功的第三类公司，当它能持续的很多个品类盈利、持续有很好的人的时候——其实这个公司是不会死的。"

唯一的原因：人忘记了之前的使命愿景，不再坚守之前的价值观。"我们今天还没有成为那么成功的第三类公司——还没有到生到最好的时候，更不要论死了。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**养娃，不是养猪**

极左是养娃（死了痛不欲生），极右是养猪（养了就是过年吃肉）。阳萌和东平觉得自己在"养娃"——"希望这个公司能长久活下去，如果可能的话，活得比我们更久。"

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"当你今天做过很实际的、产生价值的东西之后，再回到象牙塔里做那个牛角尖的、好像不知道价值在哪里的事情，你就觉得有点不太愿意了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 阳萌谈为什么从UT Austin博士辍学去Google</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"有一个人可以安全地看着你的背面，可以把你不好的那一面看住的时候，其实你是更大胆地往你擅长的那一边走了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈与赵东平15年的搭档关系</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"消费电子是一个速生速死的行业。你买过MP3，如果你像我这个年纪的话，可能还买过磁带机或CD机——这些产品从你开始买到你不买了，中间的跨度也就十年时间。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈品类生命周期的焦虑</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"这个世界是特别公平的。我们前面也没有经过融资的困难，过得很顺。那这几年其实我们过得还是挺痛苦的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈从easy模式转入hard模式的代价</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"因为相信，所以看见。我们并没有严格的衡量过说我们花出去的Token具体产出了什么——我们就相信说未来的组织一定是要被AI加强过的组织，你最好是早开始。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈全员Token无限的战略决策</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"当你盯住竞争的时候，你永远跑出来的是一匹更快的马，而不是一辆真正的汽车。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈"第一性原理"——不要盯着竞争对手，要盯着用户价值</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">继续：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"消费者可能需要很多次才能建立起对你品牌的信任，但你可能做错一次两次，这个信任就永久消失了——他这一辈子可能都不会再回来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈品牌护城河的脆弱性</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"超额的技术优势放到一个足够长的时间里边，是一定会被抹平的。这是一个基本的第一性原理。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈为什么技术不是最深的护城河</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"出来混总是要还的。互联网大厂二十七八岁就能很高收入，但到三十五岁就面临接续的问题——本质上一个人的成熟速度是跟他打仗的次数高度相关的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈硬件行业vs互联网行业的职业节奏差异</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"在第一层的时候你看到了第一层的第一性原理，你求了极致——这个让你上到第二层。你会发现它的第一性又不一样了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈认知如何随着企业阶段进化</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"熊跑过来的时候，你不是要跑得最快，你是要跑得比同行更快一些。"
<div class="text-xs opacity-60 mt-1 not-italic">— 被问到"在AI时代的消费电子公司中排在什么位置"时的幽默回答</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"我们觉得最后的世界不会是由一个超级大脑控制的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈分布式AI vs 大一统超级大模型的未来</div>
</div>

</div>

---
layout: end
---

# Thank You

<div class="mt-8 text-lg opacity-70">
"我们真的一直都是——每天很扎实地做得比前一天更好，踩稳一个台阶，努力去够下一个台阶的人。"
</div>

<div class="mt-4 text-sm opacity-50">
— 阳萌，安克创新创始人 & CEO
</div>

<div class="mt-12 text-xs opacity-40">
完整访谈：小宇宙《商业访谈录》第144期 · 2026年6月
</div>
