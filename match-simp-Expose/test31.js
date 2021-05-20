function test_match(fullPath){
	if(fullPath != null && fullPath.match(/\d+$/))
		console.log(1);

}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
