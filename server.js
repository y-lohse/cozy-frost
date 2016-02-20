var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*
    Configuration section.
*/
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('client'));


/*
    Define routes and their handler.
*/
var archivesController = require('./server/controllers/archives');
app.use(archivesController);

/*
    Start the HTTP server.
*/
var server = app.listen(9250, function (){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Listening at http://%s:%s', host, port);
});
