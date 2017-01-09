// 引入'express'模块,并赋予'express'这个变量待用
var express = require('express');

// 不带参数调用express实例，返回express实例，将变量赋予app变量。
var app = express();

app.get('', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('app is listening at port 3000');
});
