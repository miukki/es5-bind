//instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};
//a.__proto__ == B.prototype

var a = new A();
console.log( a instanceof B ); // true

function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

console.log( 'rabbit', rabbit instanceof Rabbit, rabbit.__proto__ == Rabbit.prototype );
console.log( 'rabbit', rabbit instanceof Animal );
console.log( 'rabbit', rabbit instanceof Object );


var instanceOf = function (child, parent) {
   return child.__proto__  = parent.prototype; //no crossbwrowser way
};