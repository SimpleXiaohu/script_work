/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;

if (/^[a-zA-Z]?$/.test(x)) {
	if (!/^[a-z]$/.test(x)) {
		console.log(1);
	} else {
		console.log(2);
	}
}

if (/^[a-z]$/.test(x)) {
	console.log(3);
}