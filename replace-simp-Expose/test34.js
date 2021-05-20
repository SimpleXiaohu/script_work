
function fun(source)
{
    var source = source.replace(/^.*[\\\/]/, '');
    if(/\//.test(source)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
