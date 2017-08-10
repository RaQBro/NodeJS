exports.config = module.exports.config = {};

exports.createContact = module.exports.createContact = function createContact() {

    console.log("Contact create")
};
exports.updateContact = module.exports.updateContact = function updateContact() {
    console.log("Contact update")
};
exports.listContacts = module.exports.listContacts = function listContacts(db) {
    mongoDb = db;
    var query = {};
    return db.collection("persondetail").find(query).toArray();
    console.log("Contact list")
};
exports.getContact = module.exports.getContact = function getContact() {
    console.log("Contact get")
};
exports.deleteContact = module.exports.deleteContact = function deleteContact() {
    console.log("Contact delete")
};