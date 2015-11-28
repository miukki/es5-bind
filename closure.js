//closure
var tick = (function() {
    var count= 0;
    return function () {
        return count++;
    }
})()