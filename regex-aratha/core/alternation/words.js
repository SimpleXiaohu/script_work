/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;

if (/^Hello|Goodbye|Whats Up$/.test(x)) {
	if (x == 'Hello') console.log(1);
	if (x == 'Goodbye') console.log(2);
	if (x == 'Whats Up') console.log(3);
	console.log(4);
}

console.log(5);
