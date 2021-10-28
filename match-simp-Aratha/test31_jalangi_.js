J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test31.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test31_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(161, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test31_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test31.js');
            function test_match(fullPath) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(81, arguments.callee, this, arguments);
                            arguments = J$.N(89, 'arguments', arguments, 4);
                            fullPath = J$.N(97, 'fullPath', fullPath, 4);
                            if (J$.X1(193, J$.C(16, J$.C(8, J$.B(10, '!=', J$.R(9, 'fullPath', fullPath, 0), J$.T(17, null, 25, false), 0)) ? J$.M(41, J$.R(25, 'fullPath', fullPath, 0), 'match', 0)(J$.T(33, /\d+$/, 14, false)) : J$._())))
                                J$.X1(73, J$.M(65, J$.R(49, 'console', console, 2), 'log', 0)(J$.T(57, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(201, J$e);
                        } finally {
                            if (J$.Fr(209))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(177, 'test_match', J$.T(169, test_match, 12, false, 81), 0);
            J$.N(185, 'arg', arg, 0);
            var arg = J$.X1(121, J$.W(113, 'arg', J$.M(105, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(153, J$.F(145, J$.R(129, 'test_match', test_match, 1), 0)(J$.R(137, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
