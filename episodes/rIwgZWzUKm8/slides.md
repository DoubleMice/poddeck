---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '133. 对谢赛宁的7小时马拉松访谈：世界模型、逃出硅谷、AMI Labs、两次拒绝Ilya、杨立昆、李飞飞和42'
info: |
  张小珺 × 谢赛宁，7 小时马拉松对谈，
  从童年到 AMI Labs，从 representation 到 world model。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 7 小时马拉松对谈

<div class="text-3xl mt-6 opacity-90">谢赛宁 × 张小珺</div>

<div class="mt-8 text-lg opacity-70 leading-relaxed">
世界模型 · 逃出硅谷 · AMI Labs<br>
两次拒绝 Ilya · 杨立昆 · 李飞飞 · 和 42
</div>

<div class="mt-12 text-sm opacity-60">
NYU Courant · AMI Labs 联合创始人 · 纽约
</div>

---

# 这场对谈为什么值得一听

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一次播客访谈

谢赛宁本人的开场白：「First time doing a podcast. First time doing an interview.」

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 7 小时

完整覆盖从 SJTU ACM Class 到 NYU、FAIR、Google、AMI Labs 的全部旅程。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一种少见的态度

「我不是天选之子，我是普通的那个。」拒绝叙事，拒绝包装。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一个具体的反共识

LLM 不是 AGI 的地基；representation / world model 才是。和 Yann 一起下注。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 两次拒绝 Ilya

2018 年拒了 OpenAI 去 FAIR；2024 年又拒了 SSI 留在 NYU。两通电话他全程几乎没说话。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一个新公司的诞生

AMI Labs：Yann LeCun 任 Executive Chairman，6 位 co-founders，团队 25 人，目标在 LLM 之外另起一条路。

</div>

</div>

---

# 「我不是天选之子，我是普通的那个」

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"I have gained the courage to be disliked"

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

「我比较内向，常常不知道哪些事该说、哪些值得说、哪些是别人想听的。但慢慢年纪大了，就 OK，我得到了被讨厌的勇气。」

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-3 bg-blue-50 rounded border border-blue-200">
<div class="text-sm opacity-60">高中</div>
<div class="font-bold mt-1">信息学 + 数学竞赛</div>
<div class="text-xs mt-1 opacity-70">两个奖项</div>
</div>

<div class="p-3 bg-green-50 rounded border border-green-200">
<div class="text-sm opacity-60">提前批</div>
<div class="font-bold mt-1">SJTU ACM Class</div>
<div class="text-xs mt-1 opacity-70">放弃高考</div>
</div>

<div class="p-3 bg-orange-50 rounded border border-orange-200">
<div class="text-sm opacity-60">入学前的暑假</div>
<div class="font-bold mt-1">"a highlight of my life"</div>
<div class="text-xs mt-1 opacity-70">两个月在宿舍打 Dota</div>
</div>

</div>

---

# 童年：父亲的书房 + 9 岁的电脑

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**父亲**：心理学背景，电视台工作，扛摄像机；家里一面墙都是书。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded mt-3">

**母亲**：做生意，带他到处旅行，最早的记忆是 4-5 岁。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded mt-3">

**9 岁**：第一台电脑 → 一盒一盒地买游戏。

</div>

</div>

<div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**互联网爆发**：第一次理解什么叫 content，开始有表达欲。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded mt-3">

**新浪博客**：很多博客文章。最受欢迎的多是 forced melancholy —— 强行忧伤。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mt-3">

**饭否（Fanfou）重度用户**：王兴那个时代。账号现在还在，"看着挺难受，但留着，让它成为互联网记忆的一部分"。

</div>

</div>

</div>

---

# SJTU 的「学生论坛」：一个反 Yao 班的设计

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 俞勇老师设计的必修课

每人在班里做 **45-60 分钟 presentation**，主题是任何东西**——但不能跟学习有关**。

哲学、历史、社会、科学（也可以），但不能讲课程。

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 谢赛宁的对照

「Yao 班可能更卷一些。我没去过 Yao 班所以不敢说，但 ACM Class 整体在一个比较 relaxed、liberal-arts 的氛围里走。」

「我不害怕竞争，但**真心不喜欢过度竞争**——过度竞争肯定不利于创新。」

</div>

</div>

<div class="mt-6 p-4 text-center bg-purple-50 border border-purple-200 rounded">

**ACM Class 排名**：30-40 人里大概排在 teens（十几名）。「就是不太逼自己。」

</div>

---

# 侯晓迪 + 「上交大学生生存手册」

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 7 行代码的 CVPR

侯晓迪本科期间，发了一篇 CVPR：核心算法只有 **7 行代码**，解决了一个重要问题。

「在那个年代，本科生发 top conference 是闻所未闻的事。」

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 不止是 CVPR

后来他主笔写了《SJTU 学生生存手册》。「现在网上还能找到 archive。」

</div>

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 手册讲什么

- 中国高等教育模型哪里有问题
- 如何度过你想要的大学生活
- 研究的目的不是发论文，是探索无限的未知
- 怎么逃课、怎么更快完成作业

</div>

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded">

「**如果一个人把绩点当成最高追求，那他就是这个体系的祭品**。」

—— 谢赛宁的转述

</div>

</div>

</div>

---

# 「这个世界总是不想让我做我想做的事」

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"The world always doesn't want me to do this... but I insist on doing exactly what I want to do."

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 大三实习的默认路径

ACM Class 大部分人会被送去 **MSRA**。但当时 MSRA 视觉组（马毅、孙剑、何恺明）不愿意收 ACM Class 本科实习生。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 他自己 cold-email 申了 NUS

新加坡国立颜水成的实验室，整件事都是自己搞定的——**没告诉俞勇**。

谈完了再跑去说："我不去 MSRA 了。"

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

俞勇沉默了几秒。最后说：好，你去吧。「这件事之后，颜老师组就成了 ACM Class 学弟学妹的可选项。」

</div>

---
layout: two-cols
---

# 为什么是「视觉」？

回到童年的问题：「如果必须去掉一个感官，哪个最难接受？」

- 没有听觉、嗅觉、触觉、味觉…… 还能勉强活
- **没有视觉**：不能看动画、不能看电影、不能玩游戏
- 「会失去一个人的独立性」

<br>

后来读到的事实：

- 视觉皮层占大脑 ~30%
- 但当大脑看到一张图，约有 **70%** 的区域被激活
- "all of us humans are visual creatures"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vision-arms-race.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 5.3 亿年前那个突然张开的眼睛

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

寒武纪以前，深海里没有光，所有生物没有眼睛，地球上可能就那么寥寥几个物种。

突然某一天，**某个生物发展出了视觉**——虽然只能看到微弱的光。但它能找到猎物，能躲避捕食者。

</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded">

**军备竞赛**开始了：你不进化出更强的视觉，就会被吃掉。

寒武纪大爆发的一种主流理论：**视觉的军备竞赛触发了物种大爆发**。

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded text-lg">

「眼睛是大脑唯一暴露在真实世界中的部分。其他部分都被颅骨藏起来了。」

「**Solving vision isn't about solving vision itself, but about solving intelligence itself.**」

</div>

---

# UCSD：4 月 15 号 deadline 前被救起

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 申请季的至暗

PhD 申请几乎全军覆没。

「我可以去做推荐系统、机器学习方向。」要妥协了。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded mt-3">

### 临时疯狂 cold email

凌晨 3 点宿舍楼下接屠卓文老师的电话。

</div>

</div>

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 一周后又一个变故

屠老师从 UCLA 离职，去向不能透露。

「你可以留 UCLA、可以等我、可以跟我去某个我也不知道在哪的学校。」

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded mt-3">

### 谢赛宁立刻说

"I choose you."

最后一起去了 **UCSD**——当时排名远不如 UCLA。「重要的是和谁一起做什么，不是 ranking。」

</div>

</div>

</div>

<div class="mt-3 p-3 text-xs bg-purple-50 border border-purple-200 rounded">
他成了屠卓文老师在 UCSD 招的第一个学生。
</div>

---

# 屠卓文那一代美国 Vision 学者：从零开始

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 他们写过什么

为了做一个 image segmentation 任务，**屠老师独立写了大约 50,000 行 C++**——包括底层、distributed training 的全套。

「有 PyTorch 之前的世界你想象不到。」

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 朱松纯 → 屠卓文 → 李飞飞

「这条路原本不存在。需要他们这一代——朱松纯、屠卓文、再到李飞飞——一步步铺路，我们才有路可走。」

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-lg italic">

「我对小红书上『谢赛宁在国内默默无闻、到了美国突然爆发』的说法不接受。**事情其实是非常缓慢、非常 gradual 的过程**。」

</div>

---

# Marr Prize Honorable Mention：以为人生开始了

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 第一篇：DSN

**Deeply Supervised Nets**（2014-2015）。

NeurIPS 投稿因为论文里一个数学公式漏了平方被拒——纯粹 typo。

后来转投 AISTATS，**10 年后拿了 Test of Time Award**。

</div>

</div>

<div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 第二篇：HED + Marr Prize

**Holistically-Nested Edge Detection**，ICCV 2015 拿了 **Marr Prize 提名**——CV 顶会最高荣誉。

「我心想：哇，我也年少成名了。我会一直这么努力，我会有更多的 best paper……」

</div>

</div>

</div>

<div class="mt-5 p-4 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"Unfortunately, this was my last time receiving Best Paper." —— 之后 10 年没有再拿过

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

「**别在 timeline 上每一个点上做评估**——所有评估其实都是积分。Don't worry about a point estimate.」

</div>

---

# 5 段实习 + 一辆破车：游牧研究员

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
<div class="font-bold">NEC Labs</div>
<div class="text-xs mt-1 opacity-70">Cupertino · CVPR paper</div>
</div>

<div class="p-3 bg-green-50 rounded border-l-4 border-green-500">
<div class="font-bold">Adobe</div>
<div class="text-xs mt-1 opacity-70">SF · 没产出</div>
</div>

<div class="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
<div class="font-bold">Meta / FAIR</div>
<div class="text-xs mt-1 opacity-70">遇到何恺明</div>
</div>

<div class="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
<div class="font-bold">Google Research</div>
<div class="text-xs mt-1 opacity-70">video</div>
</div>

<div class="p-3 bg-red-50 rounded border-l-4 border-red-500">
<div class="font-bold">DeepMind London</div>
<div class="text-xs mt-1 opacity-70">RL，"too cold"</div>
</div>

<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-500">
<div class="font-bold">这五年</div>
<div class="text-xs mt-1 opacity-70">每年一段</div>
</div>

</div>

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

**形态**：每年夏天，把宿舍转租掉，开破车从南加州一路开到北加州，**8 小时车程，多数时候一个人**。两个箱子是全部家当。

</div>

<div class="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**自己反思**：「我做了 5 段实习，**有一半没什么产出**。我现在跟学生说，没产出不是世界末日——这是接受现实的过程。」

</div>

---

# 最后一个月，何恺明出现了

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Meta 实习剩 1 个月

前两个月没产出。Manager 把谢赛宁交给刚入职 FAIR 的何恺明：「你来带他吧。」

</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 何恺明：第一次来美国

不会开车——谢赛宁开车带他出去吃饭。

不会用 Linux——之前在 Microsoft 全是 Windows。谢赛宁教他怎么用集群。

</div>

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 「我们去打 ImageNet 吧」

剩一个月，居然就这一个月里完成了 **ResNeXt**——ImageNet 那年的第二名。

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 名字的彩蛋

> "Why is it called ResNeXt? Kaiming said: this is **Xie's ResNet**."

ResNeXt = Res-X-Next，里面把 Xie 藏了进去。

「**Kaiming's magic** 是把任何普通的 idea 变成金子。」

</div>

</div>

</div>

---
layout: two-cols
---

# 一份 6 个月的研究循环表

何恺明的方法论，谢赛宁完整继承下来：

- **第 1-2 月：探索**——不是坐着想，而是动手 hack、跑 baseline、找 signal
- **第 3-4 月：放大 + ablation**
- **第 5-6 月：写作**——目标是 deadline 前一个月已经完成

「研究是 nonlinear 的：最好的工作经常在第 5 个月才转向、突然完成。**起点 idea = 终点 idea，就是无聊的论文**。」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./research-cycle.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 「Increasing input」：研究里最重要的一句话

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"It's about increasing input."

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

何恺明说：**坐在那儿想，是想不出 idea 的**。能想出来的只有三种可能：

1. 你比世界上所有人都聪明 —— 概率极低
2. 同时有 100、1000、10000 人在想同一个 idea
3. 这是个 bad idea，别人试过很多遍都失败了

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

「真正的 idea 是在 **大量阅读、大量实验、大量讨论** 的过程中、被 gradient 推着浮现出来的。**那个 gradient 才是你真正的 idea 来源**。最坏的研究：起点和终点完全一致——你的 idea 很无聊，论文也无聊。」

</div>

---
layout: two-cols
---

# 研究是无限游戏

不是棋手、不是奥运选手——这两种都靠最差一步定胜负。

研究像发明家：**一辈子只需要成功一次**。运气好两次。但不需要 100 次。

「I called it research: the infinite game.」

横轴是单篇工作的质量；纵轴是它对你整个 career 的影响——这条曲线是**非线性**的。

烂工作不影响你；中等工作没人看；只有 signature work 把人推上去。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./research-curve.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 「我自己一篇 signature work 都没有」

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

谢赛宁的自我评价：「过去十几年深度学习史，我心中能称为真正 signature work 的，大概有 **20-25 篇**。」

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-2 bg-blue-50 rounded border border-blue-200">LeNet</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">AlexNet</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">ImageNet</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">ResNet</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">R-CNN / Mask R-CNN</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">Transformer</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">GPT-3 / BERT</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">CLIP</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">ViT</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">GAN</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">NeRF</div>
<div class="p-2 bg-blue-50 rounded border border-blue-200">Gaussian Splatting</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

「**我一篇都没有。** DiT 算 0.25——它是 follow-up，沿研究前沿的切线推一小步。我还年轻，还可以再努力。」

</div>

---

# 表象之外：一份 Excel + 50,000 行代码

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### FAIR 的「第一课」

不是教代码、不是教论文写作——**教你如何用 Excel 表格管理实验**。

「设计这张表格本身就是一种研究：哪些列、哪些 metric、哪些 control variable，决定了你能不能从每个实验里挖出 signal。」

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 何恺明的 baseline 哲学

「**研究的天花板取决于你 baseline 有多好**。」

baseline 弱 → 你的提升看起来好像很大，其实是骗自己 → 你扎不出真东西。

baseline 强 → 任何提升都是真突破。

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Kaiming 在 FAIR 干过的一件事

FAIR 拿到 5000 张 TPU——但研究员都嫌难用。「我来。」于是 Kaiming **一个人** 从零搭起了 FAIR 在 TPU 上的全部 infrastructure。MoCo、MAE、DiT 都跑在它上面。

</div>

---

# Representation：穿越所有 buzzword 的主线

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"Representation is a timeless theme."

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 反例：NAS

Neural Architecture Search 当年极火。

「**整个领域因此浪费了大约两年。** 出了几千篇论文，最后什么都没留下。」

如果你当时把自己定义为「我是搞 NAS 的人」，两年后你网页要全删了重写。

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 正面：Representation Learning

12 年过去，仍是没解决的核心问题。

去年一个学术 workshop 标题，仍叫《Representation Learning with Induced Structural Priors》——和谢赛宁博士论文同名。

「这个领域走得快，但**根的问题没变**。」

</div>

</div>

---
layout: two-cols
---

# 一棵树：根 / 数据 / 目标

representation 是树根，向上分出三个枝：

- **architecture**: DSN, HED, ResNeXt, DiT
- **data**: images, 3D, video, VQA
- **objective**: MoCo, MAE, REPA, RAE

「我所有的工作都是在这三个轴上的——但它们都在同一棵树上。」

「植根处是 representation。**走向枝头不如往下扎根。**」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./research-thread.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# MoCo + MAE：自监督的过山车

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### MoCo（Momentum Contrast）

第一次让 contrastive learning 真正在视觉上 work。

V3 用了 Transformer + scale up，**第一次在所有任务上超过 ImageNet supervised pre-training**。

「我当时心想：完了，问题解决了，未来无限光明。」

</div>

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### MAE（Masked Autoencoder）

去掉 contrastive，直接做 masked image prediction。

「我们当时觉得 MAE 至少应该拿个 best paper 吧？没有。**scale up MAE 解决一切？也没有**。」

</div>

</div>

</div>

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 一个未明说的失败

「自监督学习一直没能像 GPT 那样 scale up。我们没能交付一个**真正可以指引未来 paradigm 的东西**。」

「论文是好的，影响是真的——医学影像、机器人、3D 都用它的方法。但没产生 LLM 级别的 impact。」

</div>

---

# DiT：被 CVPR 拒绝后被 Sora 拥抱

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 起点不是 DiT

谢赛宁和 Bill Peebles（现在 Sora 负责人）想研究的本来是：

**diffusion 学到的 representation 跟 self-supervised 比谁好？**

</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 探索中的副产物

实验需要把 diffusion 从 U-Net 替换成 ViT 来做对比——结果发现这个新架构 **更 efficient、更 scalable、code 也更简洁（MDL 更小）**。

</div>

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### CVPR：novelty 不够

LeCun 在 Twitter 吐过槽——你的论文没有大段数学、没有复杂结构，**审稿人不买单**。

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 一个字没改，转投另一个会议——Oral

「这件事让我彻底想明白：审稿是一个巨大的 random process。」

</div>

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 然后 Sora 来了

Sora 论文里 DiT 被 cited by name。「这是我们当时唯一的安慰。」

</div>

</div>

</div>

---

# Kaiming 的 OCD：不是研究，是审美

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 论文 deadline 前一个月就写完

别人在熬夜冲 ddl，他像个 free spirit 在最后一个月里**逐字逐句打磨**。

</div>

<div class="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### "60% 填充率"

每一行至少要被文字填满 60-70%——「让 layout 看起来 elegant」。

「论文不是给你看的，是**给别人看的**。**通信接口要好看**。」

</div>

</div>

<div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Diamond Sutra

何恺明送过谢赛宁一本《金刚经》。

> 一切有为法，如梦幻泡影。<br>
> 凡所有相，皆是虚妄。

</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 研究品味的源头

「**穿透论文表象，问背后真正的 substance 是什么**。这就是品味。」

参照：康德的物自体；叔本华的世界即意志与表象。

</div>

</div>

</div>

---

# 童年想当导演 + Robert McKee 的《Story》

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 谢赛宁的童年志愿：电影导演

后来发现：研究和拍电影**没那么不一样**。

- 都需要发现一个 theme
- 都需要 exploration
- 都需要冲突

</div>

</div>

<div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 推荐书：Robert McKee《Story》

电影编剧教科书，但讲的是研究：

「**好故事必须由冲突驱动**。研究也一样——你需要一个足够强的 control group / experimental group 才能看出 signal。**Conflict = gradient**。」

</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### MDL：Minimum Description Length

「我看代码——**短而能做同样事情的代码**，方法一定比上千行的复杂系统更好。简单的 solution always wins. 这也是研究品味。」

</div>

---

# 一个反 Hype 的人

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded">

「我现在某种程度上是个 **fame 的受害者**。」

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 最不能接受的

小红书写「**xx 团队**」+ 头像。

「请不要把我的照片放上去。请不要写『谢赛宁的团队』。**多给真正做工作的年轻人 visibility**。」

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### Hannah Arendt 的影响

她不喜欢 "impact" 这个词——「impact 太 aggressive，太 masculine。」

她做研究是 for understanding itself。「能让别人理解，本身就是一种 sense of family。」

</div>

</div>

<div class="mt-5 p-4 text-lg italic bg-purple-50 border-l-4 border-purple-500 rounded">

「If we can give the world another layer of understanding, **the total intelligence on Earth would increase**. And increasing total intelligence on Earth is never wrong.」

</div>

---

# Fei-Fei：定义问题，是真正的工作

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 主流叙事

Fei-Fei 的最大成就 = ImageNet 这个数据集。

</div>

<div class="mt-3 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 谢赛宁的看法

「这不是一个 dataset 的事。**2011 年前后，image classification 根本不是一个被良好定义的问题**。」

「**清楚地把问题定义出来——比建造数据集本身重要得多得多**。」

</div>

</div>

<div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 「North Star」

Fei-Fei 经常谈 North Star。

「Vision 的 North Star 到底是什么？我一直在问自己。」

</div>

<div class="mt-3 p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 联合作品

- **Thinking Space**：multimodal 模型的 spatial intelligence
- **Cambrian-S**：video / 时空认知，**a position paper**

</div>

</div>

</div>

---
layout: two-cols
---

# Cambrian-S：一段 5 阶的阶梯

L0 → L1 → L2 → L3 → L4

每一阶都比上一阶离 World Model 更近一步。

- **L0**：纯 LLM，柏拉图洞穴里的影子
- **L1**：Multimodal VQA，"show & tell"
- **L2**：Streaming event cognition——视觉流
- **L3**：Spatial cognition——单帧背后的世界状态（贾樟柯的长镜头）
- **L4**：Predictive World Model

「我不试图定义 world model 是什么。但我可以定义**哪些能力是必需的**。」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cambrian-ladder.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 贾樟柯、毕赣，与一段 long take

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">

「**Life itself is one long take. Our eyes are our camera.**」

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

贾樟柯告诉谢赛宁：

「电影的 timeline 是线性的。但每一个时间点上，**都需要一个空间来承载它**。即使你看到的是静帧，背后是一整个空间的 global state——那超越了任何一帧本身能编码的东西。」

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

这就是 Cambrian-S 想表达的：**多模态智能不能停留在 image-level VQA**。

「视频是 Saining 想做的事——即使难，即使数据量大。」

</div>

---

# 两通和 Ilya 的电话

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 2018: 拒了 OpenAI

「我刚拒掉 OpenAI offer。然后 Ilya 打电话过来。」

「他**很生气**。"Why didn't you even discuss it before rejecting? Is the money not enough?"」

「我只能含糊回答，挂掉电话。」

</div>

</div>

<div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 2024-07: 拒了 SSI

SSI 刚成立。Ilya 邮件邀约。

通话主题不是钱，是哲学：**how to give AI the ability to love**。

谢赛宁问：你怎么看 multimodal、computer vision？

Ilya：「**already solved well enough**.」

</div>

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

「于是我就明白：SSI 走的是 language-only 的路。**那不是我想走的路。**」

</div>

---
layout: two-cols
---

# Ilya 的两个截然不同

第一通电话只有「为什么拒？是钱不够吗？」

第二通整个聊「**如何让 AI 学会爱**」。

「但是——爱来了，恨也来了。两面同体。」

谢赛宁的反问：「人类这么信任自己的孩子，为什么对 AI 这种新生命形式如此忧虑和恐惧？」

「我没有答案。但 world model 是技术上让 AI 更 controllable、safer 的方式。」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ilya-calls.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Old soldiers never die — they just fade away

<div class="mt-4 p-6 text-2xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"I would say LLMs will eventually fade."<br>
<span class="text-base opacity-80 not-italic mt-2">— "Old soldiers never die, they just fade away."</span>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### LLM 的位置

「LLM 是**通讯工具**，不是 thinking map，不是 decision-making tool。**人用语言时总有 intention**——你带着目的提问，希望得到答案。」

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 但 World Model 不是

「我们大脑的 world model **在背景里默默运行**——很多决策是它在你意识到之前就做出来的（Libet 实验）。」

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-lg italic">

「LLM is **virtual intelligence**. World model is real. Real means: it must interact with the real world.」

</div>

---

# 「语言其实是一种鸦片」

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded text-lg">

> "Language is actually a poison, or language is actually an opiate."

</div>

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

「加更多 language，模型 always 看起来更 happy。这说明 language 是有用的。」

「**但它是一根拐杖**——你一直依赖，腿就练不出来。」

</div>

</div>

<div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### Yann 的视觉腿比喻

「每个人现在都在拄拐杖——language 就是那根拐杖。能走，但不能跑，**不能参加奥运**。」

「腿——视觉表征——还没练好。」

</div>

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### Saining 的核心忧虑

「**我极度担心 language 污染 vision**——这件事已经在发生了。」

</div>

</div>

</div>

---

# Vision ≠ Language：完全不同的问题域

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### Language 解决的问题

- **离散** token
- 在 **semantic / label space** 里
- 几千年文明已经压缩、上传到互联网
- LLM 训练 = strongly supervised（不是真正的 self-supervised）
- 它的 scaling law 形态：1:1 ratio data/params

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### Vision 解决的问题

- **连续 + 高维 + 噪声**
- **hierarchical** representation（抽象 = 泛化）
- 大规模并行处理
- 跨形态的 feature sharing：儿童画的狗 = 卡通狗 = 真狗
- **可能根本不需要 LLM 那种 scaling law**

</div>

</div>

<div class="mt-5 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

「**这是为什么我说 LLM 不是 Bitter Lesson 的体现**——language 是人类几千年最 clever 的人造物。LLM 在使用一个高度结构化的人造物作输入，反而违背了 Sutton 的精神。」

</div>

---
layout: two-cols
---

# 大脑是 8 个数量级的压缩器

人类感官输入约 **10⁸–10⁹ bits/s**。

行为输出约 **10–100 bits/s**。

整个 pipeline 只用 **20W** 功率。

「**这才是 intelligence 的核心**——它知道什么 important、什么不 important，把绝大部分 noise 滤掉。」

「LLM 想用 token 序列模拟这个？转头看你 5 度，几百帧。Transformer 把每个 token 同等对待——完全不合理。」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./brain-bandwidth.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 「我们要 download 人类」

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">

「上一个时代是 download 互联网。下一个时代是 **download humanity**——人眼看到的数据。」

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### Yann 的对比

「一个 4 个月大的婴儿看过的视频，**信息量 ≥ 当前最强 LLM 的全部 30 万亿 tokens**。」

「**所有这些训练 token，加起来等于 YouTube 上 30 分钟的上传量**。」

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 但 YouTube 数据极难拿

「这不是 copyright 问题，是 ToS 问题。下两个视频，你的 IP 就被 YouTube 封了。」

「ByteDance 有巨大优势——但他们也收过很多 cease-and-desist letter。」

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

「先用互联网视频开始；然后才是真正去 collect 人眼看到的数据。这条路有 barrier，但不是不可能。」

</div>

---
layout: two-cols
---

# AI 价值链是一种引力

「整个 AI 产业有一条 value chain：narrative → benchmark → resource → researcher。」

「**这条链已经把所有人吸下去了**——包括 OpenAI 自己。一年前定义问题的他们，现在也在被 chase。」

「我在 Google GenAI 兼职两年的真实理由：**我想知道你们在做什么，这样我就知道学术界不该做什么**。」

「Cambrian-S 之类的 position paper，是对这条引力的局部抵抗。」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./value-chain.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 「Medium Paper Trap」：副教授的中等收入陷阱

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

「university 是一个非常好的平台——它给我足够空间找到我想做的事。」

「但走到现在，**continuing further might fall into what I call the medium paper trap**——像 middle income trap。」

</div>

<div class="mt-5 p-5 bg-red-50 border-l-4 border-red-500 rounded">

**Medium Paper Trap**：

- 你能持续发出体面的论文
- 但在资源约束下，**你的 idea 很难被真正放大成 breakthrough**
- 整个体系把你框在中等收益区

</div>

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">

「我大概有一周在挣扎：要不要这次跳出 academia？要不要和 Yann 一起做？」

「最后想清楚：**我现在还有没有两年好的精神状态可以做完全 exploratory research？很难说。**」

</div>

---

# 一个 Monday：Yann 主动开口

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 两周前的预兆

某个 mentor 跟 Saining 说：「问问 Yann。他在 Meta 好像不开心。」

那时还没有 Alexander Wang 加入 Meta、还没有 FAIR layoffs——表面上一切平静。

</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 第一反应

「Yann 是 AI godfather，他怎么会出去做 startup？」

</div>

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 两周后的 1:1

还没等 Saining 开口——

「Yann said: **Saining, don't tell anyone yet, but I've already decided. I want to start a company.**」

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Saining 的反应

「我问他：你想做什么？business model 是什么？

然后我意识到：**这跟我想做的事完全 aligned**。」

</div>

</div>

</div>

---

# AMI Labs：6 个 co-founder + 25 人

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 角色

- **Yann LeCun**：Executive Chairman / 大船的 captain
- **CEO + COO**（COO 曾任 Meta 南欧 VP）
- **Pascale Fung**：CRIO，连接 research 与 product
- **VP of World Models**：原 JEPA team 的 director Mike
- **Saining**：联合创始人，研究方向负责人

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 反 Silicon Valley 的选择

「纽约 != 硅谷。**Bay Area 是个 pure tech bubble**——大家全在做产品。」

「纽约更接近真实生活。我对 product 的想法、特别是 wearable 类的，都来自纽约街头的观察。」

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

「我们是一群 **mid-career entrepreneurs**——不是已经功成名就的 distinguished professor，也不是 18-19 岁能跑去深圳工厂打地铺的少年。」

</div>

---

# 「我们不是含着金汤匙出生的」

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"We weren't born with a silver spoon... I think we're an underdog."

</div>

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 看似的「金汤匙」

- Yann LeCun 当 Executive Chairman
- 第一轮就是 mega round
- 估值 3 billion pre-money

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 实际的位置

- 在 LLM 阵营里，「Yann 是个 net **half-support, half-opposition**」
- 投资人也分两半
- 与 LLM 调动的资源相比，**这个数字是个零头**
- 「**we're surviving under industry pressure**」

</div>

</div>

<div class="mt-5 p-5 bg-green-50 border-l-4 border-green-500 rounded text-lg">

「我喜欢这个 underdog 身份。**The more you don't believe in me, the happier I am.** 你可以不信我们——那让我们走着瞧。」

</div>

---

# Yann 这个人：4 个爱好 + JEPA 人格

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 4 大爱好

- 制作模型飞机
- 天文摄影（Zoom 背景的星云是他在自家后院拍的）
- 电子音乐 / Jazz（**他网页上有 NYC jazz 推荐列表**）
- 帆船——三月又要去加勒比

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Kaiming 对 Yann 的形容

「Yann 是个 **从 16 岁青春期一路延续到 65 岁** 的人。」

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 一种少见的领导风格

「Yann 不太管 day-to-day。他**靠 vision 吸引人**。给你足够 trust、出现 turbulence 时及时 correct——剩下你自己来。」

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 「他自己就是 JEPA」

「他 holds fast 在自己的 logical principles 里，不被外部干扰。**这就是 JEPA 在 latent space 里做 prediction 的精神**。」

</div>

</div>

---

# 「My integrity as a scientist cannot accept this」

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

Meta 内部曾有人跟 Yann 说：

「Meta 现在要做 LLM，你能不能别再在公开场合 diss LLM 了？」

</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded text-xl italic">

Yann 的回答：

"My integrity as a scientist cannot accept this."

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

「他真正的 stubbornness 是有界的——记者说他『can never be moved』，他自己更正过：『**I can absolutely be moved, but moved by facts, not by orders.**』关于 world model 这件事不是 trend 起来才说的——2022 年那篇 "A Path Towards Autonomous Machine Intelligence" 已经把整套架构写清楚了，全是数学公式。」

</div>

---
layout: two-cols
---

# 我和 JEPA 的三个阶段

「我也经历了完整的转变：」

**1. 怀疑 JEPA**：以为它只是另一种 self-supervised algorithm。

**2. 理解 JEPA**：发现 LeJEPA 的严格证明——一个好的、downstream-agnostic 的 representation 必须是 isotropic Gaussian。

**3. 成为 JEPA**：

「**JEPA 不是一个具体的模型，不是某种特定算法。它是一个 cognitive architecture——一片很大的海洋**。这片海洋上可以有很多艘船。」

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./jepa-stages.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Sutton 的反话：松鼠的智能才是难的

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

Saining 之前一直被这个问题困扰：

「LLM 能写代码、IMO 拿金、能助力上火星——这些事都很厉害。怎么反驳？」

</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded text-lg">

Rich Sutton 的回答：

「**你觉得这些事情很厉害？随便你。但我不这么觉得**。我认为造一只松鼠的智能才是难问题。」

「**当你能造出一只松鼠**——它有自己的目标、有自己的内在 reward、知道饥饿、有情感、能社交——**之后写代码、上火星、登月，那都是简单的事**。」

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

「你需要 let go of human arrogance。Sutton 的视角是 universe / creator 视角——能 recreate 一只松鼠 > 人类文明最近 8 秒做出的所有东西。」

</div>

---

# 「世界模型」≠ 「词模型」（Jitendra Malik）

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### Saining 不喜欢 "world model" 这个词

「太 hyped。现在变成万能口号——所有人都说自己在做。」

</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 唯一让他喜欢的一点

来自 Berkeley 的 Jitendra Malik：

「我喜欢这个词，是因为它让我能告诉别人——**I'm doing a World Model, not a Word Model**.」

(W-O-R-L-D vs W-O-R-D)

</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Saining 的具体定义**：World Model 必须具备 ① 理解物理世界 ② 足够的 associative memory ③ planning + counterfactual reasoning ④ 可控可安全——这恰是当前 LLM 必须 fine-tune 出来的东西，真正的 world model 不需要这样做。

</div>

---

# 滑雪、勇气、与 JoJo

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 一个新爱好：滑雪

「以前我是不爱运动的人。最近开始滑雪，居然学到很多。」

- 滑雪是关于**平衡**
- **要把肩膀指向下坡**——counter-instinct
- 越害怕越往后倾，越倾越摔
- 「只有完全放弃恐惧、有足够勇气，你反而更稳定。」

</div>

</div>

<div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 一句话

> "the moment you jump, the fear disappears."

</div>

<div class="mt-3 p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 引自 JoJo 的奇妙冒险

「**人类的赞歌是勇气的赞歌。**」

「这其实是我对 entrepreneurship 的理解。」

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

「I think you never walk alone」——一个 Liverpool 球迷的隐喻。

</div>

</div>

</div>

---

# Klopp：「我不是 special one，我是 normal one」

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

Mourinho: "I am the special one."<br>
Klopp: "**I'm not the special one. I'm the normal one.**"

</div>

<div class="mt-5 p-5 bg-green-50 border-l-4 border-green-500 rounded">

「Klopp 说他在球队里的角色是一颗**电池**——希望通过自己的能量，给别人 empower。」

「**I also want to be that kind of person.** 不论是 academia 的学生还是 startup 的团队。」

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

「**Yann 是个巨大的电池**。他点亮了我。但我希望让这股电流通过我，再传得更远。」I'm a KOP for over 20 years. 我和 Liverpool / Klopp 有种 compatible spirit。

</div>

---

# 「我每天都在被 discouragement 打击」

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-lg">

「**I feel discouraged every day**——这是 researcher 的宿命。」

「研究像在没有光的房间里摸索。**真正能让人感到喜悦的时刻，可能只占 5% 到 10%。**」

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 但 Yann 不一样

「Yann 极其乐观。**因为他经历过 AI winter——他证明了自己是对的，反对者是错的**。」

「换我经历过那种事，我大概也不会忧郁。」

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 看了 20 遍同一个 talk

「Yann 每次给同一个 talk。slide 老实说有点丑。但**我看了 20 遍，每次都有新理解**。

不是 talk 变了——是我变了。」

</div>

</div>

---

# 在 Washington Square Park 的 5 分钟

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

每天从家走到 NYU 办公室，要穿过 Washington Square Park。

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 bg-green-50 rounded border border-green-200 text-center">街头钢琴</div>
<div class="p-3 bg-yellow-50 rounded border border-yellow-200 text-center">舞者</div>
<div class="p-3 bg-blue-50 rounded border border-blue-200 text-center">推婴儿车的妈妈</div>
<div class="p-3 bg-orange-50 rounded border border-orange-200 text-center">下棋的老人</div>
<div class="p-3 bg-purple-50 rounded border border-purple-200 text-center">坐台阶发呆的年轻人</div>
<div class="p-3 bg-red-50 rounded border border-red-200 text-center">用笔记本学习的 NYU 学生</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

「The world is much bigger than we imagine. Not everyone cares about what AI is. 他们有自己的生活——也许 AI 有一天会影响他们。但我们作为 researcher 该做什么？这正是 Ilya 当年想跟我聊的——只是当时我还没领悟到。」

</div>

---

# 核心金句（上）

<div class="text-xs opacity-60 mb-3">这场马拉松对谈里最值得记住的几句（5/10）：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"I have gained the courage to be disliked."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于第一次接受访谈</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"The world always doesn't want me to do this... but I insist on doing exactly what I want to do."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于读书生涯里反复发生的事</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Solving vision isn't about solving vision itself, but about solving intelligence itself."
<div class="text-xs opacity-60 mt-1 not-italic">— 寒武纪 + 5.3 亿年前那个突然张开的眼睛</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"It's about increasing input."
<div class="text-xs opacity-60 mt-1 not-italic">— 何恺明教给他的研究方法论</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"You only need to succeed just once in your lifetime."
<div class="text-xs opacity-60 mt-1 not-italic">— Research: the infinite game</div>
</div>

</div>

---

# 核心金句（下）

<div class="text-xs opacity-60 mb-3">（5/10 续）</div>

<div class="space-y-2">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"LLMs will eventually fade. Old soldiers never die — they just fade away."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 LLM 在世界模型时代的位置</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"Language is actually a poison, or language is actually an opiate."
<div class="text-xs opacity-60 mt-1 not-italic">— 警告：language 污染 vision 已经在发生</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"I'm doing a World Model — not a Word Model."
<div class="text-xs opacity-60 mt-1 not-italic">— Jitendra Malik 的双关</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"The moment you jump, the fear disappears."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 entrepreneurship 与滑雪</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"I'm not the special one. I'm the normal one."
<div class="text-xs opacity-60 mt-1 not-italic">— 借自 Klopp，作为标题</div>
</div>

</div>

---
layout: end
---

# 「答案，最终也许就是 42。」

<div class="mt-8 text-lg opacity-80 italic">
"You'd need a computer as large as the Earth, or the entire universe,<br>
to tell you the answer about life, about the universe, about anything.<br>
And the answer might ultimately be 42."
</div>

<div class="mt-12 text-sm opacity-60">
谢赛宁 × 张小珺 · 2026<br>
NYU Courant Institute / AMI Labs / 纽约
</div>
