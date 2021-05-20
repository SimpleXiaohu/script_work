function test_match(trace){
var filenameRE = /\(([^)]+\.js):(\d+):(\d+)\)$/;
var m = trace.match(filenameRE);
if(m)
{
  console.log(1);
  var map = m[1];
  var line = m[2];
  var column = m[3];
  if(/[A-Z].*/.test(map) && /2\d*/.test(line) && /3\d*/.test(column)) console.log(2);
}
}

var arg = J$.readString();;
test_match(arg);
