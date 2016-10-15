var express = require('express');
var router = express.Router();
var PageSnapshot = require('../models/pagesnapshot');
var fs = require('fs');
var Q = require('q');
var zlib = require('zlib');
var tar = require('tar-fs');

router.get('/snapshots', function(req, res, next){
	PageSnapshot.request('all', function(err, pages){
		if (err) next(err);
		else{
			res.status(200).json(pages);
		}
	});
});

router.get('/snapshots/:id', function(req, res, next){
	PageSnapshot.find(req.params.id, function(err, page){
		if (err) next(err);
		else{
			res.status(200).json(page);
		}
	});
});

router.get('/snapshot/:id', function(req, res, next){
	PageSnapshot.find(req.params.id, function(err, page){
		if (err) next(err);
		else if (!page) next();
		else{
			var extractionPath = __dirname + '/../../client/cache/' + page.slug;
			
			//check if the page is already in cache
			fs.stat(extractionPath, function(err, stats){
				if (err){
					var stream = page.getBinary(page.slug + '.tar.gz', function(err){
						if (err) next(err);
						else res.status(200).json({url: 'cache/' + page.slug + '/'});
					});

					var pumpify = require('pumpify');
					var untar = pumpify(zlib.createGunzip(), tar.extract(extractionPath));

					stream.pipe(untar);
				}
				else{
					res.status(200).json({url: 'cache/' + page.slug + '/'});
				}
			});
		}
	});
});

router.delete('/snapshot/:id', function(req, res, next){
	PageSnapshot.find(req.params.id, function(err, page){
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

router.post('/snapshot', function(req, res, next){
	var url = req.body.url,
		slug = url.match(/^https?:\/\/(www\.)?(\w+)\/?/)[2] + '-' + (new Date().getTime()),
		scrapDestination = './scrap/' + slug,
		tarball = './scrap/' + slug + '.tar.gz',
		snapshot = null;
	
	console.log('Preparing to scrap ' + url);
	
	//create the DB entry
	Q.ninvoke(PageSnapshot, 'create', {
		'title': url,
		'description': url,
		'url': url,
		'slug': slug,
		'processed': false,
		'archived': new Date(),
	})
	.then(function(snapshotInstance){
		console.log('DB entry created');
		
		snapshot = snapshotInstance;
		
		//everything is ok for the user, the rest will be async
		res.status(200).json(snapshot);
		
		//prepare scraper
		var scraper = require('website-scraper');
		
		var options = {
			urls: [url],
			directory: scrapDestination,
			request: {
				headers: {
					'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
				},
			},
		};
		
		//start scraping
		return scraper.scrape(options);
	})
	.then(function(result){
		console.log('Finished scraping');
		
		//create a tarball containing allthe files
		return packSnapshot(tarball, scrapDestination);
	})
	.then(function(){
		var rstream = fs.createReadStream(tarball);
		
		//insert the tarball in the database
		return Q.ninvoke(snapshot, 'attachBinary', rstream);
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
		
		return Q.ninvoke(snapshot, 'updateAttributes', infos);
	})
	.then(function(){
		//delete the files
		var rimraf = require('rimraf');
		return Q.nfcall(rimraf, scrapDestination);
	})
	.then(function(){
		console.log(scrapDestination + ' deleted');
	})
	.catch(function(err){
		//if anything fails, delete the db entry
		console.log('Processing of ' + url + ' failed:');
		console.log(err);
		if (snapshot) snapshot.destroy(function(){});
	})
	.done();
});

function packSnapshot(tarball, scrapDestination){
	var def = Q.defer();
	
	var gzip = zlib.createGzip();
	
	//create a tarball
	var writer = fs.createWriteStream(tarball);
	var packer = tar.pack(scrapDestination).pipe(gzip).pipe(writer);
	
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
