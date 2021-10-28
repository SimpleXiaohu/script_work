J$.iids = {"8":[6,6,6,48],"9":[2,25,2,65],"10":[6,22,6,48],"16":[6,6,6,48],"17":[2,25,2,65],"25":[2,25,2,65],"33":[3,22,3,118],"41":[3,22,3,118],"49":[3,22,3,118],"57":[4,17,4,20],"65":[4,29,4,42],"73":[4,44,4,46],"81":[4,17,4,47],"83":[4,17,4,28],"89":[4,17,4,47],"97":[4,17,4,47],"105":[5,21,5,29],"113":[5,36,5,52],"121":[5,21,5,53],"123":[5,21,5,35],"129":[5,21,5,53],"137":[5,21,5,53],"145":[6,6,6,18],"153":[6,22,6,30],"161":[6,38,6,39],"169":[6,22,6,40],"171":[6,22,6,37],"177":[6,45,6,48],"185":[7,3,7,10],"193":[7,15,7,16],"201":[7,3,7,17],"203":[7,3,7,14],"209":[7,3,7,18],"217":[1,1,10,2],"225":[1,1,10,2],"233":[1,1,10,2],"241":[1,1,10,2],"249":[1,1,10,2],"257":[1,1,10,2],"265":[1,1,10,2],"273":[11,10,11,17],"281":[11,18,11,22],"289":[11,10,11,23],"297":[11,10,11,23],"305":[11,10,11,23],"313":[13,11,13,13],"321":[13,21,13,26],"329":[13,28,13,30],"337":[13,11,13,31],"339":[13,11,13,20],"345":[13,11,13,31],"353":[13,11,13,31],"361":[14,1,14,11],"369":[14,12,14,15],"377":[14,1,14,16],"385":[14,1,14,17],"393":[1,1,14,17],"401":[1,1,10,2],"409":[1,1,14,17],"417":[1,1,14,17],"425":[1,1,14,17],"433":[6,2,8,3],"441":[1,1,10,2],"449":[1,1,10,2],"457":[1,1,14,17],"465":[1,1,14,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test43.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test43_jalangi_.js","code":"function test_match(exp){\nconst unaryOperatorsRE = /\\\\s*\\\\([^\\\\)]*\\\\)|\\\\b\\\\s*\\\\([^\\\\)]*\\\\)/;\nconst stripStringRE = /'(?:[^'\\\\]|\\\\.)*'|\"(?:[^\"\\\\]|\\\\.)*\"|`(?:[^`\\\\]|\\\\.)*\\$\\{|\\}(?:[^`\\\\]|\\\\.)*`|`(?:[^`\\\\]|\\\\.)*`/g\nconst stripped = exp.replace(stripStringRE, '');\nconst keywordMatch = stripped.match(unaryOperatorsRE);\nif (keywordMatch && stripped.charAt(0) !== '$') {\n\tconsole.log(1);\n}\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(393, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test43_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test43.js');
            function test_match(exp) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            exp = J$.N(233, 'exp', exp, 4);
                            J$.N(241, 'unaryOperatorsRE', unaryOperatorsRE, 0);
                            J$.N(249, 'stripStringRE', stripStringRE, 0);
                            J$.N(257, 'stripped', stripped, 0);
                            J$.N(265, 'keywordMatch', keywordMatch, 0);
                            var unaryOperatorsRE = J$.X1(25, J$.W(17, 'unaryOperatorsRE', J$.T(9, /\\s*\\([^\\)]*\\)|\\b\\s*\\([^\\)]*\\)/, 14, false), unaryOperatorsRE, 1));
                            var stripStringRE = J$.X1(49, J$.W(41, 'stripStringRE', J$.T(33, /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g, 14, false), stripStringRE, 1));
                            var stripped = J$.X1(97, J$.W(89, 'stripped', J$.M(81, J$.R(57, 'exp', exp, 0), 'replace', 0)(J$.R(65, 'stripStringRE', stripStringRE, 0), J$.T(73, '', 21, false)), stripped, 1));
                            var keywordMatch = J$.X1(137, J$.W(129, 'keywordMatch', J$.M(121, J$.R(105, 'stripped', stripped, 0), 'match', 0)(J$.R(113, 'unaryOperatorsRE', unaryOperatorsRE, 0)), keywordMatch, 1));
                            if (J$.X1(433, J$.C(16, J$.C(8, J$.R(145, 'keywordMatch', keywordMatch, 0)) ? J$.B(10, '!==', J$.M(169, J$.R(153, 'stripped', stripped, 0), 'charAt', 0)(J$.T(161, 0, 22, false)), J$.T(177, '$', 21, false), 0) : J$._()))) {
                                J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(409, 'test_match', J$.T(401, test_match, 12, false, 217), 0);
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'arg', arg, 0);
            var S$ = J$.X1(305, J$.W(297, 'S$', J$.F(289, J$.R(273, 'require', require, 2), 0)(J$.T(281, "S$", 21, false)), S$, 3));
            var arg = J$.X1(353, J$.W(345, 'arg', J$.M(337, J$.R(313, 'S$', S$, 1), 'symbol', 0)(J$.T(321, "arg", 21, false), J$.T(329, "", 21, false)), arg, 3));
            J$.X1(385, J$.F(377, J$.R(361, 'test_match', test_match, 1), 0)(J$.R(369, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
