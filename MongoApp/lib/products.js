exports.configprod = module.exports.configprod = {
    MongoClient: null,
    MongoUrl: ""
};

exports.createProduct = module.exports.createProduct = function createProduct() {
    console.log("Prod create")
};

exports.updateProduct = module.exports.updateProduct = function updateProduct() {
    console.log("Prod update")
};

exports.listProducts = module.exports.listProducts = function listProducts() {
    var mongoClient = this.configprod.MongoClient;
    var mongoUrl = this.configprod.MongoUrl;

    // mongoClient.connect(mongoUrl, function (err, db) {
    //     if (err) throw err;
    //     var query = {};
    //     var prodlist = db.collection("products").find(query).toArray();
    //     var query = {};

    //     db.collection("");

    //     db.close();
    // });
    console.log("Prod list")
};

exports.getProduct = module.exports.getProduct = function getProduct() {
    console.log("Prod get")
};

exports.deleteProduct = module.exports.deleteProduct = function deleteProduct() {
    console.log("Prod delete")
};