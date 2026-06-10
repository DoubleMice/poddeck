---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Siri AI, Fable 5 Launch, Rivian CEO Joins | RJ Scaringe, Chris Miller, Evan Beard, Nick Fleisher, Chris Matarese, Alex Heath, Rob Schroder Jr.'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Siri AI · Fable 5 · Rivian R2 · Chip War 2.0

<div class="text-lg opacity-70 mt-4">
TBPN 直播 · 2026 年 6 月 9 日
</div>

<div class="text-sm opacity-50 mt-8">
RJ Scaringe · Chris Miller · Evan Beard · Nick Fleisher · Chris Matarese · Alex Heath · Rob Schroder Jr.
</div>

<div class="text-xs opacity-40 mt-4">
WWDC 2026 深度解析 · Rivian R2 交付启动 · Anthropic Fable 5 发布 · 半导体军备竞赛
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🍎 Siri AI 终成正果**  
Tim Cook 首个 WWDC 宣布 Siri，最后一个 WWDC 推出 AI Siri——15 年的圆环闭合。Apple 的 walk-crawl-run AI 战略揭晓。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**🚗 Rivian R2 交付启动**  
RJ Scaringe 详解 R2 战略、软件架构革命、自驾驶路线图。为什么"不要同时发布三款车"是他最大的教训。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**🧠 Fable 5 & 推理规模定律**  
Anthropic 新模型发布，$10/$50 百万 token 定价。Noah Brown：推理算力 plateau "非常遥远"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**💾 芯片战争更新**  
半导体支出占 GDP 比重翻倍。TSMC 的保守文化、中国的 $2950 亿 AI 基金、Mythos 对白宫出口管制的影响。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**🤖 创业公司 spotlight**  
Standard Bots $2 亿融资、ZenOne 法律 AI、NinjaOne $4 亿融资、Vinyl Equity 现代化过户代理。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**🔐 手机与生育率危机**  
Apple 在短主题演讲中用 12 分钟讲家长控制。手机正在被认真视为生育率下降的原因之一。

</div>

</div>

---
layout: two-cols
---

# Siri AI：15 年的圆环

<div class="text-sm leading-relaxed mt-2">

**2011 年 10 月 4 日**，Tim Cook 第一个 WWDC 作为 CEO。他把话筒交给同事，宣布了 Siri——来自 **SRI International 人工智能中心**的收购，价格约 $2 亿。

**第二天**，Steve Jobs 去世。

从那天起，Siri 成了"最好的平庸品类"——直到 LLM 时代的到来，人们开始用 ChatGPT 替代它。

**2026 年 6 月 9 日**，Tim Cook 最后一个 WWDC，核心内容就是 Siri AI。15 年的圆环闭合。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./siri-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Tim Cook 的 AI 冬天

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 运营天才的悖论

<div class="text-sm leading-relaxed mt-2">

从 2011 到 2023，Tim Cook 运营着一家**极其成功的公司**——App Store 收入爆炸、股价飙升、供应链精简化。但他恰好是**有史以来最长的 AI 冬天**期间的 CEO。

Siri 团队每年都说"还没发明出新技术"。他们是最好的，但品类本身很平庸。

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 落后但没被吃掉午餐

<div class="text-sm leading-relaxed mt-2">

节目主持人指出：**即使回到 2019 年 pre-ChatGPT 时代**，Siri 也没有兑现"和手机对话就能做任何事"的承诺。但人们并没有大量切换到 Android，因为 Google Assistant 也没有好到哪里去。

直到 ChatGPT 的出现，Siri 才开始真正被拉开差距。

</div>

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
"Tim Cook 创造了巨大的价值，但这恰好是 AI 冬天。" —— TBPN 主持人
</div>

---
layout: default
---

# Siri 新架构：三道防线

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 📱 设备端
**AFM 3 本地模型**

最新 iPhone（12GB RAM）可运行最大本地模型。旧设备只能用小模型。

<div class="text-xs opacity-60 mt-2">零延迟 · 完全私密 · 硬件受限</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### ☁️ Apple Private Cloud
**AFM 3 Cloud Pro**

Apple 自建推理云，由 Google Cloud 上的 Nvidia GPU 提供算力。Apple 声称保持隐私保障。

<div class="text-xs opacity-60 mt-2">推理能力 · 隐私品牌 · 有延迟</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 🌐 外部模型
**Gemini / ChatGPT**

对复杂查询可路由到第三方模型。目前 ChatGPT 需显式请求，Gemini 深度集成但不可见。

<div class="text-xs opacity-60 mt-2">前沿能力 · 隐私降级 · 依赖伙伴</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
AFM = Apple Foundation Models。AFM 3 是第三个迭代，Cloud Pro 声称基于 Gemini 微调。<br/>
Alex Heath 实测：新 Siri 仍没有持久记忆，每次查询重新开始。
</div>

---
layout: two-cols
---

# Alex Heath 的 Siri 实测

<div class="text-sm leading-relaxed mt-2">

Alex Heath（The Verge / Sources）在 WWDC 次日**亲自上手了新 Siri**。他的核心发现：

- **没有持久记忆**：每次查询都是独立的，Siri 不记得之前的对话——这对习惯了 Claude/Codex 的用户来说是巨大倒退
- **Computer Use 能力受限**：不能通过提示词直接操作文件，需要通过右键菜单或 Shortcuts
- **开发者需主动接入**：Siri 能看到屏幕文字和图片，但理解 UI 需要开发者 opt-in

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm">
"如果你整天用 Claude 或 Codex，你仍然会觉得：呃，还行吧。" —— Alex Heath
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./siri-limitations.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 一张截图引发的 7.2 万赞

<div class="mt-4 p-6 text-center">

<div class="text-2xl italic text-blue-700 mb-2">"Agga sent you a message about Calathea"</div>
<div class="text-lg text-blue-600 mb-4">"She described it as a patterned tropical houseplant."</div>

<div class="text-sm opacity-70 mt-6 max-w-xl mx-auto">
这是 Apple 用来展示新 Siri AI 的主宣传图——Siri 没有总结任何东西，只是在复述问题。72,000 个赞。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>🐦 推上吐槽</strong>：这个 demo 本应展示 "Siri 帮我查一下然后告诉我这是什么植物"，但实际只是把消息读了一遍。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>🔮 主持人点评</strong>："这是早期阶段。他们会继续迭代。我从 Siri 黑转粉了——早在 2024 年我问 Siri '什么是 LLM'，它回答 '法学硕士（Master of Laws）'。"
</div>

</div>

---
layout: default
---

# Siri：Beta 发布与推理经济学

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 🐢 Walk-Crawl-Run 策略

- 新 Siri **仅支持英语**，中国和欧盟不可用
- 采用 **Beta 邀请 + 等待列表**方式发布——Apple 史上首次
- 在 Apple Park 的 demo 中，照片修复需 **25 秒**，服务器因出乎意料的高兴趣而"融化"

Alex Heath 体验到的版本："非常基础的、几乎可以说是 ChatGPT 山寨版"的 Siri app——大量广告位空间，但几乎没有内容。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### 💰 推理的经济账

- 如果 10 亿用户每天只是说 "设个定时器" 就触发推理——那是**巨大的 token 消耗**
- Apple 一直在讲"无 CapEx 的 AI 赢家"的美好故事。但一旦提供推理服务，就会出现 **Google Cloud 账单**
- 主持人预测：如果需要零排放数据中心，建设周期更长

Apple 有现金、有债务市场准入——但似乎在刻意避免一次铺开。

</div>

</div>

---
layout: default
---

# Siri 生态：Gruber vs Gurman 之争

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Mark Gurman（Bloomberg）
**2026 年 3 月报道**：Apple 计划在 iOS 27 中向第三方 AI 助手开放 Siri。用户安装 ChatGPT / Gemini / Claude 后，可通过 Siri 语音助手路由查询——类似目前 ChatGPT 的集成方式。

截图显示 Siri app 中有**模型选择下拉菜单**。Gurman 坚持原报道正确。

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### John Gruber（Daring Fireball）
**反驳**：Apple 未完全宣布 Gurman 报道的内容。"也许他们今天没时间，也许他们忘了，也许他们推翻了两个月前的新一代 Siri，在过去一个月里重建了完全不同的版本。"

核心问题：**能否将侧边按钮完全映射到你选择的 AI 模型？** 目前做不到。

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>作者概括</strong>：两人的解读都有道理。Gurman 捕捉到了 Apple 的意图和 SDK 层面的准备；Gruber 指出了产品化层面的差距。真正的战场是：Siri 是"harness"（允许插拔不同模型）还是"walled garden"（只有 Apple 选择和训练的模型）。
</div>

---
layout: two-cols
---

# Apple · Google · OpenAI 三角

<div class="text-sm leading-relaxed mt-2">

WWDC 2026 揭示了三大 AI 巨头之间微妙的三角关系：

- **Google**：深度集成，AFM 3 Cloud Pro 运行在 Google Cloud 的 Nvidia GPU 上。关系类似搜索合作——"敌人的敌人是朋友"
- **OpenAI**：合作关系降温。ChatGPT 集成被削弱，不再有 UI 元素，每次需通过文字提示。Apple 挖走了 OpenAI 的人才
- **Apple 自己**：在重建 AI 战略，大量 Google 人才加入。Craig Federighi 专门做了"AI 101"白板演示，强调虽然蒸馏了 Google 模型，但 Apple 完全控制后训练

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Alex Heath 的 meta-narrative：OpenAI 正在成为 Apple 眼中的"新 Facebook"——曾经深度合作，如今渐行渐远。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./apple-ai-alliance.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 空间重构图：什么才是"真实照片"？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 🎯 新功能
Apple 推出了**空间重构图（Spatial Reframing）**——用 AI 将照片角度调整到更正面。与"AI 生成一条龙"不同，这更像是相机的自然延伸。

主持人的评价："这不是又一个'创业公司早就在做'的功能——这感觉像 Apple 的 DNA：理解技术，然后做点酷的、独特的东西。"

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### ⚡ 争议
时间线上反应两极分化。有人称之为"Apple 最令人兴奋的 AI 功能"；另一些人担忧这是 AI 图像篡改的滑坡——

- 低光增强 + 色调映射 + 空间重构图 + 删除路人 = **完全不同的照片**
- Apple 坚持不让你在照片里放龙，但"真实"的边界正在模糊
- iOS 27 中 Cleanup 功能大幅改进，可能是 Nano Banana 在底层驱动

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Joe Weisenthal 的未来观</strong>：为什么需要存照片？直接让 AI 生成"我的孩子 5 岁时骑恐龙"——这不是我们要的世界，但技术上并不遥远。
</div>

---
layout: default
---

# 家长控制：12 分钟里的社会信号

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 📋 新功能速览
- **儿童账户**：内置年龄保护，限制成人网站，展示适龄媒体
- **Ask to Browse**：孩子访问新网站需家长手机批准
- **通讯控制**：家长管理孩子可与谁通话，添加新联系人需确认

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 🔍 为什么重要
- 这是一个**特别短的主题演讲**，却用了 12 分钟讲家长控制
- Derek Thompson：手机可能是现代生育率下降原因的 **~30%**
- Apple 不做恐惧营销——不说"手机会毁了你的孩子"，只展示解决方案
- 当天 Apple Park 外面就有儿童安全倡导者举着扩音器抗议

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>商业逻辑</strong>：许多家长犹豫是否给孩子买智能手机。Apple 的回应："给孩子买 iPhone 是安全的，因为你有完全的控制权。" 已经有一个围绕儿童 GPS 手表和哑手机的利基市场——Apple 想抢占这个市场。
</div>

<div class="mt-2 text-xs opacity-60 text-center">
"Apple 不是恐惧营销公司。Tim Cook 从不谈论气候末日——他们只是在私下工作，然后在营销材料中谈论解决方案。" —— TBPN 主持人
</div>

---
layout: default
---

# Apple 地图的 Gaussian Splatting

<div class="text-sm leading-relaxed mt-4 max-w-2xl mx-auto">

Apple Maps 团队展示了**高斯溅射（Gaussian Splatting）**技术渲染的城市三维视图——几何精度和纹理渲染大幅超越 Google Maps 的同类功能。

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 🏙️ 新城市导航
入住陌生城市酒店后，通过 3D 探索建立方向感。Apple 在几何渲染上投入远超 Google。

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 🎬 创作者工具
YouTuber 已经在用 Google Earth 做动态图形——从太空缩放到事件发生地。Apple 的版本画质更高。

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 🔮 AI 与地图融合
未来可能结合 Siri："帮我导航到那个有个 blue domed building 的区域"。空间理解 + 语言理解。

</div>

</div>

---
layout: default
---

# Apple 的 AI 收购史：保守但持续

<div class="text-sm leading-relaxed mt-4 max-w-2xl mx-auto">

**M&A 在 Apple 的 DNA 里**——Siri 本身就是一次收购。但在 AI 时代，这种策略面临根本性挑战。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 2011: Siri
**~$2 亿**
来自 SRI International 人工智能中心。Tim Cook 首个 WWDC 的核心公告。

<div class="text-xs opacity-60 mt-2">Apple 最大的成功之一，定义了语音助手品类</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 2025: Thinking Machines?
**~$100 亿?**
Apple 曾与前 OpenAI CTO Mira Murati 的新创业公司洽谈。但交易从未推进。

<div class="text-xs opacity-60 mt-2">"如果成了，Apple 内部会有一个世界级 AI 团队"</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 2026: 自研路径
**Google 人才涌入**
大量 Google 人才加入 Apple 重建 AI 战略。Craig Federighi 亲自做 "AI 101" 白板演讲。

<div class="text-xs opacity-60 mt-2">Alex Heath: "他们觉得终于有了正确的拼图"</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>现实</strong>：所有好的 AI 团队在几亿甚至几十亿估值早期就被锁定。投资者不会让公司做低价并购——"我给你 2 亿是让你去赌一把大的"。Apple 不太可能收购 Anthropic——即使有钱，对方也不会卖。
</div>

---
layout: two-cols
---

# Rivian R2：大众市场的赌注

<div class="text-sm leading-relaxed mt-2">

Rivian R2 是公司"真正的规模化产品"。RJ Scaringe 透露：

- **战略逻辑**：R1S/R1T 均价 **>$90,000**——这是品牌的"握手"。R2 才是大众市场
- **330 英里续航**不是设计输入，而是工程输出：需要所有配置都 >300 英里。越野轮胎 307mi，公路轮胎 330mi，后驱版最高 345mi
- **简化到极致**：整个 R2 程序只有 **<200 种** 组合（R1 发布时有数十万种）

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm">
"如果有人问你'重来一次会做什么不同'，你会给一个不痛不痒的答案。但诚实的回答是：不要同时发布三款车。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rivian-r2-strategy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# "野草田"：传统汽车的软件地狱

<div class="text-sm leading-relaxed mt-2">

RJ Scaringe 解释了为什么传统车企无法做有意义的 OTA 更新：

1960 年代，第一台车载电脑是为**燃油喷射**设计的。之后每增加一个功能（座椅记忆、电动车窗、HVAC），供应商就加一个 ECU。

结果：一辆现代汽车有 **100-150 个**独立的小计算机，每个运行不同供应商（经常是第三方、海外团队）写的独立软件。

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm">
"我把它描述成一片野草田——不是规划好的花园，没有架构。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./field-of-weeds.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 区域性控制器：Rivian 的解决方案

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 传统：100+ ECU 各自为政

当你走近车辆，喇叭响、门解锁、HVAC 启动、座椅调节、方向盘调整、音乐改变、电池系统唤醒——**这些全在不同的控制器上**。只改变事件顺序就需要协调 **10-15 家公司**。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### Rivian：少量区域性控制器 + 单个 OS

将所有计算整合到少数几个按物理区域分布的**区域性控制器**上，运行一个自研操作系统。改变任何功能只需修改单一代码库。

<div class="mt-2 p-2 bg-white rounded text-xs">
<strong>$58 亿</strong>——Rivian 与大众集团的软件授权交易，将这套架构引入大众未来的电动产品。
</div>

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>为什么这很重要</strong>：当 Rivian 可以通过 OTA 持续改进车辆时，传统车企每次改进都需要协调数十家供应商——速度不在一个量级。
</div>

---
layout: two-cols
---

# 自动驾驶的拐点：从规则到基础模型

<div class="text-sm leading-relaxed mt-2">

RJ Scaringe 指出自动驾驶技术发生了**根本性转变**：

**旧范式（~2013-2023）**：人类将驾驶知识编码成 C++ 规则
- 感知（摄像头+雷达+激光雷达）→ 规划器（人类编写的规则代码）→ 控制指令
- 本质是 rule-based 系统

**新范式（2023+）**：训练数十亿参数的基础模型
- 用数百万英里的真实驾驶数据训练大型神经网络
- 模型通过已部署车队的数据持续改进

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
"过去五年的进展完全不代表未来五年会怎样。实际上，进展会快到社会来不及消化。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./autonomy-paradigm.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Rivian 自动驾驶路线图

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs opacity-60 mb-2">当前</div>

### L2+
Hands-On<br/>Eyes-On

<div class="text-xs opacity-60 mt-3">驾驶员始终手握方向盘，保持注意力</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

<div class="text-xs opacity-60 mb-2">2026 下半年</div>

### L2++
Hands-Off<br/>Eyes-On

<div class="text-xs opacity-60 mt-3">输入地址，车辆自动导航。手离开方向盘但需保持警觉</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

<div class="text-xs opacity-60 mb-2">2027</div>

### L3
Hands-Off<br/>Eyes-Off

<div class="text-xs opacity-60 mt-3">不再需要看路。可以看手机、读书。但需在车辆请求时接管</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

<div class="text-xs opacity-60 mb-2">2028</div>

### L4
No Driver<br/>Needed

<div class="text-xs opacity-60 mt-3">车辆在任何情况下都不会要求接管。可以坐在后座或让车自己去接你</div>

</div>

</div>

<div class="mt-4 text-sm opacity-70">
R2 的设计预留了大量推理算力和高质量传感器——不仅用于驾驶，更重要的是收集高价值数据以快速追赶 Tesla。
</div>

---
layout: default
---

# 自动驾驶的用户心理拐点

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 text-sm leading-relaxed">

### 今天：不是购车决策的核心

一位拥有 5-10 家美国中西部汽车经销商的人告诉主持人：**买家不会因为一辆车不能自动驾驶就拒绝购买**。在 15-20 分钟通勤的地区，自动驾驶不是优先考虑。

但主持人的两位洛杉矶朋友——通勤 40 分钟以上——**根本无法想象不开 Model Y**，因为已经对 FSD 上瘾。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 明天：一旦体验过就回不去

RJ 认为**真正的拐点是 L3（Eyes-Off）**——当你可以全程不关注路面，拿回自己的时间。

"你会体验一两次，然后觉得不需要它，它不在你的购车标准里——然后突然你就觉得：哇，我下一辆车必须有这个功能。"

2030-2031 年，购车者会期待这种能力是标配。

</div>

</div>

---
layout: default
---

# 芯片战争更新：半导体支出翻倍

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 📊 Chris Miller 的关键观察

<div class="text-sm leading-relaxed mt-2">

- 过去二十年，**半导体支出占 GDP 比重基本持平**
- 过去四年，**翻了一倍**——完全由 AI 驱动
- 核心问题：翻倍可以，**能翻三倍吗？** 还能脱离趋势线多远？

供应链深处，离最终 AI 需求越远，**怀疑越大**。这是经典的**牛鞭效应（Bullwhip Effect）**。

</div>

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50">

### 🔗 供应链中的独特时刻

<div class="text-sm leading-relaxed mt-2">

- 历史上基础建设（铁路、电力）没有出现过**单一公司掌控关键瓶颈**的情况
- TSMC 是一道关卡；ASML 是一道关卡；先进封装、关键材料领域还有更多
- 制造业不愿过度投资——"我们经历过周期，谨慎让我们在周期底部有投资能力"

</div>

</div>

</div>

---
layout: two-cols
---

# TSMC：保守的皇冠上的明珠

<div class="text-sm leading-relaxed mt-2">

Chris Miller 分析了 TSMC 的保守文化：

- 美国有"皇冠明珠"时会想尽办法扩大规模——任何借口都可以 10 倍产能
- TSMC 看到的是**历史周期**：过度投资会在周期底部受伤
- 现在他们的最大客户已从 Apple（稳定但无指数增长）转变为 Nvidia（AI 需求持续爆发）

但 TSMC 的保守**在过去确实奏效了**——他们多次在周期底部精准投资，压过竞争对手。

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
ASML 面临类似的困境：TSMC 已表示**未来几年不会购买最新的 High NA 光刻机**。"不管你有多 AGI-pilled，如果客户不买单，供应链上游也无可奈何。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tsmc-chokepoint.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 中国的 $2950 亿 AI 基金 & Mythos 效应

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 🇨🇳 中国 AI 2027

- Reuters 报道：中国筹备 **$2950 亿** AI 基础建设基金
- Chris Miller：如果把 Nvidia、Google、Microsoft 的投入加起来可能接近这个数字——"肯定在牌桌上，不是法国"
- 朝鲜也在意外崛起：建设了 **10,000 套住房**（超过洛杉矶），通过向俄罗斯和中国出售武器获得资金

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 text-sm leading-relaxed">

### 🛡️ Mythos 改变了白宫思维

- Chris Miller：**Anthropic Mythos 的发布**真的改变了白宫对 AI 强大程度的认知
- 这让保持领先能力的紧迫感大幅上升——影响了过去几周的出口管制讨论
- 关键信号：国会两党对出口管制的支持，许多有影响力的共和党人公开施压白宫

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Intel 的回归信号</strong>：客户兴趣的新闻很多，但还没看到实际订单量。Terrafab（Elon 的项目）可能是变革性的——但半导体制造是最难进入的行业之一。Samsung 在德州的工厂也在上线，Tesla 被传是客户之一。
</div>

---
layout: default
---

# Fable 5：Anthropic 的新消费者模型

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 💰 定价
<div class="text-3xl font-bold text-blue-600 my-2">$10</div>
每百万输入 token

<div class="text-3xl font-bold text-blue-600 my-2">$50</div>
每百万输出 token

<div class="text-xs opacity-60 mt-2">token maxing 请注意预算</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🚀 能力信号
<div class="text-lg font-bold text-green-600 my-2">"绝对碾压基准测试"</div>

可连续运行 **9 小时**甚至**整个周末**不混乱

Dan Shipper（Every）正在做实时 "vibe check"

<div class="text-xs opacity-60 mt-2">用户已提前几周获得模型访问权限</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🛡️ 定位
被一些评论者称为 **"Mythos 的阉割版"**

Anthropic 的框架：**更安全、更可靠**，适用于特定场景，可能更便宜

<div class="text-xs opacity-60 mt-2">面向消费级应用而非前沿研究</div>

</div>

</div>

---
layout: two-cols
---

# 推理算力无限缩放？

<div class="text-sm leading-relaxed mt-2">

**Noah Brown（OpenAI 推理研究负责人）** 关于大规模测试时计算的最新观察：

"经常有人问我：为什么我们不直接建一个评估框架，把测试时计算推到性能 plateau？**问题是，经验上 plateau 非常遥远。** 有时候在可行预算范围内，我们根本观察不到 plateau。"

你只管花算力，算力花得越多，结果越好。

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm">
Andrej Karpathy 在汽车研究实验中观察到了同样的现象：即使几百次实验后，性能仍在持续提升。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./test-time-scaling.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 一个疯狂的设想：模型运行时间超过训练时间

<div class="text-sm leading-relaxed mt-4 max-w-2xl mx-auto">

Noah Brown 提出了一个令人震撼的概念：

</div>

<div class="mt-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg text-center max-w-xl mx-auto">
"一个模型可能运行得比训练下一个模型所需的时间更长。"
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-100">

### 🏭 发布产品 A
你发布了一个产品，让它去执行一个任务

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-100">

### 🔄 训练模型 B
在模型 A 还在运行任务的过程中，训练完成了下一代模型

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-100">

### 🚀 发布模型 B
模型 B 发布时，模型 A 的任务还没跑完。这是全新的世界。

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
"越来越多计算，越来越多推理，越来越多推理——全面爆发。" —— TBPN 主持人
</div>

---
layout: default
---

# AI 就业预测的扩音器效应

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Dario Amodei
**Anthropic CEO**

"50% 的早期白领工作可能被自动化" → 后来修正为
**~10% 失业率**

这是在深度讨论中提出的，带有概率分布和大量限定条件

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### Dan Schulman
**Horizon CEO**

**20-30% 失业率**
在未来 2-5 年内

他的 AI 客服 agent 的客户满意度比人类高 **1,280 个基点（12.8%）**——用基点表达听起来大 100 倍

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 社交媒体 KOL
**Luke Belmar 等**

**80%-100% 的工作会消失**

从 Dario 的概率分布 → Schulman 的直接引用 → KOL 的病毒式传播，数字在不断放大

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded text-sm">
<strong>主持人观察</strong>：有趣的是，非 AI 行业的人（如 Schulman）反而给出了最激进的预测。AI 圈内的人在讨论中带有大量限定条件（"如果只有坏的事情发生，且没有政策回应"），但被断章取义后数字不断放大。而且——"永远不是他们自己的工作会消失。"
</div>

---
layout: default
---

# Standard Bots：美国重新工业化

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 🤖 愿景
Evan Beard 创立 Standard Bots 时发现：**美国 99.9% 的工业机器人不是美国制造**。现有产品软件像"大型机时代的菜单"——单个字母的界面。

- **C 轮融资**：$2 亿，估值 $10 亿
- **增长**：去年同比增长 10 倍，预计明年占美国工业机器人部署的 10%
- **客户**：覆盖几乎所有州的 SMB、Fortune 500、石油天然气、数据中心、航空航天、汽车

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### 🏠 "小鬼当家测试"
Evan 对人形机器人的看法：在工厂里，有腿的人形机器人成本更高、零部件更多、效率更低=**ROI 更差**。

人形机器人可能在家庭有市场——但要通过"小鬼当家测试"：**两个 5 岁孩子能跳上去抓住它试图绊倒它**。

"RL 翻转机器人的视频看起来很厉害，普通人觉得机器人问题已经解决了。但实际上我们离通过这个测试还很远。"

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>垂直整合</strong>：Standard Bots 设计自己的电机、电机控制器、固件。下一步是将制造也迁回美国。"你不希望一个对国家未来如此基础和关键的东西不在这里制造。"
</div>

---
layout: default
---

# ZenOne：法律工作流，不只是红线标注

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### ⚖️ 产品定位
Nick Fleisher，ZenOne CEO（$3000 万 A 轮，Lightspeed 领投）：
- 面向公司内部法务团队的**法律关系管理**平台
- 集中化管理对外查询和知识，让法务团队可以部署 AI 工作流
- 150 天：收入增长 40 倍，团队扩大 3 倍，几十家 Fortune 500 客户

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### 🎯 与 AI 实验室的差异化
Nick 的策略：**红线标注会被 AI 实验室商品化**——所以不跟这个。

他们做的是：
- 设计适合内部法务的**工作流工具**
- 提供**上下文层**：每个法律决策和关系如何关联
- 构建**从过去的法律决策中学习**的系统
- 服务不仅仅是法务团队的利益相关者（业务部门也在用）

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>不会 token maxing 的行业</strong>：一位 GC 告诉 Nick："我们绝对不会 AI maxing，短期内也不会。" 法律历来被视为成本中心——但这正在改变。有趣的是，AI 让法律工作变得更多了（业务部门在用 AI 做不该做的事，产生更多文本），所以法律 AI 工具的需求反而在增长。
</div>

---
layout: default
---

# NinjaOne：IT 终端的统一战争

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 🔧 产品内核
Chris Matarese，NinjaOne 联合创始人 & 总裁：
- **核心痛点**：IT 运维的复杂性和碎片化
- **产品**：统一的云原生平台，替代平均 **7 个** 单点解决方案
- **客户群**：4 万直接客户 + 通过 MSP 覆盖近百万企业
- **18 个月内融资 $4 亿**，估值 $123 亿

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### 📈 AI 是三重顺风
1. **设备爆炸**：笔记本、智能手表、快餐店的炸锅和烤架都变成了端点——管理需求激增
2. **产品增强**：AI 融入所有产品，推出 AI-native 安全漏洞和补丁智能产品
3. **攻击面扩大**：AI 创造更多攻击向量 → 更多漏洞需监控和修补

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>"每个企业都是潜在客户"</strong>——从管理 6 家本地会计师事务所的 MSP，到 Fortune 10 巨头，全在 NinjaOne 的覆盖范围内。
</div>

---
layout: default
---

# Vinyl Equity：200 年历史的过户代理现代化

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 📜 什么是过户代理？
Rob Schroder，Vinyl Equity CEO（$2000 万 A 轮，Jumpstart 领投）：
- 过户代理为上市公司维护**主证券档案**——股权所有权的基础
- 历史上可以追溯到华尔街的起源：有人拿着纸质股票证书走到过户代理那里登记交易
- "至今基本上还是像在寄纸一样" —— Rob

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 text-sm leading-relaxed">

### ⚡ 问题有多大？
- 一家家族办公室告诉 Rob：**解禁后平均 9 天才能收到股票**
- 在这 9 天里，股价可能波动 **10%**
- 在一个代币化、大型复杂 IPO、用户期待即时性的时代——**24 小时交割应该是底线**
- Vinyl 提供 API 原生的解决方案和预发布测试环境（这在行业里是"异常"的）

</div>

</div>

---
layout: default
---

# Flock Safety：旧金山犯罪的终结

<div class="text-sm leading-relaxed mt-4 max-w-2xl mx-auto">

节目播放了一段令人震惊的音频——两名被描述为"旧金山最高产的犯罪分子之一"的男子在播客上承认：**在旧金山犯罪已经不可能了**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 text-sm leading-relaxed">

### 🚁 技术如何运作
- 偷一辆车 → **无人机立刻开始跟踪你**
- 从几千英尺高空尾随，**你不知道自己被跟踪**
- 以前你可以甩掉警察 → 现在警察会等你停下来再包围你

"他们甚至不能做 drive-by 了。" ——播客嘉宾

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 text-sm leading-relaxed">

### 🔍 更大的问题
- 主持人半开玩笑：有没有人考虑过**听犯罪分子在播客上承认犯罪后去逮捕他们**？
- 这两名男子详细描述了他们的犯罪方法，"最古典的偷车后去找对头然后把车扔掉"的流程
- 这个案例展示了技术监控的威慑力——同时也引发隐私讨论

</div>

</div>

---
layout: default
---

# 快讯：朝鲜、媒体与奥德赛

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

### 🇰🇵 朝鲜经济奇迹
最受制裁的经济体建造了 **10,000 套住房**（超过洛杉矶）——"他们读了 Derek Thompson 的《Abundance》吧"。通过向俄罗斯和中国出售武器获得资金，核武库也在扩张。

Pyongyang Investment Fund 可能在筹集资金——但主持人提醒：说"我从 PIF 拿钱"时请确认不是平壤那个。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 📺 Pat McAfee 的 $6000 万
ESPN 正在与 Pat McAfee 谈续约——**每年超过 $6000 万**。39 岁的他已是 College GameDay 固定嘉宾，前两小时在 ESPN，全部三小时在 YouTube。

节目主持人："这是我们最大的榜样之一。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🍿 奥德赛爆米花桶
Christopher Nolan 新片推出特洛伊木马造型限量版爆米花桶——爆米花藏在马肚子里。主持人已准备入手。同时团队好不容易抢到了 Chinese Theater IMAX 的首映票——"让大家去看奥德赛，摸摸草地，记住什么是真实。"

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这场多嘉宾对谈中最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我把它描述成一片野草田——不是规划好的花园，没有架构。"
<div class="text-xs opacity-60 mt-1 not-italic">— RJ Scaringe，谈传统汽车软件架构</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"如果有人问你'重来一次会做什么不同'，诚实的回答是：不要同时发布三款车。"
<div class="text-xs opacity-60 mt-1 not-italic">— RJ Scaringe，Rivian CEO</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"过去五年的进展完全不代表未来五年会怎样。进展会快到社会来不及消化。"
<div class="text-xs opacity-60 mt-1 not-italic">— RJ Scaringe，谈自动驾驶基础模型转折</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"经验上 plateau 非常遥远。有时候在可行预算范围内，我们根本观察不到 plateau。"
<div class="text-xs opacity-60 mt-1 not-italic">— Noah Brown，OpenAI，谈推理算力缩放</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"一个模型可能运行得比训练下一个模型所需的时间更长。"
<div class="text-xs opacity-60 mt-1 not-italic">— Noah Brown 提出的概念，Andrej Karpathy 在汽车研究实验中验证</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"供应链中有一系列关卡，你只能依赖单一公司获取大部分产能——这在铁路枕木时代没有发生过。"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Miller，《Chip War》作者</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Siri 是 harness。Apple 的 OS 和 Siri 是那个 harness——他们建了灵活的新基础设施，底下可以是任何模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dave Morin，引述于 Alex Heath</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"如果你整天用 Claude 或 Codex，你仍然会觉得：呃，还行吧。"
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Heath，实测新 Siri 后的评价</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我们没有 AI maxing，短期内也不会。"
<div class="text-xs opacity-60 mt-1 not-italic">— 某 Fortune 500 公司 GC，引自 Nick Fleisher (ZenOne)</div>
</div>

</div>

---
layout: default
---

# 本期关键数字

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">Siri 从发布到 AI 化</div>
<div class="text-3xl font-bold text-blue-600 my-2">15</div>
<div class="text-xs opacity-60">年</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">Rivian R2 续航</div>
<div class="text-3xl font-bold text-green-600 my-2">330</div>
<div class="text-xs opacity-60">英里</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60">半导体支出/GDP</div>
<div class="text-3xl font-bold text-yellow-600 my-2">2×</div>
<div class="text-xs opacity-60">四年内翻倍</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60">中国 AI 基金</div>
<div class="text-3xl font-bold text-purple-600 my-2">$295B</div>
<div class="text-xs opacity-60">基础设施</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60">Fable 5 定价</div>
<div class="text-3xl font-bold text-red-600 my-2">$10/$50</div>
<div class="text-xs opacity-60">每百万 token (输入/输出)</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60">NinjaOne 估值</div>
<div class="text-3xl font-bold text-orange-600 my-2">$12.3B</div>
<div class="text-xs opacity-60">18 个月内翻倍</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">ZenOne 增长</div>
<div class="text-3xl font-bold text-blue-600 my-2">40×</div>
<div class="text-xs opacity-60">150 天收入增长</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">Horizon AI 客服提升</div>
<div class="text-3xl font-bold text-green-600 my-2">12.8%</div>
<div class="text-xs opacity-60">客户满意度</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="text-lg opacity-70 mt-4">
TBPN · 2026 年 6 月 9 日
</div>

<div class="text-sm opacity-50 mt-8">
Siri 花了 15 年才兑现承诺。<br/>
下一个 15 年，变化的速度将远超想象。
</div>
