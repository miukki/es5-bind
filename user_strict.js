'use strict';

var fn = function (){console.log(this, arguments);}.bind('bla').call('this','arg')
