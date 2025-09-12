// Study Plan Data Structure
const studyPlan = {
    1: {
        title: "Introduction to Japanese",
        tasks: [
            "Learn basic greetings: こんにちは (konnichiwa), おはよう (ohayou)",
            "Introduction to Hiragana: あ (a), い (i), う (u), え (e), お (o)",
            "Practice writing: あいうえお 10 times each",
            "Listen to Japanese pronunciation audio",
            "Learn: 'My name is...' - 私の名前は... (watashi no namae wa...)",
            "Speaking practice: Introduce yourself in Japanese"
        ]
    },
    2: {
        title: "Hiragana Basics Continued",
        tasks: [
            "Learn Hiragana: か (ka), き (ki), く (ku), け (ke), こ (ko)",
            "Vocabulary: 家 (ie - house), 木 (ki - tree)",
            "Practice writing: かきくけこ 10 times each",
            "Grammar: です (desu) - polite form",
            "Sentence building: これは本です (kore wa hon desu - This is a book)",
            "Listening: Basic Japanese sounds and rhythm"
        ]
    },
    3: {
        title: "More Hiragana & Basic Vocabulary",
        tasks: [
            "Learn Hiragana: さ (sa), し (shi), す (su), せ (se), そ (so)",
            "Vocabulary: 魚 (sakana - fish), 寿司 (sushi)",
            "Practice writing: さしすせそ 10 times each",
            "Numbers 1-5: いち (ichi), に (ni), さん (san), よん (yon), ご (go)",
            "Sentence practice: 私は学生です (watashi wa gakusei desu - I am a student)",
            "Speaking: Count from 1 to 5 in Japanese"
        ]
    },
    4: {
        title: "Hiragana た行 & Time Expressions",
        tasks: [
            "Learn Hiragana: た (ta), ち (chi), つ (tsu), て (te), と (to)",
            "Vocabulary: 時間 (jikan - time), 今 (ima - now)",
            "Practice writing: たちつてと 10 times each",
            "Time expressions: 今日 (kyou - today), 明日 (ashita - tomorrow)",
            "Grammar: は particle for topic marking",
            "Speaking: Talk about today's activities"
        ]
    },
    5: {
        title: "Hiragana な行 & Family Terms",
        tasks: [
            "Learn Hiragana: な (na), に (ni), ぬ (nu), ね (ne), の (no)",
            "Vocabulary: 母 (haha - mother), 父 (chichi - father)",
            "Practice writing: なにぬねの 10 times each",
            "Grammar: の particle for possession",
            "Sentence: 私の家族 (watashi no kazoku - my family)",
            "Speaking: Describe your family members"
        ]
    },
    6: {
        title: "Hiragana は行 & Colors",
        tasks: [
            "Learn Hiragana: は (ha), ひ (hi), ふ (fu), へ (he), ほ (ho)",
            "Vocabulary: 赤 (aka - red), 青 (ao - blue), 白 (shiro - white)",
            "Practice writing: はひふへほ 10 times each",
            "Grammar: adjectives with です",
            "Sentence: 空は青いです (sora wa aoi desu - The sky is blue)",
            "Speaking: Describe colors of objects around you"
        ]
    },
    7: {
        title: "Hiragana ま行 & Food Vocabulary",
        tasks: [
            "Learn Hiragana: ま (ma), み (mi), む (mu), め (me), も (mo)",
            "Vocabulary: 水 (mizu - water), 肉 (niku - meat), 米 (kome - rice)",
            "Practice writing: まみむめも 10 times each",
            "Food expressions: おいしい (oishii - delicious)",
            "Sentence: 水を飲みます (mizu wo nomimasu - I drink water)",
            "Speaking: Talk about your favorite foods"
        ]
    },
    8: {
        title: "Hiragana や行・ら行 & Directions",
        tasks: [
            "Learn Hiragana: や (ya), ゆ (yu), よ (yo), ら (ra), り (ri)",
            "Vocabulary: 右 (migi - right), 左 (hidari - left)",
            "Practice writing: やゆよらり 10 times each",
            "Direction words: 前 (mae - front), 後ろ (ushiro - back)",
            "Grammar: を particle for direct objects",
            "Speaking: Give simple directions"
        ]
    },
    9: {
        title: "Complete Hiragana & Review",
        tasks: [
            "Learn remaining Hiragana: る (ru), れ (re), ろ (ro), わ (wa), ん (n)",
            "Complete Hiragana chart review",
            "Practice writing: るれろわん 10 times each",
            "Vocabulary review: All learned words",
            "Reading practice: Simple Hiragana sentences",
            "Speaking: Read aloud Hiragana combinations"
        ]
    },
    10: {
        title: "Hiragana Mastery Test",
        tasks: [
            "Hiragana recognition test: All 46 characters",
            "Writing test: Write Hiragana from memory",
            "Reading comprehension: Simple sentences",
            "Vocabulary quiz: Days 1-9 words",
            "Grammar review: です, は, の, を particles",
            "Speaking assessment: Self-introduction in Japanese"
        ]
    },
    11: {
        title: "Introduction to Katakana",
        tasks: [
            "Learn Katakana: ア (a), イ (i), ウ (u), エ (e), オ (o)",
            "Compare with Hiragana: あいうえお vs アイウエオ",
            "Practice writing: アイウエオ 10 times each",
            "Foreign words: アメリカ (Amerika - America)",
            "Usage rules: When to use Katakana vs Hiragana",
            "Speaking: Practice Katakana pronunciation"
        ]
    },
    12: {
        title: "Katakana か行 & Foreign Words",
        tasks: [
            "Learn Katakana: カ (ka), キ (ki), ク (ku), ケ (ke), コ (ko)",
            "Foreign words: コーヒー (koohii - coffee), ケーキ (keeki - cake)",
            "Practice writing: カキクケコ 10 times each",
            "Long vowel marks in Katakana: ー",
            "Vocabulary: カメラ (kamera - camera)",
            "Speaking: Order food and drinks in Japanese"
        ]
    },
    13: {
        title: "Katakana さ行 & Technology Terms",
        tasks: [
            "Learn Katakana: サ (sa), シ (shi), ス (su), セ (se), ソ (so)",
            "Technology words: コンピューター (konpyuutaa - computer)",
            "Practice writing: サシスセソ 10 times each",
            "Vocabulary: テレビ (terebi - TV), ラジオ (rajio - radio)",
            "Grammar: で particle for location/method",
            "Speaking: Talk about technology you use"
        ]
    },
    14: {
        title: "Katakana た行 & Sports",
        tasks: [
            "Learn Katakana: タ (ta), チ (chi), ツ (tsu), テ (te), ト (to)",
            "Sports vocabulary: テニス (tenisu - tennis), サッカー (sakkaa - soccer)",
            "Practice writing: タチツテト 10 times each",
            "Double consonants: ッ (small tsu)",
            "Sentence: テニスをします (tenisu wo shimasu - I play tennis)",
            "Speaking: Discuss sports and hobbies"
        ]
    },
    15: {
        title: "Katakana な行 & Countries",
        tasks: [
            "Learn Katakana: ナ (na), ニ (ni), ヌ (nu), ネ (ne), ノ (no)",
            "Country names: カナダ (Kanada - Canada), インド (Indo - India)",
            "Practice writing: ナニヌネノ 10 times each",
            "Nationality expressions: アメリカ人 (Amerika-jin)",
            "Grammar: から particle for 'from'",
            "Speaking: Talk about countries and nationalities"
        ]
    },
    16: {
        title: "Katakana は行 & Music",
        tasks: [
            "Learn Katakana: ハ (ha), ヒ (hi), フ (fu), ヘ (he), ホ (ho)",
            "Music vocabulary: ピアノ (piano), ギター (gitaa - guitar)",
            "Practice writing: ハヒフヘホ 10 times each",
            "Sound changes: ハ→パ, ハ→バ with dakuten",
            "Vocabulary: ホテル (hoteru - hotel)",
            "Speaking: Discuss music preferences"
        ]
    },
    17: {
        title: "Katakana ま行 & Animals",
        tasks: [
            "Learn Katakana: マ (ma), ミ (mi), ム (mu), メ (me), モ (mo)",
            "Animal names: ライオン (raion - lion), ゾウ (zou - elephant)",
            "Practice writing: マミムメモ 10 times each",
            "Vocabulary: マウス (mausu - mouse/computer mouse)",
            "Grammar review: Particles は, を, で, から",
            "Speaking: Describe animals and pets"
        ]
    },
    18: {
        title: "Katakana や行・ら行 & Shopping",
        tasks: [
            "Learn Katakana: ヤ (ya), ユ (yu), ヨ (yo), ラ (ra), リ (ri)",
            "Shopping vocabulary: スーパー (suupaa - supermarket)",
            "Practice writing: ヤユヨラリ 10 times each",
            "Money expressions: ドル (doru - dollar), 円 (en - yen)",
            "Sentence: リンゴを買います (ringo wo kaimasu - I buy apples)",
            "Speaking: Shopping conversations"
        ]
    },
    19: {
        title: "Complete Katakana & Review",
        tasks: [
            "Learn remaining Katakana: ル (ru), レ (re), ロ (ro), ワ (wa), ン (n)",
            "Complete Katakana chart review",
            "Practice writing: ルレロワン 10 times each",
            "Vocabulary review: All Katakana words learned",
            "Reading practice: Mixed Hiragana and Katakana",
            "Speaking: Read foreign loanwords correctly"
        ]
    },
    20: {
        title: "Katakana Mastery Test",
        tasks: [
            "Katakana recognition test: All 46 characters",
            "Writing test: Write Katakana from memory",
            "Foreign word reading: Menu items, technology terms",
            "Vocabulary quiz: Days 11-19 Katakana words",
            "Mixed script reading: Hiragana + Katakana sentences",
            "Speaking assessment: Use foreign loanwords naturally"
        ]
    },
    21: {
        title: "Introduction to Basic Kanji",
        tasks: [
            "Learn first Kanji: 人 (hito/jin - person), 日 (hi/nichi - day/sun)",
            "Kanji stroke order principles",
            "Practice writing: 人日 20 times each",
            "Vocabulary: 日本人 (nihonjin - Japanese person)",
            "Reading: On-yomi vs Kun-yomi pronunciations",
            "Speaking: Use new Kanji vocabulary in sentences"
        ]
    },
    22: {
        title: "Numbers & Time Kanji",
        tasks: [
            "Learn Kanji: 一 (ichi - one), 二 (ni - two), 三 (san - three)",
            "Time Kanji: 時 (ji - time/hour)",
            "Practice writing: 一二三時 15 times each",
            "Numbers 1-10 in Kanji",
            "Time expressions: 一時 (ichiji - 1 o'clock)",
            "Speaking: Tell time using Kanji numbers"
        ]
    },
    23: {
        title: "Family & Relationship Kanji",
        tasks: [
            "Learn Kanji: 母 (haha - mother), 父 (chichi - father)",
            "Family Kanji: 子 (ko - child), 女 (onna - woman), 男 (otoko - man)",
            "Practice writing: 母父子女男 15 times each",
            "Vocabulary: 家族 (kazoku - family)",
            "Grammar: Family terms in polite form",
            "Speaking: Introduce family members using Kanji"
        ]
    },
    24: {
        title: "Nature & Elements Kanji",
        tasks: [
            "Learn Kanji: 水 (mizu - water), 火 (hi - fire), 木 (ki - tree)",
            "Nature Kanji: 山 (yama - mountain), 川 (kawa - river)",
            "Practice writing: 水火木山川 15 times each",
            "Vocabulary combinations: 火山 (kazan - volcano)",
            "Grammar: Location expressions with nature words",
            "Speaking: Describe natural scenery"
        ]
    },
    25: {
        title: "Body Parts & Health Kanji",
        tasks: [
            "Learn Kanji: 手 (te - hand), 足 (ashi - foot/leg), 目 (me - eye)",
            "Body Kanji: 口 (kuchi - mouth), 耳 (mimi - ear)",
            "Practice writing: 手足目口耳 15 times each",
            "Health vocabulary: 元気 (genki - healthy/energetic)",
            "Grammar: Body part expressions",
            "Speaking: Describe physical conditions"
        ]
    },
    26: {
        title: "Direction & Location Kanji",
        tasks: [
            "Learn Kanji: 上 (ue - up/above), 下 (shita - down/below)",
            "Direction Kanji: 左 (hidari - left), 右 (migi - right)",
            "Practice writing: 上下左右 20 times each",
            "Location vocabulary: 中 (naka - inside), 外 (soto - outside)",
            "Grammar: Location particles with Kanji",
            "Speaking: Give directions using Kanji"
        ]
    },
    27: {
        title: "Food & Eating Kanji",
        tasks: [
            "Learn Kanji: 食 (shoku/tabe - food/eat), 飲 (in/no - drink)",
            "Food Kanji: 米 (kome/bei - rice), 肉 (niku - meat)",
            "Practice writing: 食飲米肉 15 times each",
            "Vocabulary: 食べ物 (tabemono - food)",
            "Grammar: Verb forms with eating/drinking",
            "Speaking: Order food using proper Kanji vocabulary"
        ]
    },
    28: {
        title: "School & Learning Kanji",
        tasks: [
            "Learn Kanji: 学 (gaku - study), 校 (kou - school)",
            "Education Kanji: 先生 (sensei - teacher), 学生 (gakusei - student)",
            "Practice writing: 学校先生 15 times each",
            "Vocabulary: 大学 (daigaku - university)",
            "Grammar: School-related expressions",
            "Speaking: Talk about education and learning"
        ]
    },
    29: {
        title: "Work & Business Kanji",
        tasks: [
            "Learn Kanji: 会社 (kaisha - company), 仕事 (shigoto - work)",
            "Business Kanji: 店 (mise - store), 買 (ka - buy)",
            "Practice writing: 会社仕事店買 15 times each",
            "Vocabulary: お金 (okane - money)",
            "Grammar: Work-related expressions",
            "Speaking: Discuss jobs and business"
        ]
    },
    30: {
        title: "Kanji Review & Combinations",
        tasks: [
            "Review all learned Kanji (30+ characters)",
            "Practice Kanji combinations and compounds",
            "Writing test: Write Kanji from memory",
            "Reading comprehension: Simple Kanji sentences",
            "Vocabulary expansion: New combinations",
            "Speaking: Use Kanji vocabulary in conversations"
        ]
    },
    31: {
        title: "Verb Conjugation Basics",
        tasks: [
            "Learn verb groups: う-verbs, る-verbs, irregular verbs",
            "Present tense: 食べます (tabemasu - eat), 飲みます (nomimasu - drink)",
            "Practice conjugation: 10 common verbs",
            "Negative form: 食べません (tabemasen - don't eat)",
            "Grammar: Polite vs casual forms",
            "Speaking: Use present tense verbs in sentences"
        ]
    },
    32: {
        title: "Past Tense & Time Expressions",
        tasks: [
            "Past tense formation: 食べました (tabemashita - ate)",
            "Time expressions: 昨日 (kinou - yesterday), 今日 (kyou - today)",
            "Practice: Convert present to past tense",
            "Negative past: 食べませんでした (tabemasendeshita - didn't eat)",
            "Grammar: Time markers with past tense",
            "Speaking: Describe past activities"
        ]
    },
    33: {
        title: "Adjectives & Descriptions",
        tasks: [
            "い-adjectives: 大きい (ookii - big), 小さい (chiisai - small)",
            "な-adjectives: 静か (shizuka - quiet), きれい (kirei - beautiful)",
            "Practice: Adjective conjugation",
            "Negative adjectives: 大きくない (ookikunai - not big)",
            "Grammar: Adjectives with です",
            "Speaking: Describe people, places, and things"
        ]
    },
    34: {
        title: "Question Formation",
        tasks: [
            "Question words: 何 (nani - what), どこ (doko - where)",
            "Question formation: か particle",
            "Practice: 何を食べますか (nani wo tabemasuka - what do you eat?)",
            "Yes/No questions: はい/いいえ responses",
            "Grammar: Question word order",
            "Speaking: Ask and answer questions"
        ]
    },
    35: {
        title: "Existence & Location",
        tasks: [
            "Existence verbs: あります (arimasu - there is), います (imasu - there is/are)",
            "Location expressions: に particle for location",
            "Practice: 本が机にあります (hon ga tsukue ni arimasu)",
            "Animate vs inanimate existence",
            "Grammar: が particle for subject",
            "Speaking: Describe what exists where"
        ]
    },
    36: {
        title: "Desires & Preferences",
        tasks: [
            "Want expressions: 欲しい (hoshii - want), たい (tai - want to do)",
            "Preference vocabulary: 好き (suki - like), 嫌い (kirai - dislike)",
            "Practice: 水が欲しいです (mizu ga hoshii desu - I want water)",
            "Grammar: が particle with emotions",
            "Polite expressions of desire",
            "Speaking: Express wants and preferences"
        ]
    },
    37: {
        title: "Ability & Possibility",
        tasks: [
            "Ability expressions: できます (dekimasu - can do)",
            "Potential form introduction",
            "Practice: 日本語ができます (nihongo ga dekimasu - I can speak Japanese)",
            "Vocabulary: Skills and abilities",
            "Grammar: Ability with different verbs",
            "Speaking: Talk about what you can and can't do"
        ]
    },
    38: {
        title: "Giving & Receiving",
        tasks: [
            "Giving verbs: あげます (agemasu - give), くれます (kuremasu - give to me)",
            "Receiving: もらいます (moraimasu - receive)",
            "Practice: プレゼントをあげます (purezento wo agemasu)",
            "Grammar: Direction of giving/receiving",
            "Politeness levels in giving/receiving",
            "Speaking: Describe gift exchanges"
        ]
    },
    39: {
        title: "Weather & Seasons",
        tasks: [
            "Weather vocabulary: 天気 (tenki - weather), 雨 (ame - rain)",
            "Seasons: 春 (haru - spring), 夏 (natsu - summer)",
            "Practice: 今日は暑いです (kyou wa atsui desu - today is hot)",
            "Weather expressions with です/である",
            "Grammar: Weather descriptions",
            "Speaking: Discuss weather and seasons"
        ]
    },
    40: {
        title: "Transportation & Travel",
        tasks: [
            "Transport vocabulary: 電車 (densha - train), バス (basu - bus)",
            "Travel expressions: 行きます (ikimasu - go), 来ます (kimasu - come)",
            "Practice: 電車で行きます (densha de ikimasu - go by train)",
            "Grammar: で particle for means of transport",
            "Direction vocabulary: へ particle",
            "Speaking: Plan trips and discuss transportation"
        ]
    },
    41: {
        title: "Daily Routine & Habits",
        tasks: [
            "Daily activities: 起きます (okimasu - wake up), 寝ます (nemasu - sleep)",
            "Time expressions: 朝 (asa - morning), 夜 (yoru - night)",
            "Practice: 七時に起きます (shichiji ni okimasu - wake up at 7)",
            "Grammar: に particle for specific time",
            "Frequency expressions: 毎日 (mainichi - every day)",
            "Speaking: Describe daily routines"
        ]
    },
    42: {
        title: "Shopping & Money",
        tasks: [
            "Shopping vocabulary: 買い物 (kaimono - shopping), 高い (takai - expensive)",
            "Money expressions: いくら (ikura - how much)",
            "Practice: これはいくらですか (kore wa ikura desu ka - how much is this?)",
            "Numbers for prices and quantities",
            "Grammar: Shopping conversations",
            "Speaking: Role-play shopping scenarios"
        ]
    },
    43: {
        title: "Health & Body",
        tasks: [
            "Health vocabulary: 病気 (byouki - illness), 痛い (itai - painful)",
            "Body parts review with symptoms",
            "Practice: 頭が痛いです (atama ga itai desu - I have a headache)",
            "Medical expressions: 医者 (isha - doctor)",
            "Grammar: Expressing physical conditions",
            "Speaking: Describe health problems"
        ]
    },
    44: {
        title: "Hobbies & Entertainment",
        tasks: [
            "Hobby vocabulary: 趣味 (shumi - hobby), 映画 (eiga - movie)",
            "Entertainment: 音楽 (ongaku - music), スポーツ (supootsu - sports)",
            "Practice: 映画を見ます (eiga wo mimasu - watch movies)",
            "Grammar: Expressing interests and hobbies",
            "Frequency expressions with hobbies",
            "Speaking: Discuss leisure activities"
        ]
    },
    45: {
        title: "Making Plans & Invitations",
        tasks: [
            "Invitation expressions: 一緒に (issho ni - together)",
            "Planning vocabulary: 予定 (yotei - plan), 約束 (yakusoku - promise)",
            "Practice: 一緒に映画を見ませんか (issho ni eiga wo mimasen ka)",
            "Grammar: Invitation forms with ませんか",
            "Accepting/declining invitations politely",
            "Speaking: Make and respond to invitations"
        ]
    },
    46: {
        title: "Opinions & Feelings",
        tasks: [
            "Opinion expressions: 思います (omoimasu - think), 感じます (kanjimasu - feel)",
            "Feeling vocabulary: 嬉しい (ureshii - happy), 悲しい (kanashii - sad)",
            "Practice: 日本語は面白いと思います (nihongo wa omoshiroi to omoimasu)",
            "Grammar: と思います for opinions",
            "Expressing degrees of certainty",
            "Speaking: Share opinions and feelings"
        ]
    },
    47: {
        title: "Comparisons & Preferences",
        tasks: [
            "Comparison expressions: より (yori - than), 一番 (ichiban - most)",
            "Comparative vocabulary: もっと (motto - more)",
            "Practice: 日本語は英語より難しいです (nihongo wa eigo yori muzukashii desu)",
            "Grammar: Comparative and superlative forms",
            "Preference expressions review",
            "Speaking: Compare things and express preferences"
        ]
    },
    48: {
        title: "Future Plans & Goals",
        tasks: [
            "Future expressions: つもり (tsumori - intention), 予定 (yotei - plan)",
            "Goal vocabulary: 目標 (mokuhyou - goal), 夢 (yume - dream)",
            "Practice: 来年日本に行くつもりです (rainen nihon ni iku tsumori desu)",
            "Grammar: Future intention forms",
            "Time expressions for future",
            "Speaking: Discuss future plans and goals"
        ]
    },
    49: {
        title: "Cultural Expressions & Politeness",
        tasks: [
            "Politeness levels: 敬語 (keigo) introduction",
            "Cultural expressions: いただきます (itadakimasu), ごちそうさま (gochisousama)",
            "Practice: Appropriate greetings for different situations",
            "Grammar: Formal vs informal speech",
            "Cultural context in language use",
            "Speaking: Use appropriate politeness levels"
        ]
    },
    50: {
        title: "Telephone & Communication",
        tasks: [
            "Phone vocabulary: 電話 (denwa - telephone), もしもし (moshi moshi - hello)",
            "Communication expressions: 話します (hanashimasu - speak/talk)",
            "Practice: Phone conversation basics",
            "Grammar: Communication verbs and particles",
            "Formal phone expressions",
            "Speaking: Role-play phone conversations"
        ]
    },
    51: {
        title: "Directions & Navigation",
        tasks: [
            "Direction vocabulary: 真っ直ぐ (massugu - straight), 曲がる (magaru - turn)",
            "Location markers: 角 (kado - corner), 信号 (shingou - traffic light)",
            "Practice: 真っ直ぐ行って、右に曲がってください",
            "Grammar: て-form for giving directions",
            "Polite direction-giving expressions",
            "Speaking: Give and follow directions"
        ]
    },
    52: {
        title: "Restaurants & Dining",
        tasks: [
            "Restaurant vocabulary: メニュー (menyuu - menu), 注文 (chuumon - order)",
            "Dining expressions: お箸 (ohashi - chopsticks), お皿 (osara - plate)",
            "Practice: すみません、注文をお願いします",
            "Grammar: Restaurant conversation patterns",
            "Food ordering and payment expressions",
            "Speaking: Role-play restaurant scenarios"
        ]
    },
    53: {
        title: "Emergencies & Problems",
        tasks: [
            "Emergency vocabulary: 助けて (tasukete - help), 大変 (taihen - serious/terrible)",
            "Problem expressions: 困ります (komarimasu - be troubled)",
            "Practice: 助けてください (tasukete kudasai - please help)",
            "Grammar: Urgent request forms",
            "Emergency phone numbers and expressions",
            "Speaking: Handle emergency situations"
        ]
    },
    54: {
        title: "Technology & Modern Life",
        tasks: [
            "Technology vocabulary: インターネット (intaanetto), スマートフォン (sumaatofon)",
            "Modern life expressions: オンライン (onrain), アプリ (apuri)",
            "Practice: Technology-related conversations",
            "Grammar: Modern vocabulary integration",
            "Digital communication expressions",
            "Speaking: Discuss technology use"
        ]
    },
    55: {
        title: "Review & Integration I",
        tasks: [
            "Comprehensive grammar review: Particles, verb forms",
            "Vocabulary review: All major categories",
            "Practice: Complex sentence construction",
            "Reading comprehension: Longer passages",
            "Writing practice: Short paragraphs",
            "Speaking: Extended conversations"
        ]
    },
    56: {
        title: "Review & Integration II",
        tasks: [
            "Kanji review: Recognition and writing",
            "Mixed script reading: Hiragana, Katakana, Kanji",
            "Practice: Real-world text examples",
            "Grammar integration: Complex structures",
            "Vocabulary expansion: Synonyms and variations",
            "Speaking: Fluency practice"
        ]
    },
    57: {
        title: "Practical Application I",
        tasks: [
            "Real-world scenarios: Travel situations",
            "Practical conversations: Hotel, restaurant, shopping",
            "Practice: Problem-solving in Japanese",
            "Cultural context application",
            "Listening comprehension: Natural speech",
            "Speaking: Spontaneous conversation practice"
        ]
    },
    58: {
        title: "Practical Application II",
        tasks: [
            "Advanced scenarios: Work, school, social situations",
            "Complex grammar in context",
            "Practice: Formal and informal registers",
            "Cultural nuances in communication",
            "Reading: Authentic materials",
            "Speaking: Presentation skills"
        ]
    },
    59: {
        title: "Final Assessment Preparation",
        tasks: [
            "Comprehensive review: All 58 days of material",
            "Self-assessment: Identify weak areas",
            "Practice: Intensive review of problem areas",
            "Mock tests: Reading, writing, listening, speaking",
            "Final vocabulary and Kanji review",
            "Speaking: Confidence building exercises"
        ]
    },
    60: {
        title: "Final Mastery Assessment",
        tasks: [
            "Final Hiragana and Katakana test (100% accuracy goal)",
            "Kanji recognition and writing test (50+ characters)",
            "Comprehensive vocabulary test (500+ words)",
            "Grammar application test: All learned structures",
            "Reading comprehension: Mixed script passages",
            "Speaking assessment: 10-minute conversation in Japanese"
        ]
    }
};

// Hiragana and Katakana data
const hiraganaData = [
    {char: 'あ', romaji: 'a'}, {char: 'い', romaji: 'i'}, {char: 'う', romaji: 'u'}, {char: 'え', romaji: 'e'}, {char: 'お', romaji: 'o'},
    {char: 'か', romaji: 'ka'}, {char: 'き', romaji: 'ki'}, {char: 'く', romaji: 'ku'}, {char: 'け', romaji: 'ke'}, {char: 'こ', romaji: 'ko'},
    {char: 'さ', romaji: 'sa'}, {char: 'し', romaji: 'shi'}, {char: 'す', romaji: 'su'}, {char: 'せ', romaji: 'se'}, {char: 'そ', romaji: 'so'},
    {char: 'た', romaji: 'ta'}, {char: 'ち', romaji: 'chi'}, {char: 'つ', romaji: 'tsu'}, {char: 'て', romaji: 'te'}, {char: 'と', romaji: 'to'},
    {char: 'な', romaji: 'na'}, {char: 'に', romaji: 'ni'}, {char: 'ぬ', romaji: 'nu'}, {char: 'ね', romaji: 'ne'}, {char: 'の', romaji: 'no'},
    {char: 'は', romaji: 'ha'}, {char: 'ひ', romaji: 'hi'}, {char: 'ふ', romaji: 'fu'}, {char: 'へ', romaji: 'he'}, {char: 'ほ', romaji: 'ho'},
    {char: 'ま', romaji: 'ma'}, {char: 'み', romaji: 'mi'}, {char: 'む', romaji: 'mu'}, {char: 'め', romaji: 'me'}, {char: 'も', romaji: 'mo'},
    {char: 'や', romaji: 'ya'}, {char: 'ゆ', romaji: 'yu'}, {char: 'よ', romaji: 'yo'},
    {char: 'ら', romaji: 'ra'}, {char: 'り', romaji: 'ri'}, {char: 'る', romaji: 'ru'}, {char: 'れ', romaji: 're'}, {char: 'ろ', romaji: 'ro'},
    {char: 'わ', romaji: 'wa'}, {char: 'ん', romaji: 'n'}
];

const katakanaData = [
    {char: 'ア', romaji: 'a'}, {char: 'イ', romaji: 'i'}, {char: 'ウ', romaji: 'u'}, {char: 'エ', romaji: 'e'}, {char: 'オ', romaji: 'o'},
    {char: 'カ', romaji: 'ka'}, {char: 'キ', romaji: 'ki'}, {char: 'ク', romaji: 'ku'}, {char: 'ケ', romaji: 'ke'}, {char: 'コ', romaji: 'ko'},
    {char: 'サ', romaji: 'sa'}, {char: 'シ', romaji: 'shi'}, {char: 'ス', romaji: 'su'}, {char: 'セ', romaji: 'se'}, {char: 'ソ', romaji: 'so'},
    {char: 'タ', romaji: 'ta'}, {char: 'チ', romaji: 'chi'}, {char: 'ツ', romaji: 'tsu'}, {char: 'テ', romaji: 'te'}, {char: 'ト', romaji: 'to'},
    {char: 'ナ', romaji: 'na'}, {char: 'ニ', romaji: 'ni'}, {char: 'ヌ', romaji: 'nu'}, {char: 'ネ', romaji: 'ne'}, {char: 'ノ', romaji: 'no'},
    {char: 'ハ', romaji: 'ha'}, {char: 'ヒ', romaji: 'hi'}, {char: 'フ', romaji: 'fu'}, {char: 'ヘ', romaji: 'he'}, {char: 'ホ', romaji: 'ho'},
    {char: 'マ', romaji: 'ma'}, {char: 'ミ', romaji: 'mi'}, {char: 'ム', romaji: 'mu'}, {char: 'メ', romaji: 'me'}, {char: 'モ', romaji: 'mo'},
    {char: 'ヤ', romaji: 'ya'}, {char: 'ユ', romaji: 'yu'}, {char: 'ヨ', romaji: 'yo'},
    {char: 'ラ', romaji: 'ra'}, {char: 'リ', romaji: 'ri'}, {char: 'ル', romaji: 'ru'}, {char: 'レ', romaji: 're'}, {char: 'ロ', romaji: 'ro'},
    {char: 'ワ', romaji: 'wa'}, {char: 'ン', romaji: 'n'}
];

// Vocabulary data for flashcards
const vocabularyData = [
    {japanese: 'こんにちは', romaji: 'konnichiwa', english: 'hello'},
    {japanese: 'ありがとう', romaji: 'arigatou', english: 'thank you'},
    {japanese: 'すみません', romaji: 'sumimasen', english: 'excuse me/sorry'},
    {japanese: '私', romaji: 'watashi', english: 'I/me'},
    {japanese: '家', romaji: 'ie', english: 'house'},
    {japanese: '学校', romaji: 'gakkou', english: 'school'},
    {japanese: '先生', romaji: 'sensei', english: 'teacher'},
    {japanese: '学生', romaji: 'gakusei', english: 'student'},
    {japanese: '友達', romaji: 'tomodachi', english: 'friend'},
    {japanese: '家族', romaji: 'kazoku', english: 'family'},
    {japanese: '母', romaji: 'haha', english: 'mother'},
    {japanese: '父', romaji: 'chichi', english: 'father'},
    {japanese: '水', romaji: 'mizu', english: 'water'},
    {japanese: '食べ物', romaji: 'tabemono', english: 'food'},
    {japanese: '本', romaji: 'hon', english: 'book'},
    {japanese: '映画', romaji: 'eiga', english: 'movie'},
    {japanese: '音楽', romaji: 'ongaku', english: 'music'},
    {japanese: '時間', romaji: 'jikan', english: 'time'},
    {japanese: '今日', romaji: 'kyou', english: 'today'},
    {japanese: '明日', romaji: 'ashita', english: 'tomorrow'}
];

// Global variables
let currentSection = 'home';
let currentFlashcardIndex = 0;
let currentFlashcardSet = [];
let isFlashcardFlipped = false;

// Local Storage Keys
const STORAGE_KEYS = {
    PROGRESS: 'japanese_study_progress',
    STATS: 'japanese_study_stats',
    STREAK: 'japanese_study_streak',
    LAST_STUDY: 'japanese_last_study_date'
};

// Progress tracking
let studyProgress = {
    completedDays: [],
    currentStreak: 0,
    totalStudyTime: 0,
    practiceStats: {
        flashcardsCorrect: 0,
        flashcardsIncorrect: 0,
        totalPracticeTime: 0
    },
    dayPracticeScores: {}, // Track practice scores for each day
    practiceAvailableDays: [] // Days that have been studied and can be practiced
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadProgress();
});

function initializeApp() {
    setupNavigation();
    generateStudyPlan();
    generateKanaCharts();
    updateProgressDisplay();
    setupMobileMenu();
    updateProgressOverview();
}

// Local Storage Functions
function saveProgress() {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(studyProgress));
}

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (saved) {
        studyProgress = { ...studyProgress, ...JSON.parse(saved) };
    }
    updateStreak();
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastStudy = localStorage.getItem(STORAGE_KEYS.LAST_STUDY);
    
    if (lastStudy) {
        const lastDate = new Date(lastStudy);
        const todayDate = new Date(today);
        const diffTime = todayDate - lastDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Consecutive day
            studyProgress.currentStreak++;
        } else if (diffDays > 1) {
            // Streak broken
            studyProgress.currentStreak = 0;
        }
    }
    
    localStorage.setItem(STORAGE_KEYS.LAST_STUDY, today);
    saveProgress();
}

// Progress Overview
function updateProgressOverview() {
    const completedCount = studyProgress.completedDays.length;
    const remainingCount = 60 - completedCount;
    const streakCount = studyProgress.currentStreak;
    
    const completedElement = document.getElementById('completedDays');
    const streakElement = document.getElementById('currentStreak');
    
    if (completedElement) completedElement.textContent = completedCount;
    if (streakElement) streakElement.textContent = streakCount;
}

// Navigation functions
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            showSection(targetSection);
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentSection = sectionId;
    
    // Close mobile menu if open
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');
}

// Mobile menu setup
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Study plan functions
function generateStudyPlan() {
    const daysGrid = document.getElementById('daysGrid');
    const completedDays = getCompletedDays();
    
    for (let day = 1; day <= 60; day++) {
        const dayData = studyPlan[day];
        const isCompleted = completedDays.includes(day);
        const isPracticeAvailable = studyProgress.practiceAvailableDays.includes(day);
        const practiceScore = studyProgress.dayPracticeScores[day] || 0;
        const hasPassedPractice = practiceScore >= 50;
        
        let cardClass = 'day-card';
        if (isCompleted) cardClass += ' completed';
        else if (isPracticeAvailable) cardClass += ' practice-available';
        
        const dayCard = document.createElement('div');
        dayCard.className = cardClass;
        dayCard.innerHTML = `
            <div class="day-header">
                <div class="day-number">
                    Day ${day}
                    ${isCompleted ? '<span style="color: #4CAF50; margin-left: 10px;">✓</span>' : ''}
                </div>
                ${practiceScore > 0 ? `<div class="practice-score ${hasPassedPractice ? 'pass' : 'fail'}">${practiceScore}%</div>` : ''}
            </div>
            <h3>${dayData.title}</h3>
            <ul class="day-tasks">
                ${dayData.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
            <div class="day-actions">
                <button class="complete-btn ${isCompleted ? 'completed' : ''}" 
                        onclick="toggleDayCompletion(${day})"
                        ${!hasPassedPractice && isPracticeAvailable ? 'disabled' : ''}>
                    ${isCompleted ? 'Completed' : (hasPassedPractice ? 'Mark Complete' : 'Study First')}
                </button>
                <button class="practice-btn" 
                        onclick="startDayPractice(${day})"
                        ${!isPracticeAvailable ? 'disabled' : ''}>
                    ${isPracticeAvailable ? 'Practice' : 'Study First'}
                </button>
            </div>
        `;
        daysGrid.appendChild(dayCard);
    }
}

function jumpToDay() {
    const dayInput = document.getElementById('dayJump');
    const day = parseInt(dayInput.value);
    
    if (day >= 1 && day <= 60) {
        const dayCard = document.querySelector(`.day-card:nth-child(${day})`);
        if (dayCard) {
            dayCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            dayCard.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                dayCard.style.animation = '';
            }, 1000);
        }
    }
}

function toggleDayCompletion(day) {
    const dayIndex = studyProgress.completedDays.indexOf(day);
    
    if (dayIndex > -1) {
        studyProgress.completedDays.splice(dayIndex, 1);
    } else {
        studyProgress.completedDays.push(day);
        if (!studyProgress.practiceAvailableDays.includes(day)) {
            studyProgress.practiceAvailableDays.push(day);
        }
        updateStreak();
    }
    
    saveProgress();
    updateDayCard(day);
    updateProgressDisplay();
    updateProgressOverview();
}

// Practice day functionality
function startDayPractice(dayNumber) {
    if (!studyProgress.practiceAvailableDays.includes(dayNumber)) {
        alert('Complete this day first to unlock practice!');
        return;
    }
    
    // Switch to practice section
    showSection('practice');
    
    // Set up practice for this specific day
    currentPracticeDay = dayNumber;
    setupDayPractice(dayNumber);
}

let currentPracticeDay = null;
let dayPracticeCards = [];
let dayPracticeIndex = 0;
let dayPracticeCorrect = 0;
let dayPracticeTotal = 0;

function setupDayPractice(dayNumber) {
    const dayData = studyPlan[dayNumber];
    if (!dayData) return;
    
    // Create practice cards based on day content
    dayPracticeCards = generatePracticeCards(dayData);
    dayPracticeIndex = 0;
    dayPracticeCorrect = 0;
    dayPracticeTotal = 0;
    
    // Update UI
    updateDayPracticeDisplay();
    showDayPracticeCard();
}

function generatePracticeCards(dayData) {
    const cards = [];
    
    // Generate cards based on day content
    if (dayNumber <= 10) {
        // Hiragana practice
        cards.push(
            { question: 'あ', answer: 'a', type: 'hiragana' },
            { question: 'い', answer: 'i', type: 'hiragana' },
            { question: 'う', answer: 'u', type: 'hiragana' },
            { question: 'え', answer: 'e', type: 'hiragana' },
            { question: 'お', answer: 'o', type: 'hiragana' }
        );
    } else if (dayNumber <= 20) {
        // Katakana practice
        cards.push(
            { question: 'ア', answer: 'a', type: 'katakana' },
            { question: 'イ', answer: 'i', type: 'katakana' },
            { question: 'ウ', answer: 'u', type: 'katakana' },
            { question: 'エ', answer: 'e', type: 'katakana' },
            { question: 'オ', answer: 'o', type: 'katakana' }
        );
    } else {
        // Vocabulary and grammar practice
        cards.push(
            { question: 'こんにちは', answer: 'Hello', type: 'vocabulary' },
            { question: 'ありがとう', answer: 'Thank you', type: 'vocabulary' },
            { question: 'すみません', answer: 'Excuse me', type: 'vocabulary' },
            { question: 'はい', answer: 'Yes', type: 'vocabulary' },
            { question: 'いいえ', answer: 'No', type: 'vocabulary' }
        );
    }
    
    return cards.sort(() => Math.random() - 0.5); // Shuffle cards
}

function showDayPracticeCard() {
    if (dayPracticeIndex >= dayPracticeCards.length) {
        finishDayPractice();
        return;
    }
    
    const card = dayPracticeCards[dayPracticeIndex];
    const practiceContainer = document.getElementById('practice-container');
    
    practiceContainer.innerHTML = `
        <div class="day-practice-card">
            <div class="practice-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(dayPracticeIndex / dayPracticeCards.length) * 100}%"></div>
                </div>
                <div class="progress-text">${dayPracticeIndex + 1} / ${dayPracticeCards.length}</div>
            </div>
            <div class="practice-card-content">
                <div class="practice-question">${card.question}</div>
                <div class="practice-type">${card.type}</div>
                <input type="text" id="practice-answer" placeholder="Enter your answer..." class="practice-input">
                <div class="practice-buttons">
                    <button onclick="checkDayPracticeAnswer()" class="check-answer-btn">Check Answer</button>
                    <button onclick="skipDayPracticeCard()" class="skip-btn">Skip</button>
                </div>
            </div>
        </div>
    `;
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('practice-answer').focus();
    }, 100);
}

function checkDayPracticeAnswer() {
    const userAnswer = document.getElementById('practice-answer').value.trim().toLowerCase();
    const correctAnswer = dayPracticeCards[dayPracticeIndex].answer.toLowerCase();
    
    dayPracticeTotal++;
    
    if (userAnswer === correctAnswer) {
        dayPracticeCorrect++;
        showFeedback('Correct! 🎉', 'correct');
    } else {
        showFeedback(`Incorrect. The answer is: ${dayPracticeCards[dayPracticeIndex].answer}`, 'incorrect');
    }
    
    setTimeout(() => {
        dayPracticeIndex++;
        showDayPracticeCard();
    }, 2000);
}

function skipDayPracticeCard() {
    dayPracticeTotal++;
    dayPracticeIndex++;
    showDayPracticeCard();
}

function showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `practice-feedback ${type}`;
    feedback.textContent = message;
    
    document.querySelector('.practice-card-content').appendChild(feedback);
}

function finishDayPractice() {
    const score = Math.round((dayPracticeCorrect / dayPracticeTotal) * 100);
    studyProgress.dayPracticeScores[currentPracticeDay] = score;
    
    const practiceContainer = document.getElementById('practice-container');
    practiceContainer.innerHTML = `
        <div class="practice-results">
            <h2>Practice Complete! 🎌</h2>
            <div class="score-display">
                <div class="score-circle ${score >= 50 ? 'pass' : 'fail'}">
                    <span class="score-number">${score}%</span>
                    <span class="score-label">${score >= 50 ? 'PASSED' : 'NEEDS PRACTICE'}</span>
                </div>
            </div>
            <div class="score-details">
                <p>Correct: ${dayPracticeCorrect} / ${dayPracticeTotal}</p>
                <p>${score >= 50 ? 'Great job! You can now mark this day as complete.' : 'Keep practicing to reach 50% and complete this day.'}</p>
            </div>
            <div class="practice-actions">
                <button onclick="retryDayPractice()" class="retry-btn">Practice Again</button>
                ${score >= 50 ? `<button onclick="completeDayFromPractice()" class="complete-day-btn">Mark Day Complete</button>` : ''}
                <button onclick="backToStudyPlan()" class="back-btn">Back to Study Plan</button>
            </div>
        </div>
    `;
    
    saveProgress();
}

function retryDayPractice() {
    setupDayPractice(currentPracticeDay);
}

function completeDayFromPractice() {
    if (!studyProgress.completedDays.includes(currentPracticeDay)) {
        studyProgress.completedDays.push(currentPracticeDay);
        updateStreak();
        saveProgress();
    }
    backToStudyPlan();
}

function backToStudyPlan() {
    showSection('study-plan');
    generateStudyPlan();
    updateProgressOverview();
}

function updateDayPracticeDisplay() {
    // This function can be used to update any day practice specific UI elements
}

// Start practice for specific day
function startDayPractice(dayNumber) {
    showSection('practice');
    
    // Set practice day
    const daySelect = document.getElementById('practiceType');
    if (daySelect) {
        daySelect.value = 'vocabulary';
    }
    
    updatePracticeStats();
}

function updateDayCard(day) {
    const completedDays = getCompletedDays();
    const dayCards = document.querySelectorAll('.day-card');
    const dayCard = dayCards[day - 1];
    const completeBtn = dayCard.querySelector('.complete-btn');
    
    if (completedDays.includes(day)) {
        dayCard.classList.add('completed');
        completeBtn.classList.add('completed');
        completeBtn.textContent = 'Completed';
    } else {
        dayCard.classList.remove('completed');
        completeBtn.classList.remove('completed');
        completeBtn.textContent = 'Mark Complete';
    }
}

// Progress tracking functions
function getCompletedDays() {
    return studyProgress.completedDays;
}

// Practice Statistics
function updatePracticeStats() {
    const stats = studyProgress.practiceStats;
    const total = stats.flashcardsCorrect + stats.flashcardsIncorrect;
    const accuracy = total > 0 ? Math.round((stats.flashcardsCorrect / total) * 100) : 0;
    
    // Update practice stats display if elements exist
    const totalElement = document.getElementById('total-cards');
    const accuracyElement = document.getElementById('accuracy-rate');
    const timeElement = document.getElementById('study-time');
    
    if (totalElement) totalElement.textContent = total;
    if (accuracyElement) accuracyElement.textContent = `${accuracy}%`;
    if (timeElement) timeElement.textContent = `${Math.round(stats.totalPracticeTime / 60)}m`;
}

function updateProgressDisplay() {
    const completedDays = getCompletedDays();
    const totalDays = 60;
    const progressPercentage = Math.round((completedDays.length / totalDays) * 100);
    
    document.getElementById('completedDays').textContent = completedDays.length;
    document.getElementById('totalProgress').textContent = `${progressPercentage}%`;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    
    updateMotivationalMessage(completedDays.length, progressPercentage);
}

function updateStreak() {
    const completedDays = getCompletedDays().sort((a, b) => a - b);
    let currentStreak = 0;
    let maxStreak = 0;
    let tempStreak = 0;
    
    for (let i = 0; i < completedDays.length; i++) {
        if (i === 0 || completedDays[i] === completedDays[i-1] + 1) {
            tempStreak++;
        } else {
            maxStreak = Math.max(maxStreak, tempStreak);
            tempStreak = 1;
        }
    }
    
    currentStreak = tempStreak;
    document.getElementById('currentStreak').textContent = currentStreak;
}

function updateMotivationalMessage(completedDays, progressPercentage) {
    const messageElement = document.getElementById('motivationalMessage');
    let message = '';
    
    if (completedDays === 0) {
        message = "Start your Japanese learning journey today! 頑張って！";
    } else if (completedDays < 7) {
        message = "Great start! Keep building that daily habit. 素晴らしい！";
    } else if (completedDays < 14) {
        message = "One week down! You're developing great momentum. すごい！";
    } else if (completedDays < 30) {
        message = "Halfway through the month! Your dedication is showing. 頑張れ！";
    } else if (completedDays < 45) {
        message = "You're over halfway there! Amazing progress. 素晴らしい進歩！";
    } else if (completedDays < 60) {
        message = "Almost there! The finish line is in sight. もう少し！";
    } else {
        message = "Congratulations! You've completed the 60-day challenge! おめでとう！";
    }
    
    messageElement.textContent = message;
}

// Flashcard functions
let practiceStartTime = null;

// MCQ Practice Variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let mcqScore = 0;
let totalQuestions = 20;
let answeredQuestions = 0;

function startPractice() {
    const practiceType = document.getElementById('practiceType').value;
    
    // Generate MCQ questions based on practice type
    generateMCQQuestions(practiceType);
    
    // Reset quiz state
    currentQuestionIndex = 0;
    selectedAnswer = null;
    mcqScore = 0;
    answeredQuestions = 0;
    
    // Display first question
    displayCurrentQuestion();
    updateQuestionCounter();
    updateScoreDisplay();
    
    // Setup event listeners
    setupMCQEventListeners();
    
    practiceStartTime = Date.now();
}

function generateMCQQuestions(practiceType) {
    let sourceData = [];
    
    switch(practiceType) {
        case 'hiragana':
            sourceData = hiraganaData;
            break;
        case 'katakana':
            sourceData = katakanaData;
            break;
        case 'vocabulary':
            sourceData = vocabularyData;
            break;
        default:
            sourceData = hiraganaData;
    }
    
    // Shuffle and select questions
    const shuffled = [...sourceData].sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, totalQuestions).map(item => {
        let question, correctAnswer, character;
        
        if (practiceType === 'vocabulary') {
            const incorrectOptions = getIncorrectOptions(item, sourceData, 3);
            const allOptions = [item.english, ...incorrectOptions].sort(() => Math.random() - 0.5);
            
            return {
                question: `What does "${item.japanese}" mean?`,
                character: item.japanese,
                correctAnswer: item.english,
                options: allOptions,
                correctIndex: allOptions.indexOf(item.english)
            };
        } else {
            // For hiragana/katakana - fix property names
            const incorrectOptions = getIncorrectOptions(item, sourceData, 3);
            const allOptions = [item.romaji, ...incorrectOptions].sort(() => Math.random() - 0.5);
            
            return {
                question: `What is the reading of ${item.char}?`,
                character: item.char,
                correctAnswer: item.romaji,
                options: allOptions,
                correctIndex: allOptions.indexOf(item.romaji)
            };
        }
    });
}

function getIncorrectOptions(correctItem, sourceData, count) {
    let filtered, correctValue;
    
    if (correctItem.english) {
        // Vocabulary data
        correctValue = correctItem.english;
        filtered = sourceData.filter(item => item.english !== correctValue);
        const shuffled = filtered.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count).map(item => item.english);
    } else {
        // Hiragana/Katakana data
        correctValue = correctItem.romaji;
        filtered = sourceData.filter(item => item.romaji !== correctValue);
        const shuffled = filtered.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count).map(item => item.romaji);
    }
}

function displayCurrentQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showQuizResults();
        return;
    }
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.option = index;
        button.onclick = function() {
            // Remove previous selection
            document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedAnswer = index;
        };
        optionsContainer.appendChild(button);
    });
    // Reset UI state
    selectedAnswer = null;
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('nextQuestionBtn').style.display = 'none';
}

function setupMCQEventListeners() {
    // Set up listeners only ONCE
    if (!setupMCQEventListeners.hasRun) {
        document.getElementById('submitBtn').onclick = submitAnswer;
        document.getElementById('nextQuestionBtn').onclick = nextQuestion;
        document.getElementById('resetQuizBtn').onclick = resetQuiz;
        setupMCQEventListeners.hasRun = true;
    }
}
setupMCQEventListeners.hasRun = false;

function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctIndex;
    if (isCorrect) mcqScore++;
    answeredQuestions++;
    // Show correct/incorrect feedback
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    updateScoreDisplay();
}

function nextQuestion() {
    currentQuestionIndex++;
    displayCurrentQuestion();
    updateQuestionCounter();
}

function updateQuestionCounter() {
    const counter = document.getElementById('question-counter');
    counter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

function updateScoreDisplay() {
    document.getElementById('current-score').textContent = mcqScore;
    document.getElementById('total-questions').textContent = totalQuestions;
    const percentage = answeredQuestions > 0 ? Math.round((mcqScore / answeredQuestions) * 100) : 0;
    document.getElementById('percentage-score').textContent = `${percentage}%`;
}

function showQuizResults() {
    const percentage = Math.round((mcqScore / totalQuestions) * 100);
    const passed = percentage >= 50;
    const resultMessage = `
        Quiz Complete!\n
        Score: ${mcqScore}/${totalQuestions} (${percentage}%)\n
        ${passed ? 'Congratulations! You passed!' : 'Keep practicing to improve your score!'}
    `;
    alert(resultMessage);
    updatePracticeStats(mcqScore, totalQuestions);
}

function resetQuiz() {
    if (confirm('Are you sure you want to reset the quiz?')) {
        startPractice();
    }
}

// Reference section functions
function generateKanaCharts() {
    generateKanaChart('hiragana-chart', hiraganaData);
    generateKanaChart('katakana-chart', katakanaData);
}

function generateKanaChart(containerId, data) {
    const container = document.getElementById(containerId);
    const grid = document.createElement('div');
    grid.className = 'kana-grid';
    
    data.forEach(item => {
        const kanaItem = document.createElement('div');
        kanaItem.className = 'kana-item';
        kanaItem.innerHTML = `
            <div class="kana-char">${item.char}</div>
            <div class="kana-romaji">${item.romaji}</div>
        `;
        grid.appendChild(kanaItem);
    });
    
    container.appendChild(grid);
}

function showReference(type) {
    // Hide all reference content
    const containers = document.querySelectorAll('.chart-container, .guides-container');
    containers.forEach(container => container.classList.remove('active'));
    
    // Show selected content
    const targetContainer = document.getElementById(type === 'guides' ? 'guides' : `${type}-chart`);
    if (targetContainer) {
        targetContainer.classList.add('active');
    }
    
    // Update tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`[onclick="showReference('${type}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Add CSS animation for day card pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize progress tracking on page load
window.addEventListener('load', () => {
    updateProgressDisplay();
    updateProgressOverview();
});// ...existing code...

function displayCurrentQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showQuizResults();
        return;
    }
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.option = index;
        button.onclick = function() {
            // Remove previous selection
            document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedAnswer = index;
        };
        optionsContainer.appendChild(button);
    });
    // Reset UI state
    selectedAnswer = null;
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('nextQuestionBtn').style.display = 'none';
}

function setupMCQEventListeners() {
    // Set up listeners only ONCE
    if (!setupMCQEventListeners.hasRun) {
        document.getElementById('submitBtn').onclick = submitAnswer;
        document.getElementById('nextQuestionBtn').onclick = nextQuestion;
        document.getElementById('resetQuizBtn').onclick = resetQuiz;
        setupMCQEventListeners.hasRun = true;
    }
}
setupMCQEventListeners.hasRun = false;

function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctIndex;
    if (isCorrect) mcqScore++;
    answeredQuestions++;
    // Show correct/incorrect feedback
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    updateScoreDisplay();
}

function nextQuestion() {
    currentQuestionIndex++;
    displayCurrentQuestion();
    updateQuestionCounter();
}

function updateQuestionCounter() {
    const counter = document.getElementById('question-counter');
    counter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

function updateScoreDisplay() {
    document.getElementById('current-score').textContent = mcqScore;
    document.getElementById('total-questions').textContent = totalQuestions;
    const percentage = answeredQuestions > 0 ? Math.round((mcqScore / answeredQuestions) * 100) : 0;
    document.getElementById('percentage-score').textContent = `${percentage}%`;
}

function showQuizResults() {
    const percentage = Math.round((mcqScore / totalQuestions) * 100);
    const passed = percentage >= 50;
    const resultMessage = `
        Quiz Complete!\n
        Score: ${mcqScore}/${totalQuestions} (${percentage}%)\n
        ${passed ? 'Congratulations! You passed!' : 'Keep practicing to improve your score!'}
    `;
    alert(resultMessage);
    updatePracticeStats(mcqScore, totalQuestions);
}

function resetQuiz() {
    if (confirm('Are you sure you want to reset the quiz?')) {
        startPractice();
    }
}

// ...existing code...