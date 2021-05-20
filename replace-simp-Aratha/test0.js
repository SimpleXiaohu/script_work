
function fun(value)
{
    var FN_ARGS = /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/;
    var ARROW_FN_ARGS = /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/g;
    var src = value.replace(STRIP_COMMENTS, '');
    var match = src.match(FN_ARGS);
    if (!match) {
        console.log(1);
        match = src.match(ARROW_FN_ARGS);
	if(/=/.test(match[0])) console.log(2);
    }
}



var arg = J$.readString();;
fun(arg);
