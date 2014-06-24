
var http = require('http');

var obj = http.get(process.argv[2],function(res){ 
  debugger;
  res.setEncoding('utf8');
  var str = "";
  var chars = 0;
  
  res.on('error', function(e) {
     console.log("Got error: " + e.message);
  });

  res.on('data',function(data){
     str +=data;
     chars += data.length;
  });

  res.on('end', function(){
     console.log(chars);
     console.log(str);
  });
});


