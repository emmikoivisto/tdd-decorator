const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator(0);
        can1 = new Paint(3);
        can2 = new Paint(5);
    })

    it('should have empty paintstock', function() {
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 0)
    });

    it('should add paint to stock', function() {
        decorator.addPaint('5');
        const actual = decorator.numberOfStock();
        assert.strictEqual(actual, 1);
    });

    it('should calculate total', function() {
        
    })
});

