/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

if (/^[abcd]$/.test(x)) {
	if (x == 'c') console.log(1);
	if (x == '') console.log(2);
	if (x == 'e') console.log(3);
	console.log(4);
}

if (/^[a-z]*$/.test(x)) {
	if (x == 'abcdef') console.log(5);
	if (x == '') console.log(6);
	if (x == '12345') console.log(7);
	console.log(8);
}

if (/^[0-9]+$/.test(x)) {
	if (x == '12345') console.log(9);
	if (x == '12ab34') console.log(10);
	if (x == '') console.log(11);
	console.log(12);
}

console.log(13);
