J$.iids = {"8":[13,29,13,47],"9":[3,32,3,60],"10":[6,13,6,41],"16":[9,21,9,32],"17":[3,32,3,60],"18":[11,39,11,61],"24":[6,13,6,41],"25":[3,32,3,60],"26":[11,39,12,28],"33":[4,32,4,65],"34":[11,39,12,45],"41":[4,32,4,65],"42":[11,39,12,51],"49":[4,32,4,65],"50":[11,39,12,68],"57":[6,14,6,30],"58":[11,39,12,74],"65":[6,36,6,40],"66":[13,29,13,47],"73":[6,14,6,41],"75":[6,14,6,35],"81":[7,17,7,24],"89":[7,29,7,30],"97":[7,17,7,31],"99":[7,17,7,28],"105":[7,17,7,32],"113":[8,35,8,39],"121":[8,46,8,62],"129":[8,35,8,63],"131":[8,35,8,45],"137":[8,35,8,63],"145":[8,35,8,63],"153":[9,21,9,32],"161":[10,25,10,32],"169":[10,37,10,38],"177":[10,25,10,39],"179":[10,25,10,36],"185":[10,25,10,40],"193":[11,39,11,44],"201":[11,47,11,58],"209":[11,59,11,60],"217":[11,47,11,61],"225":[12,25,12,28],"233":[12,31,12,42],"241":[12,43,12,44],"249":[12,31,12,45],"257":[12,48,12,51],"265":[12,54,12,65],"273":[12,66,12,67],"281":[12,54,12,68],"289":[12,71,12,74],"297":[11,39,12,74],"305":[11,25,12,75],"313":[13,29,13,40],"321":[13,45,13,47],"329":[13,49,13,56],"337":[13,61,13,62],"345":[13,49,13,63],"347":[13,49,13,60],"353":[13,49,13,64],"361":[1,1,17,2],"369":[1,1,17,2],"377":[1,1,17,2],"385":[1,1,17,2],"393":[1,1,17,2],"401":[1,1,17,2],"409":[18,10,18,17],"417":[18,18,18,22],"425":[18,10,18,23],"433":[18,10,18,23],"441":[18,10,18,23],"449":[20,11,20,13],"457":[20,21,20,26],"465":[20,28,20,30],"473":[20,11,20,31],"475":[20,11,20,20],"481":[20,11,20,31],"489":[20,11,20,31],"497":[21,1,21,11],"505":[21,12,21,15],"513":[21,1,21,16],"521":[21,1,21,17],"529":[1,1,21,17],"537":[1,1,17,2],"545":[1,1,21,17],"553":[1,1,21,17],"561":[1,1,21,17],"569":[13,25,13,64],"577":[9,17,14,18],"585":[6,9,15,10],"593":[1,1,17,2],"601":[1,1,17,2],"609":[1,1,21,17],"617":[1,1,21,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test3_jalangi_.js","code":"function test_match(line){\n\nvar nodeFramePattern = /\\((?:timers\\.js):\\d+:\\d+\\)/;\nvar parseLinePattern = /[\\/<\\(](.+?):(\\d+):(\\d+)\\)?\\s*$/;\n\nif (!nodeFramePattern.test(line)) {\n        console.log(1);\n\tvar lineMatches = line.match(parseLinePattern);\n        if (lineMatches) {\n                console.log(2);\n              handlerLine  = \"at \" + lineMatches[1] +\n                 \":\" + lineMatches[2] + \":\" + lineMatches[3] + \" \";\n\t      if(handlerLine!=='') console.log(3);\n        }\n}\n\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(529, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test3_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test3.js');
            function test_match(line) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(361, arguments.callee, this, arguments);
                            arguments = J$.N(369, 'arguments', arguments, 4);
                            line = J$.N(377, 'line', line, 4);
                            J$.N(385, 'nodeFramePattern', nodeFramePattern, 0);
                            J$.N(393, 'parseLinePattern', parseLinePattern, 0);
                            J$.N(401, 'lineMatches', lineMatches, 0);
                            var nodeFramePattern = J$.X1(25, J$.W(17, 'nodeFramePattern', J$.T(9, /\((?:timers\.js):\d+:\d+\)/, 14, false), nodeFramePattern, 1));
                            var parseLinePattern = J$.X1(49, J$.W(41, 'parseLinePattern', J$.T(33, /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, 14, false), parseLinePattern, 1));
                            if (J$.X1(585, J$.C(24, J$.U(10, '!', J$.M(73, J$.R(57, 'nodeFramePattern', nodeFramePattern, 0), 'test', 0)(J$.R(65, 'line', line, 0)))))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                var lineMatches = J$.X1(145, J$.W(137, 'lineMatches', J$.M(129, J$.R(113, 'line', line, 0), 'match', 0)(J$.R(121, 'parseLinePattern', parseLinePattern, 0)), lineMatches, 1));
                                if (J$.X1(577, J$.C(16, J$.R(153, 'lineMatches', lineMatches, 0)))) {
                                    J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
                                    J$.X1(305, handlerLine = J$.W(297, 'handlerLine', J$.B(58, '+', J$.B(50, '+', J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.B(18, '+', J$.T(193, "at ", 21, false), J$.G(217, J$.R(201, 'lineMatches', lineMatches, 0), J$.T(209, 1, 22, false), 4), 0), J$.T(225, ":", 21, false), 0), J$.G(249, J$.R(233, 'lineMatches', lineMatches, 0), J$.T(241, 2, 22, false), 4), 0), J$.T(257, ":", 21, false), 0), J$.G(281, J$.R(265, 'lineMatches', lineMatches, 0), J$.T(273, 3, 22, false), 4), 0), J$.T(289, " ", 21, false), 0), J$.I(typeof handlerLine === 'undefined' ? undefined : handlerLine), 4));
                                    if (J$.X1(569, J$.C(8, J$.B(66, '!==', J$.R(313, 'handlerLine', handlerLine, 2), J$.T(321, '', 21, false), 0))))
                                        J$.X1(353, J$.M(345, J$.R(329, 'console', console, 2), 'log', 0)(J$.T(337, 3, 22, false)));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(593, J$e);
                        } finally {
                            if (J$.Fr(601))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(545, 'test_match', J$.T(537, test_match, 12, false, 361), 0);
            J$.N(553, 'S$', S$, 0);
            J$.N(561, 'arg', arg, 0);
            var S$ = J$.X1(441, J$.W(433, 'S$', J$.F(425, J$.R(409, 'require', require, 2), 0)(J$.T(417, "S$", 21, false)), S$, 3));
            var arg = J$.X1(489, J$.W(481, 'arg', J$.M(473, J$.R(449, 'S$', S$, 1), 'symbol', 0)(J$.T(457, "arg", 21, false), J$.T(465, "", 21, false)), arg, 3));
            J$.X1(521, J$.F(513, J$.R(497, 'test_match', test_match, 1), 0)(J$.R(505, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(609, J$e);
        } finally {
            if (J$.Sr(617)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
