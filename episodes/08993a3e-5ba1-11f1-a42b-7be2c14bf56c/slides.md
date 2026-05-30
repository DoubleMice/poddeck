---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Is All of DeFi Unsafe? What You Need to Know About Holding Assets Onchain'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Is All of DeFi Unsafe?

<div class="text-sm opacity-60 mt-6">
Isaac Patka · Mike Silagadze
</div>

<div class="text-xs opacity-40 mt-2">
Certifications Lead, Security Alliance · CEO, EtherFi
</div>

<div class="text-xs opacity-40 mt-4">
Unchained · 2026 年 5 月
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Manuel Araoz 的炸弹推文</strong><br>
<span class="text-xs opacity-70">OpenZeppelin 联合创始人声称"All of DeFi is unsafe"，引发加密推特风暴</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>90% 的攻击不是代码漏洞</strong><br>
<span class="text-xs opacity-70">而是参数配置错误、OpSec 失败和社会工程——全是可预防的低级错误</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>"去中心化表演"</strong><br>
<span class="text-xs opacity-70">EtherFi CEO 直言：许多协议假装去中心化，却因此无法保护用户</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AI 军备竞赛的真相</strong><br>
<span class="text-xs opacity-70">AI 让攻防双方都更强——但防守方有三个结构性优势</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Code is not law</strong><br>
<span class="text-xs opacity-70">需要纠错机制，且与去中心化不矛盾——Arbitrum 曾因此追回 $7500 万</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>用户自救指南</strong><br>
<span class="text-xs opacity-70">硬件钱包 + 蓝筹协议 + Security Alliance 认证 = 三个可操作的动作</span>
</div>

</div>

---

# 一条推文引发的风暴

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Manuel Araoz 的原始论点：**

- "I now consider **all of DeFi unsafe**"
- Coding agents 在找漏洞方面是"超人级"
- 攻防不对称：防守方需修复所有 bug，攻击方只需一个
- 甚至建议亲友**退出 Aave、MakerDAO、Compound**

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">
⚠️ 注意：Manuel 已于 2019 年离开 OpenZeppelin。OpenZeppelin 官方声明"不代表公司立场"。
</div>

</div>

<div>

**他后来补充的风险维度：**

<div class="mt-2 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>代码漏洞</strong><br>
<span class="text-xs opacity-70">传统意义上的 smart contract bug</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>参数配置</strong><br>
<span class="text-xs opacity-70">风险管理参数设置失误</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>机制设计</strong><br>
<span class="text-xs opacity-70">协议经济模型本身的缺陷</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>OpSec</strong><br>
<span class="text-xs opacity-70">操作安全：密钥管理、社会工程防御</span>
</div>

</div>

</div>

</div>

---

# 社区的回应：大多不买账

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

<div class="font-bold mb-1">Mark Zeller</div>
"Less than 10% of past year DeFi issues are due to code base. It's mostly bad parameter configuration, collateral blowup, and poor opsec."

<div class="text-xs opacity-60 mt-1">— 作者概括：数据支持 Isaac 的核心论点：绝大多数攻击不是代码问题</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="font-bold mb-1">Fidy Research</div>
"If AI tools are so good, all of DeFi would have been hacked already. Which means a lot of things that didn't get hacked are actually quite secure."

<div class="text-xs opacity-60 mt-1">— 归谬法：如果 AI 这么强，为什么还有大量协议安然无恙？</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="font-bold mb-1">Alex McFarland (Keyring)</div>
"You're actually combining credit risk with hack risk. Two different risks."

<div class="text-xs opacity-60 mt-1">— 将信用风险和黑客风险混为一谈，是 Araoz 分析的核心盲点</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<div class="font-bold mb-1">Mike 的 TradFi 对比</div>
"An attacker gets access to your bank account and sends a wire transfer... that money's gone. You're not getting it back."

<div class="text-xs opacity-60 mt-1">— SWIFT 转账一旦发出就不可逆，TradFi 也有同样的不对称性</div>

</div>

</div>

---

# DeFi 风险在宏观图景中的位置

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Mike 的核心框架：**

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
"今天如果你要对冲 DeFi 中的全部风险，基于漏洞和攻击的统计数据，<strong>利率应该在 12% 左右</strong>。所以你应该获得约 12% 的资产收益率。凭直觉，这感觉差不多。"
</div>

<div class="text-xs opacity-60 mt-1 ml-1">— Tom Dunleavy 的分析得出的数字；当然，市场实际利率由供需决定</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
"TradFi 也有同样的问题……但传统金融的损失绝对金额远超 DeFi——只是比例不同。"
</div>

</div>

<div>

**问题不是"DeFi 是否绝对安全"，而是：**

<div class="mt-3 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>DeFi 的安全水平 vs TradFi 的安全水平</strong><br>
<span class="text-xs opacity-70">两者的风险类型不同，不能简单类比</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>智能合约风险 vs 银行冻结/扣押风险</strong><br>
<span class="text-xs opacity-70">TradFi 里你的钱可能被冻结、扣押或银行拒绝服务</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>改进方向：引入真实经济活动 + 降低风险</strong><br>
<span class="text-xs opacity-70">不只是 gambing，要有 productive yield</span>
</div>

</div>

</div>

</div>

---

# 真正的威胁全景

<div class="grid grid-cols-2 gap-6 mt-3">

<div>

**Isaac 的判断：90%+ 的攻击是低级错误**

绝大多数攻击不是因为"数学被破解"或"发现了一个深奥的舍入误差"，而是：

<div class="mt-3 space-y-2 text-sm leading-relaxed">

- 参数多加了一个零（PayPal 稳定币曾在测试网意外铸造 $300 万亿）
- 多签管理混乱：50-100 个 multisig 用拼凑方式管理
- 社会工程：攻击者瞄准团队中最 junior 的成员
- 桥配置错误：从 3-of-3 改成了 1-of-1

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">
这些不是"超级 AI 发现致命漏洞"的故事——而是基本的操作纪律缺失。"It's embarrassing."
</div>

</div>

<div class="flex justify-center items-center pt-10">
<Excalidraw
  drawFilePath="./defi-threat-landscape.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# 哪些攻击真正造成了伤害？

<div class="mt-6 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Bybit 攻击**
<div class="text-sm opacity-80 mt-1">100% 操作安全失败。不是智能合约代码的问题。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**Ronin 攻击**
<div class="text-sm opacity-80 mt-1">LayerZero 桥的配置问题——另一个 OpSec 失败。</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**Drift 攻击**
<div class="text-sm opacity-80 mt-1">长期、面对面的社会工程攻击。攻击者花数月时间建立信任。</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Kelp / LayerZero 攻击**
<div class="text-sm opacity-80 mt-1">桥的配置允许任何人 mint 任意数量的代币。事后风险评级机构竟说"我们的工作范围不包括评估桥风险"——Isaac：这很白痴。</div>

</div>

</div>

<div class="text-center text-sm opacity-60 mt-6">
核心结论：一个有良好 OpSec 习惯的团队，防御力远高于一个只依赖代码审计的团队。
</div>

---

# "去中心化表演"（Decentralization Theater）

---
layout: two-cols
---

**Mike 的直言不讳**

<div class="mt-2 text-sm leading-relaxed">

- 几乎所有 DeFi 协议（Uniswap 可能例外）的团队**实际保留着升级合约的能力**
- 但为了"去中心化"的名声，他们**设置障碍让自己不能快速行动**
- 结果：既没有真正的去中心化，**也失去了保护用户的能力**

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"你可以保留所有非托管的优势，同时确保存在机制来保护用户。这是每个协议的责任——不能双手一摊说'去中心化'，实际上你有升级合约的能力。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="text-center">

<div class="text-6xl mb-4">🎭</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200 text-sm leading-relaxed">
<strong>Decentralization Theater</strong><br><br>
保留升级权<br>
但假装不能干预<br><br>
<span class="text-red-600">→ 用户最不安全的状态</span>
</div>

</div>
</div>

---

---
layout: two-cols
---

# 负责任的协议设计：三层 Multisig 架构

**Isaac 的三权分立方案**

<div class="mt-3 text-sm leading-relaxed">

**三个独立的 multisig，各有明确授权：**

<div class="mt-4 space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>🔴 紧急冻结 Multisig</strong><br>
低阈值（1-of-3 或 2-of-3）· 可快速暂停 · 上层 multisig 可撤销其权限 · 预防 griefing
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>🟠 参数调整 Multisig</strong><br>
至少 1 小时时间锁 · 绝不可在同区块内新增抵押品并允许借贷
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>🔵 合约升级 Multisig</strong><br>
至少 2 周时间锁 · 给用户足够时间退出 · 有问题先暂停，再升级
</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
参考：Lido 去年引入 Dual Governance——stETH 持有者对重大升级有投票和退出权
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./multisig-architecture.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 安全委员会：一个模糊但危险的词

<div class="grid grid-cols-2 gap-6 mt-5">

<div>

**好的安全委员会：**

<div class="mt-3 text-sm space-y-2">

- 职责明确：仅审查合约升级和参数变更是否符合规范
- 成员公开（doxxed）并由社区投票
- 有明确的行动规则，不做主观判断
- **不是"黑名单决策者"**

</div>

</div>

<div>

**Isaac 的担忧：**

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"有些协议想把主观决策推给安全委员会——比如'我们不想决定冻结谁的资金，让安全委员会决定'。这不是我想要的职责。安全委员会应该有非常明确的规则：你只是在确保我们没有引入 bug。"
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>关键区分：</strong>谁有权冻结资金是一个治理问题，不应该外包给"安全委员会"这个模糊实体。
</div>

---

# AI 军备竞赛：真的那么不对称吗？

<div class="grid grid-cols-2 gap-4 mt-5">

<div>

**Araoz 的担忧：**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3 text-sm">
"Coding agents are superhuman at finding vulnerabilities, and smart contract security is too asymmetric."
</div>

<div class="text-xs opacity-60 mt-1">— 这是引燃整个讨论的火种</div>

</div>

<div>

**Mike 和 Isaac 的反驳：**

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3 text-sm">
"Defenders are there first. They run the same and better AI models before they ship the code. I don't think the DPRK is getting access to Mythos anytime soon."
</div>

<div class="text-xs opacity-60 mt-1">— Mike：防守方有三个结构性优势</div>

</div>

</div>

<div class="mt-4 text-sm opacity-80">
Isaac："所有的安全研究员现在都在重度使用 AI 工具——帮助服务更多协议、发现不同类型的漏洞。我对此比担心攻击方更有信心。"
</div>

<div class="mt-3 text-sm opacity-80">
关键事实：AI 目前还没有找到"Uniswap 底层数学错误"级别的根本性漏洞。它主要放大了攻击者追踪已知薄弱点（小的 TVL 协议、弱 OpSec 的团队）的效率。
</div>

---

# 防守方的三个结构性优势

---
layout: two-cols
---

**AI 不是单向的武器**

<div class="mt-3 text-sm leading-relaxed space-y-3">

**① 时间优势**
代码部署前即可扫描。攻击者只能在部署后开始分析。每条新代码，防守方先跑。

**② 工具优势**
商业级 AI（Claude、Mythos、ChatGPT）vs 攻击者的离线/open-source 模型。不可同日而语。

**③ 攻击者转向社会工程**
攻击者越来越多地选择钓鱼而非代码攻击——这恰恰说明纯代码攻击的门槛在上升。**他们打不过代码防御，转而攻击人。**

</div>

<div class="mt-5 text-xs opacity-60">
大协议正在 internalize 安全能力：聘请 CISO，不再只依赖外部审计公司。安全研究员社区对 AI 工具的使用程度不亚于攻击方。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-defender-advantage.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 人类因素：最薄弱的环节

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**社会工程的演变**

<div class="mt-3 text-sm leading-relaxed">

- Drift 攻击：攻击者花了**数月时间**建立信任，用的是**面对面**的社交工程
- 攻击者策略：**瞄准最低级别员工**——support agent 或 junior dev，而非 CEO
- 理由：高管每天收到大量可疑邮件，已经免疫；junior 员工更容易上当
- AI 让社会工程变本加厉：语音克隆、深度伪造视频会议

</div>

</div>

<div>

**为什么钓鱼培训不够**

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
"社会工程太厉害了——它迟早会骗到你。正确的防御不是让每个人都偏执到不能工作，而是在协议和机器层面设置护栏，**假设人会被攻破**。"
</div>

<div class="text-xs opacity-60 mt-1">— Isaac 的核心论点</div>

<div class="mt-3 text-sm leading-relaxed">
Mike 补充：这在其他行业是**标准操作**——任何运行良好的公司都有纵深防御。数据泄露、勒索、黑函……Crypto 不是第一个面对这个问题的行业。
</div>

</div>

</div>

---

# 设计假设：人一定会犯错

<div class="mt-5 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**机器侧的护栏（不是人侧的培训）**

- **Rate Limits**：单笔交易不能清空 treasury
- **时间延迟**：重要操作不能即时生效
- **多签阈值**：任何一个被攻破的密钥不应导致全盘损失
- **异常监控**：链下实时检测 + 自动告警

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**"假设你的 treasury 管理员都被精准社会工程锁定"**

设计出发点应该是：

"如果我是管理数亿美元协议的 treasury 负责人，我应该**不能**在一笔交易里把全部资金转走。因为这是可能的——社会工程太强了。"

<div class="text-xs opacity-60 mt-2">
— Isaac 的原话精神：make the systems tolerant to human mistakes
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>Mike：</strong>"攻击者知道给我发钓鱼邮件没用。但给一个 support agent 发呢？——每个公司都需要流程和控制，确保即使有人被攻破，也无法升级权限拿下整个系统。"
</div>

---

---
layout: two-cols
---

# 纵深防御：五层防护

**假设每一层都会被突破**

<div class="mt-3 text-sm leading-relaxed space-y-2">

**Layer 1 → 代码审计 + AI 扫描**
部署前最后一道防线。但这不是终点——这只是起点。

**Layer 2 → 链上 Rate Limits**
即使攻击者控制了桥，单笔/单日资金流出硬上限。

**Layer 3 → 链下异常监控**
24/7 实时检测不变量违规，如 "突然 mint 了 10 亿代币"。

**Layer 4 → 紧急暂停**
发现异常 → 一键冻结 → 阻止进一步损失。

**Layer 5 → 安全委员会追回**
类似 Arbitrum 的操作——冻结后通过委员会投票追回被攻击资产。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./defense-layers.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: two-cols
---

# "Code is not law"

<div>

**Mike 的立场：**

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed italic">
"This principle that code is law and you wrote the code wrong so fuck you is just stupid. That's just not how human organizations operate."
</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
"Code is not law. Law is ambiguous by design. Ambiguity is built into legal code for cases that are subjective."
</div>

<div class="mt-4 text-sm">
**核心理念：** 需要纠错机制。应用程序的标准应该不同于区块链——后者才需要绝对的不可更改性，前者不需要。
</div>

</div>

::right::

<div>

<div class="text-lg font-bold mt-4">区块链 vs 应用</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>区块链（Bitcoin/Ethereum）</strong><br>
不可能强制升级网络。去中心化是物理特性，不是选择。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>DeFi 应用</strong><br>
几乎都保留了升级能力。去中心化是可配置的参数。应该有错误纠正机制。
</div>

</div>

<div class="mt-4 text-sm opacity-80">
Laura 的补充：人类有一种直觉性的对错判断。Circle 的问题在于律师想得太多，而忽略了简单的"什么是对的"判断。
</div>

</div>

---

# 纠错机制的实际案例

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Arbitrum：成功追回 $75M**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Circle：不冻结 $280M 被盗资金**

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-1">

<div class="p-3 rounded bg-green-50 bg-opacity-30 text-sm leading-relaxed">
安全委员会迅速锁定，追回资产并返还受害者。<br><br>
<strong>零争议。</strong>Mike 认为这是模范案例——应该有健全的机制在必要时这样做。
</div>

<div class="p-3 rounded bg-red-50 bg-opacity-30 text-sm leading-relaxed">
事件发生在数小时内，Circle 本可以轻松冻结但选择不动。<br><br>
<strong>Circle 的立场：</strong>"我们回应法院命令。"但法院不可能在区块链时间内做出反应。<br>
<strong>Tether 的做法更接近正确答案：</strong>能快速行动，如果犯错可以逆转。100 次中 1 次误冻是合理的代价。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>Mike 的建议：</strong>与其忽视法院，不如让法院命令能在 10 分钟内完成——有 24/7 运作的法院。
</div>

---

# 桥风险：假设每个组件都可能被攻破

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**最佳实践（Mike 的 EtherFi 方式）：**

<div class="mt-3 text-sm leading-relaxed space-y-2">

- **Rate Limits on everything** — 跨链转账、预言机价格变化、L1↔L2 资金流
- **假设 L2 可能被完全攻破** — 节点被接管，开始生产任意区块
- 即使 L2 沦陷，**Layer 1 的资金不受影响**
- 当用户抱怨转账太慢时回答：**"这也在保护你"**

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
"我们代码的假设：L2 可能被完全攻破。在这种极端场景下，损失必须被限制在几百万元以内。" — Mike
</div>

</div>

<div>

**Isaac 的警告：桥风险评级**

<div class="mt-3 text-sm leading-relaxed">
Kelp 事件后，一家负责评级桥资产的风险机构竟然说：
</div>

<div class="mt-2 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">
"我们的工作范围不包括评估桥风险"
</div>

<div class="mt-3 text-sm leading-relaxed">
如果花五分钟看桥的配置，就会发现它是 **1-of-1** 系统——这种资产根本不应该被允许作为抵押品借贷。
</div>

<div class="mt-3 text-sm">
<strong>优先使用原生资产，而不是桥接资产。</strong>如果必须用桥，看配置、看最大潜在损失、设借贷上限。
</div>

</div>

</div>

---

# 遏制传染：隔离市场 vs 统一池

<div class="grid grid-cols-2 gap-6 mt-5">

<div>

**Kelp → Aave 的传染链：**

<div class="mt-3 text-sm leading-relaxed">

- 桥被攻破 → 无限 mint → 抵押品价值崩塌
- Aave 的统一借贷池结构使得**单一抵押品问题传播到整个协议**
- **作者概括：** 事后看，该资产的借贷参数设置不当

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"Aave 有能力做资产隔离——只是这次参数没设对。Morpho 的隔离市场天生更安全，但不是唯一的解决方案。" — Isaac
</div>

</div>

<div>

**两种模式的对比：**

<div class="mt-3 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Morpho 隔离市场</strong><br>
每个资产独立隔离，一个出问题不影响其他。更安全但也更碎片化。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>Aave 统一池</strong><br>
资金效率更高，可组合性强。但需要正确的参数设置（借贷上限、风险评级、桥风险评估）。
</div>

</div>

<div class="mt-3 text-sm">
<strong>不是非此即彼：</strong>可以在统一池内通过参数做资产隔离。关键是**设对参数**——而这正是很多攻击的根源。
</div>

</div>

</div>

---

# EtherFi 的安全实践：从原则到架构

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>跨所有桥的 Rate Limits</strong><br><br>
<span class="text-xs opacity-70">任何跨链转移都有硬上限。用户偶尔抱怨——但这也保护了他们。</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>预言机 Rate Limits</strong><br><br>
<span class="text-xs opacity-70">单次价格变化的幅度有上限。即使预言机被操纵，影响有限。</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>LayerZero 桥：3-of-3</strong><br><br>
<span class="text-xs opacity-70">拒绝使用 1-of-1 配置。即使 3-of-3 被攻破，rate limits 也会 kick in。</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>链下实时监控</strong><br><br>
<span class="text-xs opacity-70">任何不变量违规时立即检测 + 通知。不是部署后就放手。</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>紧急暂停机制</strong><br><br>
<span class="text-xs opacity-70">24 小时暂停 → 安全委员会投票 → 追回资产。参考 Arbitrum 模式。</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>质押资产不在合约内</strong><br><br>
<span class="text-xs opacity-70">质押资金在 Ethereum Beacon Chain 存款合约中。只有流动性缓冲池承担风险。</span>
</div>

</div>

<div class="mt-5 text-center text-sm">
"EtherFi 的架构——加上停止去中心化表演——可能让 self-custody 的 DeFi 资产<b>比存在中心化交易所更安全</b>。后者可能在破产中被抵押。" — Mike
</div>

---

# Security Alliance 认证：让 OpSec 可见

<div class="grid grid-cols-2 gap-6 mt-5">

<div>

**当前的问题：**

<div class="mt-3 text-sm leading-relaxed">

- 普通用户**不可能**自己去 Etherscan 查 multisig 配置、评估 OpSec
- 有一些工具（L2Beat、Herd 区块浏览器）可视化了控制结构，但门槛很高
- "在我投钱拿 3-5% 收益之前，我得做一次 OpSec 审计"——这不可行

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"你不能指望每个用户都去检查每个协议的 multisig 门槛和参数管理。需要有机构来做这件事并公开结果。" — Isaac
</div>

</div>

<div>

**Security Alliance 的方案：**

<div class="mt-3 text-sm leading-relaxed">

- 5-6 家审计公司正在合作制定**统一的 OpSec 成熟度标准**
- 对协议的检查将不仅包括代码，还包括：
  - Multisig 管理方式
  - 参数和风险控制流程
  - DNS / DevOps / SDK 安全
- 通过认证的协议将获得**密封认证（sealed certifications）**
- 用户在看到协议时能够判断：**有人至少看过了**

</div>

<div class="mt-3 text-xs opacity-60">
类似于智能合约审计报告的普及化——但范围扩展到操作层面的全面安全检查。
</div>

</div>

</div>

---

# 普通用户可以做什么

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

<div class="text-3xl mb-2">🔐</div>

### 使用硬件钱包

<div class="text-xs opacity-70 mt-2">
不要用热钱包存你不愿失去的资产。硬件钱包或大型可信托管人。Mike 偏好硬件钱包。"这会解决你 75% 的问题。"
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">

<div class="text-3xl mb-2">🏛️</div>

### 只碰蓝筹协议

<div class="text-xs opacity-70 mt-2">
除非你是极端 power user，否则只和 DeFi 中大概 10-15 个蓝筹协议交互。不要碰新协议。Mike："一个 extreme power user 都不足以描述需要的专业程度。"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

<div class="text-3xl mb-2">✅</div>

### 寻找安全认证

<div class="text-xs opacity-70 mt-2">
关注 Security Alliance 等机构推出的认证。看协议是否有人检查过 multisig 管理、参数流程、运维安全——不只是代码审计报告。
</div>

</div>

</div>

<div class="mt-5 text-center text-sm opacity-70">
Mike 的总结：对于普通用户，"不碰新协议"和"用硬件钱包"这两条，能防住绝大多数风险。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
"This principle that code is law and you wrote the code wrong so fuck you is just stupid. That's just not how human organizations operate."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike Silagadze，CEO of EtherFi</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
"Code is not law. Law is ambiguous by design. Ambiguity is built into legal code for cases that are subjective."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike Silagadze</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
"I don't think a blanket statement that everything in DeFi is high risk is correct. I think that's fundamentally wrong and it puts a very naive amount of faith into tradfi."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike Silagadze</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
"It's embarrassing the level of operational security failures that keep happening... 90% or more of the time the failures are pretty embarrassing, easy to avoid things."
<div class="text-xs opacity-60 mt-1 not-italic">— Isaac Patka，Certifications Lead at Security Alliance</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
"Assume that any component, any service that you depend on, is possible that it will be compromised and fail — and just design for that."
<div class="text-xs opacity-60 mt-1 not-italic">— Mike Silagadze</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
"The right defenses are not just make everybody so paranoid all the time that they can't do their jobs. The right defenses are putting in the guardrails on the protocol and code side and the machine side, assuming that the human factor is fallible."
<div class="text-xs opacity-60 mt-1 not-italic">— Isaac Patka</div>
</div>

</div>

---

---
layout: end
---

# 谢谢观看

<div class="text-sm opacity-60 mt-4">
完整对谈：
</div>
<div class="text-sm mt-2">
Unchained — Is 'All of DeFi Unsafe'? What You Need to Know About Holding Assets Onchain
</div>

<div class="text-xs opacity-40 mt-6">
Isaac Patka & Mike Silagadze · Hosted by Laura Shin · 2026 年 5 月
</div>
