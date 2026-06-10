export const CHARACTERS = [
      {
        id: 'beary',
        categories: ['ursalinos'],
        nameEng: 'Beary',
        nameChn: '小熊',
        image: 'beary/bear-static.png',
        imageAnimated: 'beary/beary-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Head of Ursalinos', chn: '熊手党族长' }],
        bio: [
          {
            eng: 'Beary is a Brown bear (<a href="https://en.wikipedia.org/wiki/Brown_bear"><em>Ursus arctos</em></a>). He is a senior technician and associate professor in the BIAS (Bear Institute of Aeronautics and Space), where he serves as a joint faculty of pure mathematics and astrophysics. At the same time, he serves as the head of the Ursalinos.',
            chn: '小熊是一头棕熊 (<a href="https://en.wikipedia.org/wiki/Brown_bear"><em>Ursus arctos</em></a>)。小熊是BIAS(熊熊航空航天局)的高级技师和副教授，在纯数学系和天体物理系担任联合教员。同时，他担任熊手党的族长。',
          },
          {
            eng: 'Beary\'s research interests lie upon the application of algebraic topology on multiscale structure in the universe. Meanwhile, when someone jokes about the limited appications of pure mathematics, Beary will passionately explains his application of algebraic topology into string theory and multi-universe theory, although this seems more "unapplicable" for those laymen.',
            chn: '小熊的研究主要集中于代数拓扑学在多尺度结构宇宙中的应用。每当有人开玩笑说做纯数学没什么应用的时候，小熊会热情地解释他如何利用代数拓扑学解决弦理论和多重宇宙理论的例子，尽管这在我们这些外人看来似乎更“不实用”。',
          },
        ],
      },
      {
        id: 'little-bear',
        categories: ['ursalinos'],
        nameEng: 'Little Bear',
        nameChn: '小小熊',
        image: 'little-bear/little-bear-static.png',
        imageAnimated: 'little-bear/little-bear-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Ursalinos', chn: '熊手党' }],
        bio: [
          {
            eng: 'Little Bear is a Brown bear (<a href="https://en.wikipedia.org/wiki/Brown_bear"><em>Ursus arctos</em></a>) cub. He is the son of Beary.',
            chn: '小小熊是一头棕熊 (<a href="https://en.wikipedia.org/wiki/Brown_bear"><em>Ursus arctos</em></a>)幼崽。他是小熊的儿子。',
          },
          {
            eng: 'Little Bear is a problem kid in the Resort, as he can rarely supresses his curiosity and naughtiness, leading to him always causing troubles around. Despite all of these, every time when he messes around, his innocent eyes and adorable emotions always condone him from penalties.',
            chn: '小小熊是樂園里的问题青年，因为无法抑制他的好奇心和顽皮，他总是四处闯祸。尽管如此，每当他真的搞砸了，他的无辜眼神和可爱表情几乎肯定能为他脱罪。',
          },
        ],
      },
      {
        id: 'mathy',
        categories: ['admins'],
        nameEng: 'Mathy',
        nameChn: '数数',
        image: 'mathy/mathy-static.png',
        imageAnimated: 'mathy/mathy-animated.gif',
        slotStyle: 'static',
        tags: [
          { eng: 'Administrator', chn: '管理员' },
          { eng: 'DP Department', chn: 'DP署' }
        ],
        bio: [
          {
            eng: 'Mathy is the founder of the Bear Resort. He primarily works with the logistics, developments, and technological stacks for the Resort.',
            chn: '数数是小熊樂園的创始人。他主要负责小熊樂園的设计、开发和技术栈。',
          },
        ],
      },
      {
        id: 'zhaizhai',
        categories: ['admins'],
        nameEng: 'Zhaizhai',
        nameChn: '宅宅',
        image: 'zhaizhai/zhaizhai-static.png',
        imageAnimated: 'zhaizhai/zhaizhai-animated.gif',
        slotStyle: 'static',
        tags: [
          { eng: 'Administrator', chn: '管理员' },
          { eng: 'IP Department', chn: 'IP署' }
        ],
        bio: [
          {
            eng: 'Zhaizhai is the co-founder of the Bear Resort. She has sophisticated capabilities for establishing drawings for the beauties and works with social media for the Resort. She is also fluent in creating technological stack using vide coding. At the same time, she is the owner of Simba the ginger cat.',
            chn: '宅宅是小熊樂園的联合创始人。她擅长为美少女们绘制插画，并负责小熊樂園的社交媒体运营。同时，她擅长使用氛围感编程并创建技术栈。她是橘猫辛巴的主人。',
          },
        ],
      },
      {
        id: 'mousy',
        categories: ['admins'],
        nameEng: 'Mousy',
        nameChn: '鼠鼠',
        image: 'mousy/mousy-static.png',
        imageAnimated: 'mousy/mousy-animated.gif',
        slotStyle: 'static',
        tags: [
          { eng: 'Administrator', chn: '管理员' },
          { eng: 'OP Department', chn: 'OP署' }
        ],
        bio: [
          {
            eng: 'Mousy is the founder of the Bear Resort. She is good at drawing protraits and in charge of providing social connections and oppotunities for the Resort.',
            chn: '鼠鼠是小熊樂園的联合创始人，她擅长绘制人物立绘，并负责为樂園提供社交机会和资源。',
          },
        ],
      },
      {
        id: 'dr-chubie',
        categories: ['ursalinos', 'meowstars'],
        nameEng: 'Dr. Chubie',
        nameChn: '胖胖博士',
        image: 'dr-b/dr-b-static.png',
        imageAnimated: 'dr-b/dr-b-animated.gif',
        slotStyle: 'static',
        tags: [
          { eng: 'Dual Identity', chn: '双重身份', dual: true },
          { eng: 'Ursalinos & Meowstars', chn: '熊手党 & 喵星人', dual: true },
        ],
        links: [
          {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSdzFX4EANLZvD9Y2l2mYN_56jX23oaFzY7fUjT8BAuToITpKQ/viewanalytics?usp=form_confirm',
            eng: 'Survey Results',
            chn: '问卷结果',
          },
        ],
        bio: [
          {
            eng: 'Dr. Chubie is a Giant panda (<a href="https://en.wikipedia.org/wiki/Giant_panda"><em>Ailuropoda melanoleuca</em></a>). He is a doctor in the Resort (although we don\'t know if he possesses a medical degree, a Doctor of Philosophy, or both).',
            chn: '胖胖博士是一头大熊猫 (<a href="https://en.wikipedia.org/wiki/Giant_panda"><em>Ailuropoda melanoleuca</em></a>)。他是樂園里的医生(也可能是博士，又或许都是)。',
          },
          {
            eng: 'Dr. Chubie is a workout fanatic who spends hours hitting the weight room (FYI, he does not do cardio at all). He has become the biggest amongst all pandas, which he simultaneously enjoys and struggles to be the big guy. He somehow has a benzene reactor on his chest that he rarely takes off, and the last time we see it off is when he was measuring his weight...',
            chn: '胖胖博士酷爱健身，并在力量室里没少花时间（也许你不知道，他从不做有氧训练）。目前，他是熊猫里块头最大的，尽快他对“大块头”这个形象既爱又恨。他的胸膛上装有一个苯环反应器，而且几乎从不摘下它。我们上次看到他摘下反应器还是他上次称体重的时候......',
          },
        ],
      },
      {
        id: 'meow-sieur',
        categories: ['meowstars'],
        nameEng: 'Meow-sieur Chef',
        nameChn: '神厨咪咪',
        image: 'tiger/tiger-static.png',
        imageAnimated: 'tiger/tiger-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Head of Meowstars', chn: '喵星人族长' }],
        links: [
          {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeSW_F1lZ-YPX4SVYt6Ryv5MRwZlF0ktrK1k7WABXoYVraSNQ/viewanalytics?usp=form_confirm',
            eng: 'Survey Results',
            chn: '问卷结果',
          },
        ],
        bio: [
          {
            eng: 'Meow-sieur Chef is a South China Tiger (<a href="https://en.wikipedia.org/wiki/South_China_tiger"><em>P. t. amoyensis</em></a>). As the King of Beasts, he is undoubtfully the head of the Meowstars.',
            chn: '神厨咪咪是一头华南虎。作为百兽之王，他毋庸置疑是喵星人的族长。',
          },
          {
            eng: 'Meow-sieur Chef is a cook, and he makes dishes for all the carnivores and bears in the Bear Resort. Absolutely marvelous control of knifes, so one should naturally suspect what he does before becoming a chief. FYI: You\'d better call him by Big Justin (which appeared to be on his ID, probably) rather than Meow-sieur (his nickname), unless you are absolutely sure that you will not become his breakfast tomorrow.',
            chn: '神厨咪咪是一个厨子，他为小熊樂園里的各个食肉动物和熊们准备餐点。绝佳的刀工，让人不得不怀疑他在做厨子之前干的是什么行当。小贴士：你最好叫他的真名-大哥贾斯汀，而非小名咪咪，除非你知道你绝不会成为他明天的早餐。',
          },
        ],
      },
      {
        id: 'simba',
        categories: ['meowstars'],
        nameEng: 'Simba De Cat',
        nameChn: '小喵辛巴',
        image: 'simba/simba-static.png',
        imageAnimated: 'simba/simba-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Meowstars', chn: '喵星人' }],
        bio: [
          {
            eng: 'Simba De Cat is a little Ginger Cat. To be honest, at this moment, we should really double check if he is still a little cat.',
            chn: '小喵辛巴是一只小橘猫。讲真的，我们现在真的需要核实一下他真的还是小猫吗？',
          },
          {
            eng: 'Simba is the pet cat of Zhaizhai. Apart from being absolutely adorable, Simba also has his own preciousness in terms of scientific research: Simba\'s trajectory contains a perfectly random component and nobody knows where he would jump to at the next time step, so his movements serve as a perfect source for simulations of Brownian motions, which happens to be something that Mathy and Mousy have been researching on.',
            chn: '辛巴是宅宅的宠物。除了每日卖萌以外，辛巴是科研界名副其实的瑰宝：他的运动轨迹包含一个绝对随机的部分，且没有任何人知道他下一刻会窜到什么地方。因此，他的动作是模拟布朗运动的绝佳资源，而这又是数数和鼠鼠长久以来的研究方向。',
          },
        ],
      },
      {
        id: 'ayin',
        categories: ['ursalinos'],
        nameEng: 'Ayin',
        nameChn: '阿殷',
        image: 'a-yin/a-yin-static.png',
        imageAnimated: 'a-yin/a-yin-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Ursalinos', chn: '熊手党' }],
        bio: [
          {
            eng: 'Ayin is an Asian Black Bear (<a href="https://en.wikipedia.org/wiki/Asian_black_bear"><em>Ursus thibetanus</em></a>) cub. His twin brother is Ayang.',
            chn: '阿殷是一头亚洲黑熊 (<a href="https://en.wikipedia.org/wiki/Asian_black_bear"><em>Ursus thibetanus</em></a>)幼崽. 他的双胞胎兄弟是阿阳.',
          },
          {
            eng: 'Ayin is the elder brother amongst the twins, and would always need to pickup the responsibilities in the family. Do not question him why his younger brother looks completely different, as this would really piss him up.',
            chn: '阿殷是双胞兄弟里的老大哥，俗话说长兄如父，阿殷已是兄弟里的顶梁柱。不要问他的弟弟和他为什么长得一点儿都不像，因为这绝对会惹到他。',
          },
        ],
      },
      {
        id: 'ayang',
        categories: ['ursalinos'],
        nameEng: 'Ayang',
        nameChn: '阿阳',
        image: 'a-yang/a-yang-static.png',
        imageAnimated: 'a-yang/a-yang-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Ursalinos', chn: '熊手党' }],
        bio: [
          {
            eng: 'Ayang is a Polar Bear (<a href="https://en.wikipedia.org/wiki/Polar_bear"><em>Ursus maritimus</em></a>) cub. His twin brother is Ayin.',
            chn: '阿阳是一头北极熊 (<a href="https://en.wikipedia.org/wiki/Polar_bear"><em>Ursus maritimus</em></a>)幼崽。他的双胞胎兄弟是阿殷。',
          },
          {
            eng: 'As the younger brother, Ayang is always unsatisfactory about his elder brother taking over everything. "Bro is too dominant in life," Ayang says, as he frowns explicitly, "He is nothing like me, and I don\'t see why his own businesses have not exploited himself."',
            chn: '作为兄弟里的老幺，阿阳对阿殷的绝对控制表达了不满。"他总想控制一切，"阿殷皱着眉说道，"他一点儿都不像我，而且我不懂为什么他自己的那些破事儿还不够他忙的。"',
          },
        ],
      },
      {
        id: 'uncle-v',
        categories: ['ursalinos'],
        nameEng: 'Uncle V',
        nameChn: '维维叔',
        image: 'uncle-v/uncle-v-static.png',
        imageAnimated: 'uncle-v/uncle-v-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Ursalinos Ambassador', chn: '熊手党大使' }],
        bio: [
          {
            eng: 'Uncle V is an Asian Black Bear (<a href="https://en.wikipedia.org/wiki/Asian_black_bear"><em>Ursus thibetanus</em></a>). He is the father of Ayin.',
            chn: '维维叔是一头亚洲黑熊 (<a href="https://en.wikipedia.org/wiki/Asian_black_bear"><em>Ursus thibetanus</em></a>)。他是阿殷的父亲。',
          },
          {
            eng: 'Uncle V has switched to a fully vegetarian diet as he became the ambassador for the Ursalinos. "Being vegetarian makes me seems a lot more friendly, and I serve as the figure of our gang," says Uncle V, as he crams a whole apple inside his mouth. Apparently, being vegetarian is not really effective in maintaining fit (c.f. Dr. Chubie).',
            chn: '维维叔自当选熊手党的大使后便坚持素食。"做一个素食主义者让我看起来更友善。毕竟我可是咱们帮的形象，"维维叔边说边把一整个苹果塞进嘴里。显然，吃素对保持体型而言并不见效(详见: 胖胖博士)。',
          },
        ],
      },
      {
        id: 'daikon-taro',
        categories: ['ursalinos'],
        nameEng: 'Daikon Taro',
        nameChn: '萝卜太郎',
        image: 'daikon-taro/daikon-taro-static.png',
        imageAnimated: 'daikon-taro/daikon-taro-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Ursalinos', chn: '熊手党' }],
        bio: [
          {
            eng: 'Daikon Taro is a wombat (<a href="https://en.wikipedia.org/wiki/Common_wombat"><em>Vombatus Ursinus</em></a>). He serves as a bus driver in the Bear Resort.',
            chn: '萝卜太郎是一头袋熊 (<a href="https://en.wikipedia.org/wiki/Common_wombat"><em>Vombatus Ursinus</em></a>)。他在小熊樂園里担任公车司机。',
          },
          {
            eng: 'Daikon Taro\'s uncle always wants him to become a "combator," as it appears partial in the name for the family of wombats. However, Daikon would rather spend his time collecting huge carrots and slam them on his enimies\' faces. "It is much more fun to collect carrots than to become a combator," Daikon says, "and I get a lot of carrots from my stipend job as a bus driver."',
            chn: '萝卜太郎的叔叔总是希望他成为一名"斗士"，毕竟袋熊族自古以来都是熊族的打手。然而，萝卜太郎更喜欢收集巨大的萝卜，然后拿萝卜作为他攻击的家伙事儿。"收集萝卜比成为斗士有趣多了，"萝卜太郎说道，"更何况公车司机的死工资能让我买到更多大萝卜！"',
          }
        ],
      },
      {
        id: 'beallionare',
        categories: ['ursalinos', 'meowstars'],
        nameEng: 'Bellionare',
        nameChn: '熊百万',
        image: 'beallionare/beallionare-static.png',
        imageAnimated: 'beallionare/beallionare-animated.gif',
        slotStyle: 'static',
        tags: [
          { eng: 'Dual Identity', chn: '双重身份', dual: true },
          { eng: 'Meowstars & Ursalinos', chn: '喵星人 & 熊手党', dual: true },
        ],
        bio: [
          {
            eng: 'Beallionare is a red panda (<a href="https://en.wikipedia.org/wiki/Red_panda"><em>Ailurus fulgens</em></a>). He is a very rich merchant in the Bear Resort.',
            chn: '熊百万是一头小熊猫 (<a href="https://en.wikipedia.org/wiki/Red_panda"><em>Ailurus fulgens</em></a>)。他是小熊樂園里的富豪商人。',
          },
          {
            eng: 'Beallionare used to think money resolves everything, until he realized that red pandas used to be the "real panda" and he fails to bribe the resort in emphasizing that "giant panda" is not the real one. Right now, he has turned to funding a research to create a new language that respects red pandas as the orthodox panda.',
            chn: '熊百万曾经以为金钱能解决一切，直到他意识到小熊猫才是是“真正的熊猫”，而他却没办法贿赂樂園来强调“大熊猫”才不是真正的熊猫。目前，他正在资助一项研究，以创建一种新的语言，强调小熊猫才是熊猫正统。',
          },
        ],
      },
      {
        id: 'tigrassin',
        categories: ['meowstars'],
        nameEng: 'Tigrassin',
        nameChn: '白虎杀手',
        image: 'tigrassin/tigrassin-static.png',
        imageAnimated: 'tigrassin/tigrassin-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Meowstars', chn: '喵星人' }],
        bio: [
          {
            eng: 'Tigrassin is a leucistic Bengal Tiger (<a href="https://en.wikipedia.org/wiki/Bengal_tiger"><em>Panthera tigris tigris</em></a>). He has no recorded job in the Resort.',
            chn: '白虎杀手是一头孟加拉白虎 (<a href="https://en.wikipedia.org/wiki/Bengal_tiger"><em>Panthera tigris tigris</em></a>)。他在樂園里没有记录在案的工作。',
          },
          {
            eng: '"Technically, I am a stronger tiger than Meow-sieur," Tigrassin says, as he flexes his claws, "Nowadays, these cats are too much drawn to the foods rather than the real power." It is publically known that Tigrassin always wanna replace Meow-sieur to become the head for mewostars, but he might be wrong about the real strength of Meow-sieur.',
            chn: '"力量上来讲，我可比神厨咪咪强壮多了，"白虎杀手边说边挥舞着他的爪子，"这些日子里的猫就知道吃，而忽略了真正的力量。"众所周知，白虎杀手一直想取代神厨咪咪成为喵星人的族长，但他可能低估了神厨咪咪的真实实力。',
          },
        ],
      },
      {
        id: 'frozen',
        categories: ['ursalinos'],
        nameEng: 'Frozen',
        nameChn: '冰冰姐',
        image: 'frozen/frozen-static.png',
        imageAnimated: 'frozen/frozen-animated.gif',
        slotStyle: 'static',
        tags: [{ eng: 'Ursalinos', chn: '熊手党' }],
        bio: [
          {
            eng: 'Frozen is a Polar Bear (<a href="https://en.wikipedia.org/wiki/Polar_bear"><em>Ursus maritimus</em></a>). She is the mother of Ayang.',
            chn: '冰冰姐是一头北极熊 (<a href="https://en.wikipedia.org/wiki/Polar_bear"><em>Ursus maritimus</em></a>)。她是阿阳的母亲。',
          },
          {
            eng: 'Although frozen does not own the superpower (like Elsa), her voice is inheriently cold and powerful, giving her a unchallengeable dominance over the other bears in Ursalinos. Especially for Ayang, who always becomes the model child whenever she is around.',
            chn: '尽管冰冰没有艾莎的超级力量，她的声音天生冰冷而强大，让其他熊手党成员对她不寒而栗，简直是无可挑战的统治力。尤其是对阿阳，在她面前的阿阳总是乖得无可挑剔，是樂園里最听话的“别人家孩子”。',
          },
        ],
      },
];

export const COMING_SOON = {
      // ursalinos: { eng: 'More Ursalinos coming soon', chn: '更多熊手党成员即将到来' },
      // meowstars: { eng: 'More Meowstars landing soon', chn: '更多喵星人即将着陆' },
    };

export const FACTION_ICONS = {
      ursalinos: 'icons/bear.png',
      meowstars: 'icons/cat.png',
      admins: 'icons/admin.png',
    };
