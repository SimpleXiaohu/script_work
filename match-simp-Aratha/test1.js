function test_match(changelog){

var versionMarkerReg = /<!--LATEST=(\\d+)\\.(\\d+)\\.(\\d+)-->/;

var result = '';
if (changelog)
{
	var match = changelog.match(versionMarkerReg);
	console.log(1);
	if(match)
	{
		result = 'major:' + match[1] + 'minor:' + match[2] + 'patch:' + match[3];
		console.log(2);
		if(result!=='') console.log(3); 
	}
	
}
}

var arg = J$.readString();;
test_match(arg);
