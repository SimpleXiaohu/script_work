/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Simple test of Term {X}
var S$ = require('S$');
var x = S$.symbol("X", '');

if (/^(abc){3}$/.test(x)) {
	if (x == 'abcabcabc') console.log(1);
	console.log(2);
}

if (/^a{3}$/.test(x)) {
	if (x == 'aaa') console.log(3);
	console.log(4);
}
