J$.iids = {"8":[3,15,3,52],"9":[2,28,2,74],"10":[4,16,4,31],"16":[4,7,4,31],"17":[2,28,2,74],"24":[4,7,4,31],"25":[2,28,2,74],"33":[3,15,3,20],"41":[3,27,3,45],"49":[3,15,3,46],"51":[3,15,3,26],"57":[3,50,3,52],"65":[3,15,3,52],"73":[3,15,3,52],"81":[4,7,4,12],"89":[4,16,4,21],"97":[4,22,4,23],"105":[4,16,4,24],"113":[4,29,4,31],"121":[4,33,4,40],"129":[4,45,4,46],"137":[4,33,4,47],"139":[4,33,4,44],"145":[4,33,4,48],"153":[1,1,5,2],"161":[1,1,5,2],"169":[1,1,5,2],"177":[1,1,5,2],"185":[1,1,5,2],"193":[6,10,6,17],"201":[6,18,6,22],"209":[6,10,6,23],"217":[6,10,6,23],"225":[6,10,6,23],"233":[8,11,8,13],"241":[8,21,8,26],"249":[8,28,8,30],"257":[8,11,8,31],"259":[8,11,8,20],"265":[8,11,8,31],"273":[8,11,8,31],"281":[9,1,9,11],"289":[9,12,9,15],"297":[9,1,9,16],"305":[9,1,9,17],"313":[1,1,9,17],"321":[1,1,5,2],"329":[1,1,9,17],"337":[1,1,9,17],"345":[1,1,9,17],"353":[4,3,4,48],"361":[1,1,5,2],"369":[1,1,5,2],"377":[1,1,9,17],"385":[1,1,9,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test11.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test11_jalangi_.js","code":"function test_match(input){\nconst _commentWithHashRe = /\\/\\*\\s*#\\s*source(Mapping)?URL=[\\s\\S]+?\\*\\//g;\nvar match = input.match(_commentWithHashRe) || [];\nif(match && match[1]!=='') console.log(1);\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(313, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test11_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test11.js');
            function test_match(input) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            input = J$.N(169, 'input', input, 4);
                            J$.N(177, '_commentWithHashRe', _commentWithHashRe, 0);
                            J$.N(185, 'match', match, 0);
                            var _commentWithHashRe = J$.X1(25, J$.W(17, '_commentWithHashRe', J$.T(9, /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g, 14, false), _commentWithHashRe, 1));
                            var match = J$.X1(73, J$.W(65, 'match', J$.C(8, J$.M(49, J$.R(33, 'input', input, 0), 'match', 0)(J$.R(41, '_commentWithHashRe', _commentWithHashRe, 0))) ? J$._() : J$.T(57, [], 10, false), match, 1));
                            if (J$.X1(353, J$.C(24, J$.C(16, J$.R(81, 'match', match, 0)) ? J$.B(10, '!==', J$.G(105, J$.R(89, 'match', match, 0), J$.T(97, 1, 22, false), 4), J$.T(113, '', 21, false), 0) : J$._())))
                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 1, 22, false)));
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
            test_match = J$.N(329, 'test_match', J$.T(321, test_match, 12, false, 153), 0);
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'arg', arg, 0);
            var S$ = J$.X1(225, J$.W(217, 'S$', J$.F(209, J$.R(193, 'require', require, 2), 0)(J$.T(201, "S$", 21, false)), S$, 3));
            var arg = J$.X1(273, J$.W(265, 'arg', J$.M(257, J$.R(233, 'S$', S$, 1), 'symbol', 0)(J$.T(241, "arg", 21, false), J$.T(249, "", 21, false)), arg, 3));
            J$.X1(305, J$.F(297, J$.R(281, 'test_match', test_match, 1), 0)(J$.R(289, 'arg', arg, 1)));
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
