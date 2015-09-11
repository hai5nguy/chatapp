var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/ChatApp';
mongo.connect(url, function(err, db) {
  console.log("Connected to MongoDB server.");

	app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
	});
	app.use('/', express.static(__dirname + '/') )

	server.listen(5000, function(){
		console.log('Server is online on port 5000');
	});

	io.on('connection', function(socket){
		console.log('new connection made');
		socket.on('chat1', function(data){
			io.emit('chat1', data);
			console.log(data);
			db.collection('chats').insert({user: 'matt', message: data.hello}, function(err, inserted){
				if (err) throw err;
				console.log("insert success" + JSON.stringify(inserted));
			});
		});
	});
});
