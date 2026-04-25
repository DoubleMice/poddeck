---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '132. 对星海图创始人高继扬的3小时访谈：鲶鱼、曾国藩、Waymo与Momenta的两面、一只狼与许华哲的离开'
info: |
  张小珺对星海图创始人高继扬的 3 小时访谈：
  92 年生人、清华电子系、Waymo 两年、Momenta 两年、放弃 1000 万美金期权、
  从儒家清流到事功的曾国藩式自我重塑、轮式双臂的"智能定义本体"、
  数据 250 元/小时的成本账、VLM+VLA 双系统、传播周期决定壁垒、
  以及为什么机器人行业不允许技术浪漫主义。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 高继扬

<div class="text-xl opacity-80 mt-2">星海图创始人 · 张小珺访谈 #132</div>

<div class="text-base opacity-60 mt-6">
鲶鱼、曾国藩、Waymo 与 Momenta 的两面、一只狼与许华哲的离开
</div>

<div class="mt-10 text-sm opacity-60">
~3h · 2026-04 · 具身智能 / 物理世界 AI / 端到端 / VLA
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 极致的浪漫反面

小珺自己的话："为什么中国具身智能产业里没有出现一个像梁文锋、杨植麟这样浓重技术浪漫主义色彩的人?"——直到她见到这个反面教材。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Waymo 与 Momenta 的两面

工程师天堂 vs 极致结果导向；Robotics-driven vs AI-Native；没有 Founder vs 强势创始人。两段两年的经历。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 曾国藩式自我重塑

申博不顺看历史书，看到曾国藩从"儒家清流"到"事功"的转向，他把这套逻辑套在自己身上。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 一笔具体的数据成本账

获取一小时真实数据 = 200~250 元；10 万小时 = 2,500 万；约等于一个人 0~18 岁与物理世界交互的总时长。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 一只狼，不是一个理想主义者

"机器人行业不允许技术浪漫主义存在"——估值两年 30 倍涨到 100 亿，许华哲离开。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一句开场白

"做机器人行业就是一个链条极长的行业，有时候你就是要把你的头伸到土里去。"

</div>

</div>

---

# 人物速写

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**1992 年 12 月** · 河北石家庄 · 射手座

二十多岁就有白头发。访谈时小珺一直默认他是 80 后。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-3">

**清华电子系** · 物理竞赛保送

一进清华就遇到杨植麟（同届）和韩衍隽这种"高不可攀的大神"——"清华里边真的大神太多了"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**ENTJ** · 自我评价"靠勤奋"

"我见过真正有天赋的人，跟真正有天赋的人比，我觉得我主要是靠勤奋、靠努力。"

</div>

</div>

<div>

### 一条非常工程师的轨迹

```
2014 年底  商汤实习 (汤晓鸥老师)
            训了第一个神经网络
─────────────────────────────────────
2015-2018  USC PhD · 三年半毕业
            归纳总结 + 多发 paper 提升命中率
─────────────────────────────────────
2019-2020  Waymo (1k → 2k 人膨胀期)
            做 prediction · VectorNet
─────────────────────────────────────
2021-2023  Momenta (鲶鱼)
            感知 → 定位 → 泊车 → 规控 → NOA
─────────────────────────────────────
2023.05    离职 · 放弃 ~1000 万美金期权
2023.07    西藏自驾
2023.08    开始整 BP, 开始融资
```

</div>

</div>

---

# 起点：申博失利与曾国藩

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

大三暑假在斯坦福 UGVR 实习。回来后申请博士——**指导老师没给写强推**——他想去的学校全没录。

只有几个他没让那位老师写推荐信的（USC、UCSD）给了 offer。"当时那段时间也是一个算是小打击吧、低谷期。"

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**他的反应**：去看历史书。"反正就是说从很小的时候就是这样，就是有一些比如说不顺利，对吧，我就反思。"

</div>

</div>

<div>

### 看到曾国藩

那本书讲曾国藩 20 多岁是一个"**儒家清流**"，到 40 岁怎么变成一个"**特别有事功的人**"。

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"他发现最重要的还是当你要做一件事的时候，你到底能有、能拉动多少资源、有多少人、多少资源愿意跟你一块去做这件事，并且最后把这事做成。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

**作者概括**：他把这套逻辑套到自己身上——既然学界做不了"清流"了，那就走"事功"那条路，去现实世界做事拿结果。

</div>

</div>

</div>

---

# 商汤半年：骑自行车上的顿悟

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

2014 年底，大四的他去商汤做了 4-5 个月实习生。

跟着李诚、鲁叔做 **Pose Estimation**。"我啥也不会，那时候啊，就是从来没训过神经网络。"

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"我有一天从那个实习那地方出来……然后骑着自行车，突然就是想到这个，我说感觉这以后这个神经网络可以代替人在数据当中发现规律，这个事太牛了，我以后得做这个。"

</div>

</div>

<div>

### 他第一次理解的 AI

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-2 text-sm">

**编程是人提炼规律**——写 if/else 把规则编成代码。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-sm">

**神经网络自己提炼规律**——把规则变成网络里的参数，全自动。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2 text-sm">

"我当时觉得人未来应该不太会用，就很少会用编程了。"——2015 年初的预言。

</div>

</div>

</div>

---

# 三年半博士的方法论：归纳总结

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

USC 读博，他给自己定四年目标。倒推：四年发 4-5 篇顶会 → 第一年就要投。

他对发顶会做了"归纳总结"，把所有 paper 分成三类：

<div class="space-y-2 mt-3">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**① 挖坑型**：以前没人研究，做数据集、提问题、建 benchmark——最厉害的人都是挖坑的。

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**② 提性能型**：在已有问题上做得比前人好。

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**③ 降成本型**：性能接近，但用更少的数据/监督。

</div>

</div>

</div>

<div>

### 命中率优化

> "别人一届发一次、投一篇，那我投两篇，然后就是提高概率。"

跟同实验室的同学合作共同一作——把自己想法的带宽通过别人的时间放大。

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**结果**：三年半毕业，70 多岁的印度老板批准了。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

"归纳总结"——他自己反复说这是"过去考试也好、就是应付这些东西"的方法论。物理竞赛、博士、后来做工程，全是这套。

</div>

</div>

</div>

---

# 用一个标准筛掉商汤、广告、云

<div class="mt-3">

博士毕业找工作时，他用一个尖锐的标准筛行业：

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic text-base">

"我觉得这个行业一定是……AI 这个技术作为这个行业最底层的变量。就是说没 AI 这行业没有，有 AI 在这个行业才成立。"

</div>

</div>

<div class="grid grid-cols-4 gap-3 mt-5 text-xs">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 商汤 ✗
泛 AI+ 模式，**会不会干成外包**？很难形成自己的产品，每次交付成本都高。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 广告 ✗
AI 出现之前已有机器学习，机器学习之前还有别的方法解决搜索/广告——**AI 不是绝对变量**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 云 ✗
"把一些模型包装成 API 去做，我觉得这个也不是很本质。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 自动驾驶 ✓
**物理世界 AI 的第一形态**——AI + Robot。

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**作者概括**：传统 Robotics 是 SLAM + 控制优化，从底层就把机器人当机器，不是当人；要让它像人一样工作，必须用 AI 的方法。

</div>

---

# Waymo：工程师天堂

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

2019 年 1 月加入。"我当时去的时候有 1000 人，我走的时候快 2000 了吧。"——一段迅速膨胀期。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"Waymo 真的是工程师的天堂……你可以有最好的 Infra，然后你可以有最好的同事，然后呢，你的领导对你的 Support、对你的支持都是非常温暖的、非常宽厚的。"

</div>

</div>

<div>

### 他在 Waymo 做了什么

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**VectorNet**：把地图变成向量，而不是渲染成图片。用最基础的 Self-Attention 去做预测。

</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

第一次合作的搭档：**赵行**（清华助理教授、星海图联合创始人）。"很 Nice，超稳定，情绪超稳定。"

</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

最喜欢的事：读 Waymo 的 Codebase，从过去看到现在，"这里边是有逻辑和 Know-how 的。"

</div>

</div>

</div>

---

# 但 Waymo 的问题：没有 Founder

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

他在 Waymo 看到两个问题：

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-2 text-sm">

**第一个：大公司病**。"Waymo 里边就是说它太有大公司病了。"职级体系、工程体系全跟 Google 对齐，**还没做出价值就先大公司化**。

</div>

<div class="p-3 mt-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**第二个（更本质）**：

> "本质是我觉得 Waymo 是没有 Founder 的。它的 Founder 其实是 Google 的 Founder，但是 Google 的 Founder 又没时间直接去管这事。"

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"不像特斯拉，马斯克说干啥，哪怕是错的他也能开始干。但我觉得在这种行业里面创业其实错不怕，有错我们快速迭代、快速调整，这个都 OK。怕的是就说力量不集中、不统一。"

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm not-italic">

**他想做但 Waymo 不能做的事**：18 年那个时间点，应该另起一个 Team，从头按 AI-Native 设计整个架构——但 Waymo 没有那个意志力做这个 reset。

</div>

</div>

</div>

---
layout: two-cols
---

# 18 年自动驾驶的两条路线

<div class="text-sm opacity-70 mt-2">从 08 年到 18 年的技术架构几乎一样——直到 Tesla 用 AI-Native 重新设计</div>

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**Robotics 的方法论**：系统拆分，关注 Corner Case，每个可解释的模块解决具体 Case。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**AI 的方法论**：数据驱动，端到端。"AI 不太擅长解决一个两个具体的 Case，但是它特别擅长的是我从整体上提升 Benchmark 的性能"——80→90→95。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**演化到今天**：BEV → 端到端 → VLA。"这套已经成了主流"。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robotics-vs-ai-native.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么离开 Waymo：成长曲线收敛

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

20 年下半年。两年时间他写了很多代码、Review 了很多代码、做了很多 Design、开始带小团队。

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

"我觉得在这边的这个成长的效率、速度，就是逐渐收敛了。"

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**两个隐忧**：
- 我离产品太远了
- 我离公司是怎么经营的，这件事太远了

</div>

</div>

<div>

### 三个筛选条件 → Momenta

<div class="space-y-2 mt-2 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**① 继续做自动驾驶但做量产**——"Robotaxi 这个还是慢，对吧。"量产能更快产生用户价值。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**② 回国**——准备创业。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**③ 没有大公司病 + 强势创始人**——"我比较确认这应该没大公司病……旭东够强势。"

</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**蔚小理被排除**：那个时候他觉得它们 AI 能力都"还好像没有那么强吧"。小鹏在做但已经有人了——"我是喜欢去不行的地方，然后把一个东西做好的。"

</div>

</div>

</div>

---

# Momenta：他作为一条鲶鱼

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">小珺直接问："你是当时引入的一条鲶鱼吗?"</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm mb-3">

"我应该算是吧。包括孙刚对我的使用应该还是说，就是说比较灵活的。我也接受这种灵活的使用。"

</div>

### 在 Momenta 的轨迹

```
感知 ───────► 定位 + 泊车 ───────► Infra
                  │
                  ▼
           规控 (Rule-Based → 神经网络)
                  │
                  ▼
       NOA 量产 (高速高驾) → 交付上汽智己
```

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**为什么轮换这么多模块**：M 想把规控、定位也从 Rule-Based 改成 Deep Learning。"所以让我去搞。"

</div>

<div class="p-3 mt-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**收获不是某个具体能力，而是元能力**：

> "我可以很快速地进入到一个我不熟悉的领域，然后用一套固定的方法论去理解里边这个事都是怎么回事。"

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**M 的极致**：18 年判断要做量产 → 21 年首发交付智己 → 后来一两百次车型交付。"一直能去做这件事本身就极致了。"

</div>

</div>

</div>

---

# 工程师思维 = 拆解 + 测量

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-xl">

"工程师思维就是拆解加测量。就是把一个复杂问题拆解成若干个稍微不那么复杂的子问题，然后再拆解……拆到最后就是一行代码，测量到最后是一个个单元测试。"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 拆解
- 顶层目标 → 子问题
- 子问题 → 更小的子问题
- 最后落到一行代码

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 测量
- 顶层指标
- 中间层指标
- 最底层指标 (单元测试)
- 反馈好就扩大，反馈不好就收缩

</div>

</div>

<div class="mt-4 text-sm opacity-70 not-italic">
他说这套思维方式，"我觉得是在那个时候 (在 Waymo) 我逐渐就定型了"——后来在 Momenta 转换多个模块时反复使用，再后来做整机供应链时仍然用。
</div>

---

# 两种文化：天堂 vs 战场

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Waymo
<div class="text-xs opacity-70 mb-2">2019 - 2020 · 1000 → 2000 人</div>

- 工程师的天堂
- 最好的 Infra、最好的同事
- 领导 support 温暖宽厚
- 不直接面对客户
- Waymo 不鼓励 Push, 他只能 Push 自己

<div class="mt-2 text-xs italic">"Peace and Love"——民主、不卷</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Momenta
<div class="text-xs opacity-70 mb-2">2021 - 2023 · 量产爆发期</div>

- 绝对结果导向 + 战功文化
- 一定级别以上工程师都直接面对客户
- 车企文化 Tough，被骂是常态
- "你下次再做不成什么样——把旭东叫来"
- 极致的卷：核心算法到 12 点 + 6 天打底

<div class="mt-2 text-xs italic">"我从 M 出来创业之后，我觉得创业之后那个更快一些"</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**他的取舍**："从一个对工程师的自我感受上来说，M……都不是好的。但是我觉得从另外一个角度来说，从成长性上来说，我觉得在中国的智驾环境里面对于工程师的训练，综合能力的训练又是更好的。它可以让你看到这个世界真实的状态。"

</div>

---

# 关键顿悟：以客户为中心

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

回国两年，他说底层只学到一件事：**以客户为中心**。

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"以客户为中心不是生硬的说客户说让我们做什么我们就做什么，而是真的站在客户的角度去看他的需求是什么，甚至帮助他挖掘他的需求是什么。"

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

**它不只是对外**——你的支持团队对业务团队、平台团队对交付团队，都是"以客户为中心"。

</div>

</div>

<div>

### 与之相对的错误价值观

<div class="space-y-2 mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**自我成长为中心** ✗

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**技术领先性为中心** ✗

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

"我觉得这些都是错误的。**至少在做一家企业来讲，都是错误的。**"

</div>

<div class="mt-3 text-xs opacity-70">
这条信念后来被他写进星海图的价值观，并直接构成他和许华哲分歧的底色——研究驱动 vs 客户驱动。
</div>

</div>

</div>

---

# 2022 年底：30 岁的决断

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

22 年 12 月，他过 30 岁生日。射手座。

那一刻他看到三件事同时变化：

<div class="space-y-2 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**① GPT-3 + ChatGPT 出来了**——"让世界再一次相信 AI 了。这很重要。只有我们相信不够。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**② 智驾产业链让端侧能力成熟**——传感器 + 端侧算力，机器人和智驾"大差不差"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**③ Tesla 宣布做人形机器人**——这些要素就都 Ready 了。"我得开搞了。"

</div>

</div>

</div>

<div>

### 5 月 + 1000 万美金

23 年 3-4 月把 NOA 量产交付完，"几乎也把国内所有的车……带 NOA 功能的车全部试驾了一遍"，确认体验做得不错。

**5 月份提了离职。**

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

期权大概值 1000 万美金（按当时估值）。

> "放弃 1000 万美金心疼吗?" "**一点都没有。**"

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

"我觉得钱这个东西其实你就日常我也花不了多少。"

</div>

</div>

</div>

---

# 星海图 Day 1：为什么先做整机

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">小珺反复追问："你为什么不先做软件大脑？"</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"具身智能长期壁垒建立在物理世界的数据闭环之上……我必须得有这个数据的载体，这个数据载体就是我的整机，就是这个硬件。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

**中短期**：商品不是算法，而是"整机加智能形成的、在物理世界能够有执行能力的物理实体"。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**长期**：要构建数据闭环，**整机是闭环的核心媒介**。

</div>

</div>

<div>

### 一个产业类比

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

自动驾驶进入时汽车产业已存在 100 年——你只能做软件供应商，被车企夹在中间，数据闭环不通畅。

</div>

<div class="p-4 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

具身智能没有"整机产业"在前面挡——既是"不幸"（没载体得自己做），又是"幸运"（千行万业都可以做）。

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">

"相当于汽车产业退回了一百多年前。"——只是这一次还要同时做智能。

</div>

</div>

</div>

---

# 起点很低：去西藏，回来拆机

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

23 年 5 月离职 → 7 月去西藏自驾 → 8 月开始整 BP。

第一轮 BP "现在回看简直不堪入目了"。最早想做**末端配送机器人**——"很快的就否定了那个方向"。

<div class="mt-3 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

24 年 1-2 月又调战略——直接做生产力场景"啥也不成熟，整机也不成熟，供应链也没有，然后那个智能也不 Ready，客户也不成熟，市场也不在……马上就切换了，调了战略"，做轮式双臂、切开发者市场。

</div>

</div>

<div>

### 起点真的很低

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**研究供应链 = 拆别人的产品**

"哦，原来这个是电机，那个是关节模组，第一次看到这些东西。"

</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**找供应商靠淘宝以图搜图**

"有一次我记得我拆出来一个东西，我说这是什么东西……淘宝拍张照片，以图搜图，然后找到了就是卖这种产品的供应商。"

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

后来杨泽一来公司前看他们"太可怜了"，送了一个工具箱（改锥、锤子、镊子、斧子）。

</div>

</div>

</div>

---

# 杨泽一：97 年的机电天才

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

机电、结构他完全不懂。一个五源资本投资人介绍了**杨泽一**给他——南科大、97 年、当时在自己创业做机器人教培。

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"第一次有人给我讲明白了……第一很有框架性的给我讲清楚了一个机器人系统、整机系统应该是怎么回事。第二很有洞察力的，就在他已经做过的一些事里边，很有洞察力的能够给我说出来个 1、2、3。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

23 年底定下来，24 年 1 月加入。**今天是公司机电首席工程师 + 合伙人**——"公司所有的产品几乎就是大的框架的设计都是他来把关的"。

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**继扬"动手能力到底怎么样?" 小珺问。**

> "讲清楚和能做是两个事，就非常强。"

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

机器人教培——"那难怪能讲清楚啊"，小珺笑。"哈哈哈，对，我可能就是那初中生。"

</div>

<div class="mt-3 text-xs opacity-70">
后来这个合伙人机制延续到天奇 (CFO, 前高瓴)、虞磊 (商业化) 等多位合伙人。
</div>

</div>

</div>

---
layout: two-cols
---

# 合伙人哲学：六边形拼接

<div class="text-sm opacity-70 mt-2">
  公司的天眼查上"有心人也可以查得到"——他按"原始股的百分点"给合伙人股份。
</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"我要求我自己做一个中等面积六边形，然后我希望我的减一、我的合伙人团队做更大面积，组成一个更大面积六边形。"

</div>

<div class="mt-4 space-y-2 text-xs not-italic">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

"如果我们希望公司在未来的，比如说五年的时间我要翻十倍、二十倍——那其实我每一个阶段都是创业。"

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

为此他建了一个机制——**持续把好的人吸纳进来，且舍得分**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hexagon-mesh.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 融资时间线：3000 万 → 100 亿

<div class="grid grid-cols-4 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 23 年第一轮
**3,000 万人民币**
投前 ~2 亿

IDG (领投) + 百度风投 + 金沙江

李骁军决定。"他们当时也说了——你们想做的这个事应该不 Work，再琢磨琢磨吧。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 24 年初加轮
**~2,000 万人民币**

SEE Fund (清华电子系汪老师 + 姚颂)

投后 3-4 亿

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 中间数轮
**故事重新讲过**

机器人没成共识、做"非常窄"的具身智能——但融资"还算比较顺"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 最近一轮
**100 亿估值** · 30 倍

吉利、北汽、正心谷、金鼎；6 家老股东 Pro rata，3-4 家 Super 跟投（凯辉、今日资本、襄禾……）

</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-6">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**他的态度**：

> "我每次融资成功，我其实给自己都是我觉得我肩上的责任。这个 20 亿、几十亿的钱在账上，我得把这些钱花好、管好。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**他在最新这轮里**："我现在主要是这个花瓶。他需要我这个什么的时候，我去讲一下。"——靠 CFO 天奇主导。

</div>

</div>

---

# 智能定义本体：为什么不做人形

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"当时我们的想法叫智能定义本体。就是从智能的需求出发去看本体应该怎么做。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

**切入点是操作智能 → 双臂是重点**

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**双足却给智能演进带来困难**——双足的运动控制和双臂的智能操作要同时解决（Loco-Manipulation）"这事也没解决"。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**先解耦**：上肢做好操作，下肢用轮式。"很多真实的场景里面也不需要双足的过坎能力。"

</div>

</div>

<div>

### R1：星海图第一代轮式双臂

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

24 年 3 月左右定型。"轮式加躯干。"

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**意外发现**：做出来后发现"学术界确实有需求"——这就是后来"开发者市场"的起点。

</div>

<div class="mt-4 text-sm opacity-70">

**作者概括**：他没有把这叫"折中方案"——而是从智能需求倒推回硬件。这跟"硬件定义智能"的人形派完全是相反的逻辑顺序。

</div>

</div>

</div>

---

# Day 1 信条：端到端 + 真实数据

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 信条 ①  端到端

> "一定要坚持端到端。"

不要搞模块的分层设计——这是从自动驾驶的 Lesson Learn。

整个 Robotics 路线在 18 年那个时间点已经被证伪了一次，他不想再走一遍。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 信条 ②  真实数据

> "一定要用真实数据去解决问题。"

> "AI 有一个底层的一个原理，就是说我要解决的这个问题在这样的一个 Domain 里面，那我训练这个模型的数据最好也在这个 Domain 里面。"

</div>

</div>

<div class="mt-5 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**为什么不押仿真？**——他不否认仿真有用，但他认为基于图形学渲染的仿真器 Sim-to-Real Gap 太大，"很难克服"。这是从自动驾驶 99.9% 问题靠路测数据解决得来的判断。

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"AI 归根结底还是实验科学得试出来。"

</div>

---
layout: two-cols
---

# 数据成本：算一笔账

<div class="text-sm opacity-70 mt-2">
小珺盲猜"1000 块钱一小时"——他给出的真实数字是 200~250 元。
</div>

<div class="mt-4 space-y-2 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**人工**：1h 数据需要 3-4h 操作工（机器人需要复位 / Set up）

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**整机折旧**：10 万 / 1000 小时 = **100 元/小时**（齿轮限寿）

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**合计 200~250 元/小时**（中国北上苏成本）

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**外推**：10 万小时 = 2,500 万 ≈ 一个人 0~18 岁与物理世界交互的总时长

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-xs">

"我花一块钱搞来的数据，我得花 5-10 块钱才能把它训明白。"——所以数据质量低，钱浪费在训练上。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-cost.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据金字塔不是规定的，是试出来的

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-3">

**坊间**："塔尖真实数据 + 塔下仿真 + 第一视角"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm mb-3 italic">

"这数据金字塔是对的，但谁说的数据金字塔非得长成这样？非得是这么个比例？没人说。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

**他的策略**：保证各类数据获取都"畅通无阻"——具体比例 (Data Recipe) 是实验结果，不是先验设定。

</div>

</div>

<div>

### 实际数据来源

<div class="space-y-2 text-xs">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**Robot-Centric**：人遥操机器人 (主)

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**Human-Centric**：UMI / 采集手套 / 外骨骼

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**POV / 第三视角**：人戴头盔摄像头、互联网视频

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**仿真**：图形学渲染 OR 世界模型生成

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"AI 归根结底还是实验科学得试出来。"

</div>

</div>

</div>

---

# Scalable 真实数据的两个条件

<div class="mt-5 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 进入真实场景

<div class="text-sm mt-2">

不要在"数采场"里搞——那是 Non-Scalable 的，需要构建一个场景。

要直接进入到无穷无尽的真实场景里面去。

</div>

<div class="mt-3 text-xs opacity-70">
他说星海图"应该是全国第一个去做"真实场景的数据采集——从去年开始。
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### ② 众包

<div class="text-sm mt-2">

把采集设备分发出去，让很多人参与到这个活动里来。

需要政府支持 + 一定的商业模式支撑。

</div>

<div class="mt-3 text-xs opacity-70">
他说北美在这条路线上更早——UMI、Sunday 这种"无本体的"采集手套、采集夹爪。
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**作者概括**：这是把"真实数据贵"这个反对意见从根本上化解的两步——一步把单位成本压低（不需要构建场景），一步把规模扩出来（不依赖单一团队）。

</div>

---

# 大脑 = VLM + VLA 双系统

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**VLM**（Vision-Language Model）：上层，把模糊指令拆解成可执行任务。

</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**VLA**（Vision-Language-Action）：底层，把任务转成机器人动作。

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**为什么必须拆？** 端侧算力放不下几十 B 的推理模型 → VLM 必须在云。但动作模型的延时不能等云 → VLA 必须在端。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

很多工商场景就二三十个动作 → 直接调 VLA 语言接口够用，**不必走 VLM**。

</div>

</div>

<div class="flex justify-center items-center pl-2">
<Excalidraw
  drawFilePath="./double-system.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 三个供给指标：速度 / 精度 / 泛化性

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 速度

基于模仿学习 ≈ 80~90% 人类速度

<div class="mt-3 text-xs opacity-70">
"基于模仿学习的大概率超不过人。"
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 精度

**厘米级**

<div class="mt-3 text-xs opacity-70">
毫米级 = 下一步。组装 / 装配的"柔性操作"暂时放一放。
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 泛化性

= 多少条新增数据能解决一个新问题

<div class="mt-3 text-xs opacity-70">
万物抓取已 0-shot；折叠衬衫 / 毛巾少样本；其他衣服待解决。
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">

"那么精度是什么？就是厘米级别的操作精度，毫米级别的我觉得那是下一步的事。"

</div>

---

# 五个动作大类：Carry · Pick · Pack · Fold · Operate

<div class="grid grid-cols-5 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Carry
搬运

<div class="text-xs opacity-70 mt-2">
把货从 A 区搬到 B 区
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Pick
拾取

<div class="text-xs opacity-70 mt-2">
从料箱里拿出东西
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Pack
打包

<div class="text-xs opacity-70 mt-2">
分装、装箱
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Fold
折叠

<div class="text-xs opacity-70 mt-2">
衣物、毛巾
</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Operate
操作设备

<div class="text-xs opacity-70 mt-2">
按钮、阀门、仪器
</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"每一个岗位涉及到这个动作组合的数不会特别高，20 个、30 个、40 个，基本上 cover 很多岗位……所以像这样的岗位我们看起来是好场景。"

</div>

<div class="mt-3 text-sm opacity-70 not-italic">
现实世界里大量劳动者的工作，本质就是这五类动作的组合。
</div>

---

# Bin Picking：好场景 = 需求 × 供给的交集

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 需求侧约束（坏场景被排除）

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm mb-2">

❌ 速度要求太高（VLA 做不了）

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm mb-2">

❌ 失效成本太高（一搞错就无法挽回）

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm mb-2">

❌ 不全球化（不同国家不一样）

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

❌ 没有爆发力（一万台量级看不到）

</div>

</div>

<div>

### 仓储物流 Bin Picking ✓

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-2">

仓库里上万 SKU，存在斜口盒里。订单从其中抓几个。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

**为什么传统方案搞不定？**——SKU 数量太多，码垛/夹抱机器人解决不了泛化性问题。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**形式化**：Pick Anything → Place To Somewhere

</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

车厂 SPS 集中分装也是这个结构：从货架拿零件，放到 AGV 上。

</div>

</div>

</div>

---

# Demo in the wild：万物抓取

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Demo in the video

<div class="text-xs opacity-70 mt-3">
最低级。视频里有，现实没。市面上很多。
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Demo in the office

<div class="text-xs opacity-70 mt-3">
公司办公室能现场演示。但只在 office 里。
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Demo in the wild ✓

<div class="text-xs opacity-70 mt-3">
小珺来办公室、新加坡客户、韩国客户、美国客户、投资人年会现场——掏什么都能抓。
</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"你随便从兜里边掏一个东西出来，随便拿一个什么什么口罩、耳机啦、口香糖了，放在桌子上它都能给你准确的给你抓起来。而且我们这套就是用真实数据驱动的 VLA 去解决的问题。"

</div>

<div class="mt-3 text-sm opacity-70 not-italic">
今年 1 月发布的 G0 Plus + R1 Lite——"国内首创"的开箱即用整合。下一步：Place To Anywhere。
</div>

---

# 开发者市场金字塔 → 生产力市场

<div class="mt-3 grid grid-cols-2 gap-6">

<div>

<div class="text-sm opacity-70 mb-3">他不把"开发者市场"等同于"高校"——它是个分层金字塔。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mb-2">

**24 年**主线：整机 + 供应链 + 融资

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

**25 年**主线：数据 + 智能体系；8 月开源 500 小时数据 + G0 基模（"全国第一个"）；**150+ 全球开发者客户**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**26 年**主线：场景 + 应用——走出开发者市场

</div>

</div>

<div class="flex justify-center items-center pl-2">
<Excalidraw
  drawFilePath="./developer-pyramid.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**类比**：苹果 Macintosh（极客 → 设计师 → 文员）；拓竹 3D 打印机（极客 → 企业 → 家庭 → 打印工厂）；宇树（高校 → 二开 → 娱乐市场）。**这是科技产品的规律**。

</div>

---
layout: two-cols
---

# 大公司 vs 创业公司：传播周期决定壁垒

<div class="text-sm opacity-70 mt-2">
他用一个统一的指标拉开各要素的高低——"传播周期 = 友商学会你这件事需要多久"。
</div>

<div class="mt-4 space-y-2 text-xs">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

整机供应链 12-18 个月 → **壁垒最高**

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

客户渠道 6 个月起步（大客户更长）

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

数据 = 整机 + 6-12 个月

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**算法 2-3 个月** → 投入大、壁垒最小

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 italic text-xs">

"它在创新上面投入非常大，但是它在防止被抄袭这件事上的壁垒很小。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./propagation-cycles.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 大厂的优势其实不是钱，是业务协同

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"大厂或者说有一些优势业务的这些企业做一个新业务的时候，它对于完全的一个初创公司来讲，最大的优势不来自于人才和资金，而在于已经存在的业务协同。"

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm not-italic">

字节做 LLM = 飞书 + 抖音流量协同；车企做自动驾驶 = 直接握住数据 + 用户。

</div>

</div>

<div>

### 但具身智能的特殊性

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

需求侧千行万业 → **没有现成业务协同**

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

供给侧全是新供给 → 汽车零部件用不到机器人

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

道路数据 ≠ 操作数据

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

"那就回到了人才组织和资金资源这两个维度的竞争了。"

</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

**他对"懂模型才能定义好数据"的悖论**：买来的数据一般有问题——除非供应商懂模型；但供应商懂模型的前提是自己得有整机。**这就是有整机的创业公司对大厂的结构优势**。

</div>

---

# 务实创新 ≠ 独立的算法创新

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"算法的创新它不能独立于存在，独立于整个公司的基础设施去存在。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

公司价值观叫**务实创新**——"前面先要务实"。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

"我们不是说不做创新……而是要学会用更聪明的方法、更有 ROI 的方式去做创新。"

</div>

</div>

<div>

### 配套的两条信念

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm mb-2">

"我觉得我是个理想主义的人，但是理想主义不能变成空想。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm mb-2">

"理想主义能够实现的基础是我们每天都要去算 ROI。"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">

"这个不怕慢就怕站，是吧。我们就得开始做这个**日拱一卒**。"

</div>

</div>

</div>

---

# 许华哲离职：战功文化下的取舍

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">访谈录制时正好是星海图联合创始人许华哲即将离职——这是访谈最敏感的话题。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm mb-3">

"华哲是一个非常有影响力的科学家。他在很多前沿问题上面的理解、算法问题上理解也很到位。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm not-italic">

**分歧的核心**：是要**务实创新、围绕客户价值一步步来**，还是要"更多去做一些超前的创新"——之间需要一个 Balance。

</div>

</div>

<div>

### 时间线

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm mb-2">

**24 年 8 月**：内部基本完成调整。**赵行统一管理基础模型团队**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

**今年 1 月**：赵行带队打出 G0 Plus + 开箱即用整合（"国内首创"）。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**许华哲新方向**：探索 To C 家庭应用。**星海图会投资他第一轮**。

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">

"我们本质上还是战功文化、实事求是的战功文化。"

</div>

</div>

</div>

---

# 估值两年涨 30 倍，组织如何不爆炸

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"组织会有问题的原因不是因为估值上涨了，而是因为组织本身变复杂、变庞大了。"

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm not-italic">

**两年人数变化**：十几个人 → **200 多人**（约 20 倍）

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**调整频率**：每 3 到 5 个月做一次局部调整。

</div>

</div>

<div>

### 真正的两个挑战

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mb-2">

**① 已有的人 (包括他自己) 跟不上速度** + 怎么及时引入更牛的人

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**② 两个 Domain 天然冲突**：

整机 / 供应链 = **强调流程纪律性**

智能 = **强调人才密度 + 创新**

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs italic">

"我今天已经调和的很好了，我觉得还是会有很多很多的问题。"

</div>

</div>

</div>

---

# 技术 Vision：像培训员工一样培训机器人

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">

"我们要像能够让培训机器人像培训一个员工一样培训一个人一样，通过几次的示范，然后再通过几次的自我演练，这个机器人就可以在那个场景里面稳定的自主的完成任务。"

</div>

<div class="mt-6 p-5 rounded bg-green-50 border border-green-200 not-italic">

### 三件商品的组合

```
基础模型 ────┐
              ├──→  机器人员工
后训练工具 ──┤        像人类员工一样被使用
              │
整机 ────────┘
```

</div>

<div class="mt-4 text-sm opacity-70 not-italic">
"每一次我跟投资人去讲的时候，我的第一页的 PPT 就是这个。"
</div>

---

# 一只狼：机器人行业不允许浪漫主义

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">小珺最后问："如果把星海图比作一个动物，你觉得是什么?"</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"可能最接近的是狼。"

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm not-italic">

但他说"狼"也不准确——因为现在具身智能里"前面这些公司都非常狼性、都非常卷"。

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**一个时刻**：G0 Plus 发布前，赵行带的智能团队 + 整机团队连续工作一个月，周末不休。"我是很感动的。"

</div>

</div>

<div>

### 为什么没有技术浪漫主义者？

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"很有可能是机器人这件事本身就不浪漫。"

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">

"我觉得这个行业不允许这样的人存在。这样人存在可能他会有很大的 Suffer。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm not-italic">

**他对"狼"的理解**：

> "既要有理想主义，又要每一天很务实的去思考我今天要做什么、明天要做什么、我每件事的收益和付出是什么的一个状态。需要平衡好很多方的关系的一个状态。"

</div>

</div>

</div>

---

# 三国，不是封神

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">小珺问他推荐一本人生之书。他说不能讲曾国藩——那个反复说过了——他选了一本最近在读的：</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"吕思勉讲三国的那一本……三国这个历史，其实它呈现出的状态，某种程度上来说和具身智能今天的状态很像。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">

"真实的历史总不是那么戏剧性，真实的历史有它的逻辑性……如果我们回到那个时间节点，会发现没有哪个人是草包，也没有哪个人是绝对意义上的理想主义的英雄。"

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">

"都是在现实当中去挣扎、去取舍，然后凭借一些运气，可能，然后取得了一些胜利、然后步步为营，然后去取得最终的一些成果。"

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm not-italic">

**与三国的不同**：

> "好在就是说那个时代太你死我活了，最后好像只有一个人能够取得一些结果一样。但今天不是。今天我们每个人都可以很好，每个公司都可以很好。"

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期访谈里最值得记住的几句——全部从 transcript grep 验证。</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"做机器人行业就是一个链条极长的行业，有时候你就是要把你的头伸到土里去。"
<div class="text-xs opacity-60 mt-1 not-italic">— 小珺转述继扬的开场白</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"AI 归根结底还是实验科学得试出来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 Data Recipe 时</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"放弃 1000 万美金心疼吗?——一点都没有。"
<div class="text-xs opacity-60 mt-1 not-italic">— 23 年 5 月离职 Momenta 那一刻</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我比较喜欢去不行的地方，然后把一个东西做好的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 解释为什么没去蔚小理</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"工程师思维就是拆解加测量。"
<div class="text-xs opacity-60 mt-1 not-italic">— Waymo 时期的方法论沉淀</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"理想主义不能变成空想，理想主义能够实现的基础是我们每天都要去算 ROI。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈务实创新</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我觉得这个行业不允许这样的人存在。这样人存在可能他会有很大的 Suffer。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈机器人行业为什么没有技术浪漫主义者</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"这个不怕慢就怕站，是吧。我们就得开始做这个日拱一卒。"
<div class="text-xs opacity-60 mt-1 not-italic">— 24 年早期面对啥也不懂的整机供应链</div>
</div>

</div>

---
layout: end
---

# 一个反面，一只狼

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-base text-left">

"我觉得这个行业不允许这样的人存在……是一个既要有理想主义，又要每一天很务实的去思考我今天要做什么、明天要做什么，我每件事的收益和付出是什么的一个状态。"

</div>

<div class="mt-6 text-sm opacity-60 text-center not-italic">
张小珺访谈 · 高继扬 · 星海图 · 2026-04
</div>
