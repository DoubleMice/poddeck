---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Michael Nielsen – Why Aliens Will Have a Different Tech Stack Than Us'
info: |
  Dwarkesh Patel interviews Michael Nielsen on the nature of scientific progress,
  verification loops, the vastness of the tech tree, and why alien civilizations
  would develop radically different technologies.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
fonts:
  sans: 'Inter'
  serif: 'Source Serif Pro'
---

# Why Aliens Will Have a Different Tech Stack Than Us

<div class="text-lg opacity-80 mt-4">Scientific Progress · Verification Loops · The Infinite Tech Tree</div>

<div class="mt-10 text-sm opacity-60">
Michael Nielsen · Dwarkesh Patel Podcast · 2024
</div>

<div class="mt-8 text-xs opacity-50">
A quantum computing pioneer, open science advocate, and writer<br/>
on how we recognize scientific progress — and what it means for AI.
</div>

---

# Why This Episode Matters

<div class="text-sm opacity-70 mb-4">A deep conversation about the most fundamental question facing AI-accelerated science: how does progress actually happen?</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Falsification Is Messy
The real history of science — from Michelson-Morley to Mercury's orbit — is far messier than the textbook version.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Hostile Verification Loops
Experiments can actively mislead you for decades. Prout's hypothesis waited 85 years for the concept of isotopes.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The Infinite Tech Tree
We're near the bottom of an immense branching tree of knowledge. Different civilizations would explore different branches.

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### AlphaFold ≠ Explanation
Neural networks may be a new type of scientific object — not explanations in the classic sense, but something else.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The Bottleneck Shifts
Programmers freed from writing code are now bottlenecked on having interesting design ideas.

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Deep Learning vs. Deep Understanding
AI helps you move faster — but does it help you learn? Being stuck may be the most important part.

</div>

</div>

---

# Michelson-Morley: The Myth vs. the Reality

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### The Textbook Story
Michelson-Morley proved the ether didn't exist → created a crisis in physics → Einstein solved it with special relativity.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### What Actually Happened
The experiment was designed to test different theories of the ether — not to disprove the ether itself. Michelson continued to believe in the ether until he died in the late 1920s.

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Key insight:** Even "the" ether was a misnomer — there were many competing ether theories. The experiment ruled out some versions but not all. Falsification is far more complicated than the simplified version suggests.

</div>

<div class="mt-4 text-sm opacity-70">

Einstein himself stated later in his life he wasn't even sure whether he was aware of the Michelson-Morley paper at the time. Something else entirely was driving his thinking.

</div>

---
layout: two-cols
---

# Lorentz vs. Einstein: Same Math, Different Universe

Lorentz derived the Lorentz transformations — the mathematical basis of special relativity — but interpreted them as effects of moving through the ether.

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Lorentz's view:** Length contraction and time dilation are caused by pressure from moving through the ether — it's warping clocks, warping measures of length.

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Einstein's view:** Space and time are just different than what we thought. No ether needed — it's purely kinematics.

</div>

<div class="mt-3 text-sm opacity-70">

The scientific community adopted the "more correct" interpretation before it was experimentally confirmed (muon decay experiments came ~40 years later, in the 1940s).

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lorentz-einstein.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Poincaré's Trap: Knowing Too Much

<div class="mt-4 text-sm opacity-70 mb-6">Poincaré understood the principle of relativity. He understood the speed of light is the same in all inertial reference frames. These are the ideas Einstein uses to deduce special relativity. And yet...</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### What Poincaré got right
- The principle of relativity
- Speed of light is constant across frames
- The mathematical apparatus

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### What held him back
- Believed length contraction was a dynamical effect — particles being pushed together by some external force
- Didn't realize it's purely kinematics
- Still had this dynamical picture in a 1909 paper

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">

Nielsen's interpretation: "It's almost like he knew too much... he had sort of almost too grand a vision in mind, and Einstein sort of almost subtracts from that."

<div class="text-xs opacity-60 mt-1 not-italic">— paraphrasing Nielsen on Poincaré's expertise becoming an obstacle</div>
</div>

---

# Darwin's Genius Wasn't the Idea

<div class="mt-4">

Thomas Huxley, a contemporary biologist, read The Origin of Species and said:

</div>

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"How extremely stupid to not have thought of this?"

</div>

<div class="mt-2 text-sm opacity-60">And yet nobody reads the Principia Mathematica and thinks, "God, why didn't I beat Newton to the punch here?"</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What made it possible
- **Geology (1830s):** Lyell establishes deep time — millions and billions of years
- **Paleontology:** Fossils of intermediate species, including intermediate humans
- **Colonization:** Biogeography from voyages around the world

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Parallel discovery as evidence
Wallace independently came up with virtually the same idea and sent his manuscript to Darwin. Darwin's reaction, as Nielsen puts it: essentially "Fuck." The simultaneous emergence suggests the building blocks were in place and necessary.

</div>

</div>

---

# Aristarchus to Copernicus: The 1,800-Year Wait

<div class="mt-4 text-sm opacity-70">Aristarchus proposed heliocentrism in the 2nd century BC. It was only in 1838 that stellar parallax was measured — the empirical proof. Yet we adopted heliocentrism centuries before that proof.</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### ~200 BC
<div class="text-2xl font-bold text-blue-600 my-2">Aristarchus</div>
<div class="text-xs opacity-70">Heliocentrism proposed; dismissed because we should see stellar parallax if Earth moves</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 1543
<div class="text-2xl font-bold text-orange-600 my-2">Copernicus</div>
<div class="text-xs opacity-70">Not more accurate than Ptolemy. Had more epicycles. What made it "better"?</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 1838
<div class="text-2xl font-bold text-green-600 my-2">Parallax measured</div>
<div class="text-xs opacity-70">The empirical confirmation finally arrives — centuries after the community already shifted</div>

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The puzzle:** Copernicus's theory was less accurate (more epicycles) and not simpler. So how could you have known ex ante it was correct? Newton's theory of gravitation later unified planetary motion, terrestrial motion, and tides — three disconnected phenomena explained by one set of ideas.

</div>

---
layout: two-cols
---

# The Verification Loop Problem

Science's "verification loops" are far longer and more treacherous than coding's unit tests.

<div class="mt-4 space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Short loop:** Neptune predicted from Uranus's anomaly → point telescope → found it. Massive success for Newtonian gravity.

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Failed loop:** Mercury's anomaly → predict planet Vulcan → point telescope → not there. The real answer required general relativity.

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Same method, opposite outcomes.** A priori, you can't tell which case you're in.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./verification-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Uranus vs. Mercury: Why Falsification Is Hard

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Uranus (Success)
- Orbit doesn't match Newtonian predictions
- Leverrier predicts unseen planet (1846)
- Point telescope → Neptune is there
- **Conclusion:** Newton was right; just add a planet

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### Mercury (Failure → Revolution)
- Orbit precesses 43 arc seconds per century more than predicted
- Predict planet Vulcan → not there
- Invoke cosmic dust, tiny planets, measurement errors...
- **Real answer:** General relativity (decades later)

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**The Pioneer Spacecraft (1990s):** Some noticed the spacecraft weren't quite where expected. New physics? No — a slight asymmetry in the spacecraft caused thermal radiation to be slightly larger in one direction. As Nielsen notes: "99.9% of the time, it just turns out to be some effect like this."

</div>

---
layout: two-cols
---

# Hostile Verification Loops: Prout's 85-Year Wait

The verification loop doesn't just take long — it can actively fight against you.

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**1815:** Prout hypothesizes all atomic nuclei have whole number weights (made of hydrogen).

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Problem:** Chlorine measures at 35.5. More precise measurement: 35.46 — getting further from any whole number.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**~1900:** Isotopes discovered. What you measure is a mixture of isotopes that can't be chemically distinguished — only physically.

</div>

</div>

<div class="mt-3 text-sm opacity-70">

The verification loop was "actively hostile against you against the correct theory" for 85 years.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./uranus-mercury.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# What This Means for AI and Science

<div class="mt-4 text-sm opacity-70 mb-4">Some people think AI will make disproportionate progress in science because science has tight verification loops like coding. Nielsen pushes back:</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The optimist's case
- AI is great at coding because you can run unit tests
- Science has experiments → similar tight loop
- AlphaFold is already a massive success

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The complications
- There's an infinite number of theories compatible with any given experiment
- Why we converge on the "right" one is hard to articulate
- Verification loops can be hostile for decades
- Even coding's bottleneck is now shifting to design ideas, not code production

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

Nielsen on programmers: they're "no longer nearly as bottlenecked by their ability to produce code, but they are still bottlenecked by" having interesting design ideas. They used to have three weeks to implement a prototype — now three hours, and they don't have as good ideas afterwards.

</div>

---

# AlphaFold: Three Views on a New Kind of Object

<div class="mt-4 text-sm opacity-70 mb-4">AlphaFold is an enormous success. But what kind of success is it? Nielsen lays out three possibilities:</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### View 1: Not an Explanation
<div class="text-sm mt-2">

It has 100M+ parameters. No deep explanatory principles. It can't predict things it was never meant to — unlike GR predicting Mercury's orbit. It's a nice model, but not science.

</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### View 2: Contains Explanations
<div class="text-sm mt-2">

Maybe interpretability work can extract insights — "archaeology of AlphaFold." AlphaZero strategies may have been borrowed by Magnus Carlsen after public forensics were released.

</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### View 3: A New Type of Object
<div class="text-sm mt-2">

Not explanations in the classic sense — but something with new operations: merge, distill, compress. A new opportunity in the philosophy of science.

</div>
</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**The AlphaFold paradox:** The AI bit is remarkable, but a "massive fraction of the success" is the protein data bank — decades and billions of dollars of experimental data. The story is primarily about data acquisition.

</div>

---
layout: two-cols
---

# The Epicycles Problem for AI Science

Could you train a model on pre-Copernican astronomical data and hope for heliocentrism to pop out?

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Dwarkesh's worry:** You'd just keep finding more epicycles. The parameters would encode epicycle after epicycle — never the conceptual leap.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Nielsen's partial response:** Maybe you apply constraints — force simplification, distill — use the model as scaffolding toward a simpler theory.

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The hard part:** Switching from Ptolemy to Copernicus locally doesn't make things more accurate. It requires a "swap" that only makes sense globally.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./alphafold-views.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Keeping Many Research Programs Alive

<div class="mt-4">

Nielsen emphasizes diversity of approaches as central to scientific progress:

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**The lesson from Uranus vs. Mercury:** Very similar ideas were pursued — predicting an unseen planet. It was a massive success for Uranus (Neptune found) and a complete failure for Mercury (needed general relativity). You needed to do both. You can't tell in advance which case you're in.

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

**For AI-accelerated science:** You need independent AI research programs that start with different biases and initial conditions. The verification loop may be long — you need to keep all those programs alive at the same time.

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Where bottlenecks come from:** "We always get bottlenecked where the previous processes and heuristics don't apply. That's almost sort of definitionally what causes the bottlenecks." People are smart — they don't get stuck in the same places. They keep getting bottlenecked in different places.

</div>

---

# Newton: The Last of the Magicians

<div class="mt-4">

Nielsen reads a passage from Keynes' essay on Newton:

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"Newton was not the first of the age of reason. He was the last of the magicians, the last great mind which looked out on the visible and intellectual world with the same eyes as those who began to build our intellectual inheritance rather less than 10,000 years ago."

</div>

<div class="mt-4 text-sm opacity-60">— John Maynard Keynes, from a Cambridge lecture on Newton's papers</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

From the Keynes essay: "There was extreme method in his madness... They are just as sane as the Principia, if their whole matter and purpose were not magical. They were nearly all composed during the same 25 years of his mathematical studies."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**The same heuristics** that Newton applied to his alchemical work were applied to astronomy. He was a transitional figure — part superstitious, part modern, a "funny hybrid."

</div>

</div>

---
layout: two-cols
---

# The Vast, Unexplored Tech Tree

The science and technology tree is probably much larger than we realize. We are near the bottom.

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Computer science:** Turing and Church laid down "the theory of everything" in the 1930s. We've spent 90 years exploring consequences — public key cryptography, blockchains — ideas that lay hidden since the start.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Phases of matter:** In school we learned 3-5 phases. As a physicist, superconductors, superfluids, Bose-Einstein condensates, quantum Hall systems... "It looks like actually there's a lot of phases of matter to discover."

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Knuth's anecdote:** A mathematician in the 1960s was contemptuous — "come back when there's a thousand deep theorems." Decades later, Knuth wrote: "there clearly are a thousand deep theorems now."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tech-tree.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why Aliens Would Have Different Technology

<div class="mt-4 text-sm opacity-70 mb-4">Nielsen's claim: if we met aliens, they would have a totally different technological stack. The branching of the tech tree is so wide and so path-dependent that different civilizations would end up in different parts.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Why it's plausible
- We're visual creatures; other animals are oral. This biases the types of thoughts you have
- "Most parts of the tech tree are never going to be explored" — there are too many deep ideas waiting to be discovered
- Choices about how to explore actually matter

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What would converge?
- Numbers and counting seem universal
- But decimal systems? Linear vs. 2D/3D representations?
- "Maybe we're missing something really simple and obvious that's actually way better"
- The answers are "just not at all obvious"

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

Nielsen: "We're basically slightly jumped up chimpanzees... we're slow and it's taking us time." What do we look like a million years into the future, with all the different ideas about how to manipulate computers and information?

</div>

---
layout: two-cols
---

# Gains from Trade Between Civilizations

Different tech stacks → enormous gains from trade — possibly the most important fact about the far future.

<div class="mt-4 space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Dwarkesh's key insight:** If different civilizations have radically different technologies, "it makes friendliness much more rewarding." Nielsen's reaction: "That's a very important observation... I hadn't thought about that at all."

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**GitHub but for aliens:** Nielsen imagines being handed all the "code" from an alien civilization — their specification of algorithms. It would contain many interesting new ideas and would take forever to dig through.

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The limits:** "We don't trade with chimpanzees." Power imbalances shift groups into domination mode. Comparative advantage exists, but it doesn't guarantee trade happens on terms above subsistence.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gains-from-trade.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Proteins as an Alien Library

<div class="mt-4">

Nielsen's original intuition for the "alien tech stack" idea came from biology:

</div>

<div class="mt-6 p-6 text-base italic border-l-4 border-green-500 bg-green-50 bg-opacity-20">

"We've been gifted by biology just this immense library of machines no doubt containing an enormous number of very interesting ideas and we're just at the very very very beginning of understanding it."

</div>

<div class="mt-4 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Hemoglobin
<div class="text-xs opacity-70 mt-2">Tens of thousands of papers. Still don't fully understand it.</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Insulin
<div class="text-xs opacity-70 mt-2">One of the most important medical discoveries, derived from understanding a single protein.</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### The Ribosome
<div class="text-xs opacity-70 mt-2">A "miraculous little factory" at the center of biology — really is like manufacturing infrastructure.</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

There are hundreds of millions of known proteins. Each one a machine we barely understand. This is what a gift from a different branch of the tech tree looks like — evolution explored paths we haven't.

</div>

---
layout: two-cols
---

# The Dessert Buffet: Why Diminishing Returns Are Misleading

Nielsen's analogy for the "low-hanging fruit" argument:

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**The setup:** You go to a wedding. 30 desserts. Naturally, the best ones go first. This is the argument for diminishing returns across fields.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**The twist:** But somebody is standing behind the table, restocking. "A little bit later much better desserts appear." Computer science arose as a side effect of abstruse questions in logic — boom, explosion.

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**New fields = new desserts:** Young people flood in because "you can be 21 and make major breakthroughs" rather than spending 25 years mastering everything done before.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dessert-buffet.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bloom et al. and the Productivity Puzzle

<div class="mt-4 text-sm opacity-70 mb-4">Dwarkesh raises the famous "Are Ideas Getting Harder to Find?" paper — Moore's law requires 9% more semiconductor researchers per year to sustain 40% annual transistor density improvement.</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The narrow finding
All of Bloom et al.'s examples pick a particular metric in a particular field. They look at agricultural productivity, semiconductor density, etc. — always narrow.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What's missing
External consequences are excluded. GPUs don't show up — "the ability to parallelize" is a new kind of progress that their metrics don't capture. New fields keep opening up.

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Is diminishing returns intrinsic?** Nielsen notes: "One thing which hasn't changed that much is the individual minds which are doing this kind of work." Maybe what needs to change is the capabilities of the minds themselves — or the institutional structures around them. Scientific stagnation before ~1700 was partially bound up with the absence of good meta-ideas about how to do science.

</div>

---

# The Technological Determinist Trap

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

Nielsen: "I really dislike technological determinist arguments. I'm willing to buy it sort of low enough down when progress is relatively simple, but higher up you start to shape the way in which you do the exploration."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### We already shape the tech tree
- DDT banned
- Chlorofluorocarbons phased out
- Nuclear weapons nonproliferation
- Restrictions getting more preemptive — institutions that influence how we explore

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Information as the ultimate trade good
Information is expensive to produce but cheap to verify and cheap to send. The question: how much future productivity can be distilled down to information? 3D printers have been "the next big thing for at least 20 years" — but the ribosome really is at the center of biology.

</div>

</div>

---

# Quantum Computing: Why Not in the 1950s?

<div class="mt-4 text-sm opacity-70 mb-4">John von Neumann was pioneering computation AND deeply interested in quantum mechanics. He could have invented quantum computing. So why did it take until the 1980s?</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Two historically contingent catalysts

**Personal computing (late 1970s):** Apple II, Commodore 64 — computation became salient to many more people. Feynman got one of the first PCs around 1980 and was so excited he tripped and hurt himself carrying it.

**Ion traps:** The ability to manipulate single quantum states matured around the same time. Before that, you just couldn't work with individual quantum systems.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Nielsen's path into the field

In 1992, as a student, he asked his quantum mechanics professor Jared Milburn for papers. Milburn gave him a giant stack including Feynman (1982) and Deutsch (1985) — "at a time when essentially nobody in the world was working on it."

Nielsen: these papers were "asking very fundamental questions and you're sort of like, oh, I can make progress here."

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Looking ahead:** We've been thinking about quantum computing for only 40 years — mostly without the devices. It's like thinking about computer science in the 1700s knowing only AND and OR. "You can't anticipate Bitcoin. You can't anticipate deep learning."

</div>

---

# The Market for Follow-Ups

<div class="mt-4">

How do you know which ideas are worth building on? Shannon publishes a paper. Hundreds of other papers exist. What makes people gravitate to Shannon's work?

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Nielsen's personal algorithm
You're trying to contribute to humanity's understanding. You apply a "low-hanging fruit algorithm" — relative to your particular interests and abilities, where should you pick up your shovel and start digging? Quantum computing in 1992 looked like "quite a good place to start digging."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What makes it work
- Contact with something "deeply important"
- Sense that "we as a civilization don't have this"
- Tractable problems where you can make progress
- Benefiting from the taste of mentors (Milburn's stack of papers)

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

Deutsch's conjecture that a universal quantum Turing machine should be able to efficiently simulate any physical system — "that kind of question is very interesting and very exciting. It's obviously a fundamental question about the universe."

</div>

---

# Open Science and the Political Economy of Knowledge

<div class="mt-4">

The open science movement has made "publicly funded science should be open science" a live argument — that alone is a major success.

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The historical parallel
Three centuries ago, scientists disclosed results as anagrams — scrambled sentences you could unscramble later to prove priority. It took over a century to develop the modern system of papers, attribution, and reputation.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The preprint paradox
Nielsen's favorite illustration: Biologists said "biology is so much more competitive — we need to protect our priority, can't upload preprints." Physicists said "physics is so much more competitive — we need to establish priority by uploading as rapidly as possible." Same argument, opposite conclusions. The attribution economy is constructed, not discovered.

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

Now we can share code, data, in-progress ideas — but there's no direct credit for these. "Making it a live issue is I think a very important thing to have done."

</div>

---

# The LHC: No One Person Understands It

<div class="mt-4">

Nielsen snuck into an accelerator physics conference. What he found:

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

A group of experts on numerical inverse methods — figuring out what particle collision produced a given shower of decay products at the detector. "You could spend a lifetime just learning how to solve some of these inverse problems and you would know nothing about quantum field theory, you would know very little about detector physics, very little about vacuum physics."

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center">

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold">1,000+</div>
<div class="text-xs opacity-70">authors per paper</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold">Deeply different</div>
<div class="text-xs opacity-70">specialties within the collaboration</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold">High-level talk</div>
<div class="text-xs opacity-70">but no deep understanding of each other's work</div>
</div>

</div>

<div class="mt-4 text-sm opacity-70">

This is collective science in action — no individual understands all the logical and explanatory levels necessary to discover the Higgs boson. Progress requires many specialties working in parallel, trusting each other's expertise.

</div>

---

# Prolificness vs. Depth: The Equal Odds Rule

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Simonton's equal odds rule
The probability that any given paper, book, or work will be extremely important is roughly constant through a person's lifetime. What determines the most productive era is simply how much they're publishing. "Any given thing has equal odds of being extremely important."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The counterpoint
Gödel published almost nothing. But broadly: "you need a very good reason to be avoiding" prolificness. Nielsen has met many brilliant people "just obsessed that they are going to work on the great project that makes them famous and they never do anything." Often they just don't want public judgment.

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**Two types of work:** Routine stuff (avoid procrastination, do it fast or outsource) and high-variance stuff (be willing to go to different places, talk to different people — most won't be useful). Balancing these is hard — "it's almost like a personality trait which one you prefer."

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Einstein's 1905:** Delete special relativity — extraordinary year. Delete special relativity AND the photoelectric effect — "still an extraordinary year. A plausibly multi-Nobel-Prize-winning year."

</div>

---

# The 30-Minute Walk to Work

<div class="mt-8 p-6 text-lg italic border-l-4 border-green-500 bg-green-50 bg-opacity-20">

"When I worked in San Francisco, a practice I used to have each day was instead of taking the 15-minute walk to work, I would take the more beautiful 30-minute walk... partially just because it was beautiful but partially also as just a reminder: there are real benefits to not being efficient."

</div>

<div class="mt-6 text-sm opacity-60">— Michael Nielsen</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Flow is overrated
"There's this terrible idea people have that they should be in flow all of the time." High performers don't believe this — athletes are in flow during games but not during training. "When they're training they're not. They're stuck a lot of the time."

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### The million-dollar test
Nielsen would ask students: if a million dollars had been at stake, would you have put the same effort in? "The answer is no. Invariably."

</div>

</div>

---
layout: two-cols
---

# AI and Learning: Moving Faster, but Understanding Less?

Dwarkesh and Nielsen discuss whether AI actually helps you learn:

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**The seduction:** Back-and-forth with a chatbot is entertaining. There's always a next question to ask — you avoid the hard, aversive thinking. "It makes it easier because instead of doing some intermediate thinking, there's always a next question you can ask a chatbot."

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Being stuck matters:** Nielsen: "spending time stuck is incredibly important... that very hard-wonness of it means that you internalize it afterwards."

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**The 3-month essay vs. the 2-day essay:** "I didn't learn very much from the ones that only took a couple of days. Whereas some of the ones that took 3 months, I'll be 15 years later I'll still remember."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./learning-depth.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Deep vs. Shallow: Alan Kay on Linux

<div class="mt-6 p-6 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20">

Alan Kay was asked about Linux. Nielsen paraphrases: "It doesn't have anything to do with computer science. It's just a great big ball of mud. There's a few interesting ideas in there which are worth understanding, but mostly all your learning is stuff about Linux. You're not actually learning anything which is transferable."

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The seductiveness of systems
There's a certain kind of mind that finds learning all the bits of a Rube Goldberg machine entertaining. But "if your objective is to understand the fundamentals of computing, it's much less clear that that's a good use of your time."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### The podcaster's dilemma
Dwarkesh worries about the same trap: interviewing 100 experts but never going deep enough to build real understanding. "I vaguely understand this, it's not clamped."

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

Nielsen's prescription: the standard you hold yourself to determines your ability to integrate knowledge. "Some people 'going deep' means they read a couple of blog posts. Some people it means they wrote a book about it."

</div>

---

# What Standard Are You Holding Yourself To?

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Read blog posts
<div class="text-xs opacity-70 mt-2">Some people's definition of "going deep"</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Read a book
<div class="text-xs opacity-70 mt-2">A common level of commitment</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Wrote a book
<div class="text-xs opacity-70 mt-2">The standard that actually integrates knowledge</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Dwarkesh's method for this interview:** Went through three lectures of Susskind's special relativity course. But the problem: almost no practice problems. He hired a physicist friend to write them — "every lecture I want a bunch of practice problems to go through them and I'm planning on being properly humbled."

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Nielsen's advice:** The most demanding creative context is what yields learning. "How do you make it as jugular as possible? The higher you can raise the stakes, the better." A podcast interview isn't high stakes enough — you're not writing a book that replaces the current standard textbook.

</div>

---

# The Intelligence Age May Be Brief

<div class="mt-4 text-sm opacity-70 mb-4">Dwarkesh proposes a "smoke a joint and take a puff" thought experiment about transitions in civilization:</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xl font-bold text-blue-600">100k yrs</div>
<div class="text-xs opacity-70">Stone Age</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xl font-bold text-green-600">10k yrs</div>
<div class="text-xs opacity-70">Agriculture</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xl font-bold text-orange-600">300 yrs</div>
<div class="text-xs opacity-70">Industrial Revolution</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xl font-bold text-purple-600">??? yrs</div>
<div class="text-xs opacity-70">AI → ???</div>
</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">

**Dwarkesh's provocation:** Each transition is faster. Nobody at the start of the Industrial Revolution would have predicted AI as the next demarcation. Maybe the "intelligence age" is also quite short — and what comes after is something we don't even have the ontology to describe.

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Nielsen agrees:** "You can't speculate with a bunch of chimpanzees about what it would be like to have language." And adds an intriguing thought: quantum computers may enable a "strictly larger class of interesting computations" — maybe AQGI (artificial quantum general intelligence) is qualitatively different from classical AGI, with a brief period between them.

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Newton was not the first of the age of reason. He was the last of the magicians, the last great mind which looked out on the visible and intellectual world with the same eyes as those who began to build our intellectual inheritance rather less than 10,000 years ago."
<div class="text-xs opacity-60 mt-1 not-italic">— Keynes on Newton, read by Nielsen</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"How extremely stupid to not have thought of this?"
<div class="text-xs opacity-60 mt-1 not-italic">— Thomas Huxley after reading Darwin's Origin of Species</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Most parts of the tech tree are never going to be explored... there's just too many interesting ways of combining things."
<div class="text-xs opacity-60 mt-1 not-italic">— Nielsen on the vastness of possible science</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"It makes friendliness much more rewarding."
<div class="text-xs opacity-60 mt-1 not-italic">— Dwarkesh on gains from trade between civilizations with different tech trees</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Spending time stuck is incredibly important... that very hard-wonness of it means that you internalize it afterwards."
<div class="text-xs opacity-60 mt-1 not-italic">— Nielsen on why AI chatbots may undermine deep learning</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"We're basically slightly jumped up chimpanzees... we're slow and it's taking us time."
<div class="text-xs opacity-60 mt-1 not-italic">— Nielsen on how little of the tech tree humanity has explored</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-400 rounded italic">
"There are real benefits to not being efficient."
<div class="text-xs opacity-60 mt-1 not-italic">— Nielsen on his daily 30-minute walk instead of 15</div>
</div>

</div>

---
layout: end
---

# "There's going to be some transition involving artificial general intelligence... but maybe the character of AQGI is actually qualitatively different."

<div class="mt-4 text-sm opacity-60">Michael Nielsen · Dwarkesh Patel Podcast</div>
