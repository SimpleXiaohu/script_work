function test_match(obj){
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/;

var result = '';
if (obj) {
   console.log(1);
   result = obj.match(reStrSymbol);
   if(result && result[0] !== "") console.log(2);
}

}

var arg = J$.readString();;
test_match(arg);
