const mysql = require('mysql'); //mysql数据库模块
const connection = getDB();

//创建数据库连接对象
function getDB() {
    const dbHost = "192.168.1.177", //数据库地址
        dbUser = "root", //用户
        dbPwd = "123456", //密码
        dbName = "cnkiweb", //数据库
        dbFlag = true; //允许执行多条语句标记
    const conn = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPwd,
        database: dbName,
        multipleStatements: dbFlag
    });
    //中间件
    conn.connect();
    return conn;
}

//查询所有数据
function queryDB() {
    close.console.log("查询所有数据");
}


//添加函数
function add() {
    close.console.log("添加函数");
}

//数据删除方法
function del(table, id) {
    var delSql = 'DELETE FROM' + table + 'where id=' + id;
    connection.query(delSql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        console.log('DELETE affectedRows', result.affectedRows);
    });
    connection.end();
}

module.exports = {
    getDB,
    add,
    queryDB,
    del
}