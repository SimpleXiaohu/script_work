J$.iids = {"8":[5,7,5,12],"9":[2,27,2,83],"10":[13,7,13,18],"16":[13,7,13,18],"17":[2,27,2,83],"25":[2,27,2,83],"33":[3,14,3,16],"41":[3,14,3,16],"49":[3,14,3,16],"57":[4,15,4,28],"65":[4,35,4,52],"73":[4,15,4,53],"75":[4,15,4,34],"81":[4,15,4,53],"89":[4,15,4,53],"97":[5,7,5,12],"105":[6,5,6,12],"113":[6,17,6,18],"121":[6,5,6,19],"123":[6,5,6,16],"129":[6,5,6,20],"137":[7,12,7,17],"145":[7,18,7,19],"153":[7,12,7,20],"161":[7,12,7,20],"169":[7,5,7,21],"177":[10,5,10,12],"185":[10,17,10,18],"193":[10,5,10,19],"195":[10,5,10,16],"201":[10,5,10,20],"209":[11,12,11,14],"217":[11,12,11,14],"225":[11,5,11,15],"233":[13,7,13,11],"241":[13,16,13,18],"249":[13,20,13,27],"257":[13,32,13,33],"265":[13,20,13,34],"267":[13,20,13,31],"273":[13,20,13,35],"281":[1,1,15,2],"289":[1,1,15,2],"297":[1,1,15,2],"305":[1,1,15,2],"313":[1,1,15,2],"321":[1,1,15,2],"329":[16,10,16,17],"337":[16,18,16,22],"345":[16,10,16,23],"353":[16,10,16,23],"361":[16,10,16,23],"369":[18,11,18,13],"377":[18,21,18,26],"385":[18,28,18,30],"393":[18,11,18,31],"395":[18,11,18,20],"401":[18,11,18,31],"409":[18,11,18,31],"417":[19,1,19,11],"425":[19,12,19,15],"433":[19,1,19,16],"441":[19,1,19,17],"449":[1,1,19,17],"457":[1,1,15,2],"465":[1,1,19,17],"473":[1,1,19,17],"481":[1,1,19,17],"489":[5,3,12,4],"497":[13,3,13,35],"505":[1,1,15,2],"513":[1,1,15,2],"521":[1,1,19,17],"529":[1,1,19,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test5.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test5_jalangi_.js","code":"function test_match(constructorFn){\nvar functionNameMatch = /\\s*function(?:\\s|\\s*\\/\\*[^(?:*\\/)]+\\*\\/\\s*)*([^\\(\\/]+)/;\n  var name = '';\n  var match = constructorFn.match(functionNameMatch);\n    if (match) {\n      console.log(1);\n      name = match[1];\n    }\n   else {\n    console.log(2);\n    name = '';\n  }\n  if(name !== '') console.log(3);\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(449, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test5_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test5.js');
            function test_match(constructorFn) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(281, arguments.callee, this, arguments);
                            arguments = J$.N(289, 'arguments', arguments, 4);
                            constructorFn = J$.N(297, 'constructorFn', constructorFn, 4);
                            J$.N(305, 'functionNameMatch', functionNameMatch, 0);
                            J$.N(313, 'name', name, 0);
                            J$.N(321, 'match', match, 0);
                            var functionNameMatch = J$.X1(25, J$.W(17, 'functionNameMatch', J$.T(9, /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/, 14, false), functionNameMatch, 1));
                            var name = J$.X1(49, J$.W(41, 'name', J$.T(33, '', 21, false), name, 1));
                            var match = J$.X1(89, J$.W(81, 'match', J$.M(73, J$.R(57, 'constructorFn', constructorFn, 0), 'match', 0)(J$.R(65, 'functionNameMatch', functionNameMatch, 0)), match, 1));
                            if (J$.X1(489, J$.C(8, J$.R(97, 'match', match, 0)))) {
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
                                J$.X1(169, name = J$.W(161, 'name', J$.G(153, J$.R(137, 'match', match, 0), J$.T(145, 1, 22, false), 4), name, 0));
                            } else {
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
                                J$.X1(225, name = J$.W(217, 'name', J$.T(209, '', 21, false), name, 0));
                            }
                            if (J$.X1(497, J$.C(16, J$.B(10, '!==', J$.R(233, 'name', name, 0), J$.T(241, '', 21, false), 0))))
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(465, 'test_match', J$.T(457, test_match, 12, false, 281), 0);
            J$.N(473, 'S$', S$, 0);
            J$.N(481, 'arg', arg, 0);
            var S$ = J$.X1(361, J$.W(353, 'S$', J$.F(345, J$.R(329, 'require', require, 2), 0)(J$.T(337, "S$", 21, false)), S$, 3));
            var arg = J$.X1(409, J$.W(401, 'arg', J$.M(393, J$.R(369, 'S$', S$, 1), 'symbol', 0)(J$.T(377, "arg", 21, false), J$.T(385, "", 21, false)), arg, 3));
            J$.X1(441, J$.F(433, J$.R(417, 'test_match', test_match, 1), 0)(J$.R(425, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
