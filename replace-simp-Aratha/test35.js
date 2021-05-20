
function fun(path)
{
	var escapePath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	if(/[^\\]\//.test(escapePath)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
