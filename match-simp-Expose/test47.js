function test_match(trace){
const filenameRE = /\(([^)]+\.js):(\d+):(\d+)\)$/;
const m = trace.match(filenameRE);
if(m)
{
  console.log(1);
  const map = m[1];
  const line = m[2];
  const column = m[3];
  if(/[A-Z].*/.test(map) && /2\d*/.test(line) && /3\d*/.test(column)) console.log(2);
}
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
