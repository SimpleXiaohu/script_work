function test_match(frame1){
const ERROR_TAG = 'STACKTRACE TRACKING';
const SEP_TAG = '__SEP_TAG__';
if (frame1.indexOf(ERROR_TAG) == -1) {
   console.log(1);
   var match = frame1.match(/^\s*at\s+/);
   if (match) {
      console.log(2);
        sepTemplate = match[0] + SEP_TAG + ' (http://localhost)';
	if(/STACK/.test(sepTemplate)) console.log(3);
   }
}
}

var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
