//create shim for bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function () {
     var args = Array.prototype.slice.call(arguments);
     var context = args.shift(), that = this;
     return function () {
       return  that.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    }
  };
}




/*
 * Create a function 'tick' which prints consecutive numbers,
 * starting from 0.
 * Do not use any other global names except 'tick'.
 */
 /*
 * Example:
 * tick(); // prints 0
 * tick(); // prints 1
 * tick(); // prints 2
 */

var tick = (function() {
    var count= 0;
    return function () {
        return count++;
    }
})()

---------------------------------------

// Without running the following code, tell me what will be printed:

(function(){
    var x = "abc";
    (function(){
        var y = x;
        var x = "123";
        console.log(y); // ??? undefined
    })();
})();


//!!!!if in code

fn() //we will get error fn is not a function
var fn = function() {}

//!!!!but if

fn() //everything will be alright
function fn () {}

/*
the reason is called “hoisting” in javascript.
It means that variables declarations go to the top of the scope.
But variable assignments stay in the original line”.
So this: var y = x; var x = “abc”, is equivalent to this: var y; var x; y = x; x = “abc”.
and this is why we get y === undefined.
*/


----------------------------------------------

// write a function 'sum' that takes an arbitrary number of arguments
// and calculates the sum of them.
// examples:
// sum(1, -1) returns 0
// sum (100, 200, 1) returns 301

function sum() {
    var sum = 0;
    var arr =  Array.prototype.slice.apply(arguments);
    for(var i=0; i< arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//es-5
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});


