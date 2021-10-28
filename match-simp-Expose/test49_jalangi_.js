J$.iids = {"8":[6,11,6,29],"9":[2,17,2,19],"16":[3,8,3,29],"17":[2,17,2,19],"25":[2,17,2,19],"33":[3,8,3,11],"41":[3,18,3,28],"49":[3,8,3,29],"51":[3,8,3,17],"57":[4,7,4,14],"65":[4,19,4,20],"73":[4,7,4,21],"75":[4,7,4,18],"81":[4,7,4,22],"89":[5,16,5,19],"97":[5,26,5,38],"105":[5,16,5,39],"107":[5,16,5,25],"113":[5,40,5,41],"121":[5,16,5,42],"129":[5,16,5,42],"137":[5,7,5,43],"145":[6,11,6,16],"153":[6,22,6,28],"161":[6,11,6,29],"163":[6,11,6,21],"169":[6,31,6,38],"177":[6,43,6,44],"185":[6,31,6,45],"187":[6,31,6,42],"193":[6,31,6,46],"201":[1,1,9,2],"209":[1,1,9,2],"217":[1,1,9,2],"225":[1,1,9,2],"233":[10,10,10,17],"241":[10,18,10,22],"249":[10,10,10,23],"257":[10,10,10,23],"265":[10,10,10,23],"273":[12,11,12,13],"281":[12,21,12,26],"289":[12,28,12,30],"297":[12,11,12,31],"299":[12,11,12,20],"305":[12,11,12,31],"313":[12,11,12,31],"321":[13,1,13,11],"329":[13,12,13,15],"337":[13,1,13,16],"345":[13,1,13,17],"353":[1,1,13,17],"361":[1,1,9,2],"369":[1,1,13,17],"377":[1,1,13,17],"385":[1,1,13,17],"393":[6,7,6,46],"401":[3,4,7,5],"409":[1,1,9,2],"417":[1,1,9,2],"425":[1,1,13,17],"433":[1,1,13,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test49.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test49_jalangi_.js","code":"function test_match(val){\nvar result = '';\nif (val.match(/^--no-.+/)) {\n   console.log(1);\n   result = val.match(/^--no-(.+)/)[0];\n   if(/---/.test(result)) console.log(2);\n}\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(353, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test49_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test49.js');
            function test_match(val) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            val = J$.N(217, 'val', val, 4);
                            J$.N(225, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(401, J$.C(16, J$.M(49, J$.R(33, 'val', val, 0), 'match', 0)(J$.T(41, /^--no-.+/, 14, false))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(137, result = J$.W(129, 'result', J$.G(121, J$.M(105, J$.R(89, 'val', val, 0), 'match', 0)(J$.T(97, /^--no-(.+)/, 14, false)), J$.T(113, 0, 22, false), 4), result, 0));
                                if (J$.X1(393, J$.C(8, J$.M(161, J$.T(145, /---/, 14, false), 'test', 0)(J$.R(153, 'result', result, 0)))))
                                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(369, 'test_match', J$.T(361, test_match, 12, false, 201), 0);
            J$.N(377, 'S$', S$, 0);
            J$.N(385, 'arg', arg, 0);
            var S$ = J$.X1(265, J$.W(257, 'S$', J$.F(249, J$.R(233, 'require', require, 2), 0)(J$.T(241, "S$", 21, false)), S$, 3));
            var arg = J$.X1(313, J$.W(305, 'arg', J$.M(297, J$.R(273, 'S$', S$, 1), 'symbol', 0)(J$.T(281, "arg", 21, false), J$.T(289, "", 21, false)), arg, 3));
            J$.X1(345, J$.F(337, J$.R(321, 'test_match', test_match, 1), 0)(J$.R(329, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
