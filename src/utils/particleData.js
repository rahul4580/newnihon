export const PARTICLE_DATA = [
  // --- N5 PARTICLES ---
  {
    id: "wa",
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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
    level: "N5",
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

  // --- N4 PARTICLES ---
  {
    id: "made-ni",
    level: "N4",
    label: "までに (made ni)",
    title: "Deadline",
    hinglish: "Tees Pehle (By/Before)",
    explanation: "Indicates a deadline or time by which an action must be completed.",
    usage: "Time + までに",
    examples: [
      { jp: "5時 までに 帰ります。", en: "Return by 5 o'clock.", romaji: "Goji made ni kaerimasu." },
      { jp: "金曜日 までに 出してください。", en: "Please submit by Friday.", romaji: "Kinyoubi made ni dashite kudasai." }
    ],
    quiz: [
      { q: "明日 ___ レポートを 出してください。", ans: "までに", options: ["までに", "まで", "から", "で"] },
      { q: "会議は 2時 ___ 終わります。", ans: "までに", options: ["までに", "まで", "に", "を"] }
    ]
  },
  {
    id: "bakari",
    level: "N4",
    label: "ばかり (bakari)",
    title: "Only / Just Finished",
    hinglish: "Bas yahi / Abhi abhi",
    explanation: "Indicates that something is the only thing done, or that an action has just been completed.",
    usage: "Noun + ばかり | Verb (Ta-form) + ばかり",
    examples: [
      { jp: "肉 ばかり 食べます。", en: "He eat only meat.", romaji: "Niku bakari tabemasu." },
      { jp: "食べた ばかり です。", en: "I just finished eating.", romaji: "Tabeta bakari desu." }
    ],
    quiz: [
      { q: "アニメ ___ 見ています。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] },
      { q: "日本に来た ___ です。", ans: "ばかり", options: ["ばかり", "たら", "から", "ので"] }
    ]
  },
  {
    id: "dake",
    level: "N4",
    label: "だけ (dake)",
    title: "Only (Positive)",
    hinglish: "Sirf (Only)",
    explanation: "Indicates a limit or extent, meaning 'only' in a positive context.",
    usage: "Noun + だけ",
    examples: [
      { jp: "これ だけ です。", en: "This is all (only this).", romaji: "Kore dake desu." },
      { jp: "1分 だけ 待ってください。", en: "Please wait only one minute.", romaji: "Ippun dake matte kudasai." }
    ],
    quiz: [
      { q: "名前 ___ 書いてください。", ans: "だけ", options: ["だけ", "しか", "も", "は"] },
      { q: "一つ ___ 食べました。", ans: "だけ", options: ["だけ", "も", "を", "に"] }
    ]
  },
  {
    id: "noni",
    level: "N4",
    label: "のに (noni)",
    title: "Despite / Even though",
    hinglish: "Halaanki (Even though)",
    explanation: "Expresses a result that is contrary to expectation, often with a feeling of surprise or regret.",
    usage: "Clause + のに + Contrary Result",
    examples: [
      { jp: "勉強した のに 、不合格でした。", en: "Even though I studied, I failed.", romaji: "Benkyou shita noni, fugoukaku deshita." },
      { jp: "日曜日 なのに 、働いています。", en: "Even though it's Sunday, I'm working.", romaji: "Nichiyoubi nanoni, hataraite imasu." }
    ],
    quiz: [
      { q: "薬を飲んだ ___ 、よくなりません。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "雨 ___ 、出かけます。", ans: "なのに", options: ["なのに", "ので", "から", "けど"] }
    ]
  },
  {
    id: "gurai",
    level: "N4",
    label: "くらい / ぐらい (gurai)",
    title: "Approximately / About",
    hinglish: "Lagbhag (About)",
    explanation: "Indicates an approximate amount, time, or extent.",
    usage: "Quantity + くらい / ぐらい",
    examples: [
      { jp: "1時間 くらい 待ちました。", en: "I waited for about an hour.", romaji: "Ichijikan gurai machimashita." },
      { jp: "これ くらい の大きさです。", en: "It's about this size.", romaji: "Kore gurai no ookisa desu." }
    ],
    quiz: [
      { q: "10分 ___ 休みましょう。", ans: "くらい", options: ["くらい", "まで", "から", "に"] },
      { q: "どの ___ かかりますか。", ans: "くらい", options: ["くらい", "ごろ", "まで", "から"] }
    ]
  },
  {
    id: "hodo",
    level: "N4",
    label: "ほど (hodo)",
    title: "To the extent / Not as much as",
    hinglish: "Jitna (Extent)",
    explanation: "Indicates an extent or compares with a negative verb (not as ... as).",
    usage: "Noun + ほど + Negative",
    examples: [
      { jp: "去年 ほど 暑くないです。", en: "It's not as hot as last year.", romaji: "Kyonen hodo atsukunai desu." },
      { jp: "死ぬ ほど 疲れました。", en: "I'm tired to the point of dying.", romaji: "Shinu hodo tsukaremashita." }
    ],
    quiz: [
      { q: "昨日 ___ 寒くないです。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "寝られない ___ 痛いです。", ans: "ほど", options: ["ほど", "くらい", "まで", "から"] }
    ]
  },
  {
    id: "shika",
    level: "N4",
    label: "しか (shika)",
    title: "Only (Negative context)",
    hinglish: "Sirf (Only - and nothing else)",
    explanation: "Used with a negative verb to mean 'only'. It implies that the amount is insufficient.",
    usage: "Noun + しか + Negative Verb",
    examples: [
      { jp: "100円 しか ありません。", en: "I only have 100 yen.", romaji: "Hyakuen shika arimasen." },
      { jp: "ひらがな しか 書けません。", en: "I can only write Hiragana.", romaji: "Hiragana shika kakemasen." }
    ],
    quiz: [
      { q: "これ ___ ありません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "お茶しか ___ ません。", ans: "飲み", options: ["飲み", "飲む", "飲ん", "飲め"] }
    ]
  },
  {
    id: "node",
    level: "N4",
    label: "ので (node)",
    title: "Because / Since (Polite)",
    hinglish: "Kyonki (Since/Because)",
    explanation: "Expresses a cause or reason objectively and politely.",
    usage: "Verb-Plain + ので",
    examples: [
      { jp: "用事がある ので 、帰ります。", en: "Since I have errands, I'm going home.", romaji: "Youji ga aru node, kaerimasu." },
      { jp: "雨な ので 、中止です。", en: "Because it's raining, it's cancelled.", romaji: "Ame nanode, chuushi desu." }
    ],
    quiz: [
      { q: "危ない ___ 、気をつけてください。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "日曜日 ___ 、店が 混んでいます。", ans: "なので", options: ["なので", "ので", "から", "で"] }
    ]
  },
  {
    id: "baai",
    level: "N4",
    label: "場合は (baai wa)",
    title: "In case of",
    hinglish: "Agar aisi baat hai toh (In case)",
    explanation: "Used to describe what to do in a specific situation/case.",
    usage: "Plain form / Noun + の + 場合は",
    examples: [
      { jp: "火事の 場合は 逃げてください。", en: "In case of fire, please escape.", romaji: "Kaji no baai wa nigete kudasai." },
      { jp: "遅れる 場合は 連絡してください。", en: "In case you're late, please contact us.", romaji: "Okureru baai wa renraku shite kudasai." }
    ],
    quiz: [
      { q: "故障した ___ 、どうしますか。", ans: "場合は", options: ["場合は", "なかれば", "までに", "ので"] },
      { q: "地振 ___ 、机の下に 隠れてください。", ans: "の場合は", options: ["の場合は", "ときは", "なら", "から"] }
    ]
  },
  {
    id: "you-ni",
    level: "N4",
    label: "ように (you ni)",
    title: "In order to / So that",
    hinglish: "Taaki (So that)",
    explanation: "Indicates a goal or purpose, often with potential verbs or negative verbs.",
    usage: "Verb-Potential / Verb-Negative + ように",
    examples: [
      { jp: "忘れない ように 、メモします。", en: "I'll take a note so that I don't forget.", romaji: "Wasurenai you ni, memo shimasu." },
      { jp: "聞こえる ように 、大きく言いました。", en: "I said it loudly so that it could be heard.", romaji: "Kikoeru you ni, ookiku iimashita." }
    ],
    quiz: [
      { q: "遅れない ___ 、早く 行きましょう。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "日本料理が 作れる ___ 、練習します。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] }
    ]
  },

  // --- N3 PARTICLES ---
  {
    id: "kiri",
    level: "N3",
    label: "きり (kiri)",
    title: "Only / Ever Since",
    hinglish: "Bas wahi / Tab se yahi",
    explanation: "Emphasizes that something is the only thing, or that a state has continued since a specific point.",
    usage: "Noun + きり | Verb (Ta-form) + きり",
    examples: [
      { jp: "二人 きり で 話しましょう。", en: "Let's talk just the two of us.", romaji: "Futari kiri de hanashimashou." },
      { jp: "一度 会った きり です。", en: "I haven't met him since meeting just once.", romaji: "Ichido atta kiri desu." }
    ],
    quiz: [
      { q: "昨日 寝た ___ です。", ans: "きり", options: ["きり", "だけ", "ばかり", "ほど"] },
      { q: "一人 ___ の生活。", ans: "きり", options: ["きり", "ほど", "まで", "より"] }
    ]
  },
  {
    id: "koso",
    level: "N3",
    label: "こそ (koso)",
    title: "Precisely / Especially",
    hinglish: "Yahi toh / Isi bar toh",
    explanation: "Emphasizes the preceding word, often to single it out as the true or most important case.",
    usage: "Noun + こそ",
    examples: [
      { jp: "今年 こそ 勝ちます。", en: "This year for sure (precisely this year), we will win.", romaji: "Kotoshi koso kachimasu." },
      { jp: "こちら こそ。", en: "Likewise (it is I who should say that).", romaji: "Kochira koso." }
    ],
    quiz: [
      { q: "明日 ___ 頑張る。", ans: "こそ", options: ["こそ", "さえ", "まで", "だけ"] },
      { q: "あなた ___ 僕のヒーローだ。", ans: "こそ", options: ["こそ", "すら", "だに", "さえ"] }
    ]
  },
  {
    id: "sae",
    level: "N3",
    label: "さえ (sae)",
    title: "Even",
    hinglish: "Tak (Even)",
    explanation: "Emphasizes an extreme example, meaning 'even...', implying that if that is true, other things are naturally true.",
    usage: "Noun + さえ",
    examples: [
      { jp: "子供 さえ 知っています。", en: "Even children know that.", romaji: "Kodomo sae shitte imasu." },
      { jp: "ひらがな さえ 書けません。", en: "I can't even write Hiragana.", romaji: "Hiragana sae kakemasen." }
    ],
    quiz: [
      { q: "自分の名前 ___ かけない。", ans: "さえ", options: ["さえ", "こそ", "ばかり", "だけ"] },
      { q: "忙しくて、寝る時間 ___ ない。", ans: "さえ", options: ["さえ", "から", "ので", "まで"] }
    ]
  },
  {
    id: "toshite",
    level: "N3",
    label: "として (toshite)",
    title: "As / In the capacity of",
    hinglish: "Ke roop me (As)",
    explanation: "Indicates a role, capacity, or status.",
    usage: "Noun + として",
    examples: [
      { jp: "留学生 として 来ました。", en: "I came as an international student.", romaji: "Ryuugakusei toshite kimashita." },
      { jp: "彼 は 医者 として 働いています。", en: "He is working as a doctor.", romaji: "Kare wa isha toshite hataraite imasu." }
    ],
    quiz: [
      { q: "趣味 ___ ギターを弾いています。", ans: "として", options: ["として", "にとって", "につき", "に加えて"] },
      { q: "プロ ___ 責任がある。", ans: "として", options: ["として", "によって", "にわたって", "に際して"] }
    ]
  },
  {
    id: "nado",
    level: "N3",
    label: "など (nado)",
    title: "Etc. / And so on",
    hinglish: "Wagairah (Etc. / Aur bhi)",
    explanation: "Used to list examples among many possibilities.",
    usage: "Noun + など",
    examples: [
      { jp: "本や ノートなど を 買いました。", en: "I bought books, notebooks, etc.", romaji: "Hon ya nooto nado o kaimashita." }
    ],
    quiz: [
      { q: "りんごや バナナ ___ を 食べます。", ans: "など", options: ["など", "ばかり", "だけ", "しか"] }
    ]
  },
  {
    id: "ni-tsuite",
    level: "N3",
    label: "について (ni tsuite)",
    title: "About / Regarding",
    hinglish: "Ke baare me (About)",
    explanation: "Used to introduce a topic or subject.",
    usage: "Noun + について",
    examples: [
      { jp: "日本文化 について 勉強しています。", en: "I’m studying about Japanese culture.", romaji: "Nihon bunka ni tsuite benkyou shite imasu." }
    ],
    quiz: [
      { q: "将来の夢 ___ 話してください。", ans: "について", options: ["について", "にとって", "によって", "に際して"] }
    ]
  },
  {
    id: "ni-yotte",
    level: "N3",
    label: "によって (ni yotte)",
    title: "Depending on / By",
    hinglish: "Ke anusar (Depending on) / Ke dwara (By)",
    explanation: "Indicates variation based on something, or the means/creator of something.",
    usage: "Noun + によって",
    examples: [
      { jp: "人 によって 考え方が 違います。", en: "Thinking differs depending on the person.", romaji: "Hito ni yotte kangaekata ga chigaimasu." }
    ],
    quiz: [
      { q: "国 ___ 習慣が 違います。", ans: "によって", options: ["によって", "にとって", "について", "に対して"] }
    ]
  },
  {
    id: "uchi-ni",
    level: "N3",
    label: "うちに (uchi ni)",
    title: "While / Before a change",
    hinglish: "Jab tak / Uske pehle",
    explanation: "Doing something while a certain state lasts.",
    usage: "Verb-Plain / Adjective / Noun + の + うちに",
    examples: [
      { jp: "明るい うちに 帰りましょう。", en: "Let's go home while it's still light out.", romaji: "Akarui uchi ni kaerimashou." }
    ],
    quiz: [
      { q: "忘れない ___ メモしてください。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] }
    ]
  },
  {
    id: "ni-saishite",
    level: "N2",
    label: "に際して (ni saishite)",
    title: "On the occasion of / When",
    hinglish: "Ke mauke par (When doing)",
    explanation: "Used for formal occasions or when starting something important.",
    usage: "Noun / Verb-Plain + に際して",
    examples: [
      { jp: "お申し込み に際して 、注意を お読みください。", en: "When applying, please read the warnings.", romaji: "Omoushikomi ni saishite, chuui o oyomi kudasai." }
    ],
    quiz: [
      { q: "帰国 ___ 、お世話になった人に 挨拶した。", ans: "に際して", options: ["に際して", "にとって", "につき", "に加えて"] }
    ]
  },
  {
    id: "ni-watatte",
    level: "N2",
    label: "にわたって (ni watatte)",
    title: "Across / Over a period",
    hinglish: "Pura (Across / Throughout)",
    explanation: "Indicates that something covers a whole range of time or space.",
    usage: "Noun + にわたって",
    examples: [
      { jp: "3日間 にわたって 、お祭りが あります。", en: "There will be a festival over a period of three days.", romaji: "Mikkakan ni watatte, omatsuri ga arimasu." }
    ],
    quiz: [
      { q: "会議は 5時間 ___ 行われた。", ans: "にわたって", options: ["にわたって", "に際して", "に応じて", "に伴って"] }
    ]
  },
  {
    id: "o-tsuujite",
    level: "N2",
    label: "を通じて / を通して (o tsuujite/tooshite)",
    title: "Through / Via",
    hinglish: "Ke zariye (Through)",
    explanation: "Indicates the means or the whole period during which something happens.",
    usage: "Noun + を通じて / を通して",
    examples: [
      { jp: "ニュース を通じて 知りました。", en: "I learned it through the news.", romaji: "Nyuusu o tsuujite shirimashita." },
      { jp: "1年 を通して 暑いです。", en: "It's hot throughout the year.", romaji: "Ichinen o tooshite atsui desu." }
    ],
    quiz: [
      { q: "インターネット ___ 買い物を する。", ans: "を通じて", options: ["を通じて", "として", "にとって", "につき"] }
    ]
  },
  {
    id: "o-motte",
    level: "N1",
    label: "をもって (o motte)",
    title: "With / At the time of",
    hinglish: "Ke saath / Us samay (Formal)",
    explanation: "Used for formal limits in time or as a high-level means/reason.",
    usage: "Noun + をもって",
    examples: [
      { jp: "本日 をもって 終了します。", en: "It ends as of today.", romaji: "Honjitsu o motte shuuryou shimasu." }
    ],
    quiz: [
      { q: "これ ___ 失礼いたします。", ans: "をもって", options: ["をもって", "として", "にとって", "につき"] }
    ]
  },
  {
    id: "naradeha",
    level: "N1",
    label: "ならでは (naradeha)",
    title: "Unique to",
    hinglish: "Jo sirf wahan mile (Unique)",
    explanation: "Emphasizes that a quality is exclusive to a specific entity.",
    usage: "Noun + ならでは",
    examples: [
      { jp: "京都 ならではの 景色ですね。", en: "It's a view unique to Kyoto.", romaji: "Kyouto naradeha no keshiki desu ne." }
    ],
    quiz: [
      { q: "プロ ___ の 素晴らしい 技だ。", ans: "ならでは", options: ["ならでは", "において", "にとって", "につき"] }
    ]
  }
];
