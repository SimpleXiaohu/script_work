/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;
var isIn = /^Hello(world)how are you\(today\)huh\?huh?$/.test(x);

if (isIn) {
	if (x != 'Helloworldhow are you(today)huh?hu' && x != 'Helloworldhow are you(today)huh?huh') {
		console.log(1);
	} else {
		throw 'Reachable 1';
	}
} else {
	throw 'Reachable 2';
}
