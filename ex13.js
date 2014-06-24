
var net = require('http');
var url = require('url');


var server = net.createServer(function (req,res) {
 ///api/parsetime?iso=2013-08-10T12:10:15.474Z

 url_parsed_path = url.parse(req.url).path;
 res.writeHead(200, { 'Content-Type': 'application/json' })
 var endPointName = '/api/parsetime?iso=';
 var endPointName2 = '/api/unixtime?iso=';
  
 console.log(url_parsed_path);
 if(url_parsed_path.slice(0,endPointName.length) == endPointName){
  
   console.log(datePart);
    
   var datePart = url_parsed_path.slice(endPointName.length);
   console.log(datePart);
   myDate = new Date(datePart); 

   var resultObj = {
     "hour": myDate.getHours(),
     "minute": myDate.getMinutes(),
     "second": myDate.getSeconds() 
   }
 } else if(url_parsed_path.slice(0,endPointName2.length) == endPointName2) {
    var datePart = url_parsed_path.slice(endPointName2.length);
    var g = new Date(datePart)

    var resultObj = {
      "unixtime": g.getTime()
    }
 }
 res.end(JSON.stringify(resultObj));
 
});


server.listen(process.argv[2]);


