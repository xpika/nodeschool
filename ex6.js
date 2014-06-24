

var mymodule = require('./mymodule.js');

data = mymodule(process.argv[2],process.argv[3],function(err,data){
  data.forEach(function(v){
   
   console.log(v);

  });

});


