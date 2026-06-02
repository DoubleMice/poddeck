---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why Fintechs May Finally Beat Banks at Their Own Game: DEX in the City'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Why Fintechs May Finally Beat Banks at Their Own Game

## DEX in the City — 2026-05

<div class="mt-8 text-sm opacity-60">
With Jesse (River Capital), V (former SEC), and host Catherine/KK (Starkware)
</div>

<div class="mt-2 text-xs opacity-50">
Lawyers, but not your lawyers. Nothing herein is legal or financial advice.
</div>

---

# Why This Episode Matters

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Fed Master Account EO</strong><br>
<span class="text-xs opacity-70">White House directs the Fed to open the US dollar's core plumbing to fintechs and crypto — potentially the biggest structural shift in banking access in decades.</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>GENIUS Act & Bank Disruption</strong><br>
<span class="text-xs opacity-70">Stablecoin issuers are gaining bank-like powers. Banks are set to lose their two fundamental advantages — custody and payments — to non-bank competitors.</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Polymarket × Nasdaq</strong><br>
<span class="text-xs opacity-70">Retail investors get access to private market alpha — IPO timing, valuations, funding round predictions — a market long locked behind wealth gates.</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AI EO That Vanished</strong><br>
<span class="text-xs opacity-70">An executive order on AI safety disappeared from the Oval Office calendar after three phone calls. Four camps are knife-fighting inside the White House.</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>CFTC Under Scrutiny</strong><br>
<span class="text-xs opacity-70">A scathing NYT investigation raises questions about prediction market regulation, staff firings, and where the Inspector General was.</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Commissioner Peirce Departs</strong><br>
<span class="text-xs opacity-70">One of the SEC's most intellectually honest voices leaves for academia. The innovation exemption gets delayed — and that might be the right call.</span>
</div>

</div>

---

# The EO — Fintech Access to the Fed

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**What the Executive Order does**

The White House is directing the Federal Reserve to consider giving fintechs and crypto companies access to **Fed master accounts** — the core settlement infrastructure of the US dollar system.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Why it matters**

A Fed master account lets institutions **settle directly in central bank money** instead of relying on intermediary correspondent banks. For crypto companies, it means:

- Less risk of debanking
- A more credible and direct bridge between on-chain and traditional finance
- Reduced dependency on banking-as-a-service intermediaries

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**The context — Kraken's "master account lite"**

Earlier this year, Kraken obtained a limited-purpose Fed account — not full access, but a major signal that a digital asset company could get direct access to the Fed payment system "within defined guardrails." This EO pushes further.

**The pushback coming**

Traditional banks are expected to warn of systemic risks: giving non-bank entities access to Fed rails without all the compliance requirements that banks face. The core tension: **unbundling banking from the rest of the financial system.**

</div>

</div>

---

layout: two-cols
---

# The Fed Master Account Bridge

Connecting crypto's on-chain world to the traditional financial system's plumbing.

<div class="text-sm leading-relaxed mt-2">

- **Today**: crypto companies route through correspondent banks — creating friction, debanking risk, and dependency on banking partners
- **With Fed access**: direct settlement in central bank money, cutting out intermediaries
- V's framing: "allowing more seamless connectivity between the traditional fiat system and crypto is really the only way that crypto and DeFi can scale"

</div>

<div class="mt-3 text-xs opacity-60">
This is about infrastructure, not ideology — the pipes that move US dollars.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fed-bridge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Guarding the Plumbing — Safety First

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### The Problem with the EO

KK flags a critical gap: **"there's pretty much nothing in there about sort of protecting once access is there."** The EO accelerates the front end — access and open doors — but it's unclear if the back end is fully built out.

Fed master accounts connect to the core plumbing of the **entire US financial system**. Plugging fintechs and crypto directly into that infrastructure means they must be mature enough to handle AML, cybersecurity, liquidity, and operational risk.

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Real Concerns, Real Assets

Jesse, former GC of a federally regulated crypto bank, agrees:

**"There are real concerns that are unique to this asset class and the rails on which these kinds of assets move"** — risks around AML, cybersecurity, liquidity, and operations that differ meaningfully from traditional fiat rails.

### Fed Chair Warsh

With Warsh just arriving at the Fed, this could be the first thing he confronts on day one. The timing is notable — this EO lands on a Fed in transition.

</div>

</div>

---

layout: two-cols
---

# Banking — Unbundled

The traditional bank was a bundled package: custody, payments, lending, settlement, and FDIC insurance all under one roof. That bundle is coming apart.

<div class="text-sm leading-relaxed mt-2">

- **Custody** → now performed by crypto platforms and fintechs
- **Payments** → stablecoin issuers (PPSIs) under the GENIUS Act
- **Settlement** → potential Fed Master Account access
- **FDIC insurance** → remains the bank's last structural moat

Jesse: "What is going to differentiate a trad bank from a non-bank permitted payment stablecoin issuer?"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./banking-unbundled.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# GENIUS Act — Banks Lose Two Core Advantages

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Jesse, River Capital**: "Banks are really set to lose two of their fundamental advantages and differentiators from non-bank competitors — custody of customer funds and facilitating payments."

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs opacity-60 mb-1">Banks</div>

### Custody
<div class="text-xs opacity-70 mt-1">of customer funds</div>

<div class="mt-2 text-xs line-through opacity-40">losing to fintechs</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs opacity-60 mb-1">Banks</div>

### Payments
<div class="text-xs opacity-70 mt-1">facilitating transactions</div>

<div class="mt-2 text-xs line-through opacity-40">losing to PPSIs</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-300">

<div class="text-xs opacity-60 mb-1">Banks still have</div>

### FDIC Insurance
<div class="text-xs opacity-70 mt-1">peace of mind</div>

<div class="mt-2 text-xs text-green-700">last differentiator</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-xs opacity-60 mb-1">Banks still have</div>

### Borrow Flexibility
<div class="text-xs opacity-70 mt-1">lend out deposits</div>

<div class="mt-2 text-xs opacity-70">PPSIs can custody only</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

<div class="text-xs opacity-60 mb-1">Fintechs gain</div>

### Revenue Powers
<div class="text-xs opacity-70 mt-1">formerly bank-exclusive</div>

<div class="mt-2 text-xs text-red-700">expansion threat</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-xs opacity-60 mb-1">Key Question</div>

### Policy Fight
<div class="text-xs opacity-70 mt-1">banks will push back</div>

<div class="mt-2 text-xs opacity-70">"furious about these developments"</div>

</div>

</div>

---

# The Consumer Wins — Why Fintech Will Prevail

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

### The Historical Pattern

KK notes: every major technology shift faces resistance from legacy participants — energy, transportation (EV vs. auto), communications, healthcare. **"There's always the legacy participants that are like get off my lawn."**

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### The Consumer Argument

Jesse: **"I firmly believe that the fintechs are ultimately going to win because a lot of what they're doing is better ultimately for the underlying customer."**

The fintech advantage isn't regulatory arbitrage — it's genuinely better product experience. "Rest in peace checkbooks."

</div>

</div>

<div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">

### BaaS Wasn't the Answer

Fintechs initially worked through banking-as-a-service — partnering with smaller banks to offer FDIC-insured products. But this model had no good regulatory record:

- **Synapse collapse** — fintech customers locked out of funds
- **State-level or no regulation** — because they weren't taking custody
- The sector looked dead, but direct Fed access could be a **more structured, properly regulated** alternative

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### The Lesson

KK: "There's something to learn here from how fintechs got customers on board, but there's also something to learn with perhaps they did so too quickly without the proper structure in place."

Direct Fed access could provide the structure BaaS lacked.

</div>

</div>

</div>

---

# Can't Put the Genie Back — A Non-Partisan Trend

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### V's View

**"You can't put the genie back in the bottle. This is just another example of crypto integrating more and more into the core financial system and collapsing all of these boundaries."**

The direction of travel is clear. A change in administration could try to roll some things back, but the overall trend won't stop.

</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

### Not Actually a Partisan Issue

Jesse notes that executive orders can be challenged in court and rolled back by the next president. But:

**"I don't think this makes sense from a partisan perspective to say, oh no, fintech bad, banks good — because that's ridiculous."**

KK: Democrats have historically fought against banks, especially supporting community banks. Fintech structures have actually helped community banks reach new consumers.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### The EO Constraint

EOs are powerful but have real limits: they can't create new law, must be grounded in presidential powers, and the most effective check is litigation. Any rollback "on day one" of a new administration is possible — but unlikely to reverse the deeper structural shift.

</div>

</div>

</div>

---

# Prediction Markets — The Litigation War

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### State Actions

- **Rhode Island AG** sued Kalshi and Polymarket
- **New York bill** attempting to prohibit under-21s from prediction markets and ban a slew of contracts
- A new **congressional probe** was launched
- **NHL and CFTC** signed an MOU to prevent manipulation tied to hockey

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Polymarket × Nasdaq

Polymarket announced a partnership with **Nasdaq Private Market** — giving retail participants access to predict:

- Whether a private company will IPO (and when)
- Private company valuations
- Funding round outcomes

A market with "significant alpha that has long been pretty much inaccessible to retail."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### The Core Tension

KK on the wealth barrier: **"The rich get richer because they're rich to begin with — it's a lot easier to become a billionaire if you have a hundred million dollars to start with."**

Prediction markets offer one answer to **leveling the playing field between institutional and retail** — but the controversy around them remains white-hot.

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
Note: prediction markets are not inherently crypto. Many have nothing to do with blockchain. They get lumped into "crypto bad" conversations but are their own category.
</div>

---

layout: two-cols
---

# Polymarket × Nasdaq — Private Alpha

For the first time, retail can access predictions on private company events — IPO timing, valuations, and funding rounds previously reserved for the wealthy.

<div class="text-sm leading-relaxed mt-2">

- Nasdaq Private Market provides the event data
- Polymarket provides the prediction market infrastructure
- Retail speculators can now bet on IPO timing, valuation milestones, funding outcomes
- "Leveling the playing field between institutional and retail"

This is one of the most compelling reasons for prediction markets to exist, regardless of what you think about crypto.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./alpha-access.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# NYT Investigation — The CFTC Allegations

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

The New York Times published a scathing investigation accusing the CFTC and ex-acting chair Pham of inappropriate behavior in supporting prediction markets and pushing out staff members who raised concerns.

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

### The Allegations

- Staff were fired for raising concerns about how investigations were being handled
- The commission allegedly pushed out members who didn't adhere to specifications set by individuals at the commission
- These are "extremely serious ethical charges" if true

</div>

</div>

<div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">

### Jesse's Nuanced Take

"It's completely legitimate for new leadership to decide what their policy priorities are going to be — shifting from enforcement-first to more guidance or regulations is perfectly appropriate."

**But**: "If you are firing staff for doing their job — raising concerns about investigations — or because you're thinking about your next job after government, that raises very serious ethical concerns."

</div>

</div>

</div>

---

# Where Is the IG? — The Accountability Question

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Inspector General

Every federal agency has an **Inspector General** — an independent watchdog office that conducts audits and investigations of the agency itself. Its purpose: recommend policies for efficiency and effectiveness, and make sure the agency is "on the up and up."

**Jesse's question**: "The article raises enough concerns — where is the CFTC IG? Is there someone looking into this sort of thing? The allegations are serious and deserve to be addressed."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### The Revolving Door Is Not the Problem

KK: "There is nothing inappropriate for a government official to leave the government and go work for a market participant that was regulated by that agency. That happens all the time."

But the article names individuals fired for raising concerns — who are now working for market participants. If the implication is that this is inappropriate, then it needs to be applied to everyone, including the alleged whistleblower victims.

**"There's more to this story on both sides of the narrative."**

</div>

</div>

---

# Tone vs Substance — The Snark Problem

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

### What the NYT Got Wrong (in Tone)

- Calling ex-acting chair Pham a "former intern" — "ridiculous, they wouldn't call other leading individuals former interns"
- Mentioning her age unnecessarily
- Implying the Biden administration had most crypto assets regulated by the SEC — "not entirely accurate"
- Including broad snark that "takes away from the credibility" of the reporting

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### KK's Critique

**"I really hated the snark in this article. Snark is the best possible word. I don't want that to take away from the allegations — but in my opinion it does, because it raises credibility and motivation-oriented questions about the author."**

The NYT is supposed to be "the best of the crème de la crème of journalism — restrain the snark. Your objectivity is called into question."

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### V's Perspective

This shouldn't be seen as a crypto article — it should be seen as a **potential government corruption article**. The snark distracts from the serious question: were careers impacted because people asked the right ethical questions?

V notes she's taking it personally — as someone who worked at DOJ, she's seeing "the same devastating pattern in different colors" with national security staff pushed out for touching January 6 cases.

</div>

</div>

</div>

---

# Commissioner Peirce Departs — A Loss for the SEC

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

### The Departure

Commissioner Hester Peirce is leaving the SEC to become a professor at **Regent University School of Law** in Virginia Beach. She has been one of the most thoughtful regulators in crypto — always intellectually honest, refusing to make everything "a crypto thing."

KK: **"It is such a loss for the SEC — not just for crypto, for the SEC. Those students have no idea how lucky they are."**

</div>

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### Innovation Exemption Delayed

The SEC's innovation exemption — teased for six months — has been **delayed indefinitely**. Last week, Bloomberg and Reuters reported it could potentially allow tokenized versions of public equities to trade on-chain.

Peirce clarified the exemption was always meant to be **very limited** — focused on digital representations of the same underlying NYSE stock, not synthetic wrappers.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### The Right Decision

Jesse: **"It was the right decision to delay this. Half-baked guidance is not going to be future-proofable."** The larger debate: what kind of on-chain securities market do we want? Issuer-connected and close to existing structure? Or genuinely new and different?

The SEC has drawn a clear line between issuer-sponsored tokens backed by real shares held by regulated intermediaries, and synthetic products that only provide economic exposure.

</div>

</div>

</div>

---

layout: two-cols
---

# AI EO Vanishes — 18 Hours

An AI executive order, months in the making, was about to be signed in the Oval Office. Then three phone calls happened — and it vanished from the calendar. No voluntary review, no oversight, nothing.

<div class="text-sm leading-relaxed mt-2">

Jesse describes the scene: **"It's better than Game of Thrones or a Summer House reunion. Four camps inside this White House are knife-fighting over AI right now."**

For two years, every AI CEO said "regulate us." When the White House proposed even a minimal voluntary review, they all freaked out.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-camps.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Four Camps — Deep Dive

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 🏎️ Accelerationists (Winners of the Week)

**Zero oversight, free markets, innovation above all.** Their argument: we must beat China. Regulating AI is less important than building it. They won this round — the EO vanished because Susie Wiles let them through the gate.

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 🔬 Safety-Curious Wing

Key insiders like Hassett (FDA-style review concept) and Bessent (convening Wall Street on cyber risk) want real frameworks. They see things like Mythos and think: "what the fuck is this? We gotta do something." But they lack the political weight to push through.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 🛡️ National Security Establishment

A mess of contradictions: blacklisting Anthropic, but NSA using Mythos, but CISA (the top cyber defense agency) can't get access to it. Too much internal infighting to have a coherent position. They're effectively sidelined.

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🚪 Gatekeeper — Susie Wiles

The Chief of Staff controls what reaches the Oval Office. She has "a lot more power than how much she's discussed," and **"she let in the accelerationists this time, which means there's now really no rules for AI, not even voluntary ones."** There's also a "camp five" — the states, doing their own thing separately.

</div>

</div>

---

# AI CEOs — "Regulate Us" to "Never Mind"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

### The Two-Step Dance

Jesse: **"For two years, every AI CEO has been on stage somewhere saying this technology is coming, you all need to change, you all need to be worried."**

Examples:
- Altman went in front of Congress and said "regulate us"
- Musk signed a pause pledge (maybe to build his own, but still)
- The Pope came out saying we need to think about humans first
- Every AI CEO: "responsible alarm, but without responsible action"

</div>

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### Then the White House Acts...

A minimal voluntary review — no mandates, no requirements — just a mechanism to optionally submit new models for review. And the industry **"all freak out."**

Jesse calls it a "total two-step dance." The sector builds itself on **"responsible alarm, without responsible action"** — except maybe Anthropic.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### The Real Problem

It's not that we're screwed because this voluntary review isn't happening — it probably wouldn't have done much anyway. But **"trusting CEOs without verification before government can put something together can also not be the answer."**

The EU is also pulling back. We have no structure to oversee what could be, per the CEOs' own words, "the most dangerous life-changing technology yet."

</div>

</div>

</div>

---

# What Crypto Can Teach AI — Verify, Don't Trust

<div class="mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### Crypto's Hard-Won Lesson

**"Don't trust the centralized entities, don't trust the CEOs, just find a way to verify."** This is what crypto has learned through years of being burned. When something goes wrong with AI, the question won't be "who regulates it" — it'll be "who can help us now, and why did it happen, and how can we stop it."

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Build a Receipt Layer for AI

Jesse's proposal: we need a **receipt layer for AI** — a verification layer that records what model was used, what tests were run, who signed off, who ignored warnings. This is conceptually what blockchain provides: an immutable record of actions.

**"Crypto has told us don't trust the CEOs. When something goes wrong, we need to be able to say what model was used, what tests were run, who signed off, who ignored it."**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Washington Is Getting Kneecapped

**"Washington is getting kneecapped by 18 hours of a few phone calls."** The AI safety framework vanished because three people called the White House. This is not a functioning oversight mechanism for existential technology.

There are many trust-AI organizations and verification frameworks out there — but **"they're just not getting the attention or funding they need."** The crypto industry, which has spent a decade building in adversarial environments, has something to offer here: verification infrastructure that works without trusting any single party.

</div>

</div>

</div>

---

# Tylosaurus Rex — Deep Time Perspective

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

### The Discovery

A new fossil was partially found in Texas: **Tylosaurus rex** — the T-Rex of the sea. It's 43 feet long, the size of two great white sharks, with a massive jaw and bite. The biggest water creature of all time.

Jesse (a dinosaur enthusiast): "I'm always a little afraid of the ocean. When you think about being in the water with creatures like this — what was happening in the world back then."

</div>

</div>

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### Perspective

**"Tylosaurus was hundreds of millions of years ago. What's going to matter in another hundred million years?"**

This isn't just a fun fact. It's a framing device for the entire episode: the regulatory battles, the AI camp fights, the prediction market wars — all of it matters intensely right now, but deep time reminds us that what endures is bigger than any one policy fight.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Good News of the Week

This is the "good news of the week" segment — a DEX in the City tradition. KK: **"A lot of the most successful interesting people in the world are inherently, innately nerds. Nerds love STEM, and they love science."** Sometimes stepping back from crypto to appreciate the natural world is the right move.

</div>

</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"Allowing and enabling more seamless connectivity between the traditional fiat system and crypto is really the only way that crypto and DeFi can scale."
<div class="text-xs opacity-60 mt-1 not-italic">— V, on the Fed Master Account executive order</div>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"You can't put the genie back in the bottle. This is just another example of crypto integrating more and more into the core financial system and collapsing all of these boundaries."
<div class="text-xs opacity-60 mt-1 not-italic">— V, on whether a Democratic administration could reverse fintech banking access</div>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"I firmly believe that the fintechs are ultimately going to win because a lot of what they're doing is better ultimately for the underlying customer."
<div class="text-xs opacity-60 mt-1 not-italic">— Jesse, on why fintechs will prevail over traditional banks</div>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"Don't trust the centralized entities, don't trust the CEOs, just find a way to verify. This is where crypto's not being so thirsty — AI should be thirsty for us because we need to build a receipt layer for AI."
<div class="text-xs opacity-60 mt-1 not-italic">— Jesse, on what crypto can teach AI about safety</div>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"Washington is getting kneecapped by 18 hours of a few phone calls, and we need to start building the accountability infrastructure now."
<div class="text-xs opacity-60 mt-1 not-italic">— Jesse, on the AI EO vanishing from the Oval Office calendar</div>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">
"It's really about unbundling banking from the rest of the financial system. Historically, if you wanted access to Fed rails, you had to fit into the traditional bank box — but fintech and crypto are collapsing the traditional categories."
<div class="text-xs opacity-60 mt-1 not-italic">— V, on the structural shift the Fed EO represents</div>
</div>

</div>

---

layout: end
---

# Thank You

<div class="mt-4 text-sm opacity-70">
DEX in the City — May 2026<br>
Wallets cold, takes hot 🔥
</div>

<div class="mt-6 text-xs opacity-50">
With Jesse (River Capital), V (former SEC), and Catherine/KK (Starkware)<br>
Lawyers, but not your lawyers. Nothing herein is legal or financial advice.
</div>

<div class="mt-8 text-xs opacity-40">
Tylosaurus rex was swimming around while we argued about stablecoin regulation.<br>
Perspective.
</div>
