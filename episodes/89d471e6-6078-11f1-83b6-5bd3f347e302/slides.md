---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why MSTR Should Have Sold $2 Billion Instead of $2 Million of Bitcoin'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Why MSTR Should Have Sold $2B<br>Instead of $2M of Bitcoin

<div class="text-lg opacity-60 mt-4">
Jeff Dorman · Arca CIO · Unchained with Laura Shin
</div>

<div class="text-sm opacity-50 mt-8">
Strategy（前 MicroStrategy）的资本结构困局与四难选择
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**全球最大上市公司 BTC 持有者**<br>
Strategy 持有 ~$57B BTC，占全部流通量的 4%。它的每一步操作都会震动整个加密市场。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**六年飞轮首次逆转**<br>
Michael Saylor 从 2020 年起建立的"发股→买币→股价涨→再发股"飞轮正在瓦解。他第一次成为了 BTC 卖家。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**$1.7B 年息压顶**<br>
优先股股息让一家不赚钱的公司每年必须掏出 17 亿美元现金。四个利益方无法同时满足。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**一次教科书级的资产负债表失误**<br>
募了 $2B 现金说要付股息，转眼花 $1.4B 回购了三年后才到期的债务。12 个月缓冲变 4 个月。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Polymarket 争议**<br>
"Strategy 五月是否卖出 BTC？"——明知已卖，合约却判定为"否"。预测市场可信吗？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Jeff Dorman 的逆向建议**<br>
不应该卖 $2.5M 试探市场——应该一次性卖 $2B，"撕掉创可贴"反而能安抚市场。

</div>

</div>

---

# Strategy 的资产负债表 — 数字一览

<div class="grid grid-cols-4 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

**BTC 持仓**
<div class="text-3xl font-bold text-orange-600 my-1">$57B</div>
<div class="text-xs opacity-70">占流通量 4%</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**MSTR 市值**
<div class="text-3xl font-bold text-blue-600 my-1">$48B</div>
<div class="text-xs opacity-70">mNAV ≈ 1.23</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**优先股**
<div class="text-3xl font-bold text-purple-600 my-1">~$15B</div>
<div class="text-xs opacity-70">年息 10-12%</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

**债务**
<div class="text-3xl font-bold text-red-600 my-1">$6.7B</div>
<div class="text-xs opacity-70">单 B 信用评级</div>

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<div class="font-semibold">⚡ 核心矛盾：</div>
BTC 持仓 $57B 远大于所有负债（$15B + $6.7B = $21.7B），资产完全覆盖债务。问题不在资不抵债——在<span class="font-semibold">现金流</span>。一家不赚钱的公司，每年要筹 $1.7B 现金支付优先股股息。
</div>

---

# 四个利益方 — 谁在资本结构里？

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### 四类参与者，四种诉求

<div class="space-y-2 mt-3 text-sm leading-relaxed">

<div class="p-2 rounded bg-blue-50 border-l-3 border-blue-500">

**BTC 持有者** — 全球持币人<br>
<span class="text-xs opacity-70">最大的单一持有者开始卖出 → 情绪恐慌 → BTC 跌。他们的利益最脆弱。</span>

</div>

<div class="p-2 rounded bg-green-50 border-l-3 border-green-500">

**MSTR 股东** — 股票持有者<br>
<span class="text-xs opacity-70">买 MSTR 就是买"每股 BTC 持续增长"的故事。一旦卖出 BTC，这个故事就破了。</span>

</div>

<div class="p-2 rounded bg-purple-50 border-l-3 border-purple-500">

**优先股持有者** — 追求 12% 年息<br>
<span class="text-xs opacity-70">主要是散户。他们不在乎 BTC 涨跌，只要股息按时发放。股息一断，跌 30-40%。</span>

</div>

<div class="p-2 rounded bg-orange-50 border-l-3 border-orange-500">

**债权人** — 债务持有者<br>
<span class="text-xs opacity-70">最安全的一层：$57B BTC 质押 $6.7B 债，清算时有充分保障。</span>

</div>

</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./capital-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 优先股：问题的根源

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-4">

**关键变化：2024 年底，Strategy 开始在资本结构中大量引入优先股。**

在此之前，资本结构很简单：卖股票 → 买 BTC，偶尔加一点低息/零息可转债。债务仅 $6-7B，相对于 $40-50B 的股本市值微不足道。

</div>

<div class="grid grid-cols-2 gap-4">

<div>

### 优先股带来的问题

- **总额膨胀到 ~$15B**（STRC 单只就 $11B）
- **年息 10-12%**，即每年 $1.7B 现金支付义务
- Strategy 是一家**不赚钱**的公司
- 过去没有外部压力迫使卖币——零息可转债只需要到期再融资
- 现在：**必须每年掏出 $1.7B 现金**

</div>

<div>

### Jeff Dorman 的判断

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

> "So really, in tennis terms, this was a pretty unforced error."

</div>

<div class="text-xs opacity-70 mt-2">
<span class="font-semibold">作者概括：</span>Dorman 认为引入这类高息优先股没有必要性。Saylor 本可以继续在原有简单结构下"混日子"数十年，没有任何强制出售 BTC 的触发条件。这个 $1.7B 年度现金义务完全是自找的。
</div>

</div>

</div>

</div>

---

# $1.7B 年息 — 数字拆解

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**优先股总额**
<div class="text-4xl font-bold text-purple-600 my-2">~$15B</div>
<div class="text-xs opacity-70">STRC 等四只优先股</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

**年股息率**
<div class="text-4xl font-bold text-red-600 my-2">10-12%</div>
<div class="text-xs opacity-70">累计优先股，不付也累积</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

**年度现金需求**
<div class="text-4xl font-bold text-orange-600 my-2">$1.7B</div>
<div class="text-xs opacity-70">每月 ~$150M</div>

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**对比：BTC 升值覆盖**<br>
在 $57B BTC 持仓上，每年只需升值 **~2.5%** 就能产生 $1.7B 收益来覆盖股息。这不是一个不可能的数字——但它依赖于"BTC 一直涨"的假设。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**对比：公司收入覆盖**<br>
Strategy 本身不赚钱。它没有传统意义上的经营性现金流可以支付股息。所有现金来源只有三条路：发股、发债、卖币。没有第四条。

</div>

</div>

---

# $2B 现金缓冲 — 一个错误的转折

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 事情经过

<div class="space-y-3 mt-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**第一步：安抚市场**<br>
三个月前，市场开始担心 Strategy 是否有能力支付优先股股息。STRC（最大优先股）跌至面值以下。公司募了约 **$2B**（优先股 + 普通股），说"现在你们至少不用担心一年半"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**第二步：完全相反的操作**<br>
一个月后，Saylor 拿出其中 **$1.4B**，以 92 美分/美元的价格回购了 **2029 年到期的可转债**。这笔债还有三年才到期，而且大部分是零息或低息。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**第三步：缓冲消失**<br>
一年半的现金缓冲变成了 **四到五个月**。市场再次恐慌，Strategy 被迫在周一宣布卖出 BTC——虽然只有 $2.5M，但"试探性出售"的信号让 BTC 大跌 5%。

</div>

</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cash-cushion.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三连错 — 信心是如何流失的

<div class="mt-2 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

<div class="text-lg font-bold text-red-600 mb-1">错误一</div>
<div class="font-semibold">大量引入高息优先股</div>
<div class="text-xs opacity-70 mt-1">把 $1.7B 年度现金赤字永久化，破坏了一个本可以"混日子"数十年的简单结构。</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-lg font-bold text-orange-600 mb-1">错误二</div>
<div class="font-semibold">用现金缓冲回购远期债务</div>
<div class="text-xs opacity-70 mt-1">说好募 $2B 是为了付股息，转身花 $1.4B 买回 2029 年债务——完全与承诺相反。</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

<div class="text-lg font-bold text-yellow-600 mb-1">错误三</div>
<div class="font-semibold">卖出 $2.5M BTC 试探市场</div>
<div class="text-xs opacity-70 mt-1">为了让市场适应"我们可能会卖"的想法，做了一次名义金额出售。结果 BTC 暴跌 5%。</div>

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"At the moment he's lost the confidence of the market. It doesn't mean he can't get it back, but it's a very slippery slope, as you know, a confidence game, when something is built on a house of straws like this."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman, on the three consecutive missteps</div>
</div>

</div>

---

# 四种选择 — 每种都在伤害不同的人

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### 详细的利害分析

<div class="space-y-2 mt-2 text-sm leading-relaxed">

<div class="p-2 rounded bg-orange-50 border-l-3 border-orange-500">

**卖 BTC** — 对优先股好（有现金付息）<br>
对 BTC 坏（最大持有者在卖）<br>
对 MSTR 坏（每股 BTC 下降，故事破裂）<br>

</div>

<div class="p-2 rounded bg-blue-50 border-l-3 border-blue-500">

**卖 MSTR 股票** — 对 BTC 好（买盘需求）<br>
对优先股好（有现金付息）<br>
对 MSTR 坏（在 mNAV 1.23 时发行不增值，稀释股价）<br>
<span class="text-xs opacity-70">Dorman: "death spiral for the stock"</span>

</div>

<div class="p-2 rounded bg-purple-50 border-l-3 border-purple-500">

**发更多债** — 对 BTC 和优先股好<br>
对 MSTR 坏（失去标普 500 纳入资格）<br>
对信用评级坏（已经是单 B）<br>
<span class="text-xs opacity-70">刚回购了债又发新债？自相矛盾</span>

</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**核选项：削减优先股股息** — BTC 和 MSTR 安全<br>
优先股暴跌 30-40%<br>
可能被散户起诉<br>
资本市场融资渠道永久关闭<br>
<span class="text-xs opacity-70">Dorman: "last resort"</span>

</div>

</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-options.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 当前最可能的选择？— 概率分析

<div class="mt-3 text-sm leading-relaxed">

Dorman 的分析框架：这不是"哪个选项好"的问题——**四种选择中，总有一个利益方要被牺牲**。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 最不可能：削减股息（核选项）

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2 text-xs">
Saylor 一直把这些优先股当作"地球上最安全的 12% 收益工具"向散户推销。突然停发股息会引发大规模诉讼，永别资本市场。
</div>

### 次不理想：卖 MSTR 股票

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2 text-xs">
在 mNAV 低于 1.26 时发行不增值。公司自己承认这个临界值。当前 mNAV 约 1.23——在临界线以下持续稀释会让股票进入死亡螺旋。
</div>

</div>

<div>

### 正在做的：卖 BTC

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2 text-xs">
Dorman 认为这已经是既定轨道——$2.5M 只是"让市场适应"的试探。但问题是：这次卖 $2.5M 就让 BTC 跌了 5%，卖 $2B 会怎样？
</div>

### Dorman 的反向建议

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-xs">
<span class="font-semibold">撕掉创可贴，一次卖 $2B。</span>发公告说："我们做了一次大额出售，覆盖一年半的股息。接下来我们不再是被迫卖家，而是机会主义买家。"这反而可能安抚市场——明确性消除不确定性。
</div>

</div>

</div>

<div class="mt-3 p-3 bg-gray-50 border rounded text-xs opacity-70 leading-relaxed">
<span class="font-semibold">作者概括：</span>Dorman 的"大额一次清"策略建立在资本市场心理学上——市场不怕坏消息，怕的是不确定性和持续流血。一次性的明确信号比反复试探更有安抚效果。但这也取决于 BTC 在 $2B 卖出压力下的实际承接力。
</div>

</div>

---

# 信心游戏 — 六年的飞轮正在停转

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### 飞轮逻辑

Strategy 的模式从来不是靠经营赚钱——它是一个**信心驱动的循环**：

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-sm leading-relaxed">
<strong>市场相信你 → 股票和优先股价格高 → 你能以溢价发行更多 → 用募来的钱买更多 BTC → BTC/股增长 → 市场更相信你 → 循环继续</strong>
</div>

### 但这只在下行前有效

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3 text-sm leading-relaxed">
一旦信心破裂，反向飞轮启动：你变卖 BTC → 市场恐慌 → 股价和优先股跌 → 发行能力消失 → 没钱付股息 → 变卖更多 BTC
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./confidence-game.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 信心游戏 — Dorman 的核心诊断

<div class="mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4 italic">
"This flywheel that he's created over six years is just slowly dying and he's put too many pieces in the puzzle that can't be serviced at the same time."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman</div>
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**三个接连失误**（续）
1. 过度加杠杆引入优先股
2. 用股息安全垫回购远期零息债
3. 零头试探性卖币引起恐慌

<div class="text-xs opacity-70 mt-2">每个决定单独看可能都有技术理由，但叠加在一起破坏了市场对这个模式的信心。</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**核心悖论**
Saylor 想同时维护四个利益方（BTC 持有者、MSTR 股东、优先股持有者、债权人），但飞轮一旦逆转，就无法同时满足所有人。

<div class="text-xs opacity-70 mt-2">"Someone is going to lose badly here" — Dorman 的预测推文</div>

</div>

</div>

<div class="mt-3 p-3 bg-gray-50 border rounded text-xs opacity-70 leading-relaxed">
<span class="font-semibold">作者概括：</span>这不是一个"BTC 跌到多少会爆仓"的清算问题——BTC 持仓 $57B 完全覆盖所有负债 $22B。问题在时间：四个利益方中至少有一个等不及。Dorman 认为 Saylor 在过去 9 个月内下注 BTC 会大涨来解套，但市场没有配合。
</div>

</div>

---

# 为什么是 $2B 而不是 $2.5M？

<div class="mt-3 text-sm leading-relaxed">

Jeff Dorman 的逆向逻辑 —— 他在 Unchained 上给出的建议，和 Strategy 实际做的完全相反。

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Strategy 的实际操作

<div class="text-xl font-bold text-red-600 mb-2">卖 $2.5M · 试探市场</div>

- 认为"先卖一点，以后卖大额时市场就习惯了"
- 结果是 BTC 跌了 5%
- 传递信号："最坏的情况还没来"
- 市场不确定性增加，恐慌加剧

<div class="mt-2 p-2 bg-white rounded text-xs italic">
Dorman: "That was really stupid, because you see the reaction, right? Bitcoin just fell 5% on a two and a half million dollar sale. What do you think they're going to do when they sell two billion?"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Dorman 的建议

<div class="text-xl font-bold text-green-600 mb-2">一次卖 $2B · 撕掉创可贴</div>

- 一次覆盖一年半股息需要
- 发公告："做完了。以后不再是被迫卖家。"
- 明确性消除不确定性
- 然后可以宣布：我们仍是机会主义买家，会买回比卖掉更多的 BTC

<div class="mt-2 p-2 bg-white rounded text-xs italic">
Dorman: "I would have ripped the bandaid off and sold two billion of Bitcoin, and just said... you knew that this was possible at some point. We did it. But by doing so, we're going to maintain the dividend on the prefs."
</div>

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">
<span class="font-semibold">关键洞察：</span>金融市场的恐慌通常不是由坏消息本身引起的，而是由不确定性引起的。一次大额出售 + "不会再有"的保证，可能比反复试探 + "随时可能更大"的威胁更能稳定情绪。但代价是——一次性 $2B 卖压对 BTC 现货市场的实际冲击有多大，没人真正知道。
</div>

</div>

---

# 乐观情形 — BTC 大涨解千愁

<div class="mt-3 text-sm leading-relaxed">

Dorman 讲了两条"一切搞定"的路径——但每条都有前提。

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 路径一：BTC 大涨

<div class="text-xs opacity-80 mt-1">
如果 BTC 大幅上涨：
<ul class="mt-1 space-y-1">
<li>股权价值上升 → 能以高溢价增发股票 → 募得现金付股息</li>
<li>$1.7B 年息相对于 $57B BTC 持仓只需 ~2.5% 年涨幅就能覆盖</li>
<li>飞轮重新转动：卖股票 → 买币 → 更多币/股 → 股价涨 → 再卖股票</li>
</ul>
</div>

<div class="mt-2 p-2 bg-white rounded text-xs italic">
Dorman: "If Bitcoin goes way higher, it solves all of his problems."
</div>

<div class="mt-2 p-2 bg-red-50 rounded text-xs">
<span class="font-semibold">问题：</span>这正是 Saylor 过去九个月的赌注——但 BTC 没有配合大涨。Dorman 称之为"clearly miscalculation"。
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 路径二：宣布不再买 BTC

<div class="text-xs opacity-80 mt-1">
如果 Saylor 达到了他的"魔力数字"（比如 5% 总流通量）：
<ul class="mt-1 space-y-1">
<li>宣布"买够了，不再买了"</li>
<li>就可以停止支付优先股股息</li>
<li>"抱歉，你们买优先股时就知道风险"</li>
<li>虽然永久丧失资本市场融资能力，但既然不再需要融资，就没关系了</li>
</ul>
</div>

<div class="mt-2 p-2 bg-red-50 rounded text-xs">
<span class="font-semibold">问题：</span>优先股持有者会遭重创（跌 30-40%），可能引发诉讼，且 Saylor 仍在积极买币——他显然还没到"够了"的阶段。
</div>

</div>

</div>

</div>

---

# 你应该站在哪个位置？— 资本结构中的生存指南

<div class="mt-2 text-sm leading-relaxed">

Dorman 按不同场景给出了资产优先级分析。

<div class="grid grid-cols-2 gap-3 mt-3">

<div>

### 如果发生破产清算（极低概率）

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-green-50 border-l-3 border-green-500">
<span class="font-semibold">最安全：债务</span><br>
<span class="text-xs">$57B BTC 支撑 $6.7B 债务 → 完全覆盖。零息可转债交易在 70-80 美分只因转换期权价外——若违约概率上升，会反弹至面值。</span>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500">
<span class="font-semibold">次安全：优先股</span><br>
<span class="text-xs">$15B 优先股 + $7B 债 = $22B vs $57B BTC。清算时本息能收回。但人们买优先股是为了 12% 股息——如果股息被砍，跌 30-40% 的过程会很痛苦。</span>
</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">
<span class="font-semibold">最危险：MSTR 股票</span><br>
<span class="text-xs">在清算中最后得到偿付。在非清算场景下也被持续稀释和卖币预期压制。Dorman: "I don't see any scenario where you'd really want to own the MSTR stock right now."</span>
</div>

</div>

</div>

<div>

### 如果不发生违约（高概率）

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500">
<span class="font-semibold">优先股是豪赌</span><br>
<span class="text-xs">如果认为股息削减是四年后而非一年后的事，且每年 12% 的收益值得冒险，可以持有。但不确定性极高。</span>
</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">
<span class="font-semibold">BTC 持有者面临逆风</span><br>
<span class="text-xs">最大单一持有者在可预见的未来将成为净卖家（或至少是卖家）。BTC 在很大程度上是情绪驱动的资产。</span>
</div>

<div class="p-2 rounded bg-blue-50 border-l-3 border-blue-500">
<span class="font-semibold">Dorman 的总结</span><br>
<span class="text-xs italic">"No matter what part of the capital structure you own here, there is higher risks today than there were nine months ago."</span>
</div>

</div>

</div>

</div>

<div class="mt-3 p-2 bg-gray-50 border rounded text-xs opacity-70">
<span class="font-semibold">⚠️ 免责：</span>Dorman 在节目开头声明"nothing I say should be construed as investment advice"。以上为他的分析框架，不是投资建议。
</div>

</div>

---

# Saylor 的历史 — 每次都能掏出兔子？

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

### 不能完全排除反转可能

Dorman 指出，Saylor 在职业生涯中**多次从帽子里掏出兔子**：

- MicroStrategy 从一家软件公司转型为"比特币国库公司"本身就是一次惊人的 pivot
- 在 2022 年熊市期间，很多人预测他的杠杆会被清算——但并没有
- Saylor 的融资创新（零息可转债、ATM 发行、优先股等）在传统金融看来是不可想象的

</div>

<div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

> "Saylor has pulled a rabbit out of the hat multiple times in his career, with multiple companies. It's entirely possible that he figures out a way to do it again."

<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman</div>

</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

Dorman 同时承认他之前也没预料到这次危机——就在去年 11 月他还在说"MicroStrategy 不是 BTC 的风险"。因为他"never expected anyone to do that, because you'd be absolutely out of your mind crazy to do that"——指引入 $16B 优先股。

</div>

</div>

</div>

<div class="mt-3 p-3 bg-gray-50 border rounded text-xs opacity-70 leading-relaxed">
<span class="font-semibold">作者概括：</span>Dorman 的分析框架是概率性的，不是宿命论的。他列出了 Saylor 可能从中找到出路的几条途径（BTC 大涨、发行更多可转债、意外的战略合作等）。但他认为当前的概率分布对 Strategy 和所有相关方都不利——"no matter what part of the capital structure you own here, there is higher risks today than there were nine months ago."
</div>

</div>

---

# Polymarket 争议 — 一个无关但又相关的话题

<div class="mt-3 text-sm leading-relaxed">

Polymarket 上有一个合约问"Strategy 是否在 5 月 31 日前卖出 BTC"。事实确凿：公司在 5 月 26 日至 31 日间卖出了 32 BTC（$2.5M），6 月 1 日（周一）通过 8-K 公告披露。

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 合约为何判定为"否"？

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**时间差争议**<br>
5 月 31 日是周日。公告在 6 月 1 日（周一）发出。合约截止日是 5 月 31 日——部分参与者认为"截止日时没有公开证据"。

<span class="text-xs opacity-70">Dorman 的反驳：合约写的是"will they sell it"，不是"will they announce it"。而且合约的实际截止日期（按代码）是 7 月 1 日。</span>

</div>

<div class="p-2 rounded bg-orange-50 border-l-3 border-orange-500">

**治理漏洞**<br>
少量 UMA Protocol 验证者（Dorman 称为"insiders"）投票判定为"否"。他们中有人先行买入"否"合约，然后再投票——经典的内部人操弄。

</div>

</div>

</div>

<div>

### Dorman 的愤怒

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">

"It's insanity. Like there is indisputable evidence that they sold Bitcoin in May, and the contract was written on Polymarket that says, 'Will Strategy sell Bitcoin in May?'"

</div>

<div class="mt-2 text-xs leading-relaxed">

**类比**：赌超级碗周日的结果，但因为报纸的计分板周一才出，就说比赛没在周日结束。

**后续影响**：在 5 月 31 日之后（此时已知 BTC 确实在 5 月被卖出）继续交易的人，买入"是"合约的人全部亏损——因为验证者说"否"才是正确答案。

</div>

</div>

</div>

<div class="mt-3 p-2 bg-gray-50 border rounded text-xs opacity-70">
<span class="font-semibold">作者概括：</span>这个事件的问题不在于"截止日规则应该怎么定"——而在于预测市场本应提供"清晰、及时的结果"（Carr 的论点），但当治理被少数内部人操纵时，它失去了这个功能。Dorman 的担忧是这会让 Polymarket 和 UMA 丧失公信力——"I don't know how anybody can take a market like this seriously."
</div>

</div>

---

# Polymarket 争议 — 规则 vs. 现实的张力

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

<div class="font-semibold text-base mb-1">反方观点（Carr @ Polymarket）：</div>
<div class="text-xs leading-relaxed">"允许截止日后证据会造成'后见之明'结算。交易者被迫无限期等待未来可能或不可能出现的披露。一个在截止日看起来未解决的合约，可能因新信息在数日、数周甚至数月后突然翻转。这与预测市场应提供清晰、及时结果的原则相悖。"</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div>

### Dorman 的三条反驳

<div class="space-y-2">

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500 text-xs">
<strong>1. 代码证明截止日其实是 7 月 1 日</strong>——有人查看了 Polymarket 合约代码，截止日本应是 7 月 1 日，不是 5 月 31 日。
</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500 text-xs">
<strong>2. 合约措辞应明确</strong>——如果规则是"截止日时必须有公开可验证的证据"，合约应该明确写出来，而不是写"Will they sell it"误导用户。
</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500 text-xs">
<strong>3. 如果 5 月 31 日是截止日，合约应立即停止交易</strong>——让已经"确定"的合约继续交易，是在收割后续交易者。
</div>

</div>

</div>

<div>

### 更大的问题

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

Dorman 戴上"阴谋论帽子"：

> "You would say that they're purposely leaving this ambiguous because it allows insiders and friends to make money on things that are in their own control to dictate the outcome."

这不是第一次发生——之前的"霍梅尼政权更迭"合约也有类似争议。Polymarket 当时明确表示在"模糊情况下可以保持开放直到共识形成"——但这个标准在不同合约间并不统一。

</div>

</div>

</div>

</div>

---

# 这期最重要的教训

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-1 gap-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1. 资本结构的复杂性是有成本的**<br>
简单的"股票换 BTC"策略本可以永续。每次叠加新工具（优先股、可转债）都在增加利益方，每个利益方都需要被满足。当利益方之间产生冲突时，总会有人输。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**2. 信心市场不容试探**<br>
Strategy 的整个模式建立在市场信心上。$2.5M 的试探性出售造成的恐慌证明：当信心基础是"公司永远不会卖 BTC"时，哪怕最小的违背也会引发巨大反应。Dorman 的洞察是：一个明确的坏消息（一次卖 $2B）可能比模糊的威胁（"我们可能会卖"）更容易定价。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**3. 没有免费午餐 — 12% 收益的代价**<br>
优先股给散户提供了 12% 的年收益率，放在低利率环境里看起来像无风险套利。但 Dorman 的分析表明，这些收益的代价是 Strategy 引入了一个必须被喂饱的新利益方。当飞轮逆转时，优先股持有者可能是第一个受伤的。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**4. 理解概率，而不是预测结果**<br>
Dorman 没有说"Strategy 必然破产"或"BTC 必然崩盘"。他构建了一个概率框架：列出所有可能路径，分析每条路径下谁赢谁输，然后根据当前信息调整每个场景的概率。这是专业投资者和社交媒体喊单的区别。

</div>

</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"So really, in tennis terms, this was a pretty unforced error."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman，论引入优先股的决定</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"This flywheel that he's created over six years is just slowly dying and he's put too many pieces in the puzzle that can't be serviced at the same time."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman，论飞轮终结</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"I would have ripped the bandaid off and sold two billion of Bitcoin, and just said... you knew that this was possible at some point."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman，论该怎么做</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Bitcoin just fell 5% on a two and a half million dollar sale. What do you think they're going to do when they sell two billion?"
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman，论试探性出售的反效果</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Saylor has pulled a rabbit out of the hat multiple times in his career. It's entirely possible that he figures out a way to do it again."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman，保持审慎，不完全排除反转</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"No matter what part of the capital structure you own here, there is higher risks today than there were nine months ago."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman，对所有利益方的结论</div>
</div>

</div>

---

# 死亡螺旋 — 反向飞轮的机制

<div class="mt-3 text-sm leading-relaxed">

当信心崩溃时，正向飞轮的每一个环节都变成加速器：

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

<div class="font-semibold">1. 卖出触发</div>
<div class="text-xs mt-1">现金不足 → 被迫卖 BTC 付股息 → 市场恐慌 → 更多卖压来自跟风者</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

<div class="font-semibold">2. 融资渠道关闭</div>
<div class="text-xs mt-1">股价下跌 → mNAV 下降 → 增发不再增值 → 无法募资 → 只能卖更多 BTC</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

<div class="font-semibold">3. 优先股反噬</div>
<div class="text-xs mt-1">优先股跌至面值以下 → 无法发行新优先股 → 现有股息仍需支付 → 压力增大</div>

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded text-xs leading-relaxed">
<div class="font-semibold mb-1">Dorman 的结论：</div>
Dorman 不认为违约迫在眉睫（"default is not imminent here"），但他警告螺旋正在加速。关键在于：一旦市场开始将 Strategy 视为<span class="font-semibold">卖家而非买家</span>，即使公司想同时买和卖（"买回来的比卖出多"），市场叙事已经变了。Zero Hedge、WSJ、Bloomberg 的标题一旦打出"MicroStrategy Turns Bitcoin Seller"，这个标签就很难摘下。
</div>

</div>

---

# Dorman 的立场转变 — 从辩护到警告

<div class="mt-3 text-sm leading-relaxed">

Laura Shin 在节目开头指出，Dorman 曾是 Strategy 的公开辩护者，现在立场完全转变。Dorman 本人解释了转变的精确时间点。

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 过去的 Dorman（2024 年 11 月前）

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs leading-relaxed">

- 曾公开说"MicroStrategy 不是 BTC 的风险"
- 认为 Saylor 永远不会被逼卖 BTC
- 逻辑：没有强制卖出的触发条件，零息/低息可转债很容易再融资
- 简单结构下，可以"混日子几十年"

</div>

### 转变的时间点：2024 年底

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs mt-3 leading-relaxed">

- 优先股开始大量引入资本结构
- Dorman: "which I never expected anyone to do because you'd be absolutely out of your mind crazy to do that"
- $1.7B 年度现金义务 = 不再有"混日子"的选项

</div>

</div>

<div>

### 现在的 Dorman

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs leading-relaxed">

- 发推预测："Someone is going to lose badly here, and it will happen in the next four months."
- 实际结果：四天后（非四个月）Saylor 就宣布卖出 BTC
- 认为问题不是"会不会出事"，而是"哪个利益方先遭殃"
- 但仍保留 Saylor 可能再次反转的判断

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs italic">
"It was only November of last year when I was saying MicroStrategy is not a risk to Bitcoin, because that was before he decided to load up the balance sheet with 16 billion of prefs."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Dorman, 解释立场转变</div>
</div>

</div>

</div>

</div>

---
layout: end
---

<div class="text-center mt-20">

# 谢谢收看

<div class="text-lg opacity-60 mt-4">
Unchained Podcast · Laura Shin × Jeff Dorman
</div>

<div class="text-sm opacity-50 mt-8">
完整访谈：unchainedcrypto.com
</div>

</div>
