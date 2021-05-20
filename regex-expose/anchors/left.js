/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

'use strict';
var S$ = require('S$');
var q = S$.symbol("q", '');

//Implict anchor => /--.+=.*?/ (will let anything in after the =)
if (/^--.+=/.test(q)) {

	if (q[0] != '-') {
		console.log(1);
	}

	if (q[q.length - 1] != '=') {
		console.log(2);
	}

	console.log(3);
}

console.log(4);
