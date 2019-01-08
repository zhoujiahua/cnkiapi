const express = require("express"); //express框架
const mysql = require("mysql"); //mysql数据库模块
const dbMethod = require("./db"); //数据库连接
const db = dbMethod.getDB();
const path = require("path");
const bodyParser = require("body-parser"); //解析表单的插件

const app = express();

//处理静态资源
app.use(express.static(path.join(__dirname, "public")));

//设置跨域访问
app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", " 3.2.1");
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//解析表单的插件
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);

//根路径设置
app.get("/", function (reg, res) {
	const obj = {
		name: "cnkiweb",
		version: "1.0.0",
		abstract: "请找到正确的访问姿势！"
	};
	res.send("./public/index.html");
});

//图片接口数据
app.get("/api/getImg", (req, res) => {
	const sqlStr = "select * from news order by id limit 0,10";
	db.query(sqlStr, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: "数据不存在",
				affextedRows: 0
			});
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		});
	});
});

//模块分类接口数据
app.get("/api/classify", (req, res) => {
	const sqlStr = "select * from content_type order by sortID";
	db.query(sqlStr, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: "数据不存在",
				affextedRows: 0
			});
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		});
	});
});

//最新资讯数据接口
app.get("/api/contents", (req, res) => {
	const sqlStr =
		"select * from content where typeid=3  order by CreateDate desc limit 0,10";
	db.query(sqlStr, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: "数据不存在",
				affextedRows: 0
			});
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		});
	});
});

//新闻列表内容数据接口
app.get("/api/newslist", (req, res) => {
	const sqlStr = "select * from content  order by CreateDate desc limit 0,20";
	db.query(sqlStr, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: "数据不存在",
				affextedRows: 0
			});
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		});
	});
});

//分类数据查询接口
app.get("/api/getLists", (req, res) => {
	const num = 2;
	const sqlStr =
		"select * from content  where  typeid=" +
		num +
		" order by CreateDate desc limit 0,20";
	db.query(sqlStr, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: "数据不存在",
				affextedRows: 0
			});
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		});
		// db.end();
	});
});

//新闻详情接口数据
app.get("/api/getListInfo", (req, res) => {
	console.log(req.query);
	const newsID = req.query.id;
	const sqlStr = "select * from content where id=" + newsID;
	db.query(sqlStr, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: "数据不存在",
				affextedRows: 0
			});
		res.json({
			err_code: 200,
			message: results,
			affectedRows: results.affextedRows
		});
	});
});

//添加
app.post("/api/addcard", (req, res) => {
	const user = req.body;
	const sqlStr = "insert into content set ?";
	db.query(sqlStr, user, (err, results) => {
		if (err)
			return res.json({
				err_code: 1,
				message: err,
				affectedRows: 0
			});
		res.json({
			err_code: 0,
			message: "恭喜成功",
			affectedRows: results.affectedRows
		});
	});
});



//端口监听
const port = process.env.PORT || 12306;
app.listen(port, () => {
	console.log(`正在监听: ${port} 端口`);
});