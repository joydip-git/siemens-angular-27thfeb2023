// function outer() {
//     this.x = 100
//     console.log(this)
//     //const ref = this
//     let inner = function () {
//         this.y = 200
//         console.log(this)
//         //console.log(ref.x + this.y)
//         console.log(this.x + this.y)
//     }
//     inner = inner.bind(this)
//     inner()
// }
// new outer()

function outer() {
    this.x = 100
    const inner = () => {
        this.y = 200
        console.log(this.x + this.y)
    }
    inner()
}
new outer()

class Person {
    constructor(name, id, salary) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    print = () => {
        return `${this.name},${this.salary}`
    }
}

const anilObj = new Person('anil', 1, 1000)
const sunilObj = new Person('sunil', 2, 2000)
const people = [anilObj, sunilObj]

people.forEach(
    (p) => {
        printInfo(p.print)
    }
)

function printInfo(fnRef) {
    console.log(fnRef())
}

const divide = (a, b) => {
    if (b === 0)
        throw new Error('can not divide by zero')
    return a / b
}

const add = (a, b) => a + b
const subtract = (a, b) => console.log(a - b)