
function fun(localident)
{
	var filenameReservedRegex = /[<>:"/\\|?*]/g;
	var reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
	localident = localident.replace(/^((-?[0-9])|--)/, "_$1").replace(filenameReservedRegex, "-").replace(reControlChars, "-").replace(/\./g, "-");
	if(/</.test(localident)) console.log("1");
}



var arg = J$.readString();;
fun(arg);
