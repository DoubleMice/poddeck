---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E247｜对话盛颖：xAI，Infra的浪漫，SGLang，开源，平权与"甄嬛传"'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 对话盛颖：xAI、Infra 的浪漫与 SGLang

<div class="text-sm opacity-60 mt-4">
从斯坦福形式化验证博士，到 xAI 推理系统搭建者，再到 Radix Arc 创始人——一个开源推理引擎如何跑上数十万张 GPU
</div>

<div class="text-xs opacity-50 mt-6">
硅谷 101 · E247 · 2026 年 8 月 · 1 小时 46 分 · 主持：陈茜
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**SGLang：跑在数十万张 GPU 上**
零市场推广的开源推理引擎，每天为谷歌、微软、英伟达、xAI 生成数万亿 token

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**1 亿美元种子轮的底气**
2026 年 5 月官宣 Axial 领投；英伟达投资部门、AMD、英特尔 CEO 陈立武、John Schulman 都是投资人

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Infra 的浪漫**
她把 infra 本身当作产品：追求系统以优美的形式跑起来，而不是"豆腐渣工程"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**离开 xAI 的两个月**
再待两个月就能拿到第一年 vesting，她还是选择出来把 SGLang 变成公司

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**开源与平权**
江西小城的互联网教育塑造了她的开源观；LMSYS 是她"终身会做的事业"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**心流与"手册"**
ADHD 让她读懂自己；intense 与输赢机制，是进入心流状态的开关

</div>

</div>

---

# 三次打破舒适圈：江西 → 上海 → 纽约

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- **江西 → 上海**：本科经历强烈的 culture shock——"身边的人更理解职业发展、人生发展"，自己处在"无知状态"
- **毁约去哥大**：已接的 PhD offer 与"君子协议"刚过，第二天收到哥大硕士 offer；打电话问父亲能不能毁约、交违约金，父亲一分钟就拍板："好，你去"
- **上海 → 纽约**：纽约的 shock 是包容——"没有人在乎我穿什么、想什么、做什么"，从被限制状态到完全自由状态

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-cities.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 普林斯顿 workshop：数学是唯一真实

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
在哥大读硕士时去普林斯顿参加一个 workshop，被校园环境"直接包围"：与世无争，人世间的挣扎沉浮都显得"非常的没有意义"。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"什么都不重要是重要的……虚无才是它真实的东西，就只有真实是重要的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈普林斯顿 workshop 的感受</div>
</div>

<div class="text-sm leading-relaxed">
数学在那个环境下特别优美：确定性、绝对化，让她进入心流——"大脑被完全的调动起来时候进入一种生理性愉悦"。但西海岸不同：斯坦福有更多关于"成功与否"的 noise，"我又开始觉得我跟世界有关"。
</div>

</div>

---

# 心流的两极：ADHD 帮她读懂自己

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 了解 ADHD 之后，很多事都被解释了："我找到了怎么使用我自己的一把钥匙"——"手册有了"
- 悟到之后不再逆着天性做事："我只有这个事情它让我觉得非常exciting，我才有可能把那件事情做好"
- 她不在乎输赢，在乎 intense 的感觉："我不是很在乎输赢。但是我在乎那个intense的感觉"
- 看《甄嬛传》跟不上剧情、要反复回退；打游戏、竞技运动却极度专注——两极切换

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bipolar-focus.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 形式化验证：从数学角度证明代码

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 博士方向（Clark Barrett 教授组）：把代码拆解、映射到一阶逻辑，从数学角度证明代码是否满足某个性质
- 每份代码背后都有 spec：前置条件、invariants、执行后条件——用一套语言描述程序该满足什么
- 她的研究集中在 SMT solver 本身的优化：效率、正确性、语义定义
- 收获是全新的视角："接近数学的语言它会更容易被验证"；接近硬件的语言更灵活、更贴近人的思维习惯

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./formal-verification.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 斯坦福第一课：被动进入形式化验证

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**rotation 配导师**
前几轮没有遇到能进入心流的问题，也没和老师双向 match；第四轮与 Clark Barrett 教授匹配成功

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**被动开局**
"因为我要读这个PhD，所以我才就是需要把这个地方不停的去做研究"——在被动状态中慢慢欣赏到它的美感

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**简历之外**
论文高产的背后，真实过程比简历干瘪很多：找导师不顺、方向被动，还有长时间的空窗期

</div>

</div>

<div class="text-sm leading-relaxed mt-4">
她原想成为数学家：普林斯顿的氛围让她觉得"什么都不重要"，但斯坦福的西海岸文化让她重新想参与世界的推动——最终在第四轮 rotation 进入形式化验证，开启"哐哐出论文"的时期（2020 年 IJCAR 最佳论文奖、2022 年 IJCAR 提名、TACAS 最佳工具论文奖）。
</div>

---

# 疫情里的低谷：教科书般完美的导师

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**意外的开门红**：进领域的第一篇论文（polynomial speedup）就拿到 IJCAR 最佳论文奖——她是被别人 congrats 时才知道的，"非常非常的意外"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**得奖之后**：又陷入找不到下一个 exciting 问题的状态；疫情来了，接近一年处于 depression 状态，没有做任何事情。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**好导师的样子**：Clark 只关心她能不能走出来——让她上课、做 TA，没有任何产出压力；"Clark从来没有断过我的经费"。她还回国待了半年疗愈，一年后才慢慢走出来。
</div>

</div>

---

# 一篇 20 页的证明：两次全部推翻重来

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
sequential paper 的证明写了 20 多页，来来回回改四五次；"有两次我几乎是全部推翻重写了那个证明"——花一两个星期推出来的证明，因为起点处一步错了，后面所有推理全部作废。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"我记得那个时候Clark自己也说，那篇paper里的证明是他过去一年的highlight。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖回忆最愉悦的一段形式化工作</div>
</div>

<div class="text-sm leading-relaxed">
过程走完非常有成就感；从这篇 paper 开始，她看见了形式化理论的深刻含义与优美之处——用数学的视角理解程序语言设计，是她打了 20 年交道却从未有过的角度。
</div>

</div>

---

# 为什么离开形式化验证：想离世界更近一点

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**看见局限**："它能够在现实中practically被应用的场景太少了"；"你要验证一个程序太贵了"，能验证的又很少，不能产生足够大的影响。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"但是我觉得我想离世界更近一点。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈离开形式化验证、转向 AI 的原因</div>
</div>

<div class="text-sm leading-relaxed">
于是她开始探索 AI、寻求转化——但这个转化过程同样不顺利：又有一年时间的空窗期，"我实际上没有做任何事情"。好在形式化给她的底子还在：数学与代码，恰好是她后来做 infra 最熟悉的两种语言。
</div>

</div>

---

# 空窗期与"三个月产出"：必须 intense 的人

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"外人看来你会觉得那个作品是我过去一年的成果，实际上它是我过去一年里最后三个月的成果。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈转 AI 后的一年空窗期</div>
</div>

<div class="text-sm leading-relaxed">
形式化时期同样如此：三篇 paper 分布在三年，每篇真正推动只花三个月，"这三年里面每年都有九个月"在迷茫、在找想解决的问题。找到那个问题的驱动力，是她最大的 driver。
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
**性格根源**："我没有办法妥协"——"我没有办法做我不感兴趣的事情"，做不好。
</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
**必须 intense**："我哪怕睡觉的时候也会一直做梦"——潜意识里也停不下来。
</div>
</div>

</div>

---

# 天才、研究员与科学家：三件不同的事

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"天分是指当外界人不把研究当回事……你还想做它，那就是你的天分。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖对天分的定义：外界不看好的时候你仍想做</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**发 paper 是技能**："发paper跟做research是两件事情"，跟真正意义上的科学家是三件事情——发 paper 有套路，掌握规则就能在同样的规律里不停产出；做 research 只是一份职业。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**她定义的科学家**：真正推动人类知识边界的人，"如果不是他这个事情会晚很长时间发生"——非常非常少。对图灵奖三人她不给直接结论："我非常在乎一手信息"，不评价没接触过的人。
</div>

<div class="text-sm leading-relaxed">
自评很清醒：没拿过金牌，只有全国信息学奥林匹克银牌和纽约区域赛冠军（组队制，"我的队友其实非常强"）；在的环境里"他们总是比我更强的"。
</div>

</div>

---

# 谷歌实习 2022：被 AI 的第一次冲击

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**为转 AI 而去的实习**：Google X 孵化的 AI for code 项目，一二十名全职 + 等量 intern，激进地尝试不同方向。纯 AI 岗不收她，这个岗位是因为她的 program analysis 背景招的。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**发现旧工具"非常的无力"**："大模型其实已经把传统的这个领域里的技术都完全覆盖了"——交叉学科借用旧工具的幻想，在她这个"从另一个领域过来的人"看来并不成立。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**时代背景**：当时 ChatGPT 还没发布；谷歌刚出 PaLM、内部有 LaMDA，甚至还有程序员声称 LaMDA 有意识——硅谷已经闻到了方向，只是尚未全面爆发。
</div>

<div class="text-sm leading-relaxed">
这段经历让她"非常坚定地进入了这个新的topic"：被 AI 的 powerful 震撼，决定要做大模型。
</div>

</div>

---

# 为什么是 infra：确定性、数学与代码

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"做infra跟我的思维习惯更接近。它是co-reason的，确定性的，基于数学的，然后基于代码。数学和代码这两件事情我都很熟悉。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈为什么在 AI 众多分支里选择 infra</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**不是"选择"出来的**：她也尝试过算法方向的分析，没太成功；infra 成功了，"最后呈现的就是我的爆发都在infra这一侧"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**LLM serving 版图**（陈茜梳理）：vLLM 解决内存管理、KV cache 压缩、S-LoRA 解决多 adapter 并发、Chatbot Arena 做测评、SGLang 做结构化生成——每个点都有对应研究。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**她的方法论**：问题是"一次性看见的。短时间内一下看见了很多问题"，动手要一件一件做；优先级看哪个带来最大 margin、"先解决最大的bottleneck"。
</div>

</div>

---

# SGLang：博士生涯的收官之作

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
2023 年，盛颖在斯坦福读博的最后阶段，与 LMSYS 的社区研究者一起做出了 SGLang。转 AI 后 PhD 最后两年的 LLM inference 工作都比较 local，SGLang 想把它们"集大成于一体"。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"从做SG-Lang之初就希望它是做成一个production ready可以被广泛使用的推理引擎，被大规模使用的推理引擎。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：production ready 从第一天就想好了</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**为什么已有 vLLM 还要做**：vLLM 开源之后有大量维护、社区琐事她没太参与；SGLang 是"想要把我的思想能够在一个地方继续往上推"的地方。
</div>

</div>

---

# SGLang 与 vLLM：同一赛道，不同起点

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 把时间维度放进去看，两个引擎在每个时刻有不同的侧重点；静态比较会看不出差别
- SGLang 更早进军 scale-up 方向：千卡、万卡级别的大规模 production serving
- vLLM 更早在社区覆盖、long-tail 模型支持上发力
- 好东西会互相学习："如果你有好东西一定会相互学习，会copy过去"——今天两方都在补齐短板

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sglang-vllm.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# Ion Stoica：making impact 与另一套价值观

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Berkeley visit 时的教授、Databricks 联合创始人之一。专业上带来很多 inspiration，是"lifetime的一个mentor"——"他的骨子里，他最自我认同感高的还是教授这个身份"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**他的动力之源**："impact可能是他做所有事情的动力之源"——making impact 是他做所有事情的原点，也传递给了学生。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"我在乎的是impact，而不是making……我不是完全care这件事情是不是我推动的。别人推动也可以。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖的另一套价值观</div>
</div>

<div class="text-sm leading-relaxed">
对照她在 Databricks 的五个月：想在里面推广 SGLang，但成熟公司每件事都需要充分理由，new grad researcher 没有太多 power，结果不算特别成功。
</div>

</div>

---

# xAI 为什么无法拒绝：support + freedom

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
2024 年 10 月加入 xAI。正好 xAI 到了需要做 production inference 的节点：她和丈夫连明（已在 xAI 做 training）可以共同 build 整个 inference stack、solution 和 team。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"它可以给我两样东西，一个叫做support，一个叫做freedom……当时应该只有xAI真正给我这两个。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈为什么是 xAI</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**只有早期公司给得起**：其他机会有的只给 support，有的只给 freedom。加入后她负责 engine：同时服务 production 部署组、research 团队（RL rollout 用他们的 inference engine），还要管配置协调。
</div>

</div>

---

# xAI 的"无边界"文化：看见全栈

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 她给 xAI 的评价极高：xAI 时光是"回忆最美好的一段时光"
- 早期 xAI 不到一百人，"没有任何politics"：个个都是人才，互相 supportive、humble
- Elon set 的"没有边界的文化"：任何事情都可以 touch 到，没有组与组之间的隔阂
- 没有特别多 people management，重工程师文化，做事非常直接

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./full-stack-view.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# xAI 的 intense：一年顶几年的成长

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"你在那里待了一年，你可能在外面是好几年才能拿到的成长。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈 xAI 的强度</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**机制像健身**："你感觉到痛了，你才能成长，才能长肌肉了"——压力大、强度大，人是被 train 出来的。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**0.0 与 1.0 的版本**：0.0 时 Elon 对大家非常 nice、像 family；1.0 有"生长痛"，Elon 中途回来，但大家共同克服难关——"我我没有感觉到军心有什么动摇"。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**后来的阵痛**：xAI 没有抚平从靠人运转到"需要靠体制来运转而不是靠人来运转"的过渡——对 Radix Arc 的警示是：文化在 scale up 时会变脆弱，"如果你不pay attention，它是会broken"。
</div>

</div>

---

# 差两个月 vesting，还是选择离开

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
2025 年几波浪潮把 SGLang 推到高点，大量需求涌来；但社区核心开发者都是网友，有热情却难把项目"严肃地"做好、做成成熟的高质量水准。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
team 被"team bandwidth限制着"：大家想 deliver，但交付都是"低空飞过"，甚至失败。到七八月份，她的焦虑到了顶点——再不填补"中空的状态"，就要"让外界失望"了。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 italic">
"我只要再待两个月我就可以拿到我的那个第一年的vesting。所以两个月都不能待。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：在 xAI 待了十个月就离开</div>
</div>

<div class="text-sm leading-relaxed">
心理状态已无法继续："我已经没有办法productive的生产做xAI的价值"——"我不配待在这个地方"。
</div>

</div>

---

# 没见过面的核心开发者：代码就是身份

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"我们已经共同工作了两年了，我还不知道他们长什么样子……我只要看到你的代码，我就知道你是谁。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈 SGLang 的网友社区</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**社区的默契**：开了很多次会，从来没有开过摄像头，也没人提这件事——"自然到你根本没有想起来这件事情"。核心开发者里好几个至今没见过面。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**热情抵不过增长**：大家都有 full-time job，靠熬夜、通宵、放假写代码维持；增长快到不可能用这种方式维持下去。
</div>

<div class="text-sm leading-relaxed">
这正是她必须出来创业的直接原因：没有一家公司支撑，社区没有办法严肃地 deliver——所以她离开 xAI，和朱邦华一起把开源项目变成 Radix Arc。
</div>

</div>

---

# Two Sigma 与金钱观：体验一把华尔街

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
哥大毕业后在华尔街量化对冲基金 Two Sigma 待了半年：21、22 岁的她被"里面的人很聪明"吸引，单纯想体验一把——"天天在那玩钱没啥意思"，但金融不是她的人生追求。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"排第一的是xAI，排第二是Two Sigma……我很幸运，我每次在的都是最好的时候。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖给工作过的公司排序</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Two Sigma 的 organized**："Two Sigma的infra在我跟其他的比起来是最稳定的一个地方"——业务模式稳定、剧变不多，大家能做大量 maintenance。去了别处才意识到"原来其他地方这么乱"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**金钱观**："有必须性，没有重要性"——底气在于"如果有一天我融不到钱，我还自己还有钱"。
</div>

</div>

---

# Radix Arc 愿景：infra 是一个工具箱

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 长远目标：让不同使用场景、不同 data、不同产品与 serving 目标，都能用这套工具源源不断产生最适配的模型
- "基础模型也是infra"——foundation 包括所有需要的 gradients、codebase、toolbox、sandbox 与中间状态的模型 checkpoint
- "它们在一起变成了一个工具箱"
- 现状：40 多人，6 月 1 号刚搬进新办公室；扩张比预期快，已经在控制

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./radix-toolbox.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 从末端切入：inference 与 RL 的扇出

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 现在 focus inference 与 RL——它们处在生产模型 pipeline 的末端
- post-training / RL 是 fan-out 状态：一个基础模型开枝散叶成多个模型；AI 进入生活各方面，企业都想有自己的模型
- inference 更 fan-out：模型完成后在硬件上跑起来，有 endpoint 供人调用
- 两者一起做不难：RL 很大部分挑战来自 rollout engine（本质就是 inference engine），"系统层面它们有非常、非常大的overlap"

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pipeline-fanout.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# Taste：infra 的美与浪漫

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**taste 的定义**：关注的不仅是 end goal，还有 end goal 的组成——系统是以 well-designed 的形式跑起来，还是"豆腐渣工程跑起来的"、很 hacky 的方式跑起来。同样的 end goal，有 taste 的人在乎形式是否优美。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"infra本身在我眼中就是产品……我跟infra之间的这个浪漫的关系。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：infra 不是 support 角色</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**infra 的处境**：长期被 underestimated，被迫不停 support 别人——"他们总是被迫去做一些hacky的事情来达成目标"，处在一个被拉扯的状态。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Radix Arc 反着来**：training job 可以 pause，不打 patch；"刷分也不着急刷"——真正的 urgency 是"你的job不能被迭代的时候"，问题要从深层次系统性地解决。
</div>

</div>

---

# Radix Attention：复用公共前缀的 KV Cache

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed space-y-3">

- 多个请求有公共前缀时，不需要重新计算对应的 KV cache，而是复用已算好的
- 实现：对请求间的前缀关系建前缀树（radix 树）做 indexing；KV cache 存在 KV memory pool，再把两者 mapping 起来
- 局限追问：全新问题没有共同前缀怎么办？——Agent 场景下多轮对话都要复用前面的 history，"前缀复用是大量存在在所有的、几乎所有的场景里的"
- 初心不忘："SGLang的创作之初的动机其实是想要去定义和构建这套interface，让人和AI可以更好的交互"

</div>

<div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./radix-attention.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# Day Zero：模型发布第一天就兼容

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**为什么重要**："市场觉得它很重要"——用户希望东西刚出来就能用上，这个愿望从 user 传到 inference provider，再传到引擎、模型厂商，链条式传递。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**DeepSeek-V4 实战**：架构创新很大，花了特别大精力做支持与优化；feature set 第一天就全部兼容——"我们也是我们第一次有这个RL的day zero"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**Miles（RL 框架）**：算子层实现大部分重写——"Miles是我们的RL框架，很多的算子层一些实现都要重写"，因为 V4 的架构与已有模型差别太大。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**适配的边界**：如果架构完全不变、只更新 weight，几乎不用适配；小的升级也只需要小适配。
</div>

</div>

---

# Inference 生态：没有输家的游戏

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"你会发现这个游戏里面没有输家……但是没有任何一个因为有competition的存在而消减下去了。所有人都是同步增长的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈 inference 赛道</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**2026 年两大趋势**：新的 inference 公司雨后春笋般冒出；established inference 公司开始往 RL 方向扩张——AI 更成熟后，市场 effort 开始"从training转向inference"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**数据点**：Baseten 完成 3 亿美元融资、估值 50 亿；Fireworks AI 估值 40 亿；Together AI 寻求 10 亿新融资；vLLM 商业化公司 Inferentia 融资 1.5 亿、估值 8 亿。
</div>

<div class="text-sm leading-relaxed">
背景是 Anthropic 的爆发让市场看到 AI 更有用，训练之外开始追求盈利与兑现；Radix Arc 的策略是和这些玩家做盟友而非对手。
</div>

</div>

---

# 下一代 AI：inference 只是起点

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"我其实不觉得我们在这个赛道……我认为Redwood Arc最终使命是要做下一代AI。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：Radix Arc 的长远使命不属于 inference 赛道</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**不只是 infra**："我们的本质还是不是单纯的infra implementation"；也不是模型——"它是下一个形式"，"不是一个现在世界上已经存在的东西"。问她是什么，她只说"不想disclose"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**态度**："我希望它发生。我想看到它发生"——inference 是一个前提条件、一个起点，不是 Radix Arc 的长远核心。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**与生态的关系**：和 inference 公司保持良好关系、做盟友；"没有private fork"，SGLang 是社区的——"公司的命脉是不在这里的"。
</div>

</div>

---

# 从研究员到 CEO：authority 要与 responsibility 匹配

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**xAI 学到的一句话**：两位 leader（Tony 和国栋）分别跟她说同一句话——"你的authority和responsibility要match"。在 xAI 她没有 authority："我并没有被empower"，所以"我不能决定事情我就负不了责"。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**现在全变了**：作为创始人必须做决定——"做好了其实是团队的功劳，做坏了是我的责任"。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**身份只是途径**："我一直都只想我想做什么事情"；Professor 是一条路，开公司是另一条——两年后 Professor 走不通，就换了 approach。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**正在经历的转型**：公司刚好走到"从我还能一个人看清所有事情，到我现在看不清的这个阶段"——管理问题还没有答案，看到的全是挑战。
</div>

</div>

---

# 融资课：从不知道 pitch deck 到"书本没有骗我们"

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**从零开始的融资**："pitch deck这个词我都没有听说过"；不懂 term sheet、估值、seed 轮。于是去读 Venture Deals 等书补课——"书本里面写的都是美好"：投资人与 founder 是终身友谊、并肩作战的关系。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**现实复杂很多**：童话总是美好的，但现实不是那样。然而最终配对的投资人，又回到了书里描述的理想关系——"书本没有骗我们"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**投资人为什么投**："我们是在这个赛道里面一个跑出速度的玩家"；早期投资也看人，"我其实更喜欢看人的investor"——她最终也"对投资人有更多的respect"。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**罕见阵容**：英伟达、AMD、英特尔这几家最大的半导体公司集体投了他们——1 亿美元种子轮，Axial 领投。
</div>

</div>

---

# 开源的空气：被互联网上的陌生人养大

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**江西的朴素教育**：出生在江西中部省份，编程学习"大部分的学习都是从互联网上拿到的"——CSDN 的帖子、online judge 的网上题库，资源稀少、贵精不贵多。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"sharing open的这个文化它对我来说是一个，就像我生活的空气一样存在。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈开源为什么是自然发生的</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**空气一样的理所应当**：把代码拿走研究，至今不知道写代码的人是谁；"你不分享出来那才觉得奇怪"——所以她不是对开源执着，而是它从小就在身边。
</div>

</div>

---

# 开源的变化与开闭源共存

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**好的变化**：开源越来越多，大家对开源的欣赏与"资本对开源的认可"都在上升。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**不好的变化**：追捧中混入功利主义者，让原本相信的人分不清成分——"阴阳总是共存"的一种 balance。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**立场**：开闭源是共存状态；她不认为所有东西都该开源——"人性的恶也会被放大"，AI"它确实有risk，我不否认这一点"。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"AI应该均等的被握在不同的人的手上……我们希望闭源它存在但不centralize。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖的 AI 权力观</div>
</div>

<div class="text-sm leading-relaxed">
路径是提供能力而非控制：让所有人都拥有制造属于你自己的 AI 的能力——"你制造出来的AI属于你自己"。
</div>

</div>

---

# LMSYS：平权是终身的事业

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
和 Liming 最早想成立一个让不同学校的人参与研究的机构；LMSYS 至今是 non-profit，大家 part-time 维护，但"LMSYS是那个我终身会做的事业"——如果 Radix Arc 有一天没走到底，LMSYS 依然在。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**平权的初衷**：孵化优秀人才做的项目，"即便他们没有充分的背景"、后台和 branding；把 credits 分到真正做事情的人身上，保护还没 establish 的开发者的掌控权。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**她的观察**：同样的工作，在高昂时期做容易被看见、甚至被夸大；低谷时期很难被看见——"这个difference是没有必要存在的"，它破坏社会公平竞争的结构。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Arena 的故事**：LMSYS Arena 本是"其中一个fun project"，意外受关注（排行榜有娱乐性）；后来交给伟林团队，被新团队做成商业级别的规模。
</div>

</div>

---

# 平权：把微小的冲击乘上一亿倍

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**动机**：一部分是天生在乎，一部分是亲身经历无数微小的性别不对称——"它每一个例子你单拎出来它都非常小"，但"把那一件小事的冲击乘上一亿倍，那才是对那个人人生的真实的冲击"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**竞赛故事**："如果我是个男生，大家就会说我是天才。如果我是个女生，他就会说她很努力，她很听话"——"我的每一场赢都要被解释"：对手状态不好、题目押中……赢需要理由，输才不需要。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**研究界同样存在**："一旦有一个合作方，然后这个合作方他是男性或者是他是established的，别人就会觉得，诶，这个idea会不会不是她的？"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**解法只有一条**："你让所谓的弱势群体……真正拥有权力。除此之外没有别的办法"；"不断去赢就好了"。结构性改变很难——"如果我能改变百分之一的话，我愿意用我的一生去改变这百分之一"：改变要 pick 对的人，把 recursive 的链条建起来，做不会回退的 solid 改进。
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"infra本身在我眼中就是产品……我跟infra之间的这个浪漫的关系。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：infra 不是 support 角色，而是值得做美的产品</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"书本没有骗我们。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：好导师、好投资人、好采访者都存在，只是要筛选与耐心</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"有必须性，没有重要性。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈金钱：解决事情更容易的工具，而非追逐的目标</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"把那一件小事的冲击乘上一亿倍，那才是对那个人人生的真实的冲击。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖谈性别不平等的真实分量</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我只要看到你的代码，我就知道你是谁。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：没见过面的开源社区里，代码就是身份</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"你只要不觉得自己在妥协，都没关系。"
<div class="text-xs opacity-60 mt-1 not-italic">— 盛颖：与世界自洽的边界，在于是否执行自己的意志</div>
</div>

</div>

---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-6xl font-light opacity-30 mb-8">Fin</div>

<div class="text-lg italic opacity-60 max-w-xl text-center leading-relaxed">
"你要相信到你身边没有这样的人，你还相信它。然后有一天那个跟你一样相信它的人他有一天会跟你相遇。"
</div>

<div class="text-xs opacity-40 mt-4">
— 盛颖：所有好的东西都不是编出来的 · 硅谷 101 E247 · 2026 年 8 月
</div>

</div>
