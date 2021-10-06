var x = "aaaaaaaaaa\u{1}"
console.log(x.match(/^([a-z]+?)??[^A-Za-z0-9]/)[1])