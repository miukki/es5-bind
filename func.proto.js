

function Machine(power) {
  this._power = power; // (1)

  this._enabled = false;
  this._some = null;

  this.enable = function() {
    this._enabled = true;
    this._some = 'some'
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments); // передаем массивом

  var p = this.enable.bind(this);//very nice example how to use bind

  this.enable = function(){
    p();
    this._child = 'child'
  };

  this.enable();
  console.log( this ); // false
}

var coffeeMachine = new CoffeeMachine(1000);
//coffeeMachine.enable();
//console.log('coffeeMachine', coffeeMachine)



function Fridge(power) {
  // унаследовать
  Machine.apply(this, arguments);

  var food = []; // приватное свойство food

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Холодильник выключен");
    }
    if (food.length + arguments.length >= this._power / 100) {
      throw new Error("Нельзя добавить, не хватает мощности");
    }

    this.push.apply(null,arguments)
    //Array.prototype.push.apply(food, arguments);
    /*
    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]); // добавить всё из arguments
    }
    */
  };
  this.push = function(){
    Array.prototype.push.apply(food, arguments);
  }

  this.getFood = function() {
    // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
    return food.slice();
  };

  this.removeFood =function(item){
    var idx = food.indexOf(item)
    if (idx !=-1){
     food.splice(idx,1);
    }
  }

  this.filterFood = function(fn) {
    return food.filter(fn)
  }

}
var f = new Fridge(500)
f.enable();
f.addFood('egg','fish')
f.push('spoon')
console.log( f.getFood() )