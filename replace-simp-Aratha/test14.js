
function fun(input)
{
	input = input.replace(/^_+|_+$/g, "");
	if(/_+/.test(input)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
