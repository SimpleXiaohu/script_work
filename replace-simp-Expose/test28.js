
function fun(stringValue)
{
  stringValue = stringValue.replace(/^'|'$/g, '"');
  if (!/^"/.test(stringValue)) {
    console.log(1);
    stringValue = '"' + stringValue + '"';
  }
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
