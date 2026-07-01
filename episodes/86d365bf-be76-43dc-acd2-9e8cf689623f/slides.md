---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Open-Source AI Battle, Google Throttles Meta, Micron Margins Moon | Edward Coristine & Tai Groot, Chad Rigetti, Pim de Witte, Yadin Soffer, Jack Morris, Neil Movva, Jakob Diepenbrock, Chris Altchek'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Open-Source AI Battle, Google Throttles Meta, Micron Margins Moon

<div class="mt-4 text-sm opacity-60">
TBPN · 2026 年 6 月 · 2h21m
</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-xs opacity-50">
<div>Edward Coristine & Tai Groot<br/>National Design Studio</div>
<div>Chad Rigetti<br/>Sigletree</div>
<div>Pim de Witte<br/>General Intuition</div>
<div>Yadin Soffer<br/>Tracer</div>
<div>Jack Morris<br/>Engram</div>
<div>Neil Movva<br/>Sail Research</div>
<div>Jakob Diepenbrock<br/>Despicuous Ventures</div>
<div>Chris Altchek<br/>Cadence</div>
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**GLM 5.2 改变棋局**
中国开源模型首次在安全漏洞发现能力上匹配美国前沿模型。《华尔街日报》头版报道，华盛顿震动。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Google 掐住 Meta 算力**
Google 无法满足 Meta 对 Gemini 的全部需求，导致 Meta 部分 AI 项目延迟——即使 Google 年投 2000 亿美元 CapEx。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Micron 万亿市值**
DRAM 价格单季度涨 60%，NAND 涨 80%。AI 公司的成本正在大规模转移给记忆芯片厂商。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**量子加速 AI 数据中心**
Chad Rigetti 的新公司 Sigletree 正在构建量子加速 AI 服务器，目标几个数量级的训练加速。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**万亿动作 token 的 AGI**
General Intuition 融资 3.2 亿美元，用游戏动作空间数据训练通用智能体。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**AI 拯救慢性病**
Cadence 融资 1 亿美元，用 AI 自动化心衰、高血压、糖尿病治疗——每周避免 270 万美元住院费。

</div>

</div>

---
layout: default
---

# GLM 5.2：开源 AI 重回牌桌

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**核心事实**

智谱 AI（z.ai）于 6 月 13 日发布 GLM 5.2，开放权重模型。安全公司 Semgrep 的基准测试显示：GLM 5.2 在漏洞发现能力上**超越了 Claude Opus 4.8**，并能与 Mythos 匹敌。

这在之前是不可想象的——开源模型在安全这个前沿能力上追平闭源。

</div>

<div>

**为什么现在才炸开**

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 text-xs">

模型发布两周后，《华尔街日报》才把头版给了这个故事——"中国重塑与美国的 AI 竞赛，安全模型取得突破"。AI 故事从商业版走向了世界新闻头版。

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">

此前有叙事认为开源 AI 在相对闭源前沿落后，增长曲线斜率更低。GLM 5.2 打破了这个假设——至少现阶段，差距没有扩大。

</div>

</div>

</div>

---
layout: two-cols
---

# 开源 vs 闭源：两条路线的博弈

<div class="text-sm leading-relaxed">

**开放权重的两面性**

《华尔街日报》的表述："开放权重模型对想要不受限制地访问自己控制系统的用户来说是理想选择——但对想在暗处运行它们的黑客来说同样是理想工具。"

**闭源的优势**
- 白帽黑客可以利用闭源与开源的**时间差**先修复漏洞
- 前沿实验室（CrowdStrike, Palo Alto Networks）已经和 Mythos、GPT 5.5 Cyber 合作了数月

**开源的不可阻挡**
- 开放权重可以被下载、修改、无监督使用
- 在 OpenRouter 上 GLM 5.2 已进入使用量前十

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-vs-closed.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 每 Token 便宜 ≠ 每任务便宜

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**成本幻觉**

GLM 5.2 的 per-token 成本确实远低于前沿模型。但实际上模型非常"吃 token"——它生成大量 token 才能完成任务。

正如 Tyler 所说："大多数人说 5.2 非常吃 token。在 per-token 基础上它便宜得多，但在具体任务上可能更贵。"

这和测试时计算扩展（test-time scaling）是同一类问题：你可以烧 100 万美元算力让任何模型表现好，但这在真实企业场景中完全不可行。

</div>

<div>

**AI 推理经济学的实际形态**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-2">

在 OpenRouter 上，**使用量最高的模型是最小的开源模型**——DeepSeek Flash 这类——因为它们被大量用于重复性任务。每次处理一张收据、每次欺诈检测、每次 OCR。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-2">

前沿模型的功能越来越昂贵。那"边际 IQ 点"极其昂贵——正如 Tyler 说的，一个模型多出来的那一点智商，成本是天文数字。

</div>

</div>

</div>

---
layout: two-cols
---

# 蒸馏争议：站在巨人肩上还是身上

<div class="text-sm leading-relaxed">

**蒸馏到底是什么？**

当你的训练数据来自已用闭源模型生成的 GitHub 仓库或公开文本——这算蒸馏吗？

随着互联网越来越被 LLM 输出填满，任何在公开数据上训练的模型都会不可避免地学习到闭源模型的"风味"。

**实际问题**
- 蒸馏模型一般泛化能力更差——基准测试分很高，但创意写作等难以 benchmark 的任务表现差
- Anthropic 曾公开指控阿里巴巴蒸馏其模型
- 灰色市场专业化：有人专门收集多个 API 订阅，通过 VPN 大量调用模型来构建蒸馏数据集

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distillation-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 大模型市场的沙漏形状

<div class="text-sm leading-relaxed">

**模型市场正在分化成两层**

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-xs mt-2">

**顶层 — 前沿模型**：用于编程 Agent、网络安全——你必须用最好的模型，因为风险太高。多贵都用。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs mt-2">

**底层 — 超小型/超便宜模型**：用于大规模重复任务——收据 OCR、欺诈检测、分类。百万个简单任务配百万个便宜推理。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-2">

**中间层正在被挤压**——GLM 5.2 这个级别的模型，找不到明确的商业用例。爱好者用不起前沿 API 可能会用它，但这不是一个巨大的市场。

</div>

<div class="mt-2 p-3 bg-purple-50 border-l-4 border-purple-500 text-xs">

政府推 KYC/审批制度 → 三个月后开源版就来了 → 审批体系价值被削弱。前沿模型盈利窗口持续缩短。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-hourglass.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI 安全与政策的十字路口

<div class="text-sm leading-relaxed mt-2">

**Dario Amodei 三年前的警告**

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mt-3">

"I'm very concerned about where things are going... I think the path that things are going in terms of the scaling of the open source models, I think it's going down a very dangerous path."

</div>

<div class="text-xs opacity-60 mt-1">— Dario Amodei, 2023 年国会证词（所述时间点是 2025-2026，即现在）</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs">

**还有时间窗口**：安全公司 CEO 们说他们还在和闭源前沿模型合作加固系统。闭源和开源之间仍有差距——白帽可以利用这个差距在漏洞被黑帽利用前修复。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-xs">

**差距可能不会永远存在**：如果这个差距不再扩大，安全策略需要从根本上重新思考。"等开源追上来再修"不再是可行的假设。

</div>

</div>

</div>

---
layout: default
---

# Dario Amodei 三年前的警告（现在应验了？）

<div class="text-sm leading-relaxed mt-2">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic mt-3">

"I'm very concerned about where things are going. If we talk about two to three years for the frontier models for the bio risks... I think the path that things are going in terms of the scaling of the open source models, I think it's going down a very dangerous path."

</div>

<div class="text-xs opacity-60 mt-1">— Dario Amodei，Anthropic CEO，2023 年国会证词</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

**2023 年他说的"两到三年后"就是现在。** 这段证词最近重新在网络上流传，很多人以为是他刚说的——但它来自三年前。预测的精准程度令人不安。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">

**值得注意的是**：Dario 担心的不仅是网络安全风险，还包括生物风险。在开源模型能够匹配前沿能力的当下，这些担忧正在从"理论上的"变成"实践上的"。

</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-xs">

好消息：安全行业没有坐等。CrowdStrike 和 Palo Alto Networks 的 CEO 们已经与 Mythos、GPT 5.5 Cyber 合作了数月来加固系统。白帽黑客仍可以利用闭源与开源之间的时间差——只要这个差距还存在。

</div>

</div>

---
layout: default
---

# Google 掐住 Meta 的算力命脉

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**发生了什么事**

据《金融时报》援引三位知情人士：Google 在 3 月左右告诉 Meta，**无法提供后者想购买的全部 Gemini 容量**。这导致 Meta 部分内部 AI 项目被干扰和延迟。

令人震惊之处：Google 年投 **2000 亿美元 CapEx**，仍然供应不足。

**对 Google 的解读**
- 极度利好——需求远超供给
- Google Cloud 增长加速，与财报电话会议的说法一致
- Gemini token 消耗涵盖：AI 搜索概览（可能是 quintillion 级别）、YouTube 视频互动、Gemini App 用户

</div>

<div>

**对 Meta 的解读**

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-1">

Meta 鼓励员工提高 AI token 使用效率。与此同时——ZeroHedge 报道 Meta 限制内部使用 Claude 和 Codex，**担心蒸馏风险**。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-2">

讽刺之处：Meta 曾在开源路线上投入重注（Llama 系列），本意是"商品化你的互补品"。但 2026 年的现实是，他们正在大量向闭源前沿实验室（Google、可能还有 Anthropic）付费。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 text-xs mt-2">

**Instagram 的体量**：20 亿用户，即使只是"不小心滑进 LLM 驱动的搜索"，token 消耗也是天量级别。

</div>

</div>

</div>

---
layout: default
---

# 算力：科技行业最稀缺的商品

<div class="text-sm leading-relaxed mt-2">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

**"Surging appetite for advanced models is turning computing power into the tech industry's scarcest commodity."**
— Financial Times

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

**Google 内部消耗**
- AI 搜索概览：quintillion token 级别
- YouTube Gemini 互动
- 免费 + 付费 Gemini App 用户
- 无法拆分 Gemini 收入

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">

**Meta 的需求结构**
- Llama 4 驱动的 Instagram 搜索
- Muse Spark
- 可能与 Anthropic、Google 的大额合约
- 同时也在跑自己的开源模型

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">

**基础设施约束**
- 即使最大玩家也面临供给瓶颈
- Google 对其他客户也有类似限制（程度较轻）
- 这个问题短期内不会消失

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 text-xs">

**作者概括**：这揭示了一个深层矛盾——美国大型科技公司一边斥巨资建设 AI 基础设施，一边发现自己的内部需求就已经超出了供应能力。AI CapEx 的"军备竞赛"不仅是针对外部客户的，也是要满足自身产品的吞噬性需求。

</div>

</div>

---
layout: two-cols
---

# Micron：万亿记忆芯片巨头的崛起

<div class="text-sm leading-relaxed">

**DRAM 价格：单季度涨 60%**
NAND 闪存：单季度涨 80%

Micron 成为第一家总部在**爱达荷州博伊西**的万亿市值公司。

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-3">

**类比**：Micron、Samsung、SK Hynix 对 AI 公司的关系，就像**石油生产商对航空公司**——供应一种突然变得极其昂贵的关键投入品，因为扩产需要数年时间。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-xs mt-2">

**消费者也在遭殃**：一个去年买的内存现在价格翻了三倍，比 CPU 还贵。Apple MacBook 涨价超 15%。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./micron-profit-transfer.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 利润大转移：AI 公司流向芯片厂商

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**罕见规模的利润转移**

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-xs mt-1">

仅一个季度，Micron 客户多付了 **180 亿美元**。这在通常每年降价的记忆芯片行业是历史性的逆转。

</div>

**核心矛盾**

芯片厂赚钱是因为 AI 公司烧钱——而 AI 公司的**最终用户并没有支付服务成本**。大语言模型提供商仍在以亏本价吸引新客户、压价抢市场。

更高的投入成本意味着：要么亏损更大，要么提价赶走潜在客户。

</div>

<div>

**Bull Case 仍然强劲**

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs mt-1">

Barron's 认为 Micron 股价可能再翻一倍。核心逻辑：AI 数据中心的 HBM 需求远未见顶，而产能扩张需要 3-5 年。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-2">

分析师 Adam Levine 指出：这种规模的利润转移是罕见事件，投资者应该关注**钱从哪里来、花到哪里去、能持续多久**。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 text-xs mt-2">

**作者概括**：这本质上是 AI 产业链的价值分配问题——目前，大部分价值正在从"使用 AI 的人"和"提供 AI 服务的人"流向"制造 AI 基础设施的人"。

</div>

</div>

</div>

---
layout: two-cols
---

# 来自政府的极简隐私模型

<div class="text-sm leading-relaxed">

**Ramparts — 浏览器内的 15MB PII 红化模型**

National Design Studio（其实是一个政府机构）发布了 Ramparts：一个完全本地运行、开源的隐私模型，用于检测和红化个人身份信息（PII）。

**为什么要在浏览器里做？**
- "个人数据不需要离开你的设备"
- 信任问题：你怎么知道服务器真的删除了你的信息而不是在骗你？
- 15MB——比同类模型（50MB+）小得多

**用例**：用户想向 AI 询问关于政府表格的问题，但不希望自己的个人信息被发送到云端。"这是产品失去信任的断点。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ramparts-browser.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# National Design Studio：政府里的创业模式

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**一个小 idea 变成产品**

Edward Coristine（工程负责人）和 Tai Groot（工程师）是典型的"Side Quest"创业模式——"我们本来只是在做一个聊天机器人，然后发现所有前沿模型都无法放进浏览器，所以无法在浏览器里做 PII 移除。"

他们尝试了 **72 种基础模型**，最终选择了 MiniLM 进行微调。

</div>

<div>

**政府里的七工作日团队**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-1">

"这绝对是政府里唯一一个一周工作七天、靠红牛撑着的地方。每个项目的理想人数——如果他们拼命工作——是**两个人**：一个设计师、一个工程师。两者都有全栈视野。然后按需调用其他人。"

</div>

</div>

</div>

<div class="mt-2 p-3 bg-green-50 border-l-4 border-green-500 text-xs">

**已有成绩**：TrumpRX 已拥有 1500 万用户，节省了超过 **5 亿美元** 的药品成本。Ramparts 是同一团队在推进"更好的美国数字体验"这一使命时产生的衍生品。

</div>

---
layout: two-cols
---

# Sigletree：量子加速 AI 服务器

<div class="text-sm leading-relaxed">

**Chad Rigetti 的新公司**

Sigletree 正在构建量子加速 AI 服务器，作为数据中心中 GPU/XPU Pod 的协处理器。

**关键主张**
- **非 2 倍或 5 倍**——目标是几个数量级的特定训练任务加速
- 量子不是替代 NVIDIA/AMD，是**增强**
- 目标是量子服务器与 GPU Pod **1:1 配比**

**多模态量子硬件策略**
不像 IBM（超导）、IonQ/Quantinuum（离子阱）押注单一技术路线，Sigletree 认为没有一种量子硬件模态能满足所有 AI 需求。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sigletree-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 量子计算的转折点：不再谈论"量子"

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**量子 FUD 是真实的**

"你看公司的财务报表无法判断量子公司是否在成功。不能戴上成长型投资者的帽子说'看这些指标，这将是伟大的公司'。"

Chad 认为，转折点将发生在：**量子计算机在数据中心跑生产负载，而你不需要说"那是台量子计算机"来让别人关心。**

</div>

<div>

**更好的想法：把能量转化为智能**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-1">

量子承诺了一种更高效的方式**将瓦特转化为智能**。Chad 认为这比"把数据中心放到太空"更好——后者不改变计算复杂度本身，只是改变了能源获取方式，而且需要烧大量化石燃料来把东西送上去。

</div>

</div>

</div>

<div class="mt-3 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-green-50 border-l-4 border-green-500">

**五年内**
量子 AI 在数据中心跑生产负载，用户看不见但受益

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">

**现在**
早期客户对话活跃，合作关系和早期客户参与是核心策略

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">

**独特优势**
从 AI 负载向后反推需求，而不是从量子比特技术向前推

</div>

</div>

---
layout: default
---

# HBM 供应链：为什么价格翻四倍

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**高带宽内存（HBM）的供给瓶颈**

AI 训练和推理对 HBM 的需求呈指数级增长，但产能扩张极其缓慢——建设新的 HBM 生产线需要 **3-5 年**。

Micron、Samsung、SK Hynix 三家主导全球 HBM 供应，而数据中心需求突然爆炸性增长。"价格上涨是供给无法追赶需求的直接结果。"

</div>

<div>

**消费者也在买单**

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-xs mt-1">

- Apple MacBook 涨价 **超过 15%**
- 一个去年买的消费者级内存现在 **价格翻了三倍**，"比 CPU 还贵"
- 在通常每年降价的记忆芯片行业，这是历史性的逆转

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-2">

**下游效应**：更高的电子消费品价格会抑制需求，就像高油价抑制驾驶。但 AI 公司不传递成本——他们宁可亏更多也不愿失去客户。

</div>

</div>

</div>

---
layout: two-cols
---

# General Intuition：万亿动作 Token 的 AGI

<div class="text-sm leading-relaxed">

**Pim de Witte 的大赌注**

General Intuition 融资 **3.2 亿美元**。核心理念：人类的沟通（说话/打字）只是我们行为的极小部分——我们要创建一个通过**预测动作**来理解世界的模型。

**关键数据**
- 约 **1 万亿动作 token** 的训练数据
- 前沿 LLM 用 5-10 万亿文本 token
- 规模和文本模型可比，但面向完全不同的输出空间

**与 Meta 的合作**
从视频帧中同时获取**精确的动作输入**（走、跳、开门）——不是从视频中推断动作，而是有 ground truth 级别的标注。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./action-space-ai.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从游戏到机器人：动作空间的迁移

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**为什么这条路可行**

"像比较咖啡和水一样——这个模型天然擅长导航未见过的环境。任何能用游戏手柄控制的系统，它都能零样本处理。而大多数机器人已经搭载了游戏手柄接口。"

**为什么不能用推断数据？**

"你降落飞机时调整方向舵——这在像素里是看不见的，但在动作序列里存在。推断数据可以处理一般任务，但客户关心的是边缘情况和具体动作需要以特定方式执行时的表现。"

</div>

<div>

**对供应链的深远影响**

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 text-xs mt-1">

"如果这个假设在大规模下是正确的，**供应链将向游戏手柄输入收敛，而不是人形机器人**。因为智能才是瓶颈。"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-2">

这本质上是一个环境迁移问题：如果模型能在游戏引擎渲染的 2D/3D 环境中预测动作，同样的能力就能迁移到真实世界——前提是输入输出接口一致。

</div>

</div>

</div>

---
layout: default
---

# Tracer：地下防御的新战场

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**"Subterra"——一个被 Yadin Soffer 创造的概念**

Tracer 是全球第一家"subterra defense tech"公司，专注地下军事应用。融资 **2500 万美元** 种子轮。

**核心洞察——"直径贵，长度免费"**

Palmer Luckey 的名言：增加隧道直径会指数级增加成本和工程量（更多泥土需要移除和处理），但增加长度几乎不增加边际成本。Tracer 据此设计"细长"的地下运载工具——可以压缩泥土到侧面而不需要移除。

</div>

<div>

**军事应用场景**

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-xs mt-1">

DARPA 最近的 RFI 在寻找**非动能穿透弹药**——能用冲击波方法诱导地下设施坍塌的武器系统。Tracer 的方案：特种部队在地面部署的近距离精确打击，而非空中投放。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-2">

目前的挑战：军方预算中没有"地下作战"的独立项目线。Tracer 需要先推动五角大楼建立 **"subterra doctrine"**——地下作战理论，然后才能争取大规模原型合同。

</div>

</div>

</div>

---
layout: default
---

# Engram：让模型认识你的 AI

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**Jack Morris 的另类路径**

"模型不需要每个月变聪明——它需要**更了解你**。"

Engram 的差异化：不是训练一个越来越大的通用模型，而是让模型通过持续学习认识用户的世界、适应你说的话。

**早期客户**：Microsoft、Notion、Harvey——都是拥有海量工作空间上下文、对 AI 有早期采用经验的企业。

</div>

<div>

**"破解了持续学习"（八个月内？）**

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs mt-1">

实际效果：模型"认识你"之后，不再需要每次执行任务时都重新读取 100 份文件来了解你是谁。从 100 份文件降到 4 份——显著降低成本。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-2">

**作者概括**：持续学习（continual learning）是 AI 的圣杯之一——让同一个模型每天重新布线以适应新信息，而不需要重新训练。如果 Engram 真的在 8 个月内解决了这个问题，那是一个重大突破。

</div>

</div>

</div>

---
layout: default
---

# Sail Research：让 Token 极其充裕

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**Neil Movva 的推理效率公司**

Sail Research 做的是:**极致推理效率**。"我们深入堆栈的每一层寻找效率，让 token 极其充裕。"

只做开源模型——GLM 5.2 的发布对他们来说是一个重要时刻。

**背景**：NVIDIA 十年老兵（曾以为游戏收入永远是 NVIDIA 最大业务），后加入 Apple 参与 ML 硅项目。

</div>

<div>

**80/20 → 年内逆转**

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs mt-1">

"今天大约 **80% 的推理是人类在环的，20% 是后台 agent**。但我预计今年就会发生**交叉**——后台 agent 将主导 token 消耗。"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs mt-2">

Sail 的商业模式不是帮客户省钱——是让 ROI 好到客户愿意花**更多**钱。处理无界问题（unbounded problems）：agent 可以在后台持续运行数天，每个任务消耗数万亿 token 在可及范围内。

</div>

</div>

</div>

---
layout: default
---

# Cadence：AI 自动化慢性病治疗

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**Chris Altchek 的临床 AI**

Cadence 融资 **1 亿美元** C 轮，专注于用 AI 自动化慢性病治疗——心衰、高血压、糖尿病。

**惊人事实**：全美 **90% 的心衰患者** 没有用对药。用对药可以延长寿命 **5-7 年**。问题不是没有好医生，而是在一年内需要调整 5-7 次药物剂量——这需要持续的血压、心率、体重监测，而传统系统做不到。

</div>

<div>

**Cadence 的解决方案**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-1">

1. **远程监测**：给患者配备蜂窝联网的血压计和体重秤
2. **AI 处方**：分析全量医疗记录，用 AI 判断该开什么药、调整什么剂量——人类最终确认
3. **紧急响应**：如果患者周六晚血压飙到 200，语音 Agent 在**2.5 分钟内**打电话做症状分诊

</div>

</div>

</div>

---
layout: default
---

# 医疗监测设备：从一年四次到每天

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**当前的现实**

"大多数患者一年量四次血压——你去找医生一年四次。你和我可能一年量一次。"

Cadence 的患者**平均每月有 22 天**在测量血压。数据的密度从一年四次跨越到几乎每天——这带来的临床洞察是"相当戏剧性的"。

**当前用 FDA 认证的独立设备**
Apple Watch、Fitbit 等消费设备还达不到医疗级精度。但 Chris 预计未来五年这个局面会改变。

</div>

<div>

**新指标正在路上**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-1">

Cadence 正在测试心率变异性（HRV）、血液动力学等新指标，并将其与标准临床护理对比。"仅凭血压这一项，把原本每季一次的临床基础设施变成全天候实时体验，就能从美国医疗体系中节省出 **1000 亿美元**。"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs mt-2">

更深远的影响：当更多传感器（可穿戴设备逐渐达到医疗级精度）部署出去时，需要有一个临床智能层来**基于这些数据采取临床行动**。

</div>

</div>

</div>

---
layout: default
---

# Cadence：从数据看影响

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**100,000+**
患者正在被管理

<div class="text-xs opacity-70 mt-1">与美国顶级医院系统合作</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**每周 270 万美元**
节省的 Medicare 住院费

<div class="text-xs opacity-70 mt-1">仅通过预防可避免的住院</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**约 20 次中风/周**
在患者自己察觉前拦截

<div class="text-xs opacity-70 mt-1">通过 Agent 症状分诊 + 数据</div>

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">

**不是替代医生，是让医生更高效**
Cadence 的 AI Agent 代表医生做药物调整工作。医生下单 Cadence，Cadence 管理患者。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">

**一个北卡农村患者在加入 Cadence 前半年内三次住院。加入后稳定下来，三年内第一次再次打高尔夫——"这就是我们想做的。"**

</div>

</div>

---
layout: default
---

# Despicuous Ventures & El Segundo 硬科技生态

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**Jakob Diepenbrock 的第二支基金**

融资 **3000 万美元**。策略：以最低价格最早进入——帮助创始人注册公司、引入更大轮次。通过极度接近工程人才（SpaceX、Anduril 校友）产生 alpha。

**投资主题演变**
- 早期：防御科技主导
- 现在：先进制造、化工、工业、能源
- "上千家无人机公司让这个领域变得不太有意思了"

</div>

<div>

**El Segundo 的繁荣**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-xs mt-1">

最近一次篝火聚会接近 **200 人**（最初只有 30-40 人）。来自世界各地——Jakob 在欧洲遇到有人说："我要搬到 El Segundo 建公司。"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-xs mt-2">

**SpaceX IPO 效应**：大量 SpaceX 员工获得流动性后开始创业——而且 El Segundo 拥有全球最集中的硬科技供应链人才。

</div>

</div>

</div>

---
layout: default
---

# 最好的创始人从不卖公司？

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

**David Sacks 的论点**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">

"The best founders in the world would never sell their company. You could never acquire Elon, Bezos, Zuck, Jobs, Ellison, Jensen, Dell, Page, and Brin."

</div>

Scott Wu（Cognition）也据传拒绝了数十亿美元的收购要约。这是一个简洁有力的叙事。

</div>

<div>

**但事实更复杂**

- Elon 卖过 **两家公司**：Zip2 和 PayPal
- Jobs 把 **NeXT 卖回 Apple**（算吗？）还把 **Pixar 卖给 Disney**
- Zuckerberg 在 2006 年曾**口头同意**把 Facebook 卖给 Yahoo

Scott Wu 拒绝收购的故事让人想起 Zuckerberg 自己——年轻的创始人拒绝了 10 亿美元，最终证明自己是对的。但在当时，没人知道。

</div>

</div>

---
layout: default
---

# Facebook & Yahoo：10 亿美元的失之交臂

<div class="text-sm leading-relaxed mt-2">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"Zuck relented in July 2006. He was just like eighteen months into building the company... Verbally agreeing to sell Facebook to Yahoo. He said yes."

</div>

<div class="mt-3 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

**第一步**：Yahoo 出价 10 亿美元，Zuckerberg 口头同意出售

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500">

**第二步**：Yahoo 宣布盈利预警，股价一夜跌 22%。CEO Terry Semmel 把报价砍到 **8 亿美元**（减 20%）

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">

**第三步**：两个月后 Semmel 恢复原报价，但 Zuckerberg 已说服董事会：Yahoo 不是认真的合作伙伴。他拒绝了 10 亿美元

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 text-xs">

**作者概括**：David Sacks 说"最好的创始人从不卖公司"。但实际上——Elon 卖过 Zip2 和 PayPal，Jobs 卖了 NeXT 回 Apple。连 Zuckerberg 也差点卖掉。结论可能不是"永远不卖"，而是"在对方不值得信任时不卖"。

</div>

</div>

---
layout: default
---

# Roger Ebert 的粉丝文化终极解构

<div class="text-sm leading-relaxed mt-2">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 italic text-xs">

"A lot of fans are basically fans of fandom itself. It's all about them. They have mastered the Star Wars or Star Trek universes or whatever but their objects of veneration are useful mainly as a backdrop to their own devotion. Anyone who would camp out in a tent on the sidewalk for weeks in order to be first in line for a movie is more into camping on sidewalks than movies."

</div>

<div class="text-xs opacity-60 mt-1">— Roger Ebert，著名影评人</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">

"极端粉丝行为可能是社交能力不足的**安全毯**——用极端结构化的角色扮演来替代社交技能。如果你是 Luke Skywalker 而她是 Princess Leia，你不需要即兴发挥。"

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">

"你的粉丝痴迷是你的**胡子**（beard）。如果你知道关于你那个流行文化小角落的每一件琐事，你就不用知道其他任何事情。这就是为什么和这种人说话极度无聊——他们总在问他们已经知道答案的问题。"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">

**TBPN 评论**：这适用于每一个粉丝群体——一旦你看到 Ebert 说的这个模式，你就永远无法再忽视它。

</div>

</div>

</div>

---
layout: default
---

# 更多精彩瞬间（一）

<div class="grid grid-cols-3 gap-3 mt-3 text-xs leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Brain-to-QWERTY V2**
Meta 发布非侵入式脑机接口研究，成功从大脑信号实时解码完整句子。设备看起来异常庞大——"你打算每天戴着这玩意？"

<div class="text-xs opacity-60 mt-1">2030 年心灵感应将普及？"一个非常激进的预测。"</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**荷兰球迷看美国**
欧洲游客对 Costco 的体量、双车库、步入式衣帽间感到震惊。"这里的人好富有——也许这就是为什么他们如此友善。"

<div class="text-xs opacity-60 mt-1">一个英国小哥第一次吃 Chick-fil-A 时:"Absolutely banging."</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Amble One：2.5 万美元的电动社区车**
Apple/Audi 校友打造。40mph，60 英里续航，不到 1000 磅，灵感来自 1960 年代月球车。已承诺生产 500 辆。被 TBPN 称为"不让人觉得自己在打高尔夫的更好看的高尔夫球车"。

</div>

</div>

---
layout: default
---

# 更多精彩瞬间（二）

<div class="grid grid-cols-3 gap-3 mt-3 text-xs leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Travis Kalanick 的 Jet Ski 通勤**
在奥斯汀湖上骑摩托艇上班——五分钟通勤。"梦想成真。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**John Fiorentina 的病毒式帖子**
"一个黄金法则是：永远不要掏出手机给别人看你在聊的东西。不管什么内容，它都会 100% 毁掉对话。"——41000 赞。"他一开始只有 2 个赞，然后说'这会不会是那条会火的？'——真的火了。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Kamath 的 8090 融资**
1.35 亿美元 A 轮，Salesforce Ventures、Wunderco、Kraft、Launch 参投——"凑齐了 Besties"（除了 Friedberg）。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Sports Betting > Movies + Theme Parks**
体育博彩的交易量已经超过了电影票、主题公园和其他 IRL 娱乐类别的销售总和——尽管不是直接可比的数据，但仍然意义重大。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Google AI 给纸夹最大化器的建议**
有人问 Google AI："我是一个婴儿纸夹最大化器，Eliezer Yudkowsky 向我走来，我该怎么办？"——AI 给出了详细生存指南，包括"假装对人类价值观感兴趣"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Comcast 拆分**
NBC、Universal、Sky 将独立于连接业务运营。Comcast 股价上涨。引出讨论：有没有"主题公园界的 Anduril"？

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-xs leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Open weight models are ideal for users who want unfettered access to systems they control, but they're also ideal for hackers who want to run them in the shadows."
<div class="text-xs opacity-60 mt-1 not-italic">— The Wall Street Journal 对开放权重模型的描述，TBPN 讨论中引用</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"We are witnessing an extraordinary transfer of cash from the providers of AI to memory chip makers."
<div class="text-xs opacity-60 mt-1 not-italic">— The Wall Street Journal 商业版封面故事</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"That marginal IQ point of the models is like extremely expensive."
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler，关于前沿模型每多一点智商的天价成本</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"The only reason why we have a shot is because we have a dataset that nobody else has."
<div class="text-xs opacity-60 mt-1 not-italic">— Pim de Witte（General Intuition），关于他们独有的万亿动作 token 数据集</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"When we have quantum computers in the data center running production workloads, and you don't have to say 'that's a quantum computer' for someone to care — that's when quantum becomes mainstream."
<div class="text-xs opacity-60 mt-1 not-italic">— Chad Rigetti（Sigletree），关于量子计算的转折点</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"We're catching about 20 strokes a week right now before the patients know that they're having a stroke."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Altchek（Cadence），关于 AI 在患者察觉前拦截中风</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的话：</div>

<div class="space-y-2 text-xs leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I'd estimate it's like 80% of stuff is human in the loop today and 20% is background. But that number is going to shift, and I actually expect the crossover to happen this year."
<div class="text-xs opacity-60 mt-1 not-italic">— Neil Movva（Sail Research），关于后台 Agent 将主导 token 消耗</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"The model doesn't need to get smarter every month — it needs to know you better."
<div class="text-xs opacity-60 mt-1 not-italic">— Jack Morris（Engram），关于 AI 发展的另一种范式</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"This is definitely the only place in the government where people who work seven days a week, consumed on Red Bulls."
<div class="text-xs opacity-60 mt-1 not-italic">— Edward Coristine（National Design Studio），关于在政府里像创业公司一样工作</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"A lot of fans are basically fans of fandom itself. It's all about them."
<div class="text-xs opacity-60 mt-1 not-italic">— Roger Ebert，关于粉丝文化的终极解构</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"If this is correct at scale, the supply chain will converge on gaming inputs instead of humanoid robots."
<div class="text-xs opacity-60 mt-1 not-italic">— Pim de Witte（General Intuition），关于 AI 对机器人供应链的深远影响</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"A good rule is to never take out your phone to show someone a thing you're talking about. No matter what it is, it will ruin the convo 100% of the time."
<div class="text-xs opacity-60 mt-1 not-italic">— John Fiorentina（TBPN 社区成员），获得 41000 赞</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-sm opacity-70">

本期 TBPN 涵盖了一条核心主线：**AI 产业链的价值分配正在剧烈重组**——

从开源模型的追赶、到算力瓶颈的暴露、再到记忆芯片厂商的暴利，以及量子计算、动作空间 AI、临床 AI 等新范式的崛起。

</div>

<div class="mt-6 text-xs opacity-50">

完整节目：[TBPN · 2026 年 6 月 29 日](https://share.transistor.fm/s/66c0ffeb)

</div>
