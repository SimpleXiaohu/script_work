
function fun(search)
{
    search = search.replace(/[?&]grep=[^&\s]*/g, '').replace(/^&/, '?');
    if(/=/.test(search)) console.log("1");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
