Object.prototype.each = function(f) {
  for (var prop in this) {
    if (!this.hasOwnProperty(prop)) continue;
    var value = this[prop];
    f.call(this, prop, value);
  }
}

//enumerable: false
Object.defineProperty(Object.prototype, 'each', {
  enumerable: false
});

// Попробуем! (внимание, пока что это работает неверно!)
var user = {
  name: 'Вася',
  age: 25
};

//emitate Object.keys
user.each(function(prop, val) {
  console.log( '!', prop, val ); // name -> age -> (!) each
});

Object.keys(user, function(k,v){console.log('k,v',k,v)})