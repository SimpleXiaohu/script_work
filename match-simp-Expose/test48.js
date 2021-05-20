function test_match(stack){
const CURRENT_METHOD_REGEXP = /at ([a-zA-Z0-9_.]*)/;
const match = stack.match(CURRENT_METHOD_REGEXP);
var result = '';
if(match) {
    result = match[1];
    console.log(1);
}
if(/[0-9]+/.test(result)) console.log(2);
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
