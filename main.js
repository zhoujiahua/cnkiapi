// var http = require('http');
// //开启服务
// var server = http.createServer(function(req, res) {
// 	console.log('有客户端连接'); //创建连接成功显示在后台
// 	res.writeHeader(200, {
// 		'content-type': 'text/html;charset="utf-8"'
// 	});
// 	res.write('这是正文部分'); //显示给客户端
// 	res.end();
// }).listen(8888);
// console.log('服务器开启成功');
 
// var http = require('http');
// var fs = require('fs');
// var root = "C:/Users/YWL/Desktop/e"
// //开启服务
// var server = http.createServer(function(req, res) {
// 	console.log(req, res)
// 	var url = req.url;
// 	var file = root + url;
// 	fs.readFile(file, function(err, data) {
// 		if (err) {
// 			res.writeHeader(404, {
// 				'content-type': 'text/html;charset="utf-8"'
// 			});
// 			res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
// 			res.end();
// 		} else {
// 			res.writeHeader(200, {
// 				'content-type': 'text/html;charset="utf-8"'
// 			});
// 			res.write(data); //将index.html显示在客户端
// 			res.end();
 
// 		}
// 	})
// }).listen(8888);
// console.log('服务器开启成功');
 
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'test'
});
 
connection.connect();
 
/*
	@删除数据
*/
 
var delSql = 'DELETE FROM websites where id=2';
//删
connection.query(delSql, function(err, result) {
	if (err) {
		console.log('[DELETE ERROR] - ', err.message);
		return;
	}
 
	console.log('--------------------------DELETE----------------------------');
	console.log('DELETE affectedRows', result.affectedRows);
	console.log('-----------------------------------------------------------------\n\n');
});
 
connection.end();
 
/*
	@更新数据库
*/
 
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['更新数据库', 'https://www.百度.com', 2];
// //改
// connection.query(modSql, modSqlParams, function(err, result) {
// 	if (err) {
// 		console.log('[UPDATE ERROR] - ', err.message);
// 		return;
// 	}
// 	console.log('--------------------------UPDATE----------------------------');
// 	console.log('UPDATE affectedRows', result.affectedRows);
// 	console.log('-----------------------------------------------------------------\n\n');
// });
 
// connection.end();
 
/*
	@增加一条数据向数据库
*/
/*var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
//增
connection.query(addSql, addSqlParams, function(err, result) {
	if (err) {
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}
	console.log('--------------------------INSERT----------------------------');
	//console.log('INSERT ID:',result.insertId);        
	console.log('INSERT ID:', result);
	console.log('-----------------------------------------------------------------\n\n');
});
connection.end();*/
 
 
/*
	@查询数据库{websites}表信息
*/
// var sql = 'SELECT * FROM websites';
 
// //查
// connection.query(sql, function(err, result) {
// 	if (err) {
// 		console.log('[SELECT ERROR] - ', err.message);
// 		return;
// 	}
 
// 	console.log('--------------------------SELECT----------------------------');
// 	console.log(result);
// 	console.log('------------------------------------------------------------\n\n');
// });
 
// connection.end();
 
 
/*
	@连接初始化数据库
*/
// connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
// 	if (error) throw error;
// 	console.log('The solution is: ', results[0].solution);
// });
