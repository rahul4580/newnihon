// Minna no Nihongo N5 - Chapters 1 to 13 Complete Dataset
export const GRAMMAR_DATA = [
  {
    chapter: 1,
    title: "Introductions",
    desc: "N1 wa N2 desu / N mo / N no",
    patterns: [
      { id: "1.1", label: "～は～です", meaning: "A is B", explanation: "Basic sentence structure to identify the topic.", examples: [{ jp: "わたし は ラフル です。", en: "I am Rahul." }, { jp: "サントスさん は ブラジルじん です。", en: "Mr. Santos is Brazilian." }] },
      { id: "1.2", label: "～は～じゃありません", meaning: "A is not B", explanation: "The negative polite form of 'desu'.", examples: [{ jp: "わたし は 先生 じゃありません。", en: "I am not a teacher." }, { jp: "あの人 は 学生 じゃありません。", en: "That person is not a student." }] },
      { id: "1.3", label: "～は～ですか", meaning: "Is A B?", explanation: "Particles 'ka' at the end makes a question.", examples: [{ jp: "あなた は 会社員 ですか。", en: "Are you a company employee?" }] },
      { id: "1.4", label: "N も", meaning: "Also / Too", explanation: "Replaces 'wa' when the topic is also the same.", examples: [{ jp: "ミラーさん は 会社員 です。サントスさん も 会社員 です。", en: "Mr. Miller is an employee. Mr. Santos is also an employee." }] },
      { id: "1.5", label: "N の N", meaning: "Possession / Belonging", explanation: "Connects two nouns, usually showing possession or category.", examples: [{ jp: "ミラーさん は IMC の 社員 です。", en: "Mr. Miller is an employee of IMC." }] }
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
    title: "Things",
    desc: "Kore / Sore / Are / Kono / Sono",
    patterns: [
      { id: "2.1", label: "これ / それ / あれ", meaning: "This / That / That Over There", explanation: "Demonstrative pronouns used alone.", examples: [{ jp: "これ は 辞書 です。", en: "This is a dictionary." }, { jp: "それ は 何 ですか。", en: "What is that?" }] },
      { id: "2.2", label: "この / その / あの + N", meaning: "This / That / That (with Noun)", explanation: "Demonstrative adjectives that MUST be followed by a noun.", examples: [{ jp: "この 傘 は わたし の です。", en: "This umbrella is mine." }] },
      { id: "2.3", label: "～ですか", meaning: "Polite Questions", explanation: "Used to ask about things or choices.", examples: [{ jp: "それ は テープ ですか、ラジオ ですか。", en: "Is that a tape or a radio?" }] },
      { id: "2.4", label: "そうです / ちがいます", meaning: "It is so / It is wrong", explanation: "Standard responses to 'A is B' questions.", examples: [{ jp: "はい、そうです。", en: "Yes, it is." }, { jp: "いいえ、ちがいます。", en: "No, it's not." }] }
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
    title: "Places",
    desc: "Koko / Soko / Asoko / Doko",
    patterns: [
      { id: "3.1", label: "ここ / そこ / あそこ", meaning: "Place (Here / There / Over There)", explanation: "Demonstrative pronouns for locations.", examples: [{ jp: "ここ は 受付 です。", en: "Here is the reception." }, { jp: "電話 は あそこ です。", en: "The telephone is over there." }] },
      { id: "3.2", label: "～はどこですか", meaning: "Where is...?", explanation: "Asking for the location of a person or object.", examples: [{ jp: "お手洗い は どこ ですか。", en: "Where is the restroom?" }] },
      { id: "3.3", label: "～も", meaning: "Too / Also (Location)", explanation: "Using 'mo' with locations or objects in places.", examples: [{ jp: "ロビー も あそこ です。", en: "The lobby is also over there." }] },
      { id: "3.4", label: "～はいくらですか", meaning: "How much is...?", explanation: "Asking for the price of an item.", examples: [{ jp: "この ネクタイ は いくら ですか。", en: "How much is this tie?" }] }
    ],
    quiz: [
      { q: "ここ ___ きょうしつ です。", ans: "は", options: ["が", "は", "に", "を"] },
      { q: "お手洗いは ___ ですか。", ans: "どこ", options: ["どれ", "どこ", "どっち", "だれ"] },
      { q: "あそこ ___ じむしょ です。", ans: "は", options: ["に", "は", "を", "へ"] },
      { q: "エレベーター は ___ です。", ans: "あちら", options: ["あそこ", "あちら", "どこ", "これ"] },
      { q: "かいぎしつ は ___ ですか。", ans: "どこ", options: ["なに", "どこ", "だれ", "いくら"] },
      { q: "これ は ___ の ワイン ですか。", ans: "どこ", options: ["どこ", "いつ", "だれ", "なん"] },
      { q: "ねだん は ___ ですか。", ans: "いくら", options: ["いくら", "なん", "どこ", "いくつ"] },
      { q: "これは 1000円 ___ です。", ans: "です", options: ["です", "を", "に", "から"] },
      { q: "お国 は ___ ですか。", ans: "どちら", options: ["どちら", "だれ", "いつ", "どこ"] },
      { q: "すみません、電話は ___ ですか。", ans: "どこ", options: ["どこ", "どちら", "だれ", "これ"] }
    ]
  },
  {
    chapter: 4,
    title: "Existence",
    desc: "Arimasu / Imasu / Ni / To",
    patterns: [
      { id: "4.1", label: "～がいます / あります", meaning: "Existence (Living / Non-living)", explanation: "'Imasu' for people/animals, 'Arimasu' for objects/plants.", examples: [{ jp: "あそこに 男の人 が います。", en: "There is a man over there." }, { jp: "机 の 上 に 本 が あります。", en: "There is a book on the desk." }] },
      { id: "4.2", label: "Place に object が あります", meaning: "Location of Existence", explanation: "Particle 'ni' marks the position where something exists.", examples: [{ jp: "部屋 に テレビ が あります。", en: "There is a TV in the room." }] },
      { id: "4.3", label: "～と～", meaning: "And", explanation: "Particle 'to' connects two nouns exhaustively.", examples: [{ jp: "パン と 卵 を 食べます。", en: "I eat bread and eggs." }] }
    ],
    quiz: [
      { q: "あそこに 学生 ___ います。", ans: "が", options: ["が", "に", "を", "は"] },
      { q: "机の ___ に 電話が あります。", ans: "うえ", options: ["うえ", "なか", "まえ", "うしろ"] },
      { q: "あそこに ___ が ありますか。時計があります。", ans: "なに", options: ["なに", "だれ", "どこ", "どれ"] },
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
    chapter: 5,
    title: "Adjectives",
    desc: "I-adj / Na-adj / Totemo / Amari",
    patterns: [
      { id: "5.1", label: "形容詞 (い・な)", meaning: "Adjectives (I and Na type)", explanation: "Two categories of descriptive words in Japanese.", examples: [{ jp: "富士山 は 高い です。", en: "Mt. Fuji is high." }, { jp: "奈良 は 静か です。", en: "Nara is quiet." }] },
      { id: "5.2", label: "～は～です", meaning: "Describing things", explanation: "Basic adjective sentence structure.", examples: [{ jp: "この 料理 は おいしい です。", en: "This food is delicious." }] },
      { id: "5.3", label: "とても / あまり / すこし", meaning: "Adverbs of Degree", explanation: "Modifiers like 'very', 'not very' (used with negative), and 'a little'.", examples: [{ jp: "とても 暑い です。", en: "It is very hot." }, { jp: "あまり 寒くない です。", en: "It is not very cold." }] }
    ],
    quiz: [
      { q: "日本 ___ 食べ物は おいしいです。", ans: "の", options: ["の", "は", "に", "を"] },
      { q: "あの 人は とても ___ です。", ans: "親切", options: ["親切", "親切い", "親切な", "親切に"] },
      { q: "この お茶は ___ 熱いです。", ans: "ちょっと", options: ["ちょっと", "あまり", "ぜんぜん", "よく"] },
      { q: "昨日は あまり 暑く ___ です。", ans: "なかった", options: ["ない", "なかった", "でした", "くない"] },
      { q: "大学は ___ ですか。", ans: "どう", options: ["どう", "どんな", "どれ", "なに"] },
      { q: "シャントスさんは いそがしい ___ です。", ans: "です", options: ["だ", "です", "な", "に"] },
      { q: "この カバンは ___ 高くないです。", ans: "あまり", options: ["あまり", "とても", "すごく", "ちょっと"] },
      { q: "ワット先生は ___ 先生ですか。 親切な先生です。", ans: "どんな", options: ["どの", "どんな", "どう", "どのくらい"] },
      { q: "日本の 生活は ___ ですか。", ans: "なれましたか", options: ["なれましたか", "いましたか", "ありましたか", "しましたか"] },
      { q: "この 町は にぎやか ___ です。", ans: "じゃありません", options: ["くない", "じゃありません", "くないです", "は"] }
    ]
  },
  {
    chapter: 6,
    title: "Actions",
    desc: "Wo shimasu / Tabemasu / To",
    patterns: [
      { id: "6.1", label: "～を します", meaning: "Do (something)", explanation: "Describes performing an action or playing a sport.", examples: [{ jp: "わたし は テニス を します。", en: "I play tennis." }, { jp: "毎日 べんきょう を します。", en: "I study every day." }] },
      { id: "6.2", label: "～を たべます / のみます", meaning: "Eat / Drink", explanation: "Basic transitive verbs with objects.", examples: [{ jp: "朝ごはん を 食べます。", en: "I eat breakfast." }, { jp: "お茶 を 飲みます。", en: "I drink tea." }] },
      { id: "6.3", label: "～と", meaning: "With someone", explanation: "Particle 'to' marks the person you perform an action with.", examples: [{ jp: "家族 と 日本 へ 行きます。", en: "I will go to Japan with my family." }] }
    ],
    quiz: [
      { q: "おさけ ___ 飲みますか。", ans: "を", options: ["を", "は", "に", "が"] },
      { q: "どこ ___ 買いましたか。デパートです。", ans: "で", options: ["で", "に", "を", "へ"] },
      { q: "いっしょに 行き ___。", ans: "ませんか", options: ["ますか", "ませんか", "ました", "する"] },
      { q: "テニス ___ しましょう。", ans: "を", options: ["に", "を", "は", "で"] },
      { q: "あした なに ___ しますか。", ans: "を", options: ["に", "を", "で", "が"] },
      { q: "ロビー ___ 待ちましょう。", ans: "で", options: ["で", "に", "へ", "を"] },
      { q: "パン ___ 食べます。", ans: "を", options: ["を", "は", "に", "で"] },
      { q: "ちょっと 休み ___。", ans: "ましょう", options: ["ますか", "ましょう", "ました", "して"] },
      { q: "だれ ___ 食べますか。 友達と食べます。", ans: "と", options: ["と", "に", "を", "は"] },
      { q: "たばこ ___ すいますか。", ans: "を", options: ["を", "に", "は", "が"] }
    ]
  },
  {
    chapter: 7,
    title: "Methods & Giving",
    desc: "De / Agemasu / Moraimasu / Ni",
    patterns: [
      { id: "7.1", label: "～で", meaning: "By means of (Tool / Place)", explanation: "Marks the tool, language, or place of an action.", examples: [{ jp: "はし で 食べます。", en: "I eat with chopsticks." }, { jp: "日本語 で レポート を 書きます。", en: "I write report in Japanese." }] },
      { id: "7.2", label: "～を あげます / もらいます", meaning: "Give / Receive", explanation: "Verbs for the exchange of items.", examples: [{ jp: "わたし は 木村さん に 花 を あげました。", en: "I gave flowers to Ms. Kimura." }, { jp: "わたし は 先生 に 本 を もらいました。", en: "I received a book from my teacher." }] },
      { id: "7.3", label: "～に", meaning: "To / From (Person) or Time", explanation: "Particles used with giving/receiving verbs to mark the target.", examples: [{ jp: "七時 に 起きます。", en: "I wake up at 7 o'clock." }] }
    ],
    quiz: [
      { q: "はし ___ 食べます。", ans: "で", options: ["で", "に", "を", "へ"] },
      { q: "日本語 ___ レポートを 書きます。", ans: "で", options: ["で", "に", "を", "へ"] },
      { q: "母 ___ 花を あげます。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "先生 ___ 本を もらいました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "ケータイ ___ 電話します。", ans: "で", options: ["で", "に", "を", "へ"] },
      { q: "「Thank you」は 日本語 ___ なんですか。", ans: "で", options: ["で", "に", "は", "を"] },
      { q: "もう 荷物を 送り ___。", ans: "ましたか", options: ["ますか", "ましたか", "ます", "して"] },
      { q: "だれ ___ 習いましたか。", ans: "に", options: ["に", "を", "で", "へ"] },
      { q: "父 ___ プレゼントを くれました。", ans: "が", options: ["に", "が", "を", "は"] },
      { q: "て で 食べ ___ か。", ans: "ます", options: ["ます", "て", "に", "で"] }
    ]
  },
  {
    chapter: 8,
    title: "Adjective Past Form",
    desc: "Past Adjectives / Likes / Dou desu ka",
    patterns: [
      { id: "8.1", label: "形容詞 過去形", meaning: "Adjective Past Form", explanation: "Past forms for I-adjectives (~katta) and Na-adjectives (~deshita).", examples: [{ jp: "きのう は 暑かった です。", en: "It was hot yesterday." }, { jp: "パーティー は 静か でした。", en: "The party was quiet." }] },
      { id: "8.2", label: "～は～が～です", meaning: "Likes / Dislikes", explanation: "Structure to express preference or skill.", examples: [{ jp: "わたし は イタリア料理 が 好きです。", en: "I like Italian food." }] },
      { id: "8.3", label: "～はどうですか", meaning: "How is...?", explanation: "Asking for an opinion about something.", examples: [{ jp: "日本 の 生活 は どう ですか。", en: "How is life in Japan?" }] }
    ],
    quiz: [
      { q: "さくら は ___ です。", ans: "きれい", options: ["きれい", "きれいい", "きれな", "きれ"] },
      { q: "昨日は ___ です。 (cold)", ans: "さむかった", options: ["さむかった", "さむい", "さむな", "さむした"] },
      { q: "試験は ___ でした。", ans: "かんたん", options: ["かんたん", "かんたんい", "かんたな", "かんた"] },
      { q: "日本の 食べ物は ___ ですか。", ans: "どう", options: ["どう", "どんな", "どれ", "なに"] },
      { q: "日本語の 勉強は おもしろい ___。", ans: "ですが", options: ["ですが", "でも", "から", "ので"] },
      { q: "あまり ___ ありません。", ans: "よく", options: ["よい", "いい", "よく", "よな"] },
      { q: "果物 ___ 何が 好きですか。", ans: "のなかで", options: ["で", "に", "を", "のなかで"] },
      { q: "奈良は ___ 町ですか。", ans: "どんな", options: ["どう", "どんな", "どれ", "なに"] },
      { q: "試験は あまり ___ ありませんでした。", ans: "むずかしく", options: ["むずかしい", "むずかしく", "むずかな", "むずか"] },
      { q: "この本は ___ ないです。", ans: "おもしろく", options: ["おもしろい", "おもしろな", "おもしろく", "おもしろ"] }
    ]
  },
  {
    chapter: 9,
    title: "Abilities & Preferences",
    desc: "Wakarimasu / Dekimasu / Suki / Kirai",
    patterns: [
      { id: "9.1", label: "～が わかります / できます", meaning: "Understand / Can do", explanation: "Expressing understanding or ability using particle 'ga'.", examples: [{ jp: "わたし は 日本語 が わかります。", en: "I understand Japanese." }, { jp: "運転 が できます。", en: "I can drive." }] },
      { id: "9.2", label: "～は～が すき / きらい", meaning: "Like / Dislike", explanation: "Using 'ga' to mark the object of emotion.", examples: [{ jp: "わたし は 野球 が 好きです。", en: "I like baseball." }] }
    ],
    quiz: [
      { q: "わたしは 音楽 ___ 好きです。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "料理 ___ 上手ですね。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "漢字 ___ 分かりますか。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "時間が ありません ___ 、行きません。", ans: "から", options: ["から", "ので", "でも", "が"] },
      { q: "ひらがな ___ 少し 分かります。", ans: "が", options: ["が", "を", "は", "に"] },
      { q: "ぜんぜん 分かり ___。", ans: "ません", options: ["ます", "ません", "ました", "しない"] },
      { q: "車 の 運転 ___ できます。", ans: "が", options: ["が", "を", "に", "で"] },
      { q: "どうして です ___。", ans: "か", options: ["か", "ね", "よ", "わ"] },
      { q: "お金 ___ ありますか。", ans: "が", options: ["が", "を", "に", "で"] },
      { q: "わたし は 歌 ___ 下手です。", ans: "が", options: ["を", "が", "は", "に"] }
    ]
  },
  {
    chapter: 10,
    title: "Location & Ranges",
    desc: "Location Ni / Ya Nado / Kara Made",
    patterns: [
      { id: "10.1", label: "～に あります / います", meaning: "Exists in (Location)", explanation: "Marks the specific place where an object or person exists.", examples: [{ jp: "事務所 に ミラーさん が います。", en: "Mr. Miller is in the office." }] },
      { id: "10.2", label: "～や～など", meaning: "A, B, and so on", explanation: "Lists items non-exhaustively.", examples: [{ jp: "かばん の 中 に 手紙 や 写真 など が あります。", en: "There are letters, photos, and such in the bag." }] },
      { id: "10.3", label: "～から～まで", meaning: "From... to...", explanation: "Describes the start and end of a time or distance range.", examples: [{ jp: "東京 から 大阪 まで 三時間 かかります。", en: "It takes three hours from Tokyo to Osaka." }] }
    ],
    quiz: [
      { q: "あそこに コンビニ ___ あります。", ans: "が", options: ["が", "に", "を", "へ"] },
      { q: "うけつけに だれ ___ いますか。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "公園に なに ___ ありますか。", ans: "が", options: ["が", "を", "は", "に"] },
      { q: "冷蔵庫の なか ___ なにが ありますか。", ans: "に", options: ["に", "で", "を", "へ"] },
      { q: "となりに 日本人 ___ います。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "箱 の 中 に 写真 ___ 手紙 など が あります。", ans: "や", options: ["と", "や", "も", "は"] },
      { q: "銀行 は 9時 ___ 5時 ___ です。", ans: "から / まで", options: ["から / まで", "に / に", "で / で", "を / を"] },
      { q: "スイッチの した ___ あります。", ans: "に", options: ["に", "で", "を", "へ"] },
      { q: "どこ ___ ありません。", ans: "にも", options: ["に", "にも", "も", "は"] },
      { q: "女の子 ___ 二人 います。", ans: "が", options: ["が", "は", "を", "に"] }
    ]
  },
  {
    chapter: 11,
    title: "Counters & Range",
    desc: "Counters / Kurai / Dake",
    patterns: [
      { id: "11.1", label: "助数詞 (～人、～つ)", meaning: "Counter Words", explanation: "Specific suffixes for counting people, objects, thin things, etc.", examples: [{ jp: "りんご を 五つ 買いました。", en: "I bought five apples." }, { jp: "学生 が 10人 います。", en: "There are 10 students." }] },
      { id: "11.2", label: "～くらい / ぐらい", meaning: "About / Approximately", explanation: "Indicates an approximate amount or time period.", examples: [{ jp: "どのくらい 日本語 を 勉強しましたか。", en: "How long (about) did you study Japanese?" }] },
      { id: "11.3", label: "～だけ", meaning: "Only / Just", explanation: "Indicates that the quantity is limited.", examples: [{ jp: "休み は 日曜日 だけ です。", en: "Sunday is the only holiday." }] }
    ],
    quiz: [
      { q: "りんごを ___ 買いました。", ans: "四つ", options: ["四つ", "四", "四回", "四人"] },
      { q: "学生が ___ います。", ans: "五人", options: ["五人", "五つ", "五枚", "五回"] },
      { q: "一ヶ月 ___ 二回 映画を見ます。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "どのくらい ___ かかりますか。", ans: "時間", options: ["時間", "とき", "なんじ", "いくつ"] },
      { q: "きょうだいが ___ いますか。", ans: "何人", options: ["何人", "何個", "いくつ", "だれ"] },
      { q: "ぜんぶ ___ いくらですか。", ans: "で", options: ["で", "に", "を", "は"] },
      { q: "休みは 日曜日 ___ です。", ans: "だけ", options: ["だけ", "も", "は", "が"] },
      { q: "切手を ___ 買いました。", ans: "八枚", options: ["八枚", "八つ", "八人", "八回"] },
      { q: "クラスに 何人 ___ いますか。", ans: "が", options: ["が", "に", "を", "は"] },
      { q: "一週間に ___ 休みますか。", ans: "何日", options: ["何日", "何回", "いくつ", "なに"] }
    ]
  },
  {
    chapter: 12,
    title: "Past and Interrogatives",
    desc: "Past Tense Verbs / Interrogatives",
    patterns: [
      { id: "12.1", label: "動詞 過去形", meaning: "Past Tense Verbs", explanation: "Polite past forms of verbs ending in ~mashita / ~masen deshita.", examples: [{ jp: "昨日 は 勉強しました。", en: "I studied yesterday." }, { jp: "パーティー に 行きませんでした。", en: "I didn't go to the party." }] },
      { id: "12.2", label: "～ました / ～ませんでした", meaning: "Did / Did not", explanation: "Standard affirmative and negative past polite Verb forms.", examples: [{ jp: "昨日 10時 に 寝ました。", en: "I went to bed at 10 last night." }] },
      { id: "12.3", label: "～は～ましたか", meaning: "Did A (verb)?", explanation: "Asking about past actions correctly.", examples: [{ jp: "もう 昼ごはん を 食べましたか。", en: "Did you eat lunch already?" }] }
    ],
    quiz: [
      { q: "きのうは 暑 ___ です。", ans: "かった", options: ["い", "かった", "だ", "かったい"] },
      { q: "京都は 静か ___ です。", ans: "でした", options: ["た", "だ", "でした", "かった"] },
      { q: "昨日 べんきょう ___。", ans: "しました", options: ["しました", "します", "する", "して"] },
      { q: "今朝 朝ごはん を ___ か。", ans: "食べました", options: ["食べました", "食べます", "食べて", "食べ"] },
      { q: "コーヒーと お茶と どちら ___ 好きですか。", ans: "が", options: ["が", "を", "より", "の"] },
      { q: "一年で なに ___ 一番 好きですか。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "きのうの パーティーは ___ ですか。", ans: "どう", options: ["どう", "どんな", "どれ", "なに"] },
      { q: "テストは あまり ___ ありませんでした。", ans: "むずかしく", options: ["むずかしい", "むずかしく", "むずかな", "むずか"] },
      { q: "いいえ、行き ___。", ans: "ませんでした", options: ["ません", "ませんでした", "ます", "でした"] },
      { q: "きのうは ___ ですか。", ans: "ひま", options: ["ひま", "ひまい", "ひまな", "ひまに"] }
    ]
  },
  {
    chapter: 13,
    title: "Desires & Experiences",
    desc: "Hoshii / -tai / -tari -tari",
    patterns: [
      { id: "13.1", label: "～が ほしいです", meaning: "Want something", explanation: "Expressing desire for an object using particle 'ga'.", examples: [{ jp: "わたし は 新しい 車 が ほしいです。", en: "I want a new car." }] },
      { id: "13.2", label: "～たいです", meaning: "Want to do", explanation: "Combining verb stem with 'tai' to express desire to act.", examples: [{ jp: "日本 へ 行きたい です。", en: "I want to go to Japan." }] },
      { id: "13.3", label: "～たり～たり", meaning: "Do this and that", explanation: "Listing actions non-exhaustively in random order.", examples: [{ jp: "日曜日 は 本 を 読んだり、テレビ を 見たり します。", en: "On Sundays I read books, watch TV, and so on." }] }
    ],
    quiz: [
      { q: "わたしは 新しい 車 ___ ほしいです。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "のどが かわきました. 水 ___ 飲みたいです。", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "どこへ ___ 行きたいですか。", ans: "も", options: ["も", "は", "に", "を"] },
      { q: "テニスを ___ 散歩を ___ します。", ans: "したり / したり", options: ["したり / したり", "して / して", "する / する", "した / した"] },
      { q: "おなかが すきました. なに ___ 食べたいです。", ans: "か", options: ["か", "も", "を", "に"] },
      { q: "今日は どこへ ___ 行きたくないです。", ans: "も", options: ["に", "を", "も", "は"] },
      { q: "日本へ 料理を ___ 行きます。", ans: "食べに", options: ["食べる", "食べに", "食べて", "食べ"] },
      { q: "休み の 日 は 何を しますか。", ans: "なに", options: ["なに", "どこ", "いつ", "だれ"] },
      { q: "ミラーさんは 日本へ 何を ___ 来ましたか。", ans: "しに", options: ["する", "しに", "した", "して"] },
      { q: "いいえ、あまり ___ ないです。", ans: "ほしく", options: ["ほしい", "ほしく", "ほしな", "ほし"] }
    ]
  },
  {
    chapter: 14,
    title: "Commands & Permission",
    desc: "Te-form / -te kudasai / -te mo ii desu",
    patterns: [
      { id: "14.1", label: "て形 (～て)", meaning: "Te-form", explanation: "The base form for connecting sentences and many grammar points.", examples: [{ jp: "食べて", en: "Eat (Te-form)" }, { jp: "見て", en: "Look (Te-form)" }] },
      { id: "14.2", label: "～てください", meaning: "Please do", explanation: "Polite request using Te-form.", examples: [{ jp: "ここ に 名前 を 書いて ください。", en: "Please write your name here." }] },
      { id: "14.3", label: "～てもいいです", meaning: "May I...?", explanation: "Granting permission for an action.", examples: [{ jp: "タバコ を すっても いいです。", en: "You may smoke." }] }
    ],
    quiz: [
      { q: "ここ ___ 名前を 書いてください。", ans: "に", options: ["に", "を", "で", "へ"] },
      { q: "タクシーを ___ ください。", ans: "よんで", options: ["よんで", "よび", "よぶ", "よまし"] },
      { q: "しおを ___ ください。", ans: "とって", options: ["とって", "とり", "とる", "とら"] },
      { q: "いそいで ___。", ans: "ください", options: ["ください", "ます", "ましょう", "ました"] },
      { q: "いま 雨が ___ います。", ans: "ふって", options: ["ふって", "ふり", "ふる", "ふら"] },
      { q: "ドアを ___ ください。", ans: "あけて", options: ["あけて", "あけ", "あける", "あけな"] },
      { q: "荷物を ___ ましょうか。", ans: "もち", options: ["もち", "もって", "もつ", "もた"] },
      { q: "コピーを ___ ください。", ans: "して", options: ["して", "し", "する", "しな"] },
      { q: "ボールペン ___ 書いてください。", ans: "で", options: ["で", "を", "に", "へ"] },
      { q: "ちょっと ___ ください。", ans: "まって", options: ["まって", "まち", "まつ", "また"] }
    ]
  },
  {
    chapter: 15,
    title: "Permission & Prohibition",
    desc: "-te mo ii desuka / -te wa ikemasen / Mashou",
    patterns: [
      { id: "15.1", label: "～てもいいですか", meaning: "May I...?", explanation: "Formal request for permission.", examples: [{ jp: "ここ で 写真 を 撮って も いいですか。", en: "May I take a photo here?" }] },
      { id: "15.2", label: "～てはいけません", meaning: "Must not", explanation: "Prohibition or forbidding an action.", examples: [{ jp: "ここで お酒 を 飲ん で は いけません。", en: "You must not drink alcohol here." }] },
      { id: "15.3", label: "～ましょう / ましょうか", meaning: "Let's / Shall I...?", explanation: "Suggestions or offers to help.", examples: [{ jp: "タクシー を 呼び ましょうか。", en: "Shall I call a taxi?" }] }
    ],
    quiz: [
      { q: "ここで 写真を ___ も いいですか。", ans: "撮って", options: ["撮って", "撮り", "撮る", "撮ら"] },
      { q: "いいえ、撮って ___ いけません。", ans: "は", options: ["は", "も", "に", "を"] },
      { q: "わたしは 結婚 ___ います。", ans: "して", options: ["して", "し", "する", "しな"] },
      { q: "ミラーさんは 大阪 ___ 住んでいます。", ans: "に", options: ["に", "で", "を", "へ"] },
      { q: "お仕事を ___ いますか。", ans: "して", options: ["し", "して", "する", "しな"] },
      { q: "はい、___ います。", ans: "知って", options: ["知り", "知って", "知る", "白"] },
      { q: "たばこを すって ___ いいですか。", ans: "も", options: ["は", "も", "に", "を"] },
      { q: "ここで 遊んで ___ いけません。", ans: "は", options: ["は", "も", "に", "を"] },
      { q: "荷物 を 持ち ___。", ans: "ましょうか", options: ["ましょうか", "ましょう", "ますか", "ます"] },
      { q: "市役所の 電話番号を ___ ますか。", ans: "知ってい", options: ["知り", "知ってい", "知る", "知りい"] }
    ]
  },
  {
    chapter: 16,
    title: "Sequences & Requests",
    desc: "-te kara / -te kudasaimasen ka",
    patterns: [
      { id: "16.1", label: "～てから", meaning: "After doing", explanation: "Describes an action that happens specifically after another action is completed.", examples: [{ jp: "手を 洗って から、食べます。", en: "After washing my hands, I'll eat." }] },
      { id: "16.2", label: "～てくださいませんか", meaning: "Polite Request", explanation: "A more polite way to request something than ~te kudasai.", examples: [{ jp: "書き方 を 教えて くださいませんか。", en: "Would you please teach me how to write it?" }] }
    ],
    quiz: [
      { q: "ジョギングを ___ から シャワーをあびます。", ans: "して", options: ["して", "し", "する", "した"] },
      { q: "ミラーさんは ___ 高くて 髪が長いです。", ans: "背が", options: ["背が", "背を", "背は", "背に"] },
      { q: "この部屋は ___ 明るいです。", ans: "広くて", options: ["広い", "広くて", "広な", "広"] },
      { q: "大学へ ___ から べんきょうを はじめます。", ans: "行って", options: ["行って", "行き", "行く", "行か"] },
      { q: "あの人は ___ 目が きれいです。", ans: "若くて", options: ["若い", "若くて", "若な", "若"] },
      { q: "使いかたを ___ くださいませんか。", ans: "教え", options: ["教え", "教えて", "教える", "教えな"] },
      { q: "きのうは 天気が ___ 散歩しました。", ans: "よくて", options: ["いい", "よくなって", "よくて", "よく"] },
      { q: "どうやって ___ か。バスで行きます。", ans: "行きます", options: ["行きます", "行く", "行って", "行か"] },
      { q: "どの ___ ですか。あの背が高い人です。", ans: "人", options: ["人", "もの", "どこ", "だれ"] },
      { q: "名前を ___ から 入ってください。", ans: "書いて", options: ["書き", "書いて", "書く", "書か"] }
    ]
  },
  {
    chapter: 17,
    title: "Negative Requests & Obligation",
    desc: "-naide kudasai / -nakutemo ii desu",
    patterns: [
      { id: "17.1", label: "～ないでください", meaning: "Don’t do", explanation: "Requesting or commanding someone NOT to do something.", examples: [{ jp: "ここ で 写真 を 撮らないで ください。", en: "Please don't take photos here." }] },
      { id: "17.2", label: "～なくてもいいです", meaning: "Don’t have to", explanation: "Expressing that an action is not necessary.", examples: [{ jp: "明日 は 来なく て も いい です。", en: "You don't have to come tomorrow." }] }
    ],
    quiz: [
      { q: "ここで 写真を ___ ください。", ans: "撮らないで", options: ["撮らないで", "撮らなく", "撮るな", "撮らない"] },
      { q: "くすりを ___ ければなりません。", ans: "飲まな", options: ["飲み", "飲ま", "飲まう", "飲まお"] },
      { q: "土曜日は 早く ___ も いいです。", ans: "起きなくて", options: ["起きない", "起きなくて", "起きるな", "起きないで"] },
      { q: "パスポートを ___ ければなりません。", ans: "見せな", options: ["見せな", "見せ", "見せる", "見せた"] },
      { q: "あした ___ 来てください。", ans: "までに", options: ["に", "で", "を", "までに"] },
      { q: "心配 ___ ください。", ans: "しないで", options: ["しな", "しないで", "するな", "しなき"] },
      { q: "おふろに ___ ければなりません。", ans: "入らな", options: ["入り", "入ら", "入る", "入った"] },
      { q: "傘を ___ も いいですよ。", ans: "忘れて", options: ["忘れ", "忘れて", "忘れる", "忘れな"] },
      { q: "レポートは ___ までに 出してください。", ans: "来週", options: ["来週", "今週", "明日", "毎日"] },
      { q: "明日 は 来 ___ も いい です。", ans: "なくて", options: ["なくて", "ないで", "ない", "れば"] }
    ]
  },
  {
    chapter: 18,
    title: "Dictionary Form & Ability",
    desc: "Dict Form / -koto ga dekimasu / -koto desu",
    patterns: [
      { id: "18.1", label: "辞書形 (辞書形)", meaning: "Dictionary Form", explanation: "The plain, non-conjugated form of verbs found in dictionaries.", examples: [{ jp: "食べる", en: "To eat" }, { jp: "行く", en: "To go" }] },
      { id: "18.2", label: "～ことができます", meaning: "Can do", explanation: "Expressing ability or potential.", examples: [{ jp: "スキー を する こと が できます。", en: "I can ski." }] },
      { id: "18.3", label: "～ことです", meaning: "Nominalization", explanation: "Turning a verb into a noun for descriptions.", examples: [{ jp: "わたしの 趣味 は 写真 を 撮る こと です。", en: "My hobby is taking photos." }] }
    ],
    quiz: [
      { q: "漢字を ___ ことが できますか。", ans: "読む", options: ["読み", "読む", "読んで", "読まな"] },
      { q: "趣味は 音楽を ___ ことです。", ans: "聞く", options: ["聞く", "聞き", "聞いて", "聞か"] },
      { q: "寝る ___、「おやすみなさい」と言います。", ans: "まえに", options: ["まえに", "あとで", "ときに", "から"] },
      { q: "カードで ___ ことが できますか。", ans: "払う", options: ["払う", "払い", "払って", "払わ"] },
      { q: "車の 運転が ___ ますか。", ans: "でき", options: ["でき", "分か", "し", "り"] },
      { q: "どこで 馬に ___ ことが できますか。", ans: "乗る", options: ["乗り", "乗る", "乗って", "乗ら"] },
      { q: "食事の ___ 手を 洗います。", ans: "まえに", options: ["まえに", "あとで", "とき", "から"] },
      { q: "ピアノを ___ ことが できません。", ans: "弾く", options: ["弾き", "弾く", "弾いて", "弾か"] },
      { q: "３年 ___ 日本へ 来ました。", ans: "まえに", options: ["まえに", "あとで", "いつか", "さっき"] },
      { q: "泳ぐ ___ が できますか。", ans: "こと", options: ["こと", "もの", "の", "が"] }
    ]
  },
  {
    chapter: 19,
    title: "Opinions & Quotations",
    desc: "Plain Form + to omoimasu / -to iimasu",
    patterns: [
      { id: "19.1", label: "Plain form + と思います", meaning: "I think that...", explanation: "Expressing an opinion or deduction.", examples: [{ jp: "日本 は 物価 が 高い と 思います。", en: "I think prices in Japan are high." }] },
      { id: "19.2", label: "～と言います", meaning: "Say / Be called", explanation: "Reporting speech or name of something.", examples: [{ jp: "これは 日本語 で なん と 言います か。", en: "What is this called in Japanese?" }] }
    ],
    quiz: [
      { q: "日本は 食べ物が 高い ___ 思います。", ans: "と", options: ["と", "が", "を", "に"] },
      { q: "寝るまえに 「おやすみなさい」 ___ 言います。", ans: "と", options: ["と", "を", "に", "へ"] },
      { q: "首相は 来月 アメリカへ 行く ___ 言いました。", ans: "と", options: ["と", "が", "を", "に"] },
      { q: "パーティーに 行き ___。", ans: "たい", options: ["たい", "たいと", "たいに", "たいを"] },
      { q: "かれは 忙しい ___ 思います。", ans: "と", options: ["と", "が", "を", "に"] },
      { q: "駅で 先生 ___ 会いました。", ans: "に", options: ["に", "を", "へ", "と"] },
      { q: "あした テストが ___ 思います。", ans: "あると", options: ["あります", "あると", "あり", "あれば"] },
      { q: "ミラーさんは どこに ___ か 分かりません。", ans: "いる", options: ["いま", "いる", "いて", "いった"] },
      { q: "多分 来ない ___ 思います。", ans: "と", options: ["と", "が", "を", "に"] },
      { q: "ニュース ___ 見ましたか。", ans: "を", options: ["を", "に", "は", "が"] }
    ]
  },
  {
    chapter: 20,
    title: "Plans & Intentions",
    desc: "Plain Form + omoimasu / -tsumori desu",
    patterns: [
      { id: "20.1", label: "Plain form + と思っています", meaning: "Thinking of doing", explanation: "Expressing an ongoing intention or plan.", examples: [{ jp: "将来 自分の 会社 を 作ろう と 思っています。", en: "I'm thinking of starting my own company in the future." }] },
      { id: "20.2", label: "～つもりです", meaning: "Plan to", explanation: "Stating a definite intention to do something.", examples: [{ jp: "大学 で 経済 を 勉強する つもり です。", en: "I plan to study economics at university." }] }
    ],
    quiz: [
      { q: "あした 暇 ___？", ans: "だ", options: ["だ", "です", "な", "に"] },
      { q: "これ 食べ ___？", ans: "る", options: ["る", "ます", "た", "ない"] },
      { q: "きのう どこかへ ___ よ。", ans: "行った", options: ["行く", "行った", "行っ", "行か"] },
      { q: "日本料理 ___ 好き？", ans: "が", options: ["を", "が", "は", "に"] },
      { q: "会社を ___ と思っています。", ans: "やめよう", options: ["やめる", "やめよう", "やめ", "やめない"] },
      { q: "辞書 ___ 持ってる？", ans: "は", options: ["を", "は", "に", "が"] },
      { q: "あの映画 おもしろい ___。", ans: "よ", options: ["よ", "ね", "わ", "な"] },
      { q: "今 忙しい ___。", ans: "から", options: ["から", "ので", "でも", "が"] },
      { q: "来年 日本へ 行く ___ です。", ans: "つもり", options: ["つもり", "こと", "もの", "ため"] },
      { q: "うん、わかっ ___。", ans: "た", options: ["た", "ます", "る", "て"] }
    ]
  },
  {
    chapter: 21,
    title: "Experience & Advice",
    desc: "-ta koto ga arimasu / -ta hou ga ii desu",
    patterns: [
      { id: "21.1", label: "～た ことがあります", meaning: "Have experience", explanation: "Expressing that something has happened in the past as an experience.", examples: [{ jp: "日本 へ 行った こと が あります。", en: "I have been to Japan." }] },
      { id: "21.2", label: "～たほうがいいです", meaning: "Should...", explanation: "Giving advice or making a recommendation.", examples: [{ jp: "毎日 運動した ほう が いい です よ。", en: "You should exercise every day." }] }
    ],
    quiz: [
      { q: "北海道へ ___ ことが ありますか。", ans: "行った", options: ["行った", "行き", "行く", "行か"] },
      { q: "毎日 運動を ___ ほうが いいです。", ans: "した", options: ["した", "する", "して", "しない"] },
      { q: "タバコは ___ ほうが いいですよ。", ans: "やめた", options: ["やめた", "やめ", "やめる", "やめて"] },
      { q: "一度 富士山に ___ ことが あります。", ans: "登った", options: ["登った", "登り", "登る", "登って"] },
      { q: "早く ___ ほうが いいですよ。", ans: "寝た", options: ["寝た", "寝る", "寝", "寝て"] },
      { q: "そんなに お酒を ___ ないほうが いいですよ。", ans: "飲ま", options: ["飲ま", "飲み", "飲む", "飲んで"] },
      { q: "日本料理を ___ ことが ありますか。", ans: "食べた", options: ["食べた", "食べ", "食べる", "食べて"] },
      { q: "薬を ___ ほうが いいです。", ans: "飲んだ", options: ["飲んだ", "飲む", "飲み", "飲んで"] },
      { q: "相撲を ___ ことが ありません。", ans: "見た", options: ["見た", "見", "見る", "見て"] },
      { q: "無理を ___ ないほうが いいですよ。", ans: "し", options: ["し", "する", "して", "した"] }
    ]
  },
  {
    chapter: 22,
    title: "Probability",
    desc: "-deshou / -kamoshiremasen",
    patterns: [
      { id: "22.1", label: "～でしょう", meaning: "Probably", explanation: "Expressing a high degree of probability or a guess.", examples: [{ jp: "明日 は 雨 が 降る でしょう。", en: "It will probably rain tomorrow." }] },
      { id: "22.2", label: "～かもしれません", meaning: "Maybe", explanation: "Expressing a possibility that something might happen.", examples: [{ jp: "午後 から 雪 に なる かもしれません。", en: "It might snow starting from the afternoon." }] }
    ],
    quiz: [
      { q: "明日は 雨が ___ でしょう。", ans: "降る", options: ["降る", "降り", "降って", "降ら"] },
      { q: "時間に まに ___ かもしれません。", ans: "合わない", options: ["合わない", "合う", "合い", "合って"] },
      { q: "あの 人は 会社員 ___ でしょう。", ans: "だ", options: ["だ", "です", "な", "に"] },
      { q: "約束の 時間に ___ かもしれません。", ans: "遅れる", options: ["遅れる", "遅れ", "遅れて", "遅れな"] },
      { q: "明日は 暇 ___ でしょうか。", ans: "だ", options: ["だ", "です", "な", "に"] },
      { q: "北の 方は 雪 ___ かもしれません。", ans: "だ", options: ["だ", "です", "な", "に"] },
      { q: "北海道は ___ でしょうね。", ans: "寒い", options: ["寒い", "寒な", "寒に", "寒"] },
      { q: "あの映画は ___ かもしれません。", ans: "おもしろくない", options: ["おもしろくない", "おもしろい", "おもしろな", "おもしろ"] },
      { q: "きっと ___ でしょう。", ans: "勝つ", options: ["勝つ", "勝ち", "勝って", "勝た"] },
      { q: "道が ___ かもしれません。", ans: "混んでいる", options: ["混んでいる", "混む", "混み", "混んで"] }
    ]
  },
  {
    chapter: 23,
    title: "When & Time Clauses",
    desc: "Toki / Dict form -toki",
    patterns: [
      { id: "23.1", label: "～とき", meaning: "When / At the time", explanation: "Connects a time or state to an action.", examples: [{ jp: "子供 の とき、よく 公園 で 遊びました。", en: "When I was a child, I often played in the park." }] },
      { id: "23.2", label: "Plain form + とき", meaning: "When (doing action)", explanation: "Using verbs/adjectives to describe the time of another action.", examples: [{ jp: "日本 へ 行く とき、たくさん お土産 を 買いました。", en: "When I was going to Japan, I bought a lot of souvenirs." }] }
    ],
    quiz: [
      { q: "図書館で 本を ___ とき、カードが いります。", ans: "借りる", options: ["借りる", "借り", "借りて", "借りた"] },
      { q: "体調が ___ とき、薬を 飲みます。", ans: "悪い", options: ["悪い", "悪く", "悪な", "悪"] },
      { q: "大学を ___ とき、父に 時計を もらいました。", ans: "出た", options: ["出た", "出る", "出て", "出"] },
      { q: "暇 ___ とき、遊びに 来てください。", ans: "な", options: ["な", "に", "だ", "の"] },
      { q: "ご飯を ___ とき、「いただきます」と言います。", ans: "食べる", options: ["食べる", "食べ", "食べて", "食べな"] },
      { q: "交差点を 右へ ___ と、郵便局があります。", ans: "曲がる", options: ["曲がる", "曲がり", "曲がって", "曲がら"] },
      { q: "音が ___ とき、つまみを まわします。", ans: "小さい", options: ["小さい", "小さく", "小さな", "小さ"] },
      { q: "道を ___ とき、車に 気をつけてください。", ans: "渡る", options: ["渡る", "渡り", "渡って", "渡ら"] },
      { q: "使いかたが ___ とき、聞いてください。", ans: "分からない", options: ["分からない", "分からなく", "分かる", "分かり"] },
      { q: "寂しい ___ とき、電話します。", ans: "い", options: ["い", "な", "に", "だ"] }
    ]
  },
  {
    chapter: 24,
    title: "Giving & Receiving Verbs",
    desc: "Kuremasu / Agemasu / Moraimasu",
    patterns: [
      { id: "24.1", label: "～くれます / あげます / もらいます", meaning: "Giving & Receiving", explanation: "Verbs for exchange, where 'kuremasu' is specifically for someone giving to the speaker.", examples: [{ jp: "山田さん が わたし に プレゼント を くれました。", en: "Mr. Yamada gave me a present." }] },
      { id: "24.2", label: "～てくれます", meaning: "Does (something) for me", explanation: "Expressing gratitude for an action performed by someone else for the speaker.", examples: [{ jp: "佐藤さん が 漢字 を 教えて くれました。", en: "Ms. Sato taught me Kanji." }] }
    ],
    quiz: [
      { q: "鈴木さんが わたし ___ 辞書を くれました。", ans: "に", options: ["に", "を", "が", "は"] },
      { q: "母が セーターを ___ くれました。", ans: "送って", options: ["送って", "送り", "送る", "送ら"] },
      { q: "ミラーさんに ご飯を ___ もらいました。", ans: "作って", options: ["作って", "作り", "作る", "作ら"] },
      { q: "友達 ___ 傘を かしてくれました。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "おじいさんが 昔の 話を ___ くれました。", ans: "して", options: ["して", "し", "する", "した"] },
      { q: "先生に 文法を ___ もらいました。", ans: "説明して", options: ["説明して", "説明し", "説明する", "説明した"] },
      { q: "案内 ___ もらいました。", ans: "して", options: ["して", "し", "する", "した"] },
      { q: "お母さん に 誕生日に 何を ___ か。", ans: "あげました", options: ["あげました", "くれました", "もらいました", "きました"] },
      { q: "道が 分からないので、連れて ___ ました。", ans: "いってくれ", options: ["いってくれ", "いってあげ", "いってもらい", "いって"] },
      { q: "誕生日に 花を ___ くれました。", ans: "買って", options: ["買って", "買い", "買う", "買わ"] }
    ]
  },
  {
    chapter: 25,
    title: "Conditionals",
    desc: "-tara / -temo / -nara",
    patterns: [
      { id: "25.1", label: "～たら", meaning: "If / When", explanation: "Conditional form used for specific situations or sequences.", examples: [{ jp: "安かったら、買います。", en: "If it's cheap, I'll buy it." }, { jp: "１０時 に なったら、出かけましょう。", en: "When it becomes 10 o'clock, let's head out." }] },
      { id: "25.2", label: "～ても", meaning: "Even if", explanation: "Expressing a contradiction or concession.", examples: [{ jp: "雨 が 降って も、サッカー を します。", en: "Even if it rains, I'll play soccer." }] },
      { id: "25.3", label: "～なら", meaning: "If it's...", explanation: "Conditional for a specific context or topic.", examples: [{ jp: "カメラ なら、日本 の が いい です よ。", en: "If it's a camera (you want), Japanese ones are good." }] }
    ],
    quiz: [
      { q: "お金が ___、旅行に 行きます。", ans: "あったら", options: ["あったら", "あると", "あれば", "あった"] },
      { q: "暇 ___、遊びに 来てください。", ans: "だったら", options: ["だったら", "な", "だ", "に"] },
      { q: "安く ___、買いません。", ans: "なくても", options: ["なくても", "ないで", "なけ", "なかっ"] },
      { q: "雨が ___、行きましょう。", ans: "やんだら", options: ["やんだら", "やみ", "やんで", "やむ"] },
      { q: "いい 辞書 ___、これを おすすめします。", ans: "なら", options: ["なら", "たら", "れば", "と"] },
      { q: "意見が ___、言ってください。", ans: "あったら", options: ["あったら", "あって", "あると", "あれば"] },
      { q: "寒く ___、窓を 閉めてください。", ans: "なったら", options: ["なったら", "なりに", "なって", "なる"] },
      { q: "いくら ___、覚えられません。", ans: "考えても", options: ["考えても", "考えて", "考える", "考えな"] },
      { q: "駅へ ___、電話します。", ans: "ついたら", options: ["ついたら", "つく", "ついて", "つかない"] },
      { q: "もし ___、行きません。", ans: "忙しかったら", options: ["忙しかったら", "忙しく", "忙な", "忙に"] }
    ]
  }
];
