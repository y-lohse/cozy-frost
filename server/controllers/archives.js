var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.status(200).sendFile('index.html');
});

router.post('/archive', function(req, res, next){
	var url = req.body.url,
		folder = url.match(/^https?:\/\/(\w+)\/?/)[1] + '-' + (new Date().getTime());
    
	var scraper = require('website-scraper');
	var options = {
		urls: [req.body.url],
		directory: './scrap/' + folder,
	};
	
	scraper.scrape(options).then(function(result){
//		console.log(result);//[{url: 'url', filename: 'index.html'}]
		console.log('done scraping');
	}, function(err){
		console.log(err);
	});
	
	res.redirect('/');
});

// Export the router instance to make it available from other files.
module.exports = router;
