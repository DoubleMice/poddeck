---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '146. 对Physical Intelligence柯丽一鸣4小时访谈：Pi的开源模型研究，机器人的江湖、族谱与主角'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 146. 对Physical Intelligence柯丽一鸣4小时访谈

## Pi 的开源模型研究，机器人的江湖、族谱与主角

<div class="pt-6 text-sm opacity-60">
柯立一鸣（K）· Physical Intelligence 研究员 · 强化学习方向
</div>

<div class="pt-12">
  <span class="text-xs opacity-50">小峻 × 柯立一鸣 · 2026年7月 · 约3小时48分钟</span>
</div>

---
layout: default
---

# 为什么这期特别？

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold text-base mb-1">🤖 最前沿的内部视角</div>
柯立一鸣是 Pi 强化学习方向负责人，亲历 Pi0 → Pi0.5 → Pi0.6★ 三代模型研发，深度讲解每代模型的设计思路与技术取舍。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold text-base mb-1">🗺️ 完整的机器人江湖图谱</div>
从 CMU 传统派到 Berkeley 机器学习派，从波士顿动力到特斯拉擎天柱，从 Pi 到 Skild、Figure、1X——一张完整的学术族谱与产业地图。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<div class="font-bold text-base mb-1">🧠 强化学习的本质剖析</div>
探索、归因、奖励函数设计——柯立一鸣从巴甫洛夫的狗讲到 Pi0.6★ 的 throughput 指标，揭示 RL 如何让机器超越人类遥操作极限。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<div class="font-bold text-base mb-1">🌏 中美机器人产业对比</div>
"很难想象有一家机器人公司组装好一台机器人，里面没有一个零件是中国的"——从硬件供应链到软件开源策略，真实的中美差异与互相观察。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold text-base mb-1">🎮 科学与人文的双重人格</div>
白天教机器人叠衣服，晚上写科幻小说。柯立一鸣用"贪心算法 vs 动态规划"比喻人生哲学，反思硅谷的生产力崇拜。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold text-base mb-1">🔮 机器人种族的未来想象</div>
"机器人可以造自己，这是一种繁殖的体现"——从特修斯之船到机器人伦理，一个研究员对机器人种族的终极畅想。
</div>

</div>

---
layout: default
---

# 柯立一鸣：一个"看起来乖实则叛逆"的人

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 成长轨迹

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold">安徽芜湖 → 美国</div>
在安徽芜湖通过信息学竞赛班接触编程，8 岁开始学 Logo 语言。竞赛班培养了她的编程基础，也让她意识到教育资源的区域差异——"安徽每万人里三四个人能上清华北大"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold">大学三次换专业</div>
心理学 → 经济学 → 计算机科学。心理学"不够直接"，经济学"不能帮助我了解我想做什么"，最终回到计算机——"能够帮助我了解这个世界，但不能帮助我了解我在这个世界中想做些什么"。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<div class="font-bold">博士七年：从理论到真机</div>
2017 年入学华盛顿大学，导师 Sidd Srinivasa（CMU 传统派）。从理论机器学习转到真机操作，博士期间亲手搭了一台"筷子机器人"。
</div>

</div>

</div>

<div>

### 性格底色

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<div class="font-bold">内向的洞穴人</div>
"我的回复能量的方式是一个人静一静"——自称内向、夜猫子，喜欢独处思考，但也在硅谷的喧嚣中找到了自己的节奏。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold">高二独闯东南亚</div>
为了去东南亚背包旅行，把头发剪成板寸，"把自己伪装成男生"以保护安全。父母不放心后来追到东南亚——"自己想干的事情得找个方法把它实现"。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold">因为游戏改变人生轨迹</div>
迷上古龙风格游戏《雨血》，崇拜其创始人 Soulframe，发现他清华毕业、耶鲁留学——"那就去留学吧"，从此改变人生方向。却没有选择做游戏，而是走向了人工智能。
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 机器人江湖谱系：两大家族

<div class="text-sm leading-relaxed">

### CMU 传统派（约 1979 年起源）

- **Matt Mason**（祖师爷）：奠定操纵系研究基础，提出"灵巧的关键不在于手本身，而在于大脑"
- **Sidd Srinivasa**（K 的导师）：全栈式培养，路径规划与控制的集大成者
- **Sangbae Kim**：MIT Cheetah 机械狗奠基人
- **Marc Raibert**：波士顿动力创始人，传统派的极致——后空翻机器人

### Berkeley 机器学习派（约 2014 年起）

- **Andrew Ng → Pieter Abbeel**：最早将机器学习引入机器人
- **Sergey Levine**（Pi 创始人）：强化学习在机器人领域的旗手，"SergeyGPT"般的论文修改能力
- **Chelsea Finn**（Pi 联创）：每天四点起床游泳，对任务设计有"动物性直觉"
- **K**：从 CMU 传统派出身，加入 ML 派的 Pi

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robotics-lineage.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 传统 vs 机器学习：两种范式

<div class="text-sm leading-relaxed">

### 核心差异

**传统方法**：专家建模每一步（规划 → 控制），投入产出线性——每做一个新任务需要同等工程投入。鲁棒性高、可解释，但通用性差。

**机器学习**：从数据中端到端学习，黑盒但可规模化。初期效果一般，但泛化能力强。目标是"让专家从系统中消失"。

### K 的立场

"黑猫白猫，抓到老鼠就是好猫。"不排斥任何方法，但相信 ML 是让机器人真正通用的路径。**"优雅我们保障不了，但保障我们可以多做一点研究。"**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-factions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 传统 vs 机器学习：两种信仰的碰撞

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

## 传统方法（规划 + 控制）

- 先规划步骤 1、2、3，再由控制层精确执行
- 需要专家建模：摩擦力、动力学、运动学
- 投入-产出线性：每做一个新任务，需要同等量级的工程师投入
- 代表：波士顿动力（后空翻）、工厂机械臂（装玻璃）
- **优点**：鲁棒、稳定、可解释
- **缺点**：通用性差，每换一个任务都要重新来过

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

## 机器学习（数据驱动）

- 从数据中直接学习，端到端，不需要中间的专家知识
- "黑盒优化"：不需要理解原理，只要设计好系统让它提供好解
- 投入-产出曲线不同：初期效果一般，但泛化能力强
- 代表：Pi、Skild、人形机器人创业公司
- **优点**：泛化、通用、可规模化
- **缺点**：什么是"做好"还没有共识

</div>

</div>

<div class="mt-4 p-3 text-sm text-center bg-yellow-50 rounded border-l-4 border-yellow-500 leading-relaxed">
<strong>K 的立场</strong>："黑猫白猫，抓到老鼠就是好猫"——她不排斥任何方法，但坚信机器学习是让专家从系统中消失的路径。"优雅我们保障不了，但保障我们可以再多做一点研究。"
</div>

---
layout: default
---

# 从传统组到筷子机器人：一场豪赌

<div class="grid grid-cols-2 gap-4 mt-4">

<div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 为什么用筷子？

K 博二时对导师 Sidd 发了一条暴论："用筷子能做 90% 的夹放问题"。筷子只有两个支点，是最难的操作工具——**"如果算法在筷子上都能成功，那在其他方法上更容易成功"。**

导师是印度人，不会用筷子，所以他说："搞一个这个，做出来就可以毕业了。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

### 关键论证

K 用了一个巧妙的论证说服导师：**"虽然硬件不准，但我作为人可以通过遥操作让它在不准的情况下夹起小球——如果算法和我一样聪明，它就应该能做到。"**

这就是数据驱动方法的核心：硬件不够好没关系，好的算法可以弥补。

</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 路线图：从模仿到强化

**2018-2019**：模仿学习——K 遥操作机器人，提供高质量数据让它"抄"。筷子可以夹小球。

**不满**："太累了，我们懒人不能做这种事。"

**转强化学习**：让机器人在真实世界中自己练习，通过不断试错和归因来超越人类遥操作的表现。最终做到了——在空中晃动的小球也能夹住，精度超过普通人。

**这个博士项目耗时 7 年**——"没有很焦虑，就是很纯粹地去想下一个问题想做什么。"

</div>

</div>

---
layout: two-cols
---

# Pi 的研究主线：能力 → 泛化 → 表现

<div class="text-sm leading-relaxed">

### 三篇主线论文，三个核心命题

**Pi0（2024.11）→ 能力**：大模型能不能做到之前想都不敢想的任务？叠衣服、叠箱子、桌面清理——三项任务奠定了"这事能做"的基石。

**Pi0.5（2025）→ 泛化**：出了实验室还行不行？在 100 个 Airbnb 里采集数据，探索"到底要收多少个家才能在下一个新家里跑起来"。

**Pi0.6★（2025-2026）→ 表现**：能不能做得又快又好？引入强化学习，让机器人自己收集"体验数据"，用 throughput（固定时间内成功量）作为指标。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pi-trajectory.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Pi0：能力的起点——"这事能做"

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 🧥 叠衣服
衣服的状态千变万化——多一个褶、拐一下角，都是新状态。模型需要泛化处理这些"不在数据里"的情况。K 承认自己"不怎么会叠衣服"，于是可以从纯粹的机器人任务角度来设计评估标准。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 📦 叠箱子
一个"这东西真能做吗？"的任务。验证了大模型可以在高度非结构化的物体操作中表现出智能。K 的感受：**"2024 年初你跟别人说叠衣服，他们觉得你在开玩笑。"**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 🧹 桌面清理（Bussing）
用几百种不同道具测试泛化性。数据收集员发挥想象力，不断换物件、换场景。这个任务承担了 Pi0 阶段探索"没见过的东西能不能做"的责任。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>之所以选这三个任务</strong>：不仅因为它们"酷"，更因为每个任务探索了不同维度的泛化——物体的多样性、状态的多变性、环境的不确定性。叠衣服的泛化在状态层面，桌面清理的泛化在物体层面。
</div>

---
layout: default
---

# Pi0 → Pi0.5 之间：两篇关键基础研究

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### FAST：动作表征学习

**核心问题**：动作的"语言"是什么？扩散模型（diffusion policy）的表达是否是最优的？

**发现**：可以让大模型自己学习一种最优的动作表达空间。在这个空间里做预测，性能更好、方法有保证。

**意义**：这是大模型训练层面的基础性研究——不是换任务，而是换"底层语言"。为 Pi0.5 的泛化能力打下了表征基础。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Hi Robot：分层策略

**核心问题**：一个端到端模型，在长达 10 分钟的任务里会"迷失"——不知道现在该干什么。

**方案**：同一个模型，但输出分层——高层将语言指令转换为可执行的短子任务，低层负责具体执行。

**意义**：正式引入分层思想。不改变模型架构，但改变输出方式。语言的逻辑推理能力被嵌入到动作执行中。

</div>

</div>

<div class="mt-4 p-3 text-sm text-center bg-purple-50 rounded border-l-4 border-purple-500 leading-relaxed">
K 的评价："做研究就是前浪拍后浪，前浪死在沙滩上。但能打一条浪出来，还是很有启发性，可以为后浪做很多贡献。"
</div>

---
layout: default
---

# Pi0.5：开放世界泛化——走出实验室

<div class="grid grid-cols-2 gap-4 mt-4">

<div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 核心实验设计

不是实验室，不是工厂，是**别人的家里**。Pi 团队在约 100 个 Airbnb 里采集了日常任务数据——杂乱无章的厨房、不同高度的桌子、千奇百怪的背景和光照。

**关键发现**：泛化能力的提升曲线是放缓的——不需要在世界上所有人的家里都收数据，有一个"足够"的数字就够了。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

### 标题的艺术

Pi0.5 的标题叫"开放世界泛化模型"——K 认为这是 Chelsea 想出来的。而每篇 Pi 论文开头的科幻小说引用，则是 Sergey 写的，这已经成为 Pi paper 的标志性风格。

</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 泛化的多个维度

"泛化"不是一个单一标准：

- **环境泛化**：从房子 A 到房子 B、C、D……需要多少房子？
- **物体泛化**：红色衣服 vs 绿色衣服，T恤 vs 衬衫
- **状态泛化**：衣服多一个褶、拐一个角
- **光照/背景泛化**：白天 vs 晚上，白色桌面 vs 木纹桌面

**Pi0.5 的贡献**：给出了一个量化答案——"需要 100 个家吗？还是 500 个？"实验表明曲线在放缓，不需要无限增长。

</div>

</div>

---
layout: default
---

# Pi0.6★：表现的飞跃——人类遥操作的终点，强化学习的起点

<div class="grid grid-cols-2 gap-4 mt-4">

<div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 为什么需要 Pi0.6★？

"如果做什么都可以但什么都是半吊子，这个模型的用处究竟是什么？"

K 说这是 Pi 团队认为必须回答的问题。之前的模型证明了"能做"和"能泛化"，但具体到某一个任务上能不能做得**足够好**——好到可以商用——还没有答案。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed mt-3">

### Throughput 指标

Pi0.6★ 引入了 **throughput**（固定时间内的成功量）作为核心指标。K 的说法："又快又好"。

具体目标：让机器人的表现**超越最好的数据收集员**。在叠衣服任务上，他们清晰地做到了——机器人的速度和成功率超过了起点最高的人类遥操作员。

</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 方法论：简洁至上

Pi0.6★ 强调方法上的简洁性。核心理念只有一条：

**如果一个智能体差不多能在一个任务上做好，那就让它自己去收集体验数据，把这些数据放回训练池。**

这就是强化学习的本质——起点是人设定的（模仿学习），但要超越起点，必须让机器人在真实环境中自己跑、自己学。

**K 的暴论**："机器人的价格应该又便宜又方便。将来你可以让机器人在部署过程中收到数据，都拿来为我所用。"

</div>

</div>

---
layout: two-cols
---

# 强化学习全景：四大核心模块

<div class="text-sm leading-relaxed">

### 探索、执行、归因、奖励——一个循环

**探索（Exploration）**：想做更好的事，必须做以前没做的事。怎么选一个更可能成功的新动作去尝试？这是永恒的命题，目前大模型还不具备"主动探索"能力。

**执行（Action）**：机器人在真实环境中做出动作，产生新数据。Pi0.6★ 用自我收集的"体验数据"替代了纯人工遥操作数据。

**归因（Attribution）**：收集了这么多部署数据，到底哪一步做得好导致成功？Pi0.6★ 的算法能帮模型找到"精华"。

**奖励（Reward）**：定义什么算好——奖励函数设计极其困难，容易出现"滥用奖励"（如超级马里奥的 bug）。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rl-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 归因问题：哪一步做对了？

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的比喻**：就像训练宠物——它做了一系列动作后你给了奖励，它需要知道到底是哪个动作带来了奖励。

在 Pi0.6★ 中，机器人做了很多次任务，收集了大量部署数据。算法需要从中找到"这条数据里其他都是垃圾，但这个地方是精华，你以后多做这个精华"。

**这是 RL 的"总结反思"能力**——微观上（这一步改一下会更好）和宏观上（这整套策略是最好的）都需要归因。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 探索问题：大小之间

探索可大可小：
- **小探索**：肌肉往左移一点，打网球表现更好
- **大探索**：整个研究方向换一个，发现全新的方法

现在大模型还不具备"主动选一个更可能成功的探索方向"的能力。K 认为这是最终的通用智能体必须拥有的能力。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 奖励函数问题：传递"好坏"

"奖励函数设计"的本质是**向智能体传达你让它做什么**。它不一定是一个"奖励函数"的形式存在——可验证的任务（如代码能不能跑）就是一种天然的奖励信号。

K 的观点：机器人比 NLP 的现实奖励函数更难写——叠衣服叠得好不好？K 自己都不叠衣服，所以她可以纯从机器人任务角度来设计。

</div>

</div>

---
layout: two-cols
---

# 硅谷机器人创业地图

<div class="text-sm leading-relaxed">

### 大脑为主 ← → 硬件/人形为主

**Pi**：学术派创业，专注双臂操控通用大脑。Sergey + Chelsea 联创，Carl 管基建。"暂时完全不考虑商业化"。

**Skild**：Deepak + Abhinav 联创，同样是通用大脑，但更侧重移动性（腿/人形/狗）+ 商业部署。

**Tesla**：人形信仰最激进——"终极形态"，软硬一体，硬件靠造车经验。

**Figure**：2022 年创立，创始人无技术背景但有创业经验。电机驱动人形。

**1X**：深耕绳驱人形，电机技术独特。

**Dyna**：最早关注场景落地——叠衣服场景已经跑通。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robot-landscape.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 机器人形态光谱：从人形到狂野

<div class="text-sm leading-relaxed">

### 三条路线，三种信仰

**人形派**（Tesla/Figure/1X）：世界为人设计，人形天然适配。信仰终极形态，但控制复杂度和硬件稳定性仍在验证中。

**实用派**（Pi）：不需要人形就能做好任务。用简单双臂做复杂操作，将来迁移到人形更容易。K 的红线："做人形我就不来了。"

**狂野派**（K 的另一面）：自然界演化不出的形态可能才最好。车轮不存在于自然界但改变了文明。机器人可以动态组装——手坏了就换。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./form-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 人形 vs 非人形：各自信仰的底层逻辑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 人形派（Tesla, Figure, 1X）

- **"这个世界是为人设计的"**——人形机器人天然适配现有环境
- 通用性更好：人能做到的，人形机器人理论上都能做
- 特斯拉最激进：从手到脚的终极形态都要和人一样
- **风险**：关节多、控制难、硬件不稳定、摔倒代价大

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 非人形派（Pi + 实用 + 狂野）

- **实用派**：不需要人形就能做很多事。先做好操控，构型后面再说
- **狂野派**：四只手好不好？三只手好不好？自然界演化不出来的形态可能最适合机器人
- **动态组装**：手坏了就换——机器人可以随时随地换部件，像换工具一样
- K 的想法："也许成熟的机器人形态就是它的动态组装性"

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>K 的红线</strong>："确实我们不做人形。因为他要说做人形我就不来了你知道吧。"——她担心做人形会让研究重心从"做好任务"偏移到"做好人形机器人"。在不需要人形的情况下，叠衣服、做咖啡都已经做到了。
</div>

---
layout: default
---

# 通用大脑 ≠ 人形大脑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### K 的核心论证

**"通用"有两种理解**：
1. 在一个具体构型上做到通用功能
2. 做得很多构型都可以受益的大脑

Pi 选择的是第二种。人作为一个大脑可以开车、开挖掘机、踢球——**这才叫通用大脑**，不是"做了人形就是通用"。

**用简单构型做复杂任务的逻辑**：如果简单双臂能做到复杂任务，将来迁移到人形会更容易——因为复杂构型的灵活度更高，但控制更难。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Pi 的 Partner 策略

Pi 最近发布了 Partner 项目——和其他机器人公司合作，让他们的硬件跑 Pi 的大模型：

- 一家叠衣服公司
- 一家打包公司
- 这些公司已经在做商业落地，Pi 提供大脑

**愿景**：将来你买一个机器人的乐高玩具拼装之后，"直接插入我们的大模型，它就可以做很多事情"——把机器人从零到第一个 demo 的时间大幅缩短。

</div>

</div>

---
layout: two-cols
---

# 真机 vs 仿真：数据之争

<div class="text-sm leading-relaxed">

### 两大阵营

**真机数据**：物理特性真实，部署后自然获得。但当前成本高——需要硬件平台、维护、雇人操作。未来可通过"体验数据"（训练好的模型自己采集）降本。

**仿真数据**：数据量大、成本可控。但 sim-to-real gap 和柔性物体（衣服、摩擦力）的建模还是半前沿问题。

### K 的判断

"黑猫白猫，抓到老鼠就是好猫。你真的能收到什么样的数据，就去想什么样的策略。"但她在当前阶段坚定相信真机数据不可取代——尤其是叠衣服这样的柔性操作，仿真器还做不好。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-comparison.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 数据之争：真机 vs 仿真

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 真机数据（K 的信仰）

- **为什么信**：部署了就自然会有真机数据，"你都已经部署了，为什么不用？"
- **当前局限**：贵——硬件平台 + 维护 + 雇人远程操作 + 管理
- **未来降本**：让已经训练好的大模型自己跑、自己采集数据（这就是"体验数据"）
- **质量维度**：任务意义、动作质量、覆盖度、标签标注
- **对仿真的质疑**：叠衣服的仿真器现在还是一个"半前沿问题"——没人能做好

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 仿真数据（别家的信仰）

- **为什么有人信**：同样的预算，仿真数据量大得多
- **当前局限**：sim-to-real gap，软性/柔性/摩擦力等物理特性无法准确模拟
- **潜在突破**：如果有人在未来两三年里做通了 sim-to-real，仿真会成为极强力的数据来源
- **自动驾驶的启示**：自动驾驶对仿真依赖很深，但操作任务复杂得多

</div>

</div>

<div class="mt-4 p-3 text-sm text-center bg-yellow-50 rounded border-l-4 border-yellow-500 leading-relaxed">
<strong>K 的实用主义立场</strong>："黑猫白猫，抓到老鼠就是好猫。你真的能收到什么样的数据，就去想什么样的策略。你有 1000 万小时的数据，但都是垃圾——那就没用。"
</div>

---
layout: default
---

# 什么数据是好数据？

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 📋 任务的维度
数据的意义首先来自任务本身。在空中挥挥手？意义不大。跳舞、叠衣服、拿水杯——任务越复杂、越接近真实需求，数据价值越高。

K 在 Pi 的经历：Chelsea 对"哪些任务能做"有非常准的直觉——有些任务看起来很难，但她知道"能做"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 🎯 动作的质量
同样的任务，数据质量天差地别。奥林匹克运动员级别的动作——精准、流畅、高效——和"晃晃悠悠拿杯子"是完全不同等级的数据。

纠正数据（correction data）尤为重要：机器人进入糟糕状态后，如何修正并继续完成任务的数据。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 🌐 覆盖的广度
一个数据集里有多少不同场景？不同光照、不同背景、不同桌子高度、杯子在不同位置、不同角度……

泛化的每个维度，都是数据采集时需要考虑的覆盖度维度。Pi0.5 在这个问题上给出了量化答案。

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>标签标注同样关键</strong>：数据提供的是一种信息，如何在一团数据里挖掘更多信息——杯子在哪、怎么拿的、杯子长什么样——如果有标签，就可以就这些标签进行额外的学习。
</div>

---
layout: two-cols
---

# 左脚踩右脚：通用 vs 场景优化

<div class="text-sm leading-relaxed">

### K 的比喻：互相踩踏，一起上天

**左脚（Zero-Shot 泛化）**：在新环境、新任务上没有训练数据也能像模像样。靠架构研究和预训练推动。Pi0.5 证明了泛化曲线在放缓——"有一个数字就够了。"

**右脚（场景表现完满）**：在一个具体任务上做到极致。靠强化学习和 self-play 数据推动。Pi0.6★ 证明了高质量模型不只在训练任务上变好。

**为什么互相促进**："具体的表现提升可以提高模型整体的能力。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./foot-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 左脚踩右脚：通用能力 vs 场景优化

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的比喻**："这两个就是互相之间，左脚踩右脚，看看能不能上天吧。"

机器人研究有两个大主题：一个是在全新未知领域做出像模像样的东西（zero-shot 泛化），另一个是在具体场景下做到完满（表现优化）。它们看起来互相独立，实际上相辅相成。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 左脚：Zero-shot 泛化
**提升手段**：架构研究、预训练、数据覆盖度。Pi0.5 在 100 个 Airbnb 里证明了泛化曲线在放缓——"有一个数字就够了"。

**与场景优化的关系**：如果在新环境下能稳定达到"差不多"的水平，就可以马上开始用更具体的提升手段（如 RL）。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 右脚：场景表现完满
**提升手段**：强化学习、具体任务优化、self-play 数据。Pi0.6★ 证明了一个任务做到极致能提升模型整体能力。

**与泛化的关系**：在一个场景中做到完满，可以在更多场景中达到更好的效果——高质量模型不只是在你训练的任务上变得更好。

</div>

</div>

---
layout: default
---

# VLA 架构：语言是机器人交互的通道吗？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### K 的立场转变

K 以前对 VLA（Vision-Language-Action）模型是怀疑的——"我这个人比较内向，很多事情是不是不用说话表达会更好？"

但成为 Claude Code 重度用户之后看法变了：

**"语言确实是一个非常强的逻辑思维和推理工具，而我也越来越觉得逻辑思维推理对机器人是很重要的。"**

语言不能捕捉所有重点（怎么收拾厨房？），但你可以用语言提供更多 context，让机器人自己去搜索或制定计划。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 架构演化方向

当前的 VLA 架构还比较原始——有 language 但并不深入探索 language 和动作的细微关系。

**未来方向**：
- 输入端给更多 context（不只是"叠衣服"，而是详细描述怎么叠）
- 输出端不止动作，还可以加 video 或辅助损失
- 让 VLA 像现在的大语言模型一样"take in much context"
- 探索语言层面的详细描述：两只手在这一步怎么配合

</div>

</div>

<div class="mt-4 p-3 text-sm text-center bg-purple-50 rounded border-l-4 border-purple-500 leading-relaxed">
但 K 也承认，机器人有 NLP 没有的优势——"在数据量与 NLP 完全无法比拟的情况下，你已经可以做很多东西出来了。"
</div>

---
layout: default
---

# Claude Code：人与人之间新的中介层

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的观察**："在跟人沟通之前，会先去找 Claude Code。Claude Code 成了人和人中间的那个环节。"

在 Pi，Claude Code 的出现改变了很多事情——以前需要去找模块负责人沟通"这个可不可行"，现在先问 AI agent。"与其跟人说我们是怎么回事、问他可不可行，我干嘛不直接问 Claude Code 呢？"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 生产力爆炸：一个人掌控三四个 agent

在 Pi，很多人的工作流程已经变成"一个人掌控三四个 agent，让 agent 去干很多活"。这改变了团队协作中人与人之间的关系——从一个紧密协作的团队，变成了每个人有自己的 agent 团队。

**K 的比喻**："现在是一个比较信息爆炸的时代，我有一个小 bot，它可以看遍互联网上所有的信息，了解我的喜好后揉碎了喂给我——以后没有 bot 你可能很难在互联网里生存了。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 科幻小说素材：信息过滤的 dystopia

K 在构思的小说中探索了两个相关命题：

1. **BOT 中介化生存**——如果每个人都靠自己的 bot 获取和过滤信息，人与人之间的直接信息交换会变成什么样子？

2. **独狼玩家的田园牧歌**——如果生产力爆炸到每个人都可以在远离人烟的地方生活（机器人修水管、agent 做项目），人类社会的关系会变得更加松散吗？

"也许将来在宇宙中，你发现一个小星球就可以定居，搞很多机器人帮你建基建。"

</div>

</div>

---
layout: default
---

# Scaling Law 与机器人的 Frontier

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Scaling Law 在机器人中的体现

**K 的谨慎态度**："每次看到过度简化的 scaling 陈述，我都会觉得不够细节。"

**Pi0.5 的发现**：
- 10 个房子 vs 100 个房子 → 泛化提升
- 100 个房子 vs 1000 个房子 → 提升可能不大
- 说明 **scaling 曲线在放缓**，存在一个"足够"的有限数据量

**但**："我们现在数据量还是太少了，肯定还是要再激进一点。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Frontier 难以定义

NLP 有排行榜、有 benchmark——每个模型在上面跑一遍，谁是第一名一目了然。

机器人没有——因为：
- **评估本身是研究前沿**：你得在真机上跑才知道表现，不同公司的评估方法和侧重点不一样
- **初始条件无限**：杯子在哪、光照如何、桌子高度、背景……每个变量都影响表现
- **"随着向更前沿迈进，就变得越来越乱——需要能从混乱中找到清晰的线"**

</div>

</div>

---
layout: default
---

# 中美机器人：硬件供应链是中国的王牌

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 中国的硬件统治力

**K 的原话**："很难想象有一家机器人公司组装好一台机器人，这里面没有一个零件是中国的，我觉得是不太可能。"

- 中国有成熟的电机选择、机器人形态选择方案
- 硬件迭代速度快——"我不知道美国人要是追的话该怎么追"
- 春晚宇树机器人表演让 Pi 的群里都在讨论"他们是怎么做到的"
- Pi 的读书会甚至想请中国机器人的专家来讲一讲

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 中美派别的差异

**中国公司**：更强调实用主义和商业回本，从商业逻辑出发。

**Pi 这样的美国研究型公司**：受到创始人导师 Peter Abbeel 的 Covariant 创业教训影响——过早商业化导致分心，反而失去了通用泛化能力。"可能暂时完全不考虑商业化，因为那可能是一个分心。"

**但**："我们公司其他人会很关注中国机器人发展吗？我觉得都关注。这是一个不可忽视的部分。"

</div>

</div>

---
layout: default
---

# 机器人的自我繁殖：一个研究员最大的梦想

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的原话**："我其实一直很想做的就是，机器人可以造自己。我觉得这个是机器人发展的一个，可能会是一个里程碑吧，因为它就像一个种族是有延续性的，是可以通过自我的一种繁殖，我觉得机器人能够组装造自己就是一种繁殖的体现。"

她申请教职时的研究计划就是这个——"我是非常想做这件事情的。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 特修斯之船的机器人版

Pi 公司有一个真实困境：机器人不断被修理和更换零件，从头到脚都换了一遍，它还是原来那个机器人吗？

**K 的玩笑**："我们就在说要不要给它起一个新名字。它和原来那个机器人的唯一联系就是编号一样，但里面全换了。"

**伦理审查的未来**：什么时候一个机器人真的变成了"新的"机器人？也许需要伦理委员会来确认"每一颗螺丝都换过"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 意识、种族与宇宙的尽头

K 不相信机器人会产生人类这样的意识——从物理化学中突然出现意识？"真的有可能吗？"——但这是科幻小说的好素材。

一个浪漫的想法："虽然我们的生命很短暂，只有一百年，放在人类历史、宇宙历史上微小到不值得一提，但是不是有可能造出一个东西，它可以看到宇宙的尽头？"

</div>

</div>

---
layout: default
---

# 英伟达与"野生想象力"：两条不同的路

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 英伟达的机器人赌注

**江湖笑话**："英伟达做所有事情都是为了卖卡。"——世界模型等需要海量 GPU 的项目，自然成为英伟达的重点方向。

**严肃的观察**："过往的经历一次又一次证明——有些时候，真的就是数据多了、卡多了，效果就上去了。大家也很期待他们这样做能做出什么。可能一些计算力更大的、更加简单粗暴的，也是一种美。"

**GEAR Lab**：飞飞的学生朱玉可和金梵在英伟达领导机器人研究，主管"如何做机器人"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Abhinav：天马行空的研究风格

CMU 教授 Abhinav（Skild 联创）是 K 非常欣赏的一位学者——**"你跟他开会的时候都不知道他下一句会说什么。"**

**代表作**：
- 很早之前就想做"自学习的机器人"——让机器人到户外疯狂收数据，打破数据的限制
- 用亚马逊上 5 美元的夹爪杆收数据——和后来的 Umi 异曲同工

**K 的评价**："他做的事情就是打一枪，你还没明白是什么意思，后面才发现——哎，还真的有点意思。有一种几乎野生般的感觉，最后可能还真就是这个形态。"

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>波士顿动力的花衬衫传奇</strong>：创始人 Marc Raibert 年轻时穿花衬衫参加学术会议被批评后，索性把花衬衫变成了实验室"制服"——"他是有一种叛逆精神在身上的。"现在他依然以白发花衬衫的形象活跃在行业里。
</div>

---
layout: default
---

# 贪心算法 vs 动态规划：硅谷式人生的反思

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的哲学**："小时候搞竞赛，学到贪心算法和动态规划算法。贪心算法是每一步都做最优化的决策，做当下的最好。动态规划告诉你——如果有一些全局视角，每一步都做最好的决策，并不能让你达到全局的最优解。"

"我是非常喜欢这个逻辑的。很多时候就像塞翁失马焉知祸福——一时的成功失败、优化有没有做到极致，并不能代表长期最后的结果。因为没有一个人有着全能全知的视角。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 硅谷的生产力崇拜

K 推荐的书是法国哲学家布迪厄的 **Distinction（《区隔》）**——关于社会阶层如何塑造人的喜好。

"硅谷已经放弃了对着装、品味的讲究，它讲究的是效率、精简、创造。这何尝不是这个社会价值观的一部分？"

她在工作中狂热追求生产力优化，但作为一个人文学者，她知道这只是一个"变化中的缩影"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 虚无主义与做九分留一分

K 自称有虚无主义的一面——"人活着是为了什么，这是一个无解的命题。"但她又是幸福的，因为"在做自己最想做的事情"。

**"就做九分，留一分是可以的"**——她从来没有把事情做到最后。读博 7 年、换了三个专业、东南亚背包、从教职转身加入创业公司……之前那么多的"没有做到最后"才让她走上了今天这条路。

"也许机器人是我第一次觉得我们得把这个事情做到最后。"

</div>

</div>

---
layout: default
---

# Pi 的内部文化：读书会、Claude Code 与 CO₂ 检测器

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 创业氛围

- **约 70 人**，还在最初的那栋楼里——会议室 CO₂ 检测器经常跳红，得开门接着干
- **没有打卡**，但很多人自发工作到很晚——"吃完饭又跟这人开始讨论起一个什么话题，就想往下再走一走"
- **没有加班工资**，但有股份，每个人都希望公司变好
- 有些人住在南湾，每天来回开车 3 小时

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 特有的文化机制

**读书会**：K 和另一个人组织。Pi0.6★ 上了两次——立项时讲"这个问题以前做到了什么地步"，快发表前讲"现在做到了这个地步，你们觉得怎么样"。

**Claude Code 狂热**：公司有内部竞赛——谁是 Claude Code 用得最好的人，上台分享，大家抄作业。K 的感受："生产力飞跃式进步，和一年前完全不一样的工作思路了。"

**Olympics 内部活动**：研究员和数据收集员组队，看谁能用机器人完成最难的、想都不敢想的任务。

</div>

</div>

---
layout: default
---

# K 的一天：夜猫子的科研节奏

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 典型日程

- **上午**：在家工作，给自己"洞穴时间"
- **中午**：到公司
- **下午到晚上**：协作、讨论、实验
- **深夜**：兴致来了干到凌晨两三点，回家洗完澡再干一会儿
- **博士时期更夸张**：中午下午开始，干到凌晨四五点——"因为可以免费停车"，然后去 24 小时炸鸡店

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Claude Code 改变工作方式

K 最近两周把自己的整个工作流程都改了——"效果上来说应该有个三四倍吧"。

但她也坦诚："研究不是疯狂打枪就能打中什么东西，还是需要人的 input。"

从读博时的"独狼玩家"到现在的"团队协作"——"有一些事情是得在一个团队的协作中才能完成"，同时 Claude Code 又让她能减少对人际沟通的依赖。

</div>

</div>

---
layout: default
---

# 为什么从教职转身加入创业公司？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 拿到剑桥教职，最后一刻放弃

K 博士七年，一直以为自己要当教授。拿到剑桥的教职 offer——她喜欢剑桥的人文属性，"在那里可以又做研究又写小说"。

**为什么放弃？**

- **学术界的节奏问题**：英国博士 3 年，美国 5 年——给学生一个开创性的项目，时间够吗？
- **学生来来走走**：开了个头，人就走了
- **ChatGPT 给了信心**：让 AI 写 funding proposal 就行了——但最后发现工业界有更多算力、数据和硬件支持

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 第一次去 Pi：以为是聊天，结果是面试

K 去湾区朋友家玩，顺路去刚成立一周的 Pi 坐坐。"我不知道那是个面试，我就一直问他们：你们在干什么？"

Pi 的人后来反馈："我们面试你的时候感受到了莫大的阻力，因为你不听地问我们问题。"

但聊完后 K 觉得"这帮人还是挺求真的"——她和 Pi 在学术品味上找到了共鸣。最吸引她的是：**和曾经做过非常成功工作的团队共事**。

</div>

</div>

---
layout: default
---

# "确实我们不做人形"：K 的红线与抉择

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的原话**："确实我们不做人形。因为他要说做人形我就不来了你知道吧。"

她解释：不是人形不值得研究，而是她个人的研究重心是"做更好的任务"。如果在一个人形公司，研究重心可能会偏移到"如何做更好的人形机器人"——这不是她最想做的事。

**叠衣服、做咖啡、桌面清理……这些不需要人形就已经做到了。**

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 对商业化时机的判断

Pi 受到创始人导师 Peter Abbeel 前一家创业公司 Covariant 的教训影响。

Covariant 在某个时间点深耕物流仓储，回头来看，**过早的商业化导致通用泛化能力的研究被分心**——"没有真的去追溯本源的问题"。

所以 Pi 的策略是：**先把研究做到最好，商业化的事情可以后面再想。**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 但商业化的潜力已经在显现

"有一些我们做的事情也许已经有一些商业化的价值了。以前我觉得还有一些遥远，但现在感觉其实还挺近的。"

Pi 的 Partner 项目就是例子——其他公司的硬件 + Pi 的大脑 = 商业场景落地。

**K 的预期**：2026 年会有更多令人惊叹的 demo 出来，模型架构会有大变化，人形做操控性任务是"挺成熟的可以开始探索的应用"。

</div>

</div>

---
layout: default
---

# 进入家庭的机器人：最后一公里的多重挑战

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**K 的判断**："所有机器人公司都在争夺的一个隐形指标——谁能做出第一个出货的进入家庭的机器人。"

家中问题的难度是多维度的：环境复杂性（没有两个家一样）、动作复杂性（家务种类无穷无尽）、硬件稳定性（跑一个月不能坏）、安全交互（不能摔在人身上、不能砸地板）。

</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 🏠 环境泛化
就算做过"叠被子"的实验，K 也承认不是百分百——"不是说你到了一个新的家就都能叠"。每一个新的卧室都是全新的布局、光照和物品配置。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 🔧 硬件稳定性
K 的简单测试标准：**"到底有哪家公司能给我一台，我把它放到人家里去，有一个人在后面遥控它，它真的能把我家里我想做的事情都做到，而且它不坏、很稳定——我觉得如果能到这一步，硬件的第一个版本才算真正出来。"**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 🦺 人机安全
看到特斯拉 Optimus，K 最害怕的是"它要在我家里摔了"——摔到人身上怎么办？摔坏地板要花多少钱修？

**体型小的方案**：宇树 G1 小孩般的身高——轻了以后安全性大幅提升，但也限制了它能做的事情范围。

</div>

</div>

---
layout: default
---

# 机器人 vs 自动驾驶 vs 大模型：谁更刺激？

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 🚗 自动驾驶
**比机器人难的地方**：stake 极高——做错决策就是人命，对表现的完满要求极度严苛，需要非常强力的保证。

**比机器人简单的地方**：控制器问题几乎没有（除了雨雪天），决策空间相对较小（从 A 到 B 的路径规划）。

**现状**："已经跑上了"——更多是在降低成本、完善表现。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 🤖 机器人操控
**比自动驾驶难的地方**：多关节复杂机械臂的操控器问题，载重后摩擦力导致的不精确，手腕转动的复杂动作多样性。决策空间极大——叠衣服要多少种手腕动作？

**比自动驾驶简单的地方**：犯错成本低——叠坏了可以重来，"没有生命的危险"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 🧠 大语言模型
**和机器人的相似之处**：都可以"胡说八道"，犯错是大家习惯的事——不需要做到自动驾驶那样严苛。

动作空间都是高度抽象化的（输出字符 vs 输出动作空间）。

**一个好玩的历史**：K 2017 年短暂做过 NLP，训练模型写莎士比亚，结果只会"滋滋滋"——"我说这没用啊，然后人家 2019 年做成功了"。

</div>

</div>

---
layout: default
---

# 机器人是怎么诞生的：从电机到大脑

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

<strong>两层式架构（K 的描述）</strong>：电机是"会动的关节"，6-7 个关节组成一条机械臂（肩、肘、腕）。底层控制负责将位置信号转换为电机执行，上层大脑负责理解任务、做出决策。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 硬件层面
- 关节用 3D 打印件或金属件固定组装
- 通电或气压驱动，接收信号后执行动作
- 位置控制是最常见的操控手段
- "硬件永远可以再便宜一点，再稳定一些"
- 现在比五年前便宜了很多

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 大脑层面
- 看着当前任务 → 决定"要拿桌上的东西，先抬手"
- 把肘关节往上抬的决策发给机械关节
- 关节执行 → 新场景 → 大脑再看 → 下一步
- 当前 VLA 模型在探索：语言不光可以定义任务，还可以提供更丰富的 context

</div>

</div>

---
layout: two-cols
---

# 机器人评估：为什么这么难？

<div class="text-sm leading-relaxed">

### 一个"拿杯子"就有多少变量？

杯子位置、光照条件、背景变化、桌子高度、杯子角度、桌面材质……这些无穷尽的初始条件都会影响最终表现。

NLP 可以在排行榜上跑 benchmark。机器人必须在真实物理环境中运行才能知道结果。"不光分有点难打，还得受到机械和物理的限制。"

### 直接影响"前沿"的定义

没有英雄榜、没有跑马场——每个公司的评估体系不可比较。"大家还没有统一到那条大道上去。"但 K 认为这是暂时的。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eval-challenge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 评估：机器人领域的元问题

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed mt-3">

<strong>为什么评估这么难？</strong>NLP 可以生成一段文字后打分——虽然不容易，但至少是纯数字层面的。机器人必须在真实物理环境中运行才能知道它做了什么，才能打分。"不光分有点难打，还得受到机械和物理的限制。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 无穷尽的初始条件

同样是"拿杯子"这个简单任务：
- 杯子在桌子上的任何位置
- 不同光照、不同背景
- 桌子高度不同、甚至不是桌子而是柱子
- 杯子有自己的角度

"这些无穷尽的初始条件都可能影响最终表现，而你在评估中希望能够把这些东西都评估出来。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 评估直接影响对"前沿"的认知

没有英雄榜、没有跑马场——每个公司内部都有自己的评估体系，但这些体系之间不可比较。

"每个公司都在朝不同方向发展，不知道哪一条线是大道。大家还没有统一到那条大道上去。"

但 K 认为这是暂时的——"最后做出来的东西应该不会太担心这个事情。"

</div>

</div>

---
layout: default
---

# 机器人与大模型的关系：一个模型还是两个模型？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 当前主流：基于多模态模型后训练

大部分机器人团队在现有 VLM（视觉-语言模型）上做后训练，加上动作输出 head。这不是一个独立的"机器人大脑"，而是在通用基座模型上的微调。

**K 的观察**：谷歌 Gemini 展示的空间理解和空间认知能力——虽然不是专门的机器人模型，但这种能力显然对机器人非常重要。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 未来可能：一个模型 vs 独立大脑

**两种可能性并存**：
- 有一天出现一个超级模型，包含所有模态（语言、图像、视频、机器人操控）
- 机器人有一个独立于大语言模型的专属大脑——专门为机器人做预训练、中训练、后训练

**K 的看法**："是有可能的……但我觉得数据量还是太少了，肯定还是要再激进一点。"

</div>

</div>

---
layout: default
---

# Pi 内部的人物群像

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Sergey Levine
- Pi 联合创始人，K 的汇报对象
- 科幻小说重度迷——每篇 Pi paper 开头都有他的科幻引用
- "SergeyGPT"：ChatGPT 出现前就帮学生 polish 论文，又快又好
- "现在 ChatGPT 也不能在论文修改方面和 SergeyGPT 相提并论"
- 从图像学（graphics）转行做机器人——K 很欣赏这种"跨领域转型"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Chelsea Finn
- Pi 联合创始人，每天四点起床游泳
- 对任务和数据设计有"动物性直觉"
- 叠衣服——不同叠法哪个好，她凭直觉就能判断
- 负责过数据收集——知道要收什么样的数据
- 很多 Pi 的任务是她在后面推动——"当时大家其实不知道能不能做"
- K："她说能做，因为她觉得能做"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### Carl Hausman
- Pi CEO，像 Sam Altman 的角色
- 不管具体研究（研究由 Sergey 和 Chelsea 管）
- 负责公司基础架构——保障研究能高效快速进行
- 可能未来会负责商业化方向
- K 和他打交道不多

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>额外的江湖人物</strong>：波士顿动力创始人 Marc Raibert——穿花衬衫参加学术会议被批评后，索性把花衬衫变成了"制服"，推广到整个实验室。"他是有一种叛逆精神在身上的。"
</div>

---
layout: default
---

# 硅谷的机器人黄埔军校：谷歌的"大分流"

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**"2023 年初的机器人黄埔军校应该是谷歌的研究所。"**

ChatGPT 在 2021-2022 年横空出世，动摇了很多人的想法。谷歌做了一个大动作——**把机器人部门变相削减**，把人抽去搞大模型。"这个其实蛮影响大家做机器人的研究，所以很多人就趁这个机会出来创业了。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 从谷歌出来的人
- Pi 的联创（Sergey、Chelsea）都是在谷歌之前做的
- Skild 的联创之前在 Meta 有研究员职位
- Figure、1X 吸纳了不少这一波出来的人
- **Generalist AI** 和 **Sunder Robotics** 也是从这一波出来的——两家都强调用 Umi 作为数据采集手段

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 谷歌原本的优势

K 本科在谷歌实习："Google 就像一堆软件工程师为自己搭的乐园"。

谷歌有工程师基因——TensorFlow、TPU、多模态研究。谷歌如果公开了怎么做，你想追上还得先训一个像 Gemini 这样尺寸的大模型出来——"这已经是一个 bar 了"。

</div>

</div>

---
layout: default
---

# 机器人研究者的日常：科学与人文之间

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

<strong>K 的自我描述</strong>："在工作中没有什么人文的存在。每天讲的是非常物理化、科味化的东西。但和搞人文的朋友聊天时，他们也会好奇机器人的进展。我也会想——是不是有一天，我们创造的智能体能够进行某种意义上超越创作者的创作？"

"也许它会搞一个二维码，每个机器人都觉得这个二维码美极了，而你在这里看了以后有一种不明所以的感觉。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 写小说 vs 做研究

**相同之处**：都需要创造力——机器人现在还做不好，需要想新方法；真正想写的故事还没被写出来，需要把它创造出来。都需要执行力——写代码 vs 一个字一个字地码。

**不同之处**：工作是优化，是纯粹的把大家的好吸纳在一起。人文故事是生活。

"我确实认同自己是对技术有信仰的。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 科幻小说中的两个命题

K 最痴迷的科幻命题：

1. **生产力变化后人们的生活怎么改变**——这和她的工作最相关，"人做的事情被自动化以后，人去做什么，这是我每天都会想的命题。"

2. **在完全不同的未来社会里，人与人之间的关系怎么样**——"有一些人性之类的东西，即使是在生产力大幅度变化的未来科技社会也会流传下去。"

</div>

</div>

---
layout: default
---

# Pi 对标的是 GPT-几？——一个无法回答的问题

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

**问题**：如果 Pi 对标 OpenAI，Pi0.6★ 能对标 GPT-几？

**K 的回答**："这个问题好难回答哦……我每天看的都是这个表现没有很完美、那个表现也不行、我们要怎么把它搞得更好。所以我觉得我们还没有到。但我觉得我们在靠近了。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### NLP vs 机器人的起点差异

K 2017 年短暂做过 NLP——训练模型写莎士比亚，它学会了预测到"滋滋滋"是最简单的输出，于是天天"滋滋滋"。"我说这没用啊，然后人家 2019 年就做成功了。"

**关键差异**：NLP 的起步更容易（数据多、成本低），但给生成文字打分很难。机器人正好相反——任务可以明确评估（杯子拿起来了就是拿起来了），但起步极其困难（硬件贵、数据少）。

**K 的顿悟**："在数据量与 NLP 完全无法比拟的情况下，你已经可以做很多东西出来了——这是一个非常有意思的点。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 会有一个独立的机器人大脑吗？

**K 的预判**：有可能出现独立于大语言模型的专属"机器人大脑"——专门为机器人做预训练、中训练、后训练的完整体系。

**但也不排除另一种可能**："有一天出现一个超级模型，包含所有模态（语言、图像、视频、机器人操控）——那个时候，机器人也许也在模型里面了。"

**当前**：各家公司方向分散而百花齐放。"大家还没有统一到那条大道上去。"

</div>

</div>

---
layout: default
---

# 如果机器人实现了：回家写小说

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

<strong>问：当机器人有一天实现了，你准备去干嘛？</strong>

<strong>K 的回答</strong>："写小说吧，回家写小说。做一个游戏，创造一个非常贴合我喜好的故事，把它分享给别人看，看看有没有其他人喜欢这个东西。诺贝尔文学奖，冲击一下。哈哈哈。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 生产力爆炸后的生活图景

- 家里终于不会被爸妈吐槽"怎么这么乱这么脏"
- 不想干的事情都丢给机器人
- 艺术创作中——有概念就行，执行端全部交给机器人
- 买一个 200 年没修过的古堡，让机器人来修——"现在需要找不同工种的人，将来有两个修房子机器人什么都能做"
- 一个人掌控多个 AI agent 已经是工作常态

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 偷懒是不是人类文明的本质？

**K 的暴论**："是不是偷懒就是人类文明的一个本质追求？提升生产力和偷懒是一个东西。"

她从博士时期就不想"做累的事情"——遥操作太累了就转强化学习，需要跟人沟通太累了就先问 Claude Code。

"如果一件事情可以让机器人来代我做，我会想方设法让别的机器人来帮我做。"

</div>

</div>

---
layout: default
---

# 推荐一本书：Distinction

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-3">

<strong>K 的人生之书：《Distinction: A Social Critique of the Judgement of Taste》（《区隔：品味判断的社会批判》），法国社会学家布迪厄著。</strong>

"这本书讲了社会的阶层和每个阶层的喜好——人生活中的衣食住行方方面面，有很多是经由社会所塑造的。通过看这本书，让我对于我喜好的东西有多少是自己喜欢、多少是社会的塑造的喜欢，产生了更多的认知。"

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 对硅谷的反思

"在硅谷，崇尚着一种对生产力的崇拜。我们已经放弃了对着装、品味的讲究——讲究的是效率、精简、创造。这何尝不是这个社会价值观的一部分？"

K 在工作中狂热追求生产力优化，但她的人文一面让她知道——这只是一个"变化中的缩影"。旧时代贵族追求骑马打球是"更高贵"，而硅谷追求的是更快、更高效。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 最后几个有趣的事实

- **最喜欢的食物**：薯片——"希望在人工智能快要来的时候，留下一些人类的日常生活的印记"
- **最喜欢的地点**：爱丁堡——古建筑和历史厚重感让她感到"一种很安稳的感觉"
- **想纠正的常识**：处女膜在医学上叫阴道瓣，不一定会破裂流血——"我们对于自己的身体构造有着这么多的缺失"

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<div class="italic">"黑猫白猫，抓到老鼠就是好猫。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 对真机数据 vs 仿真数据、传统方法 vs 机器学习的态度。什么数据真的好用就相信谁。</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<div class="italic">"灵巧的关键不在于这个手本身，而在于大脑。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— Matt Mason（K 的祖师爷）的名言，塑造了整个 CMU 操纵学派的研究方向。</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<div class="italic">"机器人太重要了，我们不能只让搞机器人这帮人来搞，我们也得搞。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— Berkeley 教授 Jitendra 的名言。K 认为正面解读是：要想把机器人搞出来，必须各行各业群策群力。</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
<div class="italic">"确实我们不做人形。因为他要说做人形我就不来了你知道吧。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 加入 Pi 的红线。她最想研究的是"做好任务"，不是"做好人形机器人"。</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<div class="italic">"我其实一直很想做的就是，机器人可以造自己。它就像一个种族是有延续性的。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 申请教职时的研究计划，也是她最大的科研梦想。</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
<div class="italic">"左脚踩右脚，看看能不能上天吧。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 对通用能力（zero-shot 泛化）和具体场景优化的关系的比喻。</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="space-y-2 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<div class="italic">"贪心算法每一步都做最优化的决策，做当下的最好。动态规划告诉你——每一步都做最好的决策，并不能让你达到全局的最优解。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 用竞赛算法比喻人生哲学。硅谷到处都是"贪心算法"式的人生选择。</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<div class="italic">"塞翁失马焉知祸福。一时的成功失败、优化有没有做到极致，并不能代表长期最后的结果。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 解释为什么她可以"做九分留一分"，之前那么多"没有做到最后"才让她走到了今天。</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<div class="italic">"很难想象有一家机器人公司组装好一台机器人，这里面没有一个零件是中国的，我觉得是不太可能。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 对中美机器人产业链差异的判断。中国的硬件制造优势是硅谷无法忽视的。</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
<div class="italic">"虽然我们的生命很短暂，只有一百年，放在宇宙历史上微小到不值得一提，但是不是有可能造出一个东西，它可以看到宇宙的尽头？"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 对机器人种族的一个浪漫想象。</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<div class="italic">"是不是偷懒就是人类文明的一个本质追求？提升生产力和偷懒是一个东西。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— K 的暴论，但她确实是这么做的——从博士期间就用这个逻辑选择研究路线。</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="pt-4 text-sm opacity-60">
柯立一鸣（K）· Physical Intelligence 研究员 · 强化学习方向
</div>

<div class="pt-8 text-xs opacity-40">
小峻 × 柯立一鸣 · 2026年7月 · 约3小时48分钟
</div>

<div class="pt-4">
  <span class="text-xs opacity-30">"也许机器人是我第一次觉得我们得把这个事情做到最后。"</span>
</div>
