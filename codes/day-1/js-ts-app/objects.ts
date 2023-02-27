//object literal syntax
const sunilObj = {
    //value properties
    name: 'sunil',
    id: 100,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.salary
    }
}

// function person(name, id, salary) {
//     var info
//     this.name = name
//     this.id = id
//     this.salary = salary
// }
// person.prototype.print = function () {
//     info = this.name + ' ' + this.salary
//     return info
// }
class Person {
    // private _name: string;
    // private _id: number;
    // private _salary: number;

    // constructor(_name: string, _id: number, _salary: number) {
    //     this._name = _name
    //     this._id = _id
    //     this._salary = _salary
    // }
    constructor(private _name: string, private _id: number, private _salary: number) {

    }
    print() {
        return `${this.name}, ${this.salary}`
    }
    get id(): number {
        return this._id
    }
    get name(): string {
        return this._name
    }
    set name(val: string) {
        this._name = val
    }
    get salary(): number {
        return this._salary;
    }
    set salary(value: number) {
        this._salary = value;
    }
}
class Trainer extends Person {
    // private _subject: string;
    // constructor(_name: string, _id: number, _salary: number, _subject: string) {
    //     super(_name, _id, _salary)
    //     this._subject = _subject
    // }

    constructor(_name: string, _id: number, _salary: number, private _subject: string) {
        super(_name, _id, _salary)
    }

    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }

    print(): string {
        return `${super.print()}, ${this._subject}`
    }
}

const joyTrainer = new Trainer('joydip', 1, 1000, 'JS')
console.log(joyTrainer.name)

interface IOperations {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

class Operations implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
}

interface IProduct {
    name: string;
    id: number;
    price: number;
}

class Product implements IProduct {
    constructor(public id: number, public name: string, public price: number) {

    }

}
//const numbers = new Array(1, 2, 3, 4)

const products: IProduct[] = [
    {
        name: '',
        id: 1,
        price: 1000
    },
    {
        name: 'dell xps',
        id: 2,
        price: 2000
    }
]

const [, { price: p }] = products
console.log(p)

const found = products.filter(
    function (pr) {
        return pr.price > 1000
    }
)
console.log(found)
const sampleProduct: IProduct = {
    name: 'iphone',
    id: 1,
    price: 1000
}
// const nameValue = sampleProduct.name
// const priceValue = sampleProduct.price

const { name: nameValue, price: priceValue } = sampleProduct

console.log(nameValue)
console.log(priceValue)
//spread operator (...)
const copy = {
    ...sampleProduct
}
console.log(copy)

const numbers: number[] = [1, 2, 3, 4]
// const first = numbers[0]
// const third = numbers[2]
const [first, , , fourth] = numbers
console.log(first, fourth)
const copyNumbers = [...numbers]
console.log(copyNumbers)

//rest operator
function calculateAverage(name: string, ...marks: number[]) {
    let sum = 0
    for (let index = 0; index < marks.length; index++) {
        const element = marks[index];
        sum += element
    }
    return sum / marks.length
}
console.log(calculateAverage('anil', 10, 20, 30))
console.log(calculateAverage('sunil', 10, 20, 30, 40, 50))

const design = `
    <div>
        <label for=''>Check</label>
        <input type='text' id='chkChange' value=${first}>
    </div>
`

