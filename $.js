//$

var $ = (function(){

  var $ = function $(param) {

      if (!(this instanceof $)) {
          return new $(param);
      }

      [].forEach.call(arguments, function (arg) {
        Object.defineProperty(this, 'node', { value: document.querySelectorAll(arg), enumerable: true });
      }, this);
  };


  return $;

})()

//defind methods
['addClass', 'removeClass'].forEach(function (method) {

  $.prototype[method] = function (className) {

      [].forEach.call(this.node, function(val){
        var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
        if (method == 'addClass'){
          val.className = !val.className.match(reg) ? val.className.concat(' ', className) : val.className;
        }
        if (method == 'removeClass') {
          val.className = val.className.replace(reg, '');
        }

      })
      return this; //for chaining
  };

});


//$('.list').addСlass('str').remove('something');
console.log($('.list'))

//other example:

//init class
//@param {string} selector
/*
    var $ = function (selector) {
        if (!(this instanceof $)) {
            return new $(selector);
        }
        this.node = document.querySelectorAll(selector);
    };

    ['addClass', 'removeClass'].forEach(function (method) {
      $.prototype[method] = function (className) {
        return this.toggleClass(className, method == 'addClass'); //return {$}
      };

    });

    $.prototype.toggleClass = function (className, state) {
        [].forEach.call(this.node, function(n){
          if (state == undefined) {
              state = !n.classList.contains(className);
          }
          n.classList[state ? 'add' : 'remove'](className);
        })
        return this;
    };
*/




