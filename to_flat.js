
//horizontal sort
var data = {
    text: "y",
    childrens: [
        {
            text: 'x',
            childrens: []
        },
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


//horizontal sort (to flat array)
var my = function(data) {

  function fnSort(data, tree, level, isRoot) {

      tree.push({text: data['text'], level: level});

      if (data.childrens && data.childrens.length ) {
        level++;
        data.childrens.forEach(function(el) {
            fnSort(el, tree, level)
        });
      }

      if (isRoot){
        return tree.sort(function(a,b){
          if (a.level < b.level) return -1
          if (a.level > b.level) return 1
          return 0;
          });
      }
  }

  return fnSort(data, [], 0, true);
}

console.log('result: ' + JSON.stringify(my(data)));

