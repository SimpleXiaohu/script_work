J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test23.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test23_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(241, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test23_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test23.js');
            function test_match(pattern) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            pattern = J$.N(169, 'pattern', pattern, 4);
                            J$.N(177, 'gpattern', gpattern, 0);
                            if (J$.X1(281, J$.C(16, J$.B(10, '===', J$.R(9, 'pattern', pattern, 0), J$.T(17, '/**', 21, false), 0)))) {
                                J$.X1(49, J$.M(41, J$.R(25, 'console', console, 2), 'log', 0)(J$.T(33, 1, 22, false)));
                                var gpattern = J$.X1(97, J$.W(89, 'gpattern', J$.M(81, J$.R(57, 'pattern', pattern, 0), 'replace', 0)(J$.T(65, /(\/\*\*)+$/, 14, false), J$.T(73, '', 21, false)), gpattern, 1));
                                if (J$.X1(273, J$.C(8, J$.B(18, '!==', J$.R(105, 'pattern', pattern, 0), J$.T(113, '', 21, false), 0))))
                                    J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(257, 'test_match', J$.T(249, test_match, 12, false, 153), 0);
            J$.N(265, 'arg', arg, 0);
            var arg = J$.X1(201, J$.W(193, 'arg', J$.M(185, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(233, J$.F(225, J$.R(209, 'test_match', test_match, 1), 0)(J$.R(217, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
