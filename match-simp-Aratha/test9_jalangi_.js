J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test9.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test9_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(369, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test9_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test9.js');
            function test_match(text) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(281, arguments.callee, this, arguments);
                            arguments = J$.N(289, 'arguments', arguments, 4);
                            text = J$.N(297, 'text', text, 4);
                            J$.N(305, 'out', out, 0);
                            var out = J$.X1(25, J$.W(17, 'out', J$.T(9, '', 21, false), out, 1));
                            if (J$.X1(409, J$.C(16, J$.R(33, 'text', text, 0)))) {
                                J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, 1, 22, false)));
                                if (J$.X1(401, J$.C(8, J$.M(89, J$.R(73, 'text', text, 0), 'match', 0)(J$.T(81, /\/\*|\*\//, 14, false))))) {
                                    J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.T(105, 2, 22, false)));
                                    throw J$.X1(161, J$.Th(153, J$.F(145, J$.R(129, 'Error', Error, 2), 1)(J$.T(137, 'JSDoc text cannot contain "/*" and "*/"', 21, false))));
                                }
                                J$.X1(225, out = J$.W(217, 'out', J$.B(18, '+', J$.R(209, 'out', out, 0), J$.B(10, '+', J$.T(169, ' ', 21, false), J$.M(201, J$.R(177, 'text', text, 0), 'replace', 0)(J$.T(185, /@/g, 14, false), J$.T(193, '\\@', 21, false)), 0), 0), out, 0));
                            }
                            if (J$.X1(417, J$.C(24, J$.B(26, '!==', J$.R(233, 'out', out, 0), J$.T(241, '', 21, false), 0))))
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(385, 'test_match', J$.T(377, test_match, 12, false, 281), 0);
            J$.N(393, 'arg', arg, 0);
            var arg = J$.X1(329, J$.W(321, 'arg', J$.M(313, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(361, J$.F(353, J$.R(337, 'test_match', test_match, 1), 0)(J$.R(345, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
