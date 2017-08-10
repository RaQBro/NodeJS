var express = require('express');
var app = express();
var phonebook = require('./lib/phonebook');

var oMongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://user1:userpass@ds159112.mlab.com:59112/trainingnodejs";

app.use(express.static('www'));

app.get('/contacts', function (req, res) {
    // var promiseProducts = mProducts.listProducts();

    var mongoDb = null;

    // oMongoClient.connect(MongoUrl)
    // .then(function (db) {
    //     return phonebook.listContacts(db);
    // })
    // .then(function (resultObject) {
    //     res.json(resultObject)
    // })
    // .then(function () {
    //     mongoDb.close();
    // })
    // })

    oMongoClient.connect(MongoUrl, function (err, db) {
        var mongoDb = db;
        phonebook.listContacts(db)
            .then(function (resultObject) {
                res.json(resultObject);
                mongoDb.close(); 
            });
    });
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
});
app.post('/', function (req, res) {
    // var promiseProducts = mProducts.listProducts();

    var mongoDb = null;

    oMongoClient.connect(MongoUrl)
        .then(function (db) {
            s
            return phonebook.insertContacts(db);
        })
        .then(function (resultObject) {
            res.json(resultObject)
        })
        .then(function () {
            mongoDb.close();
        })


});

var server = app.listen(3000, function () {

    var port = server.address().port
    console.log('Express app listening at http://localhost:%s', port)

})