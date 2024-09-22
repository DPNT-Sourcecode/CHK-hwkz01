var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');


describe('Checkout tests', ()=> {
	it('Invalid Input item not in stock', ()=> {
	    const result = checkout("AABa")
        assert.strictEqual(result,-1)
	});

	it('Task 5 adding alphabet post 3 Ys', ()=> {
	    const result = checkout("YYY")
        assert.strictEqual(result,45)
	});

	it('Task 5 adding alphabet post 3 Ys X', ()=> {
	    const result = checkout("YYXY")
        assert.strictEqual(result,62)
	});

    it('Exchange for Item', ()=> {
	    const result = checkout("EEB")
        assert.strictEqual(result, 80)
	});

    it('Exchange for Item with promotion', ()=> {
	    const result = checkout("EEBBB")
        assert.strictEqual(result, 125)
	});

    it('Exchange for Item on oneself multiple', ()=> {
	    const result = checkout("FFFF")
        assert.strictEqual(result, 30)
	});

    it('Exchange for Item on oneself', ()=> {
	    const result = checkout("FFF")
        assert.strictEqual(result, 20)
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

    it('String with multiple promotions of same level', ()=> {
	    const result = checkout("AAAAAAAAABEE")
        assert.strictEqual(result,460)
	});


});