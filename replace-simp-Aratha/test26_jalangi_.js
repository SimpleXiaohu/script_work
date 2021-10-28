J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test26.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test26_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test26_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test26.js');
            function fun(input) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            input = J$.N(257, 'input', input, 4);
                            J$.N(265, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(361, J$.C(8, J$.M(49, J$.R(33, 'input', input, 0), 'match', 0)(J$.T(41, /\[[\s\S]/, 14, false))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(129, result = J$.W(121, 'result', J$.M(113, J$.R(89, 'input', input, 0), 'replace', 0)(J$.T(97, /^\[|\]$/g, 14, false), J$.T(105, '', 21, false)), result, 0));
                            }
                            J$.X1(177, result = J$.W(169, 'result', J$.M(161, J$.R(137, 'input', input, 0), 'replace', 0)(J$.T(145, /\\/g, 14, false), J$.T(153, '', 21, false)), result, 0));
                            if (J$.X1(369, J$.C(16, J$.M(201, J$.T(185, /\[/, 14, false), 'test', 0)(J$.R(193, 'result', result, 0)))))
                                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(345, 'fun', J$.T(337, fun, 12, false, 241), 0);
            J$.N(353, 'arg', arg, 0);
            var arg = J$.X1(289, J$.W(281, 'arg', J$.M(273, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(321, J$.F(313, J$.R(297, 'fun', fun, 1), 0)(J$.R(305, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
