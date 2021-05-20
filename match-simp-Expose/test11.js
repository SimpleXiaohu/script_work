function test_match(input){
const _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var match = input.match(_commentWithHashRe) || [];
if(match && match[1]!=='') console.log(1);
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
