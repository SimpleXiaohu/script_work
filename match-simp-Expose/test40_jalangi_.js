J$.iids = {"8":[8,11,8,37],"9":[2,22,2,87],"10":[8,21,8,37],"16":[8,11,8,37],"17":[2,22,2,87],"24":[5,8,5,11],"25":[2,22,2,87],"33":[4,17,4,19],"41":[4,17,4,19],"49":[4,17,4,19],"57":[5,8,5,11],"65":[6,7,6,14],"73":[6,19,6,20],"81":[6,7,6,21],"83":[6,7,6,18],"89":[6,7,6,22],"97":[7,16,7,19],"105":[7,26,7,37],"113":[7,16,7,38],"115":[7,16,7,25],"121":[7,16,7,38],"129":[7,7,7,39],"137":[8,11,8,17],"145":[8,21,8,27],"153":[8,28,8,29],"161":[8,21,8,30],"169":[8,35,8,37],"177":[8,39,8,46],"185":[8,51,8,52],"193":[8,39,8,53],"195":[8,39,8,50],"201":[8,39,8,54],"209":[1,1,11,2],"217":[1,1,11,2],"225":[1,1,11,2],"233":[1,1,11,2],"241":[1,1,11,2],"249":[12,10,12,17],"257":[12,18,12,22],"265":[12,10,12,23],"273":[12,10,12,23],"281":[12,10,12,23],"289":[14,11,14,13],"297":[14,21,14,26],"305":[14,28,14,30],"313":[14,11,14,31],"315":[14,11,14,20],"321":[14,11,14,31],"329":[14,11,14,31],"337":[15,1,15,11],"345":[15,12,15,15],"353":[15,1,15,16],"361":[15,1,15,17],"369":[1,1,15,17],"377":[1,1,11,2],"385":[1,1,15,17],"393":[1,1,15,17],"401":[1,1,15,17],"409":[8,7,8,54],"417":[5,4,9,5],"425":[1,1,11,2],"433":[1,1,11,2],"441":[1,1,15,17],"449":[1,1,15,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test40.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test40_jalangi_.js","code":"function test_match(obj){\nvar reStrSymbol = /[^\\ud800-\\udfff]|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff]/;\n\nvar result = '';\nif (obj) {\n   console.log(1);\n   result = obj.match(reStrSymbol);\n   if(result && result[0] !== \"\") console.log(2);\n}\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(369, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test40_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test40.js');
            function test_match(obj) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            obj = J$.N(225, 'obj', obj, 4);
                            J$.N(233, 'reStrSymbol', reStrSymbol, 0);
                            J$.N(241, 'result', result, 0);
                            var reStrSymbol = J$.X1(25, J$.W(17, 'reStrSymbol', J$.T(9, /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/, 14, false), reStrSymbol, 1));
                            var result = J$.X1(49, J$.W(41, 'result', J$.T(33, '', 21, false), result, 1));
                            if (J$.X1(417, J$.C(24, J$.R(57, 'obj', obj, 0)))) {
                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, 1, 22, false)));
                                J$.X1(129, result = J$.W(121, 'result', J$.M(113, J$.R(97, 'obj', obj, 0), 'match', 0)(J$.R(105, 'reStrSymbol', reStrSymbol, 0)), result, 0));
                                if (J$.X1(409, J$.C(16, J$.C(8, J$.R(137, 'result', result, 0)) ? J$.B(10, '!==', J$.G(161, J$.R(145, 'result', result, 0), J$.T(153, 0, 22, false), 4), J$.T(169, "", 21, false), 0) : J$._())))
                                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(385, 'test_match', J$.T(377, test_match, 12, false, 209), 0);
            J$.N(393, 'S$', S$, 0);
            J$.N(401, 'arg', arg, 0);
            var S$ = J$.X1(281, J$.W(273, 'S$', J$.F(265, J$.R(249, 'require', require, 2), 0)(J$.T(257, "S$", 21, false)), S$, 3));
            var arg = J$.X1(329, J$.W(321, 'arg', J$.M(313, J$.R(289, 'S$', S$, 1), 'symbol', 0)(J$.T(297, "arg", 21, false), J$.T(305, "", 21, false)), arg, 3));
            J$.X1(361, J$.F(353, J$.R(337, 'test_match', test_match, 1), 0)(J$.R(345, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
