
function fun(query)
{
  var res = '';
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (query!=='') {
    res = query.replace(/\+/g, ' ');
    if(/\s/.test(res)) console.log("1");
  }
}



var arg = J$.readString();;
fun(arg);
