export const PARTICLE_DATA = [
  {
    id: "wa",
    label: "は (wa)",
    title: "Topic Marker",
    hinglish: "baat kis ke baare me hai",
    explanation: "Marks the topic of the sentence. Often translated as 'As for...' or simply 'is'.",
    usage: "Noun + は + Description/Action",
    examples: [
      { jp: "わたし は 学生 です。", en: "I am a student.", romaji: "Watashi wa gakusei desu." },
      { jp: "これ は 本 です。", en: "This is a book.", romaji: "Kore wa hon desu." }
    ],
    quiz: [
      { q: "わたし ___ ラフル です。", ans: "は", options: ["は", "が", "を", "に"] },
      { q: "これ ___ なん ですか。", ans: "は", options: ["は", "が", "を", "の"] }
    ]
  },
  {
    id: "ga",
    label: "が (ga)",
    title: "Subject Marker",
    hinglish: "kaun / kya (new info / emphasis)",
    explanation: "Marks the subject of the sentence, often emphasizing the subject or introducing new information.",
    usage: "Question Word + が | Noun + が + Arimasu/Imasu",
    examples: [
      { jp: "だれ が 来ます か。", en: "Who will come?", romaji: "Dare ga kimasu ka?" },
      { jp: "いぬ が います。", en: "There is a dog.", romaji: "Inu ga imasu." }
    ],
    quiz: [
      { q: "だれ ___ 行きますか。", ans: "が", options: ["は", "が", "を", "に"] },
      { q: "水 ___ あります。", ans: "が", options: ["を", "が", "は", "に"] }
    ]
  },
  {
    id: "o",
    label: "を (o)",
    title: "Object Marker",
    hinglish: "kya (action ka object)",
    explanation: "Marks the direct object of a verb—the thing that is being acted upon.",
    usage: "Noun + を + Transitive Verb",
    examples: [
      { jp: "パン を 食べます。", en: "Eat bread.", romaji: "Pan o tabemasu." },
      { jp: "お茶 を 飲みます。", en: "Drink tea.", romaji: "Ocha o nomimasu." }
    ],
    quiz: [
      { q: "りんご ___ 食べます。", ans: "を", options: ["を", "は", "が", "に"] },
      { q: "テレビ ___ 見ます。", ans: "を", options: ["は", "を", "が", "に"] }
    ]
  },
  {
    id: "ni",
    label: "に (ni)",
    title: "Time / Destination / Purpose",
    hinglish: "Target / Fixed Time",
    explanation: "Indicates a specific point in time, a destination, or the purpose of an action.",
    usage: "Time + に | Destination + に + Iku/Kuru",
    examples: [
      { jp: "7時 に 起きます。", en: "Wake up at 7.", romaji: "Shichiji ni okimasu." },
      { jp: "学校 に 行きます。", en: "Go to school.", romaji: "Gakkou ni ikimasu." }
    ],
    quiz: [
      { q: "8時 ___ 寝ます。", ans: "に", options: ["に", "で", "を", "は"] },
      { q: "日本 ___ 行きます。", ans: "に", options: ["に", "で", "を", "は"] }
    ]
  },
  {
    id: "de",
    label: "で (de)",
    title: "Place of Action / Means",
    hinglish: "Kahan (action area) / Kisse (means)",
    explanation: "Indicates the location where an action happens or the tool/means used to perform it.",
    usage: "Place + で + Action | Means + で + Action",
    examples: [
      { jp: "家 で 勉強します。", en: "Study at home.", romaji: "Ie de benkyou shimasu." },
      { jp: "バス で 行きます。", en: "Go by bus.", romaji: "Basu de ikimasu." }
    ],
    quiz: [
      { q: "レストラン ___ 食べます。", ans: "で", options: ["に", "で", "を", "は"] },
      { q: "タクシー ___ 行きます。", ans: "で", options: ["に", "で", "を", "は"] }
    ]
  },
  {
    id: "no",
    label: "の (no)",
    title: "Possession / Connection",
    hinglish: "Ka / Ki / Ke (Connection)",
    explanation: "Connects two nouns. Often denotes possession (my, your) or specifies a category.",
    usage: "Noun 1 + の + Noun 2",
    examples: [
      { jp: "わたし の 本。", en: "My book.", romaji: "Watashi no hon." },
      { jp: "日本 の くるま。", en: "Japanese car.", romaji: "Nihon no kuruma." }
    ],
    quiz: [
      { q: "あなた ___ 名前を 教えてください。", ans: "の", options: ["は", "の", "を", "が"] },
      { q: "これ は わたし ___ です。", ans: "の", options: ["は", "の", "を", "が"] }
    ]
  },
  {
    id: "mo",
    label: "も (mo)",
    title: "Inclusive 'Also'",
    hinglish: "Bhi (Also / Too)",
    explanation: "Means 'also' or 'too'. It replaces 'wa', 'ga', or 'o' when stating similar info.",
    usage: "Noun + も",
    examples: [
      { jp: "わたし も 行きます。", en: "I will also go.", romaji: "Watashi mo ikimasu." },
      { jp: "これ も おいしい です。", en: "This is also delicious.", romaji: "Kore mo oishii desu." }
    ],
    quiz: [
      { q: "田中さん ___ 学生です。", ans: "も", options: ["は", "も", "に", "を"] },
      { q: "パンも 食べます。りんご ___ 食べます。", ans: "も", options: ["も", "は", "が", "を"] }
    ]
  },
  {
    id: "he",
    label: "へ (e)",
    title: "Direction",
    hinglish: "Taraf (Towards)",
    explanation: "Emphasizes the direction of travel toward a place.",
    usage: "Place + へ + Verb of Movement",
    examples: [
      { jp: "日本 へ 行きます。", en: "Go towards Japan.", romaji: "Nihon e ikimasu." },
      { jp: "駅 へ 行きます。", en: "Go towards the station.", romaji: "Eki e ikimasu." }
    ],
    quiz: [
      { q: "どこ ___ 行きますか。", ans: "へ", options: ["へ", "で", "を", "の"] },
      { q: "国 ___ 帰ります。", ans: "へ", options: ["へ", "を", "の", "が"] }
    ]
  },
  {
    id: "to",
    label: "と (to)",
    title: "With / And / Quote",
    hinglish: "Saath (With) / Aur (And)",
    explanation: "Used to list items exhaustively, indicate a partner for an action, or mark a quotation.",
    usage: "A と B | Partner と Action | Quote + と",
    examples: [
      { jp: "友だち と 行きます。", en: "Go with a friend.", romaji: "Tomodachi to ikimasu." },
      { jp: "「行きます」と 言いました。", en: "Said 'I will go'.", romaji: "'Ikimasu' to iimashita." }
    ],
    quiz: [
      { q: "だれ ___ 行きますか。", ans: "と", options: ["に", "と", "を", "で"] },
      { q: "コーヒー ___ 紅茶、どちらがいいですか。", ans: "と", options: ["と", "を", "に", "は"] }
    ]
  },
  {
    id: "ka",
    label: "か (ka)",
    title: "Question / Or",
    hinglish: "Sawaal (?) / Ya (Or)",
    explanation: "Placed at the end of a sentence to make it a question, or between nouns to mean 'or'.",
    usage: "Sentence + か | Noun 1 か Noun 2",
    examples: [
      { jp: "行きます か。", en: "Will you go?", romaji: "Ikimasu ka?" },
      { jp: "コーヒー か 水。", en: "Coffee or water.", romaji: "Ko-hi- ka mizu." }
    ],
    quiz: [
      { q: "これ は 本 です ___。", ans: "か", options: ["か", "わ", "よ", "ね"] },
      { q: "今日 か 明日 ___ 行きます。", ans: "に", options: ["に", "を", "は", "の"] }
    ]
  },
  {
    id: "ya",
    label: "や (ya)",
    title: "Incomplete List",
    hinglish: "Vagera Vagera (etc.)",
    explanation: "Used like 'to', but implies there are other things in the list not mentioned.",
    usage: "Noun 1 や Noun 2",
    examples: [
      { jp: "パン や りんご。", en: "Bread, apples, etc.", romaji: "Pan ya ringo." },
      { jp: "本 や ペン。", en: "Books and pens (among others).", romaji: "Hon ya pen." }
    ],
    quiz: [
      { q: "かばんの中に 本 ___ ペンがあります。", ans: "や", options: ["と", "や", "に", "で"] },
      { q: "パン ___ たまごを 買いました。", ans: "や", options: ["や", "を", "の", "に"] }
    ]
  },
  {
    id: "ne",
    label: "ね (ne)",
    title: "Confirmation",
    hinglish: "Na? / Right?",
    explanation: "Used at the end of a sentence to seek agreement or confirm shared information.",
    usage: "Sentence + ね",
    examples: [
      { jp: "いい 天気 です ね。", en: "Nice weather, right?", romaji: "Ii tenki desu ne." },
      { jp: "おいしい です ね。", en: "It’s delicious, isn't it?", romaji: "Oishii desu ne." }
    ],
    quiz: [
      { q: "今日は 暑い です ___。", ans: "ね", options: ["ね", "よ", "か", "わ"] },
      { q: "きれい ___。", ans: "ですね", options: ["ですね", "ですよ", "ですわ", "ですねえ"] }
    ]
  },
  {
    id: "yo",
    label: "よ (yo)",
    title: "Emphasis / Info",
    hinglish: "Bata raha hoon (telling you)",
    explanation: "Used to provide new information or emphasize a point the listener might not know.",
    usage: "Sentence + よ",
    examples: [
      { jp: "おいしい です よ。", en: "It’s tasty (I’m telling you).", romaji: "Oishii desu yo." },
      { jp: "そこ は 危ない です よ。", en: "That place is dangerous (attention).", romaji: "Soko wa abunai desu yo." }
    ],
    quiz: [
      { q: "田中さんは もう 帰り ました ___。", ans: "よ", options: ["ね", "よ", "か", "わ"] },
      { q: "おいしい ___。", ans: "ですよ", options: ["ですよ", "ですね", "ですわ", "です"] }
    ]
  },
  {
    id: "kara",
    label: "から (kara)",
    title: "From / Because",
    hinglish: "Se (From) / Kyunki (Because)",
    explanation: "Indicates a starting point in time or space, or expresses a reason.",
    usage: "Start + から | Reason + から",
    examples: [
      { jp: "インド から 来ました。", en: "Came from India.", romaji: "Indo kara kimashita." },
      { jp: "忙しい から 行きません。", en: "Because I'm busy, I won't go.", romaji: "Isogashii kara ikimasen." }
    ],
    quiz: [
      { q: "9時 ___ 働きます。", ans: "から", options: ["まで", "から", "に", "を"] },
      { q: "危ない ___、気をつけてください。", ans: "から", options: ["から", "まで", "で", "に"] }
    ]
  },
  {
    id: "made",
    label: "まで (made)",
    title: "Until / Up to",
    hinglish: "Tak (Until)",
    explanation: "Indicates an end point in time or space.",
    usage: "End + まで",
    examples: [
      { jp: "5時 まで 働きます。", en: "Work until 5.", romaji: "Goji made hatarakimasu." },
      { jp: "どこ まで 行きます か。", en: "How far are you going?", romaji: "Doko made ikimasu ka?" }
    ],
    quiz: [
      { q: "仕事は 10時 ___ です。", ans: "まで", options: ["まで", "から", "に", "を"] },
      { q: "駅 ___ いっしょに行きましょう。", ans: "まで", options: ["まで", "から", "に", "で"] }
    ]
  },
  {
    id: "yori",
    label: "より (yori)",
    title: "Comparison",
    hinglish: "Se zyada (Than)",
    explanation: "Used to compare two things, meaning 'than'.",
    usage: "A は B より Adj です",
    examples: [
      { jp: "東京 は 大阪 より 大きい。", en: "Tokyo is bigger than Osaka.", romaji: "Toukyou wa Oosaka yori ookii." },
      { jp: "これ は あれ より 安い です。", en: "This is cheaper than that one.", romaji: "Kore wa are yori yasui desu." }
    ],
    quiz: [
      { q: "わたしは りんご ___ みかんが好きです。", ans: "より", options: ["より", "が", "は", "に"] },
      { q: "日本語は 英語 ___ むずかしいですか。", ans: "より", options: ["より", "が", "は", "に"] }
    ]
  },
  {
    id: "shika",
    label: "しか～ない",
    title: "Only (Negative context)",
    hinglish: "Sirf itna (Only)",
    explanation: "Means 'only', but must be used with a negative verb. It implies 'nothing else'.",
    usage: "Noun + しか + Verb(Negative)",
    examples: [
      { jp: "水 しか ありません。", en: "There is only water.", romaji: "Mizu shika arimasen." },
      { jp: "一人 しか 来ませんでした。", en: "Only one person came.", romaji: "Hitori shika kimasen deshita." }
    ],
    quiz: [
      { q: "お金 ___ ありません。", ans: "しか", options: ["は", "を", "しか", "に"] },
      { q: "10分 ___ ありません。", ans: "しか", options: ["しか", "は", "を", "が"] }
    ]
  },
  {
    id: "demo",
    label: "でも (demo)",
    title: "But / Even",
    hinglish: "Lekin / Bhi (Even if)",
    explanation: "Used to mean 'but' at the start of a sentence, or 'even' when used after a noun.",
    usage: "Noun + でも | でも + Sentence",
    examples: [
      { jp: "学生 でも できます。", en: "Even students can do it.", romaji: "Gakusei demo dekimasu." },
      { jp: "お茶 でも いかがですか。", en: "How about some tea (or something)?", romaji: "Ocha demo ikaga desu ka?" }
    ],
    quiz: [
      { q: "そんなこと、子供 ___ わかります。", ans: "でも", options: ["でも", "は", "を", "に"] },
      { q: "難しい ___ 頑張ります。", ans: "けど", options: ["けど", "で", "を", "に"] }
    ]
  },
  {
    id: "kurai",
    label: "くらい / ぐらい",
    title: "Appox / About",
    hinglish: "Lagbhag (Approx)",
    explanation: "Indicates an approximate amount or duration.",
    usage: "Quantity/Duration + くらい/ぐらい",
    examples: [
      { jp: "1時間 ぐらい。", en: "About 1 hour.", romaji: "Ichijikan gurai." },
      { jp: "どのくらい かかりますか。", en: "How long (approx) will it take?", romaji: "Dono kurai kakarimasu ka?" }
    ],
    quiz: [
      { q: "京都まで どの ___ かかりますか。", ans: "くらい", options: ["くらい", "まで", "から", "に"] },
      { q: "1000円 ___ です。", ans: "ぐらい", options: ["ぐらい", "まで", "から", "に"] }
    ]
  },
  {
    id: "no_ga",
    label: "のが (no ga)",
    title: "Liking / Skill",
    hinglish: "Ye kaam (doing this)",
    explanation: "Nominalizes a verb so it can be used with 'suki' (like), 'kilai' (dislike), 'jouzu' (skillful), etc.",
    usage: "Verb(Dict) + のが + Suki/Jouzu/Heta",
    examples: [
      { jp: "日本語 を 話す のが 好きです。", en: "I like speaking Japanese.", romaji: "Nihongo o hanasu no ga suki desu." },
      { jp: "料理 を 作る のが 上手 です。", en: "Is good at cooking.", romaji: "Ryouri o tsukuru no ga jouzu desu." }
    ],
    quiz: [
      { q: "泳ぐ ___ 好きです。", ans: "のが", options: ["のが", "は", "を", "に"] },
      { q: "走る ___ 速い です。", ans: "のが", options: ["のが", "を", "に", "は"] }
    ]
  }
];
