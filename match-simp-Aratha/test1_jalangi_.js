J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test1.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test1_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(441, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test1_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test1.js');
            function test_match(changelog) {
                jalangiLabel10:
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
                            if (J$.X1(489, J$.C(24, J$.R(57, 'changelog', changelog, 0)))) {
                                var match = J$.X1(97, J$.W(89, 'match', J$.M(81, J$.R(65, 'changelog', changelog, 0), 'match', 0)(J$.R(73, 'versionMarkerReg', versionMarkerReg, 0)), match, 1));
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
                                if (J$.X1(481, J$.C(16, J$.R(137, 'match', match, 0)))) {
                                    J$.X1(249, result = J$.W(241, 'result', J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.T(145, 'major:', 21, false), J$.G(169, J$.R(153, 'match', match, 0), J$.T(161, 1, 22, false), 4), 0), J$.T(177, 'minor:', 21, false), 0), J$.G(201, J$.R(185, 'match', match, 0), J$.T(193, 2, 22, false), 4), 0), J$.T(209, 'patch:', 21, false), 0), J$.G(233, J$.R(217, 'match', match, 0), J$.T(225, 3, 22, false), 4), 0), result, 0));
                                    J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 2, 22, false)));
                                    if (J$.X1(473, J$.C(8, J$.B(50, '!==', J$.R(289, 'result', result, 0), J$.T(297, '', 21, false), 0))))
                                        J$.X1(329, J$.M(321, J$.R(305, 'console', console, 2), 'log', 0)(J$.T(313, 3, 22, false)));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(497, J$e);
                        } finally {
                            if (J$.Fr(505))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(457, 'test_match', J$.T(449, test_match, 12, false, 337), 0);
            J$.N(465, 'arg', arg, 0);
            var arg = J$.X1(401, J$.W(393, 'arg', J$.M(385, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(433, J$.F(425, J$.R(409, 'test_match', test_match, 1), 0)(J$.R(417, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(513, J$e);
        } finally {
            if (J$.Sr(521)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
