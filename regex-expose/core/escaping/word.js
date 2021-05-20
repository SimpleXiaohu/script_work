/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

if (/^\w$/.test(x)) {
	if (!/^[a-zA-Z0-9_]$/.test(x)) {
		console.log(1);
	} else {
		console.log(2);
	}
}

if (/^\W$/.test(x)) {
	if (/^[a-zA-Z0-9_]$/.test(x)) {
		console.log(3);
	} else {
		console.log(4);
	}
}
