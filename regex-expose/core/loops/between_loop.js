/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Simple test of Term {Min, Max}
var S$ = require('S$');
var x = S$.symbol("X", '');

if (/^(abc){3,6}$/.test(x)) {
	if (x == 'abcabcabc') console.log(1);
	if (x == 'abcabcabcabc') console.log(2);
	if (x == 'abcabcabcabcabc') console.log(3);
	if (x == 'abcabcabcabcabcabc') console.log(4);
	console.log(5);
}

if (/^a{0,3}$/.test(x)) {
	if (x == '') console.log(6);
	if (x == 'a') console.log(7);
	if (x == 'aa') console.log(8);
	if (x == 'aaa') console.log(9);
	console.log(10);
}
