function NewPromise(executorFn) {
  executorFn.call(this, this._resolver.bind(this), this._rejector.bind(this));
}
NewPromise.prototype.then = function(fn){
  console.log('fn', fn)
  this._then = fn;
  return this;
}
NewPromise.prototype._rejector = function(){}

NewPromise.prototype._resolver = function(args){
  this.then = this._then.bind(null, args)
  this.then();
}

//promise.shim
var p = new NewPromise(function (resolve, reject) {
   setTimeout( function(){
    resolve('test')
   }, 200);
}).then(function (res) {
  return res+' test';
});


/*
.catch(function(){
  console.log('reject!');
})
*/


