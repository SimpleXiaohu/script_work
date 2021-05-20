
function fun(path)
{
  var result = '';
  if (!/\.\d+/.test(path)) {
    console.log(1);
    result = path;
  }
  result = path.replace(/\.\d+\./g, '.$.').replace(/\.\d+$/, '.$');
  if(/\$\$/.test(result)) console.log(2);
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
