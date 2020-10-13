const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {
    let paint;
    beforeEach(function() {
        paint = new Paint(3);
    });

    it('should have litres', function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 3);
    });

    it('should not be empty', function() {
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('should empty', function() {
        paint.emptyPaint();
        assert.strictEqual(paint.litres, 0)
    });
});