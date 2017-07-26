var mExpress = require('express');
var url = require('url');
var mFs = require('fs');
var oApp = mExpress();

var iPort = "8081"

//Change route to respode to http://127.0.0.1:8081/hello/world
oApp.get('/', function (req, res) {
    var oUrl = url.parse(req.url);
    var pathname = oUrl.pathname;
    console.log("Request for " + pathname + " received.");
    if (pathname == '/' && oUrl.query == null) {
        var vFile = 'index.html';
    }
    if (oUrl.query != null) {
        addPerson(oUrl.query)

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

function addPerson(oPerson) {
    var obj = {
        persons: []
    };

    var json = JSON.stringify(obj);

    mFs.writeFile('persons.json', json, 'utf8', function (err) {
        if (err) throw err;
    });

    mFs.readFile('persons.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            obj.persons.push({
                nume: oPerson.nume,
                prenume: oPerson.prenume,
                numar: oPerson.numar,
                oras: oPerson.oras,
                email: oPerson.email
            });
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('persons.json', json, 'utf8', callback); // write it back 
        }
    });
}