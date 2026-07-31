---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '149. 亲历中美neo labs资本狂潮，和清华刘子鸣聊：AI for AI、机制可解释性和Max Tegmark'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 亲历中美 New Labs 资本狂潮

<div class="text-lg opacity-70 mt-4">AI for AI、机制可解释性，与一条非典型的 Auto Research 路线</div>

<div class="mt-8 text-sm opacity-50">
刘子鸣 · 清华大学人工智能学院助理教授 & 元环智能首席科学家<br/>
MIT 博士 · Max Tegmark 门生 · KAN 网络一作
</div>

<div class="mt-6 text-xs opacity-40">
商业访谈录 · 语言即世界工作室 · 2026-07
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🎓 从物理到 AI 的进化**  
北大物理→MIT，从"盛宴已过"到 GAN 网络，一个物理学徒如何成为 AI 研究者。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**🧠 Physics of AI**  
不只是端到端地训练——从空间、时间、平行宇宙三个维度解剖 AI 的内部机制。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**🔄 AI for AI 的独特路线**  
主流路线是 Coding Agent 直接搞研究，刘子鸣主张中间必须经过 Physics of AI，先理解再优化。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**🔥 疯狂的 New Lab 浪潮**  
2026 年中美两地同时涌现新型实验室，"太疯狂了"——连续融资，种子轮加轮再加轮。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**🔮 元模型与 Vibe Training**  
60 天人体实验证明元模型可能，终极愿景是人人可训自己的模型——"Vibe Training"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**🔗 符号与神经之间**  
"鸟人"科学家在连接主义和符号主义的钟摆之间，寻找一条结构主义的中道。

</div>

</div>

---
layout: default
---

# 嘉宾：刘子鸣

<div class="grid grid-cols-3 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**🎓 学术经历**

- 北京大学物理学院本科
- MIT 物理系博士，导师 **Max Tegmark**
- 斯坦福大学博士后（脑科学+AI）
- 现任清华大学人工智能学院助理教授
- 上海期智研究院兼职 PI

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**🔬 研究方向**

- GAN 网络 → **KAN 网络**一作
- Physics of AI（AI 的物理学）
- 机制可解释性
- AI for AI / Auto Research

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**🚀 创业**

- **元环智能**首席科学家
- 2026 年 3 月回国，5 月开始融资
- 路线：自动化 Physics of AI
- 产品愿景：Training Autopilot

</div>

</div>

---
layout: default
---

# 从物理到 AI："盛宴已过"

<div class="grid grid-cols-2 gap-6 mt-6 text-sm leading-relaxed">

<div>

## 🧭 为什么离开物理？

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

"很多做物理的人都会有这样一个经历……慢慢的就感觉 **the party is over，盛宴已过**。留给年轻人的那些问题其实没有那么多了。"

</div>

<div class="mt-3 text-xs opacity-60">
* 刘子鸣引用了高能物理界常说的一句话。姚顺雨也有类似经历。
</div>

- 理论物理"非常困难"，比不过姚顺雨这样的天才
- 实验物理"搞得更差"，进实验室只会让事情更混乱
- 2017 年大二时接触 **GAN 网络**，发现"这东西特别中我的兴奋点"

</div>

<div>

## 🧪 AI for Physics 阶段

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3">

"一开始我们还是做 AI for Physics 比较多……**高能唯象**——它既不是完全的理论，也不是完全的实验。是一种能够嫁接理论跟实验的桥梁。"

</div>

- 本科发表三篇 AI for Physics 论文
- 早在那时就已开始谈"AI 科学家""AI 物理学家"的概念
- 申请 MIT 博士时，只有 Max Tegmark 看到了他研究计划的价值

</div>

</div>

---
layout: two-cols
---

# 神经网络与符号公式的"波粒二象性"

<div class="text-sm leading-relaxed">

刘子鸣从 2021 年起一直在思考一个问题：**如何构建一个网络，它同时是一个神经网络，又同时是一个符号公式？**

他将其类比为量子物理中的**波粒二象性**——一个粒子既是粒子又是波。他从这个角度出发推导出了一个方程，事后才意识到这正是 1957 年 Kolmogorov 和 Arnold 提出的公式。

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**核心启示**：Kolmogorov-Arnold 定理证明这种表征可以表示任意函数，给了 KAN 网络理论的背书。从"波粒二象性"这个物理直觉出发，他意外地重新发现了 70 年前苏联数学家的成果。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./neural-symbolic.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# KAN：两周做出原型，克服 1989 年的"不可能证明"

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div>

## 🚫 最初的阻力

Max Tegmark 一开始并不同意他做 KAN。他甩出一篇 **1989 年 Tomaso Poggio** 的论文，证明 Kolmogorov-Arnold 定理在**最坏情况**下无法变成真正的算法。

<div class="mt-2 p-2 rounded bg-red-50 border-l-4 border-red-400 text-xs">

"你数学上告诉我这个东西最坏情况不 work。但是物理上我们关心的东西都是有很漂亮结构的……**我们生活的这个宇宙就不是最坏的宇宙。**"

</div>

</div>

<div>

## ✅ 两周颠覆三十年判断

刘子鸣花了**两周**做出了可训练的原型。Max 仍不满意——"我不知道这个网络内部到底发生了什么，它还是个黑盒子。"

他又花了一周做可视化。"Max 是一个超级的视觉动物——我一定要看到一个东西我才会相信它。"

当他把 GAN（KAN）的网络结构图画出来后，Max 终于说：**"Wow, this is awesome."**

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**物理直觉 vs 数学严格性**："All models are wrong, but some are useful." — 这是物理学家在不完美世界中找到有用模型的思维方式。

</div>

---
layout: two-cols
---

# 鸟人与蛙人：两种科学家人格

<div class="text-sm leading-relaxed">

Freeman Dyson 将科学家分为两类：

### 🦅 鸟人（Bird）
- 每个领域都懂一点
- 能看到不同领域间的**结构性相似**
- 把一个领域的方法搬运到另一个领域
- 花时间在高层级的比较和抽象上

### 🐸 蛙人（Frog）
- 把一个领域做得**非常精细**
- 研究得非常深刻

<div class="mt-3 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"我跟 Max 都是非常典型的鸟人。好处是能鸟瞰整片领域，能看到不同领域之间的结构性相似——因此能够把一个领域的方法搬运到另一个领域。"

</div>

<div class="mt-2 text-xs opacity-60">
这种"鸟人"特质解释了刘子鸣研究路径"东做一下西做一下"——实际上有一条清晰的主线：连接神经与符号两个世界。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bird-frog.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Physics of AI：用物理学的方法论理解 AI

<div class="text-sm leading-relaxed">

AI 是一个黑盒。Physics of AI 试图用物理学的方法论——观察、假设、验证——来系统性地理解 AI 的内部运作。

**核心转变** | 从 AI for Physics 到 Physics of AI

- 2017-2022：用 AI 解决物理问题（AI for Physics）
- 2022 年底 ChatGPT 出现后：Max 说"怎么着都要换方向"
- 新的方向：**用物理学的思想去理解 AI**（Physics of AI）

<div class="mt-2 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"物理是一种极致压缩的体现……当我们能够把一个东西符号化，这意味着我们能够对眼前的数据做极致的压缩。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./physics-of-ai-3d.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 维度一：空间上更细——解剖 AI 的大脑

<div class="grid grid-cols-2 gap-5 mt-6 text-sm leading-relaxed">

<div>

## 🔬 不止看端到端

"在空间上看的更细，指的就是我不只是关注这个模型它端到端的行为。我也会去关心它这个模型内部的**某些神经元**，它的内部表征会有什么样的特性。"

- 就像做**解剖**——不仅看外表，也看内部构造
- 观察神经元的工作方式和工作模式

</div>

<div>

## ⚠️ 机制可解释性的局限

刘子鸣 2022 年底到 2024 年初做了大量机制可解释性工作，但他逐渐意识到其局限：

- Anthropic 的路线：找到某个说脏话的 neuron，关掉它
- 但这些发现**非常不稳健**——换一个随机数种子，故事就完全不对了
- 解释过于微观，"不一定 robust"

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

"这类例子其实非常不稳健。可能你在一个例子上面找到了有这样一个 neuron，换一个随机数种子，它在那个网络上面可能就没有这样的行为了。"

</div>

</div>

</div>

---
layout: default
---

# 维度二：时间上更细——AI 的演化史

<div class="mt-4 text-sm leading-relaxed">

"在时间上看的更细，就是说我不仅仅只关心这个模型它最后一个时刻的表现。我也关心它是**怎么样演化来的**。"

</div>

<div class="p-4 mt-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">

"在生物上面有个对应叫做 **'Nothing in biology makes sense except in light of evolution.'** 如果你不从进化的角度来理解生物，其实在生物里面没有东西是可以理解的。"

</div>

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div>

## 生物与 AI 的类比

- 生物是黑盒，AI 也是黑盒
- 从演化的角度至少能有一些理解
- 看祖先在某一时刻的选择——为什么没上陆地？为什么一直待在水里？
- **训练历程就是一种演化**——每次梯度更新都是自然选择的一步

</div>

<div>

## 实际意义

- 不只关心模型收敛后的最终性能
- 关心训练过程中的**相变**——什么时候 grok？什么时候陷入局部最优？
- 不同阶段的不同 trick 是否有效？
- 理解训练动力学是设计更好模型的前提

</div>

</div>

---
layout: default
---

# 维度三：平行宇宙——控制实验与相图

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div>

## 🌌 "平行宇宙"即控制实验

"这个地方平行宇宙说得有点玄，其实就是**控制实验**。我有两个培养皿，都有一些细菌。对于一个培养皿里的细菌，另一个培养皿就是平行宇宙。"

- 改变超参数 → 训练出性质不同的模型
- 扫出一个**相图（Phase Diagram）**——就像水的固液气相图
- 对应朱泽圆 "Physics of LLM" 的方法论

</div>

<div>

## 🧪 No Free Lunch 的解决方案

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**当前的问题**：所有人都在说"我的 trick work"，但没人回答"在什么时候 work"。

</div>

- 同一个 trick 在一个相里 work，出了这个相就不 work
- Physics of AI 的任务：**理清每一个 trick、每个架构的适用条件**
- 这比"我们这个东西好"更有科学态度

</div>

</div>

<div class="mt-3 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**物理学传统**：No Free Lunch Theorem 告诉我们，没有一个模型能在所有数据集和所有任务上都最优。Physics of AI 就是要搞清楚每种方法的适用范围。

</div>

---
layout: two-cols
---

# AI for AI 的独特路线

<div class="text-sm leading-relaxed">

**主流认知**：AI for AI = 用 Coding Agent 自动做 AI Research。

**刘子鸣的路线**：AI for AI 的全称应该是 **AI for Physics of AI for AI**。

- 大多数人的想法：直接用 AI 提升 AI
- 刘子鸣说：**Stop — 中间还有一步**
- 古法科研做 Physics of AI 太慢了
- 需要用 AI 来加速 Physics of AI
- 有了 AI 的物理学，才能更好地设计和提升 AI

<div class="mt-2 p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

"这个想法是挺非主流的——绝大多数人想的是直接用 AI 去提升 AI。但我说 stop，中间还有一步：**先用 Physics of AI 结构化理解，再用 AI 加速这个过程。**"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-for-ai-path.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么不能跳过 Physics of AI？

<div class="mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

**AI for X 的前提是 X 有大量数据**。但 AI for AI Research 的问题恰恰在于：**AI research 没有大量的、高质量的结构化数据**。

</div>

<div class="grid grid-cols-2 gap-5">

<div>

## 📊 数据的缺失

- AI 才被创造了几十年
- 关于"模型→训练曲线"的映射关系目前仍非常不清楚
- 我们连这种语言都还没有规模化

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

"连这样的一个语言我们现在都还没有把它进行规模化……我们连 AI research 怎么样最好地去结构化都不知道。"

</div>

</div>

<div>

## 🔄 短期需要符号主义

- 长期（100 年后）：数据量大到一定程度，不需要结构也可以
- 短期：需要**人的先验和符号约束**
- Agent 本身就是把连接主义往符号主义拉回一步
- Coding Agent = 符号主义对连接主义的回拉

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**Bitter Lesson**：短期数据不够时需要引入结构；长期数据足够时不需要。我们正处在数据不够的"短期"。

</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 元模型：60 天把自己当模型训练

<div class="text-sm leading-relaxed">

2026 年初，刘子鸣做了一个"人体实验"：**每天随机拉一个数据集、随机拉一个模型训练，在实验前预测训练曲线。持续了 60 天。**

- 一开始预测能力"非常差"，连趋势都预测不对
- 训练到 **40-50 天**后开始变准了
- 甚至前几天的语言实验经验，也能迁移到视觉实验的预测中

<div class="mt-2 p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

"我开始变准了……它在潜空间有些 reasoning，我其实也说不清楚。但 somehow 我自己突然获得了可以预测的能力。"

</div>

这个实验让他相信**元模型（Meta-Model）是可能的**——输入是模型架构，输出是训练曲线预测。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meta-model.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 元模型的意义：从预测到筛选

<div class="grid grid-cols-3 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🎯 什么是元模型

- 一种**关于模型的模型**
- 输入：模型架构 + 数据集 + 优化器
- 输出：训练曲线（Next Curve）
- 用监督方式训练——模型→曲线 pair

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ⚡ 实际价值

- 你有 100 个架构想法，不知道试哪个
- 元模型前传 100 次 → 极低成本预筛选
- 排序后只训最有希望的前几个
- 人的带宽：每天 1-2 个实验；元模型一个 batch 几千组

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🎲 训练数据的多样性

- 不只训练 Transformer 小模型
- **强调多样性**——让元模型见过各种奇怪的架构
- 或许就是这些奇怪架构能帮我们跳出 Transformer 的局部最优
- 不需要大集群，大量小模型并行训练

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**终极目标**：下一个 Transformer 不是人拍脑袋发现的，而是元模型预测出来的。

</div>

---
layout: two-cols
---

# OPHIS：结构化研究的语言

<div class="text-sm leading-relaxed">

Auto Research 之所以还没有成功，关键不是架构或路线，而是**研究数据没有被结构化地保留下来**。

刘子鸣提出 **OPHIS 框架**，将任何研究过程拆解为五个环节：

- **O: Observation** — 观察到了什么现象
- **P: Problem** — 这个现象揭示了什么问题
- **H: Hypothesis** — 关于问题的假设
- **I: Intervention** — 基于假设的操作
- **S: Speed up** — 迭代加速

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

"所有的 research paper 都应该按这种结构去对它进行结构化……相当于创造一门**研究的语言**。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ophis-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# OPHIS 的落地：强制记录思维链

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div>

## 📝 为什么论文不够用

- 可能只有 **1% 的 AI 论文**结构化做得不错（如朱泽圆的 Physics of Math）
- 99% 的论文不包含清晰的研究思维链
- 长期以来，展现思维链被视为一种"耻辱"——显得不够天才

<div class="mt-2 p-2 rounded bg-red-50 border-l-4 border-red-400 text-xs">

"你要显示你很厉害，你就要让别人觉得不可捉摸……'这是我梦到的，不是我推出来的'。这样别人觉得你最牛。"

</div>

</div>

<div>

## 🛠️ 正在造的工具

- 正在构建一个**研究数据采集系统**
- 强制你在做下一个实验前，写一段话评价之前干了什么、得出了什么结论
- 目前还是偏流程化，未来会更智能

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

"采集就是说话……在做下一个实验之前，我必须要强迫你去写一段话去评价你之前干了什么，然后你得出什么结论，你才能进入下一个实验。"

</div>

- 预计 20 个学生+员工，每人每天 10 条
- 一天 200 条，两个月一万条 → 可以开始训练

</div>

</div>

---
layout: default
---

# New Labs 现象：为什么是 2026 年？

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div>

## 🌊 中美同步涌现

2026 年，中美两地同时涌现大量 **New Labs**——由顶尖研究人员创立的新型实验室，在还没有产品时就能以数亿美元估值融资。

**两个最热门方向**：
- **世界模型**（for Robotics）
- **Auto Research / AI for AI**

</div>

<div>

## 🎯 为什么是现在？

**人才选择的结构性变化**：
- 顶尖人才不想去大厂当"大头兵"
- 当前范式有些明显痛点打击不到
- 下一个范式可能需要不同的路线

<div class="mt-2 p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

"New Lab 的出现是因为：一、你不想做大头兵；二、当前的范式有一些明显痛点，而且那些地方早期需要大量 research，而不是堆资源堆工程就可以做成的。"

</div>

</div>

</div>

---
layout: default
---

# 疯狂的资本：连续融资，加轮再加轮

<div class="mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4 text-base">

"我是三月份回的国，四月底入职清华，五月底开始参与融资。这个过程，我的体感是**太疯狂了**。"

</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 💰 FOMO 驱动

- 一级市场处于极度 **FOMO** 状态
- 大家相互打探消息
- 投项目的动作都非常快

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🔄 连续融资

- 种子轮 → 种子轮加轮 → 再加轮
- "上一轮的投资人没进来，那我就开一轮。开了之后下一轮投资人又没进来，连续的融资状态。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🏷️ 被归类为 AI for Science

- 投资人把元环智能归在 AI for Science 下
- "不管是 AI for Science 还是世界模型还是 AI for AI，一级市场都非常 fomo"
- 融资节奏极快

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**中美投资人差异**：美国投资人跟他说"三年之内不用考虑商业化"；国内投资人"恨不得你现在当天就能盈利"。

</div>

</div>

---
layout: default
---

# AI 发展的历史阶段：第谷 → 开普勒 → 牛顿

<div class="mt-4 text-sm leading-relaxed">

刘子鸣用一个天文学的类比来理解 AI 的发展阶段：

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### 🌟 第谷阶段（数据）

- 大量观测，记录星星的位置
- 纯粹的**数据积累**
- 压缩效率极低——需要记住整个数据表

<div class="mt-2 text-xs opacity-70">
AI 如今可能处于<br/>**第 1.5 阶段**
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 📐 开普勒阶段（经验公式）

- 拟合行星轨迹 → 发现椭圆轨道
- 三大定律归纳了大量数据
- 有了**经验规律**，但还不本质

<div class="mt-2 text-xs opacity-70">
Scaling Law ≈<br/>开普勒定律的地位
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### 🍎 牛顿阶段（第一性原理）

- 引力公式统一了开普勒三大定律
- 极致压缩——一个公式预测一切
- **AI 还远远没有到这个阶段**

<div class="mt-2 text-xs opacity-70">
AI 的牛顿<br/>还未出现
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">

**刘子鸣的悲观版本**：有时他认为 AI 甚至还没到第谷阶段——"第谷好歹把望远镜对准了星空。我们过度聚焦在 Transformer 这种架构上，失去了探索其他架构的动机。可能连大数据的时代都没到。"

</div>

</div>

---
layout: default
---

# MIT → Stanford：脱下孔乙己的长衫

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div>

## 🏛️ MIT：学术的象牙塔

- MIT 的信仰："**用五年的时间就能写出 AI 的物理学**"
- 有了 AI 的物理学，就会发现现在投入这么多资源"完全是在浪费"
- 可以从第一性原理推导出最优架构
- 当时特别看不上工业界——"你们就是有钱，对吧"
- 24 年同学都觉得"湾区那些人搞的 agent 都是在骗钱"

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

"还没有脱下这个**孔乙己的长衫**。"

</div>

</div>

<div>

## 🌉 Stanford：开智的六个月

- 到 Stanford 仅两周，好友高文浩就宣布创业
- "当你看到和你风格很像的 peer 做出你之前觉得危险、做不到的事情，你就会想：**是不是我不够激进？**"
- 目睹导师 Andreas Tolias 从"特别 pure scientist"到 entrepreneur 的转变

<div class="mt-2 p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

"Stanford 对我来说像是**开智了一样**。湾区的节奏确实非常快。"

</div>

</div>

</div>

---
layout: default
---

# 中美 AI for AI 路线全景

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

### 🇺🇸 田渊栋 · Recursive (RSI)

- 方向：**更勤奋的** AI for AI
- 路线：Coding Agent 改进，维持好的 memory 系统
- "昨天调了五次学习率全失败了，今天就不再调学习率"
- 局限：经验驱动，可能不理解失败背后的原因

<div class="mt-2 text-xs opacity-60">
* 刘子鸣与田渊栋有过直接交流，两人 taste 相近。Recursive 官网也显示在 Science of AI 上有投入。
</div>

</div>

<div>

### 🇨🇳 国内其他团队

- **孙天祥**（后加入百度）：Language is World，Paper Agent 路线——自动生产 paper
- **陈永超**（清华 AI 院）：偏早期路线，让 AI 自己写 AI research 文章
- **刘子鸣 · 元环智能**：更聪明的 AI for AI——先做 Physics of AI，积累 insight，再 Scale

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**核心差异**：刘子鸣认为大多数 AI for AI 玩家是"更勤奋的 AI for AI"——超强行动力，不停迭代。他的路线是"更聪明的 AI for AI"——提三次想法就有一次 work，而不是提一百次只有一次 work。

</div>

</div>

---
layout: default
---

# 机制可解释性：从黑盒解剖到 AI for AI 的加速

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div>

## 🔬 Anthropic 的激进路线

- **Sparse Autoencoder** / **Transcoder**：把混合表征升到高维但 sparse 的空间
- 找到"说脏话的 neuron"，关掉它
- 理解 Claude 内部如何做加法

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

"这些例子其实**非常不稳健**。我个人觉得是有一些 wishful thinking 在里面的。当我脱下长衫之后，这些东西都是很有趣的故事——but what's beyond that?"

</div>

</div>

<div>

## 🔄 AI for AI 重新赋予意义

- 机制可解释性 ≈ AI 的生物学——也需要发展几百年
- 之前觉得不 promising 是因为"实在太难了、太 frustrating 了"

<div class="mt-2 p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

"有了 Auto Research 系统之后，这些之前看起来非常莫名其妙、非常遥远的北极星，其实是有可能能在**三到五年之内**达到的。之所以需要几百年，是因为我们没有办法自动化。一旦能自动化，进展可以很快。"

</div>

</div>

</div>

---
layout: default
---

# 研究直觉：一种遮羞布

<div class="mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4">

"研究品味、研究直觉其实是一个**遮羞布**——因为我们聪明到可以提出一个想法，但没有聪明到可以用语言说出来我是怎么提出这个想法的。所以我们把顿悟称为品味、直觉、灵光一现。"

</div>

<div class="grid grid-cols-2 gap-5">

<div>

## 🗣️ 拷问自己

- 刘子鸣一直在**刻意训练自己**：不仅要提好想法，还要追问"我是怎么提出这个想法的"
- 这对视觉思维者特别难——他脑子里有一个图像，但很难用语言说出来
- "美术又不行，只能真的做出来展现给你看"

</div>

<div>

## 💡 思维链一定存在

- "每一个顿悟时刻都是有思维链的。如果没有，是你问自己问得不够深"
- 未来可能：脑科学发展到可以直接检测脑电波
- 目前替代方案：**强制自己写下来**

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**善战者无赫赫之功**：最顶级的人提想法像呼吸一样简单——他把别人觉得"怎么可能想到的"东西，内化成了自己的系统。

</div>

</div>

</div>

</div>

---
layout: default
---

# 创业 Roadmap：六到十二个月的 R&D 窗口

<div class="grid grid-cols-3 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 📅 0-6 个月

- 侧重 **R&D**
- 做一些 demo
- 做一些产品的雏形
- "想法及路线每周都在改，甚至每天、每个小时都在改——只要你迭代得足够快"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 📅 6-12 个月

- 根据前六个月成果决定方向
- "六到十二个月的 R&D 对 new lab 非常重要"
- 不能过早投入不够好的方向，只为了短期商业化
- 这个时间窗口"是不能被跳过的"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 📅 12 个月+

- 开始**产品化和商业化**
- 引入有产品经验的联创
- 从"小而美"到"把影响力打出来"

<div class="mt-2 text-xs opacity-70">
一年前他觉得需要 3-5 年 R&D，现在路线更清晰了。
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**New Lab 的本质**：既不是 lab 也不是公司。像 lab 一样运转六到十二个月，一旦 grok 了，就应该像公司一样运转——"前 OpenAI 时代和后 OpenAI 时代的感受。"

</div>

---
layout: default
---

# Vibe Training：人人可训模型

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div>

## 🚀 从 Vibe Coding 到 Vibe Training

- 现在的 AI 降低了编程门槛（Vibe Coding）
- 但训练自己的模型门槛仍然极高
- 刘子鸣的愿景：**Vibe Training**——你把需求说清楚，系统端到端设计、训练、部署模型

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Training Autopilot（短期为 Copilot）**：用户只需说"我有一百块钱，在这个预算下尽可能给我一个好的模型。"

</div>

</div>

<div>

## 🌍 模型平权

- 终极目标：**所有人都能训自己的模型**
- 买一个机器狗 → 把自己的语音数据喂进去 → 机器狗能跟你对话、安慰你
- 模型不再垄断在巨头手中

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">

"我们不是自己做一家 OpenAI。我们是要孵化各行各业、各个垂直领域的 OpenAI。"

</div>

</div>

</div>

<div class="mt-3 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**技术越便宜，需求自然涌现**：就像当年无法想象家家都需要一台电脑一样。Physics of AI 理清了之后，训练成本也会大幅下降——"我们现在不是最优的 recipe，还有很多优化空间。"

</div>

---
layout: default
---

# 元环智能 vs 大厂：不一样的信仰

<div class="mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

**竞争优势**："Build a different thing。——我的思路从 Physics of AI 来，在学术界也是非常先进的。但我比学术界的人更激进，相信 AI 可以加速 Physics of AI。"

</div>

<div class="grid grid-cols-2 gap-5">

<div>

## 🏢 大厂的困境

- Physics of AI → AI for AI 这个路线对大厂"过于 risky"
- 从大厂的视角看，需要太多的 research，"直到我们做出 GPT-3 之前，大厂都觉得我们在胡闹"

</div>

<div>

## 🔬 New Lab 的机会

- 路线足够不同、足够早期
- 有大量**小天才**可以把问题拆解完成
- "某种意义上是一种基于不同信仰吧——我们相信这个事情我们就会让它发生，大厂绝大多数人不相信，就不会往这个方向投入资源。"

</div>

</div>

</div>

---
layout: default
---

# 我都要：教授与创业者的双重身份

<div class="mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-4 text-base">

**"如果只能选一个——做 Professor 还是做 Tech Entrepreneur？"**  
**"我都要。就是我现在的状态。如果非要选一个……做做看。"**

</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 🏫 清华的吸引力

- 能聚集"全世界最聪明的学生"
- 清北本科生的平均水平"远高于"MIT 本科生
- 带十几个小天才在期智研究院
- 需要"高人才密度"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 🔬 为什么回国创业

- Auto Research 需要大量高智商人才
- 在美国也在带 MIT 本科生，"平均远不如清北"
- 从清北"薅"学生——"全世界最聪明的学生"
- 既加入清华，又从北大"薅"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🧭 中间态

- "比工业界的人更理性，比学术界的人更疯狂"
- 介于 pure scientist 和 entrepreneur 之间
- 六个月 Stanford 博士后："像开智了一样"

</div>

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我们生活的这个宇宙就不是最坏的宇宙——我们就一定是一个还不错的宇宙，我们才能够演化出生命出来，才能够在这里问这个问题。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘子鸣解释为什么数学上的"最坏情况不work"不妨碍 KAN 在物理世界有用</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"我的 AI for AI 的全称应该是 AI for Physics of AI for AI。"
<div class="text-xs opacity-60 mt-1 not-italic">— 他的非主流路线：AI 先帮助我们理解 AI，再闭环到提升 AI</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"研究品味、研究直觉其实是一个遮羞布——因为我们聪明到可以提出一个想法，但没有聪明到可以用语言说出来我是怎么提出这个想法的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对研究直觉的祛魅，强调思维链的可外化</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded italic">
"我是三月份回的国，四月底入职清华，五月底开始参与融资。这个过程，我的体感是太疯狂了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2026 年中美 New Lab 资本狂潮的亲历者视角</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"下一个 Transformer 不是人拍脑袋发现的，而是元模型预测出来的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 元模型的终极目标：让 AI 自动发现最优架构</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得回味的思考：</div>

<div class="space-y-3">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"现在还是 Vibe Coding 嘛，未来会是 Vibe Training——你把你的需求说清楚，它就能够给你端到端的去设计、训练、部署这个模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— 终极产品愿景：Training Autopilot 实现模型平权</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"MIT 的信仰就是我们用五年的时间就能写出 AI 的物理学……可以从第一性原理去推导出最优的架构是什么样子的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 描述 MIT 的学术信仰，如今他更务实但仍保持这个方向</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"我们不是自己做一家 OpenAI。我们是要孵化各行各业、各个垂直领域的 OpenAI。"
<div class="text-xs opacity-60 mt-1 not-italic">— 元环智能的生态愿景</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"之所以需要几百年、需要几千年，是因为我们没有办法自动化。一旦我们能自动化了，这个进展其实可以是很快的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 AI for AI 能加速 Physics of AI 和机制可解释性的进展</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我比工业界的人更理性，比学术界的人更疯狂——所以处在中间。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘子鸣对自己作为 New Lab 创始人的定位</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">

"现在还是 Vibe Coding，未来会是 **Vibe Training**。"

</div>

<div class="mt-8 text-sm opacity-50">
刘子鸣 · 清华大学 & 元环智能<br/>
商业访谈录 · 2026-07
</div>

<div class="mt-4 text-xs opacity-40">
<a href="https://www.xiaoyuzhoufm.com/episode/6a69b07eb581962ce2bd4d97?utm_source=rss">小宇宙收听本期节目 →</a>
</div>
