var x = "a\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}"
console.log(x.match(/^([a-z]??){1,4}|[^A-Za-z0-9]/)[1])