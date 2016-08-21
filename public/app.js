/**
 * Created by aliaksandrzinchuk on 8/16/16.
 */

//console.log('start\n');
//var call = require('./event-emitter');
//
//console.log(`result: ${call([1,2,5])}`);

var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var chuck = new Person('Chuck');
var raj = new Person('Raj');

var people = [james, chuck, raj];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' says: ' + msg);
    })
});

james.emit('speak', 'fkuc');
raj.emit('speak', 'luck');