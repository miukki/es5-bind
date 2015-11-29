var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return Array.prototype.slice.call(arguments,0);
}

console.log('list(1, 2, 3)', list(1, 2, 3));