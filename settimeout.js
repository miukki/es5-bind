function printNumbersTimeout20_100(i) {
  if (i>20 ) {
    clearTimeout(timerId);
    return;
  }
  var timerId = setTimeout(function go() {
    console.log(i);
    i++;
    if (i <= 20) printNumbersTimeout20_100(i);
  }, 100);
}

printNumbersTimeout20_100(0)

/*

function hardWork() {
  // время выполнения этого кода >100мс, сам код неважен
  for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
}

*/
//hardWork();
