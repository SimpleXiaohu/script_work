
function fun(path)
{
  var result = '';
  if (!/\.\d+/.test(path)) {
    console.log(1);
    result = path;
  }
  result = path.replace(/\.\d+\./g, '.$.').replace(/\.\d+$/, '.$');
  if(/\$\$/.test(result)) console.log(2);
}



var arg = J$.readString();;
fun(arg);
