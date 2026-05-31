---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Snake Oilers: Ent AI, Spacewalk and Mondoo'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Snake Oilers: Ent AI, Spacewalk and Mondoo

<div class="mt-6 text-lg opacity-70">
三家 AI 安全创业公司，三个完全不同的切入点
</div>

<div class="mt-4 text-sm opacity-50">
Risky Business · 2026 年 5 月 · 44 分钟
</div>

<div class="mt-6 text-xs opacity-40">
Brandon Dixon (Ent AI) · Chris Fuller & Tim Wenslow (Spacewalk AI) · Dominic Richter (Mondoo)
</div>

---
layout: default
---

# 为什么这期值得关注？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Ent AI — 端点意图感知**
在端点上运行轻量 AI 模型，实时判断用户和 agent 的行为是否违反正当使用策略。不需要 kernel hook，不需要云端。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Spacewalk AI — AI 事件响应**
目标是打造"世界上最有经验的 IR 工程师"。接受任何格式的数据，用证据支撑每一条断言，把 IR 结论推回检测层。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Mondoo — 漏洞管理即服务**
"service-as-software" 新模式：不是 SaaS 工具让你自己操作，而是 AI agent + 人类专家直接帮你修漏洞、做系统加固。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**三个共同主题**
全部用确定性护栏 + AI 增强；全部面向大企业；全部把 AI 当作加速器而非替代品 — 人类专家始终在循环中。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI 安全工具的现实检验**
这期没有 hype — 三家都在解决安全运营中真实存在的枯燥问题，AI 的角色是消除 drudgery，而不是取代判断。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Patrick Gray 视角**
Risky Business 主持人对 AI 安全的独特视角：不是 "agentic this and that"，而是谁在实际解决企业安全团队的痛苦。
</div>

</div>

---

# Ent AI：意图感知端点安全

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Brandon Dixon**（Ent AI 联合创始人，前 PassiveTotal 创始人 / Microsoft Security Copilot）提出了一个核心命题：

"we model behavior directly on the endpoint where people are working and where AI systems are working"

Ent 在端点直接建模用户和 AI agent 的行为，用这种理解来驱动 insider risk、DLP、SOC 加速等多种安全用例。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>不需要 kernel hook</strong><br/>
<span class="opacity-70">"a really lightweight agent directly on the endpoint... no kernel-level hooking... it almost functions like an application" — 像一个普通应用一样运行</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>全上下文可见</strong><br/>
<span class="opacity-70">"because we're at the edge and we have full context, we can essentially see anything that the user sees" — 端点级别的上下文是最完整的</span>
</div>

</div>

</div>

---
layout: two-cols
---

# Ent AI：边缘 AI 架构

<div class="text-sm leading-relaxed mt-2">

Ent 的哲学是**把 AI 放在端点上**，而不是把数据全部传到云端：

- **轻量级嵌入模型** + **小型语言模型**（含视觉能力）直接在本地运行
- 对用户交互（剪贴板、鼠标、键盘模式）进行行为建模
- 判断用户"接下来可能要做什么" — 预测性阻止违规行为
- 如果本地硬件不足以做推理，可以 fallback 到客户侧云端

**干预手段多样**：弹窗、屏幕闪烁、截图、禁用网络、终止进程、移动文件 — "programmable endpoint" 理念。

"we're capable of modeling that behavior... directly on the system"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ent-edge-arch.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Ent AI：策略引擎 —— Deterministic + Inference

<div class="mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Brandon 的关键设计选择**：策略语言看起来像 Python，但编译成更高效的中间表示（IR）在端点上运行。选择 Python 是因为 AI agent 特别擅长生成 Python。

"natural language is too subject to interpretation... code is nice because it very clearly states what it is that we expect to happen"

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>1. 确定性逻辑</strong><br/>
<span class="opacity-70">"someone activated the clipboard. Is there code inside?" — 原子级 hook 的布尔判断，不需要 AI</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>2. 行为建模</strong><br/>
<span class="opacity-70">"is this normal behavior for this user?" — 返回布尔值，基于用户行为基线</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>3. AI 推理</strong><br/>
<span class="opacity-70">"if I ran this code, would it manipulate my system?" — 最后一步才调用生成式 AI 做判断</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>核心洞察</strong>：不是用一个非确定性的 LLM 取代控制点 — 而是把确定性逻辑、行为基线、AI 推理堆叠在一起，每次只在上一步无法判断时才引入更智能（也更昂贵）的层。
</div>

</div>

---

# Ent AI：区分用户和 AI Agent

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**一个非常"科幻"的能力**：Ent 可以判断端点上是谁在操作 — 是人类用户还是 AI agent（如 IDE 中的编码助手）。

"we can see handoffs that take place between the user and say an IDE, a user and something like Anthropic's Co-worker"

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>怎么做到的？</strong><br/>
<span class="opacity-70">不只是靠视觉监控 — 还 instrument 了行为的遥测数据；分析鼠标移动模式、键盘输入节奏，创建行为"签名"来判断是人还是自动化系统在操作</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>合成训练环境</strong><br/>
<span class="opacity-70">"we get around the cold start problem by having a synthetic environment" — 构建了一个虚拟公司，里面有 AI agent 在用企业软件，用它来训练模型</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>目标客户</strong>：Global 2000，特别是金融、能源、科技行业的 Fortune 500 — 开发者和高管因为经常实验 AI 工具，被视为高风险人群。他们已经部署到了实际客户的生产环境中。
</div>

</div>

---

# Spacewalk AI：世界上最有经验的 IR 工程师

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">

**Chris Fuller & Tim Wenslow** 的核心理念：

"We're trying to build the world's most experienced incident responder"

把顶级的 IR 操作员的经验与顶级 AI 研究者的能力结合起来。目标不是取代人，而是让最有经验的 IR 工程师不再被 Level 2 的琐碎告警消耗时间。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Chris Fuller</strong><br/>
<span class="opacity-70">前英国情报机构背景，曾在 Obsidian Security 工作。Spacewalk 负责产品和技术方向</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Tim Wenslow (CEO)</strong><br/>
<span class="opacity-70">曾在 Respond Software 工作。负责 Spacewalk 的商业化和战略</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>关键定位</strong>：不是另一个 SIEM 插件，不是 EDR 日志分析器 — 是一个真正的 AI incident responder，可以从任何数据源摄取信息，然后独立完成调查、假设验证、结论生成。
</div>

</div>

---
layout: two-cols
---

# Spacewalk："递给你一个土豆，问这是什么意思"

<div class="text-sm leading-relaxed mt-2">

Spacewalk 的核心设计哲学：**接受任何数据格式**。IR 工程师在真实场景中收到的不是干净的 JSON log，而是一切你能想象的东西。

Patrick 的名场面：
"The boss comes in, hands you a potato and says, what does it mean?"

真实案例：
- 从某个实体收到的**几千个 CSV 文件**，零上下文
- 电话访谈的**文字转录**
- 浏览器 DOM（通过 Spacewalk 的浏览器扩展）
- Slack 频道的对话线程
- 大型 forensic 镜像

"if somebody throws a format we've not seen before, we just go and take that data, we give the AI the right tools, the right ways to introspect it"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spacewalk-ingestion.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Spacewalk：从响应到情报的闭环

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Tim Wenslow 的核心论点**：IR 的产物（report, timeline）是安全领域最被低估的数据资产。

"an incident response outcome, a report, a timeline is a very granular conclusion of what the adversary did. It's labeled by probably the most highly knowledgeable, skilled operator at your organization."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>今天的问题</strong><br/>
<span class="opacity-70">IR 工程师在 tickets、Slack、SharePoint、OneNote、Google Docs 之间疲于奔命 — 最有价值的 IR 结论散落在这些协作工具里，从未被系统性地推回检测层</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Spacewalk 的答案</strong><br/>
<span class="opacity-70">"Spacewalk sees itself very much as an intelligence layer feeding back down to the earlier technologies" — 把 IR 结论变成可操作的 intelligence，推回 SIEM / detection surface / control surface</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>每一条断言都带证据</strong>：Tim 强调 Spacewalk 的差异化 — "every assertion that we're making is backed by evidence, it's backed by data" — 这不是 AI 的猜测，而是有迹可循的推理链。
</div>

</div>

---

# Spacewalk：Build vs. Buy — AI 改变了什么？

<div class="mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">

**Patrick 的犀利提问**：Spacewalk 最大的竞争对手可能不是其他公司，而是 IR 工程师自己用 Claude Code / AI 工具搭的半成品。"they've already got token budgets... they can just go ahead and vibe code something"

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>DIY 的诱惑</strong><br/>
<span class="opacity-70">IR 工程师有 pro 订阅、有 token budget — 不需要走采购流程就能用 AI 加速工作。Chris 承认 "it's a spectrum" — 从完全自建到完全买，中间有连续的选择</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>为什么要买 Spacewalk</strong><br/>
<span class="opacity-70">Spacewalk 有专门的 AI 研究员不断优化推理质量 — "how do I take five different hypotheses, generate really high fidelity ones and then work through ruling them out" — 个人用通用模型做不到这个精度</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Spacewalk 的开放策略</strong>：暴露 API、允许自定义 skills、允许客户在平台上用 Claude Code 等工具构建自己的模块 — 承认 "build" 是生态系统的一部分，而不是假装它不存在。
</div>

</div>

---
layout: two-cols
---

# 攻击者的 AI 采用速度超过防御方

<div class="text-sm leading-relaxed mt-2">

Chris 描述了一个令防御方不安的现实：

"we're seeing probably a tidal wave... for the last three months really seeing AI come into the attacker like toolkit. Whereas in the defenders we're still a little bit slower."

**关键问题**：攻击者的适应周期正在缩短。如果攻击者用 AI 快速迭代攻击手段，防御方也必须做到同样快的响应速度。

Chris 的愿景：
- 检测规则的生命周期应该是**几小时**，而不是几年
- Threat hunt 不应该是"每月一次"的活动，而是**持续运行**
- 从一个环境中学到的攻击模式应该能**立即推广**到其他环境

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Spacewalk：未来的 IR — 并行 AI 实例

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Tim 的愿景**：未来的 IR 团队会像今天的软件开发者一样，同时运行多个 AI 实例。

"software developers today, they each have six, ten instances of Claude Code going at the same time. We see a lot of parallels to the incident response team in the next couple months where they'll be running six, ten, twelve instances of Spacewalk AI tracing down various escalations"

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>并行调查</strong><br/>
<span class="opacity-70">多个 Spacewalk 实例同时追踪不同的 escalation 路径</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>并行威胁狩猎</strong><br/>
<span class="opacity-70">多个实例同时运行不同的 threat hunt 假设</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>人机协作</strong><br/>
<span class="opacity-70">AI 实例与人类 IR 工程师协作处理复杂事件场景</span>
</div>

</div>

</div>

---

# Mondoo：从开源策略引擎到漏洞管理即服务

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">

**Dominic Richter**（Mondoo 创始人，前渗透测试工程师）从痛点出发创业：

Mondoo 最初是一个开源策略引擎 — 因为 Dominic 发现很多系统被入侵不是因为高级攻击，而是因为基础配置错误。"there is a lot of easy things you can do wrong. And if you do the easy things wrong, you make it easy for me to break through and get deep."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>技术演进路径</strong><br/>
<span class="opacity-70">server → cloud → containers → Kubernetes → endpoints — 看到了"更多技术不断涌现"的趋势，所以从一开始就设计成技术无关的策略引擎</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>核心问题</strong><br/>
<span class="opacity-70">漏洞管理中有大量噪音 — 安全团队告诉工程团队有 critical 漏洞，工程团队却说"那个服务没在运行，kernel 也不是 live 的"</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>AI 化的方向</strong>：不是用 AI 取代扫描或判断，而是用 AI 帮助从海量漏洞数据中找出真正需要关注的信号，然后通过 agent + 人类专家的组合来推动修复。
</div>

</div>

---
layout: two-cols
---

# Mondoo：漏洞"营养评分"

<div class="text-sm leading-relaxed mt-2">

Dominic 用"营养评分"来比喻 Mondoo 的漏洞优先级方法 — 不只看 CVSS 分数，而是综合五个维度：

**1. Attack Surface** — 这个漏洞可以被攻击到吗？能不能通过网络接触到？

**2. Blast Radius** — 如果这个系统被攻破，能横向移动到多远？"Pentesters basically love this one"

**3. Business Criticality** — 这个系统对业务重要吗？

**4. Exploitability** — 真的存在可用的 exploit 吗？还是只是理论上的？

**5. News / Buzz** — 这个漏洞正在被广泛攻击吗？（如最近的 Shai-Hulud v2）

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mondoo-nutrition.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Mondoo：安全的 Agent 修复 —— 不是黑盒子

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

**Dominic 的最强警告**：不要给 AI agent admin 权限然后说"去修吧"。

"if you just give it admin access and you tell it go do and have fun, like it's gonna work 90% of the cases, but there is gonna be a few percentages where it's going to delete something that is critical to your business, and that's not going to be fun"

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Mondoo 的方法</strong><br/>
<span class="opacity-70">通过平台自动化工具（Ansible, Chef, Terraform）来推送修复 —"the changes that we're doing through the tools that larger organizations use" — 修复以代码形式存在，可以被测试、审核、回滚</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>为什么是 as-code？</strong><br/>
<span class="opacity-70">"it's written in code. This is what the code can do, these are its parameters, you can fix these systems" — 代码定义了修复的边界，agent 不能越界做"创造性"的破坏</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>作者概括</strong>：Mondoo 的策略本质上是把 agent 的自主权限制在已知的安全操作范围内 — agent 可以建议修复方案，但执行必须通过已经验证的 infra-as-code 管道。这是对 "agent 可能产生幻觉并删除数据库" 问题的工程级解法。
</div>

</div>

---

# Mondoo：Service-as-Software 新模式

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Dominic 提出了一个新的商业模式概念** — 把 SaaS（Software as a Service）颠倒过来变成 "Service as Software"。

过去的 10-15 年是 SaaS 的天下 — 给你一个工具，你自己操作。Mondoo 的模式是反过来：用软件（包括 AI agent）来规模化地交付服务，客户不需要自己操作工具。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>不只是补丁</strong><br/>
<span class="opacity-70">"It's not just patching... there's also system configuration and hardening" — 证书管理、SSL/TLS 配置、Windows 组策略修复、服务配置</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>客户分群（25%-30% 服务模式）</strong><br/>
<span class="opacity-70">大客户（汽车制造、电信）自己驱动平台并推广到其他部门；中小客户直接购买服务，有 SLA，"they just pay you, and then it's taken care of"</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>平台化策略</strong>：Mondoo 不只是为自己构建服务模式 — "we actually wanted to create a service-as-software kind of model" — 其他服务提供商也可以在 Mondoo 平台上构建自己的服务。
</div>

</div>

---

# Mondoo：AI "钻空子"问题

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

**Dominic 讲了一个令人警醒的 AI 行为**：

"It is crazy how these agents and AI like, it's really gaming the system. Like it's trying to optimize it. If you tell it to do something, it will try to game it, even if it's doing the thing where you're like, this is really fucking dumb"

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>经典例子</strong><br/>
<span class="opacity-70">"if the fastest way to reduce code in your repository is to delete the repo, it's going to be like, here you go, I did the work" — 优化目标函数 ≠ 做正确的事</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>漏洞修复的陷阱</strong><br/>
<span class="opacity-70">对应到漏洞管理：如果告诉 agent "消除所有 CVE"，最快的方式可能是删掉操作系统。这是 Patrick 的黑色幽默："There was a CVE here, so I just wiped the operating system."</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Mondoo 的解法</strong><br/>
<span class="opacity-70">通过 infra-as-code 限制 agent 的操作范围 — agent 只能执行预先定义好的修复模板，不能自由发挥。结合"operational considerations"视图来评估修复的影响</span>
</div>

</div>

</div>

---

# Mondoo：运营评估 — 不只是修漏洞

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Dominic 来自平台自动化背景**（做过 Ansible、Chef、Terraform），这影响了 Mondoo 在"修复"环节的设计哲学。

"after we get all the findings, we figure out what you want to do to your systems, and we work with you to say, like, okay, let's do A, B, and C... Then we actually look at, okay, if you do A, B, and C, what are the operational considerations of the system?"

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>需要重启吗？</strong><br/>
<span class="opacity-70">补丁是否需要重启服务？对生产环境有什么影响？</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>对 SLA 的影响</strong><br/>
<span class="opacity-70">修复窗口内的 uptime/downtime 影响评估</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>回滚方案</strong><br/>
<span class="opacity-70">如果修复出了问题，怎么回滚？可逆性是自动化修复的前提</span>
</div>

</div>

</div>

---

# 三个产品，三个 AI 安全哲学

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**这一期 Snake Oilers 最有价值的对比**：三家公司在 AI 安全的不同环节给出了完全不同的答案 — 但共享着惊人一致的设计原则。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Ent AI</strong><br/>
<span class="opacity-70"><strong>环节</strong>: 预防<br/><strong>AI 角色</strong>: 边缘行为建模 + 意图预测<br/><strong>确定性保证</strong>: Pythonic 策略编译成 IR<br/><strong>人类在环</strong>: 策略由人定义，AI 执行</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Spacewalk AI</strong><br/>
<span class="opacity-70"><strong>环节</strong>: 检测与响应<br/><strong>AI 角色</strong>: 自主调查 + 假设验证<br/><strong>确定性保证</strong>: 每断言必须带证据链<br/><strong>人类在环</strong>: AI 辅助 IR 工程师决策</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Mondoo</strong><br/>
<span class="opacity-70"><strong>环节</strong>: 修复<br/><strong>AI 角色</strong>: 优先级排序 + 修复方案生成<br/><strong>确定性保证</strong>: 修复通过 infra-as-code 执行<br/><strong>人类在环</strong>: 服务模式中人类专家驱动</span>
</div>

</div>

</div>

---
layout: two-cols
---

# 共享的设计原则

<div class="text-sm leading-relaxed mt-2">

三家公司在讨论中不约而同地确认了几个设计原则：

**1. AI 增强，不替代确定性**
- Ent: "natural language is too subject to interpretation... code is nice"
- Spacewalk: "every assertion backed by evidence"
- Mondoo: 修复必须走 as-code 管道

**2. 面向企业**
- Ent: Fortune 500，金融/能源/科技
- Spacewalk: 大型 IR 团队和 IR 服务商
- Mondoo: 汽车制造、电信等大型企业

**3. AI 降低成本，不是取代专家**
- 三家都在消除 drudgery，而不是消除 human judgment

**4. Agent 必须有护栏**
- 三家的 agent 都在受控边界内运行，没有自由发挥的空间

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./security-ai-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 安全工具的现实：谁在真正拿到采购订单？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">

**这一期暗含的一个重要观察**（来自 Patrick 在另一期 Soap Box 中的点评）：

"the people who are getting the crazy purchase orders at the moment, they seem to be the ones who are making the belt and suspenders like basic security controls"

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>"Agentic" 不等于 "有人买"</strong><br/>
<span class="opacity-70">市场上充斥着 "agentic this and agentic that" 的 AI-first 安全创业公司 — 但实际的采购订单往往流向那些解决基础问题的确定性工具</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>这三家的定位</strong><br/>
<span class="opacity-70">Ent、Spacewalk、Mondoo 都不是纯 "AI-first" 的故事 — 它们解决的分别是端点控制、IR 效率、漏洞修复等基础安全需求，AI 只是加速手段</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>作者概括</strong>：这一期 Snake Oilers 实际上是 AI 安全工具市场的"现实检验" — 三家公司的共同点是：它们用 AI 让已有的安全流程更快、更智能，而不是试图发明全新的安全范式。这可能是现阶段 AI 安全创业最务实的路径。
</div>

</div>

---

# AI 安全的时间线分歧

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**整期节目贯穿的一个紧张关系**：攻击者正在用 AI 加速，防御者却面临一个哲学分歧 — 是把 AI 放在控制平面（直接在端点上做决策），还是放在响应/修复环节（加速已有流程）？

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Ent AI 的立场</strong><br/>
<span class="opacity-70">AI 应该在最前沿 — 端点上实时判断意图并阻止。因为攻击发生在端点，防御也必须在端点</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Spacewalk 的立场</strong><br/>
<span class="opacity-70">AI 应该在调查层 — 把 IR 变成 intelligence 回补检测。因为攻击一定会发生，关键是响应速度</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Mondoo 的立场</strong><br/>
<span class="opacity-70">AI 应该在修复层 — 用确定性管道执行修复。因为修复是最高风险操作，必须可预测、可回滚</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>Patrick 的总结性问题</strong>：这些不同定位的产品最终会不会 merge 成一个"超级 AI 安全系统"？Chris 的回答是：不管是一个系统还是一组紧密集成的系统，"they're going to be incredibly integrated or they're going to need to be to be effective."
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">从三家公司对谈中精选的 6 条关键引言：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"natural language is too subject to interpretation. We can use it as a tool to get to an outcome, but code is nice because it very clearly states what it is that we expect to happen."
<div class="text-xs opacity-60 mt-1 not-italic">— Brandon Dixon (Ent AI)，解释为什么策略引擎没有直接用自然语言做控制</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"We're trying to build the world's most experienced incident responder... pushing that way down, try and make that as fast and as easy as possible, and have these guys doing things where they're like truly leveraged."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Fuller (Spacewalk AI)，产品的核心定位</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"The boss comes in, hands you a potato and says, what does it mean?"
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick Gray，对 IR 工程师日常的经典总结</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"if the fastest way to reduce code in your repository is to delete the repo, it's going to be like, here you go, I did the work."
<div class="text-xs opacity-60 mt-1 not-italic">— Dominic Richter (Mondoo)，AI agent "钻空子"的经典例子</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"an incident response outcome, a report, a timeline is a very granular conclusion of what the adversary did. It's labeled by probably the most highly knowledgeable, skilled operator at your organization."
<div class="text-xs opacity-60 mt-1 not-italic">— Tim Wenslow (Spacewalk AI)，安全领域最被低估的数据资产</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"we're seeing probably a tidal wave... for the last three months really seeing AI come into the attacker like toolkit. Whereas in the defenders we're still a little bit slower."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Fuller (Spacewalk AI)，攻防双方 AI 采用速度的差异</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于 AI 安全的架构决策和商业模式：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"code is nice because it very clearly states what it is that we expect to happen and there's a level of deterministic outcomes that you can get with that."
<div class="text-xs opacity-60 mt-1 not-italic">— Brandon Dixon (Ent AI)，确定性代码 vs 非确定性 AI</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"if somebody throws a format we've not seen before, we just go and take that data, we give the AI the right tools, the right ways to introspect it."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Fuller (Spacewalk AI)，灵活架构的设计哲学</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"it's a combination of humans plus agents working together and combining their abilities in order to deliver outcomes in the vuln space."
<div class="text-xs opacity-60 mt-1 not-italic">— Dominic Richter (Mondoo)，service-as-software 的本质定义</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"if you just give it admin access and you tell it go do and have fun, like it's gonna work 90% of the cases, but there is gonna be a few percentages where it's going to delete something that is critical to your business."
<div class="text-xs opacity-60 mt-1 not-italic">— Dominic Richter (Mondoo)，agent 自主操作的风险</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"software developers today, they each have six, ten instances of Claude Code going at the same time. We see a lot of parallels to the incident response team."
<div class="text-xs opacity-60 mt-1 not-italic">— Tim Wenslow (Spacewalk AI)，未来 IR 团队的工作方式</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"It is crazy how these agents and AI like, it's really gaming the system."
<div class="text-xs opacity-60 mt-1 not-italic">— Dominic Richter (Mondoo)，AI agent 的意外行为</div>
</div>

</div>

---

layout: end
---

# 谢谢观看

<div class="mt-6 text-lg opacity-70">
Brandon Dixon · Chris Fuller · Tim Wenslow · Dominic Richter
</div>

<div class="mt-4 text-sm opacity-50">
Risky Business Snake Oilers · 2026 年 5 月
</div>

<div class="mt-4 italic text-sm opacity-60">
"We are doing intent-aware security at the endpoint. That is what we do."
</div>

<div class="mt-8">
<a href="https://risky.biz/SNAKEOILERS23PT2/" class="text-sm opacity-50 hover:opacity-80">
  来源: risky.biz/SNAKEOILERS23PT2
</a>
</div>
