function test_match(inputState){
var result = inputState.match(/\s([a-z|A-Z]+)/)[1];
if(result && /[a-z]+[A-Z]+/.test(result[0])) console.log(1);
}

var arg = J$.readString();;
test_match(arg);
