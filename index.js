var cozydb = require('cozydb');
var WebPage = require('./server/models/webpage');
var fs = require('fs');
var tar = require('tar-fs');

cozydb.configure(__dirname, null, function(){
	WebPage.find('8f25dd6ab2cbeae4f64c5d2826001739', function(err, page){
		var writer = fs.createWriteStream('./scrap/nodejs-1456049545563.tar');
		var packer = tar.pack('./scrap/nodejs-1456049545563').pipe(writer);
		
		writer.on('finish', function(){
			var stream = fs.createReadStream('./scrap/nodejs-1456049545563.tar');
		
			page.attachBinary(stream, function(err) {
				console.log(err);
			});
		});
	});
});