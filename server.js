/* Node server file. */

var express = require('express');
var app = express();
var port = 2500;

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Welcome to the Bootstrap Chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

console.log("Server running on port: " + port);