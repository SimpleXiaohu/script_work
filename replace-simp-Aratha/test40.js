
function fun(file)
{
	var withoutQuery = file.replace(/\?.*/, '');
	if(/\/?/.test(withoutQuery)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
