/**
 * Created by aliaksandrzinchuk on 8/28/16.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    console.log('Request was made from: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});

    //var myStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
    var myStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

    myStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('-------\nlistening to port 3000\n------------');