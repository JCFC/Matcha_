var mongodb 	= require('mongodb'),
	MongoClient = mongodb.MongoClient,
	mongoUrl 	= 'mongodb://cjcf:adminadmin@ds048279.mlab.com:48279/matcha_',
	db;

exports.connect = (callback) => {
  MongoClient.connect(mongoUrl, function(err, database) {
    if (err) throw err;
    db = database;
    console.log("Connection established");
  	callback();
  });
}

exports.users = () => {
  return (db.collection('users'));
}

