---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '133. 对谢赛宁的7小时马拉松访谈：世界模型、逃出硅谷、AMI Labs、两次拒绝Ilya、杨立昆、李飞飞和42'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 133. 对谢赛宁的 7 小时马拉松访谈

<div class="mt-6 text-lg opacity-70">
世界模型 · 逃出硅谷 · AMI Labs · 两次拒绝 Ilya · 杨立昆 · 李飞飞 · 42
</div>

<div class="mt-12 text-sm opacity-50">
谢赛宁（Saining Xie）— NYU 助理教授 · Emi Labs 联合创始人 & Chief Science Officer
</div>

<div class="mt-6 text-xs opacity-40">
商业访谈录 · 语言及世界工作室 · 2026年3月
</div>

---

# 为什么这期特别？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**7 小时深度对谈**
一位年轻 AI 科学家的完整心路：从交大 ACM 班到 NYU 再到创业
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**世界模型路线图**
系统阐述何谓世界模型，为什么 LLM 不是通往通用智能的地基
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**拒绝 Ilya 两次**
2018 年拒 OpenAI 选 FAIR；2024 年拒 SSI 选 NYU —— 两次关键选择的底层逻辑
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**DiT → Sora 前传**
他和 Bill Peebles 在 FAIR 最后一个月做出 DiT，被拒稿后被 OpenAI 变成 Sora 骨架
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Emi Labs 揭盅**
与杨立昆联合创业，四个办公室横跨三大洲，要做"反向 OpenAI"
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**42：宇宙的答案**
从寒武纪大爆发到松鼠智能，从维特根斯坦到《金刚经》，一场关于智能本质的哲学之旅
</div>

</div>

---

# 谢赛宁：一条"B 级生"的轨迹

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 童年底色

- 妈妈带着四处旅游、做生意
- 爸爸是"纯粹死宅"，家里几面墙都是书
- 9 岁拥有第一台电脑，泡 BBS、写博客、上饭否
- "互联网的爆炸式增长让我变成了一个对很多事情都很感兴趣的人"

### 关键转折

- **交大 ACM 班**：不是"A 级生轨迹"，保送是偶然，排名 ~13/35
- **侯晓迪**的《交大生存手册》改变了价值观
- **沈恩绍面试**：问"你喜欢读什么书"——《什么是数学》（Richard Courant）
- 如今在 NYU Courant 研究所：当年 Courant 亲手建起来的系

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="mt-3 text-xs opacity-50 text-center">
"冥冥之中自有天意" — 沈恩绍问他《什么是数学》的作者是谁，答案是 Richard Courant
</div>

---

# 他为什么选择了计算机视觉？

<div class="mt-4 text-base leading-relaxed">

**"我感受这个世界的方式就是通过视觉。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 个人的理由

- 如果能选择去掉一种感官，视觉是最后一个——"没有视觉就丧失了人的独立性"
- 从小喜欢打游戏、看动画、看电影——视觉动物

### 生物学的理由

- 视觉皮层占大脑 ~30%，但在看图像时激活大脑 ~70%
- **寒武纪大爆发**（~5.3 亿年前）：眼睛的出现引发了物种间的军备竞赛，物种数量从屈指可数到几十万种
- 所有动物都是视觉动物——不只人类

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个更深的洞见

> "眼睛是唯一一个——它是大脑的一部分，但它是唯一一个暴露在真实世界里面的大脑部分，因为其他的大脑部分都藏在我们的头骨背后。"

<div class="mt-3 text-xs opacity-70">
所以，解决视觉不是要解决视觉本身，而是要解决智能本身。
</div>

</div>

</div>

---

# 交大生存手册：不卷的"优绩主义背叛者"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 侯晓迪的遗产

- 大一/大二时通过 BCMI 实验室认识侯晓迪（当时已在 Caltech 读 PhD）
- 侯做了两件传奇的事：
  - **本科生发 CVPR**——7 行代码解决一个重要问题，当时闻所未闻
  - **主笔《交大生存手册》**——讲"人为什么要学习？中国教育体制哪里错了？"

### 手册核心精神

> "如果一个人把政策评分作为自己的至高追求，那么他就是这个政策的牺牲品。"

- "做研究的目的不是灌水发论文，而是真的对这种无限的未知的探索"
- 手册还教大家怎么逃课、怎么快速完成作业

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ACM 班的独特设计

- **学子讲坛**：每人 45 分钟 talk，不能跟学习有关——哲学、历史、社会、科学闲聊均可
- 俞勇老师的理念：**通识教育** + 相对宽松的竞争环境
- "姚班跟 ACM 班最大的差别？ACM 班没那么卷"

### 俞勇老师的一句话

> "不是因为看见所以相信，因为相信所以看见。"

这句话影响了谢赛宁此后所有的研究决策。

</div>

</div>

---

# 第一次"逃逸"：不去 MSRA，去新加坡

<div class="mt-4 text-base leading-relaxed">

ACM 班大三必须实习一次。大多数人去 **微软亚研院（MSRA）**。但 MSRA 没有做视觉的组愿意收 ACM 本科生。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 俞勇老师的建议
"你们本科生现在最重要的还是有一段研究的经历，学会怎么样做研究，具体做什么方向不是很重要的。"

### 谢赛宁的选择
**"我觉得不行。"**

他私下联系了新加坡国立大学（NUS）颜水成老师的实验室，一切敲定后才告诉俞勇老师。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 俞老师的反应
沉默了几秒，说："好，你去吧。"

>"我猜他心里的想法是，这个学生怎么这么刺头。"

### 这次选择的意义
- 在 NUS 发表了第一篇 CV 论文（BMVC），导师冯佳时手把手带
- **2012 年**——刚好是 **AlexNet moment**，深度学习的原点
- 最重要的是学会了"想方设法促成自己想做之事"的肌肉记忆

</div>

</div>

<div class="mt-3 text-xs opacity-50 text-center">
后来 NUS 颜水成实验室成了 ACM 学弟学妹们的一个可选项——"我还是想 take 一些主观能动性"
</div>

---

# PhD 差点失学：涂卓文教授的"最后 15 天捞人"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 至暗时刻

- 申请季没有拿到任何一个想做 CV 的老师的 offer
- 一度准备去做推荐系统相关的研究
- 疯狂发"套磁邮件"

### 转机

- 4 月才收到涂卓文（Zhuowen Tu）教授的回复（PhD 截止日通常是 4 月 15 日）
- **半夜三点在宿舍楼下和涂老师打电话**
- 涂老师当场决定"捞"他——**UCLA offer**

</div>

<div>

### 又一个转折

办完签证、准备入学前一周——涂老师说：

> "不好意思，我要跳槽了。我要去哪我现在也不能告诉你。"

三个选择：
1. 留在 UCLA，由其他老师托管
2. 等涂老师确定去向再跟过去

**"我基本上就是马上说，我就选择你。"**

后来才知道涂老师去的是 UCSD——当时综合排名不如 UCLA、AI 师资也在外流。"但这些都不重要。重要的是我跟谁在做什么事。"

</div>

</div>

<div class="mt-3 text-xs opacity-50 text-center">
"我能看到一个地方或者甚至一个人的 upside potential……我也愿意跟这些地方一起成长。"
</div>

---

# PhD 的 5 次实习与"流浪式研究员生活"

<div class="mt-3 text-sm">

每年把宿舍转租，开着破车从南加开到北加（8 小时），两个行李箱就是全部身家。"我还蛮开心的。"

</div>

<div class="grid grid-cols-5 gap-2 mt-3 text-center text-xs">

<div class="p-2 rounded bg-blue-50 border border-blue-200">
<div class="font-bold text-blue-700">NEC Lab</div>
<div class="mt-1 opacity-70">Cupertino</div>
<div class="mt-1">发了 CVPR 论文<br/>以华人为主<br/>中午去吃饭</div>
<div class="mt-1 text-green-600">✅ 有成果</div>
</div>

<div class="p-2 rounded bg-red-50 border border-red-200">
<div class="font-bold text-red-700">Adobe</div>
<div class="mt-1 opacity-70">San Francisco</div>
<div class="mt-1">Artist 气质<br/>做 crowdsourcing<br/>design 相关</div>
<div class="mt-1 text-red-600">❌ 没成果</div>
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold text-green-700">Meta FAIR</div>
<div class="mt-1 opacity-70">Menlo Park</div>
<div class="mt-1">何恺明加入<br/>最后一个月<br/>做出 ResNeXt</div>
<div class="mt-1 text-green-600">⭐ 突破</div>
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<div class="font-bold text-yellow-700">Google</div>
<div class="mt-1 opacity-70">Mountain View</div>
<div class="mt-1">研究视频<br/>神经网络<br/>架构 & 训练</div>
<div class="mt-1 text-green-600">✅ 有成果</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold text-purple-700">DeepMind</div>
<div class="mt-1 opacity-70">London</div>
<div class="mt-1">RL / 机器人<br/>冬天、寒风、雨<br/>"做得痛苦"</div>
<div class="mt-1 text-orange-600">🤔 学到很多</div>
</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
**一半的实习没做出什么东西**——但这不是失败。Adobe 的消沉期让他学到"没做出来也不是世界末日"。DeepMind 的体验让他认识到"我不想做 RL 和机器人"，但 DeepMind 的组织模式（Demis 说要做"能拿多个诺贝尔奖的公司"）对他启发极大。
</div>

---

# 何恺明：研究机器、方法论大师、金刚经

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div>

### 第一次共事：最后一个月扭转乾坤

- Meta FAIR 实习前两个月毫无进展
- 何恺明加入 FAIR，manager 把谢赛宁"委托"给恺明
- **最后一个月，一起打 ImageNet challenge**
- 谢赛宁提出 residual 思路，恺明将其提炼为金子般的 idea
- 作品：**ResNeXt**——"She's ResNet"，名字里的 X 是恺明给谢赛宁的 credit
- ImageNet 挑战赛第二名（实际第一，因为第一名是 ensemble）

### 恺明的魔力

> "他能把所有很普通的东西变成一个金子般值钱的 idea。"

</div>

<div>

### 研究心法

**1. 怎么找 idea？不能坐着想。**
- 你想出来的 idea，100/1000/10000 人同时在想，或者别人已经试过且失败
- 真正的 idea 来自**探索**——"hack 一些东西，把 research 当玩具玩"
- **梯度即 idea**：成功的实验给你梯度，失败的实验给你更大的梯度

**2. 脚手架决定上限。**
- "你的 research 上限取决于你 baseline 的好坏"
- 恺明单枪匹马在 TPU 上 build 整套 infra
- FAIR 实习生第一课：**学会用 Excel 表格**

**3. 送了一本《金刚经》。**
> "凡所有相，皆是虚妄。若见诸相非相，即见如来。"

——看论文时要打破它给你的幻觉，追问背后实质。

</div>

</div>

---

# 研究是什么？Excel 表格、预测、信号

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### Excel 作为研究仪

- 恺明主导建立的实验追踪体系：每一行是一个实验，每一列是要记录的指标
- 关键决策：**哪些列要留？哪些行要放？**
- 本质是在收集**梯度信号**——"不好不差就没有信号"

### 预测每一场实验

跑实验前先预测结果：
- 猜对了 → 思维链条可以往前推
- 猜错了 → **surprise！** 这也是信号 → 为什么想错了？
- "一个 surprise 对 researcher 来说是最幸福的事情"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 两种差学生的 pattern

❌ **做太少实验**：信号不明确，啥也不知道
❌ **瞎跑实验**：dump 所有结果到表格，觉得 research 做完了

✅ **正确做法**：精细设计实验矩阵，每一行都有对照意义，**最大化信息量**

### 一个反直觉的例子

你的 performance 掉了 10 个点——不是坏事。
- 说明这个方向的反方向可能有正向信号
- **最怕的是停在原地**——没信号

> "一个 negative 信号的反方向就是一个正向的信号。"

</div>

</div>

---
layout: two-cols

# ResNeXt：比 MOE 更早的"稀疏扩展"

<div class="text-sm leading-relaxed mt-2">

### 核心思想

ResNet 是串行的单流网络。ResNeXt 将其改为**平行多组**：一个大网络里并排分布多个小网络，每组独立计算。

### 为什么重要？

- 按现在的话说，这就是 **MOE（Mixture of Experts）**
- 在 ImageNet 上首次观察到 scaling behavior：**group 数目越多 → 网络越稀疏 → 同样 FLOPS 下结果越好**
- 收敛更快，最终结果更好

### 命名

恺明将其命名为 ResNeXt——既是 "Next generation of ResNet"，X 也是给谢赛宁的 credit。

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

# 研究的非线性：六个月里的最后一个月

<div class="mt-3 text-sm leading-relaxed">

**"我最好的工作都是这样发生的"** —— 前五个月在黑暗中摸索，最后一个月灵感迸发。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 第 1-2 月
**探索期**

- 不能坐着空想
- hack 东西、推公式、读论文
- 写代码但不为最初 idea
- **找信号 = 找梯度**

<div class="mt-2 text-xs opacity-60">
最怕的是不知道往哪走
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 第 3-4 月
**收敛期**

- 信号浮现，idea 成形
- pivot 很重要——"最好的工作是弯弯绕绕跳来跳去才走到节点的"
- scale up 实验
- 补充、验证

<div class="mt-2 text-xs opacity-60">
最差的研究：最初的 idea = 最终的 idea
</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 第 5-6 月
**冲刺期**

- **真正的突破往往在最后**
- 恺明：deadline 前一个月论文已写完，剩下时间 polish
- 谢赛宁：ResNeXt、DiT 都发生在最后一个月
- paper 每一行文字不能有 < 60% 的占满率

<div class="mt-2 text-xs opacity-60">
“一行论文不能有一行有小于百分之六十的文字”
</div>

</div>

</div>

<div class="mt-3 text-xs opacity-50 text-center">
"恺明是在 deadline 前一个月全部做完的。其他人还在通宵奋战的时候，他像闲云野鹤一样观察着你们。"
</div>

---

# 研究是一场无限游戏（不是下棋）

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 有限游戏 vs 无限游戏

| 有限游戏 | 无限游戏 |
|---|---|
| 棋手、运动员 | 发明家、researcher |
| 成就取决于**最差的一步** | 成就取决于**最好的一次** |
| 每一步都要标准 | 这辈子只需要成功一次 |
| 总有输家 | 可以共赢 |

### 学术界正在被"有限游戏化"

- 大厂发一个产品 → 学术界蜂拥而至 → 用"花生米一样少的资源"追赶
- 失去了**定义问题**的能力
- "制定接下来我们去哪儿的人" 从学术界变成了 OpenAI、Google、Meta

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="mt-3 text-xs opacity-50 text-center">
Bill Freeman (MIT) 的经典插图：论文好坏对职业生涯的影响不是线性的——代表作决定了上限。
</div>

---

# 改变 AI 进程的 ~25 篇论文

<div class="mt-3 text-sm leading-relaxed">

谢赛宁自评：**"我一篇都没有。"** DiT 算 0.25 篇——是沿着已有的切线推了一小步，不是彻底的范式变革。

</div>

<div class="grid grid-cols-4 gap-2 mt-3 text-xs text-center">

<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>LeNet</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>AlexNet</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>ImageNet</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>ResNet</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>RCNN</strong><br/><span class="text-xs opacity-60">Faster RCNN</span></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>Transformer</strong><br/><span class="text-xs opacity-60">Attention Is All You Need</span></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>GPT-3</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>BERT</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>CLIP</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>ViT</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>GAN</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>NeRF</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>Gaussian Splatting</strong></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>DDPM</strong><br/><span class="text-xs opacity-60">Diffusion</span></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>LDM</strong><br/><span class="text-xs opacity-60">Stable Diffusion</span></div>
<div class="p-2 rounded bg-blue-50 border border-blue-200"><strong>... etc</strong></div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**他的目标**：假设有下一次 AI 革命，希望回过头来能说——"因为我个人的经历、合作模式、认知、思考，我能够理解一些东西，这些东西 somehow 对 AI 的发展有一定的影响。"

</div>

---

# 表征学习的哲学：扎根而不逐叶

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 为什么叫自己"做表征学习的人"？

> "这是一个永恒的 title。"

- Neural Architecture Search（NAS）火过，耽误了领域两年，发了几千篇论文，最后无果
- 但表征学习（Representation Learning）是 fundamental 的、永远未被解决的问题
- 表征学习 ≈ 深度学习本身

### 像种一棵树

- 表征是树根
- 图像识别、分割、视频、3D……都是树枝上的分叉
- **"我希望能够扎更深的根，而不是在 branches 上面走得更远"**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 什么是表征学习？

目标：学一个映射函数 f，把原始数据 x 映射到一个**具有良好性质的空间**，使下游任务更容易取得好结果。

但不只是简单映射——它是**层次化**的：

- 底层 → 粗糙的边缘、纹理
- 中层 → 形状、部件
- 高层 → 语义、概念

### 架构 × 数据 × 目标

> "架构决定了你用什么来训练，是一个引擎。但你只有引擎没有用——你没有油。数据层面和目标函数层面就是这个油。"

谢赛宁的所有研究都围绕着这三者展开。

</div>

</div>

---

# 表征学习主线：从 DSN 到 RE

<div class="mt-3 text-sm leading-relaxed">

谢赛宁概括自己十余年的研究：一条主线——表征学习；三个维度——架构、数据、目标。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="p-2 rounded bg-blue-50 border border-blue-200">

**2013-14 · DSN**
Deeply Supervised Nets
- 神经网络可以有多个出口
- 中间节点即可反向传播
- 解决梯度消失
- 2023 年获 ICML Test of Time Award

</div>

<div class="p-2 rounded bg-blue-50 border border-blue-200">

**2014-15 · HED**
Holistic Edge Detection
- DSN 在像素级标注的应用
- 发现：神经网络每层有层次化结构信息
- 获得 ICCV 马尔奖提名
- "这是我最后一次拿 best paper"

</div>

<div class="p-2 rounded bg-green-50 border border-green-200">

**2016 · ResNeXt**
和恺明合作
- 平行多组架构
- 更早的 MOE 雏形
- 观察到 scaling behavior
- ImageNet 挑战赛实质第一

</div>

<div class="p-2 rounded bg-green-50 border border-green-200">

**2019 · MoCo**
Momentum Contrast
- 第一个把对比学习做 work 的工作
- MoCo v1 → v2 → v3
- v3 用 Transformer + scale up
- 超越 ImageNet supervised pretraining

</div>

<div class="p-2 rounded bg-green-50 border border-green-200">

**2021 · MAE**
Masked Autoencoder
- 对比学习 scale up 不起来后的转向
- 更简单：去噪自编码器
- 学到不同的表征性质
- "没拿到 best paper，也没能 deliver 范式转变"

</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">

**2022 · ConvNeXt**
"2020 年代的卷积网络"
- 质疑：ViT 中最重要的真是 self-attention 吗？
- 经典 ablation 图——手搓出来的
- 此后基本没人再设计新 CNN 架构

</div>

<div class="p-2 rounded bg-red-50 border border-red-200">

**2022 · DiT**
Diffusion Transformer
- 最后一个月转向，从表征学习变成架构创新
- 用 ViT 替代 UNet 做 diffusion
- 被 CVPR 拒稿（"novelty 不够"）
- → Bill Peebles 带进 OpenAI → **Sora 骨架**

</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">

**2023-24 · REPA & RE**
Representation Alignment / Autoencoder
- "表征最重要" 的延续
- 用外部表征指导生成模型内部表征
- **bet**：未来表征是 foundation，上层的语言、生成、action 都只是解码

</div>

<div class="p-2 rounded bg-orange-50 border border-orange-200">

**2024 · Cambrian**
Cambrian-1 & Cambrian-X
- 系统研究多模态大模型每一环节
- Cambrian-X：视频 + 空间智能
- 提出 **super sensing** 概念
- 定义一个通往世界模型的阶梯

</div>

</div>

---

---
layout: two-cols

# DiT → Sora：被拒稿的论文如何改变世界

<div class="text-sm leading-relaxed mt-2">

### 时间线

- **2022 夏**：Bill Peebles（谢赛宁招的 intern）来 FAIR 实习
- 最初目标：研究 diffusion model 的表征 vs 自监督学习表征
- 两个月后发现：表征层面价值不大，但**新架构更 efficient、更 scalable**
- 最后一个月转向：用 ViT 替代 UNet 做 diffusion backbone
- 论文投稿 → **被 CVPR 拒稿**（"novelty 不够"）
- 换投另一个会 → **中了 oral**
- 推特上大量讨论，但**没人真正用它做任何事**

### FAIR 的葬礼

- 那时 ChatGPT 刚出现，FAIR 陷入 endless "对齐会议"——"我们到底应该做什么？"
- 资源被要求集中到"更有意义的 project"，但没人知道那是什么
- FAIR 不让已离职的谢赛宁署名——**只署 NYU + Berkeley**

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

# Bill Peebles 与 Sora 的诞生

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### "你们都不买账，我自己来做"

- 谢赛宁和 Bill 去跟 Stable Diffusion 的人聊，跟各大公司聊——都没人买账
- Bill 毕业后有多个 offer，谢赛宁建议：**去 OpenAI**
- **2022 年底**，ChatGPT 刚出来，Bill 加入 OpenAI
- 和 Tim Brooks 一起，以 bottom-up 的 research 方式推动 DiT
- 获得足够的**自由度和资源**去做一件"想都不敢想"的事

### Sora 的骨架

DiT 成为 Sora 的核心架构。在 Sora 的 blog post 中被 cite。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 谢赛宁的反思

> "这件事情在当初的 FAIR 是没有这个基因的。大公司也不会有这个基因。"

问题不是"用不用 DiT"——而是**催生新创新的环境**。

- FAIR 当时陷入 top-down 的"对齐会议"文化
- 在那种环境下，diffusion model 不在"核心路径"上
- OpenAI 给了 young researcher **autonomy** 去 pursue a vision

### 苦涩的一面

> "工业界 research lab 变得越来越 close。一开始发论文，后来不发了只写 blog post 能加 citation……再到后面 blog post 也不能署名，只能写 'OpenAI Team'。"

学术界与工业界的良性交流渠道正在被打断。credit assignment 机制正在瓦解。

</div>

</div>

---

# 拒绝 Ilya 第一次：2018 年选 FAIR 不选 OpenAI

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 背景

- 2018 年 PhD 毕业，面试 OpenAI
- 面试官：**张书敏**，一张 A4 纸，铅笔手写的面试题
- "我觉得太有意思了，这个地方很有意思"
- 也拿到了 offer

### 为什么拒绝？

> "那时候想都没想，我就想去 FAIR。"

- FAIR 有**计算机视觉三驾马车**：何恺明、Pieter Abbeel、Russ Girshick
- 中青年顶尖研究员，做的都是最顶尖的 CV 研究
- "FAIR 在那个时候是**圣殿**"
- 谢赛宁是 FAIR 招的**第二个** fresh PhD graduate

### "Ilya 非常生气"

> "他问我说，你为什么不讨论一下就把这个 offer 拒了？是我们给的钱不够吗？"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 2018 年的 FAIR vs OpenAI

| | FAIR | OpenAI |
|---|---|---|
| 定位 | 学术研究圣殿 | 新兴 research 力量 |
| 确定性 | 高 | 低 |
| 开放度 | 论文、开源 | 相对封闭 |
| 薪酬 | ~40-50 万美元 | 同一水平 |

> "我觉得在 2018 年，至少在那个时间点上，我身边所有人如果有这样的选择，除非他们确实要做 OpenAI 已经在做的很擅长的事，大家还是会倾向于 FAIR。"

### 谢赛宁当时的判断

以教职为目标来看，这个选择是错的——留在恺明团队发更多 paper 才是"正确"路径。但他的标准只有一个：

**"我只考虑我应该去哪里，做我最想做的事情，跟我最想共事的人一起共事。"**

</div>

</div>

---

# 拒绝 Ilya 第二次：2024 年——SSI 与"爱的能力"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 背景

- **2024 年 7 月**，Ilya 刚成立 SSI（Safe Superintelligence Inc.）
- 发邮件给谢赛宁：愿不愿意来一起工作？
- 两人在纽约街头走了一段，等待餐厅排队

### 这次聊了什么？

> "我们主要讨论的问题是：**怎么样给未来的人工智能给予爱的能力。**"

- 这是一场哲学讨论，不是薪酬谈判
- 谢赛宁最后问了一句：**"你对 multimodal 这件事怎么看？"**
- Ilya 的回答：**"这件事情已经解决得很不错了。"**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么又拒绝？

> "SSI 有自己基于语言的路线。这条路线至少在现在为止，不是我想要去设计的路线。"

### 补充

- 不认为这和 Ilya 有"分歧"——"兄弟爬山各自努力"
- LLM 和视觉不冲突——"没有 LLM 最近的这些发展，可能也没有现在计算机视觉的状态"
- 但这两个方向在解决**不同的问题**

### 关于"爱的能力"

结论：**这件事很重要。**

因为如果没有爱，AI 的未来是"非常不确定、非常危险的"。谢赛宁承认爱和恨是一体两面，"它不可能只有爱"，但技术上仍然可以有所把控——**这也是为什么要做世界模型**：让 AI 能够预测行为的后果，从而在 inference time 避免危险。

</div>

</div>

---

# 何恺明教我的事：研究审美与沟通界面

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 极致的专注力

- 每天除了一个问题不想其他任何事
- 大部分 mental cycle 分配到一个具体问题上
- 会抓着身边的每个人聊这个问题
- "念头很多时候自己很难控制"——但恺明能做到

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 抽丝剥茧的能力

- 读论文时知道**什么是重点**
- "学术界蛮莫名其妙的地方就是大家不讲重点——要么不会讲，要么不愿意讲，要么没意识到"
- 恺明能把重点提取出来，建立**高维抽象空间中的联系**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 沟通的优雅

- 每行文字不能有 < 60% 占满率
- trailing word 不可接受
- "paper 是给别人看的，要在乎别人的观感"
- 自己的网页设计、录视频——不是炒作，是 **taste**
- **"沟通界面要赏心悦目"**

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

### 不要忽视"非研究"的一面

恺明送《金刚经》，劝大家"多读点哲学"——"你们的 title 可都是 Ph.D.（Doctor of Philosophy），但为什么一点哲学都不懂呢？"他也热爱聊进化生物学、物理、量子。恺明是魔兽世界忠实玩家，和谢赛宁一起打炉石——"前一个小时讨论 research，后一个小时讨论游戏"。

</div>

---
layout: two-cols
---

# 李飞飞：定义问题的人

<div class="text-sm leading-relaxed mt-2">

### 最厉害的不是 ImageNet 数据集

> "ImageNet 不只是一个数据集。把问题定义清楚，远比 build 一个数据集要重要的多得多。"

- 在 2011-2012 年，**图像分类不是一个明确的问题**
- 李飞飞 **set the agenda**——把问题定义清楚
- 这给了深度学习一个 playground 去施展拳脚

### 合作

两篇合作论文：
- **Thinking Space**：多模态语言模型中的空间智能
- **KamiS**：视频中哪些问题才是重要的？

</div>

::right::

<div class="flex justify-center items-center h-full pl-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 w-full">

### 两人熟识的契机

李飞飞来纽约出差，一起吃了一次饭——"跟我讲了很多很多东西"。后来她经常来纽约（创业），两人经常聚。

### 谢赛宁从她身上学到

> "她是一个能够**定义问题**的人。"

- 她自己的成长也并非一帆风顺——"踏遍荆棘，克服障碍"
- 最后变成"华人骄傲，computer vision 的北极星"
- 谢赛宁遇到困境时，李飞飞会语重心长地分享她过去的故事——"对我是一个极大的安慰"

### 她的影响

> "我想向菲菲老师多学习——到底什么是视觉的北极星？到底这个问题是什么？应该怎么去解决它？"

</div>

</div>

---

# 杨立昆：斜杠青年与三次招募

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 三次招募谢赛宁

1. **FAIR 时期**：杨立昆是 FAIR director，有交流但无直接合作
2. **NYU 时期**：杨立昆在 NYU，是谢赛宁选择 NYU 的重要原因之一
3. **Emi Labs**：2025 年联合创业

### 为什么选择 NYU？

- 杨立昆十几年前就建立了 **CDS（数据科学中心）**
- 独立于传统计算机系和数学系——跨学科
- "全玻璃门、暖色调橙色 floor、各种沙发"
- **AI 作为中间节点**连接各院系——杨立昆的远见
- "第一次踏入这个楼的时候我就觉得感觉很好，因为完全都是玻璃门"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 杨立昆的四大人设

1. **造模型飞机**
2. **拍天文摄影**——Zoom 背景的星云是他自己拍的
3. **搞电子乐 / Jazz**——他网页上有纽约哪些 jazz club 好、哪些乐手好
4. **帆船**

> "他是一个 16 岁青春期一直延续到 65 岁的这样一个人。" — 何恺明

### 网上 vs 私下

> "他在网上是一个斗士，四处开战。但私下里是一个很好很好的人，是我打心眼里崇拜和敬佩的一个人。"

> "每次我开始对事情有所怀疑，我都会愿意找他聊一聊。他很容易让身边的人感受到某种宁静。"

</div>

</div>

---
layout: two-cols

# 自监督学习的蛋糕：杨立昆的著名比喻

<div class="text-sm leading-relaxed mt-2">

### 蛋糕的三层

- **蛋糕底（cake body）**：Self-Supervised Learning
  - 这是 AI 的底座，必须占最大比重
- **奶油层（icing on the cake）**：Supervised Learning
  - 在自监督基础上叠加有标签数据
- **樱桃（cherry on top）**：Reinforcement Learning
  - 只是最上面的一点点装饰

> "每一层都很重要，但没有主次之分。如果你没有蛋糕的底座，你没办法只靠着上面的樱桃通向智能。"

### 为什么监督学习不够？

- ImageNet 1000 类标签中 200 种是狗——即便是这样的分布仍能学到好的表征（很了不起）
- 但一把椅子有无穷多种映射——avocado chair、设计师椅、普通椅子……全部要映射到同一个 label "椅子"
- 模型要么**死记硬背**，要么靠**虚假相关性**（椅子背后的背景）来作弊
- 监督学习永远学不到 **common sense**

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

# 为什么视觉的 scaling law 还没到来？

<div class="mt-4 text-sm leading-relaxed">

### 语言模型的 scaling 是"虚假的"吗？

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### LLM 的 scaling law

- 公式：C ≈ 6ND（compute ≈ 6 × tokens × parameters）
- 关键配比：数据量和参数量大约 1:1
- 这个 scaling law 让 LLM 一路 scale 到今天

### 语义空间的水分

> "语言模型的 scaling law 是基于对 knowledge 的 representation 所得来的。它本质上是一个 knowledge retrieval 的问题。"

- LLM 不需要真正"理解"世界——只需要记忆和检索
- Benchmark 和用户需求都在奖励**事实召回能力**
- "里面是有水分的"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 视觉为什么没有 scaling law？

> "我现在越来越觉得 vision 不需要有一个 scaling law。"

**原因**：视觉面对的问题和语言完全不同。

- **语言是强监督学习**：人类几千年的文明把所有 knowledge 都 tokenize 并 upload 到了互联网——这是 **for free 的 label**
- 语言始终在 **Y space**（标签空间）上打转
- 视觉需要在 **X space**（数据空间）上建模——要理解为什么四条腿的猫比三条腿的猫更常见

### 世界模型的 scaling law 会不一样

> "它不需要 trillion parameters，因为你不需要记住这个世界所有的细节。它需要的是 understanding——过滤、处理信息，最后做出决策。"

</div>

</div>

---

---
layout: two-cols

# 语言是毒药，视觉是弱势的那条腿

<div class="text-sm leading-relaxed mt-2">

### 杨立昆的"拐杖论"

> "现在大家都是拄着拐杖——这个拐杖就是语言模型本身。虽然你可以走走路，觉得走得挺好。但你可能跑不起来，没办法参加奥运会。因为你有一条腿——视觉的表征——现在还是不够好。"

### 语言的污染

> "语言其实是一个毒药，或者说语言是一个鸦片。你加多语言你总是会觉得更幸福的。"

- **Shortcut 效应**：语言让你走捷径，却跳过了真正理解
- 就像拄拐杖没办法训练大腿肌肉

### 视觉发展史的两根轴

**从简单到复杂**：
MNIST → CIFAR → ImageNet → detection/segmentation → multimodal LLM

**语言逐渐介入**：
带来巨大好处（自由定义问题），但语言依赖也在增加。很多"多模态"任务跟视觉无关——纯粹是语言问题。

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

# LLM 终将凋零，老兵不死

<div class="mt-4 text-base leading-relaxed italic">

**"LLM 永远不会死，但终将凋零。"**
"They won't die, they will just fade away."

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### LLM 擅长什么？
- 数字化空间中的一切：法律顾问、教育、总结知识
- **ChatBot 作为 interface** 极其成功（OpenAI 自己也没预料到）
- Coding agent、工具使用——通过离散 token 介入物理世界

### LLM 不擅长什么？
- **连续空间、高维度、有噪音的信号**
- 机器人、工业过程控制、传感器建模
- 任何需要"真实世界常识"的任务

### 两极

> "最左边是 LLM——擅长 digital space。最右边是 general purpose robotics。从 LLM 怎么推到 robotics？这是**视觉智能要解决的问题**，也是多模态的未来。"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### LLM 为什么是"反 Bitter Lesson"的？

**Bitter Lesson**（Rich Sutton）：尽可能减少 human knowledge，多用 search 和 learning。

> "语言就是人类极其聪明的一个产物。它有精巧的设计。如果你讨论的是怎样刻画这个世界，**语言就是这样一种 structure**。"

- LLM 本质上是在人类的 knowledge structure 上做 learning
- 真正的 world model 需要的，是从 raw signal 重新 learn 这个 structure

### 语⾔是交流工具，不是思考工具

> "语言是什么？是一个 communication tool，不是一个 thinking tool。它甚至不是一个 decision making tool。"

</div>

</div>

---

# 视觉的本质：一个 perspective，不是一个领域

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### Vision 要解决的问题

1. **连续空间、高维度、有噪音的信号**
2. **层次化表征**（hierarchical representation）
   - 层次化 = 抽象化 = 泛化
   - "如果你的表征没有层次，你没办法解决世界上很多问题"
3. **大规模并行处理**
   - 我们同时处理多个 object、因果、物理变化
4. **跨模态共享与抽象**
   - 儿童画狗 = 动画片狗 = 真实世界的狗——pixel 完全不同，但你能知道"都是狗"

### Vision 是一个 perspective

> "Vision 既指你的视觉，又指你对未来的预判。一个人很有 vision = 有愿景。Computer vision 在我定义下，它是一个 **perspective**——一个观点，是智能一定要解决的一系列问题的总和。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### CV 被边缘化了吗？

**"我完全不沮丧。"**

- 没有 LLM，vision 无法拓展到多模态智能的 scope
- LLM 提供了一个很好的 **interface**——用语言定义任意问题
- 但暗藏的巨大机会是：等到需要 deal with 真实世界的真实 task，现在不够完美的视觉表征就会是**重大缺陷**

### 越来越少的人做 CV？

> "学生申请 CV 的越来越少，faculty 招人也越来越少。但如果你认为 CV 是一个 perspective，这件事情是**智能的本质**。"

- 真正的挑战：在语言作为 interface 的优势下，**不让视觉退化为语言的附庸**
- 目标：视觉表征成为 foundation，语言退化为接口

</div>

</div>

---

# 什么是世界模型？

<div class="mt-3 text-sm leading-relaxed">

严格定义：给定环境状态 S_t 和动作 A_t，学习一个预测函数 F，使得 **F(S_t, A_t) = S_{t+1}**。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 思想渊源

- **Kenneth Craik（1943）**：生理学家，首次提出人在脑中拥有世界模型——能够预测动作的后果
- **Model Predictive Control（1960s-70s）**：控制系统需要 world model 来规划轨迹（月球探测器）
- **Dyna（Rich Sutton）**：RL 中的 model-based 方法——利用 world model 做 planning

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 为什么需要世界模型？

**System 1 vs System 2**
- **Reactive policy（System 1）**：开车熟练后，决策变成肌肉记忆
- **Model-based policy（System 2）**：遇到难题时需要 mental simulation、planning、reasoning

**Planning = Reasoning**
> "LLM 里面的 reasoning 很火。但事实上，planning 和 reasoning 在某种意义上是一个概念——这些讨论在 control theory 和 reinforcement learning 里早就有了。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 和表征学习的关系

> "表征学习 = 世界模型最重要的部分。"

什么是 state？

- state 不是对世界的全部刻画——那是天文数字的信息
- state 是**最少信息**来描述系统的状态——取决于你要解决什么任务
- 这恰恰就是**层次化表征**的任务：从 pixel → edge → shape → object → scene，逐层抽象，丢掉无关细节

**世界模型的本质 = 好的表征 + 预测能力**

</div>

</div>

---

# 世界模型的特征与当前玩家的不同路线

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 谢赛宁 + 杨立昆定义的世界模型

需要具备：
1. **理解物理世界**（physical world understanding）
2. **足够大的 associative memory**
3. **能做 reasoning / planning**
4. **能做 counterfactual / causal inference**
5. **controllable and safe**——真正的 safety 来自预测后果的能力，不是 fine-tuning alignment

### 与 LLM 的本质差异

- LLM safety = post-training alignment（喂数据让它知道什么不能说）
- World model safety = inference-time 自我约束（预见到拿刀转身会伤人 → 不这么做）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 当前不同玩家的路线

| 路线 | 代表 | 重点 |
|---|---|---|
| **生成模拟派** | Sora, Genie, Runway, Luma | 渲染好看、一致、可控的视频；world simulator |
| **3D 资产派** | World Labs（李飞飞） | 强 3D 表征，explicit spatial representation |
| **预测大脑派** | Emi Labs（谢赛宁+杨立昆） | 提升智能本身——学习 predictive representation |

> "我们每个人都在世界模型的道路上往前走。世界模型是一个目的，不是一个具体的算法或者技术路线。"

"过不了一两年，现在这些争论会显得异常可笑——因为我们其实都在往这条路线发展。"

</div>

</div>

---

# Moravec 悖论：对机器简单的事，对人反而是难的

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 悖论

> "Easy problems are hard, hard problems are easy."

- **对人简单的事**（感知、运动、常识推理）→ 对机器极难
- **对人难的事**（下棋、写代码、解数学题）→ 对机器越来越容易

### 松鼠智能比人类智能更难

Richard Sutton 的观点：
> "你觉得 LLM 写代码、拿 IMO 金牌、去月球很伟大吗？我不觉得。**打造一只松鼠的智能才是难的问题。**"

一旦你有了一只松鼠的智能——能在真实世界活下去，有自己的目标、饥饿感、情绪——后面的事情（写代码、上火星）都再容易不过。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 四岁小孩 vs 最强 AI

- 四个月大的婴儿看过的视频量 > 30 trillion tokens（远超最大 LLM 的训练数据）
- 四岁小孩：理解物理常识、因果推理、空间关系、他人意图……全部不依赖语言监督
- 12 岁孩子能做完所有家务
- **没有任何机器人能做到**

### 放弃人类的自大

> "如果你站在宇宙和造物主的视角看待这件事——重新造出一只松鼠，要比你的人类文明在 5.3 亿年最后 8 秒创造的东西伟大得多。"

推荐阅读：《Are We Smart Enough to Know How Smart Animals Are?》——黑猩猩也有 theory of mind，某种鸟类会"假装埋食物然后换地方"，鲸鱼有自己的语言。

</div>

</div>

---

---
layout: two-cols
---

# Cambrian 系列：系统研究多模态的每一环

<div class="mt-2 text-sm leading-relaxed">

### Cambrian-1（寒武纪一号）：以 solid、scientific 的方式研究到底什么重要、什么不重要。只不碰 LLM 部分，其他全部做充分 study——包括 data 构成、visual representations、架构设计。延续自 **Eyes Wide Shut**——发现 CLIP 可能不是最优的 vision encoder（有太多 language shortcut）。

</div>

<div class="mt-3 text-sm">

Trained on Google TPRC（免费 TPU），学生花 3-4 周攻克 infrastructure 难题。谢赛宁："学生给力。"

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Cambrian-X：从电影到阶梯

毕赣《路边野餐》的长镜头——"人活在这个世界上就是长镜头"。贾樟柯："时间轴上的每一个点，你需要一个空间去扩展它。"

论文视频是"写给纽约的情书"——学生拿摄像机在纽约街头边走边拍。

</div>

<div class="flex justify-center items-center mt-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[680px]"
  :darkMode="false"
  :background="false"
/>
</div>

<div class="mt-2 text-xs opacity-50 text-center">
L0 纯语言 → L1 Show & Tell → L2 Streaming Event Cognition → L3 Spatial Cognition → L4 Predictive World Model
</div>

---

# 为什么创业？中等 paper 陷阱与 Emi Labs 的诞生

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 触发动机

> "在学校里面资源紧缺。但学校也是一个很好很好的平台，让我有足够空间去找到我想做的事情。"

> "有一个 mentor 说，也许你应该去创业。我突然觉得，好像现在是一个时间点——继续待在学校里，可能会陷入一个**'中等 paper 陷阱'**。"

### 中等 paper 陷阱

- 会发一些不错的论文
- 但受限于 resource，无法真的把 idea 推广成一个新的 breakthrough
- 就像中等收入陷阱一样——不上不下

### 为什么现在？

- 探索到了一定地步
- 如果不走出学校，可能永远没法做一个"有 resource 去 verify 想法"的事

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Emi Labs（AMI Labs）

**定位**：somewhere in between ——

- 不是纯粹的 research lab（像 FAIR 早期）
- 也不是现在的封闭式大模型公司（像 xAI、TBD）
- **60-70%** 像 new lab，**20-30%** 完全自由的 research component

**团队**（6 位 co-founders）：
- **CEO**：负责商业和管理
- **COO**：前 Meta 南欧区 VP
- **VP of World Model**：JEPA team 前 director Mike
- **CRIO**：Pascal Feng，中国背景，负责 innovation 和 alignment
- **Chief Science Officer**：谢赛宁

> "我非常喜欢 CSO 这个 title——我希望我的定位还是在 science 上面。"

</div>

</div>

---
layout: two-cols

# 反向 OpenAI：世界模型需要的世界

<div class="text-sm leading-relaxed mt-2">

### 正向 OpenAI
互联网 → download 数据 → train transformer → 得到一个 intelligence → push to market（to C / to B）

### 反向 OpenAI
> "World model **needs the world**。这条路没办法直接从互联网 download 下来。我们需要和很多有数据、有具体问题的公司一起，通过合作伙伴关系，共同 build 这样一个模型。"

### 类比：Visa vs Mastercard

Bank of America 创立 Visa → 藏着掖着不告诉别人 → 被发现后其他银行联合起来创立 **Mastercard**。

Emi Labs 的定位类似——不是要"反"谁，而是通过**联盟**的方式抵抗垄断，让 AI 更 decentralized。

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

# Emi Labs 的全球布局与招人哲学

<div class="grid grid-cols-4 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-lg">🗼</div>
<div class="font-bold mt-2">巴黎</div>
<div class="text-xs opacity-70 mt-1">总部</div>
<div class="text-xs mt-2">杨立昆的大本营<br/>欧洲 AI 中心<br/>不受硅谷催眠</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-lg">🗽</div>
<div class="font-bold mt-2">纽约</div>
<div class="text-xs opacity-70 mt-1">学术中心</div>
<div class="text-xs mt-2">NYU 联系<br/>学术资源<br/>谢赛宁 base</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-lg">🍁</div>
<div class="font-bold mt-2">蒙特利尔</div>
<div class="text-xs opacity-70 mt-1">AI 人才库</div>
<div class="text-xs mt-2">Mila 研究所<br/>深度学习人才<br/>法语区优势</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-lg">🦁</div>
<div class="font-bold mt-2">新加坡</div>
<div class="text-xs opacity-70 mt-1">亚洲门户</div>
<div class="text-xs mt-2">工业合作伙伴<br/>制造业数据<br/>亚洲市场</div>
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 招人策略

> **"我们不想把一些已经 established 的 superhero 聚到一起，然后希望有化学反应。我不相信这件事。"**

- 更倾向于招：**有很好 reputation、很强能力、但大家还不知道的人**
- 原因：**"一个人很难被闪电击中两次"**——如果已经发过那 25 篇改变 AI 的 paper，再发一次的概率更低
- 强调给年轻人 **visibility** 和 **人物弧光**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么不在硅谷？

> "Silicon Valley is very unclear——已经深陷于 large language model 的催眠了。被催眠的人总有醒来的一刻。"

- 硅谷相信 LLM 的人多，相信 world model 的人少
- 但在世界其他地方，相信的人更多
- **"哪里有人才，公司就在哪里"**

### 作为 underdog

> "作为一个创业者，我非常 enjoy underdog 的身份。做 research 也是一样——你们越不相信我，我越 happy。"

</div>

</div>

---

# 从质疑 JEPA，到理解 JEPA，到成为 JEPA

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### JEPA 是什么？

Joint Embedding Predictive Architecture（联合嵌入预测架构），杨立昆 2022 年论文中提出。

**它不是**一个模型 / 一个具体算法 / 又一个 self-supervised learning method。

**它是**一套 **cognitive architecture（认知体系）**：
- World understanding
- Prediction
- Planning

> "JEPA 是一个非常非常广阔的海洋，在这个海洋里面可以有好多好多的船。LM 也是其中的一部分。"

### 三个阶段

- **质疑**：MoCo、MAE 时期——JEPA 不就是 yet another SSL algorithm？
- **理解**：最近有人严格证明了 good representation → isotropic Gaussian——JEPA 有数学原理在里面
- **成为**：发现 JEPA 不是小打小闹——**"它是一套足够大的框架，容纳一个全新的突破"**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么这个公司能做成功？

> "现在很多 LLM startup 是把事情往小里做。但 Emi Labs 是在刻意把事情**做大**。"

- JEPA 提供了足够广阔的空间去做探索和 scale up
- 不是要在现有 LLM 范式里竞争——是要做 **下一个范式**
- "我不知道这个突破什么时候来，会不会发生。但这是一条我愿意投入我的生命去走的路。"

### 杨立昆的乐观

> "他经历过 AI 的寒冬，然后告诉所有人他是对的，你们是错的。如果我经历过这件事，我可能也没那么悲凉。"

> "他经常说的一句话是：这件事情跟过去 deep learning 和 neural network 发生的事情一模一样。总有一小撮人能清晰看到世界发展的脉络，大部分人看不见。"

</div>

</div>

---

# 创业以后的真实感受

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 有变忙、变累
- 很多 ups and downs，很多繁琐的事
- 6 个 co-founders，有 legal problem，有 internal friction
- 但看着公司一点点成长，内部摩擦慢慢变得润滑，"其实也蛮开心的"

### 跳下去的那一刻
> "恐惧消失了。有勇气，一切都好说。"

### 融资
- 估值：**3 billion euro pre-money**（约 32 亿美元）
- "有 Yang 在，确实不难"（但 seed round 只是 seed round）
- 硅谷里大部分人**不相信**他们，世界其他地方大部分人**相信**他们
- "你们可以不相信我们——let's see。这条路我已经 all in 了。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么只纠结了一个星期？

杨立昆的"魔法"：
> "跟 Yang 说话有点像哈利波特一样给你施一些咒语。说一些话，你就不会想其他的了。"

杨立昆只是讲了他的愿景，解释了：
- 为什么这是一个更好的选择（对谢赛宁个人和公司）
- 为什么在这里谢赛宁可以有足够的 **agency 和 autonomy**
- 去打造一个 team，去设计整个 roadmap

### NYU 的双重身份

> "这个公司是我唯一的机会能够 keep 我的 NYU affiliation，保持一定的 academic engagement。我不用很抱歉地跟学生说——对不起，我刚把你招过来就要走了。"

他太爱他的学生："我有几个学生比我见过的所有 leading research lab 的研究员都更强——从成熟度、工程能力、research taste 来讲都是。但他们在学校里没有一个能真正做事的渠道。"

</div>

</div>

---

# 滑雪、JoJo、和克里格的勇气

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 滑雪的隐喻

谢赛宁最近学会了滑雪，感受很深：

1. **讲求平衡**——掌握了平衡才能滑起来
2. **无所畏惧地把肩膀朝向山下**
   - 人面对坡度总想往后靠（本能）
   - 从本能 → 失控 → 摔倒
   - 有足够的勇气 → 肩膀朝山下 → **反而更稳定、更能控制速度**

### 移植到创业

> "人类的赞歌就是勇气的赞歌。" —《JoJo 的奇妙冒险》

- 在学校做的那些决定也是"蛮有勇气的决定"
- 创业需要**更多的勇气**
- "但你永远不会独行"——因为身边的人让你变得更勇敢

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 穆里尼奥 vs 克洛普

**穆里尼奥**：I am the Special One.

**克洛普**：I am not a special one. I am the Normal One.

——谢赛宁是利物浦 20+ 年的球迷，最喜欢的教练是克洛普。克洛普说自己定位是 **"一块电池"**，用自己的 passion 和能量给团队发电。

> "我也希望自己能成为一块电池——不管是在学校还是在创业公司。把杨立昆感召我的电力，也输送下去。"

### 最沮丧的时候？

> "我天天都感到沮丧。这已经变成了 research 的宿命。"

"求索的过程就是在一个暗无天日的地方摸索的过程。快乐的时光只有真正做出来的时候——可能只有 5% 到 10%。但长此以往，大家心理状态也很堪忧。"

——还好，现在有小红书、微博、知乎可以看看大家怎么讨论。至少"不会觉得自己在一个幽闭的空间里独自探索"。

</div>

</div>

---

# 纽约的华盛顿广场：世界比 AI 大

<div class="mt-3 text-base leading-relaxed italic">

"每当我穿过 Washington Square Park 的时候——有弹钢琴的艺人、有跳舞的、有推婴儿车的妈妈、有下象棋的老大爷、有坐在台阶上发呆的年轻人、有拿着电脑学习的 NYU 学生……这个世界比我们想象的大得多。不是所有人都关心什么叫 AI。但也许有一天，AI 确实会影响到他们的生活。那我们到底应该做什么？"

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 纽约 vs 湾区

- 在纽约不用开车——"脱离铠甲进入真实生活"
- 出门就能找到新爱好（虽然不一定有时间）
- 真实的世界——不是所有人都活在 AI 叙事里
- **"多跟人接触，让我对什么是 AI、怎样做下一代 AI，有了新的认识"**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 这正是 Ilya 想聊的东西

> "Ilya 当初给我打电话想聊的，就是这些。但我那时候还没有这些感悟。"

第二次拒绝 Ilya 时两人在纽约街头走——聊的是"怎么给未来的 AI 赋予爱的能力"。那时的谢赛宁还无法回答这个问题。

现在的他每天穿过 Washington Square Park，看到的世界比 AI 大得多——这可能就是答案的一部分。

</div>

</div>

---

# 世界模型：从数据到预测——怎么训？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据挑战

> "过去的时代是 download the internet 的时代。现在的时代是 **download the human** 的时代。"

- 四个月大的婴儿看过的视频量 > 30 trillion tokens
- 30 minutes of YouTube upload ≈ 所有最强大语言模型的全部训练数据
- YouTube 数据存在版权 / terms of service 问题
- "道高一尺魔高一丈"——爬虫 vs 反爬虫的军备竞赛

### 两条腿走路

1. **从互联网视频开始**（YouTube，尽管有版权争议）
2. **工业合作伙伴数据**——飞机引擎、工厂传感器、医疗设备……

> "这个世界不只有视觉。飞机引擎里可能有 1000 个 sensor 在连续记录数据。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 商业模式：反向 OpenAI 的飞轮

1. **初始世界模型**（pretraining from internet video）
2. → **deliver 给工业合作伙伴** → 创造价值
3. → **产生更多数据** → 反哺世界模型
4. → 更好的世界模型 → 更多合作伙伴 → **飞轮**

### 最终 to C 产品

一定会有一个 to C 的产品。但先要**把世界模型做出来**。

两个可能出口：
- **AR glasses / wearable**：always on，实时摄入视觉流，提供智能决策
- **Robotics**：机器人的"大脑"——现在所有机器人公司都没在解决大脑的问题

> "我想通过不做 robotics 的方式去解决 robotics 的问题。"

</div>

</div>

---

# 表征派的 bet：未来只有一件事重要

<div class="mt-4 text-base leading-relaxed">

**谢赛宁的 bet：学着学习表征是唯一重要的事。当你有足够好的表征，所有上层都是简单的。**

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl">🧠</div>
<div class="font-bold mt-2">World Model Foundation</div>
<div class="text-xs mt-2 opacity-70">核心表征层<br/>预测、理解、planning</div>
<div class="text-xs mt-2 text-blue-600">← 这才是最重要的</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl">💬</div>
<div class="font-bold mt-2">Language Interface</div>
<div class="text-xs mt-2 opacity-70">LLM 退化为 communication tool<br/>提出问题、回答问题</div>
<div class="text-xs mt-2 text-green-600">← 解码层</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-2xl">🎨</div>
<div class="font-bold mt-2">Pixel Generation</div>
<div class="text-xs mt-2 opacity-70">图片/视频生成<br/>基于表征 decode 到 pixel</div>
<div class="text-xs mt-2 text-yellow-600">← 解码层</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl">🤖</div>
<div class="font-bold mt-2">Action / Robotics</div>
<div class="text-xs mt-2 opacity-70">决策和控制<br/>基于表征 decode 到 action</div>
<div class="text-xs mt-2 text-purple-600">← 解码层</div>
</div>

<div class="col-span-3 mt-3 text-xs opacity-60">
理解与生成是一体的——它们都需要一个真正的 world model 作为基础。上层解码"其实非常简单"。
</div>

</div>

---

---
layout: two-cols
---

# 高维度不可怕——跳出 Local Optimum

<div class="text-sm leading-relaxed mt-2">

### 马毅老师的忠告

在做 RE 时，有人质疑表征层维度太高。**马毅老师**激动地站起来：

> **"你们一定不能害怕高维度！"**

- 高维度是所有 ML 的重要基石（kernel method → Transformer up-projection ×4）
- 升维 → 原来不可分变可解、原来没有的信息现在可以有

### 跳出 VAE 的 local optimum

> "VAE 是这个时代的 local optimum。RE 让我能够 make a bet。"

不是害怕高维，是害怕**逃逸出当前的 local optimum**。表征派要做：用统一表征串联一切。REPA + RE 方向：生成模型内部表征应与外部世界理解表征 align。

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

# AGI 是伪命题

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 杨立昆的逻辑

人拥有约 200 万根视觉神经纤维，可以 model 的视觉函数数量是 **2^(2^200)**——一个天文数字。

但人真正能 process、能看到的东西**趋近于零**。

> "人的智能是一个非常 specialized 的智能。人只能认知到自己能看到的东西。"

### AGI 的不自洽

- "General intelligence" 本来就不是一个 well-defined 的概念
- 不同动物有不同的智能——狗的嗅觉、蝙蝠的听觉、鲸鱼的语言——没有哪一种更 "general"
- **智能是一个连续谱，不是二元的**（有/没有）

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 放弃人类的自大

> "很多时候我们说人类很特别——会使用工具、有自我认知、有 theory of mind。但动物一样会使用工具，很多动物都能通过镜子测试，黑猩猩甚至有政治博弈。"

例子：实验人员当着黑猩猩的面在两个盒子里分别放香蕉和苹果 → 离开很久 → 回来后实验人员在吃香蕉 → 黑猩猩直接走向苹果盒子。

> "黑猩猩也有 theory of mind，也有自己的 world model。"

### 结论

> "AGI 是一个完完全全的伪命题。"

真正的挑战不是追求"通用的智能"——而是理解**不同层次、不同类型的智能**是如何 work 的。打造松鼠的智能比人类的语言推理更困难、更本质。

</div>

</div>

---

# 世界模型的出口：为什么机器人没有大脑？

<div class="mt-4 text-sm leading-relaxed">

**"所有机器人创业公司，包括大厂的机器人团队，都没有在解决大脑的问题。都在 VLA 的框架下。"**

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 机器人现状

- 四肢发达能力已经比人强（春晚宇树令人瞠目结舌）
- 但**大脑远远落后于一个小孩**
- 12 岁的孩子能做完所有家务——没有任何机器人能做到
- 所有系统收敛到 VLA（Vision-Language-Action）——以 LLM 为 foundation
- **没有人做预训练**

### 预训练下半场

> "这是一个预训练的下半场。" — 姚顺宇

Jim Fan 最近也发表了同样观点。这个预训练就是 **world model 预训练**——但这件事情由谁来做？创业者没有资源，大厂在做 LLM。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 两个出口并行

**1. AR Glasses / Wearable**
- 当前 wearable devices 已经有一些"世界模型雏形"：always on，持续监测体征，提供智能建议（"你最近压力太大了"、"睡眠不好"）
- 未来的 AI 眼镜：always on、infinite tokens、理解你所看到的一切
- 用例：医疗（养老院监测老人）、运动（指导动作）、生活（喝咖啡时间影响睡眠）

**2. General Purpose Robotics**
- 需要能带着老人上下楼、照顾饮食起居的机器人
- 目前的"机器人表演节目"是一个 vertical domain——但离千家万户还有巨大距离
- **大脑不够**——这是上游需要解决的问题

</div>

</div>

---

# 42：宇宙的终极答案

<div class="mt-4 text-base leading-relaxed italic">

**"这个世界当然是一个巨大的世界模型。但你能预测命运吗？不能。因为资源不够——你需要有地球这么大的计算机，或者说整个宇宙作为你的计算机，才能告诉你关于生命、宇宙和任何事情的答案。这个答案最后可能是 42。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 时间是相对的

- 寒武纪大爆发：538 million years ago
- 人类语言和行为现代化：过去 3-5 万年
- 如果把 5.3 亿年缩短到 **24 小时**：语言只有最后 **8-10 秒**

> "在这场马拉松里，我们才刚跑了最后几秒。用这几秒的产物（语言）来定义智能的边界，是不是太傲慢了？"

### 导演梦 & AI 电影

- 谢赛宁从小梦想当导演——"很快就破灭了"
- 但其审美观/叙事观渗透到了 research 里：paper = film
- 推荐 AI 短片：《The Total Pixel Space》（全像素空间）

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 推荐的"人生之书"

**1. GEB（《集异璧之大成》）**
- Gödel、Bach、Escher——数理逻辑、音乐、绘画的哲学共通点
- "ACM 班时，我们组团学习这本书——这么厚，当初大家也看不懂，但到后面越来越觉得有道理"

**2.《禅与摩托车维修艺术》**
- "有些书把你装满，有些书把你掏空。这本书是把我掏空了的状态。"
- 一个在路上寻找自我、投射自我的哲学之旅

### 为什么是 42？

宇宙是一个世界模型——但要回答"关于生命、宇宙和任何事情的终极问题"，你需要整个宇宙作为计算机。那个答案——《银河系漫游指南》早就告诉我们了——就是 **42**。

</div>

</div>

---

# 放开维特根斯坦

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 维特根斯坦被滥用了

> "语言的边界就是我世界的边界" —— 这句话经常被放在 LLM 的 paper 开头做背书。

**但这是错的：**

- 维特根斯坦在《逻辑哲学论》里说的是"可以被命题所刻画"的世界边界——不是 general 意义上的世界
- **晚期维特根斯坦完全推翻了自己**：他不再说"边界"——他提出"语言游戏（language game）"概念
- 语言本身没有意义，symbol 本身没有意义——它之所以有意义，是因为**跟真实世界的实践发生了关系**

> "这件事情就很世界模型了——我们不是说语言就能完美 represent 世界。我们说的是，世界的实践、世界的 action，决定了语言这个游戏的内涵和外延。"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 费曼也被滥用了

> "What I cannot create, I do not understand." — Feynman

被用来为 unified model（把所有数据堆一起既做理解又做生成）背书。

**但这也是错的：**

- 费曼说的"create"和"understand"是在真实的、具体的世界里，要有某种 **action** 的过程
- 不是简单归结为"一个 diffusion model 的反向传播 loss"

### 谢赛宁的态度

> "我小时候写作文名人名言用多了，现在看到这种开篇先拉一句名人名言的操作有点 PTSD。"

> "就像恺明说的——你们可以多读点哲学。"

> "我不懂哲学，我也不是维特根斯坦专家。但我不喜欢看到大家这样用。这不符合我的审美。"

</div>

</div>

---

# 这个世界到底什么重要？

<div class="mt-4 text-sm leading-relaxed">

谢赛宁说他其实并没有完全看懂《禅与摩托车维修艺术》——"但有些书把你装满，有些书把你掏空。这本书是把我掏空了的状态——让我感觉到这世界里面到底什么重要、什么不重要。"

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 此时此刻的答案

<div class="text-lg font-bold mt-2">真诚的交流</div>
<div class="mt-2 text-xs opacity-70">
"人与人之间的真诚交流是重要的。也许其他都不重要。"
</div>
<div class="mt-2 text-xs opacity-70">
Research 本身也是 deeper connection——通过论文了解一个人的想法
</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 你会问自己的话

<div class="text-lg font-bold mt-2">"我跟谁在做这件事？"</div>
<div class="mt-2 text-xs opacity-70">
比"在哪儿"重要。
比"排名"重要。
比"能不能发 best paper"重要。
</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 在最不确定的时候

<div class="text-lg font-bold mt-2">"相信所以看见"</div>
<div class="mt-2 text-xs opacity-70">
不是"看见所以相信"。
在没有证据的时候就选择相信——然后去实现它。
</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 一个关于信任的意外收获

在融资时，有一个投资人说"你们一定要投赛宁，不管以什么方式都要帮到他"。谢赛宁和这个人**只在会议上见过一次**。

后来他才知道：这个人是通过 Robin Rombach（Stable Diffusion 作者、Black Forest CEO）知道他的。Robin 和谢赛宁只见过一面——但 Robin 说："我们一定要帮他。"

> "这种信任关系是建立在你的学术工作之上的。这种信任甚至远超于真正的 personal connection。大家通过你的作品了解你，然后这件事情会传承下去，走得很远。"

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这 7 小时对谈里最值得记住的六句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"凡所有相，皆是虚妄。若见诸相非相，即见如来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 《金刚经》，何恺明送给谢赛宁的书，research taste 的哲学根基</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"不是因为看见所以相信，因为相信所以看见。"
<div class="text-xs opacity-60 mt-1 not-italic">— 俞勇老师，ACM 班创班人，影响了谢赛宁此后的每一个决策</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"眼睛是唯一一个——它是大脑的一部分，但它是唯一一个暴露在真实世界里面的大脑部分。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢赛宁解释为什么选择计算机视觉作为终身事业</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"LLM 永远不会死，但终将凋零。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢赛宁对 LLM 最终命运的判断："They won't die, they will just fade away."</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"人类的赞歌就是勇气的赞歌。"
<div class="text-xs opacity-60 mt-1 not-italic">— 《JoJo 的奇妙冒险》，谢赛宁用来解释从滑雪到创业的底层哲学</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"世界模型是一个目的，不是一个技术路线。我们每个人都在通往世界模型的路上。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢赛宁论世界模型的本质："可能过不了几年，现在的争论会显得异常可笑"</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于研究、创业与人生：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"做研究的目的不是灌水发论文，而是对这种无限的未知的探索。"
<div class="text-xs opacity-60 mt-1 not-italic">— 侯晓迪《交大生存手册》，影响了谢赛宁的价值观</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"研究是一个无限游戏。你这辈子只需要成功一次就够了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢赛宁 CVPR talk，对 research 职业生涯的本质洞察</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"如果你不做这件事，这件事在这个世界上永远不会发生。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢赛宁的世界观：每个人都是这个世界的一个变量</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"I am not a special one, I am the Normal One."
<div class="text-xs opacity-60 mt-1 not-italic">— 克洛普（利物浦教练），谢赛宁的精神偶像："我想成为团队的一块电池"</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"高维度不可怕——你们一定不能害怕高维度。"
<div class="text-xs opacity-60 mt-1 not-italic">— 马毅老师，关于跳出 local optimum 的忠告</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"打造一只松鼠的智能，才是真正的难题。"
<div class="text-xs opacity-60 mt-1 not-italic">— Richard Sutton 的观点，谢赛宁深表认同：在宇宙和造物主的视角下，这比写码上火星更伟大</div>
</div>

</div>

---

# 这个世界是一个巨大的世界模型

<div class="mt-12 text-center">

<div class="text-3xl font-bold text-blue-600 mb-6">42</div>

<div class="text-lg leading-relaxed max-w-xl mx-auto opacity-80">
你需要有整个宇宙作为你的计算机，才能告诉你关于生命、宇宙和任何事情的答案。
</div>

<div class="mt-8 text-sm opacity-50">
谢赛宁 · 商业访谈录 · 语言及世界工作室 · 2026年3月
</div>

<div class="mt-4 text-xs opacity-40">
Running late again, toes to the edge of my mouth<br/>
Choose my hand, turn the corner<br/>
Sky explodes, colors I swear I've never known
</div>

</div>
