var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log("Connected to db");
});

var products = mongoose.Schema({
	name: String,
	stock: int,
	size: String,
	color: String
});