var express 	= require('express'),
	app 		= express(),

	routes 		= require('./routes/index'),
	connect 	= require('./routes/connect'),
	register	= require('./routes/register'),
	db			= require('./models/db');

db.connect( () => {
	
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
