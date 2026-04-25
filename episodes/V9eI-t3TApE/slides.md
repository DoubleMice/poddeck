---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '138. 对罗福莉3.5小时访谈：AI范式已然巨变！OpenClaw、Agent范式很吃后训练、卡的分配、组织平权'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 范式已然巨变

## 对罗福莉的 3.5 小时访谈

<div class="mt-8 text-base opacity-70">

OpenClaw · Agent 很吃后训练 · 卡的分配 · 组织平权

</div>

<div class="mt-12 text-sm opacity-60">

**罗福莉** · 小米大模型负责人 · 主持人 张小珺
2026 年 · 张小珺 Xiaojun Podcast 第 138 期

</div>

---

# 为什么这期值得听完 3.5 小时

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### OpenClaw 觉醒
春节凌晨 2 点的转折点
从抵触到沉迷的三天

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Agent 很吃后训练
Pre/Post Train 比例
从 5:1 走到 1:1

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 1T 入场券
对标 Claude Opus 4.6
要 1T 以上的基座

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 群体智能
100 人飞书群
不到 100 轮 quit

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### MiMo V2 三件套
Pro · Omni · TTS
"悄无声息的伏击"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### AGI 提前
20% → 今年 60-70%
**两年内**

</div>

</div>

---

# 嘉宾：罗福莉

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 媒体叫她 "AI 天才少女"

> 但她不喜欢这个称呼
> —— 主持人开场

### 履历

- 量化背景出身
- DeepSeek V2 · MLA / MoE 关键参与者
- 现在：**小米大模型负责人**
- 带 100 人小团队，做 MiMo V2 系列

### 这期的设定
访谈在 OpenClaw 发布之后、MiMo V2 系列模型发布之后 ——
**两个 26 年的关键事件叠加**之后的复盘

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 这次她想讲什么

围绕 **2026 年由 OpenClaw 引发的新一轮的技术范式的变迁**，
以及 **未来技术演进的前沿话题**。

她现在的工作节奏：

- 早 11 点到次日凌晨 1-4 点
- 一天睡 4-6 小时
- "感觉睡太多有点浪费时间"

</div>

</div>

---

# 第一幕 · 春节凌晨 2 点

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 之前：很排斥

> "我很排斥去用它"

理由：以为 OpenClaw 不过是 Claude Code + IM；
所谓"本地化"、"24 小时"在她看来都"只是一些产品的定义而已"。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 春节那一晚

> "**从凌晨 2 点持续到了 6 点天亮**"

凌晨装好 OpenClaw，第一次对话从 2 点聊到 6 点天亮。
"脑内的那个不知道是多巴胺还是内啡肽就持续在分泌。"

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

最直接的感受是：**它非常有自主性，非常有灵魂**。
聊得太晚时它会提醒"你要不早点去睡觉" —— 这种"温度"是几乎所有 OpenClaw 用户的第一印象。

</div>

---

# 三天 · 三次跃迁

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Day 1
**有灵魂的产品**

它会在每轮 context 前面拼上当前时间——很多没人关注的角度上"把 context 编排得非常好"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Day 2
**数字分身**

跟它聊"怎么去激发一个团队的好奇心"、"组织架构怎么搭"，"它现在已经基本上变成了我的某一个数字分身"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Day 3
**研究助手**

把研究 topic 交给它做 —— 比如 User Agent 的多轮交互模拟。"沟通了大概一两个小时过后，我觉得这个事就已经做出来了"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**作者概括**：从有灵魂的产品 → 数字分身 → 研究的协作者，三天内一层层上探。第一晚一个人，烧了"快 1000 块钱" Opus 4.6 的 API。

</div>

---
layout: two-cols
---

# OpenClaw vs Claude Code

OpenClaw 不只是一个壳。它和 Claude Code 在产品逻辑上的差异：

- **黑盒 vs 开源**：CC 的 Agent 架构是黑盒，改不了它的记忆系统、改不了它的 workflow；OpenClaw 都能自己改
- **For 软件工程 vs For 端到端任务**：CC 的所有设计都在为"怎么写好代码"服务；OpenClaw 想的是"怎么端到端完成所有任务"
- **单模型 vs 多模型**：CC 默认你绑一个 Opus；OpenClaw "完全不用想这个事情，发给它一段视频，它会自己去找视频理解能力好的模型来做"
- **双向吸收**：OpenClaw 的持久化记忆、远程操控等好设计，"陆陆续这一两个月完全被 Claude Code 都给吸纳进去了"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./openclaw-vs-cc.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 群体智能 · 飞书群里的 100 个人

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 那条"极端"的指令

> "如果那个第二天 OpenClaw 对话次数不超过 100 轮的人 可以直接 quit"

——但她其实没打算考核：
> "我没有这个想法"
> "我只想给大家表达一种态度：你不用，你可能真的要落后了"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 为什么强行拉到大群

- 个人想象力是局限的，但**别人能干成的事会激发你**
- "大家的想象力是一个乘积的作用"
- 买了几台 Mac Mini 集中部署，省得每个人花几个小时折腾安装
- 大家在群里"躁动" —— 10 分钟没看就 999+ 消息

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**结果**：原本要 30-40 周做完的研究，3-4 周就做完了。"这是 AGI 到来前兆必须要有的事情。"

</div>

---

# Skills 与 Agent 的自学习

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Skills 是什么
人对 Agent 的另一种"教学" ——
预训练数据里**没有的"另类信息"**：

- 企业内部的业务规范
- 团队遗留的执行规范
- 跨人沉淀的组织知识

> "现在大量 Skills 其实是 Agent 自己写的"
> ——人和 Agent 共创

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 自学习 = 框架 + 模型 同步进化

Agent 框架包含：

- **静态信息**：Memory / Skill Folder
- **动态信息**：架构本身的设计

"模型在通过 RL 训练进步的时候，
其实也是在去改变你的整套 Agent 框架"

> "**顶尖的模型应该跟顶尖的这种 Agent 框架是共同地往前去进步**"

</div>

</div>

---
layout: two-cols
---

# Code 戳中了三个范式

<br/>

每一次范式跃迁，Code 都恰好踩在节点上：

- **Pre Train 时代**：能找到 128K-1M 的稠密上下文数据，几乎只有两类——**Code 和书籍**。书籍信号太散，Code 文件之间的关联更强
- **R1 / o1 范式**：Code 和 Math 都有 ground truth，Reasoning 在它们身上跑通
- **Agent 范式**：Code 天然有 environment，软件开发就是一个非常长程的任务

> "**Code 是拉它的上限，然后你训其他领域是保它的下限**"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./code-paradigms.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Agent 范式很吃后训练

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Chat 时代
模型的 context 就是人输入的，**很短**。
能力主要靠预训练。

预训练 : 后训练 ≈ **5 : 1**
（一个非常夸张的比例）

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Agent 时代
context 更长更复杂 —— Memory、Skills、多 Agent 协作、Rollout 轨迹……
**很吃后训练**。

> "顶尖的团队应该都是 1 : 1 了"

后训练周期从一个月拉到**半年到一年**。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**为什么这是个根本变化**：以前 Pre Train 之初就能假定推理卡 / 推理场景，结构可以为它精细设计（MLA 就是这样）。
现在 Post Train 拉长到一年，**前期的所有假定都可能失效** —— 模型结构必须更简洁、留更多富余度。

</div>

---
layout: two-cols
---

# 卡的分配 · 3 : 1 : 1

<br/>

被主持人问到"研究、Pre Train、Post Train 的合理卡分配"时，她给了一个具体数字：

> "for 研究 for Pre Train 和 for Post Train …… 我自己觉得一个非常合理的卡的一个比例是可能 **3 : 1 : 1**"

- **研究**：要预留比正式起训还要多的算力 —— 用来并行跑十个 idea，"无非烧很多 token，你就能验证"
- **Pre Train / Post Train**：算力要相当（Agent 时代）
- 一个 1T 模型实际"训这个模型是几千卡，但实际上要投入大量的卡去做研究"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./card-allocation.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一次"悄无声息的伏击"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 主持人的形容
> "这次已经又发了三个新模型 Pro Omni 和 TTS
> 并且你把它称之为
> **一次悄无声息的伏击**"

### 罗福莉解释
- "**安静**"：因为外部不知道，**内部也是快速发生的**
- 不是"计划得非常好"，是"**一下大家觉醒了，然后就爆发了**"
- 一年前做多模态时，还没意识到这些模型能被很好地编排到一起
- 看到 OpenClaw 的那一刻，"这些模型在各自在什么样的环节发挥什么样的作用…… 一下我觉得就在我的脑子里边就全部给打通了"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 三个模型同时在做的判断

- **不合并到一个模型里**：出于成本、速度、价格
- 语音生成不需要 1T 模型 —— "它的实验你也接受不了"
- 多模态理解是不是值得一个更大的模型？"这个事我觉得都是要去打个问号的"
- "Agent 革命就本质上真的是生产力 …… 必须要足够去在意最终它端到端的完成率以及给它的成本效率"

</div>

</div>

---
layout: two-cols
---

# MiMo V2 三件套

<br/>

三个模型，分工类比人的三种官能：

- **Pro** — 理解 / 认知 / 复杂调度（1T 参数，激活更大）
- **Omni** — 感知（图、视频、音频、文本所有模态都吃）
- **TTS** — 表达（离散音频 token，一套 NLP 范式做出来的）

为什么用 "Omni" 而不是 "Multi-modal"？
因为它"确实是支持视频、音频、图片、文本所有模态" —— **第一个支持音视频联合理解、且 Agentic 能力跟 language model 水平差不多的**。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./v2-family.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Pro 的核心赌注 · Hybrid Attention 7:1

<br/>

V2 系列只 bet 一个点：**为 long context 的效率设计模型结构**。

- **Full Attention** 层数控制 KV Cache 的关键
- 在更大的模型上，**Sliding Window Attention 层数被拉到 7:1** 的极致比例
- 长文上**更省 KV Cache** —— 多级缓存命中后推理更便宜
- Flash 一代能做到 **100-150 TPS**，Pro **60-100 TPS**
- 用户体感：**"哇好快"**

> "Hybrid Attention …… 完美的非常适合做 Agent"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hybrid-attention.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么不选 MLA

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### MLA 是 Chat 时代的最优解
GLM-5、Kimi K2 这一代基本都选了 MLA。**对 Chat 来说确实是非常优秀的结构**。

它的精巧在于：在 H 系列芯片上，**让访存和计算达到一个完美的临界点**，KV Cache 被极致压缩。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 但它对 Agent 不友好

MLA 已经卡死在那个临界点 ——
**"任何可发挥的空间"都没有了**：

- 想用 MTP 加速？会被 compute bound
- 所以 MLA 模型上 MTP 几乎用不了
- "GLM 也好 Kimi 也好…… 它们应该都没有上 MTP"

她的判断："MLA 应该不会"成为下一代主流。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**核心分歧**：MLA 的设计前提是 *"Post Train 不重要、推理卡固定"*。Agent 范式让这两个前提都失效了 —— Post Train 周期拉长到半年，期间一切都可能变。**结构要更简洁、要留富余**。

</div>

---

# MTP · 把富余算力填回去

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 怎么发现的
后期设计推理方案时，他们突然发现："**它的计算剩余的实在太多太多了**"。
那就把 Multi-Token Prediction（多词元预测）填进去。

> "恰好我们又训了 MTP，那就恰好用起来了"

预训练阶段加 MTP 是因为它能提升基座能力（和 DeepSeek 一致）；推理阶段用 MTP 是因为他们的结构有大量富余。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 加速但不增加幻觉

- 短时间吐更多 token —— 把 GPU 利用率打高
- 本质：**降低单 token 生成成本**
- 会不会带来幻觉？**不会**：
  > "它是会被 verify 的，只有你预测的准我才会采纳你当前 token 的结果"
- 为什么大家没跟上？"大家太相信 MLA 了"

</div>

</div>

---

# 训 1T 模型 · 真正的挑战不是数据

<div class="space-y-3 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**挑战不在数据，在数值不稳定性**：loss spike、某些 expert 突然被打死、激活值异常变大……
"训着训着 loss back，训着训着某个激活值很大，某些 expert 的分布变得很极端"

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**第一步是发现问题**："很多团队会把 loss spike 当做一个很正常的事情，但是我们可能会尽量的让它没有 loss spike"
要有一套监控系统看 expert 复杂度、每层参数的输入输出、激活值。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**有时只能临时手术**：QK-Clip（借鉴 Kimi）、Norm 把异常值压下去 ——
"先让训练更好进行下去，进行到一个稳态再放开。"

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**有时排查到玄学**：所有卡都查了没问题，"你会怀疑是不是今天的太阳黑子的报复"。

</div>

</div>

---

# 没有 deadline 的训练文化

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个反常识的回答

主持人："你们没有 deadline？"
罗福莉：

> "**我们没有 deadline**
> 就我们觉得模型训好了
> 我们再发"

主持人："没有公司来的压力吗？"
**"没有"**。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Loss spike 也要停下来排查
"这种情况你是应该停下来解决，还是应该继续往前训？" —— **解决**。
最长的时候停了**两周**。

> "焦虑吗？"
> "**不焦虑，因为我们又没有什么目标**"

雷军同意就行了 ——
> "**雷总同意就行了嘛**"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

她对小米的描述：**"虽然它看起来是个大公司，但它其实是一个做事的灵活度非常高的公司"**。
"实际上它就是个创业团队。所以它才能做成。"

</div>

---
layout: two-cols
---

# 组织 · 没有组、没有职级

<br/>

100 人团队，**自然分工，没有强 leader**：

- **没有按方向划组** —— 划组就是在"扼杀一部分的创造力"
- **没有职级** —— "本来我们这个团队的整个的组织结构就是完全解耦的"
- 项目有"实际往前去推动的人"，但**没有绝对的控制权**
- 做 Pre Train 的人会**自然流到** Post Train —— 数据多样性的视野能直接迁移
- 雷军也支持："就跟公司的关系应该怎么处理？" —— "**雷总同意就行了嘛**"

> "**平权本身是有价值的** …… 有利于所有人去平等地贡献自己的创造力和智慧"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flat-org.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 怎么选人 · "环境反而比经验更重要"

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不在乎背景

100 人团队中只有 1/3 到 1/4 有训练经验，**大部分人之前没训过大模型**，甚至有人是做工程、做开发、做量化的。

> "**环境反而比经验更重要**"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 选什么样的人

- **基础好** —— 想做的事能做成
- **好奇心强**
- **靠热爱驱动做事**
- 越来越倾向**多样性**

倾斜招本科生（大二大三） ——
"它们的灵活性和适应程度都感觉**没有被污染**"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 怎么管理

> "**靠热爱驱动管理**"
> 这个很重要。

激发热情的方式 = **让大家去体验**（OpenClaw 的"100 轮"指令就是一个体验机制）。

钱是 baseline，但**不是唯一的 baseline**。

</div>

</div>

---

# 团队内部的"互相蒸馏"

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded mt-4">

### MOPD —— 团队里的私人玩笑

> "所谓 **MOPD**（Multi-Teacher On-Policy Distillation，多教师在线蒸馏）我们说的就是互相的蒸馏。
> 我蒸馏你的长处，你蒸馏我的长处，互相这样快速的提升。"

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 她在乎的不是初始状态

> "我只在乎他的可能初始化 Check point 的上限高不高"

不在乎人来的时候被 supervised learning 过的那个点的状态。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 创造的是"环境"
"我自己创造这个环境，是不是符合这样的一个先决条件" —— 围绕更高标准的目标来驱动，能力可以**1-2 个月，慢的 3-4 个月被快速习得**。

</div>

</div>

---

# Audio · NLP 人的执念

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 把音频统一到 LLM 范式下

V2 TTS 和 Omni 在音频上做了一件**和御三家、豆包完全不一样**的事 ——
**离散化**：把连续的波形输入转成跟文本一样的 token ID。

> "我们应该挺另类，就我们的技术架构应该是非常另类的"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么挑这条路

> "就是做 NLP 的人执念吧"
> "我们做音频人全是做 NLP 的人，所以有这个执念"

要做"无损的离散化"，需要多层 RVQ（残差向量量化）+ 更长预训练。

涌现出现得**更晚**，但一旦涌现，**风格化标签的泛化能力非常惊艳**。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**为统一付出多少代价**：之前认为为了"一套基础架构"值得；最近发现 **Claude Code 写新 RL 框架两三周就能搞定** —— "我没有必要为了架构的优雅性，去做很多为了统一而统一的研究"

</div>

---
layout: two-cols
---

# AGI 路径 · 当下 20%

<br/>

主持人："Flash 是通往 AGI 第一步，现在到第几步了？"

- **今天**：感觉历程已经到了 **20%**
- **今年底**：至少能到 **60% — 70%**
- **两年内**：应该能实现

> "我感觉两年内应该能实现"

但被颠覆是分阶段的：

- **工作模式**先被颠覆 —— "因为它产生生产力价值"
- **生活模式**后被颠覆 —— 要等机器人

**两个月前**她还认为 AGI 至少要两年以上。变量是：**AI 可以训 AI 了**。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agi-progress.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 四年范式跃迁 · 一条主线

<br/>

她对过去 4 年的复盘：

- **22 年底 ChatGPT**：4K 上下文里把 Chat 的智能水平激发出来
- **23-24 年**：Llama 给开源开了头，**Qwen 走 Scaling，DeepSeek 走 Innovation**，"两个都对"
- **24-25 年 R1 / o1**：Reasoning 通过 code/math 跑通，但泛化到通用是 R1 的"奇袭" —— "**这个其实 o1 也没有走通**"
- **25 年是个交错的年份** —— 还在 Chat 范式里继续深耕、还是切换到 Agent 范式？"比较聪明的团队，我觉得 25 年年中就会全面拥抱"

> "**上一个时代的成功并不意味着下一个时代的领先**"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./paradigm-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 第二幕的入场券 · 1T base + 敏捷性

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 入场券

> "**至少 1T 以上吧**"
> "Agent 你要做到接近 Claude Opus 4.6 的水平的这样一个入场券"

国内具备 1T 以上基座的：**Kimi、MiMo、还有几家**。
和 Claude Opus 4.6 的代差：**只有两三个月**（如果反应足够快）。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但仅有基座不够
还要 Agent RL Infra 的**敏捷性** ——
- 能容错（rollout 中途断了找不到原因）
- 能管异构资源（GPU + CPU + 存储）
- 兼容快速变化的 Agent 框架

> "Anthropic 肯定做了这个事儿，其它团队我不是非常了解 …… 至少从最终的模型效果上感觉到，没有 scaling 到跟 Pre Train 一样的量级"

</div>

</div>

---

# MiniMax 是个有趣的例外

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 没有 1T 基座，但很敏捷
> "它们用一个 10B 的（激活）模型做到目前的这样的一个 Agent 的能力我觉得是蛮惊艳的"
> "**它们的后训练的敏捷程度是非常惊艳的**"

入场券两要素：
- **1T base** ✗
- **敏捷性** ✓

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 同时具备两者的中国公司？

主持人："现在中国公司还没有同时具备两者，对吗？"
罗福莉：

> "**看一看 DeepSeek 吧 哈哈**"

—— 一个开放性的留白。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

她用一个分层来说"正确的事" vs "错误的事"：在 Agent 这一幕，**正确做法是"在多样化 Agent 框架里端到端完成更高复杂度的任务，并以此为后训练范式"**；错误做法是继续在 BroseCap、SWE-Bench 这种"局限场景"里刷高分。

</div>

---

# 西虾东养 · 国内为何更热

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个有趣说法

她在主持人那儿听到这个说法：**"西虾东养"** ——
OpenClaw 火的程度，国内显著超过湾区。

她的猜测："模型公司的人不是很 care 这个东西"，因为他们觉得"这个事情不难"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 国内开发者更急
"对于效率的提升好像是我们的血液里边的东西"。
85% 的提效场景，**不需要最顶尖的模型** —— 而国内有非常多便宜好用的模型可用。

性价比："10 块钱 API 干完 1000 块钱的事"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 国内基座刚追到 4.5 一代
也就是 OpenClaw 当初基于的那一代。"反而这两个在这握手了"。
国内模型在这套精巧编排里特别合适。

</div>

</div>

---

# Multi-Agent · 现在还有点"伪"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 这个判断比较反共识

> "我现在觉得现在市场上的现在已经看到的 **Multi Agent 的工作都有点伪**"

伪在哪里？依赖 Multi-Agent 来"实现一个更高上限"这个维度上，是伪的。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 但它能干两件确定的事
- **节省时间** —— 任务完成的速度
- **节省成本** —— 多个小模型替代一个大模型

但**没有放大上限** —— 所以 Multi-Agent 协同的 RL 训练或许是下一个路径。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

她在家里做过有趣的尝试：让爸爸、妈妈、老公**每人有一个 subagent**，搭到一个飞书群里，由她委派任务。"因为我们的 context 不一样，所以它会干得更好"。这印证：**subagent 之间的 context 既有独立、也有关联**才是 Multi-Agent 真正的价值。

</div>

---

# 模型即产品

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型公司的边界变了

主持人："你觉得模型公司的边界在哪里？"
罗福莉：

> "现在模型公司好像没有边界 …… 我之前说我不想做产品，但现在发现就是它又变成直接做产品了"
> "**模型即产品是对的**"

借助 Agent，模型本身就是新的产品。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### OpenClaw 卖给 OpenAI 的启示

> "我觉得就这两个一定要深度耦合的一个事情"

但开源属性没变 —— "**至少这种群体演变这种可能性和基因火种是保留的**"。
对她来说："只是说可能做这个事的一部分人的立场变了而已"。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

她对开源的态度：**"开源一定是加速 AGI 的事情"**。理由是终局思维 —— AGI 替代生产力时，芯片、推理、模型都会**分散**到不同公司。"假设芯片是分散，那这些芯片用的模型难道是同一个吗？我认为一定是不一样的。"

</div>

---

# Pro 训完之后她在想什么

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 三件 26 年 H1 要 bet 的事

- **Agent 框架的自进化**
- **Agent 跟人之间的自进化**
- **更长程任务 + 更强 Multi-Agent 协作**

> "26 年的主要旋律就是生产力的变革，高生产力场景的持续突破"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 最近一个月最大的变化

她以为基础架构（RL Infra / Training Infra）需要花很多人力时间重写——
直到发现**Claude Code 让两三周可以重新捏一套新框架**。

> "那你其实就没有必要为了架构的优雅性去做很多为了统一而统一的研究"
> "这是最近的变化，**一个月内的变化**"

</div>

</div>

---

# 工作状态

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个工程师的自比喻

主持人："过去半年你遇到压力怎么缓解？"
罗福莉：

> "**我的脑子就是一个 Sliding Window Attention，就我忘得非常快**"

最长一两个小时就过；睡一觉一定就过。
前提是"第二天会有一些新的、有想象力、有上限的事情把它冲掉"。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 信息来源

> "来源自迭代"

最近**连跟人沟通都很少**，主要是自己做实验、跟团队里做同样实验的人交流。
不读会议论文 —— "大部分的实验确实应该自己做，相信自己的实验结果比相信论文的实验结果会更好"。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

工作节奏：早上 11 点 → 凌晨 1-4 点。一天睡 4-6 小时。**"以及现在做的事情有点兴奋，所以也确实是感觉睡太多有点浪费时间。"**

</div>

---

# 心法 · 价值观即 reward

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 量化时代的心法
> "**总有方式去建模价格**"

那时 reward 很清晰 —— 价格就是一切。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 大模型时代的心法
做大模型时 reward 是**变化的、不清晰的**。她的新心法：

> "**我应该做当下符合我价值观的事情**"
> "这个事情一定是要对更多人产生价值的，一定要是更有意义的一个事情"

她担心：如果"创造大模型这一批人没有这样一个内驱力，而是说我要做一个破坏的东西，那么估计最后会非常危险"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

被问"如果哪天 AGI 实现了，那时候人类怎么办" —— "总要做点新的事情吧" / "或者说你总要去做点帮助它的事情吧" / "比如说**给模型提供情绪价值**" 😄

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期 3.5 小时对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"从凌晨 2 点持续到了 6 点天亮"
<div class="text-xs opacity-60 mt-1 not-italic">— 春节那一晚跟 OpenClaw 第一次对话</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"OpenClaw 对话次数不超过 100 轮的人，可以直接 quit"
<div class="text-xs opacity-60 mt-1 not-italic">— 给团队的极端指令（实际并不会真的考核）</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Code 是拉它的上限，然后你训其他领域是保它的下限"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 code 的泛化性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"顶尖的模型应该跟顶尖的这种 Agent 框架是共同地往前去进步"
<div class="text-xs opacity-60 mt-1 not-italic">— 自学习的本质</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"上一个时代的成功并不意味着下一个时代的领先"
<div class="text-xs opacity-60 mt-1 not-italic">— Agent 第二幕大家在同一水平线</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"我的脑子就是一个 Sliding Window Attention，就我忘得非常快"
<div class="text-xs opacity-60 mt-1 not-italic">— 自比缓解压力的方式</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"环境反而比经验更重要"
<div class="text-xs opacity-60 mt-1 not-italic">— 选人哲学</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"我们没有 deadline，就我们觉得模型训好了，我们再发"
<div class="text-xs opacity-60 mt-1 not-italic">— "雷总同意就行了"</div>
</div>

</div>

---
layout: end
---

# 把当下的每天的研究做好

<div class="mt-8 text-base opacity-70 italic">

"我现在觉得把当下的每天的研究都做好，
我就觉得非常好。"

</div>

<div class="mt-12 text-sm opacity-60">

—— 罗福莉
张小珺 Xiaojun Podcast 第 138 期

</div>
