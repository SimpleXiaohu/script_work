
function fun(comment)
{ 
    var result = comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
    if(/^\{\{/.test(result)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
