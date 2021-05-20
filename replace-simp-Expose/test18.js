
function fun(source)
{ 
	var importPath = source.replace(/\?(.*)$/, '');
	if(/\?/.test(importPath)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
