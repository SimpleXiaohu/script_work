
function fun(value)
{ 
	var result = value.replace(/^.*\.propTypes\./, '');
	if(/propTypes/.test(result)) console.log(1);
}



var arg = J$.readString();;
fun(arg);
