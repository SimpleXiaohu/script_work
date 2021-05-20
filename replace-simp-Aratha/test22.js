
function fun(pattern)
{ 
  var gpattern = '';
  if (pattern.slice(-3) === '/**') {
    console.log(1);
    var gpattern = pattern.replace(/(\/\*\*)+$/, '');
  }
  if(gpattern!=='') console.log(2);
}



var arg = J$.readString();;
fun(arg);
