var mongodb 	= require('mongodb'),
	MongoClient = mongodb.MongoClient,
	assert 		= require('assert'),
	url 		= 'mongodb://cjcf:adminadmin@ds048279.mlab.com:48279/matcha_';

MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected succesfully to server");
    db.createCollection("users");
   	db.close();
});