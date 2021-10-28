J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test41.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test41_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test41_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test41.js');
            function test_match(fn) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            fn = J$.N(257, 'fn', fn, 4);
                            J$.N(265, 'match', match, 0);
                            J$.N(273, 'result', result, 0);
                            if (J$.X1(385, J$.C(24, J$.R(9, 'fn', fn, 0)))) {
                                J$.X1(41, J$.M(33, J$.R(17, 'console', console, 2), 'log', 0)(J$.T(25, 1, 22, false)));
                                var match = J$.X1(81, J$.W(73, 'match', J$.M(65, J$.R(49, 'fn', fn, 0), 'match', 0)(J$.T(57, /^\s*function (\w+)/, 14, false)), match, 1));
                                var result = J$.X1(105, J$.W(97, 'result', J$.T(89, '', 21, false), result, 1));
                                if (J$.X1(369, J$.C(8, J$.R(113, 'match', match, 0)))) {
                                    J$.X1(153, result = J$.W(145, 'result', J$.G(137, J$.R(121, 'match', match, 0), J$.T(129, 1, 22, false), 4), result, 0));
                                    J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
                                }
                                if (J$.X1(377, J$.C(16, J$.B(10, '!==', J$.R(193, 'result', result, 0), J$.T(201, '', 21, false), 0))))
                                    J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 3, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(353, 'test_match', J$.T(345, test_match, 12, false, 241), 0);
            J$.N(361, 'arg', arg, 0);
            var arg = J$.X1(297, J$.W(289, 'arg', J$.M(281, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(329, J$.F(321, J$.R(305, 'test_match', test_match, 1), 0)(J$.R(313, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
