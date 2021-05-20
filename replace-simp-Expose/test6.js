
function fun(url)
{
	var url1 = url.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, 'ng:///');
	if(/\d+/.test(url1)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
