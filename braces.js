

(function () {

  let result1 = Array.prototype.map.call(['{}[]()', '[{(})]'], function (item) {

    function go(item, i) {
      i = i===undefined ? 2 : i;

      if ( i<0 && !item.length){
        return 'YES'
      } else if(i<0 && item.length){
        return  'NO'
      }

      let found;
      let result = Array.prototype.some.call(['{}','[]','()'], function (p1, p2, p3) {
        let r = new RegExp('^(\\'+p1.substr(0,1)+'(\\W+)?'+'\\'+p1.substr(1,1)+')$|(\\'+p1.substr(0,1)+'\\'+p1.substr(1,1) +'(\\W+)?)$');
        found = r.test(item) && p1;
        return r.test(item);
      });
      if (result) {
        item = item.replace( new RegExp('\\'+found.substr(0,1)+'|\\'+found.substr(1,1), 'g'), '');
        return go(item, --i);

      } else {
        return 'NO'
      }

    }
    return go(item);

  });

  console.log('result1', result1);

  let result2 = (

    function braces(values) {
      var is_balanced = [];
      for (var i in values) {
        var value = values[i];
        var stack = [];
        for (c of value) {
          if (/\{|\[|\(/.test(c)) {
            stack.push(c);
          } else {
            if (stack.length == 0) {
              is_balanced.push('NO');
              break;
            }
            var last = stack[stack.length-1];
            if (c == '}' && last != '{') {
              is_balanced.push('NO');
              break;
            } else if (c == ']' && last != '[') {
              is_balanced.push('NO');
              break;
            } else if (c == ')' && last != '(') {
              is_balanced.push('NO');
              break;
            }
            stack.pop();
          }
        }
        if (is_balanced.length == i) {
          if (stack.length == 0) {
            is_balanced.push('YES');
          } else {
            is_balanced.push('NO');
          }
        }
      }
      return is_balanced;
    }

  )(['{}[]()', '[{(})]']);

  console.log('result2', result2)



})();
