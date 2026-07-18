---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '为什么 Cap 把稳定币空投奖励从 1100 万砍到 400 万美元：Uneasy Money'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 为什么 Cap 把稳定币空投奖励<br>从 1100 万砍到 400 万美元

<div class="mt-8 text-lg opacity-70">
Uneasy Money — Kane Warwick · Tay · Benjamin · Waiso
</div>

<div class="mt-2 text-sm opacity-50">
2026-07 · 89 分钟
</div>

---
layout: two-cols
---

# 为什么这期值得关注

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**稳定币空投的实验与翻车** — Cap 开创了 StableDrop 机制，承诺 1100 万美元奖励，但因市场寒冬 ICO 只募到 400 万，被迫大幅削减。这是一场关于承诺、预期与现实的经典创业课。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**积分计划的根本矛盾** — 为什么几乎所有 DeFi 项目的积分/空投最终都会走向代币归零？Cap 团队用自己的教训给出了深刻反思。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**L2 结算争议再起** — Robinhood Chain 上线后，人们发现它付给以太坊的费用微乎其微。ETH 是否在贱卖自己的结算层？涨价又会发生什么？

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**安全攻击的残酷一周** — Barnbridge 治理攻击、Alchemy 2300 万美元私钥泄露，以及 Ostium 团队五年努力一夜归零的故事。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Crypto Twitter 算法回归** — 经过近一年的"企鹅视频"信息茧房，Elon Musk 突然翻转了算法，老朋友重新出现在时间线上。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stable-drop-vs-airdrop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Cap 的 StableDrop：1100 万美元的承诺

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**什么是 StableDrop？**

Cap 是 MegaETH 生态的稳定币协议（CUC USD）。2026 年 2 月，团队宣布了一个创新机制：不发行代币空投，而是通过 ICO 募资，把募资额的约 5% 以**稳定币**形式直接发给早期用户。

目的很清晰：买代币的人和领空投的人利益不对齐——空投方想尽快抛售，买家要等抛售结束。给稳定币而不是代币，理论上能让双方都满意。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**但预算建立在假设之上**

团队预期代币估值能支撑 1100-1200 万美元的奖励预算。"我们有点过于乐观了，"Benjamin 承认，"市场暴跌，加密寒冬来了。"

ICO 推迟了数月。当最终在近期完成时，同样的 5% 只值约 **400 万美元**——不到原计划的一半。

Cap 面临的是一个经典困境：是硬撑着给足 1100 万（葬送项目），还是大幅削减（激怒社区）？

</div>

</div>

---
layout: two-cols
---

# 传统空投 vs StableDrop

<div class="space-y-3 mt-4 text-sm leading-relaxed">

**传统空投的问题**

项目方预留约 5% 代币给早期用户。用户领取后立即抛售 → 代币价格暴跌 → 项目方付钱给 Binance 上币 → 最终归零。这个循环在加密行业反复上演。

**StableDrop 的逻辑**

Cap 想做不同的事：先通过 ICO 拿到真金白银，把其中 5% 直接分给用户。用户拿到的是稳定币，不需要抛售——买家和空投方的利益第一次对齐。

**但核心风险被低估了**

传统空投的风险是"代币不值钱"；StableDrop 的风险是"如果募不到预期的钱，预算直接缩水"。两种机制将不确定性放在了不同位置，但哪一种都不是免费的午餐。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stable-drop-vs-airdrop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 市场现实撞上理想设计

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**从 1100 万到 400 万**

当团队 IPO 时，市场已经面目全非。5% 的估值从 1100-1200 万缩水到 400 万。团队陷入了激烈争论：要不要发代币来弥补缺口？

"绝对不行，"Benjamin 说，"如果发代币，那我们就跟其他项目一样走向归零。你必须照顾好利益相关者。"

最终的决策：坚持 5% 预算原则，不超额支出。与其给部分人不公平的收益、让另一些人亏损 90-100%，不如确保**至少没有人亏钱**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**"让所有人回本"**

团队决定优先保护 YT（收益代币）持有者——他们是亏损最严重的人群。让这些人拿回本金，其余用户虽然没赚到钱，但至少没有损失。

"我们跟投资者、用户都讨论过，"Benjamin 解释，"结论是不要让任何人亏钱。Farmers 不滿意——那是正常的，他们永远不会满意。但他们对我们是重要的。"

这是一个务实的妥协：在不可控的市场环境中，选择了最小化伤害的方案。

</div>

</div>

---

# 积分计划：一场没有上限的营销

<div class="space-y-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Kane 的原始建议："别做积分计划"**

Kane Warwick 在节目中透露，几个月前他就警告过 Cap 团队：不要做积分计划，慢慢增长就好。"我觉得积分计划就是营销。加密行业有个奇怪的现象——我们把代币当作营销费用发出去，然后期望用户不要立刻抛售。"

但 Cap 没有听从这个建议。积分计划上线后，TVL 迅速膨胀到 5 亿美元，但这些流动性对业务几乎没有价值——Cap 根本没有那么多借款需求。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="font-bold text-red-600">无上限的营销预算</div>
<div class="text-xs mt-1 opacity-70">用户不断涌入、不断存款、不断赚积分，营销成本完全失控</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-600">临时的 TVL</div>
<div class="text-xs mt-1 opacity-70">积分一结束，所有人撤离。这些流动性对业务不产生任何长期价值</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold text-yellow-600">Farmers 永不满足</div>
<div class="text-xs mt-1 opacity-70">Kane："即便给他们 2000 万，他们也还是会抱怨。"</div>
</div>

</div>

</div>

---
layout: two-cols
---

# 积分计划的内在死循环

<div class="space-y-3 mt-4 text-sm leading-relaxed">

**一切从"吸引 TVL"开始**

项目启动积分计划 → 大量用户涌入存钱 → TVL 数字很好看。但问题是，这些 TVL 是"热钱"——用户只是为了积分而来，没有任何长期承诺。

**营销预算的失控**

不像传统公司的固定营销预算，积分计划的成本跟 TVL 成正比增长。没有上限、没有刹车——越多人参与，项目方欠的"债"越多。

**积分结束 = TVL 归零**

活动一停，用户全部提款走人。项目方发现自己什么都没得到，却背上了一笔巨额"债务"——要么硬撑（耗尽跑道），要么违约（激怒社区）。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./points-death-spiral.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 加密激励的根本困境

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**"激励机制非常扭曲"**

Kane 在节目中直言不讳："我们对自己做了这些。"加密行业不断发明新的机制来修复旧机制的问题——积分、空投、StableDrop——但似乎每次创新只是在不同的位置制造新的问题。

Benjamin 的反思是：如果重来一次，他会做两件事——**设定明确的预算上限**，以及**更好地沟通**。"我们承诺了一个无法兑现的数字，这是很大的错误。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**在公众面前建设的代价**

Waiso 指出，公开建设本身就很难。"Kane 自己就因为跟社区对喷而惹上麻烦。"即时反馈和批评是残酷的，但你必须做出决定、承担后果，不偏袒任何人，然后接受它。

加密行业的创始人面临一个特殊困境：你的用户同时也是你的投资者、你的批评者、你的流动性提供者——当事情不如预期时，所有人都会同时对你发火。

</div>

</div>

---

---
layout: two-cols
---

# Cap 的复苏之路

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**现状：比积分时期更健康**

Benjamin 分享了两个关键数据：

- **98% 的 TVL 来自非积分 farming 用户**，而是机构客户——团队去 pitch、对方认可 Cap 后签下多月的长期合作协议。
- **链上收益率处于历史低位**，而 Cap 的商业模式是从实体经济导入收益，因此 Cap 的收益率仍具竞争力。

"我们不需要太多努力就能说服 LP 合作。比起积分时期，现在的位置要好得多。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**协议本身没有问题**

Waiso 强调了一个重要事实：这次 StableDrop 争议跟协议的技术安全性毫无关系。"协议功能完全正常。我们在公告前就提前计算了可能的赎回量，确保有足够的流动性覆盖。一切都在预期之内。"

争议纯粹是关于激励机制和沟通，而非协议的技术可靠性。机构借款方渠道正在逐步落地——这些交易需要数月，涉及法律审核和多方决策。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cap-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 在公众面前建设有多难

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"必须有人来做这件事"**

Benjamin 坦承，在公众面前建设项目是极其艰难的。"你必须做出决定，然后承担后果。不偏袒任何人，不对任何人区别对待，然后接受它。会有很多人在网上攻击你、说各种话——我们在这个行业待了这么多年，都知道这一点。"

Waiso 指出，Kane 自己就曾因为在 Twitter 上回怼社区而惹上麻烦。"即时的批评、那些隐藏的动机——公开建设真的很难。但必须有人来做。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**给年轻团队的建议**

当被问到会给考虑做积分/TGE 的年轻团队什么建议时，Benjamin 的回答很务实："现在的市场环境完全不同了。加密领域的利率极低。一个新项目跳过所有激励计划，直接去做基金融资和机构合作，要容易得多——非常、非常容易。然后你可以利用这一点来吸引零售用户的兴趣，因为他们通常会看 TVL 来做决策。"

Kane 补充："我个人害怕社区——你真的赢不了他们。所以你必须回归你最擅长的事，然后做出你的选择。这并不理想，但这是现实。"

</div>

</div>

---

# Crypto Twitter 回来了

<div class="space-y-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**"他们翻转了开关"**

Kane 描述了近一年来的 Crypto Twitter 体验："我们都在这里，但互相看不到。Nikita（指 Elon Musk）的算法让你只能看到 20 个最糟糕的人——0xSifu、各种垃圾账号——好像整个加密社区都跑光了。我们都在想，大家都去哪了？实际上每个人都在，只是被算法隔离了。"

然后在一夜之间，算法被重置了。"突然间我在推特上发帖，有人回复我，我想起来了——哦，我记得你是谁。"

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**熊市中的情绪放大器**

Benjamin 补充了一个洞见：算法问题因为 ETH 价格低迷而被放大。"跟发了什么或没发什么无关。当人们变穷了，就开始互相指责、内讧。如果 ETH 在 1 万美元，同样的状况下不会有任何争吵。"

价格充当了情绪的放大镜——在熊市中，算法给你看的只有愤怒的人，这让一切感觉更糟。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**社区的真实面貌**

Tay 在纽约的观察提供了一个对比："在纽约见到的人都很 bullish——机构来了，每个人都在努力工作。但在 Crypto Twitter 上完全是另一回事。我现在每天只给自己一次刷推的机会。"

线下社区和线上时间线的脱节，揭示了算法对行业心理健康的深刻影响。

</div>

</div>

</div>

---

# ETH Systems：又一个 EF 分拆

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**前 EF 成员的又一次出走**

ETH Systems 是继 ETHLido 之后又一个从以太坊基金会（EF）分拆出来的团队。这批人原本在 EF 负责机构合作和隐私相关工作，阵容包括 Joe Lubin、SharpLink、Bitmine 等 ETH 大户的支持。

这个趋势的背景是：EF 在过去一两年里内部和外部的动荡不断加剧，许多有能力的成员选择离开，以更灵活的组织形式继续做同样的事。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**"私有化更好"**

Benjamin 对分拆的态度很明确："我喜欢这种事。你希望一切都由国家实体来做，还是私有化？现实世界告诉我们私有化更好。"

他的逻辑是：EF 的结构限制了成员的自主权。分拆出来后，团队有了更多"agency"——做决策的自由和执行的能力。Kane 对此表示认同："只要能让人真正去建造东西、交付东西，并且为自己建造的东西感到自豪，这就是好事。"

</div>

</div>

---

# 以太坊：研究者 vs 交付者

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"我们是一个研究者社区，不是交付者社区"**

Benjamin 一针见血地指出了以太坊生态的文化问题。"在 ETH Denver，我们看到的是研究人员，不是交付者。研究当然非常重要、有很多价值，但我作为一个创始人，始终偏向行动——先做出点东西，测试它，看它怎么运作。"

Kane 补充说，以太坊花了太多时间在理论上。"我们作为生态系统，需要变得更好地去实现我们的梦想。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**价格与情绪的正反馈**

节目中的共识是：当 ETH 在低位时，人们更倾向于互相指责和内部斗争；当价格好时，同样的问题不会被放大。"如果 ETH 在 1 万美元，根本不会有这些争吵。"

但 Kane 认为真正的解决之道不是等价格涨回去，而是在熊市中就做出艰难的改变："熊市是做决策的最佳时机——把创可贴撕掉。让人们在熊市中生气，到了牛市他们早就忘了。"

</div>

</div>

---

# Kobe 接手 Base App

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Jesse 把 Base App 交给了 Kobe**

Jesse Pollak（Base 创始人）将 Base 钱包应用的管理权移交给了 Kobe（Coinbase 早期核心成员）。Kobe 发了一条典型的推文："给我 30 天时间修复，如果修不好，你可以叫我骗子。"

这个人事变动背后是 Coinbase 在重组其产品架构——Base 网络本身仍然很大，但 Base 钱包 App 将由 Kobe 负责产品方向。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**"Kobe 早该退休了，但他还在"**

Tay 评价道："Kobe 十年前就该退休了。所以每当看到这样的创始人还在坚持，我都很尊重——他们是真正热爱这个事业的人。"

Kobe 加入 Coinbase 后的独特之处在于：他从不高高在上。刚加入时他直接在 Twitter 回复里做客服，帮用户解决钱包问题。Benjamin 认为这种"接地气"正是 Coinbase 需要的——"他一直在把 Coinbase 的产品人员往下拉一档，让他们回到社区里，回到倾听中。"

</div>

</div>

---

# Robinhood Chain：一场轰动的登场

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**两周内的爆发式增长**

Robinhood Chain 上线仅两周，链上活动呈指数级增长。但出乎意料的是，大部分活动来自** meme 币交易**——并非许多人预期的代币化股票或传统金融产品。

"这就是市场的自然选择，"Benjamin 评论道，"当前环境下当然是 meme 币先火。"但团队担心的是可持续性——历史反复证明，新链的热度通常维持一个月左右就会降温。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**真正值得期待的东西**

Waiso 对 meme 币的态度很明确："meme 币是垃圾，对 Base 也没有好处。注意力经济没有意义。"

他希望看到的是 Robinhood 将 Robinhood Gold（国债收益产品）上链，或者像 Stripe 那样将存款引入链上。"这才是真正有价值的事。"

Benjamin 补充：Morpho 与 Robinhood 的整合是一个亮点——这为其他 DeFi 初创公司提供了可参照的路径。

</div>

</div>

---

# Robinhood Chain 与 meme 币困境

<div class="space-y-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"一切都很美好，直到所有人都被 rug"**

Kane 对 meme 币驱动的增长持谨慎态度。"你可以靠 meme 币吸引早期注意力——如果 Robinhood Chain 上线时说'我们有 Morpho 借贷，年化 7%'，没人会在意的。但最终你必须把这些 meme 用户转化成别的什么。你不能只靠这一波，因为一旦所有人都被 rug，你的用户就没钱了。"

Cash Cat meme 币的流行有一个有趣的背景：它据说是 Robinhood 原来的名字候选之一，这在加密圈成了一种内部笑话。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**竞争对整个生态系统是好事**

Tay 将 Robinhood Chain 和 Base 放在一起看："Coinbase 有 Base，Robinhood 有 Robinhood Chain。竞争越多越好——它让整个领域变得更好。"

Benjamin 指出了更重要的效应：每一条链都在将其用户引入加密世界。"Robinhood 把它的 App 用户引导到链上，Coinbase 也一样。对 MegaETH 来说，说服一个已经在链上的 Robinhood Chain 用户使用自己的平台，比说服街上的普通人下载钱包容易得多。"

</div>

</div>


---
layout: two-cols
---

# L2 结算：谁在买单？

<div class="space-y-3 mt-4 text-sm leading-relaxed">

**Robinhood Chain 引发的老问题**

Robinhood Chain 上线后，人们开始算账：Robinhood 从用户交易费中赚了多少？付给 Arbitrum DAO 多少？付给以太坊 L1 多少？

结果令很多 ETH 持有者不满：L1 只收到了极小的一部分——几乎可以忽略不计的 Blob 费用。表面上，Robinhood 在"蹭"以太坊的安全性，却几乎不给"母舰"付钱。

**Kane 的立场：ETH 应该收更多**

"我一直主张 ETH 应该收更多。L2 从以太坊获得了巨大优势——不需要处理以太坊必须处理的所有事情——但仍然是一条链。ETH 没有捕获足够的价值，这是明确的。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./l2-settlement-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# L2 "寄生虫"之争

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Kane 的激进观点：让 L2 变成 L1**

Kane 认为，当前 L2 格局是一种"奇怪的路径依赖现象"。"如果以太坊大幅提高 L2 结算价格，会发生什么？那些离不掉的 L2 只能老老实实付钱；能离开的会离开，然后变成 L1 在平等的竞技场上竞争。"

他的逻辑是：第 85 个 L2 如果必须自己出块、运行验证节点、维护客户端，根本活不下去。"你不能假装去中心化——这比看起来难得多。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Benjamin 的务实反驳：资本成本说明一切**

Benjamin 提供了一个不同的视角：即使以太坊收费极低，留在以太坊生态内仍有实质性的好处。"看看 Monad 上 Aave 的 USDC 供给利率——跟以太坊 L2 比高得多。要么这些 L1 根本没流动性，要么有规模但成本高得多。这是**市场在告诉你，脱离以太坊的成本更高**。"

作为 L2，他宁愿多付一点结算费，只要能节省 2% 的资本成本——这不是一个简单的"谁付了多少"的问题。

</div>

</div>

---

# 熊市是变革的窗口

<div class="space-y-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"现状就是一切"**

Kane 提出了一个关于加密治理的深刻观察：现状拥有巨大的惯性。"看看我们现在维持的一些疯狂现状——它们能存在，是因为所有的既得利益者都在捍卫它。当你想在牛市中改变任何事情时，所有人都会拿着干草叉来围攻你。"

所以他的建议是：**在熊市中做艰难的决定**。"把创可贴撕掉。让人们在熊市中生气——到了牛市他们早就忘了。在熊市中建立新的现状，然后让它成为牛市的稳定均衡。"

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**但需要胆量**

Benjamin 承认风险："你做错了就会被烧死。仅此而已。"

Kane 回应："没错。但在熊市被烧死总比牛市好——人们记忆很短。到了牛市，只有五个人还会为此哭诉。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**"不要离开以太坊"**

Benjamin 最后强调了一个根本性的要点：每一条在以太坊之外构建的链，如果想获得真实资本，都得用代币来换。"这已经说明了一切。Robinhood 至少还在以太坊上构建，而不是像 Stripe 那样自己搞一条链。我宁愿看到更多人这么做。"

</div>

</div>

</div>

---

# Barnbridge：从 SEC 到治理攻击

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**SEC 的"杀鸡儆猴"**

Barnbridge 是一个早期的 DeFi 衍生品协议，曾是 OG degens 的最爱。上一届 SEC 将其列为重点打击对象——他们将其定性为"未注册协会"，施加了巨大的法律压力。

Kane 回顾了背景："SEC 当时的策略是战术性的。他们会挑一个他们认为能碾压的小项目，彻底摧毁它，然后在社交媒体上炫耀。目的不是保护投资者——是发信号。然后他们会拿着这些'胜利'去敲 Uniswap 或 Aave 的门。"

Barnbridge 试图通过 DAO 治理来规避法律风险——所有合约升级都由代币持有者投票决定。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**但 DAO 治理本身成了攻击面**

五年后，Barnbridge 的治理活跃度已经极度萎缩。提案 14（五年来只有 14 个提案）被通过——攻击者获取足够代币后，利用治理流程更新了协议的核心合约和代理。

他们没有直接掏空国库，而是利用了另一个更隐蔽的攻击面：**开放授权（open approvals）**。过去五六年中，任何与 Barnbridge 交互过的地址，如果曾经给过无限授权，攻击者就能转走其资金。

Tay 指出："这就跟上次一样。没人盯着治理。"

</div>

</div>

---

# 开放授权：沉睡的定时炸弹

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**"我确定里面有我的钱"**

Kane 坦言，他几乎肯定自己某个遗忘的钱包里还有对 Barnbridge 的开放授权。"我甚至不想去查。Tyler 从坟墓里爬出来最后一次毁掉我。"

攻击分三波进行，总损失在 60-80 万美元左右——不算特别巨大，但因为涉及大量个人地址的分散资金而令人不安。Tay 的团队扫描了 ENS 名称和 Twitter 账号的数据库来通知受害者。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Revoke.cash 和权限委托：一个亮点**

Tay 分享了一个重要的新工具：Revoke.cash 现在支持通过 MetaMask 的权限系统（基于 7702 等新标准）实现**自动撤销授权**。

"你可以给 Revoke.cash 一个非常具体的权限——只允许它撤销你的开放授权，不能做任何其他事。不会花你的钱，不会替你开授权。一旦发生攻击，已验证的请求可以自动执行撤销。"

这是智能合约钱包愿景的一个实际落地案例——"我们讨论这件事已经十年了，现在它真的来了。"

</div>

</div>

---

# Alchemy：2300 万美元的私钥泄露

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**又一周，又一个私钥泄露**

Alchemy 的原生代币被攻击者通过泄露的私钥全部转移。Tay 的团队追踪了资金流向整整八个小时，攻击者仍在持续转移——这暗示着一个高度组织化的威胁行为体。

"我们还没有将其归因到具体的威胁行为体，"Tay 说，"但我在追踪这些资金八小时不间断——他们也没有停，我根本跟不上。这是一个相当强的指标，说明很可能是朝鲜的威胁行为体在操作。"

总损失约 2300 万美元，另有一个钱包存有约 700-900 万美元因某种原因未被触及。资金已经基本完成洗钱。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**根本问题：不该存在的密钥**

攻击的关键是一组控制协议价格转发器（Price Keeper Forwarder）的私钥被泄露——不是直接持有资金的密钥，而是一个间接但致命的入口。

"NFT 从链上转走只需要几分钟，"Tay 感叹道。"一旦黑客发生，你只能坐在那儿回应、试图止损、做一切能做的事。但最终，事后的努力几乎没什么大影响。我们冻结了一些资金，但不多。"

</div>

</div>

---

# "别做这个"：Ostium 的悲剧

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**2021 年纽约的深夜对话**

Kane 讲述了一个令人心碎的故事：2021 年在纽约的一个 Synthetix 活动上，凌晨一点，三个非常年轻的创始人——大概 18、19 岁——走过来问他关于衍生品协议设计的问题。

"我们进行了大概 90 分钟的深入讨论。到了凌晨 2:30，我问他们到底是做什么的。他们说在做一个衍生品协议。我说：'说实话，我的建议是——别做。你们会经历的痛苦和折磨根本不值得。用你们的命做点别的。'"

Waiso 补充说他们是他的办公室邻居："那些家伙非常拼。每天都能看到 Cal 和 Dori 在开会。看到这一切被毁掉，真让人难受。"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**五年努力，一个错误**

Ostium 团队没有听 Kane 的建议。他们在 2022 年初正式上线，熬过了 2022-2026 年四年的熊市和波动——这本身就是一项了不起的成就。然后，一个错误，一切归零。

Kane 说："这就是为什么这些安全事件让我如此痛苦的原因。他们可能还会恢复——像 Euler 那样——但那需要两年甚至更久的艰苦重建。"

Euler 的案例是一个罕见的正面范本：团队在被黑后拒绝接受结果，最终追回了资金。但 Euler 团队的能量和决心是异常的——不是每个团队都有条件做到。

</div>

</div>

---

# Euler：例外的光芒

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**"我们不会接受这个结果"**

在所有被黑的项目中，Euler 是一个罕见的正面案例。Tay 回忆说，Euler 的创始人 Michael 在黑事件发生后的状态近乎偏执："我跟他聊的时候，大概是两三周后。他说'不，不，不，我们不会容忍这件事。'就像《飓风营救》里的 Liam Neeson——'我在职业生涯中积累了一套技能，我要用它们去追捕这些人。'"

Michael 的偏执感染了整个团队——Tay 承认她为 Euler 案投入的时间远超过任何其他案件，正是因为被那种"全情投入"的能量所驱动。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**追回资金的可能性极低，但 Euler 做到了**

大多数被黑的项目永远追不回资金。Euler 的案例极其罕见：他们不仅追回了钱，而且团队的能量和执行力是关键因素。但这不是可以复制的剧本——它需要时机、运气、和一支"不接受失败"的团队。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**Ostium 能成为下一个 Euler 吗？**

Kane 对 Ostium 抱有希望——"他们非常努力，拥有四年的 track record。"但 Euler 花了两年的艰苦重建才回归。Ostium 团队面临的是一样艰难的道路。

"你可以从更糟糕的黑客事件中恢复过来，"Kane 说，"但这需要大量的努力。"

</div>

</div>

</div>

---
layout: two-cols
---

# 纵深防御：我们知道药方，但拒绝服药

<div class="space-y-3 mt-4 text-sm leading-relaxed">

**安全的最佳实践不是秘密**

Tay 列出了每个加密构建者都应该执行的清单：多签管理所有管理员函数、密钥物理隔离和访问控制、杀毒软件和 EDR、开启日志、纵深防御分析。

"这不是未知的东西。我们知道自己得了什么病，也知道该吃什么药。我们只是拒绝服药。一周又一周，同样的故事重复——私钥泄露。"

**"默认假设每个 EOA 都已被攻破"**

Benjamin 的建议更进一步：在设计系统时，从一开始就假设每一个用于管理的 EOA 都已经被攻破了。"如果这个假设成立，你的系统还安全吗？这个思维方式可能能救你的项目。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./security-defense-layers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三哩岛与复杂系统的正常事故

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**"复杂系统存在'正常事故'"**

Kane 用一个核电站的类比来解释加密安全中的系统性风险。"你运行的是一个复杂系统。你有一堆保护措施和缓解措施。但有一天有只老鼠跑进来，有人说'我就把门撑开一晚上'。然后那个房间的空调坏了，温度上升……这是一个级联效应。所有的保护措施——只要有足够长的时间和人的参与——熵总会找上门。"

三哩岛事故据称是因为有人为了阻止鸟粪而盖住了水冷格栅。你永远不知道哪个看似无关紧要的小决定会在什么条件下引发灾难。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**加密的特殊性：对抗性环境**

普通复杂系统只需应对"熵"；加密系统还要对抗**有恶意的人类**——他们会研究你核电站的设计图，找到那个"如果有人在特定时刻按下这个开关，整个系统就会崩溃"的漏洞。

"朝鲜的那些人很聪明，"Tay 直白地说。"不是所有的问题都可以用代码解决。越来越多的攻击已经从合约漏洞转向了最基础的运维安全——私钥管理、访问控制、社工。我们花了很多年来解决'不可解决的'代码漏洞，却忽略了'可解决的'人因漏洞。"

</div>

</div>

---

# 在 DeFi 中建设的代价

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**"你必须出于信念而做"**

经过 Barnbridge、Alchemy 和 Ostium 的讨论后，嘉宾们达成共识：在 DeFi 中建设是一个极其痛苦的选择。"我们做这个，是因为我们从根本信念上认为这就是未来，"Benjamin 说。

Kane 在 2021 年对 Ostium 团队说的"别做这个"，并不是嘲讽——而是真诚的警告。他经历过 Synthetix 的建设历程，知道那种痛苦的程度。"你根本想象不到在 DeFi 中建设有多痛苦。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**少数幸存者的韧性**

Euler 团队的案例被反复提及：他们被黑后，创始人 Michael 的状态近乎疯狂——"我不会接受这个结果。我职业生涯中积累的所有技能都是为了找到这些人。"整个团队被这种能量感染，最终追回了资金。

但 Euler 是个例外。大部分被黑的项目再也没有恢复。Kane 对 Ostium 团队抱有希望——"那些家伙非常努力，有长达四年的 track record，但他们面临的道路极为艰难。"

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"我们承诺了一个无法兑现的数字。如果能重来，我们会设定预算上限，并更好地沟通。"
<div class="text-xs opacity-60 mt-1 not-italic">— Benjamin，Cap 联合创始人，反思 StableDrop 的核心教训</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"我们是一个研究者社区，而不是交付者社区。我作为一个创始人，始终偏向于行动。"
<div class="text-xs opacity-60 mt-1 not-italic">— Benjamin，谈以太坊生态的执行文化缺失</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"熊市是做决策的最佳时机——把创可贴撕掉。让人们在熊市中生气，到了牛市他们早就忘了。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane Warwick，Uneasy Money 主持人</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"默认假设每个 EOA 都已被攻破。如果这个假设成立，会影响到你的系统吗？"
<div class="text-xs opacity-60 mt-1 not-italic">— Benjamin，谈加密安全的设计思维</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"我们知道自己得了什么病，也知道该吃什么药。我们只是拒绝服药。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tay，MetaMask 安全专家，谈行业对基础运维安全的忽视</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的声音：</div>

<div class="space-y-2">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"用代币激励做营销，却期望用户不抛售——这是加密行业最奇怪的矛盾之一。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane Warwick，反思积分/空投机制的根本缺陷</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"有复杂系统、有人类参与、运行时间足够长——熵总会找上门。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kane Warwick，用三哩岛核事故类比加密安全</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"当人们变穷了，就开始互相指责、内讧。如果 ETH 在 1 万美元，同样的状况不会有任何争吵。"
<div class="text-xs opacity-60 mt-1 not-italic">— Benjamin，谈价格对社区情绪的决定性影响</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"在 DeFi 中建设极其痛苦——你必须出于信念而做，因为我们从根本信念上认为这就是未来。"
<div class="text-xs opacity-60 mt-1 not-italic">— Benjamin，谈为什么加密建设者仍然在坚持</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"一旦黑客发生，你只能坐在那儿回应。事后的努力几乎没什么大影响。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tay，描绘安全事件后的无力感</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
链上发生的事，永远不会只留在链上。
</div>

<div class="mt-4 text-sm opacity-50">
Uneasy Money · 2026 年 7 月
</div>

<div class="mt-4 text-sm opacity-40">
Kane Warwick · Tay · Benjamin · Waiso
</div>
