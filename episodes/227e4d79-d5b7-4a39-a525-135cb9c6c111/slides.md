---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '176: 姚顺雨，来到腾讯300天'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 姚顺雨，来到腾讯 300 天

## 一位 29 岁的年轻人，如何空降改造腾讯混元

<div class="mt-6 text-sm opacity-60">
晚点聊 LateTalk · 第 176 期 · 高洪浩 × 曼琪 · 2026-07 · 1h39m
</div>

---

# 为什么这期值得关注

<div class="mt-2 text-sm opacity-70">
主持人曼琪对话《晚点 LatePost》主笔高洪浩。7 月 13 日，他发布了报道《当一个年轻人空降改造腾讯混元的 300 天》；本期播客补充了大量文章里没写的细节。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**少帅空降**  
29 岁的 OpenAI 系研究者接下混元，第一炮是"小模型"混元 3。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**组织换血**  
预训练、后训练、评测、Infra 负责人全部更换，Infra 从 Seed 挖人。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**预期管理的艺术**  
先发 preview 再发正式版；总办的评价是"符合预期"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**微信 VLM vs 混元**  
两套大模型大概率长期并存，张小龙坚持自己做、更可控。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**联邦制 vs 一根绳**  
《黑鹰坠落》成为腾讯内部讨论组织方式的例子。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**行业拐点之争**  
coding 已验证，但白领坐席率低——下半年是转折还是继续？

</div>

</div>

---

# 姚顺雨是谁：29 岁的"空降兵"

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 背景
- 97 年出生，29 岁
- 在 OpenAI 待过，时间并不长
- 此前已有在业界很有影响力的成果
- 2025 年 4 月发表博客 *The Second Half*

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 加入过程
- 2024 年：腾讯高招团队在顶会上认识他
- 2025 年：他决定回国，与几家大厂都有沟通
- 2025 年秋天：确定加入腾讯，负责混元

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 他面对什么
- 一个从搜广推时代走来的老团队
- 只有 2000 张卡的起步家底
- 公司上下的高期待："超越千问啊什么的，就是时间问题而已"

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**一个背景**：2025 年 DeepSeek 之后，大厂们发现"经验并没那么丰富，然后全是年轻人的一个组织"也能做出厉害的模型——找年轻人成了行业风潮。
</div>

---

# The Second Half：他为什么选腾讯

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"下半场的比拼不再是训练技巧，而是定义真正值得解决的问题。"
</div>

<div class="mt-2 text-sm opacity-70">
— 姚顺雨博客《The Second Half》，2025 年 4 月
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**找问题，靠 context**  
值得解决的问题大多埋在大公司沉淀的场景里。在他眼中，腾讯和 Meta 是拥有最多 context 的两家公司。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**为什么不选字节**  
字节 DAU 巨大（抖音 8 亿、头条/红果/番茄各约 1 亿），但用户画像同质化，生态围绕推荐分发，数据多样性与效率不如腾讯、Meta。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**腾讯的 context 清单**：社交、企业微信与文档、腾讯会议、QQ 浏览器与微信搜索、腾讯视频与 QQ 音乐、游戏——每个垂类都有做到头部的应用。
</div>

---
layout: two-cols
---

# 上半场与下半场：分界点在哪

<div class="text-sm leading-relaxed">

- **上半场**：用算法和模型攻克"好评估"的任务——下围棋、奥赛、IMO 金牌。对错明确、评估客观，本质是智力游戏，不是真实的生产任务。
- **下半场**：给 AI 找到合适的任务，去攻克传统评测系统难以评估的真实问题。
- **姚顺雨的分界点判断**：强化学习已经表现出泛化能力——后训练之后可以解决不同的任务，所以比拼从"训练技巧"转向"定义问题"。
- 这套思路与腾讯丰富的场景契合，但落地有个前提：腾讯各业务是否愿意开放数据（后面展开）。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./second-half.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 腾讯的醒悟：DeepSeek 之后找年轻人

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 冲击
2025 年 DeepSeek 出现后，腾讯高管意识到：一个经验并没那么丰富，然后全是年轻人的一个组织，居然做出了这么厉害的模型。而自己的团队"不再年轻"——背景多来自传统搜广推。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 两个选项
一、把现有的人慢慢换血；二、另找一支年轻团队单独组建、与混元赛马。最终结果：**用混元这套架子，把里面的人慢慢替换**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 高管动起来
Martin 亲自去硅谷，与 Meta、Google 的前沿科学家聊，希望他们来腾讯。面试层级也变了：以前研究员面试到 VP 减一、减二就到头，现在 Martin 会直接参与。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**慢半拍的比较**：字节的张一鸣更早一年多就在见研究员；字节真正意识到大模型"work"，是 2023 年 4 月 GPT-4 出来之后——而腾讯比字节还要更晚。
</div>

---
layout: two-cols
---

# 混元的前世：一场内部赛马

<div class="text-sm leading-relaxed">

- 混元诞生在 TEG（技术与工程事业群）。大模型刚起时，TEG 里有 **N 多个团队**都在做自己的大模型——类似赛马。
- **AI Lab**：有一支常年研究 NLP 的小团队，最懂大模型，但做出的结果并不很好。
- **数据平台部**：在内部跑起来效果最好，成为混元 1、混元 2 的底座。
- 赛马胜出后各团队合并，各部门负责模块，组成"联合战队"，做出最初代混元——绝大多数人是老一代搜广推技术员。
- 2021-2022 年腾讯降本增效，人手和卡都远远不够；2022 年还砍了部分 GPU 订单。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hunyuan-origin.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 组织换血：关键岗位"洗了一遍"

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 换了谁
预训练、后训练、评测、Infra 的负责人，基本上洗了一个遍——**全部是他自己招来的**。洪浩的评价：两三个月换一波，速度和执行力非常高。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Infra 从 Seed 挖
肖旋风、张驰、黄启都来自 Seed 的 Infra——Seed Infra 被认为是整个行业里最强的。预训练交给刘慧丹。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 老人去哪了
老人并没有真的走：离开混元，但留在腾讯转岗。没有大规模裁员——姚顺雨的方式是边缘化而非清退。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**scope 还在扩大**：4-5 月，他把多模态理解业务也挪进了大模型部。汇报关系上，他直接向刘炽平汇报，同时向 TEG 总裁卢山汇报（卢山实际管多模态部分）。
</div>

---

# "你只要不碰基模，你爱干嘛干嘛"

<div class="mt-4 p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"你可以继续在这待着，你只要不碰基模，你爱干嘛干嘛"
</div>

<div class="mt-2 text-sm opacity-70">
— 混元员工转述姚顺雨对旧团队的态度
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**温和吗？**  
表面温和：可以留下、不碰基模就行。洪浩的解读：其实也不温和——一上来两三个月人马上换一波，执行力非常高。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**也有老人留下**  
有政治敏感度高的老人，在他刚到之前就打好关系，现在仍处在还不错的位置。

</div>

</div>

---

# 为什么有人愿意来混元

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 姚顺雨的名字
OpenAI 出身，在圈内有号召力。对校招生和年轻研究员吸引力非常大——"很多的人连Seed也抢不过"，他的作用非常大。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 腾讯开价了
以前混元待遇低于市场水平。2025 年起腾讯决定去市场上抢人，愿意出非常高的价格——某种程度上比字节、阿里还高，因为他相对劣势。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### "这里还有坑"
字节、阿里的组织建制已相对完善，"没有太多的坑"。混元要重建，每个位置都能让你独立立一个团队——不必去 Seed 当一个螺丝钉。

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**但也要泼冷水**：团队氛围有"创业公司的影子"——层级少、context 共享、反应快；可毕竟还在大公司：人一定远远多于 Kimi、DeepSeek，混日子的、找人认人要找一圈的问题依然存在。
</div>

---
layout: two-cols
---

# 改革者的通行证：Martin 的信任

<div class="text-sm leading-relaxed">

- **最大的支持者**：刘炽平（Martin）。对一个改革者，进入公司第一是信任——信任之下才有放权。
- **三样权力**：钱（用最多的钱招最好的人）、人（换掉老的人）、卡（AI 上最关键的资源）。
- **卡的协商**：腾讯的卡由两个人协商决定——TEG 的卢山和总办成员 Davis 林景华（战略 + 广告老大）；这两条线往上走，都是 Martin。
- **沟通频率**：总办会每月开；从 25 年起，Pony 要求混元总监以上负责人每周汇报。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./reformer-formula.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 改革的窗口期：信任是有期限的

<div class="mt-4 p-3 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40 text-sm leading-relaxed">

洪浩的判断：**"老板的承诺只是承诺而已"**。老板的信任取决于他的耐心——对你有两年耐心，你就有两年的信任度。腾讯老板整体耐心较久（可能两三年），但这个窗口是飘忽不定的。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**最聪明的改革者**  
在老板最信任的阶段做最激进的事，而不是慢慢来——消耗半年耐心之后，做事的阻力只会越来越大。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**耐心要靠成绩续**  
除非持续拿出成绩、让老板的耐心一直延伸，否则越往后越难，陷入"不断的证明说我是对的，那个是错的"——对一个改革者非常痛苦。

</div>

</div>

---

# 姚顺雨的风格：一个"组织型" leader

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不是非常技术导向**  
对比梁文锋、杨植麟——他们非常 focus 在技术、很大程度上只管技术。姚不会在技术路线上给出非常 sharp 的见解，而是交给下面的人；他自己更关心的，是组织。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**关心一线的人**  
经常找最年轻的研究员、实习生要反馈（比如"数据平台不好用"），能很快推动业务负责人调整。洪浩说：这是他组织悟性的一种体现。

</div>

</div>

<div class="mt-3 p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"做大模型这个东西组织是非常关键的，很多问题都是组织的问题。"
</div>

<div class="mt-2 text-sm opacity-70">
— 姚顺雨在内部常说的一句话
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**大家的感受**：他比想象中老成很多——一个 29 岁、研究出身的人如此在意组织，超出了很多人的预期；同时他也有年轻的一面，会组织同事打篮球。同事眼中他是"内强外强"的人，感受不到慌乱。
</div>

---

# 混元 3：一个"小模型"的选择

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-3xl font-bold text-blue-600 my-2">≈290B</div>
<div class="text-xs opacity-70">接近 300B 的 MoE 模型<br/>（"290 多"）</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

<div class="text-3xl font-bold text-yellow-600 my-2">10T</div>
<div class="text-xs opacity-70">行业风向：大家都在往更大尺寸走<br/>（字节传闻在练 10T 的模型）</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

<div class="text-3xl font-bold text-red-600 my-2">2 派</div>
<div class="text-xs opacity-70">内部声音：一派觉得节奏稳，<br/>一派比较焦急</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**行业背景**：Kimi 的 K3 在 7 月 17 日发布、表现亮眼。一种观点认为"一直以来大模型就是各领风骚那么几个月"，后来者居上会更明显；也有不少人质疑：现在做这么小的模型，意义是什么？
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**作者概括**（洪浩的理解）：一是新人必须在一定周期内交付、让老板看到结果；二是团队基本是新的，需要在真实实践中磨合每个环节、每个人。
</div>

---

# 预期管理：preview 先打前站

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**preview 是设计好的**  
混元 3 正式发布前，先发了混元 3 preview（4 月二十多号）——"非常明显其实就是一个做预期管理的一个版本"。预期管理的对象既是老板，也是团队。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**preview 的定位**  
对很多人来说依旧没那么好用，但相比混元 2 是质的飞跃。先发 preview 再发有提升的正式版，是一个不错的预期管理节奏。

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**总办的评价：符合预期**——不是超出预期，是达标。内部心理预期从一开始就很明确："这是一个小的模型，它能解决的问题是有限的，但核心是我让整个组织磨合好，让团队的士气重振"
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**清醒的判断**：接下来的混元 4 也未必是真正进入第一梯队的模型，差距正在缩小，真正有影响力的模型要再往后。
</div>

---

# 混元 4：补短板，继续磨合

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 混元 3 的不足
"一个中规中矩的小的模型"——尺寸摆在那里，很多任务上并没有做得那么好。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 混元 4 补什么
- 补充多模态能力
- 文本规模做得更大
- 数据继续优化

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
**Infra 是重建的**：整个混元的 Infra 从零开始、用三到四个月时间重新搭了一套体系——数据、Infra 都是刚重建的，还要继续优化和磨合。这也是洪浩观察到 4-5 月时姚顺雨精力主要放在 Infra 上的原因：先把效率做高，支撑新模型发布。
</div>

---
layout: two-cols
---

# AI 应用收进 CSIG，微信自留一套

<div class="text-sm leading-relaxed">

- **调整的结果**：核心 AI native 产品都归到了 CSIG——WorkBuddy（办公 agent）、CodeBuddy（coding 平台）、元宝（ChatBot）、IMa（知识库）、Marvis（桌面 agent，与微软深度结合）。
- **从 PCG 迁来**：IMa 原本由 QQ 浏览器团队孵化（在 PCG），后与 QQ 浏览器、搜狗搜索一起挪进 CSIG；腾讯文档也并入，与 WorkBuddy 整合。
- 这种跨事业群调整在腾讯以往不多见——2024 年 3 月的报道《腾讯在 AI 拐点到来前的 700 天》里写过：老板问谁能把产品接起来打这一仗，最后是 CSIG 的汤道生站了出来。
- 微信体系自留：小微（微信 agent）、大圆（企微 agent）。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./csig-products.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据壁垒是怎么松动的

<div class="mt-4 p-3 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40 text-sm leading-relaxed">

**以前**：数据是每个业务部门"自己最宝贵的财产"。腾讯视频版权要买、很多版权在阅文那边涉及结算；腾讯新闻只按独立项目给一部分数据（这批数据只能用于这个项目）；微信更是极度敏感。"我就算给了你数据又怎么样呢？就是你如果你同样的拉胯，那你相当于浪费了我的数据"

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**案例：腾讯新闻**  
通过元宝入口接入站内 App，用户活跃度非常快地提升——用户喜欢在新闻里问元宝、总结文章、在评论区互动。看到真切的产品提升，业务才乐意分享数据。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**案例：和平精英**  
与混元 3 有切实合作：在游戏里做 AI NPC，效果非常明确。业务才愿意把更多场景开放出来。

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**机制**：混元给每个业务（或大多数业务）派 2-3 人的后训练团队专门对接，帮助优化，业务也提供自己的数据。氛围变了——每个业务都有强烈的 AI 焦虑，拥抱 AI 比过去开放很多。
</div>

---
layout: two-cols
---

# RL 平台：co-design 的抓手

<div class="text-sm leading-relaxed">

- **姚顺雨在推动的事**：做一个整个公司都能用到的强化学习平台——希望共享整个腾讯里各个业务和产品的数据，让模型层与应用层的联动更有机。
- **进度**：还没有大规模推开，准备今年再推。种子用户核心是 WorkBuddy 和元宝——它们与 CSIG 绑定最深。
- **两个关键对接人**：WorkBuddy 负责人 Betty（原腾讯云负责人）、元宝负责人吴祖荣（兼腾讯会议负责人），都是加入较久、内部出名的"能打的人"。
- **联动已经发生**：春节 ChatBot 大战时，姚顺雨基本每周都与元宝团队沟通；WorkBuddy 是混元训练数据的重要来源，两个团队联系最紧密。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rl-platform.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 两套大模型：混元与微信 VLM

<div class="text-sm leading-relaxed">

- **完整描述**：混元和微信没有很直接的关系。微信的 agent 小微会部分调用混元能力——按场景在三个模型里选：微信自己的大模型、DeepSeek、混元。
- **@元宝已全走混元**：评论区 @元宝总结文章，走的是元宝的底层——现在绝大部分用户问的问题都由混元回答。元宝没接 V4，里面的 DeepSeek 还是 V3，"反映出还是想去推混元这个模型的"。
- **微信 VLM**：1 月发布 258B MoE 模型，比混元 3.0 稍小，未公开发布，自用（小微、搜索等场景）。
- **人力互流**：内部活水双向都有；但混元的待遇比 VLM 高很多——微信薪资体系难改，且微信传统上更倾向内部培养。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-models.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 张小龙的态度：隐私与可控

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**不觉得混元是第三方**  
Martin 跟小龙聊过这事。小龙的态度：混元有别于 DeepSeek、千问、Kimi 这些"第三方"，但**他对微信本身的隐私、用户数据是极度在意的**——所以更倾向于自己做一个模型出来，能够更可控。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**在探讨的折中方案**  
内部在探讨用联邦学习等技术，规避使用混元时的数据与隐私风险。VLM 的核心负责人是微信技术负责人 Harvey（周浩），从微信刚成立就在。

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**也在看外部的人**：与 Grok 的戴子航等有过接触，但微信（和小龙）的要求很高，能不能适应微信的文化和规则都不好说——想招一个这样的一号位并不容易。
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**张小龙自己的参与**：现在非常多。内部团队普遍有一点焦虑：微信是一个 14 亿人的全民级产品，规则已经定死，你只能在这套规则里跳舞——怎么跳脱出来成为真正的 AI native，很难说。
</div>

---

# 小微亲测：点餐 agent 还是太慢

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**好用的场景**  
聊天里遇到不懂的词，点一下就能问小微；把文章丢给它做总结；总结群聊记录。与聊天场景强相关，比较直接。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**点餐的低效（洪浩亲测）**  
调用麦当劳、瑞幸小程序自动点餐："等它搜索到我想点的那个东西，调出来，然后让我一步一步的确认，然后最后到支付的环节，我觉得我已经自己手动的点完三次了。"而且没有完全解放人——支付还是要自己确认。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**现状**：小微还在灰度，大概能支撑百万的量级。内部并没有明确判断用户是否真有"用Agent来点餐，来打车"的需求——微信是极其用户导向的团队，最终交给用户决定。洪浩自己的感受：需求没那么大。
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**前车之鉴（小蓝包）**：微信做过一个非常突破想象、又非常微信 native 的送礼功能，一时很火。但电商是重运营的生意，有大量脏活累活；微信想四两拨千斤，中间就有 gap——货太少，成不了主流电商。
</div>

---
layout: two-cols
---

# 联邦制 vs 一根绳：腾讯的组织惯性

<div class="text-sm leading-relaxed">

- **腾讯像"联邦制"**：中枢对下面有掌控力，但不会干预你——不会强制"大一统"。每个事业群自主性很强：游戏自己做世界模型，混元也做 3D、世界模型，上面不做强制要求。
- **字节是一根绳**：资源拧成一股绳、数据打通、全部循环起来，最顶层对业务群有很强的掌控力。
- **洪浩的观察**：目前并没有看到腾讯像字节那样的顶层强掌控。但 Martin 应该觉得"拧成一股绳"有必要——这个判断不是从 AI 才开始，而是字节崛起之后就意识到了。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./federation-vs-central.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 《黑鹰坠落》：腾讯内部的集体讨论

<div class="mt-4 p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40 text-sm leading-relaxed">

腾讯内部讨论组织方式时，举过电影《黑鹰坠落》的例子：索马里行动中，三角洲部队**非常完美地执行了抓捕任务**。但抓捕完成后要等游骑兵支援——游骑兵虽精锐，实力与三角洲差距很大，结果陷入自己的战斗、无法支援，任务惨败。对比之下，今年美国抓马杜罗，虽然动用了空海军，但完全由三角洲自上而下驱动，任务完成。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**结论**  
跨部门协作在竞争不激烈时是好方式；面对字节这样自上而下、很强集权的公司，就会出现各种问题。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**代价**  
腾讯过去引以为傲的跨部门协作，走到极端就是"极端的分享领导权"——而对抗字节需要的是统一领导，不是协调各方资源与利益。

</div>

</div>

---

# 边缘创新：微信为什么诞生在广州

<div class="mt-4 p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

<div class="text-lg leading-relaxed">
"因为正是因为我们在广州，我们可以不用知道深圳的人在做什么事情，那反而可以更加安心的按照自己内心认为正确的事情去做东西，不然可能也就不会有微信出现了。"
</div>

<div class="mt-2 text-sm opacity-70">
— 张小龙解释微信为什么诞生在广州
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**《失控》的信徒**  
张小龙很喜欢凯文·凯利的《失控》，书里一个核心观点：很多创新是在边缘地带发生。钉钉、千问（M6）起步时也类似。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**大公司创新的窘境**  
备受资源关注下做的东西更好，还是小资源、无干涉、无微操下更可能成功？腾讯的例子没有给出统一答案。

</div>

</div>

---

# 高赞评论的质疑：总部干不成新业务？

<div class="mt-4 p-3 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 text-sm leading-relaxed">

文章发布后有一条高赞评论：微信是广州跑出来的，王者荣耀是成都跑出来的，腾讯总部干不成大事；微博、电商、搜索、云、微视都在总部搞、都失败了。结论更绝对：姚顺雨选择了违背腾讯两大基因的路线——一是强技术路线，二是从集团层面往下推业务，"注定失败"。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**事实部分不成立**  
洪浩的反例：QQ 就是在总部做出来的；腾讯网、腾讯新闻、QQ 音乐、和平精英（深圳）也都是。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**但它提出了真问题**  
在大公司里怎么创新：备受关注、资源集中，还是小资源、少干涉？这才是值得讨论的部分。

</div>

</div>

---

# 陆奇的前车之鉴：文化兼容性

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**陆奇当年做了什么**  
大刀阔斧改革：调组织、定战略——"稳住主航道，就是搜索，然后我们要去决胜AI"。2017 年前后加入百度，2018 年离开。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**哪里出了岔子**  
把想法落实到实际时，大批核心业务高管流失——说明组织调整没有考虑组织文化的兼容性。文化这一点，比调人、定战略更难。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**当时的背景**：AI 的收入还非常远期，无论自动驾驶还是计算机视觉，都撑不起第二曲线。今天 AI 的商业价值"被初步证明了"，但仍有变数——这一点陆奇时代没有。
</div>

---

# 再过 300 天：更难的阶段才刚开始

<div class="mt-4 p-3 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 text-sm leading-relaxed">

**洪浩的判断**：一个空降者的组织改革有周期，每个阶段面临的挑战不同。现在这个阶段是姚顺雨最受信任的阶段——人事调整、组织调整、战略明确，这些"你有权利，你有想法，你就能去执行的"，相对容易。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**一年后要面对什么**  
- 拿出更令人惊喜的东西
- 人上了轨道之后，真正的协作才开始
- 大组织文化渗透进小团队，怎么兼容

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**为什么更难**  
调人、定战略可以靠授权解决；文化与人的匹配，考验的是更慢的功夫。参考陆奇：战略对了，高管却流失了。

</div>

</div>

---

# 谁能留在牌桌：第一梯队的标准

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**判定腾讯后来居上的标准**  
很简单：**拿出第一梯队的模型**。腾讯现在大体还在追字节和阿里的过程中。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**字节之谜**  
大家提到"留在牌桌"最多的是字节和 DeepSeek。字节有最好的资源、人才、钱、Infra，却始终没有做出 Kimi、DeepSeek、千问、智谱那样的口碑；coding 上甚至不一定在第二梯队头部。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**腾讯的位置**：没有字节那样的光环，阿里也没有——但千问在口碑和开源社区调用量上是有的。洪浩说："我觉得对腾讯来说确实他需要拿出比较好的模型啊"
</div>

---

# 字节光环的由来：短期历史的惯性

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 感性的来源
"来自对短期历史的惯性的记忆"：过去 5-8 年，字节是中国互联网领域最强的科技公司——赚钱能力最强、组织力很强。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 可量化的指标
字节出来的人更好融资——无论研究背景还是产品背景。字节是少数不断做出新产品的公司：番茄、红果都做到过亿 DAU。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 双刃剑
字节人高效，靠的是公司多年积累的底座和 loop。张一鸣强调：产品成功是整个体系的成功——所以字节没有"抖音之父"，没有个人英雄。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**正在发生的**：腾讯很多团队在大量引入字节的人，替换过去的老团队——组织方式、产品理念都在被替换。另一个对照：网易的人做内容有能力，但出来创业"很不好融资"。
</div>

---
layout: two-cols
---

# 从 Coding 到通用 Agent：拐点未到

<div class="text-sm leading-relaxed">

- **25 年初，核心圈就已押注 coding**：王健与戴雨森的播客里讲了 coding 如何支撑通用 Agent——"让大模型其实在数字世界里相当于有了手"。
- **去年底大公司都已转向**：Anthropic 4.6 起来之后（去年底/下半年），几家公司都在转 coding，只是 coding 没有破圈，外界到今年才感知。
- **商业化目前只看到两条**：coding 和视频生成。
- **坐席率是警讯**：一家大公司买 1 万席，每天真正用起来的人比例并不高——WorkBuddy、Coder 按坐席卖或按 C 端付费，都没那么乐观。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 下半年的转折之争：每年秋天都说见顶

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**可能发生大转折**  
程序员群体基本验证了 AI 能替代很多；但更广泛的知识工作者、白领能替代多少、够不够快？节奏跟不上，预期就会掉头。普遍认为转折在美国是今年底或明年，中国再晚半年到一年。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**"伤春悲秋"的另一面**  
从 23 年开始，每年秋天到年底大家都说"到头了，见顶了，泡沫要破灭了"——已经发生三次。AI 行业有一种节奏：春天很积极，秋天很悲观。

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**行业的变数**：Anthropic 二三季度盈利，但价格战压力大；Anthropic 和 OpenAI 都在与大型 PE 用十几亿、几十亿美元合资做专门部署的公司——最强模型服务大 B 客户，也需要大量 FDE（前向部署工程师），不是模型自己就能完成。
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**coding 会不会变成 SaaS 生态**？增长慢、收入不如 C 端、不会一家独大——如果这样，"想象空间"在中国可能有限。核心悬念不在 coding，而在通用 agent 的想象空间。
</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic">"下半场的比拼不再是训练技巧，而是定义真正值得解决的问题。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 姚顺雨博客《The Second Half》，2025 年 4 月</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="italic">"做大模型这个东西组织是非常关键的，很多问题都是组织的问题。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 姚顺雨在内部常说的一句话</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="italic">"你可以继续在这待着，你只要不碰基模，你爱干嘛干嘛"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 混元员工转述姚顺雨对旧团队的态度</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="italic">"我可以承诺你多长时间，我不去看benchmark。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 报道开头的承诺，背后是 Martin 的背书</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于组织、边缘创新与行业节奏：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="italic">"因为正是因为我们在广州，我们可以不用知道深圳的人在做什么事情，那反而可以更加安心的按照自己内心认为正确的事情去做东西"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 张小龙解释微信为什么诞生在广州</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic">"未来已来，但是分布不均。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 戴雨森，2025 年 2 月与王健的对谈播客</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="italic">"就这个AI行业非常神奇，有一种伤春悲秋的节奏。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 高洪浩谈每年秋天的"泡沫破灭论"</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="italic">"一直以来大模型就是各领风骚那么几个月"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 行业内的一种声音，谈后来者居上</div>
</div>

</div>

---

# 核心金句（三）

<div class="text-sm opacity-60 mb-3">关于混元 3 的意义与腾讯的选择：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic">"这是一个小的模型，它能解决的问题是有限的，但核心是我让整个组织磨合好，让团队的士气重振"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 混元 3 发布前，内部的真实心理预期</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="italic">"老板的承诺只是承诺而已"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 高洪浩谈改革者与老板信任的脆弱性</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="italic">"我理解这个就是腾讯。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 洪浩谈腾讯为什么没让微信与混元共用一套底层模型</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="italic">"你真的遇到这个时候，你能不能拧成一股绳去做这个事情。"</div>
<div class="text-xs opacity-60 mt-1 not-italic">— 洪浩谈腾讯组织惯性面对 AI 竞争时的考验</div>
</div>

</div>

---

# 谢谢观看

<div class="mt-20 p-6 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

<div class="text-2xl font-medium leading-relaxed">
"核心是我让整个组织磨合好，让团队的士气重振。"
</div>

<div class="mt-4 text-sm opacity-70">
混元 3 是起点：真正的考验是组织能不能持续拿出惊喜——以及腾讯能不能拧成一股绳。
</div>

</div>

<div class="mt-10 text-sm opacity-60">
晚点聊 LateTalk · 第 176 期 ·《姚顺雨，来到腾讯300天》<br/>
来源：https://podcast.latepost.com/176
</div>
