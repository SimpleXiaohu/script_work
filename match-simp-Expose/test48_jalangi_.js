J$.iids = {"8":[5,9,5,14],"9":[2,33,2,54],"16":[9,9,9,30],"17":[2,33,2,54],"25":[2,33,2,54],"33":[3,17,3,22],"41":[3,29,3,50],"49":[3,17,3,51],"51":[3,17,3,28],"57":[3,17,3,51],"65":[3,17,3,51],"73":[4,18,4,20],"81":[4,18,4,20],"89":[4,18,4,20],"97":[5,9,5,14],"105":[6,18,6,23],"113":[6,24,6,25],"121":[6,18,6,26],"129":[6,18,6,26],"137":[6,9,6,27],"145":[7,9,7,16],"153":[7,21,7,22],"161":[7,9,7,23],"163":[7,9,7,20],"169":[7,9,7,24],"177":[9,9,9,17],"185":[9,23,9,29],"193":[9,9,9,30],"195":[9,9,9,22],"201":[9,32,9,39],"209":[9,44,9,45],"217":[9,32,9,46],"219":[9,32,9,43],"225":[9,32,9,47],"233":[1,1,10,2],"241":[1,1,10,2],"249":[1,1,10,2],"257":[1,1,10,2],"265":[1,1,10,2],"273":[1,1,10,2],"281":[11,10,11,17],"289":[11,18,11,22],"297":[11,10,11,23],"305":[11,10,11,23],"313":[11,10,11,23],"321":[13,11,13,13],"329":[13,21,13,26],"337":[13,28,13,30],"345":[13,11,13,31],"347":[13,11,13,20],"353":[13,11,13,31],"361":[13,11,13,31],"369":[14,1,14,11],"377":[14,12,14,15],"385":[14,1,14,16],"393":[14,1,14,17],"401":[1,1,14,17],"409":[1,1,10,2],"417":[1,1,14,17],"425":[1,1,14,17],"433":[1,1,14,17],"441":[5,5,8,6],"449":[9,5,9,47],"457":[1,1,10,2],"465":[1,1,10,2],"473":[1,1,14,17],"481":[1,1,14,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test48.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test48_jalangi_.js","code":"function test_match(stack){\nconst CURRENT_METHOD_REGEXP = /at ([a-zA-Z0-9_.]*)/;\nconst match = stack.match(CURRENT_METHOD_REGEXP);\nvar result = '';\nif(match) {\n    result = match[1];\n    console.log(1);\n}\nif(/[0-9]+/.test(result)) console.log(2);\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(401, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test48_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test48.js');
            function test_match(stack) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            stack = J$.N(249, 'stack', stack, 4);
                            J$.N(257, 'CURRENT_METHOD_REGEXP', CURRENT_METHOD_REGEXP, 0);
                            J$.N(265, 'match', match, 0);
                            J$.N(273, 'result', result, 0);
                            var CURRENT_METHOD_REGEXP = J$.X1(25, J$.W(17, 'CURRENT_METHOD_REGEXP', J$.T(9, /at ([a-zA-Z0-9_.]*)/, 14, false), CURRENT_METHOD_REGEXP, 1));
                            var match = J$.X1(65, J$.W(57, 'match', J$.M(49, J$.R(33, 'stack', stack, 0), 'match', 0)(J$.R(41, 'CURRENT_METHOD_REGEXP', CURRENT_METHOD_REGEXP, 0)), match, 1));
                            var result = J$.X1(89, J$.W(81, 'result', J$.T(73, '', 21, false), result, 1));
                            if (J$.X1(441, J$.C(8, J$.R(97, 'match', match, 0)))) {
                                J$.X1(137, result = J$.W(129, 'result', J$.G(121, J$.R(105, 'match', match, 0), J$.T(113, 1, 22, false), 4), result, 0));
                                J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                            }
                            if (J$.X1(449, J$.C(16, J$.M(193, J$.T(177, /[0-9]+/, 14, false), 'test', 0)(J$.R(185, 'result', result, 0)))))
                                J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(417, 'test_match', J$.T(409, test_match, 12, false, 233), 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'arg', arg, 0);
            var S$ = J$.X1(313, J$.W(305, 'S$', J$.F(297, J$.R(281, 'require', require, 2), 0)(J$.T(289, "S$", 21, false)), S$, 3));
            var arg = J$.X1(361, J$.W(353, 'arg', J$.M(345, J$.R(321, 'S$', S$, 1), 'symbol', 0)(J$.T(329, "arg", 21, false), J$.T(337, "", 21, false)), arg, 3));
            J$.X1(393, J$.F(385, J$.R(369, 'test_match', test_match, 1), 0)(J$.R(377, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
