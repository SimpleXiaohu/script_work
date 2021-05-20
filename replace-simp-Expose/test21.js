
function fun(value)
{ 
	var result = value.replace(/^.*\.propTypes\./, '');
	if(/propTypes/.test(result)) console.log(1);
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
