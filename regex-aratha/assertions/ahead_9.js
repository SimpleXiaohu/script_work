/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readString();;

var re = /^(?=(..))[a-z]+$/;

var r = re.exec(x);

if (r) {
	console.log(1);
}