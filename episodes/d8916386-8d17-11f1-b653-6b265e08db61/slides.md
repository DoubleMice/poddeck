---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Zcash, Ethereum, Aztec, Canton and More: Which Chain Will Win the Privacy Race?'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Zcash、Ethereum、Aztec、Canton 与更多

## 谁将赢得链上隐私竞赛？

<div class="text-sm opacity-60 mt-4">
Joe Andrews (Aztec Labs CEO) · Jared Hope (Logos 创始人) · Mert Mumtaz (Helios CEO)
</div>

<div class="text-xs opacity-50 mt-2">
Unchained · Laura Shin 主持 · 2026年7月
</div>

---

# 为什么这期值得关注？

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

**隐私是加密行业最后的 "PVE"**

Zcash 从 Top 100 进入 Top 10，隐私赛道获得前所未有的关注。这不是零和博弈——你我都拥有隐私，对双方都有利。

</div>

<div class="p-3 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

**机构入场的前提条件**

传统金融机构因为运营安全、监管和法律原因，无法在完全透明的链上开展业务。隐私是金融规模化的先决条件。

</div>

<div class="p-3 rounded bg-orange-50 border-l-3 border-orange-500 text-sm leading-relaxed">

**ZK 技术成熟到可以实战**

零知识证明在过去几年取得质的飞跃，可以在消费者设备上完成证明，链上隐私从理论变为工程现实。

</div>

<div class="p-3 rounded bg-purple-50 border-l-3 border-purple-500 text-sm leading-relaxed">

**两种隐私路线正在分化**

密码学隐私（ZK 保证）与中间人隐私（信任 sequencer 或机构）在争夺话语权。选择哪条路，决定了加密的未来。

</div>

<div class="p-3 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed">

**Tornado Cash 阴影仍在**

43.7% 的区块中继正在自我审查——匿名通信协议成为保护验证者和用户的关键基础设施。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed">

**AI + 形式化验证重塑安全**

AI 让形式化验证从"耗时数月"变为可规模化——Zcash 的 Ironwood 升级已实现"不可检测的伪造漏洞在数学上不可能"。

</div>

</div>

---

# 三位嘉宾，三种视角

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500 text-center">

### Jared Hope
**Logos 创始人**

<div class="text-sm opacity-70 mt-2">
从 90 年代 BBS 和密码朋克运动出发，用**交易成本经济学**框架分析隐私对市场的解锁效应。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500 text-center">

### Mert Mumtaz
**Helios CEO**

<div class="text-sm opacity-70 mt-2">
从 Zcash 的货币使命出发，双重关注：隐私货币作为 Bitcoin 的补完，以及隐私作为机构金融的**规模化技术**。
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500 text-center">

### Joe Andrews
**Aztec Labs CEO**

<div class="text-sm opacity-70 mt-2">
从 2017 年开始尝试在 Ethereum 上做机构级贷款，发现以太坊缺少隐私层，于是花了八年时间从头构建 ZK 基础设施。
</div>

</div>

</div>

---

# 区块链真正在卖什么？

<div class="text-sm opacity-60 mb-4">Jared Hope 的交易成本经济学框架</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### 可信承诺 (Credible Commitments)

区块链的核心产品不是"区块空间"，而是**可信承诺**——一种让承诺无法被撤回的机制。

<div class="mt-3 text-xs opacity-70">
"有权给你的人，也能拿走。"
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed">

### 两种承诺

| 类型 | 特征 | 例子 |
|------|------|------|
| **激励性承诺** | "相信我" | CEX 的"我们不会跑路" |
| **命令性承诺** | 不可撤销 | 链上智能合约执行 |

<div class="mt-2 text-xs opacity-70">
中世纪的"丑公主"人质：国王把长子交给盟友——如果违约，就会发生斩首。这就是命令性承诺。
</div>

</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed mt-4">

**加密行业声誉问题的根源**：太多人在链外做激励性承诺（CEX 跑路、骗局、rug pull），而区块链的真正价值在于它能提供**命令性承诺**——无法被单方面撤销。

</div>

---
layout: two-cols
---

# 一笔交易的七个步骤

<div class="text-sm leading-relaxed">

区块链只处理了其中第四步（结算）和第五到七步的一部分。其余环节的信息暴露在链上，成为**危害行为的敞口**。

- **发现对手方** → 谁在和谁交易？
- **沟通与协商** → 谈判条款是什么？
- **签约** → 合约细节公开？
- **执行/结算** ✅ 区块链擅长
- **监督履约** → 对方是否守约？
- **纠纷解决** → 争议如何处理？
- **后续关系** → 是否有重复交易？

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tx-lifecycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 隐私为什么是"控制杆"

<div class="text-sm leading-relaxed">

外部行为者干预你的交易，由三个因素决定：

<div class="grid grid-cols-3 gap-2 mt-2 text-center text-xs">
<div class="p-2 rounded bg-blue-50 border border-blue-200">

**强制能力**
(coercion)

<div class="opacity-60 mt-1">❌ 难以改变</div>

</div>
<div class="p-2 rounded bg-green-50 border border-green-200">

**逃脱惩罚**
(impunity)

<div class="opacity-60 mt-1">❌ 依赖法律体系</div>

</div>
<div class="p-2 rounded bg-orange-50 border border-orange-200">

**交易信息**
(information)

<div class="font-bold mt-1">✅ 这是可控的！</div>

</div>
</div>

<div class="mt-4 text-sm leading-relaxed">

**核心逻辑**：如果能把信息降到零，外部行为者的干预能力也随之降为零。隐私不是一种奢侈品，而是交易安全的**操作杠杆**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hazard-dimensions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Zcash：Bitcoin 未完成的使命

<div class="text-sm opacity-60 mb-4">Mert Mumtaz：加密行业对 Bitcoin 的普遍误解</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-orange-50 border-l-3 border-orange-500 text-sm leading-relaxed">

### Bitcoin 证明了密码学货币可行

第一步：证明去中心化的数字黄金可以存在。它获得了合法性和市场认可。

</div>

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### Ethereum 证明了可以编程

第二步：Vitalik 说"为什么这个货币不能编程？"于是有了智能合约。

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### Solana 证明了可以规模化

第三步：高性能公链解决了吞吐量瓶颈。

</div>

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed">

### 隐私——最后的前沿

第四步还在空缺。普通人天然以为"密码学货币 = 隐私"，但 Bitcoin 是**可追溯的数字黄金**。Zcash 要填补这个空白。

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed mt-4">

**Mert 转述 Satoshi 在 Bitcoin 论坛上的发言**：如果能用 ZK 实现隐私，"这将是一种更好、更高效的 Bitcoin 实现，但我不知道怎么解决双花问题。"当年 ZK Snark 没有生产级部署——现在，我们有了这项技术。

</div>

---

# Hal Finney 与 Satoshi：Bitcoin 的隐私之梦

<div class="text-sm opacity-60 mb-4">Mert Mumtaz：隐私不是 Bitcoin 的对立面，而是它一直缺少的那一块</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### Hal Finney 生前的呼吁

Bitcoin 最早的贡献者之一 Hal Finney 在生前反复在 Twitter 上讨论为 Bitcoin 添加匿名性。他看到了一个根本矛盾：**密码学货币对外界天然意味着隐私，但 Bitcoin 完全是透明的。**

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### 大众文化的误解

每次在《黑名单》(The Blacklist) 这样的影视作品里看到 Bitcoin 被用来勒索赎金时——这在现实中**完全不合理**，因为 Bitcoin 比现金**更容易追溯**。公众脑中有一个根深蒂固的假设：密码学 = 隐私。而现实恰好相反。

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed mt-4">

**Mert 的总结**："当时 ZK 技术太早期——Zcash 不存在，没有任何 ZK Snark 的生产级部署。但现在我们有了这项技术。在所有自由被侵蚀的时代——年龄验证、AI 对非结构化数据的解读、加密的制度化——隐私货币是**最后的前沿**。"

</div>

---

# Zcash 的两个核心命题

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-t-3 border-blue-500">

### 🪙 货币使命

- 提供 Bitcoin 缺失的**可互换性 (fungibility)**
- 现金没有历史记录——五美元纸币不携带它去过哪里的信息
- 有"硬币历史"的 token 可能在特定场景下被拒绝使用（参考加拿大卡车司机抗议事件）
- 隐私让货币属性更完整

<div class="text-xs opacity-60 mt-3">
Mert: "这不是赢家通吃的游戏。世界上从来没有只有一种储值资产。"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-3 border-green-500">

### 🏦 金融规模化

- 隐私本身就是一种**扩容技术**
- 机构因为 OPSEC、监管和法律原因，**物理上不能**上链
- 没有隐私，机构只能做报纸头条级别的 PoC——无法真正转移业务
- 隐私是实现大规模链上金融的**前提条件**

<div class="text-xs opacity-60 mt-3">
Mert: "Helios 在 Solana 上构建 ZK 隐私协议，就是为了填补这个鸿沟。"
</div>

</div>

</div>

---

# Aztec：八年磨一剑

<div class="text-sm opacity-60 mb-4">Joe Andrews：从机构贷款到通用隐私执行环境</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### 2017-2018：发现需求

Aztec 的初衷是在 Ethereum 上做**银行级贷款**——贷款发起、贷款交易。但很快发现以太坊缺少关键能力。

</div>

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed mt-3">

### 核心矛盾

机构无法转移到完全透明的公链上。它们在 Web2 中至少从中间人那里获得隐私保护。链上没有对等的隐私层，这是**根本性的技术缺口**。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### 转向底层基础设施建设

团队花了多年时间构建 ZK 证明技术底层，最终形成了 **Aztec L2**——在以太坊上的通用隐私执行环境。

</div>

<div class="p-4 rounded bg-purple-50 border-l-3 border-purple-500 text-sm leading-relaxed mt-3">

### 道德义务

"我们不应当让人使用当前的公开区块链——这对大多数普通人来说，比他们在日常生活中使用的钱更糟糕。我们至少有义务提供和银行账户同等水平的隐私。"

</div>

</div>

</div>

---

# 隐私不是秘密，是选择权

<div class="text-sm opacity-60 mb-4">Eric Hughes《密码朋克宣言》第一条</div>

<div class="p-6 text-xl italic border-l-3 border-blue-500 bg-blue-50 mt-4">

"隐私不是秘密。隐私是**选择性披露自己的能力**。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed">

### 现实世界的默认设置

你的思想默认是私密的——你可以选择通过书、社交媒体、演讲来公开它们。你的照片、你的文件……你在大多数事情上都有选择权。

</div>

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed">

### 加密世界的现状

在 Bitcoin 上，你**物理上没有这个选择**。每笔交易对所有人可见——技术上没有提供"隐私选项"这个按钮。这就像一座桥没有结构完整性——你平时不会注意到，直到它不在了。

</div>

</div>

<div class="mt-4 text-sm opacity-70">
Mert: "不是赢家通吃。总会有人喜欢 Bitcoin 的理念，但他们需要额外的隐私属性。Zcash 为这些人存在。"
</div>

---
layout: two-cols
---

# 两条路径：密码学 vs 中间人

<div class="text-sm leading-relaxed">

Joe 在讨论开始时明确划分了两个阵营：

**❌ 中间人隐私**
- 许可制区块链 / 非全部节点
- 通过"缺乏全局共识"来获得隐私
- 本质上是 Web2 模式的复制
- 没有打破壁垒，也没有兑现技术的承诺

**✅ 密码学隐私**
- ZK 证明保证
- 无需信任任何人
- 本地设备执行程序
- 链上只记录加密状态

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./privacy-camps.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 谁需要隐私？所有人。

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### Jared：隐私是财产权

隐私是**解锁新市场活动**所需的财产。它能减少交易各环节的危害，从而让机构和个人敢于上链交易。区块链取证已成为数十亿美元的产业——正是这些"看得见的信息"阻止了大量市场活动。

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### Mert：它是"所有人"的答案

就像桥的结构完整性——你平时不会注意到隐私的存在，但一旦缺失，你立刻感受到它的必要性。从受专制政权压迫的人，到需要保护商业机密的机构，无一例外。

</div>

<div class="p-4 rounded bg-orange-50 border-l-3 border-orange-500 text-sm leading-relaxed">

### Joe：道德义务

"如果看一下当前的公开区块链，我们有道德义务不让人使用它们——这对普通人来说是比他们日常使用的银行账户更糟糕的货币形式。"ZK 可以让隐私做得比银行更好。

</div>

<div class="p-4 rounded bg-purple-50 border-l-3 border-purple-500 text-sm leading-relaxed">

### 密码朋克的格言

"**弱者的隐私，强者的透明**。"——公共机构应当公开透明，而普通人应当拥有选择性披露的权利。KYC/AML 的合规成本最终由普通人承担，而真正规避监管的是政治和金融精英。

</div>

</div>

---

# 隐私是一种扩容技术

<div class="text-sm opacity-60 mb-4">Mert Mumtaz：没有隐私，大规模金融活动"物理上不能"发生在链上</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### 机构的硬约束

虽然普通用户可能因为缺乏教育或不在意而不使用隐私——但**正在上链的机构绝对在乎**：

- **运营安全 (OPSEC)**：交易策略和头寸信息不能公开
- **监管要求**：客户数据的保密义务
- **法律合规**：商业机密保护

他们在公开链上只能做报纸头条级别的 PoC，**无法真正转移业务**。

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### 为什么隐私 = 扩容

隐私不是链上交易的"附加功能"——它是**解锁新市场活动的前提条件**：

- 没有隐私 → 大量交易方根本不会上链 → 链上经济活动被压制
- 有隐私 → 机构和个人敢于上链 → 交易量、TVL、生态价值随之增长

**隐私不是在限制市场——它是在扩大市场。**

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed mt-4">

**Jared 的量化视角**："区块链取证已经成为一个数十亿美元的产业。这些人在看链上信息——正是这些信息阻止了大量市场活动在链上发生。如果你能保护交易各个环节的隐私并提供完整性保障，你就能解锁全新的市场行为。"

</div>

---

# Zcash：数字黄金的新候选

<div class="text-sm opacity-60 mb-4">三位嘉宾的评价：Joe "支持数字黄金论"，Jared "用于短交易"，Mert "对我来说它比 Bitcoin 更好地解决了我的需求"</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-t-3 border-blue-500 text-sm text-center">

### 🏆 可互换性

Bitcoin 的 UTXO 可被追溯和标记——有"污点历史"的币可能被拒绝。Zcash 的隐私层确保每一枚 ZEC **完全可互换**，就像现金一样。

<div class="text-xs opacity-60 mt-2">参考：加拿大卡车司机抗议中 Bitcoin 地址被标记事件</div>

</div>

<div class="p-3 rounded bg-green-50 border-t-3 border-green-500 text-sm text-center">

### 🛡️ 量子可恢复

Ironwood 升级已实现量子可恢复，2026 年秋季将具备量子证明能力。**低熵通道**是储值资产的基本要求——你不希望你的储值方式充满"意外"。

<div class="text-xs opacity-60 mt-2">Bitcoin 的量子就绪问题仍在讨论中</div>

</div>

<div class="p-3 rounded bg-orange-50 border-t-3 border-orange-500 text-sm text-center">

### ⚡ 性能飞跃

从 75 秒区块时间到 **2 秒**，TPS 目标达到**数千**。作为支付工具可能面临最后公里的用户体验摩擦，但作为储值资产，这些升级非常有竞争力。

<div class="text-xs opacity-60 mt-2">Joe: 支付工具的估值指标与储值资产不同</div>

</div>

</div>

---
layout: two-cols
---

# Zcash Shielded Pools 的进化

<div class="text-sm leading-relaxed">

Zcash 的隐私池历经几代演化：

- **Sprout (2016)**：首个 ZK 隐私池
- **Sapling (2018)**：性能提升
- **Orchard (2022)**：⚠ 存在未被发现的伪造漏洞长达 4 年
- **Ironwood (2026)** ✨：形式化验证 + 量子可恢复 + 供给可审计

**迁移机制**：Orchard 中的资金正在迁移到 Ironwood。Turnstile（闸门）确保流出不大于流入。如果伪造发生过，剩余池将出现偿付能力缺口。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./zcash-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Orchard 漏洞：一个让你重新思考安全的故事

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed">

### 发生了什么？

Orchard 隐私池中存在一个**伪造漏洞**：攻击者可以在 Orchard 池内（占 Zcash 总供给约 28%）无限制造假币。这个漏洞存在了四年，没有被检测到。

**好消息**：所有迹象（池内活动增长、价格走势、修复公告时间窗口）表明没有实际攻击发生。

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### 这意味着什么？

Ironwood 池已通过**三次独立形式化验证**和多种审计方式确认。Sean Bowe（Zcash 核心开发者）发布了数学证明：

**"不可检测的伪造漏洞在 Ironwood 中在数学上不可能存在。"**

当然，其他类型的 bug 仍然可能存在（任何软件系统都有），但这一类特定的漏洞已被彻底消除。

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed mt-4">

**Jared 的评价**："大多数密码学家会建议新密码学在使用五到十年后再信任。那些敢于实现并推向市场的人，值得获得赞誉。这些系统运行在对抗性环境中，本质上是反脆弱的——它们会在被攻击后变得更强。"

</div>

---

# AI + 形式化验证：安全范式的拐点

<div class="text-sm opacity-60 mb-4">Mert 和 Joe 都对这个趋势高度兴奋</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### 问题的本质

传统软件（如 Facebook）出 bug 了可以立即打补丁。但加密系统管理着数十亿美元的资产——**更像心脏起搏器或太空飞船**：

- 出问题无法简单回滚
- 爆炸就意味数十亿美元损失
- 过去，形式化验证需要数月甚至数年的专业工作

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### AI 如何改变游戏

AI 让形式化验证变得**可规模化**：

1. 自动将规格翻译成代码
2. 数学验证代码确实做了规格里承诺的事
3. ZK 电路可以变得更简单、更易验证

**结果**：隐私系统的安全风险将下降数量级——人们第一次可以放心地把钱"加密"起来。

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-3 border-purple-500 text-sm leading-relaxed mt-4">

**Joe**："即使今天发现了 bug，在这个过程之后系统反而变得更加安全——它被加固到了一个几年前只能梦想的程度。Web2 还没有经历过 AI 驱动的系统性攻击，但加密轨道已经因为是最先受到攻击的靶子而获得强化。"

</div>

---

# Ethereum 隐私路线图：宏大但遥远

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### 路线图的目标

Ethereum 的隐私路线图覆盖了从 R&D 到 UX/UI 的完整范围。核心愿景：在协议层为开发者提供隐私构建块——新的状态类型、证明系统、共享标准库——让构建隐私应用变得像构建普通 dApp 一样简单。

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### 对生态系统的意义

**Joe**: 路线图让 Aztec 的工作变得更容易——Ethereum 协议层的改进是对隐私应用开发者的基础设施赋能。不是竞争关系，而是生态系统级的基础设施建设。

**Jared**: "他们一直让我感到惊讶——Ethereum 2 的迁移是一个巨大的证明，如果哪一个社区能做到，那就是这个社区。"

</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed mt-4">

**Joe 的担忧**：路线图距离落地还有相当长的时间。隐私之战正在**今天**打响。如果等到路线图完全实现，可能唯一被法律允许的隐私形式就是"通过中间人的隐私"（参考 Tornado Cash 案件的判决影响）。我们需要**今天就拥抱**已有的隐私方案，而不是等待"山巅之城"。

</div>

---

# Tornado Cash 的阴影与匿名通信

<div class="text-sm opacity-60 mb-4">Jared Hope：隐私不仅仅是链上数据加密，还包括谁在参与网络</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-3 border-red-500 text-sm leading-relaxed">

### 现状令人担忧

- `mevwatch.info` 显示：**43.7%** 的区块中继正在自我审查
- 如果区块链无法维护其完整性，它就会失去所有价值
- 需要保护的不只是用户——**验证者和矿工**同样需要保护

</div>

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### 为什么 Tor 或简单混网不够？

验证者参与共识时，在网络层产生的是**确定性流量墙**——有规律的心跳，每次出块都同时通信。这在 Loopix 风格混网中会破坏延迟（无法满足 30 秒出块），在洋葱路由中很容易被识别。

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed mt-4">

**Logos 的方案**：一种混网与洪泛路由的**混合协议**。在活跃对手威胁模型下，追溯区块提议者的成本提升至约 **7 年**——足够你将资产转移到另一个账户。"这让系统能够保持自主性——这是我最兴奋的事情。"

</div>

---

# Canton：银行级隐私，但不是密码学隐私

<div class="text-sm opacity-60 mb-4">三位嘉宾在这个问题上高度一致</div>

<div class="p-6 rounded bg-red-50 border-l-3 border-red-500 text-lg leading-relaxed mt-4">

"我不认为 Canton 是隐私领域的领导者——就像我不认为 JP Morgan 是隐私领域的领导者一样。它提供的隐私保障不过是**信任你的交易对手**。这完全不需要用到任何加密技术就能实现。如果我只想要银行级别的保障，我直接用银行不就好了吗？"

<div class="text-xs opacity-60 mt-2 not-italic">—— Mert Mumtaz</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm leading-relaxed">

**Joe 的补充**：Canton 通过 sequencer（排序器）实现隐私——你把所有交易发给一个 sequencer，然后**非密码学地承诺**他不会变现或出售你的数据。这本质上是中间人隐私。

</div>

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

**Jared 的展望**：也许 Canton 可以作为早期市场接纳的桥梁——先让机构上链，然后希望他们认识到这种方式的**风险**，最终迁移到具有真正密码学承诺的系统上。但这取决于他们是否能及早意识到问题。

</div>

</div>

---
layout: two-cols
---

# 链上隐私的未来图景

<div class="text-sm leading-relaxed">

三条轨迹构成一个完整的技术栈：

<br>

**🟧 货币层 · Zcash**

让加密货币真正可互换——去历史记录、抗量子、数字黄金。Ironwood 升级意味着从"信任"到"验证"的跨越。

**🟩 应用层 · Aztec / Helios**

通用隐私执行环境——不只是货币，而是可编程的隐私。私人稳定币、机构借贷、链上身份。

**🟦 网络层 · Logos**

"谁在参与这个网络"的隐私——共识通信协议中的匿名性。不只是交易内容私密，连参与者都受保护。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./privacy-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 隐私赛道的关键张力

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-3 border-blue-500 text-sm leading-relaxed">

### ⚡ 速度 vs 完整性

Ethereum 隐私路线图是"完美方案"但要等多年。Aztec v5 已经上线，Ironwood 已经激活——**市场正在今天做出选择**。

问题：等到完美方案出来时，法规会不会已经把"密码学隐私"的窗口关上了？

</div>

<div class="p-4 rounded bg-green-50 border-l-3 border-green-500 text-sm leading-relaxed">

### 🔐 密码学 vs 制度化

Canton 和类似方案正在争夺"机构隐私"的定义。如果市场接受了"信任 sequencer"就足够，那密码学隐私的市场空间就会被挤压。

这不是技术之争，而是**范式之争**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-3 border-orange-500 text-sm leading-relaxed">

### 🤖 AI 的双面性

AI 既是安全工具（形式化验证规模化），也是攻击武器（让曾经的"安全"系统暴露漏洞）。加密轨道因为是"最容易攻击的靶子"而最先被加固。

</div>

<div class="p-4 rounded bg-purple-50 border-l-3 border-purple-500 text-sm leading-relaxed">

### 🏛️ 监管的阴影

Tornado Cash 的判决和 43.7% 的区块中继自我审查提醒我们：技术可以做任何事，但**法律决定了什么能存活**。匿名通信协议正在成为隐私基础设施的关键一层。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-3 border-blue-500 rounded text-sm italic">
"隐私不是秘密。隐私是选择性披露自己的能力。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Eric Hughes《密码朋克宣言》，Mert 引用</div>
</div>

<div class="p-3 bg-green-50 border-l-3 border-green-500 rounded text-sm italic">
"弱者的隐私，强者的透明。公共机构应当公开，而普通人应当拥有选择性披露的权利。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 密码朋克格言，Jared 引用</div>
</div>

<div class="p-3 bg-orange-50 border-l-3 border-orange-500 rounded text-sm italic">
"如果有人能用 ZK 实现隐私，这将是一种更好、更高效的 Bitcoin 实现。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Satoshi Nakamoto，Bitcoin 早期论坛，Mert 转述</div>
</div>

<div class="p-3 bg-purple-50 border-l-3 border-purple-500 rounded text-sm italic">
"如果我只想要银行级别的保障，我直接用银行不就好了吗？"
<div class="text-xs opacity-60 mt-1 not-italic">—— Mert Mumtaz，评价 Canton 链的隐私模式</div>
</div>

<div class="p-3 bg-red-50 border-l-3 border-red-500 rounded text-sm italic">
"我们不应当让人使用当前的公开区块链——这对大多数普通人来说，是比他们的银行账户更糟糕的货币形式。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Joe Andrews</div>
</div>

<div class="p-3 bg-yellow-50 border-l-3 border-yellow-500 rounded text-sm italic">
"加密系统本质上是反脆弱的——它们在被攻击后变得更强。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Jared Hope，评价 Orchard 漏洞事件</div>
</div>

</div>

---
layout: end
---

# 隐私是加密行业最后的 PVE

<div class="text-center opacity-70 mt-8 text-lg">

当所有人都拥有隐私时，没有人需要互相伤害。

这不是零和博弈——这是整个行业的**共识基础设施升级**。

</div>

<div class="text-center opacity-50 mt-12 text-sm">
Unchained · Laura Shin 主持<br/>
Joe Andrews · Jared Hope · Mert Mumtaz
</div>
