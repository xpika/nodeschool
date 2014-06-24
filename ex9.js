
var http = require('http');

var strs = {}
for(var i=0;i<3;i++){(function(i){
  http.get(process.argv[2+i],function(res){ 

    res.setEncoding('utf8');
    var str = "";
    
    res.on('error', function(e) {
       console.log("Got error: " + e.message);
    });

    res.on('data',function(data){
       str += data;
    });

    res.on('end', function(){
      strs[i+""]=str;
      console.log(strs.length);
      if(strs.length==3){
        for(q in strs){
          console.log(strs[""+q+""]);
        }
      }
    });
  });
})(i);}

