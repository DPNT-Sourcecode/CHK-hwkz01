var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');


describe('Greet tests', ()=> {
	it('Return should be World with no name', ()=> {
	    const result = hello()
        assert.strictEqual(result,"Hello, World!")
	});


    it('Return should be name with no name', ()=> {
	    const result = hello("Ajay")
        assert.strictEqual(result,"Hello, Ajay!")
	});
});