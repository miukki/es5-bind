'use strict';
var m ='bla';

(function () {
  console.log(m)
})();


// define module ,Module takes care of our namespace,
var Module = (function () {
  var _privateMethod = function () {
    return 'priv';
  }.call();
  var _arg2 = 'private variable';
  return {
    arg: '1',
    myMethod: function () {
      console.log(this, _arg2);
    }.bind(_privateMethod)
  };
})();

// call module + methods
Module.myMethod();