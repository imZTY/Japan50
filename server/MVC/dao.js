const { mysql: config } = require('../config')
//与mysql的交互方法
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  database: config.database,
  password: config.password,
  charset: config.charset
});

connection.on('error', function (err) {
  console.log("[mysql error]", err);
});

var startConnection = function(){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] startConnection");
  connection.connect(function (err) {
    connection.on('error', function (err) {
      console.log("[mysql error]", err);
    });
    if (err) throw err;
  });
}

var closeConnection = function(){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] closeConnection");
	connection.end();
}


var creadNote = function(note){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] creadNote");
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
}


var updateNote = function(note){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] updateNote");
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
}


var findNotesByAuthor = function(author,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] findNotesByAuthor");
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
}


var findPwdById = function(id,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] findNoteById");
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
}


var deleteNoteById = function(id){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] deleteNoteById");
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
}



var getListByPage = function(page,callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] getListByPage");
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
}


var getList = function(callback){
	//运行时的特效，可用于检验逻辑
	console.log("[DAO function] getList");
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
}

var hello = function(){
  console.log("hello world");
  var option={
    host: config.host,
    port: config.port,
    user: config.user,
    database: config.database,
    password: config.password,
    charset: config.charset
  };
  console.log(option);
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
	getList,
  hello
}