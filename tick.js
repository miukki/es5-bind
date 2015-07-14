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
    return  fnGenerator;
  }

  fnGenerator.toString = function(){ return total;}
  return fnGenerator;

})()


console.log(String(tick(1)(1)), String(tick(1)(1)))

//chain call fn()()()
var m = function(arg){
  m.total = (m.total || 0) + arg;
  return m
}
console.log(m(5)(6).total)

//without memory leack


