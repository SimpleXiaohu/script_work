J$.iids = {"8":[14,8,14,21],"9":[3,25,3,65],"10":[12,13,12,32],"16":[10,7,10,12],"17":[3,25,3,65],"18":[12,13,12,43],"24":[6,6,6,15],"25":[3,25,3,65],"26":[12,13,12,54],"33":[5,15,5,17],"34":[12,13,12,65],"41":[5,15,5,17],"42":[12,13,12,76],"49":[5,15,5,17],"50":[14,8,14,21],"57":[6,6,6,15],"65":[8,15,8,24],"73":[8,31,8,47],"81":[8,15,8,48],"83":[8,15,8,30],"89":[8,15,8,48],"97":[8,15,8,48],"105":[9,3,9,10],"113":[9,15,9,16],"121":[9,3,9,17],"123":[9,3,9,14],"129":[9,3,9,18],"137":[10,7,10,12],"145":[12,13,12,21],"153":[12,24,12,29],"161":[12,30,12,31],"169":[12,24,12,32],"177":[12,35,12,43],"185":[12,46,12,51],"193":[12,52,12,53],"201":[12,46,12,54],"209":[12,57,12,65],"217":[12,68,12,73],"225":[12,74,12,75],"233":[12,68,12,76],"241":[12,13,12,76],"249":[12,4,12,77],"257":[13,4,13,11],"265":[13,16,13,17],"273":[13,4,13,18],"275":[13,4,13,15],"281":[13,4,13,19],"289":[14,8,14,14],"297":[14,19,14,21],"305":[14,23,14,30],"313":[14,35,14,36],"321":[14,23,14,37],"323":[14,23,14,34],"329":[14,23,14,38],"337":[1,1,18,2],"345":[1,1,18,2],"353":[1,1,18,2],"361":[1,1,18,2],"369":[1,1,18,2],"377":[1,1,18,2],"385":[19,10,19,17],"393":[19,18,19,22],"401":[19,10,19,23],"409":[19,10,19,23],"417":[19,10,19,23],"425":[21,11,21,13],"433":[21,21,21,26],"441":[21,28,21,30],"449":[21,11,21,31],"451":[21,11,21,20],"457":[21,11,21,31],"465":[21,11,21,31],"473":[22,1,22,11],"481":[22,12,22,15],"489":[22,1,22,16],"497":[22,1,22,17],"505":[1,1,22,17],"513":[1,1,18,2],"521":[1,1,22,17],"529":[1,1,22,17],"537":[1,1,22,17],"545":[14,4,14,38],"553":[10,3,15,4],"561":[6,2,17,3],"569":[1,1,18,2],"577":[1,1,18,2],"585":[1,1,22,17],"593":[1,1,22,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test1.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test1_jalangi_.js","code":"function test_match(changelog){\n\nvar versionMarkerReg = /<!--LATEST=(\\\\d+)\\\\.(\\\\d+)\\\\.(\\\\d+)-->/;\n\nvar result = '';\nif (changelog)\n{\n\tvar match = changelog.match(versionMarkerReg);\n\tconsole.log(1);\n\tif(match)\n\t{\n\t\tresult = 'major:' + match[1] + 'minor:' + match[2] + 'patch:' + match[3];\n\t\tconsole.log(2);\n\t\tif(result!=='') console.log(3); \n\t}\n\t\n}\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(505, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test1_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test1.js');
            function test_match(changelog) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(337, arguments.callee, this, arguments);
                            arguments = J$.N(345, 'arguments', arguments, 4);
                            changelog = J$.N(353, 'changelog', changelog, 4);
                            J$.N(361, 'versionMarkerReg', versionMarkerReg, 0);
                            J$.N(369, 'result', result, 0);
                            J$.N(377, 'match', match, 0);
                            var versionMarkerReg = J$.X1(25, J$.W(17, 'versionMarkerReg', J$.T(9, /<!--LATEST=(\\d+)\\.(\\d+)\\.(\\d+)-->/, 14, false), versionMarkerReg, 1));
                            var result = J$.X1(49, J$.W(41, 'result', J$.T(33, '', 21, false), result, 1));
                            if (J$.X1(561, J$.C(24, J$.R(57, 'changelog', changelog, 0)))) {
                                var match = J$.X1(97, J$.W(89, 'match', J$.M(81, J$.R(65, 'changelog', changelog, 0), 'match', 0)(J$.R(73, 'versionMarkerReg', versionMarkerReg, 0)), match, 1));
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
                                if (J$.X1(553, J$.C(16, J$.R(137, 'match', match, 0)))) {
                                    J$.X1(249, result = J$.W(241, 'result', J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.T(145, 'major:', 21, false), J$.G(169, J$.R(153, 'match', match, 0), J$.T(161, 1, 22, false), 4), 0), J$.T(177, 'minor:', 21, false), 0), J$.G(201, J$.R(185, 'match', match, 0), J$.T(193, 2, 22, false), 4), 0), J$.T(209, 'patch:', 21, false), 0), J$.G(233, J$.R(217, 'match', match, 0), J$.T(225, 3, 22, false), 4), 0), result, 0));
                                    J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 2, 22, false)));
                                    if (J$.X1(545, J$.C(8, J$.B(50, '!==', J$.R(289, 'result', result, 0), J$.T(297, '', 21, false), 0))))
                                        J$.X1(329, J$.M(321, J$.R(305, 'console', console, 2), 'log', 0)(J$.T(313, 3, 22, false)));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(569, J$e);
                        } finally {
                            if (J$.Fr(577))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(521, 'test_match', J$.T(513, test_match, 12, false, 337), 0);
            J$.N(529, 'S$', S$, 0);
            J$.N(537, 'arg', arg, 0);
            var S$ = J$.X1(417, J$.W(409, 'S$', J$.F(401, J$.R(385, 'require', require, 2), 0)(J$.T(393, "S$", 21, false)), S$, 3));
            var arg = J$.X1(465, J$.W(457, 'arg', J$.M(449, J$.R(425, 'S$', S$, 1), 'symbol', 0)(J$.T(433, "arg", 21, false), J$.T(441, "", 21, false)), arg, 3));
            J$.X1(497, J$.F(489, J$.R(473, 'test_match', test_match, 1), 0)(J$.R(481, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(585, J$e);
        } finally {
            if (J$.Sr(593)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
