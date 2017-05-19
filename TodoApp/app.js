/**
 * Created by lanou3g on 17/5/18.
 */
// 搭建服务器,配置信息
var express = require("express");
var todoController = require("./controller/todoController");
var app = express();
app.set("view engine","ejs");
app.use(express.static("./css"));
// 调用方法
todoController(app);
app.listen("1234");