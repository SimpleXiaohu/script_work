J$.iids = {"8":[3,7,3,30],"9":[2,16,2,18],"10":[11,7,11,19],"16":[11,7,11,19],"17":[2,16,2,18],"25":[2,16,2,18],"33":[3,7,3,12],"41":[3,19,3,29],"49":[3,7,3,30],"51":[3,7,3,18],"57":[4,5,4,12],"65":[4,17,4,18],"73":[4,5,4,19],"75":[4,5,4,16],"81":[4,5,4,20],"89":[5,14,5,19],"97":[5,28,5,38],"105":[5,40,5,42],"113":[5,14,5,43],"115":[5,14,5,27],"121":[5,14,5,43],"129":[5,5,5,44],"137":[8,5,8,12],"145":[8,17,8,18],"153":[8,5,8,19],"155":[8,5,8,16],"161":[8,5,8,20],"169":[9,14,9,19],"177":[9,28,9,33],"185":[9,35,9,37],"193":[9,14,9,38],"195":[9,14,9,27],"201":[9,14,9,38],"209":[9,5,9,39],"217":[11,7,11,13],"225":[11,17,11,19],"233":[11,21,11,28],"241":[11,33,11,34],"249":[11,21,11,35],"251":[11,21,11,32],"257":[11,21,11,36],"265":[1,1,12,2],"273":[1,1,12,2],"281":[1,1,12,2],"289":[1,1,12,2],"297":[13,10,13,17],"305":[13,18,13,22],"313":[13,10,13,23],"321":[13,10,13,23],"329":[13,10,13,23],"337":[15,11,15,13],"345":[15,21,15,26],"353":[15,28,15,30],"361":[15,11,15,31],"363":[15,11,15,20],"369":[15,11,15,31],"377":[15,11,15,31],"385":[16,1,16,11],"393":[16,12,16,15],"401":[16,1,16,16],"409":[16,1,16,17],"417":[1,1,16,17],"425":[1,1,12,2],"433":[1,1,16,17],"441":[1,1,16,17],"449":[1,1,16,17],"457":[3,3,10,4],"465":[11,3,11,36],"473":[1,1,12,2],"481":[1,1,12,2],"489":[1,1,16,17],"497":[1,1,16,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test28.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test28_jalangi_.js","code":"function test_match(input){\n var result = '';\n   if (input.match(/\\[[\\s\\S]/)) {\n        console.log(1);\n        result = input.replace(/^\\[|\\]$/g, '');\n    }\n    else {\n      console.log(2);\n      result = input.replace(/\\\\/g, '');\n    }\n   if(result !='') console.log(3);\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(417, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test28_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test28.js');
            function test_match(input) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(265, arguments.callee, this, arguments);
                            arguments = J$.N(273, 'arguments', arguments, 4);
                            input = J$.N(281, 'input', input, 4);
                            J$.N(289, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(457, J$.C(8, J$.M(49, J$.R(33, 'input', input, 0), 'match', 0)(J$.T(41, /\[[\s\S]/, 14, false))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(129, result = J$.W(121, 'result', J$.M(113, J$.R(89, 'input', input, 0), 'replace', 0)(J$.T(97, /^\[|\]$/g, 14, false), J$.T(105, '', 21, false)), result, 0));
                            } else {
                                J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 2, 22, false)));
                                J$.X1(209, result = J$.W(201, 'result', J$.M(193, J$.R(169, 'input', input, 0), 'replace', 0)(J$.T(177, /\\/g, 14, false), J$.T(185, '', 21, false)), result, 0));
                            }
                            if (J$.X1(465, J$.C(16, J$.B(10, '!=', J$.R(217, 'result', result, 0), J$.T(225, '', 21, false), 0))))
                                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(433, 'test_match', J$.T(425, test_match, 12, false, 265), 0);
            J$.N(441, 'S$', S$, 0);
            J$.N(449, 'arg', arg, 0);
            var S$ = J$.X1(329, J$.W(321, 'S$', J$.F(313, J$.R(297, 'require', require, 2), 0)(J$.T(305, "S$", 21, false)), S$, 3));
            var arg = J$.X1(377, J$.W(369, 'arg', J$.M(361, J$.R(337, 'S$', S$, 1), 'symbol', 0)(J$.T(345, "arg", 21, false), J$.T(353, "", 21, false)), arg, 3));
            J$.X1(409, J$.F(401, J$.R(385, 'test_match', test_match, 1), 0)(J$.R(393, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
