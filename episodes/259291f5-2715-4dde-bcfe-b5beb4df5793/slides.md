---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E239｜SpaceX 太空数据中心：算力上天是物理可行还是经济幻觉？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E239｜SpaceX 要让太空算力从科幻走向现实，但它划算吗？

<div class="text-lg opacity-70 mt-4">

硅谷101 · 2026 年 6 月

</div>

<div class="mt-6 text-sm opacity-50">

嘉宾：路易斯·宏（Aries Fund 合伙人）& 刘秉彦（火箭爱好者）

</div>

<div class="text-xs opacity-40 mt-4">

主持人：泓君

</div>

---
layout: default
---

# 为什么这期值得听？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**SpaceX 史上最大 IPO**
1.75 万亿美元估值，把火箭、星链、xAI 打包上市。招股书里的太空数据中心叙事是什么？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**1 GW 算力上太空**
马斯克的计划：一万颗卫星塞满晨昏轨道，每颗 100 kW。这是科幻还是工程路线图？

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**散热反常识**
太空又黑又冷 ≠ 散热免费。每兆瓦废热需要 1200 m² 散热面。黑体辐射 ∝ T⁴ 是解题关键。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**物理可行，经济存疑**
每一项技术挑战都可以拆解，但账算得过来吗？从发射成本到 GPU 寿命，每加一个假设，回本时间就翻倍。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**月球 vs 火星之争**
NASA 局长从火星派转向月球派。月球可能是太空经济的第一个工业基地——重力只有地球的 1/6。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**投资视角**
VC 为什么不看好太空数据中心创业公司？SpaceX 的垂直整合是壁垒还是唯一解？

</div>

</div>

---
layout: default
---

# SpaceX IPO：1.75 万亿的"太空平台"故事

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🚀 火箭发射
<div class="text-3xl font-bold text-blue-600 my-2">Falcon + Starship</div>
<div class="text-xs opacity-70">可重复使用火箭，目标 $10-20/kg</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🛰️ 星链 Starlink
<div class="text-3xl font-bold text-green-600 my-2">12,000+</div>
<div class="text-xs opacity-70">在轨卫星，99.85% 完好运行</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🤖 xAI
<div class="text-3xl font-bold text-purple-600 my-2">AI + 太空</div>
<div class="text-xs opacity-70">太空数据中心叙事，绑定 AI 估值</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed rounded">

**作者概括**: SpaceX 的 S-1 招股书刻意把太空写得很小——太空的潜力目前市场还理解不了。但 SpaceX 内部有一个信仰：太空经济的规模是地球经济的数倍。马斯克的玩法是把运载公司变成太空互联网公司，再变成 AI 算力公司，每一次叙事升级都打开更大的估值空间。

</div>

---
layout: default
---

# 1 GW 算力上太空：这到底有多大规模？

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一万颗卫星
<div class="text-xl font-bold text-blue-600 my-1">10,000 units</div>
<div class="text-xs opacity-70">每颗 100 kW 算力单元<br/>塞满一整条晨昏轨道</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 一百次发射
<div class="text-xl font-bold text-green-600 my-1">100 Starship launches</div>
<div class="text-xs opacity-70">每次 100 颗卫星（~100 吨）<br/>赌局：2029 年达到这个频率</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 一百万平方米
<div class="text-xl font-bold text-orange-600 my-1">1,000,000 m²</div>
<div class="text-xs opacity-70">太阳能板总面积<br/>轨道周长约四万公里</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed rounded">

**晨昏轨道（Dawn-Dusk Orbit）**: 卫星沿地球晨昏线飞行，始终朝阳，每天最多只有 35 分钟被地球遮挡。这是效率最高的轨道——但也是稀有资源，一万颗就会占满一整条。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs opacity-70">

<div class="p-2">
<span class="font-bold">星舰发射增长：</span>2026 年 single digits → 2027 年 ~10 次 → 2028 年 ~50 次 → 2029 年 100+ 次。参考 Falcon 9：花了十年达到现在的频率，Starship 用五年就走完了同样的路——SpaceX 在加速，不是减速。
</div>

<div class="p-2">
<span class="font-bold">安全距离：</span>每颗卫星之间至少隔几十公里。轨道周长约四万公里，一万颗就满了。但太空是三维空间——技术发展可能把安全距离缩小，容量扩大八倍。
</div>

</div>

---
layout: two-cols
---

# 星舰 vs 猎鹰 9：SpaceX 在加速

<div class="text-sm leading-relaxed mt-2">

SpaceX 第二个大型火箭项目不但没有慢下来，反而在加速。

- **Falcon 9**：10 年达到当前发射频率，迭代到 V5 是最终版
- **Starship**：5 年走完了 Falcon 9 同样的进度——已到 V3，V4 即将登场，最终版预计 V5

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**抛物线增长**：2026 single digits → 2027 ~10 → 2028 ~50 → 2029 100+。一旦地面和天空的操作基础设施 unlock，发射频率可全线上升。2029 年 100 次 → 2030 年可能几百次。

</div>

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**为什么加速？** Falcon 9 开发于 SpaceX 初创期（缺钱缺人），Starship 有成熟的工程团队 + Falcon 9 收入 + 星链现金流——资源完全不同。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./starship-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 2029 赌局：你能下注吗？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🟢 路易斯的赌注
<div class="text-lg font-bold text-blue-600 mt-2">2029 年，SpaceX 达到 1 GW</div>

<div class="text-sm mt-3 leading-relaxed">

- 100 次星舰发射 × 100 颗/次 = 10,000 颗卫星
- 参考 Falcon 9 抛物线增长曲线
- 卫星设计已有星链 V3 经验迁移
- "这个赌局还是相当激进的"

</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🔴 秉彦的怀疑
<div class="text-lg font-bold text-red-600 mt-2">"100 颗星舰发射我相信，1 GW 数据中心我没看到必要性"</div>

<div class="text-sm mt-3 leading-relaxed">

- 火箭能力 ≠ 数据中心生态成熟
- 星链花了 5 年才到 V3——AI mini 卫星的迭代不会更快
- 从发射能力到经济可行，中间隔着技术成熟度曲线
- "Elon 有没有钱？可能有。但钱可能在打水漂。"

</div>

</div>

</div>

<blockquote class="mt-4 p-3 text-sm italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"如果我会赌我自己的 money 哈…我会赌 2029 年，SpaceX 可以达到 one gigawatts。"
<div class="text-xs opacity-60 mt-1 not-italic">— 路易斯·宏</div>

</blockquote>

---
layout: two-cols
---

# 发射成本：从 7000 到 10 美元

<div class="text-sm leading-relaxed mt-2">

每一级下降都对应一个工程里程碑：

- **$7,000/kg** — 2026 年实际的拼车报价（Falcon 9）
- **$200/kg** — 星舰保守估计（只回收一级助推器，复用 10 次）
- **$100/kg** — 星舰近期现实目标
- **$10-20/kg** — 完全可重复使用，只消耗燃料（航天煤油）

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

**关键洞察**：纯燃料成本下，把太阳能板发射上去，两个月就能用发的电回本。之后发出来的电都是免费的。但如果考虑制造、冗余、寿命折损，回本时间就可能拉到两年——进入了"到底划不划算"的区间。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./launch-cost-waterfall.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 发射成本回本：一个不断拉长的账本

<div class="mt-4">

<div class="grid grid-cols-1 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**乐观情况：2 个月回本**<br/>
假设燃料成本 $10-20/kg，3-5% 质荷比，太阳能板发电 5 倍于地面效率。只算燃料消耗，不算硬件制造成本。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**保守情况：4 个月回本**<br/>
假设 $200/kg 发射成本——星舰只回收一级，复用 10 次。仍然假设太阳能板本身免费。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**悲观情况：约 2 年回本**<br/>
加上制造、组装、卫星结构成本；考虑发射冗余度（+40%）；假设 GPU 在太空寿命是地面的一半（辐射）。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**致命一击**<br/>
1 GW 地面数据中心造价 $500 亿，其中 GPU 占 50-60%。GPU 成本在天地一样，而太空的电费优势无法覆盖 GPU 的巨大开销。**经济账目前算不过来。**

</div>

</div>

</div>

---
layout: two-cols
---

# 散热反常识：真空里为什么更难散热？

<div class="text-sm leading-relaxed mt-2">

太空没有空气 → 没有热对流 → **辐射是唯一的散热方式**。

散热效率 ∝ T⁴（温度的四次方）。在室温附近，这个效率非常低：每散掉 1 MW 废热需要约 1,200 m² 散热面——4-5 个网球场那么大。

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**国际空间站做了 20 多年**，422 m² 的氨循环散热器只能散掉 70 kW 热量。而 1 GW 数据中心要散掉的热量是这个的几千倍。

</div>

<div class="mt-2 text-xs opacity-60">

**关键参数**：太阳常数 ≈ 1.36 kW/m²，在近地轨道上，面向太阳的一面每平方米接收这么多能量。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./blackbody-radiation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 散热解决方案：温度是关键

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**提高几度，面积大减**

T⁴ 的威力：温度从 300 K → 330 K（仅提高 30°C → 60°C），散热能力提升约 50%。散热器面积可以相当幅度地缩小。不需要把芯片做到 120°C 高温——只需几度就能产生显著效果。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**热量搬运：固态空调**

最终问题不是能不能散热，而是热量怎么从芯片搬运到散热面。需要一种类似空调的热泵——把低温处的能量搬到高温处。

当前最有希望的是半导体散热技术（固态热泵），仍在实验室阶段。这个技术一旦突破，整个太空数据中心的可行性将大幅提升。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**地球的启示**

地球的平均平衡温度约 5°C——因为它是球体，散热面积是吸热面积的 4 倍。如果能设计一个类似的卫星构型（让散热面积远大于吸热面积），温度就自然可控。理论上没问题——只是怎么便宜地做到。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**晶片公司也在努力**

英伟达、AMD 等晶片公司也在研究提高 GPU 工作温度的方案。地面数据中心散热压力也很大——这个方向的研发对天地都有利。

</div>

</div>

<blockquote class="mt-3 p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 rounded">

"它是一个硬科幻，它不是一个神话。物理上没有任何东西阻止它。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘秉彦，谈太空散热的理论可行性</div>

</blockquote>

---
layout: default
---

# 星链：太空数据中心的最佳实验田

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 📡 在轨卫星
<div class="text-4xl font-bold text-blue-600 my-2">12,000+</div>
<div class="text-xs opacity-70">2019 年至今发射的星链卫星总数</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### ✅ 完好率
<div class="text-4xl font-bold text-green-600 my-2">99.85%</div>
<div class="text-xs opacity-70">全部发射卫星中至今完好运行的比例</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 🛡️ 避碰操作
<div class="text-4xl font-bold text-orange-600 my-2">300,000</div>
<div class="text-xs opacity-70">2025 年全年自动避碰操作次数</div>

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**故障率极低**：12,000+ 颗中只有 1 颗真正失控漂流在轨道上，其余 0.15% 的失败都按计划坠落烧毁。辐射和碎片远没有想象中可怕。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**自研 AI 避碰**：SpaceX 星链的自主避碰系统已经积累了海量数据——30 万次/年的实操经验。这个技术甚至可以独立成为一家创业公司。

</div>

</div>

---
layout: default
---

# 太空只适合推理，不适合训练

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### ❌ 训练（Training）

大型训练需要高效的近距离通信——GPU 之间带宽决定训练效率。

100 kW = 约 100 张卡，只能做 fine-tune，做不了有规模的预训练。

星间互联的带宽瓶颈会把训练成本放大数十倍。**太空绝对不适合做大型训练中心。**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### ✅ 推理（Inference）

推理对互联要求低得多。Starlink 延迟约 20-40 ms，对 LLM 推理完全可接受（人感知阈值 ~200 ms）。

一个成功的模型，推理量应该比训练量大几百到几千倍。推理才是需求最大的那部分。

太空独特的 edge computing 定位——刚好卡在超大规模数据中心和边缘设备之间。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**理想分工**：地上做大型训练，天上做海量推理。免费的太阳能 + 覆盖全球的延迟优势 = 一个完美生态。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**但生态鸡生蛋**：太空数据中心成本太高，用的人太少 → 没人愿意为它优化软件 → 更没有用户 → 雪球滚不起来。除非像谷歌、英伟达这样的巨头用自己的体量推。

</div>

</div>

---
layout: default
---

# 太空辐射：被高估的风险？

<div class="grid grid-cols-1 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**低轨有保护**：在地球磁场保护的轨道（< 1,000 km 高度），辐射不是太大问题。不要放到高辐射带（如范艾伦带）。星链 12,000+ 颗卫星的实战数据已经证明这一点。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**增加屏蔽 + ECC 纠错**：宇宙射线导致的比特翻转可以通过硬件屏蔽和 ECC 内存来解决。每加一个校验位，出错概率下降几个数量级。这是现有民用计算市场就有的成熟技术。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**GPU 寿命折损**：保守估计太空 GPU 寿命是地面的一半（辐射 + 未知因素）。这在经济模型里需要把成本乘以 2。但只要寿命远超几个月的回本周期，经济性仍可讨论。

</div>

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed rounded">

**核心结论**：辐射不是物理阻断项，而是一个增加的折旧成本。真正的风险不是单颗芯片被打坏，而是"unknown unknowns"——在地面上用了 10 年的芯片，在太空可能活不过 2 年。

</div>

---
layout: default
---

# 轨道容量：一万颗卫星会撞车吗？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**晨昏轨道是稀有资源**<br/>
每天最多 35 分钟无光照，发电效率最高。但正因为大家都想要这条轨道，按目前安全距离标准（几十公里/颗），一万颗 AI mini 就会把一整条轨道占满。不过太空是三维空间——安全距离每缩小一半，容量扩大 8 倍。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**低轨卫星自己会掉下来**<br/>
低轨卫星轨道衰减快——如果姿态失控，很快就会被大气层拖回地球烧毁。真正让人担心的碎片问题主要在高轨道（几千年不回来）。低轨开发的碎片风险相对可控。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**星链已有 30 万次避碰经验**。SpaceX 的 AI 系统像 Tesla 的 FSD 一样在太空中积累了海量数据。这个技术在全球范围内没有对手——任何创业公司在这件事上跟 SpaceX 竞争都非常难。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**悲观看法**：人类只有在发生一次大规模撞击事件并造成严重后果之后，才会形成有效的国际合作机制。在此之前，"日拱一卒"——每家都会悄悄把安全距离缩得更小，多发几颗卫星。

</div>

</div>

---
layout: two-cols
---

# 太空数据中心的五大工程挑战

<div class="text-sm leading-relaxed mt-2">

按解决优先度排列，SpaceX 的优势集中在最底层：

1. **发射** ← SpaceX 绝对主场
2. **能源** ← 太阳同步晨昏轨道 + 太阳能板
3. **散热** ← 最反常识、最需要技术突破
4. **辐射** ← 低轨有天然保护
5. **碎片风险** ← 星链已有成熟技术

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

物理上五项全能通过——但每一项从"能做到"到"经济地做到"，中间都隔着技术成熟度曲线。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./space-dc-problems.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 1 GW 地面数据中心的真实成本

<div class="mt-4">

<div class="grid grid-cols-1 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

### 💰 总造价
<div class="text-5xl font-bold text-red-600 my-2">$500 亿</div>
<div class="text-sm opacity-70">英伟达公布的 1 GW 地面数据中心建造成本</div>

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**GPU**
<div class="text-2xl font-bold text-blue-600 my-1">50-60%</div>
<div class="text-xs opacity-70">$250-300 亿<br/>成本绝对大头</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**基础设施**
<div class="text-2xl font-bold text-green-600 my-1">30-35%</div>
<div class="text-xs opacity-70">建筑、冷却<br/>电力设施</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**运营电力**
<div class="text-2xl font-bold text-yellow-600 my-1">10-15%</div>
<div class="text-xs opacity-70">电费是运营成本<br/>不是建设大头</div>

</div>

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed rounded">

**太空能省掉什么？** 电力免费（太阳能 5 倍效率），建筑和冷却部分结构不同——但 GPU 成本一样，且发射 + 卫星平台是额外开销。GPU 造价占比越大，太空的经济优势越弱。

</div>

</div>

---
layout: default
---

# 经济账：每加一个假设，回本时间就翻倍

<div class="text-sm leading-relaxed mt-2">

<div class="grid grid-cols-1 gap-2 mt-3">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<span class="font-bold">起点：2 个月</span> — 纯燃料成本，不考虑太阳能板自身造价，3-5% 质荷比
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<span class="font-bold">+ 星舰保守回收率：4 个月</span> — 按 $200/kg，只回收一级
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<span class="font-bold">+ 卫星制造成本：</span> — 目标把每颗卫星成本压缩到和星链 V3 同级（100-120 万美元/颗，不含 GPU）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<span class="font-bold">+ 发射冗余度：</span> — 第一波多发 40%，把失败概率算进去
</div>

<div class="p-2 rounded bg-red-100 border-l-4 border-red-600 font-bold">
<span>+ GPU 太空寿命折半：→ 约 2 年回本</span> — 进入了"整个卫星能不能活 2 年"的 questionable 区间
</div>

</div>

</div>

<blockquote class="mt-3 p-3 text-sm italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"如果说赌的是 100 颗星舰发射，我相信。1 GW 的数据中心我觉得，我没有看到一个这件事情的必要性。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘秉彦</div>

</blockquote>

---
layout: default
---

# 发射成本的真实差距

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

### 🔴 现在的价格
<div class="text-4xl font-bold text-red-600 my-2">$7,000/kg</div>
<div class="text-sm opacity-70">SpaceX 2026 年 2 月实际拼车报价<br/>Falcon 9</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### 🟢 未来的梦想
<div class="text-4xl font-bold text-green-600 my-2">$10-20/kg</div>
<div class="text-sm opacity-70">星舰完全可重复使用<br/>只消耗航天煤油</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed rounded">

**差距是 350-700 倍**。即使星舰把成本降两个数量级，目前的拼车价还是遥不可及。关键的里程碑是星舰 V5 版本（参考 Falcon 9 迭代到 V5 花了十年，Starship 用五年就到了同进度——但最后的成本收敛需要规模化发射的飞轮转起来）。

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**类比**：中美一万公里航线的运输成本约 3-5 美分/公里。任何低于这个数的星舰成本估计都不现实。但压到 10-20 美分/公里是理想状态。

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**关键赌注**：2029 年 SpaceX 能否实现 100 次星舰发射？路易斯的赌注是"会"。而且一旦达到 100 次，下一步就是几百次——Falcon 9 的发射增长是抛物线形的。

</div>

</div>

---
layout: default
---

# 太空是无限空间吗？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**空间比你想象的大**

把一万人散布在地球表面，你一辈子都碰不到另一个人。散布在三维轨道空间里，容量更是巨大。**我们太高估了人类的量，太低估了地球的大小。**

安全距离每缩小一半，容量变为 8 倍。技术发展会不断释放轨道空间。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**但先到先得是现实**

近地轨道的优质位置（尤其是晨昏轨道）是有限资源。目前缺乏国际公约制约——谁先发、谁先占。但太空有一个独特之处：一旦出事，所有人都完蛋。这会强迫所有人合作。

</div>

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**好消息**：60-70 年代美国发了数亿根针到太空做长波通信实验——现在还在飘着，但并没有引发灾难。太空比我们想象的更"宽容"。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**坏消息**：在发生一次重大碰撞并造成后果之前，很难形成有效的国际治理。凯斯勒效应不是物理不可能，而是概率问题——随着轨道密度增加，概率在上升。

</div>

</div>

---
layout: default
---

# 半导体散热：那个"一突破就全通"的技术

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200 mb-4">

### 🔬 固态热泵（半导体散热）

用半导体材料实现类似空调的热搬运——不需要压缩机、不需要活动部件、不需要液氨循环。把芯片的低温热能"泵"到散热表面，让散热面保持更高温度从而利用 T⁴ 效应。

</div>

<div class="grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**现状**
<div class="text-lg font-bold text-red-600 my-1">实验室阶段</div>
<div class="text-xs opacity-70">小规模应用存在（手机散热片）但远未达到 MW 级数据中心的规模</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**瓶颈**
<div class="text-lg font-bold text-yellow-600 my-1">供应链空白</div>
<div class="text-xs opacity-70">需要新材料、新制造工艺，整个半导体供应链需要重建</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**投资机会**
<div class="text-lg font-bold text-green-600 my-1">底层技术 buy</div>
<div class="text-xs opacity-70">VC 可投的方向：不投太空 DC 公司，但投关键技术供应商</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 月球 vs 火星：两条太空经济路径

<div class="text-sm leading-relaxed mt-2">

**月球派（刘秉彦）**：
- 氦-3 核聚变原料，经济价值巨大
- 重力仅为地球 1/6，从月球向深空发射的成本远低于从地球
- 月球是太空工业基地的最佳选址
- 在股东有生之年能看到回报

**火星派（路易斯 / SpaceX）**：
- 月球只是火星的 hopper（跳板/测试场）
- NASA 重返月球 = 政治驱动 + SpaceX 顺水推舟
- 长期目标不变：多行星物种

**交汇点**：两者在同一条线上——先解决"怎么离开地球"，再解决"怎么在太空生存"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moon-mars-paths.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 月球：被低估的经济价值

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🌙 月球重力井的优势

月球表面到轨道所需的燃料远远小于地球。阿波罗计划：土星五号 3000 吨从地球起飞；从月面到月球轨道的上升级只有"垃圾桶大小"。

如果地球再大两倍，任何发射都无法进行。**地球恰好在物理允许星际航行的临界点上——月球比这个临界点优越得多。**

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### ⛏️ 资源与工业基地

- 氦-3：核聚变的理想原料，月球储量丰富
- 自动化制造 + 远程操控技术正在进步
- 太空数据中心、太阳能电站的组装和发射——从月球走比从地球走便宜得多

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed rounded">

**但 SpaceX 内部并不把月球当终点**。招股书里月球写得极小。SpaceX 的信仰是"太空经济的规模是地球的数倍"——月球只是这条线的第一个站点。NASA 愿意付钱建月球基地，SpaceX 当然乐意接单加速迭代。

</div>

---
layout: default
---

# 创业公司的太空数据中心梦

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🚫 VC 不看好太空 DC 创业公司

- **Starcloud**：YC 出身，号称做第一个太空数据中心。第一版方案是 5km×5km 太空站 + 20km×20km 反射镜。拿了 1.7 亿美元融资——但估值逻辑在投资人看来站不住脚。
- 任何初创公司的成本至少是 SpaceX 的 3 倍。
- 卫星、发射、能源——没有一项垂直整合的优势。

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### ✅ 可以投的方向

- **关键技术供应商**：半导体散热器、卫星通信组件、空间级芯片
- **卫星供应链**：与火箭不同，卫星供应链不要求美国本土——全球最优解决方案都可采纳
- **不需要是 100 倍或 1000 倍的标**：在生态中有自己的空间即可

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed rounded">

**路易斯的观点**：在太空数据中心这个赛道，初创公司不具备创投需要的回报倍数。即使它们不会被全部淘汰，也只是 niche 市场——最可能的出路是被收购，而不是独立成长为 AWS for space。

</div>

---
layout: default
---

# SpaceX 的独特优势：垂直整合

<div class="grid grid-cols-1 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<span class="font-bold">🚀 发射：</span>唯一同时拥有可重复使用火箭和卫星制造能力的公司。发射频率取决于自己，不受制于供应商。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<span class="font-bold">🛰️ 卫星平台：</span>星链已经迭代到 V3，能力提升 50 倍，费用提升 5 倍。所有经验可以直接迁移到 AI mini 卫星。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<span class="font-bold">☀️ 太阳能：</span>SpaceX 在深度研究太阳能材料科学——又是一项内化能力。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<span class="font-bold">🤖 星座管理 AI：</span>30 万次/年避碰操作积累的数据和算法。这个能力本身就是一家公司的护城河。
</div>

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed rounded">

**这就是为什么"速度取决于自己"**。其他公司建太空数据中心需要协调发射供应商、卫星制造商、太阳能板供应商、地面站运营商——每一环都有延迟。SpaceX 只有一个瓶颈：Starship 的迭代速度。而 Starship 的进度已经超过了同期的 Falcon 9。

</div>

---
layout: default
---

# 数据中心的叙事升级：从运输到 AI

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200 mb-4 text-center">

### 📈 SpaceX 的三次叙事跃迁

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50">

**1.0 · 太空运输**
火箭发射公司
估值上限：发射市场

</div>

<div class="p-3 rounded bg-purple-50">

**2.0 · 太空互联网**
星链 Starlink
估值上限：电信市场

</div>

<div class="p-3 rounded bg-red-50">

**3.0 · 太空 AI**
数据中心 + xAI
估值上限：AI + 云计算

</div>

</div>

</div>

<div class="mt-2 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**怀疑论**：太空数据中心是不是只是"贴 AI 标签"拉高估值？就像美光——一家快被遗忘的公司突然市值万亿——谁不眼红？把运载公司的故事讲成 AI 算力公司的故事，估值逻辑完全不同。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**建设性观点**：SpaceX 一开始确实没有太空数据中心的计划。但"一旦升空解决，近地轨道能做什么"是自然的问题延伸。星链是第一个答案，数据中心是 AI 时代的新答案。这确实是后来加上去的叙事，但不在平台逻辑之外。

</div>

</div>

</div>

---
layout: two-cols
---

# 长期视角：为什么太空数据中心终将发生？

<div class="text-sm leading-relaxed mt-2">

### 🌡️ 地面散热的物理上限

地面散热靠空气对流和冷却塔，能效曲线是线性的。当算力规模再扩大 10-100 倍，地面数据中心的热岛效应和环境成本将不可忽视。**太空有无限的散热空间**——且散热效率 ∝ T⁴ 是指数级的。

### ⚡ 电力审批的瓶颈

以德州为例——最商业友好的州——数据中心电力申请批准率不到 1%。17-28% 的全球电力增量需要支撑 AI。太空太阳能是免费的、无限的、不影响地球热平衡的。

### 🔭 硬科幻的未来

太阳系最重的硬通货是算力——最终是电能。地球上发的电最终都会变成地球的热。**太空中的电不加热地球——只把数据传回来。**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ground-vs-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"把算力放在太空这件事一定能做，没有问题。把算力能够经济地放在太空，这才是真正需要解决的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘秉彦，对太空数据中心可行性的整体判断</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"如果我会赌我自己的 money 哈…我会赌 2029 年，SpaceX 可以达到 one gigawatts。"
<div class="text-xs opacity-60 mt-1 not-italic">— 路易斯·宏，对星舰发射频率的赌注</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"如果说赌的是一百颗星舰发射，我相信。1 GW 的数据中心我觉得，我没有看到一个这件事情的必要性。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘秉彦，对太空数据中心经济性的怀疑</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"它是一个硬科幻，它不是一个神话。物理上没有任何东西阻止它。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘秉彦，谈太空散热的理论物理边界</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"月球就是火星的 hopper。"
<div class="text-xs opacity-60 mt-1 not-italic">— 路易斯·宏，SpaceX 视角下的月球定位</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多精彩对话：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"SpaceX里面的人都有个信仰：太空里面的经济是远远是地球上的经济的好几倍大，就整个加起来。但是呢，这个题材跟任何人讲，大家都会觉得你是疯子。"
<div class="text-xs opacity-60 mt-1 not-italic">— 路易斯·宏</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"所谓太空中很冷，所以散热不要钱这件事肯定是错的。太空中它只是空气很稀薄，或者说几乎没有空气……没有热对流，所以说这个热是只能靠辐射来散发出去的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘秉彦，纠正关于太空散热的常见误解</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"在太空做任何事情，你必须要跟所有人对话。不管你喜不喜欢，不管你的政治立场，它是一个物理强迫你必须要有密切沟通跟合作的空间。"
<div class="text-xs opacity-60 mt-1 not-italic">— 路易斯·宏，谈太空国际合作</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"说实话我们太高估人类的量或者太低估地球的大小了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 路易斯·宏，谈轨道空间容量的直觉误差</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-4 text-lg italic opacity-70">

"把算力放在太空这件事一定能做，没有问题。把算力能够经济地放在太空，这才是真正需要解决的。"

</div>

<div class="mt-6 text-sm opacity-50">

完整播客：硅谷101 · E239<br/>
<a href="https://sv101.fireside.fm/252" class="opacity-70">sv101.fireside.fm/252</a>

</div>
