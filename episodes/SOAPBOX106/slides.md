---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Soap Box: Red teaming AI systems with SpecterOps'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Red Teaming AI Systems<br>with SpecterOps

<div class="mt-4 text-sm opacity-70">
Russell Van Til · VP of Services, SpecterOps
</div>

<div class="mt-2 text-xs opacity-50">
Risky Business Soap Box · 2026-03
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**AI 红队到底是什么？** AI 红队的定义分裂成两个阵营——模型安全测试 vs. 系统级安全评估。Russell 解释了两者的区别和运营现实。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**新技术的旧问题** 大多数 AI 系统漏洞仍然是传统的 Web 应用漏洞。真正新增的攻击面只有 prompt injection。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**身份的爆炸式增长** 每个 AI agent 都带着自己的身份凭证——企业里 80-96% 的身份已经是非人类的，AI 正在加速这一趋势。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**AI 浏览器：金矿之上再建金矿** 浏览器里存着所有 post-MFA 凭证。AI 浏览器在此基础上又加了一层自然语言攻击面。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**机器速度 × 机器规模** 不仅一切变得更快，而且更多——攻防双方都在以机器速度运行，默认拒绝（deny by default）成为关键策略。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**回归基础，但更紧迫** Russell 的核心建议：身份攻击路径管理、最小权限原则——这些传统基础因为 AI 而变得前所未有地重要。

</div>

</div>

---

# "AI 红队"到底是什么意思？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型级测试

测试模型本身的安全性、对齐性、偏见等

- 试图触发模型说出不当内容
- 考验 safety guardrails
- 大多在模型 provider 侧完成

<div class="mt-3 text-xs opacity-60">
Russell: "When AI first started becoming a thing, everyone'd say that they're doing AI red teaming... they were testing a model for safety, alignment, bias."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 系统级测试

测试整个包含 AI 组件的系统的安全性

- Web app、数据库、API、skills
- 与 OWASP LLM Top 10 对齐
- 大多数企业不是在自建模型，而是在调用 API

<div class="mt-3 text-xs opacity-60">
Russell: "Most companies are not creating models themselves. They are just calling OpenAI or calling Anthropic... I like to focus on actually testing the systems that have a piece of AI in it."
</div>

</div>

</div>

<div class="mt-6 text-sm text-center opacity-70">
SpecterOps 专注于后者——AI 只是技术栈中的新组件，安全评估的本质不变。
</div>

---

# The Chatbot Reality

<div class="mt-4 text-center">

<div class="text-6xl mb-4">💬</div>

<div class="text-xl font-semibold mb-4">最常见的企业 AI 系统 = 聊天机器人</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 基础版
Web 应用接收用户输入，转发到模型进行推理

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### RAG 版
连接内部知识库，从向量数据库检索上下文

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 集成版
连接内部系统——CRM、工单、数据库——具备实际执行能力

</div>

</div>

<div class="mt-6 text-sm text-center opacity-70">
每种版本都引入新的身份、新的 API token、新的攻击路径。
</div>

---

# Not So New After All

<div class="mt-4 text-lg font-semibold mb-4">
大多数 AI 安全问题 = 换了个包装的老问题
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 传统攻击原语（仍然存在）

- **Web 应用漏洞**（XSS、SSRF、注入...）
- **IDOR**（不安全的直接对象引用）
- **身份凭证窃取**（token、cookie、API key）
- **认证绕过**
- **权限提升**

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### AI 新增的攻击面

- **Prompt injection**（直接和间接）
- **模型访问 token 泄露**
- **非确定性输出**（可重现性挑战）
- **数据投毒**（RAG 上下文操纵）

</div>

</div>

<div class="mt-4 text-sm opacity-70">
Russell: "A lot of the public reports I see is they're all most of them are traditional like web app vulnerabilities, some type of IDOR, some type of injection... The only thing I would argue is new is prompt engineering."
</div>

---
layout: two-cols
---

# AI 攻击面堆栈

<div class="text-sm leading-relaxed mt-2">

AI 系统安全问题的绝大部分根因仍然是传统的攻击原语。

**AI 只增加了极薄的一层**：
- Prompt injection
- 模型访问 token
- 非确定性输出

所有传统安全基础（身份管理、访问控制、代码安全）不仅没有过时，反而因为 AI 的引入而更加重要。

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<span class="font-semibold">核心洞察：</span>不要被 AI 的"新奇感"迷惑——该做的所有安全基础一样都不能少，而且现在风险更高了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-attack-surface.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 同样的剧本，不同的目标

<div class="text-sm leading-relaxed mt-2">

Russell 将 prompt injection 与众不同的核心洞察：

**Prompt injection 本质上就是社会工程学——只不过目标是机器而不是人。**

相同的模式：
1. 构造一个精心设计的输入
2. 操纵上下文以获取信任
3. 让目标做出它本来不会做的事
4. 如果不成功？多试几次

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<span class="font-semibold">Russell 原话：</span>"To me it's just like social engineering a human which is also part of red teaming."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./prompt-vs-social.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 非确定性：测试的噩梦

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 传统漏洞测试

<div class="mt-3 space-y-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**发送 payload → 得到确定结果**

发送 `' OR 1=1 --` → 每次都得到相同的结果

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**可复现的复现步骤**

写进报告："执行以下步骤即可复现"

</div>

</div>

</div>

<div>

### AI 系统测试

<div class="mt-3 space-y-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**发送 prompt → 得到不同结果**

同一个 prompt 发送 10 次，可能 9 次失败，1 次成功

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**无法给出精确的复现步骤**

只能记录"这是输入，这是某次的输出"——必须记录所有输入输出日志

</div>

</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70">
Russell: "A lot of times in a report when you give a client, you give them the steps to reproduce the vulnerability. When it comes to prompt injection you can't just like 'this is the prompt I send it, you'll also get the same response' — 'cause you won't."
</div>

---

# 身份的爆炸式增长

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

<div class="text-5xl font-bold text-red-600 my-2">80–96%</div>
<div class="text-sm opacity-70">企业中的非人类身份占比</div>
<div class="text-xs opacity-50 mt-1">（来自公开报告）</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

<div class="font-semibold mb-1">AI 正在加剧这一趋势</div>
每个 AI agent 都至少有一个身份凭证（模型 API token）。
如果 agent 连上了内部系统，还会获得更多凭证。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<div class="font-semibold mb-1">SaaS 开启了趋势</div>
当年 SaaS 开始流行时，大量非人类身份已经出现。AI 只是将这个趋势推向了极端。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

<div class="font-semibold mb-1">"没有连接 = 没有用处"</div>
一个不与任何系统连接的 AI chatbot 几乎毫无价值——所以企业必然会赋予它凭证。这就是矛盾所在。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

<div class="font-semibold mb-1">类比：Windows 内存凭证提取</div>
Russell 将入侵 AI agent 系统比作当年的 RDP 服务器攻击——一旦进入，就能"抓出一卡车的凭证"。

</div>

</div>

</div>

---
layout: two-cols
---

# 不在控制中的增长

<div class="text-sm leading-relaxed mt-2">

企业身份正在经历前所未有的爆炸：

- **人类身份**：相对稳定，增长缓慢
- **SaaS 非人类身份**：过去十年的主要增长来源
- **AI Agent 身份**：每个部署的 agent 携带 1-N 个身份
- **未来**：每个 AI agent 可能连接更多系统 → 更多凭证

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<span class="font-semibold">关键问题：</span>我们以前努力减少服务账号，现在 AI 时代的目标似乎变成了最大化服务账号数量。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./identity-explosion.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Agent 安全问题：OpenClaw 与 VM 谬误

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### VM 不等于安全

社交媒体上的标准建议："把 OpenClaw 放在 VM 里就安全了。"

但同一批人给了 agent：信用卡号、浏览器 cookies、各种 API token。

Russell 自己也玩 OpenClaw，但他明确表示："I do not give it the ability to get to anything."

**启示：** 隔离环境 + 全权凭证 = 没有隔离。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 一旦拥有凭证，一切皆有可能

Russell 的原话把入侵 AI agent 系统类比为当年的 Windows RDP 凭证提取攻击：

<span class="italic">"Way back when you used to be able to compromise like an RDP server or any Windows server and all the credentials that were ever there you could kind of pull out of memory — this kind of reminds me of that. If you compromise a OpenClaw system you can get a whole truckload of credentials."</span>

**启示：** AI agent 是新的凭证金矿。

</div>

</div>

<div class="mt-4 text-sm text-center opacity-70">
Patrick Gray 的总结：把 OpenClaw 锁在没有凭证的 VM 里——"that gets real boring real fast"。但只要给一个凭证，你就得假设它会被泄露并被用于横向移动。
</div>

---
layout: two-cols
---

# 最可怕的攻击链之一

<div class="text-sm leading-relaxed mt-2">

Russell 描绘了一条极其简单但致命的攻击链：

1. 用户给 AI agent 赋予读取邮件的权限（为了便利）
2. 攻击者向该用户发送一封包含 prompt injection 的邮件
3. Agent 读取邮件，执行注入的指令
4. 攻击者获得 agent 的所有凭证和访问权限

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<span class="font-semibold">Russell 原话：</span>"You let it read your email cause you wanted it to just help you read your email and then like someone just sends an email to you with a prompt injection and then off you go."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./email-agent-killchain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 案例研究：SalesLoft/Drift 泄露事件

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 第一步
GitHub 仓库被入侵，攻击者添加了用户账号

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 第二步
从 GitHub 获取 AWS 凭证，进入 AWS 环境

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 第三步
在 AWS 中窃取 **AI chatbot 的 OAuth token**

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 第四步
利用 OAuth token 访问所有连接的 Salesforce 实例

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 第五步
大规模导出客户敏感数据（呈指数级增长）

</div>

</div>

<div class="mt-4 text-sm opacity-70">
Russell: "They got the OAuth tokens to talk to everybody's Salesforce instance. And then they just started pulling out more and more credentials."
</div>

<div class="mt-2 text-sm text-center font-semibold opacity-80">
注意：整个攻击链没有一步是"AI 特有的"——从头到尾都是传统攻击原语。
</div>

---
layout: two-cols
---

# AI 聊天机器人只是目标，不是方法

<div class="text-sm leading-relaxed mt-2">

**关键发现：**

- 攻击没有从 AI 系统开始——它从 GitHub 开始
- 每一步使用的都是传统攻击手法
- AI chatbot 仅仅是数据流中的"跳板"
- OAuth token 是横向移动的关键

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<span class="font-semibold">核心洞察：</span>AI 系统引入了新的高价值攻击目标，但攻击路径本身仍然是传统的身份窃取和横向移动。
</div>

<div class="mt-2 text-sm leading-relaxed">
Russell 的总结：<span class="italic">"It's all traditional tradecraft — steal an identity, what does it have access to, pivot to the next thing, until you get to your objective."</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./attack-path-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 案例研究：Cursor 注入攻击

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 攻击起点：间接 Prompt Injection

攻击者通过 **GitHub issue 标题** 注入恶意指令。一个 Anthropic worker 读取了 issue 标题并执行了被注入的操作。

**这是间接 prompt injection 的典型案例**——攻击数据不是直接发给模型的，而是通过模型读取的外部内容（issue 标题）注入。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 供应链 + AI = 新型攻击面

Cursor 是一个 AI 驱动的 IDE（类似 VS Code）。攻击者入侵了 Cursor 的代码仓库，发布了被植入后门的恶意版本。

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 攻击升级：注入 post-install 脚本

最初，注入的指令在 post-install 脚本中执行恶意操作——这是传统的软件供应链攻击手法，只不过**攻击入口是通过 prompt injection 打开的**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 最终载荷：安装 OpenClaw 作为 C2

攻击者最终直接将恶意版本设计为安装 OpenClaw 到受害者机器上。OpenClaw 被用作 C2（命令与控制）通道——攻击者可以随时控制受害者的 agent。

### 到底意欲何为？

公开报告未能确定攻击者的最终目标。Russell 猜测可能是白帽测试技能，也可能是真实攻击者。这一不确定性本身就说明了 AI 供应链攻击的复杂性。

</div>

</div>

</div>

---

# AI 浏览器：金矿之上再建金矿

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 浏览器本身就是攻击者的最爱

Russell 直言不讳：

<span class="italic">"The browser is one of our favorite things to attack to begin with because what does the browser have in it? All your post MFA authentication credentials."</span>

常见红队手法：dump 浏览器 cookies、通过 Chrome dev port 拉取 session cookies——**绕过 MFA 直接以受害者身份登录**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### AI 浏览器 = 更多攻击面

AI 浏览器在此基础上增加了一层自然语言交互层：

- **自然语言攻击途径**：攻击者可以用日常语言操纵用户或 agent
- **更多凭证集中**：AI 浏览器为了提供便利，往往拥有更多权限
- **"每个人都会用浏览器"**：AI 浏览器的流行本质——浏览器是用户最熟悉的界面

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

<div class="font-semibold mb-1">为什么 AI 浏览器在消费端流行？</div>
Russell 的洞察：浏览器是每个人都会用的工具。如果要把 AI 推给普通消费者，把它塞进浏览器是最自然的选择。但这意味着把最大的攻击面（浏览器）和最新的攻击面（prompt injection）叠加在了一起。

</div>

<div class="mt-2 text-sm opacity-70 text-center">
Patrick Gray（半开玩笑地）： "I think using an AI browser seems like a pretty bad idea. I know this is gonna age me out real quick."
</div>

---

# AI 浏览器：攻击者的新乐园

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 红队视角

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**传统浏览器攻击**：dump cookies → 绕过 MFA → 以用户身份登录

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**AI 浏览器攻击**：以上 + 自然语言操纵 agent → 让 agent 代表攻击者执行操作

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**核心差异**：AI 浏览器给了攻击者一个"机内翻译官"——可以用日常语言发出复杂指令

</div>

</div>

</div>

<div>

### 企业安全影响

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**攻击面扩大**：浏览器已经是金矿，AI 浏览器让金矿更大、更容易挖掘

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**治理难题**：员工用 AI 浏览器处理工作数据——谁能控制 agent 读取了什么？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**必然趋势**：会打字的老式浏览器用户正在变老——<span class="italic">"Grandpa, why do you still use a browser that you have to type in?"</span>

</div>

</div>

</div>

</div>

---

# 机器速度 × 机器规模

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 攻击者获得的能力

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**机器速度**：一个完整的漏洞利用链可以在 1-2 小时内走完。攻击者使用 AI 来自动化每一步。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**机器规模**：不仅更快，而且更多。用 AI 持续扫描整个互联网，直到发现可利用的目标。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**组合效应**：Patrick Gray 提到 Claude + Prowler（开源云安全扫描器）的组合——任何攻击者现在都可以用 AI 在大规模上持续扫描和利用。

</div>

</div>

</div>

<div>

### 防御者面临的挑战

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**同样的时间窗口**：防御者必须在同样的 1-2 小时内发现并阻止所有威胁

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**安全审查跟不上**：Russell 质疑——"大多数组织知道需要安全审查，但因为大家推进得太快，审查真的在发生吗？"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**默认拒绝**：当跟不上速度时，唯一的安全策略就是 <strong>secure by default</strong> ——从"默认允许"转向"默认拒绝"

</div>

</div>

</div>

</div>

<div class="mt-4 text-sm opacity-70">
Russell: "There's a big buzzword... things move at machine speed. Adversaries can just go through a whole exploit chain in an hour or two. It's hard to keep up with."
</div>

---

# 攻击路径不再局限于单一技术栈

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 传统的攻击路径管理

- Active Directory → 域控制器 → 域管理员
- Entra ID → 云资源
- 在单一技术栈内移动

<div class="mt-2 text-xs opacity-60">
这是 SpecterOps BloodHound 传统上最擅长的领域
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 现代攻击路径：跨越技术栈

- GitHub → AWS → OAuth → Salesforce
- AD → Entra → AWS → GitHub
- Chatbot 凭证 → 内部 API → 数据库 → 域控制器

<div class="mt-2 text-xs opacity-60">
Russell: "We've already been executing those kind of attack paths across technology stacks — AD to Entra to AWS to GitHub, across them all."
</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### BloodHound Open Graph 的关键作用

Russell 提到 BloodHound 的 Open Graph 扩展使得可以**跨任意技术栈映射身份攻击路径**。攻击者不一定只走 AD 到域控的传统路径——他们可以从 GitHub 开始，经过 AWS、SaaS 应用，最终到达核心数据。防御者需要同样的跨栈可见性。

</div>

---

# 从 Chatbot 凭证到域管理员

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

<div class="text-lg font-semibold mb-2">这就是现代攻击路径管理的"震撼发现"</div>

<div class="text-sm leading-relaxed">
Patrick Gray 提问：当 BloodHound 扫描显示一个 AI chatbot 的凭证居然能导向完整的域管理员权限时，这是什么样的感受？
</div>

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

Russell 的回答非常务实——他们早就在红队评估中使用这种跨技术栈的攻击路径了。BloodHound 的新能力是**可视化**这些路径，而不是发现全新的攻击类型。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

从 AD 到 Entra 是"混合攻击路径"。加入 AWS、GitHub、Salesforce —— 这是"跨技术栈攻击路径"。AI 系统只是其中的一个新节点。

</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**最有趣的时刻**：当你遇到一个不熟悉的技术栈，需要自己去探索它的攻击面——"Oh, I didn't know it could do that, but that's really cool it can, 'cause it's very useful to me."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**XGT Moore 的贡献**：在 Open Graph 的基础上做了很多创新性工作，证明了跨栈攻击路径的可视化价值。

</div>

</div>

</div>

---
layout: two-cols
---

# 两个维度同时施压

<div class="text-sm leading-relaxed mt-2">

AI 同时从两条战线提升了安全风险：

<div class="mt-3 space-y-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**内部风险**：员工部署 AI 系统的速度远快于安全团队的掌控能力。身份爆炸、凭证泄露、最小权限原则被忽略。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**外部风险**：攻击者利用 AI 以机器速度和机器规模发动攻击。自动化扫描、漏洞利用链、横向移动都比以往更快。

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
结果：传统的安全控制（身份管理、访问控制、攻击路径可见性）不仅没有过时，反而变得<strong>不可或缺</strong>——因为这是唯一能在两条战线同时发挥作用的防御层。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="text-center">
<div class="text-6xl mb-6">⚡</div>
<div class="text-xl font-semibold mb-3">机器速度 × 机器规模</div>
<div class="text-sm opacity-70 space-y-2">
<div>内部部署速度 ↑</div>
<div>外部攻击速度 ↑</div>
<div>身份数量 ↑</div>
<div>攻击面 ↑</div>
<div class="mt-3 font-semibold text-red-500">控制窗口 → 0</div>
</div>
</div>
</div>

---

# CISO 应该怎么做？（一）

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 1. 身份攻击路径管理是基石

<span class="italic">"Identity attack path management is still the thing I'm gonna stand on for no matter what system or technology you're using."</span>

了解每个身份（人类和非人类）能访问什么、能通向哪里。对于 AI agent 的身份尤其重要——这些新身份可能拥有你没有预期到的访问路径。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 2. 最小权限原则——更严格执行

每个 AI agent 都应该只有完成其任务所<strong>必需的最小权限</strong>。不要因为"方便"就给 agent 更多权限。

<span class="italic">"One of the things that they did was they gave the AI the ability to execute arbitrary code in the environment. That's probably not something that you want to be doing in your systems as you implement them and roll them out."</span>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 3. 安全审查不能因为速度而被跳过

Russell 的核心担忧：组织理论上知道需要安全审查，但因为"跟上 AI"的压力，审查步伐跟不上部署步伐。

让安全审查成为 AI 部署流程中不可跳过的步骤——而不是一个"有时间就做"的可选项。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 4. 了解你的非人类身份

大多数组织不知道自己有多少非人类身份，更不知道每个身份的访问范围。

<span class="italic">"It's really just understand identities and what they have access to... everything's moving really fast."</span>

从完整的身份清单开始——这是所有后续安全措施的基础。

</div>

</div>

---

# CISO 应该怎么做？（二）

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 5. 从"默认允许"转向"默认拒绝"

<span class="italic">"The deny by default kind of policy... everything moves so fast and unless you can keep up with how fast that is, you're safer by secure by default mindset instead of permissive by default."</span>

在无法跟上速度的世界里，默认拒绝是唯一现实的安全策略。包括网络连接白名单、可执行代码白名单等——这些"老派"控制在 AI 时代重获价值。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 6. 跨技术栈的攻击路径可见性

现代攻击路径不再局限于 AD。你需要能看到：
- AD → Entra → AWS → GitHub → SaaS
- AI chatbot 凭证 → OAuth token → 数据平台

BloodHound Open Graph 的价值就在这里——把跨栈身份关系变成可视化图谱。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 7. 对 AI 浏览器保持清醒

如果你的员工使用 AI 浏览器处理企业数据：

- 浏览器 = 所有 post-MFA 凭证的容器
- AI 浏览器 = 以上 + 自然语言攻击面
- 考虑企业级浏览器策略——至少限制 AI 功能在企业数据上的使用范围

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 8. 将 AI 系统纳入红队测试范围

<span class="italic">"Most organizations are going to come to us to do some type of test — they have a whole system with AI in it and they want us to test that whole system."</span>

不要只测试 AI 模型——测试整个包含 AI 的系统。找专业的红队来审视：AI chatbot + 它的连接 + 它的身份 + 它的数据流。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期 Soap Box 中最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic leading-relaxed">
"Everyone's so excited about AI, they're moving so fast to do everything and to get the most value out of AI they just connect it to literally everything. And then you undo all these security principles that we spent years learning."
<div class="text-xs opacity-60 mt-1 not-italic">— Russell Van Til，论 AI 狂热如何侵蚀安全基础</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic leading-relaxed">
"To me it's just like social engineering a human which is also part of red teaming... How can I get this model to do what I want that it wasn't really planning on doing — same as calling someone on the phone and trying to get them to give you your password."
<div class="text-xs opacity-60 mt-1 not-italic">— Russell Van Til，揭示 prompt injection 的本质</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic leading-relaxed">
"If you compromise an OpenClaw system you can get a whole truckload of credentials you could do all kinds of stuff with."
<div class="text-xs opacity-60 mt-1 not-italic">— Russell Van Til，将 AI agent 安全类比为经典的 Windows 凭证提取攻击</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic leading-relaxed">
"It's all traditional tradecraft — steal an identity, what does it have access to, pivot to the next thing, until you get to your objective."
<div class="text-xs opacity-60 mt-1 not-italic">— Russell Van Til，总结 SalesLoft/Drift 泄露事件的核心教训</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic leading-relaxed">
"The browser is one of our favorite things to attack to begin with because what does the browser have in it? All your post MFA authentication credentials. Browsers are already a goldmine to begin with."
<div class="text-xs opacity-60 mt-1 not-italic">— Russell Van Til，解释为什么 AI 浏览器让攻击者兴奋</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic leading-relaxed">
"Identity attack path management is still the thing I'm gonna stand on for no matter what system or technology you're using, but AI kind of explodes that."
<div class="text-xs opacity-60 mt-1 not-italic">— Russell Van Til，论为什么传统安全基础在 AI 时代变得更紧迫</div>
</div>

</div>

---

---
layout: end
---

# Thank You

<div class="mt-6 text-lg opacity-70">
"Fundamentally still the same — identity attack path management is still the thing I'm gonna stand on."
</div>

<div class="mt-4 text-sm opacity-50">
— Russell Van Til, VP of Services at SpecterOps
</div>

<div class="mt-8 text-xs opacity-40">
Risky Business Soap Box 106 · March 2026
</div>
