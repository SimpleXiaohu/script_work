
function fun(source)
{ 
	var importPath = source.replace(/\?(.*)$/, '');
	if(/\?/.test(importPath)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
