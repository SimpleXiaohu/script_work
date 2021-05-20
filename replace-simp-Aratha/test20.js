
function fun(replacementText)
{ 
       if (replacementText === 'start') {
         console.log(1);
        replacementText = replacementText.replace(/^\s+/g, '') + ' ';
      } else {
        console.log(2);
        replacementText = ' ' + replacementText.replace(/\s+$/g, '');
      }
	if(/\s\s$/.test(replacementText)) console.log(3);
}



var arg = J$.readString();;
fun(arg);
