console.time('test1');
function camelCased (str) {

		function check(symb){

			let idxOf = str.indexOf(symb);
			if (idxOf === -1) {
				return str;
			}

			let letter = str[idxOf+1].toUpperCase();
			str = str.replace(str.substring(idxOf+1,idxOf+2), '');
			str = str.split(symb).join(idxOf !== -1 ? letter : '');

			return camelCased(str);
		}		

		return check('_') && check('-');

	}

console.log(camelCased ('-moz-border-radius'));
console.timeEnd('test1');



console.time('test2');

	function camelCased (myString){
     return myString.replace(/(-|\_)([a-z])/g, function (g) { return  g[1].toUpperCase(); });
   }


console.log(camelCased ('-moz-border-radius'));
console.timeEnd('test2');

