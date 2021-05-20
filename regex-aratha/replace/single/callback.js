var x = J$.readString();;

x.replace(/^.+(.).+/, function(zero, one) {
	if (one == 'p') {
		throw 'Reachable 1';
	} else if (one == 'c') {
		throw 'Reachable 2';
	} else if (one == "dog") {
		console.log(1);
	}
});
