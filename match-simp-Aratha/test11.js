function test_match(input){
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var match = input.match(_commentWithHashRe) || [];
if(match && match[1]!=='') console.log(1);
}

var arg = J$.readString();;
test_match(arg);
