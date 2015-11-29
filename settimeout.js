function printNumbersTimeout20_100(i) {
  if (i>=20 ) {
    clearTimeout(timerId);
    return;
  }
  var timerId = setTimeout(function go() {
    console.log(i);
    i++;
    if (i < 20) printNumbersTimeout20_100(i);
  }, 100);
}

// вызов
printNumbersTimeout20_100(0);