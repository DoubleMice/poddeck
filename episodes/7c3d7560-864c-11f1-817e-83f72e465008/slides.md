---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "DEX in the City: How Kalshi's Rough Week Became a Federal Fight for Prediction Markets"
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# DEX in the City

<div class="mt-4 text-xl opacity-70">
Kalshi 的艰难一周，如何演变为一场联邦与州的预测市场监管权之争
</div>

<div class="mt-12 text-sm opacity-50">
Unchained Podcast · 2026年7月 · 约50分钟
</div>

<div class="mt-16 text-xs opacity-40">
本期为法律圆桌讨论，由 KK（Katherine）、Jesse（Ribbit Capital）和 V 共同主持<br/>
涵盖预测市场监管、日本加密新政、DTCC 代币化与美国立法进展
</div>

---
class: text-left
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>CFTC 动用"核选项"</strong><br/>
联邦监管机构自 1980 年以来首次激活紧急权力，阻止州法院命令执行，将商业纠纷升级为联邦主义原则之争。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>预测市场的生存博弈</strong><br/>
密歇根州起诉 Kalshi 并获临时禁令。Kalshi 夹在州法院裁决与联邦监管之间——听从一方即违反另一方，进退两难。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>日本加密监管升级</strong><br/>
新《金融商品交易法》将加密收益税率从最高 55% 降至 20% 统一税率，为稳定币、ETF 和机构参与铺平道路。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>DTCC 进场：基础设施上链</strong><br/>
美国证券清算托管机构 DTCC 成功处理代币化证券的实盘交易。与 Wrapper 不同——他们代币化的是真实的 DTC 权益记录。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Kalshi 的连环事件</strong><br/>
航班取消合约因道德风险争议叫停；FlightAware 禁止数据使用；总统提词器操作员涉嫌内幕交易被内部检测系统发现。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>美国加密立法倒计时</strong><br/>
Clarity 法案在道德条款、利率妥协和执法担忧三方拉锯中停滞，国会夏季休会在即，立法窗口正在关闭。
</div>

</div>

---
class: text-left
---

# 密歇根州 vs Kalshi：州与联邦的碰撞

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**事件的起因**：2026年3月，密歇根州起诉 Kalshi，主张其体育赛事合约属于博彩，要求 Kalshi 取得密歇根州的博彩牌照。这触及了预测市场监管的核心矛盾——联邦 CFTC 管辖的指定合约市场（DCM），是否受州博彩法的约束？

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**临时禁令（TRO）**：密歇根州成功获得 TRO。与其他州过往的禁令不同，法院不仅要求 Kalshi 停止向密歇根居民提供服务，还**主动下令清算**密歇根居民持有的未平仓体育赛事合约——此前其他州的 TRO 仅要求停止新交易，允许用户自行平仓。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Kalshi 的回应**：Kalshi 全面遵守法院命令，对密歇根州进行地理位置屏蔽，并取消了该州用户的未平仓交易。据称受影响交易量较小，执行难度不高。

</div>

<div class="text-xs opacity-60 mt-2">
不过，故事在这里才真正开始——因为 CFTC 随后做出了一个在美国监管史上极为罕见的举动。
</div>

</div>

---
class: text-left
---

# CFTC 的"破玻璃"紧急权力

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**什么是紧急权力？**  
《商品交易法》赋予 CFTC 在"紧急情况"下采取非常规行动以保护衍生品市场完整性的广泛授权。这项权力设立于 1970 年代一系列市场操纵事件之后。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**历史上仅使用过约四次**  
此前四次动用分别是：马铃薯合约历史性违约、咖啡价格暴涨、白银市场逼仓事件，以及卡特总统对苏联的粮食禁运（1980年）。每次都针对市场本身的故障或失灵。

</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**这一次与以往完全不同**。密歇根州用户交易体育赛事合约，并不构成市场失灵、操纵或清算所压力。CFTC 此次援引紧急权力的理由是：Kalshi 被置于"不可能境地"——遵守州法院命令即违反联邦监管要求。CFTC 的干预将一个公司 vs 州的商业纠纷，直接升级为《商品交易法》联邦优先权范围之争。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
此前 CFTC 紧急权力的适用对象一直是市场参与者，而这一次——CFTC 用它来对抗一个州。这是紧急权力适用范围的重大扩展。
</div>

</div>

---
layout: two-cols
class: text-left
---

# Kalshi 被夹在中间：州法院 vs 联邦监管

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>左侧压力：密歇根州法院</strong><br/>
TRO 要求 Kalshi 停止在密歇根州的业务，并主动清算未平仓体育赛事合约。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>右侧压力：CFTC 紧急命令</strong><br/>
CFTC 援引 1980 年以来从未动用的紧急权力，命令 Kalshi"不要取消那些交易"。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>核心矛盾</strong><br/>
Kalshi 不可能同时遵守两个命令。这不再是商业纠纷——它变成了联邦法律优先于州法律的宪法性问题。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>下一步</strong><br/>
案件极可能上诉至最高法院。多位法律观察人士认为，最高法院会积极受理此案。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kalshi-federalism.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 如果 CFTC 赢了，体育博彩行业会被彻底改写

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**核心逻辑**：如果法院最终裁定 CFTC 对指定合约市场（DCM）的管辖权优先于州法律，那么任何体育博彩平台都可以通过将每一笔投注包装为"事件合约"的法律形式，转而接受联邦 CFTC 监管——从而完全绕开各州的博彩许可、税收体系和产品限制。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">

**当前状态：州级监管**  
每个州独立发放博彩牌照、制定税率和消费者保护规则。平台需要逐州合规，成本高昂且规则碎片化。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">

**如果 CFTC 获胜：联邦统一监管**  
一个联邦牌照覆盖全美，无需逐州申请。DCM 本身作为微型自律组织（SRO），自行监督和执行规则。

</div>

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**州的立场**：这正是各州最担心的结果——它们认为这完全不合适，各州需要并且应当保留对博彩活动的管辖权。州政府将此视为对其监管主权的直接威胁。

</div>

<div class="text-xs opacity-60">
这也是为什么联邦主义（federalism）成为本案的核心议题：联邦与州的权力边界，而不是体育赛事合约本身的性质。
</div>

</div>

---
class: text-left
---

# 预测市场不止体育：一个更广阔的愿景

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**体育是目前争论的焦点，因为体育博彩在各州有成熟的监管框架。但预测市场的潜力远不止于此。**

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
<strong>经济对冲工具</strong><br/><br/>
航班取消 → 会议组织者对冲损失<br/>
天气事件 → 农业、物流对冲<br/>
政策变化 → 企业战略对冲<br/>
算力价格 → 技术公司对冲
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
<strong>信息聚合机制</strong><br/><br/>
事件合约的价格本身就是集体智慧的信号——比传统民调更快、更难以操纵。可以补充甚至替代传统的信息收集方式。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs leading-relaxed">
<strong>将体育与其他合约分离</strong><br/><br/>
一个值得思考的视角：如果最高法院裁决时，能将体育博彩类事件合约与其他类型（如算力对冲）分开处理，监管路径可能会截然不同。
</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
<strong>关键矛盾</strong>：州层面的争论几乎完全集中在体育上。但 Kalshi 和 Polymarket 的合约涵盖大量非体育类别。将不同类型的合约统一处理，还是分拆对待——这可能成为最高法院裁决中的一个关键分叉点。
</div>

</div>

---
class: text-left
---

# 航班取消合约：对冲工具还是道德风险？

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Kalshi 的提案**：推出与机场整体航班取消率挂钩的合约。Kalshi 认为这是一个合理的对冲工具——会议组织者、依赖航班到达的企业可以利用它管理运营风险。从经济角度看，航班取确实对大量商业活动产生实质性的负面经济影响，这个使用场景是有道理的。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed">

**公众与业界的强烈反对**

- **道德风险**：如果取消航班可以获利，是否会有人故意制造延误？节目主持人 Jesse 直指要害——"不要让我在机场经历更多延误"
- **数据封锁**：FlightAware 明确告知 Kalshi 不得使用其数据，尽管航班取消信息属于公共领域
- **规则并非无懈可击**：Kalshi 为防范内部人获利制定了多项规则，但无法做到完全密封

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">

**Kalshi 的回应**

Kalshi 最终取消了该合约计划。主持人们认为这更多是出于政策/公关考量而非法律原因。这一事件揭示了预测市场面临的一个普遍困境：即使合约在经济学上有合理的对冲用途，公众对道德风险的恐惧和相关方（如数据提供商）的抵制，也足以令其夭折。

</div>

</div>

<div class="text-xs opacity-60">
这个案例也说明，Kalshi 的法律团队和运营团队需要同时应对法院、监管机构、数据提供商和舆论——多维度的压力考验。
</div>

</div>

---
layout: two-cols
class: text-left
---

# 内幕交易：检测到的和未检测到的

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**已知风险**：预测市场上存在大量匿名账户。内部人可以利用与职业身份不关联的账户进行交易，绕过平台的检测系统。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**三层结构**：内幕信息源持有者（如政府工作人员）→ 匿名账户（无法追踪身份关联）→ 预测市场合约平台。越往外层，匿名性越强，检测难度越大。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**积极面**：Kalshi 作为 DCM 履行了自律监管义务，检测到了这次异常活动。但正如节目主持人所言——"每抓住一个，还有多少人正通过匿名账户操作而未被发现？"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./insider-risk.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 提词器事件：一个具体的内幕交易案例

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**事件经过**：特朗普总统的长期提词器操作员被指控在 Kalshi 上下注。作为提词器操作员，他可以在总统演讲稿公开之前接触到文本内容——这意味着他拥有非公开的、可能影响市场的信息。Kalshi 的内部风控系统检测到了异常交易活动，履行了其作为指定合约市场（DCM）的自律监管义务。该操作员目前已被停职。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">

**这说明了什么？**  
内幕交易风险不是理论上的——它已经在真实发生。预测市场的合约种类越多，内幕信息触及的范围就越广。国家安全相关合约尤其令人担忧。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">

**Kalshi 的应对值得肯定**  
DCM 的自我监管机制在这次事件中发挥了作用。但依赖平台自查是否足够？当市场扩展到更多合约类型时，监管体系需要配套升级。

</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
<strong>更大的问题</strong>：这不是 Kalshi 独有的问题——所有预测市场都面临同样的挑战。随着合约种类从体育扩展到政策、国家安全等领域，内幕信息的定义和检测难度将呈指数级增长。目前行业对此还没有系统性的解决方案。
</div>

</div>

---
class: text-left
---

# 日本加密监管大升级：《金融商品交易法》

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">

**从支付工具到投资资产**  
日本早在 2017 年就通过了第一部加密法律，是首批立法监管加密的主要经济体之一。但当时将加密定性为"支付工具"，实际发展路径与预期偏离。2026年7月15日生效的新《金融商品交易法》将其重新定位为投资组合中的资产——"更像股票，而非钱包里的现金"。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">

**一套"清晰度法案"级别的监管包**  
日本没有简单地将加密塞进现有证券法，而是为加密创建了一个全新的金融工具类别，并配套一整套规则：发行人规则、内幕交易禁令，以及严厉的刑事处罚——运营未注册交易所最高可判 10 年监禁。

</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**实际效果**：这部法律不是一纸空文。法规刚刚生效，效果已经显现——东京证券交易所已为现货加密 ETF 扫清跑道，日本的亚马逊配送公司宣布将用日元稳定币向司机支付大部分薪酬。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
<strong>"胡萝卜很大，监管的大棒也更重"</strong>——主持人 Jesse 如此总结。日本采用的策略不是试图消灭加密，而是接受它"会长期存在"，然后决定：是把它整合进现有体系，还是当做一个独立行业来管？日本选择了"整合"路线。
</div>

</div>

---
class: text-left
---

# 日本税改：55% → 20%，稳定币与 ETF 的跑道

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 旧税率
<div class="text-4xl font-bold text-red-600 my-2">最高 55%</div>
<div class="text-xs opacity-70 leading-relaxed">加密收益此前按杂项所得税率征税，最高档可达 55%，远高于股票投资的资本利得税率</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 新税率
<div class="text-4xl font-bold text-green-600 my-2">20%</div>
<div class="text-xs opacity-70 leading-relaxed">统一 20% 固定税率适用于加密收益，大幅降低交易和持有成本，鼓励机构和个人参与</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 实际落地
<div class="text-4xl font-bold text-blue-600 my-2">已发生</div>
<div class="text-xs opacity-70 leading-relaxed">日本亚马逊配送公司即将用日元稳定币支付司机薪酬；东京证券交易所已为现货加密 ETF 做准备</div>

</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded mt-3 text-xs leading-relaxed">
<strong>日元在国际金融市场中的重要地位</strong>：日元是全球重要的融资货币和风险情绪指标。由日本主要银行和政府关联机构发行的日元稳定币产品，正在通过银行联盟协作推进。一旦实现跨境互操作性，日本可能成长为机构资金流动的关键枢纽——尤其是在其稳定币和代币化资产能够与美国的监管框架对接的前提下。
</div>

</div>

---
layout: two-cols
class: text-left
---

# 三种监管哲学：日本 vs 欧盟 vs 美国

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

<strong>日本：整合路线</strong><br/>
将链上资产整合进现有金融体系。加密是金融的延伸，而非独立行业。创建新金融工具类别，同时保持与传统金融法规的衔接。从税收到 ETF，系统性推进。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

<strong>欧盟 MiCA：独立路线</strong><br/>
将加密作为独立行业单独监管。MiCA + MiFID 双轨并行——加密和传统金融各有各的规则。问题："如何监管加密？"

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

<strong>美国：不确定路线</strong><br/>
立法仍在进行中。多机构分权（SEC、CFTC、DOJ…），缺乏统一的监管框架。当前版本的法案并非惩罚性的，但立法窗口正在缩小。

</div>

<div class="text-xs opacity-60">
主持人 KK 指出一个微妙之处：多数加密行业人士可能偏好 MiCA 的"独立行业"路线——除非该路线以负面和惩罚性的方式区别对待加密。而上一届美国政府确实有过"把方钉塞进圆孔"的做法，即强行套用不合适的旧规则。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./regulatory-approaches.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# DTCC 代币化：基础设施本身走上区块链

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**发生了什么**：DTCC（美国存管信托和清算公司）——美国几乎所有公开交易股票的清算和结算基础设施——宣布已成功使用代币化证券处理了实盘生产交易。JP Morgan、Goldman Sachs、BlackRock、Citadel、CME 以及数十家主要市场参与者参与了此次测试。DTCC 的代币化服务将于今年晚些时候正式上线。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**这与其他代币化股票有什么不同？** DTCC 代币化的是**真实的 DTC 权益**——即代表美国几乎所有公开证券所有权的账簿记录本身。它不是创建一个链上的新证券市场，而是**把现有的证券市场搬上链**。这是一个听起来微妙但实际上极为重要的区别：不存在"哪个代币才是真正的那只股票"的问题——DTCC 持有权威的所有权记录。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**"Game over?"** 主持人 V 看到这一消息后的第一反应是：对于那些试图代币化公开股票的其他公司来说，DTCC 的进场是否意味着竞争结束？"因为你不是另一家发行代币化股票的公司——你就是基础设施本身。"

</div>

</div>

---
class: text-left
---

# 代币化股票：三种截然不同的产品

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-3 gap-3">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Wrapper / 存托凭证

<div class="text-xs leading-relaxed mt-2">
股票仍托管在传统机构中，代币只是对该股票的受益权证明。<strong>不附带投票权等股东权利</strong>。通常采用离岸结构或合成敞口设计。

多个公司可以同时代币化同一只股票——出现多个"代币化版本"时，哪一个才是"真正的"？这是一个尚未解决的法律基础设施问题。

目前市场上大部分所谓的"代币化股票"都属于此类。
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DTCC 权益代币化

<div class="text-xs leading-relaxed mt-2">
代币化的是 <strong>DTC 实际账簿权益</strong>，即官方的所有权记录本身。不存在"哪个版本是真的"问题——DTCC 持有权威记录。

不是创建新市场，而是把现有市场基础设施搬上链。机构几乎肯定会偏好这种方案——它更干净、更确定、法律风险更小。

交易对手包括 JP Morgan、Goldman、BlackRock 等顶级机构。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 链上原生 IPO

<div class="text-xs leading-relaxed mt-2">
公司从第一天就在链上发行股票。发行人本身控制所有权记录，代币持有者享有完整的股东权利。

目前仅有少数公司选择此路径，但 SEC 出台明确规则后，数量预计将显著增长。这是与 DTCC 模式完全不同的赛道——DTCC 覆盖的是已有的传统证券，而链上 IPO 是增量市场。
</div>

</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
<strong>关键区分</strong>：SEC 今年早些时候已发布指引，开始区分这三类"代币化股票"。这很可能成为 Project Crypto 规则的一部分。市场需要理解的核心问题是——你在买什么？是受益权？是官方所有权？还是原生股权？三种产品的法律含义完全不同。
</div>

</div>

---
layout: two-cols
class: text-left
---

# 代币化的光谱：从合成敞口到真实权益

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

<strong>Wrapper / 存托凭证</strong><br/>
代币≠股票。仅代表受益权，无投票权。多个版本可并存。最远离"真正的股权"。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

<strong>DTCC 权益代币化</strong><br/>
代币＝官方所有权记录。不存在多版本问题。把现有市场基础设施搬上链。机构首选。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

<strong>链上原生 IPO</strong><br/>
从第一天就在链上。发行人控制所有权。完整股东权益。真正的增量市场——而非传统股票的镜像。

</div>

<div class="text-xs opacity-60 mt-2">
代币化本身不是目的——它是手段。真正有趣的部分不在代币化本身，而在于一旦资产被代币化后，你可以用它来做什么：作为抵押品、即时借贷、加密资产交叉保证金、24小时结算……
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tokenization-types.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 如果 DTCC 成为主干，加密会变成什么样？

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**一个分裂的未来**：如果 DTCC 成为代币化的主干——就像它是传统证券基础设施的主干一样——加密的面貌将与 DeFi 的原始愿景截然不同。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">

**DTCC 主导下的图景**
- BlackRock、Nasdaq 的股票和债券走上区块链轨道
- 机构金融模式，而非 DeFi
- 没有零售 DeFi 钱包
- 没有无需许可的交易
- 加密的核心原则——去中心化、无中介——被搁置

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">

**竞争不会消失**
- DTCC 虽占主导地位，但有竞争者
- Canton（Digital Asset / Don Wilson of DRW）等加密原生替代方案
- 公共区块链上的代币化方案
- 碎片化带来互操作性挑战——不同平台上的代币化资产能否互操作？

</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
<strong>主持人 KK 的矛盾心态</strong>：看到机构拥抱代币化令人振奋。但如果这意味着加密看起来不再像 DeFi——不再有去中心化、无需许可的特质——那将是一个非常不同的行业图景。许多加密市场参与者在最初设想加密的核心价值时，预想的并不是这样的未来。
</div>

</div>

---
class: text-left
---

# 美国加密立法：Clarity 还来得及吗？

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**立法三重拉锯**：Clarity 法案目前面临三个主要争议点在同时谈判——（1）是否在法案中插入道德条款；（2）关于收益率的妥协方案；（3）执法机构对法案中开发者保护条款的担忧。这不是单一争议，而是多个分歧的同时角力。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">

**时间不站在立法者这边**  
国会夏季休会临近、中选在即、伊朗战争投票等议题也在抢占议程。两院还需要在各自版本之间达成一致。多位主持人表达了对预测市场乐观情绪的不认同——"我通常是个永远的乐观主义者，但我不确定我现在像这些市场一样乐观。"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">

**如果没有 Clarity，替代方案是什么？**  
主持人 KK 反复强调：仅靠 Project Crypto（SEC 拟议规则）和监管指引来为行业提供确定性是极其困难的——规则可以被后续政府修改，无法像立法那样"面向未来"。但鉴于 Clarity 法案的不确定前景，这可能成为唯一的选择。

</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
<strong>华盛顿传来的最新消息</strong>：加密推特上关于"道德妥协会议"的头条大多不准确/有误导性。实际进展远没有市场的反应那么乐观。"预期今晚会有文本出来，但同样的说法昨天和上周都听过。"
</div>

</div>

---
class: text-left
---

# 亚太：碎片化但整体向前的监管图景

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**不要再忽视亚太**：当美国还在讨论清晰度时，亚太地区的多个司法管辖区正在以各自的方式向前推进——而且大多数方向对加密是友好的。

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">
<strong>🇯🇵 日本</strong><br/>
新法律刚生效，税改落地，稳定币已在真实场景中用于支付。机构代币化项目活跃推进。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">
<strong>🇰🇷 韩国</strong><br/>
正在起草《数字资产法》，跟随日本的步伐构建综合性的加密监管框架。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs leading-relaxed">
<strong>🇭🇰 香港</strong><br/>
正在为多家服务提供商发放牌照，建立受监管的加密交易和托管环境。
</div>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs leading-relaxed">
<strong>🇸🇬 新加坡 / 🇦🇺 澳大利亚</strong><br/>
新加坡在制度性推进方面有历史积累；澳大利亚近期有一些令行业担忧的动向，但总体上仍在"加密会长期存在"的共识下运作。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs leading-relaxed">
<strong>🇮🇳 印度 / 🇨🇳 中国</strong><br/>
印度反复改变立场，中国同样多次调整态度。两者都未形成稳定的长期框架。但目前的情况是——没有人试图彻底封杀加密。话题已经转变为"如何监管？整合还是独立？"
</div>

</div>

<div class="text-xs opacity-60 mt-2">
主持人 Jesse 的总结：回想几年前，亚太地区有多个司法管辖区在积极试图让加密"消失"。今天，讨论的基调已经从"要不要"变成"怎么管"——这本身就是行业成熟的标志。
</div>

</div>

---
class: text-left
---

# 加密好消息：ZachXBT 将 Meme 币变成地震捐款

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**ZachXBT 是谁？** 一位匿名的链上调查员，被加密社区高度尊敬，被称为"加密调查记者"。他擅长通过追踪链上交易来揭露骗局、欺诈、黑客攻击和被盗资金，经常在传统媒体之前爆出重大新闻。近年来揭露了大量骗局——包括 Meme 币内幕交易，这与本期节目的话题高度相关。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs leading-relaxed">

**问题**：有人反复利用 ZachXBT 的名字和形象创建 Meme 币——未经他许可。这些"冒充代币"（impersonation tokens）引发了加密社区关于代币未经授权使用他人身份的持续讨论。有趣的是，这些代币有些是在为现实资产代币化和机构交易而建的链上发行的——但大量流量却来自 Meme 币。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs leading-relaxed">

**他做了什么**：ZachXBT 将这些未经授权以他名义创建的 Meme 币清仓变现，然后通过 The Giving Block 将所得捐出。最近的一笔捐赠用于支持 2026年6月24日委内瑞拉地震的受灾者。在有些情况下，他能直接捐赠代币本身。

</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
<strong>一个加密"把坏事变好事"的故事</strong>：有人用他的名字做了他不认可的事，他把这些行为的结果转化为慈善捐赠。主持人认为，这不仅值得为 ZachXBT 的调查工作喝彩，也值得为他的慈善行为鼓掌。
</div>

</div>

---
class: text-left
---

# 核心金句

<div class="text-sm opacity-60 mb-3">本期对谈中值得记住的几句话：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
"看到这个消息时，我的第一个想法是：对那些试图代币化公开股票的其他公司来说，这是不是终局？因为 DTCC 不只是另一家发行代币化股票的公司——<strong>你就是基础设施本身</strong>。"
<div class="text-xs opacity-60 mt-1">— V 谈 DTCC 代币化</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
"<strong>代币化是手段，不是目的</strong>。真正的难点和真正有趣的部分，不在代币化本身，而在于一旦资产被代币化后，你能用它来做什么。"
<div class="text-xs opacity-60 mt-1">— V 谈代币化的价值所在</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
"CFTC 的这个'破玻璃'紧急权力，<strong>在历史上只被使用过大约四次</strong>——每次都是市场真的在着火的时候。而这一次，密歇根州一些人在交易体育赛事合约，市场并没有失灵。"
<div class="text-xs opacity-60 mt-1">— 主持人们讨论 CFTC 紧急权力的历史语境</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
"如果 CFTC 和 Kalshi 赢了，这将<strong>彻底改变体育博彩</strong>。如果你是体育博彩平台，为什么不把每一笔下注都包装成事件合约？一个联邦牌照覆盖全美——再也不需要逐州申请、交税、面对碎片化的消费者保护规则。"
<div class="text-xs opacity-60 mt-1">— V 谈案件对体育博彩行业的潜在冲击</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
"Kalshi 处于<strong>不可能的境地——他们被夹在岩石和硬地之间</strong>。遵守法院命令即违反联邦监管机构的指令，反之亦然。"
<div class="text-xs opacity-60 mt-1">— 主持人们讨论 Kalshi 的两难处境</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
"前 CFTC 主席 Tim Massad 说，CFTC 在预测市场监管方面<strong>'迷失了方向'</strong>。这很有趣——连那些曾在联邦机构工作、理解该机构权力重要性的人都在提出异议。"
<div class="text-xs opacity-60 mt-1">— 主持人们讨论监管机构内部的批评声音</div>
</div>

</div>

---
layout: end
class: text-center
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
"这不是 Kalshi 独有的问题——所有预测市场都面临同样的挑战。<br/>随着合约种类扩展，内幕信息的定义和检测难度将指数级增长。"
</div>

<div class="mt-12 text-sm opacity-50">
收听完整节目：Unchained Podcast · DEX in the City<br/>
<a href="https://pdrl.fm/98e0b1/traffic.megaphone.fm/LSHML8649373830.mp3" class="opacity-70">原始音频</a>
</div>
