exports.checkpass = module.exports.checkpass = function (password) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf("password") >= 0) {
        return false;
    }
    return true;
}