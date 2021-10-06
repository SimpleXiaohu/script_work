var x = "aaaaaaaaaaaa\u{1}\u{1}\u{1}"
console.log(x.match(/^([a-z]{1,4}){1,4}?/)[1])