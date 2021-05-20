
function fun(hostname)
{
  	var result = hostname.replace(/^\.*/, '.');
	if(/\.\./.test(result)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
