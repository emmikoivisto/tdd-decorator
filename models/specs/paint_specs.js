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

});