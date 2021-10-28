J$.iids = {"8":[10,14,10,39],"9":[2,20,2,41],"10":[4,37,4,39],"16":[7,11,7,16],"17":[2,20,2,41],"18":[4,8,4,39],"24":[4,8,4,39],"25":[2,20,2,41],"26":[9,24,9,42],"33":[3,18,3,31],"34":[9,24,9,66],"41":[3,18,3,31],"49":[3,18,3,31],"57":[4,8,4,14],"65":[4,23,4,32],"73":[4,8,4,33],"75":[4,8,4,22],"81":[4,38,4,39],"89":[5,7,5,14],"97":[5,19,5,20],"105":[5,7,5,21],"107":[5,7,5,18],"113":[5,7,5,22],"121":[6,19,6,25],"129":[6,32,6,43],"137":[6,19,6,44],"139":[6,19,6,31],"145":[6,19,6,44],"153":[6,19,6,44],"161":[7,11,7,16],"169":[8,10,8,17],"177":[8,22,8,23],"185":[8,10,8,24],"187":[8,10,8,21],"193":[8,10,8,25],"201":[9,24,9,29],"209":[9,30,9,31],"217":[9,24,9,32],"225":[9,35,9,42],"233":[9,45,9,66],"241":[9,24,9,66],"249":[9,10,9,67],"257":[10,14,10,21],"265":[10,27,10,38],"273":[10,14,10,39],"275":[10,14,10,26],"281":[10,41,10,48],"289":[10,53,10,54],"297":[10,41,10,55],"299":[10,41,10,52],"305":[10,41,10,56],"313":[1,1,13,2],"321":[1,1,13,2],"329":[1,1,13,2],"337":[1,1,13,2],"345":[1,1,13,2],"353":[1,1,13,2],"361":[15,10,15,17],"369":[15,18,15,22],"377":[15,10,15,23],"385":[15,10,15,23],"393":[15,10,15,23],"401":[17,11,17,13],"409":[17,21,17,26],"417":[17,28,17,30],"425":[17,11,17,31],"427":[17,11,17,20],"433":[17,11,17,31],"441":[17,11,17,31],"449":[18,1,18,11],"457":[18,12,18,15],"465":[18,1,18,16],"473":[18,1,18,17],"481":[1,1,18,17],"489":[1,1,13,2],"497":[1,1,18,17],"505":[1,1,18,17],"513":[1,1,18,17],"521":[10,10,10,56],"529":[7,7,11,8],"537":[4,4,12,5],"545":[1,1,13,2],"553":[1,1,13,2],"561":[1,1,18,17],"569":[1,1,18,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test50.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test50_jalangi_.js","code":"function test_match(frame1){\nconst ERROR_TAG = 'STACKTRACE TRACKING';\nconst SEP_TAG = '__SEP_TAG__';\nif (frame1.indexOf(ERROR_TAG) == -1) {\n   console.log(1);\n   var match = frame1.match(/^\\s*at\\s+/);\n   if (match) {\n      console.log(2);\n        sepTemplate = match[0] + SEP_TAG + ' (http://localhost)';\n\tif(/STACK/.test(sepTemplate)) console.log(3);\n   }\n}\n}\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(481, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test50_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test50.js');
            function test_match(frame1) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(313, arguments.callee, this, arguments);
                            arguments = J$.N(321, 'arguments', arguments, 4);
                            frame1 = J$.N(329, 'frame1', frame1, 4);
                            J$.N(337, 'ERROR_TAG', ERROR_TAG, 0);
                            J$.N(345, 'SEP_TAG', SEP_TAG, 0);
                            J$.N(353, 'match', match, 0);
                            var ERROR_TAG = J$.X1(25, J$.W(17, 'ERROR_TAG', J$.T(9, 'STACKTRACE TRACKING', 21, false), ERROR_TAG, 1));
                            var SEP_TAG = J$.X1(49, J$.W(41, 'SEP_TAG', J$.T(33, '__SEP_TAG__', 21, false), SEP_TAG, 1));
                            if (J$.X1(537, J$.C(24, J$.B(18, '==', J$.M(73, J$.R(57, 'frame1', frame1, 0), 'indexOf', 0)(J$.R(65, 'ERROR_TAG', ERROR_TAG, 0)), J$.U(10, '-', J$.T(81, 1, 22, false)), 0)))) {
                                J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 1, 22, false)));
                                var match = J$.X1(153, J$.W(145, 'match', J$.M(137, J$.R(121, 'frame1', frame1, 0), 'match', 0)(J$.T(129, /^\s*at\s+/, 14, false)), match, 1));
                                if (J$.X1(529, J$.C(16, J$.R(161, 'match', match, 0)))) {
                                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                                    J$.X1(249, sepTemplate = J$.W(241, 'sepTemplate', J$.B(34, '+', J$.B(26, '+', J$.G(217, J$.R(201, 'match', match, 0), J$.T(209, 0, 22, false), 4), J$.R(225, 'SEP_TAG', SEP_TAG, 0), 0), J$.T(233, ' (http://localhost)', 21, false), 0), J$.I(typeof sepTemplate === 'undefined' ? undefined : sepTemplate), 4));
                                    if (J$.X1(521, J$.C(8, J$.M(273, J$.T(257, /STACK/, 14, false), 'test', 0)(J$.R(265, 'sepTemplate', sepTemplate, 2)))))
                                        J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 3, 22, false)));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(545, J$e);
                        } finally {
                            if (J$.Fr(553))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(497, 'test_match', J$.T(489, test_match, 12, false, 313), 0);
            J$.N(505, 'S$', S$, 0);
            J$.N(513, 'arg', arg, 0);
            var S$ = J$.X1(393, J$.W(385, 'S$', J$.F(377, J$.R(361, 'require', require, 2), 0)(J$.T(369, "S$", 21, false)), S$, 3));
            var arg = J$.X1(441, J$.W(433, 'arg', J$.M(425, J$.R(401, 'S$', S$, 1), 'symbol', 0)(J$.T(409, "arg", 21, false), J$.T(417, "", 21, false)), arg, 3));
            J$.X1(473, J$.F(465, J$.R(449, 'test_match', test_match, 1), 0)(J$.R(457, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(561, J$e);
        } finally {
            if (J$.Sr(569)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
