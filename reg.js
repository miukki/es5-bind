var tmplBody =  'pathto/pathto/name.tmpl, pathto/name.tmpl, pathto/pathto/pathto/pathto/name.tmpl content content pathto/pathto/name.tmpl';

var m = tmplBody.match(/((\w+)\/?(\w+))+(\.(tmpl))/g);
console.log('m', m);

