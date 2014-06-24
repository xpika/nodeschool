

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  for(i in list){
   var file = list[i];
   if (path.extname(file) === '.' + process.argv[3])
     console.log(file)
  }
})
