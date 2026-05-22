---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'SpaceX IPO, The Erdős Problem, Spotify CEO Joins | Alex Tabarrok, Bill Clerico, Alex Norström, Jordan Schneider, Christina Lee Storm, Erik Bernhardsson'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# SpaceX IPO, The Erdős Problem, Spotify CEO Joins

**Alex Tabarrok** · **Bill Clerico** · **Alex Norström** · **Jordan Schneider** · **Christina Lee Storm** · **Erik Bernhardsson**

<div class="mt-8 text-sm opacity-70">
TBPN · May 21, 2026
</div>

<div class="mt-6 text-xs opacity-50">
Six guests. One massive show. From SpaceX S-1 to Erdős #90 to the AI economy.
</div>

---

# 为什么这期值得看？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**SpaceX S-1 终于来了**
史上最大 IPO，声称 $28.5T 可寻址市场，Anthropic 年付 $150 亿买算力

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**OpenAI 破解 Erdős #90**
通用模型在组合几何学取得突破，反驳了保罗·厄多斯的著名猜想

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Baumol 效应与 AI 经济**
经济学家 Tabarrok 解析为什么服务业越来越贵，AI 可能如何改变这一切

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**中美科技冷战**
从无聊的峰会到稀土杠杆，台湾芯片的战略意义，人形机器人之争

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**Spotify 重塑粉丝经济**
预留票务、AI DJ、粉丝混音——十六年老兵解读 Spotify 的未来四大赌注

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**灾害科技 × AI 基建**
$85M 专项基金对战野火，Modal $3.55 亿 C 轮，GPU 租赁市场持续紧俏

</div>

</div>

<div class="mt-3 text-xs opacity-60">
TBPN 2026 年 5 月 21 日 · 六次对谈 · 2 小时 30 分钟
</div>

---

# SpaceX IPO：史上最大的公开募股？

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**S-1 文件要点**

- 预计募资 **$800 亿** 以上，超越沙特阿美 2019 年的 $260 亿纪录
- 预计上市日期：**6 月 12 日**（仅剩 20 天）
- 截至 2026 年 3 月 31 日，**22,000+ 员工**
- 2025 年营收：**$187 亿**
- 高盛击败摩根士丹利拿下 **lead-left**

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-3 text-sm">

**四分之一个世纪的漫长道路**

Elon Musk 在近 25 年前创立 Space​X，从"几个人、几乎破产"的初创公司，成长为世界最有价值的私人企业之一。曾在多轮私募和员工要约收购中稳步推高估值，从未做过 down round。

</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**不仅是 IPO，更是叙事转折**

Kevin Kwok 评价 S-1 "像科幻小说一样好读"。Peter Haig 指出 AI 资本支出是太空支出的 **3 倍**："这是一家 AI 公司，带着几枚火箭"（It's an AI company with some rockets）。

作者概括：SpaceX 的叙事从火箭→卫星互联网→AI 算力，层层叠加，估值逻辑也随之巨变。

</div>

</div>

---

---
layout: two-cols
---

# SpaceX 的 $28.5T TAM：史上最大市场叙事

<div class="text-sm leading-relaxed mt-2">

S-1 文件中声称："我们认为我们发现了人类历史上最大的可执行总可寻址市场"（largest actionable total addressable market in human history）。

三个支柱撑起这个数据：

- **太空（$370B）**：火箭发射、空间解决方案
- **连接（$1.6T）**：Starlink 宽带 $870B + 移动 $740B
- **AI（$2.4T）**：基础设施 + 消费者订阅 + 数字广告

为估算 TAM 规模，SpaceX **排除了中国和俄罗斯**。节目嘉宾戏称：这为世界和平提供了一份经济激励。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spacex-tam.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: two-cols
---

# 从火箭到 AI：SpaceX 的业务演化

<div class="text-sm leading-relaxed mt-2">

SpaceX 的业务逻辑层层推进：

1. **火箭发射**（2002-）：需要一个可重复使用的廉价发射系统
2. **Starlink**（2019-）：发射能力 → 卫星 → 全球互联网
3. **AI Colossus**（2024-）：计算基础设施，Anthropic 年签约 ~$150 亿

节目组观察到，Elon 在过去一年中有意地构建了 AI 叙事：从 2025 年 12 月开始讨论太空数据中心、放出估值信号、接触 Cursor、与 Anthropic 合作（尽管几个月前双方还在互相攻击）。

"Jordy" 评论道：Elon 可能是世界最强的"做局"和"不惜一切把事情做成"的人——这就是他能积累如此多资本的原因。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spacex-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Anthropic：从质疑到盈利的狂飙

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Q2 2026 收入预测**

- 季度收入：**$109 亿**
- 环比增长：**+130%**（WSJ 标题称之为 "mind blowing growth"）
- WSJ 报道：将推动 Anthropic **首次实现盈利**
- 估值较年初：**+173%**

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**SpaceX Colossus 合作**

- Tom Brown（Anthropic 联合创始人）宣布扩大与 SpaceX 的合作
- 将在 **Colossus 2** 上扩展 GB200 容量
- 合作规模：**~$150 亿/年**（对比 SpaceX 全年 $187 亿收入）
- 作者概括：SpaceX 几乎一夜之间成为最大的 neo cloud 之一

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Gary Marcus 的尴尬**

Lisan Al Gayib 挖出 Gary Marcus **2026 年 2 月 23 日**的 Substack 帖子："生成式 AI 是骗局"。

而此时此刻：Anthropic 估值 +173%，OpenAI 估值 +67%，Anthropic Q2 即将盈利。"AI 永远不会盈利"论调正在崩塌。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**为什么现在？**

Semi Analysis 分析显示：某些工作流中，AI 以人工 1/10 甚至 1/100 的成本完成等价任务。Dylan Patel 指出：当模型驱动足够大的经济价值时，领先模型实际上有能力提价。

</div>

</div>

<div class="mt-3 text-xs opacity-70">
OpenAI 同期估值 +67%。OpenAI 也在推进 IPO 申请流程，与 NVIDIA 的 $800 亿回购一起挤占了财经头条。
</div>

---

# SpaceX IPO：赢家与输家

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**大赢家**

- **Luke Nosek**：离开 Founders Fund 创立 Gigafund，专门聚焦投资 SpaceX。"极度的信念会带来这样的回报"（conviction will do that）
- **Antonio Gracias / Valor**：30 个实体参与了多轮融资。"人们说他是唯一投资者——不，他有很多 LP。但三十多种投资载体说明了一切。"
- **Goldman Sachs**：击败 Morgan Stanley 拿下 lead-left
- **长期员工**：Elon 通过多轮要约收购提供流动性，"未做过一次 down round"

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**估值分歧**

- Codex 公平价值估算：**$1.1T-$1.5T**
- 牛市假设：若 Anthropic 持续合作 + Starship 解锁新市场 + 公开市场稀缺性，可达 **$1.7T-$1.9T**
- $2T 意味着市场实质上给 AI 轨道计算故事赋予了 **$880B-$1T** 估值溢价（叠加在已经富裕的 Starlink 估值之上）
- "可能是 IPO 狂热期的定价——但我不会称之为'公平'"

</div>

</div>

<div class="text-xs opacity-70 mt-3">
DJ 分析师被"献祭"给 SpaceX lead-left——不仅是有史以来最大的 IPO，而且是向 Elon Musk 汇报工作。
</div>

</div>

---

# OpenAI × Erdős 问题：AI 的科学突破

<div class="text-sm leading-relaxed mt-4">

**背景**：保罗·厄多斯（Paul Erdős）是 20 世纪传奇数学家，一生提出约 **1,200 个**数学问题。这些"Erdős 问题"被视为 AI 能力的测试目标。此前已有数百个被解决，但大多是改写已有论文——真正的突破性新解很少。

**问题 #90**：平面上 n 个点之间，相距恰好 1 个单位的点对最多能有多少？Erdős 猜想上界不超过 n^(1+o(1))。

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**历史上的最佳构造（下界）**

- 排成直线：**n-1** 对
- 正方网格：**~2n** 对
- 格点构造：**n^(1+o(1))**

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**OpenAI 的证明**

一个内部通用推理模型证明：**存在无穷多个 n**，使得最大单位距离对数 **大于** Erdős 猜想的上界。

即：Erdős 猜错了。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**突破的意义**

- 证明长达 **18 页**，数学家认为思路可广泛迁移
- 估计推理成本仅 **数百到数千美元**
- 奖金：**$500**（非稀释性融资！）
- Terence Tao："太惊人了"

</div>

</div>

</div>

---

---
layout: two-cols
---

# 为什么 Erdős #90 比 AlphaFold 式突破更重要

<div class="text-sm leading-relaxed mt-2">

这不是一个专门的数学求解模型。OpenAI 用一个**通用推理模型**解决了问题——不是暴力搜索，不是把其他问题的解搬到 #90 上。

Tyler Cosgrove 解释了三层意义：

**1. 超出训练分布**
模型不是简单地从训练数据中检索答案，而是产生了 genuinely novel mathematical reasoning。

**2. 不是暴力破解**
没有在 1,200 个 Erdős 问题上用蛮力测试。这是一个有针对性的、高效的推理过程。

**3. 证明有价值**
18 页的论文，数学家们认为这个新方法可以应用到其他问题。"这不仅是解决了一个问题，而是一种新的数学方法。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./erdos-problem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 能力加速：从 IMO 金牌到 Erdős 猜想

<div class="text-sm leading-relaxed mt-4">

Noam Brown：*"不到一年前，前沿 AI 模型仅达到 IMO 金牌水平。我预期这个进展速度会继续。"*

节目组讨论了这一突破在 AI 能力辩论中的位置：

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**"随机鹦鹉"论的终结？**

Tyler Cosgrove 明确指出："这完全与 Gary Marcus 的论调相反——这些模型不是只会预测下一个 token 的鹦鹉，它们确实可以产生 novel ideas。"

节目组还提到此前关于 Gorn 猜想的讨论——当时认为需要暴力连接不同概念才能产生新想法。而这次突破在推理效率上远超预期。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**还有多少问题？**

- Erdős 问题总数：~1,200 个，约 500-600 个已被解决
- 还有千禧年大奖问题（每个 $100 万）
- 作者概括：如果 AI 开始批量解决这些开放问题，对数学界的冲击可能类似 AlphaFold 对结构生物学的冲击——只是这次工具是通用的，不是领域专属的

</div>

</div>

</div>

---

# Baumol 效应：为什么服务业越来越贵？

<div class="text-sm leading-relaxed mt-4">

Alex Tabarrok（George Mason 大学经济学教授，Marginal Revolution 联合主播）：

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**核心机制**：如果某个行业的**生产率不提高**，但该行业仍需从生产率不断提高的其他行业**争夺劳动力**，那么该行业的价格就必须上涨，否则无法支付有竞争力的工资。

</div>

Tabarrok 用了一个生动的例子：

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded mt-3 text-sm italic">

"想想毕达哥拉斯——他身边有 10 到 12 个学生，在沙地上画一个三角形，讲一些数学。几千年来，我做的事情跟他没什么区别。也许我用的是黑板或 PowerPoint，但本质上，依然是我和几个学生在一起，教育行业的生产率几乎没有提高。"

</div>

<div class="text-xs opacity-70 mt-2">
Tabarrok 强调：这是持续超过 100 年的趋势，比监管更根本——早在 Medicare、大量政府干预之前，人们就在抱怨医疗教育价格上涨。
</div>

</div>

---

---
layout: two-cols
---

# Baumol 效应与 AI 的未来

<div class="text-sm leading-relaxed mt-2">

**关键问题**：如果机器人能替代劳动力（资本替代劳动），Baumol 效应会在很大程度上**消失**。

但 Tabarrok 提醒我们不要过度焦虑 Baumol 效应本身——服务业变贵的**另一面**是制造业商品变得极其便宜。人们购买更多的医疗和教育，正是因为整体更富有了（而不是被迫多买）。

**对 AI 的看法**：

- 目前所有的硬数据都显示 **AI 在增加就业，而非减少**
- AI 对医疗保健（如药物发现）的影响最令人兴奋——"一个类似解决 Erdős 问题的药物发现突破将价值数万亿"
- 技术专家对技术进步速度的判断是对的，但经济学家认为技术扩散到整个经济**需要更长时间**（类比：电力）

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./baumol-effect.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 财富观：创造性海啸 vs 破坏性海啸

<div class="text-sm leading-relaxed mt-4">

Tabarrok 对 AI 的经济影响做了一个鲜明对比：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 这是"创造财富的海啸"

"AI 做所有工作，意味着我们拥有难以置信的财富——即使没有工作也是如此。这是你想要的那种问题。*这不是飓风或海啸摧毁财富的过程，而是圣诞老人把礼物放在圣诞树下的那种戏剧性。*"

"饼越做越大的问题，我们能解决。饼在缩小的零和博弈才会让社会崩溃。"

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 但也有真实的担忧

"我这辈子从未感到**可能性的窗口如此之大**——无论是通向超级智能的巨大机遇，还是通向灾难的可能性。两种可能都不是疯狂的。"

Tabarrok 的立场：**中间派**。他不是完全 dismiss 末日论者，但更担心的是政策上的不作为而非技术本身。

</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3 text-sm">

**价值捕获的特殊性**：与历史上的技术（蒸汽机、铁路、互联网）不同，AI 更容易被广泛获取。前沿模型（如 OpenAI、Anthropic）领先开源大约 **6 个月**，而即使是今天的免费模型，也比两年前的顶级模型强大 100 倍。"技术的普及速度前所未有"。

</div>

</div>

---

# AI 在医疗：下一个 Erdős 级别的突破？

<div class="text-sm leading-relaxed mt-4">

Tabarrok 指出 AI 最有价值的应用场景：

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

*"如果我们能为药物发现做到 OpenAI 为数学做到的事——你知道，癌症死亡率下降 5% 就价值数万亿。一个新药突破，就像解决一个 Erdős 问题，将令人难以置信。"*

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**分工的持续细化**

- 知识经济的"pin factory"：从"一个医生" → 足科、眼科、耳鼻喉科……不断分裂
- AI 会继续推动这个趋势——不是消灭医生岗位，而是创造更多专业角色
- 不同专科都将使用 AI，但工作内容会变化

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**经济学家的谨慎乐观**

- "到目前为止，所有数据都显示 AI 在创造就业，而非消灭就业"
- 前沿模型领先开源 ~6 个月，但即使是今天的免费模型也比 GPT-3 好 100 倍
- "技术扩散需要时间——就像电力。技术专家对进步速度是对的，但经济学家对经济影响的速度也是对的。"

</div>

</div>

</div>

---

# AI 时代的价值捕获：与历史技术有何不同？

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**这次的难点**

- 前沿智能**极其广泛可用**——你可能只用现成的模型做出一项医疗突破，付费的是 tokens/订阅，并非巨额授权费
- AI 实验室目前并不擅长捕获这些应用层的价值
- "如果你发明了更好的引擎，你可以卖很多引擎并获得好利润。但如果突破来自一个通用模型的一次推理，实验室赚到的只是推理费。"

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**但是普及速度前所未有**

- 模型**同时变得更强和更便宜**——"比我见过的任何技术都快"
- 技术本身大量开源，非常容易获取
- 程序员先行者会变得非常富有，但技术本身将广泛触及社会
- "它不是火箭科学——只是一些好主意被证明极其强大而已"

</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3 text-sm">

Tabarrok 将 AI 与 electricity 类比：电力是最杰出的通用技术之一，但花了数十年才渗透到经济的每个角落。"我们仍在学习如何重新组织生产结构来充分利用 AI。" 但技术进步的速度是空前的——"我这辈子从没见过可能性之窗如此之大"。

</div>

</div>

---

# 美国人的"坏情绪"：经济现实 vs 心理感知

<div class="text-sm leading-relaxed mt-4">

Tabarrok 对美国当前经济心理的诊断：

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**全球化悖论**：*"没有哪个国家比美国从全球化中受益更多——是我们打开了海路，把世界变成了全球化，服务于我们的利益。我们是世界历史上最富有的国家……但我们在抱怨自由贸易和移民。"*

**移民悖论**：*"同样，没有哪个国家比美国更好地同化移民并从中获益——但我们在抱怨移民。"*

**债务困境**：*"美国选民不断说：'高税收？不要。减少开支？也不要。' 你不可能同时拥有蛋糕并吃掉它。美国公众还没有决定要走哪条路。"*

</div>

Tabarrok 承认自己低估了**心理因素**在经济认知中的作用。"我改变了看法——这些心理因素的影响之大令我惊讶。"

节目讨论了其他驱动因素：Instagram 让人们看到不平等、Doomscrolling 替代了户外活动、住房政策失败（"硅谷是一片 strip mall"）等问题。但核心结论是：**美国有很多值得骄傲和感觉良好的理由**。

</div>

---

# 中美科技冷战：停滞中的均衡

<div class="text-sm leading-relaxed mt-4">

Jordan Schneider（China Talk）对日内瓦中美峰会的评价：**"Prestige on the cheap"**（低成本的面子外交）。

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**双方都已认识到相互杠杆的存在**

- 美国：芯片出口管制、AI 模型领先、TSMC/台湾
- 中国：稀土矿物（2025 年 4 月首次出手验证有效）、制造规模、制药 API 生产
- 结果：**相互威慑的尴尬均衡**——既不升级也不让步

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**AI 安全对话的缺失**

- 整个内阁和大型 CEO 飞过去，但**没有 Sam Altman、Dario Amodei、Demis Hassabis、Sundar Pichai**
- 这被框定为"贸易代表团"，AI 实验室领袖并未被邀请
- Schneider：特朗普政府连国内 AI 监管都没搞清楚，更不可能做好中美 AI 安全对话的准备
- "中美战略稳定对话不会在 Cuban Missile Crisis 级别的危险之前发生"

</div>

</div>

</div>

---

---
layout: two-cols
---

# 中美：芯片、台湾、人形机器人

<div class="text-sm leading-relaxed mt-2">

**台湾不只是芯片**

Schneider 反驳 Chamath"18 个月后台湾不是地缘因素"的说法：
- 哪怕英特尔恢复、三星赶上，台湾 18 个月后**仍然生产 85-90% 的先进芯片**
- 台湾是**民主政体**，是第一岛链的锚点
- 如果台湾灯灭，2028 年仍是全球经济灾难

**人形机器人：中国的硬件优势**

- 中国的 EV 制造规模可能转化为人形机器人规模优势
- "制造 fancy 模型所需的硬件几乎肯定将在中国大规模生产"
- 美国暂时靠芯片和软件领先，但硬件规模差距可能持续扩大

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./us-china-leverage.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# NVIDIA $800 亿回购：AI Agent 推动财报飙升

<div class="text-sm leading-relaxed mt-4">

节目简短提到了 NVIDIA 的最新财报——被 SpaceX 和 Anthropic 的新闻挤到了次要位置，但同样重要：

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**$800 亿股票回购**
创纪录的回购授权，反映管理层对现金流的极度信心。NVIDIA 是 AI agent 时代的主要受益者——每部署一个 AI agent，背后都有 NVIDIA GPU 在运转。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Modal 的视角**
Erik Bernhardsson 确认 GPU 市场将持续紧绷至少 1-2 年。Modal 每月增长 40%，按幂次推算需求。尽管替代加速器（TPU、AMD、Trainium）长期有前景，但客户需求"零"——CUDA 锁定太强。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**下一波需求可能是什么？**
- World models（世界模型）
- Speech-to-speech 实时交互
- 更通用的 agentic 工作流
- "想象直接与计算机对话——把延迟降到零"

</div>

</div>

<div class="text-xs opacity-70 mt-3">
Take Kim 发布了 NVIDIA 看多分析。完整对话发布于前一天 TBPN。
</div>

</div>

---

# 数据中心叙事战与 Waymo 的中国车身

<div class="text-sm leading-relaxed mt-4">

**讨论亮点**：

- **中国资助美国数据中心的抗议？** Schneider 认为这是 AI 实验室的 coping mechanism。"Ben Thompson 说得对：这可以用钱解决——搬家补贴、公园修建、让数据中心变漂亮。"

- **Waymo × Zeekr**：Waymo 正在使用中国品牌 Zeekr 的车身和电池（但替换掉所有电子系统和软件），规避进口关税的同时降低硬件成本。

- **中国 EV 体验**：Schneider 在挪威试驾过 BYD，令人印象深刻。"美国汽车制造商应该紧张。"

- **比亚迪 vs 苹果 Vision Pro**：节目组讨论了一个观察——你可以不花钱就获得极其令人印象深刻的 AI 体验，但元宇宙/NFT "从来没有一个时刻你能在没有任何交易的情况下获得震撼体验"。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded mt-3 text-sm">

**作者概括**：中美在 AI 上的合作短期内不可行。中国领导层"deeply hardware-brained"，对 AI 安全论调持怀疑态度。美国对台政策短期内不会因芯片产能转移而改变。双方都在一种"不情愿的共存"状态中摸索。

</div>

---

# 灾害韧性：$85M 专项基金与变暖世界

<div class="text-sm leading-relaxed mt-4">

Bill Clerico（Convective Capital 创始人，WePay 前创始人兼 CEO）：

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**投资逻辑**：*"世界在变暖，基础设施在老化——这就是灾难的配方。当灾害频率和烈度都上升时，必须有私人市场来回答问题、构建解决方案。"*

- Fund II：**$85M**（上次基金的 2 倍规模）
- 美国每年灾害成本：**~$1 万亿**（Bloomberg 估算，相当于国防开支或国债利息）

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**野火技术**

- Overstory：卫星图像帮助电力公司修剪电线附近的树木
- Volt Air：自主无人机电力线巡检
- 公共设施引发约 11% 的火灾，但贡献了 60% 的过火面积

</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**保险驱动**

- Stand：计算流体力学模拟野火，推荐家庭防火措施，提供保险折扣
- CA FAIR Plan（州最后保险机构）2026 年费率上涨 **30%**
- "不给家庭降低着火概率，住房和保险将变得不可负担"

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**市场格局**

- 买家在改变：PG&E 破产、保险退出加州改变了机构行为
- Red Sky Summit：600+ 消防局长年度聚会，搭建技术/实操对话桥梁
- "消防员看到 Watch Duty 这样的技术带来的影响，文化正在转变"

</div>

</div>

</div>

---

# 消防前线：为什么 VC 走进了野火领域

<div class="text-sm leading-relaxed mt-4">

Bill Clerico 分享了他走上这条路的原因——这不仅是商业判断，也是亲身经历：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**从志愿消防员到 VC**

"我最初做志愿消防员的经历让我震惊——我们还在用 1970 年代的卡车，斧头就是最先进的装备。我心想：我们怎么能用这些东西来应对野火？"

消防员面对的现实：
- 在 **43-49°C** 高温下带着链锯和斧头连续工作数天
- 睡觉时暴露在烟雾中，没有有效的呼吸防护
- 野火烟雾对健康的长期影响严重
- "一个国家装备它的消防员的方式简直是一种耻辱"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**为什么这段经历转化为基金**

- 他在 Mendocino County 的农场差点被野火烧毁
- "所有点开始连接起来"
- WePay 创业经历告诉他：早期进入被低估的市场，在其他人还没明白过来之前建立领导地位
- 灾害技术领域的市场结构，与 2008 年的 fintech 惊人相似——"当年的 VC 说没有市场，然后变成了科技行业最令人兴奋的赛道"

</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-3 text-sm">

但挑战依然存在：对消防员的**穿戴设备投资**至今未发生——这是一个巨大的机会，但需要解决文化、采购和分销问题。

</div>

</div>

---

# Speech-to-Speech：AI 的下一个爆发点

<div class="text-sm leading-relaxed mt-4">

Erik Bernhardsson 被问到——除了 LLM 推理和强化学习，下一波 GPU 需求可能来自哪里？

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**核心赌注**：*"我认为未来几年最酷的事情是 speech-to-speech。想象一下直接与计算机对话——为了做到这一点，我们需要把延迟降下来，包括所有三个组件（ASR → LLM → TTS）。"*

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**当前的瓶颈**

- 实时推理延迟仍然太高——可能需要 **100x-1000x** 加速
- 这不仅是模型问题，更是基础设施问题：GPU 池化、边缘部署、低延迟网络
- Google I/O 上 Omni 模型展示了 FaceTime 式的 AI 交互，但仍是"预告片"级别

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Modal 的客户图谱证明了需求广度**

- 音乐生成（Suno）
- 代码模型 RL 训练（Cognition）
- 后台 Agent（Ramp）
- 药物发现（CZI：分子动力学模拟）
- 天气预测
- 机器人学

"我们看起来像一个很宽的基础设施平台——几乎所有 AI 应用公司都需要不同的东西。"

</div>

</div>

</div>

---

# 灾害 VC 逻辑：为什么这不仅仅是"做善事"

<div class="text-sm leading-relaxed mt-4">

Clerico 强调了一个 VC 们容易忽略的观察：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**历史偏见正在瓦解**

- VC 通常不喜欢卖给公用事业、保险公司或政府的公司
- 但数十亿美元的亏损正在改变这些买家的行为——**$700 亿的市值蒸发会让你做出不同的决定**
- "我们不只是看野火本身，而是看它触及的每个大市场：能源、保险、房地产、林业、政府应急响应"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**与 Fintech 的类比**

- 2008 年创立 WePay 时，"波士顿 VC 说这是个银行业技术问题，不会有市场"
- 随后十年，fintech 成为科技领域最令人兴奋的赛道
- "现在的公用事业和政府领域，跟 2008 年的金融服务一模一样——早期、被低估、即将爆发"

</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mt-3 text-sm">

**前线问题依然严峻**：Clerico 作为志愿消防员的经历让他震惊——消防员仍然在使用 1970 年代的卡车、没有防护口罩、在 43-49°C 高温下带着链锯和斧头工作。穿戴式设备存在巨大机会，但至今未有任何投资。

</div>

</div>

---

---
layout: two-cols
---

# 灾害韧性市场全景

<div class="text-sm leading-relaxed mt-2">

**为何现在？**

买家行为正在被财务现实重塑：
- 灾难成本 $1T/年且还在上升
- 保险公司退出高火灾风险州
- PG&E 破产改变公用事业心态
- 州保险计划提高费率 30%

**VC 的挑战是季节性的**
- 消费者兴趣波动剧烈（火灾季节 Twitter 热搜 vs 淡季遗忘）
- 但机构买家（公用事业、保险）的需求是持续的

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./disaster-resilience.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Spotify Investor Day：四大赌注与粉丝经济

<div class="text-sm leading-relaxed mt-4">

Alex Norström（Spotify 联合 CEO，在公司工作近十六年）：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Reserved Ticket Access（预留票务）**

"谁没有在抢不到票的网站上绝望过？即使抢到了也不一定是你真正听的那个艺人。我们在对的时间，为对的人（真正的粉丝）保留门票。"

不是简单的播放量排行，而是**综合评估**：目录参与度、每日收听时长等——防止刷榜。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Fan-Made Remixes & Covers（粉丝混音）**

与 UMG 达成**里程碑式授权协议**："这是 AI 经济中**首次**以受控和授权的方式让艺人参与。" 采用 **pay-to-create, free-to-consume** 模式——制作要付费（Premium 附加包），收听免费。

"我没有在开玩笑——Spotify 的一个粉丝混音成为全球 #1 并非不可能。"

</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded mt-3 text-sm">

**AI DJ 的背后**：Spotify 约十年前开始投资 AI（当时叫机器学习），初期只是协同过滤。过去 10 年积累的反馈循环（每日 3-4 万亿事件）与 LLM 结合，创造了独特的推荐能力。2023 年收购 **Sonatic** 加速了 AI DJ 的推出。

</div>

</div>

---

---
layout: two-cols
---

# Spotify 的数据飞轮

<div class="text-sm leading-relaxed mt-2">

**核心优势**：数据 × 规模 × 时间

- 每日记录 **3-4 万亿**事件
- 从 200 万首曲库 → **2 亿首** 曲库（十六年）
- 用户反馈："他们似乎**了解我**"

**AI 战略**：Buy vs Build
- 购买最佳推理能力（generic LLMs），在其之上构建 **Large Taste Model**
- 收购 Sonatic（→ AI DJ）和 WhoSampled（→ SongDNA，5000 万用户）
- 99% 的工程师已采用 AI 编码工具
- Anthropic 评价 Spotify 为"领先的 AI 采用者之一"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spotify-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Discomorphism"：Logo 引发全球讨论

<div class="text-sm leading-relaxed mt-4">

Spotify 在近期将其应用图标改为**迪斯科球风格的闪光版本**——引发了一场全球互联网讨论。

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**品牌的胆量**

- 各大品牌纷纷效仿：Chuck E. Cheese、Kit Kat 都制作了自己的 disco 版本
- 互联网创造了一个新词：**Discomorphism**
- Norström："当数亿人对文化和艺术和 Spotify 如此热情时，这就是会发生的事。这就像体育。"

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**更深的原因**

"当数亿人——甚至数十亿人——在讨论你时，你做了什么有趣的事。"

Norström 认为这证明了 Spotify 真正处于**人文学科与技术的交叉点**（intersection of the humanities and technology）。

很多人批评"扁平设计太无趣"——但当你真正做了突破性设计时，人们又说"我没指这个"。

</div>

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded mt-3 text-sm text-center">
Spotify 股价当日上涨 13%，市值 $1,030 亿
</div>

</div>

---

# AI 电影：技术的连续，不是断裂

<div class="text-sm leading-relaxed mt-4">

Christina Lee Storm（Secret Level AI 工作室负责人，Playbook PLBK 联合创始人）：

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**历史总是在重演**

Storm 提起了《Jurassic Punk》这部纪录片——关于 Steve "Spaz" Williams 的故事。他是加拿大裔特效师，在 1993 年 IT 部门的地下室里创造了第一个 T-Rex 行走循环。当时制片人想用传统的 animatronics，但 Spaz 的 CGI 演示改变了 Spielberg 和 Kathleen Kennedy 的想法。

*"技术一直在娱乐行业中存在。很多人喜欢用'颠覆性'这个词当标题，但我认为这只是不断演进的过程。"*

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-3 text-sm">

**Hellgrind：$50 万拍一部电影？**

WSJ 报道了一部在戛纳首映的电影 Hellgrind，声称制作成本约 $50 万——其中 $40 万可能不止。Storm 提醒："让咱们实际一点——还有很多费用没有被捕捉到。不是说'我的电影预算只有这个数'就意味着可持续。"

</div>

</div>

---

# AI 电影制作：两端的张力

<div class="text-sm leading-relaxed mt-4">

Storm 提出了一个核心矛盾：

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**独立创作者的新时代**

就像 90 年代独立电影的崛起（Sundance 热潮），AI 工具给了更多创作者制作和发行电影的机会。但有一个前提："在一天结束时，电影真正重要的是**故事**。不是什么技术，而是一个好故事。"

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**两种 pipeline 的差异**

传统工作室有经过验证的制作流程。而独立创作者使用 AI 工具的方式"与工作室 pipeline 的方式几乎有微妙的差别"。Storm 把它比作 George Lucas："当他被告知'这不存在'时，他说'那么我们创造不存在的东西'。"

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**鸿沟是否会扩大？**

- 工会问题（行会规则）限制了传统制作中的 AI 使用
- Secret Level 有专有工作流管线，但成本结构仍然复杂
- "那些只关注预算的人错过了做更大事情的重点"

</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3 text-sm">

**恐龙电影的 AI 未来**：节目组开玩笑说——如果恐龙 IP 不受版权保护（与超人不同），且 AI 让生成恐龙影像变得极便宜，我们可能即将迎来一波恐龙电影浪潮。"你需要**Dino Prize**。"

</div>

</div>

---

# Modal：$3.55 亿 C 轮与 AI 基建的爆发

<div class="text-sm leading-relaxed mt-4">

Erik Bernhardsson（Modal Labs 创始人）：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Sandboxes：最近 6 个月的火箭增长**

- 月均增长 **~2x**（连续 6 个月）
- 功能：在安全环境中执行 LLM 生成的代码
- 驱动：强化学习训练、vibe coding 应用、后台 agent

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**C 轮细节**

- 融资金额：**$3.55 亿**
- 投后估值：**$46.5 亿**
- 领投方：General Catalyst + Redpoint
- 公司理念：提供通用 AI 基础设施——"几乎所有 AI 应用公司都需要不同东西"

</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded mt-3 text-sm">

**需求预测的疯狂**：Bernhardsson 直接承认——"我们看最近几个月，算出每月增长 40%，然后按三次方推算未来 3 个月需要的 GPU 数量。凭经验法则预订未来 3-6 个月的 GPU。就这么简单粗暴。"

</div>

</div>

---

---
layout: two-cols
---

# Modal 的 AI 基础设施产品全景

<div class="text-sm leading-relaxed mt-2">

**客户横跨所有垂直领域**：
- Suno：AI 音乐生成
- Cognition：代码模型的强化学习训练
- Ramp：后台 agent
- Lovable：vibe coding 平台
- CZI：药物发现（分子动力学模拟）

**GPU 市场判断**：
- 短期内仍然紧俏（未来 1-2 年）
- 替代加速器（TPU、AMD、Trainium）目前**客户零需求**
- 迁移到非 NIVIDA 堆栈的转换成本太高，除非运行在数十亿规模
- "我们爱 NVIDIA——那也是客户想要的。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./modal-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# GPU 市场的暗流：替代加速器的困局

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**NVIDIA 锁定不会轻易打破**

- 重写软件适配新芯片堆栈的成本**太高**（"除非你每月收入数十亿，不值得摊销"）
- 但 2-3 年内会有软件层将 CUDA 代码自动移植到替代加速器
- Bernhardsson 对 TPU、AMD 等**长期看好**
- 但眼下："更多竞争对每个人都是好事——但我们客户要的是 NVIDIA"

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Modal 的商业模式优势**

- 多租户 GPU 池：聚合数千家公司的需求
- 客户需要 1,000 GPU → 几分钟内到位
- 承担 GPU 容量管理的风险
- 与所有 Neo Cloud 保持对话，掌握市场脉搏
- "不想建自己的数据中心——但如果有必要，我们会做"

</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-3 text-sm">

**下一波需求**：Speech-to-speech 可能是未来 2 年的关键应用。"想象一下直接与计算机对话——需要把延迟降下来。" 而 Google I/O 上 Omni 模型的 FaceTime 式交互，又往前推进了一步。

</div>

</div>

---

# 住房危机、Strip Mall 与新城市的失败

<div class="text-sm leading-relaxed mt-4">

回顾 Tabarrok 对住房的讨论——一个政策失败导致的结果：

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

"硅谷是**一片 strip mall**。这些 strip mall 建在极其昂贵的土地上，只是因为人们不被允许建造任何更好的东西。住房问题几乎 **100% 是土地成本**，而非建筑成本。这不是什么自然灾害——是因为我们说：'不，你不能建。'"

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**为什么新城市难以复制？**

- 集聚效应（agglomeration）非常强大
- Trump 短暂的"自由城市"倡议未能落地
- Miami、Las Vegas（Zappos）尝试未达预期
- "我们需要一个大推动力"

</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**住房标准的隐蔽提升**

- 今天住房面积更大
- 孩子有自己的房间
- 1960 年仍有大量住房无室内厕所
- "如果有人说我们今天比过去更糟，那是错的"

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**可能改变格局的因素**

- 远程工作（COVID 影响低于预期）
- 自动驾驶（扩展 45 分钟通勤圈）
- California Forever 类型的实验
- "这是政策问题——在某种意义上完全在我们控制之中"

</div>

</div>

</div>

---

# TBPN 精彩瞬间：Grievance Culture 和 Vision Pro Psychosis

<div class="text-sm leading-relaxed mt-4">

节目穿插了大量来自 TBPN 主持人之间的趣味讨论：

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**"Grievance Culture"（怨愤文化）**

Tabarrok 的观点：美国正在经历从一侧的怨愤转向另一侧的怨愤——从"少数族裔被压迫"切换到"外国人坑害我们"。*"我们只是换了一套怨愤清单，而没有实际去做任何事。"*

但他不确定这是手机还是 Instagram 造成的——"但这种愤怒是真实存在的"。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**"Vision Pro Psychosis"**

TBPN 团队自称曾感染"Vision Pro 精神病"——"每个人都收到了 Vision Pro，尝试了它，然后在那周内发布大量关于它如何改变一切的帖子"。

但也有些"科技精神病"产生了持久影响：*"任何人在没有付费的情况下都可以获得极其震撼的 AI 体验。你永远无法在 Metaverse 中获得这种体验。"*

</div>

</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded mt-3 text-xs text-center">
彩蛋：Tyler 在节目中实时查到了"电线杆伪装树"的起源——来自 1996 年《电信法》，地方政府无法禁止电塔位置，于是要求伪装。成本溢价 $10 万，但仍比失去站点便宜。
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"We believe we have identified the largest actionable total addressable market in human history."
<div class="text-xs opacity-60 mt-1 not-italic">— SpaceX S-1 文件，关于 $28.5T TAM</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"It's an AI company with some rockets, which is a wild pivot at the eleventh hour."
<div class="text-xs opacity-60 mt-1 not-italic">— Peter Haig 在读到 SpaceX S-1 后的评论</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"These are the Erdos problems. People talk a lot about these as goals for AI to solve."
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Cosgrove 解释 Erdős 问题对 AI 的意义</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Never in my life have I felt that the window of what is possible is as large as it is today."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Tabarrok，谈 AI 带来的可能性和风险</div>
</div>

</div>

---

# 核心金句（二）

<div class="space-y-2 text-sm mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"The world's getting warmer, our infrastructure's getting older, and that's literally a recipe for disaster."
<div class="text-xs opacity-60 mt-1 not-italic">— Bill Clerico 总结 Convective Capital 的投资逻辑</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It really is because we are truly at the intersection of the humanities and technology."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Norström 解释 Spotify Discomorphism 现象</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"No matter what the technology is, you have to still be a really good storyteller."
<div class="text-xs opacity-60 mt-1 not-italic">— Christina Lee Storm 谈 AI 电影的核心</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Silicon Valley is a land of strip malls."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Tabarrok 对美国住房政策的评价</div>
</div>

</div>

---

---
layout: end
---

# 谢谢观看

<div class="mt-6 text-lg opacity-80">
"A tsunami which creates wealth. And, yes, it could be very dramatic. But it's going to be very dramatic like Santa Claus coming and leaving us goods under the Christmas tree."
</div>

<div class="mt-4 text-sm opacity-50">
— Alex Tabarrok, on the AI economic transformation
</div>

<div class="mt-8 text-xs opacity-40">
TBPN · May 21, 2026 · 2h 30m
</div>
