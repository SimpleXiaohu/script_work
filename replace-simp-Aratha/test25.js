
function fun(search)
{
    search = search.replace(/[?&]grep=[^&\s]*/g, '').replace(/^&/, '?');
    if(/=/.test(search)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
