function Timer(){
  this._timer = null;
  this.stop = this.stop.bind(this);
}

Timer.prototype._getTime = function(cb){
  var t = new Date();
  var self = this;
  console.log([t.getHours(), t.getMinutes(), t.getSeconds()].map(Timer._toFixedLen).join(':'));
}

Timer._toFixedLen = function(item){
  if (item.toString().length===1) {
    return '0'+item
  };
  return item;
}

//рекурсия
Timer.prototype._render = function(){
  this._getTime()//render time
  this._timer = setTimeout(this._render.bind(this),this._interval || 1000)//delay
}

//public
Timer.prototype.stop = function(){
  clearTimeout(this._timer);
  this._timer = null;
}
//public
Timer.prototype.start = function(){
  this._render();
}

//унаследуем
function newTimer(interval) {
  Timer.apply(this, arguments);
  this._interval = interval;
}
newTimer.prototype = Object.create(Timer.prototype);
newTimer.prototype.constructor = newTimer;

console.log('newTimer.length', newTimer.length)
var t = new newTimer();
t.start();
setTimeout(t.stop, 10000);


