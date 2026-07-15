---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'IBM Nukes, Demis Govt Plan, Paramount WBD Deep Dive | Dylan Byers, Noah Schochet, Saam Motamedi, Ioannis Antonoglou, Jack Dent, Evan Burns & Jamie Seltzer, Tyler Page'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# IBM 暴跌 · AI 监管 · 好莱坞并购

<div class="mt-4 text-sm opacity-70">
TBPN · 2026 年 7 月 14 日
</div>

<div class="mt-8 text-base opacity-60 max-w-lg mx-auto">
IBM 创 115 年来最大单日跌幅 · Demis Hassabis 呼吁建立美国 AI 标准机构 · 纽约暂停 AI 数据中心建设 · Paramount-WBD 并购深度拆解 · 六家 AI 创业公司本轮融资动态
</div>

---

# 为什么这一期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**IBM 115 年最大跌幅**
AI 投资正在从传统 IT 基础设施向外迁移。IBM 的困境不是一个公司的故事——它是整个企业 IT 支出结构性转移的信号。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Demis 的监管提案**
DeepMind CEO 提出最详细的 AI 监管框架：30 天发布前测试、覆盖开源模型、国家标准机构。开源社区会如何回应？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**好莱坞的底特律时刻**
Paramount-WBD 合并面临加州 AG 的阻击。但 Dylan Byers 指出：在 Netflix、YouTube、TikTok 面前谈"垄断"，定义已经过时。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**纽约数据中心禁令**
Hochul 州长签署行政令暂停 AI 数据中心一年。是环境焦虑还是产业自杀？德州和弗吉尼亚正在捡走这些项目。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI 创业融资热潮**
Greylock 18 亿美元基金、TerraFirma 1.15 亿、Reflection 10 亿算力合同、Chai Discovery 4 亿——"地图重新变空白"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**数据中心：新铁路时代**
Cipher Digital 从比特币矿场转型 AI 数据中心，德州西部正在变成下一个北弗吉尼亚。资本市场的创新模式堪比 19 世纪铁路建设。

</div>

</div>

---

# IBM 暴跌 25%：发生了什么

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 事件本身

- IBM 股价单日下跌约 **25%**，创下公司 **115 年历史** 上最大单日跌幅
- 此前三年表现强劲：股价累计上涨 77%（不含股息），Red Hat 收购开始见效，z17 大型机周期也超出预期
- 但公司刚刚发出警告：客户正在将资本支出 **从大型机转向 AI 基础设施建设**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 核心原因

IBM 在 "token path"（用 Brad Gerstner 和 Gavin Baker 的话说）上处境不利：

AI 支出目前流向 **GPU、内存、网络、超大规模云计算和前沿模型推理**——IBM 在这些领域都不是主要赢家。

<div class="mt-3 text-sm opacity-70">
IBM 仍在服务客户，但正在丢失客户技术预算中的份额。
</div>

</div>

</div>

---

# IBM 百年简史：从打孔卡到 AI 时代

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**创业期（1911-1964）**
- 最初制造打孔卡制表机、时钟——"企业永远会为自动化记录付钱"
- 这个基础洞察一直成立

**大型机时代（1964-1981）**
- System/360 是兼容设备家族，可以逐件升级而不必重做整个工作流
- 银行、保险、航空、制造、政府全部使用 IBM 作为中央系统
- 靠高可靠性、长客户关系和昂贵的切换成本建立护城河

</div>

<div>

**PC 时代的转折（1981-1993）**
- IBM PC 1981 年发布，运行 Windows 和 Intel 芯片
- 当时 IBM 营收 300 亿美元，Intel 不到 10 亿，微软仅 1700 万美元销售额
- 市场最终碎片化——微软和 Intel 变成了比 IBM 大十倍的公司

**Gerstner 的整合策略（1993-至今）**
- Lou Gerstner 拒绝拆分："我们不需要制造每一块技术，我们需要让它们一起工作"
- 结果：IBM 全球服务、大型外包合同、庞大的咨询组织
- 2019 年以 340 亿美元收购 Red Hat；2021 年剥离传统基础设施外包

</div>

</div>

---

# IBM 业务解剖：三块拼图

<div class="text-sm opacity-80 leading-relaxed">

IBM 今天的业务可以分为三个板块。软件（Red Hat OpenShift 等）毛利率最高但只占 44% 营收；咨询占 31% 但毛利率不到 30%；基础设施（大型机）虽然接近 60% 毛利率，却正在被 AI 支出挤压。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Software (44% / 80% 毛利)</strong><br/>
Red Hat OpenShift 是 AI 时代的关键资产——企业级 Kubernetes 编排平台。但竞争对手在 AI 全栈上布局更快。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Consulting (31% / &lt;30% 毛利)</strong><br/>
服务业务的固有限制：低利润、高人头、慢增长。AI 咨询需求增长，但价格竞争激烈。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Infrastructure (23% / ~60% 毛利)</strong><br/>
大型机客户正在将资本支出从 IBM 转向 GPU、网络和超大规模云——这是本轮暴跌的直接触发器。
</div>

</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./ibm-segments.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="mt-2 p-2 bg-red-50 border-l-4 border-red-500 rounded text-xs">
<strong>核心矛盾：</strong>三块业务都不能直接吃到当前 AI 资本支出浪潮的最大增量。GPU、网络和超大规模云计算的钱，流向了别处。
</div>

---

# IBM 的教训：技术代际更替不等人

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 历史规律

IBM 经历了三次技术代际变迁：

1. **机械制表 → 大型机**：IBM 是赢家
2. **大型机 → PC/客户端-服务器**：IBM 开启了市场但被 Intel 和 Microsoft 拿走价值
3. **PC/互联网 → 云计算**：IBM 通过 Red Hat 和咨询服务勉强跟上
4. **云计算 → AI 原生**：IBM 再次面临"开启了范式但没有抓住价值"的风险

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 更大的叙事

IBM 的故事不是一个孤立事件。它是整个企业 IT 支出结构性转移的缩影：

- 客户的 AI 建设支出正在从传统 IT 预算中 **挤出** 资金
- 即使 Red Hat OpenShift 在 AI 时代有用武之地，但竞争对手在上中下游全面布局 AI 能力
- 115 年历史的公司也在面对创新者的窘境——不是因为管理不善，而是因为 **市场本身在移动**

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
IBM 的股价在 ChatGPT 发布以来翻了一倍——这说明市场曾认可其 AI 叙事。但昨天单日暴跌 25% 是市场的重新定价：叙事 ≠ 财务现实。
</div>

---

# Token Path：AI 资本支出流向哪里

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 钱在往哪流

"Token Path"（用 Brad Gerstner 和 Gavin Baker 的术语）描述了当前 AI 资本支出正在涌入的领域：

- **GPU 和 AI 芯片**：NVIDIA 及其竞争对手
- **高带宽内存（HBM）**：SK Hynix、Samsung、Micron
- **网络基础设施**：交换机、光模块、InfiniBand
- **超大规模云计算**：AWS、Azure、GCP 的 AI 训练/推理实例
- **前沿模型推理**：API 调用费用流向模型提供商

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### IBM 缺席的原因

IBM 在这些领域都没有显著市场份额：

- 没有 GPU 业务
- 没有 AI 专用网络产品
- 云计算规模远小于三大超大规模厂商
- 没有前沿 AI 模型
- Red Hat OpenShift 可以编排 AI 工作负载，但这是基础设施管理层——不是资金的主要流向

<div class="mt-3 text-sm opacity-70">
这不是 IBM 做错了什么——而是整个市场的重心已经转移。就像 IBM PC 开启了市场但价值被 Intel 和 Microsoft 拿走一样。
</div>

</div>

</div>

---

# Demis Hassabis：呼吁建立美国前沿 AI 标准机构

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-base">
"我们已经在网络安全方面看到了前沿模型带来的挑战……核风险和生物风险可能很快出现。AI 的快速进步需要一种动态、适应性强且严格的测试新方法。"
<div class="text-xs opacity-60 mt-1 not-italic">— Demis Hassabis, Google DeepMind CEO, 诺贝尔奖得主</div>
</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div>

### 核心提案

- 创建 **美国前沿 AI 标准机构**（类似现有 AISI 但更强大）
- 联邦监督、AI 公司出资
- 定义并定期更新"前沿模型"的基准标准
- 前沿实验室需在 **发布前 30 天** 提交模型测试
- 测试范围：网络、生物、核、欺骗、自主性、护栏绕过

</div>

<div>

### 具体要求（续）

- 要求强网络安全、人员审查、模型卡、水印
- 使用国家实验室和独立第三方审计
- 开发 **保密的独立测试**，防止实验室针对基准训练
- 发布后发现的严重漏洞需修复
- **适用于所有在美部署的前沿模型**，包括外国和开源模型

</div>

</div>

</div>

---

# AI 监管的核心矛盾：开源 vs 闭源

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**开源的风险**
- 中国开源模型（Kimi K2、GLM）不在美国监管范围内——审查期内可能超越
- 模型公开后可在数天内被蒸馏复制
- 对 Hugging Face/GitHub 发 DMCA？控制 Neo Cloud？可行性低

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**闭源的优势**
- 监管历史上有利于大公司——小药企被收购后才敢走 FDA
- 前沿实验室有 DC 游说团队和合规预算
- 开源项目没有"监管预算"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>TBPN 观察：</strong>Demis 提案比之前的泛泛呼吁更进一步。但"如何执行"仍是核心难题。如果不能在开源和闭源之间建立公平竞争环境，监管可能加速美国在开源 AI 领域的落后。
</div>

</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./regulation-dilemma.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 纽约暂停 AI 数据中心建设

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 行政令内容

- 纽约州长 Kathy Hochul 签署行政令，对新 AI 数据中心实施 **一年暂停**
- 适用于 **50 兆瓦及以上** 的新数据中心
- 暂停期间开发监管框架，进行环境影响评估
- 评估范围：能源需求、水使用、水质、空气质量、电网影响

</div>

<div>

### 各方反应

- **科技行业**：限制数据中心建设将损失社区就业，削弱美国在全球 AI 竞赛中的地位
- **AGC 纽约州**（总承包商协会）：在快速发展的行业中暂停一年不只是延迟项目——是**永久性地**把它们送到弗吉尼亚、德州、佐治亚
- **Maine 先例**：今年早些时候 Maine 的类似禁令被民主党州长否决

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>Ken Griffin 的警告：</strong>"数据中心迟早会建起来。如果不建在美国，就意味着数千亿美元的收入流向其他国家。"虽然短期内项目会先流向其他州，但如果纽约的模式被复制，最终受益的可能是中国。
</div>

---

# 各州数据中心竞赛：零和博弈

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div>

### 竞争格局

- **弗吉尼亚北部**：传统数据中心枢纽，但已接近饱和
- **德州西部**：新兴热土——Cipher Digital 单家就有 4.2GW 的开发组合
- **佐治亚、俄亥俄**：正在积极争取从纽约流出的项目
- **纽约**：最大的活跃数据中心仅 205MW——相比之下，一个超大规模项目轻松超过 500MW

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 更大的背景

美国历史上犯过两次类似的错误：
1. **核能**：过度监管导致产业停滞
2. **制造业**：外包到了中国

数据中心禁令可能成为第三次。正如 John Fetterman 参议员所言：在这种情境下，"中国赢了"。

<div class="mt-2 text-xs opacity-70">
不过，Zuckerberg 用"曼哈顿大小"来可视化 Hyperion 数据中心，可能也在大众心中留下了负面联想——虽然实际选址从未打算靠近城市。
</div>

</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>《华尔街日报》的探索：</strong>更漂亮的数据中心能减少社区阻力吗？Gensler 建筑事务所正在设计外观更像科技园区或美术馆而非"无窗监狱"的数据中心。
</div>

---

# Paramount-WBD 并购：David Ellison 的关键一战

<div class="mt-4 text-sm leading-relaxed">

### 交易概况

- **1110 亿美元** 的交易，将 Warner Brothers Discovery 并入 Paramount
- David Ellison 已经逐一克服了各种障碍——包括特朗普政府的审批

### 最后的障碍：民主党州检察长

- **加州 AG Rob Bonta** 带领民主党 AG 们提起诉讼，试图阻止交易
- Bonta 在好莱坞标志前举行发布会——戏剧性十足
- 理由集中在传统的 **影院发行、有线电视发行** 等定义上

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-base">
"从表面上看就很荒谬。我们生活在 2026 年的现实世界里。认为一个合并后的 Paramount-WBD——合并 CBS、CNN、HBO Max、Paramount Plus——会成为某种垄断巨头……这不是我们生活的世界。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Byers, Puck 创始合伙人</div>
</div>

</div>

---

# 反垄断之辩：在 Netflix 和 TikTok 面前谈垄断

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### Bonta 的逻辑

- 好莱坞从六大片厂变成五家，再变成四家→有问题
- 承诺保留两个制片厂、每年发行 30 部电影、维持 45 天影院窗口期
- 但这些"承诺"无法被监管——Byers 指出："**我无法监管承诺**"

</div>

<div>

### Byers 的反驳

- 市场的竞争定义已经完全不同：Netflix、YouTube、TikTok、Apple、Amazon
- 消费者不关心 45 天影院窗口期——"当我们想到 AI 平台正在到来，连 Netflix 和 YouTube 都显得过时"
- 合并后的实体需要规模来与科技巨头竞争——这是防御性合并而非进攻性垄断

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>政治维度：</strong>Ellison 并非右翼 MAGA 支持者——他曾向 Biden 捐款。他陪 Trump 去 UFC、参加国情咨文、举办晚宴，只是因为 Trump 在任。如果是 Harris 或 Biden 执政，他也会做同样的事——只是地点会从 UFC 换到美网或温布尔登。而在这个平行世界里，提起诉讼的可能是共和党 AG。
</div>

---

# 好莱坞的底特律时刻：三方夹击

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-base">
"好莱坞在衰退——我认为没有人能否认这一点。坦率地说，有与几十年前的底特律相提并论的说法。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Byers</div>
</div>

<div class="space-y-2 mt-3">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>传统流媒体威胁：</strong>六大变四大，流媒体替代影院。45 天窗口期已无人关心。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>社交视频威胁：</strong>TikTok、YouTube Shorts 抢占注意力。VibeShorts 排名超过 Gemini 和 Anthropic。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>AI 生成威胁：</strong>NetShort、StoryReel——不是来自好莱坞也不是硅谷。中国视频模型可能训练在好莱坞 IP 上。
</div>

</div>

<div class="mt-2 text-xs opacity-80">
<strong>核心逻辑：</strong>"仅与屏幕上的眼球有关"——这就是为什么用"影院发行市场份额"来定义垄断已经毫无意义。
</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./hollywood-threats.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# "离开加州"：谈判桌上的终极威慑

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 言论还是真实威胁？

- Byers 认为"离开加州"的威胁需要通过 **博弈论** 的视角来看——一切都是为了赢得舆论战
- 很多人认为这是虚张声势——"Paramount-WBD 不可能离开好莱坞"
- 但也有先例：**Oracle** 从 Redwood City 搬到 Austin 再搬到 Tennessee，**Tesla** 离开加州，**Hewlett Packard**，**Disney** 在 COVID 期间将大量人员迁往佛罗里达

</div>

<div>

### Ellison 的长期视角

- Ellison 年轻，有帝国建设的野心——他不是为了 3 年后转手卖掉
- 他对好莱坞的地理位置没有怀旧情结
- 可以在 Austin 或 Nashville 设立总部，同时在加州保留制片厂
- "编剧室、制片人、演员——他们不会感受到任何区别"
- 只有一个人会感受到：**Rob Bonta**，他将失去 Ellison 宣称的 300 亿美元投资

</div>

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>讽刺之处：</strong>Bonta 试图为好莱坞而战，但可能正在疏远好莱坞目前最有实力的玩家之一。赢了一场战斗，输掉整场战争。
</div>

---

# Sun Valley：媒体巨头们的"夏令营"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 交易在哪里诞生

Allen & Company 在 Sun Valley 的年度会议被称为"亿万富翁夏令营"——这里是媒体、科技和娱乐巨头们唯一全部聚在一起的地方。

- Byers 说：交易确实在这里发生——通常是先前对话的**结晶**，而非起点
- 去年：Apple 在这里拿下了 F1 版权；Ellison 和 Springer 都在这里争取了 Barry Weiss
- "这不是那种'哦，我刚好在 Sun Valley 遇到这个人，所以我要买下华盛顿邮报'的情况"

</div>

<div>

### 记者的视角

"我去那里是为了和人们做非正式会谈。我报道的就是这些高管——无论是在媒体、科技还是娱乐领域。我在产业园区里的咖啡馆和他们做 off-the-record 的谈话。"

- Bezos 有最大的安保团队
- David Zaslav 是唯一会主动走到麦克风前接受采访的人——"像飞蛾扑火一样"
- 整个安保系统非常低调，"你会惊讶于这些习惯了安保细节的高管在这里是多么自在"

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Byers 的经典总结：</strong>"如果有什么方式能够传达那个世界的氛围——我不知道还有什么比颤抖的白杨树叶低语和偶尔从停机坪起飞的湾流喷气机声音更好的方式了。"
</div>

---

# 内容民主化：AI 正在重新定义"好莱坞"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### YouTube 创作者的夏季大片

- Markiplier 的《Iron Lung》
- 《Obsession》
- 《Backrooms》
- 这些创作者在默默无闻中耕耘多年，突然在票房上取得惊人成绩

### AI 短片 App 的崛起

- **VibeShorts**、**NetShort**、**StoryReel**——三款 AI 短剧 App 进入美区 App Store 前 25
- 它们不是来自好莱坞，也不是来自硅谷
- VibeShorts 排名超过 Gemini 和 Anthropic

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Byers 的判断

"技术在每一个行业都实现了民主化。确实不再有任何理由认为这些事情必须在好莱坞发生。你不能把在好莱坞大道上的影院里放电影的人，与制作 AI 生成短片的人，看作是不同行业。"

**核心洞察：** 问题只是**眼睛在屏幕上的时间**——这是 Ellison 理解而 Bonta 不理解的东西。A24 这样的顶级内容公司已经在思考如何融入 AI。这些 YouTube 创作者和 AI 短剧 App 不是一时的风潮——它们是对可能性空间的彻底重新定义。

</div>

</div>

---

# TerraFirma：用 SpaceX 的火箭思维造房子

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-base">
"我们在 Boca Chica 建造 Starship 火箭——像摩天大楼那么大的火箭，一个月能造一个。但修一条路或建一座工厂却要花好几年。所以我们辞职创业，来改变这一切。"
<div class="text-xs opacity-60 mt-1 not-italic">— Noah Schochet, TerraFirma 联合创始人兼 CEO</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 从零到一
- 第一年只有 4 个人
- 用 **午餐盒 Tupperware 容器** + Raspberry Pi + Arduino 造出第一批机器人
- 房东给了一个拆除项目——"又不是造火箭"
- 亲自操作 Tupperware 大脑的机器人推倒了建筑，拿到第一张支票

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 全栈策略
- 改造 Caterpillar、John Deere、Komatsu 的现成设备
- 其余全部自研——从 SpaceX 学到的制造工程软件用于建筑业
- 远程操控中心：**20 个工位操控 80 台机器**
- 就像玩 Starcraft 或帝国时代——给每台机器下达任务，它自己运行

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 融资
- 总融资 **1.15 亿美元**
- A 轮 1 亿美元，Kleiner Perkins 领投
- 跟投：Bain Capital、Banner VC、Saga Ventures、Trust Ventures、Magnetar
- "美国工业家们"

</div>

</div>

</div>

---

# 75% 自治：建筑机器人的经济学

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>两条曲线的交点</strong><br/>
自治成本指数增长（90%→95%→100%），自动化价值递减（1:1→1:2 翻倍，1:4→1:5 仅降 5%）。曲线在约 <strong>75% 自治（1人:3-4台机器）</strong> 处交叉。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>为什么不是 100%？</strong><br/>
建筑业的边缘案例太多。即使在火星上，也应该是"一小队宇航员指挥大量机器人"——而非完全无人。改变材料设计让机器人适配：管道连接方式、混凝土配方、焊接方法。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>审批不是瓶颈</strong><br/>
目前建筑业每周 9-5、利用率约 25%。可以先做到 168 小时/周、100% 利用率——效率提升 4 倍，再谈审批改革。
</div>

</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./construction-autonomy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Greylock 18 亿美元基金："地图再次变为空白"

<div class="mt-4">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-base">
"关于新基金，我们整个品牌的核心信息是——地图再次变为空白。因为我们认为 AI 正在重置整个版图。"
<div class="text-xs opacity-60 mt-1 not-italic">— Saam Motamedi, Greylock 合伙人</div>
</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div>

### Greylock 的投资布局

- **基础模型层**：Anthropic、OpenAI 的投资者
- **基础设施层**：BaseTen（推理，2019 年投资，远在生成式 AI 成为热词之前）、BrainTrust（评估）
- **应用层**：Cresta（客服 AI，ARR 超 1 亿美元）、Resolve（自动 SRE，Coinbase 使用）、Seven AI（安全 Agent）

</div>

<div>

### 投资策略的演变

- 第一支票金额大幅提升：**从 25 万美元到 3600 万美元**（Palo Alto Networks 的创始人 Nir Zuk 创办的新公司 SciLake 的首轮支票）
- 基金规模变大不是因为要写更多支票——是因为一些公司从创立之初就需要更大的资本弹药
- "早期的 AI 投资可以很轻，但天花板决定是否需要 VC"

</div>

</div>

</div>

---

# AI 投资的悖论：效率提升，烧钱加速

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 表面上的矛盾

- AI 让你能用更少的资本做更多事——一个人一个周末可以做出以前需要 10 人团队的产品
- 但 AI 公司的融资速度比历史上任何时候都快：A 轮、B 轮、C 轮之间的间隔更短，金额更大（经常在数亿美元级别）
- **为什么？**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Motamedi 的解释

"我们正在进入如此庞大和全新的品类，成为第一名的代价太过巨大，你必须尽一切可能。"

- 市场天花板变化了：不是在用软件替代 IT 预算，而是在用 AI 替代 **人力预算**
- 仅 AT&T 一家每年就在客服中心上花 10 亿美元——仅这一个品类就有空间容纳多家十亿美元 ARR 的公司
- 效率提升意味着：你可以用同样的钱做更多事，而明智的策略是**加速花钱**来抢占新地图

</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Saam 的关键洞察：</strong>"过去三年里，我们的被投公司的产品速度更快、收入增长更快。他们在花钱——但从每块钱中获得更多产出。事实上，他们花的钱比过去十年任何时候都多。"这不是低效，这是在更肥沃的土地上耕种。
</div>

---

# 本期创业公司的融资全景

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### TerraFirma
<div class="text-2xl font-bold text-blue-600 my-1">$1.15 亿</div>
<div class="text-xs opacity-70">A 轮 / Kleiner Perkins 领投</div>
<div class="text-xs mt-2">建筑机器人</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Greylock 18
<div class="text-2xl font-bold text-orange-600 my-1">$15 亿</div>
<div class="text-xs opacity-70">第 18 期基金</div>
<div class="text-xs mt-2">早期 AI 投资</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Reflection AI
<div class="text-2xl font-bold text-green-600 my-1">$10 亿</div>
<div class="text-xs opacity-70">算力合同 / Nebius</div>
<div class="text-xs mt-2">前沿开源模型</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### Chai Discovery
<div class="text-2xl font-bold text-purple-600 my-1">$4 亿</div>
<div class="text-xs opacity-70">估值 $38 亿</div>
<div class="text-xs mt-2">AI 药物发现</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### State Affairs
<div class="text-2xl font-bold text-red-600 my-1">$7000 万</div>
<div class="text-xs opacity-70">Coatue + Founders Fund</div>
<div class="text-xs mt-2">政策情报平台</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### Cipher Digital
<div class="text-2xl font-bold text-yellow-600 my-1">$20 亿</div>
<div class="text-xs opacity-70">高收益债 / ~6%</div>
<div class="text-xs mt-2">AI 数据中心开发</div>

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>共同主题：</strong>"地图重新变空白"之后，这些公司在各自品类的资本密集度远超上一代软件公司——但面对的市场规模（TAM）也从"替代 IT 软件预算"变成了"替代人力预算"和"建设全新的物理基础设施"。
</div>

---

# Reflection AI：保卫开源前沿

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 公司背景

- **Ioannis Antonoglou**：DeepMind 创始工程师之一，参与 DQN（第一个深度强化学习 Agent）、AlphaGo、AlphaZero、MuZero、Gemini 的 RLHF 负责人
- 与 Misha 共同创立 Reflection——构建**前沿开源模型**
- 使命："确保开放智能保持开放、对所有人可及"
- 最近估值 **80 亿美元**

</div>

<div>

### 10 亿美元算力合同

- 与 **Nebius** 签署 10 亿美元算力合同
- Antonoglou 说："构建前沿开源模型需要两样东西——顶尖人才和算力。我们很幸运地找到了行业中许多最优秀的人，现在也有了算力。"
- 目标：首先追上中国开源前沿，然后缩小闭源和开源之间的差距

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>关于 Demis 监管提案的回应：</strong>"我们需要确保美国市场上有一个前沿开源模型。这是全国各地研究机构构建解决方案的基石，是开发者和早期创业公司用来推动创新的工具。我们需要确保前沿开放智能在美国和西方世界有生存空间。"
</div>

---

# 中美开源模型竞赛：规则与野路子

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 中国实验室的优势

- 对 IP 的尊重程度可能较低——使用数据的限制更少
- 有指控称中国实验室对西方模型进行**工业级蒸馏**
- 可能通过第三地获取受限的算力
- 更少的合规开销——"作为美国公司，我们当然完全合规"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 西方实验室的优势

- **人才密度**：前沿闭源实验室（Google、Anthropic、OpenAI）在美国——许多人"见过前沿"
- 这些人才正选择加入 Reflection 等开源公司
- **合规本身就是护城河**：闭源前沿实验室从未靠作弊领先——合规和技术能力可以共存
- 最新的算力和大规模的算力合同

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Antonoglou 的立场：</strong>"我们无法作弊的事实，并不意味着我们无法构建最强大的开源模型。恰恰相反——闭源实验室也从未作弊，它们就是前沿。我们有知识、有方法、现在也有了算力。我们会先追上中国开源前沿，然后缩小闭源与开源之间的差距。"
</div>

---

# Chai Discovery：用 AI 设计药物分子

<div class="mt-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-base">
"我们正在构建分子版的计算机辅助设计套件——就像 Photoshop 或 SolidWorks，只不过不是设计汽车，而是设计能够进入人体并治愈疾病的分子。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jack Dent, Chai Discovery 联合创始人兼总裁</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 全栈自研
- 从 PyTorch 甚至内核层面开始训练自有模型
- 不是拿 LLM 微调——架构根本不同
- 模型"以 3D 方式思考"——在三维空间中放置原子来构建分子

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 独特的数据
- 不是自然语言数据——是蛋白质测序、结构数据集
- 科学家用高精度显微镜逐原子观察自然结构
- 大量内部数据生成
- 科学家用户的反馈闭环持续推动模型前沿

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 融资
- **4 亿美元**融资
- 估值 **38 亿美元**
- Index、Kleiner Perkins、Sequoia、Dimension 联合投资
- "很少能在一轮中集齐这种级别的投资人"

</div>

</div>

</div>

---

# 从 0.1% 到 16%：2025 年 AI 制药的卢比孔河

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>惊人的进步速度</strong><br/>
一年半前，AI 药物发现成功率约 <strong>0.1%</strong>。2025 年，成功率从 0.1% 提升到 <strong>16%</strong>——160 倍的飞跃。6-7 月，Chai 发表 CHI2 论文："24 孔板中的零样本抗体设计"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>"你把这个解决了？"</strong><br/>
一位制药科学家指着结果说："天哪，你把这个解决了。你是故意选的吗？"——Chai 团队没有故意选。"我花了五年时间研究那个靶点，试图找到结合物。"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>2026：规模化应用之年</strong><br/>
Eli Lilly、Novartis、Pfizer 已将 AI 技术纳入核心发现管线。制药 R&D 年支出 50-150 亿美元——比半导体研发还要大。
</div>

</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./drug-discovery-progress.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# State Affairs：政策情报的知识图谱

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 问题定义

- 政策和监管市场影响着几乎所有公司的业务——但大多数公司只是**被动应对**
- 如果有一个"政策版的 Bloomberg"——专注于每天在联邦、各州和城市的政策变化？
- 从 SNAP 福利到 AI 数据中心建设到公共安全追踪——这些政策和法规的变化影响大多数企业，甚至超过金融市场

</div>

<div>

### 数据挑战

- 每项法案从提出到通过，有数千个数据点沿途变化：措辞、投票、委员会、发起人
- **50 个州有 50 种不同的格式和系统**
- 只有两个州有 API
- 俄亥俄州：法案修正案有时根本不会出现在政府网站上——必须亲自去办公室拿
- 北卡罗来纳州：听证会录音只能去国会图书馆花 1.25 美元刻录到 CD-ROM 上

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>团队与融资：</strong>187 名员工，一半编辑一半技术。编辑记者在各州实地采集情报——"在房间里是差异化的关键"。最近完成 7000 万美元融资，Coatue 和 Founders Fund 领投。客户包括 Mastercard、McDonald's、Walmart 等 Fortune 100 企业。
</div>

---

# 州政府系统的数字化前现代状态

<div class="mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-base">
"不管联邦政府网站有多不成熟，州政府网站都难得多得多。在北卡罗来纳，如果你错过了一场参议院委员会听证会，唯一的录音方式就是去国会图书馆，付一块两毛五，让人把它烧录到 CD-ROM 上，然后你才能获得副本。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jamie Seltzer, State Affairs 联合创始人</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么传统方法行不通

- Fortune 100 公司以前的方案是雇佣说客或订阅老式数据平台
- 这些平台的信息**比实时慢得多**——等一份 PDF 报告时，事情已经过去两周
- 一位上市公司 CEO 的故事：他们的商业模式在一个 Top 15 的州被立法禁止，法案到了州长桌上他们才知道——如果他们一年前就参与进来，就能提前应对

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 时代的解决方案

- 通过 AI 映射所有数据集之间的关系——一项政策在一个州的进展如何影响其他州
- 150 多个独特数据点每日更新，持续重新计算政策的"动量"
- 虽然不完全是预测——但模型可以评估一项法案被其他州采纳的可能性
- 目标：从被动应对转向**主动参与民主进程**

</div>

</div>

</div>

---

# Cipher Digital：从比特币到 AI 数据中心

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="text-sm leading-relaxed">

<div class="space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>业务蜕变：</strong>一年前还是比特币矿商，12 个月内完成全面转型。在三处 West Texas 场地建设 <strong>700MW</strong> AI 数据中心，总开发组合 <strong>4.2GW</strong>——接近整个北弗吉尼亚规模。仅约 100 名员工。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>商业模式：</strong>本质上是在长期租约下建设全交钥匙 AI 数据中心的房地产业务。从比特币挖矿继承的优势：极低的远程电力成本。找场地→早期股权投资→找到租户→签长期租约→最大化债务融资。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>关键数据：</strong>一个 300MW AWS 场地，三四年前花 700 万美元购买——如今价值数亿美元。土地几乎无关紧要——核心价值在电力互联。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>建设深度：</strong>一切就绪直到机架层面——冷却、电力、水、网络。不下到 GPU。设计必须支持未来密度从 120kW 翻倍到 1MW 机架。
</div>

</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 德州西部：下一个北弗吉尼亚？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

### 从异端到主流

"一年半前，我们说超大规模云厂商会来 West Texas，整个数据中心行业都说'永远不会有超大规模云厂商在那里签租约'。就在一年前这还是主流观点。"

但现在——**所有人都在涌入**。Cipher 一家公司的开发组合已经接近北弗吉尼亚的总规模。

</div>

<div>

### 终端价值的反向押注

Tyler Page 的长期判断：

"很多人认为 West Texas 只是过渡阶段——等 2035 年租约到期时，这些地方会变成恐龙遗迹。我们完全相反。我认为十年二十年后，West Texas 的数据中心终端价值会更高——因为 West Texas 会变成什么样。"

基础设施一旦建成，就会吸引更多基础设施——北弗吉尼亚就是这样发展起来的。

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>关于社区关系的实用智慧：</strong>Cipher 在德州每个县的场地都是当地最大的纳税人——每年向德州公立学校系统缴纳数千万美元。此外还翻修当地医院、购买新的消防车、重建游乐场和游泳池。Page 的观点很简单："这是一个有空调、装满了电脑的大仓库。它不应该比任何其他工业建筑更让人担忧。"
</div>

---

# 数据中心的"铁路时刻"：资本市场的创新

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-base">
"现代资本市场某种意义上是因为铁路才被创造出来的——世界上根本没有足够的银行贷款来建设铁路。所以购买项目的股权股份这个想法，本质上是铁路时代的发明。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Page, Cipher Digital CEO</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 融资管道
- 早期股权投资：用于变电站等最长交付周期的基础设施（300MW 约 3000 万美元）
- 找到租户、签下长期租约后：**债务融资最大化**
- 已在高收益市场募集约 20 亿美元，利率约 6%

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 建设深度
- 一切就绪直到机架层面：冷却、电力、水、网络
- 不下到 GPU——"那部分业务没那么有意思"
- 设计必须支持未来密度翻倍（120kW→1MW 机架）
- "最好的风险调整后回报——也是过去一两年最好的绝对回报"

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 供需动态
- 需求仍然极高——"如果你在未来几年里能提供电力，我看不到任何需求放缓的迹象"
- 超大规模云厂商正在大规模发行债务
- 数据中心建设是"有史以来最赚钱的房地产开发之一"

</div>

</div>

</div>

---

# 本期三条主线

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 旧秩序的瓦解
IBM 115 年最大单日跌幅。好莱坞面临底特律时刻。纽约暂停数据中心。这些不是孤立事件——它们说明了 **AI 时代的资本重新配置** 正在迅速压缩旧产业的生存空间。不转型就被抛弃，而转型本身也未必能保证成功。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 新规则的争夺
Demis 的监管提案，纽约的数据中心禁令，Paramount-WBD 反垄断诉讼——每一场都是关于 **谁来定义新秩序** 的战斗。是联邦政府？州政府？市场？开源社区？答案将决定未来十年 AI 产业的格局。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新地图的探索者
六家 AI 创业公司——从建筑机器人到药物发现、从政策情报到数据中心——代表了"地图重新变为空白"之后的第一批探险者。他们的共同特点：在极短时间内筹集巨额资本，追逐 TAM 远超上一代软件品类，用 AI 重置整个行业的基础假设。

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这一期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"社会有一个宝贵的窗口期，来为以历史性速度推进的技术做好准备。"
<div class="text-xs opacity-60 mt-1 not-italic">— Demis Hassabis, Google DeepMind CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"认为合并后的 Paramount-WBD 会成为某种垄断巨头……这不是我们生活的世界。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Byers, Puck 创始合伙人</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"地图再次变为空白——因为 AI 正在重置整个版图。"
<div class="text-xs opacity-60 mt-1 not-italic">— Saam Motamedi, Greylock 合伙人</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我们建造摩天大楼大小的火箭，一个月一艘。但修一条路要花好几年。"
<div class="text-xs opacity-60 mt-1 not-italic">— Noah Schochet, TerraFirma CEO</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我花了五年时间研究那个靶点，试图找到结合物——你们把它解决了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 制药公司科学家对 Chai Discovery 团队说</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"问题的核心只是人们的时间花在哪里，以及这些时间和参与度能否被货币化。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Byers</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"在北卡罗来纳，听证会录音的唯一获取方式，是去国会图书馆付一块两毛五，让人把它烧录到 CD-ROM 上。"
<div class="text-xs opacity-60 mt-1 not-italic">— Jamie Seltzer, State Affairs 联合创始人</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我无法监管承诺。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Byers 引述 Rob Bonta 的困境</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"现代资本市场因为铁路才被创造出来——没有足够的银行贷款来建设铁路。我们现在看到的，是同样的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Page, Cipher Digital CEO</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我们不会因为不能作弊而无法构建最强大的开源模型。闭源实验室也从未作弊，它们就是前沿。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ioannis Antonoglou, Reflection AI 联合创始人</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"在德州，我们每分钟都在赢。你可以做任何你想做的事。"
<div class="text-xs opacity-60 mt-1 not-italic">— Noah Schochet 谈在德州创办 TerraFirma 的优势</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"一切都需要通过博弈论的视角来看——所有的头条新闻都是在争取关注这场交易的每个人的心。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Byers 谈 Paramount-WBD 交易中的"离开加州"威胁</div>
</div>

</div>

---

# 谢谢观看

<div class="mt-8">
<div class="text-3xl font-bold">TBPN · 2026 年 7 月 14 日</div>
<div class="mt-4 text-base opacity-70">IBM 暴跌 · AI 监管 · 好莱坞并购 · AI 创业融资</div>
<div class="mt-8 text-sm opacity-50">
订阅 TBPN：tbpn.com
</div>
</div>
