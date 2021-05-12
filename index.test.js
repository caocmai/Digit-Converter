const Convert = require('./index')
const assert = require('assert').strict;


describe("unit test", function() {
    it("should convet a single digit number", function() {
        assert.equal(Convert.convertNum(2), "two");
    });
});

describe("unit test", function() {
    it("should convet a double digit number", function() {
        assert.equal(Convert.convertNum(23), "twenty three");
    });
});

describe("unit test", function() {
    it("should convet a triple digit number", function() {
        assert.equal(Convert.convertNum(345), "three hundred and fourty five");
    });
});