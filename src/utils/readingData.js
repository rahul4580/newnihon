export const READING_DATA = [
  {
    id: 1,
    title: "Chapter 1: Morning Routine",
    jpTitle: "第1課: 朝 (Asa)",
    description: "Tanaka-san's typical morning before work.",
    level: "N5",
    color: "from-orange-400 to-amber-500",
    coverImage: "/reading/ch1/step1.jpg", 
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg",
        text: "田中さんは　毎朝　六時に　起きます。",
        translation: "Tanaka-san wakes up at 6:00 every morning.",
        grammarPoint: "～に 起きます (Wake up at...)",
        words: [
          { jp: "田中さん", romaji: "Tanaka-san", en: "Mr. Tanaka", type: "noun" },
          { jp: "は", romaji: "wa", en: "topic marker", type: "particle" },
          { jp: "毎朝", romaji: "maiasa", en: "every morning", type: "noun" },
          { jp: "六時", romaji: "rokuji", en: "6 o'clock", type: "noun" },
          { jp: "に", romaji: "ni", en: "at (time)", type: "particle" },
          { jp: "起きます", romaji: "okimasu", en: "wake up", type: "verb" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg",
        text: "コーヒーを　飲みます。",
        translation: "He drinks coffee.",
        grammarPoint: "～を 飲みます (Drink...)",
        words: [
          { jp: "コーヒー", romaji: "koohii", en: "coffee", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "飲みます", romaji: "nomimasu", en: "drink", type: "verb" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg",
        text: "それから　パンを　食べます。",
        translation: "And then, he eats bread.",
        grammarPoint: "それから (And then...)",
        words: [
          { jp: "それから", romaji: "sorekara", en: "and then/after that", type: "conjunction" },
          { jp: "パン", romaji: "pan", en: "bread", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "食べます", romaji: "tabemasu", en: "eat", type: "verb" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg",
        text: "七時半に　家を　出ます。",
        translation: "He leaves the house at 7:30.",
        grammarPoint: "～を 出ます (Leave [place])",
        words: [
          { jp: "七時半", romaji: "shichijihan", en: "7:30", type: "noun" },
          { jp: "に", romaji: "ni", en: "at (time)", type: "particle" },
          { jp: "家", romaji: "ie", en: "house", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "出ます", romaji: "demasu", en: "leave/exit", type: "verb" }
        ]
      },
      {
        id: 5,
        image: "/reading/ch1/step5.jpg",
        text: "仕事は　八時から　始まります。",
        translation: "Work starts from 8:00.",
        grammarPoint: "～から (From...)",
        words: [
          { jp: "仕事", romaji: "shigoto", en: "work/job", type: "noun" },
          { jp: "は", romaji: "wa", en: "topic marker", type: "particle" },
          { jp: "八時", romaji: "hachiji", en: "8 o'clock", type: "noun" },
          { jp: "から", romaji: "kara", en: "from", type: "particle" },
          { jp: "始まります", romaji: "hajimarimasu", en: "starts", type: "verb" }
        ]
      }
    ],
    quiz: [
      {
        question: "田中さんは　何時に　起きますか。",
        meaning: "What time does Mr. Tanaka wake up?",
        options: ["七時", "六時", "八時", "五時"],
        answer: 1 // Index of correct answer "六時"
      },
      {
        question: "田中さんは　何を　飲みますか。",
        meaning: "What does he drink?",
        options: ["水", "お茶", "ジュース", "コーヒー"],
        answer: 3 // Index of correct answer "コーヒー"
      },
      {
        question: "田中さんは　いつ　家を　出ますか。",
        meaning: "When does he leave the house?",
        options: ["六時半", "七時", "七時半", "八時"],
        answer: 2 // Index of correct answer "七時半"
      },
      {
        question: "仕事は　何時からですか。",
        meaning: "What time does work start?",
        options: ["八時", "九時", "七時", "八時半"],
        answer: 0 // Index of correct answer "八時"
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: University Life",
    jpTitle: "第2課: 学校 (Gakkou)",
    description: "Follow Maria to the university and learn about her studies.",
    level: "N5",
    color: "from-blue-400 to-indigo-500",
    coverImage: "/reading/ch2/ChatGPT%20Image%20Feb%205,%202026,%2003_02_09%20PM.png",
    steps: [
      {
        id: 1,
        image: "/reading/ch2/ChatGPT%20Image%20Feb%205,%202026,%2003_02_09%20PM.png",
        text: "マリアさんは　学生です。",
        translation: "Maria is a student.",
        grammarPoint: "～は 学生です (Is a student)",
        words: [
          { jp: "マリアさん", romaji: "Maria-san", en: "Maria", type: "noun" },
          { jp: "は", romaji: "wa", en: "topic marker", type: "particle" },
          { jp: "学生", romaji: "gakusei", en: "student", type: "noun" },
          { jp: "です", romaji: "desu", en: "to be/is", type: "verb" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch2/ChatGPT%20Image%20Feb%205,%202026,%2003_02_13%20PM.png",
        text: "大学で　日本語を　勉強します。",
        translation: "She studies Japanese at the university.",
        grammarPoint: "～で 勉強します (Study at...)",
        words: [
          { jp: "大学", romaji: "daigaku", en: "university", type: "noun" },
          { jp: "で", romaji: "de", en: "at (place of action)", type: "particle" },
          { jp: "日本語", romaji: "nihongo", en: "Japanese language", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "勉強します", romaji: "benkyou shimasu", en: "study", type: "verb" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch2/ChatGPT%20Image%20Feb%205,%202026,%2003_02_28%20PM.png",
        text: "月曜日から　金曜日まで　クラスに　行きます。",
        translation: "She goes to class from Monday to Friday.",
        grammarPoint: "～から ～まで (From... until...)",
        words: [
          { jp: "月曜日", romaji: "getsuyoubi", en: "Monday", type: "noun" },
          { jp: "から", romaji: "kara", en: "from", type: "particle" },
          { jp: "金曜日", romaji: "kinyoubi", en: "Friday", type: "noun" },
          { jp: "まで", romaji: "made", en: "until", type: "particle" },
          { jp: "クラス", romaji: "kurasu", en: "class", type: "noun" },
          { jp: "に", romaji: "ni", en: "to (destination)", type: "particle" },
          { jp: "行きます", romaji: "ikimasu", en: "go", type: "verb" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch2/ChatGPT%20Image%20Feb%205,%202026,%2003_02_31%20PM.png",
        text: "日本語は　少し　難しいですが、頑張ります。",
        translation: "Japanese is a bit difficult, but I'll do my best.",
        grammarPoint: "～ですが (Difficult, but...)",
        words: [
          { jp: "日本語", romaji: "nihongo", en: "Japanese language", type: "noun" },
          { jp: "は", romaji: "wa", en: "topic marker", type: "particle" },
          { jp: "少し", romaji: "sukoshi", en: "a little", type: "adverb" },
          { jp: "難しい", romaji: "muzukashii", en: "difficult", type: "adjective" },
          { jp: "ですが", romaji: "desuga", en: "but/however", type: "conjunction" },
          { jp: "頑張ります", romaji: "ganbarimasu", en: "do one's best", type: "verb" }
        ]
      }
    ],
    quiz: [
      {
        question: "マリアさんは　何ですか。",
        meaning: "What is Maria?",
        options: ["先生", "学生", "田中さん", "大学"],
        answer: 1 // 学生
      },
      {
        question: "マリアさんは　どこで　勉強しますか。",
        meaning: "Where does Maria study?",
        options: ["家", "クラス", "大学", "仕事"],
        answer: 2 // 大学
      },
      {
        question: "マリアさんは　月曜日から　いつまで　クラスに　行きますか。",
        meaning: "Until when does Maria go to class from Monday?",
        options: ["火曜日", "水曜日", "木曜日", "金曜日"],
        answer: 3 // 金曜日
      },
      {
        question: "日本語は　どうですか。",
        meaning: "How is Japanese?",
        options: ["簡単です", "難しいです", "面白いです", "静かです"],
        answer: 1 // 難しいです
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 3: The Supermarket",
    jpTitle: "第3課: スーパー (Suupaa)",
    description: "Shopping for tonight's dinner ingredients.",
    level: "N5",
    color: "from-green-400 to-emerald-500",
    coverImage: "/reading/ch1/step1.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "スーパーに　行きます。",
        translation: "I go to the supermarket.",
        grammarPoint: "～に行きます (Go to...)",
        words: [
          { jp: "スーパー", romaji: "suupaa", en: "supermarket", type: "noun" },
          { jp: "に", romaji: "ni", en: "to", type: "particle" },
          { jp: "行きます", romaji: "ikimasu", en: "go", type: "verb" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "野菜と　肉が　必要です。",
        translation: "I need vegetables and meat.",
        grammarPoint: "～と～ (And)",
        words: [
          { jp: "野菜", romaji: "yasai", en: "vegetables", type: "noun" },
          { jp: "と", romaji: "to", en: "and", type: "particle" },
          { jp: "肉", romaji: "niku", en: "meat", type: "noun" },
          { jp: "が", romaji: "ga", en: "subject marker", type: "particle" },
          { jp: "必要", romaji: "hitsuyou", en: "necessary", type: "na-adjective" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "りんごを　三つ　買います。",
        translation: "I buy three apples.",
        grammarPoint: "Counter: ～つ (General counting)",
        words: [
          { jp: "りんご", romaji: "ringo", en: "apple", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "三つ", romaji: "mittsu", en: "three", type: "noun" },
          { jp: "買います", romaji: "kaimasu", en: "buy", type: "verb" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "全部で　二千円です。",
        translation: "It is 2000 yen in total.",
        grammarPoint: "全部で (In total)",
        words: [
          { jp: "全部で", romaji: "zenbu de", en: "in total", type: "expression" },
          { jp: "二千", romaji: "nisen", en: "2000", type: "number" },
          { jp: "円", romaji: "en", en: "yen", type: "counter" }
        ]
      }
    ],
    quiz: [
      {
        question: "どこに　行きますか。",
        meaning: "Where does the person go?",
        options: ["デパート", "スーパー", "銀行", "郵便局"],
        answer: 1
      },
      {
        question: "何が　必要ですか。",
        meaning: "What is necessary?",
        options: ["パンと牛乳", "肉と魚", "野菜と肉", "果物と野菜"],
        answer: 2
      },
      {
        question: "りんごを　いくつ　買いますか。",
        meaning: "How many apples does the person buy?",
        options: ["一つ", "二つ", "三つ", "四つ"],
        answer: 2
      },
      {
        question: "全部で　いくらですか。",
        meaning: "How much is it in total?",
        options: ["千円", "二千円", "三千円", "四千円"],
        answer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Chapter 4: The Restaurant",
    jpTitle: "第4課: レストラン (Resutoran)",
    description: "Ordering a delicious meal at a local restaurant.",
    level: "N5",
    color: "from-red-400 to-rose-500",
    coverImage: "/reading/ch1/step2.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "メニューを　見せてください。",
        translation: "Please show me the menu.",
        grammarPoint: "～てください (Please do...)",
        words: [
          { jp: "メニュー", romaji: "menyuu", en: "menu", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "見せて", romaji: "misete", en: "show", type: "verb-te form" },
          { jp: "ください", romaji: "kudasai", en: "please", type: "expression" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "カレーライスを　食べたいです。",
        translation: "I want to eat curry rice.",
        grammarPoint: "～たい (Want to...)",
        words: [
          { jp: "カレーライス", romaji: "kareeraisu", en: "curry rice", type: "noun" },
          { jp: "を", romaji: "wo", en: "object marker", type: "particle" },
          { jp: "食べたい", romaji: "tabetai", en: "want to eat", type: "verb-tai form" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "飲み物は　コーラに　します。",
        translation: "I'll have a cola for my drink.",
        grammarPoint: "～にします (Decide on...)",
        words: [
          { jp: "飲み物", romaji: "nomimono", en: "drink", type: "noun" },
          { jp: "は", romaji: "wa", en: "topic marker", type: "particle" },
          { jp: "コーラ", romaji: "koora", en: "cola", type: "noun" },
          { jp: "にします", romaji: "ni shimasu", en: "decide on", type: "expression" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "とても　おいしかったです。",
        translation: "It was very delicious.",
        grammarPoint: "Past tense of i-adjective (～かったです)",
        words: [
          { jp: "とても", romaji: "totemo", en: "very", type: "adverb" },
          { jp: "おいしかった", romaji: "oishikatta", en: "was delicious", type: "adjective-past" }
        ]
      }
    ],
    quiz: [
      {
        question: "何を　見たいですか。",
        meaning: "What does the person want to see?",
        options: ["テレビ", "メニュー", "新聞", "雑誌"],
        answer: 1
      },
      {
        question: "何を　食べたいですか。",
        meaning: "What does the person want to eat?",
        options: ["ラーメン", "寿司", "カレーライス", "うどん"],
        answer: 2
      },
      {
        question: "飲み物は　何ですか。",
        meaning: "What is the drink?",
        options: ["水", "お茶", "コーヒー", "コーラ"],
        answer: 3
      },
      {
        question: "味は　どうでしたか。",
        meaning: "How was the taste?",
        options: ["まずかったです", "おいしかったです", "高いです", "辛いです"],
        answer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Chapter 5: The Train Station",
    jpTitle: "第5課: 駅 (Eki)",
    description: "Navigating the train station and buying tickets.",
    level: "N5",
    color: "from-blue-500 to-cyan-400",
    coverImage: "/reading/ch1/step3.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "駅は　どこですか。",
        translation: "Where is the station?",
        grammarPoint: "～はどこですか (Where is...?)",
        words: [
          { jp: "駅", romaji: "eki", en: "station", type: "noun" },
          { jp: "は", romaji: "wa", en: "topic marker", type: "particle" },
          { jp: "どこ", romaji: "doko", en: "where", type: "pronoun" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "東京まで　行きたいです。",
        translation: "I want to go to Tokyo.",
        grammarPoint: "～に行きたい (Want to go...)",
        words: [
          { jp: "東京", romaji: "Tokyo", en: "Tokyo", type: "noun" },
          { jp: "まで", romaji: "made", en: "to/until", type: "particle" },
          { jp: "行きたい", romaji: "ikitai", en: "want to go", type: "verb-tai form" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "次の　電車は　何時ですか。",
        translation: "What time is the next train?",
        grammarPoint: "何時ですか (What time is it?)",
        words: [
          { jp: "次の", romaji: "tsugi no", en: "next", type: "noun" },
          { jp: "電車", romaji: "densha", en: "train", type: "noun" },
          { jp: "何時", romaji: "nanji", en: "what time", type: "question word" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "ホームで　待ちます。",
        translation: "I will wait on the platform.",
        grammarPoint: "～で (Location of action)",
        words: [
          { jp: "ホーム", romaji: "hoomu", en: "platform", type: "noun" },
          { jp: "で", romaji: "de", en: "at", type: "particle" },
          { jp: "待ちます", romaji: "machimasu", en: "wait", type: "verb" }
        ]
      }
    ],
    quiz: [
      {
        question: "何を　探していますか。",
        meaning: "What is the person looking for?",
        options: ["銀行", "駅", "学校", "病院"],
        answer: 1
      },
      {
        question: "どこまで　行きますか。",
        meaning: "How far (where) is the person going?",
        options: ["大阪", "京都", "東京", "北海道"],
        answer: 2
      },
      {
        question: "何について　聞きましたか。",
        meaning: "What did the person ask about?",
        options: ["バス", "タクシー", "電車", "飛行機"],
        answer: 2
      },
      {
        question: "どこで　待ちますか。",
        meaning: "Where will the person wait?",
        options: ["改札", "ホーム", "出口", "入口"],
        answer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Chapter 6: The Weekend",
    jpTitle: "第6課: 週末 (Shuumatsu)",
    description: "Relaxing and enjoying hobbies over the weekend.",
    level: "N5",
    color: "from-purple-400 to-pink-500",
    coverImage: "/reading/ch1/step4.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "週末は　何を　しましたか。",
        translation: "What did you do on the weekend?",
        grammarPoint: "Past tense question",
        words: [
          { jp: "週末", romaji: "shuumatsu", en: "weekend", type: "noun" },
          { jp: "何", romaji: "nani", en: "what", type: "pronoun" },
          { jp: "しました", romaji: "shimashita", en: "did", type: "verb-past" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "映画を　見たり、本を　読んだり　しました。",
        translation: "I watched movies, read books, etc.",
        grammarPoint: "～たり～たり (Doing things like...)",
        words: [
          { jp: "映画", romaji: "eiga", en: "movie", type: "noun" },
          { jp: "見たり", romaji: "mitari", en: "watch (and)", type: "verb-tari form" },
          { jp: "本", romaji: "hon", en: "book", type: "noun" },
          { jp: "読んだり", romaji: "yondari", en: "read (and)", type: "verb-tari form" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "テニスも　しました。",
        translation: "I also played tennis.",
        grammarPoint: "～も (Also)",
        words: [
          { jp: "テニス", romaji: "tenisu", en: "tennis", type: "noun" },
          { jp: "も", romaji: "mo", en: "also", type: "particle" },
          { jp: "しました", romaji: "shimashita", en: "did/played", type: "verb-past" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "とても　楽しかったです。",
        translation: "It was very fun.",
        grammarPoint: "i-adjective Past Tense",
        words: [
          { jp: "とても", romaji: "totemo", en: "very", type: "adverb" },
          { jp: "楽しかった", romaji: "tanoshikatta", en: "was fun", type: "adjective-past" }
        ]
      }
    ],
    quiz: [
      {
        question: "いつの話ですか。",
        meaning: "When is this story about?",
        options: ["平日", "週末", "夏休み", "冬休み"],
        answer: 1
      },
      {
        question: "何を　しましたか。",
        meaning: "What did they do?",
        options: ["勉強と仕事", "映画と読書", "掃除と洗濯", "買い物と料理"],
        answer: 1
      },
      {
        question: "スポーツを　しましたか。",
        meaning: "Did they play sports?",
        options: ["はい、サッカーをしました。", "はい、テニスをしました。", "いいえ、しませんでした。", "はい、野球をしました。"],
        answer: 1
      },
      {
        question: "週末は　どうでしたか。",
        meaning: "How was the weekend?",
        options: ["つまらなかったです", "忙しかったです", "楽しかったです", "暇でした"],
        answer: 2
      }
    ]
  },
  {
    id: 7,
    title: "Chapter 7: Meeting a Friend",
    jpTitle: "第7課: 友達 (Tomodachi)",
    description: "Making plans to meet a friend in the city.",
    level: "N5",
    color: "from-yellow-400 to-orange-500",
    coverImage: "/reading/ch1/step5.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "明日　暇ですか。",
        translation: "Are you free tomorrow?",
        grammarPoint: "暇ですか (Are you free?)",
        words: [
          { jp: "明日", romaji: "ashita", en: "tomorrow", type: "noun" },
          { jp: "暇", romaji: "hima", en: "free time", type: "na-adjective" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "一緒に　食事を　しませんか。",
        translation: "Won't you have a meal with me?",
        grammarPoint: "～ませんか (Invitation)",
        words: [
          { jp: "一緒に", romaji: "issho ni", en: "together", type: "adverb" },
          { jp: "食事", romaji: "shokuji", en: "meal", type: "noun" },
          { jp: "しませんか", romaji: "shimasen ka", en: "won't you do?", type: "verb-neg-question" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "いいですね。行きましょう。",
        translation: "That sounds good. Let's go.",
        grammarPoint: "～ましょう (Let's...)",
        words: [
          { jp: "いいですね", romaji: "ii desu ne", en: "that's good", type: "expression" },
          { jp: "行きましょう", romaji: "ikimashou", en: "let's go", type: "verb-mashou" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "何時に　会いますか。",
        translation: "What time shall we meet?",
        grammarPoint: "会います (Meet)",
        words: [
          { jp: "何時", romaji: "nanji", en: "what time", type: "question word" },
          { jp: "に", romaji: "ni", en: "at", type: "particle" },
          { jp: "会います", romaji: "aimasu", en: "meet", type: "verb" }
        ]
      }
    ],
    quiz: [
      {
        question: "いつ　会いますか。",
        meaning: "When will they meet?",
        options: ["今日", "明日", "あさって", "週末"],
        answer: 1
      },
      {
        question: "何を　しますか。",
        meaning: "What will they do?",
        options: ["勉強", "スポーツ", "食事", "旅行"],
        answer: 2
      },
      {
        question: "「行きましょう」は　どういう　意味ですか。",
        meaning: "What does 'ikimashou' mean?",
        options: ["Please go", "Don't go", "Let's go", "I am going"],
        answer: 2
      },
      {
        question: "二人は　何を　決めますか。",
        meaning: "What will the two decide?",
        options: ["場所", "時間", "服", "天気"],
        answer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Chapter 8: At the Doctor",
    jpTitle: "第8課: 病院 (Byouin)",
    description: "Describing symptoms and getting medicine.",
    level: "N5",
    color: "from-teal-400 to-green-500",
    coverImage: "/reading/ch1/step1.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "どう　しましたか。",
        translation: "What's wrong?",
        grammarPoint: "どうしましたか (What happened?)",
        words: [
          { jp: "どう", romaji: "dou", en: "how", type: "adverb" },
          { jp: "しました", romaji: "shimashita", en: "did/happened", type: "verb-past" },
          { jp: "か", romaji: "ka", en: "question marker", type: "particle" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "頭が　痛いです。",
        translation: "My head hurts.",
        grammarPoint: "～が痛いです (Using 'ga' for body parts)",
        words: [
          { jp: "頭", romaji: "atama", en: "head", type: "noun" },
          { jp: "が", romaji: "ga", en: "subject marker", type: "particle" },
          { jp: "痛い", romaji: "itai", en: "painful/hurts", type: "i-adjective" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "熱も　あります。",
        translation: "I also have a fever.",
        grammarPoint: "～があります (Have...)",
        words: [
          { jp: "熱", romaji: "netsu", en: "fever", type: "noun" },
          { jp: "も", romaji: "mo", en: "also", type: "particle" },
          { jp: "あります", romaji: "arimasu", en: "have/exist", type: "verb" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "この薬を　飲んでください。",
        translation: "Please take this medicine.",
        grammarPoint: "～てください (Please do...)",
        words: [
          { jp: "この", romaji: "kono", en: "this", type: "demonstrative" },
          { jp: "薬", romaji: "kusuri", en: "medicine", type: "noun" },
          { jp: "飲んで", romaji: "nonde", en: "drink/take", type: "verb-te form" },
          { jp: "ください", romaji: "kudasai", en: "please", type: "expression" }
        ]
      }
    ],
    quiz: [
      {
        question: "どこが　痛いですか。",
        meaning: "Where does it hurt?",
        options: ["お腹", "頭", "足", "手"],
        answer: 1
      },
      {
        question: "何が　ありますか。",
        meaning: "What does the person have?",
        options: ["時間", "お金", "熱", "約束"],
        answer: 2
      },
      {
        question: "何を　飲みますか。",
        meaning: "What will the person take?",
        options: ["水", "ジュース", "コーヒー", "薬"],
        answer: 3
      },
      {
        question: "医者は　何と　言いましたか。",
        meaning: "What did the doctor say?",
        options: ["帰ってください", "寝てください", "飲んでください", "食べてください"],
        answer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Chapter 9: My Family",
    jpTitle: "第9課: 家族 (Kazoku)",
    description: "Talking about family members and their characteristics.",
    level: "N5",
    color: "from-pink-400 to-rose-400",
    coverImage: "/reading/ch1/step2.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "私の　家族は　四人です。",
        translation: "My family has four members.",
        grammarPoint: "Counter for people (～人)",
        words: [
          { jp: "家族", romaji: "kazoku", en: "family", type: "noun" },
          { jp: "四人", romaji: "yonin", en: "four people", type: "noun" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "父は　銀行で　働いています。",
        translation: "My father works at a bank.",
        grammarPoint: "～ています (State/Action)",
        words: [
          { jp: "父", romaji: "chichi", en: "my father", type: "noun" },
          { jp: "銀行", romaji: "ginkou", en: "bank", type: "noun" },
          { jp: "働いて", romaji: "hataraite", en: "working", type: "verb-te form" },
          { jp: "います", romaji: "imasu", en: "is doing", type: "verb-auxiliary" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "母は　料理が　上手です。",
        translation: "My mother is good at cooking.",
        grammarPoint: "～が上手です (Good at...)",
        words: [
          { jp: "母", romaji: "haha", en: "my mother", type: "noun" },
          { jp: "料理", romaji: "ryouri", en: "cooking", type: "noun" },
          { jp: "上手", romaji: "jouzu", en: "skilled/good at", type: "na-adjective" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "兄は　背が　高いです。",
        translation: "My older brother is tall.",
        grammarPoint: "背が高い (Tall)",
        words: [
          { jp: "兄", romaji: "ani", en: "older brother", type: "noun" },
          { jp: "背", romaji: "se", en: "height/back", type: "noun" },
          { jp: "高い", romaji: "takai", en: "high/tall", type: "i-adjective" }
        ]
      }
    ],
    quiz: [
      {
        question: "家族は　何人ですか。",
        meaning: "How many people are in the family?",
        options: ["三人", "四人", "五人", "六人"],
        answer: 1
      },
      {
        question: "お父さんの　仕事は　何ですか。",
        meaning: "What is the father's job?",
        options: ["先生", "医者", "銀行員", "会社員"],
        answer: 2
      },
      {
        question: "お母さんは　何が　上手ですか。",
        meaning: "What is the mother good at?",
        options: ["歌", "テニス", "料理", "英語"],
        answer: 2
      },
      {
        question: "お兄さんは　どんな　人ですか。",
        meaning: "What kind of person is the brother?",
        options: ["やさしいです", "静かです", "背が高いです", "面白いです"],
        answer: 2
      }
    ]
  },
  {
    id: 10,
    title: "Chapter 10: Travel Plans",
    jpTitle: "第10課: 旅行 (Ryokou)",
    description: "Discussing plans for an upcoming trip.",
    level: "N5",
    color: "from-sky-400 to-indigo-500",
    coverImage: "/reading/ch1/step3.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "夏休みに　北海道へ　行くつもりです。",
        translation: "I intend to go to Hokkaido during the summer vacation.",
        grammarPoint: "～つもりです (Intend to)",
        words: [
          { jp: "夏休み", romaji: "natsuyasumi", en: "summer vacation", type: "noun" },
          { jp: "北海道", romaji: "Hokkaido", en: "Hokkaido", type: "noun" },
          { jp: "つもり", romaji: "tsumori", en: "intention", type: "noun" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "おいしい　ラーメンを　食べたいと　思います。",
        translation: "I think I want to eat delicious ramen.",
        grammarPoint: "～と思います (I think...)",
        words: [
          { jp: "おいしい", romaji: "oishii", en: "delicious", type: "i-adjective" },
          { jp: "ラーメン", romaji: "raamen", en: "ramen", type: "noun" },
          { jp: "思います", romaji: "omoimasu", en: "think", type: "verb" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "飛行機で　行きます。",
        translation: "I will go by airplane.",
        grammarPoint: "～で (Means of transport)",
        words: [
          { jp: "飛行機", romaji: "hikouki", en: "airplane", type: "noun" },
          { jp: "行きます", romaji: "ikimasu", en: "go", type: "verb" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "お土産を　たくさん　買います。",
        translation: "I will buy lots of souvenirs.",
        grammarPoint: "たくさん (Many/A lot)",
        words: [
          { jp: "お土産", romaji: "omiyage", en: "souvenir", type: "noun" },
          { jp: "たくさん", romaji: "takusan", en: "many/a lot", type: "adverb" },
          { jp: "買います", romaji: "kaimasu", en: "buy", type: "verb" }
        ]
      }
    ],
    quiz: [
      {
        question: "いつ　旅行に　行きますか。",
        meaning: "When is the person going on a trip?",
        options: ["春休み", "夏休み", "冬休み", "ゴールデンウィーク"],
        answer: 1
      },
      {
        question: "どこへ　行きますか。",
        meaning: "Where is the person going?",
        options: ["沖縄", "東京", "北海道", "京都"],
        answer: 2
      },
      {
        question: "どうやって　行きますか。",
        meaning: "How will the person go?",
        options: ["新幹線", "バス", "車", "飛行機"],
        answer: 3
      },
      {
        question: "何を　買いますか。",
        meaning: "What will the person buy?",
        options: ["ラーメン", "服", "お土産", "カメラ"],
        answer: 2
      }
    ]
  },
  {
    id: 11,
    title: "Chapter 11: Daily Chores",
    jpTitle: "第11課: 家事 (Kaji)",
    description: "Talking about cleaning and housework.",
    level: "N5",
    color: "from-orange-300 to-amber-500",
    coverImage: "/reading/ch1/step4.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "音楽を　聞きながら　掃除を　します。",
        translation: "I clean while listening to music.",
        grammarPoint: "～ながら (While doing...)",
        words: [
          { jp: "音楽", romaji: "ongaku", en: "music", type: "noun" },
          { jp: "聞き", romaji: "kiki", en: "listen", type: "verb-stem" },
          { jp: "ながら", romaji: "nagara", en: "while", type: "particle" },
          { jp: "掃除", romaji: "souji", en: "cleaning", type: "noun" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "掃除が　終わってから、洗濯を　します。",
        translation: "After finishing cleaning, I do the laundry.",
        grammarPoint: "～てから (After doing...)",
        words: [
          { jp: "終わって", romaji: "owatte", en: "finish", type: "verb-te form" },
          { jp: "から", romaji: "kara", en: "after", type: "particle" },
          { jp: "洗濯", romaji: "sentaku", en: "laundry", type: "noun" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "部屋が　きれいに　なりました。",
        translation: "The room became clean.",
        grammarPoint: "～になります (Become...)",
        words: [
          { jp: "部屋", romaji: "heya", en: "room", type: "noun" },
          { jp: "きれい", romaji: "kirei", en: "clean/beautiful", type: "na-adjective" },
          { jp: "なりました", romaji: "narimashita", en: "became", type: "verb-past" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "でも、とても　疲れました。",
        translation: "But, I got very tired.",
        grammarPoint: "でも (But)",
        words: [
          { jp: "でも", romaji: "demo", en: "but", type: "conjunction" },
          { jp: "疲れました", romaji: "tsukaremashita", en: "got tired", type: "verb-past" }
        ]
      }
    ],
    quiz: [
      {
        question: "何を　しながら　掃除を　しますか。",
        meaning: "What does the person do while cleaning?",
        options: ["テレビを見る", "音楽を聞く", "ご飯を食べる", "電話をする"],
        answer: 1
      },
      {
        question: "掃除の　あとで　何を　しますか。",
        meaning: "What does the person do after cleaning?",
        options: ["料理", "買い物", "洗濯", "勉強"],
        answer: 2
      },
      {
        question: "部屋は　どう　なりましたか。",
        meaning: "How did the room become?",
        options: ["汚くなりました", "広くなりました", "静かになりました", "きれいになりました"],
        answer: 3
      },
      {
        question: "どうして　疲れましたか。",
        meaning: "Why did the person get tired?",
        options: ["運動したから", "仕事をしたから", "家事をしたから", "勉強したから"],
        answer: 2
      }
    ]
  },
  {
    id: 12,
    title: "Chapter 12: The Festival",
    jpTitle: "第12課: お祭り (Omatsuri)",
    description: "Experiencing a traditional Japanese summer festival.",
    level: "N5",
    color: "from-red-500 to-amber-500",
    coverImage: "/reading/ch1/step5.jpg", // Placeholder
    steps: [
      {
        id: 1,
        image: "/reading/ch1/step1.jpg", // Placeholder
        text: "お祭りに　行ったことが　ありますか。",
        translation: "Have you ever been to a festival?",
        grammarPoint: "～たことがあります (Have done...)",
        words: [
          { jp: "お祭り", romaji: "omatsuri", en: "festival", type: "noun" },
          { jp: "行った", romaji: "itta", en: "went", type: "verb-ta form" },
          { jp: "こと", romaji: "koto", en: "experience/thing", type: "noun" }
        ]
      },
      {
        id: 2,
        image: "/reading/ch1/step2.jpg", // Placeholder
        text: "人が　たくさん　いて、賑やかです。",
        translation: "There are many people, and it is lively.",
        grammarPoint: "～て (And [joining sentences])",
        words: [
          { jp: "人", romaji: "hito", en: "people", type: "noun" },
          { jp: "いて", romaji: "ite", en: "are/exist", type: "verb-te form" },
          { jp: "賑やか", romaji: "nigiyaka", en: "lively/bustling", type: "na-adjective" }
        ]
      },
      {
        id: 3,
        image: "/reading/ch1/step3.jpg", // Placeholder
        text: "たこ焼きが　おいしそうです。",
        translation: "The takoyaki looks delicious.",
        grammarPoint: "～そうです (Looks like...)",
        words: [
          { jp: "たこ焼き", romaji: "takoyaki", en: "octopus balls", type: "noun" },
          { jp: "おいしそう", romaji: "oishisou", en: "looks delicious", type: "na-adjective-stem + sou" }
        ]
      },
      {
        id: 4,
        image: "/reading/ch1/step4.jpg", // Placeholder
        text: "また　来年も　行きたいです。",
        translation: "I want to go again next year.",
        grammarPoint: "また (Again)",
        words: [
          { jp: "また", romaji: "mata", en: "again", type: "adverb" },
          { jp: "来年", romaji: "rainen", en: "next year", type: "noun" },
          { jp: "も", romaji: "mo", en: "also/too", type: "particle" }
        ]
      }
    ],
    quiz: [
      {
        question: "どこへ　行きましたか。",
        meaning: "Where did the person go?",
        options: ["海", "山", "お祭り", "プール"],
        answer: 2
      },
      {
        question: "お祭りは　どうでしたか。",
        meaning: "How was the festival?",
        options: ["静かでした", "寂しかったです", "賑やかでした", "暗かったです"],
        answer: 2
      },
      {
        question: "何が　おいしそうでしたか。",
        meaning: "What looked delicious?",
        options: ["ケーキ", "たこ焼き", "寿司", "焼肉"],
        answer: 1
      },
      {
        question: "いつ　また　行きたいですか。",
        meaning: "When does the person want to go again?",
        options: ["明日", "来週", "来月", "来年"],
        answer: 3
      }
    ]
  }
];
