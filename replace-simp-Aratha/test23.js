
function fun(comment)
{ 
    var result = comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
    if(/^\{\{/.test(result)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
