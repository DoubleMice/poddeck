---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '137. 对洪乐潼的4小时访谈：AI for Math、把数学变成Lean、数学天书中的证明、直觉、被创造与被发现的'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 137. 对洪乐潼的4小时访谈

## AI for Math · Lean · 证明 · 直觉

<div class="mt-8 opacity-70 text-sm">
洪乐潼 · Axiom 创始人 & CEO<br/>
小君 · 商业访谈录
</div>

<div class="mt-12 text-xs opacity-50">
2026年4月 · 美国硅谷 Facebook House
</div>

---
layout: default
---

# 为什么这期访谈值得你花时间

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>24岁的00后</strong><br/>
华人女孩，创办AI for Math公司Axiom，7个月内估值从0到16亿美元
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>57岁终身教授辞职</strong><br/>
拉马努金精神继承人Ken Ono离开终身教职，加入24岁学生的创业公司
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>Putnam满分</strong><br/>
Axiom Prover AI在普特南数学竞赛拿满分——98年历史上第6个满分
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>数学的ChatGPT时刻</strong><br/>
形式化证明如何改变一切：从芯片验证到"不需要test case的代码"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>非天赋型选手的逆袭</strong><br/>
自称"蛮力型选手"、做不出几何题的女孩，靠死磕和自由注意力突围
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>ASI > AGI</strong><br/>
她的激进观点：超级智能应该是专用的（specialized），不是通用的（general）
</div>

</div>

---
layout: default
---

# 广州长大的自由注意力

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**"做数学竞赛的时候总觉得…竞争它就是特别存在"**

洪乐潼在广州出生长大，小学进入数学奥校。四年级到六年级，每个月考一次试，每个学期把一到二十四班全部重排——楼顶是重点班，楼底是普通班。

"我当时进去的时候我是四班…就在洗手间旁边。"

但她的自由注意力始终旺盛：看百家讲坛、读黄永玉、学历史。数学教练批评她"不是最刻苦的那一个"。

</div>

<div class="text-sm leading-relaxed">

**转折点：从零和游戏到正和游戏**

初一发现可以去学高等数学——微积分、实分析、复分析——"非常有意思，因为它不像是一个零和游戏了"。

> "你如果是看高等数学…它是一个正和游戏，你可以自己到你想到的这个深度广度。"

她甚至和同学们发明了一个游戏：N×N棋盘走马步棋，希望用数学归纳法证明任何N≥5都能走满。三到五个人传纸条，一起构造base case。

"我们当时…群策群力一起构造…有点像数学其实某种程度上…它是合作性的。"

</div>

</div>

---
layout: two-cols
---

# Bounded vs Free Attention

一个贯穿她思维体系的核心概念。

- **Bounded Attention**：被框架住的注意力——邮件、deadline、必须执行的任务。很多成功企业家是"非常有纪律性的执行家"，日复一日compound。

- **Free Attention**：自由注意力——爱因斯坦的洗澡时间、小时候走路去上学时的神游。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./free-attention.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Bounded vs Free Attention（续）

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**洪乐潼的核心洞察**：自由注意力是"能够区分一个平均的创业者和一个很好的有策略性和决策性的创业者的一个区别"。当所有时间都被框住时，"你丧失了很多的机会成本"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**但它不是线性的**："有可能自由注意力时间你什么都没有想到，然后在后面的你可能在被逼迫做一些任务的时候…你会有一个callback，就是回到了你其实自由注意力给你大脑里面打下的基础。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**三种创业者**：Visionary（前瞻性野心家）、Executor（执行家）、Salesman（销售型）。洪乐潼自认Visionary——"我肯定不是salesman或者是executor"。扎克伯格在她看来是Executor；马斯克是Visionary；Sam Altman是Salesman。

</div>

</div>

---
layout: default
---

# "我在拒绝被驯化成为一个竞争力很强的人"

<div class="mt-6 grid grid-cols-2 gap-6">

<div>

**小学奥校的楼梯**

四年级到六年级，每个学期按成绩重排班级。楼顶是重点班，楼底是普通班。"你楼梯也往下走，你这个心情肯定也不是特别好。"

洪乐潼从四班（洗手间旁边）开始——"这说明我入学考试考得是真差，对吧，不是天赋型选手。"

**但她觉醒了**："我后面是觉得就是这个不好玩，我不想玩这个。"

</div>

<div>

**从零和到无限**

初一她开始看高等数学书，"开始不太想玩这个游戏了"。

她发现：在一个群体里，如果大家有一个清晰定义的目标（比如下一次竞赛），而你自己有一套完全不一样的mental model——你就开始"找这个群体里面的一个tribe一个部落"，找那些"跟你一样想读跟这个考试没有关系的书"的人。

**这个tribe就是她后来的创业原型。**

</div>

</div>

---
layout: default
---

# 打不死的小强：MIT时期的蛮力型选手

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mb-4">
"我一直就是非常希望能当直觉派、天才派。然后这其实是我很小的一个痛苦的一个根源——就是我一直发现我自己没有什么特别大的数学天赋。我是一个蛮力型选手。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**解释一：几何题做不出来**

数学奥赛第一道欧式几何题是"必拿的分"。洪乐潼一直做不出来——"我的大脑可能更偏代数的符号的表达，然后几何和拓扑实在是差"。

她的解法：用复数法硬算，把每个点、每条线用复数表达。"大力出奇迹"——但比别人多花两到三倍时间。

有趣的是，2021年Google DeepMind的AlphaGeometry也用了类似的思路：把几何图形变成符号表达式。AI解决了81%历史上IMO的几何题。

</div>

<div>

**解释二：身边的参照系**

"我在MIT的时候我身边所有人他们都是天赋型选手。你只要看看左边，看看右边，就知道自己不是天赋型选手。"

她的同学：任秋雨、张盛彤、高继扬——"这些人每一个人都在我小时候看着他们的新闻长大的"。

**但她的态度**："我不放弃，我是打不死的小强。你给我一道题，我三个月我做不出来，我继续想。"

Henry Cohn教授给她一道sphere packing题——她六个月什么都没想出来，但每周都去汇报试过什么、怎么失败的。

</div>

</div>

</div>

---
layout: default
---

# 博一概率论考试：满分40分，拿了4分

<div class="mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mb-4">
MIT第一学期有"成绩保护"机制。东校区的学长学姐给她建议："你就是去上最难的课，然后你就是去上你可能都没有预备知识的这个课。"于是她这个大一的"小朋友"去上了博士概率论。
</div>

<div class="grid grid-cols-3 gap-3 text-center text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">40分</div>
<div class="text-xs opacity-70 mt-1">试卷满分</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600">9分</div>
<div class="text-xs opacity-70 mt-1">全班平均分</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">4分</div>
<div class="text-xs opacity-70 mt-1">洪乐潼的分数</div>
</div>

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**她的反应**："第一天开始上来测度论…从Lebesgue，从Borel sigma algebra开始讲起…我们就面面相觑，我们完全不知道发生了什么。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**但她不崩溃**："我什么失败都不会触发我自己觉得很失败的机制。就是我把这个失败当做是我的default默认项。"

她的解决方案：重学Rudin的实分析，补分析底子。"这个课我学不好的原因就是因为我的分析的底子不好。"

</div>

</div>

</div>

---
layout: default
---

# 对苦难上瘾：从社区奖励到事情的奖励

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mb-4">
"我觉得大部分我知道的founder，就是创业公司的创始人，他们都对苦难上瘾。…风险投资人他们找这个founder就要找这种对疼痛上瘾的founder。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**两种奖励机制**

**年纪小的时候**：社区的奖励。"我有战友们…大家有这种同志的友情一块去做某一件难事情…登山队，这个会给我很大的一个奖励的感受。"

**近几年**：事情的奖励。"来源于可能这个非常难的这个事情本身…我对pain and suffering…有点上瘾。"

**分界线是疫情**。MIT大一下学期所有人被赶走，"就没有小团队了"。课还得上——"你必须要学会从这个事情难的事情本身里面去找快乐的感受。"

</div>

<div>

**MIT的感染力**

"每一个我遇到的在麻省理工的同学，他们都特别能吃苦。他们会在雨天暴风雪里面去跑晨跑……这是一个非常有毅力的一个学校。然后这种毅力它是非常有感染性的。"

**但她的自我评价**："我终身可能无法达到MIT希望我们能达到的那种毅力的程度，但我会希望往那个方向努力。"

**行事原则**："什么难做什么，什么痛苦做什么，什么长期主义做什么。"

</div>

</div>

</div>

---
layout: quote
---

# "证明某种程度上它是影响力。就是我只要能够去把这个东西严丝合缝的逻辑证明出来，我这个数学的发现就是可以被接受的。"

<div class="text-sm opacity-60 mt-4">
关于拉马努金、哈代、张益唐——以及数学发现的接受过程
</div>

---
layout: default
---

# 数学：被发现还是被创造？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**拉马努金：像外星人一样的数学家**

拉马努金从印度来到英国，带着他的草稿本——"这些东西全都是对的，我从来没有接受过数学的这个训练，我不知道怎么去证明它"。

哈代和Littlewood没有因为缺乏证明就拒绝他。他们觉得这些东西"看起来很有意思，它们很新，然后它们和我们之前做的东西又感觉是对的"。于是开始用证明来验证。

**证明是桥梁**：把不同的数学文化连接起来。证明让人们可以说——这个东西是正确的，因此可以被接受。

</div>

<div>

**张益唐：不同学派的证明**

张益唐的素数证明"和熟悉的一些学派非常不一样"。但数学界判断这个证明是"正确的"，所以"他们又接受了这件事情"。

然后James Maynard（2022年菲尔兹奖得主）发展了自己的证明技巧，两套方法可以"进行比较，也可以进行简化"。

**洪乐潼的总结**：证明是一种"互相去学习和整理"的智力过程。它不是非此即彼的裁判，而是不同视角之间的对话。

> "作者概括"：数学既有被发现的一面（规律客观存在），也有被创造的成分（证明方式和视角是人类的建构）。

</div>

</div>

---
layout: two-cols
---

# AI for Math 的三大核心科技

Axiom的技术愿景建立在三个相互支撑的支柱上。

- **证明家（Prover）**：形式化定理证明系统，输出Lean代码，可以自我验证。
- **猜想家（Conjecturer）**：提出新数学猜想的AI——目前最困难的挑战。
- **知识库 + 转化**：将浩如烟海的人类数学论文转化为Lean形式化数据。

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

# 猜想的难题：如何判断什么是好问题？

<div class="mt-4 space-y-3 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**核心难点**：证明有明确的reward——证明了就是1，没证明就是0。但猜想没有这样的信号。"我怎么去说我这个猜想是好还是不好？"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**当前尝试**：用证明系统做reward signal（Self-play Theorem Prover，斯坦福董可凡/马腾宇）。加上"优雅过滤器"（elegance filter）——判断猜想是否有意义。但目前的优雅判断依赖"题目长度 vs 证明长度"，对高等数学完全不够。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Ken Ono的角色**：洪乐潼称他为"高产的猜想家"。"他是发散型思考的…他提出猜想的方式是连接很多不同的视角。"拉马努金是直觉型解题者——"这就是一个公式这个东西一定是对的"；Ken Ono是理论建造者——把不同领域的结构连接起来。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**为什么难**："我作为一个数学的学者…我很难去提一个好的猜想。给一个本科大一的同学出一道reading course的题…我觉得我很难给到这样一个题。"

</div>

</div>

---
layout: default
---

# Auto-formalization：比证明更难的科技

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mb-4">
"这个科技它其实比这个证明要更难，至少是一样的难度，我其实觉得是更难。"
</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**输入**：一篇arXiv数学论文（PDF）

**输出**：该论文中所有定理-证明对的Lean代码

**需要**：把一篇文章拆成"蓝图"（blueprint）——20页的文章变成200-500页的细化拆分

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**为什么不是翻译**："我把英语翻译成法语，英语和法语它们多抽象其实很类似。"但Lean是和Python更类似的代码语言——"AI没有见过多少Lean，现在全世界的Lean加起来没有多少的tokens。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**陶哲轩等人的实践**：数学家们手工写过蓝图——PolyMath和大型形式化项目中，他们把人手写的蓝图分发给全世界的本科生"每个人领一个小任务，然后所有这些人小任务加起来星星之火可以燎原。"

**AI要做的就是把这一步自动化。**

</div>

</div>

</div>

---
layout: two-cols
---

# Draft → Sketch → Prove

AI for Math的标准范式，三步走。

- **Draft**（自然语言提纲）：informal模型列出证明框架。
- **Sketch**（形式化提纲）：将框架转化为Lean代码结构。
- **Proof**（填坑）：把中间的`sorry`全部证明。可以用AI填，可以用rule-based方法填，也可以用hammer。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./draft-sketch-prove.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么Lean是"既C又GCC Compiler又C Runtime"

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
"Lean作为一个编程语言又带有自我验证的性能…它既是一个C这个编程语言，又是GCC compiler和C runtime，两者合一。它是一个非常finicky，也就是说非常脆弱的一个语言。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**Axiom必须自己造工具**

刚开始的时候，Lean社区用的验证器叫comparator，"比我们现在自己的verify proof慢一百倍"。Axiom必须自己造一个快的东西，"不然我没法跑"。

他们造了大约十二三个工具，辅助Lean更好地生成和验证。

AlphaProof用的是蒙特卡洛树搜索——"我们觉得这个太贵了……我们又得找别的办法"。

</div>

<div>

**Lean里的hammer**

Hammer（斧头）——"一斧头下去这个sorry就没有了"。其他证明语言（Isabelle、Coq/Rocq）早有hammer，但Lean一直没有一个好用的hammer。

CMU去年六月出了一篇Lean hammer尝试，但"它的功能并不够涵盖所有其他的hammer的尝试"。

Axiom还出现了新工具Grind——"如果你Grind一下，甚至它都能直接给你做出来，这里面没有任何AI的一个成分。"Axiom的哲学：最便宜的方法先上，解决不了的再用大语言模型。

</div>

</div>

</div>

---
layout: default
---

# Verve咖啡馆：一段硅谷式的相遇

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**2023年秋天到2024年冬天**

洪乐潼在斯坦福法学院读第一年。每个周末，她抱着三大本法律书，坐校巴到Palo Alto downtown的Verve咖啡馆——"读法律案例做笔记，看狗和抹茶"。

她注意到一个"感觉非常面熟"的人，每周都在同一个六人桌上。他是Shubo——但她不知道他是谁。

**第一次说话**："他坐在窗边然后那个太阳特别晒，然后我需要那个窗帘拉起来。"

"I said非常谢谢你帮拉这个窗帘，然后他就说我经常看到你，然后我就说是，我也经常看到你。"

</div>

<div>

**一年半的友谊**

他们聊了一年半——"聊科学历史"。

她不知道他是Meta的FAIR director，20年GPU经历、10年AI经历、CUDA第一批开发者、2015-2016年在百度和吴恩达一起做deep speech。

他也不知道她是摩根奖得主，不知道她"也有一个数学研究背景"。

**共同发现**："我们发现我们能够是很好的联创团队的时刻是我们发现我们两个都非常讨厌Zoom……我们Zoom了四五个小时每次的…思考的方式特别的又相似又互补。"

2024年秋天，洪乐潼晨跑后去找Shubo，在Verve的餐巾纸上算：多少张卡、融多少钱。

</div>

</div>

---
layout: default
---

# 从劝退自己到决定创业

<div class="mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mb-4">
"如果我是一个本科生，我绝对不会去辍学然后去YCombinator。某种程度上我觉得我是最不可能创业的一个创业者。我非常的喜欢向往学界。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**两个月的挣扎（2024年9月-11月）**

每天早上跑步想事情。读了科学史——"从维基百科开始读科学史，后面要找书读科学史"。读了一个"AI for Math"的GitHub repo："大概有几百篇文章，每一篇文章的abstract我都读过，然后有意思的abstract我就会把整篇文章看完。"

她的自我验证过程："我做了多少次费曼的过程在纸上去想了，如果说我这个东西要搭起来，应该技术上怎么做。"

结论："它不一定是一个研究问题，它是一个工程问题。这个东西的科技的风险就没有我一开始看上去的那么高。"

</div>

<div>

**感恩节的决定**

"到我当然非常非常确定的时候马上就感恩节了。感从感恩节到圣诞节的时候没有VC上班，所以你要么就是那个时候到感恩节融完有十天要么你就来年再融。"

但在此之前她甚至去问竞争对手能不能加入他们——竞争对手回复："我们只招计算机的PhD"（她是数学PhD）。

**现在，那个竞争对手公司的CEO和她曾是Verve的"常客"，而Bartosz、François Chollet、Alberto Avanzo——她当年读的那些论文的作者——现在全在Axiom。**

</div>

</div>

</div>

---
layout: default
---

# 融资：没有人喜欢，但有一些令人激动的对话

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

"没有人喜欢融资。它不是说难，结果难，它就是累。你是一个复读机，一次一次的说一样的事情。你一次一次的接到一样的问题，真的我我可以把它录下来然后我就给你们大家发。"

</div>

**种子轮：3亿美元的估值**

2025年1月到3月。从第一个offer到第三个翻了"三倍"。几个领投方竞拍。

**A轮：16亿美元估值**

只过了6个月。圣诞节期间有投资人主动preempt——"我知道你现在不融资，我知道你没有PPT，我知道你什么材料都没有，我要给你一张term sheet"。

1月5日在外地一个城市pitch，当天晚上拿到offer。一星期后拿到另一个offer，选择了第二个——Menlo Ventures。

</div>

<div>

**Howard Morgan：比你更乐观的投资人**

B Capital的Howard Morgan——文艺复兴科技公司（Renaissance Technologies）的co-founder、First Round的联合创始人——"他比你更乐观，他比你更觉得你的商业模式有前景，他告诉你这些是你的商业模式。"

洪乐潼在MIT本科时见过Jim Simons（文艺复兴创始人）来学校做围炉谈话。

**保守pitch的代价**："我讲的都特别保守，然后我后来才知道投资人们一般来说他们见到的创业者们讲的比较乐观…他有一个打折…我如果当时讲的是一个七分，他就给我打折就可能打没了。"

**Menlo Ventures**：Anthropic最大的institutional investor，Axiom是继Anthropic之后第二大AI投资。合伙人Mac Greene是"电气工程的PhD和物理的本科，非常technical，非常nerdy"。

</div>

</div>

---
layout: default
---

# "年轻做product是加分，年轻做deep tech是减分"

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
"我确实不像说我们团队里面的除了我之外的所有人，我没有一个带带带带一个tech队伍的经历，我没有这个track record，这肯定是减分。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**年轻创业者的困境**

洪乐潼坦言：作为创业者被要求"长期进行重复的高风险决策，每一个决策给到你的时间是非常短的"。没有足够的world model支撑，"你的每一个…决定容易不太最优化"。

她讲扎克伯格19岁融资的故事：Peter Thiel在餐馆递给他term sheet，说"我们这餐饭不吃完你不签我这东西我现在撕掉"。扎克伯格"去了洗手间哭了一场，回来签了"。

</div>

<div>

**森林里的zipline**

一个投资人组织女性创业者活动，在森林里玩zipline。"我第一次，人生从来没有做过这个zipline，我就不敢下去。"

后面的人等着，她只能"一闭眼一咬牙我就下去"。

后来她们告诉她："我希望你能形成这种肌肉记忆，就这就是你每一天需要去重复的麻木的这样的一种take the leap of faith。"

**她的感悟**："在高压快速决定的情况下…每一次你在执行与不执行，做和不做中选择那个乐观的选项，你就能够有一天走到那个终点。"

</div>

</div>

</div>

---
layout: default
---

# Putnam满分：AI用蛮力打败了人类的优雅

<div class="mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mb-4">
2025年12月6日，Axiom Prover AI在普特南大学生数学竞赛中拿了满分120分——98年历史上第6个满分，第一个由AI获得。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**人类的优雅 vs AI的蛮力**

Evan Chen（美国IMO数学竞赛队教练）看到一道题，画了一个图——"我们所有人当时在那个会议室一看到这个图，我们就说，哦，那你去把它做出来了。就一个图的一个解法。"

AI没有找到这个图的解法。"我们看到了就是几千行的Lean代码，它是就是硬生生的把它就是…类似枚举，类似分类讨论…一步一步核实去把它就是干出来的。"

**"这就是一个大力出奇迹的AI。"**

</div>

<div>

**战时状态**

当天早上六道题、下午六道题。整个团队在"庞加莱会议室"（战争室）里。数学家们也在解题——把需要求解的题解出来喂给AI。

小野肯教授："不要再现在不是说数学纯粹之美的时刻，不要去精确的去搞这些东西，现在是战争状态！"

洪乐潼和Shubo笑得前仰后合。

下午3:58分发现已经有8道题（80分）——去年是前五。最终全部12道题满分。

</div>

</div>

</div>

---
layout: two-cols
---

# AI 数学家系统架构

Axiom的系统不是单一模型，而是一个多模型协作系统。

- **informal model**：列出证明提纲（自然语言）
- **formal model**：转化为Lean代码
- **多个specialized model**：填充不同类型的证明步骤
- **Tools**：hammer, Grind, 自定义验证器

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./axiom-system.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI for Math 在地图上的位置

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
"AI for Math我觉得现在就是收敛到大家差不多其实是一个做法——先拿一个open source的预训练好的模型，在上面做后训练（SFT+RL），然后把它放到一个系统里面去，这个系统有各种各样的model，call一些tools。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**两派做法**

**Axiom / LeanProof / OpenProof派**：强调系统设计，多模型协作，大量使用工具和metaprogramming。

**Aristotle / AlphaProof派**：更偏向单一强力模型+蒙特卡洛树搜索。

**Axiom的差异化**：不做蒙特卡洛树搜索（"我们觉得这个太贵了"），而是scale inference——用subagents的方式，类似于Anthropic最近提出的方向。

</div>

<div>

**核心创新点**

1. **Scaling learning from experience**：证明树从40个节点scale到4000个节点。每一步到达最终解的trail都可以成为训练数据。

2. **Transfer learning**：数学定理证明的AI，出乎意料地在代码验证上表现出色——在某个benchmark上从deepseek-prover的11%提升到98.93%。

3. **Skill library (LegoProver理念)**：像乐高积木一样，每个证明技能可以组合复用。

</div>

</div>

</div>

---
layout: default
---

# 数学 + 代码 = 孪生兄弟

<div class="mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mb-4">
"Math is code and Code is Math。有一个叫做Curry-Howard对应——每一个数学证明可以变成一个计算机程序。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**从数学到代码**

如果把数学证明和代码的形式化验证统一在Lean里，会发生什么？

正常的代码验证：代码是Python，证明是自然语言。做强化学习时，模型被拉向两个方向——Python写得好还是自然语言写得好？

**Axiom的做法**：把代码验证也变成Lean。Rust是strongly typed language，Lean是dependently typed language——两者可以"收拢"，让verify generation的效率大幅提升。

</div>

<div>

**Axiom的AGI世界观**

"数学（Math），然后编程（Code），然后实际的reward testing（现实世界验证），然后everything else。"

数学和代码是这个宇宙里有"验证信号"的两个领域——不需要现实世界实验就能判断对错。这是AI可以self-improve的最干净的环境。

**"我们是在一个能够有验证信号的领域…可以试验subagents、skills、MCP这些前沿AI概念。"**

</div>

</div>

</div>

---
layout: default
---

# "任何你能定义的，你都能证明"

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
"我们相信的一件事情就是任何你能定义的你都能证明。任何你能specify的，任何你能表达的，你都能执行。这是我们对于coding未来的一个愿景。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**软件验证的公式**

Program（你的电脑程序）× Specification（你要达到的目标）→ Verification Condition（验证条件）× Proof（证明）

Lean做的是Proof这一块。Program有——AI现在能写很多代码。Verification Condition有——形式化语言的工具提供了。

**缺的是Specification——定义。**

"任何我能写成一个数学问题的问题都会被证明。在这个coding里面——任何能够定义的都能够被执行。"

</div>

<div>

**定义的难题**

为什么Axiom不能参加First Proof挑战？"因为这10道题我甚至都没有办法把它转化成Lean的这个题目。"

题目涉及很多定义——完全不在mathlib里面。"如果我要去定义这些的话，这一步目前极其很难做。"

**"由于我无法定义，导致我无法证明。"**

这就是为什么猜想家（conjecturer）和auto-formalization如此重要——它们解决的是"定义"的问题。

</div>

</div>

</div>

---
layout: default
---

# Ken Ono：从OpenAI手中截胡

<div class="mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mb-4">
2025年11月底，洪乐潼的本科导师——57岁的终身教授Ken Ono——给她发了一封"非常怪的邮件"：他可能会加入OpenAI或DeepMind，希望她有心理准备。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**截胡全过程**

洪乐潼的回复："你可以来我这里。"

Zoom上谈了一次——"两三天内"完成。"我我倒没sell他，我就说我们非常的就是我们也open，你来，然后你可能还是得去OpenAI看一看。"

她甚至觉得"肯定凉了"——Ken Ono来湾区后直接去了OpenAI，没来过Axiom办公室。

**但他选择了Axiom。** 为什么？"他觉得我们的团队更数学……这个公司的DNA和专注点就是数学，而不是一个general的AGI，然后数学是其中一个部分。"

François Chollet的加入也是关键因素——两人"对对方也非常惺惺相惜"。

</div>

<div>

**Ken Ono是谁**

- 数论学家，在划分函数（partition function）领域年轻时就做出杰出成就
- 拉马努金精神的现代继承人之一——父亲是给拉马努金修雕像的数学家之一
- 美国数学学会前任副主席、白宫政策顾问
- 美国奥林匹克游泳队的数据分析教练
- 拍过拉马努金的好莱坞电影，正在拍第二部（第一位女性菲尔兹奖得主）
- 经营以拉马努金命名的慈善基金会

**洪乐潼的评价**："他的性格是一个高中的篮球队教练——特别特别乐观。你跟他聊你就会觉得'我本来就很想做这件事情，我现在更想做这件事情了'。"

</div>

</div>

</div>

---
layout: two-cols
---

# 拉马努金 vs Ken Ono

两种不同类型的数学直觉。

- **拉马努金**：尖锐的直觉型解题者。"这就是一个公式，这个东西一定是对的。"他的直觉可能来自预训练——"浑然天成的那种直觉"。
- **Ken Ono**：发散型理论建造者。连接不同领域的结构，创造视角，发现值得被解决的问题。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ramanujan-ono.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 数学是现实世界的沙盒

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
"数学是现实世界的沙盒，因为你既有验证的这个信号，又能够有更规律性的描述，更结构性的。"
</div>

**为什么数学是完美的试验场**

在现实世界验证一个猜想——需要做实验、建实验室、处理messy data。数学给了最干净的验证循环。

**芯片验证**：目前依赖SMT工具如Cadence Jasper，有大量局限性。Axiom的软件工程师用Lean证明芯片性质。

**代码验证**："一边编程的时候它告诉你整个编程不需要任何test case已经完完全解决了这个coding问题。"

**亚马逊案例**：三到五年、二十六万行代码验证一个memory isolation component——"AI没有改善这些工程师的生活。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./math-sandbox.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI for Math 如何解决幻觉问题

<div class="mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mb-4">
"我们盲目的接受了这个非常强大的AI会犯错误，但是我们相信在一些领域上这些错误将极度的昂贵，我们相信能够去做一个尽量perfect的AI。"
</div>

<div class="grid grid-cols-3 gap-3 text-center mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 只有两种结果

<div class="text-3xl font-bold text-blue-600 my-2">✓ / ✗</div>
<div class="text-xs opacity-70">"它要么就说这个事儿太难了我做不到，要么它会给你一个正确的东西。"</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 语言=突破边界

<div class="text-xs opacity-70 mt-2">语言模型适合做猜想——"generation就是生成"。语言帮你突破边界，提出新的可能性。</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 数学=约束边界

<div class="text-xs opacity-70 mt-2">"verification就是验证"。数学帮你收回来——确保生成的结论是正确的。两者来回配合。</div>

</div>

</div>

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**洪乐潼的洞察**："人类好的直觉其实就是一个配比——幻觉和规律推导的pattern matching的配比。这个配比要合适。"

</div>

</div>

</div>

---
layout: default
---

# ASI > AGI：一个激进的立场

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**"我不太喜欢AGI这个词，我觉得我们可能更是做ASI——超级智能应该是specialized。"**

</div>

**盘子比喻**

在中餐馆，洪乐潼跟任宏宇画了一个盘子模型：

- **圆心**：1+1=2，print("hello world")
- **圆周**：证明黎曼猜想、治疗癌症、写诺贝尔文学奖作品
- **OpenAI的做法**：从圆心出发，一点点把圆环撑大，直到覆盖所有边界 → AGI

</div>

<div>

**Axiom的做法**：从圆心出发，直接往"证明黎曼猜想"这个点打。打穿之后，发散出一个扇形——覆盖代码验证、芯片验证、物理理论——但不会覆盖到"拿诺贝尔文学奖"。

**"我们觉得它是一个ASI。人类的智能就是specialized——我数学还可以吧，我自己都不会做饭洗衣服。"**

**Recursive self-improvement**：如果既有数学做algorithm的能力，又有猜想能力——就可以持续螺旋上升。"AI scientist + AI engineer。X线（Axiom）一定是其中的一环。"

</div>

</div>

---
layout: two-cols
---

# Axiom 为什么像 Space X

Binary outcome：要么登月成功，要么坠毁。

- **技术壁垒**：不是"训练一个更好的模型"，而是造一整套工具链。
- **R&D周期长**：种子轮时以为要一年半才能到IMO水平，结果四个月拿到Putnam满分。
- **既要速度又要长期主义**：压缩时间线的同时还有infra的债要还。

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

# 降维打击：为什么做更难的数学能帮到更简单的领域

<div class="mt-4 space-y-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**核心逻辑**："你现在有一个训练了一兆token的爬虫数据，你很难撞墙、很难碰壁。但在数学这个目前Lean data非常少的情况下，你动不动就能够遇到拦路虎——所以你hit这些roadblock是更快的。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**实际案例**：Axiom Prover能生成20页的数学证明——然后"我可以非常快的去验证一个目前在芯片验证领域比较复杂的一个puzzle，因为那些需要的是一些可能高中数学学生就会的分类讨论。"

在更难的垂直领域攻克问题是"降维打击"——"我们把更难的做出来，希望能够给其他领域带来溢出效应。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**多元产生智能**：洪乐潼相信两句话——"降维打击"和"多元智能"。"这三个背景的人（AI、编译器、数学），他们联合起来能有很多想法。AI和编译器背景的人可以用fuzzing、repair、failing category等方法去做synthetic data generation……我们是一个idea rich的公司。"

</div>

</div>

---
layout: default
---

# 竞争格局：两家公司，两种路线

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div>

**Axiom（洪乐潼）**
- 成立：2025年夏天
- 团队：~30人
- 路线：数学+AI+编译器三背景融合
- 聚焦：猜想+证明+验证，登月式长期主义
- 估值：$16亿（A轮）
- 口号："我们要数学家"——但要思想开明的

</div>

<div>

**竞争对手（Tudor）**
- 成立：比Axiom早两年
- 团队：~50-75人
- 路线："我们只招计算机PhD"
- 聚焦：IMO金牌级→直接商业化落地
- 估值：约$80亿（曾是Axiom五倍）
- 不打算做猜想——认为IMO金牌就是终局

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"我们主要的竞争对手，我们刚开始的时候是他们五分之一的资产，我们的估值也是他们的五分之一。然后他们比我们早开始两年……但我们没有想到四个月就往Putnam冲，做出来一个满分。"
</div>

---
layout: default
---

# Library Learning：AI如何自己写数学定义

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mb-4">
定义（definition）是当前AI for Math最大的瓶颈之一。"你没有办法去验证这个定义是对还是错——像我一个证明。我也不知道这个定义是人类已经在数学里创造出来的定义还是AI新造的。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**Library Learning（图书馆学习）**

让AI从零搭出一个数学图书馆——定义→定理→证明→新定义→新定理。这是auto-formalization的终极形态。

社区目前"卡在这里"——两个难点：
1. **验证信号缺失**：定义不同于证明，没有明确的"对/错"信号
2. **faithfulness问题**：AI引入的新定义可能与人类已有的数学体系产生悖论

</div>

<div>

**为什么这件事重要**

假设全世界的数学都已被手动打入Lean——"上帝给了所有的已经存在的定义"。当AI要做新猜想和新证明时，它会发现引入新定义能让生活变得更容易。但如果这个定义是人类没写过的——"我怎么样能够保证这个系统的这些定义不相违背？"

"我定义一个图是'好图'，然后过了一会之后就会发现这个东西可能会呈现一个悖论。"

**这是AI for Math最深远的挑战之一。**

</div>

</div>

</div>

---
layout: default
---

# "我们并没有一个定义文化的机会"

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
Axiom大部分早期创始员工来自Facebook。"Facebook的人他们bleed purple——他们的血液里面就是紫色。"扎克伯格是色盲，"他的办公室有非常大胆的颜色"。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**Top-down vs Bottoms-up**

洪乐潼总结："top down非常Google，然后bottoms up非常非常的Facebook。"

Axiom的文化某种程度上沿袭了Facebook的传统——"由下往上，而不是往上行下效"。

这和她做CEO的哲学一致："最好的领导力可能是服务型。整个团队在登山的时候，你不是前面那个拿着喇叭的那个，你是后面递水的那个。"

</div>

<div>

**为什么是她做CEO**

洪乐潼自己也在想这个问题。团队里有20年GPU经验的Shubo，有终身教授Ken Ono，有4个IMO金牌——"为什么他们都愿意让你来做CEO？"

她的答案："我也不知道呀，我每天都在想这件事情。可能他们也没有意识到，我也没有意识到。"

但实际运行得很好："所有比较strategic的事情route到我和Shubo这里。研究者和工程师们有很好的环境去纯粹地醉心在技术上……我只是一个递水的人。"

</div>

</div>

</div>

---
layout: default
---

# 团队DNA：三种背景的交汇

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### AI / 强化学习

后训练、reasoning、agents、swarm of agents。从Qwen等开源模型出发做后训练。

**代表人物**：François Chollet（AI for Math发现方向先驱）、Bartosz（ATPboost作者）、Alberto Avanzo（Intuition作者）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 编译器 / 代码生成

LLM Compiler团队、Compiler Arena、Code World Model（Yann LeCun的32B模型背后部分团队）。

**能力**：元编程（metaprogramming）、fuzzing、program repair——用AI生成Lean训练数据，而不是靠人手工打。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 数学家 / Lean专家

4个IMO、5个IMO（算上实习生）。纯数学家Ken Ono、竞赛教练Evan Chen、Mathlib建设者Kenny Lu和鞠建章。

**角色**：出题——创造越来越难的基准集。"我们希望你来感觉我们的系统哪儿弱，然后去做出更难的问题。"

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"我们相信多元产生智能。降维打击，加上多元智能——这是为什么…更难的垂直领域能给其他领域带来降维打击。你动不动就能够遇到拦路虎，所以你hit这些roadblock是更快的。"
</div>

---
layout: default
---

# 商业模式：验证是最好的第一个市场

<div class="mt-4 space-y-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**核心价值主张**：在错误代价极高的领域，提供一个"接近perfect"的AI。芯片设计、关键基础设施软件、密码学——这些地方"错误将极度的昂贵"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**当前探索**："我们还是比较坚信说就是专注…这些比较顶尖的这些科技人才要继续把我们的这个系统的这个能力往前变强，但我们同时又觉得说可以去开始进行这些小的探索尝试。"

"我们其实更关注就是它不能做的这件事情。解决一个有意义的失败比很多个肤浅的成功来的更有价值。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**从芯片到日常coding的vision**："某一天在我call一个function的时候，它给你是百分之百不需要验证的函数。"——但目前先打最有pricing power的市场。

</div>

</div>

---
layout: two-cols
---

# 从 Math Poor 到 Math Rich

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
"我们以前的这个世界能够做到比较顶尖的数学思维的人是很少的。我们现在会从一个math poor到math rich的社会。"
</div>

**数学家的新角色**：在有限算力下，数学家的直觉决定资源分配——"两百个H200花在这道题上，八千个H200花在这一道题上。"

**无限算力下**：像Demis Hassabis的AlphaFold——"两亿个蛋白？Fold everything！"把笔扔在桌子上。不需要平台，全部解决。

**生态链**：纯数学→应用数学→Code→Real World Testing。"Math is code and Code is Math。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./math-poor-rich.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 好奇心：人类不可压制的基本需求

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mb-4">
"假设AI for Math非常成功…所有的数学题你给我一个千禧年问题，这个AI就把它全部解决了。这个时候还会有数学家吗？我答案是一定会有。就是你给我一个一百万行Lean代码，我一定要去看里面是怎么做出来的。你你不让我去看我都会去看。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**为什么new lab会诞生**

"好奇心与创造力是人类的基本需求。在一些前沿的大公司里面无法去做满足他burning passion的事情他就要出来。"

万亿美元的大包"也无法压制住这些青年研究者的好奇心"。所以有了Stefano Ermon做更快的diffusion model，有了Periodic Labs做material science，有了Recursive做AI提升硬件。

**"这背后是一个基本作用力——人类的好奇心。"**

</div>

<div>

**证明→发现→发明→证明的循环**

"AI做了这个发现，让数学家更好的发明。"

人类数学家会"学习在不同的抽象层面上进行逻辑推理"。不是被替代，而是角色升级——从解题者变为问题定义者和直觉提供者。

**Ken Ono和Andrew Granville都持此观点**：随着AI进步，"数学家们会去说这些问题是值得去探索的，然后让这个AI去帮他们探索。"

</div>

</div>

</div>

---
layout: default
---

# 既是泡沫也是登月

<div class="mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mb-4">
"有一些公司它成了它就登月了。有一些公司…大家真的是每一天996一块儿去朝那个梦想努力，结果没成——那就是泡沫。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**"这个公司没有一个在中间的可能性"**

要么登月成功，要么登月失败。就像SpaceX——"要么火箭发上去了要么火箭坠毁了。可能火箭要坠毁几次才发上去，可能每次都差那么一点。"

**如果失败了呢？** "我可能会去希望看一看…神经科学…我们基本不理解人脑。我们完全不理解人脑。"她对brain-machine interface目前的implementation不满足。

但当下，她的信条是：**"both永远是鱼与熊掌都要兼得"**——像马斯克和Ray Dalio说的那样。

</div>

<div>

**最大的挑战**

"执行速度与学习速度。我执行的越多我学习时间越少，这是一个非常痛苦的过程。"

以前每天有多少时间阅读？现在少了。但每天仍然有那么多事情需要执行。

"We有点怕说是一个是怕执行的不够快，另外一个是怕由于要执行的快导致焦虑导致一些就是方向上出一些战略错误。"

**底线**："我们必须要成为一个比较长的一个企业一个公司。但与此同时这个公司的DNA就是登月。"

</div>

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期4小时对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我一直就是非常希望能当直觉派、天才派。然后这其实是我很小的一个痛苦的一个根源——就是我一直发现我自己没有什么特别大的数学天赋。我是一个蛮力型选手。"
<div class="text-xs opacity-60 mt-1 not-italic">— 洪乐潼谈自己的数学天赋</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我觉得我在拒绝被驯化成为一个竞争力很强的人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 面对奥数体系的零和竞争</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"没有人喜欢融资。它不是说难，结果难，它就是累。你是一个复读机，一次一次的说一样的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈融资过程</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"证明某种程度上它是影响力。就是我只要能够去把这个东西严丝合缝的逻辑证明出来，我这个数学的发现就是可以被接受的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈数学证明的社会性</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我们盲目的接受了这个非常强大的AI会犯错误，但是我们相信在一些领域上这些错误将极度的昂贵。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈为什么需要可验证的AI</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我觉得大部分我知道的founder，就是创业公司的创始人，他们都对苦难上瘾。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈创业者的心理特质</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我们现在的世界能够做到比较顶尖的数学思维的人是很少的。我们现在会从一个math poor到math rich的社会。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈AI for Math的终极愿景</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我觉得最好的领导力可能是服务型。最好的领导力就是…整个团队在登山的时候，你不是前面那个拿着喇叭的那个，你是后面递水的那个。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈自己做CEO的哲学</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"任何你能定义的你都能证明。任何你能specify的，任何你能表达的，你都能执行。这是我们对于coding未来的一个愿景。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈形式化验证的终极目标</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"你一边编程的时候它告诉你整个编程不需要任何test case已经完完全解决了这个coding问题。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈未来的编程体验</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"你只要biased to work action，每一次你在执行与不执行，做和不做中选择那个乐观的选项，你就能够有一天走到那个终点。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈创业决策的底层逻辑</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"解决一个有意义的失败比很多个肤浅的成功来的更有价值。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈公司探索哲学</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-sm opacity-70">
洪乐潼 · Axiom 创始人 & CEO<br/>
小君 · 商业访谈录 第137期
</div>

<div class="mt-4 text-xs opacity-50">
"AI做了这个发现，让数学家更好的发明。"
</div>
