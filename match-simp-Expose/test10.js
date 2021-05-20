function test_match(bindingName){
const ATTR_REGEX = /attr\.([^\]]+)/;
const attrMatches = bindingName.match(ATTR_REGEX);
if (attrMatches) {
     console.log(1);
     bindingName = attrMatches[1];
}
if(bindingName!=='') console.log(2);

}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
