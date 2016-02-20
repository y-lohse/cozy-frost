var scraper = require('website-scraper');
var options = {
  urls: ['http://nodejs.org/'],
  directory: './scrap/nodejs',
};

scraper.scrape(options).then(function (result) {
	/* some code here */
    console.log('ok');
});