function test() {
    //console.log(x)
    let x = 10
    console.log(x)
    for (var i = 0; i < 1; i++) {
        let x
        x = 20
        console.log(x)
    }
    console.log(x)

    function inner() {
        let x = 100
        console.log(x)
    }
    inner()
    //another()
    var another
    another = function () {
        var a = 200
        console.log(200)
    }
    another()
}
test()

const m = 300
//m = 400
console.log(m)

var g
g = 12
g = 'joydip'

console.log(g.toExponential(2))
