/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Tests replace on a global regex

var x = J$.readString();;
var b = /a/;

J$.assert(x.length < 5);

x = x.split(b);

if (x.length == 2) {

	if (x[0] == 'hello') {
		console.log(1); //Broken by the assumption on string length
	}

	if (x[1] == 'wh') {
		throw 'Reachable 1';
	}

	if (x[0] == 'w') {
		throw 'Reachable 1';
	}
}
