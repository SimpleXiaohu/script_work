
function fun(value)
{
 var stackFramePattern = /^\s*at\s*/;
 var line = value.replace(/\s+$/g, "");
 if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
         console.log("1");
 }
}



var arg = J$.readString();;
fun(arg);
