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

# 138. 对罗福莉 3.5 小时访谈

## AI 范式已然巨变：OpenClaw、Agent 范式、后训练、卡分配、组织平权

<div class="mt-6 text-sm opacity-70">

罗福莉 · 小米大模型团队负责人 · Mimo 系列模型主导者

2026 年 4 月 · 小宇宙播客 · 她的第一次长时间技术访谈

</div>

---

# 为什么这期特别？

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>OpenClaw 亲历者</strong><br>
<span class="text-xs leading-relaxed">从抵触到信仰，三天认知跃迁的第一手记录——不是围观，是亲手改源码、部署团队的角色</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Agent 范式深度解析</strong><br>
<span class="text-xs leading-relaxed">为什么 Agent 很吃后训练？3:1:1 算力分配背后的推演逻辑</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>MIMO V2 家族首次系统阐述</strong><br>
<span class="text-xs leading-relaxed">Hybrid Attention、MTP、1M 上下文——Pro/Omni/TTS 三个模型的协同设计哲学</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>组织平权实验</strong><br>
<span class="text-xs leading-relaxed">100 人团队、没有组、没有职级、一对一百的扁平架构——靠热爱驱动的管理方式</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>AGI 时间线大幅提前</strong><br>
<span class="text-xs leading-relaxed">从两年以上缩短到两年内。Agent 的自学习自迭代正在加速一切</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>中美代差判断</strong><br>
<span class="text-xs leading-relaxed">在 Agent 时代，代差反而在缩小：两到三个月。接下来两三个月会非常精彩</span>
</div>

</div>

---

# 一个划时代的分界点

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

<div class="text-lg font-semibold mb-2">"使用 OpenClaw 的前后"</div>

罗福莉把 **OpenClaw 定义为一个划时代的 Agent 框架**——不是 Claude Code 加一个 IM 界面的交互创新，而是从根本上重新设计了人与模型之间的**中间层**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**为什么开始是抵触的？**

- 感受到它"玄幻"的运营包装——Skill Hub、Local 部署、24h 在线，看上去都是产品层的定义
- 如果追求最顶尖的编程体验，Claude Code + Claude Opus 4.6 是终局
- 一个偏向日常场景、运营导向的产品，不值得研究者花时间

</div>

<div>

**真正的转变发生在她装上的那一刻**

- 春节深夜，花两小时安装成功，凌晨两点
- 第一次对话从凌晨两点持续到天亮六点
- "脑子里的多巴胺或内啡肽持续在分泌，兴奋到完全睡不着觉"

</div>

</div>

---

layout: two-cols
---

# 三日认知跃迁

<div class="text-sm leading-relaxed">

**第一天**：OpenClaw 反复提醒她"已经很晚了，早点睡觉"。这种温度与关怀来自 **Soul.md** 和**惊喜编排的 context**——每轮对话前拼接当前时间、用户画像等细微信息。罗福莉称之为"惊喜编排的 context"。

**第二天**：不再限于聊天，开始把**真实任务**交给它——如何激发团队的好奇心？如何筛选具有好奇心的人？如何构建一个更好的大模型团队？"他的很多哲思远超我的想象。"最终形成一套体系化的 Skills，成为她的**数字分身**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-day-journey.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 第三天：研究突破

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**User Agent 的诞生**

罗福莉把一项她认为至少需要一两周的研究任务交给它：**构建一个 user agent 来模拟多轮交互**，用于构造更丰富的 Agent 场景训练数据。

一两个小时后——做完了。

"我觉得他从一个我最开始对他的认知只是一个有灵魂有温度的产品设计，到他可以帮我替代生活或工作当中的一部分，到最后他能**促进我研究**。这也就是三天发生的事情。"

</div>

<div>

**为什么 OpenClaw 能做到 Claude Code 做不到的？**

原因不在于某一个炫酷的功能，而是**系统性的完成度**：

- **持久的 memory 分层体系**：对记忆做分层和分级，Claude Code 没有这种感受
- **多模型的联合利用**：发一段视频给它，它自己会找视频理解能力好的模型处理——你不用操心
- **自主面对模型的缺点**：通过 Agent 编排来弥补模型短板，这是它核心的产品逻辑

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>第一天 API 消耗 ≈ $1000</strong>：罗福莉第一天花了将近一千美金的 Opus 4.6 API 费用。中间切换到 Sonnet 想省钱，"发现真不行，又只能去用 Opus，只有 Opus 能带来那种惊艳感"。
</div>

---

layout: two-cols
---

# Agent 框架：人与模型之间的中间层

<div class="text-sm leading-relaxed mt-2">

罗福莉的定义：

**Agent 框架 ≠ 产品**。产品是人直接交互感受到的那一层。Agent 框架**同时定义交互层和模型沟通层**——它知道模型能力的长板短板，知道如何调度（包括成本优化调度）。

**前端的 UI 展示是最薄的一层，已经不是很关键了。**

OpenClaw 展示了智能体框架的想象空间——它可以做得很厚重，而用户体验只是冰山一角。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-middle-layer.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么开源至关重要

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**Cursor 是一套非常复杂的 Agent 框架——但它是黑盒**

你知道它好，但你看不到它的 memory 系统怎么设计、Agent workflow 怎么编排。你改不了它。

**OpenClaw 开源 = 你可以自己改**

罗福莉从 2.x 版本开始用，"我觉得它并不好用，所以我花了好几天时间去改它"。她让 Opus 帮她重新设计了一套 memory 系统、一套新的 multi-agent 系统。"我可以自己去改所有的源码——这种原生的可操作性给我的冲击感是很大的。"

</div>

<div>

**群体智能：一群人改 vs 一个人改**

罗福莉的团队在飞书群里用 OpenClaw——近 100 个人，每个人有不同的背景，每个人都在改它。"没有把这个模型给改坏，反而变得非常智能。"

- 一个人改 → 进步很慢
- 一群人改 → 几个小时就迭代一轮

**第三天第四天接到自己的模型上，"怎么还没训练就有点 Claude 的差不多了"**。

所以罗福莉认为 OpenClaw 的 Star 数飞升不是偶然——"这是 AGI 到来前兆必须要有的事情"。

</div>

</div>

---

# 开源与安全：不冲突

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

**"安全性绝大部分还是模型本身应该去追求的事情。我们不能太过于去要求一个框架本身是过于安全的。开源跟安全性并不冲突。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**端云混合的隐私方案**

罗福莉认为大部分涉及隐私的日常任务难度并不高——完全可以在**本地**推理：

- 自己随身携带或在家放置一块芯片
- 隐私数据在本地推理
- 高难度、高创造力、高复杂度的任务去云端推理

她用 3B 的端侧模型接 OpenClaw，"它自己能做到的任务复杂度已经超乎我的想象"。

</div>

<div>

**为什么这件事需要开源？**

"这需要更多人一块来做，而不是某一个公司就把它能做好的。"

模型侧需要做非常多事情，架构层也需要一起往前走。**开源 + 本地化 + 云端协同**是罗福莉认为的隐私解决路径。

<div class="border-t border-gray-200 my-2"></div>

**关于 OpenClaw 被 OpenAI 收购**

"OpenClaw 开源这个事儿没变，所以你还是可以在这样框架的基础上大家一块去设计更好的 Agent 架构。群体演变这种可能性和基因火种是保留了，那就挺好的。"

</div>

</div>

---

# 中国比美国更火：为什么？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**"西虾东扬"现象**

罗福莉观察到一个悖论：模型公司的人（美国）"不是很 care 这个东西"。觉得"不难"——就像她最初的判断。

但中国开发者对 OpenClaw 的热情远高于美国。

</div>

<div>

**两个结构性原因**

**1. 效率提升是中国开发者的血液**
"对于效率的提升好像是我们的血液里边的东西。OpenClaw 能把效率提升拉到极致。"

**2. 国内便宜模型的性价比放大器**
85% 的效率提升场景不需要最顶尖的模型。国内有大量便宜好用的模型——花十块钱的 API 帮你干完一千块钱的事情，你肯定很愿意用。但如果 API 贵了十倍，你会很排斥。

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>关键洞察</strong>：OpenClaw 基于 Claude 上一代模型设计，当时模型不够强，所以 Agent 框架必须设计得更精细来弥补短板。当 Opus 进步了，国内大部分模型刚好达到 Claude 4.5 Sonnet/Opus 的水平，"这两个在这儿握手了"。
</div>

---

# OpenClaw Moment vs ChatGPT Moment

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**ChatGPT Moment**

- 时间短，瞬间爆发
- 定义清晰：对话式 AI
- 有一个明确的 ground truth
- "那一刻过后你就没有感觉它有持续性"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**OpenClaw Moment**

- 时间线更长，前序章节太久
- 定义模糊：能量溢出到更多场景
- 没有清晰的 benchmark
- "一直在持续，你感觉它停不下来"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**为什么持续性不同？**

- Agent 本身就是**长程、多轮**的
- 框架在群体智慧下**持续迭代**
- 模型在进步 + 框架在进步 = 复合加速
- "这种持续性让你更坚信这个事儿在全面加速"

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

罗福莉的判断：OpenClaw Moment **比 ChatGPT 的能量更强、影响更深**。但它不像 R1/O1 那样有一个清晰的标准界定——大部分场景的评估是混沌的。**它的价值是慢慢到一个临界点突然进一大步。**

</div>

---

# 从 Chat 到 Agent：范式已然巨变

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="text-base font-semibold mb-2">Chat 时代（2023-2025）</div>

- **预训练主导**：3:1 甚至 5:1 的预训练 vs 后训练算力比
- **短上下文**：人的输入就是全部 context，通常很短
- **单一模型能力**：模型水平 = 预训练水平
- **Benchmark 驱动**：数学、代码有 ground truth
- **Agent 框架过于简洁**：BrowsingComp、SWE-bench 只是复杂一点的 prompt

</div>

<div>

<div class="text-base font-semibold mb-2">Agent 时代（2026-）</div>

- **后训练与预训练并重**：1:1 甚至后训练占比更高
- **超长上下文**：1M token context，Agent 的多轮交互历史构成 context
- **模型 + 框架联合能力**：框架弥补模型短板，模型提升框架上限
- **体感驱动**：评估体系混沌，靠人在当评估
- **复杂 Agent 编排**：memory、skills、multi-agent、心跳任务

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
<strong>罗福莉的判断</strong>：之前所谓的"Agent"只是换了一个更复杂的 system prompt，稍微带一点环境反馈。"根本没有达到工业级可用的能力。最简单——你把它接到 OpenClaw 上去用，你会发现它不可用。"
</div>

---

# Post-training 进入主战场

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-3">

**"post-training 的周期在拉长，你在一代基础上能做的 post-training 的上限是远远被激发出来的。"**

</div>

**为什么 Agent 时代深度依赖后训练？**

- Agent 交互范式变化了：人不再修改代码行，而是提更高阶的要求——增加限制、澄清需求、参与架构设计
- 模型需要**理解 Agent 框架本身**——这是预训练数据里不存在的信息
- 模型需要**适应交互范式**——人跟模型的交互从"这行代码出错了"变成"增加一个约束条件"
- 组织和业务逻辑无法从互联网学到——只能通过多轮交互在后训练阶段沉淀

**这意味着**：pre-train 决定下限，post-train 决定上限。代码拿上限，其他领域保下限。

</div>

---

layout: two-cols
---

# 算力分配革命：3:1:1

<div class="text-xs leading-relaxed mt-2">

**Chat 时代**：预训练吃掉了 70-80% 的算力。后训练只是"收尾"。做架构的人只需要考虑推理场景——因为 post-training 很快，一个月就能做完。

**Agent 时代**：后训练周期拉长到可能半年到一年。前半年假定的推理卡类型、场景可能全变了。所以模型架构不能再只为推理优化——需要留有灵活度。

罗福莉推荐的理想比例：

**研究 : 预训练 : 后训练 = 3 : 1 : 1**

研究的卡要比正式训练的卡总量还多。因为 idea 诞生和代码实现太快了，瓶颈在卡上。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compute-ratio-311.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 训练 1T 模型的真实挑战

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**数值不稳定：loss spike**

训万亿参数模型会遇到 loss spike ——某一步更新特别不稳定，激活值变得异常大，直接把某些 expert "打死"（参数更新后再也不会有 token 送过去）。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**排查：从表层到玄学**

建立严密的监控系统——看 expert 负载、每层参数的输入输出、激活值变化。排查到最后："你会怀疑是不是今天的太阳黑子爆发"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**解决方案不是唯一的**

可能是稀疏比太高 → 调整结构。可能是 infra bug → 通信算子写错了。可能是某个 norm 项有问题 → clip 掉或通过 norm 压下去。借鉴 K2 的 QK-Clip 方法。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div>

**小团队的极致主义**

罗福莉团队没有 deadline。发现 loss spike 后，会停下来排查 ——即便停一两天、一两周。"大几千卡你停一天肯定就是一两百万，但在我们这儿我们认为它就是一个问题，我们就应该去解决它。"

"Mimo 能做成其实都是以创业的方式在运作的。"

</div>

<div>

**1T 模型的实际团队规模**

- 训练本身：几个人
- 做数据：几个人
- 基础设施（搭 GPU 集群）：需要一点有经验的人
- 整个全链路（含实习生）：约 100 人
- 真正投入一代模型迭代的核心人员：**二三十人**

"很大的团队反而是劣势"——尤其在排查深层问题时。

</div>

</div>

---

---
layout: two-cols
---

# Code 的泛化魔力

<div class="text-sm leading-relaxed mt-2">

**为什么 code 是泛化性最强的场景？** 不是巧合——是结构性的原因。

**预训练阶段**：能达 128K-1M 上下文长度的数据基本只有 code 和书籍。Code 文件间关联强、长上下文依赖密集；书籍信号太发散。模型在 code 上训练，自然对长上下文建模更好——这在意识到 Agent 时代之前就做了。

**后训练阶段**：Code 拿上限，其他领域保下限。Agent 框架本身（plan 模式、压缩、跨 session memory）是为软件开发设计的，但这些设计都有泛化性，能外延到更复杂的长程任务。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./code-generalization.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Skills：预训练的补充，组织知识的编码

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**Skills 改变了模型的生态**

Skills 定义了一套**执行的规范**——这套规范很难在预训练数据里出现，因为它是企业内部、组织之间沉淀下来的隐性知识。

预训练依赖的是互联网上可访问的知识。但"很多智能是我们在互联网上访问不到的"。

Skills 提供了一种交互方式：**让人去主动贡献数据**，贡献让模型执行任务成功率更高的方式。

**现在的 Skills 大多是 Agent 自己写的。**

</div>

<div>

**为什么 Skills 的生态价值巨大？**

- OpenClaw 把 Skills 社区带火——让更多人贡献，这个非常关键
- 这是 **人与 Agent 共创**的地方
- 如果你没有那么多另类信息（高阶的、组织内隐性的），最顶尖模型的能力也很难发挥出来
- 这本质上是一种**另类 alpha**——通过 human-agent 多轮交互沉淀下来的 intelligence

**Skills 是群体智慧的一个体现。**

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>作者概括</strong>：如果把预训练看作从公共知识中学习，Skills 就是从组织私有知识中学习——两者互补，共同构成了模型在真实任务中的完整智能。
</div>

---

---
layout: two-cols
---

# MIMO V2 家族：三箭齐发

<div class="text-sm leading-relaxed mt-2">

罗福莉称之为 **"一次悄无声息的伏击"**——Pro、Omni、TTS 三个模型几乎同期发布，Agent 场景下表现提升速度"超我们预期"，"大家觉醒了然后就爆发了"。

<div class="grid grid-cols-1 gap-2 mt-2">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>Pro</strong> — 理解与认知，复杂调度。1T 参数，1M 上下文，60-100 TPS。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>Omni</strong> — 全模态感知。视频/音频/图片/文本联合理解，原生多模态训练。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>TTS</strong> — 语音生成与表达。万亿小时级离散化建模，超强风格泛化力。
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-model-orchestration.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三个模型为什么要分开？

<div class="mt-4 text-sm leading-relaxed">

**核心考量：成本、速度、价格的三角平衡**

- 语音生成不需要一个一体的大模型——延迟受不了
- 多模态理解是否值得一个更大的模型？需要权衡
- Agent 革命本质是生产力革命 → 必须关注端到端的**完成率 + 成本效率**

**但三个模型在同一个 Agent 框架下可以协作**

罗福莉看到 OpenClaw 的那一刻，"脑子里一下就想到了这样的画面——这些模型各自在什么样的环节发挥什么样的作用，怎么被有效编排，会产生什么样大的生态价值。"

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**当前状态**

三个模型是同一生态训练的 → 你知道它们 share 同样的 background knowledge → 你能放心地把任务交给它 → 不会担心它不知道你有的背景知识。

目前组装其他模型与组装自家模型的**差距很微弱**——但罗福莉认为未来不会。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**未来方向**

框架层 + 模型层需要更好的交融才能达到**类人智能**。现在框架层本身对视频理解还很差——因为开源社区还没有一个同时具备强音视频联合理解 + 强 Agent 能力的开源模型。

"这就是为什么要做开源的原因——只有开源，你看到一个更强的模型过后，对应的框架才会发生改变。"

</div>

</div>

</div>

---

layout: two-cols
---

# Hybrid Attention：为长上下文效率而生

<div class="text-xs leading-relaxed mt-2">

**设计目标**：在长上下文场景下，效果要好 + 推理效率要高 + 成本要低。

MIMO V2 一代的 Hybrid Attention 用 **Sliding Window Attention** 省 KV Cache → 支持更长的上下文、更低的推理成本。然后用 **MTP（Multi-Token Prediction）** 把省下的算力填上 → GPU 利用率拉满。

**Pro 将 Full : Sliding Window 的稀疏比从 Flash 的 5:1 提升到 7:1**。实验结论：更大模型可以更稀疏。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hybrid-attention-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# MLA vs Hybrid Attention：为什么不走主流

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

**MLA 的优势（Chat 时代）**

- DeepSeek 引领的架构选择
- 大量减少 KV Cache
- 在 H 系列芯片上达到了 **compute bound 和 memory bound 的完美临界点**
- Chat 时代非常优秀——当时 post-training 周期短，只需优化推理

K2、GLM-5 等都选择了 MLA。

</div>

<div>

**MLA 的局限（Agent 时代）**

- **不能上 MTP**：MLA 已经达到了计算与访存的完美平衡，加 MTP 又会卡在 compute bound
- **推理速度慢**：没有投机解码加速
- **缺乏灵活度**：结构被极致优化，没有任何可发挥的空间
- **不适应长 post-training 周期**：前半年假定的推理卡类型、场景，全部可能失效

罗福莉的判断："大家太相信 MLA 了。""在 25 年上半年去训基座模型，MLA 确实是不错的选择——当没有看到 non-causal 的价值和 Agent 范式的时候。"

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
<strong>Hybrid Attention 的优势</strong>：结构更简洁，留有更多富余度来适应不同场景。可以靠 MTP 把剩余算力充分利用。Agent 在后训练发挥的空间反而更大。"没有预见到 Agent 时代，但恰好设计出的结构完美适合做 Agent。"
</div>

---

# MTP：推理加速的秘密武器

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**MTP 带来的三重收益**

1. **预训练阶段**：MTP 能提升基座能力（与 DeepSeek 一致）
2. **推理加速**：一次吐出多个 token → GPU 利用率更高 → **100-150 TPS**
3. **成本下降**：在更短时间内完成推理 → 降低单 token 生成成本

**不会带来幻觉**：MTP 会被 verify——只有预测准的 token 才被采纳。

</div>

<div>

**为什么只有 MIMO 在推理时用了 MTP？**

"大家太相信 MLA 了。"

MLA 架构上 MTP 会卡在 compute bound，不划算。而 MIMO 的 hybrid attention 结构天然在计算上有大量富余——团队在设计推理并行方案时"突然有一天悟到了"。

**这是"很自然的一个探索延伸"**——预训练时训了一层 MTP 提升基座能力，mid-train 时再训更多层，推理时用更多层实现加速。

</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>MIMO 的用户体感</strong>："用 Flash 或 Pro 的一个感觉就是——哇，好快。" 一旦体验到了更快的模型，智能水平相当，"你就回不到那个更慢的模型的水平了。"
</div>

---

# 1T 参数：Agent 时代的入场券

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-3">
<strong>"是 Agent 的你要做到接近 Claude 4.6 Opus 水平的这样一个入场券。"</strong>
</div>

**为什么必须是 1T？**

- 罗福莉训过 DeepSeek V3（600-700B），"你不会再想去训一个同样的模型，肯定还是继续往下一步 scaling"
- 1T 是现有卡数量下的极限区间
- 参数量 + context 共同决定智力上限

**但训练卡只是冰山一角**

- 训练 Pro 和 Flash 各需要**几千卡**
- 但研究卡是训练卡的 **3-5 倍**
- "不是说我们拥有几千卡就足以去做这个事情"

当前最大的瓶颈：**卡在卡上**。idea 诞生和代码实现太快了——GPU 效率在那里，对算力的需求反而变得更关键。

</div>

---

# 定价逻辑的转变

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**预训练时代的定价逻辑**

根据模型架构优势来定价——你的结构强，推理成本低，最终用户能感受到。Flash 的输入 $1.01/百万 token，输出 $0.3/百万 token，当时最低。

**这是合理的**，因为模型的价值主要来自架构效率。

</div>

<div>

**后训练时代的定价逻辑**

罗福莉认为应该发生变化：**不应该根据推理成本定价，而应该根据模型最终产生的价值定价。**

价值 = 模型架构优势 + 后训练的投入（让模型更好理解 Agent 框架）

Pro 已经抛弃了纯成本定价逻辑——后训练上的溢价是合理的。

"当进入到 Agent 范式后，context 好不好、模型对 context 的理解能力好不好，都是溢价空间。"

</div>

</div>

---

# 全模态之路：Omni 的使命

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**Omni 是什么**

- 支持视频、音频、图片、文本的全模态理解
- **第一个支持音视频联合理解 + Agent 能力接近 language model 水平的模型**
- 参数量比 Pro 小，但"实际用的时候会发现 Omni 对世界的感知和领悟力比更大的模型更强"
- 因为它是原生多模态训练——它训过视频，所以它知道的更多

**但在 benchmark 上"纹丝不动"**——这引发了对 benchmark 的反思。

</div>

<div>

**多模态是否促进智能？**

罗福莉的态度发生了变化：

- 两个月前：非常相信
- 现在：在训 Omni 的过程中"有点质疑"
- 但发现了好迹象：Omni 的情感和知识储备比纯语言的大模型强
- 感知力更强——但这些是体感，不是 benchmark

**作者概括**：在 Agent 框架能优雅编排多模型能力的场景下，多模态是否促进智能可能不再是最关键的问题。关键在于——**Agent 要行动，它必须感知多种模态**。

</div>

</div>

</div>

---

# TTS：离散化建模的泛化力实验

<div class="mt-4 text-sm leading-relaxed">

**一个"另类"的选择**

大部分 TTS 用传统架构。MIMO TTS 选择了**离散化 tokenizer**——把音频变成跟文本一样的离散 token ID，用同一套 LLM 架构处理。

- 万亿小时级别数据集上训练
- 追求无损的离散化表征（多层 RVQ + 高维空间 + 大量预训练）

**泛化力的惊喜**

只在很刻板的风格场景（快/慢/高兴/悲伤）做了 SFT 和 RL 的风格化 post-train。但发现如果你把 style 标签变成**复杂的自然语言描述**，它也能遵循——这是纯泛化出去的。

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>意外的发现</strong>：简洁的架构 + 超大规范训练 → 超强泛化力。TTS 的上限非常高，但下限还在弥补中（有时不太稳定）。当前限时免费，很快会生产级可用。
</div>

</div>

---

# 组织平权：没有组，没有职级

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded mb-3">
<strong>"平权本身是有价值的，就是平权本身是有利于所有人去平等的贡献自己的创造力和智慧。"</strong>
</div>

<div class="grid grid-cols-2 gap-4">

<div>

**MIMO 团队的组织架构**

- **没有组**——预训练组？后训练组？不存在
- **没有职级**——没有 leader 对参与项目的人有绝对控制权
- **一对一百**——罗福莉直接对全团队 100 人
- 有实际推动项目往前的人，但这个角色是模糊的、流动的

**为什么不分组？**

很多人对预训练和后训练都感兴趣。固定分组 = 扼杀创造力和成长空间。做预训练的人天然更在乎多样性——去做后训练是非常好的补充。

</div>

<div>

**为什么组织扁平对 AI 研究重要？**

"任何层级应该一定程度上都是在规范和约束，规范和约束本身是压制创造力的。"

有层级就默认这个层级上的人应该"有超越所有人的智能"——这个界定很奇怪。

罗福莉的管理哲学：
- 靠热爱驱动，而非控制
- 去选择激发大家的热情
- 让每个人围绕自己信仰的事情做自驱
- "如果最重要的 leader 有特别强的掌控感，反而不利于创新"

**推动变革的方法**：让大家体验新事物。OpenClaw 就是一个例子——强迫大家用（"不超 100 轮对话可以 quit"），但不是为了考核，而是为了让大家先去体验。

</div>

</div>

</div>

---

# 群体智能：从团队到全人类

<div class="mt-4 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mb-3">
<strong>"它确实需要群体智能，不是个人英雄主义。"</strong>
</div>

<div class="grid grid-cols-2 gap-4">

<div>

**模型训练中的群体智能**

训练一个 1T 模型需要每个环节上的人都是"足够 believe 和极致的人"：
- 懂 inference 的人 → 设计好的训练/推理架构
- 懂模型训练+评估的人 → 定义好的模型结构
- 做数学的人 → 参与预训练和后训练的数据构造

每个人的 context 有独立的地方也有关联的地方。OpenClaw 证明了"这套复杂的框架能够被模拟出来"。

</div>

<div>

**从团队到全人类**

罗福莉把群体智能理解为**全人类的群体智慧**：

"OpenClaw 可能不知道它的动机是不是这个，但至少它现在让大家共同去改进一套框架，以及如此短的时间内让大家去做这个事情——这就是全人类群体智慧的苗头。"

AI 进步 = 吸收所有人的智能 → 靠自己产生更强的智能 → "左脚踩右脚"就提升了

**罗福莉的判断："这个事肯定是就在这一两年发生的事情。"**

</div>

</div>

</div>

---

# 春节后的团队实践

<div class="mt-4 text-sm leading-relaxed">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded mb-3">
罗福莉给团队下了一条指令：<strong>"如果第二天 OpenClaw 对话次数不超过 100 轮的人，可以直接 quit。"</strong>
</div>

**实际的推动过程**

- 先买了几台 Mac mini，把 OpenClaw 部署起来
- 把大家拉到不同的飞书群里，分不同方向
- **强制在群里聊**——"个人的想象力真的是局限的，但当你看到别人用 OpenClaw 能干成这个事情的时候，你就会激发自己的想象力"
- "大家的想象力是一个乘积的作用"
- 没有真正考核——有人来问怎么验证，她说"你们用就行了"

**结果**

整个团队在那两天"不像在上班，就在群里边躁动"。群消息刷新极快。两周后发现：**三四周时间做完了以前可能三四十周才能做到的事情**。

</div>

---

# AGI 时间线加速

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**罗福莉的 AGI 进度判断**

- Flash 发布时（2024.12）：通往 AGI 的**第一步**
- 现在（2026.04）：已经走到 **~20%**
- 今年底：至少能到 **60-70%**
- 两年内：**AGI 实现**

**两个月前她认为 AGI 至少还有两年以上。现在她觉得两年以内。**

加速的核心变量：**AI 训 AI**——"它可以自己训练自己，它能去创造新的研究。"这是一两年内会发生的事情。

</div>

<div>

**AGI 到来后的世界**

罗福莉的预判：
- 先改变**工作模式**（产生生产力价值）
- 再改变**生活模式**（更滞后，因为生活不产生生产力价值）
- 要真正迈入生活被颠覆，需要更多机器人

"大部分人确实会抛弃掉自己原来的工作模式。"

<div class="border-t border-gray-200 my-3"></div>

**中美代差判断**

"国内具备 1T 以上基座的公司有好几家（Kimi、Mimo 等）。距离 Claude 4.6 Opus 只有**两三个月的代差**——不是说追上未来的 Claude，而是追上当代的 Claude。"

接下来两三个月会比拼：研究水平、技术敏捷度、拥抱新范式做研究的方式。

</div>

</div>

</div>

---

# AI 训 AI：左脚踩右脚

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-3">
<strong>"它可能真的能依靠于它自己产生更强的智能进化——它先吸收所有人的智能，然后再靠自己产生更强的智能。"</strong>
</div>

**一个标志性的认知转变**

罗福莉以前认为训模型这种事完全不可能交给 AI——要跟复杂深度学习平台融合、要有研究员长年的 context（博士五年的科研培养）。

但现在发现："原来它很聪明——聪明到你只要把你近期的 context 告诉它，它甚至能帮你复原出来你自己的科研成长路径。然后你发现它跟你一样聪明。"

**"残酷"的现实**

"我们自己做的工作已经是足够有创造力、足够不会被 skill 化、不会被 workflow 化的——但我现在发现它既然也能。那就说可能过一段时间它真的能训一个跟我们能训出来的模型它也能训出来了。那它可不可以训出更强的模型呢？"

**这是 AI 自学习自迭代的巅峰形式。**

</div>

---

layout: two-cols
---

# AGI 之路：倒三角怎么变成完整智能栈

<div class="text-xs leading-relaxed mt-2">

罗福莉曾画过一张图：人类智能是正三角（底层感知/运动 → 中间情感 → 顶层语言），而 AI 是倒三角（语言在顶层极大放大，但底层薄弱）。

**但 AI 的进化路径不必模仿人类**：
- 演化环境完全不同——人类为生存演化，AI 没有生存危机
- AI 进化更自由、更散漫、更有创造力
- AI 有算力、有人类知识起点、有无数人帮它提升

**补齐方向**：Code → Agent → 多模态感知 → 机器人。从屏幕上跃出来到真实空间。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agi-upside-down.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 接下来的竞争焦点

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1. Agent 框架的持续进化**

- 框架本身的自进化
- Agent 与模型之间的双向流动
- 框架与人之间的互相进化
- 目前还在第一阶段——train better model for agent

**罗福莉：还没有看到比 OpenClaw 开源社区进步更快的 Agent 框架。**

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**2. 推理需求的爆发**

Agent 框架越强 + 模型能力飞升 + 成本优势 → 推理需求几倍到十倍增长。推理芯片的需求会空前高涨。

**瓶颈在存储产能。**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**3. 下一阶段的 scaling 决策**

1T 水平走不了太久。下一步是 scaling 参数量还是 scaling 别的东西？在什么芯片上 scaling？

**这个决策决定半年或大半年后的领先者。**

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**4. 三种发展思路的分野**

- 打 DAU → 互联网产品逻辑（豆包、元宝、阿里）
- 走生产力工具 → Dropbox 路线（Kimi）
- 追 token 消耗量 / 替代高价值任务 → 往 AGI 靠近（Mimo）

**罗福莉："追求 DAU 并不会让我被模型替代的目标更近。"**

</div>

</div>

---

# 战略信念：为什么 MIMO 能这么快？

<div class="mt-4 text-sm leading-relaxed">

罗福莉在推上总结了三点。她在访谈中展开了：

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1. 战略定性：提前一年想清楚架构**

预训练太前置了——你在训这一代模型的时候必须想清楚：一年后（现在是半年后）它在什么芯片、什么场景、什么推理范式下工作。

"否则它就不具备一个优势，它可能就是一个很平庸的模型结构。一个很平庸的模型结构并不会带来很平庸的模型效果，但它一定会带来很平庸的成本和效率的劣势。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**2. 后训练的敏捷性：从 engine 到 Agent 核心**

Chat 时代的 reasoning infrastructure 核心是推理引擎本身（模型推很久，给一个答案）。

Agent 时代的核心是一个更复杂的**黑盒系统**——模型 + Agent 框架耦合。training infrastructure 要足够敏捷、足够兼容。Agent 框架变化太快了。

**研究速度取决于 infrastructure 和研究团队的配合。**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**3. 好奇心与热爱：研究员的自驱力**

筛选靠热爱驱动的人——"跟他聊天的时候就能感受出来。有的人会为了很多奇怪的目标做事情，但为了热爱驱动做事情的人是非常明显的。"

管理的难度不亚于设计一个复杂的 Agent 系统。罗福莉也在学习——学习其他人怎么在他自己擅长的领域做得更好。

</div>

</div>

</div>

---

# 心法：在 Reword 不清晰的时代做选择

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**从量化到大模型：Reward 的变迁**

做量化投资时，罗福莉的座右铭是：
<div class="p-3 my-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
**"总有方式去建模价格。"**
</div>
价格就是 reward——你要预测准价格才能做好投资。

做大模型时，reward 不再清晰。很多场景的评估是混沌的——没有 ground truth。

</div>

<div>

**新的心法**

<div class="p-3 my-2 bg-green-50 border-l-4 border-green-500 rounded italic">
**"做当下符合我价值观的事情——这个事情一定是要对更多人产生价值的，一定要是更有意义的。"**
</div>

- 如果创造大模型的人没有让世界变更好的内驱力，而是要做破坏的东西，"最后会非常的危险"
- 每天问自己：做的事是不是让世界变得更美好一点？是不是让 boring 的工作被替代掉，让人们有更多时间做更有价值的事？

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>一个想法</strong>：如果哪天 90% 的工作被替代，罗福莉想做一个公益型组织，支持基础研究——"中国的很多基础研究太要求有一个完整的产品，没有很好的资金体系来支撑往更突破的方向迈进。"
</div>

</div>

---

# 每天否定昨天的自己

<div class="mt-6 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4 italic">
"我感觉每天可能都在否定昨天的自己。不管是很多做事的方式上，还是你对事情未来的一些判断上，我基本上都在一直去否定。我觉得是在这种否定当中、自我内省和反省当中成长的。"
</div>

**"我的脑子就是一个 sliding window 的特性"**

罗福莉缓解压力的方式：忘得非常快。压力大的话一两个小时就过了，慢的话睡一觉第二天一定就过了。

前提是——第二天会有一些新的有想象力、有上限的事情把它冲掉。

**对发布已经脱敏**

"所有事情都在我意料之内。因为我先看到模型的能力，所以我能预料到发布出去后别人会是什么样的感知状态。我反而对任何发布是有点脱敏的。"

发布前她已经进入下一阶段了。

</div>

---

# 两年之内，AGI 的到来

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-3">
<strong>"我觉得两年内应该能实现。过后大部分人确实会抛弃掉自己原来的工作模式。生活方式被颠覆是更滞后的。"</strong>
</div>

**罗福莉对 2026 年的判断：**

- **接下来两三个月会非常精彩**——Agent 框架进步 + 模型能力飞升 + 推理需求爆发
- **中美代差只有两三个月**——不是追不上，是追到当代水平很快。但半年的领先取决于下一阶段的 scaling 决策
- **"我都不知道这一年接下来会发生什么"**——两个月已经是剧变的单位

**她的核心信念：**

- 不要做破坏的事情 → 做让世界更美好的事情
- 不要追求 DAU → 追求 token 消耗量、替代高价值任务
- 不要有 deadline → 训好了再发
- 不要有层级 → 靠热爱驱动
- 不要闭源做框架 → 开源让全人类一起进化

</div>

---

# 核心金句（一）

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句——每一条都在 transcript 里有精确出处：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
<div class="italic">"OpenClaw 把它当做一个划时代的 Agent 框架去这么去定义。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 罗福莉定义 OpenClaw 的历史地位</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
<div class="italic">"post-training 的周期在拉长，你在一代基础上能做的 post-training 的上限是远远被激发出来的。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— Agent 范式如何改变了训练的经济学</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded leading-relaxed">
<div class="italic">"平权本身是有价值的，就是平权本身是有利于所有人去平等的贡献自己的创造力和智慧。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 解释 MIMO 团队为什么没有组、没有职级</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded leading-relaxed">
<div class="italic">"它确实需要群体智能，不是个人英雄主义。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 模型训练需要每个环节上极致的人</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-xs opacity-60 mb-3">续：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded leading-relaxed">
<div class="italic">"它可能真的能依靠于它自己产生更强的智能进化——它先吸收所有人的智能，然后再靠自己产生更强的智能。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AI 训 AI 的预判</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded leading-relaxed">
<div class="italic">"我觉得每天可能都在否定昨天的自己。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 在这个加速时代做研究的真实状态</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
<div class="italic">"开源跟安全性并不冲突。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 对 Anthropic 闭源路线的回应</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded leading-relaxed">
<div class="italic">"总有方式去建模价格" → "做当下符合我价值观的事情。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 从量化到大模型：reward 从清晰到混沌时的选择</div>
</div>

</div>

---

layout: end
---

# 谢谢观看

<div class="mt-4 text-sm opacity-70">

罗福莉 · 小米大模型团队负责人

完整播客：[小宇宙 - 138. 对罗福莉 3.5 小时访谈](https://www.xiaoyuzhoufm.com/episode/69eae15a1e94ae692107cc50)

<div class="mt-4">

**"接下来两三个月会非常精彩。"**

</div>

</div>
