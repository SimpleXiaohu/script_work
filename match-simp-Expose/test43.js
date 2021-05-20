function test_match(exp){
const unaryOperatorsRE = /\\s*\\([^\\)]*\\)|\\b\\s*\\([^\\)]*\\)/;
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g
const stripped = exp.replace(stripStringRE, '');
const keywordMatch = stripped.match(unaryOperatorsRE);
if (keywordMatch && stripped.charAt(0) !== '$') {
	console.log(1);
}

}
var S$ = require("S$");

var arg = S$.symbol("arg", "");
test_match(arg);
