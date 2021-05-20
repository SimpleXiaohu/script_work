function test_match(bindingName){
var ATTR_REGEX = /attr\.([^\]]+)/;
var attrMatches = bindingName.match(ATTR_REGEX);
if (attrMatches) {
     console.log(1);
     bindingName = attrMatches[1];
}
if(bindingName!=='') console.log(2);

}

var arg = J$.readString();;
test_match(arg);
