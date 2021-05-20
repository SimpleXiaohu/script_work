
function fun(value)
{ 
   var value1 = value.replace(/\\([\\\]])/g, '$1');
   if(/\\\\/.test(value1)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
