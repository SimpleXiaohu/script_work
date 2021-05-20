
function fun(str)
{
  	str = str.replace(/;(\s*$)/, '$1');
	if(/;/.test(str)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
