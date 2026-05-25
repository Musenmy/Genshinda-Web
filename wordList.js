const targetStrings = {
    alan: [
        {
            plain: "アランナラはアランラカラリをやりながら南から来た。",
            parsed: "あらんならはあらんらからりをやりながらみなみからきた",
        },
        {
            plain: "ナララナはパティサラを抱えながら北から来た。",
            parsed: "なららなはぱてぃさらをかかえながらきたからきた",
        },
        {
            plain: "パティサラを抱えてたナララナはアランラカラリをやってた",
            parsed: "ぱてぃさらをかかえてたなららなはあらんらからりをやってた",
        },
        {
            plain: "アランナラを連れて酒場でランバドを探そうとしたが、",
            parsed: "あらんならをつれてさかばでらんばどをさがそうとしたが",
        },
        {
            plain: "アランラカラリをやってたアランナラはパティサラを抱えてた",
            parsed: "あらんらからりをやってたあらんならはぱてぃさらをかかえてた",
        },
        {
            plain: "ナララナを連れてヴァナラーナに行きたかった",
            parsed: "なららなをつれてヴぁならーなにいきたかった",
        },
        {
            plain: "ナララナはアランナラに逆らえず、アランナラと一緒に",
            parsed: "なららなはあらんならにさからえずあらんならといっしょに",
        },
        {
            plain: "ヴァナンラナへ行ってアランマという名のアランナラに会った…",
            parsed: "ヴぁなんらなへいってあらんまというなのあらんならにあった",
        },
    ],
    general: [
        {
            plain: "桃都",
            parsed: "とうと",
        },
        {
            plain: "擘那",
            parsed: "はくな",
        },
        {
            plain: "玉紋茶葉蛋",
            parsed: "ぎょくもんちゃばたん",
        },
        {
            plain: "沈玉茶",
            parsed: "ちんぎょくちゃ",
        },
        {
            plain: "仔鳩の茶葉燻製",
            parsed: "こばとのちゃばくんせい",
        },
        {
            plain: "清心の花パイ",
            parsed: "せいしんのはなパイ",
        },
        {
            plain: "花に翦玉",
            parsed: "はなにせんぎょく",
        },
        {
            plain: "「胡桃・梅の枝」",
            parsed: "ふーたおうめのえだ",
        },
        {
            plain: "「鍾離・帝銭」",
            parsed: "しょうりていせん",
        },
        {
            plain: "籐人形",
            parsed: "とうにんぎょう",
        },
        {
            plain: "海灯祭",
            parsed: "かいとうさい",
        },
        {
            plain: "春光が輝く桃符",
            parsed: "しゅんこうがかがやくとうふ",
        },
        {
            plain: "八奇乱闘",
            parsed: "はっきらんとう",
        },
        {
            plain: "灯下演武",
            parsed: "とうかえんぶ",
        },
        {
            plain: "祝灯状",
            parsed: "しゅくとうじょう",
        },
        {
            plain: "八奇仙",
            parsed: "はっきせん",
        },
        {
            plain: "朱赤引火冥蝶",
            parsed: "しゅせきいんかめいちょう",
        },
        {
            plain: "銀翎翦玉玄鳥",
            parsed: "ぎんりょうせんぎょくげんちょう",
        },
        {
            plain: "金目乗黄月駒",
            parsed: "きんもくじょうおうげっく",
        },
        {
            plain: "瓢箪真人",
            parsed: "ひょうたんしんじん",
        },
        {
            plain: "鑑真人",
            parsed: "かがみしんじん",
        },
        {
            plain: "雲来釣爺",
            parsed: "うんらいちょうや",
        },
        {
            plain: "万象風角霊官",
            parsed: "ばんしょうふうかくれんかん",
        },
        {
            plain: "サンサ",
            parsed: "サンサ",
        },
        {
            plain: "夢見月瑞希",
            parsed: "ゆめみづきみずき",
        },
        {
            plain: "エドガー",
            parsed: "エドガー",
        },
        {
            plain: "シグウィン",
            parsed: "シグウィン",
        },
        {
            plain: "クロリンデ",
            parsed: "クロリンデ",
        },
        {
            plain: "黒曜石の老婆",
            parsed: "グラスバーバ",
        },
        {
            plain: "山の王",
            parsed: "やまのおう",
        },
        {
            plain: "夜神",
            parsed: "やがみ",
        },
        {
            plain: "グスレッド",
            parsed: "グスレッド",
        },
        {
            plain: "コヨニ",
            parsed: "コヨニ",
        },
        {
            plain: "マニョーヤ",
            parsed: "マニョーヤ",
        },
        {
            plain: "アコミト",
            parsed: "アコミト",
        },
        {
            plain: "マターガ",
            parsed: "マターガ",
        },
        {
            plain: "ヒネ",
            parsed: "ヒネ",
        },
        {
            plain: "ハウミア",
            parsed: "ハウミア",
        },
        {
            plain: "アカトル",
            parsed: "アカトル",
        },
        {
            plain: "エンテレゴ",
            parsed: "エンテレゴ",
        },
        {
            plain: "マソウ",
            parsed: "マソウ",
        },
        {
            plain: "モンリュソン",
            parsed: "モンリュソン",
        },
        {
            plain: "グルドック",
            parsed: "グルドック",
        },
        {
            plain: "アリエ",
            parsed: "アリエ",
        },
        {
            plain: "アイワスティ",
            parsed: "アイワスティ",
        },
        {
            plain: "ベスーチ",
            parsed: "ベスーチ",
        },
        {
            plain: "チョガン",
            parsed: "チョガン",
        },
        {
            plain: "ウィツィリン",
            parsed: "ウィツィリン",
        },
        {
            plain: "オティラ",
            parsed: "オティラ",
        },
        {
            plain: "トラポ",
            parsed: "トラポ",
        },
        {
            plain: "ヴァレサ",
            parsed: "ヴァレサ",
        },
        {
            plain: "カクーク",
            parsed: "カクーク",
        },
        {
            plain: "スラーイン",
            parsed: "スラーイン",
        },
        {
            plain: "石碑の記録",
            parsed: "せきひのきろく",
        },
        {
            plain: "謎土の護符",
            parsed: "めいどのごふ",
        },
        {
            plain: "蝕滅の焔角",
            parsed: "しょくめつのえんかく",
        },
        {
            plain: "蝕滅の陽炎",
            parsed: "しょくめつのかげろう",
        },
        {
            plain: "蝕滅の羽鱗",
            parsed: "しょくめつのうりん",
        },
        {
            plain: "グーシィ・トース",
            parsed: "グーシィトース",
        },
        {
            plain: "蝕まれし源焔の主",
            parsed: "むしばまれしげんえんのあるじ",
        },
        {
            plain: "迷える霊覚の修験者",
            parsed: "まよえるれいかくのしゅげんじゃ",
        },
        {
            plain: "原火の玉座",
            parsed: "げんかのぎょくざ",
        },
        {
            plain: "ジャンペ楽器店",
            parsed: "ジャンペがっきてん",
        },
        {
            plain: "炎岩の歌",
            parsed: "えんがんのうた",
        },
        {
            plain: "タタコス",
            parsed: "タタコス",
        },
        {
            plain: "集いし炎の賛歌",
            parsed: "つどいしほのおのさんか",
        },
        {
            plain: "唯一無二の秘法",
            parsed: "ゆいいつむにのひほう",
        },
        {
            plain: "綺宴の鼓",
            parsed: "きえんのこ",
        },
        {
            plain: "ジャンペ",
            parsed: "ジャンペ",
        },
        {
            plain: "ウクレレ",
            parsed: "ウクレレ",
        },
        {
            plain: "残雪に咲く紅",
            parsed: "ざんせつにさくくれない",
        },
        {
            plain: "大つごもりの歓声",
            parsed: "おおつごもりのかんせい",
        },
        {
            plain: "双駆輪",
            parsed: "そうくりん",
        },
        {
            plain: "イツパパ",
            parsed: "イツパパ",
        },
        {
            plain: "灼烈の反魂の詩",
            parsed: "しゃくれつのはんごんのうた",
        },
        {
            plain: "竜の帰巣",
            parsed: "りゅうのきそう",
        },
        {
            plain: "進め！進め！進め！",
            parsed: "すすめすすめすすめ",
        },
        {
            plain: "換羽期",
            parsed: "かんうき",
        },
        {
            plain: "勇士の姿",
            parsed: "ゆうしのすがた",
        },
        {
            plain: "英雄たちのお墨付き！",
            parsed: "えいゆうたちのおすみつき",
        },
        {
            plain: "千烈の日輪",
            parsed: "せんれつのにちりん",
        },
        {
            plain: "自由の風に向かって",
            parsed: "じゆうのかぜにむかって",
        },
        {
            plain: "幾千のメロディー",
            parsed: "いくせんのメロディー",
        },
        {
            plain: "漱玉奇巧虫相撲大玄境",
            parsed: "そうぎょくきこうむしずもうだいげんきょう",
        },
        {
            plain: "勇気と努力の証",
            parsed: "ゆうきとどりょくのあかし",
        },
        {
            plain: "ベヒーモス偵察記録",
            parsed: "ベヒーモスていさつきろく",
        },
        {
            plain: "冒険者試練・進化編",
            parsed: "ぼうけんしゃしれんしんかへん",
        },
        {
            plain: "烈風演習",
            parsed: "れっぷうえんしゅう",
        },
        {
            plain: "藍硯",
            parsed: "らんやん",
        },
        {
            plain: "ナマカ",
            parsed: "ナマカ",
        },
        {
            plain: "クポ・ヌイ",
            parsed: "クポヌイ",
        },
        {
            plain: "マヒナ・ヌイ",
            parsed: "マヒナヌイ",
        },
        {
            plain: "ワケア・ヌイ",
            parsed: "ワケアヌイ",
        },
        {
            plain: "ペレ・ヌイ",
            parsed: "ペレヌイ",
        },
        {
            plain: "ムトタ",
            parsed: "ムトタ",
        },
        {
            plain: "ヨピア",
            parsed: "ヨピア",
        },
        {
            plain: "ウエリヨ",
            parsed: "ウエリヨ",
        },
        {
            plain: "マトラン",
            parsed: "マトラン",
        },
        {
            plain: "アトコ",
            parsed: "アトコ",
        },
        {
            plain: "コチッタ",
            parsed: "コチッタ",
        },
        {
            plain: "オコトラン",
            parsed: "オコトラン",
        },
        {
            plain: "イスカリ",
            parsed: "イスカリ",
        },
        {
            plain: "クアリー",
            parsed: "クアリー",
        },
        {
            plain: "ムナイ",
            parsed: "ムナイ",
        },
        {
            plain: "アバンディ",
            parsed: "アバンディ",
        },
        {
            plain: "クスコ",
            parsed: "クスコ",
        },
        {
            plain: "アルパ",
            parsed: "アルパ",
        },
        {
            plain: "コリユール",
            parsed: "コリユール",
        },
        {
            plain: "ジュナン",
            parsed: "ジュナン",
        },
        {
            plain: "ムッキ",
            parsed: "ムッキ",
        },
        {
            plain: "ワスカール",
            parsed: "ワスカール",
        },
        {
            plain: "ピシカ",
            parsed: "ピシカ",
        },
        {
            plain: "コヤ",
            parsed: "コヤ",
        },
        {
            plain: "チメ",
            parsed: "チメ",
        },
        {
            plain: "チンプ",
            parsed: "チンプ",
        },
        {
            plain: "インカナック",
            parsed: "インカナック",
        },
        {
            plain: "テパル",
            parsed: "テパル",
        },
        {
            plain: "プマー",
            parsed: "プマー",
        },
        {
            plain: "ビラム",
            parsed: "ビラム",
        },
        {
            plain: "シプ",
            parsed: "シプ",
        },
        {
            plain: "カホロム",
            parsed: "カホロム",
        },
        {
            plain: "トルテック",
            parsed: "トルテック",
        },
        {
            plain: "パラン",
            parsed: "パラン",
        },
        {
            plain: "テマジョ",
            parsed: "テマジョ",
        },
        {
            plain: "リヴァ",
            parsed: "リヴァ",
        },
        {
            plain: "ラミザナ",
            parsed: "ラミザナ",
        },
        {
            plain: "タルカ",
            parsed: "タルカ",
        },
        {
            plain: "オベロン",
            parsed: "オベロン",
        },
        {
            plain: "ポーナ",
            parsed: "ポーナ",
        },
        {
            plain: "ココウィク",
            parsed: "ココウィク",
        },
        {
            plain: "コパン",
            parsed: "コパン",
        },
        {
            plain: "オチカン",
            parsed: "オチカン",
        },
        {
            plain: "ワシャクラフン・ウバ・カン",
            parsed: "ワシャクラフンウバカン",
        },
        {
            plain: "イレール",
            parsed: "イレール",
        },
        {
            plain: "イ・クェクシ・ツボロン・ク・レール",
            parsed: "イクェクシツボロンクレール",
        },
        {
            plain: "クエニン",
            parsed: "クエニン",
        },
        {
            plain: "オロラク",
            parsed: "オロラク",
        },
        {
            plain: "マニフェコ",
            parsed: "マニフェコ",
        },
        {
            plain: "マズカル",
            parsed: "マズカル",
        },
        {
            plain: "イカヨ",
            parsed: "イカヨ",
        },
        {
            plain: "深遠と絡み合う眼差し",
            parsed: "しんえんとからみあうまなざし",
        },
        {
            plain: "結羽の勇士・空を舞う者",
            parsed: "ゆうはのゆうしそらをまうもの",
        },
        {
            plain: "結羽の勇士・羽を削ぐ者",
            parsed: "ゆうはのゆうしはねをそぐもの",
        },
        {
            plain: "結羽の勇士・空を統べる者",
            parsed: "ゆうはのゆうしそらをすべるもの",
        },
        {
            plain: "霊覚の勇士・掌意師",
            parsed: "れいかくのゆうししょういし",
        },
        {
            plain: "霊覚の勇士・念力師",
            parsed: "れいかくのゆうしねんりきし",
        },
        {
            plain: "霊覚の勇士・瞑思師",
            parsed: "れいかくのゆうしめいしし",
        },
        {
            plain: "クク竜戦士・鍛治の槌",
            parsed: "ククりゅうせんしかじのつち",
        },
        {
            plain: "クク竜戦士・蒼天の焔",
            parsed: "ククりゅうせんしそうてんのほのお",
        },
        {
            plain: "イクトミ竜戦士・寒流を運ぶ者",
            parsed: "イクトミりゅうせんしかんりゅうをはこぶもの",
        },
        {
            plain: "イクトミ竜戦士・氷晶の砲手",
            parsed: "イクトミりゅうせんしひょうしょうのほうしゅ",
        },
        {
            plain: "クク仔竜",
            parsed: "ククこりゅう",
        },
        {
            plain: "クク竜",
            parsed: "ククりゅう",
        },
        {
            plain: "イクトミ仔竜",
            parsed: "イクトミこりゅう",
        },
        {
            plain: "イクトミ竜",
            parsed: "イクトミりゅう",
        },
        {
            plain: "深遠なるミミックフローラ",
            parsed: "しんえんなるミミックフローラ",
        },
        {
            plain: "深遠なるミミックパピラ",
            parsed: "しんえんなるミミックパピラ",
        },
        {
            plain: "ミステリードリンク",
            parsed: "ミステリードリンク",
        },
        {
            plain: "高らかな歌声",
            parsed: "たからかなうたごえ",
        },
        {
            plain: "グレインラップ",
            parsed: "グレインラップ",
        },
        {
            plain: "セビチェ",
            parsed: "セビチェ",
        },
        {
            plain: "しばしの休息",
            parsed: "しばしのきゅうそく",
        },
        {
            plain: "ハニーセビチェ",
            parsed: "ハニーセビチェ",
        },
        {
            plain: "黄昏マンボウ",
            parsed: "たそがれマンボウ",
        },
        {
            plain: "サメモドキツノ魚",
            parsed: "サメモドキツノぎょ",
        },
        {
            plain: "クントゥルの物語",
            parsed: "クントゥルのものがたり",
        },
        {
            plain: "無名冒険者のノート",
            parsed: "むめいぼうけんしゃのノート",
        },
        {
            plain: "クァワカン断崖",
            parsed: "クァワカンだんがい",
        },
        {
            plain: "マリナルコ洞窟",
            parsed: "マリナルコどうくつ",
        },
        {
            plain: "シャラクの谷",
            parsed: "シャラクのたに",
        },
        {
            plain: "風炎の試験場",
            parsed: "ふうえんのしけんじょう",
        },
        {
            plain: "謎土の祭祀場",
            parsed: "めいどのさいしじょう",
        },
        {
            plain: "オシカ・ナタ",
            parsed: "オシカナタ",
        },
        {
            plain: "燼火焼尽の地",
            parsed: "じんかじょうじんのち",
        },
        {
            plain: "アッシュフロー街",
            parsed: "アッシュフローがい",
        },
        {
            plain: "幻蛇の宮殿",
            parsed: "げんじゃのきゅうでん",
        },
        {
            plain: "カキシュの塔",
            parsed: "カキシュのとう",
        },
        {
            plain: "昔日の統律の心",
            parsed: "せきじつのとうりつのこころ",
        },
        {
            plain: "統律の心",
            parsed: "とうりつのこころ",
        },
        {
            plain: "幻夢のクレイドル",
            parsed: "げんむのクレイドル",
        },
        {
            plain: "ナーサリー・オブ・ナイトメア",
            parsed: "ナーサリーオブナイトメア",
        },
        {
            plain: "トゾス島",
            parsed: "トゾスとう",
        },
        {
            plain: "伝説の天蛇の船",
            parsed: "でんせつのてんじゃのふね",
        },
        {
            plain: "テコロアパン湾",
            parsed: "テコロアパンわん",
        },
        {
            plain: "ナド・クライ",
            parsed: "ナドクライ",
        },
        {
            plain: "ヴォイニッチ商会",
            parsed: "ヴォイニッチしょうかい",
        },
        {
            plain: "万火、一に帰す",
            parsed: "ばんかいちにきす",
        },
        {
            plain: "塵に帰す花、堕ちる羽",
            parsed: "ちりにきすはなおちるはね",
        },
        {
            plain: "流れゆく色の記憶",
            parsed: "ながれゆくいろのきおく",
        },
        {
            plain: "枯れ紫菖",
            parsed: "かれししょう",
        },
        {
            plain: "蛍光ツノキノコ",
            parsed: "けいこうツノキノコ",
        },
        {
            plain: "厄水の災い",
            parsed: "やくみずのわざわい",
        },
        {
            plain: "花飾りの羽",
            parsed: "かねかざりのはね",
        },
        {
            plain: "星鷹の紅き羽",
            parsed: "せいしゅうのあかきはね",
        },
        {
            plain: "波乗りの旋回",
            parsed: "なみのりのせんかい",
        },
        {
            plain: "アニマルトゥギャザー",
            parsed: "アニマルトゥギャザー",
        },
        {
            plain: "スピリットを求めしウォーベン",
            parsed: "スピリットをもとめしウォーベン",
        },
        {
            plain: "探せ！ロストスピリット",
            parsed: "さがせロストスピリット",
        },
        {
            plain: "イビル・バニッシュ",
            parsed: "イビルバニッシュ",
        },
        {
            plain: "千切れた古記録の復元",
            parsed: "ちぎれたこきろくのふくげん",
        },
        {
            plain: "ルラ",
            parsed: "ルラ",
        },
        {
            plain: "谷中",
            parsed: "たになか",
        },
        {
            plain: "追え！ミツムシのお宝",
            parsed: "おえミツムシのおたから",
        },
        {
            plain: "追憶練行・スリル編",
            parsed: "ついおくれんぎょうスリルへん",
        },
        {
            plain: "キャンディと薔薇の歌",
            parsed: "キャンディとばらのうた",
        },
        {
            plain: "彼女にサプライズを",
            parsed: "かのじょにサプライズを",
        },
        {
            plain: "ゆらゆらフロート車",
            parsed: "ゆらゆらフロートしゃ",
        },
        {
            plain: "現を見る夢",
            parsed: "うつつをみるゆめ",
        },
        {
            plain: "騎士の剣光",
            parsed: "きしのけんこう",
        },
        {
            plain: "争霸の宴",
            parsed: "そうはのうたげ",
        },
        {
            plain: "パネース",
            parsed: "パネース",
        },
        {
            plain: "原初のあの方",
            parsed: "げんしょのあのかた",
        },
        {
            plain: "ロノヴァ",
            parsed: "ロノヴァ",
        },
        {
            plain: "死の執政",
            parsed: "しのしっせい",
        },
        {
            plain: "イスタロト",
            parsed: "イスタロト",
        },
        {
            plain: "時間の執政",
            parsed: "ときのしっせい",
        },
        {
            plain: "白亜の申し子",
            parsed: "はくあのもうしご",
        },
        {
            plain: "波花騎士",
            parsed: "なみばなきし",
        },
        {
            plain: "バルバトス",
            parsed: "バルバトス",
        },
        {
            plain: "玉衡",
            parsed: "ユーヘン",
        },
        {
            plain: "天権",
            parsed: "テンチュエン",
        },
        {
            plain: "救苦度厄真君",
            parsed: "きゅうくどやくしんくん",
        },
        {
            plain: "降魔大聖",
            parsed: "こうまたいせい",
        },
        {
            plain: "護法夜叉",
            parsed: "ごほうやしゃ",
        },
        {
            plain: "金鵬",
            parsed: "きんほう",
        },
        {
            plain: "モラクス",
            parsed: "モラクス",
        },
        {
            plain: "岩王帝君",
            parsed: "がんおうていくん",
        },
        {
            plain: "閑雲",
            parsed: "かんうん",
        },
        {
            plain: "ピンばあや",
            parsed: "ピンばあや",
        },
        {
            plain: "歌塵浪市真君",
            parsed: "かじんろういちしんくん",
        },
        {
            plain: "天枢",
            parsed: "てんすう",
        },
        {
            plain: "削月築陽真君",
            parsed: "さくげつちくようしんくん",
        },
        {
            plain: "理水畳山真君",
            parsed: "りすいじょうざんしんくん",
        },
        {
            plain: "留雲借風真君",
            parsed: "りゅううんしゃくふうしんくん",
        },
        {
            plain: "マルコシアス",
            parsed: "マルコシアス",
        },
        {
            plain: "竈神",
            parsed: "かまどがみ",
        },
        {
            plain: "騰蛇太元帥",
            parsed: "とうだたいげんすい",
        },
        {
            plain: "心猿大将",
            parsed: "しんえんたいしょう",
        },
        {
            plain: "螺巻大将",
            parsed: "らかんたいしょう",
        },
        {
            plain: "火鼠大将",
            parsed: "かそたいしょう",
        },
        {
            plain: "ハーゲントゥス",
            parsed: "ハーゲントゥス",
        },
        {
            plain: "塵の魔神",
            parsed: "ちりのまじん",
        },
        {
            plain: "塩の魔神",
            parsed: "しおのまじん",
        },
        {
            plain: "移霄導天真君",
            parsed: "いしょうどうてんしんくん",
        },
        {
            plain: "バアル",
            parsed: "バアル",
        },
        {
            plain: "バアルゼブル",
            parsed: "バアルゼブル",
        },
        {
            plain: "カンナ・カパッチリ",
            parsed: "カンナカパッチリ",
        },
        {
            plain: "クラクサナリデビ",
            parsed: "クラクサナリデビ",
        },
        {
            plain: "ブエル",
            parsed: "ブエル",
        },
        {
            plain: "ナブ・マリカッタ",
            parsed: "ナブマリカッタ",
        },
        {
            plain: "マハールッカデヴァータ",
            parsed: "マハールッカデヴァータ",
        },
        {
            plain: "アフマル",
            parsed: "アフマル",
        },
        {
            plain: "アモン",
            parsed: "アモン",
        },
        {
            plain: "翠の草龍",
            parsed: "すいのそうりゅう",
        },
        {
            plain: "花霊の「勇者」",
            parsed: "かれいのゆうしゃ",
        },
        {
            plain: "エゲリア",
            parsed: "エゲリア",
        },
        {
            plain: "フォカロルス",
            parsed: "フォカロルス",
        },
        {
            plain: "奇械公",
            parsed: "きかいこう",
        },
        {
            plain: "ロアルテ",
            parsed: "ロアルテ",
        },
        {
            plain: "シュバランケ",
            parsed: "シュバランケ",
        },
        {
            plain: "ハボリム",
            parsed: "ハボリム",
        },
        {
            plain: "リビアク",
            parsed: "リビアク",
        },
        {
            plain: "末光の剣",
            parsed: "まっこうのつるぎ",
        },
        {
            plain: "カウサ",
            parsed: "カウサ",
        },
        {
            plain: "腰痛の痕跡",
            parsed: "ようつうのこんせき",
        },
        {
            plain: "銷虹霽雨真君",
            parsed: "しょうこうせいうしんくん",
        },
        {
            plain: "尋瑰納琦真君",
            parsed: "じんかいのうきしんくん",
        },
        {
            plain: "仙力",
            parsed: "せんりき",
        },
        {
            plain: "妖力",
            parsed: "ようりょく",
        },
        {
            plain: "ミツムシのお宝",
            parsed: "ミツムシのおたから",
        },
        {
            plain: "虫捕り隊最後の出撃",
            parsed: "むしとりたいさいごのしゅつげき",
        },
        {
            plain: "巡れ！ワンダフルグラフィティ",
            parsed: "めぐれワンダフルグラフィティ",
        },
        {
            plain: "カラフルギフト",
            parsed: "カラフルギフト",
        },
        {
            plain: "ヒラメキ探し",
            parsed: "ヒラメキさがし",
        },
        {
            plain: "ドドコバンバン冒険記",
            parsed: "ドドコバンバンぼうけんき",
        },
        {
            plain: "いばらと栄冠",
            parsed: "いばらとえいかん",
        },
        {
            plain: "テイワットの思い出",
            parsed: "テイワットのおもいで",
        },
        {
            plain: "良心的なキャンペーン",
            parsed: "りょうしんてきなキャンペーン",
        },
        {
            plain: "追憶練行",
            parsed: "ついおくれんぎょう",
        },
        {
            plain: "アイオーヌ",
            parsed: "アイオーヌ",
        },
        {
            plain: "スメイヌ",
            parsed: "スメイヌ",
        },
        {
            plain: "ウモジャ",
            parsed: "ウモジャ",
        },
        {
            plain: "ウッサビーティ",
            parsed: "ウッサビーティ",
        },
        {
            plain: "マリポ",
            parsed: "マリポ",
        },
        {
            plain: "バレカ",
            parsed: "バレカ",
        },
        {
            plain: "キオンゴズイ",
            parsed: "キオンゴズイ",
        },
        {
            plain: "ビディー",
            parsed: "ビディー",
        },
        {
            plain: "ケイタ",
            parsed: "ケイタ",
        },
        {
            plain: "アロム",
            parsed: "アロム",
        },
        {
            plain: "エクチュア",
            parsed: "エクチュア",
        },
        {
            plain: "シパク",
            parsed: "シパク",
        },
        {
            plain: "アゲモ",
            parsed: "アゲモ",
        },
        {
            plain: "チントリ",
            parsed: "チントリ",
        },
        {
            plain: "チアンカ",
            parsed: "チアンカ",
        },
        {
            plain: "ヒイア",
            parsed: "ヒイア",
        },
        {
            plain: "マンサ",
            parsed: "マンサ",
        },
        {
            plain: "ブウナマ",
            parsed: "ブウナマ",
        },
        {
            plain: "シヤフ",
            parsed: "シヤフ",
        },
        {
            plain: "ソマック",
            parsed: "ソマック",
        },
        {
            plain: "ハンペック",
            parsed: "ハンペック",
        },
        {
            plain: "ヤンタサー",
            parsed: "ヤンタサー",
        },
        {
            plain: "カラムル",
            parsed: "カラムル",
        },
        {
            plain: "カフナ",
            parsed: "カフナ",
        },
        {
            plain: "ミル・ヌイ",
            parsed: "ミルヌイ",
        },
        {
            plain: "パッカ・ヌイ",
            parsed: "パッカヌイ",
        },
        {
            plain: "アンシエタ",
            parsed: "アンシエタ",
        },
        {
            plain: "アクリャ",
            parsed: "アクリャ",
        },
        {
            plain: "ミチカ",
            parsed: "ミチカ",
        },
        {
            plain: "トゥンダマ",
            parsed: "トゥンダマ",
        },
        {
            plain: "レグバ",
            parsed: "レグバ",
        },
        {
            plain: "ティトゥ",
            parsed: "ティトゥ",
        },
        {
            plain: "荊和",
            parsed: "けいわ",
        },
        {
            plain: "タフムーラス",
            parsed: "タフムーラス",
        },
        {
            plain: "カウフ",
            parsed: "カウフ",
        },
        {
            plain: "アポパロン",
            parsed: "アポパロン",
        },
        {
            plain: "イクナル",
            parsed: "イクナル",
        },
        {
            plain: "オルコ",
            parsed: "オルコ",
        },
        {
            plain: "カカママ",
            parsed: "カカママ",
        },
        {
            plain: "カズーガ",
            parsed: "カズーガ",
        },
        {
            plain: "ティアモ",
            parsed: "ティアモ",
        },
        {
            plain: "ウクンガ",
            parsed: "ウクンガ",
        },
        {
            plain: "リリウ",
            parsed: "リリウ",
        },
        {
            plain: "ケウラニ",
            parsed: "ケウラニ",
        },
        {
            plain: "キバンク",
            parsed: "キバンク",
        },
        {
            plain: "トゥパック",
            parsed: "トゥパック",
        },
        {
            plain: "チコヤ",
            parsed: "チコヤ",
        },
        {
            plain: "ブルキナ",
            parsed: "ブルキナ",
        },
        {
            plain: "ラゾーリ",
            parsed: "ラゾーリ",
        },
        {
            plain: "ニエガ",
            parsed: "ニエガ",
        },
        {
            plain: "ニペガ",
            parsed: "ニペガ",
        },
        {
            plain: "イファ",
            parsed: "イファ",
        },
        {
            plain: "コヨパ",
            parsed: "コヨパ",
        },
        {
            plain: "コステリツキー",
            parsed: "コステリツキー",
        },
        {
            plain: "バラノフ",
            parsed: "バラノフ",
        },
        {
            plain: "ゴリコフ",
            parsed: "ゴリコフ",
        },
        {
            plain: "ヤノフスキー",
            parsed: "ヤノフスキー",
        },
        {
            plain: "タルコ",
            parsed: "タルコ",
        },
        {
            plain: "トテク",
            parsed: "トテク",
        },
        {
            plain: "ケーナウ",
            parsed: "ケーナウ",
        },
        {
            plain: "クイミ",
            parsed: "クイミ",
        },
        {
            plain: "サンハジ",
            parsed: "サンハジ",
        },
        {
            plain: "メネリク",
            parsed: "メネリク",
        },
        {
            plain: "ダーゴ",
            parsed: "ダーゴ",
        },
        {
            plain: "コクポン",
            parsed: "コクポン",
        },
        {
            plain: "アールドラー",
            parsed: "アールドラー",
        },
        {
            plain: "ポンプ",
            parsed: "ポンプ",
        },
        {
            plain: "ヌスタ",
            parsed: "ヌスタ",
        },
        {
            plain: "ラマン",
            parsed: "ラマン",
        },
        {
            plain: "オソウェ",
            parsed: "オソウェ",
        },
        {
            plain: "イヨーバ",
            parsed: "イヨーバ",
        },
        {
            plain: "クナック",
            parsed: "クナック",
        },
        {
            plain: "ジェンバー",
            parsed: "ジェンバー",
        },
        {
            plain: "チマリ",
            parsed: "チマリ",
        },
        {
            plain: "ヤレツィ",
            parsed: "ヤレツィ",
        },
        {
            plain: "アカマ",
            parsed: "アカマ",
        },
        {
            plain: "ウランタ",
            parsed: "ウランタ",
        },
        {
            plain: "スタドゥヒン",
            parsed: "スタドゥヒン",
        },
        {
            plain: "マズラ",
            parsed: "マズラ",
        },
        {
            plain: "ネラン",
            parsed: "ネラン",
        },
        {
            plain: "タルタリヤ",
            parsed: "タルタリヤ",
        },
        {
            plain: "公子",
            parsed: "こうし",
        },
        {
            plain: "ロザリン・クルーズチカ・ローエファルタ",
            parsed: "ロザリンクルーズチカローエファルタ",
        },
        {
            plain: "ドットーレ",
            parsed: "ドットーレ",
        },
        {
            plain: "博士",
            parsed: "はかせ",
        },
        {
            plain: "カピターノ",
            parsed: "カピターノ",
        },
        {
            plain: "隊長",
            parsed: "たいちょう",
        },
        {
            plain: "ナタのために",
            parsed: "ナタのために",
        },
        {
            plain: "金紋の刻まれた源核",
            parsed: "きんもんのきざまれたげんかく",
        },
        {
            plain: "秘源機兵・精巧デバイス",
            parsed: "ひげんきへいせいこうデバイス",
        },
        {
            plain: "草臥の家",
            parsed: "くさぶしのいえ",
        },
        {
            plain: "ザカンの屋台",
            parsed: "ザカンのやたい",
        },
        {
            plain: "ムフル宝石店",
            parsed: "ムフルほうせきてん",
        },
        {
            plain: "ショコアトゥル水",
            parsed: "ショコアトゥルすい",
        },
        {
            plain: "元気お弁当",
            parsed: "げんきおべんとう",
        },
        {
            plain: "レンジャー長のイチオシ",
            parsed: "レンジャーちょうのイチオシ",
        },
        {
            plain: "モラ、早くいらっしゃい！",
            parsed: "モラはやくいらっしゃい",
        },
        {
            plain: "ハルヴァマズダ",
            parsed: "ハルヴァマズダ",
        },
        {
            plain: "海鳥の一休み",
            parsed: "うみどりのひとやすみ",
        },
        {
            plain: "無欠のピュルテ",
            parsed: "むけつのピュルテ",
        },
        {
            plain: "秘伝のローストリブ",
            parsed: "ひでんのローストリブ",
        },
        {
            plain: "プル・ラ・ジャスティス",
            parsed: "プルラジャスティス",
        },
        {
            plain: "フルーツミルクキャンディ",
            parsed: "フルーツミルクキャンディ",
        },
        {
            plain: "炎のトレジャーコンパス",
            parsed: "ほのおのトレジャーコンパス",
        },
        {
            plain: "ハナン・パチャの記録",
            parsed: "ハナンパチャのきろく",
        },
        {
            plain: "火山大王と影縫いの針",
            parsed: "かざんだいおうとかげぬいのはり",
        },
        {
            plain: "パイモンの写真機",
            parsed: "パイモンのしゃしんき",
        },
        {
            plain: "テイワットの思い出のアルバム",
            parsed: "テイワットのおもいでのアルバム",
        },
        {
            plain: "灼熱の燧原鉱",
            parsed: "しゃくねつのすいげんこう",
        },
        {
            plain: "聖宵の旅織り",
            parsed: "せいしょうのたびおり",
        },
        {
            plain: "「幸運の祝福」",
            parsed: "こううんのしゅくふく",
        },
        {
            plain: "廻焔の道",
            parsed: "かいえんのみち",
        },
        {
            plain: "やや古びた『勇敢なテクィ』",
            parsed: "ややふるびたゆうかんなテクィ",
        },
        {
            plain: "新品同様の『勇敢なテクィ』",
            parsed: "しんぴんどうようのゆうかんなテクィ",
        },
        {
            plain: "「謎煙の主」",
            parsed: "めいえんのあるじ",
        },
        {
            plain: "「豊穣の邦」",
            parsed: "ほうじょうのくに",
        },
        {
            plain: "龍の遺物研究会",
            parsed: "りゅうのいぶつけんきゅうかい",
        },
        {
            plain: "鏡と謎煙の行方",
            parsed: "かがみとめいえんのゆくえ",
        },
        {
            plain: "燃ゆる運命の虹光",
            parsed: "もゆるうんめいのこうこう",
        },
        {
            plain: "公の用件",
            parsed: "おおやけのようけん",
        },
        {
            plain: "テペトル竜サロン",
            parsed: "テペトルりゅうサロン",
        },
        {
            plain: "テペトル竜サロン・お手入れ",
            parsed: "テペトルりゅうサロンおていれ",
        },
        {
            plain: "テペトル竜サロン・珍しい食材",
            parsed: "テペトルりゅうサロンめずらしいしょくざい",
        },
        {
            plain: "ポカポカのコホラ竜",
            parsed: "ポカポカのコホラりゅう",
        },
        {
            plain: "友達を作る方法",
            parsed: "ともだちをつくるほうほう",
        },
        {
            plain: "おーい！お前の手紙だぞ！",
            parsed: "おーいおまえのてがみだぞ",
        },
        {
            plain: "夜猟者の戦争",
            parsed: "やりょうしゃのせんそう",
        },
        {
            plain: "反魂の詩",
            parsed: "はんごんのうた",
        },
        {
            plain: "古名",
            parsed: "こめい",
        },
        {
            plain: "ストロング・ボーン",
            parsed: "ストロングボーン",
        },
        {
            plain: "岩峰を巡る歌",
            parsed: "がんほうをめぐるうた",
        },
        {
            plain: "鎮山の釘",
            parsed: "ちんざんのくぎ",
        },
        {
            plain: "I・イヴァノヴナ・N",
            parsed: "IイヴァノヴナN",
        },
        {
            plain: "アンデシュドッテル",
            parsed: "アンデシュドッテル",
        },
        {
            plain: "モリス",
            parsed: "モリス",
        },
        {
            plain: "トバ",
            parsed: "トバ",
        },
        {
            plain: "空想クラブ・熱エネルギー睡眠導入",
            parsed: "くうそうクラブねつエネルギーすいみんどうにゅう",
        },
        {
            plain: "「紛争」の導き",
            parsed: "ふんそうのみちびき",
        },
        {
            plain: "「紛争」の哲学",
            parsed: "ふんそうのてつがく",
        },
        {
            plain: "荒瀧・生命のロックイリデッセンスビッグツアー",
            parsed: "あらたきいのちのロックイリデッセンスビッグツアー",
        },
        {
            plain: "『最強オニカブトムシに転生して 世界をひっくり返してやった』",
            parsed: "さいきょうオニカブトムシにてんせいしてせかいをひっくりかえしてやった",
        },
        {
            plain: "アラニ",
            parsed: "アラニ",
        },
        {
            plain: "ナザム",
            parsed: "ナザム",
        },
        {
            plain: "炎神",
            parsed: "えんじん",
        },
        {
            plain: "新生の霊炎",
            parsed: "しんせいのれいえん",
        },
        {
            plain: "「花翼の集」",
            parsed: "かよくのつどい",
        },
        {
            plain: "学を求む長き道",
            parsed: "がくをもとむながきみち",
        },
        {
            plain: "はやく大きくなーれ！",
            parsed: "はやくおおきくなーれ",
        },
        {
            plain: "はやく大きくなーれ…？",
            parsed: "はやくおおきくなーれ",
        },
        {
            plain: "レインドット",
            parsed: "レインドット",
        },
        {
            plain: "マリアン",
            parsed: "マリアン",
        },
        {
            plain: "アヤックス",
            parsed: "アヤックス",
        },
        {
            plain: "パンタローネ",
            parsed: "パンタローネ",
        },
        {
            plain: "富者",
            parsed: "ふしゃ",
        },
        {
            plain: "プルチネッラ",
            parsed: "プルチネッラ",
        },
        {
            plain: "雄鶏",
            parsed: "おんどり",
        },
        {
            plain: "コロンビーナ",
            parsed: "コロンビーナ",
        },
        {
            plain: "少女",
            parsed: "しょうじょ",
        },
        {
            plain: "アルレッキーノ",
            parsed: "アルレッキーノ",
        },
        {
            plain: "召使",
            parsed: "めしつかい",
        },
        {
            plain: "サンドローネ",
            parsed: "サンドローネ",
        },
        {
            plain: "傀儡",
            parsed: "かいらい",
        },
        {
            plain: "ピエロ",
            parsed: "ピエロ",
        },
        {
            plain: "道化",
            parsed: "どうけ",
        },
        {
            plain: "フロプタチュール",
            parsed: "フロプタチュール",
        },
        {
            plain: "ヴェズルフェルニル",
            parsed: "ヴェズルフェルニル",
        },
        {
            plain: "スルトロッチ",
            parsed: "スルトロッチ",
        },
        {
            plain: "レリル",
            parsed: "レリル",
        },
        {
            plain: "賢者(俗名)",
            parsed: "けんじゃ",
        },
        {
            plain: "予言者(俗名)",
            parsed: "よげんしゃ",
        },
        {
            plain: "黄金(俗名)",
            parsed: "おうごん",
        },
        {
            plain: "極悪騎",
            parsed: "ごくあくき",
        },
        {
            plain: "月の狩人",
            parsed: "つきのかりゅうど",
        },
        {
            plain: "カーンルイアの「五大罪人」",
            parsed: "カーンルイアのごだいつみびと",
        },
        {
            plain: "コイツハドウダケ",
            parsed: "コイツハドウダケ",
        },
        {
            plain: "ハンケツクダシダケ",
            parsed: "ハンケツクダシダケ",
        },
        {
            plain: "ヘルター",
            parsed: "ヘルター",
        },
        {
            plain: "ヴィクトル",
            parsed: "ヴィクトル",
        },
        {
            plain: "シャオユウ",
            parsed: "シャオユウ",
        },
        {
            plain: "アントン・メルニコフ",
            parsed: "アントンメルニコフ",
        },
        {
            plain: "アントハー",
            parsed: "アントハー",
        },
        {
            plain: "ティモール",
            parsed: "ティモール",
        },
        {
            plain: "ダニーラ",
            parsed: "ダニーラ",
        },
        {
            plain: "ラドミール",
            parsed: "ラドミール",
        },
        {
            plain: "カタリナ",
            parsed: "カタリナ",
        },
        {
            plain: "リュドヒカ・シュナイツェフナ",
            parsed: "リュドヒカシュナイツェフナ",
        },
        {
            plain: "エフェンディ",
            parsed: "エフェンディ",
        },
        {
            plain: "ゾーヤ・シュナイツェフナ",
            parsed: "ゾーヤシュナイツェフナ",
        },
        {
            plain: "ジャルジャー",
            parsed: "ジャルジャー",
        },
        {
            plain: "ユーフラシア",
            parsed: "ユーフラシア",
        },
        {
            plain: "ペルヴェーレ",
            parsed: "ペルヴェーレ",
        },
        {
            plain: "クルセビナ",
            parsed: "クルセビナ",
        },
        {
            plain: "パカル",
            parsed: "パカル",
        },
        {
            plain: "ワイナ",
            parsed: "ワイナ",
        },
        {
            plain: "アミナ",
            parsed: "アミナ",
        },
        {
            plain: "フニ",
            parsed: "フニ",
        },
        {
            plain: "山下",
            parsed: "やました",
        },
        {
            plain: "トリニダード",
            parsed: "トリニダード",
        },
        {
            plain: "ティアゴ",
            parsed: "ティアゴ",
        },
        {
            plain: "ポンセ",
            parsed: "ポンセ",
        },
        {
            plain: "コンガマトー",
            parsed: "コンガマトー",
        },
        {
            plain: "ポニニ",
            parsed: "ポニニ",
        },
        {
            plain: "ポギギ",
            parsed: "ポギギ",
        },
        {
            plain: "ポチチ",
            parsed: "ポチチ",
        },
        {
            plain: "ナンナ",
            parsed: "ナンナ",
        },
        {
            plain: "スカーク",
            parsed: "スカーク",
        },
        {
            plain: "焚尽の灼炎魔女",
            parsed: "ふんじんのしゃくえんまじょ",
        },
        {
            plain: "紅蓮蛾",
            parsed: "ぐれんが",
        },
        {
            plain: "スカラマシュ",
            parsed: "スカラマシュ",
        },
        {
            plain: "散兵",
            parsed: "ざんひょう",
        },
        {
            plain: "国崩",
            parsed: "くにくずし",
        },
        {
            plain: "七葉寂照秘密主",
            parsed: "しちようじゃくしょうひみつしゅ",
        },
        {
            plain: "正機の神",
            parsed: "しょうきのかみ",
        },
        {
            plain: "放浪者",
            parsed: "ほうろうしゃ",
        },
        {
            plain: "シュナイツェフナ",
            parsed: "シュナイツェフナ",
        },
        {
            plain: "シュナイツェビッチ",
            parsed: "シュナイツェビッチ",
        },
        {
            plain: "霧虚ろの灯芯",
            parsed: "きりうつろのとうしん",
        },
        {
            plain: "霧虚ろの草嚢",
            parsed: "きりうつろのそうのう",
        },
        {
            plain: "霧虚ろの花粉",
            parsed: "きりうつろのかふん",
        },
        {
            plain: "検査官の刀",
            parsed: "けんさかんのかたな",
        },
        {
            plain: "エージェントの刀",
            parsed: "エージェントのかたな",
        },
        {
            plain: "猟兵の刀",
            parsed: "りょうへいのかたな",
        },
        {
            plain: "偏光プリズム",
            parsed: "へんこうプリズム",
        },
        {
            plain: "水晶プリズム",
            parsed: "すいしょうプリズム",
        },
        {
            plain: "暗色プリズム",
            parsed: "あんしょくプリズム",
        },
        {
            plain: "尉官の記章",
            parsed: "いかんのきしょう",
        },
        {
            plain: "士官の記章",
            parsed: "しかんのきしょう",
        },
        {
            plain: "新兵の記章",
            parsed: "しんぺいのきしょう",
        },
        {
            plain: "蛍術師",
            parsed: "けいじゅつし",
        },
        {
            plain: "雷蛍術師",
            parsed: "らいけいじゅつし",
        },
        {
            plain: "氷蛍術師",
            parsed: "ひょうけいじゅつし",
        },
        {
            plain: "ファデュイ先遣隊",
            parsed: "ファデュイせんけんたい",
        },
        {
            plain: "ファデュイ先遣隊・遊撃兵・炎銃",
            parsed: "ファデュイせんけんたいゆうげきへいえんじゅう",
        },
        {
            plain: "ファデュイ先遣隊・遊撃兵・岩使い",
            parsed: "ファデュイせんけんたいゆうげきへいいわつかい",
        },
        {
            plain: "ファデュイ先遣隊・重衛士・氷銃",
            parsed: "ファデュイせんけんたいじゅうえいしひょうじゅう",
        },
        {
            plain: "ファデュイ先遣隊・重衛士・水銃",
            parsed: "ファデュイせんけんたいじゅうえいしすいじゅう",
        },
        {
            plain: "ファデュイ先遣隊・前鋒軍・風拳",
            parsed: "ファデュイせんけんたいぜんぽうぐんふうけん",
        },
        {
            plain: "ファデュイ先遣隊・前鋒軍・雷ハンマー",
            parsed: "ファデュイせんけんたいぜんぽうぐんかみなりハンマー",
        },
        {
            plain: "ミラーメイデン",
            parsed: "ミラーメイデン",
        },
        {
            plain: "氷霜の従者",
            parsed: "ひょうせつのじゅうしゃ",
        },
        {
            plain: "烈風の従者",
            parsed: "れっぷうのじゅうしゃ",
        },
        {
            plain: "海乱鬼・炎威",
            parsed: "かいらぎえんい",
        },
        {
            plain: "海乱鬼・雷騰",
            parsed: "かいらぎらいとう",
        },
        {
            plain: "北国銀行",
            parsed: "きたくにぎんこう",
        },
        {
            plain: "きっちりチップス",
            parsed: "きっちりチップス",
        },
        {
            plain: "幸運のおすそわけ",
            parsed: "こううんのおすそわけ",
        },
        {
            plain: "クイールとウククの物語",
            parsed: "クイールとウククのものがたり",
        },
        {
            plain: "マーウェと幻写霊",
            parsed: "マーウェとげんしゃれい",
        },
        {
            plain: "白姫と六人の小人",
            parsed: "しらひめとろくにんのこびと",
        },
        {
            plain: "壁炉の家",
            parsed: "ハウスオブハース",
        },
        {
            plain: "部族見聞",
            parsed: "ぶぞくけんぶん",
        },
        {
            plain: "流泉の帰す場所",
            parsed: "りゅうせんのかえすばしょ",
        },
        {
            plain: "ユパンキの廻焔",
            parsed: "ユパンキのかいえん",
        },
        {
            plain: "祝福を祈り、テペトルに告ぐ",
            parsed: "しゅくふくをいのりテペトルにつぐ",
        },
        {
            plain: "えっ？ナタ？",
            parsed: "えっナタ",
        },
        {
            plain: "手に妙影",
            parsed: "てにみょうえん",
        },
        {
            plain: "流行りの音楽",
            parsed: "はやりのおんがく",
        },
        {
            plain: "運命の織機",
            parsed: "うんめいのしょっき",
        },
        {
            plain: "インテイワット",
            parsed: "インテイワット",
        },
        {
            plain: "廻焔",
            parsed: "かいえん",
        },
        {
            plain: "山の王の長牙",
            parsed: "やまのおうのちょうが",
        },
        {
            plain: "笠っち",
            parsed: "かさっち",
        },
        {
            plain: "マーガレット",
            parsed: "マーガレット",
        },
        {
            plain: "ドゥラフ・カッツェレイン",
            parsed: "ドゥラフカッツェレイン",
        },
        {
            plain: "ナンタック",
            parsed: "ナンタック",
        },
        {
            plain: "鯨井椛",
            parsed: "くじらいもみじ",
        },
        {
            plain: "ルーメラ",
            parsed: "ルーメラ",
        },
        {
            plain: "アランミナリ",
            parsed: "アランミナリ",
        },
        {
            plain: "シームルグ",
            parsed: "シームルグ",
        },
        {
            plain: "アルエ",
            parsed: "アルエ",
        },
        {
            plain: "デラロッシュ",
            parsed: "デラロッシュ",
        },
        {
            plain: "ブシコー",
            parsed: "ブシコー",
        },
        {
            plain: "マーセル",
            parsed: "マーセル",
        },
        {
            plain: "不思議な本のページ",
            parsed: "ふしぎなほんのページ",
        },
        {
            plain: "特別許可券",
            parsed: "とくべつきょかけん",
        },
        {
            plain: "ぽよぽよフルーツ",
            parsed: "ぽよぽよフルーツ",
        },
        {
            plain: "千岩団",
            parsed: "せんがんだん",
        },
        {
            plain: "パエトーン",
            parsed: "パエトーン",
        },
        {
            plain: "精錬素材",
            parsed: "せいれんそざい",
        },
        {
            plain: "マルテンスの万能保護材",
            parsed: "マルテンスのばんのうほござい",
        },
        {
            plain: "霞色の宝珠",
            parsed: "かすみいろのほうじゅ",
        },
        {
            plain: "黒曜の秘典",
            parsed: "こくようのひてん",
        },
        {
            plain: "灰燼の都に立つ英雄の絵巻",
            parsed: "かいじんのみやこにたつえいゆうのえまき",
        },
        {
            plain: "バラム",
            parsed: "バラム",
        },
        {
            plain: "ラマナイ",
            parsed: "ラマナイ",
        },
        {
            plain: "チュニーナ",
            parsed: "チュニーナ",
        },
        {
            plain: "アテア",
            parsed: "アテア",
        },
        {
            plain: "クイク",
            parsed: "クイク",
        },
        {
            plain: "ヴィチャマ",
            parsed: "ヴィチャマ",
        },
        {
            plain: "マルコ",
            parsed: "マルコ",
        },
        {
            plain: "コモンキ",
            parsed: "コモンキ",
        },
        {
            plain: "カーリャ",
            parsed: "カーリャ",
        },
        {
            plain: "ヴィランドラ",
            parsed: "ヴィランドラ",
        },
        {
            plain: "コオラウ",
            parsed: "コオラウ",
        },
        {
            plain: "カウル",
            parsed: "カウル",
        },
        {
            plain: "ケエホ",
            parsed: "ケエホ",
        },
        {
            plain: "ヌウ",
            parsed: "ヌウ",
        },
        {
            plain: "イミシュ",
            parsed: "イミシュ",
        },
        {
            plain: "チョウエン",
            parsed: "チョウエン",
        },
        {
            plain: "夜魂の試練",
            parsed: "やこんのしれん",
        },
        {
            plain: "秘炎の幽墟",
            parsed: "ひえんのゆうきょ",
        },
        {
            plain: "古の眺望台",
            parsed: "いにしえのちょうぼうだい",
        },
        {
            plain: "レインボースピリットの地",
            parsed: "レインボースピリットのち",
        },
        {
            plain: "フレイムグレネード・爛熱",
            parsed: "フレイムグレネードらんねつ",
        },
        {
            plain: "祝福の縛印",
            parsed: "しゅくふくのばくいん",
        },
        {
            plain: "秘源のベアリング",
            parsed: "ひげんのベアリング",
        },
        {
            plain: "秘源のシース",
            parsed: "ひげんのシース",
        },
        {
            plain: "秘源のコア",
            parsed: "ひげんのコア",
        },
        {
            plain: "砕けた意思の欠片",
            parsed: "くだけたいしのけっぺん",
        },
        {
            plain: "明瞭な意思の偶像",
            parsed: "めいりょうないしのぐうぞう",
        },
        {
            plain: "巡る意思の偶像",
            parsed: "めぐるいしのぐうぞう",
        },
        {
            plain: "燃え盛る石",
            parsed: "もえさかるいし",
        },
        {
            plain: "燃え盛る命の種",
            parsed: "もえさかるいのちのたね",
        },
        {
            plain: "燃え盛る遊像の眼",
            parsed: "もえさかるゆうぞうのめ",
        },
        {
            plain: "未熟な牙",
            parsed: "みじゅくなきば",
        },
        {
            plain: "熟練の牙",
            parsed: "じゅくれんなきば",
        },
        {
            plain: "覇道の牙",
            parsed: "はどうのきば",
        },
        {
            plain: "従戦士の木笛",
            parsed: "じゅうせんしのもくてき",
        },
        {
            plain: "戦士の鉄笛",
            parsed: "せんしのてってき",
        },
        {
            plain: "竜冠戦士の金笛",
            parsed: "りゅうかんせんしのきんてき",
        },
        {
            plain: "秘源機兵・ハンターシーカー",
            parsed: "ひげんきへいハンターシーカー",
        },
        {
            plain: "鋳砂の勇士・インタロゲイター",
            parsed: "いずなのゆうしインタロゲイター",
        },
        {
            plain: "鋳砂の勇士・シールドブレイカー",
            parsed: "いずなのゆうしシールドブレイカー",
        },
        {
            plain: "鋳砂の勇士・ジャベリニア",
            parsed: "いずなのゆうしジャベリニア",
        },
        {
            plain: "迅疾の勇士・シーカー",
            parsed: "じんしつのゆうしシーカー",
        },
        {
            plain: "迅疾の勇士・ストームスカウト",
            parsed: "じんしつのゆうしストームスカウト",
        },
        {
            plain: "迅疾の勇士・重刃の伝達使",
            parsed: "じんしつのゆうしじゅうじんのでんたつし",
        },
        {
            plain: "流刃の勇士・遊撃手",
            parsed: "りゅうじんのゆうしゆうげきしゅ",
        },
        {
            plain: "流刃の勇士・グリースソウ",
            parsed: "りゅうじんのゆうしグリースソウ",
        },
        {
            plain: "流刃の勇士・ジャベリックスロワー",
            parsed: "りゅうじんのゆうしジャベリックスロワー",
        },
        {
            plain: "テペトル竜戦士・砕晶のハンマー",
            parsed: "テペトルりゅうせんしさいしょうのハンマー",
        },
        {
            plain: "テペトル竜戦士・砕岩のブレード",
            parsed: "テペトルりゅうせんしさいがんのブレード",
        },
        {
            plain: "ユムカ竜戦士・飛葉の丸鋸",
            parsed: "ユムカりゅうせんしひばのまるのこ",
        },
        {
            plain: "ユムカ竜戦士・鳴空の大砲",
            parsed: "ユムカりゅうせんしめいくうのたいほう",
        },
        {
            plain: "コホラ竜戦士・裂波のスロワー",
            parsed: "コホラりゅうせんしれっぱのたいほう",
        },
        {
            plain: "コホラ竜戦士・裂礁のガトリング",
            parsed: "コホラりゅうせんしれっしょうのガトリング",
        },
        {
            plain: "テペトル仔竜",
            parsed: "テペトルこりゅう",
        },
        {
            plain: "テペトル竜",
            parsed: "テペトルりゅう",
        },
        {
            plain: "コホラ仔竜",
            parsed: "コホラこりゅう",
        },
        {
            plain: "コホラ竜",
            parsed: "コホラりゅう",
        },
        {
            plain: "ユムカ仔竜",
            parsed: "ユムカこりゅう",
        },
        {
            plain: "ユムカ竜",
            parsed: "ユムカりゅう",
        },
        {
            plain: "溶岩の像・土蝕者",
            parsed: "ようがんのぞうどしょくしゃ",
        },
        {
            plain: "岩窟・大霊の化身",
            parsed: "がんくつたいれいのけしん",
        },
        {
            plain: "噴流・大霊の化身",
            parsed: "ふんりゅうたいれいのけしん",
        },
        {
            plain: "山の王・貪食のユムカ竜",
            parsed: "やまのおうどんしょくのユムカりゅう",
        },
        {
            plain: "暴君・金焔のクク竜",
            parsed: "ぼうくんきんえんのククりゅう",
        },
        {
            plain: "溶岩の像・流燃体",
            parsed: "ようがんのぞうりゅうねんたい",
        },
        {
            plain: "きらきらジュエリー",
            parsed: "きらきらジュエリー",
        },
        {
            plain: "温泉タイム",
            parsed: "おんせんタイム",
        },
        {
            plain: "ドキドキポンポン",
            parsed: "ドキドキポンポン",
        },
        {
            plain: "ちび竜ビスケット",
            parsed: "ちびりゅうビスケット",
        },
        {
            plain: "チョコレート",
            parsed: "チョコレート",
        },
        {
            plain: "アカラジェ",
            parsed: "アカラジェ",
        },
        {
            plain: "プレイズ・ミートシチュー",
            parsed: "プレイズミートシチュー",
        },
        {
            plain: "カラフルフォレスト",
            parsed: "カラフルフォレスト",
        },
        {
            plain: "グレイン・ポソレ",
            parsed: "グレインポソレ",
        },
        {
            plain: "グレインチップス",
            parsed: "グレインチップス",
        },
        {
            plain: "魚のミントソースグリル",
            parsed: "さかなのミントソースグリル",
        },
        {
            plain: "グレインカップ",
            parsed: "グレインカップ",
        },
        {
            plain: "香り交じり合う風味",
            parsed: "かおりまじりあうふうみ",
        },
        {
            plain: "失われた炎神の瞳",
            parsed: "うしなわれたえんじんのひとみ",
        },
        {
            plain: "炎神の瞳の共鳴石",
            parsed: "えんじんのひとみのきょうめいせき",
        },
        {
            plain: "炎の印",
            parsed: "ほのおのしるし",
        },
        {
            plain: "萃凝晶",
            parsed: "すいぎょうしょう",
        },
        {
            plain: "ラクガキ写真機",
            parsed: "ラクガキしゃしんき",
        },
        {
            plain: "グレインの実",
            parsed: "グレインのみ",
        },
        {
            plain: "キャンドルキノコ",
            parsed: "キャンドルキノコ",
        },
        {
            plain: "エンバーコアフラワー",
            parsed: "エンバーコアフラワー",
        },
        {
            plain: "スピネルの実",
            parsed: "スピネルのみ",
        },
        {
            plain: "ショコアトゥルの種",
            parsed: "ショコアトゥルのみ",
        },
        {
            plain: "夜の玉",
            parsed: "よるのぎょく",
        },
        {
            plain: "大霊",
            parsed: "たいれい",
        },
        {
            plain: "アオヤマヘラサギ",
            parsed: "アオヤマヘラサギ",
        },
        {
            plain: "ハルバード・サイチョウ",
            parsed: "ハルバードサイチョウ",
        },
        {
            plain: "エリマキキジ",
            parsed: "エリマキキジ",
        },
        {
            plain: "ブラウンディア",
            parsed: "ブラウンディア",
        },
        {
            plain: "カピバラ",
            parsed: "カピバラ",
        },
        {
            plain: "クビナガライノ",
            parsed: "クビナガライノ",
        },
        {
            plain: "フライングモモンガ",
            parsed: "フライングモモンガ",
        },
        {
            plain: "クリスタルビートル",
            parsed: "クリスタルビートル",
        },
        {
            plain: "夜神の国",
            parsed: "やがみのくに",
        },
        {
            plain: "テケメカンの谷",
            parsed: "テケメカンのたに",
        },
        {
            plain: "「こだまの子」",
            parsed: "こだまのこ",
        },
        {
            plain: "硫晶の支脈",
            parsed: "りゅうしょうのしみゃく",
        },
        {
            plain: "山脈の亀裂",
            parsed: "さんみゃくのきれつ",
        },
        {
            plain: "水没遺跡",
            parsed: "すいぼついせき",
        },
        {
            plain: "万岩の地",
            parsed: "まんがんのち",
        },
        {
            plain: "テペアカク坂",
            parsed: "テペアカクざか",
        },
        {
            plain: "万火のほとぎ",
            parsed: "ばんかのほとぎ",
        },
        {
            plain: "ウィッツトリの丘",
            parsed: "ウィッツトリのおか",
        },
        {
            plain: "聖火競技場",
            parsed: "せいかきょうぎじょう",
        },
        {
            plain: "聖火競技場・チュエンマーケット",
            parsed: "せいかきょうぎじょうチュエンマーケット",
        },
        {
            plain: "聖火競技場・パックス神殿",
            parsed: "せいかきょうぎじょうパックスしんでん",
        },
        {
            plain: "灼石の円盤",
            parsed: "しゃくせきのえんばん",
        },
        {
            plain: "談義室",
            parsed: "だんわしつ",
        },
        {
            plain: "コアテペック山",
            parsed: "コアテペックさん",
        },
        {
            plain: "「懸木の民」",
            parsed: "かがりぎのたみ",
        },
        {
            plain: "彩晶の頂",
            parsed: "さいしょうのいただき",
        },
        {
            plain: "先人の神殿",
            parsed: "せんじんのしんでん",
        },
        {
            plain: "遺された神殿の弔う場",
            parsed: "のこされたしんでんのとむらうば",
        },
        {
            plain: "燃素採掘研究所",
            parsed: "ねんそさいくつけんきゅうじょ",
        },
        {
            plain: "トヤック源泉地",
            parsed: "トヤックげんせんち",
        },
        {
            plain: "「流泉の衆」",
            parsed: "りゅうせんのしゅう",
        },
        {
            plain: "アメヤルコの水域",
            parsed: "アメヤルコのすいいき",
        },
        {
            plain: "静寂の浮遊島",
            parsed: "せいじゃくのふゆうとう",
        },
        {
            plain: "盗炎者の秘島",
            parsed: "とうえんしゃのひとう",
        },
        {
            plain: "ざぶざぶサメくん",
            parsed: "ざぶざぶサメくん",
        },
        {
            plain: "ぐるぐるコマちゃん",
            parsed: "ぐるぐるコマちゃん",
        },
        {
            plain: "黒曜石のトーテムポール",
            parsed: "こくようせきのトーテムポール",
        },
        {
            plain: "スピリットストーン",
            parsed: "スピリットストーン",
        },
        {
            plain: "スピリットウェイ",
            parsed: "スピリットウェイ",
        },
        {
            plain: "栄華と炎天の途",
            parsed: "えいがとえんてんのと",
        },
        {
            plain: "白石に埋もれし黒石",
            parsed: "はくせきにうもれしこくせき",
        },
        {
            plain: "おーい！落ち着け！",
            parsed: "おーいおちつけ",
        },
        {
            plain: "火炎に向かって進め",
            parsed: "かえんにむかってすすめ",
        },
        {
            plain: "雲上の竜と共に",
            parsed: "うんじょうのりゅうとともに",
        },
        {
            plain: "飛泉のスピリット",
            parsed: "ひせんのスピリット",
        },
        {
            plain: "小手調べ",
            parsed: "こてしらべ",
        },
        {
            plain: "竜と山",
            parsed: "りゅうとやま",
        },
        {
            plain: "フレイムボム材",
            parsed: "フレイムボムざい",
        },
        {
            plain: "ピーチココナッツ材",
            parsed: "ピーチココナッツざい",
        },
        {
            plain: "ホワイトオーク材",
            parsed: "ホワイトオークざい",
        },
        {
            plain: "アッシェンロリニア材",
            parsed: "アッシェンロリニアざい",
        },
        {
            plain: "波しぶきのエラ",
            parsed: "なみしぶきのエラ",
        },
        {
            plain: "ケネパベリー",
            parsed: "ケネパベリー",
        },
        {
            plain: "サウリアンサキュレント",
            parsed: "サウリアンサキュレント",
        },
        {
            plain: "シャクギク",
            parsed: "シャクギク",
        },
        {
            plain: "帰火聖夜の巡礼",
            parsed: "きかせいやのじゅんれい",
        },
        {
            plain: "夜巡者の戦争",
            parsed: "よじゅんしゃのせんそう",
        },
        {
            plain: "燃素",
            parsed: "ねんそ",
        },
        {
            plain: "竜憑依",
            parsed: "りゅうひょうい",
        },
        {
            plain: "夜塊",
            parsed: "やこん",
        },
        {
            plain: "夜塊バースト",
            parsed: "やこんバースト",
        },
        {
            plain: "夜魂の加護",
            parsed: "やこんのかご",
        },
        {
            plain: "夜塊値",
            parsed: "やこんち",
        },
        {
            plain: "夜魂トランス",
            parsed: "やこんトランス",
        },
        {
            plain: "「角逐」の教え",
            parsed: "かくちくのおしえ",
        },
        {
            plain: "「角逐」の導き",
            parsed: "かくちくのみちびき",
        },
        {
            plain: "「角逐」の哲学",
            parsed: "かくちくのてつがく",
        },
        {
            plain: "「焚燼」の教え",
            parsed: "ふんじんのおしえ",
        },
        {
            plain: "「焚燼」の導き",
            parsed: "ふんじんのみちびき",
        },
        {
            plain: "「焚燼」の哲学",
            parsed: "ふんじんのてつがく",
        },
        {
            plain: "「紛争」の教え",
            parsed: "ふんそうのおしえ",
        },
        {
            plain: "灼心を捧げる恐怖",
            parsed: "しゃくしんをささげるきょうふ",
        },
        {
            plain: "灼心を捧げる躊躇",
            parsed: "しゃくしんをささげるちゅうちょ",
        },
        {
            plain: "灼心を捧げる決意",
            parsed: "しゃくしんをささげるけつい",
        },
        {
            plain: "灼心を捧げる栄光",
            parsed: "しゃくしんをささげるえいこう",
        },
        {
            plain: "神秘なる煙の思考",
            parsed: "しんぴなるけむりのしこう",
        },
        {
            plain: "神秘なる煙の予感",
            parsed: "しんぴなるけむりのよかん",
        },
        {
            plain: "神秘なる煙の予兆",
            parsed: "しんぴなるけむりのよちょう",
        },
        {
            plain: "神秘なる煙の啓示",
            parsed: "しんぴなるけむりのけいじ",
        },
        {
            plain: "狂乱の聖主の腐敗",
            parsed: "きょうらんのせいしゅのふはい",
        },
        {
            plain: "狂乱の聖主の哀れ",
            parsed: "きょうらんのせいしゅのあわれ",
        },
        {
            plain: "狂乱の聖主の溶貌",
            parsed: "きょうらんのせいしゅのようぼう",
        },
        {
            plain: "狂乱の聖主の神面",
            parsed: "きょうらんのせいしゅのしんめん",
        },
        {
            plain: "水仙十字の剣",
            parsed: "すいせんじゅうじのけん",
        },
        {
            plain: "エズピツァルの笛",
            parsed: "エズピツァルのふえ",
        },
        {
            plain: "スーパーアルティメット覇王魔剣",
            parsed: "スーパーアルティメットはおうまけん",
        },
        {
            plain: "アースシェイカー",
            parsed: "アースシェイカー",
        },
        {
            plain: "砂中の賢者達の問答",
            parsed: "さちゅうのけんじゃたちのもんどう",
        },
        {
            plain: "虹の行方",
            parsed: "にじのゆくえ",
        },
        {
            plain: "築雲",
            parsed: "ちくうん",
        },
        {
            plain: "チェーンブレイカー",
            parsed: "チェーンブレイカー",
        },
        {
            plain: "蒼紋の角杯",
            parsed: "そうもんのかくはい",
        },
        {
            plain: "ヤシュチェの環",
            parsed: "ヤシュチェのかん",
        },
        {
            plain: "サーフィンタイム",
            parsed: "サーフィンタイム",
        },
        {
            plain: "「カラフルノロマ」の手記",
            parsed: "カラフルノロマのしょき",
        },
        {
            plain: "静かな海色",
            parsed: "しずかなうみいろ",
        },
        {
            plain: "在りし日の歌",
            parsed: "ありしひのうた",
        },
        {
            plain: "残暑の森で囁かれる夜話",
            parsed: "ざんしょのもりでささやかれるよばなし",
        },
        {
            plain: "諧律奇想の断章",
            parsed: "かいりつきそうのだんしょう",
        },
        {
            plain: "遂げられなかった想い",
            parsed: "とげられなかったおもい",
        },
        {
            plain: "滝を臨む廃都",
            parsed: "たきをのぞむはいと",
        },
        {
            plain: "色褪せた劇場",
            parsed: "いろあせたげきじょう",
        },
        {
            plain: "ぼろぼろの廃墟",
            parsed: "ぼろぼろのはいきょ",
        },
        {
            plain: "ベッドタイムストーリー",
            parsed: "ベッドタイムストーリー",
        },
        {
            plain: "潮汐の章",
            parsed: "ちょうせきのしょう",
        },
        {
            plain: "獄守犬の章",
            parsed: "ごくもりけんのしょう",
        },
        {
            plain: "頌歌者の章",
            parsed: "しょうかしゃのしょう",
        },
        {
            plain: "野薔薇の章",
            parsed: "のばらのしょう",
        },
        {
            plain: "閑鶴の章",
            parsed: "かんかくのしょう",
        },
        {
            plain: "糸切鋏の章",
            parsed: "いときりばさみのしょう",
        },
        {
            plain: "ホワイトアッシュ材",
            parsed: "ホワイトアッシュざい",
        },
        {
            plain: "永き夢を紡いで",
            parsed: "ながきゆめをつむいで",
        },
        {
            plain: "双界に至る炎、熄えゆく赤夜",
            parsed: "そうかいにいたるほのおきえゆくせきや",
        },
        {
            plain: "燃え盛る炎の魔女",
            parsed: "もえさかるほのおのまじょ",
        },
        {
            plain: "ファントムハンター",
            parsed: "ファントムハンター",
        },
        {
            plain: "火祭りの冠",
            parsed: "ひまつりのかんむり",
        },
        {
            plain: "氷祭りの冠",
            parsed: "こおりまつりのかんむり",
        },
        {
            plain: "雷祭りの冠",
            parsed: "かみなりまつりのかんむり",
        },
        {
            plain: "空",
            parsed: "そら",
        },
        {
            plain: "蛍",
            parsed: "ほたる",
        },
        {
            plain: "旅人",
            parsed: "たびびと",
        },
        {
            plain: "空飛ぶチビ助",
            parsed: "そらとぶちびすけ",
        },
        {
            plain: "可愛い子ちゃん",
            parsed: "かわいこちゃん",
        },
        {
            plain: "吟遊野郎",
            parsed: "ぎんゆうやろう",
        },
        {
            plain: "エミ",
            parsed: "エミ",
        },
        {
            plain: "クレー",
            parsed: "クレー",
        },
        {
            plain: "反省室",
            parsed: "はんせいしつ",
        },
        {
            plain: "ディオナ・カッツェレイン",
            parsed: "ディオナカッツェレイン",
        },
        {
            plain: "首席錬金術師",
            parsed: "しゅせきれんきんじゅつし",
        },
        {
            plain: "調査小隊隊長",
            parsed: "ちょうさしょうたいたいちょう",
        },
        {
            plain: "白亜",
            parsed: "はくあ",
        },
        {
            plain: "ロサリア",
            parsed: "ロサリア",
        },
        {
            plain: "エウルア・ローレンス",
            parsed: "エウルアローレンス",
        },
        {
            plain: "遊撃小隊隊長",
            parsed: "ゆうげきしょうたいたいちょう",
        },
        {
            plain: "旧貴族",
            parsed: "きゅうきぞく",
        },
        {
            plain: "前進測量士",
            parsed: "ぜんしんそくりょうし",
        },
        {
            plain: "風神",
            parsed: "ふうじん",
        },
        {
            plain: "終天のフィナーレ",
            parsed: "しゅうてんのフィナーレ",
        },
        {
            plain: "アンドリアス",
            parsed: "アンドリアス",
        },
        {
            plain: "ボレアス",
            parsed: "ボレアス",
        },
        {
            plain: "アリス",
            parsed: "アリス",
        },
        {
            plain: "バーべロス",
            parsed: "バーべロス",
        },
        {
            plain: "おばば",
            parsed: "おばば",
        },
        {
            plain: "ニコ・リヤン",
            parsed: "ニコリヤン",
        },
        {
            plain: "アデリン",
            parsed: "アデリン",
        },
        {
            plain: "ホフマン・シュミット",
            parsed: "ホフマンシュミット",
        },
        {
            plain: "大団長",
            parsed: "だいだんちょう",
        },
        {
            plain: "マージョリー",
            parsed: "マージョリー",
        },
        {
            plain: "カリロエー",
            parsed: "カリロエー",
        },
        {
            plain: "子オオカミ",
            parsed: "こオオカミ",
        },
        {
            plain: "香菱",
            parsed: "シャンリン",
        },
        {
            plain: "刻晴",
            parsed: "こくせい",
        },
        {
            plain: "凝光",
            parsed: "ぎょうこう",
        },
        {
            plain: "七七",
            parsed: "なな",
        },
        {
            plain: "行秋",
            parsed: "ゆくあき",
        },
        {
            plain: "枕玉",
            parsed: "ちんぎょく",
        },
        {
            plain: "重雲",
            parsed: "ちょううん",
        },
        {
            plain: "北斗",
            parsed: "ほくと",
        },
        {
            plain: "鍾離",
            parsed: "しょうり",
        },
        {
            plain: "客卿",
            parsed: "かっけい",
        },
        {
            plain: "玉璋シールド",
            parsed: "ぎょくしょうシールド",
        },
        {
            plain: "魈",
            parsed: "しょう",
        },
        {
            plain: "煙緋",
            parsed: "えんひ",
        },
        {
            plain: "白朮",
            parsed: "びゃくじゅつ",
        },
        {
            plain: "白先生",
            parsed: "びゃくせんせい",
        },
        {
            plain: "申鶴",
            parsed: "しんかく",
        },
        {
            plain: "月桂",
            parsed: "ユェーグェイ",
        },
        {
            plain: "白玉大根",
            parsed: "しらたまだいこん",
        },
        {
            plain: "超スゴイ! 大根",
            parsed: "ちょうスゴイだいこん",
        },
        {
            plain: "理水おじちゃん",
            parsed: "りすいおじちゃん",
        },
        {
            plain: "留雲おばちゃん",
            parsed: "りゅううんおばちゃん",
        },
        {
            plain: "若陀龍王",
            parsed: "じゃくだりゅうおう",
        },
        {
            plain: "浮舎",
            parsed: "ふしゃ",
        },
        {
            plain: "弥怒",
            parsed: "みぬ",
        },
        {
            plain: "伐難",
            parsed: "ばつなん",
        },
        {
            plain: "応達",
            parsed: "おうたつ",
        },
        {
            plain: "卯師匠",
            parsed: "うーししょう",
        },
        {
            plain: "イェン",
            parsed: "イェン",
        },
        {
            plain: "帰終",
            parsed: "きしゅう",
        },
        {
            plain: "鳴海栖霞真君",
            parsed: "なるみせいかしんくん",
        },
        {
            plain: "長生",
            parsed: "ちょうせい",
        },
        {
            plain: "百聞",
            parsed: "ひゃくぶん",
        },
        {
            plain: "鶯",
            parsed: "うぐいす",
        },
        {
            plain: "石商",
            parsed: "せきしょう",
        },
        {
            plain: "クンジュ",
            parsed: "クンジュ",
        },
        {
            plain: "伯陽",
            parsed: "はくよう",
        },
        {
            plain: "浮錦",
            parsed: "ふきん",
        },
        {
            plain: "霊淵",
            parsed: "れいえん",
        },
        {
            plain: "薬君",
            parsed: "やくくん",
        },
        {
            plain: "遠黛",
            parsed: "えんたい",
        },
        {
            plain: "候章",
            parsed: "こうしょう",
        },
        {
            plain: "接笏",
            parsed: "せっしゃく",
        },
        {
            plain: "お嬢",
            parsed: "おじょう",
        },
        {
            plain: "若",
            parsed: "わか",
        },
        {
            plain: "神里家の家司",
            parsed: "かみさとけのけいし",
        },
        {
            plain: "顔役",
            parsed: "かおやく",
        },
        {
            plain: "八重様",
            parsed: "やえさま",
        },
        {
            plain: "焜焜油揚げ",
            parsed: "こんこんあぶらあげ",
        },
        {
            plain: "荒瀧・天下第一・一斗",
            parsed: "あらたきてんかだいいちいっと",
        },
        {
            plain: "牛使い野郎",
            parsed: "うしつかいやろう",
        },
        {
            plain: "深海ウシノシタ",
            parsed: "しんかいウシノシタ",
        },
        {
            plain: "ネコ箱急便",
            parsed: "ネコそうきゅうびん",
        },
        {
            plain: "ニャルダモン",
            parsed: "ニャルダモン",
        },
        {
            plain: "雷神",
            parsed: "らいじん",
        },
        {
            plain: "長野原龍之介",
            parsed: "ながのはらりゅうのすけ",
        },
        {
            plain: "花散里",
            parsed: "はなちるさと",
        },
        {
            plain: "若紫",
            parsed: "わかむらさき",
        },
        {
            plain: "グザヴィエ",
            parsed: "グザヴィエ",
        },
        {
            plain: "オロバシ",
            parsed: "オロバシ",
        },
        {
            plain: "オロバシノミコト",
            parsed: "オロバシノミコト",
        },
        {
            plain: "伊達",
            parsed: "だて",
        },
        {
            plain: "宮地",
            parsed: "みやじ",
        },
        {
            plain: "須婆達の彦",
            parsed: "すぱだのひこ",
        },
        {
            plain: "ジュリー",
            parsed: "ジュリー",
        },
        {
            plain: "パルヴァネ",
            parsed: "パルヴァネ",
        },
        {
            plain: "亀井宗久",
            parsed: "かめいむねひさ",
        },
        {
            plain: "広海",
            parsed: "ひろみ",
        },
        {
            plain: "順",
            parsed: "じゅん",
        },
        {
            plain: "セノ",
            parsed: "セノ",
        },
        {
            plain: "ティナリ",
            parsed: "ティナリ",
        },
        {
            plain: "コレイ",
            parsed: "コレイ",
        },
        {
            plain: "魔鱗病",
            parsed: "まりんびょう",
        },
        {
            plain: "ディシア",
            parsed: "ディシア",
        },
        {
            plain: "熾鬣の獅子",
            parsed: "しりょうのしし",
        },
        {
            plain: "アザール",
            parsed: "アザール",
        },
        {
            plain: "大賢者",
            parsed: "だいけんじゃ",
        },
        {
            plain: "ハイパシア",
            parsed: "ハイパシア",
        },
        {
            plain: "ドニアザード・フーマイ",
            parsed: "ドニアザードフーマイ",
        },
        {
            plain: "セタレ",
            parsed: "セタレ",
        },
        {
            plain: "ラフマン",
            parsed: "ラフマン",
        },
        {
            plain: "カカタ",
            parsed: "カカタ",
        },
        {
            plain: "アバッドイ",
            parsed: "アバッドイ",
        },
        {
            plain: "イナヤ",
            parsed: "イナヤ",
        },
        {
            plain: "シェイクズバイル",
            parsed: "シェイクズバイル",
        },
        {
            plain: "ナビヤ",
            parsed: "ナビヤ",
        },
        {
            plain: "ハールート",
            parsed: "ハールート",
        },
        {
            plain: "マールート",
            parsed: "マールート",
        },
        {
            plain: "アーリヤデーバ",
            parsed: "アーリヤデーバ",
        },
        {
            plain: "アレソ",
            parsed: "アレソ",
        },
        {
            plain: "サディーフ",
            parsed: "サディーフ",
        },
        {
            plain: "オーガスタス・ラヴレス",
            parsed: "オーガスタスラヴレス",
        },
        {
            plain: "オレグ",
            parsed: "オレグ",
        },
        {
            plain: "ジェイド",
            parsed: "ジェイド",
        },
        {
            plain: "ジェブライラ",
            parsed: "ジェブライラ",
        },
        {
            plain: "ユフィ",
            parsed: "ユフィ",
        },
        {
            plain: "ティルザード",
            parsed: "ティルザード",
        },
        {
            plain: "ブンブン",
            parsed: "ブンブン",
        },
        {
            plain: "サミエル",
            parsed: "サミエル",
        },
        {
            plain: "バベル・タニット",
            parsed: "バベルタニット",
        },
        {
            plain: "リルパァール",
            parsed: "リルパァール",
        },
        {
            plain: "アザリク",
            parsed: "アザリク",
        },
        {
            plain: "アデルフィ",
            parsed: "アデルフィ",
        },
        {
            plain: "ユフトゥン",
            parsed: "ユフトゥン",
        },
        {
            plain: "タッドラー",
            parsed: "タッドラー",
        },
        {
            plain: "マシーラ",
            parsed: "マシーラ",
        },
        {
            plain: "パーヴェズラヴァン",
            parsed: "パーヴェズラヴァン",
        },
        {
            plain: "フロドラッカー・フランケンシュタイン",
            parsed: "フロドラッカーフランケンシュタイン",
        },
        {
            plain: "フェリギス",
            parsed: "フェリギス",
        },
        {
            plain: "キングデシェレト",
            parsed: "キングデシェレト",
        },
        {
            plain: "ヴァルナ",
            parsed: "ヴァルナ",
        },
        {
            plain: "アランパカティ",
            parsed: "アランパカティ",
        },
        {
            plain: "アランチャントラ",
            parsed: "アランチャントラ",
        },
        {
            plain: "アランサカ",
            parsed: "アランサカ",
        },
        {
            plain: "アランパス",
            parsed: "アランパス",
        },
        {
            plain: "アランファラ",
            parsed: "アランファラ",
        },
        {
            plain: "アランシャクン",
            parsed: "アランシャクン",
        },
        {
            plain: "ハイヤーム",
            parsed: "ハイヤーム",
        },
        {
            plain: "イリヤース",
            parsed: "イリヤース",
        },
        {
            plain: "シラージ",
            parsed: "シラージ",
        },
        {
            plain: "クセラ",
            parsed: "クセラ",
        },
        {
            plain: "サッザマン・フーマイ",
            parsed: "サッザマンフーマイ",
        },
        {
            plain: "イドリシ",
            parsed: "イドリシ",
        },
        {
            plain: "バシャール",
            parsed: "バシャール",
        },
        {
            plain: "ティクリッティ",
            parsed: "ティクリッティ",
        },
        {
            plain: "ミジャール",
            parsed: "ミジャール",
        },
        {
            plain: "エデ",
            parsed: "エデ",
        },
        {
            plain: "コロタール・アルベリヒ",
            parsed: "コロタールアルベリヒ",
        },
        {
            plain: "罪人",
            parsed: "つみびと",
        },
        {
            plain: "メラック",
            parsed: "メラック",
        },
        {
            plain: "ザハハディ",
            parsed: "ザハハディ",
        },
        {
            plain: "ヌール",
            parsed: "ヌール",
        },
        {
            plain: "ソルシュ様",
            parsed: "ソルシュさま",
        },
        {
            plain: "二本角の花冠",
            parsed: "にほんづののかかん",
        },
        {
            plain: "謁賛主",
            parsed: "えっさんしゅ",
        },
        {
            plain: "識主",
            parsed: "しきしゅ",
        },
        {
            plain: "ソシー",
            parsed: "ソシー",
        },
        {
            plain: "ズルヴァーン",
            parsed: "ズルヴァーン",
        },
        {
            plain: "ミヒル",
            parsed: "ミヒル",
        },
        {
            plain: "ラシュヌ",
            parsed: "ラシュヌ",
        },
        {
            plain: "クリングソル",
            parsed: "クリングソル",
        },
        {
            plain: "フェドフ",
            parsed: "フェドフ",
        },
        {
            plain: "アーラヴ",
            parsed: "アーラヴ",
        },
        {
            plain: "バムーン",
            parsed: "バムーン",
        },
        {
            plain: "アトッサ",
            parsed: "アトッサ",
        },
        {
            plain: "カリベルト・アルベリヒ",
            parsed: "カリベルトアルベリヒ",
        },
        {
            plain: "シルヴァン",
            parsed: "シルヴァン",
        },
        {
            plain: "ルシアン",
            parsed: "ルシアン",
        },
        {
            plain: "イェレーナ",
            parsed: "イェレーナ",
        },
        {
            plain: "キリヤ",
            parsed: "キリヤ",
        },
        {
            plain: "シャルロット",
            parsed: "シャルロット",
        },
        {
            plain: "アラン・ギヨタン",
            parsed: "アランギヨタン",
        },
        {
            plain: "シルヴァ",
            parsed: "シルヴァ",
        },
        {
            plain: "マルシラック",
            parsed: "マルシラック",
        },
        {
            plain: "カーレス",
            parsed: "カーレス",
        },
        {
            plain: "エスタブレ",
            parsed: "エスタブレ",
        },
        {
            plain: "リーヴァ",
            parsed: "リーヴァ",
        },
        {
            plain: "カロン",
            parsed: "カロン",
        },
        {
            plain: "マイヤルデ",
            parsed: "マイヤルデ",
        },
        {
            plain: "アントーン・ロジャー",
            parsed: "アントーンロジャー",
        },
        {
            plain: "アイベル",
            parsed: "アイベル",
        },
        {
            plain: "エルファネ",
            parsed: "エルファネ",
        },
        {
            plain: "サルサ",
            parsed: "サルサ",
        },
        {
            plain: "ウーウーブドウ",
            parsed: "ウーウーブドウ",
        },
        {
            plain: "コーウェル",
            parsed: "コーウェル",
        },
        {
            plain: "ホールジー",
            parsed: "ホールジー",
        },
        {
            plain: "リリア",
            parsed: "リリア",
        },
        {
            plain: "ヴァシェ",
            parsed: "ヴァシェ",
        },
        {
            plain: "ヴェニール",
            parsed: "ヴェニール",
        },
        {
            plain: "ジャック",
            parsed: "ジャック",
        },
        {
            plain: "セサル",
            parsed: "セサル",
        },
        {
            plain: "ジェマ",
            parsed: "ジェマ",
        },
        {
            plain: "ロレンツォ",
            parsed: "ロレンツォ",
        },
        {
            plain: "マメール",
            parsed: "マメール",
        },
        {
            plain: "セイモア",
            parsed: "セイモア",
        },
        {
            plain: "アン",
            parsed: "アン",
        },
        {
            plain: "ナルキッソス",
            parsed: "ナルキッソス",
        },
        {
            plain: "べレナータ",
            parsed: "べレナータ",
        },
        {
            plain: "カラボス",
            parsed: "カラボス",
        },
        {
            plain: "トピア",
            parsed: "トピア",
        },
        {
            plain: "カノティラ",
            parsed: "カノティラ",
        },
        {
            plain: "アッシェン",
            parsed: "アッシェン",
        },
        {
            plain: "プーカ",
            parsed: "プーカ",
        },
        {
            plain: "チェシル",
            parsed: "チェシル",
        },
        {
            plain: "コスンツァーナ",
            parsed: "コスンツァーナ",
        },
        {
            plain: "ジェイコブ・インゴルド",
            parsed: "ジェイコブインゴルド",
        },
        {
            plain: "リリス",
            parsed: "リリス",
        },
        {
            plain: "マリアン・ギヨタン",
            parsed: "マリアンギヨタン",
        },
        {
            plain: "ルネ・ド・ペトリコール",
            parsed: "ルネドペトリコール",
        },
        {
            plain: "カール・インゴルド",
            parsed: "カールインゴルド",
        },
        {
            plain: "ヴァージル",
            parsed: "ヴァージル",
        },
        {
            plain: "ソニィ",
            parsed: "ソニィ",
        },
        {
            plain: "ルカ",
            parsed: "ルカ",
        },
        {
            plain: "アンリ",
            parsed: "アンリ",
        },
        {
            plain: "レモディエール",
            parsed: "レモディエール",
        },
        {
            plain: "エデル",
            parsed: "エデル",
        },
        {
            plain: "リノレア",
            parsed: "リノレア",
        },
        {
            plain: "デピエリ",
            parsed: "デピエリ",
        },
        {
            plain: "オーレル",
            parsed: "オーレル",
        },
        {
            plain: "ヴェルー",
            parsed: "ヴェルー",
        },
        {
            plain: "ロウ",
            parsed: "ロウ",
        },
        {
            plain: "イヴス",
            parsed: "イヴス",
        },
        {
            plain: "ファラナク",
            parsed: "ファラナク",
        },
        {
            plain: "ガルシア",
            parsed: "ガルシア",
        },
        {
            plain: "ナンバリングマシン",
            parsed: "ナンバリングマシン",
        },
        {
            plain: "メカントル",
            parsed: "メカントル",
        },
        {
            plain: "バビス",
            parsed: "バビス",
        },
        {
            plain: "スーパーキャノン",
            parsed: "スーパーキャノン",
        },
        {
            plain: "サロンメンバー",
            parsed: "サロンメンバー",
        },
        {
            plain: "ジェントルマン・アッシャー",
            parsed: "ジェントルマンアッシャー",
        },
        {
            plain: "クラバレッタさん",
            parsed: "クラバレッタさん",
        },
        {
            plain: "カロレ",
            parsed: "カロレ",
        },
        {
            plain: "ヴォートラン",
            parsed: "ヴォートラン",
        },
        {
            plain: "フェソレ",
            parsed: "フェソレ",
        },
        {
            plain: "ドゥジェー",
            parsed: "ドゥジェー",
        },
        {
            plain: "エイビス",
            parsed: "エイビス",
        },
        {
            plain: "バティスト",
            parsed: "バティスト",
        },
        {
            plain: "ベロニカ",
            parsed: "ベロニカ",
        },
        {
            plain: "クリーヴ",
            parsed: "クリーヴ",
        },
        {
            plain: "ウッスー",
            parsed: "ウッスー",
        },
        {
            plain: "ラティシア",
            parsed: "ラティシア",
        },
        {
            plain: "ユーサー",
            parsed: "ユーサー",
        },
        {
            plain: "フロリアン",
            parsed: "フロリアン",
        },
        {
            plain: "ラワット",
            parsed: "ラワット",
        },
        {
            plain: "ポトン",
            parsed: "ポトン",
        },
        {
            plain: "魔女婆さん",
            parsed: "まじょばあさん",
        },
        {
            plain: "氷の女皇",
            parsed: "こおりのじょこう",
        },
        {
            plain: "ダイン",
            parsed: "ダイン",
        },
        {
            plain: "ハールヴダン",
            parsed: "ハールヴダン",
        },
        {
            plain: "星と深淵を目指せ!",
            parsed: "ほしとしんえんをめざせ",
        },
        {
            plain: "風邪ひくなよ。",
            parsed: "かぜひくなよ",
        },
        {
            plain: "お前って本当にせっかちだな。",
            parsed: "おまえってほんとうにせっかちだな",
        },
        {
            plain: "お楽しみは…これから…",
            parsed: "おたのしみはこれから",
        },
        {
            plain: "岩の重さは安心できます",
            parsed: "いわのおもさはあんしんできます",
        },
        {
            plain: "攻守兼備",
            parsed: "こうしゅけんび",
        },
        {
            plain: "判決を―下す!",
            parsed: "はんけつをくだす",
        },
        {
            plain: "裁きを、受けよ!",
            parsed: "さばきをうけよ",
        },
        {
            plain: "創生術・擬似陽華",
            parsed: "そうせいじゅつぎじようか",
        },
        {
            plain: "擬似陽華",
            parsed: "ぎじようか",
        },
        {
            plain: "俺が払うよ",
            parsed: "おれがはらうよ",
        },
        {
            plain: "この剣は分かるかい!",
            parsed: "このけんはわかるかい",
        },
        {
            plain: "古華奥義",
            parsed: "こかおうぎ",
        },
        {
            plain: "炎食いの刑!",
            parsed: "ほのおぐいのけい",
        },
        {
            plain: "我が剣よ! 影に従え――",
            parsed: "わがけんよ かげにしたがえ",
        },
        {
            plain: "靖妖儺舞",
            parsed: "せいようなぶ",
        },
        {
            plain: "喚くがいい。",
            parsed: "わめくがいい",
        },
        {
            plain: "天理長駆。",
            parsed: "てんりちょうく",
        },
        {
            plain: "天道、ここにあり。",
            parsed: "てんどうここにあり",
        },
        {
            plain: "逃げ道はありません",
            parsed: "にげみちはありません",
        },
        {
            plain: "面白くないか?",
            parsed: "おもしろくないか",
        },
        {
            plain: "行ってらっしゃい",
            parsed: "いってらっしゃい",
        },
        {
            plain: "征討領域",
            parsed: "せいとうりょういき",
        },
        {
            plain: "深境回廊",
            parsed: "しんきょうかいろう",
        },
        {
            plain: "忘却の峡谷",
            parsed: "ぼうきゃくのきょうこく",
        },
        {
            plain: "銘記の谷",
            parsed: "めいきのたに",
        },
        {
            plain: "フィンドニールの頂上",
            parsed: "フィンドニールのちょうじょう",
        },
        {
            plain: "幻想シアター",
            parsed: "げんそうシアター",
        },
        {
            plain: "山脊の見守り",
            parsed: "さんせきのみまもり",
        },
        {
            plain: "孤雲凌霄の処",
            parsed: "こうんりょうしょうのところ",
        },
        {
            plain: "華清帰蔵密宮",
            parsed: "かしんきぞうみっきゅう",
        },
        {
            plain: "無妄引責密宮",
            parsed: "むぼういんせきみっきゅう",
        },
        {
            plain: "「伏龍の木」の底",
            parsed: "ふくりゅうのきのそこ",
        },
        {
            plain: "兆候隠遁の城",
            parsed: "ちょうこういんとんのしろ",
        },
        {
            plain: "鳴神島・天守",
            parsed: "なるかみじまてんしゅ",
        },
        {
            plain: "夢想楽土の結末",
            parsed: "むそうらくどのけつまつ",
        },
        {
            plain: "淨琉璃工房",
            parsed: "じょうるりこうぼう",
        },
        {
            plain: "原初の郷",
            parsed: "げんしょのさと",
        },
        {
            plain: "帰元ノ庭",
            parsed: "きげんノにわ",
        },
        {
            plain: "染境",
            parsed: "せんきょう",
        },
        {
            plain: "蒼白の遺栄",
            parsed: "そうはくのいえい",
        },
        {
            plain: "罪禍の終末",
            parsed: "ざいかのしゅうまつ",
        },
        {
            plain: "異界の余影",
            parsed: "いかいのよかげ",
        },
        {
            plain: "暴風の種",
            parsed: "ぼうふうのたね",
        },
        {
            plain: "雷光のプリズム",
            parsed: "らいこうのプリズム",
        },
        {
            plain: "凝結の華",
            parsed: "ぎょうけつのはな",
        },
        {
            plain: "玄岩の塔",
            parsed: "げんがんのとう",
        },
        {
            plain: "陰燃の珠",
            parsed: "いんねんのたま",
        },
        {
            plain: "排他の露",
            parsed: "はいたのつゆ",
        },
        {
            plain: "滅諍の蔓",
            parsed: "めつじょうのつる",
        },
        {
            plain: "極寒のコア",
            parsed: "ごっかんのコア",
        },
        {
            plain: "常燃の火種",
            parsed: "じょうねんのひだね",
        },
        {
            plain: "浄水の心",
            parsed: "じょうすいのこころ",
        },
        {
            plain: "雷霆の念珠",
            parsed: "らいていのねんじゅ",
        },
        {
            plain: "未熟の玉石",
            parsed: "みじゅくのぎょくせき",
        },
        {
            plain: "魔偶の芯",
            parsed: "まぐうのしん",
        },
        {
            plain: "恒常からくりの芯",
            parsed: "こうじょうからくりのしん",
        },
        {
            plain: "獣域王器",
            parsed: "じゅういきおうき",
        },
        {
            plain: "ドラゴエアのニセヒレ",
            parsed: "ドラゴエアのニセヒレ",
        },
        {
            plain: "永続コア",
            parsed: "えいぞくコア",
        },
        {
            plain: "導光四面体",
            parsed: "どうこうしめんたい",
        },
        {
            plain: "常闇の輪",
            parsed: "とこやみのわ",
        },
        {
            plain: "奇械部品・コッペリア",
            parsed: "きかいぶひんコッペリア",
        },
        {
            plain: "奇械部品・コペリウス",
            parsed: "きかいぶひんコペリウス",
        },
        {
            plain: "帝王の決断",
            parsed: "ていおうのけつだん",
        },
        {
            plain: "東風の羽根",
            parsed: "とうふうのはね",
        },
        {
            plain: "東風の爪",
            parsed: "とうふうのつめ",
        },
        {
            plain: "東風の吐息",
            parsed: "とうふうのといき",
        },
        {
            plain: "北風のしっぽ",
            parsed: "きたかぜのしっぽ",
        },
        {
            plain: "北風のリング",
            parsed: "きたかぜのリング",
        },
        {
            plain: "呑天の鯨・只角",
            parsed: "どんてんのくじらしかく",
        },
        {
            plain: "魔王の刃・残片",
            parsed: "まおうのやいばざんぺん",
        },
        {
            plain: "武煉の魂・孤影",
            parsed: "ぶれんのたましいこえい",
        },
        {
            plain: "龍王の冠",
            parsed: "りゅうおうのかんむり",
        },
        {
            plain: "血玉の枝",
            parsed: "けつぎょくのえだ",
        },
        {
            plain: "鍍金の鱗",
            parsed: "ときんのうろこ",
        },
        {
            plain: "灰燼の心",
            parsed: "かいじんのこころ",
        },
        {
            plain: "獄炎の蝶",
            parsed: "ごくえんのちょう",
        },
        {
            plain: "溶滅の刻",
            parsed: "ようめつのとき",
        },
        {
            plain: "天地に生える蕨",
            parsed: "てんちにはえるわらび",
        },
        {
            plain: "原初のオアシスの初咲き",
            parsed: "げんしょのオアシスのはつざき",
        },
        {
            plain: "太古の樹海の一瞬",
            parsed: "たいこのじゅかいのいっしゅん",
        },
        {
            plain: "凝雲の鱗甲",
            parsed: "ぎょううんのりんこう",
        },
        {
            plain: "黒晶の角笛",
            parsed: "こくしょうのつのぶえ",
        },
        {
            plain: "黒銅の角笛",
            parsed: "こくどうのつのぶえ",
        },
        {
            plain: "重い角笛",
            parsed: "おもいつのぶえ",
        },
        {
            plain: "地脈の新芽",
            parsed: "ちみゃくのしんめ",
        },
        {
            plain: "地脈の枯れ葉",
            parsed: "ちみゃくのかれは",
        },
        {
            plain: "混沌の炉心",
            parsed: "こんとんのろしん",
        },
        {
            plain: "混沌の回路",
            parsed: "こんとんのかいろ",
        },
        {
            plain: "混沌の装置",
            parsed: "こんとんのそうち",
        },
        {
            plain: "混沌の真眼",
            parsed: "こんとんのしんがん",
        },
        {
            plain: "混沌の中枢",
            parsed: "こんとんのちゅうすう",
        },
        {
            plain: "混沌の機関",
            parsed: "こんとんのきかん",
        },
        {
            plain: "混沌ボルト",
            parsed: "こんとんボルト",
        },
        {
            plain: "混沌モジュール",
            parsed: "こんとんモジュール",
        },
        {
            plain: "混沌ストレージ",
            parsed: "こんとんストレージ",
        },
        {
            plain: "石化した骨片",
            parsed: "せきかしたこっぺん",
        },
        {
            plain: "丈夫な骨片",
            parsed: "じょうぶなこっぺん",
        },
        {
            plain: "脆い骨片",
            parsed: "もろいこっぺん",
        },
        {
            plain: "スライムのピュレ",
            parsed: "スライムのピュレ",
        },
        {
            plain: "スライムの分泌物",
            parsed: "スライムのぶんぴつぶつ",
        },
        {
            plain: "スライムの液体",
            parsed: "スライムのえきたい",
        },
        {
            plain: "フライムの晶化核",
            parsed: "フライムのしょうかかく",
        },
        {
            plain: "フライムの幽核",
            parsed: "フライムのゆうかく",
        },
        {
            plain: "フライムの乾核",
            parsed: "フライムのかんかく",
        },
        {
            plain: "不吉な仮面",
            parsed: "ふきつなかめん",
        },
        {
            plain: "汚れた仮面",
            parsed: "よごれたかめん",
        },
        {
            plain: "破損した仮面",
            parsed: "はそんしたかめん",
        },
        {
            plain: "禁呪の絵巻",
            parsed: "きんじゅのえまき",
        },
        {
            plain: "封魔の絵巻",
            parsed: "ふうまのえまき",
        },
        {
            plain: "占いの絵巻",
            parsed: "うらないのえまき",
        },
        {
            plain: "歴戦の矢先",
            parsed: "れきせんのやさき",
        },
        {
            plain: "鋭利な矢先",
            parsed: "えいりなやさき",
        },
        {
            plain: "牢固な矢先",
            parsed: "ろうこなやさき",
        },
        {
            plain: "ゴールドの鴉マーク",
            parsed: "ゴールドのカラスマーク",
        },
        {
            plain: "シルバーの鴉マーク",
            parsed: "シルバーのカラスマーク",
        },
        {
            plain: "宝探しの鴉マーク",
            parsed: "たからさがしのカラスマーク",
        },
        {
            plain: "原素花の蜜",
            parsed: "げんそばなのみつ",
        },
        {
            plain: "トリックフラワーの蜜",
            parsed: "トリックフラワーのみつ",
        },
        {
            plain: "古びた鍔",
            parsed: "ふるびたつば",
        },
        {
            plain: "影打の鍔",
            parsed: "かげうちのつば",
        },
        {
            plain: "名刀の鍔",
            parsed: "めいとうのつば",
        },
        {
            plain: "キノコンの胞子",
            parsed: "キノコンのほうし",
        },
        {
            plain: "キノコンの衰菌核",
            parsed: "キノコンのすいきんかく",
        },
        {
            plain: "キノコンの眠菌核",
            parsed: "キノコンのみんきんかく",
        },
        {
            plain: "キノコンの壮菌核",
            parsed: "キノコンのそうきんかく",
        },
        {
            plain: "暗晦の彫刻",
            parsed: "あんかいのちょうこく",
        },
        {
            plain: "黒夜の彫刻",
            parsed: "こくやのちょうこく",
        },
        {
            plain: "幽邃なる彫刻",
            parsed: "ゆうすいなるちょうこく",
        },
        {
            plain: "色褪せた赤い絹",
            parsed: "いろあせたあかいきぬ",
        },
        {
            plain: "毀れた背骨",
            parsed: "やぶれたはいこつ",
        },
        {
            plain: "堅固な背骨",
            parsed: "けんごなはいこつ",
        },
        {
            plain: "何処かで摘まれた咲きかけの花",
            parsed: "どこかでつまれたさきかけのはな",
        },
        {
            plain: "誰かが大切にしていた花",
            parsed: "だれかがたいせつにしていたはな",
        },
        {
            plain: "流浪者の満開の花",
            parsed: "るろうしゃのまんかいのはな",
        },
        {
            plain: "異海の露",
            parsed: "いかいのつゆ",
        },
        {
            plain: "異海の塊",
            parsed: "いかいのかたまり",
        },
        {
            plain: "色変わりの結晶",
            parsed: "いろがわりのけっしょう",
        },
        {
            plain: "濁水のひとしずく",
            parsed: "だくすいのひとしずく",
        },
        {
            plain: "濁水のひとすくい",
            parsed: "だくすいのひとすくい",
        },
        {
            plain: "生まれたての濁水幻霊",
            parsed: "うまれたてのだくすいげんれい",
        },
        {
            plain: "整合の歯車",
            parsed: "せいごうのはぐるま",
        },
        {
            plain: "機構の平歯車",
            parsed: "きこうのひらはぐるま",
        },
        {
            plain: "奇械のコア歯車",
            parsed: "きかいのコアはぐるま",
        },
        {
            plain: "隙間のコア",
            parsed: "すきまのコア",
        },
        {
            plain: "外界のシナプス",
            parsed: "がいかいのシナプス",
        },
        {
            plain: "異界生命体のコア",
            parsed: "いかいせいめいたいのコア",
        },
        {
            plain: "ヒルチャール",
            parsed: "ヒルチャール",
        },
        {
            plain: "ヒルチャール・戦士",
            parsed: "ヒルチャールせんし",
        },
        {
            plain: "ヒルチャール・突進",
            parsed: "ヒルチャールとっしん",
        },
        {
            plain: "ヒルチャール・射手",
            parsed: "ヒルチャールしゃしゅ",
        },
        {
            plain: "ヒルチャール・爆弾",
            parsed: "ヒルチャールばくだん",
        },
        {
            plain: "ヒルチャール暴徒",
            parsed: "ヒルチャールぼうと",
        },
        {
            plain: "ヒルチャール暴徒・木盾",
            parsed: "ヒルチャールぼうともくじゅん",
        },
        {
            plain: "ヒルチャール暴徒・岩盾",
            parsed: "ヒルチャールぼうとがんじゅん",
        },
        {
            plain: "ヒルチャール暴徒・氷盾",
            parsed: "ヒルチャールぼうとひょうじゅん",
        },
        {
            plain: "ヒルチャール暴徒・炎斧",
            parsed: "ヒルチャールぼうとえんふ",
        },
        {
            plain: "ヒルチャール暴徒・雷斧",
            parsed: "ヒルチャールぼうとらいふ",
        },
        {
            plain: "ヒルチャール・岩兜の王",
            parsed: "ヒルチャールいわかぶとのおう",
        },
        {
            plain: "ヒルチャール・霜鎧の王",
            parsed: "ヒルチャールしもよろいのおう",
        },
        {
            plain: "ヒルチャール・雷兜の王",
            parsed: "ヒルチャールかみなりかぶとのおう",
        },
        {
            plain: "ヒルチャール王者",
            parsed: "ヒルチャールおうじゃ",
        },
        {
            plain: "遺跡機兵",
            parsed: "いせききへい",
        },
        {
            plain: "宝盗団・盗掘者",
            parsed: "ほうとうだんとうくつしゃ",
        },
        {
            plain: "ベト",
            parsed: "ベト",
        },
        {
            plain: "アレフ",
            parsed: "アレフ",
        },
        {
            plain: "ギメル",
            parsed: "ギメル",
        },
        {
            plain: "ダレット",
            parsed: "ダレット",
        },
        {
            plain: "アイン",
            parsed: "アイン",
        },
        {
            plain: "ヒイ",
            parsed: "ヒイ",
        },
        {
            plain: "ザイン",
            parsed: "ザイン",
        },
        {
            plain: "オセル",
            parsed: "オセル",
        },
        {
            plain: "野伏衆",
            parsed: "のぶししゅう",
        },
        {
            plain: "寄騎武士",
            parsed: "よりきぶし",
        },
        {
            plain: "恒常からくり陣形",
            parsed: "こうじょうからくりじんけい",
        },
        {
            plain: "獣域ウェルプ",
            parsed: "じゅういきウェルプ",
        },
        {
            plain: "獣域ウェルプ・岩",
            parsed: "じゅういきウェルプいわ",
        },
        {
            plain: "獣域ウェルプ・雷",
            parsed: "じゅういきウェルプかみなり",
        },
        {
            plain: "獣域ウルブズ",
            parsed: "じゅういきウルブズ",
        },
        {
            plain: "黒蛇衆",
            parsed: "こくじゃしゅう",
        },
        {
            plain: "キノコン",
            parsed: "キノコン",
        },
        {
            plain: "終末オアシスの守護者",
            parsed: "しゅうまつオアシスのしゅごしゃ",
        },
        {
            plain: "オアシスの心",
            parsed: "オアシスのこころ",
        },
        {
            plain: "蘇生段階",
            parsed: "そせいだんかい",
        },
        {
            plain: "基本増殖生命体",
            parsed: "きほんぞうしょくせいめいたい",
        },
        {
            plain: "捕食増殖生命体",
            parsed: "ほしょくぞうしょくせいめいたい",
        },
        {
            plain: "防衛増殖生命体",
            parsed: "ぼうえいぞうしょくせいめいたい",
        },
        {
            plain: "巣作り増殖生命体",
            parsed: "すづくりぞうしょくせいめいたい",
        },
        {
            plain: "飼育増殖生命体",
            parsed: "しいくぞうしょくせいめいたい",
        },
        {
            plain: "破壊増殖生命体",
            parsed: "はかいぞうしょくせいめいたい",
        },
        {
            plain: "起源オアシスの守護者",
            parsed: "きげんオアシスのしゅごしゃ",
        },
        {
            plain: "コッペリア",
            parsed: "コッペリア",
        },
        {
            plain: "コペリウス",
            parsed: "コペリウス",
        },
        {
            plain: "コッペリアの葬送",
            parsed: "コッペリアのそうそう",
        },
        {
            plain: "コペリウスの劫罰",
            parsed: "コペリウスのごうばつ",
        },
        {
            plain: "重甲シールド",
            parsed: "じゅうこうシールド",
        },
        {
            plain: "原海水刃",
            parsed: "げんかいすいじん",
        },
        {
            plain: "亜種生物",
            parsed: "あしゅせいぶつ",
        },
        {
            plain: "湖辺のヴィヴィアン",
            parsed: "こへんのヴィヴィアン",
        },
        {
            plain: "湖辺のニニアン",
            parsed: "こへんのニニアン",
        },
        {
            plain: "オーシャン巡回法官",
            parsed: "オーシャンじゅんかいほうかん",
        },
        {
            plain: "鉄皮の子爵",
            parsed: "てっぴのししゃく",
        },
        {
            plain: "双生妖精の騎士・アンジェリカ",
            parsed: "そうせいようせいのきしアンジェリカ",
        },
        {
            plain: "双生妖精の騎士・ミドロ",
            parsed: "そうせいようせいのきしミドロ",
        },
        {
            plain: "「消えゆく老兵」",
            parsed: "きえゆくろうへい",
        },
        {
            plain: "隠者の王・ドアーチュ",
            parsed: "いんじゃのおうドアーチュ",
        },
        {
            plain: "白石と黄銅の彫像",
            parsed: "はくせきとおうどうのちょうぞう",
        },
        {
            plain: "明星斎",
            parsed: "みょうじょうさい",
        },
        {
            plain: "根付の源",
            parsed: "ねつけのげん",
        },
        {
            plain: "メナケリーショップ",
            parsed: "メナケリーショップ",
        },
        {
            plain: "セントラルポートホール",
            parsed: "セントラルポートホール",
        },
        {
            plain: "ポート・ロマリタイム",
            parsed: "ポートロマリタイム",
        },
        {
            plain: "バーティンの珍奇館",
            parsed: "バーティンのちんきかん",
        },
        {
            plain: "ボーモント工房",
            parsed: "ボーモントこうぼう",
        },
        {
            plain: "特別許可食堂",
            parsed: "とくべつきょかしょくどう",
        },
        {
            plain: "サービス食",
            parsed: "サービスしょく",
        },
        {
            plain: "熟練度",
            parsed: "じゅくれんど",
        },
        {
            plain: "オリジナル料理",
            parsed: "オリジナルりょうり",
        },
        {
            plain: "お肉たっぷり寿司",
            parsed: "おにくたっぷりずし",
        },
        {
            plain: "マジックスペシャル",
            parsed: "マジックスペシャル",
        },
        {
            plain: "フルーティーな串焼き",
            parsed: "フルーティーなくしやき",
        },
        {
            plain: "ふわふわパンケーキ",
            parsed: "ふわふわパンケーキ",
        },
        {
            plain: "魔法のミートソース",
            parsed: "まほうのミートソース",
        },
        {
            plain: "スパイシーポトフ",
            parsed: "スパイシーポトフ",
        },
        {
            plain: "テイワット風焦げ卵",
            parsed: "テイワットふうこげたまご",
        },
        {
            plain: "ツメ型ハッシュドポテト",
            parsed: "ツメがたハッシュドポテト",
        },
        {
            plain: "五九三式栄養食",
            parsed: "ごきゅうさんしきえいようしょく",
        },
        {
            plain: "祈聖シンフォニー",
            parsed: "きせいシンフォニー",
        },
        {
            plain: "絶対オツマミじゃない",
            parsed: "ぜったいオツマミじゃない",
        },
        {
            plain: "ヴァーディクトディナー",
            parsed: "ヴァーディクトディナー",
        },
        {
            plain: "眠気覚ましピザ",
            parsed: "ねむけざましピザ",
        },
        {
            plain: "モンドの過去",
            parsed: "モンドのかこ",
        },
        {
            plain: "最高の知恵・生活",
            parsed: "さいこうのちえせいかつ",
        },
        {
            plain: "魚香トースト",
            parsed: "ぎょこうトースト",
        },
        {
            plain: "林の夢",
            parsed: "はやしのゆめ",
        },
        {
            plain: "荒波パイ",
            parsed: "あらなみパイ",
        },
        {
            plain: "測量士エッグバーガー",
            parsed: "そくりょうしエッグバーガー",
        },
        {
            plain: "真・風神ヒュッツポット",
            parsed: "しんふうじんヒュッツポット",
        },
        {
            plain: "万民堂水煮魚",
            parsed: "ばんみんどうみずにざかな",
        },
        {
            plain: "江湖百味",
            parsed: "こうこひゃくみ",
        },
        {
            plain: "豚肉の唐辛子炒め",
            parsed: "ぶたにくのとうがらしいため",
        },
        {
            plain: "乾坤モラミート",
            parsed: "けんこんモラミート",
        },
        {
            plain: "アシタナシ",
            parsed: "アシタナシ",
        },
        {
            plain: "九死一生の焼き魚",
            parsed: "きゅうしいっしょうのやきざかな",
        },
        {
            plain: "夢",
            parsed: "ゆめ",
        },
        {
            plain: "盛世太平",
            parsed: "せいせいたいへい",
        },
        {
            plain: "とろ火で煮込んだ腌篤鮮",
            parsed: "とろびでにこんだイェンドゥシェン",
        },
        {
            plain: "幽々大行軍",
            parsed: "ゆうゆうだいこうぐん",
        },
        {
            plain: "雲隠し玉",
            parsed: "くもかくしだま",
        },
        {
            plain: "軽策家庭料理",
            parsed: "けいさくかていりょうり",
        },
        {
            plain: "極みの一釣り",
            parsed: "きわみのひとつり",
        },
        {
            plain: "法律ここにあり",
            parsed: "ほうりつここにあり",
        },
        {
            plain: "四喜円満",
            parsed: "しきえんまん",
        },
        {
            plain: "飲茶しようぜ！",
            parsed: "やむちゃしようぜ",
        },
        {
            plain: "眩暈回避術・改",
            parsed: "めまいかいひじゅつかい",
        },
        {
            plain: "温もり",
            parsed: "ぬくもり",
        },
        {
            plain: "雨奇晴好",
            parsed: "うきせいこう",
        },
        {
            plain: "紅炉一点雪",
            parsed: "こうろいってんゆき",
        },
        {
            plain: "「静寂閑雅」",
            parsed: "せいじゃくかんが",
        },
        {
            plain: "夏祭りの游魚",
            parsed: "なつまつりのゆうぎょ",
        },
        {
            plain: "奇策",
            parsed: "きさく",
        },
        {
            plain: "常勝伝説",
            parsed: "じょうしょうでんせつ",
        },
        {
            plain: "福は内うどん",
            parsed: "ふくはうちうどん",
        },
        {
            plain: "強者の道のり",
            parsed: "きょうじゃのみちのり",
        },
        {
            plain: "オムライス・ワルツ",
            parsed: "オムライスワルツ",
        },
        {
            plain: "永遠なる信仰",
            parsed: "えいえんなるしんこう",
        },
        {
            plain: "唯一の真相",
            parsed: "ゆいいつのしんそう",
        },
        {
            plain: "憧れ",
            parsed: "あこがれ",
        },
        {
            plain: "決闘の魂",
            parsed: "けっとうのたましい",
        },
        {
            plain: "ひらめく踊り",
            parsed: "ひらめくおどり",
        },
        {
            plain: "安眠へのデザイア",
            parsed: "あんみんへのデザイア",
        },
        {
            plain: "「理想的状況」",
            parsed: "りそうてきじょうきょう",
        },
        {
            plain: "真味茶漬け",
            parsed: "しんみちゃづけ",
        },
        {
            plain: "熾金の鍋",
            parsed: "しきんのなべ",
        },
        {
            plain: "至れり尽くせり",
            parsed: "いたれりつくせり",
        },
        {
            plain: "丹精込めた一作",
            parsed: "たんせいこめたいっさく",
        },
        {
            plain: "古風な製法のデーツナン",
            parsed: "こふうなせいほうのデーツナン",
        },
        {
            plain: "ウマウマシャワルマサンド",
            parsed: "ウマウマシャワルマサンド",
        },
        {
            plain: "キューブトリック",
            parsed: "キューブトリック",
        },
        {
            plain: "アフタヌーンティー",
            parsed: "アフタヌーンティー",
        },
        {
            plain: "罪・対処不必要型",
            parsed: "つみたいしょふひつようがた",
        },
        {
            plain: "ファッションショー",
            parsed: "ファッションショー",
        },
        {
            plain: "炉火の昔語り",
            parsed: "ろかのむかしがたり",
        },
        {
            plain: "狩りの収穫",
            parsed: "かりのしゅうかく",
        },
        {
            plain: "栄養たっぷりバランス食",
            parsed: "えいようたっぷりバランスしょく",
        },
        {
            plain: "原石",
            parsed: "げんせき",
        },
        {
            plain: "創世結晶",
            parsed: "そうせいけっしょう",
        },
        {
            plain: "失われた風神の瞳",
            parsed: "うしなわれたふうじんのひとみ",
        },
        {
            plain: "失われた岩神の瞳",
            parsed: "うしなわれたがんしんのひとみ",
        },
        {
            plain: "失われた雷神の瞳",
            parsed: "うしなわれたらいじんのひとみ",
        },
        {
            plain: "失われた草神の瞳",
            parsed: "うしなわれたそうしんのひとみ",
        },
        {
            plain: "失われた水神の瞳",
            parsed: "うしなわれたすいじんのひとみ",
        },
        {
            plain: "七国の印",
            parsed: "しちこくのしるし",
        },
        {
            plain: "イノシシプリンセス",
            parsed: "イノシシプリンセス",
        },
        {
            plain: "森林書",
            parsed: "しんりんしょ",
        },
        {
            plain: "洗塵の鈴",
            parsed: "せんじんのすず",
        },
        {
            plain: "バルサムフラワー",
            parsed: "バルサムフラワー",
        },
        {
            plain: "アランハオマ",
            parsed: "アランハオマ",
        },
        {
            plain: "駒",
            parsed: "こま",
        },
        {
            plain: "活性化デバイス",
            parsed: "かっせいかデバイス",
        },
        {
            plain: "マジックポケット",
            parsed: "マジックポケット",
        },
        {
            plain: "「歌劇場の交換マジック」事件ファイル",
            parsed: "かげきじょうのこうかんマジックじけんファイル",
        },
        {
            plain: "「水と失踪者」事件ファイル",
            parsed: "みずとしっそうしゃじけんファイル",
        },
        {
            plain: "不思議なコア",
            parsed: "ふしぎなコア",
        },
        {
            plain: "奇妙なパーツ",
            parsed: "きみょうなパーツ",
        },
        {
            plain: "海風の夢",
            parsed: "うみかぜのゆめ",
        },
        {
            plain: "サマータイムスパークル",
            parsed: "サマータイムスパークル",
        },
        {
            plain: "霓裾の舞",
            parsed: "げいきょのまい",
        },
        {
            plain: "紗の幽蘭",
            parsed: "しゃのゆうらん",
        },
        {
            plain: "レッドデッド・オブ・ナイト",
            parsed: "レッドデッドオブナイト",
        },
        {
            plain: "葉に隠れし芳名",
            parsed: "はにかくれしほうめい",
        },
        {
            plain: "帆影に戯る風",
            parsed: "ほかげにたわむるかぜ",
        },
        {
            plain: "竹身雨化",
            parsed: "ちくしんうか",
        },
        {
            plain: "玄玉遥芳",
            parsed: "げんぎょくようほう",
        },
        {
            plain: "冷花幽露",
            parsed: "れいかゆうろ",
        },
        {
            plain: "東風はこぶ花の吐息",
            parsed: "とうふうはこぶはなのといき",
        },
        {
            plain: "麗しき怪傑",
            parsed: "うるわしきかいけつ",
        },
        {
            plain: "玉璜古ガメ",
            parsed: "ぎょくごうこがめ",
        },
        {
            plain: "霊光百種",
            parsed: "れいこうひゃくしゅ",
        },
        {
            plain: "霊光カゲロウ",
            parsed: "れいこうカゲロウ",
        },
        {
            plain: "甘露カゲロウ",
            parsed: "かんろカゲロウ",
        },
        {
            plain: "モンド",
            parsed: "モンド",
        },
        {
            plain: "モンド人",
            parsed: "モンドじん",
        },
        {
            plain: "燼寂海",
            parsed: "じんじゃくかい",
        },
        {
            plain: "泉の境",
            parsed: "いずみのさかい",
        },
        {
            plain: "チ虎岩",
            parsed: "ちこがん",
        },
        {
            plain: "層岩巨淵",
            parsed: "そうがんきょえん",
        },
        {
            plain: "稲妻城",
            parsed: "いなずまじょう",
        },
        {
            plain: "マハヴァナラーナパナ",
            parsed: "マハヴァナラーナパナ",
        },
        {
            plain: "砂ノ目",
            parsed: "すなノめ",
        },
        {
            plain: "聖顕殿",
            parsed: "せいけんでん",
        },
        {
            plain: "捨身の道",
            parsed: "しゃしんのみち",
        },
        {
            plain: "捨身の坑",
            parsed: "しゃしんのこう",
        },
        {
            plain: "祝祭殿",
            parsed: "しゅくさいでん",
        },
        {
            plain: "神に捨てられた殿閣",
            parsed: "かみにすてられたでんかく",
        },
        {
            plain: "「神の碁盤」",
            parsed: "かみのごばん",
        },
        {
            plain: "「永遠のオアシス」",
            parsed: "えいえんのオアシス",
        },
        {
            plain: "甘露花海",
            parsed: "かんろかかい",
        },
        {
            plain: "忘れられし道",
            parsed: "わすれられしみち",
        },
        {
            plain: "ダーリ",
            parsed: "ダーリ",
        },
        {
            plain: "エピクレシス歌劇場",
            parsed: "エピクレシスかげきじょう",
        },
        {
            plain: "歌劇場",
            parsed: "かげきじょう",
        },
        {
            plain: "安眠の地",
            parsed: "あんみんのち",
        },
        {
            plain: "ウィンガレット号",
            parsed: "ウィンガレットごう",
        },
        {
            plain: "スネージナヤパレス",
            parsed: "スネージナヤパレス",
        },
        {
            plain: "共鳴する",
            parsed: "きょうめいする",
        },
        {
            plain: "風の種",
            parsed: "かぜのたね",
        },
        {
            plain: "岩の種",
            parsed: "いわのたね",
        },
        {
            plain: "雷の種",
            parsed: "かみなりのたね",
        },
        {
            plain: "草の種",
            parsed: "くさのたね",
        },
        {
            plain: "水の種",
            parsed: "みずのたね",
        },
        {
            plain: "水の核",
            parsed: "みずのかく",
        },
        {
            plain: "聖樹",
            parsed: "せいじゅ",
        },
        {
            plain: "ヴァマッダ",
            parsed: "ヴァマッダ",
        },
        {
            plain: "世界樹",
            parsed: "せかいじゅ",
        },
        {
            plain: "タンブルウィード",
            parsed: "タンブルウィード",
        },
        {
            plain: "遺跡巨像",
            parsed: "いせききょぞう",
        },
        {
            plain: "パイプのステアリングバルブ",
            parsed: "パイプのステアリングバルブ",
        },
        {
            plain: "具現装置",
            parsed: "ぐげんそうち",
        },
        {
            plain: "ガオケレナ",
            parsed: "ガオケレナ",
        },
        {
            plain: "明芸花",
            parsed: "めいげいか",
        },
        {
            plain: "シューニャター花",
            parsed: "シューニャターはな",
        },
        {
            plain: "甘露封印",
            parsed: "かんろふういん",
        },
        {
            plain: "浮遊する光の玉",
            parsed: "ふゆうするひかりのたま",
        },
        {
            plain: "バルソム",
            parsed: "バルソム",
        },
        {
            plain: "霊宝の鐸鈴",
            parsed: "れいほうのたくれい",
        },
        {
            plain: "光明の火壇",
            parsed: "こうみょうのかだん",
        },
        {
            plain: "霊光バリア",
            parsed: "れいこうバリア",
        },
        {
            plain: "遺跡重砲",
            parsed: "いせきじゅうほう",
        },
        {
            plain: "聖潔の花",
            parsed: "せいけつのはな",
        },
        {
            plain: "慈心",
            parsed: "じしん",
        },
        {
            plain: "不思議なトントンキノコ",
            parsed: "ふしぎなトントンキノコ",
        },
        {
            plain: "跋霊",
            parsed: "ばつれい",
        },
        {
            plain: "諭示機",
            parsed: "ゆしき",
        },
        {
            plain: "音波共鳴ポイント",
            parsed: "おんぱきょうめいポイント",
        },
        {
            plain: "ペールス",
            parsed: "ペールス",
        },
        {
            plain: "サー・アーサー",
            parsed: "サーアーサー",
        },
        {
            plain: "バブル・フォーメーション",
            parsed: "バブルフォーメーション",
        },
        {
            plain: "獣域の裂け目",
            parsed: "じゅういきのさけめ",
        },
        {
            plain: "南十字船隊",
            parsed: "みなみじゅうじせんたい",
        },
        {
            plain: "死兆星号",
            parsed: "しちょうせいごう",
        },
        {
            plain: "社奉行",
            parsed: "しゃぶぎょう",
        },
        {
            plain: "狛荷屋",
            parsed: "こまにや",
        },
        {
            plain: "スメール教令院",
            parsed: "スメールきょうれいいん",
        },
        {
            plain: "教令院",
            parsed: "きょうれいいん",
        },
        {
            plain: "レンジャー",
            parsed: "レンジャー",
        },
        {
            plain: "二十九オーシャンデイズ連盟",
            parsed: "にじゅうきゅうオーシャンデイズれんめい",
        },
        {
            plain: "アフマルの目",
            parsed: "アフマルのめ",
        },
        {
            plain: "熾光の猟獣",
            parsed: "しこうのりょうじゅう",
        },
        {
            plain: "神王のレリクス",
            parsed: "しんのうのレリクス",
        },
        {
            plain: "アフマルの鬚",
            parsed: "アフマルのひげ",
        },
        {
            plain: "スケプティック団",
            parsed: "スケプティックだん",
        },
        {
            plain: "ナガルジュナ団",
            parsed: "ナガルジュナだん",
        },
        {
            plain: "フォンテーヌ運動エネルギー工学科学研究院",
            parsed: "フォンテーヌうんどうエネルギーこうがくかがくけんきゅういん",
        },
        {
            plain: "赤月",
            parsed: "せきげつ",
        },
        {
            plain: "黒日",
            parsed: "こくじつ",
        },
        {
            plain: "久遠の体との別れ",
            parsed: "くおんのからだとのわかれ",
        },
        {
            plain: "迫る客星",
            parsed: "せまるきゃくせい",
        },
        {
            plain: "秋風に舞いし紅葉",
            parsed: "あきかぜにまいしもみじ",
        },
        {
            plain: "千手百目の浮世",
            parsed: "せんじゅひゃくもくのうきよ",
        },
        {
            plain: "風立ちし鶴の帰郷",
            parsed: "かぜたちしつるのききょう",
        },
        {
            plain: "険路怪跡",
            parsed: "けんろかいせき",
        },
        {
            plain: "煙霧のベールと暗き森を抜けて",
            parsed: "えんむのベールとくらきもりをぬけて",
        },
        {
            plain: "黎明を告げる千の薔薇",
            parsed: "れいめいをつげるせんのばら",
        },
        {
            plain: "迷夢と虚幻と欺瞞",
            parsed: "めいむときょげんとぎまん",
        },
        {
            plain: "伽藍に落ちて",
            parsed: "がらんにおちて",
        },
        {
            plain: "カリベルト",
            parsed: "カリベルト",
        },
        {
            plain: "白露と黒潮の序詩",
            parsed: "しらつゆとくろしおのじょし",
        },
        {
            plain: "ゆえなく煙る霧雨のように",
            parsed: "ゆえなくけむるきりさめのように",
        },
        {
            plain: "深海に煌めく星たちへ",
            parsed: "しんかいにきらめくほしたちへ",
        },
        {
            plain: "胎動を諭す終焉の刻",
            parsed: "たいどうをさとすしゅうえんのとき",
        },
        {
            plain: "罪人の円舞曲",
            parsed: "ざいにんのワルツ",
        },
        {
            plain: "間章",
            parsed: "かんしょう",
        },
        {
            plain: "オロバシの遺事",
            parsed: "オロバシのいじ",
        },
        {
            plain: "アンティゴノス",
            parsed: "アンティゴノス",
        },
        {
            plain: "伊達の挑戦状",
            parsed: "だてのちょうせんじょう",
        },
        {
            plain: "三色の帳面",
            parsed: "さんしょくのちょうめん",
        },
        {
            plain: "夢を失った苗畑",
            parsed: "ゆめをうしなったなえはた",
        },
        {
            plain: "アグニホトラ経",
            parsed: "アグニホトラきょう",
        },
        {
            plain: "ヴィマナ聖典",
            parsed: "ヴィマナせいてん",
        },
        {
            plain: "「ヴァーナ」が完治するまで",
            parsed: "ヴァーナがかんちするまで",
        },
        {
            plain: "失せ者を取り返す喜びをともに",
            parsed: "うせものをとりかえすよろこびをともに",
        },
        {
            plain: "「猟鷹」タッドラー",
            parsed: "りょうようタッドラー",
        },
        {
            plain: "「鷹猟」",
            parsed: "たかりょう",
        },
        {
            plain: "翼の折れた猟鷹",
            parsed: "つばさのおれたりょうよう",
        },
        {
            plain: "過ぎ去りし終末",
            parsed: "すぎさりししゅうまつ",
        },
        {
            plain: "仇敵は沸き返る水の如く…",
            parsed: "きゅうてきはわきかえるみずのごとく",
        },
        {
            plain: "善悪のクヴァレナ",
            parsed: "ぜんあくのクヴァレナ",
        },
        {
            plain: "シーフォームとクリムゾンの描染",
            parsed: "シーフォームとクリムゾンのかきぞめ",
        },
        {
            plain: "ドリームとオーカーの変化",
            parsed: "ドリームとオーカーのへんか",
        },
        {
            plain: "小雨の予兆",
            parsed: "こさめのよちょう",
        },
        {
            plain: "ハートとブルームーンの情念",
            parsed: "ハートとブルームーンのじょうねん",
        },
        {
            plain: "最終問題",
            parsed: "さいしゅうもんだい",
        },
        {
            plain: "「水仙十字大冒険」",
            parsed: "すいせんじゅうじだいぼうけん",
        },
        {
            plain: "「鏡の中の王国」",
            parsed: "かがみのなかのおうこく",
        },
        {
            plain: "アンの物語",
            parsed: "アンのものがたり",
        },
        {
            plain: "「もしも彼女が君の夢を見なくなったら…」",
            parsed: "もしもかのじょがきみのゆめをみなくなったら",
        },
        {
            plain: "マリアンの物語",
            parsed: "マリアンのものがたり",
        },
        {
            plain: "まだ終わらない物語",
            parsed: "まだおわらないものがたり",
        },
        {
            plain: "些細な出来事",
            parsed: "ささいなできごと",
        },
        {
            plain: "とある印章",
            parsed: "とあるいんしょう",
        },
        {
            plain: "「スチームバード新聞」の面接",
            parsed: "スチームバードしんぶんのめんせつ",
        },
        {
            plain: "小兎の章",
            parsed: "こうさぎのしょう",
        },
        {
            plain: "孔雀羽の章",
            parsed: "くじゃくばねのしょう",
        },
        {
            plain: "砂時計の章",
            parsed: "すなどけいのしょう",
        },
        {
            plain: "狼の章",
            parsed: "おおかみのしょう",
        },
        {
            plain: "四つ葉の章",
            parsed: "よつばのしょう",
        },
        {
            plain: "仔獅子の章",
            parsed: "こじしのしょう",
        },
        {
            plain: "歌仙の章",
            parsed: "かせんのしょう",
        },
        {
            plain: "映天の章",
            parsed: "えいてんのしょう",
        },
        {
            plain: "波沫の章",
            parsed: "なみしぶきのしょう",
        },
        {
            plain: "白亜の章",
            parsed: "はくあのしょう",
        },
        {
            plain: "長杓の章",
            parsed: "ながひしゃくのしょう",
        },
        {
            plain: "錦織の章",
            parsed: "にしきおりのしょう",
        },
        {
            plain: "空鯨の章",
            parsed: "くうげいのしょう",
        },
        {
            plain: "古聞の章",
            parsed: "こぶんのしょう",
        },
        {
            plain: "仙麟の章",
            parsed: "せんりんのしょう",
        },
        {
            plain: "懸壺の章",
            parsed: "けんこのしょう",
        },
        {
            plain: "琉金の章",
            parsed: "りゅうきんのしょう",
        },
        {
            plain: "天下人の章",
            parsed: "てんかびとのしょう",
        },
        {
            plain: "仙狐の章",
            parsed: "せんこのしょう",
        },
        {
            plain: "紅葉の章",
            parsed: "もみじのしょう",
        },
        {
            plain: "フェネックの章",
            parsed: "フェネックのしょう",
        },
        {
            plain: "金狼の章",
            parsed: "きんろうのしょう",
        },
        {
            plain: "睡蓮の章",
            parsed: "すいれんのしょう",
        },
        {
            plain: "隼の章",
            parsed: "はやぶさのしょう",
        },
        {
            plain: "マンティコアの章",
            parsed: "マンティコアのしょう",
        },
        {
            plain: "知恵の主の章",
            parsed: "ちえのあるじのしょう",
        },
        {
            plain: "諸悪退散",
            parsed: "しょあくたいさん",
        },
        {
            plain: "魚と波を掻き分けて",
            parsed: "さかなとなみをかきわけて",
        },
        {
            plain: "討伐懸賞",
            parsed: "とうばつけんしょう",
        },
        {
            plain: "住民リクエスト",
            parsed: "じゅうみんリクエスト",
        },
        {
            plain: "模本",
            parsed: "もほん",
        },
        {
            plain: "地域の特産",
            parsed: "ちいきのとくさん",
        },
        {
            plain: "パティサラ",
            parsed: "パティサラ",
        },
        {
            plain: "原神 (タイトル)",
            parsed: "げんしん",
        },
        {
            plain: "原神",
            parsed: "げんしん",
        },
        {
            plain: "邪眼",
            parsed: "じゃがん",
        },
        {
            plain: "魔神",
            parsed: "まじん",
        },
        {
            plain: "バドルドー",
            parsed: "バドルドー",
        },
        {
            plain: "三眼五顕仙人",
            parsed: "さんがんごけんせんにん",
        },
        {
            plain: "鎖国令",
            parsed: "さこくれい",
        },
        {
            plain: "雷電五箇伝",
            parsed: "らいでんごかでん",
        },
        {
            plain: "天目流",
            parsed: "あめのまりゅう",
        },
        {
            plain: "ダリオッシュ",
            parsed: "ダリオッシュ",
        },
        {
            plain: "輪廻",
            parsed: "りんね",
        },
        {
            plain: "ヘルマヌビス",
            parsed: "ヘルマヌビス",
        },
        {
            plain: "ディフ",
            parsed: "ディフ",
        },
        {
            plain: "ナラ",
            parsed: "ナラ",
        },
        {
            plain: "マラーナ",
            parsed: "マラーナ",
        },
        {
            plain: "ヴァーナ",
            parsed: "ヴァーナ",
        },
        {
            plain: "ワルカ",
            parsed: "ワルカ",
        },
        {
            plain: "アランラカラリ",
            parsed: "アランラカラリ",
        },
        {
            plain: "雨林",
            parsed: "うりん",
        },
        {
            plain: "グラマパラ",
            parsed: "グラマパラ",
        },
        {
            plain: "ハイブマインド",
            parsed: "ハイブマインド",
        },
        {
            plain: "焚真の天象",
            parsed: "ふんしんのてんしょう",
        },
        {
            plain: "チンワトの儀",
            parsed: "チンワトのぎ",
        },
        {
            plain: "アブゾーアの儀",
            parsed: "アブゾーアのぎ",
        },
        {
            plain: "ロシ",
            parsed: "ロシ",
        },
        {
            plain: "人生いろいろ",
            parsed: "じんせいいろいろ",
        },
        {
            plain: "命ノ星座",
            parsed: "いのちのせいざ",
        },
        {
            plain: "冒険ランク",
            parsed: "ぼうけんランク",
        },
        {
            plain: "世界ランク",
            parsed: "せかいランク",
        },
        {
            plain: "無効",
            parsed: "むこう",
        },
        {
            plain: "不動の岩",
            parsed: "ふどうのいわ",
        },
        {
            plain: "治療の水",
            parsed: "ちりょうのみず",
        },
        {
            plain: "迅速の風",
            parsed: "じんそくのかぜ",
        },
        {
            plain: "強権の雷",
            parsed: "きょうけんのかみなり",
        },
        {
            plain: "粉砕の氷",
            parsed: "ふんさいのこおり",
        },
        {
            plain: "蔓生の草",
            parsed: "まんせいのくさ",
        },
        {
            plain: "交錯の護り",
            parsed: "こうさくのまもり",
        },
        {
            plain: "元素耐性",
            parsed: "げんそたいせい",
        },
        {
            plain: "活発状態",
            parsed: "かっぱつじょうたい",
        },
        {
            plain: "枯燥状態",
            parsed: "こそうじょうたい",
        },
        {
            plain: "侵食",
            parsed: "しんしょく",
        },
        {
            plain: "祈願",
            parsed: "きがん",
        },
        {
            plain: "奔走世間",
            parsed: "ほんそうせけん",
        },
        {
            plain: "神鋳賦形",
            parsed: "しんちゅうぶけい",
        },
        {
            plain: "(ガチャで) すり抜ける",
            parsed: "すりぬける",
        },
        {
            plain: "復刻",
            parsed: "ふっこく",
        },
        {
            plain: "空月の祝福",
            parsed: "くうげつのしゅくふく",
        },
        {
            plain: "週ボス",
            parsed: "しゅうボス",
        },
        {
            plain: "聖遺物厳選",
            parsed: "せいいぶつげんせん",
        },
        {
            plain: "詫び石",
            parsed: "わびいし",
        },
        {
            plain: "七聖召喚",
            parsed: "しちせいしょうかん",
        },
        {
            plain: "キャラカード",
            parsed: "キャラカード",
        },
        {
            plain: "装備カード",
            parsed: "そうびカード",
        },
        {
            plain: "支援カード",
            parsed: "しえんカード",
        },
        {
            plain: "イベントカード",
            parsed: "イベントカード",
        },
        {
            plain: "ロールする",
            parsed: "ロールする",
        },
        {
            plain: "リロール",
            parsed: "リロール",
        },
        {
            plain: "ラッキーカードコイン",
            parsed: "ラッキーカードコイン",
        },
        {
            plain: "死域",
            parsed: "しいき",
        },
        {
            plain: "バランス状態",
            parsed: "バランスじょうたい",
        },
        {
            plain: "オーバーロード",
            parsed: "オーバーロード",
        },
        {
            plain: "高塔の王の砕けた夢",
            parsed: "こうとうのおうのくだけたゆめ",
        },
        {
            plain: "高塔の王の断片",
            parsed: "こうとうのおうのだんぺん",
        },
        {
            plain: "高塔の王の残壁",
            parsed: "こうとうのおうのざんぺき",
        },
        {
            plain: "高塔の王の瓦",
            parsed: "こうとうのおうのかわら",
        },
        {
            plain: "獅牙戦士の理想",
            parsed: "しがせんしのりそう",
        },
        {
            plain: "獅牙戦士の手錠",
            parsed: "しがせんしのてじょう",
        },
        {
            plain: "獅牙戦士の鎖",
            parsed: "しがせんしのくさり",
        },
        {
            plain: "獅牙戦士の枷",
            parsed: "しがせんしのかせ",
        },
        {
            plain: "孤雲寒林の神体",
            parsed: "こうんかんりんのしんたい",
        },
        {
            plain: "孤雲寒林の聖骸",
            parsed: "こうんかんりんのせいがい",
        },
        {
            plain: "孤雲寒林の輝岩",
            parsed: "こうんかんりんのきがん",
        },
        {
            plain: "孤雲寒林の光砂",
            parsed: "こうんかんりんのこうさ",
        },
        {
            plain: "漆黒の隕鉄の塊",
            parsed: "しっこくのいんてつのかたまり",
        },
        {
            plain: "漆黒の隕鉄の一角",
            parsed: "しっこくのいんてつのいっかく",
        },
        {
            plain: "漆黒の隕鉄の一片",
            parsed: "しっこくのいんてつのいっぺん",
        },
        {
            plain: "漆黒の隕鉄の一粒",
            parsed: "しっこくのいんてつのひとつぶ",
        },
        {
            plain: "鳴神御霊の勇武",
            parsed: "なるかみみたまのゆうぶ",
        },
        {
            plain: "鳴神御霊の親愛",
            parsed: "なるかみみたまのしんあい",
        },
        {
            plain: "鳴神御霊の歓喜",
            parsed: "なるかみみたまのかんき",
        },
        {
            plain: "鳴神御霊の恩恵",
            parsed: "なるかみみたまのおんけい",
        },
        {
            plain: "今昔劇画の鬼人",
            parsed: "こんじゃくげきがのきじん",
        },
        {
            plain: "今昔劇画の隻角",
            parsed: "こんじゃくげきがのせきかく",
        },
        {
            plain: "今昔劇画の虎牙",
            parsed: "こんじゃくげきがのこが",
        },
        {
            plain: "今昔劇画の悪尉",
            parsed: "こんじゃくげきがのあくい",
        },
        {
            plain: "オアシスガーデンの真諦",
            parsed: "オアシスガーデンのしんたい",
        },
        {
            plain: "オアシスガーデンの哀思",
            parsed: "オアシスガーデンのあいし",
        },
        {
            plain: "オアシスガーデンの恩恵",
            parsed: "オアシスガーデンのおんけい",
        },
        {
            plain: "オアシスガーデンの追憶",
            parsed: "オアシスガーデンのついおく",
        },
        {
            plain: "静謐な森のしずくの金符",
            parsed: "せいひつなもりのしずくのきんぷ",
        },
        {
            plain: "静謐な森のしずくの銀符",
            parsed: "せいひつなもりのしずくのぎんぷ",
        },
        {
            plain: "静謐な森のしずくの鉄符",
            parsed: "せいひつなもりのしずくのてっぷ",
        },
        {
            plain: "悠久の弦の響き",
            parsed: "ゆうきゅうのげんのひびき",
        },
        {
            plain: "悠久の弦の楽章",
            parsed: "ゆうきゅうのげんのがくしょう",
        },
        {
            plain: "悠久の弦の断章",
            parsed: "ゆうきゅうのげんのだんしょう",
        },
        {
            plain: "悠久の弦の残章",
            parsed: "ゆうきゅうのげんのざんしょう",
        },
        {
            plain: "無垢な海の金盃",
            parsed: "むくなうみのきんぱい",
        },
        {
            plain: "無垢な海の銀盃",
            parsed: "むくなうみのぎんぱい",
        },
        {
            plain: "無垢な海の酒盃",
            parsed: "むくなうみのしゅはい",
        },
        {
            plain: "無垢な海の苦杯",
            parsed: "むくなうみのくはい",
        },
        {
            plain: "純聖な雫の精髄",
            parsed: "じゅんせいなしずくのせいずい",
        },
        {
            plain: "純聖な雫の甘泉",
            parsed: "じゅんせいなしずくのかんせん",
        },
        {
            plain: "純聖な雫の昇華",
            parsed: "じゅんせいなしずくのしょうか",
        },
        {
            plain: "純聖な雫の濾滓",
            parsed: "じゅんせいなしずくのろさい",
        },
        {
            plain: "枯れぬ絹の花",
            parsed: "かれぬきぬのはな",
        },
        {
            plain: "赤穂の枡",
            parsed: "あこうのます",
        },
        {
            plain: "機関棋譚",
            parsed: "きかんきたん",
        },
        {
            plain: "熟知の奔流",
            parsed: "じゅくちのほんりゅう",
        },
        {
            plain: "地脈の奔流",
            parsed: "ちみゃくのほんりゅう",
        },
        {
            plain: "百貨珍品",
            parsed: "ひゃっかちんぴん",
        },
        {
            plain: "立本",
            parsed: "りつほん",
        },
        {
            plain: "秘宝の行方",
            parsed: "ひほうのゆくえ",
        },
        {
            plain: "ウルマン",
            parsed: "ウルマン",
        },
        {
            plain: "宝探し仙霊",
            parsed: "たからさがしせんれい",
        },
        {
            plain: "小さな仙霊・露草",
            parsed: "ちいさなせんれいつゆくさ",
        },
        {
            plain: "小さな仙霊・薄紅",
            parsed: "ちいさなせんれいうすべに",
        },
        {
            plain: "小さな仙霊・鬱金",
            parsed: "ちいさなせんれいうこん",
        },
        {
            plain: "小さな仙霊・紫苑",
            parsed: "ちいさなせんれいしおん",
        },
        {
            plain: "鉄銭",
            parsed: "てっせん",
        },
        {
            plain: "古鉄銭",
            parsed: "こてっせん",
        },
        {
            plain: "風の行方",
            parsed: "かぜのゆくえ",
        },
        {
            plain: "追跡コイン",
            parsed: "ついせきコイン",
        },
        {
            plain: "ハンター",
            parsed: "ハンター",
        },
        {
            plain: "ガイガックス",
            parsed: "ガイガックス",
        },
        {
            plain: "ホッセイニ",
            parsed: "ホッセイニ",
        },
        {
            plain: "エネルギー原盤・補題",
            parsed: "エネルギーげんばんほだい",
        },
        {
            plain: "旅の写真に閃きを・雫の章",
            parsed: "たびのしゃしんにひらめきをしずくのしょう",
        },
        {
            plain: "陽夏！悪龍？童話の王国！",
            parsed: "ようかあくりゅうどうわのおうこく",
        },
        {
            plain: "北風の輝く塵",
            parsed: "きたかぜのかがやくちり",
        },
        {
            plain: "フライングハット・キャッチャー",
            parsed: "フライングハットキャッチャー",
        },
        {
            plain: "オルビット城の試練",
            parsed: "オルビットじょうのしれん",
        },
        {
            plain: "巧みな彫刻",
            parsed: "たくみなちょうこく",
        },
        {
            plain: "シムランカ",
            parsed: "シムランカ",
        },
        {
            plain: "砕けた海",
            parsed: "くだけたうみ",
        },
        {
            plain: "砕けた積み木鉱山",
            parsed: "くだけたつみきこうざん",
        },
        {
            plain: "祝福の森",
            parsed: "しゅくふくのもり",
        },
        {
            plain: "ベルウインド王国",
            parsed: "ベルウインドおうこく",
        },
        {
            plain: "アーモンド",
            parsed: "アーモンド",
        },
        {
            plain: "シトラス",
            parsed: "シトラス",
        },
        {
            plain: "シェーンブルン",
            parsed: "シェーンブルン",
        },
        {
            plain: "フロベール",
            parsed: "フロベール",
        },
        {
            plain: "エスタンプ",
            parsed: "エスタンプ",
        },
        {
            plain: "ホレロウ",
            parsed: "ホレロウ",
        },
        {
            plain: "シメスト",
            parsed: "シメスト",
        },
        {
            plain: "サボーン",
            parsed: "サボーン",
        },
        {
            plain: "スーファシュ",
            parsed: "スーファシュ",
        },
        {
            plain: "ホイール",
            parsed: "ホイール",
        },
        {
            plain: "ビゼルト",
            parsed: "ビゼルト",
        },
        {
            plain: "モンタナ",
            parsed: "モンタナ",
        },
        {
            plain: "オービック",
            parsed: "オービック",
        },
        {
            plain: "カペー",
            parsed: "カペー",
        },
        {
            plain: "ポポラーノ",
            parsed: "ポポラーノ",
        },
        {
            plain: "エスノワール",
            parsed: "エスノワール",
        },
        {
            plain: "ローゼル",
            parsed: "ローゼル",
        },
        {
            plain: "ちびドゥリン",
            parsed: "ちびドゥリン",
        },
        {
            plain: "「悪龍」の絵本",
            parsed: "あくりゅうのえほん",
        },
        {
            plain: "堅守演習",
            parsed: "けんしゅえんしゅう",
        },
        {
            plain: "奇策！スピード勝負",
            parsed: "きさくスピートしょうぶ",
        },
        {
            plain: "ペンと空想の旅",
            parsed: "ペンとくうそうのたび",
        },
        {
            plain: "千変万化の豪傑譚",
            parsed: "せんげんばんかのごうけつたん",
        },
        {
            plain: "スプラッシュ・デュエット",
            parsed: "スプラッシュデュエット",
        },
        {
            plain: "風の行方・妙策の陣",
            parsed: "かぜのゆくえみょうさくのじん",
        },
        {
            plain: "異種サウリアン巡訪戦記",
            parsed: "いしゅサウリアンじゅんぽうせんき",
        },
        {
            plain: "ロック団子牛乳",
            parsed: "ロックだんごぎゅうにゅう",
        },
        {
            plain: "鋒刃、錦を裁つ",
            parsed: "ほうじんにしきをたつ",
        },
        {
            plain: "巧みなる錬金経営",
            parsed: "たくみなるれんきんけいえい",
        },
        {
            plain: "モフモフの城、にゃん冒険！",
            parsed: "モフモフのしろにゃんぼうけん",
        },
        {
            plain: "橙色騎士",
            parsed: "おれんじきし",
        },
        {
            plain: "ポヨコロ・クロスファイア",
            parsed: "ポヨコロクロスファイア",
        },
        {
            plain: "雄弁なフェーイズ作用",
            parsed: "ゆうべんなフェーイズさよう",
        },
        {
            plain: "彩る紙鳶、春梳きて",
            parsed: "いろどるしえんはるすきて",
        },
        {
            plain: "遠方より来たる朋友",
            parsed: "えんぽうよりきたるほうゆう",
        },
        {
            plain: "ナゾチャールの奇境探訪",
            parsed: "なぞちゃーるのききょうたんぼう",
        },
        {
            plain: "佳肴を求める紙の旅",
            parsed: "かこうをもとめるかみのたび",
        },
        {
            plain: "欣喜獣躍",
            parsed: "きんきじゅうやく",
        },
        {
            plain: "薔薇と銃士",
            parsed: "ばらとじゅうし",
        },
        {
            plain: "千里のスナイパー",
            parsed: "せんりのすないぱー",
        },
        {
            plain: "幻光トリックレポート",
            parsed: "げんこうトリックレポート",
        },
        {
            plain: "エクストリームハーダー",
            parsed: "エクストリームハーダー",
        },
        {
            plain: "イントゥ・ザ・フレーム",
            parsed: "イントゥザフレーム",
        },
        {
            plain: "画像認識実験レポート",
            parsed: "がぞうにんしきじっけんレポート",
        },
        {
            plain: "迷城戦線・水界編",
            parsed: "めいじょうせんせんすいかいへん",
        },
        {
            plain: "流れゆく水に詩を紡いで",
            parsed: "ながれゆくみずにしをつむいで",
        },
        {
            plain: "百発百中の投壺",
            parsed: "ひゃっぱつひゃくちゅうのとうこ",
        },
        {
            plain: "景色と絵を訪ねて",
            parsed: "けしきとえをたずねて",
        },
        {
            plain: "光と彩を集めて",
            parsed: "ひかりといろどりをあつめて",
        },
        {
            plain: "ドドコドッカン冒険記",
            parsed: "ドドコドッカンぼうけんき",
        },
        {
            plain: "人生山あり谷あり",
            parsed: "じんせいやまありたにあり",
        },
        {
            plain: "メカニカルトイズ前哨戦",
            parsed: "メカニカルトイズぜんしょうせん",
        },
        {
            plain: "躍動・リズム・ビート",
            parsed: "やくどうリズムビート",
        },
        {
            plain: "乱流スピードレース",
            parsed: "らんりゅうスピードレース",
        },
        {
            plain: "性能模擬実践段階",
            parsed: "せいのうもぎじっせんだんかい",
        },
        {
            plain: "博物通史・水の国を訪ねて",
            parsed: "はくぶつつうしみずのくにをたずねて",
        },
        {
            plain: "ヴァーディクト・ブレイド",
            parsed: "ヴァーディクトブレイド",
        },
        {
            plain: "ブレッソン",
            parsed: "ブレッソン",
        },
        {
            plain: "ヴェルーリヤ・ミラージュ",
            parsed: "ヴェルーリヤミラージュ",
        },
        {
            plain: "銀瓶の庭",
            parsed: "ぎんびんのにわ",
        },
        {
            plain: "蔓生の渓谷",
            parsed: "まんせいのけいこく",
        },
        {
            plain: "隠者の遊園",
            parsed: "いんじゃのゆうえん",
        },
        {
            plain: "祈者の劇場",
            parsed: "きしゃのげきじょう",
        },
        {
            plain: "イディア",
            parsed: "イディア",
        },
        {
            plain: "レッシグ・ローレンス",
            parsed: "レッシグローレンス",
        },
        {
            plain: "フェルディナンド",
            parsed: "フェルディナンド",
        },
        {
            plain: "ジェローニ",
            parsed: "ジェローニ",
        },
        {
            plain: "ハッド",
            parsed: "ハッド",
        },
        {
            plain: "ゾシモス",
            parsed: "ゾシモス",
        },
        {
            plain: "シズクちゃん",
            parsed: "シズクちゃん",
        },
        {
            plain: "コアホイール",
            parsed: "コアホイール",
        },
        {
            plain: "びゅんびゅん爆速車",
            parsed: "びゅんびゅんばくそくしゃ",
        },
        {
            plain: "歓呼激流",
            parsed: "かんこげきりゅう",
        },
        {
            plain: "先成図",
            parsed: "せんせいず",
        },
        {
            plain: "集流映写灯",
            parsed: "しゅうりゅうえいしゃとう",
        },
        {
            plain: "キラキラランプ",
            parsed: "キラキラランプ",
        },
        {
            plain: "ハッピークーポン",
            parsed: "ハッピークーポン",
        },
        {
            plain: "スプラッシュ・ハイドロバトル",
            parsed: "スプラッシュハイドロバトル",
        },
        {
            plain: "ワニ型サイクロン仕様ワニアーマー対海戦重艦砲式アミューズメント用ハイドロキャノン",
            parsed: "ワニがたサイクロンしようワニアーマーたいかいせんじゅうかんほうしきアミューズメントようハイドロキャノン",
        },
        {
            plain: "ウォーターキャノン",
            parsed: "ウォーターキャノン",
        },
        {
            plain: "ワニワニバンバンキャノン",
            parsed: "ワニワニバンバンキャノン",
        },
        {
            plain: "ヒャッホーギツネ巡空記",
            parsed: "ヒャッホーギツネじゅんくうき",
        },
        {
            plain: "険しき探索の道",
            parsed: "けわしきたんさくのみち",
        },
        {
            plain: "アニマルビジョン",
            parsed: "アニマルビジョン",
        },
        {
            plain: "すりこみの鏡",
            parsed: "すりこみのかがみ",
        },
        {
            plain: "冒険者試練・上級編",
            parsed: "ぼうけんしゃしれんじょうきゅうへん",
        },
        {
            plain: "鋳境の研鑽・無限疾戦",
            parsed: "ちゅうきょうのけんさんむげんしっせん",
        },
        {
            plain: "決闘! 召喚の頂!",
            parsed: "けっとうしょうかんのいただき",
        },
        {
            plain: "召喚王グランプリ",
            parsed: "しょうかんおうグランプリ",
        },
        {
            plain: "ガルビビダム",
            parsed: "ガルビビダム",
        },
        {
            plain: "グラーブ",
            parsed: "グラーブ",
        },
        {
            plain: "諸景巡行",
            parsed: "しょけいじゅんこう",
        },
        {
            plain: "ゼロ・アワー召喚",
            parsed: "ゼロアワーしょうかん",
        },
        {
            plain: "からくり械画・七聖編",
            parsed: "からくりかいがしちせいへん",
        },
        {
            plain: "巧賽タクティクス",
            parsed: "こうさいタクティクス",
        },
        {
            plain: "離垢者の正心別宴",
            parsed: "りくしゃのせいしんべつえん",
        },
        {
            plain: "フェーイズの予想",
            parsed: "フェーイズのよそう",
        },
        {
            plain: "鬼斧神工・宝録の章",
            parsed: "きふしんこうほうろくのしょう",
        },
        {
            plain: "盛典と慧業",
            parsed: "せいてんとえごう",
        },
        {
            plain: "学院祭",
            parsed: "がくいんさい",
        },
        {
            plain: "サーチェン",
            parsed: "サーチェン",
        },
        {
            plain: "生体模倣",
            parsed: "せいたいもほう",
        },
        {
            plain: "星合わせの画",
            parsed: "ほしあわせのえ",
        },
        {
            plain: "考古調査",
            parsed: "こうこちょうさ",
        },
        {
            plain: "ポーション対処法",
            parsed: "ポーションたいしょほう",
        },
        {
            plain: "ルート構想計画",
            parsed: "ルートこうそうけいかく",
        },
        {
            plain: "真相究明",
            parsed: "しんそうきゅうめい",
        },
        {
            plain: "憶昔巡歴の旅",
            parsed: "おくせきじゅんれきのたび",
        },
        {
            plain: "轟々たる風砂",
            parsed: "ごうごうたるふうしゃ",
        },
        {
            plain: "対ウェネト殺蟲大砲",
            parsed: "たいウェネトさっちゅうたいほう",
        },
        {
            plain: "シュリヤ",
            parsed: "シュリヤ",
        },
        {
            plain: "ヴィナヤック",
            parsed: "ヴィナヤック",
        },
        {
            plain: "調剤エボリューション",
            parsed: "ちょうざいエボリューション",
        },
        {
            plain: "風花の吐息",
            parsed: "ウィンドブルームのといき",
        },
        {
            plain: "ブロッサムを追い求めて",
            parsed: "ブロッサムをおいもとめて",
        },
        {
            plain: "フローラルチェス",
            parsed: "フローラルチェス",
        },
        {
            plain: "そよ風のバラッド",
            parsed: "そよかぜのバラッド",
        },
        {
            plain: "風吹きのスナップ",
            parsed: "かぜふきのスナップ",
        },
        {
            plain: "チエキノコン布陣",
            parsed: "チエキノコンふじん",
        },
        {
            plain: "ちびチエキノコン",
            parsed: "ちびチエキノコン",
        },
        {
            plain: "マーベラスゼリー",
            parsed: "マーベラスゼリー",
        },
        {
            plain: "振晶の照合実験",
            parsed: "しんしょうのしょうごうじっけん",
        },
        {
            plain: "アナトール",
            parsed: "アナトール",
        },
        {
            plain: "エドウィン・イースティングハウス",
            parsed: "エドウィンイースティングハウス",
        },
        {
            plain: "アルケウム",
            parsed: "アルケウム",
        },
        {
            plain: "西より届く香り・北地のグルメ",
            parsed: "にしよりとどくかおりほくちのグルメ",
        },
        {
            plain: "イリデッセンスツアー",
            parsed: "イリデッセンスツアー",
        },
        {
            plain: "海灯音楽祭",
            parsed: "かいとうおんがくさい",
        },
        {
            plain: "ドヴォルザーク",
            parsed: "ドヴォルザーク",
        },
        {
            plain: "萌蘖のタケノコ",
            parsed: "ほうげつのタケノコ",
        },
        {
            plain: "華舞う夜の旋律",
            parsed: "はなまうよるのせんりつ",
        },
        {
            plain: "演舞伝心",
            parsed: "えんぶでんしん",
        },
        {
            plain: "荒瀧極意堂々虫相撲大試合",
            parsed: "あらたきごくいどうどうむしずもうだいじあい",
        },
        {
            plain: "花角玉将",
            parsed: "はなかどぎょくしょう",
        },
        {
            plain: "薔薇が返り咲く頃",
            parsed: "ばらがかえりざくころ",
        },
        {
            plain: "秋津ノ夜森肝試し大会",
            parsed: "あきつノよもりきもだめしたいかい",
        },
        {
            plain: "野を超えた追跡",
            parsed: "のをこえたついせき",
        },
        {
            plain: "野跡風船",
            parsed: "のせきふうせん",
        },
        {
            plain: "迷城戦線・砂域編",
            parsed: "めいじょうせんせんさいきへん",
        },
        {
            plain: "ワンダフルキノコンピック",
            parsed: "ワンダフルキノコンピック",
        },
        {
            plain: "サウマラタ蓮杯",
            parsed: "サウマラタはすはい",
        },
        {
            plain: "叡智宝珠",
            parsed: "えいちほうじゅ",
        },
        {
            plain: "エルヒンゲン",
            parsed: "エルヒンゲン",
        },
        {
            plain: "カウトリヤ",
            parsed: "カウトリヤ",
        },
        {
            plain: "ハニヤー",
            parsed: "ハニヤー",
        },
        {
            plain: "バルフォア",
            parsed: "バルフォア",
        },
        {
            plain: "ポコポコビーニー",
            parsed: "ポコポコビーニー",
        },
        {
            plain: "テンテンヨーヨー獣",
            parsed: "テンテンヨーヨーじゅう",
        },
        {
            plain: "百雷遮羅",
            parsed: "ひゃくらいしゃら",
        },
        {
            plain: "炎1",
            parsed: "ほのおいち",
        },
        {
            plain: "喜炎",
            parsed: "きえん",
        },
        {
            plain: "冒険者試練",
            parsed: "ぼうけんしゃしれん",
        },
        {
            plain: "無相の交響詩・トニックピリオド",
            parsed: "むそうのこうきょうしトニックピリオド",
        },
        {
            plain: "旅の写真に閃きを・緑葉編",
            parsed: "たびのしゃしんにひらめきをりょくようへん",
        },
        {
            plain: "星探しの旅",
            parsed: "ほしさがしのたび",
        },
        {
            plain: "五風巡察",
            parsed: "ごふうじゅんさつ",
        },
        {
            plain: "豊穣の祝福",
            parsed: "ほうじょうのしゅくふく",
        },
        {
            plain: "五式夕暮れの実改六三号甘さ四倍版",
            parsed: "ごしきゆうぐれのみかいろくさんごうあまさよんばいばん",
        },
        {
            plain: "サウザンドウィンドブリュー",
            parsed: "サウザンドウィンドブリュー",
        },
        {
            plain: "イノセンスの彫刻",
            parsed: "イノセンスのちょうこく",
        },
        {
            plain: "フェーイズの論証",
            parsed: "フェーイズのろんしょう",
        },
        {
            plain: "タブレットスタディー",
            parsed: "タブレットスタディー",
        },
        {
            plain: "ハジャナド",
            parsed: "ハジャナド",
        },
        {
            plain: "リメルトタブレット",
            parsed: "リメルトタブレット",
        },
        {
            plain: "サマータイムオデッセイ",
            parsed: "サマータイムオデッセイ",
        },
        {
            plain: "フェリックス・ユーグ",
            parsed: "フェリックスユーグ",
        },
        {
            plain: "バートランド",
            parsed: "バートランド",
        },
        {
            plain: "華やぐ紫苑の庭",
            parsed: "はなやぐしおんのにわ",
        },
        {
            plain: "光華容彩祭",
            parsed: "こうかすがたのいろどりさい",
        },
        {
            plain: "機関棋譚・巧策の陣",
            parsed: "きかんきたんこうさくのじん",
        },
        {
            plain: "西より届く香り",
            parsed: "にしよりとどくかおり",
        },
        {
            plain: "ナザファリン",
            parsed: "ナザファリン",
        },
        {
            plain: "パトリック",
            parsed: "パトリック",
        },
        {
            plain: "旅の写真に閃きを",
            parsed: "たびのしゃしんにひらめきを",
        },
        {
            plain: "三界道饗祭",
            parsed: "さんかいみちあえのまつり",
        },
        {
            plain: "睦疎の箱",
            parsed: "ぼくそのはこ",
        },
        {
            plain: "常世の荚",
            parsed: "とこよのさや",
        },
        {
            plain: "淵海鉱石",
            parsed: "えんかいこうせき",
        },
        {
            plain: "殻の宝玉",
            parsed: "からのほうぎょく",
        },
        {
            plain: "光界の印",
            parsed: "こうかいのしるし",
        },
        {
            plain: "珊瑚蝶",
            parsed: "さんごちょう",
        },
        {
            plain: "酌み交す酔夢",
            parsed: "くみかわすすいむ",
        },
        {
            plain: "鬼斧神工",
            parsed: "きふしんこう",
        },
        {
            plain: "ポーションスタディー",
            parsed: "ポーションスタディー",
        },
        {
            plain: "白雪に潜みし影",
            parsed: "しらゆきにひそみしかげ",
        },
        {
            plain: "マジックフラワー",
            parsed: "マジックフラワー",
        },
        {
            plain: "万端珊瑚事件簿・犬武者",
            parsed: "ばんたんさんごじけんぼいぬむしゃ",
        },
        {
            plain: "四方八方の網",
            parsed: "しほうはっぽうのあみ",
        },
        {
            plain: "影狼丸",
            parsed: "かげろうまる",
        },
        {
            plain: "迷城戦線・光界編",
            parsed: "めいじょうせんせんこうかいへん",
        },
        {
            plain: "謎境一騎",
            parsed: "めいきょういっき",
        },
        {
            plain: "訣籙陰陽寮",
            parsed: "けつろくおんようりょう",
        },
        {
            plain: "式大将",
            parsed: "しきだいしょう",
        },
        {
            plain: "古の孤影",
            parsed: "いにしえのこえい",
        },
        {
            plain: "プルシナスパイク",
            parsed: "プルシナスパイク",
        },
        {
            plain: "鏡花聴世",
            parsed: "きょうかちょうせい",
        },
        {
            plain: "鏡花の琴",
            parsed: "きょうかのこと",
        },
        {
            plain: "花咲きし夢",
            parsed: "はなさきしゆめ",
        },
        {
            plain: "月逐いの美談",
            parsed: "つきおいのびだん",
        },
        {
            plain: "月光を求めて",
            parsed: "げっこうをもとめて",
        },
        {
            plain: "月逐い符",
            parsed: "つきおいふ",
        },
        {
            plain: "玄月の宝箱",
            parsed: "げんげつのたからばこ",
        },
        {
            plain: "月逐い祭",
            parsed: "つきおいさい",
        },
        {
            plain: "百人一揆",
            parsed: "ひゃくにんいっき",
        },
        {
            plain: "月中王国",
            parsed: "げっちゅうおうこく",
        },
        {
            plain: "浮遊する秘霊",
            parsed: "ふゆうするひれい",
        },
        {
            plain: "雷痕を求めて",
            parsed: "らいこんをもとめて",
        },
        {
            plain: "幻影心流",
            parsed: "げんえいしんりゅう",
        },
        {
            plain: "機関棋譚・霊妙の陣",
            parsed: "きかんきたんれいみょうのじん",
        },
        {
            plain: "金リンゴ群島",
            parsed: "きんリンゴぐんとう",
        },
        {
            plain: "プリン島",
            parsed: "プリンとう",
        },
        {
            plain: "ハラハラ島",
            parsed: "ハラハラとう",
        },
        {
            plain: "フタフタ島",
            parsed: "フタフタとう",
        },
        {
            plain: "ボロボロ島",
            parsed: "ボロボロとう",
        },
        {
            plain: "ドド大魔王",
            parsed: "ドドだいまおう",
        },
        {
            plain: "風護のバドルドー",
            parsed: "ふうごのバドルドー",
        },
        {
            plain: "風来の剣闘奇譚",
            parsed: "ふうらいのけんとうきたん",
        },
        {
            plain: "余韻の叙述",
            parsed: "よいんのじょじゅつ",
        },
        {
            plain: "終わらぬ戦い",
            parsed: "おわらぬたたかい",
        },
        {
            plain: "ボンボン魔球大合戦",
            parsed: "ボンボンまきゅうだいがっせん",
        },
        {
            plain: "魔球ドドキャッスル",
            parsed: "まきゅうドドキャッスル",
        },
        {
            plain: "ドドバリア",
            parsed: "ドドバリア",
        },
        {
            plain: "エネルギー原盤・序論",
            parsed: "エネルギーげんばんじょろん",
        },
        {
            plain: "歪曲幽域",
            parsed: "わいきょくゆういき",
        },
        {
            plain: "迷城戦線",
            parsed: "めいじょうせんせん",
        },
        {
            plain: "三矢の結盟",
            parsed: "さんしのけつめい",
        },
        {
            plain: "風花祭",
            parsed: "ウインドブルームさい",
        },
        {
            plain: "風吹きのライアー",
            parsed: "かぜふきのライアー",
        },
        {
            plain: "霄灯",
            parsed: "しょうとう",
        },
        {
            plain: "狂戦士の薔薇",
            parsed: "きょうせんしのばら",
        },
        {
            plain: "狂戦士の羽根",
            parsed: "きょうせんしのはね",
        },
        {
            plain: "狂戦士のコップ",
            parsed: "きょうせんしのコップ",
        },
        {
            plain: "狂戦士の仮面",
            parsed: "きょうせんしのかめん",
        },
        {
            plain: "狂戦士の時計",
            parsed: "きょうせんしのとけい",
        },
        {
            plain: "吹雪の中の思い",
            parsed: "ふぶきのなかのおもい",
        },
        {
            plain: "氷を砕く執念",
            parsed: "こおりをくだくしゅうねん",
        },
        {
            plain: "雪覆う故郷の最後",
            parsed: "ゆきおおうこきょうのさいご",
        },
        {
            plain: "霜を纏った気骨",
            parsed: "しもをまとったきこつ",
        },
        {
            plain: "氷雪を踏む音",
            parsed: "ひょうせつをふむおと",
        },
        {
            plain: "血染めの鉄の心",
            parsed: "ちぞめのてつのこころ",
        },
        {
            plain: "血染めの黒羽",
            parsed: "ちぞめのくろはね",
        },
        {
            plain: "騎士が血に染めた時",
            parsed: "きしがちにそめたとき",
        },
        {
            plain: "血染めの騎士のコップ",
            parsed: "ちぞめのきしのコップ",
        },
        {
            plain: "血染めの鉄仮面",
            parsed: "ちぞめのてつかめん",
        },
        {
            plain: "勇士の期待",
            parsed: "ゆうしのきたい",
        },
        {
            plain: "勇士の勲章",
            parsed: "ゆうしのくんしょう",
        },
        {
            plain: "勇士の冠",
            parsed: "ゆうしのかんむり",
        },
        {
            plain: "勇士の壮行",
            parsed: "ゆうしのそうこう",
        },
        {
            plain: "魔女の炎の花",
            parsed: "まじょのほのおのはな",
        },
        {
            plain: "魔女の炎の羽根",
            parsed: "まじょのほのおのはね",
        },
        {
            plain: "魔女の破滅の時",
            parsed: "まじょのはめつのとき",
        },
        {
            plain: "魔女の心の炎",
            parsed: "まじょのこころのほのお",
        },
        {
            plain: "焦げた魔女の帽子",
            parsed: "こげたまじょのぼうし",
        },
        {
            plain: "雷雲の印籠",
            parsed: "らいうんのいんろう",
        },
        {
            plain: "亡命者の花",
            parsed: "ぼうめいしゃのはな",
        },
        {
            plain: "亡命者の羽根",
            parsed: "ぼうめいしゃのはね",
        },
        {
            plain: "亡命者のコップ",
            parsed: "ぼうめいしゃのコップ",
        },
        {
            plain: "亡命者の冠",
            parsed: "ぼうめいしゃのかんむり",
        },
        {
            plain: "亡命者の懐中時計",
            parsed: "ぼうめいしゃのかいちゅうどけい",
        },
        {
            plain: "剣闘士の未練",
            parsed: "けんとうしのみれん",
        },
        {
            plain: "剣闘士の帰着",
            parsed: "けんとうしのきちゃく",
        },
        {
            plain: "剣闘士の希望",
            parsed: "けんとうしのきぼう",
        },
        {
            plain: "剣闘士の酩酊",
            parsed: "けんとうしのめいてい",
        },
        {
            plain: "剣闘士の凱旋",
            parsed: "けんとうしのがいせん",
        },
        {
            plain: "金メッキのコサージュ",
            parsed: "きんメッキのコサージュ",
        },
        {
            plain: "追憶の風",
            parsed: "ついおくのかぜ",
        },
        {
            plain: "堅い銅のコンパス",
            parsed: "かたいどうのコンパス",
        },
        {
            plain: "浮沈の杯",
            parsed: "ふちんのさかずき",
        },
        {
            plain: "酒に漬けた帽子",
            parsed: "さけにつけたぼうし",
        },
        {
            plain: "教官の羽飾り",
            parsed: "きょうかんのはねかざり",
        },
        {
            plain: "教官の懐中時計",
            parsed: "きょうかんのかいちゅうどけい",
        },
        {
            plain: "教官の花飾り",
            parsed: "きょうかんのはなかざり",
        },
        {
            plain: "教官の帽子",
            parsed: "きょうかんのぼうし",
        },
        {
            plain: "教官のティーカップ",
            parsed: "きょうかんのティーカップ",
        },
        {
            plain: "火渡りの堅実",
            parsed: "ひわたりのけんじつ",
        },
        {
            plain: "火渡りの解放",
            parsed: "ひわたりのかいほう",
        },
        {
            plain: "火渡りの苦しみ",
            parsed: "ひわたりのくるしみ",
        },
        {
            plain: "火渡りの悟り",
            parsed: "ひわたりのさとり",
        },
        {
            plain: "火渡りの知恵",
            parsed: "ひわたりのちえ",
        },
        {
            plain: "彼方にある少女の心",
            parsed: "かなたにあるしょうじょのこころ",
        },
        {
            plain: "少女の揺らぐ思い",
            parsed: "しょうじょのゆらぐおもい",
        },
        {
            plain: "少女の短い華年",
            parsed: "しょうじょのみじかいかねん",
        },
        {
            plain: "少女の暫く息抜き",
            parsed: "しょうじょのしばらくいきぬき",
        },
        {
            plain: "少女の儚き顔",
            parsed: "しょうじょのはかなきかお",
        },
        {
            plain: "武人の羽飾り",
            parsed: "ぶじんのはねかざり",
        },
        {
            plain: "武人の酒器",
            parsed: "ぶじんのしゅき",
        },
        {
            plain: "旧貴族の花",
            parsed: "きゅうきぞくのはな",
        },
        {
            plain: "旧貴族の羽根",
            parsed: "きゅうきぞくのはね",
        },
        {
            plain: "旧貴族の時計",
            parsed: "きゅうきぞくのとけい",
        },
        {
            plain: "旧貴族の銀瓶",
            parsed: "きゅうきぞくのぎんびん",
        },
        {
            plain: "旧貴族の仮面",
            parsed: "きゅうきぞくのかめん",
        },
        {
            plain: "無垢の花",
            parsed: "むくのはな",
        },
        {
            plain: "良医の羽",
            parsed: "りょういのはね",
        },
        {
            plain: "停頓の時",
            parsed: "ていとんのとき",
        },
        {
            plain: "超越の盃",
            parsed: "ちょうえつのさかずき",
        },
        {
            plain: "嗤笑の面",
            parsed: "ししょうのめん",
        },
        {
            plain: "夏祭りの花",
            parsed: "なつまつりのはな",
        },
        {
            plain: "夏祭りの終わり",
            parsed: "なつまつりのおわり",
        },
        {
            plain: "夏祭りの刻",
            parsed: "なつまつりのとき",
        },
        {
            plain: "夏祭りの水風船",
            parsed: "なつまつりのみずふうせん",
        },
        {
            plain: "夏祭りの仮面",
            parsed: "なつまつりのかめん",
        },
        {
            plain: "学者の時計",
            parsed: "がくしゃのとけい",
        },
        {
            plain: "学者のしおり",
            parsed: "がくしゃのしおり",
        },
        {
            plain: "学者の羽根ペン",
            parsed: "がくしゃのはねペン",
        },
        {
            plain: "学者のコップ",
            parsed: "がくしゃのコップ",
        },
        {
            plain: "学者のレンズ",
            parsed: "がくしゃのレンズ",
        },
        {
            plain: "朝露の時",
            parsed: "あさつゆのとき",
        },
        {
            plain: "祈望の心",
            parsed: "きぼうのこころ",
        },
        {
            plain: "無常の面",
            parsed: "むじょうのめん",
        },
        {
            plain: "偉勲の花",
            parsed: "いくんのはな",
        },
        {
            plain: "昭武の羽根",
            parsed: "しょうぶのはね",
        },
        {
            plain: "金銅の日時計",
            parsed: "きんどうのひどけい",
        },
        {
            plain: "誓いの金杯",
            parsed: "ちかいのきんぱい",
        },
        {
            plain: "将帥の兜",
            parsed: "しょうすいのかぶと",
        },
        {
            plain: "雷鳥の憐み",
            parsed: "らいちょうのあわれみ",
        },
        {
            plain: "雷災の生存者",
            parsed: "らいさいのせいぞんしゃ",
        },
        {
            plain: "雷霆の時計",
            parsed: "らいていのとけい",
        },
        {
            plain: "落雷の前兆",
            parsed: "らくらいのぜんちょう",
        },
        {
            plain: "雷を呼ぶ冠",
            parsed: "かみなりをよぶかんむり",
        },
        {
            plain: "雷討ちの心",
            parsed: "かみなりうちのこころ",
        },
        {
            plain: "雷討ちの羽根",
            parsed: "かみなりうちのはね",
        },
        {
            plain: "雷討ちの刻",
            parsed: "かみなりうちのとき",
        },
        {
            plain: "雷討ちの器",
            parsed: "かみなりうちのうつわ",
        },
        {
            plain: "雷討ちの冠",
            parsed: "かみなりうちのかんむり",
        },
        {
            plain: "野花の記憶の草原",
            parsed: "のばなのきおくのそうげん",
        },
        {
            plain: "狩人の青緑色の矢羽",
            parsed: "かりうどのあおみどりいろのやばね",
        },
        {
            plain: "緑の狩人の決心",
            parsed: "みどりのかりうどのけっしん",
        },
        {
            plain: "緑の狩人の容器",
            parsed: "みどりのかりうどのようき",
        },
        {
            plain: "緑の狩人の冠",
            parsed: "みどりのかりうどのかんむり",
        },
        {
            plain: "フィナーレの時計",
            parsed: "フィナーレのとけい",
        },
        {
            plain: "指揮者のハット",
            parsed: "しきしゃのハット",
        },
        {
            plain: "楽団の朝の光",
            parsed: "がくだんのあさのひかり",
        },
        {
            plain: "琴師の矢羽",
            parsed: "ことしのやばね",
        },
        {
            plain: "吟遊者の水筒",
            parsed: "ぎんゆうしゃのすいとう",
        },
        {
            plain: "渇水の廃都",
            parsed: "かっすいのはいと",
        },
        {
            plain: "浄化の炎",
            parsed: "じょうかのほのお",
        },
        {
            plain: "風の崖",
            parsed: "かぜのがけ",
        },
        {
            plain: "眠りの国",
            parsed: "ねむりのくに",
        },
        {
            plain: "鋼鉄の舞",
            parsed: "こうてつのまい",
        },
        {
            plain: "死告の霜",
            parsed: "しこくのしも",
        },
        {
            plain: "不動",
            parsed: "ふどう",
        },
        {
            plain: "啓蟄",
            parsed: "けいちつ",
        },
        {
            plain: "桃源滞在記",
            parsed: "とうげんたいざいき",
        },
        {
            plain: "雲霞征狼記",
            parsed: "うんかせいろうき",
        },
        {
            plain: "水月侠行記",
            parsed: "すいげつきょうこうき",
        },
        {
            plain: "岩牢",
            parsed: "いわろう",
        },
        {
            plain: "雲立ち冒険記",
            parsed: "くもだちぼうけんき",
        },
        {
            plain: "山岳を揺るがす龍",
            parsed: "さんがくをゆるがすりゅう",
        },
        {
            plain: "焚尽の輪",
            parsed: "ふんじんのわ",
        },
        {
            plain: "雷の試練場",
            parsed: "かみなりのしれんじょう",
        },
        {
            plain: "稽古・御館絵巻",
            parsed: "けいこおやかたえまき",
        },
        {
            plain: "珊瑚宮",
            parsed: "さんごのみや",
        },
        {
            plain: "(マルチプレイへの) 加入申請",
            parsed: "かにゅうしんせい",
        },
        {
            plain: "シャム",
            parsed: "シャム",
        },
        {
            plain: "イナーム",
            parsed: "イナーム",
        },
        {
            plain: "オグズ",
            parsed: "オグズ",
        },
        {
            plain: "ウォルジー",
            parsed: "ウォルジー",
        },
        {
            plain: "フリカッセ・ドゥ・プーレ",
            parsed: "フリカッセドゥプーレ",
        },
        {
            plain: "ルミドゥースの挽歌",
            parsed: "ルミドゥースのばんか",
        },
        {
            plain: "オートモンターニュ",
            parsed: "オートモンターニュ",
        },
        {
            plain: "カリカリクロワッサン",
            parsed: "カリカリクロワッサン",
        },
        {
            plain: "プクプクアイスクリーム",
            parsed: "プクプクアイスクリーム",
        },
        {
            plain: "魔水",
            parsed: "ますい",
        },
        {
            plain: "ムアラニ",
            parsed: "ムアラニ",
        },
        {
            plain: "カチーナ",
            parsed: "カチーナ",
        },
        {
            plain: "キィニチ",
            parsed: "キィニチ",
        },
        {
            plain: "クフル・アハウ",
            parsed: "クフルアハウ",
        },
        {
            plain: "シトラリ",
            parsed: "シトラリ",
        },
        {
            plain: "シロネン",
            parsed: "シロネン",
        },
        {
            plain: "イアンサ",
            parsed: "イアンサ",
        },
        {
            plain: "チャスカ",
            parsed: "チャスカ",
        },
        {
            plain: "マーヴィカ",
            parsed: "マーヴィカ",
        },
        {
            plain: "オロルン",
            parsed: "オロルン",
        },
        {
            plain: "ナタ",
            parsed: "ナタ",
        },
        {
            plain: "鴨胸肉のオレンジソースソテー",
            parsed: "かもむねにくのオレンジソースソテー",
        },
        {
            plain: "千霊ムース",
            parsed: "せんれいムース",
        },
        {
            plain: "コンソメスープ",
            parsed: "コンソメスープ",
        },
        {
            plain: "カラフルマカロン",
            parsed: "カラフルマカロン",
        },
        {
            plain: "蜜汁チャーシュー",
            parsed: "みつじゅうチャーシュー",
        },
        {
            plain: "小さな魔女と消えない炎",
            parsed: "ちいさなまじょときえないほのお",
        },
        {
            plain: "ニャンコ事務所",
            parsed: "ニャンコじむしょ",
        },
        {
            plain: "バハラーム",
            parsed: "バハラーム",
        },
        {
            plain: "アマディア",
            parsed: "アマディア",
        },
        {
            plain: "エミリエ",
            parsed: "エミリエ",
        },
        {
            plain: "赦罪",
            parsed: "しゃざい",
        },
        {
            plain: "破天の槍",
            parsed: "はてんのやり",
        },
        {
            plain: "ナフィス",
            parsed: "ナフィス",
        },
        {
            plain: "カーター・シェルビウス",
            parsed: "カーターシェルビウス",
        },
        {
            plain: "カッシオドル",
            parsed: "カッシオドル",
        },
        {
            plain: "古いオルゴール",
            parsed: "ふるいオルゴール",
        },
        {
            plain: "ナイトウィンド・ホルン",
            parsed: "ナイトウィンドホルン",
        },
        {
            plain: "時の旅人",
            parsed: "ときのたびびと",
        },
        {
            plain: "ペインヘリ",
            parsed: "ペインヘリ",
        },
        {
            plain: "北方秘史",
            parsed: "ほっぽうひし",
        },
        {
            plain: "二銃士",
            parsed: "にじゅうし",
        },
        {
            plain: "風龍廃墟",
            parsed: "ふうりゅうはいきょ",
        },
        {
            plain: "トゥライトゥーラ",
            parsed: "トゥライトゥーラ",
        },
        {
            plain: "ティナル人",
            parsed: "ティナルじん",
        },
        {
            plain: "ワルカシュナ",
            parsed: "ワルカシュナ",
        },
        {
            plain: "赤月のシルエット",
            parsed: "せきげつのシルエット",
        },
        {
            plain: "無想刃狭間",
            parsed: "むそうじんはざま",
        },
        {
            plain: "セトス",
            parsed: "セトス",
        },
        {
            plain: "ボエティウス",
            parsed: "ボエティウス",
        },
        {
            plain: "スキュラ",
            parsed: "スキュラ",
        },
        {
            plain: "絹織りの羽",
            parsed: "きぬおりのはね",
        },
        {
            plain: "否定と裁決",
            parsed: "ひていとさいけつ",
        },
        {
            plain: "残火の灯燭",
            parsed: "ざんかのとうそく",
        },
        {
            plain: "淵光の羽鰭",
            parsed: "えんこうのうき",
        },
        {
            plain: "月光の羽鰭",
            parsed: "げっこうのうき",
        },
        {
            plain: "翼状の羽鰭",
            parsed: "よくじょうのうき",
        },
        {
            plain: "光揺らぐ剣の柄",
            parsed: "ひかりゆらぐけんのつか",
        },
        {
            plain: "折れた剣の柄",
            parsed: "おれたけんのつか",
        },
        {
            plain: "砕けた剣の柄",
            parsed: "くだけたけんのつか",
        },
        {
            plain: "魔像レガトゥス",
            parsed: "まぞうレガトゥス",
        },
        {
            plain: "魔像プラエトリアニ",
            parsed: "まぞうプラエトリアニ",
        },
        {
            plain: "ハギス",
            parsed: "ハギス",
        },
        {
            plain: "バブルスフレ",
            parsed: "バブルスフレ",
        },
        {
            plain: "ペトリコール町",
            parsed: "ペトリコールちょう",
        },
        {
            plain: "ノストイ地区",
            parsed: "ノストイちく",
        },
        {
            plain: "色褪せた城",
            parsed: "いろあせたしろ",
        },
        {
            plain: "往日の海",
            parsed: "おうじつのうみ",
        },
        {
            plain: "ヤヌスの門",
            parsed: "ヤヌスのもん",
        },
        {
            plain: "ホルトゥス・ユーゲレティス",
            parsed: "ホルトゥスユーゲレティス",
        },
        {
            plain: "アルタ・セミタ",
            parsed: "アルタセミタ",
        },
        {
            plain: "アピトリヌス山",
            parsed: "アピトリヌスさん",
        },
        {
            plain: "諧律院",
            parsed: "かいりついん",
        },
        {
            plain: "嘉明",
            parsed: "がみん",
        },
        {
            plain: "言笑",
            parsed: "げんしょう",
        },
        {
            plain: "羅おじ",
            parsed: "らおじ",
        },
        {
            plain: "マオくん",
            parsed: "マオくん",
        },
        {
            plain: "漱玉",
            parsed: "そうぎょく",
        },
        {
            plain: "ウェンツァイ",
            parsed: "うぇんつぁい",
        },
        {
            plain: "葉徳",
            parsed: "ようとく",
        },
        {
            plain: "ナヴィア",
            parsed: "ナヴィア",
        },
        {
            plain: "フリーナ",
            parsed: "フリーナ",
        },
        {
            plain: "千織",
            parsed: "ちおり",
        },
        {
            plain: "キャタピラー",
            parsed: "キャタピラー",
        },
        {
            plain: "ラノール",
            parsed: "ラノール",
        },
        {
            plain: "ナルツィッセンクロイツ",
            parsed: "ナルツィッセンクロイツ",
        },
        {
            plain: "清水玉",
            parsed: "せいすいぎょく",
        },
        {
            plain: "玄文獣",
            parsed: "げんもんじゅう",
        },
        {
            plain: "山隠れの猊獣",
            parsed: "やまがくれのげいじゅう",
        },
        {
            plain: "緋紅玉髄",
            parsed: "ひこうぎょくずい",
        },
        {
            plain: "蒼霊の鯉",
            parsed: "そうれいのこい",
        },
        {
            plain: "赤喙ペリカン",
            parsed: "あかくちばしぺりかん",
        },
        {
            plain: "フワフワヤギ",
            parsed: "ふわふわやぎ",
        },
        {
            plain: "玉璜ガメ",
            parsed: "ぎょくごうがめ",
        },
        {
            plain: "秋羽鴨",
            parsed: "しゅううかも",
        },
        {
            plain: "ヒスイのハートフェザースズキ",
            parsed: "ヒスイのハートフェザースズキ",
        },
        {
            plain: "玉光虫",
            parsed: "ぎょくこうちゅう",
        },
        {
            plain: "遺瓏埠",
            parsed: "いろうふ",
        },
        {
            plain: "暝垣山",
            parsed: "めいえんさん",
        },
        {
            plain: "霊濛山",
            parsed: "れいもうさん",
        },
        {
            plain: "宝玦の口",
            parsed: "ほうけつのくち",
        },
        {
            plain: "沈瓏淵",
            parsed: "ちんろうえん",
        },
        {
            plain: "霊枢の庭",
            parsed: "れいくのにわ",
        },
        {
            plain: "老茶樹の丘",
            parsed: "ろうちゃじゅのおか",
        },
        {
            plain: "薬蝶の谷",
            parsed: "やくちょうのたに",
        },
        {
            plain: "赤璋の石垣",
            parsed: "せきしょうのいしがき",
        },
        {
            plain: "赤望台",
            parsed: "せきぼうだい",
        },
        {
            plain: "錦落の庭",
            parsed: "きんらくのにわ",
        },
        {
            plain: "懸練山",
            parsed: "けんれんざん",
        },
        {
            plain: "帰終機",
            parsed: "きしゅうき",
        },
        {
            plain: "仙像",
            parsed: "せんぞう",
        },
        {
            plain: "有楽御簾切",
            parsed: "うらくみすぎり",
        },
        {
            plain: "裁断",
            parsed: "さいだん",
        },
        {
            plain: "凛流の監視者",
            parsed: "りるのかんししゃ",
        },
        {
            plain: "鶴鳴の余韻",
            parsed: "かくめいのよいん",
        },
        {
            plain: "終焉を嘆く詩",
            parsed: "しゅうえんをなげくうた",
        },
        {
            plain: "紀行",
            parsed: "きこう",
        },
        {
            plain: "大地紀行",
            parsed: "だいちきこう",
        },
        {
            plain: "シュヴルーズ",
            parsed: "シュヴルーズ",
        },
        {
            plain: "ジヴェルニー",
            parsed: "ジヴェルニー",
        },
        {
            plain: "ベネッティ",
            parsed: "ベネッティ",
        },
        {
            plain: "メリッサ",
            parsed: "メリッサ",
        },
        {
            plain: "エソンヌ",
            parsed: "エソンヌ",
        },
        {
            plain: "ジョリエンヌ",
            parsed: "ジョリエンヌ",
        },
        {
            plain: "ジョインビレ",
            parsed: "ジョインビレ",
        },
        {
            plain: "デジレ",
            parsed: "デジレ",
        },
        {
            plain: "エズモンド",
            parsed: "エズモンド",
        },
        {
            plain: "セドナ",
            parsed: "セドナ",
        },
        {
            plain: "ローウィック",
            parsed: "ローウィック",
        },
        {
            plain: "ポウル",
            parsed: "ポウル",
        },
        {
            plain: "ドルフィー",
            parsed: "ドルフィー",
        },
        {
            plain: "ブラウド",
            parsed: "ブラウド",
        },
        {
            plain: "エレイン",
            parsed: "エレイン",
        },
        {
            plain: "ヴィルマント",
            parsed: "ヴィルマント",
        },
        {
            plain: "トルクシー",
            parsed: "トルクシー",
        },
        {
            plain: "ジャラーカン",
            parsed: "ジャラーカン",
        },
        {
            plain: "メンテマシナリー·黄金統率型",
            parsed: "メンテマシナリーおうごんとうそつがた",
        },
        {
            plain: "呑星の鯨",
            parsed: "どんせいのくじら",
        },
        {
            plain: "フォカロルスのために",
            parsed: "フォカロルスのために",
        },
        {
            plain: "プクプクシュークリーム",
            parsed: "プクプクシュークリーム",
        },
        {
            plain: "特殊分析ズームレンズ",
            parsed: "とくしゅぶんせきズームレンズ",
        },
        {
            plain: "中央実験室跡地",
            parsed: "ちゅうおうじっけんしつあとち",
        },
        {
            plain: "霧の幽林道",
            parsed: "きりのゆうりんどう",
        },
        {
            plain: "ルミドゥースハーバー",
            parsed: "ルミドゥースハーバー",
        },
        {
            plain: "イースト・オトンヌキ",
            parsed: "イーストオトンヌキ",
        },
        {
            plain: "マンマルタコ亜種能力発生装置",
            parsed: "マンマルタコあしゅのうりょくはっせいそうち",
        },
        {
            plain: "デューバブル",
            parsed: "デューバブル",
        },
        {
            plain: "水晶浮遊花",
            parsed: "すいしょうふゆうか",
        },
        {
            plain: "水晶浮遊足場",
            parsed: "すいしょうふゆうあしば",
        },
        {
            plain: "エネルギー転換球",
            parsed: "エネルギーてんかんきゅう",
        },
        {
            plain: "自律艦砲",
            parsed: "じりつかんぽう",
        },
        {
            plain: "可動装置・調整弁",
            parsed: "かどうそうちちょうせいべん",
        },
        {
            plain: "可動装置・弾性弁",
            parsed: "かどうそうちだんせいべん",
        },
        {
            plain: "可動装置・軌道セット",
            parsed: "かどうそうちきどうセット",
        },
        {
            plain: "可動装置・エリファスビーム",
            parsed: "かどうそうちエリファスビーム",
        },
        {
            plain: "可動装置・昇降柱",
            parsed: "かどうそうちしょうこうちゅう",
        },
        {
            plain: "水仙の痕跡を追って",
            parsed: "すいせんのこんせきをおって",
        },
        {
            plain: "暁の即興詩",
            parsed: "あかつきのそっきょうし",
        },
        {
            plain: "探測ユニット・子機",
            parsed: "たんそくユニットこき",
        },
        {
            plain: "ルエトワール",
            parsed: "ルエトワール",
        },
        {
            plain: "湖光の鈴蘭",
            parsed: "ここうのすずらん",
        },
        {
            plain: "初露の源",
            parsed: "はつつゆのみなもと",
        },
        {
            plain: "静水流転の輝き",
            parsed: "せいすいるてんのかがやき",
        },
        {
            plain: "プニプニタコちゃん",
            parsed: "プニプニタコちゃん",
        },
        {
            plain: "携帯型空気動力粘性バブル発射機",
            parsed: "けいたいがたくうきどうりょくねんせいバブルはっしゃき",
        },
        {
            plain: "濁水幻霊イチコロリ",
            parsed: "だくすいげんれいイチコロリ",
        },
        {
            plain: "仕事の意味って…?",
            parsed: "しごとのいみって",
        },
        {
            plain: "やるべきことは他に有り",
            parsed: "やるべきことはほかにあり",
        },
        {
            plain: "岩食いの刑",
            parsed: "いわくいのけい",
        },
        {
            plain: "ナルボンヌのトマトファルシ",
            parsed: "ナルボンヌのトマトファルシ",
        },
        {
            plain: "クレームクレープシュゼット",
            parsed: "クレームクレープシュゼット",
        },
        {
            plain: "「漁獲」",
            parsed: "ぎょかく",
        },
        {
            plain: "浮世の錠",
            parsed: "うきよのじょう",
        },
        {
            plain: "千夜に浮かぶ夢",
            parsed: "せんやにうかぶゆめ",
        },
        {
            plain: "バザル・エルトン",
            parsed: "バザルエルトン",
        },
        {
            plain: "マシナリー・演算力増幅器",
            parsed: "マシナリーえんざんりょくぞうふくき",
        },
        {
            plain: "建造特化型マシナリー",
            parsed: "けんぞうとっかがたマシナリー",
        },
        {
            plain: "攻堅特化型マシナリー",
            parsed: "こうけんとっかがたマシナリー",
        },
        {
            plain: "実験用フィールド生成装置",
            parsed: "じっけんようフィールドせいせいそうち",
        },
        {
            plain: "大型瓦礫ブリーチャープリムス",
            parsed: "おおがたがれきブリーチャープリムス",
        },
        {
            plain: "大型狂蔓ブリーチャープリムス",
            parsed: "おおがたきょうまんブリーチャープリムス",
        },
        {
            plain: "千年真珠の海駿",
            parsed: "せんねんしんじゅのかいしゅん",
        },
        {
            plain: "ダーモヴィル雑貨店",
            parsed: "ダーモヴィルざっかてん",
        },
        {
            plain: "鴨肉のコンフィ",
            parsed: "かもにくのコンフィ",
        },
        {
            plain: "きのこのクリームスープ",
            parsed: "きのこのクリームスープ",
        },
        {
            plain: "フォンテーヌ風オニオンスープ",
            parsed: "フォンテーヌふうオニオンスープ",
        },
        {
            plain: "ラタトゥイユ・タッセス",
            parsed: "ラタトゥイユタッセス",
        },
        {
            plain: "水郷のアスピック",
            parsed: "すいきょうのアスピック",
        },
        {
            plain: "イル・フロッタント",
            parsed: "イルフロッタント",
        },
        {
            plain: "仙果スムージー",
            parsed: "せんかスムージー",
        },
        {
            plain: "清露デュエット",
            parsed: "せいろデュエット",
        },
        {
            plain: "ミートソースラザニア",
            parsed: "ミートソースラザニア",
        },
        {
            plain: "タルタルタワー",
            parsed: "タルタルタワー",
        },
        {
            plain: "パート・ドゥ・フリュイ",
            parsed: "パートドゥフリュイ",
        },
        {
            plain: "フィッシュアンドチップス",
            parsed: "フィッシュアンドチップス",
        },
        {
            plain: "ポワソンチャンティー・パイ",
            parsed: "ポワソンチャンティーパイ",
        },
        {
            plain: "晶螺マドレーヌ",
            parsed: "しょうらマドレーヌ",
        },
        {
            plain: "ベッシーチキン",
            parsed: "ベッシーチキン",
        },
        {
            plain: "発酵フルーツジュース",
            parsed: "はっこうフルーツジュース",
        },
        {
            plain: "フォンテーヌの地霊壇の鍵",
            parsed: "フォンテーヌのちれいだんのかぎ",
        },
        {
            plain: "水のトレジャーコンパス",
            parsed: "みずのトレジャーコンパス",
        },
        {
            plain: "メンテマシナリー・基礎能力型",
            parsed: "メンテマシナリーきそのうりょくがた",
        },
        {
            plain: "メンテマシナリー・態勢制御者",
            parsed: "メンテマシナリーたいせいせいぎょしゃ",
        },
        {
            plain: "メンテマシナリー・白金秘蔵型",
            parsed: "メンテマシナリーはっきんひぞうがた",
        },
        {
            plain: "千夜物語",
            parsed: "せんやものがたり",
        },
        {
            plain: "レムリア衰亡史",
            parsed: "レムリアすいぼうし",
        },
        {
            plain: "フォンテーヌ動物寓意譚",
            parsed: "フォンテーヌどうぶつぐういたん",
        },
        {
            plain: "水晶蝶",
            parsed: "みずしょうちょう",
        },
        {
            plain: "フジツボ弾丸",
            parsed: "フジツボだんがん",
        },
        {
            plain: "リフィー地区",
            parsed: "リフィーちく",
        },
        {
            plain: "フォンテーヌ運動エネルギー工学科学研究院地区",
            parsed: "フォンテーヌうんどうエネルギーこうがくかがくけんきゅういんちく",
        },
        {
            plain: "プネウムシア強力増幅装置",
            parsed: "プネウムシアきょうりょくぞうふくそうち",
        },
        {
            plain: "異重力凝水体",
            parsed: "いじゅうりょくぎょうすいたい",
        },
        {
            plain: "共律庭",
            parsed: "きょうりつてい",
        },
        {
            plain: "水仙十字結社",
            parsed: "すいせんじゅうじけっしゃ",
        },
        {
            plain: "水仙十字院",
            parsed: "すいせんじゅうじいん",
        },
        {
            plain: "フォンテーヌからのメッセージ",
            parsed: "フォンテーヌからのメッセージ",
        },
        {
            plain: "危険だらけのフォンテーヌ廷",
            parsed: "きけんだらけのフォンテーヌてい",
        },
        {
            plain: "一通の知らせ",
            parsed: "いっつうのしらせ",
        },
        {
            plain: "泉は再び湧きいづる",
            parsed: "いずみはふたたびわきいづる",
        },
        {
            plain: "冒険は遠い地を目指す",
            parsed: "ぼうけんはとおいちをめざす",
        },
        {
            plain: "奇石冒険記",
            parsed: "きせきぼうけんき",
        },
        {
            plain: "好事魔多し",
            parsed: "こうじまおおし",
        },
        {
            plain: "ぜんぜんよだれが止まらない!",
            parsed: "ぜんぜんよだれがとまらない",
        },
        {
            plain: "まだまだよだれが止まらない!",
            parsed: "まだまだよだれがとまらない",
        },
        {
            plain: "フォンテーヌ廷の事情",
            parsed: "フォンテーヌていのじじょう",
        },
        {
            plain: "少なくともお魚は知っている",
            parsed: "すくなくともおさかなはしっている",
        },
        {
            plain: "とにかく一杯飲もう",
            parsed: "とにかくいっぱいのもう",
        },
        {
            plain: "審美眼の評定・美学原理の批判",
            parsed: "しんびがんのひょうていびがくげんりのひはん",
        },
        {
            plain: "審美眼の評定・創作実践の批判",
            parsed: "しんびがんのひょうていそうさくじっせんのひはん",
        },
        {
            plain: "審美眼の評定・自己批判",
            parsed: "しんびがんのひょうていじこひはん",
        },
        {
            plain: "彼らの子供時代",
            parsed: "かれらのこどもじだい",
        },
        {
            plain: "彼らの子供時代・時は待ってくれない",
            parsed: "かれらのこどもじだいときはまってくれない",
        },
        {
            plain: "彼らの子供時代・都市旅行記",
            parsed: "かれらのこどもじだいとしりょこうき",
        },
        {
            plain: "彼らの子供時代・良き時代",
            parsed: "かれらのこどもじだいよきじだい",
        },
        {
            plain: "彼らの子供時代・とある章",
            parsed: "かれらのこどもじだいとあるしょう",
        },
        {
            plain: "休憩時間",
            parsed: "きゅうけいじかん",
        },
        {
            plain: "水底の日々",
            parsed: "みなそこのひび",
        },
        {
            plain: "机上の問題",
            parsed: "きじょうのもんだい",
        },
        {
            plain: "地上の水しぶき",
            parsed: "ちじょうのみずしぶき",
        },
        {
            plain: "弾丸にはカニを",
            parsed: "だんがんにはカニを",
        },
        {
            plain: "刃を得た魚のよう",
            parsed: "やいばをえたさかなのよう",
        },
        {
            plain: "高みを目指せ",
            parsed: "たかみをめざせ",
        },
        {
            plain: "連続少女失踪事件",
            parsed: "れんぞくしょうじょしっそうじけん",
        },
        {
            plain: "啓示の書",
            parsed: "けいじのしょ",
        },
        {
            plain: "謎の鏡",
            parsed: "なぞのかがみ",
        },
        {
            plain: "世界式",
            parsed: "せかいしき",
        },
        {
            plain: "スポンジアン号",
            parsed: "スポンジアンごう",
        },
        {
            plain: "レムリア",
            parsed: "レムリア",
        },
        {
            plain: "船渠剣",
            parsed: "せんきょけん",
        },
        {
            plain: "聖顕の鍵",
            parsed: "せいけんのかぎ",
        },
        {
            plain: "龍血を浴びた剣",
            parsed: "りゅうけつをあびたけん",
        },
        {
            plain: "携帯型チェーンソー",
            parsed: "けいたいがたチェーンソー",
        },
        {
            plain: "プロスペクタードリル",
            parsed: "プロスペクタードリル",
        },
        {
            plain: "レンジゲージ",
            parsed: "レンジゲージ",
        },
        {
            plain: "果てなき紺碧の唄",
            parsed: "はてなきこんぺきのうた",
        },
        {
            plain: "久遠流転の大典",
            parsed: "くおんるてんのだいてん",
        },
        {
            plain: "原始胎海の水",
            parsed: "げんしたいかいのみず",
        },
        {
            plain: "メロピデ要塞",
            parsed: "メロピデようさい",
        },
        {
            plain: "寝子",
            parsed: "ねこ",
        },
        {
            plain: "自称「浅瀬神社の代理宮司」",
            parsed: "じしょうあさせじんじゃのだいりぐうじ",
        },
        {
            plain: "弾丸フジツボ",
            parsed: "だんがんフジツボ",
        },
        {
            plain: "十字鈴蘭学会",
            parsed: "じゅうじすずらんがっかい",
        },
        {
            plain: "正義",
            parsed: "せいぎ",
        },
        {
            plain: "アワアワタツノコ・オス",
            parsed: "アワアワタツノコオス",
        },
        {
            plain: "チェルビックアプリシア",
            parsed: "チェルビックアプリシア",
        },
        {
            plain: "「水仙十字聖剣」",
            parsed: "すいせんじゅうじせいけん",
        },
        {
            plain: "モン・オトンヌキ",
            parsed: "モンオトンヌキ",
        },
        {
            plain: "「とても明るい場所」",
            parsed: "とてもあかるいばしょ",
        },
        {
            plain: "出会えてうれしい",
            parsed: "であえてうれしい",
        },
        {
            plain: "自然哲学学院",
            parsed: "しぜんてつがくがくいん",
        },
        {
            plain: "古き色合い",
            parsed: "ふるきいろあい",
        },
        {
            plain: "水仙のアン",
            parsed: "すいせんのアン",
        },
        {
            plain: "菩提樹材",
            parsed: "ぼだいじゅざい",
        },
        {
            plain: "トーチ材",
            parsed: "トーチざい",
        },
        {
            plain: "重甲ヤドカニ",
            parsed: "じゅうこうヤドカニ",
        },
        {
            plain: "堅盾重甲ヤドカニ",
            parsed: "けんじゅんじゅうこうヤドカニ",
        },
        {
            plain: "狩猟刀エイ",
            parsed: "しゅりょうとうエイ",
        },
        {
            plain: "プクプク獣",
            parsed: "プクプクじゅう",
        },
        {
            plain: "マンマルタコ",
            parsed: "マンマルタコ",
        },
        {
            plain: "ボウシクラゲ",
            parsed: "ボウシクラゲ",
        },
        {
            plain: "アンジェリックアプリシア",
            parsed: "アンジェリックアプリシア",
        },
        {
            plain: "スピノクロコ",
            parsed: "スピノクロコ",
        },
        {
            plain: "エリナス",
            parsed: "エリナス",
        },
        {
            plain: "遊光示現",
            parsed: "ゆうこうじげん",
        },
        {
            plain: "マロウ材",
            parsed: "マロウざい",
        },
        {
            plain: "コウハクジュ材",
            parsed: "コウハクジュざい",
        },
        {
            plain: "純水騎士",
            parsed: "じゅんすいきし",
        },
        {
            plain: "マシナリー・偵察記録型",
            parsed: "マシナリーていさつきろくがた",
        },
        {
            plain: "マシナリー・地質探知型",
            parsed: "マシナリーちしつたんちがた",
        },
        {
            plain: "マシナリー・機敏採集型",
            parsed: "マシナリーきびんさいしゅうがた",
        },
        {
            plain: "マシナリー・区域警戒型",
            parsed: "マシナリーくいきけいかいがた",
        },
        {
            plain: "制圧特化型マシナリー",
            parsed: "せいあつとっかがたマシナリー",
        },
        {
            plain: "殲滅特化型マシナリー",
            parsed: "せんめつとっかがたマシナリー",
        },
        {
            plain: "ホテル・ドゥボール",
            parsed: "ホテルドゥボール",
        },
        {
            plain: "カフェ・ルツェルン",
            parsed: "カフェルツェルン",
        },
        {
            plain: "ルポート時計店",
            parsed: "ルポートとけいてん",
        },
        {
            plain: "ガーリックバゲット",
            parsed: "ガーリックバゲット",
        },
        {
            plain: "フォンタ",
            parsed: "フォンタ",
        },
        {
            plain: "エビのポテトカナッペ",
            parsed: "エビのポテトカナッペ",
        },
        {
            plain: "ポワソンシーフードスープ",
            parsed: "ポワソンシーフードスープ",
        },
        {
            plain: "バブルオレンジ",
            parsed: "バブルオレンジ",
        },
        {
            plain: "水神の瞳の共鳴石",
            parsed: "すいじんのひとみのきょうめいせき",
        },
        {
            plain: "水の印",
            parsed: "みずのしるし",
        },
        {
            plain: "プリュイロータス",
            parsed: "プリュイロータス",
        },
        {
            plain: "十字鈴蘭秘宝",
            parsed: "じゅうじすずらんひほう",
        },
        {
            plain: "パレ・メルモニア",
            parsed: "パレメルモニア",
        },
        {
            plain: "ヴァザーリ回廊",
            parsed: "ヴァザーリかいろう",
        },
        {
            plain: "リヨンエリア",
            parsed: "リヨンエリア",
        },
        {
            plain: "ナルボンヌエリア",
            parsed: "ナルボンヌエリア",
        },
        {
            plain: "エリニュス島",
            parsed: "エリニュスとう",
        },
        {
            plain: "ポート・マルコット",
            parsed: "ポートマルコット",
        },
        {
            plain: "ルキナの泉",
            parsed: "ルキナのいずみ",
        },
        {
            plain: "ポワソン町",
            parsed: "ポワソンちょう",
        },
        {
            plain: "メリュシー村",
            parsed: "メリュシーむら",
        },
        {
            plain: "エルトン海溝",
            parsed: "エルトンかいこう",
        },
        {
            plain: "サラシア海原",
            parsed: "サラシアうなばら",
        },
        {
            plain: "希望の道",
            parsed: "きぼうのみち",
        },
        {
            plain: "タラッタ海底谷",
            parsed: "タラッタかいていこく",
        },
        {
            plain: "諭示裁定カーディナル",
            parsed: "ゆしさいていカーディナル",
        },
        {
            plain: "プネウムシア中継柱",
            parsed: "プネウムシアちゅうけいちゅう",
        },
        {
            plain: "プネウムシアストレージボックス",
            parsed: "プネウムシアストレージボックス",
        },
        {
            plain: "水量探測クリスタル",
            parsed: "すいりょうたんそくクリスタル",
        },
        {
            plain: "スチームバード新聞社",
            parsed: "スチームバードしんぶんしゃ",
        },
        {
            plain: "棘薔薇の会",
            parsed: "スピナディロースラ",
        },
        {
            plain: "検律庭",
            parsed: "けんりつてい",
        },
        {
            plain: "凶猛動物はどこだ",
            parsed: "きょうもうどうぶつはどこだ",
        },
        {
            plain: "ガルシアの賛歌・妥当な贈り物",
            parsed: "ガルシアのさんかだとうなおくりもの",
        },
        {
            plain: "智にある宝・新計画",
            parsed: "ちにあるたからしんけいかく",
        },
        {
            plain: "静態的風景",
            parsed: "せいたいてきふうけい",
        },
        {
            plain: "騙す者は騙される",
            parsed: "だますものはだまされる",
        },
        {
            plain: "水色の潮痕",
            parsed: "みずいろのちょうこん",
        },
        {
            plain: "花咲き誇る芝生にて",
            parsed: "はなさきほこるしばふにて",
        },
        {
            plain: "半オート鍛造",
            parsed: "はんオートたんぞう",
        },
        {
            plain: "「あの方」の依頼",
            parsed: "あのかたのいらい",
        },
        {
            plain: "剣はいずこ?",
            parsed: "けんはいずこ",
        },
        {
            plain: "ガルシアの賛歌・キーアイテム",
            parsed: "ガルシアのさんかキーアイテム",
        },
        {
            plain: "律償混合エネルギー",
            parsed: "りっしょうこんごうエネルギー",
        },
        {
            plain: "「公平」の教え",
            parsed: "こうへいのおしえ",
        },
        {
            plain: "「公平」の導き",
            parsed: "こうへいのみちびき",
        },
        {
            plain: "「公平」の哲学",
            parsed: "こうへいのてつがく",
        },
        {
            plain: "「秩序」の教え",
            parsed: "ちつじょのおしえ",
        },
        {
            plain: "「秩序」の導き",
            parsed: "ちつじょのみちびき",
        },
        {
            plain: "「秩序」の哲学",
            parsed: "ちつじょのてつがく",
        },
        {
            plain: "「正義」の教え",
            parsed: "せいぎのおしえ",
        },
        {
            plain: "「正義」の導き",
            parsed: "せいぎのみちびき",
        },
        {
            plain: "「正義」の哲学",
            parsed: "せいぎのてつがく",
        },
        {
            plain: "フレミネ",
            parsed: "フレミネ",
        },
        {
            plain: "リオセスリ",
            parsed: "リオセスリ",
        },
        {
            plain: "ヌヴィレット",
            parsed: "ヌヴィレット",
        },
        {
            plain: "水神",
            parsed: "すいじん",
        },
        {
            plain: "ヒルチャールレンジャー",
            parsed: "ヒルチャールレンジャー",
        },
        {
            plain: "聖骸獣",
            parsed: "せいがいじゅう",
        },
        {
            plain: "聖骸トビヘビ",
            parsed: "せいがいトビヘビ",
        },
        {
            plain: "聖骸サソリ",
            parsed: "せいがいサソリ",
        },
        {
            plain: "聖骸赤鷲",
            parsed: "せいがいあかわし",
        },
        {
            plain: "聖骸牙獣",
            parsed: "せいがいがじゅう",
        },
        {
            plain: "聖骸ツノワニ",
            parsed: "せいがいツノワニ",
        },
        {
            plain: "マルコット草",
            parsed: "マルコットそう",
        },
        {
            plain: "タイダルガ",
            parsed: "タイダルガ",
        },
        {
            plain: "ウェスト・オトンヌキ",
            parsed: "ウェストオトンヌキ",
        },
        {
            plain: "萃華材",
            parsed: "すいかざい",
        },
        {
            plain: "ロマリタイムフラワー",
            parsed: "ロマリタイムフラワー",
        },
        {
            plain: "黄金の劇団",
            parsed: "おうごんのげきだん",
        },
        {
            plain: "クロックワーク・マシナリー",
            parsed: "クロックワークマシナリー",
        },
        {
            plain: "マシナリー・水中巡遊型",
            parsed: "マシナリーすいちゅうじゅんゆうがた",
        },
        {
            plain: "マシナリー・水中観測型",
            parsed: "マシナリーすいちゅうかんそくがた",
        },
        {
            plain: "氷風組曲",
            parsed: "ひょうふうくみきょく",
        },
        {
            plain: "濁水幻霊",
            parsed: "だくすいげんれい",
        },
        {
            plain: "濁水粉砕の幻霊",
            parsed: "だくすいふんさいのげんれい",
        },
        {
            plain: "濁水噴出の幻霊",
            parsed: "だくすいふんしゅつのげんれい",
        },
        {
            plain: "ブリーチャープリムス",
            parsed: "ブリーチャープリムス",
        },
        {
            plain: "瓦礫ブリーチャープリムス",
            parsed: "がれきブリーチャープリムス",
        },
        {
            plain: "狂蔓ブリーチャープリムス",
            parsed: "きょうまんブリーチャープリムス",
        },
        {
            plain: "原海アベラント",
            parsed: "げんかいアベラント",
        },
        {
            plain: "ノンビリラッコ",
            parsed: "ノンビリラッコ",
        },
        {
            plain: "鉄甲熔炎帝王",
            parsed: "てっこうようえんていおう",
        },
        {
            plain: "レシュッツのクロックワーク工房",
            parsed: "レシュッツのクロックワークこうぼう",
        },
        {
            plain: "晶蝶トラップ装置",
            parsed: "しょうちょうトラップそうち",
        },
        {
            plain: "風力ファン",
            parsed: "ふうりょくファン",
        },
        {
            plain: "ガードドッグ",
            parsed: "ガードドッグ",
        },
        {
            plain: "ジェントルドッグ",
            parsed: "ジェントルドッグ",
        },
        {
            plain: "レディドッグ",
            parsed: "レディドッグ",
        },
        {
            plain: "赤カンムリガラ",
            parsed: "あかカンムリガラ",
        },
        {
            plain: "カサガラ",
            parsed: "カサガラ",
        },
        {
            plain: "マゼンタクジャクバト",
            parsed: "マゼンタクジャクバト",
        },
        {
            plain: "紫金オオズグロカモメ",
            parsed: "しきんオオズグロカモメ",
        },
        {
            plain: "フォンテーヌ廷地区",
            parsed: "フォンテーヌていちく",
        },
        {
            plain: "ブロー地区",
            parsed: "ブローちく",
        },
        {
            plain: "ポワソントンネル",
            parsed: "ポワソントンネル",
        },
        {
            plain: "ベリル地区",
            parsed: "ベリルちく",
        },
        {
            plain: "「とてもあったかい場所」",
            parsed: "とてもあったかいばしょ",
        },
        {
            plain: "「さみしい場所」",
            parsed: "さみしいばしょ",
        },
        {
            plain: "巡水船",
            parsed: "じゅんすいせん",
        },
        {
            plain: "リカバリーオーブ",
            parsed: "リカバリーオーブ",
        },
        {
            plain: "不思議な浮遊ボール",
            parsed: "ふしぎなふゆうボール",
        },
        {
            plain: "円環装置",
            parsed: "えんかんそうち",
        },
        {
            plain: "原海海草",
            parsed: "げんかいかいそう",
        },
        {
            plain: "プネウムシアクラスター",
            parsed: "プネウムシアクラスター",
        },
        {
            plain: "プネウマクラスター",
            parsed: "プネウマクラスター",
        },
        {
            plain: "ウーシアクラスター",
            parsed: "ウーシアクラスター",
        },
        {
            plain: "レインボーローズ",
            parsed: "レインボーローズ",
        },
        {
            plain: "ルミドゥースベル",
            parsed: "ルミドゥースベル",
        },
        {
            plain: "対消滅",
            parsed: "ついしょうめつ",
        },
        {
            plain: "アルケー",
            parsed: "アルケー",
        },
        {
            plain: "異海源水",
            parsed: "いかいげんすい",
        },
        {
            plain: "水中スタミナ",
            parsed: "すいちゅうスタミナ",
        },
        {
            plain: "海流",
            parsed: "かいりゅう",
        },
        {
            plain: "高圧水流吹き出し口",
            parsed: "こうあつすいりゅうふきだしぐち",
        },
        {
            plain: "命の契約",
            parsed: "いのちのけいやく",
        },
        {
            plain: "海淵のフィナーレ",
            parsed: "かいえんのフィナーレ",
        },
        {
            plain: "狼牙",
            parsed: "ろうが",
        },
        {
            plain: "サーンドルの渡し守",
            parsed: "サーンドルのわたしもり",
        },
        {
            plain: "タイダル・シャドー",
            parsed: "タイダルシャドー",
        },
        {
            plain: "話死合い棒",
            parsed: "はなしあいぼう",
        },
        {
            plain: "正義の報酬",
            parsed: "せいぎのほうしゅう",
        },
        {
            plain: "フィヨルドの歌",
            parsed: "フィヨルドのうた",
        },
        {
            plain: "静寂の唄",
            parsed: "せいじゃくのうた",
        },
        {
            plain: "烈日の後嗣",
            parsed: "れつじつのこうし",
        },
        {
            plain: "始まりの大魔術",
            parsed: "はじまりのだいまじゅつ",
        },
        {
            plain: "純水流華",
            parsed: "じゅんすいるか",
        },
        {
            plain: "古祠の瓏",
            parsed: "こしのろう",
        },
        {
            plain: "フライム",
            parsed: "フライム",
        },
        {
            plain: "水フライム",
            parsed: "みずフライム",
        },
        {
            plain: "風フライム",
            parsed: "かぜフライム",
        },
        {
            plain: "岩フライム",
            parsed: "いわフライム",
        },
        {
            plain: "氷フライム",
            parsed: "こおりフライム",
        },
        {
            plain: "雷フライム",
            parsed: "かみなりフライム",
        },
        {
            plain: "炎フライム",
            parsed: "ほのおフライム",
        },
        {
            plain: "草フライム",
            parsed: "くさフライム",
        },
        {
            plain: "メリュジーヌ",
            parsed: "メリュジーヌ",
        },
        {
            plain: "フォンテーヌ廷",
            parsed: "フォンテーヌてい",
        },
        {
            plain: "ロマリタイムハーバー",
            parsed: "ロマリタイムハーバー",
        },
        {
            plain: "沈玉の谷",
            parsed: "ちんぎょくのたに",
        },
        {
            plain: "バイダ港",
            parsed: "バイダこう",
        },
        {
            plain: "執律庭",
            parsed: "しつりつてい",
        },
        {
            plain: "特巡隊",
            parsed: "とくじゅんたい",
        },
        {
            plain: "マレショーセ・ファントム",
            parsed: "マレショーセファントム",
        },
        {
            plain: "純水精霊",
            parsed: "じゅんすいせいれい",
        },
        {
            plain: "コーヒー豆",
            parsed: "コーヒーまめ",
        },
        {
            plain: "プルビルニの戒め",
            parsed: "プルビルニのいましめ",
        },
        {
            plain: "とあるフォンテーヌ人の思い出",
            parsed: "とあるフォンテーヌじんのおもいで",
        },
        {
            plain: "万端珊瑚事件簿・事件解決の時",
            parsed: "ばんたんさんごじけんぼじけんかいけつのとき",
        },
        {
            plain: "安全な輸送規則",
            parsed: "あんぜんなゆそうきそく",
        },
        {
            plain: "麒麟",
            parsed: "きりん",
        },
        {
            plain: "ファロス灯台",
            parsed: "ファロスとうだい",
        },
        {
            plain: "ツルツル豆",
            parsed: "ツルツルまめ",
        },
        {
            plain: "権能",
            parsed: "けんのう",
        },
        {
            plain: "止まらぬ鍛練",
            parsed: "とまらぬたんれん",
        },
        {
            plain: "ダステア",
            parsed: "ダステア",
        },
        {
            plain: "不正浮遊",
            parsed: "ふせいふゆう",
        },
        {
            plain: "グランドキュレーター",
            parsed: "グランドキュレーター",
        },
        {
            plain: "ミントビーンスープ",
            parsed: "ミントビーンスープ",
        },
        {
            plain: "トキの嘴",
            parsed: "トキのくちばし",
        },
        {
            plain: "砂漠の民",
            parsed: "さばくのたみ",
        },
        {
            plain: "リネ",
            parsed: "リネ",
        },
        {
            plain: "リネット",
            parsed: "リネット",
        },
        {
            plain: "ダインスレイヴ",
            parsed: "ダインスレイヴ",
        },
        {
            plain: "エルミン",
            parsed: "エルミン",
        },
        {
            plain: "兆載永劫ドレイク",
            parsed: "ちょうさいようごうドレイク",
        },
        {
            plain: "フォンテーヌ",
            parsed: "フォンテーヌ",
        },
        {
            plain: "カーンルイア",
            parsed: "カーンルイア",
        },
        {
            plain: "フォンテーヌ科学院",
            parsed: "フォンテーヌかがくいん",
        },
        {
            plain: "スチームバード新聞",
            parsed: "スチームバードしんぶん",
        },
        {
            plain: "空想クラブ",
            parsed: "くうそうクラブ",
        },
        {
            plain: "菫色ノ庭",
            parsed: "すみれいろノにわ",
        },
        {
            plain: "跋掣",
            parsed: "ばっせい",
        },
        {
            plain: "霊光碑",
            parsed: "れいこうひ",
        },
        {
            plain: "碑銘の研究",
            parsed: "ひめいのけんきゅう",
        },
        {
            plain: "甘露の池",
            parsed: "かんろのいけ",
        },
        {
            plain: "来歆の余響",
            parsed: "らいきんのよきょう",
        },
        {
            plain: "剣闘士のフィナーレ",
            parsed: "けんとうしのフィナーレ",
        },
        {
            plain: "海染硨磲",
            parsed: "うみぞめしゃこ",
        },
        {
            plain: "エンドラー",
            parsed: "エンドラー",
        },
        {
            plain: "辛炎",
            parsed: "しんえん",
        },
        {
            plain: "九条裟羅",
            parsed: "くじょうさら",
        },
        {
            plain: "柊弘嗣",
            parsed: "ひいらぎひろし",
        },
        {
            plain: "ルー",
            parsed: "ルー",
        },
        {
            plain: "アランハドゥ",
            parsed: "アランハドゥ",
        },
        {
            plain: "華池岩岫",
            parsed: "かちがんしゅう",
        },
        {
            plain: "紅葉ノ庭",
            parsed: "もみじノにわ",
        },
        {
            plain: "遺跡巡視者",
            parsed: "いせきじゅんししゃ",
        },
        {
            plain: "黒蛇騎士・砕岩の斧",
            parsed: "こくじゃきしさいがんのおの",
        },
        {
            plain: "マッシュラプトル",
            parsed: "マッシュラプトル",
        },
        {
            plain: "味噌汁",
            parsed: "みそしる",
        },
        {
            plain: "腌篤鮮",
            parsed: "イェンドゥシェン",
        },
        {
            plain: "紺田煮",
            parsed: "こんだに",
        },
        {
            plain: "璃月の地霊壇の鍵",
            parsed: "りーゆぇのちれいだんのかぎ",
        },
        {
            plain: "禁忌滅却の札",
            parsed: "きんきめっきゃくのふだ",
        },
        {
            plain: "グッピー",
            parsed: "グッピー",
        },
        {
            plain: "スイートグッピー",
            parsed: "スイートグッピー",
        },
        {
            plain: "藍染グッピー",
            parsed: "あいぜんグッピー",
        },
        {
            plain: "クサヴァ",
            parsed: "クサヴァ",
        },
        {
            plain: "蘇生手綱",
            parsed: "そせいたづな",
        },
        {
            plain: "神輿手綱",
            parsed: "みこしたづな",
        },
        {
            plain: "ヴァスミリティ",
            parsed: "ヴァスミリティ",
        },
        {
            plain: "浄光の羽根",
            parsed: "じょうこうのはね",
        },
        {
            plain: "キノシシ",
            parsed: "キノシシ",
        },
        {
            plain: "駄獣",
            parsed: "だじゅう",
        },
        {
            plain: "モジャモジャ駄獣",
            parsed: "モジャモジャだじゅう",
        },
        {
            plain: "テントガメ",
            parsed: "テントガメ",
        },
        {
            plain: "誓いの岬",
            parsed: "ちかいのみさき",
        },
        {
            plain: "珉林",
            parsed: "みんりん",
        },
        {
            plain: "漉華の池",
            parsed: "ろくかのいけ",
        },
        {
            plain: "翠決坡",
            parsed: "すいけつざか",
        },
        {
            plain: "奥蔵山",
            parsed: "おくぞうさん",
        },
        {
            plain: "荻花洲",
            parsed: "てきかしゅう",
        },
        {
            plain: "紺田村",
            parsed: "こんだむら",
        },
        {
            plain: "たたら砂",
            parsed: "たたらすな",
        },
        {
            plain: "名椎の浜",
            parsed: "なづちのはま",
        },
        {
            plain: "ヤシオリ島",
            parsed: "ヤシオリじま",
        },
        {
            plain: "藤兜砦",
            parsed: "ふじとうとりで",
        },
        {
            plain: "無明砦",
            parsed: "むみょうとりで",
        },
        {
            plain: "海祇島",
            parsed: "わたつみじま",
        },
        {
            plain: "平海砦",
            parsed: "ひらうみとりで",
        },
        {
            plain: "カンナ山",
            parsed: "カンナざん",
        },
        {
            plain: "チャトラカム洞窟",
            parsed: "チャトラカムどうくつ",
        },
        {
            plain: "ヤスナ幽境",
            parsed: "ヤスナゆうきょう",
        },
        {
            plain: "ヴァナラーナ",
            parsed: "ヴァナラーナ",
        },
        {
            plain: "かつてのヴァナラーナ",
            parsed: "かつてのヴァナラーナ",
        },
        {
            plain: "鑠石の丘",
            parsed: "しゃくせきのおか",
        },
        {
            plain: "アル・アジフの砂",
            parsed: "アルアジフのすな",
        },
        {
            plain: "精鋼の砂丘",
            parsed: "せいこうのさきゅう",
        },
        {
            plain: "アル・スークル宮殿",
            parsed: "アルスークルきゅうでん",
        },
        {
            plain: "ファラクケルトの園",
            parsed: "ファラクケルトのその",
        },
        {
            plain: "バルソムの丘",
            parsed: "バルソムのおか",
        },
        {
            plain: "ヴァナラーナの夢の樹",
            parsed: "ヴァナラーナのゆめのき",
        },
        {
            plain: "ジンニーの祠",
            parsed: "ジンニーのほこら",
        },
        {
            plain: "海上の花鈿",
            parsed: "かいじょうのかでん",
        },
        {
            plain: "「螭」の話",
            parsed: "みずちのはなし",
        },
        {
            plain: "盛んだ国は廃土に戻る",
            parsed: "さかんだくにははいどにもどる",
        },
        {
            plain: "漉華の風景画",
            parsed: "ろっかのふうけいが",
        },
        {
            plain: "神櫻大祓",
            parsed: "かみざくらおおはらい",
        },
        {
            plain: "影向祓",
            parsed: "ようごうばらい",
        },
        {
            plain: "たたら物語",
            parsed: "たたらものがたり",
        },
        {
            plain: "八衢彦の試練",
            parsed: "やちまたひこのしれん",
        },
        {
            plain: "八衢姫の試練",
            parsed: "やちまたひめのしれん",
        },
        {
            plain: "杉材",
            parsed: "すぎざい",
        },
        {
            plain: "霓裳花",
            parsed: "げいしょうばな",
        },
        {
            plain: "石珀",
            parsed: "せきはく",
        },
        {
            plain: "ユウトウタケ",
            parsed: "ユウトウタケ",
        },
        {
            plain: "「忠言」の教え",
            parsed: "ちゅうげんのおしえ",
        },
        {
            plain: "「忠言」の導き",
            parsed: "ちゅうげんのみちびき",
        },
        {
            plain: "「忠言」の哲学",
            parsed: "ちゅうげんのてつがく",
        },
        {
            plain: "斬山の刃",
            parsed: "ざんさんのやいば",
        },
        {
            plain: "マカイラの水色",
            parsed: "マカイラのみずいろ",
        },
        {
            plain: "鉾槍",
            parsed: "ほこやり",
        },
        {
            plain: "草薙の稲光",
            parsed: "くさなぎのいなびかり",
        },
        {
            plain: "弓蔵",
            parsed: "ゆみぞう",
        },
        {
            plain: "澹月・試作",
            parsed: "たんげつしさく",
        },
        {
            plain: "特級の宝玉",
            parsed: "とっきゅうのほうぎょく",
        },
        {
            plain: "金珀・試作",
            parsed: "きんぱくしさく",
        },
        {
            plain: "天雲峠",
            parsed: "あまくもとうげ",
        },
        {
            plain: "ナセジュナ",
            parsed: "ナセジュナ",
        },
        {
            plain: "コリュバンテス",
            parsed: "コリュバンテス",
        },
        {
            plain: "コリュの太鼓",
            parsed: "コリュのたいこ",
        },
        {
            plain: "ウドゥンバラの花蕊",
            parsed: "ウドゥンバラのかずい",
        },
        {
            plain: "霊光絶唱",
            parsed: "れいこうぜっしょう",
        },
        {
            plain: "霊芯",
            parsed: "れいしん",
        },
        {
            plain: "鉄和山",
            parsed: "てつなざん",
        },
        {
            plain: "トゥニギの黒淵",
            parsed: "トゥニギのこくえん",
        },
        {
            plain: "ドゥル・カルナイン峠",
            parsed: "ドゥルカルナインとうげ",
        },
        {
            plain: "サムドラ海岸",
            parsed: "サムドラかいがん",
        },
        {
            plain: "アフラシアブ洞窟",
            parsed: "アフラシアブどうくつ",
        },
        {
            plain: "アシパトラ・ヴァナの沼",
            parsed: "アシパトラヴァナのぬま",
        },
        {
            plain: "アル・ヌハスの都",
            parsed: "アルヌハスのみやこ",
        },
        {
            plain: "花海",
            parsed: "かかい",
        },
        {
            plain: "シューニャター湖",
            parsed: "シューニャターこ",
        },
        {
            plain: "ウドゥンバラ",
            parsed: "ウドゥンバラ",
        },
        {
            plain: "「スケプティック団」メンバー",
            parsed: "スケプティックだんメンバー",
        },
        {
            plain: "仄暗い炎",
            parsed: "ほのぐらいほのお",
        },
        {
            plain: "アゾス物質",
            parsed: "アゾスぶっしつ",
        },
        {
            plain: "ソルシュ",
            parsed: "ソルシュ",
        },
        {
            plain: "有頂の塔",
            parsed: "うちょうのとう",
        },
        {
            plain: "無学の塔",
            parsed: "むがくのとう",
        },
        {
            plain: "幼夢の欠片",
            parsed: "ようむのかけら",
        },
        {
            plain: "河谷の闇路",
            parsed: "かこくのやみじ",
        },
        {
            plain: "赤砂の檻",
            parsed: "せきさのおり",
        },
        {
            plain: "ミラージュ祭場",
            parsed: "ミラージュさいじょう",
        },
        {
            plain: "「亡者の都」",
            parsed: "もうじゃのみやこ",
        },
        {
            plain: "五大オアシスの殿堂",
            parsed: "ごだいオアシスのでんどう",
        },
        {
            plain: "深罪の浸礼者",
            parsed: "しんざいのしんれいしゃ",
        },
        {
            plain: "霊光",
            parsed: "れいこう",
        },
        {
            plain: "荒石の蒼漠",
            parsed: "あらいしのそうばく",
        },
        {
            plain: "灰残晶",
            parsed: "はいざんしょう",
        },
        {
            plain: "サングイト",
            parsed: "サングイト",
        },
        {
            plain: "龍王",
            parsed: "りゅうおう",
        },
        {
            plain: "アペプのオアシス守護者",
            parsed: "アペプのオアシスしゅごしゃ",
        },
        {
            plain: "風の翼",
            parsed: "かぜのつばさ",
        },
        {
            plain: "元素生命",
            parsed: "げんそせいめい",
        },
        {
            plain: "綺良々",
            parsed: "きらら",
        },
        {
            plain: "スパルタクス",
            parsed: "スパルタクス",
        },
        {
            plain: "アペプ",
            parsed: "アペプ",
        },
        {
            plain: "浄罪の井戸",
            parsed: "じょうざいのいど",
        },
        {
            plain: "代価",
            parsed: "だいか",
        },
        {
            plain: "アランナガの思い出",
            parsed: "アランナガのおもいで",
        },
        {
            plain: "回想終章",
            parsed: "かいそうしゅうしょう",
        },
        {
            plain: "鳥の玉子寿司",
            parsed: "とりのたまごずし",
        },
        {
            plain: "甘エビの握り寿司",
            parsed: "あまエビのにぎりずし",
        },
        {
            plain: "うどん",
            parsed: "うどん",
        },
        {
            plain: "さんが焼き",
            parsed: "さんがやき",
        },
        {
            plain: "うなぎの蒲焼",
            parsed: "うなぎのかばやき",
        },
        {
            plain: "うな茶漬け",
            parsed: "うなちゃづけ",
        },
        {
            plain: "オムライス",
            parsed: "オムライス",
        },
        {
            plain: "緋櫻えびせんべい",
            parsed: "ひおうえびせんべい",
        },
        {
            plain: "ミントフルーツティー",
            parsed: "ミントフルーツティー",
        },
        {
            plain: "超贅沢盛り合わせピザ",
            parsed: "ちょうぜいたくもりあわせピザ",
        },
        {
            plain: "香辛料",
            parsed: "こうしんりょう",
        },
        {
            plain: "日月前事",
            parsed: "にちげつぜんじ",
        },
        {
            plain: "常世国龍蛇伝",
            parsed: "とこよのくにりゅうじゃでん",
        },
        {
            plain: "白夜国地理水文誌",
            parsed: "びゃくやこくちりすいもんし",
        },
        {
            plain: "ヴィシャップ研究所",
            parsed: "ヴィシャップけんきゅうじょ",
        },
        {
            plain: "千岩長槍",
            parsed: "せんがんながやり",
        },
        {
            plain: "水仙の夢",
            parsed: "すいせんのゆめ",
        },
        {
            plain: "スタンレー",
            parsed: "スタンレー",
        },
        {
            plain: "志村屋",
            parsed: "しむらや",
        },
        {
            plain: "風の悪霊",
            parsed: "かぜのあくりょう",
        },
        {
            plain: "花霊",
            parsed: "かれい",
        },
        {
            plain: "寒さ指数・中",
            parsed: "さむさしすうちゅう",
        },
        {
            plain: "メカジキ二番隊",
            parsed: "メカジキにばんたい",
        },
        {
            plain: "輝くダイヤ",
            parsed: "かがやくダイヤ",
        },
        {
            plain: "炎願のアゲート",
            parsed: "えんがんのアゲート",
        },
        {
            plain: "炎願のアゲート・塊",
            parsed: "えんがんのアゲートかたまり",
        },
        {
            plain: "炎願のアゲート・欠片",
            parsed: "えんがんのアゲートかけら",
        },
        {
            plain: "炎願のアゲート・砕屑",
            parsed: "えんがんのアゲートさいせつ",
        },
        {
            plain: "澄明なラピスラズリ",
            parsed: "ちょうめいなラピスラズリ",
        },
        {
            plain: "澄明なラピスラズリ・塊",
            parsed: "ちょうめいなラピスラズリかたまり",
        },
        {
            plain: "澄明なラピスラズリ・欠片",
            parsed: "ちょうめいなラピスラズリかけら",
        },
        {
            plain: "澄明なラピスラズリ・砕屑",
            parsed: "ちょうめいなラピスラズリさいせつ",
        },
        {
            plain: "最勝のアメシスト",
            parsed: "さいしょうのアメシスト",
        },
        {
            plain: "最勝のアメシスト・塊",
            parsed: "さいしょうのアメシストかたまり",
        },
        {
            plain: "最勝のアメシスト・欠片",
            parsed: "さいしょうのアメシストかけら",
        },
        {
            plain: "最勝のアメシスト・砕屑",
            parsed: "さいしょうのアメシストさいせつ",
        },
        {
            plain: "自由のターコイズ",
            parsed: "じゆうのターコイズ",
        },
        {
            plain: "自由のターコイズ・塊",
            parsed: "じゆうのターコイズかたまり",
        },
        {
            plain: "自由のターコイズ・欠片",
            parsed: "じゆうのターコイズかけら",
        },
        {
            plain: "自由のターコイズ・砕屑",
            parsed: "じゆうのターコイズさいせつ",
        },
        {
            plain: "哀切なアイスクリスタル",
            parsed: "あいせつなアイスクリスタル",
        },
        {
            plain: "哀切なアイスクリスタル・塊",
            parsed: "あいせつなアイスクリスタルかたまり",
        },
        {
            plain: "哀切なアイスクリスタル・欠片",
            parsed: "あいせつなアイスクリスタルかけら",
        },
        {
            plain: "哀切なアイスクリスタル・砕屑",
            parsed: "あいせつなアイスクリスタルさいせつ",
        },
        {
            plain: "堅牢なトパーズ",
            parsed: "けんろうなトパーズ",
        },
        {
            plain: "堅牢なトパーズ・塊",
            parsed: "けんろうなトパーズかたまり",
        },
        {
            plain: "堅牢なトパーズ・欠片",
            parsed: "けんろうなトパーズかけら",
        },
        {
            plain: "堅牢なトパーズ・砕屑",
            parsed: "けんろうなトパーズさいせつ",
        },
        {
            plain: "成長のエメラルド",
            parsed: "せいちょうのエメラルド",
        },
        {
            plain: "成長のエメラルド・塊",
            parsed: "せいちょうのエメラルドかたまり",
        },
        {
            plain: "成長のエメラルド・欠片",
            parsed: "せいちょうのエメラルドかけら",
        },
        {
            plain: "成長のエメラルド・砕屑",
            parsed: "せいちょうのエメラルドさいせつ",
        },
        {
            plain: "剣塚封印を探索",
            parsed: "けんづかふういんをたんさく",
        },
        {
            plain: "海上拾玉",
            parsed: "かいじょうしゅうぎょく",
        },
        {
            plain: "蛇心を訪ねる",
            parsed: "じゃしんをたずねる",
        },
        {
            plain: "セイライの遺宝",
            parsed: "セイライのいほう",
        },
        {
            plain: "セイライの旧事",
            parsed: "セイライのきゅうじ",
        },
        {
            plain: "勇気を心につけて",
            parsed: "ゆうきをこころにつけて",
        },
        {
            plain: "まるい群れ騒動!",
            parsed: "まるいむれそうどう",
        },
        {
            plain: "弓術の手本",
            parsed: "きゅうじゅつのてほん",
        },
        {
            plain: "ドドリアン",
            parsed: "ドドリアン",
        },
        {
            plain: "セシリアの花",
            parsed: "セシリアのはな",
        },
        {
            plain: "蒲公英の種",
            parsed: "たんぽぽのたね",
        },
        {
            plain: "慕風のマッシュルーム",
            parsed: "ぼふうのマッシュルーム",
        },
        {
            plain: "イグサ",
            parsed: "イグサ",
        },
        {
            plain: "ヴァルベリー",
            parsed: "ヴァルベリー",
        },
        {
            plain: "風車アスター",
            parsed: "ふうしゃアスター",
        },
        {
            plain: "ググプラム",
            parsed: "ググプラム",
        },
        {
            plain: "瑠璃百合",
            parsed: "るりゆり",
        },
        {
            plain: "清心",
            parsed: "せいしん",
        },
        {
            plain: "瑠璃袋",
            parsed: "るりぶくろ",
        },
        {
            plain: "絶雲の唐辛子",
            parsed: "ぜつうんのとうがらし",
        },
        {
            plain: "夜泊石",
            parsed: "よどまりいし",
        },
        {
            plain: "星螺",
            parsed: "せいら",
        },
        {
            plain: "ウミレイシ",
            parsed: "ウミレイシ",
        },
        {
            plain: "緋櫻毬",
            parsed: "ひおうきゅう",
        },
        {
            plain: "鳴草",
            parsed: "なぐさ",
        },
        {
            plain: "オニカブトムシ",
            parsed: "オニカブトムシ",
        },
        {
            plain: "晶化骨髄",
            parsed: "しょうかこつずい",
        },
        {
            plain: "天雲草の実",
            parsed: "あまくもくさのみ",
        },
        {
            plain: "珊瑚真珠",
            parsed: "さんごしんじゅ",
        },
        {
            plain: "カルパラタ蓮",
            parsed: "カルパラタはす",
        },
        {
            plain: "サウマラタ蓮",
            parsed: "サウマラタはす",
        },
        {
            plain: "ルッカデヴァータダケ",
            parsed: "ルッカデヴァータダケ",
        },
        {
            plain: "ジュラバド",
            parsed: "ジュラバド",
        },
        {
            plain: "クールタイム",
            parsed: "クールタイム",
        },
        {
            plain: "「自由」の教え",
            parsed: "じゆうのおしえ",
        },
        {
            plain: "「自由」の導き",
            parsed: "じゆうのみちびき",
        },
        {
            plain: "「自由」の哲学",
            parsed: "じゆうのてつがく",
        },
        {
            plain: "「抗争」の教え",
            parsed: "こうそうのおしえ",
        },
        {
            plain: "「抗争」の導き",
            parsed: "こうそうのみちびき",
        },
        {
            plain: "「抗争」の哲学",
            parsed: "こうそうのてつがく",
        },
        {
            plain: "「詩文」の教え",
            parsed: "しぶんのおしえ",
        },
        {
            plain: "「詩文」の導き",
            parsed: "しぶんのみちびき",
        },
        {
            plain: "「詩文」の哲学",
            parsed: "しぶんのてつがく",
        },
        {
            plain: "「繁栄」の教え",
            parsed: "はんえいのおしえ",
        },
        {
            plain: "「繁栄」の導き",
            parsed: "はんえいのみちびき",
        },
        {
            plain: "「繁栄」の哲学",
            parsed: "はんえいのてつがく",
        },
        {
            plain: "「勤労」の教え",
            parsed: "きんろうのおしえ",
        },
        {
            plain: "「勤労」の導き",
            parsed: "きんろうのみちびき",
        },
        {
            plain: "「勤労」の哲学",
            parsed: "きんろうのてつがく",
        },
        {
            plain: "「黄金」の教え",
            parsed: "おうごんのおしえ",
        },
        {
            plain: "「黄金」の導き",
            parsed: "おうごんのみちびき",
        },
        {
            plain: "「黄金」の哲学",
            parsed: "おうごんのてつがく",
        },
        {
            plain: "「浮世」の教え",
            parsed: "うきよのおしえ",
        },
        {
            plain: "「浮世」の導き",
            parsed: "うきよのみちびき",
        },
        {
            plain: "「浮世」の哲学",
            parsed: "うきよのてつがく",
        },
        {
            plain: "「風雅」の教え",
            parsed: "ふうがのおしえ",
        },
        {
            plain: "「風雅」の導き",
            parsed: "ふうがのみちびき",
        },
        {
            plain: "「風雅」の哲学",
            parsed: "ふうがのてつがく",
        },
        {
            plain: "「天光」の教え",
            parsed: "てんこうのおしえ",
        },
        {
            plain: "「天光」の導き",
            parsed: "てんこうのみちびき",
        },
        {
            plain: "「天光」の哲学",
            parsed: "てんこうのてつがく",
        },
        {
            plain: "「創意」の教え",
            parsed: "そういのおしえ",
        },
        {
            plain: "「創意」の導き",
            parsed: "そういのみちびき",
        },
        {
            plain: "「創意」の哲学",
            parsed: "そういのてつがく",
        },
        {
            plain: "「篤行」の教え",
            parsed: "とっこうのおしえ",
        },
        {
            plain: "「篤行」の導き",
            parsed: "とっこうのみちびき",
        },
        {
            plain: "「篤行」の哲学",
            parsed: "とっこうのてつがく",
        },
        {
            plain: "知恵の冠",
            parsed: "ちえのかんむり",
        },
        {
            plain: "ミカ・シュミット",
            parsed: "ミカシュミット",
        },
        {
            plain: "嵐姉",
            parsed: "あらしねえ",
        },
        {
            plain: "知恵の神",
            parsed: "ちえのかみ",
        },
        {
            plain: "魔女会",
            parsed: "まじょかい",
        },
        {
            plain: "花開く時",
            parsed: "はなひらくとき",
        },
        {
            plain: "砂の中の花",
            parsed: "すなのなかのはな",
        },
        {
            plain: "垂香材",
            parsed: "じょうこうざい",
        },
        {
            plain: "竹材",
            parsed: "たけざい",
        },
        {
            plain: "却砂材",
            parsed: "きゃくさざい",
        },
        {
            plain: "松材",
            parsed: "まつざい",
        },
        {
            plain: "樺材",
            parsed: "かばざい",
        },
        {
            plain: "アビスの使徒・落霜",
            parsed: "あびすのしとらくそう",
        },
        {
            plain: "サモサ",
            parsed: "サモサ",
        },
        {
            plain: "ウェネトトンネル",
            parsed: "ウェネトトンネル",
        },
        {
            plain: "穢れた逆さ神像",
            parsed: "けがれたさかさしんぞう",
        },
        {
            plain: "二相減光ユニット",
            parsed: "にそうげんこうユニット",
        },
        {
            plain: "二相常光ユニット",
            parsed: "にそうじょうこうユニット",
        },
        {
            plain: "ジンニーの枝",
            parsed: "ジンニーのえだ",
        },
        {
            plain: "香りが残っているうちに",
            parsed: "かおりがのこっているうちに",
        },
        {
            plain: "虫相撲",
            parsed: "むしずもう",
        },
        {
            plain: "ジンニー牢獄",
            parsed: "ジンニーろうごく",
        },
        {
            plain: "アル・ハヤー宮殿",
            parsed: "アルハヤーきゅうでん",
        },
        {
            plain: "アル・ムアザン宮殿",
            parsed: "アルムアザンきゅうでん",
        },
        {
            plain: "「キングデシェレトの水晶杯」",
            parsed: "キングデシェレトのすいしょうはい",
        },
        {
            plain: "落ちた葉は風となる",
            parsed: "おちたははかぜとなる",
        },
        {
            plain: "葦海の標",
            parsed: "いかいのしらべ",
        },
        {
            plain: "謎の肉",
            parsed: "なぞのにく",
        },
        {
            plain: "ジンニー",
            parsed: "ジンニー",
        },
        {
            plain: "翹英荘",
            parsed: "ぎょうえいそう",
        },
        {
            plain: "千尋の砂漠",
            parsed: "せんじんのさばく",
        },
        {
            plain: "タニット露営地",
            parsed: "タニットろえいち",
        },
        {
            plain: "アル・マジュジ峡谷",
            parsed: "アルマジュジきょうこく",
        },
        {
            plain: "亡者狭路",
            parsed: "もうじゃきょうろ",
        },
        {
            plain: "アル・インキダの行宮",
            parsed: "アルインキダのあんぐう",
        },
        {
            plain: "ダマーヴァンド山",
            parsed: "ダマーヴァンドさん",
        },
        {
            plain: "失脚の谷",
            parsed: "しっきゃくのたに",
        },
        {
            plain: "「三運河の地」",
            parsed: "さんうんがのち",
        },
        {
            plain: "「五大オアシス」の遺構",
            parsed: "ごだいオアシスのいこう",
        },
        {
            plain: "ジュラバド廃都・キングデシェレト神殿",
            parsed: "ジュラバドはいとキングデシェレトしんでん",
        },
        {
            plain: "タニット部族",
            parsed: "タニットぶぞく",
        },
        {
            plain: "「七聖召喚」をやってみよう!",
            parsed: "しちせいしょうかんをやってみよう",
        },
        {
            plain: "全能グルメチーム・責務の範囲内",
            parsed: "ぜんのうグルメチームせきむのはんいない",
        },
        {
            plain: "全能グルメチーム・収束",
            parsed: "ぜんのうグルメチームしゅうそく",
        },
        {
            plain: "ビルキースの哀歌",
            parsed: "ビルキースのあいか",
        },
        {
            plain: "医者の言うことは絶対",
            parsed: "いしゃのいうことはぜったい",
        },
        {
            plain: "異国の御用掛",
            parsed: "いこくのごようがかり",
        },
        {
            plain: "良薬は得がたい",
            parsed: "りょうやくはえがたい",
        },
        {
            plain: "海草",
            parsed: "かいそう",
        },
        {
            plain: "ハッラの実",
            parsed: "ハッラのみ",
        },
        {
            plain: "三十人団",
            parsed: "さんじゅうにんだん",
        },
        {
            plain: "ドッカン花火",
            parsed: "ドッカンはなび",
        },
        {
            plain: "エルマイト旅団・サンドロアマスター",
            parsed: "エルマイトりょだんサンドロアマスター",
        },
        {
            plain: "エルマイト旅団・フローラルリングダンサー",
            parsed: "エルマイトりょだんフローラルリングダンサー",
        },
        {
            plain: "ウェネト",
            parsed: "ウェネト",
        },
        {
            plain: "トビヘビ",
            parsed: "トビヘビ",
        },
        {
            plain: "映影が残す思い出",
            parsed: "えいえいがのこすおもいで",
        },
        {
            plain: "珍しき鳥との短い出会い",
            parsed: "めずらしきとりとのみじかいであい",
        },
        {
            plain: "夢の気配がまだある内に",
            parsed: "ゆめのけはいがまだあるうちに",
        },
        {
            plain: "獣も足を踏み外す",
            parsed: "けものもあしをふみはずす",
        },
        {
            plain: "砂の上の花",
            parsed: "すなのうえのはな",
        },
        {
            plain: "触れられない恋人",
            parsed: "ふれられないこいびと",
        },
        {
            plain: "よくなくなる鍵",
            parsed: "よくなくなるかぎ",
        },
        {
            plain: "蒼古なる自由への誓い",
            parsed: "そうこなるじゆうへのちかい",
        },
        {
            plain: "波乱月白経津",
            parsed: "はらんげっぱくふつ",
        },
        {
            plain: "松韻の響く頃",
            parsed: "しょういんのひびくころ",
        },
        {
            plain: "赤角石塵滅砕",
            parsed: "せきかくせきじんめっさい",
        },
        {
            plain: "護摩の杖",
            parsed: "ごまのつえ",
        },
        {
            plain: "天空の巻",
            parsed: "てんくうのまき",
        },
        {
            plain: "ヨォーヨ",
            parsed: "ヨォーヨ",
        },
        {
            plain: "鎮守の森",
            parsed: "ちんじゅのもり",
        },
        {
            plain: "ミントゼリー",
            parsed: "ミントゼリー",
        },
        {
            plain: "砂上の楼閣の史話",
            parsed: "さじょうのろうかくのしわ",
        },
        {
            plain: "グッドウィン",
            parsed: "グッドウィン",
        },
        {
            plain: "ローズシュリカンド",
            parsed: "ローズシュリカンド",
        },
        {
            plain: "パティサラプリン",
            parsed: "パティサラプリン",
        },
        {
            plain: "ナツメヤシキャンディ",
            parsed: "ナツメヤシキャンディ",
        },
        {
            plain: "バクラヴァ",
            parsed: "バクラヴァ",
        },
        {
            plain: "タンドリーチキン",
            parsed: "タンドリーチキン",
        },
        {
            plain: "東花坊時雨",
            parsed: "とうかぼうしぐれ",
        },
        {
            plain: "トゥライトゥーラの記憶",
            parsed: "トゥライトゥーラのきおく",
        },
        {
            plain: "全能グルメチーム",
            parsed: "ぜんのうグルメチーム",
        },
        {
            plain: "深林の記憶",
            parsed: "しんりんのきおく",
        },
        {
            plain: "ルピカ",
            parsed: "ルピカ",
        },
        {
            plain: "カーヴェ",
            parsed: "カーヴェ",
        },
        {
            plain: "ヴィクラム",
            parsed: "ヴィクラム",
        },
        {
            plain: "リファエット",
            parsed: "リファエット",
        },
        {
            plain: "アップルサイダー",
            parsed: "アップルサイダー",
        },
        {
            plain: "スパークリングベリージュース",
            parsed: "スパークリングベリージュース",
        },
        {
            plain: "パニプリ",
            parsed: "パニプリ",
        },
        {
            plain: "カレーシュリムプ",
            parsed: "カレーシュリムプ",
        },
        {
            plain: "バケーションサイダー",
            parsed: "バケーションサイダー",
        },
        {
            plain: "ポテトボート",
            parsed: "ポテトボート",
        },
        {
            plain: "中央大陸弓の原型",
            parsed: "ちゅうおうたいりくゆみのげんけい",
        },
        {
            plain: "中央大陸両手剣の原型",
            parsed: "ちゅうおうたいりくりょうてけんのげんけい",
        },
        {
            plain: "中央大陸長柄武器の原型",
            parsed: "ちゅうおうたいりくながえぶきのげんけい",
        },
        {
            plain: "中央大陸法器の原型",
            parsed: "ちゅうおうたいりくほうきのげんけい",
        },
        {
            plain: "アシュヴァッタ神殿",
            parsed: "アシュヴァッタしんでん",
        },
        {
            plain: "払うべきものはすべて払う",
            parsed: "はらうべきものはすべてはらう",
        },
        {
            plain: "花神",
            parsed: "かしん",
        },
        {
            plain: "レイラ",
            parsed: "レイラ",
        },
        {
            plain: "ファルザン",
            parsed: "ファルザン",
        },
        {
            plain: "無相の草",
            parsed: "むそうのくさ",
        },
        {
            plain: "アアルコシャリ",
            parsed: "アアルコシャリ",
        },
        {
            plain: "マサラチーズボール",
            parsed: "マサラチーズボール",
        },
        {
            plain: "夕暮れベリーティー",
            parsed: "ゆうぐれベリーティー",
        },
        {
            plain: "ミルキーキノコクリスプタワー",
            parsed: "ミルキーキノコクリスプタワー",
        },
        {
            plain: "デーツナン",
            parsed: "デーツナン",
        },
        {
            plain: "タフチーン",
            parsed: "タフチーン",
        },
        {
            plain: "焼きキノコミートピザ",
            parsed: "やきキノコミートピザ",
        },
        {
            plain: "草神の瞳の共鳴石",
            parsed: "そうしんのひとみのきょうめいせき",
        },
        {
            plain: "草のトレジャーコンパス",
            parsed: "くさのトレジャーコンパス",
        },
        {
            plain: "秘儀聖殿",
            parsed: "ひぎせいでん",
        },
        {
            plain: "秘匿ユニット",
            parsed: "ひとくユニット",
        },
        {
            plain: "黄金の眠り",
            parsed: "おうごんのねむり",
        },
        {
            plain: "古き物語と新しき友人",
            parsed: "ふるきものがたりとあたらしきゆうじん",
        },
        {
            plain: "キノコ叩き・ハンマーはなし!",
            parsed: "キノコたたきハンマーはなし",
        },
        {
            plain: "キノコの高さ測定",
            parsed: "キノコのたかさそくてい",
        },
        {
            plain: "『召喚王』",
            parsed: "しょうかんおう",
        },
        {
            plain: "大樹・根を張る",
            parsed: "たいじゅねをはる",
        },
        {
            plain: "ガルシアの賛歌・代替品",
            parsed: "ガルシアのさんかだいたいひん",
        },
        {
            plain: "ジュニャーナガルバの日",
            parsed: "ジュニャーナガルバのひ",
        },
        {
            plain: "雷神の瞳の共鳴石",
            parsed: "らいじんのひとみのきょうめいせき",
        },
        {
            plain: "大赤砂海",
            parsed: "だいせきさかい",
        },
        {
            plain: "金メッキの夢",
            parsed: "きんメッキのゆめ",
        },
        {
            plain: "ファルカ",
            parsed: "ファルカ",
        },
        {
            plain: "ソラヤー",
            parsed: "ソラヤー",
        },
        {
            plain: "カパッチリ",
            parsed: "カパッチリ",
        },
        {
            plain: "アランラキャ",
            parsed: "アランラキャ",
        },
        {
            plain: "アランロヒタ",
            parsed: "アランロヒタ",
        },
        {
            plain: "アランダサ",
            parsed: "アランダサ",
        },
        {
            plain: "アランナガ",
            parsed: "アランナガ",
        },
        {
            plain: "アランナキン",
            parsed: "アランナキン",
        },
        {
            plain: "アランガル",
            parsed: "アランガル",
        },
        {
            plain: "遺跡ドレイク",
            parsed: "いせきドレイク",
        },
        {
            plain: "プライマル構造体",
            parsed: "プライマルこうぞうたい",
        },
        {
            plain: "プライマル構造体・探査機",
            parsed: "プライマルこうぞうたいたんさき",
        },
        {
            plain: "プライマル構造体・再構築",
            parsed: "プライマルこうぞうたいさいこうちく",
        },
        {
            plain: "プライマル構造体・重力場発生器",
            parsed: "プライマルこうぞうたいじゅうりょくばはっせいき",
        },
        {
            plain: "半永久統制マトリックス",
            parsed: "はんえいきゅうとうせいマトリックス",
        },
        {
            plain: "迅電樹",
            parsed: "じんでんじゅ",
        },
        {
            plain: "エルマイト旅団・デイサンダー",
            parsed: "エルマイトりょだんデイサンダー",
        },
        {
            plain: "エルマイト旅団・ストーンエンチャンター",
            parsed: "エルマイトりょだんストーンエンチャンター",
        },
        {
            plain: "エルマイト旅団・ゲイルハンター",
            parsed: "エルマイトりょだんゲイルハンター",
        },
        {
            plain: "マラーナの化身",
            parsed: "マラーナのけしん",
        },
        {
            plain: "万民堂",
            parsed: "ばんみんどう",
        },
        {
            plain: "シャワルマサンド",
            parsed: "シャワルマサンド",
        },
        {
            plain: "紫苑雲霓",
            parsed: "しおんうんげい",
        },
        {
            plain: "デーツ",
            parsed: "デーツ",
        },
        {
            plain: "草の印",
            parsed: "くさのしるし",
        },
        {
            plain: "追憶のレンズ",
            parsed: "ついおくのレンズ",
        },
        {
            plain: "ヴィパリャス",
            parsed: "ヴィパリャス",
        },
        {
            plain: "封の開かれた羊皮紙",
            parsed: "ふうのひらかれたようひし",
        },
        {
            plain: "ラクラク駄獣",
            parsed: "ラクラクだじゅう",
        },
        {
            plain: "サソリ",
            parsed: "サソリ",
        },
        {
            plain: "ゲーターキング",
            parsed: "ゲーターキング",
        },
        {
            plain: "失われた苗畑",
            parsed: "うしなわれたなえはた",
        },
        {
            plain: "下風蝕地",
            parsed: "しもふうしょくち",
        },
        {
            plain: "ダールアルシファ",
            parsed: "ダールアルシファ",
        },
        {
            plain: "上風蝕地",
            parsed: "かみふうしょくち",
        },
        {
            plain: "ダーリの谷",
            parsed: "ダーリのたに",
        },
        {
            plain: "ソベクオアシス",
            parsed: "ソベクオアシス",
        },
        {
            plain: "列柱砂原",
            parsed: "れっちゅうすなはら",
        },
        {
            plain: "飽飲の丘",
            parsed: "ほういんのおか",
        },
        {
            plain: "避譲の丘",
            parsed: "ひじょうのおか",
        },
        {
            plain: "キングデシェレトの霊廟",
            parsed: "キングデシェレトのれいびょう",
        },
        {
            plain: "クサナリの枝",
            parsed: "クサナリのえだ",
        },
        {
            plain: "特定の道",
            parsed: "とくていのみち",
        },
        {
            plain: "原始松脂",
            parsed: "げんししょうし",
        },
        {
            plain: "ジャミカヨマール",
            parsed: "ジャミカヨマール",
        },
        {
            plain: "マウティイェマ",
            parsed: "マウティイェマ",
        },
        {
            plain: "秘儀台座",
            parsed: "ひぎだいざ",
        },
        {
            plain: "プライマル火種",
            parsed: "プライマルひだね",
        },
        {
            plain: "プライマル炬火",
            parsed: "プライマルきょか",
        },
        {
            plain: "プライマルビーム",
            parsed: "プライマルビーム",
        },
        {
            plain: "プライマル砂時計",
            parsed: "プライマルすなどけい",
        },
        {
            plain: "プライマル光錐",
            parsed: "プライマルこうすい",
        },
        {
            plain: "プライマルオベリスク",
            parsed: "プライマルオベリスク",
        },
        {
            plain: "ヒエログリフタブレット",
            parsed: "ヒエログリフタブレット",
        },
        {
            plain: "ふわふわした花とフローラ",
            parsed: "ふわふわしたはなとフローラ",
        },
        {
            plain: "風神とモンド",
            parsed: "ふうじんとモンド",
        },
        {
            plain: "吹いては止まる風",
            parsed: "ふいてはとまるかぜ",
        },
        {
            plain: "騎士団ガイドの応答",
            parsed: "きしだんがいどのおうとう",
        },
        {
            plain: "等量交換",
            parsed: "とうりょうこうかん",
        },
        {
            plain: "暴風の後の問題",
            parsed: "ぼうふうのあとのもんだい",
        },
        {
            plain: "盗賊を捕まえろ",
            parsed: "とうぞくをつかまえろ",
        },
        {
            plain: "風の後のお宝",
            parsed: "かぜのあとのおたから",
        },
        {
            plain: "ワイナリーの大掃除",
            parsed: "ワイナリーのおおそうじ",
        },
        {
            plain: "後片付け",
            parsed: "あとかたづけ",
        },
        {
            plain: "時と風",
            parsed: "ときとかぜ",
        },
        {
            plain: "魚群大発生",
            parsed: "ぎょぐんだいはっせい",
        },
        {
            plain: "山に隠されし物",
            parsed: "やまにかくされしもの",
        },
        {
            plain: "腐植の牙",
            parsed: "ふしょくのきば",
        },
        {
            plain: "雪山大踏査",
            parsed: "ゆきやまだいとうさ",
        },
        {
            plain: "雪山再踏査",
            parsed: "ゆきやまさいとうさ",
        },
        {
            plain: "雪に覆われた国",
            parsed: "ゆきにおおわれたくに",
        },
        {
            plain: "雪山迷走",
            parsed: "ゆきやまめいそう",
        },
        {
            plain: "璃月港の穏やかな一日",
            parsed: "りーゆぇこうのおだやかないちにち",
        },
        {
            plain: "孤雲の艦船",
            parsed: "こうんのかんせん",
        },
        {
            plain: "迫る仕事",
            parsed: "せまるしごと",
        },
        {
            plain: "仙人の頼み",
            parsed: "せんにんのたのみ",
        },
        {
            plain: "冒険者協会の数々な事情",
            parsed: "ぼうけんしゃきょうかいのかずかずなじじょう",
        },
        {
            plain: "必要な手続き",
            parsed: "ひつようなてつづき",
        },
        {
            plain: "万金に値する本",
            parsed: "まんきんにあたいするほん",
        },
        {
            plain: "チャンチャンと彼女の仲間",
            parsed: "チャンチャンとかのじょのなかま",
        },
        {
            plain: "南天門の謎",
            parsed: "なんてんもんのなぞ",
        },
        {
            plain: "この街にこの詩を",
            parsed: "このまちにこのうたを",
        },
        {
            plain: "止まることのない研究",
            parsed: "とまることのないけんきゅう",
        },
        {
            plain: "一人の見張り",
            parsed: "ひとりのみはり",
        },
        {
            plain: "帰離のお宝",
            parsed: "きりのおたから",
        },
        {
            plain: "頼れない孤木",
            parsed: "たよれないこぼく",
        },
        {
            plain: "懐かしい味",
            parsed: "なつかしいあじ",
        },
        {
            plain: "一緒に遊ぼう",
            parsed: "いっしょにあそぼう",
        },
        {
            plain: "宝物は大事にすべし",
            parsed: "たからものはだいじにすべし",
        },
        {
            plain: "一時的な策",
            parsed: "いちじてきなさく",
        },
        {
            plain: "大商売",
            parsed: "だいしょうばい",
        },
        {
            plain: "夜叉の願い",
            parsed: "やしゃのねがい",
        },
        {
            plain: "靖世の九柱",
            parsed: "せいせいのきゅうちゅう",
        },
        {
            plain: "霊矩のお宝",
            parsed: "れいくのおたから",
        },
        {
            plain: "仙跡を辿って天穹に戻り",
            parsed: "せんせきをたどっててんきゅうにもどり",
        },
        {
            plain: "天穹の宝の跡",
            parsed: "てんきゅうのたからのあと",
        },
        {
            plain: "ゲームしよう",
            parsed: "ゲームしよう",
        },
        {
            plain: "写真を撮ろう",
            parsed: "しゃしんをとろう",
        },
        {
            plain: "完璧な写真",
            parsed: "かんぺきなしゃしん",
        },
        {
            plain: "死後の事・銅雀の跡",
            parsed: "しごのことどうじゃくのあと",
        },
        {
            plain: "死後の事・平安の諸事",
            parsed: "しごのことへいあんのしょじ",
        },
        {
            plain: "死後の事・山に還りて",
            parsed: "しごのことやまにかえりて",
        },
        {
            plain: "舞台上と舞台下",
            parsed: "ぶたいうえとぶたいした",
        },
        {
            plain: "ガルシアの賛歌",
            parsed: "ガルシアのさんか",
        },
        {
            plain: "巨淵の恩恵",
            parsed: "きょえんのおんけい",
        },
        {
            plain: "孤島診療譚",
            parsed: "ことうしんりょうたん",
        },
        {
            plain: "三千里の期待",
            parsed: "さんぜんりのきたい",
        },
        {
            plain: "武者の宿命",
            parsed: "むしゃのしゅくめい",
        },
        {
            plain: "千里の手紙",
            parsed: "ちさとのてがみ",
        },
        {
            plain: "離島の道",
            parsed: "りとうのみち",
        },
        {
            plain: "鳴神追跡",
            parsed: "なるかみついせき",
        },
        {
            plain: "栽培の方法",
            parsed: "さいばいのほうほう",
        },
        {
            plain: "医櫻",
            parsed: "いおう",
        },
        {
            plain: "農民の宝",
            parsed: "のうみんのたから",
        },
        {
            plain: "全能グルメチーム・グルメ巡りの旅",
            parsed: "ぜんのうグルメチームグルメめぐりのたび",
        },
        {
            plain: "全能グルメチーム・まんぷくの重要性",
            parsed: "ぜんのうグルメチームまんぷくのじゅうようせい",
        },
        {
            plain: "刀の夢",
            parsed: "かたなのゆめ",
        },
        {
            plain: "屈辱を晴らす一戦",
            parsed: "くつじょくをはらすいっせん",
        },
        {
            plain: "広海の守護",
            parsed: "ひろみのしゅご",
        },
        {
            plain: "『七人目の武士』",
            parsed: "しちにんめのぶし",
        },
        {
            plain: "異郷にて",
            parsed: "いきょうにて",
        },
        {
            plain: "諸国旅行記",
            parsed: "しょこくりょこうき",
        },
        {
            plain: "海の向こう側は故郷だ",
            parsed: "うみのむこうがわはこきょうだ",
        },
        {
            plain: "「八重堂」のお誘い",
            parsed: "やえどうのおさそい",
        },
        {
            plain: "物語の構想法",
            parsed: "ものがたりのこうそうほう",
        },
        {
            plain: "孤高のグルメ",
            parsed: "ここうのグルメ",
        },
        {
            plain: "特別なおみくじ",
            parsed: "とくべつなおみくじ",
        },
        {
            plain: "海淵仙草霊験記",
            parsed: "かいえんせんそうれいげんき",
        },
        {
            plain: "孤独な海獣",
            parsed: "こどくなかいじゅう",
        },
        {
            plain: "戸口の掃除",
            parsed: "とぐちのそうじ",
        },
        {
            plain: "ウロボロスの心",
            parsed: "ウロボロスのこころ",
        },
        {
            plain: "隙間の夢",
            parsed: "すきまのゆめ",
        },
        {
            plain: "エレボスの秘密",
            parsed: "エレボスのひみつ",
        },
        {
            plain: "岐の試練",
            parsed: "くなどのしれん",
        },
        {
            plain: "ハイペリオン哀歌",
            parsed: "ハイペリオンあいか",
        },
        {
            plain: "寺の前を訪ねる",
            parsed: "てらのまえをたずねる",
        },
        {
            plain: "狭間を訪ねる",
            parsed: "はざまをたずねる",
        },
        {
            plain: "セイライ逐雷記",
            parsed: "セイライちくらいき",
        },
        {
            plain: "寝子は猫である",
            parsed: "ねこはねこである",
        },
        {
            plain: "霧海紀行",
            parsed: "むかいきこう",
        },
        {
            plain: "注文の多い作家",
            parsed: "ちゅうもんのおおいさっか",
        },
        {
            plain: "マウシロの音を聴く",
            parsed: "マウシロのおとをきく",
        },
        {
            plain: "忘れん坊大王の大冒険",
            parsed: "わすれんぼうだいおうのだいぼうけん",
        },
        {
            plain: "ロートパゴス族",
            parsed: "ロートパゴスぞく",
        },
        {
            plain: "パエトーンたちはみな踊る",
            parsed: "パエトーンたちはみなおどる",
        },
        {
            plain: "パラドの苦境",
            parsed: "パラドのくきょう",
        },
        {
            plain: "冒険者ジャックの苦境",
            parsed: "ぼうけんしゃジャックのくきょう",
        },
        {
            plain: "リンの悩み",
            parsed: "リンのなやみ",
        },
        {
            plain: "リリアンの悩み",
            parsed: "リリアンのなやみ",
        },
        {
            plain: "リヴィングストン博士の運搬依頼",
            parsed: "リヴィングストンはかせのうんぱんいらい",
        },
        {
            plain: "生存の道",
            parsed: "せいぞんのみち",
        },
        {
            plain: "高いところ危険",
            parsed: "たかいところきけん",
        },
        {
            plain: "ヒルチャールの一歩",
            parsed: "ヒルチャールのいっぽ",
        },
        {
            plain: "まるい爆発物",
            parsed: "まるいばくはつぶつ",
        },
        {
            plain: "冷たきトラブル",
            parsed: "つめたきトラブル",
        },
        {
            plain: "危険な輸送状況",
            parsed: "きけんなゆそうじょうきょう",
        },
        {
            plain: "駆け抜けろ",
            parsed: "かけぬけろ",
        },
        {
            plain: "習うより慣れよ",
            parsed: "ならうよりなれよ",
        },
        {
            plain: "浪に覆われ",
            parsed: "なみにおおわれ",
        },
        {
            plain: "緊急受命",
            parsed: "きんきゅうじゅめい",
        },
        {
            plain: "拡張する邪悪",
            parsed: "かくちょうするじゃあく",
        },
        {
            plain: "彷徨いし邪悪",
            parsed: "さまよいしじゃあく",
        },
        {
            plain: "盗賊討伐",
            parsed: "とうぞくとうばつ",
        },
        {
            plain: "全速前進",
            parsed: "ぜんそくぜんしん",
        },
        {
            plain: "石を砕く",
            parsed: "いしをくだく",
        },
        {
            plain: "轟く大危機",
            parsed: "とどろくだいきき",
        },
        {
            plain: "窮鼠を追い詰める",
            parsed: "きゅうそをおいつめる",
        },
        {
            plain: "病み上がり",
            parsed: "やみあがり",
        },
        {
            plain: "緊急整備",
            parsed: "きんきゅうせいび",
        },
        {
            plain: "通行止め?",
            parsed: "つうこうどめ",
        },
        {
            plain: "荻花洲の旅館",
            parsed: "てきかしゅうのりょかん",
        },
        {
            plain: "遠くから来た客",
            parsed: "とおくからきたきゃく",
        },
        {
            plain: "ミッション「お宝略奪」",
            parsed: "ミッションおたからりゃくだつ",
        },
        {
            plain: "落雷の方法",
            parsed: "らくらいのほうほう",
        },
        {
            plain: "白日に来たる君子",
            parsed: "はくじつにきたるくんし",
        },
        {
            plain: "猛犬の管理規範",
            parsed: "もうけんのかんりきはん",
        },
        {
            plain: "雷霧対策",
            parsed: "らいむたいさく",
        },
        {
            plain: "電圧の負荷",
            parsed: "でんあつのふか",
        },
        {
            plain: "充電戦闘計画",
            parsed: "じゅうでんせんとうけいかく",
        },
        {
            plain: "雷霆起爆計画",
            parsed: "らいていきばくけいかく",
        },
        {
            plain: "危険な水遊び",
            parsed: "きけんなみずあそび",
        },
        {
            plain: "全能グルメチーム・グルメクイズ",
            parsed: "ぜんのうグルメチームグルメクイズ",
        },
        {
            plain: "全能グルメチーム・料理対決",
            parsed: "ぜんのうグルメチームりょうりたいけつ",
        },
        {
            plain: "全能グルメチーム・料理の極意",
            parsed: "ぜんのうグルメチームりょうりのごくい",
        },
        {
            plain: "花火試し打ち計画",
            parsed: "はなびためしうちけいかく",
        },
        {
            plain: "万端珊瑚事件簿・捜索",
            parsed: "ばんたんさんごじけんぼそうさく",
        },
        {
            plain: "万端珊瑚事件簿・適した身分",
            parsed: "ばんたんさんごじけんぼてきしたみぶん",
        },
        {
            plain: "万端珊瑚事件簿・迷惑行動",
            parsed: "ばんたんさんごじけんぼめいわくこうどう",
        },
        {
            plain: "猫の跡",
            parsed: "ねこのあと",
        },
        {
            plain: "神社の大掃除",
            parsed: "じんじゃのおおそうじ",
        },
        {
            plain: "猫を彫る方法",
            parsed: "ねこをほるほうほう",
        },
        {
            plain: "猫の装飾品",
            parsed: "ねこのそうしょくひん",
        },
        {
            plain: "魚の味",
            parsed: "さかなのあじ",
        },
        {
            plain: "稲妻の販売員",
            parsed: "いなずまのはんばいいん",
        },
        {
            plain: "アフターサービス",
            parsed: "アフターサービス",
        },
        {
            plain: "故郷の味",
            parsed: "こきょうのあじ",
        },
        {
            plain: "稲妻ファッション入門",
            parsed: "いなずまファッションにゅうもん",
        },
        {
            plain: "招かれざる客",
            parsed: "まねかれざるきゃく",
        },
        {
            plain: "冒険者テスト・作戦の立て方",
            parsed: "ぼうけんしゃテストさくせんのたてかた",
        },
        {
            plain: "冒険者テスト・冒険のコツ",
            parsed: "ぼうけんしゃテストぼうけんのコツ",
        },
        {
            plain: "冒険者テスト・飛び立つ方法",
            parsed: "ぼうけんしゃテストとびたつほうほう",
        },
        {
            plain: "ああ! 海賊は大人になりたい!",
            parsed: "ああかいぞくはおとなになりたい",
        },
        {
            plain: "水と共に流れてきた悩み",
            parsed: "みずとともにながれてきたなやみ",
        },
        {
            plain: "小さな遠出・常備薬",
            parsed: "ちいさなとおでじょうびやく",
        },
        {
            plain: "小さな遠出・非常食ではない",
            parsed: "ちいさなとおでひじょうしょくではない",
        },
        {
            plain: "冬への回帰",
            parsed: "ふゆへのかいき",
        },
        {
            plain: "地脈",
            parsed: "ちみゃく",
        },
        {
            plain: "ヴァインショット",
            parsed: "ヴァインショット",
        },
        {
            plain: "零落弾",
            parsed: "れいらくだん",
        },
        {
            plain: "腐植の剣",
            parsed: "ふしょくのけん",
        },
        {
            plain: "サイフォスの月明かり",
            parsed: "サイフォスのつきあかり",
        },
        {
            plain: "曚雲の月",
            parsed: "もううんのつき",
        },
        {
            plain: "彷徨える星",
            parsed: "さまよえるほし",
        },
        {
            plain: "海灯祭を祝して!",
            parsed: "かいとうさいをしゅくして",
        },
        {
            plain: "ガンダルヴァー村",
            parsed: "ガンダルヴァーむら",
        },
        {
            plain: "ラナ",
            parsed: "ラナ",
        },
        {
            plain: "アランラナ",
            parsed: "アランラナ",
        },
        {
            plain: "アランマ",
            parsed: "アランマ",
        },
        {
            plain: "アランラジャ",
            parsed: "アランラジャ",
        },
        {
            plain: "アランナクラ",
            parsed: "アランナクラ",
        },
        {
            plain: "アランコンティ",
            parsed: "アランコンティ",
        },
        {
            plain: "アランバリカ",
            parsed: "アランバリカ",
        },
        {
            plain: "アランパンドゥ",
            parsed: "アランパンドゥ",
        },
        {
            plain: "アランカラ",
            parsed: "アランカラ",
        },
        {
            plain: "アランムフクンダ",
            parsed: "アランムフクンダ",
        },
        {
            plain: "アランダーシャ",
            parsed: "アランダーシャ",
        },
        {
            plain: "エルマイト旅団・アックス",
            parsed: "エルマイトりょだんアックス",
        },
        {
            plain: "エルマイト旅団・クロスボウ",
            parsed: "エルマイトりょだんクロスボウ",
        },
        {
            plain: "エルマイト旅団・ベクドコルバン",
            parsed: "エルマイトりょだんベクドコルバン",
        },
        {
            plain: "山盛りキノコ",
            parsed: "やまもりキノコ",
        },
        {
            plain: "獣肉のビリヤニ",
            parsed: "けものにくのビリヤニ",
        },
        {
            plain: "中央大陸片手剣の原型",
            parsed: "ちゅうおうたいりくかたてけんのげんけい",
        },
        {
            plain: "失われたエネルギーブロック",
            parsed: "うしなわれたエネルギーブロック",
        },
        {
            plain: "草晶蝶",
            parsed: "くさしょうちょう",
        },
        {
            plain: "ラザンガーデン",
            parsed: "ラザンガーデン",
        },
        {
            plain: "夢の林",
            parsed: "ゆめのはやし",
        },
        {
            plain: "雨の果て",
            parsed: "あめのはて",
        },
        {
            plain: "ヴァサラの樹",
            parsed: "ヴァサラのき",
        },
        {
            plain: "ヴァルナ神器",
            parsed: "ヴァルナしんき",
        },
        {
            plain: "ヴァルナ秘宝",
            parsed: "ヴァルナひほう",
        },
        {
            plain: "世界任務",
            parsed: "せかいにんむ",
        },
        {
            plain: "伝説任務",
            parsed: "でんせつにんむ",
        },
        {
            plain: "デイリー依頼",
            parsed: "デイリーいらい",
        },
        {
            plain: "依頼任務",
            parsed: "いらいにんむ",
        },
        {
            plain: "探索派遣",
            parsed: "たんさくはけん",
        },
        {
            plain: "評判任務",
            parsed: "ひょうばんにんむ",
        },
        {
            plain: "デートイベント",
            parsed: "デートイベント",
        },
        {
            plain: "ドリー・サングマハベイ",
            parsed: "ドリーサングマハベイ",
        },
        {
            plain: "エルマイト旅団・サンドウォーター",
            parsed: "エルマイトりょだんサンドウォーター",
        },
        {
            plain: "エルマイト旅団・サンフロスト",
            parsed: "エルマイトりょだんサンフロスト",
        },
        {
            plain: "ザイトゥン桃",
            parsed: "ザイトゥンとう",
        },
        {
            plain: "珍奇な宝箱",
            parsed: "ちんきなたからばこ",
        },
        {
            plain: "缶詰知識",
            parsed: "かんづめちしき",
        },
        {
            plain: "神の缶詰知識",
            parsed: "かみのかんづめちしき",
        },
        {
            plain: "イロック",
            parsed: "イロック",
        },
        {
            plain: "ツァレーヴィチ",
            parsed: "ツァレーヴィチ",
        },
        {
            plain: "ヘディーヴ・プルシナ",
            parsed: "ヘディーヴプルシナ",
        },
        {
            plain: "玄冬林檎",
            parsed: "げんどうりんご",
        },
        {
            plain: "百代",
            parsed: "ももよ",
        },
        {
            plain: "マハマトラ",
            parsed: "マハマトラ",
        },
        {
            plain: "コレアンバー",
            parsed: "コレアンバー",
        },
        {
            plain: "花神の舞",
            parsed: "かしんのまい",
        },
        {
            plain: "キャンディス",
            parsed: "キャンディス",
        },
        {
            plain: "賢者",
            parsed: "けんじゃ",
        },
        {
            plain: "六大賢者",
            parsed: "ろくだいけんじゃ",
        },
        {
            plain: "カジェ",
            parsed: "カジェ",
        },
        {
            plain: "アスファンド",
            parsed: "アスファンド",
        },
        {
            plain: "ロハウェイ",
            parsed: "ロハウェイ",
        },
        {
            plain: "アハンガル",
            parsed: "アハンガル",
        },
        {
            plain: "エルマイト旅団・ソードダンサー",
            parsed: "エルマイトりょだんソードダンサー",
        },
        {
            plain: "エルマイト旅団・ラインブレイカー",
            parsed: "エルマイトりょだんラインブレイカー",
        },
        {
            plain: "ズバイルシアター",
            parsed: "ズバイルシアター",
        },
        {
            plain: "プスパカフェ",
            parsed: "プスパカフェ",
        },
        {
            plain: "ビマリスタン",
            parsed: "ビマリスタン",
        },
        {
            plain: "ジャファータバーン",
            parsed: "ジャファータバーン",
        },
        {
            plain: "ウィカラ隊商宿",
            parsed: "ウィカラたいしょうやど",
        },
        {
            plain: "アジャンタ彫刻店",
            parsed: "アジャンタちょうこくてん",
        },
        {
            plain: "雨林サラダ",
            parsed: "うりんサラダ",
        },
        {
            plain: "ピタ",
            parsed: "ピタ",
        },
        {
            plain: "バターチキン",
            parsed: "バターチキン",
        },
        {
            plain: "スメールローズ",
            parsed: "スメールローズ",
        },
        {
            plain: "王樹の加護",
            parsed: "おうじゅのかご",
        },
        {
            plain: "実験型超燃ランプ",
            parsed: "じっけんがたちょうねんランプ",
        },
        {
            plain: "釣り糸安定装置",
            parsed: "つりいとあんていそうち",
        },
        {
            plain: "アランナラ",
            parsed: "アランナラ",
        },
        {
            plain: "リシュボラン虎",
            parsed: "リシュボランとら",
        },
        {
            plain: "スメールシティ",
            parsed: "スメールシティ",
        },
        {
            plain: "トレジャーストリート",
            parsed: "トレジャーストリート",
        },
        {
            plain: "グランドバザール",
            parsed: "グランドバザール",
        },
        {
            plain: "アビディアの森",
            parsed: "アビディアのもり",
        },
        {
            plain: "ガンダ丘",
            parsed: "ガンダおか",
        },
        {
            plain: "チンワト峡谷",
            parsed: "チンワトきょうこく",
        },
        {
            plain: "ヤザダハ池",
            parsed: "ヤザダハいけ",
        },
        {
            plain: "アルダラビ河谷",
            parsed: "アルダラビかこく",
        },
        {
            plain: "ヴィマラ村",
            parsed: "ヴィマラむら",
        },
        {
            plain: "デーヴァーンタカ山",
            parsed: "デーヴァーンタカやま",
        },
        {
            plain: "ローカパーラ密林",
            parsed: "ローカパーラみつりん",
        },
        {
            plain: "マウティーマ稠林",
            parsed: "マウティーマちゅうりん",
        },
        {
            plain: "アルカサルザライパレス",
            parsed: "アルカサルザライパレス",
        },
        {
            plain: "アシャヴァンレルム",
            parsed: "アシャヴァンレルム",
        },
        {
            plain: "パルディスディアイ",
            parsed: "パルディスディアイ",
        },
        {
            plain: "アパーム叢林",
            parsed: "アパームそうりん",
        },
        {
            plain: "ダーリ遺跡",
            parsed: "ダーリいせき",
        },
        {
            plain: "キャラバン宿駅",
            parsed: "キャラバンしゅくえき",
        },
        {
            plain: "ヴィシュッダ辺土",
            parsed: "ヴィシュッダへんど",
        },
        {
            plain: "アアル村",
            parsed: "アアルむら",
        },
        {
            plain: "トライステート生物",
            parsed: "トライステートせいぶつ",
        },
        {
            plain: "ぴょんぴょんキノコ",
            parsed: "ぴょんぴょんキノコ",
        },
        {
            plain: "トライマウントシード",
            parsed: "トライマウントシード",
        },
        {
            plain: "クローバーマーク",
            parsed: "クローバーマーク",
        },
        {
            plain: "リーフコア",
            parsed: "リーフコア",
        },
        {
            plain: "エネルギー抽出装置",
            parsed: "エネルギーちゅうしゅつそうち",
        },
        {
            plain: "パラハァム",
            parsed: "パラハァム",
        },
        {
            plain: "サティアワダライフ",
            parsed: "サティアワダライフ",
        },
        {
            plain: "パリプーナライフ",
            parsed: "パリプーナライフ",
        },
        {
            plain: "死域の枝",
            parsed: "しいきのえだ",
        },
        {
            plain: "死域の腫瘍",
            parsed: "しいきのしゅよう",
        },
        {
            plain: "種のレンズ",
            parsed: "たねのレンズ",
        },
        {
            plain: "零落",
            parsed: "れいらく",
        },
        {
            plain: "生命の灯",
            parsed: "せいめいのあかり",
        },
        {
            plain: "原木刀",
            parsed: "げんぼくとう",
        },
        {
            plain: "森林のレガリア",
            parsed: "しんりんのレガリア",
        },
        {
            plain: "ムーンピアサー",
            parsed: "ムーンピアサー",
        },
        {
            plain: "竭沢",
            parsed: "けったく",
        },
        {
            plain: "王の近侍",
            parsed: "おうのきんじ",
        },
        {
            plain: "狩人の道",
            parsed: "かりゅうどのみち",
        },
        {
            plain: "満悦の実",
            parsed: "まんえつのみ",
        },
        {
            plain: "エンジェルズシェア",
            parsed: "エンジェルズシェア",
        },
        {
            plain: "キャッツテール",
            parsed: "キャッツテール",
        },
        {
            plain: "玉京台",
            parsed: "ぎょくけいだい",
        },
        {
            plain: "月海亭",
            parsed: "げつかいてい",
        },
        {
            plain: "往生堂",
            parsed: "おうじょうどう",
        },
        {
            plain: "不卜廬",
            parsed: "ふぼくろ",
        },
        {
            plain: "万文集舎",
            parsed: "まんぶんしゅうしゃ",
        },
        {
            plain: "岩上茶室",
            parsed: "がんじょうちゃしつ",
        },
        {
            plain: "琉璃亭",
            parsed: "るりてい",
        },
        {
            plain: "新月軒",
            parsed: "しんげつけん",
        },
        {
            plain: "三杯酔",
            parsed: "さんばいよい",
        },
        {
            plain: "寒鋒鉄器",
            parsed: "かんほうてっき",
        },
        {
            plain: "長野原花火屋",
            parsed: "ながのはらはなびや",
        },
        {
            plain: "木漏茶屋",
            parsed: "こもれちゃや",
        },
        {
            plain: "八重堂",
            parsed: "やえどう",
        },
        {
            plain: "万端珊瑚探偵所",
            parsed: "ばんたんさんごたんていしょ",
        },
        {
            plain: "天目鍛冶屋",
            parsed: "あめのまかじや",
        },
        {
            plain: "烏有亭",
            parsed: "うゆうてい",
        },
        {
            plain: "豊穣の願い",
            parsed: "ほうじょうのねがい",
        },
        {
            plain: "セーリングブリーズ",
            parsed: "セーリングブリーズ",
        },
        {
            plain: "仙霊",
            parsed: "せんれい",
        },
        {
            plain: "温暖仙霊",
            parsed: "おんだんせんれい",
        },
        {
            plain: "雷霊",
            parsed: "らいれい",
        },
        {
            plain: "晶蝶",
            parsed: "しょうちょう",
        },
        {
            plain: "風晶蝶",
            parsed: "かぜしょうちょう",
        },
        {
            plain: "岩晶蝶",
            parsed: "いわしょうちょう",
        },
        {
            plain: "氷晶蝶",
            parsed: "こおりしょうちょう",
        },
        {
            plain: "雷晶蝶",
            parsed: "かみなりしょうちょう",
        },
        {
            plain: "イノシシ",
            parsed: "イノシシ",
        },
        {
            plain: "雪のイノシシ",
            parsed: "ゆきのイノシシ",
        },
        {
            plain: "雪のイノシシ王",
            parsed: "ゆきのイノシシおう",
        },
        {
            plain: "宝盗イタチ",
            parsed: "ほうとうイタチ",
        },
        {
            plain: "宝盗イタチ・新米",
            parsed: "ほうとうイタチしんまい",
        },
        {
            plain: "宝盗イタチ・中堅",
            parsed: "ほうとうイタチちゅうけん",
        },
        {
            plain: "宝盗イタチ・黄金",
            parsed: "ほうとうイタチおうごん",
        },
        {
            plain: "妖狸",
            parsed: "ばけだぬき",
        },
        {
            plain: "冥魚",
            parsed: "めいぎょ",
        },
        {
            plain: "群玉閣",
            parsed: "ぐんぎょくかく",
        },
        {
            plain: "黄金屋",
            parsed: "おうごんや",
        },
        {
            plain: "望舒旅館",
            parsed: "ぼうじょりょかん",
        },
        {
            plain: "神里屋敷",
            parsed: "かみさとやしき",
        },
        {
            plain: "九条陣屋",
            parsed: "くじょうじんや",
        },
        {
            plain: "浅瀬神社",
            parsed: "あさせじんじゃ",
        },
        {
            plain: "西風教会",
            parsed: "セピュロスきょうかい",
        },
        {
            plain: "鳴神大社",
            parsed: "なるかみおおやしろ",
        },
        {
            plain: "エルマイト旅団",
            parsed: "エルマイトりょだん",
        },
        {
            plain: "遺跡偵察者",
            parsed: "いせきていさつしゃ",
        },
        {
            plain: "遺跡防衛者",
            parsed: "いせきぼうえいしゃ",
        },
        {
            plain: "遺跡殲滅者",
            parsed: "いせきせんめつしゃ",
        },
        {
            plain: "黄金王獣",
            parsed: "おうごんおうじゅう",
        },
        {
            plain: "惡王丸",
            parsed: "あくおうまる",
        },
        {
            plain: "聖遺物",
            parsed: "せいいぶつ",
        },
        {
            plain: "生の花",
            parsed: "せいのはな",
        },
        {
            plain: "死の羽",
            parsed: "しのはね",
        },
        {
            plain: "時の砂",
            parsed: "ときのすな",
        },
        {
            plain: "空の杯",
            parsed: "そらのさかずき",
        },
        {
            plain: "理の冠",
            parsed: "ことわりのかんむり",
        },
        {
            plain: "狂戦士",
            parsed: "きょうせんし",
        },
        {
            plain: "氷風を彷徨う勇士",
            parsed: "ひょうふうをさまようゆうし",
        },
        {
            plain: "血染めの騎士道",
            parsed: "ちぞめのきしどう",
        },
        {
            plain: "勇士の心",
            parsed: "ゆうしのこころ",
        },
        {
            plain: "守護の心",
            parsed: "しゅごのこころ",
        },
        {
            plain: "絶縁の旗印",
            parsed: "ぜつえんのはたじるし",
        },
        {
            plain: "亡命者",
            parsed: "ぼうめいしゃ",
        },
        {
            plain: "博徒",
            parsed: "ばくと",
        },
        {
            plain: "沈淪の心",
            parsed: "ちんりんのこころ",
        },
        {
            plain: "華館夢醒形骸記",
            parsed: "かかんむせいけいがいき",
        },
        {
            plain: "教官",
            parsed: "きょうかん",
        },
        {
            plain: "烈火を渡る賢者",
            parsed: "れっかをわたるけんじゃ",
        },
        {
            plain: "幸運",
            parsed: "こううん",
        },
        {
            plain: "愛される少女",
            parsed: "あいされるしょうじょ",
        },
        {
            plain: "武人",
            parsed: "ぶじん",
        },
        {
            plain: "旧貴族のしつけ",
            parsed: "きゅうきぞくのしつけ",
        },
        {
            plain: "蒼白の炎",
            parsed: "そうはくのほのお",
        },
        {
            plain: "水祭りの人",
            parsed: "みずまつりのひと",
        },
        {
            plain: "火祭りの人",
            parsed: "ひまつりのひと",
        },
        {
            plain: "氷祭りの人",
            parsed: "こおりまつりのひと",
        },
        {
            plain: "雷祭りの人",
            parsed: "かみなりまつりのひと",
        },
        {
            plain: "旅人の心",
            parsed: "たびびとのこころ",
        },
        {
            plain: "逆飛びの流星",
            parsed: "さかとびのりゅうせい",
        },
        {
            plain: "学者",
            parsed: "がくしゃ",
        },
        {
            plain: "追憶のしめ縄",
            parsed: "ついおくのしめなわ",
        },
        {
            plain: "千岩牢固",
            parsed: "せんがんろうこ",
        },
        {
            plain: "雷のような怒り",
            parsed: "かみなりのようないかり",
        },
        {
            plain: "雷を鎮める尊者",
            parsed: "かみなりをしずめるそんじゃ",
        },
        {
            plain: "奇跡",
            parsed: "きせき",
        },
        {
            plain: "医者",
            parsed: "いしゃ",
        },
        {
            plain: "辰砂往生録",
            parsed: "しんしゃおうじょうろく",
        },
        {
            plain: "翠緑の影",
            parsed: "すいりょくのかげ",
        },
        {
            plain: "大地を流浪する楽団",
            parsed: "だいちをるろうするがくだん",
        },
        {
            plain: "栄誉騎士",
            parsed: "えいよきし",
        },
        {
            plain: "パイモン",
            parsed: "パイモン",
        },
        {
            plain: "キャサリン",
            parsed: "キャサリン",
        },
        {
            plain: "ダンディ",
            parsed: "ダンディ",
        },
        {
            plain: "天理の調停者",
            parsed: "てんりのちょうていしゃ",
        },
        {
            plain: "ジン・グンヒルド",
            parsed: "ジングンヒルド",
        },
        {
            plain: "代理団長",
            parsed: "だいりだんちょう",
        },
        {
            plain: "アンバー",
            parsed: "アンバー",
        },
        {
            plain: "偵察騎士",
            parsed: "ていさつきし",
        },
        {
            plain: "ウサギ伯爵",
            parsed: "ウサギはくしゃく",
        },
        {
            plain: "ガイア・アルベリヒ",
            parsed: "ガイアアルベリヒ",
        },
        {
            plain: "リサ・ミンツ",
            parsed: "リサミンツ",
        },
        {
            plain: "ウェンティ",
            parsed: "ウェンティ",
        },
        {
            plain: "レザー",
            parsed: "レザー",
        },
        {
            plain: "ベネット",
            parsed: "ベネット",
        },
        {
            plain: "ノエル",
            parsed: "ノエル",
        },
        {
            plain: "フィッシュル・ヴォン・ルフシュロス・ナフィードット",
            parsed: "フィッシュルヴォンルフシュロスナフィードット",
        },
        {
            plain: "オズ",
            parsed: "オズ",
        },
        {
            plain: "オズヴァルド・ラフナヴィネス",
            parsed: "オズヴァルドラフナヴィネス",
        },
        {
            plain: "ディルック・ラグヴィンド",
            parsed: "ディルックラグヴィンド",
        },
        {
            plain: "ボンボン爆弾",
            parsed: "ボンボンばくだん",
        },
        {
            plain: "ドドコ",
            parsed: "ドドコ",
        },
        {
            plain: "スクロース",
            parsed: "スクロース",
        },
        {
            plain: "アルベド",
            parsed: "アルベド",
        },
        {
            plain: "アストローギスト・モナ・メギストス",
            parsed: "アストローギストモナメギストス",
        },
        {
            plain: "トワリン",
            parsed: "トワリン",
        },
        {
            plain: "風魔龍",
            parsed: "ふうまりゅう",
        },
        {
            plain: "四風守護",
            parsed: "しふうしゅご",
        },
        {
            plain: "ドゥリン",
            parsed: "ドゥリン",
        },
        {
            plain: "奔狼の領主",
            parsed: "ほうろうのりょうしゅ",
        },
        {
            plain: "ティマイオス",
            parsed: "ティマイオス",
        },
        {
            plain: "エリン",
            parsed: "エリン",
        },
        {
            plain: "ティミー",
            parsed: "ティミー",
        },
        {
            plain: "エラ・マスク",
            parsed: "エラマスク",
        },
        {
            plain: "うっかりパラド",
            parsed: "うっかりパラド",
        },
        {
            plain: "ヴァネッサ",
            parsed: "ヴァネッサ",
        },
        {
            plain: "ワーグナー",
            parsed: "ワーグナー",
        },
        {
            plain: "シュッツ",
            parsed: "シュッツ",
        },
        {
            plain: "ゲーテ",
            parsed: "ゲーテ",
        },
        {
            plain: "ジリアンナ",
            parsed: "ジリアンナ",
        },
        {
            plain: "ヴィクトリア",
            parsed: "ヴィクトリア",
        },
        {
            plain: "グローリー",
            parsed: "グローリー",
        },
        {
            plain: "甘雨",
            parsed: "かんう",
        },
        {
            plain: "胡桃",
            parsed: "フータオ",
        },
        {
            plain: "雲菫",
            parsed: "うんきん",
        },
        {
            plain: "夜蘭",
            parsed: "イェラン",
        },
        {
            plain: "岩神",
            parsed: "がんしん",
        },
        {
            plain: "天おじ",
            parsed: "てんおじ",
        },
        {
            plain: "グゥオパァー",
            parsed: "グゥオパァー",
        },
        {
            plain: "銅雀",
            parsed: "どうじゃく",
        },
        {
            plain: "平安",
            parsed: "へいあん",
        },
        {
            plain: "ヘウリア",
            parsed: "ヘウリア",
        },
        {
            plain: "ヴェル・ゴレット",
            parsed: "ヴェルゴレット",
        },
        {
            plain: "玥輝",
            parsed: "げつき",
        },
        {
            plain: "志璇",
            parsed: "しせん",
        },
        {
            plain: "タリエシン",
            parsed: "タリエシン",
        },
        {
            plain: "クレイトポン",
            parsed: "クレイトポン",
        },
        {
            plain: "ザマラン",
            parsed: "ザマラン",
        },
        {
            plain: "楓原万葉",
            parsed: "かえではらかずは",
        },
        {
            plain: "宵宮",
            parsed: "よいみや",
        },
        {
            plain: "神里綾華",
            parsed: "かみさとあやか",
        },
        {
            plain: "神里綾人",
            parsed: "かみさとあやと",
        },
        {
            plain: "トーマ",
            parsed: "トーマ",
        },
        {
            plain: "早柚",
            parsed: "さゆ",
        },
        {
            plain: "八重神子",
            parsed: "やえみこ",
        },
        {
            plain: "荒瀧一斗",
            parsed: "あらたきいっと",
        },
        {
            plain: "丑雄",
            parsed: "うしお",
        },
        {
            plain: "久岐忍",
            parsed: "くきしのぶ",
        },
        {
            plain: "ゴロー",
            parsed: "ゴロー",
        },
        {
            plain: "珊瑚宮心海",
            parsed: "さんごのみやここみ",
        },
        {
            plain: "現人神の巫女",
            parsed: "あらひとがみのみこ",
        },
        {
            plain: "鹿野院平蔵",
            parsed: "しかのいんへいぞう",
        },
        {
            plain: "雷電将軍",
            parsed: "らいでんしょうぐん",
        },
        {
            plain: "一心浄土",
            parsed: "いっしんじょうど",
        },
        {
            plain: "夢想の一心",
            parsed: "むそうのいっしん",
        },
        {
            plain: "影",
            parsed: "えい",
        },
        {
            plain: "眞",
            parsed: "まこと",
        },
        {
            plain: "禍津御建鳴神命",
            parsed: "まがつみたけなるかみのみこと",
        },
        {
            plain: "太郎丸",
            parsed: "たろうまる",
        },
        {
            plain: "狐斎宮",
            parsed: "きつねさいぐう",
        },
        {
            plain: "五百蔵",
            parsed: "いおろい",
        },
        {
            plain: "カマ",
            parsed: "カマ",
        },
        {
            plain: "墨田",
            parsed: "すみだ",
        },
        {
            plain: "雷鳥",
            parsed: "らいちょう",
        },
        {
            plain: "淵上",
            parsed: "えんじょう",
        },
        {
            plain: "亜琉",
            parsed: "ある",
        },
        {
            plain: "アブラクサス",
            parsed: "アブラクサス",
        },
        {
            plain: "阿倍良久",
            parsed: "あべらく",
        },
        {
            plain: "エレボス",
            parsed: "エレボス",
        },
        {
            plain: "烏帽子",
            parsed: "えぼし",
        },
        {
            plain: "哲平",
            parsed: "てっぺい",
        },
        {
            plain: "無名",
            parsed: "むめい",
        },
        {
            plain: "「公義」",
            parsed: "まさのり",
        },
        {
            plain: "創",
            parsed: "はじめ",
        },
        {
            plain: "天目十五",
            parsed: "あめのまとうご",
        },
        {
            plain: "鯨井坊や",
            parsed: "くじらいぼうや",
        },
        {
            plain: "スーザン",
            parsed: "スーザン",
        },
        {
            plain: "カルピリア",
            parsed: "カルピリア",
        },
        {
            plain: "ワヒッド",
            parsed: "ワヒッド",
        },
        {
            plain: "アルハイゼン",
            parsed: "アルハイゼン",
        },
        {
            plain: "ニィロウ",
            parsed: "ニィロウ",
        },
        {
            plain: "ナヒーダ",
            parsed: "ナヒーダ",
        },
        {
            plain: "草神",
            parsed: "そうしん",
        },
        {
            plain: "テウセル",
            parsed: "テウセル",
        },
        {
            plain: "氷神",
            parsed: "ひょうじん",
        },
        {
            plain: "秘境",
            parsed: "ひきょう",
        },
        {
            plain: "煉武秘境",
            parsed: "れんぶひきょう",
        },
        {
            plain: "祈聖秘境",
            parsed: "きせいひきょう",
        },
        {
            plain: "熟知秘境",
            parsed: "じゅくちひきょう",
        },
        {
            plain: "地脈異常",
            parsed: "ちみゃくいじょう",
        },
        {
            plain: "深境螺旋",
            parsed: "しんきょうらせん",
        },
        {
            plain: "朔望の刻",
            parsed: "さくぼうのとき",
        },
        {
            plain: "セシリアの苗床",
            parsed: "セシリアのなえどこ",
        },
        {
            plain: "仲夏の庭園",
            parsed: "ちゅうかのていえん",
        },
        {
            plain: "西風の鷹の神殿",
            parsed: "セピュロスのたかのしんでん",
        },
        {
            plain: "曲径通幽の処",
            parsed: "きょくけいつうゆうのところ",
        },
        {
            plain: "墟散人離の処",
            parsed: "きょさんじんりのところ",
        },
        {
            plain: "太山府",
            parsed: "たいざんふ",
        },
        {
            plain: "震雷連山密宮",
            parsed: "しんらいれんざんみっきゅう",
        },
        {
            plain: "山間幽谷",
            parsed: "さんかんゆうこく",
        },
        {
            plain: "砂流ノ庭",
            parsed: "さりゅうノにわ",
        },
        {
            plain: "借景ノ館",
            parsed: "しゃっけいノやかた",
        },
        {
            plain: "陣代屋敷",
            parsed: "じんだいやしき",
        },
        {
            plain: "池の中にある邸宅",
            parsed: "いけのなかにあるていたく",
        },
        {
            plain: "モシリの殻",
            parsed: "モシリのから",
        },
        {
            plain: "熟眠ノ庭",
            parsed: "じゅくみんのにわ",
        },
        {
            plain: "精鋭",
            parsed: "せいえい",
        },
        {
            plain: "スライム",
            parsed: "スライム",
        },
        {
            plain: "炎スライム",
            parsed: "ほのおスライム",
        },
        {
            plain: "大型炎スライム",
            parsed: "おおがたほのおスライム",
        },
        {
            plain: "水スライム",
            parsed: "みずスライム",
        },
        {
            plain: "大型水スライム",
            parsed: "おおがたみずスライム",
        },
        {
            plain: "風スライム",
            parsed: "かぜスライム",
        },
        {
            plain: "大型風スライム",
            parsed: "おおがたかぜスライム",
        },
        {
            plain: "雷スライム",
            parsed: "かみなりスライム",
        },
        {
            plain: "大型雷スライム",
            parsed: "おおがたかみなりスライム",
        },
        {
            plain: "変異雷スライム",
            parsed: "へんいかみなりスライム",
        },
        {
            plain: "草スライム",
            parsed: "くさスライム",
        },
        {
            plain: "大型草スライム",
            parsed: "おおがたくさスライム",
        },
        {
            plain: "氷スライム",
            parsed: "こおりスライム",
        },
        {
            plain: "大型氷スライム",
            parsed: "おおがたこおりスライム",
        },
        {
            plain: "岩スライム",
            parsed: "いわスライム",
        },
        {
            plain: "大型岩スライム",
            parsed: "おおがたいわスライム",
        },
        {
            plain: "ヒルチャール・木盾",
            parsed: "ヒルチャールもくじゅん",
        },
        {
            plain: "ヒルチャール・岩盾",
            parsed: "ヒルチャールがんじゅん",
        },
        {
            plain: "ヒルチャール・氷盾",
            parsed: "ヒルチャールひょうじゅん",
        },
        {
            plain: "ヒルチャール・氷弾",
            parsed: "ヒルチャールひょうだん",
        },
        {
            plain: "ヒルチャール・雷弾",
            parsed: "ヒルチャールらいだん",
        },
        {
            plain: "ヒルチャールシャーマン",
            parsed: "ヒルチャールシャーマン",
        },
        {
            plain: "ヒルチャールシャーマン・水",
            parsed: "ヒルチャールシャーマンみず",
        },
        {
            plain: "ヒルチャールシャーマン・風",
            parsed: "ヒルチャールシャーマンかぜ",
        },
        {
            plain: "ヒルチャールシャーマン・雷",
            parsed: "ヒルチャールシャーマンかみなり",
        },
        {
            plain: "ヒルチャールシャーマン・草",
            parsed: "ヒルチャールシャーマンくさ",
        },
        {
            plain: "ヒルチャールシャーマン・氷",
            parsed: "ヒルチャールシャーマンこおり",
        },
        {
            plain: "ヒルチャールシャーマン・岩",
            parsed: "ヒルチャールシャーマンいわ",
        },
        {
            plain: "変わったヒルチャール",
            parsed: "かわったヒルチャール",
        },
        {
            plain: "遺跡守衛",
            parsed: "いせきしゅえい",
        },
        {
            plain: "耕運機",
            parsed: "こううんき",
        },
        {
            plain: "遺跡ハンター",
            parsed: "いせきハンター",
        },
        {
            plain: "遺跡重機",
            parsed: "いせきじゅうき",
        },
        {
            plain: "遺跡サーペント",
            parsed: "いせきサーペント",
        },
        {
            plain: "アビス教団",
            parsed: "アビスきょうだん",
        },
        {
            plain: "アビスの魔術師",
            parsed: "アビスのまじゅつし",
        },
        {
            plain: "アビスの魔術師・炎",
            parsed: "アビスのまじゅつしほのお",
        },
        {
            plain: "アビスの魔術師・水",
            parsed: "アビスのまじゅつしみず",
        },
        {
            plain: "アビスの魔術師・雷",
            parsed: "アビスのまじゅつしかみなり",
        },
        {
            plain: "アビスの魔術師・氷",
            parsed: "アビスのまじゅつしこおり",
        },
        {
            plain: "アビスの使徒・激流",
            parsed: "アビスのしとげきりゅう",
        },
        {
            plain: "アビスの詠唱者・紫電",
            parsed: "アビスのえいしょうしゃしでん",
        },
        {
            plain: "アビスの詠唱者・淵炎",
            parsed: "アビスのえいしょうしゃえんえん",
        },
        {
            plain: "宝盗団",
            parsed: "ほうとうだん",
        },
        {
            plain: "宝盗団・斥候",
            parsed: "ほうとうだんせっこう",
        },
        {
            plain: "宝盗団・炎の薬剤師",
            parsed: "ほうとうだんほのおのやくざいし",
        },
        {
            plain: "宝盗団・水の薬剤師",
            parsed: "ほうとうだんみずのやくざいし",
        },
        {
            plain: "宝盗団・雷の薬剤師",
            parsed: "ほうとうだんかみなりのやくざいし",
        },
        {
            plain: "宝盗団・氷の薬剤師",
            parsed: "ほうとうだんこおりのやくざいし",
        },
        {
            plain: "宝盗団・雑夫",
            parsed: "ほうとうだんざっぷ",
        },
        {
            plain: "宝盗団・弓使い",
            parsed: "ほうとうだんゆみつかい",
        },
        {
            plain: "宝盗団・海の男児",
            parsed: "ほうとうだんうみのだんじ",
        },
        {
            plain: "宝盗団・粉砕者",
            parsed: "ほうとうだんふんさいしゃ",
        },
        {
            plain: "宝盗団・拳術家",
            parsed: "ほうとうだんけんじゅつか",
        },
        {
            plain: "水蛍",
            parsed: "すいけい",
        },
        {
            plain: "雷蛍",
            parsed: "らいけい",
        },
        {
            plain: "氷蛍",
            parsed: "ひょうけい",
        },
        {
            plain: "狂風のコア",
            parsed: "きょうふうのコア",
        },
        {
            plain: "トリックフラワー",
            parsed: "トリックフラワー",
        },
        {
            plain: "トリックフラワー・炎",
            parsed: "トリックフラワーほのお",
        },
        {
            plain: "トリックフラワー・氷",
            parsed: "トリックフラワーこおり",
        },
        {
            plain: "トリックフラワー・雷",
            parsed: "トリックフラワーかみなり",
        },
        {
            plain: "爆炎樹",
            parsed: "ばくえんじゅ",
        },
        {
            plain: "急凍樹",
            parsed: "きゅうとうじゅ",
        },
        {
            plain: "無相の風",
            parsed: "むそうのかぜ",
        },
        {
            plain: "無相の雷",
            parsed: "むそうのかみなり",
        },
        {
            plain: "無相の岩",
            parsed: "むそうのいわ",
        },
        {
            plain: "無相の氷",
            parsed: "むそうのこおり",
        },
        {
            plain: "無相の炎",
            parsed: "むそうのほのお",
        },
        {
            plain: "無相の水",
            parsed: "むそうのみず",
        },
        {
            plain: "ヴィシャップ・岩",
            parsed: "ヴィシャップいわ",
        },
        {
            plain: "エンシェントヴィシャップ・岩",
            parsed: "エンシェントヴィシャップいわ",
        },
        {
            plain: "アビサルヴィシャップ",
            parsed: "アビサルヴィシャップ",
        },
        {
            plain: "ローデシア",
            parsed: "ローデシア",
        },
        {
            plain: "雷音権現",
            parsed: "らいおんごんげん",
        },
        {
            plain: "渦の魔神",
            parsed: "うずのまじん",
        },
        {
            plain: "渦の余威",
            parsed: "うずのよい",
        },
        {
            plain: "野伏・火付番",
            parsed: "のぶしひつけばん",
        },
        {
            plain: "野伏・陣刀番",
            parsed: "のぶしじんとうばん",
        },
        {
            plain: "野伏・機巧番",
            parsed: "のぶしきこうばん",
        },
        {
            plain: "魔偶剣鬼",
            parsed: "まぐうけんき",
        },
        {
            plain: "獣域ハウンド",
            parsed: "じゅういきハウンド",
        },
        {
            plain: "獣域ハウンド・岩",
            parsed: "じゅういきハウンドいわ",
        },
        {
            plain: "獣域ハウンド・雷",
            parsed: "じゅういきハウンドかみなり",
        },
        {
            plain: "シャドウハスク",
            parsed: "シャドウハスク",
        },
        {
            plain: "黒蛇騎士",
            parsed: "こくじゃきし",
        },
        {
            plain: "黒蛇騎士・斬風の剣",
            parsed: "こくじゃきしざんぷうのけん",
        },
        {
            plain: "鳥肉と野生キノコの串焼き",
            parsed: "とりにくとやせいキノコのくしやき",
        },
        {
            plain: "テイワット風目玉焼き",
            parsed: "テイワットふうめだまやき",
        },
        {
            plain: "ステーキ",
            parsed: "ステーキ",
        },
        {
            plain: "大根入りの野菜スープ",
            parsed: "だいこんいりのやさいスープ",
        },
        {
            plain: "モンド風焼き魚",
            parsed: "モンドふうやきざかな",
        },
        {
            plain: "モラミート",
            parsed: "モラミート",
        },
        {
            plain: "豚肉の油炒め",
            parsed: "ぶたにくのあぶらいため",
        },
        {
            plain: "チ虎魚焼き",
            parsed: "チこぎょやき",
        },
        {
            plain: "大椀のお茶",
            parsed: "おおわんのおちゃ",
        },
        {
            plain: "米まんじゅう",
            parsed: "こめまんじゅう",
        },
        {
            plain: "鳥卵の玉子焼き",
            parsed: "ちょうらんのたまごやき",
        },
        {
            plain: "干物の網焼き",
            parsed: "ひもののあみやき",
        },
        {
            plain: "そば",
            parsed: "そば",
        },
        {
            plain: "松茸のアワビもどき",
            parsed: "まつたけのアワビもどき",
        },
        {
            plain: "完熟トマトのミートソース",
            parsed: "かんじゅくトマトのミートソース",
        },
        {
            plain: "鳥肉のスイートフラワー漬け焼き",
            parsed: "とりにくのスイートフラワーつけやき",
        },
        {
            plain: "北地のスモークチキン",
            parsed: "ほくちのスモークチキン",
        },
        {
            plain: "ホワイトソースポトフ",
            parsed: "ホワイトソースポトフ",
        },
        {
            plain: "午後のパンケーキ",
            parsed: "ごごのパンケーキ",
        },
        {
            plain: "大根の揚げ団子",
            parsed: "だいこんのあげだんご",
        },
        {
            plain: "漁師トースト",
            parsed: "りょうしトースト",
        },
        {
            plain: "満足サラダ",
            parsed: "まんぞくサラダ",
        },
        {
            plain: "お肉と野菜のシチュー",
            parsed: "おにくとやさいのシチュー",
        },
        {
            plain: "杏仁豆腐",
            parsed: "あんにんどうふ",
        },
        {
            plain: "椒椒鶏",
            parsed: "ジョジョジー",
        },
        {
            plain: "真珠翡翠白玉湯",
            parsed: "しんじゅひすいはくぎょくとう",
        },
        {
            plain: "松茸の肉巻き",
            parsed: "まつたけのにくまき",
        },
        {
            plain: "水晶蝦",
            parsed: "すいしょうえび",
        },
        {
            plain: "ハスの実入り茶碗蒸し",
            parsed: "ハスのみいりちゃわんむし",
        },
        {
            plain: "山幸の麺",
            parsed: "やまさちのめん",
        },
        {
            plain: "ミントの和え物",
            parsed: "ミントのあえもの",
        },
        {
            plain: "かにみそ豆腐",
            parsed: "かにみそどうふ",
        },
        {
            plain: "マグロの握り寿司",
            parsed: "マグロのにぎりずし",
        },
        {
            plain: "おにぎり",
            parsed: "おにぎり",
        },
        {
            plain: "焼きそば",
            parsed: "やきそば",
        },
        {
            plain: "かにみそ甲羅焼き",
            parsed: "かにみそこうらやき",
        },
        {
            plain: "若竹煮",
            parsed: "わかたけに",
        },
        {
            plain: "魚とダイコンの煮込み",
            parsed: "さかなとダイコンのにこみ",
        },
        {
            plain: "ラスベリー水まんじゅう",
            parsed: "ラズベリーみずまんじゅう",
        },
        {
            plain: "カツサンド",
            parsed: "カツサンド",
        },
        {
            plain: "魚肉の焼き麺",
            parsed: "ぎょにくのやきめん",
        },
        {
            plain: "ミントベリージュース",
            parsed: "ミントベリージュース",
        },
        {
            plain: "ググプラムのジュース",
            parsed: "ググプラムのジュース",
        },
        {
            plain: "団子牛乳",
            parsed: "だんごぎゅうにゅう",
        },
        {
            plain: "濃厚マッシュポテト",
            parsed: "のうこうマッシュポテト",
        },
        {
            plain: "エビのポテト包み揚げ",
            parsed: "エビのポテトつつみあげ",
        },
        {
            plain: "ドドリアン海鮮スープ",
            parsed: "ドドリアンかいせんスープ",
        },
        {
            plain: "冷製肉盛り合わせ",
            parsed: "れいせいにくもりあわせ",
        },
        {
            plain: "ニンジンとお肉のハニーソテー",
            parsed: "ニンジンとおにくのハニーソテー",
        },
        {
            plain: "かにみそとハムのグリル野菜",
            parsed: "かにみそとハムのグリルやさい",
        },
        {
            plain: "キノコピザ",
            parsed: "キノコピザ",
        },
        {
            plain: "お肉ツミツミ",
            parsed: "おにくツミツミ",
        },
        {
            plain: "風神ヒュッツポット",
            parsed: "ふうじんヒュッツポット",
        },
        {
            plain: "冒険者エッグバーガー",
            parsed: "ぼうけんしゃエッグバーガー",
        },
        {
            plain: "バター魚焼き",
            parsed: "バターさかなやき",
        },
        {
            plain: "カリカリチキンバーガー",
            parsed: "カリカリチキンバーガー",
        },
        {
            plain: "エビのあっさり炒め",
            parsed: "エビのあっさりいため",
        },
        {
            plain: "北地のリンゴと肉の煮込み",
            parsed: "ほくちのリンゴとにくのにこみ",
        },
        {
            plain: "モンド風ハッシュドポテト",
            parsed: "モンドふうハッシュドポテト",
        },
        {
            plain: "明月の玉子",
            parsed: "めいげつのたまご",
        },
        {
            plain: "四方平和",
            parsed: "しほうへいわ",
        },
        {
            plain: "璃月三糸",
            parsed: "りーゆぇさんし",
        },
        {
            plain: "お食べくだ菜",
            parsed: "おたべください",
        },
        {
            plain: "軽策農家料理",
            parsed: "けいさくのうかりょうり",
        },
        {
            plain: "揚げ魚の甘酢あんかけ",
            parsed: "あげざかなのあまずあんかけ",
        },
        {
            plain: "中原のもつ焼き",
            parsed: "なかはらのもつやき",
        },
        {
            plain: "ハスの花パイ",
            parsed: "ハスのはなパイ",
        },
        {
            plain: "絶雲お焦げ",
            parsed: "ぜつうんおこげ",
        },
        {
            plain: "松茸のバター焼き",
            parsed: "まつたけのバターやき",
        },
        {
            plain: "お好み焼き",
            parsed: "おこのみやき",
        },
        {
            plain: "夕暮れの鯛焼き",
            parsed: "ゆうぐれのたいやき",
        },
        {
            plain: "活力にゃんこ飯",
            parsed: "かつりょくにゃんこめし",
        },
        {
            plain: "文心豆腐",
            parsed: "ぶんしんどうふ",
        },
        {
            plain: "獣肉シチュー",
            parsed: "けものにくシチュー",
        },
        {
            plain: "お米プリン",
            parsed: "おこめプリン",
        },
        {
            plain: "緋櫻天ぷら",
            parsed: "ひおうてんぷら",
        },
        {
            plain: "市井おでん",
            parsed: "しせいおでん",
        },
        {
            plain: "緋櫻餅",
            parsed: "ひおうもち",
        },
        {
            plain: "渡来鳥肉",
            parsed: "とらいとりにく",
        },
        {
            plain: "串焼き三種",
            parsed: "くしやきさんしゅ",
        },
        {
            plain: "獣骨ラーメン",
            parsed: "じゅうこつラーメン",
        },
        {
            plain: "三色団子",
            parsed: "さんしょくだんご",
        },
        {
            plain: "ミントの獣肉巻き",
            parsed: "ミントのけものにくまき",
        },
        {
            plain: "実り豊か",
            parsed: "みのりゆたか",
        },
        {
            plain: "ピリ辛蒸し饅頭",
            parsed: "ピリからむしまんじゅう",
        },
        {
            plain: "刺身の盛り合わせ",
            parsed: "さしみのもりあわせ",
        },
        {
            plain: "黄金ガニ",
            parsed: "おうごんガニ",
        },
        {
            plain: "翠玉福袋",
            parsed: "すいぎょくふくぶくろ",
        },
        {
            plain: "天枢肉",
            parsed: "てんすうにく",
        },
        {
            plain: "黄金のジャンボチキン",
            parsed: "おうごんのジャンボチキン",
        },
        {
            plain: "カニのバター添え",
            parsed: "カニのバターぞえ",
        },
        {
            plain: "夕暮れの実",
            parsed: "ゆうぐれのみ",
        },
        {
            plain: "ミント",
            parsed: "ミント",
        },
        {
            plain: "スイートフラワー",
            parsed: "スイートフラワー",
        },
        {
            plain: "ナッツ",
            parsed: "ナッツ",
        },
        {
            plain: "リンゴ",
            parsed: "リンゴ",
        },
        {
            plain: "キノコ",
            parsed: "キノコ",
        },
        {
            plain: "ラズベリー",
            parsed: "ラズベリー",
        },
        {
            plain: "キンギョソウ",
            parsed: "キンギョソウ",
        },
        {
            plain: "スミレウリ",
            parsed: "スミレウリ",
        },
        {
            plain: "獣肉",
            parsed: "けものにく",
        },
        {
            plain: "冷製鮮肉",
            parsed: "れいせいせんにく",
        },
        {
            plain: "鳥肉",
            parsed: "とりにく",
        },
        {
            plain: "鳥肉の燻製",
            parsed: "とりにくのくんせい",
        },
        {
            plain: "魚肉",
            parsed: "ぎょにく",
        },
        {
            plain: "カニ",
            parsed: "カニ",
        },
        {
            plain: "牛乳",
            parsed: "ぎゅうにゅう",
        },
        {
            plain: "小麦",
            parsed: "こむぎ",
        },
        {
            plain: "小麦粉",
            parsed: "こむぎこ",
        },
        {
            plain: "紡がれた運命",
            parsed: "つむがれたうんめい",
        },
        {
            plain: "出会いの縁",
            parsed: "であいのえにし",
        },
        {
            plain: "無主のスターライト",
            parsed: "むしゅのスターライト",
        },
        {
            plain: "無主のスターダスト",
            parsed: "むしゅのスターダスト",
        },
        {
            plain: "モラ",
            parsed: "モラ",
        },
        {
            plain: "天然樹脂",
            parsed: "てんねんじゅし",
        },
        {
            plain: "脆弱樹脂",
            parsed: "ぜいじゃくじゅし",
        },
        {
            plain: "濃縮樹脂",
            parsed: "のうしゅくじゅし",
        },
        {
            plain: "刹那樹脂",
            parsed: "せつなじゅし",
        },
        {
            plain: "祈聖のオイル",
            parsed: "きせいのオイル",
        },
        {
            plain: "祈聖のエキス",
            parsed: "きせいのエキス",
        },
        {
            plain: "風神の瞳の共鳴石",
            parsed: "ふうじんのひとみのきょうめいせき",
        },
        {
            plain: "岩神の瞳の共鳴石",
            parsed: "がんしんのひとみのきょうめいせき",
        },
        {
            plain: "晶核",
            parsed: "しょうかく",
        },
        {
            plain: "風の印",
            parsed: "かぜのしるし",
        },
        {
            plain: "岩の印",
            parsed: "いわのしるし",
        },
        {
            plain: "雷の印",
            parsed: "かみなりのしるし",
        },
        {
            plain: "「仙人探しの美食家」",
            parsed: "せんにんさがしのびしょくか",
        },
        {
            plain: "放熱瓶",
            parsed: "ほうねつびん",
        },
        {
            plain: "風捕りの瓶",
            parsed: "かぜとりのびん",
        },
        {
            plain: "風のトレジャーコンパス",
            parsed: "かぜのトレジャーコンパス",
        },
        {
            plain: "岩のトレジャーコンパス",
            parsed: "いわのトレジャーコンパス",
        },
        {
            plain: "雷のトレジャーコンパス",
            parsed: "かみなりのトレジャーコンパス",
        },
        {
            plain: "三〇式・携帯式栄養袋",
            parsed: "さんまるしきけいたいしきえいようぶくろ",
        },
        {
            plain: "ポケットワープポイント",
            parsed: "ポケットワープポイント",
        },
        {
            plain: "写真機",
            parsed: "しゃしんき",
        },
        {
            plain: "参量物質変化器",
            parsed: "さんりょうぶっしつへんかき",
        },
        {
            plain: "異夢の溶媒",
            parsed: "いむのようばい",
        },
        {
            plain: "ウェーブボートの修理箱",
            parsed: "ウェーブボートのしゅうりばこ",
        },
        {
            plain: "狩猟の罠",
            parsed: "しゅりょうのわな",
        },
        {
            plain: "変わった羽毛",
            parsed: "かわったうもう",
        },
        {
            plain: "赤羽団扇",
            parsed: "あかばねうちわ",
        },
        {
            plain: "鍵紋",
            parsed: "かぎもん",
        },
        {
            plain: "深秘の聖遺物箱",
            parsed: "しんぴのせいいぶつばこ",
        },
        {
            plain: "流浪者の経験",
            parsed: "るろうしゃのけいけん",
        },
        {
            plain: "冒険家の経験",
            parsed: "ぼうけんかのけいけん",
        },
        {
            plain: "大英雄の経験",
            parsed: "だいえいゆうのけいけん",
        },
        {
            plain: "仕上げ用雑鉱",
            parsed: "しあげようざっこう",
        },
        {
            plain: "仕上げ用良鉱",
            parsed: "しあげようりょうこう",
        },
        {
            plain: "仕上げ用魔鉱",
            parsed: "しあげようまこう",
        },
        {
            plain: "耐熱薬剤",
            parsed: "たいねつやくざい",
        },
        {
            plain: "耐湿薬剤",
            parsed: "たいしつやくざい",
        },
        {
            plain: "耐寒薬剤",
            parsed: "たいかんやくざい",
        },
        {
            plain: "耐風薬剤",
            parsed: "たいふうやくざい",
        },
        {
            plain: "耐電薬剤",
            parsed: "たいでんやくざい",
        },
        {
            plain: "耐塵薬剤",
            parsed: "たいじんやくざい",
        },
        {
            plain: "烈火のオイル",
            parsed: "れっかのオイル",
        },
        {
            plain: "激流のオイル",
            parsed: "げきりゅうのオイル",
        },
        {
            plain: "狂風のオイル",
            parsed: "きょうふうのオイル",
        },
        {
            plain: "驚雷のオイル",
            parsed: "きょうらいのオイル",
        },
        {
            plain: "磐石のオイル",
            parsed: "ばんじゃくのオイル",
        },
        {
            plain: "霧氷花",
            parsed: "むひょうばな",
        },
        {
            plain: "霧氷花の花蕊",
            parsed: "むひょうばなのかずい",
        },
        {
            plain: "烈焔花",
            parsed: "れつえんばな",
        },
        {
            plain: "烈焔花の花蕊",
            parsed: "れつえんばなのかずい",
        },
        {
            plain: "北陸片手剣の原型",
            parsed: "ほくりくかたてけんのげんけい",
        },
        {
            plain: "北陸弓の原型",
            parsed: "ほくりくゆみのげんけい",
        },
        {
            plain: "北陸両手剣の原型",
            parsed: "ほくりくりょうてけんのげんけい",
        },
        {
            plain: "北陸長柄武器の原型",
            parsed: "ほくりくながえぶきのげんけい",
        },
        {
            plain: "北陸法器の原型",
            parsed: "ほくりくほうきのげんけい",
        },
        {
            plain: "鉄の塊",
            parsed: "てつのかたまり",
        },
        {
            plain: "白鉄の塊",
            parsed: "はくてつのかたまり",
        },
        {
            plain: "水晶の塊",
            parsed: "すいしょうのかたまり",
        },
        {
            plain: "魔晶の塊",
            parsed: "ましょうのかたまり",
        },
        {
            plain: "星銀鉱石",
            parsed: "せいぎんこうせき",
        },
        {
            plain: "電気水晶",
            parsed: "でんきすいしょう",
        },
        {
            plain: "紫水晶の塊",
            parsed: "むらさきすいしょうのかたまり",
        },
        {
            plain: "バトルトゲウオ",
            parsed: "バトルトゲウオ",
        },
        {
            plain: "緑チョウチョウウオ",
            parsed: "みどりチョウチョウウオ",
        },
        {
            plain: "鉄砲フグ",
            parsed: "てっぽうフグ",
        },
        {
            plain: "釣り餌",
            parsed: "つりえ",
        },
        {
            plain: "果物餌",
            parsed: "くだものえ",
        },
        {
            plain: "赤挽肉餌",
            parsed: "あかひきにくえ",
        },
        {
            plain: "ワームの疑似餌",
            parsed: "ワームのぎじえ",
        },
        {
            plain: "ハエの疑似餌",
            parsed: "ハエのぎじえ",
        },
        {
            plain: "テイワット観光ガイド",
            parsed: "テイワットかんこうガイド",
        },
        {
            plain: "モンドタワー",
            parsed: "モンドタワー",
        },
        {
            plain: "亡国の美奈姫",
            parsed: "ぼうこくのみなひめ",
        },
        {
            plain: "フィッシュル皇女物語",
            parsed: "フィッシュルこうじょものがたり",
        },
        {
            plain: "珊瑚宮記",
            parsed: "さんごのみやき",
        },
        {
            plain: "沈秋拾剣録",
            parsed: "ちんしゅうしゅうけんろく",
        },
        {
            plain: "月浴淵の鍵",
            parsed: "げつよくえんのかぎ",
        },
        {
            plain: "老石",
            parsed: "ろうせき",
        },
        {
            plain: "仙霊の庭",
            parsed: "せんれいのにわ",
        },
        {
            plain: "テイワット",
            parsed: "テイワット",
        },
        {
            plain: "天空の島",
            parsed: "てんくうのしま",
        },
        {
            plain: "星落ちの谷",
            parsed: "ほしおちのたに",
        },
        {
            plain: "望風海角",
            parsed: "ぼうふうかいかく",
        },
        {
            plain: "望風山地",
            parsed: "ぼうふうさんち",
        },
        {
            plain: "星落としの湖",
            parsed: "ほしおとしのみずうみ",
        },
        {
            plain: "囁きの森",
            parsed: "ささやきのもり",
        },
        {
            plain: "シードル湖",
            parsed: "シードルこ",
        },
        {
            plain: "星拾いの崖",
            parsed: "ほしひろいのがけ",
        },
        {
            plain: "千風の神殿",
            parsed: "せんぷうのしんでん",
        },
        {
            plain: "風唸りの丘",
            parsed: "かぜうなりのおか",
        },
        {
            plain: "風立ちの地",
            parsed: "かぜたちのち",
        },
        {
            plain: "鷹飛びの浜",
            parsed: "たかとびのはま",
        },
        {
            plain: "ダダウパの谷",
            parsed: "ダダウパのたに",
        },
        {
            plain: "蒼風の高地",
            parsed: "そうふうのこうち",
        },
        {
            plain: "清泉町",
            parsed: "きよいずみちょう",
        },
        {
            plain: "アカツキワイナリー",
            parsed: "アカツキワイナリー",
        },
        {
            plain: "奔狼領",
            parsed: "ほうろうりょう",
        },
        {
            plain: "酔漢峡",
            parsed: "すいかんきょう",
        },
        {
            plain: "明冠山地",
            parsed: "めいかんさんち",
        },
        {
            plain: "明冠峡谷",
            parsed: "めいかんきょうこく",
        },
        {
            plain: "ドラゴンスパイン",
            parsed: "ドラゴンスパイン",
        },
        {
            plain: "積雪の道",
            parsed: "せきせつのみち",
        },
        {
            plain: "雪葬の都・旧宮",
            parsed: "せっそうのみやこきゅうぐう",
        },
        {
            plain: "寒天の釘",
            parsed: "さむぞらのくぎ",
        },
        {
            plain: "星蛍の洞窟",
            parsed: "ほしほたるのどうくつ",
        },
        {
            plain: "龍眠の谷",
            parsed: "りゅうみんのたに",
        },
        {
            plain: "雪葬の都・近郊",
            parsed: "せっそうのみやこきんこう",
        },
        {
            plain: "マスク礁",
            parsed: "マスクしょう",
        },
        {
            plain: "璃月",
            parsed: "リーユェ",
        },
        {
            plain: "璃月港",
            parsed: "リーユェこう",
        },
        {
            plain: "緋雲の丘",
            parsed: "ひうんのおか",
        },
        {
            plain: "黒岩場",
            parsed: "こくがんじょう",
        },
        {
            plain: "璃沙郊",
            parsed: "りしゃこう",
        },
        {
            plain: "天衡山",
            parsed: "てんこうざん",
        },
        {
            plain: "青墟浦",
            parsed: "せいきょうら",
        },
        {
            plain: "霊矩関",
            parsed: "れいくかん",
        },
        {
            plain: "遁玉の丘",
            parsed: "とんぎょくのおか",
        },
        {
            plain: "瓊璣野",
            parsed: "けいきや",
        },
        {
            plain: "帰離原",
            parsed: "きりはら",
        },
        {
            plain: "明蘊町",
            parsed: "めいうんちょう",
        },
        {
            plain: "瑶光の浜",
            parsed: "ようこうのはま",
        },
        {
            plain: "地中の塩",
            parsed: "ちちゅうのしお",
        },
        {
            plain: "天穹の谷",
            parsed: "てんきゅうのたに",
        },
        {
            plain: "絶雲の間",
            parsed: "ぜつうんのま",
        },
        {
            plain: "南天門",
            parsed: "なんてんもん",
        },
        {
            plain: "琥牢山",
            parsed: "ころうざん",
        },
        {
            plain: "慶雲頂",
            parsed: "けいうんちょう",
        },
        {
            plain: "華光の林",
            parsed: "かこうのりん",
        },
        {
            plain: "碧水の原",
            parsed: "へきすいのはら",
        },
        {
            plain: "石門",
            parsed: "せきもん",
        },
        {
            plain: "無妄の丘",
            parsed: "むぼうのおか",
        },
        {
            plain: "軽策荘",
            parsed: "けいさくそう",
        },
        {
            plain: "雲来の海",
            parsed: "うんらいのうみ",
        },
        {
            plain: "孤雲閣",
            parsed: "こうんかく",
        },
        {
            plain: "伏鰲の谷",
            parsed: "ふごうのたに",
        },
        {
            plain: "地上鉱区",
            parsed: "ちじょうこうく",
        },
        {
            plain: "巨淵洞口",
            parsed: "きょえんほらぐち",
        },
        {
            plain: "丹砂崖",
            parsed: "たんしゃがい",
        },
        {
            plain: "琉璃峰",
            parsed: "るりほう",
        },
        {
            plain: "天工峡",
            parsed: "てんこうきょう",
        },
        {
            plain: "採樵の谷",
            parsed: "さいしょうのたに",
        },
        {
            plain: "層岩巨淵・地下鉱区",
            parsed: "そうがんきょえんちかこうく",
        },
        {
            plain: "臨時本坑",
            parsed: "りんじほんこう",
        },
        {
            plain: "巨蛇岩穴",
            parsed: "きょじゃがんけつ",
        },
        {
            plain: "巨淵主鉱区",
            parsed: "きょえんしゅこうく",
        },
        {
            plain: "地下湿原",
            parsed: "ちかしつげん",
        },
        {
            plain: "嶮しき石堂",
            parsed: "けわしきせきどう",
        },
        {
            plain: "無名遺跡",
            parsed: "むめいいせき",
        },
        {
            plain: "蛍光隘路",
            parsed: "けいこうあいろ",
        },
        {
            plain: "稲妻",
            parsed: "いなずま",
        },
        {
            plain: "鳴神島",
            parsed: "なるかみじま",
        },
        {
            plain: "白狐の野",
            parsed: "びゃっこのや",
        },
        {
            plain: "甘金島",
            parsed: "あまかねじま",
        },
        {
            plain: "影向山",
            parsed: "ようごうざん",
        },
        {
            plain: "離島",
            parsed: "りとう",
        },
        {
            plain: "荒海",
            parsed: "あらうみ",
        },
        {
            plain: "刃連島",
            parsed: "じんれんじま",
        },
        {
            plain: "神無塚",
            parsed: "かんなづか",
        },
        {
            plain: "御影炉心",
            parsed: "みかげろしん",
        },
        {
            plain: "緋木村",
            parsed: "ひぎむら",
        },
        {
            plain: "蛇神の首",
            parsed: "へびがみのくび",
        },
        {
            plain: "蛇骨鉱坑",
            parsed: "じゃこつこうこう",
        },
        {
            plain: "望瀧村",
            parsed: "ぼうろうむら",
        },
        {
            plain: "曚雲神社",
            parsed: "もううんじんじゃ",
        },
        {
            plain: "水月池",
            parsed: "すいげつち",
        },
        {
            plain: "淵下宮",
            parsed: "えんかのみや",
        },
        {
            plain: "蛇腸の道",
            parsed: "じゃちょうのみち",
        },
        {
            plain: "狭間の街",
            parsed: "はざまのまち",
        },
        {
            plain: "大日神輿",
            parsed: "だいにちみこし",
        },
        {
            plain: "常夜霊廟",
            parsed: "とこよれいびょう",
        },
        {
            plain: "蛇心の地",
            parsed: "じゃしんのち",
        },
        {
            plain: "セイライ島",
            parsed: "セイライじま",
        },
        {
            plain: "越石村",
            parsed: "こせきむら",
        },
        {
            plain: "セイライ丸",
            parsed: "セイライまる",
        },
        {
            plain: "鶴観",
            parsed: "つるみ",
        },
        {
            plain: "シリコロ山",
            parsed: "シリコロやま",
        },
        {
            plain: "オイナ海岸",
            parsed: "オイナかいがん",
        },
        {
            plain: "チライ社殿",
            parsed: "チライしゃでん",
        },
        {
            plain: "アウタケ平原",
            parsed: "アウタケへいげん",
        },
        {
            plain: "モシリ祭場",
            parsed: "モシリさいじょう",
        },
        {
            plain: "ワクカウ浜",
            parsed: "ワクカウはま",
        },
        {
            plain: "スメール",
            parsed: "スメール",
        },
        {
            plain: "オルモス港",
            parsed: "オルモスこう",
        },
        {
            plain: "スネージナヤ",
            parsed: "スネージナヤ",
        },
        {
            plain: "七天神像",
            parsed: "しちてんじんぞう",
        },
        {
            plain: "奉納する",
            parsed: "ほうのうする",
        },
        {
            plain: "神像の恵み",
            parsed: "しんぞうのめぐみ",
        },
        {
            plain: "ワープポイント",
            parsed: "ワープポイント",
        },
        {
            plain: "合成台",
            parsed: "ごうせいだい",
        },
        {
            plain: "地霊壇",
            parsed: "ちれいだん",
        },
        {
            plain: "普通の宝箱",
            parsed: "ふつうのたからばこ",
        },
        {
            plain: "精巧な宝箱",
            parsed: "せいこうなたからばこ",
        },
        {
            plain: "貴重な宝箱",
            parsed: "きちょうなたからばこ",
        },
        {
            plain: "豪華な宝箱",
            parsed: "ごうかなたからばこ",
        },
        {
            plain: "地脈の花",
            parsed: "ちみゃくのはな",
        },
        {
            plain: "地脈の花芽・啓示の花",
            parsed: "ちみゃくのかがけいじのはな",
        },
        {
            plain: "地脈の花芽・蔵金の花",
            parsed: "ちみゃくのかがぞうきんのはな",
        },
        {
            plain: "征討の花",
            parsed: "せいとうのはな",
        },
        {
            plain: "ポンポンの実",
            parsed: "ポンポンのみ",
        },
        {
            plain: "元素石碑",
            parsed: "げんそせきひ",
        },
        {
            plain: "雷極",
            parsed: "らいきょく",
        },
        {
            plain: "冬忍びの樹",
            parsed: "ふゆしのびのき",
        },
        {
            plain: "深紅の石",
            parsed: "しんくのいし",
        },
        {
            plain: "熱源",
            parsed: "ねつげん",
        },
        {
            plain: "遺跡の灯火",
            parsed: "いせきのともしび",
        },
        {
            plain: "太威儀盤",
            parsed: "たいぎばん",
        },
        {
            plain: "神櫻",
            parsed: "しんおう",
        },
        {
            plain: "千手百目神像",
            parsed: "せんじゅひゃくもくしんぞう",
        },
        {
            plain: "放電石",
            parsed: "ほうでんせき",
        },
        {
            plain: "継電石",
            parsed: "けいでんせき",
        },
        {
            plain: "集電石",
            parsed: "しゅうでんせき",
        },
        {
            plain: "雷承の鑑",
            parsed: "らいしょうのかがみ",
        },
        {
            plain: "雷櫻の枝",
            parsed: "らいおうのえだ",
        },
        {
            plain: "若雷の結界",
            parsed: "じゃくらいのけっかい",
        },
        {
            plain: "若雷石",
            parsed: "じゃくらいせき",
        },
        {
            plain: "雷石",
            parsed: "らいせき",
        },
        {
            plain: "ウェーブボート",
            parsed: "ウェーブボート",
        },
        {
            plain: "ボートポイント",
            parsed: "ボートポイント",
        },
        {
            plain: "冒険者協会",
            parsed: "ぼうけんしゃきょうかい",
        },
        {
            plain: "西風騎士団",
            parsed: "セピュロスきしだん",
        },
        {
            plain: "ベニー冒険団",
            parsed: "ベニーぼうけんだん",
        },
        {
            plain: "璃月七星",
            parsed: "りーゆぇしちせい",
        },
        {
            plain: "千岩軍",
            parsed: "せんがんぐん",
        },
        {
            plain: "総務司",
            parsed: "そうむし",
        },
        {
            plain: "輝山庁",
            parsed: "きざんちょう",
        },
        {
            plain: "盛露庁",
            parsed: "せいろちょう",
        },
        {
            plain: "古華派",
            parsed: "こかは",
        },
        {
            plain: "飛雲商会",
            parsed: "ひうんしょうかい",
        },
        {
            plain: "雲翰社",
            parsed: "うんかんしゃ",
        },
        {
            plain: "三奉行",
            parsed: "さんぶぎょう",
        },
        {
            plain: "勘定奉行",
            parsed: "かんじょうぶぎょう",
        },
        {
            plain: "天領奉行",
            parsed: "てんりょうぶぎょう",
        },
        {
            plain: "終末番",
            parsed: "しゅうまつばん",
        },
        {
            plain: "幕府",
            parsed: "ばくふ",
        },
        {
            plain: "抵抗軍",
            parsed: "ていこうぐん",
        },
        {
            plain: "荒瀧派",
            parsed: "あらたきは",
        },
        {
            plain: "魔神任務",
            parsed: "まじんにんむ",
        },
        {
            plain: "望まれない供犠",
            parsed: "のぞまれないくぎ",
        },
        {
            plain: "信者のない使徒",
            parsed: "しんじゃのないしと",
        },
        {
            plain: "誇りのない試練",
            parsed: "ほこりのないしれん",
        },
        {
            plain: "隔たりのある魂",
            parsed: "へだたりのあるたましい",
        },
        {
            plain: "塵歌壺",
            parsed: "じんかつぼ",
        },
        {
            plain: "種の匣",
            parsed: "たねのはこ",
        },
        {
            plain: "仙速瓶",
            parsed: "せんそくびん",
        },
        {
            plain: "マル",
            parsed: "マル",
        },
        {
            plain: "ウル",
            parsed: "ウル",
        },
        {
            plain: "周遊百貨",
            parsed: "しゅうゆうひゃっか",
        },
        {
            plain: "周遊する壺の精霊",
            parsed: "しゅうゆうするつぼのせいれい",
        },
        {
            plain: "洞天宝銭",
            parsed: "どうてんほうせん",
        },
        {
            plain: "調度品",
            parsed: "ちょうどひん",
        },
        {
            plain: "青色の染料",
            parsed: "あおいろのせんりょう",
        },
        {
            plain: "黄色の染料",
            parsed: "きいろのせんりょう",
        },
        {
            plain: "赤色の染料",
            parsed: "あかいろのせんりょう",
        },
        {
            plain: "布材",
            parsed: "ぬのざい",
        },
        {
            plain: "夢見材",
            parsed: "ゆめみざい",
        },
        {
            plain: "楓材",
            parsed: "かえでざい",
        },
        {
            plain: "孔雀材",
            parsed: "くじゃくざい",
        },
        {
            plain: "御伽材",
            parsed: "おとぎざい",
        },
        {
            plain: "神の目",
            parsed: "かみのめ",
        },
        {
            plain: "神の心",
            parsed: "かみのこころ",
        },
        {
            plain: "魔神戦争",
            parsed: "まじんせんそう",
        },
        {
            plain: "非常食",
            parsed: "ひじょうしょく",
        },
        {
            plain: "摩耗する",
            parsed: "まもうする",
        },
        {
            plain: "神の眼差し",
            parsed: "かみのまなざし",
        },
        {
            plain: "自由",
            parsed: "じゆう",
        },
        {
            plain: "契約",
            parsed: "けいやく",
        },
        {
            plain: "永遠",
            parsed: "えいえん",
        },
        {
            plain: "知恵",
            parsed: "ちえ",
        },
        {
            plain: "天空のライアー",
            parsed: "てんくうのライアー",
        },
        {
            plain: "バドルドー祭",
            parsed: "バドルドーさい",
        },
        {
            plain: "蒲公英酒",
            parsed: "ダンデライオンしゅ",
        },
        {
            plain: "迎仙儀式",
            parsed: "げいせんぎしき",
        },
        {
            plain: "送仙儀式",
            parsed: "そうせんぎしき",
        },
        {
            plain: "仙祖の亡骸",
            parsed: "せんぞのなきがら",
        },
        {
            plain: "業障",
            parsed: "ごっしょう",
        },
        {
            plain: "ココナッツヒツジ",
            parsed: "ココナッツヒツジ",
        },
        {
            plain: "璃菜",
            parsed: "りーさい",
        },
        {
            plain: "月菜",
            parsed: "ゆえさい",
        },
        {
            plain: "昇空儀式",
            parsed: "しょうくうぎしき",
        },
        {
            plain: "神女劈観",
            parsed: "しんにょへきかん",
        },
        {
            plain: "浮生の石",
            parsed: "ふじょうのいし",
        },
        {
            plain: "鳴霞浮生石",
            parsed: "めいかふじょういし",
        },
        {
            plain: "千奇核心",
            parsed: "せんきかくしん",
        },
        {
            plain: "仙家呪符",
            parsed: "せんかじゅふ",
        },
        {
            plain: "南十字武闘会",
            parsed: "みなみじゅうじぶとうかい",
        },
        {
            plain: "目狩り令",
            parsed: "めがりれい",
        },
        {
            plain: "無想の一太刀",
            parsed: "むそうのひとたち",
        },
        {
            plain: "雷の三つ巴",
            parsed: "かみなりのみつどもえ",
        },
        {
            plain: "止まり木",
            parsed: "とまりぎ",
        },
        {
            plain: "マウシロ",
            parsed: "マウシロ",
        },
        {
            plain: "アーカーシャ",
            parsed: "アーカーシャ",
        },
        {
            plain: "黒災",
            parsed: "こくさい",
        },
        {
            plain: "天賦",
            parsed: "てんぷ",
        },
        {
            plain: "突破",
            parsed: "とっぱ",
        },
        {
            plain: "好感度",
            parsed: "こうかんど",
        },
        {
            plain: "元素",
            parsed: "げんそ",
        },
        {
            plain: "炎 (元素)",
            parsed: "ほのおげんそ",
        },
        {
            plain: "水 (元素)",
            parsed: "みずげんそ",
        },
        {
            plain: "草 (元素)",
            parsed: "くさげんそ",
        },
        {
            plain: "雷 (元素)",
            parsed: "かみなりげんそ",
        },
        {
            plain: "風 (元素)",
            parsed: "かぜげんそ",
        },
        {
            plain: "氷 (元素)",
            parsed: "こおりげんそ",
        },
        {
            plain: "岩 (元素)",
            parsed: "いわげんそ",
        },
        {
            plain: "物理",
            parsed: "ぶつり",
        },
        {
            plain: "元素反応",
            parsed: "げんそはんのう",
        },
        {
            plain: "過負荷",
            parsed: "かふか",
        },
        {
            plain: "燃焼",
            parsed: "ねんしょう",
        },
        {
            plain: "結晶 (化)",
            parsed: "けっしょうか",
        },
        {
            plain: "感電",
            parsed: "かんでん",
        },
        {
            plain: "凍結",
            parsed: "とうけつ",
        },
        {
            plain: "溶解",
            parsed: "ようかい",
        },
        {
            plain: "超電導",
            parsed: "ちょうでんどう",
        },
        {
            plain: "拡散",
            parsed: "かくさん",
        },
        {
            plain: "蒸発",
            parsed: "じょうはつ",
        },
        {
            plain: "開花",
            parsed: "かいか",
        },
        {
            plain: "激化",
            parsed: "げきか",
        },
        {
            plain: "元素スキル",
            parsed: "げんそスキル",
        },
        {
            plain: "元素爆発",
            parsed: "げんそばくはつ",
        },
        {
            plain: "元素シールド",
            parsed: "げんそシールド",
        },
        {
            plain: "元素共鳴",
            parsed: "げんそきょうめい",
        },
        {
            plain: "元素熟知",
            parsed: "げんそじゅくち",
        },
        {
            plain: "元素視覚",
            parsed: "げんそしかく",
        },
        {
            plain: "攻撃力",
            parsed: "こうげきりょく",
        },
        {
            plain: "防御力",
            parsed: "ぼうぎょりょく",
        },
        {
            plain: "会心率",
            parsed: "かいしんりつ",
        },
        {
            plain: "元素チャージ効率",
            parsed: "げんそチャージこうりつ",
        },
        {
            plain: "ダメージ",
            parsed: "ダメージ",
        },
        {
            plain: "重撃",
            parsed: "じゅうげき",
        },
        {
            plain: "落下攻撃",
            parsed: "らっかこうげき",
        },
        {
            plain: "精錬ランク",
            parsed: "せいれんランク",
        },
        {
            plain: "命定値",
            parsed: "めいていち",
        },
        {
            plain: "(ガチャを) 引く",
            parsed: "ひく",
        },
        {
            plain: "マルチプレイ",
            parsed: "マルチプレイ",
        },
        {
            plain: "アチーブメント",
            parsed: "アチーブメント",
        },
        {
            plain: "天空紀行",
            parsed: "てんくうきこう",
        },
        {
            plain: "探索度",
            parsed: "たんさくど",
        },
        {
            plain: "報酬",
            parsed: "ほうしゅう",
        },
        {
            plain: "合成する",
            parsed: "ごうせいする",
        },
        {
            plain: "雷禍",
            parsed: "らいか",
        },
        {
            plain: "白夜",
            parsed: "びゃくや",
        },
        {
            plain: "片手剣",
            parsed: "かたてけん",
        },
        {
            plain: "両手剣",
            parsed: "りょうてけん",
        },
        {
            plain: "長柄武器",
            parsed: "ながえぶき",
        },
        {
            plain: "弓",
            parsed: "ゆみ",
        },
        {
            plain: "法器",
            parsed: "ほうき",
        },
        {
            plain: "無鋒の剣",
            parsed: "むほうのけん",
        },
        {
            plain: "銀の剣",
            parsed: "ぎんのけん",
        },
        {
            plain: "冷刃",
            parsed: "れいじん",
        },
        {
            plain: "黎明の神剣",
            parsed: "れいめいのしんけん",
        },
        {
            plain: "旅道の剣",
            parsed: "りょどうのけん",
        },
        {
            plain: "チ虎魚の刀",
            parsed: "チこぎょのかたな",
        },
        {
            plain: "飛天御剣",
            parsed: "ひてんみつるぎ",
        },
        {
            plain: "西風剣",
            parsed: "セピュロスソード",
        },
        {
            plain: "笛の剣",
            parsed: "ふえのけん",
        },
        {
            plain: "祭礼の剣",
            parsed: "さいれいのけん",
        },
        {
            plain: "旧貴族長剣",
            parsed: "きゅうきぞくちょうけん",
        },
        {
            plain: "斬岩・試作",
            parsed: "ざんがんしさく",
        },
        {
            plain: "鉄蜂の刺し",
            parsed: "てつほうのさし",
        },
        {
            plain: "黒岩の長剣",
            parsed: "こくがんのちょうけん",
        },
        {
            plain: "黒剣",
            parsed: "こっけん",
        },
        {
            plain: "降臨の剣",
            parsed: "こうりんのけん",
        },
        {
            plain: "ダークアレイの閃光",
            parsed: "ダークアレイのせんこう",
        },
        {
            plain: "天目影打",
            parsed: "あめのまかげうち",
        },
        {
            plain: "シナバースピンドル",
            parsed: "シナバースピンドル",
        },
        {
            plain: "風鷹剣",
            parsed: "ふうようけん",
        },
        {
            plain: "天空の刃",
            parsed: "てんくうのやいば",
        },
        {
            plain: "磐岩結緑",
            parsed: "ばんがんけつりょく",
        },
        {
            plain: "訓練用大剣",
            parsed: "くんれんようたいけん",
        },
        {
            plain: "傭兵の重剣",
            parsed: "ようへいのじゅうけん",
        },
        {
            plain: "白鉄の大剣",
            parsed: "はくてつのたいけん",
        },
        {
            plain: "理屈責め",
            parsed: "りくつぜめ",
        },
        {
            plain: "飛天大御剣",
            parsed: "ひてんおおみつるぎ",
        },
        {
            plain: "西風大剣",
            parsed: "セピュロスグレートソード",
        },
        {
            plain: "鐘の剣",
            parsed: "かねのけん",
        },
        {
            plain: "祭礼の大剣",
            parsed: "さいれいのたいけん",
        },
        {
            plain: "旧貴族大剣",
            parsed: "きゅうきぞくたいけん",
        },
        {
            plain: "雨裁",
            parsed: "うさい",
        },
        {
            plain: "古華・試作",
            parsed: "こかしさく",
        },
        {
            plain: "白影の剣",
            parsed: "はくえいのけん",
        },
        {
            plain: "黒岩の斬刀",
            parsed: "こくがんのざんとう",
        },
        {
            plain: "螭龍の剣",
            parsed: "ちりゅうのけん",
        },
        {
            plain: "雪葬の星銀",
            parsed: "せっそうのせいぎん",
        },
        {
            plain: "千岩古剣",
            parsed: "せんがんこけん",
        },
        {
            plain: "桂木斬長正",
            parsed: "かつらぎきりながまさ",
        },
        {
            plain: "天空の傲",
            parsed: "てんくうのおごり",
        },
        {
            plain: "狼の末路",
            parsed: "おおかみのまつろ",
        },
        {
            plain: "新米の長槍",
            parsed: "しんまいのながやり",
        },
        {
            plain: "白纓槍",
            parsed: "はくえいそう",
        },
        {
            plain: "黒纓槍",
            parsed: "こくえいそう",
        },
        {
            plain: "匣中滅龍",
            parsed: "こうちゅうめつりゅう",
        },
        {
            plain: "星鎌・試作",
            parsed: "ほしがましさく",
        },
        {
            plain: "流月の針",
            parsed: "りゅうげつのはり",
        },
        {
            plain: "黒岩の突槍",
            parsed: "こくがんのとっそう",
        },
        {
            plain: "死闘の槍",
            parsed: "しとうのやり",
        },
        {
            plain: "西風長槍",
            parsed: "セピュロスながやり",
        },
        {
            plain: "旧貴族猟槍",
            parsed: "きゅうきぞくりょうそう",
        },
        {
            plain: "ドラゴンスピア",
            parsed: "ドラゴンスピア",
        },
        {
            plain: "喜多院十文字槍",
            parsed: "きたいんじゅうもんじやり",
        },
        {
            plain: "斬波のひれ長",
            parsed: "ざんぱのひれなが",
        },
        {
            plain: "和璞鳶",
            parsed: "わはくえん",
        },
        {
            plain: "息災",
            parsed: "そくさい",
        },
        {
            plain: "狩猟弓",
            parsed: "しゅりょうゆみ",
        },
        {
            plain: "歴戦の狩猟弓",
            parsed: "れきせんのしゅりょうゆみ",
        },
        {
            plain: "鴉羽の弓",
            parsed: "からすばのゆみ",
        },
        {
            plain: "シャープシューターの誓い",
            parsed: "シャープシューターのちかい",
        },
        {
            plain: "リカーブボウ",
            parsed: "リカーブボウ",
        },
        {
            plain: "弾弓",
            parsed: "だんきゅう",
        },
        {
            plain: "文使い",
            parsed: "ふみつかい",
        },
        {
            plain: "西風猟弓",
            parsed: "セピュロスアロー",
        },
        {
            plain: "絶弦",
            parsed: "ぜつげん",
        },
        {
            plain: "祭礼の弓",
            parsed: "さいれいのゆみ",
        },
        {
            plain: "旧貴族長弓",
            parsed: "きゅうきぞくちょうきゅう",
        },
        {
            plain: "リングボウ",
            parsed: "リングボウ",
        },
        {
            plain: "黒岩の戦弓",
            parsed: "こくがんのせんきゅう",
        },
        {
            plain: "ダークアレイの狩人",
            parsed: "ダークアレイのかりうど",
        },
        {
            plain: "幽夜のワルツ",
            parsed: "ゆうやのワルツ",
        },
        {
            plain: "破魔の弓",
            parsed: "はまのゆみ",
        },
        {
            plain: "落霞",
            parsed: "らっか",
        },
        {
            plain: "天空の翼",
            parsed: "てんくうのつばさ",
        },
        {
            plain: "アモスの弓",
            parsed: "アモスのゆみ",
        },
        {
            plain: "飛雷の鳴弦",
            parsed: "ひらいのめいげん",
        },
        {
            plain: "生徒ノート",
            parsed: "せいとノート",
        },
        {
            plain: "ポケット魔導書",
            parsed: "ポケットまどうしょ",
        },
        {
            plain: "魔導緒論",
            parsed: "まどうしょろん",
        },
        {
            plain: "龍殺しの英傑譚",
            parsed: "りゅうごろしのえいけつたん",
        },
        {
            plain: "異世界旅行記",
            parsed: "いせかいりょこうき",
        },
        {
            plain: "翡玉法珠",
            parsed: "ひぎょくほうじゅ",
        },
        {
            plain: "西風秘典",
            parsed: "セピュロスコデックス",
        },
        {
            plain: "流浪楽章",
            parsed: "るろうがくしょう",
        },
        {
            plain: "祭礼の断片",
            parsed: "さいれいのだんぺん",
        },
        {
            plain: "旧貴族秘法録",
            parsed: "きゅうきぞくひほうろく",
        },
        {
            plain: "万国諸海の図譜",
            parsed: "ばんこくしょかいのずふ",
        },
        {
            plain: "黒岩の緋玉",
            parsed: "こくがんのひぎょく",
        },
        {
            plain: "昭心",
            parsed: "しょうしん",
        },
        {
            plain: "冬忍びの実",
            parsed: "ふゆしのびのみ",
        },
        {
            plain: "ダークアレイの酒と詩",
            parsed: "ダークアレイのさけとうた",
        },
        {
            plain: "ドドコの物語",
            parsed: "ドドコのものがたり",
        },
        {
            plain: "白辰の輪",
            parsed: "はくしんのわ",
        },
        {
            plain: "四風原典",
            parsed: "しふうげんてん",
        },
        {
            plain: "不滅の月華",
            parsed: "ふめつのげっか",
        },
        {
            plain: "神楽の真意",
            parsed: "かぐらのしんい",
        },
        {
            plain: "御建鳴神主尊大御所様像",
            parsed: "みたけなるかみぬしのみことおおごしょさまぞう",
        },
    ],
};
