
function fun(str) {
   var regex = /&lt;a[a-zA-Z0-9 =&quot;&#39;.?_\/]*(href\s*=\s*){1}[a-zA-Z0-9 =&quot;&#39;.?_\/]*\s*((\/&gt;)|(&gt;[a-zA-Z0-9 =&quot;&#39;&lt;&gt;.?_\/]*&lt;\/a&gt;))/;
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