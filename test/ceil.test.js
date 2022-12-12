import pkg from 'chai';
const {expect} = pkg;

import ceil from '../src/ceil.js';
/*
* ceil(4.006)
* // => 5
*
* ceil(6.004, 2)
* // => 6.01
*
* ceil(6040, -2)
* // => 6100
*/
describe("Ceil.js tests", () => {

    it('First example', () => {
        expect(ceil(4.006)).to.equal(5);
    });

    it('Second example', () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });

    it('Third example', () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });

    it('Negative', () => {
        expect(ceil(-4.006)).to.equal(-4);
    });

    it('String', () => {
        expect(ceil("String")).to.deep.equal(NaN);
    });

});