/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');

//Form Feed
if (/^\f$/.test(x)) {
	if (x == '\f') console.log(1);
	console.log(2);
}

//Backspace
if (/^[\b]$/.test(x)) {
	if (x == '\b') console.log(3);
	console.log(4);
}

//Tabs
if (/^\t$/.test(x)) {
	if (x == '\t') console.log(5);
	console.log(6);
}

//Vertical Tab
if (/^\v$/.test(x)) {
	if (x == '\v') console.log(7);
	console.log(8);
}

//CR
if (/^\n$/.test(x)) {
	if (x == '\n') console.log(9);
	console.log(10);
}
