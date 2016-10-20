var express 			= require('express'),
	router 				= express.Router(),
	bodyParser 			= require('body-parser'),
	urlencodedParser	= bodyParser.urlencoded({ extended: false }),
	db 					= require('../models/db');

router.get('/register', function(req, res, next) {
	res.render('pages/register');
});

router.post('/register/user', urlencodedParser, function(req, res, next) {
	var register 	= require('../models/register');
	if (register(req.body, db.users()) == false) {
		res.redirect('/register?error=exist');
	} else {
		res.redirect('/');
	}
})

module.exports = router;