---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '132. 对星海图创始人高继扬的3小时访谈：鲶鱼、曾国藩、Waymo与Momenta的两面、一只狼与许华哲的离开'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 132. 对星海图创始人高继扬的3小时访谈

## 鲶鱼、曾国藩、Waymo与Momenta的两面、一只狼与许华哲的离开

<div class="mt-8 text-sm opacity-60">
小军对话星海图创始人 高继扬 · 2026年2月
</div>

<div class="mt-4 text-xs opacity-40">
3 小时深度访谈 · 从物理竞赛到估值百亿的具身智能公司
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>鲶鱼与狼</strong><br>
一个自我定位为"鲶鱼"和"狼"的创始人，如何在 Momenta 的极致卷文化中野蛮生长，又放弃千万美元期权创业
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>整套价值链条的拆解</strong><br>
用工程师的"拆解+测量"方法论，把具身智能的价值链拆穿：整机→供应链→数据→模型→渠道→客户
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>真实数据 vs 仿真数据</strong><br>
一小时真机数据成本仅 200-250 元；数据质量差，训练成本会 5-10 倍放大——这笔账必须算清楚
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Waymo 与 Momenta 的两面</strong><br>
Waymo 的 engineer heaven 没有 founder；Momenta 的以客户为中心是血的教训——两种极端文化的完整通关
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>许华哲的离开</strong><br>
务实创新 vs 超前探索——当公司需要舍弃，价值观如何做选择？答案在去年 8 月就已落定
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>为什么机器人行业没有技术浪漫主义</strong><br>
"这件事链条非常长，你要把脑袋伸到土里去"——一个不允许浪漫存在的行业
</div>

</div>

---

# 从"儒家清流"到务实主义者

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg mb-4">
"曾国藩从二十多岁是一个儒家清流，到四十岁变成一个特别有事功的人——他发现最重要的，是当你要做一件事的时候，到底能拉动多少资源、有多少人愿意跟你一起把这事做成。"
</div>

<div class="text-sm opacity-60 mb-2">— 高继扬的"曾国藩时刻"：从申请博士受挫到决定创业</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>儒家清流 → "好学校"路径断了</strong><br>
斯坦福暑期实习后，老师没写强推，顶尖博士项目全拒——相当于儒家清流做不了
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>务实转向 → "那我就要去真正做事"</strong><br>
读历史、看曾国藩，顿悟出路不在学术，而在"引领多少人完成一件事"。随即进商汤、入 AI
</div>

</div>

---

# 归纳总结：高继扬的方法论原点

<div class="mt-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed mb-3">
<strong>物理竞赛</strong>：把题型映射到考点，归纳题型解法。别人刷一遍题他刷两遍，别人刷两遍他刷四遍——"我见过真正有天赋的人，跟他们比，我主要靠勤奋"
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed mb-3">
<strong>博士三年半毕业</strong>：先定目标（四年毕业 → 4-5 篇顶会），倒推时间表。把发顶会论文归纳为三类：挖坑型（建 benchmark）、提性能型、降成本型
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>工程师思维：拆解 + 测量</strong>：复杂问题拆成子问题 → 子问题再拆 → 拆到一行行代码。测量从单元测试开始，一层层回到顶层指标。这套方法论贯穿了他做自动驾驶、做整机、做公司的全部
</div>

</div>

---

# Waymo 的黄金年代：一个工程师天堂

<div class="mt-3 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<strong>学到了什么？</strong>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>整套自动驾驶系统</strong><br>
端侧 + 云侧，从感知到规控，从历史 codebase 到最新 design doc，全部通读
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>工程师思维的定型</strong><br>
什么叫工程师？拆解加测量。拆到最后是一行行代码，测量的最后是一个单元测试
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>VectorNet</strong><br>
用图神经网络代替卷积处理地图——将地图渲染为向量而非图片，self-attention 算子，后来被多家公司采用
</div>

</div>

<div>

<strong>看到了什么问题？</strong>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
<strong>大公司病</strong><br>
入职时 1000 人，离职时快 2000 人——还没做出真正的价值，组织已成大公司
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>没有 Founder</strong><br>
本质不是大公司病，是没有一个能自上而下推动变革的人。马斯克说干啥哪怕是错的也能开始干；Waymo 缺的就是这个
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<strong>离产品太远</strong><br>
只是一个工程师，离公司的经营、产品的定义太远。这驱动了他下一步的选择——做量产
</div>

</div>

</div>

---

---
layout: two-cols
---

# 自动驾驶两条路线

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3">
<strong>🦾 Robotics-Driven</strong><br>
系统拆分，关注 corner case，感知层几十个独立模型，2008-2018 顶层架构没变过
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>🧠 AI-Native</strong><br>
端到端数据驱动，先统一感知再统一规划，BEV→端到端→VLA，今天已成主流
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-xs">
<strong>本质区别</strong>：对待 AI 的态度，不是科学 vs 工程——Waymo 的工程基因来自 Google，一样强
</div>

<div class="mt-2 text-xs opacity-70">
"Waymo 因为过去很长时间是 robotics 的人主导。Tesla 是 AI native 地去设计整个自动驾驶框架。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robotics-vs-ai.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两种文化的通关：Waymo vs Momenta

<div class="mt-3 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🌴 Waymo：工程师天堂

- 最好的 infra、最好的同事、温暖宽厚的领导
- 四五点下班接孩子（不 push）
- 大概率不用面对客户
- 目标是有，但不 push
- **学到的**：自动驾驶全栈 + 工程师思维定型

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🔥 Momenta：战功文化

- 核心算法团队：早?晚 12 点，一周 6 天打底
- 结果导向，结果好就往上走，不好就调整
- 直面车企客户，"说骂就骂，说不开心就要说两句"
- 极致的卷，"不是旭东的问题，行业就是这样"
- **学到的**：以客户为中心 + 解决问题能力的淬炼

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>高继扬的判断</strong>：Waymo 的工程师自我感受好，但离真实世界太远；Momenta 让工程师看到"这个真实的世界就是这个样子的"——哪怕真相很残酷，也要面对它。
</div>

---

# 一条鲶鱼的多面突击

<div class="mt-3 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-3">
<strong>从感知到规控到 NOA 量产</strong>：在 Momenta 两年，从感知做起，接着是为规控和定位引入深度学习（取代 rule-based），再做 infra，最后完成高速高架 NOA 系统量产交付上汽——这是在极短时间内横跨多个完全不熟悉的领域
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mb-3">
<strong>面对未知的压倒性兴奋</strong>："任何人面对未知都会有忐忑、胆怯、恐惧，我也有。但压倒性的是——这是我想做的事，我得去干。"
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>炼出的核心能力</strong><br>
快速进入陌生领域，用固定方法论拆解问题，人事匹配，监控反馈，扩大或调整
</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>终极目标从未变过</strong><br>
"如果连这事儿都做不好，我创业不可能做得好。"——Momenta 是创业前的最后一站训练营
</div>
</div>

</div>

---

# 以客户为中心：Momenta 的底层改变

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg mb-3">
"我底层的一个变化是，我学会了什么叫以客户为中心。"
</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<strong>什么是以客户为中心？</strong>

- 不是客户说什么就做什么
- 而是站在客户角度挖掘他真正的需求
- 提出更好的方案，帮他解决问题
- 不仅是公司对外，也是内部所有上游对下游的工作方式

</div>

<div>

<strong>与之相对的错误中心</strong>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
以自我成长为中心
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
以技术领先性为中心
</div>

<div class="mt-2 text-xs opacity-70">
"至少在做一家企业来讲，这些都是错误的。"
</div>

</div>

</div>

</div>

---

# 放弃一千万美金：30岁的创业决定

<div class="mt-4">

<div class="grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600 my-2">2022</div>
<div class="text-xs opacity-70">年底 30 岁，看到三个信号</div>
<div class="text-xs mt-1">GPT-3 + InstructGPT 让世界再次相信 AI</div>
<div class="text-xs">量产自动驾驶让端侧智能变得可能</div>
<div class="text-xs">Tesla 正式宣布做人形机器人</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600 my-2">$10M</div>
<div class="text-xs opacity-70">放弃的 Momenta 期权估值</div>
<div class="text-xs mt-1">"我跟那件我想做的事比起来，其他东西价值不大"</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600 my-2">2023.5</div>
<div class="text-xs opacity-70">NOA 量产交付后立即提离职</div>
<div class="text-xs mt-1">把 NOA 做完、交付完、试驾完所有带 NOA 的国产车</div>
<div class="text-xs">确认做得还行——可以走了</div>
</div>

</div>

<div class="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者概括</strong>：高继扬不是那种"灵光一闪就从大厂辞职"的 founder。他在 Waymo 学了 2 年自动驾驶全栈，在 Momenta 练了 2 年量产交付和客户关系，等到 NOA 产品真正交付，才认为"自己该练的都练得差不多了"——这是他归纳总结法的终极应用。
</div>

</div>

---

# 创业第一年：从"啥也不懂"到整机

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**从配送机器人到操作智能的快速调整**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
最早想做末端配送（自动驾驶 + 操作）。很快发现：客户不成熟、市场不在、智能也不 ready——"这玩意不 work"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
调整方向：轮式双臂、聚焦操作 → 切入开发者市场。24 年 3 月定下 R1 产品系列。"我当时没有今天说得这么清楚，但有点运气成分，做对了"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
天使投资人：IDG + 百度风投 + 金沙江。IDG 领投，"他们接受你的错误和不完美——这就是天使"
</div>

</div>

<div>

**做整机：从淘宝以图搜图开始**

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
拆竞品产品，"哦这个是电机，这个是关节模组"——第一次见到这些东西
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
供应商找不到，"没办法，淘宝拍张照片以图搜图，哦，找到了"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
后来的结构负责人看他们太可怜，送了一个工具箱——改锥、锤子、镊子
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
直到遇到杨泽一（97 年）：第一个能把整机系统框架讲清楚的人。高继扬飞去深圳谈了两次，确定合伙
</div>

</div>

</div>

</div>

---

# 为什么必须做整机？

<div class="mt-3">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<strong>两个倒推逻辑：</strong>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>长期壁垒</strong>：具身智能的终极壁垒建立在物理世界的数据闭环之上。硬件是数据载体——没有整机，数据闭环是空中楼阁
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>中短期商品</strong>：最终商品不是算法、不是大脑，是"整机 + 智能"形成的物理实体。如果你的算法不能嵌入你的整机产生价值，它没有意义
</div>

</div>

<div>

<strong>幸运与不幸的统一：</strong>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>不幸</strong>：做具身智能没有现成的载体——你得自己做，克服不适，从零学起
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>幸运</strong>：当这一步真正做完，机会特别多——千行万业都可以搞。不像自动驾驶供应商被夹在整车厂和用户之间
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
"做自动驾驶的公司，客户和商业化路径极其明确（全球 20 家车企），但数据闭环和体验把控都不通畅。具身智能是反过来的——苦在前，爽在后。"
</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# 真实数据 vs 仿真数据：一笔必须算的账

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>真实数据成本</strong><br>
一小时 ≈ <strong>200-250 元</strong><br>
(人工 3-4h + 机器人折旧 100 元/h)<br>
十万小时 ≈ 2500 万
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
<strong>训练成本放大效应</strong><br>
数据成本 : 训练成本 ≈ <strong>1 : 5 到 1 : 10</strong><br>
数据质量低 → 大量资金浪费在训练环节
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<strong>综合算账</strong><br>
不是"贵不贵"的问题——真实数据质量高 → 降低训练总成本 → 综合成本更优。Sim-to-real gap 仍然很大
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-cost.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据金字塔与 Data Recipe

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

<strong>所有可能的数据类型：</strong>

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Robot-centric data</strong>（真机遥操作）<br>
<span class="text-xs">质量最高，domain gap 最小</span>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Human-centric data</strong>（乌米、采集手套、3DE）<br>
<span class="text-xs">北美流行的无本体采集方式</span>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>POV data</strong>（第一视角视频）<br>
<span class="text-xs">戴眼镜/头戴摄像头采集，不戴手部设备</span>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>第三视角 + 互联网视频</strong>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>仿真数据</strong>（图形学渲染 vs 世界模型生成）
</div>

</div>

</div>

<div>

<strong>但没人知道最优比例是什么：</strong>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 mt-2 text-base">
<strong>Data Recipe 是最大的秘密</strong>
</div>

<div class="text-sm mt-2">大模型公司今天最大的秘密也在于此。具身智能公司也一样——所有数据类型都要有获取渠道，但真实数据为主是确定的。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3 text-sm">
<strong>高继扬的当前配方</strong>：真实数据为主，真机遥操作 + 乌米 + POV 混合。"真机数据一万小时还是五万小时？这得试出来——AI 归根结底是实验科学。"
</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# 开发者市场：跨越鸿沟

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>借鉴《跨越鸿沟》</strong><br>
科技产品从 Innovator → Early Adopter → Early Majority 是必经之路。苹果 Macintosh、拓竹 3D 打印机皆是如此。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>星海图的路径</strong><br>
学术型开发者 → 企业研发型开发者 → 生产力型开发者 → 集成商 → 终端用户
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<strong>当前阶段</strong><br>
150+ 全球开发者客户。2026 年从开发者市场走向生产力市场——万台出货目标是关键一步。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dev-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: two-cols
---

# 双系统架构：LLM + VLA

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>🧠 LLM（语言大脑 · 云端）</strong><br>
模糊指令 → 拆解为任务序列<br>
家庭等通用场景必需
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>🤖 VLA（动作模型 · 端侧）</strong><br>
Vision + Language → Action<br>
必须运行在端侧（延时要求）
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2 text-xs">
<strong>为什么不能一个端到端？</strong><br>
"端侧算力有限，不可能把上百B模型下载到端侧——VLA 必须跑在端侧。工商业二三十个动作直接调 VLA 就够了，不需要 LLM。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dual-system.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 基础模型的三个维度

<div class="mt-4">

<div class="grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-5xl font-bold text-blue-600 my-2">🏃</div>
<div class="text-lg font-bold">速度</div>
<div class="text-sm mt-2 opacity-80">模仿学习大概率超不过人，可能达到人类速度的 80%-90%</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

<div class="text-5xl font-bold text-green-600 my-2">🎯</div>
<div class="text-lg font-bold">精度</div>
<div class="text-sm mt-2 opacity-80">厘米级优先，毫米级是下一步。需要柔性操作时精度要求急剧上升</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-5xl font-bold text-purple-600 my-2">🔄</div>
<div class="text-lg font-bold">泛化性</div>
<div class="text-sm mt-2 opacity-80">需要多少条新增数据才能解决一个新问题——"万能抓取"已做到零样本泛化</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>需求侧的约束来自供给侧</strong>：速度要求不能太高（技术做不到）、失效成本不能太高（AI 会犯错）、市场必须全球化（欧美付费能力好）、场景在不同国家要统一（酒店、零售各国不一样就不适合先做）。
</div>

</div>

---

# 五个核心动作覆盖千行万业

<div class="mt-4">

<div class="grid grid-cols-5 gap-3 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">📦</div>
<div class="font-bold mt-1">Carry</div>
<div class="text-xs opacity-70 mt-1">搬运</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">🤏</div>
<div class="font-bold mt-1">Pick</div>
<div class="text-xs opacity-70 mt-1">拿取</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600">📐</div>
<div class="font-bold mt-1">Pack</div>
<div class="text-xs opacity-70 mt-1">包装</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600">👕</div>
<div class="font-bold mt-1">Fold</div>
<div class="text-xs opacity-70 mt-1">折叠</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">🔧</div>
<div class="font-bold mt-1">Operate</div>
<div class="text-xs opacity-70 mt-1">操作设备</div>
</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>一个关键洞察</strong>：几乎所有体力劳动者的工作，都是这五个动作的各种组合。一个岗位涉及的动作组合一般不超过 20-40 种——不会有一个岗位一天需要做几百种不同的动作。这意味着具身智能的泛化问题是有边界的。
</div>

</div>

---

---
layout: two-cols
---

# 具身智能完整价值链条

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
<strong>底层基础设施（壁垒最长）</strong><br>
整机 + 供应链：12-18 个月。新硬件从设计到量产绕不开的周期
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<strong>数据体系</strong>：在整机基础上 +6-12 个月。必须基于自己的整机构建数据闭环
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>上层（壁垒最短）</strong><br>
算法/模型：2-3 个月。开源 + 论文，传播最快。投入最大但壁垒最小
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>结论</strong>："算法创新前面必须加一个词——务实。理想主义不能变成空想。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./value-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: two-cols
---

# 传播周期等于竞争壁垒

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
<strong>整机 & 供应链</strong>：12-18 个月
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>数据体系</strong>：6-12 个月（在整机基础上）
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>渠道 & 客户</strong>：6 个月起步
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>算法</strong>：2-3 个月（开源 + 论文，<strong>投入最大，壁垒最小</strong>）
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>战略重心</strong>：24 年 → 整机供应链 / 25 年 → 数据体系 / 26 年 → 场景变现
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./propagation-cycles.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 24个月：整机与供应链的补课

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>2024 年全年的主题就是整机和供应链。</strong>对于一个从 AI 和自动驾驶出身的团队，这是一门必须补的课。"做整机和做 AI 的共同点：本质上都是工程化问题，都可以用拆解+测量的方法论。"
</div>

<div class="grid grid-cols-2 gap-4">

<div>

<strong>AI vs 整机的不同：</strong>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>AI</strong>：强调人才密度，需要顶尖开发者，10x engineer 极其重要
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>整机</strong>：强调研发流程严密性。从构型设计 → 结构设计 → EVT → DVT → 生产，每一步错了后面全错。线束磨损、来料质量、结构强度——需要严密流程排除
</div>

</div>

<div>

<strong>智能定义本体：</strong>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
从操作智能的需求出发定义本体——轮式 + 躯干，聚焦上肢操作
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
双足的运动控制和双臂的操作同时解决（locomotion + manipulation），今天也没解决——所以先解上肢
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
"很多真实场景不需要双腿走路——轮式就够了"
</div>

</div>

</div>

</div>

---

# 25个月：数据与智能体系的搭建

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-1">500h</div>
<div class="text-xs opacity-70">高质量遥操作数据开源</div>
<div class="text-xs opacity-70 mt-1">全国第一个公司层面的技术模型与数据集开源（2024年8月）</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 my-1">G0</div>
<div class="text-xs opacity-70">基础模型开源</div>
<div class="text-xs opacity-70 mt-1">从 diffusion policy 转向 VLA；π0 出来后迅速跟进</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600 my-1">G0+</div>
<div class="text-xs opacity-70">开箱即用的体验</div>
<div class="text-xs opacity-70 mt-1">2025年1月发布——整机+模型整合，国内首创</div>
</div>

</div>

<div class="mt-3 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>真实场景数据采集</strong>：全国第一个做真实场景数据采集的公司。不是在素材场里采，而是进到真实环境里——因为真实场景是 non-scalable 的，必须一个场景一个场景去构建
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>赵行统一管理后</strong>：去年 8 月内部调整，赵行统一管理基础核心团队。之后进展加速——到今年 1 月全球首个"开箱即用"的 Robotics Plus
</div>

</div>

</div>

---

# 面向26年：场景与应用

<div class="mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>从开发者市场走向生产力市场。</strong>整机 ready 了，数据和智能体系上正轨了——接下来是场景和应用。"具身智能落地一定是供给侧和需求侧碰出来的东西。"
</div>

<div class="grid grid-cols-2 gap-4">

<div>

<strong>当前最看好的场景：</strong>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>仓储物流 Bin Picking</strong><br>
上万个 SKU，斜口盒存储，订单拣选。传统方案无法解决——这正是"pick everything"要破的局
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>智能制造厂内物流</strong><br>
单手拿、双手搬——SPS 集中分装场景。车厂上总装线前，人从一个区域拿零部件放到 AGV 上
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>组装放一放</strong>：涉及毫米级柔性操作，手拿度要求太高，技术还没到
</div>

</div>

<div>

<strong>好场景的判断标准：</strong>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
有爆发力——做完一个，可能很快到一万台
</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
全球化市场——欧美付费能力好；场景在不同国家统一
</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
失效成本可控——AI 会犯错，不要一错就无法挽回
</div>

</div>

</div>

</div>

---

# 许华哲的离开：务实创新 vs 超前研究

<div class="mt-3">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<strong>发生了什么？</strong>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>许华哲</strong>：非常有影响力的科学家，前沿算法问题理解到位。星海图联合创始人之一。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<strong>分歧本质</strong>：不是算法 vs 硬件，而是公司要在"务实创新、客户价值、一步步来"与"更多超前创新"之间做平衡
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>结果</strong>：去年 8 月内部完成调整。赵行统一管理基础核心团队。华哲探索 to C 家庭应用方向。星海图投资华哲的第一轮融资。
</div>

</div>

<div>

<strong>高继扬的视角：</strong>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-base mt-2">
"价值观的底层是取舍——面对取舍的时候怎么选，利益分配的时候分给谁。"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>长期来看绝对利好</strong>：公司必须在价值观和长期战略上坚持，不为短期利益动摇。务实创新——先务实，再创新。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2 text-xs">
<strong>纠正一个误解</strong>：高继扬强调，公司算法创新能力非常强，赵行在这方面的能力有目共睹。华哲离开不意味着算法创新不重要——只是算法创新不能独立于整机、数据、供应链等基础设施存在。
</div>

</div>

</div>

</div>

---

# 绍卿之于曹旭东，许华哲之于高继扬

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

### Momenta 的先例

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>绍卿离开 Momenta</strong> 是高继扬理解中的"旭东改变公司文化的动作"——从一个 research lab 转向一个真正做产品的公司。组织在那个交付之前就已经发生了变化，否则连定点项目都拿不到。
</div>

</div>

<div>

### 星海图的选择

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
高继扬拒绝将二者直接类比。他强调星海图有"合伙人机制"——公司在不同发展阶段需要不同类型的人持续创造价值。<strong>战功文化、实事求是的战功文化</strong>——鼓励有结果的同学用更多资源做更大的事。
</div>

</div>

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>本质是一样的底层问题</strong>：当一家公司从一个技术探索型的组织，演进为一个以客户价值交付为驱动的组织时，必然经历价值观排序的重置。这在自动驾驶赛道发生过（Momenta 2018+），现在在具身智能赛道正在发生（星海图 2025）。
</div>

</div>

---

# 估值30倍：两年从3亿到100亿

<div class="mt-4">

<div class="grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-70">2024 年 1 月</div>
<div class="text-5xl font-bold text-blue-600 my-2">3亿</div>
<div class="text-xs opacity-70">人民币估值</div>
<div class="text-xs opacity-70 mt-1">天使轮 + C Fund 加轮</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-70">2026 年</div>
<div class="text-5xl font-bold text-green-600 my-2">100亿</div>
<div class="text-xs opacity-70">人民币估值</div>
<div class="text-xs opacity-70 mt-1">最近一轮已 close</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-70">增长</div>
<div class="text-5xl font-bold text-red-600 my-2">30×</div>
<div class="text-xs opacity-70">两年估值增长</div>
<div class="text-xs opacity-70 mt-1">最新轮次：吉利、北汽 + PE + 6 家老股东 pro rata</div>
</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>高继扬的态度</strong>："组织会有问题的原因不是因为估值上涨，而是因为组织本身变复杂了。除非创始人因为估值膨胀自我膨胀了——我觉得我们没有。我们今天比两年前更清醒，更务实。"
</div>

</div>

---

# 六边形战士：具身创业公司的全栈要求

<div class="mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>具身智能 vs 大模型的竞争差异：</strong>"大模型竞争更多发生在模型本身——数据 90% ready，渠道和终端现成。但具身智能的供应链几乎没有，数据是荒漠，渠道全部线下——整个价值链条里，算法只是很小一部分。"
</div>

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="font-bold">整机</div>
<div class="text-xs opacity-70">从零自研</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold">供应链</div>
<div class="text-xs opacity-70">垂直整合</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold">数据</div>
<div class="text-xs opacity-70">数据荒漠</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold">模型</div>
<div class="text-xs opacity-70">待验证</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold">渠道</div>
<div class="text-xs opacity-70">全部线下</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold">资金</div>
<div class="text-xs opacity-70">持续性获取</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>高继扬的解法</strong>：做"中等面积六边形"的创始人，然后通过合伙人来组成"更大面积的六边形"——杨泽一（机电/产品）、赵行（基础模型）、于磊（商业化）、天齐（融资/CFO），每一块都给股份。公司从三个人起步，持续引入新的合伙人。
</div>

</div>

---

# 向三位同行学习

<div class="mt-4">

<div class="grid grid-cols-3 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🐕 宇树（Unitree）

**学什么**：做整机和供应链

- 深入供应链，垂直整合
- 自己设计齿轮、壳体
- 自己做电磁仿真、做电机
- "在整机这件事上，宇树是我们的标杆"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🧠 Physical Intelligence

**学什么**：具身智能前沿

- 人才密度、资金密度无人能及
- 大模型/基础模型方向的领头羊
- "但是我们比他做得更有效率"
- 唐老师（PI）交流很多，他们最着急的就是"没数据，赶紧搞数据"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🌐 智元（Agibot）

**学什么**：成熟管理团队

- 知识产权做得特别好（高继扬特别关注的点）
- 组织好、实事求是、调整速度快
- "很早创业时跟邓总聊过一次，就感觉到他是一个很成熟的企业家状态"
- 很多争议做法不评论，但经营动作值得学

</div>

</div>

</div>

---

# 一只狼的自我修养

<div class="mt-3">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">
<strong>"如果把星海图比作一个动物，可能是狼——但狼又不准确，因为现在大家都狼性。前几家都非常狼性，都非常卷。"</strong>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>狼性的时刻</strong>：G0 Plus 发布前，赵行带领的智能团队 + 整机团队连续一个月周末不休息。"面对目标一定要达成的那种韧劲——我特别感动，也特别自豪。"
</div>

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>但高继扬强调"步步为营"</strong>——

"我不会在一个时间段内把所有事同步展开，因为那样拿不到好结果。24 年我的重心就是整机和供应链。25 年就是数据智能。26 年就是场景化应用。对长期战略非常坚持，但执行上步步为营。"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-sm">
<strong>身先士卒的文化</strong>：产品有问题，第一时间去客户现场，自己作为第一责任人。同时把体系建设起来，持续解决。要求将领们也这样做——在一线获取一手信息。
</div>

</div>

</div>

</div>

---

# 真实的机器人：视频里比现实好得多

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<strong>Demo 的四个阶段：</strong>

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-red-100 border border-red-300">
<strong>1. Demo in the Video</strong><br>
<span class="text-xs">视频里的 demo——最多公司在这个阶段</span>
</div>

<div class="p-2 rounded bg-orange-100 border border-orange-300">
<strong>2. Demo in the Office</strong><br>
<span class="text-xs">在办公室现场 demo 给你看</span>
</div>

<div class="p-2 rounded bg-green-100 border border-green-300">
<strong>3. Demo in the Wild</strong><br>
<span class="text-xs">任何地方都可以部署——新加坡、韩国、美国客户、投资年会现场。观众从兜里掏东西，它都能抓</span>
</div>

<div class="p-2 rounded bg-purple-100 border border-purple-300">
<strong>4. Application</strong><br>
<span class="text-xs">真正的产品应用——星海图现在正在走向这一步</span>
</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>高继扬讲的"秘密"</strong>：

<div class="mt-2 italic">
"大家对机器人的理解更多来自于视频。视频塑造了大家对于机器人的认知。视频里呈现出的机器人状态比现实当中要好得多。现实当中的机器人，大家还是要给它更多的耐心。"
</div>

<div class="mt-2 text-xs opacity-70">
但这件事会发生。
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3 text-sm">
<strong>怎么识别一个机器人公司在画饼？</strong>"无法在一个瞬间完成识别，需要一个周期——看这个团队一年前、两年前说的，跟他这一年做的，以及跟他一年之后做到的，去对比。"
</div>

</div>

</div>

</div>

---

# 为什么机器人行业没有技术浪漫主义

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg mb-4">
"机器人这件事本身就不浪漫。链条非常长，周期也很长。做语言模型不用操心供应链，不用操心数据，安安心心做好模型研发，做好社交媒体病毒传播就好了。而我们天然就要去土里做很多东西。"
</div>

<div class="grid grid-cols-3 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>不存在梁文锋那种技术浪漫主义</strong><br>
这个行业不允许这样的人存在。如果有这样人存在，可能他会有很大的 suffer。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>需要平衡</strong><br>
既要有理想主义，又要每一天很务实地思考：今天做什么，明天做什么，每件事的收益和支出是什么。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>高继扬的 bet</strong><br>
"我去创业做具身智能，就是我人生的 bet。在生产力场景做出万台出货量，就是我们当下最重要的 bet。"
</div>

</div>

</div>

---

# 像培训员工一样培训机器人

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 italic text-lg">
"我们希望给这个世界带来的核心体验是：通过几次示范，再通过几次自我演练，机器人就可以在那个场景里稳定地自主完成任务——像培训一个员工一样。"
</div>

<div class="grid grid-cols-3 gap-4 text-center text-sm">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 my-1">🧠</div>
<div class="font-bold">基础模型</div>
<div class="text-xs opacity-70 mt-1">VLA + LLM 双系统<br>动作执行 + 任务推理</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600 my-1">🔧</div>
<div class="font-bold">后训练工具</div>
<div class="text-xs opacity-70 mt-1">几次示范 + 自我演练<br>快速适配新场景</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 my-1">🤖</div>
<div class="font-bold">整机</div>
<div class="text-xs opacity-70 mt-1">轮式双臂 + 操作能力<br>物理世界执行载体</div>
</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
"机器人员工的生产力会显著增加整个人类社会的幸福感。"——高继扬每次给投资人 PPT 的第一页
</div>

</div>

---

# 步步为营：每一阶段只有唯一重心

<div class="mt-3 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-5xl font-bold text-blue-600 my-2">2024</div>
<div class="font-bold text-lg">融资 + 整机 + 供应链</div>
<div class="text-xs opacity-70 mt-2">从"淘宝以图搜图找供应商"到 R1 系列量产</div>
<div class="text-xs opacity-70 mt-1">从 3 人创办到引入泽一（机电）、天齐（CFO）</div>
<div class="text-xs opacity-70 mt-1">"不怕慢就怕站，日拱一卒"</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

<div class="text-5xl font-bold text-green-600 my-2">2025</div>
<div class="font-bold text-lg">融资 + 数据 + 智能</div>
<div class="text-xs opacity-70 mt-2">500h 高质量遥操作数据开源（全国首个）</div>
<div class="text-xs opacity-70 mt-1">G0 基础模型开源 → G0 Plus 开箱即用</div>
<div class="text-xs opacity-70 mt-1">赵行统一管理基础核心团队</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-5xl font-bold text-purple-600 my-2">2026</div>
<div class="font-bold text-lg">融资 + 场景 + 应用</div>
<div class="text-xs opacity-70 mt-2">从开发者市场走向生产力市场</div>
<div class="text-xs opacity-70 mt-1">目标：万台级别出货量</div>
<div class="text-xs opacity-70 mt-1">Bin picking、厂内物流等场景落地</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>每一阶段融资都持续进行——"不能停"。</strong>但高继扬特别强调：融资对他来说没有什么正反馈，每一轮融完感受到的都是肩上责任的加重。"我期待的正反馈是出货量——那个还没有来临。"
</div>

</div>

---

# 高继扬的创业哲学：从历史中寻找养料

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

### 📚 曾国藩
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
二十多岁儒家清流，四十岁变成有事功的人。顿悟：最重要的不是个人的才华或品德，而是能拉动多少资源、让多少人愿意跟你一起把事做成。高继扬 20 岁出头读到的这本书，塑造了他的创业底层逻辑。
</div>

### 📚 吕思勉讲三国
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
真实的历史没有草包，也没有绝对意义上的英雄。都是在现实中去挣扎、取舍，凭借一些运气取得胜利，然后步步为营。高继扬认为三国和具身智能的格局很像——"好在今天不是零和博弈，每个公司都可以很好。"
</div>

</div>

<div>

### 🎯 人生 Bet

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
"我去创业做具身智能，就是我人生的 bet——这一辈子就干这件事。"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
"我没有特别在意别人对我的评价。我更多想的是：目标是什么，要给世界带来什么价值，有没有在做正确的事。假设内心认为是正确的、实事求是的，大家不理解、不认可、甚至瞧不上——我都 OK。"
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
<strong>最大正反馈还没来</strong>：出货量。"融资对我来说没有正反馈。每次融资成功，我觉得肩上责任更重——这么多钱，这么多同学，我得对他们负责。"
</div>

</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"工程师思维就是拆解加测量——把一个复杂问题拆成子问题，再拆解再拆解，拆到最后就是一行一行代码。"
<div class="text-xs opacity-60 mt-1 not-italic">— 高继扬在 Waymo 学到的最核心方法论，贯穿了他做自动驾驶、做整机、做公司的一切</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我底层的一个变化是，我学会了什么叫以客户为中心。以客户为中心不是客户说做什么就做什么，而是站在客户角度帮他挖掘真正的需求。"
<div class="text-xs opacity-60 mt-1 not-italic">— 在 Momenta 两年最大的收获，塑造了星海图的价值观基底</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"AI 的魔力在于能够代替人总结规律——计算机可以从数据中自己提炼规律，把所有 if else 变成了神经网络里的参数。这事太牛了，我得做这个。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2015 年在商汤训练完第一个神经网络的感受，决定了一生的方向</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我跟那件我想做的事比起来，其他的东西价值不大。"
<div class="text-xs opacity-60 mt-1 not-italic">— 放弃 Momenta 约一千万美金期权，从未后悔</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"真实数据一小时 200 到 250 块钱。十万小时 2500 万——相当于一个人从出生到 18 岁的物理世界交互总量。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于"真实数据到底贵不贵"的算账</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"这个世界真实就是这个样子的——哪怕真相很残酷，也要去面对它。"
<div class="text-xs opacity-60 mt-1 not-italic">— 解释为什么自己不逃避现实世界的残酷，无论是在 Momenta 被客户骂还是在创业中面对困难</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句（续）：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"价值观的底层是取舍。面对取舍的时候怎么选，利益分配的时候分给谁——这些是指导整个组织成长发展的最内核的东西。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈许华哲离开与星海图的价值观坚持</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"机器人这件事本身就不浪漫。链条非常长，周期也很长。我们天然就要去土里做很多东西——没法浪漫，就要务实。"
<div class="text-xs opacity-60 mt-1 not-italic">— 回应为什么具身智能行业没有"梁文锋式"的技术浪漫主义</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"理想主义不能变成空想。实现理想主义的基础，是每天都要去算 ROI——算这件事对长期战略的价值贡献和短期收益的价值贡献。"
<div class="text-xs opacity-60 mt-1 not-italic">— 星海图"务实创新"价值观的精确阐述</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Waymo 的问题不是大公司病，本质是没有 founder。特斯拉马斯克说干啥哪怕是错的也能开始干，但 waymo 没有一个这样能纠错的人站出来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 他在 Waymo 两年最深的结构性观察</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我们希望像培训一个员工一样，通过几次示范和几次自我演练，机器人就可以在那个场景里稳定地自主完成任务。"
<div class="text-xs opacity-60 mt-1 not-italic">— 高继扬给投资人 PPT 第一页的技术愿景</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"视频里呈现出的机器人状态比现实当中要好得多。现实当中的机器人，大家还是要给它更多的耐心。但这件事会发生。"
<div class="text-xs opacity-60 mt-1 not-italic">— 机器人行业"你们都知道但我们不知道"的秘密</div>
</div>

</div>

---

<div class="mt-10 text-center">

# 谢谢观看

<div class="mt-6 text-sm opacity-60">
星海图创始人 高继扬 · 小军商业访谈录 · 2026年2月
</div>

<div class="mt-3 text-xs opacity-40">
完整访谈：小宇宙 FM · 语言即世界工作室
</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-base max-w-lg mx-auto">
"我在二十多岁读到曾国藩——他不是我最崇拜的人，但他是让我想明白'我该做什么样的人'的人。"
</div>

</div>
