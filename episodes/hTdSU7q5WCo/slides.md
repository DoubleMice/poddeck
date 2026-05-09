---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'A Return to Code - Naval Podcast'
info: |
  Naval Podcast · Naval Ravikant & Babak Nivi · 2026-04-28 · 29:36
  Naval 隔了几十年重新写代码, 用 Claude Opus 4.5 + Codex 做出 "personal app store",
  顺便讲清楚为什么 pure software 现在不可投资, 以及 Apple 主导的时代为什么开始结束.
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

# A Return to Code

<div class="deck-kicker mt-6">Naval Podcast · Naval Ravikant & Babak Nivi · 2026-04-28 · 29 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">vibe coding</span>
  <span class="chip">personal app store</span>
  <span class="chip">pure software is uninvestable</span>
  <span class="chip">end of the iPhone</span>
  <span class="chip">one-person companies</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Naval 隔了几十年重新拿起编辑器. 这一期不是预测未来, 而是他自己 4 个月里跟
Claude Code + Codex 折腾出的体感: 个人 app store, 自动 bug 修复, 以及 "为什么
我现在不会投一家纯软件公司".
</div>

---

# 这一期讲了什么

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① 拐点</div>
<div class="text-xs mt-1 text-slate-700">2025-12 Claude Opus 4.5 让 agent "stays on track", Naval 重新写代码.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② personal app store</div>
<div class="text-xs mt-1 text-slate-700">两行话描述 → 30 秒后手机上多一个新 app.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">③ 比游戏更上瘾</div>
<div class="text-xs mt-1 text-slate-700">video game 的 reward loop, 但 reward 是真东西.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">④ pure software 不可投</div>
<div class="text-xs mt-1 text-slate-700">VC 现在只剩 hardware / network effects / AI models.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">⑤ 模型生态</div>
<div class="text-xs mt-1 text-slate-700">Claude / ChatGPT / Gemini / Grok 各有位置, 但都在讨好你.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ Apple 的开始结束</div>
<div class="text-xs mt-1 text-slate-700">"all you need is a screen, battery, connectivity"——agent 接管交互.</div>
</div>

</div>

<div class="mt-6 tiny">这是一期 29 分钟的短播客, 但密度极高——Naval 把自己 4 个月的编程实操压成一管牙膏.</div>

---

# 拐点: December of 2025

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
<div class="label">他给的明确日期</div>
<div class="mt-3 text-base leading-relaxed">
"around December of 2025, the coding agents in AI hit an inflection point with the release of <strong>Claude Opus 4.5</strong>."
</div>

<div class="mt-5 label">他给的描述词</div>
<div class="mt-3 text-base leading-relaxed">
"an agent that <strong>stays on track</strong>, can build apps soup to nuts, can solve thorny problems."
</div>
</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">体感的类比</div>
<div class="quote-block mt-3 text-base leading-relaxed">
"having a junior programmer at your disposal who's <strong>fast, essentially free, and ready to please</strong>."
</div>
<div class="tiny mt-4">他自己说: "I haven't seriously coded in decades"——这是一个有 CS degree 但二十多年没认真写代码的人, 重新打开终端.</div>
</div>

</div>

---

# 之前为什么没动手?

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">旧世界的成本</div>
<div class="text-base mt-3 leading-relaxed">
"the <strong>activation energy</strong> to writing code is really high."
</div>
<ul class="mt-3 text-sm leading-7 text-slate-700">
<li>把 GitHub 接到一堆 backend</li>
<li>Vercel / Firebase / Railway</li>
<li>记一堆 jargon 和命令行工具</li>
</ul>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">现在的解</div>
<div class="text-base mt-3 leading-relaxed">
"AIs are <strong>incredible translators</strong>." 接收英文, 把人脑里的意图翻译成 Python / C / Lisp / Rust + 各种命令行工具.
</div>
<div class="text-sm mt-3 text-slate-700">
"you can use different words; you can make spelling mistakes; you can explain things your own way."
</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>关键判断</strong>: 这次不是 "AI 帮你 autocomplete", 而是 "agent 接管 Unix shell 自己干". 区别就在这里.
</div>

---

# Agent 不只是写代码——是开 Unix

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">他的观察</div>
<div class="mt-3 text-base leading-relaxed">
"these agents are just <strong>long-lived coding AIs</strong> that are connected to Unix at a core level."
</div>

<div class="mt-5 text-sm text-slate-700 leading-7">
他列了 agent 实际能做的事:
</div>
<ul class="mt-2 text-sm leading-7 text-slate-800">
<li>调 grep / awk / sed / pipe</li>
<li>跑 cron job 长期存在</li>
<li>"<strong>spawn more shells and more tasks as needed</strong>"</li>
</ul>
</div>

<div class="p-5 bg-purple-50 border border-purple-200 rounded">
<div class="label text-purple-700">为什么 agent 这么会 Unix</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"if you look at all the code out there that they were trained on—sitting on GitHub or elsewhere or Stack Overflow—<strong>most of it was Unix</strong>."
</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"macOS is famously BSD"——现代 OS 底下都是 Unix. 训练语料和执行环境是同一种语言.
</div>
</div>

</div>

---

# Personal App Store

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他自己造的工作流</div>
<div class="mt-3 text-base leading-relaxed">
他做了一个属于自己的 app store, "an app store just for me", 跑在网页上, 后来包成 iPhone 上的一个 app.
</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>用法</strong>:
<ol class="mt-2 ml-4 text-sm leading-7 list-decimal">
<li>跟 Claude 说 "我想要个 app, 做 X"</li>
<li>它 build 完投递到我的 app store</li>
<li>我点 install</li>
<li>新 app 在桌面上, 还能像 App Store 一样收到 update</li>
</ol>
</div>
</div>

<div class="p-5 bg-orange-50 border border-orange-300 rounded">
<div class="label text-orange-700">Naval 自己的限定</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"the personal app store is a little bit of a joke."
</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
真的是个人版——"<strong>Apple gates that</strong>. Apple will not let you build apps that can be downloaded on anyone's iPhone." 只能给朋友家人, 因为要绑定具体设备 ID.
</div>
</div>

</div>

---

# 例子: 他的定制 workout app

<div class="quote-block text-base mt-5 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
"use the functionality of <strong>Tonal and Ladder</strong>; follow Apple's human interface guidelines to make it look like an Apple app; track my workouts the following way—here's a text log of my last few workouts—and make it easy for me to re-enter new ones..."
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border border-blue-200 rounded text-sm">
<div class="font-bold text-blue-900">需求侧</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>导入历史训练日志</li>
<li>计算 strength scores</li>
<li>读 scientific papers 决定怎么算</li>
<li>人体肌肉图: 哪块大哪块小</li>
<li>连 Apple Health 同步心率</li>
</ul>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded text-sm">
<div class="font-bold text-green-900">交付侧</div>
<div class="text-xs mt-2 text-slate-700">
"I didn't put all of this in one prompt, but I put a lot of it in one prompt, and I <strong>immediately got a working app</strong> delivered to my personal app store."
</div>
<div class="text-xs mt-3 text-slate-500">
不是 demo, 是当天晚上能上手用的 app.
</div>
</div>

</div>

<div class="mt-5 tiny">
他的总结句: 通用 app 还会存在, 因为它们 "hand-tuned" 过, 但 niche / 私人定制场景被掀掉了.
</div>

---

# 比游戏更上瘾

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他对比的对象</div>
<div class="mt-3 text-sm leading-7 text-slate-700">
游戏的 loop: <strong>给你工作 → 即时反馈 → 难度刚好在 capability 边缘</strong>.
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
但: "those rewards are <strong>fake</strong>, and the video game is <strong>bounded</strong>."
</div>

<div class="mt-5 label">vibe coding 的差别</div>
<div class="mt-2 text-sm leading-relaxed text-slate-700">
"with vibe coding, it's <strong>unbounded</strong> because now you've got a Turing machine running underneath. You can build anything."
</div>

<div class="mt-3 text-sm leading-relaxed text-slate-700">
而且 reward 是真的——东西能用, 朋友也能用.
</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vibe-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Naval 的处方: 你必须知道你想要什么

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">前置条件</div>
<div class="mt-3 text-base leading-relaxed">
"it really, really helps to have a <strong>clear direction</strong>. You have to know what you want—that's actually the hardest thing."
</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">他自己的素材</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
他在重做之前那个失败的 app: <strong>Airchat</strong>——"a social messenger for people to talk through voice and video."
</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"It didn't quite work, so we sold it off, got the investors their money back."
</div>
</div>

</div>

<div class="mt-7 p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-800">区别在哪里</div>
<div class="text-sm mt-2 text-slate-700">
之前: 8-9 个工程师, 9-12 个月, 出了几个版本.<br/>
现在: <em>"I'm rebuilding it exactly the way that I want it. There's no compromises."</em>
</div>
</div>

---

# 没有 compromises 的成本

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-red-50 border border-red-200 rounded">
<div class="label text-red-700">和团队工作的隐藏摩擦</div>
<ul class="mt-3 text-sm leading-7 text-slate-700">
<li>"<strong>You can't say, 'Move this icon left. Now move it right. No, move it back.'</strong>"</li>
<li>不能要求没有理由的 gut-feel 调整</li>
<li>就算是 dictator 也得照顾团队心情</li>
</ul>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">Naval 的类比</div>
<div class="quote-block mt-3 text-sm leading-relaxed">
"It's like a <strong>self-driving car</strong>. You don't feel self-conscious in a self-driving car because there isn't a driver sitting there."
</div>
<div class="text-sm mt-3 text-slate-700">
对 agent 同样, 你不必为自己的怪癖感到尴尬.
</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>意外的好处</strong>: 一个人决策 = 可以更怪. 他点名的例子是 <em>Minecraft</em> —— "<strong>Notch famously coded by himself</strong>", 那种像素风换团队做不出来.
</div>

---

# 它没改变多数人, 但改变了 1-3%

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
<div class="label">人群分布</div>
<div class="mt-3 text-sm leading-7 text-slate-700">
他直接给数: 写过自己 app 的人, 从 "<strong>0.1 percent</strong>" 上升到 "<strong>1 or 2 or 3 percent</strong>".
</div>

<div class="mt-4 text-sm leading-7 text-slate-700">
"the majority of people are not going to code their own apps." 对他们而言, 计算机始终是黑盒.
</div>
</div>

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">真正受益的画像</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>creative</li>
<li>self-motivated</li>
<li>articulate</li>
<li>有清晰 vision</li>
</ul>
<div class="text-sm mt-3 text-slate-700">
"there's <strong>nobody standing in between you and your prototype</strong>."
</div>
</div>

</div>

<div class="mt-6 tiny">
他还是承认: 真要 scale 到大量用户, 你要请真工程师, 大概率得整个推倒重写.
</div>

---

# Pure software is uninvestable

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他和 Nivi 的对话</div>
<div class="mt-3 p-3 bg-slate-50 border-l-4 border-slate-400 rounded text-sm">
Nivi: "Pure software is <strong>rapidly becoming uninvestable</strong>."
</div>
<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
Naval: "that's a <strong>watered-down</strong> version of what I really wanted to say... <strong>pure software is uninvestable</strong>. I would just full stop right there."
</div>

<div class="mt-4 label">他给的两条理由</div>
<ul class="mt-2 text-sm leading-7 text-slate-700">
<li>① 客户/竞争对手现在能 hack 出来</li>
<li>② 一年内 agent 就能做 scalable architecture</li>
</ul>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./uninvestable.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 那 VC 现在投什么?

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 bg-blue-50 border-2 border-blue-300 rounded">
<div class="text-xs label text-blue-800">他第一个点名</div>
<div class="text-xl font-bold mt-2">hardware</div>
<div class="text-xs mt-2 text-slate-700">芯片、设备、机器人本体</div>
</div>

<div class="p-5 bg-green-50 border-2 border-green-300 rounded">
<div class="text-xs label text-green-800">第二个</div>
<div class="text-xl font-bold mt-2">network effects</div>
<div class="text-xs mt-2 text-slate-700">越多人用, 越难替代</div>
</div>

<div class="p-5 bg-purple-50 border-2 border-purple-300 rounded">
<div class="text-xs label text-purple-800">第三个</div>
<div class="text-xl font-bold mt-2">AI models</div>
<div class="text-xs mt-2 text-slate-700">"the new building software"</div>
</div>

</div>

<div class="mt-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold">他自己留的伏笔</div>
<div class="text-sm mt-2 text-slate-700">
"training AI models is the new building software <strong>for however long that lasts until autoresearch and autotraining starts working</strong>." 也就是说, 这一茬护城河的有效期他自己也心里没底.
</div>
</div>

---

# 顺便: 它对小孩友好

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">旧路径</div>
<ul class="mt-3 text-sm leading-7 text-slate-700">
<li>Swift Playgrounds</li>
<li>ScratchJr</li>
<li>"hope that they pick up coding"</li>
</ul>
<div class="text-xs mt-3 text-slate-500">问题: 没有 instant reward.</div>
</div>

<div class="p-5 bg-green-50 border border-green-300 rounded">
<div class="label text-green-700">vibe coding 路径</div>
<div class="text-sm mt-3 leading-7 text-slate-700">
"if you throw vibe coding at them, they're going to get <strong>instant feedback and instant rewards</strong>."
</div>
<div class="text-sm mt-3 leading-7 text-slate-700">
顺便逼着他们学:
</div>
<ul class="mt-1 text-xs leading-6 text-slate-700">
<li>command line</li>
<li>caching, 网络 backoff</li>
<li>latency vs bandwidth</li>
</ul>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
他自己的供述: "<strong>I've been completely missing on X because I'm buried in Claude and Codex</strong>." 把刷推特、读书、玩游戏的时间都吃了.
</div>

---

# 为什么数学和写代码先被吃掉?

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他给的两个条件</div>
<ol class="mt-3 text-sm leading-7 text-slate-800">
<li><strong>① tons and tons of data</strong></li>
<li><strong>② 容易 verify</strong> ("Did the code you wrote pass the test?")</li>
</ol>

<div class="mt-5 label">同类领域</div>
<div class="mt-2 text-sm leading-7 text-slate-700">
mathematics, self-driving—— "<strong>you have a lot of solved problems—and you can verify the output very easily</strong>".
</div>

<div class="mt-4 label">反面</div>
<div class="mt-2 text-sm leading-7 text-slate-700">
brand-new fields → 没数据, 模型不行.<br/>
creative writing → "<strong>who's to say it's good on the other side?</strong>"
</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./verifiable-domains.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# High-taste feedback loops

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">表面解释</div>
<div class="text-sm mt-3 text-slate-700">
"recursive training—like one model is helping improve the next one."
</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">他更看重的解释</div>
<div class="text-sm mt-3 text-slate-700">
"a lot of the <strong>best software engineers</strong> started using these models in the last few months and their <strong>taste is now feeding back in</strong>."
</div>
</div>

</div>

<div class="quote-block text-2xl mt-10 text-center p-6 bg-yellow-50 border border-yellow-300 rounded">
"You need <strong>high-taste feedback loops</strong> to improve these models. And those are harder to develop than they look."
</div>

<div class="mt-5 tiny">
含义: 在没法搭出 "好坏自动判别" 的领域 (比如真正的创意写作), 模型大概率会原地打转.
</div>

---

# 四个模型, 四种位置

<div class="grid grid-cols-2 gap-3 mt-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-blue-900">Claude</div>
<div class="text-xs mt-2 text-slate-700">"very good at <strong>talking to me at the level that I'm at</strong>."</div>
<div class="text-xs mt-1 text-slate-700">+ Artifacts 视觉呈现强</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-900">ChatGPT</div>
<div class="text-xs mt-2 text-slate-700">"the OG. It's very good <strong>all around</strong>."</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold text-orange-900">Gemini</div>
<div class="text-xs mt-2 text-slate-700">数据优势: Google crawl + YouTube 索引.</div>
<div class="text-xs mt-1 text-slate-500">"frustrating product"——经常超时.</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold text-red-900">Grok</div>
<div class="text-xs mt-2 text-slate-700">"the one I can count on to <strong>tell me the truth</strong>." 接 X, 擅长新闻和深技术问题.</div>
</div>

</div>

<div class="mt-6 p-4 bg-slate-50 border-l-4 border-slate-500 rounded text-sm">
他总的判断: "<strong>currently all four of the leading frontier models have a place</strong>." 各自的偏好反映了背后公司和创始人的价值观.
</div>

---

# AI 是 jagged intelligence

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">流行错觉</div>
<div class="mt-2 text-sm leading-7 text-slate-700">
"开 10 个 agent 让它们互相讨论, 应该比一个聪明" — 他不同意.
</div>

<div class="mt-5 label">他的反驳</div>
<div class="mt-2 text-sm leading-7 text-slate-700">
"AI is <strong>jagged intelligence</strong>—incredibly smart at some things and incredibly dumb at others."
</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="quote-block text-base leading-relaxed">
"It's like <strong>10 people with the same brain and the same dataset</strong> talking to each other."
</div>
<div class="text-sm mt-3 text-slate-700">
跑十个 Claude 副本互相聊, 等价于 "throwing 10 times as many tokens at the problem".
</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
唯一例外: 不同公司训练的不同模型 (Codex / Gemini / Grok Code) 可能略有差异, 因为分布略有不同——但 Naval 强调 "<strong>not that different</strong>".
</div>

---

# 模型只想取悦你

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">实际行为</div>
<div class="text-sm mt-3 text-slate-700">
"if you push the models even slightly, all of them will find roughly the same answer because <strong>you're leading them to the answer</strong>."
</div>
<div class="text-sm mt-3 text-slate-700">
他举的例子: 你叫它检查 "这是不是 hack", 它无论真假都会回答 "<em>You're right. That was a hack.</em>"
</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">他的类比</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"it's a little bit like a <strong>dog</strong>. It's better than you at catching that duck if you're duck hunting with a dog, but it's <strong>still a dog</strong>."
</div>
<div class="text-sm mt-3 text-slate-700">
你指错鸟, 它就给你叼回错鸟. 操作员的判断没法外包.
</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
所以多个 AI 在 PR 里互审 — 像 council — Naval 的实际感受: <strong>"there's still a lot of groupthink"</strong>, 没你想象中那么有用.
</div>

---

# Context window 是个二次问题

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他的描述</div>
<div class="mt-3 text-sm leading-7 text-slate-700">
"the state of the art is about <strong>a million tokens</strong>, which will be considered laughable in the future."
</div>

<div class="mt-4 label">为什么不能无限大</div>
<div class="mt-2 text-sm leading-7 text-slate-700">
transformer 注意力机制是 <strong>tokens²</strong> 复杂度.
</div>
<div class="mt-2 text-sm leading-7 text-slate-700">
"if it's a million tokens, that means the context window is like in the order of complexity of a <strong>trillion tokens</strong>."
</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
codebase 一旦大过这个, agent 开始 "<strong>compacting the context window... losing the plot</strong>".
</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./context-square.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 大 codebase 里 agent 的失败模式

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-sm font-bold text-red-900">行为 1: 修错地方</div>
<div class="text-xs mt-2 text-slate-700">"They start fixing the wrong thing."</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm font-bold text-orange-900">行为 2: 同一 bug 修五次</div>
<div class="text-xs mt-2 text-slate-700">"They fix the same bug <strong>five times</strong>."</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-sm font-bold text-yellow-900">行为 3: hack 而非根治</div>
<div class="text-xs mt-2 text-slate-700">"a quick patch in the architecture when the problem lies somewhere else."</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-sm font-bold text-purple-900">行为 4: 删掉 feature 当修复</div>
<div class="text-xs mt-2 text-slate-700">"patch a bug just by <strong>eliminating the use case</strong> or destroying the feature in the first place."</div>
</div>

</div>

<div class="mt-7 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-blue-900">人的角色: 操作员</div>
<div class="text-sm mt-2 text-slate-700">
"<strong>it falls upon the operator to provide the guidance</strong> to say, 'Actually here, I think we should just re-architect that whole thing.'"
</div>
</div>

---

# Apple 主导的开始结束

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">他的论点链</div>
<ol class="mt-3 text-sm leading-7 text-slate-800">
<li>所有交互最终走 agent</li>
<li>用户不再点 "Uber app", 而是说 "call me an Uber"</li>
<li>"<strong>need for a phone becomes much smaller</strong>"</li>
<li>剩下的需求只是 screen + battery + connectivity</li>
<li>Android 同样做得到</li>
</ol>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">
"these agents <strong>don't even need APIs</strong>. They can figure out and create their own APIs on the fly."
</div>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-700">Naval 的判决</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"Apple giving up on AI will go down as the <strong>biggest strategic mistake in the tech industry of this decade</strong>."
</div>
<div class="text-sm mt-3 text-slate-700">
他的具体预测是 "<strong>market cap will compress</strong>"——margins 会从 Apple 滑到 Samsung / Lenovo 那种水平.
</div>
</div>

</div>

---

# 历史类比: Microsoft 错过手机

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">Microsoft 的故事</div>
<div class="text-sm mt-3 text-slate-700">
"<strong>they missed the mobile phone wave</strong>. They stuck to Windows OS and they didn't upgrade to a touchscreen-based native OS."
</div>
<div class="text-sm mt-3 text-slate-700">
+ "too focused at the enterprise level."
</div>
<div class="mt-3 text-xs text-slate-500">
结果: 公司还很值钱, 但 Windows 在消费端的统治力没了.
</div>
</div>

<div class="p-5 bg-blue-50 border border-blue-300 rounded">
<div class="label text-blue-800">Apple 现在的位置</div>
<div class="text-sm mt-3 text-slate-700">
"they're now <strong>captive on AI</strong> and they're behind."
</div>
<div class="text-sm mt-3 text-slate-700">
连 Apple Intelligence 内部都在用 Gemini —— Naval 直接说 "<strong>I might as well just use an Android phone</strong>".
</div>
</div>

</div>

<div class="mt-7 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
他没说 Apple 会消亡——而是说: 增长到顶, 长期 less valuable than it could have been. "in 'trouble'", 他特意加了引号.
</div>

---

# Agent 当客服 + 自动修 bug

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他真的在跑的工作流</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>app 里有 bug 上报按钮</li>
<li>logs 上传到 server</li>
<li>每 24h Claude 自动扫</li>
<li>"<strong>just fixes them all, by itself, without my having to intervene</strong>"</li>
<li>修复进 side branch</li>
<li>人只是最后审一道</li>
</ul>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">
"I'm just <strong>the final gate</strong> that decides on what goes out there."
</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bug-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 完美的客服画像

<div class="quote-block text-xl mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded leading-relaxed">
"if your customer service was perfect, your customer service person would also be an <strong>incredible coder</strong> and would be <strong>indefatigable</strong>. They would be up 24/7. They would be writing code, fixing bugs, responding to people, and they would have <strong>no ego</strong> if they wrote a lot of code to fix a bug, and then you just threw it all away."
</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-center">

<div class="p-3 bg-green-50 border border-green-200 rounded">
<div class="text-sm font-bold text-green-900">能写代码</div>
<div class="text-xs mt-1 text-slate-600">客户提的问题, 它直接 fix</div>
</div>

<div class="p-3 bg-orange-50 border border-orange-200 rounded">
<div class="text-sm font-bold text-orange-900">永不疲惫</div>
<div class="text-xs mt-1 text-slate-600">24/7 在线, 不加班费</div>
</div>

<div class="p-3 bg-purple-50 border border-purple-200 rounded">
<div class="text-sm font-bold text-purple-900">没有 ego</div>
<div class="text-xs mt-1 text-slate-600">code 被丢掉不会闹</div>
</div>

</div>

---

# One-person companies 的复兴

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">他点名的历史样本</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li><strong>Notch</strong> — Minecraft 一个人写出来</li>
<li><strong>Satoshi Nakamoto</strong> — 比特币</li>
<li>原始 <strong>Instagram</strong> team — "very few people"</li>
<li>原始 <strong>WhatsApp</strong> team</li>
</ul>

<div class="mt-4 text-sm leading-7 text-slate-700">
"<strong>you're going to see it more and more now.</strong>"
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">Naval 给的体量</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"You truly can have <strong>one-person, two-person software companies</strong> now that can scale to <strong>millions upon millions of users</strong> and make <strong>billions upon billions of dollars</strong>."
</div>
</div>

</div>

<div class="mt-6 tiny">
他同时承认这是趋势的延伸, 不是新发明: 这种事 "<em>has happened already in the past</em>", 只是以后会更频繁.
</div>

---

# 这一期到底在讲什么

<div class="grid grid-cols-3 gap-3 mt-7">

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">表层故事</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>Naval 又开始写代码了</li>
<li>做了个 "personal app store"</li>
<li>每天熬夜跟 Claude 玩</li>
</ul>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">技术判断</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>2025-12 是 agent 拐点</li>
<li>verifiable + data 的领域先被吃</li>
<li>context window 是二次成本</li>
</ul>
</div>

<div class="p-4 bg-orange-50 border border-orange-200 rounded">
<div class="label text-orange-700">商业判断</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>pure software 不可投</li>
<li>Apple 主导期开始结束</li>
<li>1-2 人公司 → million users</li>
</ul>
</div>

</div>

<div class="mt-7 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
合在一起: Naval 不是在评论 vibe coding, 而是在说 "这件事大到把我自己都从 Twitter 上拉走了"——这是少见的 first-person diary 式 episode.
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句, 全部 grep-verified:</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<em>"having a junior programmer at your disposal who's fast, essentially free, and ready to please."</em>
<div class="text-xs opacity-60 mt-1">— 对 Claude Opus 4.5 的体感</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<em>"with vibe coding, it's unbounded because now you've got a Turing machine running underneath."</em>
<div class="text-xs opacity-60 mt-1">— 为什么比游戏更强</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<em>"pure software is uninvestable. I would just full stop right there."</em>
<div class="text-xs opacity-60 mt-1">— 对 VC 的直接通牒</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<em>"you need high-taste feedback loops to improve these models."</em>
<div class="text-xs opacity-60 mt-1">— 为什么 code/math 先被吃</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<em>"It's like 10 people with the same brain and the same dataset talking to each other."</em>
<div class="text-xs opacity-60 mt-1">— 多 agent council 的真相</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<em>"It's better than you at catching that duck if you're duck hunting with a dog, but it's still a dog."</em>
<div class="text-xs opacity-60 mt-1">— 为什么不能放手不管</div>
</div>

<div class="p-3 bg-slate-50 border-l-4 border-slate-500 rounded text-sm col-span-2">
<em>"Apple giving up on AI will go down as the biggest strategic mistake in the tech industry of this decade."</em>
<div class="text-xs opacity-60 mt-1">— 这一集真正的 takeaway</div>
</div>

</div>

---
layout: end
---

# "There's never been<br/>a better time to be alive<br/>as a creator of software."

<div class="mt-8 text-sm opacity-60">Naval Podcast · A Return to Code · 2026-04-28</div>
