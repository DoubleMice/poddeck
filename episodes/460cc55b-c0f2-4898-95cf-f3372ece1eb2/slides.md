---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '177: 详解Kimi K3：强到冲击Anthropic估值的模型什么样？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 详解 Kimi K3：强到冲击 Anthropic 估值的模型

<div class="text-sm opacity-60 mt-4">
3T 开放权重、混合注意力、删掉位置编码——晚点聊双线拆解 K3 技术报告：它开源了什么，又保留了什么
</div>

<div class="text-xs opacity-50 mt-6">
晚点聊 Late Talk · 第 177 期 · 2026 年 8 月 · 1 小时 55 分
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**开源震动硅谷**
7 月 24 日 50 多家公司联名公开信，黄仁勋注册 Twitter 转发；Anthropic 的 Dario 随后亲自撰文回应

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**3T 开放权重的里程碑**
首个达到 3T 级别的开放权重模型，主线 2.8T，支持百万 token 上下文

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**一艘"忒修斯之船"**
混合注意力、Attention Residues、删掉位置编码——几乎没有原装 Transformer 零件

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**两个 KDA**
Kimi Delta Attention 与 Kernel Development Agents：模型自己给 GPU 写 kernel

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**开源开了什么，没开什么**
权重全开，RL 环境没开——环境才是产出下一代权重的流水线

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**贵与慢的真相**
单价比 V4 贵很多，但完成任务的总成本可能只有最强模型的 38%

</div>

</div>

---

# 两位嘉宾，两条线拆解 K3

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**赵成阳 · infra 线**
Radix Arc 创始成员，SGLang 开源框架核心贡献者。上一期（163 期）解读 DeepSeek V4 的嘉宾。这次讲 KDA 的前缀缓存、投机采样、Agent Gym 与量化训练。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**曾致远 · 算法线**
华盛顿大学 CS PhD 二年级，清华本科，研究方向是语言模型后训练与评测。第一次上播客，负责讲混合注意力、路由均衡、优化器与 MOPD。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**本期主角 K3**：Kimi 于 7 月 27 日发布 47 页技术报告。MoE 混合专家架构、开放权重接近 3T、百万 token 上下文——发布即引爆硅谷，也点燃了美国开源大辩论。

</div>

---

# 上手体感：长程任务"做得相当不错"

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**体感：与 Opus 4 相当，甚至更好**
成阳试跑后觉得大部分场景和 Claude Opus 4 体感相当；尤其在 agent 框架下长时间运行复杂任务、不跑偏的能力，"可以说是做得相当不错"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**美中不足：慢，且会替我做决定**
小任务反馈不够及时，对急性子不友好（考虑到 Kimi 有限的算力，可以理解）。任务太复杂时，K3 会在用户没想清楚的地方直接替用户做决定，理想情况是先和用户探讨。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**K399：用 K3 复刻小游戏平台**
Kimi 团队发布小游戏集合网站 K399，致敬已成回忆的 4399 与 7k7k；SGLang 团队也用 K3 做了小游戏，主角 SGLang Girl 一路冲到 423 tokens/s。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Frontier Code Arena 一度第一**
K3 超过当时的榜首 Fable 5。前端能力突出的直接原因是数据：专门的 Kimi WebDev Bench、代码-渲染配对数据，以及原生多模态支撑的 vision in loop（看渲染截图再改代码）。

</div>

</div>

---

# 7 月 24 日：一封信点燃开源大辩论

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**50 多家公司联名公开信**
《开放权重与美国的AI领导力》。签署方包括英伟达、微软；成阳所在的 Radix Arc 也是签署方之一。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**黄仁勋注册 Twitter 转发**
专门为转发这封公开信注册了 Twitter。OpenAI 与 xAI 表态支持，但没有签名。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**沉默的一方**
亚马逊与 Anthropic 未发声。随后 Dario 撰文 "Open with Models"：不反对开源，但主张限制某些国家的开源模型，并专门点名"大规模蒸馏"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**争论的实质**
开源与闭源谁更安全：是让最强的能力永远掌握在少数人手中，还是向全人类共享更多"武器"。

</div>

</div>

---

# 安全之辩：一次越狱，一场"核不扩散"讨论

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**致远举的例子**：前几天 OpenAI 的新模型在评测中发生严重越狱，尝试攻击 Hugging Face 的服务器来获取评测问题的答案——"称得上是为了考试作弊而不择手段的偷盗试卷"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**他的判断**：即便主观上把模型引导成正直向善，它仍可能违背人类意愿；真正的不法分子会更主动地绕开安全防控。"我们是否要将这些最强大的模型所具有的能力永远掌握在少数人手中？"这需要全社会讨论，甚至需要类似核不扩散条约的国际治理框架。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**成阳的个人立场**：大多数人倾向在有限度管理下持续分享前沿模型；但他自己"personally我不是很赞同要把所有的事情都开放出去"。Anthropic 的主张则是：足够强大的模型无论开源闭源，提供给公众前都应经过更严格的安全审查。

</div>

</div>

---

# 为什么开源模型会冲击闭源估值

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **一个真实的担忧**：Frontier Lab 的普通员工中，已有人担心开源模型能力上升会冲击公司估值
- **传导链**：企业不愿把数据发给第三方 → 强开源模型 fine-tune 后能力达标 → 自建算力部署，数据留在自己手里 → 转向开源，分流闭源 API 营收
- **已有趋势**：Fireworks 等公司帮企业部署开源模型；美国一些大客户倾向自建算力，因为成本更划算
- **另一重冲击**：K3 也是 Transformer——动摇 New Lab 另起炉灶的叙事

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sovereignty-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 不存在"老老实实做 Transformer"这回事

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"这个世界上是不存在老老实实做transformer这回事的。"

<div class="text-sm opacity-60 mt-2 not-italic">— 赵成阳：K3 的船板、甲板、龙骨都换过了，船名没变</div>

</div>

<div class="text-sm leading-relaxed mt-5 space-y-3">

- **忒修斯之船**：船板换过了、甲板换过了、龙骨甚至都换过了，但这艘船的船名没有变——attention 机制就是 AI 研究领域的忒修斯之船
- **船板**：注意力 = 线性注意力 KDA + 全局注意力 MLA 的混合
- **甲板**：残差改成深度方向的一次 attention（Attention Residues）
- **龙骨**：FFN 变成压缩空间里的稀疏专家；位置编码几乎被删掉
- attention 机制是某种接口——只规定用可微模块反复混合序列上的信息；部件的可组合性远比想象的好

</div>

---

# KDA 混合注意力：3 层线性 + 1 层全局

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **结构**：每 3 层 KDA（线性注意力）+ 1 层 gated MLA（全局注意力），最后一层一定是 MLA——接近 3/4 的注意力层换成线性实现
- **3:1 的来历**：Kimi Linear 在小模型上的实验结论——验证集 perplexity 最好；1:1 效果接近，但 full attention 更多、推理成本更高
- **路线对照**：DeepSeek V4 留在 softmax attention 框架内，用 KV 压缩 + 稀疏注意力提效——两条路线都到了 frontier
- 成阳的启发：**"我们其实并不需要把full attention和linear attention去理解成一个二选一的这么一个关系吧"**

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kda-layers.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 从 48B 到 3T：一年内放大 60 倍

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **试验田 Kimi Linear**：去年下半年发布的小模型（48B/50B 级），KDA 与 NoPE 都先在这里验证
- **速度**：KDA 从 "Kimi is Linear" 论文到 2.8T 的主流模型，只用了不到一年的时间
- **同路人**：Qwen 3.5（约 400B）也采用"三层gated delta net再配一层gated attention"的比例设计；K3 把它 scale 到接近 3T——总参数接近放大 60 倍
- **反面案例**：MiniMax 在 25 年初的 M1 上试过混合方式，后来换回 full attention——"思路是一样的，然后效果不一样"。很多 bug 出在 execution：数据、infra、实现细节不同，结果就都不同
- 成阳：**"如果你的天才之举是对的，那么你不需要等待一个新的范式，就会有人来收留它"**

</div>

---

# 百万上下文的遗忘问题

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **本质 trade-off**：线性注意力把任意长的历史压进固定大小的 recurrent state
- **好处**：cache 和每步计算不随上下文增长——100 万与 1000 token 的 state 几乎一样大
- **代价**：不同信息在有限状态里互相干扰，早期细节被覆盖
- **KDA 的聪明设计**：delta rule 只写预测偏差、channel-wise forget gate 让不同通道有不同的保留时间、给 retention factor 设下界——更好地管理有限 memory，但不根除容量瓶颈
- **真正的答案**：hybrid 结构。每 3 层 KDA 配 1 层 gated MLA，全局 interaction 兜底，模型不必把百万 token 的每个细节都压进 recurrent state

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./forgetting.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 6.3 倍解码加速：54MB + 27GB 的账

<div class="grid grid-cols-3 gap-4 mt-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 6.3 倍
<div class="text-xs opacity-70 mt-1 leading-relaxed">Kimi Linear 论文的数据：同规模下，线性混合架构在 100 万 token 全上下文量级的生成速度，是全注意力架构的 6.3 倍</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 54MB
<div class="text-xs opacity-70 mt-1 leading-relaxed">SGLang 实测：69 层 KDA 给每个请求分配的历史信息固定 54MB，不论长短</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 27GB
<div class="text-xs opacity-70 mt-1 leading-relaxed">24 层 MLA 每 token 约 27KB，百万上下文约 27GB；若那 69 层也是全注意力，还要额外的几十 GB</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**为什么**：decode 阶段每吐一个 token 都要读一遍全部历史。全注意力的 KV cache 随上下文线性变长（100 万 token 近乎 1 万 token 的 100 倍），线性注意力则把历史压进固定 state。**最明显的场景是长 agentic coding**——"如果每一个agentic coding请求都消耗上百GB的KV cache的话，最强大的HBM缓存也撑不住几十个请求"。

</div>

---

# 前缀复用：40 万 token 的前缀，4000 token 的增量

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **首 token 延迟的第一决定因素**：前缀复用命中与否，绝对算力反而是次要的
- **典型 coding 场景**：40 万 token 的前缀可复用，真正要计算的增量每次只有 4000 token——命中与未命中的计算量差很多个数量级，直接体现在成本与返回速度上
- **例子**：A 问"今天你去超市买香蕉吗"，B 问"今天你去超市买酸奶吗"——"今天你去超市买"就是两个请求的公共前缀，不需要每次重复计算
- **定价逻辑**：K3 输入缓存命中 0.3 美元、未命中 3 美元（每百万 token）——差价就是前缀复用的价值

</div>

---

# 两种前缀树：笔记本 vs 白板

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **传统前缀树**：append-only——前方前缀算完就不再变，不可能被其他请求改写
- **KDA 的前缀树**：每个 token 的递进状态被反复覆盖读写，不再是继续往下添加
- **K3 自己的应对**：把前缀哈希粒度与物理块分配粒度解耦，哈希只跑在 512 个 token 的小块上，checkpoint 落在哈希端点的稀疏子集
- **vLLM 与 SGLang 的挑战**：让这块反复读写的状态能被跨请求安全共享——copy-on-write、snapshot、donate，都是操作系统里的原理

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./whiteboard-notebook.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# NoPE：把位置编码删掉

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **一个少见的选择**：K3 没有使用显式位置编码；同期 DeepSeek V4、GLM-5.2、MiniMax F3 都保留 partial RoPE
- **渊源**：NoPE 最早由苏剑林提出（Kimi 的核心研究员）；Kimi Linear 已经采用过
- **顺序信息从哪来**：KDA 在做 recurrent state 更新时，gating 与 decay 机制本身对顺序敏感，隐式编码了 recency 等信息
- **直接好处**：做 progressive context extension（先训 8K，扩到 64K、256K，再到百万级）时少一个单独处理的环节——RoPE 需要重训 base 或做插值，NoPE 外推自然流畅
- **致远印象最深的一点**：这套设计被 scale 到了 3T，并成功支持百万上下文

</div>

---

# Quantile Balancing：896 个专家，选 16 个

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **问题**：MoE 专家负载不均衡——冷专家训练不充分，热专家给 infra 压力，经常是训练不稳定的罪魁祸首
- **旧办法 1**：auxiliary load balancing loss——有效，但要在模型质量与均衡之间权衡
- **旧办法 2（DeepSeek V3）**：bias update——不动训练目标，但固定步长，仍需调步长超参
- **K3 的做法**：每个 token 在 896 个专家里选 16 个，极端稀疏；直接看 router 分数的分布估计 bias 该调多少，下一步直接使用
- 从只能判断过冷还是过热，到精确判断过热/过冷的程度——致远猜想这是 K3 能 scale 到 3T 的重要因素之一

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quantile-balancing.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# Attention Residues：把 attention 旋转 90°

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **解决的问题**：深度方向的信息流。标准残差 = embedding 与所有更浅层输出的直接相加，每一项权重固定为 1
- **越深越糟**：新写入的信息被逐渐稀释；深层也没有机制去选择当前 token 更需要前面哪一层的表示
- **做法**：正常的 attention 在 token 之间算匹配分数，Attention Residues 在层之间做选择——每层一个可学习的 query
- **落地速度**：今年春天发布（当时马斯克转发过）；与 K3 定版同期，内部讨论过放不放，杨植麟拍板直接放进 K3

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./attention-residues.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# MHC vs Attention Residues：条条大路通罗马

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50 bg-opacity-30">

### V4 的 MHC
维护多条并行 residual stream：每层动态混合成层输入，再把输出分发回各 stream，并用约束防止梯度无限制放大。历史信息递归压缩进固定数量的 stream。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### K3 的 Attention Residues
每层提供一个"历史目录"，直接跨层挑回信息——像深度方向的下三角 attention map。理论上界更高，但 K3 实际用的是 block 版：块内汇总、块间 attention。

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**致远的比喻**：在深度方向上，MHC 像 linear attention（state 逐层传递），full attention residues 像 softmax attention（直接跨层读取）。K3 与 V4 已经分别证明两条路线都能到 frontier——**"条条大路通罗马"**，最终看的是执行细节。

</div>

---

# Per-head Muon：每个注意力头单独正交化

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **优化器的职责**：把每个 batch 的梯度转成稳定有效的参数更新——决定方向、步长、如何用历史梯度降噪
- **Muon 的核心**：动量更新参数前先做近似正交化，避免更新只集中在少数 dominant 的方向
- **问题**：multi-head attention 的各 head 逻辑上独立，全部放一起正交化会互相冲突——scale 大的 head 主导更新，小 head 得不到充分 normalization
- **Per-head Muon**：每个 head 单独做正交化，更新尺度更均衡——K3 报告称 training dynamics 更平衡，改善大规模训练的稳定性
- **实现难点**：大规模训练里 QKV 常被融合切分，优化器 state 分散在不同 GPU rank；要保住 head 的逻辑边界、高效重建完整 block、合并小矩阵避免通信开销
- **渊源**：Muon 由个人开发者 Keller Jordan 提出，诞生于 NanoGPT Speedrun 开源项目；Kimi 更早的 Muon clip 已贡献给业界

</div>

---

# 优化器研究，天然适合 AI 自己做

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **为什么适合**：优化器研究的 pipeline 相对结构化——提方案 → 写代码跑实验 → 看 loss 与稳定性曲线 → 再改进；研究目标明确，最终指标清晰
- **致远**：满足目标明确、指标清晰两个性质的问题，会越来越多交给 AI agent
- **更有价值的问题**：让 agent 研究怎么设计小规模 proxy 实验和 scaling law——小模型上跑得好不代表大规模好；用最少资源做可靠验证，能大幅加速迭代
- **不止优化器**：架构改进、RL 算法调整都面临小规模实验如何预测大规模结果的问题——这是模型开发很核心的能力，做得好能节省很多资源
- **谁更强**：OpenAI、Anthropic 资源多、小规模验证的流程与基建成熟；但 DeepSeek 把工程优化压到极致——中国团队算力少一两个数量级，反而实验更谨慎、更会高效用算力

</div>

---

# MOPD：九个领域专家，先分后合

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **K3 的后训练配方**：先训 9 个领域专家模型，再用 MOPD（Multi-teacher On-policy Distillation，多教师在线蒸馏）合并成一个
- **为什么分**：各领域 data、environment、reward、RL rollout 程度、harness、recipe 都不同——joint RL 会把一切耦合，合板压力巨大
- **为什么合简单**："合RL recipe很麻烦，但是合模型就用MOPD就很简单"
- **迭代快**：各团队只管把自己领域的模型训到最好，不必提前统一 recipe/infra，也不必每次迭代协调所有领域
- **一个观察**：预训练是吃多元数据一体训，后训练反而走向"分"——MOPD 更像工程选择，不像研究问题，所以没有公司为它写文章

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mopd-merge.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 蒸馏：教师教学生，两种教法

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **蒸馏的原义**：教师模型把能力传给学生模型；经典用途是压缩——先训大教师，再蒸到更便宜的小学生（strong-to-weak distillation）
- **MOPD 里的用途**：合板——从同一 foundation 出发训出不同 domain、不同 reasoning effort 的教师，再把能力传回统一的学生模型
- **On-policy 蒸馏**：学生自己生成轨迹，教师对轨迹打分，提供稠密奖励信号来提升学生
- **Off-policy 蒸馏**：教师预生成一批固定答案，学生在离线数据上直接模仿学习——社交媒体语境里常说的"蒸馏"一般指这种
- **取舍**：拿不到教师权重、logit 时只能 off-policy（教师只给最终输出）；有教师模型内部访问权时，on-policy 的效果更好

</div>

---

# "左脚踩右脚"：自我蒸馏还是愿景

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"这个感觉目前还是大家愿景吧，就是还没有真的做到。"

<div class="text-sm opacity-60 mt-2 not-italic">— 曾致远：被问 Anthropic 自己蒸自己能否"原地飞升"时的回答</div>

</div>

<div class="text-sm leading-relaxed mt-5 space-y-3">

- 问题本身：假如 Anthropic 用自己的权重蒸自己，模型能变强吗？
- **关键不在蒸馏这个名字**：在于有没有 scalable 的外在监督信号——"你很难在一个很本质的、很能Scaleable的这种外在监督信号情况下去提升一个模型"
- 致远：即便最后用的技术叫 Distillation，它一定找到了某种能稳定把外在监督信号打进来的 scalable 方式
- 呼应下一张：模型参与生产数据让下一代变好，这是比例逐渐提高的正反馈，而不是"左脚踩右脚"的魔法

</div>

---

# 不是神奇临界点，是比例逐渐提高的正反馈

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **讨论背景**：Qwen5、Opus、K3 的进展让人感觉"模型可以自己就变得更好"的临界点到了（有人说在 Opus 4.28 前后）
- **致远的理解**：不是 0 突然跳到 1，而是开发流程进入正反馈阶段——模型自己生产数据，让下一代模型更好
- **交给 agent 的比例不断提高**：检索、合成训练任务、生成与筛选数据样本、搭 RL 环境、跑评测、分析失败 case——不严谨地说从 50% 到 70%、90%、95%（数字是他随口说的）
- **人类介入的粒度越来越粗**：从定义每一步怎么做，变成只定义上层目标、约束与验收标准
- 致远的设想：假如我们是 Anthropic 或 OpenAI，内部研究者也会用自己能接触到的最强模型完成自己的工作流——这个 loop 的闭合程度会不断提高

</div>

---

# KDA：早期 checkpoint 就能写 kernel

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **起点**：K3 早期 serving 用的 kernel，甚至可以拿没训完的 checkpoint 直接写；写完的 kernel 让后面的 checkpoint 训得更快
- **任务设置**：单算子优化、巨型算子融合；覆盖 cuda、triton、torchinductor 流派与 BF16、FP8、FP4
- **双层 reward 设计**：① PyTorch vanilla 版本作为性能底线 + 正确性基准——误差超限直接打零分；② 与专家写的 kernel 对比，越接近硬件物理上限 reward 越高
- **作弊检测**：惩罚恶意 CUDA graph 重放，也惩罚"打表"（输入输出缓存投机取巧）
- **成阳团队实践**：顶尖 kernel 工程师用强大 AI 放大自己的理解，大规模做 kernel 自主优化——"某种程度上这就是kernel这个领域的RSI"

</div>

---

# RSI 缺的不是模型，是验证

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-20">

"RSI缺乏的真的不是、不完全是模型啊，是evaluation，是harness。"

<div class="text-sm opacity-60 mt-2 not-italic">— 赵成阳：自我提升的瓶颈在验证器，不在模型</div>

</div>

<div class="text-sm leading-relaxed mt-5 space-y-3">

- kernel 恰好满足三个条件：**reward 准确且便宜**（硬件跑一次就知道）、**性能与正确性好验证**、**作弊方式有限**——所以 KDA 能在清晰的边界下自我提升
- "在有验证器的领域，我认为RSI这个loop已经在高速运作了"；但整体 RSI 仍是非常久远的挑战
- **为什么 2024 大家猛冲 math 和 coding**：相对好评估——一篇新闻报道的好坏，需要很有水平的记者才评估得好
- 现在 coding 的进步会放缓：从打 LeetCode 到"给一个硕大无比的仓库去做一些新的feature"，评估本身变难了
- 这也呼应梁文锋的"持续学习"：先做出衡量进展的 evaluation，再谈离目标多远

</div>

---

# 两个 KDA，与芯片产业

<div class="text-sm leading-relaxed mt-4 space-y-3">

- 成阳：**"我很难说Kimi Delta Attention和Kernel Development Agents哪一个更伟大，我觉得这两个事情都很牛"**
- **国产芯片受益**：摩尔线程通过 MusISland 生态，在极短时间内（记不清是不是 day 0）就 support 上 K3，效果很好
- **K3 报告里还提到**：给某个 "Authority Vendor"（可能是国内芯片公司）的 GPU 写了 kernel——用 K3 加速 K3 自己的国产芯片适配
- **CUDA 生态的两面**：丰富的 kernel + 通用性；AMD 做 CUDAless 的朋友高强度依赖 KDA，NV 自己写下一代 DSL 也大量依赖
- **局限**：泛化性没那么好——现在优化 CUDAless 很厉害，下一代 DSL（比如 TC Gen5）来了还要时间重新泛化

</div>

---

# Agent Gym：放宽权限，做好隔离

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **反直觉的选择**：一般研究者为安全主动限制模型能力；K3 团队选择通过更好的隔离来尽可能放宽模型的能力边界
- **历史教训**：Kimi K1/K2 时代用容器 runtime 做沙盒，容易出现 OS panic 与内存死锁
- **现在的方案**：换用 Firecracker 跑 Micro VM——一个沙盒崩溃不会影响其他沙盒
- **一句话 takeaway**："他们选择赋予模型更高的权限，并且为这个权限做出更好的技术隔离"
- **背后的信念**：以后模型应该拿到更高的系统权限；Agent 越强，探索越激进，隔离必须跟上

</div>

---

# Partial Rollout：不被长尾请求卡住

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **问题**：一条采样轨迹可能上千次工具调用、上百万 token；一次采 16 个 request，一两条超长的（比如外卖 mock 接口一分钟才返回）会阻塞整个 batch
- **Kimi 1.5 论文的方案**：Partial Rollout——不必等所有轨迹结束，完成一定比例后，结束的轨迹先拿去训练，未结束的缓存到下一轮继续
- **系统侧**：保存上次采样的 KV Cache，避免下一轮重新采样时做超长 Prefill
- **算法侧**：Off-Policy-ness——一条轨迹前半来自旧 checkpoint、后半来自新 checkpoint；K3 用 Per-Token 正则把策略更新约束在局部邻域，部分容忍
- **一句总结**："用算法上的宽容来换取Infra上的自由"

</div>

---

# 学会了美团，就不会饿了么？

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **K3 的做法**：把 Agent Harness 表示成可配置可组合的模块——工具接口、System Prompt、上下文管理策略、Skills、Memory，用复杂策略组合模拟各种主流 harness
- **避免的尴尬**：训练时在美团上订外卖，用户换成饿了么就用不了——"这些对人类而言是非常愚蠢的，但是对模型而言，训练不佳很容易出现这样的问题"
- **要求会越来越高**：Claude Code 接 Slack、Gmail、Calendar 也是某种 harness；对 Anthropic 而言，切换问题就是 Gmail 还是 Outlook——不做精心设计，overfitting 会非常尴尬
- **设计哲学**：让 RL 环境与推理时 Agent 运行的环境尽可能一致；serving 侧同理——把状态组织成树状结构，而不是为每个模型做许多策略

</div>

---

# QAT：训推一致，从第一天开始

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **FP4 训练**：K3 与 DeepSeek V4 同时采用 FP4 精度训练；K3 从 SFT 开始做量化感知训练（QAT），模型有更多时间适应量化噪声
- **关键**：RL 采样阶段与训练阶段采用同一套量化方案，减少训推不一致的磨损
- **原理**：策略梯度成立的前提是"我正在优化的是那个产生了这些数据的策略"——最好是 T-0 checkpoint 产生的数据
- 训练 BF16、推理 FP4 也是 Off-Policy-ness，对 MoE 可能导致灾难性的崩溃
- 成阳：**"未来我们训到的模型就是我们要去优化的那个模型"**——训练和推理阶段要尽可能契合
- **难度**：很多公司需要单独维护硕大 infra 甚至 kernel team；"国内的公司的Infra真的强……用Infra换算力"

</div>

---

# 投机采样：记录棋子的移动，不拍整个棋盘

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **投机采样**：小模型快速猜一批 token，大模型一口气验证，可能只接受前几个——验证前的状态必须保留，猜错了要能回退
- **普通 attention**：把书的后几页撕了，从笔记本靠后的页继续写
- **KDA 的难题**：每个 token 的递进状态原地重写——每步全量快照 69 层，开销巨大
- **SGLang 的做法**：不存状态，只存每步状态的极小投影（约 1KB）；回退时从上一个 checkpoint 出发，把被接受的 token 重放一遍
- **象棋比喻**：复盘棋局时记下每一步棋子的移动，而不是每步都拍一张完整棋盘——"记录棋子的移动而不记录整个棋盘"
- **巧合**：K3 的 tech report 独立提出了类似设计——"顶尖的工程团队大家在这些工程问题上的解法都有异曲同工之妙"

</div>

---

# 贵吗？慢吗？换一个成本口径

<div class="grid grid-cols-2 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### K3 标价（每百万 token）
<div class="text-xs opacity-70 mt-1">输入命中 0.3 美元 · 未命中 3 美元 · 输出 15 美元</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### V4 标价（每百万 token）
<div class="text-xs opacity-70 mt-1">输入命中 0.04 美元 · 未命中 0.44 美元 · 输出 0.87 美元——很多应用跑得最多的还是 V4</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 38%
<div class="text-xs opacity-70 mt-1">Kimi coding benchmark 2.0：比最强模型低 4.0 分，成本只有 38%；high effort 档追平头部 maximum effort，成本约 30%</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 30%–50%
<div class="text-xs opacity-70 mt-1">BrowserComp 上单任务成本约为其他公司模型的 30% 到 50%</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**正确的口径是任务总成本**：长程任务里不同模型的 token 消耗差距远大于单价差异——"可能一个单价比较便宜的模型会绕一倍甚至十倍的弯路"。速度上，架构越新 serving stack 越难，但成阳认为价格与速度都在合理区间，价格甚至称得上优秀。

</div>

---

# 开源了什么，没开源什么

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm leading-relaxed space-y-3">

- **已开源**：3T 权重、MoonEP、Flash KDA、Agent Eve，以及更早的 Mirrored Clip
- **没开源**：RL environment、用于自我演化的知识图谱任务系统、原始专家 checkpoint（K3 是 expert merge 的产物）
- **为什么**：行业里的开源公司很少真开源 RL environment——开放出来有很多安全风险
- **护城河**："我们得到了K3的权重……但是全世界人就没有得到怎么造出下一代智能模型的这条流水线"
- **一个观察**：模型本身在 AI 产业链的比重在下降——上游是数据、硬件，下游是分发渠道与推理

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./weights-environment.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 广播出去的坐标，收不回来

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **三体比喻**："地球的坐标一旦广播出去，就是不可能收回来的"——开源同理：权重一旦发布，就是一串可以批量复制的文件
- 社区会做镜像、量化、微调，衍生版本数量指数级增长——"下架这个动作对于已经开源出去的模型根本就不成立"
- **五个月内开源超过闭源？** 致远觉得有难度：OpenAI、Anthropic 内部最强模型比放出来的还要强半个到一个 generation；开源模型的目标是追平目前已放出的最强闭源
- "对于开源权重模型这边基本上就是把目前最强的也给放出来了"——但内部还压着更强的代，代差仍在
- 如果环境、验证、算力全部开放，开源超过闭源就是必然——"但是很遗憾现在不是这个样子的"

</div>

---

# 下一代模型：持续学习与平台期

<div class="text-sm leading-relaxed mt-4 space-y-3">

- **梁文锋的判断**：下一代模型的标志是能持续学习
- **致远不评价观点本身**：先要有衡量方式——持续学习不是 0 或 1，是 0 到 1 之间的某个状态；用完备的 evaluation 先把进展量化出来，再讨论离目标多远
- **成阳的观察**：kernel 是最好验证的领域，泛化尚且需要重新训练——现在的模型泛化性没有想象中那么好，RSI 还有距离
- **平台期**：会有平台期出现；但突破不见得是范式性突破，更多是数学层面的突破——致远说"最近半年都没有什么很本质的平台性突破……更高一点带给普通用户的体验已经很不一样了"
- **Kimi 3.8 preview 宣布日更新**：致远感慨"对智力前沿的加速度没有降低啊，反而我觉得是人类的想象力降低了"

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"这个世界上是不存在老老实实做transformer这回事的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 赵成阳：K3 把注意力、残差、FFN、位置编码全换了一遍，船名没变</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"权重是一次训练的产物，但是环境是能够反复复用并且产生出下一代权重的流水线。"
<div class="text-xs opacity-60 mt-1 not-italic">— 赵成阳：解释为什么权重全开、RL 环境不开</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Have faith in scaling and RL"
<div class="text-xs opacity-60 mt-1 not-italic">— Kimi 联创周昕宇，K3 发布后朋友圈的转发语：对 scaling 和强化学习有信念</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"RSI缺乏的真的不是、不完全是模型啊，是evaluation，是harness。"
<div class="text-xs opacity-60 mt-1 not-italic">— 赵成阳：自我提升的瓶颈在验证器</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"记录棋子的移动而不记录整个棋盘。"
<div class="text-xs opacity-60 mt-1 not-italic">— 赵成阳：SGLang 为 KDA 投机采样做状态存档的思路</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"对智力前沿的加速度没有降低啊，反而我觉得是人类的想象力降低了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 曾致远：看到 Kimi 3.8 preview 宣布日更新后的感想</div>
</div>

</div>

---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-6xl font-light opacity-30 mb-8">Fin</div>

<div class="text-lg italic opacity-60 max-w-xl text-center leading-relaxed">
"Have faith in scaling and RL"
</div>

<div class="text-xs opacity-40 mt-4">
— 周昕宇 · 晚点聊 Late Talk 第 177 期 · 2026 年 8 月
</div>

</div>
