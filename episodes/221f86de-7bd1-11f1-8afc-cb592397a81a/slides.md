---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Austin Griffith on the $1 AI Audit and the Case for Founders Over DAOs: Uneasy Money'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Austin Griffith 论 $1 AI 审计<br>和创始人优于 DAO 的理由

<div class="mt-6 text-sm opacity-70">
Uneasy Money · 2026年7月
</div>

<div class="mt-4 text-xs opacity-50">
嘉宾: Austin Griffith（Ethereum 开发者, Scaffold-ETH 创建者）<br>
主持: Kane Warwick · 联合主持: Taylor Monahan
</div>

---
class: text-left
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Vitalik 的 Lean Ethereum 路线图</strong><br>
<span class="opacity-70">以太坊自 merge 以来最大重构，三到四年协议级升级计划</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Frame Transactions</strong><br>
<span class="opacity-70">终于让以太坊 UX 达到应有水平的底层技术突破</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>创始人 vs DAO：治理的终极辩论</strong><br>
<span class="opacity-70">ENS 案例、BONK DAO 灾难和公司治理历史的关键对照</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>Venice AI 的隐私推理</strong><br>
<span class="opacity-70">TEE 端到端加密 + Near MPC 验证，AI 隐私的新范式</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>代币 vs 股权：加密的十字路口</strong><br>
<span class="opacity-70">为什么即便是代币最大主义者也开始选择股权融资</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>AI 代理治理的崛起</strong><br>
<span class="opacity-70">Fable 比普通人更聪明——AI 代理能拯救 DAO 吗？</span>
</div>

</div>

---
class: text-left
---

# Vitalik 的三到四年协议级重构

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Lean Ethereum** 被定位为以太坊"第三次迭代"——继创世和 merge 之后的又一次最大规模重建。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

内容包括：后量子安全、新的 EVM 执行环境、**giga-gas** 吞吐量概念。Dankrad 甚至提出"想办法一年内把它搞完"——这种执行压力感是以太坊开发中少见的。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

对 Austin 这样的应用层构建者来说，协议层变化的核心价值在于：**更快、更便宜、更好的用户体验**。"它大概还是会以同样的方式工作——这条链已经运行了十年，还会再运行十年或一百年。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

Kane 认为 AI 正在帮助以太坊加速技术前沿。"我的判断是，我们已经把 2030 路线图缩短了一年。"

</div>

</div>

---
layout: two-cols
class: text-left
---

# 如果没有 Vitalik……

<div class="text-sm leading-relaxed mt-2">

Kane 提出了一个尖锐的假设：如果 Vitalik 在 merge 完成后真的像最初设想的那样"功成身退"了，会发生什么？

以太坊会迅速陷入内部争斗、多次分叉、彻底灾难。**正因为 Vitalik 持续在场**——即使做各种"奇怪的 Vitalik 式的事情"——以太坊才真正建成了。

这不仅仅是 Vitalik 的问题。DAOs 在本质上不擅长适应变化。它们更擅长维持现状。

**但这个世界不会停止变化。** 现状只是一个幻觉。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./governance-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# Frame Transactions：以太坊 UX 的最后拼图

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

Austin 对 Frame Transactions 感到**非常兴奋**："我一直以来都在思考 meta transactions 和 UX 问题，Frame Transactions 终于能把以太坊的 UX 做到该有的样子。"
<span class="text-xs opacity-60 block mt-1">— Austin Griffith</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**这个技术实现了很多 account abstraction 试图做到但未能完全实现的事情**——用最通用的方式，让构建者可以为用户支付 gas 费，支持智能合约钱包、passkey 签名等一系列升级。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

Kane 补充道：虽然 L2 在过去四年中解决了部分吞吐量问题，但如果以太坊自身能实现**更短的 slot 时间、更快的交易确认**，大量使用场景会回归主网。

</div>

</div>

---
layout: two-cols
class: text-left
---

# 长期路线图 vs 持续交付

<div class="text-sm leading-relaxed mt-2">

**问题在于**：五年或十年的宏伟路线图，会给你一个**奇怪的借口**——不去关注短期交付。

Kane 的转变很有意思：两三年前他还在说"不要担心这周交付什么，慢慢做就好"；现在他变成了 "如果在周三之前交付不了，我要拿枪指着你的头"。

**连续交付的累积效应**，远比一个巨大的长期愿景更有力量。即使你知道该往哪个方向走，每一个小的改进都在实实在在地让平台变好。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./shipping-vs-roadmap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# Solana 的务实 vs 以太坊的长线主义

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Solana 的做法

- 构建者持续反映用户需求："这里有用户痛点" → "我们来解决"
- 可能**过于激进**——但至少一直在交付
- 当发现用户真正需要什么时，他们会想办法把它做出来并上线

</div>

<div class="p-3 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 以太坊的困境

- Taylor 的担忧：EF 不断推出一个又一个**超长路线图**——而且这是公开讨论最多的话题
- "好吧，等五年后我们有这个了，我们就能重新有竞争力了"——不，你必须在**今天**就在场
- 以太坊升级也需要**三个月**的协调周期——你不可能每周都发布

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>作者概括</strong>：两边的路径各有利弊。以太坊承载的历史包袱越大，升级就越难——Solana 也经历过同样的瓶颈。关键不在于"哪条路对"，而在于：你的路线图是否在驱动实际的交付？
</div>

---
class: text-left
---

# EF 重组的幕后

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

Austin 在 EF 工作了大约八年。他回忆起刚加入时的体验："那是一个**充满了 Jedi** 的地方，是最酷的组织。你想和这些人待在一起，因为在那儿跟他们同处一室，就会有某种神奇讨论和真正的 Jedi 级别的事情发生——这就是为什么人们愿意接受低薪加入 EF。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

EF 近期的重组让很多人离开——其中不少人已经待了五到八年。Taylor 对此感到惊讶，因为这推翻了一个长期存在的说法——"EF 根本不付够钱"。如果一个组织可以留住顶尖人才达八年之久，或许它并不像外界抱怨的那样缺乏吸引力。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

好消息是组织确实**变精简了**。Austin 笑着说："我勉强还保有工作。" Kane 回应："恭喜你活过了大清洗。" 人们对重组的期待不仅是路线图变精简，更是组织本身也变得更精简、更聚焦于交付。

</div>

</div>

---
layout: two-cols
class: text-left
---

# Austin 的 DAO 三层框架

<div class="text-sm leading-relaxed mt-2">

Austin 把 DAO 的角色拆成三个层次，这个框架是整场对话中最有价值的分析工具之一：

**把三个层次混在一起的 DAO，最终都会在治理上出问题。** 关键是把合适的工作交给合适的治理结构——而不是用同一种模式套在所有事情上。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dao-three-roles.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# ENS 之争：Nick 的宪政危机

<div class="mt-3 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

ENS 是一个**管理良好的 DAO**——没有大规模资金浪费，没有被滥用。现在创始人 Nick 想要更集中的决策权。没有人指责他别有用心，但这样做本身就构成了对 DAO 理念的威胁。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 text-sm">

**支持方（Kane）**：如果一个创始人还在打磨产品，他当然比一个松散的 DAO 更擅长做事。Nick 在这里待了几十年——他想要的是让这个产品取得巨大成功。

</div>

<div class="p-3 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm">

**反对方**：权力集中本身就是问题。即使 Nick 是最值得信任的人，这种模式的成功就是对 DAO 哲学的否定。

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>问题不在于计划是否完美。</strong>Kane 说："我不是在说 Nick 提出的具体方案是完美的——它肯定不是。但最有趣的是，双方都没有指责对方有不良动机。这就是为什么这个案例对 DAO 辩论如此有价值。"
</div>

</div>

---
class: text-left
---

# 为什么创始人比 DAO 更会做产品

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>执行力的鸿沟</strong><br>
<span class="opacity-70 text-xs">建立一个有人愿意用的产品极其困难。它需要承诺、一致性和创始人的偏执——这些东西 DAO 根本提供不了。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>变化需要决策</strong><br>
<span class="opacity-70 text-xs">Kane 曾认为 ENS 已经完成、不需要再碰了。但世界变了——疯狂的 AI 代理也需要自己的 .eth 域名。DAO 不擅长在变化中做决策。</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>激励不够</strong><br>
<span class="opacity-70 text-xs">如果激励真的能拯救世界，BONK DAO 的持有者应该会投票。他们没有——因为他们是人，不是机器人。光靠激励机制运转不了组织。</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>Kane 的结论</strong>："让创始人掌权就好了。这不是投降——这是在承认一个简单的事实：你必须在某种程度上信任人。世界不是靠无信任系统运行的。"
</div>

</div>

---
class: text-left
---

# 公司治理的历史告诉我们什么

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**创始人领衔模式**（通过双层股权结构）在 2000 年代初期成为趋势：Google、Facebook 等公司的创始人都保留了投票控制权。你可以说它们现在都变邪恶了——但在**执行力**上，它们确实做得非常好。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

对比之下：微软在 Ballmer 之后的时期一度失去了方向——尽管 Ballmer 算半个创始人。Google 在创始人退出后也经历过相当一段时间的无舵期。他们通过收购 DeepMind 等创始人团队来填补这个空缺——但仍然不够。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**核心问题**：一个建造了产品、最在乎产品的创始人，会比一个松散的 DAO 执行得更好。这不是理论，这是从几十年的公司治理历史中得出的模式。

</div>

</div>

---
class: text-left
---

# BONK DAO：当没有人看门的时候

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

### 发生了什么

一个人用从交易所买的 BONK 代币发起提案：把所有资金转给他自己。然后他投票赞成。

等了**整整一周**的时间窗口——没有人注意到。没有人阅读论坛帖子。提案执行通过。

</div>

<div>

### 关键数据

- **提案人 + 两个投票赞成者**：全由同一人控制
- **等待期**：整整一周
- **投票门槛**：只有 1% 的代币需要参与
- **结果**：所有 BONK 资金被提走

</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

<div class="text-xs opacity-60 mb-1">Kane 的总结：</div>

<strong>激励不会拯救世界。</strong> 如果激励真的能拯救世界，每个持有者都会投票反对这个提案。他们没有——因为他们是人，不是利益最大化机器。DAO 的真正失败不是因为恶意，而是因为**冷漠**。

</div>

---
class: text-left
---

layout: two-cols
class: text-left
---

# AI 代理 vs 人类治理

<div class="text-sm leading-relaxed mt-2">

**"AI 代理不会让这种事发生。"** 代理比人类更耐心、永远在线、不需要激励驱动。你问一个问题，20 分钟内就能得到回答——这是 100% 的治理覆盖率。

Kane 提出了一个直白的测试："如果让我在 Fable 和我之间选谁来治理，你应该选 Fable。" 现在的 AI 在信息处理能力上确实超过了普通人的平均水平。

**但 Taylor 指出了新的威胁**：提示注入攻击。攻击者不必在链上投票——他们会欺骗代理本身。Austin 分享了一个真实案例：有人通过提示词诱骗一个治理平台上的所有 AI 代理，让它们暴露代币持有者的"最深秘密"。

治理的未来不是"人类 vs 代理"，而是"人类 + 代理 vs 人类 + 代理"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-attack-surface.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# Robinhood 链：为什么所有人都不在意

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Kane 的判断

Robinhood 链的启动有**内幕交易**的影子：团队需要向 Robinhood 支付激励才能获得被支持或被列入公告的机会。这像极了几年前 Coinbase Earn 的模式——用代币激励换取用户分发渠道。

Kane 作为 Infura 的人（他们需要支持所有链）对此直言不讳："我真的很努力去关心这件事，但我做不到。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Taylor 的判断

"以太坊会灭掉这个东西。大概两年。" 企业链能成功的唯一方式是找到**非常具体的产品市场契合**并全力执行——不能靠合作关系和集成名单上的一席之地来苟活。

在 FTX 时代之后，市场已经认识到：**企业链没有真正的上行空间**，也不会给生态系统带来任何持久的正面效应。

</div>

</div>

</div>

---
layout: two-cols
class: text-left
---

# Venice AI：隐私推理的新范式

<div class="text-sm leading-relaxed mt-2">

**Austin 的评价**："我非常喜欢 Venice，每天都在用。"

Venice 通过两种机制保护用户隐私：

对于前沿模型：通过**匿名化层**访问
对于开源模型：在 TEE 中运行，提供**端到端加密**和可验证证明

这种架构让 LLM 可以用于 HIPAA 合规等医疗场景——在这些场景中，即使是匿名的前沿模型也不够安全。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./venice-tee.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 代币 vs 股权：加密的十字路口

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 双重结构的诅咒

Venice 在代币成功的基础上又进行了股权融资——这是典型的双重结构。Eric 声称二者利益一致，因为"股权拥有大部分代币"。但历史表明：**总有一方会被牺牲。**

Taylor 的判断很直接："你不会比任何人做得更好——结果总是和往常一样，最终受伤的大概率是代币持有者。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Kane 的惊人转向

作为一个曾经的代币最大主义者，Kane 现在说：**"如果今天我要开始做任何新东西，我会选股权，我不会发代币。"**

理由是：市场的流动性溢价已经蒸发殆尽，代币现在变成了**净负资产**。所有去中心化融资的好处——全球化访问、无需许可——都被代币本身的古怪性质抵消了。

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Kane 的观察</strong>："如果 SEC 当年没有打压代币创始人，而是等上十年——市场自己就会弄清楚，代币其实是一种糟糕的融资工具。我们绕了一圈最终还是回到这里了。"
</div>

</div>

---
class: text-left
---

# 纯实用代币：一条或许可行的出路

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Austin 的实际体验说明了一切**：他质押 VVV 代币获得**每日推理额度**——用不完就清零，没有任何未来收益承诺。这个模型是完全实用的：代币价格只跟推理成本挂钩。

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 text-sm">

### 纯实用代币模型

- 质押代币 → 获得每日推理额度
- 没有收益分享，没有治理权利
- 价格仅取决于**推理需求**
- 股权完全独立运作

</div>

<div class="p-3 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm">

### 当前的困境

- AI 投资者不愿持有代币
- 如果你想拿 AI 投资，你就不能有代币
- 社区怀疑"他们又会把代币埋了，说它只是一个支付工具"
- 但只要能做到真正的分离，两种工具可以共存

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括</strong>：Venice 的纯实用设计是目前最接近"代币不该被消灭"的案例——但前提是团队真的能做到将代币和股权彻底分离，而不是用其中一方补贴另一方。
</div>

</div>

---
class: text-left
---

# DAO 哲学的关键时刻

<div class="mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">
<strong>核心悖论</strong>：如果 ENS 在 Nick 获得更多控制权后表现更好，这对 DAO 来说是最糟糕的结局。因为这不是在证明"ENS 这个 DAO 有问题"——而是证明"DAOs 作为一种治理范式有问题"。
</div>

<div class="grid grid-cols-3 gap-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">参数调整</div>
<div class="font-semibold">去中心化最适合</div>
<span class="text-xs opacity-70">升级合约、调整参数——这类"旋钮"需要一个委员会，但不需要庞大的治理架构。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">产品构建</div>
<div class="font-semibold">创始人最适合</div>
<span class="text-xs opacity-70">世界不会停止变化。产品需要持续迭代。DAO 完全不具备在这种节奏下交付的能力。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60">资本分配</div>
<div class="font-semibold">需要精心设计</div>
<span class="text-xs opacity-70">资本分配最容易吸引"grant farmer"。这个环节的去中心化需要专门的防护机制。</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>但它不是死路一条</strong>：关键在于承认一个现实——不同的治理任务需要不同的治理结构。用一种模式包办一切，才是 DAO 失败的真正原因。
</div>

</div>

---
class: text-left
---

# 去中心化世界中"信任"的悖论

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

Kane 在 ENS 辩论中反复使用了一个词：**"信仰"**——不是宗教信仰，而是一种务实的信任。

"你要么信任 Nick 能做到，要么不信任。我的信心不在这个具体的提案上——我的信心在于 Nick 会找到办法。他是最有可能理清这一切的人。我对评论区里任何其他人的信心为零。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

但这与加密的核心理念——"不要信任，要验证"——构成了**深层的矛盾**。

Kane 承认这一点："这确实是个问题。这个世界不是那样运作的。你不可能完全不信任任何人。我们花了很多年才学会这个教训——建立一个有人愿意用的产品极其困难。它需要人与人之间的承诺、对意图的共同理解、和对执行者的基本信任。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>作者概括</strong>：这个矛盾不是要解决的问题，而是需要管理的张力。0% 信任（纯 DAO）不可行，100% 信任（中心化）不可取。ENS 的全部戏剧性就在于它在寻找一个平衡点。
</div>

</div>

---
class: text-left
---

# Ethereum：一场没有终点的马拉松

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**最初愿景**：完成 merge 之后就能功成身退——那是 2018 年的普遍信念。以太坊被设计成一个完成后就不再需要大改的系统。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

**现实**：世界变了。AI 代理需要交互方式，新的威胁模型出现了，用户体验始终不够好。所以以太坊必须持续进化——这是它的最强特征，也是它最大的风险。十二秒的区块时间我们已经忍了很久了，gas 价格虽然低到小数点后好几位零，但在高波动环境中依然会飙升。

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>已实现</strong><br>
<span class="opacity-70">十年不间断运行，从 POW 到 POS，L1+L2 架构成熟</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>进行中</strong><br>
<span class="opacity-70">Lean Ethereum：后量子安全、新 EVM、giga-gas、frame transactions</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>前提条件</strong><br>
<span class="opacity-70">需要 Vitalik 持续在场——还需要一个真正愿意交付的 EF</span>
</div>

</div>

</div>

---
class: text-left
---

# Austin 的 $1 AI 审计项目

<div class="mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

Austin 在节目中宣布了他的最新项目：**$1 AI Audit**——用 AI 对智能合约进行极低成本的安全审计。这个项目与他多年来构建的 Scaffold-ETH 和 Speed Run Ethereum 生态一脉相承，目标是为构建者提供即时、廉价、可频繁运行的安全反馈。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3">

节目第二段（约 30 分钟）专门讨论了 $1 AI Audit 的技术细节、市场定位和与其他安全工具的关系。当前转录主要覆盖了节目第一段的治理和协议层讨论。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

<strong>核心洞察</strong>：AI 在大规模、低成本的代码分析上已经足够好——虽然不能替代专业人工审计，但它能在开发者提交代码之前就捕获大量常见错误。这与 Austin 一贯的"让构建者更快上手"理念一脉相承。

</div>

</div>

---
class: text-left
---

# "周三之前能交付吗？"——执行的重新定义

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

Kane 描述了他的团队管理哲学的**根本性转变**。两三年前他的口气是："我们有修复所有加密 UX 的长期愿景，不要担心这一周——继续做就好。"结果是：持续交付了很多东西，但从未真正将任何产品落地到一个能改变市场格局的程度。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

<strong>现在他变成什么样了？</strong> "我想在周三之前发布一些东西。如果我拿枪指着你的头，问你能不能周三之前交付——答案会是能的，你当然能。连续交付的累积效应，远比那个长期愿景更强大。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

这与加密领域的一个普遍教训一致：**产品只有真正被用户使用的时候才算存在。** 在此之前，所有的"长期愿景"只是安抚自己和团队的花言巧语。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括</strong>：这个转变不只是个人管理风格的进化——它反映了加密行业整体的成熟。从2017年的"白皮书就够了"到2026年的"这周三能交付吗？"，是一个从叙事驱动到交付驱动的范式转移。
</div>

</div>

---
class: text-left
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"如果 Vitalik 不在，我不认为这个东西能建成。他一消失，20 秒内就会变成内讧战场。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 论 Vitalik 对以太坊的不可或缺性</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"连续交付的累积效应，远比长期愿景强大。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 阐述自己的执行哲学转变</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"DAO 不会去升级一个产品。它就是不会。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 阐述为什么创始人比 DAO 更擅长做产品</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"如果今天我要做任何新东西，我会选股权，我不会发代币。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 从代币最大主义者到股权拥护者的转向</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"激励不会拯救世界。光靠激励机制运转不了组织。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 对 BONK DAO 失败的总结</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"如果让我在 Fable 和我之间选谁来治理，你应该选 Fable。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 对 AI 代理治理能力的直白评价</div>
</div>

</div>

---
class: text-left
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的洞见：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"那是一个充满了 Jedi 的地方。你想和这些人待在一起——因为跟他们同处一室，就会有神奇的事情发生。"
<div class="text-xs opacity-60 mt-1 not-italic">— Austin 回忆加入 EF 时的体验，解释了为什么人才愿意接受低薪</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"以太坊会灭掉 Robinhood 链。大概两年。"
<div class="text-xs opacity-60 mt-1 not-italic">— Taylor 对企业链命运的判断</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"我们本应该做完 merge 就功成身退。那是当时的愿景。但这个世界不是那样运作的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 论述为什么即使以太坊也需要持续进化</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"AI 代理不会让这种事发生——但攻击方式会变成提示注入。"
<div class="text-xs opacity-60 mt-1 not-italic">— Austin/Taylor 讨论 AI 治理的双刃剑效应</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"让创始人掌权就好了。不是投降——而是承认你必须信任人。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane 对 ENS 辩论的最终立场</div>
</div>

</div>

---
layout: end
class: text-center
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70 italic">
"一条链上发生的事，从来不会停留在链上。"
</div>

<div class="mt-12 text-sm opacity-50">
Uneasy Money · 2026年7月<br>
嘉宾: Austin Griffith · 主持: Kane Warwick · 联合主持: Taylor Monahan
</div>

<div class="mt-6 text-xs opacity-40">
<a href="https://pdrl.fm/98e0b1/traffic.megaphone.fm/LSHML5856522767.mp3" class="no-underline">收听完整节目</a>
</div>
