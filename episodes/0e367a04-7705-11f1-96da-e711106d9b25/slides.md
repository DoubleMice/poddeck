---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How One ENS Vote Reignited the DAO Governance Debate: Uneasy Money'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 一次投票点燃 DAO 治理大战

## ENS 安全委员会续任、金库困境与去中心化治理的生死之问

<div class="mt-8 text-sm opacity-60">
Nick Johnson (ENS Labs) · Alex Van de Sande (ENS Co-founder)
</div>

<div class="mt-4 text-xs opacity-50">
Kane Warwick & Taylor Monahan · Uneasy Money
</div>

---
layout: two-cols
---

# 为什么这期值得看？

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>一次投票引发的危机</strong><br/>Nick.eth 用 3.26M ENS 投下反对票，占有效投票的 ~50%，安全委员会续任失败，舆论炸锅。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>DAO 参与率崩溃</strong><br/>100M ENS 代币总量中，仅 ~7% 在活跃投票。创始人 3.2% 的持仓 = 50% 有效投票权。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>治理 vs 资本分配的张力</strong><br/>$130M+ 的金库让 DAO 变成了预算争夺场，偏离了协议治理的初衷。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>DAO 终结了吗？</strong><br/>Aave、ENS —— 被视为最佳实践的 DAO 接连陷入困境，整个治理范式面临存在性拷问。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>分离关注点</strong><br/>Nick 和 Alex 提出新模型：协议治理归 DAO，资金管理归基金会，产品决策归 Labs。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>ENS 不是公司</strong><br/>域名系统不能是盈利实体——ENS 的可信中立性是它区别于所有 Web3 仿冒者的核心。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ens-three-challenges.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 引爆点：安全委员会投票

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 事件经过

ENS DAO 安全委员会——一个能够在提案通过后、进入时间锁期间将其取消的紧急后门——正值两年一度的续任投票。

现任委员会将于 7 月 24 日到期。链上续任投票：**未通过**。

Nick.eth（ENS Labs 创始人）以 **3.26M ENS** 投下反对票，约占当时有效投票总量的 **50%**。

</div>

<div>

### 社区的即时反应

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm mt-4">

加密 Twitter 上的主流叙事：Nick 用一半的投票权否决了安全委员会，他是独裁者、钱在消失、这是个 rug。

但 Nick 反复强调：**"Do you currently control 50% of the ENS tokens? No."** —— 他持有总量 100M 中的约 3.2%，而不是 50%。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-3">

投票参与率极低才是根本原因。如果所有持币者都投票，Nick 的反对票就会被轻松超过。理论上，市场上的 ENS 代币足够否决他的任意决定。

</div>

</div>

</div>

---

# 投票参与率：从 80% 到 7%

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 100M ENS 代币的分配

- **50%** → DAO 金库（至今大多未动）
- **25%** → 空投给 ENS 用户
- **25%** → 核心贡献者

启动时，Nick 的个人分配约为 **7%**（不到 700 万枚）。如今他持有约 **3.2%**（~320 万枚）。

### 有效委托量仅约 7M

在所有 100M 代币中，被委托并用于投票的只有 ~700 万。Nick 的 3.2M 在其中占了 ~50%。

</div>

<div class="text-sm leading-relaxed">

### 参与率为什么会下降？

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

**卖币动机远大于投票动机。** 空投代币对大多数人来说就是免费的钱。持有者卖出代币的财务激励很强，而参与投票却没有任何直接回报。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">

**代币不断分散。** 随着时间推移，代币被卖到更多人手中，但这些新持有者同样不参与治理。委托量不是趋于零，而是持续萎缩。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">

**"Nick 的投票影响力其实下降过。"** 在自我委托之前，由于参与率下降的速度比他自己代币的减少速度更快，他的相对影响力反而是增加的。

</div>

</div>

</div>

---

# 争议背后的提案：不是"抢钱"

<div class="mt-4 text-sm leading-relaxed">

许多人将 Nick 提出的提案解读为"DAO 失败了，我们要求退还金库和代币"。但 Nick 的解释更接近一种结构改革。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 提案的实际内容

ENS Labs 提出将 DAO 中委员会不擅长处理的部分（日常运营和资金分配）交给基金会，同时保持 DAO 对整体的最终控制权。

- 基金会接管**日常执行**：编制预算、管理金库、代表 ENS 对外（如 ICANN）
- DAO 保留**最终监督权**：任命/罢免基金会董事、决定战略方向、协议参数
- 基金会是 DAO 的**法律外包层**——它已经存在、已经是 DAO 在外部世界的法人代表

</div>

<div>

### 沟通问题

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

Nick 也承认了问题所在："mea culpa——提案确实写得太长了。你必须读完整份提案才能得到完整的图景。"当一份试图同时处理多个复杂问题的提案摆在面前时，大多数人只会读到概括，然后用自己的恐惧填补空白。

"很多人得出了错误的印象，部分原因就是提案太复杂了。"

</div>

</div>

</div>

---

# 自我委托：导火索

<div class="mt-4">

Alex 解释了这场危机的直接诱因——不是提案本身，而是 Nick 的自我委托行为：

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mt-3">

"Nick 过去是代币持有量排名第一的人，但领先幅度不大。后来他决定成为一个更活跃的代表，把代币自我委托。结果是——他现在一个人的投票权可以超过排名前 50 的代表的总和。我认为问题不在于 Nick 能用他自己的代币投票——问题在于：我们怎么走到今天这一步的？参与投票的人怎么会这么少？"

<div class="text-xs opacity-60 mt-1 not-italic">— Alex Van de Sande</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm">
<div class="font-bold text-lg">之前</div>
Nick 已经通过他人委托累积了投票权——他一直是最大的代表。
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200 text-sm">
<div class="font-bold text-lg">导火索</div>
他自我委托后，个人投票权的跃升让所有人突然看到了问题的严重性。
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm">
<div class="font-bold text-lg">真相</div>
这个问题一直存在——只是之前隐而不见。Nick 的自我委托只是让裂缝变成了裂缝+火光。
</div>

</div>

---

# 为什么 ENS 必须有 DAO？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 首要担忧：协议被劫持

Nick 在设计 ENS 治理时的**第一优先级**是防止有人控制协议杠杆、篡改名字解析。ENS 不能简单地用 ETH 做治理代币——因为如果有人花大钱买 ETH 投票，就可能对 ENS 发起"捣乱攻击"。

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3 text-sm">

"如果 ENS 变得像我希望的那样普及和广泛使用，用 ETH 投票治理的风险非常大。有很多富人能买下足够多的 ETH 来夺取控制权。"

<div class="text-xs opacity-60 mt-1">— Nick Johnson</div>

</div>

### 次要担忧：金库被盗

治理代币的第二个作用是防止有人盗取金库。代币分配被设计成优先给那些真正使用和关心 ENS 的人。

</div>

<div>

### 但选择代币治理也有代价

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2 text-sm">

**"我们当年都喝了 Kool-Aid。"** ENS 启动时，做 DAO 是当时的共识——既是为了合规，也因为大家真的相信去中心化治理。正如 Kane 所说："这不仅仅是为了逃脱监管责任 —— 我们当时都真心相信它。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2 text-sm">

**如今大家更现实了，也更 cynical。** 几年的 DAO 实践暴露了一个核心矛盾：代币持有者关心投机收益，而不是治理；关心预算扩张，而不是可持续性。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-sm">

**但 ENS 依然需要一个治理机制。** 与 Aave 不同——Aave 在另一个现实里可以是一家公司——域名注册局天然不适合盈利模式。ENS 依赖可信中立性作为核心价值主张。

</div>

</div>

</div>

---
layout: two-cols
---

# DAO 投票参与率持续下降

<div class="text-sm leading-relaxed">

ENS DAO 的参与率从启动时的高位（估算 ~80%）不断下滑：随着空投代币被卖出、持有者越来越分散、治理疲劳加剧，活跃投票量持续萎缩。

到 2026 年，**委托总量仅约 7M**（总供应量的 7%），而 Nick 一人就占了近一半。

这不仅是一个 ENS 的问题。Alex 描述了它如何悄然蔓延："我们目睹委托量一点点下降，达到法定人数、通过投票变得越来越难……这像一场缓慢的泄漏。直到 Nick 委托了自己的代币，这个事实才突然被所有人看到。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ens-governance-decline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# DAO 的设计失败：资本分配吞噬了治理

<div class="mt-4 text-sm leading-relaxed">

ENS DAO 在成立时面临两个任务：**协议治理**（升级合约、定价）和**金库分配**（资助 ENS 开发和公共物品）。但随着时间推移，第二个任务几乎吞噬了第一个。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 金库成为蜜罐

Nick 描述："我们有了一个巨大的金库蜜罐，它在不断呼唤人们找到分配它的理由。"参与度被那些想推动特定项目、拿到预算的人主导。他们不一定有恶意——只是有自己的宠物项目——但这种动态天然地让治理集中在"能从金库中获益的人"手中。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 委员会不适合实时决策

"每个对话都必须是一个委员会，每件事都必须是一个工作组。"被雇佣的个人可能各自都很能干，但缺乏一个整体组织将这些碎片拼接成连贯的整体。而那些成功分配资金的组织——如基金会——之所以成功，正是因为它们像一个有内部流程的连贯实体那样运作。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200 text-sm">
<div class="font-bold text-lg">预算只升不降</div>
"如果你让 DAO 成员投票，他们总是选择增加预算。但收入并不一定会跟着增长。资金池在缩小。"
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm">
<div class="font-bold text-lg">重复资助</div>
第一轮服务商计划中，4-5 个子域名注册项目同时获得资助，最终只有一个存活至今。因为每个人都投票支持自己最喜欢的那个。
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200 text-sm">
<div class="font-bold text-lg">委托权集中</div>
资金分配动机驱动人们集中投票权。Nick："钱能买影响力——随着时间推移，投票权会集中在能从持有代币中赚钱的人手里。"
</div>

</div>

---
layout: two-cols
---

# ENS 金库的真相

<div class="text-sm leading-relaxed">

ENS 金库的实际构成颠覆了很多人"$500M 大战"的想象：

- **~$130M** ETH + 稳定币：实际可支配
- **~$350M** ENS 代币：如果被出售将立刻归零

金库由 Karpatkey 管理，采用保守策略。ETH 部分 vs USD 部分分别对标各自的基准，但年化回报仅 **2-3%**。

Nick 直言：如果当初把全部资金投入 Vanguard 指数基金，或者甚至只是储蓄账户，现在的收益都会好得多。

但链上透明度和 DAO 投票限制使得这样的调整几乎不可能——每次投资策略变更都需要说服数百个互不认同的代币持有者。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ens-treasury-breakdown.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Namechain：事后诸葛亮

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 发生了什么

ENS Labs 曾宣布将构建 Namechain——一个为 ENS 定制的 L2。社区最初的反应是"终于！Gas 费太高了"。

随后团队花了两年时间开发。其中 **~20% 的工作量** 用于 Namechain，**~80% 用于 ENS V2**。

当团队最终决定取消 Namechain 时，社区的反应变成了"对，确实没必要"。

</div>

<div>

### 批评者的视角

Lefteris 等人批评这是资源的浪费。但 Nick 指出：<strong>ENS V2 的大块工作（80%）与链无关，取消 Namechain 只需剥离 ~20% 的跨链交易代码。</strong>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-4">

Taylor 补充了一个更广泛的视角："我们也都浪费过时间建链。整个以太坊 L2 扩容路线图现在看来，可能当时应该专注 L1。但当时 L1 一笔交易要 100 美元，我们别无选择。"

事后诸葛亮很容易。在当时的条件下，这些决策都有其合理性。

</div>

</div>

</div>

---
layout: two-cols
---

# ENS 的三重挑战

<div class="text-sm leading-relaxed">

ENS 面临三个独立但互相纠缠的问题，各自需要不同的治理结构：

1. **产品构建**：ENS V2 需要专业的工程团队持续开发和迭代。这不是委员会决策能做的事。
2. **协议治理**：合约升级、参数调整、定价模型——需要可信中立的机制防止劫持。
3. **资金分配**：$130M+ 金库需要专业化管理，不受日常政治干扰。

当前危机的根源：这三者被塞进了同一个 DAO 结构，而 DAO 只为第三个问题提供了激励机制。90% 的投票者只关心金库，不关心产品和协议。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ens-three-challenges.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# ENS 不是一家公司

<div class="mt-4 text-sm leading-relaxed">

与 Aave 不同——Aave 在另一个现实里可以作为一家中心化公司运营——**域名注册局天然不适合盈利模式**。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 为什么 ENS 不能私有化？

Alex 提出了一个尖锐的问题："市场上有很多命名系统，它们只是私人公司在卖名字，承诺将来会和什么集成。这跟卖月球土地或星星命名权的公司有什么不同？"

- 如果 ENS Labs 接管一切并宣布"DAO 结束了、DAO 死了"，ENS 就变成了众多不可靠的竞争者之一
- ENS 的价值来自于它的**可信中立**——它与 ICANN 对话、与所有传统系统合作、是开放的
- 一旦失去这种中立性，.eth 就不再是 .eth

</div>

<div>

### 现实世界的参照系

ICANN 就是现有互联网域名治理的模型。Nick："我不希望 ENS 变成 ICANN——不是因为 ICANN 是邪恶的，而是因为我进入加密的初衷就是为了构建更好的去中心化治理结构。我现在还不想放弃这一点。"

ENS 的核心价值主张不是它的代码（那是开源的），而是它的**可信承诺**：

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">
没有人能拿走你的 .eth 名字。DAO 不能。安全委员会不能。即使有人控制了金库也不能。
</div>

</div>

</div>

---
layout: two-cols
---

# 什么是 ENS 真正不可侵犯的？

<div class="text-sm leading-relaxed">

ENS 的设计将最关键的部分锁定为不可变：

- **.eth 域名**：没有人能修改你的名字解析方式，也不能让它提前过期
- **代码库**：完全开源，任何人都可以 Fork 并部署自己的版本
- **链上金库**：每一笔流动都在链上可审计
- **ICANN 通道**：作为 Web3 域名的代表与传统互联网治理对话

如果 Nick 明天变坏并控制了金库，他能拿走 $130M。但他**无法拿走你的 .eth 名字**。其他人可以 Fork 代码、创建自己的命名系统——甚至可以继续运行在 ENS 之上，只是不使用 .eth 后缀。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ens-credible-neutrality.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 可以 Fork ENS 吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Fork 的可行性

Alex 明确指出：ENS 和 .eth 后缀是可以分离的。

- ENS 是一个协议和一个注册表。.eth 只是它当前管理的一个顶级域
- 如果你认为 Nick 是不可信的，你可以在 ENS 之上构建自己的命名系统（比如 .box 已经成为 ENS 上的一个顶级域）
- 你甚至可以 Fork ENS 的全部代码并部署自己的版本——**全部代码都是开源的**

</div>

<div>

### Nick 的唯一请求

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

"我对任何决心要 Fork ENS 的人的请求是：至少像其他人一样，选择你自己的后缀。所有代码都是开源的。随便拿去部署。你想的话可以比我们先部署 V2。但**请不要用 .eth**。"

"我真的不想因为人们把钱打到错误的 .eth 地址而承担责任——"我们说的是我们的 .eth，不是 ENS 的 .eth"——这会导致资产损失或被诈骗。"

</div>

</div>

</div>

---

# DAO 的生存危机

<div class="mt-4 text-sm leading-relaxed">

ENS 不是孤例。这一轮危机是更广泛 DAO 治理范式受到质疑的一部分。

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Aave 的先例

Aave 的治理争议是同一模式：Marc Zeller 认为自己是个合格的 DAO 代表、做了所有正确的事，但 Stani 可以随时动用他的投票权推翻一切。DAOs 里"一个人就有最终决定权"的现象反复出现。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 代币治理的天真假设

Kane 坦诚："所有关于投票的假设都是错的。我们以为会有 80% 的代币参与投票。实际上是 7%。"大多数人不在乎治理，只在乎代币价格上涨。这跟 TradFi 的股东冷漠一模一样。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 创伤记忆

Taylor 点出了加密老兵的深层心理："我们在加密圈里混久了，都有一种制度性创伤——关于 rug。看到任何长方形、毛茸茸的东西，我们都会假设那是个 rug。"任何涉及金库治理的争议，都会触发这种反射性恐慌。

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 参与的逆选择

"每次 DAO 看起来失败的时候，都会触发一种关于'我们过去十年 DAO 建设全部白费了'的存在性焦虑。人们开始沮丧，而这种沮丧本身推动了更低的参与率。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 但 ENS 不能放弃治理

与 Aave 不同，ENS 不能简单地变成一个公司。命名系统的可信中立性是它的存在理由。这就是为什么 Nick 和其他人仍然在试图修复 DAO 而不是放弃它。

</div>

</div>

---

# Aave vs ENS：不同的 DAO，不同的需求

<div class="mt-4 text-sm leading-relaxed">

把 Aave 和 ENS 放在一起比较是有价值的——它们代表了 DAO 治理谱系上的两个极值。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Aave 模式

- 在另一个现实里，Aave **可以作为一家公司运营**——用户为服务付费，公司开发软件
- 协议是半去中心化的、智能合约驱动的——不需要代币治理来决定如何构建功能
- 50 个人在几个房间里就能说清楚"我们该开发哪些特性"
- 它的收入不来自协议本身，而是来自代币发行

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ENS 模式

- **不能成为公司**——域名注册局天然不适合盈利模式
- 需要**可信中立性**：任何人都可以注册名字、名字属于用户、不会被没收
- 有**真实收入**：用户为名字付费，产生了 $130M+ 金库
- 现实参照系是 ICANN 和 TLD 治理——不是一家软件公司

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-3">

**关键区分**：Aave 可以把治理和运营分离到一家公司里；ENS 不能。ENS 的 DAO 不是为了"创新治理"而存在的——它是为了保证 .eth 名字受到保护、不受中心化实体控制而存在的。

</div>

---

# Karpatkey：金库管理的困境

<div class="mt-4 text-sm leading-relaxed">

ENS 的金库由 Karpatkey 管理——这家专业金库管理者同时服务多个 DAO。他们的工作在这期对谈中同时受到了**赞扬**和**尖锐批评**。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### Alex 的视角：透明之美

Alex 为链上金库的透明度辩护：

"Karpatkey 在处理金库时被绑了很多绳索——但这些绳索是美好的。因为资金全都链上透明，每一笔流动都可审计。他们有一套非常精巧的权限控制——哪些可以做、哪些不能做。"

对他来说，这种透明性是 ENS 区别于传统机构的核心——就像在交房产税时能亲眼看到每一分钱花到哪里。

</div>

<div>

### Nick 的视角：回报之痛

Nick 则更务实——或者说更沮丧。Karpatkey 的保守策略在纸面上表现糟糕：

- ETH 部分对标 ETH 基准，USD 部分对标 USD 基准——各自勉强跑赢基准一点点
- 年化回报 ~2-3%——**储蓄账户都可以做得更好**
- 任何投资策略变更都要说服 DAO（300 个互相不认同的人）

**"我们无法同时拥有两样东西：无法拥有一个 100% 链上的、保守投资组合，又让它能真正永久维持 ENS 的运营。"**

</div>

</div>

---

# ICANN 与"成为正式组织"的必要性

<div class="mt-4 text-sm leading-relaxed">

ENS Labs 历史上独自处理了许多对外接口任务，不是因为它们天然属于 Labs，而是因为没有其他组织在合适的位置上。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 为什么需要基金会

ICANN 是全球互联网域名系统的治理机构。ENS 需要与 ICANN 对话——讨论 .eth 与传统 DNS 的互操作性、防止域名冲突、维护用户安全。

Nick 的论点是：**这项工作应该由一个代表整个 ENS（不只是 Labs）的组织来做。** 基金会——它已经是 DAO 的法律外包层——是天然的选择。

"它不是要取代 DAO，而是要做一个 DAO 自己做不到好的事。"

</div>

<div>

### 被曲解的恐惧

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

恐惧是：ENS 会变成另一个 ICANN——一个遥远、官僚化、不透明的治理机构，与社区脱节。

Nick 的回应："我不希望 ENS 变成 ICANN——不是因为 ICANN 是邪恶的，而是因为我进入加密的初衷就是为了构建更好的去中心化治理结构。"

ENS 基金会的设计是反过来的：它受 DAO 约束、董事由 DAO 任命、金库链上透明。它不是 ICANN——它是 ICANN 的反面。

</div>

</div>

</div>

---

# 金库的初衷：为什么要有这个钱？

<div class="mt-4 text-sm leading-relaxed">

ENS DAO 的金库不是意外积累的——它是有意创建的 endowment，目标是确保 ENS 即使在收入中断的情况下也能长期运作。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 设计目标

注册费的收入波动很大——加密市场低迷时，名字注册量下降，收入也随之下降。endowment 的存在是为了**让 ENS 在熊市也能继续开发**。

更深层的目标是**自由**：endowment 应该让 ENS 能够独立决定名字的价格和结构，不受日常财务压力的约束。定价应该为了网络的健康——而不是为了维持运营。

</div>

<div>

### 现实冲突

但这产生了 Nick 指出的困境：**"我们越来越看到，不能同时拥有两样东西——一个 100% 链上的、极为保守的 endowment，和一个能真正永久维持 ENS 的 endowment。"**

如果必须在两者之间选择——在当前的加密市场环境下——Nick 的选择是：**让 ENS 继续运作的那个。**

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm">
<div class="font-bold text-lg">链上透明度</div>
"每笔支出可审计"——但限制了可以持有哪些资产
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-sm">
<div class="font-bold text-lg">永久性</div>
"无论如何 ENS 必须继续运作"——但保守策略无法跑赢通胀
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm">
<div class="font-bold text-lg">DAO 控制</div>
"金库由代币持有者共同管理"——但 DAO 永远倾向于增加支出
</div>

</div>

---

# 建设者的困境：谁真正在意？

<div class="mt-4">

Taylor 提出了本期最尖锐的观察之一：

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic mt-4">

"这是我作为创始人的一个最难的认知：你可以在团队中共共享所有细节，你可以从团队中获得比你聪明的人的输入。但**无论如何，当需要做出真正艰难的未来决策时，最终会落在一个人或几个人的头上。**"

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm">
<div class="font-bold text-lg">Bus 因子</div>
如果 Nick 被巴士撞了，ENS 会怎样？Alex 担心的就是这个问题——这本身也证明了对一个人的过度依赖。
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm">
<div class="font-bold text-lg">没有人比你更在意</div>
"无论怎样，没有人会像你一样关心这件事。这是冷酷的现实。"
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200 text-sm">
<div class="font-bold text-lg">不是批评者在建</div>
"任何在时间线上批评的人都可以轻松地偷走一堆钱然后消失。但他们没有。他们还在做节目、参与对话、试图把事情办对。"
</div>

</div>

---

# 为什么大家还在这里？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Nick：我还没放弃

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

"我还没有放弃 ENS 或 DAO 治理，也不打算放弃。我认为我们学到了 DAO 不擅长做什么——现在是时候从中吸取教训、修复这些问题，并继续为去中心化的共同未来而工作。"

</div>

他说服力比几年前弱了，但他想做一次真正的努力来扭转局面、聚焦重要的事、重新去中心化。"如果这不起作用，我们需要找到另一条仍然有意义地去中心化的路径。我不知道那是什么样子——但这将是我们接下来要对话的话题。"

</div>

<div>

### Alex：仍在为意义而战

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

"我是个死心眼。我做这一切是因为我仍然在我们的工作里找到意义——在过去十年里我们努力构建更好的治理方式和真正的去中心化。世界似乎转向了 AI，但我们知道我们搭建的这些东西仍然有价值：一个开放的账本，一个透明、不可腐败的组织。"

</div>

"那些 scammers 和 pumpers——那不是真正的我们。这就是为什么我仍然在这里说：这才是加密的真正本质。"

</div>

</div>

---
layout: two-cols
---

# 新的 ENS 治理模型

<div class="text-sm leading-relaxed">

Nick 和 Alex 的共识：分离关注点是出路。

- **ENS DAO**：保留代币治理，专注于任命基金会董事会成员、协议参数调整、战略大方向。不再管理日常预算分配。
- **ENS 基金会**：作为法律外包层和处理实际世界的接口（如 ICANN）。编制预算、审计资金使用、管理金库。对 DAO 负有受托责任。
- **ENS Labs**：专注于产品——V2 开发、时间线、技术架构、招聘。不参与治理决策。
- **社区团队**：子域名、生态集成、黑客松、公共物品——由基金会资助，由 DAO 问责。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ens-separation-model.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Alex 的愿景：每个部分各司其职

<div class="mt-4">

Alex 将治理改革的核心原则提炼为一句话：

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic mt-3">

"我们需要的是分离和专业化关注点。ENS DAO 应该只专注于治理——它选择基金会董事会成员。基金会只专注于预算编制、审计、确保钱花在正确的地方。然后它资助像 Labs 这样的团队——Labs 负责产品决策、时间线决策和招聘决策。每个部分做自己最擅长的事。我们不应该让 DAO 做产品决策，也不应该让 Labs 做治理决策。"

<div class="text-xs opacity-60 mt-1 not-italic">— Alex Van de Sande</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm">
<div class="font-bold text-lg">✗ DAO</div>
不做产品决策<br/>不做日常资金分配
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm">
<div class="font-bold text-lg">✗ 基金会</div>
不做协议治理<br/>不插手最终代码
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-sm">
<div class="font-bold text-lg">✗ Labs</div>
不做治理决策<br/>不控制金库
</div>

</div>

---

# 如果金库只有 $5,000

<div class="mt-4 text-sm leading-relaxed">

Kane 提出了一个发人深省的假设：如果 ENS DAO 的金库只有 $5,000，我们根本不会有这场对话。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 资金是假信号

"人们对 ENS DAO 的参与热情——那些愤怒的推文、那些声势浩大的讨论——本质上是关于钱的。不是关于协议。不是关于产品。"

真正推动 90% 治理参与的是第三个问题（金库分配），而不是前两个。但金库治理的关键问题在于：市场让人们看起来像在关心协议治理，其实他们在关心的是钱。

</div>

<div>

### 而产品仍然需要被人构建

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

"有人必须做这些事。ENS V2 不会自己出来。必须有人出现在 ICANN 的 Zoom 会议上——ICANN 不会喜欢随便两个人跑来开会。这些都是每天都在做的困难工作，没有其他人会去做。但这必须有人做。"

</div>

Taylor 对 Twitter 上"Nick 是坏人"叙事的反驳："你不能想要好的结果，又不想任何人拥有权力。有些时候，一个人或几个人需要有一些权力，才能把事情做好。"

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"Do you currently control 50% of the ENS tokens? No."
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Johnson，澄清他仅持有总量 3.2%，而非有效投票的 50%</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">
"We all drank the Kool-Aid."
<div class="text-xs opacity-60 mt-1 not-italic">— 共识：ENS 做 DAO 不只是为了合规，而是真的相信去中心化治理</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"There's strong financial incentive to sell something you got, especially if you got it for free, and none to participate in decentralized governance."
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Johnson，解释投票参与率低的根源</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"I don't want to become ICANN — not because ICANN is evil, but because I got into crypto to build better decentralized governance structures. I don't want to give up on that just yet."
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Johnson</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"If you ask people to vote, they always vote to increase the budget. But the revenue is not necessarily — so the pot is shrinking."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Van de Sande，DAO 预算永远扩张的结构性问题</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的——关于人、责任与去中心化：</div>

<div class="space-y-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"I've always said I don't really like speculation on names. So, you know, welcome new crew. Here is the old crew."
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Johnson，关于一直反对域名投机</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"No one's gonna care as much as you do. That's honestly, that's the harsh reality."
<div class="text-xs opacity-60 mt-1 not-italic">— Taylor Monahan，创始人无法逃避的负担</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"All the scammers and the pumpers, that's not who we are, right?"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Van de Sande，关于继续参与的理由</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"We've learned what DAOs can't do well, and it's time to learn from that and fix things and still work on a decentralized mutual future."
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Johnson，对 DAO 未来的总结</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"If the ENS DAO's treasury were $5,000, we wouldn't be having this conversation."
<div class="text-xs opacity-60 mt-1 not-italic">— Kane Warwick，揭示治理争议的本质</div>
</div>

</div>

---

# 我们学到了什么

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**参与率是幻觉。** 代币持有者不投票是因为投票没有直接财务回报。这不是 ENS 独有的问题——它是所有代币治理模型的固有缺陷。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**金库是蜜罐。** 大额资金池天然吸引那些想从中受益的人参与治理，并排斥那些只想保护协议的人。治理因此被资金分配政治吞噬。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**分离关注点可行。** 协议治理、金库管理、产品开发——放在同一个委员会结构里注定失败。分给不同的、相互问责的实体，各自专注自己的领域，才是出路。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**可信中立不可放弃。** ENS 的价值不仅来自代码（那是开源的），更来自以下保证：没有人能拿走你的 .eth。这一承诺必须由去中心化治理来支撑。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**建设者需要权力。** 确保优质产品被构建出来的方式不是消除所有权力，而是找到问责框架。某些时候，一个人或几个人需要拥有决策权——不然什么都不会发生。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**加密真正的人在做真正的事。** 在所有的 meme、scam 和 pump 下面，有一部分人仍然相信开放账本和透明组织。这就是 Alex 继续出现的理由——也是这场辩论值得展开的原因。

</div>

</div>

---
layout: end
---

# 治理不是目的，是手段

<div class="mt-12 text-lg opacity-80">

"我还没有放弃 ENS 或 DAO 治理，也不打算放弃。我认为我们学到了 DAO 不擅长做什么——现在是时候从中吸取教训，修复这些问题，并继续为去中心化的共同未来而工作。"

</div>

<div class="mt-6 text-sm opacity-60">

— Nick Johnson, ENS Labs 创始人

</div>

<div class="mt-12 text-xs opacity-40">
Uneasy Money · 2026 年 7 月
</div>
