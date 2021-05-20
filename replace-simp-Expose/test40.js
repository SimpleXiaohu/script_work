
function fun(file)
{
	var withoutQuery = file.replace(/\?.*/, '');
	if(/\/?/.test(withoutQuery)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
