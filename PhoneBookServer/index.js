var express = require('express');
var app = express();
var iPort = "8081";

//Change route to respode to http://127.0.0.1:8081/

app.engine('.html', require('jade').renderFile);
app.get('/', function (req, res) {
    //var sColor = req.param("color");
    //res.send(sColor);
 //   fs.readFile('index.html',null,function(error, data){
 //       if (error) {
 //           res.writeHead(404);
  //      } else {
  //          res.writeHead(200, {'Content-type': 'text/html'});
  //          res.write(data.toString());
   //         res.end();
   //     }
  //  })
    app.engine('.html', require('jade').renderFile);
    res.render('index.html')
})

app.get('/views/style.css', function (req, res) {
    app.engine('.css', require('jade').renderFile);
    res.render('style.css')
})

app.post('/', function (req, res) {
  res.send('No post method available');
})
 
app.listen(iPort);

console.log("App running http://127.0.0.1:" + iPort + "/");

function addPerson (nune, prenume, numar, oras, email ) {


}