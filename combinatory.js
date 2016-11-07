var facts = [];
function fact(N){
    if(N==0 || N==1) return 1;
    if(facts[N]) return facts[N];
    facts[N] = N*fact(N-1);
    return facts[N];
}
function permutation(index, A){
    var n=A.length;
    var i=index+1;
    var res=[];
    for(var t=1;t<=n;t++){
        var f = fact(n-t);
        var k=Math.floor((i+f-1)/f);
        res.push(A.splice(k-1,1)[0]);
        i-=(k-1)*f;
    }
    if (A.length) res.push(A[0]);
    return res;
}

function log(){
  var msg = Array.prototype.slice.call(arguments).join(" ");
  //console.log(msg);
  console.log(arguments);
}
var M = [3,4,5,6];
for(var i=0;i<fact(M.length);i++){
    log(i,permutation(i,M.slice(0)).join(""));
}