var mExpress = require('express');
var url = require('url');
var mFs = require('fs');
var oApp = mExpress();

var iPort = "8081"

//Change route to respode to http://127.0.0.1:8081/hello/world
oApp.get('/', function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    if (pathname == '/') {
        var vFile = 'index.html'
    } else {
        var vFile = pathname.substr(1);
    }
    mFs.readFile(vFile, function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
        } else {
            //Page found	  
            // HTTP Status: 200 : OK
            var aStrings = vFile.split(".");
            var sLastVal = aStrings.pop();
            var sResType = 'text/' + sLastVal;
            res.writeHead(200, { 'Content-Type': sResType });

            // Write the content of the file to response body
            res.write(data.toString());
            res.end();
        }
    })
});
oApp.get('/style.css', function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    mFs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
        } else {
            //Page found	  
            // HTTP Status: 200 : OK
            res.writeHead(200, { 'Content-Type': 'text/css' });

            // Write the content of the file to response body
            res.write(data.toString());
            res.end();
        }
    })
});

oApp.listen(iPort);

console.log("App running http://127.0.0.1:" + iPort + "/");
