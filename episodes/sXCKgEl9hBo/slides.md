---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'A Motorcycle for the Mind - Naval Podcast'
info: |
  Naval Podcast · Naval Ravikant & Babak Nivi · 2026-02-19 · 52 min
  Naval 把过去一年关于 AI 的推文摊开来逐条解释:
  vibe coding、英语成为编程语言、智能的真正测试、以及为什么 AI 是 motorcycle 而不是 autopilot.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<style>
.deck-kicker { color: #64748b; font-size: 0.92rem; }
.big { font-size: 2.6rem; line-height: 1.1; font-weight: 800; color: #0f172a; }
.muted { color: #64748b; }
.chip { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 999px; padding: 0.25rem 0.7rem; font-size: 0.78rem; color: #334155; background: #f8fafc; }
.tiny { font-size: 0.78rem; color: #64748b; line-height: 1.5; }
.quote-block { font-family: "Source Serif Pro", "Georgia", serif; font-style: italic; }
.label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; font-weight: 600; }
</style>

# A Motorcycle<br/>for the Mind

<div class="deck-kicker mt-6">Naval Podcast · Naval Ravikant & Babak Nivi · 2026-02-19 · 52 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">vibe coding</span>
  <span class="chip">English as programming</span>
  <span class="chip">no demand for average</span>
  <span class="chip">extreme agency</span>
  <span class="chip">live in the future</span>
  <span class="chip">action over anxiety</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Naval 和 Nivi 在散步中录的一期, 把他过去一年关于 AI 的几条 tweet 一条一条拆开. 看似零散, 但底色统一: AI 是工具不是替代, 智能在战场上才能被衡量, 焦虑的解药永远是行动.
</div>

---

# 这期的六条主线

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① Vibe coding</div>
<div class="text-xs mt-1 text-slate-700">说英语就能写应用, app 数量将海啸般爆炸.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② 训练模型才是新编程</div>
<div class="text-xs mt-1 text-slate-700">AI 研究员是新一代程序员, 在数据池里搜索程序.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">③ 没有平庸的需求</div>
<div class="text-xs mt-1 text-slate-700">头部赢者通吃, 长尾百花齐放, 中间被炸掉.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">④ 智能的唯一测试</div>
<div class="text-xs mt-1 text-slate-700">能不能从生活里得到你想要的——AI 直接挂.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">⑤ 早期采用者的优势</div>
<div class="text-xs mt-1 text-slate-700">想投资未来, 就得活在未来.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ 摩托车而非自动驾驶</div>
<div class="text-xs mt-1 text-slate-700">AI 速度更快, 但还是要有人骑.</div>
</div>

</div>

<div class="mt-6 tiny">
"Podcast recording is so stilted." 这期 Naval 故意在散步中录, 想换种节奏. 大量 tweet 当锚点, 但解释远比 tweet 厚.
</div>

---

# Vibe Coding 是新的产品管理

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">Naval 的 tweet (2026-02-03)</div>
<div class="quote-block text-lg mt-3 p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
"Vibe coding is the new product management. Training and tuning models is the new coding."
</div>

<div class="mt-5 text-sm leading-relaxed">
Naval 把过去一年最显著的转折点归到 <strong>Claude Code</strong> 上——一个 "coding engine in it" 的特定模型, 把端到端写应用降到了说英语的门槛.
</div>
</div>

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">从指令式 PM 到对话式 PM</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>不再 "telling them what to do"——告诉一群工程师做什么</li>
<li>而是 <strong>telling a computer what to do</strong></li>
<li>"The computer is tireless. The computer is egoless."</li>
<li>"It'll take feedback without getting offended."</li>
<li>可以同时 spin up 多个实例, 24/7 跑</li>
</ul>
</div>

</div>

<div class="mt-5 tiny">
关键词不是 "更快写代码", 而是 <strong>从品味 / 意见 / 想法直接走到产品</strong>. PM 这个角色被吸进了开发流程.
</div>

---
layout: two-cols
---

# 应用海啸: 头 + 长尾

<div class="text-sm leading-relaxed mt-4">

Naval 的预测很直接:

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
"We should expect to see a <strong>tsunami of applications</strong>."
</div>

<div class="mt-4 label">最后会变成什么形状?</div>

<ul class="mt-3 text-sm leading-7">
<li><strong>头部</strong>: "the best application for a given use case still tends to win the entire category."</li>
<li><strong>长尾</strong>: "a lot more niches will get filled" —— 月相追踪、特定怀旧游戏、个人架构图……</li>
<li><strong>中间</strong>: "5, 10, 20-person software companies that were filling a niche... can now be either vibe coded away."</li>
</ul>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./head-tail.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 类比: 互联网的形状会重演

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">书店</div>
<div class="text-sm mt-2 text-slate-800">
"You replaced a bunch of bookstores with one super bookstore and a zillion long-tail sellers."
</div>
<div class="tiny mt-2">→ Amazon</div>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">电视 / 广播</div>
<div class="text-sm mt-2 text-slate-800">
"YouTube replaced a bunch of medium-sized TV stations and broadcast networks with one giant aggregator."
</div>
<div class="tiny mt-2">→ YouTube + Netflix + 创作者长尾</div>
</div>

<div class="p-4 bg-orange-50 border border-orange-200 rounded">
<div class="label text-orange-700">应用</div>
<div class="text-sm mt-2 text-slate-800">
App Store 模型会更极端——一两个巨型 store 帮你过滤 "AI slop apps", 头部被几个超级 app 吃掉, 长尾全是 niche.
</div>
</div>

</div>

<div class="mt-7 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>底层规律</strong>: "the real power and wealth—super wealth—goes to the aggregator." 但能量同时也散到了长尾.
</div>

---

# 训练模型才是新的编程

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">经典编程</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>"specify in great detail every step, every action"</li>
<li>"highly structured language" 表达精确意图</li>
<li>"The computer can only do what you tell it to do."</li>
<li>本质: 一个 "incredibly fancy, very complicated, meticulously-programmed calculator"</li>
</ul>
</div>

<div class="p-5 bg-purple-50 border border-purple-300 rounded">
<div class="label text-purple-700">AI 时代的 "编程"</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>定义结构, 调超参 (parameters / learning rate / batch size)</li>
<li>把人类产生的巨量数据 "tokenize" 后倒进去</li>
<li>"almost like a giant pachinko machine"——系统在搜程序</li>
<li>不同领域有不同模型: biology, programming, sensors, CAD, 3D, video……</li>
</ul>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
"They've essentially taken over programming." —— 所以 AI 研究员的薪水 "gargantuan amounts" 不是泡沫, 是新一代程序员的市场价.
</div>

---

# 两种程序, 两种 "对"

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="text-sm font-bold text-blue-900">需要精确答案</div>
<div class="text-sm mt-3 text-slate-700">
计算、记账、协议解析、数据库——"specific answers to specific questions—things you can rely on and repeat over and over again". 这种地方传统程序仍然无敌.
</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="text-sm font-bold text-green-900">允许"差不多对"</div>
<div class="text-sm mt-3 text-slate-700">
诗歌、小说、画一只猫、网页搜索——"there are many right answers...there are many variations of right answers". AI 在这里碾压传统程序.
</div>
</div>

</div>

<div class="mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold text-orange-900">Naval 的拆分</div>
<div class="text-sm mt-2 text-slate-700">
当 "fuzzy answers are acceptable", AI 找出来的程序更适配问题, 因为它不需要被人类显式预先定义.
</div>
</div>

<div class="mt-5 tiny">
这条边界很重要——它解释了为什么 AI 看起来在某些任务上像神, 在另一些任务上像幼儿园小朋友.
</div>

---

# 传统软件工程死了吗? 没有.

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">两条 moat 仍然牢固</div>

<div class="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-900">① 知道底下在跑什么</div>
<div class="text-xs mt-2 text-slate-700">"All abstractions are leaky." Claude Code 也会出 bug, 出次优架构. 懂底层的人能 "plug the leaks as they occur".</div>
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-900">② 分布外问题</div>
<div class="text-xs mt-2 text-slate-700">高性能代码、新架构、新问题——"out of their data distribution" 的事 AI 还得手写.</div>
</div>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-800">熟悉 vs 陌生</div>
<div class="mt-3 text-sm leading-relaxed text-slate-800">
"If they need to do a binary sort or reverse a linked list, they've seen countless examples of that, so they're extremely good at it."
</div>
<div class="mt-4 text-sm leading-relaxed text-slate-800">
但当问题真的新——"a good engineer operating at the edge of knowledge of the field is going to be able to <strong>run circles around vibe coders</strong>".
</div>
</div>

</div>

---
layout: two-cols
---

# 5 个圆 vs 50 亿个圆

<div class="text-sm leading-relaxed mt-4">

Naval 用了一个非常具体的画面解释为什么 AI 真的 "学" 而不是只 "记":

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
"If I show an AI <strong>five circles</strong>, it can just memorize... the radii, and the thicknesses."
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
"If I show it 50,000 circles or <strong>5 billion circles</strong> and I give it a very small amount of parameter weights..."
</div>

<div class="mt-3 text-sm leading-relaxed">
"...it's going to be much better off figuring out <strong>pi</strong> and how to draw a circle and what thickness means, and forming an <strong>algorithmic representation</strong>."
</div>

<div class="mt-4 tiny">
小内存 + 大数据 = 被迫学高阶概念. 这是模型从 "imitator" 走向 "compressor of reality" 的引擎.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./circles.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 没有对平庸的需求

<div class="quote-block text-2xl mt-6 p-6 bg-slate-50 border-l-4 border-slate-700 rounded">
"There is no demand for average."
</div>

<div class="grid grid-cols-2 gap-6 mt-7">

<div class="p-5 bg-red-50 border border-red-200 rounded">
<div class="label text-red-700">坏消息</div>
<div class="text-sm mt-3 text-slate-800">
"The app that is better will win essentially a hundred percent of the market."
</div>
<div class="text-sm mt-3 text-slate-700 italic">
"First place gets a Cadillac Eldorado, second place gets a set of steak knives, and third place you're fired." (Naval 引 Glengarry Glen Ross)
</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">好消息</div>
<div class="text-sm mt-3 text-slate-800">
"the set of things you can be best at is <strong>infinite</strong>. You can always find some niche that is perfect for you."
</div>
<div class="text-sm mt-3 text-slate-700 italic">
"Become the best in the world at what you do. Keep redefining what you do until this is true." (Naval 自己的旧 tweet)
</div>
</div>

</div>

---

# 英语是最热门的新编程语言

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">Naval 的个人时间线</div>

<div class="mt-3 text-sm leading-relaxed text-slate-800">
"When I was in school, I was programming mostly in C."
</div>
<div class="mt-2 text-sm leading-relaxed text-slate-800">
"And then C++ came along and it wasn't any easier."
</div>
<div class="mt-2 text-sm leading-relaxed text-slate-800">
"And then Python came along and I was like, 'Wow, this is almost like writing in English.' I couldn't have been more wrong."
</div>
<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm font-semibold">
"Now you can <strong>literally</strong> program in English."
</div>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-800">Naval 引 Karpathy</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"English is the hottest new programming language."
</div>

<div class="mt-5 tiny">
Naval 自己加的注解: "for someone like me who is relatively articulate with English and also has a structured mind, and I know how computer architectures work... then I can actually very precisely specify what I want just through structured English."
</div>
</div>

</div>

---
layout: two-cols
---

# 抽象栈又叠了一层

<div class="text-sm leading-relaxed mt-4">

Nivi 的框架: 编程史就是一直往上叠抽象层, 每一层让你不必再看下面那层.

<div class="mt-3 text-sm">
晶体管 → 芯片 → 汇编 → C → Python → 库生态 → <strong>英语 (vibe coding)</strong>
</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>但 Naval 的修正</strong>: 这不是小步, 是 emergent property. "This is a big leap."
</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>仍然有 moat</strong>: "it always helps to have knowledge one layer below because you're getting closer to reality."
</div>

<div class="mt-4 tiny">
程序员 → 懂硬件; 硬件工程师 → 懂物理; 物理学家 → 哲学家. 多懂一层永远是 advantage.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 别去学 AI 的奇技淫巧

<div class="quote-block text-xl mt-5 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
"I just sit there stupidly talking to the computer because I know that this thing is now at the stage where it is going to <strong>adapt to me faster than I can adapt to it</strong>."
</div>

<div class="grid grid-cols-2 gap-5 mt-7">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-sm font-bold text-red-900">不要学</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>奇怪的 prompt 模板</li>
<li>各种 harness 设置</li>
<li>"this neat trick with the bot"</li>
</ul>
<div class="tiny mt-2 italic">"longevity is measured in weeks, perhaps months at best, not in years."</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-900">什么时候才学</div>
<div class="text-xs mt-2 text-slate-700">
"if you're building an app right now that needs to be at the bleeding edge"——竞争性场景, 每一点优势都要榨.
</div>
</div>

</div>

<div class="mt-6 tiny">
Nivi 补一刀: 他从来不做 prompt engineering, "Boomer queries" 一直能用. 因为 <strong>"AI is adapting to us faster than we are adapting to it."</strong>
</div>

---

# 聪明人的"懒"是优化对的东西

<div class="quote-block text-xl mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
"Like a lot of smart people, you're <strong>very lazy</strong>. And I mean that as a compliment."
</div>

<div class="grid grid-cols-2 gap-6 mt-7">

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">优化错的东西</div>
<div class="text-sm mt-3 text-slate-700">
关心电脑的效率、电子的效率、电路里电流的效率——
</div>
<div class="text-sm mt-3 text-slate-700 italic">
"to save tiny bits of energy in the environment."
</div>
</div>

<div class="p-5 bg-orange-50 border border-orange-300 rounded">
<div class="label text-orange-700">优化对的东西</div>
<div class="text-sm mt-3 text-slate-800">
关心 <strong>wetware</strong> 的效率——你这个 "biology that's super expensive". 你才是稀缺资源.
</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"They're inherently downgrading their own importance in the universe, or rather revealing what they think of themselves." —— 把自己的时间标得很贱, 是对自己价值的隐性自评.
</div>

---

# 程序员替代其他人, 不是被替代

<div class="quote-block text-xl mt-5 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
"AI won't replace programmers, but rather make it easier for programmers to <strong>replace everyone else</strong>." —— Naval, 一年多前的 tweet
</div>

<div class="grid grid-cols-3 gap-3 mt-7">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-900">10x 不够用了</div>
<div class="text-xs mt-2 text-slate-700">"There are 100x programmers out there. There are <strong>1000x programmers</strong> out there."</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-900">分布是 super-normal</div>
<div class="text-xs mt-2 text-slate-700">"Intelligence is not normally distributed. Leverage is not normally distributed."</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-sm font-bold text-red-900">挑对题就是一切</div>
<div class="text-xs mt-2 text-slate-700">"others who pick the wrong thing to work on, and their work has zero value."</div>
</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
最大风险: "there are programmers now who are going to come up with ideas that can <strong>replace entire industries</strong>." 杠杆放大到极限.
</div>

---

# 每个人在某种意义上都是巫师

<div class="quote-block text-2xl mt-8 p-6 text-center bg-purple-50 border-l-4 border-purple-500 rounded">
"We are entering an era where <strong>every human, in a sense, is a spellcaster</strong>."
</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">巫师 = 程序员</div>
<div class="text-sm mt-3 text-slate-800">
"If you think of programmers as like these wizards who have memorized arcane commands..."
</div>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-800">魔杖 = AI</div>
<div class="text-sm mt-3 text-slate-800">
"...you can think of AI as a magic wand that's been handed to every person."
</div>
</div>

</div>

<div class="mt-6 text-center text-sm italic text-slate-600">
"They will be able to make anything they want, obstructed only by their creativity, limited only by their imagination."
</div>

---

# 没有创业者会担心 AI 抢工作

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">Naval 的 tweet (2025-02-09)</div>
<div class="quote-block text-lg mt-3 p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
"No entrepreneur is worried about an AI taking their job."
</div>

<div class="mt-5 text-sm leading-relaxed">
"That one's <strong>glib in multiple ways</strong>. First of all, being an entrepreneur isn't a job. It's literally the opposite of a job."
</div>

<div class="mt-3 text-sm leading-relaxed">
"They don't even have a job to steal. They have a <strong>product to build</strong>. They have a market to serve. They have a customer to support."
</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">为什么 AI 不能做创业者</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>没有 own desires</li>
<li>没有 survival instinct</li>
<li>没有 mortal fear of being turned off</li>
<li>没有 own replication</li>
<li>因此没有 own agency</li>
</ul>
<div class="mt-4 tiny">
"And because they don't have their own agency, they cannot do the entrepreneur's job."
</div>
</div>

</div>

---

# Extreme Agency 是分水岭

<div class="quote-block text-xl mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
"The key thing that distinguishes entrepreneurs from everybody else right now in the economy is entrepreneurs have <strong>extreme agency</strong>."
</div>

<div class="grid grid-cols-4 gap-3 mt-7">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-900">Entrepreneur</div>
<div class="text-xs mt-2 text-slate-700">在未知领域做产品, 自我驱动.</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-900">Explorer</div>
<div class="text-xs mt-2 text-slate-700">"landing on Mars or you're sailing a ship to an unknown land."</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-sm font-bold text-purple-900">Scientist</div>
<div class="text-xs mt-2 text-slate-700">"exploring an unknown domain"——没有人告诉你下一步该试什么.</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-sm font-bold text-yellow-900">True Artist</div>
<div class="text-xs mt-2 text-slate-700">"trying to create something that does not exist and has never existed."</div>
</div>

</div>

<div class="mt-6 p-4 bg-slate-50 border-l-4 border-slate-500 rounded text-sm">
共同点: 没有 "slot" 给你填. AI 出现只会 <strong>level you up</strong>——"now it's the AI plus you. The AI is the springboard from which you can jump to a further height."
</div>

---

# 目标本来就不是有份工作

<div class="quote-block text-2xl mt-7 p-6 text-center bg-blue-50 border-l-4 border-blue-500 rounded">
"<strong>The goal here is not to have a job.</strong>"
</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-red-50 border border-red-200 rounded">
<div class="label text-red-700">不是为了…</div>
<div class="text-sm mt-3 text-slate-700">
"to have to get up at nine in the morning and come back at 7 PM exhausted, doing soulless work for somebody else."
</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">而是为了…</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>"material needs solvable by robots"</li>
<li>"intellectual capabilities leveraged through computers"</li>
<li>"<strong>for anybody to be able to create</strong>"</li>
</ul>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
摄影把肖像画师挤掉了, 但社会更好——"it would be very hard to argue that society is worse off because of photography." AI 也一样.
</div>

---

# AI 不是活的——它缺什么

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">它擅长的</div>
<ul class="mt-2 text-sm leading-7 text-slate-800">
<li>"extremely good imitators"</li>
<li>压缩巨量数据 → 学到高层抽象</li>
<li>缺口处用 RLHF / tool use / 嵌入传统程序补</li>
<li>有 "entire library of all of human code ever written" 当后盾</li>
</ul>
</div>

<div class="p-5 bg-red-50 border border-red-300 rounded">
<div class="label text-red-700">它缺的</div>
<ul class="mt-2 text-sm leading-7 text-slate-800">
<li><strong>Single-shot learning</strong>——人看一个例子就会</li>
<li>"Raw creativity... connect anything to anything"</li>
<li>跨大领域的跳跃, "ideas that came out of left field"</li>
<li><strong>Embodiment</strong>——人 "operate in physics—in nature"</li>
<li>语言只覆盖 "a very narrow subset of reality"</li>
</ul>
</div>

</div>

<div class="mt-6 tiny">
Naval 的总结: AI 像所有机器一样, 在某些任务上 "完全碾压人", 在另一些任务上 "completely incompetent". 边界很 jagged, 不是一条线.
</div>

---

# 智能的唯一真正测试

<div class="quote-block text-xl mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
"<strong>The only true test of intelligence is if you get what you want out of life.</strong>"
</div>

<div class="grid grid-cols-2 gap-6 mt-7">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">为什么这条触怒人</div>
<div class="text-sm mt-3 text-slate-700">
"They go to school, they get their master's degrees, they think they're super smart. And then they don't have great lives."
</div>
<div class="text-sm mt-3 text-slate-700">
关系糟、不健康、不快乐——但他们觉得自己 "聪明", 分裂感很强.
</div>
</div>

<div class="p-5 bg-orange-50 border border-orange-300 rounded">
<div class="label text-orange-700">为什么 AI 即刻挂掉</div>
<div class="text-sm mt-3 text-slate-700">
"An AI doesn't want anything out of life. The AI doesn't even <strong>have</strong> a life."
</div>
<div class="text-sm mt-3 text-slate-700">
即便人替它定义目标——它的 "intelligence" 就被外包到那个目标上, 不属于 AI 自身.
</div>
</div>

</div>

<div class="mt-5 tiny">
G factor 的意义就在于 predictive power. Naval 把这条原则推到底: 测量智能, 看活法.
</div>

---
layout: two-cols
---

# 智能在战场上才能被衡量

<div class="text-sm leading-relaxed mt-4">

Naval 的核心论点: 你想要的大多数东西都是 <strong>对抗性</strong>或 <strong>零和</strong>的.

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
约会: "you're competing with all the other people who are out there seducing girls or trying to get husbands."
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
炒股: "That AI is trading against other humans and other trading bots."
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
出名: "now it's competing against all the other AIs."
</div>

<div class="mt-4 text-sm leading-relaxed">
结果: AI 之间互相抵消, "all the remaining gain will go to the person with the human edge, with the increased creativity."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./arena.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Cyrano de Bergerac 的耳机

<div class="quote-block text-lg mt-5 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
"Imagine that every guy had a little earpiece where an AI was whispering to him—a <strong>Cyrano de Bergerac</strong> kind of earpiece—telling him what to say on the date."
</div>

<div class="mt-5 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-base">
"Well, then every woman would have an earpiece telling her to <strong>ignore what he said</strong>, or what part was AI-generated and what part was real."
</div>

<div class="mt-7 p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-900">所以唯一的 alpha 来自不均匀</div>
<div class="text-sm mt-2 text-slate-700">
"the technology is not completely evenly distributed. Most people still aren't using AI, or aren't using it properly, or aren't using it all the way to the max."
</div>
</div>

---
layout: two-cols
---

# 早期采用者的优势

<div class="text-sm leading-relaxed mt-4">

<div class="quote-block p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-base">
"To <strong>invest in the future</strong>, you want to <strong>live in the future</strong>."
</div>

<div class="mt-4 text-sm">
Naval 的具体做法: "be an avid consumer of technology". 它会给你 "the best insight on how to use it."
</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
"<strong>Most people hate technology.</strong> They're scared of it. It's intimidating."
</div>

<div class="mt-4 text-sm">
而新一代 chatbot 改变了这个——"you can ask them anything and they'll always give you a plausible answer." 不会再说 "Sorry, I don't do math."
</div>

<div class="mt-4 tiny">
反向危险: 把它当神. "Am I talking to God? This guy seems to know so much."—Naval 提醒别滑到这一面.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./adoption-edge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 在你这个层级跟你说话

<div class="quote-block text-xl mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
"<strong>The means of learning are abundant. It's the desire to learn that's scarce.</strong>"
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">真正的突破不是 "更多"</div>
<div class="text-sm mt-3 text-slate-800">
"more importantly than more abundant—because we had abundance before—it's <strong>at the right level</strong>."
</div>
<div class="text-sm mt-3 text-slate-700">
"if you have an eighth-grade vocabulary, but you have fifth-grade mathematics, it can talk to you at exactly that level."
</div>
</div>

<div class="p-5 bg-orange-50 border border-orange-300 rounded">
<div class="label text-orange-700">那个 aha 时刻</div>
<div class="text-sm mt-3 text-slate-800">
"I understood A, and I understood B, but I never understood how A and B were connected together. <strong>Now I can see how they're connected</strong>."
</div>
<div class="text-sm mt-3 text-slate-700 italic">
"That kind of learning is magical."
</div>
</div>

</div>

---

# Naval 的实战工作流

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">查询流程</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
"I'll write my query into one model, then I'll copy it and fire it off into <strong>four models at once</strong>."
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
"I'll let them all run in the background... I'll come back to the answer a little later."
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
"In some rare cases where I'm not sure, I'll have them <strong>cross-examine each other</strong>—a lot of cut and pasting there."
</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"I'll have it draw diagrams and illustrations... almost like <strong>whiteboard sessions</strong>."
</div>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-800">为什么愿意付钱给最强模型</div>
<div class="quote-block text-sm mt-3 leading-relaxed text-slate-800">
"The model that's right <strong>92%</strong> of the time is worth almost infinitely more than the one that's right <strong>88%</strong> of the time."
</div>
<div class="text-sm mt-3 text-slate-700">
原因: "mistakes in the real world are so costly that a couple of bucks extra to get the right answer is worth it."
</div>
<div class="mt-4 tiny">
Nivi 也补一句: "I never let it run auto or fast." 总是用 thinking 模式, 哪怕只是问冰箱该多少度.
</div>
</div>

</div>

---

# 定义不出来, 就编程不出来

<div class="quote-block text-2xl mt-8 p-6 text-center bg-purple-50 border-l-4 border-purple-500 rounded">
"<strong>If you can't define it, you can't program it</strong>, and often you can't even recognize it."
</div>

<div class="grid grid-cols-2 gap-6 mt-7">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">AI 像创造性的部分</div>
<div class="text-sm mt-3 text-slate-700">
解 Erdős 问题等——"the answer was probably embedded within the AI's training data set... in five different places, in three different ways, in two different languages."
</div>
<div class="text-sm mt-3 text-slate-700">
Steve Jobs 说 "Creativity is just putting things together." Naval: "I actually don't think that's correct."
</div>
</div>

<div class="p-5 bg-red-50 border border-red-200 rounded">
<div class="label text-red-700">真正的创造力</div>
<div class="text-sm mt-3 text-slate-700">
"coming up with an answer that was <strong>not predictable or foreseeable</strong> from the question and from the elements that were already known."
</div>
<div class="text-sm mt-3 text-slate-700">
比如: 创造一个新画派、提出会被验证的全新科学理论. AI 离这种创造力还远.
</div>
</div>

</div>

---
layout: two-cols
---

# 自行车 → 摩托车

<div class="text-sm leading-relaxed mt-4">

<div class="quote-block p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-base">
"Steve Jobs famously said that a computer is a <strong>bicycle for the mind</strong>."
</div>

<div class="mt-3 text-sm leading-relaxed">
"It lets you travel much faster than walking, certainly in terms of efficiency. <strong>But it takes the legs to turn the pedals</strong> in the first place."
</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-base font-semibold">
"And so now maybe we have a <strong>motorcycle for the mind</strong>, to stretch the analogy..."
</div>

<div class="mt-3 text-sm leading-relaxed">
"...but you still need someone to ride it, to drive it, to direct it, to <strong>hit the accelerator</strong>, and to <strong>hit the brake</strong>."
</div>

<div class="mt-4 tiny">
摩托车不是自动驾驶. 它把杠杆放大了, 但司机的判断更重要——撞车的速度也变快了.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./motorcycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Skynet 还是工具? 钻进去看

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">Naval 的建议</div>
<div class="text-sm mt-3 leading-relaxed">
"Lean in and <strong>learn how it works</strong>. If you encounter a car for the first time in your life, yes, you can get in and drive it around, but that's the moment you're also going to be curious enough to <strong>open up the hood</strong>."
</div>

<div class="mt-4 text-sm leading-relaxed">
看懂底层有两个收益:
</div>
<ul class="mt-2 text-sm leading-7 text-slate-700">
<li>会用得更好</li>
<li>知道该不该怕——"is this thing really going to metastasize into a <strong>Skynet</strong> and destroy the world?"</li>
</ul>
</div>

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">Naval 的电影梗</div>
<div class="text-sm mt-3 italic text-slate-700">
"Are we going to be sitting here and Arnold Schwarzenegger shows up and says, 'At 4:29 AM on February 24th is when Skynet became self-aware'?"
</div>

<div class="mt-4 text-sm text-slate-800">
还是: "Hey, this is a really cool machine and I can use it to do A, B, and C, but I can't use it to do D, E, and F."
</div>

<div class="mt-3 tiny">
Naval 自己的判断明显是后者. 但他要你自己看清楚, 不是听他的.
</div>
</div>

</div>

---

# AI 焦虑的解药是 "动起来"

<div class="quote-block text-2xl mt-8 p-6 text-center bg-orange-50 border-l-4 border-orange-500 rounded">
"<strong>The solution to anxiety is always action.</strong>"
</div>

<div class="grid grid-cols-2 gap-6 mt-7">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">焦虑的本质</div>
<div class="text-sm mt-3 text-slate-700">
"Anxiety is a <strong>non-specific fear</strong> that things are going to go poorly and your brain and body are telling you to do something about it, but you're not sure what."
</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">解药</div>
<div class="text-sm mt-3 text-slate-700">
"You should lean into it. You should figure the thing out. You should look at what it is. You should see how it works."
</div>

<div class="mt-3 text-sm text-slate-700 italic">
"That action of learning—that pursuit of curiosity—is going to help you get over the anxiety."
</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"And who knows, it might actually help you figure out something you want to do with it that is very productive and will make you happier and more successful." —— 这是 Naval 给整期的 closing argument.
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期里最值得收藏的几条:</div>

<div class="grid grid-cols-2 gap-2.5">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"Vibe coding is the new product management. Training and tuning models is the new coding."
<div class="text-xs opacity-60 mt-1 not-italic">— Naval 的开场 tweet</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"There is no demand for average."
<div class="text-xs opacity-60 mt-1 not-italic">— 配套引 Glengarry Glen Ross</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"Now you can literally program in English."
<div class="text-xs opacity-60 mt-1 not-italic">— Naval 引 Karpathy: "English is the hottest new programming language"</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"We are entering an era where every human, in a sense, is a spellcaster."
<div class="text-xs opacity-60 mt-1 not-italic">— 巫师 + 魔杖类比</div>
</div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"The only true test of intelligence is if you get what you want out of life."
<div class="text-xs opacity-60 mt-1 not-italic">— Naval 反推 AI 不是 "智能"</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"To invest in the future, you want to live in the future."
<div class="text-xs opacity-60 mt-1 not-italic">— 早期采用者的 alpha</div>
</div>

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"The means of learning are abundant. It's the desire to learn that's scarce."
<div class="text-xs opacity-60 mt-1 not-italic">— AI 把学习匹配到你的层级</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"The solution to anxiety is always action."
<div class="text-xs opacity-60 mt-1 not-italic">— 整期的收尾论点</div>
</div>

</div>

---
layout: end
---

# Motorcycle, not autopilot.

<div class="mt-8 quote-block text-xl text-center max-w-2xl mx-auto opacity-80">
"Maybe we have a motorcycle for the mind, to stretch the analogy, but you still need someone to ride it, to drive it, to direct it, to hit the accelerator, and to hit the brake."
</div>

<div class="text-center mt-6 tiny">— Naval Ravikant, A Motorcycle for the Mind, 2026-02</div>
