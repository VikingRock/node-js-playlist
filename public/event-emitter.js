/**
 * Created by aliaksandrzinchuk on 8/16/16.
 */

var counter = function(array) {
  return array.join('');
};

//console.log(counter([1,2,5]));
module.exports = counter;

//========================================================

var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
  console.log(msg);
});

myEmitter.emit('someEvent', '=====\nevent was fired');

//========================================================