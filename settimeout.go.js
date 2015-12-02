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

/*
timer = setInterval(function() {
  if (есть еще что подсветить) highlight();
  else clearInterval(timer);
}, 10);
*/
