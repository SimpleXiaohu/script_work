J$.iids = {"8":[5,9,5,23],"9":[2,7,2,14],"10":[2,7,2,24],"16":[2,7,2,24],"17":[2,19,2,24],"18":[5,9,5,23],"25":[3,5,3,12],"33":[3,17,3,18],"41":[3,5,3,19],"43":[3,5,3,16],"49":[3,5,3,20],"57":[4,20,4,27],"65":[4,36,4,48],"73":[4,50,4,52],"81":[4,20,4,53],"83":[4,20,4,35],"89":[4,20,4,53],"97":[4,20,4,53],"105":[5,9,5,16],"113":[5,21,5,23],"121":[5,25,5,32],"129":[5,37,5,38],"137":[5,25,5,39],"139":[5,25,5,36],"145":[5,25,5,40],"153":[1,1,7,2],"161":[1,1,7,2],"169":[1,1,7,2],"177":[1,1,7,2],"185":[8,10,8,17],"193":[8,18,8,22],"201":[8,10,8,23],"209":[8,10,8,23],"217":[8,10,8,23],"225":[10,11,10,13],"233":[10,21,10,26],"241":[10,28,10,30],"249":[10,11,10,31],"251":[10,11,10,20],"257":[10,11,10,31],"265":[10,11,10,31],"273":[11,1,11,11],"281":[11,12,11,15],"289":[11,1,11,16],"297":[11,1,11,17],"305":[1,1,11,17],"313":[1,1,7,2],"321":[1,1,11,17],"329":[1,1,11,17],"337":[1,1,11,17],"345":[5,5,5,40],"353":[2,3,6,4],"361":[1,1,7,2],"369":[1,1,7,2],"377":[1,1,11,17],"385":[1,1,11,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test23.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test23_jalangi_.js","code":"function test_match(pattern){\n  if (pattern === '/**') {\n    console.log(1);\n    var gpattern = pattern.replace(/(\\/\\*\\*)+$/, '');\n    if(pattern !== '') console.log(2);\n  }\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(305, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test23_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test23.js');
            function test_match(pattern) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            pattern = J$.N(169, 'pattern', pattern, 4);
                            J$.N(177, 'gpattern', gpattern, 0);
                            if (J$.X1(353, J$.C(16, J$.B(10, '===', J$.R(9, 'pattern', pattern, 0), J$.T(17, '/**', 21, false), 0)))) {
                                J$.X1(49, J$.M(41, J$.R(25, 'console', console, 2), 'log', 0)(J$.T(33, 1, 22, false)));
                                var gpattern = J$.X1(97, J$.W(89, 'gpattern', J$.M(81, J$.R(57, 'pattern', pattern, 0), 'replace', 0)(J$.T(65, /(\/\*\*)+$/, 14, false), J$.T(73, '', 21, false)), gpattern, 1));
                                if (J$.X1(345, J$.C(8, J$.B(18, '!==', J$.R(105, 'pattern', pattern, 0), J$.T(113, '', 21, false), 0))))
                                    J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(361, J$e);
                        } finally {
                            if (J$.Fr(369))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(321, 'test_match', J$.T(313, test_match, 12, false, 153), 0);
            J$.N(329, 'S$', S$, 0);
            J$.N(337, 'arg', arg, 0);
            var S$ = J$.X1(217, J$.W(209, 'S$', J$.F(201, J$.R(185, 'require', require, 2), 0)(J$.T(193, "S$", 21, false)), S$, 3));
            var arg = J$.X1(265, J$.W(257, 'arg', J$.M(249, J$.R(225, 'S$', S$, 1), 'symbol', 0)(J$.T(233, "arg", 21, false), J$.T(241, "", 21, false)), arg, 3));
            J$.X1(297, J$.F(289, J$.R(273, 'test_match', test_match, 1), 0)(J$.R(281, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
