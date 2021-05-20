
function fun(locale)
{
	var result = locale.replace(/[.:].*/, '');
	if(/\d+/.test(result)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
