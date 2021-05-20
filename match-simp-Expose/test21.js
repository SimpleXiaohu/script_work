function test_match(text){
   const HTML_ENTITY_REGEX = /&[A-Za-z\d#]+;/;
   const HTML_ENTITY = '<HTML_ENTITY>';
   const htmlEntity = text.match(HTML_ENTITY_REGEX);
   if(htmlEntity){
      console.log(1);
      var result = htmlEntity[0].replace(HTML_ENTITY,'');
      if(result!== '') console.log(2);
   }
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
