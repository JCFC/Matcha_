/*
** user object content email, pwd, and user_collection
*/

var crypto 				= require('crypto');

var db_user_class 		= function (user) {

	this.data_user 		= {
		"email" 		: user.email,
		"pwd"			: user.pwd,
	};
	this.collection 	= user.collection;
	this.data_user.pwd	= crypto.createHmac('sha256', "@1$%bc")
							.update(this.data_user.pwd)
							.digest('hex');

	this.query 	= function (data) {
		this.collection.find(data).toArray(function (err, result) {
			if (err) {
				return (-1);
			} else if (result.length) {
				return (true);
			} else {
				return (false);
			}
		});
	}

	this.add 	= function () {
		this.collection.insert(this.data_user);
	}

	this.exist 	= function () {
		var login = this.query({
				email: this.data_user.email
			});
		return (login);
	}

	this.find	= function () {
		return (this.query(this.data_user));
	}
}

module.exports = db_user_class;