var x = "aAaAaAaAaA\u{1}"
console.log(x.match(/^([a-z][A-Z])+/)[1])