/*
** user object content email, pwd, and user_collection
*/

var db_user_class = function (user) {

	this.data_user 		= {
		"email" 		: user.email,
		"pwd"			: user.pwd,
	};

	this.collection 	= user.collection;

	var crypto 			= require('crypto');
	this.data_user.pwd	= crypto.createHmac('sha256', "@1$%bc")
							.update(this.data_user.pwd)
							.digest('hex');


	this.find		= function () {

		return (0);
	}

	this.add 		= function () {
		this.collection.insert(this.data_user);
		return (1);
	}
}

module.exports = db_user_class;