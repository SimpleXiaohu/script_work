J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test30.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test30_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(169, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test30_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test30.js');
            function test_match(result) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            result = J$.N(105, 'result', result, 4);
                            if (J$.X1(201, J$.C(16, J$.C(8, J$.B(10, '!=', J$.R(9, 'result', result, 0), J$.T(17, null, 25, false), 0)) ? J$.B(18, '!=', J$.M(41, J$.R(25, 'result', result, 0), 'match', 0)(J$.T(33, /exception|corrupt/, 14, false)), J$.T(49, null, 25, false), 0) : J$._())))
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(209, J$e);
                        } finally {
                            if (J$.Fr(217))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(185, 'test_match', J$.T(177, test_match, 12, false, 89), 0);
            J$.N(193, 'arg', arg, 0);
            var arg = J$.X1(129, J$.W(121, 'arg', J$.M(113, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(161, J$.F(153, J$.R(137, 'test_match', test_match, 1), 0)(J$.R(145, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
