
function fun(tag)
{
        var out = '';
            if (/\/\*|\*\//.test(tag)) {
                console.log("1");
            }
            out = out + ' ' + tag.replace(/@/g, '\\@');
	    if(/\d+/.test(out)) console.log("2");
}



var arg = J$.readString();;
fun(arg);
