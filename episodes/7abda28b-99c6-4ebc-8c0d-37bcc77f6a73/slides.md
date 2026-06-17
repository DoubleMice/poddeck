---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E226｜聊聊DeepMind创始人哈萨比斯：一个科学家与失控的AI竞赛'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E226｜聊聊DeepMind创始人哈萨比斯

## 一个科学家与失控的AI竞赛

<div class="mt-8 text-sm opacity-60">
硅谷101 × 周健工（《哈萨比斯：谷歌AI之脑》中文译者）
</div>

<div class="mt-4 text-xs opacity-40">
2026年2月
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">神童起源</div>
<div class="text-xs mt-1 opacity-70">四岁下棋、十三岁大师，两个顿悟时刻将他从棋盘引向计算机科学</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">AGI运动发起者</div>
<div class="text-xs mt-1 opacity-70">在ChatGPT出现十年前，哈萨比斯已经发起了通用人工智能运动</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">两条AI路线之争</div>
<div class="text-xs mt-1 opacity-70">强化学习 vs 深度学习，Sutton vs Hinton，DeepMind的执念与觉醒</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700">谷歌收购博弈</div>
<div class="text-xs mt-1 opacity-70">Peter Thiel 的赌注、扎克伯格的邀约、Larry Page 的一句话，如何改写 AI 格局</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700">ChatGPT冲击</div>
<div class="text-xs mt-1 opacity-70">"他们把坦克开到了我们家草坪上"——DeepMind如何从落后中反击</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700">奥本海默之问</div>
<div class="text-xs mt-1 opacity-70">一个想用AI理解宇宙的科学家，能否控制自己亲手创造的力量？</div>
</div>

</div>

---

# 神童的起点：棋盘上的少年

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed">

**哈萨比斯的童年关键词**：

- **四岁**看大人下国际象棋，五岁开始自己对弈
- **九岁**入选英国 11 岁以下国际象棋队
- **十三岁**成为国际象棋大师，全球同龄排名第二
- 常常屁股下垫两本厚书才能看清棋盘，一下就是**八到十个小时**

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"他个子本来就很矮小……经常是屁股底下垫两个厚厚的书，他才能看着棋盘"
</div>

</div>

<div class="flex flex-col gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<div class="font-bold">移民家庭的全力托举</div>
<div class="text-xs mt-1 opacity-70">母亲是新加坡华人，父亲是塞浦路斯希腊人。父母倾其所有，父亲开着破车带他遍游英国和欧洲参赛</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<div class="font-bold">父母眼中的"已经成功"</div>
<div class="text-xs mt-1 opacity-70">在父母看来，国际象棋大师已经是极高的成就。但哈萨比斯自己，却有了不同的想法</div>
</div>

</div>

</div>

---

# 第一个顿悟：十一岁的弃局

<div class="mt-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg leading-relaxed">
"他在列支敦士登跟丹麦的一位国际象棋冠军对弈……一口气下了十个小时。他突然想到一个问题：<strong>难道我就在下棋中度过这一辈子吗？</strong>"
</div>

<div class="mt-4 text-sm leading-relaxed">

这局棋按水平本该是和棋。但哈萨比斯看着大厅里所有的棋手，又想到一个问题：

<div class="p-3 mt-2 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"这个屋子里所有的人都是世界上可能最聪明的人。他们难道把自己的智力<strong>全部用在下棋这一件小事上吗？</strong>"
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">
<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<span class="font-bold">他做了什么</span>：直接投子认输，放弃了一局本能求和的对局。对手大为震惊。
</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<span class="font-bold">这意味着什么</span>：从这一刻起，下棋对他的意义不再重大，胜负也变得不重要。他在寻找更大的智力挑战。
</div>
</div>

</div>

---

# 第二个顿悟：一本改变命运的小书

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed">

11 岁那年，父亲带他去伦敦最大的书店。他遇到了一本薄薄的小册子——英国国际象棋大师 **David Levy** 写的关于如何编程国际象棋程序的书。

这本书立刻将哈萨比斯从**国际象棋的世界**，连接到了**计算机的世界**。

书中提到了一个关键人物：**克劳德·香农（Claude Shannon）**，信息论之父。

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<span class="font-bold">香农的预见（1950年）</span>：如果我们能编程下象棋，那么这个编程也可能完成其他智力和认知任务——它可能具有通用性，可能是一个<strong>通用计算机</strong>。
</div>

</div>

<div class="flex flex-col gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">象棋 → 编程</div>
<div class="text-xs mt-1 opacity-70">从"怎么赢"转变为"机器怎么学会赢"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">利维的书 → 香农的理论</div>
<div class="text-xs mt-1 opacity-70">一本编程入门书打开了信息论和通用计算的大门</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">棋童 → AI先驱</div>
<div class="text-xs mt-1 opacity-70">这次启蒙为他二十年后创建DeepMind埋下了种子</div>
</div>

</div>

</div>

---

# 游戏公司岁月：野心撞上算力之墙

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed">

**第一次：牛蛙公司（Bullfrog）**

16 岁被剑桥录取后推迟入学，加入当时欧洲顶级的游戏公司。在游戏中设计"智能体"的雏形——角色会因吃咸食物而口渴，对环境产生反馈。

**第二次：万灵药工作室（Elixir Studios）**

剑桥毕业后与 David Silver 联合创业。设计了野心极大的游戏《共和国》——同时模拟**上千个独立思维的角色**，引擎号称能渲染无限多边形。

</div>

</div>

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm mb-3">
<div class="font-bold">惨痛的失败</div>
<div class="text-xs mt-1">2003 年，电脑的显卡、CPU、内存都跟不上野心。演示关键时刻掉链子，Silver 临阵脱逃，游戏被砍掉大量功能才勉强上线，评价平平。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<div class="font-bold">核心教训</div>
<div class="text-xs mt-1">再好的算法和想法，<strong>没有足够的算力支撑，只能停在纸面上</strong>。这个教训贯穿了哈萨比斯后来整个 DeepMind 的决策逻辑。</div>
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"如果你不能把一个东西造出来，你就不能真正理解它。" — 费曼，哈萨比斯最推崇的一句话
</div>

</div>

</div>

---

# 创立 DeepMind：三个特别的联合创始人

<div class="mt-3">

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg text-blue-700">德米斯·哈萨比斯</div>
<div class="text-xs mt-2 leading-relaxed opacity-80">
神经科学博士，国际象棋大师，游戏设计师。股份是 Shane Legg 的 <strong>9 倍</strong>、苏莱曼的 <strong>14 倍</strong>。
</div>
<div class="text-xs mt-1 opacity-60">"先解决AI，再用AI解决一切"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg text-green-700">Shane Legg</div>
<div class="text-xs mt-2 leading-relaxed opacity-80">
新西兰人，伦敦大学学院结识哈萨比斯。是那个<strong>把哈萨比斯引向硅谷奇点大会</strong>的人，间接连接了 Peter Thiel 和 Elon Musk。
</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg text-purple-700">穆斯塔法·苏莱曼</div>
<div class="text-xs mt-2 leading-relaxed opacity-80">
牛津神学辍学生，靠开冰淇淋铺起步。<strong>如今是微软 AI 部门掌门人</strong>。他与哈萨比斯的裂痕，是整本书的一条暗线。
</div>
</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<span class="font-bold">注</span>：David Silver（强化学习领域旗帜人物）本应是最合适的联合创始人，但因万灵药工作室的失败而离开。后来 Silver 主动跑去加拿大 Alberta 大学追随 Richard Sutton（强化学习之父）读研。
</div>

</div>

---

# 融资困境：谁会投资一台"上帝机器"？

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<div class="font-bold">第一位天使</div>
<div class="text-xs mt-1 opacity-70">一个英国投资人听完哈萨比斯讲 AGI 后，认定这是"一架上帝需要的机器"。<strong>出于宗教信仰</strong>投了几十万英镑。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<div class="font-bold">MIT 导师</div>
<div class="text-xs mt-1 opacity-70">他在 MIT 做博士后时的指导教授说："哈萨比斯将来一定拿诺贝尔奖，而且是费曼和克里克那个级别的。"投了 <strong>10 万美元</strong>——"我就这么多了"。</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-3">
<div class="font-bold">金融街的反应</div>
<div class="text-xs mt-1 opacity-70">"你们还不如加入我们公司去做量化交易呢，干嘛搞那玩意儿？"——大多数投资人觉得他们是骗子。</div>
</div>

</div>

<div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<div class="font-bold">Peter Thiel 的逆向赌注</div>
<div class="text-xs mt-1 opacity-70">Founders Fund 投了三轮。但 Peter Thiel 本人并不看好——他说哈萨比斯是"在科学上能做顶级发现，在商业模式上完全不成立的那种人"。最终是合伙人 <strong>Nosek</strong> 力排众议，绕过投委会表决才投成的。</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
<div class="font-bold">周凯旋的关键救援</div>
<div class="text-xs mt-1 opacity-70">B 轮融资 2500 万美元，周凯旋（李嘉诚家族基金管理人）领投约 <strong>1000 万美元</strong>，在哈萨比斯最缺钱的时候救了 DeepMind。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">Founders Fund 为什么不跟了？</div>
<div class="text-xs mt-1 opacity-70">2013年 AlexNet 突破，AI 人才身价暴涨——Peter Thiel 认为<strong>共识 = 泡沫</strong>，决定不再追加。他的投资逻辑：反共识买入，共识形成就退出。</div>
</div>

</div>

</div>

---

<div class="flex justify-center items-center h-full">

<div class="w-[460px]">
<Excalidraw
  drawFilePath="./rl-vs-dl.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 两条 AI 路线：一场持续三十年的学派之争

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<div class="text-sm leading-relaxed">

**强化学习阵营（DeepMind 的 DNA）**

- **Richard Sutton**（Alberta 大学），强化学习之父
- David Silver 主动跑去冰天雪地的 Alberta 追随 Sutton 读研
- 核心逻辑：试错 + 反馈 + 奖励机制
- 游戏是完美环境——规则清晰、边界明确、奖励可量化

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
两个学派之间壁垒森严：从 Sutton 那边来的研究生想去 Hinton 那里读博，对方说："你那套强化学习要放弃的。"
</div>

</div>

<div>

<div class="text-sm leading-relaxed">

**深度学习阵营（后来居上者）**

- **Geoffrey Hinton**（多伦多大学），深度学习之父
- 核心逻辑：从海量数据中归纳模式
- AlexNet（2012）在图像识别上超越人类，引爆 AI 热潮
- Transformer 架构改变了游戏规则

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<span class="font-bold">现实的融合</span>：到 AlphaFold 时代，强化学习和深度学习已经深度交融。OpenAI 后来的推理模型（O1）和人类反馈，本质上也在用强化学习。
</div>

</div>

</div>

---

# 谷歌收购：一架私人飞机上的秘密

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"Elon Musk 跟 Larry Page 一起看 SpaceX 发射，在回加州的私人飞机上谈起神经网络。Musk 炫耀说：'我已经开始投资一家公司了，叫 DeepMind。' Larry Page 听完，<strong>默默掏出安卓手机，记下了 DeepMind 的名字</strong>。"
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<div class="font-bold">扎克伯格的邀约</div>
<div class="text-xs mt-1">小扎邀哈萨比斯去家里深谈，但列了一大堆技术赛道（AI、VR、AR、3D 打印）。哈萨比斯大失所望：他想找一个真正看重 AGI 的人，而不是把 AGI 当作众多方向之一。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<div class="font-bold">Larry Page 的一句话</div>
<div class="text-xs mt-1">"你为什么不来谷歌呢？你的目标不是追求 AGI 吗？<strong>那我已经在这里为你准备了一切。</strong>"——这句话打动了哈萨比斯。他厌倦了融资，只想专心做研究。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<div class="font-bold">6.5 亿美元成交</div>
<div class="text-xs mt-1">参考了 Hinton 团队 3 人 4500 万（人均 1500 万）的定价。DeepMind 30-40 名顶级 AI 研究员，人均 1500 万，总计约 5-6.5 亿。哈萨比斯个人估值约 1.4 亿。</div>
</div>

</div>

</div>

---

<div class="flex justify-center items-center h-full">

<div class="w-[480px]">
<Excalidraw
  drawFilePath="./deepmind-milestones.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# AlphaGo：攻克人类最难的棋类游戏

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="text-sm leading-relaxed">

**为什么选围棋？**

- 被谷歌收购后，DeepMind 拥有了全球最强的算力和人才
- 国际象棋已被 IBM 深蓝攻克，不再有挑战
- 围棋的可能性远超国际象棋——当时普遍认为计算机在围棋上战胜人类是"天方夜谭"

**2016 年首尔**：AlphaGo 击败李世石，世界震惊。

哈萨比斯本人围棋水平大约初段，但他深知围棋的难度远超国际象棋。

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-3">
<div class="font-bold">哈萨比斯对 Larry Page 的承诺</div>
<div class="text-xs mt-1 opacity-70">"我们将战胜围棋的世界冠军。" Page 吃惊地问要多长时间。哈萨比斯随口答：<strong>"两年吧。"</strong></div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-3">
<div class="font-bold">强化学习的巅峰</div>
<div class="text-xs mt-1 opacity-70">围棋是一个规则清晰、奖励机制明确的完美环境——强化学习的威力发挥到极致。AlphaGo 和后续的 AlphaZero 大获成功。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<div class="font-bold">围棋与 AlphaGo 的局限性</div>
<div class="text-xs mt-1 opacity-70">游戏世界的成功≠通用智能。哈萨比斯知道，下一步必须走出游戏，进入真实世界的科学问题。</div>
</div>

</div>

</div>

---

# AlphaFold：从围棋到蛋白质折叠的跨越

<div class="text-sm leading-relaxed mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mb-3">
<span class="font-bold">背景</span>：生物学家安芬森提出，蛋白质的结构由氨基酸链决定。自然界约 20 种常见氨基酸，理论上可以组合出几乎无限的结构。破解这个映射关系，就是破解了"生命的第二遗传密码"。
</div>

<div class="grid grid-cols-2 gap-3">

<div>

**从游戏到科学的灵感来源**：

- David Baker（华盛顿大学）做了个叫 **Foldit** 的蛋白质折叠游戏，全球几千人玩
- 国际上有蛋白质折叠竞赛 **CASP**
- 2016 年在首尔，哈萨比斯对 David Silver 说："我们把围棋攻克了，下一个目标是不是蛋白质？"
- 一个关键信条：**没有哈萨比斯玩不赢的游戏**

</div>

<div>

**技术路线的三次转向**：

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-400 text-xs mb-2">
<strong>1. 循环神经网络</strong>：蛋白质是序列问题？效果一般。
</div>
<div class="p-2 rounded bg-green-50 border-l-4 border-green-400 text-xs mb-2">
<strong>2. 卷积神经网络</strong>：蛋白质是图像识别问题？效果好转。
</div>
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-400 text-xs">
<strong>3. Transformer</strong>：John Jumper 加入后转向深度学习，最终 AlphaFold2 采用 Transformer，2020 年得分 92.4 分，颠覆了整个领域。
</div>

</div>

</div>

</div>

---

# 诺贝尔奖：机器破解了生命的密码

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-70">2018 年首次参赛</div>
<div class="text-4xl font-bold text-blue-600 my-2">97</div>
<div class="text-xs opacity-70">击败的团队数量<br/>CASP 竞赛首秀即碾压</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-70">2020 年 AlphaFold2</div>
<div class="text-4xl font-bold text-green-600 my-2">92.4</div>
<div class="text-xs opacity-70">GDT 得分<br/>颠覆了整个结构生物学</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-70">2024 年诺贝尔化学奖</div>
<div class="text-4xl font-bold text-yellow-600 my-2">3</div>
<div class="text-xs opacity-70">获奖者：哈萨比斯、Jumper、Baker<br/>半个世纪的难题终被攻克</div>
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">John Jumper 的关键作用</div>
<div class="text-xs mt-1">这位跨学科天才（数学、统计、量子物理、化学、生命科学）曾在 DE Shaw 对冲基金的科研部门工作多年，深谙蛋白质折叠的原子间动力学。是他决定<strong>转向机器学习</strong>，得到哈萨比斯的全力支持。
</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<div class="font-bold">AlphaFold 的意义</div>
<div class="text-xs mt-1">这证明了 AI 不只是游戏工具——它可以直接推动基础科学的突破。这是哈萨比斯"用 AI 解决一切"使命的第一个重量级科学验证。
</div>
</div>

</div>

---

# 在谷歌的挣扎：独立之梦与"马里奥计划"

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-3">

<div>

**DeepMind 与谷歌的结构性矛盾**：

- 谷歌全资收购，但哈萨比斯想要**最大程度的独立性**
- 苏莱曼为 DeepMind 争取设立 AI 安全与伦理委员会（3-3-3 结构），最终不了了之
- Alphabet 成立后，谷歌想把长期不盈利的业务分离出去——DeepMind 首当其冲

</div>

<div>

**"马里奥计划"——秘密独立方案**：

- 苏莱曼推动脱离谷歌，效仿 OpenAI 的非营利架构
- 首先找 LinkedIn 创始人 Reid Hoffman，初步答应 10 亿美元
- 然后找蔡崇信，未果
- 最终劈柴（Sundar Pichai）果断拒绝了苏莱曼的副总裁任命，独立计划破产

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<span class="font-bold">"谷歌的承诺"</span>：曾一度承诺未来十年给 DeepMind <strong>150 亿美元</strong>研究经费。但这个承诺后来没有完全兑现。哈萨比斯最在乎的始终是：<strong>有足够的资源做研究</strong>——这一点上，谷歌最终满足了他。
</div>

</div>

---

# 苏莱曼：从联合创始人到微软 AI 掌门人

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-3">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">
<div class="font-bold">苏莱曼在 DeepMind 的角色</div>
<div class="text-xs mt-1">负责商业化探索和 AI 伦理治理。他从小就有强烈的"社会正义"信念，对 AI 的安全与社会影响特别关注。</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-2">
<div class="font-bold">NHS 风波——裂痕的导火索</div>
<div class="text-xs mt-1">苏莱曼主导与英国 NHS 合作，使用 <strong>160 万份患者资料</strong>训练模型（识别肾衰竭风险）。虽然初衷是改善医疗，但隐私问题引爆了公共舆论危机，严重损害了 DeepMind 和哈萨比斯的声誉。</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-2">
<div class="font-bold">博弈高手</div>
<div class="text-xs mt-1">苏莱曼同时用马斯克和扎克伯格作为牌跟谷歌博弈，抬高收购价格。他一直在推动 DeepMind 商业化。</div>
</div>

</div>

<div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-2">
<div class="font-bold">裂痕扩大</div>
<div class="text-xs mt-1">内部举报导致哈萨比斯对苏莱曼的管理作风启动调查。彭博突然爆料两人闹掰，苏莱曼自己都莫名其妙。他最终被边缘化，离开 DeepMind。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-2">
<div class="font-bold">苏莱曼的后续轨迹</div>
</div>

<div class="text-xs mt-1">

- 离开 DeepMind → 谷歌给虚职副总裁，待了两年
- 创立 **Inflection AI**
- Inflection AI 被**微软收购** → 苏莱曼成为**微软 AI 部门掌门人**
- 现在：哈萨比斯掌管谷歌 AI，苏莱曼掌管微软 AI——昔日合伙人，今日对手

</div>

</div>

</div>

</div>

---

# ChatGPT 冲击：当"坦克开进自家草坪"

<div class="mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded italic text-lg leading-relaxed">
"他们把<strong>坦克开到了我们家草坪上</strong>。"
<div class="text-sm mt-1 opacity-70 not-italic">——哈萨比斯对 ChatGPT 发布的反应</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div>

<div class="font-bold text-red-600 mb-2">哈萨比斯为什么错过了大语言模型？</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-300 mb-2 text-xs">
<strong>研究优先级的致命排序</strong>：① 强化学习 → ② 神经科学 → ③ 数据归纳（LLM 在这个分支里排第三位）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-300 mb-2 text-xs">
<strong>对语言的藐视</strong>：哈萨比斯坚信 AGI 必须是"接地的"（grounded），认为语言不接地。但 Ilya Sutskever 反驳：<strong>语言中间接反映了人类大量接地的经验和逻辑</strong>。
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-300 text-xs">
<strong>低估产品和工程</strong>：他以为 DeepMind 是纯研究机构，但 OpenAI 证明了产品化和规模化部署对推进 AGI 同样关键。
</div>

</div>

<div>

<div class="font-bold text-blue-600 mb-2">OpenAI 的闪电战</div>

<div class="text-xs leading-relaxed">
DeepMind 在 GPT-2 时才"关注"，到 GPT-3 才真正警醒。当时谷歌内两个团队（DeepMind 的 Sparrow + Google Brain 的 LaMDA/Bard）各做一个大模型，计划花几个月慢慢发布——结果 ChatGPT 突然横空出世。

更致命的是：DeepMind 和谷歌在安全审查上极为谨慎（2022 年 6 月谷歌工程师声称"AI 有意识"被开除事件加剧了内部保守倾向），而 OpenAI 选择了"先发布再说"。

</div>

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>哈萨比斯的反思</strong>：他不得不承认，如果不让更多人用 AI，"General" 就毫无意义。科学 + 工程 + 产品 + 商业，四者缺一不可。
</div>

</div>

</div>

</div>

---

# 谷歌的反击：DeepMind + Google Brain 合并

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div>

<div class="font-bold text-lg text-blue-700 mb-2">2023 年 4 月：决定性的组织变革</div>

- GPT-4 + Bard 发布失败 → 谷歌进入**内部危机状态**
- 谢尔盖·布林回归上班，"蹲在那儿跟大家一起看代码、看数据、看模型"
- **Google DeepMind 成立**：两大 AI 部门合并
- CEO 是哈萨比斯，不是 Jeff Dean——证明劈柴当初阻止 DeepMind 独立，就是为了这一天

</div>

<div>

<div class="font-bold text-lg text-green-700 mb-2">工作方式的四大调整</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-400 text-xs mb-1">
<strong>集中算力</strong>：DeepMind 一家占的算力比 Gmail 几十亿用户都多，所有资源集中攻克大模型
</div>
<div class="p-2 rounded bg-green-50 border-l-4 border-green-400 text-xs mb-1">
<strong>削减"蓝天研究"</strong>：减少自由探索，增加工程化导向
</div>
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-400 text-xs mb-1">
<strong>前沿成果不发表</strong>：放弃"谷歌总是第一时间发表"的传统
</div>
<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-400 text-xs">
<strong>突击队模式</strong>：回到 DeepMind 早期风格——谁在哪个模块突破就立刻内部公开、立刻采纳，高强度的精英协作
</div>

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<span class="font-bold">结果</span>：Gemini 系列（Flash、Thinking、原生多模态、长上下文）陆续推出，谷歌在 AI 测评榜上重回顶尖。推理模型落后 OpenAI 两三个月，但凭借强化学习底蕴迅速赶上。
</div>

---

# 哈萨比斯其人：科学家、竞争者，还是被裹挟的囚徒？

<div class="mt-3">

<div class="grid grid-cols-2 gap-3 text-sm">

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-2">
<div class="font-bold">"他是个好人"</div>
<div class="text-xs mt-1 opacity-70">周健工的第一印象：矮小、秃顶、"像一个普通研究所里搞科研的人"。但一开口，思想极其流畅清晰，跨学科知识切换自如。"任何智力上的挑战对这个人可能没有任何障碍。"</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">
<div class="font-bold">科学精神的纯粹性</div>
<div class="text-xs mt-1 opacity-70">他不是为了做产品、不是为了赚钱。用他自己的话说，是"为了<strong>理解宇宙</strong>"。他想发明一个机器，能完成比爱因斯坦和牛顿更伟大的发现。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">与硅谷的不同</div>
<div class="text-xs mt-1 opacity-70">Dario Amodei 在达沃斯将 AI 创业者分为三类：科学家、工程师型企业家、社交网络转行者。哈萨比斯和 Amodei 自己属于第一类——"做科学的人天生有向善的情怀"。</div>
</div>

</div>

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-2">
<div class="font-bold">极强的竞争性</div>
<div class="text-xs mt-1 opacity-70">任何智力游戏不玩则已，一玩就要赢——桌面足球、扑克、双陆棋、象棋。他说自己"不愿意控制别人"，但"一定要赢过别人"——这算不算另一种控制？</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-2">
<div class="font-bold">绝地武士般的说服力</div>
<div class="text-xs mt-1 opacity-70">口才极佳，"可以把所有人砍晕"。连马拉比这样老练的传记作家，在 30 多个小时的私下对话后，也倾向于相信他话中的真诚。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">作者立场之问</div>
<div class="text-xs mt-1 opacity-70">马拉比是英国人，哈萨比斯是"英国国宝"。书中对哈萨比斯的写法"有一点点过于好了"。周健工认为：有些内容是 PR，但多数是真心的。哈萨比斯潜移默化影响了作者。</div>
</div>

</div>

</div>

</div>

---

<div class="flex justify-center items-center h-full">

<div class="w-[480px]">
<Excalidraw
  drawFilePath="./hassabis-character.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 奥本海默之问：科学家能否控制自己创造的"炸弹"？

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-3">
<div class="font-bold">哈萨比斯所处的历史位置</div>
<div class="text-xs mt-1">DeepMind 办公室旁边就是当年物理学家<strong>希拉德萌发核连锁反应堆想法</strong>的路口。哈萨比斯说自己每天经过那里都会想：现在正在做的事情，重要性跟原子弹不相上下。
</div>

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-400 text-xs">
<strong>书的扉页引用了冯·诺伊曼</strong>：<br/>
"我们知道这个威力太大，但是我们作为科学家，如果我们不履行我们发现的天职，这是违背我们科学伦理的。但是一旦把这些产品的威力释放出来，我们可能成为世界上最被憎恨的人。"
</div>
</div>

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<div class="font-bold">乐观者 vs 悲观者</div>

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">

<div class="p-2 rounded bg-green-50">
<span class="font-bold">哈萨比斯</span><br/>
AI 是有史以来最有益的技术。后稀缺时代、治愈疾病、解决能源危机。科学是一种精神追求。
</div>

<div class="p-2 rounded bg-red-50">
<span class="font-bold">Geoffrey Hinton</span><br/>
"我们完了。" AI 可能毁灭人类。多次在公开场合发出末日警告。
</div>

<div class="p-2 rounded bg-purple-50">
<span class="font-bold">Bengio</span><br/>
图灵奖得主，发出 AI 末日警告。
</div>

<div class="p-2 rounded bg-orange-50">
<span class="font-bold">哈萨比斯（最新）</span><br/>
开始在 AI 峰会上警告："AI 系统越来越自主，一旦偏离预设轨道，后果可能非常严重。"
</div>

</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<span class="font-bold">书的结尾留下一个开放问题</span>：哈萨比斯一直想做正确的事情，但他能做到吗？
</div>

</div>

</div>

---

<div class="flex justify-center items-center h-full">

<div class="w-[460px]">
<Excalidraw
  drawFilePath="./ai-safety-dilemma.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"难道我就在下棋中度过这一辈子吗？"
<div class="text-xs opacity-60 mt-1 not-italic">— 11岁的哈萨比斯，在列支敦士登的棋局中顿悟</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"如果你不能把一个东西造出来，你就不能真正理解它。"
<div class="text-xs opacity-60 mt-1 not-italic">— 费曼的名言，哈萨比斯最推崇的信条</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"你为什么不来谷歌呢？你的目标不是追求 AGI 吗？那我已经在这里为你准备了一切。"
<div class="text-xs opacity-60 mt-1 not-italic">— 拉里·佩奇，一句话打动哈萨比斯接受谷歌收购</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"他们把坦克开到了我们家草坪上。"
<div class="text-xs opacity-60 mt-1 not-italic">— 哈萨比斯对 ChatGPT 发布的愤怒反应</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"他是一个好人。他的真正的理想还是科学发现。"
<div class="text-xs opacity-60 mt-1 not-italic">— 周健工对哈萨比斯的核心评价</div>
</div>

</div>

---

# 核心金句（二）

<div class="space-y-2 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"对我来说，科学是一种精神追求。"
<div class="text-xs opacity-60 mt-1 not-italic">— 哈萨比斯，解释他造 AI 的终极动机</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"探索的乐趣对他来说实在是太大了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 来自传记，解释为什么即使知道 AI 威力巨大，他仍无法停止</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"他一边说他不要控制别人，另一边他的行为，是不是涉及到控制？"
<div class="text-xs opacity-60 mt-1 not-italic">— 书中反复讨论的哈萨比斯的矛盾性</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"我们知道这个威力太大，但不发明违背科学伦理。一旦释放出来，我们可能成为世界上最被憎恨的人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 冯·诺伊曼，书的扉页引言，映射哈萨比斯的处境</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm italic">
"哈萨比斯一直想做正确的事情，但是他能不能做到，这是一个问号。"
<div class="text-xs opacity-60 mt-1 not-italic">— 书的结尾留下的未解之问</div>
</div>

</div>

---

# AI 竞赛的格局：一个由 DeepMind 引发的连锁反应

<div class="text-sm leading-relaxed mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mb-3">
<span class="font-bold">理解今天 AI 格局的关键线索</span>：几乎所有重大事件都可以追溯到 DeepMind 的创立。
</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>DeepMind 2010 成立</strong> → AGI 运动发端
</div>
<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>谷歌收购 DeepMind（2014）</strong> → Elon Musk 为抗衡谷歌，联合创立 OpenAI
</div>
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>OpenAI 非营利架构</strong> → 反过来激励哈萨比斯寻求独立（"马里奥计划"）
</div>
<div class="p-2 rounded bg-red-50 border-l-4 border-red-400">
<strong>苏莱曼离开 DeepMind</strong> → Inflection AI → 微软收购 → 苏莱曼成为微软 AI 掌门人
</div>
<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>ChatGPT 冲击（2022）</strong> → DeepMind + Google Brain 合并 → Gemini 反击
</div>
<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>现在</strong>：谷歌 vs 微软 vs OpenAI — 三巨头格局，各有前 DeepMind 人在关键位置
</div>

</div>

</div>

---

# 尾声：理解宇宙，还是打开潘多拉之盒？

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed">

**这本书留下的核心追问**：

哈萨比斯的使命是用 AI 理解宇宙——他说 AGI 将带人类进入后稀缺时代：开采小行星、解决核聚变、从海水提取燃料。

但在制作这期节目的过程中，哈萨比斯也开始公开警告 AI 的风险：系统越来越自主，一旦偏离预设轨道，后果可能非常严重。

**一个科学家想用 AI 去理解宇宙，却发现自己可能亲手打开了潘多拉的盒子。**

</div>

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-3">
<div class="font-bold">马拉比的判断</div>
<div class="text-xs mt-1 opacity-70">驱动这本书的最底层叙事力量：AGI 是威力无比的技术，也可能是人类终极技术。发明它的这一小撮人，动机是什么？这个动机可能直接影响这个技术对人类的未来意味着什么。哈萨比斯是其中最关键的一个人物。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<div class="font-bold">硅谷101的观察</div>
<div class="text-xs mt-1 opacity-70">我们但愿聊到的这个天才是一个好人。也希望在整个 AI 的构建过程中，这些人都是好人，而不是被资本绑架的。但这个问号，还悬在那里。</div>
</div>

</div>

</div>

---

<div class="flex justify-center items-center h-full">

<div class="text-center">

<div class="text-3xl font-bold mb-4">感谢收听</div>

<div class="text-lg opacity-70 mb-6">
E226｜聊聊DeepMind创始人哈萨比斯：<br/>一个科学家与失控的AI竞赛
</div>

<div class="text-sm opacity-50">
硅谷101 × 周健工<br/>
《哈萨比斯：谷歌AI之脑》中文译者
</div>

<div class="mt-8 text-xs opacity-40">
本期节目录制于2026年春节前夕<br/>
完整内容请收听硅谷101播客
</div>

</div>

</div>

---

layout: end
---

# 谢谢

<div class="text-sm opacity-50 mt-4">
硅谷101 · 2026年2月
</div>
