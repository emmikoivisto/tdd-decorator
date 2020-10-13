const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator(0);
    })
    it('should have empty paintstock', function() {
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 0)
    });

});