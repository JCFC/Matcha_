var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://cjcf:adminadmin@ds048279.mlab.com:48279/matcha_';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    db.createCollection("users");
   	db.close();
  }
});