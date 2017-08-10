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

module.exports = router;