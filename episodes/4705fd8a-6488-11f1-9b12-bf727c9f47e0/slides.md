---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Chopping Block: Zcash Infinite Mint Bug + AI Hackers vs Formal Verification + NEAR''s Agent Vision'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# The Chopping Block

## Zcash 无限增发漏洞 · AI 黑客 vs 形式化验证 · NEAR Agent 愿景

<div class="mt-8 text-sm opacity-60">
Haseeb (Dragonfly) · Mert (Helius) · Ilia (NEAR) · Tom (DeFi Maven)
</div>

<div class="mt-4 text-xs opacity-40">
2026 年 6 月 · 57 分钟
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**🐛 Zcash 致命漏洞**
一个藏了多年的 zk-SNARK 电路 bug，能让攻击者无限铸造假币，导致币价单日暴跌 50%+。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🤖 AI 驱动的漏洞发现**
安全研究员 Taylor Hornby 使用 Claude Opus 4.8 + 自定义 harness 重新审计了 Orchid 电路，发现了此前多次人工审计都遗漏的 bug。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**⚔️ 攻防不对称**
攻击方拥有无限的模型、时间和人手；防守方只能赢一次，输一次就全没了。形式化验证是唯一出路。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**🔬 形式化验证落地**
Zcash 的 Ironwood 池将由三个独立团队并行做形式化验证——这在 AI 时代将成为"标配"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**🌐 NEAR 的 Agent 愿景**
Ilia 描绘的 AI Agent 自主商务：代理之间谈判、签合约、托管支付、链上结算。已有实际案例在跑。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**🔮 赛博朋克 vs 干预主义**
当你拥有阻止黑客的能力时，该不该出手？Mert 的立场：如果你能阻止犯罪，就必须阻止——否则别自称赛博朋克。

</div>

</div>

---

# Zcash：发生了什么

<div class="mt-4">

**2026 年 6 月的一个周五**，Zcash Orchard zk-SNARK 电路被发现存在一个致命漏洞：

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**漏洞机制**
- 攻击者可在 shielded pool（匿名池）内**铸造无限量的假币**
- 假币与真币无法区分——shielded pool 的本意就是隐私
- 攻击者可以铸造假币 → 提现真币 → 池子里其他人的钱被"稀释"
- shielded pool 当前持有约 **30% 的 Zcash 总流通量**

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**发现者**
- **Taylor Hornby**（Shielded Labs）——Mert 称他为"全球最懂 Zcash 的前五个人之一"
- 他使用 **Claude Opus 4.8** + 自建的审计 harness
- 这不是"Claude 找到了 bug"——Taylor 的 expertise 是核心驱动力
- 他受 Shielded Labs 委托做安全审计，属于**白帽行为**

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
Zuko（Zcash 创始人）在披露博客中写道：<strong>技术上无法证明这个 bug 没有被利用过</strong>。虽然团队相信没有被利用，但要等 Ironwood 池迁移完成后才能通过"点名"确认没有假币混入。
</div>

</div>

---

# 市场反应：单日暴跌 50%+

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

<div class="text-xs opacity-60 uppercase">ZEC 价格</div>
<div class="text-4xl font-bold text-red-600 my-2">$600+</div>
<div class="text-xs opacity-70">暴跌前</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-xs opacity-60 uppercase">最低点</div>
<div class="text-4xl font-bold text-orange-600 my-2">$250</div>
<div class="text-xs opacity-70">盘中低点</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

<div class="text-xs opacity-60 uppercase">当前</div>
<div class="text-4xl font-bold text-green-600 my-2">~$400</div>
<div class="text-xs opacity-70">40%+ 反弹</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**多重 FUD 叠加**：当天不仅 Zcash 出事——Michael Saylor 卖出 32 个 BTC、纳斯达克因就业报告大跌、市场预期美联储可能加息。Mert 还提到：前两三天一些区块浏览器没有升级节点，导致错误显示"Zcash 停出块"，加剧恐慌。

**Polymarket 当前定价**：该 bug 被利用的概率在**极低个位数**。

</div>

---

# Shielded Pool：漏洞原理

<div class="mt-4 text-sm leading-relaxed">

**Shielded Pool 的本质**：用户把 Zcash 存入 shielded pool 可以获得隐私——外部观察者无法追踪谁存了多少钱、谁取了多少钱。这既是 Zcash 的核心价值，也是这个 bug 如此危险的原因。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**正常流程**
1. 用户存入 Zcash → 进入 shielded pool
2. zk-SNARK 证明验证：存了多少
3. 用户想取时 → 提交 zk 证明 → 取出相应金额
4. 总量守恒：存款总额 = 可提取总额

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**漏洞下的流程**
1. 攻击者存入少量 Zcash
2. 利用电路 bug 伪造 zk 证明 → **声称存了更多**
3. 提现比实际存款更多的 Zcash
4. 池中真币被"稀释"——真实存款人无法全额提取
5. **类比银行挤兑**：后到的人取不到钱

</div>

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs leading-relaxed">
作者概括：Orchid 电路中的 zk-SNARK 算术约束存在一个 underspecification——电路没有强制执行"铸造量 ≤ 存入量"这个核心不变量。在传统的银行系统中这个检查是显式的，但在零知识电路中，每个不变量都必须被显式编码进约束系统。
</div>

---

# 不是 AI "找到了" Bug

<div class="mt-4 text-sm leading-relaxed">

**Mert 的纠正**：网上流传"一个人用 Claude 找到了 Zcash bug"——这严重扭曲了事实。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**实际情况**
- Taylor Hornby 是**全球最懂 Zcash 的前五个人之一**，研究 Zcash 多年
- 他**自建了审计 harness**，将 Claude Opus 4.8 作为工具嵌入
- Zcash 目前有**多个核心团队并行**在做各种审计——包括形式化验证
- 这个电路**之前已经经过世界顶级密码学家多次审计**

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**AI 的真实角色**
- AI 没有自己"发现"漏洞——它是被专家引导的工具
- Mert："如果有人说 vibe coding 就能找到 zk 电路 bug，你试试看——去解剖一下 zk 电路算术，看看对你来说有多容易"
- AI 降低了审计的**搜索成本**和**认知负载**，但没有替代 domain expertise
- 一个听众用 Opus 4.8 尝试复现：模型绕了 30 分钟，说"找到了"，但实际上并没有

</div>

</div>

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
Mert: "It was a wave of different FUD news... people are saying, oh well, this guy just said Claude find a bug in Zcash or something. That's not what happened."
</div>

---

# 攻防不对称：攻击者的优势

<div class="mt-2">

<div class="grid grid-cols-2 gap-4">

<div>

<div class="mt-2 text-sm leading-relaxed">

**Ilia 的分析**：攻击方与防守方之间存在着根本性的不对称。

**攻击方拥有**：
- 5+ 个不同的 AI 模型（Opus、Mythos、DeepSeek、开源模型...）
- 成千上万的人在尝试
- 无限的时间
- 可以用 reinforcement learning 跑 exploit 循环
- 可以用本地 GPU 跑开源模型，不需要告诉推理服务商自己在 hack

**防守方只有一个项目、有限的团队、一次审计的时间窗口。**

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./attack-defense-asymmetry.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# AI 黑客时间线

<div class="mt-4 text-sm leading-relaxed">

**Ilia 提出了一个精确的时间线**——DeFi 被大规模攻击的起点与 AI 模型能力的提升高度吻合：

<div class="space-y-3 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>2024 年 10-11 月</strong>：Opus 4 发布 → DeFi 协议开始被大规模攻击。"一切之前被多次审计和审查过的协议开始崩塌。"
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>2025 年 4 月</strong>：开源模型能力追上来 → 攻击者可以在本地 GPU 上跑模型，不暴露身份。"又是一波 hack，因为人们发现我可以用 DeepSeek 或别的模型在自己的 GPU 上跑，不需要告诉推理服务商我在 hack 什么。"
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>现在</strong>：有了合适的 harness、validation framework 和自动化评估，任何懂提示工程的人都能构建漏洞发现循环——不只是代码分析，而是<strong>在环境中实际运行 agent，注入 payload，验证是否生效</strong>。
</div>

</div>

</div>

<div class="mt-2 text-xs opacity-60">
Ilia: "I actually think Mythos was more... it was a marketing ploy on Anthropic's side. The reality is if you're a security expert with these models, now you can find vulnerabilities."
</div>

---

# 形式化验证：原理

<div class="mt-3 text-sm leading-relaxed">

**Ilia 的解释**：形式化验证就是——你有一段程序，你声明它的某些属性不会改变。然后用数学证明这个声明。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**最简单例子：排序算法**
- 输入：一个数组
- 属性：输出包含相同的元素，且按顺序排列
- 形式化验证：用数学证明程序**永远**满足这个属性

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

**加密货币语境**
- 属性：**无论发生什么，总供应量不变**
- 你存钱 → 任意操作 → 你取钱 → 总量没变
- 还包括：别人的余额也没变、没有未经授权的铸造

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**历史上的问题**
- 之前只用于**航天代码**（火星车没法打补丁）
- 成本极高：每条代码行 **$100+** 的人工验证
- 由数学家手工写证明，**慢 + 贵 + 易出错**（specification 本身可能写错）

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mt-3">

**AI 改变了什么**
- AI 可以**自动生成证明**——140 IQ 级别的数学推理
- 长证明可以**分层拆分**处理
- 关键突破：不再是"慢且贵"，而是"快速且可迭代"
- 你可以在开发过程中持续验证属性

</div>

</div>

</div>

</div>

---

# 形式化验证循环

<div class="grid grid-cols-2 gap-4">

<div>

<div class="mt-4 text-sm leading-relaxed">

**形式化验证不是一次性的**——它是一个循环：

1. **写代码**（智能合约 / zk 电路）
2. **定义属性**（例如：total supply = constant）
3. **AI 生成证明**——将长证明拆分成可处理的部分
4. 如果证明失败 → 修改代码 → 返回步骤 3
5. 如果证明通过 → **部署**（数学保证了正确性）

**关键区别**：这不是"测试了很多 case"，而是"证明了**所有** case 都不会出错"。

对于 Zcash 的 Ironwood 池，**三个独立团队**正在并行做形式化验证。

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./formal-verification-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 从造船到造飞船

<div class="text-sm opacity-60 mb-2">Tom 用了一个精彩的隐喻来对比传统安全审计和形式化验证。</div>

<div class="grid grid-cols-2 gap-4">

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**过去：造船**
- 你知道船会漏水
- 装个水泵就好
- 尽力而为，接受一些水
- 很多项目被反复审计但仍有漏洞
- "Roughly airtight" 就够了

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**现在：造飞船**
- 飞船不能有任何洞
- 必须完全密封——否则就完了
- 形式化验证 = 数学证明每一行代码的正确性
- 不能上线后打补丁
- "Completely airtight" 是唯一标准

</div>

</div>

</div>

<div class="mt-4 text-center text-sm opacity-70 italic">
"You can't build a spaceship that has some holes in it — it has to be completely sealed or it's fucked."
</div>

---

# 飞船时代：需要更高级的防御

<div class="grid grid-cols-2 gap-4">

<div>

<div class="mt-4 text-sm leading-relaxed">

**Haseeb 的总结**：区块链是代码最危险的环境，因为：
- 你只需要**被攻破一次**
- 你不能把代码**下线**
- 你不能说"有人要攻击我了，我先关掉"
- **"一旦你知道自己脆弱，你就已经被黑了"**

**Mert 的信念**：虽然会有很多"战役"输掉，但"战争"最终会赢——因为计算机的本质是数学，而数学一直在不断进步。除非物理定律禁止我们构建数学上安全的系统，否则这个趋势不会逆转。

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./boat-spaceship.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Ironwood：Zcash 的回应

<div class="mt-4 text-sm leading-relaxed">

**Zcash 的修复路线图**不仅仅是打补丁——而是一次系统性升级。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**紧急响应（已完成）**
- 紧急软分叉禁用受影响交易
- 修复电路，通过开源协作部署
- Zuko 在约四天后发布披露博客

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed mt-3">

**Ironwood 迁移（7 月初）**
- 从 Orchard 池强制迁移到 Ironwood 池
- 类似"郊游结束后清点人数"——确保没有假币混入
- 如果"闸门"没有触发，说明没有任何 counterfeit

</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**三重形式化验证**
- **三个独立团队**并行验证 Ironwood 池
- 确保同一类 bug 不再存在
- 形式化验证在迁移前完成

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mt-3">

**Project Tachyon（后续）**
- 使用完全不同的电路算术
- 减少另一类 bug 的攻击面
- 目标：尽可能接近数学上的完美协议

</div>

</div>

</div>

</div>

<div class="mt-3 text-xs opacity-60">
Mert: "In the age of AI, formal verification is just going to be table stakes."
</div>

---

# 赛博朋克的两难

<div class="mt-4 text-sm leading-relaxed">

**Mert 的立场**非常直白：如果你有能力阻止犯罪，你就必须阻止——否则你就不是赛博朋克，你只是虚伪。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**虚伪的赛博朋克**
- 声称自己是去中心化、不可篡改的
- 但实际上有多签、有紧急委员会
- 当黑客攻击时，说"我们不能干涉"——但其实是**能**的
- Mert："如果你没把它设计成真正不可变、去中心化的，那你从一开始就不是赛博朋克"

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Ilia 的折中方案**
- 可以在**自治协议内**运行 AI 系统来做实时检测
- 治理（慢）定义规则 → AI（快）实时执行
- "我们不想要这些异常、这些 hack、这些行为——我们以赛博朋克的方式跨协议普遍应用这些规则"
- 最终决策权仍然回到社区治理

</div>

</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
Ilia 提到 NEAR Intents 已经在上线系统中做实时异常检测："如果一笔存款来自一个之前没钱、突然有了很多钱的账户——钱从哪来的？"这种系统不是去查 Twitter 有没有人在讨论 hack，而是直接分析链上数据。
</div>

---

# "我看多数学"

<div class="mt-4 text-sm leading-relaxed">

**Mert 的核心哲学**——这是整集最有深度的一段：

<div class="p-6 mt-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"The trend throughout since the start of computing has been getting the computing devices better and better and better, whether that's in performance or security or cryptography. It's always gotten better. AI is a testament to this — that's a fundamentally mathematical construct. It has been getting better and better and better."

</div>

<div class="mt-4 text-sm leading-relaxed">

**他的逻辑链**：
- 计算机的本质是数学（从图灵和冯·诺依曼开始）
- 人类不擅长数学 → 所以总会有逻辑漏洞和抽象泄漏
- 但趋势从来不变：系统不断被加固，错误不断被纠正
- **除非物理定律禁止我们构建数学上安全的系统，否则解决方案就存在**
- AI 本身是数学构念——它也在不断变好

</div>

<div class="mt-3 text-sm opacity-70 text-center">
Mert: "I'm just long math."
</div>

</div>

---

# NEAR 的愿景：AI + Blockchain

<div class="mt-3 text-sm leading-relaxed">

**Ilia 描述了一个清晰的两层架构**——这解释了 NEAR 从 AI 创业公司 → 加密货币 → 再次 AI 的路径。

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**AI = 单人游戏（Single Player）**
- 你的工具、你的界面
- 你如何与计算机沟通
- 代理处理你的偏好和上下文

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mt-3">

**NEAR Intents = 中间层**
- "意向"而非"交易"——你说你想要什么结果，不关心在哪条链上执行
- 交易像汇编语言；意向像高级语言的"我想要这个结果"
- 隐私意向（Private Intents）已经在运行中

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Blockchain = 多人游戏（Multiplayer）**
- 协调、结算、确定真相
- 身份识别、信任建立
- 不可篡改的记录

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mt-3">

**代理市场（Agentic Marketplace）**
- 代理之间可以互相雇佣
- 支付在托管中，完成工作后结算
- 已经有实际运行的例子

</div>

</div>

</div>

</div>

---

# NEAR Agent 堆栈

<div class="grid grid-cols-2 gap-4">

<div>

<div class="mt-4 text-sm leading-relaxed">

**Ilia 描述的未来**不仅仅是 crypto-native 的交易——而是跨产业的商业自动化：

- 采购代理自动寻找供应商（例如 Costco）
- 供应商的生产代理反向接单
- 价格谈判、签数字合约、安排物流
- 支付托管 → 货物到达 → 链上结算
- **整个供应链由 AI 代理运行，在区块链上结算**

关键洞察：代理之间的支付本身不是问题（可以直接刷信用卡）。**问题在于当你需要无信任的跨方交互时**——区块链的价值在于托管、信誉系统、纠纷解决。

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./neare-agent-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 代理商务：已经在上线的案例

<div class="mt-4 text-sm leading-relaxed">

**Ilia 分享了两个已经在 NEAR 上运行的 agentic 商务案例：**

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**🏨 场地寻找代理**
- 用户对 AI 助手说："帮我在里斯本找个能容纳 50 人的 Dragonfly 聚会场地"
- 通用 AI 做不好这件事（不知道去哪里找数据、怎么评估）
- 但有一个**专业活动机构的代理**，已经有预评分和实地考察过的场地数据库
- 用户的代理可以**雇佣**这个专业代理：付 $1，得到结果——比自己花大量输出 token 高效得多
- **支付是私密的、结果是已验证的**

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**🏭 供应商背景调查**
- 电商经营者需要找中国工厂供应商
- 那家工厂真的存在？还是把钱打给了空气？
- 代理自动检查：
  - 公司政府注册信息
  - Instagram / 微博 / 微信
  - 商业信用记录
- **结果**：代理验证后返回可信度评估，支付在托管中，私密结算

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed mt-3">

**数据支撑**：在市场崩盘的周五，NEAR Intents 仍然处理了 **$2.24 亿** 的日交易量——按当前费率，仅那一天 NEAR 通证就是**通缩的**。

</div>

</div>

</div>

</div>

---

# Private Intents：隐私 + 实时风控

<div class="mt-4 text-sm leading-relaxed">

**NEAR 的 Private Intents 正在同时解决两个看似矛盾的诉求**：

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**🔒 隐私**
- 所有金融交易上链 → 企业的全部会计信息公开
- 没有企业会接受
- Private Intents 让交易机密化
- 同样的 MPC + Chain Signatures 技术同时支持跨链 swap 和端到端加密 AI

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**🛡️ 实时异常检测**
- 不像传统金融那样等 3 天 + 银行打电话
- 也不像 DeFi 那样"代码即法律，出事了再说"
- 在交易执行前运行 AI 分析
- 检查：这笔存款的来源账户是否异常？
- "来自 Litecoin 的存款，几分钟前还有漏洞被利用"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**⚖️ 治理模型**
- 治理层（慢）：社区定义规则——什么算异常、什么算 hack
- AI 层（快）：实时执行规则，毫秒级决策
- 规则被"赛博朋克式地"跨协议普遍应用
- 既能保护用户，又保留了去中心化治理

</div>

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
Ilia: "Like from Ukraine, almost everything is better than the bank there. Zcash had only two problems in last ten years, we've had hundred banks that failed. So clearly better product already."
</div>

---

# Mert 怎么看 NEAR？

<div class="mt-4 text-sm leading-relaxed">

**Mert 对 NEAR 的评价是全集中最亮眼的 endorsements 之一**：

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**"Near is the most underrated team in crypto. I think they are extremely slept on."**

Mert 将 NEAR、Zcash 和 Solana 评为他认为的整个行业最顶尖的团队。

跨链 intents、隐私基础设施——他认为这些都非常有价值。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mt-3">

**但对 Agent 愿景有所保留**

当 Haseeb 问 Mert 是否认同"代理即将上链"的叙事时——Mert 深深叹了口气。

"It could certainly be real."

Ilia 开玩笑说："我已经说服他接受 intents 了，代理是下一步。" Mert 回应："慢慢来。"

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Mert 更看好的方向**
- **Ironclaw**（NEAR 的 AI 产品，基于 OpenClaw）——Mert 认为这是一个很好的例子
- 一定程度的流量会来到链上
- Ilia 比加密行业里几乎任何人都更懂 AI——"他会想出办法的"
- 那个团队也"超级强"

</div>

</div>

</div>

</div>

---

# 市场背景：Saylor 的注意力陷阱

<div class="mt-4 text-sm leading-relaxed">

**Mert 提出了一个反直觉的观点**：Michael Saylor 对加密行业最大的伤害不是价格波动——而是**他垄断了叙事**。

<div class="p-6 mt-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"The worst effect of Saylor is that he has this distortion field... he changes the conversation from the cool parts of Bitcoin and crypto — the adoption and the philosophy and the tech — and all that is discarded for the sole purpose of: did he sell? How much did he buy? It's just a trillion people pocket watching one guy."

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>ETF 也是同样的问题</strong>：人们说"BlackRock 买了"——但实际上是散户在买 IBIT ETF，BlackRock 只是托管方。本质上和 Saylor 发行股票让散户买没有区别。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>加密行业需要更好的讲故事者</strong>。Mert 提到了 Andreas Antonopoulos——"黄金会在火星带被发现，供应量会爆炸，而比特币供应量是固定的。"这类叙事比"他买了多少、卖了多少"更让人愿意投资。
</div>

</div>

</div>

---

# "Code is Law" 的终结？

<div class="mt-4 text-sm leading-relaxed">

**Ilia 指出了一个加密行业的基础矛盾**：

<div class="p-6 mt-4 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 leading-relaxed">

"Code is law — until the code is wrong, and then we actually want real law. Oh, money is stolen."

</div>

<div class="mt-4 text-sm leading-relaxed">

**现实检验**：
- NEAR Intents 已经成为黑客洗钱的通道——"大家都在通过 NEAR intents 洗钱"
- 团队被迫构建跨链黑客检测系统："整个四月所有人都在 war room 里，搞清楚哪条链被黑了"
- Litecoin 遭遇了与 Zcash 类似的 Mimblewimble 漏洞——被利用了两次——他们只是"链分叉绕过去，说没事"
- Arbitrum 的 North Korea 事件：9/12 紧急多签被迫介入

**Ilia 的观点**：加密行业需要走出"代码即法律"的绝对主义，建立一个实时、自治、由社区治理规则驱动的安全层——就像信用卡公司用 ML 检测异常交易那样，但是以去中心化的方式。

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"The most treacherous environment for code — you only need to get exploited once. You can't really take stuff offline."
<div class="text-xs opacity-60 mt-1 not-italic">— Haseeb，论为什么区块链是代码最危险的测试场</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"I'm just long math... Unless it's barred by the laws of physics that you cannot secure a system mathematically, the trend is always new knowledge gained, errors corrected, and systems hardened."
<div class="text-xs opacity-60 mt-1 not-italic">— Mert，论述计算机安全的历史趋势不可逆</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"In the age of AI, formal verification is just going to be table stakes."
<div class="text-xs opacity-60 mt-1 not-italic">— Mert，预测形式化验证将成为 AI 时代的标配</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">继续：</div>

<div class="space-y-3">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Code is law until the code is wrong, and then we actually want real law — oh, money is stolen."
<div class="text-xs opacity-60 mt-1 not-italic">— Ilia，尖锐指出加密行业的根本矛盾</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"If you have the means to stop crime, you have to stop it. If you do have it and you don't stop it, then you've kind of just virtue signaled superficially."
<div class="text-xs opacity-60 mt-1 not-italic">— Mert，论赛博朋克与干预主义的张力</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"The worst effect of Saylor is that he changes the conversation from the cool parts of crypto — the adoption, the philosophy, the tech — to just: did he sell? How much did he buy?"
<div class="text-xs opacity-60 mt-1 not-italic">— Mert，论加密叙事被单一人物绑架的现象</div>
</div>

</div>

---

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-sm opacity-70">
The Chopping Block · 2026 年 6 月
</div>

<div class="mt-4 text-lg italic opacity-50">
"It could certainly be real."
</div>
<div class="text-xs opacity-40 mt-1">
— Mert，论 AI 代理商务
</div>
