---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Fixing GPU Starvation in Large-Scale Distributed Training'
info: |
  Kashish (Uber) talks to Demetrios (MLOps.community) about why your GPU is at 20%
  utilization, the data-IO problems hiding under "the model is too big", and a
  Sherlock-Holmes-grade Petastorm bug that turned a day of training into an hour.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Fixing GPU Starvation
## in Large-Scale Distributed Training

<div class="mt-8 text-lg opacity-80">
Kashish · Uber ML Infra · 与 Demetrios @ MLOps.community
</div>

<div class="mt-12 text-sm opacity-50">
"These GPUs have become so precious… that if you are not able to feed them<br/>
and you're starving the GPUs, you're not doing a good job." — Kashish
</div>

---

# 这一期讲什么

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### GPU 不是被算力卡住的
**永远是数据 IO**。模型架构、量化、注意力——通通不是瓶颈。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一段 Sherlock 式排错
H100 集群挂在 15-20% 利用率。RAM 实验、SSD 缓存、追踪——直到第 6 步才找到真凶。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### "double bottleneck"
表面是远程读慢，**底下还藏着一层** PyArrow → NumPy 的隐形转换。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Training vs Serving 是两场战争
训练有缓冲；推理是延迟与利用率的零和博弈。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 并行化也有暗面
吞吐上去了，模型 AUC 反而抖动——因为你打破了 batch order 的确定性。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 顺带 debug 一台 DGX Spark
为什么 Claude Code on local 慢得像狗？答案是 warm start，不是模型大小。

</div>

</div>

---

# 嘉宾：Kashish

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 现在
**Uber Stop Engine** · marketplace matching team lead
ML infrastructure · 主攻 scalability & efficiency

### 之前
**Google** · YouTube Ads · Core Search Ranking

### 主张
> "Whenever we want to scale the model,
> it's never the model, which is a culprit."

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个一以贯之的观察

无论是 Google 的 TPU 还是 Uber 的 GPU：

- 模型架构？基本不是问题
- 量化？没那么大差距
- 真正的元凶 → **基础设施里的数据 IO**

> "These bottlenecks exist everywhere<br/>
> in one form or the another, and they are solvable."

</div>

</div>

---

# 核心论点：Starving the GPU

<div class="mt-4 p-6 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">

"These GPUs have become so precious, so like a scarce resource that if you are not able to feed them and you're starving the GPUs, you're not doing a good job."

</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是资源问题

> "It is productivity as well."

GPU 队列里抢得头破血流，每一个 slice 都金贵。利用率掉 20%，等于五分之一的预算白烧。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 也不是 ML 工程师的活

> "Do they have to worry about how the data is coming to the GPU?"

他们调架构、对 label、调注意力。**喂饭这件事，infra 团队负责。**

</div>

</div>

---

# Google 故事 #1：从 Parquet 里点读，是不是太贵了？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 现象
小模型、小数据切片。所有人都用 Parquet——列存，按理很快。

### 但是
> "It's not efficient to read a slice of data from that pocket tables when you only care about a few row."

读一行，先 load 一整页再 filter。**CPU 全在浪费**。

### 修法
按模型实际访问的 slice 重新组织 disk 上的数据布局——这样能 **batch read** 而不是 point read。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 作者概括（gloss）

这不是 ML 问题，是 <strong>"数据写盘的方式没考虑读模式"</strong>——经典的 software engineering 问题，但披着 ML infra 的外衣。

<div class="mt-4 text-sm opacity-70">
点读 = 浪费 CPU<br/>
batch 读 = 同样的数据，吞吐立刻翻倍
</div>

</div>

</div>

---
layout: two-cols
---

# Google 故事 #2：Recsys 的 query 重复

经典推荐场景：
- 一个 query → 几千个候选 item
- 每个 (query, item) 是一行 training example

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**naive 写法**：每个 item 行都重复一份完整 query feature

> "you have duplicate query features for each item and you're throwing it in. This is like a far blob of data you're passing and it's expensive."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**优化**：query 只发一次，item 打包发，
**unflatten on GPU 在 forward prop 之前**

> "Don't duplicate, pack and unpack."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pack-unpack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 现在切到 Uber：A blog is coming

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 问题陈述

> "Our models were struggling on a 100 chips at 15, 20% utilization."

<div class="mt-4 text-sm opacity-70">
利用率 15-20% = 一份硬件，烧四份钱、训四倍的时间。
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么现在才暴露

> "If you go to B 200, you are gonna waste it a lot. Like they are very fast … they're so hungry that they'll eat up whatever data you're passing."

GPU 越快，"喂不饱"的现象越严重——以前不是问题的，现在变成头号问题。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**接下来 6 步**——一个完整的工程排错故事。Kashish 在播客里第一次公开讲这套调试过程，对应的 Uber blog "a week or two" 内会发出来。

</div>

---
layout: two-cols
---

# Petastorm 是什么

<div class="mt-4">

Uber 的开源分布式训练数据管线（已有，不是这次新建的）。

### 角色分工

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Producer** — 从远程文件系统读 Parquet，塞进 queue

</div>

<div class="mt-2 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Queue** — 应该一直是满的

</div>

<div class="mt-2 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Consumer** — 切 batch、转 tensor、推给 GPU

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm font-semibold">

不变的目标：**queue 永远不空**——GPU 才不会饿着。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./producer-consumer.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 第 1 步：先把模型这个变量消掉

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 实验设计

> "as a software engineer, you always try to remove the variables."

把 IO 完全短路——**整个数据切片直接 load 进 RAM**，不读盘、不读网络，直接喂 GPU。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 结果

<div class="text-4xl font-bold text-green-700 my-3">85%</div>

GPU 利用率瞬间从 15-20% 跳到 85%。

> "So we understood: model is correct."

模型没毛病。瓶颈一定在数据通路上。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**这个 85% 之后会变成调试的"灯塔"**——只要还没回到这个数，就说明真凶还没抓到。

</div>

---

# 第 2 步：拧旋钮——失败

<div class="text-sm opacity-60 mb-2">软件工程师的本能反应。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-center">

### Threads ↑
增加 CPU 读线程数

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-center">

### Parallelism ↑
更多并发 worker

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-center">

### Queue size ↑
更多缓冲

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-lg italic">

"Maybe we get lucky in life and everything works and we just move forward with the problem space, but didn't happen."

</div>

<div class="mt-4 text-sm opacity-70">
所有"通用 dataloader 调优秘籍"轮了一遍——利用率纹丝不动。
</div>

---

# 第 3 步：装追踪——发现 queue 是空的

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 在 Petastorm 各阶段加 tracing

producer 端、queue 端、consumer 端，全打点。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 真相

> "It's not, it's empty."

**应该满的 queue 是空的。**

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

> "We are not reading the data fast enough from the pake. Loading it in queue and that's why consumer can't do shit. … So the utilization was basically very wobbly in some sense. As soon as we fast the data, it just passed through it directly to GPU."

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

利用率"很 wobbly"：偶尔有数据时立刻冲一下，然后又 idle 等下一批。**典型的 producer-bound 形态。**

</div>

---

# 第 4 步：本地 SSD 缓存

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 想法

> "These chip sets now have disk. They have SST. What if we just cache it? We don't have to make remote calls."

第一个 epoch 读到的 Parquet 落在本地 SSD，第二个 epoch 起从本地"bombard locally"，**不再走远程**。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 容量怎么办

> "Even if you have more data, whatever amount, let's say 50 terabyte or something, you can at least cache that."

至少能缓解远程 row-group 的逐次拉取。

</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500">

### 实现完了

实现简单。queue 现在**真的满了**。

…然后我们点了 launch。

</div>

---

# 第 5 步：despair moment

<div class="text-sm opacity-60 mb-3">软件工程师剧本失灵。</div>

<div class="mt-2 p-6 rounded bg-red-50 border-l-4 border-red-500 text-xl italic">

"Nothing changed. Like the queue is full, but utilization didn't change. … this was like a despair moment for like a software engineer."

</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 矛盾

- queue 是满的 ✅
- 但 GPU 还是 15-20% ❌
- 在 RAM 里跑能到 85% ✅

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 对照

> "Why did loading the data in the memory work like it? If it works, then our solution should also work because we also have a data in the queue."

**两个配置都有满 queue，为什么一个能上 85% 一个不能？**

</div>

</div>

---
layout: two-cols
---

# 第 6 步：双重瓶颈

<div class="mt-2 text-xs opacity-60">"a very funny story…"</div>

<div class="mt-2 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**发现** — 读 Parquet 出来是 **PyArrow 格式**：列存优化、可切片、可查询。

</div>

<div class="mt-2 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**但 GPU 不吃 PyArrow**

> "GPU doesn't understand shit. … It only needs dense tensors."

PyArrow → NumPy 的转换**在每次出队时**做——把 RAM 实验里那 85% 的余量**吃光了**。

</div>

<div class="mt-2 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

> "So it was more of, how should I say, a double bottleneck."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./double-bottleneck.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 修法：缓存"转换后"的结果

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 一行话的 fix

> "We can just cache the transform output. We really don't need to do transformation every time."

cache 里直接存 NumPy。queue 里出来的就是 GPU 能直接吃的 tensor 雏形。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 利用率

<div class="text-4xl font-bold text-blue-700 my-2">85%</div>
原来的 RAM 实验同款数字回来了。

### 训练时间

<div class="text-2xl font-bold text-blue-700 my-2">1 day → 1-2 hours</div>

<div class="font-bold">同样的 GPU 集群。</div>

</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "And we were like, yeah, dude, you…"
> — Demetrios: "like Sherlock Holmes over here trying to figure out what the problem is."

</div>

---
layout: two-cols
---

# 那张利用率柱状图

四次实验的对照表：

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<b>原始</b> — 15-20%（饿着）
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>RAM 全 load</b> — 85%（理论上限）
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<b>SSD 缓存 Parquet</b> — 没变化
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<b>NumPy 缓存</b> — 85%
</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**关键 insight**：第二步的"无变化"才是最值钱的信号。它告诉你存在第二层瓶颈。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./utilization-jump.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 切入下一战场：Training vs Serving

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

> "Training is more offline. You don't have to worry about a lot of things, and you have more breathing room … In serving, you are in a war between the two main variables."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Training
- 离线、可重跑
- 可以缓存一切
- 数据 IO 是主战场（前面那一段）

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Serving
- **Latency** — 多快出结果
- **Utilization** — GPU 算力别浪费
- 二者天生对立

</div>

</div>

---
layout: two-cols
---

# Latency vs Utilization：零和游戏

<div class="mt-2 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**选项 A — 拿到啥跑啥**
batch 不满就用 padded fake data 凑齐
→ 快，但浪费算力

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**选项 B — 等 batch 攒满**
> "When you say wait enough, you're adding latency."
→ 利用率高，但延迟爆掉

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**Kashish 在 Ads 的选择** —— "we really need to be as fast as possible" → 选 A，烧 GPU 换毫秒

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latency-utilization.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 反直觉：CPU 比 GPU 更贵

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### CPU 推理的代价

8 个线程，每个线程跑一行 forward prop 顺序进行——**没法做大 batch**。

> "On CPUs, your cost would actually be more than GPU if you actually run those model on CPU."

代价 = 你需要跑的实例数 × 每实例成本。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### GPU 即使浪费也更便宜

> "We were fine with the wasted batches still being on GPU than go on CPU."

GPU 有 batch capacity 兜底。**哪怕浪费一半，单位 QPS 成本还是低于 CPU。**

</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

这条结论对很多团队是反直觉的——"小模型，CPU 不就够了？" 在大流量下，账算不过。

</div>

---

# Serving 的 IO 又来了

<div class="mt-4 text-sm opacity-60">同样的故事，换个皮。</div>

<div class="mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

batch size = 1000，每行 200 features → 你需要把 **1000×200** 的矩阵传到 GPU 端点。

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 选项 1：客户端打包
全在请求里发过来——网络成本直接付钱。
> "A very big request over the wire."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 选项 2：endpoint 自取
GPU endpoint 从 Cassandra / Redis 拉特征——**轰炸特征服务**。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

> "Either a client pays it, or a GP endpoint pays it. … Unless you have the full matrix, you cannot run a forward product."

**GPU 又被"喂不饱"**——只是这次饿在 online 一侧。Online 还更难，因为需要新鲜的实时 feature，缓存价值大打折扣。

</div>

---

# 另一条暗线：可复现性 vs 并行度

<div class="mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

提高 Petastorm 并行度后，Kashish 发现一个奇怪的现象：

> "One model is run on the same data can give you some AUC in same run, and again, on the same data can have a better AUC or worse AUC."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 根因

并行度上去了 → workers 抢 master queue 的顺序变了 → batch 里的 label 分布**偏度**变了 → AUC 漂移。

> "The skewness in the labels affecting the model quality."

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一句话总结

效率 ↑ 但**确定性 ↓**，模型质量被偷偷拐走了。

> "You are hurting the model quality."

</div>

</div>

---
layout: two-cols
---

# Michelangelo 团队的修法

<div class="mt-1 text-xs opacity-60">Uber-wide ML infra team</div>

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**重写 queue 拓扑** — master queue 一锅炖 → **per-worker queue** + 预先决定任务划分

</div>

<div class="mt-2 p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**预分配** —
> "We basically pre allocate everything … or pre decide everything before even we start training … such that … it's deterministic."

</div>

<div class="mt-2 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**收益** — 同一 seed → 同一 batch order → 同一 AUC；不牺牲并行度；模型质量回来了

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./per-worker-queues.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 并行度有上限——核会"忽略你"

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Demetrios 的问题
> "Is there a place where that starts to degrade? Like did you find, hey, after a certain point you start to see losses?"

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Kashish 的回答
不是 loss，是**no gains**。

> "Even if [you] specify, let's say 200 thread, it cannot allocate it. It'll just ignore it. … So whatever you specify, if you go outside the constraint or whatever the GPU is telling you, the CPU codes are telling you, it's not gonna increase it further."

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：你以为给 200 个线程它就跑 200 个，其实内核内部 round-robin 你能用的核数。**你只是在跟内核客气一下。**

</div>

---

# 现场 debug：朋友的 DGX Spark

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 用户报告

> "I've just purchased the DGX Spark for my office. We ran [Ollama] on it … Quinn 3.59 B and 27 B, deep seat coder and also GPT OSS … 120 B version."

Docker 里跑 Claude Code，**init 就要 10 分钟**。同一台机器上 `llama run` 直接快。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Kashish 的鉴定

第一直觉：网络（**1 Gbit**）。
但 init 也卡 10 分钟——这就奇怪了。

> "It shouldn't call anyone in practice in theory. Like it's just a start prompt."

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 真正的怀疑：warm-start 没做

> "Whenever you want to run an inference on these [GPUs], you need to send some QPS beforehand such that the memory is warm started. And if you don't do that, they would be very, very super, super slow."

</div>

---

# 用假流量"喂"GPU，让它别睡着

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Kashish 在 Uber 的做法

> "For these serving GPUs which we have, we maintain a QPS, a date or test QPS on those GPUs … with a fake data."

每个 inference GPU 一直收一股 fake QPS。生产请求来时就**不是 cold start**。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Demetrios 的总结

> "So you fake it. Yes. … just throwing it at it so that it never fully shuts down."

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 反直觉推论

朋友想"换个小模型"——Kashish 的回答：

> "The smaller model will waste the GPU, like the capacity. … if the GPUs have capacity, then you should use a bigger model."

**模型大小不是 latency 的对立面**——填满 GPU 才是。

</div>

---

# 转场：infra 之外的话题——agents

<div class="mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic">

"Just my director just flagged me. I'm the expensive engineer using [Claude Code], so [my] billing numbers are just going on the top. … It's fine. It's just a few dollars."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 当下心态

> "We are in a discount phase. It's a honeymoon period."

便宜，是因为还没到真账期。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 担心的事

> "If actual typeface kicking, I don't know how expensive [it] would [be]."

> "Like all the GPUs are getting erased from the [market]. Everyone wants it."



</div>

</div>

---

# Kashish 自己的 coding 工作流

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### "训"代理像训小孩
> "I have to tell, like, think five times before you reply. … Like I'm scolding a child or something."

强迫它多 reasoning 步——主观感觉答案变好。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不熟的语言更烫手
> "I don't, I'm not familiar with Go Language. So you're changing go, I really don't have any clue. Just make the change, make it work. I'll figure it out later."

承认 vibe coding，偶尔得给 **"this [Claude] guy"** 一顿 scolding。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Demetrios 的"brain dump"
> "Use voice mode to just brain dump at the beginning of a session … because it is a way to just get all of that context out of you."

打字会让你边写边压缩；语音让上下文一次倒完。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Rob 的小招（Demetrios 转述）
- 每个文件顶端 **TLDR 注释**
- 每个文件夹一个 **README**
> "By doing that, the agents are much more likely to … be able to search and understand what is where and what's working and what each file does."

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这一期最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It's never the model, which is a culprit."
<div class="text-xs opacity-60 mt-1 not-italic">— Kashish, 把 ML scaling 问题从模型推回 infra</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"These GPUs have become so precious … if you are not able to feed them and you're starving the GPUs, you're not doing a good job."
<div class="text-xs opacity-60 mt-1 not-italic">— Kashish, 这一期的 thesis</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"It was more of, how should I say, a double bottleneck."
<div class="text-xs opacity-60 mt-1 not-italic">— Kashish, PyArrow→NumPy 的 aha moment</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Nothing changed. … this was like a despair moment for like a software engineer."
<div class="text-xs opacity-60 mt-1 not-italic">— Kashish, SSD 缓存上线后那一刻</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"In serving, you are in a war between the two main variables. One is latency … the second is the efficiency or utilization."
<div class="text-xs opacity-60 mt-1 not-italic">— Kashish, 训练 vs 推理的根本差别</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"We are in a discount phase. It's a honeymoon period."
<div class="text-xs opacity-60 mt-1 not-italic">— Kashish, 当下用 Claude Code 的成本观</div>
</div>

</div>

---
layout: end
---

# 喂饱 GPU。

<div class="mt-8 text-lg italic opacity-80">

"GPUs are very good with maths.<br/>
If we are not … passing the data, they can't do their job."

</div>

<div class="mt-6 text-sm opacity-50">
— Kashish · MLOps.community
</div>
