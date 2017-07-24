/* Hello World! program in Node.js */ 
"use strict";

//required modules
var mHttp = require("http");

//variables
var iPort = 8081;
var oResponse = {
    "returnCode" : "1",
    "returnMessage" : "Everything ok",
    "returnDate" : null
};
//create Http server
var oServer = mHttp.createServer(function(req, res){
    console.log("Request received");
    res.writeHead(200, {'Content-Type': 'application/json'}); 

    res.write(JSON.stringify(oResponse));
    res.end(); 
});

oServer.listen(iPort);

console.log("Server running http://127.0.0.1:" + iPort + "/");