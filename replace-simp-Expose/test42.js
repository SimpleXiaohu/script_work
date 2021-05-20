

function fun(base)
{
      base = base.replace(/^https?:\/\/[^\/]+/, '');
  if (base.charAt(0) !== '/') {
    console.log(1);
    base = '/' + base
}
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
