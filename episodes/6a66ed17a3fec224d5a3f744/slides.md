---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '148. 对游凯超3小时访谈：开源Infra、和模型Co-design 、"如果vLLM失败，我们会后悔一辈子"'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 148. 对游凯超3小时访谈

## 开源Infra · 模型Co-design · "如果vLLM失败，我们会后悔一辈子"

<div class="text-sm opacity-60 mt-8">
游凯超 · vLLM 联合创始人 & 首席科学家 · 2026年7月
</div>

<div class="text-xs opacity-40 mt-12">
小俊播客 · 语言即世界工作室
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**vLLM 创业内幕**
一个伯克利开源项目如何变成公司——四个创始人如何用"意义"击败2000万美元年薪的诱惑。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**模型 × Infra 联合设计**
从"硬件彩票"到 RoPE，从 MoE 三大挑战到 Test-time scaling——Co-design 的完整方法论。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**中国开源崛起**
2025 中国开源模型爆发，游凯超从伯克利回国从零搭建 vLLM 中文社区的完整故事。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**Coding Agent 重塑开源**
2026 年 GitHub 最活跃项目面对 AI 提交垃圾代码——开源治理的未来在哪里？

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed col-span-2">

**一份关于"意义"的答卷**：从清华擦线入学到特奖得主，从算法研究到系统工程的转型，游凯超的故事本身就是一个"从第一性原理出发"的人生选择。

</div>

</div>

---

# 从清华擦线到特奖得主

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 高开低走的起点

<div class="text-sm leading-relaxed space-y-2">

高考分数比清华录取线**高两分**，"勉强擦着分数线进来"。

但游凯超不喜欢"无意义的重复劳动"——中学时从学堂在线自学 Python，用几何画板理解物理仿真。高考简单，他的能力"没有体现在高考分数上"。

</div>

</div>

<div>

### 大学：享受学习而非"卷"

<div class="text-sm leading-relaxed space-y-2">

大一发了**一百多封邮件**给老师请教问题，精读笔记在校史馆展出，36 门课程获 4.0 满绩。

"这也不是一个卷吧，更多是我还是比较享受学习。没有把笔记的数量当做一个目标来优化，更多是自然而然的学习结果。"

</div>

</div>

</div>

<div class="text-xs opacity-50 mt-4">
作者概括：游凯超的大学路径不是"逆袭叙事"，而是找到真正感兴趣的东西并持续投入。
</div>

---

# "礼乐崩坏"：学术界的论文通货膨胀

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 从健康社区到抽彩票

<div class="text-sm leading-relaxed space-y-2">

2018 年：一届学术会议几百篇论文，审稿人给建设性反馈。

2020 年后：投稿数几何级增长，审稿质量急剧下降。"你的投稿就像抽彩票一样，中或不中可能跟你工作质量本身没有很大关系。"

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">
"学术界它也不是一开始就礼乐崩坏的。"
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./academic-decay.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 两个世界：Michael Jordan vs Ion Stoica

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Michael Jordan
**机器学习理论**

<div class="text-sm leading-relaxed mt-2">

- 偏学术和理论，研究机器学习的理论 insight
- 做博弈论、经济学分析
- 从不自称"AI 研究者"
- **追求：理论深度**

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Ion Stoica
**机器学习系统**

<div class="text-sm leading-relaxed mt-2">

- 偏系统工程，追求 real-world impact
- 做了大量开源软件，孵化出 Spark、Ray
- 推动学生把 vLLM 作为开源项目长期维护
- **追求：真实世界的影响力**

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"我追求的是后一个。两者没有优劣之分，但在当下的时代，后一个是更值得追求的。前一种要能做出 impact 的，只有在世界上很少的地方有这样的坑位。"
</div>

---

# 三个原因：为什么放弃算法转向系统

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**① 学术界"礼乐崩坏"**
学术会议投稿几何增长，审稿质量断崖式下降。投稿变成了抽彩票——中不中与质量无关。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**② 何恺明的启示**
恺明老师的成功不仅是想法好——他有资源做大规模实验。实验室里的"小虾米"在玩具数据集上雕花，没有规模化的实验能力，再好的 idea 也无法落地。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**③ 工业界朋友的反馈**
旷视张祥雨告诉游凯超：AI 公司的工程师最头疼的不是调参，而是 CUDA kernel 的代码问题和多级缓存之间的数据流动。**系统才是瓶颈。**

</div>

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./three-reasons.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# "你可以说我的东西不 novel，但你不可以说我的东西没有用"

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 算法研究的不确定性

<div class="text-sm leading-relaxed space-y-3 mt-4">

算法研究的正反馈很难积累。你说在这个场景提升了 2-3% 准确率，别人复现时可能因为场景不同反而降了。而且你需要不断跟人争论"我的东西多么创新"。

**系统工程的确定性**：你说加速了两倍就是两倍，这个原理是确定的。别人用了就是能加速两倍，反馈持续累积。

</div>

</div>

<div>

### 从"锦上添花"到"雪中送炭"

<div class="text-sm leading-relaxed space-y-3 mt-4">

游凯超做的迁移学习研究是"锦上添花"——别人已经做好了一个任务，他再用通用方法提升 1-2%。

更残酷的是：一年后换了更大的预训练模型，带来的收益比他研究一年算法还要大。

做系统工程则不同——**你解决的问题是所有人都会遇到的**。vLLM 的加速效果是实打实的，无法被一个更"大"的东西替代。

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"你可以说我的东西不 novel，但是你不可以说我的东西没有用。"
</div>

---

# 伯克利的开源基因：从 BSD 到 vLLM

<div class="text-sm leading-relaxed space-y-4 mt-4">

伯克利有"重工业软件"的悠久传统，这些软件几乎都是**博士生在读期间发起**的，后来成为工业界基础设施。

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

**BSD**
<div class="text-xs opacity-70 mt-1">操作系统</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**RISC-V**
<div class="text-xs opacity-70 mt-1">芯片架构</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

**Spark / Ray**
<div class="text-xs opacity-70 mt-1">大数据/分布式ML</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**vLLM**
<div class="text-xs opacity-70 mt-1">大模型推理</div>

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**David Patterson 的五年周期论**：每个实验室只做五年——刚好是博士生毕业的周期——充分利用优秀博士生的时间，专注一个领域。AMPLab（Spark）→ RISELab（Ray）→ SkyLab（vLLM），一脉相承。实验室的五年周期和工业界需求周期一旦共振，就会诞生重要项目。

</div>

---

# PageAttention：一篇"too simple"的 SOSP 论文

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 来自操作系统的灵感

<div class="text-sm leading-relaxed space-y-2">

PageAttention 借鉴了操作系统**虚拟内存管理**的机制来管理自回归生成过程中产生的中间状态（KV Cache）。

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-3">
"从学术创新的角度来说，PageAttention 算法的创新性甚至是偏低的。审稿人提出了很多批评，说你这东西 too simple，没有什么 novelty。"
</div>

</div>

</div>

<div>

### too simple 却成为了基石

<div class="text-sm leading-relaxed space-y-2">

**为什么最终被接受？**
- 做得**很早**（2022 年底开始）
- 做了**非常丰富的实验**
- 以"低分过线"的状态被接收

**但这只是开始。** vLLM 远远超越了 PageAttention 论文本身——它是整个大模型推理生态系统。今天 vLLM 支持两三百种模型结构，是 GitHub 活跃度最高的项目。

</div>

</div>

</div>

---

# vLLM ≠ PageAttention：一个完整的推理生态系统

<div class="text-sm leading-relaxed space-y-3 mt-4">

PageAttention 和 Continuous Batching 是大模型推理的两个核心技术，但 vLLM 远不止于此。

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**PageAttention**
借鉴虚拟内存管理 KV Cache，解决显存碎片化

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Continuous Batching**
动态组 batch，最大化 GPU 利用率

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**200+ 种模型结构**
Llama、DeepSeek、千问、GLM……屏蔽模型与硬件的复杂性

</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
"vLLM 是一个推理引擎，代表着一个推理的生态系统。你不能只认识到它是 PageAttention——它是后续一系列推理优化技术的集合。"
</div>

<div class="mt-3 text-xs opacity-50">
作者概括：vLLM 真正提供的价值是"屏蔽模型和硬件的复杂性"——用户在下拉菜单里换一个模型，vLLM 在背后处理所有适配细节。
</div>

---

# V0 → V1 重构：从原型到生产级

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 2024：重构之年

<div class="text-sm leading-relaxed space-y-2">

从实验原型走向生产级可用——调研了业内几乎所有推理引擎的设计，2024 年底推出 V0→V1 重构计划。

游凯超用一个比喻来解释这次重构：

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-2">
"好比发电系统从火电过渡到新能源发电——用户侧使用方式差别不大，你插上就能用。但从推理引擎视角来看，背后的工作原理发生了巨大变化。"
</div>

</div>

<div>

### 2025：大规模部署

<div class="text-sm leading-relaxed space-y-2">

模型和硬件都变得越来越大，开源重心从欧美转移到中国。DeepSeek-V3 在 2024 年底发布，R1 在 2025 年春节爆火——中国开源模型如雨后春笋般涌现。

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-3">

**关键挑战**：
- 人力资源不确定（社区贡献者来来去去）
- 法务问题（NDA 无人签署）
- 机器资源不稳定（"乞讨"来的集群一个月到期）

</div>

</div>

</div>

</div>

---

# vLLM 的四人创业心路

<div class="text-sm leading-relaxed space-y-3 mt-4">

Ion Stoica 从 2023 年就说：这么大一个开源项目，没有公司在背后支撑，"一定会凉了"。但学生团队面临巨大阻力——融资、招聘、商业化，全是从未涉足的领域。

<div class="grid grid-cols-4 gap-2 mt-4 text-center">

<div class="p-2 rounded bg-blue-50 border border-blue-200 text-xs leading-relaxed">

**Simon（CEO）**
开源老兵，曾参与 Anyscale 创业。最早认同 Stoica 观点，尝试通过 Character AI 来支持 vLLM，"最终发现靠别人是靠不住的"。

</div>

<div class="p-2 rounded bg-green-50 border border-green-200 text-xs leading-relaxed">

**游凯超（CSO）**
24 年底离开伯克利时就下定决心。为了等大家，接了博士后 offer："我会为 vLLM 的创业公司再等两年，直到大家出来一起创业。"

</div>

<div class="p-2 rounded bg-orange-50 border border-orange-200 text-xs leading-relaxed">

**Woosuk（CTO）**
PageAttention 论文一作。最摇摆的人。xAI 邀请他领导 infra 建设，Thinking Machines Labs 邀请他负责基础设施。犹豫了整整一年。

</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200 text-xs leading-relaxed">

**Roger**
项目长期核心维护者，公司一创立就加入。和另外三位一样，在市场上都可以拿到很高 offer，但选择了创业。

</div>

</div>

</div>

---

# "你赚了很多钱，但 vLLM 失败了，会开心吗？"

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 leading-relaxed">

"你如果不跟我们一起创业，你赚到了很多钱，但是十年之后我们的项目失败了，你是开心还是不开心？"

</div>

<div class="mt-4 text-sm opacity-70">
— 游凯超和 Simon 对 Woosuk 的"逼宫"，2025 年夏
</div>

<div class="text-sm leading-relaxed mt-4 space-y-2">

Woosuk（vLLM 的 CTO，PageAttention 论文第一作者）面前的机会太多了：xAI 马斯克邀请他领导 infra，Thinking Machines Labs 邀请他负责基础设施建设——"摆在他面前的这个机会属于是太多太好了，所以他的犹豫也是人之常情"。

这个问题问出来后，"是我们双方都需要冷静一下的时候"。想了几天，他回来了。

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-3">
"如果我们自己赚了很多钱，但是 vLLM 项目失败了，我觉得我们会都是会后悔一辈子的。"
</div>

</div>

---

# 拒绝每人 2000 万美元年薪的 offer

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 临门一脚的考验

<div class="text-sm leading-relaxed space-y-2">

公司注册前夕，某家顶级大厂的一号位直接打电话来："你们可不可以不要创立公司，来我们公司。"

开价：**四个创始人，每人年薪 2000 万美元**。

"但是我们当时都已经坚定了嘛，信念比较坚定，然后就直接爽快地回绝了，**没有一个人犹豫**。"

</div>

</div>

<div>

### 意义 > 金钱

<div class="text-sm leading-relaxed space-y-2">

游凯超引用《送东阳马生序》来解释这个选择：

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
"以中有足乐者，不知口体之奉不若人也。"
</div>

"我们这些同学就是非常适合这一句话——因为我们心中做着我们认为快乐的事情，所以不觉得吃的喝的穿的享受不如别人。"

</div>

</div>

</div>

---

# 开源治理：仁慈的独裁者

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### vLLM 的分级治理

<div class="text-sm leading-relaxed space-y-2">

**仁慈的独裁者（BDFL）**：Simon、Woosuk、游凯超、卓翰 + Red Hat 代表。日常心平气和沟通，但最终的取舍由他们拍板。

**核心维护者**（十来人）：负责重要模块的关键设计。

**Committer**（几十人）：日常代码开发。

**社区贡献者**（2000+）：提交 PR、报 bug。

</div>

</div>

<div>

### 一次"独裁"决策

<div class="text-sm leading-relaxed space-y-2">

游凯超做的最强硬的决定：**把 beam search 从引擎里删掉**。

做推荐系统的同学一直在抱怨，但大模型推理的主流 workload 已经不再适应 beam search。持续维护只会带来指数增长的复杂性。

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm mt-2">
"仁慈的独裁者意味着有些时候你需要对方向进行取舍，不能做一个老好人。"
</div>

</div>

</div>

</div>

---

# PyTorch 基金会：开源项目的一道"保险杠"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 为什么捐给基金会而不是留在伯克利

<div class="text-sm leading-relaxed space-y-2">

伯克利实验室五年一个周期（David Patterson 的理论），不是具备持久性的法律实体。

PyTorch 基金会是独立的法人实体——可以注册商标、接受募捐、有自己的法律团队。vLLM 的商标属于基金会，意味着**它在法律上永远开源**。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
"我们把项目捐给 PyTorch 基金会更多是从法律上明确了它一直是一个开源项目，商标属于社区。但具体的技术发展和商业化由我们公司来做。"
</div>

</div>

<div>

### 先捐后创：项目的长期主义

<div class="text-sm leading-relaxed space-y-2">

捐赠在前（2024 年底），成立公司在后（2025 年底）。Ion Stoica 说：参照 Linux 的经验，把它捐给一个基金会，保证长期的开源和维护。

这保证了社区信任——即使 Infini-Attention 公司不存在了，vLLM 项目本身也会继续开源存在。社区里的 Red Hat、NVIDIA、AMD 都在共同维护。

</div>

</div>

</div>

---

# 从零搭建 vLLM 中国社区

<div class="text-sm leading-relaxed space-y-3 mt-4">

2024 年 12 月游凯超结束伯克利交流回国，恰好赶上 DeepSeek-V3 发布。一个月后，R1 在春节爆火——**中国开源模型的浪潮到来了**。

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**语言障碍**
社区用 Slack 英文沟通，国内开发者不习惯。游凯超搭建了公众号、小红书、知乎等中文宣传渠道。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**企业对接**
DeepSeek、Kimi 等公司公开说在用 vLLM，但之前沟通极少。游凯超回国后逐家走访，了解痛点。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**新模型支持**
2025 年 7 月 WAIC 前，中国公司集中发布模型。vLLM 在 2025 年成为 GitHub 按贡献者活跃度排名第一的项目。

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"我不敢说我们做得非常好，只能说我们撑过来了。"
</div>

---

# 当开源社区变成公司：社区的期待与信任

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 社区反而在期待

<div class="text-sm leading-relaxed space-y-2">

成立公司后，社区的反馈是**正面的**。原因很简单：

- **可以签 NDA 了**：合作伙伴的法务终于有对接实体
- **算力资源有保障了**：不再是"乞讨"来的临时集群
- **项目更有保证了**：全职员工替代了"best effort"的松散贡献

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">
"社区对于一个开源项目的意见，不是他能写多少代码，而是这个项目能不能给他带来收益——新模型发布的时候，vLLM 是不是又支持了？"
</div>

</div>

<div>

### 商业化与开源的平衡

<div class="text-sm leading-relaxed space-y-2">

**关键选择**：不接与社区利益冲突的商业客户。

"我们现在是供少于求的状态，能支撑的商业客户远远小于想跟我们合作的客户。所以我们可以非常爽快地拒绝掉我们不想做的事情。"

商业模式探索：Endpoint Service、BYOC、生态合作。核心逻辑是**按量收费**——不是售卖工程师的时间，而是按产生的 Token 量和节省的成本来计费。

</div>

</div>

</div>

---

# Token = 电：理解 Co-design 的核心比喻

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 发电系统的类比

<div class="text-sm leading-relaxed space-y-2">

游凯超用**发电系统**来解释模型与基础设施的 Co-design：

- **硬件** = 自然资源（风力、水力、太阳能）
- **模型** = 发电机（风力发电机、光伏发电机、水力发电机）
- **推理引擎** = 电力系统（把电分发给千家万户）
- **Token** = 电力（最终用户使用的产品）

Co-design 的程度直接决定发电效率。

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./co-design-analogy.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Token 与电有一个关键不同

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">
"电是比较通用的，可以调制——你只需要在出口统一规定 220 伏，所有家电就能接入。但 token 没有办法做调制。<strong>你没有办法把一个 DeepSeek 模型的 token 转化为一个 Kimi 的 token。这个 token 是带着模型的烙印的。</strong>"
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**异质性**
每个模型产生的 token 有自己的"电压和频率"。用户今天用 90 伏，明天 110 伏，后天 120 伏。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Harness 适配**
不同模型在不同 Harness 框架下表现不同。有些模型适合指挥，有些适合干活。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**百花齐放**
目前还是混乱但充满可能性的状态——"不是像电一样是 commodity"。

</div>

</div>

</div>

---

# 硬件彩票：为什么 Transformer 赢了，Capsule Network 死了

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 硬件彩票的概念

<div class="text-sm leading-relaxed space-y-2">

摩尔定律的黄金时代结束了。通用的性能提升不再存在。现在的算力都是**专用算力**——如果你的算法没有利用到这些专用算力，就吃不到时代的红利。

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm mt-3">
"Hinton 老师强推的 Capsule Network，从概念上非常 make sense，但它在 GPU 上不友好，所以至今没有得到广泛应用。"
</div>

</div>

</div>

<div>

### Transformer 抽中了 GPU 的彩票

<div class="text-sm leading-relaxed space-y-2">

Transformer 非常适合并行——里面大量矩阵乘法。

**模型结构决定了推理效率的上界**。如果上界太低，系统工程师就无力回天了。

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-3">
"后摩尔定律时代，AI 的上限取决于系统，而不是算法。"
— David Patterson 的判断，被近十年的发展反复印证
</div>

</div>

</div>

</div>

---

# RoPE：模型结构如何与 Infra "完美联姻"

<div class="text-sm leading-relaxed space-y-3 mt-4">

位置编码有上百种实现。但为什么是 RoPE（旋转位置编码）活下来了？

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 为什么其他方案被淘汰

<div class="text-sm leading-relaxed space-y-2">

- **ALiBi**（Absolute Position Bias）：需要修改 Attention 内部实现
- FlashAttention 成为训练必须之后，大部分用户没有能力修改 FlashAttention
- **凡是需要修改 Attention 内部实现的位置编码方案，都被淘汰了**

</div>

</div>

<div>

### RoPE 为什么是"最佳搭档"

<div class="text-sm leading-relaxed space-y-2">

- 绝对位置编码的方式实现相对位置编码
- **独立于 Attention Kernel 之外**——可以在 Attention 之外独立计算
- 与 FlashAttention 互补，不需要修改核心实现

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm col-span-2 mt-2">
"模型结构设计得好，它就可以跟基础设施有一个共鸣的效果——大家可以互相提高，能够有更高效的实现，整体的训练推理效率都会提高很多。"
</div>

</div>

</div>

</div>

---

# DeepSeek 的 Infra 为什么全球顶级

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 从幻方量化继承的基因

<div class="text-sm leading-relaxed space-y-2">

DeepSeek 深厚的 infra 功底来自于之前做**幻方量化**时对性能的极致压榨——自建机房，对机器的每一个细节深度控制，能做**全栈优化**。

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-2">
"DeepSeek 的 infra 团队可以说是全球顶级。是不是第一不好说，但绝对是顶级的。"
</div>

</div>

</div>

<div>

### 算法团队也懂 Infra

<div class="text-sm leading-relaxed space-y-2">

2024 年初，是 DeepSeek 的**算法同学**写出了 MoE 的高效实现。后续的细粒度 MoE 也是他们在推理系统里第一个做出来的。

- infra 能力强 → 算法研究员可以更快更充分地探索各种选项
- 算法同学学习 infra 知识 → 算法设计更 infra 友好
- 形成了 **Co-design 的正循环**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">
"自建机房的优点在于控制力强、总成本可以压低。但缺点在于难以短期大规模扩张。"
</div>

</div>

</div>

---

# MoE 架构的三大 Infra 挑战

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**① 细粒度专家**
专家粒度越细越好（DeepSeek MoE 的发现），但矩阵乘法的维度因此变低，对 GPU 实现不友好。需要在效果和效率之间取舍。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**② 动态路由选择**
MoE 通过路由模块决定每个 token 选择哪几个专家。这是数据依赖的——而 GPU 擅长静态数据流。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**③ 专家并行系统**
MoE 扩展到万亿参数——只激活几十分之一。需要配合专家并行和数据并行策略，对系统设计和通信要求极高。

</div>

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./moe-challenges.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="mt-3 text-xs opacity-50">
DeepSeek 在 2025 年提出的 DeepEP 和 DPEP 分别解决了专家并行的通信问题和计算选择问题。"MoE 这一波，DeepSeek 是引领了时代潮流的。"
</div>

---

# Test-time Scaling 的三个时代

<div class="text-sm leading-relaxed space-y-3 mt-4">

Test-time scaling 一直存在，只是以不同的形式出现。

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">

### 时代一：集成学习
**Scale 的对象：尝试次数**

同一个问题让不同模型回答多次，对结果进行集成。这是早期的机器学习方法——"所以为什么我把 beam search 删掉了"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 时代二：长思考（o1）
**Scale 的对象：单次输出 token**

让模型思考几十万 token，解决高难度问题（如国际数学竞赛）。但成本极高，主要服务科学家群体。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 时代三：Coding Agent
**Scale 的对象：与环境交互的次数**

每次思考只有几百 token，但持续与环境交互。可以走进日常生活——今年的"小龙虾"热潮就是一个例子。

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"Coding agent 的场景主要依赖前缀缓存（prefix caching）——尽量确保历史状态保留下来，下一次请求可以很快进行。"
</div>

---

# 小龙虾攻打月球：Agent 时代的前缀缓存灾难

<div class="text-sm leading-relaxed space-y-3 mt-4">

当 Agent 在多轮对话中被反复调用时，**前缀缓存**（prefix caching）直接决定推理效率。但很多 Harness 框架的设计者对推理引擎的理解非常有限。

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">

**ChatGPT 的历史错误**
system prompt 里嵌入当前日期 → 前缀缓存在每次日期切换时统一失效。优雅的做法：把日期当作工具提供给模型，需要时再查询。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**整点定时任务**
某些框架把当前时间精确到秒嵌入请求，且定时任务总设在整点。一到整点，推理系统收到一大波巨大流量。

</div>

</div>

</div>

<div class="mt-3 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
"Moonshot 的同学对此有一个非常形象的说法：一群小龙虾一到整点就集体出动攻打月球。"
</div>

<div class="mt-3 text-xs opacity-50">
解决方案很简单：每小时随机选取时间点启动定时任务，不要把时间戳放在 system prompt 里。但这些"很基础的逻辑"，在浮躁的时代反而少有人知道。
</div>

---

# 模型结构 × 芯片架构：加速耦合

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### David Patterson 的两个判断

<div class="text-sm leading-relaxed space-y-2">

**① 摩尔定律已无法延续**
通用算力不再增长。更高性能的唯一出路：为特定负载设计专用芯片。

**② 矩阵乘法简单但极其有效**
二十年工业界经验表明：矩阵乘法这个特殊负载就是如此有效。你只要能把矩阵乘法算快，很多问题就能解决。

</div>

</div>

<div>

### 模型必须往芯片靠

<div class="text-sm leading-relaxed space-y-2">

芯片已经设计成那个样子。如果你没有往芯片那边靠，效率就会极大降低。

这就像苹果 M 芯片和 iOS 的耦合——但比那个更根本。高性能计算芯片基本上都**特化成了矩阵乘法计算单元**，模型结构的自由度被芯片设计锁住了。

</div>

</div>

</div>

---

# FP8 的故事：DeepSeek 如何领先一个身位

<div class="text-sm leading-relaxed space-y-4 mt-4">

从 A100（Ampere）到 H100（Hopper），英伟达旗舰芯片引入了 **FP8 算力**——8 比特浮点运算比 16 比特快**两倍**。但想用上加倍的算力并不容易。

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">

**全局量化 FP8**
简单直接，但容易严重损失精度。很多团队止步于此。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**分块量化**
DeepSeek 是第一个大规模跑通 FP8 训练的团队。权重做 block quantization，activation 做逐 channel quantization。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**矩阵乘法 + 向量单元累加**
DeepSeek 发现了第二个关卡：利用芯片上两部分计算单元同时执行，在精度不损失的情况下实现计算效率领先。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**领先一个身位**
"这些故事都写在 DeepSeek 的技术报告里。只是看的人多少的问题。"

</div>

</div>

</div>

---

# Dispark：算法 Novelty vs 工程极致

<div class="text-sm leading-relaxed space-y-3 mt-4">

投机解码（Speculative Decoding）的演进：让模型一次猜测接下来要生成的多个 token，把逐 token 的解码变成"小段预填充"，大幅提升效率。

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Eagle / MTP**
猜测长度短（3-5 个 token），接收率高。DeepSeek 提出的 MTP 也是这类。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Diflash 路线**
一次性猜 16 个 token。vLLM + NVIDIA 已实现对某些模型达每秒上千 token 的速度。但猜错也很多，存在算力浪费。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Dispark（DeepSeek）**
在 Diflash 基础上，估计猜测 token 的置信度，跳过大概率不准确的 token。腾讯混元（DeepCut）和上海交大（Domino）也在同期独立提出类似思路。

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"在算法上有多么 novel 并不能算很 novel。但创新是一回事，把创新的想法扎实做出来又是另一回事。Dispark 继承了 DeepSeek 一如既往的非常扎实的 infra 基础，把推理优化压榨到了极致。"
</div>

---

# "好的 Infra 不是加出来的，是设计出来的"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 为什么说"加出来"不行

<div class="text-sm leading-relaxed space-y-2">

一两年前模型还比较小，推理负载不高，算力多于需求。大家没那么在意效率。

但现在**训练和推理的开销已达到 1:1，推理还在持续增长**。算力供不应求——自然资源有限（电力、芯片），不可能快速扩张。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm mt-2">
"拿发电来打比方：训练在研究发电机结构，推理在拿做好的发电机去发电。你可以设计一个通用发电机到处用——但发电效率很低。"
</div>

</div>

<div>

### Co-design 怎么做

<div class="text-sm leading-relaxed space-y-2">

提前设计发电机时就把当地水文、风力条件考虑进去。

**模型团队和 Infra 团队各干各的，这个团队就完全没有前途。**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">
算法团队某天异想天开说"attention 的 head size 能不能开到 1024？"——infra 团队可能就"晕过去了"。因为这在硬件上很难实现。
</div>

<div class="text-xs opacity-50 mt-2">
作者概括：这不是说算法要完全服从 infra，而是说两者需要在设计阶段就对话——就像建筑设计不能等到施工阶段才发现承重墙位置不对。
</div>

</div>

</div>

</div>

---

# 算法与 Infra 团队如何 Co-design

<div class="text-sm leading-relaxed space-y-3 mt-4">

游凯超自己是少有的"既懂算法又懂 infra"的人——在算法那边熏陶了几年，又在 infra 这边熏陶了几年。但这很难复制。

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**招聘**
能招到既懂算法又懂 infra 的人当然最好。但"真的需要这些同学能够有耐心去学习，另一方面也是看缘分。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**坐在一起工作**
"一起吃饭嘛。吃饭聊点什么嘛，互相聊一聊对方关心什么话题。互相理解一下。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**算法主动靠近 Infra**
算法的同学需要了解硬件在做什么——至少知道 FlashAttention 怎么写，attention 在各种 batching 条件下的计算过程。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**避免 Infra 过度主导**
MoE 中曾出现 Infra 为均衡选择 Expert Choice——算法上不可接受。"两者谁的话语权更高？理想情况下应该 Co-design。"

</div>

</div>

</div>

---

# 中美 AI Infra 的差异化路径

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 中国：极致效率

<div class="text-sm leading-relaxed space-y-2">

- 高端算力紧缺 → 国产卡适配，把各种能用算力都用起来
- 土地和电力供应**充足**
- 模型更重视效率，压榨每一分硬件性能
- 开源模型扛起全球开源大旗

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
"中国模型求效率，美国模型求效果——这跟两边的算力供给问题有关。"
</div>

</div>

</div>

<div>

### 美国：极致效果

<div class="text-sm leading-relaxed space-y-2">

- 高端算力充裕，芯片没有限制
- 土地和电力供应**存在问题**
- 模型更重视效果，追求更强的能力
- 顶级模型走闭源路线（OpenAI、Anthropic、Gemini）

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">
"它们不是竞争，更多是各自有各自的局限和掣肘的地方。"
</div>

</div>

</div>

</div>

---

# Coding Agent 将如何重塑开源社区

<div class="text-sm leading-relaxed space-y-3 mt-4">

2025 年 GitHub 统计：vLLM 按贡献者活跃度排名**全 GitHub 第一**。但 2026 年带来了新的问题。

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">

**垃圾 PR 产业化**
培训机构通过提交垃圾代码包装学员简历——"彻底打破了我们对开源社区用户都是善意的这一基本假设。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**AI Slop 泛滥**
十分钟提交 20 个 PR 的机器人账号。PyTorch 核心维护者 Edward Yang 也说："与其花时间看别人的 PR，不如我自己重写一遍。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**社区两极分化**
未来社区会分成"维护者"和"用户"两层——用户只需提交 bug report 或 feature request，不需要贡献代码。代码由维护者用 Coding Agent 自己写。

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"AI 可以帮我们走完 90% 的路程，但还有 10% 的关键的画龙点睛的那一部分需要人来提供支持——长期维护、顶层系统设计、对接下来三个月要发布的新模型的预判。"
</div>

---

# 开源模型最终会赢

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 为什么模型藏不住

<div class="text-sm leading-relaxed space-y-2">

核电厂发电给一个城市用——这个城市用一辈子也不可能研究出核聚变技术。

但大模型不一样。**每一个 token 都带着模型的烙印。**

用户用了很长一段时间后，用户自己的数据就已经可以训练出一个模型了。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
"模型不是一个能够长期藏得住的东西。它不是一个像核武器一样你研究出来了爆炸一次给别人看就可以藏着它用于威慑的东西。"
</div>

</div>

<div>

### 飞轮效应

<div class="text-sm leading-relaxed space-y-2">

Coding agent 加速了这个过程——"一般一个月左右，一个公司级别的机构就能够收集到足够它训练的数据。内部飞轮就可以转起来。"

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">

"我个人是觉得开源模型最后会赢的。"

</div>

<div class="text-xs opacity-50 mt-2">
作者概括：游凯超赌的不是中国赢，而是开源赢。"中国模型开源我就支持中国模型，其他国家的模型开源我也支持。"
</div>

</div>

</div>

</div>

---

# 模型会成为 Commodity

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">
"我认为开源模型最后会赢。那么模型开源了之后，大家都可以用——模型就会变成 commodity。"
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**模型能力不是长期护城河**
"没有一个东西你能够守着它守一年，你必须能够不断的推陈出新。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**真正的护城河是快速迭代**
谁能更快地收集数据、训练模型、部署推理——形成良性飞轮。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**vLLM 的定位**
"我们聚焦在推理。我们认为模型这个事情会有人帮我们解决。"

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
Red Hat 已经把 vLLM 打包到 Linux 企业发行版里——"未来部署的不再是一个冷冰冰的操作系统，而是一个能运行 AI 的 AI 操作系统。"
</div>

---

# Hot Take：百万上下文足矣

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 游凯超的判断

<div class="text-sm leading-relaxed space-y-2">

与人打交道的模型，上下文不需要大幅超过**百万 token**。

个别领域（生物、化学等自然科学）需要千万甚至亿级上下文——但可以通过外部工具实现，不一定需要模型原生支持。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
"长程任务或终身学习需求可以通过外部工具实现——记忆模块、技能模块、sub-agent 模块。"
</div>

</div>

<div>

### 如果这个预测成立

<div class="text-sm leading-relaxed space-y-2">

当前模型结构设计和 infra 还可以在现有范式下**延续很长时间**。

这意味着：
- 推理引擎不需要为超长上下文做根本性的架构调整
- 当前围绕 KV Cache 和 PageAttention 的技术路线是正确的
- 可以在现有框架下持续做效率优化

</div>

<div class="text-xs opacity-50 mt-2">
"这是我的 hot take，我们可以几年之后再回过头来看看这个预测对不对。"
</div>

</div>

</div>

---

# 凯超的哲学底色：以中有足乐者

<div class="text-sm leading-relaxed space-y-3 mt-4">

游凯超的人生选择背后，有一种一以贯之的价值观。

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**享受学习**
"我不是一个卷吧，更多是我还是比较享受学习。我没有把笔记的数量当做一个目标来优化——更多是自然而然的学习结果。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**追求意义**
"每个人追求的目标不一样。有的人追求金钱，有的人追求权力。我追求的就是意义——我做的事情是不是有意义。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**写作即思考**
"如果你没有办法清晰地写下来，说明你对他还不够了解。我比较喜欢数学和物理，所以也比较喜欢形式化——把语言落实到文字，然后再去 polish。"

</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center text-lg leading-relaxed">
"仓廪实而知礼节，衣食足而知荣辱。"
</div>

<div class="text-center text-xs opacity-50 mt-2">
游凯超引用这句古语来解释 vLLM 团队的共同特质——物质需求简单，"有吃有住，有电脑能上网就可以了"，剩下的精力都用来追求意义。
</div>

---

# 后摩尔定律时代：AI 的上限取决于系统

<div class="text-sm leading-relaxed space-y-4 mt-4">

这不是游凯超的判断，而是 **David Patterson** 的判断——但游凯超完全认同，且近十年的发展在反复印证它。

<div class="grid grid-cols-2 gap-3 mt-4">

<div>

### 系统决定了什么算法能留下

<div class="text-sm leading-relaxed space-y-2">

- FlashAttention 告诉我们：精确的 Softmax Attention 可以被高效实现 → 各种近似方法的论文都废了
- Continuous Batching + PageAttention 把自回归解码的成本降了下来
- Chunk Parallel（线性注意力）：宋林提出的分段计算方法让线性注意力变得实用

</div>

</div>

<div>

### 这是一个"系统彩票"的时代

<div class="text-sm leading-relaxed space-y-2">

你的算法能不能被系统高效实现——只有被高效实现的算法才能留下来。

- 需要跟硬件 Co-design
- 需要跟系统 Co-design
- 需要跟 Harness Co-design

**通用的进步已经没了，只有特化的进步。**

</div>

</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期三小时对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"你如果不跟我们一起创业，你赚到了很多钱，但是十年之后我们的项目失败了，你是开心还是不开心？"
<div class="text-xs opacity-60 mt-1 not-italic">— 游凯超和 Simon 对 Woosuk 的"逼宫"，2025 年夏</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"我个人是觉得开源模型最后会赢的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 游凯超对模型格局的 bet</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"你可以说我的东西不 novel，但是你不可以说我的东西没有用。"
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么从算法研究转向系统工程</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"token 它是带着模型的烙印的——你没有办法把一个 DeepSeek 模型的 token 转化为一个 Kimi 的 token。"
<div class="text-xs opacity-60 mt-1 not-italic">— Token 和电的关键区别</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic leading-relaxed">
"学术界它也不是一开始就礼乐崩坏的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AI 学术圈的论文通货膨胀</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"我们四个人可能共享一个大脑，只需要谁的时候谁出马。"
<div class="text-xs opacity-60 mt-1 not-italic">— Four co-founders, one brain</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得深思的观点：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"仓廪实而知礼节，衣食足而知荣辱。"
<div class="text-xs opacity-60 mt-1 not-italic">— 引用古语解释 vLLM 团队为什么能拒绝高薪</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"以中有足乐者，不知口体之奉不若人也。"
<div class="text-xs opacity-60 mt-1 not-italic">— 引用《送东阳马生序》，解释 vLLM 团队的共同特质</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"一群小龙虾一到整点就集体出动攻打月球。"
<div class="text-xs opacity-60 mt-1 not-italic">— Moonshot 同学对整点定时任务导致推理流量洪峰的形象描述</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"AI 可以帮我们走完 90% 的路程，但还有 10% 的关键的画龙点睛的那一部分需要人来提供支持。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 Coding Agent 和开源社区的未来</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic leading-relaxed">
"后摩尔定律时代，AI 的上限取决于系统，而不是算法。"
<div class="text-xs opacity-60 mt-1 not-italic">— David Patterson 的判断，被近十年发展反复印证</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"我追求的就是意义——就是我做的事情是不是有意义。"
<div class="text-xs opacity-60 mt-1 not-italic">— 游凯超的价值选择</div>
</div>

</div>

---

<div class="text-center mt-20">

# 碳基提供灵感，硅基提供执行力

<div class="text-sm opacity-50 mt-4">
游凯超 · vLLM 联合创始人 & 首席科学家
</div>

<div class="text-xs opacity-30 mt-12">
商业访谈录 · 小俊播客 · 2026 年 7 月
</div>

</div>
