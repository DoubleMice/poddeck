---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Uneasy Money: Illia Polosukhin on Why Onchain Commerce Needs Confidentiality'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Uneasy Money

## Illia Polosukhin on Why Onchain Commerce Needs Confidentiality

<div class="pt-6 text-sm opacity-60">
Near Protocol 联合创始人 · "Attention Is All You Need" 合著者
</div>

<div class="pt-8 text-xs opacity-40">
Uneasy Money · 2026 年 5 月
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Transformer 合著者</strong><br/>
Illia 是 "Attention Is All You Need" 论文的 8 位作者之一，却从不主动提起——一个 crypto founder 修了 5 年才被发现
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>链上商务的致命缺陷</strong><br/>
为什么企业无法运营在完全透明的区块链上——收入、供应商付款、工资全部暴露给竞争对手
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>隐私 vs 反犯罪的平衡</strong><br/>
Near 的 Shield AI 如何在非托管协议上检测异常交易，同时不妥协隐私——Litecoin 51% 攻击的实战验证
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>去中心化是工具，不是目标</strong><br/>
对 EF 和加密文化的辛辣批判：冗余、竞争、安全才是目的，为去中心化而去中心化是"最愚蠢的事"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>AI × 区块链的千倍经济</strong><br/>
从层级组织到市场化协作：AI 估值个人贡献 → 意图市场 → 托管 + 可验证 AI 裁判 → 后 AGI 时代的组织形态
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>组织即市场的愿景</strong><br/>
Ironclaw 多租户 AI、承诺系统、AI CEO——Near 正在把 Jack Dorsey "peer-to-peer organization" 的理念产品化
</div>

</div>

---
layout: default
---

# Illia Polosukhin：一位极其低调的 Transformer 合著者

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**背景**

- 14 岁开始尝试构建神经网络
- 加入 Google 研究团队，专注于语言问答系统
- 2017 年与团队发表 "Attention Is All You Need"
- 论文的核心理念：**去除循环神经网络，利用 GPU 并行处理全部上下文**

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

Kane 的震惊：

> "I've known you for five years and you haven't brought this up 250 times. I'm so shocked that this has never come up in conversation."

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**从 AI 到区块链**

- Near 最初是一家 AI 公司——"teaching machines to code"
- 2018 年向 Ethereum Foundation 提案构建 Near，被拒（Kane 概括 EF 态度："we're not paying you shit"）
- 两次向 EF 提案 Near 作为 Ethereum 的分片方案，均被拒
- 最终独立启动 Near Protocol：分片 + WebAssembly + 快速出块时间

<div class="mt-4 text-xs opacity-70">
作者概括：Illia 的故事是一条从 AI 研究 → 找区块链基础设施 → 自己造基础设施 → 回到 AI+区块链交汇处的连续轨迹，不是两条独立的职业线。
</div>

</div>

</div>

---
layout: two-cols
---

# Transformer 如何诞生

<div class="text-sm leading-relaxed mt-4">

**从 RNN 的瓶颈出发**

- RNN 逐词阅读，用一个隐藏状态向量维持上下文——几百个浮点数概括读完的所有内容
- Google 搜索要求 **200 毫秒内** 返回答案，逐词读取的速度无法满足需求

**核心洞察：去除循环，保留注意力**

- 注意力机制在此之前就存在
- 关键创新：**完全移除循环神经网络**，让模型同时处理全部词元
- 利用 GPU 的高度并行能力，一次性计算所有词对之间的注意力权重

**结果**：推理速度提升 **10,000 到 100,000 倍**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./transformer-parallelism.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从"肯定不 work"到 State of the Art

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

Illia 讲了一个非常诚实的起源故事。他的经理在午餐时提出了这个想法：

> "I'm like, that's an interesting idea. I'm sure it doesn't work."

他实现了初版——效果不怎么样，但有信号。随后：

- 一个 **8 人团队**，花了 **6-7 个月** 把它推到了 state of the art
- 论文发表于 2017 年，开启了大语言模型时代
- 今天这个 8 人团队里走出了多位创始人——包括 Near Protocol、Character.AI 等的核心成员

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-xs">

<div class="p-3 rounded bg-green-50 border border-green-200">
<div class="text-lg font-bold text-green-700">8 人</div>
<div class="opacity-70">作者团队规模</div>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<div class="text-lg font-bold text-orange-700">6-7 个月</div>
<div class="opacity-70">从原型到 SOTA</div>
</div>

<div class="p-3 rounded bg-purple-50 border border-purple-200">
<div class="text-lg font-bold text-purple-700">10,000x+</div>
<div class="opacity-70">速度提升 vs RNN</div>
</div>

</div>

---
layout: default
---

# Near 的起源：一家 AI 公司建造了自己需要的区块链

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 2017-2018
**AI 研究阶段**

Near 最初是一家 AI 公司，核心任务是"教机器写代码"。团队在探索 AI 编写智能合约时发现：现有的区块链基础设施完全无法满足需求。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 2018
**两次被 EF 拒绝**

Illia 两次向 Ethereum Foundation 提案，希望 Near 成为 Ethereum 的分片方案。EF 的回应（Kane 的讽刺概括）："we're not paying you shit." 没有代币激励，没有资金支持。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 2019-至今
**独立链 + AI 回归**

Near 作为独立 Layer 1 启动：分片、WebAssembly、快速出块。2025-2026 年，AI 与区块链的交汇重新成为核心叙事——这次有了真正的产品。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>关键认知</strong>：Illia 的目标从来不是"做一条链"——链只是基础设施层。真正的终局是 AI + 区块链共同构建一个比现有经济体高效 1000 倍的全球经济系统。
</div>

---
layout: default
---

# 保密性是加密经济的关键解锁

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded leading-relaxed">

"Confidentiality is a key unlock for actually crypto becoming truly day to day use. Like you cannot imagine a business doing commerce on chain where everybody can just go into block explorer and see how much revenue they're getting, how much they're paying their suppliers, what are the salaries are."

</div>

<div class="mt-2 text-sm opacity-60">
— Illia Polosukhin，Uneasy Money 访谈
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-red-50 border border-red-200 leading-relaxed">

### 💰 收入暴露
竞争对手可以直接在区块浏览器上查看你的营收——这在任何传统商业中都是不可想象的

</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200 leading-relaxed">

### 🏭 供应链透明
你付给供应商多少钱，所有人都能看到。价格谈判完全失去意义

</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-200 leading-relaxed">

### 👥 工资公开
这就是为什么加密行业仍然用法币发工资——没人想让全世界的员工互相对比薪酬

</div>

</div>

---
layout: two-cols
---

# 链上透明度的商业悖论

<div class="text-sm leading-relaxed mt-4">

**完全透明 = 商业自杀**

区块链的"完全可审计"特性在叙事上被包装成优势，但对真实企业而言是致命的：

- 每一笔交易都被永久记录并公开可查
- 竞争对手可以实时监控你的现金流
- 供应商谈判完全失去信息不对称
- 员工薪酬成为公共信息

**这就是为什么加密行业至今仍在用法币发工资**

Illia 的论点很简单：如果不解决保密性问题，区块链永远只能服务投机和灰色市场，无法触及真正的商业 TAM。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./confidential-commerce.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Near Intents：让所有链变聪明

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 链抽象层的核心逻辑

**Intents 的宽泛目标**：通过 Near 控制任何其他链上的任何账户。

- Near 有足够的计算容量运行"整条其他区块链作为智能合约"
- 在 Near 上编写复杂逻辑（恢复系统、多步 DeFi），然后把最终执行推送到目标链（如 Solana）
- 首个 PMF：让 Bitcoin、Dogecoin 等"没有智能合约的链"拥有智能合约级的能力

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Intents 的实际应用

- **Zcash 跨链交易**：从 Zcash 钱包支付到 Bitcoin QR 码，中间通过 Near Intents 路由，商家看不到资金来源
- **Solana 复杂逻辑**：Solana 的智能合约很小，难以运行长时间逻辑——在 Near 上执行复杂合约，只在 Solana 上结算
- **Doge → Solana 直接交易**：不需要 CEX，链上完成跨链兑换

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>长远愿景</strong>：Intents 不只是为了加密资产——目标是"facilitate all the economic activity in the world"，包括法币支付、雇佣代理、购买商品。这是一个在区块链上的全球经济活动路由层。
</div>

---
layout: default
---

# 机密 Intents：150+ 资产，默认私密

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">150+</div>
<div class="text-xs opacity-70 mt-1">可私密持有的资产种类</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">~8M</div>
<div class="text-xs opacity-70 mt-1">NEAR 在机密分片中</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">600ms</div>
<div class="text-xs opacity-70 mt-1">出块时间</div>
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">

### 技术架构

- **执行保密性**：运行一个完整的 Near 机密分片，在分片内执行 Intents
- 后续计划在机密分片内添加更多应用（借贷等）
- 享受 Near 的全部优势：600ms 出块、跨链支付、法币 on-ramp 即将上线
- 用户体验对标 Neobank，而非传统加密钱包

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed">

### 与 Zcash 的差异

- Zcash：只有 ZEC 本身是私密的，持有 ZEC 以外的资产无法享受隐私
- Near 机密 Intents：**所有资产都可以私密**——USDC、NEAR、ZEC、Solana 资产都在同一个私密环境中
- 从私密环境直接支付到其他链或法币，收款方不知道来源

</div>

</div>

---
layout: default
---

# 隐私支付的用户体验突破

<div class="text-sm leading-relaxed mt-2">

### 为什么之前的隐私方案都失败了

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Zcash 的悖论</strong><br/>
只有 ZEC 本身是私密的——持有稳定币或 BTC 的用户无法获得隐私保护。而且出块时间慢（几分钟），站在店里等支付确认是不可接受的体验。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Tornado Cash 的孤岛</strong><br/>
一个 USDC 池不够——需要足够多的流动性才能做到真正的可扩展隐私。单池的匿名集太小，无法提供有意义的安全保障。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>延迟 vs 实用性</strong><br/>
Illia 直言：站在商店排队，等待超过 50 毫秒就已经开始焦躁——"waiting more than like 50 milliseconds you're like, ah, fuck."
</div>

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">

### Near 的解决方案

**从 Zcash 钱包用 ZEC 支付到 Bitcoin QR 码**——这笔交易通过 Near Intents 路由，600ms 出块，商家只看到 Bitcoin 到账，完全不知道资金来源是 Zcash。这是 Zcash 生态十年来一直想实现但无法做到的事情。

</div>

---
layout: two-cols
---

# Shield AI：反犯罪而不反隐私

<div class="text-sm leading-relaxed mt-4">

**两难困境**

- 这是一个非托管协议——原则上任何人都可以使用
- 但如果允许资金清洗和非法活动，协议将无法获得主流采用
- Tay 的洞见：犯罪分子和普通用户的需求完全不同——犯罪分子不在乎 1% 费用，不在乎延迟

**Near 的答案：Shield AI**

- 实时扫描多条链上的交易
- 异常检测：如果一个账户历史上余额为零，突然收到 1 亿美元——高度可疑
- 隐私保护的警报系统：合作伙伴可以检查存款是否在可疑地址列表中，但不知道具体是哪个地址

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./shield-ai.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Shield AI 的实战：Litecoin 攻击检测

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

### 攻击过程（三步叠加）

1. **MimbleWimble 漏洞利用**：攻击者使用伪造证明从 Litecoin 的隐私池中提取了不属于自己的资金
2. **DDoS 网络其余部分**：降低全网算力，使只有旧节点（有 MimbleWimble 漏洞）在出块
3. **多路径资金提取**：攻击者尝试通过 Thorchain、Near Intents、CEX 等多条路径转移资金

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">

### Shield AI 的响应

- Near Intents 是**第一个检测到异常**的节点——少量交易通过后立即触发警报
- Shield AI 通知其他交易所暂停 Litecoin 存取款
- 暴露了当前加密行业事件响应的根本缺陷：**没有人有应急手册，每次都是从头学起**

<div class="mt-2 p-2 bg-yellow-50 rounded text-xs">
<strong>后续揭露</strong>：Litecoin 核心开发者在两个月前就用 AI 发现了这个漏洞并打了补丁——但他们只通知了矿工，没有通知任何交易所、桥接协议或 Intents 节点。一个零日漏洞保密了两个月。
</div>

</div>

</div>

---
layout: default
---

# 为什么事件响应在加密行业如此糟糕

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
<strong>信息孤岛</strong><br/>
Litecoin 的补丁只发给矿工。交易所、桥、Intents 节点——所有可能的 off-ramp——都不知道漏洞存在。在信息时代，一个可利用两个月的漏洞是"不可接受的"。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">
<strong>激励错位</strong><br/>
桥协议有反面激励不去监控——"我们不可能知道谁在使用我们的协议"。CEX 更关心内部基础设施安全，链上发生的事情被视为"不是我们的问题"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">
<strong>反应速度为零</strong><br/>
每次攻击，所有人都是从头学起如何做事件响应。没有标准化的信息高速公路来传播威胁警报。Ronin 桥被黑了两个星期才被发现。
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

### Shield 的愿景：加密行业的威胁情报网络

- **合作伙伴订阅警报**——不同严重级别，最高级别是"立即暂停该网络"
- **布隆过滤器**：可以检查存款是否匹配可疑地址列表，但不泄露具体是哪个地址
- **与 Zero Shadow 等专业安全团队协作**，建立标准化的事件响应流程
- 目标：在攻击传播之前就切断它——而不是等资金全部流失后才开始回溯

</div>

---
layout: default
---

# 对 Ethereum Foundation 的批判

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

### Vitalik 的 1500 字 X 帖子

- Kane 的吐槽："We have articles, we have threads, there's many options. Don't drop a 1500."
- 核心信息：EF 要缩小，Ethereum 要聚焦技术卓越
- 问题：EF 人员在流失，但没人贴"vesting cliff reached"梗图——因为大家都知道 EF 不给代币

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">

### Luca 的判断

> "You're seeing it across all blockchain guys except for Ilya. It's brutal out there."

- Solana 的 Toly 最近也在发类似的焦虑推特
- 价格上涨时大家都假装不在乎价格——直到价格下跌，市场开始惩罚
- 例外：Illia 似乎"figured out where the puck is going"

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">

**Illia 的核心论点**：两次被 EF 拒绝的经历塑造了他对 EF 的看法——

> "I don't think decentralization needs to mean disorganization."

Near 有几十家公司紧密协作，Slack 里有 20 个共享频道。当 ZRA 被黑时，五家不同的公司联合追踪、找到攻击者、追回全部资金。这需要的是**组织**，不是口号。

</div>

---
layout: default
---

# "Don't Be Evil" 不是使命

<div class="text-sm leading-relaxed mt-2">

### 价值观 vs 使命

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">
<strong>❌ "Don't Be Evil"（价值观）</strong><br/><br/>
- 这是 Google 当年的口号，后来被删除了
- Illia 的分析：它不断与实际目标和 KPI 冲突——当你的 KPI 是增长广告收入时，"不作恶"变成一个障碍
- Tay 的精彩类比："I can go sit on my fucking couch alone never talk to anyone...and not be evil." ——不作恶不是目标，你坐在沙发上什么都不做也能不作恶
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
<strong>✅ 一个真正的使命</strong><br/><br/>
- Google 的真实使命曾经是"organize the world's information"
- Near 的真实使命：让全球经济在区块链上运行，比现在高效 1000 倍
- 使命告诉你 <em>去哪里</em>——价值观告诉你 <em>怎么去</em>
- 没有使命的组织会陷入"不偏袒任何人"→"不跟任何人说话"的怪圈
</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Tay 的总结</strong>：EF 的"中立性"在执行层面变成了"我们不讨论产品构建者，不跟产品构建者对话，不激励任何人"——"It's so important that we don't have a favorite child, that we actually don't talk to actual children."
</div>

</div>

---
layout: default
---

# Google 的警世故事

<div class="text-sm leading-relaxed mt-2">

### 垄断如何腐化使命

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed text-sm">

Illia 分享了他在 Google 内部亲历的转变。一名前同事从研究部门转到广告团队后升职——他的"创新"是：**关联你的地图数据和你路过的广告牌，然后在互联网上对你进行重定向**。

> "And I'm like, this sounds kind of evil."

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed text-sm">

**为什么会发生这种情况？**

- Google 在搜索广告市场拥有完全垄断地位——它是一个"印钞机"
- 在 Google 内部，晋升的最简单路径是去广告团队提升收入指标
- Facebook 的竞争压力迫使 Google 对用户数据变得更加激进

<div class="mt-2 text-xs opacity-70">
作者概括：Illia 的洞察是——垄断地位 + 没有约束 = 组织必然走向"榨取式"。这也正是他为什么认为区块链（固定供应、去中心化治理）能解决这个问题的原因。
</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed text-sm">

### 企业的两难困境

> "Corporation is either growing or shrinking. There's no way for something to be a steady state."

- 企业没有稳态——要么增长，要么萎缩
- 当增长触及市场天花板后，唯一的增长路径是：**从单个用户那里榨取更多价值（upsell 或增加使用时长）**
- 区块链的固定供应和不同经济模型可以在根本上改变这个动态

</div>

</div>

---
layout: two-cols
---

# 去中心化：工具还是目标？

<div class="text-sm leading-relaxed mt-4">

**Illia 的立场：工具**

- 去中心化解决的是具体问题——不是意识形态
- 冗余：不依赖单一验证者、单一 RPC 提供商、单一组织
- 竞争与创新：多个团队在没有中心化许可的情况下各自建设
- 安全与稳定：分布式的信任基础

**对"为去中心化而去中心化"的批判**

- 如果你把所有人踢出 Discord，不提供任何支持——这不是在实现去中心化，这是在废弃你的生态
- 零日漏洞出现了，却不知道怎么通知任何人——这就是假装去中心化的代价

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./decentralization-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从层级组织到市场原语

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Illia 的组织哲学**：他早在 2018 年就一直在说这个——

> "This obsession with decentralization for decentralization's sake is the silliest shit, and we need to stop."

Near 的实践：几十家公司在同一个 Slack 网络中协作，有共同愿景（NEAR 代币激励），有各自的产品和市场的细分团队（NEAR Intents 团队在 Diffuse 公司，NEAR AI 团队有独立产品）。

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<strong>共同激励</strong><br/>
<span class="opacity-70">NEAR 代币作为 "Alphabet stock"</span>
</div>

<div class="p-3 rounded bg-green-50 border border-green-200">
<strong>各自市场的团队</strong><br/>
<span class="opacity-70">每个单元有自己的产品和客户</span>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<strong>基础设施共享</strong><br/>
<span class="opacity-70">HR、财务、法务可被任何团队使用</span>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>Illia 的类比</strong>：把 Google 的内部组织结构开放化——任何人可以加入、可以协作、可以在彼此之上建设——但共享一套激励（Alphabet 股票）和可复用的基础设施。这就是 Near 生态正在构建的模式。
</div>

---
layout: default
---

# AI × 区块链的千倍经济效率

<div class="text-sm leading-relaxed mt-2">

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed text-sm">

> "Blockchain will make it ten times more effective, and AI will make it hundred times effective. And so together AI and blockchain will make it thousand times effective."

</div>

<div class="mt-1 text-xs opacity-60">— Illia Polosukhin</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 为什么是区块链

- 信任原语（托管、可验证计算）内置于系统
- 固定供应 → 没有通胀驱动的"榨取式增长"
- 无需中心化实体就能协调陌生人之间的经济行为
- 意图市场 → 需求方和求解方直接对接

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 为什么是 AI

- AI 可以估算个体对更大项目的贡献（解决信用分配问题）
- AI 可以充当上下文路由器 → 替代中层管理层
- AI 代理可以被雇佣、被委托、被验证
- 可验证 AI → 可以评判另一个代理的工作质量

</div>

</div>

</div>

---
layout: two-cols
---

# 千倍经济的架构

<div class="text-sm leading-relaxed mt-4">

**Illia 的 TAM 计算**

当前全球经济极度低效——供应链谈判、工作分配、信用分配都是手动且模糊的。

- 区块链使协调效率提升 **10 倍**
- AI 作为加速器再提升 **100 倍**
- 两者结合：**1000 倍**

目标市场：**"ten hundred trillion" — 后 AGI 时代的货币总量**

这不是 crypto-native 的叙事，这是全球经济基础设施的叙事。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-blockchain-convergence.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么 DAO 从未真正运作

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

**信用分配（Credit Assignment）是所有问题的根源**

> "Credit assignment, I think, actually is the fundamental world problem."

- 在组织层面：晋升和薪酬在本质上是**模糊且主观的**——"somewhat arbitrary"
- 在机器学习中：梯度下降（模型训练）本质上就是信用分配问题
- 在 DAO 中：你在模糊的基础之上叠加严格的规则——"it's fair"——但底层的不公平性会从侧面泄漏出来

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### DAO 的根本缺陷

- 投票机制假定所有贡献都是等价的——实际上它们从来不是
- 不存在有效的基础设施来评估个体贡献
- 中层管理的缺失不是因为管理层是坏的——而是因为上下文传播是需要功能的
- 在没有信用分配机制的情况下，DAO 的"公平"只是一种幻觉

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### AI 如何解决这个问题

- AI 可以估算个体对更大产出的贡献——解决组织级别的信用分配
- 一旦信用分配可量化，激励就可以与贡献对齐
- 组织不再需要"捆绑"工人——个体可以直接参与市场
- 这是 Jack Dorsey 所说的"from hierarchical to peer-to-peer"的技术基础

</div>

</div>

</div>

---
layout: default
---

# Ironclaw：多租户 AI 协调系统

<div class="text-sm leading-relaxed mt-2">

### Near 正在内部实验的 AI 组织操作系统

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**多租户架构**

- 用 Google 或 NEAR 账户登录同一个 Ironclaw 实例
- 每个用户有自己的记忆、任务、项目
- 共享项目、共享记忆、共享工作流
- 权限系统：HR 相关的内容不应该被所有人看到

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**承诺系统**

- 在会议中说"我们会做这个功能"——这句话应该**自动进入系统**
- 自动跟踪是否有后续行动、是否有人跟进
- 自动更新路线图和文档
- 扫描所有会议记录，提取被做出的决策

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**最有价值的应用：找到那些**没有做出决策的会议

> "The most useful been finding where decisions were not made, because that's actually where organizations' taxes is: people discuss something and did not make a decision."

Illia 说这已经产生了直接的效率提升——因为他可以看到哪些会议讨论了事情但没有做出决定（因为决策者不明确或不在场），然后推动做出决定。

</div>

</div>

---
layout: default
---

# 工作流程的 AI 化：从个人到系统

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">
<strong>阶段 1：个人 AI</strong><br/><br/>
一个人坐在终端前，AI 写代码。同步过程，一个人的产出翻倍。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">
<strong>阶段 2：团队 AI</strong><br/><br/>
AI 代理进入 Slack（类似 Centaur/Karim 的架构），AI 负责协调——人类负责品味、判断和设定目标。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">
<strong>阶段 3：市场 AI</strong><br/><br/>
意图市场 + AI 代理工作流。你发布"我想在 24 小时内构建 X 功能"的意图，求解者竞标，AI 裁判验证交付质量。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**Near AI Marketplace 正在测试的实际用例**：

- 保险理赔申请处理
- 背景调查
- 活动协调
- 已有"first actual businesses"开始使用

**商业模式**：某个专家将其工作流程编写成可复用的代理，然后以每次一美元的价格作为服务提供——将一个原本必须在企业内部完成的功能拆解为市场化服务。

</div>

---
layout: two-cols
---

# 组织进化：从层级到市场

<div class="text-sm leading-relaxed mt-4">

**为什么企业捆绑工人？**

历史上，企业必须将工人捆绑在一起，因为：

1. 很难评估个体贡献的价值（信用分配问题）
2. 需要上下文传播层（中层管理）
3. 交易成本太高，无法用市场替代内部职能

**AI 如何解绑这一切**

- LLM 可以估算个体贡献
- AI 可以路由上下文，替代中层管理
- 加密托管 + 可验证 AI = 免信任的市场交易
- 每个人 + AI 代理军队成为一个微型公司

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./org-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI CEO：2023 年就提出的愿景

<div class="text-sm leading-relaxed mt-2">

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed text-sm">

> "I pitched this at NearCon 2023, I pitched this idea of AI CEO. This was before any of this AI stuff started to work."

</div>

<div class="mt-1 text-xs opacity-60">— Illia Polosukhin</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 向上：深度信息汇总

- 组织内部正在发生什么？
- 哪些决策被做出了？
- 有哪些建议和改进方向？
- 真正的取舍是什么？（决策者往往不知道导致决策的取舍权衡）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 向下：上下文分发

- 把相关上下文推送给需要的人
- 同时过滤掉不相关的内容
- 你不能让每个人都有一个全组织的信息流
- 但你可以随时查询任何你需要的上下文

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>这就是为什么中层管理存在</strong>——在 AI 之前，人类是唯一能做上下文路由的实体。AI CEO 就是要自动化这个功能：既向上汇总深度信息，又向下分发相关上下文。
</div>

</div>

---
layout: default
---

# Kane 的激励分配困境

<div class="text-sm leading-relaxed mt-2">

### 激励是组织设计中最难的问题

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed text-sm">

Kane 分享了他自己的挣扎——他会在 "共产主义幻想" 和 "市场化" 之间摇摆：

> "I kind of vacillate between these communist fantasies... hey, everyone was here, we can't really attribute perfectly, so we're just gonna give everyone the same thing. And the people contributing the most fucking hate it. They rage so hard."

给所有人一样的奖励 → 贡献最多的人愤怒。尝试精确分配 → 模糊性导致不公平感。"it's very funny that this other company gives me double the compensation, right? So like probably it's not fair."

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Illia 的答案：市场

> "Markets actually solve all of this. If you forget about... inside organization, between companies, there is market."

- 如果你不满意合作伙伴，换一个提供商
- 市场解决了信用分配问题——价格就是共识
- 问题在于：我们还没有弄清如何在**组织内部的下层**实现市场化
- 这就是 AI（估算贡献）+ 区块链（托管 + 结算）+ 意图架构（谈判 + 执行）的结合点

</div>

</div>

---
layout: default
---

# 市场的胜利

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

### 五种无法用规则解决的问题

1. **晋升和薪酬** — 模糊的、主观的、容易被博弈的
2. **信用分配** — "谁写了这段代码？" 在一个团队协作的时代是没有答案的
3. **中层管理** — 它的存在是因为没有更好的上下文路由机制
4. **DAO 投票** — 在模糊的基础之上叠加规则 → 假装公平
5. **捆绑式雇佣** — 因为无法评估个体贡献，"公司"只能把一群人捆绑在一起卖

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">

### Illia 的市场化解决方案

1. **意图市场** — "我想要 X 功能，价值 Y" → 求解者竞标
2. **AI 贡献评估** — 实时估算个体对产出的贡献
3. **托管 + 裁判** — 可验证 AI 判断交付质量
4. **人类在回路中** — 用于交叉验证和纠错
5. **结果** — 从 "公司雇佣人" 过渡到 "市场雇佣微型公司" 的世界

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>Illia 的终局</strong>："We're transitioning from corporation or foundation needing to be the holder of people." 组织不再是人的持有者——它变成一个市场，连接需求方和求解方。这不是乌托邦式的 DAO 梦想——这是有托管、有验证、有激励机制的可操作架构。
</div>

</div>

---
layout: default
---

# 加密货币的真正规模

<div class="text-sm leading-relaxed mt-2">

### Intents 的终局不是代币交换

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed text-sm">

> "The reality is intents is for facilitate all the economic activity in the world. That's really the goal. Like not just crypto, we adding fiat, we adding all kinds of other assets. But we also adding work. You will be able to hire agents and people, buy goods etc."

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-green-50 border border-green-200 text-center">
<div class="text-lg font-bold">💱</div>
<div class="mt-1 leading-snug">加密资产<br/>跨链交换</div>
</div>

<div class="p-3 rounded bg-blue-50 border border-blue-200 text-center">
<div class="text-lg font-bold">💳</div>
<div class="mt-1 leading-snug">法币<br/>on/off ramp</div>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200 text-center">
<div class="text-lg font-bold">🤖</div>
<div class="mt-1 leading-snug">AI 代理<br/>和人类工作</div>
</div>

<div class="p-3 rounded bg-purple-50 border border-purple-200 text-center">
<div class="text-lg font-bold">🛒</div>
<div class="mt-1 leading-snug">商品<br/>购买</div>
</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-200 text-center">
<div class="text-lg font-bold">📋</div>
<div class="mt-1 leading-snug">供应链<br/>与合同</div>
</div>

<div class="p-3 rounded bg-red-50 border border-red-200 text-center">
<div class="text-lg font-bold">🌐</div>
<div class="mt-1 leading-snug">全球<br/>商务路由</div>
</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
这不只是"另一个跨链桥"——这是全球经济活动在区块链上的路由层。
</div>

</div>

---
layout: default
---

# 关于犯罪分子的一个清醒思考

<div class="text-sm leading-relaxed mt-2">

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed text-sm">

### 为什么服务犯罪分子会毁掉你的协议

Tay 的洞见：

> "If you're only serving criminals like thieves and money launderers, their needs are actually dramatically different than average users needs."

- 犯罪分子**对价格完全不敏感**——1% 费用？太棒了，不用问任何问题
- 犯罪分子**不关心延迟**——只要最终能到账就行
- 他们在你的 Discord 里**大声宣扬**——不是在隐藏，而是在公开施压："这不是应该是 unstoppable money 吗？"

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>陷阱</strong><br/>
在熊市中，团队需要生存——"它看起来像产品市场契合"，尤其是你眯着眼睛看的时候。但满足犯罪分子的需求会让你在一个完全错误的用户群体上迭代产品。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Near 的选择</strong><br/>
故意、明确地反对为非法活动提供便利。Shield AI 不是"附加的合规层"——它是从第一性原理出发的 derisk 设计：保护用户、合作伙伴和 LP 免受黑客和攻击的影响。
</div>

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"Confidentiality is a key unlock for actually crypto becoming truly day to day use."
<div class="text-xs opacity-60 mt-1 not-italic">— 核心论点：没有保密性，企业无法在链上运营</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"Blockchain will make it ten times more effective, and AI will make it hundred times effective. And so together AI and blockchain will make it thousand times effective."
<div class="text-xs opacity-60 mt-1 not-italic">— 千倍经济效率的数学：10x × 100x = 1000x</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"Credit assignment, I think, actually is the fundamental world problem."
<div class="text-xs opacity-60 mt-1 not-italic">— 从组织管理到机器学习梯度下降，一切问题的根源</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"I don't think decentralization needs to mean disorganization."
<div class="text-xs opacity-60 mt-1 not-italic">— 去中心化 ≠ 无组织——Near 几十家公司紧密协作</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得回味的观察：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"Don't be evil is values, it's not your mission. Mission is actually what you're trying to achieve in the world."
<div class="text-xs opacity-60 mt-1 not-italic">— 对 Google 和 EF 的双重批判：价值观不能替代使命</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"Corporation is either growing or shrinking. There's no way for something to be a steady state."
<div class="text-xs opacity-60 mt-1 not-italic">— 企业的增长诅咒：区块链的固定供应模型可能提供不同的答案</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"I pitched this at NearCon 2023, I pitched this idea of AI CEO. This was before any of this AI stuff started to work."
<div class="text-xs opacity-60 mt-1 not-italic">— Illia 在 2023 年就预见了 AI 重塑组织管理的方向</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"The most useful been finding where decisions were not made, because that's actually where organizations' taxes is."
<div class="text-xs opacity-60 mt-1 not-italic">— Ironclaw 最有价值的发现：组织真正的效率黑洞是未做出的决策</div>
</div>

</div>

---
layout: end
---

# Thanks for watching

<div class="mt-8 text-base opacity-70">

"Confidentiality is a key unlock for actually crypto becoming truly day to day use."

</div>

<div class="mt-4 text-sm opacity-50">
— Illia Polosukhin
</div>

<div class="mt-12 text-xs opacity-40">
Uneasy Money · 2026 年 5 月
</div>
