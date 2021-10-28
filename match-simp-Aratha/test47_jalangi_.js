J$.iids = {"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test47.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test47_jalangi_.js"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(457, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test47_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test47.js');
            function test_match(trace) {
                jalangiLabel14:
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
                            if (J$.X1(497, J$.C(32, J$.R(73, 'm', m, 0)))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                var map = J$.X1(145, J$.W(137, 'map', J$.G(129, J$.R(113, 'm', m, 0), J$.T(121, 1, 22, false), 4), map, 1));
                                var line = J$.X1(185, J$.W(177, 'line', J$.G(169, J$.R(153, 'm', m, 0), J$.T(161, 2, 22, false), 4), line, 1));
                                var column = J$.X1(225, J$.W(217, 'column', J$.G(209, J$.R(193, 'm', m, 0), J$.T(201, 3, 22, false), 4), column, 1));
                                if (J$.X1(489, J$.C(24, J$.C(16, J$.C(8, J$.M(249, J$.T(233, /[A-Z].*/, 14, false), 'test', 0)(J$.R(241, 'map', map, 0))) ? J$.M(273, J$.T(257, /2\d*/, 14, false), 'test', 0)(J$.R(265, 'line', line, 0)) : J$._()) ? J$.M(297, J$.T(281, /3\d*/, 14, false), 'test', 0)(J$.R(289, 'column', column, 0)) : J$._())))
                                    J$.X1(329, J$.M(321, J$.R(305, 'console', console, 2), 'log', 0)(J$.T(313, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel14;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(473, 'test_match', J$.T(465, test_match, 12, false, 337), 0);
            J$.N(481, 'arg', arg, 0);
            var arg = J$.X1(417, J$.W(409, 'arg', J$.M(401, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(449, J$.F(441, J$.R(425, 'test_match', test_match, 1), 0)(J$.R(433, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
