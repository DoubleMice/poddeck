---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Can Hyperliquid Come Onshore Without Killing What Makes It Special?'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Can Hyperliquid Come Onshore<br>Without Killing What Makes It Special?

<div class="mt-8 text-lg opacity-70">
Walt Lukin (FIA) × Chris Perkins (250 Digital) × Laura Shin
</div>

<div class="mt-4 text-sm opacity-50">
Unchained Podcast · May 2026 · 48 min
</div>

---
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">
**CME 与 ICE 联手向 CFTC 施压**
美国两大衍生品交易所要求监管 Hyperliquid——传统金融与 DeFi 的正面碰撞，而非抽象辩论
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">
**三条路径的十字路口**
继续离岸、拿牌上岸、或彻底去中心化——每条路都有代价，每条路都在重写市场规则
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
**CFTC 迎来加密律师主席**
Michael Selig 理解去中心化的价值——原则导向监管可能成为连接两个世界的桥梁
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed">
**24/7 交易已是生存底线**
Chris Perkins："24/7 markets are table stakes"——但传统金融的基础设施还没准备好全天候运转
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
**"谁来负责？"的哲学难题**
当市场只是代码，没有法律实体时——监管者找不到"掐喉咙"的对象（"a throat to choke"）
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">
**历史性竞赛已开始**
ICE × OKX、CME × Google——传统交易所加速追赶，竞争正在迫使所有人"磨尖铅笔"
</div>

</div>

---
---

# 导火索：CME 与 ICE 的联名信

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**事件经过**

CME Group 和 Intercontinental Exchange (ICE) 联合要求 CFTC 及国会相关官员对 Hyperliquid 施加监管——一个离岸去中心化永续合约交易所吸引了大量交易量，却不在美国监管框架内

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**Chris Perkins 的回应**

<div class="italic text-sm mt-2">
"so ICE and CME Group are worried about Hyperliquid. They should be. Hyperliquid delivered 24/7 price discovery, and both exchanges know that they will need to do the same to stay relevant."
</div>

<div class="text-xs opacity-60 mt-2">
— Chris Perkins 在 X 上的推文，直接引发了本期讨论
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
**核心矛盾**：CME/ICE 提出的担忧包括全球商品基准价格风险、制裁规避等——但 Chris 认为真正让他们紧张的是 24/7 价格发现能力，而不是合规问题
</div>

---
layout: two-cols
---

# 三条路径的十字路口

Hyperliquid 面前有三条可选路径，每条都代表不同的战略选择：

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**路径一：维持离岸**
保持现状，封锁美国用户访问——当前模式正在运转，流动性持续增长
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**路径二：全面上岸**
获取三张牌照 (DCM + DCO + FCM)，在美国合法运营——获得信誉与市场准入，但成本高昂
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**路径三：彻底去中心化**
坚持"只是代码和技术"的路线——最创新、最有趣，但也最具挑战性
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hyperliquid-paths.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 路径二详解：三张牌照的关卡

<div class="mt-4 text-sm leading-relaxed">
要合法服务美国用户，Hyperliquid 需要在美国获取<b>三张牌照</b>，缺一不可：
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-lg font-bold text-blue-700">DCM</div>
<div class="text-xs mt-1 opacity-70">Designated Contract Market</div>
<div class="text-xs mt-2 leading-relaxed">受监管的交易所——执行交易的地方</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-lg font-bold text-green-700">DCO</div>
<div class="text-xs mt-1 opacity-70">Derivatives Clearing Organization</div>
<div class="text-xs mt-2 leading-relaxed">清算所 / CCP——这与去中心化理念直接冲突</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-lg font-bold text-orange-700">FCM</div>
<div class="text-xs mt-1 opacity-70">Futures Commission Merchant</div>
<div class="text-xs mt-2 leading-relaxed">中介机构——连接客户与市场的桥梁</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**行业趋势**：有些公司正在试图同时做这三件事（"do all three just to streamline it"），以简化流程。Hyperliquid 有资本购买或自建牌照——但真正的挑战是：能否在岸上重新聚合流动性？
</div>

---
layout: two-cols
---

# 三张牌照的全景

上滑展示了 Hyperliquid 上岸需要跨越的三道许可证门槛：

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">
**DCM**：合规交易所，提供受监管的交易环境
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
**DCO / CCP**：中央清算对手方——与 DeFi 的去中心化理念完全相反
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">
**FCM**：持有客户资产的中介——Walt 与 Chris 在这一点上存在分歧
</div>

<div class="text-xs opacity-60 mt-2">
Chris 曾在全球最大的 FCM 之一任职，但如今他认为某些场景下不需要强制中介
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-licenses.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 历史对照：2008 雷曼 → 2009 匹兹堡 G20

<div class="mt-4 text-sm leading-relaxed">
Chris 和 Walt 都深度参与了 2008 年后的衍生品改革——这个历史背景直接塑造了今天的监管逻辑。
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**当时的配方**

<div class="text-sm mt-2 leading-relaxed">
2009 年匹兹堡 G20 公报提出了三点要求：<br/>
• 所有衍生品必须<b>报告</b>（report）<br/>
• 必须<b>中央清算</b>（centrally clear）<br/>
• 必须<b>电子化执行</b>（electronically execute）
</div>

<div class="text-xs opacity-60 mt-2">
目标：对市场活动的可见性 + 对手方风险缓释 + 公平执行
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**为什么当时只能走中央化路线**

<div class="text-sm mt-2 leading-relaxed">
"the only thing we could do was really centralize it like crazy, hyper-centralize it, put a lot of capital, and then pray for the best"

<div class="text-xs opacity-60 mt-1">— Chris Perkins</div>

当时没有区块链——除了高度中央化之外别无选择。这套模型确实保护了期货市场在雷曼倒闭期间的完整性。

</div>

</div>

</div>

---
---

# 中央化成功了——但代价是什么？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**积极面：市场从未如此稳健**

<div class="text-sm mt-2 leading-relaxed">
Walt 在雷曼危机期间担任 CFTC 代理主席，亲身参与纽约的雷曼善后工作。中央清算模型经受了考验——Walt 总结道："It worked and central clearing worked." 而不受监管的结构——"Unregulated structure failed."
</div>

<div class="text-xs opacity-60 mt-2">
受监管的期货市场在系统性危机中保护了参与者
</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**消极面：市场从未如此集中**

<div class="text-sm mt-2 leading-relaxed">
Chris 指出：交易量飙升的同时，中介机构（FCM）数量大幅缩减。"the big get bigger, and the only people that survive can scale"——高固定成本的监管迫使行业整合，幸存者只有能做到规模化的巨头。
</div>

<div class="text-xs opacity-60 mt-2">
监管既是保护也是壁垒
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**核心问题**：现在有了去中心化技术，是否能用不同的方式——相比 2009 年的"强制中央化"——达成同样的原则目标（可见性、风险缓释、公平执行）？
</div>

---
layout: two-cols
---

# 两个时代，同一套原则

Chris 的核心论点：2009 年 G20 提出的三个原则目标——可见性、对手方风险缓释、公平执行——可以用今天的去中心化技术重新实现，而不必走强制中央化的老路。

<div class="text-xs opacity-60 mt-2">
关键是 CFTC 是否愿意接受这种新路径
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-eras.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 路径三："只是代码和技术"

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="italic text-lg leading-relaxed">
"They're just code and tech, and gosh, shouldn't anyone in the world who has access to the internet, be able to access that tech and allow it to function as it functions? That is the new paradigm. That is the breakthrough."
</div>

<div class="text-xs opacity-60 mt-2">— Chris Perkins 描述去中心化路径的本质</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">
**核心理念**：如果一个协议只是代码、没有运营实体，那就不是"交易所"——任何有互联网连接的人都应该能够自由访问它。这是对传统监管范式的根本性挑战。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
**监管的困境**："You can't regulate tech. You can regulate an entity that builds tech, but if it's just tech that's decentralized, it's very hard to regulate." 但如果技术本身是去中心化的，监管很难直接施加于代码。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**Chris 的解决方案**：监管的对象应该是使用技术的人及其行为，而不是技术本身。如果有人操纵市场——追究其责任，无论用的是什么工具。
</div>

---
layout: two-cols
---

# "Who is Thou?"——监管的问责缺口

传统监管模式的核心假设是存在可追责的中间人。DeFi 打破了这个假设。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">
**传统模式**：CFTC → 持牌中介 (FCM/DCO/DCM) → 用户。监管只需管住中间环节——"thou"很清楚是谁。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
**DeFi 模式**：CFTC → 智能合约代码 → 用户。中间层消失了——"thou"变成了不可追责的代码。这就是为什么很多机构会感到恐惧。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed">
**Chris 的观点**：原则仍然适用——操纵市场始终违法。"Just because you have a new technology doesn't make market manipulation legal."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./accountability-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 24/7 市场：新的生存底线

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="italic text-lg">
"right now, like it or not, guys, twenty four seven markets are stable, are table stakes. You have to have twenty four seven markets to survive."
</div>

<div class="text-xs opacity-60 mt-2">— Chris Perkins</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
**现实压力**："Markets don't get tired." ——传统市场的开盘/收盘机制是人工产物，不是市场的自然属性。现在有了 AI agent 和交易机器人，24/7 的流动性正在成为常态。受信义务人需要在周末晚上也能管理风险——"When Trump invades Venezuela on a Friday night, I need to mitigate my risk."
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">
**传统方在追赶**：ICE 与 OKX 合作，CME 与 Google 合作——都在试图实现 24/7 交易能力。但 Walt 提醒：交易的 24/7 执行是可能的，但支付轨道（payment rails）和银行系统还没准备好全天候运转。
</div>

</div>

---
---

# 基础设施鸿沟：执行可以 24/7，清算不行

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Walt Lukin 的审慎立场**

<div class="text-sm mt-2 leading-relaxed">
"the payment rails aren't open, the banking system's not open, and so the de-risking of the system can't happen." 如果在周日晚上因为市场流动性不足而导致对冲者被爆仓，"that's not great for the commercial participant and we'll lose confidence in our markets."
</div>

<div class="text-xs opacity-60 mt-2">
FIA 支持走向 24/7，但必须以负责任的方式——包括通证化、24/7 清算系统等配套改革
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Chris Perkins 的回应**

<div class="text-sm mt-2 leading-relaxed">
"this is easy. If it's a payments issue, just use a stable coin." ——稳定币已经可以 24/7 支付，货币市场基金也可以 24/7 移动保证金。FedNow、Project Agora（BIS）、Circle 等公共和私营部门都在推进 24/7 基础设施。

<div class="text-xs opacity-60 mt-2">
Chris 的立场：技术早已就绪，阻碍在于制度惯性
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 风险瀑布 vs ADL：两种风险管理哲学

传统衍生品市场用"风险瀑布"逐层吸收亏损。Crypto 直接跳到 ADL（自动去杠杆），把瀑布底部放在了最前面。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
**传统**：初始保证金 → 担保基金 → 违约基金 → CCP 自有资本（最后一道防线）——逐层吸收，保护交易对手方
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
**ADL**：自动去杠杆化——直接让用户承担损失。Crypto 跳过了构建完整风险缓冲的步骤
</div>

<div class="text-xs opacity-60 mt-2">
Chris 认为去中心化技术可以"reconstitute that risk waterfall in a decentralized manner"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./risk-waterfall.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# CFTC 的原则导向优势

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="italic text-lg leading-relaxed">
"thou shall not manipulate markets, thou shall not steal from customers, thou shall uphold the financial integrity of the marketplace. Whether it's DeFi or traditional exchanges, as long as it's meeting those principles, the CFTC can regulate those things."
</div>

<div class="text-xs opacity-60 mt-2">— Walt Lukin, FIA President & CEO</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
**为什么 Crypto 想进入 CFTC 管辖**：CFTC 采用 outcome-based（结果导向）和 principles-based（原则导向）监管，而非硬性规定具体形式。一旦 CFTC 监管某个市场，它就拥有排他管辖权——州法和其他法规不再适用。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed">
**CFTC 主席 Selig**：一位加密律师，理解去中心化技术的价值。已表态："our goal is always going to be to onshore those markets"——但他是少数愿意探索新路径的监管者。
</div>

</div>

---
---

# Hyperliquid 的反击：链上透明度

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

<div class="italic text-sm leading-relaxed">
"Hyperliquid offers enhanced market transparency, publishing a complete on-chain record of every transaction in real time, making it a uniquely hostile environment for insider trading or price manipulation. Hyperliquid's transparency serves as a strong deterrent for misconduct and facilitates surveillance, detection, and investigation by regulators and law enforcement."
</div>

<div class="text-xs opacity-60 mt-2">— Hyperliquid Policy Center 回应 CME/ICE 联名信的声明</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">
**透明度**：每一笔交易的完整链上记录实时公开——这在传统金融中是无法实现的
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
**威慑力**：透明本身就是对不当行为的最强威慑——没有暗箱操作的空间
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
**执法便利**：链上分析可以比 OFAC 更快地标记可疑活动——"lawmakers love blockchains because they can trace it very easily"
</div>

</div>

<div class="mt-3 text-xs opacity-60">
Walt 的回应：技术上透明确实有益，但这不能替代 KYC/AML 等前端保护——"the tech alone is not going to solve all those issues"
</div>

---
---

# Laura 的忧思：美国的"金融互联网"会自绝于世界吗？

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm leading-relaxed">
**作者概括（Laura Shin 的类比）**：互联网的现状——世界共享一个互联网，但中国有自己隔离的互联网。如果美国因为监管而将 DeFi 市场拒之门外，是否会出现一个"美国金融局域网"，与世界金融互联网割裂？
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Laura 的担忧**

<div class="text-sm mt-2 leading-relaxed">
美国目前是金融领导者（如果不是唯一领导者的话）。但监管姿态可能导致美国被隔离在全球 DeFi 流动性之外——这对于一个金融领袖国家来说，似乎不是一件好事。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Walt 的回应：并不担心**

<div class="text-sm mt-2 leading-relaxed">
如果能够做到相称的监管（proportional regulation），企业是主动寻求监管的。加密行业希望 Clarity Act 通过，因为它提供的法律确定性和可预测性。"it's not going to be things stay offshore. I think it's quite the opposite. I think people are trying to get into the United States."
</div>

</div>

</div>

---
---

# 预测市场：Polymarket 的平行困境

<div class="mt-4 text-sm leading-relaxed">
Walt 和 Chris 都将 Polymarket 视为与 Hyperliquid 同构的问题——只是市场类型不同，核心矛盾一致。
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**背景**

Walt 讲述了他 2004 年在 CFTC 的经历——当时批准了最早的预测市场（Head Street），后来还有爱荷华政治市场（限额 $1-$10 小额参与）。CFTC 曾给过 no-action letter 允许这种活动。

如今 Polymarket 和 Kalshi 已经做到了规模化，"the wisdom of crowds" 展现出了惊人的预测准确性。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**同样的张力**

Polymarket 有美国注册实体，但主要市场仍在离岸。Walt 认为应该上岸——ICE 向 Polymarket 投资了 20 亿美元，这个合作伙伴懂得如何运营受监管市场。

Chris 的看法更直白："market manipulation for derivatives has always been illegal, and just because you have a new technology doesn't make market manipulation legal."

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**关键差异**：Walt 强调预测市场面临额外的挑战——内幕交易、产品自认证速度过快——CFTC 已启动规则制定程序。但核心原则不变：上岸会带来信誉和平等竞争环境。
</div>

---
---

# 竞争正在迫使所有人加速

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**传统交易所的回应**

<div class="text-sm mt-2 space-y-2">
• **ICE** 与 **OKX** 合作——传统清算巨头牵手 Crypto 交易所<br/>
• **CME** 与 **Google** 合作——利用云基础设施追赶 24/7 能力<br/>
• 双方都在试图将旧的受监管模型适配到新的全天候世界
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Walt 的乐观态度**

<div class="text-sm mt-2 leading-relaxed">
"what I love about this debate is it has caused this competition has caused really interesting ideas to happen...it's causing everybody to sharpen their pencils a bit and to get better."
</div>

<div class="text-xs opacity-60 mt-2">
竞争是创新的催化剂——这是 Walt 反复强调的主题
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**Chris 的判断**：无论哪条路，都将是一场军备竞赛。"So it would be an arms race anyway." 24/7 能力是 Hyperliquid 的核心优势——如果传统交易所也在追赶，Hyperliquid 上岸后仍可以凭借这一优势竞争。
</div>

---
---

# Clarity Act：立法层面的突破口

<div class="mt-4 text-sm leading-relaxed">
美国国会正在推进《Clarity Act》，该法案包含专门针对 DeFi 的条款——要求 CFTC 和 SEC 就如何处理去中心化平台启动规则制定程序。Walt 称之为"开启对话的绝佳起点"。
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**法案的意义**

<div class="text-sm mt-2 leading-relaxed">
• 为监管机构与 DeFi 协议的对话提供法律平台<br/>
• 加密行业主动寻求法律确定性<br/>
• 2026 年 4 月 Hyperliquid 已就 CFTC 的 24/7 永续合约 RFC（征求意见）提交了评论
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Chris 的期待**

<div class="text-sm mt-2 leading-relaxed">
"if there was a regulator in the world that wasn't so terribly rigid and doctrinal, that's the CFTC." Chris 相信 CFTC 会愿意探索如何用今天的技术方案来实现 2009 年 G20 定下的那些原则——只是实现方式从"强制中央化"变成了"去中心化技术"。
</div>

</div>

</div>

---
---

# Walt 与 Chris 的交汇点：共识正在形成

<div class="mt-4 text-sm leading-relaxed">
尽管 Walt 和 Chris 来自不同阵营，但两人的对话在几个关键点上出现了有意义的趋同。
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed text-sm">
**一致认可**：竞争对市场有益（"Competition is a positive thing for our markets"）——FIA 欢迎新进入者
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed text-sm">
**一致认可**：CFTC 的原则导向监管是吸引 Crypto 上岸的独特优势
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed text-sm">
**接近趋同**：Walt 同意并非所有场景都需要 FCM 中介——当产品完全预存资金（fully collateralized）时可以直接接入
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed text-sm">
**仍有分歧**：高杠杆产品是否强制要求中介——Walt 认为是，Chris 认为不应该强迫成熟投资者
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed text-sm">
**一致认可**：Clarity Act 应该推进，24/7 是方向，技术（包括 AI + 去中心化）可以帮助实现监管目标
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed text-sm">
**一致认可的底线**："thou shall not manipulate markets"——无论用什么技术，操纵市场始终违法，这一点没有变
</div>

</div>

---
---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句——每条都经过 transcript 验证：</div>

<div class="space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 italic leading-relaxed">
"Hyperliquid delivered 24/7 price discovery, and both exchanges know that they will need to do the same to stay relevant."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins 的推文，点明了传统交易所真正的焦虑所在</div>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 italic leading-relaxed">
"the only thing we could do was really centralize it like crazy, hyper-centralize it, put a lot of capital, and then pray for the best"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins 描述 2008 年后唯一可选的路径</div>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 italic leading-relaxed">
"You can't regulate tech. You can regulate an entity that builds tech, but if it's just tech that's decentralized, it's very hard to regulate."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins 阐述 DeFi 监管的核心难题</div>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 italic leading-relaxed">
"thou shall not manipulate markets, thou shall not steal from customers, thou shall uphold the financial integrity of the marketplace."
<div class="text-xs opacity-60 mt-1 not-italic">— Walt Lukin 总结 CFTC 原则导向监管的三大戒律</div>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 italic leading-relaxed">
"lawmakers love blockchains because they can trace it very easily. the bad guys should put more and more stuff on chain because they're going to get found out."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins 对链上透明度的务实辩护</div>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 italic leading-relaxed">
"this is the most interesting time in the last 30 years to be a part of this industry."
<div class="text-xs opacity-60 mt-1 not-italic">— Walt Lukin 对这个变革时刻的总结</div>
</div>

</div>

---
layout: end
---

# Can Hyperliquid Come Onshore?

<div class="mt-6 text-lg italic opacity-70">
"Markets don't get tired."
</div>

<div class="mt-4 text-sm opacity-50">
— Chris Perkins
</div>
