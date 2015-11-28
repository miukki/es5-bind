//multi-dimensional array : found key
function filterKeys(obj, func) {
    return Array.prototype.filter.call(Object.keys(obj), func, obj);
}
function someKeys(obj, func) {
    return Array.prototype.some.call(Object.keys(obj), func, obj);
}
function atLeastOnePropertyMatches(obj, requiredProp) {
    return someKeys(obj, function (prop) {
        if (requiredProp.hasOwnProperty(prop)) {
            return this[prop] === requiredProp[prop];
        }
    });
}
function getMatchingKeys(obj, requiredProp) {
    return filterKeys(obj, function (prop) {
        return atLeastOnePropertyMatches(this[prop], required);
    });
}
var arr = {
    thisKey: {prop1: 'a', prop2: 'b', prop3: 'c'},
    thatKey: {prop1: 'x', prop2: 'y', prop3: 'z'},
    otherKey: {prop1: 'red', prop2: 'orange', prop3: 'blue'}
},
    required = {prop2: 'orange'};
    results = [];

results = getMatchingKeys(arr, required);
// results is now ['otherkey']


