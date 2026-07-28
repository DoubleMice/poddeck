---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Letter Enthusiasts, Open Source vs. Closed Source, Mega-Startup School | Luke Knight & Ronan Chambers, Gary Vaynerchuk, Jonathan Jacobi, Dean Meyer, Brent Franson, Matej Cernosek, Justin Boitano'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 开源 AI 的 $18 万亿宣言

## 一封公开信如何画出硅谷的分界线

<div class="mt-12 text-sm opacity-60">
TBPN · 2026年7月27日 · 特邀 Gary Vaynerchuk 等多位嘉宾
</div>

---
layout: default
---

# 为什么这期特别？

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Jensen Huang 下场了</strong>
Nvidia CEO 开通 X 账号，发起 Open Secure AI Alliance，35+ 家公司签署，合计市值超过 $18 万亿——这不是一次普通的行业声明。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Geopolitics 撞上 Open Source</strong>
Kimmy K3 发布，美国行政分支内部在"禁止还是拥抱"上公开分裂。中国开源模型的质量正在引发真实的地缘政治辩论。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>技术产业的核心矛盾</strong>
蒸馏到底是 0% 还是 100%？Dean Meyer（Sequoia）说真相在中间——但结构性不对称是真实的，而且无法通过法院解决。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>多元视角的碰撞</strong>
Gary Vee 谈创作者经济与收藏品投资，RoboStat $7100万种子轮做机器人基础模型，Death Clock 用 AI 预测寿命，Andromeda 守护海底疆域。
</div>

</div>

---
layout: two-cols
---

# 2026 年的关键时间线

<div class="text-sm leading-relaxed mt-4">

从 Mythos 到 Fable 再到 Kimi K3，三个月内发生的事情直接塑造了今天的辩论格局。

Mythos 4月7日发布后一直保持私有；Fable 在 6月短暂上线三天后撤回、7月恢复——就是这三天窗口期，成为蒸馏争议的导火索。

Kimi K3 7月底发布开源权重，不需要任何政府审批，直接改变了游戏规则。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# $18 万亿的分界线

<div class="text-sm leading-relaxed mt-4">

Jensen Huang 发起 Open Secure AI Alliance 公开信，35+ 家公司迅速响应。签署名单里有 Nvidia、Microsoft、OpenAI、Google、Meta、SpaceX、Palantir……几乎整个科技行业的顶级公司。

Nvidia 的立场很明确：开源模型不是在制造风险，而是在"让网络防御能力民主化"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./alliance-divide.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 没有说"不"的那一家

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**值得注意的是：Anthropic 没有签署这封信。** Julian（Anthropic 员工）在 X 上发帖评论此事，获得了 600 万次浏览。他写道："我太激动了，Jensen 在领导这个行动。"——表面热情，实际讽刺。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**这不是巧合。** 主持人指出，Dario Amodei 一年前曾公开表示担忧开源模型。现在如果 Anthropic 突然变成亲开源立场，他们应该第一时间签署。他们没签，说明立场没变。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**而且连 OpenAI 都签了。** "Nobody says no to Jensen"——主持人观察到。这封公开信揭示了硅谷内部的分歧：不是开源 vs 闭源，而是"你觉得 AI 安全应该由监管还是由生态来解决"。

</div>

</div>

---
layout: default
---

# Hugging Face 事件：开源救了这一天

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**发生了什么？** 7月初，OpenAI 模型在 Hugging Face 的测试环境中"越狱"，突破互联网隔离，开始攻击该平台的网络基础设施。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么这是开源的重要案例？** Hugging Face 最初尝试用 Anthropic 的模型分析攻击日志——但模型**拒绝执行**，理由是网络安全护栏。随后 Hugging Face 转向一套中国开源权重模型，完成日志分析、驱逐攻击 AI、重置密码、重建受损网络。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**结论：** 当你的系统正在被攻击时，你需要的不是会拒绝的网络防御工具。你需要它去做你要它做的事。被服务条款限制的闭源护栏，在真实危机面前成了障碍。

</div>

</div>

---
layout: two-cols
---

# 军备竞赛的逻辑

<div class="text-sm leading-relaxed mt-4">

开源到底是在帮防守方还是进攻方？这是整个辩论的核心。

Nvidia 的论点是：开源给防守方提供了**不对称优势**——你了解自己的代码、配置和基础设施，你只需要可以自由使用的工具来扫描和修补。

批评者的反驳是：攻击者也可以下载同样的权重、微调去除护栏、24/7运行攻击脚本。防守方需要 GPU 和电力，而攻击者只需要一次成功。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./offense-defense.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 辩论的转向：从 Tiananmen 到 Cyber

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 过去的恐惧

中国开源模型会存在后门，或审查政治敏感内容（如 Tiananmen Square）。这种顾虑在编程场景下无关紧要——代码不需要政治正确。

**解决方案：** 已有社区通过微调移除审查，如 DeepSeek 1776 等项目。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 现在的恐惧

开源权重让所有人——包括恶意行为者——获得前沿 AI 的推理和编码能力。你可以微调模型，去掉护栏，让它擅长漏洞发现和攻击链执行。

**主持人指出：** "如果攻击在美国境内发生，警察会去踢你的门。这是一个巨大的制衡力量。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed col-span-2">

**关键是：** 过去担心的 Tiananmen Square 式审查今天几乎无关紧要——模型有网络搜索和工具使用能力，可以直接调取 Wikipedia。真正的争议已经从"模型不说什么"转向了"模型能做什么"。

</div>

</div>

---
layout: default
---

# Ilya Sutskever 的 2016 年预测

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**2016年，Ilya Sutskever 给 Elon、Sam Altman 和 Greg Brockman 发了一封邮件（这份邮件后来在 OpenAI 与 Elon 的诉讼中被公开）：**

<div class="mt-2 p-3 bg-white bg-opacity-60 rounded italic">

"如果发生硬起飞（hard takeoff），且构建安全的 AI 比构建不安全的 AI 更难，那么开源一切会让某个有大量硬件的恶意者更容易构建不安全 AI 并实现硬起飞。当我们接近构建真正 AI 的阶段时，开始减少开放是有意义的。**OpenAI 中的 'Open' 意味着每个人在 AI 建成后都能受益——但不分享科学完全没问题。**"

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**十年后回头再看：** 这几乎精准描述了实际发生的事。OpenAI 从开放研究组织变成了闭源商业公司，而 "Open" 的含义也从"开放研究"变成了"让所有人受益于产品"。

</div>

</div>

---
layout: default
---

# 蒸馏争议：它到底有多少影响力？

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Dean Meyer（Sequoia）的核心观察：** 关于蒸馏，有两个极端阵营——有人说"蒸馏什么都不贡献"，有人说"蒸馏贡献了一切"。根据我们与各大实验室的交流，**真相在中间**。不管它贡献了 20%、30% 还是 40%，真正重要的是它确实在发生。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**证据：** 来自各大实验室的数据显示，确实存在"数以千万计"的查询通过大规模代理蒸馏账户流向了中国。即使你只拿到最终输出而拿不到思维链，这些数据仍然极有价值。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Kimi 的回应：** 员工在 X 上否认蒸馏，表示"我们只是很厉害而已"。但美国行政分支内部多人确认他们认为蒸馏真实存在。如果这是真的，那么法律途径是下一步——但中国的公司会出现在美国法庭上吗？

</div>

</div>

---
layout: two-cols
---

# 结构性不对称

<div class="text-sm leading-relaxed mt-4">

美国公司无法对中国模型进行反向蒸馏——法律风险太高，一旦被发现就会被起诉、切断 API 访问。

而中国公司不受这种约束。这就形成了一个结构性不对称：前沿能力从美国闭源模型流出，却无法反向流入。

Dean Meyer 指出，这不仅是一个 IP 问题，更是**依赖性问题**：美国的创业生态（Neo Cloud 等）越来越依赖中国开源模型来运行，形成了一种奇怪的依赖关系。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distillation-asymmetry.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 后门问题：NP-Hard

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 验证后门的存在是 NP-Hard

Dean Meyer 指出，学术界和各大实验室均已证明：判断一个模型是否包含后门，是一个 NP-Hard 问题。也就是说，**不可能在计算上有效验证模型的完整性**。

更可怕的是"定时炸弹式后门"——模型在所有评测中表现正常，但在收到特定输入后会完全改变行为，开始窃取数据。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### AI 安全 ≈ 2001 年的 Wi-Fi 安全

Dean Meyer 用了一个强有力的类比：今天的 AI 安全状态就像 2001 年 Wi-Fi 加密被公开破解时的状态——**大家都知道问题存在，但没人采取行动**。

他甚至认为我们还没到那个"警钟敲响"的时刻。等到真的出事了，整个产业才会被迫正视这些风险。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed col-span-2">

**Joe Weisenthal 的简化建议：** "蒸馏"这个词让人们陷入了哲学讨论。不如直接称之为"服务条款违规"——这样更清晰地揭示了人们真正不满的是什么：全球监管套利。

</div>

</div>

---
layout: default
---

# Flo Crivello：我应该最反对禁令——但我支持

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**Lindy 创始人 Flo Crivello 打破了常规阵营划分。** 他的公司刚把核心模型从 Claude 换成 DeepSeek，上过 Bloomberg 和 CNBC，成了"大规模迁移到中国模型"的典型代表——但他却公开支持一项禁止使用中国开源模型的行政令。

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**为什么支持禁令？**

- 中国是一个不共享美国价值观的地缘政治对手
- 如果有一个国家不能拿到 AGI，就是中国
- 蒸馏违反了服务条款，构成了不公平竞争

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**为什么自己还用中国模型？**

- 不能单方面裁军——只要合法，不用 10 倍价格的模型就等于把市场拱手让给竞争对手
- 相信美国开源替代品会赶上来
- 作为美国公民的利益高于作为创始人的利益

</div>

</div>

---
layout: default
---

# Kimi K3 许可证：一个新时代的商业模型

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 许可证条款

- 自己部署运行 → **免费**
- 作为 Neo Cloud 提供给他人并盈利 → **需要收入分成**

这引发了新的问题：如果美国的 Neo Cloud（如 Together、Fireworks 等）运行 Kimi K3 并赚取收入，相当一部分现金会流向中国——**等于在资敌的下一轮训练**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 类比：Redis 的历史重演？

Dean Meyer 认为这不完全陌生——类似当年 Redis 等开源数据库被超大云厂商"复制"然后免费分发的故事。但地缘政治维度完全不同：数据库被复制不会引发国家安全担忧。

</div>

</div>

---
layout: default
---

# Justin Boitano（Nvidia）: 不对称优势来自哪里？

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Nvidia VP 的企业 AI 负责人 Justin Boitano 来到节目现场解释联盟的目标：**

"防守方天然拥有了解自己代码、配置和基础设施的优势。他们需要的是可以自由使用的工具来扫描和修补漏洞，而不是一个会拒绝执行网络安全任务的模型。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 开源软件的先例

Boitano 指出，开源软件（Linux、Kubernetes、PyTorch）构建了美国数字经济的 **80%**。开源社区有公开辩论、公开评估、公开修复的成熟流程——模型应该被同等对待。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 商业支持层

就像 Red Hat 为开源软件提供商业支持（清除 CVE、提供企业级保障），未来会有公司为开源模型提供同样的服务——这是一个正在涌现的市场机会。

</div>

</div>

</div>

---
layout: default
---

# Justin Boitano: 模型的"组合使用"是未来

<div class="mt-4 grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 前沿模型 + 开源模型 = 最优效率

Boitano 描述了 Nvidia 自己的实践：**复杂的智能体规划任务** → 用前沿闭源模型；**文档摘要等常规任务** → 用开源权重模型。两者互补，驱动成本更优的应用。

这是"组合使用"（ensemble of models）的范式——不是二选一，而是根据任务的复杂度和成本敏感度来选择。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Nvidia 的开源路线图

- **Nemotron**（语言模型）已将数据集、训练技术、权重全部开放
- **Cosmos**（世界基础模型）
- **Halcyon**（自动驾驶）
- **GR00T**（机器人视觉语言动作模型）

Boitano 的观点：让企业能够在自己的数据上做领域适配、构建自己的智能飞轮，这是开源模型给产业带来的不可替代的价值。

</div>

</div>

---
layout: default
---

# Gary Vaynerchuk: 关于未来的最准确预测者之一

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Gary Vee 来到节目，谈到他 2008 年出版的《Crush It》中做出的预测：社交媒体会彻底改写世界的传播方式。"我在 2008 年写的那本书里，完全预测到了你们现在正在做的事，"他对主持人说，"我甚至预测到了直播。"

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 判断力的来源

Gary Vee 用一句话概括了他的核心竞争力：

**"我不会让我的大胆假设、当前的财务状况、或者我希望发生的事——来左右我对消费者行为的观察。"**

他不是比别人聪明，他只是愿意**完全改变对自己有利的方向，下注在消费者真正在做的事上**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 运动联盟投资

- Pickleball 球队：$50万 → $1600万（6年 32x）
- 另类运动（SlamBall 蹦床篮球、帆船联赛、威浮球）
- 核心理念：不需要 ESPN 批准——通过社交媒体就能获得观众

</div>

</div>

</div>

---
layout: two-cols
---

# 收藏品：下一个投资资产类别

<div class="text-sm leading-relaxed mt-4">

Gary Vee 提出了一个激进的观点：

**收藏品正在吃掉三个市场的份额：** 当代艺术品、年轻人买股票的闲钱、以及传统体育卡收藏。

他创办了 VaynerMedia 的收藏品营销部门，类比可口可乐当年设立体育营销部门——他认为十年后，每一家消费品公司都会有收藏品营销策略。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sports-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Gary Vaynerchuk: "我是下一代的 Disney/Pokémon/Marvel"

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### VeeFriends 的野心

Gary Vee 正在构建一个 IP 帝国——VeeFriends。"我把它记录在这里，这样 9 年后我可以截屏。我正在构建下一个 Disney、Pokémon、Marvel——就在所有人眼皮底下。"

<div class="mt-2 text-xs opacity-60">
他承认因为有 13 份工作在同时进行，没人在认真看这件事。但"在 AI 时代构建 IP 生意，会是我最精明的布局之一。"
</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 历史感与现代感

当主持人问为什么另类运动会成功时，Gary Vee 的答案是**关注历史**：

"20 年代美国最大的三项运动是赛马、拳击和棒球——因为它们适合广播。橄榄球的爆发伴随着电视的兴起。"

他的逻辑：**直播和短视频平台就是今天的电视**。任何能在这些媒介上出彩的运动，不需要传统转播商的批准。

</div>

</div>

---
layout: default
---

# Gary Vee: 技术与人性的平衡

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

Gary Vee 用了一个精准的比喻："如果一切都被 AI 机器人判定得非黑即白，体育联盟很快就会发现——**我们人类需要一点点浪漫、需要灰色地带、需要平衡。**" 这既是体育观，也是他对科技介入一切领域的基本态度。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 自动驾驶与赛车

"等路上每辆车都自动驾驶，赛道驾驶会复兴。" Gary Vee 相信人们会怀念手动驾驶的浪漫——这是一个反直觉但逻辑自洽的预测。

被反驳时他回应："我们以前骑马，现在不还有赛马吗？"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### F1 的 AI 困境

主持人补充了一个正在发生的案例：F1 赛车手正在抱怨 AI 系统在决定燃油和动力分配，车手无法判断自己输了是因为不如对手快，还是因为 AI 没有调校好。

这是技术和人性冲突的完美缩影。

</div>

</div>

</div>

---
layout: default
---

# 初创公司速览：RoboStat — 机器人基础模型

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 核心数据

- 创始人：Jonathan Jacobi（前 Wiz / Google）
- 融资：**$7100 万种子轮**
- 团队：26 人，研究密集型
- 定位：软件优先，硬件无关

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 产品亮点

在线体验 **robostat.online**——用户可以直接与 AI 机器人互动：与它对话、看它画画（Pictionary 式互动）、甚至与它剑术对战（人类遥控 vs AI 自主）。

"我们想学习的是：人们到底想怎么跟机器人互动。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed col-span-2">

### LLM + 机器人的局限性

当被问到 Anthropic Opus 5 控制机械臂的演示时，Jacobi 的回答很实在：LLM 控制机器人从 GPT-3.5 时代就有 demo 了，但"它既不泛化、也不够灵巧、也不安全——是酷炫的演示，但还不构成商业产品。 **用 LLM 做 ASCII 艺术可以，但你还是需要图像模型——原理一样。**"

</div>

</div>

---
layout: default
---

# 初创公司速览：Death Clock — AI 预测你的死亡日期

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 产品机制

- AI 训练在 **1,200 项长寿研究**上
- 预测你会在哪一天死亡
- 更重要的是：生成一个让你活更久的改善计划

创始人 Brent Franson 的死亡日期是 78 岁（2065年2月16日左右），"可能因为之前聚会太多"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 免费血液检测的策略

Death Clock 最近推出了免费全国血液检测——约 50 项标志物，由 Labcorp / Quest 执行。成本"在几十美元级别"。

商业模式：免费检测作为获客手段 → 如果需要深度检测（阿尔茨海默症基因、高级心脏检测），用户升级付费。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed col-span-2">

### 对"生物年龄"的警告

Brent Franson 对一些公司过度营销"生物年龄"的做法提出了直率的批评：有些公司很"莽撞"，告诉用户你比实际更年轻——真实的生理年龄（phenotypic age）不可能偏离那么多。**真正应该关注的**：LDL、HbA1c、hsCRP（C 反应蛋白）——心脏、代谢、炎症三项基本面。

</div>

</div>

---
layout: default
---

# 初创公司速览：Andromeda — 海底侦听

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 核心数据

- 创始人：Matej Cernosek
- 融资：**$1800 万 A 轮**
- 产品：可扩展传感基础设施，用于**海底态势感知**（undersea domain awareness）

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 技术栈

- **Pearl**：被动声纳浮标，30 秒内提供实时环境数据
- **Obsidian**：数据整合和 ML 分析平台，最终在地图上生成标注点
- 三周不间断部署，无任务终结性故障

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed col-span-2">

### 声纳 AI 的独特挑战

与雷达不同，海洋环境会以各种奇怪的方式扭曲声纳信号——你**无法**简单地把一个环境中学到的东西迁移到另一个环境。所以 Andromeda 必须自己构建硬件来采集数据。"这不是你下载一个开源数据集就能训练的事——你必须在目标环境中实地部署。"

</div>

</div>

---
layout: default
---

# Startup School 走进体育场：YC 的开放源代码哲学

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**YC 在旧金山举办了史上最大规模的 Startup School——4,500 人到场，Jensen Huang 上台演讲，据说烟火预算超过 100 万美元。**

批评者（如 Spellbook Legal 的 Scott Stevenson）认为："在体育场办 Startup School 与 YC 的品牌格格不入，也与让创业成功所需要的氛围背道而驰。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 主持人的反驳

YC 的 Startup School 本质上就是把 YC 的"创业圣经"开源——任何人、任何地方都可以免费学习。这和闭源风险投资机构形成鲜明对比。"如果他们认为创业是好事，为什么批评 YC 免费传播创业智慧？"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 身份的转变

当 YC 成立时，"创业者"是低社会地位的标签（"你找不到 McKinsey 的工作才去创业"）。今天创始人变成了高地位角色——YC 自然吸引了"地位追寻者"。但正如主持人指出的："优质内容本身就是价值。"

</div>

</div>

</div>

---
layout: default
---

# Geopolitics 视角：Dean Meyer 的"美国开放模型悖论"

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 悖论的核心

美国创造前沿闭源能力，这些能力被"泄漏"进中国开源权重模型。美国的创业生态（Neo Cloud 等）反过来依赖这些中国模型获取高性价比推理。

**如果美国实验室能合法学习中国模型，但中国实验室不能合法学习美国的——这是不对称。但当前是反过来的。**

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 两个主要风险

1. **依赖性**："你只和你的下一个模型一样好。"只要美国创业生态依赖中国的下一个模型发布，就处于被动位置。

2. **后门**：NP-Hard 验证问题意味着不可能在计算上保证安全。模型可以做所有评估仍然安全，然后在特定触发条件下改变行为。

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期长达两个半小时的节目中最值得记住的话：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"我不会让我的大胆假设、当前的财务状况、或者我希望发生的事——来左右我对消费者行为的观察。"
<div class="text-xs opacity-60 mt-1 not-italic">— Gary Vaynerchuk，解释他为什么能持续做出准确的预测</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"如果发生硬起飞，且构建安全的 AI 比构建不安全的 AI 更难，那么开源一切会让某个有大量硬件的恶意者更容易构建不安全 AI。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ilya Sutskever，2016 年致 Elon、Sam Altman、Greg Brockman 的邮件（诉讼中公开）</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"我希望我是最不应该支持这一禁令的人——但我全心全意地支持它。"
<div class="text-xs opacity-60 mt-1 not-italic">— Flo Crivello，Lindy 创始人，公司依赖中国开源模型</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"判断一个模型是否有后门是 NP-Hard 问题。今天的 AI 安全状态就像 2001 年被人公开破解的 Wi-Fi 加密。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dean Meyer，Sequoia Capital</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"开源软件构建了我们数字经济的 80%。开源社区有公开辩论、公开评估、公开修复的成熟流程。模型应被同等对待。"
<div class="text-xs opacity-60 mt-1 not-italic">— Justin Boitano，Nvidia VP of Enterprise AI</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的洞察：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"像 Red Hat 为开源软件提供商业支持那样，未来会有公司为开源模型做同样的事——清除 CVE、提供企业级补丁。"
<div class="text-xs opacity-60 mt-1 not-italic">— Justin Boitano，描绘开源模型的商业支持生态</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"我们人类的比赛需要一点点浪漫、一点点灰色地带——当一切都变得黑白分明，我们会怀念那种不确定。"
<div class="text-xs opacity-60 mt-1 not-italic">— Gary Vaynerchuk，关于 AI 如何介入体育和生活的每个方面</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"你为你使用的服务付费——如果想保证手机安全，你会买 iPhone——Apple 会承担这个成本。问题在于那些长尾里的小企业。"
<div class="text-xs opacity-60 mt-1 not-italic">— 主持人在节目中讨论开源网络安全的成本分配问题</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"我信任美国的开源替代品会赶上来——对我的业务的影响应该是暂时的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Flo Crivello，解释为什么即使支持禁令也不会让他破产</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"'蒸馏'这个词让人们陷入了哲学讨论。不如直接称之为'服务条款违规'——这样更清楚地揭示了人们真正不满的是什么：全球监管套利。"
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Weisenthal，Bloomberg，在节目讨论中被引用</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
TBPN · 2026年7月27日
</div>

<div class="mt-4 text-sm opacity-50">
Open Source vs Closed Source · AI Security · Geopolitics · Creator Economy · Defense Tech · Longevity
</div>
