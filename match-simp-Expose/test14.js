function test_match(url){
const URL_WITH_SCHEMA_REGEXP = /^([^:/?#]+):/;
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
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
