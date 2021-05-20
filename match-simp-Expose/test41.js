function test_match(fn){
if(fn)
{
  console.log(1);
  var match = fn.match(/^\s*function (\w+)/);
  var result = '';
  if(match){
    result = match[1];
    console.log(2);
  } 
  if(result!=='') console.log(3);
}
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
