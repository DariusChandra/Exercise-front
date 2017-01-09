var express = require('express');
var utility = require('utility');

var app = express();

app.get('',function(req, res) {
    var q = req.query.q;
    var shaValue = utility.sha1(q);
    res.send(shaValue);
});

app.listen(3000, function(req, res) {
    console.log('app is running at port 3000');
});
