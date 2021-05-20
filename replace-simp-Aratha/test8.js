
function fun(BANNER)
{
	BANNER = BANNER.replace(/\[\d+m/g, '');
	if(/\d+/.test(BANNER)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
