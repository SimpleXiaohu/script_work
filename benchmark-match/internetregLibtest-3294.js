
function fun(str) {
   var regex = /^((0*[0-1]?[0-9]{1,2}\.)|(0*((2[0-4][0-9])|(25[0-5]))\.)){3}((0*[0-1]?[0-9]{1,2})|(0*((2[0-4][0-9])|(25[0-5]))))$/;
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
