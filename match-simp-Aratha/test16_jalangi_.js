J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test16.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test16_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test16_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test16.js');
            function test_match(value) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            value = J$.N(241, 'value', value, 4);
                            J$.N(249, 'BINDING_REGEXP', BINDING_REGEXP, 0);
                            J$.N(257, 'result', result, 0);
                            J$.N(265, 'match', match, 0);
                            var BINDING_REGEXP = J$.X1(25, J$.W(17, 'BINDING_REGEXP', J$.T(9, /(\d+):?\d*/, 14, false), BINDING_REGEXP, 1));
                            var result = J$.X1(49, J$.W(41, 'result', J$.T(33, '', 21, false), result, 1));
                            if (J$.X1(369, J$.C(16, J$.B(10, '!==', J$.R(57, 'value', value, 0), J$.T(65, '', 21, false), 0)))) {
                                J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, 1, 22, false)));
                                var match = J$.X1(137, J$.W(129, 'match', J$.M(121, J$.R(105, 'value', value, 0), 'match', 0)(J$.R(113, 'BINDING_REGEXP', BINDING_REGEXP, 0)), match, 1));
                                if (J$.X1(361, J$.C(8, J$.R(145, 'match', match, 0)))) {
                                    J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, 2, 22, false)));
                                    J$.X1(217, result = J$.W(209, 'result', J$.G(201, J$.R(185, 'match', match, 0), J$.T(193, 1, 22, false), 4), result, 0));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(345, 'test_match', J$.T(337, test_match, 12, false, 225), 0);
            J$.N(353, 'arg', arg, 0);
            var arg = J$.X1(289, J$.W(281, 'arg', J$.M(273, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(321, J$.F(313, J$.R(297, 'test_match', test_match, 1), 0)(J$.R(305, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
