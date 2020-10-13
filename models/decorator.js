const Decorator = function() {
    this.paintStock = [];
};


Decorator.prototype.numberOfStock = function() {
    return this.paintStock.length;
};

Decorator.prototype.addPaint = function(can) {
    this.paintStock.push(can);
};


Decorator.prototype.calculateTotal = function

module.exports = Decorator;