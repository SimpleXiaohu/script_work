function test_match(line){
    var regex = /(?:(?:\\033[[0-9;]*m)*.?){1,.*}/;
    var chunk = line.match(regex)[0];
    if(chunk !== '') console.log("1");
}

var arg = J$.readString();;
test_match(arg);
