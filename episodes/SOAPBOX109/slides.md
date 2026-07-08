---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Soap Box: Using threat hunting to drive detection'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Soap Box: 用威胁狩猎驱动检测

<div class="text-lg opacity-70 mt-4">
Risky Business · 2026 年 7 月
</div>

<div class="text-sm opacity-50 mt-8">
嘉宾：Damian Lukie · Nebulock CEO & 创始人
</div>

<div class="text-xs opacity-40 mt-2">
前 CrowdStrike / Palo Alto Networks / Arctic Wolf
</div>

---

# 为什么这期值得关注

<div class="text-sm opacity-60 mb-4">Damian Lukie 曾在 CrowdStrike、Arctic Wolf 等一线安全公司工作，亲历了 EDR 和 MDR 的演进。现在他创立的 Nebulock 正在尝试回答一个根本问题：</div>

<div class="grid grid-cols-1 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>SIEM 已经过时了。</strong>把多维度的安全数据"压平"成人类可读的表格，然后发现数据太多人类读不过来，再让 AI 代理去处理这些被压平的数据——整个逻辑链条已经断裂。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>安全本质上是数据问题。</strong>不同工具的输出使用不同的 schema，归一化是做好分析的前提。没有归一化，查询会崩溃，分析毫无用处。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>AI 代理让图数据库重获新生。</strong>十年前就有人建安全图谱，但人类无法遍历复杂图。如今 AI 代理可以在图上高效搜索，图谱因此变得前所未有的有用。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>从狩猎到检测的闭环。</strong>好的威胁狩猎应该产出可运行的检测规则，而不是变成一张 JIRA 工单。Nebulock 把这个流程从两周缩短到三分钟。
</div>

</div>

---

# 嘉宾背景：从国防工业到连续创业者

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500 text-sm leading-relaxed">
<div class="text-xs font-bold text-blue-600 mb-1">起点</div>
<div class="font-semibold">国防工业基地 (DIB)</div>
<div class="text-xs opacity-60 mt-1">大学毕业后的第一份工作，直面国家级网络攻击</div>
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500 text-sm leading-relaxed">
<div class="text-xs font-bold text-red-600 mb-1">EDR</div>
<div class="font-semibold">CrowdStrike</div>
<div class="text-xs opacity-60 mt-1">参与 Threat Graph 构建，见证图数据库在安全领域的早期应用</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500 text-sm leading-relaxed">
<div class="text-xs font-bold text-green-600 mb-1">MDR</div>
<div class="font-semibold">Arctic Wolf</div>
<div class="text-xs opacity-60 mt-1">整合各种安全产品，亲历工具碎片化和数据孤岛之痛</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500 text-sm leading-relaxed">
<div class="text-xs font-bold text-purple-600 mb-1">创业</div>
<div class="font-semibold">Nebulock</div>
<div class="text-xs opacity-60 mt-1">以 AI 威胁狩猎起步，逐步扩展为上下文安全分析平台</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
Damian 在访谈中提到，做 MDR 时最大的感受是：整合了市面上各种安全产品后发现，每个工具在其细分领域都很强，但一旦你试图用整体视角看待企业的风险管理，没有一个工具能独立解决这个问题。
</div>

---

# Nebulock 的核心理念：Hunt-First 安全运营

<div class="p-4 mt-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
Damian 用一分钟总结了 Nebulock 的定位：<strong>"我们是一个以狩猎为先的安全运营平台 (hunt-first security operations platform)"</strong>
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200 text-sm leading-relaxed">
<div class="font-bold text-yellow-700 mb-1">🔍 未知的未知</div>
从基于假设的狩猎开始——利用情报和对环境的理解推断可能存在但尚未被发现的风险点。
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-1">🔄 狩猎产出检测</div>
每次狩猎的结果——无论是否发现事件——都被转化为可运行的检测规则，可以在 Nebulock 或 SIEM 中执行。
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-sm leading-relaxed">
<div class="font-bold text-purple-700 mb-1">📈 持续分析层</div>
企业积累的不是一次性的狩猎报告，而是一个随时间不断增长的分析能力层，越来越精准地捕获异常行为。
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
Damian 的洞察：<strong>数据泄露之所以发生，不是因为缺少告警，而是因为低信号或无信号的事件被忽视了。</strong>Nebulock 的目标就是找出这些被现有系统遗漏的行为。
</div>

---

# 产品演进：从 AI 狩猎到检测平台

<div class="mt-2 text-sm opacity-70 mb-4">在 2026 年的 pitch 中，"AI" 甚至没有出现——这是一个有意的转变，背后是对 AI 能力的深刻反思。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mb-3">
<div class="font-bold text-red-700">早期（种子轮）</div>
<p class="mt-1">核心定位：AI 代理驱动的威胁狩猎平台。让 AI 基于行为假设去搜索未知威胁，发现现有系统遗漏的信号。</p>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold text-green-700">现在</div>
<p class="mt-1">核心定位：hunt-first 安全运营平台。狩猎仍然是最重要的起点，但产出被扩展为可重复使用的检测规则。AI 从"卖点"变成了"工具"。</p>
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-sm leading-relaxed">
<div class="font-bold text-blue-700 mb-2">为什么 AI 不再是核心叙事？</div>
<p>Damian 承认：理解 AI 代理擅长什么、不擅长什么，是关键教训。最初的"AI 威胁狩猎"概念很棒，但客户真正需要的是：</p>
<ul class="mt-2 space-y-1 text-xs opacity-80">
<li>"我跑了一次威胁狩猎，发现了（或没发现）什么问题，但<strong>如何把学到的东西固化下来？</strong>"</li>
</ul>
<p class="mt-2">这个问题的答案把他们引向了检测——以及最终统一整个平台的那张图。</p>
</div>

</div>

---

layout: two-cols
---

# 上下文图谱：Nebulock 的技术核心

<div class="text-sm leading-relaxed">

把狩猎和检测统一在一起的底层机制，是一张**图 (graph)**。Damian 称之为"上下文引擎 (context engine)"。

这张图将身份、主机、服务账户、进程、网络事件等节点连接在一起，AI 代理可以在图上遍历和推理。

关键设计决策：
- **按客户构建图谱**，而非一个巨型图数据库
- 图谱建模的是**行为关系**
- 代理可以理解图中的节点和边，高效搜索而非随机游走

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./context-graph.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

layout: two-cols
---

# 安全本质上是数据问题

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-3">
<span class="text-sm">"我百分之百同意你，Patrick。安全本质上就是数据问题。"</span>
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie</div>
</div>

**现状：** 每个安全工具都有自己的 schema。同一个 event ID 在 SIEM 里可能有六种不同的表示方式。

**核心发现：** "你无法在没有一致数据结构的前提下构建好的图谱。你无法在数据没有归一化的情况下做流式检测。如果你不解决数据问题，分析有什么用？"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-normalization.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "发动机都拆出来了，顺便多干点活"

<div class="text-sm opacity-70 mb-3">Patrick 用一个修车的比喻精准概括了 Nebulock 的扩展逻辑：</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Patrick 的比喻：</strong> "如果你是修车的，你把发动机从车里拆出来只为了换一个零件——既然都拆了，不如顺便把那些会在十万英里时坏掉的密封件和零件也换掉。"
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500 text-center text-sm leading-relaxed">
<div class="font-bold text-blue-700 text-lg mb-1">1</div>
<div class="font-semibold text-sm">威胁狩猎</div>
<div class="text-xs opacity-60 mt-1">最初的入口。将各类数据汇聚一处，用 AI 代理搜索未知威胁。</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500 text-center text-sm leading-relaxed">
<div class="font-bold text-green-700 text-lg mb-1">2</div>
<div class="font-semibold text-sm">检测工程</div>
<div class="text-xs opacity-60 mt-1">既然数据都在这里，顺手把狩猎发现固化为检测规则，从两周变三分钟。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500 text-center text-sm leading-relaxed">
<div class="font-bold text-purple-700 text-lg mb-1">3</div>
<div class="font-semibold text-sm">更广的用例</div>
<div class="text-xs opacity-60 mt-1">影子 AI 检测、内部威胁、治理合规——不一定是安全问题，但数据已经在那里。</div>
</div>

</div>

---

layout: two-cols
---

# 从狩猎假设到可运行检测

<div class="text-sm leading-relaxed">

Nebulock 的检测构建流程始于行为假设，终于经过生产数据测试的可运行规则。

与传统 SIEM 的关键区别：
- 每一条检测规则**必须附带针对生产数据的测试用例**
- 不是"写了就扔"，而是**持续监控检测是否有效**（检测漂移监控）
- 捕获的是**意图和行为**，而不是"确保 SIEM 关联规则写对了"

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs leading-relaxed">
Damian："在 Nebulock 中创建检测规则时，我们要求必须针对生产数据测试。仅仅把一个查询扔到后端然后说'应该没问题'是不够的——这和在真实数据上跑过的关联规则完全是两回事。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hunt-to-detection.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 实例：密码管理器入侵检测

<div class="text-sm opacity-70 mb-3">Damian 分享了一个从狩猎中产生的实际检测规则案例：</div>

<div class="grid grid-cols-3 gap-3 mt-4 mb-4">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-center text-sm leading-relaxed">
<div class="text-xs font-bold text-red-600 mb-1">🔍 端点层</div>
<div class="font-semibold">密码库文件被访问</div>
<div class="text-xs opacity-60 mt-1">在端点上检测到 vault 文件的异常访问行为</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center text-sm leading-relaxed">
<div class="text-xs font-bold text-blue-600 mb-1">🆔 身份层</div>
<div class="font-semibold">多凭据被跨账户使用</div>
<div class="text-xs opacity-60 mt-1">身份系统中检测到多个凭证被不同服务账户调用</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center text-sm leading-relaxed">
<div class="text-xs font-bold text-green-600 mb-1">☁️ 云端层</div>
<div class="font-semibold">服务账户异常行为</div>
<div class="text-xs opacity-60 mt-1">被入侵账户在云端触发异常的服务账户操作</div>
</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>关键点：</strong>这三类信号分散在不同的数据孤岛中（EDR、IAM、CSPM）。单独看任何一个都不足以触发告警，但当它们在图谱中被关联起来——多个凭证在密码库文件被访问后被跨服务账户使用——就构成了一条高质量的行为检测链。
</div>

---

# SIEM 为何已经过时

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold text-red-700 mb-1">❌ SIEM 的根本矛盾</div>
SIEM 的设计假设是：把所有数据"压平"成人类分析师能阅读的格式。但现在的问题是——数据太多了，人类根本读不过来。所以我们开始让 AI 代理来处理这些被压平的数据，而 AI 代理根本不需要"压平"——它需要的是关系和上下文。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-1">✅ 图谱+代理的新范式</div>
不再把数据压平成日志行，而是保持数据的多维关系结构。AI 代理直接在图上遍历节点和边，比在扁平化日志中搜索高效得多。检测规则不再停留在"某条日志匹配某个模式"，而是能理解行为链。
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Damian 的判断：</strong> "我们今天理解的 SIEM 根本无法承受未来的负载。先不说以机器速度移动的攻击者，光是我们必须记录的代理产生的海量数据——这些数据往哪里放？一个已经不堪重负的系统怎么处理？"
</div>

<div class="mt-3 p-3 bg-purple-50 border-2 border-purple-200 rounded text-xs leading-relaxed">
<strong>Patrick 的预测（Damian 完全同意）：</strong> Splunk 也许 15 年后还会存在，但五到十年后新建企业的检测栈将与现在完全不同。最终，检测将更像一个由 AI 代理遍历的图数据库，而不是另一个"云 Splunk"。
</div>

---

layout: two-cols
---

# 为人类"压平"的数据，不适合 AI

<div class="text-sm leading-relaxed">

Patrick 描述了一个荒诞的现实：我们把所有数据压平成人可读的格式 → 发现数据太多人类读不完 → 于是让 AI 代理去处理这些被压平的数据。

这就像先把三维模型拍成二维照片，再让计算机去重建三维信息。中间的信息损失是根本性的。

<strong>未来方向：</strong>
- 数据结构应该为 <strong>AI 代理</strong> 而非人类分析师优化
- 图是代理的"母语"——关系、节点、边
- 代理可以高效地在图上遍历，不会像人类一样被复杂的图结构吓到

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./paradigm-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 因为有 AI，图谱的价值才真正释放

<div class="text-sm opacity-70 mb-3">Damian 回顾了安全行业用图的历史，指出 AI 改变了图谱的根本意义：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200 text-sm leading-relaxed">
<div class="font-bold text-yellow-700 mb-1">📅 10-15 年前</div>
<p class="mt-1">CrowdStrike、Carbon Black、Cylance 等早期玩家就构建了安全图谱。但图只是第一步——真正的价值不是"能不能用这项技术"，而是"能往图里注入什么信息"。</p>
<p class="mt-1">人类需要自己遍历图谱，而复杂的安全图谱人类根本理解不了。</p>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-1">🤖 现在</div>
<p class="mt-1">AI 代理不关心图有多复杂。它可以在节点之间高效遍历，找到异常的关系模式。</p>
<p class="mt-1">真正的增强来自：把 CrowdStrike 数据 + Qualys 数据扔进同一张图后，整体价值远超各部分之和——这就像十倍杠杆。</p>
</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>关键洞察：</strong> 因为 AI，图谱不仅更好用了，而且本身的构建方式也不同了。过去的图谱是为人类遍历设计的；现在的图谱是为 AI 代理遍历设计的——需要考虑代理如何看待节点和边、如何提取上下文、如何高效搜索而不烧掉百万 token。这就像设计用户友好的界面，但"用户"不是人。
</div>

---

# 按客户构建图谱，而非一个巨型图谱

<div class="text-sm opacity-70 mb-3">Nebulock 团队在构建图谱时面临一个关键架构选择：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-300 text-center text-sm leading-relaxed">
<div class="font-bold text-red-700 text-lg mb-2">❌ 设想：世界最大的图数据库</div>
<div class="text-xs opacity-70">将数十亿事件全部投入一个巨大的图数据库，AI 代理在图上漫游搜索。</div>
<div class="mt-3 p-2 bg-white bg-opacity-50 rounded text-xs">
<strong>结果：</strong>AI 代理要么崩溃，要么开始胡言乱语（用 Damian 的话说："它们就变傻了"）。
</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300 text-center text-sm leading-relaxed">
<div class="font-bold text-green-700 text-lg mb-2">✅ 实际：按企业的上下文图谱</div>
<div class="text-xs opacity-70">为每个客户构建一个独立的上下文图谱，成为该企业的"行为系统记录 (behavioral system of record)"。</div>
<div class="mt-3 p-2 bg-white bg-opacity-50 rounded text-xs">
<strong>结果：</strong>代理在可控的上下文中高效工作，能够理解图的语义并做出有意义的推理。
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Damian 的反思：</strong> "很多代理问题不是因为代理本身有问题，而是我们给它的问题太大了。上下文窗口只有那么大。你不断地问它问题，它在巨大的东西上遍历——这根本管理不了。"
</div>

---

# 持续狩猎：从临时任务到分析层

<div class="text-sm opacity-70 mb-3">Damian 提出了一个与行业惯例不同的观点——威胁狩猎不应该是临时的、一次性的活动：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold text-red-700 mb-2">传统威胁狩猎</div>
<ul class="text-xs space-y-1 opacity-80">
<li>临时性工作流，由分析师手动执行</li>
<li>结果以 JIRA 工单或报告形式输出</li>
<li>两周 sprint 后可能才落地为检测</li>
<li>狩猎的结论和经验随项目结束而消失</li>
</ul>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-2">持续狩猎 (Continuous Hunting)</div>
<ul class="text-xs space-y-1 opacity-80">
<li>某些行为模式应被持续监控，无论是否已知为恶意</li>
<li>知道 "whoami 什么时候在 Windows 上运行" 本身就有价值</li>
<li>关注 SSH 端口转发、异常端口开放等行为信号</li>
<li>狩猎结果自动转化为运行中的检测规则</li>
</ul>
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-2 border-blue-200 rounded text-sm leading-relaxed">
<div class="font-bold text-blue-700 mb-1">两种检测模式：</div>
<div class="grid grid-cols-2 gap-3 mt-2 text-xs">
<div class="p-2 bg-white bg-opacity-50 rounded"><strong>基于事件：</strong>单系统上的行为检测（macOS/Linux 端点事件）</div>
<div class="p-2 bg-white bg-opacity-50 rounded"><strong>关联规则：</strong>跨系统的多事件关联（身份 + 云 + 端点 + 网络）</div>
</div>
</div>

---

# 意外收获：影子 AI 检测

<div class="text-sm opacity-70 mb-3">Nebulock 团队发现，客户对平台的需求远远超出了传统安全用例的范畴：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold text-yellow-700 mb-1">🔍 影子 AI 的巨大需求</div>
<ul class="text-xs space-y-1 opacity-80 mt-1">
<li>客户大量要求检测员工使用未授权的 AI 服务</li>
<li>表面上看起来是治理问题，但因为是数据问题，最终变成了 CISO 的责任</li>
<li>只要有强大的 EDR 和网络遥测，你就能看到大量的行为数据——剩下的只是分类</li>
</ul>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold text-blue-700 mb-1">🤖 行为分类的挑战</div>
<ul class="text-xs space-y-1 opacity-80 mt-1">
<li>定义"影子"和"合法"AI 使用的边界需要良好的启发式规则</li>
<li>需要区分"人在用 AI"和"AI 在替人执行命令"</li>
<li>AI 的哪些命令是越界？哪些看似奇怪但完全合理？</li>
<li>Damian 坦言："这有一个学习曲线，你不会第一次就做对。"</li>
</ul>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-2 border-purple-200 rounded text-sm leading-relaxed">
<div class="font-bold text-purple-700 mb-1">更广泛的意义：</div>
<div class="text-xs leading-relaxed opacity-80">Nebulock 在内部威胁检测方面也变得非常擅长。Damian 指出：一个成功的攻击者获取凭证后登录系统，和会计部的 Damian 试图把公司机密下载到桌面——从技术角度看，他们都是"内部人员"。安全边界已经模糊。
</div>
</div>

---

# 检测漂移监控：分析规则也需要持续维护

<div class="text-sm opacity-70 mb-3">Damian 强调了一个常被忽视的问题——检测规则不是一劳永逸的：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">
<div class="font-bold text-red-700 mb-2">❌ 常见做法</div>
<ul class="text-xs space-y-1 opacity-80">
<li>写了一条检测规则，部署到 SIEM 中</li>
<li>没有测试它是否真的在生产数据上有效</li>
<li>环境变了，规则渐渐失效，但没人知道</li>
<li>"管道符写错了"——你一直在搜索错误的东西</li>
</ul>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-2">✅ Nebulock 的做法</div>
<ul class="text-xs space-y-1 opacity-80">
<li>每条检测创建时必须附带针对生产数据的测试用例</li>
<li>持续监控每条检测规则的性能——它还在正常工作吗？</li>
<li>环境和行为模式演变时，规则随之调整</li>
<li>在后端跑一条查询和在真实数据上跑过的关联规则"完全是两回事"</li>
</ul>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>核心观点：</strong> 好的分析层不仅包括检测规则本身，还包括对规则质量的持续监控。就像软件需要持续集成和监控一样，安全检测规则也需要持续验证。
</div>

---

# MDR 经历如何塑造了 Nebulock

<div class="text-sm opacity-70 mb-3">Damian 认为，在 MDR 工作的经历给了他一个独特的视角，让他看到了安全工具的"系统性缺陷"：</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold text-red-700 mb-1">🔧 看到碎片化的代价</div>
<p class="text-xs opacity-80 mt-1">在 MDR 中整合各种安全产品时，你能看到每个工具在其细分领域都很出色——但没有一个工具能独立解决企业的整体安全问题。</p>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold text-blue-700 mb-1">🧠 工具≠韧性</div>
<p class="text-xs opacity-80 mt-1">人们很容易相信"买了正确的工具，我就有韧性了"。实际上没有工具是完美的——这就是为什么我们都需要遥测日志，以便事后搜索。</p>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-1">🎯 看到了可能性</div>
<p class="text-xs opacity-80 mt-1">MDR 从业者之所以被激励去创业，是因为他们看到了入侵防护的系统性问题——在规模上——而现有工具无法填补这个缺口。</p>
</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>Damian 的职业轨迹是一种"问题驱动"的创业路径：</strong> 从 DIB 直面国家级攻击 → 加入 EDR 公司学技术 → 去 MDR 看全貌 → 发现系统级缺口 → 创业填补。
</div>

---

# 人+Agent 的混合劳动力

<div class="text-sm opacity-70 mb-3">Patrick 提出了这个访谈中最具前瞻性的一个观察：</div>

<div class="p-4 mt-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed italic">
"我们现在有一种新的混合劳动力 (hybrid workforce)——不是指有时在办公室有时在家，而是说我们有<strong>人类</strong>和<strong>AI 代理</strong>共同工作。所以我们现在必须想办法让代理理解事物，以便我们能更有效地使用它们，反之亦然。"
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick Gray</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center text-sm leading-relaxed">
<div class="text-xs font-bold text-blue-600 mb-1">👤 人类分析师</div>
定义假设、做判断、理解业务上下文
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center text-sm leading-relaxed">
<div class="text-xs font-bold text-green-600 mb-1">🤖 AI 代理</div>
遍历图谱、搜索模式、生成检测规则、持续监控
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center text-sm leading-relaxed">
<div class="text-xs font-bold text-purple-600 mb-1">🔗 上下文图谱</div>
人机共同的操作界面——双方都可以从中获取信息和洞察
</div>

</div>

---

# 从补充到替代：检测栈的渐变之路

<div class="text-sm opacity-70 mb-3">Damian 对 Nebulock 何时"替代"而非"补充"现有检测栈保持务实态度：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold text-blue-700 mb-2">阶段一：补充 (Now)</div>
<ul class="text-xs space-y-1 opacity-80">
<li>与 SIEM、EDR 等现有投资共存</li>
<li>专注于它们难以覆盖的领域：内部威胁、影子 AI、低信号事件</li>
<li>作为一个"有机的分析层"坐在 SIEM 旁边</li>
<li>对于那些想要直接分析平台的人来说，Nebulock 是完美的选择</li>
</ul>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-2">阶段二：替代 (Future)</div>
<ul class="text-xs space-y-1 opacity-80">
<li>吸引用户逐步将更多检测迁移到 Nebulock</li>
<li>内侧威胁/UEBA 类分析平台已经在被"有机替代"</li>
<li>最终希望"拥有检测栈"，但这需要时间积累客户信任</li>
<li>Damian："一个刚拿到 A 轮融资的公司说'你不需要之前所有东西'是不诚实的"</li>
</ul>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>效率故事：</strong> 一个四人的安全团队借助 Nebulock 做到了以前无法想象的事情——Damian 称其为"狩猎和检测的钢铁侠战衣"。
</div>

---

# 集中智能，数据留在原地

<div class="text-sm opacity-70 mb-3">Patrick 和 Damian 讨论了一个关于数据架构的深刻洞察：在 AI 时代，"数据引力"不再是限制：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">
<div class="font-bold text-red-700 mb-2">📦 旧范式：数据引力</div>
<ul class="text-xs space-y-1 opacity-80">
<li>把所有数据都拉到一个地方存储</li>
<li>Salesforce 日志要回传并保存两年</li>
<li>SIEM 费用随着数据量增长而失控</li>
<li>数据越多，查询越慢，成本越高</li>
</ul>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">
<div class="font-bold text-green-700 mb-2">🌐 新范式：集中智能</div>
<ul class="text-xs space-y-1 opacity-80">
<li>上下文图谱作为"集中的操作核心"</li>
<li>数据留在它原本应该在的地方</li>
<li>代理可以去需要的地方获取上下文</li>
<li>代理发现经常需要某处的数据时，可以建议将其纳入图谱</li>
</ul>
</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Damian 的总结：</strong> "这种集中智能 + 数据在它应该在的地方的组合，正在构建一种真正灵活的架构，使人+代理的混合未来成为可能。真正的挑战在于如何构建正确的图谱、如何做好数据归一化。"
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed italic">
"我们是 hunt-first 安全运营平台。每次狩猎都应产出结果，这些结果转化为检测规则。"
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie，Nebulock 的一分钟 pitch</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed italic">
"数据泄露之所以发生，不是因为缺少告警信号，而是因为低信号或无信号的事件被忽视了。我们来找到它们。"
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie，谈 Nebulock 的核心价值</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed italic">
"如果你不解决数据问题，分析有什么用？你的查询会崩溃，一切都不会工作。"
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie，谈数据归一化的必要性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed italic">
"我们今天理解的 SIEM 根本无法承受未来的负载。"
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie，谈 SIEM 的终局</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed italic">
"很多代理问题不是代理本身有 bug，而是我们给了它一个太大的问题——上下文窗口只有这么大。"
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie，谈 AI 代理架构的经验教训</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed italic">
"很容易相信'买了正确的工具，我就有韧性了'——但实际上没有工具是完美的，这就是为什么我们都需要遥测日志。"
<div class="text-xs opacity-60 mt-1 not-italic">— Damian Lukie，谈安全工具的局限性</div>
</div>

</div>

---

layout: end
---

# 谢谢

<div class="mt-8 text-lg opacity-70">
从狩猎到检测，从 SIEM 到图谱——安全运营正在经历一场范式转变
</div>

<div class="mt-4 text-sm opacity-50">
Nebulock · hunt-first security operations
</div>
