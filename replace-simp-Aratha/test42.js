

function fun(base)
{
      base = base.replace(/^https?:\/\/[^\/]+/, '');
  if (base.charAt(0) !== '/') {
    console.log(1);
    base = '/' + base
}
}



var arg = J$.readString();;
fun(arg);
