---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Tae Kim Sounds Off, Big Companies Are Hiring Again, NVIDIA $50B Tenant | Tae Kim, Ben Zweig, Aakash Thumaty'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Tae Kim 深度解读：AI 算力超级周期、就业叙事反转与开源大辩论

<div class="mt-6 text-sm opacity-70">
TBPN · 2026年7月 <span class="mx-2">|</span> 嘉宾：Tae Kim, Ben Zweig, Aakash Thumaty <span class="mx-2">|</span> 1小时50分钟
</div>

<div class="mt-10 grid grid-cols-3 gap-3 text-xs text-left opacity-60">
<div class="p-2 rounded bg-blue-50 border border-blue-100">🧠 AI 就业叙事反转：大公司重新招人，杰文斯悖论正在上演</div>
<div class="p-2 rounded bg-green-50 border border-green-100">📈 算力超级周期：Lisa Su 三个月内将 TAM 从 1200 亿翻至 2200 亿</div>
<div class="p-2 rounded bg-orange-50 border border-orange-100">⚔️ 开源大辩论：NVIDIA 集结 18 万亿市值对抗 Anthropic 的监管提案</div>
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Tae Kim / First Adopter**
AI 芯片与半导体市场顶级分析师。他上次在 TBPN 出场正好踩中市场底部，被称为"Kim 效应"——**CPU 股翻倍、HBM 股涨了 100%**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Ben Zweig / Revelio Labs**
劳动力市场数据专家，为对冲基金和 HR 部门提供就业分析。揭示了 **AI 扩散的残酷现实**：CS 入学率暴跌 28%，求职/招聘比下降 38.6%。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Aakash Thumaty / Takeoff**
创立仅一年多，从 **$0 收入到近八位数年营收**，被 Brett Taylor 的 Sierra 收购。展示了自主 Agent 如何直接驱动企业收入增长。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**三条叙事线交汇**
1. AI 算力需求仍在加速
2. AI 对就业的冲击比预期更温和
3. 自治 Agent 正在企业级部署中实现商业突破

</div>

</div>

---

# AI 与就业：叙事正在反转

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### WSJ 最新报道：大公司开始重新招人

"The Wall Street Journal 报道，大型公司正在开始重新招人。"

科技、交通、国防等多个行业的公司表示，**他们需要更多员工来与 AI 系统协作**——而不是被 AI 取代。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 杰文斯悖论在起作用

当一项技术让某件事变得更高效时，需求往往大幅上升，以至于**对人力资源的总需求反而增加**。

过去一年，许多公司在宣布裁员时都把 AI 作为理由。但现在，Lattice CEO Sarah Franklin 说，**当初以为 AI Agent 能替代初级员工的公司，现在发现人类员工仍然必不可少**。

</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**作者概括：** 过去一年的"AI 裁员"叙事很大程度上是 CEO 的公关掩护——将经营不善和过度招聘归咎于 AI，而不是承认管理失误。

</div>

---

<div class="grid grid-cols-2 gap-4 mt-2 text-sm">

<div>

# 劳动力市场的矛盾信号

<div class="mt-3 space-y-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**积极信号**
- 美国周度失业救济申请降至**数十年最低水平**
- Robert Half CEO：AI 对就业的影响"比一些人担心的要温和"
- Cloudflare CEO Matthew Prince："不招新毕业生的策略是错的，应该把他们放进老团队帮助采用 AI"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**担忧信号**
- 风险投资人 Bryce Roberts 分享短信截图："我们现在确实招人很少，AI 在回填大部分角色"
- 求职/招聘比的下降：**自 2022 年底下降 38.6%**
- 自由职业者受到严重冲击

</div>

</div>

</div>

<div class="flex justify-center items-center h-full">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300">

### 核心矛盾

**AI 采用率最高的公司（招聘 AI 集成团队的企业）**

正在招聘最多的人，而不是裁员。

但整体就业市场流动性下降，求职信号被 AI 污染。

</div>

</div>

</div>

---

# 计算机科学入学率暴跌 28%

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 2022 年峰值
<div class="text-4xl font-bold text-blue-600 my-2">CS 热度顶</div>
<div class="text-xs opacity-70">计算机科学入学率历史最高</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 2026 现状
<div class="text-4xl font-bold text-red-600 my-2">-28%</div>
<div class="text-xs opacity-70">自 2022 年峰值下降</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 乐观解读
<div class="text-4xl font-bold text-green-600 my-2">自适应</div>
<div class="text-xs opacity-70">劳动力供给对技术变革反应灵活，这是好兆头</div>

</div>

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Ben Zweig 的警告：这可能是过度反应。** 他给出两个理由：

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1. 实际就业并未下降。** 采用 AI 最多的公司在工程和技术岗位并没有大规模裁员。没有数据支持"AI 取代工程师"的叙事。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2. Agentic 工具反而青睐数字原生代。** 几年前 AI 还是"老太太都能用的聊天工具"，现在复杂的自治代理系统更偏向有工程背景的人。**我们可能即将面临工程师短缺，就像曾经的放射科医生短缺一样。**

</div>

</div>

---

# 算力需求超级周期：为什么空头错了

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 三大算力需求引擎

1. **推理模型**：Kimi K2.5（2.8 万亿参数）需要 64 个 GPU 的超级集群才能良好运行。越强大的模型，推理算力需求越高——不是越低。

2. **Agentic AI**：从聊天转向自主代理，每个代理需要持续运行、处理多轮外部交互，算力消耗远超简单 API 调用。

3. **RSI（递归自我改进）**：OpenAI 和 Anthropic 的前沿研究员都在暗示 RSI 即将到来——AI 用更多算力自我改进的飞轮。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 关键数据点

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-white border border-green-100">

**SK Hynix IPO 披露**：客户的 HBM 内存需求是供应能力的 **5 到 6 倍**，未来五年将翻倍扩产。

</div>

<div class="p-2 rounded bg-white border border-green-100">

**Morgan Stanley 估算**：如果做推理业务，超大规模 GPU 云的**利润率在 60%-80%**。

</div>

<div class="p-2 rounded bg-white border border-green-100">

**Amazon CEO Andy Jassy 年度信**："我们不是在预感上下注 2000 亿美元。我们看到了需求。中长期会有大量自由现金流。"

</div>

<div class="p-2 rounded bg-white border border-green-100">

**Azure 40% 增长，Google Cloud 80% 增长，AWS 高双位数增长。**

</div>

</div>

</div>

</div>

---

# Lisa Su 的惊人表态：TAM 三个月翻倍

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

# Lisa Su 的惊人表态

<div class="mt-4 space-y-3 text-sm">

- AMD CEO Lisa Su 在 "Advancing AI" 活动上将 AI 芯片的总可寻址市场（TAM）预测从 **$120B** 大幅上调至 **$220B**，仅在三个月内。

- Tae Kim："Lisa Su 不轻易做这种事。CEO 不会在几个月内把 TAM 上调这种倍数，除非他们看到了**疯狂的 incoming demand**。"

- 这一举动暗示：AI 芯片市场的实际需求远超所有人此前预估。

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>意义：</strong> 当 AMD 这样的公司（通常在 NVIDIA 阴影下谨慎行事）如此激进地上调市场预测，意味着算力需求的增长不是线性的——它是指数级的。
</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lisa-su-tam.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# NVIDIA $500 亿租赁：标题党背后的真相

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 英国《金融时报》首页标题
<div class="text-lg font-bold text-red-600 my-2">NVIDIA signs $50B lease for data center that will use its chips</div>
<div class="text-xs opacity-70">听起来像"自己买自己的芯片"——最差劲的财务操作</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 实际事实
<div class="text-lg text-red-600 my-2 leading-relaxed">15 年租约承诺价值约 $20B。只有续租后才达 $50B/30年。</div>
<div class="text-xs opacity-70">年均：约 $1-2B —— 对 NVIDIA 只是四舍五入误差</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 背景
<div class="text-lg text-green-600 my-2 leading-relaxed">NVIDIA 年营收运行率 $320B，预计明年 $400-500B+。</div>
<div class="text-xs opacity-70">$1-2B 年化成本在整体业务中占比不到 0.5%</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Tae Kim 的总结：** "这是一个非故事。但这就是媒体如何用耸人听闻的标题制造恐慌——人们看到首页标题就开始抛售。Jim Cramer 甚至在开盘时说'把所有东西都卖了'。这就是 FUD 循环。"

</div>

---

# NVIDIA 的全栈协同设计壁垒

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

# NVIDIA 的全栈协同设计

<div class="mt-3 space-y-2 text-sm">

- **CUDA 护城河依然存在，但真正的壁垒是全栈协同设计**。NVIDIA 同时优化算法、编译、GPU、NVLink、HBM 内存、光学组件、供电和冷却——每一层都必须协同工作。

- **供应链锁定**：Tae Kim 指出，光通信初创公司抱怨 NVIDIA 已经锁定了所有光学组件的供应。同样的故事在 TSMC 晶圆和 HBM 内存上重演。

- **Jensen 的暗示**：尽管大家都在担心能源、电力、数据中心外壳等瓶颈，Jensen 上周在 Bloomberg 采访中说了一句被所有人忽略的话——**"我认为芯片行业有足够的供给每年将收入翻倍。"**

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 开源 AI 辩论：NVIDIA vs. Anthropic

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### NVIDIA 的立场：开源阵营

Jensen 牵头起草了一封公开信，呼吁不应对开源权重模型实施禁令。**约 18 万亿美元市值的公司已联署**——包括 Google、Microsoft、OpenAI、Meta、Amazon（稍晚加入）。

Tae Kim："NVIDIA 在 3-4 天内几乎把整个科技行业团结在了 Anthropic 的对立面。"
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Anthropic 的立场：谨慎监管

Dario Amodei 紧急回应，提出三条澄清和三项提案。他说："**Anthropic 从未主张全面禁止开源权重模型。**" 但担忧在于：

1. 美国必须击败威权政府赢得 AI 竞赛
2. 强大模型可能被滥用于网络攻击和生物攻击
3. 需要遏制工业级蒸馏行为

</div>

</div>

<div class="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
<div class="p-2 rounded bg-gray-50 border border-gray-200">❌ 未签署：<br/>Apple<br/>Anthropic</div>
<div class="p-2 rounded bg-green-50 border border-green-200">✅ 已签署：<br/>Google · Meta · OpenAI<br/>Microsoft · Amazon</div>
<div class="p-2 rounded bg-yellow-50 border border-yellow-200">🤔 为什么 Apple 不签？<br/>可能是："我们不参与<br/>这种疯狂的公开信"</div>
</div>

---

# Anthropic 的三项政策提案

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

# Anthropic 的三项提案

<div class="mt-3 space-y-2 text-sm">

**提案 ① 继续制裁芯片出口：** 不向中国出售高性能芯片或制造设备。即使不相信 AI 存在安全隐患，从地缘经济竞争角度看保持芯片技术领先也完全合理——中国芯片工艺本来就落后数年，维持差距对美国有利。

**提案 ② 打击工业级模型蒸馏：** 前沿模型公司有权维护知识产权。Anthropic 一直在对抗蒸馏攻击，但效果有限。Dario 建议引入"政策干预"来阻止这种行为。

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./anthropic-proposals.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 蒸馏治理：定义比执行更难

<div class="mt-4 space-y-3 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 核心难题：什么是"蒸馏"？

如果一个模型用 50% Opus 5 + 30% GPT-5.6 + 20% Mistral 的输出进行混合训练，再换了 RL 环境和微调数据——这算蒸馏吗？**我们没有一个二进制算法来判定"这是蒸馏的"。**

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现实案例：Thinking Machines 的 Inkling

这款模型使用了 Kimi K2.5 生成的合成数据来训练。这是蒸馏吗？**严格来说不是**——但它确实受益于中国的开源模型。这里有一个巨大的灰色地带。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 实际问题

- **实验室自己能做什么？** 大型实验室应该能识别哪些客户的行为看起来像在训练数据收集，而不是正常使用。
- **政府能做什么实验室做不到的？** 外交施压、禁止在美数据中心托管被蒸馏模型。但这需要国际合作——而外国蒸馏攻击往往来自境外。
- **小公司的困境：** 如果一个安全的小创业公司没有华盛顿办公室，他们的模型可能被审批队列拖延数年。

</div>

</div>

---

# RSI：递归自我改进比你想象的更近

<div class="mt-3 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Sam Altman 上周在 YC 活动中的话：

**"未来六个月 AI 的进步将远超过去两年。"**

他在另一个播客中承认：OpenAI **后悔之前缩减了算力采购**。他们犯了一个错误——没有把油门踩到底。现在所有迹象都表明事情正在加速起飞。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Tae Kim 的观察：

"Anthropic 在博客中提到了 RSI。我认为 **RSI 比人们想象的更近**。每次我在 X 上发关于 RSI 的推文，前沿 AI 研究员都会点赞。OpenAI 和 Anthropic 都像是在眨眼暗示：'它就要来了'。"

如果 RSI 在未来 3-9 个月内真正实现——即 AI 模型使用大量额外算力来自我研发和改进——这将消耗**天量**的计算资源。

</div>

</div>

---

# AI 演进三阶段与算力需求指数增长

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

# AI 演进的三大阶段

<div class="mt-3 space-y-2 text-sm">

**阶段 1：推理模型（2024 — 现在）**
DeepSeek 引爆了推理模型竞赛。但 Kimi K2.5 证明：更强的模型需要更多算力，不是更少。Kimi 第一天上线的服务器就被挤爆了。

**阶段 2：Agentic AI（现在）**
每家公司都必须用 AI 代理改造内部工作流。AT&T 部署了 100 个生成式 AI 模型，每月消耗万亿级 token——并且仍在双位数增长。

**阶段 3：RSI（即将到来）**
前沿实验室的共同判断：AI 用算力自我改进的飞轮将消耗难以想象的资源。

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-evolution-stages.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 从聊天到 Agentic：AI 正在从助手变成员工

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 两种 Agent 的区分（来自 Takeoff）

<div class="mt-3 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**人在回路中的 Agent**
Claude Code、Codex 这类工具——你来启动任务，你来评估结果。可能是几分钟、几小时甚至几天的任务。但**你做决定**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**全自治 Agent**
从买家的视角来看，这应该等同于**在倍增你的劳动力**。当我买 Takeoff，我感觉自己在买 10 万个能替代团队的 Agent。它们不是"帮你做事"，而是**替代工作流中的每个环节**。

</div>

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么 Agentic AI 消耗更多算力？

- 一个全自治 Agent 不是简单的 API 调用。它在**持续运行**，需要不断与外部世界交互（电话、短信、邮件、CRM）。

- 以贷款处理为例：一次贷款从接触到完成需要 **4-5 轮电话交互**、多次文书处理、第三方校验。Agent 需要像一个全职工一样保持心跳、处理所有边缘情况。

- 这解释了为什么 Agentic AI 不是"更高效所以用更少算力"——相反，**它能跑的事越多，就会有越多企业来用**。

</div>

</div>

---

# Aakash 的 Takeoff：从 $0 到被 Sierra 收购

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

# Takeoff 的创业故事

<div class="mt-3 space-y-2 text-sm">

**公司创始于一年多一点之前**，最初尝试做浏览器代理——但被市场反复打击。"我们被市场反复咀嚼、吃掉、吐出来，一次又一次。"

关键转折点：意识到浏览器代理的局限后，转向做**面向营收的全自治代理**。核心理念很简单：**如果你能直接帮客户赚钱，你就不用担心销售**。

**给客户最低质量的销售线索，证明代理能转化为收入。** 一旦证明效果，客户自然愿意付更多。

**年初时承诺收入为 $0。到被 Serra 收购时，已经接近八位数年营收。**

</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./takeoff-ramp.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 三种软件：为什么 Takeoff 能收三到八倍于客服 AI 的费用

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 💰 创收型软件
<div class="text-lg font-bold text-green-600 my-2">Revenue Driving</div>
<div class="text-xs opacity-70 leading-relaxed">$1 进去，>$1 出来<br/>Google Ads、Facebook Ads<br/>——我会一直花钱直到边际收益归零</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### ⚙️ 功能型软件
<div class="text-lg font-bold text-blue-600 my-2">Functional</div>
<div class="text-xs opacity-70 leading-relaxed">提高效率，降低运营成本<br/>CRM、ERP、办公工具<br/>——必要的但有价格天花板</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🔒 必须型软件
<div class="text-lg font-bold text-purple-600 my-2">Must Have</div>
<div class="text-xs opacity-70 leading-relaxed">安全、合规、基础设施<br/>没有它就无法运营<br/>——采购预算中的刚性支出</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Aakash 的核心发现：** 那些已经在 Sierra 或 Decagon 上花了 $100K-$1M 客服 AI 的客户，在 Takeoff 上花的钱是 **三到八倍**。因为客服 AI 是成本节约工具，而 Takeoff 是收入引擎。收入没有天花板的。

</div>

---

# Jensen 的远见：用资产负债表投资 AI 生态

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是"供应商融资"，而是"Jensen 又做了一笔好投资"

Tae Kim 提醒市场：看看 Jensen 历史上的投资记录——**CoreWeave、光学组件公司 Lumentum 和 Coherent**。Jensen 投资这些公司不是被迫的，而是因为他看到了巨大的需求海啸，这些公司需要资本来构建供应链。

**NVIDIA 不是在拯救劣质客户——它是在加速能帮它满足需求的整个生态。**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 市场误解的根源

- Wall Street Journal 报道 NVIDIA 为 OpenAI 提供背书、与 SoftBank 合作，上限可达 $250B
- 市场立刻恐慌抛售，"AI 数据中心 .com 化"
- 但 Tae Kim 说：**先看实际交易细节和数字再恐慌**
- 如果超大规模 GPU 云业务真的那么赚钱（Morgan Stanley 估算毛利率 60-80%），那 Jensen 提前布局就是卓越的资本配置——不是财务黑洞

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一年、两年、三年后回头看

**"NVIDIA 将持有所有这些公司的股份。"**

- 当一个行业的增长速度超过所有人预期时，提前锁定供应商和客户就是最聪明的资本配置
- Jensen 需要用资产负债表帮助光学组件公司扩大产能，因为没人能独自满足 AI 的需求海啸
- 这就像 Jensen 过去在 CoreWeave 上做的事情——当时也被质疑，**现在被证明是一笔天才般的投资**

<div class="mt-2 text-xs opacity-70">
Tae Kim 的判断：人们将为"NVIDIA 持有了这些伟大公司的股份"而感到惊讶。
</div>

</div>

</div>

---

# 把 Agent 当成最好的员工来设计

<div class="mt-4 space-y-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 核心哲学

Aakash 给 Takeoff 的每个候选人和员工都做同一个演讲：**"我们被赋予了特权——不是权利——坐在客户和他们的收入之间。"**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 客户必须把 Agent 公司视为他们最好的员工

- 你需要像客户的任何员工一样理解他们的业务——毛利率、转化率、从首次接触到收入产生的时间——**所有的一切**
- 当一个 10,000 人公司的 CEO 开始就自己的业务问题向你咨询，这就说明你做对了
- **当客户的 CEO 在你的 iMessage 前五名里占了三个位置——连你的家人和朋友都排不进前五**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 如果你想真正驱动业务结果，就必须拥有整个工作流

大多数 Agent 公司只做横向切片——解决流程中的一小块。但这意味着它必须向上下游解释自己要做什么。**如果你想驱动端到端的结果，就必须能能力覆盖整个链条。** 这意味着你必须像客户的员工一样理解业务，才能构建做到这一点的 Agent。

</div>

</div>

---

<div class="grid grid-cols-2 gap-4 mt-2">

<div>

# "推理 API 是商品"

<div class="mt-4 space-y-3 text-sm">

**Aakash 一句有争议的判断：**

> "推理 API 是商品。这是一个可以截取当 sound bite 的话。"

他的解释是：Anthropic 和 OpenAI 目前的数百亿美元营收看起来都像是推理 API 的收入——但**实际上这些都是建立在推理之上的产品和平台的价值**（Claude、Codex、ChatGPT）。

**未来的数十亿美元收入不会来自单纯的 API 调用，而是来自能跨多个服务、完成端到端任务的"总成"（Harness）——即 Agentic 系统。**

</div>

</div>

<div class="flex justify-center items-center h-full">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-300 text-sm">

### Takeoff 的做法

**领域特定语言（DSL）**
客户通过 Takeoff 的 DSL 来教育、指导和构建 Agent。这个语言设计的基础是"端到端处理"。

**Agent 必须能与外部世界交互**
不只是"去做某事"。而是：接 API 调用→打电话联系借款人→处理第三方文件→再次联系→推动完成。Agent 的"总成"超越了单纯的工具调用。

</div>

</div>

</div>

---

# Sierra + Takeoff = Horizon

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么是收购而不是竞争？

Aakash 承认：作为"一个头发疯狂的年轻人"，他不可能在客服 AI 领域与 Sierra 这样的巨头正面竞争——那已经有十几家公司在做了。**Takeoff 必须从一个不同的角度切入：卖一种只有早期采纳者才准备好购买的东西。**

但当 Brett Taylor 和 Aakash 第一次对话时，他们发现双方对世界的走向有**完全一致的愿景**——Takeoff 只是走得更远、更快。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 联合发布了 Horizon

收购后，Sierra 和 Takeoff 联合发布了名为 **Horizon** 的新产品。这不是现有产品的增量升级——**它被品牌化为一款全新产品，因为它代表了能力上的一次量级跃迁。**

Aakash 已经跟着 Brett Taylor 参加了几个销售会议："房间里的能量是魔幻的。人们开始想象他们可以为自己的业务做些什么。"

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Horizon 的意义

- 不只是"帮客户省几秒钟"
- 而是 **"CEO 级别的购买决策"**——Agent 出现在董事会的演示文稿里，因为年底的营收数字会出现双位数的增长
- 这是 AI 应用的转折点：**从成本中心到利润引擎**

<div class="mt-3 text-xs opacity-70">
"Aakash 已经跟着 Brett Taylor 参加了几个销售会议……房间里的人是魔法。"
</div>

</div>

</div>

---

# AI 扩散的现实：旧金山泡沫 vs. 广大企业

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 表面上的 AI 采用率

<div class="mt-3 space-y-2">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"AI 采用率"这个指标本身就有问题。**企业只要有人注册一个 ChatGPT Pro 账号就算"采用了 AI"——这和用 Codex 改造开发流程、部署 Agentic 工作流完全是两个层次。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Ara Karazian 引用：** 如果把每个公司的 AI 采用程度提升到最先进公司的水平，用量将**增长 100 倍**。企业间的采用差距是巨大的。

</div>

</div>

</div>

<div>

### 真正的扩散才刚刚开始

<div class="mt-3 space-y-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**仅 9% 的公司真正重视 AI。** Revelio Labs 的保守衡量标准：当一家公司开始招聘"AI 集成团队"（超过某个阈值），才算在认真对待 AI。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**IT 和知识管理总市场：每年约 $6 万亿。** OpenAI 和 Anthropic 合计约 $120B ARR。Tae Kim："为什么不能在接下来一两年内增长到 200、300、400B？它们在以指数速度增长。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**ROI vs. ROR（Return on Revenue）：** "每个人都在担心 ROI。但别忘了还有 ROR——如果你不用 AI，你的竞争对手会用 AI 来打败你。"

</div>

</div>

</div>

</div>

---

# 被 AI 最先取代的领域

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🎨 创意领域
自由职业者受到最严重冲击。摄影、视频 B-roll、库存图片、播客开场音乐、简单网站制作——所有这些"微任务"级的工作正在被 AI 接管。

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### ✍️ 文案写作
曾经需要去 Upwork 或 99designs 找人的一次性任务——现在直接用 AI 生成。一次品牌 logo 初稿、一个临时营销落地页——这些"外包给陌生人"的工作正在消失。

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 💻 前端工程
工程师们花在前端网站开发上的时间变少了，但他们做的 DevOps、架构和编排工作却变多了。**工程师的价值正在向上游转移。**

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**但整体就业数据显示：** AI 采用率最高的公司**雇佣最多的人**——因为当企业因为 AI 变得更高效时，他们会扩展到更多领域。这就是杰文斯悖论在企业层面的体现。

</div>

---

# 招聘市场的信号污染

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 求职/招聘比暴跌

自 2022 年底以来，美国整体的**求职/招聘比下降了 38.6%**。

Ben Zweig 解释这一现象：

- 🔄 **虚假招聘：** 企业为了显得"在增长"而挂出并不紧急的职位；有的是"万一有牛人来呢"的心态
- 🤖 **虚假求职：** AI 自动投递工具让每个岗位瞬间收到上千份申请——Indeed 甚至自己都在推这个功能
- 📉 **信号被污染：** 每份招聘的效用下降，雇主转向人脉网络招聘
- ⚠️ **监管不对称：** 几年前美国认定雇主用 AI 筛选候选人是非法的，但求职者用 AI 海投是合法的

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 最终结果

**低招聘、低离职的僵持环境。** 经济中各方的流动性都在下降。

**这是 AI 在"搜索和匹配"过程中的副作用**——不是 AI 取代了工作，而是 AI 让招聘和求职系统产生了更多噪音而非信号。

<div class="mt-3 p-2 rounded bg-white border border-red-200 text-xs">
Ben Zweig：这是我唯一真正紧张的数据。
</div>

</div>

</div>

---

# 市场情绪 vs. 基本面：为什么恐慌是错的

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 当前 FUD 驱动因素

- 🇮🇷 **伊朗战争**：每次冲突升级芯片股就暴跌，停火就反弹
- 📰 **媒体标题党**：Reuters 断章取义 Zuckerberg 的"Agentic AI 进展不及预期"→ 随后 Meta 被爆即将上调 CapEx
- 🇨🇳 **CMXT IPO 在 China**：市场担忧中国 AI 芯片自主
- 🏷️ **NVIDIA"供应商融资"叙事**：Wall Street Journal 报道 NVIDIA 为 AI 公司提供融资支持
- 🔍 **ASML 信息文章**：引发芯片设备需求担忧

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 基本面在说什么？

- 📈 **AMD CEO Lisa Su** TAM 预测三个月翻倍
- 📈 **Google Cloud** 80% 增长 | **Azure** 40% 增长
- 📈 **SK Hynix**：客户要的量是产能的 5-6 倍
- 📈 **AT&T**：部署 100 个 GenAI 模型，每月万亿级 token，双位数增长
- 📈 **OpenAI + Anthropic**：合计 ~$120B ARR，指数增长
- 📈 **Morgan Stanley**：推理云毛利率 60-80%

<div class="mt-2 p-2 rounded bg-white border border-green-200 text-xs">
<div class="font-bold">Tae Kim 的判断：</div>
"每个人都担心这又是 .com 泡沫……但如果超大规模 GPU 云业务本身就是极好的生意呢？"
</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这场对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Sentiment's very negative. We had this huge parabolic up move the last few months, and we're seeing this unwind now."
<div class="text-xs opacity-60 mt-1 not-italic">— Tae Kim，解释当前市场情绪</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"CEOs don't raise their TAMs by these multiples in a few months if they're not seeing insane demand coming in."
<div class="text-xs opacity-60 mt-1 not-italic">— Tae Kim，关于 Lisa Su 的 TAM 翻倍</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"OpenAI regretted pulling back on the compute purchases. They made a mistake by not putting the pedal to the metal."
<div class="text-xs opacity-60 mt-1 not-italic">— Tae Kim 引用 Sam Altman 在播客中的话</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"The inference API is a commodity. That's a sound bite. You can clip me."
<div class="text-xs opacity-60 mt-1 not-italic">— Aakash Thumaty，Takeoff 创始人</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"I would give this lecture that when we are referenced by our customers, they have to think of us as their best employee."
<div class="text-xs opacity-60 mt-1 not-italic">— Aakash Thumaty，关于 Agent 设计的核心理念</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Right strategy to stop hiring new grads. Wrong strategy: hire them and insert them into legacy teams to help them better adopt AI."
<div class="text-xs opacity-60 mt-1 not-italic">— Matthew Prince, Cloudflare CEO（主持人引用）</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于开源争议、AI 就业和投资逻辑：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Anthropic has never advocated for a ban on open weight models."
<div class="text-xs opacity-60 mt-1 not-italic">— Dario Amodei，Anthropic CEO，在回应 NVIDIA 公开信时澄清</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"The history of open source software has shown that giving everyone full access to powerful systems will be the best way to protect safety and security over time."
<div class="text-xs opacity-60 mt-1 not-italic">— Mark Zuckerberg，在 WSJ 专栏文章 "The AI Future Is For Everyone" 中写道</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"I think we have the chip industry has enough supply to double their revenue every year."
<div class="text-xs opacity-60 mt-1 not-italic">— Jensen Huang，在 Bloomberg 采访中的表态，被市场忽视</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Just because you have coding agents doesn't mean you're not hiring engineers."
<div class="text-xs opacity-60 mt-1 not-italic">— Sarah Franklin，Lattice CEO，关于 AI 对工程师就业的实际影响</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"The ROI is important. But you also need return on revenue — because if you don't use AI, your rival is going to use AI to beat you in the market."
<div class="text-xs opacity-60 mt-1 not-italic">— Tae Kim，解释为什么企业必须采用 AI</div>
</div>

</div>

---
layout: end
transition: slide-left
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">

**AI 的未来不是替代人类，而是创造更多需要人类的场景。**

</div>

<div class="mt-6 text-sm opacity-50">
TBPN · 2026年7月28日<br/>
采访 Tae Kim、Ben Zweig、Aakash Thumaty
</div>
