---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Richard Craib - Crowd-Sourced Alpha with Numerai (S7E28)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<div class="mt-16">

# Crowd-Sourced Alpha<br>with Numerai

<div class="mt-8 text-2xl text-gray-500">
Richard Craib (Numerai CEO & Founder) × Flirting with Models
</div>

<div class="mt-6 text-sm text-gray-400">
2026 年 2 月 · 56 分钟 · S7E28
</div>

</div>

---
layout: default
---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>$60M → $600M 的隐秘增长</strong><br>
Numerai 已从"加密实验"成长为真实的对冲基金，JPMorgan 投资、顶级大学捐赠基金领投 Series C
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Staking 如何消灭 overfitting</strong><br>
不是发奖金，而是让数据科学家押上真金白银——从根本上改变了激励结构
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>MMC：超越 meta model 才算数</strong><br>
光预测股价不够，你得能提供 Numerai 已有信号之外的增量——这是全球最难的数据科学竞赛
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>2023 年回撤的教训</strong><br>
-16% 年回报逼出风险系统升级：crowding 才是真正的杀手，Barra 中性还不够
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>AI Agent 自动化研究</strong><br>
skills.md + MCP server → AI 科学家跑 10,000 个并行实验，三天无人值守出模型
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Portable Alpha 新基金</strong><br>
Numerai Singularity：long 全球股票 + long Numerai alpha，回归叠加（return stacking）
</div>

</div>

---
layout: default
---

# 8 岁开始的旅程

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"I guess when I was eight years old, my dad gave me stock to track. I would watch the stocks move, and it's very seductive."
<div class="text-xs text-gray-500 mt-1 not-italic">— Richard Craib</div>
</div>

<div class="text-sm leading-relaxed space-y-2">
<p><strong>金融媒体的"垃圾食谱"</strong>：看 CNBC、读报纸——这些在 Richard 看来都是"miss the point"。真正让他认清方向的，是 Renaissance Technologies——<strong>金融本质上是一个数学问题、一个机器学习问题</strong>。</p>
<p>于是他开始学习数学和机器学习。</p>
</div>

</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>深度学习的转折点</strong><br>
• 2011：计算机视觉突破<br>
• 2013：Google 收购 DeepMind<br>
• 2010+：Kaggle 诞生，竞技数据科学社区兴起
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Kaggle 的启示</strong><br>
竞赛主办方常被参赛者模型的表现震撼——你永远不知道 state of the art 的上限在哪里。这激发了 Richard 对"分布式模型开发"的想象。
</div>

</div>

</div>

---
layout: default
---

# Numerai 速览

<div class="grid grid-cols-4 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600 my-2">$600M+</div>
<div class="text-sm opacity-70">AUM（从 $60M 增长）</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600 my-2">$500M</div>
<div class="text-sm opacity-70">JPMorgan 获得的容量</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600 my-2">$500M</div>
<div class="text-sm opacity-70">Series C 估值</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600 my-2">~20</div>
<div class="text-sm opacity-70">团队人数</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>定位</strong>：机构级别的 market-neutral 对冲基金，拥有完全非传统的 alpha 引擎。Richard 的目标不是"做一个好的对冲基金"——而是<strong>"做最好的"</strong>。
</div>

---
layout: default
---

# 什么是 Numerai

<div class="mt-4 text-sm leading-relaxed space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>核心理念</strong><br>
如果全世界的数据科学家都能访问同一份数据，他们就可以在上面建立机器学习模型。Numerai 释放了这个数据集，说：<strong>把全世界的模型结合起来，这就是最前沿的 alpha 生成系统。</strong>
</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>步骤 1</strong><br>
Numerai 发布<strong>混淆后的金融数据</strong>（~6000 只全球股票，2000+ 维特征）
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>步骤 2</strong><br>
数据科学家<strong>建立模型</strong>，提交对每只股票的排名预测，并用 NMR 代币 <strong>staking</strong>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>步骤 3</strong><br>
Numerai <strong>stake-weight 组合</strong>所有信号为 meta model，经风险中性化后执行
</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"Kind of the first open hedge fund. We wanted to be the first platform for AI to reach the market, and that's what we did."
</div>

</div>

---
layout: two-cols
---

# 为什么数据必须被混淆

<div class="text-sm leading-relaxed space-y-3 pr-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>消除人类偏见</strong><br>
如果数据科学家看到模型想做多 Apple，但担心 Apple 会"错过 AI 浪潮"——这种 human story 会让人偏离数据科学。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>防止数据外泄</strong><br>
不让人带着数据去自建对冲基金。"你不如提交给我们，我们可以有最好的模型，你通过 staking 分享收益。"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>ML 不需要领域知识</strong><br>
Richard 回忆 2012 年的课堂作业：所有变量都叫 X1, X2, X3, X4。教授只说"大概跟声纳数据有关"——机器学习的要点就是<strong>从数据中学习</strong>。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-obfuscation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Staking 的诞生

<div class="text-sm leading-relaxed space-y-3 pr-2">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>起初 Numerai 并不 work</strong><br>
300 个优秀的数据科学家，但 Numerai 内部建一个模型就能打败他们所有人。"对一家成立 9 个月的公司来说，这是灾难性的消息。"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Ethereum 的启发</strong><br>
Richard 早期投资了 Ethereum，想到<strong>创建自己的加密货币来实现 staking</strong>——让参与者有 skin in the game。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>1,000 个账号的攻击</strong><br>
没有 staking 时，有人注册 1,000 个账号提交随机噪声，总有一个表现好。Staking 消灭了这种套路：你必须选<strong>一个</strong>来押注。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./staking-mechanism.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Staking 如何终结 Overfitting

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>"The biggest problem in data science is overfitting, and the biggest criticism of quant is you are just going to overfit the past."</strong>
<div class="text-xs text-gray-500 mt-1">— Richard Craib</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>没有 staking 的世界</strong>
<ul class="list-disc pl-4 mt-1 space-y-1">
<li>在测试集/验证集上做好就行</li>
<li>可以注册多个账号分散风险</li>
<li>激励的是提交频率，不是质量</li>
<li>99% 的社区在 overfit（Quantopian 的数据）</li>
</ul>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>有 staking 的世界</strong>
<ul class="list-disc pl-4 mt-1 space-y-1">
<li>你押的是<strong>未来的 live 表现</strong></li>
<li>overfit 没有回报——必须对未来有预测力</li>
<li>每一个 stake 都是<strong>信念的表达</strong></li>
<li>"这极度地让你对 overfitting 变得谨慎"</li>
</ul>
</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"So we made what we think is the hardest data science competition."
</div>

</div>

---
layout: default
---

# 双层评估：Core + MMC

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Core（相关性）</strong>
<div class="mt-2">你的信号是否与未来 20 天的残差收益 <strong>有相关性</strong>？</div>
<div class="mt-2 text-xs text-gray-500">这是基础的预测能力测试。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>MMC（Meta Model Contribution）</strong>
<div class="mt-2">你的信号是否对已有 meta model <strong>有增量</strong>？</div>
<div class="mt-2 text-xs text-gray-500">这才是真正值钱的维度——你得是别人做不到的。</div>
</div>

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>为什么 MMC 更难</strong><br>
Numerai 的 meta model 本身就是所有用户的平均——它经常是平台上"最好的用户"。要对它产生 incremental value，意味着<strong>你必须提供整个社区都还没有捕捉到的信号</strong>。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Staking 回报 = Core 表现 × MMC 表现</strong>——两者缺一不可。如果你的 stake 上升 5%，说明你既预测了价格，又提供了独特的 alpha。
</div>

</div>

---
layout: default
---

# Numerai vs. Quantopian：为何一个活下来

<div class="mt-4 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Quantopian（已关停）

<div class="space-y-2 mt-2">
<div class="p-2 bg-white rounded text-sm">
<strong>时间</strong>：pre-blockchain, pre-machine learning
</div>
<div class="p-2 bg-white rounded text-sm">
<strong>模型</strong>：手写规则算法——"我要在日本做多科技股 overnight"
</div>
<div class="p-2 bg-white rounded text-sm">
<strong>激励</strong>：<strong>没有 staking，没有 skin in the game</strong>
</div>
<div class="p-2 bg-white rounded text-sm">
<strong>结果</strong>：自己写论文说 99% 的社区在 overfitting
</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Numerai（$600M AUM）

<div class="space-y-2 mt-2">
<div class="p-2 bg-white rounded text-sm">
<strong>时间</strong>：post-blockchain, deep learning era
</div>
<div class="p-2 bg-white rounded text-sm">
<strong>模型</strong>：从混淆数据中学习——任何方法都可以
</div>
<div class="p-2 bg-white rounded text-sm">
<strong>激励</strong>：<strong>NMR staking = 真金白银的后果</strong>
</div>
<div class="p-2 bg-white rounded text-sm">
<strong>结果</strong>：staking 解决了 overfitting 问题
</div>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Richard 的类比</strong>：Millennium 本质上就是一个"crowdsourced hedge fund"，而且它成功了。关键在于<strong>激励机制的设计</strong>，而非 crowdsourcing 这个概念本身。
</div>

</div>

---
layout: two-cols
---

# Stake-Weighted Meta Model

<div class="text-sm leading-relaxed space-y-3 pr-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>最简单的方案打败了所有复杂方案</strong><br>
很多人问："为什么不只用最好的模型？"但"最好"是用什么指标衡量？过去 12 个月最好？——下 12 个月可能就是最差的。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Stake-weight 的三大优势</strong><br>
1. <strong>始终前瞻</strong>：反映当前参与者的 live 信心<br>
2. <strong>自纠正</strong>：如果有人 stake 太多，几个月后他的 stake 就会烧掉<br>
3. <strong>资本积累信号</strong>：赚到 $1M NMR 的人——他已经证明了自己
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"That's the thinking with stake weighting and it's very hard to beat. We have tried. We didn't think the easiest thing would be the one that worked, but it definitely beats everything else."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meta-model-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 组合构建与风险中性化

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>天然低因子暴露</strong><br>
所有信号都训练在已中性化的 target 上，所以 meta model 天然几乎没有因子暴露。没有 reward 赌动量——即使动量涨了你也赚不到钱。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>中性化的维度</strong><br>
• Barra 风险模型的所有因子<br>
• 行业<br>
• 国家<br>
• 货币<br>
• <strong>远不止这些</strong>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>目标</strong><br>
<strong>"最纯净的 alpha"</strong><br>
与所有风险因子正交<br>
一致、高质量、可持续
</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"You can do attribution on our performance and you won't find those normal factors."
</div>

</div>

---
layout: default
---

# 2023：最深的回撤

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600 my-2">-16%</div>
<div class="text-xs opacity-70">2023 年回报</div>
</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600 my-2">15%</div>
<div class="text-xs opacity-70">年化波动率</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600 my-2">~600</div>
<div class="text-xs opacity-70">持仓股票数（当时）</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>问题：过度集中</strong><br>
• 有时只持有 ~600 只股票<br>
• 对量化基金来说太少了<br>
• 仓位规模很高<br>
• 策略对下行年份很脆弱
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>讽刺的背景</strong><br>
• 2020 (COVID)：表现很好<br>
• 2021 (meme stock)：表现很好<br>
• 2022 (市场暴跌)：表现很好<br>
• 2023 (市场平静上涨)：反而亏了 16%<br>
• 而且完全 Barra 中性
</div>

</div>

</div>

---
layout: default
---

# Crowding：看不见的杀手

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<strong>即便 Barra 中性，仍然可以亏很多钱</strong><br>
一位投资人要了 Numerai 的持仓去看，看完说："我简直不敢相信你们亏了这么多。"问题不在因子暴露——<strong>在 crowding</strong>。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Crowding = 你持有的东西别人也在持有</strong>，这让持仓比风险模型预测的更危险。你的回撤会比波动率所暗示的更大。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Numerai 的应对</strong><br>
<strong>在 MMC 上加倍下注</strong>——激励数千名数据科学家去构建<strong>反 crowding</strong> 的模型。<br><br>
如果每个贡献者都在努力变得与众不同，你在市场承压时就会好得多。
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>结果</strong><br>
• 2023：花大量时间升级风险系统和 targets<br>
• 2024：<strong>有史以来最好的一年</strong><br>
• "Is it about the models? Was it about the data? Was it about the risk? <strong>It's always be world-class at everything.</strong>"
</div>

</div>

</div>

---
layout: default
---

# 从纸上 Alpha 到可交易 Alpha

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>真实的挑战</strong><br>
纸上 alpha 不代表可以捕获——小盘股、不能做空的标的、流动性不足都会让信号不可交易。早期 Numerai 的 alpha 就踩过这些坑。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>股票池从 8,000 缩到 6,000</strong><br>
获得了更好的做空可得性数据和流动性数据后，发现最底部的 2,000 只股票根本无法建立有意义仓位——<strong>直接从 universe 中删除。</strong>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>持续收紧 target 约束</strong><br>
当 universe 被清理后，模型自己会照顾好自己——它根本学不到那些不可交易的信号。这是<strong>年复一年</strong>的精细化工程。
</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"The details really matter, but you can make your alpha really transfer to the portfolio."
</div>

</div>

---
layout: two-cols
---

# AI Agent + skills.md

<div class="text-sm leading-relaxed space-y-3 pr-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>从 AutoML 到 Agentic AutoML</strong><br>
早期的 AutoML 公司直接把系统用在 Numerai 上——但没有人类做得好。2024 年 11 月，新范式出现了：<strong>让 AI agent 来做 AutoML</strong>。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>skills.md 的关键作用</strong><br>
直接把 Claude 指向 Numerai 数据，它会犯错——不知道数据是 time series，以为所有行可以互换。skills.md 编码了<strong>领域知识</strong>，三行代码就让 agent 正确理解问题。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"We see it as a gift from God that Anthropic is investing so much money into their models and basically giving it to all of Numerai users for below cost."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-automl.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# "Every user is now 100 IQ points higher"

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Agent 能做什么</strong><br>
• 理解时间序列结构的 walk-forward cross validation<br>
• 特征工程、模型选择、超参调优<br>
• <strong>10,000 个并行实验</strong><br>
• 连续跑 <strong>3 天</strong>，无人值守
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>这为什么是 Singularity Moment</strong><br>
• AI labs 在模型上投资数千亿，Numerai 用户以<strong>低于成本价</strong>使用<br>
• agent 处理每一层工作，用户只需等待结果<br>
• "我们设置了 Numerai 就是为了等待这一刻"
</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>MCP Server + skills.md = 完整的研究框架</strong><br>
MCP server 提供 API 交互，skills.md 定义了 Numerai 自己的研究方式——包含所有关于如何在 Numerai 数据上做好数据科学的知识。这比 MCP 本身更重要。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"The agent goes for about three days before completing its work. So you're really just doing nothing for three days and then out comes a model that's probably really strong on the leaderboard."
</div>

</div>

---
layout: two-cols
---

# Numerai Predictive LLM

<div class="text-sm leading-relaxed space-y-3 pr-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>重新利用 LLM 的大脑</strong><br>
取一个开源 LLM——它本来能写诗、做数学、写代码。Numerai <strong>重新改造它</strong>：输入新闻，输出股票未来回报的预测。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>全新的数据维度</strong><br>
从互联网文本中生成<strong>完全新颖且正交的特征</strong>——这不同于 Numerai 传统的结构化数据。LLM 阅读整个互联网来产生交易信号。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>三重 agent 化</strong>：内部代码由 agent 写、Numerai 用户用 agent 建模、LLM 从互联网生成 alpha 信号——"这就是我一直希望的样子。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./predictive-llm.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Numerai Singularity：Portable Alpha

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>新基金：Numerai Singularity</strong><br>
<strong>Long 全球股票 + Long Numerai alpha</strong>——也就是 return stacking / portable alpha。<br>
Richard 是第一个投资人，基金刚刚上线几天。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>为什么做这个</strong><br>
人们总说："你们去年 alpha 只有 9%，跑输了 S&P。"<br><br>
Richard 的回应：<strong>那 9% 全部是超越 S&P 的超额</strong>——你只需要把它跟 beta 包装在一起。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>自然的对冲</strong><br>
• 2023 年 Numerai alpha 表现差 → 市场涨了很多<br>
• 把两者叠加 → <strong>更平滑的回报路径</strong><br>
• "我们的 alpha 与市场正交，不代表我们不相信市场"
</div>

</div>

</div>

---
layout: default
---

# "市场组合是科幻级的"

<div class="mt-4 space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"One of the things I don't like is that people call buying the S&P passive investing because it really hides the ball. In reality, it's actually you got five hundred of the world's best CEOs to actively manage your capital all day, every day, and by the way, they have like hundreds and hundreds of thousands of the top talent in the world working for them."
</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Richard 的观点</strong>：把买 S&P 叫"被动投资"是一种误导。500 位全球最优秀的 CEO 每天在为你积极管理资本，还有几十万顶尖人才在为他们工作——<strong>这简直是科幻级别的 amazing</strong>。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>市场组合 + 纯 alpha = 最佳组合</strong>：Numerai Singularity 的理念——把市场 beta 这个"世界上最好的东西"和 Numerai 的纯 alpha 叠加在一起。
</div>

</div>

</div>

---
layout: default
---

# 时间的谜题

<div class="mt-4 text-sm leading-relaxed space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Richard 当下的执念：时间本身</strong><br>
作为投资人，你总是在谈论 return over time。但 Richard 开始质疑：<strong>时间到底是什么？</strong>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>命运的幻觉？</strong><br>
• 2015 年他在想 Ethereum 和 AI<br>
• 现在美国总统每天都在谈 Ethereum 和 AI<br>
• "这很诡异，像是在挑战《随机漫步的傻瓜》"<br>
• 你是真的擅长预测未来，还是只是运气好？
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Hyperstition</strong><br>
• "Everything has already happened"<br>
• 我们被拉向一个可以事先知道的未来<br>
• Elon Musk 的"天命"——人类想象一个未来，然后把它变成现实<br>
• "这是一个 quant 最不该说的话"
</div>

</div>

</div>

---
layout: default
---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"And what staking is, is it's skin in the game. It's the most fundamental element of capitalism, you might say."
<div class="text-xs opacity-60 mt-1 not-italic">— Richard Craib 解释 Numerai 代币的核心设计哲学</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"The biggest problem in data science is overfitting, and the biggest criticism of quant is you are just going to overfit the past."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 staking 不是锦上添花，而是根本性的解决方案</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"We see it as a gift from God that Anthropic is investing so much money into their models and OpenAI investing so much in their models and basically giving it to all of Numerai users for below cost."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 AI labs 的巨额投资如何惠及 Numerai 生态</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Is it about the models? Was it about the data? Was it about the risk? And it's always be world-class at everything."
<div class="text-xs opacity-60 mt-1 not-italic">— 2023 年回撤后的核心教训</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"One of the things I don't like is that people call buying the S&P passive investing because it really hides the ball."
<div class="text-xs opacity-60 mt-1 not-italic">— 市场组合不是"被动"的——500 位全球最佳 CEO 在为你工作</div>
</div>

</div>

---
layout: end
---

# 谢谢阅读

<div class="mt-8 text-xl text-gray-500">
Richard Craib × Flirting with Models · S7E28
</div>

<div class="mt-4 text-sm text-gray-400">
Numerai 的故事：从 8 岁追踪股票，到建立一个 $600M、以 crowdsourced alpha + staking 驱动的对冲基金。<br>
AI agents 正在重塑模型开发，Predictive LLM 从互联网文本中提取交易信号——<br>
"这就像一个 singular moment for Numerai。"
</div>
