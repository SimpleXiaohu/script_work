/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

if (/^\xFF$/.test(x)) {
	if (x != '\xFF') console.log(1);
	console.log(2);
}

if (/^\xEF$/.test(x)) {
	if (x != '\xEF') console.log(3);
	console.log(4);
}

if (/^\0$/.test(x)) {
	if (x == '\x00') console.log(5);
	console.log(6);
}
