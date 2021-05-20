function test_match(value){
var rnothtmlwhite = /[^\x20\t\r\n\f]+/;
var result = value.match(rnothtmlwhite);
if(result){
  console.log(1);
  if(result[0]!=='') console.log(2);
}

}

var arg = J$.readString();;
test_match(arg);
