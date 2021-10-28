J$.iids = {"8":[2,7,2,66],"9":[2,7,2,13],"10":[2,7,2,21],"16":[2,7,2,66],"17":[2,17,2,21],"18":[2,25,2,66],"25":[2,25,2,31],"33":[2,38,2,57],"41":[2,25,2,58],"43":[2,25,2,37],"49":[2,62,2,66],"57":[3,3,3,10],"65":[3,15,3,16],"73":[3,3,3,17],"75":[3,3,3,14],"81":[3,3,3,18],"89":[1,1,5,2],"97":[1,1,5,2],"105":[1,1,5,2],"113":[6,10,6,17],"121":[6,18,6,22],"129":[6,10,6,23],"137":[6,10,6,23],"145":[6,10,6,23],"153":[8,11,8,13],"161":[8,21,8,26],"169":[8,28,8,30],"177":[8,11,8,31],"179":[8,11,8,20],"185":[8,11,8,31],"193":[8,11,8,31],"201":[9,1,9,11],"209":[9,12,9,15],"217":[9,1,9,16],"225":[9,1,9,17],"233":[1,1,9,17],"241":[1,1,5,2],"249":[1,1,9,17],"257":[1,1,9,17],"265":[1,1,9,17],"273":[2,3,3,18],"281":[1,1,5,2],"289":[1,1,5,2],"297":[1,1,9,17],"305":[1,1,9,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test30.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test30_jalangi_.js","code":"function test_match(result){\n    if (result != null && result.match(/exception|corrupt/) != null)\n      console.log(1);\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test30_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test30.js');
            function test_match(result) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            result = J$.N(105, 'result', result, 4);
                            if (J$.X1(273, J$.C(16, J$.C(8, J$.B(10, '!=', J$.R(9, 'result', result, 0), J$.T(17, null, 25, false), 0)) ? J$.B(18, '!=', J$.M(41, J$.R(25, 'result', result, 0), 'match', 0)(J$.T(33, /exception|corrupt/, 14, false)), J$.T(49, null, 25, false), 0) : J$._())))
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(249, 'test_match', J$.T(241, test_match, 12, false, 89), 0);
            J$.N(257, 'S$', S$, 0);
            J$.N(265, 'arg', arg, 0);
            var S$ = J$.X1(145, J$.W(137, 'S$', J$.F(129, J$.R(113, 'require', require, 2), 0)(J$.T(121, "S$", 21, false)), S$, 3));
            var arg = J$.X1(193, J$.W(185, 'arg', J$.M(177, J$.R(153, 'S$', S$, 1), 'symbol', 0)(J$.T(161, "arg", 21, false), J$.T(169, "", 21, false)), arg, 3));
            J$.X1(225, J$.F(217, J$.R(201, 'test_match', test_match, 1), 0)(J$.R(209, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
