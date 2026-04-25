---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Jensen Huang — Will Nvidia''s moat persist?'
info: |
  Dwarkesh Patel × Jensen Huang。2 小时高强度对谈：
  从 "electrons → tokens" 的公司哲学、上下游生态、五层 AI 堆栈，
  到与 TPU/ASIC 的竞争、对 Anthropic 的 "my miss"、以及一场关于
  China 出口管制的激烈辩论。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Jensen Huang

### Will Nvidia's moat persist?

<div class="mt-6 text-sm opacity-70">

Dwarkesh Patel Podcast · 2-hour deep dive

</div>

<div class="mt-10 text-xs opacity-50">

Nvidia CEO on: electrons-to-tokens · the 5-layer AI stack ·
TPU vs. accelerated computing · the Anthropic "miss" · China

</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司哲学
"the input is electron, the output is tokens" —— Nvidia 对自己的 mental model

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 护城河的结构
上游供应链 + 下游开发者 install base + CUDA —— 不是一件事，是飞轮

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 对 TPU / ASIC 的回应
"accelerated computing is not a tensor processing unit" —— 面更宽

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### "My miss" —— Anthropic
Jensen 承认早期没能投 Anthropic —— 因为 "VCs 永远不会投 5-10B"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### China 大辩论
五层蛋糕 vs 零和管制 —— 40 分钟激烈交锋

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 节奏承诺
"every single year. I can count on it like I can count on the clock."

</div>

</div>

---
layout: two-cols
---

# Nvidia 的 mental model

**Dwarkesh 的挑战**：Nvidia 只发 GDS2 文件给 TSMC，其他人做制造。如果软件被 AI 商品化了，Nvidia 也会被商品化吗？

**Jensen 的回答**：

- 中间那段 "electrons → tokens" 的转换是**极难**的
- 把一个 token 做得比另一个 token 更有价值 —— 这里的 artistry、engineering、science 远未被理解
- "the transformation... is far from over"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./electrons-to-tokens.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "as much as needed, as little as possible"

<div class="text-sm opacity-60 mb-4">Jensen 反复提到的公司哲学 —— 既是战略，也是扩张边界的准绳：</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 做的事
- 自己做 CUDA、MVLink、整个计算栈
- "if we didn't do it, nobody else would have done it"
- 20 年亏钱也要坚持 CUDA

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不做的事
- 不做 foundry（TSMC 做）
- 不做 memory、ODM、rack（partner 做）
- 不做 hyperscaler —— "the world has lots of clouds"
- 不做 foundation model —— 投资但不自己做

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 italic">
"We should do as much as needed as little as possible."
</div>

---
layout: two-cols
---

# 护城河：信息对齐的飞轮

Jensen 的核心工作其实是**在上下游之间传递信号**：

- 他告诉 memory CEO "这个行业会有多大"
- 他让上游相信下游的 demand 会在那里
- 他把 upstream 和 downstream 带到 GTC —— "they need to see each other"

<div class="mt-3 text-xs opacity-60">
"my keynotes, some people always say... it's one announcement after another.
In fact there's always a part of it that's a little torturous...
an education."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 瓶颈的时间尺度

<div class="text-sm opacity-60 mb-4">Dwarkesh 问：N3 你已经是最大客户，明年是 60% → 86%。你怎么继续 2×？</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2–3 年可解
- co-as 封装 —— "we swarmed the living daylights out of it"
- HBM 内存
- 逻辑产能
- EUV 机器（只要 TSMC 被说服）

<div class="mt-2 text-xs opacity-70">
"none of the bottlenecks last longer than a couple 2 three years. None of them."
</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 真正难的
- **能源政策**
- plumbers & 电工
- re-industrialize 的基础设施

<div class="mt-2 text-xs opacity-70">
"you can't create an industry without energy."
</div>

</div>

</div>

---

# 水电工笑话，但是真的

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">
"at any instant any instance we could be limited by the number of plumbers... which actually happens."
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dwarkesh 的调侃
"The plumbers are invited to next year's GTC."

Jensen: "Yeah. By the way, great idea."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Jensen 的真论点
这也是他反对 "AI 取代工作" 的末日论的理由 —— 10 年前有人说别学 radiology，结果现在 radiologist 短缺。"guess what? we're short of radiologists."

</div>

</div>

---

# Blackwell vs Hopper：50×

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Moore's law（晶体管本身）
<div class="text-4xl font-bold text-blue-600 my-2">75%</div>
<div class="text-xs opacity-70">Hopper → Blackwell，3 年</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 纯 Moore's law 年增长
<div class="text-4xl font-bold text-orange-600 my-2">~25%</div>
<div class="text-xs opacity-70">已经 "dead" 的级别</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Blackwell 能效提升
<div class="text-4xl font-bold text-red-600 my-2">50×</div>
<div class="text-xs opacity-70">vs Hopper（Dylan Patel 说是 50 倍，Jensen 原本只讲 35 倍）</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500">
原话：<em>"I said it was 35 times... Dylan wrote an article. He said in fact I sandbagged it's actually 50 times. And you can't reasonably do that with just Moore's law."</em>
</div>

---

# 算法和架构 > 单纯硅

Jensen 反复强调：AI 最大的 leap 不是来自晶体管，而是 co-design 整个堆栈。

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 可以放进硅
- MVLink 直接把计算塞进网络结构（fabric）
- Spectrum X 网络里做一部分 AI 计算
- 新的 attention mechanism / 新的并行方式

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可以放进软件
- 新的 CUDA kernels
- 算法层面每年 10× / 100× leap
- 伟大的 computer science：像 DeepSeek、attention 机制都是算法 reduce compute

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 italic">
"most of the advances in AI came out of algorithm advances, not just the raw hardware."
</div>

---

# GPU ≠ TPU

<div class="text-sm opacity-60 mb-4">Dwarkesh: TPU 是 systolic array，对 matrix multiply 是完美的。为什么不用？</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"what Nvidia built is accelerated computing. Not a tensor processing unit."
</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 加速计算的市场
molecular dynamics · quantum chromodynamics · data frames ·
structured / unstructured data · fluid dynamics · particle physics · **也包括 AI**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### AI 里面的多样性
- 新 attention mechanism
- hybrid SSM
- diffusion + autoregressive 融合
- "matrix multiplies is an important part of AI but it's not the only part"

</div>

</div>

---
layout: two-cols
---

# F1 赛车 vs 凯迪拉克

Jensen 对 "hyperscaler 都能自己写 kernel" 的回应：

- CPU 是 Cadillac —— 谁来都能开，cruise control
- GPU 是 **F1 racer** —— 人人能开到 100 mph，但**榨到极限**需要专业
- Nvidia 自己的工程师帮 AI lab partner 把性能再拿 2×、3× 出来
- "我们用大量 AI 来写 kernels"

<div class="mt-3 text-xs opacity-60">
"by the time we're done optimizing their stack or optimizing a particular kernel,
their model sped up by 3x 2x 50%."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./f1-vs-cadillac.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# CUDA 的飞轮

<div class="text-sm opacity-70 mb-4">
为什么一个开发者哪怕能写 Triton / VLM / SGLang，
最后还是会 build on CUDA first？
</div>

- **install base**：几亿张 GPU，从 A10 到 H200 全在那里
- 在 **每一个** cloud 里（AWS / Azure / GCP / OCI）都能跑
- robotics 芯片里也有 CUDA —— "literally everywhere"
- 你写的软件，运行在别人的 fleet 上才有价值

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 text-xs italic">
"the single most important thing you want more than anything is install base."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cuda-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么不只是 spec 战

Dwarkesh 的疑问：如果 top 客户都能自己写 stack，那不就变成单纯 "flops / watt / $" 的比较吗？

<div class="mt-5 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### perf / $
最低 token 成本 —— "lowest cost tokens"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### perf / watt
"highest tokens per watt architecture in the world"
<div class="text-xs opacity-60 mt-1">1 GW 数据中心 → 最多 tokens → 最多 revenue</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 最多 offtaker
"most customers in the world" —— 租卡给你的云，也得靠 Nvidia 才能找到租客

</div>

</div>

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 italic text-lg">
"Nvidia's computing stack is the best performance per TCO in the world, bar none. Nobody can demonstrate to me that any single platform in the world today has better performance TCO ratio. Not one company."
</div>

---

# "There's only one Anthropic"

<div class="text-sm opacity-60 mb-4">关于 "AI 大客户都在转 TPU / Trainium" 这个叙事，Jensen 直接怼：</div>

<div class="grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Jensen 的反驳
- "Anthropic is a unique instance and not a trend"
- "without Anthropic, why would there be any TPU growth at all? It's 100% Anthropic"
- "without Anthropic, why would there be any Trainium growth at all? It's 100% Anthropic"
- OpenAI "vastly Nvidia"（原话）

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他愿意承认的
- 新 ASIC 出来 → "you still have to build something better than Nvidia"
- 很多 ASIC 项目已经被取消
- "sometimes you got to be reminded" of how good Nvidia is

<div class="text-xs opacity-60 mt-2">
Jensen 接受竞争，但不接受 "trend is against us" 的叙事。
</div>

</div>

</div>

---

# "My miss" —— Anthropic 的往事

Jensen 少见地、直白地承认：早期没能投 Anthropic / OpenAI，是他的错误判断。

<div class="mt-5 space-y-3">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"my mistake is I didn't deeply internalize that they really had no other options... a VC would never put in 5-10 billion of investment into an AI lab with the hopes of it turning out to be Anthropic. And so that was my miss."
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**他当时的心态**：
- "we never invested outside the company at the time"
- "we didn't realize we needed to"
- "I always thought that they could just go raise VCs"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**现在**：已报道投 OpenAI 最多 30B，投 Anthropic 10B。<br/>
"We did it as soon as we could" —— 他没有否认结果，只是解释了时机。

</div>

</div>

---

# 不选赢家

<div class="grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 原则
- "when I invest in one of them, I invest in all of them"
- 投 OpenAI，也投 Anthropic、xAI、各家 AI 原生公司
- "we go out of our way not to pick winners"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 理由 —— "enough humility"
Nvidia 创业时有 **60 家 3D 图形公司**。<br/>
当时如果排一张 "谁会活下来" 的单子，Nvidia 会在**最不可能**那一档。

<div class="mt-2 text-xs opacity-70 italic">
"Nvidia's graphics architecture was precisely wrong. It's not a little bit wrong. We created an architecture that was precisely wrong."
</div>

</div>

</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 italic">
"either let them all take care of themselves or take care of all of them."
</div>

---

# 分配机制：不是价高者得

<div class="text-sm opacity-60 mb-4">Dwarkesh：Nvidia 给 neo-cloud 留配额，为什么不走 highest bidder？</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 实际规则
1. **先下 PO** —— "if you don't place a PO, all the talking in the world won't make a difference"
2. First-in-first-out
3. 如果你的数据中心没准备好（缺水缺电），我们可能先服务别人

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么不调价
- "you set your price. And then people decide to buy it or not."
- "I prefer to be dependable"
- "you don't need to second guess"

</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 italic">
Jensen 还主动澄清：Larry / Elon 跟他吃饭 "begged for GPUs" 的故事 —— "that never happened."
</div>

---

# TSMC 的 30 年：没有法律合同

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"Nvidia and TSMC don't have a legal contract."
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 时长
"coming up on 30 years" 的合作关系

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### "rough justice"
"sometimes I'm right, sometimes I'm wrong. Sometimes I got a better deal, sometimes I got a worse deal."

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 规模弹性
"I want to buy 1 billion. No problem." —— "just got to go through the planning... all the things that mature people do."

</div>

</div>

<div class="mt-6 text-xs opacity-60">

这段其实在说：Nvidia 能 scale 不只因为自己，是因为它跟 TSMC 之间有<strong>制度之外的</strong>信任网络。

</div>

---
layout: two-cols
---

# 每年一代，像钟表一样

Jensen 反复强调的节奏承诺：

- **this year** — Vera Rubin
- **next year** — Rubin Ultra
- **year after** — Feynman
- **year after that** — "I haven't introduced the name yet"

"I can count on it like I can count on the clock."

对客户的含义：
- 买 1 张 / 1 rack / 1 亿 / 1000 亿 AI factory —— "no problem"
- token 成本每年**一个数量级**地下降

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./yearly-cadence.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "not a financier"

<div class="text-sm opacity-60 mb-4">Dwarkesh：你有这么多现金，为什么不自己做 cloud / hyperscaler？</div>

<div class="grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Jensen 的回答
"The world has lots of clouds. If I didn't do it, somebody would show up."

所以 Nvidia 只做**自己不做就没人会做**的那一层 —— CUDA、MVLink、CUDA-X libraries、KU Litho computational lithography。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为 OpenAI / Anthropic 破例
投资 OpenAI 30B，Anthropic 10B —— 因为 "it's still before their IPO and we deeply believe in them."

"the world needs them to exist... let's support them and let them scale."

但是：**"we're not trying to do as much as possible. We're trying to do as little as possible."**

</div>

</div>

---

# China 辩论 —— 前提

<div class="text-sm opacity-60 mb-4">这场对谈后 40 分钟的主轴。Dwarkesh 的基本立场：</div>

<div class="grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Dwarkesh 的 setup
- Anthropic 刚宣布 Mythos 模型，具备严重 cyber offensive 能力
- 美国 labs 有**更多 flops**，所以**先到这个能力**，能提前 patch
- 如果中国先到 —— 风险极大
- 所以控制出口，让中国"缺 compute"是有价值的

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Jensen 的反驳起点
"AI is a **five layer cake**"
- 从最底层到最上层都必须赢
- 把其中一层（chips）让给别人，不等于 "美国赢"
- "mythos was trained on fairly mundane capacity, and a fairly mundane amount of it"

</div>

</div>

---
layout: two-cols
---

# 五层蛋糕

- **Energy** 是所有东西的底层
- 如果 energy 稀缺 —— 你就得靠 perf/watt（US 的情况）
- 如果 energy 丰富 —— 你用 7nm 芯片堆也行（China 的情况）
- "if you have abundance of energy, it makes up for chips. If you have abundance of chips, it makes up for energy."

Jensen 的关键论点：**一层的优势可以弥补另一层的劣势**。制裁 chip layer ≠ 切断整个 AI 能力。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./five-layer-cake.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "They already have the compute"

<div class="text-sm opacity-60 mb-4">Jensen 的反驳核心：制裁假设 China 缺 compute，但这个前提就错了。</div>

<div class="grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 他列的现状
- **60%** 世界主流芯片中国造
- **50%** 全世界 AI 研究者在中国
- **second largest** computing market in the world
- 有 "ghost cities... ghost data centers... fully powered"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 推论
- 7nm 芯片 "essentially Hopper"
- "today's models are largely trained on Hopper"
- Huawei 刚有 "the largest single year in the history of their company"
- "if they wanted to, they just gang up more chips" —— 能源足够

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"the amount of threshold they need for the concern you're worried about, they've already reached that threshold and beyond."
</div>

---

# 算法大于硅

Jensen 反复把辩论拉回一个事实：

<div class="mt-3 p-5 bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"we could still improve algorithm performance by 10x. What I'm saying is great computer science is where the lever is."
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 他的推理链
- Moore's law ≈ 25%/年
- 算法进步可以做到 10× leaps
- **大部分 AI 进步来自算法，不是晶体管**
- 所以：AI researcher 数量比芯片制程更关键

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 最担心的情景
"the day that DeepSeek comes out on Huawei first, that is a horrible outcome for our nation."

—— 不是因为 chip 弱了，而是因为全球 AI 模型从此**不再 optimize for 美国 stack**。

</div>

</div>

---

# "I'm not a loser"

<div class="text-sm opacity-60 mb-4">当 Dwarkesh 说 "中国市场反正会输"，Jensen 情绪可见的激烈：</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 italic text-lg">
"you're not talking to somebody who woke up a loser. And that loser attitude, that loser premise makes no sense to me."
</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500">

### 他的论证
- Nvidia 的份额在**增长**，不是在减
- 放弃中国 = 放弃 40% 世界技术市场
- 放弃第二大 AI 市场 = 给对方 "accelerate their chip industry... forced all of their AI ecosystem to focus on their internal architectures"

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 italic">
"Conceding a marketplace based on the premise you described, I simply can't acknowledge that."
</div>

---

# 两个类比的交锋

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Dwarkesh（引 Dario）
"It's like Boeing bragging that we're selling North Korea nukes but the missile casings are made by Boeing."

—— AI 类似 enriched uranium。我们不会把浓缩铀给别的国家。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Jensen
"comparing AI to anything that you just mentioned is lunacy. It's a lousy analogy... it's an illogical analogy."

—— chips 是 China 自己也能造的，and they do. 类比微处理器、DRAM、电力更合适。

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"those extremes they're childish... the world is just not absolutes. It requires some amount of nuance, some amount of maturity instead of absolutes."
</div>

---

# 如果没有 AI，Nvidia 会是什么？

<div class="text-sm opacity-60 mb-4">Dwarkesh 的收尾问题 —— Jensen 的回答意外地朴素：</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 italic text-lg">
"accelerated computing. The same thing we've been doing all along."
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他的前提假设
通用计算 (general purpose computing) 的 scaling "has largely run its course"。

出路是 domain-specific acceleration。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 他点名的领域
molecular dynamics · seismic processing · image processing · 量子化学 · computational lithography (KU Litho) · structured data processing

"it's still very important. I know AI is very interesting and exciting. But there's a lot of people doing very important work that's not AI related."

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">最值得记住的几句（全部 grep 验证过原文）：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"the input is electron, the output is tokens, that is in the middle Nvidia."
<div class="text-xs opacity-60 mt-1 not-italic">— Jensen 自述公司 mental model</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"We should do as much as needed as little as possible."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 Nvidia 不做 foundry、不做 cloud、不做 foundation model</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"none of the bottlenecks last longer than a couple 2 three years. None of them."
<div class="text-xs opacity-60 mt-1 not-italic">— 对 "supply chain 跟不上" 的回应</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Anthropic is a unique instance and not a trend."
<div class="text-xs opacity-60 mt-1 not-italic">— 对 ASIC / TPU 叙事的还击</div>
</div>

</div>

---

# 核心金句（二）

<div class="space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"my mistake is I didn't deeply internalize that they really had no other options... that was my miss."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于没能早点投 Anthropic</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"you're not talking to somebody who woke up a loser."
<div class="text-xs opacity-60 mt-1 not-italic">— 当 Dwarkesh 说 "中国市场反正会输"</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"most of the advances in AI came out of algorithm advances, not just the raw hardware."
<div class="text-xs opacity-60 mt-1 not-italic">— 算法大于硅的核心论断</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"every single year. I can count on it like I can count on the clock."
<div class="text-xs opacity-60 mt-1 not-italic">— 对客户的节奏承诺</div>
</div>

</div>

---
layout: end
---

# "Life is not like that."

<div class="mt-6 text-base opacity-70 italic">
"it requires some amount of nuance, some amount of maturity instead of absolutes. The world is just not absolutes."
</div>

<div class="mt-8 text-xs opacity-50">
Jensen Huang × Dwarkesh Patel · 2026
</div>
