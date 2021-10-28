J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test27.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test27_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(273, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test27_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test27.js');
            function fun(s) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            s = J$.N(201, 's', s, 4);
                            J$.N(209, 'result', result, 0);
                            var result = J$.X1(121, J$.W(113, 'result', J$.M(105, J$.M(81, J$.M(57, J$.M(33, J$.R(9, 's', s, 0), 'replace', 0)(J$.T(17, /\([^)]*\)|[\n\t]/g, 14, false), J$.T(25, ' ', 21, false)), 'replace', 0)(J$.T(41, /(\s\s+)/g, 14, false), J$.T(49, ' ', 21, false)), 'replace', 0)(J$.T(65, /^\s\s*/, 14, false), J$.T(73, '', 21, false)), 'replace', 0)(J$.T(89, /\s\s*$/, 14, false), J$.T(97, '', 21, false)), result, 1));
                            if (J$.X1(305, J$.C(8, J$.M(145, J$.T(129, /\s\s/, 14, false), 'test', 0)(J$.R(137, 'result', result, 0)))))
                                J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(289, 'fun', J$.T(281, fun, 12, false, 185), 0);
            J$.N(297, 'arg', arg, 0);
            var arg = J$.X1(233, J$.W(225, 'arg', J$.M(217, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(265, J$.F(257, J$.R(241, 'fun', fun, 1), 0)(J$.R(249, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
