---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Getting Humans Out of the Way: How to Work with Teams of Agents'
info: |
  MLOps.community · Rob (creator of Brumi) × Demetrios · 2026
  当一个人手里同时跑着 10-20 个 agent, 他的工作长什么样? Brumi 作者 Rob 把
  "feature walkthrough doc / 自定义 lint 规则 / 并行 agent / plan.md / diagnose 工具" 一条条摊开讲.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<style>
.deck-kicker { color: #64748b; font-size: 0.92rem; }
.muted { color: #64748b; }
.chip { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 999px; padding: 0.25rem 0.7rem; font-size: 0.78rem; color: #334155; background: #f8fafc; }
.tiny { font-size: 0.78rem; color: #64748b; line-height: 1.5; }
.quote-block { font-family: "Source Serif Pro", "Georgia", serif; font-style: italic; }
.label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; font-weight: 600; }
</style>

# Getting Humans Out<br/>of the Way

<div class="deck-kicker mt-6">MLOps.community · Rob (Brumi) × Demetrios · 2026 · ≈ 50 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">manage up</span>
  <span class="chip">feature walkthrough doc</span>
  <span class="chip">parallel agents</span>
  <span class="chip">plan.md</span>
  <span class="chip">custom lint rules</span>
  <span class="chip">tools for agents</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Rob 写了 <strong>Brumi</strong> —— 一个让人能同时盯着十几个 CLI agent 干活的开源 IDE.
这期他把"如何把人从 loop 里拿出来"的一整套手艺摊开讲: 从屏幕截图驱动的 QA, 到自己写 lint 规则给自己用,
到把 5 个 agent 并行跑同一个任务再挑赢家.
</div>

---

# 这期里的六条主线

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① Manage up</div>
<div class="text-xs mt-1 text-slate-700">教 agent 怎么向上汇报——你的注意力比它的时间稀缺得多.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② Walkthrough doc</div>
<div class="text-xs mt-1 text-slate-700">让 agent 自己截图 + 副 agent 验证——人不用再点 app 做 QA.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">③ 自定义 lint 规则爆炸</div>
<div class="text-xs mt-1 text-slate-700">每发现一次坏习惯就加一条规则——以后再也不用看了.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">④ 并行 5 个 agent</div>
<div class="text-xs mt-1 text-slate-700">同一个任务从五个角度跑, 看 verification 结果挑一个.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">⑤ "what was hard?"</div>
<div class="text-xs mt-1 text-slate-700">直接问 agent 哪里难——这是新型 tech debt 的入口.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ \$100 钞票</div>
<div class="text-xs mt-1 text-slate-700">机会刚刚浮现的窗口——这是人类此刻最该投精力的地方.</div>
</div>

</div>

<div class="mt-6 tiny">
Demetrios 主持: "I had never thought to ask that question." 这期是一个把 manager-of-agents 工作流吃透的人,
把每条小细节都说出来. 没有理论, 全是 day-to-day 怎么干.
</div>

---
layout: two-cols
---

# 工作的形状变了

每隔几周模型一升, 你就被往上推一格.

<div class="mt-5 space-y-3">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Autocomplete</strong> · tab 一下补一两行
</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Pair programmer</strong> · IDE 侧边栏, 一半要纠正
</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>Terminal agent</strong> · 自己跑久一点, 像 line manager
</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Manager</strong> · 同时盯十几个, 它们做 QA / 文档 / 验证
</div>
</div>

<div class="mt-5 tiny">
Rob: "<em>each level you can give them more autonomy and step back more and micromanage them less.</em>"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-progression.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Rob 的核心隐喻: 管理 agent ≈ 管理人

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">和管人一样</div>
<div class="text-sm mt-2">
教它<strong>怎么向上汇报</strong>: 哪些信息要给你, 该问哪几个关键问题, 怎么把工作呈递给你.
你的注意力是稀缺资源, 它的不是.
</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">和管人不一样</div>
<div class="text-sm mt-2">
你<strong>可以浪费它的时间</strong>. 让它写大量样板文档、刷高 unit test 覆盖、不停 refactor、
开五个分身做同一个任务再扔掉四个——这些放到人类身上是 cruelty, 放到 agent 身上是 OK.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="quote-block">
"You should teach your agents to manage up. So if you've got a human who works for you,
important skill of them reporting to you is they know what information to give you,
what questions to give you, and how to present their work to you."
</div>
<div class="text-xs mt-2 opacity-70 not-italic">— Rob, 关于 agent 的核心训练目标</div>
</div>

---
layout: two-cols
---

# 第一招: feature walkthrough doc

agent 写完一个 feature 后, 必须自己交一份"导览文档".

<div class="mt-4 space-y-3 text-sm">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
一组 <strong>截图</strong>, 每张 cropped 到关键区域,
配文字说明"在做什么、为什么".
</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
另一个 <strong>sub-agent</strong> 复核——这些截图真的展示了应该展示的东西吗?
</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
人 <strong>扫一遍</strong> doc 就行, 看完点 merge.
还附带一个 playwright spec, 下次能再跑.
</div>
</div>

<div class="mt-4 tiny">
"<em>Build a screenshot based feature walkthrough showing this works.
If it doesn't work, keep it racing till it does.</em>"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./walkthrough-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 同一份 doc 兜住了三件事

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-red-50 border-2 border-red-300 rounded">
<div class="text-xs font-bold text-red-700 mb-2">① 错误捕获</div>
<div class="text-sm">
sub-agent 发现某张截图根本没展示 feature → 把任务退回去重做.
</div>
</div>

<div class="p-4 bg-blue-50 border-2 border-blue-300 rounded">
<div class="text-xs font-bold text-blue-700 mb-2">② 人快速 review</div>
<div class="text-sm">
Rob: <em>"I don't look at the code. So when I merged code, most of the time I do not actually try the app."</em>
他扫 walkthrough doc, 看功能齐了就 merge.
</div>
</div>

<div class="p-4 bg-green-50 border-2 border-green-300 rounded">
<div class="text-xs font-bold text-green-700 mb-2">③ 回归测试</div>
<div class="text-sm">
发版本前, 把所有 walkthrough 的 playwright spec 全跑一遍.
像素差异让 agent 自己判断: 是预期变化还是 bug.
</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者 gloss:</strong> 老式 QA 是人 click through app 找问题. 新式 QA 是 agent 给自己做记录、自己审、
最后递给你一份能扫 30 秒看完的 PDF.
Demetrios: "<em>I've spent so much time QA-ing things... this now is becoming my go-to.</em>"
</div>

---

# Get the human out of the loop

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="quote-block text-lg">
"The main role of a human when working with a team of agents is coming up with the validation processes.
If you can define what good means and you can work out ways of sculpting and defining that...
then a lot of the time the agents can then deal with that."
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-4 text-sm">

<div class="p-3 bg-slate-50 border border-slate-200 rounded">
<div class="font-bold mb-1">↓ 你不再做的事</div>
<div class="text-xs opacity-80">
点 app 走流程<br/>
逐行审 diff<br/>
人肉做回归测试
</div>
</div>

<div class="p-3 bg-green-50 border border-green-200 rounded">
<div class="font-bold mb-1 text-green-800">↑ 你开始做的事</div>
<div class="text-xs opacity-80">
"good" 长什么样?<br/>
拿什么测它?<br/>
agent 怎么能自证?
</div>
</div>

<div class="p-3 bg-orange-50 border border-orange-200 rounded">
<div class="font-bold mb-1 text-orange-800">原则</div>
<div class="text-xs opacity-80">
看到自己在 micromanage<br/>
→ 加一道<br/>
verification 流程
</div>
</div>

</div>

---

# 第二招: 自定义 lint 规则爆炸

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
agent 写出来的代码风格不对? <strong>不要每次都纠正它</strong>——加一条 lint 规则, 以后再也看不见了.
关键是 agent 自己写 lint 规则又快又好.
</div>

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="text-xs font-bold text-blue-700 mb-1">具体例子 1</div>
<div class="text-sm">函数太长不可读 → 加规则: 每个函数最多 50 行.</div>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded">
<div class="text-xs font-bold text-green-700 mb-1">具体例子 2</div>
<div class="text-sm">CSS / className 微管理太杂乱 → 让 agent 写 lint 规则, 强制只用预定义的紧凑组件集.</div>
</div>

<div class="p-4 bg-orange-50 border border-orange-200 rounded">
<div class="text-xs font-bold text-orange-700 mb-1">具体例子 3</div>
<div class="text-sm">React useEffect 用法你有强意见 → 把意见写成 lint, "you never have to look for that ever again".</div>
</div>

<div class="p-4 bg-red-50 border border-red-200 rounded">
<div class="text-xs font-bold text-red-700 mb-1">规模化结果</div>
<div class="text-sm">"<em>You can end up with huge numbers of lint rules</em>"——但代码风格被钉得极紧.</div>
</div>

</div>

<div class="mt-4 tiny">
人写 custom lint 规则是件痛苦的事, 但 agent 写起来很顺手. 这是一个非对称.
</div>

---

# 第三招: 文档惯例 (给 agent, 也给人)

<div class="mt-4 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-blue-900 mb-2">每个文件顶部一段注释</div>
<ul class="text-sm space-y-1">
  <li>这文件是干什么的?</li>
  <li>大概怎么实现的?</li>
  <li>关键设计决策是什么?</li>
  <li>和哪些其他关键文件相关?</li>
</ul>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-900 mb-2">每个文件夹一个 README</div>
<ul class="text-sm space-y-1">
  <li>这文件夹哲学上是干嘛的?</li>
  <li>里面的文件大体在做什么?</li>
  <li>这块代码做了哪些设计决策?</li>
  <li>每个文件一行 summary</li>
</ul>
</div>

</div>

<div class="mt-5 p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="quote-block">
"The way the agents navigate the code base is, broadly speaking, semantic search...
they will do a better job of that if the code is itself well documented."
</div>
</div>

<div class="mt-3 tiny">
Rob 强调: 这同时让人类也更容易上手——很多对 agent 友好的事, 对人也友好.
</div>

---

# "你可以浪费 agent 的时间"

<div class="mt-4 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="quote-block text-lg">
"With humans, refactoring is a lot of work and humans don't like doing work, and work is expensive,
so in practice you usually don't refactor it...
but the cool thing about agents, is you can waste their time."
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">人类版</div>
<div class="mt-2">几年前漂亮的 codebase 现在变得恐怖, 但重写太贵, 没人愿意干.</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">agent 版</div>
<div class="mt-2">"哦这个设计错了"——直接换一种重写, verification flow 兜着, 反复都行.</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">推论</div>
<div class="mt-2">"<em>code that stays nice a lot longer</em>"——只要 verification 在.</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者 gloss:</strong> 这反过来还推翻了一种偏见——"agent 写的代码很 shitty".
Rob 的观点: agent 写的代码<strong>导得好的话</strong>, 经常比人写的还好——因为它愿意做那些人不愿意做的、
冗长的、严格的、文档化的工作.
</div>

---
layout: two-cols
---

# 第四招: 并行跑 5 个 agent

低技术含量, 但很有效.

<div class="mt-4 space-y-2 text-sm">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
描述<strong>同一个任务的 5 种角度</strong>, 在 Brumi 里几下键就开 5 个 session.
</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
跑完看每个的 verification 结果和最终代码——
有的卡住, 有的产出风格不喜欢, 有的设计决策亮眼.
</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
挑一个 merge, 其他丢掉.
</div>
</div>

<div class="mt-4 tiny">
"<em>I would just like describe five different angles on the task, can say run with it,
and then at the end I look at their verification results and what they've done. Pick one.</em>"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./parallel-agents.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Merging is a solved problem

并行跑出 shit ton of conflicts? Rob 说这件事 agent 处理得很好.

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="quote-block">
"Agents are great at doing a ton of work, so I feel like merging is just a solved problem now,
and that really changes the extent to which you can go in parallel."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-xs font-bold text-purple-700 mb-2">语法层</div>
<div class="text-sm">git 检测出的 textual conflict——agent 看 PR 哲学, 决定怎么合.</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-xs font-bold text-orange-700 mb-2">语义层</div>
<div class="text-sm">没有冲突标记, 但两个 PR 改变了对同一概念的处理方式——也让 agent 来判断.</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>关键解锁:</strong> 一旦 merge 不再痛苦, 真正能"广撒网"——每天扔几十个 feature 给 agent 同时干,
回头一个一个 merge, 完全可控.
</div>

---

# Brumi 的核心 UX: 一键命令

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-slate-50 border border-slate-200 rounded">
<div class="text-xs font-bold mb-2">界面布局</div>
<div class="text-sm">
左侧: 所有 session 列表 (每个 = 一个 worktree)<br/>
中间: agent 面板, 看它在干什么<br/>
右侧: 文件面板 (Monaco, 跟 VS Code 一致)<br/>
中间偏上: source control / 代码 review
</div>
</div>

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="text-xs font-bold mb-2">可定制按钮 (核心创新)</div>
<div class="text-sm space-y-1">
<div>● "写个报告说你做了什么"</div>
<div>● "看着卡住了, 解释一下"</div>
<div>● "拉 main, 解决冲突"</div>
<div>● "Create PR" (commit + 拉 main + walkthrough + PR)</div>
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<div class="quote-block">
"In a sense it feels like a minor feature 'cause you could literally just type these same things in...
but the fact it's a single click — huge."
</div>
<div class="text-xs mt-2 opacity-70 not-italic">同时管 10-20 个 session 时, 节省的不是字数, 是上下文切换.</div>
</div>

---

# 跑 10-20 个 agent 的现实约束

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold text-red-800 mb-2">① 一台够猛的笔记本</div>
<div class="text-sm">
Demetrios: "<em>How are you actually running 10 or 15 agents in parallel? I have a hard time even running like three.</em>"<br/>
Rob 的第一答: "<em>Step one, have a very, very beefy laptop.</em>"
</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold text-orange-800 mb-2">② 想清楚什么贵</div>
<div class="text-sm">
Claude 的推理在云端跑——便宜.<br/>
本地跑的是: 单元测试、起本地 server、E2E.<br/>
10 个 agent 同时起 server → 本机起火.
</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 bg-blue-50 border border-blue-200 rounded">
<div class="font-bold mb-1">写在 skill 里的省钱原则</div>
<ul class="text-xs space-y-1 opacity-90">
<li>跑过 lint + unit 之前, 不要跑 E2E</li>
<li>不要为了抓一行错误就把 E2E 跑十遍</li>
<li>未来计划: Brumi 支持 cloud container</li>
</ul>
</div>

<div class="p-3 bg-purple-50 border border-purple-200 rounded">
<div class="font-bold mb-1">"Manage by walking around"</div>
<div class="text-xs opacity-90">
不是微管理, 是<strong>溜达一圈</strong>看 broad pattern——
发现某个 agent 在反复跑 E2E, 就回去更新 skill / lint / guidance,
而不是逐个纠正.
</div>
</div>

</div>

---

# 第五招: plan.md 比 plan mode 更好用

<div class="mt-4 p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="quote-block">
"I actually don't generally use Claude's built-in plan mode.
I have it create a plan to MD file and ask me the core top level questions.
And if it does a good job of asking me the top initial questions, it usually won't have gone sideways."
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-1">输出</div>
<div class="text-xs opacity-90">写到 repo 里的 plan.md, agent 下次 context 被压缩了也能回去看.</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1">关键</div>
<div class="text-xs opacity-90">
3-5 个高层问题. Rob: "<em>I often won't actually read the plan.</em>" 看的是问题, 答 yes/no/调整.
</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold mb-1">隐藏好处</div>
<div class="text-xs opacity-90">
sibling worktree 可以读对方的 plan.md——
"<em>look at this sibling worktree's plan and see what it's up to.</em>"
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者 gloss:</strong> 这是一种把 agent 注意力管理"反向" 给人的小技巧——
agent 自己不擅长压缩, 但擅长写出固定的 markdown.
人不擅长读长 markdown, 但擅长回答 "这个假设对吗?"
</div>

---

# 第六招: 让 agent 自己写工具

<div class="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
Rob 让 agent 写 UI 组件去匹配 Figma 设计. 默认行为: agent 反复看 PNG / MCP 渲染, 慢得要死.
</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-xs font-bold text-red-700 mb-2">默认: 自己慢慢看</div>
<div class="text-sm">
"<em>Looking in detail at the PNGs from the Figma and the MCP rendered versions...
trying to understand what they're different. It takes ages.</em>"
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs font-bold text-green-700 mb-2">改造: agent 自己写工具</div>
<div class="text-sm">
让 agent 写一个 <code>diagnose</code> 脚本——直接吐出
"这里和 Figma 差了什么, 怎么修". 后续所有 agent 都用它.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<div class="quote-block">
"Agents will do much better work if they've got the right tools, but you can have agents write those tools.
So part of the art of having a good codebase is also about having the right tools that make all the work really easy."
</div>
</div>

---

# 神级动作: "what was hard?"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="quote-block text-lg">
"Ask the agent to tell you what was hard. He'll tell you."
</div>
<div class="text-xs mt-2 opacity-70 not-italic">— Rob, 整集 podcast 的开场金句</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold mb-1">问什么</div>
<div class="text-xs opacity-90">
"你这段时间在花时间做什么?<br/>
什么是 hard 的?"
</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1">答案的去向</div>
<div class="text-xs opacity-90">
有时是写个脚本 / tool<br/>
有时是 refactor<br/>
有时是 codebase 本身需要重塑
</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold mb-1">类比</div>
<div class="text-xs opacity-90">
就像和 report 做 1-on-1: 你 enjoy 什么, 不 enjoy 什么.
然后用这些信息让生活变好.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Demetrios 的总结很到位: "<em>That's like the new technical debt is what have you been spending your time on.
That's how you're getting rid of tech debt by finding what is hard for the agent.</em>"
</div>

---
layout: two-cols
---

# 那人这一边干嘛?

工作没有消失, 只是<strong>形状变了</strong>.

<div class="mt-4 space-y-2 text-sm">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>定义"good"长什么样</strong> + 把它写成 agent 能跑的 verification.
</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>给 agent 写工具 / skill</strong> (或让 agent 写, 你审).
</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Manage by walking around</strong>——抽样观察, 升级 guidance.
</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>spot 哪些问题真的可解</strong>——这是最值钱的能力.
</div>
</div>

<div class="mt-4 tiny">
Rob: "<em>I'm really kind of loathed to give strong pronouncements about what humans will do because by the time people watch our podcast, that might not be true anymore.</em>"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./human-job-now.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这期最哲学的一句: \$100 钞票

<div class="mt-5 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="quote-block text-lg">
"No one leaves a hundred dollars bank note on the floor unless it's only just appeared there.
And so if a problem has been solvable for a long time, it's probably already got solved.
Things are interesting when a problem only just became solvable."
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-slate-50 border border-slate-200 rounded">
<div class="font-bold mb-2 text-sm">"超能力" = 同时敏感于两端</div>
<div class="text-xs space-y-1 opacity-90">
<div>① 世界哪里还不对</div>
<div>② landscape 哪里刚刚移动 (新模型 / 新工具)</div>
</div>
</div>

<div class="p-4 bg-orange-50 border border-orange-200 rounded">
<div class="font-bold mb-2 text-sm">为什么这是稀缺技能</div>
<div class="text-xs opacity-90">
能解又没人解的问题 = 刚刚浮现的窗口.
最值得花精力的, 不是大家都在抢的, 是<strong>只刚刚变得可行</strong>的.
</div>
</div>

</div>

<div class="mt-5 tiny">
Demetrios 接的下一句也好: "<em>The best skill that I can have is being able to articulate what I want.</em>"
Rob 同意: 知道哪些问题需要解, 是 remarkably difficult skill.
</div>

---

# Rob 的 stack: Claude / Codex / Gemini

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 bg-blue-50 border-2 border-blue-300 rounded text-center">
<div class="text-3xl font-bold text-blue-700">Claude</div>
<div class="text-xs mt-2 opacity-80">daily driver</div>
<div class="mt-3 text-xs text-left">
"<em>Claude's my daily driver.</em>"
</div>
</div>

<div class="p-4 bg-orange-50 border-2 border-orange-300 rounded text-center">
<div class="text-3xl font-bold text-orange-700">Codex</div>
<div class="text-xs mt-2 opacity-80">备胎</div>
<div class="mt-3 text-xs text-left">
"<em>I use Codex when I run out of Claude credits...
Codex isn't bad. It's a constant leapfrog race.</em>"
</div>
</div>

<div class="p-4 bg-red-50 border-2 border-red-300 rounded text-center">
<div class="text-3xl font-bold text-red-700">Gemini</div>
<div class="text-xs mt-2 opacity-80">观望中</div>
<div class="mt-3 text-xs text-left">
"<em>I try Gemini every now and then to see has it got good yet
and I'm saying, no, it hasn't got good yet.</em>"
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>这就是 Brumi 的设计立场:</strong>
"<em>I wouldn't wanna lock myself into a workflow that requires me to only use Claude...
it's good to be using a platform and setup which isn't built by one of the major providers.</em>"
Brumi 是开源的, works with all CLI agents.
</div>

---

# 总结: 这期的"操作系统升级"清单

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
☐ 写一个 <strong>feature walkthrough doc</strong> skill, 强制 agent 截图自证
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
☐ 看到不喜欢的代码风格, 让 agent <strong>写 lint 规则</strong>固化
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
☐ 每个 file 头加文档注释, 每个 folder 加 <strong>README</strong>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
☐ 改用 <strong>plan.md + 3-5 个问题</strong>替代 plan mode
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
☐ 试着同时跑 5 个 agent, 同任务不同角度, 挑赢家
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
☐ 看到 agent 在 hard 的事上耗时 → <strong>写工具 / 脚本</strong>
</div>

<div class="p-3 bg-slate-100 border-l-4 border-slate-500 rounded">
☐ 每天问一次 agent: <strong>"what was hard?"</strong>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-400 rounded">
☐ 不要 lock 在单一 provider, Claude + Codex + 一个开源 IDE
</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得记住的几句, 都已 grep 验证:</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"You should teach your agents to manage up."
<span class="text-xs opacity-60 not-italic ml-2">— 整集核心隐喻</span>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"I don't look at the code. So when I merged code, most of the time I do not actually try the app."
<span class="text-xs opacity-60 not-italic ml-2">— 凭 walkthrough doc 决策 merge</span>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"The main role of a human when working with a team of agents is coming up with the validation processes."
<span class="text-xs opacity-60 not-italic ml-2">— 人的新工作描述</span>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"The cool thing about agents, is you can waste their time."
<span class="text-xs opacity-60 not-italic ml-2">— 解锁 refactor / 并行的成本不对称</span>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"Merging is just a solved problem now."
<span class="text-xs opacity-60 not-italic ml-2">— 并行规模化的关键解锁</span>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Ask the agent to tell you what was hard. He'll tell you."
<span class="text-xs opacity-60 not-italic ml-2">— 新型 tech debt 的入口</span>
</div>

<div class="p-2 bg-slate-100 border-l-4 border-slate-500 rounded italic">
"No one leaves a hundred dollars bank note on the floor unless it's only just appeared there."
<span class="text-xs opacity-60 not-italic ml-2">— "哪些问题值得现在解决"</span>
</div>

</div>

---
layout: end
---

"Things are interesting when a problem<br/>only just became solvable."

<div class="mt-6 text-sm opacity-60">— Rob · MLOps.community · 2026</div>
