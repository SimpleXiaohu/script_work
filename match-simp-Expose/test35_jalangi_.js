J$.iids = {"8":[3,7,3,47],"9":[2,16,2,26],"16":[3,7,3,47],"17":[2,33,2,49],"25":[2,16,2,50],"27":[2,16,2,32],"33":[2,51,2,52],"41":[2,16,2,53],"49":[2,16,2,53],"57":[2,16,2,53],"65":[3,7,3,13],"73":[3,17,3,31],"81":[3,37,3,43],"89":[3,44,3,45],"97":[3,37,3,46],"105":[3,17,3,47],"107":[3,17,3,36],"113":[3,49,3,56],"121":[3,61,3,62],"129":[3,49,3,63],"131":[3,49,3,60],"137":[3,49,3,64],"145":[1,1,4,2],"153":[1,1,4,2],"161":[1,1,4,2],"169":[1,1,4,2],"177":[5,10,5,17],"185":[5,18,5,22],"193":[5,10,5,23],"201":[5,10,5,23],"209":[5,10,5,23],"217":[7,11,7,13],"225":[7,21,7,26],"233":[7,28,7,30],"241":[7,11,7,31],"243":[7,11,7,20],"249":[7,11,7,31],"257":[7,11,7,31],"265":[8,1,8,11],"273":[8,12,8,15],"281":[8,1,8,16],"289":[8,1,8,17],"297":[1,1,8,17],"305":[1,1,4,2],"313":[1,1,8,17],"321":[1,1,8,17],"329":[1,1,8,17],"337":[3,3,3,64],"345":[1,1,4,2],"353":[1,1,4,2],"361":[1,1,8,17],"369":[1,1,8,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test35.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test35_jalangi_.js","code":"function test_match(inputState){\nvar result = inputState.match(/\\s([a-z|A-Z]+)/)[1];\nif(result && /[a-z]+[A-Z]+/.test(result[0])) console.log(1);\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test35_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test35.js');
            function test_match(inputState) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            inputState = J$.N(161, 'inputState', inputState, 4);
                            J$.N(169, 'result', result, 0);
                            var result = J$.X1(57, J$.W(49, 'result', J$.G(41, J$.M(25, J$.R(9, 'inputState', inputState, 0), 'match', 0)(J$.T(17, /\s([a-z|A-Z]+)/, 14, false)), J$.T(33, 1, 22, false), 4), result, 1));
                            if (J$.X1(337, J$.C(16, J$.C(8, J$.R(65, 'result', result, 0)) ? J$.M(105, J$.T(73, /[a-z]+[A-Z]+/, 14, false), 'test', 0)(J$.G(97, J$.R(81, 'result', result, 0), J$.T(89, 0, 22, false), 4)) : J$._())))
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 1, 22, false)));
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
            test_match = J$.N(313, 'test_match', J$.T(305, test_match, 12, false, 145), 0);
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
