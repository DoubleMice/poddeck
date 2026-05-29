---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Risky Business #839 -- TeamPCP stole GitHub&apos;s internal repos'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Risky Business #839

<div class="text-lg opacity-70 mt-2">TeamPCP stole GitHub's internal repos</div>

<div class="mt-10 text-sm opacity-50">
  <div>Patrick Gray, Adam Boileau, James Wilson</div>
  <div class="mt-1">May 2026 · ~60 min</div>
</div>

<div class="mt-10 text-xs opacity-40 border-t border-gray-200 pt-4 mx-auto max-w-lg">
  本期深度解析 2026 年 5 月安全新闻：供应链攻击、AI 与漏洞发现、MCP 安全、DigiCert 入侵事件
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**TeamPCP × GitHub**
VS Code 恶意扩展入侵 GitHub 内部，3,800 个仓库被盗 —— 微软"端到端"拥有这次失败的每一层
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**AI 双刃剑**
Anthropic Mythos 发现 10,000+ 漏洞，但 LLM 自己也在以史无前例的速度制造新 bug
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**MCP 安全危机**
Akamai 扫描 300 个 MCP 服务器：SQL 注入、认证绕过、过时依赖 —— AI 基础设施在重蹈 2000 年代的覆辙
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**DigiCert 入侵**
恶意屏保文件 → CA 门户 → EV 硬件证书激活 → Tencent 签名恶意软件，零杀软检出
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**开源漏洞洪流**
CISA 代理局长对开源项目被 AI 漏洞报告淹没表示担忧，但"解决方案"尚未出现
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**微软自摆乌龙**
与 DigiCert 事件同期，Defender 意外将 DigiCert 根证书从 4% 的 Windows 设备中移除
</div>

</div>

---

# TeamPCP 入侵 GitHub：攻击路径

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 发生了什么

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-gray-50 rounded border-l-4 border-red-500">
**1. 恶意 VS Code 扩展** — 攻击者在 Microsoft 官方的 VS Code Marketplace 中发布了一个被植入后门的扩展
</div>

<div class="p-3 bg-gray-50 rounded border-l-4 border-orange-500">
**2. GitHub 内部员工安装** — 某位 GitHub 员工安装了这个扩展，攻击者由此获得访问权限
</div>

<div class="p-3 bg-gray-50 rounded border-l-4 border-yellow-500">
**3. 3,800 个内部仓库被盗** — TeamPCP 声称已窃取 GitHub 的内部仓库，GitHub 发言人表示这个数字"方向性一致"
</div>

</div>

</div>

<div>

### 为什么是系统性失败

<div class="p-5 bg-red-50 rounded-lg border border-red-200 mt-4">

<div class="text-base font-semibold mb-2">微软拥有失败链的每一层</div>

<div class="text-sm space-y-2 leading-relaxed">

- **Marketplace**: 微软自己运营的扩展市场
- **VS Code**: 微软开发的代码编辑器
- **GitHub**: 微软拥有的代码托管平台

</div>

<div class="mt-4 pt-3 border-t border-red-200 text-sm italic text-red-700">
"This is brilliant vertical integration of the failure stack, if nothing else."
<div class="text-xs opacity-70 mt-1 not-italic">— James Wilson, Risky Business</div>
</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# 供应链失败：端到端的崩坏

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**Microsoft Marketplace** — 微软自己运营的扩展市场，恶意扩展由此发布
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**VS Code Extension** — 被植入后门的扩展，由 GitHub 员工安装
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**GitHub Internal Repos** — 3,800 个内部仓库被 TeamPCP 窃取
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
**Next Campaign** — TeamPCP 的学习曲线正在加速
</div>

<div class="mt-4 text-sm italic opacity-70">
"They own the failure end to end."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain-failure.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 3,800 个仓库意味着什么？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### GitHub 的回应

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mt-4">

<div class="text-sm leading-relaxed">
GitHub 声称"所有被入侵的仓库都是内部仓库，客户数据未受影响"——但问题不仅如此。
</div>

</div>

<div class="mt-6 space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
**内部仓库 → 客户基础设施**：从 GitHub 内部网络到托管在 GitHub 上的客户数据和产品，路径并不长
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
**TeamPCP 的学习曲线**：这个组织擅长从每次入侵中学习，为下一次行动积累情报
</div>

</div>

</div>

<div>

### 企业公关新高度

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-4">

<div class="text-lg font-semibold mb-3">"Directionally Consistent"</div>

<div class="text-sm leading-relaxed">
当被问及 TeamPCP 声称的 3,800 个仓库是否准确时，GitHub 发言人表示这个数字是——

<div class="text-xl font-bold text-red-600 my-3 text-center">"Directionally Consistent"</div>

——与他们自己的调查结果。这可能是 2026 年企业公关用语的巅峰之作。
</div>

</div>

<div class="mt-4 p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm italic">
"Give a man a fish, he eats for a day. Give a man 3,800 repos, he hacks for who knows how long."
<div class="text-xs opacity-70 mt-1 not-italic">— James Wilson</div>
</div>

</div>

</div>

---

# Grafana / TanStack：供应链攻击网

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 攻击链的延伸

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**TanStack** → 前端库被植入恶意代码 → 通过 npm 供应链扩散
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**Grafana** → CI 工作流中使用了未固定版本的 TanStack → 凭证泄露 → 多个仓库被访问
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**MiniShader Loader** → 另一个被污染的依赖，进一步扩大了攻击面
</div>

</div>

</div>

<div>

### 两个关键问题

<div class="space-y-4 mt-3">

<div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
<div class="text-sm font-semibold mb-2">问题一：为什么 CI 工作流有访问所有仓库的凭证？</div>
<div class="text-xs opacity-70">Grafana 的 CI 凭证可以访问所有仓库——这本身就是架构问题</div>
</div>

<div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
<div class="text-sm font-semibold mb-2">问题二：为什么依赖没有固定版本？</div>
<div class="text-xs opacity-70">TanStack 被引用时未 pin 版本号，这使得恶意更新自动被拉取</div>
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm italic mt-3">
"These shouldn't be terminal sins, but this is the contemporary sort of threat environment in 2026."
<div class="text-xs opacity-70 mt-1 not-italic">— Patrick Gray</div>
</div>

</div>

</div>

</div>

---

# 归因：到底重要吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### TeamPCP 到底是谁？

<div class="space-y-3 mt-3 text-sm leading-relaxed">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**伊朗？朝鲜？** 目前没有定论。TeamPCP 的手法——大规模收集凭证而不立即使用——让归因变得极其困难
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**如果只是卖凭证呢？** Catalin Cimpanu 提出：Telegram 上存在繁荣的被盗凭证市场。也许他们只是囤积凭证然后以 $50/个出售
</div>

</div>

</div>

<div>

### 真正的问题

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-4">2026 年的威胁格局</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="flex items-start gap-2">
<span class="text-lg">🎯</span>
<span>AI 驱动的侦察工具意味着**任何弱点都会被系统性利用**，不像过去那样"有漏洞不一定会被攻击"</span>
</div>

<div class="flex items-start gap-2">
<span class="text-lg">💸</span>
<span>攻击不一定是精心策划的国家级行动——可能只是凭证贩卖</span>
</div>

<div class="flex items-start gap-2">
<span class="text-lg">🔄</span>
<span>**影响才是最终的胜负手**，而非攻击的精巧程度</span>
</div>

</div>

<div class="mt-4 pt-3 border-t border-gray-200 text-sm italic opacity-70">
"The ease with which TeamPCP has been able to do all of this is what defines the 2026 threat environment."
<div class="text-xs mt-1 not-italic">— 本期主旨</div>
</div>

</div>

</div>

</div>

---

# AI 漏洞发现：Mythos 的真实数字

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs text-red-600 uppercase tracking-wide mb-1">Total Bugs Found</div>
<div class="text-4xl font-bold text-red-600 my-2">10,000+</div>
<div class="text-xs opacity-70">Anthropic Mythos 发现的软件漏洞总数</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs text-yellow-600 uppercase tracking-wide mb-1">Critical</div>
<div class="text-4xl font-bold text-yellow-600 my-2">~2,800</div>
<div class="text-xs opacity-70">被标记为严重级别的漏洞</div>
</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs text-blue-600 uppercase tracking-wide mb-1">Reality Check</div>
<div class="text-4xl font-bold text-blue-600 my-2">∞-270</div>
<div class="text-xs opacity-70">"无限减去 270 还是无限" — The Grugq 论 Mozilla 漏洞</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
**正面意义**：如果 LLM 反复在同一代码库中发现漏洞，可能推动维护者进行架构重构而非逐个修补
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
**现实限制**：漏洞修复无法让软件变得安全。二十年来我们一直在说：不能靠打补丁来获得安全软件
</div>

</div>

---

---
layout: two-cols
---

# AI 代码速度鸿沟

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**代码编写速度 ↑↑↑** — 过去两年地球上代码行数的增长急剧加速，AI 是主要驱动力
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**Bug 修复速度 ↑** — Bug 修复也在加速，但远远跟不上代码编写的速度
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**Growing Gap = Growing Risk** — 两条曲线的差距越大，未修复的漏洞就越多
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**讽刺之处**：AI 能找 bug，AI 也在创造 bug——而它不擅长发现自己创造的那类逻辑缺陷
</div>

<div class="mt-3 text-sm italic opacity-70">
"The first number is going up a lot faster than the second."
<div class="text-xs mt-1 not-italic">— Adam Boileau</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-velocity-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Apple 内存完整性绕过：最令人失望的漏洞

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 期望 vs 现实

<div class="text-sm leading-relaxed space-y-4 mt-3">

<div class="p-3 bg-gray-50 border-l-4 border-blue-500 rounded">
**最初印象**：Mythos 找到了绕过 Apple 内存完整性保护的漏洞 → "太震撼了"
</div>

<div class="p-3 bg-gray-50 border-l-4 border-orange-500 rounded">
**补丁发布后**：在研究人员发布细节之前，有人逆向分析了补丁 —— **一行汇编代码的修改**
</div>

<div class="p-3 bg-gray-50 border-l-4 border-red-500 rounded">
**真相**：一个复制内存例程中的**整数溢出**。不是 PAC 绕过，不是内存标记攻击，就是普通的溢出
</div>

</div>

</div>

<div>

### 为什么重要

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-lg font-semibold mb-3">James 的失望</div>

<div class="text-sm leading-relaxed italic">
"I think this was actually my biggest disappointment of the week. And the bar is actually pretty high for that this week."
</div>
<div class="text-xs opacity-70 mt-2 not-italic">— James Wilson</div>

<div class="mt-5 pt-4 border-t border-gray-200">

<div class="text-sm font-semibold mb-2">关键洞察</div>

<div class="text-sm leading-relaxed">
如果这种漏洞都能绕过内存完整性保护，那这堵"墙"上可能还有很多别的洞——在你担心内存完整性之前，先修补基本的整数溢出吧。
</div>

</div>

</div>

</div>

</div>

---

# LLM 自己也在制造 Bug

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 一个真实的故事

<div class="text-sm leading-relaxed space-y-4 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
Patrick 的团队用 Claude 和 Codex 开发内部工具：新闻采集、排序、标注系统
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**Bug 描述**：从列表中删除文章后，拖拽排序产生不可预测的效果——崩溃、数据错乱
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**本质**：这不是安全漏洞，但**安全漏洞就是这么来的**——状态管理中的逻辑缺陷
</div>

</div>

</div>

<div>

### Adam 的"速度差距"论点

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">两条曲线的背离</div>

<div class="text-sm leading-relaxed">

<div class="flex justify-between items-center my-3">
<div>代码编写速度</div>
<div class="text-green-600 font-bold">↑↑↑ 急剧上升</div>
</div>

<div class="flex justify-between items-center my-3">
<div>Bug 修复速度</div>
<div class="text-red-600 font-bold">↑ 缓慢上升</div>
</div>

</div>

<div class="mt-4 pt-3 border-t border-gray-200 text-sm italic">
"The velocity of lines of code being written has wildly increased. The velocity of bugs we fix has also increased — but the first number is going up a lot faster than the second."
<div class="text-xs opacity-70 mt-1 not-italic">— Adam Boileau</div>
</div>

</div>

</div>

</div>

---

# 开源漏洞洪流：CISA 的担忧

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 问题

<div class="space-y-3 mt-3 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**海量 AI 漏洞报告** — LLM 以工业规模发现漏洞，大多数开源项目没有能力处理这种报告量
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**维护者不堪重负** — 有资金支持的活跃项目（如 Authentik）还行，但大部分"已完成"的项目根本没有人力
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**Nick Anderson (CISA 代理局长)** — 公开表达了担忧，并引用了 XKCD 漫画，这本身就是一种文化信号
</div>

</div>

</div>

<div>

### 但解决方案在哪里？

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-4">James 的吐槽</div>

<div class="text-sm leading-relaxed italic">
"Every paragraph I was like: yes, but WHAT? Give me something tangible."
</div>
<div class="text-xs opacity-70 mt-1 not-italic">— James Wilson 在喝咖啡之前读到的文章</div>

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 bg-gray-50 border-l-4 border-orange-500 rounded">
**关键陈述**："The United States has not invested where it should." — 但与此同时 CISA 也在面临预算削减
</div>

<div class="p-3 bg-gray-50 border-l-4 border-purple-500 rounded">
**根本矛盾**：开源对互联网至关重要，但开源维护者"by virtue of their community roots, aren't necessarily well equipped"
</div>

</div>

</div>

</div>

</div>

---

# CISA KEV：开放众包报告

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 新机制

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**CISA 上线了网页表单** — 允许安全从业者报告在野利用的漏洞，将其加入 KEV 列表
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**为什么好**：美国政府的可见度有限。如果某银行正被 KEV 列表中不存在的漏洞攻击，应该能上报
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**实际影响**：对于银行等行业，KEV 列表已经取代了 NIST CVE 数据库作为优先级依据
</div>

</div>

</div>

<div>

### 分诊的噩梦

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">一个沉重的 "如果"</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
Adam 的担忧：KEV 最初的价值在于 **"短小精悍"**。当列表膨胀到 20,000 条时，它就不再是有效的优先级工具了
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm">
"Open it up, makes good. We are all landing on the same point: if the triage process is good, this will be a good thing. And my goodness that is a hell of a load bearing IF right now."
<div class="text-xs opacity-70 mt-1 not-italic">— James Wilson</div>
</div>

</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# MCP 安全：旧漏洞，新入口

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**Existing API** — 已有认证、已测试的 API 端点，安全机制成熟
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**MCP Server Wrapper** — vibe-coded，新认证实现，新攻击面
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**LLM Agent** — 通过 MCP 调用，信任 MCP 的输出
</div>

<div class="mt-2 grid grid-cols-3 gap-2">
<div class="p-2 bg-red-50 border-l-2 border-red-400 rounded text-xs">SQL 注入</div>
<div class="p-2 bg-red-50 border-l-2 border-red-400 rounded text-xs">认证绕过</div>
<div class="p-2 bg-red-50 border-l-2 border-red-400 rounded text-xs">过期依赖</div>
</div>

<div class="mt-3 text-sm italic opacity-70">
"Classes of things we should have not been creating for a long time now."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mcp-wrapper.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# MCP 与 Starlette：AI 基础设施的安全债

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### MCP 服务器安全扫描

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**Akamai 扫描了 300 个 MCP 官方服务器**，聚焦认证、授权、工具和后端集成
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**发现的 Bug 类型**：SQL 注入、认证绕过、过期依赖——都是本不该在 2026 年出现的漏洞类别
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**根因**：MCP 服务器大多是 vibe-coded，拉入了有漏洞的包，创建了不必要的中间层
</div>

</div>

</div>

<div>

### Starlette 的简单漏洞

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">Host Header 一字篡改</div>

<div class="text-sm leading-relaxed">
Starlette 是 FastAPI 等 Python 框架的底层连接处理库，被 AI Agent 大量使用。其漏洞极度简单：

<div class="p-3 bg-gray-100 rounded my-3 text-center font-mono text-sm">
改变 Host header 一个字符 → 认证处理全部失效
</div>

这是一个本该在代码审查中被发现的 bug。
</div>

<div class="mt-4 pt-3 border-t border-gray-200 text-sm italic">
"This is moving too fast and not enough checks in it."
<div class="text-xs opacity-70 mt-1 not-italic">— James Wilson</div>
</div>

</div>

</div>

</div>

---

# James 对 MCP 的批评

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 什么问题 MCP 解决得好？

<div class="space-y-3 mt-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**MCP 协议本身有价值** — 它让 LLM 知道工具的输入/输出 schema，这是 AI 能力的阶跃变化
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**工具调用结构化** — MCP 为模型提供了"超能力"：知道该调用什么工具以及如何调用
</div>

</div>

</div>

<div>

### 问题出在 MCP 服务器

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">一个本可以避免的弯路</div>

<div class="text-sm leading-relaxed">
MCP 走得太远、想做太多。**应该在这一点停下来**：

<div class="p-3 bg-gray-100 rounded my-3 text-sm">
MCP 协议描述**如何调用已有的 API 端点**，使用已有的认证和授权机制 —— 而不是再包一层新的认证、新的 RESTful 端点
</div>

与其用 MCP 包一层，不如花时间让现有 API 对人和 Agent 都更好用。
</div>

<div class="mt-4 pt-3 border-t border-gray-200 text-sm italic opacity-70">
"I just dearly wish people would spend time making their API surface better, instead of building MCP wrappers with more bugs."
</div>

</div>

</div>

</div>

---

# DigiCert 入侵：事件全貌

<div class="grid grid-cols-2 gap-6 mt-2 text-sm leading-relaxed">

<div>

### Daniel Schell (Airlock CTO) 的复盘

<div class="space-y-2 mt-2">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
**入口**：客服代表通过 Web Chat 被说服运行恶意屏保文件
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
**访问权限**：攻击者获得了 DigiCert 门户的客服代表视图 —— 可以查看客户账户
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**关键机制**：攻击者找到已完成验证但尚未激活的 EV 证书订单，获取 IV 初始化向量码
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
**激活硬件令牌**：使用 IV 码通过 DigiCert 软件激活硬件令牌 —— DigiCert 没有私钥，但控制了激活过程
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
**结果**：攻击者获得了多家公司的 EV 代码签名证书，可以以这些公司的身份签署恶意软件
</div>

</div>

</div>

<div>

### 为什么 EV 证书更危险

<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-2">

<div class="text-sm">
EV (Extended Validation) 证书有更高级别的信任：
</div>

<div class="space-y-2 mt-2 text-sm">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
**Microsoft SmartScreen 曾直接放行 EV 签名文件**（微软在一两年前改变了这个策略，幸运的是）
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**EV 签名的恶意软件**在安全产品中通常获得更高的信任级别
</div>

</div>

<div class="mt-3 pt-3 border-t border-gray-200 text-sm italic">
"The biggest surprise is that DigiCert could be vulnerable to something like this. they are such an important part of the internet sort of trust."
<div class="text-xs opacity-70 mt-1 not-italic">— Daniel Schell</div>
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# DigiCert 攻击流程

<div class="text-sm leading-relaxed space-y-2">

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
**1. 恶意屏保** — 客服代表通过 Web Chat 被说服运行
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
**2. 门户访问** — 获得客服代表视图，可查看客户账户
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**3. 窃取 IV 码** — 找到已完成验证但未激活的 EV 证书订单
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
**4. 激活硬件令牌** — 使用 IV 码通过 DigiCert 软件激活
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
**5. 签名恶意软件** — 以 Tencent 等公司身份签名，零 AV 检出
</div>

<div class="mt-3 text-xs italic opacity-70">
"To me it looks like they used their best cert in the best way." — Daniel Schell
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./digicert-attack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Tencent 证书：最有价值的战利品

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 被泄露的证书

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**Tencent Technology（腾讯）** — 最大的中国科技公司之一
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**其他受害者**：Blockcerts、Blockchain Canada、Blueedge National Reprographics、Beijing 263 Enterprise Correspondence、Darfon Electronics Corp
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
Airlock 在 VirusTotal 上找到了 **39 个使用这些被泄露证书签名的样本**
</div>

</div>

</div>

<div>

### Tencent 签名的恶意软件

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">mstsc.exe — 零检出</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
文件名伪装成 **Windows Terminal Services Client** —— 极具欺骗性
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm">
到 Airlock 发布博客时仍然**零个杀软检出**（除了一家中国 AV 厂商，可能是作者自己测试时触发的）
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm italic">
"To me it looks like they used their best cert in the best way."
<div class="text-xs opacity-70 mt-1 not-italic">— Daniel Schell</div>
</div>

</div>

</div>

</div>

</div>

---

# 微软自摆乌龙：误删 DigiCert 根证书

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 发生了什么

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**5 月 3 日**，约 **4% 的 Windows Defender 用户**收到了一个木马检测警报
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**检测名**："CertDigEnt" —— 看起来像是针对 DigiCert 证书的检测
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**实际效果**：微软把 DigiCert 的 **根证书从受影响的机器的证书存储中完全移除** —— DigiCert Short-lived Intermediate CA 和 Trusted Root G4 CA 都消失了
</div>

</div>

</div>

<div>

### 影响

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">连锁反应</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
**浏览中断**：受影响用户无法浏览使用 DigiCert 证书的网站
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
**代码签名失效**：所有 DigiCert 签名的软件都无法通过信任链验证
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
**幸运的是**：这是环部署（ring deployment），微软在扩散到所有用户之前发现了错误
</div>

</div>

<div class="mt-4 pt-3 border-t border-gray-200 text-sm">
微软事后只发布了一份模糊的 PIR："是的，这是个错误，我们将来会增加更多验证"——但没有解释具体发生了什么。
</div>

</div>

</div>

</div>

---

# Airlock：缓存如何拯救了一天

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 巧合的工程优势

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**Airlock 的 allow-listing 产品出于性能原因缓存成功执行记录**——文件在端点上的执行历史被保留
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
当 Microsoft Defender 删除 DigiCert 根证书时，Airlock 客户没有受到影响——因为之前已验证通过的文件仍在缓存中
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**全球范围内**只有一两个客户问"我受影响了吗？"——答案是否定的。事件发生在一个周末
</div>

</div>

<div class="mt-3 p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm italic">
"By chance of engineering, very good on our end. If we had this situation occur otherwise, I think there'd be very easily able to put in trust mechanisms in place to get out of trouble quickly."
<div class="text-xs opacity-70 mt-1 not-italic">— Daniel Schell</div>
</div>

</div>

<div>

### 为什么重要

<div class="space-y-3 mt-3 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**如果 Airlock 没有缓存**：任何 DigiCert 签名的文件都会在企业环境中被阻止，造成大规模业务中断
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**恢复选项**：Airlock 提供多种恢复路径——基于文件的 hash 信任、目录信任，或直接恢复证书指纹
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
**教训**：在关键安全产品中，**冗余和缓存不仅是性能优化，也是韧性机制**
</div>

</div>

</div>

</div>

---

# Airlock V7：Bin Chicken 来了

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Application Context

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
**启发式应用识别**——扫描文件数据，自动识别企业中运行的应用及其依赖关系
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**关系发现**——如果检测到 Steam，可以自动将 Steam 启动的游戏归入同一分组，而非单独对待
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**即将发布**：V7 在 2026 年 6 月初推出
</div>

</div>

</div>

<div>

### Bin Chicken 的故事

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-sm leading-relaxed">
Bin Chicken 是**澳洲白鹮 (Ibis)** 的昵称——这种鸟因在悉尼翻垃圾桶找食物而闻名。名称源于 Patrick 和 Daniel 之前的交流。

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"It does go into the nasty bins of enterprise storage to find things."
<div class="text-xs opacity-70 mt-1 not-italic">— Patrick Gray</div>
</div>

</div>

</div>

</div>

</div>

---

# Chrome Fetch API 漏洞

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 事件经过

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
Google 意外将一个私有的 Chromium bug 设为公开，其中包含 PoC 代码
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
Bug 已经存在 **42 个月**（3 年半），Google 发现后重新将其设为私有
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"一个 3 年的旧 bug 还没修"成了头条新闻——但现实远没有那么戏剧化
</div>

</div>

</div>

<div>

### Adam 的分析

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">这不是安全漏洞——这是预期行为</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
**Browser Fetch API** 允许 Service Worker 管理长时间下载，即使标签页关闭也能继续运行
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
**PoC 只是触发了正常的浏览器行为**——在浏览器沙箱、同源策略和 CORS 的约束下运行 JavaScript
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm">
**这是"期望落差"问题，不是安全问题**——这解释了为什么 Google 没有急着修补
</div>

</div>

</div>

</div>

</div>

---

# npm 社交工程 + Karoona Exploit Kit

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 攻击手法

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
**第一步**：攻击者在一个 npm 包上提交了 issue，然后主动联系维护者："把这个包交给我，我来修复所有问题"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**第二步**：获得控制权后，立即删除 issue，然后上传包含恶意代码的新版本
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
**恶意载荷**：Karoona Exploit Kit —— 一个只影响 iOS 17.3 以下版本的旧漏洞利用工具包
</div>

</div>

</div>

<div>

### 这合理吗？

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">"Ferrari engine in a Hyundai Excel"</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm">
花时间精心策划社交工程获取包的控制权 → 然后植入一个对 2023 年之后的设备无效的古老漏洞利用工具包
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
**Adam 的类比**：就像改装爱好者把法拉利引擎塞进现代 Excel——只是为了在聚会上炫耀手艺，而不是真的开上路
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm">
"Somebody's grandma or somebody's kid who's getting owned by this. It's not the thing you're keeping your large stockpile of crypto on."
<div class="text-xs opacity-70 mt-1 not-italic">— James Wilson</div>
</div>

</div>

</div>

</div>

</div>

---

# Discord E2E / Texas AG vs WhatsApp

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Discord 端到端加密

<div class="text-sm leading-relaxed space-y-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**Discord 宣布为所有通话和聊天引入 E2E 加密**——跨移动端、PlayStation、Xbox、浏览器
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**技术挑战**：跨平台 E2E 实现的一致性是一个真正的工程成就
</div>

</div>

</div>

<div>

### Texas AG 起诉 Meta

<div class="p-5 bg-gray-50 rounded-lg border border-gray-200 mt-3">

<div class="text-base font-semibold mb-3">基于一篇 Bloomberg 文章的起诉</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
Texas 总检察长起诉 Meta，声称 WhatsApp 的 E2E 加密是虚假宣传——**唯一证据是 Bloomberg 的一篇文章**
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm">
Adam 的观点：无论 E2E 是否真实，你都必须信任平台——因为他们控制着你端点的软件。如果他们想看你的消息，他们可以做到。
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded text-sm italic">
"Given Meta's history of privacy lapses, there are plenty of reasons not to install WhatsApp. Unless new evidence comes to light, the allegations in Thursday's complaint aren't among them."
<div class="text-xs opacity-70 mt-1 not-italic">— Dan Goodin, Ars Technica</div>
</div>

</div>

</div>

</div>

</div>

---

# 本周其他值得关注的故事

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**Trump Mobile 数据泄露**
澳大利亚 IT 人士发现直接对象引用漏洞：订单号是连续的，任意登录用户可以查看所有订单详情和客户信息
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**Kimswot 僵尸网络被捕**
Brian Krebs 的人肉搜索导致加拿大逮捕。OpSec 失败：犯罪用的账户和包含真名的邮箱使用了相同密码
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Cali 365 钓鱼工具包**
FBI 警告：使用 OAuth Device Code 钓鱼，可以绕过 Passkey。设备码授权比标准 OAuth 同意流程更持久
</div>

</div>

---

<div class="grid grid-cols-2 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**Kash Patel 服装品牌被黑**
FBI 局长的"Based Apparel"网站被植入 ClickFix，伪装成 Cloudflare 验证页面推送恶意软件。这位 FBI 局长还有一个波本威士忌品牌
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**伊朗 APT 行动**
针对航空航天、国防和电信的鱼叉式钓鱼。新远程访问木马。James 的评价："还行，但绝对不是 Fart 16 级别"
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-500">
**Tulsi Gabbard 辞职**
美国国家情报总监以丈夫重病为由辞职。Patrick 的观察："她是见过的看起来最离婚的人——但她从未结过婚"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**CISA 承包商泄密后续**
两位参议员致信质问 CISA 的安全能力。Adam 和 James 的评论被 Krebs 在报道中引用
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"It's just so end to end and yet still this degree of wreckage can happen. They own the failure end to end. It's brilliant vertical integration of the failure stack."
<div class="text-xs opacity-60 mt-1 not-italic">— James Wilson，论微软/VS Code/GitHub 供应链攻击</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"Give a man a fish, he eats for a day. Give a man 3,800 repos, he hacks for who knows how long."
<div class="text-xs opacity-60 mt-1 not-italic">— James Wilson，论 GitHub 3,800 个仓库被盗</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"The velocity of number of lines of code being written on this planet has wildly increased in the last two years. And the velocity of bugs that we fix has also wildly increased. But the first number is going up a lot faster than the second."
<div class="text-xs opacity-60 mt-1 not-italic">— Adam Boileau，论 AI 与代码质量</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"This is moving too fast and not enough checks in it. It's creating these mistakes like SQL injection. This is the class of things that we should have not been creating for a long time now."
<div class="text-xs opacity-60 mt-1 not-italic">— James Wilson，论 MCP 服务器的安全问题</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"If the triage process is good, this will be a good thing. And my goodness that is a hell of a load bearing IF right now."
<div class="text-xs opacity-60 mt-1 not-italic">— James Wilson，论 CISA KEV 开放众包</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于攻击者、漏洞与 AI：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"You cannot patch yourself to secure software. Infinity minus 270 is still infinity."
<div class="text-xs opacity-60 mt-1 not-italic">— The Grugq（本期引用），论漏洞修复的局限性</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"These shouldn't be terminal sins, but this is the contemporary sort of threat environment in 2026. AI has taught us that we just have to lift our game a little bit — weaknesses will be exploited in ways that previously they wouldn't have been."
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick Gray，论 2026 年威胁格局</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"The biggest surprise is that DigiCert could be vulnerable to something like this. they are such an important part of the internet sort of trust."
<div class="text-xs opacity-60 mt-1 not-italic">— Daniel Schell，论 DigiCert 入侵事件</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"To me it looks like they used their best cert in the best way."
<div class="text-xs opacity-60 mt-1 not-italic">— Daniel Schell，论攻击者对 Tencent 证书的利用——零 AV 检出</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"I think this was actually my biggest disappointment of the week. And the bar is actually pretty high for that this week."
<div class="text-xs opacity-60 mt-1 not-italic">— James Wilson，论 Apple 内存完整性绕过实际上只是一个整数溢出</div>
</div>

</div>

---

# 感谢收听

<div class="mt-20">
  <div class="text-2xl font-semibold">Risky Business #839</div>
  <div class="text-lg opacity-70 mt-2">TeamPCP stole GitHub's internal repos</div>
</div>

<div class="mt-16 text-sm opacity-60 leading-relaxed max-w-lg mx-auto">
  <div>Patrick Gray · Adam Boileau · James Wilson</div>
  <div class="mt-2">May 2026</div>
</div>

<div class="mt-16 pt-8 border-t border-gray-200 text-xs opacity-40 max-w-md mx-auto">
  In the end, the impact matters. All of that cunning hacking you do — ultimately is only of interest to nerds like us.
</div>
