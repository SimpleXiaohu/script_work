function test_match(pattern){
  if (pattern === '/**') {
    console.log(1);
    var gpattern = pattern.replace(/(\/\*\*)+$/, '');
    if(pattern !== '') console.log(2);
  }
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
