---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Chopping Block: Is Strategy the Luna for Suits?, ETH Labs Shakeup & CME vs Perps'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Strategy 是穿西装的 Luna？<br>ETH 实验室重组 & CME 对决永续合约

<div class="opacity-60 mt-6 text-lg">
Haseeb Qureshi · Tom Schmidt · Tarun Chitra · Laura Shin
</div>
<div class="opacity-50 mt-2 text-sm">
Dragonfly 合伙人 · Gauntlet 创始人 · Unchained 主持人
</div>
<div class="opacity-40 mt-2 text-xs">
The Chopping Block · 2026 年 6 月
</div>

---

# 为什么这期值得关注？

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Strategy 的 Stretch 危机</strong><br/>
Saylor 的优先股从 $100 跌到 $82，市场信心动摇。"Luna for suits"——穿西装的算法稳定币？
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>EF 大裁员 & ETHLabs 诞生</strong><br/>
以太坊基金会裁掉 20% 员工，核心成员另起炉灶——权力从"修道院"向"教会生意"转移。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>CME 起诉 CFTC</strong><br/>
芝加哥商品交易所起诉自己的监管机构，试图扼杀永续合约。前主席告现任主席——"为不竞争而战"。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Meta 进军预测市场</strong><br/>
Zuck 第三次尝试预测市场——但这次的逻辑不同：他看中的不是交易费，而是眼球。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>投资者 vs 信仰者</strong><br/>
四个故事围绕同一个张力：当加密资产的"管理者"开始做决策，你买的到底是去中心化承诺，还是别人的商业判断？
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>加密需要这些"无聊"的辩论</strong><br/>
资本结构、组织治理、监管分类、商业模式——加密行业正在从车库走向董事会，而这些正是必经之路。
</div>

</div>

---

# Strategy：从"比特币爸爸"到"对冲基金"

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 背景：什么是 Stretch（STRC）？

- Saylor 发行优先股来融资买比特币——目标价格 $100，年分红约 10.5%
- 几周前 Saylor 卖了 **32 个比特币**（约 $250 万），市场受惊
- STRC 从 $100 一路跌到 **$82~$87**——隐含收益率从 10% 跳到约 **14%**

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 市场在说什么？

<div class="grid grid-cols-2 gap-3">
<div>
<strong>表面数字</strong><br/>
• 持有 $550 亿比特币<br/>
• $14 亿现金储备<br/>
• 宣称有 32 年分红覆盖
</div>
<div>
<strong>市场信号</strong><br/>
• 折价交易 → 违约风险从 ~1% 升到 ~8-10%<br/>
• "如果你相信他永远付得起分红，这东西就该回到 $100"<br/>
• <strong>它没回去。</strong>
</div>
</div>

</div>

</div>

---

layout: two-cols
---

# Saylor 困境：资本金字塔

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Trilemma：每一步都在伤害某人

Strategy 的资本结构意味着：**无论 Saylor 做什么决策，总会伤害某一方。**

</div>

- **发更多普通股** → 稀释现有股东 → 股价下跌 → STRC 更危险
- **卖比特币付分红** → 冲击币价 → 他最大的资产缩水
- **不发新股、不卖币** → 现金只够付一年分红
- **推迟分红** → STRC 归零 → 再也融不到资

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>Laura 的判断：</strong>"他们把自己逼进了角落。不再是简单的'比特币爸爸'，更像一个对冲基金——你赌的是他们的管理能力，而非比特币本身。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./strategy-capital-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Luna for Suits"——穿西装的算法稳定币？

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### Tarun 的观点：结构上的相似

- **Luna**：通过改变通胀来维持 UST 锚定——稀释 LUNA 持有者
- **Strategy**：通过增发普通股/卖币来维持 STRC 分红——稀释普通股东
- 两者都是"通过压低一方来保住另一方的目标区间"
- **"Luna for suits, not Luna for degens"**——同样的机制，穿上了华尔街的西装

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### Hasib 的反驳：关键差异

- **Luna 是必死的**——智能合约强制清算，无人能按暂停键
- **Saylor 可以无限期推迟 STRC 分红**——"burn the boat, push it off to shore"
- 这不是死亡螺旋：Saylor 可以止损，然后继续持有 $550 亿比特币
- 后果？他再也不能发 STRC 融资——"就像宣布破产，七年没有信用"

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 text-sm leading-relaxed">

### Laura 的裁决："更像阿根廷违约，而非 Luna 时刻"

可控的小问题 + 一连串糟糕的决策。真正受伤的是<strong>信心</strong>——而这恰恰是这类结构最需要的资产。

</div>

</div>

---

# Saylor 的逃生舱：Burn the Boat

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### 最坏情况的退出方案

如果 STRC 确实无法维持：

1. Saylor **无限期推迟分红**——他有权这么做
2. STRC 跌至地板价，等同于普通股——持有者血亏
3. 比特币可能跌一波（少了一个边际买家）——但这是一次性事件
4. Saylor 继续持有 $550 亿比特币——"just an honest Bitcoin dad again"

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm leading-relaxed">

### 为什么这不是 Luna 式死亡螺旋？

<strong>Hasib 的核心论点：</strong>"There's no debt spiral, there's no margin calls, there's no nothing." 

- Luna 的机制是<strong>自动的、不可逆的</strong>——代码强制印 LUNA 买回 UST
- Strategy 是<strong>人工决策的</strong>——Saylor 可以选择止损，没有合约强迫他
- 区别在于：**代码里没有逃生舱，但公司法里有。**

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 text-sm leading-relaxed">

### 但如果他真的推迟分红……

- 他会"burn the boat, push it off to shore"——烧掉融资工具，保全核心资产
- 代价：永远失去 STRC 这个融资渠道
- "就像宣布破产——七年没有信用"

</div>

</div>

---

# 回到比特币的初衷

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 比特币的"反管理"承诺被打破了

**Laura 的观察：**
- 比特币 = 去中心化，你不必信任任何管理者
- 但买 MSTR 股票 = 你信任 Saylor 的管理判断
- 最初 MSTR 被宣传为"让你在退休账户里持有比特币的 wrapper"
- 现在它变成了一个正在做复杂资本管理的对冲基金
- <strong>很多早期买入者可能没意识到自己签的是什么。</strong>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Hasib 的务实回应

"如果现在才意识到 MSTR 不是被动持有比特币的工具——你在干什么？ETF 已经存在好几年了。你超出了投资者保护的范畴。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 深层问题

加密行业正在创造越来越多<strong>"看起来像去中心化，但依赖中心化管理"</strong>的结构。这不是 bug——这是加密与传统金融融合的必然摩擦。

</div>

</div>

</div>

---

# 以太坊基金会：大裁员 & 权力转移

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 发生了什么

- **ETHLabs 成立**：EF 的 7 名核心成员（Barnabe、Josh Stark、Ansgar、Dietrichs 等）独立出来，成立新的非营利组织
- **EF 裁员 20%**：在 ETHLabs 宣布的第二天，EF 宣布裁掉约 50 人
- **前联合总监 Xiaowei Wang** 也在一周前离职
- ETHLabs 获得来自 BitMEX、SharpLink、Joe Lubin（个人）、SZ 等商业来源的资助

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### ETHLabs 的定位

- 专注于**采用、DeFi、市场、应用层**
- 负责"协议经济学"——即 tokenomics
- 承接 Tamás（前执行总监）的"加速派"遗产
- 明确回应社区对 EF "不关心市场和币价"的批评

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### EF 的新定位

- 收缩范围："keep the small candle alive"
- 聚焦核心价值观：隐私、安全、开源、抗审查
- Bastian（新任唯一执行总监）的博文明确表态：<strong>我们不做采用，不做价格</strong>
- 向 ETHLabs 提供部分资金——精神上的接力棒传递

</div>

</div>

</div>

---

layout: two-cols
---

# 天主教会模型：两个头，一个身体

<div class="text-sm leading-relaxed space-y-3">

### Hasib 的经典类比

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

天主教会既有<strong>修道院</strong>（修士们咏唱经文、守护信仰之火），也有<strong>教会生意</strong>（管理数百亿美元资产、全球教堂和地产）。两者缺一不可。

</div>

**EF = 修道院**：守护"宗教"核心——隐私、安全、开源。没人做这些，就没人做。

**ETHLabs = 教会生意**：做核心升级、扩容、企业可用性、"go fast"——EF 明确说"我们不想做这些"。

**必然有冲突**："go fast"意味着推动升级、打破东西、可能牺牲去中心化来换取性能。这就是 push and pull。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eth-two-heads.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Vitalik：他会不会开心？

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 text-sm leading-relaxed">

### Laura 的担忧

- Vitalik 一直习惯有**超级多数投票权**——他是 EF 的"看不见的手"
- 当有人骗他说他失去了投票权时，他和朋友们曾极度恐慌
- 即使 Aya（前执行总监）被社区要求下台，他只是把她移到"主席"位置
- <strong>"当他的组织权力变小时，他真的能接受吗？"</strong>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 乐观解读

Vitalik 本来就喜欢"仰望星空"——做研究、当未来主义者。把运营和增长交给 ETHLabs 可能<strong>恰恰契合他的天性</strong>。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 悲观解读

裁员是因为 ETH 价格下跌导致<strong>资金不够</strong>（Laura 的判断）。这不是主动的战略重组——这是被迫的收缩。

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

<strong>Tarun 的冷淡反应：</strong>"这个话题我们谈了多少年了？真的发生的时候我已经麻木了。声明读起来像'声明的声明'——没有 90 天计划，没有具体交付物。以太坊一直缺的正是这种明确性。"

</div>

</div>

---

# ETHLabs：真正的改变还是换汤不换药？

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### Tom 的观点："软件重写"

"有时一个代码库变得太陈旧了——你尝试重构，但不如从头重写。ETHLabs 就是以太坊治理的 fresh rewrite。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 结构上的进步

- EF 历史上拒绝专注"市场和币价"
- 现在有了专门的组织来做这件事
- 资金来源更多元（不依赖 ETH ICO 资金）
- 明确的劳动分工：研究 vs 实施

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 悬而未决的问题

- EF 和 ETHLabs 之间的边界尚未协商
- "谁控制什么"没有规则——两个头需要协商
- ETHLabs 目前读起来像"我们就是 go fast 的人，请鼓掌"
- 社区要的是交付物，不是声明

</div>

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 text-sm leading-relaxed">

### 这对 ETH 持有者意味着什么？

如果 ETHLabs 真的专注 tokenomics 和采用——这是 ETH 持有者多年来一直呼吁的。但效果取决于执行。<strong>关键问题是：ETHLabs 能不能在"go fast"和"不做 Luna"之间找到平衡？</strong>

</div>

</div>

---

# CME 起诉 CFTC：垄断者的"为不竞争而战"

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 发生了什么

- **CME**（芝加哥商品交易所，美国最大的衍生品交易场所）起诉了 **CFTC**（商品期货交易委员会——CME 自己的监管机构）
- 原因：CFTC 批准了 Kalshi 的永续合约（perps），随后 Coinbase 复制了同样的结构
- CME 的论点：perps 实际上是 **swap（互换）**，不是 **future（期货）**——应该按更严格的 swap 监管
- CFTC 反击：诉讼是"无意义的"（frivolous），称这是 **incumbent 利用 lawfare** 保护垄断

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

<strong>Hasib 的总结：</strong>"这是 Coinbase 起诉 SEC 的镜像——Coinbase 为'竞争的权利'而战，CME 为'不竞争的权利'而战。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<strong>Tarun 的观察：</strong>CME 的 CEO 在财报电话会议上反复被问到 Hyperliquid——尽管 Hyperliquid 的交易量相对 CME 只是"微小波动"，但媒体关注度已经影响了股东认知。CME <strong>别无选择</strong>，必须做点什么。

</div>

</div>

---

layout: two-cols
---

# Swap vs Future：技术细节决定法律命运

<div class="text-sm leading-relaxed space-y-3">

### 这场官司的核心在技术细节

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

CME 的主张：Perps 没有到期日 → 不是期货 → 是 swap → 应该按 swap 监管（更严格，更难获批）

Crypto 的主张：Perps 有<strong>定期资金费率结算</strong> + 标准化合约 + 高流动性二级市场 → 更像期货

</div>

**Tarun 的预测**：官司会纠缠在"永续合约的定期资金费率行为"——它到底让 perps 更像期货（有市场价格发现），还是更像 swap（固定合约没有二级市场）？

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./swap-vs-future.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 打地鼠：Crypto 的无限适应能力

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### Kalshi 已经找到了变通方案

- 把 perps 做成<strong>"五年到期合约"</strong>——有到期日 → 不是 perp → 是期货
- CFTC 批准了 Kalshi → Coinbase 照抄 → CFTC 又批准了
- CME 如果赢了 perps 的案子，还得再起诉这个"假 perp 真期货"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Crypto 的逻辑

"你杀了一个 perp，我们造十个新的。"五年不行？十年。十年不行？五十年。五十年不行？**一百年。** 比特币被设计成存在一百年——那为什么不能有一百年期货？

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### TradFi 的逻辑

他们以为是"打勾完成"——提出诉讼，赢下官司，perps 就死了。
他们不理解这是一场<strong>重复博弈</strong>。Crypto 的人在监管规避上有十几年的创新经验。

</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

<strong>Hasib 的解决方案：</strong>"CFTC 直接宣布：任何人想发行百年期货——附带每小时多空平衡支付——都可以。CME 赢也好，输也好，大家直接绕过官司。"

</div>

</div>

---

# 更深层的问题：为什么这件事对美国不好

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### Laura 的直觉判断

"我不在乎法律条款怎么说。CME 这么做是因为<strong>他们不想面对竞争</strong>。深层动机才是最重要的——这是'妈咪爹地救救我'式的 cry baby 举动。"

如果美国金融巨头不断用诉讼来阻挡创新……
→ 美国将失去全球金融领导地位
→ 创新会流向海外
→ 最终伤害的是美国自己

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Tom 的补充

Kalshi 的 perps（在美国可用）目前并不受欢迎——杠杆限制（3-6 倍）、wash trading 问题。很多时候<strong>去中心化 perps 或非美国 perps 对用户更好</strong>。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 税务角度

Swaps 的税务处理比 futures 更差——这也是一部分动机。CME 不只是在争夺法律分类，也在争夺<strong>产品吸引力</strong>。

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

<strong>农业例外：</strong>CFTC 委员提到并非所有商品都适合永续期货——尤其是农产品（有实物交割）。农产品游说团体的影响力是公认的。"Perps 的世界不会对所有资产开放——那些不适合的最终会留在 DEX 上。"

</div>

</div>

---

# Meta 进军预测市场：Zuck 的第三次尝试

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 发生了什么

- Meta 被曝正在开发 **Arena**——自己的预测市场产品
- 初期将覆盖 Facebook、WhatsApp、Instagram 用户
- 先用<strong>积分（play money）</strong>而非真钱——但"不排除未来引入真钱"
- 这是 Meta 在预测市场的<strong>第三次或第四次尝试</strong>

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Tom（前 Meta/Instagram 员工）

"内部总是有十几个实验性 app 在跑。这只是一个十人团队在做一个项目。这不代表 Zuck 要把整个公司转向预测市场。人们太兴奋了——这很可能又是一个被砍掉的项目。"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 市场反应

大部分 Crypto 圈的反应不是"他们要碾碎 Polymarket 了"，而是"Meta 又在跟风跳上每一个趋势"——有人引用 Demis Hassabis 那句经典语录：Zuck "对什么都感兴趣，不加思考就扑上去"。

</div>

</div>

</div>

---

layout: two-cols
---

# 预测市场 = 伪装成交易平台的媒体公司

<div class="text-sm leading-relaxed space-y-3">

### Tarun 的核心洞察

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

预测市场本质上是<strong>媒体公司穿着交易平台的羊皮</strong>。绝大多数用户是来<strong>阅读信息</strong>的，而非来交易的——而且这个比例还在不断扩大。

</div>

**为什么这对 Meta 有意义？**

- Meta 的商业模式：**从眼球赚钱**
- 预测市场的价值：**极其客观、市场驱动的信息源**
- Meta 不需要从交易费赚钱——只需要从看预测的人身上赚广告费

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./prediction-market-media.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Zuck 真正的棋：占据"信息聚合"的入口

<div class="mt-4 space-y-3">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### Hasib 的推论

"Meta 是一家极其赚钱的公司。赢下预测市场这个品类对他们来说<strong>根本不重要</strong>。但<strong>眼球去哪儿很重要</strong>。"

如果越来越多的人从预测市场的概率中获取信息（而非传统新闻）→ Meta 想拥有那个入口 → 因为 Meta 最擅长的就是用眼球变现。

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 可能模式一：聚合器

- 不建交易所，只做<strong>前端聚合</strong>
- 路由流量到 Polymarket/Kalshi
- 收流量费——像 Google 对搜索一样
- "为什么要有自己的交易所？当聚合器就够了"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 可能模式二：信息层

- 用户只能<strong>用积分"下注"</strong>，不能赌真钱
- 但可以看到<strong>真实市场赔率</strong>
- 赔率是客观的、由市场驱动的信息源
- 在中东、非洲、亚洲——预测市场被禁，但<strong>数据不被禁</strong>

</div>

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 text-sm leading-relaxed">

### 这对 Polymarket / Kalshi 意味着什么？

Hasib 认为这可能是<strong>加速器</strong>：如果 Meta 让全球数十亿人理解了"什么是预测市场以及为什么它们有用"，那么实际交易量最终会流向能提供真钱交易的平台。

</div>

</div>

---

# 从四个故事看加密行业的拐点

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Strategy 的故事 → 资本结构的复杂度
加密不再只是"买币持有"。我们有了优先股、可转债、分红、稀释——传统金融的整套工具正在被嫁接进来。<strong>风险：</strong>工具越复杂，信心的脆弱性越高。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### EF 的故事 → 治理的去中心化困境
中本聪的愿景是去中心化。但当关键决策仍掌握在少数人手中时——Vitalik 的感受、EF 的预算——ETH 持有者发现自己是"bondholder"：只有在事情变糟时才意识到自己有发言权。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### CME 的故事 → 创新与监管的永恒猫鼠游戏
Crypto 永远能找到变通方案。五年不行？十年。十年不行？一百年。监管可以把游戏变得更贵、更慢——但它<strong>杀不死一场好游戏</strong>。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Meta 的故事 → 眼球经济的下一站
预测市场正在从"赌场"变成"新闻聚合器"。当信息的载体从编辑变成概率——谁拥有分发渠道，谁就拥有未来。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

<strong>共同线索：</strong>加密行业正在从车库走向董事会。资本结构、组织治理、监管分类、商业模式——这些"无聊"的辩论正是行业成熟的标志。下一个十年的赢家不是代码写得最好的人，而是把这些结构性问题处理得最好的人。

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"This might be the Luna for Bitcoin." "Luna for suits. Luna for suits."
<div class="text-xs opacity-60 mt-1 not-italic">— Tarun & Haseeb，讨论 Strategy 的 STRC 优先股机制与 Luna/UST 的相似性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"The Saylor trilemma."
<div class="text-xs opacity-60 mt-1 not-italic">— Haseeb，概括 Strategy 的困境：无论做什么决策都会伤害某一方利益相关者</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"Burn the boat, push it off to shore. Sorry guys, didn't work out, and the rest of us are going to stay on the island."
<div class="text-xs opacity-60 mt-1 not-italic">— Hasib，描述 Saylor 的最坏情况退出方案：牺牲 STRC 持有者，保全比特币核心资产</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"It's more like an Argentina default versus a Luna moment."
<div class="text-xs opacity-60 mt-1 not-italic">— Laura，对 Strategy 风险的定性：可控的小问题，而非系统性崩溃</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"Coinbase sued the SEC for the right to compete, and the CME is suing the CFTC for the right to not compete."
<div class="text-xs opacity-60 mt-1 not-italic">— Hasib，对比两次诉讼的本质差异</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Prediction markets are like media companies that are dressed in the sheep's clothing of a trading platform."
<div class="text-xs opacity-60 mt-1 not-italic">— Tarun，关于预测市场本质的洞察：读者远多于交易者</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的洞察：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"It's like with a piece of software — one version gets so crusty, sometimes you just need a fresh rewrite."
<div class="text-xs opacity-60 mt-1 not-italic">— Tom，类比 EF 改组和 ETHLabs 的诞生</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"The EF has explicitly said, look, we're going to shrink. We're purely going to focus on keeping the small candle alive."
<div class="text-xs opacity-60 mt-1 not-italic">— Hasib，总结 EF 的新定位</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"It's like a whack-a-mole. They try to kill one, they create ten more."
<div class="text-xs opacity-60 mt-1 not-italic">— Tarun，关于 CME 起诉 CFTC 的后果：Crypto 总能找到新的变通方案</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"What does matter is the eyeballs. Making money on the people who are looking is kind of Meta's whole business model."
<div class="text-xs opacity-60 mt-1 not-italic">— Hasib，解释为什么 Meta 对预测市场感兴趣——不是交易费，是注意力</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"Like any religion, there's always going to be politics and incentives and negotiations and compromises."
<div class="text-xs opacity-60 mt-1 not-italic">— Hasib，关于 EF 和 ETHLabs 之间不可避免的摩擦</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Let's standardize on hundred year futures."
<div class="text-xs opacity-60 mt-1 not-italic">— 节目结尾的共识：如果 CME 赢了官司，直接做 100 年期"假 perp 真期货"绕过监管</div>
</div>

</div>

---

layout: end
---

# 从车库到董事会

<div class="opacity-70 mt-8 text-base leading-relaxed">

加密行业的下一个十年，不再是谁写了最好的代码——<br>
而是谁把资本结构、组织治理、监管关系和商业模式<br>
这些"无聊的成年人问题"处理得最好。

Strategy 的 STRC、EF 的改组、CME 的诉讼、Meta 的 Arena——<br>
这四个故事讲的是同一件事：<br>
<strong>一个行业正在从叛逆少年变成需要负责任的成年人。</strong>

</div>

<div class="opacity-50 mt-10 text-sm">
The Chopping Block · 2026 年 6 月<br/>
Haseeb Qureshi · Tom Schmidt · Tarun Chitra · Laura Shin
</div>
