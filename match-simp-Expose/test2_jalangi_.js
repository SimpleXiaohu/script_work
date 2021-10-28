J$.iids = {"8":[7,9,7,26],"9":[2,17,2,27],"10":[7,9,7,26],"16":[3,7,3,14],"17":[2,34,2,52],"25":[2,17,2,53],"27":[2,17,2,33],"33":[2,17,2,53],"41":[2,17,2,53],"49":[3,7,3,14],"57":[4,5,4,12],"65":[4,17,4,18],"73":[4,5,4,19],"75":[4,5,4,16],"81":[4,5,4,20],"89":[5,19,5,26],"97":[5,27,5,28],"105":[5,19,5,29],"113":[6,18,6,25],"121":[6,26,6,27],"129":[6,18,6,28],"137":[5,19,5,29],"145":[5,19,5,29],"153":[6,18,6,28],"161":[6,18,6,28],"169":[7,9,7,19],"177":[7,24,7,26],"185":[7,28,7,35],"193":[7,40,7,41],"201":[7,28,7,42],"203":[7,28,7,39],"209":[7,28,7,43],"217":[1,1,9,2],"225":[1,1,9,2],"233":[1,1,9,2],"241":[1,1,9,2],"249":[1,1,9,2],"257":[1,1,9,2],"265":[10,10,10,17],"273":[10,18,10,22],"281":[10,10,10,23],"289":[10,10,10,23],"297":[10,10,10,23],"305":[12,11,12,13],"313":[12,21,12,26],"321":[12,28,12,30],"329":[12,11,12,31],"331":[12,11,12,20],"337":[12,11,12,31],"345":[12,11,12,31],"353":[13,1,13,11],"361":[13,12,13,15],"369":[13,1,13,16],"377":[13,1,13,17],"385":[1,1,13,17],"393":[1,1,9,2],"401":[1,1,13,17],"409":[1,1,13,17],"417":[1,1,13,17],"425":[7,5,7,43],"433":[3,3,8,4],"441":[1,1,9,2],"449":[1,1,9,2],"457":[1,1,13,17],"465":[1,1,13,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test2_jalangi_.js","code":"function test_match(presetName){\n  var matches = presetName.match(/^(@[^/]+)\\/(.+)$/);\n  if (matches) {\n    console.log(1)\n    var orgName = matches[1],\n        presetPath = matches[2];\n    if(presetPath!=='') console.log(2);\n  }\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(385, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test2_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test2.js');
            function test_match(presetName) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            presetName = J$.N(233, 'presetName', presetName, 4);
                            J$.N(241, 'matches', matches, 0);
                            J$.N(249, 'orgName', orgName, 0);
                            J$.N(257, 'presetPath', presetPath, 0);
                            var matches = J$.X1(41, J$.W(33, 'matches', J$.M(25, J$.R(9, 'presetName', presetName, 0), 'match', 0)(J$.T(17, /^(@[^/]+)\/(.+)$/, 14, false)), matches, 1));
                            if (J$.X1(433, J$.C(16, J$.R(49, 'matches', matches, 0)))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                var orgName = J$.X1(145, J$.W(137, 'orgName', J$.G(105, J$.R(89, 'matches', matches, 0), J$.T(97, 1, 22, false), 4), orgName, 1)), presetPath = J$.X1(161, J$.W(153, 'presetPath', J$.G(129, J$.R(113, 'matches', matches, 0), J$.T(121, 2, 22, false), 4), presetPath, 1));
                                if (J$.X1(425, J$.C(8, J$.B(10, '!==', J$.R(169, 'presetPath', presetPath, 0), J$.T(177, '', 21, false), 0))))
                                    J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(401, 'test_match', J$.T(393, test_match, 12, false, 217), 0);
            J$.N(409, 'S$', S$, 0);
            J$.N(417, 'arg', arg, 0);
            var S$ = J$.X1(297, J$.W(289, 'S$', J$.F(281, J$.R(265, 'require', require, 2), 0)(J$.T(273, "S$", 21, false)), S$, 3));
            var arg = J$.X1(345, J$.W(337, 'arg', J$.M(329, J$.R(305, 'S$', S$, 1), 'symbol', 0)(J$.T(313, "arg", 21, false), J$.T(321, "", 21, false)), arg, 3));
            J$.X1(377, J$.F(369, J$.R(353, 'test_match', test_match, 1), 0)(J$.R(361, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
