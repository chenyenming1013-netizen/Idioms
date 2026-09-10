// 成語資料：每段文字都是 [國字, 注音]，注音以空白分隔，一個字對應一組。
// 標點符號不需要注音。「一」「不」依教育部辭典標本調。
window.IDIOMS = [
{
  id: 'shan-zhen-hai-wei', cat: '食物飲食',
  word: ['山珍海味', 'ㄕㄢ ㄓㄣ ㄏㄞˇ ㄨㄟˋ'],
  keys: [
    { k: ['珍', 'ㄓㄣ'], v: ['珍貴的東西', 'ㄓㄣ ㄍㄨㄟˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙'] },
    { k: ['味', 'ㄨㄟˋ'], v: ['美味的食物', 'ㄇㄟˇ ㄨㄟˋ ㄉㄜ˙ ㄕˊ ㄨˋ'] }
  ],
  meaning: ['山上和海裡的珍貴食物，用來形容非常豐盛的菜餚。', 'ㄕㄢ ㄕㄤˋ ㄏㄜˊ ㄏㄞˇ ㄌㄧˇ ㄉㄜ˙ ㄓㄣ ㄍㄨㄟˋ ㄕˊ ㄨˋ ㄩㄥˋ ㄌㄞˊ ㄒㄧㄥˊ ㄖㄨㄥˊ ㄈㄟ ㄔㄤˊ ㄈㄥ ㄕㄥˋ ㄉㄜ˙ ㄘㄞˋ ㄧㄠˊ'],
  source: {
    book: ['唐・韋應物〈長安道〉', 'ㄊㄤˊ ㄨㄟˊ ㄧㄥˋ ㄨˋ ㄔㄤˊ ㄢ ㄉㄠˋ'],
    story: [
      ['唐朝詩人韋應物寫了〈長安道〉這首詩，描寫長安城裡有錢人的生活非常奢華。', 'ㄊㄤˊ ㄔㄠˊ ㄕ ㄖㄣˊ ㄨㄟˊ ㄧㄥˋ ㄨˋ ㄒㄧㄝˇ ㄌㄜ˙ ㄔㄤˊ ㄢ ㄉㄠˋ ㄓㄜˋ ㄕㄡˇ ㄕ ㄇㄧㄠˊ ㄒㄧㄝˇ ㄔㄤˊ ㄢ ㄔㄥˊ ㄌㄧˇ ㄧㄡˇ ㄑㄧㄢˊ ㄖㄣˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄈㄟ ㄔㄤˊ ㄕㄜ ㄏㄨㄚˊ'],
      ['「海錯」就是各式各樣的海產。', 'ㄏㄞˇ ㄘㄨㄛˋ ㄐㄧㄡˋ ㄕˋ ㄍㄜˋ ㄕˋ ㄍㄜˋ ㄧㄤˋ ㄉㄜ˙ ㄏㄞˇ ㄔㄢˇ'],
      ['後來慢慢變成了「山珍海味」。', 'ㄏㄡˋ ㄌㄞˊ ㄇㄢˋ ㄇㄢˋ ㄅㄧㄢˋ ㄔㄥˊ ㄌㄜ˙ ㄕㄢ ㄓㄣ ㄏㄞˇ ㄨㄟˋ']
    ],
    quote: ['山珍海錯棄藩籬', 'ㄕㄢ ㄓㄣ ㄏㄞˇ ㄘㄨㄛˋ ㄑㄧˋ ㄈㄢ ㄌㄧˊ'],
    quoteNote: ['珍貴的食物多到被丟在籬笆旁邊！', 'ㄓㄣ ㄍㄨㄟˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄉㄨㄛ ㄉㄠˋ ㄅㄟˋ ㄉㄧㄡ ㄗㄞˋ ㄌㄧˊ ㄅㄚ ㄆㄤˊ ㄅㄧㄢ']
  },
  example: [
    ['過年時，奶奶煮了滿桌的', 'ㄍㄨㄛˋ ㄋㄧㄢˊ ㄕˊ ㄋㄞˇ ㄋㄞ˙ ㄓㄨˇ ㄌㄜ˙ ㄇㄢˇ ㄓㄨㄛ ㄉㄜ˙'],
    ['山珍海味', 'ㄕㄢ ㄓㄣ ㄏㄞˇ ㄨㄟˋ', true],
    ['，全家人吃得好開心！', 'ㄑㄩㄢˊ ㄐㄧㄚ ㄖㄣˊ ㄔ ㄉㄜ˙ ㄏㄠˇ ㄎㄞ ㄒㄧㄣ']
  ],
  syn: [['美味佳餚', 'ㄇㄟˇ ㄨㄟˋ ㄐㄧㄚ ㄧㄠˊ']],
  ant: [['粗茶淡飯', 'ㄘㄨ ㄔㄚˊ ㄉㄢˋ ㄈㄢˋ']],
  quiz: {
    before: ['生日那天，餐廳端出滿桌的', 'ㄕㄥ ㄖˋ ㄋㄚˋ ㄊㄧㄢ ㄘㄢ ㄊㄧㄥ ㄉㄨㄢ ㄔㄨ ㄇㄢˇ ㄓㄨㄛ ㄉㄜ˙'],
    after: ['，有魚、有蝦，還有香菇雞湯。', 'ㄧㄡˇ ㄩˊ ㄧㄡˇ ㄒㄧㄚ ㄏㄞˊ ㄧㄡˇ ㄒㄧㄤ ㄍㄨ ㄐㄧ ㄊㄤ'],
    options: ['山珍海味', '粗茶淡飯'], answer: '山珍海味'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="140" height="150" fill="#E3F1FB"/><polygon points="0,112 50,45 100,112" fill="#97C459"/><polygon points="45,112 95,35 145,112" fill="#639922"/><rect y="108" width="140" height="42" fill="#C0DD97"/><rect x="30" y="120" width="9" height="16" rx="3" fill="#F6F1E4"/><path d="M20,124 Q34,102 49,124Z" fill="#D85A30"/><circle cx="30" cy="116" r="2.3" fill="#fff"/><circle cx="39" cy="113" r="1.8" fill="#fff"/><path d="M88,142 L100,104 L112,142Z" fill="#BA7517"/><path d="M91,132H109M95,120H105" stroke="#854F0B" stroke-width="1.5"/><rect x="140" width="140" height="150" fill="#E3F1FB"/><path d="M140,26 Q157,18 175,26 T210,26 T245,26 T280,26 V150 H140Z" fill="#85B7EB"/><path d="M140,128 Q180,118 210,128 T280,128 V150 H140Z" fill="#FAC775"/><polygon points="168,64 156,54 156,74" fill="#EF9F27"/><ellipse cx="186" cy="64" rx="20" ry="11" fill="#EF9F27"/><circle cx="197" cy="61" r="2.3" fill="#2C2C2A"/><circle cx="214" cy="48" r="3" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="220" cy="38" r="2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M227,124 L218,132 M229,128 L221,136 M253,124 L262,132 M251,128 L259,136" stroke="#A32D2D" stroke-width="2" stroke-linecap="round"/><path d="M232,116 L225,108 M248,116 L255,108" stroke="#E24B4A" stroke-width="3" stroke-linecap="round"/><circle cx="223" cy="105" r="5.5" fill="#E24B4A"/><circle cx="257" cy="105" r="5.5" fill="#E24B4A"/><ellipse cx="240" cy="122" rx="15" ry="9" fill="#E24B4A"/><circle cx="235" cy="113" r="2.2" fill="#2C2C2A"/><circle cx="245" cy="113" r="2.2" fill="#2C2C2A"/></svg>`
},
{
  id: 'hu-jia-hu-wei', cat: '動物',
  word: ['狐假虎威', 'ㄏㄨˊ ㄐㄧㄚˇ ㄏㄨˇ ㄨㄟ'],
  keys: [
    { k: ['假', 'ㄐㄧㄚˇ'], v: ['借用', 'ㄐㄧㄝˋ ㄩㄥˋ'] },
    { k: ['威', 'ㄨㄟ'], v: ['威風', 'ㄨㄟ ㄈㄥ'] }
  ],
  meaning: ['比喻借別人的力量來嚇人、欺負人。', 'ㄅㄧˇ ㄩˋ ㄐㄧㄝˋ ㄅㄧㄝˊ ㄖㄣˊ ㄉㄜ˙ ㄌㄧˋ ㄌㄧㄤˋ ㄌㄞˊ ㄒㄧㄚˋ ㄖㄣˊ ㄑㄧ ㄈㄨˋ ㄖㄣˊ'],
  source: {
    book: ['《戰國策・楚策》', 'ㄓㄢˋ ㄍㄨㄛˊ ㄘㄜˋ ㄔㄨˇ ㄘㄜˋ'],
    story: [
      ['老虎抓到狐狸，狐狸說：「天帝派我當百獸之王，你敢吃我嗎？」', 'ㄌㄠˇ ㄏㄨˇ ㄓㄨㄚ ㄉㄠˋ ㄏㄨˊ ㄌㄧ˙ ㄏㄨˊ ㄌㄧ˙ ㄕㄨㄛ ㄊㄧㄢ ㄉㄧˋ ㄆㄞˋ ㄨㄛˇ ㄉㄤ ㄅㄞˇ ㄕㄡˋ ㄓ ㄨㄤˊ ㄋㄧˇ ㄍㄢˇ ㄔ ㄨㄛˇ ㄇㄚ˙'],
      ['老虎跟在狐狸後面走，動物們看到都嚇得逃跑了。', 'ㄌㄠˇ ㄏㄨˇ ㄍㄣ ㄗㄞˋ ㄏㄨˊ ㄌㄧ˙ ㄏㄡˋ ㄇㄧㄢˋ ㄗㄡˇ ㄉㄨㄥˋ ㄨˋ ㄇㄣ˙ ㄎㄢˋ ㄉㄠˋ ㄉㄡ ㄒㄧㄚˋ ㄉㄜ˙ ㄊㄠˊ ㄆㄠˇ ㄌㄜ˙'],
      ['其實動物們怕的是後面的老虎呀！', 'ㄑㄧˊ ㄕˊ ㄉㄨㄥˋ ㄨˋ ㄇㄣ˙ ㄆㄚˋ ㄉㄜ˙ ㄕˋ ㄏㄡˋ ㄇㄧㄢˋ ㄉㄜ˙ ㄌㄠˇ ㄏㄨˇ ㄧㄚ˙']
    ]
  },
  example: [
    ['他仗著哥哥是班長，就', 'ㄊㄚ ㄓㄤˋ ㄓㄜ˙ ㄍㄜ ㄍㄜ˙ ㄕˋ ㄅㄢ ㄓㄤˇ ㄐㄧㄡˋ'],
    ['狐假虎威', 'ㄏㄨˊ ㄐㄧㄚˇ ㄏㄨˇ ㄨㄟ', true],
    ['地命令大家。', 'ㄉㄜ˙ ㄇㄧㄥˋ ㄌㄧㄥˋ ㄉㄚˋ ㄐㄧㄚ']
  ],
  syn: [['仗勢欺人', 'ㄓㄤˋ ㄕˋ ㄑㄧ ㄖㄣˊ']],
  ant: [],
  quiz: {
    before: ['阿強借爸爸的名號到處嚇人，真是', 'ㄚ ㄑㄧㄤˊ ㄐㄧㄝˋ ㄅㄚˋ ㄅㄚ˙ ㄉㄜ˙ ㄇㄧㄥˊ ㄏㄠˋ ㄉㄠˋ ㄔㄨˋ ㄒㄧㄚˋ ㄖㄣˊ ㄓㄣ ㄕˋ'],
    after: ['。', ''],
    options: ['狐假虎威', '守株待兔'], answer: '狐假虎威'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#FBF3E4"/><circle cx="40" cy="30" r="12" fill="#FAC775"/><rect y="122" width="280" height="28" fill="#C0DD97"/><path d="M240,98 Q258,90 254,74" stroke="#EF9F27" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="170" y="110" width="8" height="16" fill="#EF9F27"/><rect x="222" y="110" width="8" height="16" fill="#EF9F27"/><ellipse cx="200" cy="100" rx="40" ry="21" fill="#EF9F27"/><path d="M190,81 q-4,10 0,20 M205,80 q-4,11 0,21 M220,83 q-4,9 0,18" stroke="#633806" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="146" cy="70" r="5" fill="#EF9F27"/><circle cx="170" cy="70" r="5" fill="#EF9F27"/><circle cx="158" cy="86" r="18" fill="#EF9F27"/><path d="M154,72 v6 M158,70 v8 M162,72 v6" stroke="#633806" stroke-width="2" stroke-linecap="round"/><circle cx="152" cy="84" r="2" fill="#2C2C2A"/><circle cx="164" cy="84" r="2" fill="#2C2C2A"/><ellipse cx="158" cy="93" rx="3" ry="2" fill="#633806"/><rect x="74" y="114" width="5" height="12" fill="#993C1D"/><rect x="102" y="114" width="5" height="12" fill="#993C1D"/><ellipse cx="118" cy="100" rx="16" ry="7" fill="#D85A30" transform="rotate(-25 118 100)"/><circle cx="131" cy="94" r="4" fill="#FFF5EC"/><ellipse cx="90" cy="110" rx="22" ry="10" fill="#D85A30"/><polygon points="60,92 58,79 67,89" fill="#D85A30"/><polygon points="66,90 72,79 74,93" fill="#D85A30"/><circle cx="66" cy="100" r="10" fill="#D85A30"/><polygon points="60,97 46,103 60,106" fill="#D85A30"/><circle cx="46" cy="103" r="1.8" fill="#2C2C2A"/><circle cx="62" cy="98" r="1.6" fill="#2C2C2A"/><ellipse cx="73" cy="108" rx="5" ry="4" fill="#FFF5EC"/><ellipse cx="14" cy="101" rx="2" ry="6" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/><ellipse cx="19" cy="100" rx="2" ry="6" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/><ellipse cx="24" cy="118" rx="9" ry="6" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/><circle cx="16" cy="112" r="5" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/><path d="M34,110 H42 M36,118 H44" stroke="#888780" stroke-width="1.5" stroke-linecap="round"/></svg>`
},
{
  id: 'hua-she-tian-zu', cat: '動物',
  word: ['畫蛇添足', 'ㄏㄨㄚˋ ㄕㄜˊ ㄊㄧㄢ ㄗㄨˊ'],
  keys: [
    { k: ['添', 'ㄊㄧㄢ'], v: ['加上', 'ㄐㄧㄚ ㄕㄤˋ'] },
    { k: ['足', 'ㄗㄨˊ'], v: ['腳', 'ㄐㄧㄠˇ'] }
  ],
  meaning: ['比喻做了多餘的事，反而把事情弄壞了。', 'ㄅㄧˇ ㄩˋ ㄗㄨㄛˋ ㄌㄜ˙ ㄉㄨㄛ ㄩˊ ㄉㄜ˙ ㄕˋ ㄈㄢˇ ㄦˊ ㄅㄚˇ ㄕˋ ㄑㄧㄥˊ ㄋㄨㄥˋ ㄏㄨㄞˋ ㄌㄜ˙'],
  source: {
    book: ['《戰國策・齊策》', 'ㄓㄢˋ ㄍㄨㄛˊ ㄘㄜˋ ㄑㄧˊ ㄘㄜˋ'],
    story: [
      ['楚國幾位僕人要分酒喝，但是酒太少了，他們決定比賽畫蛇，誰先畫好，酒就給誰喝。', 'ㄔㄨˇ ㄍㄨㄛˊ ㄐㄧˇ ㄨㄟˋ ㄆㄨˊ ㄖㄣˊ ㄧㄠˋ ㄈㄣ ㄐㄧㄡˇ ㄏㄜ ㄉㄢˋ ㄕˋ ㄐㄧㄡˇ ㄊㄞˋ ㄕㄠˇ ㄌㄜ˙ ㄊㄚ ㄇㄣ˙ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄅㄧˇ ㄙㄞˋ ㄏㄨㄚˋ ㄕㄜˊ ㄕㄟˊ ㄒㄧㄢ ㄏㄨㄚˋ ㄏㄠˇ ㄐㄧㄡˇ ㄐㄧㄡˋ ㄍㄟˇ ㄕㄟˊ ㄏㄜ'],
      ['有人最先畫好，得意地說：「我還能幫蛇畫腳呢！」', 'ㄧㄡˇ ㄖㄣˊ ㄗㄨㄟˋ ㄒㄧㄢ ㄏㄨㄚˋ ㄏㄠˇ ㄉㄜˊ ㄧˋ ㄉㄜ˙ ㄕㄨㄛ ㄨㄛˇ ㄏㄞˊ ㄋㄥˊ ㄅㄤ ㄕㄜˊ ㄏㄨㄚˋ ㄐㄧㄠˇ ㄋㄜ˙'],
      ['腳還沒畫完，別人的蛇已經畫好了，酒就被搶走了。', 'ㄐㄧㄠˇ ㄏㄞˊ ㄇㄟˊ ㄏㄨㄚˋ ㄨㄢˊ ㄅㄧㄝˊ ㄖㄣˊ ㄉㄜ˙ ㄕㄜˊ ㄧˇ ㄐㄧㄥ ㄏㄨㄚˋ ㄏㄠˇ ㄌㄜ˙ ㄐㄧㄡˇ ㄐㄧㄡˋ ㄅㄟˋ ㄑㄧㄤˇ ㄗㄡˇ ㄌㄜ˙']
    ],
    quote: ['蛇固無足，子安能為之足？', 'ㄕㄜˊ ㄍㄨˋ ㄨˊ ㄗㄨˊ ㄗˇ ㄢ ㄋㄥˊ ㄨㄟˊ ㄓ ㄗㄨˊ'],
    quoteNote: ['蛇本來就沒有腳，你怎麼能幫牠畫腳呢？', 'ㄕㄜˊ ㄅㄣˇ ㄌㄞˊ ㄐㄧㄡˋ ㄇㄟˊ ㄧㄡˇ ㄐㄧㄠˇ ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄋㄥˊ ㄅㄤ ㄊㄚ ㄏㄨㄚˋ ㄐㄧㄠˇ ㄋㄜ˙']
  },
  example: [
    ['這幅畫已經很美了，再多塗幾筆反而是', 'ㄓㄜˋ ㄈㄨˊ ㄏㄨㄚˋ ㄧˇ ㄐㄧㄥ ㄏㄣˇ ㄇㄟˇ ㄌㄜ˙ ㄗㄞˋ ㄉㄨㄛ ㄊㄨˊ ㄐㄧˇ ㄅㄧˇ ㄈㄢˇ ㄦˊ ㄕˋ'],
    ['畫蛇添足', 'ㄏㄨㄚˋ ㄕㄜˊ ㄊㄧㄢ ㄗㄨˊ', true],
    ['。', '']
  ],
  syn: [['多此一舉', 'ㄉㄨㄛ ㄘˇ ㄧ ㄐㄩˇ']],
  ant: [['畫龍點睛', 'ㄏㄨㄚˋ ㄌㄨㄥˊ ㄉㄧㄢˇ ㄐㄧㄥ']],
  quiz: {
    before: ['牛奶已經很甜了，你還加糖，真是', 'ㄋㄧㄡˊ ㄋㄞˇ ㄧˇ ㄐㄧㄥ ㄏㄣˇ ㄊㄧㄢˊ ㄌㄜ˙ ㄋㄧˇ ㄏㄞˊ ㄐㄧㄚ ㄊㄤˊ ㄓㄣ ㄕˋ'],
    after: ['。', ''],
    options: ['畫蛇添足', '井底之蛙'], answer: '畫蛇添足'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#FBF3E4"/><rect y="130" width="280" height="20" fill="#FAC775"/><rect x="24" y="28" width="168" height="100" rx="3" fill="#FFFFFF" stroke="#D3D1C7"/><path d="M50,95 C70,60 95,60 110,85 S150,110 170,70" stroke="#639922" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M76,74 l-3,12 M90,72 l3,12 M132,106 l-3,11 M146,104 l3,11" stroke="#3B6D11" stroke-width="3" stroke-linecap="round"/><circle cx="172" cy="66" r="8" fill="#639922"/><circle cx="175" cy="63" r="1.8" fill="#2C2C2A"/><path d="M180,65 l8,-3 M180,65 l7,3" stroke="#E24B4A" stroke-width="1.5" stroke-linecap="round"/><path d="M198,40 L204,104" stroke="#854F0B" stroke-width="4" stroke-linecap="round"/><path d="M200,102 Q204,122 208,102Z" fill="#2C2C2A"/><path d="M222,130 Q210,100 234,94 V86 H250 V94 Q274,100 262,130 Z" fill="#993C1D"/><rect x="230" y="80" width="24" height="7" rx="2" fill="#712B13"/><rect x="232" y="104" width="20" height="14" rx="2" fill="#FAEEDA"/></svg>`
},
{
  id: 'shou-zhu-dai-tu', cat: '動物',
  word: ['守株待兔', 'ㄕㄡˇ ㄓㄨ ㄉㄞˋ ㄊㄨˋ'],
  keys: [
    { k: ['株', 'ㄓㄨ'], v: ['樹樁', 'ㄕㄨˋ ㄓㄨㄤ'] },
    { k: ['待', 'ㄉㄞˋ'], v: ['等待', 'ㄉㄥˇ ㄉㄞˋ'] }
  ],
  meaning: ['比喻不努力，只想靠運氣得到好處。', 'ㄅㄧˇ ㄩˋ ㄅㄨˋ ㄋㄨˇ ㄌㄧˋ ㄓˇ ㄒㄧㄤˇ ㄎㄠˋ ㄩㄣˋ ㄑㄧˋ ㄉㄜˊ ㄉㄠˋ ㄏㄠˇ ㄔㄨˋ'],
  source: {
    book: ['《韓非子・五蠹》', 'ㄏㄢˊ ㄈㄟ ㄗˇ ㄨˇ ㄉㄨˋ'],
    story: [
      ['宋國有位農夫在田裡工作，忽然有隻兔子跑來，撞到樹樁死了。', 'ㄙㄨㄥˋ ㄍㄨㄛˊ ㄧㄡˇ ㄨㄟˋ ㄋㄨㄥˊ ㄈㄨ ㄗㄞˋ ㄊㄧㄢˊ ㄌㄧˇ ㄍㄨㄥ ㄗㄨㄛˋ ㄏㄨ ㄖㄢˊ ㄧㄡˇ ㄓ ㄊㄨˋ ㄗ˙ ㄆㄠˇ ㄌㄞˊ ㄓㄨㄤˋ ㄉㄠˋ ㄕㄨˋ ㄓㄨㄤ ㄙˇ ㄌㄜ˙'],
      ['農夫白白撿到兔子，就放下鋤頭，每天守在樹樁旁邊等兔子。', 'ㄋㄨㄥˊ ㄈㄨ ㄅㄞˊ ㄅㄞˊ ㄐㄧㄢˇ ㄉㄠˋ ㄊㄨˋ ㄗ˙ ㄐㄧㄡˋ ㄈㄤˋ ㄒㄧㄚˋ ㄔㄨˊ ㄊㄡ˙ ㄇㄟˇ ㄊㄧㄢ ㄕㄡˇ ㄗㄞˋ ㄕㄨˋ ㄓㄨㄤ ㄆㄤˊ ㄅㄧㄢ ㄉㄥˇ ㄊㄨˋ ㄗ˙'],
      ['結果兔子再也沒出現，田裡的農作物全都荒廢了。', 'ㄐㄧㄝˊ ㄍㄨㄛˇ ㄊㄨˋ ㄗ˙ ㄗㄞˋ ㄧㄝˇ ㄇㄟˊ ㄔㄨ ㄒㄧㄢˋ ㄊㄧㄢˊ ㄌㄧˇ ㄉㄜ˙ ㄋㄨㄥˊ ㄗㄨㄛˋ ㄨˋ ㄑㄩㄢˊ ㄉㄡ ㄏㄨㄤ ㄈㄟˋ ㄌㄜ˙']
    ],
    quote: ['因釋其耒而守株，冀復得兔', 'ㄧㄣ ㄕˋ ㄑㄧˊ ㄌㄟˇ ㄦˊ ㄕㄡˇ ㄓㄨ ㄐㄧˋ ㄈㄨˋ ㄉㄜˊ ㄊㄨˋ'],
    quoteNote: ['他放下農具守著樹樁，希望再撿到兔子。', 'ㄊㄚ ㄈㄤˋ ㄒㄧㄚˋ ㄋㄨㄥˊ ㄐㄩˋ ㄕㄡˇ ㄓㄜ˙ ㄕㄨˋ ㄓㄨㄤ ㄒㄧ ㄨㄤˋ ㄗㄞˋ ㄐㄧㄢˇ ㄉㄠˋ ㄊㄨˋ ㄗ˙']
  },
  example: [
    ['考試前不讀書，只希望題目剛好都會，這就是', 'ㄎㄠˇ ㄕˋ ㄑㄧㄢˊ ㄅㄨˋ ㄉㄨˊ ㄕㄨ ㄓˇ ㄒㄧ ㄨㄤˋ ㄊㄧˊ ㄇㄨˋ ㄍㄤ ㄏㄠˇ ㄉㄡ ㄏㄨㄟˋ ㄓㄜˋ ㄐㄧㄡˋ ㄕˋ'],
    ['守株待兔', 'ㄕㄡˇ ㄓㄨ ㄉㄞˋ ㄊㄨˋ', true],
    ['。', '']
  ],
  syn: [['不勞而獲', 'ㄅㄨˋ ㄌㄠˊ ㄦˊ ㄏㄨㄛˋ']],
  ant: [['腳踏實地', 'ㄐㄧㄠˇ ㄊㄚˋ ㄕˊ ㄉㄧˋ']],
  quiz: {
    before: ['想要成績進步就要用功，別', 'ㄒㄧㄤˇ ㄧㄠˋ ㄔㄥˊ ㄐㄧ ㄐㄧㄣˋ ㄅㄨˋ ㄐㄧㄡˋ ㄧㄠˋ ㄩㄥˋ ㄍㄨㄥ ㄅㄧㄝˊ'],
    after: ['。', ''],
    options: ['守株待兔', '亡羊補牢'], answer: '守株待兔'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#E3F1FB"/><ellipse cx="200" cy="30" rx="26" ry="9" fill="#FFFFFF"/><ellipse cx="220" cy="24" rx="16" ry="8" fill="#FFFFFF"/><rect y="98" width="280" height="52" fill="#C0DD97"/><path d="M0,112 H280 M0,128 H280 M0,144 H280" stroke="#97C459" stroke-width="1.5"/><path d="M28,128 L110,120" stroke="#854F0B" stroke-width="3" stroke-linecap="round"/><polygon points="22,122 32,120 34,134 24,134" fill="#888780"/><path d="M56,112 Q58,86 70,86 Q82,86 84,112 Z" fill="#378ADD"/><circle cx="70" cy="76" r="9" fill="#F5C4B3"/><polygon points="50,72 70,58 90,72" fill="#FAC775" stroke="#BA7517" stroke-width="1"/><path d="M66,77 h2 M73,77 h2" stroke="#2C2C2A" stroke-width="1.5" stroke-linecap="round"/><rect x="150" y="92" width="30" height="30" fill="#854F0B"/><ellipse cx="165" cy="92" rx="15" ry="5" fill="#BA7517"/><ellipse cx="165" cy="92" rx="8" ry="2.6" fill="none" stroke="#854F0B" stroke-width="1"/><ellipse cx="202" cy="120" rx="14" ry="7" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/><circle cx="189" cy="116" r="6" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/><ellipse cx="190" cy="106" rx="2" ry="6" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8" transform="rotate(-20 190 106)"/><path d="M186,115 l3,3 M189,115 l-3,3" stroke="#2C2C2A" stroke-width="1.2"/><polygon points="184,96 186,100 190,100 187,103 188,107 184,105 180,107 181,103 178,100 182,100" fill="#EF9F27"/><polygon points="198,94 199.5,97 203,97 200.5,99 201.5,102 198,100.5 194.5,102 195.5,99 193,97 196.5,97" fill="#EF9F27"/></svg>`
},
{
  id: 'jing-di-zhi-wa', cat: '動物',
  word: ['井底之蛙', 'ㄐㄧㄥˇ ㄉㄧˇ ㄓ ㄨㄚ'],
  keys: [
    { k: ['之', 'ㄓ'], v: ['的', 'ㄉㄜ˙'] },
    { k: ['蛙', 'ㄨㄚ'], v: ['青蛙', 'ㄑㄧㄥ ㄨㄚ'] }
  ],
  meaning: ['比喻見識很少、眼光狹小的人。', 'ㄅㄧˇ ㄩˋ ㄐㄧㄢˋ ㄕˋ ㄏㄣˇ ㄕㄠˇ ㄧㄢˇ ㄍㄨㄤ ㄒㄧㄚˊ ㄒㄧㄠˇ ㄉㄜ˙ ㄖㄣˊ'],
  source: {
    book: ['《莊子・秋水》', 'ㄓㄨㄤ ㄗˇ ㄑㄧㄡ ㄕㄨㄟˇ'],
    story: [
      ['有隻青蛙住在廢井裡，覺得自己的生活快樂極了。', 'ㄧㄡˇ ㄓ ㄑㄧㄥ ㄨㄚ ㄓㄨˋ ㄗㄞˋ ㄈㄟˋ ㄐㄧㄥˇ ㄌㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄎㄨㄞˋ ㄌㄜˋ ㄐㄧˊ ㄌㄜ˙'],
      ['牠邀請東海的大鱉來參觀，大鱉的左腳還沒伸進去，右膝就卡住了。', 'ㄊㄚ ㄧㄠ ㄑㄧㄥˇ ㄉㄨㄥ ㄏㄞˇ ㄉㄜ˙ ㄉㄚˋ ㄅㄧㄝ ㄌㄞˊ ㄘㄢ ㄍㄨㄢ ㄉㄚˋ ㄅㄧㄝ ㄉㄜ˙ ㄗㄨㄛˇ ㄐㄧㄠˇ ㄏㄞˊ ㄇㄟˊ ㄕㄣ ㄐㄧㄣˋ ㄑㄩˋ ㄧㄡˋ ㄒㄧ ㄐㄧㄡˋ ㄎㄚˇ ㄓㄨˋ ㄌㄜ˙'],
      ['大鱉告訴青蛙大海有多寬、多深，青蛙聽了才知道自己見識太少。', 'ㄉㄚˋ ㄅㄧㄝ ㄍㄠˋ ㄙㄨˋ ㄑㄧㄥ ㄨㄚ ㄉㄚˋ ㄏㄞˇ ㄧㄡˇ ㄉㄨㄛ ㄎㄨㄢ ㄉㄨㄛ ㄕㄣ ㄑㄧㄥ ㄨㄚ ㄊㄧㄥ ㄌㄜ˙ ㄘㄞˊ ㄓ ㄉㄠˋ ㄗˋ ㄐㄧˇ ㄐㄧㄢˋ ㄕˋ ㄊㄞˋ ㄕㄠˇ']
    ],
    quote: ['井蛙不可以語於海者', 'ㄐㄧㄥˇ ㄨㄚ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄩˋ ㄩˊ ㄏㄞˇ ㄓㄜˇ'],
    quoteNote: ['沒辦法跟井裡的青蛙談大海。', 'ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄍㄣ ㄐㄧㄥˇ ㄌㄧˇ ㄉㄜ˙ ㄑㄧㄥ ㄨㄚ ㄊㄢˊ ㄉㄚˋ ㄏㄞˇ']
  },
  example: [
    ['多讀書、多旅行，可以讓我們避免成為', 'ㄉㄨㄛ ㄉㄨˊ ㄕㄨ ㄉㄨㄛ ㄌㄩˇ ㄒㄧㄥˊ ㄎㄜˇ ㄧˇ ㄖㄤˋ ㄨㄛˇ ㄇㄣ˙ ㄅㄧˋ ㄇㄧㄢˇ ㄔㄥˊ ㄨㄟˊ'],
    ['井底之蛙', 'ㄐㄧㄥˇ ㄉㄧˇ ㄓ ㄨㄚ', true],
    ['。', '']
  ],
  syn: [['坐井觀天', 'ㄗㄨㄛˋ ㄐㄧㄥˇ ㄍㄨㄢ ㄊㄧㄢ']],
  ant: [['見多識廣', 'ㄐㄧㄢˋ ㄉㄨㄛ ㄕˋ ㄍㄨㄤˇ']],
  quiz: {
    before: ['他以為學校就是全世界，真像', 'ㄊㄚ ㄧˇ ㄨㄟˊ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄐㄧㄡˋ ㄕˋ ㄑㄩㄢˊ ㄕˋ ㄐㄧㄝˋ ㄓㄣ ㄒㄧㄤˋ'],
    after: ['。', ''],
    options: ['井底之蛙', '狐假虎威'], answer: '井底之蛙'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#C9A27A"/><rect width="280" height="30" fill="#E3F1FB"/><circle cx="140" cy="14" r="8" fill="#FAC775"/><path d="M20,30 l-3,-7 M24,30 l0,-8 M28,30 l3,-7 M60,30 l-2,-6 M64,30 l2,-6" stroke="#639922" stroke-width="1.5" stroke-linecap="round"/><rect x="104" y="30" width="72" height="108" fill="#888780"/><rect x="113" y="30" width="54" height="108" fill="#444441"/><path d="M104,52 H113 M104,74 H113 M104,96 H113 M104,118 H113 M167,52 H176 M167,74 H176 M167,96 H176 M167,118 H176" stroke="#5F5E5A" stroke-width="1.5"/><rect x="113" y="122" width="54" height="16" fill="#378ADD"/><path d="M137,100 L128,34 M143,100 L152,34" stroke="#FAC775" stroke-width="1.2" stroke-dasharray="3 3"/><ellipse cx="140" cy="122" rx="15" ry="5" fill="#B4B2A9"/><ellipse cx="140" cy="112" rx="12" ry="8" fill="#97C459"/><circle cx="134" cy="104" r="4" fill="#97C459"/><circle cx="146" cy="104" r="4" fill="#97C459"/><circle cx="134" cy="103" r="1.6" fill="#2C2C2A"/><circle cx="146" cy="103" r="1.6" fill="#2C2C2A"/><path d="M136,113 Q140,116 144,113" stroke="#3B6D11" stroke-width="1.2" fill="none"/><ellipse cx="226" cy="23" rx="20" ry="9" fill="#3B6D11"/><path d="M212,23 H240 M218,17 L222,29 M232,17 L228,29" stroke="#27500A" stroke-width="1"/><circle cx="249" cy="25" r="4.5" fill="#639922"/><rect x="211" y="27" width="5" height="4" fill="#639922"/><rect x="236" y="27" width="5" height="4" fill="#639922"/></svg>`
},
{
  id: 'wang-yang-bu-lao', cat: '動物',
  word: ['亡羊補牢', 'ㄨㄤˊ ㄧㄤˊ ㄅㄨˇ ㄌㄠˊ'],
  keys: [
    { k: ['亡', 'ㄨㄤˊ'], v: ['丟失', 'ㄉㄧㄡ ㄕ'] },
    { k: ['牢', 'ㄌㄠˊ'], v: ['羊圈', 'ㄧㄤˊ ㄐㄩㄢˋ'] }
  ],
  meaning: ['比喻出了錯以後趕快補救，還來得及。', 'ㄅㄧˇ ㄩˋ ㄔㄨ ㄌㄜ˙ ㄘㄨㄛˋ ㄧˇ ㄏㄡˋ ㄍㄢˇ ㄎㄨㄞˋ ㄅㄨˇ ㄐㄧㄡˋ ㄏㄞˊ ㄌㄞˊ ㄉㄜ˙ ㄐㄧˊ'],
  source: {
    book: ['《戰國策・楚策》', 'ㄓㄢˋ ㄍㄨㄛˊ ㄘㄜˋ ㄔㄨˇ ㄘㄜˋ'],
    story: [
      ['這句話是莊辛勸楚王時說的，後人把它編成牧羊人的故事。', 'ㄓㄜˋ ㄐㄩˋ ㄏㄨㄚˋ ㄕˋ ㄓㄨㄤ ㄒㄧㄣ ㄑㄩㄢˋ ㄔㄨˇ ㄨㄤˊ ㄕˊ ㄕㄨㄛ ㄉㄜ˙ ㄏㄡˋ ㄖㄣˊ ㄅㄚˇ ㄊㄚ ㄅㄧㄢ ㄔㄥˊ ㄇㄨˋ ㄧㄤˊ ㄖㄣˊ ㄉㄜ˙ ㄍㄨˋ ㄕˋ'],
      ['有位牧羊人的羊圈破了洞，夜裡狼鑽進來叼走了羊。', 'ㄧㄡˇ ㄨㄟˋ ㄇㄨˋ ㄧㄤˊ ㄖㄣˊ ㄉㄜ˙ ㄧㄤˊ ㄐㄩㄢˋ ㄆㄛˋ ㄌㄜ˙ ㄉㄨㄥˋ ㄧㄝˋ ㄌㄧˇ ㄌㄤˊ ㄗㄨㄢ ㄐㄧㄣˋ ㄌㄞˊ ㄉㄧㄠ ㄗㄡˇ ㄌㄜ˙ ㄧㄤˊ'],
      ['鄰居勸他快修，他卻說羊都丟了，修也沒有用。', 'ㄌㄧㄣˊ ㄐㄩ ㄑㄩㄢˋ ㄊㄚ ㄎㄨㄞˋ ㄒㄧㄡ ㄊㄚ ㄑㄩㄝˋ ㄕㄨㄛ ㄧㄤˊ ㄉㄡ ㄉㄧㄡ ㄌㄜ˙ ㄒㄧㄡ ㄧㄝˇ ㄇㄟˊ ㄧㄡˇ ㄩㄥˋ'],
      ['隔天羊又少了，他趕快修好羊圈，從此再也沒丟過羊。', 'ㄍㄜˊ ㄊㄧㄢ ㄧㄤˊ ㄧㄡˋ ㄕㄠˇ ㄌㄜ˙ ㄊㄚ ㄍㄢˇ ㄎㄨㄞˋ ㄒㄧㄡ ㄏㄠˇ ㄧㄤˊ ㄐㄩㄢˋ ㄘㄨㄥˊ ㄘˇ ㄗㄞˋ ㄧㄝˇ ㄇㄟˊ ㄉㄧㄡ ㄍㄨㄛˋ ㄧㄤˊ']
    ],
    quote: ['亡羊而補牢，未為遲也。', 'ㄨㄤˊ ㄧㄤˊ ㄦˊ ㄅㄨˇ ㄌㄠˊ ㄨㄟˋ ㄨㄟˊ ㄔˊ ㄧㄝˇ'],
    quoteNote: ['丟了羊再修羊圈，也還來得及。', 'ㄉㄧㄡ ㄌㄜ˙ ㄧㄤˊ ㄗㄞˋ ㄒㄧㄡ ㄧㄤˊ ㄐㄩㄢˋ ㄧㄝˇ ㄏㄞˊ ㄌㄞˊ ㄉㄜ˙ ㄐㄧˊ']
  },
  example: [
    ['我這次粗心寫錯題目，趕快', 'ㄨㄛˇ ㄓㄜˋ ㄘˋ ㄘㄨ ㄒㄧㄣ ㄒㄧㄝˇ ㄘㄨㄛˋ ㄊㄧˊ ㄇㄨˋ ㄍㄢˇ ㄎㄨㄞˋ'],
    ['亡羊補牢', 'ㄨㄤˊ ㄧㄤˊ ㄅㄨˇ ㄌㄠˊ', true],
    ['，把錯題重新練習。', 'ㄅㄚˇ ㄘㄨㄛˋ ㄊㄧˊ ㄔㄨㄥˊ ㄒㄧㄣ ㄌㄧㄢˋ ㄒㄧˊ']
  ],
  syn: [],
  ant: [['執迷不悟', 'ㄓˊ ㄇㄧˊ ㄅㄨˋ ㄨˋ']],
  quiz: {
    before: ['上次忘了鎖門，腳踏車被偷了，爸爸趕快裝了新鎖，這是', 'ㄕㄤˋ ㄘˋ ㄨㄤˋ ㄌㄜ˙ ㄙㄨㄛˇ ㄇㄣˊ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ ㄅㄟˋ ㄊㄡ ㄌㄜ˙ ㄅㄚˋ ㄅㄚ˙ ㄍㄢˇ ㄎㄨㄞˋ ㄓㄨㄤ ㄌㄜ˙ ㄒㄧㄣ ㄙㄨㄛˇ ㄓㄜˋ ㄕˋ'],
    after: ['。', ''],
    options: ['亡羊補牢', '畫蛇添足'], answer: '亡羊補牢'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#E3F1FB"/><rect y="95" width="280" height="55" fill="#C0DD97"/><g><ellipse cx="96" cy="104" rx="16" ry="11" fill="#FFFFFF" stroke="#B4B2A9" stroke-width="0.8"/><circle cx="88" cy="95" r="6" fill="#FFFFFF" stroke="#B4B2A9" stroke-width="0.8"/><circle cx="100" cy="94" r="6" fill="#FFFFFF" stroke="#B4B2A9" stroke-width="0.8"/><ellipse cx="78" cy="101" rx="6" ry="7" fill="#444441"/><path d="M88,114 v8 M104,114 v8" stroke="#444441" stroke-width="2"/></g><g><ellipse cx="228" cy="106" rx="14" ry="10" fill="#FFFFFF" stroke="#B4B2A9" stroke-width="0.8"/><circle cx="222" cy="98" r="5" fill="#FFFFFF" stroke="#B4B2A9" stroke-width="0.8"/><circle cx="233" cy="97" r="5" fill="#FFFFFF" stroke="#B4B2A9" stroke-width="0.8"/><ellipse cx="244" cy="103" rx="5.5" ry="6.5" fill="#444441"/><path d="M221,115 v7 M235,115 v7" stroke="#444441" stroke-width="2"/></g><path d="M40,86 H150 M40,108 H150 M196,86 H262 M196,108 H262" stroke="#EF9F27" stroke-width="6"/><rect x="36" y="74" width="8" height="50" fill="#BA7517"/><rect x="76" y="74" width="8" height="50" fill="#BA7517"/><rect x="116" y="74" width="8" height="50" fill="#BA7517"/><rect x="148" y="74" width="8" height="50" fill="#BA7517"/><rect x="194" y="74" width="8" height="50" fill="#BA7517"/><rect x="258" y="74" width="8" height="50" fill="#BA7517"/><rect x="158" y="82" width="36" height="8" fill="#FAC775" stroke="#BA7517" stroke-width="1" transform="rotate(-12 176 86)"/><path d="M166,136 L184,118" stroke="#854F0B" stroke-width="3.5" stroke-linecap="round"/><rect x="178" y="110" width="15" height="8" rx="1" fill="#5F5E5A" transform="rotate(-45 185 114)"/></svg>`
},
{
  id: 'ya-miao-zhu-zhang', cat: '歷史寓言',
  word: ['揠苗助長', 'ㄧㄚˋ ㄇㄧㄠˊ ㄓㄨˋ ㄓㄤˇ'],
  keys: [
    { k: ['揠', 'ㄧㄚˋ'], v: ['拔', 'ㄅㄚˊ'] },
    { k: ['長', 'ㄓㄤˇ'], v: ['生長', 'ㄕㄥ ㄓㄤˇ'] }
  ],
  meaning: ['比喻做事太心急，想要快點成功，反而壞了事。', 'ㄅㄧˇ ㄩˋ ㄗㄨㄛˋ ㄕˋ ㄊㄞˋ ㄒㄧㄣ ㄐㄧˊ ㄒㄧㄤˇ ㄧㄠˋ ㄎㄨㄞˋ ㄉㄧㄢˇ ㄔㄥˊ ㄍㄨㄥ ㄈㄢˇ ㄦˊ ㄏㄨㄞˋ ㄌㄜ˙ ㄕˋ'],
  source: {
    book: ['《孟子・公孫丑》', 'ㄇㄥˋ ㄗˇ ㄍㄨㄥ ㄙㄨㄣ ㄔㄡˇ'],
    story: [
      ['宋國有位農夫，嫌田裡的禾苗長得太慢。', 'ㄙㄨㄥˋ ㄍㄨㄛˊ ㄧㄡˇ ㄨㄟˋ ㄋㄨㄥˊ ㄈㄨ ㄒㄧㄢˊ ㄊㄧㄢˊ ㄌㄧˇ ㄉㄜ˙ ㄏㄜˊ ㄇㄧㄠˊ ㄓㄤˇ ㄉㄜ˙ ㄊㄞˋ ㄇㄢˋ'],
      ['他把每株禾苗都往上拔高，回家還說：「今天好累，我幫禾苗長高了！」', 'ㄊㄚ ㄅㄚˇ ㄇㄟˇ ㄓㄨ ㄏㄜˊ ㄇㄧㄠˊ ㄉㄡ ㄨㄤˇ ㄕㄤˋ ㄅㄚˊ ㄍㄠ ㄏㄨㄟˊ ㄐㄧㄚ ㄏㄞˊ ㄕㄨㄛ ㄐㄧㄣ ㄊㄧㄢ ㄏㄠˇ ㄌㄟˋ ㄨㄛˇ ㄅㄤ ㄏㄜˊ ㄇㄧㄠˊ ㄓㄤˇ ㄍㄠ ㄌㄜ˙'],
      ['兒子跑去田裡看，禾苗全都枯死了。', 'ㄦˊ ㄗ˙ ㄆㄠˇ ㄑㄩˋ ㄊㄧㄢˊ ㄌㄧˇ ㄎㄢˋ ㄏㄜˊ ㄇㄧㄠˊ ㄑㄩㄢˊ ㄉㄡ ㄎㄨ ㄙˇ ㄌㄜ˙']
    ],
    quote: ['予助苗長矣', 'ㄩˊ ㄓㄨˋ ㄇㄧㄠˊ ㄓㄤˇ ㄧˇ'],
    quoteNote: ['我幫助禾苗長高了！', 'ㄨㄛˇ ㄅㄤ ㄓㄨˋ ㄏㄜˊ ㄇㄧㄠˊ ㄓㄤˇ ㄍㄠ ㄌㄜ˙']
  },
  example: [
    ['學才藝要慢慢來，逼得太緊，就像', 'ㄒㄩㄝˊ ㄘㄞˊ ㄧˋ ㄧㄠˋ ㄇㄢˋ ㄇㄢˋ ㄌㄞˊ ㄅㄧ ㄉㄜ˙ ㄊㄞˋ ㄐㄧㄣˇ ㄐㄧㄡˋ ㄒㄧㄤˋ'],
    ['揠苗助長', 'ㄧㄚˋ ㄇㄧㄠˊ ㄓㄨˋ ㄓㄤˇ', true],
    ['。', '']
  ],
  syn: [['拔苗助長', 'ㄅㄚˊ ㄇㄧㄠˊ ㄓㄨˋ ㄓㄤˇ']],
  ant: [['循序漸進', 'ㄒㄩㄣˊ ㄒㄩˋ ㄐㄧㄢˋ ㄐㄧㄣˋ']],
  quiz: {
    before: ['小豆苗才剛發芽，弟弟就用手把它拉高，真是', 'ㄒㄧㄠˇ ㄉㄡˋ ㄇㄧㄠˊ ㄘㄞˊ ㄍㄤ ㄈㄚ ㄧㄚˊ ㄉㄧˋ ㄉㄧ˙ ㄐㄧㄡˋ ㄩㄥˋ ㄕㄡˇ ㄅㄚˇ ㄊㄚ ㄌㄚ ㄍㄠ ㄓㄣ ㄕˋ'],
    after: ['。', ''],
    options: ['揠苗助長', '刻舟求劍'], answer: '揠苗助長'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#E3F1FB"/><circle cx="36" cy="28" r="12" fill="#FAC775"/><rect y="105" width="280" height="45" fill="#C9A27A"/><path d="M0,120 H280 M0,136 H280" stroke="#B08A62" stroke-width="1.5"/><g stroke="#639922" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M30,105 V92 M30,97 Q24,91 22,86 M30,97 Q36,91 38,86"/><path d="M62,105 V92 M62,97 Q56,91 54,86 M62,97 Q68,91 70,86"/><path d="M94,105 V92 M94,97 Q88,91 86,86 M94,97 Q100,91 102,86"/></g><g stroke="#BA7517" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M140,98 V64 M140,72 Q131,70 128,82 M140,68 Q149,66 152,78"/><path d="M172,98 V60 M172,68 Q163,66 160,78 M172,64 Q181,62 184,74"/></g><g stroke="#F1EFE8" stroke-width="1.5" stroke-linecap="round"><path d="M140,98 l-4,6 M140,98 v7 M140,98 l4,6 M172,98 l-4,6 M172,98 v7 M172,98 l4,6 M205,98 l-4,6 M205,98 v7 M205,98 l4,6"/></g><path d="M205,98 V66 M205,74 Q196,72 193,84 M205,70 Q214,68 217,80" stroke="#97C459" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M222,124 Q224,90 238,88 Q252,90 254,124 Z" fill="#378ADD"/><circle cx="238" cy="78" r="8" fill="#F5C4B3"/><polygon points="220,72 238,59 256,72" fill="#FAC775" stroke="#BA7517" stroke-width="1"/><path d="M229,95 L208,70" stroke="#F5C4B3" stroke-width="4" stroke-linecap="round"/></svg>`
},
{
  id: 'zi-xiang-mao-dun', cat: '歷史寓言',
  word: ['自相矛盾', 'ㄗˋ ㄒㄧㄤ ㄇㄠˊ ㄉㄨㄣˋ'],
  keys: [
    { k: ['矛', 'ㄇㄠˊ'], v: ['刺人的長槍', 'ㄘˋ ㄖㄣˊ ㄉㄜ˙ ㄔㄤˊ ㄑㄧㄤ'] },
    { k: ['盾', 'ㄉㄨㄣˋ'], v: ['擋住攻擊的盾牌', 'ㄉㄤˇ ㄓㄨˋ ㄍㄨㄥ ㄐㄧˊ ㄉㄜ˙ ㄉㄨㄣˋ ㄆㄞˊ'] }
  ],
  meaning: ['比喻說話或做事前後互相衝突。', 'ㄅㄧˇ ㄩˋ ㄕㄨㄛ ㄏㄨㄚˋ ㄏㄨㄛˋ ㄗㄨㄛˋ ㄕˋ ㄑㄧㄢˊ ㄏㄡˋ ㄏㄨˋ ㄒㄧㄤ ㄔㄨㄥ ㄊㄨˊ'],
  source: {
    book: ['《韓非子・難一》', 'ㄏㄢˊ ㄈㄟ ㄗˇ ㄋㄢˋ ㄧ'],
    story: [
      ['楚國有人在賣矛和盾。', 'ㄔㄨˇ ㄍㄨㄛˊ ㄧㄡˇ ㄖㄣˊ ㄗㄞˋ ㄇㄞˋ ㄇㄠˊ ㄏㄜˊ ㄉㄨㄣˋ'],
      ['他先誇自己的盾最堅固，什麼都刺不穿；又誇自己的矛最銳利，什麼都刺得穿。', 'ㄊㄚ ㄒㄧㄢ ㄎㄨㄚ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄉㄨㄣˋ ㄗㄨㄟˋ ㄐㄧㄢ ㄍㄨˋ ㄕㄣˊ ㄇㄜ˙ ㄉㄡ ㄘˋ ㄅㄨˋ ㄔㄨㄢ ㄧㄡˋ ㄎㄨㄚ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄇㄠˊ ㄗㄨㄟˋ ㄖㄨㄟˋ ㄌㄧˋ ㄕㄣˊ ㄇㄜ˙ ㄉㄡ ㄘˋ ㄉㄜ˙ ㄔㄨㄢ'],
      ['有人問他用矛刺盾會怎樣，他就答不出來了。', 'ㄧㄡˇ ㄖㄣˊ ㄨㄣˋ ㄊㄚ ㄩㄥˋ ㄇㄠˊ ㄘˋ ㄉㄨㄣˋ ㄏㄨㄟˋ ㄗㄣˇ ㄧㄤˋ ㄊㄚ ㄐㄧㄡˋ ㄉㄚˊ ㄅㄨˋ ㄔㄨ ㄌㄞˊ ㄌㄜ˙']
    ],
    quote: ['以子之矛，陷子之盾，何如？', 'ㄧˇ ㄗˇ ㄓ ㄇㄠˊ ㄒㄧㄢˋ ㄗˇ ㄓ ㄉㄨㄣˋ ㄏㄜˊ ㄖㄨˊ'],
    quoteNote: ['用你的矛刺你的盾，結果會怎樣？', 'ㄩㄥˋ ㄋㄧˇ ㄉㄜ˙ ㄇㄠˊ ㄘˋ ㄋㄧˇ ㄉㄜ˙ ㄉㄨㄣˋ ㄐㄧㄝˊ ㄍㄨㄛˇ ㄏㄨㄟˋ ㄗㄣˇ ㄧㄤˋ']
  },
  example: [
    ['他說自己最愛乾淨，房間卻亂七八糟，真是', 'ㄊㄚ ㄕㄨㄛ ㄗˋ ㄐㄧˇ ㄗㄨㄟˋ ㄞˋ ㄍㄢ ㄐㄧㄥˋ ㄈㄤˊ ㄐㄧㄢ ㄑㄩㄝˋ ㄌㄨㄢˋ ㄑㄧ ㄅㄚ ㄗㄠ ㄓㄣ ㄕˋ'],
    ['自相矛盾', 'ㄗˋ ㄒㄧㄤ ㄇㄠˊ ㄉㄨㄣˋ', true],
    ['。', '']
  ],
  syn: [['前後矛盾', 'ㄑㄧㄢˊ ㄏㄡˋ ㄇㄠˊ ㄉㄨㄣˋ']],
  ant: [['自圓其說', 'ㄗˋ ㄩㄢˊ ㄑㄧˊ ㄕㄨㄛ']],
  quiz: {
    before: ['妹妹說她最討厭吃甜食，卻吃掉三塊蛋糕，真是', 'ㄇㄟˋ ㄇㄟ˙ ㄕㄨㄛ ㄊㄚ ㄗㄨㄟˋ ㄊㄠˇ ㄧㄢˋ ㄔ ㄊㄧㄢˊ ㄕˊ ㄑㄩㄝˋ ㄔ ㄉㄧㄠˋ ㄙㄢ ㄎㄨㄞˋ ㄉㄢˋ ㄍㄠ ㄓㄣ ㄕˋ'],
    after: ['。', ''],
    options: ['自相矛盾', '掩耳盜鈴'], answer: '自相矛盾'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#FBF3E4"/><rect y="132" width="280" height="18" fill="#FAC775"/><circle cx="104" cy="78" r="46" fill="#BA7517" stroke="#633806" stroke-width="3"/><circle cx="104" cy="78" r="31" fill="#EF9F27"/><circle cx="104" cy="78" r="9" fill="#633806"/><path d="M104,47 V56 M104,100 V109 M73,78 H82 M126,78 H135" stroke="#854F0B" stroke-width="3" stroke-linecap="round"/><path d="M268,78 H184" stroke="#854F0B" stroke-width="5" stroke-linecap="round"/><polygon points="184,69 156,78 184,87" fill="#B4B2A9" stroke="#5F5E5A" stroke-width="1.5"/><path d="M188,80 q5,10 -2,18 M193,80 q4,10 0,18" stroke="#E24B4A" stroke-width="2" fill="none" stroke-linecap="round"/><text x="210" y="50" font-size="40" font-weight="700" fill="#D85A30" font-family="sans-serif">?</text><text x="36" y="36" font-size="28" font-weight="700" fill="#D85A30" font-family="sans-serif">?</text></svg>`
},
{
  id: 'ke-zhou-qiu-jian', cat: '歷史寓言',
  word: ['刻舟求劍', 'ㄎㄜˋ ㄓㄡ ㄑㄧㄡˊ ㄐㄧㄢˋ'],
  keys: [
    { k: ['刻', 'ㄎㄜˋ'], v: ['做記號', 'ㄗㄨㄛˋ ㄐㄧˋ ㄏㄠˋ'] },
    { k: ['求', 'ㄑㄧㄡˊ'], v: ['尋找', 'ㄒㄩㄣˊ ㄓㄠˇ'] }
  ],
  meaning: ['比喻做事死板，不懂得隨著情況改變。', 'ㄅㄧˇ ㄩˋ ㄗㄨㄛˋ ㄕˋ ㄙˇ ㄅㄢˇ ㄅㄨˋ ㄉㄨㄥˇ ㄉㄜ˙ ㄙㄨㄟˊ ㄓㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄍㄞˇ ㄅㄧㄢˋ'],
  source: {
    book: ['《呂氏春秋・察今》', 'ㄌㄩˇ ㄕˋ ㄔㄨㄣ ㄑㄧㄡ ㄔㄚˊ ㄐㄧㄣ'],
    story: [
      ['楚國有人坐船過江，寶劍不小心掉進水裡。', 'ㄔㄨˇ ㄍㄨㄛˊ ㄧㄡˇ ㄖㄣˊ ㄗㄨㄛˋ ㄔㄨㄢˊ ㄍㄨㄛˋ ㄐㄧㄤ ㄅㄠˇ ㄐㄧㄢˋ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄉㄧㄠˋ ㄐㄧㄣˋ ㄕㄨㄟˇ ㄌㄧˇ'],
      ['他在船邊刻了記號，說：「劍是從這裡掉下去的。」', 'ㄊㄚ ㄗㄞˋ ㄔㄨㄢˊ ㄅㄧㄢ ㄎㄜˋ ㄌㄜ˙ ㄐㄧˋ ㄏㄠˋ ㄕㄨㄛ ㄐㄧㄢˋ ㄕˋ ㄘㄨㄥˊ ㄓㄜˋ ㄌㄧˇ ㄉㄧㄠˋ ㄒㄧㄚˋ ㄑㄩˋ ㄉㄜ˙'],
      ['船停了以後，他照著記號下水找劍，可是船早就移動了呀！', 'ㄔㄨㄢˊ ㄊㄧㄥˊ ㄌㄜ˙ ㄧˇ ㄏㄡˋ ㄊㄚ ㄓㄠˋ ㄓㄜ˙ ㄐㄧˋ ㄏㄠˋ ㄒㄧㄚˋ ㄕㄨㄟˇ ㄓㄠˇ ㄐㄧㄢˋ ㄎㄜˇ ㄕˋ ㄔㄨㄢˊ ㄗㄠˇ ㄐㄧㄡˋ ㄧˊ ㄉㄨㄥˋ ㄌㄜ˙ ㄧㄚ˙']
    ],
    quote: ['舟已行矣，而劍不行', 'ㄓㄡ ㄧˇ ㄒㄧㄥˊ ㄧˇ ㄦˊ ㄐㄧㄢˋ ㄅㄨˋ ㄒㄧㄥˊ'],
    quoteNote: ['船已經往前走了，劍卻留在原地。', 'ㄔㄨㄢˊ ㄧˇ ㄐㄧㄥ ㄨㄤˇ ㄑㄧㄢˊ ㄗㄡˇ ㄌㄜ˙ ㄐㄧㄢˋ ㄑㄩㄝˋ ㄌㄧㄡˊ ㄗㄞˋ ㄩㄢˊ ㄉㄧˋ']
  },
  example: [
    ['時代在進步，還用十年前的方法做事，就像', 'ㄕˊ ㄉㄞˋ ㄗㄞˋ ㄐㄧㄣˋ ㄅㄨˋ ㄏㄞˊ ㄩㄥˋ ㄕˊ ㄋㄧㄢˊ ㄑㄧㄢˊ ㄉㄜ˙ ㄈㄤ ㄈㄚˇ ㄗㄨㄛˋ ㄕˋ ㄐㄧㄡˋ ㄒㄧㄤˋ'],
    ['刻舟求劍', 'ㄎㄜˋ ㄓㄡ ㄑㄧㄡˊ ㄐㄧㄢˋ', true],
    ['。', '']
  ],
  syn: [['墨守成規', 'ㄇㄛˋ ㄕㄡˇ ㄔㄥˊ ㄍㄨㄟ']],
  ant: [['隨機應變', 'ㄙㄨㄟˊ ㄐㄧ ㄧㄥˋ ㄅㄧㄢˋ']],
  quiz: {
    before: ['公車路線已經改了，爺爺還在舊站牌等車，真像', 'ㄍㄨㄥ ㄔㄜ ㄌㄨˋ ㄒㄧㄢˋ ㄧˇ ㄐㄧㄥ ㄍㄞˇ ㄌㄜ˙ ㄧㄝˊ ㄧㄝ˙ ㄏㄞˊ ㄗㄞˋ ㄐㄧㄡˋ ㄓㄢˋ ㄆㄞˊ ㄉㄥˇ ㄔㄜ ㄓㄣ ㄒㄧㄤˋ'],
    after: ['。', ''],
    options: ['刻舟求劍', '揠苗助長'], answer: '刻舟求劍'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#E3F1FB"/><path d="M0,72 Q17,66 35,72 T70,72 T105,72 T140,72 T175,72 T210,72 T245,72 T280,72 V150 H0Z" fill="#85B7EB"/><path d="M0,136 Q70,128 140,136 T280,136 V150 H0Z" fill="#FAC775"/><path d="M92,50 V74" stroke="#854F0B" stroke-width="3"/><circle cx="92" cy="42" r="7" fill="#F5C4B3"/><path d="M84,74 Q86,54 92,52 Q98,54 100,74Z" fill="#378ADD"/><path d="M98,58 L118,70" stroke="#F5C4B3" stroke-width="3" stroke-linecap="round"/><path d="M60,70 H200 L185,92 H75 Z" fill="#BA7517"/><path d="M60,70 H200" stroke="#854F0B" stroke-width="2"/><path d="M124,76 l8,8 M132,76 l-8,8" stroke="#E24B4A" stroke-width="2.5" stroke-linecap="round"/><path d="M128,94 V130" stroke="#E24B4A" stroke-width="1.2" stroke-dasharray="3 3"/><path d="M210,60 H244" stroke="#0C447C" stroke-width="2" stroke-linecap="round"/><polygon points="244,55 254,60 244,65" fill="#0C447C"/><path d="M26,130 L62,124" stroke="#B4B2A9" stroke-width="4" stroke-linecap="round"/><path d="M60,118 L64,130" stroke="#633806" stroke-width="3" stroke-linecap="round"/><path d="M64,124 L72,123" stroke="#854F0B" stroke-width="3" stroke-linecap="round"/><path d="M20,100 q6,-4 12,0 M220,110 q6,-4 12,0 M150,112 q6,-4 12,0" stroke="#E6F1FB" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
},
{
  id: 'yan-er-dao-ling', cat: '歷史寓言',
  word: ['掩耳盜鈴', 'ㄧㄢˇ ㄦˇ ㄉㄠˋ ㄌㄧㄥˊ'],
  keys: [
    { k: ['掩', 'ㄧㄢˇ'], v: ['遮住', 'ㄓㄜ ㄓㄨˋ'] },
    { k: ['盜', 'ㄉㄠˋ'], v: ['偷', 'ㄊㄡ'] }
  ],
  meaning: ['比喻自己騙自己，以為別人都不知道。', 'ㄅㄧˇ ㄩˋ ㄗˋ ㄐㄧˇ ㄆㄧㄢˋ ㄗˋ ㄐㄧˇ ㄧˇ ㄨㄟˊ ㄅㄧㄝˊ ㄖㄣˊ ㄉㄡ ㄅㄨˋ ㄓ ㄉㄠˋ'],
  source: {
    book: ['《呂氏春秋・自知》', 'ㄌㄩˇ ㄕˋ ㄔㄨㄣ ㄑㄧㄡ ㄗˋ ㄓ'],
    story: [
      ['有人想偷走大鐘，可是鐘太重了，他只好用鎚子把鐘敲碎。', 'ㄧㄡˇ ㄖㄣˊ ㄒㄧㄤˇ ㄊㄡ ㄗㄡˇ ㄉㄚˋ ㄓㄨㄥ ㄎㄜˇ ㄕˋ ㄓㄨㄥ ㄊㄞˋ ㄓㄨㄥˋ ㄌㄜ˙ ㄊㄚ ㄓˇ ㄏㄠˇ ㄩㄥˋ ㄔㄨㄟˊ ㄗ˙ ㄅㄚˇ ㄓㄨㄥ ㄑㄧㄠ ㄙㄨㄟˋ'],
      ['鐘發出很大的聲響，他怕別人聽見，趕快摀住自己的耳朵。', 'ㄓㄨㄥ ㄈㄚ ㄔㄨ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄕㄥ ㄒㄧㄤˇ ㄊㄚ ㄆㄚˋ ㄅㄧㄝˊ ㄖㄣˊ ㄊㄧㄥ ㄐㄧㄢˋ ㄍㄢˇ ㄎㄨㄞˋ ㄨˇ ㄓㄨˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄦˇ ㄉㄨㄛ˙'],
      ['他以為只要自己沒聽見，別人也就沒聽見。', 'ㄊㄚ ㄧˇ ㄨㄟˊ ㄓˇ ㄧㄠˋ ㄗˋ ㄐㄧˇ ㄇㄟˊ ㄊㄧㄥ ㄐㄧㄢˋ ㄅㄧㄝˊ ㄖㄣˊ ㄧㄝˇ ㄐㄧㄡˋ ㄇㄟˊ ㄊㄧㄥ ㄐㄧㄢˋ'],
      ['原本是「掩耳盜鐘」，後來才說成「掩耳盜鈴」。', 'ㄩㄢˊ ㄅㄣˇ ㄕˋ ㄧㄢˇ ㄦˇ ㄉㄠˋ ㄓㄨㄥ ㄏㄡˋ ㄌㄞˊ ㄘㄞˊ ㄕㄨㄛ ㄔㄥˊ ㄧㄢˇ ㄦˇ ㄉㄠˋ ㄌㄧㄥˊ']
    ],
    quote: ['恐人聞之而奪己也', 'ㄎㄨㄥˇ ㄖㄣˊ ㄨㄣˊ ㄓ ㄦˊ ㄉㄨㄛˊ ㄐㄧˇ ㄧㄝˇ'],
    quoteNote: ['怕別人聽到聲音，跑來搶走鐘。', 'ㄆㄚˋ ㄅㄧㄝˊ ㄖㄣˊ ㄊㄧㄥ ㄉㄠˋ ㄕㄥ ㄧㄣ ㄆㄠˇ ㄌㄞˊ ㄑㄧㄤˇ ㄗㄡˇ ㄓㄨㄥ']
  },
  example: [
    ['弟弟打破花瓶，把碎片藏在沙發下，以為沒人知道，真是', 'ㄉㄧˋ ㄉㄧ˙ ㄉㄚˇ ㄆㄛˋ ㄏㄨㄚ ㄆㄧㄥˊ ㄅㄚˇ ㄙㄨㄟˋ ㄆㄧㄢˋ ㄘㄤˊ ㄗㄞˋ ㄕㄚ ㄈㄚ ㄒㄧㄚˋ ㄧˇ ㄨㄟˊ ㄇㄟˊ ㄖㄣˊ ㄓ ㄉㄠˋ ㄓㄣ ㄕˋ'],
    ['掩耳盜鈴', 'ㄧㄢˇ ㄦˇ ㄉㄠˋ ㄌㄧㄥˊ', true],
    ['。', '']
  ],
  syn: [['自欺欺人', 'ㄗˋ ㄑㄧ ㄑㄧ ㄖㄣˊ']],
  ant: [],
  quiz: {
    before: ['他把考卷藏起來，以為爸媽就會忘了考試，真是', 'ㄊㄚ ㄅㄚˇ ㄎㄠˇ ㄐㄩㄢˋ ㄘㄤˊ ㄑㄧˇ ㄌㄞˊ ㄧˇ ㄨㄟˊ ㄅㄚˋ ㄇㄚ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄨㄤˋ ㄌㄜ˙ ㄎㄠˇ ㄕˋ ㄓㄣ ㄕˋ'],
    after: ['。', ''],
    options: ['掩耳盜鈴', '自相矛盾'], answer: '掩耳盜鈴'
  },
  art: `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#FBF3E4"/><rect y="125" width="280" height="25" fill="#D3D1C7"/><path d="M40,125 Q42,94 60,92 Q78,94 80,125Z" fill="#378ADD"/><circle cx="60" cy="72" r="16" fill="#F5C4B3"/><path d="M44,68 Q46,54 60,54 Q74,54 76,68 Q68,60 60,61 Q52,60 44,68Z" fill="#2C2C2A"/><path d="M52,74 q3,-3 6,0 M62,74 q3,-3 6,0" stroke="#2C2C2A" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M56,82 q4,2 8,0" stroke="#993C1D" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M48,100 L43,80 M72,100 L77,80" stroke="#F5C4B3" stroke-width="5" stroke-linecap="round"/><ellipse cx="43" cy="73" rx="6" ry="9" fill="#F5C4B3" stroke="#D85A30" stroke-width="1"/><ellipse cx="77" cy="73" rx="6" ry="9" fill="#F5C4B3" stroke="#D85A30" stroke-width="1"/><rect x="159" y="18" width="14" height="12" rx="2" fill="#854F0B"/><path d="M150,30 L182,30 L194,102 Q166,112 138,102 Z" fill="#BA7517" stroke="#633806" stroke-width="2"/><g fill="#EF9F27"><circle cx="156" cy="46" r="3"/><circle cx="166" cy="46" r="3"/><circle cx="176" cy="46" r="3"/><circle cx="154" cy="58" r="3"/><circle cx="166" cy="58" r="3"/><circle cx="178" cy="58" r="3"/></g><path d="M160,70 l7,10 l-5,9 l6,8" stroke="#633806" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M204,52 q10,16 0,32 M216,44 q16,24 0,48 M128,52 q-10,16 0,32 M116,44 q-16,24 0,48" stroke="#D85A30" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M214,124 L250,114" stroke="#854F0B" stroke-width="3.5" stroke-linecap="round"/><rect x="246" y="106" width="9" height="16" rx="1" fill="#5F5E5A" transform="rotate(-15 250 114)"/></svg>`
}
];
