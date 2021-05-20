/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Tests replace on a global regex

var x = J$.readString();;
var b = /(a)/;

x = x.split(b);

J$.assert(x.length < 100);

if (x.length == 16) {
	if (x[x.length - 1] == 'hello') {
		console.log(1); //Broken by the assumption on string length
	}
}
