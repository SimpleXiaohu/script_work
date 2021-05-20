
function fun(input)
{
    var result = '';
    if (input.match(/\[[\s\S]/)) {
        console.log(1);
        result = input.replace(/^\[|\]$/g, '');
    }
    result = input.replace(/\\/g, '');
    if(/\[/.test(result)) console.log(2);
}



var arg = J$.readString();;
fun(arg);
