function test_match(name){
        if (name.match(/\s+/u)) {
		console.log(1);
        }


}

var arg = J$.readString();;
test_match(arg);
