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
  }
];
