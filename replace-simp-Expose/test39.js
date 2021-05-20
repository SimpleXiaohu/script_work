
function fun(trace)
{
	const filenameRE = /\(^webpack:\/\/\/([^)]+\.js):(\d+):(\d+)\)$/;
	var m =  trace.replace(filenameRE, '$1:$2:$3');
	if(/::/.test(m)) console.log("1");
}

var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
