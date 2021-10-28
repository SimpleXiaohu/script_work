J$.iids = {"8":[10,9,10,49],"9":[2,20,2,50],"16":[10,9,10,72],"17":[2,20,2,50],"24":[10,9,10,72],"25":[2,20,2,50],"32":[4,7,4,8],"33":[3,11,3,16],"41":[3,23,3,33],"49":[3,11,3,34],"51":[3,11,3,22],"57":[3,11,3,34],"65":[3,11,3,34],"73":[4,7,4,8],"81":[6,5,6,12],"89":[6,17,6,18],"97":[6,5,6,19],"99":[6,5,6,16],"105":[6,5,6,20],"113":[7,15,7,16],"121":[7,17,7,18],"129":[7,15,7,19],"137":[7,15,7,19],"145":[7,15,7,19],"153":[8,16,8,17],"161":[8,18,8,19],"169":[8,16,8,20],"177":[8,16,8,20],"185":[8,16,8,20],"193":[9,18,9,19],"201":[9,20,9,21],"209":[9,18,9,22],"217":[9,18,9,22],"225":[9,18,9,22],"233":[10,9,10,18],"241":[10,24,10,27],"249":[10,9,10,28],"251":[10,9,10,23],"257":[10,32,10,38],"265":[10,44,10,48],"273":[10,32,10,49],"275":[10,32,10,43],"281":[10,53,10,59],"289":[10,65,10,71],"297":[10,53,10,72],"299":[10,53,10,64],"305":[10,74,10,81],"313":[10,86,10,87],"321":[10,74,10,88],"323":[10,74,10,85],"329":[10,74,10,89],"337":[1,1,12,2],"345":[1,1,12,2],"353":[1,1,12,2],"361":[1,1,12,2],"369":[1,1,12,2],"377":[1,1,12,2],"385":[1,1,12,2],"393":[1,1,12,2],"401":[13,10,13,17],"409":[13,18,13,22],"417":[13,10,13,23],"425":[13,10,13,23],"433":[13,10,13,23],"441":[15,11,15,13],"449":[15,21,15,26],"457":[15,28,15,30],"465":[15,11,15,31],"467":[15,11,15,20],"473":[15,11,15,31],"481":[15,11,15,31],"489":[16,1,16,11],"497":[16,12,16,15],"505":[16,1,16,16],"513":[16,1,16,17],"521":[1,1,16,17],"529":[1,1,12,2],"537":[1,1,16,17],"545":[1,1,16,17],"553":[1,1,16,17],"561":[10,5,10,89],"569":[4,3,11,4],"577":[1,1,12,2],"585":[1,1,12,2],"593":[1,1,16,17],"601":[1,1,16,17],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test47.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test47_jalangi_.js","code":"function test_match(trace){\nconst filenameRE = /\\(([^)]+\\.js):(\\d+):(\\d+)\\)$/;\nconst m = trace.match(filenameRE);\nif(m)\n{\n  console.log(1);\n  const map = m[1];\n  const line = m[2];\n  const column = m[3];\n  if(/[A-Z].*/.test(map) && /2\\d*/.test(line) && /3\\d*/.test(column)) console.log(2);\n}\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(521, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test47_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test47.js');
            function test_match(trace) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(337, arguments.callee, this, arguments);
                            arguments = J$.N(345, 'arguments', arguments, 4);
                            trace = J$.N(353, 'trace', trace, 4);
                            J$.N(361, 'filenameRE', filenameRE, 0);
                            J$.N(369, 'm', m, 0);
                            J$.N(377, 'map', map, 0);
                            J$.N(385, 'line', line, 0);
                            J$.N(393, 'column', column, 0);
                            var filenameRE = J$.X1(25, J$.W(17, 'filenameRE', J$.T(9, /\(([^)]+\.js):(\d+):(\d+)\)$/, 14, false), filenameRE, 1));
                            var m = J$.X1(65, J$.W(57, 'm', J$.M(49, J$.R(33, 'trace', trace, 0), 'match', 0)(J$.R(41, 'filenameRE', filenameRE, 0)), m, 1));
                            if (J$.X1(569, J$.C(32, J$.R(73, 'm', m, 0)))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                var map = J$.X1(145, J$.W(137, 'map', J$.G(129, J$.R(113, 'm', m, 0), J$.T(121, 1, 22, false), 4), map, 1));
                                var line = J$.X1(185, J$.W(177, 'line', J$.G(169, J$.R(153, 'm', m, 0), J$.T(161, 2, 22, false), 4), line, 1));
                                var column = J$.X1(225, J$.W(217, 'column', J$.G(209, J$.R(193, 'm', m, 0), J$.T(201, 3, 22, false), 4), column, 1));
                                if (J$.X1(561, J$.C(24, J$.C(16, J$.C(8, J$.M(249, J$.T(233, /[A-Z].*/, 14, false), 'test', 0)(J$.R(241, 'map', map, 0))) ? J$.M(273, J$.T(257, /2\d*/, 14, false), 'test', 0)(J$.R(265, 'line', line, 0)) : J$._()) ? J$.M(297, J$.T(281, /3\d*/, 14, false), 'test', 0)(J$.R(289, 'column', column, 0)) : J$._())))
                                    J$.X1(329, J$.M(321, J$.R(305, 'console', console, 2), 'log', 0)(J$.T(313, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(577, J$e);
                        } finally {
                            if (J$.Fr(585))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(537, 'test_match', J$.T(529, test_match, 12, false, 337), 0);
            J$.N(545, 'S$', S$, 0);
            J$.N(553, 'arg', arg, 0);
            var S$ = J$.X1(433, J$.W(425, 'S$', J$.F(417, J$.R(401, 'require', require, 2), 0)(J$.T(409, "S$", 21, false)), S$, 3));
            var arg = J$.X1(481, J$.W(473, 'arg', J$.M(465, J$.R(441, 'S$', S$, 1), 'symbol', 0)(J$.T(449, "arg", 21, false), J$.T(457, "", 21, false)), arg, 3));
            J$.X1(513, J$.F(505, J$.R(489, 'test_match', test_match, 1), 0)(J$.R(497, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(593, J$e);
        } finally {
            if (J$.Sr(601)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
