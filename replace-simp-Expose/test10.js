
function fun(localident)
{
	const filenameReservedRegex = /[<>:"/\\|?*]/g;
	const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
	localident = localident.replace(/^((-?[0-9])|--)/, "_$1").replace(filenameReservedRegex, "-").replace(reControlChars, "-").replace(/\./g, "-");
	if(/</.test(localident)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
