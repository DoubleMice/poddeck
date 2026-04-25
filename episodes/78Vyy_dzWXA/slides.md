---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '洪乐潼 · AI for Math: 把数学变成 Lean'
info: |
  张小珺对 Axiom 创始人洪乐潼的 4 小时访谈。
  00 后华人女孩、24 岁、57 岁终身教授为她辞职。
  从 MIT 摩根奖得主到 16 亿美元估值创业者的非典型路径。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 洪乐潼 × 把数学变成 Lean

<div class="text-lg opacity-80 mt-4">AI for Math · 形式化证明 · 数学天书中的证明</div>

<div class="mt-10 text-sm opacity-60">
Axiom 创始人洪乐潼 · 对谈张小珺 · 2026<br/>
《商业访谈录》第 137 期 · 4 小时长访谈
</div>

<div class="mt-8 text-xs opacity-50">
24 岁 · 00 后 · 广州女孩 · MIT 本 / 牛津硕 / 斯坦福数学博士辍学<br/>
北美数学本科生最高荣誉摩根奖 · A 轮 16 亿美元
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">一次四小时的对谈，装得下一个全新 AI 领域的来龙去脉，也装得下一个 00 后创业者的心智剖面。</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### AI for Math 地图
从 ATP (1960s) → ITP → Lean → AlphaProof (2024) → Axiom Putnam 满分 (2025)。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 数学 ↔ 代码
math is code, code is math。Lean 让证明既是数学又是程序。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 蛮力 vs 直觉
她自称"蛮力型选手"。AI 数学家也分两派——蛮力型和直觉型，互补。
</div>

</div>

<div class="mt-3 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 创业非典型路径
数学博士 + 法学生 + XTX 量化工，Verve 咖啡店撞上 89 年 Meta 元老。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 截胡 OpenAI
11 月底一封邮件 + 3 天 Zoom，把 57 岁终身教授从 OpenAI 手里抢走。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ASI ≠ AGI
她不做"把圆圈撑大"，她做"向数学这个点直接冲，打开一个扇形"。
</div>

</div>

---

# 嘉宾速览：洪乐潼 × Axiom

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 个人轨迹

- 广州出生，00 后，目前 24 岁
- MIT 数学 + 物理双学位
- 北美数学本科生最高荣誉 **摩根奖** 得主
- 罗德奖学金 → 牛津硕士（神经科学）
- 斯坦福数学博士 + 法学生（辍学）
- 2025 年夏天辍学

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Axiom 公司

- 成立 2025 年 3 月，2025/11 约 30 人
- 种子轮 2025 年春：**6400 万美元**，估值 **3 亿**
- A 轮 2026 年初：**至少 2 亿美元**，估值 **16 亿**（独角兽）
- 领投：Menlo Ventures（Anthropic 最大机构投资人）
- 第一个里程碑：2025/12 Putnam 满分 **98.93%**
- 标志性事件：57 岁终身教授小野肯加入

</div>

</div>

---
layout: two-cols
---

# 蛮力 × 直觉：两种数学家

她一开始的自我定位——**"我是一个蛮力型选手"**——恰好对应了 Axiom AI 系统里两类模型的互补：

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**直觉派（LLM 提纲手）**：看到题就知道"应该 1→2→3→4→5→6→7 步"，快速列出证明大纲。
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**蛮力派（Lean tactic 填写手）**：一个 tactic 一个 tactic 往下走，几千行代码硬生生把题干出来——甚至是 Putnam 题的标准解法。
</div>

<div class="mt-4 text-xs opacity-60">
"会和一些天赋型选手存在一个互补——他们可能有一些脏活累活不愿意干的，我可以把它去干完。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./brute-vs-genius.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "我是打不死的小强"

<div class="text-sm opacity-70 mb-4">她反复拒绝"天赋型选手"的人设，坚持自称"蛮力型"。下面两个故事是她自己给出的证据。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 欧式几何 · 数学奥赛
<div class="text-sm mt-2">

"欧式几何题是必拿的分，你如果不拿欧式几何题你连这个三等奖你都拿不到。"

她的做法：不理解几何意义，用**复数法**大力出奇迹，一个点换一个复数硬算。

需要别人 2-3 倍的时间，但这是她做几何题**唯一的方式**。
</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Sphere packing · MIT 本科
<div class="text-sm mt-2">

Henry Cohn 教授给了她一道 28 维 Sphere packing 的小问题。

**6 个月什么都没想出来**，但每周都去汇报："这是我试过的，没有成功。"

"我是打不死的小强。"
</div>
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
这两种"蛮力"的精神，后来被直接植入了 Axiom 的技术哲学：<strong>AI 就算不够聪明，也可以靠枚举 + 分类讨论把题做出来。</strong>
</div>

---

# MIT 第一学期：博士概率论 4 / 40 分

<div class="text-sm opacity-70 mb-4">她把"不在舒适区"当作默认项。下面是整个访谈里最具体的一个失败故事。</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 场景
- MIT 东校区 Pie 楼（3 West）
- 楼上住的全是 IMO / IPhO / IOI 选手
- 学长给的建议："就是去上最难的课"
- 她和几个大一新生一起冲 **博士概率论**
- 他们以为是算概率，**第一天开始讲测度论**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 期中成绩
<div class="text-center mt-2">

<div class="text-5xl font-bold text-red-600">4 / 40</div>
<div class="text-xs opacity-70 mt-1">班级平均分只有 9/40</div>

</div>

"我从来没有在一个考试上看到自己，一个 40 分的考试我能拿 4 分。"

几个大一小孩**一起决定继续上这门课**——这是她第一次理解社区感 / camaraderie。
</div>

</div>

---

# 自由注意力 vs 被框架的注意力

<div class="text-sm opacity-70 mb-4">她从一位导师那里借来的一对概念，解释"为什么小时候走路上学的时候才最快乐"。</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-2 border-red-300 bg-red-50">

### Bounded attention · 被框架住的注意力
<div class="text-sm mt-2">

- 邮件 / 待办 / deadline
- 每天必须执行
- **成功执行家的主阵地**（扎克伯格）
- 复利、纪律、日复一日 compound
</div>
</div>

<div class="p-4 rounded border-2 border-green-300 bg-green-50">

### Free attention · 自由注意力
<div class="text-sm mt-2">

- 爱因斯坦的洗澡时间
- 走路时的游荡
- **区分平均创业者 / 数学家和优秀者的地方**
- 灵感、直觉、新想法的栖息地
</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>作者的 insight</strong>：两者不是线性配比。自由注意力打好"地基"，才会在 bounded attention 的执行过程里随机 callback——"大脑也不想做那些无聊的事情，它就说唉，我想到了这样的一个比较有创造性的一个想法。"
</div>

---

# 零和游戏 → 正和游戏

<div class="text-sm opacity-70 mb-4">从初中开始她就想跳出奥数圈。不是因为压力太大，而是发现了另一个更大的世界。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 数学竞赛 · 零和游戏

- 同学就是竞争对手（考同一场）
- 考纲是有限的几个考点
- "同时考一场"带来的压力
- 友谊的概念被"排名"污染
- 广东省奥赛小学每月重排 24 个班
- 1 班在楼底，24 班在楼顶

<div class="text-xs opacity-60 mt-3">
竞争欲：<strong>她在拒绝被驯化</strong>
</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 高等数学 · 正和游戏

- 你可以自己决定深度和广度
- 没有考试把所有人摆到同一时刻
- 3-5 人的小部落 / tribe
- 课间传纸条画 8×8 棋盘马步棋
- 像乐高一样**往上搭自己的小宇宙**
- "Lego-Prover" 论文正是这个理念

<div class="text-xs opacity-60 mt-3">
脱离后果：<strong>她考试反而考得更好了</strong>
</div>
</div>

</div>

---

# 对苦难上瘾：chip → chips

<div class="text-sm opacity-70 mb-4">创业两年后，她发现自己从"团队驱动"变成了"难事本身驱动"。</div>

<div class="mt-6 p-5 rounded bg-gray-50 border-l-4 border-gray-500 italic">

"大部分我知道的 founder，他们都对苦难上瘾。"

<div class="text-xs opacity-60 mt-2 not-italic">— 访谈开场 30 秒就抛出的一句话</div>
</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### chip on the shoulder
"感觉我的肩膀上有一些重量，可能是我以前的一些伤痕。"

伤痕 = 肩膀上的 chip
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### → chips in the pocket
"chip 能够转化成口袋里的 chips，chips 就是硬币，就是钱。"

VC 逻辑：对疼痛上瘾 → 小创业公司的成功
</div>

</div>

<div class="mt-5 text-xs opacity-60 text-center">
她引用黄仁勋的 "pain and suffering"，承认"这是一个不一定很健康"的逻辑——但"某种程度上它有一定的正确性在里面"。
</div>

---

# 三种创业者 · 她认自己是 Visionary

<div class="text-sm opacity-70 mb-4">访谈在扎克伯格最早的 Facebook House 录制，她顺势谈起创业者的三种原型。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### Visionary · 远见家
<div class="text-sm mt-2">

马斯克 · 她自己

极度乐观，往下跌一点也还行也还达成 KPI
</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### Executor · 执行狂
<div class="text-sm mt-2">

扎克伯格

每隔一段时间用行动弥补前瞻性的落后
</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### Salesman · 销售派
<div class="text-sm mt-2">

Sam Altman

强沟通能力，能影响、引领、凝聚团队
</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>核心判断</strong>："我觉得一定要互补，就是比如说扎克伯格他身边全是梦想家。" Facebook 早期员工 "bleed purple"——血液里都是 Facebook 那个紫色（因为扎克伯格色盲）。
</div>

---

# 数学到底是什么？· 洪乐潼的定义

<div class="text-sm opacity-70 mb-4">她不走"结构的语言"这种套话，而是从"契约"和"公理的品味"两个角度回答。</div>

<div class="mt-5 p-5 rounded border-l-4 border-blue-500 bg-blue-50 italic text-lg">

"其实某种程度上是数学家，它有一个契约——就是说哪一些东西我们是愿意接受是理所当然的。"
</div>

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 两种公理选择品味

- **压缩派**：希望找最少的公理（compression）
- **搭配派**：希望找最有意思、最合理的一套公理系统

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 数学工作的真相

"很多人觉得数学是解题，但往上搭理论的过程其实很有意思——先从例子出发，发现规律，你觉得很自然而然下一个题应该是怎样，再去证明它。"
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"数学是一个介于艺术与科学之间的一个存在。"
</div>

---

# 被创造 还是 被发现？

<div class="text-sm opacity-70 mb-4">这是访谈早期抛出的"千古辩论"。她的答案揭示了她对"证明"的深层理解。</div>

<div class="mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 拉马努金的故事

印度外星人来到剑桥，对哈代说：

> "嘿，这是我的草稿本，上面这些东西全都是对的。我从来没有接受过数学的训练，我不知道怎么去证明它。"

哈代和 Littlewood 看了觉得：**"这些东西看起来很有意思，他们很新，又感觉是对的。"** 然后他们开始用证明把这些结果变成可接受的。

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<strong>洪乐潼的引申</strong>：证明是一种"影响力"。只要能把东西严丝合缝的逻辑证明出来，数学发现就能被接受——然后才有"美不美、自然不自然"的后续讨论。

这也解释了 Axiom 为什么重押 Lean：<strong>证明被机器接受之后，美才能被人类讨论。</strong>
</div>

---

# Verve 咖啡馆：创业的真正起点

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">2023 年秋 — 2024 年底，她和未来的联创 Shubho Sengupta（89 年入职 Meta 的元老、FAIR director）都是 Palo Alto **Verve 咖啡馆**的常客。</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 他们一开始谁都不知道对方是谁

- 她：抱着三本法律书的斯坦福法学生
- 他：Meta FAIR 前 director，20 年 GPU 经历
- 共同桌：6 人长桌里唯一经常都坐满的那张
- 聊天的起点：她请他把窗边的太阳帘拉下来
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-3">

### 一年半的"漫无目的" reading group

"我们 Zoom 了 4/5 个小时。我们思考的方式特别的又相似又互补。"
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 关键决定发生的地方

2024 秋天，晨跑结束后 → "好像这个事情真的要发生"。

**Verve 咖啡馆拿一张餐巾纸算要融多少钱 / 多少张卡**。结论：没法在学界做，必须创业。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm mt-3">

### 一个墙上的故事

Shubho 告诉她："你买了 1000 杯咖啡，就可以照一张拍立得。"
他们拍了拍立得贴在墙上——**整个 Axiom 办公室的人现在每天都去这个咖啡馆**。
</div>

<div class="mt-3 text-xs opacity-60 italic">
硅谷的叙事：咖啡馆→餐巾纸→独角兽。不是段子，是她亲历的时间线。
</div>

</div>

</div>

---

# 融资：1→2→3 倍，拒绝稀释 50%

<div class="text-sm opacity-70 mb-4">2025 年 1–3 月，三个月三个领投 offer，估值每月翻一倍。她的策略意外地保守。</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 1 月 · 第一个 offer

拒绝。
<div class="mt-2 opacity-70">
"他要 dilute 我 50%，我不可能让他 dilute 我 50%。"
</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 2 月 · Shubho 正式加入

接受了 2 月那一个 offer。她通知其他 VC 自己不会再看。
<div class="mt-2 opacity-70">
价格已经翻倍。
</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 3 月 · Harry Morgan 效应

B Capital 每天打电话。Howard Morgan（**文艺复兴科技联创**）亲自上场。她崩了。
<div class="mt-2 opacity-70">
从第一个 offer 到最后翻了 3 倍。
</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 一个她意外的自我观察

她以为自己讲得乐观，VC 会打 8 折；结果她讲得特别保守（"量化交易不是最终商业模式""第一个市场还没想清楚"），VC 对她的"7 分"再打折就可能**打没了**。

<div class="mt-2 opacity-60">
种子轮：$64M @ $300M post · A 轮：≥ $200M @ $1.6B post
</div>
</div>

---

# 为什么辍学：Peter Thiel 时刻

<div class="text-sm opacity-70 mb-4">融资不是她一个人的 leap of faith，是被迫的——签证、投资人、term sheet 的 closing condition 全部指向同一件事。</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 现实压力

- **辍学是融资的 closing condition**
- 她必须先拿到工作签证才能辍学
- 2024/11 决定创业，12 月没 VC 上班
- 一直拖到 2025 年夏天才正式辍学

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 她给自己讲的扎克伯格故事

19 岁的扎克伯格 × Peter Thiel 餐馆见面：

> "这是我的 term sheet。我们这餐饭不吃完你不签我这东西，我现在撕掉。"

扎克伯格去洗手间哭了一场，回来签了。
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 她的 zip line 隐喻

一个女性创业者聚会让大家去森林玩 ZIP line。她是第一个——"我就不敢下去。后面有一群女性创业者都玩过这个好像。我就只能一闭眼一咬牙，下去。"

> **"这就是你每一天需要去重复的、麻木的 take a leap of faith。"**
</div>

---

# 为什么像 SpaceX 不像模型公司

<div class="grid grid-cols-2 gap-5 mt-3">

<div>

<div class="text-xs opacity-70 mb-2">2025/2 DeepSeek 出来后 VC 对"模型"二字恐慌。她重新解释 Axiom。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**被问**："你们不是模型公司吗？"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">

**她的回答**：
"我们是一个 deep tech 公司——我们做的这件事情有点像 SpaceX。"

<div class="mt-1 opacity-70 text-xs">
要么火箭上去，要么坠毁。<strong>binary outcome</strong>。
</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">

**SpaceX 比喻落在哪**：

- Lean 语言本身是 fragile 系统
- Lean 自带的 comparator 比他们写的**慢 100 倍**
- 他们自己写了 12-13 个加速工具
</div>

</div>

<div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./math-code-twins.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# Axiom 的名字：数学天书中的证明

<div class="text-sm opacity-70 mb-4">她给公司命名的故事，揭示了 Axiom 要做的是"上帝那本书"的一个子工程。</div>

<div class="mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"我自己很小的时候有一本书叫《数学天书中的证明》——就是说如果上帝有一本书，这本书里面会有哪些题。"

<div class="text-xs opacity-60 mt-2 not-italic">—《Proofs from THE BOOK》，Erdős 的"上帝之书"传统</div>
</div>

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Axiom 这个词为什么美

- **与 Lean 形式化语言呼应**：从公理推导新结果
- 像是"有地基，再往上建高楼"
- 很数学、很克制、很理性、又很 sharp
- "它就感觉来自那本天书"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 一个副作用

"我们公司里名字开头是 A 的人也特别多——Alex, Alberto, Armen... 反正一堆名字开头是 A 的我们是 Axiom。"

<div class="mt-2 opacity-60 italic text-xs">
连命名都有 cycle consistency。
</div>
</div>

</div>

---
layout: two-cols
---

# AI for Math 的四根支柱

一个完整的 AI 数学家系统，不只是一个"证明器"。她在访谈里把它拆成**四件事情**：

<div class="mt-3 text-sm">

**① Prover · 证明家** — 给一道题把它做完。这是大家最常讲的核心。

**② Conjecturer · 猜想家** — 提出值得证明的题。"这是目前比较前沿的一个研究问题。"

**③ Knowledge Base · 知识库** — 已证明的可被检索；已知的反例可直接证伪。

**④ Auto-formalization · 自动形式化** — 英语 PDF → Lean 代码。
</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs italic">

"Auto-formalization 这个科技其实比这个证明要更难。我其实觉得是更难。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-pillars.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Draft · Sketch · Prove：2022 年的范式

她反复提到这是整个 AI for Math 领域的 **"收敛做法"**，也是 Axiom 系统内部分工的骨架：

<div class="mt-4 text-sm">

**1. Draft** — LLM 用英语列提纲（informal model）

**2. Sketch** — 把英语提纲翻成 Lean，中间用 `sorry` 占位（Lean 里表示"这一块先不给证，但你知道一定对"）

**3. Prove** — 把所有 `sorry` 填掉
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**填 sorry 的多种武器**：
- 用 AI 模型填
- 用 Hammer（2024 年 6 月 CMU 才出 Lean Hammer）
- 用 Grind（Lean 今年新出的确定性工具）
- 用 ATP 旧时代的纯规则方法
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./draft-sketch-prove.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2025/12/06 · Axiom 拿下 Putnam 满分

<div class="text-sm opacity-70 mb-4">Axiom 从零开始只用 4 个月，就把一个 98 年历史的数学竞赛打穿了。</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 时间
<div class="text-2xl font-bold text-blue-600 mt-1">4 个月</div>
<div class="text-xs opacity-70 mt-1">从 0 到满分</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 成绩
<div class="text-2xl font-bold text-green-600 mt-1">120/120</div>
<div class="text-xs opacity-70 mt-1">Putnam 12 道全对</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 历史排名
<div class="text-2xl font-bold text-orange-600 mt-1">第 6 个</div>
<div class="text-xs opacity-70 mt-1">98 年来的第 6 个满分</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 对比
<div class="text-2xl font-bold text-red-600 mt-1">98.93%</div>
<div class="text-xs opacity-70 mt-1">老版 DeepSeek-Prover: 11%</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 战时状态 · War Room

那天早上，办公室"庞加莱"会议室是 war room。Evan Chen（美国 IMO 队教练）一个人在解题，其他人把题翻成 Lean。

**下午 3:58 拿到 8 道 = 80 分 = 世界前五**。但他们还不确定要不要公布——继续刷到 12 题全对。

Shubho 在会议室名言："**不是说数学纯粹之美的时刻，不要去精确的搞这些东西，现在是战争状态。**"
</div>

---

# 当 AI 选择"笨办法"

<div class="text-sm opacity-70 mb-4">Putnam 满分里最耐人寻味的一题：人类 Evan Chen 看一眼就用图解秒杀。AI 怎么解？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 人类的解法
<div class="text-sm mt-2">

Evan Chen 在会议室画了一个图，大家一看——

> "哦，那你是把它做出来了。"

一张图 = 完整解法。这是天赋型数学家的典型风格。
</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AxiomProver 的解法
<div class="text-sm mt-2">

**几千行 Lean 代码**。

"硬生生地把它某种类似枚举、类似分类讨论，然后就是一步一步一步核实去把它就是干出来。"

这是蛮力型 AI 数学家。
</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm italic">

"这是一个大力出奇迹的 AI。它会去就算是一道很明显可以去做创造力解法的一道题目，它可以通过它自己擅长的东西，去给出一个完全不一样的解法。"
</div>

<div class="mt-3 text-xs opacity-60 text-center">
← 回应了她一直讲的"蛮力 / 直觉互补论"。AI 的"笨"反而是另一种力量。
</div>

---

# 小野肯：截胡 OpenAI 的 3 天

<div class="text-xs opacity-70 mb-3">让这期 episode 登上硅谷头条的故事：57 岁美国终身教授辞职，去给 24 岁华人女孩打工。</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 起点：一封奇怪的邮件

2024/11 底，Ken Ono（小野肯）教授给她发邮件：

> "我要来湾区……如果我加入了 OpenAI 或 DeepMind 的话，我希望你有一个心理准备。"

她的回复：**"你可以来我这里。"**

之前她从没敢邀请他。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 3 天内 Zoom 签下

"就是两三天内"，OpenAI 的 offer 要 explode。

她没 sell，Ken 也没来公司参观——**全程只在 Zoom 上**。

她一度以为"肯定凉了"，结果他来了。
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 关键变量：François Charton

Ken 倾向 Axiom 的关键，是 François Charton 已经在。2019 年 François 和 Guillaume Lample 那篇 Transformer 做微积分的奠基论文的作者，是 Axiom 第 3 号员工。**"它是一个数学俱乐部 —— math club。"**
</div>

---

# 小野肯 · 拉马努金传人

<div class="text-sm opacity-70 mb-4">访谈用了相当长一段讲 Ken。了解他，才知道 Axiom 的数学灵魂在哪。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 数学家身份

- 埃默里大学（Emory）数学教授
- **划分函数**（partition function）领域的权威
- 美国数学学会前任副主席
- 她称他为"高中篮球教练性格的数学家"
- 数学家分两种，他是"**理论建造者**"（连接不同领域的视角）
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 多面身份

- 美国奥林匹克**游泳队**数据教练
- 拍好莱坞电影——拉马努金传第一部、米尔扎哈尼第二部
- 以拉马努金命名的**慈善基金会**
- 白宫政策咨询顾问
- 兄弟一个提琴家、一个原密歇根大学校长

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 一封家族信件

Ken 的父亲是印度政府为拉马努金修雕像时的众筹数学家之一。**拉马努金的遗孀亲笔给他父亲写过信**——这封信至今挂在 Ken 在 Axiom 办公室的墙上。

Ken 高中没毕业、大学绩点不好；父亲用拉马努金的故事勉励他——"任何时候开始也不算晚。"
</div>

---

# 语言是猜想家，数学是约束

<div class="text-sm opacity-70 mb-4">大家常说"语言是 LLM 的拐杖"。她给了一个惊人的推论：<strong>数学也是</strong>，但方向相反。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-2 border-green-300 bg-green-50">

### 语言 · 突破边界的拐杖
<div class="text-sm mt-2">

- 好的 conjecture 需要**幻觉**
- 语言模型天然擅长生成
- 可以大胆跨越已有知识
- → 猜想家、提纲手
</div>
</div>

<div class="p-4 rounded border-2 border-blue-300 bg-blue-50">

### 数学（Lean）· 约束的拐杖
<div class="text-sm mt-2">

- 好的证明需要**严丝合缝**
- Lean 机械化验证
- 作弊 / 幻觉 = 编译失败
- → 证明家、验证器
</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"好的直觉其实就是一个配比——<strong>pattern matching 和幻觉的一个配比</strong>。语言能帮你突破边界，Lean 能把它收回来，两者来回循环。"
</div>

<div class="mt-3 text-xs opacity-60 italic text-center">
作者概括：这是她对"幻觉"的重新解释——不是 bug，是 generation 必需的原料。
</div>

---

# 数学 ≠ 英语：germ 的例子

<div class="text-sm opacity-70 mb-4">她反对把"数学"当成"英语的子集"来让 AI 在英语里做数学。为什么？</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 数学是英语，但<strong>词频分布不一样</strong>

比如代数几何里有一个词叫 **germ**（g-e-r-m）。

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-white border border-gray-200">

**英语里**
germ = 细菌
</div>

<div class="p-3 rounded bg-white border border-gray-200">

**数学里**
germ = 代数几何中的一个技术概念
</div>

</div>
</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 所以 Axiom 的选择

**把数学从英语里切出来，变成 Lean**。Lean 自带可验证性，也自带一种"执行能力"——跑一下就告诉你证明对还是不对。

<div class="mt-2 p-3 rounded bg-white/60 border border-gray-200 italic">

"如果你希望 AI 在英语里面做数学，这不是一个非常好的——至少它绝对不是事情的全貌。"
</div>
</div>

<div class="mt-3 text-xs opacity-60 italic text-center">
疫情期间她在家学代数几何，Lockdown 期间大家一直开 "germ = 细菌" 的玩笑。
</div>

---
layout: two-cols
---

# Recursive Self-Improvement

她最核心的一个 bet。不是赌哪个模型赢，而是赌**系统本身**：

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**猜想家**（conjecturer）提出猜想 →
**证明家**（prover）尝试证明 →
**证明成功** = 明天的训练数据 / skill library →
两边都变强 → 下一轮再开始
</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Jevons Paradox**：她用这个概念解释——当数学变得廉价时，**数学的需求反而会爆炸**（像工业革命里算盘 → 会计师 → 微积分 → 热力学 → 密码学的演化）。
</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs italic">

"我 bet system，我不 bet model。"

"我完全相信 recursive self improvement 是很快就能够做出来的。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./self-improve-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Math Poor → Math Rich

<div class="text-sm opacity-70 mb-4">她对"AI 会改变什么"的一句话总结——不是哪个行业消失，而是整个社会的数学供给量级跃升。</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">

"我们会从一个 math poor 到 math rich 的社会——从数学的匮乏到数学的丰富。这个供给会爆炸。"
</div>

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 过去：math poor

- 能做顶尖数学思维的人是极少数
- 应用科学家找不到懂他们问题的数学家
- "**多少人才出一个伽罗瓦、一个拉马努金？**"
- 伽罗瓦 21 岁决斗挂了
- 拉马努金 30 多岁营养不良走了
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 未来：math rich

- 每个物理学家都能找到理论数学家
- 每个神经科学家都能找到计算神经科学家
- 应用问题上指数级增长的发现
- **数学家变成"资源分配者"** — 决定把有限的 GPU 投到哪道题上
- 像 AlphaFold 那样"fold everything"

</div>

</div>

---
layout: two-cols
---

# ASI ≠ AGI：扇形打法

她对 AI 终局的 hot take，也是 Axiom 技术路线的最大差异点：

<div class="mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**大厂的 AGI 路线**：圈的中心从 1+1=2 开始，一点点**撑大外缘**，最终覆盖黎曼猜想、癌症、莎士比亚——everything。
</div>

<div class="mt-2 p-3 rounded bg-green-50 border-l-4 border-green-500">

**Axiom 的 ASI 路线**：直接冲向"黎曼猜想"这个边缘点，然后从那里**发散出一个扇形**——代码验证、物理、芯片验证……
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs italic">

"ASI = Specialized Super Intelligent，不是 Artificial Super Intelligent。这是我的一个 hot take。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./asi-fan.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 多元产生智能 / 降维打击

<div class="text-sm opacity-70 mb-4">Axiom 的团队组成也是一句口号。她有两句信仰——这两句决定了 Axiom 招什么样的人。</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 多元产生智能

团队必须**三块人**：

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-white border border-blue-200">

**① AI 背景**：强化学习、agents、applied AI
</div>

<div class="p-2 rounded bg-white border border-blue-200">

**② 编译器 / 代码生成**：LLM compiler 团队 · Yann LeCun 的 CodeWorld 32B
</div>

<div class="p-2 rounded bg-white border border-blue-200">

**③ 数学家**：5 个 IMO（含实习生），Ken Ono, Kenny Lau, Evan Chen
</div>

</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 降维打击

"希望能够做一个更难的事情，垂直下来给其他领域降维打击。"

<div class="mt-3 text-sm">

- AxiomProver 能生成 20 页数学证明
- → 芯片验证对他们只是"高中数学枚举法"
- 亚马逊的自动推理团队花 **3-5 年、26 万行代码**手写了内存隔离验证
- Axiom 的野心：把这类痛点一网打尽

</div>
</div>

</div>

---

# "一个有意义的失败 > 肤浅的成功"

<div class="text-sm opacity-70 mb-4">这句话概括了 Axiom 和竞争对手最重要的分歧。</div>

<div class="mt-5 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">

"去解决一个有意义的失败，比很多个肤浅的成功来的更有价值。"
</div>

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 竞争对手的路线（她的视角）

- 更早起步（比 Axiom 早 2 年）
- 融资是 Axiom 的 5 倍（种子时点）
- 打 IMO 金牌
- 觉得 IMO 可能就是**终局**
- 直接做商业落地

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Axiom 的路线

- 只用 4 个月做到 Putnam 满分
- 硬要做**猜想家**（对方觉得不必要）
- 故意挑**没有基础定义的领域**挑战
- 动力系统 / 高级组合 / 随机曲面
- "我们关注它**不能**做的这件事情。"

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center italic">
她反复强调他们"碰了一鼻子灰"——有很多猜想做不出来——但这正是继续往前的理由。
</div>

---

# 好奇心是人类的基本需求

<div class="text-sm opacity-70 mb-4">她用这一句话解释了"为什么这一波 Neo lab 会出现"——包括她自己在内的一批叛逆研究者。</div>

<div class="mt-5 p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic">

"这 Neo lab 的产生就是因为好奇心与创造力是我们人类的基本需求。"
</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 她为大厂 Frontier Lab 辩护

- OpenAI 曾经也是对着 Google 的黑马
- 他们也发不出工资、抢 Ilya 焦头烂额
- 大厂抢 AI 人才 **$100M package**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 但她借 Peter Thiel 的话

> "**垄断导致创新，竞争导致平庸。**"

(她自认这是激进观点)

这种红海竞争**阉割研究员的创造性**——所以他们出来做 Neo lab。
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 一个 1 亿美元也买不走的东西

"所以说不管是现在是 one hundred million、一亿美元的大包，也无法去压制住这一些青年研究者的这个好奇心。"
</div>

---

# 对 2026 AI 的 5 条预测

<div class="text-xs opacity-70 mb-3">访谈尾声她被问到 2026。答案很具体、很"小公司中心"。</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**① Continue learning 小模型**
<div class="text-xs opacity-70 mt-1">
Neo lab 做，她好朋友在做，"第一个"很快会出
</div>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**② Multimodal reason 模型**
<div class="text-xs opacity-70 mt-1">
也是 Neo lab 做，"应该很快就会问世了"
</div>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**③ Agent economics scale up**
<div class="text-xs opacity-70 mt-1">
整个 agent 经济学会被全面放大
</div>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**④ Orchestrator**
<div class="text-xs opacity-70 mt-1">
"很好值得做的"——还没有人做好
</div>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**⑤ Formal verification tooling as RL reward**
<div class="text-xs opacity-70 mt-1">
"完全是 under-explored。跟我们做的很有关系。"
</div>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**⑥（加分预测）**
<div class="text-xs opacity-70 mt-1">
<strong>传统 SaaS 会死</strong>；forward deployment 尚未被革新
</div>
</div>

</div>

---

# 她现在最快乐的状态是什么？

<div class="text-sm opacity-70 mb-4">访谈里的一个惊人回答。她不是在扮演 CEO——她是在学着怎么当一个"不要死掉"的创业者。</div>

<div class="mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">

"我自己最快乐的一个状态绝对不是 CEO 的状态——我自己最快乐的状态就是我能够当一个 research scientist intern。"
</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Intern 模式
- "我说的话如果比较愚蠢，大家认为是正常的。"
- 她是 AI for Math research scientist intern
- 一个小事故：她随手提了一个 benchmark 想法，结果实习生把它当成 CEO 战略任务去做了
- **从那以后她变得更 hands off**
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 现在的学徒身份

"创业公司 99% 他都会死掉，怎么我现在是 Don't die 的学徒——Brian Johnson 有一个好玩的 Don't die movement。"

<div class="mt-2 opacity-60 italic">
从"学徒人"到"学徒事"到"学徒 Don't die"。
</div>
</div>

</div>

---

# 会议室命名战争

<div class="text-sm opacity-70 mb-4">Axiom 有 5 个会议室，大家差点在 Slack 上打起来——因为"喜欢的数学家不一样"。</div>

<div class="grid grid-cols-5 gap-3 mt-6 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 高斯
<div class="text-xs opacity-70 mt-1">Gauss</div>
<div class="text-xs opacity-60 mt-1">她自己的偶像</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 庞加莱
<div class="text-xs opacity-70 mt-1">Poincaré</div>
<div class="text-xs opacity-60 mt-1">Putnam war room</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 希尔伯特
<div class="text-xs opacity-70 mt-1">Hilbert</div>
<div class="text-xs opacity-60 mt-1">polymath</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### Lovelace
<div class="text-xs opacity-70 mt-1">Ada Lovelace</div>
<div class="text-xs opacity-60 mt-1">唯一的女性</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 图灵
<div class="text-xs opacity-70 mt-1">Turing</div>
<div class="text-xs opacity-60 mt-1">跨世纪</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 入选规则：polymath

"大家认为庞加莱、希尔伯特、高斯这些都是 polymath——他们不止会一个领域。所以拉马努金就是这么落选的，他只会数论。"

我们要做 AI 数学家，希望它**没有 distribution shift** 问题。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Shubho 的红线
Shubho 明确表态——"**如果你不给其中一个叫图灵，我就走了。**"

她说："行行行，那就是图灵。"

<div class="mt-2 text-xs opacity-60">
世界各地的数学家还发邮件抗议为什么没有 Emmy Noether。
</div>
</div>

</div>

---

# 如果能与任何数学家共进晚餐

<div class="text-sm opacity-70 mb-4">快问快答环节，她选了两个——这两个选择同时揭示了她的品味和她的自知。</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 她会选：Erdős（埃尔德什）

<div class="text-sm mt-2">

- 做组合学 → 餐桌上能直接讲
- 一个"**非常古怪、有趣又古灵精怪**"的人物
- 访谈里最活泼的瞬间之一
</div>
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 她拒绝选：Grothendieck（格罗滕迪克）

<div class="text-sm mt-2">

"如果不是我的话，就是说另外一个人跟格罗滕迪克共进晚餐，应该意义会很大。"

"但是我这个代数几何学的不是特别好，所以跟格罗滕迪克**可能容易浪费这个宝贵的机会**。"
</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 一个窥见她世界观的细节

问她墓志铭要写什么，她答"**别写**"。

再问当数学家是不是很重要——

> "曾经觉得是很重要的……但后来觉得，其实就是我想当学徒。"

<div class="mt-2 opacity-70 italic">
她把自己定义成"学徒"而不是"创业者"。这是整个访谈最稳定的她的自我描述。
</div>
</div>

---

# 墓碑 × ego × 登月

<div class="text-sm opacity-70 mb-4">访谈最深的一段——她谈到斯坦福 Memorial Church 那天清晨的一次顿悟。</div>

<div class="mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 场景

创业前，她在 Palo Alto 晨跑。那天平时都绕着跑的 Memorial Church，她跑了进去。

教堂有壁画、天使、十字架。阳光特别好。

"**如果一个人的木制碑上可能印了一个他曾经证明出来的事情，是他的智力遗产——**"

<div class="text-xl mt-3 font-semibold text-yellow-800">

"**那么如果能够让这个东西乘以 1 亿，你会不做？**"
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 她自己的承认

"当然这个我觉得也自己就——这是一个出于 ego 的一个想法。就是说我希望登月，也希望登月的是我们。"

<div class="mt-2 opacity-80">

"这个肯定是出自于一点这种 ego 或者说自私的雄心壮志。**但是总体上这个事情我是非常希望它会实现的。**"
</div>

<div class="mt-2 opacity-70 italic">
"对，就算我们是失败了，可能要谁其他人登上去了，也是一件好事。"
</div>
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期 4 小时访谈最值得记住的十条原话：</div>

<div class="grid grid-cols-2 gap-2 text-xs">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"大部分我知道的 founder 他们都对苦难上瘾。"
<div class="opacity-60 mt-1 not-italic">— 开场 · 对创业者群体的观察</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"我是打不死的小强。"
<div class="opacity-60 mt-1 not-italic">— MIT Sphere packing 6 个月无果</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"数学是一个介于艺术与科学之间的一个存在。"
<div class="opacity-60 mt-1 not-italic">— 给数学的定义</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"math is code and code is math."
<div class="opacity-60 mt-1 not-italic">— Curry-Howard 对应，Axiom 哲学起点</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我只是那个递水的人。"
<div class="opacity-60 mt-1 not-italic">— 为何资历更高的人愿让她当 CEO</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"我 bet system，我不 bet model。"
<div class="opacity-60 mt-1 not-italic">— 基于当下认知最关键的 bet</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"垄断导致创新，竞争导致平庸。"
<div class="opacity-60 mt-1 not-italic">— 引用 Peter Thiel · 解释 Neo lab</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"去解决一个有意义的失败，比很多个肤浅的成功来的更有价值。"
<div class="opacity-60 mt-1 not-italic">— 与竞争对手的根本分歧</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我自己最快乐的状态就是我能够当一个 research scientist intern。"
<div class="opacity-60 mt-1 not-italic">— 她对 CEO 角色的诚实态度</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"我现在是 Don't die 的学徒。"
<div class="opacity-60 mt-1 not-italic">— 借 Brian Johnson · 总结当下</div>
</div>

</div>

---
layout: end
---

# "math is code, code is math"

<div class="mt-8 text-base opacity-80">

"我觉得我们目前非常期待一个——
**让推理能力成为最顶尖的推理能力成为一个默认状态**的这样一个情况，
**且是能够自我验证的推理能力**。
这是我目前个人的一个理想。"

<div class="text-xs opacity-60 mt-4">
— 洪乐潼 · 对 universal representation theory 的当代翻译
</div>

</div>
