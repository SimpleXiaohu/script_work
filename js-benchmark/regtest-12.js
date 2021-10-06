var x = "a0\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}"
console.log(x.match(/^([a-z]|[A-Z])[0-9]/)[1])