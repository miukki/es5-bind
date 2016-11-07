/*

  <body>
    <ul class="menu">
      <li>title one</li>
      <li>totle two</li>
    </ul>
  </body>

*/

'user strict';

  var eventMixin = {

    on: function(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },

    off: function(eventName, handler) {
      var handlers = this._eventHandlers && this._eventHandlers[eventName];
      if (!handlers) return;
      for(var i=0; i<handlers.length; i++) {
        if (handlers[i] == handler) {
          handlers.splice(i--, 1);
        }
      }
    },

    trigger: function(eventName) {/*, ... */

      if (!this._eventHandlers || !this._eventHandlers[eventName]) {
        return; //no handlers
      }

      // call handlers with context and arguments
      var handlers = this._eventHandlers[eventName];
      for (var i = 0; i < handlers.length; i++) {
        handlers[i].apply(this, [].slice.call(arguments, 1));
      }

    }
  };


  function Menu(elem) {
    this.elem = elem;
  }
  //mixins
  for(var key in eventMixin) {
    Menu.prototype[key] = eventMixin[key];
    /* wrang : Menu.prototype=Object.create(eventMixin)  */
  }
  //custom method
  Menu.prototype.choose = function(elem) {
    this.trigger('select', elem);//register even and argument
  }

  var menu = new Menu();//create object

  //add   event-handler
  menu.on('select', function(elem) {
    elem.innerHTML = elem.innerHTML + ' active!';
  });

  [].forEach.call(document.querySelectorAll('li'),function(el){
     el.addEventListener('click', function(e){
      menu.choose(this);
     })
  })
