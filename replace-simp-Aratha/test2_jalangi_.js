J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test2_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(225, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test2_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test2.js');
            function fun(str) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            str = J$.N(153, 'str', str, 4);
                            J$.N(161, 'str1', str1, 0);
                            var str1 = J$.X1(73, J$.W(65, 'str1', J$.M(57, J$.M(33, J$.R(9, 'str', str, 0), 'replace', 0)(J$.T(17, /^\s*/, 14, false), J$.T(25, '', 21, false)), 'replace', 0)(J$.T(41, /\s*$/, 14, false), J$.T(49, '', 21, false)), str1, 1));
                            if (J$.X1(257, J$.C(8, J$.M(97, J$.T(81, /^\s.*\s$/, 14, false), 'test', 0)(J$.R(89, 'str1', str1, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(241, 'fun', J$.T(233, fun, 12, false, 137), 0);
            J$.N(249, 'arg', arg, 0);
            var arg = J$.X1(185, J$.W(177, 'arg', J$.M(169, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(217, J$.F(209, J$.R(193, 'fun', fun, 1), 0)(J$.R(201, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
