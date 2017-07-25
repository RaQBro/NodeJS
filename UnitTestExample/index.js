console.log("unit test");

var myValidator = require("./lib/passcheck");

var password = 'test';
var valid = myValidator.checkpass(password);

console.log("Your password: " + password + " is: " + valid);