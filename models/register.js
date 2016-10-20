var register_user = function (user, user_collection) {
	var user_info = {
		"email"			: user.email,
		"pwd"			: user.pwd,
		"collection"	: user_collection
	};
	var class_user = require('../class/db_user_class');
	new_user = new class_user(user_info);

	new_user.add(user_info);
	return (true);
}

module.exports = register_user;