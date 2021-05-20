function test_match(url){

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/i;
const DATA_URL_PATTERN =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

var result1 = url.match(SAFE_URL_PATTERN);
var result2 = url.match(DATA_URL_PATTERN);
var result = '';
if (result1)
{
    console.log(1);
	result = result1[0]; 
	
}
else if(result2)
{
    console.log(2);
     result = result2[0];	
}
}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
