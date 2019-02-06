interface IStorageEngine {
 addItem(item:Product):void;
 getItem(index:number):Product;
 getCount():number;
}

class ScalesStorageEngineArray implements IStorageEngine {
    private _storage:Array<Product> = [];

    addItem(item:Product):void{
        this._storage.push(item);
    };

    getItem(index:number):Product{
        return this._storage[index];
    };

    getCount():number{
        return this._storage.length;
    };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    constructor(){
        window.localStorage.clear();

    };
    addItem(item:Product):void{
        window.localStorage.setItem(String( this.getCount()),JSON.stringify(item));
    };

    getItem(index:number):Product{
        let product = JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(product._name, Number(product._weight));
    };

    getCount():number{
        return window.localStorage.length;
    };
}

class Product{
    constructor(private _name:string, private _weight:number){};

    getScale():number{
        return this._weight;
    };

    getName():string{
        return this._name;
    };
}

class Scales<StorageEngine extends IStorageEngine>{
    constructor(private _storage:StorageEngine){};

    add(item:Product):void{
        this._storage.addItem(item);
    };

    getSumScale():number{
        let sum:number = 0;
        let count = this._storage.getCount();
        for (let i=0; i<count; i++){
            sum += this._storage.getItem(i).getScale();
        }
        return sum;
    };

    getNameList():Array<string>{
        let list:Array<string> = [];
        let count = this._storage.getCount();
        for(let i=0; i<count; i++){
            list.push(this._storage.getItem(i).getName());
        }
        return list;
    };
}

let newArrStorage = new ScalesStorageEngineArray();
let newArrScales = new Scales(newArrStorage);
let newLocalStorage = new ScalesStorageEngineLocalStorage();
let newLSScales = new Scales(newLocalStorage);

let apple_1:Product = new Product("green apple",2.2);
let apple_2:Product = new Product("red apple",5);
let tomato_1:Product = new Product("cherry", 1.5);
let tomato_2:Product = new Product("yellow tomato",3);
let citrus_1:Product = new Product("lime", 0.5);
let citrus_2:Product = new Product("lemon",1.3);
let citrus_3:Product = new Product("bergamot",0.9);

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



