J$.iids = {"8":[2,13,2,95],"9":[2,13,2,17],"17":[2,24,2,94],"25":[2,13,2,95],"27":[2,13,2,23],"33":[3,17,3,24],"41":[3,29,3,30],"49":[3,17,3,31],"51":[3,17,3,28],"57":[3,17,3,32],"65":[1,1,7,2],"73":[1,1,7,2],"81":[1,1,7,2],"89":[8,10,8,17],"97":[8,18,8,22],"105":[8,10,8,23],"113":[8,10,8,23],"121":[8,10,8,23],"129":[10,11,10,13],"137":[10,21,10,26],"145":[10,28,10,30],"153":[10,11,10,31],"155":[10,11,10,20],"161":[10,11,10,31],"169":[10,11,10,31],"177":[11,1,11,11],"185":[11,12,11,15],"193":[11,1,11,16],"201":[11,1,11,17],"209":[1,1,11,17],"217":[1,1,7,2],"225":[1,1,11,17],"233":[1,1,11,17],"241":[1,1,11,17],"249":[2,9,4,10],"257":[1,1,7,2],"265":[1,1,7,2],"273":[1,1,11,17],"281":[1,1,11,17],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test17.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test17_jalangi_.js","code":"function test_match(name){\n        if (name.match(/\\s+/u)) {\n\t\tconsole.log(1);\n        }\n\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(209, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test17_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test17.js');
            function test_match(name) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            name = J$.N(81, 'name', name, 4);
                            if (J$.X1(249, J$.C(8, J$.M(25, J$.R(9, 'name', name, 0), 'match', 0)(J$.T(17, /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/, 14, false))))) {
                                J$.X1(57, J$.M(49, J$.R(33, 'console', console, 2), 'log', 0)(J$.T(41, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(225, 'test_match', J$.T(217, test_match, 12, false, 65), 0);
            J$.N(233, 'S$', S$, 0);
            J$.N(241, 'arg', arg, 0);
            var S$ = J$.X1(121, J$.W(113, 'S$', J$.F(105, J$.R(89, 'require', require, 2), 0)(J$.T(97, "S$", 21, false)), S$, 3));
            var arg = J$.X1(169, J$.W(161, 'arg', J$.M(153, J$.R(129, 'S$', S$, 1), 'symbol', 0)(J$.T(137, "arg", 21, false), J$.T(145, "", 21, false)), arg, 3));
            J$.X1(201, J$.F(193, J$.R(177, 'test_match', test_match, 1), 0)(J$.R(185, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
