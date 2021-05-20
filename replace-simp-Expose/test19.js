
function fun(relativePath)
{ 
	if(relativePath) {
		var stripped = relativePath.replace(/\/$/g, ''); 
		var result = '';
		if((/^((\.\.)|(\.))($|\/)/.test(stripped))){
			console.log(1);
			result = stripped;
  		}
  		else
  		{
			console.log(2);
			result =   './'+ stripped;
  		}
	}
}



var S$ = require("S$");

var arg = S$.symbol("arg", "");
fun(arg);
