/*
** user object content email, pwd, and user_collection
*/

var crypto 				= require('crypto'),
	assert 				= require('assert');

var db_user_class 		= function (user) {

	this.data_user 		= {
		"email" 		: user.email,
		"pwd"			: user.pwd,
	};
	this.collection 	= user.collection;
	this.data_user.pwd	= crypto.createHmac('sha256', "@1$%bc")
							.update(this.data_user.pwd)
							.digest('hex');

	this.add 	= function () {
		this.collection.insert(this.data_user);
	}

	this.exist 	= function () {

	}

	this.find	= function () {
		this.collection.find(this.data_user).toArray(function (err, result) {
			if (err) {
				return (-1);
			} else if (result.length) {
				return (true);
			} else {
				return (false);
			}
		});
	}

}

module.exports = db_user_class;