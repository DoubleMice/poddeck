---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Moonlake: Interactive, Multimodal World Models — with Chris Manning and Fan-yun Sun'
info: |
  Latent Space 与 Moonlake 两位负责人的对谈：当所有人都在 scale 视频生成的时候，
  这家由 NLP 教父 Chris Manning 联合创办的公司在押另一条路——symbolic + 推理 +
  神经渲染，把 world model 从"漂亮的视频"变成"可以玩的世界"。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Moonlake: 可交互的多模态世界模型

<div class="text-lg opacity-80 mt-4">当 Sora 的下一帧不够用时，往哪押？</div>

<div class="mt-10 text-sm opacity-60">
Chris Manning · Fan-yun Sun · Moonlake<br/>
Latent Space · 2026
</div>

<div class="mt-8 text-xs opacity-50">
Stanford NLP 教父 + NVIDIA Research 出身的合伙人<br/>
押注：world model 不是更大的视频生成器，而是带 symbolic 推理的世界引擎
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">访谈的密度不在"做了什么"，而在"为什么这么做"——以及它和 Yann LeCun 的分歧到底在哪。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Structure, not scale
不反 bitter lesson，反的是"今天最 bitter 的抽象层级是 pixel"这件事。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Action-conditioned
"You only actually have a world model if you can predict, given some action is taken, what is going to change."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 两个模型，一个世界
推理模型管 causality / persistency；Rie 这个 diffusion model 管像素。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 公开和 LeCun 撕
Chris："Yann has never appreciated the power of language."

</div>

</div>

---

# 这两个人，从不同的山进同一片湖

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Chris Manning
Stanford NLP 教父 — 早期 word embeddings、2015 attention for MT、信息检索（"RAG before RAG"）。  
带过 Andrej Karpathy、Richard Socher、Demi Guo（Pika 创始人）。

<div class="text-xs opacity-60 mt-2">"Most of my career has been doing stuff with language."</div>

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### Fan-yun Sun
PhD on generating interactive worlds for RL agents，长期与 NVIDIA Research 合作合成数据 foundation model。  
联合创始人 Sharon 是他与 Chris 之间的桥。

<div class="text-xs opacity-60 mt-2">"NVIDIA folks are actually paying a lot of dollars to purchase these types of interactive worlds."</div>

</div>

</div>

<div class="mt-6 p-4 bg-gray-50 border-l-4 border-gray-400 rounded text-sm">

**Sun 的两个观察**：industry 在花真金白银买 interactive worlds（NVIDIA 自己内部就在买）；同时 academia 已经证明合成数据可以和真实数据一样有用。"对 embodied 通用智能来说，模型必须学会 action 的 consequence——而这种 interactive data 的需求在指数增长。"

</div>

---

# Genesis：为什么是 World Model？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Chris 这边的诊断

虽然 LLM 在语言上极其有效，但**视觉理解其实卡住了**——

> "Vision understanding sort of stalled out... if you look at any of these vision language models, **it's the language that's doing 90% of the work and the vision barely works**."

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### Sun 这边的判断

> "On our way to embodied general intelligence, models need to learn the consequences behind their actions, which means that they need interactive data."

加一句私货：哲学上他相信 simulation theory。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**结论**：现在所有人都把 world model 当 video generation 的延伸来做。Moonlake 押的是另一条路——**reasoning model 才是建 world model 的正路**。

</div>

---

# Structure, Not Scale

<div class="text-sm opacity-70 mb-4">这是 Moonlake 的 thesis，但很容易被误读成"反 bitter lesson"。它不是。</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"Scale is good too. Lots of data is good as well and scale, but nevertheless, you want the **structure** to be able to much more efficiently learn."

</div>

<div class="mt-4 text-sm opacity-70">— Chris Manning</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 误读
"你们不信 bitter lesson。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Sun 的反驳
"Like that's just false, right? Like we are believed is a bitter lesson. But then... **what is the right abstraction level today?**"

</div>

</div>

---
layout: two-cols
---

# World Model ≠ Video Generation

漂亮的下一帧 ≠ 真的理解世界。

**Chris 的拆解**：

- 那些 SAWA / Veo 3 / Genie 的视觉确实漂亮
- 但 visuals 必须**带着** 3D 理解、物体如何移动、不同 action 的 consequences
- 这才是 spatial intelligence 真正需要的
- 关键术语：**action-conditioned world models**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-vs-video.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Action-Conditioned：唯一的硬定义

<div class="text-sm opacity-70 mb-4">这是 Chris 在访谈里反复强调的判别标准。</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"You only actually have a world model if you can predict, given some action is taken, what is going to change in the world because of it. And in particular, **that becomes hard over longer time scales**."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 简单的部分
预测下一帧不难。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 难的部分
预测**几分钟后**的 likely consequences。  
这就要求一个更抽象的 semantic model。

</div>

</div>

---

# 为什么不能只用 video data 暴力堆？

<div class="text-sm opacity-70 mb-3">Sun 和 Chris 给了三个互相加强的理由。</div>

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**1. observational ≠ action-conditioned**  
线上挖来的视频不知道里面正在发生什么 action。从结果反推 action "not impossible. But it's very hard and it's not really established that you can get that to work at any scale yet."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**2. 抽象级别不对**  
语言每个 token 都是人类设计的高阶抽象。"As soon as you are describing someone as a professor, and as soon as you are saying that they're condescending"——这是从 pixel 起步几个数量级都到不了的语义。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**3. 实时 + 长程一致性**  
"We also have other goals... real time worlds, long-term planning and consistency. **Again, that favors abstraction.**"

</div>

</div>

---
layout: two-cols
---

# 选对抽象的那个数量级

Sun 提了一个很狠的反思实验：

> "Let's just say we can encode and decode all of images, videos, audio in bytes. Then the most bitter-lesson approach is to train a **next-byte prediction model**."

理论上是最 bitter 的，但 compute 不够，所以大家都退到 token。

**那 world model 的对应问题就是**：

- 退到哪里才是当下最经济的抽象？
- Chris 给出关键数字：如果能比纯 pixel 路线少 **5 个数量级**的数据，"you're gonna be able to make a lot more progress, a lot more quickly."

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./abstraction-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 类比：人脑根本没在处理大部分像素

<div class="text-sm opacity-70 mb-4">Chris 用神经科学打了个底。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"All of the evidence from neuroscience and psychology is that **most of what comes into people's eyes is never processed**. You are doing fairly fine-grained processing of exactly what you're focusing on. But as soon as it's away from that... yeah, there's another guy over there—you're sort of only processing top-down this very abstracted semantic description of the world around you."

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**作者概括**：人类已经活在 abstracted semantic representation 里了。把 world model 强行降到 pixel 级，是用算力补一个生物都不愿意算的东西。

</div>

---

# Cognitive Tools：语言不只是通信

<div class="text-sm opacity-70 mb-4">Chris 引 Daniel Dennett 的概念，把"为什么 symbolic 重要"讲到底。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 进化论证

> "Chimpanzees have fairly similar brains to human beings. They have great vision systems, they have great memory systems... they can plan, they can build primitive tools."

那为什么人类**massively ahead**？因为我们发明了 language。

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Dennett 的 cognitive tools

> "The philosopher Dan Dennett refers to language as a cognitive tool... humans, unique among the creatures in the world, have managed to build their own cognitive tools, and language is the famous first example. **But other things like mathematics and programming languages are also cognitive tools.**"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**所以 Moonlake 的 bet**：要给视觉世界配 symbolic representation。它就是 spatial intelligence 的 cognitive tool——给你 causal understanding、long-term consistency、prediction。

</div>

---

# 公开和 LeCun 撕

<div class="text-sm opacity-70 mb-3">这一段 Chris 没绕弯。</div>

<div class="mt-3 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"Yann LeCun is a dear friend of mine, but **he has never appreciated the power of language in particular, or symbolic representations in general**."

</div>

<div class="mt-3 grid grid-cols-2 gap-4">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Yann 的世界观（Chris 转述）**：智能的本料是视觉。语言是 "**low bit rate communication mechanism** between humans... far inferior to the high bit rate video that comes into your eyes."

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Chris 反驳**：恰恰是 language 这个 cognitive tool 把人类抬升到 chimp 之上——他形容这是 "this sort of vaulting of what could be done with the intelligence in brains."

</div>

</div>

---

# JEPA 那一部分是对的

<div class="text-sm opacity-70 mb-4">Chris 没全否 LeCun，他给 JEPA 留了一半台子。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 同意的部分

> "There's a part of JEPA that's right, which is you do want to have a **joint embedding that gives you a consistent model of the world**."

承认 JEPA 是 "a reasonable research bet"，但还没被证明是对的方向。

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 不同意的部分

Yann 的攻击：autoregressive LM 永远拿不到 joint embedding，因为它一个 token 一个 token 往外吐。

**Chris 的反击**：transformer 内部所有的 weights，本身就是模型对世界的 **joint** representation——这就避开了 Yann 的 objection。

</div>

</div>

---
layout: two-cols
---

# Reasoning Trace：保龄球的例子

prompt 一句"create a bowling game"，模型内部展开的 reasoning chain 把所有人惊到了。

要让它真的能玩，模型必须自己想清楚：

- pick up the ball → ball causes pins to fall down
- score = number of pins that fell down
- reset = new game
- 这一切的 geometry / physics / affordances / symbolic logic / perceptual mapping

**关键差**：单纯生成视频的模型"知道 bowling 长什么样"，但**不让你 practice over and over again**——所以也学不到 high score 怎么来的。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./reasoning-trace.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那这和写 Unity 代码到底差在哪？

<div class="text-sm opacity-70 mb-4">主持人 swyx 直球：你这不就是 prompt → Unity 代码？</div>

<div class="mt-6 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"There is an underlying physics engine. In that sense, there's some overlapping things to Unity, but the way we think about it is like physics engine, tools, or code are **cognitive tools**, like borrowing Chris's term, right? **Tools that the model can employ as means to an end.**"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 今天
要 long-term causality → 用物理引擎。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 明天
要训 drone（只在乎 fluid dynamics 和视觉）→ 模型可能根本不调物理引擎。

</div>

</div>

<div class="mt-4 text-sm opacity-60">

模型自己决定该不该用 physics engine、用哪个 tool。Unity 是其中一种被调用的可能性，不是中心。

</div>

---

# Multiplayer：递归的那一层

<div class="text-sm opacity-70 mb-4">swyx 试探的"recursive ambition"——结果发现已经做了。</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

> "Some kind of recursive element where it becomes multiplayer, right? Like here, there's a single player element, you're not modeling any other people involved."

— swyx

</div>

<div class="p-5 italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

> "But in fact, we can really do multiplayers... just actually just like prompt our model to say, 'Hey, like, configure to multiplayer.' Then it'll do like this. You'll be able to configure multiplayer **persistency database** for you. Easy."

— Sun

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**含义**：reasoning model 不光在产 game world，它还在产**支撑这个 world 跑起来的基础设施**——例如 persistency database。Unity 工程师做几周的事，prompt 一句话。

</div>

---
layout: two-cols
---

# Rie：另一个模型，专管像素

Moonlake 内部其实是**两个模型**：

**1. Multimodal Reasoning Model**
- causality
- persistency
- logic / determinism

**2. Rie（diffusion）**
- 把推理模型生成的 persistent representation
- restyle 到 photorealistic 或任意 style
- "respect the persistency and interactivity... my only job is to make sure that its pixel distribution is close to what we want"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-models.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Rie 的野心：替换 DLSS

<div class="text-sm opacity-70 mb-4">Sun 不藏：这是要做下一代 rendering paradigm。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

"We actually believe that this is gonna be the next paradigm of rendering. So it's gonna **replace how rasterizer, it's gonna replace DLSS today** because it not only has these pixel prior that's learned from the world such that you can literally play any game in photorealistic styles—which is a lot of people's desire when they do GTA, right?"

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Rasterizer
固定 pipeline

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### DLSS
神经网络做 upscale

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Rie
带"world prior" 的<br/>可编程渲染

</div>

</div>

<div class="mt-4 text-center text-sm opacity-70">

swyx 的命名："**skins for worlds**" — Sun: "let's call it skin for worlds."

</div>

---
layout: two-cols
---

# Render 不再是 game state 的派生品

历来 render 是 derivative：
- input: game state
- output: 一帧像素

Sun 的颠覆：
- render 本身可以是 game loop 的一部分
- "if upon getting **10 apples**, my weapon of choice—my bullet's gonna turn into apples"
- 渲染层产出可以**反向触发** game state 的变化

**为什么重要**：rendering 现在带"world priors"。它不再只是出图，它是新的可编程层——交给创作者去发明用法。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rendering-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 哪条线由 symbolic 管，哪条由 diffusion 管？

swyx：你的方法不就是 game engine 能干的事吗？  
Sun：**这条线本身是 fluid 的**。

> "Where do you draw the boundary between what's handled with diffusion prior and what's handled with symbolic priors?... This boundary can actually be fluid."

每次模型学了新东西、客户提了新需求，他们都会重新审视：
- 这一条边今天是不是该往左挪一点？
- 还是该往右挪？

> "Sometimes that we realize that, oh, like maybe customers... want certain things that are better handled with pre-op prior as opposed to symbolic prior."

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fluid-boundary.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那么 quantum mechanics 是宇宙的 diffusion prior 吗？

<div class="text-sm opacity-70 mb-4">swyx 飘了一下，被两人按回来。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

> swyx: "Is quantum mechanics the diffusion prior of our world? Like, that's the boundary of classical mechanics versus quantum. Right? At one point God plays dice and the other point doesn't."
>
> Sun: "I think generally I feel like physics is better with symbolic priors."
>
> Chris: "Even quantum physics."
>
> Sun: "Even quantum physics."

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**作者概括**：他们都把"symbolic"赌得很硬。即便是 quantum，他们的直觉也是规律可写——这跟 LeCun "everything is latent visual" 的世界观是几乎相反的两端。

</div>

---

# 怎么 evaluate world model？

<div class="text-sm opacity-70 mb-3">Chris：这问题其实不止 world model 有，LLM 现在也搞不定。</div>

<div class="mt-3 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded text-sm">

"I think this whole space is extremely difficult as things are emerging now. It's not only for world models—it's for everything including text-based models. In the early days it seemed very easy to have good benchmarks 'cause we could do things like question answering benchmarks."

</div>

<div class="mt-3 grid grid-cols-2 gap-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Chris 的具体例子**：今天用户其实想问的是"哪个背包适合我下个月去欧洲旅行"——这种东西根本做不出 benchmark。world model 同理。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Sun 的实际答案**：取决于 end goal。游戏 → "how much time people are spending"；embodied AI → "how robust it is when you actually deploy"。其它都是 proxy metric。

</div>

</div>

---

# 最终评估：vibe checking

<div class="text-sm opacity-70 mb-3">Chris 直接接受了这个词。</div>

<div class="mt-3 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"A lot of this is actually going to turn into **people walking with their feet**... when people are choosing to use GPT-5 or Gemini or Claude, individuals are trying out these different models and deciding, 'Oh, I like the kind of answers GPT-5 gives me,' or 'No, I feel like I get more accurate detail from Claude.'"

</div>

<div class="mt-3 text-xs opacity-60">— Chris Manning</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**It's vibe checking** — Chris："I realize that, but it's actually whether people feel it's giving them utility in what they want."

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**别被画面骗**：游戏设计师真在乎的是 gameplay。"Lots of very successful games... have relatively primitive visuals, and other games where people have spent millions producing photorealistic visuals, and the game sucks."

</div>

</div>

---

# 音频：spatial 不是后期贴上去的

<div class="text-sm opacity-70 mb-4">swyx 觉得 audio 是个奇怪的取舍：为什么不像别人那样直接 TTS 贴上去？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

> "Part of the spatial audio is from the code that is underlying the simulation."

— Sun

物理引擎本来就在算 echoes、reflections 这些。

</div>

<div class="p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

> "There's nothing that's, okay, an action is happening in the video, therefore there should be a sound that's coming from this part of the visual field."

— Chris

video 模型粘 11labs 配音 ≠ 真的 spatial。

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Sun 的目标**：训一个 latent 空间能横跨 audio / text / video / language。"If I close my eyes and you play a sound of a car skidding away from me, I almost can visually extrapolate that trajectory in my mind."

</div>

---

# 你能用 Sora 做出可玩的游戏吗？

<div class="text-sm opacity-70 mb-4">swyx 替反方陈词，Chris 的回答很冷静。</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

> "I don't think you can take Sora and produce compelling gameplay, right? If you want to have a world that you can wander around in a bit, you are good. But what are your abilities to have **gameplay mechanics** implemented the way you'd like them to be, and to have things stay with the **long-term history** of your gameplay that influences future actions—I think there's just nothing there for that."

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**作者概括**：这是 action-conditioned 那一条原则的反向使用——游戏需要"过去发生了什么"持续影响"现在能做什么"。video 生成模型在这条上交白卷。

</div>

---

# Brandon Sanderson、Ted Chang、Baba Is You

<div class="text-sm opacity-70 mb-4">swyx 把这套技术映射到了文学和游戏设计的传统。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Brandon Sanderson
小说家 + 游戏 reviewer，  
"a big fan of video games where you change one thing about... the world."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Baba Is You
swyx 提到的范例，  
"the rules change as you play the game."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Ted Chang
"He'll take the world that you know today, but **change one thing** about it and create a consistent world based on that."

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Chris 的回应**："That seems a lot easier and more conceivable to do using technology like Moonlake's than with some of the other world models out there." — 因为这种"换一条规则、其它都自洽"的事，**用 code 改远比用纯数据训出来要容易**。

</div>

---

# 三年后他们想做的样子

<div class="text-sm opacity-70 mb-3">Sun 描述的产品形态——比"游戏引擎"野很多。</div>

<div class="mt-3 grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**用户给目标**（Sun 举的例子）：
- "teach my kids the value of humility"
- "fine-tune my drones at **rescue situations**"
- "train my vacuum robot... navigate very robustly in my office"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**世界模型的工作**：
"Given what you want to achieve, let me **generate a distribution of environments** such that I can train and evaluate whatever it is you want."

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Training tool 同时就是 evaluation tool** — "It's just this world model that allows people to train any policy that can act in any multimodal environments."

</div>

---

# 关于 reward hacking 的诚实回答

<div class="text-sm opacity-70 mb-4">swyx 直接问：你们这套是不是更难被 hack？</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

"I think not necessarily. To the extent that there's a mis-specified reward, that—it seems like it could be hacked in a more symbolic world or in a more pixel-based world. **I don't think that's really being solved.**"

</div>

<div class="mt-4 text-sm opacity-60">— Chris Manning</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**作者概括**：Chris 没做营销式回答。他承认 reward hacking 是结构性问题，symbolic 路线没把它抹掉。

</div>

---

# Chris 为什么从 NLP 走到 World Model？

<div class="text-sm opacity-70 mb-3">Vibhu 直接问了。Chris 的版本是渐进的。</div>

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**起点**：研究兴趣本来是 "how humans can produce speech and understand each other in real time"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**2010s 中期**：从 question answering → visual question answering。发现 "visual understanding was bad. There's almost no visual understanding. You were just getting answers that came from priors."

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**例子**：问 "how many people are sitting at the table"，模型不管图里几个人，**always answer two**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**学生网络**：Demi Guo（Pika 创始人）、Andrej Karpathy、Richard Socher；他也长期关注 Ian Goodfellow 的 GAN 那十年——这条线一路通向了 Moonlake。

</div>

</div>

---

# Moonlake 这个名字的来历

<div class="text-sm opacity-70 mb-4">Vibhu 的最后一题，结果挖到一个 Pixar / Dreamworks fan 的小宇宙。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

> "We were thinking a lot about how do we make a company name that gives people the vibe of like, OpenAI, but for like, almost like **Industrial Light and Magic** vibes."

</div>

<div class="p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

> "Moon Lake, partly because of the **DreamWorks** vibe... And then the moon was sort of like a, basically was like about the **reflection**. The reflection part also implies the **self-improvement loop**."

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**还顺手送了一个金句**：当 swyx 提到 Walt Disney 时——

> Sun: "Theme parks are world models too."

</div>

<div class="mt-4 p-3 bg-gray-50 border-l-4 border-gray-400 rounded text-xs opacity-70">

公司目前 ~18 人，San Mateo，正在搬到 SF。在招 computer vision + 计算机图形学双背景的人，"if you've written a game engine before."

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"You only actually have a world model if you can predict, given some action is taken, what is going to change in the world because of it."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Chris，给 world model 划唯一的硬定义</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"It's the language that's doing 90% of the work and the vision barely works."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Chris，对今天 vision-language 模型的诊断</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Yann has never appreciated the power of language in particular, or symbolic representations in general."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Chris，公开指出和 LeCun 的根本分歧</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"What is the right abstraction level today?"
<div class="text-xs opacity-60 mt-0.5 not-italic">— Sun，这才是他们与 bitter-lesson 派的真正分歧</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"It's gonna replace DLSS today."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Sun，关于 Rie 的野心</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Theme parks are world models too."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Sun，关于 Walt Disney</div>
</div>

</div>

---
layout: end
---

# "Skins for worlds."

<div class="text-sm opacity-60 mt-4">— swyx，被 Sun 接受的命名</div>
