---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Sam MacPherson on Why Spark Benefited So Much From the KelpDAO Hack'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Sam MacPherson：为什么 Spark<br>从 KelpDAO 黑客事件中获益

<div class="mt-6 text-lg opacity-70">
Sam MacPherson · Spark 联合创始人兼 CEO
</div>

<div class="mt-4 text-sm opacity-50">
Unchained · Laura Shin 专访 · 2026 年 8 月 · 35 分钟
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">一场黑客攻击的反向结局</div>
KelpDAO 攻击重创整个 DeFi，Spark 却成为最大受益者之一：ETH 计价的 TVL 自 4 月中旬上涨约 50%。它的风控设计如何提前排雷？
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">央行—商业银行架构</div>
Sky 的前身是 MakerDAO。两次重构后，Sky 扮演央行与批发流动性发行方，Spark 则是提取储备做商业借贷的商业银行。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">三道安全防线</div>
不参与循环借贷、全市场 rate limits、Chainlink/Redstone/Chronicle 三重预言机——安全设计反过来定义了产品形态。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold mb-1">AI 威胁是双刃剑</div>
攻击者用 AI 变强，防御方也第一次拿到形式化验证。Sam 的判断：重大黑客案几乎全是 OPSEC 失守，而非智能合约漏洞。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">稳定币大战</div>
Robinhood、Stripe、Tempo 都在复制 Coinbase 的「分发渠道 + 链 + 稳定币」打法。Spark 以收益层和做市卡位。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold mb-1">代币回到基本面</div>
SPK 已投票通过超额利润回购，财报公开在 data.spark.fi。Sam 的判断：大部分代币终将收敛到 DCF 估值。
</div>

</div>

---
layout: two-cols
---

# Sky 是央行，Spark 是商业银行

- Sky 前身 MakerDAO，2019 年携 DAI 稳定币上线，是最老的稳定币
- 2022 年前后两次重构：品牌上 Maker → Sky、DAI → USDS；治理上改组为 subDAO 模式
- 新架构里，Sky 更像央行与批发流动性发行方；Spark 作为 subDAO，扮演商业银行
- Spark 从 Sky 提取流动性储备，投入商业借贷：国债等 RWA 提供基础收益，BTC/ETH 超额抵押借贷是加密一侧

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./central-bank.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Spark 的产品矩阵

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">SparkLend · 链上货币市场</div>
对标 Compound / Aave 的链上资金市场，负责资产负债表里加密抵押借贷的部分，模式源自 Maker 早期的 CDP。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">Spark Savings · 稳定币金库</div>
基于 USDC / USDT 的储蓄金库，USDC 3.6%、USDT 2.75%。Spark 替存款人跨 DeFi、CeFi、TradFi 配置资金，优化风险调整后收益。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">机构借贷 · Anchorage 托管</div>
面向机构的托管式比特币抵押融资：机构用资产负债表上的 BTC 借款，由合格托管方 Anchorage 提供托管。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">Spark Prime · CeFi 主经纪</div>
为对冲基金提供跨 DeFi 与 CeFi 的保证金服务，已支持 TradFi 场外——传统股票正处大热周期，可连接 Hyperliquid 提供流动性。
</div>

</div>

---
layout: two-cols
---

# SparkLend：刻意极简的抵押品

- 抵押品种类被刻意压缩到「大约五种」：cbBTC、WBTC、Lido stETH、EtherFi ETH
- 这些资产已覆盖市场上的大部分有机使用
- 新资产先用保守风险政策上线，看到真实的采用与需求，再逐步放宽
- 副产品：尾部风险敞口极小，攻击者能通过 SparkLend 抽走的资金有限

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./minimal-collateral.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# KelpDAO 攻击：DeFi 受挫，Spark 反向增长

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs font-bold opacity-60 mb-2">ETH 计价的 TVL（现在 vs 4 月中旬）</div>
<div class="text-3xl font-bold text-red-600 my-1">+50%</div>
<div class="text-xs opacity-70">而整个 DeFi 同期遭受重创</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs font-bold opacity-60 mb-2">7 月初一度</div>
<div class="text-3xl font-bold text-red-600 my-1">+80%</div>
<div class="text-xs opacity-70">相对攻击发生前的高点</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs font-bold opacity-60 mb-2">Sky 稳定币存款</div>
<div class="text-3xl font-bold text-green-600 my-1">$10B+</div>
<div class="text-xs opacity-70">以存款规模计，遥遥领先的市场第一</div>
</div>

</div>

<div class="mt-4 p-3 text-sm rounded border-l-4 border-yellow-500 bg-yellow-50 leading-relaxed">
Sam 的态度：「这类事件对整个行业都是不幸的，我们并不乐见其发生——即便它相对利好 Spark。」他的原话是 "we're not like wanting these events to happen even though it is relatively speaking … good for Spark"。
</div>

---

# 幸免原因一：不做循环借贷，全市场限速

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">不参与 looping</div>
其他市场大搞循环借贷放大杠杆时，Spark 没有用同样的方式参与，规避了最脆弱的环节。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">2023 年起全市场 rate limits</div>
SparkLend 自 2023 年上线后不久，就在所有市场设置严格的利率限制，一直保持到今天。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">限速如何威慑攻击者</div>
被认定与朝鲜有关的攻击者，目标是尽快把赃款换成 ETH、比特币等去中心化资产——他们只走最容易通过的路。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">正常用户等得起</div>
真正的借款人愿意花时间慢慢取款；急着把钱马上拿走的，通常有问题。市场从设计之初就内置了这些安全控制。
</div>

</div>

---
layout: two-cols
---

# 幸免原因二：三重冗余预言机

- 价格预言机同时跑三家：Chainlink、Redstone、Chronicle
- 任何一家报出错误价格，市场仍然保持活性（liveness）
- 叠加 rate limits：即使某个抵押资产出问题，能从 SparkLend 抽走的资本也非常有限
- 这套安全设计有时牺牲业务增长与收入机会，但 Sam 认为这是新行业里该有的取舍

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./triple-oracle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# rsETH 提前下车：一月离场，四月免灾

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">1 月常规 off-board</div>
rsETH 在今年 1 月被移出市场，属于常规风险降低策略的一部分，并非应急动作。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">从未进入高杠杆模式</div>
rsETH 上线时就没有进入 efficiency mode（ETH 高杠杆循环），只被允许用于借稳定币。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">LTV 控制在 60-70%</div>
即使当时没有 off-board，损失也可能是零或极小，而且容易追回。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">决策逻辑：清算尾部风险</div>
持续监控每个资产的流动性与使用量。用得少的资产意味着尾部风险，直接下车。其他借贷市场也有类似的新旧交替，但关键在参数纪律。
</div>

</div>

---
layout: two-cols
---

# 常规治理约一个月，分四步走

- Phoenix Labs 提出提案 → 风险委员会（三个团队）审查 → SPK 持有者快照投票 → Sky 最终核查
- Sky 只检查 Spark 是否遵守其制定的规则与风险框架，合规即放行
- 这套流程约一个月：对常规风险调整足够快，对突发攻击太慢——所以另有应急通道

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./governance-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 应急机制：multisig 暂停 + timelock 护城河

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold mb-1">multisig 可暂停协议</div>
应急 multisig 不托管资产，作用是「暂停、喘口气、看看发生了什么」——这在 DeFi 里是标准配置。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">一切变更都在 timelock 之后</div>
托管资产却没有时间锁，本身就很危险：它「会让你成为朝鲜的目标」——Drift 攻击就是前车之鉴。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">快速通道 1-2 天</div>
真正需要紧急管理变更时，有加速程序可以在大约一两天内完成。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">安全也是增长策略</div>
Sam 承认保守有时拖累收入，但「我们知道如何按最佳实践做事，并会一直这样做」——新行业比的是活得久。
</div>

</div>

---

# 保守 DNA：不追热点，慢速复利

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"Just take the conservative view and compound the growth slowly over time has been the winning strategy."

<div class="text-sm opacity-70 mt-2 not-italic">「只要坚持保守观点，让增长随时间慢慢复利，这就是制胜策略。」</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">2019 年以来的路线</div>
自 Maker 2019 年上线起，团队从不追逐最新热点；2021 年的狂热叙事基本被避开。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">牛市总有「新口味」</div>
每个牛市都有被认为要超越我们的新东西，但保守路线最终跑赢：Sky 整体稳定币存款超 100 亿美元，是行业里以存款计遥遥领先的第一。
</div>

</div>

---

# 公平收益率之争：市场说了算，但要讲清风险

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">市场利率就是公平利率</div>
Sam 的立场：市场给出多少就是多少，人们愿意接受这个风险即可。不必人为抬高收益去「补偿」风险。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">缺失的一环：DeFi 评级</div>
用户习惯只盯着最高的 APY，却不理解结构背后的风险。Spark 一直在推动 DeFi 评级，让存款人先知道自己面对什么。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">利率为何贴着 SOFR</div>
稳定币流动性过剩、四处找收益，收益率自然被压缩。这是供给过剩，不是风险定价失灵。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">保守版现金停放处</div>
Spark 的定位：可以安心停放现金的地方——以现金、T-bills 和加密抵押借贷为主，对 ETH/BTC 抵押品从未有过重大损失事件。
</div>

</div>

---

# 100 亿资产负债表，40% 部署，其余闲置

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs font-bold opacity-60 mb-2">Sky 资产负债表</div>
<div class="text-3xl font-bold text-blue-600 my-1">~$10B</div>
<div class="text-xs opacity-70">稳定币存款规模</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs font-bold opacity-60 mb-2">其中部署到借贷</div>
<div class="text-3xl font-bold text-yellow-600 my-1">~40%</div>
<div class="text-xs opacity-70">大量资金以闲置流动性存在</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs font-bold opacity-60 mb-2">收益率自然收敛</div>
<div class="text-3xl font-bold text-green-600 my-1">→ SOFR</div>
<div class="text-xs opacity-70">过剩供给把利率压向基准</div>
</div>

</div>

<div class="mt-4 p-3 text-sm rounded border-l-4 border-purple-500 bg-purple-50 leading-relaxed">
Sam 的判断：随着更多稳定币用例上链，「随时可取的高流动性基础收益」是好事——人们想要自己的现金随时享受国债级收益。Spark 的目标就是做这件事的保守版本。
</div>

---
layout: two-cols
---

# AI 威胁：危险峰值之后，是更好的位置

- 当下处于「危险的峰值期」，但 Sam 相信行业最终会走向更好的地方
- AI 既能用于进攻，也能用于防御；形式化验证是防御的终极方向
- 智能合约本身相当安全——代码足够简单；重大黑客案全是 OPSEC 失守
- Phoenix Labs 内部：人类审计师 + AI 补强，AI 已开始追平最顶尖的人类审计师
- 攻击面在别处：老系统代码动辄百万行，出错不可避免

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-dual-use.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 破译 AI 神话：它也得遵守物理规律

<div class="mt-6 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"The AI is not like a magical thing that can just do anything. It does follow the rules of physics and so we do know how to deal with it."

<div class="text-sm opacity-70 mt-2 not-italic">「AI 不是能随心所欲的神奇魔法，它同样受物理规律的约束——所以我们知道如何应对它。」</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">智能合约 → 最安全的托管方式之一</div>
现代智能合约刻意保持极简，人类审计师审完后可以高置信；叠加 AI 与形式化验证，安全地位被进一步夯实。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold mb-1">黑客集中在百万行级老代码</div>
出事的往往是存在最久的软件——代码库百万行级，攻击面巨大，总有人会犯错。这与智能合约的极简形成对比。
</div>

</div>

---

# Spark Prime：把主经纪业务搬进加密

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">跨 DeFi 与 CeFi 的保证金</div>
主要面向对冲基金：让它们把 DeFi 与 CeFi 的仓位统一起来做保证金管理。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">已接入 TradFi 场外</div>
支持传统金融场外交易——正赶上传统股票成为本轮大热叙事。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">连接 Hyperliquid</div>
把 TradFi 场外与 Hyperliquid 等现代 DeFi 场所连起来提供流动性。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">尚在初步扩容</div>
目前处于规模化的早期阶段，属于新的增长曲线。
</div>

</div>

---
layout: two-cols
---

# 稳定币大战：Coinbase 打法被复制

- Coinbase 开创的 playbook 正被复制：分发渠道 + 链 + 自家稳定币
- Robinhood 的 Earn 产品给 USDC 开 7% 收益；Stripe、Tempo 也在跟进
- Spark 被选为支撑 Robinhood 7% vault 的三家资产发行方之一，提供跨链收益
- 每家的目标一致：拿走用户使用自家稳定币产生的净息差（NIM）

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stablecoin-playbook.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Stablecoin FX Layer：零资本成本的做市

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">与 Uniswap 合作的新产品</div>
新推出的 Stablecoin FX Layer，让稳定币之间的大额兑换在链上完成：不用过慢的银行系统，不用付赎回费。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">为什么是 Spark 来做</div>
Spark 与 Hyperliquid 加起来，让 Sky 成为链上最大的 USDC 持有方之一——稳定币本来就是闲置库存。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">帮新稳定币快速起规模</div>
给新稳定币发行方提供收益 + 做市，让它们迅速起量：USDC 用户无需离开链上就能换入新币。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">DeFi 乐高的胜利</div>
所有积木拼在一起，做出了比传统做市商与流动性体系更优的产品。
</div>

</div>

---

# 货币的单一性：DeFi 缺的那块拼图

<div class="mt-4 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 rounded">

"It really helps improve … what we call like the singleness of money." — 传统银行体系里，美联储背书所有美元存款，银行间存款大体可互换；DeFi 里不存在这种货币的单一性。

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">Sky/USDS 正在成为连接层</div>
Sky 用 USDS 把美元系稳定币连接起来，成为 DeFi 版「货币单一性」的枢纽。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">Spark 提供基础设施</div>
自动配置、做市、市场制造的技术，全部由 Spark 在 Sky 生态内承接。
</div>

</div>

---

# SPK 代币：回购 + 财报，把价值讲成基本面

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">代币世界的合并潮</div>
少数价值存储例外（比特币、ETH、SOL 等）之外，其余代币都会收敛到 DCF 估值——至少那些结构像股权的。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">一家盈利的协议</div>
Spark 有真实收入且盈利。所有数字公开在 data.spark.fi，每季度发布财报，任何人都可以自己给代币定价。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold mb-1">超额利润 → 回购</div>
治理已投票通过：超额利润用于代币回购，价值捕获闭环。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">短期价格无所谓</div>
「底层是一家基本盘扎实的公司，所以我不太担心短期价格。」——回应 SPK 处在历史低点附近的疑问。
</div>

</div>

---

# 增长引擎：机构借贷 2.5 亿 → 10 亿

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs font-bold opacity-60 mb-2">机构借贷已放款</div>
<div class="text-3xl font-bold text-blue-600 my-1">$250M</div>
<div class="text-xs opacity-70">去年底上线的托管式 BTC 抵押融资</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs font-bold opacity-60 mb-2">年底目标</div>
<div class="text-3xl font-bold text-green-600 my-1">$1B+</div>
<div class="text-xs opacity-70">「强劲的管道，年底做到十亿甚至更多」</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs font-bold opacity-60 mb-2">Spark Savings USDT</div>
<div class="text-3xl font-bold text-yellow-600 my-1">#1 在望</div>
<div class="text-xs opacity-70">已是流动性最好的 USDT 产品之一，预计近期成为市场领导者</div>
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-1.5 text-[13px]">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"The AI is not like a magical thing that can just do anything. It does follow the rules of physics."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 AI 威胁：它受物理规律约束，所以有办法应对</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"We're going to move actually to a better place ultimately."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 AI 时代的 DeFi 安全：AI 既能进攻也能防守，行业终将更强</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Just take the conservative view and compound the growth slowly over time has been the winning strategy."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 Spark 的保守 DNA</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"The core DAO no longer has to make decisions about what to do. It will just set the rules and the risk policy that the subDAOs have to follow."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 subDAO 治理模型</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"There is not a cost of capital basically to be doing this sort of market making."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 Stablecoin FX Layer 的天然优势</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Excess profits will go … to buybacks … in the token."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 SPK 代币的价值捕获，已由治理投票通过</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">

"We know how to do best practices and so we just will continue to follow best practices."

</div>

<div class="mt-6 text-sm opacity-50">
Spark 的生存哲学：保守、复利、把安全当作产品的第一功能
</div>
