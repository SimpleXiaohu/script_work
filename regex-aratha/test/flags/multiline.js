/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Test that multiline changes ^ into (\n or ^) and $ into (\n or $)
var x = J$.readString();;

if (/^abc$/.test(x)) {
	if (x == 'helloabc') console.log(1);
	if (x == 'hello\nabc') console.log(2);
	if (x == 'hello\nabc\nworld') console.log(3);
	console.log(4);
}
