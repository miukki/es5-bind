//new vs Object.create
var Animal = function (age, name) {
   this.age = age;
   this.name = name;
}
Animal.prototype.getName = function(){
  return this.name || 'default Name';
}
//first way
var animal = new Animal(10, 'test');

//second way
animal2 = Object.create(Animal.prototype)
Animal.call(animal2, 10, 'name');
//animal2.constructor(10);
