var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db = require('../models/db');

router.get('/register', function(req, res, next) {
	res.render('pages/register');
});

router.post('/register/user', urlencodedParser, function(req, res, next) {
	console.log(req.body.email);
	collection_users = db.users();
	console.log(collection_users);
	collection_users.insert({email: req.body.email});
	res.redirect('/');
})

module.exports = router;