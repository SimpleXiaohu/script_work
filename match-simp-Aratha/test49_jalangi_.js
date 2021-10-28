J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test49.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test49_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test49_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test49.js');
            function test_match(val) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            val = J$.N(217, 'val', val, 4);
                            J$.N(225, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(329, J$.C(16, J$.M(49, J$.R(33, 'val', val, 0), 'match', 0)(J$.T(41, /^--no-.+/, 14, false))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(137, result = J$.W(129, 'result', J$.G(121, J$.M(105, J$.R(89, 'val', val, 0), 'match', 0)(J$.T(97, /^--no-(.+)/, 14, false)), J$.T(113, 0, 22, false), 4), result, 0));
                                if (J$.X1(321, J$.C(8, J$.M(161, J$.T(145, /---/, 14, false), 'test', 0)(J$.R(153, 'result', result, 0)))))
                                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(305, 'test_match', J$.T(297, test_match, 12, false, 201), 0);
            J$.N(313, 'arg', arg, 0);
            var arg = J$.X1(249, J$.W(241, 'arg', J$.M(233, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(281, J$.F(273, J$.R(257, 'test_match', test_match, 1), 0)(J$.R(265, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
