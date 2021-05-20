function test_match(pattern){
  if (pattern === '/**') {
    console.log(1);
    var gpattern = pattern.replace(/(\/\*\*)+$/, '');
    if(pattern !== '') console.log(2);
  }
}

var arg = J$.readString();;
test_match(arg);
