
function fun(input)
{
	input = input.replace(/^_+|_+$/g, "");
	if(/_+/.test(input)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
