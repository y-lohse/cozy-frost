var express = require('express');
var router = express.Router();
var WebPage = require('../models/webpage');
var fs = require('fs');

router.get('/archives', function(req, res, next){
	WebPage.request('all', function(err, pages){
		if (err) next(err);
		else{
			res.status(200).json(pages);
		}
	});
});

router.get('/archive/:id', function(req, res, next){
	console.log(req.params.id);
	WebPage.find(req.params.id, function(err, page){
		if (err) next(err);
		else{
			var stream = page.getBinary('index.html', function(err){
				console.log(err);
				res.status(200).sendFile(__dirname + '/index.html');
			});
			stream.pipe(fs.createWriteStream(__dirname + '/index.html'));
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
//	
//	res.redirect('/');
});

// Export the router instance to make it available from other files.
module.exports = router;
