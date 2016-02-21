var cozydb = require('cozydb');
var WebPage = require('./server/models/webpage');
var fs = require('fs');

cozydb.configure(__dirname, null, function(){
	WebPage.find('8f25dd6ab2cbeae4f64c5d2826001739', function(err, page){
		stream = fs.createReadStream('./scrap/nodejs-1456049545563/index.html');
		page.attachBinary(stream, function(err) {
			console.log(err);
		});
	});
});