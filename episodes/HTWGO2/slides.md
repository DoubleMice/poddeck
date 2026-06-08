---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How the World Got Owned Episode 2: The 1990s, Part One'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# How the World Got Owned
## Episode 2：The 1990s, Part One

<div class="mt-8 text-sm opacity-70">

Risky Business Media · Hosted by Patrick Gray

Produced & Edited by Amberly Jacob

</div>

<div class="mt-6 text-xs opacity-50">

Sponsored by SentinelOne

</div>

---
layout: default
---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**黄金时代**  
Jeff Moss 这样形容 90 年代初期：一个个体能做出巨大贡献的时代，理解力是可以管理的东西，秘密知识触手可及。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**社群诞生**  
DEF CON 于 1993 年在拉斯维加斯起步；HOPE-Con、Summer-Con 把互联网上只有 handle 的人变成现实中的朋友。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**主流的误解**  
媒体和好莱坞把黑客塑造成"能炸掉你电视"的威胁——与此同时，第一个被黑的网站竟然是电影《黑客》的官网。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**一个真实罪犯故事**  
从物理入侵电话公司大楼，到被 FBI 怀疑为克格勃间谍，再到潜逃期间通过电台比赛赢了一辆保时捷——Kevin 的故事是所有故事的锚点。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**怪咖很受欢迎**  
L0pht 成员 Chris Wysopal 讲述了社群的双面性：包容边缘人群，也充满自负与冲突。不是田园诗，但足够真实。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**黑客与记者的镜像**  
Kevin 从罪犯转型为《华尔街日报》记者：两者共享同一种驱动力——不惜一切代价的好奇心，和对研究对象零评判的态度。

</div>

</div>

---
layout: two-cols
---

# Jeff Moss：黄金时代

<div class="mt-2 text-sm leading-relaxed">

Jeff Moss 是 DEF CON 和 Black Hat 的创始人。回忆 90 年代早期，他用了一个词来形容那段岁月："golden age"。

在那个互联网还很小的时代，技术栈是可以被一个人全部掌握的。几个在同一个房间里的人，分别懂 Unix、懂电话系统、懂 SunOS，加在一起**几乎可以接管整个互联网**。

**作者概括**：今天的网络安全已经变得极度专业化，你需要 20 个人才能搞清楚怎么去混淆一段 JavaScript。而 90 年代早期的"可理解性"本身就是一种力量。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hacker-knowledge-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 秘密知识的力量

<div class="mt-4 text-sm leading-relaxed">

Jeff Moss 回忆，在早期 BBS 时代，信息流通的渠道极其有限：

</div>

<div class="mt-3 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 text-sm leading-relaxed">

"In that room, those people had the skills to just basically be the lords of the internet. And if you were around them, you could sort of figure out how the whole world worked."

</div>

<div class="mt-3 text-xs opacity-60">— Jeff Moss，HOPE-Con 往事</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**知识获取**  
没有 Google，没有 Amazon，没有关于这方面的书店。"if you could get to the information, you could sort of feel like you had the secret knowledge"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**可接近性**  
"it was approachable, digestible"——对于年轻且有兴趣的人来说，整个系统是可以被理解的，不像今天。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**个体力量**  
"Anything was possible. Individuals could make huge contributions." 一个人就能改变局面。

</div>

</div>

---
layout: two-cols
---

# 知识的实物交换

<div class="mt-2 text-sm leading-relaxed">

Chris Wysopal（L0pht 成员，圈内人称 WeldPond）回忆了 90 年代初期黑客们获取知识的现实方式：

- **物理手册是硬通货**：像小型机这种系统，只能从公司壁橱或垃圾箱里找到技术手册。不是你今天可以"下单购买"的东西。
- **每月两次的集体垃圾桶淘金**：
  > "we would go dumpster diving like a couple times a month and different people would just bring their haul back and we would sift through it"

这种靠实物交换维系的社区，远在免费电子书和搜索引擎之前。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hacker-knowledge-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 90 年代：聚会（Con）的十年

<div class="mt-4 text-sm leading-relaxed">

Patrick Gray 在节目中总结道：如果说 90 年代有一个关键词，那就是 **Cons**——黑客们在真实世界里的见面会。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**HOPE-Con**  
最早的黑客聚会之一，在圣诞节期间举办。一个纯粹的信息交流场所。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Summer-Con**  
夏天版的 HOPE-Con，同样是草根起源。人们从全美各地赶来只为见一面只在 IRC 上用 handle 认识的人。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**DEF CON — 1993 年 6 月，拉斯维加斯**  
Jeff Moss 从未打算创建一场会议。"This was never intended to be a conference, let alone a conference that would be one of the biggest hacking conferences of the last 30-odd years."

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**Chris Wysopal 的回忆**："And so when you would go to these early cons, you're like, hey, I'm meeting all these people that I only know from a handle on IRC."——从互联网代号到面对面的人，这种转化是 90 年代 hacker 社群独有的体验。

</div>

---
layout: two-cols
---

# 怪咖欢迎你——以及另一面

<div class="mt-2 text-sm leading-relaxed">

Chris Wysopal 描述了早期 hacker con 的社群生态——温暖与阴暗并存：

**包容的一面**：
- "Weirdos were welcome here"
- 早期 con 吸引了大量自学成才的人、弱势社区的成员、LGBTQ 群体
- 在文本主导的环境中，人们**只能通过你打出来的字来评判你**——外表、性别、身份都不重要

**阴暗的一面**：
- 年轻+聪明+自负=冲突

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./community-dynamics.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 只靠打字建立的人设

<div class="mt-4 p-4 italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 text-sm leading-relaxed">

"Back then, you know, 300 baud, 1200 baud, 2400 baud, that took sometimes a while for messages to load. And so people were pretty brutal. If you wasted a lot of their time and their bandwidth downloading messages that were useless, people would get kind of bitter."

</div>

<div class="mt-3 text-xs opacity-60">— Jeff Moss</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Handle 即人格**  
没有头像、没有个人简介、没有 Top 8 Friends——"the handles, the personas were much bigger"。有人扮演 Robin Hood 式的角色，用古英语发帖，完全活在 persona 里。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**带宽即社交货币**  
在 300-2400 baud 的时代，下载一条没用的消息是真金白银的时间成本。**低质量内容不是被划走，而是被 brutal 地批判**。

</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 bg-opacity-50 border-l-4 border-red-500 text-sm leading-relaxed">

Wysopal 坦承："there were slurs and there was other things that happened. I don't want to make it sound like it was all kumbaya rosy. Because it wasn't."——年轻社群无法回避的阴暗面。

</div>

---
layout: default
---

# 当主流媒体开始恐慌

<div class="mt-4 text-sm leading-relaxed">

Jeff Moss 回忆 90 年代媒体对黑客的刻画——这不是一场精准的报道，而是一场**道德恐慌**。

</div>

<div class="mt-3 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 text-sm leading-relaxed">

"people fear what they don't understand. And they clearly didn't understand hacking. So there was a whole lot of misinformation, almost like hysteria around some of this stuff. There was one, you know, like hackers will blow up your television set or can blow up your computer."

</div>

<div class="mt-3 text-xs opacity-60">— Jeff Moss</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**《黑客》电影（1995）**  
第一部被 deface 的网站——正是《黑客》电影官网。这标志着黑客开始成为好莱坞的"情节装置"和公众想象力的猎物。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**分裂的体验**  
一方面你觉得自己看到了世界运行的秘密；另一方面你感到自己是"被误解的迷惘青年"——"nobody can understand my secret group and they're making up stuff, and it's all bullshit"

</div>

</div>

---
layout: default
---

# 第一个被黑的网站：《黑客》电影官网

<div class="mt-4 text-sm leading-relaxed">

Amberly Jacob 分享了一条她在资料挖掘中发现的有趣细节——

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed italic">

"Hackers, the new action-adventure movie from those idiots in Hollywood, takes you inside a world where there is no plot or creative thought, there's only boring rehashed ideas."

</div>

<div class="mt-1 text-xs opacity-60">— 1995 年黑客在《黑客》电影官网留下的替换文字</div>

<div class="mt-4 text-sm leading-relaxed">

这些黑客甚至**贴心地加了一个链接**，指向 Sandra Bullock 主演的另一部电影《The Net》，建议人们去看那部而不是《黑客》。

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**矛盾的 ironic**  
黑客文化的自嘲和反叛表现得淋漓尽致：不仅黑了你，还用你的平台推荐竞争对手的作品。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**第一次记录在案的网站破坏**  
1995 年，这个事件标志着一个新时代——互联网的可破坏性第一次进入公众视野。

</div>

</div>

---
layout: default
---

# Red Box 与 BBS：Aleph One 的入门故事

<div class="mt-4 text-sm leading-relaxed">

Elias Levy（Aleph One）——后来写出了著名的缓冲区溢出论文 "Smashing the Stack for Fun and Profit"——讲述了他如何偶然踏进 90 年代湾区 hacker 圈子的：

</div>

<div class="mt-3 p-4 italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 text-sm leading-relaxed">

"I had the good luck of meeting a couple of folks at a Radio Shack, where I went to buy actually some crystals to make a red box. They were like these two shifter-looking guys in the store, and when I come out, they're waiting for me, and so they asked me what I'm building, and I tell them, well, I'm building a red box. What are you guys building? And they're like, oh, we're building a blue box."

</div>

<div class="mt-3 text-xs opacity-60">— Aleph One (Elias Levy)</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

**Red Box**  
模拟投币音调，用于免费拨打付费电话

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

**Blue Box**  
模拟 2600Hz 信令音，可以劫持电话交换机的中继线路

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**Lunatic Labs BBS**  
其中一个人给了他这个老牌 BBS 的号码，"that really sort of opened up the world"

</div>

</div>

---
layout: default
---

# Kevin：肾上腺素成瘾者

<div class="mt-4 text-sm leading-relaxed">

Patrick Gray 形容 Kevin 是一位"极其温和、轻声细语、超级友善的人"——然而他碰巧就是在随意讲述自己的犯罪史。这个反差是本期最令人印象深刻的元素之一。

</div>

<div class="mt-3 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 text-sm leading-relaxed">

"What I came to learn about myself is that I was kind of an adrenaline junkie and a nerd. And if you combine those two things you wind up being a hacker."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-3 text-sm leading-relaxed">

当电话系统的远程入侵变得"comfortable"、开始变得无聊时，Kevin 选择了一条更危险的升级路径：

</div>

<div class="mt-2 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**夜爬电线杆**  
凌晨爬上电话线杆，进入 Palo Alto 电话局大楼的屋顶，找到一扇没锁的门。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**物理入侵就是升级版的黑客行为**  
"it was like hacking except now it's physical and it had a lot more adrenaline. It was a lot more of a rush. And it was totally immersive in a way that looking at a computer screen never is."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**历时数年的犯罪狂欢**  
"that turned into a crime spree of breaking and entering over the course of a couple of years, almost every week."

</div>

</div>

---
layout: two-cols
---

# Kevin 的犯罪轨迹

<div class="mt-2 text-sm leading-relaxed">

从电话飞客到联邦间谍案嫌疑人——Kevin 的故事是 90 年代 hacker 文化中"冒险"与"代价"的完美缩影。

**作者概括**：这不是一个"被误解的天才"的浪漫叙事——Kevin 自己描述自己成瘾般的行为模式："I've always had a problem dipping a toe into anything and not just plunging wholeheartedly into it a couple minutes later."

当 FBI 因为他持有国防承包商安全许可、又入侵电信基础设施而怀疑他为克格勃工作时，案件完全升级了。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kevin-crime-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 在逃：FBI 与克格勃

<div class="mt-4 text-sm leading-relaxed">

Kevin 落网的起点，是一个令人心酸的细节：他**欠了储物柜的租金**。

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**储物柜 → FBI**  
"I fell behind on the rent for the storage locker and they cracked it open and they found all the stuff and they called the phone company. The phone company came out and looked at it and then they called the FBI."

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**间谍案嫌疑**  
"There were agents working this case that genuinely thought I might be working for the KGB. Gaining access to critical telecommunications infrastructure, holding a security clearance for defense contractor during the day — to them it's all this spelled espionage."

</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

于是 Kevin 逃到了洛杉矶，用一个化名生活——**Michael B. Peters**——同时持续进行更多的犯罪行为来维持生计。

</div>

---
layout: default
---

# 第八个电话：如何赢下一辆保时捷

<div class="mt-4 text-sm leading-relaxed">

1998 年，Kevin 在洛杉矶潜逃期间，需要现金。他看到加州的广播电台 KIIS FM 正在举办大型抽奖——赢保时捷、夏威夷旅行、两万美元现金。他不是去碰运气，而是**搭建了一个专业运作**。

</div>

<div class="mt-3 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 text-sm leading-relaxed">

"So we got some really cheap office space, we put in a bank of phones, Radio Shack phones chosen for their liberal return policy. We would let 50, 60 calls go through, we would press a button, the calls would stop and at that moment we start hitting our bank of eight phones and just hitting the switch hook over and over again to keep the phones ringing."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin，描述他如何操控电台比赛系统</div>

<div class="mt-3 text-sm leading-relaxed">

整个操作就像一个有组织犯罪：在最廉价的办公空间里架设一排电话，等前 50-60 通电话打完后精确切入，用 8 部电话同时刷线，确保自己是第 100 个打进的人。最终他以化名 Michael B. Peters 赢下了一辆保时捷。

</div>

---
layout: default
---

# "我看不到自己的未来"

<div class="mt-4 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 text-sm leading-relaxed">

"I couldn't see a future for myself, right? Because I was hiding out from the feds. And when I started living under an alias, it was an investigation. Then that investigation became an indictment, potentially carried serious prison time. And all I was doing to handle it was not handle it. I was just hiding out and doing more crimes."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**双重生活的代价**  
在洛杉矶潜逃期间，Kevin 不能使用自己的真名，不能看望同在 LA 的家人，不能规划任何未来。他把自己形容为"just hiding out"——用更多的犯罪行为来逃避面对现实。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**片段的乐趣，整体的压抑**  
"all in all it was deeply unsettling and unpleasant experience punctuated by occasional highs like the radio station contests." 电台比赛是偶尔的刺激，但生活的大背景是令人窒息的。

</div>

</div>

<div class="mt-3 text-xs opacity-50 text-sm leading-relaxed">

Patrick Gray 幽默地总结："Crime's awesome. Crime's heaps, heaps of fun." ——这是对 Kevin 那段生活的黑色幽默注脚。

</div>

---
layout: default
---

# "谁来喂我的猫？"

<div class="mt-4 text-sm leading-relaxed">

1991 年 4 月，Kevin 在加州当地一家杂货店被捕。当 Amberly Jacob 问他记不记得那一刻心里在想什么时，他的第一个念头令人心碎：

</div>

<div class="mt-3 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 text-sm leading-relaxed">

"What I remember is how jarring it was just as an interruption to my day. When you leave your house to go grocery shopping or run some errand, you never think this is the last time I'm going to be here. That was really my first thought was, I'm not going home. Who's gonna feed my cat?"

</div>

<div class="mt-3 text-xs opacity-60">— Kevin，被捕瞬间的第一反应</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**结束也是解脱**  
"It was nice in a way to be able to just be myself again. To use my name and to not be pretending anything anymore. That was a relief." 潜逃的终结反而是重获身份的开始。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**五年的审前羁押**  
Kevin 在审判前被羁押了五年。他的后续谈判和认罪协议，大部分都与这段时间有关。

</div>

</div>

---
layout: default
---

# 间谍法下的认罪谈判

<div class="mt-4 text-sm leading-relaxed">

在第二次起诉中，检察官不仅以 Kevin 实际犯下的罪行起诉他——**他们依据《间谍法》（Espionage Act）对他进行指控**，不是指控他从事间谍活动，而是指控他"非法保留机密材料"。

</div>

<div class="mt-3 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 text-sm leading-relaxed">

"This espionage charge, I refused to plead to that even when they offered me time served. Because it was wrong. It was something that I didn't do and wouldn't have done."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**私人侦探扭转局面**  
一个 PI 找到了关键证人的坦诚访谈，FBI 意识到间谍案已经成为他们打不赢的案子。"as we neared our trial date, they knew that this case had become a loser for them."

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**间谍指控被撤销**  
FBI 最终同意撤销间谍指控，Kevin 只对他真正犯下的罪行认罪。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**五年审前羁押吸收刑期**  
他同意了一个"upward departure"（超标准刑期），只为了把他已经服完的五年审前羁押时间纳入考虑。如果不这样做，出狱后他还会有一项重罪记录悬而未决——"they'd have owed me a felony when I got out."

</div>

</div>

---
layout: default
---

# 监狱里值得反思的事

<div class="mt-4 text-sm leading-relaxed">

Kevin 在反思狱中经历时，描述了一种让人敬佩的、几近超然的态度。他不仅没有为自己感到不公，反而看看身边的狱友，觉得自己可能比他们更"该在里面"。

</div>

<div class="mt-3 p-4 italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-20 text-sm leading-relaxed">

"All the drug cases were just crazy. Like these people were being handed decades like it was candy. So that part of it was sobering. But all in all it was an experience that I think I got a lot of value out of. And I learned to stop feeling sorry for myself very quickly. Because even as much crime as I wound up doing, it was nothing compared to what most of these guys were facing."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-3 text-sm leading-relaxed">

Amberly Jacob 对此评论道：Kevin 用一种非常务实的视角看待这一切——**"this thing happened and it was interesting and I got to observe it"**。

</div>

---
layout: two-cols
---

# 黑客 = 记者？同一件事的两面

<div class="mt-2 text-sm leading-relaxed">

Kevin 出狱后走上了一条令人意外的职业道路：他成为了一名严肃的商业记者，先后为 SecurityFocus、Wired 和《华尔街日报》工作。当 Amberly Jacob 问他这种转变时，Kevin 的解释出奇地直白——两者从根本上被同一种驱动力推动：

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hacking-vs-journalism.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 好奇心驱动——无论是黑进系统还是写出深度报道

<div class="mt-4 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 text-sm leading-relaxed">

"Journalism, it kind of scratches a lot of the same itches as hacking. Like a lot of what I was doing as a criminal was looking into stuff that interested me. Like that was 90% of it. Mostly the radio station contests, like that gets all the attention and yeah I got a Porsche and woohoo. But almost everything I did was completely pointless and served no purpose except it satisfied some curiosity and gave me a little rush of adrenaline at the same time."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-3 text-sm leading-relaxed">

Patrick Gray 对此很有共鸣——他自己曾是 Kevin 的下属，在 SecurityFocus 共事多年。这个观点的核心是：**调查记者和黑客之间的相似度，远高于任何教科书会承认的**。

</div>

---
layout: default
---

# 被报道过的人才能成为真正公正的记者

<div class="mt-4 text-sm leading-relaxed">

Kevin 认为，曾经成为大量新闻报道对象的经历，给了他一套独一无二的记者伦理：

</div>

<div class="mt-3 p-4 italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 text-sm leading-relaxed">

"Being a subject of a lot of reporting when I was a hacker made me sensitive to what doesn't work and what I should avoid. What mistakes not to make. Like how to be scrupulously honest but get the information right and portray people in a way that's true to them as well as being factually accurate."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-4 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 text-sm leading-relaxed">

"I'm not judgmental under any circumstances. Like I can talk to a hacker or a criminal of any kind and they don't get any sense that I think I'm better than them. Like they get no judgment from me whatsoever because I've talked to very, very few hackers that have done anything worse than what I used to do."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

---
layout: two-cols
---

# 电话网：黑客的终极游乐场

<div class="mt-2 text-sm leading-relaxed">

当 Amberly Jacob 问 Kevin，如果今天他是 16 岁的少年，黑客行为是否还会有同样的吸引力时，他的回答揭示了他那一代黑客的"塞壬之歌"究竟是什么：

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./phone-network-heterogeneity.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 一百年历史的电话网——互联网无法复制的魅力

<div class="mt-4 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 text-sm leading-relaxed">

"There was so much about it that was unique to it. It's not the internet. It's not homogenous. It's not built off Cisco routers. Like there were parts of the phone network that were a hundred years old and still operating."

</div>

<div class="mt-1 text-xs opacity-60">— Kevin</div>

<div class="mt-4 text-sm leading-relaxed">

同一个设施里，走廊这头是 1920 年代的步进式交换机，那头是相对现代的计算机在执行相同的功能。这种**跨越几十年的技术堆叠**——没有统一的架构、没有标准化的栈——正是 Kevin 所说的"draw"。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

Kevin 坦言，他不确定如果今天自己 16 岁，是否还会被类似的东西吸引。"I don't actually know if I'd have wound up in that kind of trouble or drawn into something like that again." ——互联网比电话网更同质化，而这种同质性也许削弱了它作为探险场所的魅力。

</div>

---
layout: default
---

# Aleph One：Smashing the Stack 与知识传承

<div class="mt-4 text-sm leading-relaxed">

本集还提到了一位在 90 年代安全史上举足轻重的人物——Elias Levy，化名 Aleph One。

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**"Smashing the Stack for Fun and Profit"**  
30 年前（1996 年 11 月），这篇发表在 Phrack 杂志上的缓冲区溢出教程，被广泛认为是有史以来最重要的安全论文之一。它将一个技术性的漏洞以"有趣且有利可图"的方式呈现给整个社区。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**湾区 BBS 场景的门徒**  
从 Radio Shack 偶然遇到两个"shifter-looking guys"开始，Levy 被引入了 Lunatic Labs BBS——一个"old school pretty famous BBS"——从此打开了整个 hacker 世界的大门。

</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 bg-opacity-50 border-l-4 border-green-500 text-sm leading-relaxed">

**知识传播的链式效应**：Levy 分享了自己的入门故事，后来他又通过 Phrack 将知识传播给下一代。这种"分享→学习→再分享"的循环，正是 90 年代 hacker 文化的核心动力。

</div>

---
layout: default
---

# L0pht：黑客智库走上国会山

<div class="mt-4 text-sm leading-relaxed">

1998 年，Chris Wysopal 和 L0pht 的其他成员做了件史无前例的事：**在国会作证，公开指出美国政府 IT 系统的安全弱点**。这是黑客从边缘进入主流公共政策对话的一个分水岭时刻。

</div>

<div class="mt-3 text-sm leading-relaxed">

Patrick Gray 在节目中提到了这次听证会——"very famous hearing with very famous photographs"——L0pht 七人坐在国会听证席上，穿着 T 恤和牛仔裤，对着西装革履的议员解释为什么政府系统是脆弱的。

</div>

<div class="mt-3 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**文化碰撞**  
这是 hacker 文化与建制派之间最直接的一次正面接触。L0pht 没有把自己包装成"网络安全顾问"，他们是以 hacker 的身份出现在镜头前的。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**实战驱动的证词**  
他们不是在谈理论——L0pht 成员花了多年时间通过 dumpster diving、逆向工程和共享手册来理解这些系统。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**bug 披露文化的萌芽**  
Patrick Gray 提到 90 年代末出现了一次"vendors 和 hacking communities 之间的裂痕"——围绕 bug disclosure 和 full disclosure 的争论、grey hat 黑客的兴起，都是从这个时期开始发酵的。

</div>

</div>

---
layout: default
---

# 核心金句

<div class="text-xs opacity-50 mb-3">这期纪录片里最值得记住的几句——全部可以在 transcript 中 grep 到：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"In that room, those people had the skills to just basically be the lords of the internet. And if you were around them, you could sort of figure out how the whole world worked."
<div class="text-xs opacity-60 mt-1 not-italic">— Jeff Moss，回忆 HOPE-Con 的一个房间</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"Weirdos were welcome here."
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Wysopal，描述早期 hacker con 的包容性</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"What I came to learn about myself is that I was kind of an adrenaline junkie and a nerd. And if you combine those two things you wind up being a hacker."
<div class="text-xs opacity-60 mt-1 not-italic">— Kevin，解释黑客行为的心理驱动力</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"Who's gonna feed my cat?"
<div class="text-xs opacity-60 mt-1 not-italic">— Kevin，被捕瞬间的第一个念头</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"Journalism, it kind of scratches a lot of the same itches as hacking. Almost everything I did was completely pointless and served no purpose except it satisfied some curiosity."
<div class="text-xs opacity-60 mt-1 not-italic">— Kevin，解释为什么黑客和记者是同一类人</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"There were parts of the phone network that were a hundred years old and still operating."
<div class="text-xs opacity-60 mt-1 not-italic">— Kevin，解释电话系统作为黑客游乐场的独特吸引力</div>
</div>

</div>

---
layout: end
---

# 谢谢收看

<div class="mt-4 text-sm opacity-70">

How the World Got Owned — Episode 2

Part one of the 1990s installment

</div>

<div class="mt-2 text-xs opacity-50">

Interviews by Amberly Jacob · Produced by Amberly Jacob & Patrick Gray

Music by Noel Sanger & Patrick Gray · Sponsored by SentinelOne

Part two coming soon on Risky Business Stories

</div>
