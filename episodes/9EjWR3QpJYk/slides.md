---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "It's 2026, and We're Still Talking Evals"
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 都 2026 年了，我们还在聊 evals

**Maggie Konstanty** —— 在 LLM agent 评估这件事上做侦探的人

<div class="mt-4 text-sm opacity-60">

MLOps.community Podcast · 主持 Demetrios Brinkmann

</div>

<div class="abs-br m-6 text-xs opacity-30">
PodDeck · 9EjWR3QpJYk
</div>

---

# 这期为什么值得听

<div class="text-sm opacity-60 mb-4">大多数关于 evals 的内容停在"你应该写 evals"。Maggie 直接讲她在生产里踩过的坑、为什么 vendor 工具都让她失望、以及 evals 最不性感但最重要的那一面。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Eval 不是项目尾巴
团队总是先把产品上线、再来找她"can we set up some evals"。她的回答：evals 应该从"产品的想法"那一刻就开始。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 上线前后是两种动物
预生产用模拟 persona、上线后用真实用户。后者会要求你"completely twist your evils"——同一套评估系统继续用，必出事。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 侦探心态
"I'm a detective." 真用户很少抱怨，他们直接 drop off。所以最值钱的工作是钻进 trace 里、踩进用户脑子里、找出隐藏的 failure mode。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 工具市场让人失望
0.6 的"hallucination 评分"没法用，Excel 开 coding 也不正常。她最后选择自己造工具——并对所有"outsource the labeling"的卖法说不。

</div>

</div>

---

# 嘉宾每天在做什么

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### 工作内容
为不同行业的 LLM agent 团队设计、训练和部署 evaluator——目前同时在做食品订餐 agent 和汽车经销商 agent 两类产品。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一句话标签
"Evils themselves are not very hard." ——难的不是写 eval，而是和团队对齐、保持迭代节奏，并把 eval 真正变成开发 DNA。

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 mb-4">

### 录音背景
本期是在一场 evals workshop 后的对话，所以她全程在拆"workshop 学员最常踩的坑"——非常实战。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 主持人
Demetrios Brinkmann，MLOps.community 创始人。他不停地在替听众问那些"我有点羞于问"的傻问题，效果很好。

</div>

</div>

</div>

---

# 最常见的失败模式：先发布，再补 eval

<div class="text-sm opacity-60 mb-2">Demetrios 把这件事问得很直白：</div>

<div class="mt-4 p-5 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"basically people ship their product. Yeah. And then they come to you and they say, Hey, uh, can we set up some evals?"
<div class="text-xs not-italic mt-2 opacity-60">— Demetrios（描述他看到的常见模式）</div>

</div>

<div class="mt-4 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"That's my favorite phrase. Uh, okay, Maggie, uh, we have this, let's run evals."
<div class="text-xs not-italic mt-2 opacity-60">— Maggie，对客户开场白的总结</div>

</div>

<div class="mt-6 text-sm opacity-70">
她的反答案：evals 应该是开发团队里"a constant"——从产品想法萌芽那一刻就启动，而不是等产品在生产里翻车之后才被想起来。
</div>

---

# 为什么"上线前的 evals"重要：不要被烫到

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### 上线前 eval 的目的
**不是**为了拿到漂亮分数，而是 **"for you not to get like burnt"**——避免你在产品上线后觉得羞愧。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 上线后 eval 的目的
"to actually deliver something of quality"——持续验证产品在真实流量里有没有兑现质量承诺。

</div>

</div>

<div>

<div class="p-5 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded mb-3">

"Burnt. I mean, you don't, you know, uh, you're not ashamed of your product what is in production."
<div class="text-xs not-italic mt-2 opacity-60">—— Maggie 解释"烫到"的含义</div>

</div>

<div class="p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"You ship more features than you actually evaluated."
<div class="text-xs not-italic mt-2 opacity-60">—— 大多数团队的真实状态</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 上线前 vs 上线后：两种动物

<div class="text-sm mt-4">

她反复强调，pre-production 和 production 的 eval **根本不是同一件事**：

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Pre-production**：你模拟出 persona、自己造测试场景。那是"你以为用户会怎么用"。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">

**Production**：真实用户带来完全不同的 failure mode，你必须 **"completely twist your evils"**。

</div>

<div class="mt-3 text-xs opacity-70">
直接拿 pre-prod 的 eval 套到 production 上，是她见过最常见的错。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eval-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个具体的 gap：从"Adidas 37 码"到"我要 LeBron 那双"

<div class="text-sm opacity-60 mb-4">她拿一个购物 agent 举例，说明 pre-prod 测试用例和真实用户输入的距离有多远：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 你测的版本
"I want to find Aida size 37."

<div class="text-xs opacity-70 mt-3">
结构化、清晰、品牌+尺码——开发者写 test case 时脑子里的"标准用户"。
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 真实用户
"I want to have shoes like LeBron James."

<div class="text-xs opacity-70 mt-3">
模糊、靠类比、需要 agent 反查 LeBron 代言→Nike→某款型号。完全不同的能力栈。
</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-sm">

"you have to completely twist your evils from, you know, test cases that you simulated yourself to something that user created. And then you switch from different failure modes to different failure mode."
<div class="text-xs not-italic mt-2 opacity-60">—— 必然的"扭转"</div>

</div>

---
layout: two-cols
---

# 上线前怎么模拟用户：persona × 场景 × N 次

<div class="text-sm mt-4">

她在团队里的具体做法：

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>1. 列 persona</strong>：power user / lazy user / busy professional / undecided。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>2. 列场景</strong>：作为产品作者，列出 15-20 个该 persona "可能想做"的事。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>3. 用 LLM 模拟 persona</strong>：让模型扮演这个用户去敲 endpoint。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>4. 跑 1 / 5 / 10 / 100 次</strong>：看输出的方差——"never the same".
</div>

</div>

<div class="mt-3 text-xs opacity-70">
关键点：跑一次没意义。LLM agent "always fails in a different place"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./persona-fan.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 她讨厌 "accuracy 95%" 这种指标

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-3">

### 问题
"my agent is accurate 95% of time. What does it mean?"

<div class="text-xs opacity-70 mt-2">
"Yeah, I have no idea." —— Demetrios 接得很诚实。
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 她的理由
Accuracy 是个平均值。"actually measures the average of the performance. That doesn't really give you a quality."

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-3">

### 她偏好的指标
**TPR / TNR**——human label vs LLM label，"more tangible"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 真正重要的事
**找 failure mode**。一个 95% 准确的 agent，可能在那 5% 里全是同一种灾难性 failure。

</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">

"after a while when you're measuring something and it's, you know, reaching almost a hundred percent all the time, it may be try to focus on something else."
<div class="text-xs not-italic mt-2 opacity-60">—— Maggie：到顶就该换个东西去测了</div>

</div>

---

# 真实失败模式：素食披萨里的那块意大利辣肠

<div class="text-sm opacity-60 mb-4">她最爱举的食物订餐 agent 例子。这就是她说的"specific failure mode"：</div>

<div class="mt-6 p-6 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 rounded text-lg">

"when my user asks for a vegetarian pizza recommendation, and you know, we always give five recommendations and one of them is pepperoni. That's the real use case."
<div class="text-xs not-italic mt-3 opacity-60">—— Maggie，描述上线后才暴露的 failure mode</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<strong>accuracy 显示</strong><br><span class="text-2xl text-blue-600 font-bold">95%</span><br><span class="text-xs opacity-60">看上去没问题</span>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<strong>真实体验</strong><br><span class="text-2xl text-orange-600 font-bold">致命</span><br><span class="text-xs opacity-60">素食用户看到 pepperoni</span>
</div>

<div class="p-3 rounded bg-green-50 border border-green-200">
<strong>真正要测的</strong><br><span class="text-2xl text-green-600 font-bold">这种</span><br><span class="text-xs opacity-60">单点 failure mode</span>
</div>

</div>

---

# 团队自己制造的失败模式："surprise me" intent

<div class="text-sm opacity-60 mb-4">他们想让产品更"贴心"，于是加了一个 intent："surprise me"——结果给自己挖了个坑。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 设计直觉
"how the user would want to interact"——"我们觉得用户会想被惊喜一下"。

听起来像"为用户着想"。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 真实结果
"How do you answer a question, surprise me, and then suddenly people ask surprise me."

突然每个人都在按这个按钮，eval 噪音爆炸。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">

"how do you actually come up with something that might be useful but makes a bit of more noise for you?"
<div class="text-xs not-italic mt-2 opacity-60">—— "好心办坏事"是 agent 设计里普遍的陷阱</div>

</div>

---

# 第一个问题：what is the definition of good?

<div class="text-sm opacity-60 mb-3">她说自己接到一个新项目，第一件事不是看模型、不是看 trace，而是问这串问题：</div>

<div class="grid grid-cols-2 gap-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. What's the goal?
不是技术目标，是产品目标。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 2. Who are your users?
Persona 来自这里，不是凭空造的。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 3. Definition of good?
她原话："the most important one"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 4. Which business metric?
最后才落到指标——而不是反过来。

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40 rounded text-sm">

"Nobody knew what the satisfied user is, so we came up with it."
<div class="text-xs not-italic mt-1 opacity-60">—— 在团队内部对齐"什么叫满意"，本身就是 eval 工作的一部分</div>

</div>

---

# 同一个 eval 套不同产品 = 灾难

<div class="text-sm opacity-60 mb-4">他们团队同时在做食品订餐和汽车经销商两个 agent，几乎所有 evaluator 都不通用：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Food ordering agent
- "personalized recommendation" 重要
- 上下文记忆很关键（如果用户是素食者）
- <strong>业务指标 = conversion</strong>
- Happy path 拉对话样本，匹配是否下单

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Car dealers agent
- "satisfaction measurement is gonna be different"
- 高客单、长决策周期
- 业务指标完全不同
- 同一套 evaluator 直接照搬 = 答非所问

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-sm">

"would you apply the same evaluators, the same metrics to a use case about, you know, uh, card dealers?"
<div class="text-xs not-italic mt-2 opacity-60">—— 反问：通用 eval 套件本身就是 anti-pattern</div>

</div>

---
layout: two-cols
---

# 用户满意度的"神秘中段"

<div class="text-sm mt-4">

他们尝试做 user satisfaction 指标，得到的分布很反直觉：

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>~15%</strong> 明显满意（明确正向反馈）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>~15%</strong> 明显不满意（投诉、负面反馈）
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>剩下的 ~70%</strong>：partially satisfied 或 dropped off——什么也没说就走了
</div>

</div>

<div class="mt-3 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
甚至有人"end up buying everything"但全程很 frustrated——这种轨迹是最难解读的。
</div>

<div class="mt-3 text-xs opacity-70">
Eval 的真实战场就是这中间这一大片"沉默的不满"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./satisfaction-bar.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "I'm a detective"

<div class="text-sm opacity-60 mb-4">这句话她在 40 分钟里说了两次。是她对自己工作最准确的描述：</div>

<div class="mt-6 p-6 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-lg">

"That's actually fun part about evils and I don't know, I love this part. 'cause then you, you're a detective. Yeah, I'm a detective. I'm like, okay, imagine I'm a user that comes to this platform and I want to, you know, literally step into someone's brain"
<div class="text-xs not-italic mt-3 opacity-60">—— Maggie，描述错误分析的乐趣</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么需要"侦探"
"There's not a lot of users that are gonna tell you I don't like that." —— 真用户基本不抱怨，只 drop off。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 侦探的工作产出
不是 dashboard 上的数字，而是：找出隐藏 failure mode → 写新 evaluator → 改 prompt → 看是否消失。

</div>

</div>

---
layout: two-cols
---

# 错误分析循环（侦探的工作流）

<div class="text-sm mt-4">

她日常的 6 步循环——cumbersome、time-consuming，但没有捷径：

<div class="mt-3 space-y-1 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>1. Read traces</strong> turn by turn（她说大家都不爱做这一步，因为"boring"）
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>2. Spot failure mode</strong> —— 不是单条错，是同类错
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>3. Step into user's brain</strong> —— "imagine I'm a user that comes to this platform"
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>4. Write new evaluator</strong> —— 把这个 failure 变成可自动检测
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>5. Tweak prompt / orchestration</strong> —— 修复
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>6. Ship → see new failures</strong> —— 然后从第 1 步重新开始
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./detective-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那些"看似聪明"的 silver bullet

<div class="text-sm opacity-60 mb-4">Demetrios 试着提议几种"简单的" frustration 信号——Maggie 把它们一个个拆掉：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 提议：caps lock 检测
"could easily catch a lot of frustrated users."

<div class="mt-2 text-xs opacity-70 italic">
"Because I have capsular code. I'm not gonna rewrite myself."
<br>"I forgot I have a caps log on and I sent it to some ai, like, oh, okay, now I get it."
</div>

<div class="mt-2 p-2 rounded bg-red-100 text-xs">
<strong>结论</strong>：a lot of false positives.
</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 提议：脏话检测
"as soon as I start saying you, it. I would figure that as a very high frustration margin."

<div class="mt-2 text-xs opacity-70 italic">
"somebody might just be angry 'cause they had a bad day."
</div>

<div class="mt-2 p-2 rounded bg-red-100 text-xs">
<strong>结论</strong>：信号有，但不能孤立用——人和 bot 说话本来就更随便。
</div>

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
她的判断：这种"通用 frustration 指标"不存在。每个产品的 frustration 信号都得自己挖。
</div>

---

# 不是所有 bug 都是 LLM 的锅：specification issue

<div class="text-sm opacity-60 mb-4">她在团队里给一类 failure 起了名字，叫 "specification issue"：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### 定义
"issue that is caused by us more or less. So it's a comprehension between, you know, how the agent work and how the developer thought it would."

<div class="text-xs opacity-70 mt-2">
开发者脑子里的产品行为 ≠ agent 实际拿到的指令。
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 典型例子
prompt 里写"be helpful in this situation"——但"helpful"在 customer service vs food ordering 里完全是两件事。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-3">

### 解法
不是去训练模型，是把 prompt 写得更具体——把"helpful"拆解成具体动作。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 教训
**怪 LLM 之前先怪自己**。很多 failure mode 是 spec 没写清楚带来的。

</div>

</div>

</div>

---
layout: two-cols
---

# Whack-a-Mole：改 prompt 的舞蹈

<div class="text-sm mt-4">

主持人提了个尖锐的问题——

<div class="mt-3 p-3 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-xs">
"Don't you feel like you're playing Whack-a-Mole, though? You changed the prompt a little bit and Yeah. Oh, cool. It's evaluations are better over here, but they're worse over here."
</div>

她的回答用了一个意外的比喻：

<div class="mt-3 p-3 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-xs">
"I think it's a little bit of dance, right? You're dancing around trying to change the prompt, and either you do it without choreography without music, you know, completely blind, uh, or you do it with evils."
</div>

<div class="mt-3 text-sm">
<strong>Eval 不消除 trade-off，而是给你 choreography。</strong> 没有它，每次改 prompt 都是"闭眼跳舞"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./whack-mole.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 100% 是个谎言

<div class="text-sm opacity-60 mb-4">Demetrios 直接问：你是不是已经认命，知道永远拿不到 100%？</div>

<div class="mt-6 p-6 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-lg">

"there's always something broken... it tells me that it's a hundred percent correct, I'm like, here this's bullshit. So I hope I won't, 'cause I, I'm, I'm not, you know, that's, that's not trustworthy metric for me."
<div class="text-xs not-italic mt-3 opacity-60">—— Maggie：100% 不是目标，而是警报</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center text-sm">

<div class="p-3 rounded bg-green-50 border border-green-200">
<strong>95% accuracy</strong><br><span class="text-2xl text-green-600 font-bold">🤔</span><br><span class="text-xs opacity-60">"that's really high"——也已经可疑</span>
</div>

<div class="p-3 rounded bg-red-50 border border-red-200">
<strong>100% accuracy</strong><br><span class="text-2xl text-red-600 font-bold">🚨</span><br><span class="text-xs opacity-60">"bullshit"——一定是测的不对</span>
</div>

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<strong>真正该问</strong><br><span class="text-2xl text-blue-600 font-bold">?</span><br><span class="text-xs opacity-60">这套指标到底测的是不是我关心的</span>
</div>

</div>

---

# Eval ≠ unit test：一个普遍的误解

<div class="text-sm opacity-60 mb-4">很多软件工程师以为 "evals 就是 AI 版的 unit test"。Maggie 说这是个 big misconception：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Unit test
- 输入 → 期望输出
- **确定性**断言
- 失败 = 代码错
- 写完一次基本不动

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### LLM eval
- 输入 → **分布**输出
- 在意 trustworthiness、coherence、上下文记忆
- 失败 = 模糊语义错
- "it's iteration"——必须反复回来改

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">

"we did unit tests, we don't have to do evals... we don't measure actually the trustworthiness of our LLM... The semantic matter in this is not measured for unit tests."
<div class="text-xs not-italic mt-2 opacity-60">—— 单元测试覆盖不到"语义层"的失败</div>

</div>

---

# Eval 应该是 DNA，不是 sprint 任务

<div class="text-sm opacity-60 mb-4">她最不爽的一种公司行为：把 evals 当成"做完一次就归档"的任务。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-3">

### Anti-pattern
"we put so much time into it" → 三周后她说"我们再做一次"→ 团队反应："<strong>what?</strong>"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 团队心态
"Hey, we did that already. Isn't it fixed?"——把 eval 看成一次性 cleanup。

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### Maggie 的主张
"And I think there's not really, uh, a DNA of evils yet."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 应该长成什么样
"a constant dance of like trying to figure out which metric, which evaluator is better"——和迭代周期同频。

</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">

"And it should be part of the DNA. So it should be a constant dance"
<div class="text-xs not-italic mt-2 opacity-60">—— 不是 ad-hoc 项目，而是开发习惯</div>

</div>

---

# Multi-agent 的教训：不要先复杂化

<div class="text-sm opacity-60 mb-4">她顺手提到一个行业 trap，eval 圈子和 agent 圈子很像：</div>

<div class="mt-6 p-6 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-lg">

"first you had multi-agent, we jumped on that like, oh, multi-agent, so crazy. You're building something so nice and then we suddenly like, oh, shh. It doesn't work."
<div class="text-xs not-italic mt-3 opacity-60">—— Maggie 描述"流行架构 → 翻车"的循环</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Eval 的正确顺序
<strong>Start slow</strong> → 把"和业务指标对齐的 core evaluator"做扎实 → 再叠 AB testing、DSPy 优化、自动 simulation。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Anti-pattern
一上来就搬出 "20 different evaluators"——她直接说这是 <strong>"instruction to fail"</strong>。

</div>

</div>

---
layout: two-cols
---

# 工具市场的现状：vendor 让她失望

<div class="text-sm mt-4">

她对当前 LLM eval 工具市场非常直接——大多数工具卡在哪：

<div class="mt-2 space-y-1 text-xs">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>0 到 1 的分数</strong>：0.6 hallucination 周一早上看到——"give me pass or fail."
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>导出 >1k traces 就慢</strong>："I have to do things in batches. it takes hours."
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>Multi-turn 支持差</strong>：对话型 agent 几乎无解
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>UI builder 比写代码还难</strong>：她试了一整天 Arize 的 UI evaluator，最后放弃
</div>

</div>

<div class="mt-3 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs italic">
"I call them friendly tools 'cause they're not really useful yet for me, but they're friendly 'cause they help me with my work."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tooling-friction.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么成熟团队都自己造工具

<div class="text-sm opacity-60 mb-4">问到她想要但市面上没有的东西时，她说：自己已经造了。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 想要的工具长什么样
- 不是"AB testing 套件"
- 而是 <strong>evaluator 训练流水线</strong>
- 抽样 → 浏览 trace 不丢失自己 → 标注 → train/val 拆分 → 推到生产

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 行业现状
"even in the very famous courses that are promoted on LinkedIn, we do exo coding and open coding and Excel."

<div class="text-xs opacity-70 mt-2">
她看到课程里用 Excel 做 open coding 的反应：<strong>"this is not normal."</strong>
</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-green-500 bg-green-50 bg-opacity-40 rounded text-sm">

"mature product teams are, in my opinion, are gonna usually go for custom solution 'cause evals themselves are not very hard."
<div class="text-xs not-italic mt-2 opacity-60">—— 不是因为 NIH，而是因为 eval 本身没那么难</div>

</div>

---

# 一个不容妥协的原则：自己标，不要外包

<div class="text-sm opacity-60 mb-4">一类供应商她特别反感：那些卖"我们帮你标 hallucination"的：</div>

<div class="mt-6 p-6 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-lg">

"another thing, outsourcing the labeling. No, no, it shouldn't happen. Like, why would I, you know, why would I leave the labeling part first? That's the greatest opportunity for you to learn what's happening."
<div class="text-xs not-italic mt-3 opacity-60">—— Maggie，关于 labeling 外包</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么不能外包
<strong>第一</strong>：标 label 是你了解 user 的最快方式——这是数据，不是 chore。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么不能外包
<strong>第二</strong>：你的产品好不好只有你定义。让别人按通用 rubric 标，相当于让别人替你判断"好"。

</div>

</div>

---

# 真正难的不是 eval，是 alignment

<div class="text-sm opacity-60 mb-4">整期访谈最反直觉的 takeaway：</div>

<div class="mt-6 p-6 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-lg">

"Evils themselves are not very hard. Like if you think about the process... simple tasks that you have to do, but you have to structure them in a good way. You have to be consistent, you have to iterate... and then you have to have your own strategy. And I think the alignment between team members and alignment on what matters for your product is the part that is the trickiest part."
<div class="text-xs not-italic mt-3 opacity-60">—— 难点不在技术，在共识</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<strong>容易</strong><br><span class="text-xs opacity-70">写一个 evaluator<br>跑一次 batch</span>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<strong>难</strong><br><span class="text-xs opacity-70">坚持迭代<br>持续做错误分析</span>
</div>

<div class="p-3 rounded bg-red-50 border border-red-200">
<strong>最难</strong><br><span class="text-xs opacity-70">让团队对齐"什么叫好"<br>—— 不可被工具替代</span>
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句（全部 grep 验证过原文）：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"Evil start. Before you ship the agent or before you ship the product."
<div class="text-xs opacity-60 mt-1 not-italic">—— Eval 的起点不是上线后，而是产品的想法萌芽时</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"You have to completely twist your evils... switch from different failure modes to different failure mode."
<div class="text-xs opacity-60 mt-1 not-italic">—— Pre-prod 和 prod 是两种动物</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"There's not a lot of users that are gonna tell you I don't like that."
<div class="text-xs opacity-60 mt-1 not-italic">—— 真用户用 drop off 投票，不是用反馈</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"It's a little bit of dance... either you do it without choreography without music, completely blind, or you do it with evils."
<div class="text-xs opacity-60 mt-1 not-italic">—— Eval 不消除 trade-off，但给你舞步</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"It tells me that it's a hundred percent correct, I'm like, here this's bullshit."
<div class="text-xs opacity-60 mt-1 not-italic">—— 100% 是警报，不是奖杯</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"Mature product teams are, in my opinion, are gonna usually go for custom solution, 'cause evals themselves are not very hard."
<div class="text-xs opacity-60 mt-1 not-italic">—— Eval 不难，难的是和团队对齐"什么叫好"</div>
</div>

</div>

---
layout: end
---

# 都 2026 年了，我们还在聊 evals

<div class="mt-6 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-lg">

"I'm a detective."

</div>

<div class="mt-3 text-sm opacity-60">
—— Maggie Konstanty，关于做 evals 这件事最准确的自我描述
</div>

<div class="mt-8 text-xs opacity-50">
PodDeck · MLOps.community · 9EjWR3QpJYk
</div>
