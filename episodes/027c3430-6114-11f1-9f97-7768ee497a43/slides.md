---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Is Polymarket''s Oracle Problem Getting Out of Hand? - Uneasy Money'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 预测市场的预言机困境

## Polymarket 的 Oracle 问题、SOL 通缩、USDC 冻结与链上生态博弈

<div class="mt-6 text-sm opacity-60">
Uneasy Money · Kane Warwick, Taylor Monahan & Luca Netz · 2026-06
</div>

---
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**预言机问题回来咬人了**  
MicroStrategy 默默卖了 32 BTC，Polymarket 市场措辞模糊，UMA 裁决引发信任危机。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**SOL 通胀削减第三轮**  
Solana 通胀约 7-8%，三次提案试图削减。通缩叙事的回响——但这次的可持续性不同。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Circle 冻结 Zama：法院作为武器**  
一纸单方临时禁令冻结了整个混币池——Circle 完全将决定权交给了法官。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Hyperliquid：11 人比纳斯达克还大**  
Jeff Sprecher 的经典嘲讽，以及 Hayes vs Samani 的 $100K 对赌。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Apps 逃离 MegaETH 奔向 Monad**  
"MegaMafia" 团队正在切换链——生态系统如城市，赏金猎人在哪里找到下一个救急支票。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**熊市生存**  
熊市里没钱，团队烧光现金流。"bear markets are hard. People run out of cash really quickly."

</div>

</div>

---
---

# MicroStrategy 卖币：预测市场视角

<div class="mt-2">

## 这件事本来就不该发生

- **MicroStrategy 的策略是什么？** "This motherfucker promised us that he was never ever going to sell any Bitcoin"
- Saylor 历史上以融资而不卖 BTC 著称——这是整个"庞氏"的卖点
- 结果他卖了 32 BTC（约 $2.5M）——金额不大，但信号意义极强

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Kane 的判断**：这是对市场的一次"shit test"——"it was a bit of a shit test to the market, I think. The point was maybe test how does the market react if I sell Bitcoin, and the answer is not well."

</div>

<div class="mt-2 text-sm opacity-70">
结果：MicroStrategy 股价暴跌。市场给了明确答案。
</div>

</div>

---
---

# 市场措辞问题：卖出 vs 公告

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 市场写的是什么

<div class="text-lg font-bold mt-2">"Will MicroStrategy sell any Bitcoin by May 31st, 2026?"</div>

<div class="mt-2 text-sm">
- 他们确实在 5 月 26-31 日期间卖了
- 事实层面：答案 = YES
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 市场应该写的是什么

<div class="text-lg font-bold mt-2">"Will MicroStrategy <em>announce</em> that they sold Bitcoin by May 31st?"</div>

<div class="mt-2 text-sm">
- 8-K 表格 6 月 1 日才提交
- 市场截止日 5 月 31 日时，没有人知道交易已发生
- 预言机困境的经典案例
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**根本问题**："you're never just betting on the event, you're betting on who scores it." —— 你赌的从来不只是事件本身，你赌的是谁来判分。

</div>

---
layout: two-cols
---

# 预言机困境的系统性流程

- **第一步**：Polymarket 上架措辞不严谨的市场
- **第二步**：事件发生但未被公开（或存在模糊性）
- **第三步**：争议爆发 → 交易量飙升 20 倍
- **第四步**：UMA 代币持有者投票裁决
- **结果**：信任被侵蚀——无论结果如何

<div class="mt-3 p-2 rounded text-sm bg-purple-50 border-l-4 border-purple-500">
**Kane**：即使到现在（6 月 3 日），市场还在开放交易。事件发生日期早已过去。这是可以预见的边缘情况。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./oracle-problem-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 预言机问题，永远回到预言机

<div class="mt-4">

## 这是预测市场的根本困境

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

**"the prediction market problem, right? The oracle problem. It always comes back to oracles."** —— Kane

</div>

- **Polymarket 的体量变了**："Polymarket's not like a random DeFi app that no one cares about anymore — it's a 20 billion dollar company."
- 当你是 $200M 的 DeFi 应用时，UMA 裁决争议是可有可无的谈资
- 当你是 $20B 的平台时，每次争议都在侵蚀信任——对手（如 Alchemy Research）会借机攻击

<div class="mt-3 grid grid-cols-3 gap-3 text-sm text-center">

<div class="p-2 rounded bg-red-50 border border-red-200">
<strong>Augur</strong><br/>用链上机制处理边缘案例，最终把自己绕死
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<strong>UMA</strong><br/>曾被信任，但 Polymarket 已是它的八千倍大
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<strong>Nasdaq</strong><br/>新方案——找一个比你更大的实体来裁决
</div>

</div>

</div>

---
---

# UMA → Nasdaq：Polymarket 的预言机进化

<div class="mt-4">

## 三个阶段的演变

<div class="grid grid-cols-3 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-gray-50 border border-gray-300">

### 阶段一：UMA 黄金期
- 2021-2023
- UMA 规模甚至大于 Polymarket
- 出问题时推给 UMA：怪他们就好
- "It was like, ah, blame them if something goes wrong, right? It's on them."

</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-300">

### 阶段二：失衡期
- 现在
- Polymarket 比 UMA 大 8000 倍
- UMA 裁决 = 巨大的风险暴露
- 狼人杀式的治理机制："not it anymore"

</div>

<div class="p-3 rounded bg-green-50 border border-green-300">

### 阶段三：Nasdaq 方案
- 最近推出
- 让比你还大的实体来裁决
- "Thank fucking god because this is so much better than UMA"
- 转移责任——但真的能解决根本问题吗？

</div>

</div>

</div>

---
---

# Solana 的 SOL 燃烧之战

<div class="mt-4">

## 第三轮通胀削减提案

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**背景**："there's been now three proposals to go and cut Solana inflation."

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 当前状态
- **通胀率**：约 7-8%/年（"Solana inflates about 7, 8 or 8% ish a year"）
- **质押收益**：6-7%（来自通胀）
- **代币价格影响**："a token that inflates is obviously bad for price"

</div>

<div>

### 提案目标
- 将通胀从 ~8% 降至 ~3% 左右
- 日燃烧量：10,000 → 64,000 SOL
- 当前日通胀约 60,000 SOL
- **临界点**："if it hits 60,000 and one, some lunatic on the timeline is gonna do a backflip"

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Luca 的立场**："I obviously am keen and an advocate for anything that is deflationary. If you can create a product that continues to get better and then also create a tokenomic scheme where the token inflates very little or hopefully deflates, then you have a recipe for success."

</div>

</div>

---
---

# SOL 通胀的数字真相

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 当前通胀
<div class="text-5xl font-bold text-green-600 my-3">~8%</div>
<div class="text-xs opacity-70">年化通胀率</div>
<div class="text-xs mt-2">这同时是能给质押者的收益——所以不是纯恶意通胀</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 提案后
<div class="text-5xl font-bold text-blue-600 my-3">~3%</div>
<div class="text-xs opacity-70">目标通胀率</div>
<div class="text-xs mt-2">大幅削减——显著减轻卖压，但会压低质押收益</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 燃烧临界点
<div class="text-5xl font-bold text-orange-600 my-3">60,001</div>
<div class="text-xs opacity-70">日燃烧量 vs 通胀</div>
<div class="text-xs mt-2">一旦日燃烧超过日通胀，Solana 进入净通缩</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Kane 的提醒**：有时通缩叙事会带来意料之外的后果。ETH 的 ultrasound money 叙事最初很成功——"there was a period of time where it definitely had an impact on ETH price and people were very excited about it"——但最终反噬了自己。

</div>

---
layout: two-cols
---

# Solana vs Ethereum：燃烧机制的可持续性

### Ethereum (EIP 1559)

- **少量高额交易**："hundreds per block"
- **$500 做一次合成质押合约**
- 每次交易燃烧 $2,000
- 依赖昂贵交易——不可持续

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-sm mt-2">

**Su Zhu 当年就说对了**："you're all sitting around jacking yourselves off over the burn, meanwhile no one can afford to use your chain."

</div>

### Solana（提案中）

- **海量低价交易**："tens of millions of few cent transactions"
- 每笔交易燃烧 0.001 美分
- 依赖真实使用量——**更可持续**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sol-vs-eth-burn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# Ultrasound Money：一段加密历史

<div class="mt-2">

## EIP 1559 的意外后果

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

### 初衷
- Vitalik 想解决 **Gas 市场价格波动**（"Vitalik hates volatility"）
- 设计了 EIP 1559 来平滑 gas 市场
- 花了两年半才实现（2019 年以太坊太穷，"literally we couldn't get it funded"）

### 结果
- "EIP 1559 switches on and somehow ETH is deflationary"
- **意外**把 ETH 变成了通缩资产
- "ultrasound money meme was born"
- 🦇🔊 表情包横扫 Crypto Twitter

</div>

<div>

### 反噬
- ETH 越活跃 → fees 越高 → 燃烧越多 → 通缩越强
- 但活跃 = 网络拥堵 → 无人用得起
- "it cost like $500 to do a synthetic staking contract"
- 叙事脆弱："This is not sustainable, guys."

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**现在的区别**：Solana 的燃烧来自巨大的交易量，而不是昂贵的单笔交易。大规模、低成本、高频率——理论上更可持续。

</div>

</div>

</div>

</div>

---
---

# Circle 冻结 USDC：Zama 事件始末

<div class="mt-2">

## 一个被冻结的隐私池

<div class="grid grid-cols-3 gap-3 text-sm mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一步：国库争夺战
- Overnight Finance 协议——似乎已死
- "raiders" 试图收购代币来抢国库
- 协议控制者先手把 $12M 国库转入 **Zama 隐私协议**
- "they're all trying to scam each other" ——全都是坏演员

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 第二步：法院介入
- Raiders 有律师，律师上法院
- **Ex parte TRO**（单方临时禁令）：只讲自己一方的故事
- 法官："听起来紧急，冻住这笔钱，周一再说"
- Zama 的整个 USDC 池（$12.9M 中的 $12.2M）被冻结
- Zama 团队醒来发现协议被冻，**完全不知情**

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 第三步：政策困境
- Circle 的政策："如果法官下令冻结，我们就冻"
- 零自行审查——所有责任交给了法院
- 但法官不理解 DeFi 的含义（commingled pool = 第三方资金也被冻）
- "this decision to push all responsibility to the courts, you can't say no to the courts."

</div>

</div>

</div>

---
layout: two-cols
---

# Circle vs Tether：冻结策略的根本差异

### Circle（USDC）

<div class="text-sm">

- **政策**：法官下令就冻，100% 服从
- 完全放弃自由裁量权
- Zama 案例：12.2M/12.9M 来自一个人，冻结整个池
- **问题**："once you push all that responsibility to the courts, you can't say no to the courts"

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-sm mt-2">

**风险**：如果法院下令一个坏的冻结，Circle 无法说不。完全委派 = 完全放弃控制。

</div>

### Tether（USDT）

<div class="text-sm">

- **政策**：有阈值和判断流程，始终保留最终决定权
- 即使收到法院命令：声称是"自愿"冻结
- "We just happened to voluntarily freeze this" ——即使法院已经送达了

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">

**优势**：Tether 可以说不。他们保留了说不的能力——比 Circle 的完全委派更灵活、更安全。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./circle-vs-tether.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# "周五下午攻击"——DeFi 的新风险向量

<div class="mt-4">

## 法院作为武器化工具

<div class="p-4 rounded bg-red-50 border-2 border-red-300 mt-2">

**攻击模式**（"Friday afternoon attacks"）：

1. **周五下午**：找到某个混币池，编造一个紧急的、片面的故事
2. **Ex parte TRO**：去法院，只讲自己一方的版本——"坏人要跑了，快冻住这笔钱"
3. **法官签字**：法官没有技术上下文，签字的默认成本很低——"freeze the thing and we'll figure it out on Monday"
4. **冻结生效**：Circle 无条件执行——整个 commingled pool 被冻结
5. **套利窗口**：周一之前，依赖该池的协议可能已经被 exploit，形成连锁反应

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**在传统金融中**：冻结一个账户 → 一个人受影响。周一再解决。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**在 DeFi 中**：冻结一个 commingled pool → 所有储户被冻 → LP 代币脱锚 → 套利者攻击 → 周一只剩一个火山口。"Not a great strategy."

</div>

</div>

<div class="mt-2 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Taylor 的警告**："Crypto is so adversarial, like people will take advantage of the poor judge who doesn't understand the implications of what they're doing."

</div>

</div>

---
---

# Zama：无辜的旁观者

<div class="mt-3">

## 构建隐私协议的无妄之灾

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 发生了什么
- Zama 是一个**隐私协议**——但这次被冻结**与隐私功能无关**
- 坏演员只是把 Zama 当作资金出口——12.2M/12.9M 是这一笔钱
- Circle 直接冻结了整个 Zama USDC 池
- Zama 团队一觉醒来发现协议被冻，完全不知情

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Taylor**："It's worth noting there were other people that had deposited funds there and suddenly their funds were frozen."

</div>

</div>

<div>

### 教训

<div class="text-sm">

- **Court-order policy 的盲点**：Circle 没有区分"坏演员的交易"和"坏演员使用的基础设施"
- **Zama 不是 Tornado Cash**："it's not exactly Tornado Cash. It gives you certain privacy but not full privacy."
- 这不是隐私审查——这是不分青红皂白的基础设施冻结
- **DeFi 构建者**：如果你的协议里流通着 USDC，你就暴露在这个风险之下——无论你的协议本身是否合规

</div>

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Luca**："I feel for Zama in this situation. These guys are just trying to build a freaking protocol."

</div>

</div>

</div>

</div>

---
---

# Hyperliquid：11 个人，比纳斯达克还大

<div class="mt-2">

## Jeff Sprecher 的经典嘲讽

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg mt-2">

"these like 11 kids in like Bolivia or whatever that are bigger than the Nasdaq."

</div>

<div class="text-xs opacity-60 mt-1">— Jeff Sprecher, CEO of ICE (New York Stock Exchange), 形容 Hyperliquid</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Hyperliquid 的基本事实
- **市值**：~$20B（从 $50 跌到 $20，跌了 60%，然后反弹到 ATH）
- **团队**：11 人
- FDV 的"消失"：大部分稀释价值去向不明——可能是未来的空投
- **Jeff（创始人）** 已经很有钱，"not hungry to be a ginormous net seller"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么它在熊市还能涨
- 本轮牛市缺少山寨币的 blow-off top——Hyperliquid 是少数 coiled assets 之一
- 熊市中只有少数资产有投资价值——Hyperliquid 变得更集中
- "through the whole bull market it was one of the few things that was investable, and now in a bear market it's like 10 times more concentrated"

</div>

</div>

</div>

---
---

# Hayes vs Samani：$100K 预言机对赌

<div class="mt-2">

## 比 Polymarket 更清晰的对赌条款

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-3">

**"Arthur Hayes and Kyle Samani's prop bet that they're setting up has clearer specifications than your average Polymarket market."** —— Kane

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 对赌条款
- **时间**：2026-06-02 00:00 UTC → 2027-01-01
- **定价**：Bybit USDT 价格——**指定了交易所**
- **规则**：Hyperliquid 表现优于当前 Top 10 中的每一个币
- **赌注**：$100,000

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"So maybe we should get Arthur Hayes to write the Polymarket markets for us."**

</div>

</div>

<div>

### 各方立场

<div class="p-2 rounded bg-blue-50 border border-blue-200 mb-2">

**Arthur Hayes** 赌 Hyperliquid 赢
- Kane 也站这一边："I think Arthur probably has the right side of this bet"
- 但 2027 很远，"you never know"

</div>

<div class="p-2 rounded bg-red-50 border border-red-200">

**Kyle Samani** 赌任意 Top 10 币赢
- "Samani's like Hyperliquid is Binance 2.0 without a marketing team, not fully open source, permissioned validators..."
- Kane 希望 Kyle 输："I would love to see Kyle lose this prop bet"

</div>

</div>

</div>

</div>

---
---

# Hyperliquid 的独特结构优势

<div class="mt-3">

## 为什么市场看多

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### FDV 是个迷
- 大部分稀释价值未分配——可能在未来的战略空投中释放
- "where is the rest of that diluted value going? Potentially another airdrop"
- Jeff 会在正确的时间做正确的释放

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 11 个内部人
- "Those guys don't read to me like huge ginormous net sellers"
- 已经有钱了——不急着卖
- 即使卖进 Hyperliquid TWAP，对市场几乎没有影响

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 极简团队效应
- "if you just look at Hyperliquid objectively and call it rounded up at a 20 billion dollar asset, it is definitely worth more than 20 billion bucks"
- 没有多余的人消耗资本
- 专注执行——没有多余的叙事

</div>

</div>

<div class="mt-3 p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Kane 的 crypto 投资洞察**：在熊市中，"there's always in bear markets assets that outperform... it's good if you can get into that position." —— Hyperliquid 是目前最集中的可投资资产之一。

</div>

</div>

---
---

# Apps 逃离 MegaETH 奔向 Monad

<div class="mt-2">

## 原生的与链无关 vs 链的吸引力

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### MegaETH 的 MegaMafia 策略
- **精选团队**：5-10 个"cracked Zoomer"团队
- **核心理念**：让 crypto 消失在后台——"we want the crypto to fade into the background"
- 打造的是"不觉得像 crypto"的 App

<div class="mt-2 p-2 rounded bg-yellow-50 border text-xs">

**问题**：如果你找的都是不关心区块链层面的团队，当你的链无法满足他们的需求时，他们对你有任何忠诚度吗？

</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Monad 的策略
- **基础应用优先**：非争议性的、基础性的 DeFi 应用
- 类似已有产品的链上版本——而不是全新品类
- "Monad seemed to focus on fundamentals-based apps"
- 大规模融资，大量战争基金

<div class="mt-2 p-2 rounded bg-blue-50 border text-xs">

**结果**：MegaETH 的团队正在迁移到 Monad。"It doesn't feel that surprising given the teams that MegaETH was courting."

</div>

</div>

</div>

</div>

---
---

# MegaMafia：愿景与现实的差距

<div class="mt-2">

## 理念的风险

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3 text-sm">

**Kane 的观察**："if you're courting a bunch of teams that don't care about the blockchain aspect of the thing and want to make the blockchain disappear, what possible loyalty are they going to have to your blockchain?"

</div>

<div class="grid grid-cols-2 gap-3 text-sm mt-2">

<div>

### 愿景
- Crypto 隐形——用户感觉不到自己在用区块链
- 应用就像 App Store 里的普通 App
- 极致的 UX，零摩擦
- 由一群最优秀的 Zoomer 创始人打造

</div>

<div>

### 现实（2026 年熊市）
- 熊市来了，"teams are looking for funding"
- Monad 有巨额战争基金，提供 grant 和激励
- 团队迁移是理性的生存选择
- "getting a two million dollar grant that lets you survive for another six months" ——这就是迁移的全部意义

</div>

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**根本矛盾**：MegaETH 选择的是"不关心区块链"的团队。既然不关心区块链，为什么要忠诚于某一条特定的链？

</div>

</div>

---
layout: two-cols
---

# 链上佣兵循环

## 为什么换链改变不了任何东西

- **第一步**：团队加入 Chain A，拿到 $2M grant
- **第二步**：6 个月后钱烧完了——但产品依然没有 PMF
- **第三步**：Chain B 出现，又给 $2M 让你迁移
- **第四步**：再过 6 个月，你又在找下一笔 grant

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-2">

**Kane 的总结**："Only a grant will help. You get a two million dollar grant that lets you survive for another six months. It's not gonna do shit. It won't help."

</div>

<div class="text-xs opacity-60 mt-1">换链不会改变你的产品/市场匹配。它只会给你 6 个月的现金。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./chain-mercenary-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 木板路类比：生态系统即城市

### 链 = 城市

- 你的链是一个城市
- 吸引人的是**人流**（foot traffic）
- 人流 → 木板路上的商铺 → 好的租金

### App = 商铺

- DeFi 协议是木板路上的商店
- 好的位置需要人流——而不是 grant
- 链的工作是提供**distribution**

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-2">

**Luca 的核心洞见**："what I think a chain's job and an ecosystem's job is to provide distribution for applications. That is the compelling reason why I think an app would go on a chain."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./boardwalk-analogy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 链的商业模式为什么如此艰难

<div class="mt-2">

## Luca 的无情诊断

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-sm">

"the blockchain business is an incredibly hard business to do right. It's really easy to sell a story. It's really hard to actually be performant."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div>

### 为什么难
- **卖故事容易，做性能难**：融 $100M 很容易，做一个不宕机的链很难
- **Token 价值不来自 App**："I don't think token value is derived anymore by the apps that are built on your chain"
- Solana 就是证据：有最多的活动，但对代币供应和价格的影响"relatively nominal"
- Polygon 早已证明：生态系统的 app 不向链的 token 积累价值

</div>

<div>

### 如何生存
- **产生真正的费用**："unless you're making real fees... a lot of chains just sell token to go and subsidize the infra"
- **卖 Token 补贴基础设施**是目前大多数链的实际做法
- 链的生意是一个**糟糕的生意**——除非你能自给自足
- 链应该**目的化**（purpose-built）：围绕特定用例和行业构建

</div>

</div>

<div class="mt-2 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Luca 看好 Near**："I actually think Near has one of the few cases to actually become a top blockchain because of its privacy element and what I think it can do there because Intents is such an amazing product."

</div>

</div>

---
---

# Luca 的 18 个月苦战：创始人的真实故事

<div class="mt-2">

## Pudgy Penguins 不是一夜成功的

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

<div class="text-lg italic">"I didn't take a salary for 18 months. I actually put millions of dollars of my own money into it."</div>

<div class="text-xs opacity-60 mt-1">— Luca Netz, CEO of Pudgy Penguins / Igloo Inc.</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div>

### 他做了什么
- 18 个月没有工资——把数百万自有资金投进去
- "I tried to run down what were the 20 things that would make a thing successful and I did every single one of them"
- 没有责怪以太坊没有给他带来成功
- 成功后：只想要一点认可——"Didn't even need to be in public. It was just some sort of acknowledgement."

</div>

<div>

### 给创业者的信息
- 如果你的产品失败，**责怪链并不会让你的产品变好**
- "I never expected him to save my business, or to create value."
- Chain 的 grant 给你 **6 个月的跑道**——不会改变你的产品方向
- "you may not be built to run a business, frankly. You might just be an entrepreneur, which is fine."

</div>

</div>

</div>

---
---

# 为什么 App 在链之间迁移

<div class="mt-2">

## 只有一个原因：活下去

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Grant 不是战略

- "Only a grant will help. You get a two million dollar grant that lets you survive for another six months."
- 换链不会改变你的产品/市场匹配、你的团队、你的前景
- "It's not gonna do shit. It won't help."
- Grant 是一种**生存手段**，不是**增长战略**

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 链与链之间没有质的差异

- 从 MegaETH 跳到 Monad，从 Monad 跳到 Base——"it's not gonna do shit"
- 大多数 L1/L2 提供相似的体验
- 切换的真正原因是**现金注入**——在熊市里活得更久
- "If Solana had turned up in 2022 and been like, hey, move Pudgies to Solana and we'll give you a 20 million dollar check, you probably would have to consider that."

</div>

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Luca 的回应**："Oh yeah, 100%. Especially during COVID, yeah, you're done." —— 如果有 $20M 支票，谁都会考虑。这就是熊市的现实。

</div>

</div>

---
---

# 链在玩"偏好游戏"——这对吗？

<div class="mt-3">

## 不可能不玩偏好

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

### 为什么链必须选边站

- **"如果你拥有一个木板路，上面有三个地方把人带来，你会用同样的精力对待一个角落里的缝隙吗？"**
- 链的资源有限——像创业公司一样运营
- 你要挑那些"明显有成功能力"的人
- "you are picking guys who clearly have some semblance of what it takes to go and build good properties"

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**"It's common sense."** ——但 crypto 不是常识的领域。

</div>

</div>

<div>

### Vitalik 的"反偏好"模式

- 以太坊的 DeFi 社区：**没有人感觉有人被偏爱**
- "no one that you could point to be like, but he loves Santi. No, he doesn't give a fuck about Santi."
- 人人平等——但这也意味着没有人来救你
- **Luca 的新理解**："building Abstract gave me a little more empathy for... how Vitalik went about it"

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

当你的链上锁着 $100B-$500B 资产时，与核心构建者保持良好关系是"几乎不负责任的不去做"。

</div>

</div>

</div>

</div>

---
---

---
layout: two-cols
---

# 熊市生存手册

<div class="text-sm">

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 mb-2">

**Luca**："This idea that I needed a chain to save my business... you are so misconstrued." ——不要把你的失败归咎于生态。你是一个企业家——找到自己的路。

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">

**Taylor**："These are projects. These are people that are trying to build stuff. It's just rough right now." ——每个人都在挣扎。

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 mb-2">

**Kane**："Keep grinding, I guess, is the only advice." ——融资 15M 的团队烧光到剩几个月、被迫关门。

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**链不可知论者的困境**：不绑定生态 → 没人来救你。绑定生态 → MegaMafia 的一员，但至少链的生存也依赖你的生存。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./founder-survival.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 存在主义的生存

<div class="mt-2">

## 当钱烧完时

<div class="p-4 rounded bg-red-50 border-2 border-red-200 mt-3">

<div class="text-lg">一个真实的故事</div>

<div class="text-sm mt-2">
Kane 认识一个团队，融了 10-15M，自称 "DeFi super app"。两年后："we're down to whatever, months of runway. We got to shut this thing down and sell off the assets."

</div>

<div class="mt-2 text-sm">
这不是链的问题。"There's a self accountability here." 如果你依赖别人给你带来用户基础——你也许不适合经营一个企业。
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Luca 的区分**：
- **企业家**（Entrepreneur）：能创造价值的个人——Steve Ballmer 是企业家，世界上最富有的人之一
- **生意人**（Business person）：能经营一个自给自足的业务
- 你不必两者都是——但不要混淆

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**三个 Builder 的共识**：
- 没人欠你 distribution
- Chain grant ≠ 产品拯救
- "If I'm building a product... it's nice that a chain can bring me value. But I never expected them to save my business."
- 你是创始人。那是你的工作。

</div>

</div>

</div>

---
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期 Uneasy Money 里最值得记住的几句话：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"you're never just betting on the event, you're betting on who scores it."
<div class="text-xs opacity-60 mt-1 not-italic">— Kane, 总结 Polymarket 预言机困境的本质</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"the blockchain business is an incredibly hard business to do right. It's really easy to sell a story. It's really hard to actually be performant."
<div class="text-xs opacity-60 mt-1 not-italic">— Luca Netz, 链的商业模式的无情诊断</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"once you push all that responsibility to the courts, you can't say no to the courts."
<div class="text-xs opacity-60 mt-1 not-italic">— Taylor Monahan, Circle 法院委派政策的根本缺陷</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"these like 11 kids in like Bolivia or whatever that are bigger than the Nasdaq."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Sprecher, CEO of NYSE/ICE, 点评 Hyperliquid</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"EIP 1559 switches on and somehow ETH is deflationary. And that was the story — not that the fee market was now suddenly non-volatile because no one gave a fuck about that in the first place."
<div class="text-xs opacity-60 mt-1 not-italic">— Kane, ultrasound money 叙事的本质</div>
</div>

</div>

---
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于创业、熊市和链上生态：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"if I have a city with a lot of foot traffic, then my promenades and my boardwalks are going to have a lot of good stores."
<div class="text-xs opacity-60 mt-1 not-italic">— Luca Netz, 生态系统即城市的木板路类比</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"I didn't take a salary for 18 months. I actually put millions of dollars of my own money into it."
<div class="text-xs opacity-60 mt-1 not-italic">— Luca Netz, Pudgy Penguins 的早期奋斗</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"Bear markets are hard. People run out of cash really quickly."
<div class="text-xs opacity-60 mt-1 not-italic">— Kane Warwick, 熊市下的残酷现实</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"the prediction market problem, right? The oracle problem. It always comes back to oracles."
<div class="text-xs opacity-60 mt-1 not-italic">— Kane, 预测市场的世纪难题</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"what happens on chain never stays on chain."
<div class="text-xs opacity-60 mt-1 not-italic">— Uneasy Money 的开场白/结束语，链上世界的第零定律</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg">

链上的事永远不会留在链上。

</div>

<div class="mt-4 text-sm opacity-60">

Uneasy Money · 2026-06 · Kane Warwick, Taylor Monahan & Luca Netz

</div>

<div class="mt-6 text-sm">

"We're just three builders talking about what's happening on chain."

</div>
