
function fun(message)
{
	var msg = message.replace(/([^ ])\.$/u, "$1");
	if(/\./.test(message)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
