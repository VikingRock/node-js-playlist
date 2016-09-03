var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    console.log('Request was made from: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Alex',
        title: 'webdev',
        age: 28
    };

    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('-------\nlistening to port 3000\n------------');