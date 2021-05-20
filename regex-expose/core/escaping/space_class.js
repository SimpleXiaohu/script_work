/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

//Any whitespace
if (/^\s$/.test(x)) {
	if (x == ' ') console.log(1);
	if (x == '\f') console.log(2);
	if (x == '\n') console.log(3);
	if (x == '\r') console.log(4);
	if (x == '\t') console.log(5);
	if (x == '\v') console.log(6);
	console.log(7);
}

//Anything but whitespace
if (/^\S$/.test(x)) {
	if (x == '\f') console.log(8);
	if (x == '\n') console.log(9);
	if (x == '\r') console.log(10);
	if (x == '\t') console.log(11);
	if (x == '\v') console.log(12);
	console.log(13);
}
