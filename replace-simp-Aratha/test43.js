
function fun(cmd)
{
    var bregex = /\.*[\][<>]/g;
    cmd = cmd.replace(bregex, '');
    if(/<>/.test(cmd)) console.log("1");
}




var arg = J$.readString();;
fun(arg);
