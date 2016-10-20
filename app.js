var express = require('express');
var app = express();

var routes = require('./routes/index');
var connect = require('./routes/connect');
var register = require('./routes/register');
var db = require('./models/db');

db.connect(function () {
	
	app.set('view engine', 'ejs');

	app.use(express.static(__dirname + '/public'));
	app.use('/', routes);
	app.use('/', connect);
	app.use('/', register);

	app.use(function(req, res, next){
	    res.setHeader('Content-Type', 'text/plain');
	    res.status(404).send('UNFOUND PAGE!');
	});

	app.listen(8080);

});
