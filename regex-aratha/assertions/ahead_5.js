/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;

var re = /^.(?=(a|b|c)).$/;

if (re.test(x)) {
	
	if (x.charAt(1) == 'd') {
		console.log(1);
	}

	if (x.charAt(1) == 'a') {
		console.log(2);
	}

	if (x.charAt(1) == 'b') {
		console.log(3);
	}

	if (x.charAt(1) == 'c') {
		console.log(4);
	}

	console.log(5);
}
