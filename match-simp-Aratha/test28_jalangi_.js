J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test28.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test28_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(353, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test28_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test28.js');
            function test_match(input) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(265, arguments.callee, this, arguments);
                            arguments = J$.N(273, 'arguments', arguments, 4);
                            input = J$.N(281, 'input', input, 4);
                            J$.N(289, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(385, J$.C(8, J$.M(49, J$.R(33, 'input', input, 0), 'match', 0)(J$.T(41, /\[[\s\S]/, 14, false))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(129, result = J$.W(121, 'result', J$.M(113, J$.R(89, 'input', input, 0), 'replace', 0)(J$.T(97, /^\[|\]$/g, 14, false), J$.T(105, '', 21, false)), result, 0));
                            } else {
                                J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 2, 22, false)));
                                J$.X1(209, result = J$.W(201, 'result', J$.M(193, J$.R(169, 'input', input, 0), 'replace', 0)(J$.T(177, /\\/g, 14, false), J$.T(185, '', 21, false)), result, 0));
                            }
                            if (J$.X1(393, J$.C(16, J$.B(10, '!=', J$.R(217, 'result', result, 0), J$.T(225, '', 21, false), 0))))
                                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(401, J$e);
                        } finally {
                            if (J$.Fr(409))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(369, 'test_match', J$.T(361, test_match, 12, false, 265), 0);
            J$.N(377, 'arg', arg, 0);
            var arg = J$.X1(313, J$.W(305, 'arg', J$.M(297, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(345, J$.F(337, J$.R(321, 'test_match', test_match, 1), 0)(J$.R(329, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
