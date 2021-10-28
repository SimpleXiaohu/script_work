J$.iids = {"8":[4,9,4,21],"9":[2,17,2,50],"10":[4,9,4,21],"17":[2,17,2,50],"25":[2,17,2,50],"33":[3,17,3,21],"41":[3,28,3,33],"49":[3,17,3,34],"51":[3,17,3,27],"57":[3,35,3,36],"65":[3,17,3,37],"73":[3,17,3,37],"81":[3,17,3,37],"89":[4,9,4,14],"97":[4,19,4,21],"105":[4,23,4,30],"113":[4,35,4,38],"121":[4,23,4,39],"123":[4,23,4,34],"129":[4,23,4,40],"137":[1,1,5,2],"145":[1,1,5,2],"153":[1,1,5,2],"161":[1,1,5,2],"169":[1,1,5,2],"177":[6,10,6,17],"185":[6,18,6,22],"193":[6,10,6,23],"201":[6,10,6,23],"209":[6,10,6,23],"217":[8,11,8,13],"225":[8,21,8,26],"233":[8,28,8,30],"241":[8,11,8,31],"243":[8,11,8,20],"249":[8,11,8,31],"257":[8,11,8,31],"265":[9,1,9,11],"273":[9,12,9,15],"281":[9,1,9,16],"289":[9,1,9,17],"297":[1,1,9,17],"305":[1,1,5,2],"313":[1,1,9,17],"321":[1,1,9,17],"329":[1,1,9,17],"337":[4,5,4,40],"345":[1,1,5,2],"353":[1,1,5,2],"361":[1,1,9,17],"369":[1,1,9,17],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test24.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test24_jalangi_.js","code":"function test_match(line){\n    var regex = /(?:(?:\\\\033[[0-9;]*m)*.?){1,.*}/;\n    var chunk = line.match(regex)[0];\n    if(chunk !== '') console.log(\"1\");\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test24_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test24.js');
            function test_match(line) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            line = J$.N(153, 'line', line, 4);
                            J$.N(161, 'regex', regex, 0);
                            J$.N(169, 'chunk', chunk, 0);
                            var regex = J$.X1(25, J$.W(17, 'regex', J$.T(9, /(?:(?:\\033[[0-9;]*m)*.?){1,.*}/, 14, false), regex, 1));
                            var chunk = J$.X1(81, J$.W(73, 'chunk', J$.G(65, J$.M(49, J$.R(33, 'line', line, 0), 'match', 0)(J$.R(41, 'regex', regex, 0)), J$.T(57, 0, 22, false), 4), chunk, 1));
                            if (J$.X1(337, J$.C(8, J$.B(10, '!==', J$.R(89, 'chunk', chunk, 0), J$.T(97, '', 21, false), 0))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(313, 'test_match', J$.T(305, test_match, 12, false, 137), 0);
            J$.N(321, 'S$', S$, 0);
            J$.N(329, 'arg', arg, 0);
            var S$ = J$.X1(209, J$.W(201, 'S$', J$.F(193, J$.R(177, 'require', require, 2), 0)(J$.T(185, "S$", 21, false)), S$, 3));
            var arg = J$.X1(257, J$.W(249, 'arg', J$.M(241, J$.R(217, 'S$', S$, 1), 'symbol', 0)(J$.T(225, "arg", 21, false), J$.T(233, "", 21, false)), arg, 3));
            J$.X1(289, J$.F(281, J$.R(265, 'test_match', test_match, 1), 0)(J$.R(273, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
