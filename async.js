//для кождой сессии пулинга будет своё увелиение таймаута
var pool = function () {

    var request = function (options, callback) {

        var generateTime = (function () {
            var count = 0;
            return function () {
                count++;
                return count * 1000;//(Math.floor(Math.random() * (max - min + 1)) + min)
            }
        })();

        var req = function () {
            $.ajax(options).then(callback).fail(function (data) {
                setTimeout(req, generateTime);
            });
        }
    };

    request({
        url: 'some-url',
        data: 'some-data'
    }, function (data) {
        alert('some success do' + data.toString());
    });

}

//несколько попыток без увеличения времени
var request = function (options, callback, errorCallback, count) {
      $.ajax(options).then(callback).fail(function (data) {
          if (count) {
              request(options, callback, errorCallback, count - 1);
          } else {
              errorCallback(data);
          }
      });
  };

request({url: '', data: {}, type: 'GET'}, function () {alert('success')}, function () {alert('error')}, 3)



// where $.get emitate server
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
        _getRandomTime: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min; // герерим integer
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
