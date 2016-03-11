var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cozydb = require('cozydb');

/*
    Configuration section.
*/
app.use(bodyParser.json({
	type: '*/*'
}));
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
app.use(express.static('client'));


/*
    Define routes and their handler.
*/
var snapshotsController = require('./server/controllers/snapshots');
app.use(snapshotsController);

/*
    Start the HTTP server.
*/
cozydb.configure(__dirname, null, function(){
	var server = app.listen(9255, function (){
		var host = server.address().address;
		var port = server.address().port;

		console.log('Listening at http://%s:%s', host, port);
	});
});
