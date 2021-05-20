function test_match(val){
var result = '';
if (val.match(/^--no-.+/)) {
   console.log(1);
   result = val.match(/^--no-(.+)/)[0];
   if(/---/.test(result)) console.log(2);
}

}

var arg = J$.readString();;
test_match(arg);
