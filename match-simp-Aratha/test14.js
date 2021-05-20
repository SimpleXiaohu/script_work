function test_match(url){
var URL_WITH_SCHEMA_REGEXP = /^([^:/?#]+):/;
if (url)
{
	console.log(1);
	var schemeMatch = url.match(URL_WITH_SCHEMA_REGEXP);
	var result = true;
	if(schemeMatch)
		if(schemeMatch[1] !== 'package' && schemeMatch[1] !== 'asset')
			result = false; 
}
}

var arg = J$.readString();;
test_match(arg);
