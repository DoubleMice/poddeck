---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The "Inverse Problem" Of Dark Matter Is Insane'
info: |
  Theories of Everything — Dr. Jenny Wagner (Institute of Astronomy and
  Astrophysics / Helsinki Institute of Physics) on why gravitational lensing
  data only constrains local properties, why every dark matter map is
  model-driven extrapolation, and how the inverse problem approach could
  reshape the scientific method.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# The "Inverse Problem" Of Dark Matter Is Insane

<div class="text-lg opacity-80 mt-2">Dr. Jenny Wagner × Curt Jaimungal</div>

<div class="mt-6 text-sm opacity-60">
Theories of Everything · Institute of Astronomy & Astrophysics / Helsinki Institute of Physics · Winner of the Prize for Courageous Science
</div>

<div class="mt-8 grid grid-cols-3 gap-6 text-sm">
<div class="p-3 rounded bg-blue-50 border border-blue-200">

**Guest** — Dr. Jenny Wagner, astrophysicist specializing in gravitational lensing, model-independent data analysis, and inhomogeneous cosmology

</div>
<div class="p-3 rounded bg-green-50 border border-green-200">

**Host** — Curt Jaimungal, host of Theories of Everything, a technically rigorous podcast on physics and philosophy

</div>
<div class="p-3 rounded bg-purple-50 border border-purple-200">

**Context** — Wagner proved mathematically that most "evidence" for dark matter is driven by models, not data — a result 30 years in the making

</div>
</div>

---

# Why This Episode Matters

<div class="text-sm opacity-60 mb-2">Six threads that challenge how we think about dark matter and scientific methodology</div>

<div class="grid grid-cols-3 gap-3 mt-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**The Inverse Problem** — gravitational lensing data only gives you *local* information; every grand dark matter map is model-driven extrapolation

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Forward vs Inverse Modeling** — the community loves forward models, but nature hands us data and we must work backwards — like a detective, not a fortune-teller

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Model Dependence** — converging "evidence" from CMB, rotation curves, and the Bullet Cluster shares a large overlap of the same assumptions

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Cosmological Principle in Trouble** — multiple 5σ anomalies suggest the universe may not be as homogeneous and isotropic as assumed since 1917

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**AI Can't Save Cosmology (Yet)** — Wagner applies Hassabis's three criteria and finds cosmology fails all three prerequisites for a successful AI application

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**A New Scientific Method** — inverse problem solving as a tree of necessary knowledge: lower risk, fewer resources, and you never fall back to square zero

</div>

</div>

---
layout: two-cols
---

# What Is Dark Matter?

85% of the universe's matter is supposedly **missing**. But what does that actually mean?

- We see cosmic structures — galaxy clusters, gravitational bonds — that should fly apart given the visible matter alone
- The luminous, baryonic matter we observe is **too little** to keep structures together
- Without dark matter, these structures would **dissolve over cosmic time**

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**The scale**: not a small discrepancy — **85%** of the entire matter content seems to be missing. We can't explain it away with faint gas or small planets.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<div class="grid grid-cols-1 gap-3 text-sm w-full">
<div class="p-3 rounded bg-orange-50 border-2 border-orange-200 text-center">

### Visible Matter
<div class="text-3xl font-bold text-orange-600 my-1">~15%</div>
<div class="text-xs opacity-70">Stars, gas, planets — everything we can see</div>

</div>
<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">

### Dark Matter
<div class="text-3xl font-bold text-purple-600 my-1">~85%</div>
<div class="text-xs opacity-70">Doesn't interact with light — inferred from gravitational effects</div>

</div>
<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200 text-center">

### Wagner's Question
<div class="text-sm font-semibold text-yellow-700 my-1">How much of that 85% is real vs. model artifact?</div>

</div>
</div>

</div>

---
layout: two-cols
---

# Gravitational Lensing: The Chicken-Egg Problem

Strong gravitational lensing is a powerful probe because it relies **purely on general relativity** — heavy masses curve spacetime, bending light along null geodesics.

The problem: it creates **multiple distorted images** of the same background source.

- If we knew the **lens** perfectly → reconstruct the source
- If we knew the **source** perfectly → reconstruct the lens
- In cosmology, **we know neither**

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">

"It's a chicken-egg problem. We neither know the source, nor do we know the lens."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lensing-problem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Wagner's Core Thesis

<div class="text-sm opacity-60 mb-4">The punchline, in her own words</div>

<div class="p-6 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">

"Local evidence, and I would say global extrapolation."

</div>

<div class="mt-4 text-sm opacity-70">
When Curt summarized her position as "data constrains local information; everything else is model-driven extrapolation," Wagner responded:
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

"You got it 100% right. That's exactly how you describe it."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Where you have data** → you have information (local lens properties: distortion directions, relative magnification)

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Where you don't have data** → you have extrapolation, speculation, prediction — however physically informed

</div>

</div>

---
layout: two-cols
---

# Forward vs Inverse Modeling

Wagner's key methodological distinction — and the heart of the episode.

**Forward modeling**: start with a cause, predict effects. Easy, intuitive, everyone does it. But if nature says "no," you're back to guessing a different model.

**Inverse modeling**: start with what you see, reason backwards to the *necessary* model. Harder mathematically, but you only commit to what the data requires.

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"I'm CSI cosmology if you want to see it like that."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./forward-vs-inverse.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Broken Mug Analogy

<div class="text-sm opacity-60 mb-4">Wagner's intuitive explanation of inverse problem solving</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### Forward Approach
You try to model *everything*: Was it the dog? The kid? The husband? What time? What trajectory?

Each wrong guess sends you back to **square zero**.

<div class="mt-2 text-sm opacity-70">Like trying to predict who knocked the mug off the table by modeling everyone's schedule.</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Inverse Approach
The mug is broken on the floor. **Necessary conclusion**: it fell from the table.

If you guess the culprit wrong, you only fall back **one level** — not to the ground.

<div class="mt-2 text-sm opacity-70">You build a tree of necessary models, each level secured by the one below.</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**The analogy to cosmology**: we see gravitational lensing effects (the broken mug). The *necessary* conclusion is local lens properties. Who or what caused the mass distribution (dark matter? modified gravity?) is a separate, higher-level question — and getting it wrong doesn't invalidate the local data.

</div>

---

# The Condo and Dark Tenants Analogy

<div class="text-sm opacity-60 mb-4">Curt's analogy that Wagner endorsed as "exactly the point"</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The Setup
Imagine modeling a condo building's foot traffic by measuring **doors opening and closing**. Your model includes residents' work schedules, visitors, the concierge...

The doors open **more** than your model predicts. Do you postulate **invisible occupants** — "dark tenants"?

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The Problem
Look at how many **parameters** you put in: work schedules, family sizes, visitor patterns. If you're wrong by a factor of two on just one estimate, your model is completely off.

The inverse approach: just understand **how the door works**. That's a much easier problem.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">

"If you just with one estimate you're a bit off, this adds up. And this is... all of this forward modeling is really fragile."

</div>

---

# Model Dependence: The Uncomfortable Truth

<div class="text-sm opacity-60 mb-4">Why "converging evidence" may be less independent than it seems</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm italic mb-4">

"We are not short of models."

</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Critic's View
We have converging evidence from simulations, rotation curves, the CMB, the Bullet Cluster. How can you say this is "just model-driven"?

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Wagner's Response
Most of these probes share a **large overlap of the same assumptions**. They use the same limited set of reasonable models, filling data gaps with model assumptions.

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm text-center">

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**Analytical era**
<div class="text-xs mt-1">Spheres, ellipsoids — the first models (pre-1970s)</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**Numerical era**
<div class="text-xs mt-1">Computer simulations (1970s–now) — but "what did you put in?"</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

**Heuristic fitting**
<div class="text-xs mt-1">NFW profiles — validated by simulations, but are simulations mimicking reality?</div>

</div>

</div>

---

# MOND vs Dark Matter: Neither Fully Refuted

<div class="text-sm opacity-60 mb-4">Wagner's remarkably balanced assessment</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dark Matter Camp
- Particle physicists excited: could be a new particle (SUSY, WIMPs, axions...)
- Searched at CERN, Fermilab, direct detection experiments
- **Result**: no clear detection after decades of searching

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Modified Gravity Camp
- Moti Milgrom's MOND (1983): modify Newton's law beyond the scale probed by Pioneer satellites
- Survived 40 years, solved some problems
- **Issues**: not general-relativistic, has one unexplained scale parameter

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Wagner's position**: both have problems, but neither can be definitively refuted by current data. She doesn't pick sides — she picks *the data*. Her camp: "I want the least amount of magic in my universe and the most amount of things that I can actually experience."

</div>

---
layout: two-cols
---

# The Bullet Cluster: Not So Smoking

The Bullet Cluster (2004) was long considered the **"smoking gun"** for dark matter — two galaxy clusters colliding, with dark matter and baryonic matter apparently separated.

But a **2025 study** (Sangjun Chae et al.) using James Webb infrared found:

- The merger was **far more complex** than two spheres colliding
- **Intracluster light** traced the merging structure faithfully
- The dark matter "offset" was an artifact of the simplified model

::right::

<div class="flex justify-center items-center h-full pl-4">

<div class="space-y-3 text-sm">
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 2004 Interpretation
Two spherical clumps → dark matter offset from luminous matter → "smoking gun"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 2025 Reanalysis (JWST)
Complex merger with elongated arm → intracluster stars follow the structure → no clear offset

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Pattern
Better telescopes → more detail → previous "evidence" turns out to be model artifact

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"This cannot be a clear hint for dark matter is offset to luminous matter."

</div>
</div>

</div>

---

# Abell 3827: The Model-Independent Test

<div class="text-sm opacity-60 mb-4">Wagner's team put their approach to work on a real galaxy cluster</div>

Abell 3827: an unusual cluster with **four equally bright galaxies** in the center and a nearly complete **Einstein ring** of lensing around them.

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Forward Modeling Result
Dark matter appears offset from the four luminous galaxies — interpreted as evidence that "light does not trace mass"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Wagner's Model-Independent Result
Using star-forming regions to chop multiple images into patches, they tracked local lens properties across each patch

**Finding**: the offset was **completely driven by the models** — the lens properties were changing rapidly, inconsistent with a smooth dark matter halo

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Key insight**: if the mass density changes across a single multiple image, how can we extrapolate to regions far from any data point? The forward models assumed smoothness that the data did not support.

</div>

---
layout: two-cols
---

# Power Laws and Scale-Free Gravity

Why power laws matter for understanding cosmic structure — and why they're philosophically interesting.

- **Power law**: 1/r^α — falls off slowly, never truly hits zero
- **Newtonian gravity** is scale-free: F = Gm₁m₂/r² — depends only on masses and distance, not on time or any other property
- Scale-freeness naturally leads to power laws

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**The wealth analogy**: power laws describe income distribution. You can't predict a billionaire from studying millionaires — there's always a chance of surprise.

</div>

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"There is no mean, there is no variance, and this means that the universe could keep on surprising us."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./power-law.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The DEMON Framework

<div class="text-sm opacity-60 mb-4">Wagner's approach to deriving mass density profiles from first principles</div>

**DEMON** = **D**ark **E**mergent **M**eta halo explanati**ON**s

The problem: standard statistical mechanics **doesn't work for gravity** because gravity does the opposite — instead of maximizing entropy (uniform distribution), gravity collapses everything into a point.

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Penrose Insight
Roger Penrose points out: gravity is the opposite of statistical mechanics. Entropy wants everything spread out; gravity wants everything collapsed.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Wagner's Solution
Start with Newtonian gravity's scale-freeness → derive power laws without statistical mechanics → reason why certain exponents are physically plausible

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The plea**: "Don't use black boxes. Simulations are important, but don't use them as black boxes and just heuristically fit. Try to get" a fundamental physical understanding of *why* a given model works.

</div>

---

# Sobolev Spaces and Infinite Black Holes

<div class="text-sm opacity-60 mb-4">The most mind-bending mathematical result in Wagner's work</div>

When deriving lensing degeneracies, Wagner worked in **Sobolev spaces** — abstract function spaces from functional analysis.

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The Math
In a Sobolev space, if a function is integrable, you can change it by a **null set** without changing the integral. A null set can be a **countable set of point masses** — i.e., black holes.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The Physics
A smooth gravitational potential and one riddled with **infinitely many black holes** (countably infinite) produce the same observable lensing signal.

The math says it's allowed. The physics asks: is it reasonable?

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"Suddenly, this makes sense because this was this one sentence in one of the books on strong gravitational lensing, 'Oh, and we can also put some black holes in this potential. It doesn't matter.' And I thought, 'Where's this coming from?'"

</div>

---

# The Breakthrough: Reading Someone Else's Thesis

<div class="text-sm opacity-60 mb-4">How a quantum chemistry thesis unlocked 30 years of lensing puzzles</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Wagner's Path
Masters at CERN (particle physics) → cancer research & machine learning → astrophysics

All tied together by one thread: **analyzing data under mathematical principles**

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Moment
A friend's quantum chemistry thesis described molecules using local electron positions and positive ions — and Wagner saw the **Laplace operator**, the same functions, the same structure.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### The Result
The math was identical. She went back to her math textbook and found the theorems in functional analysis to describe all lensing degeneracies.

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"I saw the equations and suddenly this is my gravitational lensing problem."

</div>

<div class="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Mark Gorenstein's reaction** (who had been working on lensing degeneracy for decades): "Oh, finally you got it. 30 years after we found out."

</div>

---

# Why Others Missed It

<div class="text-sm opacity-60 mb-4">Wagner on what allowed her to see what astrophysicists couldn't for 30 years</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Astrophysicists Are Phenomenologists
They look at something and have physical intuition: "twice the mass means twice the lensing power." They reason from physics to equations.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Wagner Starts with Equations
She can't say much until she writes down the math. She first solved the equations, *then* found out they made physical sense.

Following Carlo Rovelli's principle: "You should not write down a single thing that you cannot attribute a clear physical meaning."

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**The reduced shear insight**: the parameter "g" (reduced shear) encodes the local shearing power — its direction and amplitude — but is **independent of the mass** needed to produce it. You always see ratios in the equations: something divided by mass. That's the degeneracy the formalism was trying to tell everyone for 30 years.

</div>

---

# The Spherical Cow of Cosmology

<div class="text-sm opacity-60 mb-4">Einstein knew in 1917 that his assumption was a simplification</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic mb-4">

"The cosmos is much more difficult and much more complex than just a spherical cow because our cosmological standard model is a spherical cow. It's homogeneous, isotropic, so the same in every direction and the matter density is the same everywhere."
<div class="text-xs opacity-60 mt-1 not-italic">— paraphrasing George Ellis</div>

</div>

Einstein's 1917 cosmology paper made the assumption of homogeneity and isotropy — but explicitly wrote that he did not think it was true. He saw stars and voids, and hoped that **with more data, we would overcome this simplified assumption**.

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Einstein's Hope (1917)
A starting point — the simplest possible model. With better data, the next level of detail would emerge.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Wagner's Assessment (2023)
After 100+ years, we may finally have enough data to see beyond the spherical cow. Time for the next level of detail.

</div>

</div>

---
layout: two-cols
---

# Cracks in the Cosmological Principle

Wagner co-authored a **2023 review paper** with 22-23 scientists collecting all hints of violation of the cosmological principle.

Key findings:

- **Subir Sarkar's matter dipole**: early vs late universe reference frames don't match — **5σ**
- **Kostas Migkas' bulk flow**: galaxy clusters moving coherently in one direction — **5σ**
- **Giant Arc & Ring** (Alexia Lopez & Roger Clowes): structures too large to have formed in standard cosmology — **3-4σ**
- **CMB anomalies**: the "axis of evil" and other asymmetries

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

If Sarkar's effect is true, it's not just Λ CDM that breaks — it's the **entire class** of homogeneous isotropic models.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cosmo-tensions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Not a Crisis — An Opportunity

<div class="text-sm opacity-60 mb-4">Wagner's optimistic reframing of cosmological tensions</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded text-lg italic mb-4">

"We are now ready to move on. After 100 years of the first standard model that we have, we are now ready to see the next level of detail."

</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Pessimistic View
"Cosmology in crisis" — our models are breaking down, decades of work wasted, dark matter fights are never-ending.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Wagner's View
Homogeneous and isotropic is "the second most boring thing you can do." As data quality increases, you *should* see dipoles, preferred directions, and finer structure. That's progress, not crisis.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The key argument**: particle physicists *try to tear down their models* — they want to be proven wrong. In astrophysics, people get attached to traditions. But after 40 years of dark matter, the data is pushing us to move on.

</div>

---

# Penrose's Conformal Cyclic Cosmology

<div class="text-sm opacity-60 mb-4">A brief detour into forward modeling speculation</div>

Roger Penrose proposes that the CMB contains **concentric rings of low variance** — remnants of black hole mergers from a **previous universe** (before the Big Bang).

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The Claim
Penrose and colleagues found these rings in WMAP data (7 years). A testable prediction from a revolutionary theory about space and time *before* the Big Bang.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### The Counter
Other teams argue: after accounting for CMB foregrounds and using different statistical baselines, the significance changes. The jury is still out.

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Wagner's meta-point**: this is a brilliant example of forward modeling. What do you *want* to believe? Penrose makes testable predictions (good), but the interpretation depends on your statistical baseline and foreground corrections. Neither confirmed nor refuted — just another theory to gamble on.

</div>

---

# Neil Turok and the Minimalist Approach

<div class="text-sm opacity-60 mb-4">Where Wagner and Turok converge — and where they diverge</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Convergence
Both are minimalists: if detectors haven't found new particles, stick to the contents we have. Turok's right-handed neutrinos proposal is "a small extension" — reasonable, not exotic.

Wagner: "We should try to find a theory that does not use any exotic stuff."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Divergence
On the cosmological constant: Turok seeks a quantum explanation. Wagner thinks lambda came from classical theory (an invariant in GR) and should first be explained classically.

Subir Sarkar has pointed out problems with Turok's quantum approach.

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**The underdetermination problem** (from Thomas Buchert): you split the universe into baryonic physics, dark matter, and dark energy — but with several unknowns, you can redistribute the signal between them. It's hard to definitively kill dark matter or dark energy because there's always wiggle room.

</div>

---
layout: two-cols
---

# AI Can't Save Cosmology (Yet)

Wagner applies **Demis Hassabis's three criteria** for a successful AI application (from his Nobel lecture on AlphaFold):

1. **Know your feature space** (and it should be huge)
2. **Know your goal function** (what to optimize)
3. **Lots of training data**

Does cosmology meet any of these?

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm font-bold">

"None of the three."

</div>

<div class="mt-2 text-sm opacity-80">
An AI trained on simulated lensing data achieved 95% recovery — but on real observations, rates dropped because the simulations were missing something the real universe had.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-criteria.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why AI Falls Short in Cosmology

<div class="text-sm opacity-60 mb-4">Each of Hassabis's three criteria — examined against cosmology</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Feature Space ❌
What *is* dark matter? A particle? A fluid? A modification of gravity? We don't have amino acid equivalents — we can't define the building blocks.

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Goal Function ❌
AlphaFold minimized free energy. What's the equivalent for GR? Mass-energy in general relativity doesn't have a unique definition. Statistical mechanics doesn't work for gravity.

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Training Data ❌
DESI found 11 million galaxies — sounds like a lot, but that's less than the population of Ghana in a cosmic volume. And we can't rerun the universe.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The deeper problem**: even if AI produces a model that fits the data, it's just one option of many — we already know from the inverse problem that multiple models fit equally well. A black-box model we can't physically interpret doesn't help us understand the universe.

</div>

---

# Naked Singularities: An Unexpected Detour

<div class="text-sm opacity-60 mb-4">Wagner tried to kill a theory — and couldn't</div>

At a pandemic conference, someone proposed explaining dark energy through **primordial black holes repelling each other with charge** — which turned out to require naked singularities.

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Wagner's Plan
"It's winter break. I have nothing to do. How about I just prove this wrong in like 14 days."

She took the predicted charges and masses and forward-modeled the consequences for gravitational lensing.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### The Surprise
Even naked singularities — things you'd expect to be wildly disruptive — produce Einstein rings **much smaller** than expected. You'd need a perfect alignment to observe any effect.

</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"I cannot kill this theory." — And dark matter is even harder to kill: it's just a word. See an offset? Make it collisional. Don't? Make it collisionless. The flexibility is its weakness.

</div>

---
layout: two-cols
---

# A Better Scientific Method

Wagner's vision: replace gambling on forward models with **inverse problem solving** as the default scientific method.

Build a **tree of necessary models** from trunk to branches to leaves, where each level rests on validated assumptions below it.

- **Lower risk**: wrong at a leaf? Fall back to the branch, not the ground
- **Fewer resources**: higher in the tree = narrower choices = cheaper experiments
- **Positive knowledge**: every level is something you *know*, not something you guessed

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"We have to rethink our scientific method completely."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./knowledge-tree.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Radical for Being Conservative

<div class="text-sm opacity-60 mb-4">Curt's observation that resonated throughout the conversation</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded text-lg italic mb-4">

"What's super interesting is you're more radical for being conservative."

</div>

Wagner and Subir Sarkar aren't proposing exotic new physics — they're *removing* exotic assumptions. But paradoxically, this sober approach faces more resistance than speculative theories, because:

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Tradition**
After 40 years, people who fought for dark matter don't want to see it die. "Did we do all of this in vain?"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Human Nature**
Humans want predictability and traditions. A universe that keeps surprising us "maybe there's a reason to panic."

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Funding**
Wagner gets rejections saying: "Nobody has done a progress in 30 years on this research direction. Why should you?"

</div>

</div>

---

# Applications Beyond Cosmology

<div class="text-sm opacity-60 mb-4">The inverse problem approach as a transferable template</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Cancer Research
100+ types of cancer, each with multiple signaling pathways. Forward models assume one pathway — then a patient fails treatment because there's a *second* pathway. Inverse modeling asks: what's the *necessary* ingredient to reach this state?

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Particle Physics
Huge amounts of data, model dependence in triggering and reconstruction. But particle physicists have an advantage: they can **rerun experiments**. Cosmologists can only watch.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Criminal Investigation
Wagner's approach is literally what detectives do — start with the evidence (the effect), then reason backwards to the cause. Forward modeling is guessing suspects before examining the crime scene.

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Why forward modeling dominates in experimental science**: because you have **agency** — you can set up conditions and test predictions. In cosmology, you can't rerun the universe. That's why the inverse approach is *especially* important for observational science.

</div>

---

# The Inspirations Behind the Work

<div class="text-sm opacity-60 mb-4">The people who shaped Wagner's thinking</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Professor Willy Jaeger
Wagner's math professor in her first semesters. Taught calculus and functional analysis to a room of biologists, chemists, and physicists — always explaining *what it's good for* and where the proof must match reality.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### George Ellis
Did his PhD with Dennis Sciama in Cambridge. Champion of inhomogeneous cosmology. Won the Templeton Prize for applying cosmological mathematics to improve conditions for underprivileged people in South Africa.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Carlo Rovelli
"You should not write down a single thing that you cannot attribute a clear physical meaning." Wagner took this to heart — first solve the equations, then find what every variable means physically.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Dennis Sciama
One of the first in modern cosmology to ask the inverse problem question. His intellectual lineage — through Ellis and the inhomogeneous cosmology community — directly informs Wagner's approach.

</div>

</div>

---

# "What Is Gravity?"

<div class="text-sm opacity-60 mb-4">The question that has driven Wagner since she was 16</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic mb-4">

"Academia is not the easiest way to earn money. Actually, it's the hardest, and it's the most stressful one. But this is the only reason why I'm doing this. I want an answer."

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

When she first heard about general relativity: gravity is a force, but it also seems to *be* spacetime. "It's not just like electromagnetism that lives on a background. It seems to be the background."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

Her Sobolev space moment: as a student, "Who the hell needs this? Why on Earth should I care?" Years later, it unlocked the entire lensing degeneracy problem. The concept clicked when she saw its physical meaning for the first time.

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Life lesson**: "Don't listen to others. Make your own judgment." Wagner grew up "in the wrong bubble" and it took time to find the community — Ellis, Buchert, Sarkar — who shared her conviction that the data should lead, not the models.

</div>

---

# Core Quotes

<div class="text-xs opacity-60 mb-2">The most memorable lines from this conversation:</div>

<div class="space-y-2">

<div class="py-2 px-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"Local evidence, and I would say global extrapolation."
<div class="text-xs opacity-60 not-italic">— on what gravitational lensing data actually tells us</div>
</div>

<div class="py-2 px-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"I'm CSI cosmology if you want to see it like that."
<div class="text-xs opacity-60 not-italic">— on the inverse problem approach to astrophysics</div>
</div>

<div class="py-2 px-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Oh, finally you got it. 30 years after we found out."
<div class="text-xs opacity-60 not-italic">— Mark Gorenstein's reaction to Wagner's discovery</div>
</div>

<div class="py-2 px-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"We are not short of models."
<div class="text-xs opacity-60 not-italic">— on the proliferation of dark matter theories</div>
</div>

<div class="py-2 px-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"We are now ready to move on. After 100 years of the first standard model."
<div class="text-xs opacity-60 not-italic">— on the positive view of cosmological tensions</div>
</div>

<div class="py-2 px-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"I want the least amount of magic in my universe and the most amount of things that I can actually experience."
<div class="text-xs opacity-60 not-italic">— on her empiricist worldview</div>
</div>

</div>

---
layout: end
---

# "Don't listen to others. Make your own judgment."

Dr. Jenny Wagner

<div class="text-sm opacity-60 mt-4">
Theories of Everything with Curt Jaimungal
</div>
