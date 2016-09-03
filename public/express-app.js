/**
 * Created by aliaksandrzinchuk on 9/3/16.
 */

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/home', function(req, res) {
    res.render('index');
    //res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/profile/:id', function(req, res) {
    //res.send('You\'ve requested the id: ' + req.params.id);

    var stuff = {
        name: 'tablet',
        vendor: 'Apple',
        cost: 600,
        colors: ['white', 'space-black', 'silver']
    };

    res.render('profile', {person: req.params.id, stuff: stuff});
});

app.listen(3000);