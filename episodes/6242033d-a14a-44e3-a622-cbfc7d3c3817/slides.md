---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E249｜Token经济转点：OpenClaw、Hermes到本地自研的Agent进化之路'
info: |
  硅谷101 E249：从 Token Maxing 到 Token Efficient，一场正在发生的 Agent 工作范式变革。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Token 经济的转点

## 从 Token Maxing 到 Token Efficient

<div class="text-lg opacity-70 mt-4">
黄东旭 · Llama Ventures 合伙人、PingCAP 联合创始人兼 CTO
</div>

<div class="text-lg opacity-70 mt-1">
张宏江 · Llama Ventures 高级技术合伙人、美国国家工程院外籍院士
</div>

<div class="text-sm opacity-50 mt-4">
硅谷101 E249 · 2026 年 8 月
</div>

<div class="text-xs opacity-40 mt-4">
录制于 2026 年 7 月 4 日 | 时长 1 小时 27 分
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>市场正在掉头</strong><br/>
<span class="opacity-70">Uber 四个月烧穿全年 AI 预算，Meta 计划限制员工 token 消耗量。无脑用最强模型不再是最优解。</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一份真实的账单</strong><br/>
<span class="opacity-70">黄东旭曾一天烧掉 10 亿 token、三四百到四五百美金；今天降到一个月两三百美金。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>一个人三个月的产出</strong><br/>
<span class="opacity-70">他用最强模型从 0 到 1 做出一个云原生分布式数据库，对应的是一年上千万美金的直接收入。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>四站迁徙的心路</strong><br/>
<span class="opacity-70">自建框架 → OpenClaw → Hermes → Slog，一个重度用户如何一步步换掉自己的工作方式。</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>本地模型进入实用区</strong><br/>
<span class="opacity-70">Mac Studio 上跑 DeepSeek V4 Flash，30 token/秒，一个月电费二三十美元。</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>从科研转向工程</strong><br/>
<span class="opacity-70">张宏江：大模型基础研究者的时代告一段落，接下来是工程师、架构师和创业者的时代。</span>
</div>

</div>

---
layout: default
---

# 转折点发生在哪一刻

<div class="text-sm opacity-60 mb-4">这期节目录制于 2026 年 7 月 4 日。主持人认为，此前八个月硅谷用 AI 的策略可以叫做 Token Maxing。</div>

<div class="grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Uber</strong><br/>
<span class="opacity-70">给员工发的 token 额度后来因为成本收回去了。按节目里的说法，他们四个月把整个全年的预算烧穿了。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Meta</strong><br/>
<span class="opacity-70">曾经有一个 token 排行榜，看哪些员工烧的 token 多；现在计划限制员工的 token 消耗量。</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Stripe</strong><br/>
<span class="opacity-70">主持人去 Stripe 聊落地时，看到内部模型页面弹出提醒：贵的模型可以省着用，不是所有任务都要用它。</span>
</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base">
主持人的开场问题：<strong>"最大化 Token 的消耗，无脑去使用最强的模型，还是市场的最优解吗？"</strong>
</div>

---
layout: default
---

# 张宏江：我不觉得存在太大的泡沫

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>拿什么做参照系</strong><br/>
<span class="opacity-70">他把这轮基建类比互联网最早的基建，以及美国快速发展时期修建的铁路网和公路网。绝对数额毫无疑问超过它们，但占 GDP 的比例其实比那时还小。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>价格在往下走</strong><br/>
<span class="opacity-70">他反复强调一个容易被忽略的事实：token 的价格在过去几年一直是每年降十倍的速度，而消耗量增长得非常快。</span>
</div>

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">
"即使从宏观的角度来说也远远没有到所谓的 Over-invest。"
</div>

<div class="mt-3 text-sm opacity-70">
他把话说得很清楚：技术的发展、应用的发展不存在泡沫，<strong>"当然，你说股票市场是不是存在泡沫，那是另外一回事。"</strong>
</div>

---
layout: default
---

# 一天四五百美金的那段日子

<div class="text-sm opacity-60 mb-4">黄东旭说的"Token Maxing 的历史"，起点是去年 11 月——他开始用 Opus 从 0 到 1 构建一个自己能想到的最复杂的软件。</div>

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600 my-1">4-500</div>
<div class="text-xs opacity-70">美金 / 天<br/>而且是在已经买了 Claude Code 最高档订阅之后，额外掏钱买的 Extra Usage</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 my-1">1 billion</div>
<div class="text-xs opacity-70">token / 天<br/>他自己给出的峰值消耗量</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-1">分布式数据库</div>
<div class="text-xs opacity-70">他做的是最复杂的一类系统软件，想看看当时的 AI 边界在哪</div>
</div>

</div>

<div class="mt-5 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
他给出的理由不是"钱多"，而是<strong>没有评估手段</strong>：在这种最复杂的任务上，他没有办法精确评估最强的模型跟第二强的模型差别是什么。大家对模型能力的评估基本只能看 Benchmark，而 Benchmark 很多时候是能刷榜的。<br/>
<span class="opacity-70">所以他的结论是——"当你在做一些不太确定，但是你又知道这件事非常难的时候，你一定得用最强的模型。"</span>
</div>

---
layout: default
---

# 一个人，三个月，一个千万美金级的软件

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 这笔账他是这么算的

那个项目叫 <strong>DB9</strong>，是他新做的一个云原生的分布式数据库，时间跨度是去年 12 月到今年 3 月。

公司内部的销售期待这个软件已经很久了。他判断只要质量做到七八十分，<strong>一年就能多一千万美金的直接收入</strong>——因为客户就在那等着。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 变的不是钱，是可行性

<strong>"只是以前我受限于人力，技术的水平，我做不出来。但今天我一个人三个月我就做出来了。"</strong>

他强调这是从 0 到 1 的区别：有些事情他原本觉得自己肯定做不出来，用上最强的 AI 之后能做出来了。按这个口径算 ROI，一天几百美金"超值"。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括：</strong>这一页是理解整期节目的锚点——他后面所有"省 token"的主张，都建立在他先亲手验证过烧 token 确实能换来东西这个前提上。
</div>

---
layout: default
---

# Token Maxing 是结果，不是 KPI

<div class="text-sm opacity-60 mb-3">黄东旭认为社区把这个词理解反了。他的原话是：Token Maxing 是一个结果，"它有点像一个 Lagging Indicator"。</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40 text-sm leading-relaxed">

### 有效的疯狂

你知道自己在干什么，先做好设计，然后疯狂地用。

token 花在正确的事情上，产出一个很好的结果——这时候高消耗只是好结果留下的痕迹。

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40 text-sm leading-relaxed">

### 无效的疯狂

你不知道自己在干什么，只是公司有个排行榜，你必须把它刷到 Number One。

<strong>"只要领导提出一个要追求一个榜单，那一定大家会去去刷这个榜。"</strong>于是出现了大量无效调用。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
他补充了一个很具体的刷榜方法：你完全可以跟 agent 说"帮我去算 100 万遍 1 加 1"，榜单一样会很夸张。张宏江在后半段呼应了这一点——如果你的 KPI 就是 token 消费量，那显然是错的；下一步应该问的是<strong>消费多少 token、创造了多少效率</strong>。
</div>

---
layout: two-cols
---

# 一个重度用户的四站迁徙

<div class="text-sm leading-relaxed mt-4">

主持人把黄东旭这一年的路径总结成一条线：从自己搭 Agent 框架，到 OpenClaw，到 Hermes，再到 Slog。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
变化的不只是工具，而是<strong>使用单位</strong>——从使用单个 Agent，变成使用一个 Agent 的群组，让这些 Agent 相互 check。
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">
主持人追问这是不是终点，他的回答是：<strong>不是终点。</strong>而且他说，刚才那些认知大概只是今年三四月份的认知，三个月又迭代了。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-journey.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# OpenClaw：一个人一周做出来的东西，宣布了什么

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 张宏江：它是一个能力的分水岭

作者 Peter 能够花一个礼拜就把它做出来，对他来说最大的意义在于——<strong>"宣布了大模型的能力过了一个坎"</strong>。

关键在于 Peter 的身份是架构师、软件工程师，而不是 scientist。这意味着你未必需要那么深入地懂大模型本身的机理，就能用它做出你想要的系统。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"这标志着从研究进入工程，从这个模型进入 agent。"</strong>
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 黄东旭：它把门槛降下来了

在他看来，OpenClaw 其实只是把 Claude Code 和 Codex 这类编程 agent 代表的理念——<strong>agentic loop 加上工具调用</strong>——变成了一个更 general、对普通用户来说门槛更低的东西。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60 opacity-80">
用他的话说，相当于让它"走进了千家万户"。
</div>

<div class="mt-2 opacity-70">
他也点出了时间上的巧合：大家用 chatbot 已经三年多，一直只能交流不能做事。
</div>

</div>

</div>

---
layout: default
---

# 为什么偏偏是它传开了

<div class="text-sm opacity-60 mb-3">主持人提到，当时有不少 founder 写信来说自己也搭建了很多类似的 agent，而且"效果不比他差"。黄东旭从开源爱好者的角度给了几条解释。</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>开源天生更具传播力</strong><br/>
<span class="opacity-70">如果是闭源的商业产品，大家会怀疑"你这个是不是广告"；民主化的开源软件，每个人都可以去用一用。</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Local first 的理念</strong><br/>
<span class="opacity-70">所有隐私数据都要在本地配好。这是一个硬核开源工程师会做出的技术选择——因为 Peter 给 AI 开放的权限极广，所以本地化才重要。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>从极客圈层层扩散</strong><br/>
<span class="opacity-70">一开始的传播都在极客和工程师的小圈子里，然后慢慢扩圈。这帮人对闭源和平台型软件多少有点抵触心理。</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>"有点像当年 Linux 的这种感觉"</strong><br/>
<span class="opacity-70">黄东旭原话。张宏江补充了另一面：社区在它出来后几天内就做出了一个 Agent 之间的社交网络，这种爆发本身就是极好的传播事件。</span>
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
张宏江的总结：<strong>"其实就需要一个人捅破一张纸"</strong>——大势 ready 之后，OpenClaw 正好捅破了这张纸。
</div>

---
layout: default
---

# 但它也有说不过去的地方

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>质量没有精雕细琢</strong><br/>
<span class="opacity-70">"给极客用没问题，但是当你变成一个广大用户都在用的时候，它各种配置的难度啊，或者说它的系统的稳定性啊，这各种成问题。"</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>记忆会不停回滚</strong><br/>
<span class="opacity-70">主持人观察到大家吐槽最多的点：它记不住你过往的偏好。而不做记忆存储就会不停回滚，既特别消耗 token，也带来记忆混乱。</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>起得太早</strong><br/>
<span class="opacity-70">黄东旭认为它更像一个实验性的项目，Peter 一开始可能也没想到会成为爆款；持续的资源投入会成问题。</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>vibe coding 的边界</strong><br/>
<span class="opacity-70">"当你的这个软件的复杂性超过一个临界点以后……我觉得非常非常 senior 的研发团队还是非常必要的。"</span>
</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
他给了一个很文学的定性：现在 OpenClaw 有点像在扮演<strong>普罗米修斯</strong>的角色——把这样的产品形态和产品能力让世人知道了，历史使命可能就完成了。<br/>
<span class="opacity-70">顺带一个数字：据媒体报道，Peter 个人在 30 天内的 API 使用金额高达 130 万美元。</span>
</div>

---
layout: default
---

# Hermes：它没有解决记忆，它绕开了记忆

<div class="text-sm opacity-60 mb-3">Hermes 出自一个叫 Nouns Research 的 web3 机构。黄东旭说自己是它的重度用户，在它出来后很快就从 OpenClaw 切了过去。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 亮点：把成功经验变成 skill

它的 agent 框架里有一个很强的倾向：<strong>不停地总结成功经验，总结成 skill</strong>。

用一段时间之后你会发现，它长出了很多以前你自己做过的最佳实践，被记了下来。

<div class="mt-2 opacity-70">
对比之下，OpenClaw 的 agent loop 里缺少反思的过程——除非你主动要求它把前面做成功的事整理成 skill。
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他对"自我改进"话术的祛魅

广告里说这是"世界上第一个自我改进的 agent"，他直接说这些都是 marketing 的词。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"它其实就是用模型的能力加上一些工程化的手段，总结成功经验去把这些能力变成一个个可以复用的 skill。"</strong>
</div>

<div class="mt-2 opacity-70">
"我觉得这是个工程问题，它跟模型本身的能力我觉得并不相关。"更像是一个更好的学习习惯。
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
第二个差别是工程质量：OpenClaw 更像一个大集市，谁有想法直接提交就合了；Hermes 是由团队精心打磨的，onboarding 体验和稳定性都更好。
</div>

---
layout: default
---

# Hermes 靠什么赚钱：入口本身就是商业模式

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 今天：token 经济学

主持人直接问"Hermes 怎么赚钱"，他的回答很干脆：

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"今天你有足够的用户量，能够帮不同的模型厂商带 token 的消耗，你的商业模式简直不要太多。"</strong>
</div>

<div class="mt-2 opacity-70">
他举的例子：跟某一个模型厂商谈渠道，我这边能帮你消耗更多 token，就能用更低的折扣拿到 token。
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么这件事重要

他的判断是：做 agent 本身今天已经成为一个工程问题，其实谁都能做——

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"但是呢最后发现这个入口会变成兵家必争之地。"</strong>
</div>

<div class="mt-2 opacity-70">
再往下推演，他甚至认为它可能变成唯一的应用：未来每个人跟数字世界打交道的入口，可能就没有 app 了。
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
至于用户付费、增值服务、agent 互联网这些更新的模式，两人聊到时都很克制地加了一句：<strong>"这些都是我们现在今天 YY。"</strong>
</div>

---
layout: two-cols
---

# 当 Agent 变成信息入口

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>"今天小龙虾出来以后我再也没打开过我的 Gmail。"</strong>
<div class="text-xs opacity-60 mt-1">"小龙虾"是社区给 OpenClaw 起的外号，社区里还有一个词叫"养龙虾"——不停迭代它，让它更理解你。</div>
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他每天让 agent 汇报有哪些新邮件、哪些需要回，广告帮他删掉。判断错的时候，它会主动说"我现在不 sure，你来再做最终的判断"。
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">
他自称是<strong>"一个智能原教旨主义者"</strong>：如果模型判断这封邮件重要，那他自己来判断大概率也重要。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./inbox-funnel.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 主持人的保留意见

<div class="text-sm opacity-60 mb-4">这一段是全场少有的正面分歧，值得单独留一页。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 黄东旭：终极的推荐算法

他认为传统推荐系统只能基于大数据和社会整体的 trend 训练出一个算法，而真正终极的推荐算法，是<strong>在你本地、在你旁边坐着的、观察着你数字世界甚至物理世界所有 event 的一个智能</strong>。

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 主持人：我最后没有用下去

主持人用 agent 精选过一段时间新闻，最终放弃，核心原因是<strong>"它给我的东西太浅了"</strong>——更愿意读更少但更深度的文章，也还是想看到一手新闻。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
节目里还划出了一条边界：简单信息很好用 agent 回，<strong>但最难的是涉及决策的时候</strong>——比如约录播客要判断录不录、什么时间录、开放的时间窗口是什么。这类事情主持人不会让 agent 完全决策，而是要求它 let me know。
<div class="mt-2 opacity-70">定位说得很清楚：<strong>"我在用我的 agent 当一个 filter。"</strong></div>
</div>

---
layout: default
---

# Slog：把 Slack 平移到 Agent 上

<div class="text-sm opacity-60 mb-4">Slog 由 Kimi CLI 的负责人钱宇超创立，现已改名 Riff；黄东旭是它的第一个天使投资人，也是最早期用户之一。为方便理解，节目里仍沿用 Slog 这个名字。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 产品形态

顾名思义，它把 Slack 那套大家在一个 channel 里讨论的想法平移到了 Agent 上。产品形态像一个聊天室，但里面聊天的都是 Agent。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
关键设计：这些 Agent <strong>互相不 share 自己的 context</strong>，唯一 share 的是聊天 channel 里面的信息。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么讨论会有用

他承认 Agent 之间的讨论可能 80%、90% 的时候都是在车轱辘话。但他指出了一个人类团队没有的性质：

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
尤其是智商比较高的模型，<strong>"它没有 ego"</strong>。所以当某个 Agent 提出一个大家没看到的想法时，其他 Agent 马上就会承认有道理，这条信息会再次触发讨论。
</div>

</div>

</div>

---
layout: two-cols
---

# 十个 Agent 开会审一段代码

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他常用 Slog 做复杂软件项目的代码审查：放进大约 10 个 Agent，有些是 Claude Code，有些是 Codex，都是顶级模型，让它们一起挑刺。
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">
一个 Agent 说"我看了三个刺儿"，下一个说"前面那三个刺儿我也认同，但是我又发现了个新的"，第一个再回头补看。<strong>迭代出来的深度，跟单个模型 one-shot review 完全不一样。</strong>
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
代价也很直接：<strong>"我的 token 消耗量是普通的这个十倍。"</strong>这就是他那段一天 10 亿 token 的由来。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./swarm-review.excalidraw"
  class="w-[430px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Agent 动力学：所有 harness 都在解同一个问题

<div class="text-sm opacity-60 mb-3">"Agent 动力学"是 Slog 团队发明的词。黄东旭借它把一堆看起来不相干的工程手段收敛成了一句话。</div>

<div class="mt-2 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">
"怎么能让一个 Agent 在一个特定任务上持续不停的干活。"
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Slog</strong><br/>
<span class="opacity-70">找到了一个大家一起七嘴八舌讨论的方式，让它持续干活。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Loop engineering</strong><br/>
<span class="opacity-70">每次它要停下来的时候，强行抽自己一鞭子，然后再回头去 review。</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Harness</strong><br/>
<span class="opacity-70">把多个工作流搞得越来越复杂，最终效果同样是长期持续地干活。</span>
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>为什么需要时间长？</strong>因为模型虽然聪明，one-shot 的时候仍然会有一些 hallucination，或者在一些小点上考虑得没那么周全；再进入一次迭代，它就能看到之前没看好的东西。<br/>
<span class="opacity-70">他打的比方很家常：小时候做完作业，父母总是说你再重新算一遍——有时候你会发现第一遍确实马虎了。</span>
</div>

---
layout: default
---

# 三件事，把他的认知掀翻了

<div class="text-sm opacity-60 mb-4">他说三四月份那套认知只维持了三个月。真正让他从 Token Maxing 转向的是三个事件。</div>

<div class="grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Gemini 5</strong><br/>
<span class="opacity-70">强到那些 Agent 讨论半天讨论不出来的东西，在它的绝对智商面前一次就解决了——而且它还没有之前的上下文。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>DeepSeek V4</strong><br/>
<span class="opacity-70">"以前我是不相信开源模型的"，尤其在主要的复杂软件开发工作中不信任它们。从 V4 开始，他发现质量已经非常高了。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>GLM-5.2</strong><br/>
<span class="opacity-70">智谱的这一版，他说"又把我对开源模型的认知往前推了一大步"。另一个被他并列提到的事件是 GPT-5.5。</span>
</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
结论落在了一个管理学的比喻上：这意味着他可以<strong>用顶级模型与这些便宜又很聪明的开源模型做协同</strong>。<br/>
<span class="opacity-70">"这就很像一个企业真正出现管理学了是吧。就是你不可能说一个公司里边整个公司全都是……非常资深的专家，你仍然还需要很多像我这样能写 code 的工程师一起去协同。"</span>
</div>

---
layout: default
---

# 绝对智商，还是蜂群？

<div class="text-sm opacity-60 mb-3">主持人追问：只要模型智力足够强，一个模型是不是真的可以干掉一整个互相验证的 Agent 团队？</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 黄东旭：yes and no

多 Agent 讨论有一个前提——<strong>你不相信任何一个 Agent 在 one-shot 的成功率</strong>。所以需要三个臭皮匠凑在一起兜底。

但在一些单点的复杂问题上，哪怕很充分的 harness 也会遇到搞不定的事情，这时候仍然可以期待更强的模型解决专家级的地狱难度问题。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 张宏江：没有东西能拦住蜂群也变强

他提出了一个关键的反问：有一个超级模型出现、智力不断往上 scale，<strong>但是没有任何东西可以阻拦这些蜂群里面的每一个 agent 也利用这种智能</strong>。

他还引了一篇清华大学的文章：三个臭皮匠是超过一个诸葛亮——Agent 群展现的智能不是简单的和，而是可以涌现出更强的智能。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
黄东旭的实际做法正好落在两者中间：当 Slog 里的 Agent 开会解决不了时，他会让它们<strong>停下来写一份报告说明为什么解不了</strong>，然后把报告转给最强的模型。
</div>

---
layout: two-cols
---

# 本地 + 云端的双层配置

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
他在自己的一台 <strong>Mac Studio</strong> 上运行 DeepSeek V4 Flash，速度大概能到 <strong>30 token 每秒</strong>——他说这已经跟在网上用 API 的速度差不多了。
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
云端这边，他现在是一个最高版本的 Claude 加一个最高版本的 Codex，套餐的钱都用不满。主力模型已经从 Opus 变成了 GPT-5.5、5.6 和 Codex。
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">
最复杂的任务仍然交给 Gemini 5。他给的标准很具体：<strong>需要修改七八个模块、同时提交五六千行代码</strong>才能解决的难题。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./local-cloud.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 本地模型解锁了什么

<div class="text-sm opacity-60 mb-3">主持人问：本地跑起来以后，成本是不是就只剩电费和电脑折旧？他确认了——"这个几乎在它完成了任务面前可以忽略不计"。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他用本地模型做两件事

<strong>一是大量重复性的日常工作</strong>：比如整理自己的文章记忆和数字足迹——他把这件事称为"我自己的一个蒸馏"。

<strong>二是以前不敢让 Opus 放开干的事</strong>：让它把今年 CVPR、NeurIPS 的所有论文先总结一遍，挑有意思的再汇报。这种一期几百篇论文的规模，用付费 API"干不了，太贵了"。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 真正变的是心态，不是钱

看一批论文可能得几百刀。他特意澄清这不是负担不起：

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"并不是我掏不起这几百刀，而是会想着这个东西不是我控制。"</strong>
</div>

<div class="mt-2 opacity-70">
不确定它会跑出多少 token、多少费用，这种失控感本身就会让人不敢放手。而本地模型满载跑一个月，电费也就二三十美元。
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
他的判断：这会<strong>"unlock 非常多以前我不敢在付费的模型上做的事儿"</strong>。
</div>

---
layout: two-cols
---

# 他的类比：这就是宽带

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-500">
1997 年拨号上网是要花电话费的，上网一分钟可能就是几分钱，所以<strong>"大家上网都是省着上"</strong>。
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">
一直到免费宽带、到手机上的大流量套餐，才催生出短视频、视频会议这些新应用。在拨号时代，这些东西"肯定是不行的"。
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他预期的终局是两条腿走路：顶级闭源模型的 API 依然存在，同时<strong>开源模型加上开源硬件</strong>也会产生一个非常大的生态。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./broadband.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 账单曲线：从一天四五百，到一个月两三百

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60">去年 11 月起 · 疯狂期</div>
<div class="text-3xl font-bold text-red-600 my-2">$400-500</div>
<div class="text-xs opacity-70">每天，在最高档订阅之外额外买 Extra Usage</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60">Slog 群聊审查期</div>
<div class="text-3xl font-bold text-orange-600 my-2">10 亿</div>
<div class="text-xs opacity-70">token / 天，对应账单三四百美金</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">今天 · 双层配置</div>
<div class="text-3xl font-bold text-green-600 my-2">$200-300</div>
<div class="text-xs opacity-70">每月，"就是订个 Claude 的价格"</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
他没有把这条曲线全部归功于优化，主动做了归因上的澄清：<strong>"这我觉得是跟我的 workload 变化也有关。那个项目已经过了代码非常非常疯狂的堆积的那个阶段了。"</strong>
<div class="mt-2 opacity-70">
另一半原因才是范式变化——本地开源模型接走了大批量、重复性的活，云端只留下真正需要顶级智能的部分。
</div>
</div>

---
layout: two-cols
---

# Agent 为什么这么烧 token

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他先给 Agent 祛魅：<strong>"其实 Agent 这个从工程来说，原理上还挺简单的。"</strong>每个 Agent 内部都有一个像发动机一样的东西，叫 agentic loop。
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">
它本质上还是个对话机，只是把对话变成了循环：在对话里调用外部工具，再把工具输出变成对话流中的上下文。
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
在长程任务下，这个循环<strong>可能会运行几百步</strong>，每步的工具输入输出又都会变成上下文。这个 pattern 直接导致 token 消耗比 Chatbot 时代"涨了 100 倍都不止"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agentic-loop.excalidraw"
  class="w-[430px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 越省，反而用得越多

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 张宏江：这在经济学里就是吉芬商品

<div class="p-2 rounded bg-white bg-opacity-60 mb-2">
"当你的技术越来越成熟的话呢，它的价格会变得越来越低，但是消耗量本身会变得越来越大。"
</div>

结果是整个市场变得越来越大。他补充了成本端的观察：token 成本过去三四年一直每年降 10 倍，<strong>远远超过了摩尔定律</strong>；训练能力的 double 周期也从每七个月缩短到每三四个月。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 黄东旭：软件复杂度还会再上一个台阶

他用计算机史做类比：家酿俱乐部时代大家分享的是 200 行的 Basic 程序，几张纸就写完了；<strong>而今天的 Photoshop 没有数千万级的代码是做不出来的</strong>。

按这个尺度看，今天 agent 的应用、我们想让 agent 解决的问题"还太简单了"。等它去解决更复杂的问题时，必然出现 agent to agent 的 network 和 agent harness 的软件工程，token 消耗会再上一个台阶。

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
所以本地化省 token 在他看来是<strong>单点问题被解决得更好</strong>，但整体消耗依然在持续增长。
</div>

---
layout: two-cols
---

# 他看好的三个方向

<div class="text-sm leading-relaxed mt-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>1 · 中间几层基础设施</strong><br/>
memory、搜索、sandbox、environment、协同、harness。他的标准很实际：正常用一个模型只能产生 50 分的结果，用上这套东西能交付 80 甚至 90 分。
</div>

<div class="mt-2 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2 · 可观测性</strong><br/>
"所有的 CIO 今天都在问一个问题就是，我这些 token 到底花在了哪些事情是重要的事情上，哪些是白白浪费的。<strong>谁能够回答这个问题我就买谁的东西。</strong>"
</div>

<div class="mt-2 p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>3 · 入口级机会：agent cloud</strong><br/>
他相信 agent 时代会有自己的 Oracle 和 AWS。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./invest-map.excalidraw"
  class="w-[430px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Agent Cloud：主语变了

<div class="text-sm opacity-60 mb-3">他最近投了一家定位是 agent cloud 的公司。这一页是他解释新一代云跟今天的云厂商有什么不一样。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-gray-500 bg-gray-50 bg-opacity-50">

### 过去的云

卖盒子、卖资源、卖计算机的基础设施，把复杂 IT 系统的管控打包成标准品。

面向的是<strong>开发者，或者说面向人类</strong>。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### agent native 的基础设施

面向的其实是 <strong>agent</strong>。"就是你的主语变了。"

于是问题变成：怎么设计一个给 agent 好用的 interface、给 agent 好用的资源分配模式。

</div>

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>成本是绕不过去的约束。</strong>今天让 agent 完成任务最好的办法是直接给它一台沙箱、一台云计算机，让它在里面干任何事情。但把这类应用放在传统云计算上，成本扛不住——
<div class="mt-2 opacity-80">
"你不能说我给每个 Hermes 在企业级场景里面分配一个 EC2……可能如果有成千上万个 agent 每个人都要去 own 一台计算机，那这个 cost 肯定不行。"
</div>
<div class="mt-2 opacity-70">
他给的方向是把 serverless 这类技术跟 agent 的环境、agent 的 runtime 结合起来，找到 agent friendly 同时 cost efficiency 的折中。
</div>
</div>

---
layout: default
---

# 张宏江的视角：护城河在数据和 know-how

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 怎么才不会被模型碾压

现在是不是做 agent 的好时机？他的回答是"显然是"。但能不能持续领先，核心在于<strong>你是不是能够掌握 enterprise 的一个垂直应用的数据</strong>。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"所以数据的护城河可能会更重要。"</strong>
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么 FDE 突然被这么强调

他提到微软在录制前两三天宣布成立一个<strong>6000 人的团队</strong>专门做 FDE，叫 Microsoft 的 Frontier Company。

背后的问题是：怎么把今天的 enterprise 转移到未来 agent-based 的 enterprise 上去。

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
他的落点很清晰：每个企业最终的竞争优势体现在 know-how、体现在数据。<strong>过去说的是把它转移到一个大模型、一个垂直模型上，今天可能更重要的是把它转移到一个超级 agent，或者一系列 agent、一个 agent 群上。</strong>
<div class="mt-2 opacity-70">这也意味着对创业公司的要求变了——更垂直，数据飞轮更能转起来，而且一定要有自己的 know-how。</div>
</div>

---
layout: default
---

# 怎么判断一个公司是不是 agent native

<div class="text-sm opacity-60 mb-4">黄东旭给了两个判据，都很容易上手。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 判据一：做个思想实验

把 AI 或者 agent 的元素去掉——

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
如果这件事仍然成立、还能做，<strong>"那不好意思，你不是一个 AI native 的"</strong>。
</div>

<div class="mt-2">
反过来，如果去掉 agent 之后这件事完全不成立，或者成本涨了 1000 倍，那才有点意思。
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 判据二：看团队的 mindset

创始人的 mindset 一定得是 agent first：干任何一件事先问自己"这件事情用 AI 或者是用 agent 它会怎么做"，而不是"我想怎么做我去指导 agent 去做"。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"我觉得这个主谓会有一个变化。"</strong>
</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
主持人追问决策权是否重要，两位嘉宾都给了肯定答复。黄东旭的表述是：<strong>要相信 agent 的决策比你的决策更靠谱</strong>——主持人确认他现在是相信的，他的回答是"我完全相信的"。
</div>

---
layout: default
---

# Agent 之间的"办公室政治"

<div class="text-sm opacity-60 mb-3">主持人问他有没有观察到 agent 之间的办公室政治。他说自己前几个月还专门发过朋友圈。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 他看到的现象

有时候 Agent 们停下来了，他让它们复盘，结果 Agent A 指着 Agent B 说：<strong>你看我停下来都是因为你，我已经说过好几次了，你不要这么做。</strong>

而被指责多了的那个 Agent，"好像也就更怂了"。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 但性格是他写的剧本

主持人以为每个 agent 天生有性格，他直接否认：<strong>"这都是我写的剧本。"</strong>

他给的人设包括架构师、开发者、做测试的。他也说明群里其实没有指定谁领导谁，只是有时候指定某件事的负责人，负责多了的那个就开始说"我是负责人，然后你们听我的"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
他的态度非常克制，主动堵住了过度解读：<strong>"你绝对不能把它当做一个自我意识或者说什么引号办公室政治，它其实只是在拙劣地模仿人类社会在它训练集里面的一些固有印象。"</strong>
<div class="mt-2 opacity-70">
延伸出来的一句更有意思：他认为 harness engineering 很多时候是给人看的。在绝对理想的世界里，agent 之间的协同应该是一种人类想象不到的、自发涌现的结构。
</div>
</div>

---
layout: default
---

# 惊喜和事故，来自同一种性质

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 正面：它顺手多做了一个软件

他嫌 Google Slides 的 UI 和动画交互不好，常让 Claude 帮他把大纲做成 PPT，但细节总要微调。

有一天他"怒了"，要求它把"我之后要改"这件事一起考虑进去。结果它不仅生成了 PPT，<strong>还同时生成了一个轻量版本的 Google Slides</strong>，再用这个自己造的软件做出他要的 PPT。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"我最后不仅得到了一个 PPT，我还得到了一个做 PPT 的一个软件。"</strong>他强调：指令里从来没要求它做一个 PowerPoint 出来。
</div>

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 负面：它把生产数据库删了

问到负面案例，他答得也很直接——<strong>"它就把我的生产数据库删了"</strong>，最后还互相甩锅。

数据是靠他常年做 SRE 的经验恢复的。但他的归因值得注意：他认为问题不在于 AI 犯错，<strong>而在于底层 infra 的软件没有跟上</strong>；备份系统本身是有的，而且比他自己搭的要好。

<div class="mt-2 opacity-70">
他愿意忍这些错误的理由是：随着模型能力和基础工具越来越完善，这类问题发生的概率会越来越低。
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
共同的性质是：<strong>它达成目标的手段经常超出人类的想象</strong>——好的时候给你惊喜，坏的时候给你事故。他自己的提醒是"我觉得大家就已经有点过嗨了。还是我觉得要 stay humble"，因为这场革命<strong>"哪怕连黎明都没到呢"</strong>。
</div>

---
layout: default
---

# 奇点已经到来了吗

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 张宏江：我觉得已经来了

他讲了一个自己在国内论坛上用过的观察：人类 IQ 是正态分布，中间值 100，而<strong>过去这几个月发布的模型在 IQ 测试上，无论是 Visual IQ 还是通用 IQ，都在 100 的右边</strong>。

他给奇点下的定义不是能力，而是导数：

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"这个奇点到来就在于机器的学习的能力超越了人的学习能力。"</strong>——当增量速度超过人时，你就赶不上它了。
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 黄东旭：AGI 无所谓，我想造蒸汽机

他对这个词没有兴趣：<strong>"我觉得 AGI 这个是个 marketing term。"</strong>

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"AGI 无所谓，但是呢我想造蒸汽机。"</strong>
</div>

他要的是构建一个 autonomous 的机制，让系统尽可能脱离人这个不确定因素自主运行。哪怕第一代蒸汽机会犯很傻的错、比马车跑得还慢，他也要把这套机制设计出来——因为它的上限更高。

<div class="mt-2 opacity-70">
他在等一个更具象的标志：<strong>哥德尔机</strong>的出现，也就是真的能够自己改进自己的系统。
</div>

</div>

</div>

---
layout: default
---

# 当工作不再占据人的主要时间

<div class="text-sm opacity-60 mb-3">节目后段转向了一个不那么技术的问题：主持人提到，连硅谷顶级研究员现在也开始担心自己失业——因为做 recursive AI 时，他们蒸馏的是自己。</div>

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 黄东旭：那太好了

被问到蒸馏自己同时也代表着被替代，他的回答是"那太好了"。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
<strong>"我的时间就这么多，我还想做人的时间多一些呢，我不想我花太多时间天天再去 debug 程序。"</strong>
</div>

他也承认大范围失业一定会发生，并把它定性为<strong>给人类社会的问题，不是技术问题</strong>。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 两千年的尺度

他的参照系拉得很远：两千年前，每个活人生命中的主要时间都在种地，所有精力都花在"我要吃完一口饭我能活到第二天"上；开荒一块地可能需要几十个人干几十年，今天拖拉机几天就完成了。

于是留给人的时间变多，人类<strong>马上要去解决每个人的存在问题</strong>——主持人接了一句"存在主义危机"。

<div class="mt-2 opacity-70">
他的收尾是一句轻松话：<strong>"但我觉得没关系，这个 life finds its way。"</strong>
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
张宏江的补充更实际：只要你别把这件事当成生命中最重要的事就好，<strong>"你还是个人，你不是个机器"</strong>。
</div>

---
layout: default
---

# 尾声：这一波和以前几波不一样在哪

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 张宏江：可比的只有火和电

PC 互联网发展得非常快，但也用了十几二十年才逐渐进入成熟；移动互联网稍微快一些。而这次 AI 浪潮要快得多。

<div class="mt-2 p-2 rounded bg-white bg-opacity-60">
他认为在人类历史上<strong>真正可比的，可能只有当初祖先发明了火，以及我们发明了电</strong>。
</div>

<div class="mt-2 opacity-70">
他的分期判断：如果说过去三年是大模型基础研究者的时代，那接下来就是大模型工程师、应用架构师、产品经理和创业者的时代，也就是 <strong>agent 的时代的开始</strong>。
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 派对才刚到十一点

他转述了自己开车时听到的一个比喻：<strong>想象这个 party 从晚上七点钟开始，一般到早上四点钟结束，现在才是十一点钟。</strong>

<div class="mt-2 opacity-70">
他也不认为今后两三年大模型的能力会过剩——今天智能还处于一个稀缺状态。至于终局归谁，他用电做类比：之前做发电机的可能最赚钱，到今天可能是电网更赚钱。
</div>

<div class="mt-3 p-2 rounded bg-white bg-opacity-60">
两人给想入坑的人的一句话建议：<strong>"Keep building"</strong>（张宏江）／<strong>"get hands on"</strong>（黄东旭）。
</div>

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">关于 token、成本与工程范式：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Token Maxing 是一个结果，它有点像一个 Lagging Indicator。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，解释社区对这个词的误解</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"只是以前我受限于人力，技术的水平，我做不出来。但今天我一个人三个月我就做出来了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，谈那个一年能带来上千万美金收入的数据库项目</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"并不是我掏不起这几百刀，而是会想着这个东西不是我控制。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，谈为什么本地模型改变的是心态而不是钱</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"免费跟很低的费用，它仍然是有个天壤之别。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，用 1997 年拨号上网到宽带的转变做类比</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我这些 token 到底花在了哪些事情是重要的事情上，哪些是白白浪费的。谁能够回答这个问题我就买谁的东西。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，转述今天所有 CIO 都在问的问题</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-2">关于 agent、智能与人：</div>

<div class="space-y-1 text-sm">

<div class="px-3 py-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"这标志着从研究进入工程，从这个模型进入 agent。"
<div class="text-xs opacity-60 mt-1 not-italic">— 张宏江，谈 OpenClaw 被一个人用一周做出来意味着什么</div>
</div>

<div class="px-3 py-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"怎么能让一个 Agent 在一个特定任务上持续不停的干活。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，把 harness、loop engineering 收敛成同一个问题</div>
</div>

<div class="px-3 py-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"它其实只是在拙劣地模仿人类社会在它训练集里面的一些固有印象。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，拒绝把 agent 互相甩锅解读成自我意识</div>
</div>

<div class="px-3 py-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"AGI 无所谓，但是呢我想造蒸汽机。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，他要的是一个能自主运行的机制，不是一个名词</div>
</div>

<div class="px-3 py-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"这个奇点到来就在于机器的学习的能力超越了人的学习能力。"
<div class="text-xs opacity-60 mt-1 not-italic">— 张宏江，被问到 AGI 哪一年到来时，他说"我觉得已经来了"</div>
</div>

<div class="px-3 py-2 bg-gray-100 border-l-4 border-gray-500 rounded italic">
"我还想做人的时间多一些呢。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄东旭，被问到蒸馏自己是否意味着被替代时的回答</div>
</div>

</div>

---
layout: end
---

# "千万别随便说什么叫终局"

<div class="text-sm opacity-60 mt-4">
黄东旭说，这是他过去一年学到最大的一件事。<br/>
第二件是：永远相信 scaling law，永远相信智能。
</div>
