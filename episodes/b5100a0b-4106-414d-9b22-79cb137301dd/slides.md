---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Robot Bans, Zuck Op-Ed, eBay Settles | Joe Weisenthal, Jameson Detweiler, Stanley Tang, Amjad Masad, Adam Cohen'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 机器人禁令 · AI 监管 · 硬件创新

<div class="pt-4 text-lg opacity-70">
一场跨越地缘政治、AI 监管、硬件创业和平台经济的多维度对谈
</div>

<div class="pt-8 text-sm opacity-50">
TVPN · 2026 年 7 月 29 日 · 嘉宾：Joe Weisenthal, Jameson Detweiler, Stanley Tang, Amjad Masad, Adam Cohen
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>美国禁止中国机器人进口</strong><br/>
<span class="opacity-70">FCC 以供应链安全为由封禁中国产人形机器人与机器狗，中国占全球市场 85%</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Zuck 在 WSJ 发公开信</strong><br/>
<span class="opacity-70">直指 AI 末日论为"恐惧营销"，主张加速发展而非限制——与业界公开信针锋相对</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AI 市场结构焦虑</strong><br/>
<span class="opacity-70">Joe Weisenthal 分析：全行业在"祈祷寡头而非垄断"，Nvidia 的噩梦是只剩一两个客户</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>硬件创新涌现</strong><br/>
<span class="opacity-70">Chip $15K 低速电动车、DoorDash Air 无人机配送获 FAA Part 135 认证</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>AI 工具民主化</strong><br/>
<span class="opacity-70">Replit 进入"后提示词时代"：用点击代替 prompt 做设计；Weave 用路由器将 token 成本降 80%</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>eBay 蟑螂骚扰案和解</strong><br/>
<span class="opacity-70">$5600 万赔偿：高管因博主批评公司竟邮寄活蟑螂、葬礼花圈，7 名员工被判刑</span>
</div>

</div>

---

# 美国禁止中国人形机器人进口

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### FCC 禁令要点

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>范围</strong>：禁止新进口外国制造的人形机器人、四足机器人（机器狗）
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>理由</strong>：FCC 主席 Brendan Carr 称此举旨在 "secure America's critical supply chains"（保障美国关键供应链）
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>中方回应</strong>：中国谴责该决定为保护主义
</div>

</div>

</div>

<div>

### 市场背景

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
2025 年全球出货约 15,000 台人形机器人，中国宇树（Unitree）和智元（Agibot）各交付约 5,000 台
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
美国 Tesla、Figure 等公司各出货仅数百台
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
中国估计控制全球人形机器人市场约 85% 份额及大部分深层供应链
</div>

</div>

</div>

</div>

<div class="mt-4 text-xs opacity-50">
数据来源：Associated Press 报道，节目中引用
</div>

---

layout: two-cols
---

# 机器人禁令：市场格局

### 禁令的特殊之处

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这次禁令针对的是一项<strong>如此早期</strong>的技术，以至于没有企业联盟站出来说"我的业务依赖它"——这与对中国 LLM 的反应截然不同
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
云服务商已经在从中国模型上赚钱，因此对 LLM 禁令有强烈反对；但人形机器人还没有形成既得利益集团
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robot-market.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 地缘政治与产业影响

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 关键问题

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
禁令预计将为 9 月习近平与特朗普的会晤增添新的紧张因素
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
Waymo 模式或为参考：零部件从中国采购，但在美国组装，所有软件由 Alphabet 掌控——以此维持网络安全姿态
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
Elon Musk 向 The Economist 描绘了清晰的 Optimus 愿景——美国机器人产业比 AI 大模型更脆弱，如果缺少巨大的资本和意志力推动，可能永远不会发生
</div>

</div>

</div>

<div>

### 是否会加速美国市场？

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
1X、Figure、Sanctuary Robotics 等已融资数亿至数十亿美元，资本并非瓶颈
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
真正的问题是：<strong>人形机器人的盈利性用例在哪里？</strong>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
Tao Robotics 在旧金山推出人形机器人清洁服务，$30/小时——与人工价格相当，由人类远程操作 + AI 联合控制
</div>

</div>

</div>

</div>

---

# Zuck 在 WSJ 发表公开信：加速 AI，不要限制

<div class="mt-4 space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>核心主张</strong>：美国应该加速 AI 发展，而非限制它。AI 的未来属于每一个人。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed italic">
"It is surprising that the discourse from many of those who are developing artificial intelligence is so filled with doom. I don't understand why anyone who believes that AI will eliminate most jobs and much of humanity's relevance would rush to build that future."
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>核心理念</strong>：AI 带来的丰裕可以被所有人共享——"the abundance of the future can be shared by everyone"
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>隐含挑战</strong>：如果你认为 AI 如此危险，那就别做这行——让我来做。
</div>

</div>

<div class="mt-3 text-xs opacity-50">
来源：Mark Zuckerberg, Wall Street Journal op-ed，2026 年 7 月
</div>

---

# Zuck 是 AI 乐观主义的最佳信使吗？

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 优势

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
Meta 每月在前沿 AI 上花费 <strong>10 亿美元</strong>，部署给 10,000 名员工使用——他比任何人都清楚 ROI 层面的真实情况
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
他没有在 2019 年没人关心 AI 时就上播客谈论 AI 末日——所以可以站出来说"会很棒"
</div>

</div>

</div>

<div>

### 劣势

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
普通人对社交媒体的看法已经恶化——伤害青少年心理健康、消耗注意力——Zuck 作为信使自带包袱
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
对比：一边是做了十年 AI 研究的"末日派"，另一边是三年前还在谈元宇宙的人——用直觉判断，你会信谁？
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
Joe Weisenthal 的观察：Zuck 这篇文章的语气让人想起 2010 年代初人们对社交媒体的那种乐观——已经十多年没读到过了
</div>

</div>

</div>

</div>

---

# 开源模型公开信：谁签了，谁最后签

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 第一批签署者

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>Nvidia</strong>：噩梦场景是只剩一两个大客户，形成买方垄断
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>Microsoft、Meta</strong>：在 LLM 领域客观落后于前沿
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>ServiceNow 等应用层公司</strong>：担心将来要给最先进的模型交"税"
</div>

</div>

</div>

<div>

### 最后签署者

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>OpenAI、Alphabet</strong>：接近前沿但可能落后于最先进模型
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Apple、Amazon</strong>（迟迟未签）：拥有实体业务（仓储、硬件），对 AI 颠覆相对不那么焦虑
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
Ben Thompson 的观点：Apple 和 Amazon 从开源模型中获益，但物理产品线给了它们缓冲
</div>

</div>

</div>

</div>

<div class="mt-3 text-xs opacity-50">
作者概括：签署顺序高度吻合各公司的商业利益——落后者+供应商先签，前沿者最后签
</div>

---

layout: two-cols
---

# AI 市场结构：全行业在"祈祷寡头"

### Joe Weisenthal 的核心分析

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>深层焦虑</strong>：我们从未真正准备好面对"一家或两家公司彻底跑赢"的局面
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed italic">
"I think we're really not psychologically or sort of as an economy really equipped to think about what if one or two of these companies just runs away with it."
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
前沿公司已经在自研芯片、与多家芯片商合作——主动降低对 Nvidia 的依赖
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-market-spectrum.excalidraw"
  class="w-[450px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 资本支出：没有尽头的军备竞赛

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 市场焦虑

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
投资者看不到自由现金流损失何时结束——没有人能说出 Alphabet 恢复正现金流的日期
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
韩国芯片股（SK Hynix 等）最近三周暴跌——尽管季度利润创纪录增长 500%+
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
整个市场定价到完美，稍有风吹草动就触发抛售
</div>

</div>

</div>

<div>

### 两难困境

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
即使当前 AI 业务在经济上不划算，你也不能停止投入——因为你的竞争对手会造出更强的模型，然后你就出局了
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
AI 行业收入在增长——从广告支持到 $10/$200 订阅再到每月 $10 亿 token 消费——需求是真实的，不是循环空转
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
但如果有另一个 10 倍甚至 100 倍的 capex 增长，世界上可能没有足够的钱
</div>

</div>

</div>

</div>

---

layout: two-cols
---

# 计算成本可能不降反升

### Dwarkesh Patel 的警告

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
过去两年的 stylized fact：token 价格从 GPT-3 时代暴跌 99.9%。但这可能不是铁律——<strong>存储芯片价格也曾被认为只会下降，直到它逆转</strong>。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
如果计算价格大幅上涨，我们目前用 AI 做的<strong>几乎所有经济行为</strong>都可能变得不划算。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
但即便如此你也不能退出——竞争对手造出更强的模型，然后从<strong>网络安全层面</strong>摧毁你。
</div>

</div>

<div class="mt-3 text-xs opacity-50">
Joe Weisenthal 的框架——这是 Dwarkesh 的核心担忧
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compute-cost-paradox.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 话语的战场：Twitter

<div class="mt-4 space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Joe Weisenthal 的观察</strong>：关于中国开源模型的整个政策讨论，几乎可以追溯到<strong>一条推文</strong>——有人说 Kimi 3 在前端设计上表现极好。从那一条推文开始，一路演化到白宫和各公司必须就开源模型表态。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
每次新模型发布后的评价循环：有人发推说"我用了 XX 模型 8 小时，从没见过开源模型这么强"→ 2000 转推 → 市场反应。也许我们都应该少刷 Twitter，多读 benchmark 报告。
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
这些讨论的传播路径高度集中于 X（Twitter），而非 LinkedIn、Instagram 或其他平台。AI 从业者离职公告、公开信签名、行业辩论——这一切都发生在 X 上。
</div>

</div>

---

# 社交媒体：成瘾还是价值？

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 成瘾性问题

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
当你的工作就是社交媒体时，很难区分"成瘾"与"工作"——主播每天直播 3 小时，这是他谋生的方式
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
最难的不是完全断网或全天在线，而是<strong>中间地带</strong>——有太多东西需要回应、太多问题等着你的观点
</div>

</div>

</div>

<div>

### 价值与多元输出

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
拥有多种输出渠道（播客、文章、推文）是一种保护——当一种形式不顺时，可以转移到另一种
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
Joe Weisenthal：AI 让人们重新开始阅读哲学——这是技术带来的积极副产物，容易被忽视
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
亿万富翁也无法抗拒在线上被倾听的冲动——金钱和权力很好，但他们真正渴望的是被世界上的某个人听见
</div>

</div>

</div>

</div>

---

# eBay 蟑螂骚扰案：$5600 万的教训

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 事件始末

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>起因</strong>：David 和 Ina Steiner 夫妇运营电商博客 EcommerceBytes（自 1999 年起为卖家发声），批评了 eBay
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>升级</strong>：时任高管 Devin Wenig 发短信说要 "crush the Steiners" 并 "take her down"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>手段</strong>：邮寄活蟑螂、血腥猪头面具、葬礼花圈、丧偶生存指南；在邻居名下订阅成人杂志；在网上发布邀请陌生人到他们家进行性行为的帖子
</div>

</div>

</div>

<div>

### 结局与教训

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>刑事</strong>：2020 年 7 名员工被判 1-5 年监禁；eBay 2023 年认罪并支付 $300 万刑事罚款
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>民事和解</strong>：夫妇获赔 $4800 万 + $600 万慈善捐款 + Wenig 个人支付 $100 万言论自由慈善基金
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>终极 Streisand 效应</strong>：如果没有这场骚扰，没人会听说 EcommerceBytes 或他们对 eBay 的批评
</div>

</div>

<div class="mt-3 text-xs opacity-50">
来源：AP 报道，节目中引用。eBay 已于 2019 年更换高管团队。
</div>

</div>

</div>

---

# Chip：$15,000 的低速电动"第二辆车"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 车辆定位

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>CEO Jameson Detweiler</strong>，前 Tier Mobility / Phantasma（被收购），深耕出行领域
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
电动低速多用途车（LSV）：4 座、最高时速 25 mph、续航 100 英里、四轮驱动四轮毂电机
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
定位：<strong>理想的第二辆车</strong>——"美国人与汽车的恋情正在消退，一切太贵了"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
可定制性强：冲浪板架、L-Track 轨道、软顶/硬门/HVAC 可选配件
</div>

</div>

</div>

<div>

### 市场洞察

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
高尔夫球车在疫情期间"逃出"高尔夫社区——年轻家庭在阳光带地区成为增长主力
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
高尔夫球车公司"睡得太死"——只有 6 个颜色选项，几乎无法定制
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
Chip 将自己视为<strong>球鞋文化公司</strong>而非传统汽车公司——通过社区、营销和参与方式创新
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
安全超出法规要求：主动安全功能（摄像头+传感器），为实际运行速度设计碰撞保护
</div>

</div>

</div>

---

layout: two-cols
---

# Chip 的自主驾驶哲学：先解决停车

### 不是 FSD，而是自动泊车

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>核心洞察</strong>："Chip 开起来很有趣，但停车从来不是"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
当前实现方式：<strong>远程人工操控</strong>——无人在车内时低速行驶；迈阿密试点计划即将启动
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
更安全的渐进路径：先在无乘客时验证安全性 → 再载人 → 最终实现完全自主
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./chip-autonomy-ladder.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么现在是车辆创业的时机？

<div class="mt-4 space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>消费者行为转变</strong>：传统"一辆车表达一切"的模式正在瓦解。通勤车越来越同质化（Model 3 格式），但"第二辆车"市场正在打开——它可以是完全不同的表达。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>杠铃效应</strong>：一边是同质化的标准通勤工具，另一边是完全个性化的周末车。Chip、Slate（皮卡）、Ample（度假村）同时涌现并非巧合。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>大公司无法快速跟进</strong>：福特 25 年前就有类似产品（Ford Think），但大公司被现金牛产品束缚——工程、销售、营销方式都需要彻底改变。Chip 更接近"球鞋文化公司"的运营逻辑。
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>Paul Graham 的建议</strong>：设计要大胆到让 Apple 无法复制——这恰好是 Chip 的策略。即便竞争对手在相同供应链上，品牌转型的代价太高。
</div>

</div>

---

# DoorDash Air：无人机配送正式起飞

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 核心里程碑

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>FAA Part 135 航空承运人认证</strong>：美国第 8 家获得该认证的无人机配送公司——现在可以合法进行商业无人机配送
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
与 DoorDash Dot（人行道机器人）同属 DoorDash Labs 团队，已研发近 8 年
</div>

</div>

</div>

<div>

### 为什么是现在

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>AI 加速</strong>：5 年前不可能的事情现在模型能处理了——从经典启发式方法到 AI/ML 方法的转折点
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>硬件进步</strong>：NVIDIA Thor 等芯片可以在设备端运行强大的 AI 模型；供应链因机器人和物理 AI 热潮获得大量投资
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>运营经验</strong>：8 年积累——从"让无人机飞起来"到"构建端到端商业化系统"
</div>

</div>

</div>

</div>

---

layout: two-cols
---

# DoorDash 多模式配送：不是"或"，而是"且"

### 端到端系统

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
无人机不只是会飞的硬件——需要连接 DoorDash 的市场网络、商户、消费者
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
配套基础设施：Smart Scale（智能秤，验证订单重量是否符合无人机限制）、商户取货接口、消费者交付体验
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
感知系统处理不同商户场景（独立店 vs 商业街 vs 屋顶）和消费者交付位置精确坐标
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./doordash-multimodal.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# DoorDash 的郊区哲学：无人机与 Dasher 的分工

<div class="mt-4 space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>与 DoorDash 原始策略一致</strong>：13 年前在 Palo Alto 郊区起步（当时叫 PaloAltoDelivery.com，8 张 PDF 菜单 + Google Voice 号码），与主流观点认为"外卖应该在密度最高的地方开始"相反
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>无人机最适合郊区</strong>：独栋住宅是完美的投递场景（前门廊或后院）；3-10 英里范围，无需等红绿灯；15 分钟送达咖啡（原来需要 45-60 分钟）
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>分工逻辑</strong>：无人机 → 郊区独栋 / Dot 机器人 → 平坦路面 / 人工 Dasher → 高层公寓、复杂杂货订单、有楼梯的场景
</div>

</div>

<div class="mt-3 text-sm opacity-70">
Stanley Tang（DoorDash 联合创始人 & CPO）："每次配送都不一样，关键在于构建这个多模式系统。"
</div>

---

# Replit：进入"后提示词时代"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### AI 设计新范式

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Replit Design</strong>：首个纯多模态设计产品——评估所有模型，不同模型擅长不同领域（SVG / 动画 / CSS）
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Ambient Intelligence（环境智能）</strong>：通过点击而非 prompt 进行设计——集成 Mobbin 情绪板，拖拽灵感、点击生成变体
</div>

</div>

</div>

<div>

### CEO Amjad Masad 的洞察

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
Kimi K3 是第一个真正"思考设计"的模型——如果你读它的推理轨迹，它在思考页面结构、布局和美学
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
大多数人有品味但无法表达——"我想要粗野主义风格"不是普通人会说的语言。点击比 prompt 更自然
</div>

</div>

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
Amjad Masad: "我们正在进入一个 prompt 不再需要的时代... 人们真正不擅长 prompt，我们经历了从代码（低级）到 prompt（更高级但仍然低级）的转变。人们思考的方式是指定意图——我想要我的销售线索在 5 分钟内得到回复——然后由 agent 自己去解决。"
</div>

---

# Replit 的企业增长与模型路由

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 企业增长最快

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
企业客户说这是"最有影响力的工具"——不是那种节省 10-15 分钟的工具，而是<strong>将整个工作流程从 20 小时/周降到 0</strong>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
深度技术栈：托管、部署、安全 agent、管理控制——Replit 提供的不仅是一个编码界面
</div>

</div>

</div>

<div>

### 模型路由需求

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
企业在要求<strong>用户和组级别的模型粒度控制</strong>：设计师用 Kimi，前端用另一个模型
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
企业对大 AI 实验室的锁定策略有深刻不信任——"token maxxing"让人们被烧伤过
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
Replit 的模式化 guardrails：设计模式下 agent 就是设计师，不会跑偏
</div>

</div>

</div>

</div>

---

# Weave：提示词路由器的商业逻辑

<div class="mt-4 space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>CEO Adam Cohen</strong>：YC alumni，公司成立不到两年，刚获 Standard 领投的 <strong>$1350 万融资</strong>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>核心洞察</strong>：Opus 4 之后，人们意识到并非每个任务都需要最好的模型——编码占 AI 支出的 80%。Weave 构建提示词路由器，将 prompt 自动路由到最具成本效益的模型，部分公司节省 <strong>高达 80%</strong> 的成本
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>目标客户</strong>：企业 CTO——初创公司即使每个工程师每月花 $5K-$10K，也不太关心 token 优化；大企业才会在乎
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>路线图</strong>：从路由到微调——已经提供路由反馈机制，路由器可以学习用户偏好；未来可能实现 per-organization 级别的 RL 微调
</div>

</div>

---

# AI 的能力边界：尖刺更尖，但更不通用？

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

### 乐观叙事

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Stanley Tang</strong>："我们现在看到的 AI，大概是你这辈子见过最笨的版本。"
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
从经典启发式到 AI/ML 的转变，让机器人、无人机等物理 AI 应用突然之间开始 work
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>Amjad Masad</strong>："我写了一辈子代码，从没训练过机器学习模型。现在我在训练象棋模型。"——AI 正在赋能从未做过 AI 的人
</div>

</div>

</div>

<div>

### 怀疑叙事

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Adam Hunt</strong>（剑桥进化精神病学 PhD）：从看多转为看空——"继续训练和扩展模型会导致广泛新能力"的论断是错误的
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
最近的模型<strong>没有变得更通用，反而更不通用</strong>——语言输出质量相比 O3 大幅下降
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
优化代码和网络安全可能正在<strong>缩小</strong>模型的广泛能力
</div>

</div>

</div>

</div>

---

layout: two-cols
---

# 两种 AI 能力演进假说

### 辩论焦点

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>反方观点</strong>：我们只是选择不优化社会推理——不是模型做不到，而是社会推理的商业价值不够大
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>象棋 bench 案例</strong>：GPT 5.5 和 Gemini 3.1 Pro 的 ELO 仅刚过 1000（远未超人类），但让模型自己写象棋引擎就能达到超人类水平
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
关键区别：模型自己做 vs 模型写代码让工具做——这两者本质上是同一件事
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spiky-intelligence.excalidraw"
  class="w-[450px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 赋能的真实故事

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 被忽视的叙事

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>$50,000 债务清零</strong>：一位 Replit 用户在聊天中分享——两年前欠债 $50K，在餐厅遇到企业主就用 Replit 实时给他们做产品，最终摆脱债务
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
Amjad Masad 的呼吁：AI 的叙事被彻底扭曲了——政客和辩论在谈失业和支出，但这些赋权故事没有被讲述
</div>

</div>

</div>

<div>

### 被 AI 改善的日常

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
Joe Weisenthal 的例子：用 ChatGPT 把往返机票改成三段航程——"本来很焦虑的事情变得很简单"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
人们开始重新创作音乐、阅读哲学——这些"小确幸"在末日叙事中被淹没了
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
"大家 doom 得这么厉害，但通常我们对未来的预测都很糟糕——应该对右尾场景保持开放心态"
</div>

</div>

</div>

</div>

---

# 宏观经济背景

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 美联储

<div class="text-3xl font-bold text-red-600 my-2">维持利率</div>
<div class="text-xs opacity-70">3 名官员投票支持加息，显示内部分歧加剧</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 道琼斯

<div class="text-3xl font-bold text-yellow-600 my-2">-1100 点</div>
<div class="text-xs opacity-70">投资者担忧美联储下一步行动</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 能源

<div class="text-3xl font-bold text-blue-600 my-2">油价上涨</div>
<div class="text-xs opacity-70">能源价格推动通胀压力</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### SK Hynix

<div class="text-3xl font-bold text-green-600 my-2">利润 +500%</div>
<div class="text-xs opacity-70">但股价依然跌 10%——预期定价过高</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### AI 实验室

<div class="text-3xl font-bold text-purple-600 my-2">收入激增</div>
<div class="text-xs opacity-70">Gavin Baker：过去 6 周的数据会让公开市场震惊</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 公开市场 vs 私募

<div class="text-3xl font-bold text-orange-600 my-2">脱节</div>
<div class="text-xs opacity-70">私募 AI 公司最佳 6 周 vs 零售/AI 芯片最差 6 周</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-xs opacity-50 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"It is surprising that the discourse from many of those who are developing artificial intelligence is so filled with doom."
<div class="text-xs opacity-50 mt-1 not-italic">— Mark Zuckerberg, WSJ op-ed, 2026 年 7 月</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"I think we're really not psychologically or sort of as an economy really equipped to think about what if one or two of these companies just runs away with it."
<div class="text-xs opacity-50 mt-1 not-italic">— Joe Weisenthal, Bloomberg Odd Lots 主播</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"The nightmare scenario for Nvidia... is that it basically has... one or two labs break so far from the pack that it's just almost monopsony conditions."
<div class="text-xs opacity-50 mt-1 not-italic">— Joe Weisenthal 分析公开信签署次序</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"I've never trained a machine learning model. Now I'm training models... There's nothing I cannot do."
<div class="text-xs opacity-50 mt-1 not-italic">— Amjad Masad, Replit CEO</div>
</div>

</div>

---

# 核心金句（二）

<div class="space-y-2">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"What we see now is probably the dumbest version of what you'll ever see."
<div class="text-xs opacity-50 mt-1 not-italic">— Stanley Tang, DoorDash 联合创始人 & CPO</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"We talk a lot internally about the post-prompting world... I think we're entering a period where prompting is no longer needed."
<div class="text-xs opacity-50 mt-1 not-italic">— Amjad Masad, Replit CEO</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"The American love affair with the car is dying. Everything's too expensive."
<div class="text-xs opacity-50 mt-1 not-italic">— Jameson Detweiler, Chip CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"In a lot of ways, I think of us more like a sneaker and culture company than I do about a car company."
<div class="text-xs opacity-50 mt-1 not-italic">— Jameson Detweiler 谈 Chip 的品牌策略</div>
</div>

</div>

---

# 从地缘政治到个人赋权

<div class="mt-6 space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
这一期 TVPN 横跨了美国机器人禁令的宏观地缘政治、AI 行业的结构性焦虑、到个人开发者用 Replit 摆脱 $50K 债务的微观赋权故事。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
贯穿始终的主题：<strong>技术正在同时向两个方向拉扯</strong>——一方面是国家间的技术冷战和行业垄断焦虑，另一方面是个人创造力的空前释放。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
Joe Weisenthal 最后的提醒：我们可能都对未来预测得很糟糕。保持对"右尾场景"的开放心态——那些事情变好的可能性——同时保持对垄断和网络安全风险的警惕。
</div>

</div>

---

layout: end

# 谢谢观看

<div class="mt-8 text-sm opacity-60">
TVPN · 2026 年 7 月 29 日
</div>

<div class="mt-4 text-sm opacity-50">
完整对谈可在 TVPN 播客收听
</div>
