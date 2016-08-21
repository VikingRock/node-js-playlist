var fs = require('fs');

//var file = fs.readFileSync('read.txt', 'utf-8');
//console.log(file);
//fs.writeFileSync('write.txt', file + '\nNew line');

//====== async ==========

//fs.readFile('read.txt', 'utf8', function(err,data) {
//    fs.writeFile('write.txt', data);
//});

//====== dir + file ===============

//fs.mkdir('temp', function() {
//    fs.readFile('read.txt', 'utf8', function(err, data) {
//        fs.writeFile('./temp/write.txt', data);
//    })
//});

fs.unlink('./temp/write.txt', function() {
    fs.rmdir('temp');
});