interface IScalable {
    getScale():number;
    getName():string;
}

class Apple implements IScalable {
    constructor(private _name:string, private _weight:number){};

    getScale():number{
        return this._weight;
    };

    getName():string{
        return this._name;
    };
}

class Tomato implements IScalable{
    constructor(private _name:string, private _weight:number){};

    getScale():number{
        return this._weight;
    };

    getName():string{
        return this._name;
    }
}

class Citrus implements IScalable{
    constructor(private _name:string, private _weight:number){};

    getScale():number{
        return this._weight;
    };

    getName():string{
        return this._name;
    };
}

class Scales{
    products:Array<IScalable> = [];

    add(product:IScalable):void{
        this.products.push(product);
    };

    getSumScale():number{
        let sum:number;
        sum = this.products.reduce((result:number,current:IScalable) =>  result + current.getScale(),0);
        return sum;
    };

    getNameList():Array<string>{
        let list:Array<string> = [];
        this.products.forEach((elem:IScalable) => list.push(elem.getName()));
        return list;
    };
}

let scales:Scales = new Scales();

let apple_1:Apple = new Apple("green apple",2.2);
let apple_2:Apple = new Apple("red apple",5);
let tomato_1:Tomato = new Tomato("cherry", 1.5);
let tomato_2:Tomato = new Tomato("yellow tomato",3);
let citrus_1:Citrus = new Citrus("lime", 0.5);
let citrus_2:Citrus = new Citrus("lemon",1.3);
let citrus_3:Citrus = new Citrus("bergamot",0.9);

scales.add(apple_1);
scales.add(apple_2);
scales.add(tomato_1);
scales.add(tomato_2);
scales.add(citrus_1);
scales.add(citrus_2);
scales.add(citrus_3);

console.log(scales.getSumScale());
console.log(scales.getNameList());


