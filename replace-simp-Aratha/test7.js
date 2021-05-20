
function fun(s)
{
	s = s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	if(/[^\\]\]/.test(s)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
