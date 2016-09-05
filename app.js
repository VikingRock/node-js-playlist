/**
 * Created by aliaksandrzinchuk on 9/5/16.
 */
var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//firing controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Listening to the port 3000');