/*
function NewArray() {
    this.args = Array.prototype.slice.call(arguments,0);
    Array.call(this);
    this.first = function () {
      return this.args[0];
    }
    this.last = function () {
      return this.args[this.args.length-1];
    }
};

*/

function MyArr() {
   Array.prototype.push.apply(this, arguments); //same as: push(1,3,4)
   /*
   if MyArr.prototype = []; then => also tru this.push.apply(this, arguments);
   [].forEach.call(arguments, function (arg) {
      this.push(arg);
   }, this)

   */
};
//MyArr.prototype = []; the same
//чтобы создать наследника Array надо положить его экземпляр в прототип ребенка
//native prototypes
MyArr.prototype = Object.create(Array.prototype);// поломали свой конструктор

//Его можно использовать, чтобы из самого объекта получить функцию, которая его создала.
MyArr.prototype.constructor = MyArr; // возвращаем свой конструктор

MyArr.prototype.first = function () {
    return this.shift();
};
MyArr.prototype.last = function () {
   return this[this.length - 1];
};

console.log(new MyArr(1,3,4,5))




