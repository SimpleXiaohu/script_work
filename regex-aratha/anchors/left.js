/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

'use strict';
var q = J$.readString();;

//Implict anchor => /--.+=.*?/ (will var anything in after the =)
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
