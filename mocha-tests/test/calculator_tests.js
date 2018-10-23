const {addition,subtract,multiply,divide} = require('../src/simple_calculator.js');

const chai = require('chai');
const expect = chai.expect;

describe("calculator tests", () => {
    it("does addition ok", (done) => {
        expect(addition(1 , 1)).to.equal(2);
        expect(addition(2,1)).not.to.equal(1);
        done();
    });

    it("does multiply ok", (done) => {
        expect(multiply(2 , 1)).to.equal(2);
        expect(multiply(2,1)).not.to.equal(1);
        done();
    });
    it("does division ok", (done) => {
        expect(divide(2 , 1)).to.equal(2);
        expect(divide(2,1)).not.to.equal(1);
        done();
    });
});
























/*it("does subtraction ok", (done) => {
    expect(subtract(1 , 1)).to.equal(0);
    expect(subtract(1,1)).not.to.equal(1);
    done();
});*/