---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why Authorities Can''t Freeze Crypto Fast Enough: DEX in the City'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 为什么监管追不上链上资金？

<div class="mt-6 text-lg opacity-70">
从保证金改革到稳定币冻结，加密监管的关键一周
</div>

<div class="mt-10 text-sm opacity-50">
Unchained — DEX in the City · 2026 年 7 月
</div>

<div class="mt-2 text-xs opacity-40">
主持：KK · Jesse（前联邦检察官）· V（前 SEC）
</div>

---
layout: default
---

# 为什么这期值得关注？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**SEC & CFTC 联合推进保证金改革**
两个"宿敌"罕见联手，统一证券与商品的保证金框架，加密衍生品市场面临重大变化。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**稳定币冻结可被 Front-Run**
一篇中国学者的论文揭示：制裁执行本身是链上交易，坏人可以在冻结生效前转移资金。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**AI 出口管制扩展到访问控制**
Legion 起诉美国政府：政府不再管代码发布，转而控制谁可以"登录使用"，这对加密意味着什么？

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**第三方原则与 AI 隐私**
你在 ChatGPT 里说的话不是私密的——第四修正案为何在这个问题上失效？

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**CLARITY 法案卡关**
加密市场结构法案在参议院搁浅，意外的新障碍来自 CBDC 禁令与总统的政治博弈。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**MiCA 过渡期结束**
欧盟 27 国碎片化监管统一为单一牌照框架——"可预测的规则，胜过完美的规则。"

</div>

</div>

---
layout: default
---

# SEC 与 CFTC 联手推进保证金改革

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**发生了什么？** SEC 与 CFTC 发布联合公开征求意见，目标是统一证券与商品的投资组合保证金（portfolio margining）规则。市场参与者有 90 天时间提交意见。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**为什么现在？** 美国国债的中央清算 mandate 将于 2026 年底生效，大量交易量将被推入中央清算所，保证金要求将发生系统性变化。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**历史背景**：两机构在 2020 年就做过类似尝试，收到大量意见但最终无果。这次重新启动，本身就是积极信号。

</div>

</div>

<div class="mt-6 text-sm opacity-60">
背景：证券和衍生品（商品）长期分开监管 → 交易者被迫为跨市场风险敞口缴纳超额保证金。
</div>

---
layout: default
---

# 代币化资产：同样的资产，同样的规则

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 关键认知

**代币化美债仍然是美债。** 如果把美国国债代币化，该资产的监管属性不会因为"上链"而改变——SEC 的国债清算 mandate 同样适用于代币化版本。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**永续合约**
近期产品审批推动加密衍生品扩张，保证金 harmonization 直接影响 perps 交易者。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**代币化国债**
2023 年 Ondo、Maple Finance 等率先用代币化国债吸引资金，现已成为加密与 TradFi 的桥梁。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**制度化的开端**
KK 称之为"一次重要的解锁"，尤其是对机构交易者而言。harmonization 可能重塑加密衍生品市场基础设施。

</div>

</div>

</div>

---
layout: two-cols
---

# 投资组合保证金 Harmonization

<div class="mt-2 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**当前状态**：证券和商品分别由 SEC 与 CFTC 监管，交易者为跨市场风险敞口缴纳两份保证金，资金效率低下。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**改革方向**：统一的投资组合保证金框架 → 跨资产净额结算 → 释放被锁定的抵押品。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**对加密的意义**：永续合约、代币化国债等产品横跨证券/商品的监管边界，harmonization 为合规交易扫清障碍。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./margining-harmonization.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# "排序权即制裁权"：一篇颠覆认知的论文

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**论文**：《Ordering Power is Sanctioning Power》，几位中国大学研究者合著。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**核心洞见**：稳定币发行方（Tether、Circle）的"冻结"操作，本质上是链上的一笔交易，而不是即时生效的指令——它必须被提交、竞争区块空间、由构建者和验证者排序后被打包进区块。**在 TradFi 中，银行冻结账户是即时完成的，因为银行控制账本；但在链上，冻结本身要参与交易排序竞赛。**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**V 的总结**：这篇论文让加密人最引以为傲的"自动风险管理"叙事出现了裂缝——"我一直相信稳定币的冻结能力是向监管证明这技术更好的理由，但这可能建立在一个有缺陷的假设上。"

</div>

</div>

---
layout: default
---

# 稳定币冻结的技术现实

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 链上冻结 ≠ 即时生效

冻结是一笔与普通转账竞争区块空间的交易。如果被制裁对象看到 pending 的冻结交易（在 mempool 中可见），他们可以提交一笔 Gas 更高的转移交易来抢先打包。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### V 的原话

"如果冻结交易在排序竞赛中输给了转移交易，那么冻结的法律授权就无法执行。换句最简单的话说：**稳定币冻结本身可以被 front-run。** 想想看——这简直是最'加密'的事情了。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Jesse 的反应**："这篇论文让我从完全不同的角度重新审视自己的假设。我一直相信冻结机制是加密比 TradFi 更好的论据，但现在我不得不面对一些令人不安的数据。"

</div>

</div>

---
layout: two-cols
---

# 稳定币冻结 Front-Run 流程

<div class="mt-2 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**第 1 步**：发行方（Circle/Tether）向 mempool 提交冻结交易，设定 Gas 价格。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**第 2 步**：被制裁对象监控 mempool，看到冻结交易后立即提交转移交易，**出更高 Gas**。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**第 3 步**：在区块构建者/排序者的视角中，Gas 更高的转移交易优先被打包 → **资金已在冻结生效前转出**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./freeze-frontrun.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 令人警醒的数据

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 94%
<div class="text-sm opacity-70 mt-2">
链上稳定币制裁<br/>由发行方自行发起
</div>
<div class="text-xs opacity-50 mt-1">
（非 OFAC 等政府机构指令）
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 仅 9 次
<div class="text-sm opacity-70 mt-2">
八年来成功在资金转移<br/>中途冻结的情况
</div>
<div class="text-xs opacity-50 mt-1">
（"中途"指冻结时仍有大量余额）
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 7%
<div class="text-sm opacity-70 mt-2">
被制裁地址在冻结<br/>到达时余额已归零
</div>
<div class="text-xs opacity-50 mt-1">
（资金已抢在冻结前转出）
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Jesse 的总结**："冻结确实阻止了数百万坏账资金，这值得肯定。但冻结机制能达到的效果，远远低于我们曾经以为的——这个事实我还在消化。"

</div>

---
layout: default
---

# MEV 超越交易：当排序影响执法

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**V 的区分**：论文提出的概念叫"制裁 MEV"（sanctions MEV），与传统 MEV（矿工/验证者通过交易排序获利）不同，但共享同一个底层机制——**谁控制排序，谁就控制结果**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**闪电贷攻击、front-running、三明治攻击**——这些都是 MEV 在交易场景中的表现。"制裁 MEV"把这个逻辑从**获利**扩展到了**执法**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**真正的问题**：制裁执行变成了"市场结构问题"。MEV 过去是交易者关心的问题，现在它也是执法机构需要关心的问题——这不是一个法律漏洞，而是**区块链的底层设计特征**。

</div>

</div>

<div class="mt-3 text-sm opacity-60">
KK 指出："链上的速度既帮助恶意行为者快速转移资金，也是链上交易的核心吸引力之一——这是一个无法回避的 trade-off。"
</div>

---
layout: two-cols
---

# Legion 起诉美国政府：AI 出口管制新战线

<div class="mt-2 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**事件**：法律科技创业公司 Legion 起诉美国政府，因其工程师在加拿大依赖 Fable（Anthropic 模型）构建产品，Fable 被限制访问后业务瘫痪。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**核心论点**：AI 模型权重的出口管制分类已于 2025 年被撤销。政府限制 Fable 的访问权限，但既不说明分类依据，也不给出充分解释——且从未有人"接收"模型权重，只是登录并打字。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./access-vs-code.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Bernstein 案："代码即言论"的基石

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Bernstein v. US Dept. of State（第九巡回法院）**：1990 年，一名研究生想发表自己的加密代码，政府以"加密是武器"为由阻止。法院裁定：**编写和发布代码受第一修正案保护。**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**对加密行业的意义**：Bernstein 案是开源协议、运行节点、发布智能合约的法律基石。Tornado Cash 案中，这也是核心辩护论点之一。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**但现在政府在换打法**：既然"代码发布"受第一修正案保护，那就换个角度——**控制谁可以"登录并使用"已经发布的代码**。这不是管制代码本身，而是管制"访问层"。

</div>

</div>

---
layout: default
---

# 加密行业为何必须关注 AI 出口管制

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Jesse 的核心警告**："政府正在说：我们不管代码能不能发布，我们管谁能登录使用它。对加密行业来说，这就是一切——因为加密的运行依赖的恰恰是访问层。"

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不只是前端**
RPC 端点、跨链桥、稳定币轨道、GitHub 仓库、钱包——每一个都可以通过控制"登录权限"来关闭。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**不需要碰协议**
政府意识到不需要碰协议本身——如果能控制访问层，协议就形同虚设。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**赢家和输家**
在没有明确法律依据的情况下被挑选——"winners and losers are being chosen without a process or a real law."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**这是我们的事**
Jesse 震惊于加密行业没有更多人关注这件事——"this is our fight. Let's go."

</div>

</div>

</div>

---
layout: default
---

# 第四修正案与第三方原则

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第四修正案（Fourth Amendment）
禁止不合理的搜查与扣押。执法机构需要搜查令（warrant）才能搜查你的人身、住所、文件和财产。这是美国宪法对个人隐私的基本保障。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 第三方原则（Third Party Doctrine）
当你**自愿**将信息分享给第三方时，你就失去了对该信息的合理隐私期望——即使你分享的目的有限。这一原则源自第四修正案的"搜查与扣押"逻辑：如果信息是你自己交出去的，就不算"搜查"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**V 的警告**："随着技术进步，迫使私人行为体协助执法的可能性越来越大——我们必须抵制这种诱惑。"最高法院在判例中表现出**限缩**第三方原则的倾向，扩张它可能违宪。

</div>

</div>

---
layout: two-cols
---

# 第三方原则 × 第四修正案

<div class="mt-2 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**用户把信息交给第三方服务**（ChatGPT、Claude、Gmail 等）→ 自愿分享 → 丧失了"合理隐私期望"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**执法机构从第三方直接获取数据，无需搜查令**——因为信息不是从你身上"搜"出来的，是你自己交出去的。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**第四修正案的本意被绕过了**——"第三方原则"本质上是一个司法创造的例外，随着 AI 的普及，这个例外的范围正在急剧扩大。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./third-party-doctrine.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI 聊天不是私密的

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Jesse 的亲身经历**："我曾处理过儿童性虐待案件，我们通过搜查令获取了被告的 Google 搜索记录——'如何隐藏性虐待'之类的关键词。Google 搜索可以作为证明犯罪意图的证据。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**但 AI 聊天更危险**："人们对 AI 聊天的隐私感完全不同。我认识有人用 ChatGPT 做心理治疗，讲的内容连治疗师都不会说。还有人输入完整的个人病史、X 光报告让 AI 解释——但他们完全没意识到这些对话可以被用作法庭证据。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**KK 的总结**："你输入电脑的任何东西都不是私密的。句号。公司设备上的任何内容都没有隐私预期——每个称职的法务总监都会告诉员工：假设你在 Slack、邮件、聊天中说的每一句话都可以被法庭调取。"

</div>

</div>

---
layout: default
---

# CLARITY 法案：现状与障碍

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**进展**：2026 年 5 月，参议院银行委员会在 markup 投票中正式推进 CLARITY 法案（加密市场结构法案），获得民主党加入支持，已列入参议院立法日程。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**三大已知障碍**：
1. 一些议员要求加入外汇（FX）条款
2. 执法机构和劳工组织认为法案对打击非法金融力度不足
3. 与稳定币相关的 Yiedl 妥协方案是否能维持不确定

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**现状**：自 6 月初列入立法日程后**无任何进展**。列入日程 ≠ 全院投票。即使通过参议院，还需要与众议院版本协调、通过 reconciliation 程序——而中期选举和夏季休会期让前景更加黯淡。

</div>

</div>

---
layout: default
---

# 意想不到的第四重障碍

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**新障碍的来源**：一项包含 CBDC 禁令的两党住房法案在国会获得通过，但总统拒绝签署——因为他想通过一项争议性的投票法案作为交换。共和党对该投票法案缺乏支持，导致整个立法进程陷入僵局。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**V 的分析**："国会通过 CLARITY 的进程不是孤立存在的——它受制于更大的政治博弈。这是一个完全无法预见的'非受迫性失误'（unforced error），给共和党与民主党在 CLARITY 上的合作注入了巨大的不确定性。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**KK 的评语**："我一直是 CLARITY 的看空者，这对加密行业来说非常令人沮丧。我们仍然在努力推进，但中期选举让时间窗口越来越窄。"

</div>

</div>

---
layout: default
---

# MiCA 过渡期结束：欧洲的加密清晰度

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**MiCA（Markets in Crypto-Assets）**是欧盟里程碑式的加密综合监管框架。"过渡期"于昨天正式结束——所有在旧国家牌照制度下运营的加密公司，要么拿到 MiCA 牌照，要么停止服务欧盟客户。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**背景**：MiCA 之前，欧盟 27 国各有各的加密规则，企业要跨境运营需要应对 27 套不同制度。MiCA 用**单一牌照框架**取而代之——在一个成员国获得授权，就可以在整个欧盟通行（passport）。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**重要区别**：MiCA **不涵盖 DeFi**。欧盟认为需要更多时间研究，选择了"先研究再立法"的路径——这在很大程度上是正确做法。而美国的 CLARITY 在后期试图将 DeFi 纳入，这可能增加了立法难度。

</div>

</div>

---
layout: two-cols
---

# MiCA 单一牌照框架

<div class="mt-2 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**MiCA 之前**：27 个成员国各自为政，加密公司面对碎片化的合规要求——进入每个市场都需要单独申请牌照。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**MiCA 之后**：在任一成员国获得授权，即可在整个欧盟范围内以"护照"方式提供服务——单一规则，统一执行。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**V 的评价**：可预测的规则有时比完美的规则更好——企业能适应明确的监管，但无法在不确定中构建业务。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mica-passport.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 可预测规则 > 完美规则

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**V 的观点**："MiCA 并不完美，但一个主要司法管辖区终于有了清晰（尽管不完美）的监管制度，这本身就是一个胜利。希望美国能效仿。我们不能让完美成为优秀的敌人。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**KK 的补充**：值得注意的是，MiCA 的执行力度一直很低——各成员国几乎没有对加密公司发起过执法行动。过渡期结束后是否会发生变化，值得持续关注。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**对加密行业的意义**：欧盟的做法证明，"先建立框架，再逐步完善"是一条可行的路径。美国的困境——CLARITY 卡在政治博弈中——与欧洲形成鲜明对比。

</div>

</div>

---
layout: default
---

# 加密行业的"放大镜"困境

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**KK 的观察**："加密行业倾向于活在自己的小世界里。我认识很多加密人，他们以只和加密圈的人社交为荣——甚至有比特币主题的婚礼，所有来宾也爱比特币。"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**问题**：当行业只关注"加密专属"的话题时，会错过那些看起来"不够加密"但实际影响深远的问题。SEC/CFTC 的保证金 harmonization 听起来是 TradFi 的事，但它直接影响每一位永续合约交易者。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Jesse 的观点**：AI 出口管制、第三方原则、制裁 MEV——这些不是独立的问题，它们都是从不同角度碰触同一个核心：**在去中心化系统中，权力的边界在哪里？**加密行业需要从这些交叉领域中找到自己的声音。

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">本期对谈中最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

"如果冻结交易在排序竞赛中输给了转移交易，那么冻结的法律授权就无法执行。换句最简单的话说：**稳定币冻结本身可以被 front-run。**"
<div class="text-xs opacity-60 mt-1 not-italic">— V，引用《Ordering Power is Sanctioning Power》论文核心观点</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

"政府不再管代码能不能发布，而是管**谁可以登录使用它**。对加密行业来说，这就是一切——RPC 端点、桥、稳定币轨道、GitHub 仓库、钱包，全都可以被这样关掉。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jesse，分析 Legion 诉美国政府案的影响</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

"94% 的链上稳定币制裁由发行方自行发起。八年来，只有 9 次冻结真正在资金转移中途生效。7% 的被制裁地址在冻结到达时余额已经归零。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jesse 引用论文数据，反思稳定币冻结机制的实际效果</div>

</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">本期对谈中最值得记住的几句（续）：</div>

<div class="space-y-2">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

"我们不能让完美成为优秀的敌人。如果加密要规模化，我们需要常识性的监管。可预测的规则有时比完美的规则更好——企业能适应明确的监管，但无法在不确定中构建业务。"
<div class="text-xs opacity-60 mt-1 not-italic">— V & KK，讨论 MiCA 与 CLARITY 法案的对比</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

"赢家和输家正在被挑选——不需要程序，不需要明确的法律依据。我们不能对每个人说'用加密的金融轨道构建你的生活，用 Claude 提高你的效率'，同时又告诉他们'这一切随时可能因为国家安全或出口管制被切断'。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jesse，关于 AI 出口管制与加密行业的交叉影响</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

"你输入电脑的任何东西都不是私密的。句号。人们对 AI 聊天的隐私感和 Google 搜索完全不同——有人用 ChatGPT 做心理治疗，但完全没意识到这些对话可以被用作法庭证据。"
<div class="text-xs opacity-60 mt-1 not-italic">— KK & Jesse，关于 AI 与第三方原则</div>

</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
加密监管不只在立法大厅里发生——<br/>它在 mempool 里、在出口管制分类里、<br/>在 AI 隐私边界上，也在欧盟的牌照框架里。
</div>

<div class="mt-10 text-sm opacity-50">
完整播客：Unchained — DEX in the City<br/>
<a href="https://unchainedcrypto.com" class="opacity-70">unchainedcrypto.com</a>
</div>
