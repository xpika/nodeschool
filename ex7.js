
var http = require('http');


var obj = http.get(process.argv[2],function(res){ 

  res.setEncoding('utf8');
  
  res.on('error', function(e) {
     console.log("Got error: " + e.message);
  });

  res.on('data',function(data){
     console.log(data);
  });

  res.on('end', function(){
   //console.log('end');
  });



});


