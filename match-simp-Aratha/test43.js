function test_match(exp){
var unaryOperatorsRE = /\\s*\\([^\\)]*\\)|\\b\\s*\\([^\\)]*\\)/;
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g
var stripped = exp.replace(stripStringRE, '');
var keywordMatch = stripped.match(unaryOperatorsRE);
if (keywordMatch && stripped.charAt(0) !== '$') {
	console.log(1);
}

}

var arg = J$.readString();;
test_match(arg);
