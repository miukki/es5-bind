https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
//arrow function

example

(function () {
  const words = 'The quick brown fox jumps over the lazy dog'.split(' ')
  const W = words.map(w => [ w.toUpperCase(), w.toLowerCase(), w.length])
  console.log('W = ', W);
})()

