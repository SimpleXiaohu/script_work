
function fun(str)
{
	var str1 = str.replace(/^\s*/, '').replace(/\s*$/, '');
	if(/^\s.*\s$/.test(str1)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
