---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'China Export Controls, Jeremy Giffon Breaks Silence, Alex Hormozi in the Ultradome | Josh Zoffer, John McElhone, Deena Shakir, Hussein Fazal, John Nay'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# China Export Controls &<br>Alex Hormozi 深度对谈

<div class="mt-6 text-sm opacity-70">
TBPN Ultradome · 2026年7月 · 2小时20分
</div>

<div class="mt-4 text-xs opacity-50">
Josh Zoffer · John McElhone · Deena Shakir · Hussein Fazal · John Nay · Jeremy Giffon
</div>

---

# 为什么这一期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**中国 AI 出口管制**
美国限制前沿模型出口后，北京也开始讨论对等限制——这对全球开源生态意味着什么？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Jeremy Giffon 打破沉默**
白领工作"本质上都是虚构的"——这个 provocative 的论断背后的逻辑

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Alex Hormozi 媒体帝国**
从衣帽间录视频到 Guinness 世界纪录，他的内容策略与商业哲学

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**数据中心：新时代的工业革命**
Josh Zoffer 在 FT 发文警告：不要重蹈稀土供应链的覆辙

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Legal AI 进入"全栈"时代**
Norm AI 融资 1.2 亿美元，以 AI agent 驱动律师事务所

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**储蓄超级 App 崛起**
Super.com 估值 12 亿美元，为"日常美国人"打造的省钱平台

</div>

</div>

---

# 中国 AI 出口管制：北京开始"抄作业"

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

**发生了什么？**

据路透社报道，中国监管机构已与阿里巴巴、字节跳动、智谱 AI、DeepSeek 等头部企业举行会议，讨论限制中国最先进 AI 模型的海外访问。

这与美国限制 Anthropic Fable 5、Mythos 5 以及 OpenAI 前沿模型的做法形成了镜像。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**AI 2027 的预言正在应验**

2025 年 4 月发布的 AI 2027 场景预测："2026 年中，China wakes up——中共开始感受到 AGI 的压力，出口管制和政府支持不足让中国在西方面前处于劣势。"

</div>

</div>

<div class="mt-4 text-xs opacity-60">
来源：路透社报道；AI 2027 场景（2025年4月3日发布）
</div>

---

# 三种可能的管制力度

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**轻度：备案审查**
要求企业在发布模型前向监管机构提交文件，或接受国家安全审查

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**中度：审批制**
任何先进模型在海外发布前需获得政府批准

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**重度：禁止开源**
直接禁止公开发布前沿开源权重模型——但这可能违背中国此前通过 DeepSeek 等开源模型获得的战略优势

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold mb-1">关键博弈</div>
中国开源模型（智谱 GLM 5.2、阿里通义千问系列、字节豆包）在美国市场越来越有竞争力。如果限制出口，美国用户将失去便宜的模型供给——但这也可能刺激 Meta 等公司重返开源生态。
</div>

---

# 出口管制光谱：从轻到重

---
layout: two-cols
---

# AI 出口管制工具对比

<div class="text-sm leading-relaxed space-y-3">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>轻度：</strong>备案 + 安全审查
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>中度：</strong>政府审批制
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>重度：</strong>全面禁止开源
</div>

<div class="mt-4 text-xs opacity-60">
核心难题：已发布到 HuggingFace 的开源模型无法"召回"。真正的管制只能针对未来的前沿模型。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./export-control-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Jeremy Giffon：白领工作"本质上都是虚构的"

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed italic">
"我显然认为每一份白领工作都是完全虚假的、被编造出来的——它们并不直接关系到住所、食物、药品和其他必需品。大多数工作与这些东西无关，即使有关，也是非常间接的。"
</div>

<div class="mt-3 text-xs opacity-60">— Jeremy Giffon, Invest Like the Best</div>

<div class="mt-4 text-sm leading-relaxed">

**他的逻辑链条：**

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
资本天然具有通胀性——如果不做点什么，钱就会贬值
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
于是有了"配置者"这个角色：你把钱交给他们，他们帮你投资
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这有用吗？有用。但它是"真实的"工作吗？Giffon 认为不是——它是被经济系统创造出来的需求
</div>

</div>
</div>

---

# Giffon：资本配置的"不真实"本质

---
layout: two-cols
---

# 资本配置：被发明的职业

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Giffon 的论点：</strong>人类的欲望和消费需求是无限的，因此经济系统会不断"发明"新的工作。我们不会真正用光工作。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>短期 vs 长期：</strong>短期可能动荡、有大量失业；但长期来看，新的需求会创造新的职业。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>核心洞察：</strong>我们已经解决了所有"真实"的问题。剩下的是不断被创造出来的欲望。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fake-jobs-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Giffon：西海岸正在吞噬东海岸

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**东海岸（华尔街）模式**

- 源于杠杆收购文化
- 核心手段：债务 + 金融工程
- 目标：让企业更"赚钱"
- 企业本身的质量是**次要的**
- Giffon 称之为"extractive"（榨取型）

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**西海岸（硅谷）模式**

- 创始人文化和"创始行为"极其重要
- 核心手段：产品创新 + 规模化
- 目标：创造真正有价值的东西
- 企业质量是**首要的**
- 最大的金融公司越来越多来自西海岸范式

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
"在当前范式下，最大和最重要的金融公司源于杠杆收购文化——这是一种榨取型文化。而西海岸的创始人模式正在改变这个格局。"
<div class="text-xs opacity-60 mt-1">— Jeremy Giffon</div>
</div>

---

# Alex Hormozi：从衣帽间到 Guinness 世界纪录

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

**起点：衣帽间里的 YouTube**

2020 年，Hormozi 和 TBPN 主持人几乎同时起步做 YouTube。当时他在衣帽间里用摄像头录制，边旅行边做内容——"我当时没有真正的工作，满脑子都是想法，就想把它们全部倒出来。"

五年后，他的 YouTube 频道积累了数百万订阅者。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**Guinness 世界纪录**

2025 年 8 月 16 日，《$100M Money Models》在发售 24 小时内卖出 **290 万册**，创下非虚构类图书最快销售纪录，首发总收入超过 **1 亿美元**。

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">
<div class="font-bold">为什么他能赢？</div>
"他比我认真得多。他有完整的团队，每天发布数小时的视频、短视频、Instagram……他真正理解了如何成为一个媒体公司，而我只是把 YouTube 当作博客。"<br>
<span class="text-xs opacity-60">— TBPN 主持人对比两人的 YouTube 之路</span>
</div>

---

# Hormozi：写书的哲学——"思想表面积"

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed italic">
"我坚信'思想表面积'。如果你坐下来，说'我要写一本关于这个的书'，然后你有两周时间——你在两周内不会有足够多样化的经历来让'油漆晾干'。我需要处在完全不同的状态，和别人聊天，然后想'我没想到这一点'，然后把它加进书里。"
</div>

<div class="text-xs opacity-60 mt-1">— Alex Hormozi</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>第一步：思维倾倒</strong><br>
随时在手机上记笔记，积累想法
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>第二步：实战验证</strong><br>
用真实经历"战斗测试"框架，确认它反复有效
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>第三步：极度窄化</strong><br>
最难的是定义书的"问题"——《Leads》写了 19 个版本才成型
</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
"我只写我觉得自己有独特见解的东西。重写一本已经存在的书没有意义——<strong>我想写的东西只有因为我写了才存在。</strong>"
</div>

---

# Hormozi：音量消灭运气

<div class="mt-6 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

## 内容策略

"**Volume negates luck.** 这句话就挂在我们总部的墙上。"

Hormozi 的早期 YouTube 策略：
- 每周 **3 个长视频**
- 每个季度花 **一整天** 录制 100 条短视频
- 极早进入 Shorts 赛道（"有人私信我说，我来帮你剪，你只要授权就好"）

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

## 马拉松式工作

"我更喜欢马拉松日。早上 6 点开始，一直录到每一滴汁水都榨干为止。然后过一周再来一次。"

这与 TBPN 的每日三小时直播形成了有趣的对比——虽然 TBPN 承认他们的节目"结构松散得多"。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>2026-2027 年最让他兴奋的格式：</strong>直播互动（Live Interactive）。"在 AI 时代，什么是不能伪造的？是 stakes——观众想要真实的赌注和戏剧性。就像国际象棋从未像现在这样流行，尽管人类早就下不过电脑了。"
</div>

---

# 媒体战略：杠铃策略

---
layout: two-cols
---

# 内容杠铃：Mona Lisa vs 批量生产

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>左端（Mona Lisa）：</strong>极致制作、品牌权威、新分发渠道<br>
<span class="text-xs opacity-60">→ 顶层漏斗：获得新眼球和新受众群体</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>右端（批量）：</strong>价值密度优先、每分钟都要有效输出<br>
<span class="text-xs opacity-60">→ 中底层漏斗：更接近购买行为</span>
</div>

<div class="mt-4 text-xs opacity-60">
Hormozi 认为两者服务不同目标，不必二选一。像 Dave Ramsey 同时在 600 个广播电台播出——"没人关注的地方，就是机会。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./media-barbell.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 直播互动：AI 时代最稀缺的是"真实赌注"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"在 AI 的世界里，什么东西不能被伪造？是 stakes——是那种'这是真的'的感觉。如果 MrBeast 的视频里没有真的 500 万美元或真的兰博基尼，赌注感就消失了。"
</div>
<div class="text-xs opacity-60 mt-1">— Alex Hormozi</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Scale or Fail 模式</strong><br>
创业者来到现场，Hormozi 花一小时给出"如果今天我买下这个公司会怎么做的蓝图"，然后他们在 90 天内执行并竞争。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>国际象棋的启示</strong><br>
人类早就赢不了计算机了，但国际象棋的流行度反而创历史新高。"我们想要戏剧性，想要真实的较量。这一点不会改变。"
</div>

</div>

</div>

---

# Hormozi 谈传统媒体："Dave Ramsey 的秘密"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"Dave Ramsey 已经闷声发了三四十年大财。他有 600 个广播电台同步播出。每个人都说电台已死——他就在那个没人看的地方闷声发大财。"
</div>

<div class="grid grid-cols-2 gap-4">

<div>

**传统媒体的隐蔽优势**
- 不同于线上平台的"人人可入场"，传统媒体提供了**差异化的注意力通道**
- 电视/广播的受众与社媒并不完全重叠
- "如果我能获得全新的、我完全没有接触到的受众，那就有价值"
- 像《Selling Sunset》这样的真人秀，明星的社媒运营其实很弱——但他们依然获得了巨大的关注度

</div>

<div>

**Hormozi 的态度**
- 已签约 CAA（Creative Artists Agency）
- 对电视节目机会持开放态度——"这是我不拥有的分发渠道"
- 不追求"制作精良"之名，而追求实际触达
- "我对注意力是一个机会均等主义者"

</div>

</div>
</div>

---

# 小企业主用 AI 最常见的两个错误

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 错误一：用 AI 更快地做蠢事

"They're using AI to do dumb things really fast."

本来就不赚钱的小企业主，现在不仅不赚钱，还多了一大笔 token 费用。问题不是工具，而是根本不知道什么值得做。

<div class="mt-2 text-xs opacity-60">"我见过太多人把时间花在 AI 会议总结上——我这辈子从没因为'需要一份会议记录'而无法达成商业目标。"</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 错误二：重建已有的软件

"哦，我不需要付 Calendly 每月 9 美元——我可以花 200 个小时重新开发一个。"

结果：一个不稳定的山寨版本，天天出 bug。真正聪明的做法是用 AI 增强现有业务流程，而不是重复造轮子。

</div>

</div>

</div>

---

# AI 的正确用法：从"组织架构"到"工作流"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">
<strong>核心方法：</strong>把每个业务功能从"基于组织架构图"转变为"基于工作流"。问自己：这个人涉及 6 个工作流，AI 能不能接管其中 3 个？然后把人的精力集中到 AI 做不了的事情上。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>策略一：隐形 AI</strong><br>
经营一个服务型公司，客户以为全是由人完成的，实际用 AI 大幅降低成本。<br>
<span class="text-xs opacity-60">→ 人价收费，技术成本，荒谬的利润率</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>策略二：部门级提效</strong><br>
逐个部门分析，AI 能做什么，人只需要做什么。<br>
<span class="text-xs opacity-60">→ 人均产出 3-5 倍增长</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>Hormozi 自己的实践：</strong>在 Acquisition.com，他们建立了覆盖所有销售文案、客户评价、视频素材的"数据层"——AI 实时将数据拼装成广告和动态着陆页。"我们不是 AI 公司，但我们在大量使用 AI。"
</div>

</div>

---

# SMB AI 采用矩阵：做什么 vs 不做什么

---
layout: two-cols
---

# 小企业 AI 决策框架

<div class="text-sm leading-relaxed space-y-2">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>✓ 用 AI 接管重复工作流</strong><br>
<span class="text-xs">减少人工参与度，提高人均产出</span>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>✓ 构建专属数据层</strong><br>
<span class="text-xs">无数据则无独特 AI——这是大多数小企业缺失的</span>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>✗ 为"做 AI"而开始新业务</strong><br>
<span class="text-xs">放弃自己的优势领域，去和最大的科技公司竞争</span>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>✗ 重新开发已有的 SaaS</strong><br>
<span class="text-xs">$9/月的 Calendly 用 200 小时重写——不值得</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./smb-ai-matrix.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 定价哲学："陈述事实，说出全部真相"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"最简单的媒体策略：对于任何变化，说出全部真相——不是半个真相。我以前没有东西卖，现在有了。如果你不想买？资本主义的好处就是自愿交换——你继续享受免费内容就好。"
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>$1 → $100 → $1000 → $10000</strong><br>
每上一个台阶，就有一批愿意支付更高价格的客户。Hormozi 称之为"fractal customer"——客户是分形的，每层都有双倍收入潜力。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>不要"替客户的钱包做决定"</strong><br>
很多企业主觉得定高价"不好意思"。但如果你有一个亿万富翁粉丝——他需要一个合适价位的东西来消费。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>"特殊雪花价格"</strong><br>
"If you're a special snowflake, we have special snowflake prices." 如果有人觉得太贵——没关系，我们有更便宜的选项。
</div>

</div>

</div>

---

# 职业战略：选择正确的"船"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"你所取得的成就 = 活动量 × 活动的杠杆率。你必须根据你的目标选择正确的机会。有些人只想赚一百万，有些人想赚几十亿——你只需要做出选择，而且无论选哪个都会很难。"
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Naval 的洞见</strong><br>
建立一个成功的餐厅很难，建立一个十亿美元的独角兽也很难——两者都可能是 80 小时工作周。<br>
<strong>所以不如选大的。</strong>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>Schwarzman（黑石创始人）的忠告</strong><br>
"Level 10 的人才只会被 Level 10 的机会吸引。机会越差，你就越难吸引到好的人——最终你什么都要自己做。"
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>但也尊重那些选择"无聊"生意的人：</strong>熊猫快餐的创始人 Peggy 和 Andrew Cherng——靠卖橙子鸡成了亿万富翁。"对那种 grit，我只有无限的尊重。"
</div>

</div>

---

# 先戴好自己的氧气面罩

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"我的视角是，我想先把氧气面罩戴在自己脸上。我能在职业生涯中做出越来越大、越来越大胆的决策，因为它们都是免费挥棒——如果我输了，我的生活不会有任何改变。"
</div>

<div class="grid grid-cols-2 gap-4">

<div>

**Keith Cunningham 的框架：**
- 你的上行空间是什么？
- 你的下行空间是什么？
- 你能承受下行空间吗？

**如果不能承受下行风险，就不要挥棒。**

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>实际应用：</strong>
Hormozi 在冒险之前，先快速建立了一个 nest egg。"这让我可以做真正大的赌注——比如 School，现在有 3000 万用户、十亿美元以上的 GMV。"

<strong>如果你有孩子、有房贷：</strong>你不仅在拿自己的未来冒险，也在拿家人的未来冒险。知道你在拿什么下注。
</div>

</div>
</div>

---

# "每个生意都很烂"——来自老兵的智慧

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"我的 CFO Suzanne Shifflett——她曾帮四家公司从 100 万美元做到 1 亿美元以上，参与过 50 亿美元的退出，在买卖双方做过 20 多次交易——她对我说：'Alex，你知道吗？每个生意都很烂。全是烂事。每个生意都是烂事。'她说这话时充满了真诚。"
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>人类的本质：</strong>永远不满。已婚的人想单身，有孩子的怀念没孩子的时候，员工想当老板，老板想准时下班。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>两种"烂法"：</strong>技术创始人卖了公司后去买加油站——追求"现金流生活方式"，然后发现凌晨两点加油站被抢劫也得自己处理。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>核心洞察：</strong>每个人都想要某种 trade-off 的好处而不要代价。"We want the benefits of a trade-off without the negatives of the trade-off."
</div>

</div>

</div>

---

# "模仿上升期，不要模仿平台期"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"你需要模仿的是上升期（the rise），不是平台期（the plateau）。而困难的是，平台期才是更显眼的——你能看到成功人士有桑拿房、做冥想、坐私人飞机，但你不知道他在穷的时候只是在醒来后就打开笔记本电脑开始工作。"
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>创业者的常见陷阱：</strong>
"Rich people fly private, so I should fly private." 这是一种本末倒置——富人飞私人飞机是他们成功的结果，不是原因。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Hormozi 的晨间哲学：</strong>
醒来 → 摄入咖啡因 → 关闭所有干扰 → 开始工作。<br>
从睁眼到开始工作之间的时间越短越好。如果你有一个三小时的晨间仪式，你需要一个"极其出色的理由"来解释为什么这会提高你的产出。
</div>

</div>

</div>

---

# Hormozi 商业哲学：三大支柱

---
layout: two-cols
---

# Hormozi 的方法论核心

<div class="text-sm leading-relaxed space-y-3">

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>音量消灭运气</strong><br>
<span class="text-xs">Volume negates luck — 足够的重复消除随机性</span>
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>全部真相</strong><br>
<span class="text-xs">State the facts and tell the truth — 简单是最强策略</span>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>氧气面罩优先</strong><br>
<span class="text-xs">先保证自己不输，然后才能免费挥棒</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hormozi-pillars.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Josh Zoffer：数据中心是这个时代的"工业大考"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"我们正在重蹈上世纪八九十年代的覆辙——当时我们把系统重要性产业大规模离岸外包到中国。现在我们面临稀土、永磁体、关键矿物的供应依赖。数据中心如果重走这条路，后果会更严重。"
</div>

<div class="text-xs opacity-60 mt-1">— Josh Zoffer, CIV, Financial Times</div>

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>数据中心的特殊性</strong><br>
不仅仅是芯片——还包括变压器、开关设备、钢材等基础工业品。<strong>这些东西必须在某个地方制造。</strong>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>不可错过的窗口</strong><br>
今天数据中心开发商有最深的口袋和最急迫的需求——这为美国本土供应链提供了前所未有的需求拉动。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>中国的反制</strong><br>
据报道，中国政府正计划设立 2950 亿美元的基金用于数据中心建设——他们完全理解这场游戏。
</div>

</div>

</div>

---

# 稀土 vs 数据中心：历史会重演吗？

---
layout: two-cols
---

# 供应链依赖的教训

<div class="text-sm leading-relaxed space-y-3">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>稀土的历史轨迹：</strong>1980-90 年代离岸外包 → 中国通过产业政策吸引产能 → 美国失去关键供应链控制权
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>数据中心的风险：</strong>如果今天因为监管阻力而在本土停建 → 供应链自然流向其他地区 → 五年后追悔莫及
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Zoffer 的建议：</strong>不是无限制建设，而是平衡——让超大规模开发商承担部分能源成本，同时保持美国供应链竞争力
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain-parallel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Zoffer：如何向美国选民解释数据中心？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4">
"数据中心是 AI 的物理化身。大多数在 Instagram 上评论'数据中心坏'的人，从来没真正见过数据中心。他们不喜欢 AI，是因为担心失去工作、看着公司变得更大。"
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>策略一：能源成本下降</strong><br>
让数据中心开发商自建清洁发电并最终接入电网——建了数据中心，你的电费反而可能降低
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>策略二：就业叙事</strong><br>
AI 不会导致"就业末日"，而是像其他重大技术转型一样改变劳动力构成。用政策工具确保平稳过渡。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>策略三：工厂就业</strong><br>
数据中心的钢铁、变压器等供应链品需要工人制造——这些可以是美国的就业岗位。<strong>供应链的深度和复杂度本身就代表了产业能力。</strong>
</div>

</div>

</div>

---

# Deena Shakir（Lux Capital）：海湾地区的 AI 机遇

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic mb-4">
"我们正在从模型的护城河转向实际部署的护城河——谁能在地面与合作伙伴一起部署。海湾地区的独特机会在于，这里不仅有大量资本流入，更是真实的客户市场，有数千亿美元的部署规模。"
</div>
<div class="text-xs opacity-60 mt-1">— Deena Shakir, Partner at Lux Capital</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>1001（One Thousand and One）</strong><br>
Lux Capital 在 GCC 地区的首个投资。<br>
创始人 Bilal 出生于约旦，在耶鲁读计算机科学，曾在 Scale AI 工作。<br>
种子轮开始追踪，A 轮领投 3000 万美元。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>Diaspora 效应</strong><br>
吸引在海湾出生、在美国受训和工作的顶尖人才回流——"他在只有想法的时候就吸引到了最优秀的人，这是我们加倍下注的最早信号之一。"
</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
<strong>关键信号：</strong>海湾地区不再只是资金来源地。FII（"沙漠达沃斯"）、Milken 中东峰会等已成为全球投资者的重要站点。Lux 在成立 25 年后才首次投资总部设在海湾的公司，这本身说明了这个市场的早期阶段和巨大潜力。
</div>

</div>

---

# 海湾 AI 生态：资本 + 客户 + 人才

---
layout: two-cols
---

# GCC：不止是 LP 的钱袋

<div class="text-sm leading-relaxed space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从 LP 到客户：</strong>阿联酋、沙特、卡塔尔不仅有主权基金投资——它们正在成为 AI 部署的最大客户市场之一
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>主权 AI 公司：</strong>1001 定位为 GCC 地区的"本土主权 AI 公司"，专为该地区打造，理解当地需求和监管
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>全球定价一致：</strong>"对于顶级人才，全球市场定价是一致的。Bilal 这样的创始人不存在'海湾折扣'。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gcc-ai-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Hussein Fazal：Super.com——"日常美国人"的省钱超级 App

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**公司快照**
- 成立十年，刚完成 **6500 万美元 D 轮**融资
- 由 **TPG 领投**，估值 **12 亿美元**
- 定位："储蓄超级 App"——不是 WeChat，不付政府账单，不和好友聊天
- 核心：任何你需要花钱的地方，打开 App 就能省钱

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**产品矩阵**
- 酒店（起家业务，省 20-30%）
- 加油、保险、药品
- 金融产品：安全信用卡（build credit）
- 无息现金预支（替代发薪日贷款）

**目标用户**：家庭年收入 10 万美元以下的"日常美国人"

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>AI 驱动的工程速度：</strong>"过去一个 bug 从截图到修复部署要好几周。现在我把截图发到 Slack，一个 AI agent 会捡起来、修复、部署到生产环境——几分钟内完成。"
</div>

</div>

---

# John Nay：Norm AI——让 AI Agent 开律师事务所

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div>

**公司快照**
- 成立不到三年，刚完成 **1.2 亿美元融资**，估值 **12 亿美元**
- Coatue 参投
- 总部位于纽约世贸中心

**核心模式**：Norm Law LLP——一家真正的律师事务所，但建立在 AI agent 之上，由 agent 完成工作的第一轮自动化处理。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**关键转折点**
最初 Norm AI 向企业内部法务团队销售软件。后来他们发现了一个更大的机会：大型金融机构每年在**外部法律顾问**上花费数十亿美元（Kirkland & Ellis、Simpson Thacher 等）。

于是 Norm 决定"做全部"——从提供工具转变为提供全栈法律服务。

</div>

</div>

<div class="mt-3 grid grid-cols-3 gap-3 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>垂直整合</strong><br>AI 工程师和律师并排坐在一起——"世界上只有我们能做到这种紧密的反馈循环"
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>法律工程学</strong><br>将法律知识和法律推理转化为 AI agent，然后持续测试、验证、部署
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>客户先行</strong><br>Blackstone、New York Life 等大型金融机构是首批客户
</div>

</div>

</div>

---

# Legal AI 的全栈整合模式

---
layout: two-cols
---

# Norm AI：从工具到全栈

<div class="text-sm leading-relaxed space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>传统 SaaS 模式：</strong>卖软件给律所 → 律所使用工具提高效率 → 反馈循环慢
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Norm 的路径：</strong>AI agent 做第一轮工作 → 前 AM Law 20 合伙人审核 → 直接向客户提供法律意见
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>护城河：</strong>垂直整合——AI 构建 + 实际部署 + 运营数据 → 世界上唯一的超紧密反馈循环
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./legal-ai-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 新闻快讯：SK Hynix、银行支付、Meta Muse

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### SK Hynix 纳斯达克 IPO
韩国存储芯片巨头本周在纳斯达克上市，计划募资约 **280 亿美元**——可能成为亚洲公司在美国最大的上市之一。

- 2025 年营收 630 亿美元（增 47%）
- 利润翻倍至 280 亿美元
- 市值约 1.1 万亿美元
- 前瞻市盈率仅 7 倍（存储芯片的周期性折价）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 大银行围攻借记卡通道
JPMorgan、Bank of America、Wells Fargo 等正在探讨收购 Fiserv 的借记卡网络（包括 Star 和 Accel）。

- Post-Durbin Amendment 银行想重新掌握支付经济
- Capital One 收购 Discover 是前兆
- 输家可能是商户、Visa 和 Mastercard
- 大趋势：支付正在**垂直重新整合**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Meta Muse Image 发布
Meta 首个来自 MSL 的图像生成模型。

- 自精炼（Self-refinement）：模型在思维链中自主改进输出
- 多参考合成：多张图片融合成连贯图像
- 多轮编辑：迭代修改而不丢失一致性
- Alex Wang 披露的三项底层创新

</div>

</div>
</div>

---

# 新闻快讯：微型电动车、AI 涡轮机、Amazon 清理

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Fiat Topolino 微型电动车
- 售价 **$14,000**，重约 **1000 磅**
- 双座微型车，续航仅 **46 英里**
- 默认最高时速 19 mph，可加装合法上路套件
- "每次出门都像掷骰子——Fiat Dice"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### American Turbines
John McElhone 的创业公司：制造可放进皮卡车的 **1 兆瓦** 微型天然气涡轮机。

- "美国是使用天然气最好的地方"
- 目标：大规模制造而非手工打造
- 类比 Henry Ford 的 Model T 工厂革命
- McElhone 是 Thiel Fellow，此前创办 CropSafe

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Amazon 山寨品牌过滤器
Chrome 扩展程序 **Knockoff**：自动调暗或隐藏 Amazon 上的"伪品牌"（如 WNEPTHMOE、Gondolf 等随机字母组合）。

- 可手动信任/屏蔽特定品牌
- 社区协作标记，系统越用越聪明
- "去山寨化购物"——终于有人做了

</div>

</div>
</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">本期最具洞察力的几句：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"每一份白领工作都是完全虚假的、被编造出来的——它们并不直接关系到住所、食物、药品和其他必需品。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jeremy Giffon 论工作的本质</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Volume negates luck. 这句话就挂在我们总部的墙上。"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Hormozi 的内容策略核心</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"你需要模仿的是上升期，不是平台期。困难的是，平台期才是更显眼的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Hormozi 对创业者的警告</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"每个生意都很烂。全是烂事。只是不同的烂法。"
<div class="text-xs opacity-60 mt-1 not-italic">— Suzanne Shifflett (Hormozi 的 CFO)，一位经历过 20+ 次买卖方交易的老兵</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"数据中心不仅仅是芯片堆——变压器、开关设备、钢材这些东西必须在某个地方被制造。"
<div class="text-xs opacity-60 mt-1 not-italic">— Josh Zoffer 在 Financial Times 的警告</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"在 AI 的世界里，什么东西不能被伪造？是 stakes——观众想要真实的赌注和戏剧性。"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Hormozi 论直播互动内容的未来</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">续：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我想写的东西只有因为我写了才存在。"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Hormozi 论写书的动力</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Dave Ramsey 已经闷声发了三四十年大财。他有 600 个广播电台同步播出。每个人都说电台已死——他就在那个没人看的地方闷声发大财。"
<div class="text-xs opacity-60 mt-1 not-italic">— Hormozi 论被忽视的分发渠道</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"最简单的媒体策略：对于任何变化，说出全部真相——不是半个真相。"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Hormozi 论品牌转型沟通</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"他们用 AI 更快地做蠢事——本来不赚钱的小企业主，现在不仅不赚钱，还多了一大笔 token 费用。"
<div class="text-xs opacity-60 mt-1 not-italic">— Hormozi 论小企业 AI 采用的第一大错误</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我们正在从模型的护城河转向实际部署的护城河——谁能在地面与合作伙伴一起部署。"
<div class="text-xs opacity-60 mt-1 not-italic">— Deena Shakir (Lux Capital) 论 AI 投资新阶段</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我把截图发到 Slack，一个 AI agent 会捡起来、修复、部署到生产环境——几分钟内完成。"
<div class="text-xs opacity-60 mt-1 not-italic">— Hussein Fazal (Super.com) 论 AI 如何加速工程团队</div>
</div>

</div>



---

# 谢谢观看

<div class="mt-12 text-sm opacity-70">
TBPN Ultradome · 2026年7月7日
</div>

<div class="mt-4 text-xs opacity-50">
完整播客：share.transistor.fm/s/fc38ff83
</div>

<div class="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"我们想要戏剧性，想要真实的较量。这一点不会改变。"<br>
<span class="text-xs opacity-60 not-italic">— Alex Hormozi</span>
</div>
