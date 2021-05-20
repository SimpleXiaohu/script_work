
function fun(str) {
   var regex = /# one tag name matcher and three times the style or attribute matcher with each 6 match possibilities (three times to reckon with the attributes placing)\n# capturing (only one) front space of each attribute\n# quotes aren&#39;t needed to match, but are captures when available\n&lt;\n\t(span|font) # tagname\n\n\t.*?\n\t(?:\n\t\t(?:\n\t\t\t\t(\s?style=&quot;?).*? # style opener\n\t\t\t\t((?:\s?font-size:.+?\s*(?:;|,|(?=&quot;))+)|(?:\s?color:.+?\s*(?:;|,|(?=&quot;))+))[^&quot;]* # font-size or color style property\n\t\t\t\t((?:\s?font-size:.+?\s*(?:;|,|(?=&quot;))+)|(?:\s?color:.+?\s*(?:;|,|(?=&quot;))+))[^&quot;]* # font-size or color style property\n\t\t\t\t# (the line above should be made optional.)\n\t\t\t\t(&quot;?) # style end quote if available\n\t\t\t|\n\t\t\t\t(\s?size=&quot;?.*?(?:(?=\s)|&quot;|(?=&gt;))) # size attribute\n\t\t\t|\n\t\t\t\t(\s?color=&quot;?.*?(?:(?=\s)|&quot;|(?=&gt;))) # color attribute\n\t\t\t|\n\t\t\t\t(?=&gt;)\n\t\t)\n\t\t.*?\n\t){3}\n\t\n&gt;/;
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
