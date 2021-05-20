function test_match(line){

var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;

if (!nodeFramePattern.test(line)) {
        console.log(1);
	var lineMatches = line.match(parseLinePattern);
        if (lineMatches) {
                console.log(2);
              handlerLine  = "at " + lineMatches[1] +
                 ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
	      if(handlerLine!=='') console.log(3);
        }
}

}

var arg = J$.readString();;
test_match(arg);
