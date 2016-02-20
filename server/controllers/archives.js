var express = require('express');
var router = express.Router();
var WebPage = require('../models/webpage');

router.get('/', function(req, res, next){
	WebPage.request('all', function(err, pages){
		if (err) next(err);
		else{
//			res.status(200).sendFile('index.html');
			res.status(200).json(pages);
		}
	});
});

router.post('/archive', function(req, res, next){
	var url = req.body.url,
		folder = url.match(/^https?:\/\/(\w+)\/?/)[1] + '-' + (new Date().getTime());
	
	WebPage.create({
		'url': url
	}, function(err, webpage){
		if (err) next(err);
		else{
			console.log(webpage);
			res.redirect('/');
		}
	});
    
//	var scraper = require('website-scraper');
//	var options = {
//		urls: [req.body.url],
//		directory: './scrap/' + folder,
//	};
//	
//	scraper.scrape(options).then(function(result){
////		console.log(result);//[{url: 'url', filename: 'index.html'}]
//		console.log('done scraping');
//	}, function(err){
//		console.log(err);
//	});
//	
//	res.redirect('/');
});

// Export the router instance to make it available from other files.
module.exports = router;
