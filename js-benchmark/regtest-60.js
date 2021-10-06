var x = "a0\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}"
console.log(x.match(/^([a-z]??)[0-9]/)[1])