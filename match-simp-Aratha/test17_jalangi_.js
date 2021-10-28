J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test17.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test17_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(145, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test17_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test17.js');
            function test_match(name) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            name = J$.N(81, 'name', name, 4);
                            if (J$.X1(177, J$.C(8, J$.M(25, J$.R(9, 'name', name, 0), 'match', 0)(J$.T(17, /\s+/u, 14, false))))) {
                                J$.X1(57, J$.M(49, J$.R(33, 'console', console, 2), 'log', 0)(J$.T(41, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(185, J$e);
                        } finally {
                            if (J$.Fr(193))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(161, 'test_match', J$.T(153, test_match, 12, false, 65), 0);
            J$.N(169, 'arg', arg, 0);
            var arg = J$.X1(105, J$.W(97, 'arg', J$.M(89, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(137, J$.F(129, J$.R(113, 'test_match', test_match, 1), 0)(J$.R(121, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
