---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Intel & Apple, The American Economic Rollercoaster | Brian Chesky, Josh Reeves, Jonathan Neman, Zal Bilimoria'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Intel & Apple<br>The American Economic Rollercoaster

<div class="mt-8 text-lg opacity-70">
Brian Chesky (Airbnb) · Josh Reeves (Gusto) · Jonathan Neman (Sweetgreen) · Zal Bilimoria (Refactor Capital)
</div>

<div class="mt-4 text-sm opacity-50">
TBPN · May 2026 · 2h 33m
</div>

---
layout: default
---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Intel × Apple</strong><br>
Trump 政府撮合，Intel 涨 20%，NVIDIA 投 50 亿——美国芯片制造业的翻身仗
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>AI 经济 vs 实体经济</strong><br>
AI 经济增速 31%，非 AI 仅 0.1%——但 4 月新增就业 11.5 万，远超预期的 5.5 万
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Brian Chesky 的 AI 赌注</strong><br>
Airbnb 60% 代码由 AI 生成，是同行两倍；"Chatbot 不是旅行的正确界面"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Gusto 的十亿里程碑</strong><br>
Trailing revenue $1B，现金流为正，AI 将产品周期从 2-3 年压缩到 3-6 个月
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Sweetgreen 的慢生长</strong><br>
300 店 → 目标 5000 店，"基本功赢冠军"——4 种原料的卷饼 vs 行业 22 种
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Solo GP 的硬科技投资</strong><br>
Zal Bilimoria：一个人管 $50M 基金，集中持仓 20-25 家公司，需要一个基金回报者
</div>

</div>

---
layout: default
---

# Intel 的翻身日：与 Apple 达成芯片制造协议

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键数字

- **+20%** — Intel 股价单日涨幅，因 WSJ 报道与 Apple 的初步代工协议
- **$90 亿** — 联邦拨款转为 Intel 股票，美国政府在 ~$21/股 入场
- **$125/股** — Intel 当前股价，白宫浮盈约 5 倍
- **$50 亿** — NVIDIA 2025 年 9 月对 Intel 的战略投资

</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关键角色</strong>：商务部长 Howard Lutnick 在过去一年反复与 Tim Cook、Elon Musk、Jensen Huang 会面，说服他们与 Intel 合作
</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么 Apple 需要 Intel

- TSMC 产能被 NVIDIA 等 AI 芯片需求挤占，Apple 不再有足够议价权
- Cook 在连续两次财报电话会上将产品缺货归咎于先进芯片供应不足
- Mac Mini 和 Mac Studio 可能需要 "several months to reach supply-demand balance"
- 双重采购（dual source）在地缘政治之外也有商业逻辑

</div>

</div>

</div>

---
layout: default
---

# Intel 的十年坠落与 Lip-Bu Tan 的救赎

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 坠落轨迹

- 过去十年，Intel 在制程竞赛中严重落后于 TSMC 和 Samsung
- 一系列技术失误、领导层更迭、并购失败
- 2020 年 Apple Silicon 发布，Apple 转向自研 ARM 芯片，离开 Intel
- 前任 CEO Pat Gelsinger 被罢免

</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Trump 的态度转变</strong>：最初因 Tan 与中国的关系要求罢免他，但 Tan 用 "charm offensive" 赢得了 Trump 的支持
</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Lip-Bu Tan 的翻身策略

- 2025 年 3 月上任，重塑高管团队
- 聘请前 TSMC 高管 Wei Gen Lowe（引发 TSMC 诉讼）
- 更换数据中心处理器和客户端计算部门负责人
- 新建定制芯片业务部门
- 重注 Intel 最先进制程 **14A**——"If you build it, we will come"

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>Trump 原话</strong>："As soon as we went in, Apple went in, NVIDIA went in, a lot of smart people went in."
</div>

</div>

</div>

---
layout: two-cols
---

# AI 经济 vs 实体经济：310 倍的增速差距

<div class="text-sm mt-2 leading-relaxed">

Wall Street Journal 的 Greg Ip 做了一个粗略估算：

- **AI 经济增速 31%**：科技设备投资 +43%，软件 +23%，数据中心建设超过办公楼
- **非 AI 经济增速 0.1%**：个人消费仅增 1.6%，住房和企业建筑投资下降

但就业数据却唱反调：4 月美国新增 **115,000 个就业岗位**，是华尔街预期的两倍多（预期 55,000）

这种"AI 狂飙、实体韧性"的背离，是理解当下美国经济的关键线索。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-economy-split.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# K 型经济里的 K 型：Whirlpool vs Six Flags

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Whirlpool：连百年分红都砍了

- 经营家电超 100 年，**1950 年代起从未中断分红**
- 刚刚削减分红——对这只股息股而言是重大事件
- 股价 5 年跌 **80%**
- 面临 LG、Samsung 等国际巨头的残酷竞争
- 冰箱是"必需品"但**可推迟购买**——修一修还能用

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Six Flags：过山车比冰箱卖得好

- 最新季度：**营收增长，客流增长，客单价增长**
- 过山车是"可选消费"，理论上经济不好时最该被砍
- 但有一个不可替代的因素：**孩子只有有限的几年适合玩过山车**
- 这体现了一种"反直觉韧性"——体验消费有自身的周期

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm text-center">
<strong>作者的概括</strong>：即使在"实体经济"内部，也存在赢家与输家的剧烈分化——K 型里面还有 K 型。你无法用"必需品 vs 可选品"的简单框架来预测。
</div>

---
layout: two-cols
---

# 哑铃型经济

<div class="text-sm mt-2 leading-relaxed">

John 提出了一个解释框架：**哑铃型（Barbell）经济**。

一端是 AI 基础设施和科技巨头，另一端是"反 AI"的体验经济——你无法用 Vibe Coding 来建造一座过山车。

Ellison 家族同时持有 Oracle（AI 基础设施）和 Warner Bros（传统媒体）；Josh Kushner 同时投 OpenAI 和 San Francisco Giants。两种完全相反的逻辑在同一投资组合里共存。

Financial Times 甚至画了一张"人类灭绝 vs 后稀缺社会"的 GDP 路径图——AI 助力增长路径稳步向上，而人类灭绝路径当然归零。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./barbell-economy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 哑铃的哲学：AI Slop 与反 Slop

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Ellison 家族的双向押注</strong>：一边通过 Oracle 重仓 AI 基础设施（算力、数据），一边拥有 Warner Bros（蝙蝠侠、超人）。一端是"slop"——可以被 AI 无限生成的内容；另一端是"anti-slop"——需要真实物理世界、不可替代的体验。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Josh Kushner 的平行策略</strong>：投资 OpenAI（AI 的最前沿）的同时控股 San Francisco Giants（职业体育）。两种完全相反的投资逻辑在同一个投资组合里并存。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>为什么过山车是"反 Slop"</strong>：你无法 Vibe Code 一座 Space Mountain。物理世界的体验、人与人之间的真实互动——这些是 AI 无法替代的东西。但孩子的童年时间窗口有限，这使得体验消费具有独特的定价权和抗周期属性。
</div>

</div>

---
layout: default
---

# 就业市场：焦虑中的韧性

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 4 月新增就业
<div class="text-4xl font-bold text-blue-600 my-2">115K</div>
<div class="text-xs opacity-70">实际数字</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 华尔街预期
<div class="text-4xl font-bold text-orange-600 my-2">55K</div>
<div class="text-xs opacity-70">分析师一致预期</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 2026 月均
<div class="text-4xl font-bold text-green-600 my-2">76K</div>
<div class="text-xs opacity-70">前 4 个月平均</div>

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>2025 同期月均</strong><br>
<div class="text-lg font-bold">42K</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>3 月数据</strong><br>
<div class="text-lg font-bold">185K</div>
净增长（后被下调风险仍在）
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>KPMG 首席经济学家</strong><br>
"高焦虑就业市场——有工作的人紧紧抓住，找工作的人感到被冻结在外"
</div>

</div>

---
layout: default
---

# Gusto：十亿美元 ARR 背后的 SMB 韧性

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Josh Reeves 的里程碑

- **$10 亿** trailing revenue（不是 ARR，是实际发生的收入）
- **自由现金流为正**，已持续多年
- 美国有 **600 万雇主**，其中 2/3 少于 5 名员工——Gusto 的 TAM 远未见顶
- 最大增长渠道：**口碑**——被 Gusto 发过工资的员工，创业时也会选 Gusto

</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"I would not expect us to stay private." — 但不急于近期上市，优先聚焦执行和 AI 转型
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### AI 如何改变 Gusto 的节奏

- 产品发布速度从 **"2-3 年"变成"3-6 个月"**
- 小团队可以自助服务、更快迭代、保持高质量
- 合规类工作天然更适合软件化——减少人工错误
- 非确定性 AI 需要正确的 **evals、反馈循环、审查流程**

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>Josh Reeves</strong>："This is the most amazing time to build. Velocity is increasing dramatically."
</div>

</div>

</div>

---
layout: two-cols
---

# SMB 数据的分化：创业潮 vs 招聘冷

<div class="text-sm mt-2 leading-relaxed">

Gusto 的内部数据揭示了一个微妙的分化：

- **新企业注册在上升**：AI 降低了创业门槛，更多人决定 "take the plunge" 成为企业主
- **现有企业招聘在下降**：过去几年持续低迷，部分原因是 AI 让公司用更少的人实现增长

这种分化指向 AI 时代的一个关键问题：我们得到的是一个创业潮（Happy Path），还是一个人类无事可做的世界（Wall-E Path）？

Josh Reeves 明确表示他押注前者——Gusto 正在推出更多产品来服务单人公司和准创业者。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gusto-smb-data.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Sweetgreen：用 4 种原料做一张卷饼

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 差异化从原料开始

- Sweetgreen 花了 **一年** 研发定制卷饼皮
- **4 种原料** vs 市场上大多数卷饼 **约 22 种原料**
- 不用种子油、防腐剂——这是对快餐工业标准的直接挑战
- 起价 **$10.45**（鸡肉凯撒），最贵不超过 **$15**

</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Jonathan Neman</strong>：卷饼是 Sweetgreen 历史上"最大的新品类发布"
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 从反馈到产品

- "所有答案都在餐厅里"——Neman 花 1/4 时间在门店
- 使用 **Listen Labs** 做 AI 驱动的消费者调研，反馈速度提升 **10 倍**，成本减半
- 社交聆听（TikTok、Instagram、Reddit）发现趋势，在病毒式传播之前行动
- 正式推出前一周每天请顾客试吃——最终决定"先拌匀再切开"

</div>

</div>

</div>

---
layout: default
---

# Sweetgreen：基本功赢冠军

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### "Fundamentals win championships"

Neman 明确表示，当前重心是**回归基本功**，而非眼花缭乱的创新：

- 品质一致性——不缺货、不偷工减料
- 高峰时段人员充足
- 员工微笑、友善、温暖
- **"说 Yes 的文化"**——想办法满足顾客的特殊要求
- 核心指标：**30 天回头率**（comeback rate）

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么这很重要

- 2010 年代的数字化优势（在线点单、移动支付）已被**商品化**
- 但后台技术基础设施仍是壁垒：**G&A 连续 5 年持平或下降**
- 预测性订货、AI 引导厨房操作
- 80% 的顾客通过**口碑**认识 Sweetgreen

</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Neman</strong>："别人问我怎么建品牌——说到底就是创造一个人们热爱的体验。"
</div>

</div>

</div>

---
layout: default
---

# Sweetgreen 的增长引擎：Infinite Kitchen + Drive Thru

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Infinite Kitchen（自动化厨房）

- 超过 **10%** 的门店已部署，且比例在增长
- 解决速度、一致性、人力成本三大痛点
- 2028-2029 年的 pipeline 已经在规划中
- 首家 IK + Drive Thru 门店在 Costa Mesa 开业，"表现惊人"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 门店扩张路线图

- 当前：约 **300 家**（2026 年底）
- 第一目标：**1,000 家**
- 长期目标：美国 **5,000 家**（对比 Chipotle 的 7,500 家目标）
- Drive Thru 是稀缺资源——不能新建，只能接手旧物业（如 Jack in the Box）
- 与 Chick-fil-A、Raising Cane's 竞争——后者单店 AUV 达 $800 万+

</div>

</div>

---
layout: default
---

# 深度科技 Solo GP：Zal Bilimoria 的创投数学

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### "史上最好的一周"

- **周三**：Astronis 完成 $4.5 亿 E 轮融资（$28 亿估值），Zal 领投了种子轮
- **周四**：发布第五期基金——又募了 $5000 万
- **周五**：PathAI 被 Roche 以 **$10 亿**收购
- 同周还有两家被投公司的创始人迎来新生儿

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Refactor Capital 的独特模式

- **Solo GP**：只有 Zal 一个人，没有合伙人，没有员工
- 基金规模维持在 **$5000 万**——尽管 LP 需求远超
- 每期投 **20-25 家公司**，集中持仓
- 单笔投资 **$100-200 万**
- 聚焦硬科技：生物、能源、航空航天、关键材料、机器人、物理 AI

</div>

</div>

</div>

---
layout: two-cols
---

# Solo GP 的风险投资数学

<div class="text-sm mt-2 leading-relaxed">

Zal 的风险投资数学非常清晰：

- **$50M 基金** × 3x = $150M（顶级十分位基金的标准）
- 需要至少 **一个基金回报者**（return the entire fund）
- 10% 初始持股 → 稀释后 ~5%
- 5% × $10 亿 = $50M = **1x 基金**
- 5% × $100 亿 = $500M = **10x 基金**

集中持仓策略比撒网式投资更需要判断力。Zal 宁愿在最好的公司里接受低于目标的持股比例，也不要在差公司里保持高持股。

"Outcomes may not be a billion. They might be 10. It might be 100."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./venture-power-law.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 如何寻找硬科技创始人？

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Zal 的 sourcing 方法论

- **不依赖市场地图**——"当我对一个想法而不是对创始人产生感情时，我就会犯错"
- 利用**教授、顾问、被投创始人网络**做技术尽职调查
- 这些人免费帮忙——他们可能想跟投，也可能想做顾问
- 寻找的是**紧迫感（sense of urgency）**——这对硬科技创始人格外重要

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 案例：General Galactic

- 前 SpaceX、Varda 团队成员创办
- 利用电解器制造**水基推进系统**
- 愿景：卫星用水做燃料，飞到月球南极加水再返回
- 从太空部队获得支持
- "When I invested in their pre-seed, it was just two founders with a deck and an idea."

</div>

</div>

</div>

---
layout: default
---

# Zal Bilimoria 的硅谷传奇履历

<div class="mt-4 space-y-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Google (2006)</strong> — AdWords/AdSense PM，坐在 Susan Wojcicki 的团队，和 Elad Gill、Kevin Systrom (Instagram)、Ben Silberman (Pinterest) 只有三个工位之隔。"我不知道那层楼水里有什么，但我们都做得还不错。"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>YouTube (2007-2010)</strong> — 被 Hunter Walk 拉去，正值 YouTube 疯狂烧钱、被所有人起诉的时期。Eric Schmidt、Larry Page、Sergey Brin 说："我们需要昨天就开始赚钱。" Fortune 500 不愿在 UGC 内容旁放广告——团队从零搭建品牌广告产品，做到数亿美元收入（去年 YouTube 广告收入约 $200 亿）。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>Netflix (2010)</strong> — 第一位移动产品负责人，在 iPad 发布 6 个月后重建所有手机和平板应用。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>LinkedIn (2011)</strong> — 全公司只有 8 个 PM，负责所有手机和平板应用。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>a16z (2013)</strong> — 加入时公司只有 4 年历史，投的是 Fund 3 和 Fund 4（各 $15 亿）。帮助发起 a16z 第一个行业垂直基金：$2 亿 Bio Fund（2015）。
</div>

</div>

---
layout: default
---

# Brian Chesky：Founder Mode 与 Airbnb 的重启

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Airbnb 的加速增长

- 收入增速从 **10% → 18%**，疫情以来首次加速
- 对于年 GMV 约 **$1000 亿** 的市场平台而言，扭转增速曲线极其困难
- 他把这归功于"像一个创业公司一样运作"

</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Chesky</strong>："Financial results are lagging indicators. I feel like we're a startup again."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### "Project Hawaii"——从一间房开始装修

- 组建一个小团队，专注一个非常窄的服务领域：转化率优化
- 像在 Rause Street 创业时一样工作：磨细节、看数据、高节奏
- **"不要装修整栋房子。挑一个房间，做到完美，然后一个房间一个房间来。"**
- 不是所有人都喜欢这种工作方式——有人离开了，但留下的人发现 CEO 深度参与反而减少了官僚主义

</div>

</div>

</div>

---
layout: two-cols
---

# Founder Mode：在场，而非缺席

<div class="text-sm mt-2 leading-relaxed">

Chesky 的核心理念：

**"Great leadership is presence, not absence."**

一代管理咨询教育告诉我们：CEO 应该信任团队然后放手。但 Chesky 认为信任和放手不是一回事。领导者应该与团队并肩作战——骑兵将领应该骑在马背上，而不是在海外写蓝图。

他预见到 **AI Founder Mode** 的到来：AI 让每个人都能亲近细节和数据。"在 AI 时代，不应该有纯粹的人员管理者——每个人都有机会亲自动手。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./founder-mode.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Airbnb 的 AI 转型：60% 代码由 AI 生成

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 代码生成
<div class="text-4xl font-bold text-blue-600 my-2">60%</div>
<div class="text-xs opacity-70">Airbnb 代码由 AI 生成，是竞争对手基准的 2 倍</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 客服成本
<div class="text-4xl font-bold text-green-600 my-2">-10%</div>
<div class="text-xs opacity-70">每张客服工单的成本下降</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### AI 解决问题
<div class="text-4xl font-bold text-purple-600 my-2">40%</div>
<div class="text-xs opacity-70">联系 Airbnb 的顾客中，AI 直接解决了问题</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

<div class="text-sm font-bold">Ahmed（来自 Meta Llama 团队的新 CTO）的观察：</div>
<div class="text-sm mt-1">"Airbnb 远不止是 App。每晚 4-500 万人在 100 多个国家住在 Airbnb。App 那部分大概只占 Airbnb 的 20%。" 剩下 80% 是支付、客服、纠纷仲裁、$3 万亿财产保障——以及管理 550 万房东。</div>

</div>

---
layout: default
---

# "Chatbot 不是旅行和电商的正确界面"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Chesky 列出的 Chatbot 四大问题

1. **纯文本**——照片只是附属品
2. **没有直接操作**——每次都要打字，不能拖拽、筛选、浏览
3. **难以比较**——电商和旅行本质上是比较购物， chatbot 很难展示成百上千个选项
4. **单人模式**——旅行规划天然是协作的，85% 的 Airbnb 用户会发消息

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 未来是 Agent，不是 Chatbot

- ChatGPT 去年 3 月推出第三方插件，当月就关掉了
- 类比：用 iMessage 做一切事情 vs 每个 App 有独特界面
- 未来应该是：**Agent + 丰富视觉界面**——可以对话，但主要是视觉化、可操作、可比较的
- "The current chatbot paradigm... I just don't think it's the best way."

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>关键洞察</strong>：现有 chatbot 实际上在帮旅行公司导流——chatbot 的推荐流量转化率高于 Google。要真正颠覆旅行行业，需要比 chatbot 更丰富的体验。
</div>

</div>

</div>

---
layout: two-cols
---

# 消费者 AI：被忽视的前沿

<div class="text-sm mt-2 leading-relaxed">

Chesky 指出了一个令人震惊的数据：YC 最近一批 175 家公司中，**只有 16 家做消费者**。几乎所有 AI 创业都在做企业服务和编程工具。

原因不难理解：企业客户更容易赚钱，更可预测。但 Chesky 认为当所有人扎堆企业服务时，消费者端的空白反而是最大的机会。

他甚至公开喊话：**26 岁的我和 Joe、Nate 能把现在的 Airbnb 干掉。** 这不是自谦——这是对现状的焦虑和对后来者的邀请。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./consumer-ai-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 设计师应该拥抱 AI，而不是观望

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 历史在重演

Chesky 回顾了互联网早期的教训：最优秀的设计师拒绝了"网页设计"，认为那比平面设计低一等。结果呢？工程师和产品经理填补了空白——**产品经理这个职位** 就是因为设计师缺席而诞生的。

在工业设计和建筑设计中，根本不需要"产品经理"——设计师自己就是。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 时代的行动号召

- "If I were starting Airbnb today, I'd be Vibe Coding and Claude Code."
- 设计师应该把自己视为**产品人和前端工程师**
- 图像和视频生成模型（如 Imagen 2）正在打开纯文本之外的交互可能
- 未来的互联网不一定是全文本的——它可以是高度视觉化的

</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Chesky</strong>："我真的很担心一整代设计师、艺术家和创意人会选择旁观 AI。这是我一生中创意人最大的机会。"
</div>

</div>

</div>

---
layout: default
---

# Airbnb 的核心之外：三大增长引擎

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 酒店
- 全球酒店市场规模是 STR 的 **8-9 倍**
- 约一半酒店是**独立/精品酒店**，不属于连锁品牌
- 它们被 OTA 的高佣金压迫，被迫加盟 Marriott、Hilton
- Airbnb 可以为它们提供替代渠道

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 服务
- "没有服务业的 Amazon"
- 按一个按钮可以让车来接你，按一个按钮可以让食物送到——但按一个按钮能做的事情远不止这些
- **80+ 个服务品类** 的聚合市场
- 任何一个单一品类可能不大，但加起来就很可观

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 长住（30 天+）
- 越来越多的人靠笔记本工作
- 数字游民的趋势在加速
- 人们更频繁地迁移
- 这是一个和短租完全不同的市场，客单价和需求模式都不同

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm text-center">
<strong>核心逻辑</strong>：STR 核心业务有翻倍空间（$100B → $200B），但 Airbnb 未来的大部分增长将来自核心之外的品类扩张
</div>

---
layout: two-cols
---

# Airbnb 的业务扩张版图

<div class="text-sm mt-2 leading-relaxed">

Chesky 描画了一个清晰的三圈扩张战略：

- **核心 STR**：年 GMV ~$1000 亿，从每 8-9 个住酒店的人中再争取 1 个，可以翻倍到 $2000 亿
- **酒店**：聚焦被连锁品牌挤压的独立/精品酒店，提供低价分销渠道
- **服务**：打造"服务业的 Amazon"——不是一个大品类，而是 80 个小品类的聚合
- **长住**：服务数字游民和远程工作者

最引人注目的是他对"服务"品类的愿景——这是一个还没有被平台化的巨大市场。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./airbnb-expansion.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 市场营销：旧剧本已经过时

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### CMO：硅谷最高流动率的高管？

Chesky 的观察：你不会看到很多 CFO 或 CTO 换人，但 CMO 的流动率非常高。因为**有效的营销手段每几年就变一次**——一旦某种手段被所有人使用，它就失效了。

这叫 "Banner Blindness"——看多了就视而不见。网红营销曾经很有效，直到所有人都做。现在需要新策略。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 营销的本质：与众不同

Airbnb 最成功的营销不是任何广告投放，而是 Barbie 电影上映时将 Malibu 的一栋房子改造成 **Barbie Malibu Dream House**——整个互联网都在讨论，ROI 比任何广告都好。

- Red Bull 的平流层跳伞：成本不到 $100 万，10 亿+ 观看
- 2008 年的营销技巧到今天全部过时
- 消费者分发已经成熟，但 App Store 排名靠前的仍然都是新 App

</div>

</div>

</div>

---
layout: default
---

# AI 的三种未来：从人类灭绝到后稀缺社会

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 最坏情况：人类灭绝

人均 GDP → **$0**

Financial Times 一本正经地在图表上画出了这条路径：技术奇点导致人类灭绝，GDP 归零。这听起来像科幻，但认真讨论这个可能性的群体正在扩大。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 最好情况：后稀缺

人均 GDP → **$1,000,000+**

AI 助推的增长路径持续向上——这是所有人都应该为之努力的目标。技术上，如果 AI 真的解锁了通用智能，经济产出将不再受人类劳动力限制。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold">这解释了市场的双重焦虑</div>
<div class="text-sm mt-1">如果 AI 是泡沫 → 崩盘 → 衰退。如果 AI 不是泡沫 → 自动化 → 大规模失业。无论哪种情况，经济焦虑都是合理的——尽管当前的就业数据和企业收入都在显示韧性。</div>
</div>

---
layout: default
---

# 市场集中度：AI 十巨头占美股市值 40%

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 历史的回响

- **AI Big 10**（Mag-7 + AMD、Broadcom、Micron）占美股 **40%**
- 对比：铁路股在 1835-1910 年占美国股市 **63%**
- 历史上类似时刻：日本泡沫、Nifty Fifty、科技与电信泡沫
- 有人已经开始叫它"泡沫"——但也有人指出收入增长同样惊人

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 双重焦虑

市场承受着一种独特的"双重焦虑"：

- 如果 AI 是泡沫并破裂 → 经济衰退，大规模失业
- 如果 AI 不是泡沫并成功 → 大规模自动化带来的失业

两个方向都指向经济焦虑，这种"左右都是悬崖"的心态解释了为什么市场情绪如此脆弱——尽管就业数据和收入增长都在显示韧性。

</div>

</div>

</div>

---
layout: default
---

# DeepSeek：$70 亿融资与一个人的赌注

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 中国最大 AI 融资

- DeepSeek 正在募资 **$70 亿**，估值 **$500 亿**
- 这是中国历史上最大的一笔 AI 融资
- 令人震惊的是：创始人 **个人出资 40%**（约 $30 亿）
- 他持有公司 90% 股份——在这个体量的公司中前所未见
- DeepSeek 最初孵化于他运营的中国最成功的对冲基金之一

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 算力军备竞赛

- 中国开源模型在性能增长曲线上有所落后
- 创始人显然在赌：用足够的算力，可以在几个月内重新追上前沿
- TBPN 评论："What a beast."
- 这个融资规模在全球 AI 竞赛中都是一个信号——竞争只会更激烈

</div>

</div>

---
layout: default
---

# Ryan Cohen 与反共识赌注

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 从 Chewy 到 GameStop 到 eBay

Ryan Cohen 正在尝试以 **$560 亿**敌意收购 eBay（GameStop 市值仅 $110 亿）。他在 CNBC 的采访——"half cash, half stock"——成了 meme。华尔街的反应从怀疑到嘲笑不等。

但 Cohen 的职业生涯就是用被嘲笑的想法建成的：在线卖 40 磅重的狗粮？去 Sand Hill Road 挨家挨户敲门，所有 VC 都说不可能。Chewy 最终以 $33.5 亿卖给 PetSmart——**当时最大的电商交易记录**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Chewy 的秘密武器：极致客服

- 员工给客户写**手写卡片**
- 给失去宠物的主人**送花**
- 创造出了反常的客户忠诚度
- 证明了即使面对 Amazon，通过服务差异化也可以在电商中胜出

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Cohen 对 FT 说</strong>："The more eBay fights me, the more I'm gonna not take no for an answer. I'm not going away."
</div>

</div>

---
layout: default
---

# Anthropic × SpaceX：意外联姻

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mt-4">

### 一个没人预料到的交易

周三 TBPN 休息的那天，爆出了当周最大的新闻之一：**xAI/SpaceX 与 Anthropic 达成合作协议**。

- Anthropic 将使用 Elon 的算力基础设施
- 仅在几个月前，Elon 还在公开嘲讽 Anthropic 团队
- TBPN 主持人 Jordy 承认他没有预料到——"我以为文化差异会让这件事不可能"
- 但"对算力的需求总会找到出路"（demand for compute finds a way）

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold">Zach Brock 的评论（被 TBPN 引用）</div>
<div class="text-sm mt-1">"Congrats to Anthropic for defeating Grok in the market and feasting upon the compute of their fallen enemy."</div>
</div>

---
layout: default
---

# Intel-Apple 交易的深层逻辑：地缘政治 × 商业

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 地缘政治维度

- 美国政府对台湾供应链依赖的焦虑是真实且紧迫的
- Trump 政府将 $90 亿联邦拨款转为 Intel 股票，创造了直接经济利益
- 商务部长亲自撮合——这不是自由市场的自然结果
- "减少对台湾半导体供应链的依赖"是两党共识

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 商业逻辑

- Apple 长期是 TSMC 最大客户，但 AI 需求改变了力量平衡
- NVIDIA 的 GPU 需求让 TSMC 有了更多选择，Apple 不再拥有最大议价权
- 双重采购（dual source）在任何供应链中都是基本风险管理的常识
- Apple Silicon 2020 年离开 Intel——现在可能以不同形式回归

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm text-center">
<strong>作者概括</strong>：Intel 交易是一面棱镜——透过它可以同时看到美国产业政策、AI 军备竞赛、地缘政治博弈和供应链风险管理的全部图景
</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"60% of our code is now written by AI, which is twice our benchmark of our competitors and peers."
<div class="text-xs opacity-60 mt-1 not-italic">— Brian Chesky, Airbnb CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"I do not think a chatbot is the right interface for travel or e-commerce. That might be a radical statement."
<div class="text-xs opacity-60 mt-1 not-italic">— Brian Chesky</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Great leadership is presence, not absence. I think a generation of management consulting taught us that CEOs should trust their people and get out of the way. And I don't think trust and get out of the way are the same thing."
<div class="text-xs opacity-60 mt-1 not-italic">— Brian Chesky</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"In restaurants, fundamentals win championships."
<div class="text-xs opacity-60 mt-1 not-italic">— Jonathan Neman, Sweetgreen CEO</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">继续：</div>

<div class="space-y-2">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Don't try to change the whole company. Try to change a corner of the company. It's kind of like don't renovate the whole house. Pick like one room and make it perfect and then go room to room."
<div class="text-xs opacity-60 mt-1 not-italic">— Brian Chesky</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"The non happy path to me is the Pixar movie Wall-E, which is a future I hope we avoid."
<div class="text-xs opacity-60 mt-1 not-italic">— Josh Reeves, Gusto CEO（谈 AI 的两种未来）</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"The AI economy grew 31% while the non AI economy just 0.1%."
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Ip / WSJ，TBPN 引述</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"26 year old me and Joe and Nate could f*** us up if we wanted to."
<div class="text-xs opacity-60 mt-1 not-italic">— Brian Chesky（对团队说：年轻的自己可以颠覆现在的 Airbnb）</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"If I were starting Airbnb today, I'd be Vibe Coding and Claude Code."
<div class="text-xs opacity-60 mt-1 not-italic">— Brian Chesky</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
Intel & Apple · The American Economic Rollercoaster
</div>

<div class="mt-4 text-sm opacity-50">
Brian Chesky (Airbnb) · Josh Reeves (Gusto) · Jonathan Neman (Sweetgreen) · Zal Bilimoria (Refactor Capital)
</div>

<div class="mt-6 text-base italic opacity-60">
"The more eBay fights me, the more I'm gonna not take no for an answer."
</div>

<div class="mt-2 text-xs opacity-40">
— Ryan Cohen, as quoted on TBPN
</div>
