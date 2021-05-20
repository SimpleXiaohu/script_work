
function fun(path)
{
 path = path.replace(/\.\d+\./, '.');
 if(/\d+/.test(path)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
