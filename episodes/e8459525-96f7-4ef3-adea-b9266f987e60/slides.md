---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Angana Jacob - Data as the True Competitive Moat (S7E26)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Angana Jacob

## Data as the True Competitive Moat

### Flirting with Models · S7E26

<div class="mt-6 text-sm opacity-60">
Bloomberg 企业数据业务 · 研究数据组负责人<br/>
2026 年 2 月 · 57 分钟
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型已商品化</strong><br/>
TensorFlow、PyTorch 让建模门槛归零，真正的竞争壁垒上移到数据层——清洗、连接、交付。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Time to Alpha 的工程化</strong><br/>
Bloomberg 的北极星指标：从 idea 到 live signal 的时间。80% 的时间被数据 wrangling 吃掉，需要逆转。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>从一次性脚本到工业化管线</strong><br/>
2008 年的量化数据管道是"用完即弃"，今天已变成必须跨年存活的生产资产。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>语义层是新的 metadata</strong><br/>
连接公司财报、宏观数据、卫星图像、供应链——整合层不再是技术问题，而是经济意义的编码。
</div>

</div>

<div class="mt-3 text-xs opacity-50">
Flirting with Models S7E26 · 主持 Corey Hoffstein · 嘉宾 Angana Jacob
</div>

---

# 职业弧线：从因子到数据基础设施

<div class="grid grid-cols-5 gap-2 mt-6 text-center text-xs">

<div class="p-2 rounded bg-red-50 border border-red-200">
<div class="font-bold text-red-700">2008</div>
<div class="mt-1 font-semibold">Deutsche Bank</div>
<div class="opacity-70">早期 QIS 研究<br/>手工打造因子<br/>回测即决策</div>
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<div class="font-bold text-yellow-700">~2012</div>
<div class="mt-1 font-semibold">S&P</div>
<div class="opacity-70">因子 ETF 爆发<br/>ESG 整合初期<br/>指数方法论</div>
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold text-green-700">~2016</div>
<div class="mt-1 font-semibold">State Street</div>
<div class="opacity-70">学术量化研究<br/>另类数据<br/>首次接触 ML</div>
</div>

<div class="p-2 rounded bg-blue-50 border border-blue-200">
<div class="font-bold text-blue-700">~2021</div>
<div class="mt-1 font-semibold">SigTech</div>
<div class="opacity-70">产品负责人<br/>系统化平台<br/>Brevan Howard 孵化</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold text-purple-700">2023-现在</div>
<div class="mt-1 font-semibold">Bloomberg</div>
<div class="opacity-70">研究数据组<br/>量化就绪数据<br/>跨资产整合</div>
</div>

</div>

<div class="mt-5 text-sm leading-relaxed">
Angana 的职业轨迹从因子研究一路走向数据基础设施。她本人概括："从纸面上看，我离 alpha 越来越远；但我认为，<strong>alpha 的下一个阶段来自把数据做对</strong>。"
</div>

<div class="mt-2 text-xs opacity-50">
作者概括: 她的核心洞察 —— 模型足够好之后，剩余 alpha 藏在数据基础里
</div>

---

---
layout: two-cols
---

# 模型商品化，数据才是护城河

<div class="text-sm leading-relaxed mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>模型民主化</strong><br/>
TensorFlow、PyTorch、标准化 optimizer——所有人用几乎相同的工具箱。学术想法发表后立刻出现在 GitHub 上。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>数据乘法效应</strong><br/>
每增加一个数据集不是线性叠加，而是与已有数据相乘。point-in-time 正确性、修订处理、特征构建——这些基础工作极难复制。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>结论</strong><br/>
两家公司可以跑同一个模型，但数据更干净、转换更好、反馈环路更紧的那一家会胜出。竞争优势已经上游移动。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-moat.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Doing Data Correctly"：2008 vs 今日

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**2008 — "回测跑通了就好"**

- 手写因子 → 跑回测 → 调参 → 上线
- 幸存者偏差普遍存在
- point-in-time 正确性不完整
- 公司行为、分析师修正——未来信息从各种缝隙泄露
- 交易成本建模粗糙（单参数冲击）
- "everything back then was overfit"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2026 — "数据层决定成败"**

- 信息何时变得可观测？
- 信号衰减多快？执行时 edge 还在吗？
- 实现本身就是信号的一部分
- point-in-time 数据强制信号自适或失败
- 特征库防 look-ahead bias
- 存活下来的信号更少，但远更鲁棒

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>关键转变：</strong>从"清洗明显错误、确保回测能跑" → 到"明确信息可观测时间、构建方式、嵌入假设"
</div>

<div class="mt-1 text-xs opacity-50">
作者概括: Angana 在 Deutsche 2008 年的经历与当前实践的对比；"everything back then was overfit" 引自 Corey 转述 Angana 的原话
</div>

---

# Point-in-Time：隐形的 Alpha 杀手

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-3">
<strong>经典错误：混用 vintages</strong><br/>
基本面用 restated 值、分析师估算没有精确时间戳、指数成分被 retroactive 地应用——回测看起来完美，实盘开始腐蚀。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">
<strong>Angana 的诊断</strong><br/>
"如果修正没有正确 timestamp，你的回测看起来非常好——直到真正上线。重述、公司行为、幸存者偏差，所有这些都必须按 'as of' 处理，而不是 retroactively。"
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs text-center">

<div class="p-2 rounded bg-blue-50 border border-blue-200">
<div class="font-bold">Survivorship Bias</div>
<div class="opacity-70 mt-1">回测只看活下来的公司，忽略退市/破产</div>
</div>

<div class="p-2 rounded bg-orange-50 border border-orange-200">
<div class="font-bold">Revision Timing</div>
<div class="opacity-70 mt-1">GDP/CPI 修正的时点错误直接制造假 alpha</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold">Look-ahead Leakage</div>
<div class="opacity-70 mt-1">索引成分调整 retroactive 地应用于历史</div>
</div>

</div>

</div>

---

---
layout: two-cols
---

# Time to Alpha：Bloomberg 的北极星

<div class="text-sm leading-relaxed mt-2">

Angana 团队的目标：**"make data immediately researchable and shorten the time to alpha."**

量化工作流从 idea 到 live signal 是一条漫长的链：数据发现 → 获取 → 摄入 → 标准化 → 验证 → 特征工程 → 信号提取 → 组合构建 → 执行。

Bloomberg 的核心价值主张：

<div class="grid grid-cols-2 gap-2 mt-3 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">
<strong>数据广度</strong><br/>跨资产、已建模、可互操作
</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">
<strong>深度历史</strong><br/>point-in-time 历史，可复现
</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">
<strong>资产感知 symbology</strong><br/>期货期权展期、乘数、生命周期
</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">
<strong>透明性</strong><br/>收益率曲线构建方法、插值、bootstrapping
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./time-to-alpha.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 案例：地理暴露——非标数据的标准化

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>问题看似简单，答案极其复杂</strong><br/>
"Where does a company actually make its money?" 不是注册地，不是上市地，是经济现实所在。但公司按会计准则报告地理信息——部分、不一致、无法直接比较。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-2 rounded bg-red-50 border border-red-200">
<strong>披露的不一致性</strong><br/>
今年 UK vs Europe，明年 UK 包含在 Europe 里。分类随意变化，时间序列断裂。
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<strong>多维度需求</strong><br/>
收入、成本、资产、capex——每个维度需要独立的地理分解视图，还要附置信度评分。
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<strong>Bloomberg 的方案</strong><br/>
标准化为统一地理 taxonomy + 多个视角视图 + point-in-time + 置信度。地理暴露成为连接宏观数据、行业模型、公司基本面、组合风险的"联合键"。
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<strong>关键洞察</strong><br/>
"这个数据集回答的问题是：这个组合到底暴露在巴西多少？——这不是直接可观测的。"
</div>

</div>

</div>

---

# 数据的全生命周期

<div class="grid grid-cols-4 gap-2 mt-4 text-xs text-center">

<div class="p-2 rounded bg-blue-50 border border-blue-300">
<div class="font-bold text-blue-700 text-sm">1. 发现</div>
<div class="mt-1 opacity-80">数据目录<br/>文档<br/>数据蓝图</div>
<div class="mt-1 text-xs opacity-50">"在写第一行代码之前，量化研究员需要理解数据集的行为"</div>
</div>

<div class="p-2 rounded bg-green-50 border border-green-300">
<div class="font-bold text-green-700 text-sm">2. 评估</div>
<div class="mt-1 opacity-80">Python API<br/>云端交付<br/>~100 个历史数据集</div>
<div class="mt-1 text-xs opacity-50">测试信号是否 additive、与已有数据干净链接</div>
</div>

<div class="p-2 rounded bg-orange-50 border border-orange-300">
<div class="font-bold text-orange-700 text-sm">3. 生产</div>
<div class="mt-1 opacity-80">数据可扩展<br/>生产就绪<br/>无需重新工程化</div>
<div class="mt-1 text-xs opacity-50">研究用数据和实盘数据完全一致，无需 reconciliation</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-300">
<div class="font-bold text-purple-700 text-sm">4. 退役</div>
<div class="mt-1 opacity-80">使用率监控<br/>准确性跟踪<br/>及时下线</div>
<div class="mt-1 text-xs opacity-50">不再刷新的数据集需明确退役，避免误用</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>Bloomberg 的独特优势：</strong>已摄取和维护了庞大的数据宇宙，Angana 的团队不需要从零开始寻找数据来源——他们从"让已有数据变得可被量化使用"出发。
</div>

---

---
layout: two-cols
---

# 数据管线的工业化

<div class="text-sm leading-relaxed mt-2">

十五年前，数据管道是**一次性的**：清洗到刚好能测一个 idea，写完研究代码就扔。

今天，策略可能运行数年而不漂移。数据必须：

<div class="space-y-2 mt-3">

<div class="p-2 rounded bg-red-50 border-l-3 border-red-400 text-xs">
<strong>跨人员存活</strong> — 原始作者离职后仍可维护和复现
</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-400 text-xs">
<strong>跨数据更新存活</strong> — restatement 和修订不会悄悄破坏假设
</div>

<div class="p-2 rounded bg-green-50 border-l-3 border-green-400 text-xs">
<strong>跨解释演化存活</strong> — 数据结构变化时仍可追踪
</div>

</div>

<div class="mt-3 text-xs">
<strong>核心转变：</strong>从 "Can we use this new data set?" 到 "Can we incorporate it into our existing data stack, replay it, and continue to trust it over time?"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pipeline-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 前中后台：数据一致性是生死线

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 mb-3">
<strong>问题根源</strong><br/>
研究环境追求速度和灵活性，中后台追求估值和控制——两套系统演进路径不同，导致同一市场在不同部门被不同版本的数据所描述。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">
<strong>OTC 市场的典型案例</strong><br/>
信号基于特定 bootstrapping 方法构建的曲线训练，而估值和风控使用不同惯例的曲线。信号在一个经济世界里做决策，P&L 在另一个经济世界里被衡量。
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs text-center">

<div class="p-2 rounded bg-blue-50 border border-blue-200">
<div class="font-bold">偏差是系统性的</div>
<div class="opacity-70 mt-1">小偏差如果恒定方向，会积累成系统性误差</div>
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold">诊断极难</div>
<div class="opacity-70 mt-1">实盘漂移时无法判断是信号问题、执行问题还是数据版本不同</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold">Bloomberg 的解法</div>
<div class="opacity-70 mt-1">研究环境、终端、B-Pipe 使用同一底层数据</div>
</div>

</div>

</div>

---

---
layout: two-cols
---

# 现代量化技术栈

<div class="text-sm leading-relaxed mt-2">

现代量化平台不再是单信号、单策略的模式。今天的领先实践：

<div class="space-y-2 mt-3 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-3 border-blue-400">
<strong>Ensemble-driven</strong> — 数百到数千个信号，各自绑定特定数据集，独立评估已知假设和故障模式
</div>

<div class="p-2 rounded bg-green-50 border-l-3 border-green-400">
<strong>Cloud-native</strong> — 数据基础设施、特征库、信号研究、组合构建之间有干净接口
</div>

<div class="p-2 rounded bg-orange-50 border-l-3 border-orange-400">
<strong>Feedback loops</strong> — 监控信号健康、衰减、regime sensitivity，不仅在回测侧，在生产侧也要持续监控
</div>

</div>

<div class="mt-3 text-xs opacity-70">
关键能力：不是向前跑，而是在市场假设变化或数据修订时能够持续重放数年历史。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./modern-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: two-cols
---

# 语义层：连接不可连接的数据

<div class="text-sm leading-relaxed mt-2">

五年前，在量化研究对话中提 taxonomy、ontology、knowledge graph——三十秒内必定冷场。

今天，这些话题处于研究平台设计的核心。

Angana 的定义：**整合层不是 metadata，是 semantic layer——经济意义被创造的地方。**

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-400 mt-3 text-xs">
<strong>例子：能源公司分析</strong><br/>
财务数据（公司实体）→ 行业 KPI（运营段）→ 实物资产（精炼厂，地理坐标）→ 供应链 → 天气（站点/网格）→ 宏观（国家层面）— 每个数据集有不同的 metadata 体系需要映射。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./semantic-layer.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 原始 vs 加工：那条线画在哪里

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>Angana 的原则</strong><br/>
"Raw is never really raw." 你使用数据的瞬间，就已经在做关于单位、时序、缺失值的假设。真正的问题是：<strong>数据是否经济上 coherent 而不 opinionated</strong>。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-2 rounded bg-green-50 border border-green-200">
<strong>Bloomberg 做的事</strong><br/>
• 将工具映射到合理的经济单位<br/>
• 对齐频率<br/>
• 处理公司行为<br/>
• 修复明显质量问题<br/>
• 透明公开方法论
</div>

<div class="p-2 rounded bg-red-50 border border-red-200">
<strong>Bloomberg 不做的事</strong><br/>
• 不平滑时间序列<br/>
• 不嵌入隐含观点<br/>
• 不替客户解读数据含义<br/>
• 归一化时暴露 scale<br/>
• 聚合时披露权重
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>对于衍生指标的高标准：</strong>必须是可解释和可逆的——客户能剥开每一层，看到原始输入如何驱动结果。
</div>

</div>

---

# 边界消融：系统化与主观投资的合流

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>Angana 观察到的最大意外</strong><br/>
"传统标签迅速失去了意义。" 深度基本面数据（完整财报、分部披露、盈利电话记录、供应链数据）的最复杂用户——是系统化团队。他们不是像主观 PM 那样"读"数据，而是跨数千只股票同时建模和回测。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-2 rounded bg-green-50 border border-green-200">
<strong>系统化团队 →</strong><br/>
• 标准化不同地区的会计差异<br/>
• point-in-time 对齐基本面与市场数据<br/>
• 将电话记录的结构化版本输入 ML 模型<br/>
• 基本面数据成为系统化 alpha 的核心
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<strong>← 主观投资者</strong><br/>
• 使用量化级别的基础设施<br/>
• 系统化的 universe 构建<br/>
• 大规模模拟<br/>
• 信号库 + 越来越多的 ML<br/>
• 流程看起来越来越像量化团队
</div>

</div>

</div>

---

# 策略与时域的交叉渗透

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3 mt-2 text-xs text-center">

<div class="p-2 rounded bg-red-50 border border-red-200">
<div class="font-bold text-red-700">高频 → 中频</div>
<div class="opacity-70 mt-1">HFT 公司进入中频领域，突然需要更长的历史、宏观背景、季度基本面、供应链数据——他们以前不需要的一切。
</div>
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<div class="font-bold text-yellow-700">低频 → 日内</div>
<div class="opacity-70 mt-1">低频因子策略不断加速，深入日内空间。数据需求从月度/季度跃迁到 tick 级别。
</div>
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold text-green-700">跨资产信号</div>
<div class="opacity-70 mt-1">股票策略使用期权隐含波动率曲面推断拥挤度；现金股票模型监控 CDS 曲线寻找压力信号。不交易那些工具，但使用它们的数据。
</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Angana 的观察：</strong>"2008 年，许多平台是单一资产设计。今天，所有严肃的平台默认都是多资产：股票、信用、利率、外汇、衍生品。这几乎以组合方式倍增了数据需求。"
</div>

<div class="mt-1 text-xs opacity-50">
作者概括: 跨资产信号使用的核心洞见 —— "the strongest signals today are not alternative at all. They are traditional market and fundamental data, but pulled from outside the asset you're trading."
</div>

</div>

---

# 下一个前沿：三个方向

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">1. 可操作化</div>
<div class="text-xs opacity-80">
问题不再是"你有这个数据集吗？"而是"我能无缝插入研究、生产、执行和风控系统吗？"数据必须 normalized、point-in-time、clean、AI-ready。
</div>
<div class="mt-2 text-xs italic opacity-60">
"the edge comes not from massive generic training data, but from clean, contextual and decision grade inputs"
</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">2. 连接数据</div>
<div class="text-xs opacity-80">
市场不是孤立移动的，数据也不应该。资产-资金依赖、波动率-流动性反馈、地缘政治-投资者头寸——基于图的数据模型正在成为捕捉事件传播和风险传导的强大工具。
</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-2">3. 压缩反馈环</div>
<div class="text-xs opacity-80">
不只是在毫秒层面，更在组织时间层面——整个团队测试、验证、部署、监控、退役一个 idea 有多快？执行数据、交易成本、日内流动性越来越反馈回信号权重和组合构建。
</div>
</div>

</div>

<div class="mt-3 text-xs opacity-50">
作者概括: Angana 认为 "all data phase pre-2020" 已结束，前沿已从"找更新颖的数据集"转向"深度整合、赋予上下文、缩短 time to alpha"
</div>

---

# 数据工程中的常见错误

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**#1 Alpha 在数据层泄漏**
<div class="text-xs mt-1 opacity-80">
团队花数月争论模型架构，却接受数据中的可疑假设。工具展期、基本面重述、渐变漂移——这些小变化悄悄破坏假设。
</div>
<div class="text-xs mt-2 italic">
"quants still underestimate how much alpha leakage happens in the data layer, long before the modeling even begins"
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**#2 局部优化**
<div class="text-xs mt-1 opacity-80">
为一个资产类别、一个供应商、一个策略构建优美管线。一旦尝试扩展，所有隐藏的不一致性——公司行为、symbology——悄悄侵蚀结果。
</div>
<div class="text-xs mt-2 italic">
"it works until they try to scale"
</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**#3 将执行视为下游**
<div class="text-xs mt-1 opacity-80">
信号研究假设理想执行、中性时机、无限流动性、静态成本。策略上线后 edge 消失。必须在研究环路内建模可观测性、衰减和容量。
</div>
<div class="text-xs mt-2 italic">
"You have to model observability, decay and capacity inside the research loop"
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>做得好的团队</strong>把数据当作一等公民：先研究数据的行为、约束、重复模式，再围绕数据设计策略。
</div>

</div>

---

# 给量化研究员的建议

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<strong>核心风险：局部理解（partial understanding）</strong><br/>
"你可以做非常好的局部工作，但如果不知道数据在哪里断裂、在不同场景下如何表现、或者被烘焙了哪些转换和假设，仍然会得到非常弱的全局结果。"
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-2 rounded bg-blue-50 border border-blue-200">
<strong>Angana 的亲身教训</strong><br/>
"我在职业生涯早期硬吃了这个亏。专注于最有趣的部分——信号、模型、聪明的想法——然后假设数据'自然能工作'，实现'自然没问题'。但当你忽视第一性原理，它最终会在最糟糕的时候出现。"
</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<strong>AI 放大风险</strong><br/>
"AI 将让在一个狭隘盒子里快速移动并获得非常有说服力的答案变得极其容易，而你甚至不理解底层的假设——或者周围发生了什么。"
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>建议：</strong>在成为自己领域专家的同时，获得对整个数据栈的第一性原理理解。这将永远是关键竞争优势。
</div>

</div>

---

# 工作之外的痴迷

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-base italic">
"I've been actually obsessed with designing my own obsessions."
</div>

<div class="text-sm leading-relaxed">
Angana 在工作中处理数据管道和系统之后，在业余时间也设计了一种系统化的放松方式：
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs text-center">

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold">1. 虚构作品</div>
<div class="opacity-70 mt-1">小说或影视剧提供情感钩子</div>
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<div class="font-bold">2. 视觉内容</div>
<div class="opacity-70 mt-1">纪录片给予质感和视觉背景</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold">3. 深度非虚构</div>
<div class="opacity-70 mt-1">已经沉浸后，厚重的纪实材料不再感到沉重</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>例子：毒品贸易主题</strong> —— Don Winslow 的 <em>The Power of the Dog</em>（小说）→ <em>Narcos</em> + 纪录片 → Johan Hari 的 <em>Chasing the Scream</em>（纪实）。每个周期持续 2-3 个月，完全沉浸。
</div>

<div class="mt-2 text-xs opacity-50">
Angana: "I find life pretty hectic... if I didn't give my brain something intentional, I'll just doom scroll and feel more drained than relaxed."
</div>

</div>

---

# 核心金句

<div class="text-xs opacity-50 mb-3">这期对谈里最值得记住的几句话：</div>

<div class="space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"Two firms can run the same model, but the one with the cleaner data, better transformations, and tighter feedback loops should outperform."
<div class="text-xs opacity-60 mt-1 not-italic">— Angana Jacob，论数据作为竞争壁垒</div>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 italic">
"I believe a meaningful amount of alpha remains uncaptured in data, in data foundations and infrastructure."
<div class="text-xs opacity-60 mt-1 not-italic">— Angana Jacob，论 alpha 的未捕获空间</div>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"The competitive edge has shifted upstream."
<div class="text-xs opacity-60 mt-1 not-italic">— Angana Jacob，概括行业趋势</div>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"Data pipelines are now considered to be long living assets."
<div class="text-xs opacity-60 mt-1 not-italic">— Angana Jacob，论数据管线的工业化</div>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-400 italic">
"Data is very hard to get right."
<div class="text-xs opacity-60 mt-1 not-italic">— Angana Jacob，简洁总结量化数据的核心挑战</div>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"You could hand someone your model code and they still cannot replicate your results if they didn't have the same sophisticated data machinery underneath."
<div class="text-xs opacity-60 mt-1 not-italic">— Angana Jacob，论基础设施作为复制壁垒</div>
</div>

</div>

---

---
layout: end
---

# Thank You

<div class="mt-8 text-lg italic text-gray-500">
"The competitive edge has shifted upstream."
</div>

<div class="mt-4 text-sm opacity-50">
Angana Jacob · Flirting with Models S7E26 · 2026 年 2 月
</div>
