---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Martin Shkreli Breaks Down the Collapse of Situational Awareness'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Martin Shkreli 拆解<br>Situational Awareness 基金崩塌

<div class="mt-6 text-lg opacity-70">
Martin Shkreli · 前对冲基金经理、投资人
</div>

<div class="mt-4 text-sm opacity-50">
TBPN · 2026 年 7 月 · 44 分钟
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一只 AI 押注之王的猝死</strong><br>
450 亿美元规模的基金，一周内从华尔街巅峰走到被强制清盘——传言、竞标、成交在 48 小时内完成
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>杠杆数学的残酷</strong><br>
4 倍杠杆意味着 25% 的回撤就出局；基金净值据传从 350 亿美元跌到 50 亿
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>上千亿仓位怎么卖</strong><br>
没有「一键清仓」：做市商广告、电话排查、银行强卖、打包出售，折扣可达 20–50%
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>狩猎与传染</strong><br>
「对着基金开枪」是华尔街的达尔文式传统；同类 AI 基金可能都在同一个交易里
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>泡沫的永恒剧本</strong><br>
从 60 年代 Manhattan Fund 到 .com，每一代都有一个 all-in 周期的人——这次只是压缩得更快
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>仓位管理的数学</strong><br>
Kelly 准则：55% 胜率的最优仓位只有 10%，而几乎所有交易者都超仓 2–10 倍
</div>

</div>

---

# 48 小时：从传闻到既成事实

<div class="grid grid-cols-4 gap-3 mt-4 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs opacity-60 mb-1">上周中</div>
<strong>传闻开始流传</strong><br>
市场开始听说这只基金承压，有人提前开始布局
</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">
<div class="text-xs opacity-60 mb-1">上周末</div>
<strong>三家机构进入「封闭圈」</strong><br>
Jane Street、Millennium、Citadel 被请来竞标剩余资产
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-400">
<div class="text-xs opacity-60 mb-1">周一早上</div>
<strong>清算成既定事实</strong><br>
嘉宾用了一个法语词：fait accompli（既成事实）
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs opacity-60 mb-1">全程</div>
<strong>风声几乎没有外泄</strong><br>
嘉宾感叹这家年轻基金的沟通「做得并不好」
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-blue-50 bg-opacity-50 border-l-4 border-blue-500">
嘉宾评价：他们保守秘密做得相当不错——基金没有泄露自己在受伤，据他所知也没有每日净值披露。市场直到最后一刻才反应过来。
</div>

---

# 泡沫的解剖：同一个剧本

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>「聪明人最早进场</strong>，买进、看价格涨、再买；然后不那么聪明的人注意到了，说我也要一年涨 400%。」
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>嘉宾的判断：</strong>80–90% 的股份根本不会换手，决定价格的是<strong>边际 5% 的交易</strong>。如果那 5% 带着 3–4 倍杠杆，「25% 的回撤就能让你出局」。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
「基本面基本无关紧要——今天它们只是驱动边际的买卖双方。」
</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bubble-cycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 杠杆的瀑布：450 亿如何变成 50 亿

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>账单结构：</strong>基金峰值约 450 亿美元，其中约 100 亿是 Anthropic 股份；其余现金以 4 倍杠杆运作，总敞口约 1200 亿。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>下跌 25% 意味着什么：</strong>1200 亿敞口亏约 300 亿——净值从 350 亿缩水到 50 亿。这就是为什么「25% 的回撤就能让你出局」。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>主经纪商不会陪你亏钱：</strong>经历过历次爆仓之后，他们有权接管仓位——「这些资产现在归我们了」。
</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./leverage-cascade.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 主经纪商的生意经：杠杆是它们最好的朋友

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>利差生意：</strong>主经纪商靠融资利差赚钱。1% 的利差已经算巨大；客户借外汇做杠杆，相当于白送它们 400 个基点。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">规模足够大时</div>
<div class="text-sm font-semibold">600–800 个基点</div>
<div class="text-xs opacity-70 mt-1">它们从巨额杠杆上拿到的「免费钱」</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60 mb-1">风控部的顾虑</div>
<div class="text-sm font-semibold">集中持仓与空头</div>
<div class="text-xs opacity-70 mt-1">GameStop 式的空头爆仓让它们心有余悸</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">但前提是</div>
<div class="text-sm font-semibold">净值不能归零</div>
<div class="text-xs opacity-70 mt-1">净值跌穿零之后，亏的是它们自己的钱</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>嘉宾总结：</strong>「杠杆是主经纪商最好的朋友」——它们喜欢借你钱，直到你的净值逼近零；那一刻，资产就归它们了。
</div>

</div>

---

# 「对着基金开枪」：狩猎传统

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>术语的出处：</strong>嘉宾的老东家 Cramer 把这种操作叫做 <strong>shooting against a fund</strong>（对着基金开枪）——如果你知道有人必须清仓，最有利的做法是卖掉所有共同持仓，然后开始做空他的一切。
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>达尔文式的现实</strong><br>
「这会尽可能快地加速它的垮台」——这种做法在这些事发生时非常普遍
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>嘉宾的自陈</strong><br>
「我和他们没有重叠持仓，所以我当然不会这么做」——但有大量基金在做空这些股票，期待恐慌和暴跌
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>一旦见血的连锁反应：</strong>「华尔街有句话——一旦水里见了血，这些仓位就会一路跌到零。」空头会把 Micron 砸到 5 美元，「就为了把这家伙在 3 美元清算掉」。
</div>

</div>

---

# Anthropic 股份：1 亿美元的试探

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一个值得玩味的报价：</strong>有人向嘉宾的机构推销 1 亿美元的 Anthropic 股票。他的第一反应是挑眉：「这是 Leopold 在卖吗？」
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>华尔街的试探规则：</strong>当你想卖 40 亿美元时，你不会直说——你会先说卖 1 亿。「而一个想买 1 亿的人，通常也吃得下 5 亿甚至更多。」
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">周末传闻</div>
<div class="text-sm font-semibold">约 10 家机构被接触</div>
<div class="text-xs opacity-70 mt-1">为 Anthropic 股份寻找买家以补充流动性</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60 mb-1">报价对应的估值</div>
<div class="text-sm font-semibold">1.1 万亿美元</div>
<div class="text-xs opacity-70 mt-1">嘉宾认为与当时的市场交易水平大致相当</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60 mb-1">结果</div>
<div class="text-sm font-semibold">据传卖出了一半</div>
<div class="text-xs opacity-70 mt-1">买家是谁仍不明确</div>
</div>

</div>

</div>

---

# Ken Griffin 想成为大家出事时去找的人

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>竞标结果：</strong>Millennium 出了价，「Citadel 的报价更好」。嘉宾的判断直白：「我觉得 Ken 想成为大家出事后去找的那个人。」
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Buffett 的生态位正在空出来：</strong>「Buffett 越来越老了，而且这本来也不是 Buffett 想做的生意。」华尔街需要一个在银行急着脱手风险仓位时能接下整本书的人。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60 mb-1">Amaranth 先例</div>
<div class="text-sm font-semibold">天然气爆仓后接盘</div>
<div class="text-xs opacity-70 mt-1">Citadel 几乎接手了金融史上每一次爆仓的组合</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">Enron 先例</div>
<div class="text-sm font-semibold">直接挖走全部人才</div>
<div class="text-xs opacity-70 mt-1">爆仓事件同样是它的人才收割现场</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60 mb-1">十年一次的生意</div>
<div class="text-sm font-semibold">白赚 50–100 亿</div>
<div class="text-xs opacity-70 mt-1">「十年一次的机会，白拿 50 到 100 亿」</div>
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>类比：</strong>就像当年美国政府找 Warren Buffett 救 Goldman 一样，Goldman 和 Bank of America 们知道该打给谁——「而 Ken 正在非常努力地让自己成为那个号码。」
</div>

</div>

---

# 上千亿仓位怎么卖：没有「一键清仓」

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>屏幕卖出的代价：</strong>如果你持有相当于 10 天成交量的筹码，直接砸盘会「把股价打掉 50% 甚至更多」——没人想这么干。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>广告系统与做市商标识：</strong>银行必须为你的单子打广告，比如 Goldman 的四位代码 GSCO——「有个大卖家」的消息会传遍市场。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>逐家电话排查：</strong>你问 Fidelity，不卖；下一个，不卖；ETF、指数基金都不卖——「那只可能是他们」。然后你发现他所有持仓都在跌。
</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./unwind-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 银行的逻辑：撕掉创可贴

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一句名言式的大实话：</strong>「Goldman Sachs 不是做 AI 股票生意的。」银行对客户说：我不在乎你想不想卖，我们无论如何都要卖。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">银行的算盘</div>
<div class="text-sm font-semibold">确定亏 10 亿 > 可能亏 50 亿</div>
<div class="text-xs opacity-70 mt-1">「宁可确定地亏掉 10 亿，也不赌会不会亏 50 亿」</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60 mb-1">执行方式</div>
<div class="text-sm font-semibold">一次性的 fire sale</div>
<div class="text-xs opacity-70 mt-1">「在它转移之前就把胳膊砍掉」</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">买家拿到的价格</div>
<div class="text-sm font-semibold">20–50% 的折扣</div>
<div class="text-xs opacity-70 mt-1">用「令人垂涎」的折扣买进一批优质公司</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>「把整个组合一次性卖掉是非常聪明的做法」</strong>——嘉宾点评：它换来了了结。据传买方入账即浮盈 30–40 亿美元（insta markup）。
</div>

</div>

---

# 接盘者的算盘：能持有五年的人

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>买方真正的门槛不是钱：</strong>「这些股票的买家必须有流动性，能拿着它们五年什么都不做。」否则市场里的大小玩家会不断做空，「逼你哭出来」。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>已经发生的例子：</strong>基金的一只日本持仓 Kyosha 被砸到 3 倍市盈率——「他们基本上是在逼你卖出」。要接这个盘，你得能扛到它跌到 2 倍甚至 1 倍市盈率。
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>唯一不眨眼的玩家</strong><br>
「唯一大得足以、强得足以拿住 1000 亿仓位而不眨眼的，是 Citadel 这种体量。」
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>但压力会反向传导</strong><br>
「有些人甚至想反过来碾压 Citadel」——接盘者自己也可能成为下一个被围猎的目标
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>嘉宾的判断：</strong>「我认为清算已经结束了，谢天谢地。但我确实认为还有一些基金即将被发现跌了 30% 或 40%。」
</div>

</div>

---

# 传染：一个人的 1000 亿，乘以五到十倍

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>这不是一个人的仓位：</strong>「这不仅仅是 Leopold 的 1000 亿总敞口——是它乘以五或十倍。」很多对冲基金在同一个交易里。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>时间表：</strong>「7 月的业绩数字很快就要出来了」——同仓位的基金将被迫现形。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>市场很流动，但是：</strong>「在几周之内，这是很大的下行压力。」一个月内压缩完成的出清，历史上罕见。
</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./contagion.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 历史总是押韵：每一代的「那个人」

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>嘉宾的观察：</strong>「每一代都有一个相信周期、把全部身家押上周期的人」——他对这种人抱有敬意：「我尊重愿意这么做的人。」
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60 mb-1">60 年代</div>
<div class="text-sm font-semibold">Gerald Tsai 的 Manhattan Fund</div>
<div class="text-xs opacity-70 mt-1">被 Warren Buffett 点名批评的 go-go 基金</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">2000 年</div>
<div class="text-sm font-semibold">Ryan Jacob 互联网基金</div>
<div class="text-xs opacity-70 mt-1">崩盘时嘉宾正好在 Cramer 的公司</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60 mb-1">2021 年</div>
<div class="text-sm font-semibold">Tiger / SoftBank 风投热潮</div>
<div class="text-xs opacity-70 mt-1">这一次被嘉宾称为「比那还疯狂」</div>
</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>一个正面故事：</strong>嘉宾的一位朋友极早期就跟进了这笔交易，收益「和 Leopold 一个量级」，并且「听起来在接近顶部时做了对冲」——嘉宾称他为「奇迹交易员，我认识的最好的交易员」。如果他能在顶部卖出并转空，嘉宾愿意「膜拜他为史上最伟大」。
</div>

</div>

---

# 时间被压缩了：从三四年到一个月

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>同样的周期，快进播放：</strong>「.com 泡沫花了三四年时间，耐心地上涨、耐心地下跌。看到这一切在一个月内压缩完成，非常有意思。」
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>一个月前：西海岸的胜利圈</strong><br>
「西海岸正在吃掉华尔街」——最好的、最大的对冲基金不再在东海岸。金融和科技全都要了。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>三十天后：深深的谦卑</strong><br>
「结果证明你们那边还是懂点东西的」——轮到东海岸来上课了
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>嘉宾的总体评价：</strong>这是「至少自 FTX 以来华尔街最疯狂的时刻」，比 '21 年的 Tiger/SoftBank 风投热潮还要疯。
</div>

</div>

---

# Leopold 其人：FTX 的影子与婚礼

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>FTX 的经历</strong><br>
他在 FTX 一直待到崩盘前夕，据信在崩盘当天辞职——亲历过那种冲击的人，这么快又回到杠杆游戏，让主持人们都感到意外
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>简历的短板</strong><br>
「这家伙基本上没有任何经验」：长期偏多、从私市起步——「对很多对冲基金来说，碰私市是死亡之吻」
</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>被拒绝，然后打脸：</strong>纽约最大的母基金之一曾当面拒绝他，「基本上嘲笑他，说我不可能投这个」。后来他涨了大约 20 倍——那位朋友「有点懊悔，但在这件事之后，某种程度上也算被证实了」。
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>悲剧中的小胜利</strong><br>
「这家伙这个周末还要结婚」——崩盘与婚礼同时发生
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>carry 的追回条款</strong><br>
越来越多的基金有 clawback 条款：严重回撤时，要把当年赚到的 2/20 还回去——「可能会变成很难的处境」
</div>

</div>

</div>

---

# 私市的诱惑：没有卖出按钮

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>为什么是 Anthropic：</strong>「过去六个月，这家公司的需求是配额的 100 倍」——离它最近的人不可能不心动。主持人的话：「如果你要破例做私市，那这就是那家公司。」
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">私市的反面</div>
<div class="text-sm font-semibold">「我按不下卖出键」</div>
<div class="text-xs opacity-70 mt-1">危机时刻你才会发现流动性有多珍贵</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60 mb-1">五十年的教训</div>
<div class="text-sm font-semibold">很少有人两头通吃</div>
<div class="text-xs opacity-70 mt-1">对冲基金戴上 VC 帽子，通常结局不好</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">少数例外</div>
<div class="text-sm font-semibold">Altimeter 等基金</div>
<div class="text-xs opacity-70 mt-1">两边都做、两边都做得好</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>沟通的细节：</strong>13F 披露迟到、月报季报迟缓——「作为一家年轻的对冲基金，Situational Awareness 的沟通做得并不好」。
</div>

</div>

---

# 信息的新秩序：玩家比记者先知道

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一场「换岗」：</strong>嘉宾先发布了报道，约两小时后 Financial Times、Bloomberg 和华尔街日报才跟进。「大媒体的记者非常出色，但他们不是现役或退役的玩家——而街上发生的事，玩家总会先听到。」
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>为什么不抢发</strong><br>
「我不想像那些媒体一样烧掉桥和资源。」他会伤害给他消息的人——而他还想继续和这些人说话
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>发布的触发点</strong><br>
朋友说「现在每个人都在听说了」——「好吧，是时候把猫放出袋子了，反正它本来就要被放出来了」
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>代价与取舍：</strong>「我们会在别人之前知道一些事，但不能披露，因为我们想保护朋友。」有些消息（比如数百次的募资）永远不能公开——否则就再也不会有下一次了。
</div>

</div>

---

# 这行有多苦：3AM 的韩国股价

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>给想开基金的朋友的忠告：</strong>「我告诉他，这是世界上最痛苦、最可怕的生意。为什么要干这个？」
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">残酷的对比</div>
<div class="text-sm font-semibold">Newsletter 年入 1 亿</div>
<div class="text-xs opacity-70 mt-1">「就超过地球上几乎所有对冲基金了」</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60 mb-1">为什么还做</div>
<div class="text-sm font-semibold">「这是世界上最性感的事」</div>
<div class="text-xs opacity-70 mt-1">宇宙主宰的荣耀让人欲罢不能</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">真实的日常</div>
<div class="text-sm font-semibold">凌晨 3 点查韩国股价</div>
<div class="text-xs opacity-70 mt-1">6 点再醒一次，「你其实没在做任何有生产力的事」</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>嘉宾的自白：</strong>「我也做过，而且我绝不会再来一次。」「你提供资本，除此之外，你真的只是在打一场高风险的疯狂扑克。」
</div>

</div>

---

# Thiel 式的救赎：他会回来的

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>先例：Peter Thiel。</strong>他的对冲基金 Clarion 最后几年并不顺，但他转身继续做风投——做出史上规模最大、最成功的基金之一，又重回宏观交易，据说做得不错。
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>嘉宾的判断</strong><br>
「不管这事怎么收场——他会回来，并且会成功。」「我完全不认为这是终点。」
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>谦卑的一课</strong><br>
「市场总是会教你谦卑。」两个月前还是地球上最大、最成功的对冲基金，如今被强制清算——「这是极快的逆转」
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>复位需要时间：</strong>「会有几年时间让他复位、吸收教训，带上没人否认的天赋与才华」——Twitter 上的人说市场会谦卑你，而嘉宾希望他保持平稳的心态。
</div>

</div>

---

# Kelly 准则：仓位管理的数学

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Paul Tudor Jones 的判断：</strong>每个交易者都在重复同一个错误——「仓位大概是应有水平的 2 到 10 倍」。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Kelly（贝尔实验室）的证明：</strong>存在一个最优下注比例。55% 的胜率对应 10% 的仓位——「对多数人来说还是太颠簸，所以大家用半个 Kelly 或四分之一个 Kelly」。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>残酷的结论：</strong>「如果你跑一下模拟器，超仓会让你一次次归零。」即使每笔交易都有 60/40 的胜率，持续超仓也会爆仓——而「谁能在股市里拥有 60/40 的胜率？没有人」。
</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kelly-bet.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 老将的智慧：90% 现金的二十年

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一位没人听说过的老将：</strong>嘉宾离开 Tiger 系公司后，曾在一位 Point72（前 SAC Capital）老将的办公室待过几个月——管理着 3–4 亿美元自有资金，却几乎不用。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">仓位习惯</div>
<div class="text-sm font-semibold">90% 的资本就是现金</div>
<div class="text-xs opacity-70 mt-1">只做小小的交易，「像小鸡啄米」</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60 mb-1">战绩</div>
<div class="text-sm font-semibold">二十多年没有一个亏损季度</div>
<div class="text-xs opacity-70 mt-1">年化约 30%——「非常好」</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">嘉宾的反面教材</div>
<div class="text-sm font-semibold">一拿到钱就 8 倍杠杆</div>
<div class="text-xs opacity-70 mt-1">「这是世界上最蠢的事」</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>人性的总结：</strong>「我几乎总是在超仓。我认为每只基金都差不多，每个散户也都一样。」——很少有人真的去跑一遍组合模拟，看看什么才是对的。
</div>

</div>

---

# Tim Cook 的克制：全场 FOMO 中的「不是我」

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>全场唯一说不的人：</strong>不只是 Leopold——「大型科技公司也在 FOMO，它们 FOMO 得和 Leopold 一样狠，甚至更狠。这不是他一个人的问题，是全世界集体在说：我必须 all in AI。」「而除了一个人——Tim Cook，坐在后面说：不是我，什么都不做。」
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60 mb-1">被奖励的谨慎</div>
<div class="text-sm font-semibold">Microsoft</div>
<div class="text-xs opacity-70 mt-1">市场奖励了它的克制</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60 mb-1">被惩罚的冒进</div>
<div class="text-sm font-semibold">Meta 与 Google</div>
<div class="text-xs opacity-70 mt-1">市场惩罚了它们的不克制</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60 mb-1">悬而未决的问题</div>
<div class="text-sm font-semibold">CapEx 到底值不值</div>
<div class="text-xs opacity-70 mt-1">「还有一些更审慎的疑问」</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>背景板：</strong>Anthropic 和 OpenAI 正在交出史上最好的业务成绩，Microsoft、Google、Meta 也一样——但基础设施交易的估值在回调。
</div>

</div>

---

# 市场将往何处去：没有上行惊喜

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>乐观派理论</strong><br>
「现在这些流动性都出清了，我们可能会再见到历史新高。」
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>悲观派理论</strong><br>
「我们本来就在一段漂亮的下跌趋势里，这次流动性出清之后，会继续越走越低。」
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>嘉宾的倾向：</strong>「我在想，我们会不会迎来一次更长、更拖沓的下跌。」今天的反弹很舒服，泡沫去了不少——「但接下来呢？」
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>关键的一问：</strong>「大家都知道 AI 在繁荣，芯片在繁荣——还有什么能让你向上意外？不多了。」所以任何一点「我们少花点钱」的风声，都会让整个市场崩掉。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>一个反直觉的概率：</strong>「最意外的事，反而是看到所有资产创下全新的历史新高——几乎每个华尔街人都怀疑这会发生，而正因如此，它才有机会发生。」
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"The weakest hands are buying at the top. So they're also the first to sell. First to panic."
<div class="text-xs opacity-60 mt-1 not-italic">— 论泡沫的解剖：最弱的手买在顶部，也最先恐慌离场</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"A 25% drawdown takes you out of business."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 4 倍杠杆：25% 的回撤就足以让一只基金出局</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"I think Ken wants to be the guy that everyone goes to when they're in trouble."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 Ken Griffin：成为所有人出事时第一个想到的号码</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic">
"We'll send Micron to $5, you know, just to liquidate this guy at three."
<div class="text-xs opacity-60 mt-1 not-italic">— 论华尔街的达尔文主义：为了在 3 美元清算你，先把 Micron 砸到 5 美元</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Goldman Sachs is not in the business of holding AI stocks."
<div class="text-xs opacity-60 mt-1 not-italic">— 论银行的强卖逻辑：宁要确定的亏损，不要可能的灾难</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Market tends to humble you."
<div class="text-xs opacity-60 mt-1 not-italic">— 论谦卑：两个月，从全球最大对冲基金到强制清算</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-6 text-2xl font-medium">
「There's no other ending, sadly.」
</div>

<div class="mt-4 text-sm opacity-70">
关于杠杆的宿命——但嘉宾也说了：<strong>「He'll be back, and successful.」</strong>
</div>

<div class="mt-10 text-xs opacity-50">
TBPN · Martin Shkreli · 2026 年 7 月
</div>
