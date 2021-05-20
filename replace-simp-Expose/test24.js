
function fun(value)
{ 
   var value1 = value.replace(/\\([\\\]])/g, '$1');
   if(/\\\\/.test(value1)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
