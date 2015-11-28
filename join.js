function showList() {
  //this.args = [].join.call(arguments, ',')
  [].push.apply(this, arguments)
}
//showList.prototype = [];
console.log(new showList(1,2,3))