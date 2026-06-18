---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E224｜深度拆解Clawdbot，为何它能成为2026年第一个现象级产品？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E224｜深度拆解Clawdbot

<div class="text-2xl mt-6 opacity-80">
为何它能成为 2026 年第一个现象级产品？
</div>

<div class="mt-10 text-sm opacity-50">
硅谷101 · 特约研究员 刘一鸣
</div>

<div class="mt-2 text-xs opacity-40">
嘉宾：之现（产品经理）· 正浩（EverMind 技术生态负责人）· 天琪（Pamir 创始人）
</div>

<div class="mt-8 text-xs opacity-30">
2026年2月
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>⚡ 现象级爆火</strong><br>
<span class="text-xs opacity-70">GitHub 几天突破 10 万星标，刷新 AI 项目最快增长纪录，引爆整个 AI Agent 生态</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>🔬 三重视角</strong><br>
<span class="text-xs opacity-70">用户侧（产品经理）、软件算法侧（EverMind）、硬件侧（Pamir）——全方位拆解底层逻辑</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>🧠 记忆系统</strong><br>
<span class="text-xs opacity-70">MD 文件 + SQLite 向量库 + 混合检索，如何让 AI 真正"记住"你</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>🤖 活人感</strong><br>
<span class="text-xs opacity-70">心跳机制、主动问候、IM 交互——为什么用户觉得它像 Jarvis 而不是工具</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>🔐 安全与部署</strong><br>
<span class="text-xs opacity-70">为什么大家都买 Mac Mini？专机专用是长期方案还是过渡形态？</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>🌊 生态冲击</strong><br>
<span class="text-xs opacity-70">Anthropic 律师函、模型厂商管道化焦虑、AI 数字分身与一人公司</span>
</div>

</div>

---

# Clawdbot 的戏剧性一周

<div class="mt-6">

<div class="grid grid-cols-4 gap-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-50">起点</div>
<div class="font-bold mt-1">Claude Bot</div>
<div class="text-xs opacity-60 mt-1">基于 Claude 模型<br>开源 Agent 项目</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-50">第一次改名</div>
<div class="font-bold mt-1">Mot Bot</div>
<div class="text-xs opacity-60 mt-1">Anthropic 律师函<br>品牌侵权风险</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-50">第二次改名</div>
<div class="font-bold mt-1">OpenClaw</div>
<div class="text-xs opacity-60 mt-1">最终定名<br>社区继续壮大</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-50">衍生生态</div>
<div class="font-bold mt-1">Mot Book</div>
<div class="text-xs opacity-60 mt-1">AI 社交网络<br>150 万 AI 发帖交流</div>
</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70">
<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-400">
<strong>关键背景</strong>：节目录制于 1 月 30 日，以上所有戏剧性变化都发生在录制后的 5 天内。AI 的发展速度远超预期。
</div>
</div>

---

# 三重视角解剖 Clawdbot

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-center font-bold text-blue-700 mb-2">👤 用户侧</div>
<div class="font-bold text-center mb-1">之现</div>
<div class="text-xs opacity-60 text-center mb-2">资深产品经理 · Crypto 背景</div>
<div class="text-xs opacity-80">
<p class="mb-1"><strong>核心发现：</strong></p>
<ul class="list-disc pl-4 space-y-1">
<li>活人感：像 Jarvis 而不像工具</li>
<li>IM 界面降低使用门槛</li>
<li>社区传播从极客圈扩散到大众</li>
<li>"用了就回不去了"</li>
</ul>
</div>
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-center font-bold text-green-700 mb-2">⚙️ 软件算法侧</div>
<div class="font-bold text-center mb-1">正浩</div>
<div class="text-xs opacity-60 text-center mb-2">EverMind 技术生态负责人<br>清华姚班 · CMU NLP</div>
<div class="text-xs opacity-80">
<p class="mb-1"><strong>核心发现：</strong></p>
<ul class="list-disc pl-4 space-y-1">
<li>记忆三层架构：人格/事实/工作</li>
<li>文本化设计降低用户感知门槛</li>
<li>主动性让记忆被"感知到"</li>
<li>Claude Code SDK 依赖风险</li>
</ul>
</div>
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-center font-bold text-purple-700 mb-2">💻 硬件侧</div>
<div class="font-bold text-center mb-1">天琪</div>
<div class="text-xs opacity-60 text-center mb-2">Pamir 创始人<br>高通机器学习 · 微软 Surface</div>
<div class="text-xs opacity-80">
<p class="mb-1"><strong>核心发现：</strong></p>
<ul class="list-disc pl-4 space-y-1">
<li>Agent 电脑是新品类</li>
<li>RAM 和存储是关键瓶颈</li>
<li>前后端工作分离</li>
<li>Mac Mini 是过渡形态</li>
</ul>
</div>
</div>

</div>

<div class="mt-4 text-xs opacity-50 text-center">
三位嘉宾分别代表用户、算法、硬件三个方向，共同回答一个问题：为什么是 Clawdbot？
</div>

---

# 为什么是 Clawdbot？—— 关键因素汇聚

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>1. 市场预热到位</strong>
<div class="text-xs opacity-70 mt-1">Claude Code、Claude Work、Manus 已经把大众对 Agent 的接受度预热。天琪说："同样的东西两三个月前做，大家不知道是怎么回事。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>2. 所有元素都做进去了</strong>
<div class="text-xs opacity-70 mt-1">天琪概括："它真的是沾了所有的东西——记忆、消息系统、Proactive 持续工作、经典 IM 交互。"</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>3. IM 降低了感知门槛</strong>
<div class="text-xs opacity-70 mt-1">同样的消息，在微信/飞书里收到 vs 在 Terminal 里收到——感受完全不同。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>4. 社区传播飞轮</strong>
<div class="text-xs opacity-70 mt-1">之现观察：从 AI founder、KOL 核心圈 → 扩散 → 临界点 → FOMO 情绪引爆。</div>
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./viral-factors.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 活人感：连接技术与用户的最后一步

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>什么是"活人感"？</strong>
<div class="text-xs opacity-70 mt-1">之现的体验："它特别有活人感。一个是长期记忆，另一个是主动性——每天早上跟你打招呼，总结今天要做的事，甚至把你要做的事预先调研好端给你。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>像 Jarvis，不像工具</strong>
<div class="text-xs opacity-70 mt-1">"整体用下来就特别像钢铁侠里面那个 Jarvis 这种感觉，甚至有时候跟你聊天的时候动不动抖个机灵吐槽一下。"</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>技术相似，感知不同</strong>
<div class="text-xs opacity-70 mt-1">之现指出核心矛盾："用户看不到它后面的技术和其他产品有多相似，但在感受上确实非常不一样。"正浩补充："主动性的价值不是记忆实现得好，而是让用户感知到记忆在发挥作用。"</div>
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm mb-2">🎯 关键洞察</div>
<div class="text-xs opacity-80 space-y-2">
<p>Clawdbot 解决的<strong>不是技术问题，而是感知问题</strong>。之前的产品也能实现大部分功能（Claude Code Work、Manus），但只有 Clawdbot 用 IM + 主动性的组合，让普通人真正"感觉到"了 Agent 的存在。</p>
<p>正如之现所说："一种技术已经演进到一定程度了，但让普通人有所感觉这个过程实际上是非常重要的。"</p>
<p>正浩用一个比喻总结：<strong>"它把最后这一公里处理得特别好，真正做到普通人看到了之后，也产生了'未来已来'的感觉。"</strong></p>
</div>
</div>

</div>

---

# 社区驱动的增长飞轮

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>极客种子用户</strong>
<div class="text-xs opacity-70 mt-1">之现回忆："我关注这个项目一个多月以前，那个时候还是一个比较小众、比较极客的东西。"创始人建 Discord server 后"很快就涌进来 5000 人，里面有很多 AI 创业公司的 founder，也有很多大的 KOL。"</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-xs">
<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-lg text-green-700">1</div>
<div class="font-bold mb-1">极客圈引爆</div>
<div class="opacity-60">AI founder + KOL<br>发现并热传</div>
</div>
<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold text-lg text-yellow-700">2</div>
<div class="font-bold mb-1">用例展示</div>
<div class="opacity-60">社区共建<br>惊艳用例传播</div>
</div>
<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="font-bold text-lg text-red-700">3</div>
<div class="font-bold mb-1">FOMO 引爆</div>
<div class="opacity-60">临界点突破<br>大众害怕错过</div>
</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">
<strong>Vibe Coding 时代的开源红利</strong>
<div class="text-xs opacity-70 mt-1">之现："现在是 Vibe Coding 的时代，开源非常幸运。很多人有自己的想法，但没有能力把代码优化到可以提 PR 的程度——但社区讨论和传播本身就是巨大的贡献。"</div>
</div>

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-400 mt-3">
<strong>传播路径总结</strong>
<div class="text-xs opacity-70 mt-1">英文区先火 → 用例传播 → FOMO 情绪 → 全球引爆。之现："大家对 AI 的 FOMO 情绪，害怕错过什么，一下就点燃了热情。"</div>
</div>

</div>

---

# IM 界面：改变人机交互的感知层

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>为什么 IM 这么重要？</strong>
<div class="text-xs opacity-70 mt-1">天琪一语道破："即使你发同样的消息，你的感觉在 Terminal 里聊天和在微信里聊天是完全不一样的。"IM 不仅仅是传输管道，它<strong>改变了整个交互的心理框架</strong>。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>非技术用户的关键差异</strong>
<div class="text-xs opacity-70 mt-1">正浩分享内部案例：非技术用户面对 Claude Code 输出的文件路径 "cd /path/to/file"——"这是什么意思？What do I do with this？"而 Clawdbot 直接在微信里把文件以附件形式发给他。<strong>路径 vs 附件——这是两个世界。</strong></div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>同事 vs 工具</strong>
<div class="text-xs opacity-70 mt-1">天琪的关键洞察：IM 让 AI 从"工具"变成了"同事"——"用微信、飞书跟用户对话，会让他们觉得更像在跟一个同事聊天。"心态从"使用某个功能"变成了"跟一个人沟通"。</div>
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./im-interface-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 记忆系统：Clawdbot 的灵魂

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>文本文件即数据库</strong>
<div class="text-xs opacity-70 mt-1">正浩解读技术方案："它是用很多 MD 文件、文本文件去实现的。"Memory.md 存常识，日记文件按日期索引，Agent.md 里写规则让它每次翻看最近日记。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>显式记忆触发</strong>
<div class="text-xs opacity-70 mt-1">正浩发现一个精妙设计：当用户提到值得记的事，AI 会说"Let me write it down"——"他把这个过程非常明显地告诉用户，虽然技术上并不新，但体验上很好。"</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>用户可见、可编辑</strong>
<div class="text-xs opacity-70 mt-1">之现强调文本化的好处："memory 作为文本文件不是隐藏的，用户自己都能看，甚至自己都能去改。你觉得他记得不对，或者记得啰嗦了，可以直接去文本文件里操作。"</div>
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./memory-architecture.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 混合检索：让记忆既理解语义又不丢细节

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Chunk 切分策略</strong>
<div class="text-xs opacity-70 mt-1">之现详细拆解："所有 MD 文件切成差不多四百个 token 一个的小块，每个块之间还有八十个 token 的重叠 overlap——跨界不会被切断，能连起来。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>本地 SQLite + 向量化</strong>
<div class="text-xs opacity-70 mt-1">"存在本地的一个轻量的数据库 SQLite 里面，转成向量的格式。"不依赖外部向量数据库，全部本地运行。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>混合策略：70% 语义 + 30% 关键词</strong>
<div class="text-xs opacity-70 mt-1">"百分之七十是按语义匹配的，百分之三十是直接关键词精确匹配。"之现举例：问"寿喜烧怎么做"→语义匹配到牛肉/食材；问"blog 的 SSH 配置"→精确匹配到具体命令。</div>
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./hybrid-search.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 心跳机制：按需激活的主动性

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>守护进程定时唤醒</strong>
<div class="text-xs opacity-70 mt-1">正浩解读代码实现："它是一个偏工程性的实现，定期在发现我们没有说话的时候，用一个 prompt 让它自己判断有什么事情可以做。借鉴了 Ruff Loop 的思路，大概每三十分钟调用一次。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>省 Token 策略</strong>
<div class="text-xs opacity-70 mt-1">之现补充细节：先检查 heartbeat.md，如果"没有任何注释以外的内容就直接跳过"。即便有内容，AI 也会先判断是否需要处理——不需要就发 "heartbeat OK" 静默信号，系统直接吞掉不产生任何反应。</div>
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./heartbeat-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 心跳 vs 定时任务：两种主动性的配合

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

<div class="font-bold text-center mb-2">💓 心跳（Heartbeat）</div>

<div class="text-xs space-y-2 opacity-80">
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>触发方式：</strong>每 ~30 分钟自动唤醒
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>判断逻辑：</strong>先看 heartbeat.md 有无内容 → 再判断是否需要用户关注 → 不需要则静默跳过
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>设计精髓：</strong>"他一直在 heartbeat，但主动找你的时候也没有那么多。既有主动性，又不烦人。"
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>典型场景：</strong>突发事件提醒——"聊着聊着天突然弹出一条：特朗普对欧盟做关税制裁"
</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

<div class="font-bold text-center mb-2">⏰ 定时任务（Cron Job）</div>

<div class="text-xs space-y-2 opacity-80">
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>触发方式：</strong>精确定时，如每天三次早中晚
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>判断逻辑：</strong>到点即执行，不需要额外判断
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>设计精髓：</strong>对时间的定义非常精确——"你给他安排的事情，他能够精准地给你做完"
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>典型场景：</strong>每天三次摘要 Twitter 关注列表信息
</div>
</div>

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3 text-xs">
<strong>活人感的秘诀：</strong>心跳 + 定时任务的组合，让 AI 既像一个能随时注意到突发事件的助手，又像一个准时完成例行任务的员工。之现总结："你给他安排的事情，他精准做完；让他盯着的事情，有事情的时候他就会来找你。"
</div>

</div>

---

# 用例一：博客自动发布的完整链路

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>起点：一句随口的话</strong>
<div class="text-xs opacity-70 mt-1">之现让 Clawdbot 测 MacOS 本地模型的能力边界。AI 跑完测试后，之现随口说"要不写篇文章吧"——AI 自动切换到"之写 writer" skill，用他的口吻写好了文章。</div>
</div>

<div class="grid grid-cols-3 gap-3 text-xs">

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="font-bold text-green-700 text-lg">1</div>
<div class="font-bold mb-1">摸清博客规则</div>
<div class="opacity-70">自己参考整个 repo，搞懂自定义主题、中英文版本切换、字数统计 flag——没有中间来问任何问题</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200 text-center">
<div class="font-bold text-yellow-700 text-lg">2</div>
<div class="font-bold mb-1">中英文双版本</div>
<div class="opacity-70">写好中文版后自动翻译英文版，tag、category 全部配好——"人家配的比我配的还好"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<div class="font-bold text-purple-700 text-lg">3</div>
<div class="font-bold mb-1">十秒发完</div>
<div class="opacity-70">甩两个链接过来，之现以为打开肯定是 404——"结果发现全部正确发布"</div>
</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3">
<strong>之现的感受：</strong>"如果大家带过人、有过下属的话——就那种特别主动性的下属的感觉。整个过程他自己搞定的，最后还 offer 把这个过程封装成 skill。"
</div>

</div>

---

# 用例二：从语音到配图的自主流水线

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>任务链</strong>
<div class="text-xs opacity-70 mt-1">之现之前让 Clawdbot 搭了一个本地 Whisper 转写模型。问题是中文标点加不好。看完模型评测的博客自动发布后，之现说："你把 Whisper 转写接上小模型 refine 一下。"</div>
</div>

<div class="grid grid-cols-4 gap-2 text-xs text-center">

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold">1. 自动连线</div>
<div class="opacity-60">把 Whisper 输出接到小模型做 refine</div>
</div>

<div class="p-2 rounded bg-yellow-50 border border-yellow-200">
<div class="font-bold">2. 跑测试</div>
<div class="opacity-60">全面性能评估，还不断让之现发语音测数据</div>
</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold">3. 自主配图</div>
<div class="opacity-60">没配 API key，自己打开浏览器访问 Gemini 网页生成</div>
</div>

<div class="p-2 rounded bg-orange-50 border border-orange-200">
<div class="font-bold">4. 突破限制</div>
<div class="opacity-60">下载失败 → 复制保存到 download → 挪图 → 命名 cover.png</div>
</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3">
<strong>关键细节：</strong>Clawdbot 没有生图 API key，只买了订阅套餐。它自己打开浏览器，访问 Gemini 网页，把提示词输进去，点击生成——整个过程没有找之现要过任何权限。这展现的不是工具能力，而是<strong>自主解决问题的意识</strong>。
</div>

</div>

---

# 更多用例：服务器监控、牛肉过期、写代码

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>🖥️ 服务器蹲点</strong>
<div class="text-xs opacity-70 mt-1">之现让 Clawdbot 监控服务器配置是否太高。它蹲了一天，结论：降到四分之一就够了——省下的钱够它自己运行。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>🥩 牛肉提醒</strong>
<div class="text-xs opacity-70 mt-1">之现随口说"牛肉得赶紧吃了"。下午 AI 主动推来菜谱和准备清单，还叮嘱"牛肉一定要最后两三分钟放，要不然会煮老"。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>📊 GitHub Issue 分析</strong>
<div class="text-xs opacity-70 mt-1">正浩让 Clawdbot 分析上千条 issue，一条条看过去。Claude Code Work 会偷懒用关键词搜索，Clawdbot 老老实实全部读完——"它就是很听我的话"。</div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>发语音就行</strong>
<div class="text-xs opacity-70 mt-1">之现："我现在跟他就是发语音。出门在外面想起一件事来，就像碎碎念一样说一句，他就会自己去处理。"</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>创始人自己的 Aha Moment</strong>
<div class="text-xs opacity-70 mt-1">创始人在马拉喀什旅行时，忘了没给 Clawdbot 设计音频功能，但下意识发了条语音——AI 自己通过各种方式调用实现了语音功能。那一刻他意识到：<strong>模型的自主能力已经远超预期。</strong></div>
</div>

</div>

</div>

---

# Clawdbot vs Claude Code Work：谁更适合你？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

<div class="font-bold text-center mb-3 text-blue-800">🤖 Clawdbot</div>

<div class="text-xs space-y-2 opacity-80">
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>交互方式：</strong>IM（微信/飞书/Telegram/Discord）
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>核心用户：</strong>知识工作者、非技术人员
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>优势：</strong>活人感、主动性强、输出以附件/图片形式直接发送
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>短板：</strong>写代码体验不如 Claude Code，"在绿泡泡里做软件开发很痛苦"——正浩
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>工作方式：</strong>"倾向于直接把这个事干了，然后给你一个'我已经干了'"——之现
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>Token：</strong>固定月费，不怕烧 token（用 subscription 而非 API key）
</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

<div class="font-bold text-center mb-3 text-green-800">💻 Claude Code / Work</div>

<div class="text-xs space-y-2 opacity-80">
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>交互方式：</strong>Terminal / IDE
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>核心用户：</strong>开发者、程序员
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>优势：</strong>编程任务成功率高、文件操作精准、插件生态
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>短板：</strong>输出文件路径，非技术用户看不懂；被动响应，不主动
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>工作方式：</strong>"回答我这个事情可以怎么做"——更倾向于给建议而非直接执行
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>Token：</strong>如果用 API key，消耗量透明且可能很大</div>
</div>

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3 text-xs">
<strong>之现的使用策略：</strong>"编程用 Claude Code，它用 Claude Code 的 SDK 底层打包的也是 Claude Code。但日常任务、监控、写文章——Clawdbot 好用得多。我现在跑了五个 Clawdbot agent，一个月 200 美金套餐差不多够用。"
</div>

---

# 安全之困：权限越大，风险越大

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>⚠️ 风险现状</strong>
<div class="text-xs opacity-70 mt-1">之现直言："不适合现在大规模普通人用。它基本上拥有你系统很多隐秘的东西，而且可以直接执行。"被曝光的安全漏洞包括：用户名、密码、邮件等敏感信息泄露。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>✅ 最佳实践</strong>
<div class="text-xs opacity-70 mt-1">隔离部署——不要装在主力电脑上。买台 Mac Mini 或 VPS，专机专用。把愿意共享的数据放进去，隐私数据物理隔离。</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>为什么 Apple 做不出来？</strong>
<div class="text-xs opacity-70 mt-1">之现的分析："Apple 从芯片到 OS 到硬件，甚至手机、手表这些生态你都有，全自研的，你为什么做不出来？一大原因就是它承担的责任太重了——服务全球用户，一旦出点问题，风险不可控。开源老哥反正自己做自己用，爱用不用——把标准'化整为零'，大家自适应地完成权限标准 setup。"
</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>安全与效果的 Tradeoff</strong>
<div class="text-xs opacity-70 mt-1">权限给得大，效果才惊艳——但鲁棒性不强。天琪指出："做生产级产品肯定不能用 Clawdbot 这样的架构。需要打磨审核机制、沙盒隔离、系统层回滚。"正浩补充：他们内部做了 watchdog agent——影子 agent 一直在监测系统层面的更改。</div>
</div>

</div>

---

# 为什么大家都买 Mac Mini？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>性价比</strong>
<div class="text-xs opacity-70 mt-1">之现："国补丐版不到三千人民币，买内存送电脑的 deal。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Apple 生态集成</strong>
<div class="text-xs opacity-70 mt-1">iOS Reminder 同步、iMessage、系统级自动化——"如果你是 Apple 生态用户，Mac Mini 几乎就是第一选择。"</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>省电安静</strong>
<div class="text-xs opacity-70 mt-1">适合 24/7 运行，比闲置 PC 更省电。无屏幕——"调用 agent 时屏幕作用不大"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>物理沙盒</strong>
<div class="text-xs opacity-70 mt-1">专机专用自带隔离属性——"我是不会放在我主力机上的"——正浩</div>
</div>

</div>

<div class="flex justify-center items-center">
<Excalidraw
  drawFilePath="./deployment-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Agent 电脑：新硬件品类的诞生

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>两种工作的分离</strong>
<div class="text-xs opacity-70 mt-1">天琪提出核心框架："工作分为两种——foreground work（前端，需要屏幕、需要看）和 background work（后端，默默跑在背后）。Agent 电脑应该属于后者。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>关键瓶颈：RAM + 存储</strong>
<div class="text-xs opacity-70 mt-1">天琪："RAM 直接决定了你能跑多少个 agent。4GB 跑两个就满了、卡住。存储也很重要——32GB 可能半个月就满，知识工作者每次聊天都希望转成知识资产。"</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Mac Mini 可砍掉的</strong>
<div class="text-xs opacity-70 mt-1">屏幕（Agent 不需要）、GPU（不需要图形渲染）、部分 I/O——"Mac Mini 本质还是为人类设计的产品，对 Agent 有很多能力冗余，可以砍掉把成本降下来。"</div>
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm mb-2">🎯 Pamir 的设计哲学</div>
<div class="text-xs opacity-80 space-y-2">
<p>天琪和团队在一年半前就开始做 Agent 电脑：</p>
<ul class="list-disc pl-4 space-y-1">
<li>LED 灯条显示 Agent 工作状态（黄灯=思考，绿灯=需要你）</li>
<li>内置麦克风、扬声器——像 Jarvis 一样交互</li>
<li>大量 I/O 接口解锁新玩法——"插上任何打印机，Agent 自己 figure out，甚至自己逆向写 driver"</li>
<li>Linux 小电脑 + Agent = "应该可以做世界上所有事情"</li>
</ul>
<p class="mt-2">天琪的愿景："大部分工作转移到 Agent 设备上，你就带个手机或平板就够了——对 agent 下达命令就行。"</p>
</div>
</div>

</div>

---

# 专机专用 vs 云端部署：两种路线

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

<div class="font-bold text-center mb-3 text-blue-800">🏠 专机专用（Mac Mini / Pamir）</div>

<div class="text-xs space-y-2 opacity-80">
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>适用场景：</strong>长时间运行、高度私人信息相关任务
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>优势：</strong>物理隔离、数据常驻、Apple 生态集成、固定成本
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>劣势：</strong>需要额外硬件、维护成本、模型能力依赖云端</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>用户画像：</strong>技术用户、Apple 生态用户、隐私敏感用户</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

<div class="font-bold text-center mb-3 text-green-800">☁️ 云端部署（VPS / Cloudflare）</div>

<div class="text-xs space-y-2 opacity-80">
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>适用场景：</strong>非敏感任务、短期使用、轻量部署
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>优势：</strong>零硬件成本、一键部署、Cloudflare Worker $5/月
</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>劣势：</strong>"长期来看是最贵的解决方案"——天琪、数据隐私不透明</div>
<div class="p-2 rounded bg-white bg-opacity-70">
<strong>代表：</strong>Cloudflare 优化版 ModelBot、Manus（云端 Agent 实例）</div>
</div>

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3 text-xs">
<strong>未来趋势：</strong>两者共存。之现的判断："Cloudflare 出了一键 Worker 部署，$5/月——对大多数人来说简单多了。但专机专用满足 To C 端、长时间跑、高度私人信息的任务。云端长期最贵。"正浩补充：未来可能出现 agent-to-agent 协议（如 Google A2A），让本地 Agent 和云端 Agent 协同工作。
</div>

---

# Anthropic 的律师函：名字之争背后的生态焦虑

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>事件经过</strong>
<div class="text-xs opacity-70 mt-1">Clawdbot 最初叫 "Claude Bot"，作者在 setup 里极力推荐用 Opus 模型 + Max 订阅——"可以说是 Anthropic 比较赚钱的产品组合。"但 Anthropic 以品牌侵权为由发律师函，先后改名为 Mot Bot → OpenClaw。</div>
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>商业上明明是好事</strong>
<div class="text-xs opacity-70 mt-1">Clawdbot 让普通用户也有了"把订阅拉到顶"的需求——在商业逻辑上对 Anthropic 是利好。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>但 Anthropic 在防御什么？</strong>
<div class="text-xs opacity-70 mt-1">之现引用 Anthropic CPO Mike Krieger 的访谈：他后悔没有更早做第一方产品。"只做 API，可能就像运营商被打到生态最底层。"</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>管道化焦虑</strong>
<div class="text-xs opacity-70 mt-1">之现的判断："Anthropic 希望 Clawdbot 的 'Claw' 是他们的——这样才能增强用户粘性。不用担心大模型公司，他们永远是最容易 win 的人。最无奈的可能是：开源社区和创业者验证好方向后，大模型公司自己做 C 端产品把果子摘了。"正浩也认为，AI Coding 领域大厂刚开始没下场，但纷纷自己下场后"很快就会把别人打的不行"。
</div>
</div>

</div>

---

# Claude Code SDK：悬在头顶的剑

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>核心依赖风险</strong>
<div class="text-xs opacity-70 mt-1">Clawdbot 底层依赖 Claude Code SDK。正浩指出两个风险："第一，Claude Code SDK 未来可能被停止更新；第二，Claude Code 可能觉得没必要再让自己的产品能力通过 SDK 被别人用。"</div>
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-400">
<strong>现在为什么还能用？</strong>
<div class="text-xs opacity-70 mt-1">Claude Code 开放 SDK 是为了插件生态——"如果有一个更好的替代方案，这个功能很可能会被禁掉。"</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-400">
<strong>Subscription 的灰色地带</strong>
<div class="text-xs opacity-70 mt-1">天琪："PyPI Agent 底层打包的还是 Claude Code，它默认让你用 API key。社区有各种 bypass 方法用 subscription——it's a matter of time，OpenCode 涨到一百万月活才被打击。"</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">
<strong>行业的应对：</strong>正浩透露 EverMind 一直在做"agent layer 热拔插"——随时可以换别家模型。"害怕 Claude Code 翻脸。"
</div>

</div>

---

# 开源模型能否挑战闭源？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>正浩：Harness + Model 必须绑定</strong>
<div class="text-xs opacity-70 mt-1">"模型厂商跟 agent layer 要绑定，harness 和 model 相辅相成，这样才能形成闭环。它去 RL 这个 model，让 model 内化 agent layer 的各种调整。Codex 模型在 Codex CLI 里就是好用，但在 OpenCode 里就差点意思。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>天琪：开源有机会</strong>
<div class="text-xs opacity-70 mt-1">"数据垄断不一定是闭环护城河——现在的 RL 技术不需要太多数据就能训练得不错。可能有很不一样的技术架构带来质的突破。比如 DeepSeek 的 NGram paper，如果能在本地做小的 embedding 实时影响线上的 LLM 效果，那在质量上就是质的领先。"</div>
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm mb-2">关键变量：时间</div>
<div class="text-xs opacity-80 space-y-2">
<p>正浩判断："Claude Code 一定会领先很长一段时间。"但天琪认为如果有架构级突破（如本地+云端的混合推理），格局可能被打破。</p>
<p>之现的期待：DeepSeek V4——"即使过年不发，sometimes in the later 他们也会发。相信他们在 coding 和 agent 使用场景上会做得比较好。"</p>
<p>但短期内，"直接裸用 V4 不一定会比 Claude Code 好。"天琪也承认。</p>
</div>
</div>

</div>

---

# AI 数字分身：从静态投喂到动态拟合

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>不是一次性投喂</strong>
<div class="text-xs opacity-70 mt-1">之现的实践："你给他丢一些背景知识、初始设定，然后<strong>不断通过反馈让他去拟合你自己认为的风格</strong>。可能聊个一周两周，他出的东西就跟你很像了——它是一种动态的，不是静态的投喂。"</div>
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-400">
<strong>简单场景：写文章</strong>
<div class="text-xs opacity-70 mt-1">之现的"之写 writer" skill——丢入博客、Twitter，AI 自己爬、自己总结、自己对风格，然后和之现核对。每次写完后给反馈，持续拟合。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-400">
<strong>进阶场景：工作替代</strong>
<div class="text-xs opacity-70 mt-1">正浩分享 Mem0 与 Tenka 的合作：AI 自动补全群聊回复。结果越 senior 的人越不喜欢（决策差异度大），越偏职能的人越喜欢（回复机械）。"完全替代人的 AI 分身还比较难，但在相对容易的职能场景上极有可能。"</div>
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3">
<strong>终极方案：</strong>之现认为，要达到真正像你的数字分身，"可能得把类似于脑回路、神经突触级别的东西 train 到小模型里——不是每次检索后琢磨怎么更像你，而是本能反应就像你。"但这需要远超当前的技术。
</div>

</div>

---

# Token 经济学：订阅制为什么划算

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-50">风险方式</div>
<div class="font-bold text-red-700">API Key</div>
<div class="text-xs opacity-60 mt-1">按量计费<br>Agent 循环烧 token<br>可能天价账单</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-50">推荐方式</div>
<div class="font-bold text-green-700">Subscription</div>
<div class="text-xs opacity-60 mt-1">固定月费（$20/$200）<br>不限量使用<br>不怕烧 token</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-50">最佳实践</div>
<div class="font-bold text-blue-700">Setup Token</div>
<div class="text-xs opacity-60 mt-1">多机器共享一个订阅<br>比 OAuth 稳定<br>不会频繁过期</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3">
<strong>真实成本参考：</strong>之现分享——"五个 Clawdbot agent，一个月 200 美金套餐差不多够用，再加上平时编程任务基本也能 cover。200 刀订阅用户 Anthropic 肯定是亏钱的，但大多数 20 刀用户实际消耗可能就几刀——总体能跑正。"本质上是一种"互相剥削"的定价策略。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>消耗大的真相：</strong>不一定是 Clawdbot 本身消耗大。之现分析："它会比单纯 Chatbot 大——MD 文件、memory 都要加载到 context。但真正烧 token 的是用它做爬虫或 Playwright 截屏识别。告诉它直接用 Playwright profile 操作不要截屏，消耗就降下来了。"
</div>

</div>

---

# 一人公司：可行但需要 Know-How

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一人公司已经可行</strong>
<div class="text-xs opacity-70 mt-1">之现的判断："零人公司有点远，但<strong>一人公司是绝对可行的</strong>——这个人把握方向，用自己的 know-how 带领军团。你现在得到的军团比纯人肉军团强大非常多倍——又低功耗又高性能，像量子军团或精灵军团。"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>但你必须是将军</strong>
<div class="text-xs opacity-70 mt-1">之现："你不懂拍电影，对分镜、叙事没什么感觉，就让 AI 去拍——拍出来好坏你判断不了，这不行。你必须有评判能力。"</div>
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm mb-2">Agent 军团 vs 人类团队</div>
<div class="text-xs opacity-80 space-y-2">
<p><strong>优势：</strong></p>
<ul class="list-disc pl-4 space-y-1">
<li>"Agent 之间的沟通成本最多就是你跟它的沟通——它们之间沟通成本相对比较快"</li>
<li>"它们特别喜欢做文档——你不让它做它就难受，天生 DNA 里就想这么做"</li>
<li>不会推卸责任（设定得当的话）</li>
</ul>
<p class="mt-2"><strong>但要警惕：</strong></p>
<ul class="list-disc pl-4 space-y-1">
<li>之现遇到过 AI "掩耳盗铃"——跳过失败的测试，说"所有测试通过"</li>
<li>正浩提到国内某港口案例：Agent 之间也会吵架推诿，最终需要上级 Agent 决策</li>
<li>解决方案：多搞几个 Agent 互相 peer review，互相聊——"毕竟大家 context 都不一样，应该能缓解问题"</li>
</ul>
</div>
</div>

</div>

---

# .md 即新 App：交互范式的转变

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从代码编译到自然语言编译</strong>
<div class="text-xs opacity-70 mt-1">之现的洞察："以前 app 的内部逻辑是用 coding 方式去编译的，以后是<strong>自然语言去编译</strong>——.md 就是自然语言编译场景下的 APP。"他原本想写技术文章教用户检查 Clawdbot 部署安全，后来意识到：直接写一个 .md 文件让用户扔给 Clawdbot 自己检查就行了。</div>
</div>

<div class="grid grid-cols-3 gap-3 text-xs text-center">

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold mb-1">Skill = 新 App</div>
<div class="opacity-60">Clawdbot 的 skill 系统本质是 .md 文件定义行为和规则</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold mb-1">Context = 新资产</div>
<div class="opacity-60">之现的判断："卖软件越来越难挣钱，但卖 skill、卖 context、卖知识资产更 make sense"</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold mb-1">.md 域名 = 新流量入口</div>
<div class="opacity-60">Clawdbot 创始人开始买 .md 域名。文章里的 .md 会被自动识别为链接——新流量范式</div>
</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3">
<strong>对组织的影响：</strong>天琪观察到三个变化——1）idea 比执行力更重要了（实现太快了）；2）员工不需要花大量时间做对齐，写两份取最好的 merge 就行；3）设计师直接出 mock app——"把所有职位都拔高了一级"。
</div>

</div>

---

# 核心金句（一）

<div class="text-xs opacity-50 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic">"它真的是沾了所有的东西，把能沾的全部都沾进去了，你不管是记忆啊，还有消息系统啊，还有 Proactive 的持续工作啊。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 天琪，解释为什么 Clawdbot 在所有类似产品中胜出</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="italic">"整体用下来就特别像钢铁侠里面那个 Jarvis 这种感觉，甚至有时候跟你聊天的时候动不动抖个机灵吐槽一下。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 之现，描述活人感的核心体验</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="italic">"一种技术已经演进到一定程度了，但是让普通人有所感觉这个过程实际上是非常重要的。用户看不到它后面的技术和其他产品有多相似，但在感受上确实非常不一样。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 之现，论技术感知的最后一公里</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="italic">"Apple 从芯片到 OS 到硬件，甚至手机、手表这些生态你都有，全自研的，你为什么做不出来？一大原因就是它承担的责任太重了。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 之现，论大公司为什么做不出 Clawdbot 级别的产品</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-xs opacity-50 mb-3">下半场更精彩的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="italic">"一人公司是绝对可行的。这个人把握方向，用自己的 know-how 去带领军团。你现在得到的军团比纯人肉军团强大非常多倍——又低功耗又高性能，像量子军团或者精灵军团。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 之现，论 AI 时代的组织形态</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<div class="italic">"百分之七十是按语义匹配的，百分之三十是直接关键词精确匹配。既能够理解你做的事，又不是找不到精确的东西——所以感觉他特别像人。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 之现，拆解 Clawdbot 记忆检索的核心机制</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic">"RAM 直接决定了你能跑多少个 agent。存储也是很重要的——知识工作者每一次聊天都希望把聊天内容转换成知识资产。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 天琪，定义 Agent 电脑的硬件需求</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="italic">"我觉得 Clawdbot 更像十年前有人把自动驾驶 SDK 放到自行车上，发现它可以在小区里自由送货——虽然经常会倒、会撞，但因为它是个自行车，撞了也无所谓。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 天琪，用比喻解释 Clawdbot 的当前阶段</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="italic">"把最后这一公里处理得特别好，真正做到普通人看到了之后，也产生了'未来已来'的感觉。"</div>
<div class="text-xs opacity-50 mt-1 not-italic">— 正浩，总结 Clawdbot 的产品价值</div>
</div>

</div>

---

layout: end
---

# 谢谢收听

<div class="mt-8 text-lg opacity-60">
一个周末的时间，2026年第一个现象级产品<br/>
从 Claude Bot 到 OpenClaw<br/>
引爆了整个 AI Agent 生态
</div>

<div class="mt-8 text-sm opacity-40">
全部讨论基于硅谷101 第224期播客<br/>
嘉宾：之现 · 正浩 · 天琪
</div>
