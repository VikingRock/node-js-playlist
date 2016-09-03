/**
 * Created by aliaksandrzinchuk on 9/3/16.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    console.log('Request was made from: ' + req.url);

    if (req.url === '/home' || req.url === '/') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8')
          .pipe(res);

    } else if (req.url === '/api') {

        res.writeHead(200, {'Content-Type': 'application/json'});

        var myObj = {
            name: 'Alex',
            title: 'web-dev',
            age: 28
        };

        res.end(JSON.stringify(myObj));

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf8')
          .pipe(res);
    }



});

server.listen(3000, '127.0.0.1');
console.log('-------\nlistening to port 3000\n------------');