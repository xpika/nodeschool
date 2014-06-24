
var map = require('through2-map')
var net = require('http');

var server = net.createServer(function (req,res) {

 req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
 })).pipe(res);

});

server.listen(process.argv[2]);


