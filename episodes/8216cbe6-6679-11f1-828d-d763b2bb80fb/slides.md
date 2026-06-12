---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why the AI Business Model Is Cracking and How Crypto Could Help Fix It'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Why the AI Business Model<br>Is Cracking

<div class="text-lg mt-6 opacity-70">
Tommy Shaughnessy · Founding Partner, Delphi Ventures
</div>

<div class="text-sm mt-12 opacity-50">
Unchained Podcast · June 2026
</div>

---

# Why This Episode Matters

<div class="text-sm opacity-60 mb-4">The AI industry is racing toward mega-IPOs, but the business model has a hidden crack.</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>40× Subsidy Gap</strong><br/>
AI subscriptions cost users $200/month but deliver $8K worth of API compute — a gap businesses are now discovering.
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>Enterprise Wall</strong><br/>
Uber, Microsoft, and others are cutting AI spend. "You can't token max anymore" is becoming the new corporate memo.
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Open Source Escape</strong><br/>
OpenRouter, Venice, Together AI offer 80-90% frontier quality at 1% the cost. Switching is one keystroke away.
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>Chinese Wildcard</strong><br/>
DeepSeek, GLM, Kimi are all open source — but may go closed. If they do and aren't better, it helps US labs.
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>Price War</strong><br/>
OpenAI is slashing prices to hurt Anthropic's growth before its likely IPO. A strategic squeeze, not just competition.
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>Crypto as Fix</strong><br/>
Capital formation, censorship-resistant access, decentralized data — crypto's open-source ethos could fund what VCs can't.
</div>

</div>

---

# The Viral Thesis

<div class="mt-2 text-sm opacity-60">
Tommy Shaughnessy's tweet "The Most Basic Way AI Could Blow Up" got 2 million views.
</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg leading-relaxed">
"I just one day I can't understand how many people that is when you think about it."
<div class="text-xs opacity-60 mt-1 not-italic">— Tommy on the tweet going viral</div>
</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The observation</strong>: A Delphi analyst kept hitting the API spend wall — despite an Anthropic subscription being "hard to hit a cap on."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The math</strong>: Subscription = heavily subsidized. When businesses move to API, they immediately hit budget limits. <em>The economics don't work at scale.</em>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>The vindication</strong>: Citadel Securities published a similar analysis titled "Tokenomics" — the enterprise spending slowdown is real and visible to multiple observers.
</div>

</div>

---
layout: two-cols
---

# The 40× Subsidy Gap

<div class="text-sm opacity-60 mb-3">Why businesses are suddenly shocked by their AI bills</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**ChatGPT / Anthropic subscription**

$200/month — "you get a ton of usage ... hard to hit a cap"

Heavily subsidized to acquire users. Revenue growth → fundraising → bigger models.

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**Same usage via API**

~$8,000/month — "once you shift from a subscription to an API model, you hit a wall really quick on spend"

The real economics. Enterprises are making this transition right now.

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Tommy's analogy</strong>: "the subscriptions are subsidized by about forty X versus what you get at the API."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-cost-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Businesses Are Hitting the Wall

<div class="text-sm opacity-60 mb-4">The enterprise AI spending crunch is no longer theoretical</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">
<div class="text-3xl font-bold text-red-600 my-2">Uber</div>
<div class="text-xs opacity-70">Cut AI spending</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">
<div class="text-3xl font-bold text-red-600 my-2">Microsoft</div>
<div class="text-xs opacity-70">Cut AI spending</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200 text-center">
<div class="text-3xl font-bold text-orange-600 my-2">"A Lot"</div>
<div class="text-xs opacity-70">Other companies realizing it's "just too expensive"</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200 text-center">
<div class="text-3xl font-bold text-yellow-600 my-2">Wall</div>
<div class="text-xs opacity-70">API spend limits hit far faster than expected</div>
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Tommy's quote</strong>: "I think these enterprises are starting to tell their employees you can't token max anymore."
</div>

<div class="mt-2 text-sm opacity-60 leading-relaxed">
This is a fundamental shift. AI went from "unlimited included" to "pay per token" — and the landing is rough.
</div>

---

# The Open Source Escape Route

<div class="text-sm opacity-60 mb-3">Why pay $8K when you can pay $80 for nearly the same thing?</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
<strong>Frontier Labs</strong><br/>
OpenAI · Anthropic<br/>
$8K/mo · 100% quality<br/>
<span class="text-red-600">Enterprises hitting spend wall</span>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>Open Source Inference</strong><br/>
OpenRouter · Venice · Together AI<br/>
Fireworks · Based · Cordele<br/>
<span class="text-green-600">$80-800/mo · 80-90% quality</span>
</div>

</div>

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The key insight</strong>: "get your same intelligence for one tenth to one one hundredth the cost"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Switching is trivial</strong>: "It's very easy for most people to switch." Hermes Agent lets you toggle models with one keystroke.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Even privacy is commoditized</strong>: OpenRouter offers private models. Venice runs models in TEEs with end-to-end encryption. The "enterprise privacy" moat is gone.
</div>

</div>

</div>

---
layout: two-cols
---

# The Escape Route Visualized

<div class="text-sm opacity-60 mb-3">Enterprise AI spend is leaking from frontier labs to open source</div>

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The squeeze</strong>: Enterprises that transition from subscription to API discover the real cost — and immediately look for cheaper alternatives.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>The pull</strong>: Open source inference providers offer 80-90% of frontier quality at 1-10% of the cost. The quality gap is shrinking.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The result</strong>: "when you put those two together, it kind of makes sense that usage is shifting"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./escape-route.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Flywheel Under Threat

<div class="text-sm opacity-60 mb-3">The AI industry's growth model assumes uninterrupted upward trajectory</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>The flywheel</strong>: Revenue → fund GPUs → train better models → more users → more revenue. "Everything's been priced to perfection recently and it's been up and to the right."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>What happens if revenue slows</strong>: "if people churn off, revenue slows, if revenue slows, these companies' metrics and ability to raise capital slows, because they got to go to the debt market and say, hey, we might not get this revenue back"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>The debt market reality</strong>: AI companies have already been raising heavily. If they need to return to markets with a slowdown story, it gets harder.
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>作者概括</strong>: Tommy is not bearish on AGI long-term. He's pointing out a timing mismatch — the short-to-mid term revenue model may not sustain the growth rates that current valuations price in.
</div>

---
layout: two-cols
---

# The Flywheel, Visualized

<div class="text-sm opacity-60 mb-3">Each arrow depends on the previous step. A crack anywhere breaks the cycle.</div>

<div class="space-y-2 mt-3 text-sm leading-relaxed">

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Revenue growth</strong>: Driven by enterprise adoption and API consumption
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Fund GPUs</strong>: Revenue funds the massive compute investment
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Train better models</strong>: More compute → more capable models
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>More users</strong>: Better models attract more users and developers
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The crack</strong>: Enterprises shift to cheaper open source → revenue growth slows → whole flywheel slows
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flywheel-crack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# IPO Dynamics: Low Float, High Stakes

<div class="text-sm opacity-60 mb-3">The mega-IPOs (SpaceX, OpenAI, Anthropic) have a structural quirk</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Short-term: Looks good</strong>

- Floats are low (sub-10% vs historical 10-20%)
- Passive capital and index funds are forced buyers
- Retail wants "AGI stocks"
- "I think they do well out of the gate"
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>Medium-term: Gets tricky</strong>

- Public companies must disclose everything
- Payback periods, margins, growth rates all become visible
- "historically people have aped into these companies because of the stories and incredible technology with limited to no financials"
- If the enterprise spend thesis is right, numbers may disappoint
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Tommy's caution</strong>: "I'd be a little bit more wary as time goes on." The IPO pop may not last if the underlying economics show cracks.
</div>

---

# Chinese Open Source Models: The Unknown Variable

<div class="text-sm opacity-60 mb-3">DeepSeek, Kimi, MiniMax, GLM — all open source and improving fast</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Current strategy: Open source everything</strong>

Makes sense strategically — if you don't have frontier intelligence, release a close, free substitute to impact your competitors' margins and funding.

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>But there are rumblings of change</strong>

Alibaba open-sourced a model and the executive was fired the next day. GLM kept versions private before releasing. The pressure to capture value is growing.

</div>

</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Tommy's prediction</strong>: "I think the Chinese models may go closed source."

<strong>Why</strong>: They're spending heavily on training but getting no value flow back — no revenue from inference providers, no data flywheel from usage.

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>The irony</strong>: If China goes closed source but their models aren't better than Anthropic/OpenAI, it helps US labs — because "if everything's closed, you're just going to use us."
</div>

</div>

</div>

---

# Price War: OpenAI vs Anthropic

<div class="text-sm opacity-60 mb-3">The Wall Street Journal reported OpenAI is considering drastic price cuts</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Reason 1 — Enterprise reality</strong>: "OpenAI is lowering prices directly because of what we're seeing on enterprises spending too much money." If the public can see enterprise leakage, these companies see far more in their private data.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Reason 2 — IPO timing</strong>: "I think if Anthropic is probably going to IPO first. So you want to lower prices and eat into their growth and margins as much as you can before they go public. You want to make their numbers look as as bad as you can."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The implication</strong>: This isn't just normal competition. It's a strategic move to damage a competitor's IPO window. The price war is a symptom of the structural problem — the unit economics of frontier AI don't yet work at scale.
</div>

</div>

---
layout: two-cols
---

# The Price War, Visualized

<div class="text-sm opacity-60 mb-3">Two reasons, one underlying problem</div>

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Reason 1</strong>: Enterprise spend too high — shifting to open source. "They see it privately way more than we do publicly."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Reason 2</strong>: Anthropic likely IPOs first. Cut prices now to eat into their growth before they go public.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>Bottom line</strong>: The price war is a symptom of the enterprise spending problem, not just competition.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./price-war.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Safety Debate: Big Brother or Real Risk?

<div class="text-sm opacity-60 mb-3">The AI safety conversation has a user-facing dimension that's getting ugly</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
<strong>What users are experiencing</strong>

Claude flagged a question about mitochondria being "the powerhouse of the cell" — an innocuous biology question blocked due to safety features. Models increasingly act as gatekeepers of what can be asked.

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>Tommy's view</strong>

"I view it as big brother fearmongering and I think it's super annoying. The idea that we're letting some AI lab dictate what we're able to ask and why is a really slippery slope."

He draws the analogy: "do you want to be in China and you're not allowed to ask about Tiananmen Square? Like no."
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>His balanced take</strong>: Tommy acknowledges that truly dangerous capabilities exist — "if we give this to people and they ask how to build a crazy computer virus that shuts down the entire world" — but he thinks the current behavior leans more toward paternalistic overreach than genuine safety.
</div>

---

# Open Source as the Ultimate Safety Solution

<div class="text-sm opacity-60 mb-3">The accelerationist case: more eyes on the code, not fewer</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg leading-relaxed">
"open source AI is the ultimate solution to the safety issues that everybody talks about"
<div class="text-xs opacity-60 mt-1 not-italic">— Tommy Shaughnessy</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>The Linux analogy</strong>

"open sourcing and accelerating and giving everybody this technology at scale to bulletproof it and test it and audit it back and forth and battle test it is the same reason why Linux is the most secure operating system and beats Windows all the time"

Open source isn't a security risk — it's the best security guarantee we have.

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>The counter: trust a few?</strong>

"I just don't view it as we should trust 10 people in a room, as godlike as they can be, and I'm sure they're incredible people, but it doesn't matter."

No matter how smart the safety team, centralized control of what can be asked is the wrong model.

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>Tommy's position</strong>: "I'm very much in the accelerationist camp. I'm in the Beth Jezos camp." — favoring rapid, open development over cautious, centralized control.
</div>

---

# The Slippery Slope of Centralized Control

<div class="text-sm opacity-60 mb-3">Why the censorship question matters beyond AI labs</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"you don't want to be told what you're able to research or look at or ask about, right? Like do you want to be in China and you're not allowed to ask about Tiananmen Square? Like no."
<div class="text-xs opacity-60 mt-1 not-italic">— Tommy, connecting AI censorship to political censorship</div>
</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The competitive dimension</strong>

When Claude blocks innocuous queries, users switch to Venice — a platform explicitly built to <em>not</em> block questions. Censorship becomes a competitive disadvantage.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>The solution</strong>

Open source models + privacy-preserving inference. Venice runs models in TEEs with end-to-end encryption. OpenRouter provides private model access. The infrastructure for uncensored, private AI already exists.
</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Key point</strong>: The AI safety debate isn't just philosophical. It has real commercial consequences — and crypto/open-source infrastructure provides a market-based solution.
</div>

</div>

---

# Crypto + AI: Four Overlaps

<div class="text-sm opacity-60 mb-3">Where decentralized infrastructure meets the AI business model problem</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>1. Capital Formation</strong>

"it'd be very easy to do an IPO or sorry an ICO for a major open source AI company and build an incredible model."

Crypto can crowdfund open-source AI development — models we all own collectively, instead of a few labs.
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2. Privacy & Censorship Resistance</strong>

Venice provides open-source model access at scale with privacy guarantees. Built explicitly to not block questions. "Claude blocking people's requests. That's exactly what Venice is built for."
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>3. Data / Deep-in</strong>

Grass uses 3 million global user nodes to scrape real, diverse data for AI labs. A decentralized alternative to centralized data collection.
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>4. App / Harness Layer</strong>

Nous Research's Hermes agent — 150K GitHub stars, thousands of contributors, 3-4× the usage of OpenClaw. An open-source harness built by a global community, not a centralized lab.
</div>

</div>

---
layout: two-cols
---

# The Four Overlaps, Visualized

<div class="text-sm opacity-60 mb-3">Each quadrant addresses a different piece of the AI business model puzzle</div>

<div class="space-y-2 mt-3 text-sm leading-relaxed">

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Capital</strong> — Crowdfund models we all own
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Privacy</strong> — Uncensored, private access at scale
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Data</strong> — 3M nodes, decentralized scraping
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Apps</strong> — Open community beats centralized labs
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
<strong>What's not working yet</strong>: Decentralized training (DiLoCo). "Too cost intensive and just too hard." Even Tommy, a crypto investor, is skeptical here.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./crypto-ai-four.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Hermes Agent: Open Source Beats Centralized

<div class="text-sm opacity-60 mb-3">The clearest evidence that open-source AI can compete with frontier labs</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>The numbers</strong>

<div class="text-4xl font-bold text-purple-600 my-2">150K</div>
GitHub stars on Nous Hermes agent

<div class="text-4xl font-bold text-purple-600 my-2">3-4×</div>
Usage of OpenClaw on OpenRouter — for the past week and month

<div class="text-4xl font-bold text-purple-600 my-2">Thousands</div>
Of contributors continually improving it

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>Why it matters</strong>

"once you tap into the open source global community, it puts projects on a flywheel and a velocity that's just really hard to catch"

Hermes is Tommy's daily driver — on Telegram, on desktop. It's not just a proof of concept. It's beating centralized products in real usage.

<strong>The lesson</strong>: "when you get the open source community involved, it just takes on a new life."

</div>

</div>

---

# Venice & Grass: Privacy + Data Infrastructure

<div class="text-sm opacity-60 mb-3">Beyond the app layer — the infrastructure is also going decentralized</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Venice AI</strong>
<div class="text-xs opacity-70 mb-2">by Eric Voorhees</div>

- Open source model access at scale
- Privacy guarantees — models on private data centers, end-to-end encryption in TEEs
- Explicitly built to NOT block requests
- "Claude blocking people's requests. That's exactly what Venice is built for"

Tommy: "I'm a huge Eric Voorhees fan. I think he's just good for humanity in general."

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
<strong>Grass</strong>
<div class="text-xs opacity-70 mb-2">Delphi Ventures portfolio</div>

- 3 million user nodes worldwide
- Scrapes real, diverse data for AI labs
- A key deep-in use case
- Decentralized alternative to centralized web scraping

Tommy: "They're just an incredible company in getting real data for AI labs. It's a key deep-in use case that just sort of makes sense."

</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>The shift</strong>: "it's a very different world than what you and I saw 12 to 18 or 24 months ago, where it was just like these AI reply bots with tokens. That is completely dead and the only ones that will be able to survive are real infra projects."
</div>

---

# The Tragedy of the Commons in AI

<div class="text-sm opacity-60 mb-3">Laura Shin's framing: everyone wants AGI, but nobody wants to pay or share data</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"It almost feels like a tragedy of the commons type of situation where everybody wants the models to get better, but that requires data, but they don't want to give their own data, and they don't want to pay."
<div class="text-xs opacity-60 mt-1 not-italic">— Laura Shin, framing the core tension</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-center text-sm">
<strong>Want</strong>
<div class="text-xs opacity-70 mt-1">Frontier AGI capability for everyone</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-center text-sm">
<strong>Don't want to</strong>
<div class="text-xs opacity-70 mt-1">Pay frontier prices or share their data</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-center text-sm">
<strong>Result</strong>
<div class="text-xs opacity-70 mt-1">Usage shifts to cheaper alternatives → funding dries up</div>
</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>Tommy's response</strong>: He agrees. The solution might be for frontier labs to "have direct ownership of the massive new creations they create to rationalize the spend" — new medicines, robots, technologies. A "$20 a month subscription" isn't a fair return for creating something revolutionary.
</div>

</div>

---

# The Funding Paradox

<div class="text-sm opacity-60 mb-3">How do we pay for the AGI we all want without breaking the model?</div>

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The current model</strong>: Subscription fees ($20-200/month) fund massive GPU training runs. But usage is subsidized 40×. As enterprises shift to API, the real economics are exposed.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>One path — frontier labs own their creations</strong>: "If it's a new medicine, they should own 10% of it. If it's a new robot, if it's a new technology. OpenAI cannot be the beneficiary of a $20 a month subscription."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Another path — crypto capital formation</strong>: Crowdfund open-source AI development through token-based mechanisms. Let the community own the models collectively, rather than a handful of labs.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>The open-source wildcard</strong>: "OpenRouter has shown massive usage, just raised a $50 million round. Venice is off the charts." The open-source inference layer is already well-funded and growing.
</div>

</div>

---

# Core Quotes

<div class="text-sm opacity-60 mb-4">The most memorable lines from this conversation</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
"The subscriptions are subsidized by about forty X versus what you get at the API."
<div class="text-xs opacity-60 mt-1 not-italic">— On the core economic mismatch driving the AI business model crisis</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
"Get your same intelligence for one tenth to one one hundredth the cost. You're not getting frontier intelligence, you're getting something eighty to ninety percent as good, but one percent the cost."
<div class="text-xs opacity-60 mt-1 not-italic">— On why open source inference is winning enterprise customers</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm leading-relaxed">
"I view it as big brother fearmongering and I think it's super annoying."
<div class="text-xs opacity-60 mt-1 not-italic">— On AI labs dictating what users can ask</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm leading-relaxed">
"Open source AI is the ultimate solution to the safety issues that everybody talks about."
<div class="text-xs opacity-60 mt-1 not-italic">— The accelerationist case for open vs. closed AI</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
"Once you tap into the open source global community, it puts projects on a flywheel and a velocity that's just really hard to catch."
<div class="text-xs opacity-60 mt-1 not-italic">— On Nous Hermes agent beating centralized products</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
"Everything's been priced to perfection recently and it's been up and to the right."
<div class="text-xs opacity-60 mt-1 not-italic">— Warning that AI valuations may not survive slowing revenue growth</div>
</div>

</div>

---
layout: end
---

<div class="text-2xl font-light tracking-wider mt-8">
Thank You
</div>

<div class="mt-6 text-lg opacity-70 italic">
"The most basic way AI could blow up"
</div>

<div class="mt-4 text-sm opacity-50">
— Tommy Shaughnessy's viral tweet, now a real debate on Wall Street
</div>

<div class="mt-10 text-xs opacity-40">
Unchained Podcast · June 2026
</div>
