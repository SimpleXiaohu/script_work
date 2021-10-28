J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test24.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test24_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test24_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test24.js');
            function test_match(line) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            line = J$.N(153, 'line', line, 4);
                            J$.N(161, 'regex', regex, 0);
                            J$.N(169, 'chunk', chunk, 0);
                            var regex = J$.X1(25, J$.W(17, 'regex', J$.T(9, /(?:(?:\\033[[0-9;]*m)*.?){1,.*}/, 14, false), regex, 1));
                            var chunk = J$.X1(81, J$.W(73, 'chunk', J$.G(65, J$.M(49, J$.R(33, 'line', line, 0), 'match', 0)(J$.R(41, 'regex', regex, 0)), J$.T(57, 0, 22, false), 4), chunk, 1));
                            if (J$.X1(265, J$.C(8, J$.B(10, '!==', J$.R(89, 'chunk', chunk, 0), J$.T(97, '', 21, false), 0))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(249, 'test_match', J$.T(241, test_match, 12, false, 137), 0);
            J$.N(257, 'arg', arg, 0);
            var arg = J$.X1(193, J$.W(185, 'arg', J$.M(177, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(225, J$.F(217, J$.R(201, 'test_match', test_match, 1), 0)(J$.R(209, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
