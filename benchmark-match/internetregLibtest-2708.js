
function fun(str) {
   var regex = /^([A-Za-z\-]+)\s+(\w+)\s+([A-Za-z0-9_\-\.]+)\s+([A-Za-z0-9_\-\.]+)\s+(\d+)\s+(.{3} [0-9 ]{2} ([0-9][0-9]:[0-9][0-9]| [0-9]{4}))\s+(.+)$/;
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
