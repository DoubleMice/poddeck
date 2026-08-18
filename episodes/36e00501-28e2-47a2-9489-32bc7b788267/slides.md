---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '174: AI冲击企业软件巨头？与SAP原欣聊大模型to B的颠覆与边界'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 冲击企业软件巨头？

## 与 SAP 原欣聊大模型 to B 的颠覆与边界

<div class="mt-6 text-sm opacity-60">
晚点聊 LateTalk · 第 174 期 · 南齐 × 原欣 · 2026-07 · 1h32m
</div>

<div class="mt-10 text-sm opacity-50">
原欣 · SAP 大中华区总裁 · 自 1998 年以来近 30 年企业市场经验（甲骨文 / VMware / 微软）
</div>

---

# 为什么这期值得听

<div class="mt-2 text-sm opacity-70">
AI coding 变强之后，最慌的不一定是程序员，而是收了几十年过路费的企业软件巨头。这期节目把冲击拆成了两层，再给出老牌厂商的应对逻辑。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**巨头直面冲击**
SAP 股价从 300+ 美元回到 160；它把自己定位成"被颠覆的那一趴"，选择自己颠覆自己。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**定价模式坍塌**
SaaS 按座席收费的时代动摇，向按用量、按结果（RaaS）迁移——"以后都agent了，你还按人头"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**两万行 vs 几亿行**
AI 一天约两万行，S/4HANA 有数亿行代码。复刻代码不难，业务逻辑才是壁垒。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**模型即产品不成立**
财务场景 99% 准确率也不可用；human in the loop 在未来五到十年仍是主流形态。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**FDE 热潮**
前向部署工程师是 AI 从小圈子外溢进企业的必经路线，两类人才正在合并。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**88% 用、3% 有回报**
麦肯锡全球调研给出的落差；中国企业的补课逻辑："出来混总是要还的"。

</div>

</div>

---

# SAP 是谁：一家把名字变成行业代名词的公司

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-1">1972</div>
<div class="text-xs opacity-70">在德国沃尔多夫小镇创立，以财务起家（R/1 系统），今年 54 岁</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 my-1">420 亿美元</div>
<div class="text-xs opacity-70">去年的收入体量，员工约 11 万，在 150 多个国家运营</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600 my-1">99 家</div>
<div class="text-xs opacity-70">全球最大的 100 强公司里，99 家在用 SAP 的软件</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600 my-1">3 亿+</div>
<div class="text-xs opacity-70">云转型后的云用户规模</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 my-1">2021</div>
<div class="text-xs opacity-70">上云元年，定义了 RISE with SAP 的转型周期起点</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600 my-1">自我颠覆</div>
<div class="text-xs opacity-70">定位从"企业应用软件"转向"全球最大的商业智能软件"</div>
</div>

</div>

<div class="mt-3 text-sm opacity-70">
"在ERP领域里……做ERP的人，somehow都会把SAP就等同于ERP三个字。"——SAP 的起家本领是把人、财、物放进一套系统里管起来。
</div>

---
layout: two-cols
---

# ERP 到底管什么：人、财、物

<div class="text-sm leading-relaxed">

- **三件事**：管人（HCM）、管钱（财务）、管物（采购、生产、库存）。最核心的起点是**财务**——做账、报税、管运营。
- **演进路径**：从财务出发，"财务业务一体化"把业务数据更实时地反映到财务；随后长出 CRM 等模块，串起端到端流程。
- 原欣的定义：一个企业管理系统，**就是管企业的从收入到回款的过程**——从商机（leads to cash）到花钱（procure to pay），全部串起来。

<div class="mt-3 p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"一个企业管理系统就是在管企业的从收入到回款的一个过程。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./erp-core.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 飞书、钉钉是交互层，ERP 才是后台

<div class="text-sm leading-relaxed">

- **分工**：办公协同（IM、会议、文档、工作流、审批）是日常交互的部分，老定义叫 OA（办公自动化）；真正指导业务运行的，是后端的财务、HCM、采购、生产制造系统。
- **回传**：在钉钉、飞书里发生的交互，结果最终要回传到后台系统里，**业务流程真正是在 ERP 里跑的**。
- **为什么渗透难**：管交互相对简单；一旦深入企业管理流程，就要面对身份管理、安全性管理、以及多得多的数据来源集成。
- 一个例子：工资计算。每个地方薪金计算逻辑、纳税要求都不一样——"这么简单的一件事"，在全球化企业里复杂度非常高。

<div class="mt-3 p-3 text-sm italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">
"现在AI出现了以后，就是既有划分好的阵地一定是被重新打乱重新去看的。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./interaction-backend.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 to B 难做：一个"简单系统"撬动几十倍的产业

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**体量对比**
原欣引述的 IDC 数据：整个产业大概 **1.2 万亿**；SAP 自己收入才 300 多亿欧元（400 多亿美金）——但它撬动的是几十倍的一个产业。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**对接面巨大**
哪怕只是发工资，就要对接银行系统、税务系统、电子发票……一个简单的系统暴露的 API 接口非常多，每个都涉及安全、数据一致性、数据颗粒度。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**点状玩家多，平台少**
AI 之前，Workday 以 HCM 为主、Salesforce 以 CRM 为主，都是点状切入企业管理某一方面；像 SAP 这样的大平台相对较少。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI 之后的变化**
从提效角度看，发票识别用 OCR 马上见效，point solution 与大软件集成变多；但要把整个系统 agentic 化，实操难度远高于做一个 demo。

</div>

</div>

<div class="mt-3 text-sm opacity-70">
从 frontier lab 里想出来的东西，要真正 fit 进企业实际场景，还有巨大的差异要弥补——周边咨询公司也需要 pick up 新技能帮客户完成转换。
</div>

---

# 股价过山车：300 → 160，但拉长看并不惨

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### SAP：高点回落 47%
2025 年年中股价超过 **300 美元**（近几年高峰），访谈时回到 **160 美元**。市场担心 coding 变强会冲击老牌企业软件。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 但拉长到 2021 年
2021 是 SAP 上云元年（定义 RISE with SAP），当时股价 **120 几块、不到 130**。就算现在跌回 160，相比 2021 还有 **20% 多**的增长。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 对照：单点 SaaS 被替代得最狠
Adobe 从快 500（约 480）跌到 220 左右；Zoom 基本上大部分都跌没了——工具类被 AI 替代的冲击更显性。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### SAP 的自我解读
对所有 SaaS 的恐慌导致用脚投票；但单点 SaaS 跌得更厉害。

<div class="italic mt-1">"只有我们可能还算挺在那的。"</div>

</div>

</div>

<div class="mt-3 text-sm opacity-70">
同一周期里，很多产品"已经几乎不存在或者夭折了"——AI 对 point solution 的替代是显性的，对平台的冲击则更多体现在商业模式上（下一页）。
</div>

---
layout: two-cols
---

# SaaS 定价模式坍塌：从数人头到看结果

<div class="text-sm leading-relaxed">

- **传统模式**：SaaS 按 user base 收费——数你有多少个用户，就收多少钱（seat-based）。
- **第一层冲击**：coding 效率提升、成本降低，"你本身原来值钱的东西不值钱了"。
- **第二层冲击**：定价模式的**认知坍塌**。企业都 agent 化了，还按人头收费吗？"可能这裁员裁的你可能减少的慢已经是做得比别人好了"——用户数增长不再是明确的业务支撑。
- **迁移方向**：SAP 自己也意识到这一点，正在转向 **consumption-based**（按用量）；硅谷更新的公司已经走到 **RaaS（Results as a Service）**——按结果给钱。
- 挑战：如何有一个准确的定价模式，是这一代 SaaS 公司共同面对的问题。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pricing-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# AI coding 的数量级：一天两万行 vs 数亿行代码

<div class="text-sm leading-relaxed">

- **AI 的速度**：简单的编码一个小时**两到三千行**；复杂、带校验、带安全性的，一个小时**两到三百行**。取中线，**一天约两万行**。
- **SAP 的家底**：S/4HANA 全部模块加起来是**几亿行代码**。传统 OP（本地部署）时代客户会部署模块，而不是把几亿行全装上。
- **对比 startup**：现在一个初创公司，**两三百万行代码**已经是一个比较成型、可以上线去做的应用。
- 数量级上确实有差异——但原欣认为，"**只是复刻代码本身其实是简单的**"，用 agent 跑复刻也不是轻易的事，但更难的还在后面。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./code-scale.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 代码可以复刻，业务逻辑不能

<div class="text-sm leading-relaxed">

- **底层的稳定性**：只要现在的世界还是"一个以碳基生物为主的管理的世界"，企业运转的形式短期不会有大的调整——该生产的还是在工厂里生产，只是流程里人干预得少。**ERP 底层的流程本身并不会改变**。
- 因此 SAP 沉淀下来的这四亿行代码，对通用业务的支撑底层逻辑依然存在。

<div class="mt-3 p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"SAP里面沉淀的就是……这四亿行代码对于通用业务的支撑的底层逻辑它还是存在的。"
</div>

- **复刻没有必要**：如果已经是一个相对标准化的东西，为什么不用它？
- **真正能创造价值的战场**：在既有标准流程之上，如何用**更高效、更低成本**的方式 serve 更多企业个性化的需求——"在基本流程之上的agent到底能做哪些事儿是真正能带来业务价值的这一趴，肯定是更重要的一个战场。"

</div>

---

# 日抛式软件：小公司的新自由

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"日抛式"软件的说法**
主持人转述与阿里陈宇森交流的观点：未来软件的某种形态是"日抛式"——需求临时、个性化，用很低的成本 web coding 出来，用一两周也许就不需要了。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**大公司里也有日抛型**
现在的架构设计会给你 agent studio：现成做的不满意，就自己做一个"日抛型的工具"，serve 某一个 purpose，用完了就抛。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**小公司的逻辑成立**
如果只是自己管理、大家基于人与人之间的 trust 协同，不需要披露财务报表、不需要审计，严格的权限管理和审计线索就不是最 critical 的——**让业务可见是最大诉求**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**但企业有生命周期**
诉求和企业在 lifecycle 的哪一步高度相关：上市、出海之后，复杂度完全不同，日抛工具就不够用了（下一页）。

</div>

</div>

---

# 大公司的信任网络：合规、审计与背书

<div class="text-sm leading-relaxed">

- **公司与外部协同**：公司长大之后，你不光和你认识的人协同，还要和外部的人协同。核心问题是——如何建立一个更广泛的信任基础，让大家信你的数据代表着你的实际业务？

<div class="mt-3 p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"如何建立一个更广泛的信任基础，让大家信你的数据是代表着你的实际业务，然后我跟你做数据交互的时候，这个数据是可信赖的，有人背书的"。
</div>

- **合规与审计**：社会基准值里有各种法律法规、regulation 的要求——上市要披露财务报表、别人要审计你，权限管理、审计线索就变成企业级诉求，不再是"手搓的小作坊"能覆盖的。
- **出海的复杂度**：自己手搓的系统在中国能用，拿到墨西哥可能就不 work 了——税务不一样、regulation 不一样，还有多币种、多语言的支持问题，都需要更复杂的平台。
- 所以：在一个广泛达成共识的平台上运行，本身就是在市场上给自己的信誉背书。

</div>

---

# 公司会变小吗：交易成本与两种力量

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么存在公司
回到公司理论：**公司边界内的交易成本大于和外部交易时，公司形态才会存在**。AI 打破了既有的定价模式之后，公司内交易的成本是否还低于外包给一个 agent？如果不一定，公司形态一定会改变。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 分散的力量
让公司变小、变分散的力量是存在的——小组织 + AI 工具可以非常高效，SAP 自己 80% 的客户其实是中小企业（十亿人民币收入以下）。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 聚合的力量
面对未知时，在可信平台、大伞（umbrella）之下的"联邦制"方式，背书和建立信任的机制更好——也有无形的手要把组织聚合起来。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 判断
最终形态"现在说还为时尚早"。但比较形成共识的是：会有岗位慢慢减少甚至消失，AI 带来的新需求也一定会长出来。

</div>

</div>

---
layout: two-cols
---

# 技术扩散的加速：70-80 年 → 30-40 年 → 20 年

<div class="text-sm leading-relaxed">

- **历史的轨迹**：从突破性新技术，到全社会大面积的生产力提升，是有周期的。
  - 第一次工业革命（蒸汽机）：大概 **70-80 年**；
  - 电的时代：约 **30-40 年**；
  - 互联网：缩短到 **20 年左右**。
- **AI 处在哪**：原欣的判断——我们现在在"第四次工业革命的中间点"，AI 的外溢**一定会到来，而且速度会比之前的几波更快**。
- **现在的局面**：狂欢还集中在 AI 相关领域，传统领域并没有很好地显现和享受红利。"不是不存在，只是历史的规律告诉我们，它外溢是需要时间的。"
- 抛给企业的问题：我们 ready 去迎接这场产业变革的重塑吗？企业个性化的服务诉求怎么被满足？

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tech-cycles.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# SAP 的自我颠覆：Autonomous Enterprise

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**2025 蓝宝石大会官宣**
最新产品策略：Autonomous Enterprise（自主运营企业）；Joule 是 SAP 的工作助手——用户告诉它意图，它做意图识别、指挥 agent。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Joule 的架构**
用户自然语言表达意图 → 意图识别 → 指挥 agent：有 assistant 做 orchestration（指令分派），有 agent 做实际落地执行。架构完整，交互轻量。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**应用层打薄**
把应用层面打薄，把更多数据和流程性的东西暴露在上一层，让 agentic 语义层的定义更顺畅——也为未来接入非 SAP 数据、外部数据铺路。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**知识图谱与企业记忆**
在既有知识里 build 企业的知识图谱；个性化数据沉淀成"企业记忆"（company memory），一层层沉淀，可自动化执行的部分越来越高。

</div>

</div>

<div class="mt-3 text-sm opacity-70">
屏蔽掉底层"四亿行代码"的复杂度，让用户体验到 AI 给传统 ERP 带来的不一样——这是老牌软件公司给自己的颠覆路径。
</div>

---

# 从记录型系统到可执行系统

<div class="mt-6 p-6 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

<div class="text-2xl font-medium leading-relaxed">
"我们是希望把SAP的系统从一个记录型的系统变成一个可执行的系统。"
</div>

<div class="mt-4 text-sm opacity-70">
——原欣，谈自主运营企业的一句话目标
</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

- **越往后，人参与的部分越少**，agent 自动执行的部分会越来越多。
- 但原欣判断：**未来五到十年，一定还是 human in the loop**——agent 执行，人做判断；一些复杂作业现在一定需要人干预。
- **为什么**：企业记忆要一层一层沉淀，标准流程叠加非结构化数据和离线决策，慢慢才能提高自动化比例。不能跳过积累过程。

</div>

---

# 财务关账：为什么 70-90% 之后还得靠人

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 看似标准的流程
财务月结关账听上去是一个相对标准的流程，但每次关账都有 agent 完成不了的部分——比如企业间往来核对（intercompany reconciliation），agent 运行完"可能完成百分之七十、八十，甚至九十都可以给你对上"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 人判断的环节
剩下的差异里：**汇率导致的差异**，到底是汇率差异还是数据错误？这需要人判断。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 坏账计提
坏账计提用什么模式、计提多少——这些计提都需要人在里面做判断，不能直接用数据推演。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 端到端的完成方式
典型场景：agent 把日常 **70-80%** 的自动化工作做完，人做最后的审核确认，整个端到端流程才完成。

</div>

</div>

<div class="mt-3 text-sm opacity-70">
这正是"记录型系统 → 可执行系统"的中间态：自动化比例在上升，但判断权暂时还在人手里。
</div>

---
layout: two-cols
---

# 不做基模：SAP 的模型策略是聚合

<div class="text-sm leading-relaxed">

- **合作而非自研基模**：与 Anthropic、Google、微软这些基模厂商合作。基模演进速度太快——"你看Cursor也被收了"，细分领域随时可能被基模吃掉；SAP 擅长的是企业运营侧的流程、数据处理和用户交互。
- **提供最多可用的模型**：SAP 开放给所有第三方，"我们提供的可用的模型数量是最多的"——Azure 跑的模型不跑 AWS，各自有闭源模型；SAP 用最合适的场景对应最合适的模型。
- **自研垂域模型**：基于表数据训练自己的垂域模型（RPT，从 Term 1 迭代到 1.5），结构化数据不应有任何幻觉。
- **聚合的例子**：客户问一个未来收款预测——外部大模型提供商誉、回款压力等信号；内部结构化数据提供历史订单履约情况；SAP 聚合不同模型的能力，"拼出来一个最符合你要求的一个答案"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-mix.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 幻觉问题：99% 准确率在财务里就是不可用

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 大模型的现实
"大模型现在这种技术范式，它肯定是多多少少会有幻觉的。"在打榜时 90% 以上可能已经是很高的 benchmark，但在财务管理领域，**99% 的准确率也不是可接受的准确率——它可能就是百分之百**，任何不准确就是不可用的数据。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 技术层的应对
现在有 agent 的 reflection 做校正，尽量排除幻觉；SAP 也在想如何通过上下文、harness 让 agent 执行的效率、准确度提升。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 组合而非押注
结构化数据的场景：保留传统机器学习做预测的准确度，同时在合适的场景里吸纳大语言模型的意图理解能力——组合起来让用户轻松完成业务，还能保证准确性。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### "模型即产品"在 To B 不成立
未来五到十年可见的范围内，既有的业务形态、企业形态不变化，"**在 To B 里面只把模型扔进去肯定是不够的**"。

</div>

</div>

---

# CIO 的吐槽：老板在微信里丢来一个"我也要"

<div class="mt-3 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded leading-relaxed">
"他们吐槽的就是老板经常在微信上读了一个什么什么什么AI能干啥，然后丢给他说我也要。这是现在就是尤其大企业的CIO最头疼的事。"
</div>

<div class="mt-3 text-sm leading-relaxed">

- **最大的落差**：大家认为 AI 来了，以前和数据相关的苦活、脏活、累活就不用干了——这是挺大的一个错位。AI 可以**加速**数据清洗的过程，但这个过程并不会消失。
- **新数据的解法**：在数据生成的那一刻就带着充分的业务上下文，而不是二次清理加工、费大量 token 去清洗。
- **历史数据的解法**：AI 帮助梳理历史数据，把"老师傅"的 know-how 蒸出来——以前靠开会、邮件形成的决议在系统外循环（体外循环），现在可以把这些非结构化数据沉淀进企业记忆。

<div class="mt-2 p-2 text-sm italic bg-blue-50 bg-opacity-40 rounded border-l-4 border-blue-400">
"其实AI能帮助我们把一些非结构化的历史数据，把老师傅给蒸出来。"
</div>

</div>

---

# 人才落差：懂 AI 的人不进传统企业

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 人才在哪
真正懂 AI 的人都在大厂和 startup 里怀揣梦想做 AI；传统领域需要他们，但**真正懂 AI 的人不愿意加入传统企业**。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### CIO 的求救
原欣认识的 CIO 基本上都会打电话来请他推荐人。传统企业还要面对：卡在哪？花多少钱？数据在哪？而且 top tier 人才往往不是一个人来，要带几个人才能把事干了。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 供需错配
企业没那么多卡；对 AI 有向往、又想找 top tier 人才，但理解不了 top tier 提出的诉求——**人才的落差非常大**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 供给端的现实
AI 还没有在人才供给侧辐射到传统行业，帮企业把转型做完的人远远不够。

</div>

</div>

<div class="mt-3 text-sm opacity-70">
这也是 FDE（前向部署工程师）热潮兴起的背景之一——人才问题需要通过新的交付形态来解决。
</div>

---
layout: two-cols
---

# FDE 是什么：传统顾问 vs 前向部署工程师

<div class="text-sm leading-relaxed">

- **FDE 的起源**：这个模式最早是 Palantir 做起来的，那时候工程师进去更多是从底层数据梳理的角度切入，偏产品侧、技术侧。
- **传统 ERP 顾问**：SAP 派去的顾问是行业专家、财务专家——从业务端切入，问你记账准则、财务分析预期，倒推科目架构怎么设计；最终落在标准化产品上，个性化诉求通过额外模块、外挂功能解决。做定制开发的人也是 consultant，不是产品。
- **FDE 的差异**：把**做产品的人**提前部署到客户那里，最后做出来的东西**会变成我的产品**。因为 AI 能解决什么、以什么形式解决，还停留在离产品比较远的地方，必须由产品工程师直接去趟。

<div class="mt-3 p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"我们是拿着一个标准的产品说我理解你……它是直接用产品的人去做，所以它更偏底层的engineer。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fde-vs-consultant.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# FDE 的演进：从单打独斗到能力互补

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 五月的大动作
Anthropic 和 OpenAI 各自宣布成立单独的 FDE 组织——deploy company；SAP 和微软也都有自己的 FDE team。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 拉上咨询与 PE
合作方有麦肯锡、埃森哲等咨询公司；也有 PE——把被投企业（portfolio company）开放出来做 hands-on 项目。Anthropic 也开始与波士顿等咨询公司合作。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么演进
一开始大家觉得"代码是一切，我过去了夸夸就可以做了"；但发现 ontology（本体的建立）依赖对客户业务的深度理解——**缺一个转化器**：懂业务、能把业务变成可 coding 场景的人。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 技术与业务哪个难补
原欣的判断：技术更容易补——技术水涨船高，基模能力提升带动效率提升，懂业务的人更容易上手驾驭大模型；而"对于懂模型的人，让他去懂记账是怎么做的，对吧，就是这个差异还是不太容易的"。

</div>

</div>

---
layout: two-cols
---

# 关务案例：33 个国家，准确率 60-70% → 90%+

<div class="text-sm leading-relaxed">

- **客户的自建尝试**：一家大型创新公司，在全球 33 个国家做关务申报，不同国家的关务单据完全不一样，document 数据量很大。他们自己用 hardcode 方式做了数字化员工（agent）做审核报关——**准确率只有百分之六七十**。
- **结果：人变忙了**。人总要去查剩下 30-40% 的错误到底来源于哪儿，没有提效，反倒怨声载道。
- **SAP 进去之后**：因为对 33 国的税务有基本理解（GTC 全球税务平台），加上 Document AI 通过模板配置识别每个国家的基本数据项——基于标准做数据切片，不用每次都用长上下文（token 消耗高、准确率低）。
- **效果**：准确率瞬间提升到百分之九十几；客户本来只做一个国家试点，马上三十几个国家争相要求上线。

<div class="mt-3 p-3 text-sm italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">
"大家在探索AI真正能够带来业务价值的这个过程，其实不用完全摒弃掉那些以前的东西"——标准流程打底，AI 补增量价值。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./customs-case.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# FDE 会持续吗：fewer but better

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 人效在提升
一个创业企业以前需要 50 到 200 人规模，现在二三十个人就能把两三百个人的活干了。"不管你是做 FDE 还是做什么样的工作，可能我们都需要 fewer but better"——更少的人、更好的人。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 逃不掉的脏活累活
梳理企业的流程、组织和数据，逃不掉；对客户业务的理解，逃不掉；把业务转化成代码，也逃不掉。"只不过我用AI做代码的速度提效了，但并不代表着这个转化的过程它就自然而然的加速了"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 两类人正在合并
一边是麦肯锡、波士顿的咨询顾问下沉做这件事；一边是 FDE 偏 AI、偏 coding 的人在做。两股力量会**合并成一个更综合的能力**——既懂工程、又懂业务的人才能持续留在岗位上。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 规模不会复制 2000 年
不一定有咨询公司爆发期那样十倍二十倍的增长——因为人效提升了。但"业务和技术结合的过程"，一定是 AI 从小圈子外溢到更广泛 enterprise 天地的必经路线，这段时间这份工作一定是需要的。

</div>

</div>

---

# 比技术更大的挑战：组织惯性

<div class="mt-3 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded leading-relaxed">
"其实我觉得AI真正你去scale在现实场景里面遇到的技术上的挑战远小于组织上的挑战，组织上的挑战会更大。"
</div>

<div class="mt-3 text-sm leading-relaxed">

- **组织的 gravity（惯性）**：真正进到企业里做事时，大多数人不会因为 AI 来了就自然拥抱 AI——有些人没有意愿，有些人有意愿没能力，有些人既没有意愿也没有能力。
- **组织越大，惯性越大**：大家更倾向于用熟悉的、了解的、会做的方式一直做下去。
- **烧 token 也没用**：前一阵"敞开了烧 token，鼓励大家烧 token"，即便在高科技公司也不是所有人都会拥抱和使用；现实的大型 enterprise 里人才密度更低，用 AI 拉动一个"重力更大"的实体更难。

</div>

---

# 渗透现状：88% 在用，只有 3% 觉得有回报

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-1">2000+</div>
<div class="text-xs opacity-70">麦肯锡全球访谈的企业数量</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600 my-1">88%</div>
<div class="text-xs opacity-70">或多或少的都会用 AI 去做一些项目</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600 my-1">3%</div>
<div class="text-xs opacity-70">觉得真正有业务回报的企业</div>
</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

- **预算的结构性变化**：IT 预算都在被削减，AI 预算都在增加——一个传统 IT 项目想立起来，不和 AI 挂钩立项都会比较困难。
- **落地状态**：真正上 production 的项目（像关务那样的）并不多，探索阶段做 POC、做原型的更多；咨询公司开始接到规划 AI 场景、原型设计、岗位调整的单子。
- **结论**：单点砸钱能出效果，规模化还在起步。

</div>

---

# 大客户、小公司与最挣扎的中间层

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 大客户动得快
真金白银愿意付钱的多是大客户：有足够的数据、有足够的痛点，提效和节省成本的诉求更强烈，也有财力支撑实验——去用新技术解决自己最疼的地儿，是很原始的一个驱动力。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 中型企业最挣扎
几个亿到一百亿左右的中间层，进度和创始人、企业认知强相关。愿意拥抱 AI 的企业动得快、步子也大；有些企业则认为"等你们捣饬清楚了我再入场"，现在不是最好的入场时间。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 小公司另走一路
用点开源的或 AI 工具自己就跑得很快——那是另一种形态的 AI 演进路数，不经过企业级平台。

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

- **中国中型企业的现实**：非常务实。即使是很酷、很创新的消费品牌，在企业管理侧真正愿意投钱做 AI 提效的并不多；他们投 AI 更多是在**产品创新**上——比如所有扫地机器人都在用大模型优化端侧模型。管理哲学问题：不认为投在管理侧的收益会大于投在产品侧。

</div>

---

# 中国 SaaS 之问：出来混总是要还的

<div class="mt-3 text-sm leading-relaxed">

- **为什么中国没长出全球 SaaS 巨头**：与企业心态强相关。快速发展的企业都在追逐 top line 成长——更快 go to market、更快抢夺市场；压力全在获取市场和客户，售后运维压力又大，资源不停在业务侧翻滚。
- **底子潦草**：中间企业底层的很多系统建设非常潦草——因为涨得太快，没有一个喘息的窗口好好规划设计。很多中国公司变大以后也是这样。
- **AI 不会自动补课**：一个七拧八歪的非结构化基础，AI 来了也不会让它马上站起来跑——"AI不会自然而然的帮你修复掉你不想做的那一盘"。
- **弯道超车不成立**：过去犯的错误，用同样的思维指导 AI 这一步，还是会犯。

<div class="mt-3 p-3 text-sm italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">
"你看你再遇着下一波技术变革的时候它不会自然而然的帮你把以前落的课就自然而然的跨越，它不是个弯道超车的逻辑。"……"出来混总是要还的。"
</div>

- **反例是国外**：国外企业看似审批繁琐、行动慢，但底层基础好，AI 一旦赋能，加速度会更高。现在的很多 AI 基建，其实都在补过去信息化的课。

</div>

---

# 行业渗透：轻资产先行，制造两端受冲击

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 轻资产行业先接受
偏服务类型的行业对 AI 融入容易：金融服务、其他类型的服务，以及互联网企业本身——编程工种多、人和工作多。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 制造企业：两头受冲击
生产形态相对变化不大（各种机器人还没成为主流的生产制造替代方案），但 go to market（产品售卖方式）和售后方式会变——**AI 冲击集中在市场端和售后端**，生产制造侧目前还是偏供应链多一些。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Physical AI 的机会
Anthropic 的新 blog 开始提 physical AI，OpenAI 更早就在搞。如果中国 AI 的胜出路线是"应用 + physical"结合供应链优势，未来这一波高成长企业一定出现在 physical AI 领域。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### EV 的缩影
电动车可以是互联网企业，也可以是传统制造企业；最后大家都选择做 full stack——从芯片到车全做，压缩 tier 1 的空间。传统与创新最终是一个组合。"你把自己的供应链的底打好，是支撑未来这一波产业升级、成长、高速成长非常重要的一件事。"

</div>

</div>

---

# 自我颠覆：54 年老公司重回创业心态

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 自我认知
"SAP在这个时间点……它自己是有这个自我认知说我是被颠覆的那一趴，所以我更应该奋发图强的是去自己颠覆自己"。好的东西——业务理解、行业理解——要继承下来；被抱怨多的复杂、实施周期长、交互性差，要靠自然语言交互和 agent 去改善。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 创业基因
1972 年（七二年）成立时，它也是一个五个人的 startup。现在公司里讲的是"重回创业心态再做一遍"。敢于这么 fundamentally 地改变自己的 business model，是这家公司的可取之处。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 超级个体
内部无上限使用 Claude、Cursor 随便使；有想法的员工被激发后会有很多 idea——AI 对个人生产力的释放是超级大的，"只要他思考，他只要有想法，然后Agent就会帮他去做实现"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 外企人的组合优势
外企人成长路径标准化：对流程尊重、对体系架构熟悉、有国际视野、会驾驭复杂。这些训练 + 超级个体能力 + AI 赋能，会变得更 powerful。命题是：如何激发更多这样的人。

</div>

</div>

---

# 中国实践：阿里合作与曼森的订单闭环

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 与阿里的合作结构
中国的 AI 生态独特。SAP 产品首先落在**阿里云**的基础架构上；面向 AI，把阿里的**千问**模型嵌入 SAP 对外提供 AI 服务的模型（multi-service）；同时在 FDE、后训练、共同客户上探索把双方优势结合在一起。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 曼森：小企业的痛点
曼森集团是一个服装品牌（做羽绒服，也做代工）。它上了 SAP 的 public cloud ERP（跑在阿里云上），同时用钉钉。老板头疼的事：服务的都是大厂，订单延期、追单天天接电话，订单履约是个大问题。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### AI Agent 的闭环
只上一个 ERP 解决不了这个问题。SAP 与阿里一起用 AI Agent 做闭环：把钉钉里的追单信息、排生产顺序、调动生产执行落地串起来——**把 ERP 数据和钉钉数据做成一个闭环**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 解决的核心困扰
优化订单的履约、保证运转效率。这也是"在标准流程上 serve 个性化需求"的中国市场案例。

<div class="italic mt-1">"我如何去更优化我的订单的履约，保证我的运转效率的高效。"</div>

</div>

</div>

---

# 出海：200+ 国家合规与联想的两千个流程

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 全球化的底子
SAP 自己在 150 多个国家运营，对全球超过 200 个国家的税务、合规要求是日常产品升级迭代的一部分。产品架构里有 localization 团队专门做本地化——对巴西有巴西的组（巴西的税务全球最复杂的）。中国企业出到哪儿，都可以借助现成的基础设施，只需关心自己的业务。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 收并购整合
中国企业出去做收并购趋势明显；买来的欧洲企业很多天然就是 SAP 的用户，组织和系统集成有天然优势——帮出海企业快速做系统和流程整合。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 联想：200 亿到几千亿
联想是民营企业里全球化比例最高的（海外超过 80%）。与 SAP 从 200 亿规模一直合作到几千亿规模，历次海外并购和系统整合都在 SAP 平台上做。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Signavio 找断点
现在用 Signavio（process mining 工具）用 AI 助力联想看企业已经有两千多个流程：在全球化视野里找断点在哪、哪里有提效空间。

</div>

</div>

---

# 周期的本质：只有速度变了

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 区别就是速度
这次技术周期和本地部署→云化、信息化→智能化相比，**区别就是速度**——因为它和人的交互方式改变了：以前技术相对在专业领域，现在"真的是AI平权做的非常好"，每个人都可以轻松驾驭 AI，技术演进速度非常快。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 底层逻辑没变
蒸汽机、电力、互联网到 AI：突破性的底层技术影响各行各业，都有一个过程。"AI泡沫啊、小圈子的狂欢"一定是初期的形态，随着时间外溢；但外溢的速度会比之前的几波短。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 复杂度没变
对真正的业务和 GDP 产生影响，从来不是简单的技术迭代问题。只要是人还主宰这个星球，底层逻辑就不会变——人里面有加速的部分，也有减速的部分，有抵抗力也有创新力。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 人的特质没变
每一次技术出现，大家都会有向往、有恐惧、有学习、有摒弃的 cycle。对人才的要求本质上也没变：VC 看重的那些 fundamental 特质——学习能力强的人，最终会变成金字塔尖的那些人。

</div>

</div>

---

# 人是最慢的瓶颈：判断无法规模化

<div class="mt-3 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded leading-relaxed">
"人的判断是没有办法规模化的"……"我一天不睡觉我去弄，也就是24小时我就一个脑袋"。
</div>

<div class="mt-3 text-sm leading-relaxed">

- **想法变成瓶颈**：对真正有创业冲动的人，当想法的实现不再是瓶颈时，**自己的想法就变成了瓶颈**。
- **信息过载**：很多东西信息量巨大，Agent 处理海量数据，但"人接受不了，人处理不了那么多信号"——可以跑各种 report 给你，但你能瞬间吸纳这么多有用信息、形成判断吗？其实很难。
- **教育体系的再造**：怎么在教育体系里培养出更多有能力驾驭 AI 的个体，可能带来教育体系的一些再造和颠覆——这是 AI 冲击社会方方面面的一部分。
- 回到企业与模型的 gap：很多事现在又需要人去判断，人就成了整个系统里最慢的一环。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic">"我们是希望把SAP的系统从一个记录型的系统变成一个可执行的系统。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 原欣，谈自主运营企业的目标</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="italic">"这个业务和技术结合的过程一定是AI从小圈子的狂欢外溢到更广泛的enterprise天地里必经的路线。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 FDE 与企业 AI 落地</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="italic">"你逃不出来梳理企业的流程、组织和数据，逃不掉对客户业务的理解，逃不掉我怎么把业务转化成我的代码。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 谈业务与技术结合的"脏活累活"</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<div class="italic">"AI真正你去scale在现实场景里面遇到的技术上的挑战远小于组织上的挑战，组织上的挑战会更大。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 AI 落地真正的瓶颈</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="italic">"它不是个弯道超车的逻辑。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 谈技术变革不会自动跨越历史欠账</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="italic">"出来混总是要还的。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 谈中国企业底层系统建设的基础课</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-4 text-2xl font-medium leading-relaxed text-center">
"在To B里面只把模型扔进去肯定是不够的。"
</div>

<div class="mt-4 text-sm opacity-60 text-center">
ERP 的护城河不在代码量，而在流程、数据与信任网络里沉淀的业务理解<br/>
本期节目：晚点聊 LateTalk 第 174 期 · 来源 https://podcast.latepost.com/174
</div>
