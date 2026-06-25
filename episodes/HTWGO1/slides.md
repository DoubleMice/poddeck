---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How the World Got Owned Episode 1: The 1980s'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# How the World Got Owned

## 第一集：1980 年代

<div class="mt-6 text-sm opacity-60">
Risky Business Media × SentinelOne 联合制作
</div>

<div class="mt-2 text-xs opacity-50">
主持人 Patrick Gray · 记者 Amberley Jack
</div>

<div class="mt-8 text-xs opacity-40">
采访嘉宾：John Callas (DEC) · Tim Winslow (414s) · Mark Rasch (DOJ) · Tony Sager (NSA) · Greg Charter (Fermilab)
</div>

---
class: text-left
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>互联网的史前时代</strong><br/>
没有浏览器、没有搜索引擎——只有 ARPANET 和电话线拨号。整个"互联网"不到 6 万台机器。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>黑客文化的基因</strong><br/>
从 @ 派对到 BBS 地下社群，80 年代塑造了至今仍在影响网络安全的文化范式。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>法律从零开始</strong><br/>
414 小组闯入癌症中心和核实验室，却发现根本没有法律可以起诉他们。CFAA 由此诞生。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Morris 蠕虫</strong><br/>
1988 年，一个"互联网上的兜风"让 10% 的联网计算机瘫痪——CFAA 的首起公诉。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed col-span-2">
<strong>NSA 的盲区 + 最早的计算机间谍</strong><br/>
美国最强大的情报机构认为软件黑客是"业余爱好者的活"，而德国的 Markus Hess 和 Hagbard 已经在向 KGB 出售情报。
</div>

</div>

---
class: text-left
---

# 80 年代的"互联网"：一个极小的俱乐部

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 谁在上面？

<div class="text-sm leading-relaxed space-y-2 mt-3">

- **学术界、研究者、军方、政府、大型金融机构**——几乎没有商业存在
- ARPANET 和 MILNET 是分离的实体，总联网计算机约 6 万台
- John Callas 的朋友因为在 ARPANET 上说想开 ISP 公司被**直接踢出网络**

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"互联网是大学和政府的世界，商业参与极少。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas, 前 DEC 软件负责人</div>
</div>

</div>

<div class="text-sm leading-relaxed">

### 56K 骨干网的日常

<div class="space-y-2 mt-3">

- ARPANET 主干线路是 **56Kbps** 长途专线——整个网络的总带宽还不及今天的一部手机
- Bandicam 邮件列表：一群朋友用邮件当聊天室安慰失恋的朋友，每天发 100-200 封邮件
- 结果：成人管理员暴怒——"你们知道这些消息占了 ARPANET 1% 的带宽吗？"

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者概括：</strong>这就是"互联网的青春期"——在有限资源、亲密社群中形成的一套不成文规则。当局者认为这是严肃的学术工具；年轻人却把它当成社交游乐场。
</div>

</div>

</div>

---
layout: two-cols
class: text-left
---

# 两个平行的网络世界

<div class="text-sm leading-relaxed mt-2 space-y-3">

**ARPANET（上层世界）**
- 大学、政府、军方专享
- 56K 专线连接
- 系统管理员互相"告状"来维持秩序
- 没有文件权限——你可以读 Marvin Minsky 的邮件

**BBS（地下世界）**
- 个人在家中架设服务器
- 电话线拨号接入，2-10 线
- "10 线 BBS 就算大型站"
- 黑客亚文化的诞生地

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
414 小组通过 <strong>war-dial</strong>（大规模随机拨号）在这两个世界之间搭起了桥梁——从 BBS 的一端拨进了 ARPANET 的另一端。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./arpanet-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# @ 派对：拥有邮箱地址就是"酷孩子"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 数字时代的入场券

<div class="text-sm leading-relaxed space-y-2 mt-3">

- **@ 派对**：你必须有邮箱地址（@ 符号）才能参加——这是最早的"数字身份门槛"
- 周五晚上在某人家里聚会，通过邮件安排，科幻大会期间也会有 @ 派对
- John Callas 既喜欢又厌恶这种文化："这很酷，因为你是圈内人；但这也很排外——有人想来却因为没有邮箱而被挡在门外"

</div>

</div>

<div>

### 黑客与朋克的平行宇宙

<div class="text-sm leading-relaxed space-y-2 mt-3">

- 80 年代的黑客文化和朋克音乐圈在气质上高度相似
- "你可以登录 MIT 的计算机，轻松把它搞崩溃——可能被踢出去，但你至少有自己的邮箱"
- 所有人的邮件都是公开的：从聚会计划、恋爱八卦到 Marvin Minsky 的 AI 研究——你都能读到

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"朋克音乐圈和早期的黑客圈在文化上非常相似。没有文件保护——你读别人的邮件来了解朋友们在做什么。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas</div>
</div>

</div>

</div>

---
class: text-left
---

# 414 小组：密尔沃基的好奇少年

<div class="text-sm leading-relaxed mt-4">

**414 小组**（以密尔沃基区号命名）是 80 年代最具代表性的黑客团体——不是因为技术高超，而是因为他们代表了那个时代的纯粹好奇心。

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>动机</strong><br/>
Tim Winslow 说他们只是想知道"外面有多少台计算机"——朋友们没有电脑，他们想看看网络上有哪些系统，碰碰运气玩点游戏。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>手段</strong><br/>
War-dial：一组电话号码一个接一个地拨，听哪些有调制解调器的响应音。完全是随机的探索，没有恶意。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>后果</strong><br/>
意外删除了癌症中心的医生账单（未触及病人信息）。据称闯入了 Los Alamos 国家实验室。FBI 上门调查——但发现根本没有适用的法律。
</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"我们不是恶意的。他们给一切加上了恶意的滤镜。这是新闻，他们要做新闻该做的事。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tim Winslow, 414 小组成员</div>
</div>

---
layout: two-cols
class: text-left
---

# 从 War-Dial 到国会山

<div class="text-sm leading-relaxed mt-2 space-y-3">

**414 的故事是 80 年代黑客叙事的微缩版**——好奇心引发事件，执法机构不知所措，媒体放大恐惧，最终催生了全新的法律框架。

Tim Winslow 回忆 FBI 上门时：

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"FBI 一个接一个地找到我们。他们一大早就来了。我妈妈开的门，她一直在哭——她担心他们会当场把我带走。"
</div>

<div class="mt-2 text-sm">
最终起诉的唯一依据是<strong>跨国非法使用电话线路</strong>——这是能找到的最接近的"罪名"。罚款 $500、缓刑 2 年。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./414s-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 媒体狂欢：17 岁少年登上 Newsweek 封面

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### "WarGames 案"

<div class="text-sm leading-relaxed space-y-2 mt-2">

- 414 小组未成年的成员（17 岁的 Neal Patrick）**免于起诉**
- 于是他上了 Newsweek 封面，做客 Good Morning America、CBS、CNN
- 而成年成员在等待"会以什么罪名被起诉"
- 事件被媒体称为"WarGames 案"——与 1983 年的同名电影巧合

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Tim Winslow 澄清：<strong>"他们说我们模仿了电影——但我们没有。我们 70 年代就开始了，远在电影之前。"</strong>
</div>

</div>

</div>

<div>

### 第一次国会作证

<div class="text-sm leading-relaxed space-y-2 mt-2">

- 1983 年，Neal Patrick 在国会就计算机安全作证
- 此后数年间，新的计算机法律逐渐成形
- 最终产物：**1986 年《计算机欺诈与滥用法》（CFAA）**——至今仍是美国计算机犯罪的核心法律

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"我们帮助创造了法律，但没有制造太大的混乱。我们刻意避免鲁莽行事。"
<div class="text-xs opacity-60 mt-1 not-italic">— Neal Patrick, 414 小组成员</div>
</div>

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>作者概括：</strong>414 的传奇在于——一群只是想看看"外面有多少台电脑"的少年，无意间推动了美国计算机刑法的奠基。这不是一部犯罪故事，而是一部"好奇心撞上法律真空"的故事。
</div>

---
class: text-left
---

# 1988：Morris 蠕虫——互联网的第一次"车祸"

<div class="text-sm leading-relaxed mt-4">

1988 年 11 月 2 日晚 8:30，康奈尔大学研究生 **Robert Tappan Morris** 从一台计算机释放了一个程序——它本不该失控，但他代码里的一个小错误让它变得不可收拾。这就是后来被称为 Morris 蠕虫的事件，也是 CFAA 生效后的**首起联邦公诉**。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600">~6,000</div>
<div class="text-xs mt-1 opacity-70">台计算机被感染</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600">~10%</div>
<div class="text-xs mt-1 opacity-70">占当时全网计算机</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">数千万</div>
<div class="text-xs mt-1 opacity-70">美元估量损失</div>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"罗伯特·莫里斯不是罪犯。他不邪恶，不是坏角色，没有试图做什么可怕的事。这在某种意义上，是互联网上的一次兜风，失控了。"
<div class="text-xs opacity-60 mt-1 not-italic">— Mark Rasch, 本案检察官, 美国司法部</div>
</div>

---
layout: two-cols
class: text-left
---

# Morris 蠕虫：数据全景

<div class="text-sm leading-relaxed mt-2 space-y-3">

**为什么这个案件如此重要？**

- 这是 CFAA（1986）生效后的**首起公诉**——整个法律框架的第一次实战检验
- Morris 没有盗窃意图，他只是一个犯了编码错误的聪明年轻人
- 检察官 Mark Rasch 在"重罪 vs. 轻罪"之间反复权衡

**最终判决**
- 1 项重罪成立
- 3 年缓刑
- 400 小时社区服务
- 法官明确不适用量刑指南

**但后果微妙**
- 检方故意不上诉——"我们可以在口头上说他应该坐牢，但实际上不用给任何后果"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./morris-worm-impact.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# 在互联网荒漠中办案

<div class="text-sm leading-relaxed mt-4">

1988 年，检察官 Mark Rasch 面临一个根本性的困难：**如何在一个人人都不懂计算机的社会里，起诉一起计算机犯罪？**

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>司法部的"计算机犯罪部"</strong><br/>
Mark Rasch 就是这个部门——<strong>只有他一个人</strong>。有人问"谁懂计算机？"他举手说"我懂一点点"，就成了指定的计算机检察官。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>司法部没有互联网连接</strong><br/>
Rasch 不得不拆开办公室电话，去 Radio Shack 买转接头自制拨号上网。他的秘书<strong>把软盘钉在文件夹里</strong>——他得解释为什么不能这么做。
</div>

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"首先你要教育法官，然后教育陪审团。我们的陪审团里只有两个人用过计算机——没人有电子邮件，没人用过互联网。你怎么向一个从来没用过计算机的人解释邮件守护进程或缓冲区溢出？"
<div class="text-xs opacity-60 mt-1 not-italic">— Mark Rasch</div>
</div>

---
class: text-left
---

# 量刑的悖论：该不该让一个天才坐牢？

<div class="text-sm leading-relaxed mt-4">

Morris 蠕虫案的量刑是法律史上最微妙的困境之一——不是因为找不到合适的刑罚，而是因为**刑罚本身没有意义**。

</div>

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>量刑指南的计算：</strong>按照 1988 年新颁布的美国量刑指南，Morris 的行为对应约 <strong>5 年监禁</strong>——且指南特别规定"如果最低刑期少于 6 个月，不得缓刑"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>法官的实际判决：</strong>缓刑。法官明确宣布"量刑指南不适用于本案"——这从法律上说是<strong>完全错误的</strong>。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"我不想让他完全不坐牢——如果你从药店偷婴儿奶粉给你的孩子吃，你也会被关几天。但我觉得他不需要关很长时间……我们考虑上诉，但有两个问题：第一，我们可能输，然后建立一个坏的判例；第二，我们可能赢，法院就得判他 18 个月——我们两个结果都不想要。"
<div class="text-xs opacity-60 mt-1 not-italic">— Mark Rasch, 解释他们为什么选择不上诉</div>
</div>

</div>

---
class: text-left
---

# NSA 眼中的黑客：业余爱好者的活

<div class="text-sm leading-relaxed mt-4">

Tony Sager 1979 年加入 NSA，在那里度过了 **37 年**。当被问及 NSA 在 80 年代对计算机黑客的态度时，他的回答令人意外：**他们基本上不关心。**

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>深层文化偏见</strong><br/>
NSA 认为软件"太容易出错、太不可靠"——如果你想做加密，你<strong>用定制硬件来做</strong>。软件是前端显示器和通信处理器的"脏活"。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>"我们才是真正的安全"</strong><br/>
NSA 的防御团队在解决"真正的安全问题"——涉密信息保护。至于外面那些——"消费者级别的东西，玩玩安全而已，算不上真正的安全。"
</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"我觉得在防御这边，人们会关注那些事，但不一定认为和我们做的事有关联。内部的主流文化是——我们 NSA 在解决真正的安全问题，涉密信息问题。其他的，是业余爱好者的活，罪犯的活。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tony Sager, NSA 37 年资深专家</div>
</div>

---
layout: two-cols
class: text-left
---

# NSA：当机构惯性碰上商品化革命

<div class="text-sm leading-relaxed mt-2 space-y-3">

**文化分裂的本质：**

NSA 内部存在一条清晰的分界线——一边是深耕几十年的密码学硬件传统，一边是新崛起的商品化软件浪潮。

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Sager 的观察：</strong>"我尊敬的一些人，到了职业生涯末期还在拼命抓住过去不放。看着你曾拜师学艺的国家英雄说'他们的时代过去了'——这很痛苦。"
</div>

<div class="mt-2 text-sm">
但经济学是不可抗拒的——<strong>"我可以等 10 年造一块定制硬件，也可以现在就给 IBM PC 或 Apple II 写程序。"</strong>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nsa-divide.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# "我们共同建造了人类历史上最大的情报收集系统"

<div class="text-sm leading-relaxed mt-4">

Tony Sager 提出了一个反直觉的历史视角：**互联网本质上是美国送给全世界的免费情报基础设施。**

</div>

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>进攻方的先见之明：</strong>"进攻方通常更有创造力——不是说个人属性，而是他们更自由，不受政策和采购流程的限制。他们在寻找进入的路径。当世界开始联网，那就是'全世界现在都是信号情报目标了'。"
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>情报圈内的"间谍"先行者：</strong>尽管 NSA 整体上对软件黑客持轻视态度，一些最机密的行动部门最早发现了网络的价值——商品化技术<strong>不引人注目</strong>，可以低成本快速部署，用完即弃。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">
"一个关于互联网演化的另类视角是：我们共同建造了人类历史上最伟大的情报收集行动。而且美国基本上是免费提供给全世界的。但能力的阴阳两面是——进攻能力也让我们自己面临风险。事实上，由于现代化和 IT 普及，美国比大多数国家面临更大的风险。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tony Sager</div>
</div>

</div>

---
class: text-left
---

# 布谷鸟蛋：当 Cliff Stoll 发现账目对不上

<div class="text-sm leading-relaxed mt-4">

1986 年，天文学家转行做系统管理员的 **Cliff Stoll** 在 Lawrence Berkeley 国家实验室发现了一个 75 美分的账目差异。追查下去，他揭开了冷战时期最大胆的计算机间谍活动之一。

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>事件概要</strong><br/>
德国黑客 <strong>Markus Hess</strong> 潜入了 Berkeley 的 Unix 系统，在实验室网络中游荡，窃取军事和科技情报，然后<strong>卖给 KGB</strong>。
</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>Cliff 的追踪手段</strong><br/>
他自制了一套精巧的监控系统——用打印机纸追踪每一次击键，在黑客活动时通过寻呼机接收警报。他花了将近一年时间，最终将攻击追溯到德国。
</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>为什么这个故事如此重要</strong><br/>
Cliff Stoll 后来写的书《布谷鸟蛋》成为了一代安全从业者的启蒙读物。<strong>Adam Boileau</strong>（本集顾问）说他小时候读这本书，正是这本书让他走上了黑客和安全研究的道路。
</div>

<div class="mt-2 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括：</strong>但《布谷鸟蛋》不是唯一的追踪故事——它只是一个更大拼图中的一块。记者 Amberley Jack 发现了<strong>第二条并行的追踪线</strong>。
</div>

</div>

</div>

---
layout: two-cols
class: text-left
---

# 两条并行的追踪线

<div class="text-sm leading-relaxed mt-2 space-y-3">

**Greg Charter** 在 80 年代担任能源部 Fermilab 的网络管理员。他也发现自己的 DEC VAX 系统里有个德国黑客——而且他一直在和 Cliff Stoll 交流追踪技巧。

**领导层的唯一指令：**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"请别让我们上新闻。"
</div>

Charter 花了一年多时间，大部分精力都投入在这件事上。Fermilab 不做炸弹、不送宇航员——所以大多数黑客很快失去了兴趣——除了一个人：**Hagbard (Karl Koch)**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cuckoos-egg.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
class: text-left
---

# Hagbard：一个令人心碎的结局

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

### 一个被忽视的"另一个黑客"

- Karl Koch（化名 Hagbard）不像 Markus Hess 那样窃取情报卖给 KGB——他只是需要一个系统来做自己的开发工作
- Fermilab 没有打扰他，他以为系统是自己的，Charter 就在一旁看着
- 但与其他只是好奇的大学生黑客不同，Hagbard **不同**——Greg 很快就感觉到了

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"我以为追踪黑客很简单——查到号码就搞定了。不是这样的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Charter</div>
</div>

</div>

<div class="text-sm leading-relaxed">

### 悲剧的终点

- 1989 年，Karl Koch 离开工作场所后再也没有回来
- 一个月后被发现时只剩骨骸，中枪，周围土地完全烧焦
- 官方裁定为**自杀**——但由于他关联着 Chaos Computer Club 和 KGB 的阴影，各种阴谋论甚嚣尘上
- Koch 在死前已经开始明显吸毒，Greg Charter 观察到他在系统里的活动变得越来越不连贯

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"一开始我为他被抓感到高兴。直到 Cliff 从德国回来，告诉我 Hagbard 家里的真实情况——母亲去世、没有钱、找不到工作……我说，天哪，这孩子真的很惨。他经历了太多。"<br/>
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Charter, 在看到全局后改变了对 Hagbard 的看法</div>
</div>

</div>

</div>

---
class: text-left
---

# 媒体与恐惧：《WarGames》和黑客恐慌

<div class="text-sm leading-relaxed mt-4">

1983 年电影《WarGames》上映——一个少年黑客几乎引发了第三次世界大战的故事——恰好和 414 小组的调查同年发生。这部电影不仅塑造了公众对黑客的想象，也实实在在地<strong>改变了政策</strong>。

</div>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>电影的杀伤力</strong><br/>
"《WarGames》没有给我们任何人带来好处。它是导致这个圈子衰落的因素之一。"——John Callas 认为，这部电影让公众恐慌，也让当局有了理由"关闭公园"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>媒体的放大效应</strong><br/>
媒体特别聚焦于 NASA："我们的卫星会因为黑客攻击而从天上掉下来。"——Tim Winslow。这种报道风格塑造了至今未变的安全叙事。
</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"恐惧贩卖的问题在于，它总有一丝真相。我参与开发的软件被用在伦敦证券交易所，用在战斗机上，每一枚中程弹道导弹的两侧都装着我写的东西——因为俄罗斯人克隆了 VAX 系统。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas，在谈及他的代码最终被用于军事用途时</div>
</div>

---
class: text-left
---

# 恐惧的底色：核阴影下的一代人

<div class="text-sm leading-relaxed mt-4">

要理解 80 年代对计算机黑客的恐慌，必须先理解当时弥漫在整个社会中的**核恐惧**——这不是抽象的焦虑，而是日常对话的一部分。

</div>

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>一代人的日常：</strong>John Callas 回忆道，"我确实不指望活过 30 岁。派对上的对话经常包括——'炸弹落下后你打算往哪儿跑？'你必须身在其中才能理解那种文化恐惧。"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>"恐惧好卖"：</strong>Callas 指出恐惧叙事总是占优——你无法证明一个负面命题。"从理论上说，一个想玩电脑游戏的孩子的确有可能会引发核战争，但真的不会发生。但恐惧贩子有优势——恐惧好卖。今天新闻里的事也一样。"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm italic">
"天哪，柏林墙倒塌时，我发自内心地欢呼。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas, 对冷战终结的回忆</div>
</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>作者概括：</strong>80 年代的黑客恐慌不能脱离其历史背景来理解。人们担心的不是信用卡被盗——那些数据根本不在网上——而是计算机可能导致<strong>核战争</strong>。电影《WarGames》的恐惧之所以有效，是因为观众已经活在那恐惧中。
</div>

---
class: text-left
---

# 当"锁"被发明

<div class="text-sm leading-relaxed mt-4">

John Callas 用一个精妙的比喻总结了 80 年代的安全转型：**在有锁之前，没有窃贼。** 80 年代正是锁被发明的时代。

</div>

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>一个完全开放的文化：</strong>"这是一个完全开放的文化。如果你对别人不礼貌，比如不删别人的文件，你就会被踢出去。当 MIT 的计算机引入<strong>文件权限</strong>——让你不能读别人的邮件时——这是极具争议的。你通过读朋友的邮件来了解他们在做什么，这是社交文化的一部分。密码本身就是一个有争议的东西。"
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>从社交到对抗：</strong>"想象你早上起床，走到厨房，发现有人在吃你冰箱里的剩饭。你说'你在这里干什么？'他们说'门没锁，我有点饿了'。然后有一天，吃鸡腿的人说'你让我走我就不走'——现在你有了人类对抗。"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"他引用了老子的话——法令滋彰，盗贼多有。"
<div class="text-xs opacity-60 mt-1 not-italic">— Amberley Jack 复述 John Callas 的观点</div>
</div>

</div>

---
class: text-left
---

# 公园里的工厂

<div class="text-sm leading-relaxed mt-4">

John Callas 用了一个扩展的比喻来描述 80 年代黑客文化的终结——这是本期最具洞察力的叙述之一：

</div>

<div class="p-4 mt-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic leading-relaxed">
"想象有一个大工厂，旁边有个公园。天黑以后人们去那里，放音乐、聊天、有时跳舞，总有一提六瓶装的啤酒，没有人仔细检查别人够不够年龄喝酒。"
<br/><br/>
"最终这一切都被关闭了——原因和所有这类事情一样。有人越过了某条线，当局介入，关闭了圈子。一方面，我觉得'拜托，这些只是玩得开心的孩子'……但另一方面，确实有人跨过了那条不成文的规矩。"
<br/><br/>
"有人带了音箱，开始弹朋克吉他，11 点还开着灯。你叫他们小声点，他们不听——于是警察来了，把所有人都赶出了公园。"
</div>

<div class="mt-3 text-sm opacity-70">
<strong>作者概括：</strong>这个比喻的精确之处在于——它既不是"邪恶黑客"叙事，也不是"无辜少年"叙事。它承认了从"无害的好奇"到"越界的行为"之间的灰色地带，以及当局反应中不可避免的过激。
</div>

---
class: text-left
---

# 第一位互联网悲观主义者

<div class="text-sm leading-relaxed mt-4">

在互联网还远未成为主流的时候，Greg Charter 就已经看到了阴影。1989 年，当大多数网络先驱还在畅想互联网的美好未来时，他已经在摇头。

</div>

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">
"我在和某位参与构建这些网络的人交谈时，他说'互联网是如此有用的工具，每个人都会用它做善事，不会有人用它做恶事。'我坐在那里想说——你是认真的吗？我没说出来。这就是许多网络先驱的态度——写 Unix 代码的人、造第一批网络设备的人——'不，没人会滥用这个。'"
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Charter</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Patrick Gray（主持人）评论道：<strong>"我觉得 Greg 比所有人都看得更远——他在互联网还没真正存在的时候就已经对它感到绝望了。他可能是第一个说互联网是个错误的人。"</strong>
</div>

</div>

---
class: text-left
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句——每条都经过原文验证：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"这在某种意义上，是互联网上的一次兜风，失控了。"
<div class="text-xs opacity-60 mt-1 not-italic">— Mark Rasch, 描述 Morris 蠕虫案</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"在有锁之前，没有窃贼。所以这是一个'锁被发明'的时代。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas, 80 年代安全转型的本质</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"我们解决方案的高端问题、涉密信息问题。其他的——业余爱好者的活，罪犯的活。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tony Sager, NSA 80 年代的主流心态</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"我妈妈开的门……她一直在哭。她担心他们会当场把我带走。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tim Winslow, 414 成员, FBI 第一次登门</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"法令滋彰，盗贼多有。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas 引用老子，说明规则越多越可能滋生违规者</div>
</div>

</div>

---
class: text-left
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于人性、恐惧与互联网的未来：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"我们共同建造了人类历史上最伟大的情报收集行动。而且美国基本上是免费提供给全世界的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tony Sager, 对互联网的另类历史解读</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"这孩子真的很惨。他经历了太多。我基本上立刻就改变了对他的看法——他是许多环境的受害者，真的是一个麻烦缠身的人。"
<div class="text-xs opacity-60 mt-1 not-italic">— Greg Charter, 在了解 Hagbard 全部背景后</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"恐惧好卖——不论过去还是现在。你无法证明一个负面命题，所以恐惧贩子总是有优势，最终总是赢得叙事。"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas, 论媒体的安全恐慌报道</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"我确实不指望活过 30 岁。派对上的对话经常包括——'炸弹落下后你打算往哪儿跑？'"
<div class="text-xs opacity-60 mt-1 not-italic">— John Callas, 80 年代的核恐惧日常</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"互联网是如此有用的工具，每个人都会用它做善事——不会有人用它做恶事。"
<div class="text-xs opacity-60 mt-1 not-italic">— 早期网络先驱（Greg Charter 复述），展现出那个时代的惊人天真</div>
</div>

</div>

---
layout: end
class: text-center
---

# 第一集完

<div class="mt-6 text-lg opacity-80">
"How the World Got Owned" 由 Risky Business Media 与 SentinelOne 联合制作
</div>

<div class="mt-3 text-sm opacity-60">
记者与调研：Amberley Jack · 额外报道与编辑：Patrick Gray
</div>

<div class="mt-6 text-sm opacity-50">
下一集：1990 年代 —— 第一部分
</div>

<div class="mt-8 text-xs opacity-40">
采访嘉宾：John Callas (DEC 前软件负责人) · Tim Winslow (414 小组成员) · Mark Rasch (美国司法部前检察官) · Tony Sager (NSA 37 年资深专家) · Greg Charter (Fermilab 前网络管理员)
</div>
