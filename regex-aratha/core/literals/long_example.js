/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;
var isIn = /^LOREM IPSUM DIPSUM LOREM IPSUM DIPSUM LOREM IPSUM DIPSUMLOREM IPSUM DIPSUM LOREM IPSUM DIPSUM LOREM IPSUM DIPSUMLOREM IPSUM DIPSUMLOREM IPSUM DIPSUMLOREM IPSUM DIPSUMLOREM IPSUM DIPSUMLOREM IPSUM DIPSUMLOREM IPSUM DIPSUMLOREM IPSUM DIPSUM$/.test(x);

if (isIn) {
	console.log(1);
} else {
	console.log(2);
}
