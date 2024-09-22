var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');


describe('Checkout tests', ()=> {
	it('Invalid Input item not in stock', ()=> {
	    const result = checkout("AABQ")
        assert.strictEqual(result,-1)
	});

    it('Exchange for Item', ()=> {
	    const result = checkout("EEB")
        assert.strictEqual(result, 80)
	});

    it('Exchange for Item', ()=> {
	    const result = checkout("EEBBB")
        assert.strictEqual(result, 110)
	});

    it('Invalid Not a string', ()=> {
	    const result = checkout("-1")
        assert.strictEqual(result,-1)
	});


    it('Simple String no promotions', ()=> {
	    const result = checkout("ABC")
        assert.strictEqual(result,100)
	});

    it('String with promotions', ()=> {
	    const result = checkout("AAAB")
        assert.strictEqual(result,160)
	});

    it('String with multiple promotionsof same level', ()=> {
	    const result = checkout("AAAAAAAAABEE")
        assert.strictEqual(result,460)
	});


});