var x = J$.readString();;

J$.assert(x.length == 3);

var y = x.split(/a/);

J$.assert(y.length == 2);

if (x.split(/a/)[0] == "h") {
	throw 'Reachable 1';
}
