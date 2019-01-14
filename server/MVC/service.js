var dao=require('./dao');
var model=require('./model');

var hhh = new Array("あ",
"か",
"さ",
"た",
"な",
"は",
"ま",
"や",
"ら",
"わ",
"ん",
"が",
"ざ",
"だ",
"ば",
"ぱ",
"い",
"き",
"し",
"ち",
"に",
"ひ",
"み",
"り",
"ぎ",
"じ",
"ぢ",
"び",
"ぴ",
"う",
"く",
"す",
"つ",
"ぬ",
"ふ",
"む",
"ゆ",
"る",
"ぐ",
"ず",
"づ",
"ぶ",
"ぷ",
"え",
"け",
"せ",
"て",
"ね",
"へ",
"め",
"れ",
"げ",
"ぜ",
"で",
"べ",
"ぺ",
"お",
"こ",
"そ",
"と",
"の",
"ほ",
"も",
"よ",
"ろ",
"を",
"ご",
"ぞ",
"ど",
"ぼ",
"ぽ");
var kkk = new Array("ア",
"カ",
"サ",
"タ",
"ナ",
"ハ",
"マ",
"ヤ",
"ラ",
"ワ",
"ン",
"ガ",
"ザ",
"ダ",
"バ",
"パ",
"イ",
"キ",
"シ",
"チ",
"ニ",
"ヒ",
"ミ",
"リ",
"ギ",
"ジ",
"ヂ",
"ビ",
"ピ",
"ウ",
"ク",
"ス",
"ツ",
"ヌ",
"フ",
"ム",
"ユ",
"ル",
"グ",
"ズ",
"ゾ",
"ブ",
"プ",
"エ",
"ケ",
"セ",
"テ",
"ネ",
"ヘ",
"メ",
"レ",
"ゲ",
"ゼ",
"デ",
"ベ",
"ペ",
"オ",
"コ",
"ソ",
"ト",
"ノ",
"ホ",
"モ",
"ヨ",
"ロ",
"ヲ",
"ゴ",
"ゾ",
"ド",
"ボ",
"ポ");



//初始化
var initModelList = function(){
	//运行时的特效，可用于检验逻辑
	console.log("[Service function] initModelList");
	//定义平假名和片假名Model数组
	var h = new Array();
	var k = new Array();
	//循环补全数组 
	for (var i = 0; i < hhh.length; i++) {
		//初始化 Model 数组
		var tempH = model.copy();
		tempH.word = hhh[i];
		tempH.voice = 'https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/'+hhh[i]+'.mp3'
		h[i] = tempH;


		var tempK = model.copy();
		tempK.word = kkk[i];
		tempK.voice = 'https://lg-l9n48822-1257392927.cos.ap-shanghai.myqcloud.com/'+kkk[i]+'.mp3'
		k[i] = tempK;

		// break;
	}
	var jsonH = JSON.stringify(h);
	var jsonK = JSON.stringify(k);
	return "{\"hiragana\":"+jsonH+",\"katakana\":"+jsonK+"}";

}




var checkPassword = function(id,pwd,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[Service function] checkPassword");
	dao.findPwdById(id,function(data){
		// console.log("4     ",data);
		correct=data[0].password;
		if (pwd === correct) {
			callback('1');
		}else{
			callback('0');
		}
	})
}



var getList = function(page,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[Service function] getList");
	// return dao.getListByPage(page);
	var rt='';
	dao.getListByPage(page,function(data){
		// console.log("4     ",data);
		rt=data;
		callback("{\"list\":"+rt+"}");
	})
	
}




module.exports = {
	initModelList,
	checkPassword,
	getList
}