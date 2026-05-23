---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "Bits + Bips: The Interview — The $16 Trillion Repo Market Is TradFi's Central Nervous System. Its Finally Coming Onchain"
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Bits + Bips: The Interview

<div class="mt-6 text-lg opacity-70">

**The $16 Trillion Repo Market Is TradFi's Central Nervous System. It's Finally Coming Onchain.**

</div>

<div class="mt-12 text-sm opacity-50">

Craig Burchell（FalconX 借贷主管） × Matteo Pendolfi（Paredo CEO）
主持人：Steve Ehrlich（Sharplink 研究主管）

2026 年 5 月

</div>

---

# 为什么这期值得看？

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

**$16 万亿的市场**，全球 80% 的 repo 由政府债券支撑，是整个金融体系的"中枢神经系统"——但它至今几乎没有上链。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">

**2019 年 9 月的教训**：隔夜 repo 利率一天内从 2% 飙到 20%，Fed 自金融危机以来首次紧急注资——问题并非缺钱，而是"水管"无法及时转移流动性。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">

**链上信贷已起步**：超过 50 亿美元分布在 2000+ 链上信贷资产中，FalconX 等机构已在链上获取信贷。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">

**关键问题**：链上 repo 是否需要"央行"式的最后贷款人？Hybrid 模式（链上执行 + 链下法律框架）是否是现实路径？

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">

**5 年预测**：Matteo 认为链上 repo 将在 5 年内达到 **至少 1 万亿美元**。Craig 的熊案：行业标准化是"巨大的挑战"。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

**Repo 能在危机中做什么？** Aave 事件是完美案例——如果当时有成熟的链上 repo 市场，"这些都不必发生"。

</div>

</div>

---

# Repo 到底是什么？

<div class="mt-4 space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**定义**：Repo = Repurchase Agreement（回购协议）。今天我卖给你一样东西，约定未来某个时间点买回来。

<div class="text-xs opacity-60 mt-1">— Craig Burchell, FalconX</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**本质**：短期抵押贷款。一方出资产（债券等）作抵押，另一方出资金。双方约定到期后逆向操作。技术上属于衍生品，但已演变成覆盖全球金融体系的市场。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**核心用途**：
- 金融机构管理资产负债表
- 政府与金融机构互动的核心管道
- 短期流动性润滑剂——甚至包括日内 repo
- 银行通过 RWA（风险加权资产）管理优化资本配置

</div>

</div>

---

# Repo 市场的惊人规模

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 全球 Repo 总额

<div class="text-5xl font-bold text-blue-600 my-3">$16T</div>
<div class="text-xs opacity-70">2024 年底政府债券<br/>支撑的 repo 存续量</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 政府债占比

<div class="text-5xl font-bold text-green-600 my-3">80%</div>
<div class="text-xs opacity-70">政府债券回购<br/>占全部 repo 头寸</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 市场规模比喻

<div class="text-5xl font-bold text-orange-600 my-3">中枢</div>
<div class="text-xs opacity-70">被广泛视为整个金融<br/>体系的"中枢神经系统"</div>

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**关键洞察**：Repo 是金融体系的"机油"——大多数人只有在出问题时才会想到它，但它确实让一切运转起来。

</div>

---
layout: two-cols
---

# Repo 的基本机制

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**Step 1 — 启动**：债券持有方（如对冲基金）将债券卖给现金持有方（如货币市场基金），获得现金。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Step 2 — 期间**：现金方持有债券作为抵押。回购方可按需使用现金（流动性管理、加杠杆、桥接短期缺口）。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**Step 3 — 到期**：回购方以约定价格买回债券。差价对应"利息"（repo rate）。可逐日滚动续作。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">

Craig: "你可以把它类比成加密市场里的 CeFi 开放式贷款——本质上和隔夜 repo 非常相似。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./repo-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2019 年 9 月：Repo 市场的压力测试

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-red-50 border-2 border-red-200 rounded">

### 发生了什么？

<div class="text-4xl font-bold text-red-600 my-2">2% → 20%</div>
<div class="text-sm">美国隔夜 repo 利率在**一天之内**从约 2% 飙升至超过 20%。</div>

<div class="mt-3 text-xs opacity-70">
Fed 自金融危机以来首次紧急注资干预。
</div>

</div>

<div class="p-4 bg-yellow-50 border-2 border-yellow-200 rounded">

### 为什么会这样？

- **企业税缴纳**抽走了银行体系中的准备金
- 同一时刻**大规模国债结算**集中到期
- 准备金集中在少数大银行——比任何人建模预测的都要集中
- 拥有超额准备金的银行**不愿意或无法**迅速将其借入 repo 市场

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Matteo 的关键洞察**："问题不是系统里缺现金，而是**现有基础设施无法足够快地将现金重新分配到需要的地方**。"

**后果**：催生了 SRF（常备回购便利）作为永久性后盾——Fed 从此取消了借款上限，允许无限量隔夜 repo 操作来压制市场利率。

</div>

---
layout: two-cols
---

# 2019 危机的真正教训

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**表面问题**：利率一天飙升 10 倍，Fed 紧急注资。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**根本原因**：现金存在，但"水管"不够粗、不够快。准备金卡在几家大银行，无法及时流到需要的地方。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**链上启示**：DeFi 同样面临碎片化基础设施、流动性分配不均、缺乏常备后盾机制——这正是 repo 市场演变所要解决的结构性缺口。

</div>

<div class="mt-2 p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">

"You have to build the plumbing before you need it, not when you need it."

<div class="text-xs opacity-60 mt-1 not-italic">— Matteo Pendolfi</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./crisis-plumbing.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两种 Repo 模式：中央清算 vs 双边

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 中央清算 Repo

- 政府支持、标准化条款
- 无需承担对手方信用风险（CCP 居中）
- 规模更大、流动性更深
- 类似 Paradigm + Deribit：价格协商、其他全部标准化
- 结算、抵押品管理、定价来源全部统一

<div class="mt-3 text-xs opacity-60">
**优点**：操作简单、自动化程度高。**缺点**：无法定制。
</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 双边 / 三方 Repo

- 两个对手方直接协商
- BNY Mellon 或 JP Morgan 等作为三方代理人
- 处理抵押品选择、替换、日常估值和结算
- 类似双边 ISDA 衍生品交易——高度可定制
- 灵活性来自与对手方的关系和信用判断

<div class="mt-3 text-xs opacity-60">
**优点**：定制化、关系驱动。**缺点**：每个对手方需要单独谈判和纸质流程。
</div>

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Matteo**：三方 repo "没有改变 repo 的经济学，但大幅降低了摩擦，创造了抵押品管理的标准化——让新参与者更容易进入市场。"

</div>

---

# 链上信贷：现在走到了哪一步？

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 已有进展

- **超过 50 亿美元**分布在 2000+ 链上信贷资产中
- **借款方已显著成熟**：FalconX 等机构对手方在链上获取信贷，附带清晰的条款、抵押安排和受机构审查的法律结构
- **承销层专业化**：多个专业承销商将传统信贷的纪律和激励带入链上产品
- **可组合性展现真实价值**：链上信贷资产被用作 DeFi 协议中的抵押品

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 仍然早期

- 市场结构仍在**基础设施建设阶段**，尚未进入规模化阶段
- 第一代链上信贷的借款方多为原生加密实体，信用记录薄、问责有限——这正在改变
- 流动性的获取仍有摩擦
- RWA 代币化带来了资产，但二级市场的流动性远远不够

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Matteo**："承销方法论的改善、法律确定性和强制执行力的增强、以及可组合性的实际落地——这些为链上信贷下一阶段提供了有意义的概念验证。"

</div>

---

# 链上信贷的使用场景

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**收益策略代币化**
- Syrup USDC（Maple Finance）、USDE（Ethena）等
- 用户将资产委托给收益策略，收到产生收益的收据代币
- 类似准稳定币，可质押生息

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**传统私募信贷上链**
- JSTRY、Securitize/Centrifuge、Apollo 的 Acred
- 传统 TradFi 策略桥接到链上
- 对于资管方：获取额外 AUM
- 对于链上社区：通过链上工具投资私募信贷

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**混合模型（FalconX）**
- 将部分贷款簿代币化
- 无每日流动性概念，无稳定币
- 投资者可参与贷款簿的收益部分
- 链上市场提供了传统金融难以实现的**二级流动性**

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Craig 的意外发现**
"我们在某些情况下意外地发现，人们会说：'也许我可以抵押这个代币去借款。也许我可以做一个 repo 类型的工具。' 链上出现了传统金融没有的二级市场动态。"

</div>

</div>

---
layout: two-cols
---

# 为什么不全部用智能合约？

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**Repo 的法律特殊性**：Repo 之所以是 repo 而不是普通贷款，关键在于**破产隔离**——出借方的资产在对手方破产时不会被冻结在破产程序中。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**智能合约 ≠ 法律合同**：尽管叫"smart contracts"，它们在法律意义上并不是合同。要让 repo 真正享有破产隔离，必须按特定方式在法律文件中将其文档化为回购协议。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Craig 的务实态度**："不需要一刀切的模式。你可以有一个触及链上的相当稳健的 repo 市场，但不一定全部由程序化完成。如果某个环节需要链下处理，那也 OK。"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">

"avoiding a bankruptcy stay is actually one of the core components"

<div class="text-xs opacity-60 mt-1 not-italic">— Craig Burchell</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./defi-cefi-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# DeFi × CeFi：界限正在消失

<div class="mt-4 space-y-3">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**Matteo**："DeFi 和 CeFi 之间的界限正在逐渐模糊，我们看到越来越多的重叠和混合模式。这本身是有道理的——我们不需要强制采用智能合约应用，而是需要让它对市场本身有意义。"

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Craig 的实践视角**：大型机构可能会接触链上（包括 FalconX 自己），但通常希望在某种程度上保留纸质文件——尤其是为了获得 repo 的破产待遇和监管优势。

</div>

<div class="grid grid-cols-3 gap-3 mt-2 text-center text-xs">

<div class="p-3 rounded bg-green-50 border border-green-300">
<b>纯 DeFi</b><br/>
完全链上、无许可、<br/>纯智能合约
</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-300">
<b>"HyFi" 混合模式</b><br/>
链上执行 + 链下<br/>法律框架 + 纸质协议
</div>

<div class="p-3 rounded bg-blue-50 border border-blue-300">
<b>纯 TradFi</b><br/>
传统 repo 市场、<br/>ISDA、中央清算
</div>

</div>

</div>

---

# 稳定币 Repo：一个正在形成的市场

<div class="mt-4 space-y-3">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**现实需求**：Craig 每天都在遇到这个问题——"我的交易台不想去 mint 和 burn。我们有 USDT 要结算给客户，但手上只有 USDC。如果能进入一个 repo 市场，快速把 USDC 换成 USDT，之后再来处理多好？"

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**为什么现在特别相关**：

- 大量新稳定币产品涌现（PYUSD、USDE、USDS 等）
- 没有人想频繁 burn 稳定币——成本高、流程慢
- 不同稳定币之间的互换需求日益增长
- 短期流动性桥接是 repo 的天然用武之地

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Craig 的判断**："随着这些新稳定币产品的推出，一个强大的 repo 市场对于这类活动可能非常有价值。"

</div>

</div>

---
layout: two-cols
---

# RWA 的流动性困境

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**核心矛盾**：投资者需要**每日流动性**——他们需要心理上的安全感，知道这是临时存款。但大多数 RWA 产品只能提供季度流动性（甚至设有赎回门槛）。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**链上的优势**：与借款人协调赎回，在传统金融中需要数天的结构化法律审查——在链上只是一次合约调用、一笔链上交易。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**多种解法并存**：
- Morpho 上的 repo 市场——将已抵押的头寸再次 repo 出去
- 市场参与者直接提供二级流动性，承担对手方和期限风险
- 赎回队列中的资产可通过 repo 获取即时流动性

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">

"tokenization improves transferability, but it doesn't automatically create an active market around it"

<div class="text-xs opacity-60 mt-1 not-italic">— Matteo Pendolfi</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rwa-liquidity.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 是否需要链上的"最后贷款人"？

<div class="mt-6 space-y-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Matteo 的回答**：在链上构建的市场结构中，允许参与者提供二级流动性、从全球流动性池中获取资金——这使得中央权威的后盾作用"变得不那么重要，但并**没有完全消除**这种需求。"

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 链上降低了对央行后盾的依赖

- 可组合性让资产作为抵押品跨协议流转
- 全球流动性池扩大了参与者的范围
- 多个中央权威协调提供后盾，而非依赖单一实体
- 市场结构在设计上就考虑了流动性压力下的运作

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但仍然需要某种后盾

- 极端压力下，市场仍可能冻结
- 链上速度虽快，但无法凭空创造流动性
- 2019 年的教训：当所有人都同时需要现金时，私人市场可能无法自愈
- 永久性后盾机制为市场提供信心

</div>

</div>

</div>

---

# Repo 在危机时刻：Aave 的故事

<div class="mt-4 space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**背景**：Aave 市场上发生的黑天鹅事件——人们对自己的头寸很满意，但流动性突然枯竭。出现了债务代币和 swaps 的二级市场（类似 Fluid 的做法）。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Craig 的分析**："但那些二级市场本质上都是让你**卖出头寸**。在很多情况下你根本不想卖出——你想保留同样的头寸，只是现在需要流动性。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**Repo 能做什么**："我需要 ETH 现在就用。我愿意用 Aave 里的债务代币或其他东西来做 repo，换取我需要的 ETH 来追加保证金或偿还贷款以避免被清算。"

</div>

</div>

---
layout: two-cols
---

# 流动性连锁崩塌——Repo 如何打断它

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">

**1** · 黑天鹅事件触发

</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">

**2** · 流动性枯竭 → 人人需要现金

</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**3** · 资产被迫抛售 → 价格下跌

</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">

**4** · 利率飙升 → 更多人被清算

</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">

**5** · LST 脱锚风险 → 系统级压力

</div>

<div class="mt-3 p-3 bg-green-50 border-2 border-green-500 rounded text-sm">

**Repo = 断路器**：在第 2 步插入。用 repo 获取短期流动性，**不动头寸**，支付一点利息渡过难关。

</div>

<div class="p-2 italic text-sm text-blue-600">

"None of that had to happen."

<div class="text-xs opacity-50 mt-1 not-italic">— Craig Burchell</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./liquidation-cascade.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Morpho 市场 + Repo：提升资本效率

<div class="mt-4 space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Morpho 的运作逻辑**：金库策展人需要平衡流动性状况并分配 LTV（贷款价值比）。他们能分配多少资金、给多高的 LTV，**完全取决于不同资产的流动性状况**。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**Repo 的杠杆效应**：当流动性状况改善时，Morpho 市场可以给出更高的 LTV 和更大的资金分配。反之，当流动性枯竭、Morpho 的 ticking rate 机制开始推高利率时，头寸面临爆仓和清算风险——人们需要去杠杆或补充资金。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Craig 的实践**："我们目前在产品套件中提供去杠杆工具，不仅针对我们的信贷代币，也针对其他资产。这将提升整个市场的资本效率——因为金库策展人现在对流动性有信心，可以释放更多资金到系统中。"

</div>

</div>

---

# Matteo 的 5 年预测：至少 1 万亿美元

<div class="mt-8 text-center">

<div class="text-6xl font-bold text-blue-600 mb-4">$1T+</div>

<div class="text-xl opacity-70 mb-6">链上 repo 市场在 5 年内至少达到一万亿美元</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么能到？

- 传统机构正在积极研究区块链应用的 pipeline
- Hybrid 模式降低了准入门槛
- DeFi 和 CeFi 的融合趋势不可逆
- 现有平台已经在发布这类工具
- FalconX 等市场参与者已深度参与

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 可能更快？

- Matteo："我不会惊讶于在五年之前就看到它实现。"
- 随着更多传统玩家的加入，增长可能是非线性的
- 可组合性和全球流动性池提供了 TradFi 没有的网络效应

</div>

</div>

---

# Craig 的 Bull Case × Bear Case

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-6 rounded border-l-4 border-green-500 bg-green-50">

### Bull Case：为什么它会实现

<div class="mt-4 text-sm space-y-3">

**已经在发生**：诸多平台正在发布 repo 类型的工具。包括 FalconX 在内的市场参与者已经在参与。

**这是必需品**：随着 RWA 和稳定币生态的扩大，repo 不是锦上添花——它解决的是真实的结构性问题。

**链上是理想起点**：标准化术语、统一结算、统一抵押品管理——这些在链上实现比在传统金融中更容易。

</div>

</div>

<div class="p-6 rounded border-l-4 border-red-500 bg-red-50">

### Bear Case：为什么它可能不会

<div class="mt-4 text-sm space-y-3">

**标准化是巨大挑战**："让整个行业统一到标准化的 repo 协议上，这是一个巨大的挑战。基本上等于**启动一个新的交易所**——那是极其困难的准入门槛。"

**人们会用不同方式实现**：不一定每个用例都需要真正的 repo。可能会有各种替代方案，未必集中在一个市场。

**机构惯性**：让大型传统机构改变他们的 treasury 管理方式、采用新标准——这需要时间和协调。

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"The problem was not a lack of cash in the system, but it was an inability to redistribute cash quickly through existing infrastructure."
<div class="text-xs opacity-60 mt-1 not-italic">— Matteo，总结 2019 年 repo 危机的根本原因</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"You have to build the plumbing before you need it, not when you need it."
<div class="text-xs opacity-60 mt-1 not-italic">— Matteo，市场结构设计的第一原则</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"None of that had to happen."
<div class="text-xs opacity-60 mt-1 not-italic">— Craig，谈 Aave 黑天鹅事件中的连锁清算</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Tokenization improves transferability, but it doesn't automatically create an active market around it."
<div class="text-xs opacity-60 mt-1 not-italic">— Matteo，代币化 ≠ 流动性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"I don't think we have to have a one-size-fits-all model as this space evolves."
<div class="text-xs opacity-60 mt-1 not-italic">— Craig，hybrid 模式的哲学基础</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"Getting an entire industry on standardized terms — that is a gargantuan challenge. You're basically starting a new exchange."
<div class="text-xs opacity-60 mt-1 not-italic">— Craig，最大的熊案</div>
</div>

</div>

---
layout: end
---

# Thanks for watching

<div class="mt-8 text-lg">

"$16 trillion in government bond-backed repo...about 80% of the total repo positions."

<div class="text-sm opacity-60 mt-4">— Craig Burchell, FalconX</div>

</div>
