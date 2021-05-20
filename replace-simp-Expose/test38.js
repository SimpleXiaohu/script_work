
function fun(tag)
{
	var result = '';
 	result = tag.replace(/vue\-component\-(\d+\-)?/, '');
  	if(result!=='') console.log("1");   
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
