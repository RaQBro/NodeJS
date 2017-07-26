"use strict"

//Modules
var mMongo = require("mongodb");
var mExpress = require("express")
var mUuid = require("uuid/v4");
var mOrders = require("./lib/orders");
var mProducts = require("./lib/products")

//Variables
var oExpress = mExpress();
var iPort = "8081";

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
        res.end();
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