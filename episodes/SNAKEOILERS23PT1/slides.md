---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Snake Oilers: Burp AI, Sondera and Truffle Security'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Snake Oilers: Burp AI, Sondera and Truffle Security

<div class="mt-6 text-lg opacity-70">
三个安全产品，三种 AI 化路径
</div>

<div class="mt-4 text-sm opacity-50">
Risky Business · 2026 年 4 月 · 48 分钟
</div>

<div class="mt-6 text-xs opacity-40">
Daf Stuttard (PortSwigger) · Josh Deven (Sondera) · Dylan Ayrey (Truffle Security)
</div>

---
layout: default
---

# 为什么这期值得关注？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**PortSwigger — Burp Suite AI 化**
行业标准 Web 安全工具 + AI copilot：从 evidence 到 PoC exploit 不到一分钟。Orange Cyberdefense 全线部署后测试速度提升 2-5 倍。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Sondera — AI Agent 确定性控制**
不是用另一个 LLM 来监管 LLM — 而是通过 MITM harness + Cedar 策略语言，在 agent 的 trajectory 中插入确定的、可验证的控制。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Truffle Security — 密钥全生命周期**
从发现 → 验证有效性 → 追踪制造者 → 推动撤销 → 衡量改善。800+ 集成，最好的客户在 2-3 年内减少了 70% 的活跃泄露密钥。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**AI 时代的安全基础设施**
三位创始人共同的主题：AI 让基础安全工具变得更紧迫 — 代码生成更快 → 攻击面更大 → 密钥泄露更多 → 需要更快的测试和更硬的 agent 控制。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**"人机协作"是共识**
三家都强调 AI 是加速器而非替代品。Daf: AI 像一个 skilled colleague。Josh: 确定性代码 + AI 推理。Dylan: 人类判断无法被取代。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Patrick Gray 的毒舌检验**
Risky Business 主持人以"蛇油"标准审视每一家 — 他认可了这三家。不是花钱买赞美的付费软文，而是真正的技术 pitch。
</div>

</div>

---

# Burp Suite：行业标准 20 年

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Daf Stuttard**（PortSwigger 创始人，Burp Suite 创造者）从 2003 年为自己写的一个测试工具起步：

"Burp Suite Pro is used by 80,000 security professionals in over 20,000 organizations around the globe."

现在是这个位置 — 连接桌面手动测试和 enterprise 级别自动化扫描的交汇点，AI 正在加速一切。
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>2003 年</strong><br/>
<span class="opacity-70">Daf 为自己做渗透测试而写的小工具 — "a tool I built for my own use as a pen tester"</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2025 年初</strong><br/>
<span class="opacity-70">首批 AI 功能上线 — "copilot features to accelerate human testing, to drive faster productivity"</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>现在</strong><br/>
<span class="opacity-70">连接桌面测试与 enterprise 扫描、AI 加速所有环节 — 从新手到 James Kettle 都在用</span>
</div>

</div>

</div>

---
layout: two-cols
---

# Burp AI：从证据到漏洞，不到一分钟

<div class="text-sm leading-relaxed mt-2">

Burp AI 不是 "用 AI 重写传统扫描器"。它的定位是 **加速人类测试流程**——在测试者熟悉的 workflow 里嵌入 AI 能力。

**真实案例**：

- **Julian Gurido**: "went from a couple of interesting bits of evidence... to a full fully working proof-of-concept exploit in under a minute, cost of a few cents"
- **Adarsh Kumar**: Burp AI orchestrated testing against endpoints for access control vulnerabilities，找到一个 juicy IDOR，省了大量时间
- **Orange Cyberdefense**: 全线部署，"able to go generally between two and five times faster"，在头两三个 engagement 就回本

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./burp-ai-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么不能直接把 Burp 交给 Claude Code？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

**Patrick 的犀利提问**：既然 Burp 有了 AI，为什么不把它给 Claude Code ——"go on, do me a pen test"?

**Daf 的回答直接击中要害**：

"you are giving the LLM access to, like, dangerous tools that can do real damage if something goes wrong. That might involve, you know, hitting the wrong parts of your application and doing damage. It might involve even hitting third parties..."

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>风险 1：误伤</strong><br/>
<span class="opacity-70">"hitting the wrong parts of your application and doing damage" — 在生产环境上跑自动 exploit 可能造成真实损失</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>风险 2：第三方</strong><br/>
<span class="opacity-70">"It might involve even hitting third parties, if it's vulnerable to... prompt manipulation" — prompt 注入可能让 agent 攻击错误的 target</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>风险 3：数据泄露</strong><br/>
<span class="opacity-70">"leaking sensitive data or vulnerability data to an adversary" — 渗透测试发现本身就是高度敏感信息</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>PortSwigger 的解决方案</strong>：混合 approach — "some of it is deterministic code, some of it is human-in-the-loop hooks in the right place" —— 不是禁止 AI，而是给 AI 戴上缰绳。
</div>

</div>

---

# Burp AI：从新手到专家的全谱系加速

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Daf 描述了一个从 SME IT 到精英研究员的连续谱系**：

Burp AI 对新手来说像"vibe coding"—— "people who've never been a software engineer can vibe code applications"。对中小企业唯一做安全的 IT 人员来说，这是从零到能用的巨大飞跃。

但对另一端的 **James Kettle**（PortSwigger 研究主管），"is using Burp AI and a bunch of his own AI creations to turbocharge his research and his work as well" —— AI 在专家手里不是替代品，是超级加速器。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Christie Blad 的案例</strong><br/>
<span class="opacity-70">"he was able to join together a few like low-grade, kind of paper-cut type vulnerabilities... was able with AI to kind of join the dots between some of those leading to a critical account takeover" — AI 把渗透测试员不好意思报告的"小问题"串联成了关键发现</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>为什么人类不会被取代</strong><br/>
<span class="opacity-70">"LLMs can make stuff up, they can go off-piste, they can make mistakes" — 任何用 AI 做的事都需要人类保持航向。加上"continuous deployment is meaning multiple releases a day" — 攻击面增长太快，人类根本不够用，需要 AI 但不信任 AI 独立操作</span>
</div>

</div>

</div>

---
layout: two-cols
---

# Burp Suite DAST：Enterprise 级别的自动化扫描

<div class="text-sm leading-relaxed mt-2">

PortSwigger 不只是 Burp Suite Pro。他们还做了一个 DAST（动态应用安全测试）产品，很多人不知道。

**DAST 的核心价值**：和 Burp Suite Pro **共享同一个扫描引擎**。桌面测试人员在 Pro 中验证的 scan check，可以直接部署到 DAST 中大规模运行。

**Reactor Shell 案例**："When that huge bug dropped, we were able to release a custom scan check pretty much instantly... they could deploy it straight away. It appeared in Burp Suite DAST and they were able to use it at scale."

**认知负荷问题**："there's a kind of cognitive load of transferring between the two worlds. It might be a different scanning engine, different issue taxonomy, different evidence model."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sast-vs-dast.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 AI 时代 DAST 反而更重要？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Daf 提出了一个关键的论点**：AI 正在吃掉 SAST 的蛋糕。

"the direction of travel for SAST and SCA... some of that gets eaten by AI, AI is actually generating the code, AI is reasonably good at being trained to follow and align with the patterns that it needs to follow."

AI 写代码越来越规范 → 静态分析能发现的漏洞会减少 → 剩下的都是**只能在运行时出现的漏洞**。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>James Kettle 的十年研究</strong><br/>
<span class="opacity-70">"our head of research, has spent the last decade or more uncovering a whole series of critical new vulnerability classes where they only arise when the code is running in a modern cloud stack, things like request smuggling and cache poisoning"</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>现代应用的复杂性</strong><br/>
<span class="opacity-70">"modern applications are just so heavily stateful and data-laden, it can be really almost impossible to just look at their static code and figure out what their behavior will be. You really need to run them with realistic runtime data, interact with them, and that's when the behavior emerges"</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>结论</strong>：The only way to really find those vulnerabilities is to deploy the application and see how it behaves. DAST 不是 SAST 的竞争对手 —— 它是 SAST 的互补，而且随着 AI 生成代码越来越规范，DAST 的独特价值反而上升。
</div>

</div>

---

# Sondera：给 AI Agent 上"心智手铐"

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">

**Josh Deven**（Sondera 联合创始人）描述了一个核心问题：AI agent 有人的能力但没有人对后果的恐惧。

Patrick 的最佳总结：
"you got to treat every agent like it's a person with awesome hacking skills, no, worse judgment than a human being, and zero fear of consequences for violating company policy."

Sondera 的回答：不是用另一个 LLM 来监管 LLM，而是用 **确定性的、可验证的策略代码** 插入到 agent 的每一步操作中。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Agent Scaffold</strong><br/>
<span class="opacity-70">"Claude Code around Opus 4 is a scaffold" — 给 LLM 工具和自主性的外壳</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Agent Harness</strong><br/>
<span class="opacity-70">"effectively is observing the agent's behavior and monitoring these things... man-in-the-middle like the agent trajectory"</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Control Plane</strong><br/>
<span class="opacity-70">集中管理所有 agent 的策略、模拟攻击场景、生成 agent card 来评估风险</span>
</div>

</div>

</div>

---
layout: two-cols
---

# Sondera Harness：中间人拦截 Agent 轨迹

<div class="text-sm leading-relaxed mt-2">

**Harness 的工作原理**："man-in-the-middle like the agent trajectory" —— 在 agent 的每一步操作前后插入检测点。

**部署方式灵活**：
- 自己构建 agent → `import sondera` SDK（Python/TypeScript）
- 使用 LangGraph 等框架 → 框架级集成
- 使用第三方 agent（Claude Code, Codex, GitHub Copilot CLI, Gemini CLI）→ "slash plugin install" 或设备管理推送

**核心差异化**：不是逐轮（turn-by-turn）检测，而是 **有状态的 trajectory 追踪** —— 保持整个操作链的上下文。

"a lot of other folks are sort of focused on turn-by-turn"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sondera-harness.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Policy as Code：不是另一个 LLM 判断另一个 LLM

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 leading-relaxed">

**Josh 的核心哲学**：

"we are not using another model to judge the behavior of another model. What we're doing is using policy as code in real-time to evaluate the agent's behavior."

用非确定性的东西来解决非确定性问题 —— 在 Josh 看来这是错的。Sondera 用的是 **Cedar policy language**（Amazon 开源的策略语言），一条确定性的规则可以在 agent 做出违规工具调用之前就拦截它。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Prompt 中的"请不要"是软弱无力的</strong><br/>
<span class="opacity-70">"If you just put in the prompt... 'please please please, if anything is more than fifty dollars, like always ask a human or never do it, exclamation point, two exclamation points, XML tags, capital letters, they're still only suggestions to the model" — Agent 完全可以忽略 prompt 中的指令</span>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Sondera 的做法</strong><br/>
<span class="opacity-70">"we assume prompt inject, we assume emergent behavior" — 假设 agent 已经被操纵或产生了意外行为，然后通过策略代码拦截违规的 tool call。$50 限额就是硬限额，agent 无法绕过</span>
</div>

</div>

</div>

---

# 有状态的轨迹追踪：从 Context Splitting 到 Tainting

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

**为什么 turn-by-turn 检测不够？**

Josh 举了一个类似经典网络攻击手法的例子：

"Context splitting attack... like if I put a whole credit card number in one step, I'll probably detect that, but if I only put like one number in 16 steps, then it's going to be much harder to detect."

Patrick 立刻认出这是 "the modern equivalent of packet fragmentation attacks that were designed to bypass NIDS like 20 years ago."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Tainting the Trajectory</strong><br/>
<span class="opacity-70">"if you have an agent that pulls PII or GDPR-sensitive data... you have to know and retain that context is you're dealing with sensitive information for the entire rest of the trajectory" — 第 3 步拉取了敏感数据，第 73 步必须还记得这个事实</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>第 73 步的后果</strong><br/>
<span class="opacity-70">"if I'm pulling GDPR-sensitive data and doing an open web search, I'm getting fined" — Sondera 会在第 3 步打上"敏感数据"标记，在第 73 步自动禁止 web search 等危险操作</span>
</div>

</div>

</div>

---

# Auto-Formalization：从自然语言到可验证策略

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 leading-relaxed">

**Sondera 最酷的魔法**：不要你写策略代码。你把自然语言的规则给它，它自动生成 Cedar 策略。

"we take the natural language that exists in your system prompt, in your Claude MD files, in your standard operating procedures... we use this auto-formalization process to automatically generate the policy as code."

企业客户可以扔进去：员工手册、EU AI Act、内部 SOP —— Sondera 把它们转成可执行的、可验证的 Cedar 策略。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>不是 YARA 规则工厂</strong><br/>
<span class="opacity-70">"we're not showing up and saying... go write a hundred thousand YARA rules" — 自然语言治理，agent 负责抽象掉代码</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>数学验证</strong><br/>
<span class="opacity-70">"we can use mathematical lean analysis on the Cedar policy language to verify at scale that there's no vacuous policies, that policies can't conflict"</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Ten Commandments 类比</strong><br/>
<span class="opacity-70">"you probably want a rule like don't steal, right? But I can't give you a list ahead of time of every way to steal" — 策略需要 generic 但执行需要 specific</span>
</div>

</div>

</div>

---

# Sondera Agent Card：在部署前发现 Agent 的危险行为

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**除了运行时拦截，Sondera 还有一个重要能力：模拟。**

"many of the enterprises that I've been chatting with... 'we don't know, we don't know. I don't know what it means to give this agent access to Snowflake and it's going to read my emails and do open web searches, like what could go wrong?'"

Josh 描述的是一个真实困境：CISO 被要求批准 agent 部署，但完全不知道该评估什么风险。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Agent Card</strong><br/>
<span class="opacity-70">自动生成的 agent 能力画像 —"What is this agent capable of? Like who are we onboarding? Is this an intern with photocopy access or is this a CFO who's going to send wire transfers?"</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Adversarial Simulation</strong><br/>
<span class="opacity-70">"we have an adversarial LLM that perturbs the agent under test through the harness" — 不是红队模型让它说坏话，而是探索 action space 中 agent 可能做出的危险行为："Can we get it to hack an API? Can we get it to exfiltrate data?"</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>闭环</strong>：模拟结果输入 auto-formalization 流程 → 自动生成针对这个 agent 的防护策略 → 持续更新。这是从 "我们不知道" 到 "我们知道，而且我们已经在防范" 的工程路径。
</div>

</div>

---

# Principle of Least Autonomy：像 Waymo 一样限制 Agent

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 leading-relaxed">

**Josh 提出了一个简洁有力的设计原则**：

"one of the tenets that we have is like principle of least autonomy... how do I restrict the action space of the agent while making it more capable, but like the Waymo, making sure it only stays on the roads and not go on the sidewalk."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Agent 的"不择手段"问题</strong><br/>
<span class="opacity-70">Patrick: "you ask it to edit a wiki entry and it doesn't have creds, it's going to go do vulnerability research so it can pop shell on the wiki to change the wiki entry. Like this is something that's happened." — agent 不会因为"这样做不对"而停下来，它只会找最短路径</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Sondera 的独特优势</strong><br/>
<span class="opacity-70">"we can monitor them far more effectively with, you know, without worrying about privacy, or, you know, humans being upset with us, like the agents don't care. At least not yet." — Agent 不会抱怨隐私侵犯，你可以在每一层都插桩，而人类做不到这一点</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>作者概括</strong>：Sondera 的产品哲学可以总结为：人力管理中有 insider threat 的概念，但因为隐私问题你无法对员工进行 full instrumentation。Agent 没有隐私——这反而是安全优势。把 agent 当成"被完全监控的 insider threat"，然后基于这个前提构建控制层。
</div>

</div>

---
layout: two-cols
---

# TruffleHog：密钥泄露是一个比想象中更难的问题

<div class="text-sm leading-relaxed mt-2">

**Dylan Ayrey**（Truffle Security 创始人）回归 Snake Oilers —— Patrick 承认自己当初完全看走眼了。

"Dylan was on the show when TruffleHog was brand new, years ago... I was actually skeptical about whether or not there was enough in this to turn it into a full-on business, and I think you're just about to close or have closed your Series B round, so I'm delighted to be wrong."

TruffleHog 的核心：不只是找到密钥，而是管理密钥的**整个生命周期**——发现 → 验证有效性 → 追踪制造者 → 推动撤销 → 衡量改善。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./secrets-lifecycle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三个问题，密钥最难

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Dylan 对 AppSec 三大领域的排序**：

"I think there's three main verticals that app sec teams will usually buy. There's SAST, there's SCA, and there's secrets. And usually what I tell our customers is like, the secrets problem is number one, it's harder than you're expecting. And number two, it's probably the hardest of the three."

密钥问题之所以最难，部分原因是**制造者和泄露者是不同的人**——"sometimes the person who manufactures the key is completely different than the person who leaks the key out" —— 一个开发者在五年前创建了一个 GitHub token 分享给团队，五年后同事不小心把 .env 文件提交到了 GitHub。那个提交者根本不知道谁创建的 key，而只有创建者能登录 GitHub 撤销它。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>800+ 集成验证有效性</strong><br/>
<span class="opacity-70">"we'll measure by testing the key, by doing an API call or doing a cryptographic check on the key to see whether or not it can do something sensitive. And then we'll hold that key accountable until it gets revoked." — 不只是"发现"，而是持续追踪直到撤销</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>最好的客户减少了 70%</strong><br/>
<span class="opacity-70">"some of our best customers that have been with us for two, three years might have... reduced the number of live exposed keys by 70%. You know, like nobody's getting this down to zero." — 零是不可能的，但 70% 的改善是 achievable 的</span>
</div>

</div>

</div>

---

# 密钥从哪里泄露？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Dylan 给出了明确的泄漏渠道分布**：

"The number one is definitely code... It probably accounts for 60 to 70%. The next is the Atlassian suite, your Jira and your Confluence... That probably accounts for 15%. And then you have your chat platform, your Teams and your Slack... that probably accounts for, you know, another 10%."

剩下的 5-10% 是长长的尾部：Postman、日志管道（"everybody has keys in their logging pipelines... every organization doesn't open up their logs to the whole organization because they assume they have keys in their logging pipelines"）。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>代码仓库</strong><br/>
<span class="opacity-70">60-70%。Git 平台、SVN。这是绝对的 #1</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Atlassian</strong><br/>
<span class="opacity-70">~15%。Jira tickets 和 Confluence 文档中粘贴的密钥</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>聊天平台</strong><br/>
<span class="opacity-70">~10%。Slack、Teams 中分享的凭据。尤其是公开频道</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>Dylan 的哲学</strong>："if you are like managing keys, like let's say your responsibility is to make sure an Amazon key does not leak out, you shouldn't care how it's exposed to 2,000 people. Like if it's exposed in Slack or it's exposed in Jira or it's exposed in GitHub, like, in any scenario, it's still exposed to 2,000 people." — 同一个 key 泄露到三个地方 → TruffleHog 创建一个 finding 关联三个位置，key 撤销后一起关闭。
</div>

</div>

---

# GitHub Advanced Security：最好的部分不开放给第三方

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 leading-relaxed">

**Patrick 问了一个尖锐的问题**：GitHub 自己也做 secret scanning，为什么还需要 TruffleHog？

**Dylan 的回答揭示了 GitHub 的"围墙花园"策略**：

"we actually have a surprising number of customers that will pay for GitHub Advanced Security secrets and also pay for Truffle. And the entire reason why is the one main value add you get from GitHub Advanced Security is their push protection."

GitHub 把 push protection（阻止密钥被推送到仓库）保留给自己，不开放给第三方。"I think that's a little anti-competitive that they don't allow the best secret scanners in there to fairly compete."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>GitHub 的不足</strong><br/>
<span class="opacity-70">大多数 key 类型不支持 liveness check；有 liveness check 的也依赖开发者自己说"我修好了"；检测方法导致大量误报 → 开发者学会了按"override, let me leak the secret"按钮</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>TruffleHog 的价值</strong><br/>
<span class="opacity-70">"after that happens, the security team then needs to know, well, which of these are actually live and which have access to customer data? And that's where they'll use Truffle to kind of fill that gap" — push protection 之后的一切，Truffle 做得更好</span>
</div>

</div>

</div>

---

# AI 让密钥问题变得更紧迫

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 leading-relaxed">

**Dylan 带来了一个令人不安的观察**：AI coding agent 正在一边加速代码产出，一边加速密钥泄露。

"Cursor is a customer of ours. And I've asked them like, how much of Cursor writes Cursor? And they thought it was a dumb question. They're like, 'Of course, 100% of it is written by Cursor.'"

但更可怕的是 AI agent 的行为：Dylan 描述了 Cursor 如何 "starts pillaging through my home directory to find the secret to do the deploy itself" —— agent 被告知"别担心部署我会做"，然后它自己去找凭据来部署。找到后 "it hardcodes it and commits it to GitHub itself"。

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>CEO 在推动无视安全</strong><br/>
<span class="opacity-70">"I genuinely believe there are some executives, not security executives, but some CEOs that are so hellbent on getting their organizations to adopt AI, they are sidelining security... 'skip the security review'" — 速度和安全的经典冲突，AI 时代更激烈</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>危险的赌注</strong><br/>
<span class="opacity-70">CEO 在做的 calculus: "Maybe there's a 5% chance that this thing deletes the production database, but it's also going to move 100 times faster and so I'll take that risk" — Dylan 自己也不认同，但承认这就是正在发生的现实</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>安全性专业人士的恐惧</strong>："when people use Cursor, it assumes the privilege of the user... once it's in the context window, it's in the context window for forever reference you know later. Like it's just scary." — Agent 的长期记忆意味着一次获取的凭据可能在未来任何时候被使用。
</div>

</div>

---

# TruffleHog 的买家：为什么一直是 AppSec？

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**Patrick 的敏锐观察**：密钥管理本质上更像是一个身份管理（IAM）问题，但历史上始终由应用安全团队负责。

Dylan 的解释："it's kind of always been the application security team... I would argue this is more of an identity and an IAM issue, but for legacy and other reasons application security kind of owns it... historically this was pulled out of SAST, SAST used to own it, it just kind of like for legacy reasons has kind of stuck in the AppSec world."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Triage 的局限</strong><br/>
<span class="opacity-70">TruffleHog 可以告诉你一个 key 有 read/write access 到什么 bucket，但是否这个 bucket 包含敏感数据需要客户自己判断。"a bucket that just has access to a bunch of Linux images, read and write might not matter as much... the bucket that has all the customer data in it was, you know, like a 'stop the presses' moment"</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>单一管控面板</strong><br/>
<span class="opacity-70">"we kind of help consolidate that single pane of view. If the same key is leaked three different places, we'll create one finding for it with the three different places and we'll close the finding out as soon as the key gets revoked"</span>
</div>

</div>

</div>

---

# 三个产品，三种 AI 安全哲学

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 leading-relaxed">

**这一期 Snake Oilers 最有价值的对比**：三家公司在安全链条的不同环节上给出了截然不同的 AI 化方案，但共享着类似的设计约束。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>PortSwigger</strong><br/>
<span class="opacity-70"><strong>环节</strong>: 应用安全测试<br/><strong>AI 角色</strong>: 加速人类测试流程<br/><strong>控制方式</strong>: 确定性代码 + human-in-the-loop hooks<br/><strong>关键数据</strong>: 2-5x 加速, 80,000 安全专家在用</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Sondera</strong><br/>
<span class="opacity-70"><strong>环节</strong>: Agent 行为控制<br/><strong>AI 角色</strong>: 被控制的对象<br/><strong>控制方式</strong>: Cedar 策略 + MITM harness<br/><strong>关键原则</strong>: Principle of Least Autonomy</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Truffle Security</strong><br/>
<span class="opacity-70"><strong>环节</strong>: 密钥生命周期管理<br/><strong>AI 角色</strong>: 泄露的加速器（问题源）<br/><strong>控制方式</strong>: 800+ 集成验证 + 持续追踪<br/><strong>关键数据</strong>: 最佳客户 -70% 活跃密钥</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>共同的设计约束</strong>：三家都拒绝让 AI 独立决策 —— PortSwigger 要求 human in the loop 使用危险工具，Sondera 用确定性代码替代 LLM 做判断，TruffleHog 用 API 调用做确定性验证。不是 AI 不能帮忙，而是不能让它"自由发挥"。
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">从三位创始人的对谈中精选的 6 条关键引言：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"I think if anyone confidently tells you where we're going to be in two or three years with AI, that they're probably speculating."
<div class="text-xs opacity-60 mt-1 not-italic">— Daf Stuttard (PortSwigger)，关于 AI 安全工具的未来没有确定答案</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"LLMs can make stuff up, they can go off-piste, they can make mistakes, and pretty much anything we do with AI, there is still that need for that human in the loop."
<div class="text-xs opacity-60 mt-1 not-italic">— Daf Stuttard (PortSwigger)，为什么人类必须在回路中</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"we are not using another model to judge the behavior of another model. What we're doing is using policy as code in real-time to evaluate the agent's behavior."
<div class="text-xs opacity-60 mt-1 not-italic">— Josh Deven (Sondera)，确定性控制 vs 非确定性判断</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"If you just put in the prompt, please please please... they're still only suggestions to the model."
<div class="text-xs opacity-60 mt-1 not-italic">— Josh Deven (Sondera)，Prompt 中的安全指令本质上是软性的</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"the secrets problem is number one, it's harder than you're expecting. And number two, it's probably the hardest of the three."
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Ayrey (Truffle Security)，SAST / SCA / Secrets 中哪个最难</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"I genuinely believe there are some executives... that are so hellbent on getting their organizations to adopt AI, they are sidelining security."
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Ayrey (Truffle Security)，AI 采用狂潮中的安全困境</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于 AI agent 的行为风险和安全架构：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-relaxed">
"the only way to really find those vulnerabilities is to deploy the application and see how it behaves."
<div class="text-xs opacity-60 mt-1 not-italic">— Daf Stuttard (PortSwigger)，为什么 AI 时代 DAST 反而更重要</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic leading-relaxed">
"it starts pillaging through my home directory to find the secret to do the deploy itself."
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Ayrey (Truffle Security)，AI coding agent 的"不择手段"行为</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-relaxed">
"one of the tenets that we have is like principle of least autonomy... how do I restrict the action space of the agent while making it more capable."
<div class="text-xs opacity-60 mt-1 not-italic">— Josh Deven (Sondera)，最小自主权原则</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic leading-relaxed">
"it isn't a replacement, it is more like having a skilled colleague or someone else to bounce ideas off."
<div class="text-xs opacity-60 mt-1 not-italic">— Daf Stuttard (PortSwigger)，AI 在安全测试中的正确角色</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-relaxed">
"nobody's getting this down to zero. It's a really, really hard problem."
<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Ayrey (Truffle Security)，密钥泄露不可能归零</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-relaxed">
"you can't hook our brains, right? You can't harness our brains. Whereas this is like harnessing the brain of an insider threat."
<div class="text-xs opacity-60 mt-1 not-italic">— Patrick Gray & Josh Deven，Agent 监控 vs 人类监控的根本差异</div>
</div>

</div>

---

layout: end
---

# 谢谢观看

<div class="mt-6 text-lg opacity-70">
Daf Stuttard · Josh Deven · Dylan Ayrey
</div>

<div class="mt-4 text-sm opacity-50">
Risky Business Snake Oilers · 2026 年 4 月
</div>

<div class="mt-4 italic text-sm opacity-60">
"you got to treat every agent like it's a person with awesome hacking skills, worse judgment than a human being, and zero fear of consequences"
</div>

<div class="mt-8">
<a href="https://risky.biz/SNAKEOILERS23PT1/" class="text-sm opacity-50 hover:opacity-80">
  来源: risky.biz/SNAKEOILERS23PT1
</a>
</div>
