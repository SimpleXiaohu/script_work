/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

//Combine optional, non-greedy optional and non optional terms in the same regex and test

var x = J$.readString();;

if (/^a?bcd(bcde)??$/.test(x)) {
	if (x == 'bcd') console.log(1);
	if (x == 'abcd') console.log(2);
	if (x == 'bcdbcde') console.log(3);
	if (x == 'abcdbcde') console.log(4);
	console.log(5);
}

if (/^qerf??ef?$/.test(x)) {
	if (x == 'qere') console.log(6);
	if (x == 'qerfe') console.log(7);
	if (x == 'qeref') console.log(8);
	if (x == 'qerfef') console.log(9);
	console.log(10);
}
