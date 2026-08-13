---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Inside the Coldcard Hack That Drained Over $100 Million in Bitcoin: Uneasy Money'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Inside the Coldcard Hack：5 年前的熵漏洞，如何偷走 1 亿美元比特币

<div class="text-sm opacity-60 mt-4">
Unchained Money · Coldcard 熵漏洞全面拆解 + EIP-8361 发行量之争
</div>

<div class="text-xs opacity-50 mt-6">
主持人 Kay & 白帽安全专家 Tay · 嘉宾：Sunny Kim（3Fold Labs 联合创始人）、Mike（EtherFi）· 2026 年 8 月 · 1 小时 7 分钟
</div>

---
class: text-left
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**一个藏了 5 年的熵漏洞**
Coldcard 硬件钱包 2021 年引入的随机数缺陷，五年后才被发现；五年间的种子和私钥正在被攻击者"挖掘"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**损失已超 1 亿美元**
Galaxy Research 追踪到 4 波攻击、1600-1800 枚 BTC 被盗；受害者恰是信奉自托管的硬核比特币人

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**这次不是朝鲜，那是谁？**
Tay 判断首波攻击者可能只是发现 bug 的普通人；"AI 两分钟找到 bug"的说法也站不住脚

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**一个 bug 为什么能藏 5 年**
代码在仓库间"跳"、fallback 层层掩盖错误——Matthew Green 2015 年的名言：出错就该"自焚"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**"价格"到底存不存在**
trade.xyz 上一笔 SK Hynix 盘前真实交易被判定"不该发生"，引出 DeFi 的哲学问题：资产没有"真实价格"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**EIP-8361 削减发行量风波**
48 小时评论期、零沟通，把以太坊生态惹毛了——"最强的方案就是别动它"

</div>

</div>

---

# Coldcard 事件：2021 年埋下的"小问题"

<div class="grid grid-cols-4 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**2021 年**
Coldcard 在获取随机数（熵）的方式上出错，bug 进入代码库

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**五年间**
无人发现，用户照常生成种子和私钥

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**约 7 天前**
首个攻击者发现并开始利用漏洞

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**现在**
攻击自由混战：五年间积累的种子被一批批"挖掘"

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 bg-opacity-30 border-l-4 border-blue-500 text-sm leading-relaxed">

**背景**：钱包最重要的工作之一，就是生成安全的私钥/助记词，靠的是"真正的随机性"——熵。这类问题有先例（比如 Profanity 漏洞），Tay 的说法很直接：<span class="italic">"If you don't do the math good enough, then everyone gets wrecked. The end."</span>（数学没做对，所有人都完蛋。）

</div>

<div class="mt-3 p-3 rounded bg-red-50 bg-opacity-40 border-l-4 border-red-500 text-sm leading-relaxed">

**如果你是 Coldcard 用户**：Kay 和 Tay 呼吁"像老人家一样拿起电话"通知身边的人（<span class="italic">"call them on the telephone like a boomer"</span>），不要慌、不要点 Google 第一条结果，但要尽快行动——<span class="italic">"Tell them to move their shit."</span>

</div>

---
layout: two-cols
---

# 为什么熵漏洞是"最可怕"的漏洞

<div class="text-sm leading-normal space-y-2 mt-2">

<div class="p-2.5 rounded bg-red-50 border-l-4 border-red-500">

**攻击是"持续出血"**
破解需要算力、时间和能源，所以损失会在**未来数周甚至数月**里一批批出现

</div>

<div class="p-2.5 rounded bg-orange-50 border-l-4 border-orange-500">

**无法通知受害者**
Coldcard 的卖点是不保留用户数据——<span class="italic">"we're not Ledger, we don't keep any data"</span>——没有任何渠道能提醒用户转移资产

</div>

<div class="p-2.5 rounded bg-purple-50 border-l-4 border-purple-500">

**受害者画像最讽刺**
恰恰是信奉自托管、冷存储、硬件钱包安全的硬核比特币人

</div>

<div class="p-2.5 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"Entropy issues in wallets are the worst vulnerability. Like the absolute worst." <span class="text-xs opacity-60 not-italic">— Tay 对熵漏洞的定调</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./entropy-attack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 损失规模：四波攻击，1 亿美元

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

<div class="text-3xl font-bold text-red-600 my-2">$100M+</div>
<div class="text-xs opacity-70">被盗总额（持续增长中）</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-3xl font-bold text-orange-600 my-2">1600-1800</div>
<div class="text-xs opacity-70">被盗 BTC 数量（枚）</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

<div class="text-3xl font-bold text-yellow-600 my-2">4 波</div>
<div class="text-xs opacity-70">已识别的独立攻击活动簇</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-3xl font-bold text-purple-600 my-2">数千</div>
<div class="text-xs opacity-70">可能的受害者人数</div>

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"波"是什么？**
Galaxy Research 的 Alex Thorn 一边收集受害者报告、一边做链上分析，把行动分成四个"波"——每个波可能是一个独立攻击者，但也可能波 1 和波 2 是同一伙人，现在还不能 100% 确定

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**为什么格外痛**
<span class="italic">"These are all super hardcore Bitcoiners who believe in self-custody and cold storage and hardware wallets and safety."</span>——攻击精准命中了最相信"自己掌控私钥"的那群人

</div>

</div>

---
layout: two-cols
---

# 算力阶梯：为什么损失会"分批"出现

<div class="text-sm leading-normal space-y-2 mt-2">

<div class="p-2.5 rounded bg-blue-50 border-l-4 border-blue-500">

**定制地址的类比**
想要一个"好看"的地址前缀要花多少算力？这正是攻击者"挖掘"弱种子的处境

</div>

<div class="p-2.5 rounded bg-green-50 border-l-4 border-green-500">

**每多要一位，成本爆炸**
前 4 位 ≈ 10 秒；"0xTay is the best" ≈ 一周；再加"and the smartest" ≈ 一个世纪；完全相同的地址 ≈ **万亿年**

</div>

<div class="p-2.5 rounded bg-red-50 border-l-4 border-red-500">

**熵不足 = 可被暴力搜索**
攻击者像挖矿一样循环尝试，直到命中真实钱包——所以收割是一波一波的

</div>

<div class="p-2.5 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"It's like a century. It's like, oh man, I really wanted that like vanity address, right?" <span class="text-xs opacity-60 not-italic">— 主持人</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vanity-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这次不是朝鲜：那到底是谁？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**先排除最常被怀疑的名字**
每次重大攻击大家都会问"是朝鲜吗？"——Kay 直接宣布：<span class="italic">"It's not actually North Korea this time."</span>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Tay 的推理**
<span class="italic">"North Korea just doesn't do these types of attacks."</span> 这类攻击需要巨额算力，而有一群人就以破解、挖掘熵漏洞为业多年

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**首波攻击者画像**
最可能是**发现代码库问题的人**——可能借助了 AI，也可能没有。Tay 的判断：一旦漏洞公开，后续模仿者会涌入

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**四波 = 四个组织？**
可能，也可能波 1 和波 2 是同一拨人——链上聚类分析还无法给出 100% 确定的答案

</div>

</div>

---

# AI 能找到这个 bug 吗？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Reddit 的流行说法**
"Claude 两分钟就能找到这个 bug"——Tay 拆穿：<span class="italic">"It's actually not finding it in two minutes. It's, it's finding other Reddit posts about it."</span> 它找到的是**别人写的讨论帖**，不是漏洞本身

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**更可信的实验**
Seer 的帖子：把 agent 放进沙箱、剥掉工具、用 Python 直接指向代码库——**大约 10 分钟**找到漏洞。Tay 表示还没亲自验证，"也许今天就去测"

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 bg-opacity-30 border-l-4 border-blue-500 text-sm leading-relaxed">

**为什么难归因**：漏洞公开之后，AI 会从公开报道里"学到"答案——所以事件发生后再说"AI 能找到"，就不可靠了。真正的问题发生在漏洞公开**之前**：它有没有能力独立发现一个藏在混乱代码库里的熵缺陷？这是 Tay 想亲手测试的。

</div>

---
layout: two-cols
---

# 一个 bug 为什么能藏 5 年：代码在仓库间"跳"

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**"这个代码库是一团乱麻"**
主仓库用 Python，随机数的真正实现却"跳"到另一个仓库、另一种语言（C 或 Go）——审查者必须自己追完整条链

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**fallback 链掩盖错误**
主持人做 agent 开发的仓库规则第 3 条：**"No fallbacks."** <span class="italic">"They will make a chain of fallbacks that makes it impossible to see what's going wrong."</span> 看起来一切正常，其实早出错了

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"These fucking agents. But they learned from us."
<div class="text-xs opacity-60 not-italic mt-1">— 主持人：Codex 会叠五层 fallback，但坏习惯是从人类学的</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./repo-hop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 出错就该"自焚"：Matthew Green 的名言

<div class="mt-4 p-5 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 leading-relaxed">

"If your code cannot get the randomness necessary or initialize the process like with any amount of confidence, then it should barf and catch fire."

<div class="text-sm opacity-70 not-italic mt-2">
— Matthew Green，2015 年 TrueCrypt 审计后（主持人引述）。拿不到可靠随机性，程序就该当场崩溃自焚，而不是带着坏熵继续运行
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么多数代码做不到**
对大部分功能，"优雅降级"才是好 UX：<span class="italic">"If the API call doesn't work, you wanna fallback to the other API."</span> 错误提示是坏体验，fallback 是常态

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**但熵是个例外**
Tay 的态度：<span class="italic">"Throw an error, stop hard."</span> 随机性失效时必须硬停——软性降级等于默默生成弱密钥，让用户毫不知情地暴露五年

</div>

</div>

---

# trade.xyz 的 SK Hynix 盘前交易

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**事件本身**
Hyperliquid 生态伙伴 trade.xyz 提供 RWA 永续合约（本就处于合规灰区）；有人在盘前**甩卖全部 SK Hynix**。交易是真实成交的，但 trade.xyz 表示这笔交易"本不该发生"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**RWA 定价的特殊难题**
比特币的价格可以直接从市场读，但 RWA **停盘时间随机、原因随机**，总得有人"告诉"合约价格是多少

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 bg-opacity-30 border-l-4 border-purple-500 text-sm leading-relaxed">

**Mike 的 Synthetix 经历**：为了让预言机覆盖盘外时段，他们和 Chainlink 等提供商磨了整整一年。对方的回答很有代表性：<span class="italic">"When the market is shut down, the market is shut down."</span> 市场关门了，我们为什么要在意关门期间的价格？——但盘前就是会发生真实交易。

</div>

---
layout: two-cols
---

# 没有"资产的价格"这回事

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Mike 的哲学追问**
SK Hynix 的"价格"是 12 小时前的收盘价，还是周六某个被清算的人急于脱手的价格？<span class="italic">"There is no such thing as the price of an asset, right? It is like... some kind of a construct."</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**所以需要一套规则**
Nasdaq 的做法：止损没触发？回滚交易。"我们来决定真实价格是什么。"问题在于 DeFi 本该只有合约，现在却被迫做**事后判断**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**市场就是会发疯**
<span class="italic">"Markets just do weird shit."</span> 如果有人愿意以 1 美元卖光 SK Hynix，这五分钟的"价格"就是 1 美元吗？这些问题没有干净的解

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./price-construct.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# UI 运营者的责任：Aave 的 50M ETH 换 500 美元

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**"Just madness"**
Aave 上曾有人通过 UI 用 5000 万 ETH 换了 500 美元。有人会说"这是无许可智能合约，用户自己点了确认"——Mike 不买账

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**运营 UI 就有责任**
<span class="italic">"If you're hosting the UI... you have a responsibility to prevent the user from doing something that's just like wildly insane."</span> Interactive Brokers 会亮红旗拦下疯狂下单

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Mike 的底线**
<span class="italic">"Forget warnings and red text like you just shouldn't let them do that."</span> 70% 价格冲击的交易直接拒绝。如果用户真的想卖？<span class="italic">"Well then he can do it somewhere else."</span>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**为什么大家不敢管**
主持人补充：一旦说"我要拦下用户"，Gary Gensler 会找上门（玩笑），Bitcoin maxis 也会——<span class="italic">"Bitcoin Maxis will come and get you."</span>

</div>

</div>

---
layout: two-cols
---

# Meta Oracle：Tay 在 Stakehouse 的答案

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**借贷协议的老问题**
接入资产时，用**公平市场价**（会剧烈摆动）还是**主要赎回价**（更稳定）？稳定币是不是就该钉死 1 美元？各家分歧很大

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Stakehouse 在 Morpho 上的实现**
Meta oracle：两套价格源 + 偏差监测，偏离超过阈值就发出通知、在两者间切换——"偏离时能关掉一边"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**但每个设计都有下游后果**
防住了"两西格玛"事件，可能在"三西格玛"事件里全员阵亡。主持人总结：<span class="italic">"Mechanism design is hard."</span>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meta-oracle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Aave 收缩"无处不在"战略

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**曾经的"全场上篮"**
Aave 是少数能在组织能力上快速铺开新链的协议——每条 L2、每个没听过的 L1 都有它的身影

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**现在开始后撤**
主持人的评价：<span class="italic">"This is negative EV to be everywhere."</span> 在陌生链上部署带来的风险，已经不再值得换取

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**更值得讲的是 Stani 的另一件事**
他公开反对 EIP-8361——这就是接下来要讲的发行量之争

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**以太坊生态的另一面**
Lido 即将把验证者门槛大幅降低（32 ETH 一个验证者的限制松动），让更多人更容易参与质押

</div>

</div>

---

# EIP-8361：48 小时通告的货币政策

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**提案本身**
EIP-8361 主张削减 ETH 发行量，留给社区的评论期只有 **48 小时**，随后就进入硬分叉的考虑与投票流程

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**零沟通**
<span class="italic">"Not a single, you know, DM message. Nobody was asked like, 'Hey, do you think this is a good idea?'"</span>——连最重要的协议团队都没有收到任何咨询

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**这是 5000 亿美元的网络**
Mike：<span class="italic">"This is a 500 billion dollar network."</span> 货币政策以这种方式推进，只能让人想到苏联笑话——"新计划来了，你们觉得怎么样？"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**对比 FOMC**
连美联储都有完整的流程、结构和信号机制，让整个系统可预期——以太坊这边"不知道在干什么"

</div>

</div>

---

# 小心你许的愿：EF 碎片化之后

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**"这正是我们当初要的"**
大家曾抱怨 EF 太集中——于是人才流出、各自成立组织（如 Justin Drake 等），每个组织有自己的执念。第一个大动作就是：砍发行量。<span class="italic">"I would file this in like the be careful what you wish for."</span>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**从"什么都管"到"只管自己关心的"**
EF 的 mandate 曾是关心以太坊的一切（实际等于什么都不关心）；现在每个组织只关心自己在乎的事，于是有了这次提案

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**积极的一面：辩论回来了**
过去两年治理弥漫着冷漠，EF 外的人觉得没有发声机会；如今<span class="italic">"it feels like anyone can say things"</span>——你也可以提"把发行量加到 5%、超过 4.5% 的国债收益率"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**但代价是混乱**
统一阵线分裂后，你会得到更多混乱、更多分歧、更多"这些人到底在干什么"的时刻

</div>

</div>

---
layout: two-cols
---

# 削减发行量真的有利于 ETH 价格吗？

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**提案的隐含逻辑**
少发行 → 更"通缩" → 利好价格。但主持人指出：ETH 质押者恰恰是**不卖 ETH** 的人

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**削减的反噬路径**
收益率从 ~2.5% 掉到 20 基点 → 数百亿美元 ETH 解除质押 → 流入市场形成抛压。<span class="italic">"If you're worried about ETH price... this is actually gonna be much worse."</span>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"增加发行的论据其实比削减更强——但最强的方案是：别动它。"
<span class="not-italic">（"The strongest thing is just don't fuck with it."）</span>
<div class="text-xs opacity-60 not-italic mt-1">— 主持人对 EIP-8361 的定调</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./unstake-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# TradFi 视角：增长优于紧缩

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**边际买家是 TradFi**
Mike 来自 TradFi：TradFi 爱收益率、爱"收入从哪来"的增长故事、爱回购——这些都不需要靠紧缩发行量实现

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**"Owner's earnings" 超 70 亿美元**
Rabbit Rabbit Capital 在 Sohn 大会 2024 的以太坊论文（Proto-Danksharding 之前）：网络净收入约 70 亿美元，约为当时市值的 **3%**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**燃烧机制已经能"通缩"**
<span class="italic">"The fees get burnt."</span> 费用燃烧本身就在减少流通——不必用紧缩伤害独立质押者、推高中心化、牺牲安全预算

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**增长思维的清单**
如何 onboarding 新用户、blob 费用要不要重估——这才是以太坊该回答的问题

</div>

</div>

---

# 0% 增发是好的货币政策吗？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**几乎没有经济学家会同意**
<span class="italic">"There's not a lot of economists out there, hardly any, that would argue that a 0% increase in the money supply per year is a good idea."</span> Mike 的结论：<span class="italic">"That's a Bitcoin brain worm. That's not, that's not sound economic policy."</span>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**货币供应应随经济扩张**
商品和服务变多，就需要更多货币来记账——<span class="italic">"Otherwise you get deflation, and deflation is bad."</span>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**"Ultrasound money" 叙事**
这套"超声钱"叙事与任何经济学流派都不合拍——包括奥地利学派

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**发问者本身也有立场**
削减派多出自 EF 背景（Justin Drake 等人），他们的哲学是"效率"——下一张细说

</div>

</div>

---

# EIP-1559 的前车之鉴

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1559 的本意不是"超声钱"**
Vitalik 的初衷是让剧烈震荡的手续费市场**稳定下来**，改善用户体验——主持人是当年推动者之一，2018-2019 年还帮忙筹款做审计

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**筹备了两年，叙事却被劫持**
燃烧机制原本不是重点，上线后却成了主叙事。"超声钱"的名号掩盖了它本来的目的

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**教训**
<span class="italic">"If you touch something, be prepared for it to touch you back."</span> 你碰系统，系统就会碰回来——且方向往往出乎意料

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**对当下的启示**
以太坊不缺"值得试"的东西；在没坏的地方动货币政策，不是聪明的实验。现状之所以是现状，是有原因的

</div>

</div>

---

# 质押比例：多少才算合理？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**一个很难推理的问题**
ETH 该有多少被质押？20%？50%？80%？——<span class="italic">"The more ETH you have staked, the less there is to sell."</span> 质押越多，可卖盘越少

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**大多数质押者不是财务驱动的**
<span class="italic">"A significant majority even today of ETH stakers are not financially motivated."</span> 他们是 ETH maxi——Tay 自嘲自己的收益率只有 0.5%（验证者老掉线），但"反正这 ETH 也没别的用，不如质押"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**"80% 质押有什么问题？"**
<span class="italic">"If it goes to 80% staked, like what is the problem with that?"</span> 大多数加密经济网络巴不得更多人质押代币——那是人们"买进网络"的信号

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**美元类比**
大多数美元都在"工作"：投资、T-bills、债券。ETH 质押=为网络工作并获得一小份费用——<span class="italic">"seems like a pretty reasonable... system to have in place"</span>

</div>

</div>

---

# 效率论 vs 激励现实

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**削减派的哲学**
<span class="italic">"Ethereum should have the absolute minimum amount of ETH staked that is required to secure the network."</span> 不为安全多付一分钱——这是"效率"论

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**拿比特币当论据**
<span class="italic">"Bitcoin pays like a billion dollars a day to secure the network."</span> 有人以此论证安全预算不合理——但这本就是被扭曲的数字

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**主持人的反驳**
效率论能自圆其说，但它忽略了真实世界的激励、人做事的原因和激励的方向性——<span class="italic">"a bit nonsensical"</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**别的网络求之不得**
<span class="italic">"Most crypto economic networks would kill to have more people stake their token."</span> 高质押率是共识，不是浪费

</div>

</div>

---

# 会通过吗？混沌也许是好事

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**会不会通过？**
主持人干脆利落：<span class="italic">"I hope not. No. No way."</span> 若真被硬推过去，<span class="italic">"it would be pretty crazy"</span>——但他判断会**反复回来**，因为真的有人在乎这件事

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**主持人的 hot take**
<span class="italic">"More chaos in Ethereum and less kind of monoculture is probably good."</span> 大家又开始讨论 ETH、讨论以太坊本身了——没有这场风波，这些对话不会发生

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**一个开放辩论的新时代**
任何人都能写提案、都能发声：你可以主张砍发行量，也可以主张加到 5%——重点是讨论重新开放了

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**给提案者的建议**
如果目标真是让 ETH 价格起飞，去找已买入的人和潜在边际买家聊聊——<span class="italic">"Better to be roughly right than precisely wrong."</span>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"Entropy issues in wallets are the worst vulnerability. Like the absolute worst."
<div class="text-xs opacity-60 mt-1 not-italic">— Tay 谈 Coldcard 熵漏洞：最可怕的漏洞类型</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It's actually not finding it in two minutes. It's, it's finding other Reddit posts about it."
<div class="text-xs opacity-60 mt-1 not-italic">— Tay 拆穿"Claude 两分钟找到 bug"的说法</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"These fucking agents. But they learned from us."
<div class="text-xs opacity-60 mt-1 not-italic">— 主持人谈 agent 的 fallback 链：坏习惯是从人类学的</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"There is no such thing as the price of an asset, right? It is like... some kind of a construct."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike 谈 SK Hynix 盘前交易：价格只是规则构造</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Forget warnings and red text like you just shouldn't let them do that."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike 谈 UI 运营者的责任：疯狂交易该直接拒绝</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Better to be roughly right than precisely wrong."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike 引用 Munger/Buffett 名言谈发行量：现状就是"大致正确"，别去精调</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="text-lg opacity-70 mt-6">
"If your code cannot get the randomness necessary or initialize the process like with any amount of confidence, then it should barf and catch fire."
</div>

<div class="text-sm opacity-50 mt-8">
Matthew Green · 2015 年 TrueCrypt 审计后（主持人引述）· Unchained Money · 2026 年 8 月
</div>
