
function fun(str) {
   var regex = /url\(\s*(?:(?:(&quot;(?!([&#39;&quot;]+))(?!(((data|http(s)*):)|\s*&quot;))[^&#39;&quot;]*&quot;)|(?:(&#39;(?!([&#39;&quot;]+))(?!(((data|http(s)*):)|\s*&#39;))[^&#39;&quot;]*&#39;))|(?:((?!([&#39;&quot;\s]+))(?!(((data|http(s)*):)|\s*&#39;)).*[^&#39;&quot;]))))\s*\)/;
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
