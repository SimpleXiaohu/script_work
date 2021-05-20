function test_match(stack){
var CURRENT_METHOD_REGEXP = /at ([a-zA-Z0-9_.]*)/;
var match = stack.match(CURRENT_METHOD_REGEXP);
var result = '';
if(match) {
    result = match[1];
    console.log(1);
}
if(/[0-9]+/.test(result)) console.log(2);
}

var arg = J$.readString();;
test_match(arg);
