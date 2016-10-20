var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://cjcf:adminadmin@ds048279.mlab.com:48279/matcha_';
var db;

exports.connect = function(callback) {
  MongoClient.connect(mongoUrl, function(err, database) {
    if (err) throw err;
    db = database;
    console.log("Connection established");
  	callback();
  });
}

exports.users = function() {
  return (db.collection('users'));
}