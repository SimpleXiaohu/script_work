function test_match(name){
    var sanitizeRegex = /[^a-zA-Z0-9,-]/;

    if (name.match(/^(.+?)(?:-(.+?))?$/)[1].match(sanitizeRegex)) {
      console.log(1)
    }
}

var arg = J$.readString();;
test_match(arg);
