//$

var $ = function $(param) {
        if (this instanceof $) {
            A[pr].forEach.call(arguments, function (arg) {
                this.add(arg);
            }, this);
        } else {
            return new $(param);
        }
    };

    $[pr] = [];
    $[pr][c] = $;
    var p = $.prototype;

    ["addClass", "removeClass", "toggleClass", "removeAttr"].forEach(function (method) {
        p[method] = function (className) {
            this._toAll(method, [className]);
            return this;
        };
    });

    ["val", "html", "width", "height"].forEach(function (method) {
        p[method] = function (val) {
            return this._setOrGet(method, val);
        }
    });

    ["attr"].forEach(function (method) {
        p[method] = function (name, value) {
            return this._setOrGet(method, value, name);
        }
    });

//try $('.list').removeClass('like');


//unflatten array
//its didnt work i should improve.
var people =  [
    {
        "id": "12",
        "parentId": "0",
    },
    {
        "id": "6",
        "parentId": "7",
    },
    {
        "id": "7",
        "parentId": "12",
    },
    {
        "id": "17",
        "parentId": "12",
    },
    {
        "id": "8",
        "parentId": "6",
    }

]


var unflatten = function(arr, parent, tree) {
  tree = typeof tree !== 'undefined' ? tree : [];
  parent = typeof parent !== 'undefined' ? parent : { id: 0 };

  var childrens = Array.prototype.filter.call( arr, function(child){ return child.parentId == parent.id; });
  parent['childrens'] = childrens;
  return parent
}

console.log(people.map(function(item){return unflatten(people, {id: item.id}).childrens.length ? unflatten(people, {id: item.id}) : undefined }))


//horizontal sort
var data = {
    text: "zero",
    childrens: [
        {
            text: 'a',
            childrens: [
                {
                    text: "c",
                    childrens: [
                        {
                            text: 'd',
                            childrens: [{ text: 'z'}]
                        },
                        {
                            text: 'e',
                            childrens: []
                        },
                        {
                            text: 'f',
                            childrens: []
                        },
                        {
                            text: 'g',
                            childrens: []
                        },
                        {
                            text: 'h',
                            childrens: []
                        },
                        {
                            text: 'i',
                            childrens: []
                        }
                    ]
                }
            ]
        },
        {
            text: 'b',
            childrens: []
        }
    ]
};


//horizontal sort
var fnSort = function(data, tree, level) {
  level = typeof level !== 'undefined' ? level : 0;
  tree = typeof tree !== 'undefined' ? tree : [];

  tree.push(data['text'] + ' level ' +  level);
  tree.sort(function(a,b){
    if(/level\s\d/.exec(a)[0]>/level\s\d/.exec(b)[0]) {
        return 1;
    }
    return -1;
  })

  if (data.childrens ) {level++; data.childrens.forEach(function(el) {fn(el, tree, level)}); }
  return tree;

}

//console.log('result: ' + fnSort(data));

