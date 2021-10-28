J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test0.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test0_jalangi_.js"};
jalangiLabel13:
    while (true) {
        try {
            J$.Se(209, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test0_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test0.js');
            function test_match(name) {
                jalangiLabel12:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            name = J$.N(137, 'name', name, 4);
                            J$.N(145, 'sanitizeRegex', sanitizeRegex, 0);
                            var sanitizeRegex = J$.X1(25, J$.W(17, 'sanitizeRegex', J$.T(9, /[^a-zA-Z0-9,-]/, 14, false), sanitizeRegex, 1));
                            if (J$.X1(241, J$.C(8, J$.M(81, J$.G(65, J$.M(49, J$.R(33, 'name', name, 0), 'match', 0)(J$.T(41, /^(.+?)(?:-(.+?))?$/, 14, false)), J$.T(57, 1, 22, false), 4), 'match', 0)(J$.R(73, 'sanitizeRegex', sanitizeRegex, 0))))) {
                                J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(249, J$e);
                        } finally {
                            if (J$.Fr(257))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(225, 'test_match', J$.T(217, test_match, 12, false, 121), 0);
            J$.N(233, 'arg', arg, 0);
            var arg = J$.X1(169, J$.W(161, 'arg', J$.M(153, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(201, J$.F(193, J$.R(177, 'test_match', test_match, 1), 0)(J$.R(185, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel13;
            } else {
                J$.L();
                break jalangiLabel13;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
