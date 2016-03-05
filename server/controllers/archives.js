var express = require('express');
var router = express.Router();
var WebPage = require('../models/webpage');
var fs = require('fs');
var Q = require('Q');
var path = require('path');
var tar = require('tar-fs');
var rimraf = require('rimraf');

router.get('/archives', function(req, res, next){
	WebPage.request('all', function(err, pages){
		if (err) next(err);
		else{
			res.status(200).json(pages);
		}
	});
});

router.get('/archive/:id', function(req, res, next){
	WebPage.find(req.params.id, function(err, page){
		if (err) next(err);
		else if (!page) next();
		else{
			var stream = page.getBinary(page.slug + '.tar', function(err){
				if (err) console.log(err);
				res.status(200).json({url: 'cache/' + page.slug + '/'});
			});
			
			stream.pipe(tar.extract(__dirname + '/../../client/cache/' + page.slug));
		}
	});
});

router.delete('/archive/:id', function(req, res, next){
	WebPage.find(req.params.id, function(err, page){
		if (err) next(err);
		else if (!page) next();
		else{
			page.destroy(function(err){
				if (err) next(err);
				else res.status(200).send();
			});
		}
	});
});

router.post('/archive', function(req, res, next){
	var url = req.body.url,
		slug = url.match(/^https?:\/\/(www\.)?(\w+)\/?/)[2] + '-' + (new Date().getTime()),
		scrapDestination = './scrap/' + slug,
		tarball = './scrap/' + slug + '.tar',
		webpage = null;
	
	console.log('Preparing to scrap ' + url);
	
	Q.ninvoke(WebPage, 'create', {
		'url': url,
		'slug': slug
	})
	.then(function(webpageInstance){
		console.log('DB object created');
		
		webpage = webpageInstance;
		
		//everything is ok for the user, the rest will be async
		res.status(200).send();
		
		//prepare scraper
		var scraper = require('website-scraper');
		
		var options = {
			urls: [url],
			directory: scrapDestination,
		};
		
		return scraper.scrape(options);
	})
	.then(function(result){
		console.log('Finished scraping');
		console.log(result);
		
		return packWebPage(tarball, scrapDestination);
	})
	.then(function(){
		var rstream = fs.createReadStream(tarball);
		
		return Q.ninvoke(webpage, 'attachBinary', rstream);
	})
	.then(function(){
		console.log(slug + 'tarball transfered to database');
		
		return Q.nfcall(fs.unlink, tarball);
	})
	.then(function(){
		console.log(tarball + ' deleted');
		
		return Q.nfcall(rimraf, scrapDestination);
	})
	.then(function(){
		console.log(scrapDestination + ' deleted');
	})
	.done();
});

function packWebPage(tarball, scrapDestination){
	var def = Q.defer();
	
	//create a tarball
	var writer = fs.createWriteStream(tarball);
	var packer = tar.pack(scrapDestination).pipe(writer);
	
	writer.on('finish', function(){
		def.resolve();
	});
	
	writer.on('error', function(err){
		def.reject(err);
	});
	
	return def.promise;
}



// Export the router instance to make it available from other files.
module.exports = router;
