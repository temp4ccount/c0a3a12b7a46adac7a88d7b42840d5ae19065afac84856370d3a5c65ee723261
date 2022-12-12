import pkg from 'chai';
const {expect} = pkg;

import castArray from '../src/castArray.js';

const salad = {type:"Chicken salad", cal:"500", price:"1000"};

describe("CastArray.js tests", () => {

    it('Int', () => {
        expect(castArray(1)).to.deep.equal([1]);
    });

    it('String', () => {
        expect(castArray("Test")).to.deep.equal(["Test"]);
    });

    it('Array', () => {
        expect(castArray(["First", "Second"])).to.deep.equal(["First", "Second"]);
    });

    it('Object', () => {
        expect(castArray(salad)).to.deep.equal([salad]);
    });

});