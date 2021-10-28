J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test35.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test35_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test35_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test35.js');
            function test_match(inputState) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            inputState = J$.N(161, 'inputState', inputState, 4);
                            J$.N(169, 'result', result, 0);
                            var result = J$.X1(57, J$.W(49, 'result', J$.G(41, J$.M(25, J$.R(9, 'inputState', inputState, 0), 'match', 0)(J$.T(17, /\s([a-z|A-Z]+)/, 14, false)), J$.T(33, 1, 22, false), 4), result, 1));
                            if (J$.X1(265, J$.C(16, J$.C(8, J$.R(65, 'result', result, 0)) ? J$.M(105, J$.T(73, /[a-z]+[A-Z]+/, 14, false), 'test', 0)(J$.G(97, J$.R(81, 'result', result, 0), J$.T(89, 0, 22, false), 4)) : J$._())))
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(249, 'test_match', J$.T(241, test_match, 12, false, 145), 0);
            J$.N(257, 'arg', arg, 0);
            var arg = J$.X1(193, J$.W(185, 'arg', J$.M(177, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(225, J$.F(217, J$.R(201, 'test_match', test_match, 1), 0)(J$.R(209, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
