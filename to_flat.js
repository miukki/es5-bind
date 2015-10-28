
//horizontal sort
var data = {
    text: "y",
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


//horizontal sort (to flat array)
var fnSort = function(data, tree, level) {
  level = typeof level !== 'undefined' ? level : 0;
  tree = typeof tree !== 'undefined' ? tree : [];

  tree.push({text: data['text'], level: level});

  if (data.childrens && data.childrens.length ) {
    level++; data.childrens.forEach(function(el) {fnSort(el, tree, level)});
  }

  return JSON.stringify(tree.sort(function(a,b){
    if (a.level < b.level) return -1
    if (a.level > b.level) return 1
    return 0;
    })
  );

}

console.log('result: ' + fnSort(data));

