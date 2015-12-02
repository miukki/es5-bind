//array.splice / slice / split
var arr = [1,2,3,4,5,6,7,8,10];
var splice, splice;

for (var i=0; i<arr.length;i++){
  if (i==5) splice = arr.splice(i-1,1);//splice one item index 5
}
var arr2 =[0,1,2,3];
  console.log(arr, 'splice: ', splice, 'slice: ', [1,2,3,4].slice(1), 'onlyforstring'.split('for'), arr2.splice(1,1), 'spliced array arr2: ', arr2);

