
var fs = require('fs')
var path = require('path');


function ls(dir,extension,callback){
  fs.readdir(dir, function (err, list) {
    var list2 = [];
    if(err){
      callback(err);
    } else {
      for(var i in list){
        var file = list[i];
        if (path.extname(file) === '.' + extension){
          list2.push(file);
        }
      }
      callback(null,list2);
    }
  });
}


module.exports = ls;



