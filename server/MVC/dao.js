//与mysql的交互方法
var mysql      = require('mysql');
var option = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'japan',
  password: 'root',
  charset: 'utf8'
};

var connection = null;

var printTime = function(){
	var myDate = new Date();
	myDate.toLocaleString(); //获取日期与时间
	console.log(myDate);
}

var startConnection = function(){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] startConnection");
	if(connection == null){
		connection = mysql.createConnection (option);
	}
	connection.connect();

	connection.on("error",function (error) {
		printTime();
		console.log("[ERROR] ！！！！！！",error); 
		/* setTimeout(function(){
		 	connection = mysql.createConnection({
			  host: 'localhost',
			  port: 3306,
			  user: 'root',
			  database: 'japan',
			  password: 'root',
			  charset: 'utf8'
			}).connect();
			console.log("[DEAL] ~ ~ ~ ~ reconnected after 30s ~ ~ ~");
		 },30000); */
	});
}

var closeConnection = function(){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] closeConnection");
	connection.end();
	connection = null;
}


var creadNote = function(note){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] creadNote");
	startConnection();
	connection.query(
	  'INSERT INTO notes ( title, content, author, password ) VALUES ( ?, ?, ?, ? )',
	  [note.title, note.content, note.author, note.password],
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    return results;
	  }
	);
	closeConnection();
}


var updateNote = function(note){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] updateNote");
	startConnection();
	connection.query(
	  'UPDATE notes SET title=?, content=?, author=?, password=? WHERE id=?',
	  [note.title, note.content, note.author, note.password, note.id],
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    return results;
	  }
	);
	closeConnection();
}


var findNotesByAuthor = function(author,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] findNotesByAuthor");
	startConnection();
	var sql='SELECT * FROM `notes` WHERE `author` like CONCAT(\'%\', ?, \'%\')';
	// console.log(sql);
	connection.query(
	  sql,
	  author,
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    result=JSON.stringify(results);
	    callback("{\"list\":"+result+"}");
	  }
	);
	closeConnection();
}


var findPwdById = function(id,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] findNoteById");
	startConnection();
	connection.query(
	  'SELECT n.password FROM `notes` n WHERE `id` = ?',
	  id,
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    // console.log(results);
	    callback(results);
	  }
	);
	closeConnection();
}


var deleteNoteById = function(id){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] deleteNoteById");
	startConnection();
	connection.query(
	  'DELETE FROM `notes` WHERE `id` = ?',
	  id,
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    return results;
	  }
	);
	closeConnection();
}



var getListByPage = function(page,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] getListByPage");
	startConnection();
	var min = (page-1)*20;
	var sql = 'SELECT * FROM `notes` LIMIT '+min+', 20'
	connection.query(
	  sql,
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    result = JSON.stringify(results);
	    callback(result);
	  }
	);
	closeConnection();
}


var getList = function(callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] getList");
	startConnection();
	connection.query(
	  'SELECT * FROM `notes`',
	  function (error, results, fields) {
	    // error will be an Error if one occurred during the query
	    // results will contain the results of the query
	    // fields will contain information about the returned results fields (if any)
	    if (error) throw error;
	    result = JSON.stringify(results);
	    callback(result);
	  }
	);
	closeConnection();
}

module.exports = {
	startConnection,
	closeConnection,
	creadNote,
	findPwdById,
	findNotesByAuthor,
	updateNote,
	deleteNoteById,
	getListByPage,
	getList
}