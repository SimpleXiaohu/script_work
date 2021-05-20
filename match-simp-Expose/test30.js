function test_match(result){
    if (result != null && result.match(/exception|corrupt/) != null)
      console.log(1);

}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
