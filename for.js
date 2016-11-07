let arr = [1,2,3,4]
//test performance
for (var i = arr.length; i-- > 0; ){
	if (arr[i]===3) continue;
	console.log(arr[i]);
	
}


