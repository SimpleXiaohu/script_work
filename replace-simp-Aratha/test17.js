
function fun(currentNode)
{ 
      var currentNode1 = currentNode.replace(/\\*(\$\{|`)/g, `\\$1`);
      if(/\\\\/.test(currentNode1)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
