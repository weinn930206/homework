/**
 * Created by lanou3g on 17/5/18.
 */
var bodyParser = require("body-parser");

var urlencode= bodyParser.urlencoded({extended:false});
// var item = [{name:"a"},{name:"b"}];

// 引入模块
var mongoose = require("mongoose");
// 链接数据库
mongoose.connect("mongodb://todos:123456@ds147681.mlab.com:47681/tododb2");
// 创建数据库字段类型(存储内容是什么类型)
var todoSchema = new mongoose.Schema({
    name:String
});
// 创建数据模型
var Todo = mongoose.model("Todo",todoSchema);
// 使用数据模型向数据库中存储数据
Todo({name:"a"}).save(function (err) {
    if(err) throw  err;
    console.log("成功");
});





// 处理逻辑(增删改查)
module.exports = function (app) {
    // 请求数据
    app.get("/todo",function (req,res) {
        // 属于数据模型查询数据库中所有内容
        Todo.find({},function (err,data) {
            if(err) throw err;
            // 将数据库中内容,返回客户端
            res.render("index",{item:data});
        })

    });
    // 传输数据
    app.post("/todo",urlencode,function (req,res) {
        Todo(req.body).save(function (err,data) {
            if (err) throw err;
            res.json(data);
        });
        // item.push(req.body);

    });
    // 删除数据
    app.delete("/todo/:item",function (req,res) {
        Todo.find({name:req.params.item}).remove(function (err,data) {
            if (err) throw err;
            res.json(data);
        });
        // item = item.filter(function (todo) {
        //     var data = todo.name !== req.params.item;
        //     retursrn data;
        // })
        // res.json(item);

    });

}