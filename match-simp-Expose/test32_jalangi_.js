J$.iids = {"8":[2,6,2,45],"9":[2,6,2,9],"17":[2,16,2,44],"25":[2,6,2,45],"27":[2,6,2,15],"33":[3,12,3,22],"41":[3,12,3,22],"49":[3,3,3,23],"57":[4,3,4,10],"65":[4,15,4,16],"73":[4,3,4,17],"75":[4,3,4,14],"81":[4,3,4,18],"89":[7,12,7,21],"97":[7,12,7,21],"105":[7,3,7,22],"113":[8,3,8,10],"121":[8,15,8,16],"129":[8,3,8,17],"131":[8,3,8,14],"137":[8,3,8,18],"145":[1,1,11,2],"153":[1,1,11,2],"161":[1,1,11,2],"169":[12,10,12,17],"177":[12,18,12,22],"185":[12,10,12,23],"193":[12,10,12,23],"201":[12,10,12,23],"209":[14,11,14,13],"217":[14,21,14,26],"225":[14,28,14,30],"233":[14,11,14,31],"235":[14,11,14,20],"241":[14,11,14,31],"249":[14,11,14,31],"257":[15,1,15,11],"265":[15,12,15,15],"273":[15,1,15,16],"281":[15,1,15,17],"289":[1,1,15,17],"297":[1,1,11,2],"305":[1,1,15,17],"313":[1,1,15,17],"321":[1,1,15,17],"329":[2,2,9,3],"337":[1,1,11,2],"345":[1,1,11,2],"353":[1,1,15,17],"361":[1,1,15,17],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test32.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test32_jalangi_.js","code":"function test_match(opt){\n\tif(opt.match(/^(es|es6|es7|esnext|web)\\./)){\n\t\ttarget = \"builtIns\";\n\t\tconsole.log(1);\n\t}\n\telse{\n\t\ttarget = \"plugins\";\n\t\tconsole.log(2);\n\t}\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test32_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test32.js');
            function test_match(opt) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            opt = J$.N(161, 'opt', opt, 4);
                            if (J$.X1(329, J$.C(8, J$.M(25, J$.R(9, 'opt', opt, 0), 'match', 0)(J$.T(17, /^(es|es6|es7|esnext|web)\./, 14, false))))) {
                                J$.X1(49, target = J$.W(41, 'target', J$.T(33, "builtIns", 21, false), J$.I(typeof target === 'undefined' ? undefined : target), 4));
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                            } else {
                                J$.X1(105, target = J$.W(97, 'target', J$.T(89, "plugins", 21, false), J$.I(typeof target === 'undefined' ? undefined : target), 4));
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(305, 'test_match', J$.T(297, test_match, 12, false, 145), 0);
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'arg', arg, 0);
            var S$ = J$.X1(201, J$.W(193, 'S$', J$.F(185, J$.R(169, 'require', require, 2), 0)(J$.T(177, "S$", 21, false)), S$, 3));
            var arg = J$.X1(249, J$.W(241, 'arg', J$.M(233, J$.R(209, 'S$', S$, 1), 'symbol', 0)(J$.T(217, "arg", 21, false), J$.T(225, "", 21, false)), arg, 3));
            J$.X1(281, J$.F(273, J$.R(257, 'test_match', test_match, 1), 0)(J$.R(265, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
