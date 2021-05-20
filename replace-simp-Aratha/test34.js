
function fun(source)
{
    var source = source.replace(/^.*[\\\/]/, '');
    if(/\//.test(source)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
