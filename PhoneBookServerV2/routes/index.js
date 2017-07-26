var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");
var mFs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express'
  mFs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      res.end();
    } else {
      // HTTP Status: 200 : OK
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    }
  })
});

router.get('/thelist', function (req, res, next) {
  var mongoClient = mongodb.MongoClient;

  var url = "mongodb://user1:userpass@ds159112.mlab.com:59112/trainingnodejs";
  mongoClient.connect(url, function (err, db) {
    if (err) {
      console.log("Unable to connect to the server");
    } else {
      console.log("Connection OK");
      var collection = db.collection('persondetail');
      collection.find({}).toArray(function (err, results) {
        if (err) {
          res.send(err);
        } else if (results.length) {
          res.render('persondetail', {
            "persondetail": results
          });
        } else {
          res.send("No documents found");
        }
        db.close();
      });
    }
  })
});

module.exports = router;