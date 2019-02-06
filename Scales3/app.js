var ScalesStorageEngineArray = (function () {
    function ScalesStorageEngineArray() {
        this._storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this._storage.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this._storage[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this._storage.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = (function () {
    function ScalesStorageEngineLocalStorage() {
        window.localStorage.clear();
    }
    ;
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        window.localStorage.setItem(String(this.getCount()), JSON.stringify(item));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var product = JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(product._name, Number(product._weight));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return window.localStorage.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Product = (function () {
    function Product(_name, _weight) {
        this._name = _name;
        this._weight = _weight;
    }
    ;
    Product.prototype.getScale = function () {
        return this._weight;
    };
    ;
    Product.prototype.getName = function () {
        return this._name;
    };
    ;
    return Product;
}());
var Scales = (function () {
    function Scales(_storage) {
        this._storage = _storage;
    }
    ;
    Scales.prototype.add = function (item) {
        this._storage.addItem(item);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        var count = this._storage.getCount();
        for (var i = 0; i < count; i++) {
            sum += this._storage.getItem(i).getScale();
        }
        return sum;
    };
    ;
    Scales.prototype.getNameList = function () {
        var list = [];
        var count = this._storage.getCount();
        for (var i = 0; i < count; i++) {
            list.push(this._storage.getItem(i).getName());
        }
        return list;
    };
    ;
    return Scales;
}());
var newArrStorage = new ScalesStorageEngineArray();
var newArrScales = new Scales(newArrStorage);
var newLocalStorage = new ScalesStorageEngineLocalStorage();
var newLSScales = new Scales(newLocalStorage);
var apple_1 = new Product("green apple", 2.2);
var apple_2 = new Product("red apple", 5);
var tomato_1 = new Product("cherry", 1.5);
var tomato_2 = new Product("yellow tomato", 3);
var citrus_1 = new Product("lime", 0.5);
var citrus_2 = new Product("lemon", 1.3);
var citrus_3 = new Product("bergamot", 0.9);
newArrScales.add(apple_1);
newArrScales.add(tomato_1);
newArrScales.add(citrus_1);
newArrScales.add(citrus_2);
newLSScales.add(apple_2);
newLSScales.add(tomato_2);
newLSScales.add(citrus_3);
console.log(newArrScales.getSumScale());
console.log(newArrScales.getNameList());
console.log(newLSScales.getSumScale());
console.log(newLSScales.getNameList());
//# sourceMappingURL=app.js.map