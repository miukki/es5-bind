//PRIME NUMBER
An integer is prime if it is not divisible by any prime less than or equal to its square root

The property of being prime (or not) is called primality. A simple but slow method of verifying the primality of a given number n is known as trial division.
It consists of testing whether n is a multiple of any integer between 2 and \sqrt{n}.

function isPrime(n) {
  if ( n < 2 ) return false;
  for(var i=2; i <= Math.pow(n, 1/2);i++){
    if (n % i == 0) return false;
  }
  return true;
}

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start === 0) {
      return false;
    }
  }
  return element > 1;
}

function isPrime(element, index, array) { //keep in array
  var start = 2,fl=true;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      fl =false;
    }
  }
 if (fl) {console.log(element)}
}

function isPrime(n){
    if (n < 0) return false;
    if (n != 2 && n <= 3) return true;
    for (var i = 2 ; i < n / 2 ; i++){
        if (n / i === parseInt(n / i)) return false;
    }
    return true;
}

