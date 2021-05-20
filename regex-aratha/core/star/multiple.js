/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;

if (/^he*llo_world*$/.test(x)) {
	console.log(1);
}

if (/^(hello)*(world)*$/.test(x)) {
	console.log(2);
}

if (/^he*llo_world*$/.test(x)) {
	console.log(3);
}

if (/^(hello)*(world)*$/.test(x)) {
	console.log(4);
}

if (/^a*$/.test(x)) {
	console.log(5);
}

if (/^b*$/.test(x)) {
	console.log(6);
}

console.log(7);
