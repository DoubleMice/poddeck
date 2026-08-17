---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '179: 蒸馏风暴：一场无人公开谈论的技术竞赛'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 晚点聊 LateTalk #179

## 蒸馏风暴：一场无人公开谈论的技术竞赛

<div class="text-lg opacity-70 mt-4">
晚点编辑部内部对谈 · 洪浩 × 漫齐
</div>

<div class="text-sm opacity-50 mt-2">
晚点 LatePost · 2026 年 8 月
</div>

<div class="text-xs opacity-40 mt-6">
无嘉宾对谈 | 时长 50 分钟
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一场没人公开谈的竞赛</strong><br/>
<span class="opacity-70">"所有人都会去关注这件事，但大家不会公开去谈论"——所以这期请不到嘉宾，只能编辑部自己聊</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>蒸馏的门槛</strong><br/>
<span class="opacity-70">不是抄答案：要用算力、要造数据、要懂提问技巧，是一门有门槛的训练技术</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>被蒸馏的东西在进化</strong><br/>
<span class="opacity-70">从题目答案，到 o1/R1 的推理过程，再到智能体在环境里完成任务的完整轨迹</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>张一鸣罕见表态</strong><br/>
<span class="opacity-70">字节明确不做蒸馏，甘愿暂时落后；代价是组织的确定性诱惑与人才流动</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>谁被点名</strong><br/>
<span class="opacity-70">Anthropic 点名 DeepSeek、Kimi、MiniMax、千问；OpenAI 点名 DeepSeek；智谱无人点名</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>斩杀线之下</strong><br/>
<span class="opacity-70">DeepSeek V4 与 Grok 3.6 的性价比改写定价逻辑，智能供需失衡可能是更大的问题</span>
</div>

</div>

---
layout: two-cols
---

# 蒸馏：让学生的行为逼近老师

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div>
<strong>漫齐的简化版定义：</strong>先有一堆问题，去问一个很强的模型（比如 Claude），得到很多回答。提问和回答构成一堆数据对，再用这些数据训练你自己的学生模型。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"学生模型的输出行为去接近你想学的教师模型的输出行为"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 经典蒸馏的核心</div>
</div>

<div>
然后<strong>让两者的差异越来越小</strong>——蒸馏的目标不是记住答案，而是行为上的逼近。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distill-classic.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 不是抄答案：有门槛的训练

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>洪浩的直觉：</strong>这可以理解为抄答案——Claude 给出精妙的推理过程，我把答案直接喂给自己的模型，让模型按 Claude 的方式回答。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"他肯定不是我们原初意义理解的那种抄答案"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 对"抄答案"类比的纠正</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>它是一个训练过程：</strong>蒸馏主要用在<strong>后训练和中训练</strong>——你要用算力，要有数据放进模型里训练。"你这个是要有一些方法和技巧和你的智慧和你的劳动在里面的"，不是抄作业那样人家写 A 你就写 A。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"它是有门槛的抄作业"
<div class="text-xs opacity-60 mt-1 not-italic">— 洪浩 · 最终双方同意的总结</div>
</div>

</div>

---
layout: two-cols
---

# 被蒸馏的数据在进化

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div>
<strong>早期：</strong>从教师模型获得的是静态的题目、推理过程和答案。
</div>

<div>
<strong>推理模型出现后：</strong>o1、DeepSeek R1 这类模型的输出里多了推理过程（思维链），这部分成为更好的蒸馏原料。
</div>

<div>
<strong>Agent 时代：</strong>要榨取的不再是问答，而是<strong>智能体在一个环境里完整做完一个任务的整个过程</strong>——漫齐说这是文章里没有特别展开、播客里可以补充的部分。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
对比经典蒸馏：现在要获得的轨迹数据，含义在变得更复杂。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distill-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 环境：让 Agent 真正跑起来的一切

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>环境的定义：</strong>让 Agent 真正把任务跑起来的一整套条件和系统。以编程任务为例，就是代码库、终端，加上编辑器、编译器、测试工具等必要工具，再设置任务和单元测试，看程序跑对了没有。
</div>

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700">造题目</div>
<div class="text-xs opacity-70 mt-1">先有真实题目，再让教师模型改写、扩增</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-700">造环境</div>
<div class="text-xs opacity-70 mt-1">长模型本身有 coding 能力，可以构造环境系统</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold text-purple-700">造轨迹</div>
<div class="text-xs opacity-70 mt-1">Claude 在自己造的环境里把任务完整做一遍</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">
最后一步最接近典型蒸馏：获得教师模型完成任务的完整轨迹，再让自家学生模型在行为上接近这个过程。
</div>

</div>

---
layout: default
---

# 误区：不是所有"借用"都叫蒸馏

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"并不是说在训练一个模型的过程中，只要你用到了另一个更强的模型的数据和输出，它就是一个典型的蒸馏"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 最常见的误解</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>反例：</strong>如果只用最强模型来<strong>评估</strong>自家模型在环境里的表现，那就不是蒸馏，而是"用了一些最强的模型的数据和输出来帮助你做一个智能体的强化学习"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>但无论哪种：</strong>只要用了更强闭源模型的输出来优化自己的模型，在 Anthropic、OpenAI、Google DeepMind 看来，就都违反了用户协议。
</div>

</div>

---
layout: default
---

# 用户协议的灰色地带

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"你不能利用我的服务去提升和优化你自己和我竞争的模型"
<div class="text-xs opacity-60 mt-1 not-italic">— 领先闭源模型的用户协议精神（漫齐转述）</div>
</div>

<div>
<strong>范围非常宽泛：</strong>哪怕某些行为在技术上不是蒸馏，只要用其服务优化竞品模型，在闭源方看来就是违规。
</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400">
<strong>有法律效力吗？</strong>漫齐的朴素判断："目前是个灰色地带"——漫齐建议咨询专业律师，因为协议范围实在太宽泛。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"我们观测到去年开始，蒸馏等一些其他的这种他们称之为偷取IP的行为变得越来越多"
<div class="text-xs opacity-60 mt-1 not-italic">— Google 今年 2 月文章原话（漫齐引用）</div>
</div>

</div>

---
layout: two-cols
---

# 蒸馏简史：最初为了压缩

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"它是为了把一个更大的模型的能力压到一个更小的模型里"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 蒸馏最早的主流目的</div>
</div>

<div>
大模型一般又贵又慢。压缩能<strong>降低成本、提高速度</strong>；手机、汽车、机器人这些端侧场景算力有限、延时要求高，需要更小的模型。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>一个具体场景：</strong>漫齐回忆第一次跟人长时间讨论蒸馏，是采访毫末智行 CEO 顾维灏——自动驾驶在云端训大模型，要压到车上（Orin 等英伟达芯片），算力远不如云端，需要蒸馏、剪枝、量化让它更小。
</div>

<div>
<strong>注意：</strong>当时的目标不是更强，而是更实用——压缩和变强其实是一体两面。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cloud-to-edge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# o1：蒸馏回报率的分水岭（2024 年 9 月）

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 italic">
"o1是第一个算是开启了推理模型这种范式的一个模型"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 关键时间节点之一</div>
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>变化 1：后训练强化学习</strong><br/>
<span class="opacity-70 text-xs">o1 揭示了在后训练里做大规模强化学习，可以让模型学到推理策略。蒸馏本来就主要用于后训练——投入回报上升了。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>变化 2：测试时计算</strong><br/>
<span class="opacity-70 text-xs">模型使用阶段给更多算力，让它围绕问题一步一步想、生成更长思维链。这部分用户理论上看得见（可以隐藏，但有办法还原），成为更好的蒸馏原料。</span>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">
<strong>总结：</strong>不是出现了新方法——方法之前就有，而是<strong>能蒸的原料变得更丰富、效果更好了</strong>，蒸馏的投入回报比被大幅提升。
</div>

</div>

---
layout: default
---

# R1：六个小模型的实验（2025 年 1 月）

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
DeepSeek R1 的技术报告发布时，同时发了<strong>六个小的蒸馏模型</strong>——"六个模型都是把R1当作教师来学"，试试这种方式能不能让小模型的能力提升。
</div>

<div class="grid grid-cols-4 gap-3 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">6</div>
<div class="text-xs opacity-70 mt-1">个蒸馏小模型</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">4</div>
<div class="text-xs opacity-70 mt-1">个 Qwen 2.5 底座</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">2</div>
<div class="text-xs opacity-70 mt-1">个 Meta Llama 3 底座</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">1</div>
<div class="text-xs opacity-70 mt-1">个教师：R1</div>
</div>

</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400 mt-3">
<strong>本质：</strong>这是蒸馏最初主流目的的延续——压缩。把大模型的能力压进更小的尺寸，降低成本、提高速度，服务端侧场景。
</div>

</div>

---
layout: default
---

# 从压缩到变强：风向变了

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"我们现在看到蒸馏其实就是为了变强的蒸馏"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 当下的主流形态</div>
</div>

<div>
<strong>25 年之后大家蒸得多了：</strong>今年以来对蒸馏的讨论格外热烈。Anthropic、OpenAI、Google DeepMind 在 26 年年初发表更多公开文章，并在给美国政府的公开信里提到中国公司在蒸馏他们——这是一个明显的导火索。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>更大的背景：</strong>"中国的开源模型的表现是明显逼近闭源模型的"。Kimi 1.5 就是一个里程碑，在美国引起很多讨论和争议（晚点 177 期专门聊过）。
</div>

<div>
各种原因累积：蒸馏规模确实变大了，加上更强的开源模型逼近美国闭源模型，中美两边都更关注，蒸馏被推到风口浪尖。
</div>

</div>

---
layout: default
---

# 张一鸣的表态：字节不蒸馏

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"张一鸣在Seed的一场内部会上面提到说他不允许字节去做这个蒸馏"
<div class="text-xs opacity-60 mt-1 not-italic">— 晚点报道的原文回顾 · 张一鸣多年罕见露面</div>
</div>

<div>
报道之外，晚点还了解到：<strong>字节很长一段时间都没有做蒸馏</strong>。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>反直觉之处：</strong>字节是算力非常多的公司，大模型竞争又极其激烈，而 Seed 的表现离预期还有距离——在 coding、GenTech（智能体）等领域离真正的一线还比较远。它居然主动拒绝这条捷径。
</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400">
<strong>漫齐的严谨提醒：</strong>罕见的有人不蒸馏，并不代表其他人都蒸馏。Anthropic、OpenAI、Google DeepMind 谁蒸馏了谁没有，并没有展示完整证据。
</div>

</div>

---
layout: default
---

# 三个理由：为什么要放弃捷径

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>逼近不能超越</strong><br/>
<span class="opacity-70 text-xs">蒸馏短期内可以改善模型表现，但本质上是在复制 Claude 已有的能力——这么走下去，最多只能逼近对方，不能实现超越。而 Seed 追求的是世界最强的模型。</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>长期壁垒</strong><br/>
<span class="opacity-70 text-xs">张一鸣希望字节从更底层的维度构建自己在 AGI 上的壁垒。蒸馏不是长期壁垒——这一点大部分从业者也都认同。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>甘愿暂时落后</strong><br/>
<span class="opacity-70 text-xs">这是一个比较强的表态：即使不蒸馏意味着字节在技术上短暂落后于国内一些竞争对手，也不采用这个捷径来推进模型能力。</span>
</div>

</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400 mt-3 text-sm leading-relaxed">
<strong>洪浩的追问：</strong>这三个理由成立吗？漫齐问过的从业者大多认为：学生模型超过教师模型在技术上并非绝无可能——多学几个教师、博采众长，是有探索空间的，当然也可能"博采众短"。
</div>

---
layout: default
---

# 蒸馏的组织代价：确定性的诱惑

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>代价不在技术上，在激励上：</strong>蒸馏相对<strong>经济、成本低，而且更有确定性</strong>——这是更关键的。如果组织把重心放在这条有确定性的路上，那些做更长期探索、走更不确定的路的项目和人，可能得不到足够的资源和认可。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>认可也很重要：</strong>顶尖研究员需要一个更创新的研究能被鼓励、被看到的环境。把技术和组织都考虑进来，张一鸣说蒸馏"有可能很难超越"，也许是一个真实的情况。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>文章里的兴奋剂比喻：</strong>一个运动员理论上可以磕兴奋剂，同时勤加训练。也许真的有人这么干，但一般而言，磕了兴奋剂之后肯定会有一些侥幸和惰性。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>技术上的问题：</strong>你有可能学到教师模型的错误和拒答行为——你的行为会越来越接近它，包括不好的东西。
</div>

</div>

---
layout: default
---

# 人才流动：为什么"最懂人性"

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"张一鸣可能不是最懂技术的，但他大概率是最懂人性的"
<div class="text-xs opacity-60 mt-1 not-italic">— 极客社区对张一鸣表态的评论</div>
</div>

<div>
<strong>有人想离开：</strong>张一鸣明确表态之后，有一些人想从字节离开。个体层面的原因很朴素——职业生涯是有限的，每个人都希望自己在字节的这几年做出代表作：我所在的团队做过最强的模型，至少是中国最强的模型。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>"陪着你耗"的心态：</strong>最宝贵的职业阶段可能就这几年，与其一直在里面陪着耗——虽然这是非常个人化的想法，但也合理。
</div>

<div>
<strong>另一面：</strong>有人会这么想离开，也可能有人会被张一鸣的这种表态吸引而来。人才的流向是双向的。
</div>

</div>

---
layout: default
---

# Seed 2.1 与字节的数据战略

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>时间线：</strong>据漫齐了解，Seed 2.1（6 月发布）应该用了一些蒸馏的手段；从 2.0 到 2.1 的开发时间很短（今年之内）。在那之前的两三年，字节确实不怎么做蒸馏。内部经过激烈讨论，最终做了明确的选择——不蒸馏。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>那字节的重心是什么？</strong>自己构造高质量的数据。智能涌现本周报道：字节从 6 月开始重组数据团队，成立与 Seed、Flow 平行的新一级 AI 部门——AI 数据和安全。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>负责人王英格（Adam 王）：</strong>之前在 TikTok 负责直播，向文佳和 Alex 都汇报过。把数据抽出来作为重要能力，成立级别很高的团队——字节要自己获得不依赖 OpenAI、Anthropic 等领先闭源模型的数据能力。
</div>

</div>

---
layout: default
---

# 第三方数据：绕得开吗？

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400">
<strong>问题：</strong>如果我买第三方数据公司的数据去做蒸馏，这算什么？洪浩听说一些公司说自己不蒸馏，但可能在"体外"做一些操作来实现蒸馏的目的。
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>技术层面</strong><br/>
<span class="opacity-70 text-xs">如果你要训练的模型在逼近一批更强模型的输出和行为，技术上它就是蒸馏。</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>法律层面</strong><br/>
<span class="opacity-70 text-xs">能否绕开用户协议，有很多操作空间；如果美国出台更严厉的限制，还可能涉及对方政府的限制——这就不单纯是技术问题了。</span>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>底线：</strong>一层是技术定义，一层是合规，中间有大量灰色地带可以操作——这正是"无人公开谈论"的原因之一。
</div>

</div>

---
layout: two-cols
---

# 谁被公开点名

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div>
<strong>Anthropic：</strong>2 月点名三家——DeepSeek、Kimi、MiniMax；6 月再点名一家——阿里的千问。
</div>

<div>
<strong>OpenAI：</strong>说 DeepSeek 有疑似蒸馏的行为。
</div>

<div>
<strong>智谱：</strong>反而没有美国公司公开说它在蒸馏或疑似蒸馏。
</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400">
漫齐提醒：这只能当作公开信息分享，不能用来判断谁在蒸馏、谁不在。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./named-map.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 2880 万次交互，与阿里禁用 Claude Code

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>6 月的信：</strong>Anthropic 给美国国会的信里提到千问疑似与它进行了很多交互——<strong>2880 万次</strong>。Anthropic 称之为有史以来发现的最大规模的蒸馏攻击。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>连锁反应：</strong>阿里被点名之后，整个集团开始禁用 Claude Code。漫齐认为这未必和蒸馏有直接必然的联系：
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>合规表态</strong><br/>
<span class="opacity-70 text-xs">中国用户本来理论上就不能用 Claude 的模型，禁用是对外的姿态。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>数据安全</strong><br/>
<span class="opacity-70 text-xs">不希望内部大量 AI 使用经过外部模型，想让员工用自己的模型。</span>
</div>

</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400">
但无论如何，这件事都发生在中美模型竞争的大语境里。
</div>

</div>

---
layout: default
---

# 如何识别蒸馏？身份混淆不可靠

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>常见误解：</strong>模型偶尔说自己是 GPT，说自己是 OpenAI 训练的，有人把这当成蒸馏的证据。漫齐的判断：<strong>肯定不靠谱</strong>——直接问模型 A 你是谁，它说是 B，不能证明 A 蒸馏了 B。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>24 年 11 月的研究：</strong>有人测了 <strong>27 个模型</strong>（中外都有），设计了 <strong>77 个问题</strong>，专门研究模型身份混淆。结果：GPT-4 会说自己是 GPT-3；Gemini Pro 会说自己是百度文心；字节 Seed 会说自己是 GPT。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>结论：</strong>仅凭身份混淆，很难判断谁用了谁的训练数据，更不能说明蒸馏。更合适的方式是<strong>看输出分布是否接近</strong>——说话方式、输出格式、拒绝回答的方式、代码风格。
</div>

<div>
但这需要很大的量：问一两次觉得像，证明不了什么。
</div>

</div>

---
layout: default
---

# 蒸馏真正难在哪里

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>账号</strong><br/>
<span class="opacity-70 text-xs">怎么获得稳定、高频访问这些领先模型的账号，是最开始的一道坎。</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>用户运营</strong><br/>
<span class="opacity-70 text-xs">真实用户提问是高质量数据的来源——真实提问只是种子，围绕它可以做扩增和改写。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>中转站</strong><br/>
<span class="opacity-70 text-xs">行业里有人提及的做法：建很多中转站，让用户通过中转站使用领先的 GPT 或 Claude 模型。</span>
</div>

</div>

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400 mt-3">
<strong>洪浩的问题：</strong>拿到几百万条回答更难，还是知道怎么提问更难？如果所有公司都狠狠地蒸馏，核心竞争力是什么？
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">
<strong>漫齐的回答：</strong>很难说哪部分更难——每个公司不一样，取决于自己的薄弱环节。薄弱环节在哪里，难度就在哪里。
</div>

</div>

---
layout: two-cols
---

# 商业逻辑的冲击：斩杀线

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div>
DeepSeek V4、Grok 3.6 都是<strong>性价比很高</strong>的模型。那张很著名的斩杀线图：在 V4 和 Grok 3.6 <strong>下方和右边</strong>的区域里的模型，都被斩杀了。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>一个应用公司创始人的观察：</strong>用户的十个任务里，<strong>八个都能被 DeepSeek V4 Flash 解决</strong>——Pro 当时还没正式发布，而 Flash 真的非常便宜、速度也快。
</div>

<div>
漫齐的判断：蒸馏是否冲击了重金开发领先模型的投入还难说，但<strong>它明确冲击了商业逻辑</strong>——至少会改变很多定价策略。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kill-line.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 智能的供需：屠龙刀问题

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"你搞更强的模型，这个叫什么杀鸡焉用牛刀。可能你没有用武之地，你就是屠龙刀。"
<div class="text-xs opacity-60 mt-1 not-italic">— 漫齐 · 一个可能比蒸馏更大的问题</div>
</div>

<div>
<strong>对很多任务来说，目前这批最强模型已经很够用了。</strong>智能的供给和需求接下来怎么匹配——规模上、节奏上——是打问号的。姚盛宇那期节目也讨论过：coding 之后向白领市场扩散，对智能的需求并没有那么大。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>投资人朋友的问题：</strong>我们之前都说 coding 比视频生成大，<strong>万一错了呢？</strong>错的可能性就在于：对很多白领的工作来说，现在的模型真的已经够用了。
</div>

</div>

---
layout: default
---

# ChatGPT Codex：一次个人实验

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-400">
<strong>背景：</strong>录姚盛宇那期时，漫齐从个人感受出发对智能需求相对悲观——除了用模型做偏 deep research 的工作，别的用得比较少。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>后来：</strong>漫齐用了 ChatGPT Codex，它的 work 功能特别多，确实让漫齐能干很多以前干不了的事——那段时间很上头。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>冷却之后：</strong>仔细想，你是不是每天都要那么高频地手搓各种工具？频率确实会下来，对更复杂任务的需求也会下来。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>结论：</strong>智能供给和需求的匹配——规模、节奏——可能是蒸馏之外很多人已经在想的问题。
</div>

</div>

---
layout: default
---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-1.5 text-sm leading-snug">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"所有人都会去关注这件事，但大家不会公开去谈论"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 漫齐 · 为什么这期请不到嘉宾</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"他肯定不是我们原初意义理解的那种抄答案"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 漫齐 · 蒸馏是有门槛的训练，不是抄作业</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"它是有门槛的抄作业"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 洪浩 · 对蒸馏门槛的最终总结</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"它其实蒸出来的是自己的，就是自己在蒸自己"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 漫齐 · 某家公司蒸馏出来的乌龙</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"张一鸣可能不是最懂技术的，但他大概率是最懂人性的"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 极客社区评论 · 组织激励的代价</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"你搞更强的模型，这个叫什么杀鸡焉用牛刀"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 漫齐 · 智能供需失衡的疑问</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
"这个文章包括这个播客我觉得也是更多一个抛砖引玉的作用"
</div>

<div class="mt-5 text-sm opacity-50">
— 漫齐 · 晚点编辑部
</div>

<div class="mt-4 text-xs opacity-40">
晚点聊 LateTalk #179 · 蒸馏风暴 · 2026 年 8 月
</div>
