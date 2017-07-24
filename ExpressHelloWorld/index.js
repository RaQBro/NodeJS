var express = require('express');
var app = express();
var iPort = "8081"
 

//Change route to respode to http://127.0.0.1:8081/hello/world
app.get('/hello/world', function (req, res) {
  res.send('Hello World');
})

app.post('/', function (req, res) {
  res.send('No post method available');
})
 
app.listen(iPort);

console.log("App running http://127.0.0.1:" + iPort + "/");
