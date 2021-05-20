
function fun(trace)
{
	var filenameRE = /\(^webpack:\/\/\/([^)]+\.js):(\d+):(\d+)\)$/;
	var m =  trace.replace(filenameRE, '$1:$2:$3');
	if(/::/.test(m)) console.log("1");
}


var arg = J$.readString();;
fun(arg);
