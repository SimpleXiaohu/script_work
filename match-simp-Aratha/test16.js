function test_match(value){
var BINDING_REGEXP = /(\d+):?\d*/;

var result = '';
if (value !== '') {
        console.log(1);
        var match = value.match(BINDING_REGEXP);
        if (match) {
            console.log(2);
            result = match[1];
        }
}
}

var arg = J$.readString();;
test_match(arg);
