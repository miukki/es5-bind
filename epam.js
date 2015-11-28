
/* chain, closue
    var successCount = 0;
    var endCount = 5;

    var func = function () {
       getDocumentFromServer(successCount, function () {
         console.log('successCount', successCount)
         successCount++;
         if (successCount == endCount) {
            onResult();
         } else {
             func();
         }
       });
    };

    func();

    */
    // Fetch 5 documents from the server with getDocumentFromServer
    // and call onResult once all are fetched

//async task
function getDocumentFromServer(documentId, cb) {
     setTimeout(function() {
            cb(null, "document " + documentId);
     }, Math.random()*500 + 100);
}

function onResult() {
    console.log("Done!");
}


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

//chain with new Promise().then
//example
