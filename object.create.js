//Object.create polyfill
if (!Object.create){
  Object.create = function (proto) {
    function F() {}     // shared constructor
    F.prototype = proto // link proto
    return new F;      // return constructor
  }
}


function Constructor() { this.tets = function(){}}
o = new Constructor();
// is not equivalent to:
o = Object.create(Constructor.prototype);