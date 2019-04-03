// pages/game_main/gameMain.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ok:0,
    timer:'',
    time:0,
    score:0,
    k:1,
    h:0,
    a:0,
    XX:0,
    YY:0,
    lastNO:0,
    hiragana: [
      {
        "word": "あ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/あ.mp3"
      },
      {
        "word": "か",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/か.mp3"
      },
      {
        "word": "さ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/さ.mp3"
      },
      {
        "word": "た",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/た.mp3"
      },
      {
        "word": "な",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/な.mp3"
      },
      {
        "word": "は",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/は.mp3"
      },
      {
        "word": "ま",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ま.mp3"
      },
      {
        "word": "や",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/や.mp3"
      },
      {
        "word": "ら",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ら.mp3"
      },
      {
        "word": "わ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/わ.mp3"
      },
      {
        "word": "ん",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ん.mp3"
      },
      {
        "word": "が",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/が.mp3"
      },
      {
        "word": "ざ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ざ.mp3"
      },
      {
        "word": "だ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/だ.mp3"
      },
      {
        "word": "ば",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ば.mp3"
      },
      {
        "word": "ぱ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぱ.mp3"
      },
      {
        "word": "い",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/い.mp3"
      },
      {
        "word": "き",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/き.mp3"
      },
      {
        "word": "し",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/し.mp3"
      },
      {
        "word": "ち",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ち.mp3"
      },
      {
        "word": "に",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/に.mp3"
      },
      {
        "word": "ひ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ひ.mp3"
      },
      {
        "word": "み",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/み.mp3"
      },
      {
        "word": "り",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/り.mp3"
      },
      {
        "word": "ぎ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぎ.mp3"
      },
      {
        "word": "じ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/じ.mp3"
      },
      {
        "word": "ぢ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぢ.mp3"
      },
      {
        "word": "び",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/び.mp3"
      },
      {
        "word": "ぴ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぴ.mp3"
      },
      {
        "word": "う",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/う.mp3"
      },
      {
        "word": "く",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/く.mp3"
      },
      {
        "word": "す",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/す.mp3"
      },
      {
        "word": "つ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/つ.mp3"
      },
      {
        "word": "ぬ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぬ.mp3"
      },
      {
        "word": "ふ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ふ.mp3"
      },
      {
        "word": "む",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/む.mp3"
      },
      {
        "word": "ゆ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ゆ.mp3"
      },
      {
        "word": "る",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/る.mp3"
      },
      {
        "word": "ぐ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぐ.mp3"
      },
      {
        "word": "ず",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ず.mp3"
      },
      {
        "word": "づ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/づ.mp3"
      },
      {
        "word": "ぶ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぶ.mp3"
      },
      {
        "word": "ぷ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぷ.mp3"
      },
      {
        "word": "え",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/え.mp3"
      },
      {
        "word": "け",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/け.mp3"
      },
      {
        "word": "せ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/せ.mp3"
      },
      {
        "word": "て",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/て.mp3"
      },
      {
        "word": "ね",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ね.mp3"
      },
      {
        "word": "へ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/へ.mp3"
      },
      {
        "word": "め",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/め.mp3"
      },
      {
        "word": "れ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/れ.mp3"
      },
      {
        "word": "げ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/げ.mp3"
      },
      {
        "word": "ぜ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぜ.mp3"
      },
      {
        "word": "で",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/で.mp3"
      },
      {
        "word": "べ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/べ.mp3"
      },
      {
        "word": "ぺ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぺ.mp3"
      },
      {
        "word": "お",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/お.mp3"
      },
      {
        "word": "こ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/こ.mp3"
      },
      {
        "word": "そ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/そ.mp3"
      },
      {
        "word": "と",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/と.mp3"
      },
      {
        "word": "の",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/の.mp3"
      },
      {
        "word": "ほ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ほ.mp3"
      },
      {
        "word": "も",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/も.mp3"
      },
      {
        "word": "よ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/よ.mp3"
      },
      {
        "word": "ろ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ろ.mp3"
      },
      {
        "word": "を",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/を.mp3"
      },
      {
        "word": "ご",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ご.mp3"
      },
      {
        "word": "ぞ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぞ.mp3"
      },
      {
        "word": "ど",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ど.mp3"
      },
      {
        "word": "ぼ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぼ.mp3"
      },
      {
        "word": "ぽ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ぽ.mp3"
      }
    ],
    katakana: [
      {
        "word": "ア",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ア.mp3"
      },
      {
        "word": "カ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/カ.mp3"
      },
      {
        "word": "サ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/サ.mp3"
      },
      {
        "word": "タ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/タ.mp3"
      },
      {
        "word": "ナ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ナ.mp3"
      },
      {
        "word": "ハ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ハ.mp3"
      },
      {
        "word": "マ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/マ.mp3"
      },
      {
        "word": "ヤ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヤ.mp3"
      },
      {
        "word": "ラ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ラ.mp3"
      },
      {
        "word": "ワ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ワ.mp3"
      },
      {
        "word": "ン",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ン.mp3"
      },
      {
        "word": "ガ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ガ.mp3"
      },
      {
        "word": "ザ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ザ.mp3"
      },
      {
        "word": "ダ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ダ.mp3"
      },
      {
        "word": "バ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/バ.mp3"
      },
      {
        "word": "パ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/パ.mp3"
      },
      {
        "word": "イ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/イ.mp3"
      },
      {
        "word": "キ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/キ.mp3"
      },
      {
        "word": "シ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/シ.mp3"
      },
      {
        "word": "チ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/チ.mp3"
      },
      {
        "word": "ニ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ニ.mp3"
      },
      {
        "word": "ヒ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヒ.mp3"
      },
      {
        "word": "ミ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ミ.mp3"
      },
      {
        "word": "リ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/リ.mp3"
      },
      {
        "word": "ギ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ギ.mp3"
      },
      {
        "word": "ジ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ジ.mp3"
      },
      {
        "word": "ヂ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヂ.mp3"
      },
      {
        "word": "ビ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ビ.mp3"
      },
      {
        "word": "ピ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ピ.mp3"
      },
      {
        "word": "ウ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ウ.mp3"
      },
      {
        "word": "ク",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ク.mp3"
      },
      {
        "word": "ス",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ス.mp3"
      },
      {
        "word": "ツ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ツ.mp3"
      },
      {
        "word": "ヌ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヌ.mp3"
      },
      {
        "word": "フ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/フ.mp3"
      },
      {
        "word": "ム",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ム.mp3"
      },
      {
        "word": "ユ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ユ.mp3"
      },
      {
        "word": "ル",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ル.mp3"
      },
      {
        "word": "グ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/グ.mp3"
      },
      {
        "word": "ズ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ズ.mp3"
      },
      {
        "word": "ゾ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ゾ.mp3"
      },
      {
        "word": "ブ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ブ.mp3"
      },
      {
        "word": "プ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/プ.mp3"
      },
      {
        "word": "エ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/エ.mp3"
      },
      {
        "word": "ケ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ケ.mp3"
      },
      {
        "word": "セ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/セ.mp3"
      },
      {
        "word": "テ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/テ.mp3"
      },
      {
        "word": "ネ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ネ.mp3"
      },
      {
        "word": "ヘ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヘ.mp3"
      },
      {
        "word": "メ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/メ.mp3"
      },
      {
        "word": "レ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/レ.mp3"
      },
      {
        "word": "ゲ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ゲ.mp3"
      },
      {
        "word": "ゼ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ゼ.mp3"
      },
      {
        "word": "デ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/デ.mp3"
      },
      {
        "word": "ベ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ベ.mp3"
      },
      {
        "word": "ペ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ペ.mp3"
      },
      {
        "word": "オ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/オ.mp3"
      },
      {
        "word": "コ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/コ.mp3"
      },
      {
        "word": "ソ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ソ.mp3"
      },
      {
        "word": "ト",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ト.mp3"
      },
      {
        "word": "ノ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ノ.mp3"
      },
      {
        "word": "ホ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ホ.mp3"
      },
      {
        "word": "モ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/モ.mp3"
      },
      {
        "word": "ヨ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヨ.mp3"
      },
      {
        "word": "ロ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ロ.mp3"
      },
      {
        "word": "ヲ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ヲ.mp3"
      },
      {
        "word": "ゴ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ゴ.mp3"
      },
      {
        "word": "ゾ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ゾ.mp3"
      },
      {
        "word": "ド",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ド.mp3"
      },
      {
        "word": "ボ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ボ.mp3"
      },
      {
        "word": "ポ",
        "voice": "https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/ポ.mp3"
      }
    ],
    chess:[
    // 1
      [{
        x:0,
        y:0,
        word:'',
        no:0,
        url:''
      },{
        x:0,
        y:1,
        word:'',
        no:0,
        url:''
      },{
        x:0,
        y:2,
        word:'',
        no:0,
        url:''
      },{
        x:0,
        y:3,
        word:'',
        no:0,
        url:''
      }],
    // 2
      [{
        x:1,
        y:0,
        word:'',
        no:0,
        url:''
      },{
        x:1,
        y:1,
        word:'',
        no:0,
        url:''
      },{
        x:1,
        y:2,
        word:'',
        no:0,
        url:''
      },{
        x:1,
        y:3,
        word:'',
        no:0,
        url:''
      }],
    // 3
      [{
        x:2,
        y:0,
        word:'',
        no:0,
        url:''
      },{
        x:2,
        y:1,
        word:'',
        no:0,
        url:''
      },{
        x:2,
        y:2,
        word:'',
        no:0,
        url:''
      },{
        x:2,
        y:3,
        word:'',
        no:0,
        url:''
      }],
    // 4
      [{
        x:3,
        y:0,
        word:'',
        no:0,
        url:''
      },{
        x:3,
        y:1,
        word:'',
        no:0,
        url:''
      },{
        x:3,
        y:2,
        word:'',
        no:0,
        url:''
      },{
        x:3,
        y:3,
        word:'',
        no:0,
        url:''
      }]
    ]
  },

  start:function(){
    console.log('start!');
    var that=this;
    that.data.timer = setInterval(function(){
      var time = that.data.time;
      // console.log(time);
      that.setData({
        time: Math.floor((time + 0.10000001)*10)/10
      })
    }, 100);
  },

  stop:function(){
    var that = this;
    if(that.data.time != 0){
      console.log('stop!');
      clearInterval(that.data.timer);
      that.setData({
        score:0,
        ok:0
      });
    }
  },

  pause: function () {
    var that = this;
    if (that.data.time != 0) {
      console.log('pause!');
      clearInterval(that.data.timer);
    }
  },

  // 棋盘大小 4×4
  refresh:function(){
    //判断取大取小（以排序后的左端为选取文字的标准还是以右端）Z[0, 1]
    var judge = new Array(8);
    for (var i = 0; i < judge.length; i++) {
      judge[i] = Math.round(Math.random());
    }
    //对应每个格子的随机数 Z[0, 99]
    var rand = new Array(16);
    for (var i = 0; i < rand.length; i++) {
      rand[i] = Math.floor(Math.random()*100000000);
    }
    //rand[]数组每个格子对应的排序序号（升序序号）
    var sort = new Array(16);
    var n = 1;
    for (var i = 0; i < sort.length; i++) {
      n = 1; 
      for (var j = 0; j < rand.length; j++) {
        if (rand[i] > rand[j]) {
          n++;
        }else{
          continue;
        }
      }
      sort[i] = n;
    }
    //合并 sort 和 rand
    var connect = new Array(16);
    for (var i = 0; i < connect.length; i++) {
      connect[i]={
        rand:rand[i],
        sort:sort[i]
      };
    }
    //存放排序后的 rand
    var sortedRandom = new Array(16);
    for (var j = 1; j < 17; j++) {
      //按照 sort 对 rand 排序
      for (var i = 0; i < sortedRandom.length; i++) {
        if (sort[i]==j) {
          sortedRandom[j-1]=rand[i];
          // console.log(j+"  "+rand[i]);
        }else{
          continue;
        }
      }
    }
    
    //刷新业务
    var that=this;
    // console.log("1  that.data.hiragana.length  ",that.data.hiragana.length);
    // console.log("2  that.hiragana.length  ",that.data.hiragana.length);
    var L = that.data.hiragana.length;
    
    for (var i = 0; i < connect.length; i++) { //i遍历所有格子
      var x = Math.floor(i/4);
      var y = i - x*4;
      var value = connect[i].sort;//当前格子的随机排序值
      var no = 'chess['+x+']['+y+'].no';
      var word = 'chess['+x+']['+y+'].word';
      var url = 'chess['+x+']['+y+'].url';

      if (value < 9) { //分开 sort[1, 8] sort[9, 16] （输入类型 大/小） 输入=小
        //随机大小标准
        if (judge[value-1]==0) {//无需折半获取判断值     （输出结果  取大还是取小  输入是否有效）
          // console.log(Math.floor(connect[i].rand*L/100000000));
          // console.log("  1  ",that.data.hiragana[Math.floor(Math.floor(connect[i].rand)*L/100000000)].word);
          that.setData({
            [no]:value,
            [word]:that.data.hiragana[Math.floor(connect[i].rand*L/100000000)].word,
            [url]:that.data.hiragana[Math.floor(connect[i].rand*L/100000000)].voice
          });
        }else{ //以大为准，则此处跳过             （大之处理）
          // console.log(Math.floor(sortedRandom[16-value]*L/100000000));
          // console.log("  2  ",that.data.katakana[Math.floor(sortedRandom[16-value]*L/100000000)].word);
          that.setData({
            [no]:value,
            [word]:that.data.katakana[Math.floor(sortedRandom[16-value]*L/100000000)].word,
            [url]:that.data.katakana[Math.floor(sortedRandom[16-value]*L/100000000)].voice
          });
        }
      }else{                                      //     输入=大
        if (judge[16-value]==0) {//需镜返获取判断值     （输出结果  取大还是取小  输入是否有效）（小之处理）
          // console.log(Math.floor(sortedRandom[16-value]*L/100000000));
          // console.log("  3  ",that.data.katakana[Math.floor(sortedRandom[16-value]*L/100000000)].word);
          that.setData({
            [no]:value,
            [word]:that.data.katakana[Math.floor(sortedRandom[16-value]*L/100000000)].word,
            [url]:that.data.katakana[Math.floor(sortedRandom[16-value]*L/100000000)].voice
          });
        }else{ //以大为准，则此处执行
          // console.log(Math.floor(connect[i].rand*L/100000000));
          // console.log("  4  ",that.data.hiragana[Math.floor(Math.floor(connect[i].rand)*L/100000000)].word);
          that.setData({
            [no]:value,
            [word]:that.data.hiragana[Math.floor(connect[i].rand*L/100000000)].word,
            [url]:that.data.hiragana[Math.floor(connect[i].rand*L/100000000)].voice
          });
        }
      }
    }
    this.stop();
    this.setData({
      time: 0
    })
    this.start();
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.showHelpDialogBtn();
    //初始化数据
    // wx.request({
    //   url: 'https://www.oathtomylove.top/japan/data',
    //   method: 'get',
    //   success: function (res) {
    //     console.log(res);
    //     if (res.statusCode == 200) {
    //       that.setData({
    //         hiragana: res.data.hiragana,
    //         katakana: res.data.katakana
    //       });
    //       that.showHelpDialogBtn();
    //       // that.refresh();
    //     }
    //   },
    //   fail: function () {
    //     console.log("fail");
    //     that.showErrorDialog();
    //   },
    //   complete: function () {
    //     console.log("complete")
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(app);
  },
  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  getUserInfo: function (e) {
    console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res)
          // 发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            method: 'get',
            data: {
              js_code: res.code,
              appid: '',
              secret: '',
              grant_type: 'authorization_code'
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  check:function(event){
    // console.log(event);
    //这次的排序数据
    var chessNo = event.currentTarget.dataset.chessNo;
    //这次的坐标数据
    var xx = event.currentTarget.dataset.chessXx;
    var yy = event.currentTarget.dataset.chessYy;
    var word = event.currentTarget.dataset.chessWord;
    // console.log(chessNo,xx,yy);

    this.audioCtx = wx.createAudioContext(word);
    this.audioCtx.play();
    var that = this;
    if (this.data.a == 0) {
      var no = 'chess[' + xx + '][' + yy + '].no';
      var last = this.data.chess[xx][yy].no;
      //数据改变
      this.setData({
        lastNO: last
      });
      this.setData({
        a: 1,
        h:chessNo,
        XX:xx,
        YY: yy,
        [no]: -1
      });

    }else{
      //上次的数据
      var XX = this.data.XX;
      var YY = this.data.YY;
      var last = that.data.lastNO;

      var NO = 'chess[' + XX + '][' + YY + '].no';
      var no = 'chess[' + xx + '][' + yy + '].no';

      var score = that.data.score;
      var ok = that.data.ok;

      // console.log(score);
      //检验逻辑
      if (chessNo + this.data.h == 17){
        console.log("RIGHT");
        //数据更改
        that.setData({
          a: 0,
          h: 0,
          XX:0,
          YY:0,
          [NO]:0,
          [no]:0,
          score:score+20,
          ok:ok+1
        });
        if (ok == 7) {
          this.showOverDialog();
        }
      }else{
        console.log("WRONG");
        //数据复原
        that.setData({
          a: 0,
          h: 0,
          XX:0,
          YY:0,
          [NO]:last
        });
      }

      
    }
    
  },




  /**
   * 弹窗（显示游戏规则）
   */
  showHelpDialogBtn: function () {
    this.pause();
    this.setData({
      showModal: 1
    })
  },
  /**
   * 弹窗（游戏结束）
   */
  showOverDialog: function () {
    this.pause();
    this.setData({
      showModal: 2
    })
  },
  /**
   * 弹窗（游戏出错）
   */
  showErrorDialog: function () {
    this.pause();
    this.setData({
      showModal: 3
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: 0
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  okHelp: function () {
    this.hideModal();
    if (this.data.k) {
      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = 'http://qiniu.zengtianyi.top/%E5%8D%A1%E5%86%9C0.mp3';
      innerAudioContext.loop = true;
      innerAudioContext.volume = 0.15;
      innerAudioContext.play();
      this.setData({
        k: 0
      });
    }
    if (this.data.time != 0) {
      this.start();
    }
  },
  okOver: function (){
    this.hideModal();
  },
  okError: function () {
    this.hideModal();
  }
})
