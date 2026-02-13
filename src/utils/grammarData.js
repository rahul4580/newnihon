// Minna no Nihongo N5 - Chapters 1 to 25 Complete Dataset
export const GRAMMAR_DATA = [
  {
    chapter: 1,
    level: "N5",
    title: "Introductions",
    desc: "N1 wa N2 desu / N mo / N no",
    patterns: [
      { id: "1.1", label: "～は～です", meaning: "A is B", explanation: "Basic sentence structure to identify the topic.", examples: [{ jp: "わたしは学生です。", romaji: "Watashi wa gakusei desu.", en: "I am a student." }, { jp: "サントスさんはブラジル人です。", romaji: "Santosu-san wa Burajiru-jin desu.", en: "Mr. Santos is Brazilian." }] },
      { id: "1.2", label: "～は～じゃありません", meaning: "A is not B", explanation: "The negative polite form of 'desu'.", examples: [{ jp: "わたしは先生じゃありません。", romaji: "Watashi wa sensei ja arimasen.", en: "I am not a teacher." }, { jp: "あの人は学生じゃありません。", romaji: "Ano hito wa gakusei ja arimasen.", en: "That person is not a student." }] },
      { id: "1.3", label: "～は～ですか", meaning: "Is A B?", explanation: "Particle 'ka' at the end makes a question.", examples: [{ jp: "あなたは日本人ですか。", romaji: "Anata wa Nihonjin desu ka.", en: "Are you Japanese?" }] },
      { id: "1.4", label: "N も", meaning: "Also / Too", explanation: "Replaces 'wa' when the topic is also the same.", examples: [{ jp: "わたしも学生です。", romaji: "Watashi mo gakusei desu.", en: "I am also a student." }] },
      { id: "1.5", label: "N の N", meaning: "Possession / Belonging", explanation: "Connects two nouns, usually showing possession or category.", examples: [{ jp: "田中さんの本です。", romaji: "Tanaka-san no hon desu.", en: "It's Mr. Tanaka's book." }] }
    ],
    quiz: [
      { q: "わたし ___ ラフル です。", ans: "は", options: ["は", "の", "も", "を"] },
      { q: "あなた ___ インドじん ですか。", ans: "は", options: ["に", "は", "で", "を"] },
      { q: "ミラーさん は いしゃ じゃ ___。", ans: "ありません", options: ["あります", "ありません", "そこ", "どこ"] },
      { q: "A: わたしは がくせいです。 B: わたし ___ がくせいです。", ans: "も", options: ["は", "も", "の", "が"] },
      { q: "あのかた は ___ ですか。", ans: "どなた", options: ["どこ", "どなた", "どれ", "だれ"] },
      { q: "グプタさん は ___ です。", ans: "インドじん", options: ["インドご", "インドじん", "インド", "インドから"] },
      { q: "失礼ですが、お名前 ___？", ans: "は", options: ["が", "を", "は", "も"] },
      { q: "はじめまして。___ です。", ans: "わたし", options: ["わたし", "あなた", "かれ", "かのじょ"] },
      { q: "ミラーさん は IMC ___ 社員 です。", ans: "の", options: ["の", "に", "を", "は"] },
      { q: "あのかた は ___ さい ですか。", ans: "なん", options: ["なん", "どこ", "だれ", "いくつ"] }
    ]
  },
  {
    chapter: 2,
    level: "N5",
    title: "Things",
    desc: "Kore / Sore / Are / Kono / Sono",
    patterns: [
      { id: "2.1", label: "これ / それ / あれ", meaning: "This / That / That Over There", explanation: "Demonstrative pronouns used alone.", examples: [{ jp: "これは辞書です。", romaji: "Kore wa jisho desu.", en: "This is a dictionary." }, { jp: "それは何ですか。", romaji: "Sore wa nan desu ka.", en: "What is that?" }] },
      { id: "2.2", label: "この / その / あの + N", meaning: "This / That / That (with Noun)", explanation: "Demonstrative adjectives that MUST be followed by a noun.", examples: [{ jp: "この本はわたしのです。", romaji: "Kono hon wa watashi no desu.", en: "This book is mine." }] },
      { id: "2.3", label: "ここ / そこ / あそこ", meaning: "Here / There / Over There", explanation: "Demonstrative pronouns for locations.", examples: [{ jp: "ここは教室です。", romaji: "Koko wa kyoushitsu desu.", en: "Here is the classroom." }] },
      { id: "2.4", label: "どこ", meaning: "Where", explanation: "Question word for location.", examples: [{ jp: "トイレはどこですか。", romaji: "Toire wa doko desu ka.", en: "Where is the restroom?" }] }
    ],
    quiz: [
      { q: "___ は わたしの じしょです。", ans: "これ", options: ["これ", "この", "ここ", "こちら"] },
      { q: "それ ___ ざっし ですか。", ans: "は", options: ["の", "を", "は", "も"] },
      { q: "この かぎ は ___ の ですか。", ans: "だれ", options: ["どこ", "だれ", "いつ", "なに"] },
      { q: "あれ は わたし ___ かばん。", ans: "の", options: ["は", "に", "の", "を"] },
      { q: "これ は 英語 ___ 新聞 です。", ans: "の", options: ["は", "の", "を", "も"] },
      { q: "___ カメラ は わたしのです。", ans: "この", options: ["これ", "この", "ここ", "あそこ"] },
      { q: "それは ___ ですか。", ans: "なん", options: ["なに", "なん", "どこ", "どれ"] },
      { q: "いいえ、そう ___ ありません。", ans: "じゃ", options: ["は", "に", "じゃ", "を"] },
      { q: "「はい、___。」 ", ans: "そうです", options: ["そうです", "ちがいます", "あります", "います"] },
      { q: "この ノート は わたし ___ です。", ans: "の", options: ["は", "の", "を", "に"] }
    ]
  },
  {
    chapter: 3,
    level: "N5",
    title: "Existence",
    desc: "Imasu / Arimasu / Ni",
    patterns: [
      { id: "3.1", label: "～にいます / あります", meaning: "Existence (Animate / Inanimate)", explanation: "'Imasu' for living things, 'Arimasu' for non-living things.", examples: [{ jp: "猫が机の上にいます。", romaji: "Neko ga tsukue no ue ni imasu.", en: "The cat is on the desk." }, { jp: "あそこにコンビニがあります。", romaji: "Asoko ni konbini ga arimasu.", en: "There is a convenience store over there." }] },
      { id: "3.2", label: "～に", meaning: "Location of Existence", explanation: "Particle 'ni' marks the location.", examples: [{ jp: "教室に学生がいます。", romaji: "Kyoushitsu ni gakusei ga imasu.", en: "There are students in the classroom." }] },
      { id: "3.3", label: "～から～まで", meaning: "From... to...", explanation: "Indicates a range of time or space.", examples: [{ jp: "９時から５時まで働きます。", romaji: "Kuji kara goji made hatarakimasu.", en: "I work from 9 to 5." }] }
    ],
    quiz: [
      { q: "あそこに 学生 ___ います。", ans: "が", options: ["が", "に", "を", "は"] },
      { q: "机の ___ に 電話が あります。", ans: "うえ", options: ["うえ", "なか", "まえ", "うしろ"] },
      { q: "あそこ ___ じむしょ です。", ans: "は", options: ["に", "は", "を", "へ"] },
      { q: "公園に だれ ___ いますか。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "冷蔵庫 ___ なかに ビールが あります。", ans: "の", options: ["の", "に", "で", "を"] },
      { q: "猫は どこ ___ いますか。", ans: "に", options: ["に", "で", "を", "へ"] },
      { q: "犬 ___ 猫が います。", ans: "と", options: ["と", "も", "は", "に"] },
      { q: "箱の なか ___ 何も ありません。", ans: "には", options: ["に", "には", "を", "で"] },
      { q: "木 ___ 下に 子供が います。", ans: "の", options: ["の", "に", "は", "を"] },
      { q: "そこに 王さん ___ います。", ans: "も", options: ["は", "も", "を", "に"] }
    ]
  },
  {
    chapter: 4,
    level: "N5",
    title: "Verbs (Polite)",
    desc: "Masu / Masen / Mashita",
    patterns: [
      { id: "4.1", label: "～ます / ～ません", meaning: "Polite Verb Form", explanation: "Standard polite form for present/future tense.", examples: [{ jp: "毎日学校へ行きます。", romaji: "Mainichi gakkou e ikimasu.", en: "I go to school every day." }, { jp: "肉を食べません。", romaji: "Niku o tabemasen.", en: "I don't eat meat." }] },
      { id: "4.2", label: "～ました / ～ませんでした", meaning: "Past Tense Polite", explanation: "Standard polite form for past tense.", examples: [{ jp: "きのう映画を見ました。", romaji: "Kinou eiga o mimashita.", en: "I watched a movie yesterday." }] },
      { id: "4.3", label: "何時 / 何曜日", meaning: "What time / What day", explanation: "Asking questions about time.", examples: [{ jp: "今何時ですか。", romaji: "Ima nanji desu ka.", en: "What time is it now?" }] }
    ],
    quiz: [
      { q: "きのうは 暑 ___ です。", ans: "かった", options: ["い", "かった", "だ", "かったい"] },
      { q: "京都は 静か ___ です。", ans: "でした", options: ["た", "だ", "でした", "かった"] },
      { q: "昨日 べんきょう ___。", ans: "しました", options: ["しました", "します", "する", "して"] },
      { q: "今朝 朝ごはん を ___ か。", ans: "食べました", options: ["食べました", "食べます", "食べて", "食べ"] },
      { q: "会議は 何時 ___ ですか。", ans: "から", options: ["から", "まで", "に", "へ"] },
      { q: "毎朝 何時 ___ 起きますか。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "きのうの パーティーは ___ ですか。", ans: "どう", options: ["どう", "どんな", "どれ", "なに"] },
      { q: "テストは あまり ___ ありませんでした。", ans: "むずかしく", options: ["むずかしい", "むずかしく", "むずかな", "むずか"] },
      { q: "いいえ、行き ___。", ans: "ませんでした", options: ["ません", "ませんでした", "ます", "でした"] },
      { q: "きのうは ___ ですか。", ans: "ひま", options: ["ひま", "ひまい", "ひまな", "ひまに"] }
    ]
  },
  {
    chapter: 5,
    level: "N5",
    title: "Movement",
    desc: "E ikimasu / De / To",
    patterns: [
      { id: "5.1", label: "～へ行きます / 来ます / 帰ります", meaning: "Go / Come / Return", explanation: "Verbs of movement use particle 'e' (written as 'he').", examples: [{ jp: "日本へ行きます。", romaji: "Nihon e ikimasu.", en: "I will go to Japan." }, { jp: "うちへ帰ります。", romaji: "Uchi e kaerimasu.", en: "I will go home." }] },
      { id: "5.2", label: "～で", meaning: "By means of", explanation: "Indicates the method of transport or tool.", examples: [{ jp: "電車で会社へ行きます。", romaji: "Densha de kaisha e ikimasu.", en: "I go to work by train." }] },
      { id: "5.3", label: "一緒に", meaning: "Together", explanation: "Adverb meaning 'together'.", examples: [{ jp: "一緒に京都へ行きませんか。", romaji: "Issho ni Kyouto e ikimasen ka.", en: "Won't you go to Kyoto together?" }] }
    ],
    quiz: [
      { q: "どこ ___ 買いましたか。デパートです。", ans: "で", options: ["で", "に", "を", "へ"] },
      { q: "いっしょに 行き ___。", ans: "ませんか", options: ["ますか", "ませんか", "ました", "する"] },
      { q: "電車 ___ 会社へ行きます。", ans: "で", options: ["に", "を", "は", "で"] },
      { q: "あした どこ ___ 行きますか。", ans: "へ", options: ["に", "を", "で", "へ"] },
      { q: "ロビー ___ 待ちましょう。", ans: "で", options: ["で", "に", "へ", "を"] },
      { q: "バス ___乗ります。", ans: "に", options: ["を", "は", "に", "で"] },
      { q: "歩いて 帰り ___。", ans: "ます", options: ["ます", "ましょう", "ました", "して"] },
      { q: "だれ ___ 行きますか。 友達と行きます。", ans: "と", options: ["と", "に", "を", "は"] },
      { q: "学校 ___ 来ます。", ans: "へ", options: ["を", "に", "へ", "が"] }
    ]
  },
  {
    chapter: 6,
    level: "N5",
    title: "Actions (Object)",
    desc: "Wo / Masu form",
    patterns: [
      { id: "6.1", label: "～を", meaning: "Object Marker", explanation: "Denotes the direct object of a verb.", examples: [{ jp: "コーヒーを飲みます。", romaji: "Kouhii o nomimasu.", en: "I drink coffee." }, { jp: "本を読みます。", romaji: "Hon o yomimasu.", en: "I read a book." }] },
      { id: "6.2", label: "Masu Form", meaning: "Polite Verb Ending", explanation: "Standard form for verbs in polite speech.", examples: [{ jp: "明日、テニスをします。", romaji: "Ashita, tenisu o shimasu.", en: "I will play tennis tomorrow." }] }
    ],
    quiz: [
      { q: "おさけ ___ 飲みますか。", ans: "を", options: ["を", "は", "に", "が"] },
      { q: "パン ___ 食べます。", ans: "を", options: ["を", "は", "に", "で"] },
      { q: "テニス ___ しましょう。", ans: "を", options: ["に", "を", "は", "で"] },
      { q: "あした なに ___ しますか。", ans: "を", options: ["に", "を", "で", "が"] },
      { q: "手紙 ___ 書きます。", ans: "を", options: ["を", "に", "へ", "で"] },
      { q: "写真を ___。", ans: "とります", options: ["とります", "かきます", "します", "ききます"] },
      { q: "たばこ ___ すいますか。", ans: "を", options: ["を", "に", "は", "が"] },
      { q: "音楽 ___ 聞きます。", ans: "を", options: ["を", "に", "は", "が"] },
      { q: "宿題 ___ します。", ans: "を", options: ["を", "に", "は", "が"] },
      { q: "水 ___ 飲みます。", ans: "を", options: ["を", "に", "は", "が"] }
    ]
  },
  {
    chapter: 7,
    level: "N5",
    title: "Requests & Permission",
    desc: "Te-form / Kudasai / Te mo ii",
    patterns: [
      { id: "7.1", label: "～て form", meaning: "Te-form", explanation: "Used for connecting sentences, making requests, etc.", examples: [{ jp: "食べて", romaji: "Tabete", en: "Eat (and...)" }] },
      { id: "7.2", label: "～てください", meaning: "Please do...", explanation: "Polite request.", examples: [{ jp: "ドアを開けてください。", romaji: "Doa o akete kudasai.", en: "Please open the door." }] },
      { id: "7.3", label: "～てもいいです", meaning: "Permission", explanation: "Asking for or granting permission.", examples: [{ jp: "ここで写真を撮ってもいいですか。", romaji: "Koko de shashin o tottemo ii desu ka.", en: "May I take a photo here?" }] }
    ],
    quiz: [
      { q: "ここ ___ 名前を 書いてください。", ans: "に", options: ["に", "を", "で", "へ"] },
      { q: "タクシーを ___ ください。", ans: "よんで", options: ["よんで", "よび", "よぶ", "よまし"] },
      { q: "しおを ___ ください。", ans: "とって", options: ["とって", "とり", "とる", "とら"] },
      { q: "ゆっくり ___ ください。", ans: "はなして", options: ["はなして", "はなし", "はなす", "はなせ"] },
      { q: "ここで タバコを ___ もいいですか。", ans: "すって", options: ["すって", "すい", "すう", "すわ"] },
      { q: "ドアを ___ ください。", ans: "あけて", options: ["あけて", "あけ", "あける", "あけな"] },
      { q: "荷物を ___ ましょうか。", ans: "もち", options: ["もち", "もって", "もつ", "もた"] },
      { q: "コピーを ___ ください。", ans: "して", options: ["して", "し", "する", "しな"] },
      { q: "ボールペン ___ 書いてください。", ans: "で", options: ["で", "を", "に", "へ"] },
      { q: "ちょっと ___ ください。", ans: "まって", options: ["まって", "まち", "まつ", "また"] }
    ]
  },
  {
    chapter: 8,
    level: "N5",
    title: "Progressive & Sequence",
    desc: "Te-iru / Te-kara",
    patterns: [
      { id: "8.1", label: "～ている", meaning: "Progressive / State", explanation: "Ongoing action or resulting state.", examples: [{ jp: "今、本を読んでいます。", romaji: "Ima, hon o yonde imasu.", en: "I am reading a book now." }] },
      { id: "8.2", label: "～てから", meaning: "After doing...", explanation: "Sequence of actions.", examples: [{ jp: "ご飯を食べてから勉強します。", romaji: "Gohan o tabete kara benkyou shimasu.", en: "I will study after eating." }] }
    ],
    quiz: [
      { q: "ジョギングを ___ から シャワーをあびます。", ans: "して", options: ["して", "し", "する", "した"] },
      { q: "今、雨が ___ います。", ans: "ふって", options: ["ふって", "ふり", "ふる", "ふら"] },
      { q: "ミラーさんは 今 電話を ___ います。", ans: "かけて", options: ["かけて", "かけ", "かける", "かかり"] },
      { q: "大学へ ___ から べんきょうを はじめます。", ans: "行って", options: ["行って", "行き", "行く", "行か"] },
      { q: "結婚 ___ いますか。", ans: "して", options: ["し", "して", "する", "しな"] },
      { q: "使い方を ___ くださいませんか。", ans: "教え", options: ["教え", "教えて", "教える", "教えな"] },
      { q: "仕事が ___ から、飲みに行きましょう。", ans: "終わって", options: ["終わり", "終わって", "終わる", "終わった"] },
      { q: "歯を ___ から、寝ます。", ans: "みがいて", options: ["みがいて", "みがき", "みがく", "みがいた"] },
      { q: "どこに ___ いますか。", ans: "すんで", options: ["すんで", "すむ", "すみ", "すんだ"] },
      { q: "名前を ___ から 入ってください。", ans: "書いて", options: ["書き", "書いて", "書く", "書か"] }
    ]
  },
  {
    chapter: 9,
    level: "N5",
    title: "Desire & Simultaneous",
    desc: "Tai / Nagara",
    patterns: [
      { id: "9.1", label: "～たいです", meaning: "Want to...", explanation: "Expressing desire to do an action.", examples: [{ jp: "日本へ行きたいです。", romaji: "Nihon e ikitai desu.", en: "I want to go to Japan." }] },
      { id: "9.2", label: "～ながら", meaning: "While doing...", explanation: "Simultaneous actions.", examples: [{ jp: "音楽を聞きながら勉強します。", romaji: "Ongaku o kikinagara benkyou shimasu.", en: "I study while listening to music." }] }
    ],
    quiz: [
      { q: "わたしは 新しい 車 ___ ほしいです。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "のどが かわきました. 水 ___ 飲みたいです。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "音楽を ___ ながら 食事します。", ans: "聞き", options: ["聞き", "聞く", "聞いて", "聞か"] },
      { q: "テレビを ___ ながら 本を読みます。", ans: "見", options: ["見", "見る", "見て", "見ない"] },
      { q: "おなかが すきました. なに ___ 食べたいです。", ans: "か", options: ["か", "も", "を", "に"] },
      { q: "今日は どこへ ___ 行きたくないです。", ans: "も", options: ["に", "を", "も", "は"] },
      { q: "日本へ 料理を ___ 行きます。", ans: "食べに", options: ["食べる", "食べに", "食べて", "食べ"] },
      { q: "歩き ___ 話しましょう。", ans: "ながら", options: ["ながら", "たい", "て", "ない"] },
      { q: "何も ___ ないです。", ans: "したく", options: ["したく", "したい", "して", "する"] },
      { q: "フランスへ 料理を ___ に行きます。", ans: "習い", options: ["習い", "習う", "習って", "習わ"] }
    ]
  },
  {
    chapter: 10,
    level: "N5",
    title: "Time & Nominalization",
    desc: "Mae ni / No ga",
    patterns: [
      { id: "10.1", label: "～前に", meaning: "Before doing...", explanation: "Action happening before another.", examples: [{ jp: "寝る前に歯を磨きます。", romaji: "Neru mae ni ha o migakimasu.", en: "I brush my teeth before sleeping." }] },
      { id: "10.2", label: "～のが", meaning: "Nominalizer", explanation: "Turning a verb phrase into a noun usage (likes/skills).", examples: [{ jp: "日本語を話すのが好きです。", romaji: "Nihongo o hanasu no ga suki desu.", en: "I like speaking Japanese." }] }
    ],
    quiz: [
      { q: "寝る ___ 歯をみがきます。", ans: "まえに", options: ["まえに", "あとで", "ときに", "から"] },
      { q: "日本へ ___ まえに、日本語を勉強しました。", ans: "来る", options: ["来る", "来", "来て", "来た"] },
      { q: "テニスを ___ のが好きです。", ans: "する", options: ["する", "し", "して", "した"] },
      { q: "絵を ___ のが上手です。", ans: "かく", options: ["かく", "かき", "かいて", "かいた"] },
      { q: "食事の ___ 手を洗います。", ans: "まえに", options: ["まえに", "あとで", "とき", "から"] },
      { q: "漢字を ___ のは難しいです。", ans: "読む", options: ["読む", "読み", "読んで", "読んだ"] },
      { q: "泳ぐ ___ ができますか。", ans: "こと", options: ["こと", "もの", "の", "が"] },
      { q: "旅行の ___ 荷物を準備します。", ans: "まえに", options: ["まえに", "あとで", "ときに", "から"] },
      { q: "歌を ___ のが好きです。", ans: "歌う", options: ["歌う", "歌i", "歌って", "歌った"] },
      { q: "走る ___ は速いです。", ans: "の", options: ["の", "こと", "もの", "が"] }
    ]
  },
  {
    chapter: 11,
    level: "N5",
    title: "Listing Actions",
    desc: "Tari Tari",
    patterns: [
      { id: "11.1", label: "～たり～たりします", meaning: "Do such things as...", explanation: "Listing representative actions.", examples: [{ jp: "休みの日は本を読んだり、映画を見たりします。", romaji: "Yasumi no hi wa hon o yondari, eiga o mitari shimasu.", en: "On holidays, I read books, watch movies, etc." }] },
      { id: "11.2", label: "～たり～たりして", meaning: "Doing A, B, etc.", explanation: "Listing actions in a connecting form.", examples: [{ jp: "歌ったり踊ったりして楽しかったです。", romaji: "Utattari odottari shite tanoshikatta desu.", en: "Singing and dancing was fun." }] }
    ],
    quiz: [
      { q: "日曜日は テニスを ___ 映画を ___ します。", ans: "したり / 見たり", options: ["したり / 見たり", "して / 見て", "する / 見る", "した / 見た"] },
      { q: "本を ___ 音楽を ___ します。", ans: "読んだり / 聞いたり", options: ["読んだり / 聞いたり", "読んで / 聞いて", "読む / 聞く", "読んだ / 聞いた"] },
      { q: "泣いたり ___ しています。", ans: "笑ったり", options: ["笑ったり", "笑って", "笑う", "笑い"] },
      { q: "掃除を ___ 洗濯を ___ します。", ans: "したり / したり", options: ["したり / したり", "して / して", "する / する", "した / した"] },
      { q: "食べたり ___ してはいけません。", ans: "飲んだり", options: ["飲んだり", "飲んで", "飲む", "飲み"] },
      { q: "行ったり ___ しています。", ans: "来たり", options: ["来たり", "来て", "来る", "来ない"] },
      { q: "夏休みは 泳いだり ___ したいです。", ans: "遊んだり", options: ["遊んだり", "遊んで", "遊ぶ", "遊び"] },
      { q: "雨が 降ったり ___ しています。", ans: "止んだり", options: ["止んだり", "止んで", "止む", "止め"] },
      { q: "見たり ___ しました。", ans: "聞いたり", options: ["聞いたり", "聞いて", "聞く", "聞き"] },
      { q: "勉強したり ___ します。", ans: "休んだり", options: ["休んだり", "休んで", "休む", "休み"] }
    ]
  },
  {
    chapter: 12,
    level: "N5",
    title: "I-Adjectives",
    desc: "Conjugation",
    patterns: [
      { id: "12.1", label: "I-Adjectives", meaning: "Basic Usage", explanation: "Adjectives ending in 'i'.", examples: [{ jp: "この部屋は広いです / 広くありません。", romaji: "Kono heya wa hiroi desu / hiroku arimasen.", en: "This room is spacious / not spacious." }] },
      { id: "12.2", label: "Adjective + Noun", meaning: "Modification", explanation: "Placing adjective before noun.", examples: [{ jp: "おいしい料理", romaji: "Oishii ryouri", en: "Delicious food" }] }
    ],
    quiz: [
      { q: "この 映画は ___ です。", ans: "おもしろい", options: ["おもしろい", "おもしろ", "おもしろな", "おもしろく"] },
      { q: "今日は ___ ありません。", ans: "あつく", options: ["あつく", "あつい", "あつ", "あつな"] },
      { q: "昨日は ___ です。", ans: "さむかった", options: ["さむかった", "さむい", "さむくて", "さむ"] },
      { q: "試験は ___ よ。", ans: "むずかしい", options: ["むずかしい", "むずかしく", "むずかし", "むずかしな"] },
      { q: "この カバンは ___ ないです。", ans: "重く", options: ["重く", "重い", "重", "重な"] },
      { q: "___ りんごですね。", ans: "赤い", options: ["赤い", "赤", "赤く", "赤の"] },
      { q: "日本料理は ___ ですか。", ans: "おいしい", options: ["おいしい", "おいし", "おいしく", "おいしな"] },
      { q: "昨日は ___ ありませんでした。", ans: "よく", options: ["よく", "いい", "よい", "よ"] },
      { q: "海が ___ です。", ans: "青い", options: ["青い", "青", "青く", "青の"] },
      { q: "とても ___ です。", ans: "楽しい", options: ["楽しい", "楽しく", "楽し", "楽しな"] }
    ]
  },
  {
    chapter: 13,
    level: "N5",
    title: "Na-Adjectives & Comparison",
    desc: "Na-adj / Hou ga yori",
    patterns: [
      { id: "13.1", label: "Na-Adjectives", meaning: "Descriptive verbs", explanation: "Adjectives that require 'na' before nouns.", examples: [{ jp: "静かな部屋です。", romaji: "Shizuka na heya desu.", en: "It is a quiet room." }] },
      { id: "13.2", label: "～ほうが～より", meaning: "Comparison", explanation: "Comparing two things.", examples: [{ jp: "東京のほうが大阪より大きいです。", romaji: "Toukyou no hou ga Oosaka yori ookii desu.", en: "Tokyo is bigger than Osaka." }] }
    ],
    quiz: [
      { q: "ワット先生は ___ 先生です。", ans: "親切な", options: ["親切な", "親切", "親切い", "親切だ"] },
      { q: "この 町は ___ です。", ans: "にぎやか", options: ["にぎやか", "にぎやかな", "にぎやかい", "にぎやくだ"] },
      { q: "北海道の ほうが 大阪 ___ 涼しいです。", ans: "より", options: ["より", "も", "と", "が"] },
      { q: "コーヒーと 紅茶と ___ が好きですか。", ans: "どちら", options: ["どちら", "だれ", "どの", "なに"] },
      { q: "わたしは 魚 ___ 肉のほうが 好きです。", ans: "より", options: ["より", "も", "は", "が"] },
      { q: "図書館は ___ ですか。", ans: "静か", options: ["静か", "静かな", "静かい", "静かだ"] },
      { q: "その 店は ___ 有名じゃありません。", ans: "あまり", options: ["あまり", "とても", "少し", "よく"] },
      { q: "漢字は ひらがなより ___ です。", ans: "難しい", options: ["難しい", "難しく", "難し", "難しな"] },
      { q: "スポーツで 何 ___ 一番 好きですか。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "あの人は ___ です。", ans: "元気", options: ["元気", "元気な", "元気い", "元気だ"] }
    ]
  },
  {
    chapter: 14,
    level: "N5",
    title: "Change of State",
    desc: "Naru",
    patterns: [
      { id: "14.1", label: "～くなる / ～になる", meaning: "Become...", explanation: "Change of state for adjectives and nouns.", examples: [{ jp: "天気がよくなりました。", romaji: "Tenki ga yoku narimashita.", en: "The weather became good." }] },
      { id: "14.2", label: "一番～", meaning: "The most...", explanation: "Superlative.", examples: [{ jp: "一番高いです。", romaji: "Ichiban takai desu.", en: "It is the most expensive." }] }
    ],
    quiz: [
      { q: "天気が ___ なりました。", ans: "よく", options: ["よく", "いい", "よい", "いく"] },
      { q: "だんだん ___ なります。", ans: "暖かく", options: ["暖かく", "暖かい", "暖かくて", "暖か"] },
      { q: "部屋が ___ なりました。", ans: "きれいに", options: ["きれいに", "きれい", "きれいな", "きれいく"] },
      { q: "息子は 医者に ___ ました。", ans: "なり", options: ["なり", "なる", "なって", "なれ"] },
      { q: "来年 二十歳に ___ ます。", ans: "なり", options: ["なり", "なる", "なって", "なれ"] },
      { q: "日本語が ___ なりました。", ans: "上手に", options: ["上手に", "上手", "上手な", "上手く"] },
      { q: "髪が ___ なりました。", ans: "短く", options: ["短く", "短い", "短くて", "短か"] },
      { q: "クラスで 誰が ___ 背が高いですか。", ans: "一番", options: ["一番", "もっと", "とても", "よく"] },
      { q: "富士山は 日本で ___ 高い山です。", ans: "一番", options: ["一番", "とても", "もっと", "すごく"] },
      { q: "空が ___ なりました。", ans: "暗く", options: ["暗く", "暗い", "暗くて", "暗か"] }
    ]
  },
  {
    chapter: 15,
    level: "N5",
    title: "Excess & Ease",
    desc: "Sugiru / Yasui / Nikui",
    patterns: [
      { id: "15.1", label: "～すぎる", meaning: "Too much...", explanation: "Excessive degree.", examples: [{ jp: "このケーキは甘すぎます。", romaji: "Kono keeki wa ama sugimasu.", en: "This cake is too sweet." }] },
      { id: "15.2", label: "～やすい / ～にくい", meaning: "Easy / Hard to...", explanation: "Ease or difficulty of doing an action.", examples: [{ jp: "この本は読みやすいです。", romaji: "Kono hon wa yomi yasui desu.", en: "This book is easy to read." }] }
    ],
    quiz: [
      { q: "この 料理は ___ すぎます。", ans: "から", options: ["から", "からい", "からく", "からな"] },
      { q: "昨日は お酒を ___ すぎました。", ans: "飲み", options: ["飲み", "飲む", "飲んで", "飲んだ"] },
      { q: "この 靴は ___ やすいです。", ans: "歩き", options: ["歩き", "歩く", "歩いて", "歩か"] },
      { q: "あの 漢字は ___ にくいです。", ans: "覚え", options: ["覚え", "覚える", "覚えて", "覚えり"] },
      { q: "この ペンは ___ やすいです。", ans: "書き", options: ["書き", "書く", "書いて", "書か"] },
      { q: "食べ ___ て、お腹が痛いです。", ans: "すぎ", options: ["すぎ", "すぎる", "すぎて", "すぎた"] },
      { q: "この 辞書は ___ やすいです。", ans: "使い", options: ["使い", "使う", "使って", "使わ"] },
      { q: "先生の話は ___ やすいです。", ans: "わかり", options: ["わかり", "わかる", "わかって", "わかった"] },
      { q: "この 薬は ___ にくいです。", ans: "飲み", options: ["飲み", "飲む", "飲んで", "飲んだ"] },
      { q: "歌い ___ ました。", ans: "すぎ", options: ["すぎ", "すぎる", "すぎて", "すぎた"] }
    ]
  },
  {
    chapter: 16,
    level: "N5",
    title: "Hearsay & Appearance",
    desc: "Sou desu (Hearsay) / Sou desu (Looks)",
    patterns: [
      { id: "16.1", label: "～そうです (Hearsay)", meaning: "I heard that...", explanation: "Reporting info learned from another source.", examples: [{ jp: "彼は来ないそうです。", romaji: "Kare wa konai sou desu.", en: "I heard he isn't coming." }] },
      { id: "16.2", label: "～そうです (Appearance)", meaning: "Available / Looks like...", explanation: "Describing appearance based on observation.", examples: [{ jp: "おいしそうです。", romaji: "Oishi sou desu.", en: "It looks delicious." }] }
    ],
    quiz: [
      { q: "天気予報によると、明日は 雨が ___ そうです。", ans: "降る", options: ["降る", "降り", "降って", "降ら"] },
      { q: "この ケーキは ___ そうです。", ans: "おいし", options: ["おいし", "おいしい", "おいしく", "おいしかった"] },
      { q: "雨が ___ そうです。", ans: "降り", options: ["降り", "降る", "降って", "降ら"] },
      { q: "荷物が ___ そうですね。", ans: "落ち", options: ["落ち", "落ちる", "落ちて", "落ちた"] },
      { q: "ボタンが ___ そうです。", ans: "とれ", options: ["とれ", "とれる", "とれて", "とれた"] },
      { q: "田中さんは 元気 ___ そうです。", ans: "だ", options: ["だ", "な", "の", "に"] },
      { q: "この 本は ___ そうです。", ans: "おもしろ", options: ["おもしろ", "おもしろい", "おもしろく", "おもしろかった"] },
      { q: "忙し ___ ですね。", ans: "そう", options: ["そう", "だ", "い", "な"] },
      { q: "新聞によると、事故が ___ そうです。", ans: "あった", options: ["あった", "ある", "あり", "あって"] },
      { q: "その 映画は ___ そうですよ。", ans: "いい", options: ["いい", "よく", "よかった", "いく"] }
    ]
  },
  {
    chapter: 17,
    level: "N5",
    title: "Trial & Prep",
    desc: "Te-miru / Te-oku",
    patterns: [
      { id: "17.1", label: "～てみる", meaning: "Try doing...", explanation: "Trying something to see the result.", examples: [{ jp: "この服を着てみます。", romaji: "Kono fuku o kite mimasu.", en: "I'll try wearing these clothes." }] },
      { id: "17.2", label: "～ておく", meaning: "Do in advance", explanation: "Doing something in preparation for the future.", examples: [{ jp: "チケットを買っておきます。", romaji: "Chiketto o katte okimasu.", en: "I'll buy tickets in advance." }] }
    ],
    quiz: [
      { q: "この靴を ___ みても いいですか。", ans: "はいて", options: ["はいて", "はき", "はく", "はいた"] },
      { q: "もう一度 ___ みてください。", ans: "やって", options: ["やって", "やり", "やる", "やった"] },
      { q: "旅行の まえに ホテルを ___ おきます。", ans: "予約して", options: ["予約して", "予約し", "予約する", "予約した"] },
      { q: "使ったら 元の 所に ___ おいてください。", ans: "戻して", options: ["戻して", "戻し", "戻す", "戻した"] },
      { q: "日本料理を ___ みました。", ans: "食べて", options: ["食べて", "食べ", "食べる", "食べた"] },
      { q: "お皿を ___ おきます。", ans: "洗って", options: ["洗って", "洗い", "洗う", "洗った"] },
      { q: "サイズが 合うか、___ みます。", ans: "着て", options: ["着て", "着", "着る", "着た"] },
      { q: "飲み物を ___ おきましょう。", ans: "買って", options: ["買って", "買い", "買う", "買わ"] },
      { q: "ちょっと ___ みます。", ans: "考えて", options: ["考えて", "考え", "考える", "考えた"] },
      { q: "窓を ___ おきます。", ans: "開けて", options: ["開けて", "開け", "開ける", "開けた"] }
    ]
  },
  {
    chapter: 18,
    level: "N5",
    title: "Conditional (Ba)",
    desc: "-Ba form / Nakereba narimasen",
    patterns: [
      { id: "18.1", label: "～ば", meaning: "If...", explanation: "Hypothetical condition.", examples: [{ jp: "雨が降れば行きません。", romaji: "Ame ga fureba ikimasen.", en: "If it rains, I won't go." }] },
      { id: "18.2", label: "～なければなりません", meaning: "Must", explanation: "Obligation.", examples: [{ jp: "宿題をしなければなりません。", romaji: "Shukudai o shinakereba narimasen.", en: "I must do my homework." }] }
    ],
    quiz: [
      { q: "明日 雨が ___ 行きません。", ans: "ふれば", options: ["ふれば", "ふり", "ふる", "ふって"] },
      { q: "安 ___ 買います。", ans: "ければ", options: ["ければ", "い", "く", "くて"] },
      { q: "暇 ___ 手伝ってください。", ans: "なら", options: ["なら", "だ", "の", "に"] },
      { q: "薬を ___ ければなりません。", ans: "飲まな", options: ["飲まな", "飲み", "飲む", "飲んで"] },
      { q: "早く ___ ければなりません。", ans: "行かな", options: ["行かな", "行き", "行く", "行って"] },
      { q: "天気が ___ 出かけましょう。", ans: "よければ", options: ["よければ", "いい", "よく", "よくて"] },
      { q: "お金が ___ 旅行できません。", ans: "なければ", options: ["なければ", "ない", "なく", "なくて"] },
      { q: "パスポートを ___ ければなりません。", ans: "見せな", options: ["見せな", "見せ", "見せる", "見せた"] },
      { q: "説明書を ___ わかります。", ans: "読めば", options: ["読めば", "読み", "読む", "読んで"] },
      { q: "勉強 ___ ければなりません。", ans: "しな", options: ["しな", "し", "する", "して"] }
    ]
  },
  {
    chapter: 19,
    level: "N5",
    title: "Purpose",
    desc: "You ni",
    patterns: [
      { id: "19.1", label: "～ように (In order to)", meaning: "So that...", explanation: "Purpose or aim.", examples: [{ jp: "日本語が上手になるように勉強します。", romaji: "Nihongo ga jouzu ni naru you ni benkyou shimasu.", en: "I study so that I will become good at Japanese." }] },
      { id: "19.2", label: "～ように (Like/As)", meaning: "Like...", explanation: "Similarity.", examples: [{ jp: "雪のように白い。", romaji: "Yuki no you ni shiroi.", en: "White like snow." }] }
    ],
    quiz: [
      { q: "忘れない ___ メモします。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "聞こえる ___ 大きい声で話してください。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "早く ___ ように 薬を飲みます。", ans: "治る", options: ["治る", "治り", "治って", "治った"] },
      { q: "氷の ___ 冷たいです。", ans: "ように", options: ["ように", "な", "だ", "の"] },
      { q: "先生が 言う ___ 書いてください。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "遅れない ___ してください。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "風邪を 引かない ___ 気をつけています。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "日本語が 話せる ___ なりたいです。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "祈る ___ 手を合わせました。", ans: "ように", options: ["ように", "ため", "こと", "の"] },
      { q: "鳥の ___ 空を飛びたいです。", ans: "ように", options: ["ように", "な", "だ", "の"] }
    ]
  },
  {
    chapter: 20,
    level: "N5",
    title: "Current State",
    desc: "Tokoro / Ta-bakari",
    patterns: [
      { id: "20.1", label: "～ところ", meaning: "Point in time", explanation: "Just about to, in the middle of, or just did.", examples: [{ jp: "今、帰るところです。", romaji: "Ima, kaeru tokoro desu.", en: "I am about to go home / Just going home." }] },
      { id: "20.2", label: "～たばかり", meaning: "Just finished", explanation: "Completed very recently.", examples: [{ jp: "食べたばかりです。", romaji: "Tabeta bakari desu.", en: "I just ate." }] }
    ],
    quiz: [
      { q: "今から 食べる ___ です。", ans: "ところ", options: ["ところ", "ばかり", "こと", "もの"] },
      { q: "今 食べている ___ です。", ans: "ところ", options: ["ところ", "ばかり", "こと", "もの"] },
      { q: "たった今 食べた ___ です。", ans: "ところ", options: ["ところ", "ばかり", "こと", "もの"] },
      { q: "日本へ 来た ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "こと", "もの"] },
      { q: "この 時計は 買った ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "こと", "もの"] },
      { q: "これから 始まる ___ です。", ans: "ところ", options: ["ところ", "ばかり", "こと", "もの"] },
      { q: "今 調べている ___ です。", ans: "ところ", options: ["ところ", "ばかり", "こと", "もの"] },
      { q: "さっき 起きた ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "こと", "もの"] },
      { q: "バスは 今 出た ___ です。", ans: "ところ", options: ["ところ", "ばかり", "こと", "もの"] },
      { q: "大学を 出た ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "こと", "もの"] }
    ]
  },
  {
    chapter: 21,
    level: "N5",
    title: "Polite & Regret",
    desc: "Sou desu / Masen deshita",
    patterns: [
      { id: "21.1", label: "～そうです", meaning: "Looks like / Hearsay", explanation: "Review of Sou desu.", examples: [{ jp: "雨が降りそうです。", romaji: "Ame ga furi sou desu.", en: "It looks like it will rain." }] },
      { id: "21.2", label: "～ませんでした", meaning: "Didn't", explanation: "Polite negative past.", examples: [{ jp: "行きませんでした。", romaji: "Ikimasen deshita.", en: "I didn't go." }] },
      { id: "21.3", label: "～ながら", meaning: "Simultaneous", explanation: "Advanced review.", examples: [{ jp: "歩きながら考えます。", romaji: "Aruki nagara kangaemasu.", en: "I think while walking." }] }
    ],
    quiz: [
      { q: "ボタンが ___ そうです。", ans: "とれ", options: ["とれ", "とれる", "とれて", "とれた"] },
      { q: "荷物が ___ そうです。", ans: "落ち", options: ["落ち", "落ちる", "落ちて", "落ちた"] },
      { q: "おいし ___ ケーキですね。", ans: "そうな", options: ["そうな", "そう", "そうに", "そうだ"] },
      { q: "昨日 映画を ___ でした。", ans: "見ません", options: ["見ません", "見ない", "見なく", "見ず"] },
      { q: "朝ごはんを ___ ませんでした。", ans: "食べ", options: ["食べ", "食べる", "食ベて", "食べた"] },
      { q: "運転し ___ 話してはいけません。", ans: "ながら", options: ["ながら", "つつ", "て", "ないで"] },
      { q: "勉強し ___ 音楽を聞きます。", ans: "ながら", options: ["ながら", "つつ", "て", "ないで"] },
      { q: "良さ ___ 本ですね。", ans: "そうな", options: ["そうな", "そう", "そうに", "そうだ"] },
      { q: "元気 ___ 人ですね。", ans: "そうな", options: ["そうな", "そう", "そうに", "そうだ"] },
      { q: "雨が ___ そうです。", ans: "やみ", options: ["やみ", "やむ", "やんで", "やんだ"] }
    ]
  },
  {
    chapter: 22,
    level: "N5",
    title: "Appearance & Probability",
    desc: "Sou desu / Kamoshiremasen",
    patterns: [
      { id: "22.1", label: "～そうです", meaning: "It seems...", explanation: "Based on appearance.", examples: [{ jp: "元気そうです。", romaji: "Genki sou desu.", en: "He seems healthy." }] },
      { id: "22.2", label: "～かもしれません", meaning: "Might", explanation: "Possibility.", examples: [{ jp: "遅れるかもしれません。", romaji: "Okureru kamo shiremasen.", en: "I might be late." }] }
    ],
    quiz: [
      { q: "明日は 雨が ___ かもしれません。", ans: "降る", options: ["降る", "降り", "降って", "降ら"] },
      { q: "約束に ___ かもしれません。", ans: "まにあわない", options: ["まにあわない", "まにあう", "まにあって", "まにあい"] },
      { q: "彼は 病気 ___ かもしれません。", ans: "だ", options: ["だ", "な", "の", "に"] },
      { q: "来週は ___ かもしれません。", ans: "忙しい", options: ["忙しい", "忙しく", "忙な", "忙に"] },
      { q: "この 料理は ___ かもしれません。", ans: "からい", options: ["からい", "からく", "からな", "から"] },
      { q: "元気 ___ ですね。", ans: "そう", options: ["そう", "だ", "な", "に"] },
      { q: "丈夫 ___ かばんですね。", ans: "そうな", options: ["そうな", "そう", "そうに", "そうだ"] },
      { q: "雨は もうすぐ ___ そうです。", ans: "やみ", options: ["やみ", "やむ", "やんで", "やんだ"] },
      { q: "この 店は ___ かもしれません。", ans: "休み", options: ["休み", "休む", "休んで", "休んだ"] },
      { q: "道が ___ かもしれません。", ans: "混んでいる", options: ["混んでいる", "混む", "混み", "混んで"] }
    ]
  },
  {
    chapter: 23,
    level: "N5",
    title: "Advice & Obligation",
    desc: "Hou ga ii / Nakute wa ikemasen",
    patterns: [
      { id: "23.1", label: "～ばいいです", meaning: "Should / Had better", explanation: "Recommendation.", examples: [{ jp: "早く寝たほうがいいです。", romaji: "Hayaku neta hou ga ii desu.", en: "You should sleep early." }] },
      { id: "23.2", label: "～なくてはいけません", meaning: "Must", explanation: "Strong obligation.", examples: [{ jp: "今日行かなくてはいけません。", romaji: "Kyou ikanakute wa ikemasen.", en: "I must go today." }] }
    ],
    quiz: [
      { q: "熱が あるんです。病院へ ___ ほうが いいですよ。", ans: "行った", options: ["行った", "行く", "行き", "行って"] },
      { q: "無理を ___ ほうが いいですよ。", ans: "しない", options: ["しない", "した", "して", "する"] },
      { q: "お風呂に ___ ほうが いいですか。", ans: "入らない", options: ["入らない", "入った", "入って", "入る"] },
      { q: "薬を ___ てはいけません。", ans: "飲まなく", options: ["飲まなく", "飲まない", "飲んで", "飲む"] },
      { q: "残業 ___ くてはいけません。", ans: "しな", options: ["しな", "し", "する", "して"] },
      { q: "パスポートを ___ くてはいけません。", ans: "見せな", options: ["見せな", "見せ", "見せる", "見せた"] },
      { q: "早く ___ ほうが いいですよ。", ans: "帰った", options: ["帰った", "帰る", "帰り", "帰って"] },
      { q: "もっと 野菜を ___ ほうが いいです。", ans: "食べた", options: ["食べた", "食べる", "食べ", "食べて"] },
      { q: "勉強 ___ くてはいけません。", ans: "しな", options: ["しな", "し", "する", "して"] },
      { q: "お金を ___ くてはいけません。", ans: "払わな", options: ["払わな", "払う", "払い", "払って"] }
    ]
  },
  {
    chapter: 24,
    level: "N5",
    title: "Hearsay & Completion",
    desc: "Sou desu / Te shimau",
    patterns: [
      { id: "24.1", label: "～そうです (Hearsay)", meaning: "I heard...", explanation: "Relaying information.", examples: [{ jp: "彼は結婚するそうです。", romaji: "Kare wa kekkon suru sou desu.", en: "I heard he is getting married." }] },
      { id: "24.2", label: "～てしまう", meaning: "Completely / Regret", explanation: "Action completed or done accidentally.", examples: [{ jp: "忘れてしまいました。", romaji: "Wasurete shimaimashita.", en: "I completely forgot / I regret forgetting." }] }
    ],
    quiz: [
      { q: "宿題を ___ しまいました。", ans: "忘れて", options: ["忘れて", "忘れ", "忘れる", "忘れた"] },
      { q: "全部 ___ しまいました。", ans: "食べて", options: ["食べて", "食べ", "食べる", "食べた"] },
      { q: "電車に 傘を ___ しまいました。", ans: "忘れて", options: ["忘れて", "忘れ", "忘れる", "忘れた"] },
      { q: "財布を ___ しまいました。", ans: "落として", options: ["落として", "落とし", "落とす", "落とした"] },
      { q: "パスポートを ___ しまいました。", ans: "なくして", options: ["なくして", "なくし", "なくす", "なくした"] },
      { q: "社長は もう ___ しまいました。", ans: "帰って", options: ["帰って", "帰り", "帰る", "帰った"] },
      { q: "その 本は もう ___ しまいました。", ans: "読んで", options: ["読んで", "読み", "読む", "読んだ"] },
      { q: "風邪を ___ しまいました。", ans: "引いて", options: ["引いて", "引き", "引く", "引いた"] },
      { q: "指を ___ しまいました。", ans: "切って", options: ["切って", "切り", "切る", "切った"] },
      { q: "ニュースによると、犯人は ___ そうです。", ans: "捕まった", options: ["捕まった", "捕まる", "捕まり", "捕まって"] }
    ]
  },
  {
    chapter: 25,
    level: "N5",
    title: "Conditionals",
    desc: "Tara / Temo",
    patterns: [
      { id: "25.1", label: "～たら", meaning: "If / When", explanation: "Hypothetical condition or sequence.", examples: [{ jp: "お金があったら、旅行します。", romaji: "Okane ga attara, ryokou shimasu.", en: "If I have money, I will travel." }, { jp: "ご飯を食べたら、出かけます。", romaji: "Gohan o tabetara, dekakemasu.", en: "When I've eaten, I'll go out." }] },
      { id: "25.2", label: "～ても", meaning: "Even if", explanation: "Concession.", examples: [{ jp: "雨が降っても行きます。", romaji: "Ame ga futtemo ikimasu.", en: "Even if it rains, I will go." }] }
    ],
    quiz: [
      { q: "お金が ___、旅行に 行きます。", ans: "あったら", options: ["あったら", "あると", "あれば", "あった"] },
      { q: "雨が ___、行きます。", ans: "降っても", options: ["降っても", "降り", "降る", "降って"] },
      { q: "安く ___、買いません。", ans: "なくても", options: ["なくても", "ないで", "なけ", "なかっ"] },
      { q: "暇 ___、手伝ってください。", ans: "だったら", options: ["だったら", "だ", "な", "に"] },
      { q: "熱が ___、お風呂に入らないでください。", ans: "あったら", options: ["あったら", "ある", "あり", "あって"] },
      { q: "いくら ___、わかりません。", ans: "考えても", options: ["考えても", "考え", "考える", "考えた"] },
      { q: "薬を ___、よくなりません。", ans: "飲んでも", options: ["飲んでも", "飲み", "飲む", "飲んだ"] },
      { q: "調べても ___。", ans: "わかりませんでした", options: ["わかりませんでした", "わかりました", "わかる", "わかり"] },
      { q: "もし ___、連絡します。", ans: "遅れたら", options: ["遅れたら", "遅れる", "遅れ", "遅れて"] }
    ]
  },
  // --- JLPT N4 CONTENT ---
  {
    chapter: 26,
    level: "N4",
    title: "Potential Form",
    desc: "V-rareru / Dekiru",
    patterns: [
      { id: "26.1", label: "～られる", meaning: "Can do", explanation: "The potential form indicates ability or possibility.", examples: [{ jp: "日本語が話せます。", romaji: "Nihongo ga hanasemasu.", en: "I can speak Japanese." }, { jp: "漢字が書けますか。", romaji: "Kanji ga kakemasu ka.", en: "Can you write Kanji?" }] },
      { id: "26.2", label: "～ことができる", meaning: "Be able to", explanation: "A more formal way to express potential.", examples: [{ jp: "泳ぐことができます。", romaji: "Oyogu koto ga dekimasu.", en: "I can swim." }] }
    ],
    quiz: [
      { q: "わたしは 日本料理を ___。", ans: "作れます", options: ["作れます", "作ります", "作って", "作れ"] },
      { q: "一人で 病院へ ___ か。", ans: "行けます", options: ["行けます", "行きます", "行って", "行け"] },
      { q: "お酒が ___ ません。", ans: "飲め", options: ["飲め", "飲み", "飲める", "飲ん"] },
      { q: "漢字を 読む ___ できます。", ans: "ことが", options: ["ことが", "のを", "は", "に"] },
      { q: "この 部屋から 海が ___。", ans: "見えます", options: ["見えます", "見られます", "見る", "見"] },
      { q: "ピアノを ___ ことが できますか。", ans: "弾く", options: ["弾く", "弾いた", "弾け", "弾き"] },
      { q: "ここから 富士山が ___。", ans: "見えます", options: ["見えます", "見られます", "見る", "見"] },
      { q: "声が ___ ません。", ans: "聞こえ", options: ["聞こえ", "聞こえる", "聞き", "聞け"] },
      { q: "日本語の 新聞が ___ ますか。", ans: "読め", options: ["読め", "読み", "読める", "読ん"] },
      { q: "銀行で お金を ___ ことが できます。", ans: "替える", options: ["替える", "替え", "替えた", "替えり"] }
    ]
  },
  {
    chapter: 27,
    level: "N4",
    title: "Intentions & Plans",
    desc: "Tsumori / Yo uto omou",
    patterns: [
      { id: "27.1", label: "～つもりです", meaning: "Intend to", explanation: "Expresses a firm intention to do something.", examples: [{ jp: "来年日本へ行くつもりです。", romaji: "Rainen Nihon e iku tsumori desu.", en: "I intend to go to Japan next year." }] },
      { id: "27.2", label: "～ようと思う", meaning: "Thinking of doing", explanation: "Expresses a volitional intent, slightly less firm than 'tsumori'.", examples: [{ jp: "会社を辞めようと思っています。", romaji: "Kaisha o yameyou to omotte imasu.", en: "I'm thinking of quitting my job." }] }
    ],
    quiz: [
      { q: "週末は 海へ ___ つもりです。", ans: "行く", options: ["行く", "行こう", "行って", "行き"] },
      { q: "明日、部長に ___ と 思っています。", ans: "会おう", options: ["会おう", "会う", "会って", "会い"] },
      { q: "タバコを ___ つもりです。", ans: "やめる", options: ["やめる", "やめた", "やめよう", "やめて"] },
      { q: "夏休みは どこへも ___ つもりです。", ans: "行かない", options: ["行かない", "行かないで", "行こう", "行かないと"] },
      { q: "今日から 日記を ___ と 思います。", ans: "書こう", options: ["書こう", "書く", "書いて", "書き"] },
      { q: "将来 自分の 店を ___ つもりです。", ans: "持つ", options: ["持つ", "持とう", "持って", "持ち"] },
      { q: "疲れたから、早く ___ と 思います。", ans: "寝よう", options: ["寝よう", "寝る", "寝て", "寝"] },
      { q: "レポートは 明日 ___ つもりです。", ans: "出す", options: ["出す", "出そう", "出して", "出し"] },
      { q: "大学を 卒業したら、IMCで ___ と 思います。", ans: "働こう", options: ["働こう", "働く", "働いて", "働き"] },
      { q: "お正月は実家に ___ つもりです。", ans: "帰る", options: ["帰る", "帰ろう", "帰って", "帰り"] }
    ]
  },
  {
    chapter: 28,
    level: "N4",
    title: "Simultaneous Actions",
    desc: "Nagara / Shi",
    patterns: [
      { id: "28.1", label: "～ながら", meaning: "While doing", explanation: "Two actions performed simultaneously by the same person.", examples: [{ jp: "音楽を聞きながら勉強します。", romaji: "Ongaku o kikinagara benkyou shimasu.", en: "I study while listening to music." }] },
      { id: "28.2", label: "～し、～し", meaning: "Moreover / Not only... but also", explanation: "Listing reasons or descriptions.", examples: [{ jp: "彼はハンサムだし、親切です。", romaji: "Kare wa hansamu da shi, shinsetsu desu.", en: "He is handsome and (moreover) kind." }] }
    ],
    quiz: [
      { q: "テレビを ___ ご飯を 食べます。", ans: "見ながら", options: ["見ながら", "見て", "見", "見ると"] },
      { q: "働き ___ 大学に 通っています。", ans: "ながら", options: ["ながら", "て", "に", "を"] },
      { q: "ガムを ___ 先生の 話を 聞いてはいけません。", ans: "かみながら", options: ["かみながら", "かんで", "かみ", "かむと"] },
      { q: "駅から ___、近い ___、便利です。", ans: "近いし", options: ["近いし", "近くて", "近い", "近く"] },
      { q: "この レストランは おいしい ___、安い です。", ans: "し", options: ["し", "て", "から", "ので"] },
      { q: "雨も ___、風も 強い です。", ans: "降っているし", options: ["降っているし", "降っている", "降って", "降る"] },
      { q: "休みは ___、暇 ___、どこかへ 行きましょう。", ans: "だし", options: ["だし", "は", "で", "に"] },
      { q: "歌を ___ 踊ります。", ans: "歌いながら", options: ["歌いながら", "歌って", "歌い", "歌うと"] },
      { q: "お茶を ___ 話しましょう。", ans: "飲みながら", options: ["飲みながら", "飲んで", "飲み", "飲むと"] },
      { q: "彼女は きれい ___、頭も いいです。", ans: "だし", options: ["だし", "で", "に", "は"] }
    ]
  },
  {
    chapter: 29,
    level: "N4",
    title: "Giving & Receiving",
    desc: "Ageru / Kureru / Morau",
    patterns: [
      { id: "29.1", label: "～てあげる / くれる / もらう", meaning: "Giving / Receiving services", explanation: "Doing something for someone, someone doing for you, or receiving a favor.", examples: [{ jp: "母に花を買ってあげました。", romaji: "Haha ni hana o katte agemashita.", en: "I bought flowers for my mother." }, { jp: "友達が手伝ってくれました。", romaji: "Tomodachi ga tetsudatte kuremashita.", en: "A friend helped me." }] }
    ],
    quiz: [
      { q: "わたしは 妹に 料理を ___ あげました。", ans: "作って", options: ["作って", "作り", "作る", "作った"] },
      { q: "佐藤さんは わたしに 地図を ___ くれました。", ans: "書いて", options: ["書いて", "書き", "書く", "書いた"] },
      { q: "わたしは 木村さんに 傘を ___ もらいました。", ans: "貸して", options: ["貸して", "貸し", "貸す", "貸した"] },
      { q: "先生は 漢字を ___ くださいました。", ans: "教えて", options: ["教えて", "教え", "教える", "教えて"] },
      { q: "おじいさんに 本を ___ さしあげました。", ans: "読んで", options: ["読んで", "読み", "読む", "読んだ"] },
      { q: "山田さんは 傘を ___ くれました。", ans: "貸して", options: ["貸して", "貸し", "貸す", "貸した"] },
      { q: "部長に お酒を ___ もらいました。", ans: "いただい", options: ["いただい", "もらっ", "くれ", "あげ"] },
      { q: "子供に おもちゃを 買って ___。", ans: "やりました", options: ["やりました", "あげました", "くれました", "もらいました"] },
      { q: "友達が 引っ越しを 手伝って ___。", ans: "くれました", options: ["くれました", "あげました", "もらいました", "いたしました"] },
      { q: "駅まで 送って ___ ませんか。", ans: "くれ", options: ["くれ", "あげ", "もらえ", "さしあげ"] }
    ]
  },
  {
    chapter: 30,
    level: "N4",
    title: "Conditions",
    desc: "Tara / Nara",
    patterns: [
      { id: "30.1", label: "～なら", meaning: "If it's the case that...", explanation: "Providing advice or options based on what the other person said.", examples: [{ jp: "日本へ行くなら、京都がいいですよ。", romaji: "Nihon e iku nara, Kyouto ga ii desu yo.", en: "If you're going to Japan, Kyoto is good." }] }
    ],
    quiz: [
      { q: "パソコンを 買う ___、秋葉原が いいですよ。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "スキー ___、北海道が 一番 です。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "明日 雨 ___、行きません。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "安く ___、買いたいです。", ans: "ないなら", options: ["ないなら", "ないたら", "なければ", "ないと"] },
      { q: "疲れた ___、休んでください。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "嫌い ___、食べなくても いいですよ。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "暇 ___、遊びに来てください。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "わからない ___、先生に 聞いてください。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "映画を 見る ___、これが おすすめです。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "暑い ___、エアコンを つけましょう。", ans: "なら", options: ["なら", "たら", "れば", "と"] }
    ]
  },

  {
    chapter: 31,
    level: "N4",
    title: "Volitional Form",
    desc: "V-ou / Omotte imasu",
    patterns: [
      { id: "31.1", label: "意向形 (いこうけい)", meaning: "Volitional Form (Let's)", explanation: "Informal version of ~mashou.", examples: [{ jp: "明日、映画を見に行こう。", romaji: "Ashita, eiga o mi ni ikou.", en: "Let's go see a movie tomorrow." }] },
      { id: "31.2", label: "～ようと思っています", meaning: "Thinking of doing", explanation: "Expresses a decision made some time ago.", examples: [{ jp: "将来、自分の店を持とうと思っています。", romaji: "Shourai, jibun no mise o motou to omotte imasu.", en: "I'm thinking of having my own shop in the future." }] }
    ],
    quiz: [
      { q: "疲れたから、もう ___。", ans: "寝よう", options: ["寝よう", "寝る", "寝ます", "寝え"] },
      { q: "お正月は 実家に ___ と 思っています。", ans: "帰ろう", options: ["帰ろう", "帰る", "帰り", "帰って"] },
      { q: "会社を ___ と 思っています。", ans: "やめよう", options: ["やめよう", "やめる", "やめた", "やめ"] },
      { q: "駅まで ___ か。", ans: "走ろう", options: ["走ろう", "走る", "走り", "走って"] },
      { q: "週末は 海へ ___ と 思います。", ans: "行こう", options: ["行こう", "行く", "行き", "行って"] },
      { q: "今夜は 早く ___。", ans: "寝よう", options: ["寝よう", "寝る", "寝ます", "寝て"] },
      { q: "漢字を もっと ___ と 思っています。", ans: "覚えよう", options: ["覚えよう", "覚える", "覚え", "覚えた"] },
      { q: "結婚しても 仕事を ___ と 思っています。", ans: "続けよう", options: ["続けよう", "続ける", "続け", "続けた"] },
      { q: "買い物に ___。", ans: "行こう", options: ["行こう", "行く", "行き", "行って"] },
      { q: "一緒に 晩ご飯を ___。", ans: "食べよう", options: ["食べよう", "食べる", "食べ", "食べて"] }
    ]
  },
  {
    chapter: 32,
    level: "N4",
    title: "Imperative & Prohibitive",
    desc: "V-ro / V-na",
    patterns: [
      { id: "32.1", label: "命令形 (めいれいけい)", meaning: "Imperative Form", explanation: "Strong command, used by men or in emergencies.", examples: [{ jp: "早くしろ！", romaji: "Hayaku shiro!", en: "Do it quickly!" }] },
      { id: "32.2", label: "禁止形 (きんしけい)", meaning: "Prohibitive Form", explanation: "Strong prohibition: Do not...", examples: [{ jp: "ここに入るな。", romaji: "Koko ni hairu na.", en: "Do not enter here." }] }
    ],
    quiz: [
      { q: "もっと 勉強 ___！", ans: "しろ", options: ["しろ", "せよ", "する", "して"] },
      { q: "そこに ___！", ans: "座るな", options: ["座るな", "座る", "座らな", "座れ"] },
      { q: "危ない！ ___！", ans: "逃げろ", options: ["逃げろ", "逃げる", "逃げ", "逃げな"] },
      { q: "エレベーターを ___ な。", ans: "使う", options: ["使う", "使っ", "使い", "使え"] },
      { q: "時間を ___ な。", ans: "守れ", options: ["守れ", "守る", "守ら", "守れな"] },
      { q: "騒ぐ ___。", ans: "な", options: ["な", "ください", "する", "じゃありません"] },
      { q: "止まれは ___ という 意味です。", ans: "止まれ", options: ["止まれ", "止まる", "止まり", "止まるな"] },
      { q: "「立入禁止」は 入る ___ という 意味です。", ans: "な", options: ["な", "しろ", "ください", "ません"] },
      { q: "頑張れ！ は ___ という 意味です。", ans: "頑張れ", options: ["頑張れ", "頑張る", "頑張り", "頑張るな"] },
      { q: "あきらめる ___！", ans: "な", options: ["な", "しろ", "する", "ください"] }
    ]
  },
  {
    chapter: 33,
    level: "N4",
    title: "Steps & Succession",
    desc: "Toori ni / Ato de",
    patterns: [
      { id: "33.1", label: "～とおりに", meaning: "Exactly as...", explanation: "Doing something exactly as another person or guide did.", examples: [{ jp: "説明書の とおりに 組み立てます。", romaji: "Setsumeisho no toori ni kumitatemasu.", en: "Assemble exactly as the manual says." }] },
      { id: "33.2", label: "～あとで", meaning: "After / Since", explanation: "Action sequence.", examples: [{ jp: "仕事の あとで 飲みに行きます。", romaji: "Shigoto no ato de nomi ni ikimasu.", en: "After work, let's go for a drink." }] }
    ],
    quiz: [
      { q: "私が 言った ___ 書いてください。", ans: "とおりに", options: ["とおりに", "ように", "ことに", "あとに"] },
      { q: "仕事が 終わった ___ 飲みに行きました。", ans: "あとで", options: ["あとで", "まえに", "うちに", "あいだに"] },
      { q: "矢印の ___ 行けば、着きますよ。", ans: "とおりに", options: ["とおりに", "ように", "あとで", "まえに"] },
      { q: "ご飯を 食べた ___ 歯を 磨きます。", ans: "あとで", options: ["あとで", "まえに", "ときに", "ながら"] },
      { q: "映画を 見た ___ 感想を 書きました。", ans: "あとで", options: ["あとで", "ながら", "ときに", "まえに"] },
      { q: "説明書の ___ 箱を 作ってください。", ans: "とおりに", options: ["とおりに", "ように", "あとで", "まえに"] },
      { q: "シャワーを 浴びた ___ 寝ます。", ans: "あとで", options: ["あとで", "ながら", "までに", "まえに"] },
      { q: "見た ___ 話してください。", ans: "とおりに", options: ["とおりに", "ように", "あとで", "とき"] },
      { q: "練習の ___ 試合を しました。", ans: "あとで", options: ["あとで", "まえに", "から", "までに"] },
      { q: "スポーツの ___ ビールを 飲みます。", ans: "あとで", options: ["あとで", "まえに", "とき", "ながら"] }
    ]
  },
  {
    chapter: 34,
    level: "N4",
    title: "Conditional (Ba)",
    desc: "V-ba / Adj-kereba",
    patterns: [
      { id: "34.1", label: "～ば", meaning: "If", explanation: "A general conditional form.", examples: [{ jp: "安ければ買います。", romaji: "Yasukereba kaimasu.", en: "If it's cheap, I'll buy it." }, { jp: "練習すれば上手になります。", romaji: "Renshuu sureba jouzu ni narimasu.", en: "If you practice, you'll become good at it." }] }
    ],
    quiz: [
      { q: "時間が ___ 行きます。", ans: "あれば", options: ["あれば", "あったら", "あると", "あればなら"] },
      { q: "安く ___ 買います。", ans: "なれば", options: ["なれば", "なったら", "ならな", "なると"] },
      { q: "天気が ___ 出かけましょう。", ans: "よければ", options: ["よければ", "よかったら", "いいと", "よいなら"] },
      { q: "食べ ___ わかりますよ。", ans: "れば", options: ["れば", "たら", "ると", "ろう"] },
      { q: "薬を ___ よくなります。", ans: "飲めば", options: ["飲めば", "飲んだら", "飲むと", "飲め"] },
      { q: "窓を ___ 涼しく なります。", ans: "開ければ", options: ["開ければ", "開けたら", "開けると", "開けり"] },
      { q: "雨が ___ 中止です。", ans: "降れば", options: ["降れば", "降ったら", "降ると", "降り"] },
      { q: "ボタンを ___ 切符が 出ます。", ans: "押せば", options: ["押せば", "押したら", "押すと", "押し"] },
      { q: "誘わ ___ 行きません。", ans: "れなければ", options: ["れなければ", "れば", "れたら", "れると"] },
      { q: "説明書を ___ わかります。", ans: "読めば", options: ["読めば", "読んだら", "読むと", "読み"] }
    ]
  },
  {
    chapter: 35,
    level: "N4",
    title: "Effort & Ability",
    desc: "You ni suru / You ni naru",
    patterns: [
      { id: "35.1", label: "～ようにする", meaning: "Try to do", explanation: "Making a conscious effort to do (or not do) something.", examples: [{ jp: "野菜を食べるようにしています。", romaji: "Yasai o taberu you ni shite imasu.", en: "I'm trying to eat vegetables." }] },
      { id: "35.2", label: "～ようになる", meaning: "Become able to / Start to", explanation: "A change in state or ability.", examples: [{ jp: "日本語が話せるようになりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", en: "I've become able to speak Japanese." }] }
    ],
    quiz: [
      { q: "毎日 運動する ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "やっと 自転車に 乗れる ___。", ans: "ようになりました", options: ["ようになりました", "ようにしました", "ことになりました", "ことになりました"] },
      { q: "甘いものを 食べない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "ころに"] },
      { q: "肉を 食べない ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "うちに"] },
      { q: "早く 寝る ___ してください。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "だんだん わかる ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "忘れ物を しない ___ 気をつけてください。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "一人で 行ける ___ なりましたか。", ans: "ように", options: ["ように", "ために", "ことに", "うちに"] },
      { q: "お酒を 飲まない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "からに"] },
      { q: "漢字が 書ける ___ なりましたか。", ans: "ように", options: ["ように", "ために", "ことに", "まえに"] }
    ]
  },
  {
    chapter: 36,
    level: "N4",
    title: "Passive Voice",
    desc: "V-rareru",
    patterns: [
      { id: "36.1", label: "受身形 (うけみけい)", meaning: "Passive Form", explanation: "Indicates that the subject is acted upon.", examples: [{ jp: "先生に褒められました。", romaji: "Sensei ni homeraremashita.", en: "I was praised by the teacher." }] }
    ],
    quiz: [
      { q: "泥棒に 財布を ___。", ans: "盗まれました", options: ["盗まれました", "盗みました", "盗ませました", "盗んで"] },
      { q: "知らない人に 道を ___。", ans: "聞かれました", options: ["聞かれました", "聞きました", "聞かせました", "聞いて"] },
      { q: "部長に 仕事を ___。", ans: "頼まれました", options: ["頼まれました", "頼みました", "頼ませました", "頼んで"] },
      { q: "誰かに 足を ___。", ans: "踏まれました", options: ["踏まれました", "踏みました", "踏ませました", "踏んで"] },
      { q: "雨に ___ びしょ濡れです。", ans: "降られて", options: ["降られて", "降って", "降らせて", "降らなくて"] },
      { q: "友達に 秘密を ___。", ans: "言われました", options: ["言われました", "言いました", "言わせました", "言って"] },
      { q: "母に 漫画を ___。", ans: "捨てられました", options: ["捨てられました", "捨てました", "捨てさせました", "捨てて"] },
      { q: "弟に パソコンを ___。", ans: "壊されました", options: ["壊されました", "壊しました", "壊させました", "壊して"] },
      { q: "先生に 褒められて、___。", ans: "うれしいです", options: ["うれしいです", "悲しいです", "怒っています", "眠いです"] },
      { q: "蚊に ___ て かゆいです。", ans: "刺され", options: ["刺され", "刺し", "刺させ", "刺さな"] }
    ]
  },
  {
    chapter: 37,
    level: "N4",
    title: "Nominalization",
    desc: "V-no wa / V-no ga",
    patterns: [
      { id: "37.1", label: "～のは / のが", meaning: "Nominalizer 'no'", explanation: "Turns a verb into a noun to make it a subject or object.", examples: [{ jp: "泳ぐのは 体にいいです。", romaji: "Oyogu no wa karada ni ii desu.", en: "Swimming is good for your body." }, { jp: "歌を歌うのが 好きです。", romaji: "Uta o utau no ga suki desu.", en: "I like singing songs." }] }
    ],
    quiz: [
      { q: "テニスを する ___ 好きです。", ans: "のが", options: ["のが", "のは", "のを", "ので"] },
      { q: "花を 育てる ___ 楽しいです。", ans: "のは", options: ["のは", "のが", "のを", "のに"] },
      { q: "一人で 旅行する ___ 好きですか。", ans: "のが", options: ["のが", "のは", "のを", "のに"] },
      { q: "早く 起きる ___ 苦手です。", ans: "のが", options: ["のが", "のは", "のを", "ので"] },
      { q: "朝 シャワーを 浴びる ___ 気持ちいいです。", ans: "のは", options: ["のは", "のが", "のを", "のに"] },
      { q: "日本語を 勉強する ___ 面白いです。", ans: "のは", options: ["のは", "のが", "のを", "のに"] },
      { q: "嘘を つく ___ いけません。", ans: "のは", options: ["のは", "のが", "のを", "のに"] },
      { q: "空を 飛ぶ ___ 夢です。", ans: "のが", options: ["のが", "のは", "のを", "ので"] },
      { q: "絵を 描く ___ 上手です。", ans: "のが", options: ["のが", "のは", "のを", "ので"] },
      { q: "夜道を 一人で 歩く ___ 怖いです。", ans: "のは", options: ["のは", "のが", "のを", "のに"] }
    ]
  },
  {
    chapter: 38,
    level: "N4",
    title: "Reason (Te / Node)",
    desc: "Te / Node",
    patterns: [
      { id: "38.1", label: "～て (Reason)", meaning: "Because...", explanation: "The Te-form can express a cause or reason.", examples: [{ jp: "ニュースを聞いて、びっくりしました。", romaji: "Nyuusu o kiite, bikkuri shimashita.", en: "I was surprised to hear the news." }] },
      { id: "38.2", label: "～ので", meaning: "Because / Since", explanation: "Polite and objective reason marker.", examples: [{ jp: "用事があるので、お先に失礼します。", romaji: "Youji ga aru node, osaki ni shitsurei shimasu.", en: "Since I have something to do, I'll excuse myself first." }] }
    ],
    quiz: [
      { q: "危ない ___、気をつけてください。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "バスが 来なくて、___。", ans: "困りました", options: ["困りました", "困ります", "困る", "困って"] },
      { q: "風邪を 引いた ___ 休みます。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "道が 混んで ___ 遅れました。", ans: "いて", options: ["いて", "いるので", "いるから", "い"] },
      { q: "地震 ___ 山が 崩れました。", ans: "で", options: ["で", "ので", "から", "に"] },
      { q: "難し ___ わかりませんでした。", ans: "くて", options: ["くて", "いので", "いから", "に"] },
      { q: "用事があった ___ いけませんでした。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "気分が 悪い ___、早く 帰ります。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "テストが 終わっ ___ 、安心しました。", ans: "て", options: ["て", "ので", "から", "に"] },
      { q: "静か ___ 、よく 眠れました。", ans: "なので", options: ["なので", "から", "で", "に"] }
    ]
  },
  {
    chapter: 39,
    level: "N4",
    title: "Embedded Questions",
    desc: "Ka / Ka dou ka",
    patterns: [
      { id: "39.1", label: "～か / かどうか", meaning: "Whether / If", explanation: "Used to include a question within a sentence.", examples: [{ jp: "いつ結婚するか、分かりません。", romaji: "Itsu kekkon suru ka, wakarimasen.", en: "I don't know when they will get married." }, { jp: "美味しいかどうか、食べてみます。", romaji: "Oishii ka dou ka, tabete mimasu.", en: "I'll try eating it to see if it's delicious or not." }] }
    ],
    quiz: [
      { q: "何時 ___ 教えてください。", ans: "か", options: ["か", "に", "を", "は"] },
      { q: "間違いが ない ___ 確認してください。", ans: "かどうか", options: ["かどうか", "か", "のに", "ので"] },
      { q: "どこに ___ 忘れました。", ans: "置いたか", options: ["置いたか", "置く", "置いて", "置き"] },
      { q: "気に入る ___ わかりません。", ans: "かどうか", options: ["かどうか", "か", "と", "が"] },
      { q: "誰 ___ 知りません。", ans: "だか", options: ["だか", "か", "は", "に"] },
      { q: "行く ___ まだ 決めていません。", ans: "かどうか", options: ["かどうか", "か", "と", "な"] },
      { q: "何 ___ 忘れました。", ans: "だったか", options: ["だったか", "か", "は", "に"] },
      { q: "間に合う ___ 走ります。", ans: "かどうか", options: ["かどうか", "か", "と", "で"] },
      { q: "誰に ___ 忘れました。", ans: "あげたか", options: ["あげたか", "あげるか", "あげて", "あげ"] },
      { q: "故障 ___ 調べてください。", ans: "かどうか", options: ["かどうか", "か", "の", "を"] }
    ]
  },
  {
    chapter: 40,
    level: "N4",
    title: "Giving & Receiving 2",
    desc: "Itadaku / Yaru / Kureru",
    patterns: [
      { id: "40.1", label: "～ていただく / やる / くださる", meaning: "Humble/Respectful Giving/Receiving", explanation: "Doing something for a superior or inferior person.", examples: [{ jp: "先生に本を読んでいただきました。", romaji: "Sensei ni hon o yonde itadakimashita.", en: "I had the teacher read a book for me (humble)." }] }
    ],
    quiz: [
      { q: "はなさんは 私に プレゼントを ___ ました。", ans: "ください", options: ["ください", "さしあげ", "いただき", "やり"] },
      { q: "私は 先生に 地図を ___ ました。", ans: "書いていただき", options: ["書いていただき", "書いてくださり", "書いてあり", "書いてやり"] },
      { q: "私は 弟に 辞書を ___ ました。", ans: "貸してやり", options: ["貸してやり", "貸していただき", "貸してくださり", "貸してさしあげ"] },
      { q: "先生は 私を パーティーに ___ ました。", ans: "呼んでください", options: ["呼んでください", "呼んでいただき", "呼んでやり", "呼んでさしあげ"] },
      { q: "私は 部長に ネクタイを ___ ました。", ans: "さしあげ", options: ["さしあげ", "いただき", "ください", "やり"] },
      { q: "友達に お土産を ___ ました。", ans: "もらい", options: ["もらい", "あげ", "くれ", "やり"] },
      { q: "私は 犬に 散歩を ___ ました。", ans: "してやり", options: ["してやり", "していただき", "してくださり", "してさしあげ"] },
      { q: "知らない人が 親切に ___ ました。", ans: "してくれ", options: ["してくれ", "してあげ", "してもらい", "してやり"] },
      { q: "母は 妹に 服を ___ ました。", ans: "買ってやり", options: ["買ってやり", "買ってあげ", "買ってくれ", "買ってもらい"] },
      { q: "先生、教えて ___ ませんか。", ans: "いただけ", options: ["いただけ", "くださり", "いただき", "さしあげ"] }
    ]
  },

  {
    chapter: 41,
    level: "N4",
    title: "Purpose & Use",
    desc: "Tame ni / No ni",
    patterns: [
      { id: "41.1", label: "～ために", meaning: "For / In order to", explanation: "Indicates a clear purpose or benefit.", examples: [{ jp: "家族のために 働いています。", romaji: "Kazoku no tame ni hataraite imasu.", en: "I am working for my family." }] },
      { id: "41.2", label: "～のに (Use)", meaning: "For (doing something)", explanation: "Indicates the use or utility of an object.", examples: [{ jp: "このはさみは 花を切るのに 使います。", romaji: "Kono hasami wa hana o kiru no ni tsukaimasu.", en: "This pair of scissors is used for cutting flowers." }] }
    ],
    quiz: [
      { q: "留学する ___ お金を 貯めています。", ans: "ために", options: ["ために", "ので", "のに", "から"] },
      { q: "この 辞書は 漢字を 調べる ___ 便利です。", ans: "のに", options: ["のに", "ために", "ので", "から"] },
      { q: "健康の ___ 毎日 走っています。", ans: "ために", options: ["ために", "のに", "ので", "から"] },
      { q: "引越し ___ 車を 借りました。", ans: "のために", options: ["のために", "のに", "ので", "から"] },
      { q: "お湯を 沸かす ___ これを 使います。", ans: "のに", options: ["のに", "ために", "ので", "から"] },
      { q: "結婚祝の ___ 何が いいですか。", ans: "ために", options: ["ために", "のに", "ので", "から"] },
      { q: "パンを 切る ___ この ナイフを 使います。", ans: "のに", options: ["のに", "ために", "ので", "から"] },
      { q: "家を 買う ___ 仕事を 頑張ります。", ans: "ために", options: ["ために", "のに", "ので", "から"] },
      { q: "計算する ___ 電卓が 必要です。", ans: "のに", options: ["のに", "ために", "ので", "から"] },
      { q: "旅行 ___ カメラを 買いました。", ans: "のために", options: ["のために", "のに", "ので", "から"] }
    ]
  },
  {
    chapter: 42,
    level: "N4",
    title: "Appearance (Looks like)",
    desc: "Sou desu / Sou ni naru",
    patterns: [
      { id: "42.1", label: "～そうです (Appearance)", meaning: "Looks like / It seems", explanation: "Based on visual evidence.", examples: [{ jp: "雨が 降りそうです。", romaji: "Ame ga furisou desu.", en: "It looks like it's going to rain." }, { jp: "この ケーキは 美味しそうです。", romaji: "Kono ke-ki wa oishisou desu.", en: "This cake looks delicious." }] }
    ],
    quiz: [
      { q: "荷物が ___ そうです。", ans: "落ち", options: ["落ち", "落ちる", "落ちた", "落ちて"] },
      { q: "ボタンが ___ そうです。", ans: "取れ", options: ["取れ", "取れる", "取れた", "取れて"] },
      { q: "火が ___ そうです。", ans: "消え", options: ["消え", "消える", "消えた", "消えて"] },
      { q: "今にも 雨が ___ そうです。", ans: "降り出し", options: ["降り出し", "降り出す", "降り出した", "降り出して"] },
      { q: "この 料理は 辛 ___ ですね。", ans: "そう", options: ["そう", "そうに", "ような", "みたい"] },
      { q: "暇 ___ ですね。", ans: "そう", options: ["そう", "そうな", "そうに", "みだい"] },
      { q: "暖か ___ ですね。", ans: "そう", options: ["そう", "そうで", "そうに", "みたい"] },
      { q: "もうすぐ 仕事が ___ そうです。", ans: "終わり", options: ["終わり", "終わる", "終わった", "終わって"] },
      { q: "彼女は 忙し ___ ですね。", ans: "そう", options: ["そう", "そうに", "そうで", "みたいな"] },
      { q: "袋が ___ そうです。", ans: "破れ", options: ["破れ", "破れる", "破れた", "破れて"] }
    ]
  },
  {
    chapter: 43,
    level: "N4",
    title: "Ease & Difficulty",
    desc: "Sugiru / Yasui / Nikui",
    patterns: [
      { id: "43.1", label: "～すぎる", meaning: "Too much / Excess", explanation: "Doing something to an excessive degree.", examples: [{ jp: "お酒を 飲みすぎました。", romaji: "Oshake o nomisugimashita.", en: "I drank too much." }] },
      { id: "43.2", label: "～やすい / にくい", meaning: "Easy / Hard to do", explanation: "Indicates the ease or difficulty of an action.", examples: [{ jp: "書きやすい ペン です。", romaji: "Kakiyasui pen desu.", en: "It's an easy-to-write-with pen." }] }
    ],
    quiz: [
      { q: "食べ ___ ました。", ans: "すぎ", options: ["すぎ", "やすく", "にくく", "たい"] },
      { q: "この 薬は 飲み ___ です。", ans: "やすい", options: ["やすい", "にいく", "すぎ", "たい"] },
      { q: "漢字は 覚え ___ です。", ans: "にくい", options: ["にくい", "やすい", "すぎ", "たい"] },
      { q: "昨夜は 暑 ___ て、寝られませんでした。", ans: "すぎ", options: ["すぎ", "やすく", "にくい", "たら"] },
      { q: "この 靴は 歩き ___ です。", ans: "やすい", options: ["やすい", "にくい", "すぎ", "たく"] },
      { q: "話が 複雑 ___ て、わかりません。", ans: "すぎ", options: ["すぎ", "やすく", "にくい", "ので"] },
      { q: "雨の日は 道が 滑り ___ です。", ans: "やすい", options: ["やすい", "にくい", "すぎ", "たく"] },
      { q: "説明が 詳しく ___ て、よくわかりました。", ans: "なく", options: ["すぎ", "やすく", "にくい", "なく"] },
      { q: "この ガラスは 割れ ___ です。", ans: "やすい", options: ["やすい", "にくい", "すぎ", "そう"] },
      { q: "部屋が 狭 ___ て、困ります。", ans: "すぎ", options: ["すぎ", "やすく", "にくい", "ので"] }
    ]
  },
  {
    chapter: 44,
    level: "N4",
    title: "Conditions (Case)",
    desc: "Baai / No ni",
    patterns: [
      { id: "44.1", label: "～ばあい (場合)", meaning: "In case of / When", explanation: "Used for hypothetical situations or instructions.", examples: [{ jp: "火事の 場合は 119に 電話します。", romaji: "Kaji no baai wa 119 ni denwa shimasu.", en: "In case of fire, call 119." }] }
    ],
    quiz: [
      { q: "領収書が 必要な ___ 言ってください。", ans: "場合は", options: ["場合は", "なかれば", "までに", "ので"] },
      { q: "遅れる ___ 連絡してください。", ans: "場合は", options: ["場合は", "ために", "のに", "ので"] },
      { q: "故障の ___ どこに 連絡しますか。", ans: "場合は", options: ["場合は", "ためには", "のには", "ので"] },
      { q: "会議に 間に合わない ___ 連絡してください。", ans: "場合は", options: ["場合は", "までに", "から", "ので"] },
      { q: "カードを 無くした ___ どうしますか。", ans: "場合は", options: ["場合は", "ために", "なら", "から"] },
      { q: "雨の ___ 中止します。", ans: "場合は", options: ["場合は", "なら", "ので", "から"] },
      { q: "わからない ___ 聞いてください。", ans: "場合は", options: ["場合は", "ために", "も", "ので"] },
      { q: "火事 ___ 階段を 使ってください。", ans: "の場合は", options: ["の場合は", "ためには", "なら", "から"] },
      { q: "道が 混んでいる ___ 遅れます。", ans: "場合は", options: ["場合は", "なら", "ので", "から"] },
      { q: "パスポートを 無くした ___。", ans: "場合は", options: ["場合は", "なら", "たら", "ので"] }
    ]
  },
  {
    chapter: 45,
    level: "N4",
    title: "Aspect (Time points)",
    desc: "Tokoro / Bakari",
    patterns: [
      { id: "45.1", label: "～ところです", meaning: "About to / Just doing", explanation: "Indicates specific stages of an action.", examples: [{ jp: "今から ご飯を 食べる ところです。", romaji: "Ima kara gohan o taberu tokoro desu.", en: "I'm about to eat now." }] },
      { id: "45.2", label: "～たばかり", meaning: "Just happened", explanation: "Something happened very recently (subjective).", examples: [{ jp: "さっき 食べた ばかり です。", romaji: "Sakki tabeta bakari desu.", en: "I just finished eating a moment ago." }] }
    ],
    quiz: [
      { q: "今、ご飯を ___ ところです。", ans: "食べている", options: ["食べている", "食べた", "食べる", "食べて"] },
      { q: "今から 会議が ___ ところです。", ans: "始まる", options: ["始まる", "始まっている", "始まった", "始まり"] },
      { q: "さっき 着いた ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "うちに", "まえに"] },
      { q: "会議は まったく ___ ばかりです。", ans: "始まった", options: ["始まった", "始まる", "始まっている", "始まり"] },
      { q: "今、バスを ___ ところです。", ans: "待っている", options: ["待っている", "待つ", "待った", "待ち"] },
      { q: "これから 外出する ___ です。", ans: "ところ", options: ["ところ", "ばかり", "まえに", "うちに"] },
      { q: "日本に来た ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "まえに", "から"] },
      { q: "今、宿題を ___ ところです。", ans: "している", options: ["している", "した", "する", "し"] },
      { q: "お風呂に 入る ___ です。", ans: "ところ", options: ["ところ", "ばかり", "まえに", "までに"] },
      { q: "先週 買った ___ なのに、壊れました。", ans: "ばかり", options: ["ばかり", "ところ", "まえに", "のに"] }
    ]
  },
  {
    chapter: 46,
    level: "N4",
    title: "Appearance (Seems like)",
    desc: "Sou / You / Mitai",
    patterns: [
      { id: "46.1", label: "～そうです (Hearsay)", meaning: "I heard that...", explanation: "Used to relay information from another source.", examples: [{ jp: "明日は 雨だ そうです。", romaji: "Ashita wa ame da sou desu.", en: "I heard it will rain tomorrow." }] },
      { id: "46.2", label: "～ようです", meaning: "It seems / It looks like", explanation: "Conjecture based on sensory evidence.", examples: [{ jp: "外は 暑い ようです。", romaji: "Soto wa atsui you desu.", en: "It seems hot outside." }] }
    ],
    quiz: [
      { q: "天気予報によると 雨が ___ そうです。", ans: "降る", options: ["降る", "降り", "降って", "降った"] },
      { q: "部長は 忙しい ___ です。", ans: "ようです", options: ["ようです", "そうです", "らしいです", "みたいです"] },
      { q: "隣の 部屋に 誰か ___ ようです。", ans: "いる", options: ["いる", "ある", "いた", "あって"] },
      { q: "彼は お金持ちだ ___ です。", ans: "そうです", options: ["そうです", "ようです", "らしいです", "みたいです"] },
      { q: "この リンゴは 甘い ___ です。", ans: "ようです", options: ["ようです", "そうです", "らしいです", "みたいな"] },
      { q: "うわさでは あの人たちは 離婚する ___ です。", ans: "そうです", options: ["そうです", "ようです", "らしい", "みた"] },
      { q: "誰も いない ___ です。", ans: "ようです", options: ["ようです", "そうです", "らしい", "みて"] },
      { q: "明日は 寒い ___ です。", ans: "そうです", options: ["そうです", "ようです", "らしい", "みだ"] },
      { q: "気分が 悪い ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "合格した ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] }
    ]
  },
  {
    chapter: 47,
    level: "N4",
    title: "Causative Form",
    desc: "V-saseru",
    patterns: [
      { id: "47.1", label: "使役形 (しえきけい)", meaning: "Causative Form", explanation: "Making or letting someone do something.", examples: [{ jp: "子供に 野菜を 食べさせました。", romaji: "Kodomo ni yasai o tabesasemashita.", en: "I made the child eat vegetables." }] }
    ],
    quiz: [
      { q: "先生は 学生に 掃除を ___ ました。", ans: "させ", options: ["させ", "られ", "し", "して"] },
      { q: "母は 弟を 買い物に ___ ました。", ans: "行かせ", options: ["行かせ", "行かされ", "行き", "行っ"] },
      { q: "部長は 山田さんを 出張 ___ ました。", ans: "させ", options: ["させ", "られ", "し", "して"] },
      { q: "子供に 本を ___ ました。", ans: "読ませ", options: ["読ませ", "読まれ", "読み", "読ん"] },
      { q: "彼を 1時間も ___ ました。", ans: "待たせ", options: ["待たせ", "待たされ", "待ち", "待っ"] },
      { q: "妹に ピアノを ___ ました。", ans: "弾かせ", options: ["弾かせ", "弾かれ", "弾き", "弾い"] },
      { q: "子供を 公園で ___ ました。", ans: "遊ばせ", options: ["遊ばせ", "遊ばさ", "遊び", "遊ん"] },
      { q: "社員に 意見を ___ ました。", ans: "言わせ", options: ["言わせ", "言われ", "言い", "言っ"] },
      { q: "息子に 部屋を 掃除 ___ ました。", ans: "させ", options: ["させ", "し", "され", "して"] },
      { q: "彼女を ___ しまいました。", ans: "泣かせて", options: ["泣かせて", "泣かれて", "泣き", "泣いて"] }
    ]
  },
  {
    chapter: 48,
    level: "N4",
    title: "Respectful Honorifics",
    desc: "Sonkeigo",
    patterns: [
      { id: "48.1", label: "尊敬語 (そんけいご)", meaning: "Respectful Language", explanation: "Used to show respect to the person you are talking about.", examples: [{ jp: "社長は もう お帰りに なりました。", romaji: "Shachou wa mou okaeri ni narimashita.", en: "The president has already returned." }] }
    ],
    quiz: [
      { q: "先生、何を ___ か。", ans: "召し上がります", options: ["召し上がります", "食べます", "いただきます", "食べられます"] },
      { q: "どちらから ___ ましたか。", ans: "いらっしゃい", options: ["いらっしゃい", "来", "まいり", "おいでになり"] },
      { q: "お名前を 何と ___ か。", ans: "おっしゃいます", options: ["おっしゃいます", "言います", "申されます", "おっしゃり"] },
      { q: "あの方は 誰ですか。 知って ___ か。", ans: "いらっしゃいます", options: ["いらっしゃいます", "います", "おいでです", "おります"] },
      { q: "明日、会社に ___ か。", ans: "いらっしゃいます", options: ["いらっしゃいます", "行きます", "参ります", "おります"] },
      { q: "先生は まだ お部屋に ___。", ans: "いらっしゃいます", options: ["いらっしゃいます", "います", "まいります", "おります"] },
      { q: "これを ___ か。", ans: "ご覧になります", options: ["ご覧になります", "見ます", "拝見します", "見られます"] },
      { q: "何時まで こちらに ___ か。", ans: "いらっしゃいます", options: ["いらっしゃいます", "います", "まいります", "おいでです"] },
      { q: "あそこに ___ 人は どなたですか。", ans: "いらっしゃる", options: ["いらっしゃる", "いる", "まいった", "おいで"] },
      { q: "奥様は お元気 ___ か。", ans: "でいらっしゃいます", options: ["でいらっしゃいます", "であります", "です", "でおいでです"] }
    ]
  },
  {
    chapter: 49,
    level: "N4",
    title: "Humble Honorifics",
    desc: "Kenjougo",
    patterns: [
      { id: "49.1", label: "謙譲語 (けんじょうご)", meaning: "Humble Language", explanation: "Used to lower yourself to show respect to the other person.", examples: [{ jp: "明日、5時に 参ります。", romaji: "Ashita, goji ni maimasu.", en: "I will come at 5 o'clock (humble)." }] }
    ],
    quiz: [
      { q: "私は 田中と ___。", ans: "申します", options: ["申します", "言います", "おっしゃいます", "まします"] },
      { q: "明日、10時に ___。", ans: "参ります", options: ["参ります", "行きます", "いらっしゃいます", "おいでです"] },
      { q: "私が ご案内 ___。", ans: "します", options: ["します", "いたし", "させ", "なれ"] },
      { q: "お名前を ___ か。", ans: "お伺いして", options: ["お伺いして", "聞いて", "おっしゃって", "申しあげて"] },
      { q: "荷物を お持ち ___ ます。", ans: "いたし", options: ["いたし", "し", "させ", "なれ"] },
      { q: "社長に 本を ___ ました。", ans: "いただき", options: ["いただき", "もらい", "ください", "やり"] },
      { q: "日本に 3年 ___ います。", ans: "おり", options: ["おり", "い", "いらっしゃい", "ある"] },
      { q: "部長に 会いに ___ ました。", ans: "まいり", options: ["まいり", "き", "いらっしゃい", "おいでになり"] },
      { q: "コーヒーを ___ ました。", ans: "いただき", options: ["いただき", "飲み", "ください", "召し上がり"] },
      { q: "明日、また お目にかかり ___。", ans: "たいです", options: ["たいです", "ます", "ましょう", "ましたか"] }
    ]
  },
  {
    chapter: 50,
    level: "N4",
    title: "Review & Advanced Particles",
    desc: "Summary of N4",
    patterns: [
      { id: "50.1", label: "N4 総まとめ", meaning: "N4 Summary", explanation: "Focus on particles like 'node', 'noni', 'baai', etc.", examples: [{ jp: "日本は 綺麗だし、便利なので、また行きたです。", romaji: "Nihon wa kirei dashi, benri nanode, mata ikitai desu.", en: "Japan is beautiful and convenient, so I want to go again." }] }
    ],
    quiz: [
      { q: "この パソコンは 軽くて 持ち ___ です。", ans: "運びやすい", options: ["運びやすい", "運びにくい", "すぎます", "運べます"] },
      { q: "遅くなって ___。", ans: "すみません", options: ["すみません", "お疲れ様", "失礼します", "どうも"] },
      { q: "雨が ___ そうです。", ans: "降り", options: ["降り", "降る", "降った", "降って"] },
      { q: "明日は 休み ___ 嬉しいです。", ans: "なので", options: ["なので", "から", "のに", "でも"] },
      { q: "頑張れば ___ なります。", ans: "上手く", options: ["上手く", "上手に", "上手だ", "上手"] },
      { q: "もう少し 安く ___ なりませんか。", ans: "なり", options: ["なり", "して", "なれ", "させ"] },
      { q: "何を ___ か判りません。", ans: "買えばいい", options: ["買えばいい", "買う", "買った", "買って"] },
      { q: "どこに ___ か教えてください。", ans: "行けばいい", options: ["行けばいい", "行くか", "行っても", "行く"] },
      { q: "もうすぐ 咲き ___ です。", ans: "そう", options: ["そう", "よう", "らしい", "みた"] },
      { q: "使い ___ くて 困っています。", ans: "にく", options: ["にく", "やす", "すぎ", "たい"] }
    ]
  },

  // --- JLPT N3 CORE CURRICULUM ---
  {
    chapter: 51,
    level: "N3",
    title: "ように (so that)",
    desc: "Result ya purpose batane ke liye",
    patterns: [
      { id: "51.1", label: "～ように", meaning: "So that / In order to", explanation: "Describes a goal or result, often with potential or negative verbs.", examples: [{ jp: "日本語が 話せるように、毎日 勉強しています。", romaji: "Nihongo ga hanaseru you ni, mainichi benkyou shite imasu.", en: "I study every day so that I can speak Japanese." }] }
    ],
    quiz: [
      { q: "忘れない ___、メモします。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "聞こえる ___、大きく言いました。", ans: "ように", options: ["ように", "ために", "のに", "ので"] },
      { q: "風邪を 引かない ___。気をつけてください。", ans: "ように", options: ["ように", "ために", "ので", "のに"] },
      { q: "漢字が 書ける ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "皆さんに 聞こえる ___ 話してください。", ans: "ように", options: ["ように", "ために", "まえに", "うちに"] },
      { q: "遅れない ___ 急ぎましょう。", ans: "ように", options: ["ように", "ために", "とおりに", "ことに"] },
      { q: "合格できる ___ 祈っています。", ans: "ように", options: ["ように", "ために", "こと", "のと"] },
      { q: "速く 走れる ___ 練習しています。", ans: "ように", options: ["ように", "ために", "とおりに", "ことに"] },
      { q: "子供でも 分かる ___ 説明しました。", ans: "ように", options: ["ように", "ために", "ので", "のに"] },
      { q: "間に合う ___ タクシーに 乗りました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] }
    ]
  },
  {
    chapter: 52,
    level: "N3",
    title: "ために (because / for)",
    desc: "Strong reason or purpose",
    patterns: [
      { id: "52.1", label: "～ために", meaning: "Because of / For the sake of", explanation: "Indicates a strong reason or a concrete objective.", examples: [{ jp: "試験のために、日本語を 勉強しています。", romaji: "Shiken no tame ni, nihongo o benkyou shite imasu.", en: "I study Japanese for the exam." }] }
    ],
    quiz: [
      { q: "留学する ___ お金を 貯めています。", ans: "ために", options: ["ために", "ように", "のに", "ので"] },
      { q: "家族の ___ 働いています。", ans: "ために", options: ["ために", "ように", "ので", "のに"] },
      { q: "健康の ___ 毎日 歩いています。", ans: "ために", options: ["ために", "ように", "から", "ので"] },
      { q: "引越しの ___ 車を 借りました。", ans: "ために", options: ["ために", "ように", "ので", "から"] },
      { q: "結婚祝の ___ 何が いいですか。", ans: "ために", options: ["ために", "ように", "のと", "のに"] },
      { q: "将来 ___ 貯金しています。", ans: "のために", options: ["のために", "に", "を", "は"] },
      { q: "出張の ___ 航空券を 買いました。", ans: "ために", options: ["ために", "ように", "ので", "から"] },
      { q: "家を 買う ___ 仕事を 頑張ります。", ans: "ために", options: ["ために", "ように", "ので", "から"] },
      { q: "平和の ___ 祈りましょう。", ans: "ために", options: ["ために", "に", "を", "は"] },
      { q: "子供の ___ 頑張ります。", ans: "ために", options: ["ために", "ように", "ので", "から"] }
    ]
  },
  {
    chapter: 53,
    level: "N3",
    title: "のに (although / despite)",
    desc: "Unexpected result",
    patterns: [
      { id: "53.1", label: "～のに", meaning: "Even though / Despite", explanation: "Expresses a result that contradicts the expected outcome.", examples: [{ jp: "雨なのに、出かけます。", romaji: "Ame nanoni, dekakemasu.", en: "Even though it’s raining, I will go out." }] }
    ],
    quiz: [
      { q: "薬を飲んだ ___、よくなりません。", ans: "のに", options: ["のに", "ので", "から", "ので"] },
      { q: "勉強した ___、不合格でした。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "日曜日 ___、働いています。", ans: "なのに", options: ["なのに", "ので", "から", "けど"] },
      { q: "約束した ___、彼は 来ませんでした。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "安い ___、美味しいです。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "春 ___、寒いです。", ans: "なのに", options: ["なのに", "ので", "から", "けど"] },
      { q: "近い ___、歩きません。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "若い ___、元気がないです。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "注意した ___、また 間違えました。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "電話した ___、誰も 出ませんでした。", ans: "のに", options: ["のに", "ので", "から", "けど"] }
    ]
  },
  {
    chapter: 54,
    level: "N3",
    title: "ばかり (just did / only)",
    desc: "Recent action or repetition",
    patterns: [
      { id: "54.1", label: "～ばかり", meaning: "Just finished / Only", explanation: "Indicates that an action has just been completed or that something is the only thing done.", examples: [{ jp: "食べたばかりです。", romaji: "Tabeta bakari desu.", en: "I just ate." }] }
    ],
    quiz: [
      { q: "さっき 着いた ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "まえに", "うちに"] },
      { q: "日本に来た ___ です。", ans: "ばかり", options: ["ばかり", "ところ", "まえに", "から"] },
      { q: "テレビ ___ 見ています。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] },
      { q: "ゲーム ___ してはいけません。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] },
      { q: "買った ___ なのに、壊れました。", ans: "ばかり", options: ["ばかり", "ところ", "のに", "ので"] },
      { q: "肉 ___ 食べないでください。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] },
      { q: "寝た ___ なのに、もう起きました。", ans: "ばかり", options: ["ばかり", "ところ", "のに", "から"] },
      { q: "文句 ___ 言っています。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] },
      { q: "嘘 ___ ついています。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] },
      { q: "泣いて ___ います。", ans: "ばかり", options: ["ばかり", "だけ", "しか", "も"] }
    ]
  },
  {
    chapter: 55,
    level: "N3",
    title: "てしまう (finish / regret)",
    desc: "Completion or regret",
    patterns: [
      { id: "55.1", label: "～てしまう", meaning: "To do completely / To regret", explanation: "Expresses completion of an action or regret that it happened.", examples: [{ jp: "宿題を 忘れてしまいました。", romaji: "Shukudai o wasurete shimaimashita.", en: "I unfortunately forgot my homework." }] }
    ],
    quiz: [
      { q: "パスポートを 無くして ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "全部 食べて ___ ました。", ans: "しまい", options: ["しまい", "おき", "み", "あり"] },
      { q: "宿題を 忘れて ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "電車を 乗り違えて ___ ました。", ans: "しまい", options: ["しまい", "あり", "み", "おき"] },
      { q: "コーヒーを こぼして ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "財布を 落として ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "雨に 降られて ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "風邪を 引いて ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "コップを 割って ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "バスが 行って ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] }
    ]
  },
  {
    chapter: 56,
    level: "N3",
    title: "そうだ (looks like)",
    desc: "Visual judgment",
    patterns: [
      { id: "56.1", label: "～そうです (Appearance)", meaning: "Looks like / It seems", explanation: "Based on visual evidence.", examples: [{ jp: "雨が 降りそうです。", romaji: "Ame ga furisou desu.", en: "It looks like it'll rain." }] }
    ],
    quiz: [
      { q: "この ケーキは 美味し ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "荷物が 落ち ___ ですよ。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "楽し ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "雨が 降り ___ です。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "忙し ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "暇 ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "寒く ___ ですね。", ans: "なさそう", options: ["なさそう", "なさみたい", "なさそうに", "なくそう"] },
      { q: "よさ ___ ですね。", ans: "そう", options: ["そう", "すぎ", "みたい", "らしい"] },
      { q: "この お菓子、甘 ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "ボタンが 取れ ___ ですよ。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] }
    ]
  },
  {
    chapter: 57,
    level: "N3",
    title: "らしい (hearsay / typical)",
    desc: "Information from others",
    patterns: [
      { id: "57.1", label: "～らしい", meaning: "It seems / Typical of", explanation: "Based on information from others or characteristic behavior.", examples: [{ jp: "田中さんは 来ないらしいです。", romaji: "Tanaka-san wa konai rashii desu.", en: "I heard Tanaka won’t come." }] }
    ],
    quiz: [
      { q: "明日は 雨 ___ です。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "あの人は 日本人 ___ です。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "うわさでは 彼は 結婚する ___ です。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "今日は 春 ___ 暖かいですね。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "学生 ___ 学生です。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "あの映画は 面白い ___ ですよ。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "部長は 忙しい ___ です。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "京都は 寒い ___ ですね。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "この店、美味しい ___ ですよ。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] },
      { q: "休みの ___ 休みがないです。", ans: "らしい", options: ["らしい", "みたい", "そう", "だ"] }
    ]
  },
  {
    chapter: 58,
    level: "N3",
    title: "そうだ (hearsay)",
    desc: "Reported information",
    patterns: [
      { id: "58.1", label: "～そうです (Hearsay)", meaning: "I heard that...", explanation: "Relaying information learned from another source.", examples: [{ jp: "ニュースによると、台風が 来るそうです。", romaji: "Nyuusu ni yoru to, taifu ga kuru sou desu.", en: "According to the news, a typhoon is coming." }] }
    ],
    quiz: [
      { q: "天気予報によると 雨が ___ そうです。", ans: "降る", options: ["降る", "降り", "降って", "降った"] },
      { q: "うわさでは あの人たちは 離婚 ___ そうです。", ans: "した", options: ["した", "する", "して", "し"] },
      { q: "彼は お金持ち ___ そうです。", ans: "だ", options: ["だ", "の", "な", "に"] },
      { q: "この リンゴ、甘い ___ です。", ans: "そう", options: ["そう", "よう", "みたい", "らしい"] },
      { q: "先生は まだ 若い ___ です。", ans: "そう", options: ["そう", "よう", "みたい", "らしい"] },
      { q: "テレビで 言っていましたが、明日は 休み ___ そうです。", ans: "だ", options: ["だ", "に", "の", "な"] },
      { q: "合格した ___ ですね。おめでとう。", ans: "そう", options: ["そう", "よう", "みたい", "らしい"] },
      { q: "駅は 遠くない ___ です。", ans: "そう", options: ["そう", "よう", "みたい", "らしい"] },
      { q: "あのアニメ、面白い ___ ですよ。", ans: "そう", options: ["そう", "よう", "みたい", "らしい"] },
      { q: "メールによると 辞める ___ そうだ。", ans: "らしい", options: ["らしい", "つもりだ", "そうだ", "みたいだ"] }
    ]
  },
  {
    chapter: 59,
    level: "N3",
    title: "ようだ／みたいだ (seems like)",
    desc: "Guess / appearance",
    patterns: [
      { id: "59.1", label: "～ようだ / みたいだ", meaning: "It seems / It looks like", explanation: "Expressing a guess based on sensory evidence.", examples: [{ jp: "雨が 降るようです。", romaji: "Ame ga furu you desu.", en: "It seems it will rain." }] }
    ],
    quiz: [
      { q: "隣の部屋に 誰か ___ ようです。", ans: "いる", options: ["いる", "ある", "いた", "あって"] },
      { q: "気分が 悪い ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "合格した ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "誰も いない ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みて"] },
      { q: "この店は 美味しい ___ ですよ。", ans: "みたい", options: ["みたい", "そう", "らしい", "よう"] },
      { q: "泥棒 ___ 格好です。", ans: "みたい", options: ["みたい", "よう", "そう", "らしい"] },
      { q: "外、暑い ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "故障した ___ です。動きません。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "彼女は 忙しい ___ ですよ。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "誰かが 来た ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] }
    ]
  },
  {
    chapter: 60,
    level: "N3",
    title: "ことにする (decide)",
    desc: "Speaker’s decision",
    patterns: [
      { id: "60.1", label: "～ことにする", meaning: "Decide to do", explanation: "Indicates a decision made by the speaker.", examples: [{ jp: "毎日 走ることにしました。", romaji: "Mainichi hashiru koto ni shimashita.", en: "I decided to run every day." }] }
    ],
    quiz: [
      { q: "今日から 甘いものを 食べない ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "結婚しても 仕事を 続ける ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "明日から 早く 起きる ___ します。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "旅行に 行く ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "タバコを やめる ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "車を 買わない ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "自分を 信じる ___ します。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "頑張る ___ します。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "一人で 頑張る ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "お酒を 飲まない ___ しました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] }
    ]
  },
  {
    chapter: 61,
    level: "N3",
    title: "ことになる (be decided)",
    desc: "Decision by situation or rule",
    patterns: [
      { id: "61.1", label: "～ことになる", meaning: "It has been decided that...", explanation: "Indicates a decision made by an outside force, situation, or rule.", examples: [{ jp: "来月 日本へ 行くことになりました。", romaji: "Raigetsu Nihon e iku koto ni narimashita.", en: "It has been decided that I’ll go to Japan next month." }] }
    ],
    quiz: [
      { q: "来月から 給料が 上がる ___ なりました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "明日、部長に 会う ___ なっています。", ans: "ことに", options: ["ことに", "ように", "うちに", "まえに"] },
      { q: "この部屋では タバコを 吸わない ___ なっています。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "結婚する ___ なりました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "転勤する ___ なりました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "法律で 決まっている ___ なっています。", ans: "ことに", options: ["ことに", "ように", "うちに", "おりに"] },
      { q: "来週から テストが 始まる ___ なりました。", ans: "ことに", options: ["ことに", "ように", "ために", "とおりに"] },
      { q: "明日 休み ___ なりました。", ans: "ことに", options: ["ことに", "ように", "ために", "ので"] },
      { q: "ここで 靴を 脱ぐ ___ なっています。", ans: "ことに", options: ["ことに", "ように", "ために", "うちに"] },
      { q: "中止に する ___ なりました。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] }
    ]
  },
  {
    chapter: 62,
    level: "N3",
    title: "ところ (timing)",
    desc: "Just before / during / after",
    patterns: [
      { id: "62.1", label: "～ところ", meaning: "Point in time / Just about to", explanation: "Indicates the specific stage of an action (beginning, middle, or end).", examples: [{ jp: "今 出かけるところです。", romaji: "Ima dekakeru tokoro desu.", en: "I’m just about to go out." }] }
    ],
    quiz: [
      { q: "今、ご飯を ___ ところです。", ans: "食べている", options: ["食べている", "食べた", "食べる", "食べて"] },
      { q: "ちょうど 終わった ___ です。", ans: "ところ", options: ["ところ", "ばかり", "まえに", "うちに"] },
      { q: "今から 会議が ___ ところです。", ans: "始まる", options: ["始まる", "始まっている", "始まった", "始まり"] },
      { q: "さっき 着いた ___ です。", ans: "ところ", options: ["ところ", "ばかり", "うちに", "まえに"] },
      { q: "今、宿題を ___ ところです。", ans: "している", options: ["している", "した", "する", "し"] },
      { q: "これから 外出する ___ です。", ans: "ところ", options: ["ところ", "ばかり", "まえに", "うちに"] },
      { q: "今、バスを ___ ところです。", ans: "待っている", options: ["待っている", "待つ", "待った", "待ち"] },
      { q: "お風呂に 入る ___ です。", ans: "ところ", options: ["ところ", "ばかり", "まえに", "までに"] },
      { q: "ちょうど 掃除が 終わった ___ です。", ans: "ところ", options: ["ところ", "ばかり", "うちに", "まえに"] },
      { q: "これから 勉強 ___ ところです。", ans: "する", options: ["する", "している", "した", "し"] }
    ]
  },
  {
    chapter: 63,
    level: "N3",
    title: "ながら (while)",
    desc: "Two actions at same time",
    patterns: [
      { id: "63.1", label: "～ながら", meaning: "While doing...", explanation: "Describes two actions happening simultaneously by the same person.", examples: [{ jp: "音楽を 聞きながら 勉強します。", romaji: "Ongaku o kikinagara benkyou shimasu.", en: "I study while listening to music." }] }
    ],
    quiz: [
      { q: "テレビを ___ ご飯を 食べます。", ans: "見ながら", options: ["見ながら", "見て", "見れば", "見ると"] },
      { q: "歩き ___ 話しましょう。", ans: "ながら", options: ["ながら", "つつ", "こと", "から"] },
      { q: "ガムを ___ 運転してはいけません。", ans: "噛みながら", options: ["噛みながら", "噛んで", "噛むと", "噛めば"] },
      { q: "働き ___ 大学に 通っています。", ans: "ながら", options: ["しながら", "ながら", "つつ", "ので"] },
      { q: "お茶を ___ 待ちましょう。", ans: "飲みながら", options: ["飲みながら", "飲んで", "飲むと", "飲めば"] },
      { q: "辞書を ___ 本を 読みます。", ans: "引きながら", options: ["引きながら", "引いて", "引くと", "引けば"] },
      { q: "考え ___ 書いてください。", ans: "ながら", options: ["ながら", "つつ", "こと", "から"] },
      { q: "歌を ___ 料理します。", ans: "歌いながら", options: ["歌いながら", "歌って", "歌うと", "歌えば"] },
      { q: "コーヒーを ___ おしゃべりしましょう。", ans: "飲みながら", options: ["飲みながら", "飲んで", "飲むと", "飲めば"] },
      { q: "笑い ___ 話しました。", ans: "ながら", options: ["ながら", "つつ", "こと", "から"] }
    ]
  },
  {
    chapter: 64,
    level: "N3",
    title: "ば / たら / と (condition)",
    desc: "If conditions",
    patterns: [
      { id: "64.1", label: "～ば / ～たら / ～と", meaning: "If / When / Whenever", explanation: "Used to express different types of conditional relationships.", examples: [{ jp: "雨が 降ったら、行きません。", romaji: "Ame ga futtara, ikimasen.", en: "If it rains, I won’t go." }] }
    ],
    quiz: [
      { q: "安ければ ___。", ans: "買います", options: ["買います", "買う", "買った", "買って"] },
      { q: "時間が ___ 会いましょう。", ans: "あったら", options: ["あったら", "あれば", "あると", "ある"] },
      { q: "春に ___ 桜が 咲きます。", ans: "なると", options: ["なると", "なれば", "なったら", "なり"] },
      { q: "嫌 ___ やめてもいいですよ。", ans: "なら", options: ["なら", "だったら", "であれば", "だと"] },
      { q: "ボタンを ___ 切符が 出ます。", ans: "押すと", options: ["押すと", "押せば", "押したら", "押し"] },
      { q: "行け ___ 行きます。", ans: "れば", options: ["れば", "たら", "と", "なら"] },
      { q: "暇 ___ 行きます。", ans: "だったら", options: ["だったら", "なら", "であれば", "だと"] },
      { q: "薬を ___ よくなります。", ans: "飲めば", options: ["飲めば", "飲んだら", "飲むと", "飲む"] },
      { q: "先生に ___ わかりますよ。", ans: "聞けば", options: ["聞けば", "聞いたら", "聞くと", "聞く"] },
      { q: "見 ___ わかります。", ans: "れば", options: ["れば", "たら", "と", "なら"] }
    ]
  },
  {
    chapter: 65,
    level: "N3",
    title: "ようになる (change over time)",
    desc: "Ability / habit change",
    patterns: [
      { id: "65.1", label: "～ようになる", meaning: "To become able to / To reach a state where...", explanation: "Indicates a gradual change in ability or habit.", examples: [{ jp: "日本語が 話せるようになりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", en: "I became able to speak Japanese." }] }
    ],
    quiz: [
      { q: "やっと 泳げる ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "最近、眼鏡を かけない ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "子供が 一人で 歩ける ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "日本に来て 日本料理が 食べられる ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "早く 起きられる ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "自分で ニュースが 読める ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "前より 上手に 歌える ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "一人で 行ける ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "漢字が 1000個 覚えられる ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "お酒を 飲まない ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] }
    ]
  },
  {
    chapter: 66,
    level: "N3",
    title: "ようにする (make effort)",
    desc: "Conscious effort",
    patterns: [
      { id: "66.1", label: "～ようにする", meaning: "To make an effort to / To try to", explanation: "Indicates a conscious effort to establish a habit or perform an action.", examples: [{ jp: "毎日 勉強するようにしています。", romaji: "Mainichi benkyou suru you ni shite imasu.", en: "I try to study every day." }] }
    ],
    quiz: [
      { q: "野菜を 食べる ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "寝る前に スマホを 見ない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "毎日 30分 歩く ___ しましょう。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "甘いものを 食べすぎない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "遅れない ___ してください。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "忘れ物を しない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "なるべく 自分で 作る ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "安すぎるものは 買わない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "エレベーターを 使わない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "漢字を 書く ___ 練習しています。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] }
    ]
  },
  {
    chapter: 67,
    level: "N3",
    title: "しか～ない (only)",
    desc: "Limited option",
    patterns: [
      { id: "67.1", label: "～しか～ない", meaning: "Only (but usually implies not enough)", explanation: "Used with a negative verb to indicate that something is the only option or amount.", examples: [{ jp: "100円しか ありません。", romaji: "Hyakuen shika arimasen.", en: "I have only 100 yen." }] }
    ],
    quiz: [
      { q: "ひらがな ___ 書けません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "日曜日 ___ 休みがありません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "昨日、3時間 ___ 寝ていません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "冷蔵庫に 水 ___ ありません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "一人 ___ 来ませんでした。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "これ ___ 持っていません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "英語 ___ 分かりません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "10分 ___ ありません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "アニメ ___ 見ません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "パン ___ 食べませんでした。", ans: "しか", options: ["しか", "だけ", "も", "は"] }
    ]
  },
  {
    chapter: 68,
    level: "N3",
    title: "さえ (even)",
    desc: "Extreme example",
    patterns: [
      { id: "68.1", label: "～さえ", meaning: "Even...", explanation: "Emphasizes that if something extreme is true, then other things are naturally true as well.", examples: [{ jp: "名前さえ 書けば いいです。", romaji: "Namae sae kakeba ii desu.", en: "You just need to write your name (even just the name is fine)." }] }
    ],
    quiz: [
      { q: "ひらがな ___ 書けない。", ans: "さえ", options: ["さえ", "こそ", "ばかり", "だけ"] },
      { q: "自分の名前 ___ 忘れてしまった。", ans: "さえ", options: ["さえ", "こそ", "ばかり", "から"] },
      { q: "忙しくて、寝る時間 ___ ない。", ans: "さえ", options: ["さえ", "まで", "から", "ので"] },
      { q: "子供 ___ 知っている。", ans: "さえ", options: ["さえ", "こそ", "ばかり", "から"] },
      { q: "歩くこと ___ できない。", ans: "さえ", options: ["さえ", "まで", "から", "ので"] },
      { q: "これ ___ あれば 大丈夫です。", ans: "さえ", options: ["さえ", "こそ", "まで", "から"] },
      { q: "雨 ___ 降らなければ 行きます。", ans: "さえ", options: ["さえ", "こそ", "まで", "から"] },
      { q: "一口 ___ 食べませんでした。", ans: "さえ", options: ["さえ", "まで", "から", "ので"] },
      { q: "先生 ___ 分からない 難しい 問題だ。", ans: "さえ", options: ["さえ", "まで", "から", "ので"] },
      { q: "水 ___ 洗えば 綺麗に なります。", ans: "さえ", options: ["さえ", "まで", "から", "ので"] }
    ]
  },
  {
    chapter: 69,
    level: "N3",
    title: "など (etc.)",
    desc: "Give examples",
    patterns: [
      { id: "69.1", label: "～など", meaning: "Etc. / And so on", explanation: "Used to give examples among many possibilities.", examples: [{ jp: "本や ノートなどを 買いました。", romaji: "Hon ya nooto nado o kaimashita.", en: "I bought books, notebooks, etc." }] }
    ],
    quiz: [
      { q: "りんごや バナナ ___ を 食べます。", ans: "など", options: ["など", "ばかり", "しか", "さえ"] },
      { q: "テニスや サッカー ___ が 好きです。", ans: "など", options: ["など", "くらい", "ほど", "まで"] },
      { q: "日曜日や 祝日 ___ は 休みです。", ans: "など", options: ["など", "まで", "から", "に"] },
      { q: "カバンや 靴 ___ を 売っています。", ans: "など", options: ["など", "ばかり", "さえ", "から"] },
      { q: "映画や 音楽 ___ に 興味があります。", ans: "など", options: ["など", "ほど", "まで", "に"] },
      { q: "薬や 包帯 ___ を 準備してください。", ans: "など", options: ["など", "まで", "に", "を"] },
      { q: "日本や 韓国 ___ に 行きました。", ans: "など", options: ["など", "ばかり", "さえ", "まで"] },
      { q: "ペンや 紙 ___ を 貸してください。", ans: "など", options: ["など", "を", "に", "は"] },
      { q: "ドラマや アニメ ___ を 見ます。", ans: "など", options: ["など", "ばかり", "しか", "まで"] },
      { q: "お茶や コーヒー ___ を 飲みましょう。", ans: "など", options: ["など", "ばかり", "さえ", "のみ"] }
    ]
  },
  {
    chapter: 70,
    level: "N3",
    title: "について (about)",
    desc: "Topic",
    patterns: [
      { id: "70.1", label: "～について", meaning: "About / Regarding", explanation: "Used to introduce a topic or subject of study/discussion.", examples: [{ jp: "日本文化について 勉強しています。", romaji: "Nihon bunka ni tsuite benkyou shite imasu.", en: "I’m studying about Japanese culture." }] }
    ],
    quiz: [
      { q: "将来の夢 ___ 話してください。", ans: "について", options: ["について", "にとって", "によって", "にわたって"] },
      { q: "この問題 ___ どう思いますか。", ans: "について", options: ["について", "にとって", "に対して", "に応えて"] },
      { q: "新しい仕事 ___ 調べています。", ans: "について", options: ["について", "によって", "にとって", "につれて"] },
      { q: "先生から 日本の歴史 ___ 聞きました。", ans: "について", options: ["について", "にとって", "に関わって", "に際して"] },
      { q: "環境問題 ___ 記事を 読みました。", ans: "について", options: ["について", "にとって", "に向けて", "に従って"] },
      { q: "彼のこと ___ 何か 聞きましたか。", ans: "について", options: ["について", "を", "に", "は"] },
      { q: "最近の ニュース ___ 話しましょう。", ans: "について", options: ["について", "に", "を", "は"] },
      { q: "日本語の助詞 ___ 質問があります。", ans: "について", options: ["について", "に", "を", "は"] },
      { q: "今回のイベント ___ 詳細を教えてください。", ans: "について", options: ["について", "の", "に", "を"] },
      { q: "自分の 家族 ___ 紹介してください。", ans: "について", options: ["について", "を", "に", "は"] }
    ]
  },
  {
    chapter: 71,
    level: "N3",
    title: "によって (depending on)",
    desc: "Cause / difference",
    patterns: [
      { id: "71.1", label: "～によって", meaning: "Depending on / By / Due to", explanation: "Indicates a cause, a creator, or variation depending on the subject.", examples: [{ jp: "人によって 考え方が 違います。", romaji: "Hito ni yotte kangaekata ga chigaimasu.", en: "Thinking differs depending on the person." }] }
    ],
    quiz: [
      { q: "国 ___ 習慣が 違います。", ans: "によって", options: ["によって", "にとって", "について", "に対して"] },
      { q: "このビルは 有名な 建築家 ___ 設計されました。", ans: "によって", options: ["によって", "にとって", "について", "に対して"] },
      { q: "台風 ___ 木が 倒れました。", ans: "によって", options: ["によって", "について", "にとって", "に関わって"] },
      { q: "物価は 年 ___ 変わります。", ans: "によって", options: ["によって", "にとって", "に対して", "に際して"] },
      { q: "不注意 ___ 事故が 起きました。", ans: "によって", options: ["によって", "について", "にとって", "に従って"] },
      { q: "人 ___ 好きな 食べ物が 違います。", ans: "によって", options: ["によって", "に", "を", "は"] },
      { q: "天気 ___ 中止に なるかも しれません。", ans: "によって", options: ["によって", "に", "を", "は"] },
      { q: "この本は 彼 ___ 書かれました。", ans: "によって", options: ["によって", "に", "を", "は"] },
      { q: "法律 ___ 決まっています。", ans: "によって", options: ["によって", "に", "を", "は"] },
      { q: "インターネット ___ 情報が 広まりました。", ans: "によって", options: ["によって", "に", "を", "は"] }
    ]
  },
  {
    chapter: 72,
    level: "N3",
    title: "おかげで / せいで",
    desc: "Reason (good/bad)",
    patterns: [
      { id: "72.1", label: "～おかげで / ～せいで", meaning: "Thanks to / Because of (bad result)", explanation: "Used to express reason for a positive (okage de) or negative (sei de) result.", examples: [{ jp: "雨のせいで 行けませんでした。", romaji: "Ame no sei de ikemasen deshita.", en: "I couldn’t go because of the rain." }] }
    ],
    quiz: [
      { q: "先生の ___ 合格できました。", ans: "おかげで", options: ["おかげで", "せいで", "ために", "のに"] },
      { q: "渋滞の ___ 遅れました。", ans: "せいで", options: ["せいで", "おかげで", "ために", "から"] },
      { q: "薬を飲んだ ___ すっかり よくなりました。", ans: "おかげで", options: ["おかげで", "せいで", "しあわせで", "ので"] },
      { q: "暑い ___ 寝られません。", ans: "せいで", options: ["せいで", "おかげで", "ために", "から"] },
      { q: "あなたが 手伝ってくれた ___ 助かりました。", ans: "おかげで", options: ["おかげで", "せいで", "ために", "のに"] },
      { q: "不注意の ___ ケガをしました。", ans: "せいで", options: ["せいで", "おかげで", "ために", "から"] },
      { q: "日本に来た ___ たくさん 友達が できました。", ans: "おかげで", options: ["おかげで", "せいで", "ために", "のに"] },
      { q: "飲みすぎた ___ 頭が 痛いです。", ans: "せいで", options: ["せいで", "おかげで", "ために", "から"] },
      { q: "いい 先生に 出会えた ___ 日本語が 好きに なりました。", ans: "おかげで", options: ["おかげで", "せいで", "ために", "のに"] },
      { q: "景気が 悪い ___ 仕事が 見つかりません。", ans: "せいで", options: ["せいで", "おかげで", "ために", "から"] }
    ]
  },
  {
    chapter: 73,
    level: "N3",
    title: "ほど (degree)",
    desc: "Degree / comparison",
    patterns: [
      { id: "73.1", label: "～ほど", meaning: "To the extent / Not as much as", explanation: "Indicates an extreme degree or compares things (negative sentences).", examples: [{ jp: "歩けないほど 疲れました。", romaji: "Arukenai hodo tsukaremashita.", en: "I was so tired I couldn’t walk." }] }
    ],
    quiz: [
      { q: "去年 ___ 暑くないです。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "死ぬ ___ 疲れました。", ans: "ほど", options: ["ほど", "くらい", "まで", "から"] },
      { q: "これ ___ 美味しいものは ありません。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "寝られない ___ 痛いです。", ans: "ほど", options: ["ほど", "くらい", "まで", "から"] },
      { q: "忘れられない ___ 思い出です。", ans: "ほど", options: ["ほど", "くらい", "まで", "から"] },
      { q: "言葉に できない ___ 嬉しいです。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "山 ___ 高い ビルだ。", ans: "ほど", options: ["ほど", "くらい", "まで", "から"] },
      { q: "昨日 ___ 寒くないですよ。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "泣きたい ___ 悲しいです。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "信じられない ___ 綺麗です。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] }
    ]
  },
  {
    chapter: 74,
    level: "N3",
    title: "てから (after doing)",
    desc: "Sequence",
    patterns: [
      { id: "74.1", label: "～てから", meaning: "Since doing / After doing", explanation: "Indicates that an action or state started after a specific event.", examples: [{ jp: "日本へ 来てから、日本語を 勉強しました。", romaji: "Nihon e kite kara, nihongo o benkyou shimashita.", en: "After coming to Japan, I studied Japanese." }] }
    ],
    quiz: [
      { q: "手を 洗って ___ 食べましょう。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "大学を 卒業して ___ 働きます。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "日本に来て ___ 3年に なります。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "シャワーを 浴びて ___ 寝ます。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "映画を 見て ___ 帰りましょう。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "仕事を 終えて ___ 飲みに行きます。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "考えて ___ 話してください。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "薬を 飲んで ___ 休みます。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "よく 読んで ___ サインしてください。", ans: "から", options: ["から", "ので", "のに", "まえに"] },
      { q: "タバコを やめて ___ 体調が いいです。", ans: "から", options: ["から", "ので", "のに", "まえに"] }
    ]
  },
  {
    chapter: 75,
    level: "N3",
    title: "うちに (while / before change)",
    desc: "Limited time",
    patterns: [
      { id: "75.1", label: "～うちに", meaning: "While / Before a change happens", explanation: "Indicates an action should be done while a certain state or condition exists.", examples: [{ jp: "若いうちに 勉強したほうがいいです。", romaji: "Wakai uchi ni benkyou shita hou ga ii desu.", en: "You should study while you’re young." }] }
    ],
    quiz: [
      { q: "忘れない ___ メモしてください。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "明るい ___ 帰りましょう。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "温かい ___ 食べてください。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "元気な ___ 旅行に 行きたいです。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "独身の ___ たくさん 遊びなさい。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "雨が 降らない ___ 帰りましょう。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "若いうちに ___ ほうがいいです。", ans: "勉強した", options: ["勉強した", "勉強する", "勉強して", "勉強し"] },
      { q: "今の ___ 準備しておきましょう。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "子供が 寝ている ___ 掃除します。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] },
      { q: "日本に いる ___ 富士山に 登りたいです。", ans: "うちに", options: ["うちに", "までに", "まえに", "ときに"] }
    ]
  },
  {
    chapter: 76,
    level: "N2",
    title: "ことに (it is ~ that…)",
    desc: "Speaker's strong feeling",
    patterns: [
      { id: "76.1", label: "～ことに", meaning: "It is ~ that...", explanation: "Used to emphasize the speaker's emotional state or reaction to a fact.", examples: [{ jp: "うれしいことに、試験に 合格しました。", romaji: "Ureshii koto ni, shiken ni goukaku shimashita.", en: "It is happy (to my joy) that I passed the exam." }] }
    ],
    quiz: [
      { q: "驚いた ___、彼は もう 帰ったそうだ。", ans: "ことに", options: ["ことに", "ように", "ために", "おりに"] },
      { q: "残念な ___、雨で 中止に なりました。", ans: "ことに", options: ["ことに", "うちに", "まえに", "ばかりに"] },
      { q: "幸せな ___、家族全員 元気です。", ans: "ことに", options: ["ことに", "どころか", "ものなら", "おかげで"] },
      { q: "困った ___、財布を 忘れてしまった。", ans: "ことに", options: ["ことに", "ばかりに", "さえ", "こそ"] },
      { q: "不思議な ___、同じ 夢を 見た。", ans: "ことに", options: ["ことに", "ままに", "ついでに", "わりに"] },
      { q: "ありがたい ___、皆さんが 助けてくれました。", ans: "ことに", options: ["ことに", "あまり", "からには", "うえに"] },
      { q: "悲しい ___、飼っていた 犬が 死にました。", ans: "ことに", options: ["ことに", "うちに", "かわりに", "うえで"] },
      { q: "幸運な ___、宝くじが 当たった。", ans: "ことに", options: ["ことに", "にしたがって", "に際して", "において"] },
      { q: "腹立たしい ___、また 嘘を つかれた。", ans: "ことに", options: ["ことに", "末に", "あげく", "ばかり"] },
      { q: "面白い ___、彼らも 同じ 意見だった。", ans: "ことに", options: ["ことに", "反面", "とともに", "次第"] }
    ]
  },
  {
    chapter: 77,
    level: "N2",
    title: "ことから (because / from fact)",
    desc: "The reason or origin",
    patterns: [
      { id: "77.1", label: "～ことから", meaning: "Because / From the fact that", explanation: "Indicates a reason based on a fact or the origin of a name/situation.", examples: [{ jp: "雨が 降っていることから、試合は 中止です。", romaji: "Ame ga futte iru koto kara, shiai wa chuushi desu.", en: "Because it’s raining (based on that fact), the match is canceled." }] }
    ],
    quiz: [
      { q: "窓が 割れている ___、泥棒が 入ったと わかった。", ans: "ことから", options: ["ことから", "ことに", "ばかりに", "おかげで"] },
      { q: "声が 似ている ___、親子だと 思われた。", ans: "ことから", options: ["ことから", "反面", "に連れて", "に際して"] },
      { q: "道が 濡れている ___、雨が 降ったことが わかる。", ans: "ことから", options: ["ことから", "うえに", "がてら", "つつ"] },
      { q: "名前が 同じ ___、間違えられた。", ans: "ことから", options: ["ことから", "ばかり", "こそ", "どころか"] },
      { q: "富士山が 見える ___、この町は 富士見町と 呼ばれる。", ans: "ことから", options: ["ことから", "ものなら", "わけだ", "どころか"] },
      { q: "表情が 暗い ___、何かあったと 察した。", ans: "ことから", options: ["ことから", "わりに", "のみならず", "に限り"] },
      { q: "信号が 赤だった ___、事故が 起きた。", ans: "ことから", options: ["ことから", "どころか", "ばかりか", "にしたら"] },
      { q: "足跡が ある ___、誰か来たことが わかる。", ans: "ことから", options: ["ことから", "に加えて", "を除いて", "を通して"] },
      { q: "物価が 上がった ___、生活が 苦しくなった。", ans: "ことから", options: ["ことから", "ものの", "のみか", "につき"] },
      { q: "彼が 遅刻した ___、会議が 遅れた。", ans: "ことから", options: ["ことから", "うちに", "際して", "上で"] }
    ]
  },
  {
    chapter: 78,
    level: "N2",
    title: "に違いない (must be)",
    desc: "Strong conviction",
    patterns: [
      { id: "78.1", label: "～に違いない", meaning: "Must be / Surely", explanation: "Indicates the speaker's strong belief or logical certainty (higher conviction than 'sou da' or 'deshou').", examples: [{ jp: "彼は 忙しいに違いない。", romaji: "Kare wa isogashii ni chigai nai.", en: "He must be busy." }] }
    ],
    quiz: [
      { q: "あんなに 勉強したんだから、合格する ___。", ans: "に違いない", options: ["に違いない", "はずだ", "わけだ", "べきだ"] },
      { q: "この味は お母さんが 作った ___。", ans: "に違いない", options: ["に違いない", "に決まっている", "ものだ", "ことだ"] },
      { q: "犯人は 彼 ___。", ans: "に違いない", options: ["に違いない", "にすぎない", "どころではない", "わけがない"] },
      { q: "彼女は 怒っている ___。", ans: "に違いない", options: ["に違いない", "といっても", "わりに", "に際して"] },
      { q: "明日は 雨 ___。", ans: "に違いない", options: ["に違いない", "おかげで", "せいで", "というより"] },
      { q: "彼は 知っている ___。", ans: "に違いない", options: ["に違いない", "ばかりに", "のみならず", "に先立って"] },
      { q: "これは 夢 ___。", ans: "に違いない", options: ["に違いない", "にしては", "にかかわらず", "とともに"] },
      { q: "彼女は 泣いた ___。", ans: "に違いない", options: ["に違いない", "ばかりに", "あげく", "以上"] },
      { q: "彼は 嘘を ついている ___。", ans: "に違いない", options: ["に違いない", "反面", "につれて", "次第"] },
      { q: "これは 高価なもの ___。", ans: "に違いない", options: ["に違いない", "に沿って", "を除いて", "にかけて"] }
    ]
  },
  {
    chapter: 79,
    level: "N2",
    title: "に決まっている (definitely)",
    desc: "Natural/Obvious certainty",
    patterns: [
      { id: "79.1", label: "～に決まっている", meaning: "Definitely / It's obvious that...", explanation: "Used when the speaker is absolutely certain, often based on common sense or intuition.", examples: [{ jp: "これは 難しいに決まっている。", romaji: "Kore wa muzukashii ni kimatte iru.", en: "This is definitely difficult." }] }
    ],
    quiz: [
      { q: "そんなの 無理 ___。", ans: "に決まっている", options: ["に決まっている", "に違いない", "わけだ", "はずだ"] },
      { q: "嘘 ___。", ans: "に決まっている", options: ["に決まっている", "ものか", "ことか", "ばかりか"] },
      { q: "怒られる ___。", ans: "に決まっている", options: ["に決まっている", "べきだ", "つもりだ", "ようだ"] },
      { q: "彼が 勝つ ___。", ans: "に決まっている", options: ["に決まっている", "にすぎない", "にわたって", "に加えて"] },
      { q: "そんなこと 言ったら 嫌われる ___。", ans: "に決まっている", options: ["に決まっている", "まい", "かねない", "ざるを得ない"] },
      { q: "美味しい ___。", ans: "に決まっている", options: ["に決まっている", "どころか", "ばかりに", "わりに"] },
      { q: "失敗する ___。", ans: "に決まっている", options: ["に決まっている", "末に", "あげく", "がてら"] },
      { q: "反対される ___。", ans: "に決まっている", options: ["に決まっている", "に伴って", "に応じて", "に際して"] },
      { q: "楽しい ___。", ans: "に決まっている", options: ["に決まっている", "のみならず", "に限り", "さえ"] },
      { q: "バレる ___。", ans: "に決まっている", options: ["に決まっている", "に沿って", "を通して", "を通じて"] }
    ]
  },
  {
    chapter: 80,
    level: "N2",
    title: "わけだ (no wonder)",
    desc: "That explains why",
    patterns: [
      { id: "80.1", label: "～わけだ", meaning: "No wonder / That explains / It follows that", explanation: "Used to express a logical conclusion or a natural result of a situation.", examples: [{ jp: "雨が 降っている. 寒いわけだ。", romaji: "Ame ga futte iru. Samui wake da.", en: "It’s raining—that’s why it’s cold (No wonder it's cold)." }] }
    ],
    quiz: [
      { q: "20年も 日本にいるのか、日本語が 上手な ___。", ans: "わけだ", options: ["わけだ", "はずだ", "ことだ", "ものだ"] },
      { q: "夜更かししたから、眠い ___。", ans: "わけだ", options: ["わけだ", "どころか", "ばかりに", "わりに"] },
      { q: "エアコンが ついていない. 暑い ___。", ans: "わけだ", options: ["わけだ", "のみならず", "に加えて", "に際して"] },
      { q: "5キロも 走ったんだ. 疲れる ___。", ans: "わけだ", options: ["わけだ", "反面", "ものの", "末に"] },
      { q: "彼が 犯人だった ___。", ans: "わけだ", options: ["わけだ", "にすぎない", "というより", "にしたがって"] },
      { q: "道理で 暗い ___。電気が 消えている。", ans: "わけだ", options: ["わけだ", "にあたって", "とともに", "さえ"] },
      { q: "昨日 飲んだから、頭が 痛い ___。", ans: "わけだ", options: ["わけだ", "次第", "末に", "のみならず"] },
      { q: "毎日 練習しているから、上手になる ___。", ans: "わけだ", options: ["わけだ", "ばかりに", "ことか", "ものか"] },
      { q: "鍵が 開いている. 誰か いる ___。", ans: "わけだ", options: ["わけだ", "に違いない", "に決まっている", "はずだ"] },
      { q: "休みなのに 働いている. 忙しい ___。", ans: "わけだ", options: ["わけだ", "ものの", "反面", "に限り"] }
    ]
  },
  {
    chapter: 81,
    level: "N2",
    title: "わけではない (not necessarily)",
    desc: "Partial negation",
    patterns: [
      { id: "81.1", label: "～わけではない", meaning: "Not necessarily / Doesn't mean that", explanation: "Used to avoid a total generalization or to partially deny something.", examples: [{ jp: "高いからといって、いいわけではない。", romaji: "Takai kara to itte, ii wake de wa nai.", en: "Just because it’s expensive doesn’t mean it’s good." }] }
    ],
    quiz: [
      { q: "嫌いな ___ が、今は 食べたくない。", ans: "わけではない", options: ["わけではない", "はずがない", "わけがない", "どころではない"] },
      { q: "全く できない ___。", ans: "わけではない", options: ["わけではない", "にすぎない", "に違いない", "に決まっている"] },
      { q: "日本人が みんな 寿司が 好きな ___。", ans: "わけではない", options: ["わけではない", "ばかりか", "のみならず", "に加えて"] },
      { q: "暇な ___ が、今は 会えない。", ans: "わけではない", options: ["わけではない", "わりに", "に際して", "に伴って"] },
      { q: "怒っている ___。", ans: "わけではない", options: ["わけではない", "ものの", "反面", "に限り"] },
      { q: "金持ちが みんな 幸せな ___。", ans: "わけではない", options: ["わけではない", "につれて", "にしたがって", "にすぎない"] },
      { q: "信じられない ___ が、本当かな。", ans: "わけではない", options: ["わけではない", "末に", "あげく", "次第"] },
      { q: "行きたくない ___ が、用事が ある。", ans: "わけではない", options: ["わけではない", "として", "にとって", "につき"] },
      { q: "彼が 悪い ___。", ans: "わけではない", options: ["わけではない", "に沿って", "を通して", "を通じて"] },
      { q: "いつも 暇な ___。", ans: "わけではない", options: ["わけではない", "さえ", "こそ", "ばかり"] }
    ]
  },
  {
    chapter: 82,
    level: "N2",
    title: "ばかりでなく～も (not only)",
    desc: "Inclusive expansion",
    patterns: [
      { id: "82.1", label: "～ばかりでなく～も", meaning: "Not only ~ but also", explanation: "Used to add more information to a statement, similar to 'dake de naku'.", examples: [{ jp: "日本語ばかりでなく、英語も 話せます。", romaji: "Nihongo bakari de naku, eigo mo hanasemasu.", en: "I can speak not only Japanese but also English." }] }
    ],
    quiz: [
      { q: "彼女は 綺麗な ___ 、頭も いい。", ans: "ばかりでなく", options: ["ばかりでなく", "ばかりに", "わりに", "ものの"] },
      { q: "この店は 安い ___ 、味も いい。", ans: "ばかりでなく", options: ["ばかりでなく", "のみならず", "に加えて", "に際して"] },
      { q: "彼は 歌 ___ 、ダンスも 上手だ。", ans: "ばかりでなく", options: ["ばかりでなく", "さえ", "こそ", "どころか"] },
      { q: "肉 ___ 、野菜も 食べなさい。", ans: "ばかりでなく", options: ["ばかりでなく", "ばかりか", "にすぎない", "とともに"] },
      { q: "学生 ___ 、大人も 楽しめる。", ans: "ばかりでなく", options: ["ばかりでなく", "わりに", "として", "につき"] },
      { q: "雨 ___ 、風も 強い。", ans: "ばかりでなく", options: ["ばかりでなく", "末に", "あげく", "次第"] },
      { q: "仕事 ___ 、家事も しています。", ans: "ばかりでなく", options: ["ばかりでなく", "反面", "に伴って", "に応じて"] },
      { q: "日本 ___ 、アジア中で 有名だ。", ans: "ばかりでなく", options: ["ばかりでなく", "というより", "にしたがって", "のみか"] },
      { q: "ピアノ ___ 、ギターも 弾ける。", ans: "ばかりでなく", options: ["ばかりでなく", "に限り", "さえ", "こそ"] },
      { q: "子供 ___ 、お年寄りも 好きだ。", ans: "ばかりでなく", options: ["ばかりでなく", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 83,
    level: "N2",
    title: "に加えて (in addition to)",
    desc: "Adding more things",
    patterns: [
      { id: "83.1", label: "～に加えて", meaning: "In addition to / Along with", explanation: "Used to state that in addition to one thing, something else is also present.", examples: [{ jp: "雨に加えて、風も 強いです。", romaji: "Ame ni kuwaete, kaze mo tsuyoi desu.", en: "In addition to rain, the wind is also strong." }] }
    ],
    quiz: [
      { q: "暑さ ___ 、湿気も すごい。", ans: "に加えて", options: ["に加えて", "に対して", "にとって", "について"] },
      { q: "地震 ___ 、火事も 起きた。", ans: "に加えて", options: ["に加えて", "に際して", "に応じて", "に伴って"] },
      { q: "この仕事は 忙しい ___ 、責任も 重い。", ans: "に加えて", options: ["に加えて", "ものの", "反面", "わりに"] },
      { q: "宿題 ___ 、明日 試験も ある。", ans: "に加えて", options: ["に加えて", "とともに", "にしたがって", "につれて"] },
      { q: "怪我 ___ 、病気にも なった。", ans: "に加えて", options: ["に加えて", "ばかりに", "のみならず", "に限り"] },
      { q: "名前 ___ 、住所も 書いてください。", ans: "に加えて", options: ["に加えて", "を", "に", "は"] },
      { q: "歌の才能 ___ 、ルックスも いい。", ans: "に加えて", options: ["に加えて", "さえ", "こそ", "ばかり"] },
      { q: "英語の授業 ___ 、日本語の授業も 受けた。", ans: "に加えて", options: ["に加えて", "として", "にとって", "につき"] },
      { q: "美味しさ ___ 、見た目も 綺麗だ。", ans: "に加えて", options: ["に加えて", "に沿って", "を通じて", "を通して"] },
      { q: "彼は 優しい ___ 、面白い。", ans: "に加えて", options: ["に加えて", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 84,
    level: "N2",
    title: "つつ (while / although)",
    desc: "Formal simultaneous / contrast",
    patterns: [
      { id: "84.1", label: "～つつ", meaning: "While / Although", explanation: "A formal version of 'nagara' (while) or used to express contrast (although/despite).", examples: [{ jp: "働きつつ 勉強しています。", romaji: "Hataraki tsutsu benkyou shite imasu.", en: "While working, I study." }] }
    ],
    quiz: [
      { q: "悪いと 知り ___ 、嘘を ついた。", ans: "つつ", options: ["つつ", "ながら", "つつも", "ものの"] },
      { q: "音楽を 聞き ___ 散歩する。", ans: "つつ", options: ["つつ", "ながら", "つつも", "ために"] },
      { q: "体に悪いと 思い ___ 、タバコが やめられない。", ans: "つつ", options: ["つつ", "ながら", "つつも", "わりに"] },
      { q: "景色を 楽しみ ___ 旅を した。", ans: "つつ", options: ["つつ", "ことから", "ことに", "ものなら"] },
      { q: "将来を 考え ___ 行動すべきだ。", ans: "つつ", options: ["つつ", "に際して", "に伴って", "に応じて"] },
      { q: "ダイエット中と 言い ___ 、ケーキを 食べた。", ans: "つつ", options: ["つつ", "ばかりに", "さえ", "こそ"] },
      { q: "反省 ___ 、また 同じことを した。", ans: "しつつ", options: ["しつつ", "して", "すれば", "すればこそ"] },
      { q: "彼は 苦笑い ___ 話した。", ans: "しつつ", options: ["しつつ", "して", "ながら", "つつも"] },
      { q: "無理だと 分かり ___ 、挑戦した。", ans: "つつ", options: ["つつ", "のに", "から", "ので"] },
      { q: "テレビを 見 ___ ご飯を 食べる。", ans: "つつ", options: ["つつ", "ながら", "つつも", "のときに"] }
    ]
  },
  {
    chapter: 85,
    level: "N2",
    title: "つつある (in process of)",
    desc: "Ongoing change",
    patterns: [
      { id: "85.1", label: "～つつある", meaning: "In the process of / Gradually changing", explanation: "Indicates that a change is currently in progress (formal/written style).", examples: [{ jp: "物価は 上がりつつあります。", romaji: "Bukka wa agari tsutsu arimasu.", en: "Prices are rising (in the process of rising)." }] }
    ],
    quiz: [
      { q: "この島は 沈み ___。", ans: "つつある", options: ["つつある", "ている", "ところだ", "ばかりだ"] },
      { q: "景気は 回復し ___。", ans: "つつある", options: ["つつある", "つつも", "ながら", "ところだ"] },
      { q: "桜が 咲き ___。", ans: "つつある", options: ["つつある", "ている", "ところだ", "ばかりだ"] },
      { q: "環境問題は 悪化し ___。", ans: "つつある", options: ["つつある", "ながら", "ものの", "わりに"] },
      { q: "事件の真相が 明らかに なり ___。", ans: "つつある", options: ["つつある", "ところだ", "ばかりだ", "まい"] },
      { q: "子供の数が 減り ___。", ans: "つつある", options: ["つつある", "に伴って", "に応じて", "に際して"] },
      { q: "開発が 進み ___。", ans: "つつある", options: ["つつある", "としての", "に対する", "についての"] },
      { q: "彼への 信頼が 失われ ___。", ans: "つつある", options: ["つつある", "ばかりに", "さえ", "こそ"] },
      { q: "古い建物が 壊され ___。", ans: "つつある", options: ["つつある", "うちに", "まえに", "ばかりに"] },
      { q: "冬が 近づき ___。", ans: "つつある", options: ["つつある", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 86,
    level: "N2",
    title: "に伴って (along with / as)",
    desc: "Simultaneous change",
    patterns: [
      { id: "86.1", label: "～に伴って", meaning: "Along with / As", explanation: "Indicates that as one change occurs, another change happens simultaneously.", examples: [{ jp: "経済の 成長に伴って、生活が 変わりました。", romaji: "Keizai no seichou ni tomonatte, seikatsu ga kawarimashita.", en: "Along with economic growth, lifestyle changed." }] }
    ],
    quiz: [
      { q: "人口の 増加 ___、食糧不足が 深刻に なった。", ans: "に伴って", options: ["に伴って", "に応じて", "に際して", "に先立って"] },
      { q: "時代の 変化 ___、価値観も 変わる。", ans: "に伴って", options: ["に伴って", "に際して", "として", "につき"] },
      { q: "開発が 進む ___、自然が 失われていく。", ans: "のに伴って", options: ["のに伴って", "に加えて", "を除いて", "を通して"] },
      { q: "台風の 接近 ___、風が 強くなった。", ans: "に伴って", options: ["に伴って", "ばかりに", "ものの", "反面"] },
      { q: "需要の 増加 ___、価格が 上がった。", ans: "に伴って", options: ["に伴って", "にしたがって", "につれて", "とともに"] },
      { q: "技術の 進歩 ___、生活は 便利になる。", ans: "に伴って", options: ["に伴って", "に限り", "さえ", "こそ"] },
      { q: "町の 発展 ___、交通量も 増えた。", ans: "に伴って", options: ["に伴って", "のところに", "まえに", "うちに"] },
      { q: "試験が 近づく ___、緊張が 高まる。", ans: "のに伴って", options: ["のに伴って", "ばかりに", "あげく", "末に"] },
      { q: "売上の 減少 ___、ボーナスが カットされた。", ans: "に伴って", options: ["に伴って", "に沿って", "を通じて", "を通して"] },
      { q: "責任が 重くなる ___、ストレスも 増える。", ans: "のに伴って", options: ["のに伴って", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 87,
    level: "N2",
    title: "に応じて (according to)",
    desc: "Proportional response",
    patterns: [
      { id: "87.1", label: "～に応じて", meaning: "According to / Depending on", explanation: "Used to indicate that something changes or is decided in accordance with another factor.", examples: [{ jp: "能力に応じて 仕事が 与えられます。", romaji: "Nouryoku ni oujite shigoto ga ataeraremasu.", en: "Work is given according to one's ability." }] }
    ],
    quiz: [
      { q: "予算 ___、プランを 選びます。", ans: "に応じて", options: ["に応じて", "に伴って", "に際して", "に先立って"] },
      { q: "天候 ___、行き先を 変更する。", ans: "に応じて", options: ["に応じて", "として", "にとって", "につき"] },
      { q: "客の 要望 ___、メニューを 増やす。", ans: "に応じて", options: ["に応じて", "に加えて", "を除いて", "を通して"] },
      { q: "体力 ___、運動を しましょう。", ans: "に応じて", options: ["に応じて", "ばかりに", "ものの", "反面"] },
      { q: "状況 ___、適切に 判断してください。", ans: "に応じて", options: ["に応じて", "にしたがって", "につれて", "とともに"] },
      { q: "レベル ___、クラスを 分ける。", ans: "に応じて", options: ["に応じて", "に限り", "さえ", "こそ"] },
      { q: "年齢 ___、料金が 違います。", ans: "に応じて", options: ["に応じて", "のところに", "まえに", "うちに"] },
      { q: "出席者の 数 ___、部屋を 決める。", ans: "に応じて", options: ["に応じて", "ばかりに", "あげく", "末に"] },
      { q: "個人の 好み ___、味付けを 変える。", ans: "に応じて", options: ["に応じて", "に沿って", "を通じて", "を通して"] },
      { q: "季節の 変化 ___、服を 選ぶ。", ans: "に応じて", options: ["に応じて", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 88,
    level: "N2",
    title: "ものの (although)",
    desc: "Contrast/Despite fact",
    patterns: [
      { id: "88.1", label: "～ものの", meaning: "Although / Even though", explanation: "Used to express a fact that exists, but something contradictory also applies.", examples: [{ jp: "難しいものの、やってみます。", romaji: "Muzukashii mono no, yattemimasu.", en: "Although it's difficult, I'll try." }] }
    ],
    quiz: [
      { q: "買った ___、全然 使っていない。", ans: "ものの", options: ["ものの", "反面", "わりに", "に際して"] },
      { q: "大学は 卒業した ___、やりたいことが 見つからない。", ans: "ものの", options: ["ものの", "に伴って", "に応じて", "に先立って"] },
      { q: "謝った ___、許してくれなかった。", ans: "ものの", options: ["ものの", "によって", "として", "にとって"] },
      { q: "春に なった ___、まだ 寒い。", ans: "ものの", options: ["ものの", "ばかりに", "さえ", "こそ"] },
      { q: "約束した ___、行けるか わからない。", ans: "ものの", options: ["ものの", "に限り", "ものなら", "どころか"] },
      { q: "美味しい ___、値段が 高すぎる。", ans: "ものの", options: ["ものの", "反面", "わりに", "ばかりか"] },
      { q: "分かっている ___、なかなか 実行できない。", ans: "ものの", options: ["ものの", "うちに", "まえに", "ところで"] },
      { q: "便利な ___、操作が 難しい。", ans: "ものの", options: ["ものの", "あげく", "末に", "次第"] },
      { q: "合格した ___、希望の 大学ではない。", ans: "ものの", options: ["ものの", "というより", "にしたがって", "とともに"] },
      { q: "静かな ___、不便な 場所だ。", ans: "ものの", options: ["ものの", "のみならず", "に加えて", "にわたって"] }
    ]
  },
  {
    chapter: 89,
    level: "N2",
    title: "反面 (on other hand)",
    desc: "Contrasting two sides",
    patterns: [
      { id: "89.1", label: "～反面", meaning: "On the other hand / But at the same time", explanation: "Used to present two opposite aspects of the same person, thing, or situation.", examples: [{ jp: "便利な反面、危険も あります。", romaji: "Benri na hanmen, kiken mo arimasu.", en: "It’s convenient, but on the other hand, there’s also danger." }] }
    ],
    quiz: [
      { q: "都会は 刺激が 多い ___、ストレスも 多い。", ans: "反面", options: ["反面", "ものの", "わりに", "に際して"] },
      { q: "彼は 優しい ___、厳しい ところも ある。", ans: "反面", options: ["反面", "に伴って", "に応じて", "に先立って"] },
      { q: "一人暮らしは 自由な ___、寂しい。", ans: "反面", options: ["反面", "によって", "として", "にとって"] },
      { q: "ネットは 便利な ___、トラブルも 起きやすい。", ans: "反面", options: ["反面", "ばかりに", "さえ", "こそ"] },
      { q: "仕事は 楽しい ___、責任が 重くて 大変だ。", ans: "反面", options: ["反面", "ものなら", "に限り", "どころか"] },
      { q: "この薬は よく 効く ___、副作用も 強い。", ans: "反面", options: ["反面", "ものの", "ばかりに", "わりに"] },
      { q: "彼は 多才な ___、飽きっぽい。", ans: "反面", options: ["反面", "うちに", "まえに", "ところで"] },
      { q: "あの土地は 値段が 安い ___、地盤が 弱い。", ans: "反面", options: ["反面", "あげく", "末に", "次第"] },
      { q: "彼女は 完璧に見える ___、実は おっちょこちょいだ。", ans: "反面", options: ["反面", "というより", "にしたがって", "とともに"] },
      { q: "観光客が 増えて 潤う ___、ゴミ問題が 深刻だ。", ans: "反面", options: ["反面", "につき", "に沿って", "を除いて"] }
    ]
  },
  {
    chapter: 90,
    level: "N2",
    title: "からには (now that)",
    desc: "Commitment/Since fact",
    patterns: [
      { id: "90.1", label: "～からには", meaning: "Now that / Since / So long as", explanation: "Indicates a strong resolve or natural consequence because a certain situation exists.", examples: [{ jp: "約束したからには、守ります。", romaji: "Yakusoku shita kara ni wa, mamorimasu.", en: "Now that I promised, I’ll keep it." }] }
    ],
    quiz: [
      { q: "決めた ___、最後まで やります。", ans: "からには", options: ["からには", "以上", "ものの", "に際して"] },
      { q: "日本に 来た ___、日本語を 完璧に したい。", ans: "からには", options: ["からには", "反面", "わりに", "に伴って"] },
      { q: "試合に 出る ___、勝ちたい。", ans: "からには", options: ["からには", "によって", "として", "にとって"] },
      { q: "社長に なった ___、責任を 果たす。", ans: "からには", options: ["からには", "ばかりに", "さえ", "こそ"] },
      { q: "秘密を 知った ___、誰にも 言わないでください。", ans: "からには", options: ["からには", "ものなら", "に限り", "どころか"] },
      { q: "やる ___、全力で やれ。", ans: "からには", options: ["からには", "のみならず", "に加えて", "につき"] },
      { q: "結婚する ___、二人で 協力していく。", ans: "からには", options: ["からには", "うちに", "まえに", "ところで"] },
      { q: "契約した ___、キャンセルは できない。", ans: "からには", options: ["からには", "あげく", "末に", "次第"] },
      { q: "留学する ___、しっかり 勉強してきなさい。", ans: "からには", options: ["からには", "というより", "にしたがって", "とともに"] },
      { q: "引き受けた ___、ちゃんと やれ。", ans: "からには", options: ["からには", "のみか", "ばかりか", "にしたら"] }
    ]
  },
  {
    chapter: 91,
    level: "N2",
    title: "上で (after doing / when)",
    desc: "Preparation/Prerequisite",
    patterns: [
      { id: "91.1", label: "～上で", meaning: "After doing / When / On the occasion of", explanation: "Used to show that something is done as a necessary step after completing something else.", examples: [{ jp: "調べた上で、決めます。", romaji: "Shirabeta ue de, kimemasu.", en: "I'll decide after I've checked into it." }] }
    ],
    quiz: [
      { q: "内容を 確認した ___、サインしてください。", ans: "上で", options: ["上で", "末に", "あげく", "うちに"] },
      { q: "相談した ___、結論を 出します。", ans: "上で", options: ["上で", "からには", "以上", "反面"] },
      { q: "一度 会った ___、決めたい。", ans: "上で", options: ["上で", "ものの", "わりに", "に伴って"] },
      { q: "仕事をする ___、健康は 大切だ。", ans: "上で", options: ["上で", "として", "にとって", "につき"] },
      { q: "よく 読んだ ___、答えてください。", ans: "上で", options: ["上で", "ばかりに", "さえ", "こそ"] },
      { q: "計画を 立てた ___、実行する。", ans: "上で", options: ["上で", "ものなら", "に限り", "どころか"] },
      { q: "実物を見た ___、買いたい。", ans: "上で", options: ["上で", "まえに", "ところで", "うちに"] },
      { q: "事情を 説明した ___、了承を得た。", ans: "上で", options: ["上で", "あげく", "末に", "次第"] },
      { q: "生活する ___、お金は 必要だ。", ans: "上で", options: ["上で", "というより", "にしたがって", "とともに"] },
      { q: "両親と 話し合った ___、決めます。", ans: "上で", options: ["上で", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 92,
    level: "N2",
    title: "末 (after long process)",
    desc: "Struggle result",
    patterns: [
      { id: "92.1", label: "～末 (に)", meaning: "After a long process / Finally", explanation: "Used to show a final result after a long or difficult period of effort/struggle.", examples: [{ jp: "話し合った末、結論を 出しました。", romaji: "Hanashiatta sue, ketsuron wo dashimashita.", en: "After discussing it thoroughly, we reached a conclusion." }] }
    ],
    quiz: [
      { q: "悩んだ ___、会社を 辞めることにした。", ans: "末", options: ["末", "あげく", "上で", "際"] },
      { q: "苦労した ___、成功を 手に入れた。", ans: "末", options: ["末", "ものの", "からには", "わりに"] },
      { q: "検討した ___、今回は お断りします。", ans: "末", options: ["末", "に伴って", "に応じて", "に際して"] },
      { q: "激しい 戦いの ___、平和が 訪れた。", ans: "末", options: ["末", "によって", "として", "にとって"] },
      { q: "何回も 失敗した ___、やっと 完成した。", ans: "末", options: ["末", "ばかりに", "さえ", "こそ"] },
      { q: "議論の ___、合意に 達した。", ans: "末", options: ["末", "に限り", "ものなら", "どころか"] },
      { q: "長い 旅の ___、日本に戻った。", ans: "末", options: ["末", "うちに", "まえに", "ところで"] },
      { q: "交際した ___、二人は 結婚した。", ans: "末に", options: ["末に", "あげく", "次第", "からには"] },
      { q: "辛い 練習の ___、優勝した。", ans: "末に", options: ["末に", "というより", "にしたがって", "とともに"] },
      { q: "迷った ___、赤い方を 買った。", ans: "末に", options: ["末に", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 93,
    level: "N2",
    title: "によっては (depending on)",
    desc: "Conditional variance",
    patterns: [
      { id: "93.1", label: "～によっては", meaning: "Depending on / In some cases", explanation: "Used to specify that something varies depending on the circumstances or person.", examples: [{ jp: "人によっては、難しいです。", romaji: "Hito ni yotte wa, muzukashii desu.", en: "Depending on the person (for some people), it's difficult." }] }
    ],
    quiz: [
      { q: "国 ___、食文化が 違う。", ans: "によっては", options: ["によっては", "に伴って", "に応じて", "に際して"] },
      { q: "場合 ___、延期に なる。", ans: "によっては", options: ["によっては", "ものの", "からには", "わりに"] },
      { q: "天気 ___、中止かも しれません。", ans: "によっては", options: ["によっては", "によって", "として", "にとって"] },
      { q: "時間 ___、道が 混んでいる。", ans: "によっては", options: ["によっては", "ばかりに", "さえ", "こそ"] },
      { q: "人 ___、意見が 分かれる。", ans: "によっては", options: ["によっては", "に限り", "ものなら", "どころか"] },
      { q: "日 ___、暑いことも ある。", ans: "によっては", options: ["によっては", "のみならず", "に加えて", "につき"] },
      { q: "場所 ___、富士山が 見える。", ans: "によっては", options: ["によっては", "うちに", "まえに", "ところで"] },
      { q: "物 ___、値上がりしている。", ans: "によっては", options: ["によっては", "あげく", "末に", "次第"] },
      { q: "人 ___、好き嫌いが ある。", ans: "によっては", options: ["によっては", "というより", "にしたがって", "とともに"] },
      { q: "状況 ___、対応を 変えます。", ans: "によっては", options: ["によっては", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 94,
    level: "N2",
    title: "ものだ (general truth)",
    desc: "Normalcy/Emotion/Habit",
    patterns: [
      { id: "94.1", label: "～ものだ", meaning: "General truth / Natural state / Emotion / Past habit", explanation: "Used to express how things naturally are, a deep feeling, or a past habit.", examples: [{ jp: "時間が 経つのは 早いものです。", romaji: "Jikan ga tatsu no wa hayai mono desu.", en: "Time sure passes quickly (general truth/emotion)." }] }
    ],
    quiz: [
      { q: "日本へ 来てから 1年か、時の 経つのは 早い ___。", ans: "ものだ", options: ["ものだ", "ことだ", "はずだ", "わけだ"] },
      { q: "子供の 成長は 早い ___。", ans: "ものだ", options: ["ものだ", "反面", "わりに", "ものの"] },
      { q: "若い頃は よく 徹夜した ___。", ans: "ものだ", options: ["ものだ", "に伴って", "に応じて", "に先立って"] },
      { q: "親切にされたら、お礼を 言う ___ だ。", ans: "もの", options: ["もの", "こと", "はず", "わけ"] },
      { q: "薬は 苦い ___ だ。", ans: "もの", options: ["もの", "ばかり", "さえ", "こそ"] },
      { q: "立派に なった ___ だ。", ans: "もの", options: ["もの", "どころか", "ばかりに", "わりに"] },
      { q: "子供は 元気な ___ だ。", ans: "もの", options: ["もの", "うちに", "まえに", "ところで"] },
      { q: "昔は ここに 広い 空き地が あった ___ だ。", ans: "もの", options: ["もの", "あげく", "末に", "次第"] },
      { q: "人前で そんなことを 言う ___ ではない。", ans: "もの", options: ["もの", "というより", "にしたがって", "とともに"] },
      { q: "一度 会ってみたい ___ だ。", ans: "もの", options: ["もの", "につき", "に限り", "さえ"] }
    ]
  },
  {
    chapter: 95,
    level: "N2",
    title: "ことなく (without doing)",
    desc: "Continuous action",
    patterns: [
      { id: "95.1", label: "～ことなく", meaning: "Without doing", explanation: "A formal version of 'naide' to show that an action continues without something else happening.", examples: [{ jp: "休むことなく 働きました。", romaji: "Yasumu koto naku hatarakimashita.", en: "I worked without taking a rest." }] }
    ],
    quiz: [
      { q: "一度も 諦める ___ 、最後まで 走りきった。", ans: "ことなく", options: ["ことなく", "ないで", "うちに", "まえに"] },
      { q: "彼は 迷う ___、その道を 選んだ。", ans: "ことなく", options: ["ことなく", "ものの", "からには", "わりに"] },
      { q: "誰にも 知られる ___、旅に 出た。", ans: "ことなく", options: ["ことなく", "に伴って", "に応じて", "に際して"] },
      { q: "事件は 解決する ___、何年も 経った。", ans: "ことなく", options: ["ことなく", "によって", "として", "にとって"] },
      { q: "機会を 逃す ___、参加してください。", ans: "ことなく", options: ["ことなく", "ばかりに", "さえ", "こそ"] },
      { q: "混乱する ___ 、避難した。", ans: "することなく", options: ["することなく", "しては", "どころか", "ものなら"] },
      { q: "変わる ___、愛し続ける。", ans: "ことなく", options: ["ことなく", "まえに", "ところで", "うちに"] },
      { q: "立ち止まる ___ 、進み続けた。", ans: "ことなく", options: ["ことなく", "あげく", "末に", "次第"] },
      { q: "一度も 怒る ___ 、優しく 接した。", ans: "ことなく", options: ["ことなく", "のみならず", "に加えて", "にあたって"] },
      { q: "誰かに 頼る ___ 、自力で 解決した。", ans: "ことなく", options: ["ことなく", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 96,
    level: "N2",
    title: "に限らず (not limited to)",
    desc: "Wider scope",
    patterns: [
      { id: "96.1", label: "～に限らず", meaning: "Not limited to / Not only", explanation: "Used to show that something applies not only to a specific thing but also to a wider range.", examples: [{ jp: "日本に限らず、世界中で 人気です。", romaji: "Nihon ni kagirazu, sekai chuu de ninki desu.", en: "Not limited to Japan, it's popular all over the world." }] }
    ],
    quiz: [
      { q: "この 映画は 子供 ___、大人にも 人気だ。", ans: "に限らず", options: ["に限らず", "に限り", "さえ", "こそ"] },
      { q: "平日 ___ 、土日も 営業しています。", ans: "に限らず", options: ["に限らず", "ながら", "つつ", "ものの"] },
      { q: "彼は 勉強 ___ 、スポーツも 抜群だ。", ans: "に限らず", options: ["に限らず", "だけに", "わりに", "に際して"] },
      { q: "若者 ___ 、お年寄りも ネットを 使う。", ans: "に限らず", options: ["に限らず", "として", "にとって", "につき"] },
      { q: "東京 ___ 、全国的に 雨だ。", ans: "に限らず", options: ["に限らず", "ばかりに", "あげく", "末に"] },
      { q: "肉 ___ 、野菜も しっかり 食べなさい。", ans: "に限らず", options: ["に限らず", "どころか", "ものなら", "おかげで"] },
      { q: "夏 ___、冬も 水分補給が 大切だ。", ans: "に限らず", options: ["に限らず", "まえに", "ところで", "うちに"] },
      { q: "室内 ___ 、屋外でも マスクを する。", ans: "に限らず", options: ["に限らず", "に伴って", "に応じて", "に先立って"] },
      { q: "家族 ___ 、友達にも 感謝している。", ans: "に限らず", options: ["に限らず", "というより", "にしたがって", "とともに"] },
      { q: "会社員 ___ 、学生も 参加できる。", ans: "に限らず", options: ["に限らず", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 97,
    level: "N2",
    title: "以上 (now that / since)",
    desc: "Strong resolve",
    patterns: [
      { id: "97.1", label: "～以上 (は)", meaning: "Now that / Since / As long as", explanation: "Indicates a strong resolve or a natural obligation because a certain fact or situation exists.", examples: [{ jp: "約束した以上、やります。", romaji: "Yakusoku shita ijou, yarimasu.", en: "Now that I promised, I’ll do it." }] }
    ],
    quiz: [
      { q: "引き受けた ___ 、責任を 持って やりなさい。", ans: "以上", options: ["以上", "ものの", "反面", "わりに"] },
      { q: "決めた ___ 、最後まで 続ける。", ans: "以上", options: ["以上", "に伴って", "に応じて", "に際して"] },
      { q: "試験を 受ける ___ 、合格したい。", ans: "以上", options: ["以上", "によって", "として", "にとって"] },
      { q: "日本に 留学した ___ 、日本語を マスターしたい。", ans: "以上", options: ["以上", "ばかりに", "さえ", "こそ"] },
      { q: "隠していることが ある ___ 、本当のことを 言え。", ans: "以上", options: ["以上", "ものなら", "に限り", "どころか"] },
      { q: "契約した ___ 、お金を 払わなければならない。", ans: "以上", options: ["以上", "まえに", "ところで", "うちに"] },
      { q: "やる ___ 、一等賞を 目指そう。", ans: "以上", options: ["以上", "あげく", "末に", "次第"] },
      { q: "親切にされた ___ 、お礼を 言うべきだ。", ans: "以上", options: ["以上", "というより", "にしたがって", "とともに"] },
      { q: "秘密を 知ってしまった ___ 、誰にも 言わない。", ans: "以上", options: ["以上", "のみならず", "に加えて", "にあたって"] },
      { q: "プロである ___ 、完璧な 仕事を する。", ans: "以上", options: ["以上", "に沿って", "を通じて", "を通して"] }
    ]
  },
  {
    chapter: 98,
    level: "N2",
    title: "ものだから (because)",
    desc: "Emotional excuse",
    patterns: [
      { id: "98.1", label: "～ものだから / もんだから", meaning: "Because / The reason is that...", explanation: "Used to give an excuse or explain a reason, often with an emotional nuance (casual but polite).", examples: [{ jp: "忙しかったものだから、連絡できませんでした。", romaji: "Isogashikatta mono dakara, renraku dekimasen deshita.", en: "Because I was busy (I'm sorry), I couldn't contact you." }] }
    ],
    quiz: [
      { q: "あまりに 暑い ___、エアコンを つけました。", ans: "ものだから", options: ["ものだから", "ばかりに", "おかげで", "せいで"] },
      { q: "道が 混んでいた ___、遅れました。", ans: "ものだから", options: ["ものだから", "ものの", "からには", "わりに"] },
      { q: "安かった ___、つい 買ってしまった。", ans: "ものだから", options: ["ものだから", "に伴って", "に応じて", "に際して"] },
      { q: "知らなかった ___ 、失礼しました。", ans: "ものだから", options: ["ものだから", "によって", "として", "にとって"] },
      { q: "急いでいた ___ 、挨拶を 忘れました。", ans: "ものだから", options: ["ものだから", "さえ", "こそ", "ばかり"] },
      { q: "お腹が 空いていた ___ 、全部 食べた。", ans: "ものだから", options: ["ものだから", "ものなら", "に限り", "どころか"] },
      { q: "怖かった ___ 、逃げ出した。", ans: "ものだから", options: ["ものだから", "まえに", "ところで", "うちに"] },
      { q: "難しかった ___、諦めてしまった。", ans: "ものだから", options: ["ものだから", "あげく", "末に", "次第"] },
      { q: "びっくりした ___ 、声も 出なかった。", ans: "ものだから", options: ["ものだから", "というより", "にしたがって", "とともに"] },
      { q: "どうしても 行きたかった ___ 、無理を した。", ans: "ものだから", options: ["ものだから", "につき", "に沿って", "を除いて"] }
    ]
  },
  {
    chapter: 99,
    level: "N2",
    title: "かねる (cannot do)",
    desc: "Polite inability",
    patterns: [
      { id: "99.1", label: "～かねる", meaning: "Cannot do / Be unable to (polite/formal)", explanation: "Used to politely decline a request or to state that an action is difficult or impossible for the speaker.", examples: [{ jp: "そのお願いは 受けかねます。", romaji: "Sono onegai wa ukekanemasu.", en: "I am unable to accept that request." }] }
    ],
    quiz: [
      { q: "私一人では 決め ___。", ans: "かねます", options: ["かねます", "かねません", "はずがありません", "わけがありません"] },
      { q: "賛成 ___。", ans: "しかねます", options: ["しかねます", "しつつあります", "しています", "しようとします"] },
      { q: "詳細については 答え ___。", ans: "かねます", options: ["かねます", "ものの", "からには", "わりに"] },
      { q: "ご希望には 沿い ___。", ans: "かねます", options: ["かねます", "に伴って", "に応じて", "に際して"] },
      { q: "納得 ___。", ans: "しかねます", options: ["しかねます", "として", "にとって", "につき"] },
      { q: "引き受け ___。", ans: "かねます", options: ["かねます", "ばかりに", "さえ", "こそ"] },
      { q: "それについては 承知 ___。", ans: "しかねます", options: ["しかねます", "ものなら", "に限り", "どころか"] },
      { q: "信じ ___。", ans: "がたい", options: ["かねます", "がたい", "にくい", "つらい"] },
      { q: "返答 ___。", ans: "しかねます", options: ["しかねます", "あげく", "末に", "次第"] },
      { q: "理解 ___。", ans: "しかねます", options: ["しかねます", "というより", "にしたがって", "とともに"] }
    ]
  },
  {
    chapter: 100,
    level: "N2",
    title: "次第 (as soon as)",
    desc: "Immediate sequence",
    patterns: [
      { id: "100.1", label: "～次第", meaning: "As soon as", explanation: "Indicates that an action will take place immediately after something else is finished.", examples: [{ jp: "準備が でき次第、出発します。", romaji: "Junbi ga deki shidai, shuppatsu shimasu.", en: "As soon as preparations are ready, we will depart." }] }
    ],
    quiz: [
      { q: "駅に 到着 ___、電話します。", ans: "し次第", options: ["し次第", "してから", "したあとで", "するうちに"] },
      { q: "分かり ___ 、連絡します。", ans: "次第", options: ["次第", "ものの", "からには", "わりに"] },
      { q: "試験が 終わり ___、遊びに 行こう。", ans: "次第", options: ["次第", "に伴って", "に応じて", "に際して"] },
      { q: "雨が 止み ___、試合を 再開する。", ans: "次第", options: ["次第", "によって", "として", "にとって"] },
      { q: "決まり ___ 、お知らせします。", ans: "次第", options: ["次第", "ばかりに", "さえ", "こそ"] },
      { q: "書類が 届き ___ 、手続きを します。", ans: "次第", options: ["次第", "ものなら", "に限り", "どころか"] },
      { q: "戻り ___ 、伺います。", ans: "次第", options: ["次第", "まえに", "ところで", "うちに"] },
      { q: "完成 ___ 、お送りします。", ans: "し次第", options: ["し次第", "あげく", "末に", "以上"] },
      { q: "落ち着き ___ 、話を しましょう。", ans: "次第", options: ["次第", "というより", "にしたがって", "とともに"] },
      { q: "準備が 整い ___ 、始めます。", ans: "次第", options: ["次第", "のみならず", "に加えて", "につき"] }
    ]
  },
  {
    chapter: 101,
    level: "N1",
    title: "に至るまで (up to / even)",
    desc: "Extreme range",
    patterns: [
      { id: "101.1", label: "～に至るまで", meaning: "Up to / Even / As far as", explanation: "Used to emphasize an unexpectedly wide range or extent, often from one extreme to another.", examples: [{ jp: "子どもから 大人に至るまで 人気があります。", romaji: "Kodomo kara otona ni itaru made ninki ga arimasu.", en: "From children up to adults, it’s popular." }] }
    ],
    quiz: [
      { q: "この 雑誌は ファッションから 政治 ___ 幅広く 扱っている。", ans: "に至るまで", options: ["に至るまで", "に際して", "に応じて", "に伴って"] },
      { q: "北海道から 沖縄 ___、全国に 支店が ある。", ans: "に至るまで", options: ["に至るまで", "として", "にとって", "につき"] },
      { q: "服装の 乱れから 挨拶の 欠如 ___、厳しく 指導された。", ans: "に至るまで", options: ["に至るまで", "に加えて", "を除いて", "を通して"] },
      { q: "料理の 材料から 味付け ___、すべてに こだわっている。", ans: "に至るまで", options: ["に至るまで", "ばかりに", "ものの", "反面"] },
      { q: "一日の 流れから 将来の 夢 ___、彼と 語り合った。", ans: "に至るまで", options: ["に至るまで", "にしたがって", "につれて", "とともに"] },
      { q: "文房具から 家具 ___、何でも 揃う。", ans: "に至るまで", options: ["に至るまで", "に限り", "さえ", "こそ"] },
      { q: "身近な ニュースから 世界の 情勢 ___、興味が ある。", ans: "に至るまで", options: ["に至るまで", "のところに", "まえに", "うちに"] },
      { q: "試験の 準備から 当日の 流れ ___、確認した。", ans: "に至るまで", options: ["に至るまで", "ばかりに", "あげく", "末に"] },
      { q: "足の 先から 頭の てっぺん ___、泥だらけだ。", ans: "に至るまで", options: ["に至るまで", "に沿って", "を通じて", "を通して"] },
      { q: "基本から 応用 ___、しっかり 勉強する。", ans: "に至るまで", options: ["に至るまで", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 102,
    level: "N1",
    title: "を皮切りに (starting with)",
    desc: "Sequential trigger",
    patterns: [
      { id: "102.1", label: "～を皮切りに", meaning: "Starting with / Beginning with", explanation: "Indicates that one event triggers a series of similar events or a whole development.", examples: [{ jp: "東京を皮切りに、全国で 公演します。", romaji: "Toukyou o kawakiri ni, zenkoku de kouen shimasu.", en: "Starting with Tokyo, performances will be held nationwide." }] }
    ],
    quiz: [
      { q: "今回の ヒット曲 ___、彼は 次々と 新曲を 発表した。", ans: "を皮切りに", options: ["を皮切りに", "に際して", "に応じて", "に伴って"] },
      { q: "この 大会 ___、シーズンが 本格的に 始まる。", ans: "を皮切りに", options: ["を皮切りに", "として", "にとって", "につき"] },
      { q: "彼の 発言 ___、会議は 紛糾した。", ans: "を皮切りに", options: ["を皮切りに", "に加えて", "を除いて", "を通して"] },
      { q: "この 事件 ___、事態は 悪化した。", ans: "を皮切りに", options: ["を皮切りに", "ばかりに", "ものの", "反面"] },
      { q: "第一話 ___、その ドラマは 大人気に なった。", ans: "を皮切りに", options: ["を皮切りに", "にしたがって", "につれて", "とともに"] },
      { q: "大阪 公演 ___、全国ツアーに 出発する。", ans: "を皮切りに", options: ["を皮切りに", "に限り", "さえ", "こそ"] },
      { q: "最初の 成功 ___、彼は ビジネスを 拡大した。", ans: "を皮切りに", options: ["を皮切りに", "のところに", "まえに", "うちに"] },
      { q: "一人の 欠席 ___、次々と 風邪で 休む人が 出た。", ans: "を皮切りに", options: ["を皮切りに", "ばかりに", "あげく", "末に"] },
      { q: "その 改正 ___、多くの 法律が 見直された。", ans: "を皮切りに", options: ["を皮切りに", "に沿って", "を通じて", "を通して"] },
      { q: "彼の 帰国 ___、プロジェクトは 急展開を 見せた。", ans: "を皮切りに", options: ["を皮切りに", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 103,
    level: "N1",
    title: "をもって (with / at time of)",
    desc: "Formal limit / Means",
    patterns: [
      { id: "103.1", label: "～をもって", meaning: "With / By means of / At the time of", explanation: "A formal expression used to indicate a means, a reason, or a specific point in time when something ends or changes.", examples: [{ jp: "本日をもって 閉店いたします。", romaji: "Honjitsu o motte heiten itashimasu.", en: "We will close as of today." }] }
    ],
    quiz: [
      { q: "以上 ___ 、本日の 会議を 終了します。", ans: "をもって", options: ["をもって", "に際して", "に応じて", "に伴って"] },
      { q: "誠実な 対応 ___、信頼を 回復したい。", ans: "をもって", options: ["をもって", "として", "にとって", "につき"] },
      { q: "3月31日 ___、退職いたします。", ans: "をもって", options: ["をもって", "に加えて", "を除いて", "を通して"] },
      { q: "この 決定 ___ 、すべての 交渉は 打ち切られた。", ans: "をもって", options: ["をもって", "ばかりに", "ものの", "反面"] },
      { q: "実力 ___ 、優勝を 勝ち取った。", ans: "をもって", options: ["をもって", "にしたがって", "につれて", "とともに"] },
      { q: "結果 ___ 、判断してください。", ans: "をもって", options: ["をもって", "に限り", "さえ", "こそ"] },
      { q: "言葉 ___ 、感謝の 気持ちを 伝えたい。", ans: "をもって", options: ["をもって", "のところに", "まえに", "うちに"] },
      { q: "今 回の 発表 ___、活動を 休止する。", ans: "をもって", options: ["をもって", "ばかりに", "あげく", "末に"] },
      { q: "熱意 ___ 、説得した。", ans: "をもって", options: ["をもって", "に沿って", "を通じて", "を通して"] },
      { q: "これ ___ 、私の 挨拶に 代えさせていただきます。", ans: "をもって", options: ["をもって", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 104,
    level: "N1",
    title: "いかんでは (depending on)",
    desc: "Conditional variance",
    patterns: [
      { id: "104.1", label: "～いかんでは / いかんによっては", meaning: "Depending on", explanation: "Indicates that the outcome of something depends entirely on a particular factor.", examples: [{ jp: "天候いかんでは、中止に なります。", romaji: "Tenkou ikan de wa, chuushi ni narimasu.", en: "Depending on the weather, it may be canceled." }] }
    ],
    quiz: [
      { q: "試験の 結果 ___、奨学金が もらえないことも ある。", ans: "いかんでは", options: ["いかんでは", "に際して", "に応じて", "に伴って"] },
      { q: "話し合い ___ 、解決策も 変わるだろう。", ans: "いかんでは", options: ["いかんでは", "として", "にとって", "につき"] },
      { q: "その 時の 気分 ___、返事が 違うかもしれない。", ans: "いかんでは", options: ["いかんでは", "に加えて", "を除いて", "を通して"] },
      { q: "今後の 推移 ___、方針を 見直す 可能性が ある。", ans: "いかんでは", options: ["いかんでは", "ばかりに", "ものの", "反面"] },
      { q: "やり方 ___ 、成功するかもしれない。", ans: "いかんでは", options: ["いかんでは", "にしたがって", "につれて", "とともに"] },
      { q: "条件 ___ 、引き受ける つもりだ。", ans: "いかんでは", options: ["いかんでは", "に限り", "さえ", "こそ"] },
      { q: "あなたの 答え ___、私の 態度を 決める。", ans: "いかんでは", options: ["いかんでは", "のところに", "まえに", "うちに"] },
      { q: "理由 ___ 、許されないことも ある。", ans: "いかんでは", options: ["いかんでは", "ばかりに", "あげく", "末に"] },
      { q: "状況 ___ 、予定が 変更に なる。", ans: "いかんでは", options: ["いかんでは", "に沿って", "を通じて", "を通して"] },
      { q: "交渉 ___ 、価格が 下がるかもしれない。", ans: "いかんでは", options: ["いかんでは", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 105,
    level: "N1",
    title: "に足る (worthy)",
    desc: "Value assessment",
    patterns: [
      { id: "105.1", label: "～に足る / に足りない", meaning: "Worthy of / Not worthy of", explanation: "Describes whether something has sufficient value or quality to deserve a certain action or feeling.", examples: [{ jp: "信頼するに足る 人です。", romaji: "Shinrai suru ni taru hito desu.", en: "He is worthy of trust." }] }
    ],
    quiz: [
      { q: "それは 注目 ___ 値打ちが ある。", ans: "に足る", options: ["に足る", "に際して", "に応じて", "に伴って"] },
      { q: "取る ___ 話ではない。", ans: "に足りない", options: ["に足りない", "として", "にとって", "につき"] },
      { q: "恐れる ___ ことは ない。", ans: "に足りない", options: ["に足りない", "に加えて", "を除いて", "を通して"] },
      { q: "尊敬 ___ 人物に なりたい。", ans: "に足る", options: ["に足る", "ばかりに", "ものの", "反面"] },
      { q: "信用 ___ 根拠が 必要だ。", ans: "に足る", options: ["に足る", "にしたがって", "につれて", "とともに"] },
      { q: "この 事実は 驚く ___ ものだ。", ans: "に足る", options: ["に足る", "に限り", "さえ", "こそ"] },
      { q: "心配する ___ ことは ない。", ans: "に足りない", options: ["に足りない", "のところに", "まえに", "うちに"] },
      { q: "満足 ___ 結果が 得られた。", ans: "に足る", options: ["に足る", "ばかりに", "あげく", "末に"] },
      { q: "言う ___ ことではない。", ans: "に足りない", options: ["に足りない", "に沿って", "を通じて", "を通して"] },
      { q: "称賛 ___ 素晴らしい 演技だった。", ans: "に足る", options: ["に足る", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 106,
    level: "N1",
    title: "を禁じ得ない (cannot help but)",
    desc: "Unstoppable emotion",
    patterns: [
      { id: "106.1", label: "～を禁じ得ない", meaning: "Cannot help but / Cannot suppress", explanation: "Used to express that an emotion is too strong to hold back (formal).", examples: [{ jp: "涙を 禁じ得ません。", romaji: "Namida o kinjienai.", en: "I can’t help holding back tears." }] }
    ],
    quiz: [
      { q: "彼の 不運な 身の上に 同情 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "に際して", "に応じて", "に伴って"] },
      { q: "その ニュースを聞いて、驚き ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "として", "にとって", "につき"] },
      { q: "彼の 理不尽な 態度に 憤り ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "に加えて", "を除いて", "を通して"] },
      { q: "その 映画の 結末に 感動 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "ばかりに", "ものの", "反面"] },
      { q: "彼の 才能に 嫉妬 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "にしたがって", "につれて", "とともに"] },
      { q: "事件の 残酷さに 戦慄 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "に限り", "さえ", "こそ"] },
      { q: "彼の 冗談に 笑い ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "のところに", "まえに", "うちに"] },
      { q: "その 景色の 美しさに 感嘆 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "ばかりに", "あげく", "末に"] },
      { q: "彼の 軽率な 発言に 疑問 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "に沿って", "を通じて", "を通して"] },
      { q: "その 決定に 困惑 ___。", ans: "を禁じ得ない", options: ["を禁じ得ない", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 107,
    level: "N1",
    title: "ずにはおかない (will definitely)",
    desc: "Inevitable effect",
    patterns: [
      { id: "107.1", label: "～ずにはおかない", meaning: "Will definitely / Must / Won't leave without", explanation: "Indicates that something will certainly have an effect or cause a change.", examples: [{ jp: "この映画は 人を 感動させずにはおかない。", romaji: "Kono eiga wa hito o kandou sasezu ni wa okanai.", en: "This movie will definitely move people." }] }
    ],
    quiz: [
      { q: "彼の 言葉は 聞く人を 納得 ___。", ans: "させずにはおかない", options: ["させずにはおかない", "に際して", "に応じて", "に伴って"] },
      { q: "その 真相は 世間を 驚か ___。", ans: "せずにはおかない", options: ["せずにはおかない", "として", "にとって", "につき"] },
      { q: "彼女の 歌声は 聴衆を 魅了 ___。", ans: "せずにはおかない", options: ["せずにはおかない", "に加えて", "を除いて", "を通して"] },
      { q: "彼の 発言は 政治を 動か ___。", ans: "さずにはおかない", options: ["さずにはおかない", "ばかりに", "ものの", "反面"] },
      { q: "その 景色は 見る人を 圧倒 ___。", ans: "せずにはおかない", options: ["せずにはおかない", "にしたがって", "につれて", "とともに"] },
      { q: "この 事件は 犯人を 罰 ___。", ans: "せずにはおかない", options: ["せずにはおかない", "に限り", "さえ", "こそ"] },
      { q: "彼の 態度は 誰かを 怒ら ___。", ans: "せずにはおかない", options: ["せずにはおかない", "のところに", "まえに", "うちに"] },
      { q: "この 制度は 社会を 変え ___。", ans: "ずにはおかない", options: ["ずにはおかない", "ばかりに", "あげく", "末に"] },
      { q: "その 知らせは 彼女を 悲しま ___。", ans: "せずにはおかない", options: ["せずにはおかない", "に沿って", "を通じて", "を通して"] },
      { q: "彼の 努力は 成功を 呼び寄せ ___。", ans: "ずにはおかない", options: ["ずにはおかない", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 108,
    level: "N1",
    title: "まみれ (covered with)",
    desc: "Negative coating",
    patterns: [
      { id: "108.1", label: "～まみれ", meaning: "Covered with / Smeared with", explanation: "Used to describe something completely covered in an unpleasant or negative substance (mud, blood, debt, etc.).", examples: [{ jp: "泥まみれに なりました。", romaji: "Doro mamire ni narimashita.", en: "I became covered in mud." }] }
    ],
    quiz: [
      { q: "工事現場の 人たちは 汗 ___ で 働いている。", ans: "まみれ", options: ["まみれ", "に際して", "に応じて", "に伴って"] },
      { q: "借金 ___ の 生活を 送っている。", ans: "まみれ", options: ["まみれ", "として", "にとって", "につき"] },
      { q: "彼は 返り血 ___ で 立っていた。", ans: "まみれ", options: ["まみれ", "に加えて", "を除いて", "を通して"] },
      { q: "埃 ___ の 本を 取り出した。", ans: "まみれ", options: ["まみれ", "ばかりに", "ものの", "反面"] },
      { q: "嘘 ___ の 話に 飽き飽きした。", ans: "まみれ", options: ["まみれ", "にしたがって", "につれて", "とともに"] },
      { q: "油 ___ の 手で 握手した。", ans: "まみれ", options: ["まみれ", "に限り", "さえ", "こそ"] },
      { q: "血筋 ___ の 争いは 避けたい。", ans: "まみれ", options: ["まみれ", "のところに", "まえに", "うちに"] },
      { q: "間違い ___ の レポートを 提出した。", ans: "まみれ", options: ["まみれ", "ばかりに", "あげく", "末に"] },
      { q: "男は 泥 ___ になって 逃げた。", ans: "まみれ", options: ["まみれ", "に沿って", "を通じて", "を通して"] },
      { q: "過去の 栄光 ___ の 自慢話。", ans: "まみれ", options: ["まみれ", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 109,
    level: "N1",
    title: "を顧みず (without regard for)",
    desc: "Bold disregard",
    patterns: [
      { id: "109.1", label: "～を顧みず", meaning: "Without regard for / Disregarding", explanation: "Indicates performing an action regardless of danger, risk, or negative reactions.", examples: [{ jp: "危険を 顧みず 助けました。", romaji: "Kiken o kaerimizu tasukemashita.", en: "He helped without regard for danger." }] }
    ],
    quiz: [
      { q: "周囲の 反対 ___ 、彼は 自分の 道を 進んだ。", ans: "を顧みず", options: ["を顧みず", "に際して", "に応じて", "に伴って"] },
      { q: "家族の 心配 ___、彼は 冒険に 出た。", ans: "を顧みず", options: ["を顧みず", "として", "にとって", "につき"] },
      { q: "彼は 自分の 健康 ___ 働き続けた。", ans: "を顧みず", options: ["を顧みず", "に加えて", "を除いて", "を通して"] },
      { q: "世間の 批判 ___、彼女は 真実を 語った。", ans: "を顧みず", options: ["を顧みず", "ばかりに", "ものの", "反面"] },
      { q: "過去の 失敗 ___ 、再挑戦した。", ans: "を顧みず", options: ["を顧みず", "にしたがって", "につれて", "とともに"] },
      { q: "損害 ___ 、工事を 強行した。", ans: "を顧みず", options: ["を顧みず", "に限り", "さえ", "こそ"] },
      { q: "命 ___ 、戦場へ 向かった。", ans: "を顧みず", options: ["を顧みず", "のところに", "まえに", "うちに"] },
      { q: "私財 ___ 、慈善活動に 励んだ。", ans: "を顧みず", options: ["を顧みず", "ばかりに", "あげく", "末に"] },
      { q: "困難 ___ 、目標を 達成した。", ans: "を顧みず", options: ["を顧みず", "に沿って", "を通じて", "を通して"] },
      { q: "危険 ___ 、救助に 向かった。", ans: "を顧みず", options: ["を顧みず", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 110,
    level: "N1",
    title: "をよそに (ignoring)",
    desc: "Unconcerned action",
    patterns: [
      { id: "110.1", label: "～をよそに", meaning: "Ignoring / Despite / Without concern for", explanation: "Used when someone does something while completely ignoring someone else's opinion, feelings, or situation.", examples: [{ jp: "親の 心配をよそに 遊んでいます。", romaji: "Oya no shinpai o yoso ni asonde imasu.", en: "I’m playing, ignoring my parents’ worries." }] }
    ],
    quiz: [
      { q: "周囲の 反対 ___、二人は 結婚した。", ans: "をよそに", options: ["をよそに", "に際して", "に応じて", "に伴って"] },
      { q: "彼女の 苦労 ___、彼は ギャンブルに 溺れている。", ans: "をよそに", options: ["をよそに", "として", "にとって", "につき"] },
      { q: "世間の 喧騒 ___ 、彼は 田舎で 静かに 暮らしている。", ans: "をよそに", options: ["をよそに", "に加えて", "を除いて", "を通して"] },
      { q: "不況 ___、その 店は 繁盛している。", ans: "をよそに", options: ["をよそに", "ばかりに", "ものの", "反面"] },
      { q: "住民の 不安 ___、開発は どんどん 進んでいる。", ans: "をよそに", options: ["をよそに", "にしたがって", "につれて", "とともに"] },
      { q: "病状の 悪化 ___、彼は 仕事を 辞めない。", ans: "をよそに", options: ["をよそに", "に限り", "さえ", "こそ"] },
      { q: "みんなが 忙しく 働いている ___、彼は 昼寝を している。", ans: "のをよそに", options: ["のをよそに", "のところに", "まえに", "うちに"] },
      { q: "期待 ___、結果は 散々なものだった。", ans: "をよそに", options: ["をよそに", "ばかりに", "あげく", "末に"] },
      { q: "厳しい 校則 ___、生徒たちは 自由に 過ごしている。", ans: "をよそに", options: ["をよそに", "に沿って", "を通じて", "を通して"] },
      { q: "親の 期待 ___、彼は 芸術家に なった。", ans: "をよそに", options: ["をよそに", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 111,
    level: "N1",
    title: "に耐えない (cannot bear)",
    desc: "Intolerable state",
    patterns: [
      { id: "111.1", label: "～に耐えない", meaning: "Cannot bear / Unbearable / Not worth (negative)", explanation: "Indicates that something is too painful, disgusting, or terrible to look at or listen to. Also means 'extremely' with emotions like gratitude.", examples: [{ jp: "見るに耐えない 光景です。", romaji: "Miru ni taenai koukei desu.", en: "It’s a sight too painful to watch." }] }
    ],
    quiz: [
      { q: "彼の 演奏は 聞く ___ ものだった。", ans: "に耐えない", options: ["に耐えない", "に際して", "に応じて", "に伴って"] },
      { q: "その ニュースは 正視 ___ 惨状を 伝えていた。", ans: "に耐えない", options: ["に耐えない", "として", "にとって", "につき"] },
      { q: "彼の 態度は 噴飯 ___。", ans: "に耐えない", options: ["に耐えない", "に加えて", "を除いて", "を通して"] },
      { q: "多くの 方々の 援助を いただき、感謝 ___。", ans: "に耐えません", options: ["に耐えません", "ばかりに", "ものの", "反面"] },
      { q: "その 映画は 残酷すぎて 見る ___。", ans: "に耐えない", options: ["に耐えない", "にしたがって", "につれて", "とともに"] },
      { q: "彼の 冗談は 聞く ___ 下品な ものだ。", ans: "に耐えない", options: ["に耐えない", "に限り", "さえ", "こそ"] },
      { q: "失敗の 事実に 後悔 ___。", ans: "に耐えない", options: ["に耐えない", "のところに", "まえに", "うちに"] },
      { q: "彼の 行為は 非難 ___ ものだ。", ans: "に耐えない", options: ["に耐えない", "ばかりに", "あげく", "末に"] },
      { q: "その 結末は 涙 ___ ものだった。", ans: "に耐えない", options: ["に耐えない", "に沿って", "を通じて", "を通して"] },
      { q: "皆様の ご厚意、感謝 ___。", ans: "に耐えません", options: ["に耐えません", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 112,
    level: "N1",
    title: "に即して (in line with)",
    desc: "Fact-based action",
    patterns: [
      { id: "112.1", label: "～に即して", meaning: "In line with / According to / Based on", explanation: "Indicates doing something exactly according to the facts, reality, or regulations.", examples: [{ jp: "現実に 即して 考えましょう。", romaji: "Genjitsu ni sokushite kangaemashou.", en: "Let's think in line with reality." }] }
    ],
    quiz: [
      { q: "事実 ___ 、正確に 報告してください。", ans: "に即して", options: ["に即して", "に際して", "に応じて", "に伴って"] },
      { q: "法規 ___、適切に 処理する。", ans: "に即して", options: ["に即して", "として", "にとって", "につき"] },
      { q: "個人の 能力 ___ 、仕事を 割り当てる。", ans: "に即して", options: ["に即して", "に加えて", "を除いて", "を通して"] },
      { q: "時代の 変化 ___ 、教育カリキュラムを 見直す。", ans: "に即して", options: ["に即して", "ばかりに", "ものの", "反面"] },
      { q: "マニュアル ___ 、操作を 進めてください。", ans: "に即して", options: ["に即して", "にしたがって", "につれて", "とともに"] },
      { q: "現場の 状況 ___、柔軟に 対応する。", ans: "に即して", options: ["に即して", "に限り", "さえ", "こそ"] },
      { q: "自分の 経験 ___ 、具体的な アドバイスを する。", ans: "に即して", options: ["に即して", "のところに", "まえに", "うちに"] },
      { q: "相手の レベル ___ 、教え方を 変える。", ans: "に即して", options: ["に即して", "ばかりに", "あげく", "末に"] },
      { q: "計画 ___ 、着実に プロジェクトを 進める。", ans: "に即して", options: ["に即して", "に沿って", "を通じて", "を通して"] },
      { q: "ルール ___ 、公正に 審査する。", ans: "に即して", options: ["に即して", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 113,
    level: "N1",
    title: "を余儀なくされる (be forced to)",
    desc: "Inevitable compulsion",
    patterns: [
      { id: "113.1", label: "～を余儀なくされる", meaning: "Be forced to / Be compelled to", explanation: "Indicates that one has no choice but to do something due to external circumstances.", examples: [{ jp: "中止を 余儀なくされました。", romaji: "Chuushi o yogi naku saremashita.", en: "We were forced to cancel." }] }
    ],
    quiz: [
      { q: "故障のため、帰宅 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "に際して", "に応じて", "に伴って"] },
      { q: "資金不足で、計画の 変更 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "として", "にとって", "につき"] },
      { q: "怪我により、引退 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "に加えて", "を除いて", "を通して"] },
      { q: "大雪の影響で、電車の 中での 待機 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "ばかりに", "ものの", "反面"] },
      { q: "赤字続きで、店の 閉鎖 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "にしたがって", "につれて", "とともに"] },
      { q: "不祥事の発覚により、社長は 辞任 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "に限り", "さえ", "こそ"] },
      { q: "激しい 雨で、キャンプの中止 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "のところに", "まえに", "うちに"] },
      { q: "病状が悪化し、長期の 入院 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "ばかりに", "あげく", "末に"] },
      { q: "激動の 社会情勢の中で、方針の 転換 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "に沿って", "を通じて", "を通して"] },
      { q: "契約違反により、損害賠償 ___。", ans: "を余儀なくされた", options: ["を余儀なくされた", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 114,
    level: "N1",
    title: "いかに～ても (no matter how)",
    desc: "Unrelenting condition",
    patterns: [
      { id: "114.1", label: "いかに～ても", meaning: "No matter how / Even if", explanation: "Used to emphasize that the result doesn't change regardless of the degree or amount of something.", examples: [{ jp: "いかに 忙しくても 行きます。", romaji: "Ikani isogashikutemo ikimasu.", en: "No matter how busy, I’ll go." }] }
    ],
    quiz: [
      { q: "___ 困難でも、最後まで 諦めない。", ans: "いかに", options: ["いかに", "もし", "たとえ", "かなり"] },
      { q: "___ 謝られても、許すことは できない。", ans: "いかに", options: ["いかに", "あまり", "特に", "かなり"] },
      { q: "___ 努力しても、報われないことが ある。", ans: "いかに", options: ["いかに", "どうして", "なぜなら", "だから"] },
      { q: "___ 高価な ものでも、心が こもっていなければ 意味がない。", ans: "いかに", options: ["いかに", "そんなに", "あんなに", "こんなに"] },
      { q: "___ 隠そうとしても、いつかは バレる。", ans: "いかに", options: ["いかに", "ただ", "もし", "たとえ"] },
      { q: "___ 時代が 変わっても、大切な ものは 変わらない。", ans: "いかに", options: ["いかに", "特に", "かなり", "のみ"] },
      { q: "___ 才能が あっても、努力を 怠れば 成功しない。", ans: "いかに", options: ["いかに", "ただ", "もし", "たとえ"] },
      { q: "___ 離れていても、心は つながっている。", ans: "いかに", options: ["いかに", "あまり", "特に", "かなり"] },
      { q: "___ 苦しくても、笑顔を 忘れない。", ans: "いかに", options: ["いかに", "どうして", "なぜなら", "だから"] },
      { q: "___ 権力が あっても、死を 避けることは できない。", ans: "いかに", options: ["いかに", "そんなに", "あんなに", "こんなに"] }
    ]
  },
  {
    chapter: 115,
    level: "N1",
    title: "にかかわらず (regardless)",
    desc: "Universal application",
    patterns: [
      { id: "115.1", label: "～にかかわらず", meaning: "Regardless of / Irrespective of", explanation: "Indicates that something remains the same regardless of the factor mentioned.", examples: [{ jp: "経験の 有無にかかわらず 応募できます。", romaji: "Keiken no umu ni kakawarazu oubo dekimasu.", en: "You can apply regardless of experience." }] }
    ],
    quiz: [
      { q: "国籍 ___、誰でも 参加できる。", ans: "にかかわらず", options: ["にかかわらず", "に際して", "に応じて", "に伴って"] },
      { q: "天候 ___、試合は 行われます。", ans: "にかかわらず", options: ["にかかわらず", "として", "にとって", "につき"] },
      { q: "理由の 如何 ___、遅刻は 認められない。", ans: "にかかわらず", options: ["にかかわらず", "に加えて", "を除いて", "を通して"] },
      { q: "年齢 ___ 、同じ 料金です。", ans: "にかかわらず", options: ["にかかわらず", "ばかりに", "ものの", "反面"] },
      { q: "やる、やらない ___、一度 相談してほしい。", ans: "にかかわらず", options: ["にかかわらず", "にしたがって", "につれて", "とともに"] },
      { q: "好き嫌い ___ 、全部 食べなさい。", ans: "にかかわらず", options: ["にかかわらず", "に限り", "さえ", "こそ"] },
      { q: "昼夜 ___ 、工事は 続いている。", ans: "にかかわらず", options: ["にかかわらず", "のところに", "まえに", "うちに"] },
      { q: "金額の 多寡 ___、誠意を 示したい。", ans: "にかかわらず", options: ["にかかわらず", "ばかりに", "あげく", "末に"] },
      { q: "成否 ___ 、全力を 尽くすことが 大切だ。", ans: "にかかわらず", options: ["にかかわらず", "に沿って", "を通じて", "を通して"] },
      { q: "職種 ___ 、コミュニケーション能力は 必要だ。", ans: "にかかわらず", options: ["にかかわらず", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 116,
    level: "N1",
    title: "を踏まえて (based on)",
    desc: "Considerate foundation",
    patterns: [
      { id: "116.1", label: "～を踏まえて", meaning: "Based on / Taking into account", explanation: "Used when making a decision or taking action after considering specific facts or opinions.", examples: [{ jp: "意見を 踏まえて 決めます。", romaji: "Iken o fumaete kimemasu.", en: "We’ll decide based on opinions." }] }
    ],
    quiz: [
      { q: "今回の 失敗 ___ 、次回の 計画を 立てる。", ans: "を踏まえて", options: ["を踏まえて", "に際して", "に応じて", "に伴って"] },
      { q: "アンケート 結果 ___、サービスを 改善する。", ans: "を踏まえて", options: ["を踏まえて", "として", "にとって", "につき"] },
      { q: "現実 ___ 、可能な 目標を 設定しよう。", ans: "を踏まえて", options: ["を踏まえて", "に加えて", "を除いて", "を通して"] },
      { q: "前回の 反省 ___ 、新しい ルールを 作った。", ans: "を踏まえて", options: ["を踏まえて", "ばかりに", "ものの", "反面"] },
      { q: "周囲の 状況 ___ 、慎重に 行動すべきだ。", ans: "を踏まえて", options: ["を踏まえて", "にしたがって", "につれて", "とともに"] },
      { q: "客の 要望 ___ 、メニューを 変更した。", ans: "を踏まえて", options: ["を踏まえて", "に限り", "さえ", "こそ"] },
      { q: "過去の 経緯 ___ 、今回の 件を 判断する。", ans: "を踏まえて", options: ["を踏まえて", "のところに", "まえに", "うちに"] },
      { q: "試験の 傾向 ___ 、対策を 練る。", ans: "を踏まえて", options: ["を踏まえて", "ばかりに", "あげく", "末に"] },
      { q: "専門家の 指摘 ___ 、論文を 修正した。", ans: "を踏まえて", options: ["を踏まえて", "に沿って", "を通じて", "を通して"] },
      { q: "彼の 能力 ___ 、役職を 決める。", ans: "を踏まえて", options: ["を踏まえて", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 117,
    level: "N1",
    title: "を経て (after passing through)",
    desc: "Procedural arrival",
    patterns: [
      { id: "117.1", label: "～を経て", meaning: "After passing through / Via / After a period of", explanation: "Indicates moving to a next stage after passing through a certain place, time, or process.", examples: [{ jp: "会議を 経て 結論に 至りました。", romaji: "Kaigi o hete ketsuron ni itarimashita.", en: "After meetings, we reached a conclusion." }] }
    ],
    quiz: [
      { q: "長い 沈黙 ___ 、彼は やっと 口を 開いた。", ans: "を経て", options: ["を経て", "に際して", "に応じて", "に伴って"] },
      { q: "アメリカ ___ 、日本に 戻った。", ans: "を経て", options: ["を経て", "として", "にとって", "につき"] },
      { q: "紆余曲折 ___、ようやく 合意に 達した。", ans: "を経て", options: ["を経て", "に加えて", "を除いて", "を通して"] },
      { q: "訓練 ___ 、彼は 立派な パイロットに なった。", ans: "を経て", options: ["を経て", "ばかりに", "ものの", "反面"] },
      { q: "数々の 困難 ___ 、プロジェクトは 成功した。", ans: "を経て", options: ["を経て", "にしたがって", "につれて", "とともに"] },
      { q: "10年の 歳月 ___ 、二人は 再会した。", ans: "を経て", options: ["を経て", "に限り", "さえ", "こそ"] },
      { q: "厳しい 審査 ___ 、採用が 決まった。", ans: "を経て", options: ["を経て", "のところに", "まえに", "うちに"] },
      { q: "実地 研修 ___ 、配属先が 決まる。", ans: "を経て", options: ["を経て", "ばかりに", "あげく", "末に"] },
      { q: "話し合い ___ 、新しい 方針が 決まった。", ans: "を経て", options: ["を経て", "に沿って", "を通じて", "を通して"] },
      { q: "数か所の 港 ___ 、船は 目的地に 到着した。", ans: "を経て", options: ["を経て", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 118,
    level: "N1",
    title: "にひきかえ (in contrast to)",
    desc: "Stark comparison",
    patterns: [
      { id: "118.1", label: "～にひきかえ", meaning: "In contrast to / Unlikely / Whereas", explanation: "Used to strongly compare two things, emphasizing how different they are.", examples: [{ jp: "昨日と ひきかえ、今日は 暑いです。", romaji: "Kinou to hikikae, kyou wa atsui desu.", en: "In contrast to yesterday, today is hot." }] }
    ],
    quiz: [
      { q: "兄が 社交的な ___ 、弟は 内気だ。", ans: "のにひきかえ", options: ["のにひきかえ", "に際して", "に応じて", "に伴って"] },
      { q: "去年の 豊作 ___ 、今年は 凶作だ。", ans: "にひきかえ", options: ["にひきかえ", "として", "にとって", "につき"] },
      { q: "最新型の 便利さ ___ 、旧型は 不便で 仕方ない。", ans: "にひきかえ", options: ["にひきかえ", "に加えて", "を除いて", "を通して"] },
      { q: "彼女の 勤勉さ ___ 、彼は 怠けて ばかりだ。", ans: "にひきかえ", options: ["にひきかえ", "ばかりに", "ものの", "反面"] },
      { q: "都会の 喧騒 ___ 、田舎は 静かで いい。", ans: "にひきかえ", options: ["にひきかえ", "にしたがって", "につれて", "とともに"] },
      { q: "昨日の 晴天 ___ 、今日は 土砂降りだ。", ans: "にひきかえ", options: ["にひきかえ", "に限り", "さえ", "こそ"] },
      { q: "一回目の 成功 ___ 、二回目は 散々だった。", ans: "にひきかえ", options: ["にひきかえ", "のところに", "まえに", "うちに"] },
      { q: "彼の 寛大さ ___ 、彼女は 執念深い。", ans: "にひきかえ", options: ["にひきかえ", "ばかりに", "あげく", "末に"] },
      { q: "昔の 活気 ___ 、今の 商店街は 寂しい。", ans: "にひきかえ", options: ["にひきかえ", "に沿って", "を通じて", "を通して"] },
      { q: "彼の 成功 ___ 、私の 人生は 冴えない。", ans: "にひきかえ", options: ["にひきかえ", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 119,
    level: "N1",
    title: "をものともせず (in spite of)",
    desc: "Fearless defiance",
    patterns: [
      { id: "119.1", label: "～をものともせず", meaning: "In spite of / In defiance of / Braving", explanation: "Indicates doing something bravely while ignoring a major obstacle or danger.", examples: [{ jp: "雨を ものともせず 走りました。", romaji: "Ame o mono tomo sezu hashirimashita.", en: "He ran in spite of the rain." }] }
    ],
    quiz: [
      { q: "周囲の 低評価 ___ 、彼は 努力を 続けた。", ans: "をものともせず", options: ["をものともせず", "に際して", "に応じて", "に伴って"] },
      { q: "大怪我 ___ 、彼は 試合に 出場した。", ans: "をものともせず", options: ["をものともせず", "として", "にとって", "につき"] },
      { q: "吹雪 ___ 、登山隊は 山頂を 目指した。", ans: "をものともせず", options: ["をものともせず", "に加えて", "を除いて", "を通して"] },
      { q: "激しい 批判 ___ 、彼は 自分の 信念を 貫いた。", ans: "をものともせず", options: ["をものともせず", "ばかりに", "ものの", "反面"] },
      { q: "肉体的な 衰え ___ 、彼は 現役で あり続けた。", ans: "をものともせず", options: ["をものともせず", "にしたがって", "につれて", "とともに"] },
      { q: "逆風 ___ 、会社を 急成長させた。", ans: "をものともせず", options: ["をものともせず", "に限り", "さえ", "こそ"] },
      { q: "家族の 反対 ___ 、彼女は 海外へ 飛び出した。", ans: "をものともせず", options: ["をものともせず", "のところに", "まえに", "うちに"] },
      { q: "度重なる 失敗 ___ 、彼は 挑戦を 辞めなかった。", ans: "をものともせず", options: ["をものともせず", "ばかりに", "あげく", "末に"] },
      { q: "激動の 時代 ___ 、彼は 自分の 生き方を 通した。", ans: "をものともせず", options: ["をものともせず", "に沿って", "を通じて", "を通して"] },
      { q: "多額の 借金 ___ 、彼は 事業を 成功させた。", ans: "をものともせず", options: ["をものともせず", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 120,
    level: "N1",
    title: "かたがた (for two purposes)",
    desc: "Dual-intent actions",
    patterns: [
      { id: "120.1", label: "～かたがた", meaning: "For two purposes / At the same time", explanation: "Used to indicate that an action is done for two different reasons (formal).", examples: [{ jp: "ご挨拶かたがた 伺いました。", romaji: "Go-aisatsu katagata ukagaimashita.", en: "I visited both to greet and for another purpose." }] }
    ],
    quiz: [
      { q: "お礼 ___、近況を 報告した。", ans: "かたがた", options: ["かたがた", "に際して", "に応じて", "に伴って"] },
      { q: "散歩 ___、買い物に 行く。", ans: "かたがた", options: ["かたがた", "として", "にとって", "につき"] },
      { q: "お見舞い ___、本を 届けた。", ans: "かたがた", options: ["かたがた", "に加えて", "を除いて", "を通して"] },
      { q: "報告 ___、夕食を 共に した。", ans: "かたがた", options: ["かたがた", "ばかりに", "ものの", "反面"] },
      { q: "観光 ___ 、友人を 訪ねる。", ans: "かたがた", options: ["かたがた", "にしたがって", "につれて", "とともに"] },
      { q: "お詫び ___、お菓子を 持って行った。", ans: "かたがた", options: ["かたがた", "に限り", "さえ", "こそ"] },
      { q: "運動 ___、駅まで 歩く。", ans: "かたがた", options: ["かたがた", "のところに", "まえに", "うちに"] },
      { q: "調査 ___ 、地方を 巡る。", ans: "かたがた", options: ["かたがた", "ばかりに", "あげく", "末に"] },
      { q: "新年の 挨拶 ___、集まった。", ans: "かたがた", options: ["かたがた", "に沿って", "を通じて", "を通して"] },
      { q: "視察 ___ 、工場を 訪問した。", ans: "かたがた", options: ["かたがた", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 121,
    level: "N1",
    title: "に堪える (worthy / bearable)",
    desc: "Sufficient quality",
    patterns: [
      { id: "121.1", label: "～に堪える", meaning: "Worthy of / Bearable", explanation: "Indicates that something has enough value or strength to be worth a certain action (often appreciation or critical review).", examples: [{ jp: "見るに 堪える 作品です。", romaji: "Miru ni taeru sakuhin desu.", en: "It’s a work worth seeing." }] }
    ],
    quiz: [
      { q: "その 論文は 批判 ___ ものだ。", ans: "に堪える", options: ["に堪える", "に際して", "に応じて", "に伴って"] },
      { q: "大人の 鑑賞 ___ アニメーションだ。", ans: "に堪える", options: ["に堪える", "として", "にとって", "につき"] },
      { q: "数回の 使用 ___ 丈夫な 袋。", ans: "に堪える", options: ["に堪える", "に加えて", "を除いて", "を通して"] },
      { q: "この ビルは 震度7の 地震 ___。", ans: "に堪える", options: ["に堪える", "ばかりに", "ものの", "反面"] },
      { q: "彼の 音楽は 何度 聞いても 鑑賞 ___。", ans: "に堪える", options: ["に堪える", "にしたがって", "につれて", "とともに"] },
      { q: "過酷な 環境 ___ 体力を つける。", ans: "に堪える", options: ["に堪える", "に限り", "さえ", "こそ"] },
      { q: "その 絵画は 長年の 保存 ___。", ans: "に堪える", options: ["に堪える", "のところに", "まえに", "うちに"] },
      { q: "専門家の 評価 ___ 研究内容だ。", ans: "に堪える", options: ["に堪える", "ばかりに", "あげく", "末に"] },
      { q: "この 橋は 激流 ___ 設計に なっている。", ans: "に堪える", options: ["に堪える", "に沿って", "を通じて", "を通して"] },
      { q: "読む ___ 価値の ある 本だ。", ans: "に堪える", options: ["に堪える", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 122,
    level: "N1",
    title: "を境に (turning point)",
    desc: "Pivotal change",
    patterns: [
      { id: "122.1", label: "～を境に", meaning: "After / Since / Using X as a boundary", explanation: "Indicates that a major change occurred after a specific event or point in time.", examples: [{ jp: "結婚を 境に 生活が 変わりました。", romaji: "Kekkon o sakai ni seikatsu ga kawarimashita.", en: "After marriage, life changed." }] }
    ],
    quiz: [
      { q: "あの日 ___、彼は 変わってしまった。", ans: "を境に", options: ["を境に", "に際して", "に応じて", "に伴って"] },
      { q: "還暦 ___ 、新しい 趣味を 始めた。", ans: "を境に", options: ["を境に", "として", "にとって", "につき"] },
      { q: "卒業 ___ 、連絡が 途絶えた。", ans: "を境に", options: ["を境に", "に加えて", "を除いて", "を通して"] },
      { q: "病気 ___、健康に 気をつけるように なった。", ans: "を境に", options: ["を境に", "ばかりに", "ものの", "反面"] },
      { q: "不祥事 ___ 、会社の 評判は 落ちた。", ans: "を境に", options: ["を境に", "にしたがって", "につれて", "とともに"] },
      { q: "ある 事件 ___ 、二人の 仲は 悪化した。", ans: "を境に", options: ["を境に", "に限り", "さえ", "こそ"] },
      { q: "40歳 ___ 、体力の 衰えを 感じる。", ans: "を境に", options: ["を境に", "のところに", "まえに", "うちに"] },
      { q: "その 発言 ___ 、議論は 別の 方向へ 進んだ。", ans: "を境に", options: ["を境に", "ばかりに", "あげく", "末に"] },
      { q: "引越し ___ 、性格が 明るくなった。", ans: "を境に", options: ["を境に", "に沿って", "を通じて", "を通して"] },
      { q: "2000年 ___ 、IT化が 急速に 進んだ。", ans: "を境に", options: ["を境に", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 123,
    level: "N1",
    title: "ならでは (unique to)",
    desc: "Exclusive quality",
    patterns: [
      { id: "123.1", label: "～ならでは", meaning: "Unique to / Only possible with", explanation: "Used to emphasize that a certain positive quality or result is only possible because of a specific person, place, or thing.", examples: [{ jp: "日本ならではの 文化です。", romaji: "Nihon naradeha no bunka desu.", en: "It’s a culture unique to Japan." }] }
    ],
    quiz: [
      { q: "プロ ___ の 技術に 感服した。", ans: "ならでは", options: ["ならでは", "に際して", "に応じて", "に伴って"] },
      { q: "地元 ___ の 美味しい 料理を 食べた。", ans: "ならでは", options: ["ならでは", "として", "にとって", "につき"] },
      { q: "彼 ___ の 素晴らしい 発想だ。", ans: "ならでは", options: ["ならでは", "に加えて", "を除いて", "を通して"] },
      { q: "老舗 ___ の 伝統の 味。", ans: "ならでは", options: ["ならでは", "ばかりに", "ものの", "反面"] },
      { q: "女性 ___ の 細やかな 気遣い。", ans: "ならでは", options: ["ならでは", "にしたがって", "につれて", "とともに"] },
      { q: "夏 ___ の 楽しみを 満喫する。", ans: "ならでは", options: ["ならでは", "に限り", "さえ", "こそ"] },
      { q: "この 店 ___ の 特製 ソース。", ans: "ならでは", options: ["ならでは", "のところに", "まえに", "うちに"] },
      { q: "雪国 ___ の 美しい 風景。", ans: "ならでは", options: ["ならでは", "ばかりに", "あげく", "末に"] },
      { q: "一流 ホテル ___ の サービス。", ans: "ならでは", options: ["ならでは", "に沿って", "を通じて", "を通して"] },
      { q: "若者 ___ の 自由な 発想。", ans: "ならでは", options: ["ならでは", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 124,
    level: "N1",
    title: "にして (only then / at age)",
    desc: "Precise timing",
    patterns: [
      { id: "124.1", label: "～にして", meaning: "Only then / Even at / At the age of", explanation: "Indicates a surprising timing or a specific condition that brings about a result.", examples: [{ jp: "40歳にして やっと 成功した。", romaji: "Yonjuussai ni shite yatto seikou shita.", en: "Only at 40 did he finally succeed." }] }
    ],
    quiz: [
      { q: "一度の 練習 ___ 、完璧に 覚えた。", ans: "にして", options: ["にして", "に際して", "に応じて", "に伴って"] },
      { q: "この 年齢 ___ 、初めて 海外へ 行った。", ans: "にして", options: ["にして", "として", "にとって", "につき"] },
      { q: "三度目の 正直 ___ 、合格した。", ans: "にして", options: ["にして", "に加えて", "を除いて", "を通して"] },
      { q: "彼は 大富豪 ___ 、質素な 生活を 送っている。", ans: "にして", options: ["にして", "ばかりに", "ものの", "反面"] },
      { q: "天才 ピアニスト ___、努力家でも ある。", ans: "にして", options: ["にして", "にしたがって", "につれて", "とともに"] },
      { q: "死後 100年 ___ 、彼の 才能が 認められた。", ans: "にして", options: ["にして", "に限り", "さえ", "こそ"] },
      { q: "わずか 5歳 ___ 、漢字を すべて 読める。", ans: "にして", options: ["にして", "のところに", "まえに", "うちに"] },
      { q: "プロ ___ 間違えることもある。", ans: "にして", options: ["にして", "ばかりに", "あげく", "末に"] },
      { q: "一瞬 ___ 景色が 変わった。", ans: "にして", options: ["にして", "に沿って", "を通じて", "を通して"] },
      { q: "不運な 死 ___ 彼は 満足していただろう。", ans: "にして", options: ["にして", "次第", "末に", "あげく"] }
    ]
  },
  {
    chapter: 125,
    level: "N1",
    title: "とあって (because of)",
    desc: "Exceptional cause",
    patterns: [
      { id: "125.1", label: "～とあって", meaning: "Because / Due to (special situation)", explanation: "Indicates that because of a certain special or unusual situation, a natural result follows.", examples: [{ jp: "休日とあって、道が 混んでいます。", romaji: "Kyuujitsu to atte, michi ga konde imasu.", en: "Because it’s a holiday, the roads are crowded." }] }
    ],
    quiz: [
      { q: "有名人の 来店 ___、店は 大騒ぎに なった。", ans: "とあって", options: ["とあって", "に際して", "に応じて", "に伴って"] },
      { q: "久しぶりの 晴天 ___ 、公園は 人で いっぱいだ。", ans: "とあって", options: ["とあって", "として", "にとって", "につき"] },
      { q: "人気歌手の コンサート ___、チケットは 即 完売した。", ans: "とあって", options: ["とあって", "に加えて", "を除いて", "を通して"] },
      { q: "初雪 ___ 、子どもたちは 喜んで 庭へ 駆け出した。", ans: "とあって", options: ["とあって", "ばかりに", "ものの", "反面"] },
      { q: "最後の 試合 ___ 、応援にも 熱が 入る。", ans: "とあって", options: ["とあって", "にしたがって", "につれて", "とともに"] },
      { q: "無料 ___ 、大勢の 人が 詰めかけた。", ans: "とあって", options: ["とあって", "に限り", "さえ", "こそ"] },
      { q: "急な 呼び出し ___ 、彼は 慌てて 出かけて行った。", ans: "とあって", options: ["とあって", "のところに", "まえに", "うちに"] },
      { q: "歴史的な 会見 ___、世界中が 注目している。", ans: "とあって", options: ["とあって", "ばかりに", "あげく", "末に"] },
      { q: "新製品の 発売日 ___ 、店の 前には 行列が できた。", ans: "とあって", options: ["とあって", "に沿って", "を通じて", "を通して"] },
      { q: "夏休み 最初の日 ___ 、海は 賑わっている。", ans: "とあって", options: ["とあって", "次第", "末に", "あげく"] }
    ]
  }
];
