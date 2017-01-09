var eventproxy = require('eventproxy'),
    superagent = require('superagent'),
    cheerio = require('cheerio'),
    url = require('url');

var cnodeUrl = 'https://cnodejs.org';

superagent.get(cnodeUrl)
    .end(function(err, res) {
        if (err) {
            return console.error(err);
        }
        var topicUrls = [];
        var $ = cheerio.load(res.text);
        $('#topic_list .topic_title').each(function(idx, element) {
            var $element = $(element);
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });

        var ep = new eventproxy();

        ep.after('topic_html', topicUrls.length, function(topics) {
            topics = topics.map(function( topicPair) {
                var topicUrl = topicPair[0],
                    topicHtml = topicPair[1],
                    $ = cheerio.load(topicHtml);

                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    conment1: $('.reply_content').eq(0).text().trim(),
                });
            });

            console.log('final:');
            console.log(topics);
        });

        topicUrls.forEach(function (topicUrl) {
            superagent.get(topicUrl)
                .end(function(err, res) {
                    console.log('fecth ' + topicUrl + ' successful');
                    ep.emit('topic_html', [topicUrl, res.text]);
                });
        });
    });

