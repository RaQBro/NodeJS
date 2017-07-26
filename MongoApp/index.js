"use strict"

//Modules
var mMongo = require("mongodb");
var mExpress = require("express")
var mUuid = require("uuid/v4");
var mOrders = require("./lib/orders");
var mProducts = require("./lib/products");

var oMongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://user1:userpass@ds159112.mlab.com:59112/trainingnodejs";

//Variables
var oExpress = mExpress();
var iPort = "8081";

//Init mongo vars

mProducts.configprod.MongoClient = oMongoClient;
mProducts.configprod.MongoUrl = MongoUrl;
mOrders.config.MongoClient = oMongoClient;
mOrders.config.MongoUrl = MongoUrl;

//Products
{
    //create
    oExpress.put('/products', function (req, res) {
        res.end();
    });
    //update
    oExpress.post('/products', function (req, res) {
        res.end();
    });
    //get list
    oExpress.get('/products', function (req, res) {
        // var promiseProducts = mProducts.listProducts();
        
        var mongoDb = null;

        oMongoClient.connect(MongoUrl)
        .then(function(db){
            mongoDb = db;
            var query = {};
            return db.collection("products").find(query).toArray();
        })
        .then (function(resultObject){
            res.json(resultObject)
        })
        .then (function (){
            mongoDb.close();
        })


    });
    //delete
    oExpress.delete('/products', function (req, res) {
        res.end();
    });
}
//Orders
{
    //create
    oExpress.put('/orders', function (req, res) {
        res.end();
    });
    //update
    oExpress.post('/orders', function (req, res) {
        res.end();
    });
    //get list
    oExpress.get('/orders', function (req, res) {
        res.end();
    });
    //delete
    oExpress.delete('/orders', function (req, res) {
        res.end();
    });
}

//HTTP server listening
oExpress.listen(iPort, function () {
    console.log("App running http://127.0.0.1:" + iPort + "/");
});