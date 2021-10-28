J$.iids = {"8":[2,6,2,48],"9":[2,6,2,14],"10":[2,6,2,22],"16":[2,6,2,48],"17":[2,18,2,22],"25":[2,26,2,34],"33":[2,41,2,47],"41":[2,26,2,48],"43":[2,26,2,40],"49":[3,2,3,9],"57":[3,14,3,15],"65":[3,2,3,16],"67":[3,2,3,13],"73":[3,2,3,17],"81":[1,1,5,2],"89":[1,1,5,2],"97":[1,1,5,2],"105":[6,10,6,17],"113":[6,18,6,22],"121":[6,10,6,23],"129":[6,10,6,23],"137":[6,10,6,23],"145":[8,11,8,13],"153":[8,21,8,26],"161":[8,28,8,30],"169":[8,11,8,31],"171":[8,11,8,20],"177":[8,11,8,31],"185":[8,11,8,31],"193":[9,1,9,11],"201":[9,12,9,15],"209":[9,1,9,16],"217":[9,1,9,17],"225":[1,1,9,17],"233":[1,1,5,2],"241":[1,1,9,17],"249":[1,1,9,17],"257":[1,1,9,17],"265":[2,2,3,17],"273":[1,1,5,2],"281":[1,1,5,2],"289":[1,1,9,17],"297":[1,1,9,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test31.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test31_jalangi_.js","code":"function test_match(fullPath){\n\tif(fullPath != null && fullPath.match(/\\d+$/))\n\t\tconsole.log(1);\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(225, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test31_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test31.js');
            function test_match(fullPath) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(81, arguments.callee, this, arguments);
                            arguments = J$.N(89, 'arguments', arguments, 4);
                            fullPath = J$.N(97, 'fullPath', fullPath, 4);
                            if (J$.X1(265, J$.C(16, J$.C(8, J$.B(10, '!=', J$.R(9, 'fullPath', fullPath, 0), J$.T(17, null, 25, false), 0)) ? J$.M(41, J$.R(25, 'fullPath', fullPath, 0), 'match', 0)(J$.T(33, /\d+$/, 14, false)) : J$._())))
                                J$.X1(73, J$.M(65, J$.R(49, 'console', console, 2), 'log', 0)(J$.T(57, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(241, 'test_match', J$.T(233, test_match, 12, false, 81), 0);
            J$.N(249, 'S$', S$, 0);
            J$.N(257, 'arg', arg, 0);
            var S$ = J$.X1(137, J$.W(129, 'S$', J$.F(121, J$.R(105, 'require', require, 2), 0)(J$.T(113, "S$", 21, false)), S$, 3));
            var arg = J$.X1(185, J$.W(177, 'arg', J$.M(169, J$.R(145, 'S$', S$, 1), 'symbol', 0)(J$.T(153, "arg", 21, false), J$.T(161, "", 21, false)), arg, 3));
            J$.X1(217, J$.F(209, J$.R(193, 'test_match', test_match, 1), 0)(J$.R(201, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
