---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Training Transformers to solve the 95% failure rate of cancer trials — Ron Alfa & Daniel Bear, Noetik'
info: |
  Latent Space 与 Noetik 的 Ron Alfa 和 Daniel Bear 对谈：95% 的癌症临床试验
  会失败——但其中很多药其实"有效"，只是没用在对的病人身上。Noetik 用一个
  自监督的"虚拟细胞"模型 + TARIO-2 transformer，从每个病人都已经有的 H&E
  切片预测 ~19,000 个基因的空间表达，让那些"安全但无效"的药物找到自己的
  cohort。GSK 已经签了 $50M 软件授权。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 95% 的癌症试验失败

<div class="text-lg opacity-80 mt-4">不是因为药不行——是因为没找对病人</div>

<div class="mt-10 text-sm opacity-60">
Ron Alfa & Daniel Bear · Noetik<br/>
Latent Space · 2026
</div>

<div class="mt-8 text-xs opacity-50">
GSK 刚签了 $50M 软件授权 —— 不是买药，是买模型。<br/>
TARIO-2: 从一张普通的 H&E 切片，预测 ~19,000 个基因的空间表达。
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">这一集卡在 "AI 治癌" 故事的真实节点上：不是发现新药，是匹配旧药。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 95% 失败率
临床试验的 95% 会失败。Ron 的核心论点：很多"失败"的药其实有效——只是没匹配到对的病人。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Pharma 在买软件
Big Pharma 第一次大规模为 AI 平台付钱而不是做药。GSK $50M 不是买分子。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### TARIO-2
autoregressive transformer，吃 H&E，吐 ~19,000-gene 空间图。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 真实人体肿瘤
不是 frankenstein mouse models，不是 immortal cell lines。Noetik 花了近两年只在收数据。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Scaling laws on biology
模型 + 数据继续放大，"see no limit"。这套思路第一次真的迁移到湿实验科学。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 平台 vs 药企
"tools companies usually become drug companies." Noetik 偏偏选不变成药企。

</div>

</div>

---

# Tolstoy 的 reframe：癌症不是一种病

<div class="text-sm opacity-70 mb-4">Latent Space 在文章开篇借了一个文学比喻。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"Tolstoy famously wrote, 'All healthy cells are alike; each cancer cell is unhappy in its own way.' Or something like that."

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup, 文章开头</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

> "It's not one disease, it's a family of diseases. Hundreds, maybe thousands, of unique diseases each with its own underlying biology."

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

> "With this lens, saying you'll 'cure cancer' is like saying you'll **solve legos**."

</div>

<div class="mt-4 text-xs opacity-60">
你不会"解决乐高"——乐高是一个组合空间。癌症也是。每一种都需要自己的拼法。
</div>

---

# 一个让人沉默的数字

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 临床失败率
<div class="text-5xl font-bold text-red-600 my-3">95%</div>
<div class="text-xs opacity-70">"95% failure rate in clinical trials"</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 全球年支出
<div class="text-4xl font-bold text-orange-600 my-3">$20–30B</div>
<div class="text-xs opacity-70">"a year trying to cure cancers"</div>

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 每年试验数
<div class="text-4xl font-bold text-blue-600 my-3">hundreds</div>
<div class="text-xs opacity-70">"hundreds of clinical trials yearly"</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">

> "Yet, progress is slow with a **95% failure rate in clinical trials**."

<div class="text-xs opacity-60 mt-2 not-italic">
20 个药排队进入临床，平均只有 1 个最终被批准。
</div>

</div>

---

# 重要的 reframe：matching problem

<div class="text-sm opacity-70 mb-4">Ron 的核心论点不是"我们没药"——而是"我们没找对病人"。</div>

<div class="mt-6 p-6 text-base border-l-4 border-blue-500 bg-blue-50 rounded">

> "TL;DR: 95% of cancer treatments fail to pass clinical trials, but it may be a **matching problem** — if we better understood what patients have which tumors which will respond to which treatments, success rates improve dramatically and millions of lives can be saved — **with the treatments we ALREADY have**."

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup, TL;DR</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 老叙事
更多药 → 更多病人能活。瓶颈在分子设计。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Ron / Dan 的赌注
我们已经有的药就够多。瓶颈在**配对**——"哪个肿瘤会响应哪种治疗"。

</div>

</div>

---

# 我们其实已经有了一些奇迹

<div class="text-sm opacity-70 mb-4">不要忽略：从纯 chemo 到 targeted therapy，过去 20 年是真的有进步的。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Immune checkpoint inhibitors
**Keytruda · Opdivo**

> "target the defenses of dozens of tumor types"

解除肿瘤"伪装"，让免疫系统自己识别。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### CAR-T
> "adds modified T-cells to your blood that can target B-cell malignancies very accurately"

把病人自己的 T 细胞改造成识别特定肿瘤的"导弹"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Antibody Drug Conjugates (ADC)
**Trastuzumab**

> "combine a drug with an antibody, allowing it to target very specific (cancer) cells."

抗体当 GPS，毒药当弹头。

</div>

<div class="p-4 rounded bg-gray-100 border-l-4 border-gray-400 text-sm">

### vs. 老路：Chemotherapy
> "poison you and **hope the tumor dies before you do**."

新一代是有靶向的。但"有靶向"≠"任何病人都该用"。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "We truly **live in marvelous times.**" — Latent Space writeup

</div>

---
layout: two-cols
---

# 但 lab 里成功 ≠ clinic 里成功

漂亮的临床前数据在病人身上崩盘——这是行业里反复出现的故事。

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

> "**The lab doesn't translate to the clinic**" — Latent Space writeup, 章节标题

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

> "many of these 'failed' treatments **actually work**! But we're not looking at the right patients with the right tumors."

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

> "Are we leaving something on the table?"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./failure-funnel.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Noetik 的赌注：先花两年只收数据

<div class="text-sm opacity-70 mb-4">在大模型时代，最反直觉的事情之一——不急着 train，先把数据基础修对。</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">

> "Ron and Noetik had the conviction to spend **almost two years** just collecting data. **Lots, and lots, and lots, of data.**"

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup, "Blind Faith in Data Collection"</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 时间投入
<div class="text-3xl font-bold text-orange-600 my-2">~2 yrs</div>
<div class="text-xs opacity-70">没有产品发布，只在收样本</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 样本数量
<div class="text-3xl font-bold text-green-600 my-2">thousands</div>
<div class="text-xs opacity-70">"thousands of actual human tumors"</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 图像规模
<div class="text-3xl font-bold text-purple-600 my-2">100M+</div>
<div class="text-xs opacity-70">"hundreds of millions of images"</div>

</div>

</div>

---
layout: two-cols
---

# 多模态——四根柱子

任何一种模态单独看都不够，叠在一起才能勾出"这是哪种肿瘤"。

<div class="mt-3 grid grid-cols-2 gap-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**Spatial transcriptomics**<br/>
RNA 在 tissue 里的位置 + 基因。"over 1000 channels"——whole-plex。

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**Spatial proteomics**<br/>
蛋白层。基因表达不一定会被翻译。

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**H&E imaging**<br/>
病理科常规染色——every patient already has it.

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**Whole exome sequencing**<br/>
这个肿瘤的 DNA 突变图谱。

</div>

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

四种模态拼在一起 → Noetik 的"虚拟细胞"自监督模型。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-pillars.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 真实人体肿瘤 vs 替代品

<div class="text-sm opacity-70 mb-4">这一句信息量很大——它在反对整整一代生物医学 ML 的范式。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-red-500 bg-red-50 rounded">

> "These are **real human tumors**, not **frankenstein mouse models** or **immortal cell lines**."

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-gray-100 border-l-4 border-gray-400 text-sm">

### 路线 A
**Mouse models** — 把人类肿瘤移植到小鼠身上。便宜、可控、但不像人。

</div>

<div class="p-4 rounded bg-gray-100 border-l-4 border-gray-400 text-sm">

### 路线 B
**Immortal cell lines** — 在培养皿里能传代千次的肿瘤细胞。和原始肿瘤已经差很远。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Noetik 的路线
直接收**真实人体肿瘤**。难、贵、慢——但分布对了。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**作者概括**：在 LLM 那边大家学到的是 "data quality > data quantity"——这句话搬到肿瘤建模上就是 "real tumors > convenient surrogates"。

</div>

---

# "Virtual cell"：自监督的肿瘤大脑

<div class="text-sm opacity-70 mb-4">"虚拟细胞"——不是单个细胞的复制品，是肿瘤里"细胞群落"的可计算抽象。</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base">

> "This data is then fed into a massive **self-supervised model**, creating a '**virtual cell**'."

</div>

<div class="mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-base">

> "This model has a deep understanding of cancer biology — Noetik has worked carefully to show it can **distinguish different types of tumors**. Maybe even tumors we **didn't identify as distinct previously**!"

</div>

<div class="mt-4 p-5 rounded bg-green-50 border-l-4 border-green-500 text-base">

> "More recently they figured out how to scale up their model and data, and **see no limit in their scaling laws**!"

</div>

<div class="mt-4 text-xs opacity-60">
也就是说——和 LLM 一样的剧本：模型变大 + 数据变多 → 性能持续上扬，没看到饱和点。
</div>

---
layout: two-cols
---

# TARIO-2：从最普通的检查推出最贵的检查

H&E 是病理科的"基础切片"——每个癌症病人都做。

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

> "**TARIO-2**, an autoregressive transformer trained on one of the largest sets of tumor spatial transcriptomics datasets in the world."

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

> "TARIO-2 can now predict an **~19,000-gene spatial map** from the **H&E assay every patient already has**."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**作者概括**：把昂贵的 whole-plex 空间转录组测量"蒸馏"成对一张普通切片的预测。一旦预测够准——临床端的边际成本几乎为零。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tario-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那个 "~0%" 的数字

<div class="text-sm opacity-70 mb-3">整篇文章里最让人停下来想三秒的句子——把 platform shift 一句话讲明白了。</div>

<div class="mt-3 p-4 italic border-l-4 border-red-500 bg-red-50 rounded">

> "Whole-plex spatial transcriptomics is the **richest way to read a tumor**, and **approximately ~0% of cancer patients going through standard care ever get one**."

<div class="text-xs opacity-60 mt-2 not-italic">— Latent Space writeup</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400 text-sm">

### 现状
最丰富的数据 → ~0% 的病人能拿到。太贵、工序复杂、只在研究项目里采。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### TARIO-2 之后
从已经存在的 H&E 切片**预测**出来——边际成本接近 0、覆盖所有病人、即时可查。

</div>

</div>

---

# Scaling laws 第一次踩到湿实验科学

<div class="text-sm opacity-70 mb-4">"see no limit" 在 LLM 圈很常见，在生物 ML 圈是很大的判断。</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base">

### 老传统
生物数据"嘈杂、稀疏、分布漂"——大家心照不宣地认为模型扩到一定规模就饱和。

很多 BioML 团队把精力花在**特征工程 + small model**。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 text-base">

### Noetik 的发现
> "see no limit in their scaling laws!"

模型变大 + 数据变多依然带性能。和 LLM 那条曲线一样的剧本。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**为什么这个判断重要**：如果 scaling laws 在这里也成立，那 Noetik 的护城河会随时间**变深**——他们手里的"thousands of human tumors + hundreds of millions of images"是别人短期补不齐的训练前提。

</div>

---
layout: two-cols
---

# 最有杠杆的应用：drug repurposing

模型能够**模拟病人对药物的反应**——这开了一条不需要新分子的药开发通路。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

> "Noetik's models can **simulate how a patient will respond to experimental treatments**."

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

> "They are working with partners to test promising drugs that were demonstrated to be **safe, but not effective**."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

> "If these models work as hoped, Noetik will bring new cancer treatments to patients **without developing a new drug**!"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./repurpose-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# GSK $50M：第一次 Pharma 在为软件付钱

<div class="text-sm opacity-70 mb-4">这不是一个 milestone-based pharma deal——是一个 software licensing deal。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

> "**GSK recently signed a $50M deal** for their technology that also includes an (undisclosed) **long-term licensing deals for Noetik's models like the recently announced TARIO-2**."

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 多数 BioTech AI 故事
> "Most big AI plays in BioTech have focused on discovery, and usually result in an **in-house development effort** (meaning **tools companies usually become drug companies**)."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Noetik 这次的不同
> "This deal stands out in that it is a **software licensing deal**, and represents a commitment to a **platform** rather than a **drug**."

</div>

</div>

---
layout: two-cols
---

# 平台 vs 药企：少有人走的路

历史上，AI BioTech 最终都被市场重力拉成了药企。Noetik 想留在平台这一边。

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**为什么 tools → drugs 是个引力场**：
- 投资人想要"upside"
- 药品有专利和临床数据保护
- 软件没那么好"被估值"

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Noetik 反方向走的代价**：
- 估值方式不一样
- 收入靠合作而非药品销售
- 但护城河是模型 + 数据

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

> "Big Pharma is licensing AI Models" — Latent Space writeup, 副标题

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./platform-vs-drug.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Pharma 的胃口在变大

<div class="text-sm opacity-70 mb-4">这是行业层面的 inflection——不只是 Noetik 一家。</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base">

> "With attention on other software tools for drug development (see the **Boltz episode** and **Isomorphic** for example), it is starting to look like the **appetite of Pharma for biotech tools has finally started to grow**."

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Boltz
开源结构预测——Latent Space 之前一期专门讲过。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Isomorphic
Alphabet 旗下的 drug-design AI——多个大型 Pharma 合作。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Noetik (TARIO-2)
肿瘤匹配 + 重定位的平台层——GSK 是首个公开 license。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：每个药企都开始接受"我自己不需要训这个 base model，我去 license 一个"。

</div>

---

# 两条作者愿意打赌的论点

<div class="text-sm opacity-70 mb-4">Latent Space 在文末没有过度兜售——但他们明确签下了两条赌注。</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl">

> "**Translation from lab to clinic is the biggest bottleneck for drug development.**"

</div>

<div class="mt-4 p-6 rounded bg-green-50 border-l-4 border-green-500 text-xl">

> "**Better cohort selection using biomarkers is likely to improve translation from lab to clinic.**"

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

> "Ron and Dan make pretty persuasive arguments that their models will truly **assist in cohort selection in useful ways** and this seems valuable."

</div>

<div class="mt-4 text-xs opacity-60">
两条话拼在一起：如果 lab→clinic 是最大的瓶颈，而 cohort selection 又能帮 lab→clinic——那这家公司站在一个非常好的位置上。
</div>

---

# 作者收尾：这是 AI 真正"无可争议好"的一面

<div class="mt-6 p-6 text-base border-l-4 border-blue-500 bg-blue-50 rounded">

> "Stepping back a bit from the technology, **curing cancer is a pretty unambiguously positive application of AI**. It is also a very hard problem to solve."

</div>

<div class="mt-4 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-base">

> "Our guess is that **most people have been impacted by cancer or will be at some point soon**."

</div>

<div class="mt-4 p-5 rounded bg-green-50 border-l-4 border-green-500 text-base">

> "And we hope that learning about the amazing work that companies like Noetik are doing will **inspire a generation of AI engineers to work on the hardest and most exciting problems that society faces**."

<div class="text-xs opacity-60 mt-3 not-italic">— Latent Space writeup, 文末</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这一期 Latent Space writeup 里最值得记住的几句——全部来自原文：</div>

<div class="grid grid-cols-2 gap-4">

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"95% failure rate in clinical trials."
<div class="text-xs opacity-60 mt-1 not-italic">— 全文核心数字</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"it may be a matching problem"
<div class="text-xs opacity-60 mt-1 not-italic">— 整篇文章的 reframe</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"saying you'll 'cure cancer' is like saying you'll solve legos."
<div class="text-xs opacity-60 mt-1 not-italic">— 开篇比喻</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"real human tumors, not frankenstein mouse models or immortal cell lines."
<div class="text-xs opacity-60 mt-1 not-italic">— 数据策略一句话</div>
</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"approximately ~0% of cancer patients going through standard care ever get one"
<div class="text-xs opacity-60 mt-1 not-italic">— TARIO-2 的临床意义</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"see no limit in their scaling laws!"
<div class="text-xs opacity-60 mt-1 not-italic">— 模型扩展空间</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"a software licensing deal … a commitment to a platform rather than a drug."
<div class="text-xs opacity-60 mt-1 not-italic">— GSK $50M 的特殊性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Translation from lab to clinic is the biggest bottleneck for drug development."
<div class="text-xs opacity-60 mt-1 not-italic">— 文末作者赌注 1</div>
</div>

</div>

</div>

---
layout: end
---

# "It may be a matching problem."

<div class="mt-6 text-base opacity-70">

— Latent Space, on Noetik's bet that most failed cancer drugs already work — for the right patient.

</div>

<div class="mt-12 text-xs opacity-50">
Latent Space · Training Transformers to solve 95% failure rate of Cancer Trials<br/>
Ron Alfa & Daniel Bear, Noetik · youtube.com/watch?v=uqM8qjbLRHA
</div>
