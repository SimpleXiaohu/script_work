
function fun(str) {
   var regex = /^([^_][\w\d\@\-]+(?:s\&#39;|\&#39;[a-zA-Z]{1,2})?(?:\,)?(?: [\w\d\@\-]+(?:s\&#39;|\&#39;[a-zA-Z]{1,2})?(?:\,)?)*(?:\.|\!|\?){0,3}[^\s_])$/;
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
