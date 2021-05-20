/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

'use strict';
var S$ = require('S$');
var q = S$.symbol("q", '');

if (/^(a|b|c)(c|d)([a-z]|[0-9])$/.test(q)) {

	if (/^..$/.test(q)) {
		console.log(1);
	}

	if (q == 'ac3') {
		console.log(2);
	}

	if (q == 'ccp') {
		console.log(3);
	}

	if (q == 'ac4p') {
		console.log(4);
	}

	console.log(5);

} else {

	if (q == 'ac5') {
		console.log(6);
	}

	console.log(7);
}
