/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');
var isIn = /^void helloWorld\(\) \{\{\}\} DOGDOGDOG console.log\(HELLO WORLD\) HOW ARE YOU$/.test(x);

if (isIn) {
	console.log(1);
} else {
	console.log(2);
}