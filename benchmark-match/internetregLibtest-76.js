
function fun(str) {
   var regex = /(\/\*[\s\S.]+?\*\/|[\/]{2,}.*|\/((\/)|.??)*\/[gim]{0,3}|&#39;((\\&#39;)|.??)*&#39;|&quot;((\\&quot;)|.??)*&quot;|-?\d+\.\d+e?-?e?\d*|-?\.\d+e-?\d+|\w+|[\[\]\(\)\{\}:=;&quot;&#39;\-&!|+,.\/*])/;
   var match = str.match(regex);
   if (match) {
      if(match[1]!=null) {
	 if(/[a-z]+/.test(match[1])) 
	    console.log("1");
	 else
	    console.log("2");
      	 }
      else
           console.log("3");
   }
   else
     console.log("4");
}

var S$ = require("S$");
var str = S$.symbol("str", "");
//var str = J$.readString();
fun(str);
