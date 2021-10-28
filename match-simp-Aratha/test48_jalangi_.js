J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test48.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test48_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test48_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test48.js');
            function test_match(stack) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            stack = J$.N(249, 'stack', stack, 4);
                            J$.N(257, 'CURRENT_METHOD_REGEXP', CURRENT_METHOD_REGEXP, 0);
                            J$.N(265, 'match', match, 0);
                            J$.N(273, 'result', result, 0);
                            var CURRENT_METHOD_REGEXP = J$.X1(25, J$.W(17, 'CURRENT_METHOD_REGEXP', J$.T(9, /at ([a-zA-Z0-9_.]*)/, 14, false), CURRENT_METHOD_REGEXP, 1));
                            var match = J$.X1(65, J$.W(57, 'match', J$.M(49, J$.R(33, 'stack', stack, 0), 'match', 0)(J$.R(41, 'CURRENT_METHOD_REGEXP', CURRENT_METHOD_REGEXP, 0)), match, 1));
                            var result = J$.X1(89, J$.W(81, 'result', J$.T(73, '', 21, false), result, 1));
                            if (J$.X1(369, J$.C(8, J$.R(97, 'match', match, 0)))) {
                                J$.X1(137, result = J$.W(129, 'result', J$.G(121, J$.R(105, 'match', match, 0), J$.T(113, 1, 22, false), 4), result, 0));
                                J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                            }
                            if (J$.X1(377, J$.C(16, J$.M(193, J$.T(177, /[0-9]+/, 14, false), 'test', 0)(J$.R(185, 'result', result, 0)))))
                                J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(353, 'test_match', J$.T(345, test_match, 12, false, 233), 0);
            J$.N(361, 'arg', arg, 0);
            var arg = J$.X1(297, J$.W(289, 'arg', J$.M(281, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(329, J$.F(321, J$.R(305, 'test_match', test_match, 1), 0)(J$.R(313, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
