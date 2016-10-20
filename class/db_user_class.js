/*
** user object content email, pwd, and user_collection
*/


var db_user_class = function (user) {

	this.data_user = {
		"email" 		: user.email,
		"pwd"			: user.pwd,
	};

	this.collection = user.collection;

	this.find = function () {

		return (0);
	}

	this.add = function () {
		this.collection.insert(this.data_user);
		return (1);
	}
}

module.exports = db_user_class;