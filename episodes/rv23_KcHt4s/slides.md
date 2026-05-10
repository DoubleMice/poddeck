---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The $15B Physical AI Company: Simulation, Autonomy OS, Neural Sim, & 1K Engineers—Applied Intuition'
info: |
  Latent Space · Qasar Younis & Peter Ludwig (Applied Intuition) × Alessio & Swyx · 2026
  把 LLM 部署到没有屏幕、不能出错的物理机器上是另一门手艺：
  仿真 / 操作系统 / 自动驾驶模型三栈, 1000 名工程师, 18/20 OEM 客户, $15B 估值.
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
.label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; font-weight: 600; }
</style>

# The $15B Physical AI Company

<div class="deck-kicker mt-4">Applied Intuition — Qasar Younis & Peter Ludwig</div>
<div class="deck-kicker mt-1">Latent Space · Alessio × Swyx · 2026 · ≈ 70 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">physical AI</span>
  <span class="chip">simulation</span>
  <span class="chip">autonomy OS</span>
  <span class="chip">neural sim</span>
  <span class="chip">1000 engineers</span>
  <span class="chip">L4 trucks</span>
  <span class="chip">world models</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Applied Intuition 给汽车、卡车、矿车、农机、无人机、防务平台卖"让机器变聪明"的技术栈：
仿真器、操作系统、自动驾驶模型. 18/20 全球非中国 OEM 是它客户, 现在在日本跑无人卡车. 这期把它的三个 bucket 全部摊开讲.
</div>

---

# 这期里的几条主线

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① Physical ≠ Screen</div>
<div class="text-xs mt-1 text-slate-700">屏幕里 LLM 出错最多被笑话, L4 卡车出错会出人命. 这两个字"safety critical"改写一切.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② 三个 bucket</div>
<div class="text-xs mt-1 text-slate-700">仿真 + 操作系统 + 自动驾驶模型. 不做芯片, 不做传感器, 是物理 AI 时代的 NVIDIA / 一半 Android.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">③ pre-Android 类比</div>
<div class="text-xs mt-1 text-slate-700">车厂今天像 2007 年的手机厂——50 套 OS, 没法跑 modern AI. Applied 想做物理机器的 Android.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">④ Sim-to-real</div>
<div class="text-xs mt-1 text-slate-700">Neural sim = Gaussian splatting + diffusion. 但有条 "meniscus line", 越过它真车测试反而更便宜.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">⑤ 算力不是瓶颈</div>
<div class="text-xs mt-1 text-slate-700">"我们不是被模型智能限制, 是被部署它们的硬件限制"——onboard 才是物理 AI 的真问题.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ 复利技术</div>
<div class="text-xs mt-1 text-slate-700">OS / sim / models 三个一起复利. 长期看会到 Waymo $126B 量级——但人脑情感上不理解复利.</div>
</div>

</div>

---

# Applied Intuition · 数字一瞥

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 估值
<div class="text-4xl font-bold text-blue-600 my-2">$15B</div>
<div class="text-xs opacity-70">Alessio: "you're worth 15 billion dollars"</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 工程师
<div class="text-4xl font-bold text-green-600 my-2">1000</div>
<div class="text-xs opacity-70">"a thousand engineers" · 据其官网</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 工程师占比
<div class="text-4xl font-bold text-purple-600 my-2">83%</div>
<div class="text-xs opacity-70">"eighty-three percent of the company is engineering"</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 产品数
<div class="text-4xl font-bold text-orange-600 my-2">30+</div>
<div class="text-xs opacity-70">"over thirty products"</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Ex-founders
<div class="text-4xl font-bold text-red-600 my-2">40+</div>
<div class="text-xs opacity-70">"forty-plus founders"</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### OEM 客户
<div class="text-4xl font-bold text-yellow-600 my-2">18/20</div>
<div class="text-xs opacity-70">"top twenty global non-Chinese automakers"</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
覆盖 cars · trucks · construction · mining · agriculture · defense, 用 Peter 的话: "land, air, and sea".
</div>

---

# Physical AI vs. Screen AI

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Screen AI
<div class="text-xs label mt-2">过去三年的主舞台</div>

- 一切都装进屏幕里
- LLM, code complete, 聊天机器人
- 出错最多换一个回答

<div class="mt-3 italic text-sm text-slate-700">
"a lot of the focus, rightfully so in the last, three years has been on large language models, and so everything fits in a screen."
</div>

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### Physical AI
<div class="text-xs label mt-2">没有屏幕, 但能撞死人</div>

- 把 intelligence 放进会动的机器
- L4 truck 在日本路上跑, "as we speak"
- 出错 = catastrophic

<div class="mt-3 italic text-sm text-slate-700">
"We can't have errors. Those are L4 trucks."
</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Qasar 把 "safety critical" 拎成中心词: 这两个字改写技术选型, 改写工程实践, 改写公司能不能活下去.
LLM 错答可以重 prompt, 一辆 80 吨的卡车不能.
</div>

---
layout: two-cols
---

# 三个 bucket

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① Simulation & infra</div>
<div class="text-xs mt-1 text-slate-700">从仿真器起家. RL 训练 / sim-to-real / neural sim 全在这块.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② Operating systems</div>
<div class="text-xs mt-1 text-slate-700">真正的 OS——调度器、内存、消息总线、可靠 OTA. "to write and run great AI, you need a great operating system".</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">③ Autonomy AI</div>
<div class="text-xs mt-1 text-slate-700">基础研究 + 世界模型 + 端到端模型. 还有一个子类: 人机协作 (语音、cabin awareness).</div>
</div>

</div>

<div class="mt-4 tiny">
Peter: "our own technology stack has completely changed, I would say, roughly every two years." 已经历过 4 次重写.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-buckets.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bucket ① · Simulation 是怎么开始的

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 起家做的事
仿真器 + 仿真基础设施.

<div class="mt-2 text-sm">
"if you're trying to build a very complex software system that involves moving machines, you need to test that, and the best way to test it is it's a combination of virtual developments, a simulation, and then also obviously real world testing."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 关键不在仿真本身
而在仿真器和真车的 **correlation**.

<div class="mt-2 text-sm">
"a very careful process of that correlation between the simulation results and the real world results and ensuring that the simulator is in fact accurate to that."
</div>

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>RL 是 sim 的最大用户.</strong> Peter: "a lot of the best advancements happening in a lot of these AI systems right now in some way relate to reinforcement learning, and with now we have lots of compute, and you can do tons of interesting things for reinforcement learning."
</div>

<div class="mt-4 tiny">
作者概括: 仿真不是"造一个虚拟世界给车跑", 而是"先造一个虚拟世界, 再花更多力气把它和真世界对齐, 再用 RL 在里面训出真车能用的策略".
</div>

---

# 一个机器人会过热的故事

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 问题
人形机器人做杂技 demo 很惊艳, **十分钟之后就过热**. 实际不能持续工作.

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 text-sm rounded">
Peter: "these systems actually overheat" — 谈到 humanoid 时承认这是行业通病.
</div>

</div>

<div>

### 仿真里的解法
把 actuator 温度做成仿真**参数**, 让 RL policy 在训练时就知道"自己越动越热".

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-sm rounded">
"the robot can actually adjust its motions in the simulation to account for the fact that, oh, it knows that as it's moving, it's actually beginning to overheat this motor."
</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>没建模的参数 = RL 看不见的悬崖.</strong> 如果训练时温度不在仿真里, "your RL policy might It will disregard that. And now you run that on the robot and the robot will overheat and fail."
</div>

<div class="mt-4 text-sm opacity-70">
Alessio 反过来追问: "How do you have all of these parameters taken care of while also understanding the deployment environment?
Like temperature is like a great example, right? Why did you make my robot worse when it runs in like a freezer?"
冰柜里的机器人不需要怕过热——这就是仿真设计真正难的点.
</div>

---
layout: two-cols
---

# Meniscus line — 仿真不是免费的

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>仿真便宜的区段</strong><br>
你能用便宜的仿真覆盖大部分 case, 拿到很好的训练 / eval 信号.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>meniscus line</strong><br>
Qasar 给了一个意象——液面贴杯沿那条弯曲的线. 越过这条线, 仿真要做到那么真就**比直接上真车还贵**.
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>真车区段</strong><br>
"There's not, there's not this magical land where you're not gonna do that." 真世界测试不可能省.
</div>

</div>

<div class="mt-4 tiny">
Qasar 还给了一个嵌套: 软件 95% 走 CI/CD, 4% 在硬件 rig 上, 1% 真车. 物理 AI 也是这种金字塔, 只是现在世界模型把上面那 95% 拓宽了.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meniscus-line.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Neural simulation = Gaussian splatting + diffusion + 性能

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么需要它
端到端模型直接吃传感器数据出控制信号. 想给它做 RL, 你必须**把传感器数据本身仿真出来**.

<div class="mt-3 italic text-sm">
"to do reinforcement learning on an end-to-end model, you now need to actually simulate all the sensor data."
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 它长什么样
"think of it like a hybrid of Gaussian, splatting and diffusion methods, and where you really care about performance."

<div class="mt-3 text-sm">
仿真不再只靠数学公式扩展, 还能靠**真实数据**扩展——这是世界模型给机器人开的新口子.
</div>

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>性能压倒一切.</strong> Peter: "Like performance is everything. If you can't do enough simulation fast enough and cheap enough, you actually can't get results that are worthwhile."
</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
作者概括: 神经仿真把 "我能仿真什么 = 我有什么公式" 变成 "我能仿真什么 = 我有什么数据 + 什么算力". 仿真和模型训练本质合一.
</div>

---
layout: two-cols
---

# Bucket ② · 车里的 OS, 像 2007 年的手机

车厂的 OS 是 50 个互不相通的 firmware. Peter 在 Google 时正好做过 Android, 看到的现状:

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"physical machines today are more akin to the state of the phone market before Android and iOS existed."
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"they bought all of these phones from the industry, and it turned out they had like 50 different operating systems on these phones."
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
要让现代 AI 跑在车上, 第一步是 **把碎片化整合掉**, 这正是 Android 当年做的事.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pre-android.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# OS 不只是 HMI

很多人一听 "vehicle OS" 想到的是中控屏 (HMI). Peter 解释这只是最浅那层.

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 浅层 (HMI)
触屏、按钮、语音的人机界面. 重要, 但只是 thin top layer.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 深层 (real-time control)
- 电机 / 引擎 / 转向 actuator 的 real-time control
- 多重冗余 (redundancies)
- 实时传感器流式数据
- 内存管理 / 网络 / 消息总线

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
Peter: "Imagine you try to run Microsoft Windows like streaming your sensor data in or controlling the vehicle. Like, the latencies are gonna be absurd. Like, you can never do that."
</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>还得防宇宙射线.</strong> "What if there's a cosmic ray that flips a bit in the middle of the processor that causes some malfunction?" — 必须有 fail-safe.
</div>

---

# 不要把车 brick 掉 · 可靠 OTA

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 行业现状
大部分车厂**几乎不更新**, 即便更新也只更 HMI 一个模块. 想更 CPU 关键模块, "you have to go into the dealer".

<div class="mt-3 text-sm">
Tesla 例外, 大约一个月更新一次.
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Applied 的解
Vehicle 任意模块都能可靠 OTA. 这不容易做——

<div class="mt-3 italic text-sm">
"there's lots of technical, technically deep stuff, in the tech stack to do that in a way that you're not going to accidentally brick a vehicle."
</div>

</div>

</div>

<div class="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-center">
<div class="text-xl">"Bricking a car is a very expensive"</div>
<div class="mt-2 text-xs opacity-70">— Peter, 几乎没把整句说完, 因为大家都懂</div>
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Peter 说这件事: "honestly, like across the industry maybe one of the most just pure impactful things that we've done is we've just, we're, we're now enabling the industry to actually do software updates."
</div>

---

# Better-together stack: 你想买哪一段都行

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>只买 OS</strong><br>
license OS, 自己写 autonomy. 有完整文档, 不绑.
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>只买 dev tools</strong><br>
Sensor Studio 之类, 让你自己搭技术栈.
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>整套 license</strong><br>
OS + autonomy + 工具一起, "better together".
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
Peter: "we are a technology company, and so we license our technology to customers to use how they want."
</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>OS 高度可复用.</strong> "highly reusable. So the fundamental technology is quite universal" — 但因为安全关键系统的芯片更杂 (不止 X86), Applied 的 OS 必须支持多种芯片架构, 这是和 LLM 世界 "默认 CUDA" 的最大区别.
</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
类比 Android: Qasar — "Android has a huge suite of testing and it's a reliable operating system that runs on thousands of devices. And we think we can, we can do the same in all these physical moving machines, with the difference that we're really in a safety critical realm."
</div>

---

# Bucket ③ · Autonomy AI 的两端

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 自动驾驶模型
端到端 (传感器 → 控制信号), 跨 cars / trucks / mining / construction / agriculture / defense, 还包括 land · air · sea.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 人机协作 (HMI)
<div class="text-xs label mt-1">不是纯自动, L2++</div>

- 语音控制机器
- 机器知道驾驶舱里谁在、状态如何
- agent 替农民同时看好几台机器, 关键时刻才打断他

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
Qasar: "this concept of teaming man and machine is important. When you think about running agents or just running, different instances of, Claude and doing work for you in the background, you can take that analogy out, almost copy and paste and put it into, like, a farm".
</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>SAE 等级.</strong> Qasar: "typically defined in SAE levels as an L2++ system with a human in the loop." — 自动驾驶里这就是司机随时可以接管的"高级辅助驾驶".
</div>

---
layout: two-cols
---

# Onboard vs offboard — 一切由 latency 决定

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Off-board</strong>: 数据中心 / 大 GPU. "I don't care if it takes one second for it to give me a result or 10 seconds." 模型可以巨大, 分布式跑.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>On-board (embedded)</strong>: "literally every fraction of a millisecond counts." 不能让模型卡住车.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>桥</strong>: distillation. on-board 模型本质是 off-board 大模型的"派生小模型".
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Swyx 问能不能直接 call home. Peter: "It's all about latency." — 美国还有一堆没信号的地方, 物理 AI 必须本地化.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./onboard-offboard.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 算力, 不是模型, 才是物理 AI 的瓶颈

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 rounded">
"in physical AI world, we're not really constrained right now by, like, the intelligence of the models. It's actually... deploying them in"
</div>
<div class="mt-2 text-sm opacity-70">— Qasar, 把整个对谈最反直觉的一条命题提了出来</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Foundation model 公司
瓶颈 = 资本 + 研究员

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Physical AI 公司
瓶颈 = **能塞进车的硬件**, 还要满足 power / cost / shock / 抖动 / 温度等约束

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
Qasar: "Those constraints force creativity." — 反过来这件事被他视为 Applied 的护城河, 不是负担.
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
顺便: Tesla R&D 车今天还装 lidar. 在 R&D 阶段用 lidar 给每像素配深度, 训练模型, 然后量产车把 lidar 拿掉, "now you can actually get depth with just the camera." Lidar 在 Applied 看就是 R&D 工具, 不是宗教问题.
</div>

---
layout: two-cols
---

# 世界模型 · 不需要"理解" 也能做对

讨论 hydroplaning (打滑) 时, Alessio 担心世界模型学错——比如以为太阳绕地球转.

Peter 给了一个反向的安心答案: 世界模型未必能"懂物理", 但**视觉线索 → 减速**这条因果, 它能学.

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
路面变平 + 水积起来 + 别的车在减速 → 模型自然学到 "我也得减速".
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
Peter: "the beauty of, these kinds of models where they just, they learn these non-obvious things."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hydroplaning.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但别指望世界模型一招通杀

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 工程现实
"if you're hoping to do real world deploys and you're purely relying on a world model approach, you probably won't get to something that works, before you go bankrupt."

<div class="mt-3 text-sm opacity-80">
— Peter, 直接给了一个 "engineering 层面的实话".
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 世界模型擅长什么
**理解 cause-effect**: 拿一勺土从 A 搬到 B, 它要知道 A 没了 B 多了, 而且这个变化会影响下一步.

<div class="mt-3 text-sm">
对挖掘机、矿车这种"动作改变环境"的 task 尤其关键.
</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
Applied 的策略明确: "diversified bet strategy" — 一个 approach 不够, 多条路一起押, 因为不同地理 / 行业的风险特征不一样.
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
作者概括: 世界模型 + 端到端模型 + 经典模块化方法, Applied 全部留着, 谁赢就用谁——这是有 1000 个工程师才付得起的研发奢侈.
</div>

---

# AI Coding 在 Applied 内部 · Cursor → Claude Code

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 工具变迁
"Cursor was, I think the hottest tool in the company for a good while. Now **Claude Code**, I think has taken the reign on that."

<div class="mt-3 text-sm">
还有一块**内部 leaderboard**, 鼓励工程师用 AI 工具.
</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 反过来反哺产品设计
他们把 "AI 让屏幕里的 app 越做越简单" 这种思维拿来反问自己: 物理机器要做点事, 能不能也做到这么简单?

<div class="mt-3 italic text-sm">
"taking now a lot of the same ideas and applying that to, 'Okay, well, if you wanted a physical machine to do something, how easy can we make that, using our own tooling and platform as well?'"
</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Sensor Studio 的转型.</strong> 以前是个 CAD 风格的 GUI 工具, 现在底层 API 全开, "using AI agents, you can actually configure a sensor suite with just text and likely reach a better result than you could've through the GUI in the past." — 整个产品组合都在按 AI agents 的胃口重写.
</div>

---

# 工程师的 bimodal distribution

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 text-sm">

### 投入了的人
"this subset of people that they really get it... they've clearly invested the hours needed to learn these tools and how to be effective."

</div>

<div class="p-3 rounded border-l-4 border-red-500 bg-red-50 text-sm">

### 没投入的人
"the productivity gap is just enormous." 之间差距已经大到 Applied 在面试上明确**优先选投入了的人**.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Qasar 自己改了观点.</strong> 3 年前他写过: 嵌入式 / OS / 数据库工程师不该做 AI engineer. Peter 当场拆: "the classic bitter lesson, topic, which is the Six months ago I would've said the same thing, but it's, it's becoming super useful for every domain."
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
具体例子: 半年前用 Claude 写 GPU shader 结果"underwhelming", 现在 "you're a little bit blown away, like, 'Wow, that actually worked. That's amazing.'"
</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
Peter 立刻补一句: "the human validation is 100% key" — 命交给 AI 写的代码, 必须人 carefully checked.
</div>

---

# 验证从 binary → 统计 · Cruise 的教训

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 老世界
Euro NCAP 这种**测例集**: 车撞不撞模拟过马路的小孩? 二元答案, 过 / 不过.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 新世界
"everything is statistics" — 你证明的不是过/不过, 而是**多少个九的可靠性**, MTBF (meantime between failures) 多长.

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### Cruise 的教训不是技术单一失败
Qasar: "the Cruise example wasn't a technology failure" — Peter 当场更正: "It definitely was a technology failure, but it was made much worse by the" 后续 PR / 监管沟通方式 (把人压在车下后又把车开走).

<div class="mt-2 text-sm opacity-80">
"There is a version where Cruise still exists." — 同样的事故, 不同的对外沟通, 公司可能没死.
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
Qasar 的硬数据观: "humans are way worse drivers statistically. Like, there's no, there's no debate." 但 "we're emotional animals" — 单一极端事件的情绪反应总会盖过统计.
</div>

---

# Productionization · 我能写出他们接下来 20 个坑

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-base italic">
"we can look at any company in this space and like, get a demo, and like, I can, I can write down a list of I know exactly the next 20 problems they're gonna hit. And like, and I can guess also what they're going to try to solve each of those, and I can guess which one's gonna actually work."
</div>
<div class="mt-1 text-sm opacity-70">— Peter, 总结他十年踩坑经验时</div>

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>Research</strong><br>
新 idea / 论文 / 原型
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>Advanced engineering</strong><br>
为量产改造的子系统. Qasar 说 Applied 大部分时间在这一格.
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Production</strong><br>
真车上路 + 后续维护
</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
具体案例: 中国正在搞**人形机器人马拉松**, 26 英里 — Peter 用这个例子说明可靠性是行业最大瓶颈, 政府用 prize policy 推进 (类比当年的 DARPA Grand Challenge, "It really worked. It took the whole industry").
</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Qasar 自嘲: "We've just seen this stuff now. We've seen enough of this stuff. We lived enough of this stuff." — 不是天才, 是十年里把每个坑都摔过了.
</div>

---
layout: two-cols
---

# 复利技术 · 长长的一段平地, 然后跃起

Qasar 把 Applied 定位为 "compounding technology" 公司:

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"this is truly compounding technology. A lot of the work that we do just compounds. we don't throw it away."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
OS 在变好, dev tooling 在变好, models 在变好——三件事同时复利.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"the human brain just doesn't emotionally understand the compounding effects" — 大部分人会低估它能滚到多大.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
Waymo 是现成的对比: "very interesting for a long time, but not worth one hundred and twenty-six billion dollars" — 同一家公司在曲线两端.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compounding-tech.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 给创业者的话: 小问题域 + 第一性原理

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 商业上加一道 constraint
技术问题已经够难了, 创业者还得**自己给自己**加一条商业 constraint, 把范围卡小.

<div class="mt-3 italic text-sm">
"think a little bit about the equation of how you use money and where you use the limited resources and limited engineers that you have."
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 不要抄成熟公司的策略
"founders falsely kind of take very mature companies' strategies and then apply to their, like, nascent."

<div class="mt-3 text-sm">
1978 / 1982 的 Apple 跟 2007 的 Apple **不是同一家公司**, 早期 Apple 就是组装电子件——别拿 Steve Jobs 2007 的 vertical 教条套自己 garage 的产品.
</div>

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"find a small problem space" — 老 YC 教条, 在硬科技里 Qasar 仍然完全同意. 太宽 = 太多问题, 全部都做得 mediocre.
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
唯一靠得住的方法: "use first principle thinking" — 基于自己 / co-founder / 早期成员的技能 + 从客户听到的, 找一个 product space.
</div>

<div class="mt-3 p-2.5 bg-red-50 border-l-4 border-red-500 rounded text-xs">
⚠ 不要直接照抄 Jensen / Zuck — "in different time and space". 也不要照抄其它早期创业者, "most of them are gonna fail."
</div>

---
layout: two-cols
---

# 招人: 硬件软件交界 + General Motors Institute

Qasar 自己是 **General Motors Institute** 毕业的——一所 100 年前 GM 自己开的工科大学, "not enough engineers in Michigan", 自己造一批.

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"engineers' engineers" — 真懂底层系统, 不只是表面会用.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
Peter: 找那些 **真正欣赏 hardware / software boundary 的人**. "in the vibe coding era, there are a crop of engineers that they don't think about hardware at all. And we don't have that luxury."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
价值观: **extreme curiosity**. "what is light? What is a radio wave?"——一直往下问.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
Peter: "if you get curious enough about software, you ultimately end up in hardware."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hardware-software.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Plan mode + Next-token prediction · 普适性

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Plan mode 也能搬到物理 AI
Alessio 问: 物理自动驾驶有没有 "plan 一步、再行动" 的概念?

<div class="mt-3 italic text-sm">
Peter: "just like you can use, Claude code to plan out some complex coding task and you get some almost specification written out, those similar approaches absolutely can be applied to physical systems."
</div>

<div class="mt-2 text-sm">
**defense / mining 上尤其有用**——一个目标可能要走 100 步.
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Next-token prediction 普适
Alessio: 开车感觉就是 next token prediction, 你在路上, 之前做过什么不太重要.<br>
Qasar: "It's all planning."<br>
Peter 给了更宽的命题:

<div class="mt-3 italic text-sm">
"everything in the world can actually be boiled down to, like, a next token prediction problem."
</div>

<div class="mt-2 text-sm">
矿场挖一勺, state space 就变了, 模型下一步预测自然不同——一切都套得进这个框架.
</div>

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
Peter: "The remarkable thing about these techniques is just how universally applicable they are." — 同一个方法既能驱动 IDE 里的 agent, 也能开 80 吨卡车.
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句:</div>

<div class="space-y-2">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"We can't have errors. Those are L4 trucks."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Qasar, 谈日本路上的无人卡车 · 把 "safety critical" 拎成中心词</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"physical machines today are more akin to the state of the phone market before Android and iOS existed."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Peter, 解释为什么车需要一套统一 OS</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"in physical AI world, we're not really constrained right now by, like, the intelligence of the models."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Qasar, 反直觉的瓶颈论: 硬件部署比模型聪明度更稀缺</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"It doesn't need to know about hydroplaning to know that it needs to drive slower."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Swyx, 一句替世界模型解围 · Peter "Yes." 同意</div>
</div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"I can write down a list of I know exactly the next 20 problems they're gonna hit."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Peter, 十年踩坑攒出的 productionization 直觉</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"the human brain just doesn't emotionally understand the compounding effects."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Qasar, 解释为什么 Waymo 的 $126B 让人惊讶</div>
</div>

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"if you get curious enough about software, you ultimately end up in hardware."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Peter, 招人哲学的一句总结</div>
</div>

</div>

---
layout: end
---

# Constraints force creativity.

<div class="mt-6 text-sm opacity-70">
— Qasar Younis, Applied Intuition (Latent Space, 2026)
</div>
