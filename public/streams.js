/**
 * Created by aliaksandrzinchuk on 8/21/16.
 */

var http = require('http');
var fs = require('fs');

var myStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myStream.on('data', function(chunk) {
    console.log('data received:');
    myWriteStream.write(chunk);
});