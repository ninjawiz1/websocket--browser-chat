var express = require('express');
var socket = require('socket.io');

// App asetup
var app = express();
var server = app.listen(2000,function(){
    console.log('listening port 2000...');
})

// static files

app.use(express.static('public'));

// socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.emit('chat',data);
    });

socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
})

});