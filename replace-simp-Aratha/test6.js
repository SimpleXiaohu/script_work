
function fun(url)
{
	var url1 = url.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, 'ng:///');
	if(/\d+/.test(url1)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
