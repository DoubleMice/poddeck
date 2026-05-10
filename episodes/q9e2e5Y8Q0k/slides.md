---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'A New Kind of Marketplace'
info: |
  MLOps.community 现场对谈：OLX 的 Pedro Chaves 与 Prosus AI 团队的 Donné Stevenson
  聊"agent-only marketplace"——不是再多做一个 agent，而是为 agent 之间的交易
  搭建那个还不存在的 harness。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# A New Kind of Marketplace

<div class="text-lg opacity-80 mt-4">不是再做一个 agent，而是为 agent 们搭一个新市场</div>

<div class="mt-10 text-sm opacity-60">
Pedro Chaves · OLX &nbsp;·&nbsp; Donné Stevenson · Prosus AI<br/>
host: Demetrios Brinkmann · MLOps.community<br/>
Lisbon · 2026
</div>

<div class="mt-8 text-xs opacity-50">
"Sci-fi meets marketplaces."
</div>

---

# 这一期值得听的几个点

<div class="text-sm opacity-70 mb-4">三个人，一个现场，从产品落地一路聊到"给 agent 用的市场"。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 房产 ≠ 房产
买房是"a major life event mainly driven by lifestyle"——agent 该围绕生活方式来组装搜索。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### dealer 怕按按钮
功能再强，dealer 还是不敢按。"functionality doesn't matter until your UX is solved."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Ctrl+Z for agents
agent 的世界里没有撤销键——这本身就是个值得做的设计。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### build the harness
"build the harnesses for an agents-only marketplace"——agent 都在被造，缺的是它们的市场。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### scheduling is solved
约时间、付现金、面交——"that's scheduling. It's a solved problem." agent + locker 全消掉。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 哲学一刻
"It's not a simulation. It is a recommendation."——你已经在系统里了。

</div>

</div>

---

# 现场：OLX × Prosus，一个圆桌

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### Pedro Chaves — OLX
分类信息平台。OLX 的两条专门垂类是 **motors**（汽车 dealership）和 **real estate**（地产中介），再加 general classifieds。

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50">

### Donné Stevenson — Prosus AI
和 Pedro 一起在 OLX 内部做 disrupt 项目。她负责的 dealer-facing agent 是这场对话里"trust ladder"的来源。

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-orange-500 bg-orange-50">

**主持人 Demetrios** 抛的关键问题：
怎么从"我看到了 agent 时代的可能性"到"我真的把它做出来"——以及，什么是"new paradigm of agents"里那个还没人填的空？

</div>

---

# 两个 disrupt 项目，瞄准两类人

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-200 bg-blue-50 bg-opacity-30">

### Real Estate · 给 buyer
重做找房体验。专业的卖方（real estate agencies）那边没动，重新造 buyer 那边的入口。

<div class="mt-3 text-xs opacity-60">"as a buyer looking for a house, what does it look like for you to have a different experience…"</div>

</div>

<div class="p-5 rounded border-2 border-green-200 bg-green-50 bg-opacity-30">

### Motors · 给 seller
反过来，motors 这边动的是 **dealer**（车行）那一侧的体验。Buyer 那侧 Pedro 直说：**没动**。

<div class="mt-3 text-xs opacity-60">"We have been focused, focusing mostly on the seller side, the dealer's experience."</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
两个项目最难的部分，在 Pedro 看来不是技术：是"想清楚那个 disruptive experience 到底是什么"。
</div>

---
layout: two-cols
---

# 找房不是找房，是找生活方式

很核心的一次 reframe：**把"找房"重新定义为一个 lifestyle event**。

不是"过滤器 + 地图"，而是 agent 试图：
- 用合适的语气问出你的 persona
- 把 persona 映射成一个动态 intent
- 然后回填**通勤时间、街区安全分数、服务设施分数**

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"making sure that these new houses are within like an acceptable commute time from your workplace…
the neighborhood safety scores or services scores are sufficiently high to match your preferences."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lifestyle-house.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# UI 是 chat、是按钮、还是两者之间？

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50">

### 不是纯 chat
"we have these intuitions which are maybe wrong, that maybe pure chat is not the way that we want to go."

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### 但昨天的所有例子又都是纯 chat
"all the examples that we saw yesterday were pure chat, so I don't know anymore."

</div>

</div>

<div class="mt-6 p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 他们最后选了什么
组件被 agent **预填充**——你可以点、可以选，不是 100% 在打字。再叠上一个有地图、有 listing 的导航层。

</div>

<div class="mt-4 text-xs opacity-60">
房地产是 high-trust 体验：用户必须真的觉得"这比我自己搜更可靠"，他们才会用。所以 chat 也好、generative UI 也好，先得过这关。
</div>

---

# Motors 这边的故事：dealer 怕按按钮

<div class="text-sm opacity-70 mb-4">Donné 讲的真实测试经历——也是这场对谈里最反直觉的一个发现。</div>

<div class="space-y-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 起点：把 chat 当 dealer 的"data analyst"
dealer 的数据散在多个页面。chat agent 起初的角色是帮他们综合出洞察——一个对着数据问问题的助手。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 但 dealer 进 chat 是个"huge hurdle"
他们不知道该问什么。要么不问，要么问得过大——"oh, that's a lot for one, you know, for V1."

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 最离谱的一幕：那个 filter 按钮
他们做了一个按钮，按下去**只是给 dealer 在页面上加一个 filter view**。  
但因为标签写法暧昧，dealer 担心它会**对所有 ad 执行某种动作**——直接拒绝按。

</div>

</div>

---

# UX is everything

<div class="text-sm opacity-70 mb-4">Donné 在这里给出了这场对谈最尖的一句话：</div>

<div class="mt-6 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50">

"UX is everything when you're talking about agents,<br/>
and functionality doesn't matter until your UX is solved."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 能力其实够了
"they get really smart and there's still this resistance."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 缺的是入口机制
"you're not getting the full use out of them until you figure out how to give people a mechanism to use it that makes sense."

</div>

</div>

---
layout: two-cols
---

# 信任不是给的，是攒出来的

Donné 描述的"trust ladder"——dealer 这种 high-context 用户必须一级一级爬：

1. **show**：先把他们之前看不到的数据呈现出来
2. **suggest**：再标出"也许你想对这些 ad 做点什么"
3. **act with consent**：开始替他们按按钮，但要先问
4. **autonomous**：最后才到"我替你做了"

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm italic">
"if you kind of start on your first release and immediately you're like, can I have access to your— that's probably not going to go very well."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./trust-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Ctrl+Z for agents

<div class="text-sm opacity-70 mb-4">主持人 Demetrios 顺嘴丢出来的一个产品观察，被在场两个人一致点头：</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50">

"I just realized you don't really have a Ctrl+Z and the undo button<br/>
for when an agent takes an action."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 类比：Cursor 的 revert changes
Pedro 立刻接上："Like the revert changes in Cursor."

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 反向激励效应
"if I can always just like go back 5 steps"——人会**更敢**让 agent 行动。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：撤销键不只是安全网，它是 agent 时代撬动 trust ladder 第 3、4 级的关键 affordance。
</div>

---
layout: two-cols
---

# 在 chat 与 GUI 之间

Pedro 自嘲："I'm pretty dumb when it comes to UX/UI."——但他抛出了一个挺扎实的中间态：

**generative UI**：agent 不只在框里说话，它根据当下需要**生成 widget**——一组可被填充、可被操作的可视化组件。

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"Maybe you can have a selection of widgets that can be populated or used by the agent in order to convey the information to the user and then to extract information from the user as well and extract actions from the user."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ux-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 转场："Sci-fi meets marketplaces"

<div class="text-sm opacity-70 mb-6">Donné 离场——Pedro 接着把话题从"今天的产品"推到"明天的市场"。</div>

<div class="mt-12 p-8 text-3xl italic text-center border-y-2 border-blue-500 bg-blue-50">

"Sci-fi meets marketplaces."

</div>

<div class="mt-8 text-sm opacity-60 text-center">
—— Pedro Chaves，作为话题转场的一句话
</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
接下来 Pedro 谈的不再是"在产品里嵌一个 agent"，而是<strong>给 agent 们造一个市场</strong>。OLX 这种 classifieds 平台，是这场赌局里最有筹码的那种玩家之一。
</div>

---

# 摩擦不在浏览，在交易

<div class="text-sm opacity-70 mb-4">Pedro 说，作为 classifieds 业务，最大的摩擦点其实非常老派：</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"as a classifieds business, the main point of friction is actually the transaction…<br/>
you as a seller, me as a buyer, we kind of connect through the ad page, but then it's up to us."
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 最常见的第一句话
> "Hey, is this still available?"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 紧跟着
> "Is it negotiable? Can't you skim something off the top? Just had a kid, can you help me out?"

</div>

</div>

<div class="mt-4 text-xs opacity-60">这些<strong>不是 OLX 平台内的事</strong>——是 buyer 和 seller 之间私下走完的流程。这才是 agent 真正可以接管的部分。</div>

---
layout: two-cols
---

# 主持人的 Portugal 故事

Demetrios 在 Portugal 时通过 OLX 给女儿买过一个 scooter——

> "We spent a considerable amount of time with the back and forth of the sellers deciding when we were going to meet, where we were going to meet."

每一步都是手动的：约时间、记地点、跑 ATM 取现金、开车到对方家门口。

Pedro 一句话总结了它：

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-lg italic">
"that's scheduling. It's a solved problem."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./friction-arc.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 第一种愿景：agent 替你议价

<div class="text-sm opacity-70 mb-4">Pedro 描述的 buyer-side 用例，四步走：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1 · 设定参数
你告诉 agent：预算 X，时间窗口 Y，"我可以让 budget 在某个范围内 budge"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2 · agent 持续搜
不用你"refreshing your searches, your saved searches"——agent 在后台跑、扫、刷新。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3 · 找到了就替你谈
"actually negotiate for you because you know your budget."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 4 · 谈不拢就回来汇报
"hey, I found this, but it's not in the area you wanted or it's not in the budget."

</div>

</div>

---

# 第二种愿景：agent 替你卖

<div class="text-sm opacity-70 mb-4">Pedro 把 seller 这一侧也讲出来了——这是 Demetrios 最兴奋的那个版本：</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"If I could just take a photo of my living room right now and you could tell me, I've got buyers for those Legos over there… You've got 50 horsies. Do you want to sell one or two of them?"
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Pedro 把它机制化
"the agent would estimate how much stuff you need to also—"  
你的 seller agent 把库存暴露给市场，多个**已注册兴趣**的 buyer agent 之间互相竞价。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 你只在终点出现
"you would get just a notification to confirm the sale or something."

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Demetrios 给它起了个名字："YOLO mode"——像 Cursor 的 YOLO 一样，由你选 agent 处置范围的 aggressiveness。
</div>

---
layout: two-cols
---

# 真正的洞察：build the harness

Pedro 这场最关键的一句话——也是这一期的标题之所以叫"a new kind of marketplace"的原因：

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-base italic">
"What if we are the first ones to… build the harnesses for an agents-only marketplace?"
</div>

<div class="mt-3 text-sm">
所有人都在做 agent 本身——big tech 在堆 assistant，小团队在堆 wrapper。<strong>真正缺的是 agent 之间交易的那条 rail</strong>。
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Pedro 的另一个比喻："the <strong>exoskeleton</strong> for this structure."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./harness-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么是 OLX？基础设施都齐了

<div class="text-sm opacity-70 mb-4">Pedro 列了一遍——这不是想象，是一份当下可执行的资源清单：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 库存 & 分类
classifieds 里有大量"people which are offloading their stuff" — 从家具到电子，二手 stock 早就在了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 商业模式可以平移
现有的 <strong>VAS（Value Added Services）</strong>——付费推广 ad、置顶——直接可以变成 agent 的"想发更多就付费"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 支付协议已经在
"we have at least two protocols now, one from Google and another one from OpenAI… for commerce protocols to try and unlock these verified transactions between agents."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 可以当 escrow
OLX 现在不收款，但可以选择<strong>当 escrow，抽 buyer 与 seller 的 take rate</strong>。"It's incredibly attractive."

</div>

</div>

---

# 中间层就是 trust

<div class="text-sm opacity-70 mb-4">Demetrios 抛了一个尖锐的问题："如果是 agent 在交易，怎么暴露 fraud？" Pedro 没绕弯：</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">

"You have to beat that layer of trust.<br/>
That's probably one of the best reasons to justify why we need this middle layer.<br/>
This middle layer, it's trust, right? It's an escrow."

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### discovery
agent 怎么知道还有别的 agent 在场？

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### protocol bridge
不同 assistant 不同协议，得有人翻译。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### escrow
钱什么时候放、什么时候收，是中间层的天职。

</div>

</div>

---
layout: two-cols
---

# 物理那一端：smart locker 是 agent 的手臂

agent 如果要替你完成 second-hand 交易，链路最后还得有一个**物理 handoff**。

Pedro 把它拆得很干脆：

> "smart lockers are… a physical arm of these agents."

附近的 locker hub 已经被运营商优化好位置——agent 不必关心 last-mile 由谁来送，只要选好 locker 就行：

> "in this region, the agent can rely on smart lockers. … In this region, ground autonomous robots. … a drone."

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
关键判断：last-mile <strong>不是 OLX 要解决的问题</strong>——只要"connect to existing solutions"就够了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./smart-locker.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Pedro 的怀疑论：agent-to-agent 服务市场不会成立

<div class="text-sm opacity-70 mb-4">"agents 之间互相外包工作"——这个 narrative Pedro 不买账：</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"these agents are becoming very generalist…<br/>
if they are not good enough, they can build their own tools. Yeah, they can build their own sub-agents.<br/>
So why would you sub-hire something which is 150% commoditized?"
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 数字世界里
agent 越做越通用，能自己造工具——**没必要外包**。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 跳到物理世界
那才有真生意：**机器人 last-mile**，或者还是**雇人**——"someone will need to come in here and actually paint that smudge off the wall."

</div>

</div>

<div class="mt-4 text-xs opacity-60">
所以"卖 harness 给 agent"这种 meta-marketplace 也是 hard sell——"that's basically saying that your agency is not good enough… which is more or less a given."
</div>

---

# 怎么让 agent 找到你？GEO 还是集成？

<div class="text-sm opacity-70 mb-4">最后一个战略问题：marketplace 自己是隐形的——前台是 ChatGPT、Claude、Gemini。</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### 路径 A · GEO
**Generative Engine Optimization**——SEO 的下一代。让 agent 在生成结果时自然带到你这里。

<div class="mt-2 text-xs opacity-60">"making sure that you pop up in these results, making sure that the interaction between these agents and your platform is seamless."</div>

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### 路径 B · 直接集成
让"Shopify, Veev integrate their … ecosystem within ChatGPT"——<strong>前提是你大到 assistant 想反过来集成你</strong>。
"you should become so good and so large that they want to integrate themselves."

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 总结一句话
> "How do we **unlock this item circulation**?"  
>  
> 这是 Pedro 这场对谈给自己留下的真问题。

</div>

---

# 哲学一刻：你已经在系统里了

<div class="text-sm opacity-70 mb-6">观众里有人问："recommendations 真的是为我好的吗，还是只是 ad-based？" Pedro 的回答把整场对话拉到了一个更大的视角：</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"recommendations is at our core. It's embedded within the society.<br/>
So every purchase that you do, you're actually incentivized to leave a review.<br/>
So it's like it's next step capitalism where you end up like you as a human are embedded in the recommendation system."
</div>

<div class="mt-8 p-6 text-2xl italic text-center border-y-2 border-purple-500 bg-purple-50">

"It's not a simulation.<br/>
It is a recommendation."

</div>

<div class="mt-4 text-xs opacity-60 text-center">
—— Demetrios，对 Pedro 的"next step capitalism"那句话的回应
</div>

---

# 离这个未来还有几步？

<div class="text-sm opacity-70 mb-4">Demetrios 收尾的判断："quite a few steps away, but not that many steps." Pedro 同意：</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 已经在位的
- 商业 commerce 协议（Google + OpenAI）
- 支付钱包（Apple Wallet / Google Pay）
- locker / 自动配送的物理网络
- classifieds 的 stock 与商业模式（VAS）

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 还要拼凑的
- agent 的 discovery / 发现机制
- escrow 与中间层信任
- agent 间的"register interest"协议
- 把 ChatGPT / Claude / Gemini 等接入这个市场

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"the wheels are in place." —— Pedro
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这一期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"UX is everything when you're talking about agents, and functionality doesn't matter until your UX is solved."
<div class="text-xs opacity-60 mt-1 not-italic">— Donné Stevenson，关于 dealer-facing agent 的核心教训</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"What if we are the first ones to… build the harnesses for an agents-only marketplace?"
<div class="text-xs opacity-60 mt-1 not-italic">— Pedro Chaves，整场对话的核心命题</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"That's scheduling. It's a solved problem."
<div class="text-xs opacity-60 mt-1 not-italic">— 回应 Demetrios 在 Portugal 跑 ATM 见面交易的故事</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"You don't really have a Ctrl+Z and the undo button for when an agent takes an action."
<div class="text-xs opacity-60 mt-1 not-italic">— Demetrios 顺嘴抛出、被两人一致认可的产品设计观察</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"This middle layer, it's trust, right? It's an escrow."
<div class="text-xs opacity-60 mt-1 not-italic">— Pedro 给"为什么 marketplace 不会被 agent 绕开"的回答</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"It's not a simulation. It is a recommendation."
<div class="text-xs opacity-60 mt-1 not-italic">— Demetrios 总结 Pedro "next step capitalism" 的回应</div>
</div>

</div>

---
layout: end
---

# How do we unlock this item circulation?

<div class="mt-8 text-base opacity-70">
—— Pedro Chaves, OLX
</div>
