---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "The Theorem That Proves Science Can't Know the Universe"
info: |
  Professor JB Manchak (UC Irvine) on unknowability theorems in general relativity,
  Heraclitus spacetimes, time travel, and the surprising connection to Zen Buddhism.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# The Theorem That Proves Science Can't Know the Universe

<div class="mt-4 text-lg opacity-80">
Professor JB Manchak × Theories of Everything with Curt Jaimungal
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border border-blue-200">

**General Relativity**
Spacetime models & their limits

</div>

<div class="p-3 rounded bg-green-50 border border-green-200">

**Unknowability Theorem**
No data can pin down the universe

</div>

<div class="p-3 rounded bg-purple-50 border border-purple-200">

**Zen & Non-Self**
Underdetermination goes personal

</div>

</div>

<div class="mt-6 text-xs opacity-50">
Philosophy of Physics · UC Irvine · Theories of Everything
</div>

---

# Why This Episode Matters

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Science Has Limits — Proven by Science
Manchak proves theorems showing that even with **all possible data** from **every point** in the universe, you still cannot determine its global structure.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### GR Is Not One Thing
General relativity admits a vast zoo of models. Which ones are "physically reasonable"? Manchak argues we may **never** settle that question.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Heraclitus Spacetimes
A new class of spacetimes where every event is different from every other — and where local structure **does** determine global structure.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### From Physics to Zen Buddhism
Manchak draws a parallel between cosmic underdetermination and the Buddhist teaching of non-self — both involve limits of grasping.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Time Travel & Malament-Hogarth Machines
GR permits closed timelike curves. Malament-Hogarth spacetimes can in principle solve the halting problem — but blue shift gets in the way.

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### The Philosophy of Physics as Theorem-Proving
Manchak's style: formalize a philosophical question, then prove or disprove it. No flowery prose — the theorem **is** the philosophy.

</div>

</div>

---
layout: two-cols
---

# What Is General Relativity, Really?

Manchak insists GR is **not one thing** — it's a collection of models, and which ones count is up for debate.

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**The standard collection**: all 4D manifolds with a Lorentzian metric. Every such manifold satisfies Einstein's equation in a minimal sense.

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Pairing down**: Energy conditions, causal conditions (no time travel? stable causality?), hole-freeness — each choice gives a different "GR."

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">

"Everyone agrees that the real GR, whatever it is, is some subclass of models. And so, the question is, well, which one?"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spacetime-models.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Pluralistic View of GR

<div class="mt-2 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg">

"I have a pluralistic notion of what this thing is."

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Determinism depends on which GR

Is GR deterministic? That depends entirely on your background collection of models. Kick out the "pathological" ones and it is. Let them in and it isn't.

<div class="mt-2 text-sm italic opacity-80">

"You can say GR is deterministic if you kick out all the models that show that it's indeterministic."

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Cosmic censorship: same game

Penrose's cosmic censorship hypothesis says all physically reasonable spacetimes are globally hyperbolic. But if your background collection is small enough, it's trivially true. If it's large enough, it's false.

<div class="mt-2 text-sm italic opacity-80">

"Everything turns on how big or small is your collection going to be."

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Norton's Dome parallel**: Norton showed Newtonian mechanics is indeterministic if you don't assume Lipschitz continuity. Manchak notes a key difference: in GR, indeterminism arises **within** the standard collection — no need to go outside it.

</div>

---

# Cauchy Surfaces, Horizons & Determinism

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Cauchy Surface
<div class="text-sm mt-2">A space-like surface that every maximally extended causal curve hits. If it exists → the spacetime is **globally hyperbolic**.</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Global Hyperbolicity
<div class="text-sm mt-2">Data on a Cauchy surface can be evolved uniquely (Choquet-Bruhat & Geroch). This is the sense in which GR **is** deterministic.</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Cauchy Horizon
<div class="text-sm mt-2">The boundary past which evolution becomes non-unique. Beyond it, determinism breaks down — multiple extensions are possible.</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Cosmic Censorship (Wald's formulation)**: "All physically reasonable spacetimes are globally hyperbolic." If true, you can always evolve data to a maximal spacetime with no Cauchy horizon. If false — the universe has built-in indeterminism.

</div>

<div class="mt-3 text-sm opacity-70">

Black holes were once considered "pathological" too — including by Einstein himself. A priori dismissal of exotic solutions has a poor track record.

</div>

---

# Time Travel in General Relativity

<div class="mt-2 text-sm opacity-70">GR doesn't permit Back-to-the-Future-style time travel — but it does permit something remarkable.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### What GR actually allows

Models with **closed timelike curves**: a particle's worldline wraps back on itself, revisiting the same event. The matter returns to its original state — periodic, not paradoxical.

<div class="mt-3 text-sm italic opacity-80">

Godel presented Einstein with the Godel solution in 1949, which allows for time travel. Einstein's response: "We'll have to see if there are physical reasons to exclude such a model."

</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Decades later, still unresolved

Many theorems have been proven about excluding time travel models. Manchak's position: **we don't know**.

<div class="mt-3 p-3 bg-white rounded text-sm italic">

"I find it fascinating that even a position like that which is very non-committal and it's very modest somehow is seen as almost radical."

</div>

</div>

</div>

---
layout: two-cols
---

# Malament-Hogarth Spacetimes

A spacetime where an observer at a finite point can see the **entire infinite future** of another observer in their past light cone.

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Solving the halting problem**: Send a computer into the infinite-future region. It runs a program. If it halts, it sends a signal. You — at the MH point — receive the answer in finite time.

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**The blue shift problem**: Signals bunch up as they approach the MH point. Wavelengths compress toward the blue end. Some argue this makes MH spacetimes unphysical.

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Manchak's counterexample strategy**: Build an MH spacetime that satisfies energy conditions, is stably causal, doesn't require infinite fuel — knocking down each objection one by one.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mh-machine.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Cut-and-Paste Construction

<div class="mt-2 text-sm opacity-70">A technique introduced by Penrose, widely used by Geroch and Hawking-Ellis.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### How it works

Take well-behaved spacetimes (e.g. Minkowski). Cut slits. Glue pieces together in exotic ways. You create wildly unusual topologies — but they are still **valid models of GR**.

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### The point: counterexamples

Penrose and Geroch emphasized these aren't meant as physical models of our universe. They serve as **counterexamples** to certain lines of reasoning.

<div class="mt-2 text-sm italic opacity-80">

Manchak's use: "I have a counter example to that line of reasoning because I've now exhibited a space-time which is Malament-Hogarth that doesn't have property X, Y, or Z."

</div>

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**The ball-in-your-court move**: Each counterexample forces the critic to find a **new** reason to exclude MH spacetimes. The existing objections (blue shift, energy conditions, infinite fuel) have all been addressed — "the criticisms you have so far aren't quite enough."

</div>

---
layout: two-cols
---

# The Unknowability Theorem

Manchak proved what Malament had conjectured in the 1970s — and then went **far beyond** it.

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**The setup**: Give me a spacetime. Put an eyeball at **every event** — past, present, future. Collect all data from everywhere, everywhen.

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**The result**: Manchak can construct a "nemesis" spacetime that reproduces **all** of that data but has a completely different global structure.

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**The extra level**: Even if you constrain local properties (vacuum solutions, energy conditions), the nemesis still works. Local induction cannot pin down global structure.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./unknowability.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# What the Unknowability Theorem Shuts Down

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### Common objection: "Science uses induction, not deduction"

<div class="text-sm mt-2">

The theorem anticipated this. It doesn't just show deductive underdetermination. It lets you do **any kind of local induction** — preserve local laws, energy conditions, vacuum properties — and the unknowability still holds.

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### The only escape: global assumptions

<div class="text-sm mt-2">

To "wiggle out," you must assume certain **global** properties. But that's precisely what's at issue — we don't know the global structure. Assuming it to prove you can know it is circular.

</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-lg">

"I love science and that's what I do every day... but science has its limits. And so what I'm trying to articulate is that one can use science to show that science has limits."

</div>

<div class="mt-3 text-sm opacity-70">

This is **not** the Matrix-style "maybe I'm a brain in a vat" underdetermination. Manchak starts from our best physical theories and follows their consequences. It's science showing its own limits, not philosophy imposing limits from outside.

</div>

---

# De Sitter: Where the Trouble Begins

<div class="mt-2 text-sm opacity-70">The example that got the whole literature started.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The de Sitter problem

In de Sitter spacetime, light cones have asymptotes — they don't open up like in Minkowski space. You see very little of the universe from any point.

**Result**: You cannot distinguish whether you're in de Sitter, or in "unrolled" de Sitter, or de Sitter with holes, or any number of other possibilities.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Why it matters

De Sitter is **not** some exotic construction. It's a well-behaved, globally hyperbolic, vacuum solution — the kind of spacetime that's relevant to our actual cosmology (our universe is approximately de Sitter in its late expansion).

Malament used it to introduce the cosmic underdetermination problem. Even "nice" spacetimes have this issue.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Manchak**: "I think having the de Sitter in the background is really a really good thing to do" — it motivates the entire unknowability program by showing the problem isn't just about pathological edge cases.

</div>

---

# Spacetime Maximality: Why Would Nature Stop?

<div class="mt-2 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**The dogma**: If a spacetime can be extended (made bigger), it should be. A non-maximal spacetime is "unphysical." This was originally justified by Penrose and Geroch with what Manchak calls **Leibnizian metaphysics**.

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">

"Why would nature stop when nature could keep building? So she has to keep building."

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Manchak's challenge

Once you kick out "pathological" models, the remaining collection may not support Geroch's theorem (every spacetime has a maximal extension). The theorem depends on which models you allow.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Pandora's box

Removing models changes the entire modal structure. Results proven for the standard collection may fail for subclasses. Examining the justifications reveals they are — in Manchak's word — "piffy."

</div>

</div>

---
layout: two-cols
---

# Heraclitus Spacetimes

Named after the philosopher of flux: "You can't step into the same river twice."

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Definition**: A spacetime where **any two distinct events** differ in some invariant way — their curvature properties are never identical.

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Not a special case**: Manchak argues that generically, almost every GR spacetime is Heraclitus. The symmetric ones we study in textbooks are the exception — they're just easier to write down.

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Not pathological**: You can have globally hyperbolic Heraclitus spacetimes. No singularities. No curvature blowups. Just... radical asymmetry everywhere.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./heraclitus-puzzle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Puzzle Piece Argument

<div class="mt-2 text-sm opacity-70">Manchak's intuitive explanation for why Heraclitus spacetimes rescue knowability.</div>

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">

"If I'm in a Heraclitus spacetime, there is only one way to put the pieces together."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Heraclitus universe

Cut spacetime into tiny puzzle pieces. Each piece has unique curvature. There's **only one** way to assemble them — like a jigsaw where every edge is unique.

**Local structure determines global structure.**

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### Minkowski universe

Cut Minkowski spacetime into a million pieces. Every piece looks the same. You could reassemble them as flat Minkowski, or rolled up (with time travel), or with a giant hole in the middle.

**Local structure does NOT determine global structure.**

</div>

</div>

<div class="mt-4 text-sm opacity-70">

This is Manchak and Barrett's work — in a sense, Manchak arguing **against his own** unknowability theorem, exploring its limits.

</div>

---
layout: two-cols
---

# Symmetry vs. Structure: Earman's Hierarchy

From John Earman's *World Enough and Space-Time*: more structure → fewer symmetries → more meaningful questions of motion.

<div class="mt-3 text-sm">

**Leibnizian**: Maximum symmetry. Can't even talk about acceleration. Every transformation is allowed.

**Galilean**: Enough structure for F=ma. Acceleration makes sense, velocity doesn't.

**Newtonian**: Absolute space. Now you **can** ask "am I moving?"

**Aristotelian**: Even has a center of the universe. Can't even translate.

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Heraclitus blows it up**: Asymmetry maxes out, but structure can keep increasing. The inverse relationship between symmetry and structure — decades of philosophical dogma — breaks down.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./symmetry-hierarchy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Heraclitus and FLRW: Is the Big Bang Still Safe?

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**The worry**: FLRW models (Big Bang cosmology) have enormous symmetries — homogeneity and isotropy. If the real universe is Heraclitus, does that undermine the Big Bang?

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Manchak's answer: No tension

It's a matter of **scale**. Heraclitus means every point has slightly different curvature when you zoom in. FLRW works at grand cosmological scales — the tiny curvature differences wash out.

<div class="mt-2 text-sm italic opacity-80">

"Our universe is not completely symmetric... It's not completely homogeneous or isotropic."

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The real point

FLRW is an **approximation** of a Heraclitus spacetime in the background. As long as you understand it's an approximation and don't bang your fist on the table saying it's the true representation — there's no problem.

</div>

</div>

---

# The Malament Style: Philosophy as Proof

<div class="mt-2 text-sm opacity-70">David Malament's approach to philosophy of physics — and Manchak's intellectual inheritance.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Malament's theorem on causal structure

Hawking et al. showed causal structure determines topology for "nice" spacetimes. Malament (1977) asked: how **weak** can the causal structure be and still determine the shape of the universe? His answer became the foundation for the **causal set approach to quantum gravity**.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Rotation in GR

What does it mean for object X to rotate around object Y in GR? Multiple criteria exist. Malament formalized each one and proved they **come apart** — an object can be rotating according to criterion A but not B. Rotation in GR is deeply subtle.

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"The real genius of someone like David would be to find a way to ask a philosophical question in a very rigorous type way and then prove a theorem that essentially gives you an answer for that philosophical question."

</div>

---

# Manchak's Own Style: Terse by Design

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Two-page papers

Manchak doesn't put a word in a paper unless it's necessary. His papers can be two or three pages — unusual even in physics, unprecedented in philosophy.

<div class="mt-3 p-3 bg-white rounded text-sm italic">

"For me, my theorem that is my philosophy and so I let the results speak for themselves."

</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Counterexample as weapon

Rather than long arguments about whether MH spacetimes are physical, Manchak builds a specific model that dodges every known objection. Then: "If there's something else you're thinking of that makes it unphysical, then speak up."

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### The slow thinker's advantage

<div class="text-sm italic mt-2">

"I really am very slow. I've learned this stuff over the course of 20 years now... Things don't come very quickly to me."

</div>

<div class="text-sm mt-2">

But he's **relentless** — "tenaciously come back to the same idea again and again and again." The recent paper with the Budapest logic group solved a problem posed by Geroch **50 years ago**.

</div>

</div>

---

# The Hole Argument & Spacetime Ontology

<div class="mt-2 text-sm opacity-70">A famous debate in philosophy of physics — but Manchak keeps his distance.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Substantivalism vs. Relationism

**Substantivalists** (Newton's tradition): spacetime points exist independently of matter.

**Relationalists** (Leibniz's tradition): only spatiotemporal relations between events are real.

The hole argument (different from "holes" in spacetimes) has generated decades of literature on this question.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Manchak's position: no dog in this fight

Following Malament's lead, Manchak finds the distinction unclear. When you try to articulate what both positions really mean, you quickly arrive at: "What's the argument about?"

<div class="mt-2 text-sm italic opacity-80">

"I didn't see really any progress being made there... what I saw were some handwavy gestury type of stuff and that's just not my bag."

</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**His bag**: Making things precise. It took a long time for him to find something he could say "in a very precise way that has relevance to these issues."

</div>

---

# The Fractal Time Machine Problem

<div class="mt-2 text-sm opacity-70">A 50-year-old question from Bob Geroch, recently solved.</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mt-4">

### The question

Take an extendable spacetime with **no** closed timelike curves (no time travel). Is it possible that **every** extension introduces time travel? In other words: can you find a spacetime where the only way to make it bigger is to allow time travel?

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Manchak's idea

Take Minkowski spacetime, roll it up (introducing closed timelike curves), then remove a **fractal** — a Cantor set — of delicate holes that block the time-travel curves. Any extension must fill in part of the fractal, reopening a path for time travel.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### The Budapest connection

Manchak shared this sketch with the logic group in Budapest. They made it rigorous. The paper was recently published — solving a problem Manchak had been thinking about for **10 years**.

</div>

</div>

---

# From Cosmic Underdetermination to the Self

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

Manchak teaches an intro philosophy of science class structured around **two case studies of underdetermination**:

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 bg-white rounded">

**Case 1: The Universe**
Cosmic underdetermination — you can't pin down the global structure of spacetime from any data.

</div>

<div class="p-3 bg-white rounded">

**Case 2: The Self**
Hume's empiricist insight — when you look inward, you find perceptions but never find **you**.

</div>

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

Hume: "I see love in me. I see hate in me. I see pleasure. I see pain... but I never see me."

</div>

<div class="mt-3 text-sm opacity-80">

Both the cosmos and the self resist being "pinned down" by empirical data. Manchak sees a structural parallel — not a direct connection, but the same **shape** of problem: data underdetermines the thing you're trying to know.

</div>

---

# Zen Buddhism and Non-Self

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### Why Zen?

Manchak grew up Mormon. After getting tenure at UC Irvine, he found a zazen group in his neighborhood. Zen attracted him because it's skeptical of expressing truths through words and theories.

<div class="mt-3 text-sm italic opacity-80">

"It's the one that allows me to almost be a spiritual person without being a spiritual person."

</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Non-self ≠ grasping "no self"

A Zen master would say someone who declares "I figured it out — Buddhism is about non-self" has missed the point entirely.

<div class="mt-3 text-sm italic opacity-80">

"You're grasping too hard on this idea of non-self. Whenever you're grasping on anything, you're not doing the Zen thing."

</div>

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### The finger and the moon

Zen is skeptical of words and theories. The teachings are the **finger pointing at the moon** — they're supposed to catalyze a direct experience, not be grasped as doctrines. This mirrors how Manchak's theorems point to something beyond what the formalism can fully capture.

</div>

---

# Science Showing Its Own Limits

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">

"One can use science to show that science has limits."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### What Manchak is NOT doing

The Descartes / Matrix / brain-in-a-vat style of underdetermination: "Maybe I'm being deceived by an evil demon." Fun to think about, but it doesn't come from our best scientific theories.

<div class="mt-2 text-sm italic opacity-80">

"That hallucination stuff, the matrix stuff... I don't lose sleep about that stuff."

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### What he IS doing

Taking science seriously. Diving into the details of GR. Following the consequences of our best physical theory to their logical end. And the answer is: **no**, science cannot tell us the global structure of our universe.

<div class="mt-2 text-sm italic opacity-80">

"Let's see what our best science says about what we can know... the answer is no."

</div>

</div>

</div>

---

# Practical Zen: The Manchak Family Practice

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

Manchak's Zen practice is deeply embedded in daily life. Every night before bed, the whole family gathers — wife, daughter, the dog — on his daughter's bed for meditation.

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### A framework, not a doctrine

Manchak thinks of Zen as a kind of religion — it provides a framework, a structure for making sense of life. But it's characteristically minimal, free of the elaborate belief systems he left behind.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Simplicity everywhere

The same aesthetic runs through his math (two-page papers), his philosophy (theorem = philosophy), and his spiritual practice (sit, don't grasp). Radical simplicity as a way of life.

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">

"I think of it very much as a kind of a religion for me... it provides a kind of framework and a structure and that's what I wanted and needed."

</div>

---

# God Points and the Limits of Omniscience

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### What is a God Point?

An event in spacetime whose past light cone contains the **entire universe** — including the future. From a God point, you can see everything. This necessarily implies time travel (you're seeing your own future in your past).

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Why it matters for unknowability

If a God point exists, Manchak's unknowability theorems don't apply — you literally have access to all information. So he introduces a minimal condition: restrict attention to spacetimes **without** God points.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The irony

Even the most generous possible observer — one with "eyeballs everywhere in the universe, everywhere, everywhen" — still can't determine global structure. You'd need omniscience beyond what physics permits.

</div>

</div>

---

# Styles of Philosophy of Physics

<div class="mt-2 text-sm opacity-70">Not all philosophy of physics is created equal — and styles can clash.</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### The Malament School
<div class="text-sm mt-2">

Formalize philosophical questions. Prove theorems. Let results speak. **Manchak's tradition.**

</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### The Practice School
<div class="text-sm mt-2">

Engage with how physicists actually work. David Wallace, Tim Maudlin — philosophize about the practice of physics.

</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### The Armchair School
<div class="text-sm mt-2">

Start from your own system. Bring in physics here and there, but don't necessarily begin from the formalism.

</div>
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Manchak's reflection**: "When I was a youngster I wasn't aware of all of these ways... for me it was just like there's physics, there's philosophy, bringing them together — that's got to be like this one thing. But it's not one thing."

</div>

<div class="mt-2 text-sm opacity-70">

Sound familiar? GR is not one thing. Philosophy of physics is not one thing. Even Buddhism is not one thing.

</div>

---

# The Symmetry Buddies

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

After years of writing papers alone, Manchak found collaborators who share his style: Thomas Barrett, Jim Weatherall, and Hans Halvorson. They co-author papers on symmetry and structure — all working in the Malament tradition.

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Papers by text message

Every night, Manchak falls asleep thinking about symmetry. In the morning, he texts Thomas his idea. Thomas texts back. This is how papers get written.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Breaking the symmetry-structure dogma

For decades, philosophers have held that more symmetries = less structure, and vice versa. Heraclitus spacetimes show this breaks down when asymmetry maxes out — you can pile on structure without decreasing symmetries further.

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">

"This is so much better — just to have symmetry buddies around, be able to bounce ideas off of each other."

</div>

---

# Core Quotes

<div class="text-xs opacity-60 mb-2">The most striking lines from this conversation:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"One can use science to show that science has limits."
<span class="text-xs opacity-60 not-italic ml-2">— On unknowability theorems</span>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"If I'm in a Heraclitus spacetime, there is only one way to put the pieces together."
<span class="text-xs opacity-60 not-italic ml-2">— Puzzle piece argument</span>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"For me, my theorem that is my philosophy and so I let the results speak for themselves."
<span class="text-xs opacity-60 not-italic ml-2">— Philosophy as proof</span>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"You're grasping too hard on this idea of non-self. Whenever you're grasping on anything, you're not doing the Zen thing."
<span class="text-xs opacity-60 not-italic ml-2">— Zen and doctrine</span>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Why would nature stop when nature could keep building?"
<span class="text-xs opacity-60 not-italic ml-2">— Spacetime maximality</span>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"I really am very slow... tenaciously come back to the same idea again and again and again."
<span class="text-xs opacity-60 not-italic ml-2">— On persistence</span>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I see love in me. I see hate in me. I see pleasure. I see pain... but I never see me."
<span class="text-xs opacity-60 not-italic ml-2">— Hume on the self</span>
</div>

</div>

---
layout: end
---

# Do not give up.

<div class="mt-4 text-sm opacity-70">

"Keep going. Keep trying... it can make a big difference if you just don't give up even when things are not looking good."

</div>

<div class="mt-6 text-xs opacity-50">
Professor JB Manchak · UC Irvine · Theories of Everything with Curt Jaimungal
</div>
