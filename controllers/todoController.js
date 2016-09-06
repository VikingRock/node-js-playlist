var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the DB
mongoose.connect('mongodb://vikingrock:mongo@ds021016.mlab.com:21016/todo');

//DB Schema
var todoScema = new mongoose.Schema({
    item: String
});

//DB model
var Todo = mongoose.model('Todo', todoScema);


//var data = [
//    {item:'make Mary happy'},
//    {item:'learn Node.js'},
//    {item:'get well'}
//];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data) {
        if (err) throw err;
        res.render('todo', {data: data});
    });
});

app.post('/todo', urlencodedParser, function(req, res) {
    var newTodo = Todo(req.body).save(function(err, data) {
        if (err) throw err;
        res.json(data);
    });
});

app.delete('/todo/:item', function(req, res) {

    Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data) {
        if (err) throw err;
        res.json(data);
    });
});

};