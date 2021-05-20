
function fun(device)
{
  var result = '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
  if(/\//.test(result)) console.log("1");
}


var arg = J$.readString();;
fun(arg);
