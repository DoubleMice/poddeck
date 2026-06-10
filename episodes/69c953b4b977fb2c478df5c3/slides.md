---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '134. 【数据的综述】和谢晨聊，新时代的石油、历史、版图、数据金字塔、定价与Recipe'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 134. 【数据的综述】

<div class="text-xl opacity-70 mt-4">新时代的石油、历史、版图、数据金字塔、定价与Recipe</div>

<div class="mt-12 text-sm opacity-50">
谢晨（Steve）· 光轮智能创始人兼CEO · 2026年3月
</div>

<div class="mt-2 text-xs opacity-40">
前 Cruise 仿真负责人 → 英伟达自动驾驶仿真 → 蔚来自动驾驶仿真
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold">数据 ≈ 教育</div>
<div class="opacity-70 text-xs mt-1">谢晨提出"数据对于智能=教育对于人"的第一性框架，把数据产业定义为教育产业</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold">数据金字塔</div>
<div class="opacity-70 text-xs mt-1">真机数据（最顶）→ 仿真数据（中）→ 人类第一视角+互联网（底层），以仿真为中心的闭环</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold">LLM 60分 vs 机器人 0.6分</div>
<div class="opacity-70 text-xs mt-1">大模型预训练已到顶/后训练在路上；具身数据几乎为零——差两个数量级</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold">仿真 = 必备条件（不是加速器）</div>
<div class="opacity-70 text-xs mt-1">没有仿真，具身智能做不成。仿真 + 世界模型的共生关系正在形成</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<div class="font-bold">五家角逐 + 中美分化</div>
<div class="opacity-70 text-xs mt-1">字节/阿里/OpenAI/DeepMind/英伟达竞争机器人大脑；美国大脑领先，中国本体领先</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<div class="font-bold">最好的数据 = 先失败再成功</div>
<div class="opacity-70 text-xs mt-1">最反直觉的发现：完美的训练数据不如"犯错→纠错"的数据更有效</div>
</div>

</div>

---

# 谢晨的「试错式」职业路径

<div class="grid grid-cols-4 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">北大物理</div>
<div class="text-xs opacity-70 mt-1">年级110名→前五<br/>"发现天赋不够"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">哥大金融博士</div>
<div class="text-xs opacity-70 mt-1">"行业缺少创新<br/>对社会贡献有限"</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">Jet.com / 创业</div>
<div class="text-xs opacity-70 mt-1">电商定价AI<br/>狗友社交APP</div>
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="font-bold text-orange-700">Cruise → 英伟达 → 蔚来</div>
<div class="text-xs opacity-70 mt-1">L4仿真 → 供应商视角<br/>→ 主机厂视角</div>
</div>

</div>

<div class="mt-3 text-sm opacity-70 text-center italic">
"巴菲特和郎朗在十岁就找到了自己擅长什么。我花了很长时间发现自己不擅长什么。"
</div>

<div class="mt-4 text-sm leading-relaxed">
谢晨用了十几年时间，通过一次次"试错"——物理、金融、电商、社交App——最终在<strong>仿真+合成数据</strong>找到了自己的方向。这个寻找的过程本身，就是他后来创业哲学的原型：<strong>不断评价自己，找到最值得做的事</strong>。
</div>

---

# 数据 ≈ 教育

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

## 核心类比

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">知识之于人的智能</div>
<div class="text-xs opacity-70 mt-1">第一性需求，不可或缺</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">数据之于AI的智能</div>
<div class="text-xs opacity-70 mt-1">同理，也是第一性需求</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic rounded">
"如果从第一性原理上去思考的话，我其实认为数据可能应该跟人的教育的行业去类比"
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./data-education.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 数据产业的四个演进阶段

<div class="grid grid-cols-1 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold">1. 静态数据集时代（ImageNet）</div>
<div class="text-xs opacity-70">李飞飞定义——一次性填鸭式教育。给定图片+标注，正确即答案。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold">2. 工业化生产时代（Scale AI）</div>
<div class="text-xs opacity-70">工厂流水线——量贩式教育。大规模人力运营，管控质量/效率/交付时间线。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold">3. 反馈驱动时代（RLHF）</div>
<div class="text-xs opacity-70">师者传道授业——评测驱动。专家出题→发现弱点→针对性教学→再出更难的题。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<div class="font-bold">4. 系统驱动时代（Data Engine）</div>
<div class="text-xs opacity-70">以系统为中心——规模化私教。仿真放大人类经验，评测驱动迭代。光轮智能所在的阶段。</div>
</div>

</div>

<div class="text-xs opacity-50 mt-3 text-right">谢晨定义的四阶段论：从静态到动态，从填鸭到因材施教，从人工到系统</div>

---

# 数据标注的蜕变：从画框到出题

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500 text-sm leading-relaxed">

### 旧范式：标注 = 画框

<div class="space-y-2 mt-2 text-xs">
- 拿到传感器的数据 → 清洗 → 切片
- 规范化流程：这里画个框是自行车，那个是行人
- 自动标注 + 人在环质检
- 全国可能有<strong>10万-几十万人</strong>在做标注
- <strong>时薪几十人民币</strong>，提供的是正确信息
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500 text-sm leading-relaxed">

### 新范式：标注 = 出题+打分

<div class="space-y-2 mt-2 text-xs">
- 大语言模型 RLHF：没有标准答案
- 专家出题 → 给反馈 → 指出"哪里好/哪里不好"
- 编程题：10种写法，哪种最优？哪种模棱两可？
- <strong>时薪100美元+</strong>，提供的是经验和判断
- 从"甲方乙方"关系变为"共生伙伴"关系
</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">
谢晨的观察：标注行业正在从<strong>"有多少人工就有多少数据"</strong>走向<strong>"有多少智能就有多少数据"</strong>的阶段。人不再是被动执行规范的操作员，而是主动提供经验和评价的老师。
</div>

---

# 从「以人为中心」到「以系统为中心」

<div class="mt-6">

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">

### ❌ 以人为中心的旧模式

<div class="space-y-2 mt-3">

- 大语言模型 RLHF：靠 100 万+ 时薪百刀以上的专家出题
- 具身如果要 1000 倍数据量呢？需要 10 亿人来做标注？
- **这条路不可规模化**

</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">

### ✅ 以系统为中心的新模式

<div class="space-y-2 mt-3">

- 仿真引擎放大端侧人的信号和经验
- 一个人的示范 → 算法驱动 → 成千上万条变体数据
- 评测驱动：先发现问题，再针对性交付数据
- **人只需要原来的百分之一**

</div>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic rounded">
"这个私教不应该是以人为中心的，它应该是以系统为中心的，只有这样才可以提供足够规模化的私教，就足够规模化的言传身教。"
</div>

</div>

---

# LLM vs 机器人：数据成熟度对比

<div class="mt-6">

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500 text-sm leading-relaxed">

<div class="text-center text-lg font-bold text-blue-700 mb-3">大语言模型（LLM）</div>

<div class="space-y-2">
<div class="flex items-center gap-2">
  <span class="text-blue-600 font-bold">预训练</span>
  <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">✅ 已到顶</span>
  <span class="text-xs opacity-60">互联网数据吃完了</span>
</div>

<div class="flex items-center gap-2">
  <span class="text-blue-600 font-bold">后训练 + 评测</span>
  <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">⚠️ 进行中</span>
  <span class="text-xs opacity-60">需要越来越难的题</span>
</div>

<div class="text-3xl font-bold text-blue-700 text-center mt-3">≈ 60分</div>
<div class="text-xs opacity-50 text-center">远未到天花板，Agent 数据更是新战场</div>
</div>

</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500 text-sm leading-relaxed">

<div class="text-center text-lg font-bold text-red-700 mb-3">具身智能（Robotics）</div>

<div class="space-y-2">
<div class="flex items-center gap-2">
  <span class="text-red-600 font-bold">预训练</span>
  <span class="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">❌ 极度匮乏</span>
  <span class="text-xs opacity-60">没有足够数据建立基础能力</span>
</div>

<div class="flex items-center gap-2">
  <span class="text-red-600 font-bold">评测</span>
  <span class="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">❌ 几乎没有</span>
  <span class="text-xs opacity-60">无法规模化评价</span>
</div>

<div class="text-3xl font-bold text-red-700 text-center mt-3">&lt; 0.6分</div>
<div class="text-xs opacity-50 text-center">假设 100 万台机器人数据是 60 分起点，现在连 1 万台都没有</div>
</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
小俊问机器人数据是否"结构性的难"，谢晨答："对，我觉得要难很多，可能是几个数量级的难。"
</div>

</div>

---

# 为什么机器人数据这么难？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 自动驾驶有"免费评价"

<div class="space-y-2 mt-2">
<div class="text-xs opacity-80">✅ <strong>影子模式（Shadow Mode）</strong>：算法在车端静默运行，与司机操作对比 → 自动发现"错在哪"</div>
<div class="text-xs opacity-80">✅ 上百万辆车在路上跑 → 规模化真实数据</div>
<div class="text-xs opacity-80">✅ 任务相对单一：不要撞到任何东西</div>
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 机器人没有"免费评价"

<div class="space-y-2 mt-2">
<div class="text-xs opacity-80">❌ <strong>没有百万台机器人</strong>部署在端侧自动执行任务</div>
<div class="text-xs opacity-80">❌ 遥操作成本高，不具规模性</div>
<div class="text-xs opacity-80">❌ 任务极度复杂：抓杯子要知道材质/力度/角度</div>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold">唯一的出路：仿真 + 人类第一视角数据</div>
<div class="text-xs opacity-70 mt-1">这两类数据不依赖机器人本体，可规模化采集。数据金字塔的中层和底层才是具身数据的绝对主力。</div>
</div>

---

# 评价：被遗忘的「免费午餐」

<div class="mt-4">

<div class="text-sm leading-relaxed">
谢晨指出了一个被多数人忽视的关键差异：<strong>自动驾驶和大语言模型之所以发展快，是因为它们有"免费的评价"。</strong>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">🚗 自动驾驶</div>
<div class="text-xs opacity-70 mt-1"><strong>影子模式</strong><br/>算法在车端静默运行<br/>与司机操作实时对比<br/>差异=学生犯错=免费信号</div>
</div>

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">💬 大语言模型</div>
<div class="text-xs opacity-70 mt-1"><strong>用户反馈</strong><br/>ChatGPT/GPT上线后<br/>每次交互都是评价<br/>免费+规模化的影子模式</div>
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="font-bold text-red-700">🤖 具身智能</div>
<div class="text-xs opacity-70 mt-1"><strong>什么都没有</strong><br/>没有百万台机器人部署<br/>没有用户自然反馈<br/>没有免费评价信号</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic rounded">
（小俊问是不是"结构性的难"）"对，我觉得要难很多，可能是几个数量级的难。"
</div>

</div>

---

# "数据即模型"——对还是错？

<div class="mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mb-4">
<div class="font-bold">广密的观点（李广密）：</div>
<div class="text-xs opacity-70 mt-1">模型是一个巨大的压缩器——如果数据分布里没有某类数据，该任务就不成功。"数据即模型，模型即应用。"</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<div class="font-bold text-green-700">谢晨：短期对，长期不对</div>
<div class="text-xs opacity-70 mt-1">泛化能力不够时确实需要什么任务就喂什么数据。但这是<strong>模型架构问题</strong>，不是本质。</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<div class="font-bold text-red-700">本质：系统级学习能力</div>
<div class="text-xs opacity-70 mt-1">"不能说是知识即模型，应该是一个不断提升的系统级能力。"——小孩看画本够用，马斯克需要高阶知识。</div>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm italic rounded">
"数据即模型这个观点在长期，我认为它不是一个本质的观点。模型的架构还是需要去提升的——一个模型如果不具备 zero-shot 泛化能力，就不是真正通往通用智能的模型。"
</div>

</div>

---

# 数据金字塔：具身智能的数据架构

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

## 三层结构

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="font-bold text-sm">🔺 顶：真机遥操作数据</div>
<div class="text-xs opacity-70">最准确、最好用<br/>❌ 最难规模化（成本+场景）</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">
<div class="font-bold text-sm">🟡 中：仿真合成数据</div>
<div class="text-xs opacity-70">规模化能力强<br/>⚠️ sim-to-real gap（正在缩小）</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-sm">🟢 底：互联网 + 人类第一视角</div>
<div class="text-xs opacity-70">完全不依赖本体，规模化最强<br/>✅ 戴眼镜就能采集</div>
</div>

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./data-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="text-xs opacity-50 mt-2">概念由李飞飞的学生朱易可教授提出；谢晨的实践发现：金字塔并非三层独立，而是一个以仿真为中心的闭环</div>

---

# 以仿真为中心的数据闭环

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
<strong>谢晨的关键修正：</strong>数据金字塔给人的印象是三层独立。但实际上，仿真（中间层）是连接上下的枢纽——它既需要从真实世界拿数据（real→sim），又需要与真实世界对标（sim→real）。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">真实 → 仿真</div>
<div class="text-xs opacity-70 mt-1">人类第一视角视频中提取物理世界、任务、评价标准，注入仿真环境</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">
<div class="font-bold text-yellow-700">🔄 仿真引擎</div>
<div class="text-xs opacity-70 mt-1">调度资源、规模化生成变体、自动标注、人在环质检</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">仿真 → 真实</div>
<div class="text-xs opacity-70 mt-1">与真机评测对标、缩小 sim-to-real gap、验证数据有效性</div>
</div>

</div>

</div>

---

# 最好的数据：「先失败再成功」

<div class="mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed mb-4">
<div class="font-bold text-lg">反直觉发现</div>
<div class="mt-2">最早客户要求的是<strong>完美的</strong>数据——机器人流畅地做好一个披萨。但迭代后发现：<strong>出错再纠正</strong>的数据对模型提升更大。</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">

### ❌ 旧认知：完美数据最好

- 自动驾驶：标准答案式的完美标注
- 机器视觉：正确的框图+标签
- "给定正确答案 = 最好的数据"

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">

### ✅ 新认知：纠错数据更贵

- 做披萨时蘑菇掉桌上→再捡起来
- 失败→纠错→成功的完整轨迹
- "负样本或纠正的数据，往往是更有效的"

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic rounded">
"其实最有效的数据是先失败再成功的数据。…有点像人的学习——失败了以后再成功的经验，往往是最宝贵的。"
</div>

</div>

---

# 高质量数据的 Recipe

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500 text-sm">
<div class="font-bold text-blue-700">物理场景</div>
<div class="text-xs opacity-70 mt-1">足够多样化<br/>交互真实<br/>符合真实物理</div>
<div class="text-xs mt-2 px-2 py-0.5 bg-blue-100 rounded">🌍 世界</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500 text-sm">
<div class="font-bold text-green-700">经验轨迹</div>
<div class="text-xs opacity-70 mt-1">操作流畅<br/>包含失误+修正<br/>语言标注</div>
<div class="text-xs mt-2 px-2 py-0.5 bg-green-100 rounded">🧠 示范</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500 text-sm">
<div class="font-bold text-purple-700">评价指标</div>
<div class="text-xs opacity-70 mt-1">成功/失败标注<br/>长程任务分段<br/>细粒度评判</div>
<div class="text-xs mt-2 px-2 py-0.5 bg-purple-100 rounded">📏 标准</div>
</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold">一小时"做披萨"的数据卖多少钱？</div>
<div class="text-xs opacity-70 mt-1">从几十人民币到上千人民币不等。高质量数据（含纠错+精细标注）在<strong>几百到上千人民币/小时</strong>区间。</div>
</div>

---

# 仿真：加速器还是必备条件？

<div class="mt-4">

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-yellow-50 border-t-4 border-yellow-500 text-sm leading-relaxed">

### 自动驾驶：加速器

- 主要数据来源：车上路采回的真实数据（被动采集）
- 仿真作用：补充 corner case + 回归测试
- 仿真 = 时间机器，有它更快，没它也能做

</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500 text-sm leading-relaxed">

### 具身智能：必备条件

- 没有百万台机器人在路上采集数据
- 仿真 = 唯一的规模化数据+评测来源
- **没有仿真，这件事肯定做不成**

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic rounded">
"我可以很肯定地说，仿真对于机器人，它是一个必备条件。没有仿真，这件事肯定做不成。"
</div>

<div class="mt-2 text-sm leading-relaxed">
谢晨的核心逻辑：机器人的<strong>数据闭环</strong>和自动驾驶完全不同。自动驾驶是"本体驱动的数据闭环"（Tesla 模式），机器人必须是"<strong>本体无关的数据闭环</strong>"——而本体无关数据的两个主要来源就是<strong>仿真</strong>和<strong>人类数据</strong>。
</div>

</div>

---

# 仿真的严格定义

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### ✅ 什么算仿真

<div class="space-y-2 mt-2">

<div class="text-xs">🎯 <strong>物理准确</strong>：摩擦力、力学参数等要与真实世界对标，不只是"看起来像"</div>
<div class="text-xs">🎯 <strong>可复现</strong>：跑 100 遍结果相同（95-99% 一致率）</div>
<div class="text-xs">🎯 <strong>可交互</strong>：改变行动 → 观测不同结果</div>

</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### ❌ 什么不算仿真（现阶段）

<div class="space-y-2 mt-2">

<div class="text-xs">❌ <strong>视频生成模型</strong>：不可复现，无法做可靠评测</div>
<div class="text-xs">❌ <strong>游戏引擎</strong>（纯渲染）：物理不真实，cross-domain 太远</div>
<div class="text-xs">❌ <strong>纯视觉生成</strong>：没有行动能力，无法产生交互数据</div>

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<div class="font-bold">⚠️ 但世界模型有望成为"仿真的一种"</div>
<div class="text-xs opacity-70 mt-1">世界模型底层的生成能力 + 仿真的物理准确性 → 共生关系。谢晨的客户中，很多世界模型团队同时在用光轮的数据训练，光轮也在用世界模型做更好的生成和泛化。</div>
</div>

---

# 评测：被低估的最大瓶颈

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<div class="font-bold text-sm">具身评测现状</div>
<div class="text-xs opacity-70">学术 benchmark（Behavior 100题）最高分 <strong>26%</strong> 成功率。工业级大规模评测几乎为零。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<div class="font-bold text-sm">评测的作用</div>
<div class="text-xs opacity-70">没有规模化评测 → 无法衡量智能提升 → 不知道数据好不好 → 供需双方扯皮</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<div class="font-bold text-sm">大模型团队是全看到了</div>
<div class="text-xs opacity-70">近三个月，所有顶级大模型团队都找上门——不是因为需要更多训练数据，而是<strong>无法规模化评测</strong>。</div>
</div>

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./eval-bottleneck.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 五家角逐机器人大脑

<div class="mt-4">

<div class="grid grid-cols-5 gap-2 text-center text-sm">

<div class="p-2 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">字节</div>
<div class="text-xs opacity-60 mt-1">大规模基座模型<br/>+ 场景资源</div>
</div>

<div class="p-2 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="font-bold text-orange-700">阿里</div>
<div class="text-xs opacity-60 mt-1">千问基座模型<br/>+ 开源生态</div>
</div>

<div class="p-2 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">OpenAI</div>
<div class="text-xs opacity-60 mt-1">最强LLM基座<br/>+ 机器人团队</div>
</div>

<div class="p-2 rounded bg-red-50 border-t-4 border-red-500">
<div class="font-bold text-red-700">DeepMind</div>
<div class="text-xs opacity-60 mt-1">世界模型+RL<br/>+ 长期主义</div>
</div>

<div class="p-2 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">英伟达</div>
<div class="text-xs opacity-60 mt-1">Omniverse平台<br/>+ 物理AI战略</div>
</div>

</div>

<div class="mt-4 text-sm leading-relaxed">
<strong>还有第六家？</strong>谢晨认为 π（Pi）也应该属于这一类——它更像一个 frontier lab 而不是机器人公司。这些大模型团队的特点是：<strong>相信本体无关的数据、仿真、人类数据，追求 zero-shot 泛化</strong>。
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic rounded">
"这就是五家角逐机器人大脑的团队。" —— 谢晨在被问到"谁变得更激进了"时的回答
</div>

</div>

---

# 「大脑」vs「本体」：力量博弈

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500 text-sm leading-relaxed">

### 🧠 大脑公司（大模型派）

<div class="space-y-2 mt-2 text-xs">
- 追求 zero-shot 泛化能力
- 用最简单的本体（机械臂夹爪）验证智能
- 数据来源：本体无关（仿真+人类数据）
- 优势：infra（大几万张卡）、RL 基础设施
- **大模型团队今年开始大规模下场**
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500 text-sm leading-relaxed">

### 🤖 本体公司（硬件派）

<div class="space-y-2 mt-2 text-xs">
- 关注具体场景落地
- 复杂本体：轮式/足式/灵巧手
- 数据来源：真机采集（贵但准确）
- 优势：量产能力、成本控制、场景关系
- **中国本体比美国发展更快**
</div>

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">
谢晨的判断：特斯拉的"本体数据闭环"在具身不成立——因为不会有一个本体商能部署上百万台机器人、同时又做最好的大脑。具身的终局更可能是一个<strong>生态系统</strong>：大脑+数据+本体+场景，四方协作。
</div>

---

# Waymo vs Tesla：具身智能的两种路径

<div class="mt-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 🚗 Waymo 路线 → 垂域精耕

- 先在一个限定场景做到极致（旧金山）
- 再扩展到第二个城市
- ✅ 在垂直场景有壁垒和商业模式
- ❌ 迁移到新场景"伤筋动骨"——架构、数据、模型都要重做
- <strong>类比：矿山自动驾驶</strong>——一个垂域做好了，但跨域极难

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 🚀 Tesla 路线 → 泛化优先

- 一开始就广泛采集数据
- 追求 scalable 的泛化能力
- ✅ 一旦起来，规模化极快
- ⚠️ 但具身领域没有百万台车为你采数据
- <strong>类比：Figure</strong>——想做具身 Tesla，但场景太模糊

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm italic rounded">
"具身可能没有 Tesla——如果真的是 Tesla 模式，大脑可能不是特斯拉做的，可能是 xAI 做的。"
</div>

</div>

---

# 中美分化：美国大脑强，中国本体强

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500 text-sm leading-relaxed">

### 🇺🇸 美国：大脑领先

- OpenAI、DeepMind、英伟达在大脑上投入巨大
- Frontier lab 追求泛化性
- 大几万张卡的基础设施
- 仿真+人类数据路径走得更早
- <strong>谢晨的美国客户从"真机派"转向"仿真派"只用了 3 个月</strong>

</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500 text-sm leading-relaxed">

### 🇨🇳 中国：本体领先

- 宇树（Unitree）：本体最稳定、可量产
- 智元：商业化走得最好，上下游打通
- 很多机器人公司底层是"数采中心"模式
- <strong>国内仿真派少于真机派——"屁股决定脑袋"</strong>
- 谢晨看好国内大脑追上来：千问等开源基座 + 大厂开始转资源到具身

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm italic rounded">
"国内的大模型能力是极高的——千问现在是可能最好的开源大模型。他们在这做的决心足够高。"
</div>

---

# 什么数据被高估？什么被低估？

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold">📈 真机数据——被高估</div>
<div class="text-xs opacity-70 mt-1">过去3个月行业已转向：所有顶级大模型团队（包括之前坚拒仿真的）都开始大规模采购仿真数据和仿真评测。真机数据最准确但最难规模化，注定无法成为具身数据的主力。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold">📉 仿真——被低估（尤其是评测端）</div>
<div class="text-xs opacity-70 mt-1">大模型团队已完全看到仿真的评测价值。但很多机器人公司还在"开始看到"阶段——当它们要处理的任务数量和开放场景越来越大时，会发现仿真绕不开。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold">📉 人类第一视角数据——也被低估</div>
<div class="text-xs opacity-70 mt-1">把人当成一种"机器人"来采集操作数据。关键是消费级硬件（Meta Ray-Ban 式）——"人喜欢戴这个眼镜，而不是为了数据才戴"。</div>
</div>

</div>

---

# 数据产业的生态版图

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="text-sm leading-relaxed">

## 不仅是数据工厂，是数据引擎

<div class="space-y-3 mt-3">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>物理资产层</strong>：自研非刚体物理计算器（线缆插拔）；物理测量工厂用机械臂自动测力学参数
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">
<strong>数据采集层</strong>：遥操作工具链（人驱动，质量最高）+ 算法自动采集（规模化）
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>数据标注层</strong>：大模型自动标注 + 人在环质检
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>评测管线</strong>：真实→仿真（real2sim）+ 仿真对标真实（sim2real）
</div>

</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./data-engine.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="text-xs opacity-50 mt-2">全职工程团队约100人；定位从 data factory（工厂）升维到 data engine（引擎）</div>

---

# 具身 Scaling Law 的曙光

<div class="mt-4">

<div class="text-sm leading-relaxed">
谢晨观察到，过去几个月具身数据出现了质的突破，scaling law 的迹象已开始显现：
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">李飞飞 Behavior</div>
<div class="text-xs opacity-70 mt-1">100道难题<br/>最高成功率 26%<br/>学术级挑战基准</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">英伟达 GR00T</div>
<div class="text-xs opacity-70 mt-1">大规模仿真数据<br/>证明合成数据有效性<br/>产业级验证</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">Generalist 27万小时</div>
<div class="text-xs opacity-70 mt-1">乌米夹爪人类数据<br/>在模型上看到<br/>明确的 scaling law</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic rounded">
"过去几个月可能是一个质的一个飞跃……原来是我们需要去刺激需求，到现在我们可能是要去规模化我们的团队，来真正的交付客户的需求。"
</div>

<div class="text-sm leading-relaxed mt-3">
关键转折：这些突破的共同特点是<strong>都基于本体无关的数据</strong>——仿真数据或人类第一视角数据。真机数据在量级上无法支撑 scaling law 的出现。
</div>

</div>

---

# 数据定价：从几十到上千元/小时

<div class="mt-4">

<div class="text-sm leading-relaxed mb-4">
具身数据的定价仍处于发散阶段，但谢晨透露了一些关键区间：
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<div class="font-bold text-sm">预训练数据（相对标品）</div>
<div class="text-xs opacity-70 mt-1">全世界5家大模型公司平摊成本。价格最低，大家对"提升通用基础能力"有共识。</div>
<div class="text-xs mt-2 px-2 py-0.5 bg-blue-100 rounded text-center">几十元/小时 → 平摊模式</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<div class="font-bold text-sm">评测+后训练数据（非标品）</div>
<div class="text-xs opacity-70 mt-1">评测驱动、针对性交付。基于客户弱点定制，每家独享。</div>
<div class="text-xs mt-2 px-2 py-0.5 bg-purple-100 rounded text-center">更高价 → 独家交付</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<div class="font-bold">高质量数据：几百到上千元人民币/小时</div>
<div class="text-xs opacity-70 mt-1">包含：足够多样化场景 + 专业操作轨迹（含失误+修正）+ 精细标注——三大要素共同构成一个结构化数据单元。纠正数据（先失败再成功）比完美数据更贵。</div>
</div>

</div>

---

# 世界模型、VLA、LLM：三种大脑

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">🌐 大语言模型（LLM）</div>
<div class="text-xs opacity-70 mt-1">数字世界的大脑<br/>文本+代码理解<br/>已有世界模型雏形<br/><strong>缺乏物理理解</strong></div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">🌍 世界模型</div>
<div class="text-xs opacity-70 mt-1">云端的物理大脑<br/>理解+预测物理世界<br/>不需要行动能力<br/><strong>可做 VLA 基座</strong></div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">🤖 VLA</div>
<div class="text-xs opacity-70 mt-1">端侧的物理大脑<br/>视觉+语言+行动<br/>实际操控机器人<br/><strong>需要行动数据</strong></div>
</div>

</div>

<div class="mt-4 text-sm leading-relaxed">
三者训练基础设施和底层基座正在趋同。谢晨的客户中，一个公司可能有三个团队同时在合作——VLA 用光轮的评测，世界模型用光轮的数据。<strong>评价标准越统一，世界模型和 VLA 越可能合二为一。</strong>
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic rounded">
"Behavior 这套评价体系，既可以评价 VLA，又可以评价世界模型。如果评价系统越来越一致，将来这两件事可能会越来越相关。"
</div>

---

# 仿真 × 世界模型：共生而非替代

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500 text-sm">
<div class="font-bold text-sm text-blue-700">仿真 → 世界模型</div>
<div class="text-xs opacity-70 mt-1 space-y-1">
- 提供物理 grounded 的训练数据<br/>
- 帮助世界模型提升物理预测准确性<br/>
- 提供符合真实物理的行为数据
</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500 text-sm">
<div class="font-bold text-sm text-green-700">世界模型 → 仿真</div>
<div class="text-xs opacity-70 mt-1 space-y-1">
- 用生成能力做更好的泛化<br/>
- 基于世界模型做更好的 grounded 输出<br/>
- 两者结合 → 更准确的生成式数据
</div>
</div>

</div>

<div class="mt-4 text-sm leading-relaxed">
谢晨的实践验证：光轮的客户中，很大比例是<strong>世界模型团队</strong>。他们在用光轮的仿真数据训练世界模型，光轮也在用世界模型增强仿真数据的生成和泛化能力。这不是谁取代谁的关系，而是<strong>"共同把这件事做得更大"</strong>。
</div>

---

# 数据产业的终局思考

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mb-4">
<strong>谢晨的类比：</strong>机器人 = 物理世界的 Agent；LLM Agent = 数字世界的 Agent。两者遇到的数据问题本质相同——都需要<strong>环境</strong>、<strong>经验传授</strong>、<strong>评价信号</strong>。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<div class="font-bold text-sm">Agent 的数据产品：RL Environment</div>
<div class="text-xs opacity-70 mt-1">虚拟滴滴网站、虚拟京东、虚拟编程环境——让 Agent 在里头不断试错、强化学习微调自己。AI 没见过真实人类工作，需要大量专家数据。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<div class="font-bold text-sm">具身的未来：仿真 RL Fine-tune</div>
<div class="text-xs opacity-70 mt-1">当预训练+评测达到一定基准，后训练（RL）就会成为关键。在仿真环境中定义成功标准→Agent 不断试错→提升自己。</div>
</div>

</div>

</div>

---

# 谢晨的「反直觉」数据洞察

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold">1. 完美数据不如纠错数据</div>
<div class="text-xs opacity-70 mt-1">先失败再成功的数据比完美执行的数据更有效——"更像人的学习"。做披萨时蘑菇掉了再捡起来的数据，比完美做完的数据更贵。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold">2. 真机数据被高估，仿真被低估</div>
<div class="text-xs opacity-70 mt-1">过去 3 个月，所有"真机派"的顶级大模型团队都开始大规模采购仿真数据。真机数据虽准确但无法规模化。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold">3. 人类第一视角数据也被低估</div>
<div class="text-xs opacity-70 mt-1">把人当机器人——用第一视角（眼睛位置）采集的操作数据，直接和机器人数据一起训练。关键是需要消费级硬件（如 Meta Ray-Ban）让人自愿佩戴。</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold">4. 数据越贵≠越准确，而是越难定义</div>
<div class="text-xs opacity-70 mt-1">旧时代数据 = 正确标注。新时代数据 = 多样性的分布 + 纠错轨迹 + 精细评价。没有"标准答案"，贵在能帮助模型从错误中学习。</div>
</div>

</div>

---

# 数据的终局：一个教育系统，而非工厂

<div class="mt-4">

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">
<div class="font-bold text-center text-red-700 mb-2">旧叙事：Data Factory</div>
<div class="text-xs space-y-2">
- 工厂流水线<br/>
- 被动交付甲方需求<br/>
- 量贩式标准化知识<br/>
- 人越多越强<br/>
- <strong>终将被淘汰</strong>
</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-sm leading-relaxed">
<div class="font-bold text-center text-green-700 mb-2">新叙事：Data Engine → 教育系统</div>
<div class="text-xs space-y-2">
- 评测驱动的学习引擎<br/>
- 主动发现客户弱点、刺激新需求<br/>
- 因材施教的个性化知识<br/>
- 系统放大人的经验<br/>
- <strong>更像一个学校/教育体系</strong>
</div>
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic rounded">
"我越来越觉得我们做的可能是一个教育公司。终局的数据公司可能跟教育公司是长得越来越像的。"
</div>

</div>

---

# 最终形态：AI 的自我学习时代

<div class="mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed mb-4">
<strong>当 AI 达到诺贝尔奖水平，谁来教它？</strong>谢晨认为，参考爱因斯坦的"思考实验"——AI 最终的进化方式是在仿真的物理环境中自我对弈、自我修炼。
</div>

<div class="grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">📖 当前阶段</div>
<div class="text-xs opacity-70 mt-1">"学校+老师+考试"<br/>需要人类提供示范<br/>需要评测反馈<br/>需要纠错数据</div>
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">🔄 过渡阶段</div>
<div class="text-xs opacity-70 mt-1">RL Environment<br/>在仿真中定义成功标准<br/>Agent 自己试错<br/>"今天的我 vs 昨天的我"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">🌌 终局</div>
<div class="text-xs opacity-70 mt-1">"人就在一个仿真里"<br/>AI 自己设定成功指标<br/>不断训练内功<br/>数据工厂消失，环境留下</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic rounded">
"到终局的时候很有可能，所有人都不用我的数据，但都用我仿真的环境，在里头用 RL 不断地修炼内功。"
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"数据可能应该跟人的教育的行业去类比——数据对于模型、对于智能，有点类似于教育行业对于人的学习。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谢晨定义数据的第一性原理</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"最有效的数据是先失败再成功的数据。…有点像人的学习——失败了以后再成功的经验，往往是最宝贵的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对数据质量的重新定义</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"仿真对于机器人，它是一个必备条件。没有仿真，这件事肯定做不成。"
<div class="text-xs opacity-60 mt-1 not-italic">— 仿真从加速器升维到先决条件</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"大语言模型可能到了60分……对于具身来讲，假设100万个机器人的数据是一个起点……我觉得现在都没有一万台机器人，可能0.6分都不到。"
<div class="text-xs opacity-60 mt-1 not-italic">— 量化两个领域的数据差距</div>
</div>

</div>

---

# 核心金句（二）

<div class="space-y-2 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"不能说是知识即模型，应该是一个不断提升的系统级能力。小孩的学习看画本就够了，但马斯克需要更高阶的知识和信号。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对"数据即模型"的反驳</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"这个私教不应该是以人为中心的，它应该是以系统为中心的，只有这样才可以提供足够规模化的言传身教。"
<div class="text-xs opacity-60 mt-1 not-italic">— 从 human-centered 到 system-centered</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"到终局，可能就跟马斯克说的，咱们人可能就在一个仿真里头。…基于他自己设定的一些成功指标，不断地训练自己的内功。"
<div class="text-xs opacity-60 mt-1 not-italic">— 数据产业的终极想象</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"具身可能某种程度上现在还应该是一个供给驱动的市场——先把量做出来，真正驱动整个行业的提升。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对当前行业阶段的判断</div>
</div>

</div>

---

# 一场关于数据的深度对话

<div class="mt-8 text-center">

<div class="text-lg opacity-70 mb-6">
算力、算法、数据——AI 的三驾马车中，数据或许是最被低估的那一驾。
</div>

<div class="text-sm opacity-60 leading-relaxed max-w-xl mx-auto">
这期节目里，谢晨用他跨越物理、金融、自动驾驶、具身智能的独特视角，
把"数据"从一个看似枯燥的工程问题，拆解成了一个关于<strong>学习、教育和智能本质</strong>的故事。
</div>

<div class="mt-8 text-sm opacity-50">
从 ImageNet 的静态数据集到 AI 自我修炼的仿真世界——<br/>
数据产业正在经历的，可能是一场从"工厂"到"学校"的范式转换。
</div>

<div class="mt-6 text-xs opacity-40">
Full episode: xiaoyuzhoufm.com/episode/69c953b4b977fb2c478df5c3
</div>

</div>
