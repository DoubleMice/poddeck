---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'EIP-8363: Should ETH Be Sound Money or a Productive Asset?'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# EIP-8363：ETH 该是健全货币，<br>还是生产性资产？

<div class="mt-6 text-lg opacity-70">
Jérôme de Tychey · Oisín Kyne · Kevin Owocki
</div>

<div class="mt-3 text-base opacity-60">
一场关于以太坊发行量的公开辩论
</div>

<div class="mt-5 text-sm opacity-50">
Unchained Podcast · 主持人 Laura Shin · 2026 年 8 月
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一份正在吵翻的提案</strong><br>
EIP-8363 要让验证者奖励随质押率上升被逐步燃烧，在约 50% 质押率处趋近于零
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>作者本人在场</strong><br>
Jérôme 是这份 EIP 的作者之一，正逐条回复 ETHMagicians 上的 190 条评论
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>最尖锐的技术反对</strong><br>
Oisín 认为安全预算被误读了：以太坊真正拥有的不是千亿美元，而是每天几百万美元
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>商业社群集体反弹</strong><br>
Aave 的 Stani、SharpLink 的 Joe Shalom、Bankless 的 Ryan Sean Adams 都公开反对
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>治理才是真问题</strong><br>
Kevin 的判断：这不是工程问题，是政治经济学问题，两个阵营卡了两年
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>时间窗口正在关闭</strong><br>
按现状推演，2028 年前后质押率会触及 50%——那时再改，代价会大得多
</div>

</div>

<div class="mt-5 p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-sm leading-relaxed">
<strong>这场辩论最反直觉的地方</strong>：三个人对结果数字的预测其实高度接近——均衡质押率落在 40–49%，收益率降到 0.3–0.4%。他们分裂的不是<strong>会发生什么</strong>，而是<strong>这意味着什么</strong>：是终于停止稀释未质押的持有者，还是把安全预算和 DeFi 的收益地基一起削掉。
</div>

---

# 三个人，三种立场

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Jérôme de Tychey
<div class="text-xs opacity-60 mb-2">Ethereum France 主席 · EIP 作者之一</div>

提案的辩护方。他从创世起就在单独质押，主张该付多少付多少，但不要多付一分。

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Oisín Kyne
<div class="text-xs opacity-60 mb-2">DV Labs 联合创始人兼 CEO</div>

最详细的技术批评者。他不反对降低发行，反对的是「一路降到零」这一段。

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Kevin Owocki
<div class="text-xs opacity-60 mb-2">Gitcoin 创始人</div>

明确表示自己尚未站队。他关心的是：这样一份有争议的提案，究竟由谁、按什么程序决定。

</div>

</div>

<div class="mt-5 p-3 text-sm rounded bg-gray-50 border-l-4 border-gray-400">
主持人 Laura Shin 提到，反对声主要集中在社群里的商业人士一侧——她说这让她想起自己书里写过的、以太坊早期就出现过的「商业派 vs 开发者派」之争。
</div>

---
layout: two-cols
---

# 提案想解决的问题

Jérôme 的问题陈述只有两句话，但它是整场辩论的地基。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
现行曲线下，<strong>质押的 ETH 越多，新印出来的 ETH 就越多</strong>，而且这个激励「从来不会真正关掉」。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
与此同时，<strong>每一个没有去质押的持有者，都在通过稀释为质押者买单</strong>。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
两句话合起来就是一个自我强化的循环：被稀释的人为了对冲稀释，只能也去质押。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dilution-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 提案的机制：一条随质押率增长的燃烧

<div class="grid grid-cols-2 gap-5 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 做法

不是直接下调奖励，而是<strong>燃烧掉验证者奖励中越来越大的一部分</strong>。质押率越高，被烧掉的比例越大。

Jérôme 把它概括成一句话：

<div class="mt-3 italic opacity-80">
"a burn that grows with the staking ratio"
</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 效果

奖励在约「一半 ETH 被质押」的水平上趋近于零。按作者的模型，市场会在远早于这个点的位置停下来——停在参与者要求的最低收益上。

参与度低的时候，质押依然有吸引力；但<strong>「过度质押」不再被补贴</strong>。

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关键区分</strong>：提案改的不是「验证者能赚多少」这个数字本身，而是「奖励如何随质押率变化」这条曲线的形状。
</div>

---
layout: two-cols
---

# 曲线的四个设计参数

Jérôme 说这条曲线背后有<strong>四到五年的研究积累</strong>，参数不是随手定的。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>最大发行水平</strong>：曲线本身有一个发行上限
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>目标质押率 20–30%</strong>：发行在这个区间达到峰值
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>50% 归零</strong>：作者明确说，目的之一就是确保质押率不越过 50%
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>过渡期</strong>：改变有多快落地，是一个独立的旋钮
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./issuance-curve.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 0.5%：整条曲线的底线数字

<div class="mt-4 p-5 text-lg italic rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"the minimum viable issuance of Ethereum should be around 0.5%"

</div>

<div class="mt-3 text-sm opacity-70">
—— Jérôme 引述现有研究，说明这是「为了保证经济安全、支付安全预算，我们必须发行的最低量」
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>它是怎么被用的</strong><br>
作者先选定一条能匹配 0.5% 最小可行发行量的曲线，再往上叠加目标质押率和归零点——0.5% 是起点，不是结论。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>它还有一个长期背书</strong><br>
Jérôme 说，以太坊基金会协议团队认为 0.5% 是可以「超长期承诺」的水平；他提到这主要是 Justin Drake 的说法。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
记住这个数字——后面 Oisín 的反对意见，恰恰是「为什么不就停在这里」。
</div>

---

# 过渡期：一年半到两年，不是一夜之间

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 作者的设计意图

Jérôme 说他们刻意避免了「今天提案、明天生效、收益一夜腰斩」的剧本。从现在讨论开始，到提案完全生效，中间大约有<strong>一年半到两年</strong>；其中 18 个月是在 Agora 上线之后才开始计时的。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么这一点会被反复提起

因为反对者最大的担忧是 DeFi 的连锁反应。作者的回答基本上是「用时间换缓冲」：让 tapering 慢慢发生，而不是「boom，全部炸掉」。

Jérôme 自己也承认，这个过渡期够不够长，「我随时准备就此争论」。

</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>他对「央行」类比的反驳</strong>：央行有明确目标，在定期会议上做很小的调整；而这份提案是一次跨越数年、指向一个方向的转向——两者不是同一类动作。
</div>

---
layout: two-cols
---

# Oisín 的核心批评

他不否认终局性安全的研究结论。他反对的是把它<strong>当成安全的全部</strong>。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>他同意的部分</strong>：要撤销已确认的交易，需要销毁数百亿美元级别的 ETH——这个威慑「在这个阶段大概是够的」。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>他不同意的部分</strong>：这不是以太坊唯一可能出错的地方。质押者还可以挑剔<strong>要不要把某笔交易放进区块</strong>。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
只要有 51% 的人这么做，<strong>「it costs them nothing」</strong>——协议不会罚他们一分钱。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./security-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这期最锋利的一句话

<div class="mt-6 p-6 text-xl italic leading-relaxed rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

"we don't really have a hundred billion dollars of security, we really have five million a day at the current curve... it might be a million dollars a day or less, and I don't really know if that's enough to protect a kind of a trillion dollar computer like we want it to be"

</div>

<div class="mt-4 text-sm opacity-70">
—— Oisín Kyne，把「安全预算」从存量重新表述为流量
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">常被引用的说法</div>
<div class="text-2xl font-bold text-blue-600 my-1">$1000 亿</div>
<div class="text-xs opacity-70">他说以太坊其实并不拥有这个数</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60">现行曲线的实际流量</div>
<div class="text-2xl font-bold text-yellow-700 my-1">$500 万/天</div>
<div class="text-xs opacity-70">真正在持续买单的安全预算</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60">新曲线均衡态可能是</div>
<div class="text-2xl font-bold text-red-600 my-1">$100 万/天</div>
<div class="text-xs opacity-70">「甚至更低」</div>
</div>

</div>

---

# Nakamoto 系数：一个借来的词

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Oisín 怎么定义它

他说这个词来自比特币，指的是<strong>「多少个组织加起来就占了 50% 的算力或质押权重」</strong>——数字越小越危险。

他把这个当作自己反对意见里的主线：任何进一步集中化的改动都值得警惕。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 为什么它和发行量挂钩

因为审查这条攻击路径不需要销毁资本，只需要<strong>协调</strong>。而协调的难度，取决于需要拉拢多少个实体。

社群手上的对策是「必要时大家一起把他们的 ETH 销毁掉」——Oisín 认为，把以太坊全部的安全押在这个动作上，风险太大。

</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
Laura 的复述：能够控制或破坏系统的实体数量<strong>本来就已经偏少</strong>，任何让它更集中的东西都有点冒险。
</div>

---

# Jérôme 的回应：他承认了什么

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>他直接承认了成本数字</strong>：贿赂或胁迫验证者去做或不做某件事，每天的代价在几百万美元的量级。对 Oisín 的这个判断，他的原话是 <em>"it's true indeed"</em>。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>他把安全明确称作一个光谱</strong>：需要分别考虑不同层级、不同类型的攻击，以及各自的防御手段。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>他划定了这份 EIP 的射程</strong>：提案主要优化的是「撤销终局性」那一端，目标是把这一端做到最大。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>他把另一端交给了别的工具</strong>：抗审查这一端主要由 DVT、DAAS 等方案负责——他说自己支持这些方向，但不认为发行量是能影响这一端的杠杆。
</div>

</div>

<div class="mt-4 p-3 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">
<strong>作者概括</strong>：两人在事实层面分歧很小，真正的分歧是「这一端该不该由这份提案负责」。
</div>

---

# 分歧的真正焦点：归零，还是停在 0.5%

<div class="mt-5 p-5 text-lg italic rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

"if we stopped at 0.5% issuance and didn't cut it any lower, this would be a much, like, less objectionable proposal"

</div>

<div class="mt-3 text-sm opacity-70">
—— Oisín Kyne。他反对的不是「降低发行」，而是曲线尾部的那一段
</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 他担心的具体场景

一个持有 40%、50%、60% ETH 的实体（他说「which I won't name」，明确拒绝点名），<strong>可以主动把发行推到零</strong>。到那时，几乎所有理性的参与者都会退出质押，而这个实体就留在场内，握着多数质押权重。

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>值得注意的对称性</strong>：作者用 0.5% 论证曲线的下限，批评者用同一个 0.5% 论证曲线不该继续往下走。同一个研究结论，被两边同时引用。
</div>

---

# 商业社群的反弹

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>Joe Shalom（SharpLink）</strong><br>
文章标题被 Laura 形容为「简洁」：<em>"It would undermine DeFi, and DeFi is Ethereum's superpower"</em>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Stani Kulechov（Aave）</strong><br>
Kevin 转述：他算了一笔账，验证者收入若从约 3% 降到 1.5%，那就是<strong>砍掉一半</strong>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Ryan Sean Adams（Bankless）</strong><br>
一句话定性：<em>"dead in the water"</em>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Kevin 转述的一串疑问</strong><br>
更接近零收益的机制，会不会反而加速这份 EIP 想阻止的集中化？借 ETH 的场景还成立吗？会不会埋下税务地雷？
</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Jérôme 的两点澄清</strong>：一，并不是「所有人都反对」，写文章的人本来就更多是来找答案和提异议的；二，最先出来反对的，是<strong>生意直接受影响的人</strong>——他说这在意料之中，「我们不打算掩饰这一点」。
</div>

---
layout: two-cols
---

# Kevin：这是政治经济学，不是工程

他把这场争论的性质讲得最清楚。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"This is not an engineering problem. This is a political economy problem."
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他借用 Bankless 早期那篇著名的<strong>「三点资产」</strong>文章发问：资本资产、消耗性资产、价值储存——以太坊想成为哪一个？
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
他的判断是这里存在<strong>零和取舍</strong>：货币溢价，和 DeFi 与机构赖以建仓的可靠收益，两者互相挤压。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-camps.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 以太坊怎么做这种决定

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 机制本身

以太坊是链下治理。有一个叫 All Core Devs 的会议，参与者在会上就「哪些 EIP 进入网络」达成<strong>粗略共识</strong>。

Kevin 提醒：ACD 从来没有通过过<strong>争议性和反弹强度达到这个级别</strong>的东西。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 两个历史坐标

<strong>ProgPow</strong>：有争议的提案被否掉，是有先例的。

<strong>DAO 硬分叉</strong>：Kevin 说，那之后以太坊<strong>再没有发生过一次重大分叉</strong>。

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>他真正想问的问题</strong>：谁来做决定、怎么做？核心开发者愿意为了推动这份 EIP，承担多大的社群撕裂风险？他自己给了一句更狠的注解——<em>"not deciding to do an EIP is a decision in itself"</em>（不做决定本身也是一种决定）。
</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Kevin 说这场辩论已经<strong>卡了大约两年</strong>，两个阵营谁也没有向对方移动过。
</div>

---

# 均衡点会落在哪：三个数字

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">Jérôme 的估计</div>
<div class="text-3xl font-bold text-blue-600 my-2">40–45%</div>
<div class="text-xs opacity-70">「很难说准确是多少，我想会稳定在 40 到 45 左右」</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">Oisín 的估计</div>
<div class="text-3xl font-bold text-green-700 my-2">45–49%</div>
<div class="text-xs opacity-70">他说自己一直在研读这份 EIP 背后的研究</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60">对应的收益率</div>
<div class="text-3xl font-bold text-orange-600 my-2">0.3–0.4%</div>
<div class="text-xs opacity-70">Oisín 说 0.4% APR；Jérôme 当场算：45% 质押率对应 0.3%</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>参照系一</strong>：Jérôme 说自己作为单独质押者目前拿到约 <strong>2.5%</strong> 收益；Laura 在讨论中用 3% 作为粗略基准。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>参照系二</strong>：两位对<strong>落点</strong>的判断其实很接近。真正的分歧不在「会跌到哪」，而在「跌到那里意味着什么」。
</div>

</div>

<div class="mt-4 p-3 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">
Laura 追问：如果收益从 3% 掉到 0.3%，DeFi 是不是就只剩十分之一？——这个问题成了下一段争论的引信。
</div>

---

# DeFi 会怎样：作者承认自己没有模型

<div class="mt-4 p-5 text-lg italic rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

"I have to be completely honest here, uh, we don't have a cascade model."

</div>

<div class="mt-3 text-sm opacity-70">
—— Jérôme de Tychey，被问及 DeFi 连锁反应时的第一句话
</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他说得准的部分

方向是确定的：质押率会稳定下来，网络收益会更低，<strong>循环贷（looping）那一块会缩小</strong>。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 他说不准的部分

缩小多少，不知道。他给的理由是资源有限、公开信息也有限，不愿意「乱猜一个级联模型」。

</div>

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>他给出的替代动作</strong>：邀请所有会受影响的场所主动联系、一起把这个级联模型建出来，一起讨论参数。Laura 也点出，像 Gauntlet 这类机构本可以做蒙特卡洛模拟，但这件事<strong>看起来还没有发生</strong>。
</div>

---

# Jérôme 的两个反驳

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一、TVL 是虚荣指标

他说这个行业过去为 TVL 兴奋，但那是把<strong>同一份 ETH 循环计算多次</strong>、把衍生品和本金重复计数的结果。

真正该看的是<strong>成交量</strong>：DEX 上的交易、抵押与再抵押、仓位调整——这些才是真正在燃烧 ETH 的活动。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 二、借 ETH 的另一种读法

他建议跳出 DeFi 视角，用传统金融的回购市场来看借贷市场，然后问一句：

<div class="mt-2 italic">
"isn't that people shorting ETH?"
</div>

在他看来这甚至可以算一个危险信号；因此抑制借 ETH 的需求，对这个资产未必是坏事。

</div>

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>他举的具体例子</strong>：某人拿 5 万美元稳定币存进 Aave，借出 ETH 再去循环，赚的是质押收益，也就是赚<strong>其他 ETH 持有者被稀释的那部分</strong>。他说这是「a brittle behavior」（脆弱的行为），并不认为它在现阶段为以太坊买到了额外的安全。
</div>

---

# 单独质押者：77% 是怎么算出来的

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 流传的说法

Laura 转述的担忧是：家庭验证者的<strong>税后收入最多会下降 77%</strong>。逻辑是毛奖励要缴税，而燃烧会吃掉利润。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 作者说这是措辞造成的误读

Jérôme 承认 EIP 的表述有问题。他强调：<strong>不是「给你一份、再拿走五份」</strong>，那「一份」根本不会先进入你的可用余额。

机制和 EIP-1559 的燃烧一样：<strong>余额在燃烧之前从未收到过奖励</strong>。他也表示措辞可以改。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 但税负问题本身是真的

Jérôme 说自己<strong>从创世起就在单独质押</strong>，目前收益约 2.5%。他把真实收益拆成三层：先按法国 30% 的统一税率缴税，收益就只剩下约七成；再叠加稀释——发行是对全部供应量印的，所以如果发行率是 1%，你就被稀释 1%。

他的结论很直白：这样算下来，<strong>单独质押者的保留收益率很快就会被触及</strong>，这是一个实实在在的问题。

</div>

---

# 作者的坦白：这个提案救不了单独质押者

<div class="mt-4 p-4 text-lg italic rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

"It's not going to save the solo stakers."

</div>

<div class="mt-2 text-sm opacity-70">
—— Jérôme de Tychey。他说 EIP 发布时没有把立场讲清楚，以致被误解成在宣称提案能拯救他们
</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 他真正的主张：这是两种坏结局的比较

他承认新曲线同样可能把单独质押者挤出去，但认为<strong>现行曲线会以更快的速度挤走他们</strong>，而且到最后不但一样没有单独质押者，<strong>还留下高得多的发行量</strong>。

他的推演：如果有人说「低于 2% 我就退出」，在现行机制下这一天会在质押率约 58% 时到来，那时发行率是 1.1%——而现在质押率才 35% 左右。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>他补的一个论据</strong>：单独质押者只承担运营风险；选 LST 或衍生品的人还要额外承担治理风险和智能合约风险。这些额外风险<strong>有可能</strong>被补偿，从而让一部分人留下来。
</div>

---

# 面包师与渔夫：Oisín 的税制类比

<div class="mt-4 p-4 text-base italic leading-relaxed rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

"a baker doesn't pay taxes when he bakes his bread he pays it when he sells the bread... Ethereum stakers shouldn't pay taxes when they earn the ETH they should pay it when they sell the ETH"

</div>

<div class="mt-2 text-sm opacity-70">
—— Oisín Kyne，转述 Proof of Stake Alliance 推动的政策方向：把质押奖励按「创造所得」计税
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 他指出的不对称

单独质押者<strong>一路按收入被征税</strong>；而持有包装过的 LST 的人，是很多年以后才缴资本利得——复利效率完全不同。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 他自己的算账时刻

他说自己也是拿着计算器的人之一：<strong>如果真的降到 0.3% APR，税制怎样都不重要了</strong>——那点收益连电费都覆盖不了。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
他的总结相当冷峻：比例和均衡点你几乎可以随便填，算下来<strong>几乎永远是委托更划算</strong>——除非碰上被罚没那种最坏情况。而这份提案并没有改善这个落差。
</div>

---

# 真正可能救单独质押者的两样东西

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### MEV burn

Jérôme 直接说：<strong>能救单独质押者的是 MEV burn</strong>。他说这个方向正在被研究，希望能赶上后续的升级节奏。

他要解决的问题是：小规模验证者拿不到和大玩家同样的 MEV 回报，于是所有人都被推向最大的那一家。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 反关联惩罚（anti-correlation penalties）

他点名这是 Oisín 团队在推动的方向，并说「我很高兴你把这个话题带回来」——这是全场少见的、两位对立者明确站在同一侧的时刻。

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 他描述的集中化引力

选最大的运营方有双重理由：一是回报更好，二是<strong>「大到不能倒」的感知</strong>——为了把运营风险降到最低，人们干脆选最大的那一个。Jérôme 说这正是他们想避免的局面。

</div>

<div class="mt-3 p-3 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">
<strong>作者概括</strong>：这一段里，发行曲线之争暂时退场，双方都承认真正的杠杆在别处。
</div>

---

# 机构叙事之争：说的和做的

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Stani 的论点</strong>（Laura 引述其文章）：这会让以太坊上的活动变得不经济，并且是 <em>"a negative factor for any institutional buyer who would be considering taking an ETH position instead of other networks with predictable cash flows"</em>。
</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Jérôme 举的时间线

SharpLink 公开表态支持 Stani 的立场之后——<strong>第二天</strong>宣布与 Galaxy 合作做 DeFi 基金，<strong>再一天</strong>宣布向 Lido 发送价值 2 亿美元的 ETH。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 他不接受的是那个框架

他说 Grayscale 的立场克制得多，还提到 Tom Lee 曾表示欢迎就发行量展开讨论。他不认为「这对机构不利」这个框架成立。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>他给出的机构视角推演</strong>：发 ETF 或做 DAT，本质是在说服别人相信 ETH 有未来、能保值，收益只是<strong>撒在上面的一张息票</strong>。而另一端的投资者足够老练，他们会做<strong>稀释调整后</strong>的计算，然后追问：收益从哪来？是维持在 2.5%，还是会更低？
</div>

---

# Jérôme 的反问

<div class="mt-5 p-5 text-base leading-relaxed rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

他说，当一个 ETF 或 DAT 公开宣称「关于发行量的讨论会伤害 DeFi，我们不想要」，它同时也在说：<strong>那些能改善「这个资产为什么保值」这一叙事的事情，不是当务之急。</strong>

而且它还在推广一个结论：ETH 最好的用途就是拿去质押然后放着。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>他认为这对网络不利</strong>：这既不利于链上活动，也谈不上有利于更广泛的采用。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>他抛出的两难</strong>：如果 ETH 唯一的用例真的就是去质押，那我们就该<strong>彻底重新审视安全假设和信标链的行为方式</strong>。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
他还提醒那些主张「一切都该去质押」的人：链上数据可用性和 zkEVM 在这条路径下走不通——而这些东西<strong>就发生在未来两到四年内</strong>。他把整件事称作「long-term thinking」。
</div>

---

# TradFi 真正在找的两样东西

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一、可预测性

Oisín 说机构要的是<strong>提前很多年就被明确预告的东西</strong>。他举了两个有社会正当性的例子：

<div class="mt-2 space-y-1">
<div>· 权益证明写在以太坊白皮书里，做了五年，所有人都觉得理所当然</div>
<div>· 后量子在 2024 年宣布，他猜大概 2029 年前后才上线</div>
</div>

他认为发行量的改变<strong>需要同一量级的预告</strong>。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 二、安全性

他说机构不希望对「以太坊可能不安全」有任何疑虑，否则他们根本无法承担这个风险。

这正是他对<strong>「零发行也没关系，反正有 50% 质押」</strong>这一派的担忧：在他看来，这离比特币那种安全预算危机有点太近了。

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 他自己怎么给这场辩论重新命名

他说这与其说是「超健全货币 vs 生产性资产」，不如说是超健全货币和网络安全之间的取舍。他把自己归到偏安全的那一边：<em>"1% issuance is fine, it's lower than almost everything else in the world, and it's good for security"</em>

</div>

---
layout: two-cols
---

# Oisín 的另一条路

被问到「是否该把 LST 内嵌进协议」时，他和 Jérôme 都表示怀疑——但他顺势提出了自己认为更根本的问题。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
他不认为一个<strong>同质化、共担风险</strong>的流动性质押代币是可行方案：委托对象怎么选，本身就没有完美答案。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
但 LST 之所以存在、质押之所以集中，指向同一个原因：<strong>原生质押不流动</strong>。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
他的方案是让协议提供一个<strong>可定价的退出</strong>——最可信中立的做法。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./exit-liquidity.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么「退出」比「比例」更重要

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>现状</strong><br>
队列拥堵，可能遭遇挤兑式冲击。最好情况约<strong>四天</strong>拿回钱，而眼下<strong>可能要几个月</strong>。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>后果</strong><br>
正是这种不确定性，把大量质押者推向 LST 或中心化交易所——那里随时能卖，哪怕要接受一点折价。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>他的方案</strong><br>
给「烧掉一定数量 ETH 换取立即解质押」定一个价格。平时大致等于同期限借 ETH 的成本，压力时更贵。
</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 他预期的效果

如果有这个功能，会有<strong>大量风险意识强的质押者</strong>直接质押到自己的 Ledger 或冷钱包，而不是把钱全放在交易所或 LST 里。

他的落点非常明确：这才是我们更该考虑的事，<strong>而不是去强行设定一个比例</strong>。

</div>

---
layout: two-cols
---

# 成本模型即将彻底改变

Laura 引述了 Oisín 的一段公开发言：以太坊<strong>「离实时证明和切换到后量子只有几个硬分叉」</strong>。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
出块将需要<strong>「a server rack worth of expensive GPUs」</strong>；用后量子签名方案做证明，也比现有方案更贵。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
他自己的估算：那种情况下，出块大约意味着<strong>每年十万美元量级的硬件折旧</strong>。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
他担心的结果：最后<strong>只剩两家公司</strong>愿意承担这笔成本，而他不确定这是否高效。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./future-cost.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两种「时机论」的正面碰撞

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Oisín：现在太早了

他说 2024 年那次争论之后，大家学到的教训是：要花好几年建立共识，并且要挑一个<strong>有充分正当理由的时机</strong>去重做发行量。

他认为那两个显而易见的时机就是<strong>后量子</strong>和<strong>实时 ZK 证明</strong>。挑其中一个，然后说「我们从现在开始为那次改动建立共识」。

他的原话是：<em>"I think this is a bit early more than anything."</em>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Jérôme：正因为如此才要现在

他的反向推理是：如果现在没有能力在生态和产业层面把这场讨论做完，那么<strong>三年后当职责真正改变、必须改发行量时</strong>，局面会更糟——届时质押的 ETH 更多、既得位置更牢固、依赖这份收益的公司和资产也更多。

他提到 Lean 就在几年之内，而这份提案是要「一改管很多年」。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>Oisín 补充的数据参照</strong>：市面上有五六条成熟的权益证明链，多数<strong>没有罚没机制</strong>，因此不存在以太坊这种可能损失全部本金的风险；其中五条通常在 70% 左右质押率，也有不少在 50% 出头。他认为以太坊很可能走到 50%，但<strong>再往上每 10 个百分点都会越来越难</strong>——尤其是万一出现大规模罚没事件，人们会冷静很多。他还提醒：走到 36% 已经花了将近六年。
</div>

---

# 为什么是现在：一个正在关闭的窗口

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>入口队列一直是满的</strong><br>
Jérôme 说，自 2025 年 5 月 SEC 给出指引以来，进入质押的队列就没空过，而且没有回落的迹象。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>稀释本身在制造更多质押</strong><br>
你越是不质押，被稀释得越多；于是理性反应就是赶紧去质押——用他的话说，去「对抗稀释」。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>2028 年是他给的时间点</strong><br>
按现状推演，<strong>到 2028 年很可能触及 50%</strong>，而且此后仍是上行趋势。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>他担心的副作用</strong><br>
过多 ETH 被锁进质押，会损害 ETH 的<strong>市场深度</strong>：买家卖出时会面临更大滑点，也不利于吸引新持有者。
</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>他把安全论证也接了上去</strong>：以太坊的安全性和权益证明<strong>不是按「质押率超过 50%」来设计的</strong>；一旦越过那条线，可信中立性本身就会成为问题。他的原话是「our credible neutrality is in question here」。
</div>

---

# 与其他链比较：Jérôme 的回答

<div class="mt-4 p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">
Laura 的问题：Solana 那边有 7% 以上的机构质押收益，以太坊怎么竞争？
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 高收益可能是成本的影子

他反问：付 7% 的链，是不是因为<strong>必须补贴才有人跑节点</strong>？可能是硬件要求太高、要租的服务器太贵，所以不得不付得多。

相比之下，他说以太坊单独质押者的账单在<strong>百美元的量级</strong>，而「在我们这个级别的链里，没几条能说自己真的还有单独质押者」。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他和比特币的对照

他指出<strong>比特币现在印得比 ETH 少</strong>——曾经不是这样，而这份提案会把以太坊带回那个状态。

同时他反对拿以太坊去和「为获客而大量补贴」的链做逐项指标对比。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>他给出的反向检验</strong>：如果高收益真能带来采用，那我们应该反过来问——把给质押者的钱<strong>提高 3 倍、4 倍甚至 10 倍</strong>，能给以太坊主网带来更多采用或更多活动吗？他说，现在没有人在走这条路。
</div>

---
layout: two-cols
---

# 接下来会发生什么

这是全场少数几个有确切日期的部分。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>ACD #185</strong>：Kevin 预计讨论会在这次会议前后到达沸点
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Hekate 候选名单</strong>：从约 66 份 EIP 里逐份判断成熟度
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>10 月 26 日</strong>：Jérôme 说这才是真正该记住的日期
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>错过则顺延</strong>：Kevin 认为进不了这班车，通过概率会低很多
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./timeline.excalidraw"
  class="w-[430px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两位当事人对结果的预期

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Jérôme：最可能是「继续讨论」

他认为 ACD 直接把提案杀掉<strong>不是大概率结果</strong>，更可能是让讨论延续到下一次会议，看看届时是否更清晰。

他补了一句技术判断：这份 EIP 无论多有争议，<strong>实现上都不算大难题</strong>——他说不是「容易」，但比起其他事情不算难。因此他不预期 ACD 会以「太有争议」为由停止讨论。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Kevin：不会不加修订就硬推

他判断在这么多异议之下，核心开发者不会原样通过。他更想看的是<strong>两派能否像立法那样把两个版本揉到一起</strong>——把相距很远的两份草案混合成一份。

他也承认自己只是在猜。

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>历史给的参照</strong>：Jérôme 说过去 ACD 在非常有争议的事情上<strong>也让讨论继续过</strong>，其中就包括 ProgPow。而 Laura 最后的总结是：她两边的论点都能看到，这大概意味着这份提案在被采纳之前<strong>需要一定程度的打磨</strong>。
</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">关于安全与发行</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"we don't really have a hundred billion dollars of security, we really have five million a day at the current curve"
<div class="text-xs opacity-60 mt-1 not-italic">— Oisín Kyne，把安全预算从存量改写成流量</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"the minimum viable issuance of Ethereum should be around 0.5%"
<div class="text-xs opacity-60 mt-1 not-italic">— Jérôme de Tychey 引述研究结论，这是曲线设计的起点</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"if we stopped at 0.5% issuance and didn't cut it any lower, this would be a much, like, less objectionable proposal"
<div class="text-xs opacity-60 mt-1 not-italic">— Oisín Kyne，分歧真正的落点是曲线尾部那一段</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"let's continue to pay stakers as much as necessary but as little as possible so we don't dilute the others"
<div class="text-xs opacity-60 mt-1 not-italic">— Jérôme de Tychey，他对整份提案最凝练的一句概括</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于治理、税制与优先级</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"This is not an engineering problem. This is a political economy problem."
<div class="text-xs opacity-60 mt-1 not-italic">— Kevin Owocki，为整场争论定性</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"a baker doesn't pay taxes when he bakes his bread he pays it when he sells the bread"
<div class="text-xs opacity-60 mt-1 not-italic">— Oisín Kyne，用来说明质押奖励该按创造所得计税</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It's not going to save the solo stakers."
<div class="text-xs opacity-60 mt-1 not-italic">— Jérôme de Tychey，作者本人纠正外界对提案的一个误读</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"1% issuance is fine, it's lower than almost everything else in the world, and it's good for security"
<div class="text-xs opacity-60 mt-1 not-italic">— Oisín Kyne，他给自己在这场辩论里的定位</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"we have a window of opportunity for a smooth transition, um, and we should, we should not let it close"
<div class="text-xs opacity-60 mt-1 not-italic">— Jérôme de Tychey，他对「为什么是现在」的最终回答</div>
</div>

</div>

---
layout: end
---

# "we cannot choose for both of them"

<div class="mt-4 text-base opacity-70">
Kevin Owocki 说，All Core Devs 和 DeFi 阵营是<br>一股不可阻挡的力量与一个不可移动的物体
</div>

<div class="mt-6 text-sm opacity-50">
Unchained · EIP-8363 圆桌
</div>
