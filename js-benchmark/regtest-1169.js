var x = "aAaAaAaA\u{1}\u{1}\u{1}"
console.log(x.match(/^(([a-z][A-Z])){1,4}/)[1])