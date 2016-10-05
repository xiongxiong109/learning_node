// 使用request抓取网页内容
var request = require('request');
// var cheerio = require('cheerio');

module.exports = function(url, cb) {

url = url || 'https://movie.douban.com/subject/25815034/';
request(url, (err, response, body) => {

	// 如果请求成功, 将获取到的网页内容直接发送到本地
	if (!err && response.statusCode == 200) {
		// 使用cheerio获取爬虫抓取到的网页内容
		// var $ = cheerio.load(body);
		// var title = ($('h1').find('span[property="v:itemreviewed"]').text());
		// res.send(body);
		// res.render('practice/spider', {title: title});
		cb && cb(body);
	} else {
		// res.send('spider');
		cb && cb(err);
	}

});

}