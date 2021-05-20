
function fun(BANNER)
{
	BANNER = BANNER.replace(/\[\d+m/g, '');
	if(/\d+/.test(BANNER)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
