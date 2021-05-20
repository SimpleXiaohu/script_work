function test_match(result){
    if (result != null && result.match(/exception|corrupt/) != null)
      console.log(1);

}

var arg = J$.readString();;
test_match(arg);
