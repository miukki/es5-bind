//https://addyosmani.com/blog/writing-polyfills/
//create shim for bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function () {
     var args = Array.prototype.slice.call(arguments);
     var context = args.shift(), that = this;
     return function () {
       return  that.apply(context, args.concat([].slice.call(arguments)));
    }
  };
}

//Object.create polyfill
if (!Object.create){
  Object.create = function (proto) {
    function F() {}     // shared constructor
    F.prototype = proto; // link proto
    return new F;      // return constructor
  }
}

//pattern singleton

//example:
//create subclass / inherit from Faye.Scheduler
var BackoffScheduler = function() {
  Faye.Scheduler.apply(this, arguments);
}
//inherit
BackoffScheduler.prototype = Object.create(Faye.Scheduler.prototype);

//rewrite method
BackoffScheduler.prototype.getInterval = function() {
  return this.options.interval * Math.pow(2, this.attempts - 1);
};
//That is, we create a subclass of Faye.Scheduler and override the getInterval() method
//Note that this option is a class, not a single object
