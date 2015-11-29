//собрать в дерево
var people =  [
    {
        "id": 12,
        "parentId": 0,
    },
    {
        "id": 6,
        "parentId": 7,
    },
    {
        "id": 7,
        "parentId": 12,
    },
    {
        "id": 17,
        "parentId": 12,
    },
    {
        "id": 8,
        "parentId": 6,
    }

]

    var arrayToTree = function (arr, cb) {
        arr = arr.slice();//copy

        function getRoot(arr) {
            var index;
            arr.some(function (item, index) {
                if (!arr.some(function (localItem) {if (item.parentId === localItem.id) {return true;}}))
                {return index;}
            });
            return arr.splice(index, 1)[0];//отщипнули рут
        }

        function getChildrens(id) {
            var result = [];
            for (var i = arr.length; i--;) {
                if (arr[i].parentId === id) {
                    result.push(arr.splice(i, 1)[0]); //добавляешь в result и вырезаем из arr
                }
            }
            return result;
        }

        function fill(treeElem) {
            treeElem.childrens = getChildrens(treeElem.id);
            if (treeElem.childrens.length) {
                treeElem.childrens.forEach(fill);
            }
        }

        var tree = getRoot(arr);
        fill(tree);
        return tree;

    };

//console.log(JSON.stringify(arrayToTree(people)), people)
people.sort(function(a,b){
  if (a.id < b.id) return -1
  if (a.id > b.id) return 1
    return 0;
})
console.log('people', people)