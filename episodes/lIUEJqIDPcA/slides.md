---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "'Nothing Ever Happens' Is Over - Naval Podcast"
info: |
  Naval Podcast · Naval Ravikant & Babak Nivi · 2026-05-04 · 19:42
  从公司协作架构, 到 AI 集中化、无人机、生物风险、硬件复兴, 最后落到乐观主义。
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

# Nothing Ever Happens<br/>Is Over

<div class="deck-kicker mt-6">Naval Podcast · Naval Ravikant & Babak Nivi · 2026-05-04 · 19 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">organizations as graphs</span>
  <span class="chip">AI consolidation</span>
  <span class="chip">drones & bio</span>
  <span class="chip">hardware renaissance</span>
  <span class="chip">optimism</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
一期 19 分钟的短播客, 但 Naval 把近期的判断压成密度极高的小集. 从公司怎么协作, 一路聊到无人机和暴力的结构, 最后回到为什么我们必须 "irrationally optimistic".
</div>

---

# 这期的六条主线

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① 组织</div>
<div class="text-xs mt-1 text-slate-700">小团队不靠层级和流程, 用 fully interconnected graph.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② AI 是隐式 intranet</div>
<div class="text-xs mt-1 text-slate-700">读代码、读邮件、按需生成 dashboard, 替代显式整理.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">③ AI 集中化?</div>
<div class="text-xs mt-1 text-slate-700">2-4 家实验室还是开源拉散? Naval 给的是问题, 不是答案.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">④ 无人机 / 生物</div>
<div class="text-xs mt-1 text-slate-700">暴力和病毒制造门槛都被下沉, 国家结构会被迫重写.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">⑤ 硬件复兴</div>
<div class="text-xs mt-1 text-slate-700">软件不再是瓶颈, 硬件公司、开源、Nvidia、China 同时获益.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ 乐观需要创造力</div>
<div class="text-xs mt-1 text-slate-700">悲观可以直接外推, 乐观需要想象不存在的工作和制度.</div>
</div>

</div>

<div class="mt-6 tiny">这不是体系化访谈, 更像 Naval 把最近脑子里转的判断挤成一管牙膏.</div>

---

# 起点: Impossible 的组织形态

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
<div class="label">guest 的自我定位</div>
<div class="mt-3 text-lg leading-relaxed">
Naval 的当前公司 <strong>Impossible</strong> 走的是 <strong>hub-and-spoke</strong>:
co-founder 当 CEO, 所有人通过他做产品级聚合.
</div>

<div class="mt-6 p-4 bg-slate-50 border-l-4 border-slate-400 rounded">
<div class="text-sm">
<strong>"We keep a very flat structure."</strong><br/>
没有 Slack, 没有项目管理软件, "I think it's just GitHub."
</div>
</div>
</div>

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">Naval 的偏见</div>
<div class="mt-3 text-base leading-relaxed">
"I actually hate organizational management because I hate organizations."
</div>
<div class="mt-3 tiny">
他不是在贩卖管理哲学, 而是在解释为什么自己只接受小团队. 这一点很重要——后面所有判断都建立在 "我不要管理" 这个前提上.
</div>
</div>

</div>

---

# 公司不是树, 是图

<div class="grid grid-cols-2 gap-8 mt-4">

<div>
<div class="label">传统答案</div>
<div class="mt-2 text-base leading-relaxed">
计算机网络在沟通成本太高时退化成 <strong>层级</strong>: CEO → VP → manager → IC. 整齐, 但代价是绕路、政治和权限.
</div>

<div class="label mt-6">Naval 的偏好</div>
<div class="mt-2 text-base leading-relaxed">
<strong>fully interconnected graph</strong>: 每人直连每人, 中心只有一个轻量 PM 角色.
</div>

<div class="mt-4 tiny">
"Fully interconnected graph is everyone talking to anyone, with a light hub-and-spoke."
</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./org-graph.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 图结构的代价: 节点必须聪明

<div class="quote-block text-xl mt-6 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
"Every node has to be highly intelligent. So that's what you do. You hire highly intelligent people who can operate in a fully interconnected graph."
</div>

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="text-sm font-bold text-blue-900">人才密度高</div>
<div class="text-xs mt-2 text-slate-700">每个节点都要能自己路由、协作、收敛.</div>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded">
<div class="text-sm font-bold text-green-900">沟通靠自治</div>
<div class="text-xs mt-2 text-slate-700">"They just text each other. Literally—they talk one-on-one."</div>
</div>

<div class="p-4 bg-yellow-50 border border-yellow-200 rounded">
<div class="text-sm font-bold text-yellow-900">不适合就走</div>
<div class="text-xs mt-2 text-slate-700">不能在图里自己找路的人, "should just go and find a hierarchical organization".</div>
</div>

</div>

<div class="mt-6 tiny">
注意 Naval 不是说图结构永远更好, 他说的是: 一旦规模逼你做层级, 他个人就会失去兴趣.
</div>

---

# AI 替代 "显式 intranet"

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">旧路径: 显式整理</div>
<ul class="mt-3 text-sm leading-7 text-slate-700">
<li>写 wiki, 标 owner</li>
<li>维护 dashboard / 项目管理工具</li>
<li>组织图找专家</li>
<li>填表汇报进度</li>
</ul>
</div>

<div class="p-5 bg-green-50 border border-green-300 rounded">
<div class="label text-green-700">新路径: AI 在背后做挖掘</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>读代码 / 论文, 给摘要</li>
<li>从 codebase 推断 "谁懂这块"</li>
<li>从邮件、文件夹、设计稿里读现状</li>
<li>"draw me a Gantt chart based on where you think we actually are"</li>
</ul>
</div>

</div>

<div class="mt-7 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>核心位移</strong>: "You don't need the explicit intranet as much anymore."<br/>
组织知识从 "显式整理" 变成 "随问随算".
</div>

---

# Reports on demand

<div class="big mt-6 text-center">reports on demand</div>

<div class="text-center tiny mt-3">Naval 的原话: 不要预先做 dashboard, 要让 AI 每次按当下问题重新生成.</div>

<div class="grid grid-cols-3 gap-4 mt-10">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm font-bold text-blue-900">哪里卡住?</div>
<div class="text-xs mt-2 text-slate-700">从 codebase + 设计 + 邮件里推断真实进度.</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-sm font-bold text-green-900">谁落后?</div>
<div class="text-xs mt-2 text-slate-700">不靠人填表, 直接看 work artifacts.</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm font-bold text-orange-900">缺什么资源?</div>
<div class="text-xs mt-2 text-slate-700">报告不再是固定页面, 而是按问题重建.</div>
</div>

</div>

<div class="mt-7 tiny">
"You can have it build these dashboards on demand, and you can have it update them on demand."
</div>

---

# AI 让职能边界变薄

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="text-base font-bold text-blue-900">AI 工程师可以写 harness</div>
<div class="text-sm mt-3 text-slate-700">
"may not be good for production deployment, but it's better than having to sit around and wait for a software person".
</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="text-base font-bold text-green-900">硬件工程师可以做 bring-up</div>
<div class="text-sm mt-3 text-slate-700">
不再总卡在软件团队排期上, 自己写一点点 SW 把新设备点亮.
</div>
</div>

</div>

<div class="mt-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold text-orange-900">真正的变化不是 "人人都变工程师"</div>
<div class="text-sm mt-2 text-slate-700">
而是每个职能都能做到相邻领域的 <strong>20%–30%</strong>, 接口成本下降, 协作自然变顺.
</div>
</div>

<div class="mt-5 tiny">
最后一句也是 Naval 自己的总结: "It's naturally a force multiplier."
</div>

---

# 抬眼看世界: AI 集中还是开源?

<div class="grid grid-cols-2 gap-8 mt-5">

<div>
<div class="label">Naval 在想的问题</div>
<div class="mt-3 text-base leading-relaxed">
"Two, maybe four, companies that are dominating AI—or five if you count hardware with Nvidia."
</div>

<div class="mt-6 label">他暂时接受的判断</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"Conventional wisdom is going centralized training: two to four companies dominating, data centers and power are the limits, and everyone is rushing towards that."
</div>
</div>

<div class="p-5 bg-purple-50 border border-purple-200 rounded">
<div class="label text-purple-700">还没看清</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>commodity / monopoly / oligopoly?</li>
<li>"Does open source really have a chance?"</li>
<li>"Mag 7 world, where there's just Mag 2 or Mag 1?"</li>
<li>"Can you train AI in a distributed way?"</li>
</ul>
</div>

</div>

---

# AGI 怀疑: jagged intelligence

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-800">实验室的信念</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"Certainly the people in the frontier labs believe it. They've believed it for quite a while."
</div>
<div class="mt-3 tiny">即所有价值最后会被 AI labs 吸收.</div>
</div>

<div class="p-5 bg-blue-50 border border-blue-300 rounded">
<div class="label text-blue-800">Naval 看到的 AI</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"The AI that I'm seeing has <strong>jagged intelligence</strong>. It's also pretty bad at multimodal reasoning."
</div>
<div class="mt-3 tiny">他没说一定不会到 AGI, 而是说他自己看不到稳定的曲线.</div>
</div>

</div>

<div class="mt-7 p-4 bg-slate-50 border-l-4 border-slate-500 rounded text-sm">
"I don't want to be in the futurist business." Naval 主动放弃做预测家, 他强调的是观察, 不是宣言.
</div>

---

# "world model" 不是会生成 3D 世界

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">流行误解</div>
<div class="mt-2 text-sm leading-relaxed text-slate-700">
"Oh, that's a world model, because it looks like you're generating something that looks like a world, and I can wander around in it." — 不是.
</div>

<div class="mt-5 label">Naval 的定义</div>
<div class="mt-2 text-sm leading-relaxed">
agent 体内的因果机制: <strong>act → predict → adjust</strong>, 像 RL 闭环, 而不是看起来像可漫游视频.
</div>

<div class="mt-4 tiny">他点名 Yann LeCun 最近的 JEPA 是这条路上的尝试.</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-model.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# "Nothing ever happens" 已经过期

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-blue-900">他承认还没找到单一原因</div>
<div class="text-sm mt-3 text-slate-700">
"I haven't quite been able to put my finger on why."
</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold text-purple-900">但描述是清楚的</div>
<div class="text-sm mt-3 text-slate-700">
"post-COVID, the world is changing a lot faster" — 地缘、经济、技术同时加速.
</div>
</div>

</div>

<div class="quote-block text-2xl mt-10 text-center p-6 bg-yellow-50 border border-yellow-300 rounded">
"We are living within that Chinese curse of: 'May you live in interesting times.'"
</div>

---

# 资本被迫追 sci-fi

<div class="grid grid-cols-4 gap-3 mt-8 text-center">

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="text-xs label text-blue-800">硬件</div>
<div class="text-sm font-bold mt-1">hardware</div>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded">
<div class="text-xs label text-green-800">航天</div>
<div class="text-sm font-bold mt-1">rockets</div>
</div>

<div class="p-4 bg-orange-50 border border-orange-200 rounded">
<div class="text-xs label text-orange-800">无人机</div>
<div class="text-sm font-bold mt-1">drones</div>
</div>

<div class="p-4 bg-red-50 border border-red-200 rounded">
<div class="text-xs label text-red-800">AI</div>
<div class="text-sm font-bold mt-1">AI</div>
</div>

</div>

<div class="mt-9 p-5 bg-slate-50 border-l-4 border-slate-500 rounded">
<div class="text-base">
"Sci-fi technologies are in high demand. Sci-fi scientists and sci-fi authors are in low supply. Sci-fi engineers are in low supply."
</div>
<div class="tiny mt-3">
他没说会 "立刻有人造太空 GPU", 只是说稀缺信号已经反过来了.
</div>
</div>

---

# 无人机改变暴力的结构

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他给的历史框架</div>
<div class="mt-3 text-sm leading-7 text-slate-700">
每一次主导武器变化, 都重写社会架构:
</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li><strong>rifle</strong> → 农民可以打倒骑士 → 民族国家 + 工厂</li>
<li><strong>nuclear</strong> → "seven to nine really independent sovereign nations" 决定一切</li>
<li><strong>drone</strong> → 暴力下沉到个人</li>
</ul>

<div class="mt-4 tiny">这是 Naval 的概括, 不是嘉宾原话之外的细节.</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./violence-stack.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 攻防不对称

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border border-red-300 rounded">
<div class="label text-red-800">攻击方</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>占据 <strong>kinetic energy</strong> (从上而下)</li>
<li>占据 <strong>surprise</strong> (集结在某点)</li>
<li>"can mass all the attack drones in one area"</li>
</ul>
</div>

<div class="p-5 bg-blue-50 border border-blue-300 rounded">
<div class="label text-blue-800">防御方</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>必须 <strong>spread thin</strong> 守一切目标</li>
<li>唯一便宜是 <strong>short range</strong>: 上升距离短</li>
<li>"drone defense is going to be very difficult"</li>
</ul>
</div>

</div>

<div class="mt-7 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Naval 的引申</strong>: drones 把 "mutually assured destruction" 拉到个人尺度——"if you really hate somebody, in the future, a drone will be able to get them".
</div>

---

# 谁掌握无人机?

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-6 bg-slate-50 border-2 border-slate-300 rounded text-center">
<div class="label">情景 A</div>
<div class="text-lg font-bold mt-3">少数大国掌控全部</div>
<div class="text-sm mt-3 text-slate-700">类似核武器路径, 集中在国家手里, 民众继续在 "umbrella" 下生活.</div>
</div>

<div class="p-6 bg-orange-50 border-2 border-orange-300 rounded text-center">
<div class="label">情景 B</div>
<div class="text-lg font-bold mt-3">完全民主化, 个人即可致命</div>
<div class="text-sm mt-3 text-slate-700">类似步枪路径, 杀伤工具不再只属于国家机器.</div>
</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
Naval 自己的回答: <em>"I don't know which way it goes."</em> 不是不愿想, 是真的没结论.
</div>

---

# 生物风险也在民主化

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">风险面</div>
<div class="text-sm mt-3 text-slate-700">
过去能造生物武器的人, "had both the expertise and had the access—were very low".
</div>
<div class="text-sm mt-3 text-slate-700">
现在 AI 让生物能力像 vibe coding 一样民主化, "the number of people who can vibe code is hundreds or thousands of times greater than the number of people who were coding".
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">防御面</div>
<div class="text-sm mt-3 text-slate-700">
"Now we can also do the opposite, which is hopefully now the same AIs can also research how to create vaccines or how to create things to stop them."
</div>
</div>

</div>

<div class="mt-7 tiny">
注意他自己也加了一个克制的注脚: "I don't want to get people worked up but, in theory..." — 这是假设, 不是预言.
</div>

---

# 防御侧的真正瓶颈不是 AI

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-800">乐观情景</div>
<div class="text-sm mt-3 text-slate-700">
AI 解决医学和生物, 大量数据驱动疫苗、治疗、therapies. <strong>需要</strong>: 拿到所有人的数据集, 看到所有 outcome.
</div>
</div>

<div class="p-5 bg-yellow-50 border border-yellow-300 rounded">
<div class="label text-yellow-800">现实瓶颈</div>
<div class="text-sm mt-3 text-slate-700">
"This data is hidden behind so many silos, and so many regulations and rules." Naval 直接说: "almost no regulations out there as bad as medical regulations".
</div>
</div>

</div>

<div class="mt-7 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold">他的担忧</div>
<div class="text-sm mt-2 text-slate-700">
不是科学不行, 而是 "right to try" 在没有紧急状态前永远过不了. 即便 COVID, 疫苗周期也很慢, 因为不允许健康年轻志愿者主动 "take one for the team".
</div>
</div>

---

# 硬件复兴: 软件不再是同一个瓶颈

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他的诊断</div>
<div class="mt-3 text-sm leading-relaxed text-slate-700">
"Historically the problem with a lot of hardware is that it's very hard to write good software."
</div>

<div class="mt-5 label">现在的解</div>
<div class="mt-3 text-sm leading-relaxed">
要么 AI agent 直接和硬件交互, 要么一个 "bright kid with Claude Code" 几天写完所需 SW.
</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">
"hardware itself is getting unlocked through software" — 这是他这一段的总结句.
</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hardware-unlock.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 谁擅长什么 (Naval 的快速对照)

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-5 bg-blue-50 border border-blue-200 rounded">
<div class="font-bold text-blue-900">Apple</div>
<div class="text-xs mt-3 text-slate-700">"They build great hardware; they build great software."</div>
<div class="text-xs mt-2 text-slate-500">弱: cloud, AI</div>
</div>

<div class="p-5 bg-green-50 border border-green-200 rounded">
<div class="font-bold text-green-900">Google</div>
<div class="text-xs mt-3 text-slate-700">"Very good at cloud, and very good at AI."</div>
<div class="text-xs mt-2 text-slate-500">弱: hardware, consumer SW</div>
</div>

<div class="p-5 bg-orange-50 border border-orange-200 rounded">
<div class="font-bold text-orange-900">长尾硬件公司</div>
<div class="text-xs mt-3 text-slate-700">security cameras, kids toys, programmable lamps.</div>
<div class="text-xs mt-2 text-slate-500">现在: 软件这条腿被 AI 补齐</div>
</div>

</div>

<div class="mt-8 tiny">
Naval 的论点: 大厂往往只擅长一两块. AI 让单点擅长的硬件团队也能交付完整产品体验.
</div>

---

# 谁最想让模型开源?

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="label">他点名的三类玩家</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded">
<div class="text-sm font-bold">China</div>
<div class="text-xs mt-1 text-slate-700">制造大多数 consumer electronics, 开源帮硬件出货.</div>
</div>

<div class="mt-2 p-3 bg-green-50 border-l-4 border-green-400 rounded">
<div class="text-sm font-bold">Nvidia</div>
<div class="text-xs mt-1 text-slate-700">"Just wants to sell as many cards as possible."</div>
</div>

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
<div class="text-sm font-bold">Hyperscalers</div>
<div class="text-xs mt-1 text-slate-700">软件繁荣 → 工作负载 → 云资源消耗.</div>
</div>

<div class="mt-3 tiny">三方共同的句子: 开源会 <strong>"commoditize their complement"</strong>.</div>
</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-source-incentive.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 闭环: 软件 → 模型 → 硬件

<div class="grid grid-cols-3 gap-4 mt-8 items-center">

<div class="p-5 bg-blue-50 border border-blue-200 rounded text-center">
<div class="text-xl font-bold text-blue-900">open source<br/>AI 模型</div>
<div class="text-xs mt-3 text-slate-700">硬件玩家 + China + hyperscaler 同向推动</div>
</div>

<div class="text-center text-3xl">→</div>

<div class="p-5 bg-orange-50 border border-orange-200 rounded text-center">
<div class="text-xl font-bold text-orange-900">软件被商品化</div>
<div class="text-xs mt-3 text-slate-700">长尾硬件不再被劣质 SW 拖死</div>
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 items-center">

<div class="p-5 bg-green-50 border border-green-200 rounded text-center col-span-3">
<div class="text-xl font-bold text-green-900">→ 更多 "interesting usable hardware"</div>
<div class="text-xs mt-3 text-slate-700">"now the software is figured out enough that that hardware becomes unlocked and quite usable"</div>
</div>

</div>

---

# 最后一段: 乐观需要创造力

<div class="quote-block text-3xl mt-10 text-center p-8 bg-yellow-50 border-2 border-yellow-300 rounded">
"Optimism requires creativity."
</div>

<div class="grid grid-cols-2 gap-6 mt-10">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold text-red-800">悲观更容易</div>
<div class="text-sm mt-3 text-slate-700">
失业、战争、环境灾难都能从已有世界直接外推. "It's much easier to imagine the methods of doom."
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-800">乐观更难</div>
<div class="text-sm mt-3 text-slate-700">
下一种工作、下一种繁荣方式没有先例. "It's very hard to predict what the next job will be."
</div>
</div>

</div>

---

# 200 年前的人想不出现在

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-slate-50 border border-slate-300 rounded">
<div class="label">Naval 的类比</div>
<div class="text-sm mt-3 text-slate-700">
"There is no one—no one 200 years ago—who could have imagined how we would end up where we are today."
</div>
<div class="text-sm mt-3 text-slate-700">
当时所有人都在农场上, 想不出今天 10% 的工作.
</div>
</div>

<div class="p-5 bg-blue-50 border border-blue-300 rounded">
<div class="label text-blue-800">他承认风险也是真的</div>
<div class="text-sm mt-3 text-slate-700">
"Sometimes you get really close. COVID was scary." 如果 COVID 更猛, 或核交换发生, 都是真的灾难.
</div>
<div class="text-sm mt-3 text-slate-700">
他不是否认风险, 他在解释 <strong>为什么风险更容易被想到</strong>.
</div>
</div>

</div>

---

# 为什么必须 "irrationally optimistic"

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">他的处方</div>
<ul class="mt-3 text-sm leading-7 text-slate-800">
<li>"We have to nurture optimism."</li>
<li>"We have to reward optimism."</li>
<li>"We have to be irrationally optimistic."</li>
</ul>
<div class="text-xs mt-3 text-slate-500">这是连续三句, 节奏明显, 不是写出来后再润色的.</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">他的隐喻</div>
<div class="text-sm mt-3 text-slate-700">
"Crabs in a bucket": 群体悲观会把任何想往上爬的乐观者拉回去.
</div>
<div class="text-sm mt-3 text-slate-700">
"They might be right, but it's certainly not helping matters."
</div>
</div>

</div>

<div class="mt-8 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-center text-base">
"That's not the person you want to be in a foxhole with."
</div>

---

# 这一集到底新在哪里?

<div class="grid grid-cols-3 gap-4 mt-7">

<div class="p-4 bg-blue-50 border border-blue-200 rounded">
<div class="label text-blue-700">不是新观点</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>组织偏小</li>
<li>开源 / 集中</li>
<li>悲观 vs 乐观</li>
</ul>
</div>

<div class="p-4 bg-green-50 border border-green-200 rounded">
<div class="label text-green-700">新在框架</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>company as graph</li>
<li>暴力的三层 stack</li>
<li>commoditize the complement</li>
</ul>
</div>

<div class="p-4 bg-orange-50 border border-orange-200 rounded">
<div class="label text-orange-700">新在态度</div>
<ul class="mt-2 text-xs leading-6 text-slate-700">
<li>承认 "I don't know" 很多次</li>
<li>不再做 futurist</li>
<li>把乐观说成纪律</li>
</ul>
</div>

</div>

<div class="mt-8 p-4 bg-slate-50 border-l-4 border-slate-500 rounded text-sm">
适合作为短 deck: 主题密度高、可视化强、几条判断都可以独立带走.
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句, 全部 grep-verified:</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<em>"We don't even use Slack."</em>
<div class="text-xs opacity-60 mt-1">— Impossible 的协作风格</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<em>"You don't need the explicit intranet as much anymore."</em>
<div class="text-xs opacity-60 mt-1">— AI 替代显式整理</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<em>"It's naturally a force multiplier."</em>
<div class="text-xs opacity-60 mt-1">— AI 在公司内的现状</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<em>"May you live in interesting times."</em>
<div class="text-xs opacity-60 mt-1">— post-COVID 的相变</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<em>"Drones bring the logic of mutually assured destruction down to the individual level."</em>
<div class="text-xs opacity-60 mt-1">— 暴力结构的下沉</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<em>"Hardware itself is getting unlocked through software."</em>
<div class="text-xs opacity-60 mt-1">— 硬件复兴的机制</div>
</div>

<div class="p-3 bg-slate-50 border-l-4 border-slate-500 rounded text-sm col-span-2">
<em>"We have to nurture optimism. We have to reward optimism. We have to be irrationally optimistic."</em>
<div class="text-xs opacity-60 mt-1">— 这一集真正的 takeaway</div>
</div>

</div>

---
layout: end
---

# "That's not the person<br/>you want to be in<br/>a foxhole with."

<div class="mt-8 text-sm opacity-60">Naval Podcast · 'Nothing Ever Happens' Is Over · 2026-05-04</div>
