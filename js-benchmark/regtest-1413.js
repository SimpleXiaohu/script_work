var x = "aa\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}"
console.log(x.match(/^(([a-z]?){1,4})/)[1])