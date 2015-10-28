//собрать в дерево
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


var unflatten = function(arr, index, cb) {
  index = typeof index === 'undefined' ? 0 : index;
  parent = { id: arr[index].parentId, child: [] };

  if (!parent.id || index == arr.length-1) {
    return cb(arr);
  }

  //find child index
  [].forEach.call(arr, function(i, index){
    if (i.parentId == this.id) {
      this.child.push(i);
    }
   }, parent)

  //delete child from  arr
  arr = [].filter.call(arr, function(i,index) {
    return i.parentId != this.id
  }, parent);


  //find parentid and add child to parent
  (function addChild(Arr, i) {
      if (!Arr[i]) return;

      if (Arr[i] && Arr[i].id === parent.id) {//found parent
        parent.isExistParent = true;
        Arr[i].child = parent.child;
        return;
      }

      if (Arr[i].child && Arr[i].child.length) {
        addChild(Arr[i].child, 0);
      }

      i++;
      addChild(Arr, i)
  })(arr, 0);

  //if parent is not existed
  if (!parent.isExistParent) {
    arr.push(parent);
  }

  //if child not found move to next item in arr
  if (!parent.child.length) {
    index++;
  }

  unflatten(arr, index, cb)
}


unflatten(people, 0, function(tree){
  console.log('tree', tree)
})