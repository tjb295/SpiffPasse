<!-- server.js -->
var express = require('express');
var app = express();
var server = require('http').Server(app);
var mongoose = require('mongoose');

//mongoose database
var mongoDB = 'mongodb://127.0.0.1/PRODUCTS_DB';
mongoose.connect(mongoDB);

//var config = require('/config/config');
//var products = require('/models/products_model');

app.use('/bootstrap', express.static(__dirname + '/css/'));
app.use('/js', express.static(__dirname + '/bootstrap-3.3.7-dist/'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/views', express.static(__dirname + '/views/'));

//serv the host file
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

server.listen(8081, '127.0.0.1', function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Server listening at http://%s:%s", host, port);
})