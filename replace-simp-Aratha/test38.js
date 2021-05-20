
function fun(tag)
{
	var result = '';
 	result = tag.replace(/vue\-component\-(\d+\-)?/, '');
  	if(result!=='') console.log("1");   
}



var arg = J$.readString();;
fun(arg);
