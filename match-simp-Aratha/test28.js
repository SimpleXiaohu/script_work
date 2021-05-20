function test_match(input){
 var result = '';
   if (input.match(/\[[\s\S]/)) {
        console.log(1);
        result = input.replace(/^\[|\]$/g, '');
    }
    else {
      console.log(2);
      result = input.replace(/\\/g, '');
    }
   if(result !='') console.log(3);
}

var arg = J$.readString();;
test_match(arg);
