var express = require('express');
var router = express.Router();

router.get('/connect', function(req, res, next) {
	res.render('pages/connect');
});

module.exports = router;