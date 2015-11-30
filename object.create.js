//Object.create polyfill
if (!Object.create){
  Object.create = function (proto) {
    function F() {}     // shared constructor
    F.prototype = proto // link proto
    return new F;      // return constructor
  }
}


var o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var o = Object.create({}, { p: { value: 42 } });