function test_match(text){
        var out = '';
        if (text) {
            console.log(1);
            if (text.match(/\/\*|\*\//)) {
                console.log(2);
                throw new Error('JSDoc text cannot contain "/*" and "*/"');
            }
            out += ' ' + text.replace(/@/g, '\\@');
        }
        if(out!== '') console.log(3);
}

var arg = J$.readString();;
test_match(arg);
