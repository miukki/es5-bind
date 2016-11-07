
/*

setTimeout(function go(str, i) {
  var str = str || '', i = i || 0;
  var str = draw(str);
  console.log(str);
  i++;
  if (i<10) {
    setTimeout(go.bind(null, str,i), 10)
  };
}, 10);

function draw(str){
  str += 'content ';
  return str;
}


timer = setInterval(function() {
  if (есть еще что подсветить) highlight();
  else clearInterval(timer);
}, 10);
*/

//count secs


(function go(i) {
  var i = i || 0; i = +i;
  i = draw(i);
  if (i>=0) {
    setTimeout(go.bind(null, i), 1000)
  };
}.bind(null, 10))();


function draw(i){
  console.log(i);
  i--;
  return i;
}


