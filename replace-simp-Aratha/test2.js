
function fun(str)
{
	var str1 = str.replace(/^\s*/, '').replace(/\s*$/, '');
	if(/^\s.*\s$/.test(str1)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
