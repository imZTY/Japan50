// 引入包
var http = require('http'),
  url = require('url'),
  //导入querystring模块（解析post请求数据）
  querystring = require('querystring');


var service = require('./service');
var dao = require('./dao');

var mp3ListJson = service.initModelList();
// console.log(mp3ListJson);
dao.startConnection();


//定义测试对象
var obj = {
  name: "Officer",
  surname: "Dibble"
}

//相互转化
var json = JSON.stringify(obj);
var parsedJson = JSON.parse(json);


// 创建服务器
http.createServer(function (req, res) {
  var p = url.parse(req.url, true);
  var pathname = p.pathname;
  var method = req.method;
  var args = p.query;

  if (method === 'GET') {
    if (pathname === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Home Page\n');
    } else if (pathname === '/data') {  //TODO
      // 返回初始化所需数据（mp3）
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      console.log("method=", method, " args=", args);
      res.end(mp3ListJson);
      // service.initModelList(function(rt){
      // 	res.end(rt);
      // })
    } else if (pathname === '/note/check') {
      // 检验密码
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      // console.log("method=",method," args=",args);
      // res.end(json);
      service.checkPassword(args.id, args.password, function (rt) {
        res.end(rt);
      });
    } else if (pathname === '/note/findByAuthor') {
      // 查询作者
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });

      dao.findNotesByAuthor(args.author, function (rt) {
        res.end(rt);
      });
    } else if (pathname === '/note/list') {
      // 获取笔记列表
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      console.log("method=", method, " args=", args);
      service.getList(args.page, function (rt) {
        res.end(rt);
      });
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('Page not found\n');
    }
  } else if (method === 'POST') {
    var data = '';
    var jsonFormData = '';

    //收到数据信号触发（多次）
    req.on('data', function (chunk) {
      // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
      data += chunk;
    });

    //数据全部到达触发（一次）
    req.on('end', function () {
      data = decodeURI(data);
      // console.log("2   ",data)
      jsonFormData = querystring.parse(data)
      // console.log("3   ",json)
      if (pathname === '/note/add') {
        // 新增比较 post
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        console.log("method=", method, " args=", jsonFormData);
        res.end(dao.creadNote(jsonFormData));
      } else if (pathname === '/note/update') {
        // 修改笔记 post
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        console.log("method=", method, " args=", jsonFormData);
        res.end(dao.updateNote(jsonFormData));
      } else {
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        });
        res.end('Page not found\n');
      }
    });

  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Page not found\n');
  }


}).listen(5757, "127.0.0.1");
