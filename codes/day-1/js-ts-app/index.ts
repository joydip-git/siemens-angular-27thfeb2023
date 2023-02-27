let intNum: number = 12
let floatNum = 12.34
let personname = 'joydip'
let isOk = true

//object literal syntax
const anilObj = {
    //value properties
    name: 'anil',
    id: 100,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.salary
    }
}

console.log(typeof intNum)
console.log(typeof floatNum)
console.log(typeof personname)
console.log(typeof isOk)
console.log(typeof anilObj)

type fnType = (x: number, y: number) => number

//function declaration
// function add(a: number, b: number) {
//     return a + b
// }

//function expression
const add: fnType = function (a: number, b: number) {
    return a + b
}
function subtract(a: number, b: number, c: number) {
    return a - b - c
}
function invoke(fnRef: fnType, arg1: number, arg2: number) {
    console.log(fnRef(arg1, arg2))
}

invoke(add, 10, 20)

type myType = number | undefined

function sample(): myType {
    return 10
}