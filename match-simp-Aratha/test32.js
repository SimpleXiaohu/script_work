function test_match(opt){
	if(opt.match(/^(es|es6|es7|esnext|web)\./)){
		target = "builtIns";
		console.log(1);
	}
	else{
		target = "plugins";
		console.log(2);
	}

}

var arg = J$.readString();;
test_match(arg);
