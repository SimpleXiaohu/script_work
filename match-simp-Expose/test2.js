function test_match(presetName){
  var matches = presetName.match(/^(@[^/]+)\/(.+)$/);
  if (matches) {
    console.log(1)
    var orgName = matches[1],
        presetPath = matches[2];
    if(presetPath!=='') console.log(2);
  }
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
