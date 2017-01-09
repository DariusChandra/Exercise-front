var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function(req, res, next) {
    superagent.get('https://cnodejs.org/')
        .end(function(err, sres) {
            if (err) {
                return next(err);
            }

            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href'),
                    // author: $element.attr('title')
                });
            });
            $('.user_avatar img').each(function (idx, elem) {
                var $elem = $(elem);
                items.push( {
                    author: $elem.attr('title')
                });
            });
            res.send(items);
        });
});

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});

// 未完待续，现在无法同时显示title href 以及author.
