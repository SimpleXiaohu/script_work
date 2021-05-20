/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;

if (/^he*llo_world*$/.test(x)) {
	if (x == 'heello_worlddddd') console.log(1);
	if (x == 'hllo_worl') console.log(2);
	if (x == '') console.log(3);
	console.log(4);
}

if (/^(hello)*(world)*$/.test(x)) {
	if (x == '') console.log(5);
	if (x == 'hellohelloworld') console.log(6);
	if (x == 'd') console.log(7);
	if (x == 'hellohelloworl') console.log(8);
	if (x == 'worldworldworld') console.log(9);
	console.log(10);
}
