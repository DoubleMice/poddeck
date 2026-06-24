---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '129. 全球大模型第一股的上市访谈，和智谱CEO张鹏聊：敢问路在何方？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 129. 全球大模型第一股的上市访谈

## 智谱 CEO 张鹏：敢问路在何方？

<div class="text-sm opacity-60 mt-8">
张小俊商业访谈录 · 2026年1月
</div>

<div class="mt-4 text-xs opacity-50">
智谱确定于 2026 年 1 月 8 日登陆港交所，成为全球大模型第一股
</div>

---

# 为什么这期特别？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**全球大模型第一股**
2026年1月8日，智谱登陆港交所，比OpenAI更早完成IPO

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**六年半全历程**
从清华实验室到IPO，完整复盘中国大模型创业史

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**技术路线内幕**
GPT-3分水岭、GLM架构选择、Scaling Law演变

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**商业化真经**
To B vs To C抉择、开源策略得失、成本控制秘诀

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**DeepSeek冲击与反思**
2025年春节全员研讨，技术路线重新校准

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**AGI信仰者的自白**
"让机器像人类一样思考"——以及为什么上市只是补给站

</div>

</div>

---

# Break a Leg：历史性时刻的前夜

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"上市前夕，智谱 CEO 张鹏在一次出差途中摔断了跟腱。到达访谈地点时，他拄着一副拐杖。"
<div class="text-xs opacity-60 mt-1 not-italic">— 张小俊的叙述</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**Break a Leg**
一句西方俚语，字面意思是"摔断一条腿"，实际含义是"祝你好运"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**2026年1月8日**
几天之后，智谱确定登陆港交所，成为中国首家上市的大模型公司
</div>

</div>

</div>

---

# 一百年后，历史书上怎么写？

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"智谱是 AGI 历史上的一个先行者，就开路的人。"

</div>

<div class="mt-6 text-sm opacity-70">
这是张小俊在访谈结尾问张鹏的问题。张鹏的回答简单直接，却贯穿了整场三小时对话的全部主题——智谱不是为了赚钱而成立，而是为了探索AGI。
</div>

---

# 清华六年半：98年至今没离开过

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

**张鹏的履历**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
1998年进入清华，计算机系，知识工程实验室。<br/>
再也没离开过——"到现在为止也在给清华打工，因为是我们的股东。"
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
工程转化岗位：教授们做研究发paper，张鹏带工程师团队把prototype变成可交付的系统和产品。
</div>

</div>

<div>

**清华AI传统**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
实验室传统：P2P — Paper to Product<br/>
研究成果一定要转换成实际能用的系统
</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
上一代AI四小龙之一的旷视，联合创始人唐杰、杨沐也出自这个实验室。
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
"少有的能挣美金的实验室"<br/>
与Google、埃克森美孚、IBM等合作，年创收近2000万横向科研经费
</div>

</div>

</div>

---

---
layout: two-cols
---

# 从感知智能到认知智能

<div class="text-sm opacity-60 mb-4">2015-16年，清华实验室内部的讨论</div>

<div class="p-3 rounded border-l-4 border-red-400 bg-red-50 mb-3">
<b>感知智能（AI 1.0）</b><br/>
"人脸识别超过人又怎么样？"——没有"脑子"，只是单个的技能
</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 mb-3">
<b>认知智能（AI 2.0）</b><br/>
能泛化、能举一反三——迈向AGI的下一个台阶
</div>

<div class="text-xs opacity-60">
2016年张鹏团队提出"认知智能"——比"通用人工智能"更具体、可操作
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 张钹院士的四象限图

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
**象限一：知道知道** ✅
上一代AI已解决——识别图片、翻译语音
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">
**象限二：知道不知道** 🟡
认知智能的核心——知道自己能力的边界
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**象限三：不知道不知道** ❌
GPT-3时代的典型问题——"一本正经地胡说八道"
</div>

</div>

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"GPT-3 那个时候大家开玩笑说，他会一本正经的胡说八道。你问他什么问题，他都会给你编一段答案出来，他其实不知道，但是他给你编个答案。所以他实际上就是不知道自己不知道。"
<div class="text-xs opacity-60 mt-1 not-italic">— 张鹏回忆张钹院士对GPT-3的评价</div>
</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500">
张钹院士当时给了GPT-3很高评价：<strong>机器学习里程碑式的进步，一种新的范式</strong>——但仍然没有解决"不知道自己不知道"的本质问题。
</div>

</div>

</div>

---

# "第一个吃螃蟹的人"

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic mt-4">
"只开了一扇窗户，它并不是开了一个很敞开、很大的一个门，说你随便走吧。所以我们是首先吃螃蟹的人。"
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-t-2 border-blue-500">

**2018年1月**
国家多部委联合发文，允许科研院所在职人员做科技成果转化

</div>

<div class="p-3 rounded bg-purple-50 border-t-2 border-purple-500">

**一年半谈判**
与清华科研院、校领导反复沟通：怎么分（三七/二八/一九）？怎么评估知识产权的货币价值？

</div>

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500">

**2019年6月**
公司正式注册成立——清华计算机系第一家走通科技成果转化路径的企业

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
学校也不知道怎么操作——"学校这边其实也挺麻爪的，他说我只有这个文件，底下的操作细节是什么，我也不知道。"双方一起摸着石头过河。
</div>

---

# AMiner：在实验室里挣美元

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**科技情报平台：情报学的AI化**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
情报学的本质是用已有知识推理出新知识——恰恰是"认知能力"最典型、最密集的应用场景。
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
传统做法：专家调研、阅读文献、写报告。
AMiner的做法：机器学习算法 + 结构化数据（论文、专利、科技报告）→ 预测技术趋势。
</div>

</div>

<div>

**商业化成绩**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
客户：Google、埃克森美孚、IBM等国际巨头。
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
Google的典型需求："未来三到五年，在某个领域里，哪些技术会成为热点？" ——这是一个需要认知能力的预测问题。
</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
年横向科研经费最高近2000万——但"挣了也不能进个人兜"。
</div>

</div>

</div>

---

# GPT-3：2020年的战略分水岭

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**关键时间线**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>2018年</b>：GPT-1发布<br/>
<b>2019年</b>：GPT-2发布，学术界开始争论、讨论<br/>
<b>2020年5-6月</b>：GPT-3发布——真正的分水岭
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
张鹏请张钹院士来公司座谈，特意把GPT-3作为话题。"张院士给出的评价非常高——机器学习里程碑式的进步，一种新的范式。"
</div>

</div>

<div>

**智谱的反应**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>2020年中</b>：开始深入研究自回归预训练（GPT路线）与BERT路线对比<br/>
<b>2021年</b>：GLM算法相对成熟——综合BERT（双向填空）和GPT（单向续写）优势<br/>
<b>2021年12月</b>：决策训练千亿参数模型
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
"业内并没有像现在这么高度统一的认为GPT路线就是OK的。GLM是那个时候定下来的——在BERT和GPT之间，综合两种算法的优势。"
</div>

</div>

</div>

---

# GLM：融合双向填空与单向续写

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**BERT + GPT = GLM**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>BERT</b>：双向注意力，从前往后+从后往前，"填空机器人"
</div>

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>GPT</b>：单向注意力，只看前面预测下一个，"蹦词器"
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>GLM</b>：把双向填空的问题通过调整词序转换为单向预测，两种能力统一到一个框架里
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
额外收益：训练稳定性更好 + 参数量化精度损失更小（矩阵分布更集中）
</div>

</div>

<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./glm-arch.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

</div>

---

# GLM-130B：千亿参数的战略决策

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**要不要做？一个艰难的决定**

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
GPT-3训练成本：约2000万美元（当时分析）
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
智谱估算：千万级人民币以上，即使再省也差不多
</div>

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
"要不要做这个事情其实还是很慎重的考虑了一下。最后的决策是我们应该做，而且必须我们自己来做。"
</div>

</div>

<div>

**凭什么敢赌？**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
GLM算法的研究积累给了团队信心——训练出来的模型性能不会差，钱不会打水漂。
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>2021年12月→2022年8月</b>：9个月完成训练。<br/>
GLM-130B开源发布，斯坦福李飞飞报告里唯一参与评估且排名靠前的中国模型，"与GPT-3互有胜负"。
</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
为什么要开源？"你短时间内也没办法把它变成钱。让更多人知道这件事，更重要。"
</div>

</div>

</div>

---

# 400万 vs 2000万美元：中国的成本基因

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**降成本是一以贯之的主线**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
GLM-130B 训练成本：算力 <b>400万人民币</b>，总成本约 <b>1000万人民币</b>
</div>

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
GPT-3 训练成本：约 <b>2000万美元</b>
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>约十四分之一</b>——这就是中国人的工程优化能力
</div>

</div>

<div>

**持续降成本的各种措施**

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>推理成本</b>：率先在消费级显卡上做千亿模型推理，从一百大几十万降到二三十万
</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
<b>GLM-4.7</b>：参数量仍然是三万多亿（B），没有翻倍——通过提升训练效率和模型架构设计来控制推理成本
</div>

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
<b>国产芯片适配</b>：跟很多国产芯片合作，寻找算力成本降低的各种途径
</div>

</div>

</div>

---

# 融资的冬天："你们能变成钱吗？"

<div class="mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic mb-4">
"投资人听不懂。很多人完全听不懂，这是什么东西？你们怎么挣钱？怎么把这个东西商业化了？"
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic mb-4">
"我印象特别深刻，有个投资人，这东西，你们能变成钱吗？你看这个大环境这么差，经济这么差，要不你们把估值降一半，怎么样？"
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-t-2 border-blue-500">
<b>2022年8月</b>
GLM-130B开源发布，国际影响力打开
</div>

<div class="p-3 rounded bg-purple-50 border-t-2 border-purple-500">
<b>2022年8-11月</b>
B轮融资，艰难推进——"那轮融资其实没那么顺利"
</div>

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500">
<b>2022年11月30日</b>
ChatGPT上线——命运转折点
</div>

</div>

</div>

---

# ChatGPT之后：一朝天下晓

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"十年干什么什么无人知，一朝什么什么天下晓。"
</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
ChatGPT帮了智谱大忙：大家再也不用质疑"你这东西到底是啥"。只要说"我们在做跟ChatGPT一样的事"，投资人秒懂。
</div>

</div>

<div>

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>2023年春节</b>：研究团队和工程团队没休息，赶出ChatGLM<br/>
<b>2023年8月</b>：ChatGLM上线，中文效果非常好<br/>
<b>开源ChatGLM-6B</b>：60亿参数，一张家用GPU就能跑——开源社区第一款爆火项目
</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500">
之后投资人蜂拥而至："你们什么时候能把ChatGPT的东西做出来？"
</div>

</div>

</div>

---

# 百模大战：2023的狂热与焦虑

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**"特别热闹"**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
2023年WAIC（世界人工智能大会）：所有展台都有"大模型"三个字——有人把全部展台拍下来拼成一条，巨长。
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
王慧文发英雄帖，王小川入局，百川成立，圈内圈外纷纷下场。曾经的实验室同学成了竞争对手。
</div>

</div>

<div>

**两种感觉**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>兴奋</b>：巨大的浪潮来了，不用再教育任何人
</div>

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
<b>焦虑</b>："每逢大浪过来，再往后看一点就是可能就是一片狼藉之后留不下谁。我怕的是整个这个市场从一个极端走向另外一个极端之后，然后塌掉之后再很难回来。"
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
"垂直模型"是2023年最热的争论——今天回头看，它就是个伪命题。但当时被人加了很多"佐料"。
</div>

</div>

</div>

---

---
layout: two-cols
---

# Scaling Law：L1-L5阶梯

<div class="text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic mb-3 text-sm">
"scaling law 是一个非常不严谨的说法——只是现象描述，并没有科学的依据。"
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 mb-2 text-sm">
<b>每一阶段的Scaling维度不同</b>：不是简单堆参数，L1是数据/算力，L2是推理时计算，L3是强化学习体验
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<b>当前阶段</b>：L2→L3过渡——从Test-time Scaling进入RL Scaling
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 mt-2 text-sm">
"科学家最想探究的是现象背后的原因——掌握了本质才能利用好它。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agi-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不迷信暴力美学：从2023到2025

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**智谱的克制**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
一直使用dense（稠密）模型，千亿参数量级。<br/>
到2024年GLM-4才扩展到两千亿。
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
"没有像市面上很多其他的友商，上来就直接奔着万亿去了，或者大几千亿的模型去了——我还是非常克制的。"
</div>

</div>

<div>

**为什么不激进？**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
"这件事情其实并不取决于模型的参数量，本质上还是看最后的效果。"
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
用更好的数据工程：数据减少20%，性能维持——省下的计算量再加20%别的数据，在其他能力上突破。
</div>

</div>

</div>

<div class="p-3 mt-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"就像做菜一样，各种佐料佐一点放进去，怎么能让它味道更好，而不是变得更糟糕？这里面很多的讲究。"
</div>

---

# 数据工程：好的数据≠对的数据

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"什么样是好的数据？以前以为就是对的数据是好的数据，后来发现错了——就是有很多就是它中间出错然后又纠正的数据是好的数据，这种数据可能更贵。"
</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
2024年图灵奖得主Sutton的理论：<b>Experience Error</b>——经验时代。正确的和错误的经验，都是智能提升的必经路径。
</div>

</div>

<div>

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>预训练之外</b>：mid-training和post-training越来越重要——大量学习的是"试错过程"，而不是死记硬背答案。
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>唐杰的微博</b>（2025年12月23日）：模型扩展从预训练Scaling → mid/post training Scaling → Agent阶段——Agent数据已可直接集成到训练过程，增强模型通用性。
</div>

</div>

</div>

---

# Transformer不是终极答案

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"现在的这种计算方式，消耗太大，计算还是有些复杂。Transformer不一定是终极答案，很有可能会有更有效或者更优美的方式、算法、结构来替代。"
</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500">
从2022年到2025年的Attention"魔改史"：各种变种层出不穷——DeepSeek也在做，智谱也在研究。
</div>

</div>

<div>

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>没有见顶</b>：能做的事情还太多，战线很长——工程优化、数据工程、模型架构设计都还有大量空间。
</div>

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
Attention的"魔改"空间这么大，恰恰说明它还不是最完美的答案——还很粗糙。
</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
智谱已在探索下一代架构——不是基于Transformer的。
</div>

</div>

</div>

---

# DeepSeek冲击：春节后的全员反思

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**三个层面的冲击**

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
<b>研究层面</b>：强化学习还有巨大的提升空间——智谱之前"感觉做不上去了"的地方被打开了
</div>
<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>工程层面</b>：还可以做到更底层、更极致
</div>
<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>市场层面</b>：开源 = 免费的认知被强化，商业化受到冲击
</div>

</div>

<div>

**智谱的回应**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
"讨论的结论：应该更开放式的、更打开自己的视野。然后我们自己的研究方向应该还要更坚定一些。"
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
推出强化学习框架 <b>Slim</b>：不同任务的RL在同一个框架下有机整合。
</div>
<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
4.5 → 4.6 → 4.7 一步一个台阶："柳暗花明嘛——别轻易放弃。"
</div>

</div>

</div>

---

# MaaS：模型即服务（不是只有API）

<div class="mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
智谱在 <b>2021-2022年</b> 就提出了 MaaS（Model as a Service）概念——比现在市场上大多数人对MaaS的理解更广。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500">
<b>云端 API</b>
通用的，像用电一样<br/>
人人都能用
</div>

<div class="p-3 rounded bg-yellow-50 border-t-2 border-yellow-500">
<b>本地化部署</b>
模型作为可部署组件<br/>
部署到各种私有环境
</div>

<div class="p-3 rounded bg-purple-50 border-t-2 border-purple-500">
<b>软硬一体</b>
随时拎到任何地方的<br/>
产品化服务方式
</div>

</div>

<div class="p-3 mt-4 rounded bg-red-50 border-l-4 border-red-500">
**作者概括**：云厂商把MaaS的概念收缩成了"云上API"——这是他们的主战场。但智谱认为更大的市场在于本地化部署和软硬结合的方案，这也决定了他们后来的商业化路径。
</div>

</div>

---

# To C战场：为什么智谱追不上豆包？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**智谱清言的用户画像**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
使用曲线与上班/学习时间重叠：<br/>
8:00-12:00 → 13:00-17:00 → 晚上极少
</div>

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
晚上唯一小高峰（8-9点）：辅导孩子作业。<br/>
定位始终是<b>效率工具</b>，不是娱乐产品。
</div>

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
会员收费挣了点钱，"但算完ROI之后是很不合算的一件事情。"
</div>

</div>

<div>

**C端的结构性问题**

<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
中国市场C端付费意愿太差——ChatGPT在美国收$20/月，大把的人交。在中国不可能。
</div>

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
DeepSeek之后基本不再投流推广——C端不是智谱的基因。
</div>

<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
"纯C端可能还真是互联网大厂的机会。大量的平台、流量、用户入口都在他们手里。"
</div>

</div>

</div>

---

# To B：虽然不性感，但更确定

<div class="mt-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"to B这个事情你还是要交付的。低价抢单这种事情是不受欢迎的——甚至连甲方都不欢迎。他也担心你交付不了，我给你那点钱根本不够，怎么保证你的交付呢？"
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500 text-center">
<b>客户结构</b>
前十大互联网企业9个是客户<br/>
企业客户占60%<br/>
政府仅占20%
</div>

<div class="p-3 rounded bg-yellow-50 border-t-2 border-yellow-500 text-center">
<b>溢价空间</b>
对技术理解更深→更少人、更短周期、更好效果——这就是Know-how的溢价
</div>

<div class="p-3 rounded bg-purple-50 border-t-2 border-purple-500 text-center">
<b>中国SaaS困境</b>
"我花十万块买订阅，不如用十万块雇十个人把这活干了"——AI时代这个逻辑会改变吗？
</div>

</div>

</div>

---

# 中国SaaS为什么起不来？AI能改变吗？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>旧逻辑</b>：我用同样的钱，买订阅一个月花十万块——我用十万块买十个人一个月，帮我把活干了，完了这全是我的。
</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>悖论一</b>：AI Coding让程序员越来越便宜，定制化越来越普及——不需要标准化SaaS
</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>悖论二</b>：AI工具使用成本居高不下——训练和推理都有刚性成本底线
</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>张鹏的判断</b>：会比原来改变一些，但不会剧烈突变。以前是人的基本工资的刚性要求，现在是AI成本的刚性要求也摆在那。
</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>智谱的优势</b>："作为一个人工智能企业里你最高溢价的地方——我们对技术的了解更深。其他人也能做类似的事情，但可能需要更高的成本，我们只需要更少的人、更短的周期。"
</div>

</div>

</div>

---

# 开源：刻在基因里的事

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**从第一天开始**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>2022年8月</b>：GLM-130B开源，中国第一个参与国际评估的千亿模型
</div>
<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>2023年</b>：ChatGLM-6B开源，社区爆火
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
至今 <b>60+</b> 开源项目，下载量 <b>6000+万次</b>
</div>

</div>

<div>

**开源 ≠ 免费**

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
核心区别：开源提供的是参数文件、技术细节——商业化提供的是产品、工具、服务
</div>
<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
DeepSeek彻底开源后："很多客户脑子里边把开源和免费画等号了——人家都开源了，凭什么还收我钱？"
</div>
<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
但过了一段时间，大部分客户掉头回来——原厂不提供服务，自己部署了也整合不了业务系统
</div>

</div>

</div>

---

# 水泥般的Boring：清华理工男的文化

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"就像水泥一样。它能干得很漂亮，但是它就是没有太多的情绪价值。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对智谱的市场评价</div>
</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>张鹏的回应</b>："还算中肯吧。就像大家评价清华的理工男一样，就是boring。就是都很聪明，也很能干，让他干什么事情他能干得很漂亮——但就是没有太多的情绪价值。"
</div>

</div>

<div>

**工程师文化**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
在开发者、程序员群体中口碑很好——开源、产品、"踏实"
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
与Kimi对比：智谱很会抓住普通人的眼球，知道怎么去推广、怎么去理解普通人的需求——"我们可能在这方面做的没有那么好，但跟定位有关系。"
</div>
<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
张鹏也在反思：应该更C一点、更酷一点、更抓眼球一点——一直在努力。
</div>

</div>

</div>

---

# 从工程师到CEO："你任何时候都没有准备好"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"其实你任何时候都是没有准备好的。很多时候是你只要认准了这个方向，愿意去学习，愿意去不断地提升自己，愿意去做这件事情，也不用太害怕，就可以去做。"
</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500">
清华给的最大好处：学会了学习的方法、学习的能力，而且有这种学习的欲望——什么事情都愿意去学习。
</div>

</div>

<div>

**最折磨人的事**

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
认知对齐：商业模式新、客户看法千奇百怪——"你怎么样让你的认知和对方的认知能够对齐？这个挺suffering的。"
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
"你要花很多精力去跟大家沟通、去交流、去拉齐这个认知，一遍又一遍地重复很多的话。"
</div>
<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
很多客户都是张鹏亲自到一线去讲。
</div>

</div>

</div>

---

# 张钹院士的三个管理坎

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500">
<b>50人 · 坎一</b><br/><br/>
只要挣到钱就行<br/>
给团队建立信心：这事能持续下去<br/><br/>
<span class="text-xs opacity-60">"第一个阶段比较容易能过去"</span>
</div>

<div class="p-3 rounded bg-yellow-50 border-t-2 border-yellow-500">
<b>200人 · 坎二</b><br/><br/>
开始有分工：商业化/研发/产品/运营<br/>
管理成本爆发，各管一摊容易分崩离析<br/><br/>
<span class="text-xs opacity-60">2023年从不足100人→200人</span>
</div>

<div class="p-3 rounded bg-red-50 border-t-2 border-red-500">
<b>500人 · 坎三</b><br/><br/>
管理层级出现，信息传导变长<br/>
"有一批人我叫不出来名字了"<br/>
靠体系而不是靠个人<br/><br/>
<span class="text-xs opacity-60">2024年→400人，2025年→800+人</span>
</div>

</div>

<div class="p-3 mt-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
张鹏亲历了每一个坎。上市是新的坎——合规要求更高，需要"花更多精力在机制体制运转、定规章制度方面，而不是什么事情都在我的视线范围之内。"
</div>

---

# 深圳故事：一个人，半年，几千万合同

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"2021年底，我孤身一个人跑到深圳。在那边呆了小半年，两点一线。最终达成那个事情——一个人去，带着几千万的合同回去。"
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500">
<b>背景</b><br/>
为深圳的一个大客户，注册了智谱在当地的分支机构。一个人在深圳从7月待到年底。
</div>

<div class="p-3 rounded bg-yellow-50 border-t-2 border-yellow-500">
<b>同时期</b><br/>
ChatGLM开源发布、融资推进——"回去的时候并不是空手回去的"
</div>

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
"给公司赚钱还是挺自豪的——证明我们还是有挣钱的能力。我们的技术还是有人愿意买单的。"
</div>

</div>

---

# "AI给人类发的第一个红包"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>发布会上的小插曲</b>：张鹏被忽悠上台让手机智能体现场给大家发红包——出了一点小bug，红包金额填错了一位数字。
</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
"不影响，红包还是发出去了。后来有人评论——<b>这是AI给人类发的第一个红包</b>。"
</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>GLM-4.5的魔幻时刻</b>：2025年7月发布，没有大张旗鼓——但海外评价很高。
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
美国公司开始直接使用智谱的模型：Windsurf、Cursor、还有人拿智谱的开源模型去蒸馏、裁剪、套壳当自己的模型。
</div>
<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
"你看发布上我们并没有做太多事情——但本质上你还是把事情做好，大家认可你，自然而然会有回响。"
</div>

</div>

</div>

---

---
layout: two-cols
---

# 在线学习：Scaling的下一个范式

<div class="text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-2">
<b>当前阶段 L3</b>：智谱自研 <b>Slim</b> 框架——不同RL任务统一融合
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-2">
DeepSeek的启发：跳过SFT直接在base上做RL也能七七八八
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-2">
<b>Online Learning</b>：训练和推理之间不再有明确界限——推理→反馈→RL→更新→推理，闭环自动化
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
"说不好是算法层面会首先突破还是工程实践能先实现。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./online-learning-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AGI的终极形态：一个脑+手脚+在线学习

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**三种模态的统一**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
语言、视觉、代码、Agent执行步骤、机器人控制VLA——都属于跨模态，需要一个统一的建模方式，原生的融合到一起。
</div>
<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
"一定会是个趋势，一定是终极形态。"（但不一定基于Transformer）
</div>

</div>

<div>

**闭环的智能体**

<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
造一个脑子（各种能力都有），装上手脚（与世界交互），交互结果反馈回来做RL，实时更新模型——这样就闭环了。
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>张鹏的时间判断</b>：2027年可能具备这个能力雏形，2027之后还需要几年调整效率、安全——理性判断大概 <b>5-8年</b>。
</div>

</div>

</div>

---

# 问题：可以更聚焦一点

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**走过的弯路**

<div class="p-3 mt-2 rounded bg-red-50 border-l-4 border-red-500">
2024年做了太多平行探索：多模态、CogVideo（类Sora产品）等等——"敞开了全部都平行，大家一起来做。"
</div>
<div class="p-3 mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
"把带宽缩小一点。有些任务适当串行——做完一件事情再做另一件。控制成本支出和各方面风险。"
</div>

</div>

<div>

**未来三个发力方向**

<div class="p-3 mt-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>1. 基础模型持续提升</b>——多模态、多数据融合的混合型基础模型
</div>
<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
<b>2. 智能体（Agent）</b>——解决模型到实际应用的落地路径
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>3. 新Scaling Law & 新计算范式</b>——RL这一块还会有新范式诞生
</div>

</div>

</div>

---

# 天底下不止一条路

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"天底下的路其实不是只有一条。很多时候不要用历史的既有的经验或者规则来框一些新的东西——很多时候你错失的机会都是因为这个。"
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>OpenAI路线</b>：高风险、高投入、高回报——三高逻辑，赚的是这种钱
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>智谱路线</b>：高科技领域里追求稳定性和可控性——更符合中国市场情况
</div>

</div>

<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
张鹏认为二级市场的估值体系和叙事很大程度上是从美国来的，但这些东西根植于美国的文化和市场。中国的事情未必按这个来——"硬套可能并不一定是个好事情。"
</div>

</div>

---

---
layout: two-cols
---

# 这不是Bubble：中国投资远远不够

<div class="text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-3">
"你要说有bubble我相信，美国可能是有bubble的。但在中国这事不存在，它是远远不够的。"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-2">
中国AI投资仅为美国的 <b>几十分之一</b>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-2">
互联网泡沫后留下了基础设施和大量创新——真正的泡沫是投资过热，中国还不够热
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
"离AGI还很远。不投资它会自然发生吗？不会。那不就完了吗？"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./investment-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "实现AGI的公司"还是"利润很高的公司"？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"当然实现AGI的公司。这个不用想了。"
</div>

<div class="p-3 mt-3 rounded bg-green-50 border-l-4 border-green-500">
"我相信如果我们能够实现AGI，我们不会挂掉。我们也会是一个很伟大的公司。仅仅从商业化上来说也会是一个很伟大的公司。这两者并不是对立的。"
</div>

</div>

<div>

**什么会让张鹏不满意？**

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
"只赚钱，没有技术的产出，或者说对这个行业的贡献，我觉得我就肯定不满意。"
</div>

<div class="p-3 mt-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
核心决策机制：重大事项上董事会决策，日常运营有专业委员会。
</div>
<div class="p-3 mt-3 rounded bg-purple-50 border-l-4 border-purple-500">
三分工：唐杰（科研）、董事长（监管/政府/融资）、张鹏（日常运营/商业化）。
</div>

</div>

</div>

---

# 智谱的Slogan：让机器像人类一样思考

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"让机器像人类一样思考。但最终呢，你能思考的机器最终还是要反过头来去赋能人类，让人类的社会更美好。"
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>不只是实验室的理想主义</b><br/>
智谱要的是"卷起裤管、撸起袖管去跟客户现场做商业化，去解决大家实际的问题"——不是说你买了我的东西白白再见，是真的让用户觉得这东西好用。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>与梁文锋的区别</b><br/>
张鹏认为DeepSeek可能更纯粹——不想做to B服务、不缺钱、不想分心。而智谱"想要做的事情更多一点"，技术+落地都要。
</div>

</div>

</div>

---

# 上市不是终点，是补给站

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"上市并不是终点，后面还有很多事情，很多路要去走，很多事儿要去做，也不会简单的停在这一步。"
</div>

<div class="p-3 mt-3 rounded bg-blue-50 border-l-4 border-blue-500">
智谱从成立第一天就做了"每年增长100%-150%"的模型——六七年左右IPO，按计划走到的。
</div>

</div>

<div>

**上市的里程碑意义**

<div class="p-3 mt-2 rounded bg-green-50 border-l-4 border-green-500">
一级市场是"学校"培养阶段，二级市场是更商业化、更接近市场的阶段。
</div>
<div class="p-3 mt-2 rounded bg-purple-50 border-l-4 border-purple-500">
对整个行业的意义："证明了一件事情——它不是镜中花、水中月，它可以走到产业级的阶段。"
</div>
<div class="p-3 mt-2 rounded bg-orange-50 border-l-4 border-orange-500">
用马拉松比喻：起步加速抢第一集团→中间补给站保持体力→继续向前。
</div>

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期三小时访谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"只开了一扇窗户，它并不是开了一个很敞开、很大的一个门，说你随便走吧。所以我们是首先吃螃蟹的人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈科技成果转化政策与清华第一家走通转化的历程</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"scaling law 本身它提出来的时候是一个非常不严谨的一个说法。它只是个现象的描述，并没有一个很科学的依据。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈不迷信"暴力美学"，对Scaling Law的审慎态度</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"每逢大浪过来，再往后看一点就是可能就是一片狼藉之后留不下谁。我怕的是整个市场从一个极端走向另外一个极端，然后塌掉之后再很难回来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈2023年百模大战的焦虑</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"天底下的路其实不是只有一条。很多时候不要用历史的既有的经验或者规则来框一些新的东西。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈智谱选择不同于OpenAI的路径</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"你要说有bubble我相信，在资本市场角度来看美国那个事情可能是有bubble的。但在中国这事不存在，它是远远不够的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈AI泡沫与中国投资不足</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得回味的洞察：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"十年干什么什么无人知，一朝什么什么天下晓。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈ChatGPT爆火前后智谱命运的戏剧性转折</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"让机器像人类一样思考。但最终，能思考的机器最终还是要反过头来去赋能人类，让人类的社会更美好。"
<div class="text-xs opacity-60 mt-1 not-italic">— 智谱的Slogan与终极使命</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"就像水泥一样。它能干得很漂亮，但是它就是没有太多的情绪价值。"
<div class="text-xs opacity-60 mt-1 not-italic">— 市场对智谱的评价，张鹏认了这个"清华理工男"的标签</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"你任何时候都是没有准备好的。很多时候是你只要认准了这个方向，愿意去学习，愿意去不断地提升自己，愿意去做这件事情，也不用太害怕。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈从工程师到CEO的成长</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"当然实现AGI的公司。这个不用想了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 被问"AGI公司还是高利润公司"二选一时的果断回答</div>
</div>

</div>

---

# 机会永远留给有准备的人

<div class="mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-4">
"机会永远是留给有准备的人的。就哪怕是你在海上漂着，有一块木板从你眼前漂过，你也要扑腾两下才能把它抓住。"
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic mb-4">
"什么叫做好准备？只有是日复一日，年复一年，坚持认为你觉得正确的事情，不要懈怠，不断的积累，不断的去做这些事情，沿着你认为正确的路走下去，而且不要被噪声所干扰。当机会来的时候，你就有能力去抓住它。"
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">

<div class="p-3 rounded bg-green-50 border-t-2 border-green-500">
<b>天时</b>
科技浪潮来临，中国经济转型需求
</div>

<div class="p-3 rounded bg-blue-50 border-t-2 border-blue-500">
<b>地利</b>
清华学术积累+产业转化基因
</div>

<div class="p-3 rounded bg-purple-50 border-t-2 border-purple-500">
<b>人和</b>
志同道合的团队、有信仰的投资人
</div>

</div>

</div>

---

layout: end
---

# 智谱是AGI历史上的一个先行者

<div class="mt-8 text-xl opacity-80">
就开路的人。
</div>

<div class="mt-8 text-sm opacity-50">
— 张鹏，智谱CEO
</div>

<div class="mt-12 text-xs opacity-40">
2026年1月8日 · 智谱登陆港交所 · 全球大模型第一股
</div>
