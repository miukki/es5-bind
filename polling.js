/*
polling
*/
var $ = {
    get: function () {

        return this._wait().then(function () {
            return new Promise(function (resolve, reject) {

                if (this._failCount === 2) {
                    this._failCount = 0;
                    resolve();
                } else {
                    this._failCount++;
                    reject();
                }

            }.bind(this));
        }.bind(this));

    },

    _failCount: 0,

    _wait: function (time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time || this._getRandomTime(100, 1000))
        }.bind(this));
    },
    /**
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * @private
     */
    _getRandomTime: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

var pooling = function () {

    var count = 0;

    var _pooling = function () {

        $.get().then(function () {
            alert('success!');
        }, function () {
            count++;
            setTimeout(_pooling, count * 1000);
        });

    };

    _pooling();

};

pooling();