var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this._name = _name;
        this._weight = _weight;
    }
    ;
    Apple.prototype.getScale = function () {
        return this._weight;
    };
    ;
    Apple.prototype.getName = function () {
        return this._name;
    };
    ;
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this._name = _name;
        this._weight = _weight;
    }
    ;
    Tomato.prototype.getScale = function () {
        return this._weight;
    };
    ;
    Tomato.prototype.getName = function () {
        return this._name;
    };
    return Tomato;
}());
var Citrus = /** @class */ (function () {
    function Citrus(_name, _weight) {
        this._name = _name;
        this._weight = _weight;
    }
    ;
    Citrus.prototype.getScale = function () {
        return this._weight;
    };
    ;
    Citrus.prototype.getName = function () {
        return this._name;
    };
    ;
    return Citrus;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var sum;
        sum = this.products.reduce(function (result, current) { return result + current.getScale(); }, 0);
        return sum;
    };
    ;
    Scales.prototype.getNameList = function () {
        var list = [];
        this.products.forEach(function (elem) { return list.push(elem.getName()); });
        return list;
    };
    ;
    return Scales;
}());
var scales = new Scales();
var apple_1 = new Apple("green apple", 2.2);
var apple_2 = new Apple("red apple", 5);
var tomato_1 = new Tomato("cherry", 1.5);
var tomato_2 = new Tomato("yellow tomato", 3);
var citrus_1 = new Citrus("lime", 0.5);
var citrus_2 = new Citrus("lemon", 1.3);
var citrus_3 = new Citrus("bergamot", 0.9);
scales.add(apple_1);
scales.add(apple_2);
scales.add(tomato_1);
scales.add(tomato_2);
scales.add(citrus_1);
scales.add(citrus_2);
scales.add(citrus_3);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map