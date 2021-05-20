/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Test the + operator

var x = J$.readString();;

if (/^a+$/.test(x)) {
	console.log(1);
}

if (x == 'a') {
	console.log(2);
}

if (/^b+$/.test(x)) {
	console.log(3);
}

if (x == 'b') {
	console.log(4);
}

if (/^abc+$/.test(x)) {

	if (x == 'abcabc') {
		console.log(5);
	}

	console.log(6);
}

if (x == 'abc') {
	console.log(7);
}

console.log(8);
