var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    ;
    Product.prototype.getScale = function () {
        return this.weight;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    ;
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    ;
    return Tomato;
}(Product));
var Citrus = /** @class */ (function (_super) {
    __extends(Citrus, _super);
    function Citrus(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    ;
    return Citrus;
}(Product));
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