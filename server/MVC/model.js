
//只有一层深度，浅拷贝即可
var obj = {
	word:"hiragana",
	voice:"111"
};

//复制假名模板
var copy = function(){
	var rt = {};
	for ( var attr in obj) {
        rt[attr] = obj[attr];
    }
	return rt;
}


//只有一个模板
module.exports = {
	copy
}
