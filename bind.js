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






var tick = (function() {
    var count= 0;
    return function () {
        return count++;
    }
})()

---------------------------------------


(function(){
    var x = "abc";
    (function(){
        var y = x;
        var x = "123";
        console.log(y); // ??? undefined
    })();
})();




----------------------------------------------
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


