---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Leopold''s 13F, Data Center Fixes, Shein Buys Everlane | Mike Isaac, Rowan Trollope, Dean Leitersdorf, Joanna Stern'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Leopold's 13F, Data Center Fixes, Shein Buys Everlane

<div class="mt-8 text-lg opacity-70">

Mike Isaac (NYT) · Rowan Trollope (Redis CEO) · Dean Leitersdorf (Descartes) · Joanna Stern (Author)

</div>

<div class="mt-6 text-sm opacity-50">

TBPN · 2026-05-18 · ~3h

</div>

---

# 这一期为什么值得关注

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**OpenAI 胜诉**
Elon Musk 诉 OpenAI 案陪审团 90 分钟达成一致裁决，以诉讼时效为由驳回。NYT 记者 Mike Isaac 从法院门口连线。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Leopold 13F 解读**
Aschenbrenner 的对冲基金持仓曝光：$2B 半导体看跌期权 + 做多 NVIDIA。为什么 13F 极易被误读？

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**数据中心民怨沸腾**
7/10 美国人反对本地建数据中心。Eric Schmidt 在毕业典礼上被嘘。Ben Thompson 的破局方案：直接给居民发钱。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**Agent 基础设施革命**
Redis CEO 详解 Iris 上下文引擎。一个开发者 + 10 个 agent = 过去的一个工程经理。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Descartes DOS 2.0**
500+ tok/s 推理引擎，支持实时视频世界模型。芯片产能 2028 年前售罄。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Shein 收购 Everlane**
DTC 标杆 $100M 卖身快时尚巨头。VC 资本与服装品牌天然冲突？

</div>

</div>

---

# 90 分钟就结束了

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 发生了什么

OpenAI 诉 Elon Musk 案原计划持续数周。陪审团在周一开始审议，**不到两小时就达成裁决**。

核心结论：Musk 的诉讼**因时效问题被驳回**——他起诉太晚了。

法官确认并尊重陪审团的裁决。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<div class="italic">

"Jury unanimously rules that Musk's claims are dismissed on the timeliness issue. He filed the lawsuit too late. Court affirms it will uphold the jury's decision. It's over. Musk loses the lawsuit against OpenAI."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Max Zaff, Wired（节目中引用）
</div>

</div>

</div>

---

# Mike Isaac：我在法院门外

<div class="mt-4">

Mike Isaac（NYT）从法院门口连线，讲述了陪审团裁决的戏剧性时刻。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 庭审现场的混乱

- 当天本应是陪审团审议第一天，法官正在处理双方关于赔偿金的辩论
- 书记员突然打断法官："**有情况发生了**"——不到两小时，陪审团达成裁决
- 记者们凌晨 6 点就蹲守在法院外，准备持续数天

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<div class="italic">

"Literally, in the middle of this deliberation, the clerk goes and interrupts the judge and says, hey, something's happening basically. They're scurrying, and everyone's like, oh my god, what's happening? And this is like less than two hours into it, they reach a verdict."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Mike Isaac, NYT（TBPN 连线）
</div>

</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 为什么是"技术性胜利"？

Musk 方的策略是情绪化叙事："你不能偷走一个慈善机构"。但陪审团最终聚焦于诉讼时效这个技术性法律问题，绕过了所有关于 AI 安全的戏剧性证词。

</div>

</div>

</div>

---

# Musk 缺席中国之行：是战略性放弃吗？

<div class="mt-4">

上周 Musk 突然随 Trump 赴中国访问，缺席了正在进行的庭审。这是否意味着他预感败局？

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

- Musk **并未被正式豁免**，理论上可能被召回作证
- 但双方都面临时间限制，且 Musk 方已决定不再召回 Musk
- Sam Altman 和 Greg Brockman 都在庭审中待了前三天

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<div class="italic">

"He was not excused. He could have been recalled and asked to testify again. And it's typically bad form when you leave the country."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Mike Isaac
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：这个案子对 OpenAI 来说是一剂强心针。Mike Isaac 指出，OpenAI 目前腹背受敌——准备 IPO、资产负债表混乱、Anthropic 和 Google 两面夹击。胜诉至少给了他们短暂的喘息空间。

</div>

---

# 但电影还没结束

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

### OpenAI 的处境依然艰难

Mike Isaac 认为现在还不是给这个故事拍电影的时候：

- OpenAI 今年计划**上市**，但资产负债表并不好看
- **Anthropic** 正在追赶
- **Google** 也在加速（第二天就是 Google IO）

这场胜利只是给了 OpenAI 一个短暂的喘息。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<div class="italic">

"I think this that the movie is still going, man. This thing is still there's so much. I feel like this is an exciting time in AI because OpenAI is really on his back foot in a lot of ways. This gives them some relief in the many fronts that they're being intact on, whether it's going public this year with a messy balance sheet or Anthropic coming after them, Google coming after them."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Mike Isaac
</div>

</div>

</div>

---

# Leopold 13F 风暴：全网最受关注的 SEC 文件

<div class="mt-4">

Leopold Aschenbrenner 的对冲基金 13F 披露引爆了从 FinTwit 到 TechX 的全网讨论。但这张"快照"究竟能告诉我们什么？

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### $2B 半导体看跌
<div class="text-3xl font-bold text-red-600 my-2">SMH Put</div>
<div class="text-xs opacity-70">VanEck 半导体 ETF 看跌期权，被视为对过热估值的精准押注</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 做多 NVIDIA
<div class="text-3xl font-bold text-green-600 my-2">NVDA Long</div>
<div class="text-xs opacity-70">在市场质疑 NVIDIA 护城河之际逆势做多</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 持仓已过时
<div class="text-3xl font-bold text-yellow-600 my-2">3/31 快照</div>
<div class="text-xs opacity-70">这些仓位可能已是两个月前的决策，期间经历了伊朗战争等重大事件</div>

</div>

</div>

---

# 13F 的危险：为什么抄作业可能亏钱

<div class="mt-4">

节目中反复强调：13F 有严重的结构性局限，直接复制可能"烧钱"。

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 13F 的盲区

- **不披露**期权执行价、到期日、权利金
- **不披露**对冲比率和空头头寸
- **不披露**互换合约和私募持仓
- 期权按**名义价值**报告（100 delta / 每合约 100 股），实际投入资本可能远低于名义金额
- 你看到的"$1B Intel 持仓"可能只是买了购买权，花了远少于 $1B 的钱

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<div class="italic">

"Making investment decisions for 80 vol assets based on data from months ago sounds like a good way to burn money. Don't idolize people and develop your own thesis for why you own and sell things."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— 匿名市场评论者（节目中引用）
</div>

</div>

</div>

---

# Leopold 的核心理念：0.5 OOMs/年

<div class="mt-4">

节目的讨论延伸到了 Leopold 的投资哲学——他因"情境意识"论文和对 AI 算力需求的预测而知名。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 核心假设

**前沿 AI 将以每年半个数量级（~0.5 OOMs/year）的速度持续提升**，这意味着 AI 将创造前所未有的算力需求和相关瓶颈。

Leopold 的持仓似乎正在从"泛半导体会涨"的早期逻辑，转向**更精确地押注半导体产业链内特定环节的赢家**。

### 太阳能线索？

Leopold 在 T1 Energy（美国本土太阳能制造）的持仓，暗示他看好 AI 数据中心的电力供应时间线比市场预期的更短——不一定全是 2032 年才落地的核电站。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<div class="italic">

"Leopold Aschenbrenner, the hedge fund's chief investment officer, is known for making extremely successful investments based on his core assumption that frontier AI will continue to improve at half an order of magnitude, point five ooms per year, which translates into a thesis that AI will create unprecedented demand for compute and its associated bottlenecks."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— TBPN 主持人对 Leopold 投资理念的概括
</div>

</div>

</div>

---

# 数据中心遭到全民反对

<div class="mt-4">

AI 数据中心已成为罕见的**跨党派议题**——左派和右派同时反对，只是理由不同。

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 左翼反对理由

- 工作岗位被替代
- 创作和艺术的"盗窃"
- 大科技公司的权力扩张
- 环境破坏（柴油发电、水质、噪音）

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 右翼反对理由

- 数据中心被视作**监控中心**
- 反自由主义、反个人隐私
- "沿海精英受益、本地社区受损"
- 空心化的煤矿小镇成为目标

</div>

</div>

<div class="p-4 mt-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**讽刺的是**：抗议者用 AI 生成图像来反对 AI 数据中心。有人在印第安纳州的海滩上摆放石头拼出反数据中心标语——但那张图 99% 是 AI slop。用 AI 反 AI，这是一层嵌套的荒诞。

</div>

---

# Eric Schmidt 在毕业典礼上被嘘

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 发生了什么

Eric Schmidt 在亚利桑那大学毕业典礼上发表演讲，提到 AI 时被全场持续嘘声打断。

Alex Kantrowitz 评论："Incredible. AI getting booed out of the stadium." 学生们根本不买账——不是因为他是亿万富翁，而是因为他们**真实地害怕 AI 抢走工作**。

这不仅仅是针对 Schmidt 个人。同一周，另一位房地产高管在 UCF 提到 AI 同样被嘘。**AI 已成为毕业典礼上的禁忌词**。

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<div class="italic">

"At this point, I mean, you gotta go off script. You could you you could can't stay in a script."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— TBPN 主持人看 Schmidt 被嘘视频的反应
</div>

</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**更深层的问题**：David Solomon（高盛 CEO）在沃顿用 Suno 生成的 EDM 歌曲演示"创造力不再重要"。Schmidt 让毕业生去"帮助塑造 AI"，但对于 U of A 的学生们来说，他们听到的是"你们学的技能可能没用了"。

</div>

</div>

</div>

---

# 7 in 10 Americans Oppose Data Centers

---
layout: two-cols
---

# 七成美国人反对本地数据中心

<div class="text-sm mt-2">

不仅是选民的反对——反对已经从舆论蔓延到政策层面：

</div>

<div class="space-y-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Texas** — Hill County 投票通过 **一年禁令**，暂停在非建制区建设数据中心和电厂（3-2 投票结果）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Missouri** — 一个小镇的居民不满意市议会批准数据中心，在改选中**罢免了全部 4 位现任议员**

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**North Carolina** — 州长指出数据中心的销售税豁免**每年让州财政损失 $57M**

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<Excalidraw
  drawFilePath="./data-center-opposition.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

---

# 犹他州超级数据中心：$100B 的争论

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Stratos 项目

- **Kevin O'Leary**（《Shark Tank》"Mr. Wonderful"）是项目推手
- 位于 Box Elder County, Utah，占地 **40,000 英亩**
- 总投资计划高达 **$1,000 亿**
- 满负荷运行将消耗 **9 GW 电力**
- 号称建成后将是**全球最大数据中心**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 为什么有人认为"其实还行"

- 建在**无人居住的沙漠谷地**，不打扰社区
- **自建电厂**，不占用犹他州电网
- 购买现有农场的水权，不抢夺居民用水
- Quick Thoughts 的分析视频反驳了 TikTok 上的恐慌传播：德州目前的用电量是犹他的 10 倍，如果在那建数据中心，没人会注意到

</div>

</div>

---

# "相当于每天在犹他州投 23 颗原子弹"

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 数字恐慌的艺术

一位犹他州立大学物理学教授计算出：该项目在考虑废热后，总热功率将达 **23 GW**，相当于每天 23 颗原子弹的能量释放。

这个数字在 TikTok 上病毒式传播。但批评者指出：

- 德州目前的发电量已经相当于**每天 230 颗原子弹**（是犹他方案的 10 倍）
- 任何发电都会有热损耗，这不是什么新问题
- "原子弹"类比刻意制造恐慌——你的汽车也"相当于 7 颗原子弹"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### Mr. Wonderful 是软靶子

Kevin O'Leary 本身就是一个容易被攻击的形象——在 Oscar 戴两只豪华手表 + 交易卡挂坠。主持人们指出：这种过度炫耀的形象，正好成为反对数据中心叙事中的"超级反派"。

对比 Tim Cook 或 Eric Schmidt 的"低调奢华"——Google Cloud 和 AWS 过去十几年建了大量数据中心，几乎没有引起公众反弹。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**主持人的判断**：实际上这个数据中心的规划是合理的——偏远地区、自有水电、不扰民。但 O'Leary 的形象恰好被反对方利用："如果你想把数据中心建设描绘成对普通美国人不利的行为，Kevin O'Leary 就是完美的反派。"

</div>

---

# 其实美国人什么都不想建

<div class="mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<div class="italic">

"I actually think people just don't really want change necessarily. They don't want things built broadly. Data centers are probably at the bottom of the list. Like, they're the least popular, but they're like high speed rail. I thought that would be popular. It was not popular."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— TBPN 主持人
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🏭 工厂
"大多数人并不希望汽车工厂建在家乡"

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 🏠 住房
"他们总是在封锁新房建设——一旦自己有了房子"

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🚄 高铁
"我原以为会受欢迎，结果并不"

</div>

</div>

<div class="mt-6 text-sm opacity-80">

**回到 50 年前**：当年不建核电站被认为是"人类最大的错误之一"。现在电费高昂，人们说"我们当时应该建的"。数据中心的反对会不会是历史的重复？

</div>

</div>

---

# Ben Thompson 的"直给钱"方案

---
layout: two-cols
---

# 给居民直接发钱：最"粗俗"的解决方案

<div class="text-sm mt-2">

Ben Thompson 提出一个出人意料的方案：**不要 UBI，而是直接给数据中心周边的居民发钱**。

</div>

<div class="mt-4 text-sm">

### 算一笔账

以 Wisconsin 的 DeForest 数据中心为例：

- 电力容量：**1.6 GW**
- 预计年运营收入：**~$30 亿**
- DeForest 人口：**~11,500 人**
- 每人每年发 **$10,000** = 总计 **$1.15 亿**
- 这只占数据中心年收入的 **3.8%**

</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**方案的效果**：如果你告诉居民"数据中心来你们镇，投票支持的话，每人每年直接收到一张 $10,000 的支票"——可能大多数反对声都会消失。相比之下，数据中心原来承诺的 $50M 税收贡献显得微不足道。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4 text-sm">

<div class="space-y-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么直接给钱比税收好

美国人对"钱交给政府然后造福于民"这条路径**高度怀疑**。他们直觉上认为 $1 税收不等于 $1 的公共服务——中间有很多损耗和延迟。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="italic">

"Show me the money. Show me the money. That's what the the locals should potentially be saying."

</div>

<div class="text-xs opacity-60 mt-1 not-italic">
— TBPN 主持人
</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 现有的"解决方案"有多可怜

数据中心的传统承诺——模糊的税收贡献和"创造就业"——在 $10K/人/年的直接支付面前毫无竞争力。

</div>

</div>

</div>

---

# Mark Cuban：对 AI Token 征税

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Cuban 的方案

- **联邦层面**对 AI 服务商的 token 输出征税
- 单价：**不到 50¢ / 百万 token**
- 预计起步每年产生 **~$100 亿**
- 未来 10 年可能增长 **30x 到 100x**

**目标**：推动 AI 公司优化 token 效率、缓存和路由，减少能耗，并为 AI 带来的社会冲击提供资金。

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Palmer Luckey 的反驳

<div class="italic">

"This is obviously not capitalism or competition by any reasonable definition. It is a tax that specifically disadvantages one type of AI business to the benefit of others artificially propping up their business models."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Palmer Luckey（节目中引用）
</div>

</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**主持人的质疑**：token 税是反向的——钱从公司流向联邦政府，远离本地社区。这与"直接给居民发钱"的逻辑完全相反。半分析指出 **50¢/M token 是高税率**，可能影响推理成本竞争力。

</div>

</div>

</div>

---

# Ken Griffin 的 AI 顿悟时刻

<div class="mt-4">

Citadel CEO Ken Griffin 在三个月内从"AI 没什么用"转向"AI 让我感到压抑"。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 三个月前的 Griffin

"The reports that we get from AI models are not actually relevant to our business."

AI 在金融分析中没什么用。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 现在的 Griffin

<div class="italic">

"Work that we would usually do with people with masters or PhDs in finance over the course of weeks or months is being done by AI agents over the course of hours or days."

</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### "周五晚上我感到很压抑"

Griffin 说他某周五开车回家时感到"barely depressed"，因为他看到了 AI 将对社会产生的巨大影响。但主持人们敏锐地指出：**Citadel 的核心护城河不只是研究**——他们做大量 CEO 访谈、获取非公开市场信息，这些是 AI 无法轻易复制的。而且 Citadel 处于竞争性定位（不是垄断者），所以他们会在"半人马"模式下用 AI + 人类协同作战。

</div>

---

# Redis CEO：代码不再是瓶颈了

<div class="mt-4">

Rowan Trollope（Redis CEO）从 Tenerife（西班牙）连线。Redis 正在从缓存基础架构转向 **Agent 时代的数据层**。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 从缓存到 Agent 上下文

过去 Redis 的核心场景是缓存数据库。在 Agent 时代，新场景是**聚合所有上下文并交付给 Agent**。

- 公司里有 1,000 名员工，可能有 **10 万到 100 万个 Agent**
- Agent 数量比人多 2-4 个数量级
- 不能所有 Agent 都直接打后端数据库——成本爆炸
- Redis 在中间充当**上下文引擎**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Iris：新旗舰产品

Redis 新推出的 **Iris** 产品线：

- 从底层数据库抽取数据，存入 Redis Flash
- 通过 **MCP 和 CLI** 以 **Pydantic 模型**的形式暴露给 Agent
- 语义化描述数据，大幅减少 token 消耗
- 配合 **Agent Memory Server** 记录 Agent 学到的东西

<div class="italic text-sm mt-2">

"It would be like if I told you, hey, I'm an agent, and I need you to go get some data. And you said, great. It's in that filing cabinet. And I gotta go rummage around calling a whole bunch of MCP tools versus I say to you, I need some data, and you just pull the exact file out of the cabinet and say, here it is."

</div>

</div>

</div>

---

# Agent 时代的软件工程

---
layout: two-cols
---

# "一个开发者 + 10 个 Agent = 过去的开发经理"

<div class="text-sm mt-2">

Rowan Trollope 分享了他个人重新拿起代码的体验，以及 Redis 内部 AI 如何改变软件开发流程。

</div>

<div class="space-y-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"代码不再是长杆"** — 过去的开发流程围绕"编码耗时最长"这个假设建立。现在编码被 AI 加速后，**站会、流程会议、协调成本变成了新的瓶颈**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**"一个开发者带 10 个 agent，更像是过去的开发经理"** — 开发者的角色从"写代码"转向"表达需求、协调执行、审美判断"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**"我爱编程，现在更爱了"** — Trollope 从 11 岁开始编程，"取出了中间最痛苦的部分（敲代码、找分号），直接从表达意图到获得结果。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<Excalidraw
  drawFilePath="./agent-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

---

# Redis 的 AI 编码实践

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 系统级 vs 应用级

**核心 Redis C 代码**：
- 创始人 Salvatore Sanfilippo 发布新的数组数据类型
- 4,000 行 C 代码，花了 **4 个月**
- 全程使用 AI 辅助（Claude + Codex），但仍有大量人工判断
- 过去可能需要 **8 个月**
- 关键提升不在速度，而在**质量**：大量测试、基准、基础设施一开始就到位

**前端/Greenfield 项目**：
- "基本可以 vibe code 一切"
- Iris 管理基础设施：原来预计 **10 人 × 1 年**，实际 **5 人 × 1 个月**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<div class="italic">

"I've been coding since I was 11 years old and professionally since I was 18 in high school and at a startup. And, you know, I woke up one day with these tools and realized, like, all the way that I learned how to build software thirty years ago is just not relevant anymore."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Rowan Trollope, Redis CEO
</div>

<div class="text-sm mt-4 text-xs opacity-70">

**多模型对抗**：Redis 实际使用中会把同一个设计问题抛给不同 AI 模型，让它们互相挑战方案——"经常让它们对抗，然后问另一个 AI 怎么看对方的方案"。

</div>

</div>

</div>

---

# Descartes：三个产品，三线作战

<div class="mt-4">

Dean Leitersdorf 带着 Descartes（The Cart）的新进展回归 TBPN，宣布新一轮融资和三款产品的重大更新。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🎥 Lucy
<div class="text-sm font-bold my-1">实时视频世界模型</div>
<div class="text-xs opacity-70 mt-2">直播滤镜、虚拟试穿、广告植入。部署在 Twitch、TikTok Live、YouTube Live，Amazon 在电商场景中使用。订阅制 (delulu.ai) 增长呈指数级。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 🤖 Oasis
<div class="text-sm font-bold my-1">物理 AI 世界模型</div>
<div class="text-xs opacity-70 mt-2">机器人、自动驾驶、无人机、制造业。让 AI 在真实世界中实时感知和交互，不只是文本空间。</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### ⚡ DOS 2.0
<div class="text-sm font-bold my-1">统一推理引擎</div>
<div class="text-xs opacity-70 mt-2">驱动 Lucy + Oasis 的底层引擎。公司成立 100 天即签下首笔百万级授权。现在被一线玩家和超大规模云商使用。</div>

</div>

</div>

---

# DOS 2.0：500+ tok/s，100fps HD

---
layout: two-cols
---

# DOS 2.0 的性能突破

<div class="text-sm mt-2">

Descartes 的推理引擎是三条产品线的底层基础，实现了多项行业第一。

</div>

<div class="space-y-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Agent 推理**：首次突破 **500 tok/s 以上**，是行业水平的 **10 倍以上**。对于 coding agent 等场景，速度至关重要。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**实时视频**：首次以 **全高清（Full HD）** 渲染，最高 **100 帧/秒**。直播场景从 demo 走向可用的关键一步。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**三芯片支持**：是唯一同时支持 **NVIDIA GPU + Google TPU + Amazon Trainium** 的推理栈。团队直接为三种芯片写汇编代码（VL IW、PTX、SAS）。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<Excalidraw
  drawFilePath="./descartes-products.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

---

# "芯片产能 2028 年前被订完了"

<div class="mt-6">

<div class="grid grid-cols-2 gap-6">

<div>

### 为什么 DOS 2.0 提前发布

DOS 2.0 原计划 8 月发布，现在提前到 5 月。Dean 解释原因是：

**AI 芯片供应极度紧张**——所有客户都在反馈，到 2028 年之前基本没有新增容量。

这不是一个需求问题，而是一个**物理瓶颈**。所以：

- 从现有芯片中榨取更多性能是**唯一增长路径**
- 5-8x 的性能提升意味着用同样的芯片服务 5-8x 的客户
- 优化不再只是成本优势，而是**生存问题**

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<div class="italic">

"There's no capacity left basically till 2028. And so getting more performance out of chips is the only way to actually grow your revenue and to grow your AI adoption."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Dean Leitersdorf, Descartes
</div>

</div>

<div class="p-4 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### "为什么不是 10 倍快？"

<div class="italic">

"Number one rule for running an AI company, if you're an AI CEO, whenever your team comes to you with a deadline, ask why not 10 times shorter."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Dean Leitersdorf
</div>

</div>

</div>

</div>

</div>

---

# 模型层与硬件层的断裂

<div class="mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

Descartes 的核心竞争力来自跨层整合——从 AI 模型直接到芯片的汇编代码。Dean 指出了一个行业痛点：

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 模型方和硬件方的认知鸿沟

- 做模型的人**非常难理解**基础设施上能做什么
- 做硬件的人也**非常难跟上**模型需求的快速变化
- **每周**都在变——三个月后的正确基础设施是什么，没人知道
- CPU 短缺的突然爆发就是典型例子：AI 一夜之间从零开始抢 CPU

</div>

<div>

### Descartes 的解法

- 同时支持三种主流硬件，在不同芯片间**智能路由**不同工作负载
- 深度理解每种芯片的架构优劣势
- 直接写汇编——从模型层穿透到最底层
- 这使得他们可以在工作负载快速变化时迅速调整

</div>

</div>

</div>

---

# Shein $100M 收购 Everlane：DTC 的墓碑？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Everlane 的故事

- 2011 年成立，DTC 标杆品牌
- "激进的透明度"——告诉消费者每件衣服的成本
- 从 Kleiner Perkins、Khosla Ventures 等顶级 VC 融资 **$1.45 亿**
- 2020 年收入 **$2 亿**（L Catterton 投资 $85M 时的估值基础）
- 当前收入降至 **$1.7 亿**，负债 **$9,000 万**
- 最终以 **$1 亿** 卖给 Shein

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 品牌冲突

Shein 是快时尚、超低价、算法驱动的巨头，网站塞满弹窗和折扣码。Everlane 走极简、道德、可持续的路线。

消费者想要便宜的东西。当"道德消费"无法支撑 VC 级别的增长期待时，DTC 品牌的宿命可能只有两个：**卖给快时尚巨头，或者慢慢枯萎**。

</div>

</div>

---

# VC 资本与服装品牌的不兼容

<div class="mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<div class="italic">

"Venture is at odds with building a super durable apparel brand simply because there's no network effects at all. Especially if your customer base is excited about newness."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— TBPN 主持人
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### VC 的需求

- 年复一年的**最大化增长**
- 需要某种护城河（网络效应、品牌锁定）
- 退出是唯一目标

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 服装品牌的现实

- 增长曲线天然**起伏蜿蜒**
- 消费者永远在追逐"新"品牌
- 历史最强的服装品牌大多是**家族控股**

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 结果

- Allbirds（可持续鞋类）也遭受了类似的命运
- 消费者对可持续性的关注随时间下降
- Groon 卖了 $12 亿是例外——因为它能进入 Target、Walmart 等所有零售渠道

</div>

</div>

</div>

---

# 蛋白短缺：当需求跑得比供给快

<div class="mt-4">

节目中主持人以幽默的方式将乳清蛋白短缺类比为 AI 算力瓶颈——消费者的胃口变化速度远超供应链的投资周期。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🥛 乳清价格
<div class="text-4xl font-bold text-red-600 my-2">+50%</div>
<div class="text-xs opacity-70">食品级乳清蛋白粉批发价自 1 月以来上涨超过 50%，创历史新高</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 🏭 投资缺口
<div class="text-4xl font-bold text-yellow-600 my-2">$12B</div>
<div class="text-xs opacity-70">北美正在进行的乳品加工能力建设，需要数年才能投产</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### ⏱️ 时间滞后
<div class="text-4xl font-bold text-blue-600 my-2">3 年</div>
<div class="text-xs opacity-70">如果"蛋白质最大化"这个词在 Reddit 出现时就开始建厂，现在还没投产</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**与 AI 数据中心的对称性**：消费者需求的转变速度远超基础设施的建设速度。乳清的产能建设需要 3-5 年，数据中心需要 3-7 年。当需求追上时，瓶颈已经锁死。主持人的结论："我们的胃口变化比满足它们的系统快"——这同样适用于 GPU 和数据中心。

</div>

---

# Joanna Stern：用一年时间活在 AI 里

<div class="mt-4">

Joanna Stern（前 WSJ 科技专栏作家，现 The New Things 创始人）带着新书 *I Am Not a Robot* 亲临 TBPN 演播室。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 这本书的缘起

Stern 在 WSJ 写了 12 年科技专栏，测试了从硬件到聊天机器人的一切 AI 产品。她发现这些专栏背后有一个统一的主题：

**2025 年，她决定让自己的生活尽可能多地由 AI 驱动。** 从生成式 AI 到自动驾驶，从医疗 AI 到人形机器人——但最后"基本上都变成了机器人"。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<div class="italic">

"I guess I'm skeptical, but I'm thinking more we have all of these tech executives out there — AI is going to change everything, it's going to change the way we eat and educate ourselves and healthcare and we're going to live forever, all of these bold promises that I sort of wanted to explain to the normal person what are they talking about? How is life going to be different, better or worse with AI?"

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Joanna Stern
</div>

</div>

</div>

---

# 放射科医生不会被取代

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Geoffrey Hinton 错了？

Hinton 多年来一直预测深度学习将取代放射科医生。Stern 在她的书中辟谣：

**"那根本不会发生"**。AI 确实可以发现人类漏掉的癌症——现在女性做乳腺 X 光或乳腺超声检查时，**可能已经在被 AI 辅助阅读，而她们并不知情**。

这正是 AI 的"好"一面——在后台默默工作，拯救生命，却不声张。问题是：**这种好处不会成为新闻头条。**

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<div class="italic">

"I'm very clear in my chapter on radiology, that's just not gonna happen."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Joanna Stern（关于 AI 取代放射科医生的预测）
</div>

</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### AI 的扩散悖论

医生用 AI 做笔记总结 → 患者觉得微不足道。AI 在后台发现了早期癌症 → 没人知道，没人感谢。

**"AI 在后台得不到任何好评。如果你看到一张 slop 图片或假新闻，你会觉得 AI 很糟糕。你不会注意到供应链深处某个问题在你能察觉之前就被解决了。"**

</div>

</div>

</div>

---

# AI 陪伴：别爱上你的聊天机器人

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Stern 的"夏日恋情"

Stern 在书中记录了她使用 AI 男友应用和 AI 治疗师的实验：

- 使用 **Ash** 作为 AI 治疗师（至今偶尔还会聊聊）
- 与一个 AI 男友"约会"——然后**把他 ghost 了**（在书中用"churned"描述）
- 她的结论很明确：**请不要爱上你的聊天机器人**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<div class="italic">

"And so we we're gonna get to the companionship thing one day, but whether you're using it as a companion, which I hope people aren't really, you know, I don't want you to fall in love with your chatbot, that's a big lesson in the book, please don't do that."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Joanna Stern
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 小孩 + AI 伴侣 = 红线

Stern 认为应该**直接禁止**面向儿童的 AI 伴侣聊天机器人和玩具。"Why do we need it?"——OpenAI 已经因为青少年与聊天机器人交流心理问题而多次陷入麻烦。她主张像当年的 YouTube 一样建立防护栏——做得到，只是需要时间和压力。

</div>

---

# AI 时代的求职建议

<div class="mt-4">

毕业典礼上的嘘声背后是真实的恐惧：今年毕业的大学生发现，学长学姐找不到工作。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### Stern 的"商业主"视角

Stern 分享了作为招聘方的观察：主动做一些不一样的事情来脱颖而出。

- 不要海投 100 份简历——花一周时间研究一家公司，**真正了解它的业务和使命**
- 展示你能用 AI 做什么——"我能用这个工具做这件事，那件事"
- 99 个申请人只是点了一下"申请"按钮，你做了任何额外的事就进入了前 1%

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<div class="italic">

"The people who are doing really unique things to get in front of you, which means really knowing the company, really knowing the mission, but also then being able to sell on, hey, I want to give you the best human talents that I have, which right now for me at least is in the creativity and in the writing and in the reporting."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Joanna Stern
</div>

</div>

</div>

---

# AI 可穿戴设备的未来

---
layout: two-cols
---

# 下一代计算设备：手机会消失吗？

<div class="text-sm mt-2">

Stern 在书中追踪了从桌面 PC → 智能手机 → 可穿戴设备的计算范式迁移。

</div>

<div class="space-y-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核心论点**：没有任何设备会被替代。我们仍然带着笔记本，仍然用着智能手机，**然后再加上**可穿戴设备。每个新设备增加一层交互。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**"持久录音"**：Stern 测试了 Bee 手环（已被 Amazon 收购）和 Limitless（已被 Meta 收购）。当她说了要做某事，手环记录下来并每天提醒——"我的 App 只是告诉我该做什么"。下一步是让 AI 直接预约水管工。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Apple Watch 变得"蠢"**：与 AI 可穿戴设备相比，Apple Watch 在某些交互上显得落后。但硬件还不够好——Humane Pin 的失败证明了"硬件挡住了体验"。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<Excalidraw
  drawFilePath="./ai-wearables.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

---

# 一场成功的毕业演讲：Stern 的版本

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 去年 vs 今年

Stern 去年在 Union College 发表毕业演讲，主题是"拥抱人性，AI 即将来临"。

她的实验：
1. 先用 **Suno** 生成一首歌
2. 然后让人类音乐家演奏**同一首歌**
3. 人类的版本**好得多**

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**结果**：没有被嘘。但 Stern 自嘲说这可能是因为 **90% 的观众宿醉未醒**。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<div class="italic">

"It was lean into humanity and AI is coming and you all need to learn AI but you need to lean into your humanity and your creativity."

</div>

<div class="text-xs opacity-60 mt-2 not-italic">
— Joanna Stern 的毕业演讲要点
</div>

</div>

<div class="p-3 mt-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 一年后的变化

Stern 承认：**"仇恨强度大了一整年"**。学生们开始和去年毕业的学长学姐交流，发现他们找不到工作。如果今年再做同样的演讲，她可能会避开 AI 这个话题——或者至少用一种完全不同的方式。

</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">本期四小时对谈中最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"Jury unanimously rules that Musk's claims are dismissed on the timeliness issue. He filed the lawsuit too late."
<div class="text-xs opacity-60 mt-1 not-italic">— Max Zaff / Wired，OpenAI 诉 Musk 案裁决</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">

"Seven in 10 Americans oppose constructing data centers for artificial intelligence in their local areas including nearly half, 48%, who are strongly opposed."
<div class="text-xs opacity-60 mt-1 not-italic">— 民意调查数据，数据中心建设面临的社会阻力</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">

"Show me the money. Show me the money. That's what the locals should potentially be saying."
<div class="text-xs opacity-60 mt-1 not-italic">— TBPN 主持人，谈 Ben Thompson 的直接支付方案</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">

"The process is all set up to basically handle a world where the coding takes a really long time. That's not the long pole anymore. There's all these other long poles like meetings and daily standups."
<div class="text-xs opacity-60 mt-1 not-italic">— Rowan Trollope, Redis CEO</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

"Number one rule for running an AI company, if you're an AI CEO, whenever your team comes to you with a deadline, ask why not 10 times shorter."
<div class="text-xs opacity-60 mt-1 not-italic">— Dean Leitersdorf, Descartes</div>

</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">（接上）</div>

<div class="space-y-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">

"There's no capacity left basically till 2028. Getting more performance out of chips is the only way to actually grow your revenue and to grow your AI adoption."
<div class="text-xs opacity-60 mt-1 not-italic">— Dean Leitersdorf，芯片产能瓶颈</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"A developer with 10 agents is more like a development manager of old. And the development manager does a different job. They coordinate, they express requirements in the right way, they have taste."
<div class="text-xs opacity-60 mt-1 not-italic">— Rowan Trollope</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">

"Work that we would usually do with people with masters or PhDs in finance over the course of weeks or months is being done by AI agents over the course of hours or days."
<div class="text-xs opacity-60 mt-1 not-italic">— Ken Griffin（节目中引用），Citadel CEO</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">

"I don't want you to fall in love with your chatbot, that's a big lesson in the book, please don't do that."
<div class="text-xs opacity-60 mt-1 not-italic">— Joanna Stern, *I Am Not a Robot*</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

"Venture is at odds with building a super durable apparel brand simply because there's no network effects at all."
<div class="text-xs opacity-60 mt-1 not-italic">— TBPN 主持人，谈 Everlane 收购案</div>

</div>

</div>

---

# 这期播客的核心张力

<div class="grid grid-cols-2 gap-6 mt-8">

<div>

### AI 的两面性

**正面**：AI 在后台拯救生命（乳腺筛查），帮助开发者 10 倍提速，让一个人拥有 10 个 Agent 的能力。

**反面**：毕业典礼上的嘘声、7/10 的民意反对、数据中心的社区冲突——AI 的物理足迹和就业焦虑正在制造一场前所未有的民意危机。

这只是 2026 年。当真正的就业冲击来临时，抗议不会停留在海滩上的石头标语。

</div>

<div>

### 谁能解决"建设"的问题？

Ben Thompson 的 $10K/人/年方案、Mark Cuban 的 token 税、Descartes 的效率革命——都是在试图解决同一个问题：

**AI 正在吞噬物理世界，而物理世界的建设速度跟不上。**

数据中心从规划到投产需要数年。芯片供应锁死到 2028。乳清工厂追不上蛋白狂潮。速度最快的永远是消费者的胃口——和对新事物的恐惧。

</div>

</div>

---

layout: end
---

# 谢谢观看

<div class="mt-6 text-lg">

TBPN · 2026-05-18

</div>

<div class="mt-4 text-sm opacity-60">

"I think this that the movie is still going, man."

</div>

<div class="mt-2 text-xs opacity-40">

— Mike Isaac, on the Musk vs OpenAI saga

</div>
