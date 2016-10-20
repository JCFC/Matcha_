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

	this.query 	=  (data, callback) => {
		var value = this.collection.find(data).toArray(function (err, result) {
			if (err) {
				console.log("WTF")
				return callback(-1);
			} else if (result.length) {
				console.log("ok");
				return callback(true);
			} else {
				console.log("nop");
				return callback(false);
			}
		});
	}

	this.add 	=  () => {
		this.collection.insert(this.data_user);
	}

	this.exist 	=  (callback) => {
		var login = this.query({
				email: this.data_user.email
			}, callback);
		return (login)
	}

	this.find	= () => {
		return (this.query(this.data_user));
	}
}

module.exports = db_user_class;