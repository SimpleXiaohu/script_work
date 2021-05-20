function test_match(inputState){
var result = inputState.match(/\s([a-z|A-Z]+)/)[1];
if(result && /[a-z]+[A-Z]+/.test(result[0])) console.log(1);
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
