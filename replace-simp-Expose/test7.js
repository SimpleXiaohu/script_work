
function fun(s)
{
	s = s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	if(/[^\\]\]/.test(s)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
