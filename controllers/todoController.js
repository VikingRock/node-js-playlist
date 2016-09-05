/**
 * Created by aliaksandrzinchuk on 9/5/16.
 */
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the DB
mongoose.connect('mongodb://vikingrock:mongo@ds021016.mlab.com:21016/todo');

//DB Schema
var todoScema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoScema);
var testItem = Todo({item:'drink beer'}).save(function(err) {
    if (err) throw err;
    console.log('item saved');
});

var data = [
    {item:'make Mary happy'},
    {item:'learn Node.js'},
    {item:'get well'}
];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

app.get('/todo', function(req, res) {
    res.render('todo', {data: data});
});

app.post('/todo', urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item', function(req, res) {

    data = data.filter(function(todo) {
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
});

};