const Convert = require('./index')
const assert = require('assert').strict;


describe("integration test", function() {
    it("should convet a single digit number", function() {
        assert.equal(Convert.convertNum(2), "two");
    });
});