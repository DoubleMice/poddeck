---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E239｜SpaceX要让太空算力从科幻走向现实，但它划算吗？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# SpaceX 太空数据中心：<br/>算力上天的物理账与经济账

<div class="text-sm opacity-70 mt-8">
2026年6月 · 硅谷101
</div>

<div class="mt-4 text-xs opacity-60">
嘉宾：路易斯·宏（Aries Fund 合伙人）& 刘秉彦（火箭爱好者）· 主持：泓君
</div>

<div class="mt-6 text-xs opacity-40">
1.75 万亿美元 IPO · 1GW 太空算力 · 第一性原理拆解
</div>

---
layout: default
class: text-left
---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<div class="font-bold mb-1">史上最大 IPO</div>
SpaceX 以 1.75 万亿上市，打包火箭+星链+xAI，招股书写着太空未来
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="font-bold mb-1">1GW 太空算力</div>
马斯克要把数据中心搬上晨昏轨道——一万颗卫星、一百次星舰发射
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="font-bold mb-1">散热反常识</div>
太空又黑又冷，但散热是瓶颈——没有对流，只有辐射，效率 ∝ T⁴
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<div class="font-bold mb-1">经济账算得过来吗</div>
发射成本、芯片寿命、产业链缺失——每一项都在挑战可行性
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<div class="font-bold mb-1">月球 vs 火星</div>
化学火箭时代，月球是更好的经济跳板——嘉宾路线之争
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<div class="font-bold mb-1">星链数据说话</div>
12,000+ 颗卫星 99.85% 完好，30 万次/年避撞——太空运营已有实证
</div>

</div>

---
layout: default
---

# SpaceX IPO：打包上市背后的太空叙事

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 招股书里的三合一

<div class="text-sm leading-relaxed space-y-3">

- **火箭发射**：猎鹰 9 + 星舰，可重复使用能力已验证
- **星链 Starlink**：在轨 12,000+ 颗卫星，99.85% 完好率
- **xAI**：太空数据中心新叙事，将算力搬上轨道

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
SpaceX 内部信仰：<strong>太空里面的经济是远远是地球上的经济的好几倍的</strong>——但这个题材跟任何人讲，大家都觉得你是疯子。
</div>

</div>

<div class="text-sm leading-relaxed">

### 关键数字

<div class="space-y-2 mt-3">

<div class="p-2 bg-green-50 rounded border-l-4 border-green-500">
<span class="font-bold text-lg text-green-700">1.75 万亿</span><span class="text-xs ml-1 opacity-70">美元</span>
<div class="text-xs opacity-70">上市市值，全球前十科技公司</div>
</div>

<div class="p-2 bg-yellow-50 rounded border-l-4 border-yellow-500">
<span class="font-bold text-lg text-yellow-700">1 GW</span><span class="text-xs ml-1 opacity-70">目标算力</span>
<div class="text-xs opacity-70">≈ 10,000 颗 100kW 卫星</div>
</div>

<div class="p-2 bg-blue-50 rounded border-l-4 border-blue-500">
<span class="font-bold text-lg text-blue-700">100 次</span><span class="text-xs ml-1 opacity-70">星舰发射</span>
<div class="text-xs opacity-70">每次搭载 100 颗卫星，路易斯赌 2029 年达成</div>
</div>

</div>

</div>

</div>

---
layout: default
---

# Starbase：从荒地到未来之城

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 2018：一期初创

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed mt-2">
一片荒凉湿地，几个帐篷 + 露营车（Airstream），员工住在车里，白天在帐篷里工作。野生动物遍地：大蜘蛛、各种奇怪生物。
</div>

### 2026：八年之后

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed mt-2">
现代化总部大楼已建成，两个巨型 Mega Bay，无数 Cybertruck 停在场内。最有未来感的地方，离火星最近的地方——甚至已经有人预留了<span class="font-bold">火星大使馆</span>的位置。
</div>

</div>

<div class="text-sm leading-relaxed space-y-3">

### 站在星舰面前的感受

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"40层楼，数字听起来都很大，可是直到你到那边实际去感受这个的规模，你才会真正意识到：这么庞大的东西，SpaceX 要批量地做。"
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"以后就像 747 一样，这么大的一个 40 层楼甚至更高的建筑，会成为常规。"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
IPO 对 SpaceX 只是 check box——"现在才刚开始，未来二三十年还要开发。"
</div>

</div>

</div>

---
layout: default
---

# 星舰加速：SpaceX 凭什么比 Falcon 9 更快

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 抛物线增长曲线

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **Falcon 9**：10 年才到达当前发射频率（V5 是最终版）
- **Starship**：5 年走完了 Falcon 9 同样的进度——已到 V3，V4 即将登场
- SpaceX 在加速，不是减速

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>预测轨迹</strong>：2026 single digits → 2027 ~10 → 2028 ~50 → 2029 100+。一旦地面和天空的操作基础设施 unlock，发射频率可全线上升。
</div>

</div>

<div>

### 为什么能加速

<div class="text-sm leading-relaxed space-y-2 mt-2">

- Falcon 9 开发于初创期——缺钱缺人
- Starship 有成熟工程团队 + Falcon 9 发射收入 + 星链现金流
- 资源禀赋完全不同
- 第三次发射已在测试 corner case landing，开始运 Starlink 卫星

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>参照系</strong>：Falcon 9 每年发射增长是抛物线形的。Starship 一旦达到稳定版本，增长只会更快——"后年可能不是 100 次，可能是好几百次。"
</div>

</div>

</div>

---
layout: two-cols
---

# 1GW 太空算力蓝图

<div class="text-sm leading-relaxed space-y-3 pr-4">

**目标**：在晨昏轨道部署 1GW 算力

**路径**：
- 每颗卫星 = 1 个 "AI mini" 单元，约 100kW
- 需要约 10,000 颗卫星
- 星舰每次发射搭载 100 颗（每颗约 1 吨）
- 需要 100 次星舰发射

**赌局**：
路易斯赌 **2029 年** SpaceX 可年发射 100 次——"如果我会赌我自己的 money 哈，我会赌 2029 年，SpaceX 可以达到 one gigawatts。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./starship-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 晨昏轨道：最高效的能源轨道

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 为什么选晨昏轨道

<div class="text-sm leading-relaxed space-y-2 mt-2">

- 卫星沿地球晨昏线飞行，**始终朝阳**
- 每天最多只有 **35 分钟**被地球遮挡
- 太阳能发电效率是地面的 **5 倍**
- 一条轨道周长约 4 万公里，1 万颗卫星即接近满载

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm mt-4">
<strong>惊人数值</strong>：一整个晨昏轨道被 1 万颗 unit 占满，才只能产出 1GW 的电——这就是太空能源的密度上限。
</div>

</div>

<div>

### 轨道是稀缺资源

<div class="text-sm leading-relaxed space-y-2 mt-2">

- 晨昏轨道是**稀有资源**，初期 1 万颗就会占满一整圈
- 太空是三维空间，但在近地范围仍然有限
- 安全间距：每颗卫星之间至少几十公里
- 技术可降低间距，每降一半，容量 ×8

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mt-4">
<strong>好消息</strong>：太空远比你想象的大。"我们太高估人类的量或者太低估地球的大小了。"——在三维轨道空间散布卫星，容量远超直觉。
</div>

</div>

</div>

---
layout: two-cols
---

# 发射成本瀑布：从 7000 到 10 美元

<div class="text-sm leading-relaxed space-y-3 pr-4">

每公斤发射成本的下降路径：

- **$7,000/kg** — 2026年2月 Falcon 9 实际拼车报价
- **$200/kg** — 星舰保守估计（只回收一级，复用10次）
- **$100/kg** — 星舰近期现实目标
- **$10-20/kg** — 全复用理想态，只消耗航天煤油

参考基准：中美航线每公里运输成本约 3-5 美分。任何低于此值的星舰成本估计都不可信。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./launch-cost-waterfall.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 发射不是瓶颈——但经济账才开始

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-70">仅算燃料成本</div>
<div class="text-3xl font-bold text-green-600 my-1">2 个月</div>
<div class="text-xs opacity-70">太阳能板回本时间<br/>（3-5% 质荷比假设）</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-70">算上火箭复用</div>
<div class="text-3xl font-bold text-yellow-600 my-1">4 个月</div>
<div class="text-xs opacity-70">$200/kg 发射成本<br/>（保守可回收假设）</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-70">最悲观的综合</div>
<div class="text-3xl font-bold text-red-600 my-1">2 年</div>
<div class="text-xs opacity-70">芯片寿命减半 + 冗余发射<br/>进入 questionable 区间</div>
</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>关键变量</strong>：每加一个条件，回本周期就延长一截——从两个月推到两年。嘉宾共识：launch 不是问题，capacity 不是问题，launch cost 也不是问题。但 GPU 制造、散热、产业链才是真正的坑。
</div>

---
layout: default
---

# 1 GW 地面数据中心：参照系的真实成本

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-70">总造价</div>
<div class="text-3xl font-bold text-red-600 my-1">$500 亿</div>
<div class="text-xs opacity-70">英伟达公布的 1 GW<br/>地面数据中心建造成本</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-70">GPU 占比</div>
<div class="text-3xl font-bold text-blue-600 my-1">50-60%</div>
<div class="text-xs opacity-70">$250-300 亿<br/>成本绝对大头</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-70">电力占比</div>
<div class="text-3xl font-bold text-yellow-600 my-1">10-15%</div>
<div class="text-xs opacity-70">电费是运营成本<br/>不是建设大头</div>
</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
<strong>关键洞察</strong>：太空能省掉的是电力（10-15%）和部分基础设施——但 GPU 成本（50-60%）在天地完全一样。加上发射、卫星平台、冗余的额外开销，太空的经济优势被严重稀释。GPU 造价占比越大，太空数据中心的经济性越弱。
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>地面电力审批的现实</strong>：德州——全美对商业最友好的州——数据中心电力申请批准率不到 1%。全球 17-28% 的电力增量需要支撑 AI。地面电又少又贵又难批——这是太空"免费电力"叙事最有力的论据。
</div>

---
layout: two-cols
---

# 散热：太空物理最反常识的一课

<div class="text-sm leading-relaxed space-y-3 pr-4">

**直觉陷阱**：太空又黑又冷 → 散热不要钱 ❌

**物理事实**：
- 太空没有空气 → **没有热对流**
- 散热只能靠 **热辐射**
- 效率由黑体辐射公式决定：∝ **T⁴**

**残酷数据**：
- 散掉 1MW 废热 ≈ 1200m² 散热面（4-5 个网球场）
- 国际空间站 422m² 氨循环散热器，只能散 70kW

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./blackbody-radiation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# T⁴ 法则：温度是散热之钥

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 散热效率的数学

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **黑体辐射公式**：散热功率 ∝ 温度⁴
- 开尔文温标（0K = -273.15°C）
- 室温 300K → 60°C (330K)：散热仅提升 ~50%
- 想大幅提升散热，温度需要质的飞跃

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm mt-3">
<strong>关键洞察</strong>：地球的平均温度是 5°C——它是一个达到热平衡的球体。物理上没有任何东西阻止我们在太空复制这一点。
</div>

</div>

<div>

### 热平衡的几何

<div class="text-sm leading-relaxed space-y-2 mt-2">

| 形状 | 散热/吸热比 | 平衡温度 |
|------|:--:|:--:|
| 单面散热（如月球） | 1:1 | ~120°C |
| 薄膜板（两面散热） | 2:1 | ~60°C |
| 正三角（三面散热） | 3:1 | ~60°C |
| 球体（四面散热） | 4:1 | ~5°C |

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mt-3">
地球的平衡温度是 5°C，因为球体表面积恰好是投影面积的 4 倍——"地球是一个多么精妙的设计。"
</div>

</div>

</div>

---
layout: default
---

# 散热方案：液氨 → 半导体热泵 → 高温芯片

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 方案一：液氨循环
<div class="text-xs mt-1">
- 国际空间站已使用<br/>
- 实现卫星表面温度均衡<br/>
- 只是"热搬运"，非"热泵"<br/>
- 适合空间站规模，不适合 GW 级
</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 方案二：半导体散热
<div class="text-xs mt-1">
- 固态空调：无需压缩机<br/>
- 把热量从冷处搬到热处<br/>
- 目前仅在实验室阶段<br/>
- 手机散热片级别，待规模化
</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 方案三：高温芯片
<div class="text-xs mt-1">
- 让芯片工作在更高温度<br/>
- 提高几度，散热面积大幅缩小<br/>
- 需要新的半导体材料<br/>
- 地面数据中心用不上——缺乏推动力
</div>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
<strong>核心矛盾</strong>：高温芯片在地面上没有优势（地面不依赖辐射散热），所以没有大规模投入研发的动力。而太空算力规模太小（不到总量的 1%），没有公司会为它单独设计芯片生态。
</div>

---
layout: default
---

# 太空辐射：不是最大风险

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Starlink 的真实数据

<div class="text-sm leading-relaxed space-y-2 mt-2">

自 2019 年至今，SpaceX 已发射 **12,000+** 颗星链卫星：

<div class="grid grid-cols-2 gap-2 mt-2 text-center">
<div class="p-2 bg-green-50 rounded border-2 border-green-200">
<div class="text-2xl font-bold text-green-600">99.85%</div>
<div class="text-xs">至今完好运行</div>
</div>
<div class="p-2 bg-yellow-50 rounded border-2 border-yellow-200">
<div class="text-2xl font-bold text-yellow-600">0.15%</div>
<div class="text-xs">故障坠毁</div>
</div>
</div>

<div class="mt-2 p-2 bg-blue-50 rounded border-l-4 border-blue-500 text-xs">
仅 <strong>1 颗</strong> 失控漂留在轨（最终会坠回地球）
</div>

</div>

</div>

<div>

### 工程对策

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **增加屏蔽**：物理阻挡高能粒子
- **ECC 纠错**：已有成熟民用电平方案
- **冗余度**：加 10% 冗余，错误概率降多个量级
- **低轨限定**：1,000km 以下，有地球磁场保护
- **绝对不进高辐射带**：高轨不适用

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm mt-3">
<strong>结论</strong>：在低轨，辐射不是大问题。星链五年数据就是最好证明——不能放在高辐射带，不能在 1,000km 以上轨道。
</div>

</div>

</div>

---
layout: two-cols
---

# 训练 vs 推理：太空适合做什么

<div class="text-sm leading-relaxed space-y-3 pr-4">

**训练（Training）** ❌ 不适合
- 需要高效近距离通信
- 卫星间互联带宽是瓶颈
- 100kW = 100 张卡，fine-tune 勉强够
- 稍大规模训练完全不够用

**推理（Inference）** ✅ 天然适合
- 100kW 是很好的推理单元
- 延迟 20-40ms，LLM 推理完全够用
- 辐射导致的 bit flip 对推理几乎无感
- 推理量是训练量的几百倍几千倍

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# "太空绝对只适合做推理"

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

### 为什么是推理

<div class="text-sm leading-relaxed space-y-2">

- 推理本身就是混沌过程——几个 bit 翻转，没人会感觉到
- 地上训练、天上推理：一个完美生态分工
- 地面做大规模 training，太空做 distributed inference
- 免费的太阳能电力——不要白不要

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mt-3">
<strong>边缘计算的新可能</strong>：100 张卡刚好介于 hyperscaler 训练和 edge computing 之间——算力足够 meaningful，延迟接近边缘优势。也许是一种 online learning 的状态。
</div>

</div>

<div>

### 但生态鸡生蛋

<div class="text-sm leading-relaxed space-y-2">

- 太空数据中心成本太高 → 用的人少
- 用的人少 → 没人愿意为它优化软件
- 没软件优化 → 更没人用
- "雪球滚不起来"

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm mt-6">
<strong>唯一破局方式</strong>：谷歌、英伟达这样的巨头用自己的体量强推。但"他们投的票不是从自己发自内心投的"——交叉持股让这些合作的意义变得模糊。
</div>

</div>

</div>

---
layout: two-cols
---

# 地面 vs 太空：算力增长的分岔路

<div class="text-sm leading-relaxed space-y-3 pr-4">

**地面数据中心困境**：
- 电力审批：德州仅通过 ~1%
- 散热成本线性增长，上限明确
- 热岛效应：算力 100 倍增长后，气候问题不容忽视
- 所有热量最终留在地球

**太空数据中心优势**：
- 太阳能 5 倍效率，近乎免费
- T⁴ 散热：高温下无限扩容
- 热量留在太空，零气候影响
- 速度由自己决定：垂直整合

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ground-vs-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 长期视角：为什么太空算力不可替代

<div class="space-y-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>散热曲线的分叉</strong>：地面散热上限明确——当数据中心消耗一整座城市的电力、制造城市级热岛，还能持续吗？而太空辐射散热 ∝ T⁴ 没有上限——温度越高，散热越猛。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>终极远景</strong>：整个太阳系最重的硬通货是算力，最终就是电能。地球上发的电都会变成地球的热。太空中的电可以不变成地球的热，只把数据传回来——"这一点上真的无法比的一个优势。"
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>速度优势</strong>：今天的数据中心比明天的数据中心重要。SpaceX 是唯一一家说"我的速度取决于我自己"的公司——从发射到卫星制造到太阳能板，垂直整合一切。
</div>

</div>

---
layout: default
---

# 垂直整合：SpaceX 真正的护城河

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### SpaceX 的独特位置

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **唯一垂直整合者**：发射 + 卫星制造 + 太阳能 + AI 算力
- 其他公司做同一件事，成本至少是 SpaceX 的 **3 倍以上**
- 星链已具备初级散热泵技术——不是从零开始
- 30 万次/年自主避撞——AI 数据积累碾压任何对手

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm mt-3">
<strong>创业公司判死刑</strong>：Starcloud 融资 1.7 亿美元做太空数据中心——"不可思议，我不知道为什么有人听到这个故事以后还会投。"
</div>

</div>

<div>

### 谁能挑战

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **Blue Origin**：唯一有无限资金 + 技术底蕴的对手——但规模不在同一等级
- **Google**：与 SpaceX 合作，交叉持股
- **NVIDIA**：H100 已上轨测试——做芯片，不做数据中心
- **中国**：朱雀、长征十二等至少三家可重复使用火箭公司——十年内可见

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm mt-3">
<strong>半导体散热赛道</strong>：少数有 VC 级机会的方向——不依赖 SpaceX，可以给任何公司供货。但 SpaceX 大概率会自己尝试。
</div>

</div>

</div>

---
layout: default
---

# 太空碎片：凯斯勒效应的幽灵

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 什么是凯斯勒效应

<div class="text-sm leading-relaxed space-y-2 mt-2">

一颗卫星失控撞上另一颗 → 产生碎片 → 碎片撞击更多卫星 → 连锁反应 → 整个轨道无法使用

**历史先例**：1960-70 年代美国发射了**几千万颗针**到太空做长波通讯实验——至今仍在漂浮。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm mt-3">
<strong>人间真实</strong>：在发生一次这样的撞击事件并造成很大后果之前，是无法形成国际合作机制来避免的。
</div>

</div>

<div>

### 为什么现在不用太担心

<div class="text-sm leading-relaxed space-y-2 mt-2">

- 低轨卫星不维持轨道就会掉下来——**几年内自然衰减**
- 晨昏轨道：所有人同方向飞行，相对速度低
- Starlink 已实现自主避撞：2025 年全年 **30 万次**调整
- 太空是一个物理强迫所有人必须合作的空间——因为一定要避让，不然双方都完蛋

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm mt-3">
<strong>AI 避碰</strong>：SpaceX 的避碰 AI 就像 Tesla FSD，只是用太空数据训练的。这个技术本身就够做一家创业公司。
</div>

</div>

</div>

---
layout: two-cols
---

# 月球 vs 火星：两条太空经济路径

<div class="text-sm leading-relaxed space-y-3 pr-4">

**火星派（路易斯 / SpaceX）**：
- 月球只是火星的 hopper（跳板/测试场）
- 所有技术都需要一个"杂们"——月球就是
- NASA 重返月球 = 政治驱动 + SpaceX 顺水推舟
- 长期目标不变：多行星物种

**月球派（秉彦）**：
- 化学火箭时代，火星没有经济价值
- 重力仅为地球 1/6，从月球向深空发射极便宜
- 氦-3 等独有资源，股东看得到回报
- "月球是进行所有任何太空探索的跳板"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moon-mars-paths.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 月球：被低估的经济价值

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 重力井的优势

<div class="text-sm leading-relaxed space-y-2 mt-2">

- 阿波罗计划：土星五号 3,000 吨从地球起飞
- 从月面到月球轨道的上升级："垃圾桶大小"
- 如果地球再大两倍，任何发射都无法进行
- 地球恰好在物理允许星际航行的临界点上——月球比临界点优越得多

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mt-3">
从月球表面上升需要的燃料远远小于地球。当 Starship 把发射成本降到 $10-20/kg，月球开发非常有利可图。
</div>

</div>

<div>

### 资源与基地

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **氦-3**：核聚变理想原料，月球储量丰富
- **自动化制造**：AI + 远程操控技术正在进步
- **太空工业基地**：太空数据中心、太阳能电站的组装——从月球走比从地球走便宜得多
- **人类存活测试场**：离地球近，可快速迭代

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm mt-3">
双方共识：月球派和火星派其实没有两个派系——它们在一条线上。先解决"怎么离开地球"，再解决"怎么在太空生存"。
</div>

</div>

</div>

---
layout: default
---

# 太空数据中心叙事：贴 AI 标签还是真未来？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 三次叙事跃迁

<div class="text-sm leading-relaxed space-y-2 mt-2">

1. **太空运输公司** → 估值上限：发射市场
2. **太空互联网公司**（星链）→ 估值上限：电信市场
3. **太空 AI 算力平台**（数据中心 + xAI）→ 估值上限：AI 云计算

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm mt-3">
"所有这些太空数据中心的讨论，都是大家想沾 AI 的光。美光，这家大家都快被遗忘的公司，突然现在市值已经一万亿了，这谁不眼红啊。"
</div>

</div>

<div>

### 两种解读

<div class="text-sm leading-relaxed space-y-2 mt-2">

**怀疑论**：太空数据中心是招股书的"贴标签"行为——把运载公司的故事讲成 AI 算力公司的故事，估值逻辑完全不同。

**建设性**：SpaceX 一开始确实没有太空数据中心的具体计划，但"一旦升空解决，近地轨道能做什么"是自然延伸。星链是第一个答案，数据中心是 AI 时代的新答案——不在平台逻辑之外。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mt-3">
S-1 招股书里太空被写得极端渺小——因为马斯克不认为大家会理解太空的潜力。太空经济远不止 1 万亿。
</div>

</div>

</div>

---
layout: two-cols
---

# 五大工程挑战：物理可行，经济待破

<div class="text-sm leading-relaxed space-y-3 pr-4">

回顾对话中的逐一拆解：

| 挑战 | 物理可行性 | 经济可行性 |
|------|:--:|:--:|
| 发射 | ✅ | ⚠️ 成本在下降 |
| 能源 | ✅ | ✅ 太阳能 5 倍效率 |
| 散热 | ✅ | ⚠️ 需要新技术 |
| 辐射 | ✅ | ✅ 低轨可管控 |
| 碎片 | ✅ | ⚠️ 需要国际合作 |

**核心结论**：理论上没有物理障碍——"物理上没有任何东西阻止它"。但"把算力能够经济地放在太空，这才是真正需要解决的。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./space-dc-problems.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

---
layout: default
---

# 创业公司与投资逻辑：谁能分一杯羹？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### VC 不投太空 DC 公司

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **Starcloud**：YC 出身，号称第一个太空数据中心。初始方案：5km×5km 太空站 + 20km×20km 反射镜——"天方夜谭"。拿了 1.7 亿美元融资。
- 任何独立初创公司的成本至少是 SpaceX 的 **3 倍**——没有垂直整合优势
- 出路只有两条：被收购，或在 niche 存活

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm mt-3">
<strong>路易斯的判断</strong>：太空数据中心不是初创公司的赛道。不具备创投需要的回报倍数。SpaceX 自己都在摸索——其他人更不用谈。
</div>

</div>

<div>

### 可以投的方向

<div class="text-sm leading-relaxed space-y-2 mt-2">

- **半导体散热（固态热泵）**：底层技术，可卖给任何卫星公司
- **卫星通信组件**：全球供应链都可参与，不要求美国本土
- **空间级芯片**：抗辐射、高温运行的专用芯片
- **星座管理软件**：虽然 SpaceX 数据最多，但 niche 机会存在

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm mt-3">
<strong>卫星供应链的窗口</strong>：与火箭不同，卫星供应链不受美国本土化限制。全世界最优质的解决方案都可以参与——这对中国创业者也是一个机会。
</div>

</div>

</div>

---
layout: default
---

# 太空数据中心：一个"硬科幻"项目

<div class="space-y-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
<strong>嘉宾共识</strong>："把算力放在太空这件事一定能做，没有问题。把算力能够经济地放在太空，这才是真正需要解决的。"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
<strong>物理判断</strong>："它是一个硬科幻，它不是一个神话。物理上没有任何东西阻止它。"地球就是太空中的一个球——它已经达到热平衡了。散热在物理上完全可行，只是怎么便宜地做到。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
<strong>经济判断</strong>：即使乐观预测到 2029 年星舰年发射 100 次→1GW 算力→经济账依然"算不过来"。从两个月回本一路推到两年——每加一个变量就掉一个量级。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
<strong>赌局</strong>：路易斯赌 2029 年达到 1GW。"如果说赌的是一百颗星舰发射，我相信。1GW 的数据中心我觉得，我没有看到一个这件事情的必要性。"——秉彦从经济角度的质疑。
</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
"把算力放在太空这件事一定能做，没有问题。把算力能够经济地放在太空，这才是真正需要解决的。"
<div class="text-xs opacity-60 mt-1">— 刘秉彦，总结太空数据中心的本质</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
"太空里面的经济是远远是地球上的经济的好几倍的。但是这个题材跟任何人讲，大家都会觉得你是疯子。"
<div class="text-xs opacity-60 mt-1">— 路易斯·宏，SpaceX 内部信仰</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
"如果我会赌我自己的 money 哈，我会赌 2029 年，SpaceX 可以达到 one gigawatts。"
<div class="text-xs opacity-60 mt-1">— 路易斯·宏，最激进的乐观预测</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
"如果说赌的是一百颗星舰发射，我相信。1GW 的数据中心我觉得，我没有看到一个这件事情的必要性。"
<div class="text-xs opacity-60 mt-1">— 刘秉彦，从成本角度的核心质疑</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
"地球是一个多么精妙的设计——它在转，这一点很重要。"
<div class="text-xs opacity-60 mt-1">— 泓君，讨论散热物理时对地球热平衡的感慨</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得回味的话：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
"太空绝对只适合做推理。"
<div class="text-xs opacity-60 mt-1">— 刘秉彦，关于 GPU 计算在太空的定位</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
"它是一个硬科幻，它不是一个神话。物理上没有任何东西阻止它。"
<div class="text-xs opacity-60 mt-1">— 刘秉彦，谈太空散热的理论物理边界</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
"在整个的运作上面，太空是一个非常国际化，并且是一个大家必须合作的一个空间。因为一定要避让，不然双方都完蛋。"
<div class="text-xs opacity-60 mt-1">— 路易斯·宏，关于太空治理</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
"月球就是火星的 hopper，月球就是火星的杂们。"
<div class="text-xs opacity-60 mt-1">— 路易斯·宏，月球在 SpaceX 战略中的角色</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
"整个太阳系最重的硬通货是算力，最终就是电能。地球上发的电都会最终变成地球的热。"
<div class="text-xs opacity-60 mt-1">— 刘秉彦，太空算力的终极远景</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="mt-8 text-sm opacity-70">
太空数据中心是一个硬科幻项目——物理上可行，经济上待破。<br/>
但它已经不再是幻想，而是 SpaceX IPO 招股书里的正式叙事。
</div>

<div class="mt-6 text-xs opacity-50">
硅谷101 · E239 · 2026年6月<br/>
嘉宾：路易斯·宏（Aries Fund）& 刘秉彦（火箭爱好者）<br/>
<a href="https://sv101.fireside.fm/252" class="opacity-70">sv101.fireside.fm/252</a>
</div>
