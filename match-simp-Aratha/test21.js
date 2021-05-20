function test_match(text){
   var HTML_ENTITY_REGEX = /&[A-Za-z\d#]+;/;
   var HTML_ENTITY = '<HTML_ENTITY>';
   var htmlEntity = text.match(HTML_ENTITY_REGEX);
   if(htmlEntity){
      console.log(1);
      var result = htmlEntity[0].replace(HTML_ENTITY,'');
      if(result!== '') console.log(2);
   }
}

var arg = J$.readString();;
test_match(arg);
