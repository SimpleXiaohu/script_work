function test_match(fullPath){
	if(fullPath != null && fullPath.match(/\d+$/))
		console.log(1);

}

var arg = J$.readString();;
test_match(arg);
