
function fun(cmd)
{
    const bregex = /\.*[\][<>]/g;
    cmd = cmd.replace(bregex, '');
    if(/<>/.test(cmd)) console.log("1");
}



var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
