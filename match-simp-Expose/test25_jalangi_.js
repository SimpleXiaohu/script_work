J$.iids = {"8":[6,9,6,25],"9":[2,23,2,41],"10":[6,9,6,25],"16":[4,7,4,13],"17":[2,23,2,41],"25":[2,23,2,41],"33":[3,16,3,21],"41":[3,28,3,41],"49":[3,16,3,42],"51":[3,16,3,27],"57":[3,16,3,42],"65":[3,16,3,42],"73":[4,7,4,13],"81":[5,5,5,12],"89":[5,17,5,18],"97":[5,5,5,19],"99":[5,5,5,16],"105":[5,5,5,20],"113":[6,9,6,15],"121":[6,16,6,17],"129":[6,9,6,18],"137":[6,23,6,25],"145":[6,27,6,34],"153":[6,39,6,40],"161":[6,27,6,41],"163":[6,27,6,38],"169":[6,27,6,42],"177":[1,1,9,2],"185":[1,1,9,2],"193":[1,1,9,2],"201":[1,1,9,2],"209":[1,1,9,2],"217":[10,10,10,17],"225":[10,18,10,22],"233":[10,10,10,23],"241":[10,10,10,23],"249":[10,10,10,23],"257":[12,11,12,13],"265":[12,21,12,26],"273":[12,28,12,30],"281":[12,11,12,31],"283":[12,11,12,20],"289":[12,11,12,31],"297":[12,11,12,31],"305":[13,1,13,11],"313":[13,12,13,15],"321":[13,1,13,16],"329":[13,1,13,17],"337":[1,1,13,17],"345":[1,1,9,2],"353":[1,1,13,17],"361":[1,1,13,17],"369":[1,1,13,17],"377":[6,5,6,42],"385":[4,3,7,4],"393":[1,1,9,2],"401":[1,1,9,2],"409":[1,1,13,17],"417":[1,1,13,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test25.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test25_jalangi_.js","code":"function test_match(value){\nconst rnothtmlwhite = /[^\\x20\\t\\r\\n\\f]+/;\nvar result = value.match(rnothtmlwhite);\nif(result){\n  console.log(1);\n  if(result[0]!=='') console.log(2);\n}\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test25_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test25.js');
            function test_match(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            value = J$.N(193, 'value', value, 4);
                            J$.N(201, 'rnothtmlwhite', rnothtmlwhite, 0);
                            J$.N(209, 'result', result, 0);
                            var rnothtmlwhite = J$.X1(25, J$.W(17, 'rnothtmlwhite', J$.T(9, /[^\x20\t\r\n\f]+/, 14, false), rnothtmlwhite, 1));
                            var result = J$.X1(65, J$.W(57, 'result', J$.M(49, J$.R(33, 'value', value, 0), 'match', 0)(J$.R(41, 'rnothtmlwhite', rnothtmlwhite, 0)), result, 1));
                            if (J$.X1(385, J$.C(16, J$.R(73, 'result', result, 0)))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                if (J$.X1(377, J$.C(8, J$.B(10, '!==', J$.G(129, J$.R(113, 'result', result, 0), J$.T(121, 0, 22, false), 4), J$.T(137, '', 21, false), 0))))
                                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(353, 'test_match', J$.T(345, test_match, 12, false, 177), 0);
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'arg', arg, 0);
            var S$ = J$.X1(249, J$.W(241, 'S$', J$.F(233, J$.R(217, 'require', require, 2), 0)(J$.T(225, "S$", 21, false)), S$, 3));
            var arg = J$.X1(297, J$.W(289, 'arg', J$.M(281, J$.R(257, 'S$', S$, 1), 'symbol', 0)(J$.T(265, "arg", 21, false), J$.T(273, "", 21, false)), arg, 3));
            J$.X1(329, J$.F(321, J$.R(305, 'test_match', test_match, 1), 0)(J$.R(313, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
