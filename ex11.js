
var fs = require('fs');

var net = require('http');

var server = net.createServer(function (req,res) {

var readStream = fs.createReadStream(process.argv[3]);
  readStream.pipe(res);
});

server.listen(process.argv[2]);

