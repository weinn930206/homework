/**
 * Created by lanou3g on 17/5/19.
 */
// var bodyParser = require("body-parser");
// var urlencode = bodyParser.urlencoded({extended:false});
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://todos:123456@ds147681.mlab.com:47681/tododb2");
// var todoSchema = new mongoose.Schema({
//     name:String
// });
// var Todo = mongoose.model("Todo",todoSchema);
// Todo({name:"a"}).save(function (err) {
//     if(err) throw err;
//     console.log("success");
// })
// module.exports = function (app) {
//     app.get("/",function (req,res) {
//         Todo.find({},function (err,data) {
//             if (err) throw err;
//             res.render("show",{item:data});
//         })
//     });
//     app.post("/",urlencode,function (req,res) {
//         Todo(req.body).save(function (err,data) {
//             if(err) throw err;
//             res.json(data);
//         })
//     });
//     app.delete("/:item",function (req,res) {
//         Todo.find({name:req.params.item}).remove(function (err,data) {
//             if(err) throw err;
//             res.json(data);
//         });
//     });
// }

// var bodyParser = require("body-parser");
// var urlencode = bodyParser.urlencoded({extended:false});
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://todos:123456@ds147681.mlab.com:47681/tododb2");
// var todoSchema = new mongoose.Schema({
//     name:String
// });
// var Todo = mongoose.model("Todo",todoSchema);
// Todo({name:"a"}).save(function (err) {
//     if(err) throw err;
//     console.log("success");
// });
// module.exports = function (app) {
//     app.get("/",function (req,res) {
//         Todo.find({},function (err,data) {
//             if(err) throw err;
//             res.render("show",{item:data});
//         })
//     })
//     app.post("/",urlencode,function (req,res) {
//         Todo(req.body).save(function (err,data) {
//             if(err) throw err;
//             res.json(data);
//         })
//     })
//     app.delete("/:item",function (req,res) {
//         Todo.find({name:req.params.item}).remove(function (err,data) {
//             if(err) throw err;
//             res.json(data);
//         })
//     })
// }

var bodyParser = require("body-parser");
var urlencode = bodyParser.urlencoded({extended:false});
var mongoose = require("mongoose");
mongoose.connect("mongodb://todos:123456@ds147681.mlab.com:47681/tododb2");
var todoShchema = new mongoose.Schema({
    name:String
});
var Todo = mongoose.model("Todo", todoShchema);
Todo({name:"a"}).save(function (err) {
    if(err) throw  err;
    console.log("success");
});
module.exports = function (app) {
    app.get("/",function (req,res) {
        Todo.find({},function (err,data) {
            if(err) throw  err;
            res.render("show",{item:data});
        })
    })
    app.post("/",urlencode,function (req,res) {
        Todo(req.body).save(function (err,data) {
            if(err) throw  err;
            res.json(data);
        })
    })
    app.delete("/:item",function (req,res) {
        Todo.find({name:req.params.item}).remove(function (err,data) {
            if(err) throw  err;
            res.json(data);
        })
    })
}




