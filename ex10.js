
var net = require('net');


//console.log(process.argv);
var server = net.createServer(function (socket) {

 var date = new Date();
 str = (""+date.getFullYear() +"-"+ "0"+(date.getMonth()+1) +"-"+ date.getDate() +" "+ date.getHours() +":"+date.getMinutes() );
 socket.write(str+"\n");
 socket.end();

});

server.listen(process.argv[2]);
