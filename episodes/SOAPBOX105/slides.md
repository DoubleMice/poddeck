---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Risky Biz Soap Box: It took a decade, but allowlisting is cool again'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 白名单，十年后终于又酷了

<div class="mt-6 text-lg opacity-70">
Airlock Digital 创始人谈端点安全策略的回归
</div>

<div class="mt-8 text-sm opacity-50">
Dave Cottingham (CPO) · Daniel Schell (CTO) · 专访 Patrick Gray
</div>

<div class="mt-2 text-xs opacity-40">
Risky Biz Soap Box · 2026 年 3 月
</div>

---
layout: default
---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
**没有 AI 的智能推荐**<br/>
<span class="opacity-70">Airlock 用决策树 + VirusTotal 数据做出了 95%+ 准确率的 AutoTrust 推荐引擎，刻意绕开了 LLM</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
**12 年零竞品**<br/>
<span class="opacity-70">在端点安全这个拥挤的市场，为什么几乎没有人跟 Airlock 做同样的事？</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
**阻断执行机制，而非检测行为**<br/>
<span class="opacity-70">MSBuild、ClickOnce、VSTO —— 直接让攻击者的工具链失效</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**白名单不是产品，是策略**<br/>
<span class="opacity-70">安全行业卖的是"装了就好"；Airlock 卖的是管理和生命周期</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed col-span-2">
**市场拐点：合规驱动 + 20 万端点案例**<br/>
<span class="opacity-70">从"白名单只能在 ATM 上用"到"动态终端环境全量执行"，认知彻底变了</span>
</div>

</div>

---
layout: default
---

# 两位联合创始人

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dave Cottingham

<div class="text-sm opacity-70 mt-2">
**首席产品官 (CPO)** · 联合创始人
</div>

<div class="mt-3 text-sm leading-relaxed">
刚从 CEO 位置退下来，专注产品方向。将 CEO 交给 Kevin Dunn（纽约），以推动美国市场扩张。
</div>

<div class="mt-3 p-3 bg-blue-100 bg-opacity-40 rounded text-sm italic">
"终于可以专注产品了，这是我从一开始就在做的事。"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Daniel Schell

<div class="text-sm opacity-70 mt-2">
**首席技术官 (CTO)** · 联合创始人
</div>

<div class="mt-3 text-sm leading-relaxed">
主导底层工程——跨 Windows（XP 到 Win11）、Linux（旧版发行版）、macOS 的代理开发，以及所有执行拦截点的覆盖。
</div>

<div class="mt-3 p-3 bg-green-100 bg-opacity-40 rounded text-sm italic">
"这非常难。你没法'vibe code'出来。"
</div>

</div>

</div>

---
layout: default
---

# AutoTrust：不用 AI 的智能推荐引擎

<div class="mt-6 text-sm leading-relaxed">

**背景**：Patrick 在上次访谈中提出——你们已经有中央控制台管理白名单，为什么不用 AI 来自动化决策？

几个月后，Airlock 真的做出了一个推荐系统。**但它完全没有使用当代 LLM。**

</div>

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-50 mb-1">数据来源</div>
<div class="text-sm font-semibold">客户环境内部数据</div>
<div class="text-xs opacity-60 mt-1">执行频率 / 发布者 / 文件哈希</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-50 mb-1">外部情报</div>
<div class="text-sm font-semibold">VirusTotal 集成</div>
<div class="text-xs opacity-60 mt-1">多引擎交叉验证</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-50 mb-1">决策方式</div>
<div class="text-sm font-semibold">决策树 + 规则引擎</div>
<div class="text-xs opacity-60 mt-1">确定性、可解释、可控</div>
</div>

</div>

<div class="mt-4 text-sm opacity-70">
**关键选择**：不把白名单的决策权交给非确定性模型。AI 可能"发疯"，白名单不行。
</div>

---
layout: two-cols
---

# 为什么不让 LLM 管白名单？

<div class="text-sm leading-relaxed mt-4">

**核心理由：非确定性**

当 LLM 出错时（幻觉、误解上下文），白名单的后果是灾难性的——不该运行的恶意代码可能被执行，或者关键业务软件被误拦。

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
AI 虽然能提供很好的外部上下文（"这个文件是什么？"），但白名单系统需要的是"是/否"的可审计决策。
</div>

<div class="mt-3 text-sm leading-relaxed">
客户环境的数据是**静态的、已限定范围的**——你不需要一个"计算机之神"来回答你环境里有什么，现有数据就够用。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./autotrust-decision.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 95% 准确率，无需"计算机之神"

<div class="mt-4 grid grid-cols-2 gap-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**"把这个问题翻转过来"**

Airlock 不是替所有客户做全局信任决策（那是无限规模问题）。每个客户**了解自己的运营环境**，天然就有更高的信任判断门槛。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
通过客户环境数据 + VirusTotal 静态上下文 + LO​LBin 抑制列表，可以达到 <strong>95%-97%</strong> 的准确率。
</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
**最坏的结果是什么？**

客户永远达不到 enforcement 模式——也就是"默认拒绝"的主动保护没有真正生效。AutoTrust 的设计目标就是**加速这个从部署到 lock-down 的过程**。
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
Patrick："那不就是把决策从终端抽象出来，放到别处去做吗？——这改变了反恶意软件的基本逻辑。"
</div>

</div>

</div>

---
layout: default
---

# 自然语言输出 ≠ LLM 决策

<div class="mt-4 text-sm leading-relaxed">

Airlock 的 AutoTrust 输出**看起来很像 LLM 生成的内容**——有自然语言的解释说明，告诉你系统为什么做出某个推荐。**但做出决策的过程完全是决策树。**

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">

### ❌ LLM 做决策

- 非确定性：同样的输入可能给出不同答案
- 不可审计：无法回溯"为什么"
- 可能幻觉：编造不存在的文件信息
- 把白名单控制权交给不可控模型

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">

### ✅ 决策树 + 自然语言解释

- 确定性：相同输入永远产生相同输出
- 可审计：每步决策逻辑清晰可追溯
- 基于真实数据：内部环境 + VirusTotal
- 自然语言仅用于**解释**，不参与决策

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
**"我们提供了做出决策的框架——客户可以选择自己的路径。真正强大的地方在于，把环境信息汇总起来，给客户一个优先级排序的推荐工作列表。"**
</div>

---
layout: default
---

# 十年经验积累的白名单智慧

<div class="mt-4 text-sm leading-relaxed">

Airlock 把自身和客户的**十年教训**编码进了 AutoTrust 的规则引擎。这不是简单的"这个文件见过几次"，而是无数实战中沉淀的判断逻辑。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-50 mb-1">陷阱 1</div>
<div class="text-sm font-semibold">不要信任 PowerShell</div>
<div class="text-xs opacity-60 mt-1">作为可信进程等于给攻击者留后门</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-50 mb-1">陷阱 2</div>
<div class="text-sm font-semibold">注意 LOLBins</div>
<div class="text-xs opacity-60 mt-1">系统自带工具可以被滥用执行恶意代码</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-50 mb-1">陷阱 3</div>
<div class="text-sm font-semibold">不要只看文件扩展名</div>
<div class="text-xs opacity-60 mt-1">攻击者会用各种方式绕过文件名检查</div>
</div>

</div>

<div class="mt-5 text-sm leading-relaxed">
**关键洞察**：这些不是从威胁报告中读到的，是 Airlock 团队亲眼看着客户一个个踩过的坑。把这些经验编码进决策树，相当于每个新客户都在"站在十年的肩膀上"起步。
</div>

---
layout: default
---

# 从检测到阻断：安全思维的转变

<div class="mt-4 text-sm leading-relaxed">

当安全行业在追逐"下一个红气球"——最新的 APT 手法、最新的恶意软件变种——Airlock 选择了一条不同的路。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**传统 EDR 思路**

- 追踪最新攻击技术
- 建立行为检测规则
- 攻击发生后响应
- 永远在追赶攻击者
- 攻击者改一个环节，检测就可能失效

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Airlock 白名单思路**

- 不关心攻击者用什么手法
- 只关心：你允许什么代码执行？
- 攻击在发生前就被阻止
- 攻击者怎么变都无所谓
- 不认识的代码一律不执行

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
**"我们不追逐威胁报告里的红色气球。我们做的是底层工程——让产品本身足够坚固。"**
</div>

---
layout: two-cols
---

# 攻击链 vs 白名单阻断

<div class="text-sm leading-relaxed mt-4">

**现代攻击者的手法非常复杂**：VB Script → Batch 文件 → DLL 注入 → EXE 下载 → 最终载荷。每一步都在尝试绕过 EDR 的行为检测。

但对 Airlock 来说，**每一步都是一次代码执行**——每一步都可以被阻断。

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
攻击者只需找到一个 EDR 看不到的路径；白名单需要堵住所有执行点——但一旦堵住，就永远有效。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./attack-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 案例：阻断攻击技术类别

<div class="text-sm leading-relaxed mt-4">

Airlock 不去检测"某个具体的恶意软件"，而是**让攻击者用来作恶的工具本身失效**。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-50 mb-1">阻断</div>
<div class="text-sm font-bold">MSBuild 编译</div>
<div class="text-xs opacity-60 mt-1">攻击者无法在目标机器上即时编译 .NET 项目，直接在内存中生成可执行文件</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-50 mb-1">阻断</div>
<div class="text-sm font-bold">ClickOnce 侧载</div>
<div class="text-xs opacity-60 mt-1">阻止利用微软打包机制 sideload 恶意代码——一个客户主动联系后才发现 Airlock 早已支持</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-50 mb-1">阻断</div>
<div class="text-sm font-bold">VSTO 插件执行</div>
<div class="text-xs opacity-60 mt-1">Office 插件被武器化作为代码执行入口——Airlock 直接拦截这类执行路径</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**"我们不去看攻击树的末端——不去抓最终的结果。我们关注的是攻击者沿着攻击链使用的每一个技术，然后把这些技术从桌面上拿掉。"**
</div>

---
layout: default
---

# 为什么 12 年了几乎没有竞品？

<div class="mt-4 text-sm leading-relaxed">

在端点安全这个万亿美元市场里，**Airlock 几乎独占白名单赛道**。这不是因为别人没看到机会。

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-sm leading-relaxed">

**新入局者的困境**

- 大多只支持一个操作系统（通常只有 Windows）
- 即使自称"应用控制"，实际只是增强版黑名单
- 缺乏多年客户部署中积累的经验教训
- PAM 厂商混水摸鱼，声称能做白名单

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">

**Airlock 的护城河**

- Windows XP 到 Win11、旧版 Linux、macOS（Intel + Apple Silicon）全覆盖
- 12 年持续维护这些代理——代码执行机制持续演进
- 不是"vibe code"能堆出来的，是真实客户环境里的踩坑积累
- 轻量、高性能——VDI 环境下的 IOPS 和内存都不能超标

</div>

</div>

---
layout: two-cols
---

# 跨平台代理的技术护城河

<div class="text-sm leading-relaxed mt-4">

构建一个真正的跨平台白名单代理**极其困难**：

- 每个操作系统有独特的代码执行机制和拦截点
- Windows 需要覆盖从 XP 到 Win11 的差异
- Linux 不同发行版、不同内核版本的行为各不相同
- macOS 要同时支持 Intel 和 Apple Silicon

**这不是新创公司能在 6 个月内做出来的。**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cross-platform.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 性能也是护城河

<div class="mt-4 text-sm leading-relaxed">

白名单代理看起来简单——"允许/拒绝"一个二进制执行。但当你在 **VDI（虚拟桌面）环境**中部署时，性能约束会让大多数方案崩溃。

</div>

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-50 mb-1">IOPS 瓶颈</div>
<div class="text-2xl font-bold text-red-500 my-1">⚠️</div>
<div class="text-xs opacity-70">VDI 主机上磁盘 IO 极其宝贵，代理不能产生额外读盘压力</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-50 mb-1">内存占用</div>
<div class="text-2xl font-bold text-orange-500 my-1">⚠️</div>
<div class="text-xs opacity-70">成千上万个端点同时运行，每 MB 内存都是成本</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-50 mb-1">六七年的打磨</div>
<div class="text-2xl font-bold text-yellow-600 my-1">⏳</div>
<div class="text-xs opacity-70">不是一次开发完成的，是多年客户反馈驱动下的持续优化</div>
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
**"这些是我们在某个具体客户那里花了六七年才解决的——但这些教训全部积累进了产品里。"**
</div>

---
layout: two-cols
---

# 安全产品 vs 安全策略

<div class="text-sm leading-relaxed mt-4">

**白名单不是装了就完事的产品**，而是一种需要组织采纳的端点安全策略。

传统安全产品的思路是"安装这个，你就安全了"。白名单需要管理、需要生命周期、需要融入业务流程。这让它的销售门槛更高——但也让它的效果更持久。

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
**"这不是最简单的路，但当威胁格局变得越来越复杂，效果是决定性的。"**
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./strategy-product.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从"这不可能"到"我们已经在做了"

<div class="mt-4 text-sm leading-relaxed">

白名单历史上背负着沉重的认知包袱——**"只能在 ATM 和静态信息亭上用"**。这是 Airlock 成立时继承下来的市场偏见。

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**过去的印象**

- "白名单只能在静态设备上用"
- "根本不可能在动态终端环境落地"
- "运维负担太重"
- "那是 ATM 才用的东西"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**现在的现实**

- 20 万端点全量 enforcement
- 最终用户计算动态环境
- AutoTrust 自动推荐规则
- Teams / Slack / ServiceNow 集成

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
**Daniel 的回应**：遇到有人说"这不可能"，我就问——"你上次尝试是什么时候？用什么试的？你能解释一下为什么我们有 20 万端点的客户在全 enforcement 下运行吗？"**
</div>

---
layout: default
---

# 合规驱动：白名单市场的拐点

<div class="mt-4 text-sm leading-relaxed">

**合规标准是 Airlock 增长的最大推手。** 各行各业被监管要求强制执行应用控制——他们不得不做，然后发现：这东西真的有效。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
**推手 1：强制合规**

PCI-DSS、NIST、Essential Eight 等框架要求企业实施应用白名单。合规成了"不得不试"的入口——然后效果说服了客户留下来。
</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
**推手 2：零信任叙事**

虽然"零信任"这个词被用得面目全非，但"默认拒绝"的核心理念已经深入人心。简单地解释"不认识就不执行"越来越容易。
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**Patrick 的评价**："哈，合规——最好的销售工具。"
</div>

---
layout: default
---

# 企业工作流集成：让白名单融入业务

<div class="mt-4 text-sm leading-relaxed">

白名单的最大障碍不是技术，**是流程**——如何在不影响生产力的前提下、在对的时间把对的信任交给对的人？

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-50 mb-1">审批</div>
<div class="text-sm font-semibold">Microsoft Teams</div>
<div class="text-xs opacity-60 mt-1">在聊天工具中完成白名单审批</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-50 mb-1">工单</div>
<div class="text-sm font-semibold">ServiceNow</div>
<div class="text-xs opacity-60 mt-1">把信任决策接入 IT 工单流程</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-50 mb-1">协作</div>
<div class="text-sm font-semibold">Slack</div>
<div class="text-xs opacity-60 mt-1">在即时通讯中处理异常审批</div>
</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
**"有意思的是，我们集成的不是其他安全工具——而是业务生产力和工作流平台。这才是最大的推动因素。"**
</div>

<div class="mt-3 text-xs opacity-50 text-center">
Patrick 调侃：每个安全创业公司都从"对抗中国 APT"开始，最后都在写 ServiceNow 集成。
</div>

---
layout: default
---

# Dave 的角色转变：CEO → CPO

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**为什么放权？**

让一个美国人去领导美国业务扩张。"我知道很多创始人，当一家高速增长的软件初创公司的 CEO 并不是一件有趣的事。"

Dave 现在可以**专注产品**——"能专注于产品让我无比兴奋，这是我从一开始就在做的事。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**新 CEO：Kevin Dunn**

<div class="mt-2 text-sm opacity-80">
驻纽约，深谙 Airlock 的业务和产品。
</div>

<div class="mt-3 text-sm leading-relaxed">
"他是一个出色的运营者，真正理解我们的业务在做什么。在他的领导下，我很期待能进一步加强我们的一切。"
</div>

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
**战略意图清晰**：Dave 专注产品护城河，Kevin 负责商业扩张。Airlock 正在从澳大利亚公司变成真正的全球玩家。
</div>

---
layout: default
---

# 攻击者越聪明，执行就是执行

<div class="mt-4 text-sm leading-relaxed">

安全行业有一种焦虑——攻击者不断进化，今天写的检测规则明天可能就失效了。但 Airlock 的核心洞察是：**不管攻击者用什么手法，他们总要在某个地方执行代码。**

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm">

**攻击者的策略**

<div class="mt-2 opacity-70 leading-relaxed">
越来越复杂的攻击链——多重脚本嵌套、反射加载、内存执行——都是为了绕过"基于已知行为"的检测规则
</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-sm">

**Airlock 的回应**

<div class="mt-2 opacity-70 leading-relaxed">
不看攻击手法只看执行点。对 EDR 来说是 20 个需要检测的行为；对 Airlock 来说是 20 次可以阻止的代码执行
</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
**"只要覆盖了所有代码执行的拦截点，无论攻击者用什么手法来触发这些执行，它都会有效。"**
</div>

---
layout: default
---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<span class="font-semibold">"It's non-deterministic — when you're putting it in charge of an allow list…"</span>
<div class="text-xs opacity-60 mt-1">Dave 解释为什么不能让 AI 直接管理白名单——确定性是白名单的底线要求。</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<span class="font-semibold">"You can't just vibe code this up."</span>
<div class="text-xs opacity-60 mt-1">Daniel 解释为什么跨平台白名单代理是真正的技术护城河，不是新创公司能速成的。</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
<span class="font-semibold">"Taking tooling off the table — breaking the chain rather than capturing it at the end."</span>
<div class="text-xs opacity-60 mt-1">Dave 描述 Airlock 的策略：不是检测攻击结果，而是让攻击工具本身失效。</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<span class="font-semibold">"The majority of the security industry sells a product, whereas we sell a product that allows you to implement a strategy."</span>
<div class="text-xs opacity-60 mt-1">Dave 解释为什么白名单的商业模式不同于其他安全产品——卖的是策略，不是"装了就好"。</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<span class="font-semibold">"When's the last time you tried? What did you try with?"</span>
<div class="text-xs opacity-60 mt-1">Daniel 的标准回应——当有人说"白名单不可能"时，用 20 万端点的实际案例说话。</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-4 text-lg opacity-70">
白名单不是安全产品，是端点安全策略
</div>

<div class="mt-2 text-sm opacity-50">
Airlock Digital · 12 年 · 20 万端点 · 零竞品
</div>

<div class="mt-8 text-xs opacity-40">
Risky Biz Soap Box · 2026 年 3 月
</div>
