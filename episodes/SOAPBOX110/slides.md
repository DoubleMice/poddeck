---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Soap Box: Zero Trust(ish) Networks'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Zero Trust(ish) 网络

零信任正统教条失灵之后，务实派怎么做暴露面管理

<div class="text-sm opacity-60 mt-4">
Risky Business · Soap Box · 2026 年 8 月 · 29 分钟
</div>

<div class="text-xs opacity-50 mt-6">
嘉宾：Adam Pointon（Knock Knock CEO）· 主持：Patrick Gray（Knock Knock 董事会成员）
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**AI 把漏洞利用推进"当天时代"**
从 CVE 公布到野外出现利用，今天已是同一天；2027 年预计进入分钟级

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Zero Trust(ish)：务实版零信任**
与其全网重构，不如在扁平内网上挑出最危险的 150 个资产，逐个封口

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**打补丁已经赢不了**
Citrix、Fortinet 这类边缘设备暴露在裸互联网上，补丁速度追不上攻击速度

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**零信任平台的反噬**
大型 ZTNA 项目落地后"箱子反而没法管了"，理想设计撞上真实网络

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**双轨安全战略**
资源全部押给主营业务应用；其余资产隐藏、缓解，然后"送进牧场"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**好产品自会扩散**
客户买 20 个许可证、一天部署完，回头就要求报价 4,000 个

</div>

</div>

---

# Knock Knock 是什么

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

**一句话：把 SSO 登录和网络控制粘在一起。**

- 默认状态：目标服务的端口全部挡掉，从公网完全不可见
- 用户照常用 Okta 等 SSO 登录，在门户点一下"请开放这个端口"
- 后台把该 IP 写进现有防火墙（Palo Alto / Fortinet / Cisco）的放行名单，端口临时开放
- 效果：未认证攻击者可触及的攻击面大幅缩小，远程代码执行风险骤降

<div class="mt-3 text-xs opacity-60">
延伸场景：GrayNoise 集成（登录网关可疑就不放行）＋ 内网 Windows agent 管 Windows 防火墙
</div>

</div>

<div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./kk-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 裸奔互联网从来都是坏主意

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**演化路径**：早期防火墙时代，机器裸奔在公网上、端口全开；后来进化到有状态防火墙，只放行必要端口。但 Adam 指出——**把任何主机或服务放在裸互联网上，始终是个坏主意**。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**过去**：漏洞被发现、被利用都需要时间，暴露面问题可以慢慢拖。
**现在**：AI 把这段窗口压没了——攻击面收窄从"最佳实践"变成了采购优先级。
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-40">

"and now with AI, it's a proper mess, and there's no time to respond."

<div class="text-xs opacity-60 mt-1 not-italic">— Adam 谈 AI 如何改变了暴露面的时间尺度：局面一团糟，而且来不及响应</div>

</div>

---

# 零日时钟：窗口正在归零

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

- **Zero-day Clock** 追踪一个时间差：CVE 进入数据库，到野外真正出现利用
- 这个时间差已经连续下降 20 年，如今小到"滑稽"（Patrick 原话），Adam 的形容是"吓人地小"
- **今天：同一天**——补丁出来的当天就有利用在野外跑
- **2027 年预测：分钟级**——Adam 直说"out of control"
- 机制：AI 逆向补丁、对照 CVE 生成利用，然后自动在野外扩散

</div>

<div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./zero-day-clock.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# RSA 现场实录：Citrix 漏洞四天烧遍全场

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-1">周一 9:31</div>
<div class="text-xs opacity-70">Adam 在 RSA 现场看到漏洞公告</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600 my-1">周四</div>
<div class="text-xs opacity-70">同一周内，野外利用已被报告</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600 my-1">几天</div>
<div class="text-xs opacity-70">留给企业打补丁的全部窗口</div>
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"it was 9:31 AM on the Monday ... and then by Thursday, the same week, it was reported that there was exploitation in the wild."

<div class="text-xs opacity-60 mt-1 not-italic">— Adam 回忆今年 RSA 期间的 Citrix 事件：几天时间要完成修复，非常难熬</div>

</div>

<div class="mt-3 text-xs opacity-60">
讽刺的是：Citrix 恰恰是 Knock Knock 的重要销售驱动——这类远程访问软件本身就需要被保护。
</div>

---

# 安全厂商的设备也在裸奔

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**被攻破的恰恰是安全产品**：Fortinet、Palo Alto 的远程访问设备出自安全厂商，却正在"把客户送进火坑"。Patrick 的原话带着反讽：<span class="italic">"they're from security companies apparently, and they're getting people owned"</span>。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Knock Knock 的反直觉用法**：去编排 Palo Alto / Fortinet 设备自身的防火墙，让设备把自己从公网上藏起来——给防火墙再装一道防火墙。
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-40">

"yo dog, I heard you like firewalls, so I put a firewall on your firewall."

<div class="text-xs opacity-60 mt-1 not-italic">— Patrick 总结这个用法时的玩笑</div>

</div>

<div class="mt-3 text-xs opacity-60">
Adam 的比喻：复杂的软件坐在裸互联网上，"围墙花园"里是软乎乎的内部，外面却是复杂的攻击面——多一层流程化的防护，就能把攻击面藏起来，换来响应时间。
</div>

---

# 打补丁赢不了

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mt-4">
**前提**：边缘上跑着 Citrix、Fortinet 这类设备时，"you are not going to be able to outrun attackers with patching"——靠补丁速度超过攻击者，做不到。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">
**选项 A：换掉**
弃用旧的远程访问方案，迁移到更当代的产品。问题："如果容易，大家早就全换了"。
</div>

<div class="p-3 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">
**选项 B：缓解**
上 Knock Knock 这类缓解措施，把这些设备的寿命再延长一段——补丁跟不上，但攻击面可以被藏起来。
</div>

</div>

<div class="mt-3 p-4 text-lg font-bold text-center italic border-l-4 border-red-500 bg-red-50 bg-opacity-40">

"Patching ain't going to do it."

<div class="text-xs opacity-60 mt-1 font-normal not-italic">— Patrick 的结论：补丁路线到此为止</div>

</div>

<div class="mt-3 text-xs opacity-60">
剩下的暴露面还有一堆：设备管理界面、文件传输设备、工资系统、IoT、RDP——同样补不过来，要么消失，要么上缓解措施。
</div>

---

# 双轨战略：令牌与"牧场"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

- **主应用**（如航空公司的在线订票系统）：无法下线，业务就靠它——所有资源投进去加固、改进
- **其余一切**：边缘杂物、遗留系统、管理界面——隐藏、缓解，慢慢"送进牧场"
- Patrick 的原话比较狠：把非核心资产"送进牧场，一枪解决"
- Adam 的温和版：把令牌全部押给主应用，其余系统"护理着走到寿终正寝"

</div>

<div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./paddock.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 把令牌押在主应用上

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Adam 认同双轨判断，只是少了点暴力**：把全部令牌押给那个暴露在外、结构复杂、却是命根子的主应用——其他的全部藏起来，裹进一层层防御里。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**现实约束**：大家都心知肚明，遗留系统还会继续存在 20、30 年——"which is pretty scary to think"。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**护理策略**：承认漏洞就在那儿，然后"nurse the vulnerability and nurse those systems through to the end of life"——护理着这些系统和它们的漏洞，直到寿终正寝。
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"put all of your tokens into like your primary application that's exposed to everything and is complicated and is like your main thing"

<div class="text-xs opacity-60 mt-1 not-italic">— Adam 对安全预算分配的核心主张</div>

</div>

---

# 零信任正统简史

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Jericho Forum · 去边界化**
零信任思潮的起点：网络边界消失后，安全模型不能再靠围墙。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Operation Aurora → Google BeyondCorp**
谷歌在 Aurora 攻击后落地 BeyondCorp，把零信任变成可运行的实践。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**市场的回应**
一个接一个"包打天下"的零信任平台被推向市场，每个都号称全面覆盖。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**现实的结果**
全包式的零信任没能"all encompassing"——它做不成，因为那不是现实。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**Patrick 的落点**：市场不断交付"全面零信任解决方案"，而实际上零信任更应该是一种**指导哲学**——在能做到的地方做，而不是处处都做，因为处处做根本不可能。
</div>

---

# 零信任是原则，不是架构

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Adam 的定义**：零信任是一种思维方式——系统应该能够自防御，句号，无论上下文。怎么做到自防御，取决于系统本身是什么。它是一种纪律，不是一款产品。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**行业的遗憾**：到目前为止，没有哪款软件真正做对了这件事——"there's no software that's kind of got it right, I feel, and it's always too complicated"。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**Patrick 的补充**：平台不是不好，而是"你得按它的方式做一切"。现实需求往往很窄——只想给数据中心里那批跑 RDP 的 Windows 机器上软件、把 RDP 管起来，不想搞全网改造；只想管那批机器，凭什么整套网络都要上？
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"systems should be self-defending, full stop, regardless. And then how you do that depends on what the system is."

<div class="text-xs opacity-60 mt-1 not-italic">— Adam：零信任作为思维方式的本质</div>

</div>

---

# 简单，是 Jericho 留下的遗产

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Jericho 时代零信任的指导原则之一是 keep it simple**：你应该能看见正在发生什么、能理解它，系统应当简单而有韧性。在虚拟网络层之间加"胶水"并不简单。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**依赖的服务一多，系统就变得不透明**——Patrick 接话："it gets a bit opaque"。越复杂，越难看清安全态势。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**更深一层的风险**：全包式平台本身变成了新的信任对象——"that then becomes the risk"。把一切资产都连进云端分析平台，等于信任那一整套栈、那个厂商和那次部署。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**威胁模型视角**：系统仍然要自防御。Knock Knock 的思路是让系统自己把攻击面收起来，而不是引入一个包揽一切、本身也需要被信任的中间层。
</div>

---

# ZTNA 项目的副作用

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**背景**：AI 驱动的横向移动速度很快，企业急着把资产从公网撤下、锁紧内网——这对 ZTNA 厂商和 Knock Knock 都是利好。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**副作用**：大型 ZTNA 项目做完之后，客户发现——"now we can't admin these boxes over here because we've ZTNA'd everything and it's not compatible with the way that we were admining them"。锁得太死，运维方式反而断了。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**反转结局**：Knock Knock 进去补上这个缺口；更有意思的是，那家 ZTNA 厂商反过来邀请 Knock Knock 一起做其他单子。
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
**印证**：很多"zero trusty"公司带着意识形态纯度做事，但现实总会剩下一块不经过 ZTNA 的访问需求——"we're still going to need access over here that isn't through this ZTNA product"。
</div>

---

# 理想设计撞上真实网络

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**落地即例外**：理想设计应用到真实网络，就变成一排例外和变通——"these are all the exclusions, here's all the workarounds"。锁得太死，反而用不了，又得开回来。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**灰地现实**：在既有环境里重想设计太难（Patrick 造了个词"greyfields"）——必须迁就网络、业务和人实际上怎么运作。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**结论**："nobody has solved the kind of zero trust everywhere, everything just magically works in one technology"——没有任何单一技术能做到"处处零信任、一切魔法般可用"。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**除非你是 Google**——Patrick 调侃：就算 Google，拿 Nmap 扫它内网合适的角落，估计照样能发现点"gnarly stuff"。终极测试（半开玩笑）：Google 放一群 AI 进内网乱跑，然后宣布"它哪儿也没去成"。
</div>

---

# Zero Trust(ish)：只封最危险的一批

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

- 典型企业内网：进去之后基本是平的——"once you get inside, they're pretty flat"
- 两条路：全网重构 + 微分段（大工程）vs 挑出最危险的资产逐个封口
- 客户的真实做法：**"we've got this flat horror show network, we've identified the 150 riskiest assets on it"**——在那些资产上装 agent，把它们和网络其余部分隔开
- 心态转变：把 LAN 当互联网——一个敌对的地方
- 定义：**"zero trust certain things instead of trying to zero trust all the things"**

</div>

<div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./ztish-network.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 风险优先级：哪些被端掉是灭顶之灾

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**正统零信任的代价**
把每个联网资产都当作接在互联网上——"fair enough, but that's hard work"。公平合理，但是苦差事。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**务实版分类**
有些资产被攻破也无所谓——靠检测和限制爆炸半径兜底；有些资产"if they get popped, it's the end of the world"——资源集中给它们。
</div>

</div>

<div class="mt-3 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"if we assume breach, these things we actually care about if they're breached. These things over here are, you know, lower priority."

<div class="text-xs opacity-60 mt-1 not-italic">— Adam：以 assume breach 为前提做优先级——先把真正在乎的问题关掉，而不是干等</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
**结论**：对"被端掉也不致命"（not existential）的资产，优先级放低；零信任资源集中在"被端掉就是世界末日"的那批资产上。
</div>

---

# 把 LAN 当互联网：内网版 captive portal

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**正式版 Windows agent**（Go 编写，Patrick 特意夸"very modern"）：把 Windows 防火墙和 SSE 事件绑在一起。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**工作方式**：用户访问 LAN 上某台机器的 RDP 端口，得到的是 "connection closed, connection refused"；然后上门户点一下"请开放这个端口"，那台机器上的 agent 就把端口对请求者的 IP 开放一段设定时间——比如 20 分钟，或由用户指定。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**体验**：内网的 captive portal + SSO——"I used to be able to just see everything and attack everything, and now I just go to this simple website"。
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**架构红利**：Knock Knock "we don't sit in line"——不串联在流量路径上，威胁模型更干净、没有中间层可被信任。
</div>

---

# "我们只要那个 Windows agent"

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**首批客户画像**：围绕编排 Palo Alto、Fortinet、Checkpoint 这类老牌防火墙的需求。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**agent 发布后的新客户**：重度 Windows Server 内部环境的客户，别的都不要——"yoink, yes please, we need them yesterday. Can you help us install them?"。这些机器从网络里消失，通过门户按需放行。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**适用边界**：agent 用 Go 编写、很现代，所以"good luck running that on your Windows 2000 server"——太老的系统它跑不了，这类场景要靠编排设备前面的防火墙。
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
**扩散模式**：先解决一处 → 组织内其他团队听说 → 带着新场景找上门——CISO 办公室买了，网络团队跟着来，别的团队再来问"我们这边的问题能不能也解"。
</div>

---

# 客户横跨所有行业：同一个问题

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**增长节奏**："slowly, slowly, then quickly, quickly"——刚刚完成正式的 seed round（此前只有 pre-seed）。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**支撑融资的多样性**：全球制药公司在边缘大防火墙上用；银行、对冲基金、中小企业也在用——"every customer seems to be from a different vertical and they all have different use cases"。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**大学是绝配**：开放与知识是目标，但开放带来复杂——"gigantic flat networks full of hostile students"，巨型扁平网络里全是"敌对"的学生。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**共性**："I want to remove attack surface, whether it's critical infrastructure, university, whatever. It's the same thing."——大家的问题其实是同一个。
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"all using zero trust principles in non-zero trust networks, in networks you would not describe as zero trust networks."

<div class="text-xs opacity-60 mt-1 not-italic">— Patrick：所有客户都在"不零信任的网络"里用零信任原则</div>

</div>

---

# 瑞士军刀：五花八门的暴露面

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**25 年前的 VNC 设备**：某台 ICS 老设备必须留着 VNC（25 年前买的怪东西）——Knock Knock 通过它前面的防火墙把整台设备藏起来，agent 装不上也没关系。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**合规要 MFA**：内网某台机器要满足合规的 MFA 要求，Knock Knock 是一种把 MFA 加上的方式。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**OT / ICS jump box**：限制谁能在什么时候访问跳板机。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**Windows RDP 环境**：agent 直接管理 Windows 防火墙，端口按需收放。
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
**资产"all the colors of the rainbow"**，但做的都是同一件事：减少暴露、减少对风险资产的网络访问。客户理解机制后就开始四处套用——"I can put it there, I can put it there"。
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
**价值**：风险登记册上那些只能盖章"风险已接受"的项目，第一次有了别的选项——"an alternative to the risk accepted stamp"。
</div>

---

# Land & Expand 不需要策略

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

- 客户先买 **20 个许可证**——因为那 20 个资产是"mega risky, like absolutely horror show bits of equipment"，最恐怖的暴露面
- 部署只用**一天**
- 然后客户回来要求报 **4,000 个许可证**的价
- Patrick 的结论：**"you don't need a strategy for land and expand. What you need is a good product."**

</div>

<div>

<div class="flex justify-center items-center h-full pl-2">
<Excalidraw
  drawFilePath="./land-expand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

</div>

---

# 好产品自己会说话

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**内部扩散路径**：CISO 办公室先买 → 网络团队听说后找过来 → 其他团队再来问"我们这边的问题能不能也解"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Adam 的观察**："when you have a good product, a good experience, it actually works, it actually does the thing"——产品真的有用、体验真的好，增长自然来。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**一丝无奈**：产品真的能解决问题，反而成了增长的理由，这本身有点悲哀——"it's sad that that's the reason why people get a lot of growth"。
</div>

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-40">

"huh, nobody's done that yet?"

<div class="text-xs opacity-60 mt-1 not-italic">— 早期交流时，对方听完产品解释后的第一反应；Patrick 说，这就是"这是个好主意"的信号——因为它根本、简单</div>

</div>

---

# 给 CISO 的结论：务实，不搞教条

<div class="flex flex-col items-center justify-center h-full">

<div class="text-2xl font-medium leading-relaxed max-w-2xl text-center">

"You cannot be ideological about it. You know, you have to be pragmatic. You just have to do it where you can with the tools that make sense."

</div>

<div class="text-sm opacity-70 mt-6">
零信任不能搞教条，必须务实：在能做到的地方做，用说得通的工具做。
</div>

<div class="text-xs opacity-50 mt-4">
— Patrick 总结这期对谈的落点；他说这可能是多数 CISO 早就明白的道理
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"And now with AI, it's a proper mess, and there's no time to respond."
<div class="text-xs opacity-60 mt-1 not-italic">— Adam：AI 让暴露面的响应窗口归零</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"It's same day is pretty scary, and minutes next year is out of control."
<div class="text-xs opacity-60 mt-1 not-italic">— Adam：零日时钟的今天与明年</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Yo dog, I heard you like firewalls, so I put a firewall on your firewall."
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick：给安全厂商的防火墙再套一层</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"Patching ain't going to do it."
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick：补丁路线对边缘设备已经失效</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Systems should be self-defending, full stop, regardless."
<div class="text-xs opacity-60 mt-1 not-italic">— Adam：零信任作为思维方式的本质</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"You cannot be ideological about it. You know, you have to be pragmatic."
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick：给 CISO 的忠告</div>
</div>

</div>

---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-6xl font-light opacity-30 mb-8">Fin</div>

<div class="text-lg italic opacity-60 max-w-xl text-center leading-relaxed">
"it's a good idea 'cause it's fundamental, it's very simple"
</div>

<div class="text-xs opacity-40 mt-4">
— Patrick 谈 Knock Knock 为什么能成 · Risky Business Soap Box 110 · 2026 年 8 月
</div>

</div>
