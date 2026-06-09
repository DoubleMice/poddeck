---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'WWDC Reactions, Jobs Up Stocks Down, VC Horror Stories | Will Marshall, Baroness Dambisa Moyo, Samuel Hume, David Kirtley, Pete Florence, Jordan Bramble'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# WWDC Reactions, Jobs Up Stocks Down, VC Horror Stories

<div class="text-lg opacity-70 mt-6">
TBPN — June 8, 2026
</div>

<div class="text-sm opacity-50 mt-2">
Will Marshall (Planet Labs) · Baroness Dambisa Moyo · Samuel Hume (Stimatic Labs) · David Kirtley (Helion) · Pete Florence (Generalist) · Jordan Bramble (Antares)
</div>

<div class="text-xs opacity-40 mt-8">
3-hour episode · 8 guests · WWDC · economy · fusion · robotics · nuclear
</div>

---

# 为什么这期特别

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>🍎 WWDC 2026</strong>
<div class="text-xs opacity-70 mt-1">Apple's "All Systems Glow" keynote — Siri reboot, private cloud, AI diffusion into iOS. The most consequential WWDC in years.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>📊 Jobs vs Inflation</strong>
<div class="text-xs opacity-70 mt-1">172K jobs added. Nasdaq worst day in a year (-4.2%). Rate hike territory looms. "AI job apocalypse cancelled."</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>💰 VC Horror Stories</strong>
<div class="text-xs opacity-70 mt-1">Sleeping VCs, Sequoia "scams", pitch ambushes. Silicon Valley airs its dirty laundry — and founders fight back.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>🛰️ Planet Labs</strong>
<div class="text-xs opacity-70 mt-1">Will Marshall on 200+ satellites, daily Earth imaging, methane detection, and reducing deforestation 60% with AI.</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>⚛️ Fusion & Nuclear</strong>
<div class="text-xs opacity-70 mt-1">Helion's direct-electricity fusion (MSFT PPA 2028). Antares turns on first private micro-reactor ahead of schedule.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>🤖 Robotics Scaling</strong>
<div class="text-xs opacity-70 mt-1">Pete Florence on GenOne model, scaling laws in physical world, dexterity as the holy grail, and data tier lists.</div>
</div>

</div>

<div class="text-xs opacity-50 mt-4">
Also: Dambisa Moyo on board governance · Samuel Hume on pancreatic cancer breakthrough · Leopold Aschenbrenner's 270% return · SpaceX IPO
</div>

---

# WWDC 2026: All Systems Glow

<div class="mt-4">

<div class="text-sm opacity-70 mb-2">Tim Cook kicked off Apple's annual Worldwide Developers Conference. The theme: <strong>All Systems Glow</strong>.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**What's finally arriving:**

- **Siri reboot** — The biggest reinvention since launch. AI integration at the system level.
- **On-device inference** — Apple's foundation models running locally for privacy.
- **Third-party model integration** — ChatGPT, Gemini, Claude hooks at OS level.
- **"Private Cloud Compute"** — For heavy inference, but Apple-branded.

<div class="text-xs opacity-60 mt-2">作者概括: Apple is catching up not by inventing new AI, but by embedding proven best practices into its ecosystem.</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**The expectations game:**

- **Not an iPhone event** — this is software, not hardware. No Vision Pro-level breakthrough needed.
- **The bar is clear:** implement best practices from ChatGPT, Gemini, Claude — "the stuff we know and love."
- **Apple learned from 2023-24:** stop overhyping. Let interest build organically.

<div class="text-xs italic opacity-70 mt-2">"All people are asking for is implement the best practices from ChatGPT, Gemini, Claude… the stuff we know and love."</div>

</div>

</div>

</div>

---

# Apple's AI Stack — Three-Tier Architecture

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### Siri as the New Gateway

Siri sits at the top of a three-tier intelligence stack:

- **On-Device**: Apple's own foundation models for low-latency, private tasks
- **Private Cloud**: Apple-branded compute for heavier inference — not GCP, not AWS
- **Third-Party**: ChatGPT, Gemini, Claude integration for frontier capabilities

The billion-user question: where is the inference actually running? Apple's CapEx hasn't shown a secret data center buildout. Yet "private cloud" means not on-device, and a billion users pushing Siri all day is a *lot* of inference.

<div class="text-xs opacity-60 mt-2">Key unknown: Will Apple lean into the OpenClaw Mac Mini boom or lock down the ecosystem?</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./apple-ai-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# The Cultural Shift Apple Didn't Ask For

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">
<div class="font-bold">Deterministic → Stochastic</div>
<div class="text-xs opacity-70 mt-1">Apple's entire brand is built on things that work perfectly, every time. AI doesn't work that way.</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

<div class="italic text-base">"Your PR team will have many heart attacks because you're not in the world of deterministic outputs anymore. So that's going to be a big cultural shift for Apple in this nondeterministic, stochastic AI era."</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>The Reality:</strong>
<div class="text-xs opacity-70 mt-1">Apple's notification summaries already hallucinate and get things wrong. Users keep them on anyway — they're useful and "always delightful because they're funny." The PR team can't control viral AI fails the way they control hardware launches.</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>The Upside:</strong>
<div class="text-xs opacity-70 mt-1">Google AI search overviews prove the model: viral hallucinations happen, but they don't affect user metrics. Churn and usage are unaffected. The product works if it's useful more often than it's wrong.</div>
</div>

</div>

</div>

---

# Privacy vs Open Ecosystems — Apple's Strategic Tension

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Walled Garden Path** 🍎

- Tight integration, everything Apple-branded
- Privacy as the moat: "this is on a private cloud, extremely secure"
- Rate limits and subscription plans for heavy AI usage
- Vibe coding apps in the App Store? Apple is "pretty quiet"
- Siri app intents vs deeper iOS APIs — how much access for third-party AI?

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The Open Ecosystem Path** 🔓

- Embrace the OpenClaw Mac Mini boom
- Make AI agents first-class citizens in macOS
- Give ChatGPT, Claude, Gemini deep OS hooks
- "Will they be able to siphon in your text messages?" — user trust at scale
- Camera roll-style permissions model: temporary access vs full library

</div>

</div>

<div class="text-xs opacity-60 mt-4 text-center">
Apple historically solves problems quietly, then gets noisy about the solution once it works. The AI era may force them to talk before they're ready.
</div>

</div>

---

# 172K Jobs Added — The US Labor Market Defies AI Doom

<div class="mt-4 text-sm">

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="text-3xl font-bold text-green-600">172K</div>
<div class="text-xs opacity-70 mt-1">Seasonally adjusted jobs added in May</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="text-3xl font-bold text-blue-600">4.3%</div>
<div class="text-xs opacity-70 mt-1">Unemployment rate unchanged</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<div class="text-3xl font-bold text-purple-600">3rd</div>
<div class="text-xs opacity-70 mt-1">Consecutive monthly increase in hiring</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

<div class="italic text-base">"The AI job apocalypse is cancelled at least for the month of May. … US economy is undefeated and the American worker is undefeated as evidenced by this latest jobs report."</div>

</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Where the jobs are:</strong>
<div class="text-xs opacity-70 mt-1">Healthcare, tourism/World Cup, travel. Not the AI-critical industries. But hiring is hiring. "We want jobs to be abundant in our society."</div>
</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>The AI contradiction:</strong>
<div class="text-xs opacity-70 mt-1">AI CEOs have been "praying manifesting job losses despite their Herculean efforts" — forecasting 10%, 20%, 50% gone. The data keeps saying no.</div>
</div>
</div>

</div>

---

# Rate Hike Territory — The Fed's Bind

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### The problem in one sentence

**Jobs are rising AND inflation is rising.** The Fed's dual mandate is pulling in opposite directions.

- **Inflation**: Well above 2% target. Closing of Strait of Hormuz spiked gas prices. Running hot even before that.
- **Rate cuts**: Now *less* likely. In fact, "it looks like we might be in rate hike territory soon."
- **Tech impact**: Not good for companies with earnings forecasts stretching into the next decade.

### The silver lining

At least the Fed has room to cut if the economy slows — unlike during COVID when rates were already at zero. There's something in the tool chest.

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fed-dilemma.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Market Whiplash — Nasdaq's Worst Day in a Year

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4 mb-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-600">-4.2%</div>
<div class="text-xs opacity-70 mt-1">Nasdaq Friday drop — worst single day in more than a year</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600">+1.5%</div>
<div class="text-xs opacity-70 mt-1">Monday rebound — "We're building back."</div>
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

<div class="italic text-base">"The bubble popped. It's 2003 now. It's not '99. It's not 2000. We're well past the bubble."</div>

</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>The ZIRP hangover is real:</strong>
<div class="text-xs opacity-70 mt-1">People born in the zero-rate era couldn't imagine this level of speculation at current rates. The speculation alone is an argument to raise rates further. "Please God, just one more bubble" — and God delivered.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Structural concern:</strong>
<div class="text-xs opacity-70 mt-1">Inflation has been above 2% "for basically as long as I've been an adult." The Fed's tool may have limited room despite the silver lining narrative.</div>
</div>

</div>

</div>

---

# VC Horror Stories — When Silicon Valley Ate Itself

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

<strong>The stories that went viral this week:</strong>

- **The Sleeping VC**: Greg Eisenberg pitched a top-3 firm for a $15M Series A. One GP "fully fell asleep out cold for thirty plus minutes. Nobody acknowledged it. Everyone kept going."
- **The Parking Lot Pitch**: Travis Kalanick (2001) intercepted a VC trying to escape before a meeting. "I ended up pitching him in his parked Lexus from the passenger seat."
- **Vinod vs Cloudflare**: Matthew Prince accused Vinod Khosla of offering to invest only if he'd fire some of his co-founders. Vinod: "We did not give them an offer to invest based on our assessment of the team."
- **The "Sequoia Scam"**: Mercuryo CEO Brendan Foudi on structured two-tranche investments where the blended price is lower than the advertised valuation.

</div>

<div class="text-xs opacity-60 text-center">The consensus: "Venture is arguably the most pleasant form of deal making in the world." — TJ, responding to the outrage.</div>

</div>

---

# Pitch Horror vs Board Horror — What Actually Matters

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**VC Pitch Horror Stories**
<div class="text-xs opacity-60">(Less serious than people think)</div>

- VCs falling asleep, not reading materials, being rude
- A founder will have 50+ meetings for financing — some will inevitably be terrible
- No startup has ever died because a VC was rude during a pitch
- "You might want a checked-out VC who's just going to let you cook"
- Customers ghost meetings too. Job candidates take other offers. It's business.

<div class="text-xs opacity-60 mt-2">作者概括: Pitch horror stories are emotional, not existential.</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**VC Board Horror Stories**
<div class="text-xs opacity-60">(Actually dangerous)</div>

- Board members who push to replace the founding team
- Structured deals that misrepresent valuation to employees and future investors
- VCs who fund competitors while on your board
- Active attempts to redirect company strategy for the VC's portfolio benefit

<div class="text-xs opacity-60 mt-2">The distinction: a bad pitch meeting wastes 30 minutes. A bad board relationship can destroy a company over years.</div>

</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-3 text-sm">

<strong>The Air Horn Solution:</strong> "You gotta analogize your business to an air horn. … My business is like this air horn. One simple press, I'll amplify your business 100x. Everyone's going to be paying attention because at any moment you might push this button."

</div>

</div>

---

# Structured Investments — The "Sequoia Scam" Debate

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### How structured rounds work

A VC invests in two tranches — e.g., half at a lower valuation, half at a higher one. The founder then announces "raised $100M at $1B valuation" when the VC's *blended* price is much lower.

- **Not illegal** — structured investments have existed for 25+ years
- **But potentially deceptive** — if misrepresented to other investors, can be securities fraud
- **The employee problem**: stock options are priced against an inflated headline number

<div class="text-xs italic opacity-70 mt-2">"In fairness to Sequoia, this is common practice in the industry." — Brendan Foudi, 30 minutes after calling it a "scam"</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vc-structured.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="text-xs opacity-50 mt-2 text-center">
The real lesson: structured deals aren't the problem — opacity about them is. Read the Sequoia YouTube investment memo from 25 years ago. None of this is new.
</div>

---

# Planet Labs — Indexing the Earth

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**The Fleet**

- **200+ satellites** — largest Earth imaging constellation
- Launch on 40 rockets, 600-700+ satellites total over company history
- Dove satellites: the size of a loaf of bread (~7kg)
- Bigger satellites: 30cm resolution from 500 miles away
- **4 million+ 47-megapixel images per day** — 8 pictures/second per satellite
- Vertically integrated: custom radios, computers, telescopes

<div class="text-xs italic opacity-70 mt-2">"We liken it to Google that indexed the internet to make it searchable. We're indexing the earth to make it searchable."</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The Customers (by revenue)**

- **#1 Defense & Intelligence**: US government, European countries, Japan. Monitoring threats, getting early warning.
- **Commercial applications**: Agriculture (John Deere partnership), energy infrastructure, hedge funds (commodity tracking).
- **Civil government**: Disaster response, LA fires damage assessment.
- **New model**: $200M+ deals for dedicated satellites — the country "takes over the joystick over their area of interest."

<div class="text-xs opacity-70 mt-2">42% growth — "the answer to life, universe and everything." Over $700M on balance sheet.</div>

</div>

</div>

</div>

---

# AI × Satellites — Real Impact on the Ground

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### Methane Detection

Hyperspectral camera with **400 spectral bands** (vs 3 RGB in human eyes). Detects methane absorption lines in specific spectral wavelengths.

- Scans oil & gas pipelines, finds leaks
- "No one, not the energy company nor the environment, wants all these gas leaks"
- Thousands of leaks detected — companies fix them when notified

### Deforestation: 60% Reduction

- Track the entire Brazilian Amazon — **8 million km² every day** (size of the United States)
- AI sends alerts with GPS coordinates to Brazil Federal Police
- Illegal mining, narcotics, logging — stopped in real time
- **60% deforestation reduction in 3 years**

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./coverage-resolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Spy Satellites vs Commercial Coverage — The Tradeoff

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

<div class="italic text-base">"Their spy satellites are better and worse at the same time. They're much, much higher resolution, but much, much smaller coverage. … What they can't do is image all of China or all of Africa or all of Brazil every day."</div>

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Government Spy Satellites**

- Can read license plates (classified exactly how well)
- At least 10x better resolution than commercial
- Very narrow coverage — like looking through a straw
- Can't monitor broad regions continuously
- Single high-value targets, not systematic scanning

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Planet's Commercial Fleet**

- 3-meter resolution — can't read plates
- Images entire Earth landmass **every day**
- Systematic monitoring of economic activity, environmental change, military movements
- "We're the only system that images the whole earth landmass every day"
- More alpha than any other company — track soy yields, mine output, shipping networks

</div>

</div>

<div class="text-xs opacity-60 mt-3 text-center">
The complementarity is the point: spy sats for precision, Planet for coverage. Ukraine, Indo-Pacific, Amazon — all monitored continuously.
</div>

</div>

---

# Dambisa Moyo — "Anything Can Happen"

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">

<div class="italic text-base">"The advice that I received when I joined my first board about fifteen years ago: anything can happen. … It sounds very flippant, but it has a lot of kernels of important truths for how we manage organizations."</div>

</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Barclays Bank</strong>
<div class="text-xs opacity-70 mt-1">360+ years old. Survived multiple pandemics, depressions, 1929 crash. "Most of these companies have already experienced a pandemic … economic recessions."</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>SAB Miller</strong>
<div class="text-xs opacity-70 mt-1">Told they'd never be bought by #1 Anheuser-Busch. Ended up acquired via the biggest bond issuance of 2016.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Oil at $50?</strong>
<div class="text-xs opacity-70 mt-1">Coming into 2026, forecasts said oil ~$50/barrel. Strait of Hormuz changed everything. "How does your balance sheet play out in that environment?"</div>
</div>

</div>

<div class="text-xs opacity-60 mt-3">Companies that have lasted 300+ years figured out: you partner with government, you think beyond quarterly returns, and you never assume tomorrow looks like today.</div>

</div>

---

# Three Roles of the Board — Beyond Quarterly Returns

<div class="mt-4 text-sm">

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="text-2xl font-bold text-blue-600 mb-2">1</div>
<div class="font-bold text-sm">Strategic Oversight</div>
<div class="text-xs opacity-70 mt-1">Thinking about longer-term risks. "Our job is to be additive to management." Horizon is shrinking — more technology, more information, faster pace.</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="text-2xl font-bold text-green-600 mb-2">2</div>
<div class="font-bold text-sm">Hire/Fire the CEO</div>
<div class="text-xs opacity-70 mt-1">CEO brings the team, executes on risk mitigation AND investment. Board ensures the right person is steering toward long-term opportunity.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<div class="text-2xl font-bold text-purple-600 mb-2">3</div>
<div class="font-bold text-sm">Society Partnership</div>
<div class="text-xs opacity-70 mt-1">"How do great businesses partner with communities, with society, with government?" Especially critical for transformative tech like AI.</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>Dambisa's warning for AI companies:</strong> Don't dismiss governance just because returns are high.

<div class="text-xs opacity-70 mt-1">"I think we just have to make sure that people don't poo-poo a lot of the governance and the structural sort of muscle that we now know exists from 300 years of companies existing."</div>

</div>

<div class="text-xs opacity-60 mt-2">The AI paradox: AI CEOs are going on podcasts warning about existential risk — unlike oil execs in 1910 who denied carbon emissions. Is proactive transparency a better strategy?</div>

</div>

---

# Don't Bet Against the United States

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

<div class="italic text-base">"The picture is very much don't bet against The United States, but understanding that it's quite concentrated, it's quite skewed."</div>

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The US Advantage**

- AI super cycle could add $16 trillion to GDP by 2030 (PwC estimate)
- US GDP has run away from Europe since 2008 — they were equal in 2008
- "Glass half full" culture vs Europe's "glass half empty" regulatory instinct
- Comparative advantage in energy, innovation, capital markets

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Global Headwinds**

- Europe growing 0.5-1.2% — structural debt, inflation risk
- China: debt drag, demographic drag (forecast 800M population by 2100)
- Most countries not hitting 3% growth needed to double per capita income in a generation
- Deglobalization, tariffs, protectionism

</div>

</div>

<div class="text-xs opacity-60 mt-3">Dambisa's optimism: "Hard to sort of be negative about the world." History shows these patterns repeat. Post-WWII era emerged from similar chaos. "A small number of people can have massive outside impact."</div>

</div>

---

# AI, Energy & the Circular Economy

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**The Energy Reality**

- UK average: ~40¢/kWh. US: 12-16¢. China: 8-9¢.
- **"No country has achieved levels of per capita income without cheap energy."**
- Dambisa's concern: banning energy sources strangles growth
- France's nuclear advantage creates potential sovereign AI supply chain
- SoftBank building data centers in France for energy cost advantages

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**The Henry Ford Circular Economy**

<div class="text-xs italic opacity-70 mb-2">"You have to pay people a reasonable wage for the work because ultimately … you need consumers."</div>

- Ford needed workers to afford the Model T — set market wages, created sustainable ecosystem
- AI companies need to think about who buys their products if jobs are displaced
- Dambisa: corporations get "short shrift" — the most sophisticated ones understand their role is changing
- The breadth of AI's impact is forcing conversations beyond "what's the shareholder return?"

</div>

</div>

</div>

---

# Pancreatic Cancer — The Undruggable Becomes Druggable

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4 mb-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Disease**

- **5-year survival: ~3%** for metastatic (most diagnosed at this stage)
- Hasn't progressed in decades
- Steve Jobs' cancer — notoriously lethal
- Driven by one protein: **RAS**
- RAS was considered **"totally undruggable"** — too small, compact, no pocket for drugs to fit

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The Breakthrough**

- **Daraxoraciclib** (Revolution Medicines) — uses a **molecular glue** approach
- Doubled median overall survival: **13 months vs 7 months** with chemo
- Fewer serious adverse events than chemotherapy
- Improved quality of life alongside survival
- Now the baseline: new drug from Tango Therapeutics added on top improved survival even further

</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<strong>What's next:</strong> Daraxoraciclib "lays the baseline of therapy." More drugs can now be stacked on top. The door to the mountain is finally open — before, "we weren't even on the trail." From ASCO 2026 conference: this received a standing ovation from oncologists and scientists — "it's not an easy crowd to excite."

</div>

</div>

---

# Drug Development — From 10 Years to 4 Hours

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Bottleneck: Systematic Reviews**

- Essential regulatory step — a massive literature review
- Currently done **manually**, takes **years**
- Target identification to Phase 3: **9-10 years** total
- Each patient in a clinical trial: **~$50,000**
- Big trials: **$100M+** — this is the real moat in pharma

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Samuel Hume's Solution (Stimatic Labs)**

- AI-powered systematic review: **4 hours instead of 2 years**
- Product on the market, thousands of users
- Customers in big pharma, academia, biotech
- Pre-seed stage, but already shipping

**Other accelerants:**
- FDA's "real-time trials" — unblind data early, stop trials faster
- AI at every step: paperwork, trial design, patient matching
- China doing fast-following AND innovative work — cheaper trials

</div>

</div>

</div>

---

# China vs US Biotech — Competition Is Good for Patients

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**China's Biotech Rise**

- Most innovative stuff at ASCO 2026 was actually from China
- Bispecific antibodies — new cancer drug modes of action
- Not just "fast following" — genuinely innovative
- Much cheaper to run trials in China
- US pharma worried about doing deals with Chinese biotech

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The Patent Cliff Reality**

- Drugs sell at high prices for ~20 years, then go off patent
- Generic prices drop **95%**
- Lilly's tizepatide: $51B in sales this year — more than big AI labs
- But when it goes off patent, generics eat those revenues
- **$100 trillion biotech company?** "Very difficult" because of patent cliffs

</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3 text-sm">

<div class="italic text-base">"If you're on the side of medicines, if you're on the side of patients, I would say more competition is better."</div>

</div>

</div>

---

# Helion — Direct Electricity from Fusion

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### The Different Approach

Instead of fusion → heat → steam → turbine (traditional path), Helion directly harnesses magnetic and electric energy from the fusion reaction.

- **95% efficiency**: "If you can extract electricity at 95%, now the fusion just has to do that little bit"
- **Smaller, faster**: The high efficiency means smaller systems, faster deployment
- **7 generations**: Polaris (7th gen) running now in Washington State
- **8th gen**: Power plant for Microsoft — under construction
- **$465M Series G** announced last week
- **60x manufacturing expansion**: producing electronics, capacitors, fusion modules

<div class="text-xs italic opacity-70 mt-2">"Can we directly harness the magnetic and electric energy from that reaction at really high efficiencies, to extract electricity and then sell it."</div>

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./helion-fusion.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Modular 50MW — The Gigafactory Model

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

<div class="italic text-base">"What I tell the team is that if we're the first to build a fusion power plant and that's all we do, then we've totally failed as a business. Our goal is to build systems that are deployed globally at scale."</div>

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The Deployment Model**

- Each generator: **50MW**, modular, built in a factory
- Put on a truck, delivered to site, plugged in
- Need 500MW? Deploy 10-12 units (with redundancy)
- Even the 7th-gen Polaris was built in factory, trucked down the street, assembled on site
- Philosophy: mass production, reliability, lower costs, shorter timelines

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Timeline & Permitting**

- Microsoft PPA: power plant built by **2028**, early operations, then scale
- Environmental permits granted last year
- Already broke ground, two buildings built, third starting
- **The Advance Act** (1.5 years ago): NRC determined fusion does NOT need their regulation
- Regulated by states/Department of Health — timeline "on the order of a year or less rather than a decade"

</div>

</div>

</div>

---

# Fusion's Safety Advantage — No Meltdowns, No Plutonium

<div class="mt-4 text-sm">

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="font-bold text-green-700 text-lg">No Meltdown</div>
<div class="text-xs opacity-70 mt-1">Systems can't melt down, go critical, or run away. The physics is fundamentally different from fission.</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="font-bold text-blue-700 text-lg">No Uranium/Plutonium</div>
<div class="text-xs opacity-70 mt-1">Uses lightweight isotopes — hydrogens and heliums. "Things that are found everywhere." No weapons-grade material.</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<div class="font-bold text-purple-700 text-lg">Hospital-Grade Regulation</div>
<div class="text-xs opacity-70 mt-1">Regulated like a particle accelerator in a hospital. Still serious, but permits in ~1 year, not a decade.</div>
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>Radioactive materials are still created</strong> — it's still an atomic process. Helion is licensed by the state, has a big safety team, and handles materials transparently. "It's really important that you do that and you talk about those things."

</div>

<div class="text-xs opacity-60 mt-2">The reactor generates electricity at the facility, but the core design philosophy is: direct extraction = smaller footprint = lower costs = faster deployment.</div>

</div>

---

# Antares — First Private Micro Reactor, Ahead of Schedule

<div class="mt-4 text-sm">

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="text-3xl font-bold text-blue-600">53rd</div>
<div class="text-xs opacity-70 mt-1">National Labs reactor — Antares just built and turned on</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="text-3xl font-bold text-green-600">1st</div>
<div class="text-xs opacity-70 mt-1">Of three reactors called for by executive order — one month early</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<div class="text-3xl font-bold text-purple-600">40 yrs</div>
<div class="text-xs opacity-70 mt-1">First non-light-water reactor with a new design in ~40 years</div>
</div>

</div>

<div class="text-xs opacity-70 mb-3">Executive order: three reactors turned on on American soil by America's 250th birthday (July 4, 2026). Antares delivered the first.</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>The "Oh Shit" Moments</strong>
<div class="text-xs opacity-70 mt-1">Not safety — the reactor was designed to prevent those. But integration challenges: electromagnetic interference from actuator motors messing with neutron detectors. "Five, six day process to go figure that out." This is why you test.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>Key Insight</strong>
<div class="text-xs opacity-70 mt-1">"I think the advice I would offer to anybody working at it is start operating a nuclear facility as quickly as you can because that's when all your challenges start."</div>
</div>

</div>

</div>

---

# Military as First Customer — The Nuclear Strategy

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

<div class="italic text-base">"We believe, and this was really foundational to us back in 2023: the military is the best first customer for advanced nuclear."</div>

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Why Military First**

- Army's JANUS program: **$2B budget** for micro reactors at military installations (2029-2030)
- Military is spending real dollars NOW, not LOIs and MOUs
- Regulatory expertise: Navy and Army have existing licensing authorities
- Naval Reactors built **4.5x more reactors** than entire civilian sector
- "The Navy builds multiple reactors a year … they never stagnated in the 70s"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Mission Need**

- More warfighting effects generated from US installations (command & control, satcom, cyber, space superiority)
- Adversaries can disrupt civilian grid
- Need power without liquid fuel supply chain
- Nuclear fission: highest capacity factor energy available

<div class="text-xs opacity-70 mt-2">"The companies that win [data center business] are going to emerge from military work first" — more operational reps, regulatory experience, proof points at scale.</div>

</div>

</div>

</div>

---

# Liquid Metal Heat Pipes — Safety by Design

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### How Antares' Reactor Works

- **Micro reactors**: 100kW to 1MW range
- **Coolant**: Liquid sodium inside heat pipes — vaporizes, condenses, wicks back
- **Totally passive** process — no pumps, no moving parts in the primary cooling loop
- **Near atmospheric pressure** — no pressurized water
- If something fails: no coolant vaporizes to travel long distances
- **Triso fuel**: fission products retained even at high temperatures — developed over 20+ years of DOE work

### Electricity Generation

Nitrogen closed Brayton cycle — a tube-and-fan heat exchanger on the condenser. Turns a turbo machine (think automotive turbocharger) → alternator.

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./micro-reactor.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

<div class="text-xs opacity-50 mt-2 text-center">
Neutrons '26, electrons '27, dollars '28 — Antares timeline from test to commercial power.
</div>

---

# The Nuclear Renaissance — Standing on Shoulders of Giants

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

<strong>The infrastructure wasn't built overnight:</strong> Project Pele (DoD) started 8 years ago. Triso fuel supply chain funded by DoD. AGR program (DOE) developed the fuel over 20 years. A DOE regulator came out of retirement for Antares' test — had known the INL operations lead since 1979.

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**The US Nuclear Reality Check**

- US generates **more nuclear power than any other country** — ~20% of baseload
- France has higher % of baseload but much smaller economy
- "We're literally number one. Let's not lose it."
- The messaging should pivot from "we're so behind" to "let's defend the crown"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Supply Chain Dynamics**

- Fuel is the single largest line item in a micro reactor's BOM
- Nuclear instrumentation: $50K+ per component, made by one company, priced high due to low volume
- More startups → more demand → more supply chain investment → lower costs
- "Everyone can win" — competing for infinite energy demand

</div>

</div>

</div>

---

# Generalist — Robotics Scaling Laws Are Real

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**The Team & Philosophy**

- CEO Pete Florence: PhD MIT → Google DeepMind
- Cofounder Andy Barry: Boston Dynamics 5.5 years
- Cofounder Andy Zeng: DeepMind research partner
- **$400M raised, $2B valuation**
- Not just humanoids — "the future is much bigger than only humanoids"
- Building "fundamental engine technology" — like an engine that goes in cars, planes, motorcycles

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**GenZero → GenOne: Proof of Scaling**

- **GenZero (Nov 2025)**: First demonstration of general scaling laws in robotics — predictable performance improvement with more compute & data
- **GenOne (April 2026)**: Much better model. "Starting to cross into levels of performance where these things are commercially viable"
- Pete's analogy: GPT-2 → GPT-3. Once you cross the threshold, applications unlock (like copy.ai and jasper.ai for early GPT-3)
- Focused on dexterity — the bottleneck that "everybody in robotics knows"

</div>

</div>

</div>

---

# What Will Robots Actually Do? — The Unlock

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

<strong>The key insight:</strong> This isn't about replacing existing robots that already do welding on deterministic paths. It's about enabling applications that <strong>never had robots before</strong> — wire harnessing, flexible manipulation, anything with variable geometry.

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Where robots already work (deterministic):**
- CNC machines, KUKA arms, pre-programmed paths
- Car windshield installation
- Kiva systems in Amazon warehouses

<strong>Don't replace these with stochastic AI.</strong> "Some things are already solved by robots today."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Where the unlock happens:**
- Wire harnessing in auto manufacturing
- "Finicky, easy for people to deal with types of objects"
- Applications where variability made traditional programming impossible
- "This explosion of interest of like, oh, I've never thought about using a robot at all for this entire application"

</div>

</div>

<div class="text-xs opacity-60 mt-3">Industrial applications likely to ramp first — behind the scenes, less visible to consumers. "Massive amounts of progress being made and relatively little hype."</div>

</div>

---

# Robot Data Tier List — S-Tier Is Lived Experience

<div class="grid grid-cols-2 gap-2 mt-4">

<div class="text-sm">

### Pete Florence's Live Tier List

- **S-Tier**: Lived experience of the physical world — the robot's own embodied data
- **A-Tier**: High-quality dexterity data from real manipulation
- **B-Tier**: Internet video (YouTube, etc.) — helpful but not S
- **C-Tier**: Simulation (Unreal Engine), mocap suits, world models as data source
- **F-Tier**: World models approach — "there hasn't been a ton of proof points"

### The Core Philosophy

"What's the best way to learn how to ski? Is it read a book on skiing? Is it read r/skiing? It's to go skiing."

Internet crawl data is helpful — but you can't learn physical intelligence from text alone. "Lived experience of the physical world is S tier."

</div>

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robot-data-tier.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# Humanoid Economics — Can the Math Work?

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-4">

<strong>The core question:</strong> A humanoid costs $50K to purchase, has complex actuators/motors/batteries that degrade over time. Can it do economically valuable work without the maintenance costs exceeding the labor it replaces?

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Skeptical Case**

- Humanoids have "all of these different actuators and motors and batteries" that break down
- Parts replacement frequency might eat any labor savings
- "You're effectively having to buy replace parts or buy a new robot so frequently that you're better off just having a human"
- The purchase price isn't the whole story — total cost of ownership matters

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**The Bull Case**

- Dexterity is improving fast — GenZero → GenOne in 5 months
- Models are crossing into commercial viability for specific applications
- Industrial settings first: structured environments, clear ROI
- "Things like logistics, manufacturing, the supply chains" — where automation already has infrastructure
- More form factors than just humanoids

</div>

</div>

</div>

---

# Leopold Aschenbrenner — The 24-Year-Old AI Whiz

<div class="mt-4 text-sm">

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="text-3xl font-bold text-blue-600">24</div>
<div class="text-xs opacity-70 mt-1">Years old</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="text-3xl font-bold text-green-600">$20B</div>
<div class="text-xs opacity-70 mt-1">Under management</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200 text-center">
<div class="text-3xl font-bold text-purple-600">+270%</div>
<div class="text-xs opacity-70 mt-1">After fees — 2025 return ~200%</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Situational Awareness Fund</strong>
<div class="text-xs opacity-70 mt-1">Founded late 2024 as "a brain trust on AI." Co-founder Karl Schulman (ex-Thiel Macro). Early backers: Stripe's Patrick & John Collison, Daniel Gross, Nat Friedman, Dwarkesh Patel.</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Jane Street's Rare Bet</strong>
<div class="text-xs opacity-70 mt-1">Jane Street rarely allocates to outside managers. They invested in Situational Awareness. Lost money once in early 2025 after DeepSeek, then went on an "absolute run."</div>
</div>

</div>

<div class="text-xs opacity-60 mt-3">Wall Street Journal profiled TBPN reacting to Leopold's 13F filing. "We have not seen this level of attention on a hedge fund's filings in a very long time."</div>

</div>

---

# SpaceX IPO — Retail vs Institutions

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**The Bull Case for Retail**

- SpaceX has the most passionate retail following — "almost certainly wants to buy like 10x of whatever is possible"
- "It's hard to find a bear that's actually willing to short it"
- Google deal: ~$1B/month in compute → profitable quarter likely soon → S&P 500 eligibility
- If indexes anchor and employee lockups hold, effective float stays low
- Retail becomes the marginal trader — "the biggest win ever"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**The Skeptical Case**

- $60B+ offering isn't a low-float meme stock
- Can retail actually deploy $600B (10x) through Robinhood accounts? "Are you kidding me?"
- Financial investors ask "what have you done for me lately?" — not SpaceX's preferred dynamic
- Goldman estimates $470B revenue in 2030 — but S&P 500 needs actual GAAP profitability now

</div>

</div>

<div class="text-xs opacity-60 mt-3 text-center">The real question: Will SpaceX follow the Tesla playbook — retail army + cult following = sustained premium? Or will institutional ownership dominate?</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"All people are asking for is implement the best practices from ChatGPT, Gemini, Claude… the stuff we know and love."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 WWDC 期望值管理，Apple 不需要发明突破性技术，只需把已验证的 AI 集成进生态</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"You're not in the world of deterministic outputs anymore. So that's going to be a big cultural shift for Apple in this nondeterministic, stochastic AI era."
<div class="text-xs opacity-60 mt-1 not-italic">— Apple 的核心挑战：品牌建立在"一切完美运作"上，而 AI 做不到</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"The AI job apocalypse is cancelled at least for the month of May. … US economy is undefeated and the American worker is undefeated."
<div class="text-xs opacity-60 mt-1 not-italic">— 172K 新增就业，失业率 4.3%，连续第三个月增长</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"The picture is very much don't bet against The United States, but understanding that it's quite concentrated, it's quite skewed."
<div class="text-xs opacity-60 mt-1 not-italic">— Dambisa Moyo 谈全球经济格局：美国一骑绝尘，但增长集中在少数领域</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"This protein was considered undruggable, totally undruggable because it's this kind of small little compact protein you can't get a drug into."
<div class="text-xs opacity-60 mt-1 not-italic">— Samuel Hume 解释为什么 RAS 蛋白突破如此重大 — 用分子胶水攻克了不可成药靶点</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得记住的洞见：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"If we're the first to build a fusion power plant and that's all we do, then we've totally failed as a business. Our goal is to build systems that are deployed globally at scale."
<div class="text-xs opacity-60 mt-1 not-italic">— David Kirtley (Helion) 谈商业野心：不是造一个，是全球铺开</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"The military is the best first customer for advanced nuclear."
<div class="text-xs opacity-60 mt-1 not-italic">— Jordan Bramble (Antares) 谈核能商业化路径：军方有预算、有监管、有真实需求</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Venture is arguably the most pleasant form of deal making in the world."
<div class="text-xs opacity-60 mt-1 not-italic">— TJ 回应 VC Horror Stories 热潮：相比 PE、监管、竞争，VC 已是天堂</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"No country has achieved levels of per capita income without cheap energy. … You can strangle economic growth by doing some of the things that … banning energy sources."
<div class="text-xs opacity-60 mt-1 not-italic">— Dambisa Moyo 警告：在碳减排和经济增长之间，不能掐死后者</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Lived experience of the physical world is S tier. … What's the best way to learn how to ski? Is it read a book on skiing? It's to go skiing."
<div class="text-xs opacity-60 mt-1 not-italic">— Pete Florence 现场给机器人训练数据排 tier list：真实世界的身体经验无价</div>
</div>

</div>

---

# 延伸思考

<div class="mt-4 text-sm">

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**跨越整个节目的主线：**

1. **从软件到硬件** — WWDC 的 AI 集成 → Helion/Antares 的能源基础设施 → Generalist 的机器人。计算驱动一切。
2. **美国例外论的验证** — 就业数据、核能创新、生物技术突破、AI 投资集中在同一个生态系统。
3. **透明度 vs 控制** — Apple 的隐私叙事、VC 的结构化交易、AI CEO 的公开警告。信息时代的治理困境。
4. **深层乐观主义** — 节目的每个板块都指向同一结论：硬科技正在加速，即使宏观充满噪音。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**值得追踪的问题：**

- Apple 的推理容量从哪来？"Private Cloud" 如果存在，为什么没出现在 CapEx 中？
- 2026 下半年会加息吗？就业和通胀双升是 Fed 最害怕的局面。
- 胰腺癌 RAS 突破会多快转化为一线疗法？
- Helion 和 Antares 谁先达到商业规模电力输出？
- Generalist 的 GenTwo 模型会在什么时候展示？
- SpaceX IPO 最终估值会落在哪里？

</div>

</div>

</div>

---

# 感谢观看

<div class="mt-20">
<div class="text-6xl mb-6">🎙️</div>
<div class="text-2xl font-bold">TBPN — June 8, 2026</div>
<div class="text-sm opacity-60 mt-4">
Will Marshall · Baroness Dambisa Moyo · Samuel Hume · David Kirtley · Pete Florence · Jordan Bramble
</div>
<div class="text-xs opacity-40 mt-8">
Read the full episode at <a href="https://share.transistor.fm/s/3d5315dd" class="opacity-70 hover:opacity-100">share.transistor.fm/s/3d5315dd</a>
</div>
</div>
