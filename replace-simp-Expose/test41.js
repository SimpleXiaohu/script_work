
function fun(query)
{
  var res = '';
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (query!=='') {
    res = query.replace(/\+/g, ' ');
    if(/\s/.test(res)) console.log("1");
  }
}


var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
