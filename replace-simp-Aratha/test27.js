
function fun(s)
{
 	var result = s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	if(/\s\s/.test(result)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
