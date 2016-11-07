//https://addyosmani.com/blog/writing-polyfills/
//create shim for bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function () {
     var args = Array.prototype.slice.call(arguments);
     var context = args.shift(), that = this;
     return function () {
       return  that.apply(context, args.concat([].slice.call(arguments)));
    }
  };
}

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('this', this.petalCount)
};

var flower = new LateBloomer();
//flower.bloom();


///dont lost context
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

//module.getX(); // 81

var retrieveX = module.getX;
//retrieveX(); // 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
// might confuse the global var getX with module's property getX
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81


// arguments
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


