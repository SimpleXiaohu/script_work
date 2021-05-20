function test_match(constructorFn){
var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
  var name = '';
  var match = constructorFn.match(functionNameMatch);
    if (match) {
      console.log(1);
      name = match[1];
    }
   else {
    console.log(2);
    name = '';
  }
  if(name !== '') console.log(3);

}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
