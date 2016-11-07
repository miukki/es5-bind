/*
function fib(max){
	var arr = [0,1], i=0,j=1;
    for(var k=0; k<max-2;k++ ){
        var x=i+j;
        arr.push(x);
        i=j,j=x;
    }
    console.log(arr);
}
fib(10);


*/


let result = (function fib(max,i,j) {
  i = i||this[0];j=j||this[1];
  if (max!==0) {
    this.push(i+j);
    return fib.bind(this, max-1, j, i+j)();
  } else {
    return this;
  }
}.bind([0,1], 10))();
console.log(result);


