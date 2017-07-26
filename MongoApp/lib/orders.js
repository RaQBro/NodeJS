exports.config = module.exports.config = {
    MongoClient: null,
    MongoUrl: ""
};

exports.createOrder = module.exports.createOrder = function createOrder() {
    console.log("Order create")
};
exports.updateOrder = module.exports.updateOrder = function updateOrder() {
    console.log("Order update")
};
exports.listOrders = module.exports.listOrders = function listOrders() {
    console.log("Order list")
};
exports.getOrder = module.exports.getOrder = function getOrder() {
    console.log("Order get")
};
exports.deleteOrder = module.exports.deleteOrder = function deleteOrder() {
    console.log("Order delete")
};