---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Quantum Mechanics Contradicts Itself (and He Proved It)'
info: |
  Theories of Everything host Curt Jaimungal interviews Professor Renato Renner
  of ETH Zurich about his no-go theorem showing quantum theory cannot consistently
  describe observers who are themselves quantum systems.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
fonts:
  sans: 'Inter'
  serif: 'Source Serif Pro'
---

# Quantum Mechanics Contradicts Itself

<div class="text-lg opacity-80 mt-4">And He Proved It</div>

<div class="mt-10 text-sm opacity-60">
Prof. Renato Renner · ETH Zurich<br/>
Theories of Everything with Curt Jaimungal
</div>

<div class="mt-8 text-xs opacity-50">
A quantum information theorist proves that quantum theory, applied to the physicists using it,<br/>
leads to contradictions. Then he asks: what breaks — the theory, consistency, or our right to do physics?
</div>

---

# Why This Episode Matters

<div class="text-sm opacity-70 mb-4">A rare conversation that goes from theorem to existential crisis — and takes every escape route seriously.</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The No-Go Theorem
Quantum theory can describe any system — except when observers use it to describe each other. Then it contradicts itself.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Three Assumptions
Universality, consistency between agents, and single outcomes — at least one must go.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The Gravity Escape
Maybe the experiment is impossible to build — reference frames form a loop where each must be larger than the next.

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### From Many Worlds to No Man's Land
Renner's personal journey through interpretations — and why none of them handle multi-agent scenarios.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Against Probability
Probabilities can't capture the topology of quantum states — and this breaks cryptographic proofs.

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Physics as Communication
A radical operational view: physics is about communicating knowledge between agents, not discovering a God's-eye truth.

</div>

</div>

---

# The Core Question: Can Physics Describe Physicists?

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Quantum theory tells us there is a **constraint on the knowledge** we can have about the world. If that's true, can we still do physics the way we thought we could?

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The Classical Assumption
In classical mechanics, we assumed a sufficiently powerful physicist could in principle know everything — all positions and momenta of all particles.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The Quantum Twist
Quantum theory limits what we can know. So Renner asks: if a physicist **is** a physical system, can the theory consistently describe how the physicist uses the theory?

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

Renner's key move: model the physicist doing physics as itself a quantum process — a "consistency check" that, surprisingly, had rarely been done before.

</div>

---
layout: two-cols
---

# The Observer Paradox

Two physicists analyze the same quantum system. One analyzes it directly; the other analyzes how the first physicist analyzes it.

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Direct path**: I predict the spin measurement outcome myself.

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Indirect path**: I predict what *you* will predict about the spin measurement.

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**The problem**: In certain setups, these two paths give **contradictory** results — not merely different levels of uncertainty, but genuinely opposite conclusions.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./observer-paradox.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Not Incomplete Knowledge — Contradictory Knowledge

<div class="mt-4 text-sm opacity-80">Renner uses a coin flip to draw a crucial distinction.</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### Incomplete Knowledge ✓
I flip a coin and see tails. You don't know the result, so you say 50/50. When I tell you it's tails, you update. No contradiction — just missing information.

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50">

### Contradictory Knowledge ✗
You **correctly** apply the theory and calculate it must be heads with absolute certainty. I see tails. There is no update that can fix this — Bayes' rule gives division by zero.

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

"You're absolutely certain its heads. I see its tails."
<div class="text-xs opacity-60 mt-1 not-italic">— Renner, on the type of contradiction his thought experiment produces: not ignorance, but genuine impossibility</div>

</div>

---

# The Chess Board Analogy

<div class="mt-4 text-sm opacity-80">Curt proposes an analogy that Renner finds works surprisingly well.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The Player's View (God's Eye)
Most physicists treat physics like a chess player — looking down at the board from above, seeing all pieces. This is the **external** perspective.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The Piece's View (Inside)
Renner insists: we are pieces **on** the board. We can see the bishop, the knight — but we can never see ourselves. We are a "mystery piece."

</div>

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500">

### Where Contradiction Appears
The rook sees the bishop. The bishop claims there's a knight in front of it. But the rook, looking at the same square, sees no knight. Both are certain. Both applied the rules correctly.

<div class="text-xs opacity-70 mt-2">

This is not about one player having less information — it's about two pieces on the same board reaching incompatible conclusions.

</div>

</div>

---
layout: two-cols
---

# Three Assumptions That Can't All Be True

<div class="text-sm opacity-70">Renner's no-go theorem:</div>

<div class="mt-2 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**1. Universality** — QM applies to everything, including observers. Everyone can apply it.

</div>

<div class="mt-2 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**2. Consistency** — If you're certain spin is up, I shouldn't be certain it's down. No opposite certainties.

</div>

<div class="mt-2 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**3. Single Outcomes** — A measurement gives one result, not both up and down.

</div>

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**Plus an implicit 4th**: We can actually carry out the experiment.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./no-go-triangle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Hidden Assumption: Who Gets to Do Physics?

<div class="mt-4 text-sm opacity-80">Universality has a subtlety most physicists miss.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Type 1: Applies to Any System
I can apply quantum theory to any object — my cup of tea, my office chair, another person.

<div class="text-xs opacity-60 mt-2">Almost universally accepted.</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Type 2: Any Agent Can Apply It
**We** — as inhabitants of the universe — are allowed to apply quantum theory from our own perspective. Not just a hypothetical external "God."

<div class="text-xs opacity-60 mt-2">This is what many-worlders and Bohmians implicitly deny, Renner argues.</div>

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

Renner on those who deny the inside view: "I would say okay, why are you physicists? You're part of the world. So by denying that as a valid viewpoint, you basically say you're not a valid physicist."

</div>

# What Must We Sacrifice?

<div class="text-sm opacity-80">Renner compares assumptions to <strong>towers in a city</strong>. Knocking one down causes collateral damage.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Give up universality?
Quantum theory has a boundary — but where? No experimental evidence suggests one exists.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Give up consistency?
Communication between agents is meaningless — a devastating price for science.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Give up single outcomes?
Measurements don't really "happen" — we lose the operational core of physics.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Give up executability? ★
Maybe the experiment can't be built — the contradiction never arises. **Renner's current favorite.**

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

The price tags differ from person to person. Which tower to sacrifice is, Renner argues, ultimately an emotional decision.

</div>

---

# The Heisenberg Cut: You Can't Describe Everything

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

In quantum theory, we always **cut out** the part of the world we describe. We never describe the entire universe — because that would include ourselves, creating an infinite recursion.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The Maximal Description
The most I can describe is "everything without me." I cannot include myself because that would require describing my own reasoning process — a recursion quantum theory doesn't handle.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Why This Creates Perspectives
If I describe everything except me, and you describe everything except you — we have **different** perspectives. I described you as a physical system; you described me. Neither captured the full picture.

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">

"this is not possible I cannot described myself"
<div class="text-xs opacity-60 mt-1 not-italic">— Renner, on why agents cannot all share the same viewpoint</div>

</div>

---
layout: two-cols
---

# The Gravity Escape: Reference Frame Loops

Renner's newest and most exciting route out of the paradox involves **gravity** and **reference frames**.

<div class="mt-3 text-sm">

To measure a quantum system of size L, you need a reference frame **larger** than L. Now consider the thought experiment:

- Alice measures Bob → needs ref > Bob
- Bob measures Charlie → needs ref > Charlie  
- Charlie measures Alice → needs ref > Alice

Each agent must be **larger** than the next — forming an impossible loop.

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">

To undo a Schrödinger's cat measurement would require controlling all the 10²³ or even 10²⁵ atoms — a reference frame as big as the universe.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./reference-frame-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# If the Experiment Can't Be Built...

<div class="mt-4 text-sm opacity-80">Then the contradiction never arises — and all three assumptions can peacefully coexist.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### The Hope
The sizes of the reference frames form a circular dependency that makes the experiment fundamentally impossible — not just technically difficult, but impossible for reasons within the theory itself.

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### The Status
Renner is still working on proving this rigorously. He has the suspicion and the physical intuition but not yet the full mathematical argument.

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

**Key insight**: A good thought experiment is one that could in principle be realized. If we find a **fundamental** reason it can't be — that's itself a discovery about physics, not a failure of the thought experiment.

</div>

---

# Thought Experiments Must Be Realizable

<div class="mt-4 text-sm opacity-80">Renner has strong views on what makes a thought experiment legitimate.</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">

A thought experiment should be realizable **according to the principles of the theory being tested** — not necessarily with today's technology, but within the theory's own rules.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Robustness Matters
Like Bell experiments — even if your equipment isn't perfect, small deviations from the ideal setup should still lead to the contradiction. This robustness requirement distinguishes real physics from fine-tuned paradoxes.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### The Playground Metaphor
<div class="italic">

"It's a playground for me as a theorist."

</div>

Someone gives him a theory, he plays within it — inventing experiments, checking for contradictions. If he finds one, he asks for a new theory.

</div>

</div>

---
layout: two-cols
---

# Black Holes and the Information Paradox

Renner connects his observer paradox to the black hole information paradox — another case where implicit assumptions about reference frames cause apparent contradictions.

<div class="mt-3 text-sm">

**The scenario**: Throw a notebook into a black hole, collect Hawking radiation. Can you retrieve the content?

- **Camp A**: Yes — the radiation carries structured information.
- **Camp B**: No — it's just thermal noise.

**Renner's resolution**: Both are right — they just implicitly assume different reference frames.

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">

With no reference frame (one isolated black hole), radiation looks random. With many identical black holes as reference, the same radiation reveals structured information.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./black-hole-reference.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Spin in an Empty Universe

<div class="mt-4 text-sm opacity-80">A beautifully simple thought experiment from Renner's work.</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Imagine an empty universe. A source creates the very first spin particle. Is it spin up or spin down?

**The answer**: The question is not even defined. There is nothing else in the universe with respect to which "up" or "down" has meaning.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### One Black Hole
The first Hawking radiation quantum that comes out — we can't even say what its spin direction means. No reference exists.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Thousands of Black Holes
Take 999 identical black holes' first emissions. Align them into a "stick" — now the 1000th can be compared to that reference. Suddenly, structure appears.

</div>

</div>

<div class="mt-3 text-xs opacity-70">

This is Renner's key message: whether information is "structured" or "random" depends entirely on the available reference frame — not on some absolute property of the radiation.

</div>

---

# From Many Worlds to No Man's Land

<div class="mt-4 text-sm opacity-80">Renner's intellectual journey through the interpretations of quantum mechanics.</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### Phase 1: Textbook QM
Standard quantum mechanics course — learned to solve the Schrödinger equation but had no insight into what was really going on.

<div class="text-xs opacity-60 mt-2">~year 2000, ETH Zurich</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### Phase 2: Many Worlds
Suddenly everything made sense — superposition, entanglement, the whole world as one big wave function. A "very emotional moment" of clarity.

<div class="text-xs opacity-60 mt-2">But then talking to proponents raised doubts about probability in many worlds.</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-300">

### Phase 3: QBism
Resolved the probability issues. Single-agent knowledge framework felt natural. But couldn't handle **multi-agent** scenarios — no rule for combining knowledge.

<div class="text-xs opacity-60 mt-2">The Frauchiger-Renner thought experiment broke this too.</div>

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-sm italic">

"I'm now in no man's land in the sense. So I don't see any of the interpretations that's currently existing is satisfactory."

</div>

---

# Physics Is an Emotional Experience

<div class="mt-4 text-sm opacity-80">One of the most striking claims in this conversation.</div>

<div class="mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

Renner describes how his choice of interpretation has always been driven by **emotion first, rational argument second**:

<div class="mt-3 text-sm">

1. A vague feeling that something is wrong with a view
2. An intensive search for rational arguments to support (or refute) that feeling
3. Sometimes the emotions pointed to real problems; sometimes rational arguments changed the emotions

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">

"in that sense, being a physicist for me is an emotional experience"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm italic">

"collapse here is emotionally wrong"
<div class="not-italic text-xs opacity-60 mt-1">— On why he rejects collapse theories despite lacking a decisive experiment</div>

</div>

</div>

---

# Students Who Refused to Continue

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500">

Renner reveals that some of his students refused to work on these projects for **psychological reasons** — the implications were too disturbing.

</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Why It's Disturbing
These projects are about the fundamental question of what we are. If there are no absolute facts, if measurement outcomes aren't "real," the whole model of the world one had must be revised.

<div class="text-xs opacity-70 mt-2">
Some collaborators keep this separate from daily life. Others find the connection inescapable — and stressful.
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Renner's Own Coping
He does a lot of sports — biking in the Swiss forests — to create distance from the existential weight. Without that separation, he says, he wouldn't know how to act on what quantum theory tells him.

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"It really troubles me that there is this problem, this contradiction."

</div>

---

# Against Probability

<div class="mt-4 text-sm opacity-80">Renner's 2026 paper argues that probabilities are fundamentally insufficient to represent quantum states.</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

In QBism and GPTs (Generalized Probabilistic Theories), a quantum state is just a compressed list of probabilities for all possible measurements. Renner's team found this mapping is **not robust**: quantum states that are very different can have probability lists that are arbitrarily close.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Practical Consequence
Cryptographic security proofs done in the generalized probabilistic framework are **not valid** in the actual quantum world — because "close to perfectly secure" in probability space doesn't mean close in quantum state space.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### The Deeper Issue
Probabilities are about outcomes. But if outcomes aren't absolute — they're just knowledge — then probabilities become probabilities about probabilities. This recursion breaks the betting-game foundation of probability theory.

</div>

</div>

# Knowledge About Knowledge

<div class="text-sm opacity-80">The core philosophical challenge: if measurement outcomes are relative to an observer, then what is our knowledge actually <strong>about</strong>?</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Standard View
My probability is about an **outcome** — "the spin will be up with 70% probability." The outcome is the bedrock; probability quantifies my ignorance about it.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Renner's View
My probability is about my **knowledge** after seeing the outcome — a subtle but fundamental difference. If outcomes aren't absolute, then probabilities become probabilities about probabilities.

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**The weather analogy**: You tell me your probability of rain tomorrow is 10%. Mine is 50%. How do I update? Probability theory has **no rule** for incorporating someone else's probability assignment. Bayes only handles direct evidence, not evidence-about-evidence.

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">

This isn't just a QBism problem — it's a general challenge whenever multi-agent scenarios arise. Even classical probability has no established rule for it.

</div>

---

# The Measurement Problem Is Not Just Philosophy

<div class="mt-4 text-sm opacity-80">Renner pushes back against the idea that the measurement problem is irrelevant.</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**The standard dismissal**: We've built quantum computers and done quantum cryptography without solving the measurement problem. So why bother?

**Renner's response**: That's only because all current experiments share the same perspective — we all look at tiny quantum systems from the outside. But this is changing.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### The Near Future
When quantum computers become sophisticated enough to act as **agents** — applying quantum theory to reason about the world — the measurement problem will have **operational** consequences. We won't be able to predict what a network of such computers does.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### The Black Hole Case
When Alice falls into a black hole, she becomes part of the quantum system. Bob outside can no longer assume Alice has the same perspective. The measurement problem is no longer academic — it's the firewall paradox.

</div>

</div>

---

# Parallels Between Quantum Mechanics and General Relativity

<div class="mt-4 text-sm opacity-80">Renner sees deep structural parallels — beyond black holes.</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Double Slit (QM)
Without measuring which slit the particle goes through, the question "which slit?" has **no answer** — it's not that we don't know, it simply has no answer.

But if I **put a detector** at the slits, the question suddenly has a definite answer.

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Hole Argument (GR)
Without physical markers, the question "did the particle pass through coordinate point A or B?" has **no answer** — diffeomorphism invariance makes it meaningless.

But if I put **material detectors** at those points, the question becomes well-defined.

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

**The shared lesson**: Both theories tell us that talking about a location **without specifying the measurement** is meaningless. This operational lesson was absent in classical mechanics.

</div>

---
layout: two-cols
---

# Observers Have Limited Views

Both QM and GR impose fundamental limits on what any single observer can see.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Quantum Theory**: The Heisenberg cut means I always separate "the system" from "myself." I can describe everything **except** myself.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**General Relativity**: Information propagates at finite speed. There is always a **horizon** — I can only see what can potentially reach me.

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-xs">

Both theories share a challenge absent in classical mechanics: how to consistently combine the knowledge of agents who see different parts of the world.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./qm-gr-parallel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why Do Physicists Disagree So Much?

<div class="mt-4 text-sm opacity-80">Renner's experience after publishing the Frauchiger-Renner theorem.</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Long discussions with critics often led to a **success story**: identifying an implicit assumption neither side had articulated. For example, "from whose perspective do we do physics?" — an assumption so basic it was never stated.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### The Debate With Gisin
Renner and Nicolas Gisin (a collapse theorist from Geneva) debated for a long time. Eventually they found the root: Gisin insists measurement outcomes must be "real"; Renner can live without that. The public debate was "completely boring" — they just stated their different starting assumptions.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Both Are Right
In the black hole paradox case, both camps (thermal radiation vs. retrievable notebook) were making different implicit assumptions about reference frames. Once made explicit, both views coexist.

</div>

</div>

---
layout: two-cols
---

# Emotions as Resource Allocation

<div class="text-sm opacity-80">Why emotional intuition serves science.</div>

<div class="mt-2 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

Without experiments to settle the question, scientists must pick assumptions based on **taste, intuition, emotion**. The quality of those guesses determines how fast we reach the goal.

</div>

<div class="mt-2 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Bell & Fist Fights** — Tim Maudlin got so emotional at a Bell theorem anniversary that Renner feared a fist fight. "Belle could be very proud that he managed to just write down a theorem about which people get so emotional."

</div>

<div class="mt-2 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**The Motivation Argument** — You need motivated fighters with sharp swords who will do the extreme work. Unbiased, unmotivated people would never get there.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./emotion-science-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Consciousness: The Self-Recursive Mystery

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

Renner sees a deep parallel between quantum theory's inability to describe itself and the mystery of consciousness: both involve concepts that **talk about themselves**.

</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### What Renner Admits
He has "so little grasp of the concept that I cannot even decide for myself whether it's in which realm of science I should put this." He's interested in it — but uncomfortable claiming anything substantive.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The Recursion Connection
Science has the Heisenberg cut — observer vs. observed. But consciousness **is** the observer. To study it, you'd use the very concept you're trying to understand. Same recursion problem, potentially even deeper.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

Curt pushes: if consciousness might be outside physics, and physics is supposed to describe all of reality — does that mean physics isn't all there is? Renner doesn't commit, but doesn't dismiss the idea either.

</div>

---

# Physics as Communication

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Renner's operational definition: physics is a sophisticated way for agents to **communicate knowledge** about the world to each other — including to our future selves.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Communication Is Fundamental
Even solo physics involves communication: my younger self communicates to me now via stored memories and notes. Reading a quantum theory textbook is communication from earlier physicists to me. Without this, science is impossible.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Not Just Predictions
The standard operationalist view says physics is about making predictions. Renner adds: it's about making communicable descriptions. A physical law must be not just compressible but **communicatable** — and that requires common reference frames.

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"communication in a sense is a very important part of doing science"
<div class="text-xs opacity-60 mt-1 not-italic">— This seemingly obvious statement becomes radical when you realize quantum theory limits what can be communicated</div>

</div>

---

# A New Consistency Check for Any Theory

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Perhaps the most lasting contribution of the Frauchiger-Renner work is not the specific no-go theorem, but the **method**: a new type of consistency check applicable to any proposed theory of physics.

</div>

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Step 1
Take any candidate theory. Assume it applies to everything, including the physicists using it.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Step 2
Model multiple agents applying the theory from different perspectives. Check whether their conclusions can be consistently combined.

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Step 3
If contradictions arise, the theory fails this self-referential test. Something in its assumptions must be revised.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

This test has been applied to quantum theory (and found wanting). Renner believes it should be standard practice for any new theory of physics.

</div>

---

# Abstraction Gone Too Far?

<div class="mt-4 text-sm opacity-80">Renner's self-critique of quantum information theory.</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Quantum information has been enormously successful at abstracting away physical details — we talk about qubits without caring if they're superconducting or trapped ions. But Renner now suspects this abstraction **went too far**: by discarding reference frames and spacetime, we missed something essential.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### The Success
Quantum computing, quantum cryptography, entanglement theory — all developed on a beautifully abstract level. The qubit doesn't care what atom it lives in.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### The Blind Spot
Abstracting away the spin without talking about what reference measures it is "not a good abstraction to answer certain questions." When you run into trouble, ask: did we abstract away something essential?

</div>

</div>

---

# The Software That Proves No Recursion

<div class="mt-4 text-sm opacity-80">A fascinating detail: Renner's team wrote software to settle a persistent criticism.</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Critics argued that the thought experiment secretly requires agents to describe themselves — creating an infinite loop. To refute this, Renner, Lídia del Rio, and Nuriya Nurgalieva wrote **publicly available software** that implements the experiment and proves no self-referential loop occurs.

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### How It Works
The software lets you specify what each agent needs to describe. It then verifies that no agent's description requires describing itself — the computation terminates, no infinite recursion.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Why It Matters
The minimum number of observers required is **four** (Renner isn't sure it can be reduced to three). The key design challenge was arranging agents so that each uses quantum theory without having to describe themselves.

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">This conversation's most memorable moments:</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"You're absolutely certain its heads. I see its tails."
<div class="text-xs opacity-60 mt-1 not-italic">— On the contradiction: not ignorance, but genuine impossibility</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"It really troubles me that there is this problem, this contradiction."
<div class="text-xs opacity-60 mt-1 not-italic">— On living with an unresolved paradox in the foundations of physics</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"I'm now in no man's land"
<div class="text-xs opacity-60 mt-1 not-italic">— On finding no existing interpretation of quantum mechanics satisfactory</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"collapse here is emotionally wrong"
<div class="text-xs opacity-60 mt-1 not-italic">— On rejecting collapse theories viscerally despite lacking a decisive experiment</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"It's a playground for me as a theorist."
<div class="text-xs opacity-60 mt-1 not-italic">— On exploring quantum theory by inventing experiments and searching for contradictions</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"communication in a sense is a very important part of doing science"
<div class="text-xs opacity-60 mt-1 not-italic">— On physics as the business of communicating knowledge between agents</div>
</div>

</div>

---
layout: end
---

# "being a physicist for me is an emotional experience"

<div class="text-sm opacity-60 mt-4">
Prof. Renato Renner · ETH Zurich<br/>
Theories of Everything with Curt Jaimungal
</div>
