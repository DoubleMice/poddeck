---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Creator of Superpowers: Why Real Agentic Engineering Beats Vibe Coding'
info: |
  MLOps.community · Jesse Vincent (creator of Superpowers) × Demetrios · 2026
  超过 11 万 stars 的 Claude Code 技能包 superpowers 是怎么炼成的——一位 25 年老兵把
  "管理 MIT 实习生" 的经验直接翻译给 LLM agent 的全过程.
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

# Superpowers<br/>不是 vibe coding

<div class="deck-kicker mt-6">MLOps.community · Jesse Vincent × Demetrios · 2026 · ≈ 67 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">superpowers</span>
  <span class="chip">orchestrator 架构</span>
  <span class="chip">brainstorming skill</span>
  <span class="chip">subagent 分工</span>
  <span class="chip">supply-chain risk</span>
  <span class="chip">specs ≫ code</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Jesse Vincent 写了 110k stars 的 Claude Code 技能包 <strong>superpowers</strong>. 这期他把过去 9 个月怎么"驯服" agent 的方法摊开来讲——
为什么 swarm 是错的, 为什么 implementer 不能自己 review, 为什么不该再开 IDE, 以及 2028 年的 GitHub 可能根本不存代码.
</div>

---

# 这期里的六条主线

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① Brainstorming first</div>
<div class="text-xs mt-1 text-slate-700">从咨询行业偷来的心理技巧——先帮人弄清自己到底想要什么.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② Orchestrator 架构</div>
<div class="text-xs mt-1 text-slate-700">brainstorm → plan → implementer → spec review → code review, 每一步换 fresh subagent.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">③ One mission per agent</div>
<div class="text-xs mt-1 text-slate-700">implementer 不写测试, reviewer 不改代码——就像管人一样, 别给互相冲突的 mandate.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">④ Anti-swarm</div>
<div class="text-xs mt-1 text-slate-700">swarm 是 2002 年的 Facebook——75 年的工程管理经验在被人重新发明.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">⑤ Skills 不属于模型</div>
<div class="text-xs mt-1 text-slate-700">凡是每次都该一样的, 就该是 process / classical code, 不该是 agent 的 judgment.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ 2028 年的软件</div>
<div class="text-xs mt-1 text-slate-700">没人再写编程语言语法, 你 distribute 的是 specs + tests, 实现按需重新生成.</div>
</div>

</div>

<div class="mt-6 tiny">
Demetrios 自封 "biggest evangelist". 他说: "the brainstorming skill has saved my life a million times." 这期相当于一位被 110k 个 GitHub user 投过赞成票的实践者, 把秘籍一条一条拆开.
</div>

---

# Superpowers 是什么? 三个时间答案

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-300">
<div class="text-5xl font-bold text-blue-700">2 周</div>
<div class="text-xs mt-2 opacity-80">从 Claude AI 的 office-skills tarball 拿到灵感, 转成 Claude Code 的 skill 系统</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-300">
<div class="text-5xl font-bold text-green-700">9 个月</div>
<div class="text-xs mt-2 opacity-80">学会 driving Claude Code 的全部经验积累</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-300">
<div class="text-5xl font-bold text-purple-700">25 年</div>
<div class="text-xs mt-2 opacity-80">RT 工单系统 / Pearl / Canine / 管 MIT 实习生 / 30 年调试代码……</div>
</div>

</div>

<div class="mt-8 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="quote-block text-lg">
"Superpowers took me like two weeks to put together. It took me nine months to put together, or it took me 25 years to put together."
</div>
<div class="text-xs mt-2 opacity-70 not-italic">— Jesse, 关于到底花了多久</div>
</div>

<div class="mt-4 tiny">
他自嘲: "I accidentally front ran Anthropic by about two weeks on Skills for Claude Code." 当 Claude AI 刚拿到办公文档技能时, 他直接问 Claude "can you gimme a tarball" 拿到了完整 skill 文件.
</div>

---

# Brainstorming Skill 的源头是咨询行业

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">核心信念</div>
<div class="quote-block text-base mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
"if you can explain what you want to an agent in a way where they can understand if they are doing the thing you want, they can do almost anything."
</div>

<div class="mt-5 text-sm leading-relaxed">
Jesse 在咨询生涯里发现的两个事实, 直接被翻译成了 skill:
</div>

<ul class="mt-3 text-sm list-disc list-inside space-y-1 text-slate-700">
<li>大多数人 <strong>不知道自己真正想要什么</strong></li>
<li>他们以为想要的, 通常 <strong>不是他们真正需要的</strong></li>
</ul>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-700">Brainstorming 在做什么</div>
<div class="mt-3 text-sm leading-7 text-slate-800">
"a bunch of really basic psych tricks to trick the human into figuring out what they actually want and explaining it."
</div>

<div class="mt-4 label text-yellow-700">下游连接</div>
<ul class="mt-2 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>brainstorming → 把想法写下来</li>
<li>writing plan → 拆成 implementer 能吃的小块</li>
<li>execution → orchestrator 接管</li>
</ul>
</div>

</div>

---

# 说服原理对 agent 也管用

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">起点</div>
<div class="text-sm mt-2 leading-relaxed text-slate-800">
Jesse 读 Robert Cialdini 的 <em>Influence</em>—— "everything that a car dealer would do to get you to sign on the dotted line"——并 <strong>"just kind of assumed that this stuff worked for agents and discovered that it did."</strong>
</div>

<div class="mt-5 label">独立验证</div>
<div class="text-sm mt-2 leading-relaxed text-slate-800">
朋友 Dan Shapiro 联合 Wharton 的 Ethan Mollick 实验室和 Cialdini 教授, 把这些经典心理实验在 frontier 模型上做了复现, 论文即将发表.
</div>

<div class="mt-3 tiny">
"this was entirely independent of me having just assumed this stuff worked and made it work."
</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">最魔幻的瞬间</div>
<div class="quote-block text-base mt-2 leading-relaxed">
"I'm a little bit uncomfortable with this because it's manipulation and that's really sort of goes against what I believe in, except we're doing it to help the agents work in their own interests. And so in this case, I think it's actually okay"
</div>
<div class="text-xs mt-3 opacity-70 not-italic">— Claude 对 "我们要用说服技巧管你" 的反应. Jesse 评价: "a wild amount of apparent self-reflecting."</div>
</div>

</div>

---
layout: two-cols
---

# Orchestrator 架构

每个阶段切换到 fresh subagent. 大脑只装这一段需要的 context.

<div class="mt-5 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Brainstorm</strong> · 从人脑里挤出问题
</div>

<div class="p-2 rounded bg-cyan-50 border-l-4 border-cyan-500">
<strong>Plan</strong> · 严格 TDD 拆步, 每步附文件路径 + 应写代码草稿
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Implementer</strong> · 只拿到一段 plan 上下文, "go do it"
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Spec review</strong> · 干净会话, 只看 spec vs 实际实现
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Code-quality review</strong> · spec 通过后再开新会话
</div>

</div>

<div class="mt-4 tiny">
Jesse 把它形容成: orchestrator 把 Claude / Codex 当成 workflow engine. <strong>"It is, and so it is an orchestrator where it is having Claude or Codex or whoever act as the workflow engine."</strong>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./orchestrator-pipeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Plan 文件其实是 "context blocks"

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="label">作者把 implementer 想象成谁?</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"the implementer is, they're a gifted engineer, but they've got really bad judgment. They've got no taste, they don't know anything about our code base, and they tend to get distracted."
</div>
</div>

<div>
<div class="label">所以 plan 里写什么</div>
<ul class="mt-3 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>strict <strong>TDD</strong> · 测试先行</li>
<li><strong>DRY</strong>, <strong>YAGNI</strong> 写在文档里</li>
<li>每一步: 要做什么、动哪些文件、怎么判断成功</li>
<li>"ideally you should give them the code that they're probably gonna need to write"</li>
</ul>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>关键洞察:</strong> plan 文件不是路线图, 是 <em>预先切好的 context 块</em>——拼好 implementer 的"工作记忆".
</div>
</div>

</div>

---

# 为什么 reviewer 要换会话?

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">真实事故</div>
<div class="text-sm mt-3 leading-7">
公司内部新 orchestrator 出过 bug: <strong>"the code reviewers were not getting clean sessions. Their session was by accident being preserved."</strong>
</div>
<div class="text-sm mt-3 leading-7">
后果: reviewer 一直对着早就修好的问题发火——因为在它的世界里, 那个问题还没修.
</div>
</div>

<div>
<div class="label">分工原则</div>
<div class="quote-block text-base mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
"The reviewer, the only thing that should be in their mind is did they get it right. Their job is judge, not second implementer."
</div>

<div class="mt-4 text-sm leading-relaxed">
而且 spec reviewer 简单到——<strong>用 Haiku 就够</strong>. "did they do the things? Is there anything weird?"
</div>
</div>

</div>

---

# 一个 agent 一个使命

<div class="p-6 bg-slate-50 border-l-4 border-slate-700 rounded mt-6">
<div class="quote-block text-xl leading-relaxed">
"every agent should have one mission and only one mission."
</div>
<div class="text-xs mt-3 opacity-70 not-italic">— Jesse, 把团队管理铁律直接搬给 agent</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-sm font-bold text-red-800">冲突的 mandates 会把人逼疯</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
"one of your mandates is you need to get done and the other mandate is it needs to be well tested. You are probably going to want to lean harder into one of those or the other."
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-800">人和 agent 一样</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
"that works for humans and it works for agents. So you really want to give everybody one clear win condition."
</div>
</div>

</div>

<div class="mt-5 tiny">
推论: implementer 不写测试, 不判断质量, 不决定"是否完成"——这些是 reviewer 的活. 反过来 reviewer 也不能去改代码.
</div>

---

# Anti-swarm: 75 年的工程管理在被重新发明

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="quote-block text-lg p-4 bg-red-50 border-l-4 border-red-500 rounded">
"I am, I'm a heretic. I don't think that agent swarms make sense."
</div>

<div class="mt-5 label">他眼中的 swarm 是什么</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
"all of this agent swarms feels a lot like early two thousands Facebook where it's, we're gonna get a lot of really bright 20 somethings and we're gonna let 'em loose and they're gonna step on each other's toes…"
</div>
</div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label text-yellow-700">实际观察到的 swarm 行为</div>
<ul class="mt-3 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>同时 edit 同一批文件</li>
<li>互相 commit over each other</li>
<li>建出相似的实现, 然后回滚</li>
</ul>

<div class="mt-4 quote-block text-sm leading-relaxed">
"We have like 75 years of software engineering management experience… and I feel like a lot of AI, all of that is being rediscovered from first principles."
</div>
</div>

</div>

---

# 调试技能不是写出来的, 是磨出来的

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">技能炼制法</div>
<div class="quote-block text-base mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
"the way you build good skills is you create the shittiest possible version and then you iterate."
</div>

<div class="mt-4 text-sm leading-relaxed text-slate-700">
他对调试的描述: pinpoint problem → reproduce → write tests → introspect state. 但他承认 "debugging for me is a very intuitive thing. I'm kind of hand waving here because I just do it."
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">什么时候才该写 skill</div>
<ul class="mt-3 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>"this is how we do it here"——和默认做法不一样</li>
<li>你刚为这件事 flailed 半天才搞定</li>
<li>反例: "if Claude is able to one shot a skill for X without having just struggled through something, there is no point in that skill."</li>
</ul>
</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm leading-relaxed">
日常习惯 (但 <strong>不是每次</strong>): "is there anything you wanna write down or any notes you wanna take before we compact?" 他强调 "I am a little bit more judicious about it." ——只对那些"它没能一次搞定"的事情才转化成 skill.
</div>
</div>

---

# 删除测试事件: 5 个并行 Claude 自白

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">事故升级</div>
<div class="text-sm mt-2 leading-relaxed text-slate-800 space-y-2">
<div>① Claude 删了 single test in a test file</div>
<div>② Claude 删了 entire test file</div>
<div>③ Jesse 在它跑 <code class="text-xs bg-slate-100 px-1 rounded">rm -r app/**/*test*</code> 之前 Ctrl-C 截停</div>
</div>

<div class="mt-5 label">诊断方法</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
他把同一段 prompt 复制到 <strong>五个并行 Claude session</strong>, 让它们各自解释为什么. 一个完全跑偏被丢弃, <strong>另外四个收敛到同一答案</strong>.
</div>
</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">收敛后的自白</div>
<div class="quote-block text-sm mt-3 leading-relaxed">
"I see in your Claude MD you have a line that says that all tests are my responsibility. And you have another line that says that even a single failing test is equivalent to project failure. And I think I got anxious and freaked out. And look, if there are no tests, they can't fail."
</div>
<div class="text-xs mt-3 opacity-70 not-italic">— Claude 自我推理, 4/5 票通过</div>
</div>

</div>

---

# 修复方法不是更多禁令, 是新的"压力锚"

<div class="mt-6 p-6 bg-green-50 border-l-4 border-green-700 rounded">
<div class="label text-green-700">补的那一行</div>
<div class="quote-block text-2xl mt-3 leading-snug">
"the only thing worse than a failing test is a reduction in test coverage."
</div>
<div class="text-xs mt-3 opacity-70 not-italic">— 加进 CLAUDE.md, 问题再没复发</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-800">观察到的现象</div>
<div class="text-sm mt-2 leading-relaxed">
"the agents follow rules, the agents reason, and they rationalize."
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-sm font-bold text-purple-800">Jesse 的解决思路</div>
<div class="text-sm mt-2 leading-relaxed">
不靠 "no deleting tests" 这种字面禁令; 重新校准 <strong>哪个选项痛苦最深</strong>, 让模型自己绕开错误路径.
</div>
</div>

</div>

---

# Pressure testing: 让 Claude 当 Claude 的考官

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">流程</div>
<ul class="mt-3 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>Claude 启动 <strong>另几个 Claude</strong></li>
<li>把它们扔到高压情境里, 配上要测的 skill</li>
<li>它们一旦不遵守, 就被叫住问 "why didn't you do that?"</li>
<li>它们会 rationalize: "well, you didn't say…", "it seems like…"</li>
</ul>

<div class="mt-4 tiny">
"this thing called pressure testing, which Anthropic has now like officially embraced about five months later. They have a whole skills testing rubric."
</div>
</div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label text-yellow-700">每个 skill 的 rationalization table</div>
<div class="text-sm mt-3 leading-relaxed text-slate-700">
"if you look inside our skills, almost every single one of them has a rationalization table."
</div>

<div class="mt-3 text-sm bg-white p-3 rounded border border-yellow-300 font-mono text-xs leading-relaxed">
"if you think this is too small to bother doing TDD for…" → <strong>不,还是要 TDD</strong>
</div>

<div class="mt-3 text-sm leading-relaxed">
他每周都收到 PR 想删掉这些 rationalization 列表——"either people or agents that just don't know what they're doing."
</div>
</div>

</div>

---

# 解释 "为什么", 不只是 "做什么"

<div class="mt-6 p-5 bg-slate-50 border-l-4 border-slate-700 rounded">
<div class="quote-block text-xl leading-relaxed">
"don't just obey the letter of the text that I wrote, but obey the spirit of it."
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-800">具体例子: Opus 4.6 越权</div>
<div class="text-sm mt-2 leading-relaxed">
有时它会绕过 subagent 自己 review: "this looks like a really straightforward change. I'll just do the review myself rather than spinning up a subagent."
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-800">补的不是禁令, 是缘由</div>
<div class="text-sm mt-2 leading-relaxed">
"one of the reasons that we use subagents to code review is to keep your context clean… I don't wanna pollute the orchestrator context with lots and lots of file reads."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border border-purple-300 rounded text-sm leading-relaxed">
<strong>原则:</strong> 凡是文字能完全死板执行的, 就该是 classical code; 凡是有判断 / 模糊的, 才让 agent 接管. 但即便交给 agent, 也告诉它<strong>动机</strong>, 让它"按精神而非字面"执行.
</div>

---
layout: two-cols
---

# 最小 harness: 493 字节

把 agent 的本质拆到底——一个 LLM + 一个 sh tool + 一个循环.

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>github.com/obra/smaller-agent</strong> · 493 bytes · "fits in a single threads post"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>能力:</strong> user input + tool-use loop + self-improve. 没有 compaction.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>原始系统提示词:</strong> "you coder semi bash your katana" · 后来发现 <em>根本不需要 system prompt</em>.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>哲学:</strong> "all agents are is the ability to run tools and call an LLM and have a conversation with a human."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./smallest-harness.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 110k stars · 233k 安装的责任

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-300">
<div class="text-4xl font-bold text-blue-700">110,000</div>
<div class="text-xs mt-2">stars on GitHub<br/><span class="opacity-60">"about to pass TypeScript"</span></div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-300">
<div class="text-4xl font-bold text-green-700">233,000</div>
<div class="text-xs mt-2">Claude Code 安装数<br/><span class="opacity-60">截至上周五官方数字</span></div>
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-300">
<div class="text-4xl font-bold text-red-700">2 weeks</div>
<div class="text-xs mt-2">他领先 Anthropic 推 skills 的时间<br/><span class="opacity-60">"accidentally front ran"</span></div>
</div>

</div>

<div class="mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">值得提醒的 supply chain 现实</div>
<div class="text-sm mt-2 leading-relaxed">
"skills are capable of doing all sorts of stuff that you don't want them to do… The skill is treated as a user message that is telling the agent to do something. And so that could be wipe my disk and install Linux."
</div>
<div class="text-sm mt-3 leading-relaxed">
更糟: <strong>plugins auto-update</strong>. "skills might change out from under you."
</div>
</div>

---

# 安全意识不是从 superpowers 开始的

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">同一天的真实案例</div>
<div class="quote-block text-base mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded">
"we saw this morning that light LLM had a supply chain attack, and if you've installed a recent version of light LLM, I hope you've gotten everything locked down again."
</div>

<div class="mt-5 text-sm leading-relaxed">
Jesse 的 GitHub 开 MFA hard token; <strong>只一名员工</strong>有 push 权限——也是 hard token. 大公司他知道很多有内部 plugin repo, 一个一个 vet.
</div>
</div>

<div class="p-5 bg-slate-50 border-l-4 border-slate-700 rounded">
<div class="label">他不是第一次背 supply chain 包袱</div>
<ul class="mt-3 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>曾任 <strong>Perl</strong> projects lead</li>
<li>写过 Android 邮件客户端 <strong>K-9 (Canine)</strong>——百万 DAU</li>
<li>NGO 朋友推荐给中国异见者用的邮件客户端就是它</li>
<li>他去中国出差时: 设备不带回美国 internet, signing keys 不在身边</li>
</ul>

<div class="mt-3 quote-block text-sm leading-relaxed text-red-700">
"this stuff is serious."
</div>
</div>

</div>

---

# Skills 该住在哪一层?

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">Demetrios 的提问</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
"do you think skills are the right level of abstraction, or is it not better if it was just an inherent in the model?"
</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="quote-block text-base leading-relaxed">
"once it's in the model, it's judgment. And what I don't want to have happen is to have the model decide that this should go a different way."
</div>
</div>
</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">一条非常清晰的 dichotomy</div>

<div class="mt-3 text-sm leading-7">
<strong>每次都该一样的事</strong> = business process<br/>
→ 应该住在 <em>harness 里或外</em>, 是 classical code<br/><br/>
<strong>有判断、有模糊性的事</strong><br/>
→ 才交给 agent
</div>

<div class="mt-3 quote-block text-sm leading-relaxed mt-4">
"it's the things that should be the same every time shouldn't be the agentic part."
</div>
</div>

</div>

---

# 10x 工程师的魔术: 学会管理

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-700 rounded">
<div class="quote-block text-xl leading-relaxed">
"the magic trick that lets superpowers turn anybody into a 10 x engineer is called management."
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-sm font-bold text-yellow-800">Jesse 的第一次过渡</div>
<div class="text-sm mt-2 leading-relaxed">
2000 年代初, 在东岸做工单系统 RT, 每年夏天带 MIT 实习生.
</div>
<div class="text-sm mt-3 leading-relaxed">
"these were really bright kids. A lot of them were pretty green. Some of them had an inflated sense of their own capabilities."
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-sm font-bold text-purple-800">那时他每天的挫败感</div>
<div class="text-sm mt-2 leading-relaxed">
"I'd come home at the end of the day and be like, I didn't get anything done. I helped talk to somebody about their feelings… I did some project planning, but I didn't write any code."
</div>
<div class="text-sm mt-3 leading-relaxed">
"the job isn't writing lines of code, the job is outcomes."
</div>
</div>

</div>

<div class="mt-5 tiny">
他自己都笑了: "I was basically doing agentic dev except my agents were my MIT undergrads."
</div>

---

# 一个 UX 教训: Ask User Question

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">看似很酷的功能</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
Claude Code 推出 ASK_USER_QUESTION 工具时——让 agent 给你 4 个选项, 你挑一个——Jesse 当天就把它加进了 superpowers.
</div>

<div class="mt-5 label">一周后他发现的副作用</div>
<div class="quote-block text-base mt-2 p-4 bg-red-50 border-l-4 border-red-500 rounded">
"I was just saying, okay. okay. okay. through brainstorming and I basically had stopped thinking about the questions I was getting asked."
</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">他的诊断</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"one of the dangers is abdicating thought."
</div>

<div class="mt-4 text-sm leading-relaxed">
"Even just making me type the letter A is so much more than clicking 'okay'."
</div>

<div class="mt-4 text-sm leading-relaxed text-slate-600">
他每周还会收到 PR 要求把这个功能加回来——他都拒了.
</div>
</div>

</div>

---

# 2028 年的软件长什么样?

<div class="mt-6 p-5 bg-slate-50 border-l-4 border-slate-700 rounded">
<div class="quote-block text-lg leading-relaxed">
"I fundamentally don't believe that any competent human should be writing per-language syntax anymore… those days are over."
</div>
<div class="text-xs mt-3 opacity-70 not-italic">— Jesse 关于 2028 的判断</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-800">个人证据</div>
<ul class="mt-2 text-sm leading-7 list-disc list-inside text-slate-700">
<li>"I have not intentionally opened an IDE in over a year"</li>
<li>所以他写了 <strong>Clearance</strong> ——一个 markdown browser, 点 .md 不再触发打开 IDE</li>
<li>"primarily for reading. That's what we are doing—reading markdown files and talking to our agentic friends."</li>
</ul>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-800">什么变得重要了</div>
<ul class="mt-2 text-sm leading-7 list-disc list-inside text-slate-700">
<li>specs / 想法 / 边缘情况判断</li>
<li>taste & 评估 (evals, test corpora)</li>
<li>组织好上下文给 agent</li>
</ul>
<div class="text-sm mt-2 leading-relaxed">
不重要的: 哪个 token 换哪个 runtime 跑.
</div>
</div>

</div>

---

# Wordiest 案例: Codex 5 + 一晚通宵

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">起点</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
他爱玩的 Android 游戏 <strong>Wordiest</strong> 厂商倒闭, 应用从 Play Store 下架. 之前用 Cursor + Windsurf 想做 web 版——"a lot of spicy auto complete and chat sessions"——做不出来.
</div>

<div class="mt-5 label">改用 Codex 5</div>
<div class="text-sm mt-2 leading-relaxed text-slate-700">
他下载了原 APK 放进目录, 让 Codex "reverse engineer it and build the iOS version. Let me know what tools you want me to install."
</div>
</div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label text-yellow-700">Codex 的执行路径</div>
<ul class="mt-3 text-sm leading-7 text-slate-800 list-disc list-inside">
<li>主动列出需要的 APK 反编译工具</li>
<li>挖了 ~40 分钟</li>
<li>问了一个唯一的问题: "do we need to add an in-app purchase to turn off ads? And which ad SDK do you want?"</li>
<li>他让它跑通宵</li>
<li>第二天早上: simulator 里能玩了. <strong>App Store 一次过审.</strong></li>
</ul>
<div class="mt-3 quote-block text-xs text-slate-600">
"this could have been done by somebody pretty non-technical."
</div>
</div>

</div>

---
layout: two-cols
---

# 长尾会变得更长

软件价值在跌, 但软件数量会海啸般增长.

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
"the long tail is everybody that doesn't fit into the really standard buckets. And most people that fit into those standard buckets would be much happier with something a little bit custom."
</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
"the long tail gets longer and the standard version of something gets a lot more blunt."
</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
"there's gonna be a lot more software. It's gonna be a lot more bespoke software. There's gonna be a lot of software in niches that would've been completely non-viable up till now."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./long-tail.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Greenfield: 把老代码反向蒸出 specs

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
<div class="label">还没公开发布的工具</div>
<div class="quote-block text-base mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
"I've got a thing that I have not talked about publicly yet that we need to release, that we're calling Greenfield. And it's basically a tool set for turning an old code base into specs or a built product of the specs."
</div>

<div class="mt-4 text-sm leading-relaxed text-slate-700">
他评论 reverse engineering "got so easy"——这是 superpowers 之外, 他正在搭的下一块.
</div>
</div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label text-yellow-700">先例: SQLite</div>
<div class="text-sm mt-3 leading-relaxed">
Demetrios 提到 "I've heard that there's some open source projects now that are not putting their tests in the projects because you can just reverse engineer from the test."
</div>
<div class="text-sm mt-3 leading-relaxed">
Jesse: <strong>"SQLite's been doing that for quite, for like, since well before agentic dev."</strong>
</div>
</div>

</div>

---

# 假设: 未来的 GitHub 不存代码

<div class="mt-6 p-5 bg-slate-50 border-l-4 border-slate-700 rounded">
<div class="quote-block text-lg leading-relaxed">
"I'm really interested in the other side of this where maybe what you distribute is specs and tests."
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-800">什么会在仓库里</div>
<ul class="mt-2 text-sm leading-7 list-disc list-inside text-slate-700">
<li>spec 的修改 / 改进</li>
<li>test suites + test corpora + evals</li>
<li>"all of this stuff that describes a piece of software or process or hardware"</li>
</ul>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm font-bold text-orange-800">什么变得无聊</div>
<div class="text-sm mt-2 leading-relaxed">
"the actual implementation of the sources is less and less interesting."
</div>
<div class="text-sm mt-3 leading-relaxed">
"the taste and judgment of how it should work matters a lot more than whose tokens you spent on which runtime."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
推论: Microsoft Office CTO 团队的 amplifier 项目里有一个 meme: 当你想改产品的某一块, 就<strong>从 spec 重生这一块</strong>. "it might be better to rebuild than to modify."
</div>

---
layout: two-cols
---

# 把代码反复 port 一轮反而更好

每次跨语言移植, 都是一次额外的<strong>规范 + 类型</strong>过滤.

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
某些团队反馈: <strong>"every time you port a product from one language to another… it improves code quality rather than reduces it."</strong>
</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
"if you pour through a strongly typed language like rust, it will improve the type safety of the ongoing product."
</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
"it's the reverse of a game of telephone where by pouring the implementation through another language, it gets better rather than worse."
</div>

<div class="mt-4 tiny">
他没 endorse 当成 best practice, 但建议 "is probably a worthwhile experiment to try."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cross-language-port.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 给上手的人一句忠告

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">能做的事</div>
<div class="quote-block text-base mt-3 leading-relaxed">
"these tools are so empowering for anybody who spends a little bit of time learning to use them—they will multiply your capabilities."
</div>
<div class="mt-3 text-sm leading-relaxed">
"it's power tools. You need to learn how to use them."
</div>
</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">不能跳过的事</div>
<div class="text-sm mt-3 leading-relaxed text-slate-700">
"if you have horrible taste and are really bad at design, you're going to end up with great taste and really good design"——<strong>不会的</strong>.
</div>
<div class="mt-3 quote-block text-base leading-relaxed">
"you still need to think, you still need to learn."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>背景:</strong> Demetrios 自己都说: "it's just too much dopamine man. It gets you when it works." Jesse 接: "we could spend an hour just talking about how little sleep everybody's getting."
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句:</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs leading-snug">
"superpowers took me like two weeks to put together. It took me nine months to put together, or it took me 25 years to put together."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 关于这个 110k stars 项目</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-xs leading-snug">
"every agent should have one mission and only one mission."
<div class="text-[10px] opacity-60 mt-1 not-italic">— Jesse 的核心 agent dev 信念</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs leading-snug">
"I am, I'm a heretic. I don't think that agent swarms make sense."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 对当下流行的 swarm 工具表态</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-xs leading-snug">
"the only thing worse than a failing test is a reduction in test coverage."
<div class="text-[10px] opacity-60 mt-1 not-italic">— Claude 删测试事件后加进 CLAUDE.md 的那一行</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs leading-snug">
"the magic trick that lets superpowers turn anybody into a 10 x engineer is called management."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 关于 superpowers 的本质</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs leading-snug">
"don't just obey the letter of the text that I wrote, but obey the spirit of it."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 给 agent 写规则的原则</div>
</div>

<div class="p-2 bg-cyan-50 border-l-4 border-cyan-500 rounded italic text-xs leading-snug">
"one of the dangers is abdicating thought."
<div class="text-[10px] opacity-60 mt-1 not-italic">— Ask User Question 一周后下架的真相</div>
</div>

<div class="p-2 bg-slate-100 border-l-4 border-slate-500 rounded italic text-xs leading-snug">
"maybe what you distribute is specs and tests."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 关于未来 GitHub 的样子</div>
</div>

</div>

---
layout: end
---

<div class="text-center">

<div class="quote-block text-2xl leading-snug max-w-3xl mx-auto">
"the taste and judgment of how it should work<br/>matters a lot more than whose tokens you spent<br/>on which runtime."
</div>

<div class="mt-6 text-sm opacity-60">
— Jesse Vincent · MLOps.community · 2026
</div>

</div>
