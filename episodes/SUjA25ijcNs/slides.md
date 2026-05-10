---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Mistral: Voxtral TTS, Forge, Leanstral, & Mistral 4 — w/ Pavan Kumar Reddy & Guillaume Lample'
info: |
  Latent Space 与 Mistral Chief Scientist Guillaume Lample、音频研究负责人 Pavan Kumar Reddy
  的对谈：Voxtral TTS 的 auto-regressive flow matching 架构、12.5 Hz 神经音频 codec、
  Forge 企业平台、Leanstral 形式化证明、以及 Mistral Small 把多个独立能力合并为一个 MoE 的工程哲学。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Mistral 同时发了五个东西

<div class="text-lg opacity-80 mt-4">Voxtral TTS · Forge · Leanstral · Mistral Small · 一份没怎么提的研究路线图</div>

<div class="mt-10 text-sm opacity-60">
Pavan Kumar Reddy（Audio Research Lead, ex-Gemini）<br/>
Guillaume Lample（Chief Scientist, ex-Meta LLaMA）<br/>
Latent Space · 2026
</div>

<div class="mt-8 text-xs opacity-50">
他们没把这期定义成发布会，但讲了 5 个不同方向的架构选择和理由。
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">这是一次"我们这个季度做了哪些选择，以及为什么这样选"的工程访谈。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 全新 TTS 架构
auto-regressive flow matching + 自研 12.5 Hz 神经音频 codec，3B 模型。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Forge 企业栈
"我们给客户用的，就是科学团队自己用的同一套工具。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Leanstral 形式化
赌的是 long-horizon reasoning 的 transfer，不是数学奥林匹克。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Mistral Small
sparse MoE · 6B active · 256K context，把以前分散的模型合并到一起。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Open Source 还是核心
"我们不想生活在最聪明的模型只在闭门里的世界。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 6 小时奖励信号
下一代 RL 基建是为"trajectories takes hours, like six hours to get a reward"准备的。

</div>

</div>

---

# Voxtral TTS：发布的内容

<div class="text-sm opacity-70 mb-4">"Voxtral TTS. So it's our first audio model that generates speech."</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型规模
**3B** 参数 · 9 种语言 · base 模型衍生

<div class="text-xs opacity-60 mt-2">
"a pretty small model, 3B model, so very fast, and also state of the art."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 成本
**only a fraction** of competitors

<div class="text-xs opacity-60 mt-2">
"in terms of cost, it's also much cheaper, only a fraction of the cost of our competitors."
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 是这条线的第三步
2025 夏季：Voxtral（ASR）<br/>
2026 1 月：实时多语言转写<br/>
本期：speech generation

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 同时开权重
连同模型一起开放权重。"open weights" 不是营销点，是 Mistral 的默认动作。

</div>

</div>

---
layout: two-cols
---

# 架构：autoregressive + flow matching

<div class="text-sm opacity-70 mb-4">"a novel architecture that we develop in-house"</div>

**主干**
- 沿用 Mistral 自家 3B base 模型
- transformer decoder 当 backbone
- 把音频当成"另一个 head"加上去

**两类 token，一个帧**
- semantic token + acoustic tokens
- 同一帧上多个 vocabulary 的 embedding 直接相加
- 输出帧 = 80 ms 音频

**输出端是 flow matching**
- 不是离散 token，而是连续 latent
- transformer 的输出当 condition

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./voxtral-architecture.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 音频理解 vs 音频生成

<div class="text-sm opacity-70 mb-4">两个 bucket，方法不太一样。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 理解（ASR · understanding）
和 Pixtral 视觉模型几乎对称：
- 音频 → audio encoder → 连续 embedding
- 喂给主 transformer
- **输出端只有文字**

<div class="text-xs opacity-60 mt-2">
"On the model output is just text. So on the output side, there is nothing that needs to be done."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 生成（TTS · generation）
输出端要造出音频：
- neural codec：audio ↔ 12.5 Hz 离散 latent
- 每帧含语义 + 声学 token
- 主 transformer 预测，flow matching head 还原波形

<div class="text-xs opacity-60 mt-2">
"the output now has to produce audio."
</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：理解端复用了视觉那条已经成熟的范式；生成端是真的要重新做研究——这也是 Pavan 觉得 audio 比纯文本更"有得做"的原因。

</div>

---

# 12.5 Hz 的自研 codec

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键事实
- 12.5 Hz：1 秒 = 12.5 个 latent
- 1 帧 = 80 ms 音频
- 每帧含 **K 种 token**：语义 + 声学
- codec 同时支持 **离散和连续** 两种使用

<div class="text-xs opacity-60 mt-2">
"the neural audio product converts audio into a 12.5 Hz set of latents. And each latent has a semantic token and a set of acoustic tokens."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 输入端的小技巧
> "There's several ways to use this at each frame, but we just sum the embedding."

不同 vocabulary 的 embedding 直接相加，因为它们都对应**同一个音频帧**。

简单到几乎反直觉，但 work。

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

**为什么自己做 codec**：之前 Voxtral ASR 用的是开源 Whisper encoder。1 月发布 real-time 模型时，他们已经在用自研 encoder。Pavan 说"我们的 post stack 已经成熟到可以从零训出非常强的 encoder"。

</div>

---
layout: two-cols
---

# 为什么是 flow matching，不是 depth transformer

<div class="text-sm opacity-70 mb-4">同一帧 K 个 token，怎么预测？</div>

**Depth transformer（业界常见）**
- mini transformer
- 逐个吐 K 个 token
- "K auto steps" per frame，慢

**Flow matching（他们选的）**
- 主 transformer 出 condition
- flow matching head 做 velocity 估计
- 4 ~ 16 步直接出连续 latent
- "we were able to cut it down significantly"

**为什么 work**
- 同一个词，自己说 100 次也不一样
- 模型必须学**分布**而不是**均值**
- 取均值 = blurred speech

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flow-vs-depth.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一句被低估的关键判断

<div class="mt-4 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"You can't predict the mean of it because that corresponds to some blurred out speech."

<div class="text-xs opacity-60 mt-3 not-italic">— Pavan Kumar Reddy</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 文本是准 1-mode 分布
> "you just pick the word."

写"hello"几乎只对应 1 个 token。autoregressive softmax 完全够。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 音频是显式多模态
同一个词，"even with your own voice, could be inflected in so many different ways."

→ 必须建模分布，不是众数。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：图像生成圈早就吃透了"分布建模 > 众数预测"。Mistral 这次把同一个直觉，加上一个 4-步 flow matching head，搬到了实时音频上。

</div>

---

# 为什么不是纯 diffusion

<div class="text-sm opacity-70 mb-4">"You can do just flow matching diffusion for the whole audio. We didn't even go down that path."</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 全 diffusion 路线
- 一次性生成整段音频
- 质量好
- **没法实时流式**
- 视觉圈玩这个玩得很熟

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Mistral 选 autoregressive
- 主干仍是 LM，只是多了 audio head
- 适合 voice agent，**streaming 是第一优先级**
- 为后面的端到端音频/文字统一铺路

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "one of the main applications is voice agents and we want real time streaming, and that's the use case."

—— 模型选择是被产品形态倒推的，而不是被论文 SOTA 倒推的。

</div>

---

# Voice Agents 的真实体感

<div class="text-sm opacity-70 mb-4">Guillaume 说的实话：现在没人是在和模型"自然"对话。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 英语
"In English it's still much better than in any other language."

但即使是英语，也"not the same way you talk to a person"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 法语 / 西语 / 德语
"They'll talk very slow. They'll articulate as much as they can. So it's not natural."

</div>

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 rounded">

"I think people that are our age will actually always keep this bias of speaking very slowly when they talk to this model. Even if maybe, probably in a couple of years, maybe next year, it'll not be necessary anymore."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-4 text-sm opacity-70">
人对模型的"放慢说话"是**条件反射式**的——可能下一代根本不会有这个 bias。
</div>

---

# Pavan 自己的对照参考系

<div class="text-sm opacity-70 mb-4">他在 Google Assistant 干过：</div>

<div class="mt-4 p-6 text-base italic border-l-4 border-blue-500 bg-blue-50 rounded">

"I worked on Google Assistant a while back at this point... It's not that long ago. It was like four years ago or five years ago, and now it's completely audio in, audio out and the function calling and the whole thing happens completely end to end. And in a very natural natural way."

<div class="text-xs opacity-60 mt-3 not-italic">— Pavan Kumar Reddy</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 5 年前
功能 + 槽位 + ASR + TTS = 一条流水线

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 现在
audio-in / audio-out / function calling 一个端到端模型

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Pavan 的判断**：剩下的 gap "should be doable with the existing stack"——不需要等下一代架构。

</div>

---

# 不只是发模型：Forge

<div class="text-sm opacity-70 mb-4">GTC 这周宣布的客户平台。Guillaume 说这才是 Mistral 的 value prop 真正不一样的地方。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 客户拿到的是什么
- 数据处理工具链
- pre-training / fine-tuning / SFT / RL 全流程
- 同一套 codebase
- 质量级 pre-training infra

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Mistral 自己用同一套
"we provide them with the same tools as what our science team is using."

科学团队用了 2 年的 infra → 现在卖给客户。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-base italic">

"Since it's tools that we've been using for two years now, it's really better tested. It's really sophisticated."

</div>

---
layout: two-cols
---

# Forge 是一种垂直整合

<div class="text-sm opacity-70 mb-4">不只是 endpoint，不只是 checkpoint，是"我们坐在你公司里面陪你解决问题"。</div>

**和别家不一样的点**
- 不是只甩一个 endpoint
- 不是只给 checkpoint 自己玩
- 是 forward-deployed engineers 进客户公司
- 看具体 issue → 给具体方案

**Guillaume 原话**
> "We don't just release an endpoint... we don't just give a checkpoint. We really look very closely with customers."

**结果**：客户**不用把数据分给好几家**——一个伙伴解决所有 modality。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./forge-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 隐私与本地部署：第一驱动力

<div class="text-sm opacity-70 mb-4">客户为什么找 Mistral？最主要的原因不是 benchmark。</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-base italic">

"Sometimes they have a lot of privacy concerns. They have this data that is very sensitive. They don't want data to leave the company."

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 部署形态
- on-premise
- 私有云
- 都不会把数据交第三方

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 数据敏感度异质
有些数据可以上云，有些必须留本地——异质工作流"很烦"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一站式
所有 modality（文字 / 语音 / 视觉）都用一家供应商，少跨 N 家云

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：这是一个被 hyperscalers 看不上的市场——但欧洲企业、政府、银行、医疗机构对这件事的支付意愿很强。Mistral 的"非美国 + 开权重 + 可 on-prem"组合在这里有结构性优势。

</div>

---

# 闭源模型对企业是浪费

<div class="text-sm opacity-70 mb-4">Guillaume 罕见地直接表态。</div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"I think using a closed source model is really sad because... you are not leveraging all this data, and you are going to be using the same model as all your old competitors when you're actually... collecting for years, which is really valuable."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 客户其实坐在金山上
"Sometimes it's **trillions of tokens** of data in a very specific domain. Their domain, which is data that you'll not find on the public internet."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但他们没动
塞进 context 里效果远不如 fine-tune。Guillaume：很多客户**没意识到**fine-tune 能让模型推得多远。

</div>

</div>

---

# 客户故事：原来 0~1% 的语言，重训成 50%

<div class="text-sm opacity-70 mb-4">一个具体例子，Guillaume 没说是哪种语言。</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 出厂模型
该亚洲语言"would be like maybe 0~1% of the mixture"

写得出，但不"惊艳"。方言、行业词都覆盖不到。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 客户定制版
**"this language was 50% of the mix"**

"much, much stronger. It knows the dialects, it knows the..."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

**作者概括**：这是 generalist 模型永远做不到的事——你不会为某个客户把整个 mixture 改成 50% 某语言。Forge 模式下，客户得到的是**一个为他们重新训练的 base 模型**，不是一个 fine-tuned head。

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

另一个例子：车厂要 3B 模型 + function calling + **完全离线**——"in a car you don't necessarily have access to internet"。

</div>

---

# 10x cheaper 的来源

<div class="text-sm opacity-70 mb-4">很多客户在闭源模型上做完原型，进生产时发现成本不可承受。</div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"They get some prototype, they're happy with the performance, and then they want to go to production and then they realize it's extremely expensive... we can sometimes be **10x cheaper** by just fine-tuning a model and it'll be better on-prem on their own server and also much cheaper as well."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 同等效果
fine-tune 后**更好**，不只是够用

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### 同等延迟
on-prem，不走外网

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### 1/10 的价
推理成本砍一个数量级

</div>

</div>

---

# Voice cloning：更像企业 voice 设计

<div class="text-sm opacity-70 mb-4">主持人问了"克隆名人声音"——Pavan 直接绕开了，强调企业用例。</div>

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-base italic">

"The main use case would be like for enterprise personalization... Each enterprise wants a customized, specialized something which is representative of their brand and also their safety considerations."

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 医疗助手
"empathetic assistant in the context of a healthcare domain"

要克制、温和。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 客服
"customer support bot"

要清晰、效率优先，conversational。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm italic">

Vibhu 的吐槽："you don't want to call a customer service and have the same exact voice. It's just gonna be weird."

</div>

---
layout: two-cols
---

# 长 form 怎么处理

<div class="text-sm opacity-70 mb-4">主持人提到 ASR paper 把 Whisper 的 30 秒处理扩到了 40 分钟。TTS 这边怎么做？</div>

**靠 codec 帧率本身就够稀**
- 12.5 Hz → 1 秒 ≈ 12.5 token
- 1 分钟 ≈ ~750 token
- 10 分钟塞 8K context
- 30 分钟塞 ~30K context

**Pavan 原话**
> "32K is something we are very comfortable training on. We can extend it even much longer. 128K. Okay."

**关键论点**
"the techniques are some way very similar to text long context modeling."<br/>
长 audio = 长 context + flow matching head 替代 next-token prediction。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tts-context.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Mistral Small：能力合一

<div class="text-sm opacity-70 mb-4">这一段隐藏在中间，但可能是这次最有信号的一段。</div>

**以前**
- 通用 instruct: 一个模型
- Devstral / 代码: 另一个
- Magistral / 推理: 另一个
- Pixtral / 视觉: 另一个
- 不同团队，独立 artifact

**Mistral Small**
- sparse MoE · **6B active** · **256K context**
- 同时具备 code / reason / vision / instruct
- "the first time we basically merged all of this into one"

**Guillaume 的工作流**：单一能力"成熟"后再 merge 进 mainline。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./merge-tree.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但不是所有东西都该 merge

<div class="text-sm opacity-70 mb-4">关于"是不是要做 super-omni 模型"的态度，比 OpenAI 早期 4o 那种激进版本要克制。</div>

<div class="mt-4 p-6 text-base italic border-l-4 border-blue-500 bg-blue-50 rounded">

"For audio... if you just want to transcribe it, it'll be very inefficient [to use a giant omni model]. If you want to do audio, you probably just want to be the one VR 3B model performance essentially the same. It's going to be incredibly cheaper."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample（YouTube auto-caption mistranscribed parts；意思保留）</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Merge 有意义
multimodal 推理、agent、跨能力综合

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Specialist 仍有意义
ASR、TTS、OCR——单纯走流水线的任务

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：Mistral 把"omni 模型"和"专家模型"看成两个不同的产品形态，不是一个收敛过程。下一波要 merge 进 mainline 的是 marketing、legal、CAD 这种"benchmark 不会专门测"的企业能力。

</div>

---

# 开源不是营销，是公司的 founding bet

<div class="text-sm opacity-70 mb-4">Guillaume 把自己和 LLaMA 的源头连起来。</div>

<div class="mt-4 p-6 text-base italic border-l-4 border-blue-500 bg-blue-50 rounded">

"Before this, for most researchers, like universities, it was impossible to work on LLMs. There was no LLM available. And if you look at many of the techniques that were developed after... preference optimization, all of this were done by people that had access to this portal."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample（讲 LLaMA 1 出来后整个学术界突然能做 RLHF 的故事）</div>

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-red-500 bg-red-50 rounded">

"We don't want to live in a world where the smartest models, the best models, are only behind closed doors, only accessible to a few companies that have the power to decide who can use them. **I think it's a scary future.**"

</div>

---

# Leanstral：奇怪但不奇怪的支线

<div class="text-sm opacity-70 mb-4">"It's a bit different than what we are usually releasing."</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 表面看
formal proof、Lean、专业数学家用，似乎和 Mistral 通用产品线无关。

社区"a very small committee of people doing a PhD on that. So it's super small."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 其实赌的是
**reasoning + verifiable reward**——大多数 reasoning 问题没有可机检的答案，但 Lean 有。

"if it compiles, it's correct."

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**为什么大多数 reasoning task 不能直接训**：大部分要"prove that f is continuous" 类型的题目——没法和 reference 一个 string match。判官 LLM 可能被 reward hack。Lean 的编译器是天然不可 hack 的判官。

</div>

---
layout: two-cols
---

# Lean 闭环：编译器就是裁判

<div class="text-sm opacity-70 mb-4">为什么 Lean 是 RL 的好友：</div>

**reward signal 是二元的**
- 模型生成证明
- Lean 编译器跑一次
- 编译过 → reward = 1
- 编译挂 → reward = 0

**没有 reward hacking 的接口**
- 没有 "judge LLM"
- 没有 "different but valid proof" 的争议
- 不需要参考答案的 string match

**Guillaume 原话**
> "It's like a problem if it compiles it's correct. It's very easy."

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lean-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 真正的赌注：transfer

<div class="text-sm opacity-70 mb-4">主持人 Swyx 提了一个观点，Guillaume 没否认。</div>

<div class="mt-4 p-4 text-sm italic border-l-4 border-purple-500 bg-purple-50 rounded">

"Because the proofs takes so long, it's actually just a proxy for long horizon reasoning and coherence and planning... it might spike everywhere else."

<div class="text-xs opacity-60 mt-2 not-italic">— swyx 的提问</div>

</div>

<div class="mt-4 p-4 text-sm italic border-l-4 border-green-500 bg-green-50 rounded">

"That's what we're seeing already. For instance, if you do some reasoning on math, then [Magistral] should reason even... there is some transfer, some sort of emergence that happens."

<div class="text-xs opacity-60 mt-2 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">

**作者概括**：Mistral 把 Lean 当作一个能产生 long-horizon、planner 类 reasoning 的"高质量 RL gym"。副作用——而不是数学奥林匹克分数——才是真正想要的产物。

</div>

---

# Lean 还能 agent 化

<div class="text-sm opacity-70 mb-4">Guillaume 顺手提了一个有意思的小观察。</div>

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-base italic">

"Sometimes the model can see a theorem that has to prove, it's very complex, but then it can take the initiative to say, **I'm going to prove this through three lemmas**. I'm going to suggest three lemmas, and I'm going to in parallel prove each lemma. So three of them in parallel with sub-agents..."

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Partial reward
即使 3 个 lemma 没全证出，证出 1-2 个仍可以拿到部分 reward——不是 0/1 二元

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 平行 agent
同一个 reward signal，自然支持 sub-agent 分解 + 并行验证

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：Lean 既是 reasoning sandbox，也是 multi-agent sandbox——这两件事 Mistral 同时在试。

</div>

---

# 下一代 RL infra：6 小时奖励

<div class="text-sm opacity-70 mb-4">Vibhu 问"frontier 在哪儿"，Guillaume 给的答案不是 RL%，是 trajectory 长度。</div>

<div class="mt-3 p-4 text-sm italic border-l-4 border-blue-500 bg-blue-50 rounded">

"GRPO doesn't really work with this any bit of off-policy... But now when you are moving towards this kind of problems where certain takes hours, **like six hours to get a reward**, then your model is way off-policy."

<div class="text-xs opacity-60 mt-2 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 旧 setup
math 题 → 几千 token → 模型还没漂移多少 → on-policy 算法仍然 work

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 新 setup
6 小时 trajectory → 模型已经走出去很远 → 需要新算法 + 新 infra

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 text-xs">

"Now everything we're doing internally, we're trying to build some infra that we actually anticipate is what we have in six months."

—— infra 是为 **未来 6 个月才会出现的训练 setup** 准备的，不是为今天的 task 优化。

</div>

---

# 还有大量 pre-training headroom

<div class="text-sm opacity-70 mb-4">在很多人喊"pre-training 死了"的时候，Guillaume 的判断完全相反。</div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"For us, we're still working a lot on the pre-training side. I think we are very far from saturating the pre-training. I think ML for pre-training will be a big step compared to everything we have done before."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Pre-training
"ML for pre-training" = 用模型来改进 pre-training 流程本身，他认为是大跨步

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 长 trajectory RL
GRPO 类算法不够，infra + 算法都要重做

</div>

</div>

---

# AI for Science：新的赌注

<div class="text-sm opacity-70 mb-4">Mistral 在 GTC 这周宣布了和 IBM、Andreessen 等的合作。</div>

<div class="mt-4 p-6 text-base italic border-l-4 border-blue-500 bg-blue-50 rounded">

"There are a lot of areas where we think that you could get some extremely promising [results]... You just have to find these domains where actually AI has not been yet applied, and it's usually hard to do because the people working in those domains don't necessarily know the capability of these models."

<div class="text-xs opacity-60 mt-3 not-italic">— Guillaume Lample</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 难点不是模型
domain 专家"don't necessarily know the capability of these models"——不是 capability 缺失，是 matching 缺失。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Mistral 的姿势
Forward-deployed engineer 进客户公司，"naturally" 做 matching。

物理、材料学是当下重点。

</div>

</div>

---

# Forward Deployed Engineer：什么样的人适合

<div class="text-sm opacity-70 mb-4">Mistral 在大量招这个 role。Guillaume 给了一份职位画像。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不需要的
- 不需要科研深度
- 不需要会自己写新论文

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 需要的
- 非常熟悉模型怎么用
- function calling、agent pipeline
- 解复杂、具体的客户问题
- "applied science basically"

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

> "It's similar skill as a researcher... you have to find solutions to problems that customers have not yet [solved]. Sometimes you have to create synthetic data, find some edge case... you have to be patient and creative."

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Pavan 补充**：FDE 的 work 很 diverse，从工厂的视觉检测到 CAD、车载离线 3B 模型——"the diversity of the work they do... it always surprises me."

</div>

---
layout: two-cols
---

# Real-world eval：FDE 反馈给科学团队

<div class="text-sm opacity-70 mb-4">解释了为什么 FDE 团队和科学团队"intertwined"。</div>

**Guillaume 原话**
> "This is basically a real-world eval... If you're just working in the lab, you have no idea whether your model is good at this edge case."

**Pavan 的极端例子**：有客户做"单词级 ASR"——给小孩听一个词让他读出来，模型评估对不对。这种 edge case 不可能出现在任何公共 benchmark 上。

**关键论点**：FDE 团队解决完特定 edge case，**经验回流到 base model**——下个版本"OOTB" 就更好。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fde-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Mistral 的"招人地图"

<div class="text-sm opacity-70 mb-4">Guillaume 在最后顺手列了团队分布。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Paris (HQ)
主力科研团队

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### London
小团队

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Palo Alto
小团队

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Zurich · São Paulo · Poland
新办公室

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### New York · San Francisco
有 presence

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Remote
也接受

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm italic">

"We want to keep it that way. 'Cause we find it quite efficient. So like a small team, [they're] agile."

</div>

<div class="mt-4 text-xs opacity-60">
注：Pato → Palo Alto，SAU → São Paulo，由 YouTube auto-caption 还原。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这一期里最值得记住的 7 句话——</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"You can't predict the mean of it because that corresponds to some blurred out speech."
<div class="text-xs opacity-60 mt-1 not-italic">— Pavan，为什么 audio 必须建模分布而不是众数</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"One of the main applications is voice agents and we want real time streaming, and that's the use case."
<div class="text-xs opacity-60 mt-1 not-italic">— Pavan，为什么不选纯 diffusion</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"We can sometimes be 10x cheaper by just fine-tuning a model and it'll be better on-prem on their own server."
<div class="text-xs opacity-60 mt-1 not-italic">— Guillaume，闭源模型到生产时的 reality check</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"It's a problem if it compiles it's correct. It's very easy."
<div class="text-xs opacity-60 mt-1 not-italic">— Guillaume，为什么 Lean 是好的 RL gym</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"We don't want to live in a world where the smartest models, the best models, are only behind closed doors... I think it's a scary future."
<div class="text-xs opacity-60 mt-1 not-italic">— Guillaume，开源是 founding bet 不是营销</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Six hours to get a reward, then your model is way off-policy."
<div class="text-xs opacity-60 mt-1 not-italic">— Guillaume，下一代 RL infra 的真正约束</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"There is a very big gap between the public benchmarks that are very academic [and what customers actually need]."
<div class="text-xs opacity-60 mt-1 not-italic">— Guillaume，FDE 的存在意义</div>
</div>

</div>

---
layout: end
---

# 一家公司，五个产品，一个判断

<div class="mt-8 text-base italic opacity-80">

"We really want this model to be accessible to anyone who wants. Intelligence to be used and accessible by anyone who can use it."

</div>

<div class="mt-6 text-xs opacity-60">
Pavan Kumar Reddy · Guillaume Lample · Latent Space · 2026
</div>
