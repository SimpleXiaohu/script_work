J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test50.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test50_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(417, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test50_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test50.js');
            function test_match(frame1) {
                jalangiLabel8:
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
                            if (J$.X1(465, J$.C(24, J$.B(18, '==', J$.M(73, J$.R(57, 'frame1', frame1, 0), 'indexOf', 0)(J$.R(65, 'ERROR_TAG', ERROR_TAG, 0)), J$.U(10, '-', J$.T(81, 1, 22, false)), 0)))) {
                                J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 1, 22, false)));
                                var match = J$.X1(153, J$.W(145, 'match', J$.M(137, J$.R(121, 'frame1', frame1, 0), 'match', 0)(J$.T(129, /^\s*at\s+/, 14, false)), match, 1));
                                if (J$.X1(457, J$.C(16, J$.R(161, 'match', match, 0)))) {
                                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                                    J$.X1(249, sepTemplate = J$.W(241, 'sepTemplate', J$.B(34, '+', J$.B(26, '+', J$.G(217, J$.R(201, 'match', match, 0), J$.T(209, 0, 22, false), 4), J$.R(225, 'SEP_TAG', SEP_TAG, 0), 0), J$.T(233, ' (http://localhost)', 21, false), 0), J$.I(typeof sepTemplate === 'undefined' ? undefined : sepTemplate), 4));
                                    if (J$.X1(449, J$.C(8, J$.M(273, J$.T(257, /STACK/, 14, false), 'test', 0)(J$.R(265, 'sepTemplate', sepTemplate, 2)))))
                                        J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 3, 22, false)));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(433, 'test_match', J$.T(425, test_match, 12, false, 313), 0);
            J$.N(441, 'arg', arg, 0);
            var arg = J$.X1(377, J$.W(369, 'arg', J$.M(361, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(409, J$.F(401, J$.R(385, 'test_match', test_match, 1), 0)(J$.R(393, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
