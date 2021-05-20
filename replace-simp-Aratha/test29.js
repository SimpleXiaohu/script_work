
function fun(path)
{
 path = path.replace(/\.\d+\./, '.');
 if(/\d+/.test(path)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
