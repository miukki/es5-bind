function SuperClass() {

}
SuperClass.prototype.super = function(){
  //log
}
function OtherSuperClass() {

}
OtherSuperClass.prototype.othersuper = function(){

}

function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // inherit
$.extend(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function() {
  // do a thing
};
var cl = new MyClass();