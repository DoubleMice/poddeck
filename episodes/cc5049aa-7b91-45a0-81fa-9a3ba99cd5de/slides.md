---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '🔴 Alex Karp LIVE from AIPCon 10 | Alex Karp, Peter Zaffino, Chad Wahlquist, Sam Berry'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 🔴 Alex Karp LIVE from AIPCon 10

<div class="text-lg opacity-70 mt-4">
Palantir CEO Alex Karp · AIG CEO Peter Zaffino<br/>
Chad Wahlquist (Palantir FDE) · Sam Berry (USDA)
</div>

<div class="text-sm opacity-50 mt-8">
TBPN · AIPCon 10 · June 2026
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Token "手淫" 问题** 🚩
Alex Karp 直言企业花大钱狂刷 token 却毫无产出，并揭露 Palantir 内部如何帮助客户"戒断"这种沉迷。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"品味 + 资本"公式** 🎯
AI 可以无限量地规模化，但无法规模化"什么是真正值得解决的商业问题"——这是 Palantir 20 年来在积累的东西。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**本体论实战：4 天吞并一家公司** 🏗️
AIG CEO Peter Zaffino 讲述如何用 Palantir 在 4 天内完成对 Everest $20 亿保费组合的本体论建模——此前需要数月。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**USDA 比你以为的大 100 倍** 🌽
SNAP（食品券）$1000 亿/年、林业局、农村发展——Sam Berry 揭示这个"默默守护美国饭碗"的部门的真实规模与技术挑战。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"杀死所有仪表盘"** 📊
Palantir 前向部署架构师 Chad Wahlquist 主张：KPI 仪表盘应该是运营应用的副产品，而非目标本身。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**国有化警告与国家觉醒** ⚠️
Karp 警告：如果 AI 行业不主动解决"惹人厌"的问题，监管甚至国有化将不可避免。

</div>

</div>

---

# Token 狂刷：企业 AI 的"手淫"问题

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 问题

企业认可 AI 能创造价值，但员工的行为像是"色情成瘾"——坐在那里整天刷 token，生成没人看的仪表盘和分类标签。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mt-3">

### Palantir 的解决方案

内部有一个产品，Karp 称之为 **"戒手淫工具"**——帮助客户识别哪些 token 消费真正产生价值，哪些只是"看着像在做事的工具体验"。

> "People are just sitting there all day kind of like a porn addiction, and enterprises are like, okay, we knew this, we believe this will create value, but we cannot have people just..."
> — Alex Karp

</div>

</div>

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么这个问题很严重？**

LLM 的魔力让人产生 **"生产性错觉"**——给每封邮件打标签、检查天气、多做一个 dashboard，感觉像在工作，但实际在重排泰坦尼克号甲板上的椅子。

Karp 直言：**"It looks like masturbation at their cost"**——花着公司的钱自我满足。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3">

**根本原因：Token Maxing 文化**

- 投资人追捧"刷出最多 token 的公司"
- 前沿模型公司有估值激励去鼓励消费
- 但企业客户逐渐清醒：**"They are not happy. They do not like these people. They're tired of people token maxing."**

</div>

</div>

</div>

---

# 品味 + 资本：AI 无法规模化的一件事

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 核心公式

> **"It's taste plus money."**
> — Alex Karp

AI 的所有环节——token 消耗、代码部署、本体论构建——都可以被规模化，但无法被商品化的是 **品味**：什么商业问题值得解决？什么不值得？

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mt-3">

### 为什么 LLM 自己做不到

> "These things require actual, precise, ongoing processes. They are enhanced by large language models. They are not replaced by large language models."

LLM 可以加速一切，但 **不能替代对业务的深层理解**。石油钻井、军事供应链、汽车制造——这些需要精确的、持续的过程管理。

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 本体论（Ontology）是关键

Palantir 花了 20 年做的事：把企业的所有数据、流程、人和决策映射到一个统一的语义模型中。LLM 在这个模型上运行，而不是在原始数据上"裸奔"。

这就是为什么 Karp 可以自信地说：

> "Without LLMs, nobody would be talking about our ontology, about Apollo managing secure exploits... these deploy codes, we love them because now every company wants to deploy code. You know how you do that? You replatform on Palantir."

</div>

</div>

</div>

---

---
layout: two-cols
---

# Enterprise AI 三重奏

<div class="space-y-3 mt-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Taste（品味）</strong><br/>
什么是真正有价值的商业问题？这需要经验、判断力，以及对"两个听起来都很怪的人中，谁说的是真洞察"的辨别力。AI 做不到这一点。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Money（资本）</strong><br/>
一旦找到了对的问题，资本的作用是放大——规模化部署、扩大市场。"Taste + Money"才是公式，单独的资本只是在燃烧。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Ontology（本体论）</strong><br/>
知识本体是企业的数字孪生。它不是数据湖，不是数据仓库——它是"你的业务实际如何运作"的活模型，让 LLM 在一个有结构的世界里运行。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./taste-money-triad.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# LLM 的魔力——以及它不能做的事

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### ✅ LLM 擅长的

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<strong>写代码（Free Code）</strong><br/>
仪表盘、财务分析、一次性查询——"It's magical. And by the way, it's magical, it not only creates and... it's also addicting. It's like, you know it's not good for you, but it may lead to damage."
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<strong>漏洞发现（10-100x）</strong><br/>
> "We can now identify vulnerabilities at like 10x, 100x."
</div>

</div>

<div>

### ❌ LLM 不能替代的

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2">
<strong>需要知识存储的问题</strong><br/>
精算、石油钻井、军事行动——这些依赖于精确的、持续演进的知识体系。LLM 能增强它们，但不能替代。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<strong>安全补丁的执行</strong><br/>
> "We can take any model... we can identify vulnerabilities at 10x, 100x. But then, who patches them? How do you patch them on prem?"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>分类数据的管理</strong><br/>
> "You're not putting your classified data in a public cloud. Same thing if you have a special way of farming soybeans."
</div>

</div>

</div>

---

---
layout: two-cols
---

# 代码的三种形态

<div class="space-y-3 mt-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Free Code（自由代码）— LLM 的魔法</strong><br/>
仪表盘、一次性分析、概率性的工作。快速、几乎正确、不需要精确。"Magical, addicting, and you just keep going."
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>FDE-Managed Code（FDE 管理的代码）</strong><br/>
前向部署工程师引导下编写的代码，在 Palantir 产品中受管理，不是随机的人乱写。这是"FDE 模式的秘密"。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Primitives（原语）— 基础设施钢梁</strong><br/>
硬编码的底层结构，理解世界的运作方式。乌克兰人在用，国防部在用。"It would take millions of technical hours and an understanding of all these enterprises to do it."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-code-types.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 作为一种宗教

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Karp 的观察

> "In certain circles... essentially, it's a religion... one of the things that's very charismatic, especially to people who've never had a religion, because all of a sudden that hole in your heart that was yearning for... a established religion, Judaism, Christianity, Islam is like being filled. And all the answers are there."

AI 对于一些人来说填补了信仰真空——它提供了一种完整的、自洽的世界解释体系。这是为什么这个圈子有如此强烈的"传教"冲动。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 但宗教魅力的反面

这种魅力在投资人面前极其有效（"前沿公司对投资人来说非常 charismatic"），但——

> "They're super not charismatic with enterprises and the people."

企业客户、海军陆战队、巴士公司老板——这些真正使用产品的人不买账。他们更关心"这个东西到底能不能帮我省成本、多赚钱"，而非"我们正在创造 AGI"。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mt-3">

### Palantir 的差异化策略

Karp 的销售秘诀：

> "Don't even call us. Go spend two days with a frontier company. And if you're lucky, after you're done, I'll let you in my door."

先让竞争对手教育市场，然后客户自然会来找 Palantir 解决实际问题。

</div>

</div>

</div>

---

# 被国有化的风险

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 🚨 Karp 六个月的警告

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

> "I've been telling them for six months: We're going to be nationalized. And they're like, why would anyone nationalize? It never happened in America... We're so likable."

Karp 花了六个月给 AI 行业的"巨头"们打电话警告：**你们正在梦游进入国有化**。

这些公司觉得"我们在创造这么多价值，谁会国有化我们？"——但 Karp 指出，这不是关于你有多"likable"，而是关于政治动量已经站在了国有化那一边。

</div>

</div>

<div>

### 为什么这不是危言耸听

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"Likability" 是不可讨论的话题**  
> "We have something we're not allowed to talk about in this country: likability."

社交媒体公司也一样——人人都在用，但没有人喜欢它们。前沿 AI 公司正在走同样的路。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Palantir 的对比案例**  
> "Palantir... we have like 50, 100 million global bands. We have like 5 million people that wake up in the morning literally calling me Satan."

Karp 的观点：至少 Palantir 是"两极分化"的——有粉丝有敌人。而前沿 AI 公司只有一面：**被所有人不喜欢**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**在国家化之前，先来的是监管**  
> "Before nationalized, it's gonna be regulated by people who don't understand this."

</div>

</div>

</div>

</div>

---

# 模仿者如何帮助 Palantir

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 竞争者的意外价值

Karp 观察到，当其他人开始复制 Palantir 的模式时，带来了三个正向效应：

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**① 扩大市场**  
> "They increase the size of the market because, de facto, nobody wants to find an underwriting market where there's only one person."

如果一个市场只有一个玩家，客户不愿意把太多预算押在单一供应商身上。竞争者的存在让整个市场规模变大。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**② 提供对比**  
> "They set up a comparator. It's like, you may not like the freak show. But have you noticed the people who are serious buy it?"

当客户尝试了模仿者后发现"不太对"时，他们会更清楚地看到 Palantir 的差异化价值。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**③ 改变标准**  
> "It changes the standard. Now what you're seeing is that times 100x."

整个行业的标准被提高了。人才招募、组织方式、技术架构——所有东西都在加速进化。

</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3 text-sm">

**但也有坏处**：在初期制造市场噪音。"In the beginning, it puts clutter in the market." 但长期来看，净效应是正面的——这和 Palantir 在国防科技领域经历的路径一模一样。

</div>

</div>

---

# 增能，不要裁员

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### Karp：裁员的公关灾难

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

> "If you run around saying AI allowed you to fire two thirds of your workforce, you did it because maybe your competitor's kicking your ass."

Karp 直言：那些宣称 AI 让他们能裁掉 2/3 员工的公司，通常是因为竞争对手在蚕食他们的市场份额。但他们把 AI 当成了遮羞布。

> "You might as well just go sign up for Bernie Sanders' manifesto."

这种叙事在政治上极其危险——它给了监管者最好的弹药。

</div>

</div>

<div>

### 增能的实际案例

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

> **"If you upscale somebody, they're more valuable."**

Karp 在战场一线看到的情况：最底层的士兵现在都在操作 Palantir 产品，他们的价值大幅提升。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

> **"The soldiers at the bottom have gotten much more valuable... the people doing a lot of the operations now are doing our product. They're high school, vocationally trained."**

不是只让精英更强——而是让每个层级的从业者都更有价值。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Peter Zaffino 的呼应**：

> "Our aspiration is not to implement AI or anything that we're doing with our partners to eliminate jobs. It's about growth, reskilling, and finding ways in different markets to have exponential growth."

</div>

</div>

</div>

</div>

---

# Peter Zaffino：AIG 的转型故事

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### AIG：全球复杂风险巨头

- **50% 国际 / 50% 北美**；第二大市场是日本
- 承保最复杂的风险：航运、海洋能源、地缘政治
- 个人保险业务（意外、健康）+ 商业保险
- 9 年转型："承保盈利性存疑、运营存疑、数据存疑、资本存疑"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mt-3">

### 与 Karp 的初次会面

Zaffino 最初接触 Palantir 不是为了 Foundry 或 AIP 或本体论——他只是想找个人帮他想清楚**投资组合优化**的计算问题。

> "I just got more and more intrigued. I mean, you see the brain. I mean, he just thinks about things. He doesn't hold back."

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 实时风险管理的挑战

> "It's hard to get the aggregation done in anything that looks like real time. It's usually static. It can be 30, 60, 90 days. And your portfolio could change."

在传统模型下，风险评估数据滞后 30-90 天——而在这期间，组合可能已经变了。

**目标**：将风险评估从月度/季度压缩到每日/实时，同时处理确定性、概率性和随机性模型。

</div>

</div>

</div>

---

# 90 天迭代：与 Palantir 的合作模式

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么是一年/两年计划太僵化

Zaffino 分享了一个关键的运营哲学：

> "We do things in 90-day increments. Because going out like a year or two years is too static. And so we actually build our relationship on 90-day goals."

在这个变化速度下，传统的年度规划已经完全失效。90 天冲刺让 AIG 和 Palantir 能够**共同进化**——"We evolve together."

</div>

</div>

<div>

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**数据摄取加速**  
结构化、非结构化、文本——所有来源的数据流入数字工作流的速度从数周压缩到数小时。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**从 Binary AI 到 Agentic AI**  
> "We started with the binary gen AI, now we're into agentic AI where we can just do things autonomously for so much longer."

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**嵌入式工程团队**  
Palantir 的工程师直接嵌入 AIG 的业务团队——一边是业务领导、一边是技术团队、一边是变革管理人员——"迭代是真正重要的，因为你要把业务目标翻译成技术实现。"

</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# 本体论的威力：4 天 vs. 数月

<div class="space-y-3 mt-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>收购 Everest — $20 亿保费组合</strong><br/>
传统方法：数据湖 → 数据清洗 → 建模 → 集成。需要数月，过程中组合可能已经变了。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>有了本体论之后：4 天</strong><br/>
> "We got Palantir in to work with our team. We could build an ontology of Everest's portfolio on top of ours in four days."

不是从零开始——而是在 AIG 已有的本体论基础上叠加。收购变成了"配置"而非"迁移"。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>连锁反应</strong><br/>
> "All of a sudden, repositories and the central places of getting data and making sure it's scrubbed wasn't as relevant."

当你可以直接从管理系统构建本体论时，传统的中心化数据仓库的必要性大幅降低。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ontology-4days.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Chad Wahlquist：前向部署（FDE）的哲学

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 什么是 FDE？

> "I do what is needed. And so doing the needful is kind of the Palantir way. Like, there's no job below me."

前向部署架构师的核心哲学：**没有"配不上我"的工作**。从客户一线到高管会议，从本体论解释到 YouTube 视频——"帮助人们用不同的方式拆解问题，并以新的方式应用技术"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mt-3">

### AI 能做"拆解"吗？

这是 FDE 最核心的能力：理解一个组织的实际运作方式——不是 HR 系统里的职位描述，而是"Steve 实际干的事完全不在任何系统里记录"。传统上这是人才能做的事。

Wahlquist 的回答：**AI + 本体论 + 人类 → 可以实现**。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 多重代理互相对抗

Palantir 的做法不是用一个代理去做拆解，而是：

> "We are actually building out that world view and then running multiple agents over this actually being combative towards each other. And so actually working against each other and having critiques."

**多个 AI 代理互相攻击对方的结论**，找出逻辑漏洞，然后人类来做最终判断——这是一个迭代的、有人类在回路中的过程。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">

### 工具类比

> "When you gave carpenters power tools, there weren't less carpenters. There were more. I could do more with it. It's an empowering thing."

</div>

</div>

</div>

---

# 可塑软件：帮助企业"更不同"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 传统企业软件的悖论

> "Enterprise software is gonna force you into their box."

大多数企业软件要求你适应它的逻辑——40 种做采购订单的方式？不行，你必须统一。但这恰恰抹杀了企业的"秘方"——那些让它独特的人、流程和判断。

> **"How do we help you be more different, not more similar?"**

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 本体论作为"可塑脚手架"

Wahlquist 的答案：

> "What's missing is the malleable enterprise scaffolding that you need. And that's what we think about the ontology and Foundry and the platform, and then Apollo that allows us to go deploy these changes."

本体论提供**合适的结构 + 合适的自由度**——让你能规模化地保持独特性。这更像是给工程师权力工具，而非让他们进入一个标准化的盒子。

**关键反馈回路**：每一次用户操作（选择、纠正、拒绝）都被记录在本体论中，代理从这些隐性和显性反馈中不断学习。

</div>

</div>

</div>

---

---
layout: two-cols
---

# OODA 回路：观察、定向、决策、行动

<div class="space-y-2 mt-2 text-sm leading-relaxed">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Observe（观察）</strong><br/>
所有数据源——结构化的、非结构化的、文本、传感器——流入平台。
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Orient（定向）</strong><br/>
本体论将数据映射为"业务的真实运作方式"，而非行和列。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Decide（决策）</strong><br/>
多重代理互相对抗、互相 critique。人类在回路中做最终判断。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Act（行动）</strong><br/>
通过 Apollo 安全部署到任何环境——云端、本地、保密系统。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2">
<strong>反馈回路</strong><br/>
每一次人类选择（"这个不对"、"我选这个选项"）都被存储在本体论中 → 代理不断学习 → 下次做得更好。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ooda-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Evolve：两天砍掉 60% Token 成本

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 问题

> "Most of the time I see people building with agents, they're using the latest frontier model. Always."

开发者默认用最新最贵的模型——"先让它能跑再说"——然后发现预算被烧穿了。这是 Token Maxing 的技术根源。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Palantir 的工具：Evolve

Evolve 分析生产日志中的模型使用模式，然后自动找出优化路径：

<div class="space-y-1 mt-2 text-xs">

- **模型替换**：大部分工作流可以用更旧、更便宜、更确定性的模型
- **缓存模型**：重复查询不需要每次都调用 API
- **本体论优化**："If you actually just have this piece of data in ontology, then you would eliminate all this in 50% of your cost"
- **Prompt Tuning**：调整提示词以降低复杂度

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">

> **"In two days, eliminate 60% of their token cost by re-architecting, picking a different model, and prompt tuning."**

</div>

</div>

</div>

</div>

---

# "我想杀死所有仪表盘"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 问题："梦想之地"陷阱

> **"If I go out with the goal of building a dashboard, it's going to be the field of dreams again. No one shows up."**

大多数仪表盘就像 1989 年电影里的棒球场——你建了它，但没有人来。Wahlquist 指出，这是企业软件几十年的通病：先建数据仓库 → 再建报表 → 期待人们会来使用。

</div>

</div>

<div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**仪表盘应该是副产品**  
> "KPIs and dashboards should be a byproduct of operational applications where I'm making decisions."

指标必须嵌入到你实际做决策的应用中——不是孤立的、没人看的 BI 工具。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1996 年的建模思维还没变**  
Kimball 和维度建模在 1996 年是为了扩展数据库而设计的——2026 年人们还在用同样的方式来建模数据。"That's not actually how the world works in rows and columns."

你需要本体论来建模"世界实际运作的方式"——复杂的、多维的、包含 CAD 文件和图像的——而不仅仅是行和列。

</div>

</div>

</div>

</div>

---

# Sam Berry：USDA 不是你以为的那样

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### USDA 的组织版图

USDA 远不止"给牛奶评级"——它的实际范围令人惊讶：

- **SNAP（食品券）**：$1000 亿/年——资金来源是联邦，但由各州管理
- **林业局（Forest Service）**：管理国家森林，属于 USDA
- **FPAC**：面向农场主——面积报告、农场项目
- **农村发展（Rural Development）**：相当于一个银行，提供贷款
- **食品安全检验服务**：肉类、奶制品检验
- **大型科研体系**：实验室网络，用于农业科技研发
- **薪资处理**：为 60 万联邦雇员发放薪资

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 署名决定论？

> "The Berrys came over here from France in like 1640. And it was all farmers until my grandpa."

Sam Berry 在农业部工作——"Berry"（浆果）和农业的完美契合。但他的家族从曾祖父那一代转向了工程（喷气发动机材料工程），他现在则在 USDA "试图把工程和农业重新结合起来"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

### 主框架的故事

USDA 用来为 60 万联邦雇员发工资的系统是一个"主框架"。所有人都在警告他：
> "This thing has a personality. You can't touch it the wrong way."

但当他终于去参观了这台机器——它是一台"五年前的、全新的 IBM 服务器"。"它没有磁带，不是一群人围着它。" 技术的"神秘面纱"有时只是代际之间的信息断层。

</div>

</div>

</div>

---

# SNAP 欺诈：$120 亿的无声流失

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 问题的规模

- SNAP 是一个 **$1000 亿/年**的联邦项目
- USDA 自身的审计估算：**约 12% 的不当支付**
- 这意味着 **每年约 $120 亿** 的流失

> "That's money that could actually be going towards the intent of the program — which is to provide food to people that otherwise wouldn't be able to get it."

</div>

</div>

<div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**数据获取的挑战**  
SNAP 由联邦资助，但由**50 个州**分别管理。USDA 秘书长的第一天就发出数据调取令——但各州的系统参差不齐，有些州直接不配合。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**AI 能做什么**  
Berry 的愿景：
> "We want to get it to the point where if somebody's committing SNAP fraud... it's like your card, right? If somebody stole your card and did a transaction that wasn't recognized, your card's shut off."

目标是实时欺诈检测——就像信用卡的反欺诈系统一样——但前提是先把所有州的数据汇集到一个可用的平台上。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**国际犯罪组织**  
Berry 暗示 SNAP 欺诈不仅仅是个人行为——**"SNAP has been used to fund international crime organizations and terrorist groups"**——这是一个远超人们想象的系统性漏洞。

</div>

</div>

</div>

</div>

---

# 粮食即武器：农业的地缘政治维度

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 粮食安全的战略价值

Berry 揭示了一个通常被忽视的事实：

> "In warfare, agriculture, the food supply is usually hit before anything like kinetic even happens... before even the world knows that it's warfare."

粮食供应链的攻击往往发生在传统军事行动之前——而且可以隐蔽地进行。一个国家的自给自足能力是其最基础的战略资产之一。

> "We are so uniquely positioned as a country because of the fact that we can feed ourselves. And that is not the case for a lot of countries."

</div>

</div>

<div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**中国案例**  
中国"只能勉强养活自己"——底线水平。牛肉贸易协议被误解了：美国出口的主要是"我们不吃的那部分牛"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**GMO 的战略意义**  
Berry 个人回避 GMO，但承认其战略重要性：
> "If we were hit with some kind of adverse event... and we needed to create corn that could survive a drought better, we have the science and the research to be able to do that. It's a huge edge that we have, geopolitically."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**新世界螺旋虫危机**  
当前 USDA 正在应对从墨西哥入侵的食肉寄生虫——正在建立实验室做"不育蝇"项目。这是"用生物学对抗生物学"的典型案例。

</div>

</div>

</div>

</div>

---

# 数据中心在太空？——农田与算力的紧张关系

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Berry 的解决方案

> **"I think the best solution is putting the data centers in space, which is totally led by Elon."**

USDA 正在寻求与 SpaceX 的合作——不仅是因为技术层面的一致，更因为在"保护土地"这件事上观念一致。

> "We do care about conserving our land and putting data centers in space just makes a ton of sense."

但太空数据中心还需要几年。

</div>

</div>

<div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**当下的矛盾**  
Berry 的家乡——密歇根州 Saline，一个以农田为主的小镇——正在被建数据中心。而 30 英里外就是底特律和 Flint，这些工业衰退区明明有现成的基础设施。

> "It's very confusing to me why we wouldn't be putting these data centers in their struggling areas."

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"国家智能"的未来**  
Berry 预测了一个趋势：
> "There's going to be a shift back to caring about where your data is living."

人们开始意识到"我的数据在 AWS 上"意味着什么。未来可能像选择本地咖啡馆一样选择数据中心——"一个符合你价值观的地方，数据就在那，不跨全球分布。"

</div>

</div>

</div>

</div>

---

# 农场接班危机与自动化

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 危机

> "The farmer generation is getting very old. And kids don't want to go and run the farm."

农场主世代正在老去，年轻一代流向了大城市和白领工作。H-2A 签证（农业外劳）是目前维持劳动力的主要手段。

**根本挑战**：如果要维持美国的粮食自给能力，必须解决劳动力断层。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 自动化是答案之一

<div class="space-y-2 mt-2">

- **激光除草机器人**：用摄像头+激光替代农药，精准打击害虫
- **John Deere 自动化拖拉机**：USDA 的管理员展示的 App 里，多台拖拉机几乎可实现无人操作
- **肉类加工自动化**：大学在做的研究——用 LLM 优化肉类加工流程
- **水果采摘机器人**：解决季节性劳动力短缺

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3">

**Berry 的愿景**：

> "It would be super based to be a large scale farmer. More people should do it."

USDA 提供大额低息贷款支持新农民——需要的是一个让农业重新变得"酷"的叙事转变。

</div>

</div>

</div>

</div>

</div>

---

# 大多数公司不知道自己怎么赚钱

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Wahlquist 的惊人发现

> **"I joke that a lot of times, companies make money by accident."**

无论是 $1 亿营收的公司还是 $500 亿的巨头，Wahlquist 反复看到同一个模式：

- 他们不知道哪个产品线最赚钱
- 他们通常在推销利润最低的产品
- 真正的利润引擎可能被 KPI 的"花生酱涂抹"效应掩盖了

> "They don't actually know what their most profitable product is, and often they're trying to sell the thing that isn't actually the most profitable."

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么？

> "It comes back to how they've modeled their data to aggregate it up to KPIs and other metrics."

传统做法是把所有数据聚合成高层级的 KPI——但这就像花生酱一样把成本"抹匀"了，而不是精确计算每个产品、每条业务线的真实成本。

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3">

**本体论的解决方式**：

在最细粒度上建模业务的运作方式——不是"平均成本"，而是"这一单的实际成本"。然后才能做简单的数学：

> "How do I do more of the things that are good and less of the bad? It's that simple."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3">

**Palantir for Builders**：已有两人创业公司在加拿大阁楼里使用 Palantir 免费开发层。甚至有 Shopify 集成——一家公司通过看 YouTube 教程自己在 Palantir 上搭建，三个月内从 -10% 利润率变成 +10%。

</div>

</div>

</div>

</div>

---

# 两极分化 vs. 一面倒：Palantir 的品牌悖论

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### "我们有两面，他们只有一面"

Karp 提出了一个尖锐的观察：

> "We're polarizing, which means both sides. These people have one side."

Palantir 有人爱有人恨——每天有 500 万人醒来后就骂 Karp 是撒旦，但也有同样多的人把 Palantir 当作救星。而有前沿 AI 公司的品牌只有一面：**无人喜欢**。

> "They're just so... it's like, you know, social media companies too have the same problem. Everyone uses them, but no one likes them."

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么这很重要

被爱和被恨都比"无人关心"好。当一个品牌只有一面倒的负面印象时：

- 监管者没有任何政治阻力去限制你
- 你的客户在"偷偷"用你的产品，但不想公开表示支持
- 你没有可以动员的群众基础

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">

**Karp 的销售策略**：

> "I have a secret. Every company has a secret way of selling. You know what my secret way of selling is? Don't even call us. Go spend two days with a frontier company. And if you're lucky, after you're done, I'll let you in my door."

让竞争对手用他们的"不讨喜"来教育市场——然后客户主动来找 Palantir 解决实际问题。

</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# Token 消费光谱：从浪费到价值

<div class="space-y-2 mt-2 text-sm leading-relaxed">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>Token Maxing（浪费）</strong><br/>
"Demasturbatory" 消耗：没人看的仪表盘、每封邮件的 AI 标签、检查天气的 agent。Karp:"It looks like masturbation at their cost."
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>探索/实验</strong><br/>
AI 辅助写报告、一次性查询、原型验证。有价值但不持续——需要被引导到产品化路径。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>价值创造</strong><br/>
保险核保自动化（AIG：从数月到数小时）、SAP 迁移加速（砍半成本）、本体论驱动的运营决策。每一 token 都有可追踪的业务产出。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-1">
<strong>Evolve 工具</strong><br/>
重新架构 + 模型替换 + Prompt Tuning<br/>
→ <strong>2 天内消除 60% Token 成本</strong>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">AIPCon 10 对谈中最值得记住的几句</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It's taste plus money. AI can be scaled in a very valuable but largely going to commodified way, but you can't scale the taste of what is the business problem you want to solve."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Karp，论企业 AI 的核心公式</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"These things require actual, precise, ongoing processes. They are enhanced by large language models. They are not replaced by large language models."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Karp，LLM 的边界</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"We could build an ontology of Everest's portfolio on top of ours in four days."
<div class="text-xs opacity-60 mt-1 not-italic">— Peter Zaffino，本体论让 $20 亿收购组合在 4 天内完成建模</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"I wanna kill all dashboards. KPIs and dashboards should be a byproduct of operational applications where I'm making decisions."
<div class="text-xs opacity-60 mt-1 not-italic">— Chad Wahlquist，仪表盘应该是副产品</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Before nationalized, it's gonna be regulated by people who don't understand this. And the momentum on this is on the side of people who are nationalized."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Karp，对 AI 行业国有化风险的警告</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"In warfare, agriculture, the food supply is usually hit before anything like kinetic even happens — before even the world knows that it's warfare."
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Berry，粮食安全的地缘政治维度</div>
</div>

</div>

---

---
layout: end
---

# Thank You

<div class="text-lg opacity-70 mt-4">
🔴 Live from AIPCon 10
</div>

<div class="mt-8 text-sm opacity-50">
TBPN · Alex Karp · Peter Zaffino · Chad Wahlquist · Sam Berry · June 2026
</div>

<div class="mt-6 text-base italic opacity-60">
"How do we help you be more different, not more similar?"
</div>
