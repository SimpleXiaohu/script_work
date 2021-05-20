
function fun(numberAsString)
{ 
	nas = numberAsString.replace(/^0*/, "");
	if(/^0+/.test(nas)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
