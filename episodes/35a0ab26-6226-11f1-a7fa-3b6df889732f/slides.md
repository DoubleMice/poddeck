---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'What Two DOJ Cases Reveal About the Legal Risks of Prediction Markets: Bits + Bips'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# What Two DOJ Cases Reveal About the Legal Risks of Prediction Markets

<div class="pt-12">
  <div class="text-2xl font-medium">Bits + Bips · Sam Enzer</div>
  <div class="text-base opacity-60 mt-4">Former SDNY Prosecutor · Partner at Cahill · Founder of Cahill Next</div>
  <div class="text-sm opacity-50 mt-8">Hosted by Steven Ehrlich · June 2026</div>
</div>

---

# 为什么这期特别？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>首次 DOJ 起诉预测市场</strong><br/>
<span class="text-xs opacity-70">两起历史性案件——军人用机密情报、Google 员工用内部数据——同时瞄准 Polymarket 交易</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>法律概念被重新定义</strong><br/>
<span class="text-xs opacity-70">"内幕交易"不是法律术语——实际指控是商品欺诈和电信欺诈（wire fraud）</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>合法与非法仅一线之隔</strong><br/>
<span class="text-xs opacity-70">三类合法利用非公开信息的情境——关键不在信息本身，而在"信任义务"</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>CFTC vs 州赌博法</strong><br/>
<span class="text-xs opacity-70">第三巡回法院支持联邦优先权，第九巡回法院可能反对——最终将由最高法院裁决</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>合约歧义的真金白银</strong><br/>
<span class="text-xs opacity-70">MicroStrategy 比特币出售让数千万美元悬于"日期"的定义</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>国家安全维度</strong><br/>
<span class="text-xs opacity-70">对手国家监控 Polymarket 获取军事情报信号——这不仅是市场诚信问题</span>
</div>

</div>

---

# 两起历史性案件

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### US v. Van Dyke（委内瑞拉案）

<div class="text-xs opacity-70 mt-1">首起预测市场内幕交易起诉</div>

<div class="mt-3 space-y-2">
<div class="p-2 rounded bg-red-100 bg-opacity-50">
<strong>被告</strong>：美国武装部队成员
</div>
<div class="p-2 rounded bg-red-100 bg-opacity-50">
<strong>手段</strong>：利用<strong>机密国家安全信息</strong>在 Polymarket 下注
</div>
<div class="p-2 rounded bg-red-100 bg-opacity-50">
<strong>标的</strong>：马杜罗在委内瑞拉的入侵与逮捕行动
</div>
<div class="p-2 rounded bg-red-100 bg-opacity-50">
<strong>关键</strong>：签署了保密协议，明确负有保密义务
</div>
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### US v. Spagnuolo（Google 案）

<div class="text-xs opacity-70 mt-1">第一起针对科技公司员工的预测市场案</div>

<div class="mt-3 space-y-2">
<div class="p-2 rounded bg-blue-100 bg-opacity-50">
<strong>被告</strong>：Google 工程师
</div>
<div class="p-2 rounded bg-blue-100 bg-opacity-50">
<strong>手段</strong>：利用 Google 内部工具查看<strong>年度热搜排名</strong>，发现与市场预期的差异
</div>
<div class="p-2 rounded bg-blue-100 bg-opacity-50">
<strong>获利</strong>：约 <strong>120 万美元</strong>
</div>
<div class="p-2 rounded bg-blue-100 bg-opacity-50">
<strong>关键</strong>：信息被标记为机密，员工作为受信人交易
</div>
</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-gray-50 border border-gray-200 text-xs leading-relaxed">
<strong>共同点</strong>：都从有保密义务的来源获取了重大非公开信息，然后利用这些信息在 Polymarket 上交易获利。都试图掩盖行踪——删除账户、通过 DeFi 协议转移 USDC。
</div>

---

# "内幕交易"不是法律术语

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**关键事实**："Insider trading" 是一个口语化说法，并非法律条文中的罪名。Sam Enzer 曾作为检察官处理过典型的投资银行家内幕交易案——一名投行家在 M&A 交易前将信息泄露给父亲，使其提前买入股票。但即便是那个"教科书式"的案件，实际指控也<strong>不是"内幕交易"</strong>。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 证券市场
<div class="text-xs opacity-70 mt-1">IBM 内部人士提前知道财报，买入 IBM 股票</div>
<div class="mt-2 font-semibold text-blue-700">证券欺诈<br/>Securities Fraud</div>
<div class="text-xs opacity-60">或电信欺诈</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 预测市场
<div class="text-xs opacity-70 mt-1">Google 员工用内部数据在 Polymarket 下注</div>
<div class="mt-2 font-semibold text-green-700">商品欺诈<br/>Commodities Fraud</div>
<div class="text-xs opacity-60">swap ≈ 商品，非证券</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 通用武器
<div class="text-xs opacity-70 mt-1">任何涉及跨州电汇/邮件的欺诈行为</div>
<div class="mt-2 font-semibold text-purple-700">电信欺诈<br/>Wire Fraud</div>
<div class="text-xs opacity-60">"检察官的 Colt 45"</div>

</div>

</div>

---

# Wire Fraud：检察官的"Colt 45"

<div class="mt-6 p-6 bg-gray-50 border-l-4 border-gray-500 rounded italic text-lg leading-relaxed">

"Wire fraud, Judge Rakoff, Southern District judge, once called the wire fraud statute <strong>a prosecutor's Colt 45</strong>. What he meant by that is, it's a generic statute, it's very broad. Any misrepresentation or failure to disclose something that is material when you have a duty to disclose, in a situation that involves interstate transfer of wires, email, telegram messages, a wire transfer of funds, can be prosecuted under the wire fraud statute."

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>实际运用</strong>：Spagnuolo 案同时指控商品欺诈和电信欺诈。Van Dyke 案还增加了洗钱指控（18 U.S.C. § 1956）——前提是必须先证明基础罪（商品欺诈或电信欺诈）成立，洗钱指控才能成立。
</div>

<div class="mt-2 text-xs opacity-50 text-right">— Sam Enzer，引用 SDNY 法官 Jed Rakoff</div>

---

# 犯罪构成：两步检验法

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-6">

<div>

<div class="p-4 rounded bg-red-50 border-2 border-red-300 mb-4">

### 要件一：重大非公开信息

**Material Non-Public Information**

- 能够影响资产市场价格的信息
- 未向公众公开
- 例子：Google 年度热搜内部数据
- 例子：委内瑞拉军事行动机密情报

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 要件二：信任与保密义务

**Duty of Trust & Confidence**

- 从期望你保密的来源获得信息
- 员工对雇主负有受托责任（fiduciary duty）
- Van Dyke：签署了保密合规文件
- Spagnuolo：信息被标记为"机密"

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./legal-test.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 三种合法利用非公开信息的方式

<div class="mt-4 text-sm leading-relaxed">

Sam Enzer 用一个核心原则串联了所有案例：**犯罪不在于拥有信息优势，而在于滥用和背叛信息来源对你的信任**。

</div>

<div class="flex justify-center items-center h-100 mt-2">
<Excalidraw
  drawFilePath="./three-examples.excalidraw"
  class="w-[680px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# OpenSea 先例：Chastain 案为何被推翻？

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<strong>案件</strong>：Nathaniel Chastain，OpenSea 前员工，利用内部信息知道哪些 NFT 会被放在首页展示，在公开发布前先行购买。

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-green-50 border border-green-200">

### 初审：SDNY 定罪
通过将指控框架定为"电信欺诈"（wire fraud），绕过了 NFT 是否属于证券的争论。

</div>

<div class="p-3 rounded bg-red-50 border border-red-200 mt-3">

### 上诉：第二巡回法院推翻
法院裁定：此类信息<strong>不属于电信欺诈法可管辖的财产类型</strong>（not the type of property that can be the subject of a wire fraud prosecution）。

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 对当前案件的影响

- **Spagnuolo 案**：辩护方极有可能援引 Chastain 先例，主张 Google 内部搜索数据同样不属于电信欺诈管辖范围
- **Van Dyke 案**：有类似的抗辩路径（基于 Blazak 案等判例），质疑政府信息是否为可被"窃取"并进行内幕交易起诉的财产类型
- **核心争议**：什么类型的"信息"构成电信欺诈法下的"财产"？

</div>

</div>

---

# George Santos：不是内幕交易，而是"自导自演"

<div class="mt-6 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 事实经过

George Santos 公开宣称将出席国会国情咨文演讲，市场据此定价。几小时前突然改口称"旅行问题"无法出席。事后发现他<strong>大量押注自己不出席</strong>。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mt-3">

### 为什么不构成内幕交易？

<div class="italic text-xs opacity-70 mt-1">

"he is the source of the information. He's not betraying a duty to somebody who told him what his travel plans are. He is the creator, the maker, the definer. He is the principal."

</div>

<div class="mt-1 text-xs opacity-70 text-right">— Sam Enzer</div>

<div class="mt-2 text-xs">他没有背叛任何人的信任——他自己就是信息源头。内幕交易理论在此案中是"方枘圆凿"。</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 可能的罪名路径

<strong>情景 A：事先预谋不出席</strong>
- 公开说会去 → 押注不去 → 宣布不去
- = **Scalping / Pump & Dump**
- Sam 曾以类似罪名起诉 John McAfee（"Coin of the Day"推特骗局）

<strong>情景 B：原本要去，临时变卦</strong>
- 原本真心打算出席 → 临时决定不去 → 先下注再宣布
- = **市场操纵**（Market Manipulation）

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

### 检察官的两大核心关注

1. 是否存在**人为市场操纵**？
2. 是否存在**欺骗行为**？
<div class="text-xs opacity-70 mt-1">"Generally whether or not the government could legally bring a manipulation case, <strong>they like to see a lie. Deception.</strong>"</div>

</div>

</div>

</div>

---

# Mens Rea：为什么"谎言"如此重要

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500 mb-4">

**Mens Rea（犯罪意图）**，或称"willfulness"（故意性），是刑事定罪的核心门槛。你必须证明被告有**犯罪意图**——如果没有违法的主观意图，极难说服陪审团将人送入监狱。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### FTX 案：教科书式案例

Sam Bankman-Fried 对客户说"你们的钱是安全的"，而他知道事实恰恰相反。这是**直接的谎言**（direct lies），对陪审团来说非常有力。

<div class="mt-2 text-xs opacity-70">SDNY 还展示了 Sam 有多个"出口匝道"（off ramps）可以止损但选择不走——这进一步证明了故意性。</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 市场操纵案：更难证明

当涉及市场操纵时，辩方可以主张：
- 这是一笔对冲交易（hedge）
- 存在其他合法的交易理由
- 没有欺骗，只是市场判断不同

**有明确的谎言 → 案件更容易成立**

</div>

</div>

</div>

---

# CFTC vs 州赌博法：数十亿美元的管辖权之战

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

<strong>市场规模</strong>："billions of dollars of transactions... these could easily become multi-trillion dollar markets over time." — Sam Enzer

</div>

<div class="grid grid-cols-2 gap-4">

<div>

### CFTC 立场（联邦优先）

- 预测市场合约是**互换（swap）**，受《商品交易法》（CEA）管辖
- 受 CFTC 监管的指定合约市场（DCM）上的交易，属于联邦专属管辖权
- 州赌博法被联邦法律优先适用（preempt）
- 这是**衍生品活动**，不是赌博活动
- CFTC 主席 Behnam 和总统强力支持此立场

</div>

<div>

### 州政府立场（各州监管）

- 对赛事结果的押注本质上是赌博
- 新泽西、内华达等州从博彩业获取大量税收
- FanDuel、DraftKings 等已投入巨资获取州赌博牌照
- 用"衍生品合约"包装赌博是一种**监管套利**
- 这违背了赌博法旨在保护的"法律精神"

</div>

</div>

</div>

---

# 巡回法院分歧 → 最高法院

<div class="flex justify-center items-center h-100 mt-2">
<Excalidraw
  drawFilePath="./circuit-split.excalidraw"
  class="w-[680px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Sam Enzer 的立场：CEA 应当优先适用

<div class="mt-6 p-6 bg-green-50 border-l-4 border-green-500 rounded italic text-lg leading-relaxed">

"I represent prediction market operators. I'm firmly in the camp that the Commodity Exchange Act controls and preempts and I think that side has the better of it."

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-gray-50 border border-gray-200">

### 现实考量

- 国会立法解决的可能性很小——Clarity Act 完全不涉及预测市场
- 当前政治窗口期有限（民众预测民主党将赢得众议院）
- 加密行业急于推进 Clarity Act，不希望增加新议题
- **最高法院裁决是唯一可行路径**

</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200">

### 行业影响

- 如果 CFTC 优先适用成立 → Polymarket、Kalshi 无需逐州获取赌博牌照
- 如果州法优先 → 必须逐州合规，市场碎片化
- 不确定性本身已经对行业造成影响
- 最终结果将定义这个新兴市场的监管框架

</div>

</div>

---

# MicroStrategy 比特币出售：一个词引发的争议

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 事件经过

- Polymarket 上有一个市场：**"MicroStrategy 是否会在 5 月底前出售比特币"**
- Strategy（原 MicroStrategy）在 **5 月**卖出了比特币
- 但 SEC 文件在 **6 月**才披露这笔交易
- 数千万美元悬于一个问题：**"出售"是指交易发生的日期，还是信息被公开的日期？**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

### 核心问题：合约措辞的歧义

Sam 的客户每天都在做这种文字辨析：

<div class="italic text-xs opacity-70 mt-1">

"I went to Hebrew school. We can debate the Talmud both ways, all right? And litigators, I make a living splitting hairs on what the meaning of words is."

</div>

<div class="text-xs opacity-70 mt-1 text-right">— Sam Enzer</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### UMA Oracle 的治理问题

- Polymarket 使用 **UMA** 作为预言机（oracle）来投票决定事件结果
- 分析显示：**大约 9 人控制了足够的 UMA 投票权来实际决定结果**
- "not quite as decentralized as I would imagine many people would want" — Steven Ehrlich

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">

### 历史教训：Zelensky 西装争议

当 Zelensky 在白宫会见 Trump 时，Polymarket 上出现了一个市场赌"他是否穿了西装"。这引发了一个看似荒谬但真实的法律和预言机问题——最终由 UMA 投票决定，结果令许多人不满意。

<div class="mt-2 text-xs opacity-70">教训：看似二元的"是/否"问题，实际上可能是极端模糊的。</div>

</div>

</div>

</div>

</div>

---

# 预测市场参与者的风险全景

<div class="flex justify-center items-center h-100 mt-2">
<Excalidraw
  drawFilePath="./risk-landscape.excalidraw"
  class="w-[680px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 合法信息优势 vs 非法信息优势

<div class="mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

### 合法信息优势的来源

<div class="grid grid-cols-2 gap-3 mt-2">

<div class="p-2 rounded bg-white bg-opacity-60">
<strong>分析能力</strong><br/>
<span class="text-xs opacity-70">你对公开信息的分析比市场更准确</span>
</div>
<div class="p-2 rounded bg-white bg-opacity-60">
<strong>速度优势</strong><br/>
<span class="text-xs opacity-70">你的算法比市场更快地处理和合成信号</span>
</div>
<div class="p-2 rounded bg-white bg-opacity-60">
<strong>自身信息</strong><br/>
<span class="text-xs opacity-70">你对自己业务/资产的信息（如农民对冲作物）</span>
</div>
<div class="p-2 rounded bg-white bg-opacity-60">
<strong>公开渠道</strong><br/>
<span class="text-xs opacity-70">你通过偶然机会获得的信息（如酒吧里听到的）</span>
</div>

</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4">

### 非法信息优势的来源

<div class="grid grid-cols-2 gap-3 mt-2">

<div class="p-2 rounded bg-white bg-opacity-60">
<strong>违反保密义务</strong><br/>
<span class="text-xs opacity-70">从雇主、客户、政府获取的保密信息</span>
</div>
<div class="p-2 rounded bg-white bg-opacity-60">
<strong>市场操纵</strong><br/>
<span class="text-xs opacity-70">人为创造或影响市场结果（如 Santos 案）</span>
</div>
<div class="p-2 rounded bg-white bg-opacity-60">
<strong>欺骗行为</strong><br/>
<span class="text-xs opacity-70">散布虚假信息以影响市场价格</span>
</div>
<div class="p-2 rounded bg-white bg-opacity-60">
<strong>滥用受信地位</strong><br/>
<span class="text-xs opacity-70">利用受托关系获取的利益交易</span>
</div>

</div>
</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200 text-xs leading-relaxed">
<strong>Sam 的建议</strong>：在下注前问自己："我是否有某种合法的信息不对称优势？是因为我分析得更好，还是因为我拥有内部信息？"如果是后者——停下来。
</div>

</div>

---

# 预测市场最大的价值：信号，而非赌注

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-6">

<div>

<div class="p-6 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg leading-relaxed">

"I personally find that the greatest use of prediction markets is the information. Not as a bettor, but as a source of information."

</div>

<div class="text-xs opacity-50 mt-1 text-right">— Sam Enzer</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<strong>Stevn Ehrlich 的呼应：</strong>

"It is an entirely new category of data signal. You know, five years ago, this is not something that was regular, pervasively available. But now, when I'm thinking about an issue, I always look at Polymarket or Kalshi to see what are they saying about it."

</div>

</div>

<div>

### 实际应用场景

<div class="space-y-3 mt-2">

<div class="p-3 rounded bg-gray-50 border border-gray-200">
<strong>🔮 政治预测</strong><br/>
<span class="text-xs opacity-70">2024 年总统选举期间 Polymarket 成为主流关注焦点</span>
</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200">
<strong>📊 市场情绪</strong><br/>
<span class="text-xs opacity-70">比传统民调更快、更直接地反映群体判断</span>
</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200">
<strong>🛡️ 风险管理</strong><br/>
<span class="text-xs opacity-70">企业和个人可以利用预测市场对冲特定事件风险</span>
</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200">
<strong>⚠️ 但记住</strong><br/>
<span class="text-xs opacity-70">多数参与者亏钱——华尔街日报报道和学术研究都证实，大多数零售交易者在预测市场上亏损。赚钱的主要是专业做市商。</span>
</div>

</div>

</div>

</div>

</div>

---

# 国家安全：不只是市场诚信问题

<div class="mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-2 border-red-300 mb-4">

### Van Dyke 案的军事维度

一名美国军人利用<strong>机密国家安全情报</strong>，在委内瑞拉军事行动前在 Polymarket 下注。这不仅欺骗了其他市场参与者，而且<strong>理论上可能危及生命</strong>。

</div>

<div class="grid grid-cols-2 gap-4">

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 对手国家的情报来源

- 全球对手国家已在监控 Polymarket 以获取军事行动信号
- 在以色列等地，预测市场已被用于推测军事行动时间
- "如果我们在与伊朗交战，而伊朗可以通过 Polymarket 获取信号判断军事行动时间——这危及美国安全"

<div class="mt-2 text-xs opacity-50">"seconds or minutes can matter in something like that." — Steven Ehrlich</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 政策反应

- 众议院监督委员会主席 **Comer**（共和党）致信 Polymarket 和 Kalshi，要求说明防止内幕交易的措施
- 共和党在调查一位共和党总统公开支持的行业——信号非常明确
- 这不仅是市场诚信问题——<strong>政策制定者意识到这是国家安全问题</strong>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mt-3">

### 未来的法律辩论

- 这些案件是否适用于**域外行为**？（offshore conduct）
- 什么类型的"信息"可以受到这些法规的管辖？
- 这些都是**尚未解决的法律问题**

</div>

</div>

</div>

</div>

---

# 监管未来：CFTC 自我认证模式

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### CFTC 的监管哲学（与 SEC 的关键区别）

CFTC 采用<strong>"自我认证"（self-certify）</strong>模式——指定合约市场（DCM）如 Kalshi 可以自行认证新合约，CFTC 在发现问题后再介入。这与 SEC 的事先审批模式形成鲜明对比。

<div class="mt-2 text-xs opacity-70">Steven Ehrlich 引用与前任 CFTC 主席 Chris Giancarlo 的对话：CFTC 给运营者更大的回旋余地。</div>

</div>

<div class="grid grid-cols-2 gap-4">

<div>

### CFTC 希望 DCM 做到的

- 制定指南，确保市场不易被操纵
- 确保合约问题是足够具体的二元问题，可以得出"是"或"否"
- 让行业自我规范，政府扮演后盾角色

</div>

<div>

### 尚未解决的问题

- 合约措辞的标准化程度？
- 预言机（oracle）治理的最低标准？
- 跨国执法的协调机制？
- 哪些信息类型属于法律管辖范围？

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>Sam Enzer 的总结</strong>：两起刑事案件是政府发出的明确信号——他们想要防止预测市场上的滥用行为。但同样重要的是，美国政府现在说 Polymarket 上的交易是"商品"而非"赌博"或"证券"——这对多年来关于 CFTC 管辖范围的辩论具有深远影响。这些案件将如何发展，仍有待观察。

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Insider trading itself is actually not a legal term."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 破除最常见的法律误解</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"It's not about me having an unfair advantage, it's about me misusing and violating the trust of whoever gave me the information."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 内幕交易犯罪的本质</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Generally whether or not the government could legally bring a manipulation case, they like to see a lie. Deception."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 检察官起诉操纵案的核心逻辑</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"I'm firmly in the camp that the Commodity Exchange Act controls and preempts and I think that side has the better of it."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · CFTC 联邦优先权立场</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Litigators, I make a living splitting hairs on what the meaning of words is. What does it mean? Is this ambiguous? Is it not ambiguous?"
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 合约措辞歧义的本质</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"The greatest use of prediction markets is the information. Not as a bettor, but as a source of information."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 预测市场的终极价值</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得铭记的观点：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Wire fraud, Judge Rakoff once called the wire fraud statute a prosecutor's Colt 45. What he meant by that is, it's a generic statute, it's very broad."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 解释电信欺诈法规的灵活性</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"He is the source of the information. He's not betraying a duty to somebody who told him what his travel plans are. He is the creator, the maker, the definer. He is the principal."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 解释为何 Santos 案不适用内幕交易理论</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"We're talking about billions of dollars of transactions... these could easily become multi-trillion dollar markets over time."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 预测市场的规模与潜力</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Unless Congress legislates and clarifies this through a statute, it'll probably have to be resolved by the US Supreme Court."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · CFTC vs 州法争议的最终走向</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"If you have material non-public information, inside information, if you got it from a source that expects you to keep it secret, trading on that information could be a crime. That's the basis."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Enzer · 一句话概括法律底线</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"The vast majority of participants lose on these platforms... the house always wins in a certain way."
<div class="text-xs opacity-60 mt-1 not-italic">— Steven Ehrlich · 给散户参与者的清醒提醒</div>
</div>

</div>

---

# 感谢收看

<div class="text-center mt-12">

<div class="text-4xl font-light">Bits + Bips</div>
<div class="text-lg opacity-50 mt-4">The Interview</div>

<div class="mt-8 p-6 bg-gray-50 border-l-4 border-gray-400 rounded italic text-lg leading-relaxed max-w-xl mx-auto">

"It's a fascinating time to be in our industry."

<div class="text-sm opacity-50 mt-2 not-italic">— Sam Enzer</div>

</div>

<div class="mt-10 text-xs opacity-40">
<p>Host: Steven Ehrlich · Guest: Sam Enzer (Cahill / Cahill Next)</p>
<p>Full episode on Unchained: Bits + Bips podcast</p>
<p>Nothing on this show is investment or financial advice. unchainedcrypto.com/bitsandbips</p>
</div>

</div>
