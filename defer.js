
function f(str) {
  console.log(str)
}
Function.prototype.defer = function(sec){
  var self = this;
  return function(){
      setTimeout(self.bind(self, arguments[0]), sec)
  };
}
f.defer(1000)('hi');
