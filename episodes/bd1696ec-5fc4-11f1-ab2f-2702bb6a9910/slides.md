---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Chopping Block: Ethereum''s Inflection Point w/ Joe Lubin on DATs, CROPS, AI-Driven Exploits, Quantum Threats, and CFTC''s Perps'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Ethereum's Inflection Point

Joe Lubin on DATs, CROPS, AI-Driven Exploits, Quantum Threats, and the Future of ETH

<div class="text-sm opacity-60 mt-4">
The Chopping Block · June 2026
</div>

<div class="text-xs opacity-40 mt-8">
Joe Lubin (Consensys / Ethereum co-founder) · Tarun Chitra (Gauntlet) · Tom Schmidt · Haseeb Qureshi
</div>

---
layout: default
---

# Why This Episode Matters

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Saylor's First BTC Sale</strong>
<div class="text-xs opacity-70 mt-1">MicroStrategy sold just 25 BTC — the market dropped 6%. Death spiral fears return.</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>EF Restructuring</strong>
<div class="text-xs opacity-70 mt-1">Ethereum Foundation shrinks, refocuses on CROPS (components) and cypherpunk vision.</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Quantum Q-Day</strong>
<div class="text-xs opacity-70 mt-1">Justin Drake: 50% chance by 2032. Community cracks Google's secret quantum circuit using AI.</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>AI-Driven Exploits</strong>
<div class="text-xs opacity-70 mt-1">OpenZeppelin founder: "All of DeFi is now unsafe." Cat-and-mouse between attackers and defenders.</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>ZK Bridge-Free Future</strong>
<div class="text-xs opacity-70 mt-1">Atomic execution zones — tokens move across networks without bridges. The "extended Metropolis."</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>CFTC Opens US Perps</strong>
<div class="text-xs opacity-70 mt-1">Kalshi approved for first BTC perp. Hyperliquid at $75, flipped Solana. Distribution flywheel.</div>
</div>

</div>

---
layout: default
---

# Saylor's 25 BTC: Signal or Noise?

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### What Happened

<div class="text-sm leading-relaxed space-y-3">

MicroStrategy **sold 25 BTC** — a negligible amount for a company holding billions. But it was the first sale in four years.

The market **legged down 6%** instantly. The fear: if the "one buyer in the market" capitulates, what holds everything up?

Saylor's company owes roughly **$1.4 billion per year in cash dividends** from the preferred structure (STRK/STF-C). With only ~$700M cash on hand, the gap must be closed somehow.

</div>

</div>

<div>

### The Reaction

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Haseeb's take:</strong> Selling 25 BTC → share price -6% is "a very strong, you know, that gets internalized pretty quickly, no?"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Joe Lubin's view:</strong> "It's way overblown. They have so much Bitcoin... I'm not worried at all about Michael Saylor and strategy."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
The real concern: BTC was at <strong>$77k</strong> when he actually sold it. It's the <em>disclosure</em> — months later — that spooked the market.
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# Death Spiral Fears: DATs Compared

<div class="text-sm leading-relaxed space-y-3 mt-2">

**Tarun's warning:** If you have 10 layers of preferred stock on top of a common that's being dumped constantly — "it's an unstable equilibrium."

He compares the Strategy structure to "an algorithmic stablecoin with too many steps."

**Joe Lubin's counterpoint:** Ether DATs (SharpLink, BMNR) are fundamentally different:
- ETH is a **productive asset** (yields ~3% risk-free)
- **All tokens are staked** when purchased
- **No leverage** required
- Represents "long-term, essentially permanent capital"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dat-comparison.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Ether DAT: Risk-Free Yield & Permanent Capital

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### What Makes Ether DATs Different

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>~3% risk-free yield</strong> — from staking. Bitcoin has no native yield.
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>No leverage needed</strong> — unlike Strategy's convertible-bond tower, Ether DATs don't require selling the underlying to service obligations.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Permanent capital</strong> — funds that can be deployed to "grow valuable things in our industry" without worrying about coupon payments or margin calls.
</div>

</div>

</div>

<div>

### Joe Lubin's Vision

<div class="mt-4 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded leading-relaxed">

"I still believe that DATs, if you choose the right token, are a really valuable construct for your ecosystem. Our token Ether yields approximately 3% risk-free yield. We can layer on sleeves on top of that... No leverage, and we represent long-term essentially permanent capital that we can use to grow valuable things in our industry."

</div>

<div class="text-xs opacity-60 mt-3">
— Joe Lubin, Chairman of SharpLink
</div>

</div>

</div>

---
layout: default
---

# The Ethereum Foundation: Restructuring at a Crossroads

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The situation:</strong> The EF recently saw significant departures. Aya Miyaguchi affirmed that the EF's mandate — as the EF sees itself — may not match what the community wants. The EF is getting smaller, externalizing responsibilities to organizations like Uniswap Foundation, Gitcoin, Moloch DAO, and Consensys.
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Joe Lubin's inside view:</strong> "The EF needed to (A) reduce its budget, (B) set itself up to be long-term viable and strong, (C) do the things that other ecosystems are doing but do it the right way — the natural way."
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>What stays:</strong> The institutional initiatives Tomasz built — an interface for companies, governments, standards bodies — "that was incredibly important. That's not going away."
</div>

<div class="text-xs opacity-60 mt-2">
Bastian (EF) admitted internal messaging wasn't handled well and is working to clean it up.
</div>

</div>

---
layout: two-cols
---

# CROPS: The EF's North Star

<div class="text-sm leading-relaxed space-y-3 mt-2">

**Vitalik's vision:** Think of the EF as "one node, a major node, a node that sets the north star." Focus on:
- **Cypherpunk vision** — decentralization as bulwark against command-and-control
- **CROPS** — Components that need to be protected and continually developed

Other organizations — Consensys, SharpLink, BMNR — become "more decentralized commercialization engines."

**The fight is existential:** Joe frames it as "top-down command and control planet" vs. decentralized world. Ethereum is "against the command-and-control."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ethereum-nodes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Credible Neutrality: Why Biz Dev Can't Run the EF

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### What Other Ecosystems Do

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Biz dev first:</strong> Pay-to-play, conflicts of interest between biz dev activities and the researchers/builders.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>Short-term thinking:</strong> "Number go up" as primary KPI, chasing narratives.
</div>

</div>

</div>

<div>

### Why Ethereum Must Be Different

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Credible neutrality:</strong> "We can't build a credibly neutral platform for the world without having credibly neutral organizations as some of the major nodes in the ecosystem."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>But commercialization needs a home:</strong> SharpLink + BMNR stepping up as that engine. "We want to be what the crypto bros in other ecosystems are" — but do it credibly.
</div>

</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
The EF focuses on CROPS and cypherpunk vision. Another group of elite core devs — with positive language from the EF — focuses on scalability, usability, maybe even "number go up" for ETH.
</div>

---
layout: default
---

# "There's Only One Foundation"

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>"Second Foundation" keeps coming up</strong> — since at least 2023 with Konstantin. But Joe pushes back: "Ethereum Foundation just has a very special place. There's only one foundation."
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Why not a Second Foundation?</strong>
<div class="text-xs opacity-70 mt-1">
Tarun: "It feels like the first of the Stiftung era, it created the whole thing. Everyone else is a descendant." Copying the EF pattern just isn't appealing — it's been done five million times.
</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>What the community actually needs:</strong>
<div class="text-xs opacity-70 mt-1">
Haseeb: People want to feel "Ethereum is listening" — not sitting in an ivory tower, tweeting "ETH is good" only when the untouchables start scaling the walls.
</div>
</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Joe's framing:</strong> "People seem to want to anoint a monarch... Vitalik is a leader and a steward... but he doesn't want to dictate, he's never operated that way. He's always made suggestions." We're moving into an "intent or goal-centric decentralized world" — solvers satisfy requests.
</div>

</div>

---
layout: default
---

# Quantum Threat: Google's ZK Breadcrumbs

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The trigger:</strong> Google and Orca published papers pulling forward quantum timelines. Google created a circuit that massively speeds up Shor's algorithm for breaking ECDSA keys. But they <strong>didn't publish the circuit</strong> — only a ZK proof that the circuit exists.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The logic (flawed):</strong> "We're protecting you because this circuit is so dangerous that you cannot possibly see it."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>The result:</strong> "It's so important that we can see it but you can't." This caused a Streisand effect — the community mobilized to crack the circuit from the breadcrumbs Google left behind.
</div>

</div>

---
layout: two-cols
---

# The Streisand Effect in Action

<div class="text-sm leading-relaxed space-y-3 mt-2">

**The community treated Google's ZK proof as a reinforcement learning environment** — "hey, can we just keep brute forcing circuits until you can reproduce the same proof?"

People **crowdsourced their LLM subscriptions** to participate. It was "like a folding at home kind of thing."

The outcome: amateurs improved on Google's results by **12-13%** — purely from the breadcrumbs.

**The irony:** This is an ironic form of Proof of Work. The ZK proof designed to protect the secret became the attack vector.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quantum-breadcrumbs.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Justin Drake's Q-Day: 50% by 2032

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 bg-red-50 border-2 border-red-200 rounded">
<div class="text-3xl font-bold text-red-600 my-1">50%</div>
<div class="text-xs">chance by <strong>2032</strong></div>
<div class="text-xs opacity-60 mt-1">Justin Drake's Q-Day estimate — when quantum computers break conventional crypto</div>
</div>

<div class="p-3 bg-yellow-50 border-2 border-yellow-200 rounded">
<div class="text-3xl font-bold text-yellow-600 my-1">10%</div>
<div class="text-xs">chance by <strong>2030</strong></div>
<div class="text-xs opacity-60 mt-1">The near-term scenario — less than 4 years away</div>
</div>

<div class="p-3 bg-blue-50 border-2 border-blue-200 rounded">
<div class="text-3xl font-bold text-blue-600 my-1">2035</div>
<div class="text-xs">NIST recommendation</div>
<div class="text-xs opacity-60 mt-1">Drake calls this "a joke that should be discounted entirely"</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>ETH's quantum roadmap:</strong> "ETH is going to migrate to post-quantum crypto by 2029." Lean VM construction will rip out all BLS signatures, KZG aggregation, and ECDSA signatures.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>ETH/BTC = the quantum index:</strong> Nick Carter's observation — ETH/BTC ratio may reflect the market's view on how fast quantum is coming. ETH has an explicit quantum roadmap; Bitcoin does not.
</div>

</div>

---
layout: default
---

# ETH's Post-Quantum Migration: The Road to 2029

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>The task:</strong> Three major cryptographic migrations. BLS signatures, KZG aggregation, ECDSA signatures — all going "the way of the dodo." Hash-based cryptography work needs to be solidified.
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Optimistic view:</strong> "The problem of creating hardened clients is more accelerated by AI than the problem of actually building quantum computers, which is a lot of serious engineering heavy." — Haseeb
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>Realistic caution:</strong> "Still gonna take a fair amount of time for Ethereum to do three major migrations... let's hope the world doesn't crowdsource any further solutions to accelerating quantum." — Joe
</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>The asymmetry:</strong> The community cracked Google's secret circuit using AI and crowdsourced LLMs. What happens when the same techniques are turned against crypto protocols? The clock is ticking.
</div>

</div>

---
layout: default
---

# AI-Driven Exploits: "All of DeFi is Unsafe"

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 rounded leading-relaxed">
OpenZeppelin founder Manuel Araoz "tweeted that he believes all of DeFi is now unsafe and he's recommending that all of his friends and family withdraw everything from DeFi."
</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The problem</strong>
<div class="text-xs opacity-70 mt-1">AI models — from Mythos to frontier LLMs — can now find vulnerabilities across multiple protocols by constructing long attack chains.</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The speed gap</strong>
<div class="text-xs opacity-70 mt-1">Models on ASICs spitting out 10,000 tokens/sec. "Multiple days of work happening within minutes. Attackers are happening at AI speed, defenders at human speed."</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>The horizon</strong>
<div class="text-xs opacity-70 mt-1">The successor to Mythos will find categories of bugs "only super geniuses working in teams" could find today.</div>
</div>

</div>

</div>

---
layout: two-cols
---

# Cat & Mouse: The Security Stackelberg Game

<div class="text-sm leading-relaxed space-y-3 mt-2">

**Tarun's framework:** This is a Stackelberg security game. The defender writes code and picks parameters. The attacker plays a move. The defender adapts. Repeat.

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm mt-2">
<strong>Phase 1 (~1-2 years):</strong> The attacker wins repeatedly — like training a chess bot through the first five million epochs.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Endgame:</strong> Defenders eventually win — but the models keep getting smarter. Each generation finds new attack categories.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cat-mouse-game.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Vulnerabilities in the Cracks Between Protocols

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded leading-relaxed">
"Most of the vulnerabilities in our ecosystem sit either between the chair and the keyboard — dumb people doing dumb things, making dumb choices, writing dumb things into parameter files — or in between protocols."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**Joe's security pipeline:**
- Consensys Diligence built their own AI — agents that "swarm on protocols"
- Now looking "in the cracks between protocols" — composability means vulnerabilities sit at intersections
- "Machine intelligence driven attacks, is three subtle things in these three different situations"

</div>

<div>

**The formal verification bet:**
- Ethereum ecosystem building pipelines to formally verify specifications AND implementations
- "There's a decent chance that we go in the direction of a golden age for software"
- Builders get access to formal verification and software that helps "think through everything"

</div>

</div>

</div>

---
layout: default
---

# Thorchain: A Cautionary Tale

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The incident:</strong> Thorchain — a cross-chain spot trading protocol — has been "shut off for like two weeks now because they got hacked and they can't turn it back on. Literally it's like so broken."
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>The security scanner response:</strong> V12 (Zellic's AI detection tool) found vulnerabilities in Thorchain and offered to report them. Thorchain refused to pay. V12 disclosed them publicly: "you're down anyway. What does it matter?"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>The systemic problem:</strong> "We have learned a lot of lessons in the industry but we've not learned them uniformly." Bug bounty programs are overwhelmed by AI-driven reports — 50 claimed-crits per day, impossible to triage.
</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>The open-source parallel:</strong> Crypto has a "very long tail" — vulnerabilities discovered six years after deployment. Unlike general open-source where improvements rapidly integrate, crypto's deployment and rollout process is "super long."
</div>

</div>

---
layout: default
---

# DeFi's Insurance Problem: Composability Makes It Hard

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### The Current Model Is Broken

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Insurance at the endpoint:</strong> Every time there's an attack, the last place that got attacked has to pay.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>Composable supply chain:</strong> A DeFi product has many inputs — bridge → oracle → issuer → RWA. Each is an attack surface.
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Traditional finance model:</strong> Single entity, single point of coverage. Square peg in a round hole for DeFi.
</div>

</div>

</div>

<div>

### Tarun's Historical Analogy

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>The Railroad Boom (late 19th century):</strong> Private money era — companies issuing their own bonds, their own dollars. Rampant scams.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>What emerged:</strong> Everything blew up → large insurers formed → corporate bond issuers bought coverage → FDIC eventually drained the private-money system.
</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm mt-3">
<strong>The prediction:</strong> "The innovation from attacks is how do you distribute that type of cost across the system, as opposed to just trying to fix it at one place." — Tarun
</div>

</div>

</div>

---
layout: two-cols
---

# ZK Bridge-Free Architecture

<div class="text-sm leading-relaxed space-y-2 mt-2">

**Joe Lubin's "extended Metropolis":**

Run zero-knowledge proofs across Linea networks, other L2s, and even private permissioned networks. Aggregate them into a single ZK proof.

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm mt-2">
<strong>The result:</strong> "Atomic execution zones" — transactions across different networks, tokens moving without bridges.
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Why bridges break:</strong> major attack surface. A ZK prover is "really hard to get inside and hack."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Real-world scale:</strong> "There's like 200 Base new networks in the world currently, and Citi runs Citi token services" — big businesses on Ethereum tech.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./zk-bridge-free.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Atomic Execution Zones & Real-Time Liquidity

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>The vision:</strong> ZK proofs from private permissioned networks → aggregated into a single proof → settled on L2 or L1. A "bridge-free architecture that removes a lot of the vulnerabilities."
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Composability restored:</strong> "We can bring composability into a situation where we intentionally introduced fragmentation. For instance, you can do real-time unification of different liquidity fragments across these different networks."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>The institutional bridge:</strong> Consensys contributed Besu to Hyperledger Foundation, Linea to Linux Foundation Decentralized Trust. "A hundred well-announced projects built on Besu. Another hundred not so well announced."
</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>The endgame:</strong> Link all of these networks via different forms of composability into "an extended Ethereum ecosystem." Joe: "It's happening pretty fast."
</div>

</div>

---
layout: default
---

# CFTC Opens the Door for US Perps

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### The Regulatory Shift

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>First US perps product:</strong> CFTC approved Kalshi's BTC perpetual — "kind of a curious first choice." Not Coinbase or a major US exchange.
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The limits:</strong> "The kinds of things that we are going to be approving are probably not equities. And also not ag products."
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Precedent set:</strong> Door now open for further product reviews. Robinhood already talking about perps.
</div>

</div>

</div>

<div>

### How It Lands for DeFi

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Tarun's prediction:</strong> Hyperliquid will create a regulated US entity — "Polymarket style" — offshore product + domestic licensed product. "I think that will happen."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>But will it stay competitive?</strong> "That's ultimately going to be a centralized exchange." Competition is coming from all sides.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>The bigger picture:</strong> Lighter (Ethereum), Ostium, Variation, and... "a little company called ICE, New York Stock Exchange."
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# Hyperliquid's Distribution Flywheel

<div class="text-sm leading-relaxed space-y-2 mt-2">

**The key innovation nobody has copied: distribution.**

Tarun: "No one in crypto has ever pulled off that type of distribution play." Not an L1 — too many counterparties to agree. Hyperliquid found a way without complexity.

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mt-2">
<strong>The Polymarket effect:</strong> "The number of people betting on it is much smaller than the number who know about it, look at it, use it." Free marketing at enormous scale.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Congressional mentions:</strong> Same order of magnitude as Polymarket — despite not being in the US.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hyperliquid-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# The Unbundled Exchange: Markets Won, EVM Lost

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### What Worked

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Market-specific platform:</strong> "Where they lean into just pure markets and using the Hyperliquid infrastructure at its best."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>The unbundled exchange:</strong> Partitioned into components — distributors getting order flow (like prime brokers), market creators, spot (like Unit). Each piece sold off to grow faster.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Capital formation:</strong> "Being able to attract that kind of capital formation on top of your very constrained platform... is incredible."
</div>

</div>

</div>

<div>

### What Didn't

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>HyperEVM:</strong> "No one wanted the full programmable thing at that level." Tarun: "I'm gonna get roasted for saying that, but... the generalized platform part of Hyperliquid is not what's worked."
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>The lesson:</strong> "Increasingly, they're not building on HyperEVM. Increasingly, they're just like, hey, we're gonna launch a HIP3, HIP4, whatever."
</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm mt-3">
<strong>Competition is coming:</strong> "The supply is going to get way bigger, and the RFQ space is going to be really interesting."
</div>

</div>

</div>

---
layout: default
---

# Traditional Finance Is Building on Ethereum Tech

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 bg-blue-50 border-2 border-blue-200 rounded">
<div class="font-bold text-blue-700">ICE / NYSE</div>
<div class="text-xs opacity-70 mt-1">"Tooling up" — building or extending Ethereum technology</div>
</div>

<div class="p-3 bg-purple-50 border-2 border-purple-200 rounded">
<div class="font-bold text-purple-700">Citi</div>
<div class="text-xs opacity-70 mt-1">Runs Citi Token Services on private permissioned Ethereum networks</div>
</div>

<div class="p-3 bg-green-50 border-2 border-green-200 rounded">
<div class="font-bold text-green-700">~200 Base Networks</div>
<div class="text-xs opacity-70 mt-1">Private permissioned networks running Ethereum technology worldwide</div>
</div>

</div>

<div class="p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded leading-relaxed mt-4">
"Most of the world is financially illiterate and are regularly led to the slaughter by the financial industry. To the extent that finance can be more entertaining, more engaging... it can draw people in and get them learning things."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin on why perps and prediction markets matter</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>The sea change:</strong> Perps, prediction markets as "entertainment layer" → draws people in → ask AI to explain → learn math → become financially empowered. This is the path to a more decentralized world.
</div>

</div>

---
layout: default
---

# Zama / Overnight: Privacy Meets the Law

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>The incident:</strong> Someone deposited <strong>12.5 million USDC</strong> (99% of all deposits) into Zama's Overnight Finance confidential USDC wrapper. A federal court issued a restraining order — Circle froze the cUSDC contract in response.
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>The backstory:</strong> An activist investor ("corporate raider" style) bought distressed tokens and pushed for a court order to reclaim assets. Not the first time.
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>The resolution:</strong> Court order dropped. Circle stepped out. But the precedent is unsettling.
</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>The tension:</strong> Privacy protocol overlay vs. built-in privacy. When the underlying collateral is freezable (USDC), that's the weak point. "The long arm of the law seems to have now extended into privacy protocols." But there's a difference between an overlay privacy protocol and one built into the network.
</div>

</div>

---
layout: default
---

# Formal Verification: The Strongest Argument

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### The Swiss Cheese Problem

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"We have this Swiss cheese and we've put the holes in all the Swiss cheese, but then it turns out it's multidimensional Swiss cheese because now it's in the third dimension, and then eventually post-Mythos it's in the fourth dimension, and it's just like almost impossible to cover all holes."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
The "slop it up more" method — keep patching, keep adding layers — has limits. Each new dimension of attacks reveals holes you didn't know existed.
</div>

</div>

</div>

<div>

### The Correct-by-Construction Alternative

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Formal verification:</strong> "Correct by construction" as opposed to patching. Prove the code satisfies its specification before deployment.
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Joe's prediction:</strong> "We're going to squeeze out the bugs from software that's already been written and we're going to start building formally verifiable software."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>The audacious claim:</strong> Mozilla (with Mythos + ChatGPT) believes they could be "100% vulnerability free by end of year" — at least in heavily audited areas like HTTPS and encryption.
</div>

</div>

</div>

</div>

---
layout: default
---

# Ethereum as Antifragile: The Pandemic of Bugs

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded leading-relaxed">
"Ethereum I think of as an antifragile technology and an antifragile ecosystem... as long as we start paying attention to it and apply the proper resources, I think we're going to squeeze out the bugs from software that's already been written."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin</div>
</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Today</strong>
<div class="text-xs opacity-70 mt-1">~15 bugs per thousand lines of code. "The attackers keep changing because the models are getting smarter."</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>Transition</strong>
<div class="text-xs opacity-70 mt-1">"This is a pandemic." Each attack shrinks the future set of possible attacks — expensive bug bounty leading to real hardening.</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Endgame</strong>
<div class="text-xs opacity-70 mt-1">A "hardened, hardened software world." Blockchains and open-source will reach "Valhalla" first — closed-source will bleed for years.</div>
</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm mt-2">
<strong>The open-source advantage:</strong> Closed-source codebases — "security by obscurity" — are the soft targets. AI can now decompile binaries. The stuff that "doesn't run on Linux" doesn't have the security standards it should.
</div>

</div>

---
layout: default
---

# Joe's Closing Optimism: Agents Are Coming

<div class="text-sm leading-relaxed space-y-4 mt-4">

<div class="p-4 text-xl italic text-center border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded leading-relaxed">
"The agents are coming. The hybrid human-machine economy is coming."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin, on why to feel positive about Ethereum</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**What's coming:**
- MetaMask announcement "within a small number of days" — facilitating the agent economy
- Consensys in deep discussions with FMIs and major financial institutions
- Linea networks being set up across institutions

</div>

<div>

**What's already done:**
- Besu contributed to Hyperledger Foundation
- Linea contributed to Linux Foundation Decentralized Trust
- "A hundred well-announced projects" on Besu, another hundred not announced
- "We can bring all of those into the Ethereum economy proper"

</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm mt-3">
<strong>The vision:</strong> AI empowers people — "some total knowledge of humanity, best practices, wisdom, access to the domain experts available to virtually everybody." Ethereum provides "economic, social, political, financial agency for everybody who has control of their own assets." That's "a recipe for a much flatter world."
</div>

</div>

---
layout: default
---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"The agents are coming. The hybrid human-machine economy is coming."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin, 被问到"为什么应该对以太坊生态保持乐观"</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Most of the vulnerabilities in our ecosystem sit either between the chair and the keyboard — dumb people doing dumb things — or in between protocols."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin, 论DeFi安全的核心薄弱点</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"We can't build a credibly neutral platform for the world without having credibly neutral organizations as some of the major nodes in the ecosystem."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin, 解释为什么EF不能走Biz Dev路线</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"ETH/BTC is the quantum index."
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Carter (via Haseeb), ETH/BTC比率反映市场对量子时间线的定价</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Most of the world is financially illiterate and are regularly led to the slaughter by the financial industry."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin, 论为什么perps和预测市场是金融民主化的工具</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Ethereum I think of as an antifragile technology and an antifragile ecosystem."
<div class="text-xs opacity-60 mt-1 not-italic">— Joe Lubin, 论AI驱动的漏洞如何最终让系统更强韧</div>
</div>

</div>

---
layout: end
---

# Thank You

<div class="mt-8 text-lg opacity-70">
"Distribution begets distribution."
</div>

<div class="mt-4 text-sm opacity-50">
The Chopping Block · June 2026
</div>

<div class="mt-8 text-xs opacity-40">
Joe Lubin · Tarun Chitra · Tom Schmidt · Haseeb Qureshi
</div>
