   document.write('<div>' + 10 + '</div>');

      var timers = [];

    function stop() {
      for (var i = 0; i < timers.length; i++) clearInterval(timers[i]);
      timers = [];

    }

      var divs = document.getElementsByTagName('div');
      for (var i = 0; i < divs.length; i++) {
        animateDiv(divs, i);
      }

    function animateDiv(divs, i) {
      var div = divs[i],
        speed = div.innerHTML;
      timers[i] = setInterval(function() {
        div.style.width = (parseInt(div.style.width || 0) + 2) % 400 + 'px'
      }, speed);
    }