/*
*
* Prudence->XYZ

 n spot
 each spot have id from 1 to n

a-..can take any pair of spots 1,2..2..3.. ->b
each spot brlong to one categ ..total 2 categories

the cost of flight from i to j category is zero
|i-j| cost == 0 if sam catrgory
 cost =  |i-j| if different

 1 ≤ n ≤ 100000, 1 ≤ a, b ≤ n

1 ≤ a, b ≤ n
n a b
4-1-4
1010

1234
a..b
1010



 **/
function fn(nabArr,cat) {
  var n = nabArr[0], a = nabArr[1], b = nabArr[2];
  var ee = new String(cat).split('');
  var spots = function (arr) {
    arr = arr || [];
    for (var i = Math.abs(b-a)+1; i-- > 0; ){
      arr.push({name:a, idx: new String(cat).split('')[a-1]});
      a++;

    }
    return arr;
  }

  var result = function () {
    return new String(cat).split('')[a-1] === new String(cat).split('')[b-1] ? 0 :  Math.abs(new String(cat).split('')[b-1] - new String(cat).split('')[a-1]);

  }
  return result();//spots();

}

console.log(fn([4,1,4],1010))



/*
 *
 *
 * function processData(input) {
 //Enter your code here
 var line1=input.split('\n')[0].split(' '),
 line2=input.split('\n')[1];

 function fn(nabArr,cat) {
 var n = nabArr[0], a = nabArr[1], b = nabArr[2];
 var ee = new String(cat).split('');

 var result = function () {
 return new String(cat).split('')[a-1] === new String(cat).split('')[b-1] ? 0 :  Math.abs(new String(cat).split('')[b-1] - new String(cat).split('')[a-1]);

 }
 return result();//spots();

 }

 console.log(fn(line1, line2));

 //console.log(input.split('\n')[0].split(' '), input.split('\n')[1])
 }

 */
