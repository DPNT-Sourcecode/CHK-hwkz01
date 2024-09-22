var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');


describe('Greet tests', ()=> {
	it('Invalid Input', ()=> {
	    const result = checkout("AABE")
        assert.strictEqual(result,-1)
	});


    it('Simple String no promotions', ()=> {
	    const result = checkout("ABC")
        assert.strictEqual(result,80)
	});

    it('String with promotions', ()=> {
	    const result = checkout("AAAB")
        assert.strictEqual(result,160)
	});

});