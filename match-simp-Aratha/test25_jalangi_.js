J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test25.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test25_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(273, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test25_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test25.js');
            function test_match(value) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            value = J$.N(193, 'value', value, 4);
                            J$.N(201, 'rnothtmlwhite', rnothtmlwhite, 0);
                            J$.N(209, 'result', result, 0);
                            var rnothtmlwhite = J$.X1(25, J$.W(17, 'rnothtmlwhite', J$.T(9, /[^\x20\t\r\n\f]+/, 14, false), rnothtmlwhite, 1));
                            var result = J$.X1(65, J$.W(57, 'result', J$.M(49, J$.R(33, 'value', value, 0), 'match', 0)(J$.R(41, 'rnothtmlwhite', rnothtmlwhite, 0)), result, 1));
                            if (J$.X1(313, J$.C(16, J$.R(73, 'result', result, 0)))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                if (J$.X1(305, J$.C(8, J$.B(10, '!==', J$.G(129, J$.R(113, 'result', result, 0), J$.T(121, 0, 22, false), 4), J$.T(137, '', 21, false), 0))))
                                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(289, 'test_match', J$.T(281, test_match, 12, false, 177), 0);
            J$.N(297, 'arg', arg, 0);
            var arg = J$.X1(233, J$.W(225, 'arg', J$.M(217, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(265, J$.F(257, J$.R(241, 'test_match', test_match, 1), 0)(J$.R(249, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
