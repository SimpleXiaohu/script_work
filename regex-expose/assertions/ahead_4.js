/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

var re3 = /^(?=(a|b|c)).$/;

if (re3.test(x)) {
	
	if (x == 'd') {
		console.log(1);
	}

	if (x == 'a') {
		console.log(2);
	}

	if (x == 'b') {
		console.log(3);
	}

	if (x == 'c') {
		console.log(4);
	}

	console.log(5);
}
