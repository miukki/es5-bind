//Using call to invoke an anonymous function
var arr = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < arr.length; i++) {
  (function(i) {
    this.index = i;
    this.print = function() {
      console.log('#' + this.index + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(arr[i], i);
}



//chain call fn()()()
var tick = (function(){
  var total = 0;
  function fnGenerator(arg) {
    total += arg;
    return  arguments.callee;
  }

  fnGenerator.toString = function(){ return total;}
  return fnGenerator;

})()


console.log('memory leak', String(tick(1)(1)), String(tick(1)(1)))


//without memory leack
var sum = function (toSum) {
    var Sum = function () {
        this.count = 0;
        this.sum = function (toSum) {
            this.count+=+toSum;
            return this.sum
        };
        this.sum = this.sum.bind(this);
        this.sum.toString = function () {
            return this.count;
        }.bind(this);
    };
    return new Sum().sum(toSum);
};
console.log('no memory leak', String(sum(1)(1)), String(sum(1)(1)));


//other solutin
function tickF(n) {

 var f = arguments.callee,
 y = function(m) {
  return f(m+n);
 };
 y.toString = y.valueOf = function () {
  return n;
 };
 return y;
}
console.log('no memory leak!', String(tickF(1)(2)(3)), String(tickF(1)(2)(3)))




// inspired by http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html
function add(){
  var args = Array.prototype.slice.call(arguments);
  var f = function(num){
    return add.apply(null, args.concat([num]));
  };
  f.toString = f.valueOf = function(){
    return args.reduce(function(prev, curr){
      return prev + curr;
    }, 0);
  };
  return f;
}

console.log('!', String(add(5)(5)(5)));



