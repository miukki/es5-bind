var MyPromise = function (callback) {
    this._isComplete = false;
    this._isSuccess = false;
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._data = undefined;
    try {
        callback(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
        console.error(e);
        this.reject(e);
    }
};

MyPromise.prototype.resolve = function (arg) {
    if (!this._isComplete) {
        this._data = arg;
        //this._isComplete = true;
        this._isSuccess = true;
        this._start();
    }
};

MyPromise.prototype.reject = function (arg) {
    if (!this._isComplete) {
        this._data = arg;
        //this._isComplete = true;
        this._isSuccess = false;
        this._start();
    }
};

MyPromise.prototype.then = function (success, error) {
    if (this._isComplete) {
        //e.g if .catch fired
        return;
    } else {
        if (success) this._successCallbacks.push(success);
        if (error) this._errorCallbacks.push(error);
    }
    return this;
};

MyPromise.prototype._start = function () {
    if (this._isSuccess) {
        this._successCallbacks.forEach(this._itar, this);
    } else {
        this._errorCallbacks.forEach(this._itar, this);
    }
    this._successCallbacks = [];
    this._errorCallbacks = [];
};

MyPromise.prototype._itar = function (cb) {
    var r = cb(this._data);

    if(r){
        this._data = r;
    }
};


new MyPromise(function (resolve) {
    setTimeout(resolve.bind(null, 'ay'), 1000);
}).then(function (res) {
    return res+'!';
}).then(function(res){
    console.log(res)
});