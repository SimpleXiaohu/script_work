function test_match(name){
        if (name.match(/\s+/u)) {
		console.log(1);
        }


}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
