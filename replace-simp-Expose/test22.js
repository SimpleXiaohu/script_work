
function fun(pattern)
{ 
  var gpattern = '';
  if (pattern.slice(-3) === '/**') {
    console.log(1);
    var gpattern = pattern.replace(/(\/\*\*)+$/, '');
  }
  if(gpattern!=='') console.log(2);
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
