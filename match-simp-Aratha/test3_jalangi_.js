J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test3_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(465, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test3_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test3.js');
            function test_match(line) {
                jalangiLabel10:
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
                            if (J$.X1(513, J$.C(24, J$.U(10, '!', J$.M(73, J$.R(57, 'nodeFramePattern', nodeFramePattern, 0), 'test', 0)(J$.R(65, 'line', line, 0)))))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                var lineMatches = J$.X1(145, J$.W(137, 'lineMatches', J$.M(129, J$.R(113, 'line', line, 0), 'match', 0)(J$.R(121, 'parseLinePattern', parseLinePattern, 0)), lineMatches, 1));
                                if (J$.X1(505, J$.C(16, J$.R(153, 'lineMatches', lineMatches, 0)))) {
                                    J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
                                    J$.X1(305, handlerLine = J$.W(297, 'handlerLine', J$.B(58, '+', J$.B(50, '+', J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.B(18, '+', J$.T(193, "at ", 21, false), J$.G(217, J$.R(201, 'lineMatches', lineMatches, 0), J$.T(209, 1, 22, false), 4), 0), J$.T(225, ":", 21, false), 0), J$.G(249, J$.R(233, 'lineMatches', lineMatches, 0), J$.T(241, 2, 22, false), 4), 0), J$.T(257, ":", 21, false), 0), J$.G(281, J$.R(265, 'lineMatches', lineMatches, 0), J$.T(273, 3, 22, false), 4), 0), J$.T(289, " ", 21, false), 0), J$.I(typeof handlerLine === 'undefined' ? undefined : handlerLine), 4));
                                    if (J$.X1(497, J$.C(8, J$.B(66, '!==', J$.R(313, 'handlerLine', handlerLine, 2), J$.T(321, '', 21, false), 0))))
                                        J$.X1(353, J$.M(345, J$.R(329, 'console', console, 2), 'log', 0)(J$.T(337, 3, 22, false)));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(521, J$e);
                        } finally {
                            if (J$.Fr(529))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(481, 'test_match', J$.T(473, test_match, 12, false, 361), 0);
            J$.N(489, 'arg', arg, 0);
            var arg = J$.X1(425, J$.W(417, 'arg', J$.M(409, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(457, J$.F(449, J$.R(433, 'test_match', test_match, 1), 0)(J$.R(441, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(537, J$e);
        } finally {
            if (J$.Sr(545)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
