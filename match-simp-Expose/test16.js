function test_match(value){
const BINDING_REGEXP = /(\d+):?\d*/;

var result = '';
if (value !== '') {
        console.log(1);
        var match = value.match(BINDING_REGEXP);
        if (match) {
            console.log(2);
            result = match[1];
        }
}
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
