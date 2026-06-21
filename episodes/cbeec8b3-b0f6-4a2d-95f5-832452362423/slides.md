---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E223｜应用爆发之年：聊聊模型技术进化与商业化'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E223｜应用爆发之年：聊聊模型技术进化与商业化

<div class="pt-6 text-base opacity-70">
硅谷101 · 2026年1月
</div>

<div class="mt-10 text-sm opacity-50 space-y-1">
<div>嘉宾：徐栋（阿里云千问大模型业务总经理）</div>
<div>刘靖康（影石科技联合创始人兼CEO）· 齐露（360研究院总监）</div>
<div>吕总（语义科技CEO）</div>
</div>

<div class="mt-6 text-xs opacity-40">
主持：洪君
</div>

---

# 本期看点

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**视频生成进入生产化**
从5秒到15秒+，镜头切换、光影变换、角色保ID——视频模型从娱乐工具走向短剧、广告的批量生产管线。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**推理成本半年降一个量级**
模型稀疏化、芯片垂直设计、云调度优化——三重驱动让推理成本每半年降约10倍。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Agent从概念走向落地**
推理能力+指令遵循+长上下文+工具调用——四个能力叠加，让Agent从单次对话走向持续自主运行。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**开源生态的飞轮效应**
千问从0.5B到235B全覆盖，7B模型打开全球格局，开源与闭源形成商业正循环。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**端云结合的新范式**
Omni 4B端侧模型进入手机和车厂，约70%的通用交互任务可在端侧解决，隐私与低延迟的新架构。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**AI商业化的中国路径**
从效果→性能→成本的三阶段需求演进；从降本到增效的范式转移；Token计费改变To B SaaS付费逻辑。

</div>

</div>

---

# 视频生成：从娱乐工具到生产管线

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

### 过去的局限

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded mt-2 leading-relaxed">

- 视频长度仅 **5-10秒**，难以支撑叙事
- 镜头单一，缺乏影视级的运镜变化
- 生成依赖"抽卡"，可控性差
- 应用集中在特效、娱乐等非生产场景

</div>

</div>

<div>

### 2025年的突破

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-2 leading-relaxed">

- 视频长度进入 **15秒时代**，向1分钟迈进
- 支持**多镜头切换**与光影变换，接近专业影视级能力
- **角色保ID（character）**——人物形象与声音在连续创作中保持一致
- 已进入短剧、漫剧、广告批量生产等**生产化场景**

</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
徐栋将万象视频模型目前的成熟度类比为GPT-4阶段——已经从"能用"跨越到"能在生产中用了"。
</div>

---

---
layout: two-cols
---

# 视频生成能力的四个维度

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**时长延长**  
从5秒→15秒→未来1分钟+，内容连贯性根本性提升。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**镜头语言**  
多镜头切换、光影变换，普通提示词即可实现专业导演效果。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**角色保ID**  
参考视频输入→形象+声音锁定→连续创作中保持一致，告别"抽卡"。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**可控性提升**  
输入端多维度参考（参考图→参考视频），生成结果从随机走向可控。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./video-gen-capability.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI漫剧：短剧市场的范式转移

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 市场背景

国内短剧市场已超过电影市场。传统短剧依赖真人拍摄和大量人工编辑，成本高、周期长。

漫剧从"动态漫"（图片微动效果）起步，如今已全面拥抱AI生成，剧情连续、商业化能力强。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### AI带来的变化

一部短剧按品质分S/A/B级——合理成本下**AI可将制作成本压到两万元以下**，算上投流后ROI可打正。

精品化需求则需要更多后期制作投入，但品质上限也更高。关键在于：**AI不是在取代创意，而是在降低创意的门槛。**

</div>

</div>

<div class="mt-3 text-xs opacity-60">
徐栋："漫剧已经成为一个非常跟AI结合的一个事实了。"
</div>

---

# 广告自动化：5人团队日产6000条视频

<div class="grid grid-cols-3 gap-4 mt-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 传统模式
<div class="text-3xl font-bold text-blue-600 my-2">25-50元</div>
<div class="text-xs opacity-70">一条15秒合格广告<br/>的市场价格</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### AI模式
<div class="text-3xl font-bold text-green-600 my-2">10-15元</div>
<div class="text-xs opacity-70">一条15秒AI生成广告<br/>的成本</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 规模化效应
<div class="text-3xl font-bold text-orange-600 my-2">6000条/天</div>
<div class="text-xs opacity-70">5-10人团队使用万象+千问<br/>管线的日产能</div>

</div>

</div>

<div class="mt-4 text-sm leading-relaxed p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**产业分工正在形成**：广告主→agency→AI native创业公司（负责生成）→流量平台。万象模型和千问模型结合成管线，由专门做AI广告的创业公司承接，再交付给agency或广告主。

</div>

<div class="mt-1 text-xs opacity-60">
徐栋："我们看到这部分的AI创业公司越来越多。"
</div>

---

# 语言模型：看不见的范式，看得见的进步

<div class="text-xs opacity-60 mb-2">虽然难再看到o1级别的"范式突变"，但模型在多个维度上进行着「精耕细作」式的持续进化。</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

### 数据精细化

高质量数据集越来越少，但如何利用好现有数据——从不同角度、不同顺序训练——让模型在**corner case上的表现越来越好**。

每个模型公司都在做这件事。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">

### 模型稀疏化 + MTP

模型结构越来越稀疏，MTP（多token预测）技术广泛实践。TPS从30-50提升到**80-100+**，首包延迟从2秒降到**500毫秒以内**成为可能。

稀疏化同时带来成本的大幅下降。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed">

### 长上下文 + 指令遵循

工具调用轮次变多→需要更长上下文→指令执行更精准。三者叠加，让模型能在更复杂的生产环节中**连续运行**，而非单次问答。

</div>

</div>

---

---
layout: two-cols
---

# 推理成本下降的三重驱动力

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded">

**模型结构优化**  
稀疏化、混合精度、MTP——模型侧的持续技术改进，让推理效率不断提升。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**芯片垂直设计**  
模型与芯片的垂直一体化设计，软硬协同释放大量潜在红利——阿里巴巴「模型+芯片+云」三位一体。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**云调度优化**  
不同模型/任务/时段的智能调度，夜间跑批任务处理，将利用率从30-50%拉升到更高水平。

</div>

</div>

<div class="mt-4 text-sm font-bold text-center text-orange-600">
综合效果：推理成本每半年下降约一个量级（≈10倍）
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cost-reduction-drivers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Qwen3 Next：稀疏化的实践

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="text-sm leading-relaxed space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 什么是稀疏化？

不是所有参数都在每次推理时激活。用更少的活跃参数达到同等甚至更好的效果——**"大参数、小激活"**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Qwen3 Next 的实践

- **80B 总参数，仅 3B 激活**
- 对比前代30A3（30B参数/3B激活），稀疏比进一步提升
- 推理效率、效果、速度均大幅改善

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 为什么这很重要？

<div class="space-y-2 mt-2">

<div class="p-2 bg-white bg-opacity-50 rounded text-xs">

**更快的推理速度**：3B激活参数远小于传统30B+模型的推理开销。

</div>

<div class="p-2 bg-white bg-opacity-50 rounded text-xs">

**更低的部署成本**：降低对GPU显存的需求，让更多企业用得起。

</div>

<div class="p-2 bg-white bg-opacity-50 rounded text-xs">

**更好的效果**：80B的知识容量 + 3B的推理成本 = 极致的性价比。

</div>

</div>

</div>

</div>

<div class="mt-2 text-xs opacity-60">
徐栋："这个模型是下个版本的预演版本...推理效率、效果、速度都得到了非常大的改变。"
</div>

---

# 2025：应用为何在此时爆发？

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 推理能力的跨越

OpenAI o1在2024年底推出后，模型不再依赖单一的概率输出，开始表现出**逻辑偏好**。徐栋认为这是"**非常根本性的一件事情**"——推理能力让模型从"猜"变成了"想"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 指令遵循的质变

过去依赖workflow来兜底（因为模型有偏差，需要关键节点交叉验证）。如今模型**指令理解能力大幅增强**，给定足够的context后，能在泛化性与准确性之间找到平衡点。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 工具调用的标准化

MCP等标准让工具被"显性化"。模型**跳出输入输出窗口**，进入更多生产环节——SaaS流程、硬件交互、商业闭环。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 模型Size的可控增长

预训练改进让模型在变大同时可控性提高。复杂指令的精准执行成为可能。

</div>

</div>

</div>

---

# Agent：从Chatbot到自主运行的跨越

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**徐栋的展望**：未来的Agent不是"你问一句我答一句"的Chatbot，而是可以**连续运行两个礼拜**——吃掉闲时计算资源，自动调用搜索引擎、CRM、ERP、办公软件，最终产出一份深度报告或一个AI for science的研究成果。

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

### Tool Use
从单工具调用到多工具泛化调用，从浅层使用到深层调用——**泛化地使用工具**是Agent能力的核心。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### 长上下文
工具调用轮次变多→上下文拉长→**精准执行复杂指令**。上下文长度成为Agent能力的硬约束。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-center">

### Reasoning
从概率输出到逻辑偏好，模型开始展示**"思考"过程**——这是agent能做复杂决策的底座。

</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
徐栋："它拼在一起的时候，就会得到很大的一个实际业务落地的改变。"
</div>

---

# 开源战略：从7B的破圈到全球生态

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**起点**：2023年8月前后，千问7B模型获得巨大市场反馈，打开了全球格局。如今在海外开源社区活跃度极高，海外企业大量使用Qwen作为基模。

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 人才吸引力
顶级科研工作者和学生从学校就开始用千问，对模型特性了如指掌——**开源是最好的招聘广告**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 社区反馈加速迭代
推理框架、端侧部署的开发者最早围绕生态做建设，提出数据集问题和bad case——**社区是免费的QA团队**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 开源带云的正循环
阿里云是一家云公司。开源模型带动云基座发展，闭源API版本解决离线版的问题，**开源与闭源形成商业正循环**。

</div>

</div>

</div>

---

---
layout: two-cols
---

# 千问开源模型家族

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**极广的覆盖范围**  
从0.5B到235B，跨四个数量级——几乎任何场景都能找到合适尺寸的模型。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**高频迭代**  
每月发3个小版本，3-6个月发5个大版本。更新节奏在开源社区中属于最快梯队。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**小模型的大需求**  
最近三个月，客户对post-training和fine-tuning的需求急剧增加——基于闭源模型混入企业数据训练专属小模型。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**最大模型未开源**  
千问3 Max（最大杯）保持闭源——部署成本高，适合通过API服务高需求场景。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-family-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 端云结合：70%的任务端侧解决

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

**核心变化**：徐栋直言"今天的端侧模型比两年前我们的最大杯的模型效果都要来得好"——现在只要一个4B模型就能达到。通用类任务、基本交互（语音理解、视觉识别）——**约七成可通过端侧模型解决**。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 端侧处理
- 基础语音与视觉交互
- 隐私敏感任务（本地数据不出设备）
- 高时效性任务（毫秒级响应）
- Omni 4B模型已引发手机/车厂浓厚兴趣

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 云侧处理
- 复杂推理与深度分析
- 大规模并发任务（如智能外呼，半小时10万通电话）
- 需要大模型能力的专业场景
- 通过百炼平台统一调度

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
端云结合的架构经过了约两三年的打磨，开始进入"深水区"——算力强的手机和车厂率先实践。徐栋："端侧的模型开始被大家关注是因为今天需求越来越旺盛。"
</div>

</div>

---

# 客户需求的三个阶段

<div class="text-sm leading-relaxed mt-4">

<div class="grid grid-cols-3 gap-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400 text-center">

### 阶段一：效果
<div class="text-xs opacity-70 mt-1">"模型能不能用？"</div>

<div class="text-xs leading-relaxed mt-2 text-left">
客户提出大量垂直任务，构建评测集，验证模型在具体场景中的表现。
</div>

<div class="mt-3 text-xs font-bold opacity-60">← 早期阶段</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">

### 阶段二：性能
<div class="text-xs opacity-70 mt-1">"模型够不够快？"</div>

<div class="text-xs leading-relaxed mt-2 text-left">
精细化到区分4K input和10万input的不同TPS要求。高并发场景（智能外呼、直播）对延迟极度敏感。
</div>

<div class="mt-3 text-xs font-bold opacity-60">← 最近半年到一年</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 阶段三：成本
<div class="text-xs opacity-70 mt-1">"用不用得起？"</div>

<div class="text-xs leading-relaxed mt-2 text-left">
使用量比过去扩大几十到上百倍，成本成为核心话题。视频生成模型目前仍偏贵，批量化生产对成本极度敏感。
</div>

<div class="mt-3 text-xs font-bold opacity-60">← 当前核心关注</div>

</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
徐栋："客户开始从效果转变到了性能和成本...客户进入到严肃的生产环节。"
</div>

---

---
layout: two-cols
---

# Model as a Service vs Agent as a Service

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**MaaS（模型即服务）**  
强调模型服务能力——推最新模型、易用API、Realtime API、批量任务。核心价值在**模型本身的能力输出**。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**AaaS（Agent即服务）**  
可能用到多个模型，封装成标准化任务结果，直接交付给客户。deep research就是典型的Agent as a Service。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
**趋势**：两种模式并存。Token依然是最直观的业务使用量指标，但长期来看，商业化价值会回归到收入本身——可能不是直接来自token，而是来自token上封装的agent。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./maas-vaas.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 影石Insta360：全景AI剪辑的挑战

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
影石的核心理念是"先拍后剪"——用360度全景覆盖全部现场，后期再从中挑选最佳视角和节奏。但360度素材与普通平面素材本质不同，通用大模型对全景素材的理解力远不如平面素材。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 核心难点：意图识别

用户说"剪出我滑雪失败的瞬间"——AI要先理解"失败"的语义，再在视频中识别哪些画面是"失败"。更难的是，用户自己往往也不知道如何精确表达剪辑意图。

**这是当前模型最难的一步。**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 解决方案：自研 + 调用

- **自研全景理解模型**：针对360度素材做高光提取（类似世界模型的研究）
- **调用通用大模型**（千问多模态+万象视频生成）：负责平面素材的语义理解和编排
- **成本挑战**：剪一段3分钟360度视频约需十几元，希望通过全景特性压缩token数

</div>

</div>

</div>

---

# 语义科技：消费者意图识别的三层价值

<div class="text-sm leading-relaxed mt-4">

<div class="mb-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
语义科技是一家AI To B SaaS公司，服务雀巢、宝洁、泡泡玛特等头部消费品牌。核心业务：通过AI对消费者进线数据做意图识别，帮助品牌从"流量思维"转向"流量+消费者思维"。
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 消费者画像
不同于传统投流画像（年龄/白领标签），而是**与产品直接相关的深层特征**——肤质、过敏情况、使用场景。通过客服话术改造获取。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### 消费者意图
对产品、服务、物流、营销的**正面/负面反馈识别**。从海量对话中自动提取结构化洞察。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-center">

### 归因分析
以某头部日化企业为例：原来**6人团队**负责退货原因登记与责任部门归因，AI模型部署后**仅需1人复审**。每个企业的归因逻辑都不同，需要定制化Agent。

</div>

</div>

</div>

---

# AI的经济账：降本还是增效？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 阶段一：降本（2023年）

企业最先想到的是用AI替代重复性人力工作。比如客服售前咨询、退货归因审核。**省掉五个人**——但企业发现，"对大体量企业来说，省五个人的钱也就是这么回事"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 阶段二：增效（2024下半年起）

企业开始追问：**AI能不能帮我们发现新的产品机会、新的消费者需求、新的使用场景？** 从"省多少钱"转向"多赚多少钱"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm text-center">
吕总："降本是有限的，但增效的上限高得多——AI可以帮你发现你自己都没注意到的消费者需求。"
</div>

---

# 23%增长背后的洞察

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**案例**：国内头部家电品牌的高端产品线（客单价2万+），通过语义科技的AI消费者画像识别和细分反馈分析，重新设计营销卖点和接待话术。**合作一年半后，整体销量涨幅23%，高端线客单价再提升6%+。**

</div>

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 发现
AI从消费者进线数据中提取出品牌在设计卖点时**未曾关注的细分功能需求**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 转化
将这些需求转化为**主播话术、客服接线话术、营销物料**中的核心卖点。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 放大
从单一事业部推广到**全集团所有事业部**均接入AI识别模型，形成数据飞轮。

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
这是一个"涨价还增销"的案例——AI帮助品牌发现了消费者真正在乎但品牌自己没意识到的价值点。
</div>

</div>

---

# AI时代的决策：工具在升级，判断在人

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**吕总的观点**：当所有企业都接入了AI（"大家都升级了军火库"），竞争优势的差异会缩小——至少在意图识别、商品匹配、深度报告生成这些"大方向上"会趋于一致。**但真正的差异化在于人。**

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### AI能做到的
数据清洗、意图识别、标签化处理、深度搜索报告生成——**把海量非结构化数据变成可读的洞察**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### AI做不到的
**从洞察中发现真正的机会点**。AI处理过的数据摆在那里，但谁能从中看到别人看不到的东西——这取决于人的洞察能力。最终决策由CEO/CMO来做。

</div>

</div>

<div class="p-4 text-center bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"AI未来的核心价值还是掌握在人手里的——看如何去使用它的人。"<br/>
"好的产品经理、好的伙伴永远是有机会的。" —— 吕总
</div>

</div>

---

# AI重塑中国To B SaaS付费逻辑

<div class="text-sm leading-relaxed mt-4 space-y-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

### 过去的困境
中国To B客户付费意愿低。原因是：客户认为"谁都可以做这个软件，你没有特别大的价值"。SaaS的边际成本接近于零，客户不理解为什么要持续付费。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### AI带来的改变
AI按**token计费**——客户明确认知到：处理多少数据就产生多少成本。AI SaaS供应商是"有成本地在提供服务"，而非"复制粘贴软件"。这从根本上改变了付费逻辑。

</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center text-xs">

### 语义科技的定价模式
**License费** + **数据使用量费**（按处理的对话/帖子数量计）

</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-center text-xs">

### 结果
2024年完成**100%同比增长**，行业高增速；中国To B SaaS收费底层逻辑正在改善。

</div>
</div>

</div>

---

# 核心金句（一）

<div class="text-xs opacity-60 mb-3">本期对谈中最值得记住的几句——每一条都在transcript中可验证</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"漫剧已经成为一个非常跟AI结合的一个事实了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐栋，谈AI短剧的商业化现状</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"推理成本基本上都是按照半年快接近一个量级的这样一个下降。大家可以理解为一个量级就是十倍。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐栋，论成本下降的多重驱动因素</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"今天模型它就跳脱了原来的输入输出窗口，它开始进入到了更多的不同的生产环节。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐栋，论Agent的工具调用进化</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"今天的端侧模型比两年前我们的最大杯的模型效果都要来得好。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐栋，论端云结合的可行性</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-xs opacity-60 mb-3">续——更多本期值得记住的观点</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"AI未来的核心价值还是掌握在人手里的——看如何去使用它的人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 吕总，语义科技CEO，论AI时代的竞争优势</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic">
"客户开始从效果转变到了性能和成本...客户进入到严肃的生产环节。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐栋，论大模型商业化的三阶段演进</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我觉得AI其实对于To B SaaS这个行业来说，在客户收费意识教育上是起到了非常好的效果。"
<div class="text-xs opacity-60 mt-1 not-italic">— 吕总，论AI如何改变中国SaaS付费逻辑</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"好的产品经理、好的伙伴永远是有机会的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 吕总，对AI时代人的价值的判断</div>
</div>

</div>

---

---
layout: end
---

# 谢谢收听

<div class="mt-8 text-sm opacity-70">
硅谷101 · E223 · 2026年1月
</div>

<div class="mt-4 text-xs opacity-50">
应用爆发之年：聊聊模型技术进化与商业化
</div>

<div class="mt-6 text-xs opacity-40">
完整播客请订阅「硅谷101」— 苹果播客 / Spotify / 小宇宙 / B站 / YouTube
</div>
