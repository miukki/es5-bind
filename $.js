//$

var $ = (function(){

  var $ = function $(param) {

      console.log('this instanceof $', this instanceof $)
      if (!(this instanceof $)) {
          return new $(param);
      }

      [].forEach.call(arguments, function (arg) {
        Object.defineProperty(this, 'node', { value: document.querySelectorAll(arg), enumerable: true });
      }, this);
  };


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

  }, $('param'));

  return $;

})()

$('.list').addСlass('str').remove('something');


