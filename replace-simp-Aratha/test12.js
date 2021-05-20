
function fun(str)
{
  	str = str.replace(/;(\s*$)/, '$1');
	if(/;/.test(str)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
