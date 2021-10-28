J$.iids = {"8":[7,9,7,14],"9":[2,7,2,9],"10":[11,9,11,22],"16":[11,9,11,22],"17":[4,5,4,12],"24":[2,7,2,9],"25":[4,17,4,18],"33":[4,5,4,19],"35":[4,5,4,16],"41":[4,5,4,20],"49":[5,17,5,19],"57":[5,26,5,46],"65":[5,17,5,47],"67":[5,17,5,25],"73":[5,17,5,47],"81":[5,17,5,47],"89":[6,18,6,20],"97":[6,18,6,20],"105":[6,18,6,20],"113":[7,9,7,14],"121":[8,16,8,21],"129":[8,22,8,23],"137":[8,16,8,24],"145":[8,16,8,24],"153":[8,7,8,25],"161":[9,7,9,14],"169":[9,19,9,20],"177":[9,7,9,21],"179":[9,7,9,18],"185":[9,7,9,22],"193":[11,9,11,15],"201":[11,20,11,22],"209":[11,24,11,31],"217":[11,36,11,37],"225":[11,24,11,38],"227":[11,24,11,35],"233":[11,24,11,39],"241":[1,1,13,2],"249":[1,1,13,2],"257":[1,1,13,2],"265":[1,1,13,2],"273":[1,1,13,2],"281":[14,10,14,17],"289":[14,18,14,22],"297":[14,10,14,23],"305":[14,10,14,23],"313":[14,10,14,23],"321":[16,11,16,13],"329":[16,21,16,26],"337":[16,28,16,30],"345":[16,11,16,31],"347":[16,11,16,20],"353":[16,11,16,31],"361":[16,11,16,31],"369":[17,1,17,11],"377":[17,12,17,15],"385":[17,1,17,16],"393":[17,1,17,17],"401":[1,1,17,17],"409":[1,1,13,2],"417":[1,1,17,17],"425":[1,1,17,17],"433":[1,1,17,17],"441":[7,5,10,6],"449":[11,5,11,39],"457":[2,3,12,4],"465":[1,1,13,2],"473":[1,1,13,2],"481":[1,1,17,17],"489":[1,1,17,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test41.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test41_jalangi_.js","code":"function test_match(fn){\nif(fn)\n{\n  console.log(1);\n  var match = fn.match(/^\\s*function (\\w+)/);\n  var result = '';\n  if(match){\n    result = match[1];\n    console.log(2);\n  } \n  if(result!=='') console.log(3);\n}\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(401, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test41_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test41.js');
            function test_match(fn) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            fn = J$.N(257, 'fn', fn, 4);
                            J$.N(265, 'match', match, 0);
                            J$.N(273, 'result', result, 0);
                            if (J$.X1(457, J$.C(24, J$.R(9, 'fn', fn, 0)))) {
                                J$.X1(41, J$.M(33, J$.R(17, 'console', console, 2), 'log', 0)(J$.T(25, 1, 22, false)));
                                var match = J$.X1(81, J$.W(73, 'match', J$.M(65, J$.R(49, 'fn', fn, 0), 'match', 0)(J$.T(57, /^\s*function (\w+)/, 14, false)), match, 1));
                                var result = J$.X1(105, J$.W(97, 'result', J$.T(89, '', 21, false), result, 1));
                                if (J$.X1(441, J$.C(8, J$.R(113, 'match', match, 0)))) {
                                    J$.X1(153, result = J$.W(145, 'result', J$.G(137, J$.R(121, 'match', match, 0), J$.T(129, 1, 22, false), 4), result, 0));
                                    J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
                                }
                                if (J$.X1(449, J$.C(16, J$.B(10, '!==', J$.R(193, 'result', result, 0), J$.T(201, '', 21, false), 0))))
                                    J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 3, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(417, 'test_match', J$.T(409, test_match, 12, false, 241), 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'arg', arg, 0);
            var S$ = J$.X1(313, J$.W(305, 'S$', J$.F(297, J$.R(281, 'require', require, 2), 0)(J$.T(289, "S$", 21, false)), S$, 3));
            var arg = J$.X1(361, J$.W(353, 'arg', J$.M(345, J$.R(321, 'S$', S$, 1), 'symbol', 0)(J$.T(329, "arg", 21, false), J$.T(337, "", 21, false)), arg, 3));
            J$.X1(393, J$.F(385, J$.R(369, 'test_match', test_match, 1), 0)(J$.R(377, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
