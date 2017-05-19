/**
 * Created by lanou3g on 17/5/19.
 */
// 搭建服务器
// var express = require("express");
// var process = require("./controller/process");
// var app = express();
// app.set("view engine", "ejs");
// app.use("./css");

// 调用方法
// process(app);
// app.listen("2222");


// var express = require("express");
// var process = require("./controller/process");
// var app = express();
// app.set("view engine","ejs");
// app.use(express.static("./css"));
// process(app);
// app.listen("1212");


var express = require("express");
var process = require("./controller/process");
var app = express();
app.set("view engine","ejs");
app.use(express.static("./css"));
process(app);
app.listen("1234");