---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '178: 与田渊栋聊 RSI：模型自进化如何到来？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 与田渊栋聊 RSI：模型自进化如何到来？

<div class="text-sm opacity-60 mt-4">
晚点聊 · 第 178 期
</div>

<div class="text-xs opacity-50 mt-6">
嘉宾：田渊栋 · Recursive Superintelligence 联合创始人 · 2026 年 8 月 · 1 小时 29 分钟
</div>

---
class: text-left
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**RSI：从冷门到共识**
去年还小众的递归自进化，今年四五月份起成为硅谷热门方向；Anthropic 与 OpenAI 都已公开时间表

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**一家估值 46.5 亿美元的新公司**
隐身研发四个月，六月初官宣 A 轮融资 6.5 亿美元——公司名 Recursive Superintelligence 的缩写正是 RSI

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"强者愈强"假设成立吗？**
率先实现 RSI 的公司会把其他人越甩越远。田渊栋拆解这个推演：S 型曲线与平台期的变量

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**为什么是现在？**
coding agent 变强、模型能充当研究员，闭环第一次有可能转起来——"模型本身已经够足够强"是前提

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**可解释性的少数派**
大部分理论家已经放弃，他相信一定存在一个好的 principle 让模型运转起来，且终将把 AI 变成科学

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**First Steps 首批成果**
一个通用系统在三个 benchmark 上拿到 SOTA：nanoGPT BPP、speed run 79 秒 → 77 秒、算子优化

</div>

</div>

---
layout: two-cols
---

# RSI 是什么：让 AI 改进 AI 的闭环

- Recursive Self Improvement，递归自进化：找到用 AI 自我进化、自我迭代的方法，找到新的模型、新的训练逻辑
- 核心机制：模型已经比较厉害，能够发现模型自己的问题——"用AI找到就AI自己模型的问题，然后让AI带着你的模型变得越来越强"
- 前提条件："如果模型本身不够足够强的话呢，那这个很难"
- 闭环一旦产生，下一次模型变得更强——递归就是循环往前推进的意思

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsi-loop.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么是现在才火起来

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**触发因素一：coding agent 变强**
"主要一个还是因为就是coding agent变强了。另外呢就是说模型本身的能力也在提升。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**触发因素二：模型能充当研究员**
模型对 AI 自身有了比较强的认知突破，"就是你可以用模型来充当研究员"，让它找到现在模型的弱点，去做更好的优化

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**于是闭环产生**
"让它来找到这个模型的弱点，现在的模型的弱点，然后去做更好的优化。那么这样的话呢，这个闭环就会产生。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**概念本身并不新**
想法早就存在——十年前 Google 的 AutoML 就在用 AI 优化 AI。真正的变化是模型能力到位了

</div>

</div>

---

# 创业的契机：与 GPT-5 合写一篇论文

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**去年八月的一个实验**：田渊栋用当时的 GPT-5 合作完成了一篇 Grokking 方向的文章——给模型具体的细节和方向，让它去找新想法、新思路、证明新定理。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

"那篇文章呢，就是我会意识到就是我在做完之后其实意识到这一点，就是模型的能力呢已经基本上强到让我觉得我可以不用招实习生了。"

<div class="text-xs opacity-60 mt-1 not-italic">— 与 GPT-5 合写论文之后的判断</div>

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">

"也许五年之后我就被取代了。那么这个时间可能已经快到了。那么在这种情况下，与其自己被取代，不如我就开公司，我就做这个事情去。"

<div class="text-xs opacity-60 mt-1 not-italic">— 创业的直接动机</div>

</div>

</div>

---
layout: two-cols
---

# 研究循环的加速：从天到分钟

- 传统科研：导师指方向，学生执行、汇报、再调整——"大家是以天为周期进行这个问题的科研探索"，做成一件事"可能需要几周甚至几个月"
- 有了很强的 AI 之后：想法告诉 AI，AI 很快写出代码、跑完出结果
- "很多时候就是也许你写完之后出去喝个口水，喝个茶……开完会之后结果你就有了"
- 结果有了，就能看到问题在哪，开始下一步循环——loop 开始有转起来的趋势

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./loop-speedup.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 谁能最早看到信号

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**两种人都错过了**
senior 的人不做细节，只给高层次建议；刚毕业的学生把模型当执行工具，不去碰难题——"两边其实是有一个gap"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**看到信号的人**
既有经验、对"什么是难的问题"有判断，又在一手做事——"这样的人是很容易敏感的感觉到就是当前风向的变化"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**不亲手实践就感觉不到**
"你不亲手实践、亲身去体验呢，你是感觉不到的。"把模型真正当成合作对象做完一篇文章，才会意识到它的能力

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">

**天平摆回经验**：过去三年年轻人的优势在于"并不需要想太多，我们就scale up"；现在执行的重担落在 AI 身上，人更多做判断、方向把握和研究品味——很多当了十年经理、总监的人"突然开始写代码了"。田渊栋认为天平可能摆回更有经验的研究员一边，但承认这有争议。

</div>

---

# 与十年前的 AutoML 有什么不同

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 上一波：AI 在既定空间里搜索

- 研究员定义搜索空间的大小和行为，AI 写成算法去找更好的解
- "没有一个模型能够建模人类高层的知识，高层的这个思路"
- 人需要深度参与解空间的每个细节，AI 比较笨，只在空间里搜索

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 这一波：AI 自己找解空间

- 大模型对 AI 本身、对架构本身有理解，可以部分代替人类定义问题的工作
- "让解空间变得非常大。而且应该说比较智能"
- 新的问题：怎么最大限度发挥 AI 的能力，让它自己找到解空间的结构和好的解法

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">

区别的核心在于**人参与多少**：以前人深度参与每个细节；现在人退后一步，让 AI 自己找结构。

</div>

---

# 递归先于完全自动化

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**背景**：OpenAI 的时间表是今年九月做出 AI 研究实习生，28 年 3 月前实现真正自动化的 AI 研究员——都指向"把人从这个 loop 里解放出来"。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"我觉得完全自动化呢不一定很快会发生。"

<div class="text-xs opacity-60 mt-1 not-italic">— 田渊栋对自动化时间表的判断</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

"某种程度来说，人是减少了他的时间。但是人可能需要更多脑力去做一些就是更高层次的工作。所以人还在这个loop里面，只是这个loop的level变高一点。"

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"我觉得递归会先发生。就完全自动我觉得现在还看不到，就是跟我以前的AI代替不了顶尖人类研究员的观点是一致的。"

</div>

</div>

---

# 那个有诱惑力也十分危险的假设

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**假设**：率先达到 RSI 状态的公司会把其他人越甩越远；且存在一个窗口期，错过了就无缘决赛圈。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"这个逻辑呢应该说还是比较正确的，但是……"——田渊栋先认可大方向，随即指出关键变量。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**如果进步是渐进式的**：scaling law 路线直接通向 RSI，堆算力就行——初创公司没什么机会，OpenAI 和 Anthropic 已经领先且会一直更快

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**如果进步是突破式的**：一两个人先产生突破，达到下一个层次，层次之间的能力差距"远远高于前一个层次"——初创公司还有一定空间

</div>

</div>

</div>

---
layout: two-cols
---

# S 型曲线与平台期

- 田渊栋的推演："S型曲线，一开始涨得很快，然后呢，因为有些瓶颈会停下来，就一段平台期，直到下一个突破出现，再次出现S型曲线"
- 每个平台对应一个突破；没达到突破，大家做得再好也只能逼近上一层次效果的上界
- 驱动机制："你发现了新的东西，新的想法，那么你这个因为想法产生的模型会变得更强"
- 这个想法目前"还不是很主流"——取决于大家对 scaling law 有多大信任感

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---

# scaling law 不是全部

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**如果 scaling law 百分百成立**：不存在平台期，"我比你快一点，我就一定比你快更多"——递归自我进化是一个平滑过程，任何初创公司都追不上 OpenAI 或 Anthropic。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**他的反驳**：scaling 的横轴是指数级的——"你需要十倍的计算资源，十倍的数据……然后最终能够达到就是线性的增长"。而十倍资源"现在已经开始有瓶颈了"。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">

"这个限制应该说是很大的限制，就是说你不可能让全世界，整个地球的电力都供应给你一个人做这个自我进化，是不可能的。肯定会有博弈，肯定会有一些限制。所以应该有更好的、更有效的方法去做这事情。"

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

他还说过：如果 scaling law 就是未来的全部，那是一个"比较悲哀"、也"非常无聊"的未来——没有新的知识上的突破。

</div>

</div>

---

# 怎么读 Anthropic 的 "When AI Builds Itself"

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### 800 小时
<div class="text-sm my-1">Claude 的 AI agent 端到端独立完成了一个开放式 AI 安全研究，累计工作 800 个小时</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 97% vs 23%
<div class="text-sm my-1">把 weak-to-strong 的性能差距缩小了 97%；如果是人来干，一周可以缩小 23%</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">

### 第一层
<div class="text-sm my-1">田渊栋的判读：这基本上还是提效，是自我进化的第一层</div>

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">

**他的解释**：文章里的算法"应该说还是比较常规的"，是把很多常规想法放在一起、把分数往上提。但分数是必须的——"因为现在除了分数之外，你没有其他办法能够那个衡量这个模型现在能力有多强"。分数具体体现为提效、提高速度或减少 latency，"这个应该说是就是说自我进化的一个第一层"。

</div>

---

# 分数之外，研究比代码难得多

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**与 Anthropic、OpenAI 的异同**：大方向上差不多，区别在于难度分布——Anthropic 展示的自我进化主要在代码上。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**代码任务是有章可循的**：比如从头开始写一个 Linux、写一个 C++ 编译器——"这个问题本身是有章可循的"，难在工作太繁重，人做起来太累。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">

"就是说很多就是比较难的AI research problem其实应该说人都不知道怎么做。有很多的这个很难的一些比较要要要突破性的进展或突破性的发现的东西。那么这东西呢其实应该说是应该说现在AI还是很难做。"

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**推论**：AI research 与代码之间还有差距，更难的地方在真正的研究问题上。

</div>

</div>

---

# RSI 比 coding agent 大得多

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"我觉得RSI比coding agent要大得多。""coding agent它只是一个执行者。"

<div class="text-xs opacity-60 mt-1 not-italic">— 不仅指市场规模，还包括研究上可能的方向和逻辑</div>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**coding agent 已接近标配**：Claude、Copilot、开源模型都能用——"因为有开源模型的存在，所以就是说这件事情变成所有人都有了，这个能力"

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**光有支点不够**："就光有这个支点其实不见得你就能做好RSI"——田渊栋认可这个判断

</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**顺带的产品评价**：GLM 5.2"还是挺不错的"，和 Opus 4.6 差不多；4.6、4.7、4.8"没有太大区别"，可能唯一区别是 4.8 的 context window 变长了。

</div>

</div>

---
layout: two-cols
---

# 需要的能力栈：不止 coding

- 做 AI scientist 还需要人类研究员的品味、方向感，和对问题的抽象能力——"这些东西应该说现在的模型都不太有"
- Agentic behavior：AI 怎么动用工具、动用已有的知识，获取新知识，把各种东西放在一起完成任务——前沿公司已在往前推
- 收集信息、找到最重要的信号：deep research 方向已有大量工作
- 对初创公司：这些能力很多已有开源方案，但"它们有多大程度会左右最后的RSI的结果"，每个人的想法不一样

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 人真正的 grokking

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"可以把一些概念从一些纷繁复杂的这个表象中抽取出来，并且加以总结，加以思考，然后继续再应用于新的问题上，这样一个能力。"

<div class="text-xs opacity-60 mt-1 not-italic">— 田渊栋定义的创造力："从少量的样本你就可以看到精准而细节的联系"</div>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**大模型的强项**：有大量数据——常见、重复的领域工作有无穷无尽的数据，所以可以学会；应用研究、解已有模式的数学题，AI 也已经会

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**人的优势**：开创性领域问题层出不穷、样本很少，"你让AI去做，恐怕是比较难"；"这是应该说是人跟大模型相比，人比较大的就是一个优势"，是对人来说真正的 grokking

</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**CS 领域也分两半**：工程上反复实践过的能力 AI 已经有了；但理解模型本身怎么学、怎么涌现这类问题没有现有数据集，过去十多年的理论尝试都未给出满意答案。

</div>

</div>

---
layout: two-cols
---

# RSI 的阶梯：不像无人车非零即一

- RSI "不是那种像无人车那样，要么是零，要么是一百"，而是有很多阶梯
- 初期阶段就能做很多事：优化各种算法、提高性能——低级台阶本身就有很多实用价值
- 第二级台阶可能有更深的东西能挖出来，"实际上会更大"
- 最终目标："我们希望AI成为像爱因斯坦或者牛顿这样的这样的大脑"，用很少的样本获得很深的知识
- 就算最高目标没做成，中间的应用也很多

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsi-ladder.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# First Steps：一个系统，三个 benchmark

- 6 月 11 日发布技术博客 "First Steps Toward Automated AI Research"，通往 AI 自动化研究的第一步
- 三个 benchmark 是**同一个系统**跑出来的，通用，不需要针对每个任务修改
- nanoGPT 5 分钟训练：BPP 降到比 community 更低
- nanoGPT speed run：效率维度
- 算子优化：作用在基础设施上，新算子比当前 SOTA"还要好不少"
- 选它们的共同点：反馈比较快，"这个系统能很快地跑起来"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./first-steps.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 79 秒 → 77 秒：两年 sota 上的两秒

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**成绩单**：nanoGPT speed run 是 community 做了两年的方向，"这个数字也是很难再往上提。但是我们在这上面又提高了两秒钟左右"。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

"79秒是过去整个community做了两年的sota。对，那就接下来就很难再往上提了。"

<div class="text-xs opacity-60 mt-1 not-italic">— 解释为什么绝对数字小、含金量高</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

"数字看起来绝对数字不大，但是其实应该说是对那些已经做过这个方向的人来说呢，这个数字还是比较大的。"——这些成果都开源了。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**规模差距**：nanoGPT 训的是 GPT-2 级别的模型，和主流大模型参数差很多；迁移到更大规模还会有一些 gap——"这个我们也在继续继续做"。

</div>

</div>

---

# 算子优化：非专家团队赢了专家公司

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 背景
<div class="text-sm my-1">英伟达新发布的 benchmark；算子变快对 model training 和 serving 都有影响</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 对手
<div class="text-sm my-1">第二名 Double AI：以色列团队，CEO Sasha 是前 Mobileye CEO，成员都是专业 GPU 工程师</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 结果
<div class="text-2xl font-bold text-green-600 my-1">高 10%</div>
<div class="text-sm">"我们的效果比他们要高10%"</div>

</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"我们其实组里面没有什么人是GPU的专家……你要去看我以前的简历，以前的那个故事，我没有真正做过算子优化。"

<div class="text-xs opacity-60 mt-1 not-italic">— 非专业团队靠通用的系统与 AGI 逻辑，做到比业界顶尖专家团队更好一点</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

这部分最初是他一个人搭到 sota，后来大家很兴奋，很多人加入，达到更好的结果——英伟达对此无所谓，"只要能算子变快就行"。

</div>

</div>

---

# 系统、机缘与下一步

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**为什么叫"系统"不叫 agent**："因为这样的话就是你可以保留各种可能性"——细节上比较保密

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**机缘巧合**：先做相对容易的第一步，拿出好的初期结果，"通过这方式也可以证明我们的系统做得更好"

</div>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**下一步**：继续优化系统，做预训练、后训练等更广泛方向；roadmap 还没有——OpenAI 的 roadmap 也是成立十年之后才提，"现在这个时间会缩短"，但"应该还不至于快到要只要半年的程度"

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**商业化与算力**：商业化"我们也在思考中"，希望系统保持一般化，不为一两个 vertical 变特殊；6.5 亿美元融资"可以做一些事情"，但"达到大厂的级别，那还有一定距离"

</div>

</div>

</div>

---

# 可解释性：少数的相信

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**两派对峙**：大部分人"已经觉得绝望了，就是说大模型那么复杂"，认为没法了解里面在干什么；田渊栋自认少数派。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"我觉得一定是有一个有一个好的principle，能够让这个模型运转起来。那么……一方面就是能够让这模型变得更强，另一方面呢就是说能够让模型变得更加安全。"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**信念来源**：多年对神经网络训练算法、权重生成、梯度下降如何塑造学习的分析工作——2020、2021 年之后，很多想不通的问题"突然想通了"——"我也许在一条正确的路径上再往前走"。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">

"我不影响我心情。我觉得也许，我会我是少数派会把它做出来的那个人。"

</div>

</div>

---

# 理论家的出走与留守

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**"打不过就加入"**：很多做理论的人在 AI 热潮后放弃了之前的工作，要么加入 OpenAI 等大公司，要么加入 scale law 大军。例子：Anthropic 的 Dan 早年做模型分析理论，与 Princeton 的 Sanjeev Arora 常有合作。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**今年年初，有理论计算机科学家加入 OpenAI**——加入的动机各不相同：有人想用 AI 做点事，有人相信 AI 就是一切，也有人想进去看看再回学术界。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**留守者**：马毅老师追求可解释性与白盒大模型的研究；LeCun 走的是另一条路——世界模型与隐空间推理，重点不在解释性，而是解决现有大模型做不到的事。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"如果所有人都相信啊，我scale law就是一切了，那世界会很无聊。""我希望就是以后人类还是有一些多样性的。"

</div>

</div>

---
layout: two-cols
---

# AI 终将变成科学

- 现状："现在它可能很难说是一个科学，因为有些原理确实搞不清楚"
- 信念："我觉得它以后终将变成科学"
- 历史的呼应："从炼金术变成化学，或者说从……第谷的天文观测，到开普勒的总结经验，然后最后变牛顿的一个力学原理，这过程一定会发生"
- "在牛顿没有出现之前，大家同时会觉得这事情不可解释……等到牛顿出现了之后，会觉得啊，这个事情其实还是，还挺简单的"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./science-path.excalidraw"
  class="max-w-full"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 下一个牛顿，可能是 AI

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"你觉得下一个出现的牛顿还是人类吗？""不一定，可能是AI。可能是AI，可能是人类加AI。"

<div class="text-xs opacity-60 mt-1 not-italic">— 为什么要做 ASI 的原因：用世界上所有的计算资源和最强的大脑——包括人的和 AI 的——把这件事做成</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"如果到那个时候，可能图灵奖也不是很重要了。如果这系统很强的话，那它可能会在很快的速度获取很多的知识……就它变成了一个就是knowledge discovery system。"

<div class="text-xs opacity-60 mt-1 not-italic">— 回应"有生之年会看到图灵奖颁给一个系统吗"</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**人类研究员的乐趣**：如果能理解 AI 到底怎么工作会"很开心"；AI 自动发现新东西之后，"你去一个是当然是欣赏它的美了"——他至今保持着看数学证明的习惯，享受"豁然开朗的感觉"。

</div>

</div>

---

# 术与道：AlphaEvolve 少了一次乘法

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**例子**：Google 的 AlphaEvolve 找到一种矩阵乘法变换，先加后乘，减少一次乘法——田渊栋看了，觉得"还是挺有意思"。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"因为现在AI做的东西很多时候是属于这个术上的那个level，没到道上的那个level。就是说术和道是不一样的，术是指就是具体的那个细节。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**术**：具体细节的优化——减少一次乘法的变换，相当于"在高空中做一个穷举，然后找到一个穷举的一个好的结果"

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**道**：发现新的理论、新的逻辑链条——"这个东西呢它本身是美的，但是美的你以前没有见过，是不一样的东西"

</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

所以"很多时候还是要看人做的东西"——目前 AI 的成果还没到让人有享受感的"道"的层面。

</div>

</div>

---

# 安全：像训狗一样训练 AI

<div class="mt-4 text-sm leading-relaxed space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**谁在担心**：领域外的人会问"AI 自我进化了之后会不会有一天超过人类控制"；领域内的人反而不觉得问题太严重。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">

"我们在训练AI的时候呢，我们把它当成就是我们当然狗一样的训练。……在这样的进化压力下，就是AI是没办法进化出跟人一样的就是某些自我意识和这个就是自我认知的这样的一个概念的。"

<div class="text-xs opacity-60 mt-1 not-italic">— 训练信号：让 AI 很好地服务人、帮助人解决问题</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"有很多天才的那个数学家和物理学家……他们在各自领域上可以做得非常天才。但是另一方面呢，就是说他们也与世无争，他们并不想要权力……能力和它的欲求是完全可以分开的。"

<div class="text-xs opacity-60 mt-1 not-italic">— 能力与欲求可以分离，超级智能不一定需要自我意识</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**可解释性的安全价值**："通过可解释性你可以真正知道模型在干什么"，从而"消除人们对这种黑箱的这种恐惧"。

</div>

</div>

---

# 修仙社会：言出法随的个人愿景

<div class="mt-4 text-sm leading-relaxed space-y-2">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"如果真的是有就是RSI普及了，然后所有人都有超越我们以前智能百分……很多很多层次智能的时候，那么整个世界会完全不一样。""以后我们之前所有的世俗上的一些东西可能都能够满足……就是进入了修仙社会嘛。就是说言出法随……我今天晚上想要一个大房子，马上就有一个大房子。"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**他自己的小说里加了限制**：想要房子就有房子的世界会让人"失去了一个动力"——"一旦失去动力之后，那么人类社会怎么发展？"所以小说里迭代两次，让管理者思考怎么让人保持向前的动力。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**美好的部分**："一些现在很难克服的病痛是可以消失的"——"对，我相信是这样子。"

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**分清愿景与业务**："那些什么修仙、修仙社会之类的东西，那肯定是我自己的愿景"，偏科幻；公司层面"我们还是希望把这个事情做成"，是执行层面的工作。

</div>

</div>

---

# 反大厂：150 人的临界点

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">

"以前Llama 4和xAI都是超过150人之后，就开始不行。""150人就是说从那个人类组织学上来说，150人是一个临界点。"

<div class="text-xs opacity-60 mt-1 not-italic">— 30-40 人小团队人人都认识；人变多后不再相互认识，只能靠组织架构汇报</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**这一波 AI 是"反大厂"的**：大厂里的 incentive、职级、岗位设计都与 AI 方向背道而驰；组织越臃肿，AI 进展越慢。经理和执行者的二级架构让速度变慢——"人的交流速度永远是最慢的"。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**中层管理的问题**："他们的那个目标不是为了让项目做成，很多时候目标是为了让自己能够过得更好。"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**大厂里的例外**：OpenAI 有 7000 多人，但"做模型的人其实也不是很多……Claude的这些团队很小"——核心团队保持精简。他的公司也"不会招太多人"。

</div>

</div>

---

# 两类研究员：指方向 vs 做成事

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-2 gap-3">

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50 bg-opacity-30">

### 第一类：提好问题，指好方向

- LeCun：自监督学习——"把reinforcement放在最上面，cherry on on top"，因为强化学习反馈太少，自监督反馈多、学得快；GPT 预测下一个词也是自监督的一部分
- Ilya 和 Dario 都属于第一类；Ilya 对 scaling law"有非常非常宗教般的信仰"

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 第二类：既知道做什么，也知道怎么做

- "我不仅要知道做什么，还知道怎么做"——把机制挖出来，找到路径，在路径上把事情做成
- 田渊栋的很多工作属于这一类
- "两类都有非常好的研究员"

</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**第一类研究员的风险**：只指方向、不做实现的人，会把不同难度等级的问题混在一起——"他不会去想这件事情怎么完成"。

</div>

</div>

---

# Ilya 的转向：空气都被 scaling 吸走了

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"他说房间里的所有空气都被scaling给吸走了。""所以他觉得应该去研究点别的了。"

<div class="text-xs opacity-60 mt-1 not-italic">— Ilya 去年底接受采访时的说法，田渊栋"非常同意这一点"</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**红利吃完了**："他之前的scale，scale，它这波红利已经差不多吃完了。因为不管怎么样，任何一个研究方向它都是有底的。"Ilya 在正确的时间、正确的地方提出正确的想法并让很多人执行，"非常成功了"，但"不可能他这一辈子都是吃这一个方向的"。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

"你就应该在大厂。""对，你在Anthropic或者OpenAI。""或者说反过来说是你确实看到了什么事儿，不一样的事儿，你才应该去做一个startup。"

<div class="text-xs opacity-60 mt-1 not-italic">— 非常相信 scaling law 的人应该留在大厂；看到了不一样的事，才应该去创业</div>

</div>

</div>

---

# 田渊栋的路径：从无人车到 AI 研究

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**2013 年加入 Google 无人车**：级别 4 只能做打杂的活，GPU 资源先给级别 7 的人；做紧急车检测——小样本问题，"连个分类器都都都都训练不出来"，只能手写规则。"对我来说没有什么职业发展的一个前途。"

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**对无人车的判断**："要么就是成功，要么就是完全不成功，它没有没有中间状态"，corner case 要修很久。面对"16年这个车就可以上路了"的乐观宣言，"永远是还有五年"——2011 年听说五年，2013 年进去还是五年，现在还是五年。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Meta FAIR：先工程后研究**：自己从头搭围棋系统——Monte Carlo tree、分布式 reinforcement 学习系统。当时被评价"这个人太工程了，不像一个研究员，别人打开电脑全是那个文章，我打开电脑全是代码"。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**2018-2019 年围棋系统 20:0 战胜韩国职业棋手**，之后更偏研究，2019-2022 年形成自己的 taste。至今"每年还是有至少一篇的一作的文章"，保持一手的感觉，不"泛泛而谈"。

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"也许五年之后我就被取代了……与其自己被取代，不如我就开公司。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈创业动机：看见 loop 转起来之后的选择</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"这个时间被压缩到几分钟，甚至更短的时间。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈研究循环的加速：从以天为周期到几分钟</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"你不可能让全世界，整个地球的电力都供应给你一个人做这个自我进化，是不可能的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 scaling law 的现实极限</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"我可能是少数派吧，因为大部分人可能已经觉得绝望了……没希望再了解里面在干什么。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈可解释性：少数的相信</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我们刚刚看到一点点的星光，就太阳还没露头呢。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈智能的未来空间，出自他的科幻小说《破晓之钟》之名</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"人的交流速度永远是最慢的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈组织为什么拖慢 AI 进展</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="text-lg opacity-70 mt-6">
"我觉得它以后终将变成科学。"
</div>

<div class="text-sm opacity-50 mt-8">
田渊栋 · Recursive Superintelligence 联合创始人 · 晚点聊第 178 期 · 2026 年 8 月
</div>
