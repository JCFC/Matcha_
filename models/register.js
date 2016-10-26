var register_user = (user, user_collection, callback) => {
	var user_info = {
		"email"			: user.email,
		"pwd"			: user.pwd,
		"collection"	: user_collection
	};
	var class_user = require('../class/db_user_class');
	new_user = new class_user(user_info);

	const test = new_user.exist((response) => {
		if (response === false) {
			new_user.add();	
			return callback(true)
		}
		return callback(false);
	});
}

module.exports = register_user;