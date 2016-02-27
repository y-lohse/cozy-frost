var express = require('express');
var router = express.Router();
var WebPage = require('../models/webpage');
var fs = require('fs');
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

router.get('/view/:id', function(req, res, next){
	WebPage.find(req.params.id, function(err, page){
		console.log(req);
		console.log(req.baseUrl);
		
		if (err) next(err);
		else if (!page) next();
		else{
			var stream = page.getBinary(page.slug + '.tar', function(err){
				if (err) console.log(err);
//				res.redirect('../cache/' + page.slug);
				res.sendFile(path.resolve(__dirname + '/../../client/cache/' + page.slug + '/index.html'));
				//https://cloud.yannick-lohse.fr/apps/archives/view/a979284e57d2067a022348b774083f95
				//https://cloud.yannick-lohse.fr/apps/archives/cache/www-1456576897769
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
	console.log(req.body);
	var url = req.body.url,
		slug = url.match(/^https?:\/\/(\w+)\/?/)[1] + '-' + (new Date().getTime()),
		scrapDestination = './scrap/' + slug,
		tarball = './scrap/' + slug + '.tar';
	
	//prepare scraper
	var scraper = require('website-scraper');
	var options = {
		urls: [req.body.url],
		directory: scrapDestination,
	};
	
	console.log('Preparing to scrap ' + url);
	
	//create DB object
	WebPage.create({
		'url': url,
		'slug': slug
	}, function(err, webpage){
		if (err) next(err);
		else{
			console.log('DB object created');
			//everything is ok for the user, the rest will be async
			res.status(200).send();
			
			//start actual scraping
			scraper.scrape(options).then(function(result){
				console.log('done scraping');
				
				//create a tarball
				var writer = fs.createWriteStream(tarball);
				var packer = tar.pack(scrapDestination).pipe(writer);

				//then save the tarball to the db
				//it seems like we can't directly pipe the tar packing to the db because the DB wants the total content length up front
				writer.on('finish', function(){
					var rstream = fs.createReadStream(tarball);

					webpage.attachBinary(rstream, function(err) {
						if (err) console.log(err);
						else{
							console.log(slug + 'tarball transfered to database');
							//now we can clean up
							fs.unlink(tarball, function(err){
								if (err) console.log('error deleting tarball : ' + err);
								else console.log(tarball + ' deleted');
							});
							rimraf(scrapDestination, function(err){
								if (err) console.log('error deleting folder : ' + err);
								else console.log(scrapDestination + ' deleted');
							});
						}
					});
				});
			}, function(err){
				console.log('error while scraping ' + url + ' : ' + err);
			});
		}
	});
});

// Export the router instance to make it available from other files.
module.exports = router;
