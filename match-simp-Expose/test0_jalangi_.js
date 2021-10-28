J$.iids = {"8":[4,9,4,65],"9":[2,25,2,41],"17":[2,25,2,41],"25":[2,25,2,41],"33":[4,9,4,13],"41":[4,20,4,40],"49":[4,9,4,41],"51":[4,9,4,19],"57":[4,42,4,43],"65":[4,9,4,44],"73":[4,51,4,64],"81":[4,9,4,65],"83":[4,9,4,50],"89":[5,9,5,16],"97":[5,21,5,22],"105":[5,9,5,23],"107":[5,9,5,20],"113":[5,9,5,24],"121":[1,1,7,2],"129":[1,1,7,2],"137":[1,1,7,2],"145":[1,1,7,2],"153":[8,10,8,17],"161":[8,18,8,22],"169":[8,10,8,23],"177":[8,10,8,23],"185":[8,10,8,23],"193":[10,11,10,13],"201":[10,21,10,26],"209":[10,28,10,30],"217":[10,11,10,31],"219":[10,11,10,20],"225":[10,11,10,31],"233":[10,11,10,31],"241":[11,1,11,11],"249":[11,12,11,15],"257":[11,1,11,16],"265":[11,1,11,17],"273":[1,1,11,17],"281":[1,1,7,2],"289":[1,1,11,17],"297":[1,1,11,17],"305":[1,1,11,17],"313":[4,5,6,6],"321":[1,1,7,2],"329":[1,1,7,2],"337":[1,1,11,17],"345":[1,1,11,17],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test0.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test0_jalangi_.js","code":"function test_match(name){\n    var sanitizeRegex = /[^a-zA-Z0-9,-]/;\n\n    if (name.match(/^(.+?)(?:-(.+?))?$/)[1].match(sanitizeRegex)) {\n      console.log(1)\n    }\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(273, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test0_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test0.js');
            function test_match(name) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            name = J$.N(137, 'name', name, 4);
                            J$.N(145, 'sanitizeRegex', sanitizeRegex, 0);
                            var sanitizeRegex = J$.X1(25, J$.W(17, 'sanitizeRegex', J$.T(9, /[^a-zA-Z0-9,-]/, 14, false), sanitizeRegex, 1));
                            if (J$.X1(313, J$.C(8, J$.M(81, J$.G(65, J$.M(49, J$.R(33, 'name', name, 0), 'match', 0)(J$.T(41, /^(.+?)(?:-(.+?))?$/, 14, false)), J$.T(57, 1, 22, false), 4), 'match', 0)(J$.R(73, 'sanitizeRegex', sanitizeRegex, 0))))) {
                                J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(289, 'test_match', J$.T(281, test_match, 12, false, 121), 0);
            J$.N(297, 'S$', S$, 0);
            J$.N(305, 'arg', arg, 0);
            var S$ = J$.X1(185, J$.W(177, 'S$', J$.F(169, J$.R(153, 'require', require, 2), 0)(J$.T(161, "S$", 21, false)), S$, 3));
            var arg = J$.X1(233, J$.W(225, 'arg', J$.M(217, J$.R(193, 'S$', S$, 1), 'symbol', 0)(J$.T(201, "arg", 21, false), J$.T(209, "", 21, false)), arg, 3));
            J$.X1(265, J$.F(257, J$.R(241, 'test_match', test_match, 1), 0)(J$.R(249, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
