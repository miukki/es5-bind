//$

var $ = function $(param) {

        if (this instanceof $) {
            [].forEach.call(arguments, function (arg) {
              var name = arg.replace(/[.]|[#]/ , '');
              Object.defineProperty(this, 'elem', { value: arg.match(/[.]/) ? document.getElementsByClassName(name) : arg.match(/[#]/) ? document.getElementById(name) : null, enumerable: true });
            }, this);
        } else {//this instanceof window
            return new $(param);
        }


    this.prototype = {};
    this.prototype.constructor = $;


    ['addClass', 'removeClass'].forEach(function (method) {

            $.prototype[method] = function (className) {
                [].forEach.call(this.elem, function(val){
                  var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
                  if (method == 'addClass'){
                    val.className = !val.className.match(reg) ? val.className.concat(' ', className) : val.className;
                  }
                  if (method == 'removeClass') {
                    val.className = val.className.replace(reg, '');
                  }

                })
            };
            //why this.prototype doesnt work?

    }, this);


};


/*



    ["val", "html", "width", "height"].forEach(function (method) {
        $.prototype[method] = function (val) {
            return this._setOrGet(method, val);
        }
    });

    ["attr"].forEach(function (method) {
        $.prototype[method] = function (name, value) {
            return this._setOrGet(method, value, name);
        }
    });

*/





$('list').addСlass('str');