var register_user = (user, user_collection) => {
	var user_info = {
		"email"			: user.email,
		"pwd"			: user.pwd,
		"collection"	: user_collection
	};
	var class_user = require('../class/db_user_class');
	new_user = new class_user(user_info);

	new_user.exist((response) => {
		console.log(response);
	});
	return (true);
}

module.exports = register_user;