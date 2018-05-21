//model for user data
var mongoose = require('mongoose');

//user schema
var userSchema = new mongoose.Schema({
	uid: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true },
	first_name : {type: String, required: true},
	last_name : {type: String, required: true},
	cart: {type: Array}
	hash: String,
	salt: String
});

module.exports = mongoose. model('user', user_schema);