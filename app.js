var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(5000, function(){
	console.log('Server is online on port 5000');
});

io.on('connection', function(socket){
	console.log('new connection made');
});
console.log('Finisehd');