function test_match(value){
const rnothtmlwhite = /[^\x20\t\r\n\f]+/;
var result = value.match(rnothtmlwhite);
if(result){
  console.log(1);
  if(result[0]!=='') console.log(2);
}

}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
