/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Generate a test case 

var x = S$.symbol("X", '');
var b = /(a|b)/g;

S$.assume(x.length > 1000);
S$.assume(x[786] = 'b');

if (x.replace(b, 'Test') == 'Test') {
	
	//In a global replace all instances should go
	if (x.indexOf('a') != -1 || x.indexOf('b') != -1) {
		console.log(1);
	}

	if (x[768] != 'T') {
		console.log(2);
	}

	console.log(3);
}

console.log(4);
