var chai = require("chai");
var passcheck = require("../lib/passcheck.js");

describe("passcheck", function() {
   describe(".checkpass(password)", function() {
       it("should have minimum 8 char lenght", function(){
           var password = ["123456"];
           var results = passcheck.checkpass(password);

           chai.expect(results).to.be.equal(false);

           var password = ["12345678"];
           var results = passcheck.checkpass(password);

           chai.expect(results).to.be.equal(true);
       });
       it("should not contain password", function(){
           var password = ["password1"];
           var results = passcheck.checkpass(password);

           chai.expect(results).to.be.equal(false);

           var password = ["blablabla"];
           var results = passcheck.checkpass(password);

           chai.expect(results).to.be.equal(true);
       });
   });
});