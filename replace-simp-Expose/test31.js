
function fun(device)
{
  var result = '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
  if(/\//.test(result)) console.log("1");
}

var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
