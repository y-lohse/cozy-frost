var express = require('express');
var router = express.Router();
var WebPage = require('../models/webpage');
var fs = require('fs');
var Q = require('Q');
var tar = require('tar-fs');

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
	
	//create the DB entry
	Q.ninvoke(WebPage, 'create', {
		'title': slug,
		'description':'',
		'url': url,
		'slug': slug,
		'processed': false,
		'archived': new Date(),
	})
	.then(function(webpageInstance){
		console.log('DB entry created');
		
		webpage = webpageInstance;
		
		//everything is ok for the user, the rest will be async
		res.status(200).json(webpage);
		
		//prepare scraper
		var scraper = require('website-scraper');
		
		var options = {
			urls: [url],
			directory: scrapDestination,
		};
		
		//start scraping
		return scraper.scrape(options);
	})
	.then(function(result){
		console.log('Finished scraping');
		
		//create a tarball containing allthe files
		return packWebPage(tarball, scrapDestination);
	})
	.then(function(){
		var rstream = fs.createReadStream(tarball);
		
		//insert the tarball in the database
		return Q.ninvoke(webpage, 'attachBinary', rstream);
	})
	.then(function(){
		console.log(slug + 'tarball transfered to database');
		
		//delete the tarball
		return Q.nfcall(fs.unlink, tarball);
	})
	.then(function(){
		console.log(tarball + ' deleted');
		
		//parse out some infos from the scrapped page
		return parsePageInfos(scrapDestination + '/index.html');
	})
	.then(function(infos){
		//update infos
		infos.title = infos.title || slug;
		infos.description = infos.description || infos.title;
		infos.processed = true;
		
		return Q.ninvoke(webpage, 'updateAttributes', infos);
	})
	.then(function(){
		//delete the files
		var rimraf = require('rimraf');
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

function parsePageInfos(file){
	var jsdom = require('jsdom');
	var def = Q.defer();
		
	jsdom.env(file, function(err, window){
		if (err) def.reject(err);
		else{
			var doc = window.document;

			var infos = {
				title: '',
				description: ''
			};
			
			var titleNode = doc.querySelector('title'),
				descriptionNode = doc.querySelectorAll('meta[name="description"]');
			
			if (titleNode) infos.title = titleNode.textContent;
			if (descriptionNode[0]) infos.description = descriptionNode[0].getAttribute('content');
			
			def.resolve(infos);
		}
	});
	
	return def.promise;
}



// Export the router instance to make it available from other files.
module.exports = router;
