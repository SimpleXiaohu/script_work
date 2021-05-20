
function fun(stringValue)
{
  stringValue = stringValue.replace(/^'|'$/g, '"');
  if (!/^"/.test(stringValue)) {
    console.log(1);
    stringValue = '"' + stringValue + '"';
  }
}



var arg = J$.readString();;
fun(arg);
