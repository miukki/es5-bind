function CoffeeMachine(power, capacity) {

  var waterAmount = 0;
  this.t = 'Кофе готово!';

 // var self = this; possible with closure
  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;
  // расчёт времени для кипячения
  var getBoilTime = function () {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
    }.bind(this);
  var timer;


  // что делать по окончании процесса
  var onReady = function () {
    return this.t;
  }.bind(this);

  this.run = function() {
    return new Promise(function(resolve, error){
      timer = setTimeout(resolve.bind(null, onReady.bind(null)), getBoilTime()); // getBoilTime.call(this)  call exuted immediately, but .bind created bound function but not call it.
    })

  };

  this.stop = function() {
    clearTimeout(timer);
  }

  this.waterAmount = function(amount) {//getter and setter
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }
    if (!amount) {
      return waterAmount;
    }

    waterAmount = amount;
  };

  this.addWater = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (waterAmount + amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount += amount;
  }


}

var coffeeMachine = new CoffeeMachine(10000, 500);
coffeeMachine.waterAmount(200);
coffeeMachine.run().then(function(res){ console.log('res', res())});
//coffeeMachine.stop();
coffeeMachine.addWater(400);
console.log(coffeeMachine.waterAmount())