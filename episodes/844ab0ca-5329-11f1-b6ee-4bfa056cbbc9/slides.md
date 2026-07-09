---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'In an AI Agent World, Do Money Markets Win Over Stablecoins? - Bits + Bips'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# In an AI Agent World, Do Money Markets Win Over Stablecoins?

<div class="mt-6 text-lg opacity-70">
Bits + Bips · 2026 年 5 月
</div>

<div class="mt-6 text-sm opacity-50">
Austin Campbell · Ram Ahluwalia · Chris Perkins · Gordon Liao (Circle)
</div>

<div class="mt-12 text-xs opacity-40">
按空格键翻页 · 所有内容一次性展示
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Hyperliquid × Circle × Coinbase 三方交易**
USDH 退场，USDC 成为 Hyperliquid 生态的支柱资产，5 亿 USDC 的净利息收入重新分配。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**OpenAI 诉 Musk 案**
陪审团一致否决 Musk 全部索赔，但判决基于诉讼时效而非实体问题。这对加密行业中的基金会结构有何启示？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**AI 价值捕获：模型层 vs 分发层**
LLM 层烧掉数百亿美元，但价值是否最终流向分发平台？Apple 的沉默布局值得关注。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Agent 经济：稳定币 vs 货币市场基金**
当 AI Agent 自主优化资金配置时，它们会选无息的支付工具，还是有收益的生息资产？

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**《数字资产市场清晰法案》推进**
参议院银行委员会 15:9 通过，稳定币收益"活动型 vs 被动型"折中方案落地。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**债券卫士出手：30 年美债触及 5%**
Warsh 确认后数小时，长端利率飙升。期限溢价驱动，而非短期利率预期。

</div>

</div>

---

# Hyperliquid 交易：发生了什么

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**交易结构**

- **USDH 退场**：持有者按 1:1 兑换为 USDC
- **Coinbase** 成为资金管理人（treasury deployer）
- **Circle** 成为技术部署方，质押 50 万 HYPE 推进验证节点
- **90% 储备收益** 回流 Hyperliquid，通过援助基金支持 HYPE 回购
- **Bitwise 同步提交** 现货 HYPE ETF 申请

</div>

<div>

**规模测算**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

<div class="text-2xl font-bold text-blue-700">~50 亿 USDC</div>
<div class="text-xs opacity-70 mt-1">Hyperliquid 平台 USDC 余额</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">

<div class="text-2xl font-bold text-green-700">~$2 亿/年</div>
<div class="text-xs opacity-70 mt-1">按略低于 4% 收益率估算的净利息收入</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">

<div class="text-2xl font-bold text-yellow-700">翻倍增长</div>
<div class="text-xs opacity-70 mt-1">USDC 余额同比增长（Circle 数据）</div>

</div>

</div>

</div>

---

# 净利息收入：交易所的隐藏引擎

---
layout: two-cols
---

# 净利息收入：交易所的隐藏引擎

<div class="text-sm leading-relaxed">

Chris Perkins 指出，传统交易所的商业模式有三个支柱：

- **手续费**：每笔交易抽成
- **数据销售**：有时能变现
- **净利息收入（NII）**：用户存入的抵押品被拿去投资，收益的大头归交易所

在传统金融中，清算所接收抵押品 → 投资 → 保留大部分 → 返还小部分给用户。这就是"净息差"（NIM）的本质。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Chris Perkins**："这是一个你接下来会看到很多案例的趋势。任何一个锁定 TVL 的应用——交易所、预测市场——都会想办法把浮存金变现。为什么要送给第三方？"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nii-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# USDC：流动性超新星

<div class="text-sm leading-relaxed">

Gordon Liao 用"流动性超新星事件"来形容 USDC 在 Hyperliquid 的地位——作为链上最大的永续合约 DEX 的抵押资产，USDC 的流动性会辐射到整个链上经济。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**机构级抵押品**
USDC 的 1:1 全额储备承诺使其成为机构认可的"高质量抵押资产"——平台越成熟，越需要这种资产来对接传统机构。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**21 万亿美元结算量**
Circle 2026 年 Q1 财报显示，USDC 单季度链上结算额达 21 万亿美元——这是基础设施扩张和流动性改善的直接证据。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**多重身份**
稳定币到底是交易媒介还是价值储存？Gordon 认为它可以同时扮演多种角色：支付场景中是交易媒介，资本流动场景中是抵押品移动工具。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Gordon Liao**："USDC 已经在 Hyperliquid 上部署了，配合 CCTP（跨链传输协议），它已经在那里一段时间了。这次是对其价值的再次确认。"

</div>

---

# 三方共赢的博弈

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🏦 Hyperliquid

<div class="text-xs space-y-2 mt-2">

- **最大赢家**：90% 储备收益回流
- 净利息收入闭环完成
- 更深订单簿、更低滑点
- HYPE 与使用费、质押、开发者活动和稳定币流动性挂钩
- Bitwise 现货 ETF 同步推进

</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🔵 Circle / Coinbase

<div class="text-xs space-y-2 mt-2">

- 成功**化解了一个新兴竞争对手**
- USDC 获得更大分布和网络效应
- Coinbase 作为抵押品管理人嵌入关键基础设施节点
- USDC 的 fungibility（可互换性）进一步增强
- 持续的 USDC 流通量增长

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### ⚡ 生态系统

<div class="text-xs space-y-2 mt-2">

- USDC 流动性辐射至其他 DEX、CEX 和链上平台
- 验证了"活动型中介"（activity-based intermediation）模式
- Ram："分销最终将驱动系统内的大部分收益"
- 加密原生基础设施与 TradFi 融合的里程碑

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Ram Ahluwalia**："对于 Coinbase 和 Circle 来说，他们成功化解了一个新兴竞争者。这是非常具有战略意义的举措。Hyperliquid 是新兴的去中心化交易场所，Coinbase 超前一步布局，非常具有先见之明。"

</div>

---

# OpenAI vs Musk：法律胜利，但未触及实质

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**判决要点**

- 奥克兰联邦陪审团**一致否决** Musk 全部索赔
- 讨论耗时不到两小时
- 判决基于**三年诉讼时效**：法官认定 Musk 在 2021 年已知悉 OpenAI 的营利转型，2024 年 2 月才起诉
- **实体问题未裁决**：慈善信托违约、不当得利等均未进入实质审理
- Musk 索赔 1340 亿美元"不当收益"，并寻求罢免 Altman 和 Brockman
- Musk 团队已宣布上诉

</div>

<div>

**对加密行业的影响**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2 text-xs">

Chris Perkins 指出：过去四年监管高压下，许多加密协议设立了基金会 + Labs 的双重结构。基金会是非营利组织，Labs 是商业实体——两者职能模糊，外界困惑。这个案例可能对加密行业的组织结构产生深远影响。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-xs">

**Wired 的评论**：结案陈词让双方看起来都很糟糕——Musk 和 Altman 都被对方描绘成自私自利。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-xs">

**短期利好**：OpenAI IPO 道路暂时清障，至少在中短期内。

</div>

</div>

</div>

---

# 英雄、反派，还是"无事发生"？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Ram 的视角：英雄与反派**

Ram 明确站队：
- **Elon Musk = 英雄**：推动竞争、控制能源层、在空间领域有"不公平优势"
- **Sam Altman = 反派**：有违反合同法的交易记录、曾被自己任命的董事会解雇、意外催生了主要竞争对手

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**Ram Ahluwalia**："Sam Altman 是我眼中的反派。他有过违反合同法的交易记录。他甚至在与微软签约后又与 Amazon 签约，迫使微软重新谈判并获取了极为有利的条款。"

</div>

</div>

<div>

**长期视角：这件事重要吗？**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-xs">

Austin Campbell 提出了一个压力测试问题：如果"分发层捕获价值"的理论是正确的，那么 OpenAI 或 Anthropic 的估值是否只是在模型层的一场大戏，最终价值会流向分发平台？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-xs">

Gordon Liao："AI 领域在每个层面都高度竞争——基础模型层、应用层。法庭上的争斗只是一个侧面。真正的机会在于为 Agent 和 AI 搭建经济轨道，这正是 Circle 在做的事。"

</div>

<div class="mt-2 text-xs opacity-60">

**Ram**："Marcus 本来就没指望能有什么结果。所以实际上什么也没发生——这是个 nothing burger。"（但 Ram 也承认，这不会改变他对 Altman 的评价。）

</div>

</div>

</div>

---

# AI 价值捕获：模型层还是分发层？

---
layout: two-cols
---

# AI 价值捕获：模型层还是分发层？

<div class="text-sm leading-relaxed">

**Ram 的判断**：LLM 层的价值捕获极其有限。

- AI 实验室正在烧数百亿美元，本质上是在做"公益"——训练越来越强的模型，但模型权重（IP）最终可能落入竞争对手手中
- 微软在 6 年后变现股票后，拥有全部 IP 使用权
- Meta 的开放模型正在变得相当有竞争力

**真正捕获价值的是**：
- 拥有最终客户关系的应用层
- 云服务商和 AI 赋能服务商（如 Accenture）
- 实际的企业采纳正在加速：Dell 报告称签下了一千家新企业客户

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-value-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 杠铃策略：分发与能源

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**前端：分发**

- Apple 是最大的"沉睡巨人"：垂直整合的硬件公司，可以成为所有模型的**分发端点**并收取过路费
- Apple 在身份和隐私方面的积累是差异化优势
- 类比 App Store 模式：自己不建模型，搭建分发平台并抽成

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**Austin Campbell**："Apple 的叙事很有趣——当 Mag 7 其他家都在烧 CapEx 建模型时，Apple 的策略是：我们是垂直整合硬件公司，我们会是分发端点，我们会抽成。看他们在 App Store 上做过的事就知道了。"

</div>

</div>

<div>

**后端：能源**

- Chris Perkins 提出杠铃的另一端是**能源**
- "谁能获得无限的廉价能源和算力，谁就赢了"
- Elon Musk 在空间能源方面有"不公平优势"——在太空中几乎免费获取能源的物理和工程能力

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Chris Perkins**："我认为 Elon 的不公平优势在栈的最底层——能源。在太空获取几乎免费的能源，科学上不容易，但如果有人能做到，就是那个在把东西送上太空方面拥有全球最强大能力的家伙。"

</div>

<div class="mt-2 text-xs opacity-60">

Ram 补充："AI 实验室们继续筹钱吧，继续投资人类未来吧。但这类商业模式本身缺乏价值捕获。"

</div>

</div>

</div>

---

# Agent 经济：Circle 的 ARC 愿景

<div class="text-sm leading-relaxed">

Gordon Liao 阐述了 Circle 在 Agent 经济中的布局——搭建 AI Agent 之间的经济轨道。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Agentic Stack + ARC（经济操作系统）**
为 AI Agent 设计的底层经济基础设施——让 Agent 能在没有人类介入的情况下互相发现、选择最优工具、完成支付和结算。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Nano Payments 协议**
已发布的微支付协议——支持极小额、高频的机器间支付，这是 Agent 经济的基础支付单元。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Agentic Marketplace**
Agent 可自主浏览和发现其他 Agent 的市场——嵌入在网络效应中，类似 USDC 自身的网络效应逻辑。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Gordon Liao**："我们认为，机器对机器或机器发起支付将主导未来交易。这些都将建立在区块链轨道之上。ARC 和我们的 Agentic Stack 将具备持久的网络效应和价值——就像 USDC 已经展现出的强大网络效应一样。"

</div>

---

# Agent 支付：链上轨道还是传统轨道？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Gordon 的观点：区块链轨道**

- 目前大多数交易是人类发起和中介的
- 机器对机器支付将主导未来
- 开源模型正在追赶闭源模型，模型层差异化缩小
- 价值将积累在**商品和硬件**以及**Agent 商业轨道**上
- 区块链是 Agent 商业的天然基础设施：无需信任、可编程、24/7 运行

</div>

<div>

**Austin 的反驳：跨系统流动者胜出**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2 text-xs">

"Agent 拿一张信用卡并不难。我认为真正的赢家是能在系统之间自由流动的那一方——有时用区块链支付，有时用银行卡，有时用银行账户。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-xs">

Agent 不像人类消费者有品牌忠诚——它们**过度优化**，会在不同支付轨道间选择最优路径。单纯的"链上原生"或"纯链下"都可能输给能**跨系统整合**的平台。

</div>

<div class="mt-2 text-xs opacity-60">

这与 Coinbase-Circle 生态的战略定位一致：同时覆盖法币入口、稳定币支付和链上 DeFi，成为"跨系统流动者"。

</div>

</div>

</div>

---

# 货币市场 vs 稳定币：Agent 会怎么选？

---
layout: two-cols
---

# 货币市场 vs 稳定币：Agent 会怎么选？

<div class="text-sm leading-relaxed">

**Chris Perkins 的核心问题**：

如果 AI Agent 极度善于优化，它们会选择：
- **货币市场基金**：有利息收入
- **稳定币**：便捷支付，但通常无息

两者的底层风险相同（都持有短期国债），为什么 Agent 要把收益让给稳定币发行方？

**Austin 的回答**：这是美国监管体系人为制造的碎片化。Agent 真正需要的是：
- 资金闲置时 → 货币市场基金（有收益）
- 需要支付时 → 稳定币（支付便捷）

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-money-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Circle 的整合方案：USDC + USYC

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**一个平台，两种工具**

Gordon 指出 Circle 已经拥有：
- **USDC**：最大的受监管稳定币——支付工具
- **USYC**：最大的代币化货币市场基金——生息工具

两者之间可以**无缝切换**：用户持有 USDC 进行支付，需要收益时转换为 USYC；需要支付时再转回 USDC。

</div>

<div>

**为什么两者必须共存？**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

Gordon 用类比解释：全球仍有 3 万亿美元实物现金流通。无息活期存款和储蓄账户并存。即便同一机构同时提供两者，市场自然会形成分化——因为支付便利性和收益最大化是两种不同的需求。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-xs">

**未来图景**：Agent 可能使这种切换更加自动化和高效——但工具的分化不会消失。既不是"稳定币取代货币市场基金"，也不是反过来。两者将共存，由 Agent 自动优化。

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Chris Perkins**："我同意——你会看到可互操作的能力。当足够多的人拥有货币市场基金账户，支付和兑换能力会增强。Agent 会非常擅长这件事。"

</div>

---

# 《数字资产市场清晰法案》：委员会通过

<div class="text-sm leading-relaxed">

参议院银行委员会以 **15:9** 的两党投票将法案推进至全院表决。需要在参议院全院获得 **60 票**才能继续推进。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核心机制**
- 去中心化测试标准
- SEC 与 CFTC 的职责划分
- 代币和实体类型的分类标准
- 各方公认法案不完美但"足够好"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**关键人物**
- 参议员 Tim Scott、Lummis（共和党领导层）
- 参议员 Gallego（民主党，前海军陆战队，关键跨党派支持）
- 参议员 Gillibrand：支持加密但从一开始就反对 SBF——可能是达成交易的关键

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**剩余障碍**
- **伦理条款**：民主党是否会投票支持不强制 Trump 家族剥离 World Liberty 和 Meme Coin 的法案？
- 银行游说团体仍在反对稳定币收益条款
- 全院 floor amendments 的不可预测性

</div>

</div>

---

# 收益折中方案：活动型 vs 被动型

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Tillis-Brooks 折中方案**

- **禁止**"严格被动型收益"（即持有稳定币本身不产生利息）
- **允许**"活动型奖励"（通过参与活动获得回报）
- 参议员明确表态"不接受重新谈判"
- ABA（美国银行家协会）不满，但其他多方基本接受

</div>

<div>

**Gordon 的经济学解读**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

这个折中方案具有"学术气质"——它从经济学角度分离了货币的多重功能：
- **价值储存**功能 → 活动型奖励覆盖
- **结算工具**功能 → 稳定币本身不付息

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2 text-xs">

更深层的意义：它区分了两种中介范式——
- **传统模式**：资产负债表驱动（银行越大越好）
- **新模式**：活动驱动（智能合约、Agent 中介，不依赖资产负债表规模）

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Gordon Liao**："这个折中方案在'旧世界'的资产负债表式中介和'新世界'的智能合约、Agent 中介之间画出了一条清晰的线。对专注于活动型服务和新型中介的人来说，这是巨大的机会。"

</div>

---

# 后 Chevron 世界的立法难题

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Chevron 尊让原则已废止**

过去：法律有模糊之处 → 监管机构解释 → 法院尊重监管机构判断

现在：立法必须**更精确、更具规定性** → 法案质量下降 → 更多争议进入法院

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**Chris Perkins**："我们生活在后 Chevron 世界。过去是'平局归监管者'，让监管者来填补空白。现在立法必须更刚性、更具规定性，这让立法本身变差了。然后所有问题都进法院。"

</div>

</div>

<div>

**稳定币收益的"戈尔迪之结"**

Austin 指出：要禁止货币市场基金支付收益，就得重写《1940 年投资公司法》——因为 MMF **被法律要求**向持有人分配收益。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

只要代币化证券（货币市场基金）和稳定币在监管上分属不同框架，且稳定币储备看起来就像货币市场基金——这个裂缝就永远无法真正合拢。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**Austin Campbell**："我不认为国会有胃口重写《银行法》和《1940 年投资公司法》。他们连 Warsh 的确认都险些没通过。银行游说团体的这场斗争本质上是堂吉诃德式的——你在把巨大的胜利送给资产管理公司，同时互相捅刀子。"

</div>

</div>

</div>

---

# 清晰法案的政治算术

<div class="text-sm leading-relaxed">

Chris Perkins 用攀登珠峰的比喻形容当前阶段：**"我们正在接近希拉里台阶（Hillary Step）"**——最危险、最关键的一段。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**看多信号**

- Tim Scott / Lummis 的共和党领导层投入
- Gallego 的两党背书
- Trump 曾在推特上明确支持
- 中期选举临近：不通过的政治代价 > 通过的政治代价
- 从委员会推进到全院表决是实质性进展

</div>

<div>

**看空信号（Austin 的怀疑）**

- **伦理条款**是潜在"撞礁点"
  - 民主党：不强制 Trump 家族剥离加密资产的法案不值得支持
  - 共和党：不会把要求总统家族剥离资产的方案送到总统桌上
- 纯党派投票通过 → 未来被推翻（类比 ACA）
- 银行游说团体今天在打"国家安全"牌

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Chris Perkins**："我仍然认为法案会勉强通过。从现在到最终投票会非常诡异。但 Epic Fury 开始时子弹横飞，Trump 发推支持清晰法案——他表态了。而且中期选举临近，不让它通过的下行风险更大。"

</div>

---

# 债券卫士出手：Warsh 确认，长端飙升

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**市场数据**

- Warsh 确认票数：**54:45**，现代史上最接近的美联储主席投票
- 唯一跨党派投票的民主党人：参议员 **Fetterman**
- 首次 FOMC 会议：6 月中旬
- 确认后数小时：250 亿美元 30 年期国债拍卖收益率**突破 5%**
- 30 年期收益率高点：**5.12%**——自 2008 年金融危机前首次触及 5% 关口
- 10 年期：**4.59%**，2 年期：**4.08%**
- CME FedWatch：年内**加息概率 50%**（完全反转了此前的降息叙事）

</div>

<div>

**市场评论**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**Ed Yardeni**（"债券卫士"一词的创造者）："债券卫士现在在制定政策。美联储可能被迫在 7 月加息以安抚长端。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-xs">

**Vincent Oh**（Wisdom Fixed Income）："Warsh 想要的选项是首日降息。债券市场把这个选项从桌上拿掉了。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-xs">

**Morgan Stanley**：降息不在桌面上，直到 2027 年。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2 text-xs">

**Ryan Swift**（BCA）："如果 Warsh 在这场血洗中偏鸽派，通胀预期将爆发，美联储会失去对长端的控制。"

</div>

</div>

</div>

---

# 期限溢价：是什么真正在驱动利率？

---
layout: two-cols
---

# 期限溢价：是什么真正在驱动利率？

<div class="text-sm leading-relaxed">

**Gordon 的框架**：前美联储经济学家的视角。

将利率变动分解为两部分：
- **预期短期利率**：市场对美联储未来加息/降息的预期
- **期限溢价**：投资者持有长期债券要求的额外补偿

**当前核心发现**：30 年期收益率上涨的**大部分由期限溢价驱动**（目前约 80 个基点，而几年前为负）。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**期限溢价在说什么？**
- 持续的财政扩张担忧
- 长期通胀控制可信度下降
- 外国需求减弱（国际收支变化）
- 与预期利率无关——纯粹是**供需定价**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./term-premium.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 稳定币：美国国债的边际买家

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Gordon 的独特洞见**

美国财政部曾提到"稳定币是国债的边际买家"——这个叙事比人们意识到的更有分量。

**关键不在于总量，而在于期限结构**：

- 稳定币持有的资产主要是**极短期 T-bill 和逆回购**
- 这释放了财政部在**短期端**的发行空间
- 如果按久期加权（duration weighting）计算，这等于**显著减少市场上长端美元久期的供给**
- 从而可能缓和当前的长端利率上行压力

</div>

<div>

**更深层的买家结构变化**

Austin 补充：买家的期限偏好正在结构性转变：

| 买家类型 | 偏好期限 | 当前趋势 |
|----------|----------|----------|
| 稳定币 | T-bill（短期） | ↑ 增长中 |
| 保险机构 | 30 年期 | ↓ 人口结构变化 |
| 主权基金 | 长期 | ↓ 地缘政治去耦合 |

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

婴儿潮一代老龄化 → 保险公司负债结构改变 → 30 年期需求下降。而千禧一代是下一个最大群体——曲线形态会随人口结构演变。

</div>

</div>

</div>

---

# 长期通缩力量：AI 与廉价能源

<div class="text-sm leading-relaxed">

Chris Perkins 提供了看涨长期债券的叙事：几股强大的通缩力量正在积累。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**AI 带来的通缩**
AI 提升全要素生产率——从客户服务到软件开发，成本结构被根本性重塑。Dell 已签下一千家新企业 AI 客户，商业采纳正在加速。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**廉价能源的投资浪潮**
全球在清洁/廉价能源上的投资规模巨大。Musk 在太空能源的布局——如果成功——将使算力成本降到一个全新的量级。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Warsh 对 AI 的通缩观点**
Warsh 本人曾在多个场合谈到 AI 的通缩效应。新任美联储主席对此有清晰认知——这不是巧合。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Chris Perkins**："长远来看，AI 和能源价格将带来非常强的通缩压力。Elon 会在太空获取能源——你会看到前所未见的算力。Warsh 也在谈论 AI 的通缩效应。短期是问题，但长期非常不同。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Chris 的另一个观点**：Bessent 领导的财政部与 Warsh 领导的美联储之间的协作将是"前所未见的"——这不一定意味着 Warsh 不独立。协作与独立可以共存，并产生更好的整体政策应对。

</div>

</div>

---

# 投资影响：利率敏感型资产正在反转

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**Ram 的观察：股市比债市更聪明？**

- 利率敏感型资产（保险、银行、长期限高自由现金流公司）此前被重创——利率上升 → 持有债券价值下降 → 偿付未来负债的资产缩水
- 但最近 2-3 天：**长期限高自由现金流资产开始反弹**
- 主要指数回调超过 1%，唯独这些资产在涨
- 股市在押注：**长端利率即将见顶**

</div>

<div>

**Ram 的整体判断**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

"我认为利率就在这里见顶。Warsh 的确认是一个'投降性事件'。唯一还没出现的是 Ray Dalio 拍的关于末日的病毒视频——那是债券市场恐慌的标配。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-xs">

**关键逻辑**：能源价格（石油影响运输和汽油）、地缘政治不确定性——这些推高了通胀预期。但 Warsh 想降息（Elizabeth Warren 的试金石他都过了——他"应该"是轻松通过的人选）。44 票反对更多是在发送政治信号。

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Chris Perkins**："这个政府在 Treasury-Fed 协作方面将与以往不同。Warsh 正在重新评估我们应该如何看待通胀本身。与 Truflation 团队的对话表明，我们将对通胀有更精细的理解。"

</div>

---

# 地缘政治与中期选举：无法忽视的变量

<div class="text-sm leading-relaxed">

Chris Perkins 指出，当前的地缘政治局势是利率和市场走向的关键变量。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**短期风险**

- 主权基金抛售美国国债——部分出于去耦合动机，部分出于资金需求
- 油价高企——推高通胀预期
- 地缘政治局势可能"迅速恶化，也可能迅速好转"

</div>

<div>

**Chris 的判断：偏向乐观**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

"我的直觉是情况会好转。中期选举临近，美国人民不喜欢地缘冲突。Trump 被要求的是降级而非升级——如果他能做到的话。这是一个艰难的问题，但我认为方向是积极的。"

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**综合图景**：短期利率受财政扩张 + 地缘政治 + 通胀回归三重压力 → 长端收益率上行。但中长期，AI + 廉价能源 + Warsh-Treasury 协作 + 稳定币买盘 → 通缩力量逐渐占上风。利率敏感型资产正在提前定价这个转折。

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"这是一个流动性超新星事件……作为链上最大的永续合约平台所使用的抵押资产，USDC 的流动性将辐射到整个链上经济的其他部分。"
<div class="text-xs opacity-60 mt-1 not-italic">— Gordon Liao (Circle)，谈 USDC 在 Hyperliquid 的角色</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"任何一个锁定 TVL 的应用都会想办法把浮存金变现。为什么要送给第三方呢？"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins (250 Digital Asset Management)，谈净利息收入</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"LLM 层的价值捕获极其有限。AI 实验室们烧了数百亿美元，本质上是在做公益。真正捕获价值的是拥有最终客户的应用层。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ram Ahluwalia (Lumida)，谈 AI 价值分配</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"我们看到了 21 万亿美元的 USDC 链上结算量——仅 Q1 一个季度。这反映了基础设施的扩张和流动性的提升。"
<div class="text-xs opacity-60 mt-1 not-italic">— Gordon Liao，引用 Circle 2026 Q1 财报数据</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于监管、利率和 Agent 经济的核心判断：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我们正在接近希拉里台阶。从现在到最终投票会非常诡异——但我仍然认为法案会勉强通过。中期选举临近，不通过的下行风险更大。"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins，用珠峰比喻形容《清晰法案》的政治处境</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"这个折中方案在'旧世界'的资产负债表式中介和'新世界'的智能合约、Agent 中介之间画出了一条清晰的线。对新型中介来说，这是巨大的机会。"
<div class="text-xs opacity-60 mt-1 not-italic">— Gordon Liao，谈 Tillis-Brooks 收益折中</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"30 年收益率上涨的大部分是由期限溢价驱动的——约 80 个基点，而几年前它是负的。这意味着市场在定价长期的财政问题和通胀可信度下降。"
<div class="text-xs opacity-60 mt-1 not-italic">— Gordon Liao，分解利率变动驱动因素</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"股市实际上比债市更聪明。长期限高自由现金流资产开始反弹——股市在说，长端利率即将见顶。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ram Ahluwalia，谈市场信号</div>
</div>

</div>

---

# 关键主题回顾

<div class="grid grid-cols-3 gap-3 mt-4 text-xs leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">稳定币的进化</div>
USDC 从支付工具演变为链上经济的核心抵押资产。Circle 的 USDC+USYC 组合回答了"支付 vs 收益"的二元选择——两者都要，两者之间无缝切换。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">分发胜过模型</div>
AI 价值正在从模型层向分发层迁移。Apple 的沉默布局、Coinbase 的跨系统整合——"能自由流动者"最终胜出。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm">监管正在成形</div>
《清晰法案》通过委员会是里程碑。即便政治阻碍仍在，"活动型 vs 被动型"收益框架为新型金融中介搭建了法律地基。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-sm">Agent 经济的轨道</div>
Circle 的 ARC + Nano Payments 正在搭建机器间支付的基础设施。Agent 将成为最具纪律性的资本配置者——它们会在稳定币和货币市场基金之间自动优化。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-sm">债券市场在定价什么</div>
期限溢价的回归是更深层的信号：市场在质疑财政可持续性和通胀控制的可信度。但长期通缩力量（AI + 能源）可能最终占上风。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">赢家：整合者</div>
能在稳定币、货币市场基金、银行卡和银行账户之间自由流动的平台——无论是 Coinbase/Circle 还是 J.P. Morgan——将在碎片化的美国金融格局中获得最大优势。
</div>

</div>

---

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"如果说 Agent 有什么擅长的事——那就是过度优化。在那种世界里，货币市场基金会赢吗？如果我是 Agent，我要的是利息进我的口袋，而不是进稳定币发行方的口袋。两者的底层风险是一样的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Perkins，提出这一期的核心问题</div>

</div>

---

<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
<div class="text-center">

# 谢谢观看

<div class="mt-6 text-base opacity-70">
Bits + Bips × Unchained · 2026 年 5 月
</div>

<div class="mt-6 text-sm opacity-50">
主持人：Austin Campbell · 联合主持：Ram Ahluwalia, Chris Perkins
</div>

<div class="mt-4 text-sm opacity-50">
特邀嘉宾：Gordon Liao, Circle
</div>

<div class="mt-10 text-xs opacity-40">
← 按左键返回 · 内容仅供教育和信息参考，不构成投资建议
</div>

</div>
</div>

