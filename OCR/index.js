var Ngocr = require("Ng-ocr");
var fs = require("fs");
var stream = fs.createReadStream("hello_world.png");
Ngocr.decodeStream(stream, function(error, data){
  console.log(data); // Hello World! 
});