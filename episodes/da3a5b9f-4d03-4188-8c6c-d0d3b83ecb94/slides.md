---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Ruslan Fakhrutdinov – Extended Exchange and Vault Tokenization (S7E27)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Ruslan Fakhrutdinov — Extended Exchange & Vault Tokenization

## S7E27 · Flirting with Models · 2026

<div class="text-sm opacity-60 mt-12">

Extended 创始人详解去中心化永续合约交易所的核心设计：结算层独立、金库风险瀑布、金库份额代币化

</div>

---
class: text-left
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**结算层独立性**<br>
为什么 Extended 选择在公共 Starknet 而非自建链上运行，以及这个选择如何定义了真正的去中心化
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**金库的核心角色**<br>
金库是 Extended 系统的基石，同时承担流动性提供、保险基金、未来 USDC 借贷三重功能
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**确定性清算盈亏**<br>
Extended 的金库在接管头寸前先对冲，精确到 10^-6 精度地预知每笔清算的盈亏——这是关键创新
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
**金库份额作抵押品**<br>
XVS 代币代表金库权益，可作为交易抵押品使用——增强资本效率，也引入新的尾部风险
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**Force Close 机制**<br>
Extended 独创的操作类型：金库可在做市价而非破产价强制平仓对手方，保障赎回在任何市场条件下都可执行
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**跨资产抵押路线图**<br>
如何在不依赖现货市场的情况下，通过 RFQ 系统和金库兜底，实现 BTC/ETH 等多资产抵押
</div>

</div>

---
class: text-left
---

# 结算层独立：Extended 的核心原则

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**什么是结算层？**<br>
所有交易结算、用户余额存储和更新的底层技术栈——区块链或其他账本
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"if you do control the settlement layer, or even if you have an impact on it, basically you are not so different from a centralized exchange."
<div class="text-xs opacity-60 mt-1 not-italic">— Ruslan, Extended 创始人</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**Extended 的选择**：构建在公共 Starknet 链上，因为"当前的区块链技术水平允许这样做"
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**作者概括**：Ruslan 的核心理念——"从第一天起，我们就不想控制结算层"，因为控制结算层意味着控制用户资金，这与中心化交易所没有本质区别
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
**TradFi 类比**：传统金融中交易所、清算所、经纪商是独立实体——将所有这些功能合并到一个实体手中，会破坏制衡机制
</div>

</div>

</div>

---
class: text-left
---

# Paradex 事件：结算独立性的真实考验

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
Corey 提问：Paradex 有定价故障导致大规模清算，他们回滚了区块链来挽回用户损失——既然结算层应该独立，为什么还能回滚？
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**Ruslan 的回答**：Paradex 实际上运行在自己的 Starknet 分叉上，目前仍然控制着结算层。Extended 则不同——运行在公共 Starknet 上，除非 Starknet 本身的治理决定回滚，否则无法撤回交易
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**条件性最终性 vs 可信最终性**：当治理可以干预并回滚交易时，最终性是"有条件的"；当结算层去中心化且独立于交易所时，最终性是"可信的"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**治理永远存在——关键在于分离**：Ruslan 认为每个系统都有治理，这不奇怪。"重要的是，作为交易所运营方，我们对那个治理没有影响力"
</div>

</div>

</div>

---
layout: two-cols
---

# 分离制衡：TradFi 里的制度智慧

<div class="text-sm space-y-3 mt-2 pr-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**传统金融的分工**：清算所、交易所、经纪商由不同独立实体运营，各自承担不同职责
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**区块链映射**：Extended 作为交易所运行，结算层（链）作为独立的清算所
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs leading-relaxed">
"at the stage when you start controlling the settlement layer, you are basically commingling all the things into one place." — Ruslan
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed">
**损失的责任归属**：Ruslan 认为造成损失的实体应承担责任——"until the entity is financially healthy and able to cover those losses"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./protection-priority.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 金库：Extended 系统的基石

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**金库的核心定位**：Ruslan 称之为"整个系统的基石（cornerstone）"——不仅为交易所大部分市场提供流动性，还充当保险基金处理所有清算
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**Extended 金库的两大差异化设计**：<br>
1. 存入金库获得 XVS（Extended Vault Share），可作为交易抵押品<br>
2. 收益率与用户交易活跃度挂钩——越活跃，收益越高
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**金库不是主要做市商**：在交易所上的市场份额"合理偏低"，但扮演"最后流动性提供者"的角色——当没有其他人报价时，金库出场
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
**未来角色扩展**：启动跨资产抵押后，金库将成为 USDC 的主要借贷方——所有使用非稳定币资产作抵押的用户实质上都在向金库借 USDC
</div>

</div>

</div>

---
layout: two-cols
---

# 金库的三重功能

<div class="text-sm space-y-3 mt-2 pr-2">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**当前已实现**：流动性提供者（最后报价方）+ 保险基金（处理所有清算），两项功能已经运行中
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**未来将上线**：USDC 主要借贷方——用户可以将 BTC/ETH 等非稳定币资产存入作为抵押，金库成为系统中 USDC 供应的核心来源
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed italic">
"on the one hand, it serves as the collateral for the users who deposit funds into the vault, boosting capital efficiency...on the other hand, from the exchange standpoint, it will serve three core functions."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vault-three-roles.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 清算机制的创新：预先确定盈亏

<div class="text-sm space-y-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**关键设计差异**：与 Hyperliquid 等平台不同——后者先接管头寸再处理，Extended 的金库在处理任何清算**之前**就能确定性预知清算的盈亏
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
**步骤 1**：用户 BTC 多头被清算
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
**步骤 2**：金库**先做空** 1 BTC，确切知道做空价格
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed">
**步骤 3**：对比做空价与用户的破产价 → 精确计算盈亏
</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
**以 10^-6 精度（USDC 精度）预知盈亏**。这笔交易实际已执行但尚未结算——如果盈亏超出风险限额，金库会撤回做空而不处理清算，用户被 ADL。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs leading-relaxed">
**与 Hyperliquid 的对比**：Hyperliquid 的金库在任何情况下都接管头寸，之后才处理平仓。<br>
Extended：如果损失过大，金库拒绝接管，风险直接转回用户。
</div>

</div>

---
layout: two-cols
---

# 确定性清算流程

<div class="text-sm space-y-3 mt-2 pr-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">
金库在接管头寸前先执行反向交易（对冲），此时交易尚未结算——对其他用户不可见，整个过程原子化
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
金库拥有"撤回交易"的特殊能力，但这仅用于清算目的，实际上并不给予不公平优势
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
这是一个在风险限额内有效保护交易者、超出限额后将风险返还的精密设计
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./deterministic-liquidation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 三层风险限额

<div class="text-sm mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
**第一层：单笔清算最大亏损** — 每个市场独立设定，流动性越好额度越大
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**第二层：单市场单日最大亏损** — 任何市场只能动用金库权益的一小部分，当日累计清算亏损不得超过该阈值
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded leading-relaxed">
**第三层：金库单日总亏损上限** — 约 TVL 的 10%。一旦触及，金库将强制平仓所有头寸，回到纯 USDC 状态
</div>

<div class="grid grid-cols-2 gap-3 mt-2">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">
每笔清算在原子化交易中同时检查这三个限额。全部通过 → 金库接管；任何一项未通过 → 撤回交易，用户被 ADL
</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed italic">
"the vault deterministically knows the PNL of that liquidation...it basically checks whether the potential loss of that liquidation is within three types of risk limits"
</div>
</div>

</div>

---
layout: two-cols
---

# 三层风险限额

<div class="text-sm space-y-3 mt-2 pr-2">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed">
限额检查发生在实际执行交易之后、结算之前——全部原子化，其他用户对订单簿的变化无感知
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
触及第三层限额（单日总亏损 ~10% TVL）：金库强制平仓所有持仓 → 回到纯 USDC → 防止任何进一步的价值下跌
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
这种设计将 XVS 抵押品带来的增量风险控制在每一层都可以被"熔断"的范围内
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-risk-limits.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 自动去杠杆（ADL）：风险的最后出口

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
**ADL 是什么意思？**<br>
"auto deleverage is basically when you take the opposing positions of the users. And you force close them at the bankruptcy price of the liquidated user."
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**具体操作**：找一个持有相反方向头寸且盈利最多的用户，按被清算方的破产价强制平仓——盈利方损失部分浮盈，被清算方归零
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**ADL vs 普通清算**：普通清算中金库承担风险并可能获利（或亏损）；ADL 是当金库拒绝接手时，风险直接在交易者之间重新分配
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
**XVS 抵押品的代价**：引入金库份额作为抵押品后，Extended 对触发 ADL 的风险容忍度更低——因为金库的资金已经被杠杆化了
</div>

</div>

</div>

---
class: text-left
---

# XVS：金库份额代币化的创新与风险

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**XVS = Extended Vault Share**<br>
存入金库获得 XVS，代表金库权益。与普通存款不同——XVS 本身可以作为交易抵押品，大幅提高资本效率
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**收益率设计**：金库收益来自交易者的活跃度——用户交易越频繁，金库收益越高，XVS 持有者的回报也随之增长。这是正向激励机制
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
**两类核心风险**：<br>
1. 用户持有 XVS 作抵押且需要清算时，金库可能因持仓无法平仓导致赎回失败<br>
2. XVS 价值大幅下跌 → 级联清算螺旋
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**90% 抵押率（haircut）**：每 1 美元 XVS 提供 90 美分抵押价值。为什么不是 100%？因为金库不全是 USDC——它持有头寸，平仓会有滑点
</div>

</div>

</div>

---
class: text-left
---

# XVS 风险缓解策略

<div class="text-sm space-y-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**风险一：XVS 清算时金库无法平仓** → **解决方案：Force Close 机制**<br>
当金库需要赎回 XVS 但无法平仓时，强制按做市价关闭盈利方头寸——一种新型操作，只有金库可执行
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**风险二：XVS 价值下跌** → **三层风控**<br>
1. 金库全局杠杆上限（触及则进入 reduce-only 模式）<br>
2. 单市场持仓限额<br>
3. 波动率越高报价价差越宽<br>
4. 加权净敞口始终趋向零（例如 BTC 多头用 ETH 空头对冲）
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
XVS 价格下跌只能来自两个驱动因素：金库在清算上亏损（已被风险限额遏制）或金库交易亏损（被杠杆/持仓限额遏制）
</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed italic">
"the vault aims its open interest to be better hedged...the weighted net exposure of the vault is always aiming to be zero"
</div>
</div>

</div>

---
layout: two-cols
---

# Force Close vs ADL

<div class="text-sm space-y-3 mt-2 pr-2">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs leading-relaxed">
**Force Close** 是 Extended 独创的操作——仅在金库需要赎回 XVS 但流动性不足时触发，与 ADL 相似但有两个核心区别
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
区别一：做市价平仓 — "mark price is the price that we don't control" — 源自独立预言机，不可被操纵
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
区别二：无盈亏转移 — 平仓本身不在用户之间转嫁 PnL，只是关闭敞口。被平仓方拿回的是合理市价
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./force-close-mechanism.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 为什么 Force Close 必须用做市价？

<div class="text-sm mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**自托管交易所的三项基本原则**（Ruslan 的框架）：<br>
1. 不控制结算层<br>
2. 链上验证交易逻辑，防止欺诈交易被结算<br>
3. 不控制清算价格
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
**做市价 vs 中间价**：做市价来自交易所无法控制的独立预言机——中间价（order book mid price）可以被扭曲或操纵，"because it can be skewed, manipulated or whatever"
</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
**为什么这个区别重要**：如果 Force Close 用中间价，交易所（或攻击者）可以通过操纵订单簿来以不公平的价格强制平仓对手方
</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
**Force Close 保证在任何市场条件下金库赎回都可以完成**，代价是盈利方交易者可能被动失去头寸——但按公平市价，而非破产价
</div>

</div>

---
class: text-left
---

# 90% 抵押率：为什么是这个数字？

<div class="text-sm mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**为什么不是 100%？** 两个原因：<br>
1. 金库赎回 XVS 时需按比例平仓 → 全部以 taker 订单执行 → 即使市场流动性极好，滑点也在所难免<br>
2. 清算亏损（风险限额非零）和交易亏损的存在
</div>

<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed text-center">
<div class="text-2xl font-bold text-green-700">100%</div>
"不可能"<br>
金库持有头寸，平仓必然有滑点
</div>
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed text-center">
<div class="text-2xl font-bold text-blue-700">90%</div>
"当前选择"<br>
在可用性和保护之间取得平衡
</div>
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed text-center">
<div class="text-2xl font-bold text-red-700">50%</div>
"过于保守"<br>
用户不会愿意使用 XVS 代替 USDC
</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
**90% 是精心权衡的结果**：一方面要足够高以让大多数用户愿意用 XVS 替代 USDC 作抵押品，另一方面要给予足够保护应对潜在亏损。这不是拍脑袋的数字——它是基于风险限额设计倒推出来的。
</div>

</div>

---
class: text-left
---

# 极端压力场景：当风险限额被触发

<div class="text-sm space-y-3 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
**场景**：市场剧烈下跌 → 金库单日清算亏损触及 TVL 10% 上限 → XVS 贬值 → 交易者被大量清算
</div>

<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed">
**第 1 步**<br>金库触发硬止损：强制平仓所有头寸 → 回到纯 USDC → 不再承受任何市场风险
</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
**第 2 步**<br>金库拒绝接纳更多清算 → 用户被 ADL：盈亏双方直接强制匹配
</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
**第 3 步**<br>系统因零和博弈属性依然偿付——负债永远可以通过匹配多头空头来清零
</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed italic">
"when the vault hits one of its risk limits, it will force close all of its positions. So basically, it will go back to USDC as the only asset and the only type of exposure that the vault itself holds, which will prevent any future drops in value."
</div>

</div>

---
class: text-left
---

# 保护优先级：系统 > 交易者 > 储户 > 盈利方

<div class="text-sm mt-4 space-y-3">

<div class="grid grid-cols-4 gap-2 text-center">
<div class="p-3 bg-red-50 border-2 border-red-300 rounded">
<div class="font-bold text-red-700 text-xs">第 1 优先</div>
<div class="text-xs mt-1">系统偿付能力</div>
<div class="text-xs opacity-70">资产 > 负债，不可谈判</div>
</div>
<div class="p-3 bg-yellow-50 border-2 border-yellow-300 rounded">
<div class="font-bold text-yellow-700 text-xs">第 2 优先</div>
<div class="text-xs mt-1">交易者（限额内）</div>
<div class="text-xs opacity-70">金库在限额内吸收清算</div>
</div>
<div class="p-3 bg-orange-50 border-2 border-orange-300 rounded">
<div class="font-bold text-orange-700 text-xs">第 3 优先</div>
<div class="text-xs mt-1">金库储户</div>
<div class="text-xs opacity-70">限额触及后保护储户</div>
</div>
<div class="p-3 bg-green-50 border-2 border-green-300 rounded">
<div class="font-bold text-green-700 text-xs">最后手段</div>
<div class="text-xs mt-1">盈利方交易者</div>
<div class="text-xs opacity-70">ADL/Force Close 分摊损失</div>
</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed italic">
"first and foremost, the vault protects the integrity of the system. Then it protects the traders, but within risk limits. If those risk limits are breached, it starts protecting vault depositors and putting the risk and the potential losses back to the traders."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
**核心洞察**：亏损交易者不在乎是被金库清算还是被 ADL——反正都归零。风险最终落在**盈利方交易者**身上。Extended 因为 XVS 的存在，对触发 ADL 的容忍度比其他平台更低
</div>

</div>

---
class: text-left
---

# 99.99% 的信心：为什么极端场景几乎不会发生

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**Ruslan 的评估**："I would say probably ninety nine point ninety nine of the cases, the risk limits of the vault would be sufficient to protect the traders"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**日常运行中金库头寸状态**：加权净敞口趋向零（多头 BTC → 空头 ETH 对冲）、报价价差随波动率自适应调整、杠杆和单市场持仓有硬上限
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**即便如此，Ruslan 仍然承认**："all types of black swan events are also theoretically possible"
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
**XVS 带来的权衡**：<br>
收益 = 有收益率的抵押品 + 助推收益率<br>
代价 = ADL/Force Close 的触发门槛更低<br>
<br>
Ruslan 认为收益大于风险，且预测这将成为行业标准
</div>

</div>

</div>

---
class: text-left
---

# 跨资产抵押：Extended 的下一步

<div class="text-sm space-y-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**目标**：允许用户使用 BTC、ETH 等非稳定币资产作为抵押品交易 USDC 结算的永续合约——就像传统中心化交易所支持的跨资产保证金模式
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**核心挑战**：Extended 没有现货市场来卖出被清算用户的非稳定币资产。如何清算一个用 BTC 作抵押但需要 USDC 来偿还负债的用户？
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**解决方案：RFQ 做市商系统**<br>
50+ 个已整合的市场做市商持续流式报价——当用户被清算时，系统自动选择最佳报价将 BTC 卖给做市商换取 USDC。做市商的保证金几乎不受影响（BTC 本身也贡献保证金），他们可以随后对冲或在其他场所平仓
</div>

</div>

---
class: text-left
---

# 跨资产清算的兜底机制

<div class="text-sm mt-4 space-y-3">

<div class="grid grid-cols-3 gap-3 text-center">
<div class="p-3 bg-green-50 border-2 border-green-300 rounded">
<div class="font-bold text-green-700 text-sm">第 1 层：RFQ 做市商</div>
<div class="text-xs mt-1 leading-relaxed">50+ 市场做市商竞标承接被清算现货资产 → 正常场景下最高效、最具可扩展性</div>
</div>
<div class="p-3 bg-yellow-50 border-2 border-yellow-300 rounded">
<div class="font-bold text-yellow-700 text-sm">第 2 层：金库兜底</div>
<div class="text-xs mt-1 leading-relaxed">无做市商愿意接 → 金库在限额内接管 → 立即对冲 → 降价逐步出售给做市商</div>
</div>
<div class="p-3 bg-red-50 border-2 border-red-300 rounded">
<div class="font-bold text-red-700 text-sm">第 3 层：现货 ADL</div>
<div class="text-xs mt-1 leading-relaxed">金库限额也触及 → 找出前 10% USDC 大户 → 将 BTC 强塞给他们，赚取 haircut 利润</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">
**做市商看不到对手方**：使用 last-look 模型——做市商持续流式报价，系统选择最佳价格后再要求确认。做市商不知道自己在和谁交易（金库还是普通清算），防止 walk-down 博弈
</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
**haircut 即利润**：当用户用 BTC 作抵押时会有折扣率（如 5%），这个 haircut 就是清算时金库或做市商的利润来源——这也是为什么做市商愿意参与这个系统
</div>
</div>

</div>

---
class: text-left
---

# 利率机制：资产感知的借贷模型

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**传统 DeFi 借贷**：所有资产的 USDC 借款利率相同——一个简单的线性函数，仅取决于总可用 USDC 与已借出 USDC 的比例
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**Extended 的创新**：利率取决于**两个输入**——<br>
1. 整体 USDC 利用率（TVL vs 已借出）<br>
2. 特定资产的集中度（USDC 借出中由该资产抵押的比例）
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**实际影响**：存 BTC 作抵押的用户和存 ETH 的用户可能支付不同的借款利率——取决于系统对那种资产的风险敞口有多大
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
**设计目标**：防止系统对单一资产积聚过大风险敞口。当某种资产的抵押集中度过高时，对应的借款利率上升，抑制进一步集中
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
**金库是最终受益者**：所有借贷利息收入流入金库 → 激励更多存款 → TVL 增长 → 更多借贷能力 → 健康循环
</div>

</div>

</div>

---
class: text-left
---

# 压力测试：从边缘情况出发

<div class="text-sm mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**Ruslan 的测试哲学**："One, you start from the edge cases." 从极端场景反推设计——只有一个交易者、他的钱在金库、他对抗金库交易、他被清算——这极端场景下系统会怎样？
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
**边缘情况清单**：<br>
• 金库最大杠杆+单市场巨额头寸+用户被清算<br>
• 订单簿中间价被操纵<br>
• 现货流动性完全枯竭<br>
• 大规模级联清算
</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
**Jelly-Jelly 教训**：Hyperliquid 金库攻击事件后，Extended 选择确定性清算——就是因为看到了别人金库"先接管再处理"模式的漏洞。测试网上模拟验证所有场景
</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
Ruslan 强调"all the edge cases are possible, so for all types of black swan events are also theoretically possible"——设计必须覆盖所有理论路径，但最终每一层都有熔断（risk limit → force close → ADL），系统的偿付能力始终有保障
</div>

</div>

---
class: text-left
---

# 零和博弈：系统为什么总是可以"自救"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**核心洞察**："perps are zero-sum game, so positive PNL of a trader is always equal to the negative PNL of a trader"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**推论**：因为永续合约是对称的零和博弈，系统总是可以通过强制平仓多头和空头来恢复健康——只要资产的净值大于负债（系统偿付）
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**这个洞察解释了为什么 Extended 的设计哲学可行**：只要你尊重结算层的独立性、严格限制金库的风险敞口、在每一层都有兜底机制（ADL / Force Close），一个使用 XVS 作抵押品的系统在数学上是可持续的
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
**Ruslan 的信念**："you can always bring the system back to health"——这不是乐观主义，是数学必然。唯一的条件是不要打破"资产 > 负债"这个铁律
</div>

</div>

</div>

---
class: text-left
---

# 三个不可谈判的设计原则

<div class="text-sm mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**原则 1：不控制结算层** — Extended 运行在公共 Starknet 上，无法单方面回滚交易。结算层的治理是去中心化的，且与交易所运营方无关
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**原则 2：链上交易验证** — 所有交易逻辑必须通过链上验证，不允许欺诈或不正确的交易被结算。这是去中心化交易所与中心化交易所的本质区别
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**原则 3：不控制清算价格** — 所有清算以做市价执行，做市价由交易所无法控制的独立预言机提供。"mark price is the price that we don't control"——这防止了交易所或任何方以不公平价格清算用户
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed italic">
"when you are building a self-custodial exchange, you need to make sure that at least you respect three things. One is that you don't control the settlement layer. Second is that you have on-chain validations of the trading logic...And the third one is that you don't control the prices at which liquidations are handled."
</div>

</div>

---
class: text-left
---

# 行业趋势：金库代币化将成为标准

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
**Ruslan 的预测**："we also believe that it will be becoming an industry standard in the longer run, and we'll see more and more perp DEXs offering similar functionality."
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
**已经有跟进者**：Lider 最近宣布将代币化其 L-B 代币并用它作为抵押品——Extended 的开创性设计正在被同行效仿
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
**Extended 的雄心**：不仅仅是另一个 Perp DEX——而是构建一个"truly decentralized exchange with unified margin across Perps, Spot, and integrate the lending market and the vault"
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
**吸引新用户群体**：当前的 Perp DEX 主要竞争同一批加密原生用户，Extended 希望将新的用户群体带入去中心化交易所
</div>

</div>

</div>

---
class: text-left
---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"if you do control the settlement layer, or even if you have an impact on it, basically you are not so different from a centralized exchange."
<div class="text-xs opacity-60 mt-1 not-italic">— 结算层独立性的核心论证</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"At extended, essentially, the vault is the cornerstone of the entire system."
<div class="text-xs opacity-60 mt-1 not-italic">— 金库的战略定位</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"mark price is the price that we don't control."
<div class="text-xs opacity-60 mt-1 not-italic">— Force Close 为什么必须用做市价</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"perps are zero-sum game, so positive PNL of a trader is always equal to the negative PNL of a trader...you can always bring the system back to health."
<div class="text-xs opacity-60 mt-1 not-italic">— 系统偿付的根本保障</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"I would say probably ninety nine point ninety nine of the cases, the risk limits of the vault would be sufficient to protect the traders."
<div class="text-xs opacity-60 mt-1 not-italic">— 风险限额的现实置信度</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"we introduced a new type of operation which we call force close."
<div class="text-xs opacity-60 mt-1 not-italic">— Extended 独创的核心机制创新</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="text-lg opacity-70 mt-12">

"All the time I have free left, I am trying to spend with my family."

<div class="text-sm opacity-50 mt-6">

— Ruslan Fakhrutdinov, Extended 创始人

</div>

</div>
