J$.iids = {"8":[4,10,4,21],"9":[2,23,2,39],"10":[8,10,8,28],"16":[8,10,8,28],"17":[2,23,2,39],"25":[2,23,2,39],"33":[3,24,3,35],"41":[3,42,3,52],"49":[3,24,3,53],"51":[3,24,3,41],"57":[3,24,3,53],"65":[3,24,3,53],"73":[4,10,4,21],"81":[5,11,5,18],"89":[5,23,5,24],"97":[5,11,5,25],"99":[5,11,5,22],"105":[5,11,5,26],"113":[6,25,6,36],"121":[6,37,6,38],"129":[6,25,6,39],"137":[6,25,6,39],"145":[6,11,6,40],"153":[8,10,8,21],"161":[8,26,8,28],"169":[8,30,8,37],"177":[8,42,8,43],"185":[8,30,8,44],"187":[8,30,8,41],"193":[8,30,8,45],"201":[1,1,10,2],"209":[1,1,10,2],"217":[1,1,10,2],"225":[1,1,10,2],"233":[1,1,10,2],"241":[11,10,11,17],"249":[11,18,11,22],"257":[11,10,11,23],"265":[11,10,11,23],"273":[11,10,11,23],"281":[13,11,13,13],"289":[13,21,13,26],"297":[13,28,13,30],"305":[13,11,13,31],"307":[13,11,13,20],"313":[13,11,13,31],"321":[13,11,13,31],"329":[14,1,14,11],"337":[14,12,14,15],"345":[14,1,14,16],"353":[14,1,14,17],"361":[1,1,14,17],"369":[1,1,10,2],"377":[1,1,14,17],"385":[1,1,14,17],"393":[1,1,14,17],"401":[4,6,7,7],"409":[8,6,8,45],"417":[1,1,10,2],"425":[1,1,10,2],"433":[1,1,14,17],"441":[1,1,14,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test10.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test10_jalangi_.js","code":"function test_match(bindingName){\nconst ATTR_REGEX = /attr\\.([^\\]]+)/;\nconst attrMatches = bindingName.match(ATTR_REGEX);\nif (attrMatches) {\n     console.log(1);\n     bindingName = attrMatches[1];\n}\nif(bindingName!=='') console.log(2);\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(361, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test10_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test10.js');
            function test_match(bindingName) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            bindingName = J$.N(217, 'bindingName', bindingName, 4);
                            J$.N(225, 'ATTR_REGEX', ATTR_REGEX, 0);
                            J$.N(233, 'attrMatches', attrMatches, 0);
                            var ATTR_REGEX = J$.X1(25, J$.W(17, 'ATTR_REGEX', J$.T(9, /attr\.([^\]]+)/, 14, false), ATTR_REGEX, 1));
                            var attrMatches = J$.X1(65, J$.W(57, 'attrMatches', J$.M(49, J$.R(33, 'bindingName', bindingName, 0), 'match', 0)(J$.R(41, 'ATTR_REGEX', ATTR_REGEX, 0)), attrMatches, 1));
                            if (J$.X1(401, J$.C(8, J$.R(73, 'attrMatches', attrMatches, 0)))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                J$.X1(145, bindingName = J$.W(137, 'bindingName', J$.G(129, J$.R(113, 'attrMatches', attrMatches, 0), J$.T(121, 1, 22, false), 4), bindingName, 0));
                            }
                            if (J$.X1(409, J$.C(16, J$.B(10, '!==', J$.R(153, 'bindingName', bindingName, 0), J$.T(161, '', 21, false), 0))))
                                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(417, J$e);
                        } finally {
                            if (J$.Fr(425))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(377, 'test_match', J$.T(369, test_match, 12, false, 201), 0);
            J$.N(385, 'S$', S$, 0);
            J$.N(393, 'arg', arg, 0);
            var S$ = J$.X1(273, J$.W(265, 'S$', J$.F(257, J$.R(241, 'require', require, 2), 0)(J$.T(249, "S$", 21, false)), S$, 3));
            var arg = J$.X1(321, J$.W(313, 'arg', J$.M(305, J$.R(281, 'S$', S$, 1), 'symbol', 0)(J$.T(289, "arg", 21, false), J$.T(297, "", 21, false)), arg, 3));
            J$.X1(353, J$.F(345, J$.R(329, 'test_match', test_match, 1), 0)(J$.R(337, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
