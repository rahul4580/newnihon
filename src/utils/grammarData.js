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
    title: "Nouns & Identification",
    desc: "Kore / Sore / Are / Kono / Sono",
    patterns: [
      { id: "2.1", label: "これ / それ / あれ", meaning: "This / That / That Over There", explanation: "Demonstrative pronouns used alone.", examples: [{ jp: "これは辞書です。", romaji: "Kore wa jisho desu.", en: "This is a dictionary." }, { jp: "それは何ですか。", romaji: "Sore wa nan desu ka.", en: "What is that?" }] },
      { id: "2.2", label: "この / その / あの + N", meaning: "This / That / That (with Noun)", explanation: "Demonstrative adjectives that MUST be followed by a noun.", examples: [{ jp: "この本はわたしのです。", romaji: "Kono hon wa watashi no desu.", en: "This book is mine." }] },
      { id: "2.3", label: "～です / ～じゃありません", meaning: "Identification", explanation: "Positive and negative identification of things.", examples: [{ jp: "これは本です。", en: "This is a book.", romaji: "Kore wa hon desu." }, { jp: "それは辞書じゃありません。", en: "That is not a dictionary.", romaji: "Sore wa jisho ja arimasen." }] },
      { id: "2.4", label: "そうですか", meaning: "I see / Is that so?", explanation: "Used to acknowledge new information.", examples: [{ jp: "A: これはミラーさんのです。 B: そうですか。", romaji: "A: Kore wa Miraa-san no desu. B: Sou desu ka.", en: "A: This is Mr. Miller's. B: I see." }] }
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
    title: "Places",
    desc: "Koko / Soko / Asoko / Kochira",
    patterns: [
      { id: "3.1", label: "ここ / そこ / あそこ", meaning: "Here / There / Over There", explanation: "Demonstrative pronouns for locations.", examples: [{ jp: "ここは教室です。", romaji: "Koko wa kyoushitsu desu.", en: "Here is the classroom." }] },
      { id: "3.2", label: "こちら / そちら / あちら", meaning: "This way / That way / That way (polite)", explanation: "Polite or directional versions of koko/soko/asoko.", examples: [{ jp: "受付はこちらです。", romaji: "Uketsuke wa kochira desu.", en: "The reception is this way." }] },
      { id: "3.3", label: "～は～です (Place)", meaning: "[Topic] is [Place]", explanation: "Describing where something is located.", examples: [{ jp: "トイレはあそこです。", romaji: "Toire wa asoko desu.", en: "The restroom is over there." }] },
      { id: "3.4", label: "N の N (Belonging)", meaning: "N1 of N2", explanation: "Origin or category of a place or product.", examples: [{ jp: "これは日本の車です。", romaji: "Kore wa Nihon no kuruma desu.", en: "This is a Japanese car." }] }
    ],
    quiz: [
      { q: "あそら ___ じむしょ です。", ans: "は", options: ["に", "は", "を", "へ"] },
      { q: "エレベーターは ___ ですか。", ans: "どこ", options: ["どこ", "どなた", "だれ", "どれ"] },
      { q: "お国は ___ ですか。", ans: "どちら", options: ["どちら", "どこ", "だれ", "なに"] },
      { q: "ここは ___ です。", ans: "きょうしつ", options: ["きょうしつ", "がっこう", "にわ", "へや"] },
      { q: "それは ___ の コンピューター ですか。日本のです。", ans: "どこ", options: ["どこ", "なに", "だれ", "いつ"] },
      { q: "電話は ___ です。", ans: "あそこ", options: ["あそこ", "あちら", "それ", "ここ"] },
      { q: "ミラーさんは ___ ですか。事務所です。", ans: "どこ", options: ["どこ", "どちら", "だれ", "なに"] },
      { q: "これは ___ ですか。１万ウォンです。", ans: "いくら", options: ["いくら", "なん", "どこ", "どちら"] },
      { q: "時計 ___ 売り場は どこですか。", ans: "の", options: ["の", "に", "を", "は"] },
      { q: "すみませんが、出口を ___ けてください。", ans: "あ", options: ["あ", "い", "う", "え"] }
    ]
  },
  {
    chapter: 4,
    level: "N5",
    title: "Time & Verbs",
    desc: "Time counters / Kara Made / Masu",
    patterns: [
      { id: "4.1", label: "今～時～分", meaning: "Telling Time", explanation: "Naming hours and minutes.", examples: [{ jp: "今、９時１５分です。", romaji: "Ima, kuji juugofun desu.", en: "It is 9:15 now." }] },
      { id: "4.2", label: "～から～まで", meaning: "From... to...", explanation: "Range of time or place.", examples: [{ jp: "９時から５時まで働きます。", romaji: "Kuji kara goji made hatarakimasu.", en: "I work from 9 to 5." }] },
      { id: "4.3", label: "～に (Time)", meaning: "At (Time)", explanation: "Particle indicating the time an action occurs.", examples: [{ jp: "６時に起きます。", romaji: "Rokuji ni okimasu.", en: "I wake up at 6." }] },
      { id: "4.4", label: "～ます / ～ません", meaning: "Present Polite Verbs", explanation: "Standard polite form for actions.", examples: [{ jp: "毎日、働きます。", romaji: "Mainichi, hatarakimasu.", en: "I work every day." }, { jp: "明日は、休みません。", romaji: "Ashita wa, yasumimasen.", en: "I will not rest tomorrow." }] }
    ],
    quiz: [
      { q: "今、何時 ___ ですか。", ans: "なん", options: ["なん", "どこ", "いつ", "なに"] },
      { q: "銀行は ９時 ___ ３時 ___ です。", ans: "から / まで", options: ["から / まで", "に / に", "を / を", "へ / へ"] },
      { q: "毎朝 ７時 ___ 起きます。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "昨日 勉強 ___。", ans: "しました", options: ["しました", "します", "する", "して"] },
      { q: "土曜日は 働き ___。", ans: "ません", options: ["ません", "ます", "ましょう", "しました"] },
      { q: "試験は 何曜日 ___ ですか。", ans: "なん", options: ["なん", "なに", "どこ", "どの"] },
      { q: "会議は 終わりました ___。", ans: "か", options: ["か", "ね", "よ", "は"] },
      { q: "昨日 １０時 ___ 寝ました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "休日は 働き ___。", ans: "ません", options: ["ません", "ます", "ましょう", "しました"] },
      { q: "今 ３時 ___ です。", ans: "はん", options: ["はん", "ぷん", "じ", "じゅう"] }
    ]
  },
  {
    chapter: 5,
    level: "N5",
    title: "Movement & Transport",
    desc: "Go Come Return / Particle E / To / De",
    patterns: [
      { id: "5.1", label: "行きます / 来ます / 帰ります", meaning: "Go / Come / Return", explanation: "Primary verbs of movement.", examples: [{ jp: "会社へ行きます。", romaji: "Kaisha e ikimasu.", en: "I will go to the office." }] },
      { id: "5.2", label: "～へ / ～に (Destination)", meaning: "To (Direction/Destination)", explanation: "Particle 'e' (written as 'he') or 'ni' for the goal of movement.", examples: [{ jp: "デパートへ行きます。", romaji: "Depaato e ikimasu.", en: "I go to the department store." }] },
      { id: "5.3", label: "～で (Transport)", meaning: "By (Transport)", explanation: "Indicates the mode of transportation used.", examples: [{ jp: "電車で来ました。", romaji: "Densha de kimashita.", en: "I came by train." }] },
      { id: "5.4", label: "～と (With)", meaning: "With (Person)", explanation: "The person someone does an action with.", examples: [{ jp: "友達と京都へ行きます。", romaji: "Tomodachi to Kyouto e ikimasu.", en: "I will go to Kyoto with my friend." }] }
    ],
    quiz: [
      { q: "どこ ___ 買いましたか。デパートです。", ans: "で", options: ["で", "に", "を", "へ"] },
      { q: "電車 ___ 会社へ行きます。", ans: "で", options: ["に", "を", "は", "で"] },
      { q: "あした どこ ___ 行きますか。", ans: "へ", options: ["に", "を", "で", "へ"] },
      { q: "歩いて 帰り ___。", ans: "ます", options: ["ます", "ましょう", "ました", "して"] },
      { q: "だれ ___ 行きますか。 友達と行きます。", ans: "と", options: ["と", "に", "を", "は"] },
      { q: "学校 ___ 来ます。", ans: "へ", options: ["を", "に", "へ", "が"] },
      { q: "タクシー ___ 来ました。", ans: "で", options: ["で", "に", "へ", "を"] },
      { q: "昨日 １人で ___ 行きましたか。", ans: "どこへも", options: ["どこへも", "どこへ", "どこに", "どこを"] },
      { q: "誕生日は ___ ですか。６月１日です。", ans: "いつ", options: ["いつ", "なん", "どこ", "だれ"] },
      { q: "「おめでとうございます。」 「ありがとう ___。」", ans: "ございます", options: ["ございます", "あります", "います", "いたします"] }
    ]
  },
  {
    chapter: 6,
    level: "N5",
    title: "Transitive Actions",
    desc: "Wo object / Kudasai",
    patterns: [
      { id: "6.1", label: "～を (Object)", meaning: "Object Marker", explanation: "Denotes the direct object of a verb.", examples: [{ jp: "お茶を飲みます。", romaji: "Ocha o nomimasu.", en: "I drink tea." }] },
      { id: "6.2", label: "～ます (Present)", meaning: "Do...", explanation: "Describing current or future habitual actions.", examples: [{ jp: "毎日、新聞を読みます。", romaji: "Mainichi, shinbun o yomimasu.", en: "I read the newspaper every day." }] },
      { id: "6.3", label: "～をください", meaning: "Please give me...", explanation: "Requesting an object.", examples: [{ jp: "これをください。", romaji: "Kore o kudasai.", en: "Please give me this." }] }
    ],
    quiz: [
      { q: "おさけ ___ 飲みますか。", ans: "を", options: ["を", "は", "に", "が"] },
      { q: "毎日 なに ___ 食べますか。", ans: "を", options: ["を", "に", "は", "で"] },
      { q: "テニス ___ しましょう。", ans: "を", options: ["に", "を", "は", "で"] },
      { q: "写真を ___。", ans: "とります", options: ["とります", "かきます", "します", "ききます"] },
      { q: "たばこ ___ すいますか。", ans: "を", options: ["を", "に", "は", "が"] },
      { q: "ジュース ___ ください。", ans: "を", options: ["を", "に", "は", "も"] },
      { q: "宿題を ___。", ans: "しました", options: ["しました", "します", "する", "して"] },
      { q: "昼休み ___ 勉強しました。", ans: "は", options: ["は", "に", "を", "で"] },
      { q: "公園 ___ 写真を とりました。", ans: "で", options: ["で", "に", "へ", "を"] },
      { q: "あした 三越 ___ 会いましょう。", ans: "で", options: ["で", "に", "を", "へ"] }
    ]
  },
  {
    chapter: 7,
    level: "N5",
    title: "Means & Relations",
    desc: "De / Wo / Kara Made / To",
    patterns: [
      { id: "7.1", label: "～で (Place of Action)", meaning: "At (Place)", explanation: "Particle indicating where an action occurs.", examples: [{ jp: "食堂で昼ごはんを食べます。", romaji: "Shokudou de hirugohan o tabemasu.", en: "I eat lunch in the cafeteria." }] },
      { id: "7.2", label: "～を (Action focus)", meaning: "Focus on action", explanation: "Direct action using 'wo'.", examples: [{ jp: "ニュースを見ました。", romaji: "Nyuusu o mimashita.", en: "I watched the news." }] },
      { id: "7.3", label: "～から (Source)", meaning: "From (Source)", explanation: "Particle for origin or giver.", examples: [{ jp: "母からプレゼントをもらいました。", romaji: "Haha kara purezento o moraimashita.", en: "I received a present from my mother." }] },
      { id: "7.4", label: "～と (And)", meaning: "And", explanation: "Connecting two nouns.", examples: [{ jp: "パンと卵を食べます。", romaji: "Pan to tamago o tabemasu.", en: "I eat bread and eggs." }] }
    ],
    quiz: [
      { q: "何 ___ 食べますか。 はしで食べます。", ans: "で", options: ["で", "を", "に", "は"] },
      { q: "日本語 ___ 何ですか。スマホです。", ans: "で", options: ["で", "を", "に", "は"] },
      { q: "田中さんは 山田さん ___ 花を あげました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "母 ___ プレゼントを もらいました。", ans: "から", options: ["から", "に", "で", "を"] },
      { q: "もう 荷物を ___ か。", ans: "送りました", options: ["送りました", "送ります", "送って", "送れ"] },
      { q: "だれ ___ 習いましたか。王さんに習いました。", ans: "に", options: ["に", "で", "を", "は"] },
      { q: "レポート ___ 書きましたか。", ans: "を", options: ["を", "に", "で", "へ"] },
      { q: "テニス ___ 友達を 会います。", ans: "と", options: ["と", "に", "を", "は"] },
      { q: "英語 ___ 手紙を 書きます。", ans: "で", options: ["で", "に", "を", "は"] },
      { q: "もう ご飯を ___ か。", ans: "食べました", options: ["食べました", "食べます", "食べて", "食べ"] }
    ]
  },
  {
    chapter: 8,
    level: "N5",
    title: "Adjectives (Properties)",
    desc: "I & Na Adjectives / Connecting",
    patterns: [
      { id: "8.1", label: "Adjectives (い / な)", meaning: "Properties", explanation: "Describing nouns with properties.", examples: [{ jp: "富士山は高いです。", romaji: "Fujisan wa takai desu.", en: "Mt. Fuji is high." }, { jp: "奈良は静かです。", romaji: "Nara wa shizuka desu.", en: "Nara is quiet." }] },
      { id: "8.2", label: "～くないです / ～じゃありません", meaning: "Negative Adjectives", explanation: "Forming negative descriptions.", examples: [{ jp: "この本は高くないです。", romaji: "Kono hon wa takakunai desu.", en: "This book is not expensive." }, { jp: "あの町はおもしろじゃありません。", romaji: "Ano machi wa omoshiro ja arimasen.", en: "That town is not interesting." }] },
      { id: "8.3", label: "～くて / ～で (Connecting)", meaning: "And (Properties)", explanation: "Connecting two or more adjectives.", examples: [{ jp: "広くて、きれいです。", romaji: "Hirokute, kirei desu.", en: "It is spacious and beautiful." }] }
    ],
    quiz: [
      { q: "京都は ___ です。", ans: "きれいで", options: ["きれいで", "きれいくて", "きれいに", "きれいな"] },
      { q: "昨日は 土曜日 ___。", ans: "でした", options: ["でした", "です", "だ", "かった"] },
      { q: "この お茶は ___ ないです。", ans: "熱く", options: ["熱く", "熱い", "熱いな", "熱か"] },
      { q: "山は ___ でした。", ans: "高かった", options: ["高かった", "高い", "高くて", "高いだ"] },
      { q: "いいえ、あまり ___ ありませんでした。", ans: "寒く", options: ["寒く", "寒い", "寒いな", "寒か"] },
      { q: "元気 ___ ですか。", ans: "です", options: ["です", "だ", "かった", "でした"] },
      { q: "仕事は ___ ですか。忙しいです。", ans: "どう", options: ["どう", "どの", "どちら", "どこ"] },
      { q: "昨日は ___ では ありませんでした。", ans: "暇", options: ["暇", "暇い", "暇な", "暇く"] },
      { q: "この カバンは ___ て、安いです。", ans: "軽く", options: ["軽く", "軽い", "軽", "軽な"] },
      { q: "とても ___ です。", ans: "楽しい", options: ["楽しい", "楽し", "楽しく", "楽しな"] }
    ]
  },
  {
    chapter: 9,
    level: "N5",
    title: "Preferences & Skills",
    desc: "Suki Kirai / Jouzu Heta / Ga",
    patterns: [
      { id: "9.1", label: "好き / 嫌い (Suki / Kirai)", meaning: "Like / Dislike", explanation: "Expressing preferences.", examples: [{ jp: "スポーツが好きです。", romaji: "Supootsu ga suki desu.", en: "I like sports." }] },
      { id: "9.2", label: "上手 / 下手", meaning: "Good at / Bad at", explanation: "Expressing skills.", examples: [{ jp: "田中さんは歌が上手です。", romaji: "Tanaka-san wa uta ga jouzu desu.", en: "Mr. Tanaka is good at singing." }] },
      { id: "9.3", label: "～が好きです", meaning: "I like [Noun]", explanation: "Basic preference sentence.", examples: [{ jp: "魚が好きです。", romaji: "Sakana ga suki desu.", en: "I like fish." }] },
      { id: "9.4", label: "～は～が～", meaning: "Subject-Object relation", explanation: "The structure for having traits or likes.", examples: [{ jp: "わたしは イタリア料理が 好きです。", romaji: "Watashi wa Itaria ryouri ga suki desu.", en: "I like Italian food." }] }
    ],
    quiz: [
      { q: "わたしは お酒 ___ 嫌いです。", ans: "が", options: ["が", "を", "は", "に"] },
      { q: "ミラーさんは 日本語が ___ ですか。", ans: "上手", options: ["上手", "上手な", "下手の", "下手い"] },
      { q: "なに ___ 一番 好きですか。", ans: "が", options: ["が", "を", "は", "に"] },
      { q: "よく わかり ___。", ans: "ます", options: ["ます", "ました", "する", "して"] },
      { q: "だいたい わかり ___。", ans: "ます", options: ["ます", "ました", "する", "して"] },
      { q: "少し わかり ___。", ans: "ます", options: ["ます", "ました", "する", "して"] },
      { q: "あまり わかり ___。", ans: "ません", options: ["ません", "ました", "ます", "ましょう"] },
      { q: "全然 わかり ___。", ans: "ません", options: ["ません", "ました", "ます", "ましょう"] },
      { q: "時間が ___ から、帰りましょう。", ans: "あります", options: ["あります", "ありますな", "ありますで", "ありますを"] },
      { q: "用事が ___、行けません。", ans: "ありますから", options: ["ありますから", "ありますで", "ありますを", "ありますに"] }
    ]
  },
  {
    chapter: 10,
    level: "N5",
    title: "Existence & Counters",
    desc: "Arimasu Imasu / Ni / Counters",
    patterns: [
      { id: "10.1", label: "あります / います", meaning: "Existence", explanation: "'Arimasu' for objects/plants, 'Imasu' for people/animals.", examples: [{ jp: "本が机の上にあります。", romaji: "Hon ga tsukue no ue ni arimasu.", en: "The book is on the desk." }, { jp: "あそこに佐藤さんがいます。", romaji: "Asoko ni Satou-san ga imasu.", en: "Mr. Sato is over there." }] },
      { id: "10.2", label: "～に～があります", meaning: "There is... in [Place]", explanation: "Describing existence in a specific location.", examples: [{ jp: "公園に木があります。", romaji: "Kouen ni ki ga arimasu.", en: "There is a tree in the park." }] },
      { id: "10.3", label: "Number + counters", meaning: "Counting People/Things", explanation: "Japanese counting system for people and items.", examples: [{ jp: "学生が３人います。", romaji: "Gakusei ga sannin imasu.", en: "There are 3 students." }] }
    ],
    quiz: [
      { q: "あそこに 猫 ___ います。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "机の 上 ___ 消しゴムが あります。", ans: "に", options: ["に", "を", "で", "へ"] },
      { q: "家族は ５人 ___。", ans: "います", options: ["います", "あります", "して", "だけ"] },
      { q: "冷蔵庫 ___ 何も ありません。", ans: "には", options: ["には", "に", "を", "で"] },
      { q: "木 ___ 下に 子供が います。", ans: "の", options: ["の", "に", "は", "を"] },
      { q: "りんごを ４つ ___。", ans: "買いました", options: ["買いました", "買います", "買って", "買え"] },
      { q: "男の 子 ___ 女の 子が います。", ans: "と", options: ["と", "も", "は", "に"] },
      { q: "公園に だれ ___ いません。", ans: "も", options: ["も", "が", "を", "に"] },
      { q: "車が ___ ありますか。２台あります。", ans: "何台", options: ["何台", "何人", "何枚", "何個"] },
      { q: "切手を ___ 枚 買いましたか。", ans: "何", options: ["何", "いくつ", "どこ", "どれ"] }
    ]
  },
  {
    chapter: 11,
    level: "N5",
    title: "Durations & Counters",
    desc: "Counters / Gurai / Dake / Ka",
    patterns: [
      { id: "11.1", label: "数え方 (counters)", meaning: "Counting quantities", explanation: "Specific counters for time, people, and objects.", examples: [{ jp: "３時間勉強しました。", romaji: "Sanjikan benkyou shimashita.", en: "I studied for 3 hours." }] },
      { id: "11.2", label: "～だけ (only)", meaning: "Only / Just", explanation: "Indicating a limit.", examples: [{ jp: "りんごを１つだけ食べました。", romaji: "Ringo o hitotsu dake tabemashita.", en: "I ate only one apple." }] },
      { id: "11.3", label: "～ぐらい (about)", meaning: "About / Approximately", explanation: "Approximate quantity or duration.", examples: [{ jp: "３０分ぐらい待ちました。", romaji: "Sanjuupun gurai machimashita.", en: "I waited for about 30 minutes." }] },
      { id: "11.4", label: "～か (or)", meaning: "Or", explanation: "Connecting nouns with an 'or' choice.", examples: [{ jp: "パンか卵を食べます。", romaji: "Pan ka tamago o tabemasu.", en: "I will eat bread or eggs." }] }
    ],
    quiz: [
      { q: "毎日 ８時間 ___ 寝ます。", ans: "ぐらい", options: ["ぐらい", "ごろ", "まで", "から"] },
      { q: "休みは 日曜日 ___ です。", ans: "だけ", options: ["だけ", "も", "は", "が"] },
      { q: "ジュース ___ コーラを 飲みます。", ans: "か", options: ["か", "も", "は", "に"] },
      { q: "この かばんに 本が ___ ありますか。５冊あります。", ans: "何冊", options: ["何冊", "何枚", "何人", "何個"] },
      { q: "テニスを ___ しましたか。２時間しました。", ans: "どのくらい", options: ["どのくらい", "いつ", "だれと", "どこで"] },
      { q: "切手を ５ ___ 買いました。", ans: "枚", options: ["枚", "人", "個", "本"] },
      { q: "学生が ２０ ___ います。", ans: "人", options: ["人", "枚", "匹", "台"] },
      { q: "バナナを ___ 買いましたか。３本買いました。", ans: "何本", options: ["何本", "何枚", "何人", "何個"] },
      { q: "みかんを ___ 食べましたか。３つ食べました。", ans: "いくつ", options: ["いくつ", "なん", "どこ", "どちら"] },
      { q: "京都まで ２時間 ___ かかります。", ans: "ぐらい", options: ["ぐらい", "だけ", "は", "も"] }
    ]
  },
  {
    chapter: 12,
    level: "N5",
    title: "Tense of Nouns & Adjectives",
    desc: "Past Tense: Mashita / Deshita",
    patterns: [
      { id: "12.1", label: "～ました / ～ませんでした", meaning: "Past Polite Verbs", explanation: "Standard polite form for past tense actions.", examples: [{ jp: "昨日、映画を見ました。", romaji: "Kinou, eiga o mimashita.", en: "I watched a movie yesterday." }] },
      { id: "12.2", label: "～は～でした", meaning: "Topic was [Noun/Na-Adj]", explanation: "Past polite form for nouns and na-adjectives.", examples: [{ jp: "昨日は雨でした。", romaji: "Kinou wa ame deshita.", en: "Yesterday it was rainy." }] },
      { id: "12.3", label: "～かったです / ～じゃありませんでした", meaning: "Past I-Adjectives", explanation: "Past polite forms for i-adjectives.", examples: [{ jp: "昨日は暑かったです。", romaji: "Kinou wa atsukatta desu.", en: "Yesterday it was hot." }] }
    ],
    quiz: [
      { q: "昨日の パーティーは ___ ですか。", ans: "どう", options: ["どう", "どの", "どちら", "どこ"] },
      { q: "試験は ___ でした。", ans: "難しかった", options: ["難しかった", "難しい", "難しくて", "難しいだ"] },
      { q: "昨日は 天気が ___ ありませんでした。", ans: "よく", options: ["よく", "いい", "よい", "よ"] },
      { q: "去年の 夏は ___ です。", ans: "暑かったです", options: ["暑かったです", "暑い", "暑いな", "暑か"] },
      { q: "日曜日は ___ でした。", ans: "暇", options: ["暇", "暇い", "暇な", "暇く"] },
      { q: "刺身は ___ ですか。", ans: "おいしい", options: ["おいしい", "おいし", "おいしく", "おいしな"] },
      { q: "京都は ___ です。", ans: "静かでした", options: ["静かでした", "静か", "静かな", "静かい"] },
      { q: "テストは あまり ___ ありませんでした。", ans: "難しく", options: ["難しく", "難しい", "難しいな", "難しな"] },
      { q: "旅行は ___ 楽しかったです。", ans: "とても", options: ["とても", "あまり", "全然", "ちょうど"] },
      { q: "お祭りは ___ でしたか。", ans: "どう", options: ["どう", "なに", "いつ", "だれ"] }
    ]
  },
  {
    chapter: 13,
    level: "N5",
    title: "Desires & Comparison",
    desc: "Hou ga ii / Yori / Comparison",
    patterns: [
      { id: "13.1", label: "～ほうがいいです (Advice)", meaning: "You should...", explanation: "Giving advice or recommendation.", examples: [{ jp: "早く寝たほうがいいです。", romaji: "Hayaku neta hou ga ii desu.", en: "You should sleep early." }] },
      { id: "13.2", label: "～より～のほうが", meaning: "A is more ... than B", explanation: "Primary comparison structure.", examples: [{ jp: "サッカーより野球のほうが好きです。", romaji: "Sakkaa yori yakyuu no hou ga suki desu.", en: "I like baseball more than soccer." }] },
      { id: "13.3", label: "～ほど～ません", meaning: "Not as ... as", explanation: "Comparison showing less degree.", examples: [{ jp: "大阪は東京ほど大きくありません。", romaji: "Oosaka wa Toukyou hodo ookiku arimasen.", en: "Osaka is not as big as Tokyo." }] },
      { id: "13.4", label: "Comparison (Superlative)", meaning: "The most...", explanation: "Describing the best/most in a group.", examples: [{ jp: "スポーツで何が一番好きですか。", romaji: "Supootsu de nani ga ichiban suki desu ka.", en: "What do you like most among sports?" }] }
    ],
    quiz: [
      { q: "新しい 車 ___ ほしいです。", ans: "が", options: ["が", "を", "は", "に"] },
      { q: "北海道の ほうが 大阪 ___ 涼しいです。", ans: "より", options: ["より", "も", "と", "が"] },
      { q: "コーヒーと 紅茶と ___ が好きですか。", ans: "どちら", options: ["どちら", "だれ", "どの", "なに"] },
      { q: "わたしは 魚 ___ 肉のほうが 好きです。", ans: "より", options: ["より", "も", "は", "が"] },
      { q: "ロシアは 日本 ___ はるかに 大きいです。", ans: "より", options: ["より", "も", "と", "が"] },
      { q: "スポーツで 何 ___ 一番 好きですか。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "１年で いつ ___ 一番 暑いですか。", ans: "が", options: ["が", "に", "を", "は"] },
      { q: "日本料理 ___ 何が 一番 好きですか。", ans: "で", options: ["で", "に", "を", "は"] },
      { q: "テニスと サッカーと どちら ___ おもしろいですか。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "家族で だれ ___ 一番 背が高いですか。", ans: "が", options: ["が", "に", "を", "は"] }
    ]
  },
  {
    chapter: 14,
    level: "N5",
    title: "Requests & Instructions",
    desc: "Te-form Introduction / Kudasai / Temo ii / Te wa ikemasen",
    patterns: [
      { id: "14.1", label: "～て-form (introduction)", meaning: "Connecting form", explanation: "The base form for many grammatical structures.", examples: [{ jp: "食べて / 飲んで", romaji: "Tabete / Nonde", en: "Eat / Drink (and...)" }] },
      { id: "14.2", label: "～てください (request)", meaning: "Please do...", explanation: "Polite request for an action.", examples: [{ jp: "座ってください。", romaji: "Suwatte kudasai.", en: "Please sit down." }] },
      { id: "14.3", label: "～てもいいです (permission)", meaning: "May I... / You may...", explanation: "Granting or asking for permission.", examples: [{ jp: "写真を撮ってもいいです。", romaji: "Shashin o tottemo ii desu.", en: "You may take a photo." }] },
      { id: "14.4", label: "～てはいけません (prohibition)", meaning: "Must not...", explanation: "Prohibiting an action.", examples: [{ jp: "煙草を吸ってはいけません。", romaji: "Tabako o sutte wa ikemasen.", en: "You must not smoke." }] }
    ],
    quiz: [
      { q: "ここ ___ 名前を 書いてください。", ans: "に", options: ["に", "を", "で", "へ"] },
      { q: "名前を ___ ください。", ans: "書いて", options: ["書いて", "書く", "書き", "書か"] },
      { q: "辞書を ___ いいですか。", ans: "借りても", options: ["借りても", "借りて", "借り", "借りな"] },
      { q: "ここで 写真を ___ いけません。", ans: "とっては", options: ["とっては", "とって", "とる", "とり"] },
      { q: "タクシーを ___ ください。", ans: "よんで", options: ["よんで", "よび", "よぶ", "よませ"] },
      { q: "しおを ___ ください。", ans: "とって", options: ["とって", "とり", "とる", "とら"] },
      { q: "ゆっくり ___ ください。", ans: "はなして", options: ["はなして", "はなし", "はなす", "はなせ"] },
      { q: "ドアを ___ ください。", ans: "あけて", options: ["あけて", "あけ", "あける", "あけな"] },
      { q: "ちょっと ___ ください。", ans: "まって", options: ["まって", "まち", "まつ", "また"] },
      { q: "コピーを ___ ください。", ans: "して", options: ["して", "し", "する", "しな"] }
    ]
  },
  {
    chapter: 15,
    level: "N5",
    title: "Permissions & States",
    desc: "Te mo ii desu ka / Te wa ikemasen ka / Te-iru",
    patterns: [
      { id: "15.1", label: "～てもいいですか", meaning: "May I...?", explanation: "Politely asking for permission.", examples: [{ jp: "ここに入ってもいいですか。", romaji: "Koko ni haitte mo ii desu ka.", en: "May I come in here?" }] },
      { id: "15.2", label: "～てはいけませんか", meaning: "Is it not allowed to...?", explanation: "Confirming prohibitions.", examples: [{ jp: "ここで遊んではいけませんか。", romaji: "Koko de asonde wa ikemasen ka.", en: "Is playing here not allowed?" }] },
      { id: "15.3", label: "～ています (ongoing state)", meaning: "Is doing / Ongoing state", explanation: "Describes an action in progress or a lasting state.", examples: [{ jp: "佐藤さんを知っていますか。", romaji: "Satou-san o shitte imasu ka.", en: "Do you know Mr. Sato?" }, { jp: "結婚しています。", romaji: "Kekkon shite imasu.", en: "I am married." }] }
    ],
    quiz: [
      { q: "ミラーさんは どこに ___ いますか。", ans: "住んで", options: ["住んで", "住み", "住む", "住んだ"] },
      { q: "佐藤さんを ___ いますか。", ans: "知って", options: ["知って", "知り", "知る", "知れ"] },
      { q: "ここで タバコを ___ いけません。", ans: "すっては", options: ["すっては", "すって", "すう", "いけ"] },
      { q: "カタログを ___ も いいですか。", ans: "もらって", options: ["もらって", "もらい", "もらう", "もらな"] },
      { q: "IMCの 電話番号を ___ いますか。", ans: "知って", options: ["知って", "知り", "知る", "きき"] },
      { q: "独身ですか。いいえ、___ います。", ans: "結婚して", options: ["結婚して", "結婚し", "結婚する", "結婚した"] },
      { q: "この カタログを ___ もいいですか。", ans: "見ても", options: ["見ても", "見て", "見", "見な"] },
      { q: "仕事は コンピューターを ___ います。", ans: "作って", options: ["作って", "作り", "作る", "作ら"] },
      { q: "今 どこに ___ いますか。", ans: "住んで", options: ["住んで", "住み", "住む", "住んだ"] },
      { q: "ここで 写真を ___ は いけません。", ans: "とって", options: ["とって", "とり", "とる", "とら"] }
    ]
  },
  {
    chapter: 16,
    level: "N5",
    title: "Sequence & Rules",
    desc: "Te kara / Nakutemo ii / Nakereba narimasen",
    patterns: [
      { id: "16.1", label: "～てから (after doing)", meaning: "After doing A, then B", explanation: "Sequence of two actions.", examples: [{ jp: "手を洗ってから食べます。", romaji: "Te o aratte kara tabemasu.", en: "After washing hands, I eat." }] },
      { id: "16.2", label: "～なくてもいいです", meaning: "Don't have to...", explanation: "Lack of obligation.", examples: [{ jp: "急がなくてもいいです。", romaji: "Isoganakutemo ii desu.", en: "You don't have to hurry." }] },
      { id: "16.3", label: "～なければなりません (must)", meaning: "Must / Have to...", explanation: "Strong obligation.", examples: [{ jp: "薬を飲まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", en: "I must take medicine." }] }
    ],
    quiz: [
      { q: "手を ___ から 食べます。", ans: "洗って", options: ["洗って", "洗い", "洗う", "洗った"] },
      { q: "今日は 忙しいですから 病院へ ___ なければなりません。", ans: "行かな", options: ["行かな", "行き", "行く", "行って"] },
      { q: "無理を ___ なくても いいです。", ans: "し", options: ["し", "して", "する", "した"] },
      { q: "暗く ___ から 帰りましょう。", ans: "なって", options: ["なって", "なり", "なる", "なった"] },
      { q: "お金を ___ なければ なりませんか。", ans: "払わ", options: ["払わ", "払い", "払う", "払った"] },
      { q: "日曜日は ___ なくても いいです。", ans: "働か", options: ["働か", "働き", "働く", "働いた"] },
      { q: "レポートを ___ なければ なりません。", ans: "出さ", options: ["出さ", "出し", "出す", "出した"] },
      { q: "靴を ___ から 入ってください。", ans: "脱いで", options: ["脱いで", "脱ぎ", "脱ぐ", "脱いだ"] },
      { q: "名前を ___ なくても いいですか。", ans: "書か", options: ["書か", "書き", "書く", "書いた"] },
      { q: "明日 ___ なければ なりませんか。", ans: "来", options: ["来", "来い", "来る", "来た"] }
    ]
  },
  {
    chapter: 17,
    level: "N5",
    title: "Negatives & Prohibition",
    desc: "Nai form / Nai de kudasai / Nai hou ga ii",
    patterns: [
      { id: "17.1", label: "～ない form", meaning: "Negative form", explanation: "The plain negative form of verbs.", examples: [{ jp: "食べない / 飲まない", romaji: "Tabenai / Nomanai", en: "Not eat / Not drink" }] },
      { id: "17.2", label: "～ないでください", meaning: "Please don't...", explanation: "Requesting someone NOT to do something.", examples: [{ jp: "忘れないでください。", romaji: "Wasurenaide kudasai.", en: "Please don't forget." }] },
      { id: "17.3", label: "～ないほうがいいです", meaning: "Had better not...", explanation: "Advice against doing something.", examples: [{ jp: "タバコを吸わないほうがいいです。", romaji: "Tabako o suwanai hou ga ii desu.", en: "You had better not smoke." }] }
    ],
    quiz: [
      { q: "ここで 写真を ___ ください。", ans: "撮らないで", options: ["撮らないで", "撮らなくて", "撮らな", "撮り"] },
      { q: "外へ ___ ほうが いいですよ。", ans: "出ない", options: ["出ない", "出なくて", "出な", "出て"] },
      { q: "無理を ___ ください。", ans: "しないで", options: ["しないで", "しなくて", "しな", "して"] },
      { q: "危ないですから 入ら ___ ください。", ans: "ないで", options: ["ないで", "なくて", "ない", "な"] },
      { q: "心配し ___ ください。", ans: "ないで", options: ["ないで", "なくて", "ない", "な"] },
      { q: "昨日は お酒を ___ ほうが よかったです。", ans: "飲まない", options: ["飲まない", "飲まなくて", "飲まないで", "飲み"] },
      { q: "明日までに レポートを ___ なければ いけませんか。", ans: "出さ", options: ["出さ", "出し", "出す", "出した"] },
      { q: "この カタログを ___ ほうが いいですか。", ans: "捨てない", options: ["捨てない", "捨てなくて", "捨てないで", "捨てた"] },
      { q: "名前を ___ ください。", ans: "書かないで", options: ["書かないで", "書かなくて", "書かない", "書か"] },
      { q: "大きな声で ___ ください。", ans: "話さないで", options: ["話さないで", "話さなくて", "話さない", "話し"] }
    ]
  },
  {
    chapter: 18,
    level: "N5",
    title: "Ability & Nominalization",
    desc: "Dictionary form / Koto ga dekimasu / Koto desu",
    patterns: [
      { id: "18.1", label: "Dictionary form (る / う verbs)", meaning: "Plain form", explanation: "The base form found in dictionaries.", examples: [{ jp: "行く / 食べる / 来る", romaji: "Iku / Taberu / Kuru", en: "Go / Eat / Come" }] },
      { id: "18.2", label: "～ことができます (can)", meaning: "Can / Be able to...", explanation: "Expressing capability.", examples: [{ jp: "日本語を話すことができます。", romaji: "Nihongo o hanasu koto ga dekimasu.", en: "I can speak Japanese." }] },
      { id: "18.3", label: "～ことです (nominalizer)", meaning: "Is [Action]", explanation: "Turning a verb into a noun to describe hobbies/tasks.", examples: [{ jp: "趣味は映画を見ることです。", romaji: "Shumi wa eiga o miru koto desu.", en: "My hobby is watching movies." }] }
    ],
    quiz: [
      { q: "漢字を 読む ___ ができますか。", ans: "こと", options: ["こと", "もの", "の", "が"] },
      { q: "趣味は 音楽を ___ ことです。", ans: "聞く", options: ["聞く", "きき", "きいて", "きいた"] },
      { q: "一人で 病院へ ___ ことが できますか。", ans: "行く", options: ["行く", "行き", "行って", "行か"] },
      { q: "カードで ___ ことが できます。", ans: "払う", options: ["払う", "払い", "払って", "払った"] },
      { q: "泳ぐ ことが ___。", ans: "できます", options: ["できます", "できますな", "できまして", "できました"] },
      { q: "寝る ___ 歯を 磨きます。", ans: "前に", options: ["前に", "あとで", "ときに", "から"] },
      { q: "ここで お金を ___ ことが できますか。", ans: "替える", options: ["替える", "替え", "替えた", "替えり"] },
      { q: "日記を ___ ことが 習慣です。", ans: "書く", options: ["書く", "書き", "書いて", "書か"] },
      { q: "靴を ___ ことが できます。", ans: "修理する", options: ["修理する", "修理し", "修理して", "修理した"] },
      { q: "日本語が ___ ことが できます。", ans: "話せる", options: ["話せる", "話す", "話し", "話して"] }
    ]
  },
  {
    chapter: 19,
    level: "N5",
    title: "Experience & Representative List",
    desc: "Ta form / Koto ga arimasu / Tari Tari",
    patterns: [
      { id: "19.1", label: "～た form", meaning: "Past plain form", explanation: "Primary form for past tense and experience.", examples: [{ jp: "食べた / 飲んだ", romaji: "Tabeta / Nonda", en: "Ate / Drank" }] },
      { id: "19.2", label: "～たことがあります (experience)", meaning: "Have ever done...", explanation: "Expressing past experience.", examples: [{ jp: "日本へ行ったことがあります。", romaji: "Nihon e itta koto ga arimasu.", en: "I have been to Japan." }] },
      { id: "19.3", label: "～たり～たりします", meaning: "Doing things like A and B", explanation: "Listing representative actions in a non-exhaustive way.", examples: [{ jp: "日曜日は買い物をしたり、テレビを見たりします。", romaji: "Nichiyoubi wa kaimono o shitari, terebi o mitari shimasu.", en: "On Sundays, I do things like shopping and watching TV." }] }
    ],
    quiz: [
      { q: "日本料理を ___ ことがありますか。", ans: "食べた", options: ["食べた", "食べて", "食べる", "食べ"] },
      { q: "日曜日は テニスを ___ 映画を ___ します。", ans: "したり / 見たり", options: ["したり / 見たり", "して / 見て", "する / 見る", "した / 見た"] },
      { q: "馬に ___ ことがありますか。", ans: "乗った", options: ["乗った", "乗り", "乗る", "乗って"] },
      { q: "昨日は 本を ___ 音楽を ___ しました。", ans: "読んだり / 聞いたり", options: ["読んだり / 聞いたり", "読んで / 聞いて", "読む / 聞く", "読んだ / 聞いた"] },
      { q: "北海道へ ___ ことがありますか。", ans: "行った", options: ["行った", "行き", "行く", "行って"] },
      { q: "掃除を ___ 洗濯を ___ します。", ans: "したり / したり", options: ["したり / したり", "して / して", "する / する", "した / した"] },
      { q: "相撲を ___ ことがありますか。", ans: "見た", options: ["見た", "見", "見る", "見て"] },
      { q: "夏休みは 旅行 ___ 泳い ___ したいです。", ans: "したり / だり", options: ["したり / だり", "して / で", "する / ぐ", "した / だ"] },
      { q: "全然 料理を ___ ことが ありません。", ans: "作った", options: ["作った", "作り", "作る", "作って"] },
      { q: "山に ___ ことは ありますか。", ans: "登った", options: ["登った", "登り", "登る", "登って"] }
    ]
  },
  {
    chapter: 20,
    level: "N5",
    title: "Casual Speech & Quotation",
    desc: "Plain form / To omoimasu / To iimashita",
    patterns: [
      { id: "20.1", label: "Plain form (casual)", meaning: "Casual speaking style", explanation: "Used with friends and family.", examples: [{ jp: "明日、ひま？ / うん、ひまだよ。", romaji: "Ashita, hima? / Un, hima da yo.", en: "Are you free tomorrow? / Yeah, I'm free." }] },
      { id: "20.2", label: "～と思います (I think)", meaning: "I think that...", explanation: "Expressing thoughts or opinions.", examples: [{ jp: "明日は雨が降ると思います。", romaji: "Ashita wa ame ga furu to omoimasu.", en: "I think it will rain tomorrow." }] },
      { id: "20.3", label: "～と言いました (said)", meaning: "Said that...", explanation: "Quoting what someone said.", examples: [{ jp: "田中さんは「明日休みます」と言いました。", romaji: "Tanaka-san wa 'Ashita yasumimasu' to iimashita.", en: "Mr. Tanaka said, 'I will rest tomorrow'." }] }
    ],
    quiz: [
      { q: "明日は 雨が ___ と 思います。", ans: "降る", options: ["降る", "降り", "降って", "降った"] },
      { q: "彼は 来ない ___ 言いました。", ans: "と", options: ["と", "を", "に", "は"] },
      { q: "日本は 綺麗 ___ と 思います。", ans: "だ", options: ["だ", "な", "の", "に"] },
      { q: "先生は 明日 休み ___ と 言いました。", ans: "だ", options: ["だ", "な", "の", "に"] },
      { q: "この 映画は おもしろい ___ 思います。", ans: "と", options: ["と", "を", "に", "は"] },
      { q: "もう 帰らなければ ___。", ans: "ならない", options: ["ならない", "なりません", "なって", "なれ"] },
      { q: "タバコを 吸って ___。", ans: "いい？", options: ["いい？", "いいですか？", "いけない？", "いけませんか？"] },
      { q: "何時 ___ 終わる？", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "ちょっと 待って ___。", ans: "ね", options: ["ね", "よ", "は", "か"] },
      { q: "ごはん、___？", ans: "食べた", options: ["食べた", "食べます", "食べて", "食べたい"] }
    ]
  },
  {
    chapter: 21,
    level: "N5",
    title: "Noun Modifiers",
    desc: "V plain + Noun",
    patterns: [
      { id: "21.1", label: "～ [Plain Verb] + N", meaning: "Relative clauses", explanation: "Using a whole sentence to describe a noun.", examples: [{ jp: "これはミラーさんが作ったケーキです。", romaji: "Kore wa Miraa-san ga tsukutta keeki desu.", en: "This is the cake that Mr. Miller made." }] },
      { id: "21.2", label: "～ [Noun Modifier] + 時間 / 約束", meaning: "Time/Appointment to do...", explanation: "Describing nouns like 'time' or 'promise' with verbs.", examples: [{ jp: "私は朝ごはんを食べる時間がありません。", romaji: "Watashi wa asagohan o taberu jikan ga arimasen.", en: "I don't have time to eat breakfast." }] }
    ],
    quiz: [
      { q: "これは ミラーさんが ___ ケーキです。", ans: "作った", options: ["作った", "作り", "作る", "作って"] },
      { q: "朝ごはんを ___ 時間が ありません。", ans: "食べる", options: ["食べる", "食べ", "食べて", "食べた"] },
      { q: "あそこに ___ 人は 誰ですか。", ans: "いる", options: ["いる", "います", "いて", "いた"] },
      { q: "昨日 ___ 映画は おもしろかったです。", ans: "見た", options: ["見た", "見", "見る", "見て"] },
      { q: "私が ___ 部屋は ここです。", ans: "寝る", options: ["寝る", "寝", "寝て", "寝た"] },
      { q: "病院へ ___ 時間が ありません。", ans: "行く", options: ["行く", "行き", "行って", "行った"] },
      { q: "友達と 会う ___ があります。", ans: "約束", options: ["約束", "時間", "用事", "こと"] },
      { q: "市役所へ 行く ___ があります。", ans: "用事", options: ["用事", "時間", "約束", "こと"] },
      { q: "母が ___ 料理は おいしいです。", ans: "作った", options: ["作った", "作り", "作る", "作って"] },
      { q: "彼が ___ 言い方は 難しいです。", ans: "言う", options: ["言う", "言い", "言った", "言って"] }
    ]
  },
  {
    chapter: 22,
    level: "N5",
    title: "Time & Conditionals",
    desc: "Toki / To",
    patterns: [
      { id: "22.1", label: "～とき (When)", meaning: "When ...", explanation: "Indicating the time when something happens.", examples: [{ jp: "図書館で本を借りる時、カードがいります。", romaji: "Toshokan de hon o kariru toki, kaado ga irimasu.", en: "When you borrow a book from the library, you need a card." }] },
      { id: "22.2", label: "～と (Conditional)", meaning: "If / Whenever", explanation: "Natural consequence or inevitable result.", examples: [{ jp: "このボタンを押すと、お釣りが出ます。", romaji: "Kono botan o osu to, otsuri ga demasu.", en: "If you press this button, change will come out." }] }
    ],
    quiz: [
      { q: "暇な ___、遊びに 来てください。", ans: "とき", options: ["とき", "に", "を", "は"] },
      { q: "ここを ___ と、お釣りが出ます。", ans: "押す", options: ["押す", "押し", "押して", "押した"] },
      { q: "わからない ___、先生に 聞いてください。", ans: "とき", options: ["とき", "に", "を", "は"] },
      { q: "日本へ ___ とき、カバンを 買いました。", ans: "来る", options: ["来る", "来", "来て", "来た"] },
      { q: "これを ___ と、音が 大きくなります。", ans: "回す", options: ["回す", "回し", "回して", "回した"] },
      { q: "寂しい ___、家族に 電話します。", ans: "とき", options: ["とき", "に", "を", "は"] },
      { q: "まっすぐ ___ と、右に 銀行が あります。", ans: "行く", options: ["行く", "行き", "行って", "行か"] },
      { q: "夜 寝る ___、「おやすみなさい」と言います。", ans: "とき", options: ["とき", "に", "を", "は"] },
      { q: "雨が 降る ___、タクシーで 帰ります。", ans: "とき", options: ["とき", "に", "を", "は"] },
      { q: "お腹が 空いた ___、これを 食べてください。", ans: "とき", options: ["とき", "に", "を", "は"] }
    ]
  },
  {
    chapter: 23,
    level: "N5",
    title: "Giving & Receiving (Polite)",
    desc: "Agemasu / Moraimasu / Kuremasu",
    patterns: [
      { id: "23.1", label: "あげる / もらう / くれる", meaning: "Give / Receive", explanation: "Standard verbs for exchange of items.", examples: [{ jp: "私は佐藤さんに花をあげました。", romaji: "Watashi wa Satou-san ni hana o agemashita.", en: "I gave flowers to Ms. Sato." }, { jp: "佐藤さんは私にお菓子をくれました。", romaji: "Satou-san wa watashi ni okashi o kuremashita.", en: "Ms. Sato gave me sweets." }] },
      { id: "23.2", label: "～てあげる / てもらう / てくれる", meaning: "Doing favors", explanation: "Exchange of actions/favors.", examples: [{ jp: "私は木村さんに本を貸してあげました。", romaji: "Watashi wa Kimura-san ni hon o kashite agemashita.", en: "I lent a book to Ms. Kimura." }] }
    ],
    quiz: [
      { q: "私は 友達 ___ プレゼントを あげました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "佐藤さんは 私 ___ 花を くれました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "私は 山田さん ___ 漢字を 教えてもらいました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "母は 私 ___ セーターを 送ってくれました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "私は 友達の 引っ越しを ___ あげました。", ans: "手伝って", options: ["手伝って", "手伝い", "手伝う", "手伝いた"] },
      { q: "誰に これを ___ か。", ans: "もらいました", options: ["もらいました", "あげました", "くれました", "しました"] },
      { q: "先生は 私に 辞書を ___。", ans: "貸してくれました", options: ["貸してくれました", "貸してあげました", "貸してもらいました", "貸しました"] },
      { q: "私は 犬に 散歩 ___ 行きました。", ans: "に", options: ["に", "を", "で", "は"] },
      { q: "友達に お金を ___ もらいました。", ans: "貸して", options: ["貸して", "貸し", "貸す", "貸した"] },
      { q: "お誕生日に 何を ___ か。時計をもらいました。", ans: "もらいました", options: ["もらいました", "あげました", "くれました", "しました"] }
    ]
  },
  {
    chapter: 24,
    level: "N5",
    title: "Conditionals & Results",
    desc: "Tara / To",
    patterns: [
      { id: "24.1", label: "～たら (If / When)", meaning: "If... then...", explanation: "Conditional for one-time events or steps.", examples: [{ jp: "雨が降ったら、行きません。", romaji: "Ame ga futtara, ikimasen.", en: "If it rains, I won't go." }] },
      { id: "24.2", label: "～と (Natural result)", meaning: "Whenever / If", explanation: "Review of natural conditionals.", examples: [{ jp: "春になると、花が咲きます。", romaji: "Haru ni naru to, hana ga sakimasu.", en: "When spring comes, flowers bloom." }] }
    ],
    quiz: [
      { q: "お金が ___、旅行に 行きます。", ans: "あったら", options: ["あったら", "あると", "あれば", "あった"] },
      { q: "雨が ___、行きません。", ans: "降ったら", options: ["降ったら", "降ると", "降れば", "降って"] },
      { q: "安く ___、買いません。", ans: "なかったら", options: ["なかったら", "ないで", "なければ", "ない"] },
      { q: "暇 ___、遊びに 来てください。", ans: "だったら", options: ["だったら", "だ", "な", "に"] },
      { q: "熱が ___、お風呂に 入らないでください。", ans: "あったら", options: ["あったら", "ある", "あり", "あって"] },
      { q: "冬に ___ と、雪が 降ります。", ans: "なる", options: ["なる", "なり", "なって", "なれ"] },
      { q: "これを ___ と、電気が つきます。", ans: "回す", options: ["回す", "回し", "回して", "回した"] },
      { q: "仕事が ___、飲みに行きましょう。", ans: "終わったら", options: ["終わったら", "終わり", "終わる", "終わって"] },
      { q: "もし ___、連絡します。", ans: "遅れたら", options: ["遅れたら", "遅れる", "遅れ", "遅れて"] },
      { q: "駅へ ___ と、右に 交番が あります。", ans: "行く", options: ["行く", "行き", "行って", "行か"] }
    ]
  },
  {
    chapter: 25,
    level: "N5",
    title: "Concession & Review",
    desc: "Temo / Review",
    patterns: [
      { id: "25.1", label: "～ても (Even if)", meaning: "Even if...", explanation: "Showing concession.", examples: [{ jp: "高くても、買います。", romaji: "Takakutemo, kaimasu.", en: "Even if it's expensive, I will buy it." }] },
      { id: "25.2", label: "いくら～ても", meaning: "No matter how...", explanation: "Emphasizing concession.", examples: [{ jp: "いくら考えても、わかりません。", romaji: "Ikura kangaetemo, wakarimasen.", en: "No matter how much I think, I don't understand." }] }
    ],
    quiz: [
      { q: "雨が ___、行きます。", ans: "降っても", options: ["降っても", "降り", "降る", "降って"] },
      { q: "安く ___、買いません。", ans: "なくても", options: ["なくても", "ないで", "なければ", "ない"] },
      { q: "いくら ___、わかりません。", ans: "考えても", options: ["考えても", "考え", "考える", "考えた"] },
      { q: "薬を ___、よくなりません。", ans: "飲んでも", options: ["飲んでも", "飲み", "飲む", "飲んだ"] },
      { q: "調べても ___。", ans: "わかりませんでした", options: ["わかりませんでした", "わかりました", "わかる", "わかり"] },
      { q: "高く ___、買いますか。", ans: "ても", options: ["ても", "でも", "なら", "たら"] },
      { q: "嫌い ___、食べなければなりません。", ans: "でも", options: ["でも", "ても", "なら", "たら"] },
      { q: "便利 ___、使いません。", ans: "でも", options: ["でも", "ても", "なら", "たら"] },
      { q: "日曜日 ___、働きます。", ans: "でも", options: ["でも", "ても", "なら", "たら"] },
      { q: "何回 ___、覚えられません。", ans: "読んでも", options: ["読んでも", "読み", "読む", "読んで"] }
    ]
  },
  // --- JLPT N4 CONTENT ---
  {
    chapter: 26,
    level: "N4",
    title: "Explanation Pattern",
    desc: "～んです / ～なのです",
    patterns: [
      { id: "26.1", label: "～んです", meaning: "It is that... (Explanation)", explanation: "Used to explain a reason, state a cause, or emphasize a situation.", examples: [{ jp: "どうしたんですか。", romaji: "Dou shita n desu ka.", en: "What's the matter? (Looking for explanation)" }, { jp: "頭が痛いんです。", romaji: "Atama ga itai n desu.", en: "It is that my head hurts." }] },
      { id: "26.2", label: "～んですが…", meaning: "It's just that... (Softening)", explanation: "Used to introduce a topic or reason before making a request.", examples: [{ jp: "デパートへ行きたいんですが…。", romaji: "Depaato e ikitai n desu ga...", en: "I want to go to the department store (could you show me the way?)" }] },
      { id: "26.3", label: "～ていただけませんか", meaning: "Could you please...?", explanation: "A very polite way to request someone to do something.", examples: [{ jp: "書き方を教えていただけませんか。", romaji: "Kakikata o oshiete itadakemasen ka.", en: "Could you please teach me how to write it?" }] }
    ],
    quiz: [
      { q: "どうした ___ か。", ans: "んです", options: ["んです", "のです", "のか", "のだ"] },
      { q: "バスが 来ない ___。", ans: "んです", options: ["んです", "ます", "です", "だ"] },
      { q: "地図を 書いて ___ ませんか。", ans: "いただけ", options: ["いただけ", "ください", "もらえ", "あげ"] },
      { q: "気分が 悪い ___。", ans: "んです", options: ["んです", "ます", "です", "だ"] },
      { q: "日本語を 勉強したい ___ ですが、いい本を 教えてください。", ans: "ん", options: ["ん", "の", "だ", "に"] },
      { q: "コピー機が 動かない ___ ですが、見ていただけませんか。", ans: "ん", options: ["ん", "の", "だ", "に"] },
      { q: "「お茶、飲みませんか。」 「すみません、今 忙しい ___。」", ans: "んです", options: ["んです", "ます", "です", "ませ"] },
      { q: "「いい カメラですね。」 「ええ、日本で 買った ___。」", ans: "んです", options: ["んです", "ます", "です", "のだ"] },
      { q: "これを 修理して ___ ませんか。", ans: "いただけ", options: ["いただけ", "ください", "もらえ", "あげ"] },
      { q: "落とし物ですよ。 ___ ですか。", ans: "あなたのです", options: ["あなたのです", "あなたのんです", "あなたの", "あなただ"] }
    ]
  },
  {
    chapter: 27,
    level: "N4",
    title: "Ability & Limits",
    desc: "Potential form / Shika / Sae",
    patterns: [
      { id: "27.1", label: "Potential Form (可能形)", meaning: "Can do...", explanation: "Used to express ability or possibility. Group 1: u -> e + masu. Group 2: ru -> rareru. Group 3: kuru -> korareru, suru -> dekiru.", examples: [{ jp: "日本語が話せます。", romaji: "Nihongo ga hanasemasu.", en: "I can speak Japanese." }, { jp: "１人で病院へ行けます。", romaji: "Hitori de byouin e ikemasu.", en: "I can go to the hospital alone." }] },
      { id: "27.2", label: "～しか～ません", meaning: "Only / Nothing but", explanation: "Used with a negative verb to emphasize that it's the only thing/amount.", examples: [{ jp: "ひらがなしか書けません。", romaji: "Hiragana shika kakemasen.", en: "I can write only Hiragana." }] },
      { id: "27.3", label: "～さえ～ば", meaning: "If only...", explanation: "Used to emphasize that one condition is sufficient.", examples: [{ jp: "薬を飲みさえすれば、よくなります。", romaji: "Kusuri o nomi sae sureba, yoku narimasu.", en: "If you just take medicine, you will get better." }] }
    ],
    quiz: [
      { q: "漢字を 読むことが ___。", ans: "できます", options: ["できます", "できますな", "できまして", "できました"] },
      { q: "ひらがな ___ 書けません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "お金 ___ あれば、買えます。", ans: "さえ", options: ["さえ", "だけ", "しか", "も"] },
      { q: "日本語の 新聞が ___ ますか。", ans: "読め", options: ["読め", "読み", "読める", "読ん"] },
      { q: "昨日 ３時間 ___ 寝ませんでした。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "雨 ___ 降らなければ、出かけます。", ans: "さえ", options: ["さえ", "だけ", "しか", "も"] },
      { q: "泳ぐ ___ ことが できません。", ans: "こと", options: ["こと", "もの", "の", "が"] },
      { q: "テニス ___ できません。", ans: "しか", options: ["しか", "だけ", "も", "は"] },
      { q: "暇 ___ あれば、遊びに行きます。", ans: "さえ", options: ["さえ", "だけ", "も", "は"] },
      { q: "納豆は 食べ ___ ません。", ans: "られ", options: ["られ", "れ", "て", "した"] }
    ]
  },
  {
    chapter: 28,
    level: "N4",
    title: "Simultaneous & Contrast",
    desc: "Nagara / Ba / Noni",
    patterns: [
      { id: "28.1", label: "～ながら", meaning: "While doing...", explanation: "Two actions performed by the same person at the same time.", examples: [{ jp: "音楽を聞きながら勉強します。", romaji: "Ongaku o kikinagara benkyou shimasu.", en: "I study while listening to music." }] },
      { id: "28.2", label: "～ば form (conditional)", meaning: "If...", explanation: "The conditional 'if' form. Group 1: u -> e + ba. Group 2: ru -> reba. Group 3: kuru -> kureba, suru -> sureba.", examples: [{ jp: "安ければ買います。", romaji: "Yasukereba kaimasu.", en: "If it's cheap, I'll buy it." }] },
      { id: "28.3", label: "～のに", meaning: "Although / Even though", explanation: "Used to express an unexpected or regrettable result.", examples: [{ jp: "一生懸命勉強したのに、不合格でした。", romaji: "Isshoukenmei benkyou shita noni, fugoukaku deshita.", en: "Although I studied hard, I failed." }] }
    ],
    quiz: [
      { q: "テレビを ___ ごはんを 食べます。", ans: "見ながら", options: ["見ながら", "見て", "見れば", "見ると"] },
      { q: "安く なれ ___、買います。", ans: "ば", options: ["ば", "たら", "ると", "ろう"] },
      { q: "約束した ___、彼は 来ませんでした。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "働き ___ 大学に 通っています。", ans: "ながら", options: ["ながら", "て", "に", "を"] },
      { q: "わからなけれ ___、先生に 聞いてください。", ans: "ば", options: ["ば", "たら", "ると", "ろう"] },
      { q: "日曜日 ___、仕事が あります。", ans: "なのに", options: ["なのに", "ので", "から", "けど"] },
      { q: "歌を ___ 踊ります。", ans: "歌いながら", options: ["歌いながら", "歌って", "歌い", "歌うと"] },
      { q: "時間 が あれ ___ 行きます。", ans: "ば", options: ["ば", "たら", "ると", "ろう"] },
      { q: "近い ___、タクシーに 乗りました。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "コーヒーを ___ 話しましょう。", ans: "飲みながら", options: ["飲みながら", "飲んで", "飲み", "飲むと"] }
    ]
  },
  {
    chapter: 29,
    level: "N4",
    title: "Preparations & Completion",
    desc: "Te-shimau / Te-oku / Te-miru",
    patterns: [
      { id: "29.1", label: "～てしまいます", meaning: "Completely finished / Regret", explanation: "Either indicates completion of an action or regret/regretful mistake.", examples: [{ jp: "宿題を全部やってしまいました。", romaji: "Shukudai o zenbu yatte shimaimashita.", en: "I finished all my homework." }, { jp: "パスポートを忘れてしまいました。", romaji: "Pasupo-to o wasurete shimaimashita.", en: "I unfortunately forgot my passport." }] },
      { id: "29.2", label: "～ておきます", meaning: "Do in advance", explanation: "Doing something as preparation for a future action or event.", examples: [{ jp: "旅行の前に切符を買っておきます。", romaji: "Ryokou no mae ni kippu o katte okimasu.", en: "I'll buy the tickets before the trip." }] },
      { id: "29.3", label: "～てみます", meaning: "Try doing...", explanation: "Doing something to see what it's like or to test it.", examples: [{ jp: "日本の料理を食べてみます。", romaji: "Nihon no ryouri o tabete mimasu.", en: "I'll try eating Japanese food." }] }
    ],
    quiz: [
      { q: "ワインを こぼして ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "パーティーの 前に 飲み物を 準備して ___ ます。", ans: "おき", options: ["おき", "しまい", "あり", "み"] },
      { q: "美味しいかどうか 食べて ___ ください。", ans: "みて", options: ["みて", "しまって", "おいて", "あって"] },
      { q: "全部 読んで ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "教科書を 片付けて ___ ください。", ans: "おいて", options: ["おいて", "しまって", "みて", "あって"] },
      { q: "あの 靴を 履いて ___ も いいですか。", ans: "みて", options: ["みて", "しまって", "おいて", "あって"] },
      { q: "宿題を 忘れて ___ ました。", ans: "しまい", options: ["しまい", "あり", "おき", "み"] },
      { q: "明日までに 資料を 読んで ___ ください。", ans: "おいて", options: ["おいて", "しまって", "みて", "あって"] },
      { q: "この ズボンを 試着して ___ も いいですか。", ans: "みて", options: ["みて", "しまって", "おいて", "あって"] },
      { q: "全部 食べて ___ ください。", ans: "まって", options: ["まって", "みて", "おいて", "あって"] }
    ]
  },
  {
    chapter: 30,
    level: "N4",
    title: "Transitive & Intransitive",
    desc: "Opening / Closing / States",
    patterns: [
      { id: "30.1", label: "Intransitive Verbs (自動詞)", meaning: "State/Movement without agent", explanation: "Focuses on the result or state. Uses particle 'ga'.", examples: [{ jp: "ドアが開きます。", romaji: "Doa ga akimasu.", en: "The door opens." }, { jp: "電気がつきました。", romaji: "Denki ga tsukimashita.", en: "The light came on." }] },
      { id: "30.2", label: "Transitive Verbs (他動詞)", meaning: "Action performed by agent", explanation: "Focuses on the action. Uses particle 'wo'.", examples: [{ jp: "ドアを開けます。", romaji: "Doa o akemasu.", en: "I open the door." }, { jp: "電気をつけます。", romaji: "Denki o tsukemasu.", en: "I turn on the light." }] },
      { id: "30.3", label: "～てある (Resulting State)", meaning: "Something has been done", explanation: "State resulting from a transitive action purposefully done.", examples: [{ jp: "壁に絵が掛けてあります。", romaji: "Kabe ni e ga kakete arimasu.", en: "A picture is hung on the wall." }] }
    ],
    quiz: [
      { q: "ドア ___ 閉まります。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "電気 ___ 消しました。", ans: "を", options: ["を", "が", "に", "は"] },
      { q: "カレンダー ___ かけてあります。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "窓 ___ 開きました。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "砂糖 ___ 入れてあります。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "袋 ___ 破れています。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "お皿 ___ 割りました。", ans: "を", options: ["を", "が", "に", "は"] },
      { q: "名前 ___ 書いてあります。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "車 ___ 止まっています。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "お湯 ___ 沸かしました。", ans: "を", options: ["を", "が", "に", "は"] }
    ]
  },
  {
    chapter: 31,
    level: "N4",
    title: "Intentions & Decisions",
    desc: "Volitional / Omou / Tsumori",
    patterns: [
      { id: "31.1", label: "Volitional Form (意向形)", meaning: "Let's...", explanation: "Casual version of ~mashou. Group 1: u -> o-line + u. Group 2: ru -> you. Group 3: kuru -> koyou, suru -> shiyou.", examples: [{ jp: "明日、映画を見に行こう。", romaji: "Ashita, eiga o mi ni ikou.", en: "Let's go see a movie tomorrow." }] },
      { id: "31.2", label: "～と思っています", meaning: "Thinking of doing...", explanation: "Used to express a decision or intent formed some time ago.", examples: [{ jp: "将来自分の店を持とうと思っています。", romaji: "Shourai jibun no mise o motou to omotte imasu.", en: "I am thinking of having my own shop in the future." }] },
      { id: "31.3", label: "～つもりです", meaning: "Intend to...", explanation: "Used to express a firm intention to perform an action.", examples: [{ jp: "来月日本へ行くつもりです。", romaji: "Raigetsu nihon e iku tsumori desu.", en: "I intend to go to Japan next month." }] }
    ],
    quiz: [
      { q: "疲れたから、もう ___。", ans: "寝よう", options: ["寝よう", "寝る", "寝ます", "寝え"] },
      { q: "お正月は実家に ___ と思っています。", ans: "帰ろう", options: ["帰ろう", "帰る", "帰り", "帰って"] },
      { q: "タバコを ___ つもりです。", ans: "やめる", options: ["やめる", "やめた", "やめよう", "やめて"] },
      { q: "駅まで ___ か。", ans: "走ろう", options: ["走ろう", "走る", "走り", "走って"] },
      { q: "将来 自分の店を ___ つもりです。", ans: "持つ", options: ["持つ", "持とう", "持って", "持ち"] },
      { q: "週末は 海へ ___ と思っています。", ans: "行こう", options: ["行こう", "行く", "行き", "行って"] },
      { q: "明日、部長に ___ つもりです。", ans: "会う", options: ["会う", "会おう", "会って", "会い"] },
      { q: "疲れたから、早く ___。", ans: "寝よう", options: ["寝よう", "寝る", "寝ます", "寝て"] },
      { q: "漢字を もっと ___ と思っています。", ans: "覚えよう", options: ["覚えよう", "覚える", "覚え", "覚えた"] },
      { q: "来年 結婚 ___ つもりです。", ans: "する", options: ["する", "しよう", "した", "し"] }
    ]
  },
  {
    chapter: 32,
    level: "N4",
    title: "Guesses & Appearances",
    desc: "Sou / You / Mitai",
    patterns: [
      { id: "32.1", label: "～そうです (Guess)", meaning: "Looks like / Seems", explanation: "Based on visual evidence. Verb stem + sou. I-adj (remove i) + sou.", examples: [{ jp: "今にも雨が降りそうです。", romaji: "Ima nimo ame ga furisou desu.", en: "It looks like it will rain at any moment." }, { jp: "このケーキは美味しそうです。", romaji: "Kono ke-ki wa oishisou desu.", en: "This cake looks delicious." }] },
      { id: "32.2", label: "～ようです", meaning: "It seems / Appears that...", explanation: "Used to describe a situation based on evidence from any sense, or information.", examples: [{ jp: "外は暑いようです。", romaji: "Soto wa atsui you desu.", en: "It seems hot outside." }] },
      { id: "32.3", label: "～みたいです", meaning: "Seems like (Casual)", explanation: "Colloquial version of ~you desu.", examples: [{ jp: "彼は日本人みたいです。", romaji: "Kare wa nihonjin mitai desu.", en: "He seems like a Japanese person." }] }
    ],
    quiz: [
      { q: "この 料理は 辛 ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "気分が 悪い ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "合格した ___ ですね。", ans: "みたい", options: ["みたい", "そう", "らしい", "よう"] },
      { q: "荷物が 落ち ___ ですよ。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "外は 暑い ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "彼は お金持ち ___ です。", ans: "みたい", options: ["みたい", "そう", "らしい", "よう"] },
      { q: "ボタンが 取れ ___ ですよ。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "誰か 来た ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "あのアニメ、面白い ___ ですよ。", ans: "みたい", options: ["みたい", "そう", "らしい", "よう"] },
      { q: "火が 消え ___ です。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] }
    ]
  },
  {
    chapter: 33,
    level: "N4",
    title: "Commands & Prohibitions",
    desc: "Commands / Nasai / Do not",
    patterns: [
      { id: "33.1", label: "Imperative Form (命令形)", meaning: "Do it!", explanation: "Strong command. Group 1: u -> e. Group 2: ru -> ro. Group 3: kuru -> koi, suru -> shiro.", examples: [{ jp: "早くしろ！", romaji: "Hayaku shiro!", en: "Do it quickly!" }] },
      { id: "33.2", label: "Prohibitive Form (禁止形)", meaning: "Don't do!", explanation: "Strong prohibition. Dictionary form + na.", examples: [{ jp: "ここに入るな。", romaji: "Koko ni hairu na.", en: "Don't enter here." }] },
      { id: "33.3", label: "～なさい", meaning: "Do... (Polite command)", explanation: "Often used by parents/teachers to children.", examples: [{ jp: "早く寝なさい。", romaji: "Hayaku nenasai.", en: "Go to bed early." }] }
    ],
    quiz: [
      { q: "騒ぐ ___！", ans: "な", options: ["な", "しろ", "なさい", "て"] },
      { q: "明日までに 資料を ___！", ans: "出せ", options: ["出せ", "出せな", "出しなさい", "出さな"] },
      { q: "もっと 勉強 ___！", ans: "しなさい", options: ["しなさい", "しろ", "するな", "して"] },
      { q: "そこに ___ な。", ans: "座る", options: ["座る", "座れ", "座りなさい", "座ら"] },
      { q: "危ない！ ___！", ans: "逃げろ", options: ["逃げろ", "逃げなさい", "逃げるな", "逃げ"] },
      { q: "野菜を ちゃんと ___ なさい。", ans: "食べ", options: ["食べ", "食べて", "食べろ", "食べるな"] },
      { q: "嘘を つく ___！", ans: "な", options: ["な", "しろ", "なさい", "て"] },
      { q: "早く ___ なさい。", ans: "起き", options: ["起き", "起きて", "起きろ", "起きるな"] },
      { q: "時間を 守れ！ は ___ という 意味です。", ans: "守れ", options: ["守れ", "守る", "守ら", "守れな"] },
      { q: "あきらめる ___！", ans: "な", options: ["な", "しろ", "なさい", "て"] }
    ]
  },  {
    chapter: 34,
    level: "N4",
    title: "Succession & Methods",
    desc: "Toori ni / Ato de / Naide",
    patterns: [
      { id: "34.1", label: "～とおりに", meaning: "Exactly as...", explanation: "Doing something exactly as another person or guide did.", examples: [{ jp: "説明書の とおりに 組み立てます。", romaji: "Setsumeisho no toori ni kumitatemasu.", en: "Assemble exactly as the manual says." }] },
      { id: "34.2", label: "～あとで", meaning: "After / Since", explanation: "Indicates an action happens after another.", examples: [{ jp: "仕事の あとで 飲みに行きます。", romaji: "Shigoto no ato de nomi ni ikimasu.", en: "After work, let's go for a drink." }] },
      { id: "34.3", label: "～ないで", meaning: "Without doing...", explanation: "Performing an action without doing another, or as a state.", examples: [{ jp: "傘を 持たないで 出かけました。", romaji: "Kasa o motanaide dekakemashita.", en: "I went out without taking an umbrella." }] }
    ],
    quiz: [
      { q: "私が 言った ___ 書いてください。", ans: "とおりに", options: ["とおりに", "ように", "ことに", "あとに"] },
      { q: "仕事が 終わった ___ 飲みに行きました。", ans: "あとで", options: ["あとで", "まえに", "うちに", "あいだに"] },
      { q: "昨夜は 歯を ___ ないで 寝てしまいました。", ans: "磨か", options: ["磨か", "磨き", "磨く", "磨け"] },
      { q: "矢印の ___ 行けば、着きますよ。", ans: "とおりに", options: ["とおりに", "ように", "あとで", "まえに"] },
      { q: "ご飯を 食べた ___ 歯を 磨きます。", ans: "あとで", options: ["あとで", "まえに", "ときに", "ながら"] },
      { q: "眼鏡を ___ ないで 本を 読みます。", ans: "かけ", options: ["かけ", "かけて", "かく", "かき"] },
      { q: "説明書の ___ 箱を 作ってください。", ans: "とおりに", options: ["とおりに", "ように", "あとで", "まえに"] },
      { q: "シャワーを 浴びた ___ 寝ます。", ans: "あとで", options: ["あとで", "ながら", "までに", "まえに"] },
      { q: "砂糖を ___ ないで コーヒーを 飲みます。", ans: "入れ", options: ["入れ", "入れて", "入る", "入り"] },
      { q: "練習の ___ 試合を しました。", ans: "あとで", options: ["あとで", "まえに", "から", "までに"] }
    ]
  },
  {
    chapter: 35,
    level: "N4",
    title: "Conditional (Ba)",
    desc: "V-ba / Adj-kereba",
    patterns: [
      { id: "35.1", label: "～ば", meaning: "If", explanation: "A general conditional form emphasizing the condition.", examples: [{ jp: "安ければ 買います。", romaji: "Yasukereba kaimasu.", en: "If it's cheap, I'll buy it." }, { jp: "練習すれば 上手に なります。", romaji: "Renshuu sureba jouzu ni narimashita.", en: "If you practice, you will become good at it." }] }
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
    chapter: 36,
    level: "N4",
    title: "Effort & Ability",
    desc: "You ni suru / You ni naru",
    patterns: [
      { id: "36.1", label: "～ようにする", meaning: "Try to do", explanation: "Making a conscious effort to do something regularly.", examples: [{ jp: "毎日 野菜を 食べるように しています。", romaji: "Mainichi yasai o taberu you ni shite imasu.", en: "I try to eat vegetables every day." }] },
      { id: "36.2", label: "～ようになる", meaning: "Become able to / Start to", explanation: "A gradual change in ability or habit.", examples: [{ jp: "日本語が 話せるように なりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", en: "I have become able to speak Japanese." }] }
    ],
    quiz: [
      { q: "毎日 運動する ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "やっと 自転車に 乗れる ___。", ans: "ようになりました", options: ["ようになりました", "ようにしました", "ことになりました", "ことになりました"] },
      { q: "甘いものを 食べない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "ころに"] },
      { q: "肉を 食べない ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "うちに"] },
      { q: "早く 寝る ___ してください。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "だんだん わかる ___ なりました。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "忘れ物を しない ___ してください。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "一人で 行ける ___ なりましたか。", ans: "ように", options: ["ように", "ために", "ことに", "うちに"] },
      { q: "お酒を 飲まない ___ しています。", ans: "ように", options: ["ように", "ために", "ことに", "からに"] },
      { q: "漢字が 書ける ___ なりましたか。", ans: "ように", options: ["ように", "ために", "ことに", "まえに"] }
    ]
  },
  {
    chapter: 37,
    level: "N4",
    title: "Passive Voice",
    desc: "V-rareru",
    patterns: [
      { id: "37.1", label: "受身形 (うけみけい)", meaning: "Passive Form", explanation: "Indicates that the subject is acted upon.", examples: [{ jp: "先生に 褒められました。", romaji: "Sensei ni homeraremashita.", en: "I was praised by the teacher." }] }
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
    chapter: 38,
    level: "N4",
    title: "Nominalization",
    desc: "V-no wa / V-no ga",
    patterns: [
      { id: "38.1", label: "～のは / のが", meaning: "Nominalizer 'no'", explanation: "Turns a verb into a noun to make it a subject or object.", examples: [{ jp: "泳ぐのは 体にいいです。", romaji: "Oyogu no wa karada ni ii desu.", en: "Swimming is good for your body." }, { jp: "歌を歌うのが 好きです。", romaji: "Uta o utau no ga suki desu.", en: "I like singing songs." }] }
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
    chapter: 39,
    level: "N4",
    title: "Reason & Cause",
    desc: "Te / Node / De",
    patterns: [
      { id: "39.1", label: "～て / ～で", meaning: "Because of...", explanation: "Expressing a cause or reason using the Te-form or De-particle (for nouns).", examples: [{ jp: "ニュースを 聞いて、びっくりしました。", romaji: "Nyuusu o kiite, bikkuri shimashita.", en: "I was surprised to hear the news." }, { jp: "地震で ビルが 倒れました。", romaji: "Jishin de biru ga taoremashita.", en: "The building collapsed because of the earthquake." }] },
      { id: "39.2", label: "～ので", meaning: "Because / Since", explanation: "A polite and objective way to state a reason.", examples: [{ jp: "用事が あるので、お先に 失礼します。", romaji: "Youji ga aru node, osaki ni shitsurei shimasu.", en: "Since I have some business, I'll excuse myself first." }] }
    ],
    quiz: [
      { q: "危ない ___、気をつけてください。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "バスが 来なくて、___。", ans: "困りました", options: ["困りました", "困ります", "困る", "困って"] },
      { q: "風邪を 引いた ___ 休みます。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "地震 ___ 山が 崩れました。", ans: "で", options: ["で", "ので", "から", "に"] },
      { q: "難しくて ___ ませんでした。", ans: "わかり", options: ["わかり", "わかる", "わかって", "わかった"] },
      { q: "気分が 悪い ___、早く 帰ります。", ans: "ので", options: ["ので", "から", "で", "に"] },
      { q: "事故 ___ 電車が 止まっています。", ans: "で", options: ["で", "ので", "から", "に"] },
      { q: "テストが 終わって、___ しました。", ans: "安心", options: ["安心", "心配", "びっくり", "がっかり"] },
      { q: "静か ___、よく 眠れました。", ans: "なので", options: ["なので", "から", "で", "に"] },
      { q: "道が 混んで ___ 遅れました。", ans: "いて", options: ["いて", "いるので", "いるから", "い"] }
    ]
  },
  {
    chapter: 40,
    level: "N4",
    title: "Embedded Questions",
    desc: "Ka / Ka dou ka",
    patterns: [
      { id: "40.1", label: "～か", meaning: "Embedded question", explanation: "Used to include a question (with an interrogative) within a sentence.", examples: [{ jp: "いつ 結婚するか、知りません。", romaji: "Itsu kekkon suru ka, shirimasen.", en: "I don't know when they will get married." }] },
      { id: "40.2", label: "～かどうか", meaning: "Whether or not", explanation: "Used when the embedded question has no interrogative word.", examples: [{ jp: "美味しいか どうか、食べてみます。", romaji: "Oishii ka dou ka, tabete mimasu.", en: "I'll try eating it to see if it's delicious or not." }] }
    ],
    quiz: [
      { q: "何時 ___ 教えてください。", ans: "か", options: ["か", "に", "を", "は"] },
      { q: "間違いが ない ___ 確認してください。", ans: "かどうか", options: ["かどうか", "か", "のに", "ので"] },
      { q: "どこに 置いた ___ 忘れました。", ans: "か", options: ["か", "に", "を", "は"] },
      { q: "気に入る ___ わかりません。", ans: "かどうか", options: ["かどうか", "か", "と", "な"] },
      { q: "誰 ___ 知りません。", ans: "だか", options: ["だか", "か", "は", "に"] },
      { q: "行く ___ まだ 決めていません。", ans: "かどうか", options: ["かどうか", "か", "と", "な"] },
      { q: "何だった ___ 忘れました。", ans: "か", options: ["か", "に", "を", "は"] },
      { q: "間に合う ___ 走ります。", ans: "かどうか", options: ["かどうか", "か", "と", "な"] },
      { q: "誰に あげた ___ 忘れました。", ans: "か", options: ["か", "に", "を", "は"] },
      { q: "故障 ___ 調べてください。", ans: "かどうか", options: ["かどうか", "か", "を", "に"] }
    ]
  },
  {
    chapter: 41,
    level: "N4",
    title: "Giving & Receiving 2",
    desc: "Itadaku / Kudasaru / Yaru",
    patterns: [
      { id: "41.1", label: "～ていただく / ～くださる", meaning: "Polite/Humble giving & receiving", explanation: "Humble/Respectful versions of morau/kureru/ageru for actions.", examples: [{ jp: "先生に 本を 読んで いただきました。", romaji: "Sensei ni hon o yonde itadakimashita.", en: "I had the teacher read a book for me (humble)." }, { jp: "社長が お土産を くださいました。", romaji: "Shachou ga omiyage o kudasaimashita.", en: "The president gave me a souvenir (respectful)." }] }
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
    chapter: 42,
    level: "N4",
    title: "Purpose & Use",
    desc: "Tame ni / No ni",
    patterns: [
      { id: "42.1", label: "～ために", meaning: "For / In order to", explanation: "Indicates a benefit or purpose.", examples: [{ jp: "家族のために 働いています。", romaji: "Kazoku no tame ni hataraite imasu.", en: "I'm working for my family." }] },
      { id: "42.2", label: "～のに (Use)", meaning: "For (doing something)", explanation: "Indicates the utility of an object.", examples: [{ jp: "このはさみは 花を 切るのに 使います。", romaji: "Kono hasami wa hana o kiru no ni tsukaimasu.", en: "This pair of scissors is used for cutting flowers." }] }
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
    chapter: 43,
    level: "N4",
    title: "Appearance & Attempt",
    desc: "Sou desu / Te miru",
    patterns: [
      { id: "43.1", label: "～そうです (Appearance)", meaning: "Looks like...", explanation: "Visual judgment based on appearance. V-stem + sou / Adj-stem + sou.", examples: [{ jp: "雨が 降りそうです。", romaji: "Ame ga furisou desu.", en: "It looks like it will rain." }, { jp: "この ケーキは 美味しそうです。", romaji: "Kono ke-ki wa oishisou desu.", en: "This cake looks delicious." }] },
      { id: "43.2", label: "～てみる", meaning: "Try to do / Try out", explanation: "Doing something to see what it's like.", examples: [{ jp: "新しい 靴を 履いて みました。", romaji: "Atarashii kutsu o haite mimashita.", en: "I tried on new shoes." }] }
    ],
    quiz: [
      { q: "荷物が ___ そうです。", ans: "落ち", options: ["落ち", "落ちる", "落ちた", "落ちて"] },
      { q: "この 料理は 辛 ___ ですね。", ans: "そう", options: ["そう", "そうに", "ような", "みたい"] },
      { q: "一度 日本へ 行って ___ です。", ans: "みたい", options: ["みたい", "みた", "みって", "みる"] },
      { q: "ボタンが ___ そうです。", ans: "取れ", options: ["取れ", "取れる", "取れた", "取れて"] },
      { q: "暖か ___ ですね。", ans: "そう", options: ["そう", "ようで", "みたい", "みだ"] },
      { q: "面白そう ___ 、見てみました。", ans: "なので", options: ["なので", "から", "で", "に"] },
      { q: "火が ___ そうですよ。", ans: "消え", options: ["消え", "消える", "消えた", "消えて"] },
      { q: "美味しそう ___ 食べました。", ans: "に", options: ["に", "を", "が", "は"] },
      { q: "袋が ___ そうです。", ans: "破れ", options: ["破れ", "破れる", "破れた", "破れて"] },
      { q: "もう一度 考えて ___ ください。", ans: "みて", options: ["みて", "みる", "みれ", "みろ"] }
    ]
  },
  {
    chapter: 44,
    level: "N4",
    title: "Excess & Ease",
    desc: "Sugiru / Yasui / Nikui",
    patterns: [
      { id: "44.1", label: "～すぎる", meaning: "Too much / Excess", explanation: "Performing an action or being in a state to an excessive degree.", examples: [{ jp: "お酒を 飲みすぎました。", romaji: "Oshake o nomisugimashita.", en: "I drank too much." }] },
      { id: "44.2", label: "～やすい / ～にくい", meaning: "Easy / Hard to do", explanation: "Indicates the ease or difficulty of performing an action.", examples: [{ jp: "この ペンは 書きやすい です。", romaji: "Kono pen wa kakiyasui desu.", en: "This pen is easy to write with." }] }
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
    chapter: 45,
    level: "N4",
    title: "Cases & Contrast",
    desc: "Baai / Noni",
    patterns: [
      { id: "45.1", label: "～ばあい (場合)", meaning: "In case of...", explanation: "Used for hypothetical situations or instructions.", examples: [{ jp: "火事の 場合は 119に 電話します。", romaji: "Kaji no baai wa 119 ni denwa shimasu.", en: "In case of fire, call 119." }] },
      { id: "45.2", label: "～のに (Contrast)", meaning: "Even though / Despite", explanation: "Expresses contrast or unexpected results.", examples: [{ jp: "約束した のに、彼が 来ませんでした。", romaji: "Yakusoku shita no ni, kare ga kimasen deshita.", en: "Even though we made a promise, he didn't come." }] }
    ],
    quiz: [
      { q: "領収書が 必要な ___ 言ってください。", ans: "場合は", options: ["場合は", "なかれば", "までに", "ので"] },
      { q: "遅れる ___ 連絡してください。", ans: "場合は", options: ["場合は", "ために", "のに", "ので"] },
      { q: "一生懸命 勉強した ___ 、不合格でした。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "故障の ___ どこに 連絡しますか。", ans: "場合は", options: ["場合は", "ためには", "のには", "ので"] },
      { q: "会議に 間に合わない ___ 連絡してください。", ans: "場合は", options: ["場合は", "までに", "から", "ので"] },
      { q: "薬を 飲んだ ___ 、よくなりません。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "雨 ___ 中止します。", ans: "の場合は", options: ["の場合は", "なら", "ので", "から"] },
      { q: "静かな ___ 、よく 眠れません。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "わからない ___ 聞いてください。", ans: "場合は", options: ["場合は", "ために", "も", "ので"] },
      { q: "日曜日 ___ 、働いています。", ans: "なのに", options: ["なのに", "ので", "から", "けど"] }
    ]
  },
  {
    chapter: 46,
    level: "N4",
    title: "Aspect & Recent Actions",
    desc: "Tokoro / Bakari",
    patterns: [
      { id: "46.1", label: "～ところです", meaning: "Specific stage of action", explanation: "Indicates beginning, middle, or end of an action.", examples: [{ jp: "今から ご飯を 食べる ところです。", romaji: "Ima kara gohan o taberu tokoro desu.", en: "I'm about to eat now." }] },
      { id: "46.2", label: "～たばかり", meaning: "Just finished doing", explanation: "Indicates that something occurred very recently (subjective).", examples: [{ jp: "さっき 食べた ばかり です。", romaji: "Sakki tabeta bakari desu.", en: "I just finished eating a moment ago." }] }
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
    chapter: 47,
    level: "N4",
    title: "Hearsay & Conjecture",
    desc: "Sou desu / You desu",
    patterns: [
      { id: "47.1", label: "～そうです (Hearsay)", meaning: "I heard that...", explanation: "Used to relay information from another source. Plain form + sou desu.", examples: [{ jp: "明日は 雨だ そうです。", romaji: "Ashita wa ame da sou desu.", en: "I heard that it will rain tomorrow." }] },
      { id: "47.2", label: "～ようです", meaning: "It seems / Appears", explanation: "Conjecture based on sensory evidence or information. Plain form + you desu.", examples: [{ jp: "隣の 部屋に 誰か いる ようです。", romaji: "Tonari no heya ni dareka iru you desu.", en: "It seems like someone is in the next room." }] }
    ],
    quiz: [
      { q: "天気予報に よると 雨が ___ そうです。", ans: "降る", options: ["降る", "降り", "降って", "降った"] },
      { q: "部長は 忙しい ___ です。", ans: "ようです", options: ["ようです", "そうです", "らしいです", "みたいです"] },
      { q: "彼は お金持ちだ ___ です。", ans: "そうです", options: ["そうです", "ようです", "らしいです", "みたいです"] },
      { q: "この リンゴは 甘い ___ です。", ans: "ようです", options: ["ようです", "そうです", "らしいです", "みたいな"] },
      { q: "うわさでは その映画は 面白い ___ ですよ。", ans: "そうです", options: ["そうです", "ようです", "らしい", "みた"] },
      { q: "誰も いない ___ ですね。", ans: "ようです", options: ["ようです", "そうです", "らしい", "みて"] },
      { q: "明日は 寒い ___ です。", ans: "そうです", options: ["そうです", "ようです", "らしい", "みだ"] },
      { q: "火が 消えた ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "あの方は 日本人 ___ ですね。", ans: "のよう", options: ["のよう", "なよう", "そう", "たよう"] },
      { q: "咳が 出る ___ ですね。 風邪ですか。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] }
    ]
  },
  {
    chapter: 48,
    level: "N4",
    title: "Causative Form",
    desc: "使役形 (V-saseru)",
    patterns: [
      { id: "48.1", label: "使役形 (しえきけい)", meaning: "Make / Let someone do", explanation: "Used when one person makes or lets another perform an action.", examples: [{ jp: "母は 弟を 買い物に 行かせました。", romaji: "Haha wa otouto o kaimono ni ikasemashita.", en: "My mother made my younger brother go shopping." }] }
    ],
    quiz: [
      { q: "先生は 学生に 掃除を ___ ました。", ans: "させ", options: ["させ", "し", "られ", "して"] },
      { q: "母は 弟を 買い物に ___ ました。", ans: "行かせ", options: ["行かせ", "行かされ", "行き", "行っ"] },
      { q: "部長は 山田さんを 出張 ___ ました。", ans: "させ", options: ["させ", "し", "られ", "して"] },
      { q: "子供に ピアノを ___ ました。", ans: "習わせ", options: ["習わせ", "習わされ", "習い", "習っ"] },
      { q: "彼を 1時間も ___ ました。", ans: "待たせ", options: ["待たせ", "待たされ", "待ち", "待っ"] },
      { q: "妹に ピアノを ___ ました。", ans: "弾かせ", options: ["弾かせ", "弾き", "弾かれ", "弾い"] },
      { q: "子供を 公園で ___ ました。", ans: "遊ばせ", options: ["遊ばせ", "遊び", "遊ばさ", "遊ん"] },
      { q: "息子に 部屋を 掃除 ___ ました。", ans: "させ", options: ["させ", "し", "され", "して"] },
      { q: "彼女を ___ しまいました。", ans: "泣かせて", options: ["泣かせて", "泣き", "泣いて", "泣かれた"] },
      { q: "ここでの 駐車は ___ ください。", ans: "させないで", options: ["させないで", "しないで", "させるな", "されるな"] }
    ]
  },
  {
    chapter: 49,
    level: "N4",
    title: "Respectful Honorifics",
    desc: "尊敬語 (Sonkeigo)",
    patterns: [
      { id: "49.1", label: "尊敬語 (そんけいご)", meaning: "Respectful Language", explanation: "Used to show respect to someone above you by raising their actions.", examples: [{ jp: "社長は もう お帰りに なりました。", romaji: "Shachou wa mou okaeri ni narimashita.", en: "The president has already returned." }] }
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
    chapter: 50,
    level: "N4",
    title: "Humble Honorifics",
    desc: "謙譲語 (Kenjougo)",
    patterns: [
      { id: "50.1", label: "謙譲語 (けんじょうご)", meaning: "Humble Language", explanation: "Used to show respect by lowering your own actions.", examples: [{ jp: "明日、5時に 参ります。", romaji: "Ashita, goji ni maimasu.", en: "I will come at 5 o'clock (humble)." }] }
    ],
    quiz: [
      { q: "私は 田中と ___。", ans: "申します", options: ["申します", "言います", "おっしゃいます", "まします"] },
      { q: "明日、10時に ___。", ans: "参ります", options: ["参ります", "行きます", "いらっしゃいます", "おいでです"] },
      { q: "私が ご案内 ___。", ans: "いたし", options: ["いたし", "し", "させ", "なれ"] },
      { q: "お名前を ___ か。", ans: "お伺いして", options: ["お伺いして", "聞いて", "おっしゃって", "申しあげて"] },
      { q: "荷物を お持ち ___ ます。", ans: "いたし", options: ["いたし", "し", "させ", "なれ"] },
      { q: "社長に 本を ___ ました。", ans: "いただき", options: ["いただき", "もらい", "ください", "やり"] },
      { q: "日本に 3年 ___ います。", ans: "おり", options: ["おり", "い", "いらっしゃい", "ある"] },
      { q: "部長に 会いに ___ ました。", ans: "まいり", options: ["まいり", "き", "いらっしゃい", "おいでになり"] },
      { q: "コーヒーを ___ ました。", ans: "いただき", options: ["いただき", "飲み", "ください", "召し上がり"] },
      { q: "明日、また お目にかかり ___。", ans: "たいです", options: ["たいです", "ます", "ましょう", "ましたか"] }
    ]
  },

  // --- JLPT N3 CORE CURRICULUM ---
  // --- JLPT N3 CONTENT (Shin Kanzen Master) ---
  {
    chapter: 51,
    level: "N3",
    title: "Expansion & Explanation 1",
    desc: "Wake da / Wake dewa nai",
    patterns: [
      { id: "51.1", label: "～わけだ / ～というわけだ", meaning: "So that means... / No wonder", explanation: "Used to express a logical conclusion or explain the reason behind a fact.", examples: [{ jp: "夜更かししたのか。眠いわけだ。", romaji: "Yofukashi shita no ka. Nemui wake da.", en: "Did you stay up late? No wonder you're sleepy." }, { jp: "20年も日本にいるのか。日本語が上手なわけだ。", romaji: "Nijuunen mo Nihon ni iru no ka. Nihongo ga jouzu na wake da.", en: "You've been in Japan for 20 years? That explains why your Japanese is so good." }] },
      { id: "51.2", label: "～わけではない / ～というわけではない", meaning: "It doesn't mean that... / Not necessarily", explanation: "Used for partial negation or to say that something isn't always true.", examples: [{ jp: "日本人がみんな寿司が好きだというわけではない。", romaji: "Nihonjin ga minna sushi ga suki da to iu wake de wa nai.", en: "It's not that all Japanese people like sushi." }, { jp: "嫌いなわけではないが、今は食べたくない。", romaji: "Kirai na wake de wa nai ga, ima wa tabetakunai.", en: "It's not that I hate it, but I don't want to eat it now." }] }
    ],
    quiz: [
      { q: "エアコンがついていない。暑い ___。", ans: "わけだ", options: ["わけだ", "はずだ", "ことだ", "ものだ"] },
      { q: "高いからといって、いい ___。", ans: "わけではない", options: ["わけではない", "わけだ", "はずがない", "ことにした"] },
      { q: "5キロも走ったんだ。疲れる ___。", ans: "わけだ", options: ["わけだ", "ことだ", "ものだ", "ばかりだ"] },
      { q: "嫌いな ___ が、今は会いたくない。", ans: "わけではない", options: ["わけではない", "わけだ", "はずがない", "ばかりだ"] },
      { q: "鍵が開いている。誰かいる ___。", ans: "わけだ", options: ["わけだ", "はずだ", "ことだ", "ものだ"] },
      { q: "いつも暇な ___。", ans: "わけではない", options: ["わけではない", "ものだから", "おかげで", "せいで"] },
      { q: "雨が降っている。寒い ___。", ans: "わけだ", options: ["わけだ", "ことだ", "はずだ", "ものだ"] },
      { q: "お金持ちがみんな幸せな ___。", ans: "わけではない", options: ["わけではない", "わけだ", "はずだ", "ことだ"] },
      { q: "毎日練習しているから、上手になる ___。", ans: "わけだ", options: ["わけだ", "ものだ", "ことだ", "どころか"] },
      { q: "全くできない ___。", ans: "わけではない", options: ["わけではない", "はずがない", "わけだ", "ことにした"] }
    ]
  },
  {
    chapter: 52,
    level: "N3",
    title: "Expansion & Explanation 2",
    desc: "Mono / Koto Patterns",
    patterns: [
      { id: "52.1", label: "～ものだ / ～ものだから", meaning: "General truth / Because (excuse)", explanation: "Mono da expresses a general truth or deep emotion. Mono dakara is used for explaining a reason or making an excuse.", examples: [{ jp: "時間は早く過ぎるものだ。", romaji: "Jikan wa hayaku sugiru mono da.", en: "Time sure passes quickly (general truth)." }, { jp: "遅れてすみません。道が混んでいたものだから。", romaji: "Okurete sumimasen. Michi ga konde ita mono dakara.", en: "Sorry I'm late. It's because the roads were crowded." }] },
      { id: "52.2", label: "～ことだ / ～ということだ", meaning: "Advice / That means (hearsay)", explanation: "Koto da is used for giving strong advice. To iu koto da indicates a conclusion or hearsay.", examples: [{ jp: "日本語が上手になりたければ、毎日練習することだ。", romaji: "Nihongo ga jouzu ni naritakereba, mainichi renshuu suru koto da.", en: "If you want to become good at Japanese, you should practice every day." }, { jp: "物価が上がるということです。", romaji: "Bukka ga agaru to iu koto desu.", en: "It means that prices will go up (hearsay/result)." }] }
    ],
    quiz: [
      { q: "子供の成長は早い ___。", ans: "ものだ", options: ["ものだ", "ことだ", "はずだ", "わけだ"] },
      { q: "どうして食べないの？ 「嫌い ___。」", ans: "なんだもの", options: ["なんだもの", "わけだ", "ことだ", "はずだ"] },
      { q: "合格したければ、もっと勉強する ___。", ans: "ことだ", options: ["ことだ", "ものだ", "わけだ", "はずだ"] },
      { q: "不合格だった。つまり、来年も受ける ___。", ans: "ということだ", options: ["ということだ", "ものだ", "ことにした", "わけだ"] },
      { q: "暑かった ___、エアコンをつけました。", ans: "ものだから", options: ["ものだから", "わけで", "ことなので", "はずで"] },
      { q: "親切にされたら、お礼を言う ___ だ。", ans: "もの", options: ["もの", "こと", "はず", "わけ"] },
      { q: "健康になりたければ、タバコをやめる ___。", ans: "ことだ", options: ["ことだ", "ものだ", "わけだ", "はずだ"] },
      { q: "ニュースによると、来週は休み ___。", ans: "ということだ", options: ["ということだ", "ものだ", "はずだ", "わけだ"] },
      { q: "知らなかった ___、失礼しました。", ans: "ものだから", options: ["ものだから", "わけで", "ことなので", "はずで"] },
      { q: "昔はよくここで遊んだ ___。", ans: "ものだ", options: ["ものだ", "ことだ", "はずだ", "わけだ"] }
    ]
  },
  {
    chapter: 53,
    level: "N3",
    title: "Advanced Conditionals 1",
    desc: "Usage Nuances & Sae",
    patterns: [
      { id: "53.1", label: "～ば / ～たら / ～と / ～なら", meaning: "Advanced Conditionals", explanation: "Refined usage of the four 'if' forms. Ba (general), Tara (sequential), To (natural result), Nara (contextual).", examples: [{ jp: "安ければ買います。", romaji: "Yasukereba kaimasu.", en: "If it's cheap, I'll buy it (logic)." }, { jp: "嫌ならやめてもいいですよ。", romaji: "Iya nara yamete mo ii desu yo.", en: "If you hate it, you can quit (context)." }] },
      { id: "53.2", label: "～さえ～ば", meaning: "If only...", explanation: "Emphasizes that if at least one condition is met, the rest will follow.", examples: [{ jp: "薬を飲みさえすれば、よくなります。", romaji: "Kusuri o nomi sae sureba, yoku narimasu.", en: "If you just take medicine, you will get better." }] }
    ],
    quiz: [
      { q: "お金 ___ あれば、買えます。", ans: "さえ", options: ["さえ", "こそ", "ばかり", "だけ"] },
      { q: "春に ___ 桜が咲きます。", ans: "なると", options: ["なると", "なれば", "なったら", "なら"] },
      { q: "時間が ___ 会いましょう。", ans: "あったら", options: ["あったら", "あれば", "あると", "ある"] },
      { q: "ひらがな ___ 書ければいいです。", ans: "さえ", options: ["さえ", "こそ", "ばかり", "だけ"] },
      { q: "雨 ___ 降らなければ行きます。", ans: "さえ", options: ["さえ", "まで", "から", "ので"] },
      { q: "嫌 ___ やめてもいいですよ。", ans: "なら", options: ["なら", "だったら", "であれば", "だと"] },
      { q: "水 ___ 飲めれば大丈夫です。", ans: "さえ", options: ["さえ", "だけ", "しか", "も"] },
      { q: "安く ___ 買います。", ans: "なれば", options: ["なれば", "なったら", "ならな", "なると"] },
      { q: "君 ___ いれば、何もいらない。", ans: "さえ", options: ["さえ", "しか", "だけ", "も"] },
      { q: "説明書を ___ わかります。", ans: "読めば", options: ["読めば", "読んだら", "読むと", "読み"] }
    ]
  },
  {
    chapter: 54,
    level: "N3",
    title: "Advanced Conditionals 2",
    desc: "Limits & Sequence",
    patterns: [
      { id: "54.1", label: "～ない限り", meaning: "Unless / As long as not", explanation: "Something will continue unless a certain condition is met.", examples: [{ jp: "頑張らない限り、合格しません。", romaji: "Ganbaranai kagiri, goukaku shimasen.", en: "Unless you work hard, you won't pass." }] },
      { id: "54.2", label: "～以上（は）", meaning: "Now that / Since", explanation: "Since a situation has occurred, there is a natural consequence or obligation.", examples: [{ jp: "約束した以上、守ります。", romaji: "Yakusoku shita ijou, mamorimasu.", en: "Now that I've promised, I'll keep it." }] },
      { id: "54.3", label: "～最中に / ～途中で", meaning: "In the middle of", explanation: "Doing something exactly when another action is happening.", examples: [{ jp: "料理の最中に、電話がかかってきた。", romaji: "Ryouri no saichuu ni, denwa ga kakatte kita.", en: "In the middle of cooking, a phone call came." }] }
    ],
    quiz: [
      { q: "雨が降ら ___ 、野球をします。", ans: "ない限り", options: ["ない限り", "ないで", "なければ", "なくて"] },
      { q: "一度決めた ___ 、最後までやります。", ans: "以上", options: ["以上", "からに", "からには", "うえに"] },
      { q: "食事の ___ 、誰か来た。", ans: "最中に", options: ["最中に", "うちに", "まえに", "ばかりに"] },
      { q: "謝ら ___ 、許しません。", ans: "ない限り", options: ["ない限り", "ないで", "なければ", "なくて"] },
      { q: "日本に来た ___ 、日本語をマスターしたい。", ans: "以上", options: ["以上", "ものの", "反面", "わりに"] },
      { q: "電話の ___ 、ドアベルが鳴った。", ans: "最中に", options: ["最中に", "とおりに", "うちに", "ために"] },
      { q: "辞め ___ 、自由になれません。", ans: "ない限り", options: ["ない限り", "ないで", "なければ", "なくて"] },
      { q: "引き受けた ___ 、責任を持ってください。", ans: "以上", options: ["以上", "からこそ", "つもりで", "おかげで"] },
      { q: "試験の ___ 、お腹が痛くなった。", ans: "最中に", options: ["最中に", "ながら", "つつ", "おりに"] },
      { q: "特別な事情が ___ 、休みません。", ans: "ない限り", options: ["ない限り", "ないで", "なければ", "なくて"] }
    ]
  },
  {
    chapter: 55,
    level: "N3",
    title: "Cause & Reason 1",
    desc: "Tame / Okage / Sei",
    patterns: [
      { id: "55.1", label: "～ため（に）", meaning: "Because of / Due to", explanation: "A formal way to express a reason or cause.", examples: [{ jp: "大雨のため、電車が遅れています。", romaji: "Ooume no tame, densha ga okurete imasu.", en: "Due to heavy rain, the trains are delayed." }] },
      { id: "55.2", label: "～おかげで / ～せいで", meaning: "Thanks to / Because of (negative)", explanation: "Okage de is used for positive results, while Sei de is used for negative ones.", examples: [{ jp: "先生のおかげで、合格できました。", romaji: "Sensei no okage de, goukaku dekimashita.", en: "Thanks to my teacher, I was able to pass." }, { jp: "寒さのせいで、風邪を引いた。", romaji: "Samusa no sei de, kaze o hiita.", en: "Because of the cold, I caught a cold." }] }
    ],
    quiz: [
      { q: "事故 ___ 、道が混んでいる。", ans: "のため", options: ["のため", "のおかげで", "のせいで", "のことだ"] },
      { q: "あなた ___ 、助かりました。", ans: "のおかげで", options: ["のおかげで", "のせいで", "のために", "のことだ"] },
      { q: "雪 ___ 、飛行機が飛ばない。", ans: "のせいで", options: ["のせいで", "のおかげで", "のために", "のことだ"] },
      { q: "工事 ___ 、通行止めだ。", ans: "のため", options: ["のため", "おかげで", "せいで", "ばかりに"] },
      { q: "雨が降った ___ 、涼しくなった。", ans: "おかげで", options: ["おかげで", "せいで", "ために", "ことだ"] },
      { q: "飲みすぎた ___ 、頭が痛い。", ans: "せいで", options: ["せいで", "おかげで", "ために", "ことだ"] },
      { q: "不注意 ___ 、怪我をした。", ans: "のため", options: ["のため", "おかげで", "せいで", "ばかりだ"] },
      { q: "友達 ___ 、楽しい一日だった。", ans: "のおかげで", options: ["のおかげで", "のせいで", "のために", "のことで"] },
      { q: "渋滞 ___ 、間に合わなかった。", ans: "のせいで", options: ["のせいで", "のおかげで", "のために", "のことだ"] },
      { q: "台風 ___ 、学校が休みになった。", ans: "のため", options: ["のため", "おかげで", "せいで", "ばかりに"] }
    ]
  },
  {
    chapter: 56,
    level: "N3",
    title: "Cause & Reason 2",
    desc: "Yotte / Koso / Bakari",
    patterns: [
      { id: "56.1", label: "～によって", meaning: "Due to / Because of (formal)", explanation: "Used to indicate a cause, means, or agent (in passive).", examples: [{ jp: "不注意によって、火事になった。", romaji: "Fuchuui ni yotte, kaji ni natta.", en: "Due to carelessness, a fire broke out." }] },
      { id: "56.2", label: "～からこそ / ～ばかりに", meaning: "Precisely because / Just because (regret)", explanation: "Karaso emphasizes the reason. Bakari ni highlights a single cause leading to a bad result.", examples: [{ jp: "好きだからこそ、厳しくするのです。", romaji: "Suki dakara koso, kibishiku suru no desu.", en: "It's precisely because I like you that I'm strict." }, { jp: "お金がないばかりに、旅行に行けない。", romaji: "Okane ga nai bakari ni, ryokou ni ikenai.", en: "Just because I have no money, I can't go on a trip." }] }
    ],
    quiz: [
      { q: "地震 ___ 、多くの建物が壊れた。", ans: "によって", options: ["によって", "として", "にとって", "についても"] },
      { q: "あなたのことを思っている ___ 、言うんです。", ans: "からこそ", options: ["からこそ", "からには", "ばかりに", "おかげで"] },
      { q: "ちょっとしたミスをした ___ 、大変なことに成った。", ans: "ばかりに", options: ["ばかりに", "からこそ", "おかげで", "せいで"] },
      { q: "努力 ___ 、成功を掴んだ。", ans: "によって", options: ["によって", "として", "にとって", "について"] },
      { q: "忙しい ___ 、健康に気をつけなければならない。", ans: "からこそ", options: ["からこそ", "ばかりに", "おかげで", "せいで"] },
      { q: "嘘をついた ___ 、信用を失った。", ans: "ばかりに", options: ["ばかりに", "からこそ", "おかげで", "せいで"] },
      { q: "不祥事 ___ 、社長が辞任した。", ans: "によって", options: ["によって", "として", "にとって", "についても"] },
      { q: "近い ___ 、いつでも会える。", ans: "からこそ", options: ["からこそ", "ばかりに", "からには", "わりに"] },
      { q: "鍵を忘れた ___ 、中に入れなかった。", ans: "ばかりに", options: ["ばかりに", "からこそ", "おかげで", "せいで"] },
      { q: "科学の進歩 ___ 、生活が便利になった。", ans: "によって", options: ["によって", "として", "にとって", "について"] }
    ]
  },
  {
    chapter: 57,
    level: "N3",
    title: "Contrast & Opposition",
    desc: "Noni / Ippou / Hanmen",
    patterns: [
      { id: "57.1", label: "～のに", meaning: "Despite / Even though", explanation: "Expresses surprise or dissatisfaction at an unexpected result.", examples: [{ jp: "日曜日なのに、仕事です。", romaji: "Nichiyoubi na no ni, shigoto desu.", en: "Even though it's Sunday, I'm working." }] },
      { id: "57.2", label: "～一方で / ～反面", meaning: "On the other hand", explanation: "Ippou de is used for two parallel aspects. Hanmen is specifically for two opposite sides of the same thing.", examples: [{ jp: "勉強する一方で、遊びも大切だ。", romaji: "Benkyou suru ippou de, asobi mo taisetsu da.", en: "While studying is important, playing is also important." }, { jp: "都会は便利な反面、ストレスも多い。", romaji: "Tokai wa benri na hanmen, sutoresu mo ooi.", en: "Cities are convenient, but on the other hand, they are stressful." }] }
    ],
    quiz: [
      { q: "雨が降っている ___ 、傘をささない。", ans: "のに", options: ["のに", "ので", "から", "けど"] },
      { q: "彼は優しい ___ 、厳しいところもある。", ans: "反面", options: ["反面", "に限らず", "ばかりか", "にしたら"] },
      { q: "人口が増える ___ 、食料が不足している。", ans: "一方で", options: ["一方で", "反面", "に比べ", "わりに"] },
      { q: "薬を飲んだ ___ 、熱が下がらない。", ans: "のに", options: ["のに", "から", "ので", "なら"] },
      { q: "一人暮らしは自由な ___ 、寂しい。", ans: "反面", options: ["反面", "によって", "として", "にとって"] },
      { q: "仕事が忙しい ___ 、子供との時間も作っている。", ans: "一方で", options: ["一方で", "反面", "について", "にとって"] },
      { q: "春 ___ 、寒いです。", ans: "なのに", options: ["なのに", "ので", "から", "けど"] },
      { q: "ネットは便利な ___ 、トラブルも起きやすい。", ans: "反面", options: ["反面", "ものなら", "に限り", "どころか"] },
      { q: "物価が上がる ___ 、給料は上がらない。", ans: "一方で", options: ["一方で", "反面", "に沿って", "を除いて"] },
      { q: "好きな ___ 、会いたくない。", ans: "のに", options: ["のに", "から", "ので", "なら"] }
    ]
  },
  {
    chapter: 58,
    level: "N3",
    title: "Limitation & Addition",
    desc: "Kawari / Ni Kuwaete",
    patterns: [
      { id: "58.1", label: "～かわりに / ～にかわって", meaning: "Instead of / In place of", explanation: "Kawari relates to actions/things. Ni kawatte relates to people/representatives.", examples: [{ jp: "コーヒーのかわりに、お茶を飲みます。", romaji: "Koohii no kawari ni, ocha o nomimasu.", en: "Instead of coffee, I drink tea." }, { jp: "父にかわって、私があいさつします。", romaji: "Chichi ni kawatte, watashi ga aisatsu shimasu.", en: "In place of my father, I will give the greeting." }] },
      { id: "58.2", label: "～に加えて / ～はもちろん", explanation: "Ni kuwaete means 'in addition to'. Wa mochiron means 'not to mention' or 'as well as'.", meaning: "In addition / As well as", examples: [{ jp: "雨に加えて、風も強くなってきた。", romaji: "Ame ni kuwaete, kaze mo tsuyoku natte kita.", en: "In addition to rain, the wind has become stronger." }, { jp: "彼女は日本語はもちろん、英語もできる。", romaji: "Kanojo wa nihongo wa mochiron, eigo mo dekiru.", en: "She can speak English, not to mention Japanese." }] }
    ],
    quiz: [
      { q: "旅行に行く ___ 、家で休みます。", ans: "かわりに", options: ["かわりに", "にかわって", "に加えて", "はもとより"] },
      { q: "田中さん ___ 、鈴木さんが出席します。", ans: "にかわって", options: ["にかわって", "かわりに", "に加えて", "はもちろん"] },
      { q: "英語 ___ 、フランス語も勉強している。", ans: "に加えて", options: ["に加えて", "かわりに", "にかわって", "はもとより"] },
      { q: "勉強 ___ 、スポーツも得意だ。", ans: "はもちろん", options: ["はもちろん", "にかわって", "によって", "について"] },
      { q: "タクシーに載る ___ 、歩きましょう。", ans: "かわりに", options: ["かわりに", "に反して", "に際して", "において"] },
      { q: "社長 ___ 、秘書が返事をします。", ans: "にかわって", options: ["にかわって", "に対して", "とともに", "に沿って"] },
      { q: "寒さ ___ 、雪まで降ってきた。", ans: "に加えて", options: ["に加えて", "にとって", "について", "として"] },
      { q: "ひらがな ___ 、漢字も書けます。", ans: "はもちろん", options: ["はもちろん", "代わりに", "に従って", "につれて"] },
      { q: "肉を食べる ___ 、魚を食べなさい。", ans: "かわりに", options: ["かわりに", "に加えて", "はもとより", "に限って"] },
      { q: "基本 ___ 、応用も大切だ。", ans: "はもちろん", options: ["はもちろん", "にかわって", "によって", "に際して"] }
    ]
  },
  {
    chapter: 59,
    level: "N3",
    title: "Degree & Variation",
    desc: "Hodo / Kurai / Yotte",
    patterns: [
      { id: "59.1", label: "～ほど / ～くらい", meaning: "Degree / Extent", explanation: "Describes the degree or extent of something.", examples: [{ jp: "死ぬほど疲れた。", romaji: "Shinu hodo tsukareta.", en: "I'm tired enough to die." }, { jp: "飽きるくらい食べた。", romaji: "Akiru kurai tabeta.", en: "I ate so much I got tired of it." }] },
      { id: "59.2", label: "～ほど～ない / ～によって", meaning: "Not as much as / Depending on", explanation: "Hodo... nai is for comparison. Yotte shows variation based on something.", examples: [{ jp: "今年は去年ほど暑くない。", romaji: "Kotoshi wa kyonen hodo atsukunai.", en: "This year isn't as hot as last year." }, { jp: "人によって考え方が違う。", romaji: "Hito ni yotte kangaekata ga chigau.", en: "Thinking differs depending on the person." }] }
    ],
    quiz: [
      { q: "泣きたい ___ 嬉しい。", ans: "ほど", options: ["ほど", "ばかり", "から", "まで"] },
      { q: "日本は私の国 ___ 暑くない。", ans: "ほど", options: ["ほど", "くらい", "より", "から"] },
      { q: "国 ___ 文化が違う。", ans: "によって", options: ["によって", "として", "にとって", "について"] },
      { q: "山 ___ 高いビルだ。", ans: "ほど", options: ["ほど", "くらい", "どころか", "ばかりだ"] },
      { q: "今日は昨日 ___ 寒くない。", ans: "ほど", options: ["ほど", "より", "から", "まで"] },
      { q: "場合 ___ 中止します。", ans: "によって", options: ["によって", "として", "にとって", "について"] },
      { q: "嫌になる ___ 待たされた。", ans: "くらい", options: ["くらい", "だけに", "わりに", "に際して"] },
      { q: "私 ___ 背が高くない。", ans: "ほど", options: ["ほど", "より", "から", "まで"] },
      { q: "季節 ___ 景色が変わる。", ans: "によって", options: ["によって", "として", "にとって", "についても"] },
      { q: "死ぬ ___ びっくりした。", ans: "ほど", options: ["ほど", "ばかり", "から", "に"] }
    ]
  },
  {
    chapter: 60,
    level: "N3",
    title: "Comparison & Unexpectedness",
    desc: "Ni Shite wa / Ni Kurabete / Wari ni",
    patterns: [
      { id: "60.1", label: "～にしては / ～わりに（は）", meaning: "For a... / Considering...", explanation: "Used when the result is unexpected given the circumstances.", examples: [{ jp: "初めてにしては上手ですね。", romaji: "Hajimete ni shite wa jouzu desu ne.", en: "You're good at it for a first-timer." }, { jp: "この店は値段のわりに美味しい。", romaji: "Kono mise wa nedan no wari ni oishii.", en: "This shop is delicious considering the price." }] },
      { id: "60.2", label: "～に比べて", meaning: "Compared to", explanation: "A standard way to compare two or more things.", examples: [{ jp: "兄に比べて、弟は内気だ。", romaji: "Ani ni kurabete, otouto wa uchiki da.", en: "The younger brother is shy compared to his older brother." }] }
    ],
    quiz: [
      { q: "子供 ___ よく知っている。", ans: "にしては", options: ["にしては", "わりに", "に比べて", "に際して"] },
      { q: "値段 ___ 質がいい。", ans: "のわりに", options: ["のわりに", "にしては", "に比べて", "によって"] },
      { q: "東京は大阪 ___ 物価が高い。", ans: "に比べて", options: ["に比べて", "にしては", "わりに", "によって"] },
      { q: "4月 ___ 寒いですね。", ans: "にしては", options: ["にしては", "わりに", "に際して", "において"] },
      { q: "彼は年 ___ 若く見える。", ans: "のわりに", options: ["のわりに", "にしては", "に比べて", "によって"] },
      { q: "去年 ___ 雪が多い。", ans: "に比べて", options: ["に比べて", "にしては", "わりに", "によって"] },
      { q: "外国人 ___ 日本語が上手だ。", ans: "にしては", options: ["にしては", "わりに", "に際して", "において"] },
      { q: "走った ___ お腹が空かない。", ans: "わりに", options: ["わりに", "にしては", "に比べて", "によって"] },
      { q: "昨日 ___ 今日は暑い。", ans: "に比べて", options: ["に比べて", "にしては", "わりに", "によって"] },
      { q: "病気 ___ 元気そうですね。", ans: "にしては", options: ["にしては", "わりに", "に際して", "において"] }
    ]
  },
  {
    chapter: 61,
    level: "N3",
    title: "Purpose & Effort",
    desc: "Tame / You ni / You ni suru",
    patterns: [
      { id: "61.1", label: "～ために / ～ように", meaning: "In order to / So that", explanation: "Tame ni is for conscious purpose. You ni is for goals involving potential/negative verbs.", examples: [{ jp: "家を買うために、貯金しています。", romaji: "Ie o kau tame ni, chokin shite imasu.", en: "I'm saving money in order to buy a house." }, { jp: "忘れないように、メモします。", romaji: "Wasurenai you ni, memo shimasu.", en: "I'll take a memo so that I don't forget." }] },
      { id: "61.2", label: "～ようにする / ～ようになる", meaning: "Make an effort to / Reach a point where", explanation: "Effort or change in lifestyle/ability.", examples: [{ jp: "毎日、水を2リットル飲むようにしている。", romaji: "Mainichi, mizu o niritto-ru nomu you ni shite iru.", en: "I make an effort to drink 2 liters of water every day." }] }
    ],
    quiz: [
      { q: "健康の ___ 野菜を食べる。", ans: "ために", options: ["ために", "ように", "のに", "ので"] },
      { q: "遅れない ___ 急ぎましょう。", ans: "ように", options: ["ように", "ために", "おりに", "ときに"] },
      { q: "甘いものを食べない ___ している。", ans: "ように", options: ["ように", "ために", "ことに", "とおりに"] },
      { q: "留学する ___ お金を貯める。", ans: "ために", options: ["ために", "ように", "ころに", "うちに"] },
      { q: "聞こえる ___ 大きな声で話す。", ans: "ように", options: ["ように", "ために", "とおりに", "ことに"] },
      { q: "野菜を食べる ___ なった。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "試験の ___ 勉強する。", ans: "ために", options: ["ために", "ように", "ので", "から"] },
      { q: "間違えない ___ 気をつける。", ans: "ように", options: ["ように", "ために", "こと", "のと"] },
      { q: "タバコをやめる ___ した。", ans: "ように", options: ["ように", "ために", "ことに", "おりに"] },
      { q: "平和の ___ 祈る。", ans: "ために", options: ["ために", "ように", "おりに", "うちに"] }
    ]
  },
  {
    chapter: 62,
    level: "N3",
    title: "Intention & Attempt",
    desc: "Tsumori / You to suru",
    patterns: [
      { id: "62.1", label: "～つもりだ / ～つもりだった", meaning: "Intend to / Had intended to", explanation: "Expresses a firm intention or a past intention that didn't happen.", examples: [{ jp: "来年、日本へ行くつもりです。", romaji: "Rainen, Nihon e iku tsumori desu.", en: "I intend to go to Japan next year." }, { jp: "行くつもりだったが、雨で行けなかった。", romaji: "Iku tsumori datta ga, ame de ikenakatta.", en: "I had intended to go, but couldn't because of the rain." }] },
      { id: "62.2", label: "～ようとする / ～ようと思っている", meaning: "Try to / About to / Thinking of doing", explanation: "Indicates an attempt or a vague intention.", examples: [{ jp: "寝ようとした時、電話が鳴った。", romaji: "Neyou to shita toki, denwa ga natta.", en: "The phone rang just as I was trying to sleep." }] }
    ],
    quiz: [
      { q: "明日、映画を見に ___ です。", ans: "行くつもり", options: ["行くつもり", "行こうとする", "行くようになる", "行くことにする"] },
      { q: "家を出 ___ とした時、雨が降ってきた。", ans: "よう", options: ["よう", "まい", "そう", "たな"] },
      { q: "留学 ___ と思っている。", ans: "しよう", options: ["しよう", "する", "した", "し"] },
      { q: "買う ___ でしたが、やめました。", ans: "つもり", options: ["つもり", "ために", "ように", "こと"] },
      { q: "食べ ___ とした時、虫がいた。", ans: "よう", options: ["よう", "まい", "そう", "だ"] },
      { q: "来年、結婚する ___ だ。", ans: "つもり", options: ["つもり", "みたい", "らしい", "こと"] },
      { q: "話そう ___ としたが、声が出なかった。", ans: "に", options: ["に", "と", "を", "が"] },
      { q: "教える ___ だったが、忘れてしまった。", ans: "つもり", options: ["つもり", "ために", "ように", "こと"] },
      { q: "逃げ ___ としたが、捕まった。", ans: "よう", options: ["よう", "まい", "そう", "だ"] },
      { q: "会社を辞め ___ と思っている。", ans: "よう", options: ["よう", "る", "た", "るの"] }
    ]
  },
  {
    chapter: 63,
    level: "N3",
    title: "Time & Sequence 1",
    desc: "Uchi ni / Shidai / Tabi ni",
    patterns: [
      { id: "63.1", label: "～うちに", meaning: "While / Before... / During", explanation: "Used to show a window of opportunity or a change during a state.", examples: [{ jp: "若いうちに、たくさん勉強しなさい。", romaji: "Wakai uchi ni, takusan benkyou shinasai.", en: "While you're young, study a lot." }, { jp: "アイスを食べているうちに、溶けてしまった。", romaji: "Aisu o tabete iru uchi ni, tokete shimatta.", en: "While I was eating the ice cream, it melted." }] },
      { id: "63.2", label: "～次第 / ～たびに", meaning: "As soon as / Every time", explanation: "Shidai is for formal immediate sequence. Tabi ni emphasizes repetition.", examples: [{ jp: "準備ができ次第、出発します。", romaji: "Junbi ga deki shidai, shuppatsu shimasu.", en: "As soon as we're ready, we'll depart." }, { jp: "この曲を聴くたびに、故郷を思い出す。", romaji: "Kono kyoku o kiku tabi ni, furusato o omoidasu.", en: "Every time I listen to this song, I remember my hometown." }] }
    ],
    quiz: [
      { q: "忘れない ___ メモします。", ans: "うちに", options: ["うちに", "次第", "たびに", "ばかりに"] },
      { q: "分かり ___ 連絡します。", ans: "次第", options: ["次第", "うちに", "たびに", "まえに"] },
      { q: "会う ___ 綺麗になりますね。", ans: "たびに", options: ["たびに", "うちに", "次第", "のと"] },
      { q: "雨が降ら ___ 帰りましょう。", ans: "ないうちに", options: ["ないうちに", "ない次第", "ないたびに", "ないまえに"] },
      { q: "駅に着き ___ 電話してください。", ans: "次第", options: ["次第", "うちに", "まえに", "うちに"] },
      { q: "旅行に行く ___ お土産を買います。", ans: "たびに", options: ["たびに", "うちに", "ときに", "わけで"] },
      { q: "暗くなら ___ 帰りましょう。", ans: "ないうちに", options: ["ないうちに", "てから", "まえに", "までに"] },
      { q: "完成 ___ お送りします。", ans: "し次第", options: ["し次第", "しはじめに", "しながら", "しつつ"] },
      { q: "買い物に行く ___ 無駄遣いしてしまう。", ans: "たびに", options: ["たびに", "最中に", "うちに", "ながら"] },
      { q: "温かい ___ 食べてください。", ans: "うちに", options: ["うちに", "次第", "ながら", "ときに"] }
    ]
  },
  {
    chapter: 64,
    level: "N3",
    title: "Time & Sequence 2",
    desc: "Tokoro datta / Tsuide ni",
    patterns: [
      { id: "64.1", label: "～ところだった / ～ついでに", meaning: "Was about to / While doing X, also Y", explanation: "Tokoro datta shows a near miss. Tsuide ni indicates performing a second action along with the primary one.", examples: [{ jp: "もう少しで遅刻するところだった。", romaji: "Mou sukoshi de chikoku suru tokoro datta.", en: "I was almost late." }, { jp: "散歩のついでに、手紙を出してきた。", romaji: "Sanpo no tsuide ni, tegami o dashite kita.", en: "While going for a walk, I also posted a letter." }] },
      { id: "64.2", label: "～最中に / ～途中で", meaning: "In the middle of / On the way", explanation: "Emphasizes that something unexpected happened during an action.", examples: [{ jp: "会議の最中に、お腹が鳴った。", romaji: "Kaigi no saichuu ni, onaka ga natta.", en: "In the middle of the meeting, my stomach growled." }] }
    ],
    quiz: [
      { q: "危うく転ぶ ___ 。", ans: "ところだった", options: ["ところだった", "ついでに", "ばかりだ", "ことだ"] },
      { q: "買い物の ___ 、友達に会った。", ans: "ついでに", options: ["ついでに", "最中に", "ときに", "うちに"] },
      { q: "テストの ___ 、鼻血が出た。", ans: "最中に", options: ["最中に", "うちに", "ために", "ばかりに"] },
      { q: "もう少しで忘れる ___ 。", ans: "ところだった", options: ["ところだった", "ばかりだ", "つもりだ", "ことだ"] },
      { q: "コンビニに行く ___ 、アイスも買ってきて。", ans: "ついでに", options: ["ついでに", "最中に", "ながら", "おりに"] },
      { q: "食事の ___ 、誰か来た。", ans: "最中に", options: ["最中に", "まえに", "うちに", "とおりに"] },
      { q: "もう少しで騙される ___ 。", ans: "ところだった", options: ["ところだった", "つもりだった", "ばかりだ", "わけだ"] },
      { q: "仕事の ___ 、実家に寄った。", ans: "ついでに", options: ["ついでに", "最中に", "ながら", "ときに"] },
      { q: "電話の ___ 、ドアベルが鳴った。", ans: "最中に", options: ["最中に", "うちに", "のと", "から"] },
      { q: "あと少しで合格する ___ 。", ans: "ところだった", options: ["ところだった", "わけだ", "はずだ", "ことだ"] }
    ]
  },
  {
    chapter: 65,
    level: "N3",
    title: "Giving & Receiving",
    desc: "Ageru / Morau / Kureru",
    patterns: [
      { id: "65.1", label: "～てあげる / ～てもらう / ～てくれる", meaning: "Giving/Receiving actions", explanation: "Advanced usage involving varying levels of politeness and social direction.", examples: [{ jp: "母にプレゼントを買ってあげました。", romaji: "Haha ni purezento o katte agemashita.", en: "I bought a present for my mother." }, { jp: "先生に教えていただきました。", romaji: "Sensei ni oshiete itadakimashita.", en: "I received the favor of my teacher teaching me (humble)." }] },
      { id: "65.2", label: "～てやる / ～てさしあげる / ～てくださる", meaning: "Social Hierarchy", explanation: "Specific verbs for lower, higher, and equal social status.", examples: [{ jp: "犬にエサをやってください。", romaji: "Inu ni esa o yatte kudasai.", en: "Please give food to the dog." }] }
    ],
    quiz: [
      { q: "友達が宿題を手伝って ___ ました。", ans: "くれ", options: ["くれ", "あげ", "もらい", "やり"] },
      { q: "私は先生に本を貸して ___ ました。", ans: "いただき", options: ["いただき", "あげ", "やり", "さしあげ"] },
      { q: "弟にお菓子を買って ___ ました。", ans: "あげ", options: ["あげ", "いただき", "くださり", "さしあげ"] },
      { q: "誰かが財布を拾って ___ ました。", ans: "くれ", options: ["くれ", "もらい", "あげ", "さしあげ"] },
      { q: "木に水を ___ ください。", ans: "やって", options: ["やって", "くださって", "いただいて", "差し上げて"] },
      { q: "知らない人が道を教えて ___ ました。", ans: "くれ", options: ["くれ", "あげ", "もらい", "やり"] },
      { q: "私は部長にネクタイを貸して ___ ました。", ans: "さしあげ", options: ["さしあげ", "やり", "もらい", "くれ"] },
      { q: "田中さんに傘を貸して ___ ました。", ans: "もらい", options: ["もらい", "くれ", "やり", "くださり"] },
      { q: "花に水を ___ ました。", ans: "やり", options: ["やり", "あげ", "さしあげ", "くださり"] },
      { q: "先生が私の名前を呼んで ___ ました。", ans: "ください", options: ["ください", "さしあげ", "いただき", "やり"] }
    ]
  },
  {
    chapter: 66,
    level: "N3",
    title: "Passive & Causative",
    desc: "Rareru / Saseru / Saserareru",
    patterns: [
      { id: "66.1", label: "受身 (Passive) / 使役 (Causative)", meaning: "Passive / Causative", explanation: "Passive (rareru) shows receiving an action. Causative (saseru) shows making/letting someone do something.", examples: [{ jp: "泥棒に財布を盗まれた。", romaji: "Dorobou ni saifu o nusumareta.", en: "My wallet was stolen by a thief." }, { jp: "母に勉強させられた。", romaji: "Haha ni benkyou saserareta.", en: "I was made to study by my mother (Causative-Passive)." }] }
    ],
    quiz: [
      { q: "雨に ___ ました。", ans: "降られ", options: ["降られ", "降らせ", "降らされ", "降ら"] },
      { q: "先生に ___ ました。", ans: "褒められ", options: ["褒められ", "褒めさせ", "褒めさせられ", "褒め"] },
      { q: "子供に野菜を ___ ます。", ans: "食べさせ", options: ["食べさせ", "食べられ", "食べさせられ", "食べ"] },
      { q: "友達に秘密を ___ ました。", ans: "言われ", options: ["言われ", "言わせ", "言わせられ", "言い"] },
      { q: "母に買い物を ___ ました。", ans: "頼まれ", options: ["頼まれ", "頼ませ", "頼ませられ", "頼み"] },
      { q: "誰かに背中を ___ ました。", ans: "押され", options: ["押され", "押させ", "押させられ", "押し"] },
      { q: "先生は生徒を ___ ます。", ans: "走らせ", options: ["走らせ", "走られ", "走らせられ", "走り"] },
      { q: "弟におもちゃを ___ ました。", ans: "壊され", options: ["壊され", "壊させ", "壊させられ", "壊し"] },
      { q: "部長に酒を ___ ました。", ans: "飲まされ", options: ["飲まされ", "飲まれ", "飲ませ", "飲まされ"] },
      { q: "隣の人に夜中まで ___ ました。", ans: "騒がれ", options: ["騒がれ", "騒がせ", "騒がせられ", "騒ぎ"] }
    ]
  },
  {
    chapter: 67,
    level: "N3",
    title: "Appearance & Guess 1",
    desc: "Sou / You / Mitai",
    patterns: [
      { id: "67.1", label: "～そうだ (Appearance)", meaning: "Looks like (visual)", explanation: "Based on what you see right now.", examples: [{ jp: "美味しそうなケーキですね。", romaji: "Oishisou na ke-ki desu ne.", en: "That cake looks delicious." }] },
      { id: "67.2", label: "～ようだ / ～みたいだ", meaning: "It seems / Like", explanation: "Based on sensory evidence or comparison.", examples: [{ jp: "雨が降っているようです。", romaji: "Ame ga futte iru you desu.", en: "It seems to be raining." }] }
    ],
    quiz: [
      { q: "忙し ___ ですね。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "誰もいない ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "この店は美味しい ___ ですよ。", ans: "みたい", options: ["みたい", "そう", "らしい", "よう"] },
      { q: "雨が降り ___ です。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "田中さんは来ない ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "泥棒 ___ 格好です。", ans: "みたい", options: ["みたい", "よう", "そう", "らしい"] },
      { q: "気分が悪い ___ ですね。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "荷物が落ち ___ ですよ。", ans: "そう", options: ["そう", "みたい", "らしい", "よう"] },
      { q: "故障した ___ です。", ans: "よう", options: ["よう", "そう", "らしい", "みたい"] },
      { q: "よさ ___ ですね。", ans: "そう", options: ["そう", "すぎ", "みたい", "よう"] }
    ]
  },
  {
    chapter: 68,
    level: "N3",
    title: "Appearance & Guess 2",
    desc: "Rashii / Ppoi",
    patterns: [
      { id: "68.1", label: "～らしい", meaning: "Typical of / I heard that", explanation: "Based on character or hearsay.", examples: [{ jp: "今日は春らしい暖かい日だ。", romaji: "Kyou wa haru rashii atatakai hi da.", en: "Today is a warm day, typical of spring." }] },
      { id: "68.2", label: "～っぽい", meaning: "Ish / Like (casual)", explanation: "Describes a quality or tendency, often negative.", examples: [{ jp: "この料理は油っぽい。", romaji: "Kono ryouri wa aburappoi.", en: "This food is oily." }, { jp: "彼は子供っぽい。", romaji: "Kare wa kodomoppoi.", en: "He is childish." }] }
    ],
    quiz: [
      { q: "明日は雨 ___ です。", ans: "らしい", options: ["らしい", "っぽい", "そう", "だ"] },
      { q: "この服は安 ___ 見える。", ans: "っぽく", options: ["っぽく", "らしく", "そうに", "ように"] },
      { q: "田中さんは日本人 ___ です。", ans: "らしい", options: ["らしい", "っぽい", "そう", "だ"] },
      { q: "忘れ ___ 性格だ。", ans: "っぽい", options: ["っぽい", "らしい", "そうな", "ような"] },
      { q: "女 ___ 格好だ。", ans: "らしい", options: ["らしい", "っぽい", "そうに", "ように"] },
      { q: "水 ___ スープだ。", ans: "っぽい", options: ["っぽい", "らしい", "そうな", "ような"] },
      { q: "大学生 ___ 大学生だ。", ans: "らしい", options: ["らしい", "っぽい", "そうに", "ように"] },
      { q: "熱 ___ ですね。", ans: "っぽい", options: ["っぽい", "らしい", "そうな", "ような"] },
      { q: "冬 ___ 寒さだ。", ans: "らしい", options: ["らしい", "っぽい", "そうな", "ような"] },
      { q: "白 ___ 服を着ている。", ans: "っぽい", options: ["っぽい", "らしい", "そうな", "ような"] }
    ]
  },
  {
    chapter: 69,
    level: "N3",
    title: "Ability & Tendency",
    desc: "Yasui / Nikui / Gachi",
    patterns: [
      { id: "69.1", label: "～やすい / ～にくい", meaning: "Easy to / Hard to", explanation: "Describes physical or objective difficulty.", examples: [{ jp: "このペンは書きやすい。", romaji: "Kono pen wa kakiyasui.", en: "This pen is easy to write with." }] },
      { id: "69.2", label: "～がち / ～気味", meaning: "Tendency / A feeling of", explanation: "Gachi describes negative repeated actions. Gimi describes a slight state.", examples: [{ jp: "最近、遅れがちだ。", romaji: "Saikin, okuregachi da.", en: "Recently, I tend to be late." }, { jp: "風邪気味で、喉が痛い。", romaji: "Kazegimi de, nodo ga itai.", en: "I have a touch of a cold, and my throat hurts." }] }
    ],
    quiz: [
      { q: "この本は読み ___ 。", ans: "やすい", options: ["やすい", "にくい", "がち", "気味"] },
      { q: "最近、曇り ___ の日が多い。", ans: "がち", options: ["がち", "ぎみ", "やすい", "にくい"] },
      { q: "緊張 ___ で、手が震える。", ans: "ぎみ", options: ["ぎみ", "がち", "やすい", "にくい"] },
      { q: "ここは滑り ___ から気をつけて。", ans: "やすい", options: ["やすい", "にくい", "がち", "きみ"] },
      { q: "この薬は飲み ___ 。", ans: "にくい", options: ["にくい", "やすい", "がち", "きみ"] },
      { q: "休み ___ な生活をやめよう。", ans: "がち", options: ["がち", "ぎみ", "やすい", "にくい"] },
      { q: "太り ___ だからダイエットしよう。", ans: "ぎみ", options: ["ぎみ", "がち", "やすい", "にくい"] },
      { q: "使い ___ 道具だ。", ans: "やすい", options: ["やすい", "にくい", "がち", "きみ"] },
      { q: "忘れ ___ なのでメモする。", ans: "がち", options: ["がち", "きみ", "やすい", "にくい"] },
      { q: "疲れ ___ だから休もう。", ans: "ぎみ", options: ["ぎみ", "がち", "やすい", "にくい"] }
    ]
  },
  {
    chapter: 70,
    level: "N3",
    title: "Formal Connections 1",
    desc: "Ni Kanshite / Ni Taishite",
    patterns: [
      { id: "70.1", label: "～に関して / ～について", meaning: "Regarding / About", explanation: "Kanshite is more formal than Tsuite.", examples: [{ jp: "環境問題に関して、調査する。", romaji: "Kankyou mondai ni kanshite, chousa suru.", en: "Investigate regarding environmental issues." }] },
      { id: "70.2", label: "～に対して", meaning: "Towards / Against / In contrast to", explanation: "Shows a target or comparative contrast.", examples: [{ jp: "先生に対して、失礼だ。", romaji: "Sensei ni taishite, shitsurei da.", en: "It's rude toward the teacher." }, { jp: "兄が静かなのに対して、弟はうるさい。", romaji: "Ani ga shizuka na no ni taishite, otouto wa urusai.", en: "While the older brother is quiet, the younger brother is noisy." }] }
    ],
    quiz: [
      { q: "日本文化 ___ 興味がある。", ans: "に関して", options: ["に関して", "に反して", "にとって", "によって"] },
      { q: "客 ___ 丁寧な言葉を使う。", ans: "に対して", options: ["に対して", "にとって", "について", "から"] },
      { q: "計画 ___ 意見を言う。", ans: "に関して", options: ["に関して", "に向けて", "に沿って", "に際して"] },
      { q: "都市部 ___ 田舎は不便だ。", ans: "に対して", options: ["に対して", "によって", "にとって", "について"] },
      { q: "ゴミ問題 ___ 考える。", ans: "に関して", options: ["に関して", "に反して", "に当たって", "に従って"] },
      { q: "自分 ___ 厳しい。", ans: "に対して", options: ["に対して", "によって", "にとって", "について"] },
      { q: "将来 ___ 不安がある。", ans: "に関して", options: ["に関して", "に際して", "において", "に従って"] },
      { q: "去年 ___ 今年は雪が多い。", ans: "に対して", options: ["に対して", "によって", "にとって", "について"] },
      { q: "事件 ___ 証言する。", ans: "に関して", options: ["に関して", "にとって", "について", "に向けて"] },
      { q: "女性 ___ 男性の方が背が高い。", ans: "に対して", options: ["に対して", "によって", "にとって", "について"] }
    ]
  },
  {
    chapter: 71,
    level: "N3",
    title: "Formal Connections 2",
    desc: "Tooshite / Watatte / Sotte",
    patterns: [
      { id: "71.1", label: "～を通して / ～を通じて", meaning: "Through / Via", explanation: "Shows a medium or a continuous period.", examples: [{ jp: "友達を通して、知り合った。", romaji: "Tomodachi o tooshite, shiriatta.", en: "We met through a friend." }] },
      { id: "71.2", label: "～にわたって / ～に沿って", meaning: "Over a period / Along / In accordance with", explanation: "Watatte shows range. Sotte shows following a path/plan.", examples: [{ jp: "10キロにわたって、渋滞している。", romaji: "Juukkiro ni watatte, juutai shite iru.", en: "The traffic jam extends over 10 kilometers." }, { jp: "計画に沿って、進める。", romaji: "Keikaku ni sotte, susumeru.", en: "Proceed according to the plan." }] }
    ],
    quiz: [
      { q: "テレビ ___ ニュースを知る。", ans: "を通して", options: ["を通して", "にわたって", "に沿って", "について"] },
      { q: "広範囲 ___ 被害が出た。", ans: "にわたって", options: ["にわたって", "を通して", "に沿って", "にとって"] },
      { q: "川 ___ 歩く。", ans: "に沿って", options: ["に沿って", "にわたって", "を通して", "に対して"] },
      { q: "1年 ___ 勉強した。", ans: "を通して", options: ["を通して", "にとって", "について", "に対して"] },
      { q: "3日間 ___ 会議が行われた。", ans: "にわたって", options: ["にわたって", "を通して", "に沿って", "に向けて"] },
      { q: "マニュアル ___ 操作する。", ans: "に沿って", options: ["に沿って", "にわたって", "を通して", "に対して"] },
      { q: "読書 ___ 知識を得る。", ans: "を通して", options: ["を通して", "にとらわれず", "にとって", "について"] },
      { q: "数十キロ ___ 渋滞だ。", ans: "にわたって", options: ["にわたって", "に際して", "において", "に関して"] },
      { q: "線路 ___ 家が並んでいる。", ans: "に沿って", options: ["に沿って", "に反して", "にわたって", "に向けて"] },
      { q: "実体験 ___ 学ぶ。", ans: "を通して", options: ["を通して", "に対して", "にとって", "について"] }
    ]
  },
  {
    chapter: 72,
    level: "N3",
    title: "Commands & Advice 1",
    desc: "Beki / Koto da",
    patterns: [
      { id: "72.1", label: "～べき / ～べきではない", meaning: "Should / Shouldn't", explanation: "Expresses a strong moral or social obligation.", examples: [{ jp: "約束は守るべきだ。", romaji: "Yakusoku wa mamoru beki da.", en: "You should keep your promises." }] },
      { id: "72.2", label: "～ことだ", meaning: "Advice / You should", explanation: "Used to give strong advice or suggestions.", examples: [{ jp: "強くなりたければ、練習することだ。", romaji: "Tsuyoku naritakereba, renshuu suru koto da.", en: "If you want to get strong, you should practice." }] }
    ],
    quiz: [
      { q: "お年寄りには親切に ___ 。", ans: "するべきだ", options: ["するべきだ", "することだ", "するわけだ", "するものだ"] },
      { q: "成功したければ、努力 ___ 。", ans: "することだ", options: ["することだ", "するべきだ", "するわけだ", "するものだ"] },
      { q: "嘘をつく ___ ではない。", ans: "べき", options: ["べき", "こと", "わけ", "もの"] },
      { q: "上手になりたければ、毎日 ___ 。", ans: "練習することだ", options: ["練習することだ", "練習するべきだ", "練習するわけだ", "練習するものだ"] },
      { q: "他人の悪口を言う ___ ではない。", ans: "べき", options: ["べき", "こと", "わけ", "もの"] },
      { q: "健康になりたければ、早く ___ 。", ans: "寝ることだ", options: ["寝ることだ", "寝るべきだ", "寝るわけだ", "寝るものだ"] },
      { q: "もっと勉強 ___ だった。", ans: "するべき", options: ["するべき", "すること", "するわけ", "するもの"] },
      { q: "痩せたければ、運動 ___ 。", ans: "することだ", options: ["することだ", "するべきだ", "するわけだ", "するものだ"] },
      { q: "親を大切に ___ 。", ans: "するべきだ", options: ["するべきだ", "することだ", "するわけだ", "するものだ"] },
      { q: "合格したければ、一生懸命 ___ 。", ans: "頑張ることだ", options: ["頑張ることだ", "頑張るべきだ", "頑張るわけだ", "頑張るものだ"] }
    ]
  },
  {
    chapter: 73,
    level: "N3",
    title: "Commands & Advice 2",
    desc: "Te Hoshii / Wake ni wa Ikanai",
    patterns: [
      { id: "73.1", label: "～てほしい / ～てもらいたい", meaning: "Want someone to do", explanation: "Expresses a desire for someone else to perform an action.", examples: [{ jp: "あなたに日本語を教えてほしい。", romaji: "Anata ni nihongo o oshiete hoshii.", en: "I want you to teach me Japanese." }] },
      { id: "73.2", label: "～わけにはいかない", meaning: "Must not / Cannot (moral)", explanation: "Cannot do something due to social or moral reasons.", examples: [{ jp: "大切な会議だから、休むわけにはいかない。", romaji: "Taisetsu na kaigi dakara, yasumu wake ni wa ikanai.", en: "It's an important meeting, so I cannot miss it." }] },
      { id: "73.3", label: "～ざるを得ない", meaning: "Have no choice but to", explanation: "Forced to do something against one's will (formal).", examples: [{ jp: "雨なので、中止にせざるを得ない。", romaji: "Ame na no de, chuushi ni sezaru o enai.", en: "Since it's raining, we have no choice but to cancel." }] }
    ],
    quiz: [
      { q: "彼に真実を ___ 。", ans: "話してほしい", options: ["話してほしい", "話したい", "話すつもりだ", "話すことにした"] },
      { q: "試験中だから、しゃべる ___ 。", ans: "わけにはいかない", options: ["わけにはいかない", "わけではない", "はずがない", "べきではない"] },
      { q: "嫌だが、 ___ 。", ans: "やらざるを得ない", options: ["やらざるを得ない", "やらないわけにはいかない", "やるべきではない", "やるはずがない"] },
      { q: "先生にここに来て ___ 。", ans: "もらいたい", options: ["もらいたい", "あげたい", "やりたい", "さしあげたい"] },
      { q: "親切にされたら、お礼を言わない ___ 。", ans: "わけにはいかない", options: ["わけにはいかない", "わけではない", "はずがいない", "べきではない"] },
      { q: "台風で中止 ___ 。", ans: "にせざるを得ない", options: ["にせざるを得ない", "にするべきではない", "にしないわけにはいかない", "にするはずがない"] },
      { q: "もっと優しく ___ 。", ans: "してほしい", options: ["してほしい", "したほうがいい", "しなければならない", "しなくてもいい"] },
      { q: "病気の母を置いて、行く ___ 。", ans: "わけにはいかない", options: ["わけにはいかない", "わけではない", "はずがない", "べきではない"] },
      { q: "お金がないから、 ___ 。", ans: "諦めざるを得ない", options: ["諦めざるを得ない", "諦めないわけにはいかない", "諦めるべきだ", "諦めるはずがない"] },
      { q: "明日、会いに ___ 。", ans: "来てほしい", options: ["来てほしい", "来るつもりだ", "来ることにした", "来ればいい"] }
    ]
  },
  {
    chapter: 74,
    level: "N3",
    title: "Emotion & Extent",
    desc: "Te Tamaranai / Ni Koshita koto wa nai",
    patterns: [
      { id: "74.1", label: "～てたまらない / ～てならない", meaning: "Extremely / Cannot help but", explanation: "Tamaranai is for personal feelings. Naranai is more formal/spontaneous.", examples: [{ jp: "喉が渇いてたまらない。", romaji: "Nodo ga kawaite tamaranai.", en: "I'm extremely thirsty." }, { jp: "残念でなりません。", romaji: "Zannen de narimasen.", en: "It is extremely regrettable." }] },
      { id: "74.2", label: "～に越したことはない", meaning: "It's best to... / Nothing is better than", explanation: "Shows the ideal choice, though others may exist.", examples: [{ jp: "安いに越したことはない。", romaji: "Yasui ni koshita koto wa nai.", en: "It's best if it's cheap." }] }
    ],
    quiz: [
      { q: "会いたくて ___ 。", ans: "たまらない", options: ["たまらない", "ならない", "越したことはない", "わけではない"] },
      { q: "不思議で ___ 。", ans: "なりません", options: ["なりません", "たまらない", "越したことはない", "わけだ"] },
      { q: "準備は早めに ___ 。", ans: "するに越したことはない", options: ["するに越したことはない", "するべきだ", "することだ", "するわけだ"] },
      { q: "お腹が空いて ___ 。", ans: "たまらない", options: ["たまらない", "ならない", "越したことはない", "わけではない"] },
      { q: "将来が不安で ___ 。", ans: "なりません", options: ["なりません", "たまらない", "越したことはない", "わけだ"] },
      { q: "健康 ___ 。", ans: "であるに越したことはない", options: ["であるに越したことはない", "であるべきだ", "であることだ", "であるわけだ"] },
      { q: "眠くて ___ 。", ans: "たまらない", options: ["たまらない", "ならない", "越したことはない", "わけではない"] },
      { q: "残念で ___ 。", ans: "なりません", options: ["なりません", "たまらない", "越したことはない", "わけだ"] },
      { q: "用心 ___ 。", ans: "するに越したことはない", options: ["するに越したことはない", "するべきだ", "することだ", "するわけだ"] },
      { q: "嬉しくて ___ 。", ans: "たまらない", options: ["たまらない", "ならない", "越したことはない", "わけではない"] }
    ]
  },
  {
    chapter: 75,
    level: "N3",
    title: "Fixed Expressions & Nuance",
    desc: "Koto wa... ga / Mono de wa nai",
    patterns: [
      { id: "75.1", label: "～ことは～が", meaning: "It's true that... but", explanation: "Admits a fact but adds a qualifying statement.", examples: [{ jp: "読めることは読めるが、意味がわからない。", romaji: "Yomeru koto wa yomeru ga, imi ga wakaranai.", en: "I can read it, but I don't understand the meaning." }] },
      { id: "75.2", label: "～ものではない / ～というものでもない", meaning: "Shouldn't / It doesn't mean that", explanation: "Mono de wa nai is for social rules/common sense. To iu mono de mo nai is for partial negation of a general idea.", examples: [{ jp: "目上の人にそんなことを言うものではない。", romaji: "Meue no hito ni sonna koto o iu mono de wa nai.", en: "You shouldn't say such things to your superiors." }] }
    ],
    quiz: [
      { q: "行ける ___ 行けるが、時間がかかる。", ans: "ことは", options: ["ことは", "のでは", "とは", "にわ"] },
      { q: "そんなに怒る ___ 。", ans: "ものではない", options: ["ものではない", "というものではない", "わけではない", "はずがない"] },
      { q: "お金があれば幸せだ ___ 。", ans: "というものでもない", options: ["というものでもない", "ものではない", "わけではない", "はずがない"] },
      { q: "美味しい ___ 美味しいが、少し高い。", ans: "ことは", options: ["ことは", "のでは", "とは", "にわ"] },
      { q: "嘘をつく ___ 。", ans: "ものではない", options: ["ものではない", "というものでもない", "わけではない", "はずがない"] },
      { q: "何でも多ければいい ___ 。", ans: "というものでもない", options: ["というものでもない", "ものではない", "わけではない", "はずがない"] },
      { q: "便利な ___ 便利だが、使いにくい。", ans: "ことは", options: ["ことは", "のでは", "とは", "にわ"] },
      { q: "人前で泣く ___ 。", ans: "ものではない", options: ["ものではない", "というものでもない", "わけではない", "はずがない"] },
      { q: "努力すれば必ず成功する ___ 。", ans: "というものでもない", options: ["というものでもない", "ものではない", "わけではない", "はずがない"] },
      { q: "知っている ___ 知っているが、詳しくは知らない。", ans: "ことは", options: ["ことは", "のでは", "とは", "にわ"] }
    ]
  },
  {
    chapter: 76,
    level: "N2",
    title: "Certainty & Judgement",
    desc: "Must be / Definitely / Logic",
    patterns: [
      { id: "76.1", label: "～に違いない", meaning: "Must be / Surely", explanation: "Indicates a high degree of certainty based on evidence.", examples: [{jp: "明日はきっと晴れるに違いない。", romaji: "Ashita wa kitto hareru ni chigai nai.", en: "It must definitely be sunny tomorrow." }] },
      { id: "76.2", label: "～に決まっている", meaning: "Definitely / Obvious", explanation: "Stronger than ni chigai nai, expressing something that is undeniably obvious.", examples: [{jp: "そんなの、嘘に決まっているよ。", romaji: "Sonna no, uso ni kimatte iru yo.", en: "That's definitely a lie." }] },
      { id: "76.3", label: "～はずだ / ～はずがない", meaning: "Should be / Cannot be", explanation: "Hazu da is expectation based on logic. Hazu ga nai is strong logical denial.", examples: [{jp: "彼はもう着いているはずだ。", romaji: "Kare wa mou tsuite iru hazu da.", en: "He should have arrived by now." }, {jp: "真面目な彼が遅刻するはずがない。", romaji: "Majime na kare ga chikoku suru hazu ga nai.", en: "There's no way a serious person like him would be late." }] }
    ],
    quiz: [
      { q: "犯人は彼 ___ 。", ans: "に違いない", options: ["に違いない", "はずだ", "わけだ", "ものだ"] },
      { q: "そんなの無理 ___ 。", ans: "に決まっている", options: ["に決まっている", "に違いない", "わけがない", "べきだ"] },
      { q: "田中さんは昨日、徹夜した ___ 。顔色が悪い。", ans: "はずだ", options: ["はずだ", "に決まっている", "ものだ", "ことだ"] },
      { q: "彼がそんなこと、___ 。", ans: "言うはずがない", options: ["言うはずがない", "言わないべきだ", "言うわけだ", "言いたいものだ"] },
      { q: "一生懸命勉強したんだから、合格する ___ 。", ans: "に違いない", options: ["に違いない", "わけだ", "ことだ", "ものではない"] },
      { q: "日本に10年も住んでいるのだから、日本語が話せない ___ 。", ans: "はずがない", options: ["はずがない", "わけにはいかない", "ものだ", "べきではない"] },
      { q: "これは私の傘 ___ 。名前が書いてある。", ans: "に決まっている", options: ["に決まっている", "にすぎない", "どころではない", "ものか"] },
      { q: "あの雲の様子だと、夕方から雨が降る ___ 。", ans: "はずだ", options: ["はずだ", "に違いない", "に決まっている", "わけだ"] },
      { q: "部長が欠席するなんて、何かあった ___ 。", ans: "に違いない", options: ["に違いない", "ものだ", "わけではない", "ことだ"] },
      { q: "彼が嘘をつく ___ 。正直者で有名なんだ。", ans: "はずがない", options: ["はずがない", "に違いない", "に限らない", "まい"] }
    ]
  },
  {
    chapter: 77,
    level: "N2",
    title: "Cause & Logical Results",
    desc: "Because / Trigger / Relation",
    patterns: [
      { id: "77.1", label: "～ため（に）", meaning: "Because of / Due to (Objective)", explanation: "Indicates a cause-and-effect relationship, usually for objective reasons/results.", examples: [{jp: "大雨のため、電車が遅れています。", romaji: "Oame no tame, densha ga okurete imasu.", en: "Because of heavy rain, the train is delayed." }] },
      { id: "77.2", label: "～ことから", meaning: "From the fact that / Because", explanation: "Explains the reason for a name, a guess, or a result based on facts.", examples: [{jp: "景色が美しいことから、富士山は有名です。", romaji: "Keshiki ga utsukushii koto kara, Fujisan wa yuumei desu.", en: "Mount Fuji is famous because (from the fact that) the scenery is beautiful." }] },
      { id: "77.3", label: "～をきっかけに", meaning: "As a result of / Triggered by", explanation: "Indicates a turning point or a trigger that started something new.", examples: [{jp: "日本のアニメを見たのをきっかけに、日本語を勉強し始めた。", romaji: "Nihon no anime o mita no o kikkake ni, nihongo o benkyou shihajimeta.", en: "Triggered by watching Japanese anime, I started studying Japanese." }] }
    ],
    quiz: [
      { q: "雪の ___ 、高速道路が通行止めになった。", ans: "ため", options: ["ため", "ころから", "際", "うちに"] },
      { q: "窓が割れている ___ 、泥棒が入ったとわかった。", ans: "ことから", options: ["ことから", "ために", "ばかりに", "おかげで"] },
      { q: "大学入学 ___ 、一人暮らしを始めた。", ans: "をきっかけに", options: ["をきっかけに", "に伴って", "につれて", "に沿って"] },
      { q: "不注意の ___ 、大きな事故を起こしてしまった。", ans: "ため", options: ["ため", "反面", "わりに", "ものの"] },
      { q: "声が似ている ___ 、親子だと思われた。", ans: "ことから", options: ["ことから", "を機に", "に際して", "において"] },
      { q: "入院したの ___ 、健康の大切さを知った。", ans: "をきっかけに", options: ["をきっかけに", "ばかりに", "ものなら", "とともに"] },
      { q: "環境破壊の ___ 、多くの動物が絶滅の危機にある。", ans: "ため", options: ["ため", "につれて", "に合わせて", "のみならず"] },
      { q: "地名が「松田」である ___ 、昔ここには松の木が多かったことがわかる。", ans: "ことから", options: ["ことから", "ばかりか", "に限り", "さえ"] },
      { q: "引っ越し ___ 、家具を全部買い換えた。", ans: "をきっかけに", options: ["をきっかけに", "の代わりに", "を問わず", "を除いて"] },
      { q: "準備不足 ___ 、計画は失敗に終わった。", ans: "のため", options: ["のため", "あげく", "末に", "次第"] }
    ]
  },
  {
    chapter: 78,
    level: "N2",
    title: "Conditions & Hypotheticals",
    desc: "If / Unless / Now that",
    patterns: [
      { id: "78.1", label: "～ば～ほど", meaning: "The more... the more", explanation: "Indicates that as one condition increases, another state changes proportionally.", examples: [{jp: "日本語は勉強すればするほど難しくなる。", romaji: "Nihongo wa benkyou sureba suru hodo muzukashiku naru.", en: "The more you study Japanese, the harder it gets." }] },
      { id: "78.2", label: "～ない限り", meaning: "Unless / As long as not", explanation: "States that if a condition is not met, the result will not change.", examples: [{jp: "雨が降らない限り、試合はあります。", romaji: "Ame ga furanai kagiri, shiai wa arimasu.", en: "Unless it rains, there will be a match." }] },
      { id: "78.3", label: "～以上（は）", meaning: "Now that / Since", explanation: "Strong resolve or obligation because a certain fact exists.", examples: [{jp: "やるからには、最後までやり遂げる。", romaji: "Yaru kara ni wa, saigo made yaritogeru.", en: "Since I'm doing it, I'll finish it to the end." }] }
    ],
    quiz: [
      { q: "この本は読めば ___ 面白くなる。", ans: "読むほど", options: ["読むほど", "読んだら", "読むまでに", "読みつつ"] },
      { q: "頑張らない ___ 、成功はあり得ない。", ans: "限り", options: ["限り", "にしても", "以上に", "反面"] },
      { q: "約束した ___ 、守らなければならない。", ans: "以上", options: ["以上", "ものの", "わりに", "際して"] },
      { q: "給料が高ければ ___ いいというものでもない。", ans: "高いほど", options: ["高いほど", "高かったら", "高いとしても", "高さに"] },
      { q: "君が謝らない ___ 、許してあげないよ。", ans: "限り", options: ["限り", "以上に", "に際して", "に伴って"] },
      { q: "日本に住んでいる ___ 、日本のルールに従うべきだ。", ans: "以上は", options: ["以上は", "からには", "ばかりに", "として"] },
      { q: "安ければ ___ 売れるわけではない。", ans: "安いほど", options: ["安いほど", "安くなって", "安さで", "安いために"] },
      { q: "平和でない ___ 、自由な生活は望めない。", ans: "限り", options: ["限り", "を機に", "にわたって", "さえ"] },
      { q: "留学する ___ 、しっかり勉強してきなさい。", ans: "からには", options: ["からには", "ものなら", "ばかりか", "にすぎない"] },
      { q: "早ければ ___ いい。", ans: "早いほど", options: ["早いほど", "早くして", "早くて", "早ければこそ"] }
    ]
  },
  {
    chapter: 79,
    level: "N2",
    title: "Contrast & Opposition",
    desc: "But / Although / On the other hand",
    patterns: [
      { id: "79.1", label: "～一方で", meaning: "On the other hand / At the same time", explanation: "Used to describe two contrasting sides or simultaneous actions.", examples: [{jp: "彼は歌手である一方で、小説家でもある。", romaji: "Kare wa kashu de aru ippou de, shousetsuka demo aru.", en: "While he is a singer, he is also a novelist." }] },
      { id: "79.2", label: "～反面", meaning: "On the other hand (contrary)", explanation: "Expresses dual, opposite natures of the same thing.", examples: [{jp: "都会の生活は便利な反面、忙しすぎて疲れる。", romaji: "Tokai no seikatsu wa benri na hanmen, isogashisugite tsukareru.", en: "City life is convenient, but on the other hand, it's exhausting from being too busy." }] },
      { id: "79.3", label: "～とはいえ", meaning: "Nevertheless / Having said that", explanation: "Acknowledges a fact but introduces an exception or different nuance.", examples: [{jp: "春になったとはいえ、まだ寒い日が続く。", romaji: "Haru ni natta to wa ie, mada samui hi ga tsuzuku.", en: "Even though it's spring, cold days continue." }] }
    ],
    quiz: [
      { q: "インターネットは便利な ___ 、危険も多い。", ans: "反面", options: ["反面", "わりに", "際して", "に伴って"] },
      { q: "合格した ___ 、まだ喜ぶのは早い。", ans: "とはいえ", options: ["とはいえ", "一方だ", "反面", "のみならず"] },
      { q: "景気は回復しつつある ___ 、実生活は苦しいままだ。", ans: "一方で", options: ["一方で", "反面", "ながらも", "にすぎない"] },
      { q: "彼は優しい ___ 、怒ると怖い。", ans: "反面", options: ["反面", "わりに", "ものの", "どころか"] },
      { q: "プロ ___ 、失敗することもある。", ans: "とはいえ", options: ["とはいえ", "にしても", "ながらも", "以上に"] },
      { q: "少子化が進む ___ 、高齢者の数は増えている。", ans: "一方で", options: ["一方で", "末に", "あげく", "次第"] },
      { q: "一人暮らしは自由な ___ 、寂しいこともある。", ans: "反面", options: ["反面", "に限り", "さえ", "こそ"] },
      { q: "分かっている ___ 、実行するのは難しい。", ans: "とはいえ", options: ["とはいえ", "ものなら", "反省しつつ", "反面"] },
      { q: "彼は天才と言われる ___ 、人知れず努力している。", ans: "一方で", options: ["一方で", "ばかりに", "ものの", "わりに"] },
      { q: "解決した ___ 、問題は山積みだ。", ans: "とはいえ", options: ["とはいえ", "としても", "ながらも", "だけに"] }
    ]
  },
  {
    chapter: 80,
    level: "N2",
    title: "Emphasis & Degree",
    desc: "Not only / Far from / Mere",
    patterns: [
      { id: "80.1", label: "～にすぎない", meaning: "Nothing more than / Merely", explanation: "Used to downplay or emphasize that something is just a small amount/low level.", examples: [{jp: "それは単なる噂にすぎない。", romaji: "Sore wa tannaru uwasa ni suginai.", en: "That is merely a rumor." }] },
      { id: "80.2", label: "～どころか", meaning: "Far from / On the contrary", explanation: "Emphasizes that the reality is the opposite or much more extreme than expected.", examples: [{jp: "独身どころか、子供が3人もいますよ。", romaji: "獨身どころか、子供が3人もいますよ。", en: "Far from being single, I have three children!" }] },
      { id: "80.3", label: "～ばかりか～も", meaning: "Not only... but also", explanation: "Emphasizes that something is not limited to one thing, but includes others too.", examples: [{jp: "彼女は綺麗なばかりか、性格もいい。", romaji: "Kanojo wa kirei na bakari ka, seikaku mo ii.", en: "She is not only beautiful but also has a great personality." }] }
    ],
    quiz: [
      { q: "それは単なる言い訳 ___ 。", ans: "にすぎない", options: ["にすぎない", "に違いない", "どころではない", "わけではない"] },
      { q: "涼しい ___ 、寒いくらいだ。", ans: "どころか", options: ["どころか", "ばかりに", "わりに", "ものの"] },
      { q: "漢字 ___ 、ひらがなも書けない。", ans: "ばかりか", options: ["ばかりか", "に限らず", "に加えて", "において"] },
      { q: "私は一介の社員 ___ 。", ans: "にすぎない", options: ["にすぎない", "にしたら", "に先立って", "につき"] },
      { q: "歩く ___ 、立つことさえできない。", ans: "どころか", options: ["どころか", "ばかりか", "に限り", "どころではない"] },
      { q: "彼は英語 ___ 、中国語も堪能だ。", ans: "ばかりか", options: ["ばかりか", "というより", "にしたがって", "とともに"] },
      { q: "合格は夢 ___ 。現実は厳しい。", ans: "にすぎない", options: ["にすぎない", "反面", "に伴って", "に応じて"] },
      { q: "良くなる ___ 、悪化する一方だ。", ans: "どころか", options: ["どころか", "のみならず", "に沿って", "を除いて"] },
      { q: "自分 ___ 、家族にも迷惑をかけた。", ans: "ばかりか", options: ["ばかりか", "に限らず", "を通じて", "を通して"] },
      { q: "これは序の口 ___ 。これからが本番だ。", ans: "にすぎない", options: ["にすぎない", "以上に", "に際して", "からには"] }
    ]
  },
  {
    chapter: 81,
    level: "N2",
    title: "Purpose & Effort",
    desc: "Trying to / Goal / Habit",
    patterns: [
      { id: "81.1", label: "～ようにする", meaning: "Make an effort to / Try to", explanation: "Indicates a conscious effort to establish a habit or perform an action.", examples: [{jp: "毎日、野菜を食べるようにしている。", romaji: "Mainichi, yasai o taberu you ni shite iru.", en: "I make an effort to eat vegetables every day." }] },
      { id: "81.2", label: "～ようになる", meaning: "Come to / Reach the point where", explanation: "Indicates a change in ability or situation over time.", examples: [{jp: "練習して、ピアノが弾けるようになった。", romaji: "Renshuu shite, piano ga hikeru you ni natta.", en: "After practicing, I reached the point where I can play the piano." }] },
      { id: "81.3", label: "～ことにする / ～ことになる", meaning: "Decide to / It has been decided", explanation: "Koto ni suru is personal decision. Koto ni naru is decision made by others/circumstances.", examples: [{jp: "今日から日記をつけることにした。", romaji: "Kyou kara nikki o tsukeru koto ni shita.", en: "I decided to start keeping a diary from today." }, {jp: "来月、転勤することになった。", romaji: "Raigetsu, tenkin suru koto ni natta.", en: "It has been decided that I will be transferred next month." }] }
    ],
    quiz: [
      { q: "健康のために、毎日歩く ___ 。", ans: "ようにしている", options: ["ようにしている", "ことになる", "ことにする", "一方だ"] },
      { q: "日本語で自分の意見を言える ___ 。", ans: "ようになった", options: ["ようになった", "ようにした", "ことにした", "ばかりだ"] },
      { q: "タバコを ___ ことにした。", ans: "やめる", options: ["やめる", "やめた", "やめない", "やめて"] },
      { q: "急な用事で、実家へ ___ ことになった。", ans: "帰る", options: ["帰る", "帰った", "帰りたい", "帰るべき"] },
      { q: "忘れない ___ 、メモしておきます。", ans: "ように", options: ["ように", "ために", "ことに", "次第"] },
      { q: "最近、やっと朝5時に起きられる ___ 。", ans: "ようになった", options: ["ようになった", "ようにした", "ことになった", "ばかりだ"] },
      { q: "自分を信じて ___ ことにした。", ans: "頑張る", options: ["頑張る", "頑張った", "頑張らずに", "頑張るほど"] },
      { q: "来週から新しいプロジェクトが ___ ことになった。", ans: "始まる", options: ["始まる", "始まった", "始めて", "始まろう"] },
      { q: "甘いものは食べない ___ している。", ans: "ように", options: ["ように", "ことに", "ために", "次第"] },
      { q: "引っ越し ___ ことになったので、挨拶に行く。", ans: "する", options: ["する", "した", "したい", "しよう"] }
    ]
  },
  {
    chapter: 82,
    level: "N2",
    title: "Time & Sequence",
    desc: "While / As soon as / Period",
    patterns: [
      { id: "82.1", label: "～うちに", meaning: "While / Before", explanation: "Doing something before a state changes.", examples: [{jp: "若いうちに、たくさん経験をしたほうがいい。", romaji: "Wakai uchi ni, takusan keiken o shita hou ga ii.", en: "You should gain many experiences while you are young." }] },
      { id: "82.2", label: "～次第", meaning: "As soon as", explanation: "Doing something immediately after another action is finished (formal).", examples: [{jp: "準備ができ次第、出発します。", romaji: "Junbi ga deki shidai, shuppatsu shimasu.", en: "As soon as preparations are ready, we will depart." }] },
      { id: "82.3", label: "～にわたって", meaning: "Over a period / Throughout", explanation: "Indicates that something covers a whole span of time or space.", examples: [{jp: "3日間にわたって、祭りが開催された。", romaji: "Mikkakan ni watatte, matsuri ga kaisai sareta.", en: "The festival was held over a period of three days." }] }
    ],
    quiz: [
      { q: "忘れない ___ 、メモしましょう。", ans: "うちに", options: ["うちに", "次第", "にわたって", "たびに"] },
      { q: "駅に到着 ___ 、電話してください。", ans: "し次第", options: ["し次第", "してから", "するうちに", "たびに"] },
      { q: "会議は5時間 ___ 行われた。", ans: "にわたって", options: ["にわたって", "をきっかけに", "次第", "うちに"] },
      { q: "暗くならない ___ 、帰りましょう。", ans: "うちに", options: ["うちに", "からには", "限り", "以上に"] },
      { q: "結果がわかり ___ 、お知らせします。", ans: "次第", options: ["次第", "までに", "ために", "おりに"] },
      { q: "関東地方全域 ___ 、大雨が降った。", ans: "にわたって", options: ["にわたって", "に限らず", "を通じて", "を通して"] },
      { q: "アイスが溶けない ___ 、食べてください。", ans: "うちに", options: ["うちに", "ばかりに", "ながらも", "反面"] },
      { q: "準備が整い ___ 、始めます。", ans: "次第", options: ["次第", "次第では", "末に", "あげく"] },
      { q: "長年に ___ 研究の結果、ついに成功した。", ans: "わたる", options: ["わたる", "わたった", "わたって", "わたるほど"] },
      { q: "元気な ___ 、一度日本へ行きたい。", ans: "うちに", options: ["うちに", "からには", "際して", "際"] }
    ]
  },
  {
    chapter: 83,
    level: "N2",
    title: "Passive, Causative & Formal",
    desc: "Respect / Responsibility / Suffering",
    patterns: [
      { id: "83.1", label: "Advanced Passive", meaning: "Suffering / Public fact", explanation: "Used to show annoyance (suffering passive) or to state public facts in a formal way.", examples: [{jp: "雨に降られて、濡れてしまった。", romaji: "Ame ni furarete, nurete shimatta.", en: "I got rained on and got wet (annoyance)." }, {jp: "この寺は500年前に建てられました。", romaji: "Kono tera wa gohyakunen mae ni tateraremashita.", en: "This temple was built 500 years ago (fact)." }] },
      { id: "83.2", label: "～させていただく", meaning: "Humble permission", explanation: "Very polite way to say one is doing something with someone's permission.", examples: [{jp: "自己紹介させていただきます。", romaji: "Jikoshoukai sasete itadakimasu.", en: "Allow me to introduce myself." }] },
      { id: "83.3", label: "～される", meaning: "Formal writing passive", explanation: "Often used in reports or news to state actions without a specific subject.", examples: [{jp: "新しい法案が可決されました。", romaji: "Atarashii houan ga kaketsu saremashita.", en: "The new bill was passed." }] }
    ],
    quiz: [
      { q: "昨日の夜、隣の赤ちゃんに ___ 、眠れなかった。", ans: "泣かれて", options: ["泣かれて", "泣かせて", "泣いて", "泣きたい"] },
      { q: "失礼ですが、先に 帰らせて ___ ます。", ans: "いただき", options: ["いただき", "ください", "さしあげ", "やり"] },
      { q: "この本は、世界中で ___ います。", ans: "読まれて", options: ["読まれて", "読ませて", "読みつつ", "読める"] },
      { q: "泥棒に 財布を ___ 。", ans: "盗まれた", options: ["盗まれた", "盗ませた", "盗んだ", "盗まれさせた"] },
      { q: "今日は 私に 払わせて ___ ください。", ans: "ください", options: ["ください", "いただき", "さしあげ", "もらって"] },
      { q: "会議は 明日 ___ ことになった。", ans: "開かれる", options: ["開かれる", "開かせる", "開く", "開こう"] },
      { q: "犬に 手を ___ 。", ans: "噛まれた", options: ["噛まれた", "噛ませた", "噛んだ", "噛みつつ"] },
      { q: "質問 ___ いただきます。", ans: "させて", options: ["させて", "されて", "して", "しようと"] },
      { q: "その 意見は 多くの人に ___ います。", ans: "支持されて", options: ["支持されて", "支持させて", "支持して", "支持しつつ"] },
      { q: "父に 日記を ___ 。", ans: "読まれた", options: ["読まれた", "読ませた", "読んだ", "読める"] }
    ]
  },
  {
    chapter: 84,
    level: "N2",
    title: "Appearance & Hearsay",
    desc: "Seems like / According to / Rumor",
    patterns: [
      { id: "84.1", label: "～とのことだ", meaning: "I hear that / It is said that", explanation: "Formal way to report information from another source.", examples: [{jp: "明日は雨とのことだ。", romaji: "Ashita wa ame to no koto da.", en: "I hear that it will rain tomorrow." }] },
      { id: "84.2", label: "～によると / ～によれば", meaning: "According to", explanation: "Indicates the source of information.", examples: [{jp: "天気予報によると、来週は暑くなるそうだ。", romaji: "Tenki yohou ni yoru to, raishuu wa atsuku naru sou da.", en: "According to the weather forecast, it will be hot next week." }] },
      { id: "84.3", label: "～らしい", meaning: "Rumor / Typicality", explanation: "Indicates a guess based on what was heard or seen, or that something is very 'typical' of its kind.", examples: [{jp: "彼はもう帰ったらしい。", romaji: "Kare wa mou kaetta rashii.", en: "He seems to have already gone home (based on info)." }, {jp: "今日は春らしい天気だ。", romaji: "Kyou wa haru rashii tenki da.", en: "Today is a typically spring-like day." }] }
    ],
    quiz: [
      { q: "ニュース ___ 、事故があったそうだ。", ans: "によると", options: ["によると", "を皮切りに", "を通して", "を通じて"] },
      { q: "田中さんは欠席 ___ 。", ans: "とのことだ", options: ["とのことだ", "ということだ", "わけだ", "はずだ"] },
      { q: "あそこのレストランは美味しい ___ 。", ans: "らしい", options: ["らしい", "みたい", "よう", "そう"] },
      { q: "手紙 ___ 、家族はみんな元気だそうだ。", ans: "によれば", options: ["によれば", "に際して", "に応じて", "に伴って"] },
      { q: "工事は来月終わる ___ 。", ans: "とのことだ", options: ["とのことだ", "ばかりだ", "ところだ", "次第だ"] },
      { q: "彼はプロの選手 ___ 素晴らしいプレーをした。", ans: "らしい", options: ["らしい", "ような", "みたいな", "そうな"] },
      { q: "噂 ___ 、二人は結婚するそうだ。", ans: "によると", options: ["によると", "を問わず", "を除いて", "に加えて"] },
      { q: "明日は台風が来る ___ 。", ans: "とのことだ", options: ["とのことだ", "次第だ", "ばかりだ", "末だ"] },
      { q: "あの雲の様子は雨が降る ___ だ。", ans: "よう", options: ["よう", "そう", "らしい", "とのこと"] },
      { q: "予報 ___ 、午後は晴れるらしい。", ans: "によると", options: ["によると", "に亘って", "に即して", "に反して"] }
    ]
  },
  {
    chapter: 85,
    level: "N2",
    title: "Tendency, Habit & Change",
    desc: "Tend to / Process / While",
    patterns: [
      { id: "85.1", label: "～がち", meaning: "Tend to / Often do", explanation: "Indicates a tendency towards a negative state or action.", examples: [{jp: "最近、風邪をひきがちだ。", romaji: "Saikin, kaze o hikigachi da.", en: "I've been tending to catch colds lately." }] },
      { id: "85.2", label: "～気味", meaning: "Slightly / A bit of", explanation: "Indicates a slight feeling or state (usually negative).", examples: [{jp: "今日は少し疲れ気味だ。", romaji: "Kyou wa sukoshi tsukaregimi da.", en: "I'm feeling a bit tired today." }] },
      { id: "85.3", label: "～つつある / ～つつ", meaning: "In process of / While", explanation: "Tsutsu aru is ongoing change. Tsutsu is formal 'while'.", examples: [{jp: "景気は回復しつつある。", romaji: "Keiki wa kaifuku shitsutsu aru.", en: "The economy is in the process of recovering." }, {jp: "悪いとは知りつつ、嘘をついた。", romaji: "Warui to wa shiritsutsu, uso o tsuita.", en: "While knowing it was bad, I lied." }] }
    ],
    quiz: [
      { q: "冬は外に出るのが おっくうに なり ___ です。", ans: "がち", options: ["がち", "気味", "かけ", "きり"] },
      { q: "最近、太り ___ なので、運動を始めた。", ans: "気味", options: ["気味", "がち", "っぽく", "げ"] },
      { q: "環境破壊は 世界中で 進み ___ 。", ans: "つつある", options: ["つつある", "ながら", "ところだ", "ばかりだ"] },
      { q: "明日 試験だと 知り ___ 、勉強しなかった。", ans: "つつ", options: ["つつ", "ながら", "わりに", "からには"] },
      { q: "留守 ___ なので、宅配便が受け取れない。", ans: "がち", options: ["がち", "気味", "きり", "ぬき"] },
      { q: "緊張のせいか、少し 風邪 ___ です。", ans: "気味", options: ["気味", "がち", "みたい", "そう"] },
      { q: "医療技術は 日々 進歩し ___ 。", ans: "つつある", options: ["つつある", "ながら", "ている", "ところだ"] },
      { q: "感謝の気持ちを 持ち ___ 、毎日を過ごす。", ans: "つつ", options: ["つつ", "ながら", "ていて", "から"] },
      { q: "忙しくて 朝ごはんを 抜き ___ だ。", ans: "がち", options: ["がち", "気味", "っぽい", "げ"] },
      { q: "新製品の開発が 遅れ ___ だ。", ans: "気味", options: ["気味", "がち", "つつある", "ところだ"] }
    ]
  },
  {
    chapter: 86,
    level: "N2",
    title: "Limits & Unavoidability",
    desc: "No choice / Impossible / Depending on",
    patterns: [
      { id: "86.1", label: "～ざるを得ない", meaning: "Have no choice but to", explanation: "Indicates that one must do something despite not wanting to.", examples: [{jp: "不本意だが、休学せざるを得ない。", romaji: "Fuhoni da ga, kyuugaku sezaru o enai.", en: "Unwillingly, I have no choice but to take a leave of absence from school." }] },
      { id: "86.2", label: "～わけにはいかない", meaning: "Cannot afford to / Cannot allow oneself to", explanation: "Indicates that due to social or moral reasons, one cannot perform an action.", examples: [{jp: "明日は試験があるから、休むわけにはいかない。", romaji: "Ashita wa shiken ga aru kara, yasumu wake ni wa ikanai.", en: "I have an exam tomorrow, so I can't afford to be absent." }] },
      { id: "86.3", label: "～かねない", meaning: "Might happen (bad result)", explanation: "Indicates a possibility of a negative outcome.", examples: [{jp: "スピードを出しすぎると、事故を起こしかねない。", romaji: "Supi-do o dashisugiru to, jiko o okoshikanai.", en: "If you speed too much, you might cause an accident." }] }
    ],
    quiz: [
      { q: "中止 ___ 得ない状況だ。", ans: "せざる", options: ["せざる", "せずには", "なくては", "すれば"] },
      { q: "大切な会議だから、遅れる ___ 。", ans: "わけにはいかない", options: ["わけにはいかない", "はずがない", "べきではない", "ものだ"] },
      { q: "そんなことを言ったら、誤解を 招き ___ 。", ans: "かねない", options: ["かねない", "ざるを得ない", "わけがない", "べきだ"] },
      { q: "命令とあらば、従わ ___ 得ない。", ans: "ざる", options: ["ざる", "ない", "ずに", "なくて"] },
      { q: "一人で外へ出す ___ 。最近は物騒だ。", ans: "わけにはいかない", options: ["わけにはいかない", "どころではない", "ものか", "まい"] },
      { q: "無理なダイエットは体を 壊し ___ 。", ans: "かねない", options: ["かねない", "にすぎない", "どころではない", "はずだ"] },
      { q: "明日は大事な用事があるので、雨が降っても 行か ___ 得ない。", ans: "ざる", options: ["ざる", "なく", "ない", "ずに"] },
      { q: "親切にされたのだから、お礼を言わない ___ 。", ans: "わけにはいかない", options: ["わけにはいかない", "ことにする", "ことだ", "はずだ"] },
      { q: "不景気で倒産 ___ 状況だ。", ans: "しかねない", options: ["しかねない", "しつつある", "しながら", "し次第"] },
      { q: "ルールは守ら ___ 得ない。", ans: "ざる", options: ["ざる", "ずに", "ない", "なく"] }
    ]
  },
  {
    chapter: 87,
    level: "N2",
    title: "Formal & Business Grammar",
    desc: "Regarding / At / Through / As",
    patterns: [
      { id: "87.1", label: "～に関して / ～に対して", meaning: "Regarding / Towards (Opposition)", explanation: "Ni kanshite is about a topic. Ni taishite is towards a person or in contrast.", examples: [{jp: "その件に関して、ご報告いたします。", romaji: "Sono ken ni kanshite, gohoukoku itashimasu.", en: "I will report regarding that matter." }, {jp: "お客様に対しては、丁寧な言葉を使いなさい。", romaji: "Okyakusama ni taishite wa, teinei na kotoba o tsukainasai.", en: "Use polite language towards customers." }] },
      { id: "87.2", label: "～において / ～における", meaning: "In / At (Formal location/time)", explanation: "Formal version of 'de' for locations or periods.", examples: [{jp: "現代社会において、インターネットは欠かせない。", romaji: "Gendai shakai ni oite, inta-netto wa kakasenai.", en: "In modern society, the internet is indispensable." }] },
      { id: "87.3", label: "～を通して / ～を通じて", explanation: "Means or throughout a whole period.", meaning: "Through / Via", examples: [{jp: "ニュースを通して、その事件を知った。", romaji: "Nyu-su o tooshite, sono jiken o shitta.", en: "I learned about that incident through the news." }] }
    ],
    quiz: [
      { q: "この問題 ___ 、皆さんの意見を聞かせてください。", ans: "に関して", options: ["に関して", "に際して", "に伴って", "に際し"] },
      { q: "目上の人 ___ 、失礼な態度をとってはいけない。", ans: "に対して", options: ["に対して", "にとって", "について", "として"] },
      { q: "来週、この会場 ___ 試験が行われます。", ans: "において", options: ["において", "に際して", "にわたって", "に限って"] },
      { q: "一年 ___ 温暖な気候だ。", ans: "を通じて", options: ["を通じて", "に関わらず", "を問わず", "に限らず"] },
      { q: "環境問題 ___ 興味があります。", ans: "に関して", options: ["に関して", "に向けて", "に応じて", "に沿って"] },
      { q: "最近、若者の 読書離れ ___ 懸念されています。", ans: "が", options: ["が", "を", "に", "は"] },
      { q: "国際会議 ___ 、新しい条約が結ばれた。", ans: "において", options: ["において", "として", "につき", "に限り"] },
      { q: "ボランティア活動 ___ 、多くのことを学んだ。", ans: "を通して", options: ["を通して", "を皮切りに", "をきっかけに", "を抜いて"] },
      { q: "彼女 ___ 多くのファンが 手紙を送った。", ans: "に対して", options: ["に対して", "に先立って", "に従って", "に際して"] },
      { q: "明治時代 ___ 日本は 大きく変わった。", ans: "における", options: ["における", "についての", "としての", "にかけての"] }
    ]
  },
  {
    chapter: 88,
    level: "N2",
    title: "Evaluation & Judgement",
    desc: "Nothing but / Best to / Sentiment",
    patterns: [
      { id: "88.1", label: "～にほかならない", meaning: "Nothing but / Definitely because", explanation: "Emphasizes that there is no other reason or truth.", examples: [{jp: "彼の成功は努力の結果にほかならない。", romaji: "Kare no seichou wa doryoku no kekka ni hokanaranai.", en: "His success is nothing but the result of effort." }] },
      { id: "88.2", label: "～に越したことはない", meaning: "It's best to / Nothing is better than", explanation: "Indicates a desirable state, even if not absolutely necessary.", examples: [{jp: "準備は早めに越したことはない。", romaji: "Junbi wa hayame ni koshita koto wa nai.", en: "It's best to prepare early." }] },
      { id: "88.3", label: "～ものだ / ～ものではない", meaning: "Social norm / Emotional truth", explanation: "States things as they should be or naturally are.", examples: [{jp: "お年寄りには親切にするものだ。", romaji: "Otoshiyori ni wa shinsetsu ni suru mono da.", en: "One should be kind to the elderly." }] }
    ],
    quiz: [
      { q: "私がここまで来られたのは、皆さんの助けがあったから ___ 。", ans: "にほかならない", options: ["にほかならない", "にすぎない", "に違いない", "に決まっている"] },
      { q: "用心 ___ したことはない。", ans: "に越した", options: ["に越した", "に限り", "さえあれば", "こそ"] },
      { q: "子供は外で遊ぶ ___ だ。", ans: "もの", options: ["もの", "こと", "はず", "わけ"] },
      { q: "嘘をつく ___ ではない。", ans: "もの", options: ["もの", "こと", "はず", "わけ"] },
      { q: "この発明は平和のために利用されるべき ___ だ。", ans: "もの", options: ["もの", "こと", "はず", "わけ"] },
      { q: "宝くじに当たったのは幸運 ___ 。", ans: "にほかならない", options: ["にほかならない", "わりに", "ものの", "反面"] },
      { q: "試験は満点 ___ したことはない。", ans: "に越した", options: ["に越した", "のみか", "ばかりか", "にしたら"] },
      { q: "人の悪口を言う ___ ではない。", ans: "もの", options: ["もの", "うちに", "まえに", "ところで"] },
      { q: "親孝行は ___ うちにするものだ。", ans: "できる", options: ["できる", "できた", "できそうな", "できない"] },
      { q: "彼の 行動は 正義感 ___ 。", ans: "にほかならない", options: ["にほかならない", "にふさわしい", "に基づいて", "につき"] }
    ]
  },
  {
    chapter: 89,
    level: "N2",
    title: "Requests & Advice",
    desc: "Should / Wish / Expectation",
    patterns: [
      { id: "89.1", label: "～べきだ / ～べきではない", meaning: "Should / Shouldn't", explanation: "Expresses strong moral or social obligation.", examples: [{jp: "約束は守るべきだ。", romaji: "Yakusoku wa mamoru beki da.", en: "You should keep your promises." }] },
      { id: "89.2", label: "～ないものか", meaning: "Is there no way to / Wish", explanation: "Expression of a strong wish for something difficult to happen.", examples: [{jp: "何とか解決できないものか。", romaji: "Nantoka kaiketsu dekinai mono ka.", en: "Is there really no way to resolve this somehow?" }] },
      { id: "89.3", label: "～てほしいものだ", meaning: "Really want someone to", explanation: "Strong desire for someone else to do something.", examples: [{jp: "一刻も早く平和になってほしいものだ。", romaji: "Ikkoku mo hayaku heiwa ni natte hoshii mono da.", en: "I really want it to become peaceful as soon as possible." }] }
    ],
    quiz: [
      { q: "若いうちにもっと勉強 ___ だった。", ans: "しておくべき", options: ["しておくべき", "しておいた", "しておきたい", "しているはず"] },
      { q: "なんとかして、彼に会えない ___ 。", ans: "ものか", options: ["ものか", "ことか", "はずか", "わけか"] },
      { q: "世界が平和になって ___ 。", ans: "ほしいものだ", options: ["ほしいものだ", "ほしいわけだ", "ほしいことだ", "ほしいはずだ"] },
      { q: "人前でさわぐ ___ ではない。", ans: "べき", options: ["べき", "こと", "もの", "はず"] },
      { q: "この感動を誰かに伝えられない ___ 。", ans: "ものか", options: ["ものか", "ばかりか", "さえあれば", "ころか"] },
      { q: "子供たちがのびのびと育って ___ 。", ans: "ほしいものだ", options: ["ほしいものだ", "つもりだ", "ようだ", "そうだ"] },
      { q: "専門家に相談 ___ だ。", ans: "するべき", options: ["するべき", "しつつ", "した末", "すればこそ"] },
      { q: "失った時間を取り戻せない ___ 。", ans: "ものか", options: ["ものか", "さえか", "のみか", "よりか"] },
      { q: "みんなにもっと協力して ___ 。", ans: "ほしいものだ", options: ["ほしいものだ", "に伴って", "に応じて", "に際して"] },
      { q: "自分を信じて突き進む ___ だ。", ans: "べき", options: ["べき", "こと", "はず", "わけ"] }
    ]
  },
  {
    chapter: 90,
    level: "N2",
    title: "Fixed N2 Patterns",
    desc: "Comparison / Limitation / Context",
    patterns: [
      { id: "90.1", label: "～ことは～が", meaning: "It's true that... but...", explanation: "Used to admit a fact while introducing a contradictory point.", examples: [{jp: "この家は古いことは古いが、とても頑丈だ。", romaji: "Kono ie wa furui koto wa furui ga, totemo ganjou da.", en: "It's true that this house is old, but it's very solid." }] },
      { id: "90.2", label: "～に比べて", meaning: "Compared to", explanation: "Used to show progress or contrast between two things.", examples: [{jp: "去年は去年に比べて、今年はとても暑い。", romaji: "Kyonen wa kyonen ni kurabete, kotoshi wa totemo atsui.", en: "Compared to last year, this year is very hot." }] },
      { id: "90.3", label: "～を問わず", meaning: "Regardless of", explanation: "Indicates that something applies irrespective of a certain condition.", examples: [{jp: "年齢を問わず、誰でも参加できます。", romaji: "Nenrei o towazu, daredemo sanka dekimasu.", en: "Anyone can participate, regardless of age." }] }
    ],
    quiz: [
      { q: "読んだ ___ 読んだが、内容は全然覚えていない。", ans: "ことは", options: ["ことは", "のでは", "とは", "にわ"] },
      { q: "田舎は 都会 ___、空気が 綺麗だ。", ans: "に比べて", options: ["に比べて", "に加えて", "に伴って", "に際して"] },
      { q: "この仕事は 経験 ___ 、やる気のある人を 募集している。", ans: "を問わず", options: ["を問わず", "に限らず", "にわたって", "に関わらず"] },
      { q: "美味しい ___ 美味しいが、少し高い。", ans: "ことは", options: ["ことは", "のでは", "からには", "わりに"] },
      { q: "兄 ___ 、弟は あまり 勉強しない。", ans: "に比べて", options: ["に比べて", "に対して", "に先立って", "に従って"] },
      { q: "昼夜 ___ 、工事の音が うるさい。", ans: "を問わず", options: ["を問わず", "に限って", "のみならず", "にすぎない"] },
      { q: "便利な ___ 便利だが、使いにくい。", ans: "ことは", options: ["ことは", "もので", "はずで", "わけで"] },
      { q: "今年は 去年 ___、雪が 多い。", ans: "に比べ", options: ["に比べ", "に即して", "に反して", "に亘って"] },
      { q: "国内外 ___ 、多くの 観光客が 訪れる。", ans: "を問わず", options: ["を問わず", "を通じ", "を機に", "を皮切りに"] },
      { q: "高い ___ 高いが、質は 非常に 良い。", ans: "ことは", options: ["ことは", "ので", "から", "のに"] }
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
    title: "Strong Judgement & Assertion",
    desc: "Undeniable / Nothing but / Not an exaggeration",
    patterns: [
      { id: "101.1", label: "～に相違ない", meaning: "Undeniably / Certainly", explanation: "Formal way to express strong certainty based on objective evidence.", examples: [{jp: "彼が犯人であることに相違ない。", romaji: "Kare ga hannin de aru koto ni soui nai.", en: "There is no doubt that he is the culprit." }] },
      { id: "101.2", label: "～にほかならない", meaning: "Nothing but / Precisely because", explanation: "Used to emphasize that there is no other possibility or reason.", examples: [{jp: "合格したのは努力の結果にほかならない。", romaji: "Goukaku shita no wa doryoku no kekka ni hokanaranai.", en: "Passing was nothing but the result of effort." }] },
      { id: "101.3", label: "～と言っても過言ではない", meaning: "It is not an exaggeration to say", explanation: "Used to emphasize reaching a high level or an extreme state.", examples: [{jp: "彼は現代の英雄だと言っても過言ではない。", romaji: "Kare wa gendai no eiyuu da to itte mo kagon de wa nai.", en: "It is not an exaggeration to say he is a modern hero." }] }
    ],
    quiz: [
      { q: "証拠がある以上、彼が犯人であることに ___ 。", ans: "相違ない", options: ["相違ない", "にすぎない", "どころではない", "ものだ"] },
      { q: "成功は彼の才能の ___ 。", ans: "ほかならない", options: ["ほかならない", "にすぎない", "はずがない", "わけがない"] },
      { q: "これは世紀の発見 ___ 。", ans: "と言っても過言ではない", options: ["と言っても過言ではない", "に相違ない", "にほかならない", "次第だ"] },
      { q: "事実であることに ___ 。", ans: "相違ない", options: ["相違ない", "にすぎない", "に沿って", "を除いて"] },
      { q: "この結果は我々の協力の ___ 。", ans: "賜物にほかならない", options: ["賜物にほかならない", "賜物にすぎない", "賜物と言っても何だ", "賜物だろうか"] },
      { q: "彼は世界一の天才 ___ 。", ans: "と言っても過言ではない", options: ["と言っても過言ではない", "に相違ない", "にほかならない", "にすぎない"] },
      { q: "犯人はこの中にいることに ___ 。", ans: "相違ない", options: ["相違ない", "にすぎない", "に限る", "に決まる"] },
      { q: "教育とは未来への投資 ___ 。", ans: "にほかならない", options: ["にほかならない", "にすぎない", "からこそ", "次第で"] },
      { q: "日本一の山 ___ 。", ans: "と言っても過言ではない", options: ["と言っても過言ではない", "に相違ない", "にほかならない", "ために"] },
      { q: "真義はここにあることに ___ 。", ans: "相違ない", options: ["相違ない", "にすぎない", "に沿って", "のもとに"] }
    ]
  },
  {
    chapter: 102,
    level: "N1",
    title: "Logic & Reasoning",
    desc: "Up to / Based on / Background",
    patterns: [
      { id: "102.1", label: "～に至るまで", meaning: "Up to / Even / Including", explanation: "Emphasizes an extreme range or unexpected depth of scope.", examples: [{jp: "趣味から仕事に至るまで、全力で取り組む。", romaji: "Shumi kara shigoto ni itaru made, zenryoku de torikumu.", en: "I put my all into everything, from hobbies to work." }] },
      { id: "102.2", label: "～を踏まえて", meaning: "Based on / Considering", explanation: "Used when something is done or decided as a consequence of specific background facts.", examples: [{jp: "前回の反省を踏まえて、新しい計画を立てる。", romaji: "Zenkai no hansei o fumaete, atarashii keikaku o tateru.", en: "Based on previous reflections, we will make a new plan." }] },
      { id: "102.3", label: "～を背景に", meaning: "Against the backdrop of", explanation: "Indicates the underlying cause or situation behind an event.", examples: [{jp: "景気回復を背景に、株価が上昇した。", romaji: "Keiki kaifuku o haikei ni, kabuka ga joushou shita.", en: "Against the backdrop of economic recovery, stock prices rose." }] }
    ],
    quiz: [
      { q: "細部に ___ 、チェックが必要です。", ans: "至るまで", options: ["至るまで", "に際して", "に伴って", "に際し"] },
      { q: "アンケート結果を ___ 、改善策を考える。", ans: "踏まえて", options: ["踏まえて", "に沿って", "に即して", "に向けて"] },
      { q: "世界的な不況を ___ 、輸出が減少した。", ans: "背景に", options: ["背景に", "皮切りに", "をきっかけに", "にわたって"] },
      { q: "赤ん坊からお年寄りに ___ 、みんなが楽しんでいる。", ans: "至るまで", options: ["至るまで", "限りで", "のみで", "だけで"] },
      { q: "事実を ___ 判断すべきだ。", ans: "踏まえて", options: ["踏まえて", "において", "としての", "についての"] },
      { q: "支持率の上昇を ___ 、新政策を打ち出した。", ans: "背景に", options: ["背景に", "のもとに", "のかわりに", "に反して"] },
      { q: "隅々に ___ 掃除した。", ans: "至るまで", options: ["至るまで", "にわたって", "を通して", "を通じて"] },
      { q: "自分の経験を ___ 話した。", ans: "踏まえて", options: ["踏まえて", "に従って", "に即して", "に反して"] },
      { q: "人口増加を ___ 、住宅不足が深刻化した。", ans: "背景に", options: ["背景に", "を皮切りに", "に亘って", "に際して"] },
      { q: "朝から晩に ___ 働き詰めた。", ans: "至るまで", options: ["至るまで", "にわたって", "を通して", "を通じて"] }
    ]
  },
  {
    chapter: 103,
    level: "N1",
    title: "Conditions & Hypotheses",
    desc: "Depending on / Requirement / Even if",
    patterns: [
      { id: "103.1", label: "～いかんでは", meaning: "Depending on / According to", explanation: "Indicates that the outcome depends entirely on a particular condition or situation.", examples: [{jp: "理由いかんでは、入学を認めないこともある。", romaji: "Riyuu ikan de wa, nyuugaku o mitomenai koto mo aru.", en: "Depending on the reason, admission may not be granted." }] },
      { id: "103.2", label: "～なしには", meaning: "Without / Cannot do without", explanation: "Used to emphasize a mandatory requirement for a result.", examples: [{jp: "皆さんの協力なしには、成功はあり得ない。", romaji: "Minasan no kyouryoku nashi ni wa, seikou wa ari-enai.", en: "Success is impossible without everyone's cooperation." }] },
      { id: "103.3", label: "～としたところで", meaning: "Even if / Even assuming", explanation: "Formal hypothesis meaning that even in an extreme or favorable case, the result is still the same/negative.", examples: [{jp: "彼としたところで、どうしようもないだろう。", romaji: "Kare to shita tokoro de, dou shiyou mo nai darou.", en: "Even for him, there's probably nothing that can be done." }] }
    ],
    quiz: [
      { q: "試験の結果 ___ 、進級できないかもしれない。", ans: "いかんでは", options: ["いかんでは", "に際して", "を通じて", "を通して"] },
      { q: "努力 ___ 、合格はあり得ない。", ans: "なしには", options: ["なしには", "に限らず", "において", "として"] },
      { q: "どんなに急いだ ___ 、間に合わない。", ans: "としたところで", options: ["としたところで", "に限り", "さえあれば", "こそ"] },
      { q: "天候 ___ 、中止になることもある。", ans: "いかんでは", options: ["いかんでは", "ばかりに", "ものの", "わりに"] },
      { q: "犠牲 ___ 勝利など意味がない。", ans: "なしには", options: ["なしには", "に限り", "さえあれば", "こそ"] },
      { q: "たとえ金持ち ___ 、幸せになれるとは限らない。", ans: "としたところで", options: ["としたところで", "次第で", "末に", "あげく"] },
      { q: "話し合い ___ 、方針を変える余地がある。", ans: "いかんでは", options: ["いかんでは", "として", "にとって", "につき"] },
      { q: "勇気 ___ 、この壁は越えられない。", ans: "なしには", options: ["なしには", "に沿って", "を通じて", "を通して"] },
      { q: "社長 ___ 、この問題は解決できないだろう。", ans: "としたところで", options: ["としたところで", "からには", "以上に", "に反して"] },
      { q: "今後の推移 ___ 、対応策を練る必要がある。", ans: "いかんでは", options: ["いかんでは", "次第で", "末に", "あげく"] }
    ]
  },
  {
    chapter: 104,
    level: "N1",
    title: "Contrast & Exception",
    desc: "Despite / Unique to / Excluding",
    patterns: [
      { id: "104.1", label: "～にもかかわらず", meaning: "Despite / Although", explanation: "Stronger and more formal than 'noni'. Used when the result is unexpected given the situation.", examples: [{jp: "悪天候にもかかわらず、多くの人が集まった。", romaji: "Akutenkou ni mo kakawarazu, ooku no hito ga atsumatta.", en: "Despite the bad weather, many people gathered." }] },
      { id: "104.2", label: "～ならでは", meaning: "Unique to / Special to", explanation: "Emphasizes that something is a special quality only possible for a specific entity.", examples: [{jp: "京都ならではの風情がある。", romaji: "Kyoto naradeha no fuzei ga aru.", en: "There is a charm unique to Kyoto." }] },
      { id: "104.3", label: "～を除いて / ～を別にして", meaning: "Excluding / Except for", explanation: "Used to specify exceptions in a formal context.", examples: [{jp: "日曜日を除いて、毎日営業しています。", romaji: "Nichiyoubi o nozoite, mainichi eigyou shite imasu.", en: "We are open every day except Sunday." }] }
    ],
    quiz: [
      { q: "忙しい ___ 、手伝ってくれた。", ans: "にもかかわらず", options: ["にもかかわらず", "に際して", "に応じて", "に伴って"] },
      { q: "プロ ___ 素晴らしい技術だ。", ans: "ならではの", options: ["ならではの", "のような", "みたいな", "としての"] },
      { q: "一部の例外 ___ 、概ね賛成だ。", ans: "を除いて", options: ["を除いて", "を問わず", "に限らず", "としての"] },
      { q: "足が不自由である ___ 、彼は山に登った。", ans: "にもかかわらず", options: ["にもかかわらず", "ばかりに", "ものの", "わりに"] },
      { q: "日本 ___ 繊細な美しさがある。", ans: "ならではの", options: ["ならではの", "さえあれば", "こそ", "ばかりか"] },
      { q: "名前 ___ 、詳細は不明だ。", ans: "を別にして", options: ["を別にして", "をきっかけに", "を皮切りに", "を抜いて"] },
      { q: "深夜 ___ 、電話が鳴り止まない。", ans: "にもかかわらず", options: ["にもかかわらず", "として", "にとって", "につき"] },
      { q: "手作り ___ 味わいがある。", ans: "ならではの", options: ["ならではの", "に沿って", "を通じて", "を通して"] },
      { q: "専門的な知識 ___ 、一般的な常識は必要だ。", ans: "は別にして", options: ["は別にして", "はさておき", "はともかく", "は抜きにして"] },
      { q: "努力した ___ 、結果が出なかった。", ans: "にもかかわらず", options: ["にもかかわらず", "次第で", "末に", "あげく"] }
    ]
  },
  {
    chapter: 105,
    level: "N1",
    title: "Degree, Extremes & Emphasis",
    desc: "Extremely / Height of / Deep emotion",
    patterns: [
      { id: "105.1", label: "～極まりない", meaning: "Extremely / Infinitely", explanation: "Used to emphasize an extreme state, often negative (rude, dangerous, etc.).", examples: [{jp: "彼の態度は失礼極まりない。", romaji: "Kare no taido wa shitsurei kiwamarinai.", en: "His attitude is extremely rude." }] },
      { id: "105.2", label: "～の極み", meaning: "The height of / The utmost", explanation: "Expresses that something has reached the absolute peak of a state (luxury, glory, etc.).", examples: [{jp: "豪華客船の旅は贅沢の極みだ。", romaji: "Gouka kyakusen no tabi wa zeitaku no kiwami da.", en: "A cruise on a luxury liner is the height of extravagance." }] },
      { id: "105.3", label: "～の至り", meaning: "Utmost / Deepest (emotion)", explanation: "Formal expression of extreme gratitude, happiness, or shame.", examples: [{jp: "皆様にお会いできて、感激の至りです。", romaji: "Minasan ni oaidekite, kangeki no itari desu.", en: "I am deeply moved to be able to meet everyone." }] }
    ],
    quiz: [
      { q: "そんな発言をするなんて、無責任 ___ 。", ans: "極まりない", options: ["極まりない", "にすぎない", "どころではない", "ものだ"] },
      { q: "この景色は美しさの ___ だ。", ans: "極み", options: ["極み", "至り", "極まりない", "に限る"] },
      { q: "お褒めの言葉をいただき、光栄の ___ です。", ans: "至り", options: ["至り", "極み", "極まりない", "ばかり"] },
      { q: "危険 ___ 行為だ。", ans: "極まりない", options: ["極まりない", "に即して", "に沿って", "を除いて"] },
      { q: "プロ選手として、優勝は感激の ___ だ。", ans: "至り", options: ["至り", "極み", "ところ", "次第"] },
      { q: "絶望の ___ に突き落とされた。", ans: "極み", options: ["極み", "至り", "限り", "のみ"] },
      { q: "不愉快 ___ 。", ans: "極まりない", options: ["極まりない", "に限る", "に決まる", "に相違ない"] },
      { q: "若気の ___ で失敗してしまった。", ans: "至り", options: ["至り", "極み", "せいで", "ために"] },
      { q: "贅沢の ___ を尽くしたパーティー。", ans: "極み", options: ["極み", "至り", "からに", "ほどに"] },
      { q: "退屈 ___ 映画だった。", ans: "極まりない", options: ["極まりない", "に即して", "のもとに", "のかわりに"] }
    ]
  },
  {
    chapter: 106,
    level: "N1",
    title: "Time, Process & Transition",
    desc: "After passing / Reach / Turning point",
    patterns: [
      { id: "106.1", label: "～を経て", meaning: "After / Via / Through", explanation: "Indicates moving to a next stage after passing through a certain process or location.", examples: [{jp: "紆余曲折を経て、ようやく解決した。", romaji: "Uyo-kyokusetsu o hete, youyaku kaiketsu shita.", en: "After many twists and turns, it was finally resolved." }] },
      { id: "106.2", label: "～に至る", meaning: "Reach / Arrive at", explanation: "Indicates the final result or destination of a process or struggle.", examples: [{jp: "議論を重ね、合意に至った。", romaji: "Giron o kasane, goui ni itatta.", en: "After repeated discussions, we reached an agreement." }] },
      { id: "106.3", label: "～を境に", meaning: "After / Since (turning point)", explanation: "Indicates a major change that occurred after a specific event.", examples: [{jp: "結婚を境に、生活習慣が変わった。", romaji: "Kekkon o sakai ni, seikatsu shuukan ga kawatta.", en: "Since getting married, my lifestyle habits have changed." }] }
    ],
    quiz: [
      { q: "20年の歳月を ___ 、二人は再会した。", ans: "を経て", options: ["を経て", "を皮切りに", "を背景に", "を機に"] },
      { q: "その事件を ___ 、彼は姿を消した。", ans: "境に", options: ["境に", "至る", "経て", "通じて"] },
      { q: "最終的な決断に ___ までに時間がかかった。", ans: "至る", options: ["至る", "及ぶ", "過ぎる", "経る"] },
      { q: "研修を ___ 正社員になった。", ans: "を経て", options: ["を経て", "を問わず", "を除いて", "を抜きにして"] },
      { q: "あの日を ___ 生活が一変した。", ans: "境に", options: ["境に", "限りで", "のみで", "だけで"] },
      { q: "目的地に ___ 道のりは遠い。", ans: "至る", options: ["至る", "のもとに", "に反して", "に逆らって"] },
      { q: "多くの困難を ___ プロジェクトは成功した。", ans: "を経て", options: ["を経て", "に亘って", "を通して", "を通じて"] },
      { q: "手術を ___ 健康を取り戻した。", ans: "境に", options: ["境に", "次第で", "末に", "あげく"] },
      { q: "死に ___ 病ではない。", ans: "至る", options: ["至る", "及ぶ", "当たる", "向かう"] },
      { q: "世界中を ___ 日本に戻った。", ans: "を経て", options: ["を経て", "に際して", "に向けて", "に従って"] }
    ]
  },
  {
    chapter: 107,
    level: "N1",
    title: "Limitation & Inevitability",
    desc: "Forced to / No choice but / Negative will",
    patterns: [
      { id: "107.1", label: "～を余儀なくされる", meaning: "Be forced to / Compelled to", explanation: "Formal expression showing that external factors forced a certain action.", examples: [{jp: "大雪のため、中止を余儀なくされた。", romaji: "Ooyuki no tame, chuushi o yogi naku sareta.", en: "Due to heavy snow, they were forced to cancel." }] },
      { id: "107.2", label: "～ざるを得ない", meaning: "No choice but to", explanation: "Indicates a logical or situational necessity despite personal feelings.", examples: [{jp: "他に方法がなく、諦めざるを得ない。", romaji: "Hoka ni houhou ga naku, akiramezaru o enai.", en: "With no other choice, I have to give up." }] },
      { id: "107.3", label: "～まい", meaning: "Strong negative will / Will not", explanation: "A formal literary way to express 'will not' or 'probably not'.", examples: [{jp: "あんな店、二度と行くまい。", romaji: "Anna mise, nido to ikumai.", en: "I will never go to a shop like that again." }] }
    ],
    quiz: [
      { q: "資金不足で、計画の変更を ___ 。", ans: "余儀なくされた", options: ["余儀なくされた", "に際した", "を通じた", "に即した"] },
      { q: "事実である以上、認め ___ 。", ans: "ざるを得ない", options: ["ざるを得ない", "に限らない", "ざるをえない", "に限る"] },
      { q: "もう嘘はつく ___ と心に決めた。", ans: "まい", options: ["まい", "だろう", "はずだ", "わけだ"] },
      { q: "病状が悪化し、入院を ___ 。", ans: "余儀なくされた", options: ["余儀なくされた", "ばかりに", "ものの", "わりに"] },
      { q: "規則なので、従わ ___ 。", ans: "ざるを得ない", options: ["ざるを得ない", "に限り", "さえあれば", "こそ"] },
      { q: "彼は自分の非を認め ___ だろう。", ans: "まい", options: ["まい", "だろう", "そうにない", "がたい"] },
      { q: "不祥事の発覚により、社長は辞職を ___ 。", ans: "余儀なくされた", options: ["余儀なくされた", "として", "にとって", "につき"] },
      { q: "反対は多いが、決行 ___ 。", ans: "せざるを得ない", options: ["せざるを得ない", "し得ない", "するわけにはいかない", "すればいい"] },
      { q: "今更後悔し ___ 。", ans: "たところで", options: ["まい", "たところで", "以上に", "に反して"] },
      { q: "故障により、リタイアを ___ 。", ans: "余儀なくされた", options: ["余儀なくされた", "次第で", "末に", "あげく"] }
    ]
  },
  {
    chapter: 108,
    level: "N1",
    title: "Evaluation & Criticism",
    desc: "Despite / More than / Cannot bear",
    patterns: [
      { id: "108.1", label: "～をものともせず", meaning: "In spite of / Braving", explanation: "Used to praise someone for overcoming a major obstacle (danger, disability, etc.).", examples: [{jp: "強風をものともせず、試合を続けた。", romaji: "Kyoufu o mono tomo sezu, shiai o tsuzuketa.", en: "They continued the game, braving the strong winds." }] },
      { id: "108.2", label: "～にもまして", meaning: "Even more than", explanation: "Used for comparison, emphasizing that the current case is even more extreme than the previous one.", examples: [{jp: "今年は例年にもまして暑い。", romaji: "Kotoshi wa reinen ni mo mashite atsui.", en: "This year is even hotter than usual." }] },
      { id: "108.3", label: "～にたえない", meaning: "Cannot bear / Unbearable", explanation: "Indicates that something is too terrible to look at/hear, or that an emotion (gratitude, regret) is overwhelming.", examples: [{jp: "そのニュースは聞くにたえない惨状だった。", romaji: "Sono nyuusu wa kiku ni taenai sanjou datta.", en: "The news described a scene too painful to hear." }] }
    ],
    quiz: [
      { q: "周囲の反対を ___ 、彼は計画を実行した。", ans: "ものともせず", options: ["ものともせず", "に際して", "に応じて", "に伴って"] },
      { q: "以前 ___ 美しくなった。", ans: "にもまして", options: ["にもまして", "にすぎない", "どころか", "ばかりか"] },
      { q: "惨憺たる状況で、見る ___ 。", ans: "にたえない", options: ["にたえない", "を問わず", "に至るまで", "としての"] },
      { q: "大怪我を ___ 、彼は走り抜いた。", ans: "ものともせず", options: ["ものともせず", "ばかりに", "ものの", "わりに"] },
      { q: "合格できたのは、何 ___ 喜びだ。", ans: "にもまして", options: ["にもまして", "さえあれば", "こそ", "ばかりか"] },
      { q: "感謝 ___ です。", ans: "の至り", options: ["にたえません", "の極み", "の至り", "に足ります"] },
      { q: "吹雪を ___ 頂上を目指す。", ans: "ものともせず", options: ["ものともせず", "として", "にとって", "につき"] },
      { q: "最近は夏 ___ 冬も暑い。", ans: "にもまして", options: ["にもまして", "よりは", "というか", "に反して"] },
      { q: "下品な冗談で、聞く ___ 。", ans: "にたえない", options: ["にたえない", "はさておき", "はともかく", "は抜きにして"] },
      { q: "困難を ___ 成功を掴んだ。", ans: "ものともせず", options: ["ものともせず", "次第で", "末に", "あげく"] }
    ]
  },
  {
    chapter: 109,
    level: "N1",
    title: "Source, Perspective & Scope",
    desc: "Based on / Light of / In line with",
    patterns: [
      { id: "109.1", label: "～に基づいて", meaning: "Based on / On the basis of", explanation: "Indicates that something is used as a foundation or source (data, principles, etc.).", examples: [{jp: "客観的な事実に基づいて判断する。", romaji: "Kyakkan-teki na jijitsu ni motozuite handan suru.", en: "Judge based on objective facts." }] },
      { id: "109.2", label: "～に照らして", meaning: "In light of / Comparing with", explanation: "Used when making a judgement by comparing it with a standard, law, or past experience.", examples: [{jp: "法に照らして、適切に処置する。", romaji: "Hou ni terashite, tekisetsu ni shochi suru.", en: "Deal with it appropriately in light of the law." }] },
      { id: "109.3", label: "～に即して", meaning: "In line with / According to", explanation: "Indicates doing something exactly according to the facts, reality, or regulations.", examples: [{jp: "現実に即して考えよう。", romaji: "Genjitsu ni sokushite kangaeyou.", en: "Let's think in line with reality." }] }
    ],
    quiz: [
      { q: "科学的な根拠に ___ 推論する。", ans: "基づいて", options: ["基づいて", "に際して", "に応じて", "に伴って"] },
      { q: "自分の良心に ___ 決めた。", ans: "照らして", options: ["照らして", "踏まえて", "に従って", "に際し"] },
      { q: "マニュアルに ___ 作業を進める。", ans: "即して", options: ["即して", "際して", "に亘って", "に向けて"] },
      { q: "調査結果に ___ レポートを書く。", ans: "基づいて", options: ["基づいて", "に限り", "のみで", "だけで"] },
      { q: "常識に ___ 判断すべきだ。", ans: "照らして", options: ["照らして", "において", "としての", "についての"] },
      { q: "時代の変化に ___ 教育方針を変える。", ans: "即して", options: ["即して", "のもとに", "のかわりに", "に反して"] },
      { q: "過去の事例に ___ 今回の件を考える。", ans: "照らして", options: ["照らして", "に亘って", "を通して", "を通じて"] },
      { q: "事実に ___ 報告してください。", ans: "基づいて", options: ["基づいて", "次第で", "末に", "あげく"] },
      { q: "法規に ___ 審査を行う。", ans: "即して", options: ["即して", "及ぶ", "当たる", "向かう"] },
      { q: "データに ___ 分析を行う。", ans: "基づいて", options: ["基づいて", "に際して", "に向けて", "に従って"] }
    ]
  },
  {
    chapter: 110,
    level: "N1",
    title: "Formal Action & Written Expression",
    desc: "On occasion / By / According to rules",
    patterns: [
      { id: "110.1", label: "～に際して / ～にあたって", meaning: "On the occasion of / Upon", explanation: "Formal expression used for important life events or official starts of projects.", examples: [{jp: "新社屋完成に際して、式典が行われた。", romaji: "Shin-shoku kansei ni saishite, shikiten ga okonawareta.", en: "A ceremony was held upon the completion of the new office building." }] },
      { id: "110.2", label: "～則って", meaning: "In accordance with", explanation: "Indicates following a set of traditional rules, laws, or established standards.", examples: [{jp: "古くからの慣習に則って、儀式を行う。", romaji: "Furuku kara no kanshuu ni nottotte, gishiki o okonau.", en: "Perform the ritual in accordance with ancient customs." }] },
      { id: "110.3", label: "～を機に", meaning: "Taking the opportunity / Since", explanation: "Indicates that an event served as a perfect trigger for a change or new action.", examples: [{jp: "定年を機に、海外移住を決めた。", romaji: "Teinen o ki ni, kaigai ijuu o kimeta.", en: "Taking the opportunity of retirement, I decided to move abroad." }] }
    ],
    quiz: [
      { q: "留学に ___ 、色々な準備をした。", ans: "際して", options: ["際して", "皮切りに", "背景に", "渡って"] },
      { q: "公教育の基準に ___ 運営する。", ans: "則って", options: ["則って", "照らして", "基づいて", "沿って"] },
      { q: "結婚を ___ 煙草を止めた。", ans: "機に", options: ["機に", "を皮切りに", "を背景に", "を機に"] },
      { q: "開会に ___ 二言ご挨拶申し上げます。", ans: "あたって", options: ["あたって", "に問わず", "を除いて", "を抜きにして"] },
      { q: "伝統に ___ 祭りを守る。", ans: "則って", options: ["則って", "限りで", "のみで", "だけで"] },
      { q: "この事件を ___ セキュリティを強化した。", ans: "機に", options: ["機に", "に即して", "に反して", "に逆らって"] },
      { q: "新年を迎えるに ___ 抱負を語る。", ans: "あたって", options: ["あたって", "に亘って", "を通して", "を通じて"] },
      { q: "国際法に ___ 処置する。", ans: "則って", options: ["則って", "次第で", "末に", "あげく"] },
      { q: "昇進を ___ 引っ越しをした。", ans: "機に", options: ["機に", "及ぶ", "当たる", "向かう"] },
      { q: "帰国に ___ お世話になった方々に挨拶した。", ans: "際して", options: ["際して", "皮切りに", "背景に", "渡って"] }
    ]
  },
  {
    chapter: 111,
    level: "N1",
    title: "Fixed N1 Grammar Patterns (EXAM GOLD)",
    desc: "Without doing / In order to / As if",
    patterns: [
      { id: "111.1", label: "～ことなく", meaning: "Without doing", explanation: "Formal version of 'naide', showing an action continues without something else happening.", examples: [{jp: "一度も立ち止まることなく、走り続けた。", romaji: "Ichido mo tachidomaru koto naku, hashiri-tsuzuketa.", en: "He kept running without stopping even once." }] },
      { id: "111.2", label: "～べく", meaning: "In order to / Intending to", explanation: "Formal expression showing a clear purpose or intention, used as a literary equivalent to 'tame ni'.", examples: [{jp: "プロを目指すべく、毎日練習に励んでいる。", romaji: "Puro o mezasubeku, mainichi renshuu ni hagende iru.", en: "I am working hard at practice every day in order to become a pro." }] },
      { id: "111.3", label: "～んばかりに", meaning: "As if / Just about to", explanation: "Expresses a vivid state where something is almost happening, though it hasn't yet.", examples: [{jp: "彼女は泣き出さんばかりに、目を潤ませていた。", romaji: "Kanojo wa naki-dasan bakari ni, me o urumase teita.", en: "Her eyes were watering, as if she was just about to start crying." }] }
    ],
    quiz: [
      { q: "彼は迷う ___ その道を選んだ。", ans: "ことなく", options: ["ことなく", "ものの", "からには", "わりに"] },
      { q: "真相を究明す ___ 調査を続行した。", ans: "べく", options: ["べく", "に際して", "に応じて", "に伴って"] },
      { q: "溢れ出さ ___ バケツが一杯だ。", ans: "んばかりに", options: ["んばかりに", "として", "にとって", "につき"] },
      { q: "一度も諦める ___ 最後までやり遂げた。", ans: "ことなく", options: ["ことなく", "ばかりに", "ものの", "わりに"] },
      { q: "平和を実現す ___ 尽力する。", ans: "べく", options: ["べく", "に限り", "さえあれば", "こそ"] },
      { q: "今にも降り出さ ___ 空模様だ。", ans: "んばかりに", options: ["んばかりに", "次第で", "末に", "あげく"] },
      { q: "誰にも知られる ___ 旅立った。", ans: "ことなく", options: ["ことなく", "として", "にとって", "につき"] },
      { q: "目標を達成す ___ 努力を重ねる。", ans: "べく", options: ["べく", "し得ない", "するわけにはいかない", "すればいい"] },
      { q: "爆発せ ___ 膨らんでいる。", ans: "んばかりに", options: ["んばかりに", "たところで", "以上に", "に反して"] },
      { q: "休む ___ 働き続けた。", ans: "ことなく", options: ["ことなく", "次第で", "末に", "あげく"] }
    ]
  },
];
