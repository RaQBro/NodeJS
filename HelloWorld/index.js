/* Hello World! program in Node.js */ 
"use strict";

//required modules
var mHttp = require("http");

//variables
var iPort = 8081;

//create Http server
var oServer = mHttp.createServer(function(req, res){
    console.log("Request received");
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.write("Hello world\n");
    res.end('Response end\n'); 
});

oServer.listen(iPort);

console.log("Server running http://127.0.0.1:" + iPort + "/");