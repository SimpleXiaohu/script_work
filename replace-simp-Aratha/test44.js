
function fun(locale)
{
	var result = locale.replace(/[.:].*/, '');
	if(/\d+/.test(result)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
