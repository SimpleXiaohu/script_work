
function fun(str) {
   var regex = /(\d{1}-\d{2}\s*)(of +)(\s?\d{5})|(\d{1}-\d{2}\s*)(of +)(\s?\d{4})|(\d{1}-\d{2}\s*)(of +)(\s?\d{3})|(\d{1}-\d{2}\s*)(of +)(\s?\d{2})|(\d{1}-\d{2}\s*)(of +)(\s?\d{1})/;
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
