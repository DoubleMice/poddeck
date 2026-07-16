---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Stripe x PayPal, Codex Micro, Saagar Enjeti Joins | George Kailas, Mukund Jha, Russ Tedrake, Glenn Youngkin'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Stripe × PayPal、Codex Micro<br/>Saagar Enjeti Joins

<div class="mt-8 text-lg opacity-70">

George Kailas · Mukund Jha · Russ Tedrake · Glenn Youngkin

</div>

<div class="mt-12 text-sm opacity-50">

TBPN · 2026年7月15日 · 1小时54分钟

</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">Stripe $53B 收购 PayPal</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">Founders Fund 系企业全循环收购，Shiel Monat 最早公开提出收购逻辑</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">Emergent $130M Series C</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">80%用户为非技术人员，跳过SaaS周期直接进入AI原生</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700">Saagar Enjeti：预测市场 × 数据中心 × 住房</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">提出"Saagar's Razor"：AI可替代预测市场的信息发现功能</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700">Walden Robotics 出隐</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">MIT教授创立，Toyota/Boeing/Samsung背书，$300M融资</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">Glenn Youngkin 加入 Red Cell</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">前弗吉尼亚州长、Carlyle 25年老将谈VC孵化新模式</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700">OpenAI 硬件 + Inkling</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">AI伴侣音箱 & Anthropic多模态开源模型</div>
</div>

</div>

---
layout: two-cols
---

# PayPal：跌倒的巨人

<div class="text-sm mt-4">

- **股价从疫情高点下跌超80%**，五年持续下滑
- 但基本面仍强：**年自由现金流 $5.5B**，4亿消费者账户
- Venmo + 数百万商家结账按钮 = 巨大的消费者触达
- 消费者银行信息绑定——这是 Stripe 最想要的

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关键矛盾：</strong>资产值钱，但公司臃肿——25,000名员工，数十年技术债。谁能让它重焕活力？
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stripe-paypal-deal.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Stripe 的收购逻辑

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 战略互补

- Stripe 估值 $159B，从未涉足消费者业务
- PayPal 的消费者结账按钮直接嵌入 Stripe 的支付流
- Venmo 品牌 + 4亿账户的银行信息是"消费者端的圣杯"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 被低估的资产

- Shiel Monat 今年2月就公开提问"谁买 PayPal"
- 称为"金融科技史上最大的困境价值机会之一"
- 10%自由现金流收益率：可以支撑大量债务融资

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么是 Stripe？

- Stripe 的产品和创新能力无与伦比
- 如果能让 PayPal 运营效率达到 Stripe 的一半，价值可能翻倍
- 对贷款方而言，找不到比 Stripe 更好的合作伙伴

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 未解的问题

- Stripe 从未真正尝试消费者业务
- 25,000名员工 vs Stripe 的精简文化
- 成本削减 ≠ 产品创新——这是两种不同的能力

</div>

</div>

---

# 交易结构与阻力

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 报价

<div class="text-3xl font-bold text-blue-600 my-2">$53B</div>
<div class="text-xs opacity-70">$60.50/股<br/>28%溢价（昨日收盘价）</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 融资

<div class="text-3xl font-bold text-green-600 my-2">$50B</div>
<div class="text-xs opacity-70">银行承诺融资<br/>Stripe + Advent 50/50股权</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 阻力

<div class="text-3xl font-bold text-yellow-600 my-2">1年前</div>
<div class="text-xs opacity-70">股价曾在$70以上<br/>Michael Burry 反对当前价格</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**PayPal CEO Greek Lores（前HP高管）**刚上任不久，不太可能愿意在短期内被收购——他想亲自完成扭转。Stripe 选择此时公开要约，部分目的是施加压力。FT 报道称 PayPal 此前数周一直拒绝接触。

</div>

<div class="mt-2 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括：</strong>这笔交易的逻辑很强，但文化和体量差距巨大。Stripe 擅长打造产品，但 25,000人的裁员整合是一套完全不同的技能。Advent International 的 PE 经验可能是关键变量。
</div>

---

# 文化冲突：创新者 vs 成本削减者

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded border-l-4 border-blue-500 bg-blue-50">

### Stripe 的文化

- 产品驱动、创新优先
- 工程技术为核心竞争力
- 持续拓展新市场（如 Atlas）
- 精干团队，高效运营

</div>

<div class="p-3 rounded border-l-4 border-gray-400 bg-gray-50">

### PayPal 的现实

- Shiel Monat 原文："一个臃肿的传统金融科技公司，25,000名员工"
- 数十年技术债务
- 结账按钮增长放缓
- 面临 Apple Pay / Shop Pay / Klarna 激烈竞争

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Shiel Monat 的尖锐判断：对 Stripe 和 Apple 来说，"**文化契合度让这笔交易不可能成立**"（culture fit makes them a non-starter）。两家公司都不会愿意吸收 PayPal 的体量和遗留系统。
</div>

<div class="mt-2 text-sm opacity-70">
不过，Coding agents 的进步可能在减轻技术债清理的难度——这是一个值得关注的新变量。
</div>

---

# 其他潜在竞购者

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Apple

- Apple Pay 的自然延伸
- 从未成功进入社交支付
- **问题：** 大型科技公司反垄断风险 + 同样不擅长收购老旧资产

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Visa / Mastercard

- 可以加速从交换费向直接商户关系转型
- 结账按钮位置价值巨大
- **问题：** 反垄断审查将是"残酷的"——Shiel

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### J.P. Morgan

- 已大量投入支付和收购领域
- Venmo 提供接触年轻消费者的 P2P 品牌
- 可以承受 $50B 的规模
- **Shiel 认为"最有意义"的买家**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Elon Musk

- PayPal 联合创始人，一直想叫它 "X"
- 也是 Stripe 的天使投资人
- **问题：** 精力已被 Tesla/SpaceX/xAI/X 极度分散——"但这从未阻止过他"

</div>

</div>

<div class="mt-3 text-sm opacity-70">
作者概括：无论最终谁买，这场收购战将检验 "产品创新" 与 "运营效率" 这两种能力能否在金融科技领域合二为一。
</div>

---
layout: two-cols
---

# Stripe × PayPal：你能得到什么？

<div class="text-sm mt-4 space-y-2">

**Stripe 得到的：**

- 🏦 4亿消费者银行账户信息——消费者端的终极入口
- 🏷️ Venmo 品牌——年轻人偏好的P2P支付
- 🛒 数百万商户的结账按钮——尽管增长放缓
- 💰 $5.5B 年自由现金流——可用于偿还债务
- 🔄 Stripe 从未真正尝试消费者业务——这次是大胆押注

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stripe-paypal-deal.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Emergent：让非技术人员也能构建生产级应用

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司速览

- **$130M Series C**，估值 $1.5B
- **200K+ 客户**，$100M+ ARR
- **80% 用户为非技术人员**——医院管理者、工厂主、旅行社经营者
- 收入分布：1/3 北美、1/3 欧洲、1/3 亚洲

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 核心洞察

- 中小企业正在**跳过 SaaS 周期，直接进入 AI 原生**
- 用户从落地页开始，逐步构建 CRM、ERP、库存管理等关键系统
- "他们非常了解自己的业务，但之前无法接触到高质量的开发团队"
- AI 大幅降低了软件构建成本 → 释放了大量潜在需求

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>为什么多家同类公司都在高速增长？</strong> Nikhil 认为市场存在巨大的"潜在需求"——人们一旦发现有能力自己构建工具，需求就会爆发。最终胜出的将是能交付完整成果的产品。
</div>

---
layout: two-cols
---

# AI原生：非技术用户 → 生产应用

<div class="text-sm mt-4 space-y-2">

**Emergent 的模型策略：**

- 使用**模型路由器**根据请求复杂度自动选择最优模型
- 混合使用前沿模型和开源模型
- 简单任务自动切换到更便宜的模型
- 前沿模型越来越强 + 开源越来越好 → 混合策略效果最佳

**关键趋势：**

- 测试时计算让实际构建成本上升（即使 token 价格不变）
- 需要在可负担性、价格和价值之间寻找平衡点

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./emergent-platform.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 对就业的影响：短期 vs 长期

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 短期：净增加

- "至少短期内，就业在增加"
- 软件变得更便宜 → 对软件的需求加速增长
- 新的基础设施建设（数据中心等）创造了大量岗位
- Sam Altman 也承认："AI 到目前为止是净创造就业的"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 长期：不确定性

- "随着 AI 越来越强大，趋势可能会改变"
- 国际 BPO/呼叫中心岗位面临被替代的风险
- 但印度等地对 AI 的采用非常积极
- 关键区别：AI 创造岗位的速度 vs 替代岗位的速度

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>Emergent 在亚洲的观察：</strong>印度的 AI 采用正在快速加速。与 "90%美国人讨厌AI、90%中国人热爱AI" 的刻板印象不同，印度的态度非常积极——Codex 和 Claude 等工具极受欢迎，人们正在寻找各种使用 AI 加速业务的方式。
</div>

---
layout: default
---

# Saagar Enjeti：预测市场的边界在哪里？

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Kalshi 探索机场延误交易

- 可以理解的对冲逻辑：度假遇到延误很糟糕，何不对冲这个风险？
- **但无法避免的操纵风险：** 全球市场，任何人都可以打电话给当地警方制造延误
- 机场员工拿着接近最低工资的薪水，手机上就装着赌博应用——道德风险巨大

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Polymarket 涉足票房赔率

- 据称违反了美国法律中关于商品市场的规定
- "这就是预测市场目前的现状——什么都想金融化"
- 编剧/excel爱好者圈子里早有纯娱乐性质的"幻想票房"游戏——无需金钱也能提供同样的参与感

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 col-span-2">

### 体育博彩的信息发现论点

<strong>John 的论点：</strong>我即使不参与博彩，也想知道法国队世界杯夺冠的概率——这对观赛体验有价值。<br/>
<strong>Saagar 的反驳：</strong>博彩赔率 ≠ 真实市场概率。庄家根据投注金额调整赔率以对冲风险，大户可以扭曲赔率。AI 完全可以替代这个"信息发现"功能——直接让 AI 阅读所有分析师报告并输出百分比概率，无需任何资金博弈。

</div>

</div>

---

# Saagar's Razor：AI 可以替代预测市场

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg leading-relaxed">
"任何预测市场的正面影响，都可以用强大的 AI 来替代。"
</div>

<div class="text-sm opacity-70 mt-1">— Saagar's Razor（类比 Occam's Razor 奥卡姆剃刀），本期节目提出</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded border-l-4 border-red-500 bg-red-50">

### 预测市场的根本问题

- 博彩赔率不是真实概率——是大户博弈和庄家对冲的结果
- 对绝大多数美国人的巨大伤害（赌博成瘾）远超信息发现的正面效用
- "潜在收益无法为巨大伤害辩护"

</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50">

### AI 的替代方案

- 让 AI 阅读所有分析师报告，自己做研究
- 输出易于理解的百分比概率
- 无需资金博弈、无需操纵风险
- 提供相同的观赛/信息体验

</div>

</div>

---
layout: default
---

# 数据中心：最后的 NIMBY 堡垒

<div class="mt-3 text-sm leading-relaxed">

**Trump 的 Truth Social 发帖**力挺数据中心——称纽约州长 Kathy Hochul "出于政治原因"终止数据中心项目。Silicon Valley 的消息人士显然在他的耳朵里吹风。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 民意现实

- Saagar 认为数据中心是"最后的大众 NIMBY 主义阵地"
- 大多数人已经接受了需要更多住房，但数据中心仍然遭到强烈反对
- **弗吉尼亚州的真实案例：** 数据中心的发电机噪音让附近居民钉上有机玻璃隔音
- "大多数人宁愿输掉 AI 竞赛给中国，也不愿丢掉自己的工作"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 政治角力

- Kevin O'Leary 在 Fox News 指控数据中心反对者被中国收买——Fox 被迫撤回
- Trump 的 "中国牌"未必有效：普通美国人喜欢 Temu 和 Shein
- AI 数据中心的 CapEx 支出正在支撑整个美国股市——Trump 需要它们
- Sam Altman 们不再谈论失业，转而公开修正一年前的预测

</div>

</div>

---
layout: two-cols
---

# 数据中心的民意三角与可能的解

<div class="text-sm mt-4 space-y-2">

**三个角度的张力：**

- 📢 居民：噪声、土地使用变化、被剥夺的控制感
- 🤖 AI公司：CapEx支撑股市、中国AI竞争叙事
- 🏛️ 政客：Trump力挺 vs 州级禁令

**John 的解决方案：直接付款给居民**

</div>

<div class="mt-3 text-sm opacity-80">
如果数据中心每年能产生数十亿美元收入——向附近每位居民每月支付 $500 的切实利益，远比"新增税收→以后会修新校车"这种模糊承诺有效。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./datacenter-tension.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 住房危机：Levittown 模式为何不可能重现

<div class="mt-4 text-sm leading-relaxed">

**Saagar 的历史视角：** 二战后美国通过大规模郊区化解决了住房问题。Levittown 模式——1,500-2,000平方英尺的独栋住宅、人行道、车棚（非车库）、适合家庭社区——在当时是"便宜且可复制的"。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="font-bold text-red-600 text-lg">今天不可能</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">同样的地块和规划规则下，甚至无法合法建造那么小的房子。原始Levittown现在售价$700K——不再是"起步房"。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-600 text-lg">1960年代牧场房</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">北弗吉尼亚：2,500平方英尺的未翻修牧场房，在好学区内要价$100万。需要家庭收入$400K才能负担。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold text-yellow-600 text-lg">开发商逻辑</div>
<div class="text-xs mt-1 opacity-70 leading-relaxed">开发商需要盈利 → 在现有规划框架下为能支付溢价的富裕客户（通常是婴儿潮一代）建造 → 起步房沦为稀缺品。</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>联邦层面的解决方案？</strong> 刚通过住房法案两天——但实际影响有限。真正的改革需要联邦政府像对警察局的"同意判决令"（consent decree）一样，当地方政府阻止足够数量的住房审批时，联邦可以介入并接管审批。但这在政治上几乎不可行。
</div>

---

# 技术体验的两极：Saagar 的"Wow Moment"理论

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
"我在过去20年里只经历过<strong>两次</strong>让我惊叹的科技瞬间：第一次是iPhone 4——我永远忘不了握着它的感觉，"这就是未来"。第二次是Tesla全自动驾驶——12小时公路旅行几乎不用碰方向盘。"<strong>这太了不起了。</strong>"
</div>

<div class="text-xs opacity-60 mt-1">— Saagar Enjeti</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 为什么 AI 还没有给人"Wow Moment"？

- 与 ChatGPT 对话很厉害，但不如物理世界的体验有冲击力
- "它有没有解决我的实际问题？"
- AI 需要一个物理载体（iPhone 4 = 硬件、FSD = 汽车）

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### John 的反驳

- "你刚才笑到流泪了——我们用一个 Codex prompt 给了你一次大笑"
- AI 已经产生了真实的情感影响
- 但 Saagar 的观点仍然成立：物理形态 = 更长久的记忆

</div>

</div>

---
layout: two-cols
---

# Walden Robotics：物理AI走出实验室

<div class="text-sm mt-4 space-y-2">

**Russ Tedrake 的背景：**

- MIT 教授 21年
- Toyota Research Institute SVP of Robotics
- 今年1月创立 Walden
- 首轮融资 $300M

**核心主张：物理AI**

- 不只是给机器人加个 MCP 接口
- 生成模型深入到机器人底层行为控制
- 让机器人更加灵巧、适应性强
- "物理AI的下一课发生在实际部署中"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./walden-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么选择汽车制造商作为合作伙伴？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 不只是资本

- "资本是入场券，但这只是基本条件"
- 机器人需要在规模上制造、分销、营销、保险、全球维修
- 汽车制造商在每个城镇都有经销商网络
- 制造这种复杂度产品的经验无可替代

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 两步战略

- **第一步：通用机器人**——处理此前难以自动化或成本过高的任务
- **第二步：专有机器人**——高价值、高利用率的任务被识别后，专门优化
- "通用机器人最终会制造专有机器人"
- 部署数据是飞轮的核心驱动力

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**为什么是现在？** Russ 等了20年才创业——需要三个条件同时满足：AI能力成熟、资本开始流动、客户意识到变革即将发生。硬件也在同步进步——从1月的一个想法到现在的实体机器人，整个供应链已准备好支持快速迭代。

</div>

---

# 为什么是现在？机器人创业的三个对齐条件

<div class="mt-4 text-sm leading-relaxed">

Russ Tedrake 在 MIT 待了 21 年，为什么<b>现在</b>才创业？他列出了三个必须同时满足的条件：

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 🤖 AI 能力成熟

<div class="text-sm mt-2 opacity-70 leading-relaxed">"我们最初在 TRI 就是一些核心算法的创新者，目睹它们越来越好。"生成模型不只是加一个 MCP 入口——已经深入到机器人底层行为控制。</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 💰 资本开始流动

<div class="text-sm mt-2 opacity-70 leading-relaxed">"资本正在涌入，人才正在涌入。"$300M 首轮融资证明了市场对物理AI的信心。</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 🏭 客户准备好了

<div class="text-sm mt-2 opacity-70 leading-relaxed">"花了很长时间思考不同的商业模式。"从客户的角度看，制造业已经意识到变革即将发生。</div>

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

<b>硬件也在同步进化：</b> 不只是某个执行器或电池的进步，而是整个供应链——从1月的想法到现在的实体机器人运行在办公室，整个生态系统已经准备好支持快速迭代。

</div>

---

# 机器人的单位经济学：为什么选择制造业？

<div class="mt-4 text-sm leading-relaxed">

**Russ Tedrake 的核心逻辑：** 机器人很贵——硬件成本高、AI训练成本高、小规模部署时什么都贵。关键是要找到**利用率极高的场景**。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 🏭 三班倒

<div class="text-xs mt-1 opacity-70 leading-relaxed">制造业可以安排机器人一周7天、全天候运行，最大化单台机器人的产出。</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 📈 规模效应

<div class="text-xs mt-1 opacity-70 leading-relaxed">训练一次模型，部署到大规模机器人舰队。BOM成本随规模下降。</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 💡 高价值工作

<div class="text-xs mt-1 opacity-70 leading-relaxed">制造业的自动化任务价值高，单位经济学天然有利。</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括：</strong> Walden 的策略不是造一个全能机器人，而是找到一个让单位经济学成立的垂直领域（制造业），然后通过数据和规模建立护城河。这与 Tesla 在电动车领域的策略异曲同工——从一个可行的高端场景开始，逐步扩大。
</div>

---
layout: two-cols
---

# 制造飞轮：从通用到专有

<div class="text-sm mt-4 space-y-2">

**四步循环：**

1. **物理AI**驱动通用机器人
2. 通用机器人部署到制造业，处理此前难以自动化的任务
3. 大量部署数据反哺训练，降低成本
4. 识别出高价值任务后，**专有机器人**进行专门优化

**关键合作伙伴：**
Toyota · Boeing · Samsung · Alodex

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./walden-flywheel.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 从 Carlyle 到 Red Cell：VC 孵化的新模式

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Glenn Youngkin 的旅程

- 1995年加入 Carlyle——第一天没有电话、没有电脑
- David Rubenstein 跑过来说"别担心，我们会筹到钱的"
- 33岁时被派往伦敦管理中东、北非、俄罗斯业务
- 25年，最终成为 Co-CEO
- 曾主导史上最大私有化交易之一：Kinder Morgan
- 投资了 Supreme 等标志性消费品牌

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Red Cell 的差异化

- **内部孵化模式：** 创始人本身就是 Red Cell 的一部分，带来规模化资本和运营支持
- **不寻常的创始人画像：** CIA 外勤官员可能才是合适的 CEO——因为他们最了解问题
- **组合公司间技术复用：** 一家公司的技术可以被另一家公司商业化
- Tracy（AI治理层）、Clarus（数据中心节能）、Hunted Labs（安全检测）

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>核心哲学：</strong> "一切都在于领导者。有时有远见的人会带你去一个别人都不理解的地方——但到了目的地后，你会庆幸自己上了这趟车。"这是 Youngkin 在 Carlyle 25年学到的最重要的一课。
</div>

---
layout: default
---

# 数据中心供应链的投资机会

<div class="mt-3 text-sm leading-relaxed">

**Glenn Youngkin 的判断：** 抛开其他不谈，今年将有 **$700B 的数据中心 CapEx** 支出——这是整个经济中最重要的增长驱动力之一。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Clarus：节能

- 重新设计半导体基础设施
- 重新设计功耗路径——无需功率转换，消除关联损耗
- **20-30% 的电力效率提升**
- 对数据中心接受度是"游戏规则改变者"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Trace：AI治理层

- 管理 Agent 之间的信息交互
- 限制性、安全的、可报告的、可审计的
- 已在 Duke 医疗系统中驱动患者数据
- 下一市场：金融服务和金融科技

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Hunted Labs：安全

- 在开放架构 AI 应用中检测恶意第三方
- 找出不应该有访问权限的"俄罗斯坏分子"
- 国家安全领域的直接应用

</div>

</div>

<div class="mt-3 text-sm opacity-70">
Youngkin 邀请下次深入讨论 AI 带来的工人岗位替代问题——"这是一个我很想和你们深入讨论的话题。"
</div>

---

# 从 Kinder Morgan 到 Supreme：领导力即一切

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
"在 Kinder Morgan 交易中，我记了厚厚一本笔记——关于如何服务客户、如何培养人才、如何开拓新市场。Rich Kinder 是我见过的最伟大的商业建设者之一。"
</div>
<div class="text-xs opacity-60 mt-1">— Glenn Youngkin 谈他职业生涯中的突破性交易</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 国际扩张的教训

- 在日本：最早进入的非日本 PE 公司之一，后来成为最大市场之一
- **关键策略：** 雇佣本地人才 + 保持一致的价值观 + 放手让他们去做
- "国际增长做得好可以带来巨大成功，做不好可以毁掉一家好公司"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Supreme 交易

- 当时很多同行不理解：PE 买街头潮牌？
- Culyle 在消费品牌上早有布局（Golden Goose 等欧洲交易）
- "资本解锁机会：没有资本，增长不会这么快"
- Youngkin 把它挂在墙上——"Carlyle 史上最好的交易之一"

</div>

</div>

---
layout: default
---

# AI工具民主化：从 Terminal 到 Desktop

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 过去：OpenClaw 的门槛

- 需要设置 agentic workflows、配置终端环境
- 技术用户才能发挥全部能力
- 跳过多重门槛才能获得"计算机使用"级别的 AI 体验

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 现在：App 一键安装

- ChatGPT App（Mac/iOS）已完全 Codex 化
- 远程连接电脑 → AI 直接操作浏览器、打开邮件
- "你永远不会看到终端窗口"
- 下一波消费者正在跨越鸿沟——无需任何技术背景

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关键转变：</strong> AI 从"需要配置的工具"变成了"可安装的 App"。这正在将 Agent 式的计算机使用能力带给从未接触过终端的普通消费者。
</div>

---
layout: default
---

# 行业快照：AI 硬件与开源浪潮

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### OpenAI 首款消费硬件：AI 伴侣音箱

- 无屏幕、可移动、带摄像头和传感器
- 由 GPT Live 实时语音模式驱动
- **Johnny Ive** 参与设计
- 目标是越来越个性化——了解用户习惯，访问个人邮件
- 计划 2026 年发布，2027 年上市
- OpenAI 正在开发约 **5款** AI 设备

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Anthropic Inkling：开源多模态

- Anthropic Thinking Machines 发布
- **开放权重**（Open Weight）
- 跨文本、图像、音频模态的高效推理
- 可在 Hugging Face 获取完整权重
- 标志着 Anthropic 在开源方向的重要一步

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Atheon Fund：AI 驱动的对冲基金

- George Kailas 创立，计划 2026年8-9月上线
- 信号库 + LLM → 数千条策略 → 智能组合
- 关注数据容器化（data containerization）等新兴方法
- 医疗领域成为新的另类数据来源

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 其他快讯

- 🦖 Gus the T-Rex：Sotheby's 以 **$50.1M** 售出，恐龙拍卖纪录
- 📚 书籍阅读：20%的成年人读了 80% 的书（幂律分布）
- 🎬 Paramount 考虑搬离加州——Tennessee 在争取
- 🧀 意大利奶酪证券化：最老乳制品厂通过 SPV 借款 €10M

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"Sheil Monat posted in February of 2026: 'So who's buying PayPal?' — it has the opportunity of being one of the great distressed value opportunities in FinTech history."
<div class="text-xs opacity-60 mt-1 not-italic">— TBPN 主持人引用 Shiel Monat 的判断，揭示 PayPal 作为困境资产的价值</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"Culture fit makes them a non-starter."
<div class="text-xs opacity-60 mt-1 not-italic">— Shiel Monat 对 Stripe 和 Apple 收购 PayPal 文化风险的判断</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"They would rather lose the AI race to China than lose their own job."
<div class="text-xs opacity-60 mt-1 not-italic">— Saagar Enjeti 概括普通美国人对数据中心的态度</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"I was 33. I had a chance to go over and run our London office — Middle East, North Africa, Russia. I had some really new territories that I'd never been to before."
<div class="text-xs opacity-60 mt-1 not-italic">— Glenn Youngkin 谈 Carlyle 早期的国际扩张经历</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"I think most of the interesting things going on are in signal compression — one of the smartest guys I know on Wall Street is starting a firm that is focused on data containerization."
<div class="text-xs opacity-60 mt-1 not-italic">— George Kailas（Atheon Fund）谈量化投资的数据新范式</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"They are going to just skip the SaaS cycle and move to the AI cycle directly."
<div class="text-xs opacity-60 mt-1 not-italic">— Emergent 的 Nikhil 预测中小企业将跳过传统 SaaS 采用路径</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"It's not just here's one job that we couldn't automate before. This is completely going to change the equation for how we think about production."
<div class="text-xs opacity-60 mt-1 not-italic">— Russ Tedrake（Walden Robotics）谈物理AI对制造业的根本性影响</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"Don't worry, we're going to raise some money. It's going to be okay."
<div class="text-xs opacity-60 mt-1 not-italic">— David Rubenstein（Carlyle 联合创始人）在 Youngkin 入职第一天跑过他的办公室时说的第一句话</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">

TBPN · 2026年7月15日

</div>

<div class="mt-4 text-sm opacity-50">

更多科技财经深度内容，访问 tbpn.com

</div>
