function getDocumentFromServer(documentId, cb) {
     setTimeout(Math.random()*500 + 100, function() {
            cb(null, "document " + documentId);
     });
}

    function onResult() {
        console.log("Done!");
    }

    var promises = [];
    for (var i = 1; i < 5; i++) {
       promises.push(new Promise(function (resolve) {
           getDocumentFromServer(i, function(err, data) {
              resolve(data);
           });
       }));
    }

    Promise.all(promises).then(onResult);

    // Fetch 5 documents from the server with getDocumentFromServer
    // and call onResult once all are fetched

//with .map

var readfile = function(arr){
    var promises = arr.map(function(val,index){
        return new Promise(function(resolve, reject){
            getDocumentFromServer(val, function(err, res){
                resolve(res)
            });
        })
    })
    return Promise.all(promises);
}


readfile(['1.html', '2.html']).then(function(res ){
    console.log('results', res)
    onResult();
})
