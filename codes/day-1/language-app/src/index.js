var fs = require('fs')
var http = require('http')

var server = http.createServer(
    function (req, res) {
        var data = fs.readFileSync('./data.json', { encoding: 'utf-8' })
        console.log(data)
        console.log('request came')
        //console.log(req)
        var headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE, PATCH",
            "Content-Type": "application/json"
        }
        res.writeHead(200, 'found', headers)
        res.end(data)
    }
)

server.listen(3000, function () {
    console.log('server is running using port no: 3000')
})

// function print() {
//     // console.log(global)
//     fs.writeFile(
//         './data.txt',
//         'welcome to node',
//         { encoding: 'utf-8' },
//         function (err) {
//             if (err)
//                 console.log(err)
//             else
//                 console.log('written successfully')
//         }
//     )
// }
// print()