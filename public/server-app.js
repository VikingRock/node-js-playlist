/**
 * Created by aliaksandrzinchuk on 8/21/16.
 */

var http = require('http');
var server = http.createServer(function(req, res) {
    console.log('Request was made from: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is 42 ');
});

server.listen(3000, '127.0.0.1');
console.log('-------\nlistening to port 3000\n------------');