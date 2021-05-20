
function fun(value)
{
		value = value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, 		'&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		if(/[a-z]+/.test(value)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
