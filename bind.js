//example from test task

if (!Function.prototype.bind) {
  Function.prototype.bind = function () {
     var args = Array.prototype.slice.call(arguments);
     var context = args.shift(), that = this;
     return function () {
       return  that.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    }
  };
}
