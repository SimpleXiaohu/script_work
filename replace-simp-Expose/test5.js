
function fun(tag)
{
        var out = '';
            if (/\/\*|\*\//.test(tag)) {
                console.log("1");
            }
            out = out + ' ' + tag.replace(/@/g, '\\@');
	    if(/\d+/.test(out)) console.log("2");
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
