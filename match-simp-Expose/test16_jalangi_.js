J$.iids = {"8":[8,21,8,26],"9":[2,30,2,42],"10":[5,13,5,25],"16":[5,13,5,25],"17":[2,30,2,42],"25":[2,30,2,42],"33":[4,22,4,24],"41":[4,22,4,24],"49":[4,22,4,24],"57":[5,13,5,18],"65":[5,23,5,25],"73":[6,17,6,24],"81":[6,29,6,30],"89":[6,17,6,31],"91":[6,17,6,28],"97":[6,17,6,32],"105":[7,29,7,34],"113":[7,41,7,55],"121":[7,29,7,56],"123":[7,29,7,40],"129":[7,29,7,56],"137":[7,29,7,56],"145":[8,21,8,26],"153":[9,25,9,32],"161":[9,37,9,38],"169":[9,25,9,39],"171":[9,25,9,36],"177":[9,25,9,40],"185":[10,34,10,39],"193":[10,40,10,41],"201":[10,34,10,42],"209":[10,34,10,42],"217":[10,25,10,43],"225":[1,1,13,2],"233":[1,1,13,2],"241":[1,1,13,2],"249":[1,1,13,2],"257":[1,1,13,2],"265":[1,1,13,2],"273":[14,10,14,17],"281":[14,18,14,22],"289":[14,10,14,23],"297":[14,10,14,23],"305":[14,10,14,23],"313":[16,11,16,13],"321":[16,21,16,26],"329":[16,28,16,30],"337":[16,11,16,31],"339":[16,11,16,20],"345":[16,11,16,31],"353":[16,11,16,31],"361":[17,1,17,11],"369":[17,12,17,15],"377":[17,1,17,16],"385":[17,1,17,17],"393":[1,1,17,17],"401":[1,1,13,2],"409":[1,1,17,17],"417":[1,1,17,17],"425":[1,1,17,17],"433":[8,17,11,18],"441":[5,9,12,10],"449":[1,1,13,2],"457":[1,1,13,2],"465":[1,1,17,17],"473":[1,1,17,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test16.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test16_jalangi_.js","code":"function test_match(value){\nconst BINDING_REGEXP = /(\\d+):?\\d*/;\n\nvar result = '';\nif (value !== '') {\n        console.log(1);\n        var match = value.match(BINDING_REGEXP);\n        if (match) {\n            console.log(2);\n            result = match[1];\n        }\n}\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(393, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test16_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test16.js');
            function test_match(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            value = J$.N(241, 'value', value, 4);
                            J$.N(249, 'BINDING_REGEXP', BINDING_REGEXP, 0);
                            J$.N(257, 'result', result, 0);
                            J$.N(265, 'match', match, 0);
                            var BINDING_REGEXP = J$.X1(25, J$.W(17, 'BINDING_REGEXP', J$.T(9, /(\d+):?\d*/, 14, false), BINDING_REGEXP, 1));
                            var result = J$.X1(49, J$.W(41, 'result', J$.T(33, '', 21, false), result, 1));
                            if (J$.X1(441, J$.C(16, J$.B(10, '!==', J$.R(57, 'value', value, 0), J$.T(65, '', 21, false), 0)))) {
                                J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, 1, 22, false)));
                                var match = J$.X1(137, J$.W(129, 'match', J$.M(121, J$.R(105, 'value', value, 0), 'match', 0)(J$.R(113, 'BINDING_REGEXP', BINDING_REGEXP, 0)), match, 1));
                                if (J$.X1(433, J$.C(8, J$.R(145, 'match', match, 0)))) {
                                    J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, 2, 22, false)));
                                    J$.X1(217, result = J$.W(209, 'result', J$.G(201, J$.R(185, 'match', match, 0), J$.T(193, 1, 22, false), 4), result, 0));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(409, 'test_match', J$.T(401, test_match, 12, false, 225), 0);
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'arg', arg, 0);
            var S$ = J$.X1(305, J$.W(297, 'S$', J$.F(289, J$.R(273, 'require', require, 2), 0)(J$.T(281, "S$", 21, false)), S$, 3));
            var arg = J$.X1(353, J$.W(345, 'arg', J$.M(337, J$.R(313, 'S$', S$, 1), 'symbol', 0)(J$.T(321, "arg", 21, false), J$.T(329, "", 21, false)), arg, 3));
            J$.X1(385, J$.F(377, J$.R(361, 'test_match', test_match, 1), 0)(J$.R(369, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
