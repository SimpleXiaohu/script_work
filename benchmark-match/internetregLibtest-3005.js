
function fun(str) {
   var regex = /((&quot;|&#39;)[a-z0-9\/\.\?\=\&amp;]*(\.htm|\.asp|\.php|\.jsp)[a-z0-9\/\.\?\=\&amp;]*(&quot;|&#39;))|(href=*?[a-z0-9\/\.\?\=\&amp;&quot;&#39;]*)/;
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