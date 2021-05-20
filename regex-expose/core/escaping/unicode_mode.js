/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

if (/^\u{EEFF}$/u.test(x)) {
	if (x != '\uEEFF') console.log(1);
	console.log(2);
}

if (/^\u{EFAF}$/u.test(x)) {
	if (x != '\uEFAF') console.log(3);
	console.log(4);
}

if (/^\u{AAAA}$/u.test(x)) {
	if (x != '\uAAAA') console.log(5);
	console.log(6);
}

if (/^\u{FEEE}$/u.test(x)) {
	if (x != '\uFEEE') console.log(7);
	console.log(8);
}

if (/^\u{4444}$/u.test(x)) {
	if (x != '\u4444') console.log(9);
	console.log(10);
}
