---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Uneasy Money: Why the Broken Pre-IPO Secondary Markets Won''t Be Fixed Anytime Soon'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Uneasy Money

## Pre-IPO 二级市场为何崩坏，以及加密世界如何重新定义"所有权"

<div class="mt-6 text-sm opacity-60">
Kane Warwick · Taylor Monahan · Luca Netz<br/>
Uneasy Money · 2026 年 5 月
</div>

<div class="mt-10 text-xs opacity-40">
约 1 小时 16 分 · Unchained 播客网络
</div>

---

# 本期为什么值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Anthropic/OpenAI 叫停二级交易**
一个被 WhatsApp 群、SPV 嵌套和诈骗充斥的市场终于引爆了

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**合成永续合约入侵传统股权**
当 Hyperliquid 上出现 Anthropic 永续合约，Pre-IPO 公司的定价权彻底失控

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**为什么好公司不再上市了**
私人市场资金过剩，上市反而意味着失去对叙事的控制

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**四月：加密史上最惨黑客月**
6.25 亿美元、30 起事件——AI 辅助攻击正在改写安全规则

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**AI Agent 安全监控：90 秒 vs 12 小时**
Kane 用 AI Agent 做攻击检测的故事，展示了攻防的速度差

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Circle 发币 + Aave 法庭战**
上市公司的双轨套利 & 链上恢复 vs 法庭系统的碰撞

</div>

</div>

---

# 二级市场的需求悖论

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 需求端的狂热

- Anthropic、OpenAI 等公司长期不上市，公众渴望持有其股份
- 市场上出现了大量"帮你买到 Anthropic 股份"的中间人
- 从 LinkedIn 私信到 WhatsApp 群，到处都有人在兜售 Pre-IPO 份额

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Kane 的直觉</strong>：当有人向你兜售"只涨不跌"的东西时，你就该警觉了。
</div>

</div>

<div>

### 供给端的扭曲

- 这些公司本身不鼓励甚至禁止股份转让
- 但需求实在太大，市场自发创造供给——不管真假
- 结果：一个充斥着真假混合 SPV 的灰色市场

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
Kane 的论断：你可以通过两种方式满足市场——给对方真正想要的，或者卖给对方一块写着"Anthropic"的石头。后者更容易，利润也更高。
</div>

</div>

</div>

---

<div class="mt-2 text-xs text-gray-400 mb-1">市场结构</div>

# SPV 层层嵌套：从原始股份到"石头"

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<div class="text-sm leading-relaxed space-y-3">

**SPV（特殊目的实体）的嵌套链**是一个核心问题。原始投资者把股份放进 SPV → 切分出售 → 买入者再打包进新 SPV → 再切分 → 再出售……

每一层嵌套都增加对手方风险。当 Anthropic 宣布要"作废这些交易"时，链条最底端的人可能发现：自己买的 SPV 份额其实对应不到任何真实股份。

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关键问题</strong>：即使有人从 Forge 这样的正规平台买了份额，再转手到 WhatsApp 群里卖——你完全无从分辨。
</div>

</div>

</div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./spv-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 欺诈光谱：从 WhatsApp 到 Forge

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🔴 纯诈骗

WhatsApp 群、Facebook 帖子里的"我有人脉能帮你买 Anthropic 股份"

没有任何法律文件，没有任何 KYC——就是骗。

<div class="mt-2 text-xs opacity-60">
Taylor: "有些是 100% 纯欺诈。就是纯骗局。"
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 🟡 灰色地带

合法的持有人私下出售，但未经公司批准

操作协议可能允许，也可能禁止——取决于具体条款。如果允许，Anthropic 想叫停就更难。

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🟢 正规平台

Forge 等受监管的二级交易平台

提供 KYC、法律文件、合规流程——但即使这样，平台上的买家也可以把份额再转手到灰色市场。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Luca 的担忧</strong>：如果 Anthropic 连 Forge 上的交易都作废，那对整个二级市场生态将是巨大冲击——"几十亿美元的交易量，你告诉我这些都不算数？"
</div>

---

# Luca 的故事：Pudgy Penguins 的教训

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="text-sm leading-relaxed space-y-3">

### 第五位联合创始人的背刺

Pudgy Penguins 收购时，实际有五位联合创始人（对外说是四位）。种子轮完成之后，第五位创始人**背着 Luca** 开始兜售自己的股份，卖给一个"以坑创始人和项目方出名"的投资集团。

Luca 发现后大发雷霆——但问题是：**公司的运营协议确实允许了这种交易。**

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>核心教训</strong>：这是一个协议条款的问题。Luca 后来在 Igloo（他的新公司）的运营协议里明确规定：任何股份转让必须经他本人批准。"你要么跟全程，要么等大家一起退出时再变现。"
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>对 Anthropic 的追问</strong>：Anthropic 的运营协议里是否允许了这些二级交易？如果不允许（通常需要董事会批准），那叫停是合理的。但如果允许了…… Anthropic 可能要对后续的法律后果负责。
</div>

</div>

</div>

---

# 加密入场：Pre-Stocks 与合成资产的入侵

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Pre-Stocks（Solana）

据称有真实 SPV 包裹代币，但已经在链上以 **3 倍于实际融资估值** 的价格交易

当 Anthropic 实际估值为 8000 亿美元时，Pre-Stocks 上的隐含市值一度达到 1.4 万亿美元——纯粹的投机溢价

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### Eventuals（Solana）

**纯合成资产**——根本没有任何底层股份

买方和卖方之间的纯粹对赌：以预言机价格为锚，双方表达对 Anthropic 未来估值的不同看法

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### Hyperliquid 永续合约

永续合约的逻辑直接搬到了 Pre-IPO 股权上

"我全仓做多 Anthropic"——但这笔交易背后没有一纸法律文件，也没有任何实物交割

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Kane</strong>：Pre-Stocks 已经有现实世界的锚定（SPV），而 Eventuals 和永续合约是纯粹的对赌——"你只是在赌一个外生于你所用系统的价格"。这是 Polymarket 的逻辑，不是股权投资的逻辑。
</div>

---

<div class="mt-2 text-xs text-gray-400 mb-1">加密金融机制</div>

# 合成永续合约：永不交割的"股权"

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="text-sm leading-relaxed space-y-3">

### 从期货到永续：Arthur Hayes 的发明

传统期货**必须交割**：做多石油期货，到期了你可能真的要接收一桶桶原油。

永续合约通过**资金费率机制**实现连续结算：多头向空头支付资金费（或反过来），价格偏离预言机越远，资金费率越高——以此将价格拉回锚定。

<p class="text-xs opacity-60 mt-1">这就是为什么你能"永远持有"而无需担心交割日期。</p>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-3">
<strong>对 Pre-IPO 公司的影响</strong>：Anthropic 无法阻止任何人创建一个关于它估值的永续市场。创建市场的成本几乎为零。
</div>

</div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./synthetic-perps.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 桶子店：1900 年代的合成资产原型

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 历史上的"桶子店"

在 20 世纪初的美国，普通人很难开证券账户。于是出现了"桶子店"（Bucket Shop）：

- 你去店里，**不是**买入密西西比铁路公司的真实股票
- 你是在**和店主对赌**——赌这只股票涨还是跌
- 店主承担你的对手方风险，你写一张纸条就算完成交易

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这本质上就是一种合成资产：你从未拥有过底层股票，你只是在做一个基于外部价格的赌注。
</div>

</div>

<div>

### 今天的链上版本

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Polymarket</strong>：两个独立的二元赌注，靠套利维持对齐。与永续合约的区别在于它需要最终"结算"——事件结果确定后。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>永续合约</strong>：不需要结算事件。只要有人愿意在两边下注，市场就能永远运行。资金费率就是它的"持续结算"机制。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>关键区别</strong>：Polymarket 最终有"答案"（谁赢了选举）；Anthropic 永续合约永远不会"交割"——除非公司 IPO，届时市场价格会与真实股价趋同，但合约本身仍然不涉及真实股票。
</div>

</div>

</div>

</div>

---

# 合成市场的哲学问题：谁来决定价格？

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div>

### 做市机制

假设 Kane 认为 Anthropic 值 9000 亿美元（做多），Luca 认为 AI 是骗局（做空）。两人各下注 100 万美元。

然后 Taylor 进场——她不是来估值的，她就是想"买尽可能多的 Anthropic"。她一路吃掉所有卖单，从 1.1 万亿买到 10 万亿。

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>结果</strong>：价格被 Taylor 的个人意愿推到了 10 万亿——这个价格跟 Anthropic 的真实价值已经没有任何关系。它只是反映了 Taylor 愿意付多少钱来表达她的信念。
</div>

</div>

<div>

### 这就是 Crypto 的逻辑

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>预言机锚定</strong>：永续合约通常会以"最近一轮融资估值"作为预言机基准，资金费率会把价格拉回锚定值附近——但当交易量足够大时，市场会脱离锚定。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>流动性的双刃剑</strong>：永续合约的"天才之处"在于，你永远可以退出——因为市场足够流动。但这正是问题：一个超级流动的合成市场给了全世界一个"Anthropic 的实时价格"，而 Anthropic 对此毫无控制权。
</div>

</div>

</div>

</div>

---

<div class="mt-2 text-xs text-gray-400 mb-1">市场结构</div>

# 为什么好公司再也不想上市了

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="text-sm leading-relaxed space-y-3">

### 旧世界的逻辑

过去，如果你需要 10 亿美元来做一件事，唯一的出路是 IPO——公开市场是唯一能提供这种流动性的地方。

**现在不是了。** 私募市场有足够的资金。Sand Hill Road 和主权基金能开出比公开市场更大的支票。

### 不上市的"隐性溢价"

- 估值只涨不跌——没有公开市场每天给你标价
- 投资者永远开心——只要不做 down round
- 员工没有实时"记分牌"——每隔 6 个月发现自己变富了 5%、10%、50%
- 不用应付散户和季报压力

</div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./ipo-incentives.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 连续定价的噩梦：当员工开始刷"股价"

<div class="mt-6 text-sm leading-relaxed space-y-4">

### 假设这个场景

Anthropic 以 8000 亿美元估值完成了一轮融资。同时，Hyperliquid 上的 Anthropic 永续合约每天有 50 亿美元的交易量。

**某天，Anthropic 和特朗普政府发生公开冲突。**

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-center">

<div class="text-4xl font-bold text-red-600 mb-2">↓50%</div>
<div class="text-sm">永续市场从 8000 亿<br/>跌到 4000 亿美元</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">

<div class="text-4xl font-bold text-yellow-600 mb-2">😰</div>
<div class="text-sm">员工看着自己的<br/>纸面财富缩水一半</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

<div class="text-4xl font-bold text-orange-600 mb-2">📉</div>
<div class="text-sm">"别跟特朗普吵架了<br/>我在变穷！"</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Kane 的结论</strong>：这对 Anthropic 和任何 Pre-IPO 公司来说都是无法阻止的。"我很确定这就是市场的发展方向。Hyperliquid 或其他永续市场会做到——我们会看到一切资产都有连续定价。这就是我们活着的世界。"
</div>

</div>

---

# 回到 19 世纪：私人财富时代

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### 历史重演

现在的市场结构正在倒退到 1800 年代——股票市场出现之前的世界：
- 所有财富都是私人的
- 普通人无法投资任何东西
- 大公司全是私人持有

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
Kane 认为，这个趋势的终点是：**世界上最有价值的公司将成为一家私人公司**——到了那一天，市场"显然已经坏掉了"。
</div>

</div>

<div>

### Matt Levine 的十年警告

Bloomberg 专栏作家 Matt Levine 已经讨论了十年：**公开市场作为主要流动性来源的退位，已经破坏了市场结构。**

激励机制完全倒挂：
- 私人市场有足够多的钱
- 公开市场意味着失去对叙事的控制权
- "为什么我要去应付散户投资者？"

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
除非政府强制性规定——"你必须 IPO"——否则这个趋势不会逆转。市场本身已经无法提供足够的激励让人上市。
</div>

</div>

</div>

---

# 四月：加密史上最惨黑客月

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 💰 总损失

<div class="text-5xl font-bold text-red-600 my-2">$625M</div>
<div class="text-xs opacity-70">仅加密领域</div>
<div class="text-xs opacity-50 mt-1">加上传统领域超过 10 亿</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 📊 事件数量

<div class="text-5xl font-bold text-orange-600 my-2">68</div>
<div class="text-xs opacity-70">起安全事件</div>
<div class="text-xs opacity-50 mt-1">平均每天超过 2 起</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 🎯 攻击类型

<div class="text-sm mt-3 space-y-1">
<div>• CEX 基础设施攻击</div>
<div>• DeFi 智能合约漏洞</div>
<div>• 私钥泄露</div>
<div>• AI 辅助的网络钓鱼</div>
<div>• 供应链入侵</div>
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Drift 被黑 2.85 亿美元</strong>——Kane 说他已经"完全忘了 Drift 这回事"，因为后续接连发生了太多事件。Helldao 和 Aave 的问题吸引了全部注意力。当你被黑 10 万的当天正好有人丢了 2 亿，你甚至不会被注意到。
</div>

---

# AI 辅助攻击：Google 的最新发现

<div class="mt-6 text-sm leading-relaxed space-y-4">

### 一个 LLM 写的 Python 漏洞利用

Google 云安全博客披露：他们发现了一个**由 LLM 生成的 Python 漏洞利用程序**，绕过了某个开源管理工具的双因素认证（2FA）。Google 在大规模利用活动启动**之前**就将其阻断。

### Taylor 的推测：本地 Gemini API 的滥用

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

过去一年，Google 在 Android、Chrome 和操作系统中逐步内置了 Gemini 的访问能力——不仅是用户去 gemini.google.com 打字，而是**浏览器和系统内部的 API**。

理论上，这种能力可以用于安全：每次用户访问一个网站，本地 AI 可以实时判断"这个网站是恶意的概率有多大？"

但攻击者反过来使用同样的 API：调用本地 Gemini，让它"找出所有的攻击面""找出所有的私钥"——**在设备上实时构造恶意软件**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>Kane 的担忧</strong>：我们还没到"系统中存在足够多持续运行的自主 AI Agent 以至于它们可以被劫持"的阶段——"这将是一个全新的攻击向量。"而当这些 Agent 负责编写 99% 的代码时，人类根本不可能审查所有代码——只能靠另外的 Agent 来审查。
</div>

</div>

---

# 供应链攻击：开源维护者的软肋

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

### XZ 案例的启示

Taylor 回顾了著名的 XZ 供应链攻击：攻击者通过 GitHub Actions 的复杂操作植入后门。一旦成功植入，恶意代码会：

1. 抓取所有环境变量和 API 密钥
2. 以蠕虫方式扩散到所有关联仓库
3. 从个人设备上窃取数据
4. 持续外传到 C2 服务器

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
这个过程可能持续数天，非停止地缓慢扩散——这种"慢动作"攻击反而是早期检测系统能介入的机会。
</div>

</div>

<div>

### 开源维护者 = Crypto 用户

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

Taylor 指出一个被忽视的事实：
> "有人终于意识到了：开源维护者的去中心化本质，和 Crypto 人群一模一样。他们在个人设备上跑代码，没有 CrowdStrike，没有正式安全流程。"

很多故事都是："哥们半夜被朋友的电话叫醒，发现自己的仓库被黑了，正蠕虫式感染所有人。"

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>真正的黑天鹅</strong>：Kane 说，毁灭世界的不会是从核弹开始——它是某个疯狂的黑客攻击。"我们只是在不断碰运气。"
</div>

</div>

</div>

---

<div class="mt-2 text-xs text-gray-400 mb-1">安全实践</div>

# 安全范式转变：从"防住"到"遏制"

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="text-sm leading-relaxed space-y-3">

### 旧范式（已失效）

- 智能合约审计
- 前置代码审查
- 权限控制

Taylor 直言：**"人类从来就不擅长一次性把所有事情做对。"** 智能合约审计的历史就是最好的证明。

### 新范式（正在进行）

必须假设**系统总会在某个点被攻破**。关键是：

- 分层隔离，防止横向移动
- 外挂的暂停/熔断机制
- **在数据被外传之前的最后一刻阻断**

</div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./blast-radius.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# AI Agent 做安全监控：90 秒 vs 12 小时

<div class="mt-6 text-sm leading-relaxed">

### Kane 的真实故事

Synthetix 的 Solana 账户赞助计划长期被"慢速 draining"攻击困扰——攻击者申请赞助、获得少量 SOL 作为 gas 费，然后在两天内慢慢把钱转走，完全淹没在正常活动中。**一个周末的攻击持续了 12 小时，没有一个人类注意到。**

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 人类的方式

- 写监控规则
- 看数据面板
- 凭经验猜测攻击模式
- 12 小时后才发现异常

</div>

<div>

### AI Agent 的方式

Kane 和工程师坐下来，把**所有数据**丢给一个 Agent：
- Agent 自己分析后提出：**输入输出的价格差异**是最佳检测指标
- 他们甚至不知道数据库里已经在追踪这个指标
- Agent 接入 Slack，异常时实时告警

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>最搞笑的部分</strong>：Agent 回测了最近四次事件——"好消息是，这个方法每次都检测到了。坏消息是，其中有两次花了……<strong>大约 90 秒</strong>。"Kane 的反应："你得做得更好啊兄弟。"Agent 的回复本质上就是——"你们花了 12 个小时才发现，我 90 秒就抓到了。"
</div>

---

# 供应链 vs 闪电贷：两种攻击时间线

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### ⚡ 闪电贷攻击：单笔交易

- 所有步骤在一笔交易中完成
- 90 秒的检测等于没用——钱已经没了
- 解决方案：必须重构协议，**不能让所有操作在一笔交易内完成**
- 两个关键步骤之间要有"间隔"，给检测系统介入的时间

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
这对 DeFi 来说是一个根本性的架构挑战。
</div>

</div>

<div>

### 🐛 供应链攻击：慢扩散

- 从植入到大规模利用有**时间窗口**
- 恶意代码在悄悄抓取 API 密钥、扩散到更多仓库
- 90 秒检测在供应链场景下**非常有价值**——可能只有少数人已更新受影响版本
- CrowdStrike 等工具的工作方式：在恶意软件"触碰密钥库"时阻断——即使恶意软件已经落地，黑客也拿不到数据

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">
这就是"遏制爆破半径"的实战逻辑：<strong>阻止数据外传，即使系统已被入侵</strong>。
</div>

</div>

</div>

---

# Circle 发币：上市公司 + 代币 = 双轨套利？

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

### 发生了什么

Circle（USDC 发行方，已上市公司）突然宣布了 **2.2 亿美元的 Arc 代币融资**——连三位主持人都感到意外。

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">
<strong>Luca 的解读</strong>："Circle 的股票买家和 Arc 代币买家是**两个完全不同的群体**。如果你能同时从两群人手里拿钱——为什么不呢？"
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3">
<strong>商业逻辑</strong>：凭空创造代币 → 加入资产负债表 → 推高收益。如果你有这个杠杆，你会不拉吗？
</div>

</div>

<div>

### 每个稳定币都要有自己的链

<div class="space-y-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>行业趋势</strong>：Circle（Arc）、Stripe 都在建自己的 L1——"每个稳定币发行方都需要自己的链"这个理论，一年前还不存在。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Kane 的视角</strong>：支付网络是 TradFi 最赚钱的生意之一。如果你拥有人们互相转账的"铁轨"，就能捕获大量价值。这是对 OG 以太坊理念的背离——但现在就是这样。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>对 ETH/SOL 的影响</strong>：John Charbonneau 说 Stripe 和 Circle 建自己的 L1 是"利好以太坊"——这是"疯狂级别的自我安慰"。这些链的价值只会流向 Circle 和 Stripe 的股东。
</div>

</div>

</div>

</div>

---

# Aave / Helldao 法庭战：链上恢复 vs 法律系统

<div class="mt-4 text-sm leading-relaxed">

### 案件进展

法院裁定 Arbitrum 可以将资金转移给 Aave 用于恢复分配。**但 Aave LLC（资金最终落脚点）仍受法院管辖。**

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**之前的问题**

Arbitrum DAO 被律师在论坛上"送达"法院文件，要求所有人暂停治理流程。一个 DAO 怎么在美国法院出庭？这本身就很荒谬。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**现在简化了**

Arbitrum 的人可以继续做治理决策（恢复分配），而 Aave 的律师可以代表所有用户与法院对抗——不用再纠结"DAO 的法律地位"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**真正的战场**

法院是否会判定**朝鲜黑客组织（DPRK）对被盗资金拥有所有权**？这将是核心争议点。Gerstie 律所试图以"受害者代表"的身份插队，谋取利益。

</div>

</div>

</div>

---

# "这是好技术"：当法官理解链上恢复

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### Gerstie 律所的话术

在上周的口头辩论中，Gerstie 律师提出了一个看似合理但实则荒谬的主张：

> "你们甚至不知道这些用户是谁。怎么归还？他们必须亲自出庭，证明自己的身份。"

对 Crypto 社区来说，这个逻辑是颠覆性的——**链上地址本身就是所有权证明，比任何法院系统能做到的更精确、更公平。**

</div>

<div>

### 链上恢复为什么更公平

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
基于攻击发生时的**实际链上所有权**进行 1:1 映射恢复——这是密码学可验证的，不需要任何人出示护照。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
如果要求每个人亲自出庭证明身份，反而会**排除大量真实的受害者**——因为不是每个人都能出现在美国法院。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Taylor 的评论</strong>：如果法官真正理解了链上恢复流程的运作方式——基于事实的、透明的、完美的 1:1 映射——"这会非常有趣"。因为这比世界上任何其他恢复方式都好得多。
</div>

</div>

</div>

</div>

---

# Crypto 正在"渗透"现实世界

<div class="mt-6">

### 三条主线贯穿本期对谈

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**1. 定价权失控**

当 Hyperliquid 上出现 Anthropic 永续合约，Pre-IPO 公司失去了对自身估值的叙事控制权。Crypto 的逻辑正在"泄漏"到传统金融。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**2. 安全攻防升级**

AI 让攻击者和防御者都在进化。但真正的解决方案不是"防得更牢"——而是假设一定会被攻破，然后遏制损失范围。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**3. 公共市场退位**

最优秀的公司不再需要公开市场。这个趋势会持续到"世界最有价值的公司是私人的"那一天——届时整个市场结构将不得不改变。

</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"你可以通过两种方式满足市场——给他们真正想要的，或者卖给他们一块写着 Anthropic 的石头。后者更容易，利润也更高。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane，谈 Pre-IPO 二级市场的本质</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"你永远不想做的是 KYC 你的股东吗？你最不想看到的是朝鲜买了 5 亿美元——即使协议允许。"
<div class="text-xs opacity-60 mt-1 not-italic">— Luca，论为什么二级市场需要受控</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"不流动性有溢价。投资者永远开心，因为价格总是涨。员工每隔几个月就发现自己更富了。现在再没有理由去 IPO 了。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane，论为什么公司不再上市</div>

</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">接上页：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Anthropic 对此毫无控制权。这必将发生。我很确定这就是市场的发展方向——一切都会有连续定价。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane，论永续合约的不可阻挡</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我们得假设系统总会在某个点被攻破。你仍然要尝试把安全做好，但遏制爆破半径才是强制性的——在最后一刻有人介入说'开玩笑的，你不能拿走那些东西'。"
<div class="text-xs opacity-60 mt-1 not-italic">— Taylor，论安全范式转变</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"它花了 12 小时人类都没注意到。AI 说'我 90 秒就能抓到'——我说你得做得更好。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane，讲 AI Agent 做安全监控的故事</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"这不是核弹——真正的黑天鹅会是某个疯狂的黑客攻击。我们只是在不断碰运气。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane，论系统性的安全脆弱性</div>
</div>

</div>

---

<div class="mt-2 text-xs text-gray-400 mb-1">本期涉及</div>

# 你刚刚了解了

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="space-y-3">

<div class="flex items-center gap-3 p-3 rounded bg-blue-50">
<span class="text-2xl">🏦</span>
<div>Pre-IPO 二级市场的 SPV 嵌套结构和欺诈光谱</div>
</div>

<div class="flex items-center gap-3 p-3 rounded bg-purple-50">
<span class="text-2xl">📊</span>
<div>合成永续合约如何为"一切资产"创造连续定价</div>
</div>

<div class="flex items-center gap-3 p-3 rounded bg-orange-50">
<span class="text-2xl">🏛️</span>
<div>为什么公开市场不再是公司的最优选择</div>
</div>

</div>

<div class="space-y-3">

<div class="flex items-center gap-3 p-3 rounded bg-red-50">
<span class="text-2xl">🔓</span>
<div>AI 辅助攻击的崛起和"遏制爆破半径"的安全新范式</div>
</div>

<div class="flex items-center gap-3 p-3 rounded bg-green-50">
<span class="text-2xl">⚖️</span>
<div>链上恢复分配 vs 传统法庭系统的碰撞</div>
</div>

<div class="flex items-center gap-3 p-3 rounded bg-yellow-50">
<span class="text-2xl">🤖</span>
<div>AI Agent 在安全监控中 90 秒 vs 12 小时的速度差</div>
</div>

</div>

</div>

---

layout: end
---

# 谢谢观看

<div class="mt-10">

<div class="text-3xl font-bold">Uneasy Money</div>
<div class="text-lg opacity-60 mt-4">Kane Warwick · Taylor Monahan · Luca Netz</div>

<div class="mt-8 text-sm opacity-50">
链上发生的事，不会只留在链上。
</div>

</div>
